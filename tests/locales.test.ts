import { test } from 'node:test'
import assert from 'node:assert/strict'
import { CONTENT, UI_TEXT } from '../.vitepress/theme/locales/index.ts'
import { langOf, localePrefix, type Lang } from '../.vitepress/theme/i18n.ts'

// same keys at every depth, same array lengths, same number of function parameters
function shape(value: unknown): unknown {
  if (typeof value === 'function') return `fn/${value.length}`
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
  return typeof value
}

test('every screen text file has the same shape as ko.ts', () => {
  for (const [lang, ui] of Object.entries(UI_TEXT)) assert.deepEqual(shape(ui), shape(UI_TEXT.ko), lang)
})

test('every translated content file has the same shape as en', () => {
  for (const [lang, c] of Object.entries(CONTENT)) assert.deepEqual(shape(c), shape(CONTENT.en), lang)
})

test('translated screen text has no Korean left', () => {
  const strings = (v: unknown): string[] =>
    typeof v === 'string' ? [v] : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : []
  for (const lang of Object.keys(UI_TEXT).filter((l) => l !== 'ko')) {
    const all = [...strings(UI_TEXT[lang as Lang]), ...strings(CONTENT[lang as Exclude<Lang, 'ko'>])]
    assert.deepEqual(all.filter((s) => /[가-힣]/.test(s)), [], lang)
  }
})

test('site lang attributes map to the right language and path', () => {
  assert.equal(langOf('ko-KR'), 'ko')
  assert.equal(langOf('en-US'), 'en')
  assert.equal(langOf('ja-JP'), 'ja')
  assert.equal(localePrefix('ja'), '/ja')
  assert.equal(localePrefix('ko'), '')
})
