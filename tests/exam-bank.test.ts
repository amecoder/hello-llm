import { test } from 'node:test'
import assert from 'node:assert/strict'
import { CHAPTERS, QUESTIONS } from '../.vitepress/theme/quiz-bank.ts'
import { EXAM_CHAPTERS, EXAM_QUESTIONS } from '../.vitepress/theme/exam-bank.ts'
import { drawLevelExam, PRACTICE_CHECKS } from '../.vitepress/theme/quiz.ts'

const chapters = EXAM_CHAPTERS

test('exam question ids are unique and name their chapter', () => {
  const ids = EXAM_QUESTIONS.map((q) => q.id)
  assert.equal(new Set(ids).size, ids.length)
  for (const q of EXAM_QUESTIONS) assert.ok(q.id.startsWith(`ex${q.chapter}-`), q.id)
})

test('every chapter has at least 2 concept and 2 situation questions', () => {
  for (const ch of chapters) {
    const inCh = EXAM_QUESTIONS.filter((q) => q.chapter === ch)
    assert.ok(inCh.filter((q) => q.kind === 'concept').length >= 2, `chapter ${ch} concept`)
    assert.ok(inCh.filter((q) => q.kind === 'situation').length >= 2, `chapter ${ch} situation`)
  }
  for (const q of EXAM_QUESTIONS) assert.ok(CHAPTERS[q.chapter] && chapters.includes(q.chapter), q.id)
})

test('chapter 10 practice ends with the same checklist as the advanced-level practice task', async () => {
  const { readFileSync } = await import('node:fs')
  const { join } = await import('node:path')
  const md = readFileSync(join(import.meta.dirname, '..', 'guide', '00-common', '10-practice.md'), 'utf8')
  const final = md.slice(md.indexOf('## 종합 과제'))
  for (const check of PRACTICE_CHECKS) assert.ok(final.includes(`- ☐ ${check.text}`), check.text)
})

test('every exam question has 4 distinct choices, a valid answer and an explanation', () => {
  for (const q of EXAM_QUESTIONS) {
    assert.equal(q.choices.length, 4, q.id)
    assert.equal(new Set(q.choices).size, 4, q.id)
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, q.id)
    assert.ok(q.explain.trim().length > 0, q.id)
    assert.doesNotMatch(q.prompt + q.choices.join('') + q.explain, /<\/?[A-Za-z][^>]*>/, q.id)
  }
})

test('exam questions are not copies of the chapter quizzes', () => {
  const quizPrompts = new Set(QUESTIONS.map((q) => q.prompt))
  for (const q of EXAM_QUESTIONS) assert.ok(!quizPrompts.has(q.prompt), q.id)
})

test('correct answers are spread over the four positions', () => {
  for (const pos of [0, 1, 2, 3]) {
    const n = EXAM_QUESTIONS.filter((q) => q.answer === pos).length
    assert.ok(n / EXAM_QUESTIONS.length <= 1 / 3, `position ${pos}: ${n}`)
  }
})

test('the real bank can always be drawn into a 20-question exam', () => {
  for (let seed = 1; seed <= 20; seed++) {
    let a = seed
    const random = () => ((a = (a * 16807) % 2147483647) / 2147483647)
    assert.equal(drawLevelExam(EXAM_QUESTIONS, random).length, 20)
  }
})

// picking "the longest choice" must not be a winning strategy
type Choices = readonly { choices: readonly string[]; answer: number }[]
// share of questions whose answer is strictly longer (or shorter) than every other choice
function extremeShare(bank: Choices, sign: 1 | -1): number {
  const hits = bank.filter((q) => {
    const len = [...q.choices[q.answer]].length
    return q.choices.every((c, i) => i === q.answer || sign * ([...c].length - len) < 0)
  })
  return hits.length / bank.length
}

test('the right answer is rarely the longest or the shortest choice, in the exam and in the chapter quizzes', () => {
  for (const [name, bank] of [['exam', EXAM_QUESTIONS], ['quizzes', QUESTIONS]] as const) {
    assert.ok(extremeShare(bank, 1) <= 0.4, `${name} longest: ${extremeShare(bank, 1)}`)
    assert.ok(extremeShare(bank, -1) <= 0.4, `${name} shortest: ${extremeShare(bank, -1)}`)
  }
})

test('the level table on the exam page matches the level rules in code', async () => {
  const { readFileSync } = await import('node:fs')
  const { join } = await import('node:path')
  const { LEVELS, EXAM_SIZE, SITUATION_SIZE } = await import('../.vitepress/theme/quiz.ts')
  const page = readFileSync(join(import.meta.dirname, '..', 'guide', '00-common', 'certificate.md'), 'utf8')
  for (const l of LEVELS) {
    const row = page.split('\n').find((line) => line.startsWith(`| ${l.label} |`))
    assert.ok(row, `no table row for ${l.label}`)
    assert.ok(row.includes(`전체 ${Math.ceil(l.min * EXAM_SIZE)}문제 이상(${Math.round(l.min * 100)}%)`), row)
    if (l.minSituation > 0) assert.ok(row.includes(`상황 판단 ${Math.ceil(l.minSituation * SITUATION_SIZE)}문제 이상`), row)
    assert.equal(row.includes('실습 과제'), l.needsPractice, row)
  }
})
