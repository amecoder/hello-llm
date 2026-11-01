# Chapter 7. Using It in the Terminal — Checking Your Organizer with One Line of `codex exec`

> **One-line summary**: Codex CLI is Codex for the terminal. It reads `AGENTS.md` and skills from the folder where you run it.
> `codex exec "task"` runs once and exits, and it is **read-only by default**. It is similar to Claude Code's `claude -p`, except for this difference.

This chapter is based on the official Codex docs checked on November 1, 2026, and the results of running Codex CLI 0.166.0 in the macOS terminal. **If you are new to the terminal, you can skip this chapter.** We explained what the terminal is in [Claude Code Chapter 10](../20-claude-code/10-terminal.md).

## Installing and Getting Started

Here are the install commands from the official docs.[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**Before running the install command, make sure it matches the official docs (learn.chatgpt.com) character for character.** That is because this command downloads a script from the internet and runs it right away.

Once the installation finishes, move to your organizer folder and type `codex`. On your first run, choose **Sign in with ChatGPT**.[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

In the terminal, Codex treats **the folder where you started it** as the project for that chat.[^cwd] `cd` replaces what you did with Choose project in the app.

<Quiz id="ch507-install" />

## `codex exec` — Ask Once and Finish

`codex exec` runs once and finishes without opening the chat screen.[^exec] We asked it the same question from Claude Code Chapter 10.

```bash
cd ~/hello-ai-연습/정리도구
codex exec "Show me the list of files in the notes folder, and tell me in one line per file which template (from templates) each file used. Do not edit any files. Reply briefly as a table only."
```

Only the answer came out cleanly (full output: [Chapter 7 codex exec output.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)).

| notes file | Template used |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-26.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |

Source: Hands-on results from this guide (2026-11-01). Progress logs were discarded separately, leaving only the final answer.

`codex exec` sends progress updates and the final answer down **different paths**. Progress goes to the side channel on screen (stderr), and only the final answer goes to standard output (stdout).[^stdout] So if you run something like `codex exec "…" > 결과.md`, only the final answer is saved in the file.

**`codex exec` is read-only by default.** To let it edit files, add `--sandbox workspace-write`.[^readonly] We also ran the exercises in Chapters 2, 3, and 5 of this guide with this option.

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec` works by **setting permissions in advance** before running.[^preset] In the Chapter 5 exercise of this guide, when writing to the `.agents` folder was blocked, Codex could not ask for permission and simply stopped. For tasks that need permission prompts, it is easier to use the app or interactive `codex`.

The `--full-auto` option you might see in older posts is no longer supported.[^fullauto] There is also an option like `--dangerously-bypass-approvals-and-sandbox` that turns off both the sandbox and approvals[^yolo], but you do not need it for organizing notes.

<Quiz id="ch507-exec" />

## Commands Inside Interactive `codex`

When you open interactive mode with `codex`, you use commands that start with `/`.

| Command | What it does |
|---|---|
| `/permissions` | Change permissions (the permissions menu in the app) |
| `/import` | Import settings from Claude Code or Cursor |
| `/resume` | Continue a saved chat |
| `/status` | View chat details and remaining limits |

Source: Codex official docs[^permissions][^import][^resume][^status]

To continue a chat from outside after closing interactive mode, type `codex resume`.[^resume]

`/permissions` and `/import` are **terminal commands**. In the app, use the permissions menu below the input box (Chapter 4) and the Import menu in Settings (Chapter 3).

<Quiz id="ch507-commands" />

## Try It Yourself

1. Check that the install command above matches the official docs, then install it (if you already have it, run `codex --version`).
2. Move to your organizer folder and run the read-only `codex exec` question above.
3. Open interactive mode with `codex` and type `/status`.
4. Type `$` or run `/skills` to check that the skill name from Chapter 5 appears.[^skills]

**Up next**: In Chapter 8, we will cover cost, data, and safety, and see how Codex handles a note with hidden instructions inside.

## Summary

- In the terminal, Codex treats the folder where you run it as the project and reads `AGENTS.md` and skills from that folder.
- Check that the install command matches the official docs before running it.
- `codex exec` runs once and finishes, and it is read-only by default. To allow edits, add `--sandbox workspace-write`.
- `codex exec` runs with permissions set in advance. Use the app or interactive mode for tasks that need approval prompts.

## Glossary

| Term | One-line meaning |
|---|---|
| Codex CLI | Codex used in the terminal |
| `codex exec` | A mode that runs once and finishes |
| stdout / stderr | Standard output / the side channel where progress and errors go |

<ChapterDone :chapter="507" />

Next chapter: [Chapter 8. Cost, Data, Safety, and Choosing Your Tool](08-safety-choose.md)

[^install]: Codex official docs, "Codex CLI". "curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli (checked on 2026-11-01)
[^signin]: Codex official docs, "Codex CLI". "Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli (checked on 2026-11-01)
[^cwd]: Codex official docs, "Projects and chats". "Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects (checked on 2026-11-01)
[^exec]: Codex official docs, "Non-interactive mode". "Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode (checked on 2026-11-01)
[^stdout]: Codex official docs, "Non-interactive mode". "While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode (checked on 2026-11-01)
[^readonly]: Codex official docs, "Non-interactive mode". "By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode (checked on 2026-11-01)
[^fullauto]: Codex official docs, "Non-interactive mode". "`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode (checked on 2026-11-01)
[^yolo]: Codex official docs, "Agent approvals & security". "`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^permissions]: Codex official docs, "Permissions". "In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^import]: Codex official docs, "Import from another agent". "Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^resume]: Codex official docs, "Projects and chats". "Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects (checked on 2026-11-01)
[^status]: Codex official docs, "Pricing". "If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing (checked on 2026-11-01)
[^skills]: Codex official docs, "Build skills". "In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^preset]: Codex official docs, "Non-interactive mode". "Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode (checked on 2026-11-01)
