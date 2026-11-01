# Chapter 3. Planning and Specs — Getting Interviewed and Writing SPEC.md

> **One-line summary**: When you are not yet sure what to build, do not try to figure it all out alone. **Have Claude interview you.** When the interview is done, Claude writes the result into **SPEC.md** (a specification).
> A spec is not "how to build it." It is a **promise of "what it should be."** This promise becomes your standard for building, checking, and reviewing in Chapters 4 to 6.

This chapter is based on the official Claude Code and GitHub docs, plus the spec-kit and OpenSpec repository descriptions, checked on November 1, 2026. You learned how to ask specifically when delegating work in [Claude Code Chapter 5](../20-claude-code/05-delegate-well.md). This chapter expands that skill to the "before building" stage.

## Why Start with Planning

As you saw in Chapter 1, a common reason AI **builds something different from what you had in mind** is that it is missing information it cannot get just from reading the repository.[^missing] That information is only in your head. It includes things like who will use it, what is inconvenient, and what you will not do.

GitHub's beginner tutorial also says to **write down what you want to build and track your progress before writing code**.[^before-code]

The more specific you are, the fewer rounds of fixes you will need. The official docs say to name the file, describe the symptom, and say what "done" looks like right from the start.[^specific]

| Weak example | Better example |
|---|---|
| Make a page that shows to-dos | A page that collects the to-do tables from meeting notes and shows them by owner and due date. When it's done, all 5 to-dos from the notes should be visible |

Source: Examples from this guide (tips from official docs)[^specific]

<Quiz id="ch703-why" />

## Getting Interviewed and Writing SPEC.md

It is okay if you do not know exactly what you want yet. The official docs say you do not have to work it all out before writing a prompt. Instead, **ask Claude to interview you**.[^interview] Put in plain words, the example from the docs looks like this:

> I want to build something like this, but I haven't thought it through deeply yet. Interview me until you have enough to write a spec, and when we're done, write it to SPEC.md.

Then Claude asks back with **multiple-choice questions** about the parts you have not decided yet.[^choices] For the to-do board, your request would look like this:

```
I want to make a web page that collects and shows the to-do tables from the meeting notes created by the Stage 3 organizer tool. I haven't thought it through deeply yet. Interview me until you have enough to write a spec, and when we're done, write it to SPEC.md.
```

Once SPEC.md is created, have Claude build from that file in a **new session**. This is so you start with a clean context and a written "definition of done."[^fresh] It keeps the long back-and-forth conversation from the interview from mixing into the build step.

**After building, you check the result against SPEC.md.** We will come back to this in Chapter 6 on review.

<Quiz id="ch703-interview" />

## What a Good Spec Looks Like

In a spec, you write down **behavior that is visible from the outside**. The OpenSpec docs call a spec a "behavior contract, not an implementation plan." They say implementation details that do not change externally visible behavior usually do not belong in the spec.[^contract] spec-kit also says to focus on the **what and why** during the spec stage, not the tech, and leave technology choices for the next planning stage.[^what-why]

For the to-do board's SPEC.md, lines like these belong in it:

| Good line | Weak line |
|---|---|
| Every single to-do from the meeting notes is visible | Reads the table with JavaScript |
| Past-due to-dos are marked differently | Looks pretty |
| Only roles are shown instead of personal names | Built with clean code |

Source: Examples from this guide

The lines on the left **can be checked with a yes or no.** In Chapter 5, these exact lines become your verification checklist.

<Quiz id="ch703-spec" />

## Spec-Driven Development Tools

A way of developing that puts the spec at the center is called **Spec-Driven Development**. You decide what to build and why first, and then turn that spec into a plan, tasks, and code.[^sdd] There are two tools that help with this.

| Tool | Maker | What it does |
|---|---|---|
| spec-kit | GitHub | Guides you step by step from spec → plan → task list → implementation |
| OpenSpec | Fission-AI | Creates a folder with proposal, specs, design, and tasks for each change |

Source: Descriptions from each tool (excerpted)[^speckit][^openspec]

OpenSpec has the AI write the documents and lets **you review the plan before any code is written**.[^openspec] spec-kit tells you to run each step one at a time and **review the result** before moving on.[^one-at-a-time] Both tools put a human check in the middle.

This guide **does not install either tool.** spec-kit requires Python 3.11+ and a tool called uv,[^speckit-req] and OpenSpec requires a terminal installation (or Node.js 22.12+).[^os-install] You can put the exact same idea into practice with just the "interview → SPEC.md → new session" flow you learned above. Take a look at those tools later when you work on a larger project.

<Quiz id="ch703-tools" />

## Try It Yourself

1. Open the `할일보드` folder you made in Chapter 2 in the Claude Code app.
2. Send the interview request above and answer Claude's questions. If you are not sure, you can say "Recommend one for me."
3. Read the finished SPEC.md and ask for each line: "Can I check this with a yes or no?" If not, ask Claude to fix it.
4. Check that no real names or contact info made it into SPEC.md (because it is a public repository).
5. When you like it, save a record (commit).

**Up next**: In Chapter 4, you will get a plan based on SPEC.md in a new session, and build the first screen on a branch.

## Summary

- A common reason AI builds the wrong thing is that information from your head was missing. Write it down before building.
- When you are not sure, have Claude interview you and get the result as SPEC.md.
- Once SPEC.md is ready, build in a new session. After building, check the result against SPEC.md.
- In a spec, write down externally visible behavior so it can be checked with a yes or no.
- spec-kit and OpenSpec are tools that support this same idea. This guide does not install them.

## Glossary

| Term | One-line meaning |
|---|---|
| Spec | A written promise of what something should be (specification) |
| SPEC.md | The file where the spec is written |
| Spec-Driven Development | A way of building where you define the spec first and build from it |
| Definition of done | The standard for what counts as "finished" |

<ChapterDone :chapter="703" />

Next chapter: [Chapter 4. Building](04-build.md)

[^missing]: Claude Code official docs, "Best practices for Claude Code". "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^before-code]: GitHub official docs, "Planning your work". "Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (checked on 2026-11-01)
[^specific]: Claude Code official docs, "Best practices for Claude Code". "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^interview]: Claude Code official docs, "Best practices for Claude Code". "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^choices]: Claude Code official docs, "Best practices for Claude Code". "Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^fresh]: Claude Code official docs, "Best practices for Claude Code". "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices (checked on 2026-11-01)
[^contract]: OpenSpec docs, "Concepts". "A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md (checked on 2026-11-01)
[^what-why]: spec-kit docs, "Spec-Driven Development Quickstart". "Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md (checked on 2026-11-01)
[^sdd]: spec-kit README. "Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit (checked on 2026-11-01)
[^speckit]: spec-kit README. "Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit (checked on 2026-11-01)
[^openspec]: OpenSpec README. "**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec (checked on 2026-11-01)
[^one-at-a-time]: spec-kit README. "Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit (checked on 2026-11-01)
[^speckit-req]: spec-kit README. "You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit (checked on 2026-11-01)
[^os-install]: OpenSpec README. "Install OpenSpec. On macOS or Linux, in your terminal:" / "(needs Node.js 22.12.0 or higher)" https://github.com/Fission-AI/OpenSpec (checked on 2026-11-01)
