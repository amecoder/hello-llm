import { test } from 'node:test'
import assert from 'node:assert/strict'
import { untranslatedFallback } from '../.vitepress/theme/i18n.ts'

const BASE = '/hello-llm/'

test('a language link to a stage with no translation goes to that language\'s table of contents', () => {
  assert.equal(untranslatedFallback('/hello-llm/en/guide/23-claude-code-cli/04-first-session.html', BASE), '/hello-llm/en/guide/')
  assert.equal(untranslatedFallback('/hello-llm/zh-hant/guide/23-claude-code-cli/', BASE), '/hello-llm/zh-hant/guide/')
})

test('a stage address without the trailing slash also finds the table of contents', () => {
  assert.equal(untranslatedFallback('/hello-llm/en/guide/23-claude-code-cli.html', BASE), '/hello-llm/en/guide/')
})

test('translated stages and Korean pages stay where they are', () => {
  assert.equal(untranslatedFallback('/hello-llm/en/guide/20-claude-code/10-terminal.html', BASE), null)
  assert.equal(untranslatedFallback('/hello-llm/guide/23-claude-code-cli/04-first-session.html', BASE), null)
  assert.equal(untranslatedFallback('/hello-llm/en/', BASE), null)
})
