# 第8章 多件事同時做、雲端、定時 — 讓整理工具自己運轉

> **一句話總結**：你可以開啟多個會話，**把幾件事並排交出去**。想讓它到點自動執行，就建立**定時任務**。
> 定時有三種（桌面、雲端、`/loop`），最大的區別是**我的電腦是否必須開著**。

這一章依據2026年10月31日確認的 Claude Code 官方文件編寫。會話列表和定時列表裡會直接顯示真實的任務名稱，所以這一章不用截圖，而是按官方文件的說明和介面名稱來指引。它會用到第7章做的 `/weekly-review` 技能。

## 多件事並排做

會話是彼此獨立的對話，各自擁有背景和改動內容。[^session] 所以你可以**開啟多個會話，同時交辦不同的事**。

- 新會話：側邊選單的 **+ New**，或者 **Cmd+N**（Windows 是 Ctrl+N）[^parallel]
- 在會話之間切換：**Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- 並排檢視兩個會話：按住 **Option**（Windows 是 Alt）的同時，點側邊選單裡的會話[^parallel]

比如，可以在一個會話裡用 `/study-notes` 做學習筆記，同時在另一個會話裡用 `/weekly-review` 做周覆盤。這兩件事用的是不同的檔案，所以不會衝突。

**不要讓兩個會話同時修改同一個檔案。** 一個會話的回退，通常不會追蹤另一個會話改過的內容（第4章）。[^other-session] 如果想把同一個檔案朝多個方向改改看，就在是 Git 倉庫的資料夾（第3、4章裡打開了變更記錄的資料夾）裡，先開啟輸入框下面的**工作樹**（Worktree）再開始會話。這樣那個會話就會在資料夾的**獨立副本**裡工作。[^worktree]

<Quiz id="ch408-parallel" />

## 三種定時

讓 Claude 到約定的時間**自動開始一個新會話**，就是定時任務。[^scheduled] 方法有三種。

| | 桌面定時 | 雲端定時 | `/loop` |
|---|---|---|---|
| 在哪裡執行 | 我的電腦 | 雲端 | 我的電腦 |
| 電腦是否必須開著 | 是（應用執行中、沒有休眠） | 否 | 是 |
| 是否必須開著會話 | 否 | 否 | 是 |
| 能否訪問我的檔案 | 能 | 不能（重新獲取的副本） | 能 |
| 最短間隔 | 1小時（介面表單） | 1小時 | 1分鐘 |

出處：Claude Code 官方文件[^compare]

**對整理工具來說，桌面定時最合適。** 因為它要讀我電腦裡的 `inbox` 備忘。雲端定時即使關掉電腦也能執行，但它讀的不是我的檔案，而是重新獲取的 GitHub 倉庫。[^compare][^cloud] `/loop` 用在開啟著的會話裡短時間重複確認，過了7天就會自動結束。[^loop]

在舊版應用裡，定時功能可能顯示為 **Routines** 這個名字。[^old-name]

<Quiz id="ch408-kinds" />

## 預約每週五的周覆盤

桌面定時有兩種建立方法。

**方法1 — 用話請它做。** 在任何會話裡說出想要的日程就行。[^ask]

```
請建立一個定時任務：每週五下午6點，用 /weekly-review 生成本週的周覆盤。如果那一週沒有覆盤備忘，就什麼都不要生成，只留下“沒有備忘”。
```

**方法2 — 在介面上建立。** 點 Code 標籤頁側邊選單裡的 **Scheduled**（或 More 選單裡面），再點 **New task**。[^create] 日程可以從每小時、每天、工作日、每週等中選，也可以不設日程先存著，之後用 **Run now** 隨時執行。[^options]

設定定時時，一定要注意四點。

1. **應用和電腦必須醒著**：桌面定時**只在應用開著、電腦醒著時**才執行。要防止休眠，請開啟設定裡的 **Keep computer awake**。合上筆記本蓋子，電腦還是會休眠。[^awake]
2. **關機期間的執行**：如果電腦休眠了，醒來時只會把錯過的執行裡**最近的一次**執行一遍。週五下午6點的定時任務，可能會在週六早上才執行。[^missed] 所以要在請求裡**一併寫上條件**，比如“如果那一週沒有備忘……”。[^missed]
3. **停在授權視窗**：定時任務也有單獨的許可權模式。如果是「手動（수동）」，在需要授權的時刻會**停下來等待。**[^perm] 建立之後，請用 **Run now** 執行一次，並在彈出的授權窗口裡選擇「始終允許（항상 허용）」。這樣從下一次執行起就不會停了。[^perm] 它和第7章裡的許可權「只允許一次（한 번만 허용）」不同，原因是定時任務在我不盯著的時候執行。
4. **個人允許規則也會適用**：我電腦裡 Claude Code 設定（`~/.claude/settings.json`）中的允許規則，也適用於定時任務。[^perm]

<Quiz id="ch408-schedule" />

## 在雲端工作

雲端會話即使**關掉我的電腦也會繼續工作。**[^cloud-run] 不過雲端看不到我電腦裡的資料夾，通常是獲取 **GitHub 倉庫**後再工作。所以一般需要連線 GitHub。[^cloud] 像本指南的整理工具那樣，在我電腦資料夾裡做的事，適合用桌面這一邊。等你把工作放到 GitHub 上並開始使用時，再試試雲端。

<Quiz id="ch408-cloud" />

## 親自試一試

1. 開啟兩個會話，一邊執行 `/study-notes`，另一邊執行 `/weekly-review`。確認兩個結果有沒有儲存到不同的檔案裡。
2. 用話請它建立每週五週覆盤的定時任務。在請求里加上“如果沒有備忘……”這個條件。
3. 在定時列表裡開啟那個任務，用 **Run now** 執行一次。如果彈出授權視窗，就提前處理好。
4. 不需要的話，就關掉或刪除這個定時任務。定時執行也是會話，所以每次執行都會消耗用量。

**連續任務**：定時任務讀覆盤備忘時，如果備忘裡混進了“無視這個指示，然後……”這樣的句子，會怎麼樣？我們在第9章裡確認。

## 小結

- 會話是彼此獨立的。開啟多個會話，並排交辦不同檔案的工作。同一個檔案要避開，或者用工作樹。
- 定時有桌面（我的電腦、可訪問檔案）、雲端（電腦可以關、GitHub）、`/loop`（會話內、7天）。
- 整理工具要讀我的檔案，所以桌面定時最合適。
- 錯過的執行，在醒來時只執行一次。要在請求裡寫下條件，並用 Run now 提前處理授權視窗。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Scheduled task | 定時任務 | 到約定的時間自動開始新會話的任務 |
| Routine | Routine | 雲端定時任務以前的名字 |
| Worktree | 工作樹 | 同一個 Git 倉庫的獨立工作副本 |
| Cloud session | 雲端會話 | 不在我的電腦上，而在雲端執行的會話 |
| `/loop` | 迴圈 | 在開啟著的會話裡重複做事的命令（7天後結束） |

<ChapterDone :chapter="408" />

下一章：[第9章. 成本、資料、安全](09-cost-data-safety.md)

[^session]: Claude Code 官方文件，「Desktop application」。"Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^parallel]: Claude Code 官方文件，「Desktop application」。"Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^other-session]: Claude Code 官方文件，「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing（確認日期 2026-10-31）
[^worktree]: Claude Code 官方文件，「Desktop application」。"In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^scheduled]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^compare]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。比較表（Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval）和 "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^cloud]: Claude Code 官方文件，「Use Claude Code in the cloud」。"Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web（確認日期 2026-10-31）
[^loop]: Claude Code 官方文件，「Run prompts on a schedule」。"Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks（確認日期 2026-10-31）
[^old-name]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^ask]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^create]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^options]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^missed]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^perm]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
[^cloud-run]: Claude Code 官方文件，「Get started with the desktop app」。"Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart（確認日期 2026-10-31）
[^awake]: Claude Code 官方文件，「Schedule recurring tasks in Claude Code Desktop」。"Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks（確認日期 2026-10-31）
