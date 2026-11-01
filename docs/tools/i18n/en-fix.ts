// Post-process translated pages under en/:
// 1. links into Korean-only pages become absolute links to the Korean site (anchor kept)
// 2. '#korean-slug' anchors into translated pages are swapped for the English slug,
//    matched by heading position (translation keeps heading order, check.py verifies the count)
// Usage: node en-fix.ts <repo> <translated-dir-prefix...>   e.g. guide/00-common
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, normalize, relative } from 'node:path'
import { slugify } from '/Users/amecoder/study/hello-llm/.vitepress/slugify.ts'

const repo = process.argv[2]
const lang = process.argv[3] ?? 'en'
const enRoot = join(repo, lang)

function headingSlugs(text: string): string[] {
  const seen = new Map<string, number>()
  const out: string[] = []
  let inFence = false
  for (const line of text.split('\n')) {
    if (line.startsWith('```')) inFence = !inFence
    if (inFence) continue
    const m = /^#{1,6} (.+?)\s*$/.exec(line)
    if (!m) continue
    const plain = m[1]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*`]/g, '')
    const base = slugify(plain)
    const n = seen.get(base) ?? 0
    seen.set(base, n + 1)
    out.push(n === 0 ? base : `${base}-${n}`)
  }
  return out
}

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : []
  })
}

// rel path (from repo root, e.g. guide/00-common/04-prompt-basics.md) -> ko slug -> en slug
const slugMap = new Map<string, Map<string, string>>()
const enFiles = walk(enRoot)
for (const enPath of enFiles) {
  const rel = relative(enRoot, enPath)
  const ko = headingSlugs(readFileSync(join(repo, rel), 'utf8'))
  const en = headingSlugs(readFileSync(enPath, 'utf8'))
  if (ko.length !== en.length) throw new Error(`heading count differs: ${rel} ko=${ko.length} en=${en.length}`)
  slugMap.set(rel, new Map(ko.map((k, i) => [k, en[i]])))
}

let changed = 0
const unresolved: string[] = []
for (const enPath of enFiles) {
  const rel = relative(enRoot, enPath)
  const text = readFileSync(enPath, 'utf8')
  const fixed = text.replace(/\]\(([^)\s]+)\)/g, (whole, target: string) => {
    if (/^(https?:|mailto:)/.test(target)) return whole
    const [pathPart, anchor] = target.split('#') as [string, string | undefined]
    // resolve to a repo-relative source path
    let srcRel: string
    if (pathPart === '') srcRel = rel
    else if (pathPart.startsWith('/')) srcRel = pathPart.slice(1)
    else srcRel = normalize(join(dirname(rel), pathPart))
    if (srcRel.endsWith('/')) srcRel += 'README.md'
    if (!/\.\w+$/.test(srcRel)) srcRel += '.md'
    const isPage = srcRel.endsWith('.md')
    const translated = slugMap.has(srcRel) || (srcRel.endsWith('/README.md') && existsSync(join(enRoot, srcRel)))
    if (isPage && !translated) {
      // Korean-only page: point at the Korean site, keep the Korean anchor
      if (!existsSync(join(repo, srcRel))) { unresolved.push(`${rel}: ${target}`); return whole }
      if (pathPart.startsWith('/')) return whole
      const abs = '/' + normalize(join(dirname(rel), pathPart))
      changed++
      return `](${abs}${anchor !== undefined ? '#' + anchor : ''})`
    }
    if (!isPage) return whole
    // site-absolute links to translated pages must stay inside /en/
    const newPath = pathPart.startsWith('/') && !pathPart.startsWith(`/${lang}/`) ? `/${lang}` + pathPart : pathPart
    if (newPath !== pathPart) changed++
    if (anchor === undefined) return `](${newPath})`
    const map = slugMap.get(srcRel)
    const en = map?.get(anchor)
    if (en === undefined) {
      if (![...(map?.values() ?? [])].includes(anchor)) unresolved.push(`${rel}: ${target}`)
      return `](${newPath}#${anchor})`
    }
    changed++
    return `](${newPath}#${en})`
  })
  if (fixed !== text) writeFileSync(enPath, fixed)
}
console.log(`changed ${changed} links`)
if (unresolved.length) console.log('unresolved:\n' + unresolved.join('\n'))
