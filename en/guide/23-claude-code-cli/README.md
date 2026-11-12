# Step 3 · Claude Code Terminal Guide

In Step 2, you **asked questions and got answers** in chat. In this guide, you call Claude Code from the terminal and let Claude **read and edit files directly inside a folder on your computer**.
It is fine if you have never opened a terminal. You do not need to know how to code. Chapter 1 starts with opening the terminal, and by the end you will build a weekly review that runs with a single command.

> **This guide is based on the official Claude Code documentation (code.claude.com/docs) checked on November 6, 2026, and on actual runs of Claude Code 2.1.318 on Linux on the same day.** The author's personal settings were turned off for these runs so they would not mix in. Nothing was run on macOS or Windows. Those parts are based on the official documentation. Any feature that was not actually run is pointed out where it appears.
> Claude Code requires a **paid account** (Pro, Max, Ultra, Team, Enterprise, or Console). Features and commands change often. If your screen looks different, follow the names shown on your screen.

| Chapter | Reading | Title | What You Will Learn |
|---|---|---|---|
| 1 | Required | [The Terminal and Claude Code](01-what-is.md) | What a terminal is, how to open it on your computer |
| 2 | Required | [Terminal Basics](02-shell-basics.md) | Moving between folders, handling files, making a practice folder |
| 3 | Required | [Installing and Logging In](03-install-login.md) | Installing on each operating system, logging in, checking the version |
| 4 | Required | [Your First Session](04-first-session.md) | Confirming folder trust, reading the screen, your first meeting minutes |
| 5 | Required | [Input Tips and Commands](05-input-commands.md) | `@`, `!`, `/`, multi-line input, shortcuts |
| 6 | Required | [Sessions and Context](06-sessions-context.md) | Naming, continuing, `/context`, `/compact`, `/clear` |
| 7 | Required | [Permissions and Undo](07-permissions-undo.md) | Permission modes, permission prompts, rewinding, deny rules |
| 8 | Required | [Project Memory and Settings](08-memory-settings.md) | CLAUDE.md, settings files |
| 9 | Required | [Skills and Extensions](09-skills-extensions.md) | Making skills, plugins, MCP, subagents |
| 10 | Required | [One-Line Runs and Automation](10-headless-automation.md) | `claude -p`, allowing in advance, `주간정리.sh` |
| 11 | Required | [Hooks and Customizing the Screen](11-hooks-statusline.md) | A change-log hook, the status line, output styles |
| 12 | Required | [Parallel Work and Remote](12-parallel-remote.md) | Your first Git record, worktree, `/loop`, `/goal`, remote control |
| 13 | Required | [Cost, Safety, and Troubleshooting](13-cost-safety-trouble.md) | Usage, models, sandbox, data, handling errors |
| 14 | Required | [Practice Exercises and Using It Like a Pro](14-practice-expert.md) | Exercises and a checklist, a weekly review from your own notes, a weekly routine |

If you see an unfamiliar command, look it up in the [Command Reference](command-reference.md). It collects the commands, options, and symbols in this course along with what they mean.

## Practice Files

You will practice in the `~/hello-ai-연습/터미널` folder with the notes below. **All of them are fictional** (one week in the life of Seoyeon, a staff member at a small cafe called "Corner Cafe").
In Chapter 2, you put in only the weekly meeting notes. The ad-hoc meeting notes go in during Chapter 13.

| File | Contents |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | Jumbled weekly meeting notes |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) | Notes with a hidden instruction (for the Chapter 13 safety experiment) |

This guide also shares the **results** it made from actual runs. Compare them with your own results. Even with the same request, the shape will differ a little each time.

| Chapter | Result |
|---|---|
| 4 | [Meeting minutes](/practice/cli/results/4장-회의록.txt) |
| 8 | [CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) |
| 9 | [The meeting-notes skill](/practice/cli/results/9장-스킬-meeting-notes.txt) |
| 10 | [주간정리.sh](/practice/cli/results/10장-주간정리.sh.txt) · [Meeting minutes made by the script](/practice/cli/results/10장-회의록-스크립트로.txt) |
| 11 | [Settings file](/practice/cli/results/11장-settings.json.txt) |

If you would rather not use the terminal, see the [Claude Code App Guide](/en/guide/20-claude-code/). It organizes the same cafe notes with the desktop app. Accounts, pricing plans, and chat features are explained in [Step 2 · Claude Guide](/en/guide/10-claude/).
