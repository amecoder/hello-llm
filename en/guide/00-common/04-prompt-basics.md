# Chapter 4. Prompt Basics

> **One-line summary**: A good prompt is like asking a capable new coworker for help.
> They are smart, but they know nothing about your situation.

## What Is a Prompt?

A **prompt** is the request you send to the AI. Everything you type into the chat box is a prompt.

In [Chapter 1](01-what-is-llm.md), we said that the AI "doesn't know your situation." So the core of a good prompt is
**telling the AI what it doesn't know**.

Imagine handing a task to a capable new coworker. If you just say, "Write a report for me," they will ask questions back.
They don't know what the report is about, who will read it, or how long it should be.
Most of the time, the AI won't ask back—it will just guess and write. So tell it up front.

<Quiz id="ch4-what" />

## The 5 Elements of a Good Prompt

You don't need to include every element every time. Use this list as a checklist when you aren't happy with the answer. Just look for what's missing.

| Element | Question | Example |
|---|---|---|
| **1. Goal** | What do you want? | "Write a refusal email" |
| **2. Context** | What is the situation? | "A partner company asked to push the delivery deadline back by 2 weeks" |
| **3. Audience** | Who will read it? | "The recipient is a department head at a partner company we've worked with for 10 years" |
| **4. Format** | What should it look like? | "Under five sentences, in a polite and respectful tone" |
| **5. Constraints** | What to include or avoid? | "Mention that we look forward to working together next time. Don't apologize too much" |

![Five elements make a good prompt: Goal (what you want), Context (what the situation is), Audience (who will read it), Format (what shape it takes), and Constraints (what to follow or avoid). You don't need all five every time—use them as a checklist when the answer falls short](../../../guide/00-common/assets/ch4-five-elements.svg)

Putting all five elements together looks like this:

```
A partner company asked to push the delivery deadline back by 2 weeks, but write a reply
saying that's difficult because of our launch schedule. The recipient is a department head at a partner company we've worked with for 10 years.
Keep it under five sentences in a polite, respectful tone, and mention that we look forward to working together next time.
Don't apologize too much.
```

<Quiz id="ch4-five" />

## Learn by Comparing Before and After

### Example 1. Summarizing

**Weak prompt**

```
Summarize this article.
```

**Good prompt**

```
I want to share the article below in our company group chat. Summarize the key points in three lines
so busy teammates can read it in 30 seconds, and add one line on what our team (online marketing) should take away from it.

[Paste article here]
```

The good prompt adds four things: context (sharing in the group chat), audience (busy teammates), format (three lines + one line), and goal (takeaway for our team).

### Example 2. Getting an Explanation

**Weak prompt**

```
What is an exchange rate?
```

**Good prompt**

```
I'm a high school student reading economic news for the first time. Explain what an exchange rate is using an easy analogy.
Give me one example with numbers showing why a rising exchange rate is bad for me when I travel abroad,
and finish with three things that are good to know when reading news articles about exchange rates.
```

The good prompt adds two things: audience (a high school student new to economic news) and format (an analogy + a number example + three tips).

The answers you get will differ roughly like this. Actual answers vary by service and each time you ask.

| | Answer to the weak prompt | Answer to the good prompt |
|---|---|---|
| First sentence | "An exchange rate is the rate at which one country's currency is exchanged for another's, determined by supply and demand in the foreign exchange market…" | "An exchange rate is the 'price tag' when you swap our money for another country's money." |
| Example | Almost none | "If 1 dollar goes up from 1,300 won to 1,400 won, you have to pay 140,000 won instead of 130,000 won for a $100 hotel room." |
| After reading | Full of jargon, hard to relate to | Connects to daily life and makes sense right away |

### Example 3. Brainstorming Ideas

**Weak prompt**

```
Suggest a name for a shop.
```

**Good prompt**

```
I'm naming a small handmade bagel shop opening in a residential neighborhood.
The main customers are commuters on their way to work in the morning and families on weekends.
Suggest 10 easy-to-pronounce names in Korean or English, and add one line for each explaining the vibe.
Include the word "bagel" in no more than 3 of the names.
```

The good prompt adds four things: context (neighborhood and business type), audience (customer group), format (10 names + one-line description), and constraints (word limit).

<Quiz id="ch4-compare" />

## Three Habits You Can Use Right Away

1. **Start with "I am ___, and I'm trying to ___."** That single sentence already packs in both context and goal.
2. **Use numbers to describe the shape you want.** Say "in three lines" instead of "short," and "10 ideas" instead of "a lot."
3. **If you don't like the answer, don't start over from scratch—ask the AI to revise it in a follow-up.** For example:
   "The second sentence sounds too stiff. Make it a little softer."

<Quiz id="ch4-habits" />

## Try It Yourself

Pick something you are actually working on right now, and fill in the blanks below to build a prompt.

```
I am [who you are], and I'm trying to [what you want to do].
[Describe the situation].
For [who will read it / who it is for],
please create [desired outcome] in [desired format and length].
[What must be included or avoided].
```

Then compare the result with what you get when you ask in a single line without the blanks. Which one fits your situation better? Which one needs less editing?

## Key Takeaways

- The core of a prompt is telling the AI about your situation—the part it doesn't know.
- Use the five elements—Goal, Context, Audience, Format, and Constraints—as a checklist.
- It doesn't have to be perfect on the first try. Keep the conversation going and refine the answer.

<ChapterDone :chapter="4" />

Next chapter: [Chapter 5. Prompt Patterns](05-prompt-patterns.md)
