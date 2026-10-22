// Heading id builder. Same rules as VitePress 1.6.4's default slugify, except the result is
// recomposed to NFC: the default NFKD step splits Hangul syllables into jamo, so a link written
// as "#좋은-프롬프트의-5요소" never matched its heading.
// Wired to markdown.anchor only. If markdown.toc ([[toc]]) or markdown.headers is ever turned on,
// pass this function to their slugify option too. After a VitePress upgrade, compare with
// `const slugify` in node_modules/vitepress/dist/node/chunk-*.js.
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[̀-ͯ]/g

export function slugify(str: string): string {
  return str
    .normalize('NFKD')
    .replace(rCombining, '')
    .replace(rControl, '')
    .replace(rSpecial, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()
    .normalize('NFC')
}
