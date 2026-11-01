# Chapter 2. Why Is Everyone Talking About It?

> **In short**: Anyone can now use AI with everyday language—something only experts could do before.

## It Looks Sudden, But It Wasn't

AI research has been going on for decades. The turning point that led to today's LLMs was a single research paper.
In 2017, Google researchers published "Attention Is All You Need."[^1]
This paper introduced a structure called the **Transformer**. Thanks to this structure, it became possible to train AI on massive amounts of text efficiently.
Older methods had to read a sentence one word at a time, from start to finish. A Transformer looks at how all the words in a sentence relate to each other **all at once**. That made it possible to split the work across many computers and train much faster.
Most LLMs used today are built on this structure. You can see how a Transformer works in the visual explainer videos under "Watch and Learn" below.

Still, it took another five years before everyday people could feel the difference for themselves.

<Quiz id="ch2-origin" />

## November 2022: ChatGPT

On November 30, 2022, OpenAI released ChatGPT for free.[^2]
You didn't need any special setup or training. You just visited a website and talked to it like a messaging app.

The response was explosive. According to an analysis by the investment bank UBS, ChatGPT reached an estimated
100 million monthly users in January 2023—just two months after launch. At the time,
it was named the fastest-growing consumer app in history.[^3]

After that, companies like Anthropic (with Claude) and Google (with Gemini) released similar services, and the race began.

![2017 Transformer paper → Nov 2022 ChatGPT free launch → Jan 2023 ~100M monthly users (est.) → Competition begins with Claude, Gemini, and others. It took 5 years from the technical breakthrough to everyday use.](../../../guide/00-common/assets/ch2-timeline.svg)

<Quiz id="ch2-chatgpt" />

## What Changed So Much?

### 1. You Can Give Computers Tasks in Everyday Language

In the past, getting a computer to do work meant learning a programming language or memorizing specific menus and buttons.
With an LLM, you just say what you want.

```
Make a table from these meeting notes showing who is doing what, and by when.
```

### 2. It Handles Almost Any Text Task, Not Just One

A translator only translated. A spell checker only checked spelling.
With a single LLM, you can translate, summarize, write, ask questions, brainstorm ideas, and even write code.

### 3. Low Cost and Easy Access

Most services let you start for free. You can also use them as smartphone apps.
Anyone can now try out something that feels like having a personal assistant or private tutor.

<Quiz id="ch2-change" />

## The Controversies That Followed

The buzz isn't just about excitement—there are real concerns too. Knowing both sides helps you keep a balanced view.

| Issue | What It's About |
|---|---|
| Jobs | Worry that jobs like writing, translation, and customer support could be replaced or reshaped by AI |
| Accuracy | The risk of spreading false information due to hallucinations, as seen in [Chapter 1](01-what-is-llm.md) |
| Copyright | Questions over the rights to the text and images AI trained on, and who owns what AI creates |
| Privacy | Concerns about how the things you type into a chat are stored and used |
| Education | The problem of students handing their homework over to AI |

This guide doesn't pretend these concerns don't exist. You'll learn practical ways to stay safe in [Chapter 9, "Using It Safely"](09-safety.md).

<Quiz id="ch2-issues" />

## Watch and Learn

All of these videos are in Korean. Watch them in order to go from easy to more advanced topics.

**[[ChatGPT] It Doesn't Get Easier Than This: 'ChatGPT'](https://www.youtube.com/watch?v=i1VqqX4iAZ0)** · Study King Genius Hong Jin-kyung · Science YouTuber Orbit (from Unreliable Science) explains in plain language what ChatGPT is and why it's such a big deal. It also compares how long it took to reach 1 million users: 3.5 years for Netflix, 2.5 months for Instagram, and just 5 days for ChatGPT (9 min, 2023 video)

<YouTube id="i1VqqX4iAZ0" title="[ChatGPT] It Doesn't Get Easier Than This: 'ChatGPT'" />

**[Transformers, the tech behind LLMs - DL5](https://www.youtube.com/watch?v=g38aoGttLhI)** · 3Blue1Brown Korean · The official Korean dub that visually explains how text flows inside a Transformer. **Watching just the first 7 minutes is enough.** It covers predicting the next word, chopping text into pieces, and turning words with similar meanings into nearby numbers. After that, it gets into matrices and math equations (27 min)

<YouTube id="g38aoGttLhI" title="Transformers, the tech behind LLMs - DL5" />

**[Attention in transformers, visually explained - DL6](https://www.youtube.com/watch?v=_Z3rXeJahMs)** · 3Blue1Brown Korean · The follow-up to the video above, covering "attention"—how words look at each other. It's a bit challenging. The key is the example in **the first 5 minutes**. It shows how putting "Eiffel" before "tower" shifts the meaning toward the Eiffel Tower (26 min)

<YouTube id="_Z3rXeJahMs" title="Attention in transformers, visually explained - DL6" />

## Try It Yourself

Ask an LLM about this technology itself. Don't just take its answer at face value. Check whether the dates and numbers are right.

```
Tell me the date ChatGPT was first released, and name three companies that launched similar services afterward.
Include a source for each one.
```

Compare the date the LLM gives you with the footnotes in this chapter. It might be right, or it might be wrong.
Does the date match the footnote? Does the source it gave you actually exist? Ask yourself questions like these.
**The habit of checking is the single most important habit in this entire guide.**

## Key Takeaways

- The 2017 Transformer paper was the technical turning point, and the 2022 ChatGPT launch brought AI to the public.
- The core shift is that you can now tell a computer to do almost any text task using everyday language.
- Keep in mind the ongoing debates around jobs, accuracy, copyright, and privacy.

<ChapterDone :chapter="2" />

Next chapter: [Chapter 3. Why Learn It?](03-why-learn.md)

---

[^1]: Vaswani et al., "Attention Is All You Need", published on arXiv (an open site where papers are shared before peer review) in June 2017. https://arxiv.org/abs/1706.03762 (checked on 2026-10-20)
[^2]: OpenAI, "Introducing ChatGPT", 2022-11-30. https://openai.com/index/chatgpt/ (checked on 2026-10-20)
[^3]: Reuters, "ChatGPT sets record for fastest-growing user base - analyst note", 2023-02-01. https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/ (checked on 2026-10-20)
