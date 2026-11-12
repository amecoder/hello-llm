# 第6章 PR 與評審——合併之前再看一遍

<Badge type="tip" text="必讀" /> 想跟著這個階段學下去，一定要讀這一章。

> **一句話總結**：**PR**（Pull Request）是**提議**把我分支上的改動合併進 `main`。它為合併之前的討論和審查，留出了一個位置。
> 一個人做也要評審。AI 評審（`/code-review`）也可以讓它做，但**"沒有問題"不等於安全，合不合並由我來決定。**

這一章依據 2026年11月1日確認的 GitHub、Claude Code 官方文件寫成。

## 什麼是 PR

**PR** 是提議把一個分支的改動合併進另一個分支。在改動進入專案之前，它留出了一個討論和審查的位置。[^pr]

PR 畫面裡有這些標籤頁。[^tabs]

| 標籤頁 | 顯示什麼 |
|---|---|
| Conversation | 說明、評論、評審 |
| Commits | 分支變化的過程 |
| Checks | 自動測試、構建結果（第5章） |
| Files changed | 評審者針對改動內容發表意見的地方 |

來源：GitHub 官方文件（只摘錄了一部分）[^tabs]

建立 PR 時，要寫明**改了什麼、解決什麼問題**。[^describe]

以後在第8章裡會用到 **Issue**（GitHub 上用來記下待辦事項或 bug 的記錄）。如果是解決某個 Issue 的 PR，就在 PR 說明裡用 `fixes #編號` 這樣規定的詞寫上這個 Issue，把它們關聯起來。這樣 PR 合併時，那個 Issue 就會自動關閉。[^describe] 現在只要知道有這種關聯就行了。

**小的 PR 更容易評審，合併也更安全。** 在請別人評審之前，先自己檢查。讀一遍改動的內容，看有沒有不小心改動的地方，確認構建和測試是否執行過了。[^small]

也可以請 Claude Code 幫你建立 PR。官方文件建議，提交之前先審查 Claude 建立的 PR，並**請它指出有風險的地方。**[^risks]

```
用 first-board 分支建立 PR。提交之前，先指出這次改動裡可能有風險的地方。
```

<Quiz id="ch706-pr" />

## 一個人也要評審

GitHub 教程說，**即使一個人工作**，在合併之前有意識地做評審，這個習慣會讓專案保持健康，也會讓以後的協作更容易。[^alone]

評審以三種決定之一結束。[^decisions]

| 決定 | 意思 |
|---|---|
| Comment | 只留下意見 |
| Approve | 可以合併了 |
| Request changes | 合併之前必須修改 |

來源：GitHub 官方文件[^decisions]

評審的標準是第3章的 **SPEC.md**。Claude Code 官方最佳實踐文件舉例說，做完之後要這樣評審。[^against-spec]

- **對照 SPEC.md**，看所有要求是否都已實現。
- 只報告影響正確性的缺口。
- 字的樣子、起名字這類**風格問題跳過。**

為什麼要跳過風格問題？讓評審者找問題，它**總會找出點什麼。**[^always-finds] 把這些全都改一遍，就會冒出一堆多餘的累贅。只讓它看正確性，留下的就只有必須改的地方。

```
在新會話裡，把當前分支的改動對照 SPEC.md 做評審。看要求是否都已實現，每條確認標準是否都有檢查，只告訴我影響正確性的缺口。跳過風格問題。
```

<Quiz id="ch706-review" />

## 請 AI 來評審

Claude Code 裡有評審命令 `/code-review`。在工作中的會話裡輸入它，它會讀取我分支上的改動，找出正確性問題，並在對話裡告訴我。[^local] 任何方案都能用。[^plans]

比如做完第一個畫面後，只要在輸入框裡輸入 `/code-review` 就行了。不用另外加說明，它也會去看當前分支的改動。

**AI 評審有明確的侷限。**

- AI 評審可能漏掉 bug 或安全問題。**沒有發現，並不意味著沒有錯誤，也不意味著安全。**[^miss]
- 自動在 GitHub PR 上加評審的託管式評審，也不會批准或阻止 PR。**合不合並由人來決定。**[^decide]

::: details 詳細說明（點選展開）
- **用量**：評審也是在我的會話裡執行的，所以和會話的其餘部分一樣，按我的方案用量計算。[^usage]
- **桌面應用**：提交之前可以在輸入框裡輸入 `/code-review` 來獲得評審。[^desktop-review] 開啟 PR 之後，可以在會話資訊面板裡看到 PR 和自動檢查的狀態。這個功能需要安裝並登入 GitHub CLI（`gh`，用命令來操作 GitHub 的程式）。[^monitor]
- **託管式評審**：自動在 GitHub PR 上加評審的功能是給 Team、Enterprise 方案用的。個人在任何方案裡都可以用 `/code-review`。[^plans]
:::

如果你在第3階段學過"寫的人和確認的人分開"，那麼即使是同一個 Claude，也最好讓它在**新會話**裡評審。因為這樣它不會被製作時那段對話的上下文牽著走。

<Quiz id="ch706-ai-review" />

## 合併並收尾

評審完畢、確認手段也通過了，就把 PR **合併**（Merge）。GitHub flow 的最後一步是刪除分支。就算刪了分支，**PR 和提交記錄也不會被刪除**，所以不用擔心。[^delete]

以後人多了，可以設定"必須有批准才能合併"這樣的**保護規則**。[^protect] 現在一個人練習，不用管它。

<Quiz id="ch706-merge" />

## 動手試試

1. 確認 `first-board` 分支已經上傳到 GitHub（第4章）。在倉庫首頁點 **Pull requests** → **New pull request**，選 `first-board` 作為要比較的分支，然後點 **Create pull request**。[^create-pr] 在標題和說明裡寫清楚改了什麼、為什麼改。
2. 建立之前，請 Claude 指出有風險的地方。
3. 在新會話裡，對照 SPEC.md 獲得評審。只修改正確性問題。
4. 再讓 `/code-review` 評審一次，就算沒有發現，也親自瀏覽一遍 Files changed 標籤頁。
5. 確認手段通過後，合併 PR，並整理分支。

**連續任務**：第7章裡，我們會把合併好的待辦看板，用 GitHub Pages 釋出到網際網路上。

## 總結

- PR 是合併之前討論和審查的地方。做小一點，寫明改了什麼、為什麼改，並先自己審查。
- 一個人也要評審。標準是 SPEC.md，只修改正確性缺口，跳過風格。
- `/code-review` 在任何方案裡都能用。沒有發現不等於安全，合不合並由人來決定。
- 合併之後就算刪了分支，PR 和提交記錄也還在。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Pull Request(PR) | 拉取請求 | 提議合併分支改動的請求 |
| Review | 評審 | 合併之前審查改動 |
| Merge | 合併 | 把分支的改動合併進來 |
| `/code-review` | 程式碼評審 | Claude Code 的評審命令 |

<ChapterDone :chapter="706" />

下一章：[第7章. 釋出](07-deploy.md)

[^pr]: GitHub 官方文件，「About pull requests」。 "A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests （確認日期 2026-11-01）
[^tabs]: GitHub 官方文件，「About pull requests」。 "**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests （確認日期 2026-11-01）
[^describe]: GitHub 官方文件，「GitHub flow」。 "When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow （確認日期 2026-11-01）
[^small]: GitHub 官方文件，「Helping others review your changes」。 "Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes （確認日期 2026-11-01）
[^risks]: Claude Code 官方文件，「Common workflows」。 "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows （確認日期 2026-11-01）
[^alone]: GitHub 官方文件，「Reviewing your proposed changes」。 "Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes （確認日期 2026-11-01）
[^decisions]: GitHub 官方文件，「Quickstart for reviewing pull requests」。 "**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart （確認日期 2026-11-01）
[^against-spec]: 官方示例是把這次評審交給子代理（subagent，Claude 把工作單獨拆出去交給的另一個 Claude）去做，本指南改成用新會話。Claude Code 官方文件，「Best practices for Claude Code」。 "use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^always-finds]: Claude Code 官方文件，「Best practices for Claude Code」。 "A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-01）
[^local]: Claude Code 官方文件，「Review locally with /code-review」。 "Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local （確認日期 2026-11-01）
[^usage]: Claude Code 官方文件，「Review locally with /code-review」。 "The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local （確認日期 2026-11-01）
[^desktop-review]: Claude Code 官方文件，「Desktop application」。 "To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop （確認日期 2026-11-01）
[^monitor]: Claude Code 官方文件，「Desktop application」。 "After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop （確認日期 2026-11-01）
[^miss]: Claude Code 官方文件，「Code Review」。 "Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review （確認日期 2026-11-01）
[^decide]: Claude Code 官方文件，「Code Review」。 "A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review （確認日期 2026-11-01）
[^plans]: Claude Code 官方文件，「Code Review」。 "**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review （確認日期 2026-11-01）
[^delete]: GitHub 官方文件，「GitHub flow」。 "Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow （確認日期 2026-11-01）
[^protect]: 保護規則預設會禁止強制覆蓋（force push，硬把記錄覆蓋上傳）和刪除分支。GitHub 官方文件，「About protected branches」。 "By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches （確認日期 2026-11-01）
[^create-pr]: GitHub 官方文件，「Quickstart for pull requests」。 "then click **New pull request**." / "For the **compare** branch, select the branch that contains your changes." / "Click **Create pull request**." https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart （確認日期 2026-11-01）

