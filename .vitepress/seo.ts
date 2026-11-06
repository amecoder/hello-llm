// SEO / GEO helpers used by config.mts: per-page description, canonical + hreflang links,
// Open Graph tags, JSON-LD, and llms.txt. Pure functions so tests/seo.test.ts can check them.

import type { HeadConfig } from 'vitepress'

type Head = HeadConfig

export const SITE_URL = 'https://amecoder.github.io/hello-llm/'
const SITE_NAME = 'hello-ai'
const AUTHOR = { '@type': 'Person', name: 'amecoder', url: 'https://github.com/amecoder' }

// ko is the original and has no path prefix; order = llms.txt section order
const LOCALES = [
  { id: 'ko', prefix: '', hreflang: 'ko', og: 'ko_KR', name: '한국어' },
  { id: 'en', prefix: 'en/', hreflang: 'en', og: 'en_US', name: 'English' },
  { id: 'ja', prefix: 'ja/', hreflang: 'ja', og: 'ja_JP', name: '日本語' },
  { id: 'zh-hans', prefix: 'zh-hans/', hreflang: 'zh-Hans', og: 'zh_CN', name: '简体中文' },
  { id: 'zh-hant', prefix: 'zh-hant/', hreflang: 'zh-Hant', og: 'zh_TW', name: '繁體中文' },
  { id: 'es', prefix: 'es/', hreflang: 'es', og: 'es_LA', name: 'Español' },
] as const

// guides about one product; the same chapter titles repeat across them, so titles need the name
const SERVICES: Record<string, string> = {
  '10-claude': 'Claude',
  '11-chatgpt': 'ChatGPT',
  '12-gemini': 'Gemini',
  '20-claude-code': 'Claude Code',
  '21-codex': 'Codex',
  '23-claude-code-cli': 'Claude Code 터미널',
  '22-antigravity': 'Antigravity',
}

const CJK = /[　-ヿ一-鿿＀-￯]/
const SKIP_BLOCK = /^(#|!\[|<|[-*+] |\||```|\d+\. |\[\^|\[\[|> \[!|-{3,}\s*$)/
const FENCE = /^```[\s\S]*?^```\s*$/gm
const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", nbsp: ' ' }

function stripFrontmatter(md: string): string {
  return md.replace(/^---\n[\s\S]*?\n---\n/, '')
}

function joinLines(lines: string[]): string {
  return lines.reduce((acc, line) => {
    if (!acc) return line
    // Chinese/Japanese text has no spaces between wrapped lines
    return CJK.test(acc.at(-1)!) && CJK.test(line[0] ?? '') ? acc + line : `${acc} ${line}`
  }, '')
}

// markdown/HTML outside inline code; code spans are kept verbatim (they often show <tags>)
function cleanProse(text: string): string {
  return text
    .replace(/\[\^[^\]]+\]/g, '') // footnote refs
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/<\/?[A-Za-z][^<>]*>/g, '') // real HTML tags only, not "a < b"
    .replace(/\*\*|(?<![\w\\])__|__(?!\w)|(?<![\\\s])\*(?!\s)|(?<!\S)\*(?=\S)/g, '')
    .replace(/\\(.)/g, '$1') // backslash escapes
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (_, e: string) => ENTITIES[e])
}

function cleanInline(text: string): string {
  const unlabeled = text.replace(/^\*\*[^*]+?[:：]?\*\*\s*[:：]?\s*/, '') // "**한 줄 요약**:" or "**한 줄 요약:**"
  return unlabeled
    .split(/(`[^`]*`)/)
    .map((part) => (part.startsWith('`') && part.endsWith('`') && part.length > 1 ? part.slice(1, -1) : cleanProse(part)))
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text: string, max: number): string {
  const chars = Array.from(text) // code points, so an emoji is never split in half
  if (chars.length <= max) return text
  const cut = chars.slice(0, max).join('')
  const space = cut.lastIndexOf(' ')
  return (space > cut.length / 2 ? cut.slice(0, space) : cut).trimEnd() + '…'
}

/** The page's "one-line summary" blockquote, else its first plain paragraph. '' if none. */
export function descriptionFromMarkdown(md: string, max = 160): string {
  const body = stripFrontmatter(md).replace(FENCE, '').replace(/^:::[\s\S]*?^:::\s*$/gm, '')
  for (const block of body.split(/\n\s*\n/)) {
    const trimmed = block.trim()
    if (!trimmed || SKIP_BLOCK.test(trimmed)) continue
    const lines = trimmed.split('\n').map((l) => l.replace(/^>\s?/, '').trim()).filter(Boolean)
    const text = cleanInline(joinLines(lines))
    if (text) return truncate(text, max)
  }
  return ''
}

/** frontmatter `title:`, else the first `# ` heading outside code fences, else ''. */
export function titleFromMarkdown(md: string): string {
  const fm = md.match(/^---\n([\s\S]*?)\n---\n/)
  const fmTitle = fm?.[1].match(/^title:\s*["']?(.+?)["']?\s*$/m)
  if (fmTitle) return fmTitle[1].replace(/\\(["'])/g, '$1')
  const h1 = stripFrontmatter(md).replace(FENCE, '').match(/^# (.+)$/m)
  return h1 ? cleanInline(h1[1].replace(/\s*\{#[^}]*\}\s*$/, '')) : ''
}

/** Public URL of a (rewritten) page path, matching VitePress without cleanUrls. */
export function pageUrl(relativePath: string): string {
  const path = relativePath.replace(/\.md$/, '')
  if (path === 'index' || path.endsWith('/index')) return SITE_URL + path.slice(0, -'index'.length)
  return `${SITE_URL}${path}.html`
}

export function splitLocale(relativePath: string): { locale: string; rest: string } {
  const loc = LOCALES.find((l) => l.prefix && relativePath.startsWith(l.prefix))
  return loc ? { locale: loc.id, rest: relativePath.slice(loc.prefix.length) } : { locale: 'ko', rest: relativePath }
}

/** hreflang links to every existing translation of the page, plus x-default (Korean original). */
export function alternateLinks(relativePath: string, pages: ReadonlySet<string>): Head[] {
  const { rest } = splitLocale(relativePath)
  const links: Head[] = LOCALES.filter((l) => pages.has(l.prefix + rest)).map((l) => [
    'link',
    { rel: 'alternate', hreflang: l.hreflang, href: pageUrl(l.prefix + rest) },
  ])
  return pages.has(rest) ? [...links, ['link', { rel: 'alternate', hreflang: 'x-default', href: pageUrl(rest) }]] : links
}

/** Page title for search results and link cards; the name goes first so a long title keeps it when cut. */
export function seoTitle(relativePath: string, title: string): string {
  const service = SERVICES[splitLocale(relativePath).rest.match(/^guide\/([^/]+)\//)?.[1] ?? '']
  return service && title && !title.includes(service) ? `${service} ${title}` : title
}

/** Link card image: one per guide stage, without language-specific text (see scripts/make-og-images.py). */
export function ogImage(relativePath: string): string {
  const stage = splitLocale(relativePath).rest.match(/^guide\/([^/]+)\//)?.[1]
  return `${SITE_URL}og/${stage ?? 'home'}.png`
}

/** Trail home > stage > page. Empty for a home page, which has nothing above it. */
export function breadcrumbItems(
  relativePath: string,
  title: string,
  titleOf: (relativePath: string) => string,
): { name: string; url: string }[] {
  const { locale, rest } = splitLocale(relativePath)
  if (rest === 'index.md') return []
  const prefix = LOCALES.find((l) => l.id === locale)!.prefix
  const stageDir = rest.match(/^guide\/[^/]+\//)?.[0]
  const stage = stageDir ? `${prefix}${stageDir}index.md` : relativePath
  return [
    { name: SITE_NAME, url: pageUrl(`${prefix}index.md`) },
    ...(stage === relativePath ? [] : [{ name: titleOf(stage), url: pageUrl(stage) }]),
    { name: title, url: pageUrl(relativePath) },
  ]
}

// escape "<" so text such as "</script>" cannot end the tag early
const jsonLd = (data: object): Head => ['script', { type: 'application/ld+json' }, JSON.stringify(data).replace(/</g, '\\u003c')]

interface PageSeo {
  relativePath: string
  title: string
  description: string
  lastUpdated?: number
  pages: ReadonlySet<string>
  titleOf: (relativePath: string) => string
  isNotFound?: boolean
}

export function seoHead(page: PageSeo): Head[] {
  if (page.isNotFound) return [] // no canonical/og for the error page
  const { locale, rest } = splitLocale(page.relativePath)
  const loc = LOCALES.find((l) => l.id === locale)!
  const url = pageUrl(page.relativePath)
  const title = page.title || SITE_NAME
  const isHome = rest === 'index.md'
  const image = ogImage(page.relativePath)
  const meta = (property: string, content: string): Head => ['meta', { property, content }]

  const site = { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }
  const ld = isHome
    ? { '@context': 'https://schema.org', ...site, url, description: page.description, inLanguage: loc.hreflang }
    : {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: page.description,
        url,
        image,
        inLanguage: loc.hreflang,
        ...(page.lastUpdated ? { dateModified: new Date(page.lastUpdated).toISOString() } : {}),
        author: AUTHOR,
        isPartOf: site,
      }
  const crumbs = breadcrumbItems(page.relativePath, title, page.titleOf)
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
  }

  return [
    // VitePress 1.6.4 prints its default description meta unescaped, so a quote cuts it short;
    // a head entry replaces that default and goes through VitePress's attribute escaping
    ['meta', { name: 'description', content: page.description }],
    ['link', { rel: 'canonical', href: url }],
    ...alternateLinks(page.relativePath, page.pages),
    meta('og:site_name', SITE_NAME),
    meta('og:type', isHome ? 'website' : 'article'),
    meta('og:title', title),
    meta('og:description', page.description),
    meta('og:url', url),
    meta('og:locale', loc.og),
    meta('og:image', image),
    meta('og:image:width', '1200'),
    meta('og:image:height', '675'),
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    jsonLd(ld),
    ...(crumbs.length ? [jsonLd(crumbLd)] : []),
  ]
}

interface LlmsEntry {
  relativePath: string
  title: string
  description: string
}

/** llms.txt (https://llmstxt.org): site summary, then one link list per language. */
export function llmsTxt(siteName: string, summary: string, entries: readonly LlmsEntry[]): string {
  const sections = LOCALES.map((loc) => {
    const lines = entries
      .filter((e) => splitLocale(e.relativePath).locale === loc.id)
      .toSorted((a, b) => (a.relativePath < b.relativePath ? -1 : 1)) // locale-independent order
      .map((e) => `- [${(e.title || e.relativePath).replace(/[[\]]/g, '\\$&')}](${pageUrl(e.relativePath)})${e.description ? `: ${e.description}` : ''}\n`)
    return lines.length ? `\n## ${loc.name}\n\n${lines.join('')}` : ''
  })
  return `# ${siteName}\n\n> ${summary.replace(/\s+/g, ' ').trim()}\n${sections.join('')}`
}
