import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

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
