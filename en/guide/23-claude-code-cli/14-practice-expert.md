# Chapter 14. Practice Exercises and Using It Like a Pro

<Badge type="tip" text="Required" /> Be sure to read this to follow this step.

> **One-line summary**: These are 8 exercises where you **redo, with your own hands, once each** what you have learned so far. The last exercise is making a weekly review from **your own notes**.

This chapter is current as of November 6, 2026. The results of the exercises differ a little every time you run them.

A pro is not someone who uses lots of features. A pro starts small, gives a way to check the result, and adds rules only when needed.

## How to Do the Practice Exercises

1. **Make a new practice folder.** For example: `~/hello-ai-연습/다시`. Put only the weekly meeting memo in `inbox`. You will add the ad-hoc meeting memo in Exercise 7.
2. **Follow "What to try" in each exercise.** You can copy the text in the gray boxes and use it.
3. **Check off "Did it work?" one item at a time.** If you could not do an item, redo just that part in the chapter under "Where to review."

On Mac and Linux, type this in the terminal. You copy the memo from the practice folder you used before.

```bash
mkdir -p ~/hello-ai-연습/다시/inbox
cd ~/hello-ai-연습/다시
cp ../터미널/inbox/회의-2026-10-27-주간회의.txt inbox/
```

On Windows PowerShell, type this. The Windows commands in this chapter were not tested.

```powershell
mkdir $HOME\hello-ai-연습\다시\inbox
cd $HOME\hello-ai-연습\다시
cp ..\터미널\inbox\회의-2026-10-27-주간회의.txt inbox\
```

Do Exercises 1 to 7 in order. Later exercises use the results of earlier ones. **Do Exercise 8 at the very end.**

You do not have to get everything done at once. Two or three exercises a day is plenty. Even if your results look different from this guide, it went well if you can check off everything on the checklist.

There are three things to keep in mind.

- **At first, start with `claude --permission-mode manual`.** Learn by watching what it is about to do, one step at a time.
- **Work only in the practice folder.** Do not use a folder that holds all your documents.
- **Remove personal information from your own notes** before you put them in for Exercise 8.

<Quiz id="ch814-how" />

## Exercises

### Exercise 1. Hand Over Your First Cleanup

**When**: You want to turn a messy memo into meeting minutes.

**What to try**: Start with `claude --permission-mode manual` in the practice folder and send this. The default choice in the trust prompt is `No, exit`. Use the down arrow to choose `Yes, I trust this folder`.

```text
Read inbox/회의-2026-10-27-주간회의.txt and organize it into 회의록.md. Split it into decisions, to-dos (owner and due date), and next meeting, and do not write anything that is not in the memo.
```

**Did it work?**

- ☐ I read what the permission prompt said and chose `Yes`
- ☐ Every to-do has an owner and a due date
- ☐ The original memo is unchanged

**Where to review**: [Chapter 4](04-first-session.md)

### Exercise 2. Name It and Continue

**When**: You want to find and continue work that spans several days.

**What to try**: Name the session with `/rename weekly-meeting-notes` and leave with `/exit`. Then find and open that session with `claude -r`.

**Did it work?**

- ☐ I found the session by its name in the list
- ☐ The continued session remembers the conversation from a moment ago
- ☐ I checked how full the context is with `/context`

**Where to review**: [Chapter 6](06-sessions-context.md)

### Exercise 3. Permissions and Rewinding

**When**: You want to see what Claude changes and undo it if needed.

**What to try**: Follow the steps below.

1. Look at the bottom line. A session you picked from the list can start in auto mode, just like a newly started one. If it says `auto mode on`, press `Shift + Tab` once to switch to `manual mode on`.
2. Send the request below and read the changed lines in the permission prompt.
3. When it is done, press Esc twice with the input box empty to open the rewind menu.
4. Choose `Restore code and conversation` to restore. It is a practice folder, so go ahead without worrying. We also clicked this far in this guide and confirmed the file came back.
5. After restoring, the request you sent comes back in the input box. Clear it with Esc twice, then move on to the next exercise.

```text
Add a 'Status' column to the to-do table in 회의록.md and fill every row with 'In progress'. Do not change anything else.
```

**Did it work?**

- ☐ I read the changed lines in the permission prompt first
- ☐ I read the warning sentence in the rewind menu
- ☐ I can name one thing rewinding cannot undo

**Where to review**: [Chapter 7](07-permissions-undo.md)

### Exercise 4. Make Rules and a Skill

**When**: You keep repeating the same rules and steps.

**What to try**: Write the meeting-minutes rules in CLAUDE.md in 3 to 5 lines. Then make the skill `meeting-notes`, and call it in a **new session** without saying the rules. Examples: [CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) · [Skill](/practice/cli/results/9장-스킬-meeting-notes.txt)

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

**Did it work?**

- ☐ `meeting-notes` shows up in the list when I type `/`
- ☐ The result in the new session followed the rules
- ☐ The file was created in the `notes` folder

**Where to review**: [Chapter 8](08-memory-settings.md), [Chapter 9](09-skills-extensions.md)

### Exercise 5. Run It with One Command

**When**: You want to finish the cleanup without opening a conversation.

**What to try**: Before running it, check `/usage` in a session. Then exit with `/exit` and do this in the terminal. Make `주간정리.sh` with the paste box from [Chapter 10](10-headless-automation.md), and run it with `bash 주간정리.sh`. On Windows, paste the PowerShell box from Chapter 10.

**Did it work?**

- ☐ It ran to the end without anyone answering
- ☐ Each memo showed `Done:` or `Failed:`
- ☐ I compared `/usage` before and after running it

**Where to review**: [Chapter 10](10-headless-automation.md), [Chapter 13](13-cost-safety-trouble.md)

### Exercise 6. Hooks and Git Records

**When**: You want to leave a trace of changed files and save the current state.

**What to try**: Follow the steps below.

1. Add the change-log hook from Chapter 11 and have Claude change one file.
2. In this practice folder, follow "Making Your First Record with Git" (Git으로 첫 기록 남기기) in Chapter 12 from the start. But you do not need to type the `cd ~/hello-ai-연습/터미널` line in the first box of Chapter 12. That is because you are already in that folder. Start from `git init`.
3. Make `.gitignore` as in Chapter 12, then go through `git config`, `git add .`, and `git status --short`, all the way to your first commit with `git commit`.

**Did it work?**

- ☐ The hook shows up in `/hooks`
- ☐ I opened `변경기록.txt` myself and checked that lines were added
- ☐ The record shows up in `git log --oneline`

**Where to review**: [Chapter 11](11-hooks-statusline.md), [Chapter 12](12-parallel-remote.md)

### Exercise 7. Hidden Instructions and worktree

**When**: You want to learn what to watch out for when handing over someone else's material, and test things without touching your main folder.

**What to try**: There are three big steps.

1. Put the ad-hoc meeting memo in `inbox`, read its contents, and commit.
2. Hand that memo to Claude in a worktree.
3. When you are done, take the memo out of `inbox` in your main folder.

There is a reason you commit first. As you saw in [Chapter 12](12-parallel-remote.md), only committed files go into a worktree. If you do not commit, this memo will not appear inside the worktree.

In step 1, use the file you downloaded in Chapter 13. If you deleted it, download it again as in [Chapter 13](13-cost-safety-trouble.md). On Mac and Linux, type this.

```bash
cp ~/Downloads/회의-2026-10-29-임시회의.txt inbox/
cat inbox/회의-2026-10-29-임시회의.txt
git add .
git commit -m "Add ad-hoc meeting memo"
```

On Windows PowerShell, type this.

```powershell
cp $HOME\Downloads\회의-2026-10-29-임시회의.txt inbox\
Get-Content -Encoding UTF8 inbox\회의-2026-10-29-임시회의.txt
git add .
git commit -m "Add ad-hoc meeting memo"
```

Do step 2 like this.

- Start with `claude --worktree injection-test`.
- If the bottom line says `auto mode on`, press `Shift + Tab` once to switch to `manual mode on`.
- Hand it over as in the better example in Chapter 13.

In step 3, you take the memo out of `inbox` in your main folder because of `주간정리.sh`. This script processes every meeting memo in `inbox` without a person watching. If the memo with hidden instructions is left there, it will be processed as is the next time you run it. The command to take it out is at the end of the "Watch Out for Hidden Instructions" (숨은 지시 조심하기) section in Chapter 13.

**Did it work?**

- ☐ I checked that the bottom line says `manual mode on`
- ☐ I checked that I am inside the worktree with `! pwd`
- ☐ "All tasks done" is not at the end of the meeting minutes
- ☐ When finishing, I read the choice between keeping and deleting, and chose one
- ☐ I took the ad-hoc meeting memo out of `inbox`

**Where to review**: [Chapter 12](12-parallel-remote.md), [Chapter 13](13-cost-safety-trouble.md)

### Exercise 8. Make a Weekly Review from Your Own Notes

**When**: You now want to use it for your own work, not for practice.

**What to try**: Make `inbox` in a new folder (for example, `~/hello-ai-연습/내-주간정리`), and put in 2 or 3 of your own notes **with personal information removed**. When you put them in, match two things.

- Name the files in the form `회의-date.txt` (회의 means "meeting"). That is because the script only looks for files that start with `회의-`.
- If they are Word or Hangul (Korean word processor) files, save them as `.txt` and put them in.

Then start `claude` and send this.

```text
Read the notes in inbox. I want to decide on a review format I will use every week. First ask me what fields I need. After you hear my answers, write the rules in CLAUDE.md in 3 to 5 lines and make the skill .claude/skills/meeting-notes/SKILL.md.
```

When the skill is ready, exit with `/exit`, copy the script from Exercise 5 into this folder, and run it. On Windows, paste the PowerShell box from Chapter 10 in this folder.

```bash
cp ../다시/주간정리.sh .
bash 주간정리.sh
```

Move the memos you have finished processing. That way you will not clean up the same memos again next week. `mv` is the command that moves files. Next week, put new memos in `inbox` and run it. On Mac and Linux, type this.

```bash
mkdir -p done
mv inbox/회의-*.txt done/
```

On Windows PowerShell, type this.

```powershell
mkdir done -Force
Move-Item inbox\회의-*.txt done\
```

**Did it work?**

- ☐ Claude asked questions before writing the rules, and my answers were reflected
- ☐ The one line `bash 주간정리.sh` (on Windows, the PowerShell box from Chapter 10) organizes my notes in my format
- ☐ I compared the numbers, names, and due dates with the original notes
- ☐ I put in new notes to test whether the same command still works next week

**Where to review**: [Chapter 8](08-memory-settings.md), [Chapter 9](09-skills-extensions.md), [Chapter 10](10-headless-automation.md)

<Quiz id="ch814-check" />

## Habits of a Pro

Claude Code is built so that, in most cases, your plain first request in a new session already works well without any setup.[^plain] So habits come before complicated settings.

**Start small.** Try a big job on one file first. That way you can notice early if Claude misunderstood.

- **Weaker example**: `Organize my whole documents folder`
- **Better example**: `Organize just one memo in inbox into meeting minutes. I'll look at the result and then hand over the rest.`

**Give a way to check.** Give Claude a way to check whether it got things right or wrong. Then it can fix things itself and keep going.[^check]

- **Weaker example**: `Write good meeting minutes`
- **Better example**: `After writing the meeting minutes, check that all the amounts, dates, and names match the memo, and if anything is different, tell me in a table.`

**Use `/clear` when the task changes.** A focused context gives better answers and costs less.[^clear]

**If it goes wrong twice, rewrite.** Watch the first minute, and press Esc the moment it drifts. If it is still wrong after you correct it twice, do not correct it a third time. Use `/clear` and write a better request.[^two-fails] This is faster than holding on to a long conversation.

<Quiz id="ch814-habits" />

## Add Rules When You Need Them

You do not need to write down every rule from the start. Add one at a time when the same annoyance keeps coming back.

| If this happens | Add this |
|---|---|
| You keep saying the same thing | One line in CLAUDE.md |
| You keep pasting the same steps | A skill[^add-skill] |
| It must happen every time | A hook[^add-hook] |
| It must never happen | A deny rule[^add-deny] |

In CLAUDE.md, write only what Claude cannot learn by reading the folder.[^only-unknown] Do not pile on capital letters or "IMPORTANT!". A plain line is enough. Piling on emphasis tends to make Claude apply the rule too much.[^no-caps]

<Quiz id="ch814-rules" />

## Weekly Routine

Run the tool you built like this every week.

1. **Collect**: Put memos in `inbox` as they come. Remove personal information.
2. **Organize**: Run `bash 주간정리.sh` (on Windows, the PowerShell box from Chapter 10).
3. **Check**: Compare the numbers, owners, and due dates with the originals.
4. **Record**: Move the finished memos to `done`. If you are happy with it, save it with `git add .` and `git commit -m "This week's review"`. If it is your first time, start with `git init` in this folder. Do not type the `cd` line in the box from [Chapter 12](12-parallel-remote.md).
5. **Fix**: If you gave the same correction twice, fix CLAUDE.md or the skill.

**It does not have to be perfect from the start.** Run it once a week and fix just one thing that bothered you. In a few weeks, it becomes a tool that fits you.

<Quiz id="ch814-routine" />

## Try It Yourself

1. Put one memo from this week in `inbox`.
2. Go through the weekly routine from step 1 to step 5 in order.
3. Apply one thing that bothered you to CLAUDE.md or the skill.

Ask yourself. Will it still run with the same command next week?

## Summary

- On the checklist, you check off "I checked it," not "Claude did it all."
- Start small, give a way to check, and use `/clear` when the task changes.
- If it is still wrong after two corrections, use `/clear` and rewrite the request.
- Add rules one at a time when the same annoyance keeps coming back.
- Run Collect → Organize → Check → Record → Fix every week.

## Glossary

| Term | One-line meaning |
|---|---|
| Routine | A work habit you run in the same order every week |
| Script | A file that holds several command lines and runs them all at once |

<ChapterDone :chapter="814" />

Next chapter: [Step 4 · AI-SDLC Guide](/en/guide/30-ai-sdlc/)

[^plain]: Claude Code official docs, "Best practices for Claude Code". "Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^check]: Claude Code official docs, "Best practices for Claude Code". "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^clear]: Claude Code official docs, "Best practices for Claude Code". "`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^two-fails]: Claude Code official docs, "Best practices for Claude Code". "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^add-skill]: Claude Code official docs, "Extend Claude with skills". "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills (checked on 2026-11-06)
[^add-hook]: Claude Code official docs, "Output styles". "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (checked on 2026-11-06)
[^add-deny]: Claude Code official docs, "Best practices for Claude Code". "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^only-unknown]: Claude Code official docs, "Best practices for Claude Code". "Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
[^no-caps]: Claude Code official docs, "Best practices for Claude Code". "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." https://code.claude.com/docs/en/best-practices (checked on 2026-11-06)
