# Chapter 5. Verification and Testing — Give a Check and Get Evidence

> **One-line summary**: AI stops when the work **looks done**. If you give it a **check** that tells it whether the work is truly done, AI runs a loop where it fixes and re-checks on its own.
> And instead of just hearing "everything passed," ask for **evidence** (the command it ran and its output, or a screen).

This chapter is based on the official Claude Code and GitHub docs checked on November 1, 2026. The habit of checking results against your original notes in Stage 3 becomes automated under the name of a "check" in Stage 4.

## Why You Need a Check

The official best practices guide puts it this way. Claude stops when the work **looks done**. If it has nothing to tell it whether the work is actually done, "looks done" is all it has to go on.[^looks-done] Then **you end up being the test**, and every mistake stays there until you happen to notice it.[^you-test]

On the other hand, if you give it **something that answers pass or fail**, Claude closes that loop itself. It makes a change, runs the check, reads the output if it broke, fixes it, and runs it again.[^loop]

| Without a check | With a check |
|---|---|
| "All done" → You open it and hunt for mistakes | Check fails → Claude fixes it → Re-checks → Passes |

Source: Summary from this guide (based on official docs)[^loop]

<Quiz id="ch705-why" />

## Types of Checks

A check can be **anything as long as Claude can read the result**. The official docs give examples like a test file, whether a build succeeded, a linter, an output comparison script, or a browser screen compared side by side with a mockup.[^kinds] They even say that if you have a check like that, **the single most useful line in CLAUDE.md is the command that runs it**.[^claude-md]

The easiest way is to **write it in your prompt**. It works right away today with no setup.[^in-prompt]

```
After fixing the to-do board, check the verification criteria in SPEC.md one by one, and keep going until they all pass.
```

In the desktop app, Claude can start a dev server and open it in the **Browser pane** inside the app to verify its own changes. By default, it checks automatically after every edit.[^browser] This is a great fit for the to-do board, which is a web page.

When asking for tests, **be specific about what behavior you want to check**.[^specific-test]

| Weak prompt | Better prompt |
|---|---|
| Write a test for me | Write a test that checks whether all 5 to-do items from the meeting notes appear on the screen and whether the due dates are in a date format |

Source: Example from this guide (tip from official docs)[^specific-test]

<Quiz id="ch705-kinds" />

## Getting Evidence

Whichever check you use, ask for **evidence**. That means the command it ran and its output, or a screen.[^evidence] Hearing "everything passed" tells you almost nothing, and reading the output is faster than running the check again yourself.[^evidence]

```
Show me the exact check command you just ran and its output. Also tell me how many passed and how many failed.
```

**Also verify that the check actually checks.** A check that doesn't fail when you break something on purpose is a decoration, not a check. For example, delete one to-do item, run the check, and see if it fails.

<Quiz id="ch705-evidence" />

## Automatically on Every Push — GitHub Actions

You can set things up so a person doesn't have to ask for a check every time. **GitHub Actions** is a GitHub feature that runs builds, tests, and deployments automatically. You can make it run tests every time you push a change.[^actions]

- You define what to do in a YAML file (a configuration file) placed in the `.github/workflows` folder of your repository.[^yaml]
- The habit of committing often and checking often is called **continuous integration** (CI). It helps you catch errors early.[^ci]
- GitHub shows the check results on the PR screen from Chapter 6. You can see right away whether the changes in your branch introduced an error.[^ci]
- In **public repositories**, you can use the standard runners provided by GitHub for free.[^free]

You can ask Claude to create the configuration file for you. At first, though, writing it in your prompt and checking in the browser as shown above is plenty. **You don't need to have all the automation in place from day one.**

<Quiz id="ch705-actions" />

## Try It Yourself

1. On the `first-board` branch from Chapter 4, ask Claude to create a check that tests the verification criteria in SPEC.md.
2. Ask it to run the check and show you the exact command it ran and its output.
3. Delete one to-do item on purpose and run the check again to see if it fails. Once you confirm, undo the change.
4. Open the to-do board in the app's Browser pane and count the to-do items yourself.
5. Add the check command as a single line in CLAUDE.md.

**Next step**: In Chapter 6, you will open a PR with your changes so far and get a review.

## Summary

- AI stops when the work looks done. If you give it a check that answers pass or fail, it fixes and re-checks on its own.
- A check can be a test, a build, a comparison script, a browser screen, or anything else Claude can read the result from.
- Instead of hearing "everything passed," get evidence in the form of the command and its output. Break something on purpose to see if the check actually fails.
- GitHub Actions runs checks automatically every time you push. Standard runners are free in public repositories.

## Glossary

| Term | One-line meaning |
|---|---|
| Test | An automated check that verifies whether the result matches what you expect |
| CI | The habit of merging often and running automated checks often (continuous integration) |
| GitHub Actions | A feature that automatically runs set tasks every time you push |
| YAML | A text format used for configuring automated tasks |

<ChapterDone :chapter="705" />

Next chapter: [Chapter 6. PRs and Reviews](06-review.md)

[^looks-done]: Claude Code official docs, "Best practices for Claude Code". "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^you-test]: Claude Code official docs, "Best practices for Claude Code". "In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^loop]: Claude Code official docs, "Best practices for Claude Code". "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^kinds]: Claude Code official docs, "Best practices for Claude Code". "The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^claude-md]: Claude Code official docs, "Best practices for Claude Code". "If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^in-prompt]: Claude Code official docs, "Best practices for Claude Code". "In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^browser]: Claude Code official docs, "Desktop application". "Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (checked on 2026-11-01)
[^specific-test]: Claude Code official docs, "Common workflows". "When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-01)
[^evidence]: Claude Code official docs, "Best practices for Claude Code". "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^actions]: GitHub official docs, "Quickstart for GitHub Actions". "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (checked on 2026-11-01)
[^yaml]: GitHub official docs, "Understanding GitHub Actions". "Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (checked on 2026-11-01)
[^ci]: GitHub official docs, "Continuous integration". "Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (checked on 2026-11-01)
[^free]: GitHub official docs, "Billing and usage". "GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (checked on 2026-11-01)
