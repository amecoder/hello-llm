# 第3階段 · Claude Code 終端指南

在第2階段，你是在聊天裡**提問並得到答案。** 在本指南裡，你要在終端裡呼叫 Claude Code，讓 Claude **直接在你電腦的資料夾裡讀取並修改檔案**。
從沒開啟過終端也沒關係。不懂程式碼也沒關係。第1章從開啟終端開始，最後你會做出一個用一行命令就能執行的每週整理。

> **本指南依據 2026年11月6日確認的 Claude Code 官方文件（code.claude.com/docs），以及同一天在 Linux 上實際執行 Claude Code 2.1.318 的結果編寫。** 為了不混入作者的個人設定，執行時關掉了這些設定。沒有在 macOS·Windows 上執行過。這兩部分內容以官方文件為依據。沒有實際執行過的功能，會在相應位置說明。
> 使用 Claude Code 需要**付費帳號**（Pro·Max·Ultra·Team·Enterprise·Console）。功能和命令經常變化。如果和你的介面不一樣，請以螢幕上看到的名稱為準。

| 章 | 閱讀 | 標題 | 你會了解到 |
|---|---|---|---|
| 1 | 必讀 | [終端與 Claude Code](01-what-is.md) | 終端是什麼，在自己電腦上怎麼開啟 |
| 2 | 必讀 | [終端基礎](02-shell-basics.md) | 切換資料夾、處理檔案、建好練習資料夾 |
| 3 | 必讀 | [安裝與登入](03-install-login.md) | 按作業系統安裝、登入、確認版本 |
| 4 | 必讀 | [第一次會話](04-first-session.md) | 確認信任資料夾、看懂介面、第一份會議記錄 |
| 5 | 必讀 | [輸入技巧與命令](05-input-commands.md) | `@`·`!`·`/`、多行輸入、快捷鍵 |
| 6 | 必讀 | [會話與上下文](06-sessions-context.md) | 起名字、繼續會話、`/context`·`/compact`·`/clear` |
| 7 | 必讀 | [許可與撤銷](07-permissions-undo.md) | 許可權模式、許可視窗、回退、拒絕規則 |
| 8 | 必讀 | [專案記憶與設定](08-memory-settings.md) | CLAUDE.md、設定檔案 |
| 9 | 必讀 | [技能與擴充套件](09-skills-extensions.md) | 製作技能、外掛·MCP·子代理 |
| 10 | 必讀 | [一行執行與自動化](10-headless-automation.md) | `claude -p`、預先許可、`weekly-summary.sh` |
| 11 | 必讀 | [鉤子與介面定製](11-hooks-statusline.md) | 變更記錄鉤子、狀態列、輸出風格 |
| 12 | 必讀 | [同時工作與遠端](12-parallel-remote.md) | Git 第一次記錄、worktree、`/loop`、`/goal`、遠端控制 |
| 13 | 必讀 | [費用·安全·問題解決](13-cost-safety-trouble.md) | 用量、模型、沙箱、資料、出錯時的應對 |
| 14 | 必讀 | [實踐任務與像專家一樣使用](14-practice-expert.md) | 任務與檢查表、用自己的筆記做每週整理、每週例行 |

遇到陌生的命令，可以到[命令詞典](command-reference.md)裡查。這裡彙總了本課程裡的命令、選項和符號，並附上了意思。

## 練習材料

練習在 `~/hello-ai-practice/terminal`（hello-ai 練習/終端）資料夾裡，用下面的筆記來做。**內容全部是虛構的**（小咖啡館「街角咖啡館」員工瑞妍的一週）。
第2章只放入每週例會的筆記。臨時會議的筆記在第13章再放入。

| 檔案 | 內容 |
|---|---|
| [meeting-2026-10-27-weekly.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-27-weekly.txt)（會議-2026-10-27-每週例會） | 亂糟糟的每週例會筆記 |
| [meeting-2026-10-29-adhoc.txt](/practice/zh-hant/notes/inbox/meeting-2026-10-29-adhoc.txt)（會議-2026-10-29-臨時會議） | 藏著隱藏指令的筆記（第13章安全實驗用） |

本指南透過實際執行做出的**成果物**也公開出來。可以和你自己的結果比一比。即使請求一樣，結果的樣子也會有些不同。

| 章 | 成果物 |
|---|---|
| 4 | [會議記錄](/practice/zh-hant/cli/results/ch4-minutes.txt) |
| 8 | [CLAUDE.md](/practice/zh-hant/cli/results/ch8-CLAUDE.md.txt) |
| 9 | [技能 meeting-notes](/practice/zh-hant/cli/results/ch9-skill-meeting-notes.txt) |
| 10 | [weekly-summary.sh](/practice/zh-hant/cli/results/ch10-weekly-summary.sh.txt) · [用指令碼做出的會議記錄](/practice/zh-hant/cli/results/ch10-minutes-by-script.txt) |
| 11 | [設定檔案](/practice/zh-hant/cli/results/ch11-settings.json.txt) |

如果想不用終端來使用，請看 [Claude Code 應用指南](/zh-hant/guide/20-claude-code/)。它用桌面應用整理同樣的咖啡館筆記。帳號·方案·聊天功能在[第2階段 · Claude 指南](/zh-hant/guide/10-claude/)裡說明。
