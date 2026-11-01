# Chapter 6. Scheduled Tasks, Cloud, and Mobile — Run on Time, Even While You're Away

> **One-line summary**: Run weekly routines with **Scheduled** tasks. A scheduled task that uses your local folder needs **your computer turned on and the app running**.
> Cloud tasks are for people with a GitHub repository, and your phone acts like a remote control for your computer.

This chapter is based on the Codex official docs checked on November 1, 2026. This guide did not save an actual scheduled task. Doing so would expose real work content and use up usage limits (for the same reason as [Claude Code Chapter 8](../20-claude-code/08-parallel-cloud-schedule.md)).

## Running a Weekly Review with Scheduled Tasks

Scheduled tasks let you set up recurring work to run in the background.[^schedule] You can view all your scheduled tasks and their run history under **Scheduled** in the app sidebar.[^inbox]

You create scheduled tasks in the desktop app or on the web. The terminal (Codex CLI) does not have a screen to manage scheduled tasks.[^no-cli] You create scheduled tasks through chat as well.[^chat-create] Inside a scheduled task, you can also call a skill using `$skill-name`.[^skill] Using the skill from Chapter 5, you can ask like this:

```
Every Friday at 6 PM, use $weekly-review to create this week's weekly review in the notes folder.
```

**There is a condition.** A scheduled task that uses a folder on your computer only runs when your computer is on and the app is running.[^awake] On macOS and Linux, the **Prevent sleep while running** setting keeps your computer from going to sleep **while** a chat is running, so it continues even if you step away.[^sleep] It does not keep your computer awake until the scheduled time, so check your computer's power and sleep settings separately if you plan to use scheduled tasks.

Scheduled tasks run **unattended** (without a person watching). Because of this, they keep your default boundary (sandbox) range, but run **without asking for permission** unless your organization blocks it.[^unattended] Since no one is there to answer prompts, any action outside the boundary will fail.

| Your Default Permission (Boundary) | What Happens in a Scheduled Task |
|---|---|
| Read-only | Scheduled tasks that need to write files fail |
| Write inside folder | Tasks that only write inside the folder, like the organizer tool, will run |
| Full access | Uses files, commands, and the internet without asking. Risky |

Source: Codex official docs (excerpted; the middle row is this guide's summary)[^modes]

In terms of the permission menu from Chapter 4, **Ask for approval** and **Approve for me** use the middle row's boundary (write inside folder), while **Full access** uses the last row.[^ask] However, in a scheduled task, even **Ask for approval** **will not ask you.** "Read-only" is a setting that might not appear separately in the menu.

Before you create a scheduled task, **run the same request in a regular chat first.** Just like in Chapter 5, check the result against your original files, and move it to a schedule only when it looks good. Make sure to check the results of the first few runs as well. The official docs recommend this exact order.[^test]

<Quiz id="ch506-schedule" />

## How Is the Cloud Different?

Cloud tasks run in a workspace over the internet, so they keep working even while your computer is asleep.[^cloud] In return, there are conditions.

- You must have a **published environment** that you can access.[^env]
- To set up an environment, you choose and connect a **GitHub repository**.[^github]
- Your computer's local files, running programs, and browser sign-ins do not transfer to the cloud.[^not-moved]

Since the organizer folder only exists on your computer, this guide does not use the cloud. If your company works with GitHub, just remember that you can send long-running tasks to the cloud and turn off your computer.

<Quiz id="ch506-cloud" />

## Continuing from Your Phone

From your phone, you can check progress, approve actions, and send instructions. The actual work runs in the cloud or on **your connected computer**.[^mobile] To connect your computer, go to **Settings → Connections → Control this Mac or PC** in the app and click **Set up**.[^connect]

You connect by scanning a QR code. The official docs tell you to connect **only devices you own and trust**.[^trust] That is because a connected phone can control Codex on your computer.

The official docs explain this based on the iOS app. Features roll out to accounts gradually, so you might not see it on your phone yet.[^rollout]

<Quiz id="ch506-mobile" />

## Try It Yourself

1. Open **Scheduled** in the sidebar (you do not need to create a task).
2. Run `$weekly-review` from Chapter 5 one more time in a regular chat and check the result.
3. If you do create a scheduled task, make sure the work stays inside the folder, and check the first run's result against the original files.

**Up next**: In Chapter 7, you will check the same organizer tool from the terminal using a single `codex exec` line.

## Summary

- You create scheduled tasks through chat and view them in Scheduled. You can call a `$skill` inside a scheduled task.
- A scheduled task that uses your local folder needs your computer on and the app running.
- Scheduled tasks run without a person watching and use your default permissions. Full access is risky.
- Cloud tasks require a GitHub repository and a published environment. Your local files do not transfer.
- Your phone controls your computer or the cloud. Connect only devices you trust.

## Glossary

| Term | One-line meaning |
|---|---|
| Scheduled | Where you view scheduled tasks and their run history |
| Published environment | A ready workspace where cloud tasks start |
| Unattended | Running without a person watching |

<ChapterDone :chapter="506" />

Next chapter: [Chapter 7. Using It in the Terminal](07-terminal.md)

[^schedule]: Codex official docs, "Scheduled tasks". "Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^inbox]: Codex official docs, "Scheduled tasks". "Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^chat-create]: Codex official docs, "Scheduled tasks". "You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^skill]: Codex official docs, "Scheduled tasks". "In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^awake]: Codex official docs, "Scheduled tasks". "Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^sleep]: Codex official docs, "Settings". "On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings (checked on 2026-11-01)
[^unattended]: Codex official docs, "Scheduled tasks". "Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^modes]: Codex official docs, "Scheduled tasks". "If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^test]: Codex official docs, "Scheduled tasks". "Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
[^cloud]: Codex official docs, "Codex Cloud". "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (checked on 2026-11-01)
[^env]: Codex official docs, "Codex environments". "A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes (checked on 2026-11-01)
[^github]: Codex official docs, "Codex Cloud". "Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud (checked on 2026-11-01)
[^not-moved]: Codex official docs, "Codex environments". "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (checked on 2026-11-01)
[^mobile]: Codex official docs, "Codex on mobile". "Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile (checked on 2026-11-01)
[^connect]: Codex official docs, "Codex on mobile". "Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile (checked on 2026-11-01)
[^trust]: Codex official docs, "Codex on mobile". "Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile (checked on 2026-11-01)
[^rollout]: Codex official docs, "Codex on mobile". "Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile (checked on 2026-11-01)
[^ask]: Codex official docs, "Permissions". "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^no-cli]: Codex official docs, "Scheduled tasks". "Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations (checked on 2026-11-01)
