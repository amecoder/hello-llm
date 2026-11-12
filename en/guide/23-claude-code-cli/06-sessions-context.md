# Chapter 6. Sessions and Context

<Badge type="tip" text="Required" /> Read this to follow this stage.

> **One-line summary**: Conversations are saved per folder, so you can reopen them anytime. When a conversation gets long, shrink it with `/compact`. When you move on to something else, clear it with `/clear`.

Sometimes you want to continue today what you were doing yesterday. Sometimes a conversation gets so long that the answers get fuzzy. This chapter covers both.[^run]

## What Is a Session?

A **session** is a conversation saved and tied to a project folder.[^session-names] One bundle of conversation you have after starting `claude` is one session.

The key words here are "tied to a folder." The default list shows only the conversations from that folder. So for every command in this chapter, you first move to the practice folder in the terminal.

```bash
cd ~/hello-ai-practice/terminal
```

When you start a fresh `claude`, Claude doesn't know your past conversations. That's because a new session starts without the earlier conversation.[^fresh] To pick up yesterday's discussion, you have to open the past session yourself.

<Quiz id="ch806-session" />

## Naming and Reopening

For work that takes several days, give it a name.[^rename-tip] A name makes it easy to find later. Inside the session, type this.

```text
❯ /rename weekly-meeting-notes
  ⎿  Session renamed to: weekly-meeting-notes
```

It's fine if you don't name it. Claude Code summarizes your first request and makes a title for you.[^session-names]

There are three ways to reopen. For all of them, leave with `/exit` and type in the terminal.

| Command | When to use it |
|---|---|
| `claude -c` | The most recent conversation in this folder[^continue-resume] |
| `claude -r` | Pick from a list[^continue-resume] |
| `claude -r weekly-meeting-notes` | Open directly by name[^continue-resume] |

For a conversation you just finished, `claude -c` is fastest. If you type it in a folder with no conversation to continue, it tells you `No conversation found to continue` and exits.[^no-conversation] If you see this text, check the folder first. `pwd` tells you which folder you're in now.

For a conversation from a few days ago, open the list with `claude -r`. It looks like this.

```text
  Resume session
  ╭──────────────────────────────────────────────────────────────────────────────────────────────╮
  │ ⌕ Search…                                                                                    │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────╯
    터미널

  ❯ weekly-meeting-notes
    4 seconds ago · HEAD · 320.7KB

    Ctrl+A to show all projects · Ctrl+B to only show current branch · Space to preview · Ctrl+R
    to rename · Type to search · Esc to cancel
```

Choose with the up and down arrows and press Enter to open it. There are only two places to look.

- **The `❯` line**: The name of the conversation you picked.
- **The line below it**: When the conversation was written (`4 seconds ago`) and its size (`320.7KB`). You can ignore the `HEAD` in the middle.

The bottom two lines are a guide to the keys you can use. Typing letters searches, Space previews, Ctrl+R renames, and Esc cancels. You don't need the other keys for now.

If you're already inside `claude`, type `/resume`. The same list opens.[^session-names] When you reopen it, new messages keep piling up in the same session.[^same-session]

<Quiz id="ch806-resume" />

## What Is the Context Window?

The **context window** is everything Claude is holding at this very moment. Think of it as the materials spread out on a desk.

It's not only your messages on the desk. The conversation history, the contents of files Claude read, and the results of commands it ran are there too. A file where rules are written down, notes saved automatically, loaded skills, and basic instructions are also included.[^window] In order, these four are called `CLAUDE.md`, auto memory, skills, and system instructions. You'll learn `CLAUDE.md` and auto memory in Chapter 8, and skills in Chapter 9. For now, just know the names.

This space is counted in **tokens**. A token is the unit an AI uses to split text into small pieces and count it. One word can be one piece, or it can split into several pieces (the same pieces you saw in [Stage 1, Chapter 1](../00-common/01-what-is-llm.md)). If you have Claude read one long file, that many tokens take up space on the desk.

As the conversation gets longer, the space fills up. Then Claude Code compresses the conversation automatically. But instructions you gave early in the conversation can get lost.[^works-context] If you said "write it as a table" once at the start and at some point the tables disappeared, this may be what happened.

So don't leave long-lasting rules as words in the conversation. Write them in `CLAUDE.md` (a file where you write the rules to follow in a project).[^works-context] How to make one is covered in [Chapter 8](08-memory-settings.md).

<Quiz id="ch806-window" />

## Three Commands for Handling Context

You don't need to worry about this from the start. When the answers seem to get fuzzy, just remember these three.

**`/context` — See how full it is.** It shows how full the context is as a colored grid.[^context-grid] Usage by category and suggestions for improvement appear too.[^context-doc] The result appears as text inside the conversation. You don't need to close it. Just keep typing.

**`/compact` — Summarize to shrink it.** It summarizes the conversation so far to free up space.[^compact-cmd] You can write after it what to keep.[^context-doc] If you write it, there's less chance that something you need gets left out of the summary.

```text
Weaker example: /compact
Better example: /compact Keep only what we decided about the meeting notes format
```

If you type it when there's almost no conversation, it tells you there's nothing to shrink.

```text
❯ /compact
  ⎿  Not enough messages to compact.
```

If you type it after the conversation has built up, it shrinks it and then tells you `Compacted (ctrl+o to see full summary)`.

**`/clear` — Clear it and start fresh.** It starts a new conversation with an empty context. The previous conversation is saved, so you can go back to it with `/resume`.[^compact-cmd] Use it when you move on to unrelated work. That way the old conversation doesn't take up space needed for the next files.[^context-doc]

If you're unsure which of the two to use, ask yourself this.

- Am I continuing the same work? Then `/compact`.
- Am I moving on to other work? Then `/clear`.

::: details More details (click to expand)
If you use `/clear`, you may end up with two sessions with the same name. In that case, `claude -r name` shows a list of sessions with that name. Pick one by looking at the time and size.
:::

There's one more tip. If the answer keeps missing the mark after you've corrected it twice, don't correct it a third time. It's better to `/clear` and start again with a better-written request.[^two-corrections] That way the failed attempts aren't piled up in the conversation.

If the conversation gets too long, text like this may appear.

```text
Context limit reached · /compact or /clear to continue
```

No need to panic.[^context-limit] Just type one of the two, as the text says.

<Quiz id="ch806-manage" />

## Conversation History Stays on Your Computer

You can reopen sessions because the history is saved on your computer. Conversation history is saved as plaintext in the `~/.claude/projects/` folder. Plaintext means text with no password protection that anyone can read. The default retention period is 30 days.[^local-history]

It's not only what you typed that's kept there. Content that passed through tools is kept too: file contents, command output, and pasted text.[^transcript]

So build these habits.

- Don't have Claude read files that contain passwords or login credentials. The moment it reads them, they may also be kept in the history.
- If you share the computer with others, remember that this folder exists.

You'll try a way to block reading entirely in [Chapter 7](07-permissions-undo.md).

::: details More details (click to expand)
- There's also a `claude purge` command that deletes the history for one project.[^purge] It's hard to undo, so don't run it just for practice. This guide didn't run it either.
- The retention period on the server side is covered in [Chapter 13](13-cost-safety-trouble.md).
:::

<Quiz id="ch806-history" />

## Try It Yourself

Try this in the practice folder `~/hello-ai-practice/terminal`.

1. Start `claude` and ask this.

   ```text
   @inbox/meeting-2026-10-27-weekly.txt Tell me in two lines what was decided in this memo.
   ```

2. Name it with `/rename weekly-meeting-notes` and leave with `/exit`.
3. In the terminal, reopen it with `claude -c` and ask, "What did I just ask you?" If it remembers the earlier conversation, it continued properly.
4. After leaving with `/exit`, type `claude -r` in the terminal. Find `weekly-meeting-notes` in the list and open it with Enter.
5. Type `/context` to see what's using the space.
6. Type `/compact Keep only what was decided`. It's fine if text appears saying there's nothing to shrink because the conversation is short.
7. Clear it with `/clear` and ask again, "What did I just ask you?" If it says it doesn't know, the context has been cleared. Try finding the earlier session again with `/resume`.

Ask yourself: Could I find yesterday's conversation and continue it? Can I say when to use `/compact` and when to use `/clear`?

## Summary

- A session is a conversation saved and tied to a folder. When you start fresh, Claude doesn't know past conversations.
- Name it with `/rename`, and reopen it with `claude -c` or `claude -r`.
- The context window holds not only the conversation but also file contents and command output.
- After automatic compression, early instructions can get lost. Write long-lasting rules in `CLAUDE.md`.
- To continue the same work, `/compact`. To move on to other work, `/clear`.
- Conversation history stays on your computer as plaintext. The default is 30 days.

## Glossary

| Term | One-line meaning |
|---|---|
| Session | A conversation saved and tied to a folder |
| Context window | Everything Claude is holding right now |
| Token | The unit an AI uses to count text |
| Compact | Summarizing the conversation to free up space |
| Plaintext | Text with no password protection |

<ChapterDone :chapter="806" />

Next chapter: [Chapter 7. Permissions and Undo](07-permissions-undo.md)

[^run]: The screens in this chapter are the results of running Claude Code 2.1.318 on Linux on November 6, 2026.
[^session-names]: Claude Code official docs, "Manage sessions". "A session is a saved conversation tied to a project directory." / "if you don't name a session, Claude Code generates a session title for it." / "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." https://code.claude.com/docs/en/sessions (checked on 2026-11-06)
[^fresh]: Claude Code official docs, "How Claude Code works". "Each new session starts with a fresh context window, without the conversation history from previous sessions." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^rename-tip]: Claude Code official docs, "Best practices for Claude Code". "for work that spans several days, `/rename oauth-migration` in the session names it" https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^continue-resume]: Claude Code official docs, "CLI reference". "Load the most recent conversation in the current directory" / "Resume a specific session by ID or name, or show an interactive picker to choose a session." https://code.claude.com/docs/en/cli-reference (checked on 2026-11-06)
[^no-conversation]: Claude Code official docs, "Common workflows". "it prints `No conversation found to continue` and exits." https://code.claude.com/docs/en/common-workflows (checked on 2026-11-06)
[^same-session]: Claude Code official docs, "How Claude Code works". "Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^window]: Claude Code official docs, "How Claude Code works". "Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^works-context]: Claude Code official docs, "How Claude Code works". "Claude compacts automatically, but instructions from early in the conversation can get lost." / "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." https://code.claude.com/docs/en/how-claude-code-works (checked on 2026-11-06)
[^context-grid]: Claude Code official docs, "Commands". "Visualize current context usage as a colored grid." https://code.claude.com/docs/en/commands (checked on 2026-11-06)
[^context-doc]: Claude Code official docs, "Explore the context window". "run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." / "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." / "Old conversation crowds out the files you need next and costs tokens on every message." https://code.claude.com/docs/en/context-window (checked on 2026-11-06)
[^compact-cmd]: Claude Code official docs, "Commands". "Free up context by summarizing the conversation so far." / "Start a new conversation with empty context." / "Resume the previous conversation with `/resume`" https://code.claude.com/docs/en/commands (checked on 2026-11-06)
[^two-corrections]: Claude Code official docs, "Best practices for Claude Code". "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^context-limit]: Claude Code official docs, "Error reference". "Context limit reached · /compact or /clear to continue" https://code.claude.com/docs/en/errors (checked on 2026-11-06)
[^local-history]: Claude Code official docs, "Data usage". "Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." https://code.claude.com/docs/en/data-usage (checked on 2026-11-06)
[^transcript]: Claude Code official docs, "Explore the .claude directory". "Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." https://code.claude.com/docs/en/claude-directory (checked on 2026-11-06)
[^purge]: Claude Code official docs, "Explore the .claude directory". "Run `claude purge` to delete the state Claude Code holds for one project." https://code.claude.com/docs/en/claude-directory (checked on 2026-11-06)
