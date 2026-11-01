# 第5章 檢查與測試——給它檢查裝置，拿回證據

> **一句話總結**：AI 在**事情看起來做完了**的時候就會停下。如果給它一個能告訴它是不是真的做完了的**檢查裝置**，AI 就會自己轉起"修改後再檢查"的迴圈。
> 並且，不要聽"全部通過了"這句話，要拿到**證據**（執行過的命令和它的輸出，或者畫面）。

本章依據 2026 年 11 月 1 日確認過的 Claude Code 和 GitHub 官方文件寫成。在第3階段，我們養成了把結果和原始筆記對照的習慣，到了第4階段，它被自動化，名字叫"檢查裝置"。

## 為什麼需要檢查裝置

官方最佳實踐文件是這樣說的。Claude 在事情**看起來做完了**時就會停下。如果沒有東西能告訴它是不是真的做完了，"看起來做完了"就是它判斷的全部。[^looks-done] 這樣一來，最後就變成**我來當測試**，錯誤會一直留在那裡，直到我碰巧發現。[^you-test]

反過來，如果給它**能用透過/失敗來回答的東西**，Claude 就會自己把迴圈閉合。改動、執行檢查，壞了就讀輸出、修改、再執行。[^loop]

| 沒有檢查裝置 | 給了檢查裝置 |
|---|---|
| "做完了" → 我開啟看，找出錯的地方 | 檢查失敗 → Claude 修改 → 再檢查 → 透過 |

來源：本指南的整理（依據是官方文件）[^loop]

<Quiz id="ch705-why" />

## 檢查裝置的種類

檢查裝置可以是**任何 Claude 能讀到結果的東西**。官方文件舉的例子有：測試檔案、構建是否成功、語法檢查器、對比輸出的指令碼、和設計稿放在一起比較的瀏覽器畫面。[^kinds] 如果有這樣的裝置，文件甚至說，CLAUDE.md 裡**最有用的一行就是執行它的命令**。[^claude-md]

最簡單的方法是**寫在請求裡**。不需要任何設定，今天就能用。[^in-prompt]

```
修改待辦看板之後，請逐條檢查 SPEC.md 裡的檢查標準，一直做到全部透過為止。
```

在桌面應用裡，Claude 可以啟動開發伺服器，並在應用裡的**瀏覽器視窗**裡開啟，確認自己的改動。預設每次編輯後都會自動檢查。[^browser] 對作為網頁的待辦看板來說，這是很合適的裝置。

請它做測試時，要**具體說明要檢查什麼行為**。[^specific-test]

| 不太好的請求 | 更好的請求 |
|---|---|
| 做個測試 | 做一個測試，檢查會議紀要裡的 5 件待辦是否都顯示在螢幕上，期限是否是日期格式 |

來源：本指南的例子（要點來自官方文件）[^specific-test]

<Quiz id="ch705-kinds" />

## 拿到證據

不管用什麼裝置，都要它給**證據**。就是執行過的命令和它的輸出，或者畫面。[^evidence] 光是"全部通過了"這句話，幾乎得不到任何資訊，讀輸出比自己重新跑一遍更快。[^evidence]

```
把剛才執行的檢查命令和它的輸出原樣給我看。也告訴我通過幾個、失敗幾個。
```

**也要確認檢查是不是真的在檢查。** 故意弄錯的時候不會失敗的檢查，不是裝置而是擺設。比如，刪掉一件待辦再執行，看檢查會不會失敗。

<Quiz id="ch705-evidence" />

## 每次上傳時自動檢查——GitHub Actions

可以讓檢查不必每次都由人來下令。**GitHub Actions** 是 GitHub 上自動執行構建、測試、釋出的功能。可以讓它在每次上傳改動時執行測試。[^actions]

- 要做什麼，由放在倉庫 `.github/workflows` 資料夾裡的 YAML 檔案（設定檔案）決定。[^yaml]
- 經常提交、經常檢查的習慣叫做**持續整合**（CI）。它能幫你更早發現錯誤。[^ci]
- GitHub 會把檢查結果顯示在第6章的 PR 介面裡。可以馬上看到我分支裡的改動有沒有引入錯誤。[^ci]
- 在**公開倉庫**裡，可以免費使用 GitHub 提供的標準執行器。[^free]

設定檔案讓 Claude 幫你做就行。不過一開始，只用上面的"寫在請求裡"和瀏覽器檢查就足夠了。**不需要一開始就配齊所有自動化。**

<Quiz id="ch705-actions" />

## 親手試一試

1. 在第4章的 `first-board` 分支上，讓它做一個檢查 SPEC.md 裡檢查標準的裝置。
2. 執行檢查，並要它把執行的命令和輸出原樣給你看。
3. 故意刪掉一件待辦再執行一次，看檢查會不會失敗。確認之後再恢復。
4. 在應用的瀏覽器窗口裡開啟待辦看板，親自數一數待辦的數量。
5. 把檢查命令用一行寫進 CLAUDE.md。

**連續任務**：第6章會把到目前為止的改動以 PR 的方式提交，並接受審查。

## 小結

- AI 看起來做完了就會停下。給它一個用透過/失敗來回答的檢查裝置，它就會自己修改並再次檢查。
- 檢查裝置可以是測試、構建、對比指令碼、瀏覽器畫面等任何 Claude 能讀到結果的東西。
- 不要聽"全部通過了"，而要拿到命令和輸出這樣的證據。也要看故意弄錯時檢查會不會失敗。
- GitHub Actions 會在每次上傳時自動檢查。在公開倉庫裡，標準執行器是免費的。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Test | 測試 | 自動檢查結果是否符合預期的檢驗 |
| CI | 持續整合 | 經常合併、經常自動檢查的習慣 |
| GitHub Actions | GitHub Actions（自動化工作流） | 每次上傳時自動執行預先設定的任務的功能 |
| YAML | YAML（配置檔案格式） | 用於自動任務設定的文字格式 |

<ChapterDone :chapter="705" />

下一章：[第6章. PR 與審查](06-review.md)

[^looks-done]: Claude Code 官方文件，「Best practices for Claude Code」. "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^you-test]: Claude Code 官方文件，「Best practices for Claude Code」. "In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^loop]: Claude Code 官方文件，「Best practices for Claude Code」. "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^kinds]: Claude Code 官方文件，「Best practices for Claude Code」. "The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^claude-md]: Claude Code 官方文件，「Best practices for Claude Code」. "If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^in-prompt]: Claude Code 官方文件，「Best practices for Claude Code」. "In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^browser]: Claude Code 官方文件，「Desktop application」. "Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (確認日期 2026-11-01)
[^specific-test]: Claude Code 官方文件，「Common workflows」. "When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (確認日期 2026-11-01)
[^evidence]: Claude Code 官方文件，「Best practices for Claude Code」. "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (確認日期 2026-11-01)
[^actions]: GitHub 官方文件，「Quickstart for GitHub Actions」. "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (確認日期 2026-11-01)
[^yaml]: GitHub 官方文件，「Understanding GitHub Actions」. "Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (確認日期 2026-11-01)
[^ci]: GitHub 官方文件，「Continuous integration」. "Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (確認日期 2026-11-01)
[^free]: GitHub 官方文件，「Billing and usage」. "GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (確認日期 2026-11-01)
