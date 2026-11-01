# 第3阶段 · Antigravity 使用指南

Antigravity 是 Google 做的、**直接在我电脑的文件夹里工作**的 AI 工具。有桌面应用和终端程序 `agy`。
本指南把做到 [Codex 指南](../21-codex/)为止的「按我的方式整理的工具（내 방식대로 정리해 주는 도구）」文件夹**不用搬，原样打开**，确认它在第三个工具里是否也能运转，并且只学不同的地方。

> **本指南依据2026年11月1日确认的 Antigravity 官方文档（antigravity.google/docs）和用终端 `agy` 运行的结果编写。还没有能用应用界面做实践。** 功能和菜单名称经常变化。
> 三个工具中，只有它**用免费的 Google 账号**（满18周岁以上）也能使用全部功能。随套餐不同的只有用量和模型。

| 章 | 标题 | 你会了解到 |
|---|---|---|
| 1 | [Antigravity 是什么，和前面两个工具有什么不同](01-what-is.md) | 四种形态、免费也有全部功能、模型、三个工具的对应关系 |
| 2 | [安装应用与第一次整理](02-first-task.md) | 安装·登录、作为项目打开、Planning mode 和 Proceed、Review 窗口 |
| 3 | [规则与技能 — 不需要搬](03-rules-skills.md) | 原样使用 AGENTS.md·.agents/skills，用同一份备忘做 0→1，/技能名称 |
| 4 | [权限与撤销](04-permissions-undo.md) | 四种预设、围栏默认值（应用·终端）、丢弃时的注意事项、/rewind |
| 5 | [计划、定时、浏览器、目标](05-plan-schedule.md) | /plan、/schedule 和 Automations、/browser、/goal、远程操控 |
| 6 | [在终端里使用](06-terminal.md) | agy -p、无声拒绝和退出码 0、文件夹信任、四个陷阱 |
| 7 | [成本、数据、安全，以及选择三个工具](07-safety-choose.md) | 用量·积分、Enable Telemetry、隐藏指示实验、三个工具一起使用、实践作业 |

## 练习资料

起点是**学完 Codex 第5章的整理工具文件夹**。如果你跳过了前面的阶段，请下载下面的文件，做成同样的样子。所有备忘都是**编造的内容**，日期和星期是为了故事编出来的，和真实的2026年日历对不上。

| 文件夹里的位置 | 要下载的文件 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 最上层 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/名称/SKILL.md`（如果也要用 Claude Code，`.claude/skills/` 里也放同样的文件） | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

下载的文件，请按表里的名称改好扩展名后保存（例：`3장-AGENTS.md.txt` → `AGENTS.md`）。`notes/` 文件夹留空。

本指南用 Antigravity 做出的**成果**也一并公开。同样的请求，样子也会略有不同。

| 章 | 成果 |
|---|---|
| 3 | [会议纪要（没有 AGENTS.md 时）](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [会议纪要（有 AGENTS.md 时）](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [用技能做的周复盘](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [agy -p 输出](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [用隐藏指示备忘做的会议纪要](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

如果你还没读 Codex，请先看[第3阶段 · Codex 指南](../21-codex/)。只有免费账号的话，从本指南开始实践也可以。
