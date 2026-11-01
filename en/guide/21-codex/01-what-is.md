# Chapter 1. What Codex Is and How It Differs from Claude Code

> **In one line**: Codex is an AI tool made by OpenAI that **works directly inside a folder on your computer**. Today, you use it by **selecting "Codex" inside the ChatGPT desktop app**.
> It does almost the same job as Claude Code. In this stage, you will move the "organizing tool" you built in the Claude Code chapters over to Codex and learn **only what is different**.

This chapter is based on the official Codex documentation (learn.chatgpt.com) checked on November 1, 2026. Features and menu names change often.

## Three Modes Inside the ChatGPT App

On desktop, you do not install Codex separately. Three modes live together **inside a single ChatGPT desktop app**.[^modes]

| Mode | When to use it | Examples |
|---|---|---|
| Chat | Asking and answering | Questions, brainstorming, polishing text |
| Work | Handing off a full deliverable | Reports, slide decks, file analysis |
| **Codex** | Working directly in a folder, seeing technical details | Editing files, checking what changed |

Source: Codex official docs (excerpted)[^modes]

Work and Codex overlap in what they can do. The difference is **how they show their work**. Work hides technical details like Git or commands and shows you the finished result. Codex also shows you exactly what changed (the diff).[^compare]

You can use Codex even if you do not write code. The official docs also say that if you prefer Codex, you can keep using it for research, documents, and presentations.[^prefer] This guide chose Codex **because you can inspect the changes yourself**. If you built the habit of checking whether organized notes match the original in the Claude Code chapters, you can keep that exact habit in Codex.

<Quiz id="ch501-modes" />

## What Is the Same and What Is Different from Claude Code

Almost every concept you learned in Claude Code exists in Codex too. **Only the names and locations are different.**

| Claude Code | Codex | Where you learn it |
|---|---|---|
| Code tab in the Claude app | Select "Codex" in the ChatGPT app | Chapter 2 |
| `CLAUDE.md` | `AGENTS.md` | Chapter 3 |
| Permission mode (Manual, etc.) | Permissions menu (Ask for approval, etc.) | Chapter 4 |
| Rewind (checkpoints) | Undo with Git | Chapter 4 |
| `.claude/skills` · `/name` | `.agents/skills` · `$name` | Chapter 5 |
| Scheduled tasks | Scheduled | Chapter 6 |
| `claude -p` | `codex exec` | Chapter 7 |

Source: Compiled by this guide (the official docs do not compare the two tools directly)

**The biggest difference is the name of the rules file.** Codex reads `AGENTS.md` before it starts working.[^agents] If you leave Claude Code's `CLAUDE.md` as is, Codex will not read it. That is why we change this file first when moving our organizing tool (Chapter 3).

There is also a feature that moves things for you. **Import** (가져오기) in the ChatGPT app copies your rules file, skills, and settings from Claude Code into Codex.[^import] In this guide, we move them **by hand, one by one**, so you can see for yourself what changes and how. We introduce Import at the end of Chapter 3.

<Quiz id="ch501-compare" />

## Where You Use It and Pricing Plans

You can use Codex in several places.

- **ChatGPT desktop app**: Available for macOS, Windows, and Linux.[^desktop] This guide starts here.
- **Terminal (Codex CLI)**: Used inside the command-line window.[^cli] Covered in Chapter 7.
- **Cloud**: Creates a separate workspace for each task and keeps working even while your computer is asleep.[^cloud] Introduced in Chapter 6.

What you can use depends on your pricing plan.

| Plan | Monthly price | What you can use in Codex |
|---|---|---|
| Free | $0 | Lightweight model in the desktop app, gradual rollout |
| Go | $8 | Same as Free |
| Plus | $20 | Also on web, terminal, code editors, and iOS; stronger models |
| Pro | From $100 | Everything in Plus, plus higher usage limits |

Source: Codex official docs pricing page (excerpted)[^pricing]

**Free and Go are on a "gradual rollout"** (opening access to accounts in stages). If you do not see Codex on your screen, it may not have been rolled out to your account yet. The hands-on exercises in this guide assume **Plus or higher**.

Your usage limit is **shared with ChatGPT Work**. If you hand off many big jobs to Work, you will have less left for Codex.[^shared] We cover usage limits in more detail in Chapter 8.

<Quiz id="ch501-where" />

## What You Will Do in This Stage

You will take the "organizing tool" folder from the Claude Code chapters as is and make it run in Codex. If you skipped the Claude Code chapters, you can download the same starting files from "Practice Materials (연습 자료)" in the [Stage 3 Codex Table of Contents](./).

1. Chapter 2: Open Codex in the app and organize one meeting note.
2. Chapter 3: Move `CLAUDE.md` to `AGENTS.md` and test whether Codex follows the rules without being told.
3. Chapter 4: Practice the permissions menu, viewing what changed, and undoing changes.
4. Chapter 5: Move three skills over and create a weekly review with a single `$weekly-review` line.
5. Chapters 6–8: Compare and wrap up scheduling, the terminal, and safety against Claude Code.

**You do not need to memorize everything up front.** Once you redo what you did in Claude Code inside Codex, the differences will stand out on their own.

## Summary

- You use Codex by selecting "Codex" inside the ChatGPT desktop app. Chat, Work, and Codex live in one app.
- Codex shows technical details like what changed. You can use it even if you do not code.
- The concepts are almost the same as Claude Code. The names differ, such as `AGENTS.md` for the rules file and `$name` for skills.
- Free and Go are on a gradual rollout. Exercises assume Plus or higher, and usage limits are shared with Work.

## Glossary

| Term | One-line meaning |
|---|---|
| Codex | OpenAI's coding agent. A mode you select inside the ChatGPT app |
| ChatGPT Work | A ChatGPT mode that handles full deliverables. Hides technical details |
| AGENTS.md | The rules file Codex reads before doing any work |
| Rollout | Opening a feature to accounts gradually in stages |

<ChapterDone :chapter="501" />

Next chapter: [Chapter 2. Getting Started with Codex in the ChatGPT App](02-first-task.md)

[^modes]: Codex official docs, "Use ChatGPT". "Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt (checked on 2026-11-01)
[^compare]: Codex official docs, "Use ChatGPT". "ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt (checked on 2026-11-01)
[^prefer]: Codex official docs, "Use ChatGPT". "If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt (checked on 2026-11-01)
[^agents]: Codex official docs, "Custom instructions with AGENTS.md". "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^import]: Codex official docs, "Import from another agent". "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^desktop]: Codex official docs, "Quickstart". "The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart (checked on 2026-11-01)
[^cli]: Codex official docs, "Codex CLI". "Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli (checked on 2026-11-01)
[^cloud]: Codex official docs, "Codex Cloud". "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (checked on 2026-11-01)
[^pricing]: Codex official docs, "Pricing". "GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing (checked on 2026-11-01)
[^shared]: Codex official docs, "Pricing". "ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing (checked on 2026-11-01)
