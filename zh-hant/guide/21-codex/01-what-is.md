# 第1章 Codex 是什麼，和 Claude Code 有什麼不同

> **一句話總結**：Codex 是 OpenAI 做的、**直接在我電腦的資料夾裡工作**的 AI 工具。現在是在 **ChatGPT 桌面應用裡選擇「Codex」**來使用。
> 它做的事和 Claude Code 幾乎一樣。在這個階段，我們把 Claude Code 章節裡做的「整理工具（정리 도구）」搬到 Codex 上，同時**只學不同的地方**。

這一章依據2026年11月1日確認的 Codex 官方文件（learn.chatgpt.com）編寫。功能和選單名稱經常變化。

## ChatGPT 應用裡的三種方式

在桌面端，不需要單獨安裝 Codex。**一個 ChatGPT 桌面應用裡**就同時包含了三種方式。[^modes]

| 方式 | 適合什麼時候 | 例子 |
|---|---|---|
| Chat | 問和答 | 提問、想點子、潤色文章 |
| Work | 把成品也一併交出去 | 報告、演示資料、檔案分析 |
| **Codex** | 直接在資料夾裡工作、檢視技術資訊 | 修改檔案、確認改動內容 |

出處：Codex 官方文件（只摘取了一部分）[^modes]

Work 和 Codex 能做的事有重疊。區別在於**展示的方式**。Work 會隱藏 Git、命令這類技術資訊，只展示完成的成果。Codex 連改了什麼（diff）都會展示出來。[^compare]

不寫程式碼也可以使用 Codex。官方文件也說，如果覺得 Codex 用著順手，調研、文件、演示資料這類工作也可以繼續用它。[^prefer] 本指南選擇 Codex 的原因是**可以親自確認改動內容**。如果你已經在 Claude Code 章節裡養成了檢查備忘整理結果與原件是否一致的習慣，在 Codex 裡也能原樣延續下去。

<Quiz id="ch501-modes" />

## 和 Claude Code 有什麼相同和不同

在 Claude Code 裡學到的概念，Codex 裡幾乎都有。**只是名稱和位置不同。**

| Claude Code | Codex | 在哪裡學 |
|---|---|---|
| Claude 應用的 Code 標籤頁 | 在 ChatGPT 應用裡選擇「Codex」 | 第2章 |
| `CLAUDE.md` | `AGENTS.md` | 第3章 |
| 許可權模式（手動等） | 許可權選單（Ask for approval 等） | 第4章 |
| 回退（檢查點） | 用 Git 撤銷 | 第4章 |
| `.claude/skills` · `/名稱` | `.agents/skills` · `$名稱` | 第5章 |
| 定時任務 | Scheduled | 第6章 |
| `claude -p` | `codex exec` | 第7章 |

出處：本指南的整理（官方文件沒有直接比較這兩個工具）

**最大的區別是規則檔案的名稱。** Codex 在開始工作之前，會讀 `AGENTS.md`。[^agents] 如果你把 Claude Code 的 `CLAUDE.md` 原樣留著，Codex 是不會讀它的。所以搬整理工具時，先改這個檔案（第3章）。

也有幫你代勞搬遷的功能。ChatGPT 應用的**匯入**（Import），可以把 Claude Code 的規則檔案、技能、設定搬到 Codex。[^import] 本指南為了親眼看看什麼會怎樣變化，選擇**一個個手動**搬。匯入功能在第3章末尾介紹。

<Quiz id="ch501-compare" />

## 在哪裡使用，以及套餐

Codex 可以在很多地方使用。

- **ChatGPT 桌面應用**：有 macOS、Windows、Linux 版。[^desktop] 本指南從這裡開始。
- **終端（Codex CLI）**：在命令窗口裡使用。[^cli] 在第7章裡講。
- **雲端**：每項任務會有單獨的工作空間，即使我的電腦休眠了也在工作。[^cloud] 在第6章裡介紹。

各套餐能用的範圍不同。

| 套餐 | 月費 | 在 Codex 裡能用的東西 |
|---|---|---|
| Free | $0 | 桌面應用裡的輕量模型，逐步開放 |
| Go | $8 | 和 Free 相同 |
| Plus | $20 | 網頁、終端、編輯器、iOS 上也能用，更強的模型 |
| Pro | $100起 | Plus 的全部，以及更多用量 |

出處：Codex 官方文件的價格說明（只摘取了一部分）[^pricing]

**Free 和 Go 是“逐步開放”**（rollout，按賬號依次開放的方式）。如果你的介面上看不到 Codex，可能是還沒有對你開放。本指南的實踐以 **Plus 以上**為準。

用量是**和 ChatGPT Work 共用的。** 用 Work 交辦很多大工作，留給 Codex 的份額也會減少。[^shared] 用量在第8章裡會進一步講。

<Quiz id="ch501-where" />

## 這個階段要做的事

把 Claude Code 章節裡的「整理工具（정리 도구）」資料夾原樣拿過來，讓它在 Codex 裡運轉起來。如果你跳過了 Claude Code 章節，可以在[第3階段 Codex 目錄](./)的「練習資料（연습 자료）」裡，拿到同樣的起點檔案。

1. 第2章：在應用裡開啟 Codex，整理一份會議備忘。
2. 第3章：把 `CLAUDE.md` 搬成 `AGENTS.md`，測試在我不說規則的情況下，它會不會遵守。
3. 第4章：熟悉許可權選單、檢視改動內容、撤銷。
4. 第5章：搬3個技能，用 `$weekly-review` 一行做出周覆盤。
5. 第6~8章：一邊和 Claude Code 對比，一邊整理定時、終端、安全。

**不需要一開始就全部背下來。** 把你在 Claude Code 裡做過的事，在 Codex 裡各重做一遍，差別自然就看出來了。

## 小結

- Codex 是在 ChatGPT 桌面應用裡選擇「Codex」來使用的。Chat、Work、Codex 在同一個應用裡。
- Codex 會展示改動內容這類技術資訊。不寫程式碼也可以用。
- 和 Claude Code 的概念幾乎相同。規則檔案是 `AGENTS.md`，技能是 `$名稱`，名字不同。
- Free 和 Go 是逐步開放。實踐以 Plus 以上為準，用量和 Work 共用。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Codex | Codex | OpenAI 的程式設計智慧體。在 ChatGPT 應用裡選擇的方式 |
| ChatGPT Work | ChatGPT Work | 把成品也一併交出去的 ChatGPT 方式。隱藏技術資訊 |
| AGENTS.md | AGENTS.md | Codex 工作之前會讀的規則檔案 |
| Rollout | 逐步開放 | 按賬號依次開放功能的方式 |

<ChapterDone :chapter="501" />

下一章：[第2章. 在 ChatGPT 應用裡開始使用 Codex](02-first-task.md)

[^modes]: Codex 官方文件，「Use ChatGPT」。"Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt（確認日期 2026-11-01）
[^compare]: Codex 官方文件，「Use ChatGPT」。"ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt（確認日期 2026-11-01）
[^prefer]: Codex 官方文件，「Use ChatGPT」。"If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt（確認日期 2026-11-01）
[^agents]: Codex 官方文件，「Custom instructions with AGENTS.md」。"Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md（確認日期 2026-11-01）
[^import]: Codex 官方文件，「Import from another agent」。"The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import（確認日期 2026-11-01）
[^desktop]: Codex 官方文件，「Quickstart」。"The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart（確認日期 2026-11-01）
[^cli]: Codex 官方文件，「Codex CLI」。"Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli（確認日期 2026-11-01）
[^cloud]: Codex 官方文件，「Codex Cloud」。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud（確認日期 2026-11-01）
[^pricing]: Codex 官方文件，「Pricing」。"GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing（確認日期 2026-11-01）
[^shared]: Codex 官方文件，「Pricing」。"ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing（確認日期 2026-11-01）
