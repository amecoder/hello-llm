# 第3階段 · Codex 使用指南

Codex 是 OpenAI 做的、**直接在你電腦的資料夾裡幹活**的 AI 工具。現在，你在 ChatGPT 桌面應用裡選擇「Codex」就能使用。
這份指南會把你在 [Claude Code 指南](../20-claude-code/)裡做好的「按我的方式整理筆記的工具」搬到 Codex 上，並且**只學習和 Claude Code 不同的地方**。

> **這份指南依據 2026年11月1日確認的 Codex 官方文件（learn.chatgpt.com）和實際執行結果寫成。** 功能和選單名稱經常變化。
> 練習以 **Plus 及以上**套餐為準。Free、Go 是逐步開放的，所以你可能還看不到 Codex。

| 章 | 標題 | 你會學到什麼 |
|---|---|---|
| 1 | [Codex 是什麼，和 Claude Code 有什麼不同](01-what-is.md) | ChatGPT 應用裡的 Chat、Work、Codex，與 Claude Code 的對應關係，套餐 |
| 2 | [在 ChatGPT 應用裡開始使用 Codex](02-first-task.md) | 安裝、選擇 Codex、開啟資料夾、交給它做第一次整理 |
| 3 | [規則檔案 AGENTS.md](03-agents-md.md) | 搬運 CLAUDE.md、不說出規則來測試它、匯入與記憶 |
| 4 | [許可權與撤銷](04-permissions-undo.md) | 三種許可權選單、受保護的資料夾、審閱視窗、用 Git 撤銷 |
| 5 | [搬運技能](05-skills.md) | .agents/skills、一行 $weekly-review、錯的和漏掉的 |
| 6 | [定時任務、雲端、手機](06-schedule-cloud.md) | 定時條件與許可權、和雲端的區別、連線手機 |
| 7 | [在終端裡使用](07-terminal.md) | 安裝、codex exec（預設只讀）、互動式命令 |
| 8 | [費用、資料、安全，以及如何選擇工具](08-safety-choose.md) | 用量、資料設定、隱藏指令實驗、兩個工具一起用、練習作業 |

## 練習資料

起點是**完成了 Claude Code 第7章的整理工具資料夾**。如果你跳過了 Claude Code 指南，請下載下面的檔案，做成同樣的樣子。所有筆記都是**虛構的內容**，日期和星期是為了故事編出來的，所以和真實的 2026年日曆對不上。

| 資料夾裡的位置 | 要下載的檔案 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 最上層 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/名稱/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

下載後，請把副檔名改成表裡寫的名字再儲存（例：`5장-양식-회의록.txt` → `templates/회의록.md`）。`notes/` 資料夾保持為空。

這份指南用 Codex 做出的**成果**也一併公開。同樣的請求，做出來的樣子也會略有不同。

| 章 | 成果 |
|---|---|
| 2 | [會議記錄](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [只靠規則寫的學習筆記](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [用技能做的每週覆盤](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [codex exec 輸出](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [用隱藏指令備忘錄做的會議記錄](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

如果你還沒讀過 Claude Code，請先看[第3階段 · Claude Code 指南](../20-claude-code/)。資料夾、許可權、規則檔案、技能分別是什麼，那邊有講解，這份指南會用連結接過去。
