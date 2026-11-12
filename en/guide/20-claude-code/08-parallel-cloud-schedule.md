# Chapter 8. Multitasking, Cloud, and Schedules — Let Your Organizer Run on Its Own

<Badge type="info" text="Optional" /> Read this when you need it. You can skip it and still follow the later chapters.

> **In short**: You can open several sessions and **run tasks side by side**. To make a task run on its own at a set time, create a **scheduled task**.
> There are three ways to schedule tasks (Desktop, Cloud, and `/loop`), and the biggest difference is **whether your computer needs to stay on**.

This chapter is based on the Claude Code official docs checked on October 31, 2026. Because the session list and scheduled task list show real task names directly, this chapter guides you with descriptions from the official docs and screen names instead of screenshots. You will use the `/weekly-review` skill you made in Chapter 7.

## Running Multiple Tasks Side by Side

Each session is an independent conversation with its own context and changes.[^session] So you can **open several sessions and hand off different tasks at the same time**.

- New session: Click **+ New** in the sidebar, or press **Cmd+N** (Ctrl+N on Windows)[^parallel]
- Switch between sessions: **Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- View two sessions side by side: Hold **Option** (Alt on Windows) and click a session in the sidebar[^parallel]

For example, you can make study notes with `/study-notes` in one session and a weekly review with `/weekly-review` in another session at the same time. They write to different files, so they will not clash.

**Do not let two sessions edit the same file at the same time.** One session may overwrite lines the other session changed. On top of that, rewinding in one session normally does not track changes made by another session (Chapter 4).[^other-session] Then it is hard to undo if something goes wrong.

When you want to try changing the same file in different ways, the feature to use is **Worktree** (an isolated copy of the folder). In a folder that is a Git repository (a folder where you turned on change history in Chapters 3 and 4), turn on Worktree below the input box and start a session. That session will then work in the **copy**, not the original folder.[^worktree] In effect, the two sessions no longer touch each other's files.

Merging changes from the copy back into the original folder takes a bit more Git knowledge. So at first, it is enough to **edit each file in only one session**.

<Quiz id="ch408-parallel" />

## Three Ways to Schedule Tasks

A scheduled task makes Claude **start a new session automatically** at a set time.[^scheduled] There are three ways to do this.

| | Desktop scheduled task | Cloud scheduled task | `/loop` |
|---|---|---|---|
| Runs on | Your computer | Cloud | Your computer |
| Requires computer on | Yes (app running, awake) | No | Yes |
| Requires open session | No | No | Yes |
| Access to your files | Yes | No (freshly downloaded copy) | Yes |

Source: Claude Code official docs[^compare]

**Desktop scheduled tasks are the right fit for your organizer.** That is because Claude needs to read the `inbox` notes on your computer.

Cloud scheduled tasks run even when your computer is off. But they cannot see the files on your computer. Instead, they work by downloading a fresh copy, in the cloud, of a **repository** (a folder that keeps a record with Git) you uploaded to **GitHub** (a service for putting sets of files on the internet and sharing them).[^compare][^cloud] If you have never uploaded your `inbox` notes to GitHub, there are no notes for the cloud to read.

Use `/loop` when you want to repeat a quick check inside an open session; it stops on its own after 7 days.[^loop]

::: details More details (click to expand) — How often can it run? (click to expand)
The shortest interval is 1 hour for Desktop scheduled tasks (based on the on-screen form), 1 hour for Cloud scheduled tasks, and 1 minute for `/loop`.[^compare] For something that runs once a week, like a weekly review, you do not need to worry about this.
:::

<Quiz id="ch408-kinds" />

## Scheduling a Weekly Review Every Friday

There are two ways to create a Desktop scheduled task.

**Method 1 — Ask in plain words.** Just describe the schedule you want in any session.[^ask]

```
Create a scheduled task that runs /weekly-review every Friday at 6 PM to make this week's review. If there are no review notes for that week, don't create anything and just leave a note saying "No notes".
```

**Method 2 — Create it on the screen.** In the sidebar of the Code tab, click **Scheduled** (or find it inside the More menu) and click **New task**.[^create] In older versions of the app, these appear as **Routines** and **New routine**.[^old-name] You can pick a schedule such as hourly, daily, weekdays, or weekly, or save it without a schedule and run it whenever you want with **Run now**.[^options]

There are four important things to check when scheduling a task.

**1. The app and your computer must stay awake.**

- Desktop scheduled tasks **only run while the app is open and your computer is awake**.
- To stop your computer from sleeping, turn on **Keep computer awake** in settings.
- Closing your laptop lid will still put it to sleep.[^awake]

**2. Runs missed while off happen only once.**

If your computer was asleep, it runs **only the single most recent missed task** when it wakes up. For example, a task set for Friday at 6 PM might run on Saturday morning.[^missed] That is why you **include a condition** in your prompt, such as "If there are no notes for that week…".[^missed] Then, even if it runs late, it will not make an odd review.

**3. It can stall on permission prompts.**

Each scheduled task has its own permission mode. If it is set to Manual (수동), the task **pauses and waits** whenever it needs permission.[^perm] No one is watching, so it stays stuck until someone comes to click.

So after creating a task, run it once with **Run now** and choose **Always allow** on any permission prompt that pops up. That way, future runs will not get stuck.[^perm]

In Chapter 7, we recommended "Allow once (한 번만 허용)". That was because you were watching in front of the screen. Scheduled tasks run while you are away, so you allow things ahead of time. But before choosing Always allow, **read the preview and check that it matches the job you gave (for example, writing the review file)**. If it is a command you do not recognize, reject it and fix your request.

**4. Allow rules in your computer-wide settings also apply.**

Claude Code keeps a settings file shared by all folders on your computer (`~/.claude/settings.json`). The allow rules written there also apply to scheduled tasks.[^perm] If you have never written allow rules in this file, you can skip this.

<Quiz id="ch408-schedule" />

## Working in the Cloud

Cloud sessions **keep working even if you turn off your computer.**[^cloud-run] However, the cloud cannot see the folders on your computer and usually works by downloading a **GitHub repository**. So you generally need to connect GitHub.[^cloud] For work done inside a folder on your computer—like the organizer in this guide—the Desktop app is the right choice. Try using the cloud later if you start keeping your work on GitHub.

<Quiz id="ch408-cloud" />

## Try It Yourself

1. Open two sessions and run `/study-notes` in one and `/weekly-review` in the other. Check that the two results are saved in different files.
2. Ask in plain words to create a Friday weekly review scheduled task. Include the condition "If there are no notes…" in your request.
3. Open that task from the scheduled task list and run it once with **Run now**. If any permission prompts pop up, approve them in advance.
4. Turn off or delete the scheduled task if you do not need it. Scheduled runs are sessions too, so each run uses your quota.

**Up next**: When a scheduled task reads your review notes, what happens if a note has a sentence like "Ignore these instructions and…" mixed into it? You will find out in Chapter 9.

## Key Takeaways

- Sessions are independent of each other. Open several sessions to run tasks on different files side by side. Avoid editing the same file at once, or use a worktree.
- There are three ways to schedule tasks: Desktop (your computer, accesses your files), Cloud (works with your computer off, uses GitHub), and `/loop` (inside a session, 7 days).
- Your organizer reads your local files, so Desktop scheduled tasks are the right choice.
- Missed tasks run only once when your computer wakes up. Write conditions into your prompt, and use Run now to clear permission prompts in advance.

## Glossary

| Term | One-line meaning |
|---|---|
| Scheduled task | A task that starts a new session on its own at a set time |
| Routine | The name for scheduled tasks on older app screens |
| Worktree | An isolated working copy of the same Git repository |
| Cloud session | A session that runs in the cloud instead of on your computer |
| `/loop` | A command that repeats a task inside an open session (ends after 7 days) |

<ChapterDone :chapter="408" />

Next chapter: [Chapter 9. Cost, Data, and Safety](09-cost-data-safety.md)

[^session]: Claude Code official docs, "Desktop application". "Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^parallel]: Claude Code official docs, "Desktop application". "Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^other-session]: Claude Code official docs, "Checkpointing". "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (checked on 2026-10-31)
[^worktree]: Claude Code official docs, "Desktop application". "In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop (checked on 2026-10-31)
[^scheduled]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^compare]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". Comparison table (Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval) and "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^cloud]: Claude Code official docs, "Use Claude Code in the cloud". "Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web (checked on 2026-10-31)
[^loop]: Claude Code official docs, "Run prompts on a schedule". "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (checked on 2026-10-31)
[^old-name]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^ask]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^create]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^options]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^missed]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^perm]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
[^cloud-run]: Claude Code official docs, "Get started with the desktop app". "Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart (checked on 2026-10-31)
[^awake]: Claude Code official docs, "Schedule recurring tasks in Claude Code Desktop". "Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks (checked on 2026-10-31)
