# Chapter 4. Build — Plan First, Branches and Commits

> **In one sentence**: Start a new session, hand over SPEC.md, and get a plan first in **Plan mode**. Once you approve it, build inside a separate workspace called a **branch**, and save each small change as a **commit**.
> This is GitHub flow. It is a lightweight workflow useful for anyone, not just developers.

This chapter is based on the official Claude Code and GitHub documentation checked on November 1, 2026. You already tried Plan mode and commits in [Claude Code Chapters 4 and 5](../20-claude-code/05-delegate-well.md). This chapter ties them together with branches into a workflow for building safely.

## Get a Plan First

Once you have SPEC.md, open a new session and switch to **Plan mode**. In the desktop app, switch the mode below the input box to Plan (계획), just like in [Claude Code Chapter 5](../20-claude-code/05-delegate-well.md). In Plan mode, Claude reads your files and proposes a plan, but changes nothing until you approve it.[^plan]

```
Read SPEC.md and make a plan to build a to-do board that meets this spec. Do not create any files yet.
```

When you get the plan, ask yourself these questions:

- Which step of the plan matches each line in SPEC.md?
- Is each step small enough to check all at once?
- Did it sneak in any new tools or installations you don't know?

If you don't like something, ask Claude to fix the plan before you approve it. Fixing things at the planning stage is the cheapest.

<Quiz id="ch704-plan" />

## Build on a Branch

A **branch** lets you build a feature in its own separate space. Your main version (`main`) stays untouched until you are ready.[^branch] Even if you mess up, `main` is safe, so you can experiment freely.

GitHub's introductory tutorial sums up the building process like this: **set up a workspace → make and save changes → propose them for review**. The tools for this are branches, commits, and pull requests (Chapter 6).[^core]

Give your branch a **short name that shows what it does**.[^name] For the first screen of our to-do board, `first-board` is plenty.

```
Create a branch named first-board, and build the first screen following the approved plan. Make it open from a single index.html file in the top folder, with no build step needed.
```

We use a single `index.html` file because GitHub Pages in Chapter 7 looks for `index.html` at the top of the folder it publishes.

<Quiz id="ch704-branch" />

## Make Small Commits

A **commit** saves your changes like a snapshot of that moment, and a **push** sends that snapshot to your GitHub repository.[^commit]

Each commit should hold **one separate, complete change**. That makes it easy to undo just that part if you decide to try a different approach.[^atomic] For unrelated changes, make separate branches too.[^atomic]

| Weak commit | Better commits |
|---|---|
| A whole day's work labeled "Work" | "Add to-do table reader", "Highlight overdue to-dos in color" |

Source: Examples from this guide (principles from official GitHub docs)[^atomic]

Just as you learned in Stage 3, the habit of saving a record before and after delegating work applies right here too.

<Quiz id="ch704-commit" />

## Read What AI Built

Accept AI-generated work **only after reading it**. The GitHub tutorial also tells you to review what AI generates and adjust it to match what you need.[^review-ai]

In the Claude Code desktop app, you can check changes file by file in the diff view (바뀐 내용 보기). Click **+** next to a line to leave a comment, and Claude will read it and fix the code.[^diff]

It is okay if you don't understand all the code. Ask Claude like this:

```
For each file you just changed, explain in one line what you changed and why. Also tell me which line in SPEC.md it connects to.
```

If an explanation doesn't connect to any line in SPEC.md, Claude may have done something you didn't ask for. Ask about that part.

<Quiz id="ch704-read" />

## Try It Yourself

1. Open a **new session** in your to-do board folder and switch to Plan mode.
2. Send the plan prompt above, check the plan with the three questions, and approve it.
3. Have Claude build the first screen on the `first-board` branch. Use the to-do table from the Stage 3 meeting notes as your to-do data.
4. Check the files in the diff view, and ask for an explanation of the changes.
5. Have Claude commit the work in small chunks.
6. Ask Claude: "Push the `first-board` branch to GitHub." Once you see the branch on your GitHub repository page, you are done.

**Up next**: In Chapter 5, you will build a check so Claude can verify on its own whether every single to-do item shows up on the screen.

## Summary

- Start a new session, give Claude SPEC.md, and get a plan in Plan mode first. Fixing things is cheapest at the planning stage.
- A branch is a workspace that leaves `main` untouched. Keep branch names short and clear.
- Put one complete change in each commit. Split unrelated changes into separate branches.
- Read what AI builds before accepting it. Ask which line of SPEC.md each change connects to.

## Key Terms

| Term | One-line meaning |
|---|---|
| Branch | A separate line of work that leaves the main version untouched |
| Commit | Saving changes like a snapshot of that moment |
| Push | Sending your saved commits to a GitHub repository |
| GitHub flow | The workflow of branch → change → PR → review → merge |

<ChapterDone :chapter="704" />

Next chapter: [Chapter 5. Verification and Testing](05-test.md)

[^plan]: Claude Code official docs, "Common workflows". "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-01)
[^branch]: GitHub official docs, "Writing and storing your code". "A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (checked on 2026-11-01)
[^core]: GitHub official docs, "Writing and storing your code". "Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (checked on 2026-11-01)
[^name]: GitHub official docs, "GitHub flow". "A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow (checked on 2026-11-01)
[^commit]: GitHub official docs, "Writing and storing your code". "Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (checked on 2026-11-01)
[^atomic]: GitHub official docs, "GitHub flow". "Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow (checked on 2026-11-01)
[^review-ai]: GitHub official docs, "Writing and storing your code". "Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (checked on 2026-11-01)
[^diff]: Claude Code official docs, "Desktop application". "After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop (checked on 2026-11-01)
