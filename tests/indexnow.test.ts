import { test } from 'node:test'
import assert from 'node:assert/strict'
import { changedUrls, indexNowBody } from '../scripts/indexnow.mjs'

const sitemap = (...entries: [string, string][]) =>
  `<urlset>${entries.map(([loc, lastmod]) => `<url><loc>${loc}</loc><xhtml:link href="x"/><lastmod>${lastmod}</lastmod></url>`).join('')}</urlset>`

test('lists pages that are new or have a newer date, and nothing else', () => {
  const before = sitemap(['https://a/same', '2026-01-01'], ['https://a/edited', '2026-01-01'], ['https://a/gone', '2026-01-01'])
  const after = sitemap(['https://a/same', '2026-01-01'], ['https://a/edited', '2026-02-01'], ['https://a/new', '2026-02-01'])
  assert.deepEqual(changedUrls(before, after), ['https://a/edited', 'https://a/new'])
})

test('lists nothing when the site did not change', () => {
  const same = sitemap(['https://a/x', '2026-01-01'])
  assert.deepEqual(changedUrls(same, same), [])
})

test('sends the host, key and the key file address with the list', () => {
  const body = indexNowBody(['https://amecoder.github.io/hello-llm/a.html'])
  assert.equal(body.host, 'amecoder.github.io')
  assert.match(body.key, /^[0-9a-f]{32}$/)
  assert.equal(body.keyLocation, `https://amecoder.github.io/${body.key}.txt`)
  assert.deepEqual(body.urlList, ['https://amecoder.github.io/hello-llm/a.html'])
})
