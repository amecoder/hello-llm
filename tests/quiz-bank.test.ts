import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { CHAPTERS, QUESTIONS } from '../.vitepress/theme/quiz-bank.ts'
import { STAGES } from '../.vitepress/theme/stages.ts'
import { EXAM_SIZE, MIN_PER_CHAPTER } from '../.vitepress/theme/quiz.ts'


// every <Quiz id="..." /> placed in the chapters, in file order
function quizIdsInChapters(): string[] {
  return STAGES.flatMap((stage) => {
    const dir = join(import.meta.dirname, '..', stage.dir)
    if (!existsSync(dir)) return []
    return readdirSync(dir)
      .filter((f) => /^\d\d-.+\.md$/.test(f))
      .sort()
      .flatMap((f) => [...readFileSync(join(dir, f), 'utf8').matchAll(/<Quiz id="([^"]+)" \/>/g)].map((m) => m[1]))
  })
}

test('question ids are unique', () => {
  const ids = QUESTIONS.map((q) => q.id)
  assert.equal(new Set(ids).size, ids.length)
})

test('every question has distinct choices, a valid answer and an explanation', () => {
  for (const q of QUESTIONS) {
    assert.ok(q.choices.length >= 3, q.id)
    assert.equal(new Set(q.choices).size, q.choices.length, q.id)
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length, q.id)
    assert.ok(q.explain.trim().length > 0, q.id)
    assert.ok(q.id.startsWith(`ch${q.chapter}-`), q.id)
  }
})

test('every chapter has a title, a link and enough questions for the exam', () => {
  for (const ch of Object.keys(CHAPTERS).map(Number)) {
    assert.ok(QUESTIONS.filter((q) => q.chapter === ch).length >= MIN_PER_CHAPTER, `chapter ${ch}`)
  }
  for (const q of QUESTIONS) assert.ok(CHAPTERS[q.chapter], q.id)
  assert.ok(QUESTIONS.length >= EXAM_SIZE)
})

test('correct answers are not stuck in one position', () => {
  const counts = new Map<number, number>()
  for (const q of QUESTIONS) counts.set(q.answer, (counts.get(q.answer) ?? 0) + 1)
  for (const n of counts.values()) assert.ok(n / QUESTIONS.length < 0.5)
})

test('every quiz placed in a chapter exists in the bank, and every question is placed exactly once', () => {
  const placed = quizIdsInChapters()
  const bankIds = new Set(QUESTIONS.map((q) => q.id))
  for (const id of placed) assert.ok(bankIds.has(id), `unknown quiz id in chapters: ${id}`)
  assert.equal(new Set(placed).size, placed.length, 'a quiz id is placed twice')
  assert.deepEqual([...placed].sort(), [...bankIds].sort())
})
