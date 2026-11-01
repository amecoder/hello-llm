# 第11章 像专家一样使用 — 超越新手，按工作需要来驾驭

> **一句话总结**：专家不是知道更多新功能的人，而是**像交办工作那样说话、按工作选合适的工具、把重复的事做成模板、确认结果之后才使用**的人。
> 这一章会介绍怎样**组合**你在第1~10章学到的功能，也会介绍还没讲过的定时任务、数据分析和学习模式。

界面以2026年10月的网页版（Plus 套餐）为准。免费套餐或手机 App 的菜单位置可能略有不同。

## 专家有什么不同

在[第1阶段第3章「同一个工具，不同的结果（같은 도구, 다른 결과）」](../00-common/03-why-learn.md#同样的工具-不同的结果)里，你学到了同一个 AI 也会因使用方法不同而结果不同。OpenAI 调查公司里怎样使用 ChatGPT 的报告里，也能看到类似的情况。即使在效果可能很大的地方，推理、深度研究、项目、自定义指令这类**高级功能也用得比较少**。[^adopt]

怎样判断该交办什么、交办之前怎样先试一试、怎样按工作的分量来确认，这类**适用于任何 AI 的方法**，在[第1阶段第11章「像专家一样使用」](../00-common/11-expert.md)里。这一章把那些方法搬到 ChatGPT 的功能上。先一眼看看这一章讲什么。

| 要素 | 一句话说明 | 详细内容 |
|---|---|---|
| 像交办工作那样说话 | 讲明要做的事、对象、目的、形式，看过第一版回答后再修改 | [第1阶段第4章「好提示词的5个要素」](../00-common/04-prompt-basics.md#好提示词的5个要素)、[第1阶段第6章「怎样好好地请它修改」](../00-common/06-conversation.md#怎样把修改要求说清楚) |
| 选工具 | 在搜索、深度研究、Work、推理级别中，用适合这项工作的 | [第6章「深度研究 — 把报告交给它」](06-search.md#深度调研——把报告交给它)、[第7章「Chat 和 Work 的区别」](07-projects-plugins.md#chat-和-work-的区别) |
| 积累资料 | 把同一项工作的文件、指令、做得好的回答汇集在一处 | [第7章「项目 — 把对话、文件、指令放进一个文件夹」](07-projects-plugins.md#项目——把对话、文件、指令放进一个文件夹) |
| 做模板 | 把重复的请求留成指令、模板、技能 | [第1阶段第8章「4. 做成可重复使用的模板」](../00-common/08-meta-prompting.md#_4-做成可重复使用的模板) |
| 定时任务 | 让 ChatGPT 在约定的时间自己去做 | [本章「到点自动去做」](#到点自动去做-—-定时任务) |
| 数据分析 | 计算表格和数字，并以图表形式拿到 | [本章「把表格和数字交给它」](#把表格和数字交给它-—-数据分析) |
| 学习模式 | 不直接给答案，而是用提问帮助理解 | [本章「用来学习」](#用来学习-—-学习模式) |
| 回答的样子 | 按我的工作调整语气、表格和图片的数量 | [第5章「设定语气」](05-memory.md#设定语气——基本风格和语气、温暖度、参考我的文风) |
| 确认 | 为每种成果事先定好看哪里，再去确认 | [第1阶段第9章「确认的四个习惯」](../00-common/09-safety.md#核对的四个习惯) |

<Quiz id="ch111-difference" />

## 交办工作的五行 — 成果、资料、保留项、审核标准、形式

不是问一个问题，而是把文档或表格工作整个交出去时，除了[第1阶段第4章「好提示词的5个要素」](../00-common/04-prompt-basics.md#好提示词的5个要素)，还要再注意两点。一点是像公式、顺序、表格结构这类**不能改动的东西**，[^docs]另一点是判断结果做得好不好的标尺，也就是**审核标准**（review criteria）。[^work] 提前把这两点说清楚，就能减少原本好好的格式被改掉、或数字错了还被放行的情况。

请按下面的五行来写（[第1阶段第7章「1. 用 Markdown 整理」](../00-common/07-structured-prompts.md#_1-用-markdown-来整理)）。
- **成果**：做什么、为谁做、为什么做
- **资料**：要参考的文件
- **保留项**：不能改动的东西
- **审核标准**：最后要和什么对照
- **形式**：格式和长度
```
成果：请做一份要交给组长的本月支出摘要。下周的预算会议上要用。
资料：请使用附件的支出明细文件。
保留项：项目名称和顺序不要改动。
审核标准：最后请核对合计是否和原始文件一致，并告诉我结果。
形式：按项目列一个表格，再加三句话的摘要。
```

::: details 得到的回答大致是这样（示例 — 点击展开）
这是本指南制作的示例。实际的回答会因服务和每次情况而不同。

> | 项目 | 本月金额 |
> |---|---|
> | （文件中的第一个项目） | ○○韩元 |
> | （文件中的第二个项目） | ○○韩元 |
> | … | … |
> | 合计 | ○○韩元 |
>
> **三句话摘要**
> 1. 本月总支出为○○韩元。
> 2. 花得最多的项目是（项目名称），为○○韩元。
> 3. 在下周的预算会议上，值得讨论一下怎样减少（项目名称）的支出。
>
> **合计核对**：表格里的合计○○韩元与原始文件的合计一致。

**确认一下有没有答好**：项目名称和顺序是不是和原件一模一样？是不是以一个表格加三句话摘要的形式给出？最后有没有合计核对的结果？不要只相信“一致”这句话，请你自己再看一眼原件的合计。

:::

**拆开，还是合在一起？** OpenAI 帮助中心建议把复杂的工作拆成小的请求（[第1阶段第5章「3. 分步骤（단계 나누기）」](../00-common/05-prompt-patterns.md#_3-分步骤-—-提示词链)）。[^prompt] Academy 的资料则说明，把互相有关的背景和指示合在一个请求里也可以。不过它也补充说，信息太多，回答可能会变得模糊。[^aprompt]

如果需要看过中间结果再决定下一步方向，就拆开。如果目标只有一个而且很明确，就把五行合在一个请求里。无论哪种，只附上真正必要的资料就行。

**需要多个步骤的工作，要定好在哪里停下。** 不要一开始就要成品，先定好在哪里由我来选择或确认。步骤小，ChatGPT 理解错的时候你就能早点发现。不用等全部做完后再从头修改。[^academy-content]
```
请帮我筹备本周的家庭出游。
1. 请按日期、预算、出发地区，把三个候选地点整理成表格。
2. 请比较交通时间和费用。到这里停下，由我来选地点。
3. 请用我选的地点做一份一天的行程表。
```

**如果有好几个文件，先要摘要，再要草稿。** 让它先说“现在看到了什么”，你就能在写草稿之前，确认它有没有把需要的文件读全。Academy 课程在把文档交给 Work 之前，也会让你先走这个顺序。[^academy-content]
```
先不要写草稿。请先读附件的文件，简短整理：已经定下的内容、还没定的内容、缺少或不清楚的内容。
```

<Quiz id="ch111-five-lines" />

## 按工作选合适的工具

同一个问题，用哪个功能来问，结果也会不同。快速的事实，用搜索去找。需要深度和细致，就用深度研究。[^deep] 其余的工作，请从下面的表里选。

| 要做的事 | 要用的功能 | 详细内容 |
|---|---|---|
| 今天的天气、营业时间这类快速的事实 | 网页搜索 | [第6章「网页搜索」](06-search.md#联网搜索——让-chatgpt-去网上查) |
| 对比多份资料的长篇报告 | 深度研究 | [第6章「深度研究」](06-search.md#深度调研——把报告交给它) |
| 文档、表格、演示资料这类成品文件 | Work（付费套餐） | [第7章「Chat 和 Work 的区别」](07-projects-plugins.md#chat-和-work-的区别) |
| 修改已有的 Word、PowerPoint 文件 | Microsoft 加载项「ChatGPT」（含免费版） | [本章下方](#在-word、powerpoint-里使用) |
| 困难的计算、多个条件交织的计划 | 调高推理级别 | [第2章「推理级别和思考」](02-screen-tour.md#推理级别和思考-—-想得多深) |
| 表格、数字分析和图表 | 上传文件并使用数据分析 | [本章下方](#把表格和数字交给它-—-数据分析) |
| 学习新东西 | 学习模式 | [本章下方](#用来学习-—-学习模式) |

**想知道某个功能行不行，直接让它做做看。** 这比问“你能做这个吗？”要好。ChatGPT 看不到自己的系统现在是怎样运行的。所以你问它，它可能答错。[^ask]
```
请从附件的五张收据照片里，提取日期、店名、金额，做成表格。
```

### 在 Word、PowerPoint 里使用

Word、Excel、PowerPoint 共用**同一个 ChatGPT 加载项**（add-in，附加在程序里使用的小功能）。请在 Microsoft 应用商店里安装「ChatGPT」。在文档旁边的窗格里就能直接修改。[^word][^ppt]

- Word 版**包括免费（Free）在内的所有套餐**都能用。PowerPoint 版在 Free 和 Go 里有限使用。如果是公司账号，要管理员允许才会显示。[^word][^ppt]
- 加载项里的对话和 ChatGPT 的对话记录是分开的。记忆和技能也不会带过来。[^word]
- **大改之前，请先保存一份副本。** 如果是大的修改，就让它先把计划拿给你看。有副本的话，需要时可以恢复原状。[^word][^ppt]

```
我想把这份演示资料的第3~5张幻灯片缩成一张。先不要直接改，请先把怎么合并的计划给我看。
数字和表格保持原样，标题请控制在15个字以内。
```

<Quiz id="ch111-tools" />

## 积累资料并使用

在[第7章「项目」](07-projects-plugins.md#项目——把对话、文件、指令放进一个文件夹)里，你学了怎样把对话、文件、指令放进一个文件夹。项目请用在每周调研、文章草稿这类**重复的工作**上。[^projects] 再往前走一步，做得好的回答也可以作为下次用的资料积累起来。
- **做得好的回答要保存成资料。** 在项目对话里，打开回答下方的消息菜单，选「保存到项目（프로젝트에 저장）」或「添加到项目来源（프로젝트 소스에 추가）」就行。这个回答就会进入项目的「来源（소스）」。菜单名称可能因界面而不同。[^projects]
- **其他服务的资料也可以连接。** 在个人项目的来源区域点「Add sources」，填入 Slack 频道或 Google Drive 文件、文件夹的链接。[^projects] 以前上传的文件，可以从[第4章「资料库」](04-files-images.md#资料库-—-汇集上传文件的地方)里重新调用。

<!-- 需要截图：在项目对话中展开回答的消息菜单，能看到「添加到项目来源（프로젝트 소스에 추가）」的界面 -->

最好在项目指令里写上“先看积累下来的资料”。
```
这个项目是每周调研我们社区文化活动的地方。做新的调研之前，请先看保存在「来源（소스）」里的上次调研结果，
把和上周重复的活动去掉，只把新出现的整理成表格。
```

<Quiz id="ch111-sources" />

## 重复的工作做成模板 — 指令、模板、技能

先从哪些工作开始做模板，请看[第1阶段第11章「选择先练习的工作」](../00-common/11-expert.md#选一件最先练习的事)。

如果你经常做同一件事，就先做好模板。第一步，是把[第1阶段第8章「4. 做成可重复使用的模板」](../00-common/08-meta-prompting.md#_4-做成可重复使用的模板)里的模板，[像第7章那样放进项目指令](07-projects-plugins.md#把要反复使用的模板放进项目)。接下来才是模板和技能。[^docs][^skills]

| 名称 | 是什么 | 可以在哪里使用 |
|---|---|---|
| 参考文件 | 只这一次拿给它看的示例文件 | 所有对话 |
| 模板（template） | 示例文件 + 可重复使用的指令。只有创建的人自己用 | 网页版的 Work（付费套餐） |
| 技能（skill） | 装着指令和示例、可以重复使用并分享的工作方式 | 按帮助中心所述，是 Business·Enterprise·Edu 等公司、学校套餐 |
| 插件（plugin） | 把技能和应用连接打包在一起的组合 | [第7章「插件」](07-projects-plugins.md#插件——添加其他服务和工作方式) |

**模板在网页版的 Work 里创建。** 在输入框里输入 `@Template-Creator`。附上一个要参考的文件（Word·Excel·PowerPoint 文件，或谷歌文档链接）。然后说明要保留什么、要改什么、每次要填入什么信息。创建好之后，请点「安装（설치）」。[^docs]
```
@Template-Creator 请用附件的周报文件做一个模板。
保留项：标题行、表格的三栏（已完成 / 进行中 / 下周计划）、字体和颜色。
要改的：表格里的内容和日期。
每次要填入的信息：那一周的工作备忘。
```

使用创建好的模板时，请在输入框里输入 `@Documents`·`@Spreadsheets`·`@Presentations` 其中之一。模板库打开后，选「Use template」。光是选中，任务并不会开始。还需要接着写上这次的内容并发送。[^docs]

写项目指令时，可以参考下面的要点。它原本是 OpenAI 对定制 GPT 指令的建议。[^gpt-make] 认为它对项目指令也适用，是本指南的解读。

| 要点 | 例子 |
|---|---|
| 与其罗列“不要做”，不如具体写“请这样做” | 不写“不要写太长”，而写“请写三句话” |
| 参考文件放在**资料**里，规则和语气放在**指令**里 | 公司的格式用文件，“表格是三栏”写在指令里 |
| 结果不理想时，先打磨指令、放进一个好例子，再考虑加功能 | “收到这样的备忘 → 就这样整理”的一对示例 |

**技能**在侧边菜单的「插件（플러그인）」→「技能（스킬）」标签页 →「创建（만들기）」里创建。选「通过聊天创建（채팅으로 만들기）」之类即可。[^skills] 不过，帮助中心写的是技能可以在 **Business·Enterprise·Healthcare·Edu 套餐**里使用。个人套餐的界面里也可能看到「技能（스킬）」标签页。能不能用，请在你自己的界面上确认。

上传别人做的技能文件时，请先看看创建者是否可信。即使有自动检查，也代替不了你自己的确认。[^skills]

**什么时候创建技能呢？** 如果你一直在用同样的标准重复同样的请求，就值得创建。还为时过早的情况，见[第1阶段第11章「把重复的事积累起来」](../00-common/11-expert.md#把重复的事积累下来)。[^academy-content]

<Quiz id="ch111-templates" />

## 到点自动去做 — 定时任务

**定时任务**（scheduled tasks）是让 ChatGPT 在约定的时间自己去做事的功能。可以只执行一次，也可以重复执行。也可以让它盯着某样东西有没有变化，变了就通知你。[^tasks] 创建方法很简单。在对话里直接请它做就行。
```
每周一早上8点，把本周首尔的天气预报按星期整理成每天一行，告诉我。
```

创建好的任务，可以在侧边菜单「定时任务（예약）」里查看、修改、暂停、删除。[^tasks][^scheduled-name] 也可以通过设置 →「通知（알림）」→「任务管理（작업 관리）」打开，还可以通过对话的 •••（更多）→「查看定时任务（예약 작업 보기）」打开。[^tasks]

怎样接收通知，请在设置 →「通知（알림）」里选推送或邮件。想收到手机推送，就在手机 App 上创建任务。[^tasks]

![侧边菜单的「定时任务（예약）」界面。上面是「安排任务（작업 예약하기）」输入框，下面是创建好的一行任务（暂停、编辑、••• 按钮），再下面是「推荐（추천）」任务列表](../../../guide/11-chatgpt/assets/shot-29-scheduled.png)

*任务名称已换成示例。任务行的左边是暂停，右边是编辑和 ••• 按钮。*[^screen-scheduled] 也可以直接在上面的「安排任务（작업 예약하기）」栏里写下请求来创建。

可以同时开着的任务数，因套餐而异。Free 和 Go 是3个，Plus 是5个，Business·Edu 是10个，Pro·Enterprise 是15个，这些数字可能会变（确认日期 2026-10-24）。Free 每天最多只执行一次。时间也只能大致定为早上、下午、晚上。像上面的例子那样指定准确的时刻，或者每小时执行，需要付费套餐。[^tasks] 像收到新邮件就做出反应这样的**应用事件任务**，要在 Work 里创建。Free 和 Go 不能用。[^tasks]

也有需要小心的地方。[^tasks]
- **在项目里创建的任务，读不到那个项目的文件。** 如果需要文件内容，请直接写进指示文字里。
- 在语音对话、定制 GPT、[上锁的对话](03-chats.md#不让别人打开——锁定的对话)里，不能创建定时任务。
- 把任务用分享链接发给别人，收到的人会原样看到指示文字。所以请不要放入健康、金融信息或密码。即使分享了，我已连接的应用（例：Slack）的连接和权限也不会传过去。[^slack]
- 通过已连接的应用发送邮件、修改文件的任务，可能会**停下来等我批准**。如果一直没有结果，请到侧边菜单「定时任务（예약）」里看看是不是在等待批准。[^apps-trouble]

**该把什么工作设成定时呢？** 请用在看了结果后由我来判断的工作上。请它定期确认、盯着看、总结后通知你就行。像发送、发布、删除、批准这类会对外产生影响、或难以撤销的事，要小心。[^academy-content]

**设成定时之前，请先亲手做几次。** 把同样的请求手动发几次，打磨提示词和资料，等结果可靠了再设成定时。在指示文字里要写下这些内容。[^academy-content]
- 看哪些资料
- 做出什么
- 没有信息时怎么办
- 哪些由我来确认

这是本指南制作的示例。
```
每周五下午5点，从我们区政府网站的公告里，找出本周新发布的活动和报名日程，整理成表格。
日期不明确的不要编造，写上「需确认」，并附上出处链接。不要报名，也不要发帖。
```

<Quiz id="ch111-scheduled" />

## 把表格和数字交给它 — 数据分析

**数据分析**（data analysis）没有需要单独打开的菜单。像[第4章「上传照片和文件」](04-files-images.md#上传照片和文件)那样，上传 Excel 或 CSV 文件，再问你想知道的就行。ChatGPT 会做出摘要、表格、图表，需要时还会用 Python（Python，用于计算的编程语言）直接计算。[^data]

想得到准确的结果，**上传之前请先整理好文件。**[^data]
- 第一行放像「日期 / 品名 / 数量 / 金额」这样一眼就能看懂的列名。
- 一行只写一条记录。
- 不要在一个工作表里放多个表格，也不要在中间留空行。

上传文件之后，不要马上问合计，而是先让它看**数据有没有问题**。OpenAI 也建议用这个问题开始分析。接着，请**自己指定计算方法。** 因为第一次尝试的计算方法或图表，可能和我的本意不同。[^data]
```
请先检查这份数据里有没有常见的问题（空值、异常值、重复、日期和数字格式错误）。
如果没有问题，请按品名汇总「金额」列，按从大到小的顺序做成表格，并用柱状图展示。
也请各用一句话写出计算用的方法和假设。
```

- 帮助中心说明，柱状图、折线图、饼图、散点图可以通过「转换为交互式图表（대화형 차트로 전환）」亲手操作。在2026-10-28的界面上，没有看到这个按钮，只看到「下载图表（차트 다운로드）」「展开图表（차트 펼치기）」。[^screen-data] 可以展开结果表格，只选需要的格子再次提问，表格可以下载成 CSV（能在 Excel 里打开的、用逗号分隔的文件）（也请参考[第1阶段第7章「3. 搬到 Excel 时，请用表格形式拿到」](../00-common/07-structured-prompts.md#_3-要搬到-excel-时-让-ai-给表格)）。[^data]
- **局限**：分析用的 Python 不能连接互联网。扫描的 PDF 或照片里的表格数字可能不准确，文件很大时只能看到一部分，所以请指定工作表或范围。[^data]

我把[接下来的练习](../00-common/practice-kit.md)里的假会费账本（fees.csv）上传，原封不动地发了上面的提示词。ChatGPT 找出了金额为空的一行和被写了两次的一行。然后，按照“如果没有问题”这个条件，它在画图表之前停下来，请我确认。

![数据检查结果表。整理了空值1条（发送通知短信）、重复1对（茶点 32,500韩元）、异常值需确认、日期格式正常、数字格式1条，下面写着计算方法和假设](../../../guide/11-chatgpt/assets/shot-30-data-check.png)

我告诉它“茶点是不小心写了两次”之后，它就把按项目的支出画成了柱状图。收入210,000韩元、支出114,300韩元、剩余95,700韩元，整理在它下面的表格里。和我手算的数值一致。

**如果图表里的韩文变成方框（□）**，就这么告诉它，请它重新画。我第一次拿到的图表，项目名称变成了方框。我说“请重新画，让韩文能正常显示”之后，它就重新画出了文字马上能看清的图表。[^screen-data]

![第一次拿到的按项目支出柱状图。数字能看到，但项目名称和标题这类韩文变成了方框](../../../guide/11-chatgpt/assets/shot-30-data-chart-broken.png)

![重新画的按项目支出柱状图。横幅制作 45,000韩元、茶点 32,500韩元、研讨室租借 20,000韩元、11月买书 16,800韩元，下面有总支出 114,300韩元](../../../guide/11-chatgpt/assets/shot-30-data-chart.png)

*对话和上传的文件在拍完截图后已删除。删除对话后，上传的文件仍留在资料库里，所以另行删除了（[第4章](04-files-images.md#资料库-—-汇集上传文件的地方)）。*

<Quiz id="ch111-data" />

## 用来学习 — 学习模式

**学习模式**（study mode）是不直接给答案，而是教你的方式。它会抛出问题，分步骤讲解，一边确认你是否理解一边推进。**所有套餐**都可以在网页、iOS、安卓上使用。[^study]

在网页上打开它，要在输入框里输入 `@study`，然后在建议列表里选「学习（공부하기）」。也可以点 + 按钮，搜索 `study` 后选择。直接进入 `chatgpt.com/studymode` 也行。[^study] 学习模式请在普通对话里打开。在[临时聊天](03-chats.md#不留记录——临时聊天)、定制 GPT、项目里不能打开。[^study]

![在输入框里输入 @study 后，下面弹出「学习（공부하기） — 学习新概念（새로운 개념을 배워보세요）」建议的界面](../../../guide/11-chatgpt/assets/shot-31-study-mention.png)

*建议列表里显示为「学习（공부하기）」。这是发送之前的界面，还没有开始任何事。*[^screen-study]

请把下面的内容放进第一条消息里。这样学习模式就能更好地帮到你。[^study]
- 我的水平
- 科目和确切的主题
- 想做的事
- 已经知道的内容
- 考试日期、形式
- 资料

```
我想用20分钟复习这个主题。主题是初中2年级科学的「电路」。
我听说过欧姆定律，但分不清串联和并联。下周二有选择题考试。
请先简短地告诉我最重要的概念，然后一次出一道题，确认我的回答。
```

学习模式也可能出错。有时它还会直接告诉你答案。这时请再次请求：“只给我提示”“一次出一道题”。作业、考试、健康、法律、金钱这类重要的内容，一定要另外确认。[^study]

你也可以在学习模式里请它做复习资料。请以测验或抽认卡（正面是问题、背面是答案的记忆卡片）的形式请求。[^study] 用抽认卡功能做出的卡片，会自动保存到资料库里。卡片内容请和原来的笔记对照一下。[^study]

不用学习模式也能用的讲解类提示词，在[提示词合集「学习·听讲解（공부·설명 듣기）」](../00-common/prompt-library.md#学习、听讲解)里。

<Quiz id="ch111-study" />

## 让回答的样子适合我的工作

在[第5章「设定语气」](05-memory.md#设定语气——基本风格和语气、温暖度、参考我的文风)里，你看过了基本风格和「温暖（따뜻함）」。这里看四种方法，把回答的样子更贴合工作地进一步调整。修改生成图片的方法，在[第4章「生成图片」](04-files-images.md#生成图片)里。

![个性化设置界面。请看最下面 ⑤ 「基本风格与语气（기본 스타일 및 톤）」和 ⑥ 「温暖（따뜻함）」选择按钮。特性就在这里调整](../../../guide/11-chatgpt/assets/shot-06-personalization-marked.png)

- **特性**（characteristics）是把温暖、热情、标题与列表、表情符号，朝“更多（+）”或“更少（–）”的方向一点点调整的设置。可以在设置 →「个性化设置（개인 맞춤 설정）」里更改。更改后，会应用于这个聊天和今后的新聊天。[^char] 在2026-10-23的界面上，只确认了「温暖（따뜻함）」（上图 ⑥）。其他项目请在你自己的界面上找找看。
- **表格、图片太多时可以减少。** 最新的模型有时会在回答里混合显示表格、按钮、图表。请在网页设置的个性化设置里，把「Layout and Visuals」改成「Simple」。这个名称是帮助中心的英文写法，韩语界面上的名称没有确认到。改了之后，也可能还有一部分会出现。[^ui]
- **总想要的样子，用指令固定下来。** 把“回答要简短”“比较选项时用表格”这类要求，写进[第5章「自定义指令」](05-memory.md#自定义指令——希望它始终遵守的事)就行。[^ui]
- **也可以直接在回答里修改。** 邮件、短信这类草稿，有时会以写作块（writing block，回答里可以直接修改的文字框）的形式出现。你可以在原地直接修改，或者只选一部分请它修改。修改的内容会保存到对话里，并用于下一次提问。[^blocks]
```
请只把刚才写的邮件草稿的第二段改得更短、更礼貌。其余保持不变。
```

<Quiz id="ch111-shape" />

## 相信之前先确认

要看多仔细、在哪个阶段看，请在[第1阶段第11章「按工作的分量来确认」](../00-common/11-expert.md#按事情的分量检查)里学习。这里看看 ChatGPT 的各种成果该看什么。

每种成果要看的地方不一样。

| 成果 | 要确认的地方 |
|---|---|
| 数据分析 | 计算用的方法、代码、假设。方法很重要的话，请它展示出来或改一改[^data] |
| 深度研究报告 | 亲自打开引用和出处链接（[第6章「核对出处的习惯」](06-search.md#核对出处的习惯)）[^deep] |
| Work 生成的文件 | 在分享之前看内容、版式、公式、图表[^docs] |
| Work 在网站上做的事 | 确认结果和出处，重要的操作要在批准界面上亲手点击[^work] |
| 在已连接的应用里找到的文件 | 找到文件的**名称**，不等于读过**内容**。重要的文件，要直接贴上链接让它读[^drive] |
| 通过已连接的应用发送的邮件、消息 | 任务中断或结果含糊时，在重新让它做之前，先亲自确认已发送邮件箱和收件对象。同一封邮件可能会发出两次[^apps-trouble] |

**链接也要小心。** ChatGPT 生成的链接，可能被第三方塞进了虚假信息或恶意指示。[^links] 隐藏指示的原理，在[第1阶段第9章「4. 隐藏的指示」](../00-common/09-safety.md#_4-隐藏指令——提示词注入)里。越是我不熟悉的领域，越要在最后加上这句话。
```
请标出刚才的回答里我需要另外确认的部分，并告诉我该去哪里确认（官方机构或原文）。
```

<Quiz id="ch111-verify" />

## 想学得更多 — OpenAI Academy

**OpenAI Academy** 是 OpenAI 制作的**免费在线课程**。有 ChatGPT 账号的人都可以听，按自己的节奏进行。[^academy] 在课程页面点「Enroll now」（报名）后，正文才会打开。进度会自动保存，所以不必一次听完。下面三门课程的正文是**英语**（2026-10-26确认）。[^academy-courses]

讲怎样把 AI 用在工作上的课程有三门。后面两门建议先听前面的课程。时间是课程页面上写的数值，可能会变。[^academy-courses]

| 课程 | 时间·水平 | 讲的内容 | 准备 |
|---|---|---|---|
| **AI Foundations** | 约70分钟，入门 | AI·LLM 是什么、清楚的指示、提供背景、审核结果、负责任地使用 | ChatGPT 账号，一项要练习的真实工作。不需要技术知识 |
| **Applied AI Foundations** | 约80分钟，中级 | 把一次提问变成**可重复使用的工作流程**（workflow）、选择推理模型（回答之前想得更久的模型）、审核节点、技能 | ChatGPT 账号，一项要练习的真实工作。建议先听 AI Foundations |
| **Agents and Workflows** | 约90分钟，中级 | 把工作交给 [Work](07-projects-plugins.md#chat-和-work-的区别)，审核结果，用技能、定时任务重复使用 | ChatGPT 账号，一项要练习的真实工作，能使用交办工作功能（原文 "agent capabilities"，课程里指 Work）的账号。建议先听前两门课程 |

每门课程听完正文，并在**测验（Assessment）中得到80%以上**，就会通过邮件收到**徽章**。[^academy-courses] 帮助中心说明，这不是证书。[^academy] 本指南的[认证考试](../00-common/certificate.md)也是同样性质的学习徽章。

### 课程里学到的框架 — 和本指南对比

这三门课程里，有和本指南相同的内容，只是名字不同。了解下面的对应关系，在课程里遇到新术语时就容易猜到意思。课程里用的名称，照英文原文写出。[^academy-content]

- **Task·Context·Expectation**（AI Foundations）：定好要做的事、背景（为谁做、为什么需要）、回答的样子（格式、长度、语气）再提出请求。和[第1阶段第4章「好提示词的5个要素」](../00-common/04-prompt-basics.md#好提示词的5个要素)是同一个想法。
- **CLEAR**（AI Foundations）：拿到回答后，自己问自己。都回答了吗（Complete）？前后合理吗（Logical）？有依据吗（Evidence）？适合读的人吗（Audience）？有没有离题（Relevant）？请和[第1阶段第9章「确认的四个习惯」](../00-common/09-safety.md#核对的四个习惯)、[第1阶段第11章「按工作的分量来确认」](../00-common/11-expert.md#按事情的分量检查)一起看。
- **"Use ChatGPT as the workspace, not the source of truth."**（AI Foundations）：意思是把 ChatGPT 当作工作的地方，不要只凭 ChatGPT 的回答来判断事实。需要最新的事实、政策、价格、日期时，先从可信的资料或搜索里拿到，再让 ChatGPT 去整理这些资料。这和[第6章「网页搜索」](06-search.md#联网搜索——让-chatgpt-去网上查)相连。
- **工作流程的五个部分**（Applied AI Foundations）：定好目标、背景、步骤、审核节点、成果。不要一次全部交给它，而是每一步都确认着推进。请看本章的[「交办工作的五行」](#交办工作的五行-—-成果、资料、保留项、审核标准、形式)和[第1阶段第5章「3. 分步骤（단계 나누기）」](../00-common/05-prompt-patterns.md#_3-分步骤-—-提示词链)。
- **工作流程笔记**（Applied AI Foundations）：做长时间的工作时，ChatGPT 可能会忘掉最初的目标或条件。所以把目标、已做的决定、要遵守的条件、要确认的节点写在一份简短的笔记里。下一步再把这份笔记拿给它看，就能接着之前定好的内容继续。把这份笔记作为[第7章「项目」](07-projects-plugins.md#项目——把对话、文件、指令放进一个文件夹)的文件，每次修改都更新，是本指南的建议。
- **把工作交给智能体**（Agents and Workflows）：事先写好做什么、用哪些资料、不能做的事（不发送、不编造日期和负责人等）、成果的样子、我要确认的内容。和本章的[「交办工作的五行」](#交办工作的五行-—-成果、资料、保留项、审核标准、形式)几乎一样。
- **选功能的规则**（Agents and Workflows）：很多时候，一个清楚的提示词就够了。需要其他服务的资料就用插件，同一件事反复出现就用技能，想在约定的时间重复同样的确认就用定时任务。请看[「重复的工作做成模板」](#重复的工作做成模板-—-指令、模板、技能)和[「到点自动去做」](#到点自动去做-—-定时任务)。

课程里有很多亲手做的活动。在旁边的标签页里打开 ChatGPT，听的同时就可以马上跟着做。建议用电脑而不是手机听课。[^academy-content]

### 可以免费看的公开资料

Academy 课程要用 ChatGPT 账号登录才能听，但下面的资料是**免费**的，不登录也能打开介绍页面。不过也有些地方，真要听课需要注册（Boostcourse 需要报名选课）。全部都在2026-10-25亲自打开官方页面确认过。

| 资料 | 制作方 | 语言·篇幅 | 适合谁 |
|---|---|---|---|
| [Introduction to Prompt Engineering](https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13)（视频） | OpenAI Academy | 英语 | 想通过 OpenAI 制作的视频，复习本指南第1阶段学过的提示词写法的人。下一集是 [Advanced Prompt Engineering](https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13)[^academy-public] |
| [ChatGPT fundamentals](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics)（文章） | OpenAI Academy | 英语 | 想通过 OpenAI 亲自整理的文章，重温 ChatGPT 基础的人[^academy-public] |
| [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | DeepLearning.AI。由 OpenAI 员工（Isa Fulford）和吴恩达（Andrew Ng）共同授课 | 英语，1小时40分钟 | 好奇面向开发者的提示词课程的人。需要 **Python**（编程语言的一种）基础。免费一事写着“仅限学习平台测试版（正式发布前的试运行）期间”，请到页面上确认现在是否仍免费再听[^dlai] |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners)（GitHub — 存放资料的网站） | Microsoft | 21讲，**有韩语翻译**（[韩语版](https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations/ko)） | 对做生成式 AI 应用感兴趣的人。先读讲解概念的「Learn」课程（「Build」课程里有代码示例）[^msgenai] |
| [用 AI 学习的分步策划书写作法（AI로 배우는 단계별 기획서 작성법）](https://www.boostcourse.org/aix210) | Boostcourse（부스트코스） | **韩语**，3节课和实践作业 | 想通过韩语课程学习怎样把 AI 用在工作上的人。这是讲怎样用 AI 写策划书的课程，需要报名选课（注册会员）[^boost] |

英语资料可以用 Chrome 这类浏览器的翻译功能（在页面上点鼠标右键 →「翻译成中文」）来读。

讲解 ChatGPT 是怎样做出来的、怎样使用的，Andrej Karpathy 的那些著名视频，汇集在[第1阶段第1章「看视频了解更多」](../00-common/01-what-is-llm.md#看视频了解更多)和[第1阶段第3章「看视频了解更多」](../00-common/03-why-learn.md#看视频了解更多)里。

> Coursera 的著名课程「Prompt Engineering for ChatGPT」和「Generative AI for Everyone」，课程页面上写着“要查看课程资料和作业，必须购买证书课程”，所以从这份免费列表里去掉了（确认日期 2026-10-25）。[^coursera]

<Quiz id="ch111-academy" />

## 亲自试一试

1. 在记事本里编一个有10行左右的日期、品名、数量、金额的表格，存成 CSV，上传到 ChatGPT，发送“请先检查有没有常见的问题”。然后让它用柱状图给出按品名的合计，并请它展示计算方法和假设，把合计和我自己加出来的值对照一下。
2. 用「五行」模板，请它整理本周要做的事。分别发一次去掉审核标准那一行的和加上的，比较差别。
3. 创建一个定时任务（“明天早上提醒我喝水”）。到侧边菜单「定时任务（예약）」里确认能不能看到，看完后删除。
4. 用 `@study` 打开学习模式，用20分钟复习提示词，学一个你最近好奇的主题。

**接下来的练习**（[筹备读书会](../00-common/practice-kit.md)）：上传示例文件 fees.csv，像第1条那样发送“请先检查有没有常见的问题”。看看它能不能找出写了两次的茶点和金额为空的一行。然后发送“请把收入·支出合计和剩余的钱做成表格，把按项目的支出做成柱状图”，把表格里的数字和自己加出来的值对一对。最后把[作业检查表](../00-common/practice-kit.md#最后留下的东西)逐条打勾。

## 小结

- 专家像交办工作那样说话。写下成果、资料、保留项、审核标准、形式这五行，并在每种成果都确认过事先定好的地方之后才使用。
- 快速的事实用搜索，深入的调研用深度研究，成品文件用 Work，困难的思考用推理级别。功能行不行，别去问，直接让它做做看。
- 做得好的回答用「添加到项目来源（프로젝트 소스에 추가）」积累起来，重复的工作按指令 → 模板（Work）→ 技能（按帮助中心所述是公司、学校套餐）的顺序做成模板。
- Word、PowerPoint 的 ChatGPT 加载项也可以免费使用。大改之前先保存副本，并先拿到计划。
- 定时任务通过在对话里请求来创建，在侧边菜单「定时任务（예약）」里管理。项目里的任务读不到项目文件，通过应用修改东西的任务可能会停下来等批准。
- 数据分析是上传整理好的文件，先确认数据问题，再指定方法。学习模式用 `@study` 打开，所有套餐都能用（项目、临时聊天除外）。
- 想学更多，可以看 OpenAI Academy（需要登录，约70~90分钟的三门课程）或免费公开资料（OpenAI Academy 公开视频、DeepLearning.AI、Microsoft、Boostcourse）。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Review criteria | 审核标准 | 判断结果做得好不好的标尺 |
| Scheduled tasks | 定时任务 | ChatGPT 在约定的时间自己执行的任务 |
| Data analysis | 数据分析 | 计算上传文件里的表格和数字，并以摘要、图表呈现的功能 |
| Template | 模板 | 把示例文件和可重复使用的指令打包在一起的框架 |
| Study mode | 学习模式 | 不给答案，而用提问和分步骤讲解来教你的方式 |
| Characteristics | 特性 | 把温暖、表情符号等回答的氛围往多、往少调整的设置 |
| Writing block | 写作块 | 回答里可以直接修改的草稿文字框 |
| OpenAI Academy | OpenAI 学院 | OpenAI 制作的免费在线 AI 课程 |
| Add-in | 加载项 | 附加在 Word、PowerPoint 这类程序里使用的小功能 |

<ChapterDone :chapter="111" />

下一章：第2阶段到此结束。请用[AI 知识水平测试](../00-common/level-test.md)来检验你的实力。

[^adopt]: OpenAI，「ChatGPT Usage and Adoption Patterns at Work」。"Advanced features remain underused, even where they could deliver broad impact." https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work（确认日期 2026-10-24）
[^work]: OpenAI 帮助中心，「ChatGPT Work and Codex」"Describe the outcome you want. Add any files, constraints, and review criteria ChatGPT should use." https://help.openai.com/en/articles/20001275 · 「Using cloud browser in ChatGPT」"Check the result and its sources before relying on it." https://help.openai.com/en/articles/20001280（确认日期 2026-10-24）
[^docs]: OpenAI 帮助中心，「Creating and editing documents, spreadsheets, and presentations with ChatGPT Work」。模板、`@Template-Creator`，"Say what must stay unchanged…" https://help.openai.com/en/articles/20001278（确认日期 2026-10-24）
[^prompt]: OpenAI 帮助中心，「How do I create a good prompt for an AI model?」。https://help.openai.com/en/articles/4936848（确认日期 2026-10-24）
[^aprompt]: OpenAI Academy，「Prompting」。https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting（确认日期 2026-10-24）
[^deep]: OpenAI 帮助中心，「Deep research in ChatGPT」。"Use search for quick facts, and use deep research for depth and thoroughness." https://help.openai.com/en/articles/10500283（确认日期 2026-10-24）
[^ask]: OpenAI 帮助中心，「How to Ask ChatGPT About Its Features」。https://help.openai.com/en/articles/12548278（确认日期 2026-10-24）
[^projects]: OpenAI 帮助中心，「Projects in ChatGPT」。https://help.openai.com/en/articles/10169521（确认日期 2026-10-24）
[^skills]: OpenAI 帮助中心，「Skills in ChatGPT」。"Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" https://help.openai.com/en/articles/20001066（确认日期 2026-10-24）
[^tasks]: OpenAI 帮助中心，「Scheduled tasks in ChatGPT」。各套餐的任务数、项目内任务的文件访问限制、分享时的注意事项。https://help.openai.com/en/articles/10291617（确认日期 2026-10-24）
[^data]: OpenAI 帮助中心，「Data analysis with ChatGPT」https://help.openai.com/en/articles/8437071 · 「Extracting Insights with ChatGPT Data Analysis」"Check this data for common issues." https://help.openai.com/en/articles/9213685（确认日期 2026-10-24）
[^study]: OpenAI 帮助中心，「Using study mode in ChatGPT」https://help.openai.com/en/articles/11780217 · 「Flashcards in ChatGPT」"Flashcards are automatically saved in your library." https://help.openai.com/en/articles/20001533（确认日期 2026-10-24）
[^char]: OpenAI 帮助中心，「Characteristics in ChatGPT」。https://help.openai.com/en/articles/20001038（确认日期 2026-10-24）
[^ui]: OpenAI 帮助中心，「Intelligent UI in ChatGPT」。"Select Personalization → Layout and Visuals → Simple." https://help.openai.com/en/articles/20001598（确认日期 2026-10-24）
[^blocks]: OpenAI 帮助中心，「Working with writing blocks and code blocks in ChatGPT」。https://help.openai.com/en/articles/20001246（确认日期 2026-10-24）
[^links]: OpenAI 帮助中心，「ChatGPT generated links」。https://help.openai.com/en/articles/10984597（确认日期 2026-10-24）
[^academy-courses]: OpenAI Academy 课程页面（登录后）。AI Foundations "Duration: ~70 minutes", "Level: Introduction", "No technical background is required." · Applied AI Foundations "Duration: ~80 minutes", "Level: Intermediate", "We recommend completing AI Foundations first." · Agents and Workflows "Duration: ~90 minutes", "Level: Intermediate", "We recommend completing AI Foundations and Applied AI Foundations first.", "Access to agent capabilities"。三个页面共同的 "The pathway includes two required steps: completing the course and passing the assessment with a score of at least 80%." / "Your progress is automatically saved." https://academy.openai.com/home/courses/ai-foundations-dnq5w · https://academy.openai.com/home/courses/applied-ai-foundations-szsmv · https://academy.openai.com/home/courses/agents-and-workflows-y0qoc（确认日期 2026-10-26）
[^academy-content]: OpenAI Academy 课程正文（需要登录和注册）。AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Use ChatGPT as the workspace, not the source of truth." / "we recommend that you:" "Use a desktop computer or laptop". Applied AI Foundations: "A workflow has five parts" (Goal, Context, Steps, Checkpoints, Output) / "Do not ask ChatGPT to do the whole job at once." / "A workflow note keeps the goal, context, decisions, sources, capabilities, and review points in one place." Applied AI Foundations 补充: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations 补充: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Before you direct the agent to create the project brief document, have the agent review what's in the folder." / "Keep the update internal, do not send or publish it, do not invent owners or dates" / "If Work needs another approved source, start with a plugin. If the same workflow keeps repeating, consider a skill. If the same stable review should run later or recur, consider a scheduled task." / "Often, a clear prompt is enough." / "Use scheduled tasks for workflows that check, monitor, summarize, or report. Be cautious with anything that sends, posts, publishes, deletes, approves, changes records, or creates external commitments." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person"（确认日期 2026-10-26）
[^academy]: OpenAI 帮助中心，「OpenAI Academy courses」。"These badges and certificates of completion are not certifications" https://help.openai.com/en/articles/20001270（确认日期 2026-10-24）
[^word]: OpenAI 帮助中心，「ChatGPT for Word」。"ChatGPT for Word is available on all ChatGPT plans, including Free." / "Word, Excel, and PowerPoint use the same ChatGPT Microsoft add-in." / "ChatGPT memory and skills do not carry over to the add-in." / "Save a copy of important work before making substantial changes." https://help.openai.com/en/articles/20001526（确认日期 2026-10-24）
[^ppt]: OpenAI 帮助中心，「ChatGPT for PowerPoint」。"Free and Go include limited usage access." / "Ask for a plan first when you are making larger edits." / "For important work, duplicate the file first so you can revert if needed." https://help.openai.com/en/articles/20001242（确认日期 2026-10-24）
[^gpt-make]: OpenAI 帮助中心，「Creating and editing GPTs」。"Prefer positive, concrete instructions (“Do X”) over long lists of prohibitions (“Don’t do Y”) when possible." / "Use knowledge for reference material, not rules or behavior." / "Before adding more tools, tighten instructions and add examples." https://help.openai.com/en/articles/8554397（确认日期 2026-10-24）
[^slack]: OpenAI 帮助中心，「Using Slack in ChatGPT」。"A shared task link does not transfer your Slack connection, credentials, channel access, or message history." https://help.openai.com/en/articles/12525822（确认日期 2026-10-24）
[^apps-trouble]: OpenAI 帮助中心，「Troubleshooting plugins and apps in ChatGPT」。"If approval is required, the task pauses until you review it." / "Before resending an email or message, check the intended account’s sent messages and the destination." https://help.openai.com/en/articles/20001497（确认日期 2026-10-24）
[^drive]: OpenAI 帮助中心，「Google Drive app and setup in ChatGPT」。"Finding a filename or file details does not confirm that ChatGPT retrieved the file’s contents." https://help.openai.com/en/articles/10929079（确认日期 2026-10-24）
[^academy-public]: OpenAI Academy 公开页面。「Introduction to Prompt Engineering」(Posted Mar 08, 2025)，「Advanced Prompt Engineering」，「ChatGPT fundamentals」(Last updated on May 30, 2026)。三个页面都确认了可以在未登录的浏览器中打开。https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13 · https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13 · https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics（确认日期 2026-10-25）
[^dlai]: DeepLearning.AI，「ChatGPT Prompt Engineering for Developers」。讲师 Isa Fulford "Member of Technical Staff, OpenAI"·Andrew Ng，"1h40m"，"Beginner"，"Only a basic understanding of Python is needed."，"Course access is free for a limited time during the DeepLearning.AI learning platform beta!" https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/（确认日期 2026-10-25）
[^msgenai]: Microsoft，「Generative AI for Beginners」GitHub 仓库 README。"This course has 21 lessons." / "Lessons are labeled either 'Learn' lessons explaining a Generative AI concept or 'Build' lessons that explain a concept and code examples"。韩语翻译在 `translations/ko` 文件夹。https://github.com/microsoft/generative-ai-for-beginners（确认日期 2026-10-25）
[^boost]: Boostcourse（부스트코스），「用 AI 学习的分步策划书写作法（AI로 배우는 단계별 기획서 작성법）」课程介绍。「免费课程（무료강의）」，难度「入门（입문）」，「随时听课（상시 수강）」，课程计划 #1~#3 和「[作业] 自主实践（[과제] 자율 실습 해보기）」，讲师李承弼（이승필）。https://www.boostcourse.org/aix210（确认日期 2026-10-25）
[^coursera]: Coursera 课程页面 FAQ。"To access course materials, assignments, and earn a Certificate, you'll need to purchase the Certificate experience when you enroll in a course." https://www.coursera.org/learn/prompt-engineering · https://www.coursera.org/learn/generative-ai-for-everyone（确认日期 2026-10-25）
[^scheduled-name]: 帮助中心把这个菜单叫作「已安排（예약됨）」，但实际的界面名称是「定时任务（예약）」。
[^screen-scheduled]: 亲自确认了侧边菜单「定时任务（예약）」界面。提示文字 "ChatGPT에게 작업 예약, 알림 설정 또는 업데이트 모니터링을 요청하세요"（请 ChatGPT 安排任务、设置通知或监控更新），输入框「安排任务（작업 예약하기）」，任务行的「暂停（일시 중지）」「编辑（편집）」按钮，「推荐（추천）」列表（新闻更新、邮件监控、寻找周末读物等）。点开任务打开的面板里显示的是真实的任务结果，所以没有收入（确认日期 2026-10-28，Plus 账号网页界面）
[^screen-data]: 上传假会费账本 fees.csv，并发送本节的提示词后亲自确认。第一次回答找出了空值和重复，并停止了汇总；第二次回答里的图片图表，韩文变成了方框，请它重新画之后，换成了画在界面里的图表。图表旁边的按钮是「下载图表（차트 다운로드）」「展开图表（차트 펼치기）」。删除对话之后，fees.csv 仍留在资料库里，从资料库里删除时，提示 "휴지통으로 이동되며 30일 후 영구 삭제됩니다"（将移到回收站，30天后永久删除）（确认日期 2026-10-28，Plus 账号网页界面）
[^screen-study]: 在输入框里输入 `@study`，亲自确认了建议列表（没有发送）。建议名称「学习（공부하기）」，说明 "새로운 개념을 배워보세요"（学习新概念）（确认日期 2026-10-28，Plus 账号网页界面）
