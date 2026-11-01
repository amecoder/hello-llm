# 第1章 Codex 是什么，和 Claude Code 有什么不同

> **一句话总结**：Codex 是 OpenAI 做的、**直接在我电脑的文件夹里工作**的 AI 工具。现在是在 **ChatGPT 桌面应用里选择「Codex」**来使用。
> 它做的事和 Claude Code 几乎一样。在这个阶段，我们把 Claude Code 章节里做的「整理工具（정리 도구）」搬到 Codex 上，同时**只学不同的地方**。

这一章依据2026年11月1日确认的 Codex 官方文档（learn.chatgpt.com）编写。功能和菜单名称经常变化。

## ChatGPT 应用里的三种方式

在桌面端，不需要单独安装 Codex。**一个 ChatGPT 桌面应用里**就同时包含了三种方式。[^modes]

| 方式 | 适合什么时候 | 例子 |
|---|---|---|
| Chat | 问和答 | 提问、想点子、润色文章 |
| Work | 把成品也一并交出去 | 报告、演示资料、文件分析 |
| **Codex** | 直接在文件夹里工作、查看技术信息 | 修改文件、确认改动内容 |

出处：Codex 官方文档（只摘取了一部分）[^modes]

Work 和 Codex 能做的事有重叠。区别在于**展示的方式**。Work 会隐藏 Git、命令这类技术信息，只展示完成的成果。Codex 连改了什么（diff）都会展示出来。[^compare]

不写代码也可以使用 Codex。官方文档也说，如果觉得 Codex 用着顺手，调研、文档、演示资料这类工作也可以继续用它。[^prefer] 本指南选择 Codex 的原因是**可以亲自确认改动内容**。如果你已经在 Claude Code 章节里养成了检查备忘整理结果与原件是否一致的习惯，在 Codex 里也能原样延续下去。

<Quiz id="ch501-modes" />

## 和 Claude Code 有什么相同和不同

在 Claude Code 里学到的概念，Codex 里几乎都有。**只是名称和位置不同。**

| Claude Code | Codex | 在哪里学 |
|---|---|---|
| Claude 应用的 Code 标签页 | 在 ChatGPT 应用里选择「Codex」 | 第2章 |
| `CLAUDE.md` | `AGENTS.md` | 第3章 |
| 权限模式（手动等） | 权限菜单（Ask for approval 等） | 第4章 |
| 回退（检查点） | 用 Git 撤销 | 第4章 |
| `.claude/skills` · `/名称` | `.agents/skills` · `$名称` | 第5章 |
| 定时任务 | Scheduled | 第6章 |
| `claude -p` | `codex exec` | 第7章 |

出处：本指南的整理（官方文档没有直接比较这两个工具）

**最大的区别是规则文件的名称。** Codex 在开始工作之前，会读 `AGENTS.md`。[^agents] 如果你把 Claude Code 的 `CLAUDE.md` 原样留着，Codex 是不会读它的。所以搬整理工具时，先改这个文件（第3章）。

也有帮你代劳搬迁的功能。ChatGPT 应用的**导入**（Import），可以把 Claude Code 的规则文件、技能、设置搬到 Codex。[^import] 本指南为了亲眼看看什么会怎样变化，选择**一个个手动**搬。导入功能在第3章末尾介绍。

<Quiz id="ch501-compare" />

## 在哪里使用，以及套餐

Codex 可以在很多地方使用。

- **ChatGPT 桌面应用**：有 macOS、Windows、Linux 版。[^desktop] 本指南从这里开始。
- **终端（Codex CLI）**：在命令窗口里使用。[^cli] 在第7章里讲。
- **云端**：每项任务会有单独的工作空间，即使我的电脑休眠了也在工作。[^cloud] 在第6章里介绍。

各套餐能用的范围不同。

| 套餐 | 月费 | 在 Codex 里能用的东西 |
|---|---|---|
| Free | $0 | 桌面应用里的轻量模型，逐步开放 |
| Go | $8 | 和 Free 相同 |
| Plus | $20 | 网页、终端、编辑器、iOS 上也能用，更强的模型 |
| Pro | $100起 | Plus 的全部，以及更多用量 |

出处：Codex 官方文档的价格说明（只摘取了一部分）[^pricing]

**Free 和 Go 是“逐步开放”**（rollout，按账号依次开放的方式）。如果你的界面上看不到 Codex，可能是还没有对你开放。本指南的实践以 **Plus 以上**为准。

用量是**和 ChatGPT Work 共用的。** 用 Work 交办很多大工作，留给 Codex 的份额也会减少。[^shared] 用量在第8章里会进一步讲。

<Quiz id="ch501-where" />

## 这个阶段要做的事

把 Claude Code 章节里的「整理工具（정리 도구）」文件夹原样拿过来，让它在 Codex 里运转起来。如果你跳过了 Claude Code 章节，可以在[第3阶段 Codex 目录](./)的「练习资料（연습 자료）」里，拿到同样的起点文件。

1. 第2章：在应用里打开 Codex，整理一份会议备忘。
2. 第3章：把 `CLAUDE.md` 搬成 `AGENTS.md`，测试在我不说规则的情况下，它会不会遵守。
3. 第4章：熟悉权限菜单、查看改动内容、撤销。
4. 第5章：搬3个技能，用 `$weekly-review` 一行做出周复盘。
5. 第6~8章：一边和 Claude Code 对比，一边整理定时、终端、安全。

**不需要一开始就全部背下来。** 把你在 Claude Code 里做过的事，在 Codex 里各重做一遍，差别自然就看出来了。

## 小结

- Codex 是在 ChatGPT 桌面应用里选择「Codex」来使用的。Chat、Work、Codex 在同一个应用里。
- Codex 会展示改动内容这类技术信息。不写代码也可以用。
- 和 Claude Code 的概念几乎相同。规则文件是 `AGENTS.md`，技能是 `$名称`，名字不同。
- Free 和 Go 是逐步开放。实践以 Plus 以上为准，用量和 Work 共用。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Codex | Codex | OpenAI 的编程智能体。在 ChatGPT 应用里选择的方式 |
| ChatGPT Work | ChatGPT Work | 把成品也一并交出去的 ChatGPT 方式。隐藏技术信息 |
| AGENTS.md | AGENTS.md | Codex 工作之前会读的规则文件 |
| Rollout | 逐步开放 | 按账号依次开放功能的方式 |

<ChapterDone :chapter="501" />

下一章：[第2章. 在 ChatGPT 应用里开始使用 Codex](02-first-task.md)

[^modes]: Codex 官方文档，「Use ChatGPT」。"Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt（确认日期 2026-11-01）
[^compare]: Codex 官方文档，「Use ChatGPT」。"ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt（确认日期 2026-11-01）
[^prefer]: Codex 官方文档，「Use ChatGPT」。"If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt（确认日期 2026-11-01）
[^agents]: Codex 官方文档，「Custom instructions with AGENTS.md」。"Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md（确认日期 2026-11-01）
[^import]: Codex 官方文档，「Import from another agent」。"The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import（确认日期 2026-11-01）
[^desktop]: Codex 官方文档，「Quickstart」。"The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart（确认日期 2026-11-01）
[^cli]: Codex 官方文档，「Codex CLI」。"Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli（确认日期 2026-11-01）
[^cloud]: Codex 官方文档，「Codex Cloud」。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud（确认日期 2026-11-01）
[^pricing]: Codex 官方文档，「Pricing」。"GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing（确认日期 2026-11-01）
[^shared]: Codex 官方文档，「Pricing」。"ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing（确认日期 2026-11-01）
