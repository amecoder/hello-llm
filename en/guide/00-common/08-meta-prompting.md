# Chapter 8. Meta Prompting — Letting the AI Write Your Prompt

> **One-line summary**: You do not have to write a good prompt all by yourself. Give your rough request to the AI and
> ask it to **"turn this into a good prompt."** Just make sure you read the AI's result yourself before you send it.

## What Is Meta Prompting?

From [Chapter 4](04-prompt-basics.md) to [Chapter 7](07-structured-prompts.md), you learned the parts of a good request (goal, context, audience, format, constraints), several patterns, and how to split a prompt into sections.
It is hard to memorize all of these and follow them every time. So there is a way to **leave the job of writing the prompt to the AI**.

A **prompt that makes the AI write or fix a prompt** is called **meta prompting**.
"Meta" means "about itself." It means a question about a question, or a prompt about a prompt.

AI companies use this method too. OpenAI, the maker of ChatGPT, has a separate practice screen for developers (Playground, a developer site different from ChatGPT).
OpenAI shared that the Generate button on that screen works through a **meta-prompt** (a prompt that instructs the AI to create or fix a good prompt).[^openai-gen]
Research also shows that instructions written by an AI work just as well as—and sometimes better than—instructions written by people.[^ape]

![Meta prompting order: My rough request written as it came to mind → AI organizes it into a structured prompt → I read, edit, and fill in the blanks → Paste and send in a new chat. Only let the AI organize it, and check it yourself before sending](../../../guide/00-common/assets/ch8-meta.svg)

In this chapter, we look at four methods based on how you use them.

| Method | When to use it |
|---|---|
| 1. Just have it organize | When you know what you want to say, but your thoughts are scattered |
| 2. Build it by answering questions | When you do not even know what to write |
| 3. Fix a prompt that did not work | When you made a request, but did not get the answer you wanted |
| 4. Turn it into a reusable template | When you do the same kind of task often |

<Quiz id="ch8-what" />

## 1. Just Have It Organize

This is the most basic way. Give the AI a rough request written as it came to mind, and ask it to split the request into the sections you learned in [Chapter 7](07-structured-prompts.md).

**Step 1 — Just have it organize**

```
Turn my request between the dividers below into a prompt organized with Markdown headings.
Put the background under "## Context", the task under "## Task", and the answer format under "## Answer Format". If there is pasted material, wrap it with dividers under "## Material".
If any information is missing, mark it as a blank like [Please write ○○ here].
Do not run the request yet—just show me the organized prompt.

---
Plan a Jeju trip with my parents next week my dad has bad knees
we have a rental car and it's 2 nights 3 days include good restaurants and places to go if it rains
---
```

Two sentences are important here.
- **"mark it as a blank"**: Without this, the AI will make up plausible details to fill in the missing information.
- **"Do not run the request yet"**: Without this, the AI will organize the prompt and immediately plan the trip too.

**Step 2 — Fill in the blanks and send it again**

In the prompt the AI gave back, fill in the blanks (for example: departure date, budget). Then paste and send it in a **new chat**.
As we saw in [Chapter 6](06-conversation.md), you should send it in a new chat so traces of your organizing chat do not mix into the answer.

> Try changing "with Markdown headings" to "with XML tags." Using the same method, you can also get an XML-tag prompt from [Chapter 7](07-structured-prompts.md).
> That style is clearer when you are pasting several long pieces of material.

<Quiz id="ch8-tidy" />

## 2. Build It by Answering Questions

If you do not know what to write, let the AI **ask you questions**.
This uses the Flipped Interaction ("Ask Me Back" (되묻게 하기)) pattern from [Chapter 5](05-prompt-patterns.md) to build a prompt.

```
I want to ask the AI for promotional copy for our neighborhood side-dish shop.
But I do not know what information I need to give to get a good answer.
Ask me questions, one at a time, about what you need to build a good prompt.
When the questions are done, gather my answers and build a prompt organized with Markdown headings.
```

The AI will ask one question at a time, like "What is your shop's signature dish?" or "Where will you use this copy? Flyers, Instagram?"
As you answer, **conditions you had not thought of** (length, tone, target customers) get filled in naturally.

> **If the questions never end**: Set a limit from the start by saying, "Ask up to 5 questions only."

<Quiz id="ch8-interview" />

## 3. Fix a Prompt That Did Not Work

Did you make a request and get an off-target answer? When that happens, show the AI **both your prompt and the answer you got**, and ask what went wrong.
If you only show the answer, the AI can only guess where the problem was.

```
I made a request with "My Prompt" below, and I got "Answer Received" back.
I wanted an easy explanation that an elementary school child could read, but it came out too hard.

1. Briefly explain what was missing in my prompt that caused this.
2. Show me a fixed prompt. Mark the changed parts in bold.

## My Prompt
---
Explain photosynthesis
---

## Answer Received
---
(Paste the answer you received)
---
```

With this method, **you learn the reason along with the fixed prompt**.
In the example above, the AI will explain that you did not write who the reader (audience) is. That is one of the 5 elements from [Chapter 4](04-prompt-basics.md).
After you do this a few times, you will stop leaving it out from the start.

> **Always write "what you wanted."** If you only say "The answer is not great, fix it," the AI will not know what standard to use to fix it.
> It is just like asking for edits in [Chapter 6](06-conversation.md). You need to say what should change, why, and how.

<Quiz id="ch8-fix" />

## 4. Turn It into a Reusable Template

Do you **repeat the same task**, like writing a weekly work report or organizing meeting notes every time? If so, turn a prompt that worked well into a **template**.
A template is a prompt that leaves only the changing parts as blanks.

```
I like how we organized the meeting notes in our chat just now.
So I can use the same way next time, make a prompt template that leaves the parts that change each time
as bracketed blanks like [Meeting Date] and [Original Meeting Notes].
```

Save the template the AI gives you in a notes app. Next time, you only need to fill in the blanks and send it in a new chat.
A marker like `[ ]` that shows a blank is called a **placeholder**.

> If a "Handoff Note" (인계 메모) from [Chapter 6](06-conversation.md) passes the content of a chat to the next chat, a template passes your **way of asking** so you can use it again next time.

<Quiz id="ch8-template" />

## Things to Watch Out For

**1. The AI slips in conditions you never mentioned**

While organizing, the AI will sometimes write in random values like "Budget: 500,000 KRW" or "9:00 AM departure."
Before you send the organized prompt, read it from start to finish and ask yourself: "Did I say this?" If there is **anything you did not say**, delete or fix it.
This is the most important habit in this chapter.

**2. Longer does not mean better**

When you use meta prompting, your prompt quickly grows several times longer. For a short request, this actually becomes a burden.
There is no need to make the AI organize "Recommend a lunch menu." Judge by whether the result actually got better, not by the length.

**3. An organized prompt still needs checking**

Just because the AI made the prompt does not mean it is the right answer. You might still dislike the answer you get from that prompt.
When that happens, have the AI fix it again like in Section 3, or edit a line or two yourself. You do not need to build a perfect prompt in one try.

<Quiz id="ch8-caution" />

## Try It Yourself

Think of one recent request you made to an AI where **the answer was disappointing**.
If nothing comes to mind, you can start by sending a short request like "Explain photosynthesis" or "Write a cover letter" first, and use that answer.

1. Show that request to the AI using the method in Section 3, and get an explanation of what was missing along with a fixed prompt.
2. In the fixed prompt, mark **anything you did not say**. How many places are there?
3. Fix the marked parts the way you want, send the prompt in a new chat, and compare the result with your first answer.
4. If the result is good, turn it into a template using the method in Section 4 and save it in your notes app.

## Summary

- Meta prompting is leaving the job of writing or fixing a prompt to the AI.
- When your thoughts are scattered, just have the AI organize them; when you do not know what to write, build the prompt by answering the AI's questions.
- When a prompt does not work, show both the answer you got and what you wanted, and have the AI fix it.
- For tasks you do often, make a template with blanks and reuse it.
- Always read the prompt before sending to check if the AI added anything you did not say.

## Glossary

| Term | One-line meaning |
|---|---|
| Meta Prompting | Having the AI create or polish a prompt |
| Meta-prompt | A prompt that instructs the AI to create or fix a good prompt |
| Flipped Interaction | A pattern where you let the AI ask you questions ([Chapter 5](05-prompt-patterns.md)) |
| Prompt Template | A reusable prompt that leaves only the changing parts as blanks |
| Placeholder | A marker that shows a blank to fill in later. Example: `[Meeting Date]` |

<ChapterDone :chapter="8" />

Next chapter: [Chapter 9. Using AI Safely — Hallucinations, Personal Info, Copyright, and Hidden Instructions](09-safety.md)

---

[^openai-gen]: OpenAI, "Prompt generation". "A meta-prompt instructs the model to create a good prompt based on your task description or improve an existing one." https://developers.openai.com/api/docs/guides/prompt-generation (checked on 2026-10-21)
[^ape]: Zhou et al., "Large Language Models Are Human-Level Prompt Engineers", 2022. Using a method where an AI generates candidate instructions and picks the one that works best (APE), it matched or beat human-written instructions on 19 out of 24 tasks. https://arxiv.org/abs/2211.01910 (checked on 2026-10-21)
