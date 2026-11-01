# 第2章 建立 GitHub 倉庫 — 給專案蓋一座房子

> **一句話總結**：倉庫（Repository）是存放專案檔案和**所有改動記錄**的地方。在 GitHub 上建立倉庫，就在我的電腦之外有了一份安全的副本和協作空間。
> 公開還是私有，關係到**以後能不能免費釋出到網上**，所以從建立時就要定下來。

這一章依據 2026年11月1日確認的 GitHub 官方文件編寫。GitHub 的介面按英語來寫。如果你在第3階段用 Git 留存過“改動記錄”，可以把這一步想成是把那份記錄放到網際網路上。

## Git、GitHub 與倉庫

**Git** 是追蹤檔案改動的版本管理系統。[^git] 在第3階段你對 Claude 說“幫我記錄下來”，那個提交就是 Git 的記錄。

**GitHub** 是把那個 Git 專案放到網際網路上，並加上計劃和協作工具的服務。[^git] 而**倉庫**是把專案的程式碼和檔案放在 GitHub 上的地方。它保管檔案，每次改動都用提交來記錄，併成為一起工作的空間。[^repo]

常見的詞，請先了解一下。

| 詞 | 含義 |
|---|---|
| 分支（branch） | 不影響基礎版本、單獨工作的一條支線 |
| 合併（merge） | 把一條支線的改動併入另一條支線 |
| 遠端（remote） | 位於 GitHub 上，而不是我電腦上的倉庫 |
| 克隆（clone） | 把倉庫連同記錄一起下載到我的電腦 |

出處：GitHub 官方文件（僅摘錄一部分）[^terms]

<Quiz id="ch702-basics" />

## 公開與私有

建立倉庫時最先要定的是**可見範圍。**

| 範圍 | 誰能看到 |
|---|---|
| 公開（Public） | 網際網路上的任何人 |
| 私有（Private） | 我和我分享給的人 |

出處：GitHub 官方文件[^visibility]

在免費賬號下，這個選擇與第7章的釋出相關。**免費賬號只有在公開倉庫裡才能使用 GitHub Pages（免費的網頁釋出）。**[^pages-free] 所以 GitHub 的入門教程，也讓人為了以後釋出成真正的網站而選擇 **Public**。[^tutorial-public]

公開倉庫是有代價的。全部程式碼對所有人可見，所以有人盯上弱點或敏感資訊的風險會變大。[^public-risk] 因此，**公開倉庫裡不要放含有個人資訊·密碼·真實姓名的備忘。** 第9章會詳細講。

以後也可以更改，但會有代價。在免費賬號下把公開倉庫改成私有，已經發布的 Pages 網站會自動下線。[^switch]

<Quiz id="ch702-visibility" />

## README·.gitignore·許可證

建立新倉庫時，可以同時放進三個檔案。[^options]

- **README**：訪客最先看到的說明書。[^readme] 寫明這是一個做什麼的專案、為什麼有用、怎麼開始。教程讓人選擇 **Add README**。因為它既是起始檔案，又是介紹專案的地方。[^add-readme]
- **.gitignore**：寫明提交時 Git 要**忽略的檔案**的清單。[^gitignore] 像裝有密碼的設定檔案這類不能上傳的東西，就寫在這裡。要注意一點：**已經提交過的檔案，只是寫進清單是不會被忽略的。**[^already] 所以最好一開始就寫好。
- **許可證**：告訴別人可以用我的程式碼做什麼。不一定非選不可，但如果沒有，就適用預設的著作權法，任何人都不能複製·分發·修改後使用。[^license] 如果不好選，GitHub 推薦 choosealicense.com。GitHub 也宣告，這份指引不是法律意見。[^not-lawyer]

匯入已經有 Git 記錄的倉庫時，不要選這三項。它們會和我的資料夾衝突（合併衝突），把事情搞亂。[^conflict]

<Quiz id="ch702-files" />

## 與我的電腦連線

把 GitHub 上的倉庫帶到我的電腦上，叫做**克隆**（clone）。克隆下來的副本和 GitHub 上的原件**保持連線**，所以我記錄的內容可以再傳上去。[^clone]

帶過來的方法有好幾種。

| 方法 | 適合的情況 |
|---|---|
| GitHub Desktop | 像官方入門教程那樣，用圖形介面 |
| 拜託 Claude Code | 想像第3階段那樣用說的來交代時 |

出處：本指南的整理（GitHub Desktop 是官方教程的方法）[^clone]

可以這樣拜託 Claude Code。倉庫地址，用在 GitHub 上開啟倉庫時瀏覽器位址列裡顯示的地址（例：`https://github.com/你的ID/cafe-todo-board`）。

```
把這個 GitHub 倉庫克隆到 ~/hello-ai-연습/할일보드 資料夾：<倉庫地址>
```

**也可以把已有的資料夾傳上去。** 像第3階段的 `정리도구` 那樣，原本就在我電腦裡的資料夾也可以傳到 GitHub 上，如果是一直沒用 Git 管理的資料夾，要先把它做成 Git 倉庫。[^existing] 不過本指南是把**待辦看板建立成新倉庫。** `정리도구` 裡有備忘原件，原樣放到公開倉庫裡，還是避免為好。

<Quiz id="ch702-clone" />

## 親手試一試

1. 在 [github.com](https://github.com) 註冊或登入（免費賬號就行）。
2. 點右上角 **+** → **New repository** 建立新倉庫。名稱是 `cafe-todo-board`，可見範圍選 **Public**，選擇 **Add README**。如果能同時放進 `.gitignore`，就放進去（清單按介面提示選）。
3. 在倉庫介面確認能看到 README。
4. 用 GitHub Desktop 或 Claude Code，把倉庫克隆到 `~/hello-ai-연습/할일보드`。以後想把改動傳到 GitHub 上（推送），那個工具必須已經登入我的 GitHub 賬號。第一次上傳時如果彈出登入視窗，照著提示做。
5. 在 Claude Code 應用裡開啟克隆下來的資料夾，確認資料夾裡有 README.md。

**連續任務**：在第3章裡，我們接受 Claude 的採訪，把這個倉庫要做什麼整理成 SPEC.md。

## 小結

- Git 是改動記錄裝置，GitHub 是把這份記錄放在網際網路上協作的地方，倉庫是專案的家。
- 免費賬號只有在公開倉庫裡才能使用 GitHub Pages。公開倉庫裡不要放個人資訊。
- README 是說明書，.gitignore 是不上傳的清單，許可證是使用許可。.gitignore 要從一開始就寫好。
- 克隆下來的副本與 GitHub 保持連線。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Git | Git | 追蹤檔案改動的版本管理系統 |
| GitHub | GitHub | 把 Git 倉庫放在網際網路上協作的服務 |
| README | README | 倉庫的第一份說明書 |
| .gitignore | .gitignore | Git 要忽略的檔案清單 |
| Clone | 克隆 | 把倉庫連同記錄一起下載到我的電腦 |

<ChapterDone :chapter="702" />

下一章：[第3章. 策劃與規格](03-plan-spec.md)

[^git]: GitHub 官方文件，《What is GitHub?》。"Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github（確認日期 2026-11-01）
[^repo]: GitHub 官方文件，《Creating a repository for your project on GitHub》。"It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（確認日期 2026-11-01）
[^terms]: GitHub 官方文件，《About repositories》。"Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（確認日期 2026-11-01）
[^visibility]: GitHub 官方文件，《About repositories》。"Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（確認日期 2026-11-01）
[^pages-free]: GitHub 官方文件，《What is GitHub Pages?》。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages（確認日期 2026-11-01）
[^tutorial-public]: GitHub 官方文件，《Creating a repository for your project on GitHub》。"Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（確認日期 2026-11-01）
[^public-risk]: GitHub 官方文件，《About repositories》。"Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（確認日期 2026-11-01）
[^switch]: GitHub 官方文件，《Setting repository visibility》。"Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility（確認日期 2026-11-01）
[^options]: GitHub 官方文件，《Creating a new repository》。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository（確認日期 2026-11-01）
[^readme]: GitHub 官方文件，《About the repository README file》。"A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes（確認日期 2026-11-01）
[^add-readme]: GitHub 官方文件，《Creating a repository for your project on GitHub》。"Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（確認日期 2026-11-01）
[^gitignore]: GitHub 官方文件，《Ignoring files》。"You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files（確認日期 2026-11-01）
[^already]: GitHub 官方文件，《Ignoring files》。"If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files（確認日期 2026-11-01）
[^license]: GitHub 官方文件，《Licensing a repository》。"A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository（確認日期 2026-11-01）
[^not-lawyer]: GitHub 官方文件，《Licensing a repository》。"We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository（確認日期 2026-11-01）
[^conflict]: GitHub 官方文件，《Creating a new repository》。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository（確認日期 2026-11-01）
[^clone]: GitHub 官方文件，《Connecting to your code locally》。"Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally（確認日期 2026-11-01）
[^existing]: GitHub 官方文件，《Adding locally hosted code to GitHub》。"If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github（確認日期 2026-11-01）
