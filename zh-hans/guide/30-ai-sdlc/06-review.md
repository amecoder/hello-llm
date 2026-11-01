# 第6章 PR 与评审——合并之前再看一遍

> **一句话总结**：**PR**（Pull Request）是**提议**把我分支上的改动合并进 `main`。它为合并之前的讨论和审查，留出了一个位置。
> 一个人做也要评审。AI 评审（`/code-review`）也可以让它做，但**"没有问题"不等于安全，合不合并由我来决定。**

这一章依据 2026年11月1日确认的 GitHub、Claude Code 官方文档写成。

## 什么是 PR

**PR** 是提议把一个分支的改动合并进另一个分支。在改动进入项目之前，它留出了一个讨论和审查的位置。[^pr]

PR 画面里有这些标签页。[^tabs]

| 标签页 | 显示什么 |
|---|---|
| Conversation | 说明、评论、评审 |
| Commits | 分支变化的过程 |
| Checks | 自动测试、构建结果（第5章） |
| Files changed | 评审者针对改动内容发表意见的地方 |

来源：GitHub 官方文档（只摘录了一部分）[^tabs]

创建 PR 时，要写明**改了什么、解决什么问题**。如果是解决第8章里某个 Issue 的 PR，就和 Issue 关联起来，用规定的词来关联，PR 合并时 Issue 就会自动关闭。[^describe]

**小的 PR 更容易评审，合并也更安全。** 在请别人评审之前，先自己检查。读一遍改动的内容，看有没有不小心改动的地方，确认构建和测试是否运行过了。[^small]

也可以请 Claude Code 帮你创建 PR。官方文档建议，提交之前先审查 Claude 创建的 PR，并**请它指出有风险的地方。**[^risks]

```
用 first-board 分支创建 PR。提交之前，先指出这次改动里可能有风险的地方。
```

<Quiz id="ch706-pr" />

## 一个人也要评审

GitHub 教程说，**即使一个人工作**，在合并之前有意识地做评审，这个习惯会让项目保持健康，也会让以后的协作更容易。[^alone]

评审以三种决定之一结束。[^decisions]

| 决定 | 意思 |
|---|---|
| Comment | 只留下意见 |
| Approve | 可以合并了 |
| Request changes | 合并之前必须修改 |

来源：GitHub 官方文档[^decisions]

评审的标准是第3章的 **SPEC.md**。官方最佳实践文档里的示例提示词，是在做完之后**对照 SPEC.md**，确认所有要求都已实现，只报告影响正确性的缺口，并**跳过风格问题**（示例是交给子代理去做，本指南改成用新会话）。[^against-spec] 文档里也写了理由。让评审者找问题，它**总会找出点什么。**[^always-finds] 把这些全都改一遍，就会冒出一堆多余的累赘。

```
在新会话里，把当前分支的改动对照 SPEC.md 做评审。看要求是否都已实现，每条确认标准是否都有检查，只告诉我影响正确性的缺口。跳过风格问题。
```

<Quiz id="ch706-review" />

## 请 AI 来评审

Claude Code 里有评审命令 `/code-review`。在工作中的会话里输入它，它会读取我分支上的改动，找出正确性问题，并在对话里告诉我。[^local] 用量和会话的其余部分一样，从我的套餐里计算。[^usage]

在桌面应用里，提交之前可以在输入框里输入 `/code-review` 来获得评审。[^desktop-review] 打开 PR 之后，可以在会话信息面板里看到 PR 和自动检查的状态。这个功能需要安装并登录 GitHub CLI（`gh`）。[^monitor]

**AI 评审有明确的局限。**

- AI 评审可能漏掉 bug 或安全问题。**没有发现，并不意味着没有错误，也不意味着安全。**[^miss]
- 自动加在 GitHub PR 上的托管式评审，也不会批准或阻止 PR。**合不合并由人来决定。**[^decide] 这种托管式评审是给 Team、Enterprise 套餐用的，个人在任何套餐里都可以用 `/code-review`。[^plans]

如果你在第3阶段学过"写的人和确认的人分开"，那么即使是同一个 Claude，也最好让它在**新会话**里评审。因为这样它不会被制作时那段对话的上下文牵着走。

<Quiz id="ch706-ai-review" />

## 合并并收尾

评审完毕、确认手段也通过了，就把 PR **合并**（Merge）。GitHub flow 的最后一步是删除分支。就算删了分支，**PR 和提交记录也不会被删除**，所以不用担心。[^delete]

以后人多了，可以设置"必须有批准才能合并"这样的**保护规则**。保护规则默认会禁止强制覆盖和删除分支。[^protect]

<Quiz id="ch706-merge" />

## 动手试试

1. 确认 `first-board` 分支已经上传到 GitHub（第4章）。在仓库首页点 **Pull requests** → **New pull request**，选 `first-board` 作为要比较的分支，然后点 **Create pull request**。[^create-pr] 在标题和说明里写清楚改了什么、为什么改。
2. 创建之前，请 Claude 指出有风险的地方。
3. 在新会话里，对照 SPEC.md 获得评审。只修改正确性问题。
4. 再让 `/code-review` 评审一次，就算没有发现，也亲自浏览一遍 Files changed 标签页。
5. 确认手段通过后，合并 PR，并整理分支。

**连续任务**：第7章里，我们会把合并好的待办看板，用 GitHub Pages 发布到互联网上。

## 总结

- PR 是合并之前讨论和审查的地方。做小一点，写明改了什么、为什么改，并先自己审查。
- 一个人也要评审。标准是 SPEC.md，只修改正确性缺口，跳过风格。
- `/code-review` 在任何套餐里都能用。没有发现不等于安全，合不合并由人来决定。
- 合并之后就算删了分支，PR 和提交记录也还在。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Pull Request(PR) | 拉取请求 | 提议合并分支改动的请求 |
| Review | 评审 | 合并之前审查改动 |
| Merge | 合并 | 把分支的改动合并进来 |
| `/code-review` | 代码评审 | Claude Code 的评审命令 |

<ChapterDone :chapter="706" />

下一章：[第7章. 发布](07-deploy.md)

[^pr]: GitHub 官方文档，「About pull requests」。 "A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests （确认日期 2026-11-01）
[^tabs]: GitHub 官方文档，「About pull requests」。 "**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests （确认日期 2026-11-01）
[^describe]: GitHub 官方文档，「GitHub flow」。 "When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow （确认日期 2026-11-01）
[^small]: GitHub 官方文档，「Helping others review your changes」。 "Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes （确认日期 2026-11-01）
[^risks]: Claude Code 官方文档，「Common workflows」。 "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows （确认日期 2026-11-01）
[^alone]: GitHub 官方文档，「Reviewing your proposed changes」。 "Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes （确认日期 2026-11-01）
[^decisions]: GitHub 官方文档，「Quickstart for reviewing pull requests」。 "**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart （确认日期 2026-11-01）
[^against-spec]: Claude Code 官方文档，「Best practices for Claude Code」。 "use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^always-finds]: Claude Code 官方文档，「Best practices for Claude Code」。 "A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^local]: Claude Code 官方文档，「Review locally with /code-review」。 "Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local （确认日期 2026-11-01）
[^usage]: Claude Code 官方文档，「Review locally with /code-review」。 "The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local （确认日期 2026-11-01）
[^desktop-review]: Claude Code 官方文档，「Desktop application」。 "To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop （确认日期 2026-11-01）
[^monitor]: Claude Code 官方文档，「Desktop application」。 "After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop （确认日期 2026-11-01）
[^miss]: Claude Code 官方文档，「Code Review」。 "Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review （确认日期 2026-11-01）
[^decide]: Claude Code 官方文档，「Code Review」。 "A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review （确认日期 2026-11-01）
[^plans]: Claude Code 官方文档，「Code Review」。 "**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review （确认日期 2026-11-01）
[^delete]: GitHub 官方文档，「GitHub flow」。 "Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow （确认日期 2026-11-01）
[^protect]: GitHub 官方文档，「About protected branches」。 "By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches （确认日期 2026-11-01）
[^create-pr]: GitHub 官方文档，「Quickstart for pull requests」。 "then click **New pull request**." / "For the **compare** branch, select the branch that contains your changes." / "Click **Create pull request**." https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart （确认日期 2026-11-01）

