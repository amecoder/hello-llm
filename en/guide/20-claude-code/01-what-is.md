# Chapter 1. What Claude Code Is and Where You Use It — How It Differs from Chat, Where to Run It, and Pricing

> **In One Line**: Claude Code is a version of Claude that **directly reads folders on your computer, edits files, and runs commands**. Instead of getting an answer in chat to copy and paste, you hand off the work and review the results.
> You need a **paid subscription** (Pro, Max, Ultra, Team, or Enterprise) to use it. In this stage, you start with the **desktop app**, so you do not need a terminal.

This chapter is based on the Claude Code official docs checked on October 31, 2026. Features and menu names change often.

## How It Differs from Chat

In the Claude chat you used in Stage 2, you **asked a question and got an answer**. You copied the text from the answer and pasted it into your file.

**Claude Code works directly inside a folder on your computer.** The official docs introduce Claude Code as a tool that "reads your folders, edits files, and runs commands."[^overview] When you describe what you want in plain words, it plans the approach, works across multiple files, and even checks that everything works.[^overview]

| | Chat (Stage 2) | Claude Code (Stage 3) |
|---|---|---|
| Where it works | Inside the chat window | Inside a folder on your computer |
| Files | You upload files, and you paste the answers back | Claude directly reads and edits files inside the folder |
| Multi-step work | You guide it one step at a time | It carries out plan → work → check on its own |
| Your job | Read the answer and copy it over | Hand off the task and review what changed |

Source: Summary by this guide (the official docs do not compare it directly with chat)[^overview]

This approach is called an **agent** (an AI that carries out multiple steps on its own). The official docs also call Claude Code an "agentic coding tool."[^overview]

**Cowork** in the Stage 2 Claude guide was also a feature for handing off whole tasks ([Stage 2 Claude Chapter 8](../10-claude/08-cowork.md)). The desktop app includes Chat, Cowork, and Claude Code (the **Code** tab) together.[^linux] This stage covers the **Code** tab.

<Quiz id="ch401-what" />

## What You Can Hand Off to It

Even though "Code" is in the name, what it really does is **read and edit files inside a folder**.[^overview] The examples in the official docs are developer tasks.[^overview]

- Building features and fixing bugs
- Pasting an error message or describing the symptom in words when a bug happens
- Repetitive tasks like writing tests, fixing formatting errors across multiple files, and writing release notes (summaries of what changed)

**In this guide, you practice with a folder of note files instead of code.** Throughout Stage 3, you will gradually build a "tool that organizes notes your way": you drop in messy notes—like meeting notes, study notes, or daily reflections—and get back meeting minutes, study notes, or weekly reviews in **the format you set**. Your first task will be a request like this:

```
Read the meeting notes in the inbox folder and organize them into meeting minutes. Split them into three parts: Decisions / To-dos (owner and due date) / Topics for next time, and save them as a new file in the notes folder. Do not change the original notes.
```

In chat, you would have had to upload the note, copy the answer, and paste it into a new file to save. Claude Code reads the folder directly and creates the meeting minutes file for you. All you have to do is **review the created file to make sure it looks right**.

There are other services that summarize things in a fixed format. In Claude Code, you can **save your own format—like "always split to-dos into owner and due date"—as a file, and use it without explaining it again every time**. You will learn how to do that in Chapters 6 and 7.

However, **because it edits files directly, you also need to be more careful.** That is why this stage makes sure to teach you how to decide what to allow ([Chapter 4](04-permissions-undo.md)) and how to check what changed.

<Quiz id="ch401-tasks" />

## Where You Use It

You can use Claude Code in several places. Wherever you use it, the **same engine** (core program) runs underneath; only the screen changes to fit how you work.[^platforms]

| Where you use it | Best for |
|---|---|
| **Desktop app** (Code tab) | Reviewing changes visually, running multiple tasks side by side, simple setup |
| Terminal (CLI) | Working in a command window, automation |
| Editors like VS Code | Using it right inside a code editor |
| Web (Cloud) | Long-running tasks, work that should keep going even when you turn off your computer |
| Mobile phone | Starting and checking on tasks while away from your desk |

Source: Claude Code official docs[^platforms]

**This guide starts with the desktop app.** For people who do not want to use a terminal, the official docs also note that the desktop app gives you the same engine with a graphical interface.[^platforms] Because Claude Code is built into the desktop app, there is no separate program to install.[^quickstart]

You can also mix and match different places for the same task.[^platforms] We cover the terminal in Chapter 10, and web and mobile in Chapter 8.

<Quiz id="ch401-where" />

## What You Need — Pricing Plans

**Claude Code is only available on paid subscriptions.** You need a Pro, Max, Ultra, Team, or Enterprise subscription, or a Console (API) account; **you cannot use it on the free plan.**[^setup] For personal subscriptions (Pro, Max, Ultra), you log in with your claude.ai account.[^auth]

- Plan names have changed. **Ultra is the new name for the old Max 20x, and Max is the new name for the old Max 5x.**[^availability] If you see "Max 5x" in older posts, that is today's Max.
- Pricing and usage limits were covered in the Stage 2 Claude guide ([Stage 2 Claude Chapter 1](../10-claude/01-getting-started.md#plans-at-a-glance)). Your usage allowance is **shared across every place you use Claude Code**, including the desktop app and terminal.[^desktop] On Team and Enterprise plans, it is also shared with Chat and Cowork.[^costs]
- Advertised usage limits assume **ordinary use by one person**.[^legal] Letting a third-party service send requests on your behalf using your subscription login is also not allowed.[^legal]

You can try it out first and decide later which plan fits you best. Chapter 9 covers how to check your usage.

<Quiz id="ch401-plan" />

## What You Will Learn in This Stage

| Chapter | What you learn |
|---|---|
| [Chapter 2](02-install.md) | Install the desktop app and hand off your first task |
| Chapter 3 | Take a tour of the screen |
| Chapters 4–5 | How to allow and undo actions, and how to give good instructions |
| Chapters 6–7 | Write down project rules and expand features |
| Chapters 8–9 | Run multiple tasks at once, use the cloud and schedules, and manage cost and safety |
| Chapter 10 | Use it in the terminal |
| Chapters 11–12 | Hands-on project and tips for using it like a pro |

You do not need to know everything from the start. Handing off one small task in Chapter 2 is plenty to begin with.

## Try It Yourself

1. Log in to claude.ai and check which plan you are on right now. If you are on the free plan, you can do the hands-on steps in this stage after subscribing.
2. Write down one "folder task" on your computer that you would like to hand off to Claude (for example: gathering scattered notes into a single file).
3. Count how many times you would have had to copy and paste if you did that task in chat.

**Ongoing challenge**: Pick one thing you organize every week (meeting minutes, class notes, reflections, etc.) and write down in three lines what format you want it organized into (for example: "Decisions / To-dos (owner and due date) / Topics for next time"). In Chapter 2, you will hand off your first organization task using sample notes, and in Chapter 11, you will do it with your own notes.

## Summary

- Claude Code is an agentic tool that directly reads folders on your computer, edits files, and runs commands.
- In chat, you get an answer and copy it over yourself; in Claude Code, you hand off the work and review the results.
- The desktop app, terminal, editors, web, and mobile app all run the same engine. This stage starts with the desktop app.
- You need a Pro, Max, Ultra, Team, or Enterprise subscription; you cannot use it on the free plan. Ultra is the old Max 20x, and Max is the old Max 5x.

## Glossary

| Term | One-line meaning |
|---|---|
| Claude Code | Claude that works directly inside folders on your computer |
| Agent | An AI that carries out multiple steps on its own |
| Code tab | Where you use Claude Code inside the desktop app |
| CLI | A program where you type text commands (the terminal) |
| Surface | A screen where you use Claude Code, such as the desktop app, terminal, or web |

<ChapterDone :chapter="401" />

Next chapter: [Chapter 2. Installing the Desktop App and Your First Session](02-install.md)

[^overview]: Claude Code official docs, "Overview". "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview (checked on 2026-10-31)
[^platforms]: Claude Code official docs, "Platforms and integrations". "Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms (checked on 2026-10-31)
[^linux]: Claude Code official docs, "Claude Desktop on Linux (beta)". "The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux (checked on 2026-10-31)
[^quickstart]: Claude Code official docs, "Get started with the desktop app". "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart (checked on 2026-10-31)
[^setup]: Claude Code official docs, "Advanced setup". "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." The terms page (legal-and-compliance) also mentions Free users, which looks inconsistent, so we followed the explicit statement in this document for eligibility. https://code.claude.com/docs/en/setup (checked on 2026-10-31)
[^desktop]: Claude Code official docs, "Desktop application". "Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^costs]: Claude Code official docs, "Manage costs effectively". "The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs (checked on 2026-10-31)
[^auth]: Claude Code official docs, "Authentication". "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (checked on 2026-10-31)
[^availability]: Claude Code official docs, "Feature availability". "Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability (checked on 2026-10-31)
[^legal]: Claude Code official docs, "Legal and compliance". "Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance (checked on 2026-10-31)
