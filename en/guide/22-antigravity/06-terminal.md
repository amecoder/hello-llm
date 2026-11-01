# Chapter 6. Using It in the Terminal — `agy -p` and Silent Denials

> **One-line summary**: `agy` is Antigravity's terminal program, and `agy -p "task"` runs once and exits.
> With `-p`, actions that need permission are **silently denied**. Yet the **exit code is still 0 (success)**, so it is easy to mistake an empty result for success.

This chapter is based on the Antigravity official docs checked on November 1, 2026, and results from running `agy` 1.4.12 on macOS. For this guide's hands-on practice, `agy` was called from inside another AI tool. The official FAQ does not support this kind of use on individual plans ([Chapter 7](07-safety-choose.md)), so when you follow along, run **`agy` directly in your terminal**. **If you are new to the terminal, you can skip this chapter.** What a terminal is was covered in [Claude Code Chapter 10](../20-claude-code/10-terminal.md).

## Installing and Getting Started

Here is the install command for macOS and Linux.[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

This command downloads an installer from the internet and runs it right away. **Check that it matches the official docs (antigravity.google/docs) word for word before you run it.** The command for Windows is also in the official docs.

Move into the organizer folder and type `agy` to open the chat screen.[^tui] If you already signed in on the app, it signs you in right away without opening a browser.[^keyring] On your first run, it asks **whether you trust this folder** (Workspace trust).[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## Execution Modes

In interactive `agy`, press Shift+Tab to switch execution modes.[^cycle]

| Mode | File edits | Running commands |
|---|---|---|
| `default` | Shows changes and asks | Ask |
| `accept-edits` | Automatic inside the working folder | Ask |

Source: Antigravity official docs (excerpted)[^modes]

Default permissions in the terminal are more cautious than in the app. It asks before writing files, running commands, or using web tools, and the fence that contains commands is off by default ([Chapter 4](04-permissions-undo.md)).

<Quiz id="ch606-modes" />

## `agy -p` — Ask Once and Exit

`-p` sends a single request, gets the answer, and exits. Because there is no prompt window, actions that need permission are handled according to preset rules.[^headless] The answer goes to standard output (stdout), while progress and errors go to the side channel (stderr).[^stdout]

The official docs explain that reading and writing files inside the working folder are allowed automatically, while shell commands default to "Ask" and are **silently denied** (soft-deny).[^policy] A silent denial does not stop the run; it finishes with **exit code 0** and only reports what was blocked to stderr.[^soft]

<Quiz id="ch606-headless" />

## Four Pitfalls We Ran Into

Here is what actually happened while running `agy -p` several times in the organizer folder.

1. **Empty result, yet success.** When the agent tried to run a shell command (`ls`) to see the folder list and got denied, **it finished without creating anything.** The exit code was 0. This happened three times. Always check whether the output file was actually created.
2. **Reading and writing also denied in an untrusted folder.** The official docs say files inside the working folder are allowed automatically, but in this guide's practice folder, both writing and reading were denied. The likely cause is that this folder had not yet been registered as a "trusted folder" (our estimate). Opening interactive `agy` once and answering that you trust the folder registers it.[^trusted]
3. **The fix: one mode flag + one sentence.** Adding `--mode accept-edits` and putting "Do not use shell commands; only read and write files" at the end of the request made every run succeed. We did not use `--dangerously-skip-permissions`, which approves everything. The official docs also recommend narrowly scoped allow rules.[^skip]
4. **A file missing from the answer.** In read-only mode, we asked for a table of the files in the notes folder. There were 3 organized files (weekly meeting notes, ad-hoc meeting notes, weekly retrospective), but **the ad-hoc meeting notes were missing** from the table and the empty file `.gitkeep` was listed instead. Count the items yourself to verify the scope.

Here is the actual command we ran.

```bash
cd ~/hello-ai-연습/정리도구
agy -p "Show the list of files in the notes folder, and tell me in one line each which template (from templates) each file uses. Do not modify any files. Keep the answer short, as a table only. Do not use shell commands; only read files." --mode accept-edits
```

Result: [agy -p output](/practice/notes/results/antigravity/6장-agy-p-출력.txt) (paths on our computer replaced with `~`)

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| One-shot run | `claude -p` | `codex exec` | `agy -p` |
| Default file writes | Needs permission | Read-only | Automatic in working folder (per docs) |
| When blocked | Denies | Stops | Silently denies, exit code 0 |

Source: Summary from this guide (each tool's terminal chapter and hands-on runs)

<Quiz id="ch606-pitfalls" />

## Resuming and Checking Usage

Chat history in the terminal is kept **separately for each folder where you ran `agy`**.[^per-folder] Use `agy -c` to immediately continue the last conversation in that folder, or `/resume` to pick one from a list.[^resume] `/rewind` (or `/undo`) rolls the conversation back to an earlier message ([Chapter 4](04-permissions-undo.md)). The official docs do not say whether files are also rolled back, so rely on your Git history for files.

Check your usage with `/usage`.[^usage]

<Quiz id="ch606-resume" />

## Try It Yourself

1. Check that the install command above matches the official docs, then install it (or run `agy --version` if you already have it).
2. Open interactive `agy` once in the organizer folder and confirm that you trust the folder when asked.
3. Run the read-only `agy -p` command above and count whether the number of files in the table matches the notes folder.
4. If the result is empty, read the denial notice in stderr to see what was blocked.

**Up next**: In Chapter 7, we cover cost, data, and safety, and decide how to use the three tools together.

## Summary

- `agy` is interactive; `agy -p` runs once and exits. Chat history is kept per folder.
- In `-p`, actions that need permission are silently denied with exit code 0. Always check the output files yourself.
- File actions can also be blocked in an untrusted folder. Register the folder as trusted or use `--mode accept-edits`.
- Adding the sentence "Do not use shell commands" reduced stops caused by denials. Count the scope of the answer yourself.

## Glossary

| Term | One-line meaning |
|---|---|
| Headless | Running once without an interactive chat screen |
| Soft-deny | Silently denying just that action without stopping the run |
| Workspace trust | The step where you register that you trust this folder |
| Exit code | The success or failure number a program leaves when it finishes |

<ChapterDone :chapter="606" />

Next chapter: [Chapter 7. Cost, Data, Safety, and Choosing Among the Three Tools](07-safety-choose.md)

[^install]: Antigravity official docs, "Get started". "curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^tui]: Antigravity official docs, "Get started". "| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^keyring]: Antigravity official docs, "Authenticate". "If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install (checked on 2026-11-01)
[^trust]: Antigravity official docs, "Get started". "**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started (checked on 2026-11-01)
[^cycle]: Antigravity official docs, "Choose an execution mode". "Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes (checked on 2026-11-01)
[^modes]: Antigravity official docs, "Choose an execution mode". "| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes (checked on 2026-11-01)
[^headless]: Antigravity official docs, "Headless mode". "Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless (checked on 2026-11-01)
[^stdout]: Antigravity official docs, "Headless mode". "Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless (checked on 2026-11-01)
[^policy]: Antigravity official docs, "Headless mode". "Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless (checked on 2026-11-01)
[^soft]: Antigravity official docs, "Headless mode". "A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless (checked on 2026-11-01)
[^skip]: Antigravity official docs, "Headless mode". "**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless (checked on 2026-11-01)
[^per-folder]: Antigravity official docs, "Managing conversations". "When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations (checked on 2026-11-01)
[^resume]: Antigravity official docs, "Managing conversations". "Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations (checked on 2026-11-01)
[^usage]: Antigravity official docs, "Model quotas (/usage)". "Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage (checked on 2026-11-01)
[^trusted]: Antigravity official docs, "CLI commands". "| **`trustedWorkspaces`** | string\[\] | `[]` | Folders you chose to trust when the CLI asked. The CLI adds entries for you. |" https://antigravity.google/docs/cli/reference (checked on 2026-11-01)
