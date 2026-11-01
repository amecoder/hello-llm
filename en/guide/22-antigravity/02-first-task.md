# Chapter 2. Installing the App and First Cleanup — Opening a Folder as a Project

> **One-line summary**: Install the Antigravity app, sign in with your Google Account, and open your organizer folder as a **Project**.
> Start by assigning tasks in **Planning mode** (plan first), read the plan, and click **Proceed** to run it.

This chapter is based on the Antigravity official docs checked on November 1, 2026. **This guide has not yet been tested directly on the app screen.** Screen names use the exact English names from the official docs. If your screen looks different, follow your screen. You can find actual run results in Chapter 3 (running in the terminal).

## Installing and Signing In

1. Download the installer for your computer from [antigravity.google/download](https://antigravity.google/download). On macOS, open `Antigravity.dmg` and drag it into the **Applications** folder.[^dmg]
2. Open the app and click **Sign in**. When your browser opens, sign in with your personal Google Account.[^signin]

Your usage limits and available models depend on the plan (Free, Pro, or Ultra) of the account you sign in with ([Chapter 1](01-what-is.md)).

<Quiz id="ch602-install" />

## Opening a Folder as a Project

Agents in the Antigravity app work inside **Projects**. A project defines which folders the agent can touch and what permissions it has.[^projects]

1. Click the **New Project** icon (a folder with a plus sign) in the left sidebar.[^new-project]
2. Click **Add Folder** and choose your organizer folder. A regular folder that is not a Git repository works too.[^new-project]

When you send your first instruction, you choose how the agent works.[^modes]

| Name | What it does |
|---|---|
| Local mode | Work directly in your current folder |
| New worktree mode | Work in a separate, isolated Git workspace |

Source: Antigravity official docs[^modes]

For your organizer folder, **Local mode** is enough. New worktree mode only works in a Git repository.[^worktree]

A new project starts with **Inherit Global** permissions and can read and write all folders in the project.[^inherit] We cover permissions in Chapter 4.

<Quiz id="ch602-project" />

## Getting a Plan First, Then Proceeding

When you start a new conversation, you choose one of two modes.[^planning]

| Name | What it does | When to use |
|---|---|---|
| Planning mode | Make a plan first, then run it | Tasks you are assigning for the first time |
| Fast mode | Run right away without a plan | Small tasks like renaming a file |

Source: Antigravity official docs (excerpted)[^planning]

At first, we recommend **Planning mode**. When the **Implementation plan** comes out, read it over. If it looks good, click **Proceed** in the conversation or at the top of the plan to continue.[^proceed] This plays the same role as Plan Mode (계획 모드) in Claude Code Chapter 5 and `/plan` in Codex Chapter 4.

You can choose how you review work in the **Agent** tab of Settings. **Request review** stops and waits for your approval whenever the agent creates a plan or makes changes.[^review-mode] In contrast, Always proceed runs right away without stopping.[^always] Starting with Request review is the safe choice.

When the agent finishes a task, it creates a **Walkthrough** to summarize what changed.[^walkthrough]

<Quiz id="ch602-plan" />

## Assigning Your First Cleanup

Send the same request you used with the previous two tools.

```
Turn the memo in inbox/회의-2026-10-27-주간회의.txt into meeting minutes and save it as a new file in the notes/ folder.
```

If you want to point out a specific file, you can type `@` and pick it. Pointing to a file does not paste its contents into your prompt. Instead, the agent gets the file path and reads the file when it needs to.[^mention]

You can see the result of running this same request from the terminal (`agy`) in [Chapter 3](03-rules-skills.md). The app and the terminal use the same agent ([Chapter 1](01-what-is.md)).

**Compare the result with the original.** Did all 5 action items make it over? Do the owners and due dates match the memo? Did it make up anything that wasn't in the memo?

<Quiz id="ch602-first" />

## Viewing What Changed

The **Review** pane in the app shows changes in your project's Git repository.[^review] The default view is **Uncommitted** (all changes not yet recorded), so edits you made yourself show up alongside the agent's edits. Pick **Agent Edits** to see only the files the agent modified in this conversation.[^views]

Because the Review pane shows changes from a Git repository, it is handy to turn your organizer folder into a Git repository too. If you followed Claude Code Chapter 3 or Codex Chapter 2, it is already a Git repository. The official docs do not mention how the Review pane looks in a folder that does not use Git.

<Quiz id="ch602-review" />

## Try It Yourself

1. Install the app and sign in.
2. Open your organizer folder via New Project → Add Folder.
3. Send the request above in Planning mode, read the plan, and click Proceed.
4. Compare the resulting meeting minutes with the original memo, and check the modified files in the Review pane.

**Up next**: In Chapter 3, we test whether Antigravity follows your rules (`AGENTS.md`) and skills without moving them.

## Summary

- Sign in to the app via Sign in → your personal Google Account.
- Open a folder as a project via New Project → Add Folder. Regular folders work too.
- Start with Planning mode and Request review so you can read the plan before clicking Proceed.
- The Review pane shows Git changes. Use Agent Edits to see only the agent's changes.

## Glossary

| Term | One-line meaning |
|---|---|
| Project | A bundle of folders and permissions where an agent works |
| Planning mode | A mode where the agent makes a plan first before running tasks |
| Implementation plan | A work plan created by the agent |
| Walkthrough | A summary report created after finishing a task |

<ChapterDone :chapter="602" />

Next chapter: [Chapter 3. Rules and Skills — No Need to Move Them](03-rules-skills.md)

[^dmg]: Antigravity official docs, "Get started". "Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^signin]: Antigravity official docs, "Authenticate". "Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install (checked on 2026-11-01)
[^projects]: Antigravity official docs, "Get started". "Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^new-project]: Antigravity official docs, "Get started". "Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^modes]: Antigravity official docs, "Get started". "**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^worktree]: Antigravity official docs, "Projects". "**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects (checked on 2026-11-01)
[^inherit]: Antigravity official docs, "Projects". "**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects (checked on 2026-11-01)
[^planning]: Antigravity official docs, "Artifact review". "**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review (checked on 2026-11-01)
[^proceed]: Antigravity official docs, "Implementation plan". "You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan (checked on 2026-11-01)
[^review-mode]: Antigravity official docs, "Artifact review". "You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review (checked on 2026-11-01)
[^always]: Antigravity official docs, "Artifact review". "The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review (checked on 2026-11-01)
[^walkthrough]: Antigravity official docs, "Walkthrough". "The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough (checked on 2026-11-01)
[^mention]: Antigravity official docs, "Mentions and quoting". "Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions (checked on 2026-11-01)
[^review]: Antigravity official docs, "Review changes". "In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes (checked on 2026-11-01)
[^views]: Antigravity official docs, "Review changes". "| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes (checked on 2026-11-01)
