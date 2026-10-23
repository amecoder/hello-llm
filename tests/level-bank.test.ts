import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { LEVEL_QUESTIONS } from '../.vitepress/theme/level-bank/index.ts'
import { QUESTIONS } from '../.vitepress/theme/quiz-bank.ts'
import { EXAM_QUESTIONS } from '../.vitepress/theme/exam-bank.ts'
import { drawLevelTest, LEVEL_TESTS, PER_SUBJECT, SUBJECT_COUNT } from '../.vitepress/theme/level-test.ts'

const ROOT = join(import.meta.dirname, '..')

test('every level has 12 questions in each of its 5 subjects', () => {
  for (const { level } of LEVEL_TESTS) {
    for (let s = 1; s <= SUBJECT_COUNT; s++) {
      const n = LEVEL_QUESTIONS.filter((q) => q.level === level && q.subject === s).length
      assert.ok(n >= PER_SUBJECT + 2, `${level} subject ${s}: ${n}`)
    }
  }
})

test('ids are unique and name their level and subject', () => {
  const ids = LEVEL_QUESTIONS.map((q) => q.id)
  assert.equal(new Set(ids).size, ids.length)
  for (const q of LEVEL_QUESTIONS) assert.ok(q.id.startsWith(`${q.level}-s${q.subject}-`), q.id)
})

test('every question has 4 distinct choices, a valid answer, an explanation and no markup', () => {
  for (const q of LEVEL_QUESTIONS) {
    assert.equal(q.choices.length, 4, q.id)
    assert.equal(new Set(q.choices).size, 4, q.id)
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4, q.id)
    assert.ok(q.explain.trim().length > 0, q.id)
    assert.doesNotMatch(q.prompt + q.choices.join('') + q.explain, /<\/?[A-Za-z][^>]*>/, q.id)
  }
})

test('every question points to study material: a guide page that exists or an https source', () => {
  for (const q of LEVEL_QUESTIONS) {
    const { url, title } = q.source
    assert.ok(title.trim(), q.id)
    if (url.startsWith('/guide/')) {
      const file = url.replace(/#.*$/, '').replace(/\/$/, '/index')
      assert.ok(existsSync(join(ROOT, `${file}.md`)) || existsSync(join(ROOT, file, 'README.md')), `${q.id}: ${url}`)
    } else {
      assert.match(url, /^https:\/\//, q.id)
    }
  }
})

test('advanced and expert questions cite outside sources, not only the guide', () => {
  for (const level of ['advanced', 'expert'] as const) {
    const bank = LEVEL_QUESTIONS.filter((q) => q.level === level)
    const outside = bank.filter((q) => q.source.url.startsWith('https://')).length
    assert.ok(outside / bank.length >= 0.8, `${level}: ${outside}/${bank.length}`)
  }
})

test('level questions are not copies of the chapter quizzes or the guide exam', () => {
  const seen = new Set([...QUESTIONS, ...EXAM_QUESTIONS].map((q) => q.prompt))
  for (const q of LEVEL_QUESTIONS) assert.ok(!seen.has(q.prompt), q.id)
  assert.equal(new Set(LEVEL_QUESTIONS.map((q) => q.prompt)).size, LEVEL_QUESTIONS.length)
})

// same guard as the guide exam: neither the longest nor the shortest choice should give the answer away
test('in every level the right answer is rarely the longest or the shortest choice, and positions are spread', () => {
  const len = (s: string) => [...s].length
  for (const { level } of LEVEL_TESTS) {
    const bank = LEVEL_QUESTIONS.filter((q) => q.level === level)
    const longest = bank.filter((q) => q.choices.every((c, i) => i === q.answer || len(c) < len(q.choices[q.answer]))).length
    const shortest = bank.filter((q) => q.choices.every((c, i) => i === q.answer || len(c) > len(q.choices[q.answer]))).length
    assert.ok(longest / bank.length <= 0.4, `${level} longest ${longest}/${bank.length}`)
    assert.ok(shortest / bank.length <= 0.4, `${level} shortest ${shortest}/${bank.length}`)
    for (const pos of [0, 1, 2, 3]) {
      assert.ok(bank.filter((q) => q.answer === pos).length / bank.length <= 1 / 3, `${level} position ${pos}`)
    }
  }
})

test('every level can be drawn into a full 50-question test', () => {
  let a = 7
  const random = () => ((a = (a * 16807) % 2147483647) / 2147483647)
  for (const { level } of LEVEL_TESTS) assert.equal(drawLevelTest(LEVEL_QUESTIONS, level, random).length, SUBJECT_COUNT * PER_SUBJECT)
})
