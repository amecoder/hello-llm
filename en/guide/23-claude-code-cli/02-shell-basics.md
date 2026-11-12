# Chapter 2. Terminal Basics

<Badge type="tip" text="Required" /> Read this to follow this stage.

> **One-line summary**: You only need a few commands in the terminal. Use `pwd` to see where you are, `ls` to see what is there, and `cd` to move around. At the end of this chapter, you will make a practice folder and put notes in it.

This chapter is about using the terminal itself, not Claude Code. Mac and Linux use the same commands. Where Windows PowerShell differs, it is written side by side. These Windows commands were not actually run.

You do not need to memorize anything. Keep this page open next to you and follow along. After using them two or three times, your hands will remember.

## Reading the Prompt

When you open the terminal, you see a few characters at the very start and a blinking cursor. This is called the **prompt**. It is a sign that says "I'm waiting for a command." Text you write to an AI is also called a prompt, but here it means the terminal's waiting sign.

It looks different on every computer. Below is an example for a person named Seoyeon.

```text
seoyeon@macbook ~ %
seoyeon@laptop:~$
PS C:\Users\seoyeon>
```

The first line is a common look on a Mac, the second on Linux, and the third in Windows PowerShell. Reading it is simple. It shows the user name and computer name, then the folder you are in now, and at the very end a symbol such as `%`, `$`, or `>`.

**You do not type this ending symbol.** Type your command after the symbol and press Enter to run it. When the prompt appears again after the result, it is ready for the next command.

Type commands with your keyboard set to English. If `pwd` comes out in another alphabet, switch your keyboard input to English and type it again. On a Mac, you usually switch with `Caps Lock` or `Ctrl + Space`.

Some commands show nothing at all. That is not an error. In many cases, it means they succeeded quietly.

<Quiz id="ch802-prompt" />

## Where Am I and What Is Here — pwd and ls

The terminal is always **inside one folder**. It is like having one folder open in File Explorer or Finder.

`pwd` tells you the folder you are in now. It is short for "print working directory."

```bash
pwd
```

On a Mac, it looks something like this. The name depends on your computer.

```text
/Users/seoyeon
```

`ls` shows what is in the current folder. It is short for "list."

```bash
ls
```

You can use both commands by the same names in PowerShell too. The output just looks a little different.

These two commands do not change anything. Whenever you feel lost, try typing them.

<Quiz id="ch802-where" />

## Paths and ~

A **path** is the address of a file or folder. Mac and Linux separate folders with `/`, and Windows uses `\`. On a Korean keyboard and screen, `\` may appear as `₩`. It is the same character.

| Operating system | Example path of your home folder |
|---|---|
| Mac | `/Users/seoyeon` |
| Linux | `/home/seoyeon` |
| Windows | `C:\Users\seoyeon` |

The **home folder** is the starting folder of your account. When you open the terminal, you usually start here. The symbol that shortens this address is `~` (tilde). So `~/hello-ai-practice` means "the hello-ai-practice folder inside your home folder."[^win-home]

There are two ways to write a path.

- **Full address**: Like `~/hello-ai-practice/terminal`, it points to the same place no matter where you type it.
- **Based on where you are now**: If you write `inbox`, it means "the inbox inside the current folder."

`..` means the folder one level up. `.` is the current folder.

If a name has a space in it, wrap it in quotes, like `"my notes"`. That is because the terminal reads a space as "the next word starts here." This is also why the folder names in this course have no spaces.

<Quiz id="ch802-path" />

## How to Read a Command

A command is made of a few words. The words are separated by spaces. Even a command you have never seen makes sense if you break it apart and read it in order.

```bash
ls -la ~
```

This example is a Mac and Linux command. In Windows PowerShell, you write `ls -Force ~`.

| Piece | Name | Meaning |
|---|---|---|
| `ls` | Command name | What to do: show a list |
| `-la` | Option | How to do it: in detail, including hidden files |
| `~` | Target | Where to do it: the home folder |

An option is a switch that changes how a command behaves. On Mac and Linux, options come in two shapes.

- **Short options**: One `-` and one letter. You can combine `-l` and `-a` and write `-la`.
- **Long options**: Two `--` and a word. Like `--version`, the meaning is easy to see.

PowerShell puts a word after a single `-`, like `-Force`. Even options with the same meaning may have different names. That is why `ls -la ~` above is written as `ls -Force ~` in PowerShell. The options for `claude` and `git` are the same on every operating system.

Sometimes a value follows an option. For example, `--max-turns 10` means "the limit on the number of turns is 10." You do not need to memorize this option now.

Anything wrapped in quotes is one chunk. In `claude -p "Summarize the notes"`, the part inside the quotes counts as one word even though it has spaces.

You do not need to memorize every command. The commands in this course are collected in the [Command Reference](command-reference.md). If you see an unfamiliar piece, look it up.

<Quiz id="ch802-anatomy" />

## Moving Around, Making, and Copying — cd, mkdir, cp

`cd` moves you to another folder. It is short for "change directory." You will make the practice folder below at the end of this chapter. For now, just read along.

```bash
cd ~/hello-ai-practice
cd ..
cd ~
```

From the top, these go to the practice folder, go one level up, and go to the home folder. They work the same in PowerShell.

`mkdir` makes a new folder. It is short for "make directory." On Mac and Linux, writing `mkdir -p` also makes any folders in between in one go. In PowerShell, `mkdir` does that even without `-p`. You will type the actual command in the hands-on part at the end of this chapter.

`cp` copies a file. It is short for "copy." You write it in the order **what, then where**.

Here is a weak example. It is missing where to copy to.

```bash
cp memo.txt
```

Here is a better example. It has both what and where.

```bash
cp memo.txt inbox/
```

Because it is a copy, the original file stays where it is. But if a file with the same name already exists, it may be overwritten without warning. Take a look with `ls` before you copy.

<Quiz id="ch802-move" />

## Keys That Make It Easier

You do not have to memorize and type every command in full. Knowing just the five things below makes it much easier.

**Paste and copy.** In the terminal, the keys are a little different from usual. To copy, drag over the text in the terminal with your mouse to select it, then press the keys.

| Task | Mac | Linux | Windows PowerShell |
|---|---|---|---|
| Paste | `Cmd + V` | `Ctrl + Shift + V`[^paste] | `Ctrl + V`, right-click[^paste-win] |
| Copy | `Cmd + C` | `Ctrl + Shift + C` | Select, then `Ctrl + C`, right-click |

This may vary a little by program. You can copy the commands on this page and paste them. It cuts down on typos. If the command has not run after you paste it, press Enter once more.

Try it now. Copy the `pwd` above, paste it into the terminal, and press Enter.

**Up arrow.** The command you just typed comes back. Press it several times to go to older commands. It is handy when you want to change a command a little and run it again. Press it and see whether the `pwd` you just typed comes back.

**Tab.** Type only the first part of a name and press Tab, and it fills in the rest. Type up to `cd ~/Doc` and press Tab. If you have no `Documents` folder, try another folder name you see in `ls`. This is especially useful for long Korean file names. If it does not fill in well with Korean, just copy the name and paste it.

**Ctrl+C.** This stops a running command. If the terminal seems stuck, press this first. The command below waits 30 seconds. It works on Mac, Linux, and PowerShell.

```bash
sleep 30
```

Do not wait. Press `Ctrl + C`. The prompt comes back right away. Even on a Mac, it is `Ctrl`, not `Cmd`. When no text is selected, Ctrl+C means "stop." On Windows, it copies only when text is selected.

<Quiz id="ch802-keys" />

## Try It Yourself

Make a practice folder and put notes in it. You will use this folder throughout this course.

**1. Make the practice folder and go into it.**

On Mac and Linux, type this.

```bash
mkdir -p ~/hello-ai-practice/terminal/inbox
cd ~/hello-ai-practice/terminal
pwd
ls
```

In Windows PowerShell, type this.

```powershell
mkdir $HOME\hello-ai-practice\terminal\inbox
cd $HOME\hello-ai-practice\terminal
pwd
ls
```

In the Mac and Linux command, `-p` is an option that makes the folders in between in one go. Without this option, you get an error if the `hello-ai-practice` folder does not exist. `$HOME` is the name PowerShell uses for your home folder. If the `pwd` result ends with `terminal` and you see `inbox` in `ls`, it worked.

**2. Download the practice notes.**

In your browser, right-click the link below and choose "Save Link As" (다른 이름으로 링크 저장). The name differs a little by browser. Leave the save location as your Downloads folder.

- [meeting-2026-10-27-weekly.txt](/practice/en/notes/inbox/meeting-2026-10-27-weekly.txt)

These are all made-up notes. The dates and days of the week were also made up for the story, so they do not match the real calendar. In later chapters, Claude may point this out. It is not wrong, so there is no need to be surprised.

**3. Copy the notes into inbox.**

On Mac and Linux, type this.

```bash
cp ~/Downloads/meeting-2026-10-27-weekly.txt inbox/
```

In Windows PowerShell, type this.

```powershell
cp $HOME\Downloads\meeting-2026-10-27-weekly.txt inbox\
```

On a Mac, even if Finder shows "Downloads" (다운로드), the actual folder name is `Downloads`. If you use Linux in Korean, it may be `~/다운로드`. In that case, type `~/다운로드` instead of `~/Downloads`.

**4. Check that it went in.**

```bash
ls inbox
cat inbox/meeting-2026-10-27-weekly.txt
```

`cat` shows the contents of a file on the screen. If Korean text looks garbled in PowerShell, type this.

```powershell
Get-Content -Encoding UTF8 inbox\meeting-2026-10-27-weekly.txt
```

Ask yourself: Is the `pwd` result the folder I expected? Do I see the notes file in `ls inbox`? If both are yes, you are ready for the next chapter.

**If you get stuck**: If you see `No such file or directory` or a message saying it "cannot be found," the location or the name is usually different. Check your location with `pwd`, and check that the file really exists with `ls ~/Downloads`.

## Summary

- The prompt is a sign that says "I'm waiting for a command." Do not type the ending symbol.
- `pwd` shows where you are now, and `ls` shows a list. They change nothing, so use them often.
- `~` is your home folder, and `..` is one level up.
- `cd` moves you, `mkdir` makes a folder, and `cp` copies "what, then where."
- The up arrow brings back past commands, Tab fills in names, and Ctrl+C stops.

## Glossary

| Term | One-line meaning |
|---|---|
| Prompt | A sign that the terminal is waiting for a command |
| Path | The address of a file or folder |
| Home | The starting folder of your account (shortened to `~`) |
| `pwd` | A command that shows the folder you are in now |
| `ls` | A command that shows the list of items in a folder |
| `cd` | A command that moves you to another folder |
| `mkdir` | A command that makes a new folder |
| `cp` | A command that copies a file |
| `cat` | A command that shows a file's contents on the screen |

<ChapterDone :chapter="802" />

Next chapter: [Chapter 3. Installing and Logging In](03-install-login.md)

[^paste]: Claude Code official docs, "Terminal guide for new users." "Copy this line, paste it into your terminal (`Cmd + V` on macOS, `Ctrl + Shift + V` on Linux), and press `Enter`:" https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^paste-win]: Claude Code official docs, "Terminal guide for new users." "Copy this line, paste it into PowerShell with `Ctrl + V` or right-click, and press `Enter`:" https://code.claude.com/docs/en/terminal-guide (checked on 2026-11-06)
[^win-home]: The `~/.claude` that appears in later chapters is `C:\Users\name\.claude` on Windows. Claude Code official docs, "Settings files and precedence." "On Windows, `~/.claude` means `%USERPROFILE%\.claude`." https://code.claude.com/docs/en/settings (checked on 2026-11-06)
