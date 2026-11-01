import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { QUESTIONS } from '../.vitepress/theme/quiz-bank.ts'
import { TRANSLATED_STAGES, type Lang } from '../.vitepress/theme/i18n.ts'
import { EXAM_QUESTIONS } from '../.vitepress/theme/exam-bank.ts'
import { LEVEL_QUESTIONS } from '../.vitepress/theme/level-bank/index.ts'
import { TRANSLATIONS, chapterTitleOf, localizeLevelQuestion, localizeQuestion } from '../.vitepress/theme/translations/index.ts'
import type { QuestionText } from '../.vitepress/theme/translations/types.ts'
import { STAGES } from '../.vitepress/theme/stages.ts'

const root = join(import.meta.dirname, '..')

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
  })
}

const tags = (text: string) =>
  [...text.matchAll(/<(Quiz|ChapterDone|YouTube|PromptBuilder|CertExam|LevelTest|MyProgress)\b[^>]*\/>/g)].map((m) =>
    m[0].replace(/ title="[^"]*"/, ''),
  )

// every language with translated text; each one must also have its pages under /<lang>/
const langs = Object.keys(TRANSLATIONS) as Exclude<Lang, 'ko'>[]
const pagesOf = (lang: string) => walk(join(root, lang)).map((p) => relative(join(root, lang), p))

// the correct choice should not stand out as the longest or the shortest (≤ 40% each)
function lengthBias(entries: { text: QuestionText; answer: number }[]): { longest: number; shortest: number } {
  let longest = 0
  let shortest = 0
  for (const { text, answer } of entries) {
    const lens = text.choices.map((c) => [...c].length)
    if (lens[answer] === Math.max(...lens)) longest++
    if (lens[answer] === Math.min(...lens)) shortest++
  }
  return { longest: longest / entries.length, shortest: shortest / entries.length }
}

test('there is at least one translated language', () => {
  assert.ok(langs.length > 0)
})

for (const lang of langs) {
  const t = TRANSLATIONS[lang]!
  const pages = pagesOf(lang)

  test(`${lang}: every page translates an existing Korean page`, () => {
    for (const rel of pages) assert.ok(existsSync(join(root, rel)), rel)
  })

  test(`${lang}: every page of a translated stage exists`, () => {
    for (const id of TRANSLATED_STAGES[lang]) {
      const stage = STAGES.find((s) => s.id === id)!
      for (const f of readdirSync(join(root, stage.dir)).filter((f) => f.endsWith('.md'))) {
        assert.ok(pages.includes(join(stage.dir, f)), join(stage.dir, f))
      }
    }
  })

  test(`${lang}: pages keep the same components, in the same order, as the Korean page`, () => {
    for (const rel of pages) {
      assert.deepEqual(tags(readFileSync(join(root, lang, rel), 'utf8')), tags(readFileSync(join(root, rel), 'utf8')), rel)
    }
  })

  test(`${lang}: every quiz on a page has translated text with the same choices`, () => {
    for (const rel of pages) {
      for (const [, id] of readFileSync(join(root, lang, rel), 'utf8').matchAll(/<Quiz id="([^"]+)" \/>/g)) {
        const ko = QUESTIONS.find((q) => q.id === id)
        const text = t.questions[id]
        assert.ok(ko && text, `${rel}: ${id}`)
        assert.equal(text.choices.length, ko.choices.length, id)
        assert.equal(new Set(text.choices).size, text.choices.length, id)
      }
    }
  })

  test(`${lang}: every chapter page has a translated chapter title`, () => {
    for (const rel of pages) {
      const m = /<ChapterDone :chapter="(\d+)" \/>/.exec(readFileSync(join(root, lang, rel), 'utf8'))
      if (m) assert.ok(t.chapters[Number(m[1])], rel)
    }
  })

  test(`${lang}: quiz text keeps the Korean answer index and is not given away by length`, () => {
    const entries = Object.keys(t.questions)
      .map((id) => QUESTIONS.find((q) => q.id === id))
      .filter((q) => q !== undefined)
    for (const q of entries) {
      const local = localizeQuestion(q, lang)
      assert.equal(local.answer, q.answer, q.id)
      assert.equal(local.prompt, t.questions[q.id].prompt, q.id)
      assert.equal(localizeQuestion(q, 'ko'), q, q.id)
    }
    const bias = lengthBias(entries.map((q) => ({ text: t.questions[q.id], answer: q.answer })))
    assert.ok(bias.longest <= 0.4 && bias.shortest <= 0.4, JSON.stringify(bias))
  })

  test(`${lang}: every exam question is translated, keeps its kind, and is not given away by length`, () => {
    for (const q of EXAM_QUESTIONS) {
      const text = t.questions[q.id]
      assert.ok(text, q.id)
      assert.equal(text.choices.length, q.choices.length, q.id)
      assert.equal(new Set(text.choices).size, text.choices.length, q.id)
      assert.ok(!/[가-힣]/.test(JSON.stringify(text)), q.id)
      const local = localizeQuestion(q, lang)
      assert.equal(local.kind, q.kind, q.id)
      assert.equal(local.answer, q.answer, q.id)
    }
    const bias = lengthBias(EXAM_QUESTIONS.map((q) => ({ text: t.questions[q.id], answer: q.answer })))
    assert.ok(bias.longest <= 0.4 && bias.shortest <= 0.4, JSON.stringify(bias))
  })

  test(`${lang}: every level test question is translated, links stay inside the language, no level is biased`, () => {
    for (const level of new Set(LEVEL_QUESTIONS.map((q) => q.level))) {
      const bank = LEVEL_QUESTIONS.filter((q) => q.level === level)
      for (const q of bank) {
        const text = t.level[q.id]
        assert.ok(text, q.id)
        assert.equal(text.choices.length, q.choices.length, q.id)
        assert.equal(new Set(text.choices).size, text.choices.length, q.id)
        const local = localizeLevelQuestion(q, lang)
        assert.equal(local.answer, q.answer, q.id)
        assert.ok(!/[가-힣]/.test(JSON.stringify([local.prompt, local.choices, local.explain, local.source.title])), q.id)
        if (q.source.url.startsWith('/guide/')) assert.ok(local.source.url.startsWith(`/${lang}/guide/`), q.id)
      }
      const bias = lengthBias(bank.map((q) => ({ text: t.level[q.id], answer: q.answer })))
      assert.ok(bias.longest <= 0.4 && bias.shortest <= 0.4, `${level} ${JSON.stringify(bias)}`)
    }
    assert.equal(Object.keys(t.level).length, LEVEL_QUESTIONS.length)
  })

  test(`${lang}: chapter titles fall back to Korean only when missing`, () => {
    for (const [n, title] of Object.entries(t.chapters)) assert.equal(chapterTitleOf(Number(n), lang), title)
  })
}
