# Chapter 3. The Rules File AGENTS.md — Moving CLAUDE.md to Codex

> **In short**: Codex reads **`AGENTS.md`** before starting any work. If you leave Claude Code's `CLAUDE.md` as is, Codex does not read it.
> You will move the rules in the note-organizer folder into `AGENTS.md` and test in a new chat whether Codex follows them **without being told**.

This chapter is based on the official Codex documentation checked on November 1, 2026, and on what this guide tested directly in the note-organizer folder. Why you need a rules file was already explained in [Claude Code Chapter 6](../20-claude-code/06-claude-md.md). Here, we cover only what changes in Codex.

## Codex Does Not Read CLAUDE.md

The rules file in Codex is named `AGENTS.md`.[^agents] To use a file with a different name as rules, you have to register it separately in settings; unregistered file names are ignored.[^ignored] So if you leave `CLAUDE.md` as is, Codex will not read it as rules.

You could also see this in the run log from Chapter 2. Codex looked for `AGENTS.md` in the folder, found none, and read only the templates (`templates/`). It did not open `CLAUDE.md`.

Even so, the meeting notes in Chapter 2 followed the `(메모에 없음)` (Not in notes) rule. That is because the same rule was also written in the **template guide** (`templates/README.md`). Put the other way around, Codex does not know any rule written **only** in `CLAUDE.md`.

<Quiz id="ch503-why" />

## Moving CLAUDE.md to AGENTS.md

You can leave the moving job to Codex too. Like Chapter 2, the run in this chapter uses the same Codex in the terminal. This time, we added one **new** rule. When you check later whether this rule is followed, you can tell fairly reliably whether Codex read `AGENTS.md`.

```
CLAUDE.md is the rules file that Claude Code reads. Move the same rules into AGENTS.md so Codex reads them too. Do not change the rule contents, and add just one rule: 'At the very bottom of the organized file, include a "Check Against Original (원본과 대조할 것)" section and list up to 3 numbers, names, or dates to double-check.' Leave CLAUDE.md as is.
```

Codex copied the five rules from `CLAUDE.md` as they were and added the new rule as number 6. Then it reported that it verified the contents matched the original completely, except for the added rule.

Result: [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt)

There is a reason we did not delete `CLAUDE.md`. We want to keep using the same folder in Claude Code as well. In return, you have to **update both files together**. If you edit only one, the two tools will work under different rules.

<Quiz id="ch503-move" />

## Testing Without Mentioning the Rules

Open a new chat and ask Codex to organize your study notes without saying anything about the rules.

```
Organize inbox/공부-2026-10-28-프롬프트-강의.txt into study notes and save it in notes/.
```

At the very bottom of the result, the section from the new rule appeared.

```
## Check Against Original (원본과 대조할 것)

- Lecture date: 10/28 (Wed). The original says 10/28, and the year 2026 was taken from the file name.
- Lecture length: 1 hour.
- Prompt-writing methods introduced by the instructor: 5.
```

Result: [Study notes written from rules alone](/practice/notes/results/codex/3장-공부노트-규칙확인.txt)

| When the file was made | "Check Against Original (원본과 대조할 것)" section |
|---|---|
| Before AGENTS.md (Chapter 2 meeting notes) | None |
| After AGENTS.md (these study notes) | Present |

Source: Hands-on results from this guide (2026-11-01, 1 run each)

Because the new rule existed only in `AGENTS.md`, we can see that Codex read and followed that file. Keep in mind, though, that this was **tested once each**, and the note types before and after (meeting notes vs. study notes) were different. The template checklist also has a similar item: "Checked once against the original note." To be more certain, try running the **same note** once without `AGENTS.md` and once with it, then compare. There is no guarantee it will follow the rules every single time, so check the result each time you view it.

<Quiz id="ch503-test" />

## The Order Codex Reads AGENTS.md

You can place `AGENTS.md` in two locations.[^chain]

| Location | Scope | Example |
|---|---|---|
| `~/.codex/AGENTS.md` | All of my folders | "Answer in Korean" |
| `AGENTS.md` in a project folder | That folder only | Note-organizer rules |

Source: Codex official docs (selected)[^chain]

If both exist, Codex reads them **joined together**, and the file closer to your current folder comes later and takes priority over earlier instructions.[^override] Once the combined size reaches the default limit of 32 KiB, Codex stops adding more.[^limit] In Korean, that is roughly 10,000 characters. Keep your rules short.

If you edited the rules and they do not seem to take effect, **start a new chat** or restart Codex. Codex reads the rules fresh each time it starts a run.[^restart]

If a folder does not have `AGENTS.md` yet, you can also type `/init` in the app's input box to create an outline.[^init]

<Quiz id="ch503-order" />

## Import and Memories

**Import** is a feature that brings over settings from another agent all at once. In the app, you can import from Claude Code, Claude Cowork, or Cursor.[^import-from] Start from the **Import** menu in the app settings. If you do not see that menu, open **General** and look for **Import other agent setup**.[^import-menu]

![Settings → Import screen in the ChatGPT app: under "Import from another AI app", Claude Code, Claude Cowork, and Cursor are listed, each with an Import button](../../../guide/21-codex/assets/shot-02-import.png)

On this guide's screen (2026-11-01), **Import** was in the left list of settings, and Claude Code, Claude Cowork, and Cursor found on this computer appeared with an **Import** button next to each. This guide did not click the button.

| In Claude Code | In Codex |
|---|---|
| Rules files (`CLAUDE.md`, etc.) | `AGENTS.md` |
| Skills | Skills |
| Slash commands (`/name`) | Skills (`$name`) |
| `settings.json` | `config.toml` |

Source: Codex official docs (selected)[^import-map]

Importing does not change or delete your original settings.[^import-keep] However, after importing, the docs strongly recommend reviewing **permission restrictions in skills, hooks, and commands that take arguments**.[^import-review]

This guide **did not run** Import. Import looks through not just a single folder, but also your personal settings on your computer.[^import-scope] If you want to see for yourself what gets moved, it is better to move things by hand as we did in this chapter.

**Memories** is a feature that carries context from earlier work into future work.[^memory] Local Codex memories on your computer are turned off by default.[^memory-off] The official docs say to treat memories only as a "recall helper" and not to rely on them for rules that must always be followed.[^memory-rules] **Write rules that must be followed in `AGENTS.md`**.[^memory-agents]

<Quiz id="ch503-import" />

## Try It Yourself

1. Use the prompt above to have Codex move `CLAUDE.md` to `AGENTS.md`. Add one new rule along with it.
2. Open `AGENTS.md` and check that the original rules are intact and the new rule is attached.
3. Open a **new chat** and have Codex organize the study notes without mentioning the rules.
4. Check the result to see if the new rule was followed.

**Up next**: In Chapter 4, you will learn about the permissions menu—which decides what Codex does on its own and what it asks you about—and how to undo changes.

## Summary

- Codex reads `AGENTS.md`, and does not read `CLAUDE.md` if you leave it as is.
- If you use both tools together, update both files together.
- By adding a new rule and testing without mentioning it, you can tell whether the rules file is being read (this exercise: 0 before → 1 after).
- Personal rules go in `~/.codex/AGENTS.md`, and folder rules go in the folder's `AGENTS.md`. The closer file takes priority.
- Import moves settings all at once, but also inspects your personal settings. Put rules that must be followed in `AGENTS.md`, not in Memories.

## Glossary

| Term | One-line meaning |
|---|---|
| Import | A feature that moves settings from another agent into Codex |
| Memories | A feature that recalls context from earlier work next time |
| `/init` | A command that creates an `AGENTS.md` outline |

<ChapterDone :chapter="503" />

Next chapter: [Chapter 4. Permissions and Undo](04-permissions-undo.md)

[^agents]: Codex official docs, "Custom instructions with AGENTS.md". "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^ignored]: Codex official docs, "Custom instructions with AGENTS.md". "Filenames not on this list are ignored for instruction discovery." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^chain]: Codex official docs, "Custom instructions with AGENTS.md". "In your Codex home directory (defaults to `~/.codex`, unless you set `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists." / "Starting at the project root (typically the Git root), Codex walks down to your current working directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^override]: Codex official docs, "Custom instructions with AGENTS.md". "Files closer to your current directory override earlier guidance because they appear later in the combined prompt." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^limit]: Codex official docs, "Custom instructions with AGENTS.md". "Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default)." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^restart]: Codex official docs, "Custom instructions with AGENTS.md". "If instructions look stale, restart Codex in the target directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (checked on 2026-11-01)
[^init]: Codex official docs, "Slash commands". "Generate an `AGENTS.md` scaffold for the current project." https://learn.chatgpt.com/docs/reference/slash-commands (checked on 2026-11-01)
[^import-from]: Codex official docs, "Import from another agent". "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^import-menu]: Codex official docs, "Import from another agent". "If **Import** isn't available as a settings section yet, open **General** and find **Import other agent setup**." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^import-map]: Codex official docs, "Import from another agent". Instruction files, `settings.json`, Skills, and Slash commands rows in the "What ChatGPT can import" table. https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^import-scope]: Codex official docs, "Import from another agent". "The import flow checks both your user-level setup and your existing projects." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^import-keep]: Codex official docs, "Import from another agent". "Importing doesn't change or delete your existing agent setup." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^import-review]: Codex official docs, "Import from another agent". "Tool restrictions or permissions in imported skills and agents." / "Hooks whose behavior may differ after import." / "Prompt templates or command-style prompts that depend on arguments, shell interpolation, or file-path placeholders." https://learn.chatgpt.com/docs/import (checked on 2026-11-01)
[^memory]: Codex official docs, "Memories". "Memories let ChatGPT and Codex carry useful context from earlier work into future work." https://learn.chatgpt.com/docs/customization/memories (checked on 2026-11-01)
[^memory-off]: Codex official docs, "Memories". "Local Codex memories are off by default." https://learn.chatgpt.com/docs/customization/memories (checked on 2026-11-01)
[^memory-rules]: Codex official docs, "Memories". "Treat memories as a helpful recall layer, not as the only source for rules that must always apply." https://learn.chatgpt.com/docs/customization/memories (checked on 2026-11-01)
[^memory-agents]: Codex official docs, "Memories". "Keep required team guidance in `AGENTS.md` or checked-in documentation." https://learn.chatgpt.com/docs/customization/memories (checked on 2026-11-01)
