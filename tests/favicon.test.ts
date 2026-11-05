import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')

test('the site ships its own favicon, without any service logo', () => {
  const file = join(root, 'public', 'favicon.svg')
  assert.ok(existsSync(file))
  assert.match(readFileSync(file, 'utf8'), /^<svg /)
})

test('every page links the favicon under the site base path', () => {
  const config = readFileSync(join(root, '.vitepress', 'config.mts'), 'utf8')
  assert.match(config, /rel: 'icon'[^\]]*href: '\/hello-llm\/favicon\.svg'/)
})
