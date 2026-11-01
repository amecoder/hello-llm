# 第7章 部署——用 GitHub Pages 公開

> **一句話總結**：**GitHub Pages** 是一項免費服務，能把倉庫裡的網頁檔案原樣放到網際網路上，變成一個網站。免費賬號必須是**公開倉庫**才能用。
> 部署是會影響外部世界的行為，所以**用 Claude Code 的回退也無法撤銷。** 能不能公開，要由人來確認再點按鈕。

本章依據 2026年11月1日確認的 GitHub、Claude Code 官方文件寫成。GitHub 介面以英文版為準來寫。

## GitHub Pages 是什麼

GitHub Pages 是一項靜態網站託管服務：它接收倉庫裡的 HTML、CSS、JavaScript 檔案，必要時先經過構建，再**釋出成網站**。[^pages] 靜態網站不需要根據每位訪客變換內容的伺服器，只是把固定的檔案原樣展示出來。像待辦看板這樣展示表格的頁面，很適合用它。

就像第2章看到的，**免費賬號只能在公開倉庫裡**使用 Pages。[^free] 而且 Pages 網站**會向網際網路公開。** 即使套餐允許、倉庫設成了私有，網站依然是公開的，所以敏感資料要在釋出前刪掉。[^public-site]

<Quiz id="ch707-pages" />

## 釋出的兩種方法

| 方法 | 什麼時候用 |
|---|---|
| 從分支釋出 | 不需要另外調整構建過程時（推薦） |
| 用 GitHub Actions 釋出 | 想自己決定構建過程時 |

出處：GitHub 官方文件（只摘錄了一部分）[^two-ways]

像待辦看板這樣直接展示檔案的頁面，**從分支釋出**就夠了。官方文件也建議，不需要調整構建過程時用這個方法。[^two-ways] 選好分支和資料夾（倉庫最外層 `/` 或 `/docs`）之後，每次往那個分支上傳，那個資料夾裡的內容就會被髮布。[^branch-source]

GitHub 的入門教程用的是 Actions 方法。在設定的 Pages 裡把 **Source** 改成 **GitHub Actions**，再放進部署設定檔案，之後每次上傳到 `main`，網站就會重新部署。[^actions-deploy] 網址的樣子是 `https://我的ID.github.io/倉庫名/`。

<Quiz id="ch707-ways" />

## 限額與禁止事項

雖然免費，但有不能用的場合，也有限額。

| 類別 | 內容 |
|---|---|
| 禁止 | 經營商業、網店、商業服務（SaaS） |
| 不要用於 | 傳輸密碼、銀行卡號的頁面 |
| 大小 | 已釋出的網站不超過 1GB |
| 時間 | 部署超過10分鐘就失敗 |
| 頻寬 | 每月 100GB（寬鬆的限額） |

出處：GitHub 官方文件（只摘錄了一部分）[^business][^sensitive][^size][^timeout][^bandwidth]

**訪客的 IP 地址會被記錄。** 只要有人訪問 Pages 網站，無論是否登入，出於安全目的，訪客的 IP 地址都會被記錄並儲存。[^ip] 如果你想在自己的頁面上寫"我們什麼都不收集"，請把這一點也一併寫上。

**模模擬實服務做的練習網站**有條件。為了學習而照著做本身不被禁止，但程式碼必須自己寫，不能收集使用者資料，並且要掛上**醒目的宣告**，說明這是與原網站無關的教學用途。[^clone-site]

<Quiz id="ch707-limits" />

## 部署無法用回退撤銷

你在第3階段學到的 Claude Code 回退（檢查點），是**會話內部的快速恢復工具**。永久的記錄由 Git 負責。[^checkpoint] 而像資料庫、外部服務、**部署**這樣會影響外部系統的行為，檢查點是撤銷不了的。[^remote]

所以部署之前，要由人來確認。官方文件也寫明，檢查建議的命令是否安全、**批准之前要先審閱，這是使用者的責任**。[^responsible]

部署前，請問問自己這些問題。

- 第5章的檢查環節通過了嗎？
- 第6章的審閱做完、PR 合併了嗎？
- 公開倉庫和頁面裡，沒有真實姓名、聯絡方式、密碼吧？（第9章）

如果傳上去的是敏感內容，光是撤回還不夠。因為它會留在公開倉庫的 Git 記錄裡。請按[第9章](09-safety.md)的順序（先作廢、更換）來處理。

<Quiz id="ch707-undo" />

## 親自動手試試

1. 先用[第9章的公開前檢查表](09-safety.md)確認金鑰和個人資訊。
2. 在 GitHub 上開啟 `cafe-todo-board` 倉庫的 **Settings → Pages**。
3. 在「Build and deployment」的 **Source** 裡選 **Deploy from a branch**，在 **Branch** 裡選 `main` 分支和 `/`（最外層）資料夾。[^quickstart]
4. 確認倉庫最外層有 `index.html`。GitHub Pages 會在釋出資料夾的最外層尋找這個檔案。[^entry] 然後開啟 `https://我的ID.github.io/cafe-todo-board/`。上傳之後，最長可能要10分鐘左右才會生效。[^quickstart] 看到待辦看板就成功了。
5. 也用手機開啟看看。
6. 想一想，要不要在頁面下方加上這樣的宣告："這是為練習做的頁面，不收集訪問資訊（GitHub Pages 出於安全目的會記錄訪客 IP）"。

**連續任務**：第8章要把"過期的待辦標成紅色"這樣的改進寫成議題，再多走一圈。

## 小結

- GitHub Pages 把倉庫裡的網頁檔案釋出成網站。免費賬號只能用公開倉庫，網站總是公開的。
- 不需要調整構建時，就從分支釋出。
- 不要用於經營商業、網店、輸入密碼。網站 1GB，部署 10分鐘，頻寬每月 100GB（寬鬆的限額）。訪客 IP 會被記錄。
- 部署無法用回退撤銷。確認、審閱、公開前檢查都做完，再由人來點。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| GitHub Pages | GitHub Pages | 把倉庫檔案釋出成免費網站的服務 |
| Static site | 靜態網站 | 把固定的檔案原樣展示出來的網站 |
| Hosting | 託管 | 把網站放在網際網路上 |
| Bandwidth | 頻寬 | 傳送給訪客的資料量 |

<ChapterDone :chapter="707" />

下一章：[第8章. 運營與改進](08-operate.md)

[^pages]: GitHub 官方文件，「What is GitHub Pages?」。"GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （確認日期 2026-11-01）
[^free]: GitHub 官方文件，「What is GitHub Pages?」。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （確認日期 2026-11-01）
[^public-site]: GitHub 官方文件，「Configuring a publishing source for your GitHub Pages site」。"GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （確認日期 2026-11-01）
[^two-ways]: GitHub 官方文件，「Configuring a publishing source for your GitHub Pages site」。"You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （確認日期 2026-11-01）
[^branch-source]: GitHub 官方文件，「Configuring a publishing source for your GitHub Pages site」。"Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site （確認日期 2026-11-01）
[^actions-deploy]: GitHub 官方文件，「Deploying your website automatically」。"Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically （確認日期 2026-11-01）
[^business]: GitHub 官方文件，「GitHub Pages limits」。"GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^sensitive]: GitHub 官方文件，「GitHub Pages limits」。"GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^size]: GitHub 官方文件，「GitHub Pages limits」。"Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^timeout]: GitHub 官方文件，「GitHub Pages limits」。"GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^bandwidth]: GitHub 官方文件，「GitHub Pages limits」。"GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^ip]: GitHub 官方文件，「What is GitHub Pages?」。"When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages （確認日期 2026-11-01）
[^clone-site]: GitHub 官方文件，「GitHub Pages limits」。"Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits （確認日期 2026-11-01）
[^checkpoint]: Claude Code 官方文件，「Checkpointing」。"Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing （確認日期 2026-11-01）
[^remote]: Claude Code 官方文件，「How Claude Code works」。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-01）
[^responsible]: Claude Code 官方文件，「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security （確認日期 2026-11-01）
[^quickstart]: GitHub 官方文件，「Quickstart for GitHub Pages」。"Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart （確認日期 2026-11-01）
[^entry]: GitHub 官方文件，「Creating a GitHub Pages site」。"GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site （確認日期 2026-11-01）
