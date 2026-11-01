# 第1章 和 AI 一起做出东西——一眼看懂 SDLC

> **一句话总结**：软件要经过**计划 → 制作 → 评审 → 确认 → 发布 → 运营**，才会走向世界。这个流程叫作 SDLC。
> AI 可以成为每个步骤里的双手，但**决定做什么、确认结果，是人的事**。第4阶段就是学习这种分工。

这一章是根据 2026 年 11 月 1 日确认的 GitHub 官方文档和 Claude Code 官方文档写的。这是为在第3阶段用 Claude Code·Codex·Antigravity 操作过文件夹的读者准备的阶段。如果还没有看第3阶段，请先看[第3阶段 · Claude Code](../20-claude-code/)。

## 什么是 SDLC

SDLC（软件开发生命周期，Software Development Life Cycle）指的是项目**从最初的想法，到真正运转起来的软件**所经历的步骤。[^sdlc] GitHub 把这个过程分成六个步骤。

| 步骤 | 做什么 | 这本指南 |
|---|---|---|
| 计划（Plan） | 写下要做的事并跟踪 | 第3章 |
| 制作（Create） | 写代码并记录改动 | 第4章 |
| 评审（Review） | 提出改动并收集意见 | 第6章 |
| 确认（Test） | 合并之前自动检查 | 第5章 |
| 发布（Deploy） | 发布出去让人们使用 | 第7章 |
| 运营（Operate） | 盯着它并持续改进 | 第 8·9 章 |

出处：GitHub 官方文档（这本指南的整理）[^six]

这本指南先讲确认（第5章），后讲评审（第6章）。这是为了在评审时能一并看到确认的结果。「运营」在 GitHub 里的含义很宽，包括监控、依赖管理、安全，但这本指南只讲到用议题（issue）来改进（第8章）和安全（第9章）。

**不需要从一开始就用到所有步骤。** GitHub 也说，很多人是从一个仓库和几个待办事项开始，随着项目成长再逐步扩展。[^start-small] 这本指南也是用一个小网页，把六个步骤走一圈。

<Quiz id="ch701-sdlc" />

## AI 是怎么工作的

Claude Code 分三个阶段处理交给它的事。**收集上下文 → 采取行动 → 确认结果**。[^loop] 查找并阅读文件、修改、运行测试来确认自己的工作，这些都包含在这个循环里。

在第3阶段用过的**计划模式**，在这里又变得重要了。在计划模式下，Claude 读取文件后只给出计划，在我批准之前什么也不修改。[^plan]

官方最佳实践文档列出了事情没有按预期进行的典型原因。[^fail]

- **做出来的和我脑子里想的不一样。** 因为缺少只读仓库无法获知的信息。→ 在第3章「策划与规格说明」里讲。
- **说做完了，其实没做完。** 因为它没有办法自己确认。→ 在第5章「确认与测试」里讲。

这两种情况，只要由人提供**信息和确认装置**，就能减少。所以第4阶段学的不是写代码的方法，而是**给 AI 什么、要回什么来确认**。

<Quiz id="ch701-ai" />

## 人负责的事

即使 AI 来当双手，也有一些事必须由人负责。

| 步骤 | 人负责的事 |
|---|---|
| 计划 | 决定做什么、为什么做 |
| 制作 | 阅读计划并批准 |
| 确认 | 看证据（命令和输出）后做出判断 |
| 评审 | 决定合不合并 |
| 发布 | 判断能不能公开，并按下按钮 |

出处：这本指南的整理（依据在各章的脚注里）

官方文档也写明，对提议的代码和命令是否安全，**在批准之前进行检查的责任在用户**。[^responsible] 另外，像发布这类会影响外部系统的行为，不能用 Claude Code 的回退（检查点）撤销。[^no-checkpoint] 所以越是会影响到外部的行为，越要由人来确认并按下按钮。

<Quiz id="ch701-human" />

## 这个阶段要做出什么

第4阶段的「亲自试一试」，是用一个贯穿各章的例子来做。就是**把第3阶段整理工具做出的会议记录里的待办事项汇总展示出来的网页**，名字叫「街角咖啡馆待办看板」。

GitHub 的官方入门系列也是一路跟着做出一个小网站，**计划、写代码、评审改动，然后发布成真正的网站**。[^journey] 这本指南遵循同样的顺序，只是把 AI 的位置换成第3阶段熟悉了的 Claude Code。

| 章 | 在待办看板上做的事 |
|---|---|
| 2 | 在 GitHub 上创建仓库 |
| 3 | 接受采访，决定要展示什么，写出 SPEC.md |
| 4 | 拿到计划，在分支上做出第一个界面 |
| 5 | 做一个确认装置，检查待办数量对不对 |
| 6 | 创建 PR 并接受评审 |
| 7 | 用 GitHub Pages 公开 |
| 8 | 把下一步改进写成议题，再走一圈 |
| 9 | 公开前检查密钥和个人信息 |

出处：这本指南的计划

**不需要一开始就完美。** 一章一章跟着做，到最后就会有一个带互联网地址的我自己的网页。

## 整理

- SDLC 是从想法到真正运转起来的软件的步骤。GitHub 把它分为计划·制作·评审·确认·发布·运营六个步骤。
- 不需要从一开始就全用。小处着手，逐步扩展。
- Claude Code 按收集上下文 → 行动 → 确认结果的方式工作。失败的常见原因是缺少信息和缺少确认装置。
- 决定做什么、看证据做判断、决定合并和发布，是人的事。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| SDLC | 软件开发生命周期 | 软件从想法到运营所经历的步骤 |
| Repository | 仓库 | 存放项目文件和改动记录的地方 |
| Deploy | 发布（部署） | 把做好的东西发布出去让人们使用 |
| Plan mode | 计划模式 | 修改之前只展示计划的 Claude Code 工作方式 |

<ChapterDone :chapter="701" />

下一章：[第2章. 创建 GitHub 仓库](02-repository.md)

[^sdlc]: GitHub 官方文档，《What is GitHub?》。"The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github （确认日期 2026-11-01）
[^six]: GitHub 官方文档，《What is GitHub?》。"Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github （确认日期 2026-11-01）
[^start-small]: GitHub 官方文档，《What is GitHub?》。"You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github （确认日期 2026-11-01）
[^loop]: Claude Code 官方文档，《How Claude Code works》。"When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-01）
[^plan]: Claude Code 官方文档，《Common workflows》。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows （确认日期 2026-11-01）
[^fail]: Claude Code 官方文档，《Best practices for Claude Code》。"It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^responsible]: Claude Code 官方文档，《Security》。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （确认日期 2026-11-01）
[^no-checkpoint]: Claude Code 官方文档，《How Claude Code works》。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-01）
[^journey]: GitHub 官方文档，《Creating a repository for your project on GitHub》。"By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github （确认日期 2026-11-01）
