# Chapter 11. Hands-on Exercises — Build Your Own Organizing Tool from Scratch

> **One-line summary**: Here are 9 exercises where you rebuild the "organizing tool" from Chapters 2–10 **from scratch with your own hands**. In the final exercise, you build your own tool using **your own notes**.
> Each exercise has a "Check that it worked" checklist, so you can verify your work on your own without anyone grading it for you.

The screen names in this chapter are based on the macOS desktop app (Korean UI) as of October 31, 2026. If your screen looks different, follow the names shown on your screen.

## How to Do the Exercises

1. **Create a new practice folder.** For example: `정리도구-연습`. Inside it, create an `inbox` folder and put the 5 [practice notes from Chapter 2](02-install.md#prepare-and-pick-a-practice-folder) in it. You will add the ad-hoc meeting note from Chapter 9 in Exercise 7.
2. **Follow "What to try" in each exercise.** Copy and send the request in the gray box.
3. **Check off each item in "Check that it worked" one by one.** If you cannot check an item, read the chapter listed under "Where to review" and try just that part again.

Do Exercises 1–6 in order. Later exercises use the results from earlier ones (templates, rules, and skills). Do Exercises 7 and 8 after finishing up through Exercise 6. **Do Exercise 9 last.**

You do not have to finish everything at once. Two or three exercises a day is plenty. The results will vary slightly each time. Even if your result looks different from this guide, you did well as long as you can check every item on the checklist.

### Three Rules to Follow While Practicing

- **Keep the permission mode set to "Ask permissions (수동)".** Learn by watching what Claude wants to do one step at a time ([Chapter 4](04-permissions-undo.md)).
- **Work only inside your practice folder.** Do not choose a folder that holds all your personal documents ([Chapter 2](02-install.md)).
- **Remove personal information from your own notes in Exercise 9** before putting them in ([Chapter 9](09-cost-data-safety.md)).

<Quiz id="ch411-how" />

## Exercises

### Exercise 1. Delegate Your First Organizing Task

**When to use this**: When a meeting ends and you want to turn messy notes into meeting minutes.

**What to try**: Open a new session in the Code tab, choose your folder, and send this.

```
Read the meeting note in the inbox folder and organize it into meeting minutes. Divide it into three sections: Decisions Made / Action Items (owner and due date) / Topics for Next Time, and save it as a new file in the notes folder. Do not modify the original note.
```

**Check that it worked**

- ☐ Every action item has an owner and a due date
- ☐ The set price (5,500 won) and next meeting date (11/3) match the note
- ☐ Nothing not in the note was made up
- ☐ The original note in inbox is untouched

**Where to review**: [Chapter 2: Installing the Desktop App and Your First Session](02-install.md)

### Exercise 2. Turn On Change History and View What Changed

**When to use this**: When you want to see line by line what Claude changed.

**What to try**: Click the Changes button in the title bar. When "Git repository required" appears, send the two requests below in order.

```
It says a Git repository is required to see what changed. Turn on change history (Git) in this folder and save the current files as the first record. Explain what you did in simple terms.
```

```
Add a 'Status' column to the action items table in the meeting minutes. Look at the 3 weekly review notes in inbox, and write 'Done (date)' for finished tasks or 'In Progress' if not finished yet. For tasks not mentioned in the reviews, write 'Needs Check', and do not change any other part.
```

**Check that it worked**

- ☐ Red and green lines along with `+N −N` appear in the Changes pane
- ☐ No lines outside the action items table were changed
- ☐ Lightbulbs, copy text, and unit cost are Done, and Instagram is In Progress
- ☐ You checked the name and email attached to the first record (to make sure it is not a work account)

**Where to review**: [Chapter 3: A Tour of the Screen](03-screen-tour.md)

### Exercise 3. Undo Work with Rewind

**When to use this**: When you do not like the result and want to go back to before your request.

**What to try**: Ask Claude to organize your study notes, then type `/rewind` in the input box to rewind to before that request.

```
Organize the study notes in inbox into a clean study note. Divide it into four sections: Key Points / Unfamiliar Terms Explained / Questions to Ask / Things to Try, and save it as a new file in the notes folder. Do not modify the original note.
```

**Check that it worked**

- ☐ You read `+0 −N` in the rewind confirmation window first
- ☐ After rewinding with "Restore code and conversation (코드와 대화)", the study note file disappeared
- ☐ The rewound request is back in the input box

**Where to review**: [Chapter 4: Permissions and Undo](04-permissions-undo.md)

### Exercise 4. Create 3 Templates with Plan Mode

**When to use this**: When you want to review and adjust the approach before handing off a big job.

**What to try**: In a new session, switch the permission mode to "Plan mode (계획)" and send this. When the plan appears, read the "Assumptions (가정)" section, change at least one item with "Edit… (수정…)", and then click "Accept (수락)".

```
I want to create meeting minutes, study notes, and weekly reviews in the same format every time. Refer to the meeting minutes in the notes folder and the notes in inbox, and make a plan to create 3 templates in the templates folder. Include in the plan what sections go into each template, what to write in each section, and a checklist I can use to verify the results.
```

**Check that it worked**

- ☐ While the plan was being made, no files in your folder changed (only the plan document was written)
- ☐ What you changed with "Edit…" was reflected in the updated plan
- ☐ Three templates and a checklist were created in the templates folder

**Where to review**: [Chapter 5: How to Delegate Well](05-delegate-well.md)

### Exercise 5. Save Rules in CLAUDE.md and Test Them

**When to use this**: When you find yourself repeating the same rules every time.

**What to try**: Have Claude create `CLAUDE.md` with 3–5 rules, then send this in a **new session** without mentioning any formatting rules.

```
Write this week's weekly review using the 3 review notes in inbox.
```

**Check that it worked**

- ☐ `CLAUDE.md` is short, around 20 lines
- ☐ The result in the new session followed the template and date format rules
- ☐ Sections not mentioned in the notes say `(Not in note)`

**Where to review**: [Chapter 6: Project Memory](06-claude-md.md)

### Exercise 6. Complete Your Tool with 3 Skills

**When to use this**: When you want to run the same organizing task with a single one-line command.

**What to try**: Have Claude create 3 skills (`meeting-notes`, `study-notes`, and `weekly-review`). When the permission prompt pops up, read the preview and choose "Allow once (한 번만 허용)". Then call the skill in one line in a new session.

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

**Check that it worked**

- ☐ When you type `/` and part of the name, the skill appears in the list
- ☐ The one-line command produced a note following the exact template order
- ☐ You chose "Allow once" instead of "Always allow (항상 허용)" in the permission prompt

**Where to review**: [Chapter 7: Skills, Plugins, and External Tools](07-skills-plugins.md)

### Exercise 7. Test Hidden Instructions

**When to use this**: When you want hands-on experience with what to watch out for when asking Claude to organize files sent by others.

**What to try**: Put the [ad-hoc meeting note](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) from Chapter 9 into `inbox` and have Claude organize it.

```
/meeting-notes inbox/회의-2026-10-29-임시회의.txt
```

**Check that it worked**

- ☐ "All action items completed" is **not** at the end of the meeting minutes
- ☐ You checked whether Claude's reply explained that hidden notice
- ☐ Regardless of the result, you wrote down the rule to always skim files from others before handing them to Claude

**Where to review**: [Chapter 9: Cost, Data, and Safety](09-cost-data-safety.md)

### Exercise 8. Run It on a Schedule or from the Terminal

**When to use this**: When you want your organizing tool to run without calling it yourself, or you want to check something with a single command.

**What to try**: Do one of the two options below.

- Ask in plain words to create a Friday weekly review **schedule**, test it once with **Run now**, and turn it off if you do not need it ([Chapter 8](08-parallel-cloud-schedule.md)).
- In the terminal, move into your practice folder and run a read-only question with `claude -p` ([Chapter 10](10-terminal.md)).

```
Show me the list of files in the notes folder, and tell me in one line per file which template (from templates) each file used. Do not modify any files. Keep the answer short, as a table only.
```

**Check that it worked**

- ☐ (Schedule) You included a condition like "If there are no notes…" in the request
- ☐ (Schedule) You handled the permission prompt that appeared during Run now
- ☐ (Terminal) The terminal also read the template files in the same folder

**Where to review**: [Chapter 8](08-parallel-cloud-schedule.md), [Chapter 10](10-terminal.md)

### Exercise 9. Build Your Own Organizing Tool with Your Own Notes

**When to use this**: When you are ready to move past practice and use this for your own work.

**What to try**: Create an `inbox` folder inside a new folder (for example: `내-정리도구`), and put in 2–3 of your own notes **with personal information removed**. Then repeat Exercises 4–6 tailored to your own work.

```
Read the notes in inbox and make a plan to create a template for the document I will organize every week. Ask me questions first about what sections I need. After hearing my answers, let's create the template in templates and an organizing skill in .claude/skills.
```

**Check that it worked**

- ☐ Claude asked questions before making the plan, and your answers were reflected in the template
- ☐ 3–5 lines of your own rules were added to `CLAUDE.md`
- ☐ A single one-line skill command organizes your notes into your custom template
- ☐ You have a checklist to compare the result against your original notes
- ☐ You cleaned up the practice folders (`정리도구-연습`, etc.) if you no longer need them

**Where to review**: [Chapter 5](05-delegate-well.md), [Chapter 6](06-claude-md.md), [Chapter 7](07-skills-plugins.md)

<Quiz id="ch411-check" />

## Summary

- Working through Exercises 1–6 in order rebuilds your organizing tool from scratch.
- The checklist is not for checking "Claude did everything," but for checking "I verified it myself."
- In the final exercise, you build your own tool with your own notes. Always remove personal information before putting them in.

<ChapterDone :chapter="411" />

Next chapter: [Chapter 12. Using It Like an Expert](12-expert.md)
