import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const CHAPTERS = ['02-why-it-matters.md', '03-why-learn.md', '04-prompt-basics.md']
const HEADINGS: Record<string, string> = {
  '': '## 용어 정리',
  en: '## Glossary',
  ja: '## 用語まとめ',
  'zh-hans': '## 术语整理',
  'zh-hant': '## 術語整理',
  es: '## Glosario',
}

for (const [lang, heading] of Object.entries(HEADINGS)) {
  test(`chapters 2 to 4 end with a glossary table (${lang || 'ko'})`, () => {
    for (const chapter of CHAPTERS) {
      const text = readFileSync(join(root, lang, 'guide', '00-common', chapter), 'utf8')
      const start = text.indexOf(`\n${heading}\n`)
      assert.ok(start > 0, `${lang}/${chapter}: no glossary`)
      const rows = text.slice(start).split('\n').filter((l) => l.startsWith('|'))
      assert.ok(rows.length >= 4, `${lang}/${chapter}: table has ${rows.length} rows`)
      assert.ok(start < text.indexOf('<ChapterDone'), `${lang}/${chapter}: glossary after ChapterDone`)
    }
  })
}
