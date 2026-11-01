# 第8章 运营与改进——用 Issue 转下一圈

> **一句话总结**：公开之后想到的改进点和 bug，写成 **Issue**（议题）记下来。一个 Issue 就是下一圈的策划。
> 在 PR 里写上 `fixes #编号` 这样固定的词，合并 PR 时那个 Issue 就会**自动关闭。** 策划和运营就这样连起来了。

本章依据 2026 年 11 月 1 日确认过的 GitHub 官方文档写成。GitHub 界面按英语写。

## Issue 是什么

**Issue** 是用来计划、讨论和跟踪工作的记录。[^issue] bug 报告、新功能、想法，凡是需要记下来或讨论的东西，都可以放进去。这和第3阶段在会议纪要里写"下次要讨论的事"有点像。

Issue 和 PR 是连在一起的。在 Issue 或 PR 里提到另一个 Issue，两者就会互相关联；在 PR 里写上 `fixes` 这样固定的词，**相关的 Issue 就会自动关闭。**[^close]

```
fixes #Issue编号
```

Issue 编号像 `#2` 这样，附在 Issue 标题旁边。如果你在第6章已经建过一个 PR，第一个 Issue 就可能不是 1 号，所以一定要在界面上确认。

GitHub 的入门教程也是在计划阶段建第一个 Issue。标题写要做的功能，说明里写几行想做的东西。[^first-issue]

<Quiz id="ch708-issue" />

## 用标签和看板整理

Issue 多了之后，用**标签**来分类。新仓库里自带默认标签。[^labels]

| 标签 | 含义 |
|---|---|
| bug | 意料之外的问题 |
| enhancement | 新功能请求 |
| documentation | 改进文档 |

来源：GitHub 官方文档（只摘录了一部分）[^labels]

**项目**（Projects）是与 Issue、PR 相连的表格、看板、路线图。[^projects] 教程里的看板，用列表示工作的阶段。按待办（Todo）→ 进行中（In Progress）→ 完成（Done）移动，来查看进度。[^board]

**不需要一开始就全都用上。** 正如第1章里看到的，很多人是从一个仓库和几个 Issue 开始的。等 Issue 多到一眼看不过来了，再用标签和看板也不迟。

<Quiz id="ch708-labels" />

## 再转一圈

一圈结束后，把下一个功能建成**新的 Issue**，开始时把它移到进行中，就开始了下一个循环。[^next-cycle] 把第4阶段学过的流程，用一个 Issue 再走一遍，就是这样。

1. **计划**：在 Issue 里写要改什么。需要的话，在 SPEC.md 里再加一行检查标准（第3章）。
2. **制作**：在新分支上用计划模式拿到计划再制作（第4章）。
3. **检查**：运行检查装置并拿到证据。**原有的检查也必须全部通过**（第5章）。
4. **审查**：在 PR 里写上 `fixes #编号`，接受审查（第6章）。
5. **发布**：合并之后，会重新发布到 Pages（第7章）。

也可以直接把 Issue 交给 Claude Code。

```
读一下 GitHub Issue #<Issue 编号> 的内容，在 SPEC.md 里再加一行检查标准，然后先做计划。还不要修改文件。
```

如果 Claude 说读不到 Issue，就把 Issue 的标题和内容复制，粘贴到请求里。这个方法最可靠。

<Quiz id="ch708-cycle" />

## 发布版本以后再说

**发布版本**（Release）是为了让更多人下载使用而打包的发布单位。[^release] 对需要下载安装的程序很重要，但对只有一个网页的待办看板来说并不是必须的。知道有这样的东西就行。

## 亲手试一试

1. 在 `cafe-todo-board` 仓库首页点 **Issues** → **New issue**，建一个新 Issue。[^new-issue] 标题是"把过期的待办标成红色"，标签是 `enhancement`。
2. 把 Issue 内容交给 Claude Code，在 SPEC.md 里再加一行检查标准，然后先拿到计划。
3. 在新分支上制作，并通过检查装置，拿到新标准和原有标准都通过的证据。
4. 确认 Issue 标题旁边的编号，在 PR 说明里写上 `fixes #Issue编号`。审查之后合并。
5. 确认 Issue 是不是自动关闭了，Pages 上是不是出现了改动后的画面。

**接续任务**：第9章会整理怎样保证公开仓库里不混入秘密值和个人信息。

## 小结

- Issue 是计划、讨论、跟踪的记录。把改进点和 bug 写成 Issue，开始下一圈。
- 在 PR 里写 `fixes #Issue编号`，合并时 Issue 会自动关闭。编号要在界面上确认。
- Issue 多了之后用标签（bug·enhancement·documentation）和看板（Todo → In Progress → Done）。
- 下一圈也是计划 → 制作 → 检查 → 审查 → 发布。原有的检查也必须继续通过。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Issue | 议题 | 记录并跟踪待办、bug、想法的记录 |
| Label | 标签 | 给 Issue 和 PR 分类的标记 |
| Project | 项目 | 与 Issue、PR 相连的表格、看板、路线图 |
| Release | 发布版本 | 为了方便下载使用而打包的发布单位 |

<ChapterDone :chapter="708" />

下一章：[第9章. 安全与责任](09-safety.md)

[^issue]: GitHub 官方文档，「About issues」. "You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (确认日期 2026-11-01)
[^close]: GitHub 官方文档，「About issues」. "Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (确认日期 2026-11-01)
[^first-issue]: GitHub 官方文档，「Planning your work」. "In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (确认日期 2026-11-01)
[^labels]: GitHub 官方文档，「Managing labels」. "GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels (确认日期 2026-11-01)
[^projects]: GitHub 官方文档，「About Projects」. "A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects (确认日期 2026-11-01)
[^board]: GitHub 官方文档，「Planning your work」. "The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (确认日期 2026-11-01)
[^next-cycle]: GitHub 官方文档，「Reviewing your proposed changes」. "If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (确认日期 2026-11-01)
[^release]: GitHub 官方文档，「About releases」. "Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases (确认日期 2026-11-01)
[^new-issue]: GitHub 官方文档，「Planning your work」. "On the main page of your `stargazers-log` repository, click **Issues**." / "Click **New issue**." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (确认日期 2026-11-01)
