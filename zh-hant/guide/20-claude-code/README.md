# 第3階段 · Claude Code 使用指南

在第2階段，你是在聊天裡**提問並得到答案。** 在第3階段，你要學習 Claude Code，讓 Claude **直接在你電腦的資料夾裡讀取並修改檔案。**
不懂程式碼也沒關係。本指南用裝著備忘錄和表格檔案的資料夾來練習，並且從不需要終端的 **Claude 桌面應用的 Code 標籤頁**開始。

> **本指南依據 2026年10月31日確認的 Claude Code 官方文件（code.claude.com/docs）和實際介面編寫。** 功能和選單名稱經常變化。
> 使用 Claude Code 需要有**付費訂閱**（Pro·Max·Ultra·Team·Enterprise）。如果和你的介面不一樣，請以螢幕上看到的名稱為準。

| 章 | 閱讀 | 標題 | 你會了解到 |
|---|---|---|---|
| 1 | 必讀 | [Claude Code 是什麼，在哪裡用](01-what-is.md) | 和聊天的區別、在哪裡用、方案 |
| 2 | 必讀 | [安裝桌面應用與第一次會話](02-install.md) | 安裝·登入、Code 標籤頁、選擇資料夾、交付第一件事 |
| 3 | 必讀 | [熟悉介面](03-screen-tour.md) | 標題欄按鈕、檢視改動內容（Git）、會話資訊、檔案欄 |
| 4 | 必讀 | [許可與撤銷](04-permissions-undo.md) | 許可權模式、回退、撤銷的侷限、Git 記錄 |
| 5 | 必讀 | [怎樣把事情交代好](05-delegate-well.md) | 說得具體、用計劃模式設計 3 種模板、確認標準與依據 |
| 6 | 必讀 | [專案記憶](06-claude-md.md) | 用 CLAUDE.md 寫下我的規則，並在新會話裡檢驗 |
| 7 | 必讀 | [技能·外掛·外部工具](07-skills-plugins.md) | 用 3 個整理技能做成工具、受保護路徑的許可視窗、外掛安全 |
| 8 | 選讀 | [同時做多件事·雲端·定時](08-parallel-cloud-schedule.md) | 並排會話、三種定時、週五每週回顧定時、雲端 |
| 9 | 必讀 | [費用·資料·安全](09-cost-data-safety.md) | 用量、學習設定與儲存期限、隱藏指令實驗與安全守則 |
| 10 | 選讀 | [在終端裡使用](10-terminal.md) | 安裝和基本命令、用 claude -p 檢查整理工具、在應用與終端之間切換 |
| 11 | 必讀 | [實踐任務](11-practice.md) | 9 個任務和檢查表，最後用我自己的備忘錄做出屬於我的整理工具 |
| 12 | 進階 | [像專家一樣使用](12-expert.md) | 按工作挑選、需要時再一個一個積累、每週整理的固定流程 |

## 練習資料

第3階段的實踐用下面 6 份備忘錄來做。它們**全是虛構的內容**（小咖啡館「街角咖啡館」員工瑞妍的一週）。請在你的電腦上建一個 `organizer/inbox` 資料夾，把檔案下載後放進去。備忘錄裡的日期和星期是為了故事編的，和真實的 2026年日曆對不上。

| 檔案 | 內容 | 第一次用到的章 |
|---|---|---|
| [meeting-2026-10-27-weekly.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-27-weekly.txt) | 亂七八糟的週會備忘錄 | 第2章 |
| [study-2026-10-28-prompt-lecture.txt](/practice/zh-hant/notes/inbox/study-2026-10-28-prompt-lecture.txt) | 聽課筆記 | 第4章 |
| [review-2026-10-29.txt](/practice/zh-hant/notes/inbox/review-2026-10-29.txt) · [10-30](/practice/zh-hant/notes/inbox/review-2026-10-30.txt) · [10-31](/practice/zh-hant/notes/inbox/review-2026-10-31.txt) | 3 天的每日回顧 | 第3章 |
| [meeting-2026-10-29-adhoc.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-29-adhoc.txt) | 藏有隱藏指令的備忘錄（安全實驗用） | 第9章 |

本指南用真實的 Claude Code 應用做出的**成果**也一併公開。請和你自己的結果對照一下。即使請求相同，成果的樣子也會有些不同。

| 章 | 成果 |
|---|---|
| 2 | [會議紀要](/practice/zh-hant/notes/results/ch2-minutes-2026-10-27-weekly.txt) |
| 3 | [加了狀態列的會議紀要](/practice/zh-hant/notes/results/ch3-minutes-status-column.txt) |
| 4 | [學習筆記（回退之前）](/practice/zh-hant/notes/results/ch4-study-notes-2026-10-28.txt) |
| 5 | [會議紀要模板](/practice/zh-hant/notes/results/ch5-template-minutes.txt) · [學習筆記模板](/practice/zh-hant/notes/results/ch5-template-study-notes.txt) · [每週回顧模板](/practice/zh-hant/notes/results/ch5-template-weekly-review.txt) · [模板說明](/practice/zh-hant/notes/results/ch5-template-README.txt) |
| 6 | [CLAUDE.md](/practice/zh-hant/notes/results/ch6-CLAUDE.md.txt) · [只靠規則寫出的每週回顧](/practice/zh-hant/notes/results/ch6-weekly-review-2026-10-27.txt) |
| 7 | [meeting-notes](/practice/zh-hant/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/zh-hant/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/zh-hant/notes/results/ch7-skill-weekly-review.txt) 技能 · [用技能做出的學習筆記](/practice/zh-hant/notes/results/ch7-study-notes-with-skill.txt) |
| 9 | [用藏有隱藏指令的備忘錄做出的會議紀要](/practice/zh-hant/notes/results/ch9-minutes-hidden-instruction-memo.txt) |
| 10 | [claude -p 的輸出](/practice/zh-hant/notes/results/ch10-claude-p-output.txt) |

如果你還沒讀第2階段，請先從[第2階段 · Claude 指南](../10-claude/)開始。帳號、方案、聊天功能在那裡講過了，第3階段用連結連過去。
