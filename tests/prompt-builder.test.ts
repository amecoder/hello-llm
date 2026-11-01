import { test } from 'node:test'
import assert from 'node:assert/strict'
import { buildPrompt, type PromptFields } from '../.vitepress/theme/prompt-builder.ts'

const empty: PromptFields = { context: '', document: '', example: '', instructions: '', format: '' }

test('returns empty string when every field is blank', () => {
  assert.equal(buildPrompt({ ...empty, context: '   ' }, 'xml'), '')
  assert.equal(buildPrompt(empty, 'markdown'), '')
})

test('xml: wraps each filled field in its tag, long material first and instructions last', () => {
  const out = buildPrompt(
    { context: '나는 대학생이야.', document: '공지문', example: '', instructions: '요약해 줘.', format: '세 줄' },
    'xml',
  )
  assert.equal(
    out,
    [
      '<context>\n나는 대학생이야.\n</context>',
      '<document>\n공지문\n</document>',
      '<instructions>\n요약해 줘.\n</instructions>',
      '<format>\n세 줄\n</format>',
    ].join('\n\n'),
  )
})

test('xml: omits blank fields and trims surrounding whitespace', () => {
  const out = buildPrompt({ ...empty, instructions: '\n  요약해 줘.  \n' }, 'xml')
  assert.equal(out, '<instructions>\n요약해 줘.\n</instructions>')
})

test('markdown: uses Korean headings and fences the document with delimiters', () => {
  const out = buildPrompt({ ...empty, context: '상황 설명', document: '# 원문 제목\n본문', instructions: '정리해 줘.' }, 'markdown')
  assert.equal(
    out,
    ['## 상황\n상황 설명', '## 자료\n---\n# 원문 제목\n본문\n---', '## 할 일\n정리해 줘.'].join('\n\n'),
  )
})

test('markdown: omits blank fields and trims surrounding whitespace', () => {
  const out = buildPrompt({ ...empty, example: '  ', format: '\n 표로 \n' }, 'markdown')
  assert.equal(out, '## 답의 모양\n표로')
})

test('markdown: only the document section is fenced', () => {
  const out = buildPrompt({ ...empty, example: '샘플', instructions: '할 일' }, 'markdown')
  assert.equal(out, '## 예시\n샘플\n\n## 할 일\n할 일')
  assert.ok(!out.includes('---'))
})

test('both modes keep the same section order', () => {
  const fields: PromptFields = { context: 'c', document: 'd', example: 'e', instructions: 'i', format: 'f' }
  const tags = [...buildPrompt(fields, 'xml').matchAll(/^<(\w+)>$/gm)].map((m) => m[1])
  assert.deepEqual(tags, ['context', 'document', 'example', 'instructions', 'format'])
  const heads = [...buildPrompt(fields, 'markdown').matchAll(/^## (.+)$/gm)].map((m) => m[1])
  assert.deepEqual(heads, ['상황', '자료', '예시', '할 일', '답의 모양'])
})

test('markdown: English pages get English headings, Korean stays the default', () => {
  const fields = { ...empty, context: 'I am a student.', instructions: 'Summarize it.' }
  assert.equal(buildPrompt(fields, 'markdown', 'en'), '## Context\nI am a student.\n\n## Task\nSummarize it.')
  assert.equal(buildPrompt(fields, 'markdown'), '## 상황\nI am a student.\n\n## 할 일\nSummarize it.')
})
