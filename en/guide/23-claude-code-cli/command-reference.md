# Command Reference

> **One-line summary**: This page gathers the commands used in this course in one place. If a command looks unfamiliar, look it up here. You do not need to memorize them.

How to read a command is in [Chapter 2](02-shell-basics.md). In short, the order is **name · option · target**. Options start with `-` or `--`.

First, check where you are typing. If the symbol right before the cursor is `%`, `$`, or `>`, you are in the terminal. If it is `❯`, you are in the Claude input box. If you see only `>`, `dquote>`, or `heredoc>` at the very start of the line, your input is not finished yet. Press `Ctrl + C` and paste again. Most tables in this reference are commands you type in the terminal. Only the last section is typed in the Claude input box.

## Symbols

| Symbol | Meaning | Example |
|---|---|---|
| `~` | Your home folder | `cd ~` |
| `.` | The current folder | `git add .` |
| `..` | The folder one level up | `cd ..` |
| `*` | Any number of characters (even none) | `inbox/meeting-*.txt` |
| `\|` | Passes the output of the command before it to the next command | `cat memo.txt \| claude -p "Summarize this"` |
| `>` | Saves the output to a file (overwrites) | `claude -p "Summarize this" > summary.txt` |
| `>>` | Adds the output to the end of a file | `echo second line >> memo.txt` |
| `<<'EOF'` | Passes everything up to the `EOF` line as input, as is | See below |
| `"…"` | Groups text into one piece even if it has spaces | `claude -p "two or more words"` |
| `;` | Runs the next command after the one before it | `pwd; ls` |
| `2>/dev/null` | Hides error text from the screen | `ls no-such-folder 2>/dev/null` |
| `$?` | The exit code of the command just before | `echo $?` |

`>` erases the file's contents and writes it anew. Do not use it on a file you must not erase. `<<'EOF'` is for Mac and Linux only. In Windows PowerShell, make the file with Notepad.

The shape below, used in several chapters, is a bundle that makes one file.

```bash
cat > memo.txt <<'EOF'
first line
second line
EOF
```

`cat > memo.txt` saves what it receives into `memo.txt`. `<<'EOF'` passes everything until a line with only `EOF` appears as the contents. So only the two middle lines go into the file. `EOF` is a mark that means "this is the end." Because it has quotes, text like `$HOME` is saved as is, without being changed.

## Folders and Files

This table is for Mac and Linux. PowerShell also accepts names like `ls`, `cd`, `cp`, `mv`, and `rm`, but the options are different. So do not use `ls -la` or `rm -rf` as is in PowerShell. PowerShell commands are gathered in a separate section below.

| Command | What it does |
|---|---|
| `pwd` | Show the current folder |
| `ls` | Show the list inside a folder |
| `ls -la` | Show details, including hidden files |
| `ls -a` | Show hidden files too |
| `cd folder` | Move to that folder |
| `mkdir folder` | Make a folder |
| `mkdir -p a/b/c` | Make the in-between folders too, all at once |
| `cp source target` | Copy a file |
| `mv source target` | Move a file |
| `cat file` | Show a file's contents |
| `rm file` | Delete a file |
| `rm -f file` | Delete without an error even if the file does not exist |
| `rm -rf folder` | Delete a folder along with everything inside |
| `echo text` | Print text |
| `sleep 30` | Wait 30 seconds |
| `source file` | Apply a file's settings to the current window |
| `bash file` | Run the commands written in a file, one after another |
| `fg` | Go back to a program you paused with `Ctrl + Z` |

The `-p` in `mkdir -p` is short for parents. It does not give an error even if the folder already exists.

`rm` does not go through the trash. `-r` means everything inside the folder, and `-f` means delete without asking. `rm -rf` cannot be undone. When you type it, be sure to read the folder name again.

## Commands Used for Installing

| Command | What it does |
|---|---|
| `curl address` | Download the contents of a web address |
| `curl -fsSL address \| bash` | Download an install file and run it right away |
| `irm address \| iex` | Download and run it right away in PowerShell |

`-fsSL` is four options written together.

- `-f`: If the server returns an error, it does not pass on the error page.
- `-s`: Hides the progress display.
- `-S`: Still shows errors even when `-s` is used.
- `-L`: Follows the address if it has moved.

`irm` downloads the file, and `iex` runs its contents.[^irm] Both lines in the table above **run what they download as is**. So use them only with addresses you can trust.

## Windows PowerShell Commands

| Command | What it does |
|---|---|
| `$HOME` | Your home folder |
| `ls -Force` | Show hidden files too |
| `mkdir folder -Force` | Move on without an error even if the folder already exists |
| `Get-Content -Encoding UTF8 file` | Show a file without garbling Korean text |
| `Copy-Item source target` | Copy a file |
| `Move-Item source target` | Move a file |
| `Remove-Item file` | Delete a file |
| `Write-Output text` | Print text |
| `notepad file` | Open a file in Notepad |
| `foreach (…) { … }` | Run what is inside `{ }` for each item in a list |
| `if ($LASTEXITCODE -eq 0) { … } else { … }` | Run the first part on success, the second on failure |

`$LASTEXITCODE` is the exit code of the program that just finished. `-eq 0` means "if it equals 0." 0 means success.

## claude Commands

You type these in the terminal. The first word is `claude`.

| Command | What it does |
|---|---|
| `claude` | Start a conversation |
| `claude --version` | Show the version |
| `claude --permission-mode manual` | Start in manual mode |
| `claude -c` | Continue the most recent conversation in this folder |
| `claude -r` | Pick a past conversation and open it |
| `claude --resume name` | Open a named conversation right away |
| `claude --safe-mode` | Start with your settings turned off |
| `claude purge` | Delete the saved records and state for this folder (do not practice with it) |
| `claude -p "request"` | Ask once and finish |
| `claude --worktree name` | Start in a separate work folder |
| `claude doctor` | Check the install status |
| `claude update` | Update to the latest version |
| `claude mcp add --transport http name address` | Add a remote MCP server |
| `claude mcp list` | List MCP servers and their connection status |
| `claude mcp remove name` | Remove an MCP server |

`-r` is the short name for `--resume`. `claude purge` is hard to undo. Do not run it for practice.

These are options you use with `-p`.

| Command | Meaning |
|---|---|
| `claude -p "request" --allowedTools "Read,Write"` | Sets the tools it may use without asking |
| `claude -p "request" --max-turns 10` | The upper limit on how many times it keeps working |
| `claude -p "request" --output-format json` | Prints the answer in JSON format |

In `--allowedTools`, `Read` means reading files and `Write` means writing files. `--transport http` means a remote server that connects over HTTP.

## git Commands

| Command | What it does |
|---|---|
| `git --version` | Check whether Git is installed |
| `git init` | Start keeping records for this folder |
| `git config user.name "name"` | Set the name written in records |
| `git config user.email "email"` | Set the email written in records |
| `git config core.quotePath false` | Show Korean file names as they are |
| `git add .` | Put changes in the current folder into the next record |
| `git status --short` | Show the change status briefly |
| `git commit -m "description"` | Save a record with a description |
| `git reset` | Cancel what you put into the next record |
| `git log --oneline` | Show records one line each |

`-m` is short for message. `--short` means show the list briefly.

## Claude Input Box Commands

Type these in the input box after you start `claude`. Only the common ones are gathered here. To see the full list, type `/` in the input box.

| Command | What it does |
|---|---|
| `/help` | Help |
| `/exit` | Quit |
| `/rename name` | Name the session |
| `/resume` | Open a past conversation |
| `/context` | See what is taking up the context |
| `/compact` | Shorten the conversation by summarizing it |
| `/clear` | Start fresh with an empty conversation |
| `/rewind` | Open the rewind menu |
| `/permissions` | See permission rules |
| `/usage` | See usage |
| `/model` | Pick a model |

Shortcuts are in [Chapter 5](05-input-commands.md).

[^irm]: Claude Code official docs, "Terminal guide for new users". "`irm` fetches the file and `iex` runs it." https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
