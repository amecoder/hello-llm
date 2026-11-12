# 第3階段 · Antigravity 使用指南

Antigravity 是 Google 做的、**直接在我電腦的資料夾裡工作**的 AI 工具。有桌面應用和終端程式 `agy`。
本指南把做到 [Codex 指南](../21-codex/)為止的「按我的方式整理的工具（내 방식대로 정리해 주는 도구）」資料夾**不用搬，原樣開啟**，確認它在第三個工具裡是否也能運轉，並且只學不同的地方。

> **本指南依據2026年11月1日確認的 Antigravity 官方文件（antigravity.google/docs）和用終端 `agy` 執行的結果編寫。還沒有能用應用介面做實踐。** 功能和選單名稱經常變化。
> 三個工具中，只有它**用免費的 Google 帳號**（滿18週歲以上）也能使用全部功能。隨方案不同的只有用量和模型。

| 章 | 閱讀 | 標題 | 你會了解到 |
|---|---|---|---|
| 1 | 必讀 | [Antigravity 是什麼，和前面兩個工具有什麼不同](01-what-is.md) | 四種形態、免費也有全部功能、模型、三個工具的對應關係 |
| 2 | 必讀 | [安裝應用與第一次整理](02-first-task.md) | 安裝·登入、作為專案開啟、Planning mode 和 Proceed、Review 視窗 |
| 3 | 必讀 | [規則與技能 — 不需要搬](03-rules-skills.md) | 原樣使用 AGENTS.md·.agents/skills，用同一份備忘做 0→1，/技能名稱 |
| 4 | 必讀 | [許可權與撤銷](04-permissions-undo.md) | 四種預設、圍欄預設值（應用·終端）、丟棄時的注意事項、/rewind |
| 5 | 選讀 | [計劃、定時、瀏覽器、目標](05-plan-schedule.md) | /plan、/schedule 和 Automations、/browser、/goal、遠端操控 |
| 6 | 選讀 | [在終端裡使用](06-terminal.md) | agy -p、無聲拒絕和退出碼 0、資料夾信任、四個陷阱 |
| 7 | 必讀 | [成本、資料、安全，以及選擇三個工具](07-safety-choose.md) | 用量·積分、Enable Telemetry、隱藏指示實驗、三個工具一起使用、實踐作業 |

## 練習資料

起點是**學完 Codex 第5章的整理工具資料夾**。如果你跳過了前面的階段，請下載下面的檔案，做成同樣的樣子。所有備忘都是**編造的內容**，日期和星期是為了故事編出來的，和真實的2026年日曆對不上。

| 資料夾裡的位置 | 要下載的檔案 |
|---|---|
| `inbox/` | [meeting-2026-10-27-weekly.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-27-weekly.txt) · [study-2026-10-28-prompt-lecture.txt](/practice/zh-hant/notes/inbox/study-2026-10-28-prompt-lecture.txt) · [review-2026-10-29.txt](/practice/zh-hant/notes/inbox/review-2026-10-29.txt) · [review-2026-10-30.txt](/practice/zh-hant/notes/inbox/review-2026-10-30.txt) · [review-2026-10-31.txt](/practice/zh-hant/notes/inbox/review-2026-10-31.txt) · [meeting-2026-10-29-adhoc.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-29-adhoc.txt) |
| `templates/` | [minutes.md](/practice/zh-hant/notes/results/ch5-template-minutes.txt) · [study-notes.md](/practice/zh-hant/notes/results/ch5-template-study-notes.txt) · [weekly-review.md](/practice/zh-hant/notes/results/ch5-template-weekly-review.txt) · [README.md](/practice/zh-hant/notes/results/ch5-template-README.txt) |
| 最上層 | [AGENTS.md](/practice/zh-hant/notes/results/codex/ch3-AGENTS.md.txt) · [CLAUDE.md](/practice/zh-hant/notes/results/ch6-CLAUDE.md.txt) |
| `.agents/skills/名稱/SKILL.md`（如果也要用 Claude Code，`.claude/skills/` 裡也放同樣的檔案） | [meeting-notes](/practice/zh-hant/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/zh-hant/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/zh-hant/notes/results/ch7-skill-weekly-review.txt) |

下載的檔案，請按表裡的名稱改好副檔名後儲存（例：`ch3-AGENTS.md.txt` → `AGENTS.md`）。`notes/` 資料夾留空。

本指南用 Antigravity 做出的**成果**也一併公開。同樣的請求，樣子也會略有不同。

| 章 | 成果 |
|---|---|
| 3 | 必讀 | [會議紀要（沒有 AGENTS.md 時）](/practice/zh-hant/notes/results/antigravity/ch3-minutes-without-AGENTS.txt) · [會議紀要（有 AGENTS.md 時）](/practice/zh-hant/notes/results/antigravity/ch3-minutes-with-AGENTS.txt) · [用技能做的周覆盤](/practice/zh-hant/notes/results/antigravity/ch3-weekly-review-with-skill.txt) |
| 6 | 選讀 | [agy -p 輸出](/practice/zh-hant/notes/results/antigravity/ch6-agy-p-output.txt) |
| 7 | 必讀 | [用隱藏指示備忘做的會議紀要](/practice/zh-hant/notes/results/antigravity/ch7-minutes-hidden-instruction-memo.txt) |

如果你還沒讀 Codex，請先看[第3階段 · Codex 指南](../21-codex/)。只有免費帳號的話，從本指南開始實踐也可以。
