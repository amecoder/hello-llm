# 第4章 权限与撤销 — 交出什么，怎样撤销

> **一句话总结**：在输入框下面的**权限菜单**里，决定哪些事 Codex 自己做、哪些事要先问你。刚开始请用 **Ask for approval**。
> 撤销要靠 **Git**。像 Claude Code 的回退这样的功能，我在官方文档里没有找到。所以在交办工作的前后留下记录（提交）的习惯，就更加重要。

这一章依据2026年11月1日确认的 Codex 官方文档和本指南的实践编写。权限为什么必要，已在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)里讲过。

## 三种权限菜单

权限菜单在**输入框下面**。[^menu] 在本指南的界面上，一开始选中的就是 **Ask for approval**。是不是所有账号的初始值都一样，没有确认到。菜单里可能会出现这些名称。[^names]

| 界面上的名称 | 作用 | 什么时候用 |
|---|---|---|
| Ask for approval | 在文件夹里自己做，要走出去之前先问 | 大部分工作 |
| Approve for me | 不问你，改由自动审核来判断 | 熟悉之后 |
| Full access | 不受限制地执行 | 几乎不用 |

出处：Codex 官方文档（只摘取了一部分）[^names]

官方文档建议**大部分工作从 Ask for approval 开始**。[^start] 它比 Claude Code 的「手动（수동）」多交出去了一步（本指南的对比）。文件夹**里面**的文件，不用问就会修改。

选了 **Approve for me**，Codex 能做的范围也不会扩大。改变的只有“由谁来批准”。[^same-box] 自动审核会多调用一次模型，所以用量可能增加。[^extra]

**Full access** 会去掉文件和互联网的所有边界。官方文档也说，只有真的想全部交出去时才用。[^full] 整理备忘不需要它。

菜单里看得到，不等于已经选中了。每个对话都请确认一下**现在选中的是什么**。[^check]

<Quiz id="ch504-modes" />

## 围栏与批准

权限靠两个装置运作。[^two]

- **围栏**（沙箱，Sandbox）：能碰哪些文件和互联网
- **批准**（Approval）：什么时候停下来问

在默认状态下，Codex 是在**互联网关闭**的情况下工作，围栏通常到工作文件夹为止。[^default] 要修改文件夹外的文件，或连接互联网，就需要批准。[^auto]

也有**即使在文件夹里也受保护的地方**。工作文件夹里的 `.git`、`.agents`、`.codex` 文件夹，在默认状态下只能读取。[^protected] `.git` 是存放 Git 记录的地方，所以如果你在对话里让 Codex “帮我记录”，它可能会来问批准，或被拦住。第5章里要放技能的 `.agents` 文件夹也属于这里。

在本指南里就真的被拦住了。我请它在终端里把技能复制到 `.agents/skills`，Codex 回答说“`.agents` 路径是只读的，所以复制被拦截了”，并告诉了我两行要自己输入的命令。它把被拦住的原因和替代办法一起告诉我，我就能判断该批准什么。

<Quiz id="ch504-sandbox" />

## 查看改动内容

Codex 在**审查窗格**（review pane）里展示改动内容。它相当于 Claude Code 的「更改（변경 사항）」栏。审查窗格也只在 Git 仓库里才会打开。[^review-git]

审查窗格里**不只有 Codex 改的内容。** 我自己改的、还没记录的其他改动，全部都会显示出来。[^includes] 所以在交办工作之前，先把到目前为止的改动记录下来（提交），审查窗格里就只剩下 Codex 的改动，看起来更方便。

在审查窗格上方可以选择查看范围。默认是还没有记录的改动（**Unstaged**），选 **Last turn**，则只看 Codex 最近一次回答里改动的内容。[^views] 刚开始，Last turn 更容易理解。

如果有不满意的行，可以在那一行写意见。把鼠标移到那一行，点 **+**，写下意见，然后在输入框里发送像“按行上的意见修改”这样的话就行。[^comments]

<Quiz id="ch504-review" />

## 撤销 — 用 Git

在审查窗格里可以直接撤销。[^revert]

| 单位 | 在哪里 |
|---|---|
| 全部 | 审查窗格上方的 Revert all |
| 一个文件 | 那个文件的撤销（revert） |
| 一个块 | 那个块（hunk）的撤销 |

出处：Codex 官方文档（只摘取了一部分）[^revert]

**请小心 Revert all。** 审查窗格里也包含了我改的内容，全部撤销的话，我的改动也可能消失。[^includes] 只想丢弃一部分时，请按文件或块为单位撤销。

Claude Code 里有把对话向前回退的功能（[Claude Code 第4章](../20-claude-code/04-permissions-undo.md)）。**在 Codex 官方文档里没有找到同样的功能。** 官方文档的做法是，**在工作前后留下 Git 记录**。[^checkpoint] 经常记录的话，就可以一点一点地撤销。[^often]

所以在这个阶段，把下面的顺序养成习惯。

1. 交办之前：用应用的 Git 功能（提交）把现在的状态记录下来。[^commit]
2. 交办。
3. 在审查窗格里用 Last turn 只看改动的部分。
4. 满意就再记录一次，不满意就撤销。

用对话请它“帮我记录”也可以，但正如前面看到的，`.git` 是受保护的文件夹，所以它可能会来问批准。如果它来问，请确认这是不是“只留下 Git 记录的事”，再批准。

大的工作，请在修改之前先拿到计划。在输入框里输入 `/plan`，Codex 会先调查并提出方法。[^plan] 它和 Claude Code 第5章的「计划」模式作用相同。

<Quiz id="ch504-undo" />

## 亲自试一试

1. 打开输入框下面的权限菜单，看看选中的是什么。如果不是 Ask for approval，就改过来。
2. 用应用的 Git 功能（或在对话里请它做，然后批准），记录现在的状态。
3. 对第2章的会议纪要，请它“在最上面加一行‘撰写日期：今天的日期’”。
4. 在审查窗格里用 Last turn 查看，确认改动的行。
5. 只把那个文件撤销试试。

**接下来的练习**：在第5章里，会把在 Claude Code 里做的3个技能搬到 Codex 上，并用 `$weekly-review` 一行做出周复盘。

## 小结

- 权限菜单在输入框下面。刚开始用 Ask for approval。
- Approve for me 只改变批准的主体。范围不会扩大。
- 默认是互联网关闭，围栏是工作文件夹。`.git`、`.agents`、`.codex` 即使在文件夹里也受保护。
- 审查窗格也会显示我的改动。交办之前先记录，再用 Last turn 查看。
- 不用回退，而是用 Git 撤销。在交办前后留下记录。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Sandbox | 沙箱 | 限制 Codex 能碰的范围的围栏 |
| Approval | 批准 | 越过围栏之前要得到的许可 |
| Review pane | 审查窗格 | 展示改动内容的窗口 |
| Revert | 撤销（还原） | 把改动的内容恢复原状 |
| Commit | 提交 | 把现在的状态记录到 Git |

<ChapterDone :chapter="504" />

下一章：[第5章. 搬运技能](05-skills.md)

[^menu]: Codex 官方文档，「Permissions」。"Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes（确认日期 2026-11-01）
[^names]: Codex 官方文档，「Sandbox」。"Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing（确认日期 2026-11-01）
[^start]: Codex 官方文档，「Permissions」。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes（确认日期 2026-11-01）
[^same-box]: Codex 官方文档，「Permissions」。"Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes（确认日期 2026-11-01）
[^extra]: Codex 官方文档，「Agent approvals & security」。"Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security（确认日期 2026-11-01）
[^full]: Codex 官方文档，「Sandbox」。"This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing（确认日期 2026-11-01）
[^check]: Codex 官方文档，「Permissions」。"Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes（确认日期 2026-11-01）
[^two]: Codex 官方文档，「Permissions」。"The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes（确认日期 2026-11-01）
[^default]: Codex 官方文档，「Agent approvals & security」。"By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security（确认日期 2026-11-01）
[^auto]: Codex 官方文档，「Agent approvals & security」。"Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security（确认日期 2026-11-01）
[^protected]: Codex 官方文档，「Agent approvals & security」。"`<writable_root>/.git` is protected as read-only whether it appears as a directory or file." / "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "`<writable_root>/.codex` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security（确认日期 2026-11-01）
[^review-git]: Codex 官方文档，「Code review」。"The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^includes]: Codex 官方文档，「Code review」。"It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^views]: Codex 官方文档，「Code review」。"By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^comments]: Codex 官方文档，「Code review」。"Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^revert]: Codex 官方文档，「Code review」。"**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review（确认日期 2026-11-01）
[^checkpoint]: Codex 官方文档，「Codex CLI」。"Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli（确认日期 2026-11-01）
[^often]: Codex 官方文档，「Agent approvals & security」。"Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security（确认日期 2026-11-01）
[^plan]: Codex 官方文档，「Prompting」。"For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting（确认日期 2026-11-01）
[^commit]: Codex 官方文档，「Local environments」。"You can stage or revert individual chunks, stage or revert entire files, commit changes, push a branch, and create a pull request without leaving the app." https://learn.chatgpt.com/docs/environments/local-environment（确认日期 2026-11-01）
