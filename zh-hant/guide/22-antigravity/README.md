# 第3階段 · Antigravity 使用指南

Antigravity 是 Google 做的、**直接在我電腦的資料夾裡工作**的 AI 工具。有桌面應用和終端程式 `agy`。
本指南把做到 [Codex 指南](../21-codex/)為止的「按我的方式整理的工具（내 방식대로 정리해 주는 도구）」資料夾**不用搬，原樣開啟**，確認它在第三個工具裡是否也能運轉，並且只學不同的地方。

> **本指南依據2026年11月1日確認的 Antigravity 官方文件（antigravity.google/docs）和用終端 `agy` 執行的結果編寫。還沒有能用應用介面做實踐。** 功能和選單名稱經常變化。
> 三個工具中，只有它**用免費的 Google 賬號**（滿18週歲以上）也能使用全部功能。隨套餐不同的只有用量和模型。

| 章 | 標題 | 你會了解到 |
|---|---|---|
| 1 | [Antigravity 是什麼，和前面兩個工具有什麼不同](01-what-is.md) | 四種形態、免費也有全部功能、模型、三個工具的對應關係 |
| 2 | [安裝應用與第一次整理](02-first-task.md) | 安裝·登入、作為專案開啟、Planning mode 和 Proceed、Review 視窗 |
| 3 | [規則與技能 — 不需要搬](03-rules-skills.md) | 原樣使用 AGENTS.md·.agents/skills，用同一份備忘做 0→1，/技能名稱 |
| 4 | [許可權與撤銷](04-permissions-undo.md) | 四種預設、圍欄預設值（應用·終端）、丟棄時的注意事項、/rewind |
| 5 | [計劃、定時、瀏覽器、目標](05-plan-schedule.md) | /plan、/schedule 和 Automations、/browser、/goal、遠端操控 |
| 6 | [在終端裡使用](06-terminal.md) | agy -p、無聲拒絕和退出碼 0、資料夾信任、四個陷阱 |
| 7 | [成本、資料、安全，以及選擇三個工具](07-safety-choose.md) | 用量·積分、Enable Telemetry、隱藏指示實驗、三個工具一起使用、實踐作業 |

## 練習資料

起點是**學完 Codex 第5章的整理工具資料夾**。如果你跳過了前面的階段，請下載下面的檔案，做成同樣的樣子。所有備忘都是**編造的內容**，日期和星期是為了故事編出來的，和真實的2026年日曆對不上。

| 資料夾裡的位置 | 要下載的檔案 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 最上層 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/名稱/SKILL.md`（如果也要用 Claude Code，`.claude/skills/` 裡也放同樣的檔案） | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

下載的檔案，請按表裡的名稱改好副檔名後儲存（例：`3장-AGENTS.md.txt` → `AGENTS.md`）。`notes/` 資料夾留空。

本指南用 Antigravity 做出的**成果**也一併公開。同樣的請求，樣子也會略有不同。

| 章 | 成果 |
|---|---|
| 3 | [會議紀要（沒有 AGENTS.md 時）](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [會議紀要（有 AGENTS.md 時）](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [用技能做的周覆盤](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [agy -p 輸出](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [用隱藏指示備忘做的會議紀要](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

如果你還沒讀 Codex，請先看[第3階段 · Codex 指南](../21-codex/)。只有免費賬號的話，從本指南開始實踐也可以。
