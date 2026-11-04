import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { routeCount } from '../.vitepress/theme/analytics.ts'

test('the first route change only records the page, which count.js already counted on load', () => {
  // VitePress calls onAfterRouteChange for the initial page too, with a normalized href that can
  // differ from location.pathname (e.g. an address typed without .html)
  assert.deepEqual(routeCount(null, '/hello-llm/guide/a.html'), { lastPath: '/hello-llm/guide/a.html', count: null })
})

test('counts a move to another page with its own path', () => {
  assert.deepEqual(routeCount('/hello-llm/guide/a.html', '/hello-llm/guide/b.html'), {
    lastPath: '/hello-llm/guide/b.html',
    count: '/hello-llm/guide/b.html',
  })
})

test('ignores the hash, so jumping to a heading on the same page is not a new view', () => {
  assert.equal(routeCount('/hello-llm/guide/a.html', '/hello-llm/guide/a.html#step-2').count, null)
  assert.equal(routeCount('/hello-llm/guide/a.html', '/hello-llm/guide/b.html#step-2').count, '/hello-llm/guide/b.html')
})

test('every language home tells readers about the anonymous visit count', () => {
  for (const dir of ['', 'en/', 'ja/', 'zh-hans/', 'zh-hant/', 'es/']) {
    const home = readFileSync(new URL(`../${dir}index.md`, import.meta.url), 'utf-8')
    assert.ok(home.includes('GoatCounter'), `${dir || 'ko/'}index.md`)
  }
})
