import { test } from 'node:test'
import assert from 'node:assert/strict'
import { uiOf } from '../.vitepress/theme/i18n.ts'

test('every translation says it was made with AI, and the Korean original says nothing', () => {
  const { ko, ...translated } = uiOf('translationNotice')
  assert.equal(ko, '')
  assert.deepEqual(Object.keys(translated).toSorted(), ['en', 'es', 'ja', 'zh-hans', 'zh-hant'])
  for (const [lang, text] of Object.entries(translated)) assert.match(text, /AI|IA/, lang)
})
