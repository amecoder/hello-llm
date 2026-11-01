# 第5章 检查与测试——给它检查装置，拿回证据

> **一句话总结**：AI 在**事情看起来做完了**的时候就会停下。如果给它一个能告诉它是不是真的做完了的**检查装置**，AI 就会自己转起"修改后再检查"的循环。
> 并且，不要听"全部通过了"这句话，要拿到**证据**（运行过的命令和它的输出，或者画面）。

本章依据 2026 年 11 月 1 日确认过的 Claude Code 和 GitHub 官方文档写成。在第3阶段，我们养成了把结果和原始笔记对照的习惯，到了第4阶段，它被自动化，名字叫"检查装置"。

## 为什么需要检查装置

官方最佳实践文档是这样说的。Claude 在事情**看起来做完了**时就会停下。如果没有东西能告诉它是不是真的做完了，"看起来做完了"就是它判断的全部。[^looks-done] 这样一来，最后就变成**我来当测试**，错误会一直留在那里，直到我碰巧发现。[^you-test]

反过来，如果给它**能用通过/失败来回答的东西**，Claude 就会自己把循环闭合。改动、运行检查，坏了就读输出、修改、再运行。[^loop]

| 没有检查装置 | 给了检查装置 |
|---|---|
| "做完了" → 我打开看，找出错的地方 | 检查失败 → Claude 修改 → 再检查 → 通过 |

来源：本指南的整理（依据是官方文档）[^loop]

<Quiz id="ch705-why" />

## 检查装置的种类

检查装置可以是**任何 Claude 能读到结果的东西**。官方文档举的例子有：测试文件、构建是否成功、语法检查器、对比输出的脚本、和设计稿放在一起比较的浏览器画面。[^kinds] 如果有这样的装置，文档甚至说，CLAUDE.md 里**最有用的一行就是运行它的命令**。[^claude-md]

最简单的方法是**写在请求里**。不需要任何设置，今天就能用。[^in-prompt]

```
修改待办看板之后，请逐条检查 SPEC.md 里的检查标准，一直做到全部通过为止。
```

在桌面应用里，Claude 可以启动开发服务器，并在应用里的**浏览器窗口**里打开，确认自己的改动。默认每次编辑后都会自动检查。[^browser] 对作为网页的待办看板来说，这是很合适的装置。

请它做测试时，要**具体说明要检查什么行为**。[^specific-test]

| 不太好的请求 | 更好的请求 |
|---|---|
| 做个测试 | 做一个测试，检查会议纪要里的 5 件待办是否都显示在屏幕上，期限是否是日期格式 |

来源：本指南的例子（要点来自官方文档）[^specific-test]

<Quiz id="ch705-kinds" />

## 拿到证据

不管用什么装置，都要它给**证据**。就是运行过的命令和它的输出，或者画面。[^evidence] 光是"全部通过了"这句话，几乎得不到任何信息，读输出比自己重新跑一遍更快。[^evidence]

```
把刚才运行的检查命令和它的输出原样给我看。也告诉我通过几个、失败几个。
```

**也要确认检查是不是真的在检查。** 故意弄错的时候不会失败的检查，不是装置而是摆设。比如，删掉一件待办再运行，看检查会不会失败。

<Quiz id="ch705-evidence" />

## 每次上传时自动检查——GitHub Actions

可以让检查不必每次都由人来下令。**GitHub Actions** 是 GitHub 上自动运行构建、测试、发布的功能。可以让它在每次上传改动时运行测试。[^actions]

- 要做什么，由放在仓库 `.github/workflows` 文件夹里的 YAML 文件（设置文件）决定。[^yaml]
- 经常提交、经常检查的习惯叫做**持续集成**（CI）。它能帮你更早发现错误。[^ci]
- GitHub 会把检查结果显示在第6章的 PR 界面里。可以马上看到我分支里的改动有没有引入错误。[^ci]
- 在**公开仓库**里，可以免费使用 GitHub 提供的标准运行器。[^free]

设置文件让 Claude 帮你做就行。不过一开始，只用上面的"写在请求里"和浏览器检查就足够了。**不需要一开始就配齐所有自动化。**

<Quiz id="ch705-actions" />

## 亲手试一试

1. 在第4章的 `first-board` 分支上，让它做一个检查 SPEC.md 里检查标准的装置。
2. 运行检查，并要它把运行的命令和输出原样给你看。
3. 故意删掉一件待办再运行一次，看检查会不会失败。确认之后再恢复。
4. 在应用的浏览器窗口里打开待办看板，亲自数一数待办的数量。
5. 把检查命令用一行写进 CLAUDE.md。

**连续任务**：第6章会把到目前为止的改动以 PR 的方式提交，并接受审查。

## 小结

- AI 看起来做完了就会停下。给它一个用通过/失败来回答的检查装置，它就会自己修改并再次检查。
- 检查装置可以是测试、构建、对比脚本、浏览器画面等任何 Claude 能读到结果的东西。
- 不要听"全部通过了"，而要拿到命令和输出这样的证据。也要看故意弄错时检查会不会失败。
- GitHub Actions 会在每次上传时自动检查。在公开仓库里，标准运行器是免费的。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Test | 测试 | 自动检查结果是否符合预期的检验 |
| CI | 持续集成 | 经常合并、经常自动检查的习惯 |
| GitHub Actions | GitHub Actions（自动化工作流） | 每次上传时自动运行预先设定的任务的功能 |
| YAML | YAML（配置文件格式） | 用于自动任务设置的文本格式 |

<ChapterDone :chapter="705" />

下一章：[第6章. PR 与审查](06-review.md)

[^looks-done]: Claude Code 官方文档，「Best practices for Claude Code」. "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^you-test]: Claude Code 官方文档，「Best practices for Claude Code」. "In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^loop]: Claude Code 官方文档，「Best practices for Claude Code」. "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^kinds]: Claude Code 官方文档，「Best practices for Claude Code」. "The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^claude-md]: Claude Code 官方文档，「Best practices for Claude Code」. "If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^in-prompt]: Claude Code 官方文档，「Best practices for Claude Code」. "In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^browser]: Claude Code 官方文档，「Desktop application」. "Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (确认日期 2026-11-01)
[^specific-test]: Claude Code 官方文档，「Common workflows」. "When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (确认日期 2026-11-01)
[^evidence]: Claude Code 官方文档，「Best practices for Claude Code」. "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (确认日期 2026-11-01)
[^actions]: GitHub 官方文档，「Quickstart for GitHub Actions」. "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (确认日期 2026-11-01)
[^yaml]: GitHub 官方文档，「Understanding GitHub Actions」. "Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (确认日期 2026-11-01)
[^ci]: GitHub 官方文档，「Continuous integration」. "Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (确认日期 2026-11-01)
[^free]: GitHub 官方文档，「Billing and usage」. "GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (确认日期 2026-11-01)
