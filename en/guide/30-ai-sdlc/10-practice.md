# Chapter 10. Hands-on Exercises — One Full Loop from Start to Finish

> **One-line summary**: Put Chapters 1 to 9 together into one continuous flow: **Plan → Build → Verify → Review → Deploy → Operate → Safety Check**.
> For the final exercise, build something from scratch for **your own problem**. Check your work with the checklist.

This chapter brings together everything from the earlier chapters into hands-on exercises. The sources are in the footnotes of each chapter. **You do not need to be perfect on your first try.** If you get stuck, go back to that chapter and read it again.

## Exercise 1 — One Full Loop with the To-Do Board

If you followed the "Try It Yourself" sections in the earlier chapters, you have already finished this exercise. If you skipped them, work through the steps in order.

| Step | What to do | Chapter |
|---|---|---|
| 1 | Create a public repository `cafe-todo-board` on GitHub and clone it to your computer | 2 |
| 2 | Have Claude interview you and write `SPEC.md` | 3 |
| 3 | Get a plan in a new session using Plan Mode, and build the first screen on a branch | 4 |
| 4 | Build a check for the criteria in `SPEC.md` and get proof | 5 |
| 5 | Open a PR, review it against `SPEC.md`, and merge it | 6 |
| 6 | Check for secrets and personal information with the pre-publish checklist | 9 |
| 7 | Publish with GitHub Pages and open it on your phone | 7 |
| 8 | Write an improvement as an issue and go around the loop once more with `fixes #issue-number` | 8 |

Source: Summary from this guide

<Quiz id="ch710-loop" />

## Exercise 2 — From Scratch with Your Own Problem

Pick one **small inconvenience** from your life or work, and build a web page using the same flow. Here are some examples.

- Viewing our club's schedule for this month
- A list of books you read with a one-line review for each
- A store menu and business hours page

Start your first request with an interview, just like in Chapter 3.

```
I want to build a small web page to solve <my inconvenience>. I haven't thought it through deeply yet. Interview me until you can write a spec, and once we're ready, write it in SPEC.md. I'm going to put this in a public repository, so I won't include any personal information.
```

**Note**: If you want to use it for an actual business, like a store guide, first check the prohibited uses for GitHub Pages (running a business, online store, or commercial service) from Chapter 7. Building something for practice is different from using it for real business.

<Quiz id="ch710-own" />

## Checklist

When you finish an exercise, check each item below one by one. If every answer is "Yes", you have completed the full loop properly.

**Plan**
- ☐ Every line in `SPEC.md` can be checked with a yes or no.
- ☐ `SPEC.md` has at least one line under "What we will not do".

**Build**
- ☐ You read and approved the plan in Plan Mode before building.
- ☐ You built on a branch instead of `main`, with one change per commit.

**Verify**
- ☐ You have a verification check, and you got proof in the form of the command you ran and its output.
- ☐ You broke something on purpose and saw the check fail.

**Review**
- ☐ You wrote what you changed and why in the PR description.
- ☐ You got a review against `SPEC.md` in a new session. Even if nothing was found, you skimmed the changes yourself.

**Deploy & Operate**
- ☐ The public URL opens on your phone as well.
- ☐ Your next improvement is written down as an issue.

**Safety**
- ☐ There are no secrets, real names, or contact details in the repository or on the page.
- ☐ You have a `.gitignore` file, and it lists files that might contain secrets.

Source: Summary from this guide

## Try It with Other Tools

Codex and Antigravity from Stage 3 have matching features, so you can follow the same flow with them.

| What you do | Codex | Antigravity |
|---|---|---|
| Plan first | `/plan` | Planning mode |
| View changes | Review pane | Review pane |
| Rules file | `AGENTS.md` | `AGENTS.md` · `GEMINI.md` |

Source: [Codex Chapter 4](../21-codex/04-permissions-undo.md) · [Antigravity Chapters 2 & 3](../22-antigravity/02-first-task.md)

Giving the same `SPEC.md` to two tools and comparing the results is also good practice. As you saw in Stage 3, even with the same instructions, different tools may leave out different things.

## Summary

- In Exercise 1, you go through one full loop with the to-do board, from planning to the safety check.
- In Exercise 2, you build from scratch for your own small inconvenience. Check the Pages restrictions before using it for a real business.
- If every box in the checklist is "Yes", you have completed the full loop properly.

<ChapterDone :chapter="710" />

Next chapter: You have finished the Stage 4 AI-SDLC guide. With this, you have completed all of Stages 1 to 4 of hello-ai. Pick a chapter you want to revisit from the [Stage 4 · AI-SDLC Table of Contents](./), or test what you have learned so far with the [AI Knowledge Level Test](../00-common/level-test.md).
