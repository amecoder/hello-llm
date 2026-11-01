# 第3阶段 · Codex 使用指南

Codex 是 OpenAI 做的、**直接在你电脑的文件夹里干活**的 AI 工具。现在，你在 ChatGPT 桌面应用里选择「Codex」就能使用。
这份指南会把你在 [Claude Code 指南](../20-claude-code/)里做好的「按我的方式整理笔记的工具」搬到 Codex 上，并且**只学习和 Claude Code 不同的地方**。

> **这份指南依据 2026年11月1日确认的 Codex 官方文档（learn.chatgpt.com）和实际运行结果写成。** 功能和菜单名称经常变化。
> 练习以 **Plus 及以上**套餐为准。Free、Go 是逐步开放的，所以你可能还看不到 Codex。

| 章 | 标题 | 你会学到什么 |
|---|---|---|
| 1 | [Codex 是什么，和 Claude Code 有什么不同](01-what-is.md) | ChatGPT 应用里的 Chat、Work、Codex，与 Claude Code 的对应关系，套餐 |
| 2 | [在 ChatGPT 应用里开始使用 Codex](02-first-task.md) | 安装、选择 Codex、打开文件夹、交给它做第一次整理 |
| 3 | [规则文件 AGENTS.md](03-agents-md.md) | 搬运 CLAUDE.md、不说出规则来测试它、导入与记忆 |
| 4 | [权限与撤销](04-permissions-undo.md) | 三种权限菜单、受保护的文件夹、审阅窗口、用 Git 撤销 |
| 5 | [搬运技能](05-skills.md) | .agents/skills、一行 $weekly-review、错的和漏掉的 |
| 6 | [定时任务、云端、手机](06-schedule-cloud.md) | 定时条件与权限、和云端的区别、连接手机 |
| 7 | [在终端里使用](07-terminal.md) | 安装、codex exec（默认只读）、交互式命令 |
| 8 | [费用、数据、安全，以及如何选择工具](08-safety-choose.md) | 用量、数据设置、隐藏指令实验、两个工具一起用、练习作业 |

## 练习资料

起点是**完成了 Claude Code 第7章的整理工具文件夹**。如果你跳过了 Claude Code 指南，请下载下面的文件，做成同样的样子。所有笔记都是**虚构的内容**，日期和星期是为了故事编出来的，所以和真实的 2026年日历对不上。

| 文件夹里的位置 | 要下载的文件 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 最上层 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/名称/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

下载后，请把扩展名改成表里写的名字再保存（例：`5장-양식-회의록.txt` → `templates/회의록.md`）。`notes/` 文件夹保持为空。

这份指南用 Codex 做出的**成果**也一并公开。同样的请求，做出来的样子也会略有不同。

| 章 | 成果 |
|---|---|
| 2 | [会议记录](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [只靠规则写的学习笔记](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [用技能做的每周复盘](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [codex exec 输出](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [用隐藏指令备忘录做的会议记录](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

如果你还没读过 Claude Code，请先看[第3阶段 · Claude Code 指南](../20-claude-code/)。文件夹、权限、规则文件、技能分别是什么，那边有讲解，这份指南会用链接接过去。
