# 第1章 Antigravity 是什么，和前面两个工具有什么不同

> **一句话总结**：Antigravity 是 Google 做的、**直接在我电脑的文件夹里工作**的 AI 工具。有桌面应用和终端程序 `agy`。
> 它和前面两个工具有两点不同。**用免费的 Google 账号也能使用全部功能**，并且它**原样读取在 Codex 阶段做的 `AGENTS.md` 和 `.agents/skills`。**

这一章依据2026年11月1日确认的 Antigravity 官方文档（antigravity.google/docs）编写。功能和菜单名称经常变化。

## 四种形态

Antigravity 按使用的地方，有四种形态。[^surfaces]

| 形态 | 作用 | 本指南 |
|---|---|---|
| Antigravity App | 在桌面上把工作交给智能体，并在旁边看着 | 从第2章开始 |
| Antigravity CLI（`agy`） | 在终端里使用 | 第6章 |
| 编辑器扩展·Antigravity IDE | 在代码编辑器里使用 | 不讲 |
| SDK | 用 Python 构建智能体 | 不讲 |

出处：Antigravity 官方文档（本指南的整理）[^surfaces][^ide][^sdk]

应用和 CLI 运行的是**同一个智能体**，所以大部分功能在两边都能用。[^same] 在一个地方登录后，我电脑上的其他形态也使用同一个登录。[^auth]

<Quiz id="ch601-surfaces" />

## 免费也能用全部功能

Antigravity **在所有套餐里都提供全部功能**。定时任务和 CLI 也包括在内。[^all-features] 各套餐不同的是**用量**和**可以选择的模型**。

| 套餐 | 用量 |
|---|---|
| 免费（不是 Google AI Pro·Ultra 的账号） | 每周重新补充 |
| Google AI Pro | 每5小时重新补充，直到周上限 |
| Google AI Ultra | 最充裕，每5小时重新补充 |

出处：Antigravity 官方文档（只摘取了一部分）[^plans]

用量不是按提问的个数，而是按**智能体做的工作量**减少。工作越简单，能问的次数越多。[^work]

个人 Google 账号（例：@gmail.com）可以免费使用。[^personal] 不过必须**满18周岁以上**，并且要在可使用的国家（韩国在名单里）。[^age][^country] 由公司、学校管理的账号不是个人账号，需要管理员允许。[^workspace]

**三个工具里，能用免费账号使用全部功能的只有 Antigravity。** Claude Code 需要付费订阅，Codex 章节以 Plus 以上为准。如果你还没有付费套餐，从这个阶段开始实践也可以。

<Quiz id="ch601-plans" />

## 选择模型

在 Antigravity 里，除了 Gemini，也可以选其他公司的模型，还可以决定思考级别（Low·Medium·High）。[^models] 可以选择的模型因套餐而异。

| 模型 | 免费 | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

出处：Antigravity 官方文档（只摘取了一部分，Pro 的 Claude 不含试用版）[^model-table]

文档写明，免费时可以选的 Claude 4.6 系列**预计在2026年11月2日下架**（以2026-11-01的确认为准）。[^removed] 所以如果是免费账号，可以理解为用 Gemini 3.8 Flash 来实践。

<Quiz id="ch601-models" />

## 和 Claude Code、Codex 有什么相同和不同

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 桌面端 | Claude 应用的 Code 标签页 | ChatGPT 应用的 Codex | 独立应用 |
| 规则文件 | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md`·`GEMINI.md` |
| 这个文件夹的技能 | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| 调用技能 | `/名称` | `$名称` | `/名称` |
| 终端 | `claude -p` | `codex exec` | `agy -p` |
| 免费实践 | 不行 | 有限 | 可以 |

出处：本指南的整理（依据见各章的脚注）

**最大的区别是“不需要搬”。** Antigravity 会读取文件夹里的 `AGENTS.md`、`GEMINI.md` 和 `.agents/` 文件夹。[^discovery] 文件名称和位置，与你在 Codex 阶段做的相同。在第3章里会实际测试。

<Quiz id="ch601-compare" />

## 这个阶段要做的事

把已经学完 Codex 第5章的整理工具文件夹，**原样**用 Antigravity 打开。如果你跳过了 Codex，可以在[第3阶段 Antigravity 目录](./)的「练习资料（연습 자료）」里，拿到同样的起点文件。

1. 第2章：安装应用，把文件夹作为项目打开，交办第一次整理。
2. 第3章：测试不搬规则和技能，它会不会遵守。
3. 第4~5章：一边和 Claude Code、Codex 对比，一边看权限、撤销、计划、定时。
4. 第6章：熟悉终端 `agy -p` 和它的陷阱。
5. 第7章：整理成本、数据、安全，并决定怎样一起使用这三个工具。

## 小结

- Antigravity 有应用、CLI、编辑器、SDK 四种形态。应用和 CLI 是同一个智能体。
- 所有套餐都有全部功能。不同的是用量和模型。免费版按周重新补充。
- 满18周岁以上、使用个人 Google 账号，就可以免费开始。
- 它按和 Codex 相同的名称、位置，读取 `AGENTS.md` 和 `.agents/skills`。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Antigravity | Antigravity | Google 的编程智能体工具 |
| `agy` | agy | Antigravity 的终端程序 |
| Quota | 配额 | 在规定期间内可以使用的用量 |
| GEMINI.md | GEMINI.md | Antigravity 读取的另一个规则文件名称 |

<ChapterDone :chapter="601" />

下一章：[第2章. 安装应用与第一次整理](02-first-task.md)

[^surfaces]: Antigravity 官方文档，「Choose your Antigravity」。"Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview（确认日期 2026-11-01）
[^ide]: Antigravity 官方文档，「Get started」。"Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started（确认日期 2026-11-01）
[^sdk]: Antigravity 官方文档，「Google Antigravity SDK」。"The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview（确认日期 2026-11-01）
[^same]: Antigravity 官方文档，「Antigravity features」。"The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^auth]: Antigravity 官方文档，「Authenticate」。"Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install（确认日期 2026-11-01）
[^all-features]: Antigravity 官方文档，「Plans」。"All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans（确认日期 2026-11-01）
[^plans]: Antigravity 官方文档，「Plans」。"The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans（确认日期 2026-11-01）
[^work]: Antigravity 官方文档，「Plans」。"As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans（确认日期 2026-11-01）
[^personal]: Antigravity 官方文档，「FAQ」。"Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq（确认日期 2026-11-01）
[^age]: Antigravity 官方文档，「FAQ」。"Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq（确认日期 2026-11-01）
[^workspace]: Antigravity 官方文档，「FAQ」。"Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq（确认日期 2026-11-01）
[^models]: Antigravity 官方文档，「Choose a model」。"You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models（确认日期 2026-11-01）
[^model-table]: Antigravity 官方文档，「Choose a model」。模型表中 Gemini 3.8 Flash·Gemini 4 Argon·Claude Sonnet 5.5 各行，以及 "\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models（确认日期 2026-11-01）
[^removed]: Antigravity 官方文档，「Choose a model」。"\* Will be removed on November 2, 2026." https://antigravity.google/docs/models（确认日期 2026-11-01）
[^discovery]: Antigravity 官方文档，「Customization discovery」。"**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery（确认日期 2026-11-01）
[^country]: Antigravity 官方文档，「FAQ」。"Google Antigravity is available in the following countries and territories." / "South Korea" https://antigravity.google/docs/faq（确认日期 2026-11-01）
