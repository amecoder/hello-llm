import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildBadgeSvg,
  drawExam,
  drawLevelExam,
  escapeXml,
  levelFor,
  normalizeName,
  practiceUnlocked,
  scoreExam,
  scoreParts,
  shuffle,
  type ExamQuestion,
  type Question,
} from '../.vitepress/theme/quiz.ts'

// deterministic random so draws are reproducible (mulberry32)
function seeded(seed: number): () => number {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const q = (id: string, chapter: number): Question => ({
  id,
  chapter,
  prompt: `${id}?`,
  choices: ['a', 'b', 'c', 'd'],
  answer: 2,
  explain: '',
})

// 3 chapters x 4 questions
const bank: Question[] = [1, 2, 3].flatMap((ch) => [0, 1, 2, 3].map((n) => q(`ch${ch}-${n}`, ch)))

test('shuffle keeps every item and does not mutate the input', () => {
  const input = [1, 2, 3, 4, 5]
  const out = shuffle(input, seeded(1))
  assert.deepEqual(input, [1, 2, 3, 4, 5])
  assert.deepEqual([...out].sort(), [1, 2, 3, 4, 5])
})

test('drawExam picks the requested number of distinct questions', () => {
  const items = drawExam(bank, seeded(7), 8, 2)
  assert.equal(items.length, 8)
  assert.equal(new Set(items.map((i) => i.question.id)).size, 8)
})

test('drawExam takes at least the minimum from every chapter', () => {
  for (const seed of [1, 2, 3, 4, 5]) {
    const items = drawExam(bank, seeded(seed), 6, 2)
    for (const ch of [1, 2, 3]) {
      assert.equal(items.filter((i) => i.question.chapter === ch).length, 2)
    }
  }
})

test('drawExam orders items by chapter', () => {
  const chapters = drawExam(bank, seeded(3), 9, 2).map((i) => i.question.chapter)
  assert.deepEqual(chapters, [...chapters].sort((a, b) => a - b))
})

test('drawExam shuffles choices but keeps the answer pointing at the same text', () => {
  for (const item of drawExam(bank, seeded(11), 12, 2)) {
    assert.deepEqual([...item.choices].sort(), ['a', 'b', 'c', 'd'])
    assert.equal(item.choices[item.answer], 'c')
  }
})

test('drawExam throws when the bank cannot satisfy the request', () => {
  assert.throws(() => drawExam(bank, seeded(1), 13, 2), /문제가 부족/)
  assert.throws(() => drawExam(bank, seeded(1), 5, 2), /문제가 부족/)
  assert.throws(() => drawExam(bank.slice(0, 5), seeded(1), 5, 2), /문제가 부족/)
})

test('scoreExam counts matching picks and treats unanswered as wrong', () => {
  const items = drawExam(bank, seeded(5), 6, 2)
  const allRight = items.map((i) => i.answer)
  assert.equal(scoreExam(items, allRight), 6)
  assert.equal(scoreExam(items, [allRight[0], null, ...allRight.slice(2)]), 5)
  assert.equal(scoreExam(items, items.map((i) => (i.answer + 1) % 4)), 0)
})

const score = (correct: number, situationCorrect: number) => ({ correct, total: 20, situationCorrect, situationTotal: 10 })

test('levelFor: 60% is the beginner level, nothing below it', () => {
  assert.equal(levelFor(score(12, 2), false), 'beginner')
  assert.equal(levelFor(score(11, 6), false), null)
  assert.equal(levelFor({ correct: 0, total: 0, situationCorrect: 0, situationTotal: 0 }, false), null)
})

test('levelFor: intermediate needs 75% overall and 7 of 10 situation questions', () => {
  assert.equal(levelFor(score(15, 7), false), 'intermediate')
  assert.equal(levelFor(score(15, 6), false), 'beginner')
  assert.equal(levelFor(score(14, 10), false), 'beginner')
})

test('levelFor: advanced needs 90%, 9 situation questions and the practice check', () => {
  assert.equal(levelFor(score(18, 9), true), 'advanced')
  assert.equal(levelFor(score(18, 9), false), 'intermediate')
  assert.equal(levelFor(score(18, 8), true), 'intermediate')
  assert.equal(levelFor(score(17, 10), true), 'intermediate')
  assert.equal(practiceUnlocked(score(18, 9)), true)
  assert.equal(practiceUnlocked(score(18, 8)), false)
})

const eq = (id: string, chapter: number, kind: ExamQuestion['kind']): ExamQuestion => ({ ...q(id, chapter), kind })
// 9 chapters x (2 concept + 2 situation), like the real exam bank
const examBank: ExamQuestion[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].flatMap((ch) => [
  eq(`ex${ch}-c1`, ch, 'concept'),
  eq(`ex${ch}-c2`, ch, 'concept'),
  eq(`ex${ch}-s1`, ch, 'situation'),
  eq(`ex${ch}-s2`, ch, 'situation'),
])

test('drawLevelExam takes 10 concept and 10 situation questions, every chapter at least once each', () => {
  for (const seed of [1, 2, 3, 4, 5, 6]) {
    const items = drawLevelExam(examBank, seeded(seed))
    assert.equal(items.length, 20)
    assert.equal(new Set(items.map((i) => i.question.id)).size, 20)
    const kinds = items.map((i) => (i.question as ExamQuestion).kind)
    assert.equal(kinds.filter((k) => k === 'situation').length, 10)
    for (let ch = 1; ch <= 9; ch++) {
      const inCh = items.filter((i) => i.question.chapter === ch).map((i) => (i.question as ExamQuestion).kind)
      assert.ok(inCh.includes('concept') && inCh.includes('situation'), `seed ${seed} chapter ${ch}`)
    }
    const chapters = items.map((i) => i.question.chapter)
    assert.deepEqual(chapters, [...chapters].sort((a, b) => a - b))
  }
})

test('scoreParts counts situation answers separately', () => {
  const items = drawLevelExam(examBank, seeded(9))
  const picks = items.map((i) => ((i.question as ExamQuestion).kind === 'situation' ? (i.answer + 1) % 4 : i.answer))
  assert.deepEqual(scoreParts(items, picks), { correct: 10, total: 20, situationCorrect: 0, situationTotal: 10 })
})

test('normalizeName trims, caps length and falls back to a default', () => {
  assert.equal(normalizeName('  김하늘  '), '김하늘')
  assert.equal(normalizeName('   '), '학습자')
  assert.equal(normalizeName('가'.repeat(30)).length, 20)
})

test('normalizeName drops characters that would break the badge SVG', () => {
  assert.equal(normalizeName('하\u0001늘\u001f'), '하늘')
  assert.equal(normalizeName('하늘\ud83d'), '하늘') // lone surrogate from a cut emoji
  assert.equal(normalizeName('하늘😀'), '하늘😀')
  assert.doesNotThrow(() => encodeURIComponent(buildBadgeSvg({ name: 'a\ud800b', level: 'advanced', ...score(20, 10), date: 'd' })))
})

test('drawExam mixes the order of questions within a chapter', () => {
  const firstIds = new Set<string>()
  for (let seed = 1; seed <= 30; seed++) firstIds.add(drawExam(bank, seeded(seed), 9, 2)[0].question.id)
  assert.ok(firstIds.size > 2)
})

test('escapeXml neutralises markup characters', () => {
  assert.equal(escapeXml(`<a href="x">&'</a>`), '&lt;a href=&quot;x&quot;&gt;&amp;&apos;&lt;/a&gt;')
})

test('buildBadgeSvg shows level, both scores, date and an escaped name', () => {
  const svg = buildBadgeSvg({ name: '<b>하늘</b>', level: 'intermediate', ...score(15, 7), date: '2026-10-22' })
  assert.ok(svg.startsWith('<svg'))
  assert.ok(svg.includes('중급'))
  assert.ok(svg.includes('15 / 20'))
  assert.ok(svg.includes('7 / 10'))
  assert.ok(svg.includes('2026-10-22'))
  assert.ok(svg.includes('&lt;b&gt;하늘&lt;/b&gt;'))
  assert.ok(!svg.includes('<b>'))
  assert.ok(svg.includes('공식 자격증이 아닙니다'))
})
