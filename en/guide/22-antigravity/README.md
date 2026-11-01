# Step 3 · Antigravity User Guide

Antigravity is an AI tool made by Google that **works directly inside a folder on your computer**. It comes as a desktop app and a terminal program called `agy`.
In this guide, you will **open the same folder as is, without moving anything**—the "tool that organizes things your way (내 방식대로 정리해 주는 도구)" folder you built through the [Codex Guide](../21-codex/). You will check that it works in this third tool too, and learn only what is different.

> **This guide is based on the official Antigravity docs (antigravity.google/docs) checked on November 1, 2026, and results run with `agy` in the terminal. We have not practiced with the app screens yet.** Features and menu names change often.
> Out of the three tools, this is the only one where you can use every feature with a **free Google account** (age 18 or older). Only your usage limits and models differ by plan.

| Chapter | Title | What you will learn |
|---|---|---|
| 1 | [What Antigravity Is and How It Differs from the First Two Tools](01-what-is.md) | Four forms, all features even for free, models, how the three tools match up |
| 2 | [Installing the App and Your First Cleanup](02-first-task.md) | Install and sign in, open as a project, Planning mode and Proceed, Review pane |
| 3 | [Rules and Skills — No Need to Move Anything](03-rules-skills.md) | Keep AGENTS.md and .agents/skills as is, 0→1 with the same note, /skill-name |
| 4 | [Permissions and Undoing](04-permissions-undo.md) | Four presets, fence defaults (app and terminal), watch out for Discard, /rewind |
| 5 | [Plans, Schedules, Browser, and Goals](05-plan-schedule.md) | /plan, /schedule and Automations, /browser, /goal, remote control |
| 6 | [Using It in the Terminal](06-terminal.md) | agy -p, silent refusal and exit code 0, folder trust, four traps |
| 7 | [Cost, Data, Safety, and Choosing Among the Three Tools](07-safety-choose.md) | Usage and credits, Enable Telemetry, hidden-instruction test, using all three together, practice exercises |

## Practice Files

Your starting point is the **organizer folder completed through Chapter 5 of the Codex guide**. If you skipped the earlier steps, download the files below and set up the same folder structure. Every note is **made-up content**, and the dates and days of the week were invented for the story, so they do not match the real 2026 calendar.

| Location in folder | Files to download |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| Top level | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/name/SKILL.md` (put the same files in `.claude/skills/` if you also want to use Claude Code) | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

Rename each downloaded file and its extension to match the table when you save it (for example, `3장-AGENTS.md.txt` → `AGENTS.md`). Leave the `notes/` folder empty.

We also share the **results** this guide produced with Antigravity. Even with the exact same request, your results will look slightly different.

| Chapter | Results |
|---|---|
| 3 | [Meeting notes (without AGENTS.md)](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [Meeting notes (with AGENTS.md)](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [Weekly review made with a skill](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [agy -p output](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [Meeting notes made from the hidden-instruction note](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

If you have not read the Codex guide yet, start with the [Step 3 · Codex Guide](../21-codex/). If you only have a free account, you can start practicing right here with this guide.
