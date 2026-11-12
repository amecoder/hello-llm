# 第3階段 · Codex 使用指南

Codex 是 OpenAI 做的、**直接在你電腦的資料夾裡幹活**的 AI 工具。現在，你在 ChatGPT 桌面應用裡選擇「Codex」就能使用。
這份指南會把你在 [Claude Code 指南](../20-claude-code/)裡做好的「按我的方式整理筆記的工具」搬到 Codex 上，並且**只學習和 Claude Code 不同的地方**。

> **這份指南依據 2026年11月1日確認的 Codex 官方文件（learn.chatgpt.com）和實際執行結果寫成。** 功能和選單名稱經常變化。
> 練習以 **Plus 及以上**方案為準。Free、Go 是逐步開放的，所以你可能還看不到 Codex。

| 章 | 閱讀 | 標題 | 你會學到什麼 |
|---|---|---|---|
| 1 | 必讀 | [Codex 是什麼，和 Claude Code 有什麼不同](01-what-is.md) | ChatGPT 應用裡的 Chat、Work、Codex，與 Claude Code 的對應關係，方案 |
| 2 | 必讀 | [在 ChatGPT 應用裡開始使用 Codex](02-first-task.md) | 安裝、選擇 Codex、開啟資料夾、交給它做第一次整理 |
| 3 | 必讀 | [規則檔案 AGENTS.md](03-agents-md.md) | 搬運 CLAUDE.md、不說出規則來測試它、匯入與記憶 |
| 4 | 必讀 | [許可權與撤銷](04-permissions-undo.md) | 三種許可權選單、受保護的資料夾、審閱視窗、用 Git 撤銷 |
| 5 | 必讀 | [搬運技能](05-skills.md) | .agents/skills、一行 $weekly-review、錯的和漏掉的 |
| 6 | 選讀 | [定時任務、雲端、手機](06-schedule-cloud.md) | 定時條件與許可權、和雲端的區別、連線手機 |
| 7 | 選讀 | [在終端裡使用](07-terminal.md) | 安裝、codex exec（預設只讀）、互動式命令 |
| 8 | 必讀 | [費用、資料、安全，以及如何選擇工具](08-safety-choose.md) | 用量、資料設定、隱藏指令實驗、兩個工具一起用、練習作業 |

## 練習資料

起點是**完成了 Claude Code 第7章的整理工具資料夾**。如果你跳過了 Claude Code 指南，請下載下面的檔案，做成同樣的樣子。所有筆記都是**虛構的內容**，日期和星期是為了故事編出來的，所以和真實的 2026年日曆對不上。

| 資料夾裡的位置 | 要下載的檔案 |
|---|---|
| `inbox/` | [meeting-2026-10-27-weekly.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-27-weekly.txt) · [study-2026-10-28-prompt-lecture.txt](/practice/zh-hant/notes/inbox/study-2026-10-28-prompt-lecture.txt) · [review-2026-10-29.txt](/practice/zh-hant/notes/inbox/review-2026-10-29.txt) · [review-2026-10-30.txt](/practice/zh-hant/notes/inbox/review-2026-10-30.txt) · [review-2026-10-31.txt](/practice/zh-hant/notes/inbox/review-2026-10-31.txt) · [meeting-2026-10-29-adhoc.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-29-adhoc.txt) |
| `templates/` | [minutes.md](/practice/zh-hant/notes/results/ch5-template-minutes.txt) · [study-notes.md](/practice/zh-hant/notes/results/ch5-template-study-notes.txt) · [weekly-review.md](/practice/zh-hant/notes/results/ch5-template-weekly-review.txt) · [README.md](/practice/zh-hant/notes/results/ch5-template-README.txt) |
| 最上層 | [CLAUDE.md](/practice/zh-hant/notes/results/ch6-CLAUDE.md.txt) |
| `.claude/skills/名稱/SKILL.md` | [meeting-notes](/practice/zh-hant/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/zh-hant/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/zh-hant/notes/results/ch7-skill-weekly-review.txt) |

下載後，請把副檔名改成表裡寫的名字再儲存（例：`ch5-template-minutes.txt` → `templates/minutes.md`）。`notes/` 資料夾保持為空。

這份指南用 Codex 做出的**成果**也一併公開。同樣的請求，做出來的樣子也會略有不同。

| 章 | 成果 |
|---|---|
| 2 | [會議記錄](/practice/zh-hant/notes/results/codex/ch2-minutes-2026-10-27-weekly.txt) |
| 3 | [AGENTS.md](/practice/zh-hant/notes/results/codex/ch3-AGENTS.md.txt) · [只靠規則寫的學習筆記](/practice/zh-hant/notes/results/codex/ch3-study-notes-rule-check.txt) |
| 5 | [用技能做的每週覆盤](/practice/zh-hant/notes/results/codex/ch5-weekly-review-with-skill.txt) |
| 7 | [codex exec 輸出](/practice/zh-hant/notes/results/codex/ch7-codex-exec-output.txt) |
| 8 | [用隱藏指令備忘錄做的會議記錄](/practice/zh-hant/notes/results/codex/ch8-minutes-hidden-instruction-memo.txt) |

如果你還沒讀過 Claude Code，請先看[第3階段 · Claude Code 指南](../20-claude-code/)。資料夾、許可權、規則檔案、技能分別是什麼，那邊有講解，這份指南會用連結接過去。
