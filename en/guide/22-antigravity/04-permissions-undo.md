# Chapter 4. Permissions and Undo — Four Presets, Be Careful with Discard

> **In One Line**: In the app, you pick permissions using **four presets** (Request Review, Default, Auto, Turbo). Start with **Request Review** or **Default** at first.
> **Discard** in the Review pane takes effect **right away without asking to confirm**. The terminal has `/rewind`, but your safest net is still your Git history.

This chapter is based on the official Antigravity docs checked on November 1, 2026. We explained why permissions matter in [Claude Code Chapter 4](../20-claude-code/04-permissions-undo.md). This guide assumes a personal Google account; work and enterprise accounts have a different permissions screen.[^business]

## Four Permission Presets

| Preset | Running Commands | When to Use |
|---|---|---|
| Request Review | Ask before every command | At first, or for careful tasks |
| Default | Don't ask inside the fence; ask when stepping outside | Once you are comfortable |
| Auto (Preview) | Run safe commands on its own; ask only for risky ones | Experimental feature |
| Turbo | Run everything with no limits | Almost never |

Source: Antigravity official docs (excerpted)[^presets]

**Turbo** can read and write your entire computer with no fence.[^turbo] You don't need it for organizing notes.

You can change presets in three places.[^where]

- All projects: **Settings → General → Global Permissions → Permission Preset**
- A single project: **Settings → Projects**
- Current chat: the permissions picker in the message box

Projects follow your global setting by default (**Inherit Global**), and you can also set them one by one.[^inherit] This means you can keep a trusted project relaxed and an untrusted folder strict.[^per-project] The official docs do not say which preset a personal account starts with. Check it first when you open the app.

<Quiz id="ch604-presets" />

## The Fence and Basic Rules

The app has a **terminal fence** (sandbox), and the official docs say it is **on by default**.[^sandbox] However, it depends on the preset. It turns on in Default and Auto, and turns off in Request Review and Turbo.[^by-preset] Commands inside the fence can only use your workspace folder and temp folders, and **cannot access the internet**.[^no-net] Sensitive files like `~/.ssh` and `.env` are also blocked.[^sensitive]

Regardless of your preset, there are also basic rules.

- Reading and writing files **inside** your project folder does not ask. Files **outside** require approval.[^files]
- Reading and interacting with web pages default to "Ask."[^web]
- When rules conflict, they are decided in this order: block (Deny) > ask (Ask) > allow (Allow).[^order]

Approvals you give during a chat can stick around, so the agent gradually learns actions it can trust.[^persist] That is convenient, but remember what you approved.

**The terminal (`agy`) defaults are different.** The terminal asks before writing files, running commands, or using web tools[^cli-ask], and the fence is **off by default**.[^cli-sandbox] We cover this in Chapter 6.

<Quiz id="ch604-sandbox" />

## Undoing Changes

**Be careful with Discard in the Review pane.** "Discard unstaged changes" takes effect **right away without asking to confirm**, and it even deletes untracked new files.[^discard] The default view also includes edits you made yourself ([Chapter 2](02-first-task.md)), so always check what is inside before discarding.

The terminal has `/rewind` (or `/undo`), which rolls your chat back to an earlier stable state.[^rewind] The name sounds like rewind in Claude Code, but the official docs only say it rolls back the "conversation." They do not say whether it also rolls back files.

The app seems to have an undo feature too. The official changelog mentions that the "Confirm Undo" dialog now has an option to revert only the conversation.[^undo] However, **we could not find docs explaining how to use it**, and this guide could not verify it in the app either.

So at this stage, we use the same habit as in Codex Chapter 4.

1. Before handing off work: save your current state with Git.
2. Hand off the task.
3. In the Review pane, switch to Agent Edits to view only what changed.
4. If it looks good, save again; if not, roll it back.

<Quiz id="ch604-undo" />

## Try It Yourself

1. Check your current preset in Settings → General → Global Permissions. If you are new, set it to Request Review or Default.
2. Save the current state of your organizer folder with Git.
3. Ask the agent to "Add a single line at the very top of the meeting notes from Chapter 2 that says 'Date: today's date'."
4. Switch the Review pane to Agent Edits and check the changed line.

**What's Next**: In Chapter 5, we look at planning (`/plan`), scheduling (`/schedule` and Automations), the browser (`/browser`), and goals (`/goal`).

## Summary

- App permissions have four presets. Start with Request Review or Default, and don't use Turbo.
- The app's fence turns on in the Default and Auto presets and blocks internet access. In the terminal, it is off by default.
- Files inside your project folder don't ask for approval; files outside and web actions do ask.
- Discard in the Review pane deletes changes right away without confirmation. Save with Git before handing off work.

## Key Terms

| Term | One-line meaning |
|---|---|
| Permission preset | A bundle that sets your permissions all at once |
| Sandbox | A fence that limits what commands can touch |
| Discard | Throwing away changed content |
| `/rewind` | A terminal command that rolls the chat back to an earlier state |

<ChapterDone :chapter="604" />

Next chapter: [Chapter 5. Plan, Schedule, Browser, and Goal](05-plan-schedule.md)

[^business]: Antigravity official docs, "Agent settings". "Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings (checked on 2026-11-01)
[^presets]: Antigravity official docs, "Agent settings". "**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings (checked on 2026-11-01)
[^turbo]: Antigravity official docs, "Agent settings". "**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings (checked on 2026-11-01)
[^where]: Antigravity official docs, "Agent settings". "**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." / "**For a single project**: Override the global preset under **Settings** > **Projects**. Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (checked on 2026-11-01)
[^inherit]: Antigravity official docs, "Agent settings". "Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (checked on 2026-11-01)
[^per-project]: Antigravity official docs, "Antigravity features". "This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features (checked on 2026-11-01)
[^sandbox]: Antigravity official docs, "Terminal sandbox". "Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox (checked on 2026-11-01)
[^no-net]: Antigravity official docs, "Agent permissions". "**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions (checked on 2026-11-01)
[^sensitive]: Antigravity official docs, "Terminal sandbox". "Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox (checked on 2026-11-01)
[^files]: Antigravity official docs, "Agent permissions". "**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions (checked on 2026-11-01)
[^web]: Antigravity official docs, "Agent permissions". "**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions (checked on 2026-11-01)
[^order]: Antigravity official docs, "Agent permissions". "**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions (checked on 2026-11-01)
[^persist]: Antigravity official docs, "Antigravity features". "Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features (checked on 2026-11-01)
[^cli-ask]: Antigravity official docs, "Antigravity features". "The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features (checked on 2026-11-01)
[^cli-sandbox]: Antigravity official docs, "Antigravity features". "The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features (checked on 2026-11-01)
[^discard]: Antigravity official docs, "Review changes". "**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes (checked on 2026-11-01)
[^rewind]: Antigravity official docs, "CLI best practices". "Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices (checked on 2026-11-01)
[^undo]: Antigravity official docs, "Changelog". "The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog (checked on 2026-11-01)
[^by-preset]: Antigravity official docs, "Terminal sandbox". "| **Default** | On | Allowed in sandbox; ask outside |" / "| **Turbo** | Off | Allowed without prompting, unrestricted |" https://antigravity.google/docs/sandbox (checked on 2026-11-01)
