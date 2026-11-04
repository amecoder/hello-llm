// Tells IndexNow engines (Bing, Naver and others) which pages a deploy changed.
//   node scripts/indexnow.mjs list   compare the live sitemap with the new build, write the changed URLs
//   node scripts/indexnow.mjs send   post that list; run after the deploy so engines fetch the new pages
// The key is public by design: the same value is served at keyLocation, in amecoder/amecoder.github.io.
import { readFileSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const HOST = 'amecoder.github.io'
const KEY = 'fff075dcf777b68d0039a454a615461b'
const SITEMAP_URL = `https://${HOST}/hello-llm/sitemap.xml`
const BUILT_SITEMAP = '.vitepress/dist/sitemap.xml'
const URL_LIST = 'indexnow-urls.json'

function lastModified(sitemap) {
  const entries = sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? []
  return new Map(entries.map((e) => [e.match(/<loc>(.*?)<\/loc>/)[1], e.match(/<lastmod>(.*?)<\/lastmod>/)?.[1]]))
}

export function changedUrls(before, after) {
  const known = lastModified(before)
  return [...lastModified(after)].filter(([url, date]) => known.get(url) !== date).map(([url]) => url)
}

export function indexNowBody(urlList) {
  return { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }
}

async function list() {
  const live = await fetch(SITEMAP_URL)
  if (!live.ok) throw new Error(`live sitemap: HTTP ${live.status}`)
  const urls = changedUrls(await live.text(), readFileSync(BUILT_SITEMAP, 'utf-8'))
  writeFileSync(URL_LIST, JSON.stringify(urls))
  console.log(`${urls.length} changed page(s)`)
}

async function send() {
  const urls = JSON.parse(readFileSync(URL_LIST, 'utf-8'))
  if (!urls.length) return console.log('nothing to send')
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(indexNowBody(urls)),
  })
  console.log(`sent ${urls.length} page(s): HTTP ${res.status}`)
  if (!res.ok) throw new Error(await res.text())
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const commands = { list, send }
  const run = commands[process.argv[2]]
  if (!run) throw new Error('usage: node scripts/indexnow.mjs list|send')
  await run()
}
