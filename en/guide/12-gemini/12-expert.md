# Chapter 12. Using It Like a Pro — Picking Features, Building Habits, and Checking Results

> **In One Sentence**: Getting good at AI is not just about knowing more buttons. It is about **picking the right feature for your task, saving what you repeat, and checking the result as carefully as the task requires**.
> This chapter shows you how to **combine** the Gemini features from Chapters 1 to 11 to fit your own work.

This chapter barely covers any new features. Instead, it is about when and how to pull out the Gemini features you learned in earlier chapters.

Methods that **work with any AI** — like deciding what to hand off, or testing AI first on a task where you already know the answer — are in [Stage 1, Chapter 11: "Using It Like a Pro"](../00-common/11-expert.md). Reading that chapter first will make this one easier. Here, we match those methods to Gemini's features and menus.

## Picking the Right Feature for Your Task

Do not pick a menu first. Look at the shape of the task in front of you first. Once you do that, the right feature practically picks itself ([Stage 1, Chapter 11: "Look at the Shape of the Task First"](../00-common/11-expert.md#look-at-the-shape-of-the-work-first)).

| For this kind of task | Use this | Details |
|---|---|---|
| Ask, refine, and think together | Regular chat | [Stage 1](../00-common/) |
| Need careful reasoning | Turn up the thinking level on the model button | [Chapter 2](02-screen-tour.md#the-model-button-—-model-and-thinking-level) |
| A question you do not want to save | Temporary chat | [Chapter 2](02-screen-tour.md#temporary-chat-—-conversations-that-leave-no-history) |
| Edit a document or small app together | Canvas | [Chapter 4](04-files-create.md#canvas-—-editing-documents-and-apps-together) |
| Gather lots of sources into a report | Deep Research | [Chapter 6](06-search.md#deep-research-—-getting-a-long-research-report) |
| Collect materials on one topic over time | Notebook | [Chapter 6](06-search.md#notebooks-—-organizing-sources-and-chats-by-topic) |
| Keep making the same request | Skills | [Chapter 7](07-skills-apps.md#skills-—-save-your-frequent-requests) |
| Search inside your own emails and files | Connected Apps | [Chapter 7](07-skills-apps.md#connected-apps-—-use-gmail-drive-and-calendar-in-gemini) |
| Get a finished result after multiple steps | Tasks (paid) | [Chapter 8](08-tasks.md#tasks-—-handing-off-a-whole-job-instead-of-chatting) |
| Repeat at set times | Scheduled actions | [Chapter 8](08-tasks.md#running-on-its-own-at-a-set-time-—-schedules) |

This table brings together what you learned in earlier chapters in one place.

Most of the time, the top row — a regular chat — is all you need. The further down the table you go, the more usage limits you spend (Deep Research, Tasks) or the more personal information you hand over (Connected Apps, Tasks). **Move down a row only when you truly need to.**

<Quiz id="ch312-tools" />

## Saving What You Repeat

As you use Gemini, you will find yourself saying the same things over and over. If you write down what you repeat once, Gemini starts already knowing it next time.

There are four places to save things. You do not need to use all of them from day one. Add them one by one in the order below, only as you need them. To learn when *not* to turn something into a template, see [Stage 1, Chapter 11: "Saving What You Repeat"](../00-common/11-expert.md#save-what-you-repeat).

1. **You ask for the same thing in every chat** → Write it as instructions in Instructions for Gemini (Gemini 요청 사항) ([Chapter 5](05-memory.md#instructions-—-so-you-don-t-have-to-repeat-yourself)).
2. **You keep pulling up materials on the same topic** → Gather those materials in a Notebook ([Chapter 6](06-search.md#notebooks-—-organizing-sources-and-chats-by-topic)).
3. **You explain the same steps every time** → Turn those steps into a Skill ([Chapter 7](07-skills-apps.md#how-to-write-a-good-skill)).
4. **You do the same task at set times** → Set up a scheduled action ([Chapter 8](08-tasks.md#running-on-its-own-at-a-set-time-—-schedules)).

If you mix up instructions and skills, remember it this way. **Instructions are rules Gemini always follows, while a skill is a set of steps it pulls out only when the situation fits.** Gemini looks at a skill's name and description to decide whether to use it right now.[^write]

### Compare Your Skills by Turning Them On and Off

Test a skill you made by sending the exact same request twice and comparing the answers. Send it once with the skill turned on, and once with it turned off using Deactivate (비활성화).[^skills] For tips on comparing and fixing templates, see [Stage 1, Chapter 11: "Test and Refine Your Templates"](../00-common/11-expert.md#test-and-fix-the-templates-you-make).

When you compare, ask yourself:

- Is the answer with the skill turned on closer to the shape I wanted?
- Did the skill jump in on a question where it was not needed?

If it jumps in when you do not want it to, narrow down **when to use it** in the skill's description ([Chapter 7](07-skills-apps.md#write-the-name-description-and-instructions)).

<Quiz id="ch312-layers" />

## Handing Off Tables and Numbers

When you upload a table file, Gemini can analyze it and draw charts for you ([Chapter 4](04-files-create.md#uploading-files)).

```
The attached table is the past three months of item sales records for a neighborhood shop. Make a table of totals by item from largest to smallest, and draw a bar chart.
Also write down the method you used for the calculation, one line at a time.
```

As in that last line, **asking it to write down its calculation method** makes it much easier to spot where a mistake happened.

With number analysis, the biggest worry is whether you can trust the result. First, test it against **past data you have already calculated**. If it gets the right answer on data where you already know the result, you can trust it a bit more when you hand off new data. You can find the method and examples in [Stage 1, Chapter 11: "Handing Off Tables and Numbers"](../00-common/11-expert.md#handing-off-tables-and-numbers).
For important calculations, double-check them in a spreadsheet or by hand. You can move a table using Export to Sheets (Sheets로 내보내기) and recalculate it right away ([Chapter 3](03-chats.md#exporting-to-other-apps)).

<Quiz id="ch312-data" />

## Checking Results as Carefully as the Task Requires

You do not need to check every answer to the same degree. **The more you stand to lose if it is wrong**, the more carefully you should check ([Stage 1, Chapter 11: "Checking Results as Carefully as the Task Requires"](../00-common/11-expert.md#check-in-proportion-to-the-weight-of-the-work)).

| Weight of the task | Example | How to check |
|---|---|---|
| Light | Dinner menu ideas | Read it over and skip anything that looks odd |
| Medium | Club announcement | Check just the date, place, and price against the original |
| Heavy | Contracts, health, money | Open the sources and verify with a professional |

Here is a recap of the checking tools you learned in this guide:

- Open **Sources (출처)** below the answer and compare it with the original text ([Chapter 6](06-search.md#checking-the-sources-behind-an-answer)).
- For answers from Connected Apps, open the **original email or file** ([Chapter 7](07-skills-apps.md#tips-for-asking-well)).
- For Tasks, read the **permission screen** carefully and watch it as it runs ([Chapter 8](08-tasks.md#before-you-hand-off-work-—-safety-rules)).
- Do not leave medical, legal, or financial decisions to Gemini ([Chapter 9](09-privacy.md#what-not-to-do-and-what-not-to-trust)).

<Quiz id="ch312-check" />

## Try It Yourself

1. Think of three tasks you did this week, and pick which row each one matches in the "Picking the Right Feature for Your Task" table above.
2. Find a request you made to Gemini more than twice in the past week, and decide whether to add it as instructions or turn it into a skill.
3. Send the same request once with the skill you made in Chapter 7 turned on, and once with it turned off, then compare the results.
4. Upload a household budget table where you already know the total, ask Gemini to recalculate the total, and see if it matches what you know.

**Ongoing Project** ([Preparing a Book Club](../00-common/practice-kit.md)): Upload the ledger file from the project kit and ask Gemini to calculate the total membership dues. Check whether it matches the total written in the project guide, and if it differs, look at the calculation method Gemini wrote down to find where it went wrong.

## Summary

- Look at the shape of the task before picking a menu. Most of the time, a regular chat is enough; step down to features like Deep Research or Tasks only when needed.
- Save what you repeat one by one as needed, in this order: Instructions → Notebook → Skills → Scheduled actions.
- Instructions are rules Gemini always follows, while a skill is a set of steps used only when the situation fits. Compare your skills by turning them on and off.
- For tables and numbers, have Gemini write down its calculation method too, and test it first on data where you already know the answer.
- Check results as carefully as the task requires. For heavy tasks, open the sources and verify with a professional.

## Key Terms

There are no new terms in this chapter. Terms like Instructions, Notebook, Skills, Tasks, and Scheduled actions can be found in the "Key Terms" section of each respective chapter.

<ChapterDone :chapter="312" />

Next up: You have finished the Stage 2 Gemini guide. Pick a chapter to review from the [Stage 2 · Gemini Table of Contents](./), or test your skills with the [AI Knowledge Level Test](../00-common/level-test.md).

[^write]: Google Help, "Write effective skills for Gemini Apps" (Korean edition: "Gemini 앱을 위한 효과적인 스킬 작성하기"). "Check if a skill is relevant. Gemini only checks the skill’s name and description to determine if a skill is relevant for your task." https://support.google.com/gemini/answer/17102773 (checked on 2026-10-31)
[^skills]: Google Help, "Create & manage skills for Gemini Apps" (Korean edition: "Gemini 앱에서 스킬 만들기 및 관리하기"). "At the top, click More   Deactivate ." Korean UI label: "비활성화". https://support.google.com/gemini/answer/17094296 (checked on 2026-10-31)
