import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const GUIDE = join(import.meta.dirname, '..', 'guide')

function markdownFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return markdownFiles(path)
    return name.endsWith('.md') ? [path] : []
  })
}

const pages = markdownFiles(GUIDE).map((path) => ({ path, md: readFileSync(path, 'utf8') }))

test('every YouTube link in the guide has an embedded player for the same video', () => {
  let linked = 0
  for (const { path, md } of pages) {
    const linkIds = [...md.matchAll(/youtube\.com\/watch\?v=([\w-]+)/g)].map((m) => m[1])
    const embedIds = [...md.matchAll(/<YouTube id="([\w-]+)" title="[^"]+" \/>/g)].map((m) => m[1])
    assert.deepEqual(embedIds, linkIds, path)
    linked += linkIds.length
  }
  assert.ok(linked > 0)
})

test('video sections no longer tell readers that the links leave the site', () => {
  for (const { path, md } of pages) {
    assert.doesNotMatch(md, /링크는 YouTube로 이동합니다/, path)
  }
})
