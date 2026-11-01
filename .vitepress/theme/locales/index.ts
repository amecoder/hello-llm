// Screen text by language. Add a language: write locales/<lang>.ts with the same shape as ko.ts,
// then add it to Lang (i18n.ts) and to UI_TEXT below.
import { en, enContent } from './en.ts'
import { ja, jaContent } from './ja.ts'
import type { Content } from './content.ts'
import { ko, type Ui } from './ko.ts'

export type { Content, Ui }

export const UI_TEXT = { ko, en, ja } satisfies Record<string, Ui>

// translated content for every language except Korean (Korean keeps its values next to the data)
export const CONTENT = { en: enContent, ja: jaContent } satisfies Record<string, Content>
