# 第4章 动手做——先要计划，再建分支、提交

> **一句话总结**：开一个新会话，把 SPEC.md 交给它，用**计划模式**先拿到计划。批准之后，在叫**分支**的独立空间里动手做，每做一个小改动就用**提交**记一笔。
> 这就是 GitHub flow。它不只适合开发者，是一套对谁都有用的轻量工作流程。

本章依据 2026年11月1日确认的 Claude Code、GitHub 官方文档写成。计划模式和提交，你在 [Claude Code 第4、5章](../20-claude-code/05-delegate-well.md)里已经用过。本章把它们和分支串起来，整理成「安全地做东西的流程」。

## 先拿到计划

SPEC.md 有了之后，开一个新会话，切换到**计划模式**。在桌面应用里，像 [Claude Code 第5章](../20-claude-code/05-delegate-well.md)那样，把输入框下面的模式切换成「计划（계획）」。在计划模式下，Claude 会读文件、只给出计划，在我批准之前不会改任何东西。[^plan]

```
读一下 SPEC.md，按这份说明书制定一个做待办看板的计划。先不要创建文件。
```

拿到计划后，请这样问一问。

- SPEC.md 的每一行，分别对应计划里的哪一步？
- 每一步的大小，是一次就能确认完的吗？
- 里面有没有我不认识的新工具，或需要安装的东西？

不满意的话，批准之前就让它改。在计划阶段修改，成本最低。

<Quiz id="ch704-plan" />

## 在分支上动手做

**分支**让你在独立的空间里做出新功能。在准备好之前，基本版本（`main`）不会变。[^branch] 就算搞砸了，`main` 也安然无恙，所以你可以放心地尝试。

GitHub 的入门教程把做东西的过程概括为：**建立工作空间 → 修改并保存 → 提出来请人审阅**，所用的工具就是分支、提交、PR（第6章）。[^core]

分支名要起得**简短，并且看得出意思**。[^name] 如果做的是待办看板的第一个页面，叫 `first-board` 就够了。

```
创建 first-board 分支，按已批准的计划做出第一个页面。不需要构建，只用最外层文件夹里的一个 index.html 就能打开。
```

只用一个 `index.html` 来做，是因为第7章的 GitHub Pages 会在要发布的文件夹最外层寻找 `index.html`。

<Quiz id="ch704-branch" />

## 小步提交

**提交**把改动像拍照一样存下那一刻的样子，**推送**则把这张照片送到 GitHub 仓库。[^commit]

一个提交最好只装**一个独立且完整的改动**。这样，想换一种做法时，只回退那一部分就行了。[^atomic] 互不相关的改动，也要分别建分支。[^atomic]

| 不太好的提交 | 更好的提交 |
|---|---|
| 把一天的工作一次提交，写成"工作" | "增加读取待办表"、"给过期待办标上颜色" |

出处：本指南的示例（原则来自 GitHub 官方文档）[^atomic]

就像你在第3阶段学到的，在交给它做之前和之后都留下记录，这个习惯在这里同样适用。

<Quiz id="ch704-commit" />

## 阅读 AI 做出来的东西

AI 做出来的结果，要**读过之后**再接受。GitHub 的教程也说，要先检查 AI 生成的内容，再按示例修改。[^review-ai]

在 Claude Code 桌面应用里，你可以在查看改动内容（diff）中按文件检查改动。点击行旁边的 **+** 写下意见，Claude 会读到并修改。[^diff]

不用把代码全部看懂也没关系。请这样问。

```
对刚才改过的每个文件，用一行说明改了什么、为什么改。再告诉我它对应 SPEC.md 的哪一行。
```

如果有的改动说不出和 SPEC.md 的关联，它可能做了你没要求的事。请追问那一部分。

<Quiz id="ch704-read" />

## 亲自动手试试

1. 在待办看板文件夹里开一个**新会话**，切换到计划模式。
2. 发送上面的计划请求，用三个问题检查计划，然后批准。
3. 让它在 `first-board` 分支上做出第一个页面。待办数据用第3阶段会议记录里的待办表。
4. 用查看改动内容的功能确认文件，并请它解释改动。
5. 让它按小单位提交。
6. 请 Claude "把 `first-board` 分支上传（推送）到 GitHub"。在 GitHub 仓库页面里能看到这个分支就行。

**贯穿始终的作业**：第5章要做一个装置，让 Claude 自己确认"待办事项有没有一个遗漏地显示出来？"

## 小结

- 开新会话，交上 SPEC.md，用计划模式先拿到计划。修改在计划阶段成本最低。
- 分支是不碰 `main` 的工作空间。名字要简短、看得出意思。
- 一个提交只装一个完整的改动。不相关的改动要分开建分支。
- AI 做出来的东西，读过再接受。每个改动都要问它对应 SPEC.md 的哪一行。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Branch | 分支 | 不动基本版本、单独工作的一条岔路 |
| Commit | 提交 | 像拍照一样记录下改动 |
| Push | 推送 | 把我的记录送到 GitHub 仓库 |
| GitHub flow | GitHub 工作流 | 分支 → 修改 → PR → 审阅 → 合并的工作流程 |

<ChapterDone :chapter="704" />

下一章：[第5章. 检查与测试](05-test.md)

[^plan]: Claude Code 官方文档，「Common workflows」。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows （确认日期 2026-11-01）
[^branch]: GitHub 官方文档，「Writing and storing your code」。"A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （确认日期 2026-11-01）
[^core]: GitHub 官方文档，「Writing and storing your code」。"Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （确认日期 2026-11-01）
[^name]: GitHub 官方文档，「GitHub flow」。"A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow （确认日期 2026-11-01）
[^commit]: GitHub 官方文档，「Writing and storing your code」。"Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （确认日期 2026-11-01）
[^atomic]: GitHub 官方文档，「GitHub flow」。"Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow （确认日期 2026-11-01）
[^review-ai]: GitHub 官方文档，「Writing and storing your code」。"Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code （确认日期 2026-11-01）
[^diff]: Claude Code 官方文档，「Desktop application」。"After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop （确认日期 2026-11-01）
