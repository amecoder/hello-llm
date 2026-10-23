import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildLevelBadgeSvg,
  drawLevelTest,
  gradeLevelTest,
  LEVEL_TESTS,
  levelStatus,
  openLevels,
  PER_SUBJECT,
  SUBJECT_COUNT,
  type KnowledgeLevel,
  type LevelQuestion,
} from '../.vitepress/theme/level-test.ts'

function seeded(seed: number): () => number {
  let a = seed
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const q = (level: KnowledgeLevel, subject: number, n: number): LevelQuestion => ({
  id: `${level}-s${subject}-${n}`,
  level,
  subject,
  prompt: `${level} ${subject} ${n}?`,
  choices: ['a', 'b', 'c', 'd'],
  answer: 1,
  explain: '',
  source: { title: 't', url: '/guide/' },
})
// 12 per subject for two levels
const bank = (['basic', 'intermediate'] as const).flatMap((level) =>
  [1, 2, 3, 4, 5].flatMap((s) => Array.from({ length: 12 }, (_, n) => q(level, s, n))),
)

test('a level test has 5 subjects x 10 questions from that level only, subjects in order', () => {
  const items = drawLevelTest(bank, 'basic', seeded(1))
  assert.equal(items.length, SUBJECT_COUNT * PER_SUBJECT)
  assert.equal(new Set(items.map((i) => i.question.id)).size, 50)
  assert.ok(items.every((i) => i.question.level === 'basic'))
  const subjects = items.map((i) => i.question.subject)
  assert.deepEqual(subjects, [...subjects].sort((a, b) => a - b))
  for (const item of items) assert.equal(item.choices[item.answer], 'b')
})

test('retaking draws a different mix of questions', () => {
  const a = new Set(drawLevelTest(bank, 'basic', seeded(1)).map((i) => i.question.id))
  const b = drawLevelTest(bank, 'basic', seeded(2)).map((i) => i.question.id)
  assert.ok(b.some((id) => !a.has(id)))
})

test('drawing fails loudly when a subject has too few questions', () => {
  assert.throws(() => drawLevelTest(bank.filter((x) => x.id !== 'basic-s3-0' && x.id !== 'basic-s3-1' && x.id !== 'basic-s3-2'), 'basic', seeded(1)), /문제가 부족/)
})

// answer the first `right[s]` questions of each subject correctly
function picksFor(items: ReturnType<typeof drawLevelTest>, right: number[]) {
  const seen = [0, 0, 0, 0, 0]
  return items.map((item) => {
    const s = item.question.subject - 1
    return seen[s]++ < right[s] ? item.answer : (item.answer + 1) % 4
  })
}

test('pass needs 60% overall and at least 4 of 10 in every subject', () => {
  const items = drawLevelTest(bank, 'basic', seeded(3))
  assert.equal(gradeLevelTest(items, picksFor(items, [6, 6, 6, 6, 6])).passed, true)
  const failSubject = gradeLevelTest(items, picksFor(items, [10, 10, 3, 10, 10]))
  assert.equal(failSubject.correct, 43)
  assert.equal(failSubject.passed, false)
  assert.deepEqual(failSubject.failedSubjects, [3])
  assert.equal(gradeLevelTest(items, picksFor(items, [4, 4, 4, 4, 4])).passed, false)
  assert.equal(gradeLevelTest(items, picksFor(items, [4, 8, 6, 6, 6])).passed, true)
})

test('exact boundaries: 30 of 50 passes, 29 fails; a subject at 4 passes, at 3 fails', () => {
  const items = drawLevelTest(bank, 'basic', seeded(5))
  assert.equal(gradeLevelTest(items, picksFor(items, [6, 6, 6, 6, 6])).correct, 30)
  const r29 = gradeLevelTest(items, picksFor(items, [5, 6, 6, 6, 6]))
  assert.equal(r29.correct, 29)
  assert.equal(r29.passed, false)
  assert.deepEqual(r29.failedSubjects, [])
  const r30fail = gradeLevelTest(items, picksFor(items, [3, 7, 7, 7, 6]))
  assert.equal(r30fail.correct, 30)
  assert.equal(r30fail.passed, false)
  assert.deepEqual(r30fail.failedSubjects, [1])
})

test('the level test page states the same pass rules as the code', async () => {
  const { readFileSync } = await import('node:fs')
  const { join } = await import('node:path')
  const { PASS_TOTAL, PASS_SUBJECT } = await import('../.vitepress/theme/level-test.ts')
  const page = readFileSync(join(import.meta.dirname, '..', 'guide', '00-common', 'level-test.md'), 'utf8')
  const total = SUBJECT_COUNT * PER_SUBJECT
  assert.ok(page.includes(`${SUBJECT_COUNT}과목에서 ${PER_SUBJECT}문제씩, 모두 **${total}문제**`))
  assert.ok(page.includes(`**${Math.ceil(PASS_TOTAL * total)}문제 이상(${PASS_TOTAL * 100}%)**`))
  assert.ok(page.includes(`**모든 과목에서 ${Math.ceil(PASS_SUBJECT * PER_SUBJECT)}문제 이상(${PASS_SUBJECT * 100}%)**`))
})

test('a passed level that is not reachable in order is not shown as passed', () => {
  assert.equal(levelStatus('advanced', ['advanced']), 'locked')
  assert.equal(levelStatus('basic', ['basic']), 'passed')
  assert.equal(levelStatus('intermediate', ['basic']), 'open')
  assert.equal(levelStatus('advanced', ['basic']), 'locked')
})

test('unanswered questions count as wrong, and the result lists every subject', () => {
  const items = drawLevelTest(bank, 'basic', seeded(4))
  const r = gradeLevelTest(items, items.map(() => null))
  assert.equal(r.correct, 0)
  assert.equal(r.subjects.length, 5)
  assert.ok(r.subjects.every((s) => s.total === 10))
})

test('levels open one at a time as the previous one is passed', () => {
  assert.deepEqual(openLevels([]), ['basic'])
  assert.deepEqual(openLevels(['basic']), ['basic', 'intermediate'])
  assert.deepEqual(openLevels(['basic', 'intermediate', 'advanced']), ['basic', 'intermediate', 'advanced', 'expert'])
  // passing a higher level without the lower one (old record) does not skip ahead
  assert.deepEqual(openLevels(['intermediate']), ['basic'])
})

test('every level has 5 named subjects', () => {
  assert.deepEqual(LEVEL_TESTS.map((l) => l.level), ['basic', 'intermediate', 'advanced', 'expert'])
  for (const l of LEVEL_TESTS) assert.equal(l.subjects.length, SUBJECT_COUNT)
})

test('the level badge shows level, score and an escaped name, and says it is not an official certificate', () => {
  const svg = buildLevelBadgeSvg({ name: '<b>하늘</b>', level: 'advanced', correct: 41, total: 50, date: '2026-10-23' })
  assert.ok(svg.startsWith('<svg'))
  assert.ok(svg.includes('고급'))
  assert.ok(svg.includes('41 / 50'))
  assert.ok(svg.includes('&lt;b&gt;하늘&lt;/b&gt;'))
  assert.ok(!svg.includes('<b>'))
  assert.ok(svg.includes('공식 자격증이 아닙니다'))
})

test('a long name is shrunk so it stays inside the badge', () => {
  const short = buildLevelBadgeSvg({ name: '하늘', level: 'basic', correct: 30, total: 50, date: 'd' })
  const long = buildLevelBadgeSvg({ name: '가'.repeat(20), level: 'basic', correct: 30, total: 50, date: 'd' })
  const size = (svg: string) => Number(svg.match(/font-size="(\d+)" font-weight="700" fill="#111827">/)![1])
  assert.equal(size(short), 40)
  assert.ok(size(long) * 20 <= 430, `font ${size(long)}`)
})
