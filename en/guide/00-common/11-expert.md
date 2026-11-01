# Chapter 11. Using AI Like a Pro — Judge, Test, and Build Up

> **One-line summary**: Using AI well takes more than knowing extra buttons. It takes the ability to **judge what to hand off, test before you hand it off, and save what you repeat**.
> This chapter collects ways of working that apply to any AI service. Menu locations and service-specific features are covered in Stage 2: [ChatGPT Chapter 11](/en/guide/11-chatgpt/11-expert.md) and [Claude Chapter 12](/en/guide/10-claude/12-expert.md).

This chapter is about when and how to pull out what you learned in Chapters 1–10. Features you will learn in Stage 2 (such as Projects and Skills) are only mentioned by name here, with detailed instructions in each service's chapters. You can read this chapter before Stage 2, or come back to it after finishing Stage 2.

## What Makes a Pro Different

In [Chapter 3, "Same Tool, Different Results"](03-why-learn.md#same-tool-different-results), you learned that the same AI gives different results depending on how you use it. Anthropic's course explains the skill of working well with AI like this: it goes beyond knowing which buttons to click and builds the **judgment** to use AI well in different situations.[^academy-4d]

The course divides this judgment into four skills. It calls them the "4Ds" after their first letters in English.[^academy-4d]

- **Delegation**: Decide which work you will do yourself and which work you will hand off to AI.
- **Description**: Clearly communicate the result and method you want.
- **Discernment**: Evaluate whether the result you got is accurate and useful.
- **Diligence**: Use AI responsibly, be open about having used AI, and take responsibility for the outcome.

You have already practiced many of these. [Chapter 4, "The 5 Elements of a Good Prompt"](04-prompt-basics.md#the-5-elements-of-a-good-prompt) is "Description." [Chapter 9, "Four Habits for Checking"](09-safety.md#four-habits-for-checking) covers "Discernment" and "Diligence."

An OpenAI article analyzing how people use ChatGPT at work shows a similar pattern. When people handed off **work outside their own field**, they gave more examples and background, and they asked the AI to verify the results more often.[^ways] The less familiar the task, the more reference material you should include—and the more you should ask for a check.

This chapter focuses on the remaining skill: **deciding what to hand off**.

<Quiz id="ch11-difference" />

## Picking Your First Task to Practice

You do not need to start with your biggest, most important job. At first, pick a task like this. These criteria are the flip side of what the OpenAI course advises you to avoid (tasks that are too broad, done only rarely, high-stakes, or hard to verify).[^academy-openai]

- You do it often
- The result is clear
- It is easy for you to check
- The harm is small if it is wrong

Save tasks that are too broad, done only once in a while, costly if wrong, or hard to verify for later.[^academy-openai]

| Too early to try | Good to try first |
|---|---|
| Grow store sales | Every Monday, make a summary table from last week's sales records |
| Run a club well | After every meeting, write a text message with the decisions and action items |

The tasks on the left are so broad that you get stuck just trying to figure out what to ask. The tasks on the right come around every week, and you can tell right away whether the result is right.

<Quiz id="ch11-pick" />

## Test Before You Hand It Off

"Can I trust AI with this job?" Do not guess—test it. The method is simple: try it on **a task where you already know the answer**. Anthropic's course calls this evaluations, or Evals.[^academy-eval] The course uses Claude as an example, but you can use the same method with any other AI (this guide's judgment).

1. Pick one task you do often. For example, a monthly notice email you sent last month, or a summary table you made last quarter.
2. Gather 5 to 10 past results that you created yourself.
3. Give the AI the raw notes or materials you had back then, and ask it to do the same job.
4. Put the AI's result next to yours and compare them.

For example, you might send a prompt like this. Do not show the AI the email you wrote back then yet (this guide's suggestion). That way, you can see what the AI creates on its own instead of just copying you.

```
Use the notes below to write next month's notice email for our neighborhood book club members.
The readers are 20 members in their 40s to 60s. Keep the tone polite but not stiff.
[Paste notes here]
```

As you compare, ask yourself: Did it include all the key information? Are the tone and format right? What is missing?[^academy-eval]

If something is missing, add that instruction and try again. If adding the instruction fixes the result, just make sure to include that line next time. If you refine it several times and it still falls short of your own work, you have learned that this task is better not handed off.[^academy-eval]

Even if the AI passes your test, keep checking its work. Testing builds confidence, but it does not remove your responsibility.[^academy-eval]

<Quiz id="ch11-eval" />

## Look at the Shape of the Work First

Do not pick a menu first. First, look at the shape of the work in front of you. Once you see that, the right feature to use will follow naturally.[^academy-tabs]

Even if feature names differ from service to service, the features that fit each type of work are similar.

| If the work looks like this | ChatGPT | Claude |
|---|---|---|
| Ask, refine, and think together | Regular chat | Regular chat |
| Quick facts, things that happened today | [Web search](/en/guide/11-chatgpt/06-search.md#web-search-—-having-chatgpt-search-the-internet) | [Web search](/en/guide/10-claude/06-search.md#when-to-use-what) |
| Gather lots of sources into a report | [Deep research](/en/guide/11-chatgpt/06-search.md#deep-research-—-handing-off-a-report) | [Research](/en/guide/10-claude/06-search.md#when-to-use-what) (paid) |
| Keep working on the same ongoing topic | [Projects](/en/guide/11-chatgpt/07-projects-plugins.md#projects-—-conversations-files-and-instructions-in-one-folder) | [Projects](/en/guide/10-claude/07-projects-tools.md#projects-—-materials-and-instructions-in-one-place) |
| Get a finished file after multiple steps | [Work](/en/guide/11-chatgpt/07-projects-plugins.md#the-difference-between-chat-and-work) (paid) | [Cowork](/en/guide/10-claude/08-cowork.md#what-is-cowork-—-delegating-work-not-just-chatting) (paid) |
| Repeat on a set schedule | [Scheduled tasks](/en/guide/11-chatgpt/11-expert.md#on-its-own-at-a-set-time-—-scheduled-tasks) | [Scheduled tasks](/en/guide/10-claude/08-cowork.md#running-automatically-on-time-—-scheduled-tasks) (paid) |

The feature names and plans in the table were checked in each service's chapters. Since they can change, check the relevant chapter before using them.

Most of the time, the top row—a single, clear prompt—is enough.[^academy-openai] Reach for the features in the lower rows only when a regular chat is not enough.

<Quiz id="ch11-tools" />

## Save What You Repeat

As you use AI, you will find yourself saying the same things over and over. If you write down what you repeat once, the AI will already know it next time you start.

There are four places to store it. You do not need to use all four from day one. Add them one by one in the order below as you need them.[^academy-layers]

1. **You make the same request in every chat** → Put it in your instructions. In ChatGPT, this is [Custom Instructions (사용자 지정 지침)](/en/guide/11-chatgpt/05-memory.md#custom-instructions-—-rules-you-want-always-followed); in Claude, it is [Instructions (지침)](/en/guide/10-claude/05-memory.md#instructions-—-rules-for-all-conversations).
2. **You keep working on the same ongoing job** → Group that work into a Project.
3. **You explain the same step-by-step process every time** → Save that sequence as a reusable template. Start by putting the template from [Chapter 8, "4. Turn It into a Reusable Template"](08-meta-prompting.md#_4-turn-it-into-a-reusable-template) into your Project instructions. If your service and plan support it, you can also turn it into a Skill.
4. **You want to share a well-polished template with others** → Share the template as a document, or bundle it using a sharing feature provided by the service (such as a plugin). Depending on your service and plan, this feature may not be available.

Going step by step in this order gradually reduces how much you have to explain from scratch each time.

**Some tasks are not ready to be turned into a template yet.** If the task changes every week, the format of the result is not settled yet, or the work requires human judgment, it is too early. In those cases, practice and refine it a few more times in regular chats first.[^academy-openai] The same goes for tasks that run automatically on a schedule. Run the task by hand a few times first, and schedule it only after the results are reliable.[^academy-openai]

### Test and Fix the Templates You Make

A template you built yourself usually works well when you use it. That is because you already know what to feed into it. However, if someone phrases the request a little differently or gives it slightly different material, it can falter.[^academy-skilltest]

So try making the same request twice. Once, use the template; the other time, send the request without the template. Put the two answers side by side and ask yourself: Is the version that used the template really better? If not, what did it miss?[^academy-skilltest]

Be specific about what needs fixing.[^academy-skilltest]

- Weak example: "Something feels off."
- Better example: "The tone is too stiff." "It skipped the summary at the top."

The better examples point to exactly what to fix, giving the AI something concrete to act on. Also, **change only one thing at a time**. That way, you can tell which change actually worked.[^academy-skilltest]

It does not have to be perfect from the start. The course notes that most skills are ready after just one or two rounds of tweaking.[^academy-skilltest]

<Quiz id="ch11-layers" />

## Handing Off Tables and Numbers

When analyzing numbers, the biggest worry is whether you can trust the results. For this, apply the method from the earlier section, ["Test Before You Hand It Off"](#test-before-you-hand-it-off), to your numbers.

Here is an example from the Anthropic course.[^academy-data] Rio, a program director at an organization that helps veterans, analyzes attendance and job placement results every quarter.

1. Rio gave the AI **last quarter's data, which Rio had already finished analyzing**.
2. Each time an answer came back, Rio compared it with Rio's own results and noted what was missing.
3. The AI correctly found the link between attendance and job placement. However, it missed an important insight in the program that combined housing assistance with job placement.
4. When Rio added, "Please also look at the program types separately," the AI caught that too.
5. Rio decided to always include that one line starting next quarter.

Try doing it like this:

```
The attached table is the raw sales data from last quarter. I already have my own analysis, and I want to see if you reach the same conclusions.
Calculate the month-by-month changes and the differences by branch, and show me how you calculated them step by step.
```

It is okay if you are not comfortable with numbers. Ask the AI to write Excel formulas or clean up messy tables. If a step comes up that you do not understand, keep asking it to explain. You need to be able to follow the process in order to verify the result.[^academy-data]

Even if the AI passes your comparison test, the responsibility is still yours. Check whether the numbers make common sense. Also, do not hide the fact that AI helped with the analysis.[^academy-data] Double-check important math with a calculator or Excel.

How you upload files and get charts differs by service. See [ChatGPT Chapter 11, "Handing Off Tables and Numbers"](/en/guide/11-chatgpt/11-expert.md#handing-off-tables-and-numbers-—-data-analysis) and [Claude Chapter 12, "Handing Off Tables and Numbers"](/en/guide/10-claude/12-expert.md#handing-off-tables-and-numbers).

<Quiz id="ch11-data" />

## Using AI to Learn

When you want to learn something, do not ask for the answer right away. Instead, ask the AI to guide you so you can think it through yourself. When you figure out the answer on your own, you learn the path to solving it at the same time.

```
I want to learn VLOOKUP in Excel. Don't give me the answer right away—ask me questions one at a time so I can think it through myself.
```

::: details What the reply roughly looks like (Example — click to expand)
This is an example created for this guide. Actual replies vary by service and situation.

> Sure, let's think it through together. First question: one table has product IDs and prices, and another table only has product IDs. If you were filling in the prices by hand, how would you do it?

If you answer, "I would look at the ID and find it in the first table to write it down," it continues like this:

> That's right. VLOOKUP does that exact job for you. So here is the next question: for Excel to look that up for you, what information would you need to tell it?

**Check if you got a good response**: Did it hold back the full formula at the start? Did it ask only one question at a time? Did the next question build on your answer?

:::

Having the AI ask you questions works on the same principle as [Chapter 5, "4. Have It Ask You Back"](05-prompt-patterns.md#_4-have-it-ask-you-first-—-flipped-interaction). Prompts for getting explanations tailored to your level are in the [Prompt Library, "Studying and Getting Explanations"](prompt-library.md#studying-and-learning). ChatGPT also has a dedicated Study Mode that turns on this style of teaching ([ChatGPT Chapter 11](/en/guide/11-chatgpt/11-expert.md#using-it-to-learn-—-study-mode)).

<Quiz id="ch11-learn" />

## Check in Proportion to the Weight of the Work

You learned the habit of checking results before using them in [Chapter 9, "Four Habits for Checking"](09-safety.md#four-habits-for-checking). Here, we will look at how closely to check and at which stage to check.

**You do not need to check every answer with the same level of intensity.** Match your review to the weight of the task.[^academy-openai] The last row of the table comes from the course guidelines, and the first three rows are everyday examples chosen by this guide.

| For a task like this | Check this much |
|---|---|
| Brainstorming club ideas | Skim and pick what you like |
| Drafting a notice or announcement | Check the facts, tone, and whether anything is missing |
| Summarizing an article or document | Compare against the original text |
| Work affecting health, money, jobs, or legal rights | Have an expert review thoroughly or follow an approved process |

**Check at each step, not just once at the end.** If a job takes multiple steps, pause briefly before moving to the next step.[^academy-openai] Ask yourself the following three questions. This guide picked these three from the course's CLEAR review checklist.[^academy-openai]

- **Facts**: Are the numbers, names, dates, and sources right?
- **Logic**: Do the "because... therefore..." connections make sense?
- **Tone**: Does it fit the person who will read it?

Checking at each step helps you catch misunderstandings early. That way, you do not have to redo the whole thing from scratch after it is finished.[^academy-openai]

If the logic feels shaky, point to that part and ask the AI to explain it.

```
I don't understand how you reached the conclusion in the second paragraph. Explain what evidence and assumptions led to it, and fix any weak spots.
```

What to look out for by output type (such as calculation methods in data analysis or sources in research reports) is collected in a table in [ChatGPT Chapter 11, "Check Before You Trust"](/en/guide/11-chatgpt/11-expert.md#checking-before-trusting).

<Quiz id="ch11-verify" />

## Try It Yourself

Just like in [Chapter 10](10-practice.md), use made-up information instead of real company data.

1. From the work you do these days, write down one task that fits the four conditions in "Picking Your First Task to Practice" (done often, clear result, easy to check, small harm if wrong).
2. Make up and write down a short notice email pretending you sent it last month, along with the rough notes from back then. You can also use the sample files `memo-last-month.txt` and `last-notice.txt` from the [Ongoing Project](practice-kit.md). Give only the notes to the AI and ask it to write the same email, then compare it with yours and jot down: "Did it include everything? Is the tone right? What is missing?"
3. Add one thing that was missing in step 2 to your instructions and ask the AI again. If it comes out right, save that line in your instructions or Project instructions.
4. Make up a 10-row table with dates, items, and amounts, and calculate the total for each item by hand first. Then give the same table to the AI, ask it to show its calculation steps, and compare the two results.
5. Using the VLOOKUP prompt from this chapter, pick one thing you want to learn lately and practice learning it by answering the AI's questions.

**Ongoing Project** ([Preparing for the Book Club](practice-kit.md)): If you did step 2 using the sample files, your project starts right here. You will find the next step at the end of each chapter in Stage 2. If you follow along with this project, you will finish Stage 2 with a complete November meeting notice package.

## Summary

- Using AI well requires judgment. Anthropic's course divides that judgment into Delegation, Description, Discernment, and Diligence (the 4Ds).
- At first, practice on tasks you do often, where the result is clear, checking is easy, and the harm of a mistake is small.
- Do not rely on gut feeling to decide whether to hand off a task—test the AI on work where you already know the answer. Even if it passes, checking and responsibility remain yours.
- Look at the shape of the work before picking a menu. Most of the time, a single clear prompt is enough.
- Save what you repeat in this order as needed: instructions → Project → template (Skill) → shared bundle. Test your template by asking once with it and once without it, and fix only one thing at a time.
- For number analysis, test the AI against past data first and ask it to show its calculation steps.
- Check in proportion to the weight of the task, and check at every step rather than only once at the end.

## Glossary

| Term | One-line meaning |
|---|---|
| AI Fluency | The ability to work well together with AI |
| Delegation | Deciding what you will do and what you will hand off to AI |
| Description | Clearly communicating the result and method you want |
| Discernment | Evaluating whether the result you got is accurate and useful |
| Diligence | Using AI responsibly, disclosing AI use, and owning the outcome |
| Evals | A way to test AI using tasks where you already know the answer |

<ChapterDone :chapter="11" />

Next chapter: You have completed Stage 1. Check your AI understanding level with the [Understanding Check Quiz](certificate.md), or move on to the Stage 2 guides for [ChatGPT](/en/guide/11-chatgpt/01-getting-started.md) and [Claude](/en/guide/10-claude/01-getting-started.md).

[^academy-4d]: Claude Academy course "Claude 101", lesson "Getting better results". "AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results (checked on 2026-10-26)
[^ways]: OpenAI, "How workers are unlocking new ways of working". Analysis showing that people include more examples and background and ask for verification more often when doing tasks outside their own occupation. https://openai.com/index/unlocking-new-ways-of-working (checked on 2026-10-24)
[^academy-eval]: Claude Academy course "Claude 101", lesson "Getting better results". "Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results (checked on 2026-10-26)
[^academy-tabs]: Claude Academy course "Claude 101", lesson "How you'll work with Claude on your desktop". "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (checked on 2026-10-26)
[^academy-layers]: Claude Academy course "Introduction to Claude Cowork", lesson "Get better results faster". "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (checked on 2026-10-26)
[^academy-skilltest]: Claude Academy course "Introduction to Claude Cowork", lesson "Validating skills for plugins". "When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." The lesson explains how to compare answers with and without a skill. This chapter broadened that same method to apply to other templates such as Project instructions (this guide's interpretation). https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins (checked on 2026-10-26)
[^academy-data]: Video in the Claude Academy course "Claude 101", lesson "Getting better results" (the lesson notes that the video is originally from the "AI Fluency for nonprofits" course). "Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results (checked on 2026-10-26)
[^academy-openai]: OpenAI Academy course text (requires login and registration). Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" (checked on 2026-10-26)
