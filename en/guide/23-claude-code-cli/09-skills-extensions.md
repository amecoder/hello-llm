# Chapter 9. Skills and Extensions

<Badge type="tip" text="Required" /> Read this to follow this stage.

> **One-line summary**: Turn instructions you keep repeating into a skill. Side tasks go to subagents, outside services go through MCP, and bundled installs are plugins. At first, one skill is enough.

The screens in this chapter come from running Claude Code 2.1.318 on Linux on November 6, 2026.

## Making a Skill

A **skill** (Skill) is a feature that adds a work procedure for Claude with a single `SKILL.md` file. If you keep pasting the same instructions into the chat, it is worth making one.[^skill] Think of it as a work manual you call by name.

Project skills go in `.claude/skills/<skill-name>/SKILL.md`.[^skill] Leave with `/exit` and move to the practice folder in the terminal. On Mac and Linux, paste the whole block below (view as a file: [ch9-skill-meeting-notes.txt](/practice/en/cli/results/ch9-skill-meeting-notes.txt)).

```bash
mkdir -p .claude/skills/meeting-notes
cat > .claude/skills/meeting-notes/SKILL.md <<'EOF'
---
description: Turns meeting notes into meeting minutes that follow the rules. Use it for requests to organize meeting notes.
---

Read the $ARGUMENTS file and make meeting minutes following the CLAUDE.md rules.
Name the file `minutes-date.md` and save it in the notes folder.
When done, report the saved file name and the number of to-dos in one line.
EOF
```

If it has not run yet after pasting, press Enter once more. If nothing appears, it worked. Check with `ls .claude/skills/meeting-notes` that `SKILL.md` was created.

In Windows PowerShell, run `mkdir .claude\skills\meeting-notes`, then open Notepad with `notepad .claude\skills\meeting-notes\SKILL.md`. Leave out the line starting with `cat` and the `EOF` line, and put in only what is between them. If it asks whether to create a new file, click `Yes`, save with `Ctrl + S`, and close it. We did not test this method.

The file has two parts: the settings between the `---` lines and the instructions below them.[^skill]

- The **folder name** `meeting-notes` becomes the command name you type.[^skill]
- **description** is what Claude uses to decide when to load this skill.[^skill]
- **`$ARGUMENTS`** is a blank. The text you pass when calling the skill goes here.[^arguments] In the hands-on, the file path written after the command went in, and the skill organized that note. So you can use the same skill to organize other notes too.

```text
Weak description:   meeting
Better description: Turns meeting notes into meeting minutes that follow the rules. Use it for requests to organize meeting notes.
```

The better example says both what it does and when to use it. This makes it easier for Claude to notice the right moment.

Now start `claude` in the terminal, type `/`, and look for it in the list. To call it yourself, type this:

```text
/meeting-notes inbox/meeting-2026-10-27-weekly.txt
```

When we called the same skill with `claude -p` from [Chapter 10](10-headless-automation.md), `notes/minutes-2026-10-27.md` was created and Claude answered like this:

```text
Saved to `notes/minutes-2026-10-27.md`, with 5 to-dos.
```

Following the `CLAUDE.md` rules from [Chapter 8](08-memory-settings.md), it produced three sections: decisions, to-dos, and next meeting ([see the result](/practice/en/cli/results/ch10-minutes-by-script.txt)). The skill body loads only when it is used, so it costs almost nothing the rest of the time.[^skill]

<Quiz id="ch809-skill" />

## When a Skill Does Not Work

Sometimes a mistake does not cause an error. If the skill is not in the list or behaves oddly, check in this order:

1. Is the folder name the same as the command you typed?
2. Is it located at `.claude/skills/meeting-notes/SKILL.md`?
3. Is the very first line of the file `---`? The settings are read only when it is the first line.[^skill-debug]
4. Are the setting field names spelled correctly? If not, they are ignored without an error.[^skill-debug]
5. Did you start `claude` in the practice folder? Check with `pwd`.

Changes you make during a session take effect without a restart. But if you create a new skill folder that did not exist when the session started, run `/reload-skills`.[^skill-debug]

<Quiz id="ch809-debug" />

## Subagents

A **subagent** (Subagent) is a specialist helper that takes on a specific kind of work. It works in its own context window and returns only a summary. So search results and logs do not clutter your conversation.[^sub] It is like giving research to an assistant and hearing only the conclusion.

For example, imagine checking five meeting minutes one by one against the original notes. If you ask directly, the contents of ten files of notes and minutes pile up in your conversation. If you hand it to a subagent, the subagent reads the files, and only a few lines of conclusions come back to your conversation, like "Minutes #3 has a different deadline from the note."

The easiest way to make one is to ask Claude.[^sub] Just say something like "Make a subagent in this project that checks whether the meeting minutes match the original notes." If it cannot find the new one, try restarting Claude Code.[^sub] This guide did not actually make a subagent.

Older articles may tell you to make one in the `/agents` screen. That wizard is gone now. Typing `/agents` only shows a message telling you to ask Claude or edit the files yourself.[^sub]

A subagent's requests count toward the same usage limits as your conversation.[^sub] For small tasks, it is better to just ask directly.

<Quiz id="ch809-subagent" />

## MCP

**MCP** (Model Context Protocol) lets Claude Code do things beyond its basic tools. Examples include searching a list of to-dos and bug reports (an issue tracker), looking things up in a store of data (a database), and controlling a web browser.[^mcp] Think of it as plugging a cable into Claude that leads to an outside service.

There are two places to type commands. You type `claude mcp add` in the terminal (shell) before starting `claude`. You type `/mcp` inside a session to check servers you have already added.[^mcp] We tried adding, checking, and removing the example server from the official docs.

```bash
claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp
claude mcp list
claude mcp remove claude-code-docs
```

Let's read the first line piece by piece.

- `claude mcp add`: Adds an MCP server.
- `--transport http`: Means it is a remote server connected over HTTP.
- `claude-code-docs`: The server name you give it.
- `https://…`: The server address.

`list` shows the list, and after `remove` you write the name of the server to delete. Running the three commands prints these lines in order:

```text
Added HTTP MCP server claude-code-docs with URL: https://code.claude.com/docs/mcp to local config
claude-code-docs: https://code.claude.com/docs/mcp (HTTP) - ✔ Connected
Removed MCP server "claude-code-docs" from local config
```

`✔ Connected` means it is connected. The default scope `local` means only you use it, and only in this project.[^mcp]

**Connect only servers you can trust.** Servers that fetch outside content can expose you to prompt injection (a trick that tries to control an AI with instructions hidden in text).[^mcp-trust] Do not add a server when you do not know who made it.[^mcp-audit]

<Quiz id="ch809-mcp" />

## Plugins

A **plugin** (Plugin) is a folder that installs skills, agents, hooks, MCP servers, and more as one bundle. A hook is a command that runs automatically at set moments; you will learn about it in [Chapter 11](11-hooks-statusline.md). Everything above can be used on its own without a plugin. You only need a plugin when you want to use several of them as a bundle.[^plugin]

For example, imagine bundling this chapter's meeting-minutes skill and the checking subagent into one plugin. A coworker would not need to make the two one by one. They would just install the one plugin.

Inside a session, type `/plugin` and you can choose plugins in the Discover tab.[^plugin] The install command looks like `/plugin install commit-commands@claude-plugins-official`. If you type it in a session, it does not install right away; a details screen opens first.[^plugin-install] This guide did not go as far as installing one.

**Plugins run with your permissions.** Whatever the source, an installed plugin can run code with your user permissions.[^plugin] That is why you should read the details screen before installing.[^plugin-install] Treat it like a program you run yourself.

An enabled plugin becomes part of every session, even sessions where you do not use it.[^plugin] If you do not use it, disable or remove it in the Installed tab of `/plugin`.[^plugin-install]

<Quiz id="ch809-plugin" />

## What to Use When

| When | Use |
|---|---|
| You have rules to always follow | `CLAUDE.md` |
| You repeat the same procedure | Skill |
| You hand off a big side task | Subagent |
| You use an outside service | MCP |
| You want several things in one install | Plugin |
| It must run every single time | Hook ([Chapter 11](11-hooks-statusline.md)) |

You do not need to install everything. First, ask yourself: Is anything bothering me right now? If not, you do not have to make anything yet.

<Quiz id="ch809-choose" />

## Try It Yourself

1. Make the skill in the terminal. Start `claude`, type `/`, and check that `meeting-notes` appears.
2. Run `/meeting-notes inbox/meeting-2026-10-27-weekly.txt`. Was a file created in `notes`? Does its content match the note?
3. Leave with `/exit` and type the three `claude mcp` commands in the terminal in order. Check with `claude mcp list` that the server was removed.

Ask yourself: Could I organize other notes with the same skill? Is there an extension I really need right now?

## Summary

- A skill is made with a single `.claude/skills/<name>/SKILL.md`. The folder name is the command name.
- If it does not work, check the folder name, the `---` on the first line, and the spelling of the field names.
- The `/agents` wizard is gone. Make subagents by asking Claude or by writing a file.
- Type `claude mcp add` and similar commands in the shell, and `/mcp` inside a session.
- Use only MCP servers and plugins you can trust. Plugins run with your permissions.

## Glossary

| Term | One-line meaning |
|---|---|
| Skill | A work manual you call by name |
| Subagent | A helper that handles side tasks in its own context |
| MCP | A way to connect outside tools |
| Plugin | An install unit that bundles several extensions |

<ChapterDone :chapter="809" />

Next chapter: [Chapter 10. One-Line Runs and Automation](10-headless-automation.md)

[^skill]: Claude Code official docs, "Extend Claude with skills". "Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." / "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." / "Commit it so your team gets it too" / "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." / "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." / "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (checked on 2026-11-06)
[^skill-debug]: Claude Code official docs, "Extend Claude with skills". "Claude Code reads the frontmatter only when the opening `---` is the file's first line." / "Claude Code ignores a field it doesn't recognize without reporting an error." / "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." / "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." https://code.claude.com/docs/en/skills (checked on 2026-11-06)
[^sub]: Claude Code official docs, "Create custom subagents". "Subagents are specialized AI assistants that handle specific types of tasks." / "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." / "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." / "To create one, ask Claude to write it for you, or write the file yourself." / "If Claude can't find the new subagent, restart Claude Code and try again." / "It also sends its own requests, which count toward the same usage limits as your main conversation." https://code.claude.com/docs/en/sub-agents (checked on 2026-11-06)
[^mcp]: Claude Code official docs, "Connect to MCP servers". "lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." / "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." / "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." / "By default it registers the server at `local` scope: private to you, active only in the current project." https://code.claude.com/docs/en/mcp-quickstart (checked on 2026-11-06)
[^mcp-trust]: Claude Code official docs, "Connect Claude Code to tools via MCP". "Verify you trust each server before connecting it." / "Servers that fetch external content can expose you to prompt injection risk." https://code.claude.com/docs/en/mcp (checked on 2026-11-06)
[^mcp-audit]: Anthropic does not security-check MCP servers for you either. Claude Code official docs, "Security". "Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." https://code.claude.com/docs/en/security (checked on 2026-11-06)
[^plugin]: Claude Code official docs, "Plugins overview". "A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." / "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." / "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." / "Whatever the tier, a plugin you install can run code with your user privileges." / "An enabled plugin is part of every session, not only the sessions where you use it." https://code.claude.com/docs/en/plugins/overview (checked on 2026-11-06)
[^plugin-install]: Claude Code official docs, "Install and manage plugins". "/plugin install commit-commands@claude-plugins-official" / "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." / "A plugin can run hooks and MCP servers, so read the pane before you install." / "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." https://code.claude.com/docs/en/plugins/install (checked on 2026-11-06)
[^arguments]: Claude Code official docs, "Extend Claude with skills". "All arguments passed when invoking the skill." https://code.claude.com/docs/en/skills (checked on 2026-11-06)
