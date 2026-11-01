# Stage 4 · AI-SDLC Guide

SDLC (Software Development Life Cycle) is the series of steps an idea goes through to become working software. In Stage 4, you will use the AI tools you learned in Stage 3 to build **a small web page from planning to deployment and improvement**.
It is okay if you do not know how to code. What you learn in this stage is not how to write code, but **what to hand over to AI, and what to get back and check**.

> **This guide is based on the official GitHub and Claude Code docs, as well as the spec-kit and OpenSpec repositories, checked on November 1, 2026.** Features and screen names change often.
> A free GitHub account is all you need. For AI tools, you will use the same ones from Stage 3 (Claude Code, Codex, Antigravity).

| Chapter | Title | What You Will Learn |
|---|---|---|
| 1 | [Building Together with AI](01-what-is.md) | The six stages of SDLC, how AI works in a loop, what humans are responsible for |
| 2 | [Creating a GitHub Repository](02-repository.md) | Git, GitHub, and repositories, public vs. private, README, .gitignore, license, and cloning |
| 3 | [Planning and Specification](03-plan-spec.md) | Getting interviewed for SPEC.md, what a good spec looks like, spec-driven development tools |
| 4 | [Building](04-build.md) | Plan mode, branches, small commits, reading what AI built |
| 5 | [Checking and Testing](05-test.md) | Verification checks, getting proof, GitHub Actions |
| 6 | [PR and Review](06-review.md) | Pull requests, reviewing even when working alone, limits of `/code-review`, merging |
| 7 | [Deploying](07-deploy.md) | GitHub Pages, how to publish, limits and prohibited uses, irreversible deployments |
| 8 | [Operating and Improving](08-operate.md) | Issues, labels, and boards, the `fixes` keyword, going around the loop once more |
| 9 | [Safety and Responsibility](09-safety.md) | Three layers of defense for secrets, pre-public checklist, licenses and AI output, dependencies |
| 10 | [Hands-on Project](10-practice.md) | One full cycle with the to-do board, starting from scratch with your own problem, checklist |

## Ongoing Example — Corner Cafe To-Do Board

The "Try It Yourself" section at the end of each chapter connects into a single example. It is a web page that collects and shows action items from the meeting notes created by the Stage 3 organizer tool. For the to-do data, you will use the results from Stage 3.

- [Meeting notes from Stage 3 Claude Code Chapter 2](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt)
- [Meeting notes from Stage 3 Codex Chapter 2](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

All names in the notes (Minji, Junho, Seoyeon) are fictional. If you use your own notes instead, remove real names and contact info before uploading to a public repository (Chapter 9).

**The hands-on result of this guide (the actual to-do board we build) has not been published yet.** We are writing the course first and will add the hands-on result later.

If you have not gone through Stage 3 yet, start with [Stage 3 · Claude Code](../20-claude-code/). Folders, permissions, rule files, and plan mode are explained there, and this stage links back to them.
