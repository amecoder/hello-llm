# 第6章 搜索与研究——连同来源一起获取最新信息

> **一句话总结**：今天发生的事、经常变化的信息，用**网页搜索**；需要汇集多份资料来比较的大问题，就交给**研究**（Research）。
> 不管用哪一种，都要把附带的来源亲自打开看一看，这才算完整的一套。

界面以 2026 年 10 月的网页版为准。现在新的 Claude 界面正在陆续推送，所以菜单名称和位置可能因界面而异。

## 网页搜索——让 Claude 去网上找

AI 只知道它学习到某个时间点为止的内容（[第1阶段第1章](../00-common/01-what-is-llm.md)里的"知识截止时间"）。
所以像"这周的天气""昨天发布的政策"这样的近期事情，直接问很容易答错。
**网页搜索**（web search）是让 Claude 去互联网上查找最新信息再回答的功能。[^search]
免费套餐也可以使用。[^pricing]

不需要另外打开什么。新界面里没有网页搜索的开关，Claude 会在有帮助时自己去搜索。[^search][^new] 免费账号的「+」菜单里也没有「网页搜索」。[^screen]

::: details 如果你在用旧界面（点击展开）
在旧界面里，点输入框左下角的「+」，选择「网页搜索」。打开后，旁边会出现一个勾选标记。再点一下就关闭了。[^search]

<!-- 需要截图：旧界面输入框「+」菜单里「网页搜索」被勾选的样子 -->
:::

如果一定要它搜索，可以在提示词里写上"在网上搜索"。[^search]

```
请在网上搜索。告诉我这个周末首尔的天气，分星期六和星期日说明，
并把参考过的网站也一起给我。
```

遇到需要照片的问题，它有时会把搜索到的**图片**放在回答旁边。不需要另外设置。[^search]

> 这里说的搜索是**互联网搜索**。查找我过去的对话是另一个功能。请看[第3章](03-chats.md)和[第5章](05-memory.md#参考过往对话)。

<Quiz id="ch206-web-search" />

## 给它链接，让它去读

如果有想让它读的网页，就把**网址**（URL，每个网页都有的互联网地址）粘贴进来。
如果网页搜索是打开的，Claude 会直接去读取那个网页的内容。这叫做**网页抓取**（web fetch）。[^fetch]

```
请读下面这篇报道，只把与我们店这样的小饭馆有关的内容整理成三行。
https://www.example.com/news/12345
```

让它整篇总结一篇很长的文章，会**消耗很多用量。**[^fetch]
免费套餐的使用额度每 5 小时重新补满一次，搜索和抓取也算在这个额度里。[^fetch]
所以请先想一想，是需要完整分析，还是只要知道要点就行。使用额度在[第1章](01-getting-started.md)里讲。

<Quiz id="ch206-fetch" />

## 核对来源的习惯

通过网页搜索得到的回答，会附上**引用**（citation，标明内容取自哪里的标记）。
每一个搜索得到的回答都有引用，所以你可以亲自核对来源。[^search]

![在隐身模式下问"请在网上搜索。告诉我国立中央博物馆的参观时间。"的界面。① 回答上方的「已搜索网页」，② 句末的来源标记「museum」，③ 输入框下面"不会用于历史记录、记忆和 Claude 的训练"的提示](../../../guide/10-claude/assets/shot-13-web-search-marked.png)

这是在隐身模式下拍的界面（免费套餐）。**红色编号对应下面列表里的同号内容。**

- ① **「已搜索网页」**——表示 Claude 在互联网上查找过。点一下，就会展开它找了什么。
- ② **来源标记**——句末的小标签（「museum」「segye」等）就是这句话取自的网站。
- ③ 提示这是隐身模式，所以这个对话不会用于记录、记忆和训练。[^screen]

点开 ① 再展开一次，就能看到 Claude 用的搜索词和搜索结果里出现的网站列表。

![展开「已搜索网页」的界面。① Claude 用的搜索词「国立中央博物馆 参观时间」，② 作为搜索结果查看的 9 个网站的列表](../../../guide/10-claude/assets/shot-13-web-search-sites-marked.png)

- ① 是 Claude 实际用的搜索词。它把我的问题缩短后进行了搜索。
- ② 是作为搜索结果出现的 9 个网站的列表。里面混有政府网站（mcst.go.kr、museum.go.kr）、新闻报道和个人网站。[^screen]

读回答之前，先浏览一下这个列表。这样可以先估计里面有没有官方网站。

把鼠标放在 ② 来源标记上，会出现一个箭头，并弹出一个写着 ① 网站地址的小窗口。点击这个标记，原来的网页会在新标签页里打开。[^screen]

![把鼠标放在来源标记「museum」上的界面。① 弹出写着网站地址 www.museum.go.kr 的小窗口，② 带箭头的来源标记](../../../guide/10-claude/assets/shot-13-citation-hover-marked.png)

不过，仅仅有链接，并不代表回答就是对的。
正如[第1阶段第9章](../00-common/09-safety.md#核对的四个习惯)里学过的，数字、日期、名字，要打开链接和原文对照。
打开链接后，请问问自己：

- **链接能打开吗？** 点来源，看是否真的出现了那个网页。
- **原文里有这句话吗？** 找一找回答里的数字和句子，在网页上是不是一模一样。
- **是什么时候写的？** 看一下写作日期，确认不是过时的信息。
- **是谁写的？** 看看是官方机构、公司的网页，还是个人博客。

如果对来源不满意，可以这样重新请求。

```
刚才的回答里，去掉个人博客的来源，只参考政府或公共机构的网站，重新告诉我。
每条内容都请标明取自哪个网页。
```

像"附近的餐馆"这样地点很重要的问题，它可能会使用根据 **IP 地址**（连接互联网的每台设备都有的编号）推测出的位置。[^search] 如果出现了不对的地区的结果，请直接写上小区或街道的名字。

<Quiz id="ch206-citations" />

## 研究——把报告交给它做

**研究**（Research）是深入挖掘一个问题的功能。
它会连续搜索很多次，并根据找到的内容，自己决定接下来看什么。[^research]
付费套餐（Pro·Max·Team·Enterprise）可以在网页、桌面端、手机应用里使用。[^research]

### 开始的方法

在输入框里输入 `/deep-research`，或者点输入框下面的「+」→「Research」。[^new]

::: details 如果你在用旧界面（点击展开）
在旧界面里，点输入框左下角的「+」→「Research」。输入框下面出现蓝色标记，就是打开了。[^research] 研究**需要网页搜索是打开的**才能运行。[^research]

<!-- 需要截图：打开「+」→「Research」后，输入框下面出现的蓝色标记 -->
:::

即使在韩语界面里，「Research」也可能直接显示为英语。

![在输入框里输入到 ① 「/deep」时，② 「deep-research」出现在列表里，③ 旁边显示英文说明的界面](../../../guide/10-claude/assets/shot-12-deep-research-marked.png)

这是免费套餐的界面。① 在输入框里只输入 `/deep`，② 「deep-research」就会出现在列表里。③ 旁边用英语写着什么时候用这个功能。[^screen]
免费账号的「+」菜单里没有「Research」。列表里虽然能看到这个名称，但帮助文档说研究是付费套餐的功能。[^research] 本指南没有在免费账号里发送过研究。

问题越详细越好。请把[第1阶段第4章](../00-common/04-prompt-basics.md#好提示词的5个要素)里的五个要素原样放进去。

```
请写一份比较社区小菜店能用的外卖 App 手续费的报告。
- 对象：经营 1 家店的老板
- 要比较的：平台服务费、支付手续费、广告费
- 格式：最前面一行结论，然后是对比表，最后是来源列表
- 优先使用 2026 年的资料，不知道日期的资料请单独标出
```

::: details 收到的回答大概是这样（示例——点击展开）
这是本指南编写的示例。实际的回答会因服务和每次情况而不同。

> **一行结论**：如果是经营 1 家店的老板，把三项费用加起来，最少的那个 App ○ 更有利。
>
> | App | 平台服务费 | 支付手续费 | 广告费 | 资料日期 |
> |---|---|---|---|---|
> | App A | ○% | ○% | 每月 ○○韩元起 | 2026 年○月 |
> | App B | ○% | ○% | ○○ | 日期不明 |
>
> **来源**
> 1. （来源链接）——2026 年○月○日
> 2. （来源链接）——无法得知日期

**检查一下有没有收到想要的结果**：是按一行结论 → 对比表 → 来源列表的顺序给出的吗？平台服务费、支付手续费、广告费都放进表格了吗？是不是优先用了 2026 年的资料，不知道日期的资料有没有单独标出？像手续费这样重要的数字，请点开来源链接亲自确认。

:::

研究可能要花几分钟。[^academy-research] 所以发送前花时间打磨问题，并不浪费。如果不知道该问什么，在打开研究之前，可以先在普通对话里这样问。[^academy-research]

```
我在考虑在我们小区开一家小菜店。我想用研究来调查这件事，请和我一起打磨一下，用什么样的问题交给它比较好。预算、地区、期间这些需要我来定的条件，也请问我。
```

请把预算、地区、期间这样的条件放进去。[^academy-research] 有了条件，研究就更容易找到符合我的情况的资料。

### 需要知道的事

- **用量可能很快用完。** 额度和普通对话是一样的。不过它会汇集多个来源写出很长的回答，所以用得更快。[^research]
- **如果它好像没有做研究，** 就直接说"请使用研究工具来……"。[^research]
- **连接的应用也会用到。** 如果你打开了连接器（连接到 Claude 的其他应用，[第7章](07-projects-tools.md)），研究过程中就会不每次询问，直接使用那些工具。[^research]
- **在手机上开始的话，只会搜索网页。** 它跳过连接器时，也不会另外告诉你。如果还需要所连接应用里的资料，请在网页或桌面端开始。[^research]
- **模型是固定的。** 不管你选了哪个模型，运行的都是为研究指定的模型。[^research]

报告越长、越像那么回事，就越容易跳过核对。请从结论里用到的数字开始，打开来源对照一下。

<Quiz id="ch206-research" />

## 什么时候用什么

如果搞不清该用哪个功能，发送问题之前先问问自己。"答案查一两次就能得到吗？需要汇集多份资料吗？真的需要最新信息吗？"

**扩展思考**（extended thinking）是让它在回答之前思考更久的功能。在哪里打开，[第2章](02-screen-tour.md)里讲过。

可以这样区分着选。[^when]

| 这种时候 | 选这个 | 例子 |
|---|---|---|
| 搜索一两次就能得到答案 | 网页搜索 | 天气、新闻、昨晚的比赛结果 |
| 不需要最新信息，但要深入思考 | 扩展思考 | 数学题、多角度分析 |
| 需要汇集多份资料写成报告 | 研究 | 比较竞争对手的店 |

研究适合在 1~3 分钟内使用五次以上工具的大范围调查。[^when]

把扩展思考和研究**一起**打开，Claude 会先制定计划，再广泛收集，给出更长的报告。[^when]

<Quiz id="ch206-when" />

## 亲手试一试

1. 在新聊天里问"请在网上搜索。告诉我我们小区这个月的文化活动"。小区的名字要自己写。
2. 亲自打开回答里附的两个来源，确认活动日期和原文一致。
3. 粘贴一个你最近读过的报道的网址，请它总结成三行。
4. 如果是付费套餐，把上面的外卖 App 手续费例子改成适合你工作的样子，用研究发送。从收到的报告结论里挑一个数字，到来源里去找一找。

**连续任务**（[筹备读书会](../00-common/practice-kit.md)）：问"请在网上搜索。告诉我我们小区区立图书馆研讨室的租借方法"。小区的名字要自己填。营业时间和申请方法，请打开来源亲自确认。

## 小结

- 最新信息用网页搜索来问。免费套餐也可以。
- 在新界面里，Claude 会自己去搜索（旧界面是「+」→「网页搜索」）。一定要它搜索的话，就写"在网上搜索"。
- 粘贴网址，它就会去读那个网页。长文章会多耗用量。
- 就算附了引用，也可能出错。打开链接和原文对照。
- 大问题交给研究（付费）。用 `/deep-research` 或「+」→「Research」开始。
- 简单的事实用网页搜索，需要深入思考的用扩展思考，需要汇集多份资料的用研究。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Web Search | 网页搜索 | Claude 去互联网上查找最新信息再回答的功能 |
| Web Fetch | 网页抓取 | 读取粘贴进来的网址对应的网页内容的功能 |
| Citation | 引用 | 标明回答内容取自哪里的标记 |
| URL | 网址 | 每个网页都有的互联网地址 |
| IP Address | IP 地址 | 连接互联网的每台设备都有的编号，可以大致得知位置 |
| Research | 研究 | 连续多次搜索，并整理成报告的功能 |
| Extended Thinking | 扩展思考 | 让它在回答之前思考更久的功能 |

<ChapterDone :chapter="206" />

下一章：[第7章. 项目、连接器与技能](07-projects-tools.md)

[^search]: Anthropic 帮助文档，「Enable and use web search」. "You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:" / "A checkmark will appear next to “Web search” when it’s enabled." / "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." / "Claude selects images from web search results, powered by Bing, and displays them alongside its text response." / "Every response includes citations, so you can easily verify sources yourself." / "Claude may use your location (inferred from your IP address) when responding to a request for localized results." https://support.claude.com/en/articles/10684626 (确认日期 2026-10-26)
[^fetch]: Anthropic 帮助文档，「Enable and use web search」. "When “Web search” is toggled on, Claude can also retrieve content directly from web pages when provided with specific URLs." / "This can consume a significant portion of your usage limit, especially for lengthy content." / "As a free user, you have usage limits that reset every five hours." https://support.claude.com/en/articles/10684626 (确认日期 2026-10-26)
[^pricing]: Anthropic 价格页面，Free 套餐说明。 "Search the web, create files, and run code" https://claude.com/pricing (确认日期 2026-10-26)
[^new]: Anthropic 帮助文档，「Claude Cowork and chat are one Claude」. "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" https://support.claude.com/en/articles/16761823 (确认日期 2026-10-26)
[^screen]: 在 Claude 网页界面（免费套餐，韩语）中直接确认。输入框「+」菜单（没有「网页搜索」「Research」）、在隐身模式下提问所得回答中的"웹 검색함"标记和来源标记、点击来源后在新标签页打开的 www.museum.go.kr、输入框 `/deep` 列表里出现的 "deep-research"。（确认日期 2026-10-27）
[^research]: Anthropic 帮助文档，「Use research on Claude」. "It runs multiple searches that build on each other and decides what to look into next based on what it finds." / "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "Click the “+” button on the bottom left of your chat interface, then "Research." A blue indicator will appear on the bottom of the chat window." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." / "In this case, you can steer and prompt Claude to use Research by saying “Claude, please use the research tool to…”" / "During research, Claude can use tools from your connectors automatically, without asking for approval each time." / "When you start research in Claude Mobile, Claude only searches the web and doesn’t use your connectors." / "Research runs on Claude Opus 5.5 and falls back to Claude Opus 4.8 when needed." https://support.claude.com/en/articles/11088861 (确认日期 2026-10-26)
[^when]: Anthropic 帮助文档，「When should I use web search, extended thinking, and research?」. "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" / "Combining extended thinking with research allows Claude to both plan its approach thoughtfully and execute comprehensive information gathering" / "The research feature can synthesize information across multiple sources with proper citations and produces a longer final report." https://support.claude.com/en/articles/11095361 (确认日期 2026-10-26)
[^academy-research]: Claude Academy「Claude 101」课程 「Research for deep dives」. "Include relevant constraints." / "a few minutes or more, depending on the question." / "If you're not sure how to frame your research question, you can even ask Claude to help you write a better Research prompt before enabling the feature." https://academy.claude.com/courses/claude-101/research-mode-for-deep-dives (确认日期 2026-10-26)
