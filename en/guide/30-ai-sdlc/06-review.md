# Chapter 6. Pull Requests and Reviews — One More Look Before Merging

> **One-line summary**: A **PR** (Pull Request) **proposes** merging the changes on your branch into `main`. It gives you a place to discuss and review work before merging.
> Review your work even when you work alone. Use AI review (`/code-review`) too, **but "no findings" does not mean your code is safe, and you decide whether to merge.**

This chapter is based on the official GitHub and Claude Code documentation checked on November 1, 2026.

## What Is a PR?

A **PR** proposes merging changes from one branch into another. It gives you a place to discuss and review work before it becomes part of the project.[^pr]

A PR page has these tabs.[^tabs]

| Tab | What it shows |
|---|---|
| Conversation | Description, comments, and reviews |
| Commits | How the branch changed step by step |
| Checks | Results of automated tests and builds (Chapter 5) |
| Files changed | The changed lines where reviewers leave comments |

Source: GitHub official docs (excerpted)[^tabs]

When you create a PR, write down **what you changed and what problem it solves**. If the PR fixes an issue from Chapter 8, link it to the issue. If you link it with a set keyword, the issue closes automatically when the PR merges.[^describe]

**Small PRs are easier to review and safer to merge.** Before you ask someone else to review your work, review it yourself first. Read the changed lines, check that you did not change anything by mistake, and make sure builds and tests ran.[^small]

You can also ask Claude Code to create a PR for you. The official docs recommend reviewing the PR Claude creates before submitting it, and asking Claude to **highlight potential risks**.[^risks]

```
Create a PR from the first-board branch. Before submitting it, highlight any potential risks in these changes first.
```

<Quiz id="ch706-pr" />

## Review Even When You Work Alone

The GitHub tutorial says that **even when you work alone**, building a habit of deliberately reviewing changes before merging keeps your project healthy and makes collaboration easier later.[^alone]

A review ends with one of three decisions.[^decisions]

| Decision | Meaning |
|---|---|
| Comment | Leave feedback only |
| Approve | Ready to merge |
| Request changes | Must be fixed before merging |

Source: GitHub official docs[^decisions]

The standard for a review is **SPEC.md** from Chapter 3. An example prompt in the official best practices docs asks for a review **against SPEC.md** after building to check that every requirement is implemented, report only gaps that affect correctness, and **skip style** (the example delegates this to a subagent, while this guide adapts it to a new session).[^against-spec] It also explains why. When you ask a reviewer to find problems, it **always finds something.**[^always-finds] If you try to fix everything it points out, you end up adding unnecessary clutter.

```
In a new session, review the changes on the current branch against SPEC.md. Check whether every requirement is implemented and whether each verification criterion has a check. Tell me only about gaps that affect correctness. Skip style.
```

<Quiz id="ch706-review" />

## Getting a Review from AI

Claude Code has a review command, `/code-review`. If you type it in your working session, Claude reads the changes on your branch, looks for correctness problems, and tells you what it found in the conversation.[^local] Usage counts toward your plan the same way the rest of the session does.[^usage]

In the desktop app, you can type `/code-review` in the prompt box to get a review before you commit.[^desktop-review] After you open a PR, you can see the PR and its automated check status in the session details panel. This feature requires the GitHub CLI (`gh`) to be installed and signed in.[^monitor]

**AI review has clear limits.**

- AI review can miss bugs or security problems. **Having no findings does not mean your code is error-free or safe.**[^miss]
- Even the managed review that posts automatically on GitHub PRs never approves or blocks a PR. **People decide whether to merge.**[^decide] That managed review is for Team and Enterprise plans, while individuals can run `/code-review` on any plan.[^plans]

If you learned in Stage 3 to "separate the writer from the checker," it is better to have Claude review in a **new session**, even if it is the same Claude. That way it is not pulled along by the context of the conversation where you built the feature.

<Quiz id="ch706-ai-review" />

## Merging and Cleaning Up

Once the review is done and the verification checks pass, **merge** the PR. The final step of GitHub flow is deleting the branch. Even if you delete the branch, **your PR and commit history are not deleted**, so you do not need to worry.[^delete]

Later, as more people join, you can set **branch protection rules** such as "require approvals before merging." By default, protection rules block force-overwriting and branch deletion.[^protect]

<Quiz id="ch706-merge" />

## Try It Yourself

1. Check that the `first-board` branch is pushed to GitHub (Chapter 4). On the main page of your repository, click **Pull requests** → **New pull request**, select `first-board` as the branch to compare, and click **Create pull request**.[^create-pr] Write what you changed and why in the title and description.
2. Before creating it, ask Claude to highlight potential risks.
3. In a new session, get a review against SPEC.md. Fix only correctness problems.
4. Run `/code-review` one more time, and skim the Files changed tab yourself even if there are no findings.
5. When the verification checks pass, merge the PR and clean up the branch.

**Up next**: In Chapter 7, you will publish the merged to-do board to the internet with GitHub Pages.

## Key Takeaways

- A PR is a place to discuss and review changes before merging. Keep it small, write what you changed and why, and review it yourself first.
- Review your work even when you work alone. Use SPEC.md as your standard, fix only correctness gaps, and skip style.
- You can use `/code-review` on any plan. Having no findings does not mean your code is safe, and people decide whether to merge.
- Even if you delete the branch after merging, the PR and commit history remain.

## Glossary

| Term | One-line meaning |
|---|---|
| Pull Request (PR) | A proposal to merge changes from a branch |
| Review | Examining changes before merging |
| Merge | Combining changes from a branch into another |
| `/code-review` | Claude Code's review command |

<ChapterDone :chapter="706" />

Next chapter: [Chapter 7. Deployment](07-deploy.md)

[^pr]: GitHub official docs, "About pull requests". "A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (checked on 2026-11-01)
[^tabs]: GitHub official docs, "About pull requests". "**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (checked on 2026-11-01)
[^describe]: GitHub official docs, "GitHub flow". "When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow (checked on 2026-11-01)
[^small]: GitHub official docs, "Helping others review your changes". "Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes (checked on 2026-11-01)
[^risks]: Claude Code official docs, "Common workflows". "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-01)
[^alone]: GitHub official docs, "Reviewing your proposed changes". "Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (checked on 2026-11-01)
[^decisions]: GitHub official docs, "Quickstart for reviewing pull requests". "**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart (checked on 2026-11-01)
[^against-spec]: Claude Code official docs, "Best practices for Claude Code". "use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^always-finds]: Claude Code official docs, "Best practices for Claude Code". "A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^local]: Claude Code official docs, "Review locally with /code-review". "Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local (checked on 2026-11-01)
[^usage]: Claude Code official docs, "Review locally with /code-review". "The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local (checked on 2026-11-01)
[^desktop-review]: Claude Code official docs, "Desktop application". "To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop (checked on 2026-11-01)
[^monitor]: Claude Code official docs, "Desktop application". "After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop (checked on 2026-11-01)
[^miss]: Claude Code official docs, "Code Review". "Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review (checked on 2026-11-01)
[^decide]: Claude Code official docs, "Code Review". "A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review (checked on 2026-11-01)
[^plans]: Claude Code official docs, "Code Review". "**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review (checked on 2026-11-01)
[^delete]: GitHub official docs, "GitHub flow". "Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow (checked on 2026-11-01)
[^protect]: GitHub official docs, "About protected branches". "By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches (checked on 2026-11-01)
[^create-pr]: GitHub official docs, "Quickstart for pull requests". "then click **New pull request**." / "For the **compare** branch, select the branch that contains your changes." / "Click **Create pull request**." https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart (checked on 2026-11-01)
