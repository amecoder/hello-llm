# 第8章 運營與改進——用 Issue 轉下一圈

> **一句話總結**：公開之後想到的改進點和 bug，寫成 **Issue**（議題）記下來。一個 Issue 就是下一圈的策劃。
> 在 PR 裡寫上 `fixes #編號` 這樣固定的詞，合併 PR 時那個 Issue 就會**自動關閉。** 策劃和運營就這樣連起來了。

本章依據 2026 年 11 月 1 日確認過的 GitHub 官方文件寫成。GitHub 介面按英語寫。

## Issue 是什麼

**Issue** 是用來計劃、討論和跟蹤工作的記錄。[^issue] bug 報告、新功能、想法，凡是需要記下來或討論的東西，都可以放進去。這和第3階段在會議紀要裡寫"下次要討論的事"有點像。

Issue 和 PR 是連在一起的。在 Issue 或 PR 裡提到另一個 Issue，兩者就會互相關聯；在 PR 裡寫上 `fixes` 這樣固定的詞，**相關的 Issue 就會自動關閉。**[^close]

```
fixes #Issue編號
```

Issue 編號像 `#2` 這樣，附在 Issue 標題旁邊。如果你在第6章已經建過一個 PR，第一個 Issue 就可能不是 1 號，所以一定要在介面上確認。

GitHub 的入門教程也是在計劃階段建第一個 Issue。標題寫要做的功能，說明裡寫幾行想做的東西。[^first-issue]

<Quiz id="ch708-issue" />

## 用標籤和看板整理

Issue 多了之後，用**標籤**來分類。新倉庫裡自帶預設標籤。[^labels]

| 標籤 | 含義 |
|---|---|
| bug | 意料之外的問題 |
| enhancement | 新功能請求 |
| documentation | 改進文件 |

來源：GitHub 官方文件（只摘錄了一部分）[^labels]

**專案**（Projects）是與 Issue、PR 相連的表格、看板、路線圖。[^projects] 教程裡的看板，用列表示工作的階段。按待辦（Todo）→ 進行中（In Progress）→ 完成（Done）移動，來檢視進度。[^board]

**不需要一開始就全都用上。** 正如第1章裡看到的，很多人是從一個倉庫和幾個 Issue 開始的。等 Issue 多到一眼看不過來了，再用標籤和看板也不遲。

<Quiz id="ch708-labels" />

## 再轉一圈

一圈結束後，把下一個功能建成**新的 Issue**，開始時把它移到進行中，就開始了下一個迴圈。[^next-cycle] 把第4階段學過的流程，用一個 Issue 再走一遍，就是這樣。

1. **計劃**：在 Issue 裡寫要改什麼。需要的話，在 SPEC.md 裡再加一行檢查標準（第3章）。
2. **製作**：在新分支上用計劃模式拿到計劃再製作（第4章）。
3. **檢查**：執行檢查裝置並拿到證據。**原有的檢查也必須全部透過**（第5章）。
4. **審查**：在 PR 裡寫上 `fixes #編號`，接受審查（第6章）。
5. **釋出**：合併之後，會重新發布到 Pages（第7章）。

也可以直接把 Issue 交給 Claude Code。

```
讀一下 GitHub Issue #<Issue 編號> 的內容，在 SPEC.md 裡再加一行檢查標準，然後先做計劃。還不要修改檔案。
```

如果 Claude 說讀不到 Issue，就把 Issue 的標題和內容複製，貼上到請求裡。這個方法最可靠。

<Quiz id="ch708-cycle" />

## 釋出版本以後再說

**釋出版本**（Release）是為了讓更多人下載使用而打包的釋出單位。[^release] 對需要下載安裝的程式很重要，但對只有一個網頁的待辦看板來說並不是必須的。知道有這樣的東西就行。

## 親手試一試

1. 在 `cafe-todo-board` 倉庫首頁點 **Issues** → **New issue**，建一個新 Issue。[^new-issue] 標題是"把過期的待辦標成紅色"，標籤是 `enhancement`。
2. 把 Issue 內容交給 Claude Code，在 SPEC.md 裡再加一行檢查標準，然後先拿到計劃。
3. 在新分支上製作，並透過檢查裝置，拿到新標準和原有標準都透過的證據。
4. 確認 Issue 標題旁邊的編號，在 PR 說明裡寫上 `fixes #Issue編號`。審查之後合併。
5. 確認 Issue 是不是自動關閉了，Pages 上是不是出現了改動後的畫面。

**連續任務**：第9章會整理怎樣保證公開倉庫裡不混入秘密值和個人資訊。

## 小結

- Issue 是計劃、討論、跟蹤的記錄。把改進點和 bug 寫成 Issue，開始下一圈。
- 在 PR 裡寫 `fixes #Issue編號`，合併時 Issue 會自動關閉。編號要在介面上確認。
- Issue 多了之後用標籤（bug·enhancement·documentation）和看板（Todo → In Progress → Done）。
- 下一圈也是計劃 → 製作 → 檢查 → 審查 → 釋出。原有的檢查也必須繼續透過。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Issue | 議題 | 記錄並跟蹤待辦、bug、想法的記錄 |
| Label | 標籤 | 給 Issue 和 PR 分類的標記 |
| Project | 專案 | 與 Issue、PR 相連的表格、看板、路線圖 |
| Release | 釋出版本 | 為了方便下載使用而打包的釋出單位 |

<ChapterDone :chapter="708" />

下一章：[第9章. 安全與責任](09-safety.md)

[^issue]: GitHub 官方文件，「About issues」. "You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (確認日期 2026-11-01)
[^close]: GitHub 官方文件，「About issues」. "Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (確認日期 2026-11-01)
[^first-issue]: GitHub 官方文件，「Planning your work」. "In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (確認日期 2026-11-01)
[^labels]: GitHub 官方文件，「Managing labels」. "GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels (確認日期 2026-11-01)
[^projects]: GitHub 官方文件，「About Projects」. "A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects (確認日期 2026-11-01)
[^board]: GitHub 官方文件，「Planning your work」. "The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (確認日期 2026-11-01)
[^next-cycle]: GitHub 官方文件，「Reviewing your proposed changes」. "If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (確認日期 2026-11-01)
[^release]: GitHub 官方文件，「About releases」. "Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases (確認日期 2026-11-01)
[^new-issue]: GitHub 官方文件，「Planning your work」. "On the main page of your `stargazers-log` repository, click **Issues**." / "Click **New issue**." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (確認日期 2026-11-01)
