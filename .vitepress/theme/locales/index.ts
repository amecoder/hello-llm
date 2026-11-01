// Screen text by language. Add a language: write locales/<lang>.ts with the same shape as ko.ts,
// then add it to Lang (i18n.ts) and to UI_TEXT below.
import { en, enContent } from './en.ts'
import { ja, jaContent } from './ja.ts'
import { zhHans, zhHansContent } from './zh-hans.ts'
import type { Content } from './content.ts'
import { zhHant, zhHantContent } from './zh-hant.ts'
import { es, esContent } from './es.ts'
import { ko, type Ui } from './ko.ts'

export type { Content, Ui }

export const UI_TEXT = { ko, en, ja, 'zh-hans': zhHans, 'zh-hant': zhHant, 'es': es } satisfies Record<string, Ui>

// translated content for every language except Korean (Korean keeps its values next to the data)
export const CONTENT = { en: enContent, ja: jaContent, 'zh-hans': zhHansContent, 'zh-hant': zhHantContent, 'es': esContent } satisfies Record<string, Content>
