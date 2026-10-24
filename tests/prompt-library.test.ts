import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { slugify } from '../.vitepress/slugify.ts'

const GUIDE = join(import.meta.dirname, '..', 'guide', '00-common')
const LIBRARY = readFileSync(join(GUIDE, 'prompt-library.md'), 'utf8')

// the library may also collect prompts from the 2단계 ChatGPT guide (linked as ../11-chatgpt/NN-x.md)
const CHATGPT = join(import.meta.dirname, '..', 'guide', '11-chatgpt')
const chapterPaths = [GUIDE, CHATGPT].flatMap((dir) =>
  readdirSync(dir).filter((f) => /^\d\d-.+\.md$/.test(f)).map((f) => join(dir, f)),
)
const chapterCode = new Set(chapterPaths.flatMap((p) => codeBlocks(readFileSync(p, 'utf8'))))
const linkRe = /\]\(((?:\.\.\/11-chatgpt\/)?\d\d-[a-z-]+\.md)#([^)]+)\)/

// contents of every fenced code block, in file order
function codeBlocks(md: string): string[] {
  return [...md.matchAll(/^```[^\n]*\n([\s\S]*?)^```$/gm)].map((m) => m[1])
}

test('the library collects a useful number of prompts', () => {
  assert.ok(codeBlocks(LIBRARY).length >= 25)
})

test('every prompt in the library is copied word for word from a chapter', () => {
  for (const block of codeBlocks(LIBRARY)) {
    assert.ok(chapterCode.has(block), `not found in any chapter:\n${block}`)
  }
})

test('library prompts use markdown headings and fences, not XML tags', () => {
  // readers copy these as is; tag pairs are hard to type correctly, chapter 7 teaches them separately
  for (const block of codeBlocks(LIBRARY)) {
    assert.doesNotMatch(block, /<\/?[\p{L}_][\p{L}\d_.-]*(\s[^<>]*)?\/?>/u, `XML tag in library prompt:\n${block}`)
  }
})

test('no prompt is listed twice', () => {
  const blocks = codeBlocks(LIBRARY)
  assert.equal(new Set(blocks).size, blocks.length)
})

type Section = { id: string; level: number; body: string }

// headings of a chapter with the text under each one (up to the next heading of the same or
// higher level), ids built the same way the site builds them
function sections(md: string, file: string): Section[] {
  const lines = md.split('\n')
  const heads: { id: string; level: number; line: number }[] = []
  let inCode = false
  lines.forEach((l, i) => {
    if (l.startsWith('```')) inCode = !inCode
    const m = !inCode && l.match(/^(#{2,6}) (.+)$/)
    if (!m) return
    const explicit = m[2].match(/\{#([^}]+)\}\s*$/)
    // this simple id builder skips inline markup; fail loudly instead of guessing
    assert.ok(explicit || !/[*`[]/.test(m[2]), `${file}: heading with markup needs an explicit {#id}: ${m[2]}`)
    heads.push({ id: explicit ? explicit[1] : slugify(m[2].trim()), level: m[1].length, line: i })
  })
  const ids = heads.map((h) => h.id)
  // the site would add -1, -2 to repeated ids; this test does not, so it must not see any
  assert.equal(new Set(ids).size, ids.length, `${file}: repeated heading id`)
  return heads.map((h, k) => {
    const end = heads.slice(k + 1).find((n) => n.level <= h.level)?.line ?? lines.length
    return { id: h.id, level: h.level, body: lines.slice(h.line, end).join('\n') }
  })
}

test('every prompt sits inside the chapter section its link points to', () => {
  const entries = LIBRARY.split(/^### /m).slice(1)
  for (const entry of entries) {
    const [, file, hash] = entry.match(linkRe) ?? []
    assert.ok(file, `no section link: ${entry.split('\n')[0]}`)
    const section = sections(readFileSync(join(GUIDE, file), 'utf8'), file).find((s) => s.id === hash)
    assert.ok(section, `${file}#${hash} has no matching heading`)
    for (const block of codeBlocks(entry)) {
      assert.ok(section?.body.includes(block), `prompt is not in ${file}#${hash}:\n${block}`)
    }
  }
})

test('every prompt points back to the chapter that explains it', () => {
  // each "### " entry must contain a link to a numbered chapter
  const entries = LIBRARY.split(/^### /m).slice(1)
  assert.ok(entries.length >= 25)
  for (const entry of entries) {
    assert.match(entry, /\]\((?:\.\.\/11-chatgpt\/)?\d\d-[a-z-]+\.md(#[^)]+)?\)/, `no chapter link: ${entry.split('\n')[0]}`)
  }
})
