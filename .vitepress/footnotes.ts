// Folds the footnote list at the end of a page into one closed box, and hides long
// English source quotes behind a toggle so the visible note is short: source name, link, date.
// The quotes stay in the page (they are the evidence); the theme script opens the box
// when a reader clicks a footnote number.

export type FootnoteLang = 'ko' | 'en' | 'ja' | 'zh-hans' | 'zh-hant' | 'es'

const TEXT: Record<FootnoteLang, { title: (n: number) => string; show: string; hide: string }> = {
  ko: { title: (n) => `참고 자료 (${n}개)`, show: '원문 인용 보기', hide: '원문 인용 숨기기' },
  en: { title: (n) => `References (${n})`, show: 'Show original quotes', hide: 'Hide original quotes' },
  ja: { title: (n) => `参考資料（${n}件）`, show: '原文の引用を表示', hide: '原文の引用を隠す' },
  'zh-hans': { title: (n) => `参考资料（${n} 条）`, show: '显示原文引用', hide: '隐藏原文引用' },
  'zh-hant': { title: (n) => `參考資料（${n} 則）`, show: '顯示原文引用', hide: '隱藏原文引用' },
  es: { title: (n) => `Referencias (${n})`, show: 'Mostrar citas originales', hide: 'Ocultar citas originales' },
}

const PREFIXES: FootnoteLang[] = ['en', 'ja', 'zh-hans', 'zh-hant', 'es']

export function langOfPath(relativePath: string): FootnoteLang {
  return PREFIXES.find((l) => relativePath.startsWith(`${l}/`)) ?? 'ko'
}

const SECTION = /<hr class="footnotes-sep">\s*<section class="footnotes">([\s\S]*?)<\/section>/
// a quoted passage; it may contain inline code but no other quote
const QUOTE = /&quot;((?:(?!&quot;)[\s\S])*?)&quot;/g
const CJK = /[぀-ヿ㐀-鿿가-힯]/

// a quote is "source evidence" when it is a run of Latin text, not words of the explanation
function isSourceQuote(inner: string): boolean {
  // only wrap when the quote holds whole inline elements; a quote that starts in one
  // element and ends in another would break the HTML
  if (inner.replace(/<(code|em|strong)>[^<]*<\/\1>/g, '').includes('<')) return false
  const text = inner.replace(/<[^>]+>/g, '')
  return !CJK.test(text) && (text.match(/[A-Za-z]/g)?.length ?? 0) >= 12
}

// Quotes are hidden only in a note that cites a web source; a note without a link records
// what the guide itself saw, and its quoted words are part of the sentence.
// A note with an odd number of quote marks is left alone: pairing would go wrong.
function hideQuotesIn(item: string): string {
  if (!/<a href="https?:\/\//.test(item)) return item
  if ((item.match(/&quot;/g)?.length ?? 0) % 2 === 1) return item
  const wrapped = item.replace(QUOTE, (whole, inner: string) =>
    isSourceQuote(inner) ? `<span class="fn-quote">${whole}</span>` : whole,
  )
  // "A" / "B" → one hidden run, so no stray slash is left
  return wrapped.replace(/<\/span>(\s*\/\s*)<span class="fn-quote">/g, '$1')
}

function hideQuotes(list: string): string {
  return list.replace(/<li id="fn[\s\S]*?<\/li>/g, hideQuotesIn)
}

// a link whose text is its own URL shows only the site name; the full address stays in title
function shortenUrls(list: string): string {
  return list.replace(/<a href="(https?:\/\/[^"]+)"([^>]*)>\1<\/a>/g, (whole, href: string, attrs: string) => {
    try {
      const host = new URL(href).hostname.replace(/^www\./, '')
      return `<a href="${href}"${attrs} title="${href}">${host}</a>`
    } catch {
      return whole // a decoration must never break the build
    }
  })
}

export function foldFootnotes(html: string, lang: FootnoteLang): string {
  const m = html.match(SECTION)
  if (!m) return html
  const t = TEXT[lang]
  const count = m[1].match(/<li id="fn/g)?.length ?? 0
  // one "back to text" arrow per note is enough; repeats (#fnref1:1, :2 …) only add clutter
  const list = shortenUrls(hideQuotes(m[1])).replace(/\s*<a href="#fnref\d+:\d+" class="footnote-backref">↩︎<\/a>/g, '')
  const toggle = list.includes('class="fn-quote"')
    ? `<button type="button" class="fn-quote-toggle" aria-pressed="false" data-show="${t.show}" data-hide="${t.hide}">${t.show}</button>\n`
    : ''
  const box = `<details class="footnotes-box"><summary>${t.title(count)}</summary>\n${toggle}<section class="footnotes">${list}</section>\n</details>`
  return html.replace(m[0], () => box)
}
