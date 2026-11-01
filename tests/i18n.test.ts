import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { QUESTIONS } from '../.vitepress/theme/quiz-bank.ts'
import { CHAPTER_TITLE_EN, QUESTION_TEXT_EN, localizeQuestion } from '../.vitepress/theme/quiz-bank-en.ts'
import { TRANSLATED_STAGES } from '../.vitepress/theme/i18n.ts'
import { EXAM_QUESTIONS } from '../.vitepress/theme/exam-bank.ts'
import { EXAM_TEXT_EN } from '../.vitepress/theme/exam-bank-en.ts'
import { STAGES } from '../.vitepress/theme/stages.ts'

const root = join(import.meta.dirname, '..')
const enRoot = join(root, 'en')

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
  })
}

const enPages = walk(enRoot).map((p) => relative(enRoot, p))
const tags = (text: string) => [...text.matchAll(/<(Quiz|ChapterDone|YouTube|PromptBuilder|CertExam|LevelTest|MyProgress)\b[^>]*\/>/g)].map((m) => m[0])

test('every English page translates an existing Korean page', () => {
  for (const rel of enPages) assert.ok(existsSync(join(root, rel)), rel)
})

test('every page of a translated stage has an English version', () => {
  for (const id of TRANSLATED_STAGES.en) {
    const stage = STAGES.find((s) => s.id === id)!
    for (const f of readdirSync(join(root, stage.dir)).filter((f) => f.endsWith('.md'))) {
      assert.ok(enPages.includes(join(stage.dir, f)), join(stage.dir, f))
    }
  }
})

test('English pages keep the same components, in the same order, as the Korean page', () => {
  for (const rel of enPages) {
    const ko = tags(readFileSync(join(root, rel), 'utf8')).map((t) => t.replace(/ title="[^"]*"/, ''))
    const en = tags(readFileSync(join(enRoot, rel), 'utf8')).map((t) => t.replace(/ title="[^"]*"/, ''))
    assert.deepEqual(en, ko, rel)
  }
})

test('every quiz on an English page has English text with the same number of choices', () => {
  for (const rel of enPages) {
    for (const [, id] of readFileSync(join(enRoot, rel), 'utf8').matchAll(/<Quiz id="([^"]+)" \/>/g)) {
      const ko = QUESTIONS.find((q) => q.id === id)
      const en = QUESTION_TEXT_EN[id]
      assert.ok(ko && en, `${rel}: ${id}`)
      assert.equal(en.choices.length, ko.choices.length, id)
      assert.equal(new Set(en.choices).size, en.choices.length, id)
    }
  }
})

test('English quiz text belongs to a real question and keeps the Korean answer index', () => {
  for (const id of Object.keys(QUESTION_TEXT_EN)) {
    const ko = QUESTIONS.find((q) => q.id === id)
    assert.ok(ko, id)
    const en = localizeQuestion(ko, 'en')
    assert.equal(en.answer, ko.answer, id)
    assert.equal(en.prompt, QUESTION_TEXT_EN[id].prompt, id)
    assert.equal(localizeQuestion(ko, 'ko'), ko, id)
  }
})

test('English answers are not given away by length (≤ 40% longest or shortest)', () => {
  const ids = Object.keys(QUESTION_TEXT_EN)
  let longest = 0
  let shortest = 0
  for (const id of ids) {
    const lens = QUESTION_TEXT_EN[id].choices.map((c) => c.length)
    const answer = QUESTIONS.find((q) => q.id === id)!.answer
    if (lens[answer] === Math.max(...lens)) longest++
    if (lens[answer] === Math.min(...lens)) shortest++
  }
  assert.ok(longest / ids.length <= 0.4, `longest ${longest}/${ids.length}`)
  assert.ok(shortest / ids.length <= 0.4, `shortest ${shortest}/${ids.length}`)
})

test('every translated chapter page has an English chapter title', () => {
  for (const rel of enPages) {
    const m = /<ChapterDone :chapter="(\d+)" \/>/.exec(readFileSync(join(enRoot, rel), 'utf8'))
    if (m) assert.ok(CHAPTER_TITLE_EN[Number(m[1])], rel)
  }
})

test('every exam question has English text with the same choices count, and answers are not given away by length', () => {
  let longest = 0
  let shortest = 0
  for (const q of EXAM_QUESTIONS) {
    const en = EXAM_TEXT_EN[q.id]
    assert.ok(en, q.id)
    assert.equal(en.choices.length, q.choices.length, q.id)
    assert.equal(new Set(en.choices).size, en.choices.length, q.id)
    assert.ok(!/[가-힣]/.test(JSON.stringify(en)), q.id)
    const lens = en.choices.map((c) => c.length)
    if (lens[q.answer] === Math.max(...lens)) longest++
    if (lens[q.answer] === Math.min(...lens)) shortest++
  }
  assert.equal(Object.keys(EXAM_TEXT_EN).length, EXAM_QUESTIONS.length)
  assert.ok(longest / EXAM_QUESTIONS.length <= 0.4, `longest ${longest}`)
  assert.ok(shortest / EXAM_QUESTIONS.length <= 0.4, `shortest ${shortest}`)
})

test('localizeQuestion keeps the exam fields (kind) and swaps only the text', () => {
  const q = EXAM_QUESTIONS[0]
  const en = localizeQuestion(q, 'en')
  assert.equal(en.kind, q.kind)
  assert.equal(en.answer, q.answer)
  assert.equal(en.prompt, EXAM_TEXT_EN[q.id].prompt)
})

test('every level test question has English text, and English answers are not given away by length', async () => {
  const { LEVEL_QUESTIONS } = await import('../.vitepress/theme/level-bank/index.ts')
  const { LEVEL_TEXT_EN, localizeLevelQuestion } = await import('../.vitepress/theme/level-bank-en/index.ts')
  const levels = [...new Set(LEVEL_QUESTIONS.map((q) => q.level))]
  for (const level of levels) {
    const bank = LEVEL_QUESTIONS.filter((q) => q.level === level)
    let longest = 0
    let shortest = 0
    for (const q of bank) {
      const en = LEVEL_TEXT_EN[q.id]
      assert.ok(en, q.id)
      assert.equal(en.choices.length, q.choices.length, q.id)
      assert.equal(new Set(en.choices).size, en.choices.length, q.id)
      const lens = en.choices.map((c: string) => c.length)
      if (lens[q.answer] === Math.max(...lens)) longest++
      if (lens[q.answer] === Math.min(...lens)) shortest++
      const local = localizeLevelQuestion(q, 'en')
      assert.equal(local.answer, q.answer, q.id)
      assert.ok(!/[가-힣]/.test(JSON.stringify([local.prompt, local.choices, local.explain, local.source.title])), q.id)
      if (q.source.url.startsWith('/guide/')) assert.ok(local.source.url.startsWith('/en/guide/'), q.id)
    }
    assert.ok(longest / bank.length <= 0.4, `${level} longest ${longest}/${bank.length}`)
    assert.ok(shortest / bank.length <= 0.4, `${level} shortest ${shortest}/${bank.length}`)
  }
  assert.equal(Object.keys(LEVEL_TEXT_EN).length, LEVEL_QUESTIONS.length)
})
