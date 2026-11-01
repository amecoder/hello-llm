# 第1章 Claude Code 是什么，在哪里用——和聊天的区别、使用的地方、套餐

> **一句话总结**：Claude Code 是**直接读取我电脑里的文件夹、修改文件、运行命令**的 Claude。不用像聊天那样拿到回答再复制粘贴，而是把事情交给它，然后检查结果。
> 要使用，需要**付费订阅**（Pro·Max·Ultra·Team·Enterprise）。这个阶段从不需要终端的**桌面应用**开始。

这一章是根据 2026 年 10 月 31 日确认的 Claude Code 官方文档写的。功能和菜单名称经常变化。

## 和聊天有什么不同

第2阶段用的 Claude 聊天，是**提问并拿到回答**的地方。回答里的文字，要我自己复制再粘贴到文件里。

**Claude Code 直接在我电脑的文件夹里工作。** 官方文档把 Claude Code 介绍为“读取文件夹的内容、修改文件、运行命令”的工具。[^overview] 你用平时说的话描述想要的东西，它就会规划方法，跨多个文件工作，最后还会确认是否运行正常。[^overview]

| | 聊天（第2阶段） | Claude Code（第3阶段） |
|---|---|---|
| 工作的地方 | 对话窗口里 | 我电脑里的文件夹 |
| 文件 | 我上传，拿到的回答由我粘贴 | Claude 直接读取并修改文件夹里的文件 |
| 多步骤的事 | 我一步一步地接着做 | 自己衔接规划 → 工作 → 确认 |
| 我要做的事 | 读回答并搬运 | 交给它，检查改动的内容 |

出处：这本指南的整理（官方文档没有直接与聊天做比较）[^overview]

这种方式叫作**代理**（Agent，自己推进多个步骤的 AI）。官方文档也把 Claude Code 称为“代理式编程工具”（agentic coding tool）。[^overview]

第2阶段 Claude 指南里的 **Cowork** 也是把整件事交出去的功能（[第2阶段 Claude 第8章](../10-claude/08-cowork.md)）。桌面应用里同时包含聊天（Chat）、Cowork 和 Claude Code（**Code** 标签）。[^linux] 这个阶段讲其中的 **Code** 标签。

<Quiz id="ch401-what" />

## 可以交给它什么事

名字叫“代码”，但它做的事，说到底是**读取并修改文件夹里的文件**。[^overview] 官方文档举的例子是开发者的工作。[^overview]

- 开发功能、修复错误
- 出了错误，就把错误信息粘贴进去，或者用语言描述症状
- 写测试、修正多个文件的格式错误、写发布说明（改动内容的说明文）之类的重复工作

**这本指南不用代码，而是用装着备忘文件的文件夹来练习。** 把会议备忘、学习笔记、每天的回顾这类没整理的备忘放进去，就会得到**按我定的格式**整理好的会议记录、学习笔记、每周回顾，这样一个「按我的方式整理的工具」，在整个第3阶段里会一点一点地做出来。第一件事是这样的请求。

```
读取 inbox 文件夹里的会议备忘，整理成会议记录。分成已决定的事 / 待办事项（负责人·期限） / 下次要讨论的事 三个部分，作为新文件保存到 notes 文件夹里。不要修改原始备忘。
```

如果是聊天，得上传备忘，再把拿到的回答粘贴到新文件里保存。Claude Code 会直接读取文件夹，并创建会议记录文件。我只需要**检查做出来的文件对不对**。

也有按固定方式做总结的服务。在 Claude Code 里，可以把“待办事项一定要区分负责人·期限”这类**我的格式保存成文件，不用每次重新解释**就能用。方法会在第 6·7 章学到。

不过，**直接修改文件，需要小心的地方也随之增多。** 所以，决定允许什么的方法（[第4章](04-permissions-undo.md)），以及确认改动内容的方法，在这个阶段一定要学。

<Quiz id="ch401-tasks" />

## 在哪里用

Claude Code 可以在多个地方使用。无论在哪里用，运转的都是**同一个引擎**（核心程序），只是界面按使用方式有所不同。[^platforms]

| 使用的地方 | 适合的时候 |
|---|---|
| **桌面应用**（Code 标签） | 用眼睛检查改动内容、并排做几件事、设置简单 |
| 终端（CLI） | 在命令窗口里工作、自动化 |
| VS Code 之类的编辑器 | 直接在代码编辑器里使用 |
| 网页（云端） | 耗时很久的事、关掉我的电脑也要继续的事 |
| 手机 | 在外面开始任务并盯着它 |

出处：Claude Code 官方文档[^platforms]

**这本指南从桌面应用开始。** 官方文档也介绍说，对不想用终端的人，桌面应用以图形界面提供同一个引擎。[^platforms] 桌面应用里已经包含 Claude Code，所以没有需要另外安装的程序。[^quickstart]

同一件事在好几个地方混着用也可以。[^platforms] 终端在第10章讲，网页·手机在第8章讲。

<Quiz id="ch401-where" />

## 需要什么——套餐

**Claude Code 只能在付费订阅下使用。** 需要 Pro、Max、Ultra、Team、Enterprise 订阅，或者 Console（API）账号，**免费套餐不能用。**[^setup] 个人订阅（Pro·Max·Ultra）用 claude.ai 账号登录。[^auth]

- 套餐名称变了。**Ultra 是以前 Max 20x 的新名字，Max 是以前 Max 5x 的新名字。**[^availability] 如果在旧文章里看到“Max 5x”，就是现在的 Max。
- 价格和使用额度，在第2阶段 Claude 指南里讲过了（[第2阶段 Claude 第1章](../10-claude/01-getting-started.md#一眼看懂套餐)）。用量由桌面·终端等**所有使用 Claude Code 的地方一起**消耗。[^desktop] Team·Enterprise 还和聊天·Cowork 一起消耗。[^costs]
- 宣传的使用额度，是以**一个人正常使用**为前提的。[^legal] 其他公司做的服务用我的订阅登录来代替发送请求的方式，也是不允许的。[^legal]

哪个套餐合适，可以边用边决定。查看用量的方法在第9章讲。

<Quiz id="ch401-plan" />

## 这个阶段学习的顺序

| 章 | 学什么 |
|---|---|
| [第2章](02-install.md) | 安装桌面应用并交出第一件事 |
| 第3章 | 逛一逛界面 |
| 第 4~5 章 | 允许和撤销的方法、把事情交代好的方法 |
| 第 6~7 章 | 写下项目规则、扩展功能 |
| 第 8~9 章 | 同时做多件事·云端·预约，费用和安全 |
| 第10章 | 在终端里使用 |
| 第 11~12 章 | 实践作业、像专家一样使用 |

不需要一开始就全部了解。在第2章交出一件小事试试，就足够了。

## 亲自试一试

1. 登录 claude.ai，确认我现在的套餐是什么。如果是免费套餐，这个阶段的实践可以等订阅之后再做。
2. 写下一件你想在自己电脑上交给 Claude 的“文件夹工作”（例如：把零散的备忘汇总到一个文件里）。
3. 数一数，如果用聊天来做这件事，要复制·粘贴几次。

**连续任务**：选一件你每周都要整理的事（会议记录·课堂笔记·回顾等），用三行字写下希望整理成什么格式（例如：“已决定的事 / 待办事项（负责人·期限） / 下次要讨论的事”）。在第2章用练习备忘交给它做第一次整理，在第11章用我自己的备忘来试。

## 整理

- Claude Code 是直接读取我电脑里的文件夹、修改文件、运行命令的代理式工具。
- 聊天是拿到回答后由我来搬运，Claude Code 是把事情交给它，由我来检查。
- 在桌面应用·终端·编辑器·网页·手机上使用同一个引擎。这个阶段从桌面应用开始学。
- 需要 Pro·Max·Ultra·Team·Enterprise 订阅，免费套餐不能用。Ultra 是以前的 Max 20x，Max 是以前的 Max 5x。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Claude Code | Claude Code | 直接在我电脑的文件夹里工作的 Claude |
| Agent | 代理 | 自己衔接多个步骤来工作的 AI |
| Code 标签 | Code 标签 | 在桌面应用里使用 Claude Code 的地方 |
| CLI | 命令行（CLI） | 通过输入文字命令来使用的程序（终端） |
| Surface | 使用界面 | 桌面·终端·网页这样使用 Claude Code 的界面 |

<ChapterDone :chapter="401" />

下一章：[第2章. 安装桌面应用和第一次会话](02-install.md)

[^overview]: Claude Code 官方文档，《Overview》。"Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview （确认日期 2026-10-31）
[^platforms]: Claude Code 官方文档，《Platforms and integrations》。"Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms （确认日期 2026-10-31）
[^linux]: Claude Code 官方文档，《Claude Desktop on Linux (beta)》。"The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux （确认日期 2026-10-31）
[^quickstart]: Claude Code 官方文档，《Get started with the desktop app》。"The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart （确认日期 2026-10-31）
[^setup]: Claude Code 官方文档，《Advanced setup》。"Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." 条款页面（legal-and-compliance）里也把免费用户一并写了进去，看起来不一致，但使用条件以这份文档的明确语句为准。https://code.claude.com/docs/en/setup （确认日期 2026-10-31）
[^desktop]: Claude Code 官方文档，《Desktop application》。"Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^costs]: Claude Code 官方文档，《Manage costs effectively》。"The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs （确认日期 2026-10-31）
[^auth]: Claude Code 官方文档，《Authentication》。"Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication （确认日期 2026-10-31）
[^availability]: Claude Code 官方文档，《Feature availability》。"Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability （确认日期 2026-10-31）
[^legal]: Claude Code 官方文档，《Legal and compliance》。"Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance （确认日期 2026-10-31）
