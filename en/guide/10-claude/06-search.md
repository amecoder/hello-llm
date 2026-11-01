# Chapter 6. Search and Research — Getting Up-to-Date Information with Sources

> **One-line summary**: Use **web search** for things that happened today or information that changes often, and hand off big questions that need gathering and comparing multiple sources to
> **Research**. Either way, opening and checking the attached sources yourself is part of the deal.

The screens shown here are based on the web version as of October 2026. The new Claude interface is rolling out gradually right now, so menu names and locations may vary depending on your screen.

## Web Search — Having Claude Look Things Up on the Internet

AI only knows things up to the point it was trained ("knowledge cutoff" in [Stage 1, Chapter 1](../00-common/01-what-is-llm.md)).
So if you just ask about recent events like "this week's weather" or "the policy announced yesterday," it is easy to get a wrong answer.
**Web search** is a feature that lets Claude find up-to-date information on the internet to answer you.[^search]
You can use it on the free plan too.[^pricing]

There is nothing you need to turn on separately. The new interface has no web search toggle, and Claude searches on its own when it helps.[^search][^new] There was no "Web search (웹 검색)" in the "+" menu on a free account either.[^screen]

::: details If you are using the older interface (click to expand)
In the older interface, click "+" at the bottom left of the input box and choose "Web search (웹 검색)". When it is on, a checkmark appears next to it. Click it again to turn it off.[^search]

<!-- 스크린샷 필요: 옛 화면 입력창 「+」 메뉴에서 「웹 검색」에 체크 표시가 된 모습 -->
:::

If you want to make sure it searches, try writing "Search the web" in your prompt.[^search]

```
Search the web. Tell me the weather in Seoul this weekend broken down into Saturday and Sunday,
and show me the sites you used too.
```

For questions that need pictures, it sometimes shows **images** found through search next to the answer. There is no setting you need to turn on separately.[^search]

> Search here means **internet search**. Finding your past conversations is a different feature. See [Chapter 3](03-chats.md) and [Chapter 5](05-memory.md#referencing-past-chats).

<Quiz id="ch206-web-search" />

## Giving It a Link to Read

If there is a web page you want Claude to read, paste the **address** (URL, the internet address attached to each web page).
When web search is on, Claude reads the content of that page directly. This is called **web fetch**.[^fetch]

```
Read the article below and summarize in three lines only the parts that apply to a small restaurant like our shop.
https://www.example.com/news/12345
```

Having it summarize a long article in full **uses up a lot of your usage limit.**[^fetch]
On the free plan, your usage limit resets every 5 hours, and both search and fetch count toward this limit.[^fetch]
So think first about whether you need a full analysis or just the key points. Usage limits are covered in [Chapter 1](01-getting-started.md).

<Quiz id="ch206-fetch" />

## The Habit of Checking Sources

Answers from web search come with **citations** (labels showing where the information came from).
Every search answer includes citations, so you can verify the sources yourself.[^search]

![Screen asking "Search the web. Tell me the opening hours of the National Museum of Korea." in incognito mode. ① "Searched the web (웹 검색함)" above the answer, ② source badge "museum" at the end of a sentence, ③ notice below the input box saying "Not used for history, memory, or training Claude (기록, 메모리, Claude 학습에 사용되지 않습니다.)"](../../../guide/10-claude/assets/shot-13-web-search-marked.png)

This screenshot was taken in incognito mode (free plan). **The red numbers match the numbers in the list below.**

- ① **"Searched the web (웹 검색함)"** — A label showing that Claude looked on the internet. Click it to expand what it searched for.
- ② **Source badge** — The small tag at the end of a sentence ("museum", "segye", etc.) is the site that sentence came from.
- ③ A notice that because this is incognito mode, this conversation is not used for history, memory, or training.[^screen]

If you click ① and expand it once more, you can see the search query Claude used and the list of sites returned in the search results.

![Screen with "Searched the web (웹 검색함)" expanded. ① Search query used by Claude "국립중앙박물관 관람시간" (National Museum of Korea opening hours), ② list of 9 sites viewed from the search results](../../../guide/10-claude/assets/shot-13-web-search-sites-marked.png)

- ① The search query Claude actually used. It shortened your question to search.
- ② A list of 9 sites returned in the search results. It is a mix of government sites (mcst.go.kr, museum.go.kr), news articles, and personal sites.[^screen]

Skim through this list before reading the answer. You can gauge right away whether official sites are included.

When you hover your mouse over the ② source badge, an arrow appears and ① a small popup with the site address opens. Click the badge to open the original page in a new tab.[^screen]

![Screen hovering over the source badge "museum". ① Small popup showing the site address www.museum.go.kr, ② source badge with an arrow](../../../guide/10-claude/assets/shot-13-citation-hover-marked.png)

However, just having a link attached does not make an answer right.
As you learned in [Stage 1, Chapter 9](../00-common/09-safety.md#four-habits-for-checking), open the link and check numbers, dates, and names against the original text.
Once you open the link, ask yourself:

- **Does the link open?** Click the source to see if a real page comes up.
- **Does the original text say that?** Check whether the numbers and sentences in the answer are actually on the page.
- **When was it written?** Check the date to make sure it is not outdated information.
- **Who wrote it?** See whether it is an official agency or company page, or a personal blog.

If you do not like the sources, ask again like this:

```
Leave out personal blog sources from your last answer, and tell me again using only government or public agency sites.
Attach which page each piece of information came from.
```

For questions where location matters, like "good restaurants nearby," Claude may use an approximate location inferred from your **IP address** (a number assigned to each device connected to the internet).[^search] If you get results for the wrong area, write the neighborhood name directly.

<Quiz id="ch206-citations" />

## Research — Handing Off a Report

**Research** is a feature that digs deep into a single question.
It runs multiple searches in a row and decides what to look into next based on what it finds.[^research]
It is available on paid plans (Pro, Max, Team, Enterprise) on the web, desktop, and mobile apps.[^research]

### How to Start

Type `/deep-research` in the input box, or click "+" below the input box → choose "Research".[^new]

::: details If you are using the older interface (click to expand)
In the older interface, click "+" at the bottom left of the input box → "Research". When a blue indicator appears below the input box, it is turned on.[^research] Research requires **web search to be turned on** to work.[^research]

<!-- 스크린샷 필요: 「+」 → 「Research」를 켠 뒤 입력창 아래에 생긴 파란 표시 -->
:::

Even on the Korean screen, "Research" may appear in English as is.

![Screen where typing ① "/deep" in the input box brings up ② "deep-research" in the list, with ③ an English description next to it](../../../guide/10-claude/assets/shot-12-deep-research-marked.png)

This is the free plan screen. ① Even when you type just `/deep` in the input box, ② "deep-research" pops up in the list. ③ Next to it is an English description of when to use the feature.[^screen]
There was no "Research" in the "+" menu on a free account. Although the name showed up in the list, the help docs say Research is a paid plan feature.[^research] This guide did not test sending a Research request from a free account.

The more detailed your question, the better. Try putting in all five elements from [Stage 1, Chapter 4](../00-common/04-prompt-basics.md#the-5-elements-of-a-good-prompt).

```
Write a report comparing delivery app fees that a neighborhood side-dish shop can use.
- Audience: An owner running 1 shop
- What to compare: Brokerage fee, payment processing fee, advertising cost
- Format: A one-line conclusion at the very top, then a comparison table, and a list of sources at the end
- Prioritize 2026 materials, and mark any materials with unknown dates separately
```

::: details The answer you get looks roughly like this (example — click to expand)
This is an example created for this guide. Actual answers vary by service and over time.

> **One-line conclusion**: For an owner running 1 shop, App ○ is the best deal when you add up all three costs.
>
> | App | Brokerage fee | Payment fee | Ad cost | Source date |
> |---|---|---|---|---|
> | App A | ○% | ○% | From ○○ won/month | Month ○, 2026 |
> | App B | ○% | ○% | ○○ | Date unknown |
>
> **Sources**
> 1. (Source link) — Month ○, Day ○, 2026
> 2. (Source link) — Date unknown

**Check if you got a good result**: Did it come in the order of one-line conclusion → comparison table → source list? Are brokerage fees, payment fees, and ad costs all in the table? Did it prioritize 2026 materials and mark undated ones separately? For important numbers like fees, click the source links and check them yourself.

:::

Research can take several minutes.[^academy-research] So spending time polishing your question before sending it is well worth it. If you are not sure what to ask, ask Claude in a regular chat first before turning on Research:[^academy-research]

```
I'm thinking about opening a small side-dish shop in my neighborhood. I want to investigate this using Research—help me refine what question I should ask. Also ask me about conditions I need to decide on, like budget, area, and timeframe.
```

Try including conditions like budget, area, and timeframe.[^academy-research] Having conditions makes it easier for Research to find materials that fit your situation.

### Good to Know

- **It can use up your usage limit quickly.** The limit is the same as regular chats. However, because it gathers multiple sources and writes a long answer, it uses up your limit faster.[^research]
- **If it does not seem to be using Research,** tell it directly: "Claude, please use the research tool to..."[^research]
- **It also uses connected apps.** If you have turned on connectors (other apps connected to Claude, [Chapter 7](07-projects-tools.md)), it uses those tools automatically during Research without asking each time.[^research]
- **Starting on mobile searches only the web.** It skips connectors without telling you separately. If you need materials from your connected apps too, start on the web or desktop.[^research]
- **The model is fixed.** Regardless of which model you picked, a specific model set for Research runs.[^research]

The longer and more convincing a report looks, the easier it is to skip checking. Start with the numbers used in the conclusion and open the sources to verify them.

<Quiz id="ch206-research" />

## When to Use What

If you are unsure which feature to use, ask yourself before sending your question: "Can this be answered by looking it up once or twice? Does it need gathering multiple sources? Do I even need up-to-date information?"

**Extended thinking** is a feature that makes Claude think longer before answering. Where to turn it on is covered in [Chapter 2](02-screen-tour.md).

You can choose among them like this:[^when]

| In this case | What to pick | Example |
|---|---|---|
| One or two searches will give the answer | Web search | Weather, news, last night's game score |
| Needs deep reasoning without recent info | Extended thinking | Math problems, multi-angle analysis |
| Needs a report gathering multiple sources | Research | Comparing competing shops |

Research fits broad investigations that use tools five or more times over 1 to 3 minutes.[^when]

If you turn on extended thinking and Research **together**, Claude plans its approach first and then gathers information broadly to produce a longer report.[^when]

<Quiz id="ch206-when" />

## Try It Yourself

1. In a new chat, ask: "Search the web. Tell me about cultural events in my neighborhood this month." Write the name of your neighborhood directly.
2. Open two of the sources attached to the answer yourself and check whether the event dates match the original text.
3. Paste the address of an article you read recently and ask for a three-line summary.
4. If you are on a paid plan, adapt the delivery app fee example above to fit your own work and send it with Research. Pick one number used in the conclusion of the report you get and find it in the source.

**Continuing project** ([Preparing a Book Club](../00-common/practice-kit.md)): Ask "Search the web. Tell me how to reserve a seminar room at my neighborhood public library." Put in the name of your neighborhood directly. Open the sources yourself to check the operating hours and how to apply.

## Summary

- Ask for up-to-date information with web search. It works on the free plan too.
- In the new interface, Claude searches on its own (in the older interface, "+" → "Web search (웹 검색)"). To make sure it searches, write "Search the web".
- If you paste an address, it reads that page. Long articles use up a lot of your usage limit.
- Even with citations attached, it can still be wrong. Open the link and check it against the original text.
- Hand off big questions to Research (paid). Start with `/deep-research` or "+" → "Research".
- Use web search for simple facts, extended thinking for deep reasoning, and Research for gathering multiple sources.

## Glossary

| Term | One-line meaning |
|---|---|
| Web Search | A feature where Claude finds up-to-date information on the internet to answer |
| Web Fetch | A feature that reads the content of a page from a pasted address |
| Citation | A label showing where the information in an answer came from |
| URL | The internet address attached to each web page |
| IP Address | A number assigned to each device connected to the internet; shows approximate location |
| Research | A feature that runs multiple searches in a row and organizes them into a report |
| Extended Thinking | A feature that makes Claude think longer before answering |

<ChapterDone :chapter="206" />

Next chapter: [Chapter 7. Projects, Connectors, and Skills](07-projects-tools.md)

[^search]: Anthropic Help Center, "Enable and use web search". "You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:" / "A checkmark will appear next to “Web search” when it’s enabled." / "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." / "Claude selects images from web search results, powered by Bing, and displays them alongside its text response." / "Every response includes citations, so you can easily verify sources yourself." / "Claude may use your location (inferred from your IP address) when responding to a request for localized results." https://support.claude.com/en/articles/10684626 (checked on 2026-10-26)
[^fetch]: Anthropic Help Center, "Enable and use web search". "When “Web search” is toggled on, Claude can also retrieve content directly from web pages when provided with specific URLs." / "This can consume a significant portion of your usage limit, especially for lengthy content." / "As a free user, you have usage limits that reset every five hours." https://support.claude.com/en/articles/10684626 (checked on 2026-10-26)
[^pricing]: Anthropic pricing page, Free plan description. "Search the web, create files, and run code" https://claude.com/pricing (checked on 2026-10-26)
[^new]: Anthropic Help Center, "Claude Cowork and chat are one Claude". "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" https://support.claude.com/en/articles/16761823 (checked on 2026-10-26)
[^screen]: Verified directly on the Claude web interface (free plan, Korean). Input box "+" menu (no "Web search (웹 검색)" or "Research"), "Searched the web (웹 검색함)" label and source badges on an answer asked in incognito mode, www.museum.go.kr opening in a new tab when clicking the source, and "deep-research" appearing in the `/deep` list in the input box. (checked on 2026-10-27)
[^research]: Anthropic Help Center, "Use research on Claude". "It runs multiple searches that build on each other and decides what to look into next based on what it finds." / "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "Click the “+” button on the bottom left of your chat interface, then "Research." A blue indicator will appear on the bottom of the chat window." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." / "In this case, you can steer and prompt Claude to use Research by saying “Claude, please use the research tool to…”" / "During research, Claude can use tools from your connectors automatically, without asking for approval each time." / "When you start research in Claude Mobile, Claude only searches the web and doesn’t use your connectors." / "Research runs on Claude Opus 5.5 and falls back to Claude Opus 4.8 when needed." https://support.claude.com/en/articles/11088861 (checked on 2026-10-26)
[^when]: Anthropic Help Center, "When should I use web search, extended thinking, and research?". "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" / "Combining extended thinking with research allows Claude to both plan its approach thoughtfully and execute comprehensive information gathering" / "The research feature can synthesize information across multiple sources with proper citations and produces a longer final report." https://support.claude.com/en/articles/11095361 (checked on 2026-10-26)
[^academy-research]: Claude Academy "Claude 101" course, "Research for deep dives". "Include relevant constraints." / "a few minutes or more, depending on the question." / "If you're not sure how to frame your research question, you can even ask Claude to help you write a better Research prompt before enabling the feature." https://academy.claude.com/courses/claude-101/research-mode-for-deep-dives (checked on 2026-10-26)
