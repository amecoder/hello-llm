# 第1章 Antigravity 是什麼，和前面兩個工具有什麼不同

> **一句話總結**：Antigravity 是 Google 做的、**直接在我電腦的資料夾裡工作**的 AI 工具。有桌面應用和終端程式 `agy`。
> 它和前面兩個工具有兩點不同。**用免費的 Google 賬號也能使用全部功能**，並且它**原樣讀取在 Codex 階段做的 `AGENTS.md` 和 `.agents/skills`。**

這一章依據2026年11月1日確認的 Antigravity 官方文件（antigravity.google/docs）編寫。功能和選單名稱經常變化。

## 四種形態

Antigravity 按使用的地方，有四種形態。[^surfaces]

| 形態 | 作用 | 本指南 |
|---|---|---|
| Antigravity App | 在桌面上把工作交給智慧體，並在旁邊看著 | 從第2章開始 |
| Antigravity CLI（`agy`） | 在終端裡使用 | 第6章 |
| 編輯器擴充套件·Antigravity IDE | 在程式碼編輯器裡使用 | 不講 |
| SDK | 用 Python 構建智慧體 | 不講 |

出處：Antigravity 官方文件（本指南的整理）[^surfaces][^ide][^sdk]

應用和 CLI 執行的是**同一個智慧體**，所以大部分功能在兩邊都能用。[^same] 在一個地方登入後，我電腦上的其他形態也使用同一個登入。[^auth]

<Quiz id="ch601-surfaces" />

## 免費也能用全部功能

Antigravity **在所有套餐裡都提供全部功能**。定時任務和 CLI 也包括在內。[^all-features] 各套餐不同的是**用量**和**可以選擇的模型**。

| 套餐 | 用量 |
|---|---|
| 免費（不是 Google AI Pro·Ultra 的賬號） | 每週重新補充 |
| Google AI Pro | 每5小時重新補充，直到週上限 |
| Google AI Ultra | 最充裕，每5小時重新補充 |

出處：Antigravity 官方文件（只摘取了一部分）[^plans]

用量不是按提問的個數，而是按**智慧體做的工作量**減少。工作越簡單，能問的次數越多。[^work]

個人 Google 賬號（例：@gmail.com）可以免費使用。[^personal] 不過必須**滿18週歲以上**，並且要在可使用的國家（韓國在名單裡）。[^age][^country] 由公司、學校管理的賬號不是個人賬號，需要管理員允許。[^workspace]

**三個工具裡，能用免費賬號使用全部功能的只有 Antigravity。** Claude Code 需要付費訂閱，Codex 章節以 Plus 以上為準。如果你還沒有付費套餐，從這個階段開始實踐也可以。

<Quiz id="ch601-plans" />

## 選擇模型

在 Antigravity 裡，除了 Gemini，也可以選其他公司的模型，還可以決定思考級別（Low·Medium·High）。[^models] 可以選擇的模型因套餐而異。

| 模型 | 免費 | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

出處：Antigravity 官方文件（只摘取了一部分，Pro 的 Claude 不含試用版）[^model-table]

文件寫明，免費時可以選的 Claude 4.6 系列**預計在2026年11月2日下架**（以2026-11-01的確認為準）。[^removed] 所以如果是免費賬號，可以理解為用 Gemini 3.8 Flash 來實踐。

<Quiz id="ch601-models" />

## 和 Claude Code、Codex 有什麼相同和不同

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 桌面端 | Claude 應用的 Code 標籤頁 | ChatGPT 應用的 Codex | 獨立應用 |
| 規則檔案 | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md`·`GEMINI.md` |
| 這個資料夾的技能 | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| 呼叫技能 | `/名稱` | `$名稱` | `/名稱` |
| 終端 | `claude -p` | `codex exec` | `agy -p` |
| 免費實踐 | 不行 | 有限 | 可以 |

出處：本指南的整理（依據見各章的腳註）

**最大的區別是“不需要搬”。** Antigravity 會讀取資料夾裡的 `AGENTS.md`、`GEMINI.md` 和 `.agents/` 資料夾。[^discovery] 檔名稱和位置，與你在 Codex 階段做的相同。在第3章裡會實際測試。

<Quiz id="ch601-compare" />

## 這個階段要做的事

把已經學完 Codex 第5章的整理工具資料夾，**原樣**用 Antigravity 開啟。如果你跳過了 Codex，可以在[第3階段 Antigravity 目錄](./)的「練習資料（연습 자료）」裡，拿到同樣的起點檔案。

1. 第2章：安裝應用，把資料夾作為專案開啟，交辦第一次整理。
2. 第3章：測試不搬規則和技能，它會不會遵守。
3. 第4~5章：一邊和 Claude Code、Codex 對比，一邊看許可權、撤銷、計劃、定時。
4. 第6章：熟悉終端 `agy -p` 和它的陷阱。
5. 第7章：整理成本、資料、安全，並決定怎樣一起使用這三個工具。

## 小結

- Antigravity 有應用、CLI、編輯器、SDK 四種形態。應用和 CLI 是同一個智慧體。
- 所有套餐都有全部功能。不同的是用量和模型。免費版按周重新補充。
- 滿18週歲以上、使用個人 Google 賬號，就可以免費開始。
- 它按和 Codex 相同的名稱、位置，讀取 `AGENTS.md` 和 `.agents/skills`。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Antigravity | Antigravity | Google 的程式設計智慧體工具 |
| `agy` | agy | Antigravity 的終端程式 |
| Quota | 配額 | 在規定期間內可以使用的用量 |
| GEMINI.md | GEMINI.md | Antigravity 讀取的另一個規則檔名稱 |

<ChapterDone :chapter="601" />

下一章：[第2章. 安裝應用與第一次整理](02-first-task.md)

[^surfaces]: Antigravity 官方文件，「Choose your Antigravity」。"Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview（確認日期 2026-11-01）
[^ide]: Antigravity 官方文件，「Get started」。"Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started（確認日期 2026-11-01）
[^sdk]: Antigravity 官方文件，「Google Antigravity SDK」。"The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview（確認日期 2026-11-01）
[^same]: Antigravity 官方文件，「Antigravity features」。"The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^auth]: Antigravity 官方文件，「Authenticate」。"Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install（確認日期 2026-11-01）
[^all-features]: Antigravity 官方文件，「Plans」。"All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans（確認日期 2026-11-01）
[^plans]: Antigravity 官方文件，「Plans」。"The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans（確認日期 2026-11-01）
[^work]: Antigravity 官方文件，「Plans」。"As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans（確認日期 2026-11-01）
[^personal]: Antigravity 官方文件，「FAQ」。"Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq（確認日期 2026-11-01）
[^age]: Antigravity 官方文件，「FAQ」。"Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq（確認日期 2026-11-01）
[^workspace]: Antigravity 官方文件，「FAQ」。"Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq（確認日期 2026-11-01）
[^models]: Antigravity 官方文件，「Choose a model」。"You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models（確認日期 2026-11-01）
[^model-table]: Antigravity 官方文件，「Choose a model」。模型表中 Gemini 3.8 Flash·Gemini 4 Argon·Claude Sonnet 5.5 各行，以及 "\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models（確認日期 2026-11-01）
[^removed]: Antigravity 官方文件，「Choose a model」。"\* Will be removed on November 2, 2026." https://antigravity.google/docs/models（確認日期 2026-11-01）
[^discovery]: Antigravity 官方文件，「Customization discovery」。"**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery（確認日期 2026-11-01）
[^country]: Antigravity 官方文件，「FAQ」。"Google Antigravity is available in the following countries and territories." / "South Korea" https://antigravity.google/docs/faq（確認日期 2026-11-01）
