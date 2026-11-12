# Chapter 11. Hooks and Screen Customization

<Badge type="tip" text="Required" /> Read this to follow this stage.

> **One-line summary**: A hook (Hook) is a command that **Claude Code itself** runs at set moments. It does not leave things to the AI's judgment, so use it for things that must happen.

The screens in this chapter come from running Claude Code 2.1.318 on Linux on November 6, 2026.

Let's make a hook that leaves a record every time a file changes. We will also adjust the status line at the bottom of the screen and the tone of answers to suit you.

## What Is a Hook?

A hook is a shell command you set up. Claude Code runs that command at set points. So you do not have to hope that Claude will "remember and do it."[^hook-what]

Put it side by side with the CLAUDE.md from [Chapter 8](08-memory-settings.md) and you can see the difference.

- **Weak example**: You write in CLAUDE.md, "When you change a file, leave one line in 변경기록.txt." The one keeping this rule is Claude. It can miss it.
- **Better example**: You make the same thing a hook. The one keeping this rule is Claude Code. The command runs after every file change.

Use hooks for things that must happen every single time.[^every-time] That does not mean you need to move every rule into a hook. Rules like tone or document format are fine in CLAUDE.md. Use hooks only for "things that would cause trouble if skipped."

<Quiz id="ch811-what" />

## Making the Change-Log Hook

You make a hook by adding a `hooks` field to a settings file.[^hook-add] In this chapter, we put it in the project settings file `.claude/settings.json`. It is the same file that holds the deny rule from [Chapter 7](07-permissions-undo.md).

When you edit it by hand, a single comma can easily break it. So we overwrite the whole file at once. The deny rule from Chapter 7 is included as is in the content below, so it does not disappear.

Leave with `/exit` and, in the practice folder in the terminal, paste the whole block below. If it has not run yet after pasting, press Enter once more.

Several unfamiliar field names appear, but you do not need to know them all now. There are three big chunks:

- `permissions`: the deny rule made in Chapter 7
- `hooks`: the change-log hook we are making now
- `statusLine`: the status line at the bottom of the screen

The detailed meanings are explained one by one right below the box.

```bash
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./비밀/**)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "date '+%F %T File changed' >> 변경기록.txt" }
        ]
      }
    ]
  },
  "statusLine": { "type": "command", "command": "echo Organizing Corner Cafe" }
}
EOF
```

In Windows PowerShell, open Notepad with `notepad .claude\settings.json`. Delete the original content and put in only what is between the line starting with `cat` and the `EOF` line in the box above. Save with `Ctrl + S` and close it. We did not test this method.

Let's explain the unfamiliar words one by one. The last field, `statusLine`, is covered in the "Status Line" section later.

- `PostToolUse`: Means **after** Claude uses a tool. It cannot undo what is already done. The point where you can step in and block **before** a tool is used is `PreToolUse`.[^post]
- `matcher`: Sets which tools it reacts to. `Write|Edit` are the tool that creates files and the tool that edits them. Here `|` means "or." This hook does not react to files Claude changes with shell commands.
- `command`: The command to run. It appends the current date, time, and a sentence to the end of `변경기록.txt`. Broken into pieces, the command looks like this:
  - `date`: A command that prints the current date and time.
  - `'+%F %T File changed'`: The format to print. The date (`2026-11-06`) goes in place of `%F`, and the time (`11:19:11`) in place of `%T`.
  - `>> 변경기록.txt`: Appends the result to the end of that file. The `>` from Chapter 10 overwrites a file, while `>>` adds to the end. If the file does not exist, it creates a new one.

Instead of overwriting, you can also ask Claude in words.[^ask-claude] For a file that already has settings in it, like your own project's, this way is better. The `.claude` folder is specially protected, so a permission prompt may appear at this point.[^protected]

```text
Add a hook to .claude/settings.json. Make the command below run every time after Claude uses the Write or Edit tool. Do not delete what is already there.
date '+%F %T File changed' >> 변경기록.txt
```

If there is already a `hooks` field, do not replace it wholesale; add one more inside it.[^sibling] We did not run this hook on Windows. The `date` command is in bash form, so it may not run as is. In that case, ask Claude to change it to a command that fits your environment.

Now let's test it. Start `claude` and send this:

```text
Create 훅시험.md in the notes folder and write just one line: "hook test".
```

When it finishes, type `! cat 변경기록.txt`. When we actually ran it, one line was left like this:

```text
2026-11-06 11:19:11 File changed
```

You can see the full settings file at [11장-settings.json.txt](/practice/cli/results/11장-settings.json.txt).

<Quiz id="ch811-log" />

## Checking Your Hooks

To see whether a hook is registered, type `/hooks` in a session.[^hooks-menu] This screen is **view-only**. You cannot create or edit hooks here. The screen itself says so.

```text
  Hooks
  1 hook on 1 event

  This menu is read-only. To add or change a hook, edit settings.json or ask Claude. Learn more

    PostToolUse  after tool execution
  ❯ [Project] date '+%F %T File changed' >> 변경기록.txt   Write|Edit · command

    All events

  Enter to view · Esc to close
```

If a hook does not run, first ask yourself: Does it appear in `/hooks`? Is it under `PostToolUse`?[^hooks-menu] If it is still missing, check the syntax of the settings file. A settings file **cannot have trailing commas or comments.**[^json] Overwriting with the box above again is the fastest fix.

<Quiz id="ch811-check" />

## Hooks in a Folder Someone Gave You

If it is a practice folder you made yourself, the risk is low. What you need to watch out for is a folder you got from someone else.

A folder from someone else may contain hooks that person wrote.[^hook-share] If you run it with `claude -p`, those hooks run even in a folder you never said you trust.[^p-untrusted] So it is safer to assume those hooks run on your computer under your account. For a folder you received, read the settings file **before** starting Claude. This advice is this guide's own judgment, not a sentence from the official docs.

```bash
cat .claude/settings.json
```

Look at what commands are in the `hooks` and `statusLine` fields. If you do not understand them, ask in a chat outside that folder. The plugins from [Chapter 9](09-skills-extensions.md) can also run code with your permissions.[^plugin-run] Treat them with the same care.

<Quiz id="ch811-trust" />

## Status Line

The status line (Status line) is a line at the bottom of the Claude Code screen that shows the output of a shell script you set.[^status-what] Just add a `statusLine` field to the settings file.[^status-set] The settings you overwrote earlier already include the line below. There is nothing more to change.

```json
"statusLine": { "type": "command", "command": "echo Organizing Corner Cafe" }
```

When we actually ran it, this appeared below the input box:

```text
  Organizing Corner Cafe
```

Until you accept the folder trust dialog, the status line stays blank.[^status-trust] Because it is a feature that runs shell commands, it follows the same trust rules as hooks. The warning in the previous section applies here too.

You can also make one by writing the look you want in words after `/statusline`.[^status-nl] This guide did not try this feature.

<Quiz id="ch811-statusline" />

## Output Styles and Themes

You do not need to change these from the start. Pull them out when you need them. This guide did not try these two; this is what the official docs describe.

An **output style** (Output style) sets the role, tone, and format for every answer in a session. For example, `Concise` leads with the result and cuts down introductions and recaps.[^style-what]

```text
/output-style Concise
```

A **theme** is the colors. If the text on screen is hard to read, use `/theme` to pick colors that fit your terminal.[^theme]

<Quiz id="ch811-style" />

## Try It Yourself

1. Leave with `/exit` and paste the settings box in the terminal.
2. Start `claude` and check that `Organizing Corner Cafe` appears below the input box.
3. Type `/hooks`, check that the hook appears under `PostToolUse`, and close it with Esc.
4. Send the hook-test request, then use `! cat 변경기록.txt` to see whether a line was added.

Ask yourself: Did the hook really run? Answer by opening `변경기록.txt` yourself, not by trusting Claude's answer.

## Summary

- A hook is a command Claude Code runs at set points. Use it for things that must happen.
- `/hooks` is view-only. You create and edit hooks in the settings file.
- Do not use trailing commas or comments in the settings file's JSON.
- For a folder someone gave you, read `.claude/settings.json` before starting (this guide's judgment).
- Change the status line, output style, and theme only when you need to.

## Glossary

| Term | One-line meaning |
|---|---|
| Hook | A command that runs automatically at set points |
| `PostToolUse` | The point after a tool is used |
| `PreToolUse` | The point before a tool is used |
| JSON | A text format used in settings files |
| Status line | A line at the bottom of the screen showing your command's output |
| Output style | A bundle of role, tone, and format for answers |

<ChapterDone :chapter="811" />

Next chapter: [Chapter 12. Parallel Work and Remote](12-parallel-remote.md)

[^hook-what]: Claude Code official docs, "Automate actions with hooks". "Hooks are user-defined shell commands." / "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^every-time]: Claude Code official docs, "Output styles". "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (checked on 2026-11-06)
[^hook-add]: Claude Code official docs, "Automate actions with hooks". "To create a hook, add a `hooks` block to a settings file." https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^post]: Claude Code official docs, "Automate actions with hooks". "`PostToolUse` hooks can't undo actions since the tool has already executed." / "Before a tool call executes. Can block it" https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^ask-claude]: Claude Code official docs, "Automate actions with hooks". "You can also ask Claude to write the hook for you by describing what you want in the CLI." https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^protected]: The `.claude` folder is a protected path, so writes to it are not simply approved. In Manual mode a permission prompt appears, and in auto mode a separate AI that checks actions in advance makes the call. Claude Code official docs, "Choose a permission mode". "Writes to a small set of paths are never auto-approved" / the `auto` row of the table: "Routed to the classifier" https://code.claude.com/docs/en/permission-modes (checked on 2026-11-06)
[^sibling]: Claude Code official docs, "Automate actions with hooks". "If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^hooks-menu]: Claude Code official docs, "Automate actions with hooks". "Type `/hooks` at the Claude Code prompt to open the hooks browser." / "Run `/hooks` and confirm the hook appears under the correct event" https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^json]: Claude Code official docs, "Automate actions with hooks". "Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^hook-share]: Claude Code official docs, "Automate actions with hooks". The sharing column in the `.claude/settings.json` row: "Yes, can be committed to the repo" https://code.claude.com/docs/en/hooks-guide (checked on 2026-11-06)
[^p-untrusted]: Claude Code official docs, "Run Claude Code programmatically". "Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." https://code.claude.com/docs/en/headless (checked on 2026-11-06)
[^plugin-run]: Claude Code official docs, "Plugins overview". "Whatever the tier, a plugin you install can run code with your user privileges." https://code.claude.com/docs/en/plugins/overview (checked on 2026-11-06)
[^status-what]: Claude Code official docs, "Customize your status line". "The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." https://code.claude.com/docs/en/statusline (checked on 2026-11-06)
[^status-set]: Claude Code official docs, "Customize your status line". "Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." https://code.claude.com/docs/en/statusline (checked on 2026-11-06)
[^status-trust]: Claude Code official docs, "Customize your status line". "Until you accept the workspace trust dialog, the status line stays blank." / "Because `statusLine` executes a shell command" https://code.claude.com/docs/en/statusline (checked on 2026-11-06)
[^status-nl]: Claude Code official docs, "Customize your status line". "The `/statusline` command accepts natural language instructions describing what you want displayed." https://code.claude.com/docs/en/statusline (checked on 2026-11-06)
[^style-what]: Claude Code official docs, "Output styles". "An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." / "Responses lead with the result and leave out preamble, narration, and recaps" https://code.claude.com/docs/en/output-styles (checked on 2026-11-06)
[^theme]: Claude Code official docs, "Configure your terminal for Claude Code". "Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." https://code.claude.com/docs/en/terminal-config (checked on 2026-11-06)
