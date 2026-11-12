# Step 3 · Claude Code Guide

In Step 2, you **asked questions and got answers** in chat. In Step 3, you will learn Claude Code, where Claude **reads and edits files directly inside a folder on your computer**.
You do not need to know how to code. In this guide, you will practice with a folder of notes and tables, starting with the **Code tab in the Claude desktop app**—no terminal required.

> **This guide is based on the official Claude Code documentation (code.claude.com/docs) and actual screens checked on October 31, 2026.** Features and menu names change often.
> Claude Code requires a **paid subscription** (Pro, Max, Ultra, Team, or Enterprise). If your screen looks different, follow the names shown on your screen.

| Chapter | Reading | Title | What You Will Learn |
|---|---|---|---|
| 1 | Required | [What Claude Code Is and Where to Use It](01-what-is.md) | How it differs from chat, where to use it, pricing plans |
| 2 | Required | [Desktop App Setup and Your First Session](02-install.md) | Installing and signing in, the Code tab, picking a folder, delegating your first task |
| 3 | Required | [A Tour of the Screen](03-screen-tour.md) | Title bar buttons, viewing changes (Git), session info, the file pane |
| 4 | Required | [Permissions and Undo](04-permissions-undo.md) | Permission modes, rewinding, limits of undo, Git history |
| 5 | Required | [How to Delegate Well](05-delegate-well.md) | Being specific, designing 3 templates with Plan mode, verification criteria and evidence |
| 6 | Required | [Project Memory](06-claude-md.md) | Writing down your rules in CLAUDE.md and testing them in a new session |
| 7 | Required | [Skills, Plugins, and External Tools](07-skills-plugins.md) | Completing your tool with 3 organizing skills, permission prompts for protected paths, plugin safety |
| 8 | Optional | [Parallel Tasks, Cloud, and Scheduling](08-parallel-cloud-schedule.md) | Running sessions side by side, three ways to schedule, scheduling a Friday weekly review, using the cloud |
| 9 | Required | [Cost, Data, and Safety](09-cost-data-safety.md) | Usage limits, training settings and retention periods, hidden-instruction experiments and safety rules |
| 10 | Optional | [Using It in the Terminal](10-terminal.md) | Installation and basic commands, checking your organizing tool with `claude -p`, switching between app and terminal |
| 11 | Required | [Practice Exercises](11-practice.md) | 9 exercises and a checklist, ending with building your own organizing tool from your own notes |
| 12 | Advanced | [Using It Like a Pro](12-expert.md) | Picking the right tool for the job, adding features one by one when needed, a weekly organizing routine |

## Practice Files

The hands-on exercises in Step 3 use the 6 notes below. **All of them are fictional** (one week in the life of Seoyeon, a staff member at a small cafe called "Corner Cafe"). Create a `organizer/inbox` folder on your computer, download the files, and put them inside. The dates and days of the week in the notes were made up for the story and do not match the real 2026 calendar.

| File | Contents | First Used In |
|---|---|---|
| [meeting-2026-10-27-weekly.txt](/practice/en/notes/inbox/meeting-2026-10-27-weekly.txt) | Jumbled weekly meeting notes | Chapter 2 |
| [study-2026-10-28-prompt-lecture.txt](/practice/en/notes/inbox/study-2026-10-28-prompt-lecture.txt) | Lecture notes | Chapter 4 |
| [review-2026-10-29.txt](/practice/en/notes/inbox/review-2026-10-29.txt) · [10-30](/practice/en/notes/inbox/review-2026-10-30.txt) · [10-31](/practice/en/notes/inbox/review-2026-10-31.txt) | 3 days of daily reflections | Chapter 3 |
| [meeting-2026-10-29-adhoc.txt](/practice/en/notes/inbox/meeting-2026-10-29-adhoc.txt) | Note with hidden instructions (for the safety experiment) | Chapter 9 |

We also share the **output files** that this guide created with the real Claude Code app. Compare them with your own results. Even with the same request, the exact wording and layout will vary slightly each time.

| Chapter | Output |
|---|---|
| 2 | [Meeting minutes](/practice/en/notes/results/ch2-minutes-2026-10-27-weekly.txt) |
| 3 | [Meeting minutes with a status column](/practice/en/notes/results/ch3-minutes-status-column.txt) |
| 4 | [Study notes (before rewind)](/practice/en/notes/results/ch4-study-notes-2026-10-28.txt) |
| 5 | [Meeting minutes template](/practice/en/notes/results/ch5-template-minutes.txt) · [Study notes template](/practice/en/notes/results/ch5-template-study-notes.txt) · [Weekly review template](/practice/en/notes/results/ch5-template-weekly-review.txt) · [Template guide](/practice/en/notes/results/ch5-template-README.txt) |
| 6 | [CLAUDE.md](/practice/en/notes/results/ch6-CLAUDE.md.txt) · [Weekly review written from rules alone](/practice/en/notes/results/ch6-weekly-review-2026-10-27.txt) |
| 7 | [meeting-notes](/practice/en/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/en/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/en/notes/results/ch7-skill-weekly-review.txt) skills · [Study notes created with a skill](/practice/en/notes/results/ch7-study-notes-with-skill.txt) |
| 9 | [Meeting minutes created from the hidden-instruction note](/practice/en/notes/results/ch9-minutes-hidden-instruction-memo.txt) |
| 10 | [claude -p output](/practice/en/notes/results/ch10-claude-p-output.txt) |

If you have not read Step 2 yet, start with [Step 2 · Claude Guide](../10-claude/). Accounts, pricing plans, and chat features are explained there, and Step 3 links back to them when needed.
