// Assemble a structured prompt from labelled fields (guide chapter 7).
// Order follows the chapter: background and long material first, the request last.

export type PromptFields = {
  context: string
  document: string
  example: string
  instructions: string
  format: string
}

export type PromptMode = 'xml' | 'markdown'

type Section = { key: keyof PromptFields; tag: string; heading: string; headingEn: string }

export const SECTIONS: readonly Section[] = [
  { key: 'context', tag: 'context', heading: '상황', headingEn: 'Context' },
  { key: 'document', tag: 'document', heading: '자료', headingEn: 'Material' },
  { key: 'example', tag: 'example', heading: '예시', headingEn: 'Example' },
  { key: 'instructions', tag: 'instructions', heading: '할 일', headingEn: 'Task' },
  { key: 'format', tag: 'format', heading: '답의 모양', headingEn: 'Answer format' },
]

export function headingOf(section: Section, lang: 'ko' | 'en'): string {
  return lang === 'en' ? section.headingEn : section.heading
}

function renderSection(section: Section, value: string, mode: PromptMode, lang: 'ko' | 'en'): string {
  if (mode === 'xml') return `<${section.tag}>\n${value}\n</${section.tag}>`
  // pasted material may contain its own markdown headings, so fence it.
  // known limit: a '---' line inside the material blends with the fence (XML mode avoids this)
  const body = section.key === 'document' ? `---\n${value}\n---` : value
  return `## ${headingOf(section, lang)}\n${body}`
}

export function buildPrompt(fields: PromptFields, mode: PromptMode, lang: 'ko' | 'en' = 'ko'): string {
  return SECTIONS.map((section) => ({ section, value: fields[section.key].trim() }))
    .filter(({ value }) => value !== '')
    .map(({ section, value }) => renderSection(section, value, mode, lang))
    .join('\n\n')
}
