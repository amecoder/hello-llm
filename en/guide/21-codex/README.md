# Step 3 · Codex User Guide

Codex is an AI tool made by OpenAI that **works directly inside a folder on your computer**. Right now, you use it by choosing "Codex" inside the ChatGPT desktop app.
In this guide, you will move the "tool that organizes things your way" from the [Claude Code Guide](../20-claude-code/) over to Codex, and learn **only what is different from Claude Code**.

> **This guide is based on the official Codex docs (learn.chatgpt.com) and real test runs checked on November 1, 2026.** Features and menu names change often.
> Hands-on practice assumes a **Plus or higher** plan. Free and Go plans get access gradually, so you might not see Codex yet.

| Chapter | Reading | Title | What you will learn |
|---|---|---|---|
| 1 | Required | [What Codex Is and How It Differs from Claude Code](01-what-is.md) | Chat, Work, and Codex inside the ChatGPT app, how it maps to Claude Code, pricing plans |
| 2 | Required | [Starting Codex in the ChatGPT App](02-first-task.md) | Installing, choosing Codex, opening a folder, delegating your first cleanup task |
| 3 | Required | [The Rules File: AGENTS.md](03-agents-md.md) | Moving CLAUDE.md, testing without stating the rules, importing and memory |
| 4 | Required | [Permissions and Undoing Changes](04-permissions-undo.md) | Three permission modes, protected folders, the review pane, undoing with Git |
| 5 | Required | [Moving Your Skills](05-skills.md) | .agents/skills, one line with $weekly-review, what went wrong and what was missed |
| 6 | Optional | [Schedules, Cloud, and Your Phone](06-schedule-cloud.md) | Schedule requirements and permissions, how Cloud differs, connecting your phone |
| 7 | Optional | [Using Codex in the Terminal](07-terminal.md) | Installing, codex exec (read-only by default), interactive commands |
| 8 | Required | [Cost, Data, Safety, and Choosing Your Tool](08-safety-choose.md) | Usage limits, data settings, a hidden-instruction experiment, using both tools together, practice exercises |

## Practice Files

Your starting point is the **organizer folder completed through Chapter 7 of the Claude Code guide**. If you skipped the Claude Code guide, download the files below and set up the same folder structure. Every note is **fictional**, and the dates and days of the week were made up for the story, so they do not match the real 2026 calendar.

| Location in folder | Files to download |
|---|---|
| `inbox/` | [meeting-2026-10-27-weekly.txt](/practice/en/notes/inbox/meeting-2026-10-27-weekly.txt) · [study-2026-10-28-prompt-lecture.txt](/practice/en/notes/inbox/study-2026-10-28-prompt-lecture.txt) · [review-2026-10-29.txt](/practice/en/notes/inbox/review-2026-10-29.txt) · [review-2026-10-30.txt](/practice/en/notes/inbox/review-2026-10-30.txt) · [review-2026-10-31.txt](/practice/en/notes/inbox/review-2026-10-31.txt) · [meeting-2026-10-29-adhoc.txt](/practice/en/notes/inbox/meeting-2026-10-29-adhoc.txt) |
| `templates/` | [minutes.md](/practice/en/notes/results/ch5-template-minutes.txt) · [study-notes.md](/practice/en/notes/results/ch5-template-study-notes.txt) · [weekly-review.md](/practice/en/notes/results/ch5-template-weekly-review.txt) · [README.md](/practice/en/notes/results/ch5-template-README.txt) |
| Top level | [CLAUDE.md](/practice/en/notes/results/ch6-CLAUDE.md.txt) |
| `.claude/skills/name/SKILL.md` | [meeting-notes](/practice/en/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/en/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/en/notes/results/ch7-skill-weekly-review.txt) |

When you save the downloaded files, rename their extensions to match the names in the table (for example, `ch5-template-minutes.txt` → `templates/minutes.md`). Leave the `notes/` folder empty.

We also share the **finished outputs** created with Codex in this guide. Even with the exact same request, the results look slightly different each time.

| Chapter | Output |
|---|---|
| 2 | [Meeting notes](/practice/en/notes/results/codex/ch2-minutes-2026-10-27-weekly.txt) |
| 3 | [AGENTS.md](/practice/en/notes/results/codex/ch3-AGENTS.md.txt) · [Study notes written using only the rules](/practice/en/notes/results/codex/ch3-study-notes-rule-check.txt) |
| 5 | [Weekly review made with a skill](/practice/en/notes/results/codex/ch5-weekly-review-with-skill.txt) |
| 7 | [codex exec output](/practice/en/notes/results/codex/ch7-codex-exec-output.txt) |
| 8 | [Meeting notes from a memo with a hidden instruction](/practice/en/notes/results/codex/ch8-minutes-hidden-instruction-memo.txt) |

If you have not read the Claude Code guide yet, start with the [Step 3 · Claude Code Guide](../20-claude-code/). That guide explains what folders, permissions, rules files, and skills are, and this guide links back to those explanations.
