# Chapter 12. Parallel Work and Remote

<Badge type="tip" text="Required" /> Read this to follow this stage.

> **One-line summary**: Once you leave a first record with Git, you can use worktrees to **split your work folder** and hand off tasks side by side.

The screens in this chapter come from running Claude Code 2.1.318 on Linux on November 6, 2026. Folder paths and the plan name were rewritten to fit this course.

Let's save the current state and make a work folder that does not touch the main folder.

## Leaving a First Record with Git

Git is a program that saves the change history of a folder. A single saved point is called a **commit** (Commit). It is like a save point in a game. A folder where records pile up is called a **repository** (Repository).

Why do you need it now? There are two reasons.

- The rewind from [Chapter 7](07-permissions-undo.md) only reverts files changed by Claude's editing tools. It does not track files changed only by Bash commands. To revert those files, use version control such as Git.[^git-undo]
- The worktree in the next section is made from a commit. The repository needs at least one commit.[^one-commit]

First, check whether you have Git with `git --version`. If a number appears, you are set. If instead it says the command cannot be found, install it like this:

- **Windows**: Download the installer from git-scm.com/downloads/win, install it, and open a new window.[^git-win]
- **Mac and Linux**: Follow the instructions on git-scm.com.

Now start recording in the practice folder.

```bash
cd ~/hello-ai-practice/terminal
git init
```

`git init` is a command that tells Git to start recording this folder's change history. Next, decide what **not** to record. The `secret` folder from Chapter 7 holds fake files, but let's pretend it is a real secret and leave it out. We also leave out the worktree folder from the next section.[^wt-ignore] Start `claude` and send this:

```text
Create a .gitignore file in this folder and write two lines: "secret/" and ".claude/worktrees/".
```

`.gitignore` is a list of files Git should pretend not to see. Now leave with `/exit` and type this in the terminal:

```bash
git config user.name "Your Name"
git config user.email "me@example.com"
git config core.quotePath false
git add .
git status --short
```

Line by line, it goes like this:

- The first and second lines (`git config user.…`): Set the name and email written on commits. They apply only to this folder. If you make the repository public later, they become public too, so use values that are fine to share.
- The third line (`git config core.quotePath false`): Makes Korean file names show as they are.
- `git add .`: Gathers the files to save. `.` means the current folder.
- `git status --short`: Shows the gathered files briefly.

When we ran it in a new folder, this came out:

```text
A  .claude/skills/meeting-notes/SKILL.md
A  .gitignore
A  CLAUDE.md
A  inbox/meeting-2026-10-27-weekly.txt
A  notes/minutes-2026-10-27.md
A  weekly-summary.sh
A  minutes.md
```

Your list may have more files. Without the third line, Korean names show up as numbers like `\355\232…`, so it is hard to notice even if the `secret` folder got included.

Here, ask yourself: Was the `secret` folder left out of the list? If so, save. If you see it, do not commit. Fix the two lines in `.gitignore`, then type `git reset` and `git add .` again. `git reset` is a command that puts back the files you just gathered with `git add .`. The files themselves are not deleted, so do not worry.

```bash
git commit -m "First record"
```

`git commit` actually leaves the record. `-m` is short for message, and the text in quotes is the description of this record.

We ran these steps in a new folder and checked that the `secret` folder was left out and that the commit was saved.

<Quiz id="ch812-git" />

## Splitting Work Folders with a Worktree

A worktree is a separate work folder. It shares the repository's history but has its own files and branch (Branch, a line of work split off from the main one).[^wt-what] Picture making one more copy folder and working inside it. Here we try it just once, as a taste.

Give a name after `--worktree` and it creates that folder and starts Claude inside it.[^wt-what]

```bash
claude --worktree memo-fix
```

When we actually ran it, the folder on the start screen changed like this:

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claude plan name
 ▝▝   ▝▝   ~/hello-ai-practice/terminal/.claude/worktrees/memo-fix
```

The folder is created at `.claude/worktrees/memo-fix`, and the new branch name is `worktree-memo-fix`.[^wt-where] We did not name the session, and when we ended with `/exit` without changing anything, the folder was deleted right away.

```text
Removing worktree…
Worktree removed (no changes)
```

The worktree name and the session name are different. The official docs explain that if you named the session, it first asks whether to keep the worktree before deleting it.[^wt-where] We did not try this case.

There are two things to know.

- **It is a fresh copy.**[^wt-fresh] Files that are not in a commit are not in it. The `secret` folder we left out above is not there either. If you cannot see a note, first check whether you committed it.
- **If there is leftover work, it asks whether to keep or delete it when you finish.** If you choose delete, the folder, the branch, and the work inside disappear together. To come back later, use the `claude --worktree <name> --resume` command shown when you exit.[^wt-remove]

Merging a worktree's results into the main folder is Git's branch merging. We do not merge in this chapter. It is enough to know that it is a place to work separately without touching the main folder. If you are curious how to merge, see the PR chapter of the [Stage 4 · AI-SDLC guide](/en/guide/30-ai-sdlc/). A PR (Pull Request) is a request to merge a branch's changes into the main line.

<Quiz id="ch812-worktree" />

## Side by Side with Two Terminal Windows

Sometimes you want to hand off your study notes while the meeting minutes are being fixed. Just open two terminal windows.

- **Weak example**: Start `claude` in the same folder in both windows. They may touch the same files. Rewind usually cannot catch changes made by another session.[^other-session]
- **Better example**: Use a worktree with a different name in each window. The files are separate, so they do not collide.

In the first window, type this:

```bash
cd ~/hello-ai-practice/terminal
claude --worktree memo-fix
```

In the second window, type this:

```bash
cd ~/hello-ai-practice/terminal
claude --worktree study-note
```

The two windows then work in different folders like this. As you saw in the previous section, a worktree is created at `.claude/worktrees/<name>`.

```text
Window 1: ~/hello-ai-practice/terminal/.claude/worktrees/memo-fix     fixing meeting minutes
Window 2: ~/hello-ai-practice/terminal/.claude/worktrees/study-note   organizing study notes
```

This guide did not try running two windows at the same time. When they finish, ask yourself: Did the two tasks stay out of each other's files? More windows can also mean more usage. Keep an eye on it with `/usage` from [Chapter 13](13-cost-safety-trouble.md), and use this only when you really need it.

<Quiz id="ch812-two-windows" />

## Learn More

This guide did not try the three features below. We only briefly pass on what the official docs describe. It is fine not to know them now. Pull them out when you need them.

**`/loop`** re-runs the same request at intervals inside a session.[^loop-what] For example, you can have it check every hour whether a new note has arrived.

::: details How to use `/loop` and what to watch out for (click to expand)

```text
/loop 1h If there is a new note in the inbox folder, tell me only its file name
```

- It runs only while Claude Code is open and idle. It stops when you close the terminal.[^loop-idle]
- It ends by itself after 7 days.[^loop-idle]
- A repeat with a set interval like `1h` does not stop with Esc or Ctrl+C. Ask Claude in words to cancel it.[^loop-esc]

:::

**`/goal`** lets Claude keep working without you giving instructions at each step, once you set a completion condition.[^goal-what]

::: details How to use `/goal` and what to watch out for (click to expand)
The model that judges does not open files itself. So write the condition so that it shows up in the answer, and include a stop condition too.[^goal-judge] A turn is one round in which Claude works once and gets the result.

```text
/goal Done when every meeting note in inbox has meeting minutes in the notes folder and all the created file names are listed in the answer. Or stop after 10 turns.
```

Turn it off with `/goal clear`.[^goal-state]

:::

**Remote Control** (Remote Control) connects a session running on your computer to claude.ai/code or the Claude phone app. Type `/remote-control` in the session.[^rc-cmd] Only certain plans can use it.[^rc-what]

It does **not** run in the cloud. The work continues on your computer, and the phone is a window looking at that session. So your computer must stay on and `claude` must keep running.[^rc-window]

If you need work to keep going even when your computer is off, see [Cloud and Scheduling](../20-claude-code/08-parallel-cloud-schedule.md) in the app guide.

<Quiz id="ch812-more" />

## Try It Yourself

1. In the practice folder, do `git init`, `.gitignore`, and the first commit.
2. Check with `git log --oneline` that one line of record appears.
3. Start with `claude --worktree memo-fix` and check the current folder with `! pwd`.
4. End with `/exit` without changing anything, then read the message on the screen.

Ask yourself: Was the `secret` folder left out of the first record? Can you tell which folder you are in now using `pwd`?

## Summary

- A first Git record is a way to restore changes rewind cannot undo, and it is required for worktrees.
- A worktree is a work folder with its own files and branch. Files not in a commit are not in it.
- When you hand off tasks side by side, use a different worktree in each window.
- Pull out `/loop`, `/goal`, and Remote Control when you need them.

## Glossary

| Term | One-line meaning |
|---|---|
| Git | A program that saves a folder's change history |
| Repository | The folder where Git records pile up |
| Commit | One point saved in Git |
| Branch | A line of work split off from the main one |
| `.gitignore` | A list of files Git will not record |
| Worktree | A work folder with the same history but its own files and branch |
| Remote Control | A feature to follow your computer's session from another device |

<ChapterDone :chapter="812" />

Next chapter: [Chapter 13. Cost, Safety, and Troubleshooting](13-cost-safety-trouble.md)

[^git-undo]: Claude Code official docs, "Checkpointing". "A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (checked on 2026-11-06)
[^one-commit]: Claude Code official docs, "Common workflows". "so the repository needs at least one commit first." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-06)
[^git-win]: Claude Code official docs, "Terminal guide for new users". "Go to git-scm.com/downloads/win and download the installer" https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^wt-ignore]: Claude Code official docs, "Run parallel sessions with worktrees". "Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." https://code.claude.com/docs/en/worktrees (checked on 2026-11-06)
[^wt-what]: Claude Code official docs, "Run parallel sessions with worktrees". "A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." / "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." https://code.claude.com/docs/en/worktrees (checked on 2026-11-06)
[^wt-where]: Claude Code official docs, "Run parallel sessions with worktrees". "By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" / "for an unnamed session, Claude removes the worktree and its branch automatically." / "A named session prompts you first so you can keep the worktree for later" https://code.claude.com/docs/en/worktrees (checked on 2026-11-06)
[^wt-fresh]: Claude Code official docs, "Run parallel sessions with worktrees". "A worktree is a fresh checkout, so initialize your development environment there" https://code.claude.com/docs/en/worktrees (checked on 2026-11-06)
[^wt-remove]: Claude Code official docs, "Run parallel sessions with worktrees". "Removing deletes the worktree directory and its branch, along with all the work in them" / "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." https://code.claude.com/docs/en/worktrees (checked on 2026-11-06)
[^other-session]: Claude Code official docs, "Checkpointing". "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing (checked on 2026-11-06)
[^loop-what]: Claude Code official docs, "Run prompts on a schedule". "Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." https://code.claude.com/docs/en/scheduled-tasks (checked on 2026-11-06)
[^loop-idle]: Claude Code official docs, "Run prompts on a schedule". "Tasks only fire while Claude Code is running and idle." / "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (checked on 2026-11-06)
[^loop-esc]: Claude Code official docs, "Run prompts on a schedule". "`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." https://code.claude.com/docs/en/scheduled-tasks (checked on 2026-11-06)
[^goal-what]: Claude Code official docs, "Keep Claude working toward a goal". "The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." https://code.claude.com/docs/en/goal (checked on 2026-11-06)
[^goal-judge]: Claude Code official docs, "Keep Claude working toward a goal". "It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." / "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." https://code.claude.com/docs/en/goal (checked on 2026-11-06)
[^goal-state]: Claude Code official docs, "Keep Claude working toward a goal". "`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." https://code.claude.com/docs/en/goal (checked on 2026-11-06)
[^rc-what]: It is available on the Pro, Max, Ultra, Team, and Enterprise plans, and cannot be used with an API key (explained in [Chapter 13](13-cost-safety-trouble.md)). Claude Code official docs, "Continue local sessions from any device with Remote Control". "Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." / "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." https://code.claude.com/docs/en/remote-control (checked on 2026-11-06)
[^rc-cmd]: Claude Code official docs, "Continue local sessions from any device with Remote Control". "If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" https://code.claude.com/docs/en/remote-control (checked on 2026-11-06)
[^rc-window]: Claude Code official docs, "Continue local sessions from any device with Remote Control". "The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." https://code.claude.com/docs/en/remote-control (checked on 2026-11-06)
