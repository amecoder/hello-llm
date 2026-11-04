import { test } from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { SITE_URL, ogImage, seoHead } from '../.vitepress/seo.ts'

const pngSize = (path: string) => {
  const png = readFileSync(path)
  return [png.readUInt32BE(16), png.readUInt32BE(20)]
}

test('picks the image of the page stage, and the site image elsewhere', () => {
  assert.equal(ogImage('guide/11-chatgpt/02-screen-tour.md'), SITE_URL + 'og/11-chatgpt.png')
  assert.equal(ogImage('ja/guide/30-ai-sdlc/index.md'), SITE_URL + 'og/30-ai-sdlc.png')
  assert.equal(ogImage('es/index.md'), SITE_URL + 'og/home.png')
  assert.equal(ogImage('guide/index.md'), SITE_URL + 'og/home.png')
})

test('every stage has a 16:9 image file', () => {
  const stages = readdirSync('guide', { withFileTypes: true }).filter((e) => e.isDirectory() && e.name !== 'assets')
  for (const name of [...stages.map((s) => s.name), 'home']) {
    const file = `public/og/${name}.png`
    assert.ok(existsSync(file), file)
    assert.deepEqual(pngSize(file), [1200, 675], file)
  }
})

test('adds the image to the link card and to the Article data', () => {
  const head = seoHead({ relativePath: 'guide/10-claude/a.md', title: 't', description: 'd', pages: new Set(), titleOf: () => 's' })
  const content = (property: string) => head.find(([, a]) => a.property === property)?.[1].content
  assert.equal(content('og:image'), SITE_URL + 'og/10-claude.png')
  assert.equal(content('og:image:width'), '1200')
  assert.equal(content('og:image:height'), '675')
  assert.equal(head.find(([, a]) => a.name === 'twitter:card')?.[1].content, 'summary_large_image')
  assert.equal(JSON.parse(head.find(([tag]) => tag === 'script')![2]!).image, SITE_URL + 'og/10-claude.png')
})
