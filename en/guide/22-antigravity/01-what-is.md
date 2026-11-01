# Chapter 1. What Antigravity Is and How It Differs from the First Two Tools

> **One-line summary**: Antigravity is an AI tool made by Google that **works directly inside a folder on your computer**. It comes as a desktop app and a terminal program called `agy`.
> Two things set it apart from the first two tools. You can use **all features even with a free Google Account**, and it **reads the `AGENTS.md` and `.agents/skills` files you made in the Codex stage right as they are.**

This chapter is based on the Antigravity official docs (antigravity.google/docs) checked on November 1, 2026. Features and menu names change often.

## Four Surfaces

Antigravity comes in four forms depending on where you use it.[^surfaces]

| Surface | What it does | In this guide |
|---|---|---|
| Antigravity App | Give tasks to the agent and watch it work on your desktop | From Chapter 2 |
| Antigravity CLI (`agy`) | Use it in the terminal | Chapter 6 |
| Editor extension & Antigravity IDE | Use it inside a code editor | Not covered |
| SDK | Build agents with Python | Not covered |

Source: Antigravity official docs (summarized for this guide)[^surfaces][^ide][^sdk]

The app and the CLI run the **same agent**, so most features work in both places.[^same] If you sign in on one surface, the other surfaces on your computer share that same login.[^auth]

<Quiz id="ch601-surfaces" />

## All Features, Even on the Free Plan

Antigravity gives **all features to all plans**. That includes scheduled tasks and the CLI.[^all-features] What changes by plan is your **usage limit (quota)** and **which models you can pick**.

| Plan | Usage limit (quota) |
|---|---|
| Free (accounts without Google AI Pro or Ultra) | Refreshes weekly |
| Google AI Pro | Refreshes every 5 hours up to a weekly limit |
| Google AI Ultra | Most generous, refreshes every 5 hours |

Source: Antigravity official docs (selected)[^plans]

Your quota drops based on **how much work the agent does**, not how many questions you ask. If the task is simple, you can ask more times.[^work]

If you have a personal Google Account (like an `@gmail.com` address), you can use it on the free plan.[^personal] However, you must be **18 or older** and live in a supported country (South Korea is on the list).[^age][^country] Accounts managed by a company or school are not personal accounts, so an administrator must allow access.[^workspace]

**Out of the three tools, Antigravity is the only one that lets you use every feature with a free account.** Claude Code needs a paid subscription, and the Codex chapters assumed a Plus plan or higher. If you don't have a paid plan yet, you can start practicing right from this stage.

<Quiz id="ch601-plans" />

## Choosing a Model

In Antigravity, you can choose models from other companies besides Gemini, and you can also pick a thinking level (Low, Medium, or High).[^models] Which models you can choose depends on your plan.

| Model | Free | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

Source: Antigravity official docs (selected; Claude on Pro excludes trial subscriptions)[^model-table]

The docs note that the Claude 4.6 models previously available on the free plan **will be removed on November 2, 2026** (as checked on 2026-11-01).[^removed] So if you are on a free account, you can plan on practicing with Gemini 3.8 Flash.

<Quiz id="ch601-models" />

## What Is the Same and What Is Different from Claude Code and Codex

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| Desktop | Code tab in the Claude app | Codex in the ChatGPT app | Standalone app |
| Rules file | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md`, `GEMINI.md` |
| Skills in this folder | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| Calling a skill | `/name` | `$name` | `/name` |
| Terminal | `claude -p` | `codex exec` | `agy -p` |
| Free practice | No | Limited | Yes |

Source: Summary from this guide (see footnotes in each chapter for sources)

**The biggest difference is that you don't need to move anything.** Antigravity reads `AGENTS.md`, `GEMINI.md`, and the `.agents/` folder inside your project folder.[^discovery] Those are the exact same file names and locations you made in the Codex stage. You will test this yourself in Chapter 3.

<Quiz id="ch601-compare" />

## What You Will Do in This Stage

You will open the organizer folder you finished through Chapter 5 of Codex **right as it is** in Antigravity. If you skipped Codex, you can download the same starting files from "Practice Materials (연습 자료)" on the [Stage 3 Antigravity table of contents](./).

1. Chapter 2: Install the app, open your folder as a project, and hand over your first cleanup task.
2. Chapter 3: Test whether Antigravity follows your rules and skills without moving or renaming them.
3. Chapters 4–5: Compare permissions, undo, planning, and scheduled tasks with Claude Code and Codex.
4. Chapter 6: Learn the terminal command `agy -p` and its pitfalls.
5. Chapter 7: Wrap up costs, data privacy, and safety, and decide how to use the three tools together.

## Wrap-Up

- Antigravity comes in four forms: app, CLI, editor, and SDK. The app and the CLI run the same agent.
- All plans include all features. Only the quota and available models differ. The free plan refreshes weekly.
- Anyone 18 or older with a personal Google Account can start for free.
- It reads `AGENTS.md` and `.agents/skills` from the exact same names and locations as Codex.

## Glossary

| Term | One-line meaning |
|---|---|
| Antigravity | Google's coding agent tool |
| `agy` | Antigravity's terminal program |
| Quota | The amount of usage you get during a set period |
| GEMINI.md | Another rules file name that Antigravity reads |

<ChapterDone :chapter="601" />

Next chapter: [Chapter 2. Installing the App and First Cleanup](02-first-task.md)

[^surfaces]: Antigravity official docs, "Choose your Antigravity". "Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview (checked on 2026-11-01)
[^ide]: Antigravity official docs, "Get started". "Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^sdk]: Antigravity official docs, "Google Antigravity SDK". "The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview (checked on 2026-11-01)
[^same]: Antigravity official docs, "Antigravity features". "The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features (checked on 2026-11-01)
[^auth]: Antigravity official docs, "Authenticate". "Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install (checked on 2026-11-01)
[^all-features]: Antigravity official docs, "Plans". "All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans (checked on 2026-11-01)
[^plans]: Antigravity official docs, "Plans". "The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans (checked on 2026-11-01)
[^work]: Antigravity official docs, "Plans". "As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans (checked on 2026-11-01)
[^personal]: Antigravity official docs, "FAQ". "Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq (checked on 2026-11-01)
[^age]: Antigravity official docs, "FAQ". "Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq (checked on 2026-11-01)
[^workspace]: Antigravity official docs, "FAQ". "Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq (checked on 2026-11-01)
[^models]: Antigravity official docs, "Choose a model". "You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models (checked on 2026-11-01)
[^model-table]: Antigravity official docs, "Choose a model". Gemini 3.8 Flash, Gemini 4 Argon, and Claude Sonnet 5.5 rows in the model table and "\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models (checked on 2026-11-01)
[^removed]: Antigravity official docs, "Choose a model". "\* Will be removed on November 2, 2026." https://antigravity.google/docs/models (checked on 2026-11-01)
[^discovery]: Antigravity official docs, "Customization discovery". "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery (checked on 2026-11-01)
[^country]: Antigravity official docs, "FAQ". "Google Antigravity is available in the following countries and territories." / "South Korea" https://antigravity.google/docs/faq (checked on 2026-11-01)
