import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = join(import.meta.dirname, '..', 'guide', '23-claude-code-cli')
const reference = readFileSync(join(DIR, 'command-reference.md'), 'utf8')

type Command = { head: string[]; options: string[] }

// claude and git take subcommands, so "git init" and "git add" are different commands
const SUBCOMMAND_DEPTH: Record<string, number> = { git: 1, claude: 1, 'claude mcp': 1, 'claude auth': 1, 'claude plugin': 1 }

// quoted text and placeholders are what the reader fills in, not part of the command
function parse(text: string): Command[] {
  const bare = text.replace(/"[^"]*"|'[^']*'/g, ' ').replace(/[()]/g, ' ')
  return bare.split(/\\?\|/).flatMap((piece) => {
    const words = piece.trim().split(/\s+/).filter(Boolean)
    if (!words.length || /^[$[}{]/.test(words[0])) return []
    const head = [words[0]]
    while (SUBCOMMAND_DEPTH[head.join(' ')] && /^[a-z]+$/.test(words[head.length] ?? '')) head.push(words[head.length])
    return [{ head, options: words.filter((w) => /^--?[A-Za-z]/.test(w)) }]
  })
}

// the first cell of each table row of the reference, as commands
const rows: Command[] = reference
  .split('\n')
  .flatMap((line) => line.match(/^\| `(.+?)` \|/)?.[1].replace(/`/g, '') ?? [])
  .flatMap(parse)

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

// `claude ...` and `git ...` written in sentences; footnotes quote the English documents as they are
function namedInProse(md: string): string[] {
  const prose = md.replace(/```[\s\S]*?```/g, '').replace(/^\[\^.*$/gm, '')
  return [...prose.matchAll(/`((?:claude|git)(?: [^`]*)?)`/g)].map((m) => m[1])
}

function explained(command: Command, option?: string): boolean {
  return rows.some((row) => command.head.every((word, i) => row.head[i] === word) && (!option || row.options.includes(option)))
}

const chapters = readdirSync(DIR).filter((f) => /^\d\d-.+\.md$/.test(f))

test('every command and option a chapter uses has its own row in the command reference', () => {
  const missing = new Set<string>()
  for (const file of chapters) {
    const md = readFileSync(join(DIR, file), 'utf8')
    for (const command of [...typedLines(md), ...namedInProse(md)].flatMap(parse)) {
      const name = command.head.join(' ')
      if (!explained(command)) missing.add(name)
      for (const option of command.options) if (!explained(command, option)) missing.add(`${name} ${option}`)
    }
  }
  assert.deepEqual([...missing].sort(), [])
})

test('the symbols used in the chapters are explained in the command reference', () => {
  for (const symbol of ['`\\|`', '`>`', '`>>`', "`<<'EOF'`", '`~`', '`*`']) assert.ok(reference.includes(symbol), symbol)
})
