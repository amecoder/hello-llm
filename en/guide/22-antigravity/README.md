# Step 3 · Antigravity User Guide

Antigravity is an AI tool made by Google that **works directly inside a folder on your computer**. It comes as a desktop app and a terminal program called `agy`.
In this guide, you will **open the same folder as is, without moving anything**—the "tool that organizes things your way (내 방식대로 정리해 주는 도구)" folder you built through the [Codex Guide](../21-codex/). You will check that it works in this third tool too, and learn only what is different.

> **This guide is based on the official Antigravity docs (antigravity.google/docs) checked on November 1, 2026, and results run with `agy` in the terminal. We have not practiced with the app screens yet.** Features and menu names change often.
> Out of the three tools, this is the only one where you can use every feature with a **free Google account** (age 18 or older). Only your usage limits and models differ by plan.

| Chapter | Reading | Title | What you will learn |
|---|---|---|---|
| 1 | Required | [What Antigravity Is and How It Differs from the First Two Tools](01-what-is.md) | Four forms, all features even for free, models, how the three tools match up |
| 2 | Required | [Installing the App and Your First Cleanup](02-first-task.md) | Install and sign in, open as a project, Planning mode and Proceed, Review pane |
| 3 | Required | [Rules and Skills — No Need to Move Anything](03-rules-skills.md) | Keep AGENTS.md and .agents/skills as is, 0→1 with the same note, /skill-name |
| 4 | Required | [Permissions and Undoing](04-permissions-undo.md) | Four presets, fence defaults (app and terminal), watch out for Discard, /rewind |
| 5 | Optional | [Plans, Schedules, Browser, and Goals](05-plan-schedule.md) | /plan, /schedule and Automations, /browser, /goal, remote control |
| 6 | Optional | [Using It in the Terminal](06-terminal.md) | agy -p, silent refusal and exit code 0, folder trust, four traps |
| 7 | Required | [Cost, Data, Safety, and Choosing Among the Three Tools](07-safety-choose.md) | Usage and credits, Enable Telemetry, hidden-instruction test, using all three together, practice exercises |

## Practice Files

Your starting point is the **organizer folder completed through Chapter 5 of the Codex guide**. If you skipped the earlier steps, download the files below and set up the same folder structure. Every note is **made-up content**, and the dates and days of the week were invented for the story, so they do not match the real 2026 calendar.

| Location in folder | Files to download |
|---|---|
| `inbox/` | [meeting-2026-10-27-weekly.txt](/practice/en/notes/inbox/meeting-2026-10-27-weekly.txt) · [study-2026-10-28-prompt-lecture.txt](/practice/en/notes/inbox/study-2026-10-28-prompt-lecture.txt) · [review-2026-10-29.txt](/practice/en/notes/inbox/review-2026-10-29.txt) · [review-2026-10-30.txt](/practice/en/notes/inbox/review-2026-10-30.txt) · [review-2026-10-31.txt](/practice/en/notes/inbox/review-2026-10-31.txt) · [meeting-2026-10-29-adhoc.txt](/practice/en/notes/inbox/meeting-2026-10-29-adhoc.txt) |
| `templates/` | [minutes.md](/practice/en/notes/results/ch5-template-minutes.txt) · [study-notes.md](/practice/en/notes/results/ch5-template-study-notes.txt) · [weekly-review.md](/practice/en/notes/results/ch5-template-weekly-review.txt) · [README.md](/practice/en/notes/results/ch5-template-README.txt) |
| Top level | [AGENTS.md](/practice/en/notes/results/codex/ch3-AGENTS.md.txt) · [CLAUDE.md](/practice/en/notes/results/ch6-CLAUDE.md.txt) |
| `.agents/skills/name/SKILL.md` (put the same files in `.claude/skills/` if you also want to use Claude Code) | [meeting-notes](/practice/en/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/en/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/en/notes/results/ch7-skill-weekly-review.txt) |

Rename each downloaded file and its extension to match the table when you save it (for example, `ch3-AGENTS.md.txt` → `AGENTS.md`). Leave the `notes/` folder empty.

We also share the **results** this guide produced with Antigravity. Even with the exact same request, your results will look slightly different.

| Chapter | Results |
|---|---|
| 3 | [Meeting notes (without AGENTS.md)](/practice/en/notes/results/antigravity/ch3-minutes-without-AGENTS.txt) · [Meeting notes (with AGENTS.md)](/practice/en/notes/results/antigravity/ch3-minutes-with-AGENTS.txt) · [Weekly review made with a skill](/practice/en/notes/results/antigravity/ch3-weekly-review-with-skill.txt) |
| 6 | [agy -p output](/practice/en/notes/results/antigravity/ch6-agy-p-output.txt) |
| 7 | [Meeting notes made from the hidden-instruction note](/practice/en/notes/results/antigravity/ch7-minutes-hidden-instruction-memo.txt) |

If you have not read the Codex guide yet, start with the [Step 3 · Codex Guide](../21-codex/). If you only have a free account, you can start practicing right here with this guide.
