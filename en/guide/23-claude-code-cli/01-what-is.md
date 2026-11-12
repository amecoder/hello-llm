# Chapter 1. The Terminal and Claude Code

<Badge type="tip" text="Required" /> Be sure to read this to follow this step.

> **One-line summary**: The terminal is a window where you tell your computer what to do with text. This course takes someone who has never opened a terminal all the way to installing Claude Code and, in the end, organizing weekly notes with a single command.[^tested]

The results in this course were produced on Linux. Nothing was run on macOS or Windows, and those two are based on the official documentation.

You do not have to be perfect from the start. It is fine if you do not know how to code. You just describe what you want in words.[^no-code]

## What Is a Terminal?

The **terminal** is a window where you control your computer by **typing text commands** instead of using a mouse. Picture a black (or white) window with a blinking cursor.[^cursor]

Normally, you double-click a folder to open it. In the terminal, you type "go to this folder" in text. The job is the same. Only the method is different.

In the terminal, you cannot click a menu to pick something. You move around with the arrow keys.[^no-click] It may feel strange at first, but you will get used to it soon. In Chapter 2, you will learn only the commands you really need, step by step.

<Quiz id="ch801-terminal" />

## How Is It Different from Chat?

If you have used the Claude chat window, this order will feel familiar. You copy your notes and paste them in. You get an answer. You copy that answer again and move it into a file.

Claude Code is an **agentic assistant** that runs in the terminal.[^agentic] An agent is a program that does not just answer but works through the steps on its own. When you give it a task, it gathers context, takes action, and checks the results.[^phases]

Putting the same task side by side shows the difference.

| | Chat window | Claude Code |
|---|---|---|
| Handing over notes | Paste them yourself | Reads them from the folder on its own |
| Result | A written answer | An answer and files |
| Cleanup | You copy it over | Claude saves it |

Claude Code reads the files it needs on its own.[^reads] It can also read and organize files you already have.[^organize] So you can just say something like this.

```text
Read the meeting notes in inbox and save them as 회의록.md. Answer in one line.
```

You do not need to type it now. You will do it in Chapter 4.

Because it handles files directly, there are also things to be careful about. You will learn in detail what to allow in later chapters.

<Quiz id="ch801-diff" />

## Opening the Terminal on Your Computer

The terminal is already on your computer. You do not need to install it. Open it the way that matches your operating system.

- **Mac**: Press `Cmd + Space` to open Spotlight Search. Type `Terminal` and press Enter.[^open-mac] If your keyboard is set to Korean, you can also type `터미널`.
- **Linux**: On most systems, pressing `Ctrl + Alt + T` opens it. If that does not work, look for "Terminal" in the application menu.[^open-linux]
- **Windows**: Press `Win + X` and choose **Windows PowerShell** or **Terminal** from the menu.[^open-win]

Windows has two kinds of windows: PowerShell and CMD. They use different commands, so you need to tell them apart. If you see `PS` at the very start, like `PS C:\`, it is PowerShell. If it starts with `C:\` without `PS`, it is CMD.[^ps-cmd] All the Windows commands in this course are for **PowerShell**.

If the window opened, half of today's work is done. When you finish practicing, you can just close the window.

<Quiz id="ch801-open" />

## What You Need

You need three things.

1. **A paid account**: The free claude.ai plan does not include Claude Code.[^free] You need a paid account such as Pro or Max.[^paid]
2. **A suitable computer**: Mac, Windows, and Linux all work. The operating system version and memory requirements are in the box below.
3. **An internet connection**: This is required.[^ram]

::: details More details (click to expand)
- **Accounts you can use**: One of Pro, Max, Ultra, Team, Enterprise, or Console.[^paid]
- **Operating system**: macOS 13.0 or later on a Mac, Windows 10 1809 or later on Windows.[^os] On Linux, Ubuntu 20.04 or later and others are supported.[^linux]
- **Memory**: You need 4GB or more.[^ram]
- **Region**: It is available only in countries Anthropic supports.[^countries]
:::

This course provides the practice files. You practice with made-up cafe notes, so you can start without worrying about touching your own files.

<Quiz id="ch801-ready" />

## What You Will Build in This Course

This course has one main thread: **a weekly review that runs with a single command**.

You practice with the notes of Seoyeon, a staff member at a small cafe called "Corner Cafe." You put jumbled meeting notes into a folder. You run one script (a file that lists commands in order). Then the notes are organized into meeting minutes one by one.

If you want a preview, open [the finished script](/practice/cli/results/10장-주간정리.sh.txt) and [the meeting minutes that script made](/practice/cli/results/10장-회의록-스크립트로.txt). You do not need to understand them yet.

This works because Claude Code has **a way of running that answers once and then ends**.[^oneshot] There is no back-and-forth conversation. You hand it the task in one line, and it answers and then ends on its own. You will learn this in Chapter 10.

If something goes wrong, the script can notice it.[^exit-code] That makes it a good fit for tasks nobody has to watch over.

The course goes in this order.

- **Chapters 1–5**: Terminal basics, installation, your first session, input tips
- **Chapters 6–9**: Continuing conversations, permissions and undo, project memory, skills
- **Chapters 10–13**: Automation, hooks, parallel work, cost and troubleshooting[^bash-only]
- **Chapter 14**: A weekly review built from your own notes

<Quiz id="ch801-goal" />

## How This Relates to the App Guide

There is also a desktop app for people who want to use windows and buttons instead of the terminal.[^gui] This site's [Claude Code App Guide](/en/guide/20-claude-code/) covers that app.

Here is how to choose which one to read.

- **The terminal feels like too much**: Go to the app guide. You do not have to learn the terminal right now.
- **You want to run tasks with a single command**: Keep reading this course.

This course assumes you have not read the app guide. You can follow it on your own. It uses the same Corner Cafe notes as the app guide, so if you have already read it, the content will look familiar.

<Quiz id="ch801-app" />

## Try It Yourself

1. Open the terminal on your computer using the method above.
2. Type the command below and press Enter.

```bash
claude --version
```

You will see one of two things. Either one is fine.

- **A number appears**, like `2.1.318 (Claude Code)`: It is already installed.[^version] Your number may be different.
- `command not found` or `not recognized` appears: It means the computer cannot find it yet.[^not-found] Depending on your screen language, it may appear in Korean. The meaning is the same. You will install it in Chapter 3. Nothing is broken.

Ask yourself: What is my computer's terminal? It is enough if you can answer with one of these: the Mac Terminal, the Linux terminal, or Windows PowerShell.

## Summary

- The terminal is a window where you control your computer by typing text commands. It is already on your computer.
- Claude Code is an agentic assistant that reads and makes files in a folder on its own.
- You need a paid account. It is not in the free plan.
- Windows commands are for PowerShell. Check that you see `PS`.
- The goal of this course is a weekly review that runs with a single command. If the terminal feels like too much, you can go to the app guide.

## Glossary

| Term | One-line meaning |
|---|---|
| Terminal | A window where you control your computer by typing text commands |
| PowerShell | The terminal program on Windows |
| CMD | The older Windows command window, which uses different commands from PowerShell |
| Agent | A program that works through steps on its own |
| Script | A file that lists commands in order |

<ChapterDone :chapter="801" />

Next chapter: [Chapter 2. Terminal Basics](02-shell-basics.md)

[^tested]: This course is based on the official Claude Code documentation checked on November 6, 2026. The results come from running Claude Code 2.1.318 on Linux on the same day. The author's personal settings were turned off for these runs so they would not mix in. Nothing was run on macOS or Windows. The content for those two is based on the official documentation. This note is not repeated in later chapters. Any feature that was not actually run is pointed out where it appears.
[^bash-only]: The scripts in this course are written for bash on Mac and Linux. bash is one kind of shell (the program in the terminal that understands commands). The default shell on a Mac is zsh, but this course runs scripts with bash, like `bash filename`. They do not run as is in Windows PowerShell. On Windows, you paste a block instead of running a saved file. This comes up again in Chapter 10.
[^no-code]: Claude Code official docs, "Terminal guide for new users." "You don't need to know how to code." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^cursor]: Claude Code official docs, "Terminal guide for new users." "A window will appear with a blinking cursor. This is your terminal, where you type commands." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^no-click]: Claude Code official docs, "Terminal guide for new users." "You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^agentic]: Claude Code official docs, "How Claude Code works." "Claude Code is an agentic assistant that runs in your terminal." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^phases]: Claude Code official docs, "How Claude Code works." "When you give Claude a task, it works through three phases: gather context, take action, and verify results." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^reads]: Claude Code official docs, "Quickstart." "Claude Code reads your project files as needed." https://code.claude.com/docs/en/quickstart (checked on 2026-11-06)
[^organize]: Claude Code official docs, "Terminal guide for new users." "Claude can read and organize files you already have:" https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^open-mac]: Claude Code official docs, "Terminal guide for new users." "Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^open-linux]: Claude Code official docs, "Terminal guide for new users." "On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^open-win]: Claude Code official docs, "Terminal guide for new users." "Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^ps-cmd]: Claude Code official docs, "Quickstart." "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." https://code.claude.com/docs/en/quickstart (checked on 2026-11-06)
[^paid]: Claude Code official docs, "Advanced setup." "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^free]: Claude Code official docs, "Advanced setup." "The free claude.ai plan does not include Claude Code access." https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^os]: Claude Code official docs, "Advanced setup." "macOS 13.0+" / "Windows 10 1809+ or Windows Server 2019+" https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^linux]: Claude Code official docs, "Advanced setup." "Ubuntu 20.04+" https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^ram]: Claude Code official docs, "Advanced setup." "4 GB+ RAM, x64 or ARM64 processor" / "internet connection required" https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^countries]: Claude Code official docs, "Advanced setup." "Anthropic supported countries" https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^oneshot]: Claude Code official docs, "Quickstart." "Run one-off query, then exit" https://code.claude.com/docs/en/quickstart (checked on 2026-11-06)
[^exit-code]: Claude Code official docs, "Run Claude Code programmatically." "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." https://code.claude.com/docs/en/headless (checked on 2026-11-06)
[^gui]: Claude Code official docs, "Advanced setup." "Prefer a graphical interface?" https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^version]: Claude Code official docs, "Advanced setup." "A working installation prints a version number such as `2.1.211 (Claude Code)`." https://code.claude.com/docs/en/setup (checked on 2026-11-06)
[^not-found]: Claude Code official docs, "Troubleshoot installation and login." "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install (checked on 2026-11-06)
