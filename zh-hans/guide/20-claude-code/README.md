# 第3阶段 · Claude Code 使用指南

在第2阶段，你是在聊天里**提问并得到答案。** 在第3阶段，你要学习 Claude Code，让 Claude **直接在你电脑的文件夹里读取并修改文件。**
不懂代码也没关系。本指南用装着备忘录和表格文件的文件夹来练习，并且从不需要终端的 **Claude 桌面应用的 Code 标签页**开始。

> **本指南依据 2026年10月31日确认的 Claude Code 官方文档（code.claude.com/docs）和实际界面编写。** 功能和菜单名称经常变化。
> 使用 Claude Code 需要有**付费订阅**（Pro·Max·Ultra·Team·Enterprise）。如果和你的界面不一样，请以屏幕上看到的名称为准。

| 章 | 标题 | 你会了解到 |
|---|---|---|
| 1 | [Claude Code 是什么，在哪里用](01-what-is.md) | 和聊天的区别、在哪里用、套餐 |
| 2 | [安装桌面应用与第一次会话](02-install.md) | 安装·登录、Code 标签页、选择文件夹、交付第一件事 |
| 3 | [熟悉界面](03-screen-tour.md) | 标题栏按钮、查看改动内容（Git）、会话信息、文件栏 |
| 4 | [许可与撤销](04-permissions-undo.md) | 权限模式、回退、撤销的局限、Git 记录 |
| 5 | [怎样把事情交代好](05-delegate-well.md) | 说得具体、用计划模式设计 3 种模板、确认标准与依据 |
| 6 | [项目记忆](06-claude-md.md) | 用 CLAUDE.md 写下我的规则，并在新会话里检验 |
| 7 | [技能·插件·外部工具](07-skills-plugins.md) | 用 3 个整理技能做成工具、受保护路径的许可窗口、插件安全 |
| 8 | [同时做多件事·云端·定时](08-parallel-cloud-schedule.md) | 并排会话、三种定时、周五每周回顾定时、云端 |
| 9 | [费用·数据·安全](09-cost-data-safety.md) | 用量、学习设置与保存期限、隐藏指令实验与安全守则 |
| 10 | [在终端里使用](10-terminal.md) | 安装和基本命令、用 claude -p 检查整理工具、在应用与终端之间切换 |
| 11 | [实践任务](11-practice.md) | 9 个任务和检查表，最后用我自己的备忘录做出属于我的整理工具 |
| 12 | [像专家一样使用](12-expert.md) | 按工作挑选、需要时再一个一个积累、每周整理的固定流程 |

## 练习资料

第3阶段的实践用下面 6 份备忘录来做。它们**全是虚构的内容**（小咖啡馆「街角咖啡馆」员工瑞妍的一周）。请在你的电脑上建一个 `정리도구/inbox` 文件夹，把文件下载后放进去。备忘录里的日期和星期是为了故事编的，和真实的 2026年日历对不上。

| 文件 | 内容 | 第一次用到的章 |
|---|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | 乱七八糟的周会备忘录 | 第2章 |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | 听课笔记 | 第4章 |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | 3 天的每日回顾 | 第3章 |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) | 藏有隐藏指令的备忘录（安全实验用） | 第9章 |

本指南用真实的 Claude Code 应用做出的**成果**也一并公开。请和你自己的结果对照一下。即使请求相同，成果的样子也会有些不同。

| 章 | 成果 |
|---|---|
| 2 | [会议纪要](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [加了状态栏的会议纪要](/practice/notes/results/3장-회의록-상태칸.txt) |
| 4 | [学习笔记（回退之前）](/practice/notes/results/4장-공부노트-2026-10-28.txt) |
| 5 | [会议纪要模板](/practice/notes/results/5장-양식-회의록.txt) · [学习笔记模板](/practice/notes/results/5장-양식-공부노트.txt) · [每周回顾模板](/practice/notes/results/5장-양식-주간회고.txt) · [模板说明](/practice/notes/results/5장-양식-README.txt) |
| 6 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) · [只靠规则写出的每周回顾](/practice/notes/results/6장-주간회고-2026-10-27.txt) |
| 7 | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) 技能 · [用技能做出的学习笔记](/practice/notes/results/7장-공부노트-스킬로.txt) |
| 9 | [用藏有隐藏指令的备忘录做出的会议纪要](/practice/notes/results/9장-회의록-숨은지시-메모.txt) |
| 10 | [claude -p 的输出](/practice/notes/results/10장-claude-p-출력.txt) |

如果你还没读第2阶段，请先从[第2阶段 · Claude 指南](../10-claude/)开始。账号、套餐、聊天功能在那里讲过了，第3阶段用链接连过去。
