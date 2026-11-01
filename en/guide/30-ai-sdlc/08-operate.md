# Chapter 8. Operations and Improvements — Running the Next Cycle with Issues

> **One-line summary**: Write down improvements and bugs that come to mind after publishing as **Issues**. One issue becomes the plan for your next cycle.
> If you write a special keyword like `fixes #number` in a PR, that issue **closes automatically** when you merge the PR. This is how planning and operations connect.

This chapter is based on the official GitHub docs checked on November 1, 2026. The GitHub screen names are written in English.

## What Is an Issue?

An **Issue** is a record for planning, discussing, and tracking work.[^issue] It holds anything you want to write down or talk about, like bug reports, new features, or ideas. It is similar to writing "things to discuss next" in the meeting notes in Stage 3.

Issues connect to PRs. When you mention another issue in an issue or a PR, they link together, and if you write a special keyword like `fixes` in a PR, **the related issue closes automatically.**[^close]

```
fixes #issue-number
```

The issue number appears next to the issue title, like `#2`. If you created a PR in Chapter 6, your first issue might not be `#1`, so be sure to check the number on your screen.

GitHub's beginner tutorial also creates its first issue during the planning stage. You write the feature you want to build in the title, and write a few lines in the description about what you want to make.[^first-issue]

<Quiz id="ch708-issue" />

## Organizing with Labels and Boards

As you get more issues, you sort them with **labels**. Every new repository comes with default labels.[^labels]

| Label | Meaning |
|---|---|
| bug | An unexpected problem |
| enhancement | A request for a new feature |
| documentation | Improvements to documentation |

Source: GitHub official docs (selected items)[^labels]

**Projects** are tables, boards, and roadmaps connected to your issues and PRs.[^projects] On the tutorial's board, each column represents a stage of your work. You move items from Todo → In Progress → Done to see your progress.[^board]

**You don't need to use all of this from the start.** As you saw in Chapter 1, many people start with just one repository and a few issues. It is never too late to start using labels and boards once you have too many issues to see at a glance.

<Quiz id="ch708-labels" />

## Running One More Cycle

When one cycle ends, you create the next feature **as a new issue** and move it to In Progress when you start the next cycle.[^next-cycle] Here is how you run the workflow you learned in Stage 4 again with a single issue.

1. **Plan**: Write what you want to change in an issue. If needed, add one line of acceptance criteria to SPEC.md (Chapter 3).
2. **Build**: Get a plan in Plan Mode on a new branch, then build it (Chapter 4).
3. **Check**: Run your verification checks and get proof. **All existing checks must also pass** (Chapter 5).
4. **Review**: Write `fixes #number` in the PR and review it (Chapter 6).
5. **Deploy**: Merge it so it publishes to Pages again (Chapter 7).

You can also hand the issue directly to Claude Code.

```
Read GitHub issue #<issue-number>, add one line of acceptance criteria to SPEC.md, and start by making a plan. Don't edit any other files yet.
```

If Claude says it cannot read the issue, copy the issue title and body and paste them into your prompt. That is the most reliable way.

<Quiz id="ch708-cycle" />

## Leave Releases for Later

A **Release** is a packaged version of your software that a wider audience can download and use.[^release] It is important for programs that people download and install, but you don't really need it for a single-page web to-do board. Just know that it exists.

## Try It Yourself

1. On the main page of your `cafe-todo-board` repository, click **Issues** → **New issue** to create a new issue.[^new-issue] Set the title to "Show overdue to-dos in red" and the label to `enhancement`.
2. Hand the issue details to Claude Code, add one line of acceptance criteria to SPEC.md, and get a plan first.
3. Build it on a new branch, and get proof from your verification checks that both the new criteria and the existing criteria pass.
4. Check the number next to the issue title, and write `fixes #issue-number` in the PR description. Review it, then merge it.
5. Check that the issue closed automatically and that the updated screen appears on Pages.

**Up next**: Chapter 9 covers how to keep secrets and personal information out of a public repository.

## Summary

- An issue is a record for planning, discussing, and tracking work. Write down improvements and bugs as issues to start your next cycle.
- If you write `fixes #issue-number` in a PR, the issue closes automatically when you merge. Check the number on your screen.
- Use labels (`bug`, `enhancement`, `documentation`) and boards (Todo → In Progress → Done) once you have more issues.
- The next cycle follows the same steps: Plan → Build → Check → Review → Deploy. Existing checks must continue to pass too.

## Glossary

| Term | One-line meaning |
|---|---|
| Issue | A record for writing down and tracking tasks, bugs, and ideas |
| Label | A tag for sorting issues and PRs |
| Project | A table, board, and roadmap connected to your issues and PRs |
| Release | A packaged deployment unit that people can download and use |

<ChapterDone :chapter="708" />

Next chapter: [Chapter 9. Safety and Responsibility](09-safety.md)

[^issue]: GitHub official docs, "About issues". "You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (checked on 2026-11-01)
[^close]: GitHub official docs, "About issues". "Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (checked on 2026-11-01)
[^first-issue]: GitHub official docs, "Planning your work". "In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (checked on 2026-11-01)
[^labels]: GitHub official docs, "Managing labels". "GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels (checked on 2026-11-01)
[^projects]: GitHub official docs, "About Projects". "A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects (checked on 2026-11-01)
[^board]: GitHub official docs, "Planning your work". "The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (checked on 2026-11-01)
[^next-cycle]: GitHub official docs, "Reviewing your proposed changes". "If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (checked on 2026-11-01)
[^release]: GitHub official docs, "About releases". "Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases (checked on 2026-11-01)
[^new-issue]: GitHub official docs, "Planning your work". "On the main page of your `stargazers-log` repository, click **Issues**." / "Click **New issue**." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (checked on 2026-11-01)
