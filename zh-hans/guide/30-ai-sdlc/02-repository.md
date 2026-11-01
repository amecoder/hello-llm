# 第2章 创建 GitHub 仓库 — 给项目盖一座房子

> **一句话总结**：仓库（Repository）是存放项目文件和**所有改动记录**的地方。在 GitHub 上创建仓库，就在我的电脑之外有了一份安全的副本和协作空间。
> 公开还是私有，关系到**以后能不能免费发布到网上**，所以从创建时就要定下来。

这一章依据 2026年11月1日确认的 GitHub 官方文档编写。GitHub 的界面按英语来写。如果你在第3阶段用 Git 留存过“改动记录”，可以把这一步想成是把那份记录放到互联网上。

## Git、GitHub 与仓库

**Git** 是追踪文件改动的版本管理系统。[^git] 在第3阶段你对 Claude 说“帮我记录下来”，那个提交就是 Git 的记录。

**GitHub** 是把那个 Git 项目放到互联网上，并加上计划和协作工具的服务。[^git] 而**仓库**是把项目的代码和文件放在 GitHub 上的地方。它保管文件，每次改动都用提交来记录，并成为一起工作的空间。[^repo]

常见的词，请先了解一下。

| 词 | 含义 |
|---|---|
| 分支（branch） | 不影响基础版本、单独工作的一条支线 |
| 合并（merge） | 把一条支线的改动并入另一条支线 |
| 远程（remote） | 位于 GitHub 上，而不是我电脑上的仓库 |
| 克隆（clone） | 把仓库连同记录一起下载到我的电脑 |

出处：GitHub 官方文档（仅摘录一部分）[^terms]

<Quiz id="ch702-basics" />

## 公开与私有

创建仓库时最先要定的是**可见范围。**

| 范围 | 谁能看到 |
|---|---|
| 公开（Public） | 互联网上的任何人 |
| 私有（Private） | 我和我分享给的人 |

出处：GitHub 官方文档[^visibility]

在免费账号下，这个选择与第7章的发布相关。**免费账号只有在公开仓库里才能使用 GitHub Pages（免费的网页发布）。**[^pages-free] 所以 GitHub 的入门教程，也让人为了以后发布成真正的网站而选择 **Public**。[^tutorial-public]

公开仓库是有代价的。全部代码对所有人可见，所以有人盯上弱点或敏感信息的风险会变大。[^public-risk] 因此，**公开仓库里不要放含有个人信息·密码·真实姓名的备忘。** 第9章会详细讲。

以后也可以更改，但会有代价。在免费账号下把公开仓库改成私有，已经发布的 Pages 网站会自动下线。[^switch]

<Quiz id="ch702-visibility" />

## README·.gitignore·许可证

创建新仓库时，可以同时放进三个文件。[^options]

- **README**：访客最先看到的说明书。[^readme] 写明这是一个做什么的项目、为什么有用、怎么开始。教程让人选择 **Add README**。因为它既是起始文件，又是介绍项目的地方。[^add-readme]
- **.gitignore**：写明提交时 Git 要**忽略的文件**的清单。[^gitignore] 像装有密码的设置文件这类不能上传的东西，就写在这里。要注意一点：**已经提交过的文件，只是写进清单是不会被忽略的。**[^already] 所以最好一开始就写好。
- **许可证**：告诉别人可以用我的代码做什么。不一定非选不可，但如果没有，就适用默认的著作权法，任何人都不能复制·分发·修改后使用。[^license] 如果不好选，GitHub 推荐 choosealicense.com。GitHub 也声明，这份指引不是法律意见。[^not-lawyer]

导入已经有 Git 记录的仓库时，不要选这三项。它们会和我的文件夹冲突（合并冲突），把事情搞乱。[^conflict]

<Quiz id="ch702-files" />

## 与我的电脑连接

把 GitHub 上的仓库带到我的电脑上，叫做**克隆**（clone）。克隆下来的副本和 GitHub 上的原件**保持连接**，所以我记录的内容可以再传上去。[^clone]

带过来的方法有好几种。

| 方法 | 适合的情况 |
|---|---|
| GitHub Desktop | 像官方入门教程那样，用图形界面 |
| 拜托 Claude Code | 想像第3阶段那样用说的来交代时 |

出处：本指南的整理（GitHub Desktop 是官方教程的方法）[^clone]

可以这样拜托 Claude Code。仓库地址，用在 GitHub 上打开仓库时浏览器地址栏里显示的地址（例：`https://github.com/你的ID/cafe-todo-board`）。

```
把这个 GitHub 仓库克隆到 ~/hello-ai-연습/할일보드 文件夹：<仓库地址>
```

**也可以把已有的文件夹传上去。** 像第3阶段的 `정리도구` 那样，原本就在我电脑里的文件夹也可以传到 GitHub 上，如果是一直没用 Git 管理的文件夹，要先把它做成 Git 仓库。[^existing] 不过本指南是把**待办看板创建成新仓库。** `정리도구` 里有备忘原件，原样放到公开仓库里，还是避免为好。

<Quiz id="ch702-clone" />

## 亲手试一试

1. 在 [github.com](https://github.com) 注册或登录（免费账号就行）。
2. 点右上角 **+** → **New repository** 创建新仓库。名称是 `cafe-todo-board`，可见范围选 **Public**，选择 **Add README**。如果能同时放进 `.gitignore`，就放进去（清单按界面提示选）。
3. 在仓库界面确认能看到 README。
4. 用 GitHub Desktop 或 Claude Code，把仓库克隆到 `~/hello-ai-연습/할일보드`。以后想把改动传到 GitHub 上（推送），那个工具必须已经登录我的 GitHub 账号。第一次上传时如果弹出登录窗口，照着提示做。
5. 在 Claude Code 应用里打开克隆下来的文件夹，确认文件夹里有 README.md。

**接着做的任务**：在第3章里，我们接受 Claude 的采访，把这个仓库要做什么整理成 SPEC.md。

## 小结

- Git 是改动记录装置，GitHub 是把这份记录放在互联网上协作的地方，仓库是项目的家。
- 免费账号只有在公开仓库里才能使用 GitHub Pages。公开仓库里不要放个人信息。
- README 是说明书，.gitignore 是不上传的清单，许可证是使用许可。.gitignore 要从一开始就写好。
- 克隆下来的副本与 GitHub 保持连接。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Git | Git | 追踪文件改动的版本管理系统 |
| GitHub | GitHub | 把 Git 仓库放在互联网上协作的服务 |
| README | README | 仓库的第一份说明书 |
| .gitignore | .gitignore | Git 要忽略的文件清单 |
| Clone | 克隆 | 把仓库连同记录一起下载到我的电脑 |

<ChapterDone :chapter="702" />

下一章：[第3章. 策划与规格](03-plan-spec.md)

[^git]: GitHub 官方文档，《What is GitHub?》。"Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github（确认日期 2026-11-01）
[^repo]: GitHub 官方文档，《Creating a repository for your project on GitHub》。"It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（确认日期 2026-11-01）
[^terms]: GitHub 官方文档，《About repositories》。"Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（确认日期 2026-11-01）
[^visibility]: GitHub 官方文档，《About repositories》。"Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（确认日期 2026-11-01）
[^pages-free]: GitHub 官方文档，《What is GitHub Pages?》。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages（确认日期 2026-11-01）
[^tutorial-public]: GitHub 官方文档，《Creating a repository for your project on GitHub》。"Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（确认日期 2026-11-01）
[^public-risk]: GitHub 官方文档，《About repositories》。"Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories（确认日期 2026-11-01）
[^switch]: GitHub 官方文档，《Setting repository visibility》。"Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility（确认日期 2026-11-01）
[^options]: GitHub 官方文档，《Creating a new repository》。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository（确认日期 2026-11-01）
[^readme]: GitHub 官方文档，《About the repository README file》。"A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes（确认日期 2026-11-01）
[^add-readme]: GitHub 官方文档，《Creating a repository for your project on GitHub》。"Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github（确认日期 2026-11-01）
[^gitignore]: GitHub 官方文档，《Ignoring files》。"You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files（确认日期 2026-11-01）
[^already]: GitHub 官方文档，《Ignoring files》。"If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files（确认日期 2026-11-01）
[^license]: GitHub 官方文档，《Licensing a repository》。"A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository（确认日期 2026-11-01）
[^not-lawyer]: GitHub 官方文档，《Licensing a repository》。"We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository（确认日期 2026-11-01）
[^conflict]: GitHub 官方文档，《Creating a new repository》。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository（确认日期 2026-11-01）
[^clone]: GitHub 官方文档，《Connecting to your code locally》。"Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally（确认日期 2026-11-01）
[^existing]: GitHub 官方文档，《Adding locally hosted code to GitHub》。"If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github（确认日期 2026-11-01）
