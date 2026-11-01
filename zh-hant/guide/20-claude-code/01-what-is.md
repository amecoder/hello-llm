# 第1章 Claude Code 是什麼，在哪裡用——和聊天的區別、使用的地方、套餐

> **一句話總結**：Claude Code 是**直接讀取我電腦裡的資料夾、修改檔案、執行命令**的 Claude。不用像聊天那樣拿到回答再複製貼上，而是把事情交給它，然後檢查結果。
> 要使用，需要**付費訂閱**（Pro·Max·Ultra·Team·Enterprise）。這個階段從不需要終端的**桌面應用**開始。

這一章是根據 2026 年 10 月 31 日確認的 Claude Code 官方文件寫的。功能和選單名稱經常變化。

## 和聊天有什麼不同

第2階段用的 Claude 聊天，是**提問並拿到回答**的地方。回答裡的文字，要我自己複製再貼上到檔案裡。

**Claude Code 直接在我電腦的資料夾裡工作。** 官方文件把 Claude Code 介紹為“讀取資料夾的內容、修改檔案、執行命令”的工具。[^overview] 你用平時說的話描述想要的東西，它就會規劃方法，跨多個檔案工作，最後還會確認是否執行正常。[^overview]

| | 聊天（第2階段） | Claude Code（第3階段） |
|---|---|---|
| 工作的地方 | 對話窗口裡 | 我電腦裡的資料夾 |
| 檔案 | 我上傳，拿到的回答由我貼上 | Claude 直接讀取並修改資料夾裡的檔案 |
| 多步驟的事 | 我一步一步地接著做 | 自己銜接規劃 → 工作 → 確認 |
| 我要做的事 | 讀回答並搬運 | 交給它，檢查改動的內容 |

出處：這本指南的整理（官方文件沒有直接與聊天做比較）[^overview]

這種方式叫作**代理**（Agent，自己推進多個步驟的 AI）。官方文件也把 Claude Code 稱為“代理式程式設計工具”（agentic coding tool）。[^overview]

第2階段 Claude 指南里的 **Cowork** 也是把整件事交出去的功能（[第2階段 Claude 第8章](../10-claude/08-cowork.md)）。桌面應用裡同時包含聊天（Chat）、Cowork 和 Claude Code（**Code** 標籤）。[^linux] 這個階段講其中的 **Code** 標籤。

<Quiz id="ch401-what" />

## 可以交給它什麼事

名字叫“程式碼”，但它做的事，說到底是**讀取並修改資料夾裡的檔案**。[^overview] 官方文件舉的例子是開發者的工作。[^overview]

- 開發功能、修復錯誤
- 出了錯誤，就把錯誤資訊貼上進去，或者用語言描述症狀
- 寫測試、修正多個檔案的格式錯誤、寫釋出說明（改動內容的說明文）之類的重複工作

**這本指南不用程式碼，而是用裝著備忘檔案的資料夾來練習。** 把會議備忘、學習筆記、每天的回顧這類沒整理的備忘放進去，就會得到**按我定的格式**整理好的會議記錄、學習筆記、每週回顧，這樣一個「按我的方式整理的工具」，在整個第3階段裡會一點一點地做出來。第一件事是這樣的請求。

```
讀取 inbox 資料夾裡的會議備忘，整理成會議記錄。分成已決定的事 / 待辦事項（負責人·期限） / 下次要討論的事 三個部分，作為新檔案儲存到 notes 資料夾裡。不要修改原始備忘。
```

如果是聊天，得上傳備忘，再把拿到的回答貼上到新檔案裡儲存。Claude Code 會直接讀取資料夾，並建立會議記錄檔案。我只需要**檢查做出來的檔案對不對**。

也有按固定方式做總結的服務。在 Claude Code 裡，可以把“待辦事項一定要區分負責人·期限”這類**我的格式儲存成檔案，不用每次重新解釋**就能用。方法會在第 6·7 章學到。

不過，**直接修改檔案，需要小心的地方也隨之增多。** 所以，決定允許什麼的方法（[第4章](04-permissions-undo.md)），以及確認改動內容的方法，在這個階段一定要學。

<Quiz id="ch401-tasks" />

## 在哪裡用

Claude Code 可以在多個地方使用。無論在哪裡用，運轉的都是**同一個引擎**（核心程式），只是介面按使用方式有所不同。[^platforms]

| 使用的地方 | 適合的時候 |
|---|---|
| **桌面應用**（Code 標籤） | 用眼睛檢查改動內容、並排做幾件事、設定簡單 |
| 終端（CLI） | 在命令窗口裡工作、自動化 |
| VS Code 之類的編輯器 | 直接在程式碼編輯器裡使用 |
| 網頁（雲端） | 耗時很久的事、關掉我的電腦也要繼續的事 |
| 手機 | 在外面開始任務並盯著它 |

出處：Claude Code 官方文件[^platforms]

**這本指南從桌面應用開始。** 官方文件也介紹說，對不想用終端的人，桌面應用以圖形介面提供同一個引擎。[^platforms] 桌面應用裡已經包含 Claude Code，所以沒有需要另外安裝的程式。[^quickstart]

同一件事在好幾個地方混著用也可以。[^platforms] 終端在第10章講，網頁·手機在第8章講。

<Quiz id="ch401-where" />

## 需要什麼——套餐

**Claude Code 只能在付費訂閱下使用。** 需要 Pro、Max、Ultra、Team、Enterprise 訂閱，或者 Console（API）賬號，**免費套餐不能用。**[^setup] 個人訂閱（Pro·Max·Ultra）用 claude.ai 賬號登入。[^auth]

- 套餐名稱變了。**Ultra 是以前 Max 20x 的新名字，Max 是以前 Max 5x 的新名字。**[^availability] 如果在舊文章裡看到“Max 5x”，就是現在的 Max。
- 價格和使用額度，在第2階段 Claude 指南里講過了（[第2階段 Claude 第1章](../10-claude/01-getting-started.md#一眼看懂套餐)）。用量由桌面·終端等**所有使用 Claude Code 的地方一起**消耗。[^desktop] Team·Enterprise 還和聊天·Cowork 一起消耗。[^costs]
- 宣傳的使用額度，是以**一個人正常使用**為前提的。[^legal] 其他公司做的服務用我的訂閱登入來代替傳送請求的方式，也是不允許的。[^legal]

哪個套餐合適，可以邊用邊決定。檢視用量的方法在第9章講。

<Quiz id="ch401-plan" />

## 這個階段學習的順序

| 章 | 學什麼 |
|---|---|
| [第2章](02-install.md) | 安裝桌面應用並交出第一件事 |
| 第3章 | 逛一逛介面 |
| 第 4~5 章 | 允許和撤銷的方法、把事情交代好的方法 |
| 第 6~7 章 | 寫下專案規則、擴充套件功能 |
| 第 8~9 章 | 同時做多件事·雲端·預約，費用和安全 |
| 第10章 | 在終端裡使用 |
| 第 11~12 章 | 實踐作業、像專家一樣使用 |

不需要一開始就全部瞭解。在第2章交出一件小事試試，就足夠了。

## 親自試一試

1. 登入 claude.ai，確認我現在的套餐是什麼。如果是免費套餐，這個階段的實踐可以等訂閱之後再做。
2. 寫下一件你想在自己電腦上交給 Claude 的“資料夾工作”（例如：把零散的備忘彙總到一個檔案裡）。
3. 數一數，如果用聊天來做這件事，要複製·貼上幾次。

**連續任務**：選一件你每週都要整理的事（會議記錄·課堂筆記·回顧等），用三行字寫下希望整理成什麼格式（例如：“已決定的事 / 待辦事項（負責人·期限） / 下次要討論的事”）。在第2章用練習備忘交給它做第一次整理，在第11章用我自己的備忘來試。

## 整理

- Claude Code 是直接讀取我電腦裡的資料夾、修改檔案、執行命令的代理式工具。
- 聊天是拿到回答後由我來搬運，Claude Code 是把事情交給它，由我來檢查。
- 在桌面應用·終端·編輯器·網頁·手機上使用同一個引擎。這個階段從桌面應用開始學。
- 需要 Pro·Max·Ultra·Team·Enterprise 訂閱，免費套餐不能用。Ultra 是以前的 Max 20x，Max 是以前的 Max 5x。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Claude Code | Claude Code | 直接在我電腦的資料夾裡工作的 Claude |
| Agent | 代理 | 自己銜接多個步驟來工作的 AI |
| Code 標籤 | Code 標籤 | 在桌面應用裡使用 Claude Code 的地方 |
| CLI | 命令列（CLI） | 透過輸入文字命令來使用的程式（終端） |
| Surface | 使用介面 | 桌面·終端·網頁這樣使用 Claude Code 的介面 |

<ChapterDone :chapter="401" />

下一章：[第2章. 安裝桌面應用和第一次會話](02-install.md)

[^overview]: Claude Code 官方文件，《Overview》。"Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview （確認日期 2026-10-31）
[^platforms]: Claude Code 官方文件，《Platforms and integrations》。"Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms （確認日期 2026-10-31）
[^linux]: Claude Code 官方文件，《Claude Desktop on Linux (beta)》。"The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux （確認日期 2026-10-31）
[^quickstart]: Claude Code 官方文件，《Get started with the desktop app》。"The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart （確認日期 2026-10-31）
[^setup]: Claude Code 官方文件，《Advanced setup》。"Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." 條款頁面（legal-and-compliance）裡也把免費使用者一併寫了進去，看起來不一致，但使用條件以這份文件的明確語句為準。https://code.claude.com/docs/en/setup （確認日期 2026-10-31）
[^desktop]: Claude Code 官方文件，《Desktop application》。"Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^costs]: Claude Code 官方文件，《Manage costs effectively》。"The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs （確認日期 2026-10-31）
[^auth]: Claude Code 官方文件，《Authentication》。"Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication （確認日期 2026-10-31）
[^availability]: Claude Code 官方文件，《Feature availability》。"Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability （確認日期 2026-10-31）
[^legal]: Claude Code 官方文件，《Legal and compliance》。"Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance （確認日期 2026-10-31）
