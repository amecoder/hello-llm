import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildBadgeSvg,
  drawExam,
  escapeXml,
  gradeFor,
  normalizeName,
  scoreExam,
  shuffle,
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

test('gradeFor uses 90 / 70 / 50 percent cut-offs', () => {
  assert.equal(gradeFor(20, 20), 'gold')
  assert.equal(gradeFor(18, 20), 'gold')
  assert.equal(gradeFor(17, 20), 'silver')
  assert.equal(gradeFor(14, 20), 'silver')
  assert.equal(gradeFor(13, 20), 'bronze')
  assert.equal(gradeFor(10, 20), 'bronze')
  assert.equal(gradeFor(9, 20), null)
  assert.equal(gradeFor(0, 0), null)
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
  assert.doesNotThrow(() => encodeURIComponent(buildBadgeSvg({ name: 'a\ud800b', grade: 'gold', correct: 20, total: 20, date: 'd' })))
})

test('drawExam mixes the order of questions within a chapter', () => {
  const firstIds = new Set<string>()
  for (let seed = 1; seed <= 30; seed++) firstIds.add(drawExam(bank, seeded(seed), 9, 2)[0].question.id)
  assert.ok(firstIds.size > 2)
})

test('escapeXml neutralises markup characters', () => {
  assert.equal(escapeXml(`<a href="x">&'</a>`), '&lt;a href=&quot;x&quot;&gt;&amp;&apos;&lt;/a&gt;')
})

test('buildBadgeSvg shows grade, score, date and an escaped name', () => {
  const svg = buildBadgeSvg({ name: '<b>하늘</b>', grade: 'silver', correct: 15, total: 20, date: '2026-10-22' })
  assert.ok(svg.startsWith('<svg'))
  assert.ok(svg.includes('실버'))
  assert.ok(svg.includes('15 / 20'))
  assert.ok(svg.includes('2026-10-22'))
  assert.ok(svg.includes('&lt;b&gt;하늘&lt;/b&gt;'))
  assert.ok(!svg.includes('<b>'))
  assert.ok(svg.includes('공식 자격증이 아닙니다'))
})
