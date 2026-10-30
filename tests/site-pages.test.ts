import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { STAGES } from '../.vitepress/theme/stages.ts'

const ROOT = join(import.meta.dirname, '..')
const read = (path: string) => readFileSync(join(ROOT, path), 'utf8')

// links of the first sidebar group, minus the stage table of contents itself
const sidebarLinks = [...read('.vitepress/config.mts').matchAll(/\{ text: '[^']+', link: '(\/guide\/00-common\/[^']+)' \}/g)]
  .map((m) => m[1])
  .filter((link) => !link.endsWith('/'))

// front matter "link:" lines of a home-layout page (features cards and hero buttons)
function frontLinks(path: string): string[] {
  const front = read(path).split(/^---$/m)[1]
  assert.ok(front, `${path} has no front matter`)
  return [...front.matchAll(/^\s+link: (\S+)$/gm)].map((m) => m[1])
}

test('the table of contents page has a card for every sidebar page, in the same order', () => {
  assert.ok(sidebarLinks.length >= 11)
  const cards = frontLinks('guide/index.md').filter((link) => link.startsWith('/guide/00-common/') && !link.endsWith('/'))
  assert.deepEqual([...new Set(cards)], sidebarLinks)
})

test('the intro page leads readers to the table of contents and to chapter 1', () => {
  const links = frontLinks('index.md')
  assert.ok(links.includes('/guide/'), 'no button to the table of contents')
  assert.ok(links.includes('/guide/00-common/01-what-is-llm'), 'no button to chapter 1')
})

// the top bar keeps two dropdowns: the guide's tables of contents, and shortcuts to the services
const nav = read('.vitepress/config.mts').match(/\n {4}nav: \[\n([\s\S]*?)\n {4}\],\n/)?.[1] ?? ''
// each top-level menu is a multi-line object whose own "text:" sits at 8 spaces
const topMenus = [...nav.matchAll(/^ {8}text: '([^']+)'/gm)].map((m) => m[1])
const menuLinks = (menu: string) => {
  const start = nav.indexOf(`        text: '${menu}'`)
  const end = nav.indexOf('\n      {', start + 1)
  return [...nav.slice(start, end === -1 ? undefined : end).matchAll(/link: '([^']+)'/g)].map((m) => m[1])
}

test('the top bar has only two dropdown menus', () => {
  assert.deepEqual(topMenus, ['목차', '서비스 바로가기'])
})

test('the 목차 menu reaches the full table of contents and every stage, in stage order', () => {
  assert.deepEqual(menuLinks('목차'), ['/guide/', ...STAGES.map((s) => s.link)])
  for (const s of STAGES) assert.ok(nav.includes(`{ text: '${s.title}', link: '${s.link}' }`), s.title)
})

test('the service menu opens each AI service', () => {
  assert.deepEqual(menuLinks('서비스 바로가기'), ['https://chatgpt.com/', 'https://claude.ai/new', 'https://gemini.google.com/app'])
})
