# 第4章 動手做——先要計劃，再建分支、提交

> **一句話總結**：開一個新會話，把 SPEC.md 交給它，用**計劃模式**先拿到計劃。批准之後，在叫**分支**的獨立空間裡動手做，每做一個小改動就用**提交**記一筆。
> 這就是 GitHub flow。它不只適合開發者，是一套對誰都有用的輕量工作流程。

本章依據 2026年11月1日確認的 Claude Code、GitHub 官方文件寫成。計劃模式和提交，你在 [Claude Code 第4、5章](../20-claude-code/05-delegate-well.md)裡已經用過。本章把它們和分支串起來，整理成「安全地做東西的流程」。

## 先拿到計劃

SPEC.md 有了之後，開一個新會話，切換到**計劃模式**。在桌面應用裡，像 [Claude Code 第5章](../20-claude-code/05-delegate-well.md)那樣，把輸入框下面的模式切換成「計劃（계획）」。在計劃模式下，Claude 會讀檔案、只給出計劃，在我批准之前不會改任何東西。[^plan]

```
讀一下 SPEC.md，按這份說明書制定一個做待辦看板的計劃。先不要建立檔案。
```

拿到計劃後，請這樣問一問。

- SPEC.md 的每一行，分別對應計劃裡的哪一步？
- 每一步的大小，是一次就能確認完的嗎？
- 裡面有沒有我不認識的新工具，或需要安裝的東西？

不滿意的話，批准之前就讓它改。在計劃階段修改，成本最低。

<Quiz id="ch704-plan" />

## 在分支上動手做

**分支**讓你在獨立的空間裡做出新功能。在準備好之前，基本版本（`main`）不會變。[^branch] 就算搞砸了，`main` 也安然無恙，所以你可以放心地嘗試。

GitHub 的入門教程把做東西的過程概括為：**建立工作空間 → 修改並儲存 → 提出來請人審閱**，所用的工具就是分支、提交、PR（第6章）。[^core]

分支名要起得**簡短，並且看得出意思**。[^name] 如果做的是待辦看板的第一個頁面，叫 `first-board` 就夠了。

```
建立 first-board 分支，按已批准的計劃做出第一個頁面。不需要構建，只用最外層資料夾裡的一個 index.html 就能開啟。
```

只用一個 `index.html` 來做，是因為第7章的 GitHub Pages 會在要釋出的資料夾最外層尋找 `index.html`。

<Quiz id="ch704-branch" />

## 小步提交

**提交**把改動像拍照一樣存下那一刻的樣子，**推送**則把這張照片送到 GitHub 倉庫。[^commit]

一個提交最好只裝**一個獨立且完整的改動**。這樣，想換一種做法時，只回退那一部分就行了。[^atomic] 互不相關的改動，也要分別建分支。[^atomic]

| 不太好的提交 | 更好的提交 |
|---|---|
| 把一天的工作一次提交，寫成"工作" | "增加讀取待辦表"、"給過期待辦標上顏色" |

出處：本指南的示例（原則來自 GitHub 官方文件）[^atomic]

就像你在第3階段學到的，在交給它做之前和之後都留下記錄，這個習慣在這裡同樣適用。

<Quiz id="ch704-commit" />

## 閱讀 AI 做出來的東西

AI 做出來的結果，要**讀過之後**再接受。GitHub 的教程也說，要先檢查 AI 生成的內容，再按示例修改。[^review-ai]

在 Claude Code 桌面應用裡，你可以在檢視改動內容（diff）中按檔案檢查改動。點選行旁邊的 **+** 寫下意見，Claude 會讀到並修改。[^diff]

不用把程式碼全部看懂也沒關係。請這樣問。

```
對剛才改過的每個檔案，用一行說明改了什麼、為什麼改。再告訴我它對應 SPEC.md 的哪一行。
```

如果有的改動說不出和 SPEC.md 的關聯，它可能做了你沒要求的事。請追問那一部分。

<Quiz id="ch704-read" />

## 親自動手試試

1. 在待辦看板資料夾裡開一個**新會話**，切換到計劃模式。
2. 傳送上面的計劃請求，用三個問題檢查計劃，然後批准。
3. 讓它在 `first-board` 分支上做出第一個頁面。待辦資料用第3階段會議記錄裡的待辦表。
4. 用檢視改動內容的功能確認檔案，並請它解釋改動。
5. 讓它按小單位提交。
6. 請 Claude "把 `first-board` 分支上傳（推送）到 GitHub"。在 GitHub 倉庫頁面裡能看到這個分支就行。

**連續任務**：第5章要做一個裝置，讓 Claude 自己確認"待辦事項有沒有一個遺漏地顯示出來？"

## 小結

- 開新會話，交上 SPEC.md，用計劃模式先拿到計劃。修改在計劃階段成本最低。
- 分支是不碰 `main` 的工作空間。名字要簡短、看得出意思。
- 一個提交只裝一個完整的改動。不相關的改動要分開建分支。
- AI 做出來的東西，讀過再接受。每個改動都要問它對應 SPEC.md 的哪一行。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Branch | 分支 | 不動基本版本、單獨工作的一條岔路 |
| Commit | 提交 | 像拍照一樣記錄下改動 |
| Push | 推送 | 把我的記錄送到 GitHub 倉庫 |
| GitHub flow | GitHub 工作流 | 分支 → 修改 → PR → 審閱 → 合併的工作流程 |

<ChapterDone :chapter="704" />

下一章：[第5章. 檢查與測試](05-test.md)

[^plan]: Claude Code 官方文件，「Common workflows」。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows （確認日期 2026-11-01）
[^branch]: GitHub 官方文件，「Writing and storing your code」。"A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （確認日期 2026-11-01）
[^core]: GitHub 官方文件，「Writing and storing your code」。"Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （確認日期 2026-11-01）
[^name]: GitHub 官方文件，「GitHub flow」。"A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow （確認日期 2026-11-01）
[^commit]: GitHub 官方文件，「Writing and storing your code」。"Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （確認日期 2026-11-01）
[^atomic]: GitHub 官方文件，「GitHub flow」。"Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow （確認日期 2026-11-01）
[^review-ai]: GitHub 官方文件，「Writing and storing your code」。"Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （確認日期 2026-11-01）
[^diff]: Claude Code 官方文件，「Desktop application」。"After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop （確認日期 2026-11-01）
