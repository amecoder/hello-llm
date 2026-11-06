import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = join(import.meta.dirname, '..', 'guide', '23-claude-code-cli')
const reference = readFileSync(join(DIR, 'command-reference.md'), 'utf8')
const referenceLines = reference.split('\n')

// lines a reader types, leaving out the text fed into a file by <<'EOF'
function typedLines(md: string): string[] {
  return [...md.matchAll(/```(?:bash|powershell)\n([\s\S]*?)```/g)].flatMap((block) => {
    let inHeredoc = false
    return block[1].split('\n').flatMap((raw) => {
      const line = raw.trim()
      if (inHeredoc) {
        inHeredoc = line !== 'EOF'
        return []
      }
      inHeredoc = line.includes("<<'EOF'")
      return line ? [line] : []
    })
  })
}

// each command on a line with its options; quoted text is what the reader writes, not part of the command
function commands(line: string): { name: string; options: string[] }[] {
  const bare = line.replace(/"[^"]*"|'[^']*'/g, '')
  if (/^[$[}]/.test(bare)) return []
  return bare.split('|').flatMap((piece) => {
    const words = piece.trim().replace(/[()]/g, ' ').split(/\s+/).filter(Boolean)
    return words.length ? [{ name: words[0], options: words.filter((w) => /^--?[A-Za-z]/.test(w)) }] : []
  })
}

const chapters = readdirSync(DIR).filter((f) => /^\d\d-.+\.md$/.test(f))

test('every command and option a chapter asks the reader to type is explained in the command reference', () => {
  const missing = new Set<string>()
  for (const file of chapters) {
    for (const line of typedLines(readFileSync(join(DIR, file), 'utf8'))) {
      for (const { name, options } of commands(line)) {
        if (!referenceLines.some((l) => l.includes(name))) missing.add(`${file}: ${name}`)
        for (const option of options) {
          if (!referenceLines.some((l) => l.includes(name) && l.includes(option))) missing.add(`${file}: ${name} ${option}`)
        }
      }
    }
  }
  assert.deepEqual([...missing], [])
})

test('the symbols used in the chapters are explained in the command reference', () => {
  for (const symbol of ['`\\|`', '`>`', '`>>`', "`<<'EOF'`", '`~`', '`*`']) assert.ok(reference.includes(symbol), symbol)
})
