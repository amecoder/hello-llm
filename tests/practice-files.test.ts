import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

// Translated pages link to practice files in their own language (public/practice/<lang>/),
// which carry English file names and translated contents.
const LANGS = ['en', 'ja', 'zh-hans', 'zh-hant'] as const
const ROOT = join(import.meta.dirname, '..')

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

const koreanFiles = walk(join(ROOT, 'public/practice')).filter(
  (p) => !LANGS.some((l) => relative(join(ROOT, 'public/practice'), p).startsWith(`${l}/`)),
)

for (const lang of LANGS) {
  test(`${lang}: every practice file has a translated copy with a non-Korean name`, () => {
    const files = walk(join(ROOT, 'public/practice', lang))
    assert.equal(files.length, koreanFiles.length)
    for (const f of files) {
      const rel = relative(join(ROOT, 'public/practice', lang), f)
      assert.doesNotMatch(rel, /[가-힣]/, `${lang}: Korean file name ${rel}`)
      assert.ok(readFileSync(f, 'utf8').trim().length > 0, `${lang}: empty file ${rel}`)
    }
  })

  test(`${lang}: pages link only to practice files of their own language, and they exist`, () => {
    const pages = walk(join(ROOT, lang, 'guide')).filter((p) => p.endsWith('.md'))
    let links = 0
    for (const page of pages) {
      for (const m of readFileSync(page, 'utf8').matchAll(/\]\((\/practice\/[^)\s]+)\)/g)) {
        links++
        const target = m[1]
        const where = relative(ROOT, page)
        assert.ok(target.startsWith(`/practice/${lang}/`), `${where}: ${target} is not a ${lang} practice file`)
        assert.ok(existsSync(join(ROOT, 'public', target)), `${where}: ${target} does not exist`)
      }
    }
    assert.ok(links > 0)
  })
}
