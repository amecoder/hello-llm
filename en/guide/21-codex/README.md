# Step 3 · Codex User Guide

Codex is an AI tool made by OpenAI that **works directly inside a folder on your computer**. Right now, you use it by choosing "Codex" inside the ChatGPT desktop app.
In this guide, you will move the "tool that organizes things your way" from the [Claude Code Guide](../20-claude-code/) over to Codex, and learn **only what is different from Claude Code**.

> **This guide is based on the official Codex docs (learn.chatgpt.com) and real test runs checked on November 1, 2026.** Features and menu names change often.
> Hands-on practice assumes a **Plus or higher** plan. Free and Go plans get access gradually, so you might not see Codex yet.

| Chapter | Title | What you will learn |
|---|---|---|
| 1 | [What Codex Is and How It Differs from Claude Code](01-what-is.md) | Chat, Work, and Codex inside the ChatGPT app, how it maps to Claude Code, pricing plans |
| 2 | [Starting Codex in the ChatGPT App](02-first-task.md) | Installing, choosing Codex, opening a folder, delegating your first cleanup task |
| 3 | [The Rules File: AGENTS.md](03-agents-md.md) | Moving CLAUDE.md, testing without stating the rules, importing and memory |
| 4 | [Permissions and Undoing Changes](04-permissions-undo.md) | Three permission modes, protected folders, the review pane, undoing with Git |
| 5 | [Moving Your Skills](05-skills.md) | .agents/skills, one line with $weekly-review, what went wrong and what was missed |
| 6 | [Schedules, Cloud, and Your Phone](06-schedule-cloud.md) | Schedule requirements and permissions, how Cloud differs, connecting your phone |
| 7 | [Using Codex in the Terminal](07-terminal.md) | Installing, codex exec (read-only by default), interactive commands |
| 8 | [Cost, Data, Safety, and Choosing Your Tool](08-safety-choose.md) | Usage limits, data settings, a hidden-instruction experiment, using both tools together, practice exercises |

## Practice Files

Your starting point is the **organizer folder completed through Chapter 7 of the Claude Code guide**. If you skipped the Claude Code guide, download the files below and set up the same folder structure. Every note is **fictional**, and the dates and days of the week were made up for the story, so they do not match the real 2026 calendar.

| Location in folder | Files to download |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| Top level | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/name/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

When you save the downloaded files, rename their extensions to match the names in the table (for example, `5장-양식-회의록.txt` → `templates/회의록.md`). Leave the `notes/` folder empty.

We also share the **finished outputs** created with Codex in this guide. Even with the exact same request, the results look slightly different each time.

| Chapter | Output |
|---|---|
| 2 | [Meeting notes](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [Study notes written using only the rules](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [Weekly review made with a skill](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [codex exec output](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [Meeting notes from a memo with a hidden instruction](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

If you have not read the Claude Code guide yet, start with the [Step 3 · Claude Code Guide](../20-claude-code/). That guide explains what folders, permissions, rules files, and skills are, and this guide links back to those explanations.
