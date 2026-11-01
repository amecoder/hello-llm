# Chapter 3. Rules and Skills — No Moving Needed

> **In one line**: Antigravity reads **`AGENTS.md`** in your folder as an always-on rule, and automatically picks skills from **`.agents/skills`**. The files you made in the Codex chapters work **as they are**.
> You will verify this with the same memo: once with `AGENTS.md` moved out of the way, and once after putting it back.

This chapter is based on the Antigravity official docs checked on November 1, 2026, and the results of running Antigravity CLI `agy` 1.4.12 for this guide. For our hands-on test, this guide ran `agy` from inside another AI tool. Because the official FAQ does not support this kind of use on individual plans ([Chapter 7](07-safety-choose.md)), run it directly in the app or terminal when you follow along. The app and CLI use the same agent ([Chapter 1](01-what-is.md)). What rule files and skills are was covered in [Claude Code Chapters 6 and 7](../20-claude-code/06-claude-md.md).

## Where Antigravity Looks

Antigravity looks for rules and skills in fixed folders.[^where]

| What | This folder (project) | All my folders |
|---|---|---|
| Rules | `AGENTS.md`, `GEMINI.md`, `.agents/rules/` | `~/.gemini/AGENTS.md`, etc. |
| Skills | `.agents/skills/name/SKILL.md` | `~/.gemini/config/skills/` |

Source: Antigravity official docs (excerpted)[^where][^global][^global-skill]

**The file names and locations match what you made in the Codex chapters.** That means the rule file `AGENTS.md` and the skill folder `.agents/skills`. So you can open your organizer folder as is, **without moving anything**.

`CLAUDE.md` is not on the list of rule files.[^names] If you have rules that you only kept in Claude Code, write them in `AGENTS.md` too (for the same reason as in Codex Chapter 3).

You write `AGENTS.md` without any header settings at the top, and **its entire content stays turned on at all times.**[^always] Edited rules and skills apply right away starting from your next message.[^reread]

<Quiz id="ch603-where" />

## Testing with the Same Memo

`AGENTS.md` has the rule we added in Codex Chapter 3: "Put a 'Check against the original (원본과 대조할 것)' section at the very bottom of the organized file." Because this rule is only in `AGENTS.md`, checking whether the result has that section tells you whether `AGENTS.md` was read.

During a review of the Codex chapters, it was pointed out that using different memos before and after is not a strict comparison. So this time, we ran it twice with **the exact same memo and the exact same request**.

```
Organize the memo inbox/회의-2026-10-27-주간회의.txt into meeting notes and save it as a new file in the notes/ folder.
```

| Run | "Check against the original" section |
|---|---|
| With `AGENTS.md` moved out of the folder | None |
| After putting `AGENTS.md` back | Present |

Source: Practice results from this guide (2026-11-01, 1 run each)

Results: [Without AGENTS.md](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [With AGENTS.md](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

Looking at the run logs makes the difference even clearer.

- **When `AGENTS.md` was missing**: The agent searched for and opened `AGENTS.md`, `CLAUDE.md`, and `GEMINI.md` on its own.
- **When `AGENTS.md` was present**: It followed the new rule without opening that file separately. That is likely because the file was already loaded from the start as an always-on rule.

In both runs, the agent **opened and read `CLAUDE.md` on its own.** It was not loaded automatically as a rule file, but this suggests the agent can read it as reference material if it is in the folder. This computer also had a personal rule file (`~/.gemini/GEMINI.md`) loaded during the run, so we cannot tell for sure whether that influenced this behavior. Each test was run once.

Even with the same memo, there was one more difference in the results. Codex fixed the day of the week in the memo to match the 2026 calendar, whereas Antigravity kept the day of the week written in the memo (`10/27(Mon)`). The days of the week in the practice memos were made up for the story and do not match the real calendar. Different tools make different calls like this, so always check dates against your original.

There was also one wrong date. In the meeting notes created with `AGENTS.md` present, the deadline for researching mulled wine cost was written as `10/30(Fri)` instead of `10/31(Fri)` (the memo says "by Friday"). **Even when the rule section is followed, dates can still be wrong.** Do not let the "Check against the original" section make you let your guard down—check it against the original yourself.

<Quiz id="ch603-test" />

## Skills Are Picked Automatically

On every turn, the agent looks at the list of skill names and descriptions (`description`). When a skill fits the task, the agent reads its full instructions.[^progressive] You do not need to tell it to use a skill every time, though you can mention the skill by name if you want to make sure it gets used.[^mention]

In the two runs above, we never mentioned any skill, yet **its very first action was reading `.agents/skills/meeting-notes/SKILL.md`**. It recognized the skill we moved over in Codex Chapter 5 right away.

To call a skill yourself, type `/skill-name` in the app message box.[^slash] This differs from `$name` in Codex and matches `/name` in Claude Code.

```
/weekly-review
```

In this guide, we ran it in the terminal by naming the skill: "Organize this week's review using the weekly-review skill." The agent read `.agents/skills/weekly-review/SKILL.md` and created a weekly review from the three review memos.

Result: [Weekly review made with the skill](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

**All eight** facts to check against the original memos were included: 12 likes, the 6,000-won pricing error, 4 sets, 11 in total, 3 Instagram posts, 1,800-won mulled wine, the light bulb, and 2 hours spent writing captions. In the review Codex made with the exact same skill, 3 facts were missing ([Codex Chapter 5](../21-codex/05-skills.md)). This shows how results can differ from tool to tool even with the same instructions.

The result also has `(Not in memo)` marked in several places. That does not mean a fact is wrong; it shows that things required by the template, such as "why it went well" or "when to do it," were not in the memo. Along with checking for wrong or missing items, check whether notes like these are placed accurately.

<Quiz id="ch603-skills" />

## Conditional Rules and Saving What It Learns

When you have many rules, you can split them into files inside the `.agents/rules/` folder. At the very top of each of these files, you must write when it should turn on (`trigger`). If you leave this out or write it wrong, **the rule is silently discarded.**[^trigger] When you only have a few lines of rules like in our organizer folder, a single `AGENTS.md` file is enough.

Use rules for "things to always follow" and skills for "multi-step tasks."[^rule-skill] For example, "Write dates like 10/27(Mon)" is a rule, while "Gather three review memos to make a weekly review" is a skill.

If you want to save something you corrected during a conversation as a rule or skill, use `/learn`. The agent proposes what to change and writes the file **only after you approve it**.[^learn]

<Quiz id="ch603-rules" />

## Try It Yourself

1. Open the organizer folder as an Antigravity project (Chapter 2). Do not move anything.
2. Ask it to organize a meeting memo, and check whether the "Check against the original" section appears at the very bottom of the result.
3. If you want to be extra sure, temporarily move `AGENTS.md` somewhere else, run the exact same request again, and compare. Put it back when you are done.
4. Create a weekly review with `/weekly-review`, and count any wrong or missing items against the original memos.

**Up next**: Chapter 4 compares Antigravity's permission presets and undo feature with Claude Code and Codex.

## Summary

- Antigravity reads `AGENTS.md`, `GEMINI.md`, and `.agents/skills`. The files you made in Codex work as they are.
- Tested with the same memo: 0 without `AGENTS.md` → 1 with `AGENTS.md` (the "Check against the original" section).
- The agent picked the right skill on its own without being told. To call one yourself, type `/skill-name`.
- Files in `.agents/rules/` must include a `trigger`. Use `/learn` to review and save lessons from a conversation.

## Glossary

| Term | One-line meaning |
|---|---|
| always_on | A rule that stays turned on at all times |
| trigger | The setting that decides when to turn on a rule |
| `/learn` | A command that proposes saving lessons from your chat as a rule or skill |

<ChapterDone :chapter="603" />

Next chapter: [Chapter 4. Permissions and Undo](04-permissions-undo.md)

[^where]: Antigravity official docs, "Customization discovery". "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery (checked on 2026-11-01)
[^global]: Antigravity official docs, "Rules". "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules (checked on 2026-11-01)
[^global-skill]: Antigravity official docs, "Customization discovery". "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery (checked on 2026-11-01)
[^names]: Antigravity official docs, "Rules". "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules (checked on 2026-11-01)
[^always]: Antigravity official docs, "Rules". "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules (checked on 2026-11-01)
[^reread]: Antigravity official docs, "Customization discovery". "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery (checked on 2026-11-01)
[^progressive]: Antigravity official docs, "Agent skills". "On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills (checked on 2026-11-01)
[^mention]: Antigravity official docs, "Agent skills". "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills (checked on 2026-11-01)
[^slash]: Antigravity official docs, "Agent skills". "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills (checked on 2026-11-01)
[^trigger]: Antigravity official docs, "Rules". "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules (checked on 2026-11-01)
[^rule-skill]: Antigravity official docs, "Rules". "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules (checked on 2026-11-01)
[^learn]: Antigravity official docs, "Slash commands overview". "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands (checked on 2026-11-01)
