// After converting pages <from>/ -> <to>/ (e.g. OpenCC), re-point every '#anchor' in <to> by heading
// position: the n-th heading of the target page in <from> maps to the n-th heading in <to>.
// Usage: node fix-anchors-by-position.ts <repo> <from> <to>
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { dirname, join, normalize, relative } from 'node:path'
import { slugify } from '/Users/amecoder/study/hello-llm/.vitepress/slugify.ts'
const [repo, from, to] = process.argv.slice(2)
function slugs(text: string): string[] {
  const seen = new Map<string, number>(); const out: string[] = []; let fence = false
  for (const line of text.split('\n')) {
    if (line.startsWith('```')) fence = !fence
    if (fence) continue
    const m = /^#{1,6} (.+?)\s*$/.exec(line); if (!m) continue
    const base = slugify(m[1].replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*`]/g, ''))
    const n = seen.get(base) ?? 0; seen.set(base, n + 1); out.push(n === 0 ? base : `${base}-${n}`)
  }
  return out
}
const walk = (d: string): string[] => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [] })
const cache = new Map<string, string[]>()
const slugsOf = (p: string) => { if (!cache.has(p)) cache.set(p, existsSync(p) ? slugs(readFileSync(p, 'utf8')) : []); return cache.get(p)! }
const LINK = /\]\(([^)\s]*)#([^)\s]+)\)/g
let fixed = 0; const bad: string[] = []
for (const tp of walk(join(repo, to))) {
  const rel = relative(join(repo, to), tp); const fp = join(repo, from, rel)
  const ft = readFileSync(fp, 'utf8'); const tt = readFileSync(tp, 'utf8')
  const fl = [...ft.matchAll(LINK)]; let i = 0
  const out = tt.replace(LINK, (whole, path: string, anchor: string) => {
    const f = fl[i++]; if (!f) { bad.push(`${rel}: link count`); return whole }
    if (/^(https?:)/.test(path)) return whole
    let target = path === '' ? rel : path.startsWith(`/${to}/`) ? path.slice(to.length + 2) : path.startsWith('/') ? null : normalize(join(dirname(rel), path))
    if (target === null) return whole // link into another language (e.g. Korean-only page)
    if (target.endsWith('/')) target += 'README.md'; if (!/\.md$/.test(target)) target += '.md'
    const fs_ = slugsOf(join(repo, from, target)); const ts_ = slugsOf(join(repo, to, target))
    const k = fs_.indexOf(f[2])
    if (k < 0 || fs_.length !== ts_.length) { if (!ts_.includes(anchor)) bad.push(`${rel}: #${anchor}`); return whole }
    if (ts_[k] !== anchor) fixed++
    return `](${path}#${ts_[k]})`
  })
  if (out !== tt) writeFileSync(tp, out)
}
console.log(`re-pointed ${fixed} anchors`); if (bad.length) console.log('unresolved:\n' + bad.join('\n'))
