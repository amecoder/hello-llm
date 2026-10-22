import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify } from '../.vitepress/slugify.ts'

test('keeps Korean syllables composed so links typed in Korean match the heading id', () => {
  assert.equal(slugify('좋은 프롬프트의 5요소'), '좋은-프롬프트의-5요소')
})

test('recomposes other scripts that NFKD splits, such as Japanese voiced kana', () => {
  assert.equal(slugify('ガイド'), 'ガイド')
})

test('matches VitePress for the rest of the rules', () => {
  assert.equal(slugify('Prompt Editor'), 'prompt-editor')
  assert.equal(slugify('1. 마크다운으로 정리하기'), '_1-마크다운으로-정리하기')
  assert.equal(slugify('다시 생성, 질문 고치기 — 언제 무엇을'), '다시-생성-질문-고치기-—-언제-무엇을')
  assert.equal(slugify('Café  “quoted”'), 'cafe-quoted')
})
