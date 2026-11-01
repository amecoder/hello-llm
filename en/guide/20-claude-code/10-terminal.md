# Chapter 10. Using It in the Terminal — The Same Organizer in One Line

> **One-line summary**: Claude Code for the terminal runs on the **same engine** as the desktop app. Open it in the same folder and it uses **your CLAUDE.md, skills, and settings as they are**.
> With a single line like `claude -p "task"`, it asks a question, gets the answer, and exits right away. This is very useful for automating repetitive tasks.

This chapter is based on the official Claude Code documentation checked on October 31, 2026, and actual runs of Claude Code 2.1.316 in the macOS Terminal. **If you are new to the terminal, you can skip this chapter.** You can use the entire organizer tool with just the desktop app.

## What Is the Terminal?

The **Terminal** is a window where you control your computer by **typing text commands** instead of using a mouse. On macOS, open "Applications → Utilities → Terminal" (응용 프로그램 → 유틸리티 → 터미널). On Windows, use PowerShell. The official documentation also has a separate guide for people opening a terminal for the first time.[^install]

Even when you already have the desktop app, there are two reasons to use the terminal:

- **One-line tasks**: You can ask a single question, get the answer, and finish right away.
- **Automation**: Other programs or scripts can call Claude Code. The desktop app does not have this scripting feature.[^no-script]

<Quiz id="ch410-why" />

## Installing and Starting

Open the terminal and paste the single command that matches your computer.[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**Never paste an install command from an unfamiliar website as is.** The command above downloads a script from the internet and runs it right away. Always check that it matches **the exact text in the official documentation (code.claude.com)** before running it.

Once the installation finishes, move to your working folder and type `claude`.[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

The first time, it will ask you to log in. If you have a subscription account, just finish logging in through your browser.[^start] `cd` means "move to this folder." It is the same as picking a folder in the desktop app.

<Quiz id="ch410-install" />

## Basic Commands

| Command | What it does |
|---|---|
| `claude` | Start in interactive mode (same as a session in the app) |
| `claude "task"` | Start in interactive mode with a first request |
| `claude -p "task"` | Ask once, get the answer, and exit |
| `claude -c` | Continue the most recent conversation in this folder |
| `claude -r` | Pick a past conversation to continue |

Source: Claude Code official docs[^commands]

After starting in interactive mode, you use `/` commands just like in the app. `/help` shows available commands, and `/resume` shows past conversations.[^start]

<Quiz id="ch410-commands" />

## Hands-on — Checking the Organizer with One Line

Here is what we ran in the organizer folder:

```bash
cd ~/hello-ai-연습/정리도구
claude -p "Show the list of files in the notes folder, and tell me in one line per file which template (from templates) each file used. Do not edit any files. Keep the answer short, as a table only."
```

A few seconds later, the answer appeared and the command finished right away (full output: [10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)).

| notes file | Template used |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

Source: Hands-on result from this guide (2026-10-31). The end of the answer also included "Checked scope: 4/4."

The terminal **read the template files we made in the app just as they were.** However, "Checked scope: 4/4" came with a note that it **only compared the first 15 lines** of each file. Reading notes like this is the "checking the evidence" habit from Chapter 5.

The official documentation explains that the terminal and the app **share** CLAUDE.md and skills.[^same] To see for yourself, open interactive `claude`, type `/`, and check if the skill names from Chapter 7 appear.

However, a one-off run with `-p` **cannot ask for your permission in the middle.** Tasks that need permission are denied unless you pre-approve them with an allow rule.[^p-deny] For example, a skill that writes files like `claude -p "/weekly-review"` may be denied permission to write. So at first, practice with **read-only questions** like the hands-on example above.

<Quiz id="ch410-practice" />

## Switching Between the App and the Terminal

- You can use both **at the same time, in the same folder**. They keep separate session lists, but share settings and CLAUDE.md.[^same]
- To move a conversation from the terminal to the app, type `/desktop` in the terminal (macOS and Windows x64, signed in with a subscription).[^to-desktop]
- Going the other way, you can bring a terminal session into the app using **Import Claude Code CLI session (Claude Code CLI 세션 가져오기)** on the app's home screen (the guide card on the home screen in Chapter 2).

<Quiz id="ch410-switch" />

## Try It Yourself

1. Check that the install command in the official documentation matches the one above, then install it (if you already have it, run `claude --version`).
2. Move to the organizer folder and run the read-only `claude -p` question above.
3. Open interactive mode with `claude` and type `/help`. Type `/` and check that your skill names from Chapter 7 appear.
4. Exit the conversation and run `claude -c` to continue the conversation you just had.

**Next assignment**: In Chapter 11, you will put together everything you have learned so far and build an organizer tool from scratch using **your own notes**.

## Summary

- Claude Code for the terminal runs on the same engine as the app. In the same folder, they share CLAUDE.md, skills, and settings.
- Always check that the install command matches the official documentation before running it.
- `claude` is interactive mode, `claude -p` asks once and exits, and `claude -c` continues a conversation.
- Running with `-p` cannot ask for permission in the middle. Start by practicing with read-only questions.

## Glossary

| Term | One-line meaning |
|---|---|
| Terminal | A window where you control the computer by typing text commands |
| CLI | A program used in the terminal (Command Line Interface) |
| `cd` | A command to move to another folder |
| `-p` | A way to run a single question, print the answer, and exit |

<ChapterDone :chapter="410" />

Next chapter: [Chapter 11. Hands-on Project](11-practice.md)

[^install]: Claude Code official docs, "Quickstart". "To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (checked on 2026-10-31)
[^start]: Claude Code official docs, "Quickstart". "Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart (checked on 2026-10-31)
[^commands]: Claude Code official docs, "Quickstart". Command table: "Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart (checked on 2026-10-31)
[^no-script]: Claude Code official docs, "Desktop application". Feature comparison table, Desktop column of the "Scripting and automation" row: "Not available" https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^same]: Claude Code official docs, "Desktop application". "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^to-desktop]: Claude Code official docs, "Desktop application". "To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^p-deny]: Claude Code official docs, "Choose a permission mode". "Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes (checked on 2026-10-31)
