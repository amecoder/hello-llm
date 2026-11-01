# 第6章 搜索与 Deep Research——核实依据、长篇调查报告、笔记本、学习助手

> **一句话总结**：如果需要把多方资料查找并整理成的**长篇报告**，就用 **Deep Research**。它会先给你看调查计划，有要改的地方，当场就改。
> 想长期收集某个主题的资料和对话，就用**笔记本**；学习时用**引导式学习·测验·闪卡**。无论是什么回答，依据都要亲自核实。

界面以 2026 年 10 月的网页版为准，图片是付费套餐（Google AI Pro）的韩语界面。

## 核实回答的依据

Gemini 的回答可能出错。Google 也提醒，**要时常审视回答，并用内置工具或 Google 搜索重新核实事实**。[^learn]
如果在回答下方或句子之间看到「来源」，请点开，打开原文看看。也有没有来源的回答（[第3章](03-chats.md#核实出处)）。

核实时，请这样问问自己。

- 来源链接真的是在说这个内容吗？
- 数字和日期与原文一致吗？
- 来源是官方机构或可靠的地方吗？

**问得越具体，回答越有用。**[^learn] 比如，可以这样比较一下。

| 不够好的问题 | 更好的问题 |
|---|---|
| “告诉我阅读率” | “告诉我最近 10 年韩国成年人的年度阅读率是怎么变化的，并附上官方统计的出处” |

更好的问题写全了期间·对象·出处条件，核实回答也更容易（[第1阶段第9章](../00-common/09-safety.md)）。

<Quiz id="ch306-check" />

## Deep Research——拿到长篇调查报告

**Deep Research** 是一个会多次搜索、推敲之后，为你做出**综合报告**的功能。默认使用 Google 搜索作为来源。[^deep]
需要的条件是**年满 18 周岁并已登录**。帮助文档里没有说一定要有付费套餐。不过免费账号在人多的时段可能用不了（[第1章](01-getting-started.md#使用额度——5-小时·每周·阅读量)）。[^deep][^limits] Google AI Pro·Ultra 可以用质量更高的模型生成报告。[^deep]

### 开始使用

请点输入框的「+」 → 「更多工具」 → 「Deep Research」（[第2章](02-screen-tour.md#输入框和-菜单)）。[^deep][^screen]

![输入框里 ① 「Deep Research」已开启的样子。提示文字“你想调查什么？”，② 「来源」按钮，③ 来源菜单（“请选择一个或多个来源”——「Google 搜索」（已勾选）·「Gmail」·「Drive」·「聊天」·「启用已连接的应用」），④ 「文件」按钮上标有红色编号](../../../guide/12-gemini/assets/shot-16-deep-sources-marked.png)

**红色编号和下面列表的编号是同一处。**[^screen]

- ① 表示「Deep Research」已经开启。输入框的提示变成“你想调查什么？”。
- ② 点「来源」，就可以选择 ③ 到哪里去找。「Google 搜索」一开始就是勾选的。
- ③ 「聊天」看起来是把我过去的 Gemini 对话作为来源加进去的选项（帮助文档里没有说明）。要把 Gmail·Drive 作为来源使用，Google Workspace 必须已连接到 Gemini（[第7章](07-skills-apps.md#已连接的应用-—-在-gemini-里用-gmail·drive·日历)）。[^deep] 去掉「Google 搜索」的勾选后，就**只在选定的来源里**查找。[^deep]
- ④ 用「文件」可以一起放进我的文件。[^deep]

写下要调查的主题发送后，Gemini 会先给你看**调查计划**。[^deep]

### 确认计划后开始

![Deep Research 进行中的界面。① 计划下面的「修改计划」·「开始研究」按钮，② 写着“正在调查 16 个网站……”的进度卡片，③ 右侧调查面板（「显示思考过程」，调查步骤和找到的网站列表），④ 停止按钮上标有红色编号](../../../guide/12-gemini/assets/shot-17-deep-run-marked.png)

**红色编号和下面列表的编号是同一处。**[^screen]

- ① 用**「修改计划」**来修改计划，点**「开始研究」**，调查就开始了。[^deep][^screen]
- ② 调查开始后，会出现“我这就开始。研究完成后会通知你。在此期间你可以离开这个对话。”的回答，以及进度卡片。[^screen]
- ③ 在右侧面板里，可以看到按哪些步骤调查、查看了哪些网站。[^screen]
- ④ 想停下来，就点这个按钮。弹出「要取消调查吗？」时，点「是，取消」。[^screen]

**如果想修改计划，请尽量马上点「修改计划」。** 这本指南试过一次，没有点「开始研究」，调查却已经开始了。图中的「开始研究」气泡也是当时自己冒出来的。帮助文档里只写着要点「开始研究」才会开始，所以没能确认为什么会这样。如果已经开始了，可以用 ④ 停下来。[^screen]

报告**通常需要 5~10 分钟**，复杂的会更久。等待期间可以离开对话。完成后会通知你。[^deep]

### 要知道的事

- **会用掉很多用量**（[第1章](01-getting-started.md#使用额度——5-小时·每周·阅读量)）。[^limits] 一天能做的调查数量，以及能同时运行的调查数量也有上限。接近上限时，会告诉你剩余的次数。[^deep]
- **过去的报告在对话列表里找。** 必须开着「保留活动记录」，之后才能找到。[^deep]
- **报告可以导出到 Docs。**[^deep] 也可以转成音频概览（[第4章](04-files-create.md#canvas-—-一起修改文档和应用)）。[^deep]

报告也是 Gemini 写的文字。重要的数字，请打开报告里的来源链接亲自核实。

```
请调查最近 10 年韩国成年人的年度阅读率是怎么变化的。
优先使用官方统计（文化体育观光部的国民阅读实况调查等），
各年份的数值做成表格，每个数值都附上出处。
```

### 那 Deep Think 呢？

**Deep Think** 曾经是思考更久的功能，但现在**正在被 Gemini 4 Argon 取代**。而且以前只有 Google AI Ultra 订阅者才能用。[^deepthink] 难题的话，在[第2章](02-screen-tour.md#模型按钮-—-模型和思考级别)的模型按钮里选择 Argon 和思考级别「高」就行（Pro·Ultra）。

<Quiz id="ch306-deep" />

## 笔记本——按主题收集资料和对话

**笔记本**是把一个主题的资料（来源）、指示和对话集中放在一处的空间。在里面对话时，它会记住放进去的资料和指示以及以前聊过的内容，接着继续。[^notebook]
比如，在“读书会”笔记本里放进章程、上次的会议记录和聚会日程表，就不用每次重新上传资料了。

点侧边菜单「笔记本」下面的「新建笔记本」，取个名字后提问。资料通过「添加来源」放进去（[第2章](02-screen-tour.md#侧边菜单-—-新聊天和以前的对话)）。[^notebook][^screen]

| 可以放的资料 | 例子 |
|---|---|
| 我设备里的文件 | PDF、文档、表格文件、图片、音频、文本 |
| Google Drive 文件 | 上传到 Drive 里的文档·表格 |
| 网站地址 | 文章或说明页面 |
| 复制的文字 | 备忘、邮件正文 |

出处：Google 帮助文档[^notebook]

有几点要知道。[^notebook]

- **一个笔记本最多可以放 600 份资料**（因套餐而异）。
- 在笔记本里也可以使用**网页搜索和 Gemini 工具**。
- 笔记本改名、放入指示（「笔记本设置」）、置顶，在「所有笔记本」里通过笔记本的「更多」来做。
- **删除笔记本时，里面的资料和对话也会一起删除。**
- 即使「保留活动记录」关闭，也可以对话，但是对话自动保存、记住过去的对话、放入过去的对话、**把 Drive 文件作为资料放入**等一部分功能不能使用。
- 这是逐步开放的功能，所以可能还看不到。

用对话菜单里的「添加到笔记本」，也可以把过去的对话放进笔记本（[第3章](03-chats.md#置顶·改名·删除)）。这个也必须开着「保留活动记录」才行。[^notebook][^screen]

<Quiz id="ch306-notebook" />

## 学习助手——引导式学习·测验·闪卡

学习时，可以把 Gemini 当作**家教**来用。请点输入框的「+」 → 「更多工具」 → **「引导式学习」**。[^tutor][^screen] 也可以请它用图片或图表来讲解。[^tutor]

准备考试时，请它做**测验、闪卡（正面是问题、背面是答案的单词卡片）、学习指南**。[^study] 要领是先说要做什么，然后再写资料或主题。[^study]

```
帮我出一份测验。主题是朝鲜后期的实学，出 10 道选择题。
```

```
帮我做闪卡。正面是英语单词，背面是词义和例句。单词用下面的列表。
（粘贴单词列表）
```

- 做测验时，可以看「提示」，或者做完后用「生成更多问题」得到更多题目。做完后，会告诉你**强项和需要继续学习的部分**。[^study]
- 闪卡可以使用打乱顺序（「随机模式」）和朗读。[^study]
- 作为模拟考试，帮助文档里写的考试有 SAT·JEE Main·NEET UG 等，没有写韩国的考试。[^study]

**用在学校作业上时，请先确认学校的 AI 使用规定。**[^learn] 把 Gemini 的建议当作出发点，再加上自己的想法和语言来完成。[^learn]

<Quiz id="ch306-study" />

## 亲自试一试

1. 选一个你好奇的主题，比如“最近 10 年韩国1 人家庭比例的变化”，开启 Deep Research，计划出来后用「修改计划」改成“只用官方统计”，然后点「开始研究」。
2. 从报告里选一个数字，打开来源链接，确认和原文是否一致。
3. 用「新建笔记本」创建“读书会”笔记本，用「添加来源」放进练习用的通知，然后试着说“请用这个格式写下次聚会的通知”。
4. 开启「引导式学习」，一步一步地学一个你最近好奇的概念。

**连续任务**（[准备读书会](../00-common/practice-kit.md)）：把作业里的示例文件（会议记录·备忘·账本）作为来源放进“读书会”笔记本，然后问“请整理下次聚会要准备的东西和剩余的会费”。亲自确认得到的数字和账本是否一致。

## 整理

- Gemini 的回答可能出错。打开「来源」，用内置工具或 Google 搜索重新核实。问得越具体，越容易核实。
- Deep Research 年满 18 周岁的人登录后就能用。免费账号在拥挤的时段可能用不了。在「来源」里选择 Google 搜索·Gmail·Drive 等，计划出来后点「修改计划」或「开始研究」。
- 报告通常需要 5~10 分钟，会用掉很多用量。每天的调查数量有上限。可以导出到 Docs。
- Deep Think 正在被 Gemini 4 Argon 取代。
- 笔记本按主题收集资料（因套餐而异，最多 600 份）·指示·对话。删除笔记本时，里面的资料和对话也会一起删除。
- 用「引导式学习」、测验、闪卡来辅助学习。学校作业要先看学校的规定。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Deep Research | 深度研究 | 多次搜索、推敲后做出综合报告的功能 |
| Source | 来源（出处·资料） | 作为回答或调查依据的网页·文件 |
| Research plan | 调查计划 | Deep Research 在调查之前给你看的步骤列表 |
| Deep Think | 深度思考 | 曾经会思考很久的功能。正在被 Gemini 4 Argon 取代 |
| Notebook | 笔记本 | 集中放一个主题的资料·指示·对话的空间 |
| Guided Learning | 引导式学习 | 把 Gemini 当作家教的学习工具 |
| Flashcard | 闪卡 | 正面是问题、背面是答案的单词卡片 |

<ChapterDone :chapter="306" />

下一章：[第7章. 技能和已连接的应用](07-skills-apps.md)

[^screen]: 在 Gemini 网页界面（Google AI Pro，韩语）上用练习用的对话亲自确认（对话在截图后已删除）。开启「Deep Research」后输入框提示 "무엇을 조사하고 싶으신가요?"，「소스」（已选中 Google 搜索）和「파일」按钮。「소스」菜单 "하나 이상의 소스를 선택하세요"——「Google 검색」「Gmail」「Drive」「채팅」「연결된 앱 사용 설정」。计划下面的按钮「계획 수정」「연구 시작」（帮助文档韩语版是「계획서 수정」「조사 시작」）。调查开始后的回答 "착수할게요. 연구가 완료되면 알려 드릴게요. 그러는 동안 이 대화에서 나가셔도 됩니다."，进度卡片 "웹사이트 16개 조사 중..."，右侧面板「생각하는 과정 표시」。点停止按钮会出现「조사를 취소하시겠어요?」——「아니요」「예, 취소합니다」。这本指南在没有点「연구 시작」的情况下，等计划期间调查就开始了，所以拍下进行界面后取消了。「도구 더보기」里的「가이드 학습」，侧边菜单「노트북」里的「새 노트북」「모든 노트북」，对话菜单里的「노트북에 추가」。（确认日期 2026-10-31）
[^learn]: Google 帮助文档，《Learn in creative ways with generative AI》（韩语版《생성형 AI를 활용해 창의적으로 학습하기》）。"Important: Make sure to check and follow your school’s policy on using Generative AI." / "Use its suggestions as a starting point, then add your own unique voice and ideas to create something truly original." / "Always evaluate responses: While generative AI is a powerful tool, it can make mistakes." / "It’s important to always fact-check information using built-in tools or by double-checking with Google Search." / "Be specific: The more specific your questions, the more helpful the AI's answers will be." https://support.google.com/gemini/answer/15216790 （确认日期 2026-10-31）
[^deep]: Google 帮助文档，《Use Deep Research in Gemini Apps》（韩语版《Gemini 앱에서 Deep Research 사용하기》）。"By default, Gemini includes Google Search as a source for your research." / "You can also upload files and add NotebookLM notebooks." / "Be 18 or over." / "Google AI Pro and Google AI Ultra users can generate reports using Pro for even higher quality. All users can use Thinking for their reports." / "In Gemini Apps, there are limits for:" / "Number of research requests you can run at the same time" / "If you’re close to your limit, Gemini Apps notifies you how many research requests are left for the day." / "To update the research plan before you create a report, click Edit plan." / "Click Start research." / "Google Search is included as a source by default. To limit your research to other selected sources, deselect Google Search." / "It usually takes about 5-10 minutes to generate the report since Gemini analyzes many sources. For more complex reports, it may take longer." / "Important: You can only find past research reports if your Keep Activity setting is on." / "To export the report, click Export to Docs ." / "Other Google services, like Gmail and Drive, are only available if the Google Workspace app is connected to Gemini Apps." / "On the right in the Canvas panel, click Create  Audio Overview ." 韩语版里有 "Gemini가 주제에 맞는 조사 계획서를 작성합니다." https://support.google.com/gemini/answer/15719111 （确认日期 2026-10-31）
[^limits]: Google 帮助文档，《Gemini Apps limits & feature availability》。"This requires Gemini to use multiple, multi-step search queries and several rounds of reasoning sweeps to create a comprehensive report." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." https://support.google.com/gemini/answer/16275805 （确认日期 2026-10-31）
[^deepthink]: Google 帮助文档，《Use Deep Think in Gemini Apps》（韩语版《Gemini 앱에서 Deep Think 사용하기》）。"Important: Deep Think is being replaced by Gemini 4 Argon." / "Be a Google AI Ultra subscriber or have a Google AI Ultra for Business license." https://support.google.com/gemini/answer/16345172 （确认日期 2026-10-31）
[^notebook]: Google 帮助文档，《Organize your projects with notebooks in Gemini Apps》（韩语版《Gemini 앱의 노트북으로 프로젝트 정리하기》）。"Notebooks provide a continuous chat experience that remembers your sources, instructions, and ongoing discussions." / "We’re gradually making this feature available, so it might not be available to you just yet." / "Some features in notebooks require Keep Activity turned on. When Keep Activity is off, you can still chat with your notebook, but the following features aren’t available" / "Give your new notebook a name. This name helps you organize your notebooks and also helps you find them" / "Based on your Google AI Plan, you can add up to 600 sources." / "Files from your device: PDFs, documents, spreadsheets, images, audio, text files, files, and .md files." / "Files from Google Drive." / "Websites/URLs" / "Copied text" / "Auto-saving chats. Gemini cannot save new chats in your notebook." / "Adding existing chats. You cannot add existing chats to a notebook directly from the sidebar." / "Google Drive. You cannot add files from Google Drive as sources." （这两条都是关闭保留活动记录时不能用的功能列表）/ "Pin or unpin a notebook" / "Your chats in Gemini apps notebooks can include web searches and use of any Gemini tools." / "Important: If you delete a notebook, any sources or chats that you added to that notebook will also be deleted." / "You can create detailed instructions for Gemini Apps, like how to format responses or the tone you want it to use." 韩语界面名称「새 노트북」「소스 추가」「모든 노트북」「이름 바꾸기」「노트북 설정」「고정」。https://support.google.com/gemini/answer/16972047 （确认日期 2026-10-31）
[^tutor]: Google 帮助文档，《Use learning tools in Gemini Apps》（韩语版《Gemini 앱에서 학습 도구 사용하기》）。"You can use Gemini Apps as a tutor with guided learning, visual aids, and educational resources." / "Gemini Apps may include images in responses to help explain a topic or concept. You can also ask Gemini to provide a diagram or image in your prompt." https://support.google.com/gemini/answer/16448384 （确认日期 2026-10-31）
[^study]: Google 帮助文档，《Create quizzes, flashcards, practice tests & more in Gemini Apps》（韩语版《Gemini 앱에서 퀴즈, 플래시카드, 연습 시험 등 만들기》）。"You can use Gemini Apps to create, use, and share study materials like flashcards, quizzes, and study guides to help prepare for exams." / "Tip: Start your prompt telling Gemini what to create followed by the materials or topic you want to study." / "Supported tests include SAT, JEE Main, and NEET UG." / "Once you finish a quiz, wait a moment for Gemini to share strengths and focus areas." / "To get a hint, click Hint." / "To generate more questions, when you complete the quiz, click More questions." / "To have Gemini play audio of the text, click Text to speech ." / "To shuffle the flashcards, click Shuffle mode . This will shuffle all of the flashcards in the deck." 韩语界面名称「힌트」「더 많은 질문 생성」「셔플 모드」「텍스트 음성 변환」。https://support.google.com/gemini/answer/16275879 （确认日期 2026-10-31）
