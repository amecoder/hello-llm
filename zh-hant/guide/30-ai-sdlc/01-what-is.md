# 第1章 和 AI 一起做出東西——一眼看懂 SDLC

> **一句話總結**：軟體要經過**計劃 → 製作 → 評審 → 確認 → 釋出 → 運營**，才會走向世界。這個流程叫作 SDLC。
> AI 可以成為每個步驟裡的雙手，但**決定做什麼、確認結果，是人的事**。第4階段就是學習這種分工。

這一章是根據 2026 年 11 月 1 日確認的 GitHub 官方文件和 Claude Code 官方文件寫的。這是為在第3階段用 Claude Code·Codex·Antigravity 操作過資料夾的讀者準備的階段。如果還沒有看第3階段，請先看[第3階段 · Claude Code](../20-claude-code/)。

## 什麼是 SDLC

SDLC（軟體開發生命週期，Software Development Life Cycle）指的是專案**從最初的想法，到真正運轉起來的軟體**所經歷的步驟。[^sdlc] GitHub 把這個過程分成六個步驟。

| 步驟 | 做什麼 | 這本指南 |
|---|---|---|
| 計劃（Plan） | 寫下要做的事並跟蹤 | 第3章 |
| 製作（Create） | 寫程式碼並記錄改動 | 第4章 |
| 評審（Review） | 提出改動並收集意見 | 第6章 |
| 確認（Test） | 合併之前自動檢查 | 第5章 |
| 釋出（Deploy） | 釋出出去讓人們使用 | 第7章 |
| 運營（Operate） | 盯著它並持續改進 | 第 8·9 章 |

出處：GitHub 官方文件（這本指南的整理）[^six]

這本指南先講確認（第5章），後講評審（第6章）。這是為了在評審時能一併看到確認的結果。「運營」在 GitHub 裡的含義很寬，包括監控、依賴管理、安全，但這本指南只講到用議題（issue）來改進（第8章）和安全（第9章）。

**不需要從一開始就用到所有步驟。** GitHub 也說，很多人是從一個倉庫和幾個待辦事項開始，隨著專案成長再逐步擴充套件。[^start-small] 這本指南也是用一個小網頁，把六個步驟走一圈。

<Quiz id="ch701-sdlc" />

## AI 是怎麼工作的

Claude Code 分三個階段處理交給它的事。**收集上下文 → 採取行動 → 確認結果**。[^loop] 查詢並閱讀檔案、修改、執行測試來確認自己的工作，這些都包含在這個迴圈裡。

在第3階段用過的**計劃模式**，在這裡又變得重要了。在計劃模式下，Claude 讀取檔案後只給出計劃，在我批准之前什麼也不修改。[^plan]

官方最佳實踐文件列出了事情沒有按預期進行的典型原因。[^fail]

- **做出來的和我腦子裡想的不一樣。** 因為缺少只讀倉庫無法獲知的資訊。→ 在第3章「策劃與規格說明」裡講。
- **說做完了，其實沒做完。** 因為它沒有辦法自己確認。→ 在第5章「確認與測試」裡講。

這兩種情況，只要由人提供**資訊和確認裝置**，就能減少。所以第4階段學的不是寫程式碼的方法，而是**給 AI 什麼、要回什麼來確認**。

<Quiz id="ch701-ai" />

## 人負責的事

即使 AI 來當雙手，也有一些事必須由人負責。

| 步驟 | 人負責的事 |
|---|---|
| 計劃 | 決定做什麼、為什麼做 |
| 製作 | 閱讀計劃並批准 |
| 確認 | 看證據（命令和輸出）後做出判斷 |
| 評審 | 決定合不合並 |
| 釋出 | 判斷能不能公開，並按下按鈕 |

出處：這本指南的整理（依據在各章的腳註裡）

官方文件也寫明，對提議的程式碼和命令是否安全，**在批准之前進行檢查的責任在使用者**。[^responsible] 另外，像釋出這類會影響外部系統的行為，不能用 Claude Code 的回退（檢查點）撤銷。[^no-checkpoint] 所以越是會影響到外部的行為，越要由人來確認並按下按鈕。

<Quiz id="ch701-human" />

## 這個階段要做出什麼

第4階段的「親自試一試」，是用一個貫穿各章的例子來做。就是**把第3階段整理工具做出的會議記錄裡的待辦事項彙總展示出來的網頁**，名字叫「街角咖啡館待辦看板」。

GitHub 的官方入門系列也是一路跟著做出一個小網站，**計劃、寫程式碼、評審改動，然後釋出成真正的網站**。[^journey] 這本指南遵循同樣的順序，只是把 AI 的位置換成第3階段熟悉了的 Claude Code。

| 章 | 在待辦看板上做的事 |
|---|---|
| 2 | 在 GitHub 上建立倉庫 |
| 3 | 接受採訪，決定要展示什麼，寫出 SPEC.md |
| 4 | 拿到計劃，在分支上做出第一個介面 |
| 5 | 做一個確認裝置，檢查待辦數量對不對 |
| 6 | 建立 PR 並接受評審 |
| 7 | 用 GitHub Pages 公開 |
| 8 | 把下一步改進寫成議題，再走一圈 |
| 9 | 公開前檢查金鑰和個人資訊 |

出處：這本指南的計劃

**不需要一開始就完美。** 一章一章跟著做，到最後就會有一個帶網際網路地址的我自己的網頁。

## 整理

- SDLC 是從想法到真正運轉起來的軟體的步驟。GitHub 把它分為計劃·製作·評審·確認·釋出·運營六個步驟。
- 不需要從一開始就全用。小處著手，逐步擴充套件。
- Claude Code 按收集上下文 → 行動 → 確認結果的方式工作。失敗的常見原因是缺少資訊和缺少確認裝置。
- 決定做什麼、看證據做判斷、決定合併和釋出，是人的事。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| SDLC | 軟體開發生命週期 | 軟體從想法到運營所經歷的步驟 |
| Repository | 倉庫 | 存放專案檔案和改動記錄的地方 |
| Deploy | 釋出（部署） | 把做好的東西釋出出去讓人們使用 |
| Plan mode | 計劃模式 | 修改之前只展示計劃的 Claude Code 工作方式 |

<ChapterDone :chapter="701" />

下一章：[第2章. 建立 GitHub 倉庫](02-repository.md)

[^sdlc]: GitHub 官方文件，《What is GitHub?》。"The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github （確認日期 2026-11-01）
[^six]: GitHub 官方文件，《What is GitHub?》。"Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github （確認日期 2026-11-01）
[^start-small]: GitHub 官方文件，《What is GitHub?》。"You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github （確認日期 2026-11-01）
[^loop]: Claude Code 官方文件，《How Claude Code works》。"When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-01）
[^plan]: Claude Code 官方文件，《Common workflows》。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows （確認日期 2026-11-01）
[^fail]: Claude Code 官方文件，《Best practices for Claude Code》。"It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^responsible]: Claude Code 官方文件，《Security》。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （確認日期 2026-11-01）
[^no-checkpoint]: Claude Code 官方文件，《How Claude Code works》。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-01）
[^journey]: GitHub 官方文件，《Creating a repository for your project on GitHub》。"By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github （確認日期 2026-11-01）
