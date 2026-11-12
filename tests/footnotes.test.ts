import { test } from 'node:test'
import assert from 'node:assert/strict'
import { foldFootnotes, langOfPath } from '../.vitepress/footnotes.ts'

const SECTION = (items: string) =>
  `<p>본문</p>\n<hr class="footnotes-sep">\n<section class="footnotes">\n<ol class="footnotes-list">\n${items}</ol>\n</section>\n`

const ITEM_QUOTED =
  '<li id="fn1" class="footnote-item"><p>Anthropic 도움말, 「Use voice mode」. &quot;Tap the sound wave symbol to activate voice mode:&quot; / &quot;Your previous context carries over.&quot; <a href="https://support.claude.com/en/articles/11101966" target="_blank" rel="noreferrer">https://support.claude.com/en/articles/11101966</a> (확인일 2026-10-26) <a href="#fnref1" class="footnote-backref">↩︎</a></p>\n</li>\n'
const ITEM_KOREAN = '<li id="fn2" class="footnote-item"><p>이 가이드가 직접 해 본 결과입니다. &quot;내 계정과 떼어 낸 채&quot;는 번역입니다. <a href="#fnref2" class="footnote-backref">↩︎</a></p>\n</li>\n'

test('pages without footnotes are left alone', () => {
  assert.equal(foldFootnotes('<p>no notes</p>', 'ko'), '<p>no notes</p>')
})

test('the footnote list is folded into one closed box with a count in the page language', () => {
  const out = foldFootnotes(SECTION(ITEM_QUOTED + ITEM_KOREAN), 'ko')
  assert.equal(out.match(/<details class="footnotes-box">/g)?.length, 1)
  assert.match(out, /<summary>참고 자료 \(2개\)<\/summary>/)
  assert.ok(!out.includes('<details class="footnotes-box" open'), 'closed by default')
  assert.ok(!out.includes('footnotes-sep'), 'the separator line is replaced by the box')
  assert.match(foldFootnotes(SECTION(ITEM_KOREAN), 'en'), /<summary>References \(1\)<\/summary>/)
  assert.match(foldFootnotes(SECTION(ITEM_KOREAN), 'ja'), /<summary>参考資料（1件）<\/summary>/)
  assert.match(foldFootnotes(SECTION(ITEM_KOREAN), 'es'), /<summary>Referencias \(1\)<\/summary>/)
})

test('long English quotes are kept but hidden behind one toggle; the source name, link and date stay visible', () => {
  const out = foldFootnotes(SECTION(ITEM_QUOTED + ITEM_KOREAN), 'ko')
  // both quotes and the slash between them sit in one hidden span
  assert.match(out, /<span class="fn-quote">&quot;Tap the sound wave[\s\S]*?carries over\.&quot;<\/span>/)
  assert.match(out, /Anthropic 도움말, 「Use voice mode」\./)
  assert.match(out, /\(확인일 2026-10-26\)/)
  assert.match(out, /<button type="button" class="fn-quote-toggle" data-show="원문 인용 보기" data-hide="원문 인용 숨기기">원문 인용 보기<\/button>/)
  // quotes written in Korean are part of the explanation, not hidden
  assert.match(out, /&quot;내 계정과 떼어 낸 채&quot;는/)
  assert.ok(!/<span class="fn-quote">&quot;내 계정/.test(out))
})

test('a quote that crosses an element boundary is left as it is', () => {
  const item = '<li id="fn1" class="footnote-item"><p>Doc. <code>a &quot;quoted</code> text that keeps going here&quot; end <a href="#fnref1" class="footnote-backref">↩︎</a></p>\n</li>\n'
  assert.ok(!foldFootnotes(SECTION(item), 'ko').includes('class="fn-quote"'))
})

test('a bare URL link shows only the site name', () => {
  const out = foldFootnotes(SECTION(ITEM_QUOTED), 'ko')
  assert.match(out, /<a href="https:\/\/support\.claude\.com\/en\/articles\/11101966" target="_blank" rel="noreferrer">support\.claude\.com<\/a>/)
})

test('only the first back-to-text arrow is kept', () => {
  const item = '<li id="fn1" class="footnote-item"><p>Note. <a href="#fnref1" class="footnote-backref">↩︎</a> <a href="#fnref1:1" class="footnote-backref">↩︎</a> <a href="#fnref1:2" class="footnote-backref">↩︎</a></p>\n</li>\n'
  const out = foldFootnotes(SECTION(item), 'ko')
  assert.equal(out.match(/footnote-backref/g)?.length, 1)
  assert.match(out, /href="#fnref1" class="footnote-backref"/)
})

test('no toggle when there is nothing to hide', () => {
  assert.ok(!foldFootnotes(SECTION(ITEM_KOREAN), 'ko').includes('fn-quote-toggle'))
})

test('page language comes from the path prefix', () => {
  assert.equal(langOfPath('guide/00-common/01-what-is-llm.md'), 'ko')
  assert.equal(langOfPath('en/guide/00-common/01-what-is-llm.md'), 'en')
  assert.equal(langOfPath('zh-hant/guide/x.md'), 'zh-hant')
  assert.equal(langOfPath('es/index.md'), 'es')
})
