# Chapter 5. Moving Skills — A Weekly Review in One Line with `$weekly-review`

> **One-line summary**: Codex skills use the **same format** (`SKILL.md`) as Claude Code, and only differ in where you put them and the symbol you use to call them. The folder is `.agents/skills`, and you call them with `$name`.
> You will move three skills from your note-organizing tool, create a weekly review with a single line (`$weekly-review`), and check it against the original notes.

This chapter is based on the Codex official docs checked on November 1, 2026, and the hands-on test for this guide (run in the Codex terminal). What skills are and why you use them are explained in [Claude Code Chapter 7](../20-claude-code/07-skills-plugins.md).

## Same Format, Different Location

A Codex skill is also a folder containing a `SKILL.md` file, and `SKILL.md` must include a `name` and a `description`.[^format] Skills follow an open standard shared across multiple tools.[^standard] That is why we moved the `SKILL.md` files made in Claude Code **without changing them**.

What differs is where you put them and how you call them.

| | Claude Code | Codex |
|---|---|---|
| This folder only | `.claude/skills/` | `.agents/skills/` |
| All my folders | `~/.claude/skills/` | `~/.agents/skills/` |
| How to call | `/name` | `$name` |

Source: Codex official docs[^where][^mention]

We tested this before moving them. When we called `$weekly-review` while the files were still in `.claude/skills`, Codex could not find it right away in the skill list and instead found `SKILL.md` **by searching files**. It found the skill this time, but putting it in the expected place is much more reliable.

<Quiz id="ch505-where" />

## Moving the Skills

We asked Codex:

```
Copy the 3 skills in the .claude/skills folder to .agents/skills, where Codex reads them. Leave the original folder as it is.
```

**It was blocked.** This happened because of the protected folders we saw in Chapter 4. Inside a workspace folder, `.agents` is read-only by default.[^protected] Codex reported that the copy was blocked and showed the commands to run instead.

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

Because this test was a terminal run with the approval mode set in advance (Chapter 7), it could not ask for permission and simply stopped. This guide could not directly verify how this moment looks in the app. If an approval screen pops up, read **what is being written and where** before you decide.

For this guide, we ran the commands Codex gave us **ourselves** to copy the files. Open the macOS Terminal, go into the folder with `cd ~/hello-ai-연습/정리도구`, and type the two lines above. If you are new to the terminal, see [Claude Code Chapter 10](../20-claude-code/10-terminal.md) first.

After moving them, you should see three folders under `.agents/skills`: `meeting-notes`, `study-notes`, and `weekly-review`.

<Quiz id="ch505-move" />

## Calling with `$`

You can type `$` in the message box to pick and call a skill.[^dollar] This time, we sent only the skill name.

```
$weekly-review
```

After the copy was done, Codex opened `.agents/skills/weekly-review/SKILL.md` **right away** without searching files. Then it gathered the three reflection notes and created a weekly review.

Result: [Weekly review made with a skill](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

We checked the numbers and facts against the original notes.

| Original note | Weekly review | Match? |
|---|---|---|
| 12 likes | 12 | Match |
| Wrote the price wrong as 6,000 won | 6,000 won error | Match |
| 4 sets today | 4 | Match |
| 11 sets total this week | 11 | Match |
| Posted all 3 times on Instagram | 3 times | Match |
| Mulled wine cost: 1,800 won | None | Missing |
| Bought and replaced a light bulb | None | Missing |
| 2 hours spent writing copy | None | Missing |

Source: Hands-on results from this guide (2026-11-01)

Nothing was wrong, but **three items were missing**. They seem to have been left out because they did not fit neatly into the three sections of the review format (What went well, What could be better, To do next week). Always check **not only what is wrong, but also what is missing**. If there is something that must not be left out, you can add a single line to the skill, such as: "Put numbers for the next meeting agenda, like the mulled wine cost, under To do next week."

Even if you do not call a skill by name, Codex can pick it on its own when your request matches the skill description.[^implicit] That is why it helps to clearly write **when to use it** near the beginning of the description.[^frontload]

<Quiz id="ch505-call" />

## Making New Skills and Plugins

When you make a new skill from scratch, call the built-in `$skill-creator` skill and explain your goal, steps, and format.[^creator] The official docs recommend starting with tasks where **the steps and format always stay the same**, like a weekly report or a meeting follow-up.[^first] The three skills in our note-organizing tool are exact examples of this.

A **plugin** is an installable bundle that packages skills together with external tool connections.[^plugin] ChatGPT and Codex share a single plugin list.[^shared] The docs say to review plugin hooks (scripts that run automatically) and decide whether you trust them before they run.[^hooks] For any plugin you are seeing for the first time, check who made it and what permissions it needs first, just as you learned in [Claude Code Chapter 7](../20-claude-code/07-skills-plugins.md).

<Quiz id="ch505-create" />

## Try It Yourself

1. Ask Codex to copy the three skills from `.claude/skills` to `.agents/skills`. If it asks for permission, read the details and decide; if it gets blocked, type the two-line command from this chapter directly in the terminal (you can also use the app menu "View → Open Terminal").
2. Open a new chat and type `$` in the message box to check that all three skills appear.
3. Send `$weekly-review` and check the result against the original notes. Count wrong items and missing items separately.
4. If anything is missing, add one line to the skill and run it again.

**Up next**: In Chapter 6, we will look at scheduling the weekly review to run automatically every Friday, along with the cloud and mobile features.

## Summary

- The skill format (`SKILL.md`) is the same as in Claude Code. The location is `.agents/skills`, and you call skills with `$name`.
- Because `.agents` is a protected folder, moving files there may be blocked or require permission (this guide only verified being blocked in the terminal).
- A single line, `$weekly-review`, produced the weekly review. Five items matched and three were missing.
- Check not only what is wrong, but also what is missing. If it keeps happening, update the skill.

## Glossary

| Term | One-line meaning |
|---|---|
| `$` mention | How you call a skill by name in Codex |
| `.agents/skills` | Where Codex looks for skills in this folder |
| skill-creator | A built-in skill that helps you make new skills |

<ChapterDone :chapter="505" />

Next chapter: [Chapter 6. Schedule, Cloud, and Mobile](06-schedule-cloud.md)

[^format]: Codex official docs, "Build skills". "A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^standard]: Codex official docs, "Build skills". "Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^where]: Codex official docs, "Build skills". "For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^mention]: Codex official docs, "Skills & Plugins". "ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins (checked on 2026-11-01)
[^protected]: Codex official docs, "Agent approvals & security". "`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security (checked on 2026-11-01)
[^dollar]: Codex official docs, "Slash commands". "You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands (checked on 2026-11-01)
[^implicit]: Codex official docs, "Build skills". "**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^frontload]: Codex official docs, "Build skills". "Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills (checked on 2026-11-01)
[^creator]: Codex official docs, "Skills & Plugins". "In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins (checked on 2026-11-01)
[^first]: Codex official docs, "Skills & Plugins". "Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins (checked on 2026-11-01)
[^plugin]: Codex official docs, "Skills & Plugins". "A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins (checked on 2026-11-01)
[^shared]: Codex official docs, "Skills & Plugins". "ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins (checked on 2026-11-01)
[^hooks]: Codex official docs, "Plugins". "Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins (checked on 2026-11-01)
