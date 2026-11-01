# Chapter 5. Plans, Schedules, Browser, and Goals — Delegating Work with Slash Commands

> **One-line summary**: `/plan` makes a plan before changing anything, `/schedule` is a timer that runs **only inside this chat**, and **Automations** are schedules that keep running beyond a single chat.
> `/browser` drives Chrome to do web tasks, and `/goal` does not stop until the job is done. Both can use a lot of your quota.

This chapter is based on the Antigravity official docs checked on November 1, 2026. This guide did not actually save any schedules. That is because doing so would expose real work content and use up quota (for the same reason as in [Claude Code Chapter 8](../20-claude-code/08-parallel-cloud-schedule.md)).

## Getting a Plan First — `/plan`

A normal request starts editing files right away. When you use `/plan`, the agent looks through your folder first and shows you a summary of what needs to be decided.[^plan] Once the plan looks good, click **Proceed** to move on to execution.[^proceed]

```
/plan I want to add a 'Date Created' field to the meeting notes, study notes, and weekly review templates. Show me a plan of what needs to change first.
```

If your requirements are still vague, `/grill-me` helps. Before starting, it asks **one question at a time**, along with a recommended answer.[^grill] In effect, the tool draws out the "good delegation habits" you learned in Claude Code Chapter 5 for you.

<Quiz id="ch605-plan" />

## Schedules — `/schedule` and Automations

Antigravity has **two kinds** of schedules.

| | `/schedule` | Automations |
|---|---|---|
| Where it lives | Inside the chat that created it | Outside chats (app sidebar) |
| How long it lasts | While that chat is open | Stays even after restarting the app |
| Each run | Wakes up the same chat | Starts a fresh chat |

Source: Antigravity official docs (excerpted)[^compare]

`/schedule` sets a one-time timer or a repeating schedule, and it does not block your chat while waiting.[^schedule] However, because it belongs to that chat, use **Automations** for ongoing tasks like a **weekly review every Friday**.[^scoped]

Automations send messages to your agent on a set schedule even while you are away.[^automations] You open them from **Automations** in the app sidebar. Keep a few things in mind:

- You pick a model tier (Flash Lite, Flash, or Pro) for each run. The default is Flash.[^tier]
- They do not run on the exact minute. Runs are spread out by up to 10% of the interval, up to 15 minutes.[^jitter]
- You can test a schedule right away with **Run Now**, or build one by chatting with the agent using **Create with Prompt**.[^run-now]

While an agent is working, Antigravity keeps your computer from going to sleep.[^sleep] However, **the official docs do not say whether Automations still run when the app is closed or your computer is asleep.** Just like with desktop schedules in Claude Code and Codex, it is safer to leave the app open and keep your computer awake (recommended by this guide).

Before creating a schedule, try the same request in a regular chat first, test it once with Run Now, and then set the schedule.

<Quiz id="ch605-schedule" />

## Browser and Goals — `/browser` and `/goal`

`/browser` hands web tasks over to a **browser subagent**. This subagent drives Google Chrome to open pages, click buttons, and take screenshots.[^browser] Every browser session is **recorded as a video** and saved in the results.[^recorded] Running scripts on a page asks for your permission by default.[^js]

`/goal` keeps the agent working without stopping in the middle until it fully achieves the goal.[^goal] There is no cap on how many times it can try, so it keeps going until it decides the job is done or you stop it.[^no-cap] Because this can use a lot of your quota, **write down a clear standard for what "done" means**. Here is an example:

```
/goal Organize all 6 memos in inbox into notes following the template. Definition of done: there is one result file for each memo, and every file has a "Check against original (원본과 대조할 것)" section at the very bottom.
```

Goal mode changes **only how the agent stops**. Your permission and review settings stay the same, so anything that normally asks for your approval will still ask.[^goal-perm]

<Quiz id="ch605-browser-goal" />

## Continuing from Another Device

If you turn on **Settings → Application → Enable Remote Control** in the app, you can control Antigravity on your computer from a web browser on another device.[^remote][^any-browser] On the other device, sign in with the **same Google Account as your desktop**.[^same-account]

Even when you use it remotely, the work still happens on **your computer**, using its files, tools, and sign-in info.[^local] As convenient as it is, only turn on remote control on devices you trust.

<Quiz id="ch605-remote" />

## Try It Yourself

1. Use `/plan` to get just the plan for adding the 'Date Created' field above, and read the plan before clicking Proceed.
2. Open Automations in the sidebar (you do not have to create one).
3. If you create a schedule, test it first in a regular chat and with Run Now.
4. If you use `/goal`, include your "definition of done."

**Up next**: In Chapter 6, you will check the same organizer tool using `agy` in the terminal and look at the pitfalls this guide ran into in practice.

## Summary

- `/plan` plans first, and `/grill-me` draws out your requirements one question at a time.
- `/schedule` works only inside that chat; use Automations for tasks that should keep running.
- The docs do not say whether Automations run when the app is closed. It is safer to leave the app open and your computer awake.
- `/browser` drives Chrome and records a video. `/goal` does not stop on its own, so give it a clear standard for when it is done.
- Remote Control uses the same account, and the work runs on your computer.

## Glossary

| Term | One-line meaning |
|---|---|
| Automations | Schedules that keep running beyond a single chat |
| Subagent | A helper agent that the main agent hands part of a job to |
| Remote Control | Controlling Antigravity on your computer from another device |

<ChapterDone :chapter="605" />

Next chapter: [Chapter 6. Using It in the Terminal](06-terminal.md)

[^plan]: Antigravity official docs, "Plan (/plan)". "While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan (checked on 2026-11-01)
[^proceed]: Antigravity official docs, "Plan (/plan)". "**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan (checked on 2026-11-01)
[^grill]: Antigravity official docs, "Slash commands overview". "The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands (checked on 2026-11-01)
[^compare]: Antigravity official docs, "Schedule command (/schedule)". "| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule (checked on 2026-11-01)
[^schedule]: Antigravity official docs, "Schedule command (/schedule)". "Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule (checked on 2026-11-01)
[^scoped]: Antigravity official docs, "Schedule command (/schedule)". "**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule (checked on 2026-11-01)
[^automations]: Antigravity official docs, "Antigravity features". "Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features (checked on 2026-11-01)
[^tier]: Antigravity official docs, "Antigravity features". "**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features (checked on 2026-11-01)
[^jitter]: Antigravity official docs, "Antigravity features". "Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features (checked on 2026-11-01)
[^run-now]: Antigravity official docs, "Antigravity features". "**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features (checked on 2026-11-01)
[^sleep]: Antigravity official docs, "FAQ". "If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq (checked on 2026-11-01)
[^browser]: Antigravity official docs, "Browser command (/browser)". "Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser (checked on 2026-11-01)
[^recorded]: Antigravity official docs, "Browser command (/browser)". "**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser (checked on 2026-11-01)
[^js]: Antigravity official docs, "Browser command (/browser)". "Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser (checked on 2026-11-01)
[^goal]: Antigravity official docs, "Goal command (/goal)". "The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal (checked on 2026-11-01)
[^no-cap]: Antigravity official docs, "Goal command (/goal)". "**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal (checked on 2026-11-01)
[^goal-perm]: Antigravity official docs, "Goal command (/goal)". "Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal (checked on 2026-11-01)
[^remote]: Antigravity official docs, "Antigravity features". "In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features (checked on 2026-11-01)
[^same-account]: Antigravity official docs, "Remote Control". "Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control (checked on 2026-11-01)
[^local]: Antigravity official docs, "Antigravity features". "**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features (checked on 2026-11-01)
[^any-browser]: Antigravity official docs, "Remote Control". "Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control (checked on 2026-11-01)

<!-- GOAL_COMPLETE -->
