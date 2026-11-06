import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import {
  SITE_URL,
  breadcrumbItems,
  descriptionFromMarkdown,
  pageUrl,
  splitLocale,
  alternateLinks,
  seoHead,
  llmsTxt,
  seoTitle,
  titleFromMarkdown,
} from '../.vitepress/seo.ts'

test('uses the one-line summary blockquote and drops its bold label', () => {
  const md = [
    '---', 'outline: deep', '---',
    '# 1장. LLM이란 무엇인가', '',
    '> **한 줄 요약**: LLM은 "다음에 올 말"을 맞히는 [프로그램](./x.md)입니다.',
    '> 그래서 **항상** 사실을 말하는 것은 아닙니다.[^1]', '',
    '## 다음 절', '본문',
  ].join('\n')
  assert.equal(
    descriptionFromMarkdown(md),
    'LLM은 "다음에 올 말"을 맞히는 프로그램입니다. 그래서 항상 사실을 말하는 것은 아닙니다.',
  )
})

test('falls back to the first plain paragraph, skipping headings, images, lists and components', () => {
  const md = [
    '# 목차', '', '![로드맵](../assets/roadmap.svg)', '', '<Quiz id="a" />', '', '- 목록', '',
    '| 표 | 칸 |', '', '앞 단계가 다음 단계의 바탕이 되므로 `번호` 순서대로 읽는 것을 권합니다.', '',
  ].join('\n')
  assert.equal(descriptionFromMarkdown(md), '앞 단계가 다음 단계의 바탕이 되므로 번호 순서대로 읽는 것을 권합니다.')
})

test('cuts long text at a word boundary and returns empty when nothing fits', () => {
  const long = '# 제목\n\n' + '가나다 '.repeat(80)
  const d = descriptionFromMarkdown(long, 40)
  assert.ok(d.length <= 41, d)
  assert.ok(d.endsWith('…'))
  assert.equal(descriptionFromMarkdown('# 제목만\n\n## 절'), '')
})

test('builds the public page URL the same way VitePress does', () => {
  assert.equal(SITE_URL, 'https://amecoder.github.io/hello-llm/')
  assert.equal(pageUrl('index.md'), SITE_URL)
  assert.equal(pageUrl('guide/00-common/index.md'), SITE_URL + 'guide/00-common/')
  assert.equal(pageUrl('en/guide/00-common/01-what-is-llm.md'), SITE_URL + 'en/guide/00-common/01-what-is-llm.html')
})

test('splits a page path into its locale and the shared rest', () => {
  assert.deepEqual(splitLocale('guide/index.md'), { locale: 'ko', rest: 'guide/index.md' })
  assert.deepEqual(splitLocale('zh-hant/guide/index.md'), { locale: 'zh-hant', rest: 'guide/index.md' })
  assert.deepEqual(splitLocale('es/index.md'), { locale: 'es', rest: 'index.md' })
})

test('links only the translations that exist, plus x-default to Korean', () => {
  const pages = new Set(['guide/a.md', 'en/guide/a.md', 'ja/guide/a.md'])
  const links = alternateLinks('en/guide/a.md', pages)
  assert.deepEqual(links, [
    ['link', { rel: 'alternate', hreflang: 'ko', href: SITE_URL + 'guide/a.html' }],
    ['link', { rel: 'alternate', hreflang: 'en', href: SITE_URL + 'en/guide/a.html' }],
    ['link', { rel: 'alternate', hreflang: 'ja', href: SITE_URL + 'ja/guide/a.html' }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: SITE_URL + 'guide/a.html' }],
  ])
})

test('adds canonical, Open Graph and JSON-LD for a guide page', () => {
  const head = seoHead({
    relativePath: 'en/guide/a.md',
    title: 'Chapter 1',
    description: 'What an LLM is </script>',
    lastUpdated: Date.UTC(2026, 10, 3),
    pages: new Set(['guide/a.md', 'en/guide/a.md']),
    titleOf: () => '',
  })
  const find = (k: string, v: string) => head.find(([, a]) => (a as Record<string, string>)[k] === v)
  assert.deepEqual(find('rel', 'canonical'), ['link', { rel: 'canonical', href: SITE_URL + 'en/guide/a.html' }])
  assert.equal((find('property', 'og:locale')![1] as Record<string, string>).content, 'en_US')
  assert.equal((find('property', 'og:type')![1] as Record<string, string>).content, 'article')
  assert.equal((find('property', 'og:title')![1] as Record<string, string>).content, 'Chapter 1')
  const ld = head.find(([tag]) => tag === 'script')!
  assert.ok(!ld[2]!.includes('</script>'), 'JSON-LD must escape < so the page cannot break out of the tag')
  const data = JSON.parse(ld[2]!)
  assert.equal(data['@type'], 'Article')
  assert.equal(data.inLanguage, 'en')
  assert.equal(data.dateModified, '2026-11-03T00:00:00.000Z')
})

test('marks a locale home page as a WebSite', () => {
  const head = seoHead({ relativePath: 'ja/index.md', title: '', description: 'd', pages: new Set(['ja/index.md']), titleOf: () => '' })
  const data = JSON.parse(head.find(([tag]) => tag === 'script')![2]!)
  assert.equal(data['@type'], 'WebSite')
  assert.equal(data.url, SITE_URL + 'ja/')
})

test('writes llms.txt grouped by language with one link per page', () => {
  const txt = llmsTxt('hello-ai', 'guide', [
    { relativePath: 'en/guide/a.md', title: 'A', description: 'about a' },
    { relativePath: 'guide/a.md', title: '가', description: '' },
  ])
  assert.ok(txt.startsWith('# hello-ai\n\n> guide\n'))
  const ko = txt.indexOf('## 한국어'), en = txt.indexOf('## English')
  assert.ok(ko > 0 && en > ko, 'Korean original comes first')
  assert.ok(txt.includes(`- [가](${SITE_URL}guide/a.html)\n`))
  assert.ok(txt.includes(`- [A](${SITE_URL}en/guide/a.html): about a\n`))
})

test('takes the title from frontmatter, else the first heading', () => {
  assert.equal(titleFromMarkdown('---\ntitle: "소개"\n---\n# 다른 제목'), '소개')
  assert.equal(titleFromMarkdown('# 1장. **LLM**이란'), '1장. LLM이란')
  assert.equal(titleFromMarkdown('본문만'), '')
})

test('emits its own description meta so VitePress escapes quotes in it', () => {
  // VitePress 1.6.4 writes its default description meta without escaping "; a head entry replaces it
  const head = seoHead({ relativePath: 'guide/a.md', title: 't', description: '"다음 말"', pages: new Set(['guide/a.md']), titleOf: () => '' })
  assert.deepEqual(head.find(([, a]) => a.name === 'description'), ['meta', { name: 'description', content: '"다음 말"' }])
})

test('keeps tags written in inline code and text around a bare < or >', () => {
  assert.equal(descriptionFromMarkdown('`<role>` 태그로 <b>역할</b>을 정합니다.'), '<role> 태그로 역할을 정합니다.')
  assert.equal(descriptionFromMarkdown('a < b 이고 c > d 입니다.'), 'a < b 이고 c > d 입니다.')
})

test('never cuts an emoji in half', () => {
  const d = descriptionFromMarkdown('가'.repeat(39) + '😀끝', 40)
  assert.ok(!/[\ud800-\udbff]…$/.test(d), JSON.stringify(d))
})

test('skips [[toc]] and rules, and drops a label whose colon sits inside the bold', () => {
  assert.equal(descriptionFromMarkdown('[[toc]]\n\n---\n\n> **한 줄 요약:** 짧은 요약입니다.'), '짧은 요약입니다.')
})

test('decodes entities and backslash escapes, and leaves snake_case alone', () => {
  assert.equal(descriptionFromMarkdown('A &amp; B, 별표 \\* 하나, max__len 값.'), 'A & B, 별표 * 하나, max__len 값.')
})

test('ignores # lines inside code fences when finding the title', () => {
  assert.equal(titleFromMarkdown('```sh\n# comment\n```\n# 진짜 {#real}'), '진짜')
})

test('keeps llms.txt markdown intact for ] in titles and newlines in the summary', () => {
  const txt = llmsTxt('s', '첫 줄\n둘째 줄', [{ relativePath: 'guide/a.md', title: '[중요] 제목', description: '' }])
  assert.ok(txt.includes('> 첫 줄 둘째 줄\n'))
  assert.ok(txt.includes('- [\\[중요\\] 제목]('))
})

test('adds nothing to the 404 page', () => {
  assert.deepEqual(seoHead({ relativePath: '404.md', title: '', description: '', pages: new Set(), titleOf: () => '', isNotFound: true }), [])
})

test('puts the service name in front of a service guide title, in every language', () => {
  assert.equal(seoTitle('guide/11-chatgpt/02-screen-tour.md', '2장. 화면 둘러보기'), 'ChatGPT 2장. 화면 둘러보기')
  assert.equal(seoTitle('es/guide/12-gemini/02-screen-tour.md', 'Capítulo 2.'), 'Gemini Capítulo 2.')
  assert.equal(seoTitle('guide/20-claude-code/03-screen-tour.md', '3장.'), 'Claude Code 3장.')
})

test('leaves a title alone when it already names the service, or the guide is not about one service', () => {
  assert.equal(seoTitle('guide/21-codex/01-what-is.md', '1장. Codex란'), '1장. Codex란')
  assert.equal(seoTitle('guide/11-chatgpt/index.md', '2단계 · ChatGPT 사용 가이드'), '2단계 · ChatGPT 사용 가이드')
  assert.equal(seoTitle('guide/00-common/01-what-is-llm.md', '1장.'), '1장.')
  assert.equal(seoTitle('guide/30-ai-sdlc/04-build.md', '4장.'), '4장.')
  assert.equal(seoTitle('index.md', ''), '')
})

test('gives every published page a title of its own', () => {
  const seen = new Map<string, string>()
  for (const locale of ['', 'en/', 'ja/', 'zh-hans/', 'zh-hant/', 'es/']) {
    const stages = readdirSync(`${locale || '.'}/guide`, { withFileTypes: true }).filter((e) => e.isDirectory() && e.name !== 'assets')
    const sources = [
      `${locale}index.md`,
      `${locale}guide/index.md`,
      ...stages.flatMap((s) =>
        readdirSync(`${locale}guide/${s.name}`).filter((f) => f.endsWith('.md')).map((f) => `${locale}guide/${s.name}/${f}`),
      ),
    ]
    for (const source of sources) {
      const published = source.replace(/README\.md$/, 'index.md')
      const title = seoTitle(published, titleFromMarkdown(readFileSync(source, 'utf-8')))
      assert.ok(title, `${source} has no title`)
      assert.equal(seen.get(title), undefined, `${source} repeats the title "${title}"`)
      seen.set(title, source)
    }
  }
  assert.equal(seen.size, 597)
})

const stageTitle = (path: string) => (path === 'en/guide/11-chatgpt/index.md' ? 'Stage 2 · ChatGPT' : '')

test('builds the breadcrumb trail home > stage > chapter inside the page language', () => {
  assert.deepEqual(breadcrumbItems('en/guide/11-chatgpt/02-screen-tour.md', 'ChatGPT Chapter 2', stageTitle), [
    { name: 'hello-ai', url: SITE_URL + 'en/' },
    { name: 'Stage 2 · ChatGPT', url: SITE_URL + 'en/guide/11-chatgpt/' },
    { name: 'ChatGPT Chapter 2', url: SITE_URL + 'en/guide/11-chatgpt/02-screen-tour.html' },
  ])
})

test('shortens the breadcrumb for stage and contents pages and skips the home page', () => {
  assert.deepEqual(breadcrumbItems('en/guide/11-chatgpt/index.md', 'Stage 2 · ChatGPT', stageTitle), [
    { name: 'hello-ai', url: SITE_URL + 'en/' },
    { name: 'Stage 2 · ChatGPT', url: SITE_URL + 'en/guide/11-chatgpt/' },
  ])
  assert.deepEqual(breadcrumbItems('guide/index.md', '전체 목차', stageTitle), [
    { name: 'hello-ai', url: SITE_URL },
    { name: '전체 목차', url: SITE_URL + 'guide/' },
  ])
  assert.deepEqual(breadcrumbItems('ja/index.md', 'x', stageTitle), [])
})

test('adds BreadcrumbList JSON-LD after the Article, and none on a home page', () => {
  const scripts = (relativePath: string) =>
    seoHead({ relativePath, title: 'T </script>', description: 'd', pages: new Set([relativePath]), titleOf: () => 'S' })
      .filter(([tag]) => tag === 'script')
      .map((s) => s[2]!)
  const [, crumbs] = scripts('guide/11-chatgpt/a.md')
  assert.ok(!crumbs.includes('</script>'))
  const data = JSON.parse(crumbs)
  assert.equal(data['@type'], 'BreadcrumbList')
  assert.deepEqual(data.itemListElement[1], { '@type': 'ListItem', position: 2, name: 'S', item: SITE_URL + 'guide/11-chatgpt/' })
  assert.equal(scripts('index.md').length, 1)
})
