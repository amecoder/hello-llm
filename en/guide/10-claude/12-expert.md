# Chapter 12. Working Like an Expert — Decide, Test, and Build Up

> **In One Sentence**: Getting good at AI is not just about knowing more buttons. It is the ability to **decide what to hand off, test before handing off, and save what you repeat**.
> This chapter covers how to **combine** the features you learned in Chapters 1–11 to fit your own work. At the end, it introduces Claude Academy, a collection of courses made by Anthropic.

This chapter barely covers any new features. The topic is when and how to pull out and use the Claude features you learned in earlier chapters.

**Methods that work on any AI** — like how to decide what to hand off (4D), how to test with a task you already know the answer to before handing off, and how to ask AI to quiz you when learning — are in [Stage 1, Chapter 11: Working Like an Expert](../00-common/11-expert.md). Reading that first will make this chapter easier. This chapter matches those methods to Claude's features and menus.

## Choosing the Right Tool for the Task

Don't pick a menu first. Look at the shape of the work in front of you first. Then the feature to use will follow naturally.[^academy-tabs]

| For this kind of work | Use this | Details |
|---|---|---|
| Ask, refine, and think together | Regular chat | [Stage 1](../00-common/) |
| Simple facts, things that happened today | Web search | [Chapter 6](06-search.md#when-to-use-what) |
| Think deeply without recent info | Extended thinking | [Chapter 6](06-search.md#when-to-use-what) |
| Gather lots of sources into a report | Research (paid) | [Chapter 6](06-search.md#when-to-use-what) |
| Keep continuing one ongoing task | Projects | [Chapter 7](07-projects-tools.md#projects-—-materials-and-instructions-in-one-place) |
| Need a document, spreadsheet, or slide file | File creation | [Chapter 4](04-files-artifacts.md#getting-files-made-—-excel-word-powerpoint-and-pdf) |
| Receive a finished deliverable after several steps | Cowork (paid) | [Chapter 8](08-cowork.md#what-is-cowork-—-delegating-work-not-just-chatting) |
| Repeat automatically at set times | Scheduled tasks (paid) | [Chapter 8](08-cowork.md#running-automatically-on-time-—-scheduled-tasks) |

The criteria for dividing web search, extended thinking, and Research come from the help center.[^when] The remaining rows gather what you learned in earlier chapters into one table.

Most of the time, the top row — a regular chat — is enough.

<Quiz id="ch212-tools" />

## Saving What You Repeat

As you use Claude, you end up repeating the same things. If you write down what you repeat once, Claude starts already knowing it next time.

There are four places to save things. You don't need to use all of them from day one. Add them one by one in the order below as you need them.[^academy-layers] When *not* to turn something into a template is covered in [Stage 1, Chapter 11: Saving What You Repeat](../00-common/11-expert.md#save-what-you-repeat).

1. **You make the same request in every chat** → Write it in [instructions](05-memory.md#instructions-—-rules-for-all-conversations).
2. **You keep continuing one ongoing piece of work** → Group that work into a [project](07-projects-tools.md#projects-—-materials-and-instructions-in-one-place).
3. **You explain the same step-by-step process every time** → Turn those steps into a [skill](07-projects-tools.md#skills-—-saving-your-way-of-working).
4. **You want to share a well-polished set of skills as a bundle** → Bundle multiple skills into a [plugin](07-projects-tools.md#plugins-—-bundles-by-job-role). Plugins are a paid plan feature.[^plugins]

Going in this order reduces what you have to explain from scratch each time, bit by bit.

If you confuse projects and skills, remember it like this: **projects store reference materials, and skills store the steps for doing a task.**[^academy-skills-vs] The detailed differences are in [Chapter 7: How Skills Differ from Instructions, Projects, and Connectors](07-projects-tools.md#how-skills-differ-from-instructions-projects-and-connectors).

### Testing a Skill by Turning It On and Off

When you make a skill, compare it by sending the exact same request twice. Once with the skill turned on, and once with it turned off. Tips for comparing and fixing are in [Stage 1, Chapter 11: Test and Refine the Templates You Make](../00-common/11-expert.md#test-and-fix-the-templates-you-make).

You can turn skills on and off in Customize (사용자 지정) → Skills ([Chapter 7: Built-in Skills and My Skills](07-projects-tools.md#built-in-skills-and-your-own-skills)).[^skills-use] Claude will not use skills that are turned off.

<Quiz id="ch212-layers" />

## Handing Off Tables and Numbers

Just like in [Chapter 4: Uploading Files](04-files-artifacts.md#uploading-files), if you upload a table file like a CSV or TSV, Claude analyzes the data and draws charts for you. You can also get charts as image files like PNG.[^create]

```
The attached CSV is the item-by-item sales record for a neighborhood shop over the past three months. Make a table of totals by item from largest to smallest, and create a bar chart as a PNG image.
Also write down the method you used for the calculation, one line each.
```

With number analysis, the biggest worry is whether you can trust the results. First, check it against **past data you have already analyzed**. How to do this and examples are in [Stage 1, Chapter 11: Handing Off Tables and Numbers](../00-common/11-expert.md#handing-off-tables-and-numbers). Double-check important calculations with another spreadsheet program or by hand ([Chapter 4](04-files-artifacts.md#getting-files-made-—-excel-word-powerpoint-and-pdf)).

<Quiz id="ch212-data" />

## To Learn More — Claude Academy

**Claude Academy** is a collection of online courses made by Anthropic. You can open and read the lesson content of the courses below without logging in (checked on 2026-10-26). All content is in **English**, and the estimated time is not listed on the course landing pages.[^academy-courses]

| Course | Lessons | Who it's for | What you need |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14 lessons + quiz | Anyone, regardless of AI experience | Any AI service account. No paid plan needed |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13 lessons + quiz | Anyone who wants to know why AI answers the way it does | No prior knowledge needed |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13 lessons + quiz | Anyone using Claude for work for the first time | Claude account (including Free). Paid plan for Cowork and Research lessons |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14 lessons + quiz | Anyone who works moving back and forth between files and apps | Paid plan; desktop app for lessons that use folders. No coding needed |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6 lessons | Anyone who wants to build skill files directly | Claude Code (developer tool covered in Stage 3) |

- You can take the first two courses using another AI instead of Claude. The two courses are designed so you can take either one first.[^academy-courses]
- In the "AI Fluency" course, if you score 80% or higher on the final quiz, you can add a **completion badge** to your account. It is not a professional certification.[^academy-courses] The [Understanding Check Exam](../00-common/certificate.md) in this guide is a learning badge of the same nature.
- Watch "Introduction to agent skills" after finishing Stage 3 (Coding Agent Tools) of this guide. All of its content is based on Claude Code.

You can read English pages using the translation feature in a browser like Chrome (right-click on the page → Translate).

### Frameworks Taught in the Courses — Compared with This Guide

The courses cover the same ideas as this guide under different names. Knowing the connections below makes it easy to guess what new terms mean when you meet them in the courses. The names used in the courses are written in their original English.

- **Setting the stage · Defining the task · Specifying rules** (Claude 101): Make a request by setting your role and goal, the task to do, and the tone, format, and examples.[^academy-stage] This is the same idea as [Stage 1, Chapter 4: The 5 Elements of a Good Prompt](../00-common/04-prompt-basics.md#the-5-elements-of-a-good-prompt).
- **4D — Delegation · Description · Discernment · Diligence** (Claude 101, AI Fluency): See [Stage 1, Chapter 11: What Makes an Expert Different](../00-common/11-expert.md#what-makes-a-pro-different).
- **Evals** (Claude 101, Cowork): Testing with a task you already know the answer to. See [Stage 1, Chapter 11: Test Before Handing Off](../00-common/11-expert.md#test-before-you-hand-it-off) and [Testing a Skill by Turning It On and Off](#testing-a-skill-by-turning-it-on-and-off) in this chapter.
- **Chat · Cowork · Code** (Claude 101): Back-and-forth work goes in Chat, work you hand off goes in Cowork, and building software goes in Claude Code.[^academy-tabs] See [Chapter 8: What Is Cowork?](08-cowork.md#what-is-cowork-—-delegating-work-not-just-chatting) and [Choosing the Right Tool for the Task](#choosing-the-right-tool-for-the-task) in this chapter.
- **Deliverable, inputs, and nuance** (Cowork): Write these three things when handing off a task.[^academy-review] This is the same as [Chapter 8: Tips for Handing Off Work](08-cowork.md#how-to-hand-off-tasks-well).
- **Three questions for reviewing results** (Cowork): Is it the result you wanted? Are the facts right? Is anything made up?[^academy-review] See also [Stage 1, Chapter 9: Four Habits for Checking](../00-common/09-safety.md#four-habits-for-checking).
- **"projects store knowledge, skills perform tasks"** (Claude 101): Projects are for reference materials, and skills are for the steps of a task.[^academy-skills-vs] See [Saving What You Repeat](#saving-what-you-repeat) in this chapter.

<Quiz id="ch212-academy" />

## Try It Yourself

Just like in [Chapter 11: Three Rules to Follow When Practicing](11-practice.md#three-rules-to-follow-while-practicing), try these with made-up data instead of real company data.

1. Try steps 2–3 (testing with an email you already know the answer to) from [Stage 1, Chapter 11: Try It Yourself](../00-common/11-expert.md#try-it-yourself) in Claude. Put the single line that made it come out right into your [Chapter 5 instructions](05-memory.md#instructions-—-rules-for-all-conversations) or project instructions.
2. Make up about 10 rows of a table with date, item, and amount, and save it as a CSV. First calculate the totals by item by hand yourself, then use the CSV prompt in this chapter to get a table and PNG chart, and compare the two totals.
3. If you made a skill, send the exact same request once with the skill turned on and once with it turned off, and compare the two answers.

**Continuing Project** ([Preparing a Book Club](../00-common/practice-kit.md)): Upload the sample file fees.csv and send: "If there are any duplicates or empty values, tell me first. Then make a table of total income, total expenses, and money left over, and make a bar chart PNG of expenses by category." See if it catches the snacks written twice and the row with an empty amount. Finally, check off the [Project Checklist](../00-common/practice-kit.md#what-you-will-have-at-the-end) one by one.

## Summary

- Methods for deciding, testing, and checking that work on any AI are in Stage 1, Chapter 11. This chapter matches them to Claude's features.
- Look at the shape of the work before the menu. Most of the time, a regular chat is enough.
- Save things you repeat in the order of instructions → project → skill → plugin (paid), adding them one by one when needed.
- Compare a skill you made by sending the request twice, turning it on and off in Customize (사용자 지정) → Skills.
- If you upload a table file, you can get analysis and charts (including PNG images). Check it against past data before trusting it.
- To learn more, check out the Claude Academy courses (in English; lesson content can be viewed without logging in).

## Glossary

| Term | One-line meaning |
|---|---|
| Claude Academy | A collection of online courses made by Anthropic |

Course terms like 4D and Evals are in [Stage 1, Chapter 11: Glossary](../00-common/11-expert.md#glossary).

<ChapterDone :chapter="212" />

Next chapter: You have finished the Stage 2 Claude guide. Pick a chapter to review from the [Stage 2 · Claude Table of Contents](./), or check your skills with the [AI Knowledge Level Test](../00-common/level-test.md).

[^academy-tabs]: Claude Academy "Claude 101" lesson "How you'll work with Claude on your desktop". "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (checked on 2026-10-26)
[^academy-layers]: Claude Academy "Introduction to Claude Cowork" lesson "Get better results faster". "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (checked on 2026-10-26)
[^academy-skills-vs]: Claude Academy "Claude 101" lesson "Working with skills". "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (checked on 2026-10-26)
[^academy-stage]: Claude Academy "Claude 101" lesson "Your first conversation with Claude". "One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude (checked on 2026-10-26)
[^academy-review]: Claude Academy "Introduction to Claude Cowork" lesson "Hand Claude Cowork your first task". "name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop (checked on 2026-10-26)
[^academy-courses]: Claude Academy course landing pages. AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." Same course, lesson "Introduction to AI Fluency" "you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities", quiz "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · Verified that lesson content opens in an unauthenticated browser (checked on 2026-10-26)
[^when]: Anthropic Help Center, "When should I use web search, extended thinking, and research?". "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 (checked on 2026-10-26)
[^plugins]: Anthropic Help Center, "Use plugins in Claude". "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 (checked on 2026-10-26)
[^skills-use]: Anthropic Help Center, "Use skills in Claude". "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 (checked on 2026-10-26)
[^create]: Anthropic Help Center, "Create and edit files with Claude". "You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 (checked on 2026-10-26)
