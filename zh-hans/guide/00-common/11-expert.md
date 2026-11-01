# 第11章 像专家一样使用——判断、测试、积累

> **一句话总结**：用得好，靠的不只是多认识几个按钮。靠的是这种能力：**判断该把什么交给它，交出去之前先测试，把重复的东西积累下来**。
> 本章汇集了在任何 AI 服务上都管用的工作方法。菜单位置和各服务的功能，在第2阶段的 [ChatGPT 第11章](../11-chatgpt/11-expert.md)和 [Claude 第12章](../10-claude/12-expert.md)里讲。

本章的主题是：第1～10章学到的东西，什么时候用、怎么用。第2阶段要学的功能（项目、技能等）这里只出现名字，详细用法在各服务的章节里。可以在读第2阶段之前看，也可以在读完第2阶段之后再回头看。

## 专家有什么不同

你在[第3章「同样的工具，不同的结果」](03-why-learn.md#同样的工具-不同的结果)里学到过，同一个 AI，用法不同，结果也会不同。Anthropic 的课程是这样描述用好 AI 的能力的：不止于知道点哪个按钮，还要培养在各种情境下**判断该怎么用 AI 的能力**。[^academy-4d]

课程把这种判断分成四种能力。取英文首字母，叫做「4D」。[^academy-4d]

- **委托——Delegation**：区分哪些事我自己做，哪些事交给 AI。
- **描述——Description**：把想要的结果和方法说清楚。
- **辨别——Discernment**：判断收到的结果对不对、能不能用。
- **负责——Diligence**：负责任地使用，不隐瞒用了 AI 这件事，对结果由我自己负责。

其中有不少，你已经练习过了。[第4章「好提示词的5个要素」](04-prompt-basics.md#好提示词的5个要素)就是「描述」。[第9章「检查的四个习惯」](09-safety.md#核对的四个习惯)对应的是「辨别」和「负责」。

OpenAI 分析人们如何在工作中使用 ChatGPT 的文章里，也能看到类似的地方。人们在交出**不属于自己领域的事**时，会给更多的示例和背景，也更常请它帮忙核对结果。[^ways] 越是陌生的事，越要同时给资料，并请它帮忙核对。

本章主要讲剩下的那一个：**决定交出什么的能力**。

<Quiz id="ch11-difference" />

## 选一件最先练习的事

不用从最大、最重要的事开始。一开始，请选这样的事。这是本指南把 OpenAI 课程要求避开的事（太宽泛的事、只偶尔做的事、风险大的事、难以核对的事）反过来写出来的。[^academy-openai]

- 经常做
- 结果很明确
- 我容易核对
- 错了损失也小

太宽泛的事、只偶尔做的事、错了就出大事的事、难以核对对不对的事，往后放。[^academy-openai]

| 还太早的事 | 适合先试的事 |
|---|---|
| 提高店里的营业额 | 每周一，用上周的销售记录做汇总表 |
| 把聚会办好 | 每次聚会结束后，把定下的事和待办事项写成通知短信 |

左边的事太宽泛，连该让它做什么都无从下手。右边的事每周都会来，而且拿到结果后，我马上就能看出对不对。

<Quiz id="ch11-pick" />

## 交出去之前先测试

"这件事能交给 AI 吗？"不要凭感觉定，请测试一下。方法很简单。**拿我已经知道答案的事**让它做做看。Anthropic 的课程把这叫做评估（Evals）。[^academy-eval] 课程以 Claude 为例，但同样的方法也可以用在其他 AI 上（这是本指南的判断）。

1. 挑一件经常做的事。上个月写的通知邮件、上个季度做的汇总表，都可以。
2. 收集5～10份我以前做出来的成果。
3. 把当时我手上有的资料给它，让 AI 做同样的事。
4. 和我的成果并排放在一起对比。

比如可以这样发送。我以前写过的邮件，先不要给它看（这是本指南的建议）。这样才能看到 AI 不是照抄、而是自己做出来的结果。

```
请用下面的备忘录，写一封给附近读书会会员的下个月通知邮件。
收件人是40～60岁的会员20人，语气要礼貌，但不要太生硬。
[粘贴备忘录]
```

对比的时候，请问问自己。重要的内容都写全了吗？语气和样子对吗？缺了什么？[^academy-eval]

看到有缺的地方，就补充说明，再让它做一次。补充说明之后做对了，那么下次起，一定要把这条说明加进去。改了几次还是赶不上我的成果，那就是学到了：这件事最好不要交出去。[^academy-eval]

通过了测试，也要继续核对。测试只是增加信心，并不会免去责任。[^academy-eval]

<Quiz id="ch11-eval" />

## 先看事情的样子

别先挑菜单。先看看眼前的事情是什么样子。这样，该用的功能自然就定下来了。[^academy-tabs]

各个服务的功能名称虽然不同，但适合某种事情的功能是相近的。

| 如果是这样的事 | ChatGPT | Claude |
|---|---|---|
| 提问、润色、一起想 | 普通对话 | 普通对话 |
| 简单的事实、今天发生的事 | [网页搜索](../11-chatgpt/06-search.md#联网搜索——让-chatgpt-去网上查) | [网页搜索](../10-claude/06-search.md#什么时候用什么) |
| 收集大量资料写成报告 | [深度研究](../11-chatgpt/06-search.md#深度调研——把报告交给它) | [研究](../10-claude/06-search.md#什么时候用什么)（付费） |
| 持续做同一件事 | [项目](../11-chatgpt/07-projects-plugins.md#项目——把对话、文件、指令放进一个文件夹) | [项目](../10-claude/07-projects-tools.md#项目-—-把资料和指令放在一处) |
| 经过多个步骤，最后拿到成品文件 | [Work](../11-chatgpt/07-projects-plugins.md#chat-和-work-的区别)（付费） | [Cowork](../10-claude/08-cowork.md#什么是-cowork——交给它的是事-不是对话)（付费） |
| 每到固定时间就重复 | [定时任务](../11-chatgpt/11-expert.md#到点自动去做-—-定时任务) | [定时任务](../10-claude/08-cowork.md#到固定时间自动做——预约任务)（付费） |

表里的功能名称和套餐，是在各服务的章节里确认过的。它们可能会变，用之前请看一下那一章。

大部分情况下，最上面一行，也就是一个清楚的提示词，就够了。[^academy-openai] 下面几行的功能，先用普通对话试试，不够用时再拿出来。

<Quiz id="ch11-tools" />

## 把重复的事积累下来

用着用着，你会发现自己总在重复同样的话。把重复的东西写下来一次，以后 AI 一开始就知道了。

能放的地方有四个。不必一开始就全用。按下面的顺序，等需要了再加一个。[^academy-layers]

1. **所有对话都提同样的请求** → 写进指令。ChatGPT 是[「自定义指令」](../11-chatgpt/05-memory.md#自定义指令——希望它始终遵守的事)，Claude 是[「指令」](../10-claude/05-memory.md#指令-—-适用于所有对话的规则)。
2. **持续做同一件事** → 把这件事归在一个项目里。
3. **每次都要解释同样的顺序** → 把这个顺序留成可以重复使用的模板。可以从把[第8章「4. 做成可重复使用的模板」](08-meta-prompting.md#_4-做成可重复使用的模板)的模板放进项目指令开始。如果服务和套餐支持，也可以做成技能。
4. **想把打磨好的模板分享给别人** → 把模板做成文档分享出去，或者用服务提供的分享功能（插件等）打包。这类功能，视服务和套餐不同，可能没有。

按顺序来，每次需要重新解释的事，会一点点减少。

**也有一些事，现在还不到做成模板的时候。** 事情每周都在变、结果的样子还没定下来、需要人来判断的事，都还太早。这种时候，请在对话里多做几次，慢慢打磨。[^academy-openai] 到固定时间自动运行的事也是一样。先用手做几次，等结果可信了，再设置定时。[^academy-openai]

### 把做好的模板测试一下再修改

我做的模板，我自己用的时候效果很好。因为我知道该放什么进去。可是换种稍微不同的说法来拜托，或者给它稍微不同的资料，它可能就不稳了。[^academy-skilltest]

所以请把同一个请求发两次。一次用模板，一次不用模板。把两个回答并排放在一起，问问自己：用了模板的那个，真的更好吗？不是的话，缺了什么？[^academy-skilltest]

要修改的地方，请说具体。[^academy-skilltest]

- 不太好的例子："有点怪。"
- 更好的例子："语气太生硬了。""最前面的摘要漏掉了。"

更好的例子指出了该改什么，所以 AI 马上就能动手。而且**一次只改一处**。这样才知道什么起了作用。[^academy-skilltest]

一开始不必完美。课程说，大多数技能改一两轮就准备好了。[^academy-skilltest]

<Quiz id="ch11-layers" />

## 把表格和数字交给它

做数字分析，最让人担心的是结果能不能信。这种时候，请把[上一节「交出去之前先测试」](#交出去之前先测试)的方法用在数字上。

Anthropic 课程里的例子是这样的。[^academy-data] 一个帮助退伍军人的机构里，负责人里奥每个季度都要分析出勤和就业的结果。

1. 里奥把**已经分析完的上个季度资料**，重新交给了 AI。
2. 每次回答来了，他都和自己的结果对一下，写下缺了什么。
3. AI 找对了出勤和就业之间的关系。可是在同时提供住房援助和就业介绍的项目里，它漏掉了一个重要的点。
4. 他补了一句"项目类型也请单独看一下"，它就也抓到了。
5. 里奥决定，从下个季度起，一定要加上这一句。

请这样试试。

```
附件的表是上个季度的销售原始资料。我已经分析出了结果，想看看你能不能得到同样的结论。
请计算每月的变化和各门店之间的差异，并在每一步都展示是怎么算的。
```

对数字不熟悉也没关系。可以请它帮你写 Excel 函数，或者整理杂乱的表格。遇到不懂的步骤，就一直请它解释。只有能跟上过程，才能核对结果。[^academy-data]

通过了对照测试，责任也还是原样。要看结果合不合常识。也不要隐瞒自己得到了 AI 的帮助。[^academy-data] 重要的计算，请用计算器或 Excel 再确认一遍。

上传文件的方法、拿到图表的方法，各个服务不一样。请看 [ChatGPT 第11章「把表格和数字交给它」](../11-chatgpt/11-expert.md#把表格和数字交给它-—-数据分析)和 [Claude 第12章「把表格和数字交给它」](../10-claude/12-expert.md#把表格和数字交出去)。

<Quiz id="ch11-data" />

## 用来学习

学东西的时候，不要直接要答案，而是请它引导我自己去想。自己找到答案，就是同时学会了解题的路。

```
我想学 Excel 的 VLOOKUP。不要直接告诉我答案，请一个一个地向我提问，让我自己想。
```

::: details 收到的回答大概是这样（示例——点击展开）
这是本指南编的示例。实际的回答会因服务和当时的情况而不同。

> 好的，我们一起想一想。第一个问题。一张表里有商品编号和价格，另一张表里只有商品编号。如果要用手把价格填上去，您会怎么做？

如果我回答"我会按编号，到第一张表里找出来再写上"，就会这样接着问。

> 对。VLOOKUP 做的就是这件事。那下一个问题：要让 Excel 替您去找，需要告诉它什么？

**检查一下有没有收好**：它有没有一开始就把函数公式全告诉我？问题是不是一次一个？下一个问题是不是顺着我的回答接下来的？

:::

让 AI 向我提问的方法，和[第5章「4. 让它反问」](05-prompt-patterns.md#_4-让-ai-反问-—-flipped-interaction)是同一个原理。想得到贴合我水平的讲解，可以用[提示词合集「学习、听讲解」](prompt-library.md#学习、听讲解)里的提示词。ChatGPT 里还有专门打开这种教法的学习模式（[ChatGPT 第11章](../11-chatgpt/11-expert.md#用来学习-—-学习模式)）。

<Quiz id="ch11-learn" />

## 按事情的分量检查

用结果之前先检查的习惯，你在[第9章「检查的四个习惯」](09-safety.md#核对的四个习惯)里学过了。这里看的是：要检查到多仔细，在哪个阶段检查。

**不用把所有回答检查到同样仔细。** 要按事情的分量来检查。[^academy-openai] 表里最后一行是课程的标准，前面三行是本指南选的日常示例。

| 如果是这样的事 | 检查到这个程度 |
|---|---|
| 想聚会点子 | 轻松读一读，挑一个 |
| 通知、公告草稿 | 看事实、语气、有没有漏掉的 |
| 文章、资料摘要 | 和原文对照 |
| 影响健康、金钱、工作、法律权利的事 | 由专家仔细审阅，或走规定的流程 |

**不是最后检查一次，而是每个阶段都看。** 如果是分好几步进行的事，进入下一步之前先停一下。[^academy-openai] 并且请自己问这三件事。这是本指南从课程的检查框架 CLEAR 里挑出来的三项。[^academy-openai]

- **事实**：数字、名称、日期、出处对不对？
- **逻辑**："因为……所以……"这样的衔接说得通吗？
- **语气**：适合读的人吗？

每个阶段都看，AI 理解错的时候就能早点发现。不用等全做完之后，再从头改。[^academy-openai]

逻辑有点怪的话，就指出那一处，请它解释。

```
我不明白第二段的结论是怎么得出来的。请解释它是靠哪些依据和假设连起来的，如果有薄弱的地方，请帮我改。
```

各类成果各自该看哪里（数据分析的计算方法、研究报告的出处等），整理成了表格，在 [ChatGPT 第11章「相信之前先确认」](../11-chatgpt/11-expert.md#相信之前先确认)里。

<Quiz id="ch11-verify" />

## 亲自动手试试

像[第10章](10-practice.md)那样，不用真实的公司资料，用编出来的资料来做。

1. 在最近做的事里，写下一件符合「选一件最先练习的事」四个条件（经常做、结果很明确、容易核对、错了损失也小）的事。
2. 编一封"上个月写的"短通知邮件，和当时的备忘录，写下来。也可以用[连续任务](practice-kit.md)里的示例文件 memo-last-month.txt 和 last-notice.txt。只把备忘录给 AI，让它写同样的邮件，然后和我的邮件对比，写下"都写全了吗？语气对吗？缺了什么？"。
3. 把第2步里缺的一点补进说明，再让它做一次。做对了，就把这一行放进指令或项目指令里。
4. 编一张约10行的日期、品类、金额表，我先用手算出各品类的合计。然后把同一张表交给 AI，请它展示计算步骤，再把两个结果对一对。
5. 用本章的 VLOOKUP 提示词，通过被提问的方式，学一个最近想学的东西。

**连续任务**（[筹备读书会](practice-kit.md)）：如果第2步用了示例文件，作业就从这里开始。第2阶段每一章的末尾都有下一步。跟着这个作业走，读完第2阶段时，手里就会留下11月聚会的通知文案包。

## 小结

- 想用得好，需要判断的能力。Anthropic 的课程把这种判断分成委托、描述、辨别、负责（4D）。
- 一开始，用经常做、结果明确、容易核对、错了损失也小的事来练习。
- 交不交出去，不要凭感觉定，要拿已经知道答案的事来测试。通过了测试，核对和责任也还在。
- 先看事情的样子，再看菜单。大部分情况下，一个清楚的提示词就够了。
- 重复的东西，按指令 → 项目 → 模板（技能）→ 打包的顺序，等需要了再一个一个积累。做好的模板，用和不用各请求一次来对比，一次只改一处。
- 数字分析，先用过去的资料对一遍，并请它展示计算过程。
- 检查按事情的分量来做，不是最后一次，而是每个阶段都做。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| AI Fluency | AI 素养 | 与 AI 良好协作的能力 |
| Delegation | 委托 | 区分哪些事我自己做、哪些事交给 AI |
| Description | 描述 | 把想要的结果和方法说清楚 |
| Discernment | 辨别 | 判断收到的结果对不对、能不能用 |
| Diligence | 负责 | 负责任地使用，说明用了 AI，并对结果负责 |
| Evals | 评估 | 拿已经知道答案的事来测试 AI 的方法 |

<ChapterDone :chapter="11" />

下一章：第1阶段读完了。请用[理解度测试](certificate.md)确认我的 AI 理解水平，或者进入第2阶段的 [ChatGPT](../11-chatgpt/01-getting-started.md)、[Claude](../10-claude/01-getting-started.md) 指南。

[^academy-4d]: Claude Academy「Claude 101」课程的「Getting better results」。"AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results （确认日期 2026-10-26）
[^ways]: OpenAI，「How workers are unlocking new ways of working」。分析指出：在自己职业以外的事情上，人们会多加示例、背景，也更多地请它核对。https://openai.com/index/unlocking-new-ways-of-working （确认日期 2026-10-24）
[^academy-eval]: Claude Academy「Claude 101」课程的「Getting better results」。"Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results （确认日期 2026-10-26）
[^academy-tabs]: Claude Academy「Claude 101」课程的「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （确认日期 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」课程的「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （确认日期 2026-10-26）
[^academy-skilltest]: Claude Academy「Introduction to Claude Cowork」课程的「Validating skills for plugins」。"When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." 课程讲的是把用了技能的回答和没用技能的回答做对比的方法。本章把同样的方法，扩展到项目指令这样的模板上（本指南的解读）。https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins （确认日期 2026-10-26）
[^academy-data]: Claude Academy「Claude 101」课程「Getting better results」里的视频（课程说明，它原本是「AI Fluency for nonprofits」课程里的视频）。"Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results （确认日期 2026-10-26）
[^academy-openai]: OpenAI Academy 课程正文（需要登录、注册）。Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" （确认日期 2026-10-26）
