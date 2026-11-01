# Chapter 4. Permissions and Undo — What to Delegate and How to Undo

> **One-line summary**: In the **permissions menu** below the input box, you decide what Codex does on its own and what it asks you about. Start with **Ask for approval** at first.
> You undo changes using **Git**. We could not find a rewind feature like Claude Code's in the official docs. That makes the habit of saving a record (commit) before and after delegating work even more important.

This chapter is based on the Codex official docs checked on November 1, 2026, and the hands-on practice in this guide. We explained why permissions are needed in [Claude Code Chapter 4](../20-claude-code/04-permissions-undo.md).

## Three Options in the Permissions Menu

The permissions menu is **below the input box**.[^menu] On the screen in this guide, **Ask for approval** was selected from the start. We could not verify whether the starting value is the same for every account. The menu can include these names.[^names]

| Screen name | What it does | When to use |
|---|---|---|
| Ask for approval | Works on its own inside the folder, asks before going outside | Most work |
| Approve for me | Automatic review decides instead of asking you | After you get used to it |
| Full access | Runs without limits | Rarely used |

Source: Codex official docs (partially adapted)[^names]

The official docs say to **start with Ask for approval for most work**.[^start] It delegates one step further than "Manual (수동)" in Claude Code (as compared in this guide). It edits files **inside** the folder without asking.

Even if you pick **Approve for me**, the range of what Codex can do does not get wider. The only thing that changes is "who gives permission."[^same-box] Automatic review calls the model one more time, so your usage can go up.[^extra]

**Full access** removes all boundaries for both files and the internet. The official docs also say to use it only when you truly want to delegate everything.[^full] You do not need it for organizing notes.

Just because an option appears in the menu does not mean it is selected. Check **what is currently selected** for each chat.[^check]

<Quiz id="ch504-modes" />

## The Fence and Permission

Permissions work through two mechanisms.[^two]

- **Fence** (Sandbox): Which files and internet resources it can touch
- **Permission** (Approval): When to pause and ask you

By default, Codex works **with the internet turned off**, and the fence usually covers up to your working folder.[^default] It needs permission to edit files outside the folder or connect to the internet.[^auto]

**Some places are protected even inside the folder.** The `.git`, `.agents`, and `.codex` folders inside your working folder are read-only by default.[^protected] Because `.git` is where Git records are kept, if you tell Codex "Save a record for me" in the chat, it may ask for permission or get blocked. The `.agents` folder where we will put skills in Chapter 5 also belongs here.

In fact, it got blocked during this guide. When we asked it in the terminal to copy a skill to `.agents/skills`, Codex replied that "copying was blocked because the `.agents` path is read-only" and gave us two command lines to type ourselves. Because it told us both the reason it was blocked and an alternative, we could decide for ourselves what to allow.

<Quiz id="ch504-sandbox" />

## Viewing What Changed

Codex shows what changed in the **review pane**. This corresponds to the "Changes (변경 사항)" section in Claude Code. The review pane also opens only inside a Git repository.[^review-git]

**The review pane does not show only what Codex edited.** It shows everything: things you edited yourself, and any other changes not yet recorded.[^includes] So if you record (commit) your changes so far before delegating a task, only Codex's changes remain in the review pane, making them easy to see.

You can choose the view range at the top of the review pane. The default is changes not yet recorded (**Unstaged**), and if you pick **Last turn**, you see only what changed in Codex's most recent reply.[^views] At first, Last turn is easier to understand.

If there is a line you do not like, you can leave a comment on that line. Hover your mouse over the line, click **+**, write your comment, and send something like "Fix it according to the line comments" in the input box.[^comments]

<Quiz id="ch504-review" />

## Undoing — With Git

You can undo changes right from the review pane.[^revert]

| Unit | Where |
|---|---|
| Everything | Revert all at the top of the review pane |
| One file | Revert for that file |
| One chunk | Revert for that chunk (hunk) |

Source: Codex official docs (partially adapted)[^revert]

**Be careful with Revert all.** Because the review pane also includes things you edited yourself, reverting everything can erase your own changes too.[^includes] When throwing away only part of the work, undo by the file or by the chunk.

Claude Code had a feature to rewind the conversation ([Claude Code Chapter 4](../20-claude-code/04-permissions-undo.md)). **We could not find the same feature in the Codex official docs.** Instead, the official docs say to **save a Git record before and after a task**.[^checkpoint] If you record often, you can roll back little by little.[^often]

So at this stage, make the following order a habit.

1. Before delegating: Save the current state with the app's Git feature (commit).[^commit]
2. Delegate the task.
3. In the review pane, view only what changed using Last turn.
4. If it looks good, save a record again; if not, undo it.

You can also ask "Save a record for me" in the chat, but as we saw above, `.git` is a protected folder, so it may ask for permission. If it asks, check that the action is only "saving a Git record" and allow it.

For a big job, get a plan before editing. Type `/plan` in the input box and Codex will investigate first and propose how to do it.[^plan] This plays the same role as "Plan (계획)" mode in Claude Code Chapter 5.

<Quiz id="ch504-undo" />

## Try It Yourself

1. Open the permissions menu below the input box and see what is selected. If it is not Ask for approval, change it.
2. Save the current state using the app's Git feature (or ask in the chat and allow it).
3. For the meeting notes from Chapter 2, ask: "Add one line at the very top: 'Date written: today's date'".
4. View the review pane in Last turn mode and check the changed line.
5. Try undoing just that file.

**Next up**: In Chapter 5, you will move the 3 skills you made in Claude Code over to Codex, and create a weekly review with a single `$weekly-review` line.

## Summary

- The permissions menu is below the input box. Start with Ask for approval at first.
- Approve for me only changes who gives permission. It does not widen the fence.
- By default, the internet is off and the fence is your working folder. `.git`, `.agents`, and `.codex` are protected even inside the folder.
- The review pane shows your own edits too. Save a record before delegating, and view with Last turn.
- Undo with Git instead of rewinding. Save a record before and after delegating.

## Glossary

| Term | One-line meaning |
|---|---|
| Sandbox | The fence that limits what Codex can touch |
| Approval | Permission given before crossing the fence |
| Review pane | The pane that shows what changed |
| Revert | Undoing what changed |
| Commit | Recording the current state in Git |

<ChapterDone :chapter="504" />

Next chapter: [Chapter 5. Moving Skills](05-skills.md)

[^menu]: Codex official docs, "Permissions". "Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^names]: Codex official docs, "Sandbox". "Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing (checked on 2026-11-01)
[^start]: Codex official docs, "Permissions". "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^same-box]: Codex official docs, "Permissions". "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^extra]: Codex official docs, "Agent approvals & security". "Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^full]: Codex official docs, "Sandbox". "This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing (checked on 2026-11-01)
[^check]: Codex official docs, "Permissions". "Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^two]: Codex official docs, "Permissions". "The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes (checked on 2026-11-01)
[^default]: Codex official docs, "Agent approvals & security". "By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^auto]: Codex official docs, "Agent approvals & security". "Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^protected]: Codex official docs, "Agent approvals & security". "`<writable_root>/.git` is protected as read-only whether it appears as a directory or file." / "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "`<writable_root>/.codex` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^review-git]: Codex official docs, "Code review". "The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review (checked on 2026-11-01)
[^includes]: Codex official docs, "Code review". "It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review (checked on 2026-11-01)
[^views]: Codex official docs, "Code review". "By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review (checked on 2026-11-01)
[^comments]: Codex official docs, "Code review". "Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review (checked on 2026-11-01)
[^revert]: Codex official docs, "Code review". "**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review (checked on 2026-11-01)
[^checkpoint]: Codex official docs, "Codex CLI". "Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli (checked on 2026-11-01)
[^often]: Codex official docs, "Agent approvals & security". "Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^plan]: Codex official docs, "Prompting". "For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting (checked on 2026-11-01)
[^commit]: Codex official docs, "Local environments". "You can stage or revert individual chunks, stage or revert entire files, commit changes, push a branch, and create a pull request without leaving the app." https://learn.chatgpt.com/docs/environments/local-environment (checked on 2026-11-01)
