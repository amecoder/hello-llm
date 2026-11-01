// Assemble a structured prompt from labelled fields (guide chapter 7).
// Order follows the chapter: background and long material first, the request last.

import type { Lang } from './i18n.ts'
import { CONTENT } from './locales/index.ts'

export type PromptFields = {
  context: string
  document: string
  example: string
  instructions: string
  format: string
}

export type PromptMode = 'xml' | 'markdown'

type Section = { key: keyof PromptFields; tag: string; heading: string }

export const SECTIONS: readonly Section[] = [
  { key: 'context', tag: 'context', heading: '상황' },
  { key: 'document', tag: 'document', heading: '자료' },
  { key: 'example', tag: 'example', heading: '예시' },
  { key: 'instructions', tag: 'instructions', heading: '할 일' },
  { key: 'format', tag: 'format', heading: '답의 모양' },
]

export function headingOf(section: Section, lang: Lang): string {
  return lang === 'ko' ? section.heading : CONTENT[lang].builderHeadings[section.key]
}

function renderSection(section: Section, value: string, mode: PromptMode, lang: Lang): string {
  if (mode === 'xml') return `<${section.tag}>\n${value}\n</${section.tag}>`
  // pasted material may contain its own markdown headings, so fence it.
  // known limit: a '---' line inside the material blends with the fence (XML mode avoids this)
  const body = section.key === 'document' ? `---\n${value}\n---` : value
  return `## ${headingOf(section, lang)}\n${body}`
}

export function buildPrompt(fields: PromptFields, mode: PromptMode, lang: Lang = 'ko'): string {
  return SECTIONS.map((section) => ({ section, value: fields[section.key].trim() }))
    .filter(({ value }) => value !== '')
    .map(({ section, value }) => renderSection(section, value, mode, lang))
    .join('\n\n')
}
