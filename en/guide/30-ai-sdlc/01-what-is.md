# Chapter 1. Building with AI — SDLC at a Glance

> **One-line summary**: Software reaches the world through **Plan → Create → Review → Test → Deploy → Operate**. This flow is called the SDLC.
> AI acts as your hands at each stage, but **deciding what to build and checking the results is your job**. Stage 4 teaches you how to divide this work.

This chapter is based on the GitHub official docs and Claude Code official docs checked on November 1, 2026. It is written for readers who have already worked with folders using Claude Code, Codex, or Antigravity in Stage 3. If you have not read Stage 3 yet, start with [Stage 3 · Claude Code](../20-claude-code/).

## What Is the SDLC?

The SDLC (Software Development Life Cycle) describes the stages a project moves through, **from the first idea to actually running software**.[^sdlc] GitHub divides this process into six stages.

| Stage | What you do | In this guide |
|---|---|---|
| Plan | Write down and track your work | Chapter 3 |
| Create | Write code and record changes | Chapter 4 |
| Review | Propose changes and get feedback | Chapter 6 |
| Test | Run automatic checks before merging | Chapter 5 |
| Deploy | Release your work so people can use it | Chapter 7 |
| Operate | Watch it and keep improving it | Chapters 8 & 9 |

Source: GitHub official docs (summarized by this guide)[^six]

This guide covers Test (Chapter 5) first and Review (Chapter 6) second. That way, you can look at the test results while reviewing. On GitHub, "Operate" covers a wide range from monitoring and dependency management to security, but this guide covers only improving through issues (Chapter 8) and safety (Chapter 9).

**You do not need to use every stage from day one.** GitHub also notes that many people start with one repository and a few tasks, then expand as their project grows.[^start-small] In this guide, you will also go through all six stages once with a single small web page.

<Quiz id="ch701-sdlc" />

## How AI Works

Claude Code handles a task in three steps: **gather context → take action → verify results**.[^loop] Finding and reading files, editing them, and running tests to check its own work are all part of this loop.

**Plan mode**, which you tried in Stage 3, becomes important again here. In plan mode, Claude reads your files and proposes a plan, but it does not change anything until you approve.[^plan]

The official best practices docs point out two common reasons why work does not turn out as expected:[^fail]

- **It built something different from what you had in mind.** This happens when information that cannot be found just by reading the repository is missing. → Covered in Chapter 3, "Planning and Specifications".
- **It said it was done, but it was not quite finished.** This happens when it had no way to check its own work. → Covered in Chapter 5, "Verification and Testing".

You can reduce both cases by handing AI **the right information and a way to check the work**. That is why Stage 4 focuses less on how to write code and more on **what to hand to AI, and what to get back and verify**.

<Quiz id="ch701-ai" />

## Your Job as the Human

Even when AI acts as your hands, there are jobs that you must handle yourself.

| Stage | Your job |
|---|---|
| Plan | Decide what to build and why |
| Create | Read and approve the plan |
| Test | Look at the evidence (commands and output) and judge |
| Review | Decide whether to merge |
| Deploy | Judge whether it is safe to publish and press the button |

Source: Summarized by this guide (see footnotes in each chapter for sources)

The official docs also state that **you are responsible for reviewing proposed code and commands for safety before approval**.[^responsible] Also, actions that affect outside systems—like deployment—cannot be undone with Claude Code's rewind (checkpoints).[^no-checkpoint] So the more an action reaches the outside world, the more important it is that you check it and press the button yourself.

<Quiz id="ch701-human" />

## What You Will Build in This Stage

The "Try It Yourself" sections in Stage 4 follow a single example across every chapter. You will build **a web page that collects and displays the action items from the meeting notes created by your Stage 3 organizer tool**, called the "Corner Cafe To-Do Board".

GitHub's official getting-started series also follows one small website from start to finish as you **plan work, write code, review changes, and deploy to a live website**.[^journey] This guide follows the same order, using Claude Code from Stage 3 in the AI role.

| Chapter | What you do on the To-Do Board |
|---|---|
| 2 | Create a repository on GitHub |
| 3 | Get interviewed about what to show and write `SPEC.md` |
| 4 | Receive a plan and build the first screen on a branch |
| 5 | Build a check to verify the number of to-do items matches |
| 6 | Create a PR and get it reviewed |
| 7 | Publish it with GitHub Pages |
| 8 | Write the next improvement as an issue and go around the cycle once more |
| 9 | Check for secrets and personal information before publishing |

Source: This guide's plan

**It does not need to be perfect from the start.** Follow along one chapter at a time, and by the end you will have your own page with a live web address.

## Summary

- The SDLC is the set of stages from an idea to running software. GitHub divides it into six stages: Plan, Create, Review, Test, Deploy, and Operate.
- You do not need to use all of them from day one. Start small and expand.
- Claude Code works by gathering context → taking action → verifying results. Common reasons for failure are missing information and having no way to verify the work.
- Deciding what to build, judging the evidence, and deciding whether to merge and deploy are your job.

## Key Terms

| Term | One-line meaning |
|---|---|
| SDLC | The stages software moves through from idea to operation |
| Repository | The place where project files and change history are stored |
| Deploy | Releasing what you built so people can use it |
| Plan mode | Claude Code's mode that shows only a plan before making edits |

<ChapterDone :chapter="701" />

Next chapter: [Chapter 2. Creating a GitHub Repository](02-repository.md)

[^sdlc]: GitHub official docs, "What is GitHub?". "The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github (checked on 2026-11-01)
[^six]: GitHub official docs, "What is GitHub?". "Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github (checked on 2026-11-01)
[^start-small]: GitHub official docs, "What is GitHub?". "You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github (checked on 2026-11-01)
[^loop]: Claude Code official docs, "How Claude Code works". "When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-01)
[^plan]: Claude Code official docs, "Common workflows". "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-01)
[^fail]: Claude Code official docs, "Best practices for Claude Code". "It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^responsible]: Claude Code official docs, "Security". "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (checked on 2026-11-01)
[^no-checkpoint]: Claude Code official docs, "How Claude Code works". "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-01)
[^journey]: GitHub official docs, "Creating a repository for your project on GitHub". "By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (checked on 2026-11-01)
