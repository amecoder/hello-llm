# Chapter 12. Using It Like an Expert — Pick What Fits the Task, and Stack One at a Time as Needed

> **One-line summary**: An expert is not someone who uses many features, but someone who **picks the feature that fits the size of the task**. Don't set up everything from the start. Add one thing at a time **when the same inconvenience repeats**.
> This chapter wraps up with a weekly routine for running the "Organizing Tool" you built in Stage 3.

This chapter is based on the Claude Code official docs checked on October 31, 2026. The universal principles of "using it like an expert" that work with any AI are in [Stage 1, Chapter 11](../00-common/11-expert.md). Here, we cover only how to pick and stack features in Claude Code.

## Picking to Fit the Size of the Task

| For this kind of task | Use this | Where you learned it |
|---|---|---|
| One question, one piece of writing | Chat (Chat in the Claude app) | [Stage 2](../10-claude/) |
| Reading and editing files in your folder | Code tab session | [Chapter 2](02-install.md) |
| A big task with several ways to do it | Start with a method in Plan (계획) mode | [Chapter 5](05-delegate-well.md) |
| Rules you keep repeating every time | CLAUDE.md | [Chapter 6](06-claude-md.md) |
| The same steps you do often | Skill (`/name`) | [Chapter 7](07-skills-plugins.md) |
| A task to run on its own at a set time | Scheduled task | [Chapter 8](08-parallel-cloud-schedule.md) |
| One-line check or automation | `claude -p` in the terminal | [Chapter 10](10-terminal.md) |
| A task you must be able to undo if it goes wrong | Rewind + Git history | [Chapter 4](04-permissions-undo.md) |

The official docs also explain features by dividing them into "what is always visible every session (CLAUDE.md)," "what you call when needed (skills)," and "what runs on its own at set times."[^match] The bigger the feature you use, the more you can do, but you also have more to check.

<Quiz id="ch412-choose" />

## Stack One at a Time Instead of Building Everything at Once

**You don't need to set up everything from the start.** The official docs say each feature has a signal telling you "add it when this happens."[^build]

| When this happens | Add this |
|---|---|
| It gets the same rule or command wrong twice | Write it in CLAUDE.md |
| You keep starting tasks with the same request | Save it as a skill |
| You paste the same steps for the third time | Save it as a skill |
| You keep copying material from a browser | Connect that service with a connector (MCP) |
| Something must happen every time without asking | Hook (a command that runs automatically at a set moment) |

Source: Claude Code official docs (partial excerpt)[^build]

The organizing tool in this guide grew in this exact order. Long requests in Chapter 2 → templates in Chapter 5 → CLAUDE.md in Chapter 6 → skills in Chapter 7. **You experienced the inconvenience first, and built the tool next.**

You use the same signals **when fixing what you already built**. If the same mistake comes up again, don't just fix it once in chat and move on—fix CLAUDE.md. If there is a step you keep fixing by hand, fix the skill.[^update]

<Quiz id="ch412-build" />

## Habits You Can Drop Now

Some tricks that used to be needed for older models actually get in the way now. From what the official docs point out, here are the ones that apply to readers of this guide.[^stop]

| Old trick | Now |
|---|---|
| Adding "IMPORTANT!" or ALL CAPS to important instructions | It follows a plainly written single line too. Piling on emphasis makes it over-apply the rule |
| Pushing it with "Don't stop, do it to the end" | It usually finishes an agreed task to the end. Give it check criteria (Chapter 5) instead |
| Writing a long folder structure into CLAUDE.md | Claude reads the folder itself. Write down only what isn't in the folder |

Source: Claude Code official docs[^stop]

If a rule **must never be broken**, use another mechanism instead of emphasis. The official docs say to turn unbendable rules into a hook or a deny rule.[^stop] For readers of this guide, protecting your work with permission modes and Git history from Chapter 4 is plenty to start with.

<Quiz id="ch412-stop" />

## Weekly Organizing Routine

Try running the tool you built in Stage 3 each week like this.

1. **Collect**: Drop your meeting, study, and daily reflection notes into `inbox` as you go. Remove personal information.
2. **Organize**: Run `/meeting-notes`, `/study-notes`, and on Fridays `/weekly-review` (or a scheduled task).
3. **Check**: Read the **self-check results and "Items to Check"** that Claude shows you, and match numbers, owners, and deadlines against the originals.
4. **Record**: When you are happy with it, save it as a commit (Chapter 4).
5. **Fix**: If you pointed out the same thing twice, update CLAUDE.md or the skill.

**It doesn't need to be perfect from the start.** Even if you run it once a week and fix just one inconvenient thing, in a few weeks it will become a tool that fits you just right.

<Quiz id="ch412-routine" />

## Summary

- Pick to fit the size of the task: Chat for questions, Code for file work, Plan first for big tasks, CLAUDE.md and skills for repetition, scheduled tasks for set times.
- Don't set up everything from the start. Add one at a time when the same inconvenience repeats, and fix what you already built using the same signals.
- Give a plain single line and check criteria instead of emphasis or pushing. Protect must-follow rules with mechanisms like permissions and Git.
- Run Collect → Organize → Check → Record → Fix every week.

## Glossary

| Term | One-line meaning |
|---|---|
| Hook | A command that runs automatically at set moments |
| Routine | A work habit you run in the same order each week (different from the cloud scheduled task name in Chapter 8) |

<ChapterDone :chapter="412" />

Next chapter: You have finished the Stage 3 Claude Code guide. To move the same organizing tool over to OpenAI's Codex, continue to the [Stage 3 · Codex Guide](../21-codex/). You can also pick a chapter to review from the [Stage 3 · Claude Code Table of Contents](./), or check what you have learned so far with the [AI Knowledge Level Test](../00-common/level-test.md).

[^match]: Claude Code official docs, "Extend Claude Code". "Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview (checked on 2026-10-31)
[^build]: Claude Code official docs, "Extend Claude Code". "You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview (checked on 2026-10-31)
[^update]: Claude Code official docs, "Extend Claude Code". "A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview (checked on 2026-10-31)
[^stop]: Claude Code official docs, "Best practices for Claude Code". "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices (checked on 2026-10-31)
