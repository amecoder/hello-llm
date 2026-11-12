# Chapter 8. Project Memory and Settings

<Badge type="tip" text="Required" /> Be sure to read this to follow this stage.

> **One-line summary**: Rules you're tired of repeating every time go in `CLAUDE.md`. Rules that must be followed become deny rules in `settings.json`.

The screens in this chapter are the results of running Claude Code 2.1.318 on Linux on November 6, 2026.

As you saw in [Chapter 6](06-sessions-context.md), a new session doesn't know past conversations. So you end up saying "write the meeting notes as a table" again every time. In this chapter, you write that down in a file.

## What to Write in CLAUDE.md

**CLAUDE.md** is a set of lasting instructions that you write. If you put it in a project folder, it's loaded whenever you start `claude` in that folder.[^claudemd] Think of it as a work memo you give to a new coworker.

The rule for what to write is simple. Write only what Claude can't figure out by reading the files.[^practice] For example: the language for answers, the sections of the meeting notes, and the folder to save results in.

There are also things not to write.

- A description of the folder structure. Claude reads it for itself.[^practice]
- Procedures with several steps. These fit better as skills (files where you write down a procedure and call it by name) in [Chapter 9](09-skills-extensions.md).[^skill-procedure]
- Passwords or login credentials

Aim for under 200 lines per file.[^claudemd] You don't need to pile on capital letters or "MUST!!" either. Piling on emphasis actually makes it easy for the rule to be over-applied.[^practice]

```text
Weaker example: Organize the meeting notes really!! neatly and well!!
Better example: Write meeting notes with only three sections: decisions, to-dos, next meeting.
```

You can check whether the better example was followed or not. There's no way to check "neatly."

<Quiz id="ch808-what" />

## Making and Checking CLAUDE.md

Here are the practice rules (view as a file: [8장-CLAUDE.md.txt](/practice/cli/results/8장-CLAUDE.md.txt)). Leave with `/exit` and move to the practice folder in the terminal. On Mac and Linux, paste the whole block below. It also creates the `notes` folder.

```bash
mkdir notes
cat > CLAUDE.md <<'EOF'
# Corner Cafe memo organizing rules

- Write answers in Korean.
- Write meeting notes with only three sections: decisions, to-dos, next meeting.
- Write to-dos as a table. The columns are owner, to-do, deadline.
- Don't make up anything that isn't in the memo.
- Save organized files in the notes folder.
EOF
```

After pasting, if it hasn't run yet, press Enter once more. If nothing appears, it worked. Use `ls` to check that `CLAUDE.md` and `notes` were created.

On Windows PowerShell, after `mkdir notes`, open Notepad with `notepad CLAUDE.md`. Leave out the line starting with `cat` and the `EOF` line, and enter only what's between them. If it asks whether to create a new file, click `Yes`, then save with `Ctrl + S` and close. We did not test this method.

Check in the terminal whether a new session knows the rules. This time, use `claude -p`. With `-p`, no conversation window opens. It prints just the answer to one question in the terminal and finishes right away. It's handy for a quick check. Details are covered in [Chapter 10](10-headless-automation.md).

```bash
claude -p "What are the meeting notes rules for this folder? Answer in three lines."
```

```text
1. Meeting notes use only three sections: decisions, to-dos, next meeting, and nothing that isn't in the memo is made up.
2. To-dos are written as a table with owner, to-do, and deadline columns.
3. Answers are written in Korean, and organized files are saved in the notes folder.
```

It answered with rules that were never mentioned in the conversation. That means the file was loaded. Your own habits for every project go in `~/.claude/CLAUDE.md`.[^claudemd]

For this exercise, just write `CLAUDE.md` yourself. There's also an `/init` command that makes a draft automatically, but we won't use it now.

::: details When do I use `/init`? (click to expand)
`/init` is a command that automatically makes a draft `CLAUDE.md`. But it analyzes code and writes down the build commands, testing methods, and project conventions it finds.[^init] Our memo folder has none of those, so writing it yourself is easier. This guide didn't run it either. Try it later when you work on a code project.
:::

<Quiz id="ch808-make" />

## /memory and Auto Memory

Type `/memory` inside a session and a list of instruction files appears.[^memory]

```text
  ❯ Auto-memory  true

  ❯ Project instructions   Checked in at ./CLAUDE.md
    User instructions      Saved in ~/.claude/CLAUDE.md
    Open auto-memory folder
```

**Auto memory** on the first line is notes Claude writes on its own based on your corrections and preferences. You write `CLAUDE.md`; Claude writes auto memory. It's on by default in local sessions.[^memory]

It's saved per project in the `~/.claude/projects/<project>/memory/` folder. These are ordinary Markdown files, so you can edit or delete them anytime. To turn it off, use the toggle inside `/memory`.[^memory]

If you say "remember this," it saves it to auto memory.[^memory] But if it's a rule that must always be followed in this folder, write it directly in `CLAUDE.md`. Since you wrote it, it's clear what's written there.

<Quiz id="ch808-memory" />

## Three Locations for settings.json

**settings.json** is the settings file that changes how Claude Code behaves.[^settings] Its contents are written in JSON format. JSON is text that writes field names and values in a fixed shape. The deny rule you made in [Chapter 7](07-permissions-undo.md) is in here. There are three places to put it.[^settings]

| File | Applies to |
|---|---|
| `~/.claude/settings.json` | All projects on my computer |
| `.claude/settings.json` | Everyone working in this folder |
| `.claude/settings.local.json` | Only me, only in this project |

If the same setting is in several places, the one with the narrower scope in the table wins.[^settings][^managed] For example, if the files in the first and third rows set it differently, the third row (only me, only in this project) wins.

Deny rules are the exception. A tool denied at any level can't be allowed by another level.[^permissions]

- When you save, most changes apply even to a running session without a restart.[^settings]
- You can see which files were loaded on the Setting sources line of `/status`.[^settings]
- Trailing commas and comments aren't allowed.[^json-rule] If something doesn't take effect after you edit by hand, check the commas first.

```text
Wrong example: { "deny": ["Read(./비밀/**)"], }
Right example: { "deny": ["Read(./비밀/**)"] }
```

The wrong example has a comma left after the `]`.

<Quiz id="ch808-settings" />

## The .claude Folder Structure

Claude Code reads instructions, settings, and memory from the project folder and from `~/.claude` in your home folder.[^folder] Folders whose names start with a dot are normally hidden. You can see them with `ls -a` (`ls -Force` in PowerShell).

```text
~/hello-ai-연습/터미널/        This project
├── CLAUDE.md                  Shared instructions
├── CLAUDE.local.md            Instructions just for me
└── .claude/
    ├── settings.json          Shared settings
    ├── settings.local.json    Settings just for me
    ├── skills/                This project's skills
    └── agents/                This project's subagents

~/.claude/                     All my projects
├── CLAUDE.md, settings.json   Personal instructions and settings
├── skills/, agents/           Personal skills and subagents
└── projects/                  Conversation history and auto memory
```

You'll learn `skills/` and `agents/` in [Chapter 9](09-skills-extensions.md). A skill is a task manual you call by name, and a subagent is a helper that takes on side jobs separately. For now, just know these folders exist.

You don't need to memorize it all. Most of the time, you only edit `CLAUDE.md` and `settings.json`.[^folder]

<Quiz id="ch808-folder" />

## Rules in Words vs. Enforced Rules

This is the most important section in this chapter. The two lines below look similar, but their power is different.

```text
Written in CLAUDE.md:     Don't read the secret folder.
Written in settings.json: "deny": ["Read(./비밀/**)"]
```

Words in `CLAUDE.md` affect **what Claude tries to do**. But they can't change **what Claude Code allows**. Permission rules are enforced by the Claude Code program, not by the model.[^permissions] In company terms, `CLAUDE.md` is a work guide, and permission rules are the lock on the door.

So put the truly important things in deny rules.[^practice] Try dividing them like this.

- Things you can just fix if they go wrong (tone, format) go in `CLAUDE.md`.
- Things that would be a problem if they went wrong (reading secret files) go in deny rules.
- Things that must happen every time go in hooks (commands Claude Code runs automatically at set moments) in [Chapter 11](11-hooks-statusline.md).[^hook]

<Quiz id="ch808-enforce" />

## Try It Yourself

1. In the terminal, create the `CLAUDE.md` and `notes` folder above, and ask about the rules with `claude -p`.
2. Start `claude` and ask, "@inbox/회의-2026-10-27-주간회의.txt Organize this memo into meeting notes." You didn't say to use a table, but does a table appear? Was the file saved in `notes`?
3. Open `/memory` and `/status`, and close them with Esc.
4. Leave with `/exit` and find the `.claude` folder in the terminal with `ls -a` (`ls -Force` in PowerShell).

Ask yourself: Did the new session follow the rules? Are any of my rules a problem if left only in words?

## Summary

- In `CLAUDE.md`, write only what Claude can't learn by reading, in a way you can check.
- `/init` is meant for code folders. For a memo folder, writing it yourself is easier.
- Claude writes auto memory, and you view it and turn it off in `/memory`.
- `settings.json` has three locations, and the narrower scope wins. A deny wins from any location.
- Rules in words change what's attempted; permission rules change what's allowed.

## Glossary

| Term | One-line meaning |
|---|---|
| CLAUDE.md | A file of lasting instructions you write |
| Auto memory | Notes Claude writes on its own |
| settings.json | A settings file that changes behavior |

<ChapterDone :chapter="808" />

Next chapter: [Chapter 9. Skills and Extensions](09-skills-extensions.md)

[^claudemd]: Claude Code official docs, "How Claude remembers your project". "CLAUDE.md files: instructions you write to give Claude persistent context." / "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." / "target under 200 lines per CLAUDE.md file." / "Personal preferences for all projects" https://code.claude.com/docs/en/memory (checked on 2026-11-06)
[^practice]: Claude Code official docs, "Best practices for Claude Code". "Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." / "Claude reads the repo itself. Only write down what isn't in there." / "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." / "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^skill-procedure]: Claude Code official docs, "Extend Claude with skills". "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills (checked on 2026-11-06)
[^init]: Claude Code official docs, "How Claude remembers your project". "Run `/init` to generate a starting CLAUDE.md automatically." / "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." https://code.claude.com/docs/en/memory (checked on 2026-11-06)
[^memory]: Claude Code official docs, "How Claude remembers your project". "The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Auto memory is on by default in local sessions." / "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." / "Auto memory files are plain markdown you can edit or delete at any time." / "To toggle it, open `/memory` in a session and use the auto memory toggle" / "Claude saves it to auto memory." https://code.claude.com/docs/en/memory (checked on 2026-11-06)
[^settings]: Claude Code official docs, "Settings files and precedence". "Settings are the JSON keys that change how Claude Code behaves" / "You, in every project on this machine" / "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" / "You, in this one project only." / "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." / "Settings precedence, highest first: managed settings, command line, project local, shared project, user." / "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" / "Run `/status` inside Claude Code to see which settings sources are active." https://code.claude.com/docs/en/settings (checked on 2026-11-06)
[^permissions]: Claude Code official docs, "Configure permissions". "If a tool is denied at any level, no other level can allow it." / "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." / "Permission rules are enforced by Claude Code, not by the model." https://code.claude.com/docs/en/permissions (checked on 2026-11-06)
[^json-rule]: Claude Code official docs, "Automate actions with hooks". "Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^managed]: On a work computer, settings set by an administrator (managed settings) come before these three. The basis is "Settings precedence, highest first: managed settings, command line, project local, shared project, user." in the same document. https://code.claude.com/docs/en/settings (checked on 2026-11-06)
[^folder]: Claude Code official docs, "Explore the .claude directory". "Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." / "Most users only edit `CLAUDE.md` and `settings.json`." https://code.claude.com/docs/en/claude-directory (checked on 2026-11-06)
[^hook]: Claude Code official docs, "Output styles". "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (checked on 2026-11-06)
