# 第12章 像专家一样使用——判断、测试、积累

> **一句话总结**：用得好，需要的不只是多认识几个按钮。而是**判断该把什么交出去、交出去之前先测试、把重复的事积累下来**的能力。
> 这一章讲的是，怎样把第 1~11 章学到的功能**组合起来**，适应我自己的工作。最后会介绍 Anthropic 做的课程合集 Claude Academy。

这一章几乎不讲新功能。主题是前面各章学到的 Claude 功能，什么时候用、怎么用。

判断该把什么交出去的方法（4D）、交出去之前先用已经知道答案的事来测试的方法、学习时让 AI 向你提问的方法，这类**对任何 AI 都适用的方法**，在[第1阶段第11章「像专家一样使用」](../00-common/11-expert.md)里。先读一读再来，这一章会更轻松。这一章把那些方法对照 Claude 的功能和菜单来讲。

## 选择适合工作的工具

不要先选菜单。先看看眼前的这件事是什么样子的。这样要用的功能自然就定下来了。[^academy-tabs]

| 如果是这样的事 | 就用这个 | 详细内容 |
|---|---|---|
| 提问、打磨、一起思考 | 普通对话 | [第1阶段](../00-common/) |
| 简单的事实、今天发生的事 | 网页搜索 | [第6章](06-search.md#什么时候用什么) |
| 不需要最新信息、深入推敲 | 扩展思考 | [第6章](06-search.md#什么时候用什么) |
| 收集大量资料做成报告 | 研究（付费） | [第6章](06-search.md#什么时候用什么) |
| 持续推进同一件事 | 项目 | [第7章](07-projects-tools.md#项目-—-把资料和指令放在一处) |
| 需要文档·表格·演示文件 | 创建文件 | [第4章](04-files-artifacts.md#让它生成文件——excel、word、powerpoint、pdf) |
| 经过多个步骤后拿到成果 | Cowork（付费） | [第8章](08-cowork.md#什么是-cowork——交给它的是事-不是对话) |
| 到固定时间就重复做 | 定时任务（付费） | [第8章](08-cowork.md#到固定时间自动做——预约任务) |

区分网页搜索·扩展思考·研究的标准来自帮助文档。[^when] 其余各行是把前面各章的内容汇总到一张表里。

大多数情况下，最上面一行，也就是一个普通对话就够了。

<Quiz id="ch212-tools" />

## 把重复的事积累下来

用着用着，你会发现自己在重复同样的话。把重复的内容写下来一次，之后 Claude 就会带着这些内容开始。

可以放的地方有四个。不需要一开始就全写。按下面的顺序，需要的时候再一个一个加。[^academy-layers] 什么时候不该做成模板，在[第1阶段第11章「把重复的事积累下来」](../00-common/11-expert.md#把重复的事积累下来)里。

1. **每个对话都提同样的要求** → 写进[指示](05-memory.md#指令-—-适用于所有对话的规则)。
2. **持续推进同一件事** → 把这件事归到一个[项目](07-projects-tools.md#项目-—-把资料和指令放在一处)里。
3. **每次都要解释同样的步骤** → 把这个步骤做成[技能](07-projects-tools.md#技能-—-把做事的方式放进去)。
4. **想把打磨好的技能分成一个包** → 把多个技能打包成[插件](07-projects-tools.md#插件-—-按工作打包的套装)。插件是付费套餐的功能。[^plugins]

按顺序来，每次要从头解释的事会一点一点减少。

如果分不清项目和技能，可以这样记。**项目装的是资料，技能装的是做事的步骤。**[^academy-skills-vs] 详细的区别在[第7章「和指示·项目·连接器有什么不同」](07-projects-tools.md#和指令·项目·连接器有什么不同)里。

### 做好的技能，开关对比一下

做好的技能，把同样的请求发两次比较一下。一次开着技能，一次关掉。对比和修改的要领，在[第1阶段第11章「做好的模板要测试并修改」](../00-common/11-expert.md#把做好的模板测试一下再修改)里。

技能可以在「自定义」→「Skills」里开关（[第7章「默认技能和我的技能」](07-projects-tools.md#默认技能和我的技能)）。[^skills-use] 关掉的技能，Claude 不会使用。

<Quiz id="ch212-layers" />

## 把表格和数字交出去

像[第4章「上传文件」](04-files-artifacts.md#上传文件)那样，上传 CSV·TSV 之类的表格文件，Claude 就会分析数据并画图表。图表也可以拿到 PNG 之类的图片文件。[^create]

```
附上的 CSV 是附近小店最近三个月各个品类的销售记录。请按品类合计从大到小做成表格，再做一张柱状图的 PNG 图片。
计算用的方法也请一行一行写出来。
```

数字分析最担心的是，结果能不能信。请先用**已经分析过的以前的资料**来对一对。方法和例子在[第1阶段第11章「把表格和数字交出去」](../00-common/11-expert.md#把表格和数字交给它)里。重要的计算，请用别的计算程序或者手算再核实一遍（[第4章](04-files-artifacts.md#让它生成文件——excel、word、powerpoint、pdf)）。

<Quiz id="ch212-data" />

## 想学更多——Claude Academy

**Claude Academy** 是 Anthropic 做的在线课程合集。下面的课程，不用登录就能打开课程正文（2026-10-26 确认）。正文全部是**英语**，课程首页上没有写需要多长时间。[^academy-courses]

| 课程 | 课时数 | 适合这样的人 | 需要准备 |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14 节课 + 测验 | 不论有没有 AI 经验，任何人 | 任意 AI 服务的账号。不需要付费套餐 |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13 节课 + 测验 | 想知道 AI 为什么那样回答的人 | 不需要预备知识 |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13 节课 + 测验 | 第一次在工作中使用 Claude 的人 | Claude 账号（包括免费）。Cowork·研究的课需要付费套餐 |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14 节课 + 测验 | 在文件和应用之间来回做事的人 | 付费套餐，用到文件夹的课需要电脑应用。不懂编程也可以 |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6 节课 | 想自己动手做技能文件的人 | Claude Code（第3阶段会讲的开发者用工具） |

- 前两门课，用 Claude 以外的其他 AI 来学也可以。这两门课的设计是先学哪一门都可以。[^academy-courses]
- 「AI Fluency」课程在最后的测验里答对 80% 以上，就可以把**结业徽章**（completion badge）添加到账号上。它不是资格证书。[^academy-courses] 这本指南的[理解度确认考试](../00-common/certificate.md)也是同样性质的学习徽章。
- 「Introduction to agent skills」请在学完这本指南的第3阶段（编程代理工具）之后再看。所有内容都以 Claude Code 为基准。

英语页面可以用 Chrome 之类浏览器的翻译功能来读（在页面上点鼠标右键 →「翻译成中文」）。

### 课程里学到的框架——和这本指南对照

课程里出现的内容和这本指南是一样的，只是名称不同。了解下面的对应关系，在课程里遇到新术语时，就容易猜出意思。课程中使用的名称，按英语原文直接写出。

- **Setting the stage · Defining the task · Specifying rules**（Claude 101）：确定我的角色和目标、要做的事、语气·格式·示例，然后提出请求。[^academy-stage] 和[第1阶段第4章「好提示词的 5 个要素」](../00-common/04-prompt-basics.md#好提示词的5个要素)是同样的想法。
- **4D — Delegation · Description · Discernment · Diligence**（Claude 101、AI Fluency）：请看[第1阶段第11章「专家有什么不同」](../00-common/11-expert.md#专家有什么不同)。
- **Evals**（Claude 101、Cowork）：用已经知道答案的事来测试。请看[第1阶段第11章「交出去之前先测试」](../00-common/11-expert.md#交出去之前先测试)和这一章的[「做好的技能，开关对比一下」](#做好的技能-开关对比一下)。
- **Chat · Cowork · Code**（Claude 101）：来回交流着做的事用对话，交出去的事用 Cowork，做程序用 Claude Code。[^academy-tabs] 请看[第8章「什么是 Cowork」](08-cowork.md#什么是-cowork——交给它的是事-不是对话)和这一章的[「选择适合工作的工具」](#选择适合工作的工具)。
- **成果·资料·只有我知道的情况**（Cowork）：交出去的时候写下这三样。[^academy-review] 和[第8章「交付的要领」](08-cowork.md#交代任务的要领)相同。
- **检查结果的三个问题**（Cowork）：是我想要的结果吗？事实对吗？有没有编造的地方？[^academy-review] 请一并看[第1阶段第9章「核实的四个习惯」](../00-common/09-safety.md#核对的四个习惯)。
- **"projects store knowledge, skills perform tasks"**（Claude 101）：项目装资料，技能装做事的步骤。[^academy-skills-vs] 请看这一章的[「把重复的事积累下来」](#把重复的事积累下来)。

<Quiz id="ch212-academy" />

## 亲自试一试

像[第11章「实践时要遵守的三件事」](11-practice.md#做练习时要守的三条)那样，不要用真实的公司资料，而是用编出来的资料来试。

1. 在 Claude 里做[第1阶段第11章「亲自试一试」](../00-common/11-expert.md#亲自动手试试)的第 2~3 项（用已经知道答案的邮件来测试）。把能得出正确结果的那一句话，放进[第5章的指示](05-memory.md#指令-—-适用于所有对话的规则)或者项目指示里。
2. 编一张大约 10 行的日期·品类·金额表，保存成 CSV。我先手算出各品类的合计，再用这一章的 CSV 提示词拿到表格和 PNG 图表，对一对两个合计。
3. 如果做了一个技能，同样的请求，开着技能发一次，关掉技能发一次，比较两个回答。

**连续任务**（[准备读书会](../00-common/practice-kit.md)）：上传示例文件 fees.csv，发送“如果有重复或空值，先告诉我。然后把收入·支出合计和剩余的钱做成表格，把各项目的支出做成柱状图 PNG”。看它能不能找出写了两次的茶点和金额为空的那一行。最后，把[作业检查表](../00-common/practice-kit.md#最后留下的东西)一项一项勾选。

## 整理

- 对任何 AI 都适用的判断·测试·核实方法，在第1阶段第11章里。这一章把它们对照 Claude 的功能来讲。
- 先看事情的样子，再看菜单。大多数情况下，一个普通对话就够了。
- 重复的事按指示 → 项目 → 技能 → 插件（付费）的顺序，需要的时候一个一个积累。
- 做好的技能，在「自定义」→「Skills」里开关，分别请求两次来比较。
- 上传表格文件，可以拿到分析和图表（包括 PNG 图片）。相信之前，先用以前的资料对一对。
- 想学更多，就看 Claude Academy 课程（英语，课程正文不用登录就能阅读）。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Claude Academy | Claude 学院 | Anthropic 做的在线课程合集 |

4D·Evals 之类的课程术语，在[第1阶段第11章「术语整理」](../00-common/11-expert.md#术语解释)里。

<ChapterDone :chapter="212" />

下一章：第2阶段 Claude 指南到这里就结束了。请在[第2阶段 · Claude 目录](./)里选择想再看的章，或者用 [AI 知识水平考试](../00-common/level-test.md)检验一下实力。

[^academy-tabs]: Claude Academy「Claude 101」课程「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （确认日期 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」课程「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （确认日期 2026-10-26）
[^academy-skills-vs]: Claude Academy「Claude 101」课程「Working with skills」。"projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills （确认日期 2026-10-26）
[^academy-stage]: Claude Academy「Claude 101」课程「Your first conversation with Claude」。"One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude （确认日期 2026-10-26）
[^academy-review]: Claude Academy「Introduction to Claude Cowork」课程「Hand Claude Cowork your first task」。"name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop （确认日期 2026-10-26）
[^academy-courses]: Claude Academy 课程首页。AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." 同一课程的课「Introduction to AI Fluency」"you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities"，测验 "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · 已确认课程正文在未登录的浏览器里可以打开（确认日期 2026-10-26）
[^when]: Anthropic 帮助文档，《When should I use web search, extended thinking, and research?》。"Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 （确认日期 2026-10-26）
[^plugins]: Anthropic 帮助文档，《Use plugins in Claude》。"Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 （确认日期 2026-10-26）
[^skills-use]: Anthropic 帮助文档，《Use skills in Claude》。"Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 （确认日期 2026-10-26）
[^create]: Anthropic 帮助文档，《Create and edit files with Claude》。"You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 （确认日期 2026-10-26）
