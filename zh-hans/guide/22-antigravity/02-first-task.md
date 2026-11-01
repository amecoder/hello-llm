# 第2章 安装应用与第一次整理——把文件夹打开为项目

> **一句话总结**：安装 Antigravity 应用，用 Google 账号登录，然后把整理工具文件夹作为**项目**打开。
> 一开始用 **Planning mode**（先做计划）来交代任务，读完计划后点 **Proceed** 继续。

本章依据 2026年11月1日确认的 Antigravity 官方文档写成。**本指南还没有在应用界面上实际练习过。** 界面名称原样写了官方文档里的英文名称，和你的界面不同时，以你的界面为准。实际运行结果在第3章（用终端运行）里。

## 安装并登录

1. 在 [antigravity.google/download](https://antigravity.google/download) 下载适合你电脑的安装文件。如果是 macOS，打开 `Antigravity.dmg`，把它拖进 **Applications** 文件夹。[^dmg]
2. 打开应用，点 **Sign in**。浏览器打开后，用个人 Google 账号登录。[^signin]

用量和可用的模型，由登录账号的套餐（免费、Pro、Ultra）决定（[第1章](01-what-is.md)）。

<Quiz id="ch602-install" />

## 把文件夹打开为项目

Antigravity 应用里的智能体（Agent），在**项目**（Projects）里干活。项目决定智能体可以动哪些文件夹，以及拥有什么权限。[^projects]

1. 点左侧边栏的 **New Project** 图标（带加号的文件夹）。[^new-project]
2. 用 **Add Folder** 选择整理工具文件夹。不是 Git 仓库的普通文件夹也可以。[^new-project]

发出第一条指令时，要选一种工作方式。[^modes]

| 名称 | 作用 |
|---|---|
| Local mode | 直接在当前文件夹里工作 |
| New worktree mode | 在单独分出来的 Git 工作空间里工作 |

出处：Antigravity 官方文档[^modes]

整理工具用 **Local mode** 就够了。New worktree mode 只能在 Git 仓库里使用。[^worktree]

新项目一开始用 **Inherit Global** 权限，可以读写项目文件夹里的全部内容。[^inherit] 权限在第4章讲。

<Quiz id="ch602-project" />

## 先拿到计划，再继续

开始新对话时，要从两种方式里选一种。[^planning]

| 名称 | 作用 | 什么时候用 |
|---|---|---|
| Planning mode | 先做计划再执行 | 第一次交代的事 |
| Fast mode | 不做计划，直接执行 | 改名字这类小事 |

出处：Antigravity 官方文档（只摘录了一部分）[^planning]

刚开始，建议用 **Planning mode**。计划书（Implementation plan）出来后读一读，没问题就点对话里或计划书上方的 **Proceed**，继续往下做。[^proceed] 它和 Claude Code 第5章的「计划（계획）」模式、Codex 第4章的 `/plan` 起同样的作用。

在设置的 **Agent** 标签页里，可以选择审阅方式。**Request review** 会在做出计划或改动内容时停下来，等我批准。[^review-mode] 相反，Always proceed 则不会停下，直接执行。[^always] 刚开始，Request review 比较安全。

任务完成后，智能体会生成**整理报告**（Walkthrough），概括改了什么。[^walkthrough]

<Quiz id="ch602-plan" />

## 交代第一次整理

发送和前面两个工具一样的请求。

```
把 inbox/회의-2026-10-27-주간회의.txt 这份笔记整理成会议记录，作为新文件保存到 notes/ 文件夹里。
```

想指定文件的话，也可以输入 `@` 来选。指定文件并不会把内容粘贴进去，而是把文件路径传给智能体，需要时它再去读那个文件。[^mention]

本指南用终端（`agy`）运行同样请求得到的结果，在[第3章](03-rules-skills.md)里。应用和终端用的是同一个智能体（[第1章](01-what-is.md)）。

**请把结果和原件对一对。** 5个待办都搬过来了吗？负责人和截止日期和笔记一样吗？有没有编造笔记里没有的内容？

<Quiz id="ch602-first" />

## 查看改动内容

应用的 **Review** 窗口会显示项目 Git 仓库里的改动。[^review] 默认视图是所有还没有记录的改动（**Uncommitted**），所以我自己改的内容也会一起显示。选 **Agent Edits**，就只看这次对话里智能体改过的文件。[^views]

Review 窗口显示的是 Git 仓库里的改动，所以把整理工具文件夹也做成 Git 仓库会比较方便。如果你跟着 Claude Code 第3章或 Codex 第2章做过，它已经是 Git 仓库了。在不是 Git 的文件夹里，Review 窗口是什么样子，官方文档里没有写。

<Quiz id="ch602-review" />

## 亲自动手试试

1. 安装应用并登录。
2. 用 New Project → Add Folder 打开整理工具文件夹。
3. 用 Planning mode 发送上面的请求，读完计划后点 Proceed。
4. 把生成的会议记录和原始笔记对一对，并在 Review 窗口里查看改动过的文件。

**连续任务**：第3章要测试，不用搬运规则（`AGENTS.md`）和技能，它是否也会遵守。

## 小结

- 应用：Sign in → 用个人 Google 账号登录。
- 用 New Project → Add Folder 把文件夹打开为项目。普通文件夹也行。
- 刚开始，用 Planning mode 和 Request review，读完计划再 Proceed。
- Review 窗口显示 Git 改动。用 Agent Edits 可以只看智能体的改动。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Project | 项目 | 智能体干活的文件夹与权限的组合 |
| Planning mode | 计划模式 | 先做计划再执行的方式 |
| Implementation plan | 实施计划 | 智能体做出的工作计划书 |
| Walkthrough | 完成报告 | 任务做完后的整理报告 |

<ChapterDone :chapter="602" />

下一章：[第3章. 规则与技能——不用搬运也行](03-rules-skills.md)

[^dmg]: Antigravity 官方文档，「Get started」。"Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^signin]: Antigravity 官方文档，「Authenticate」。"Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install （确认日期 2026-11-01）
[^projects]: Antigravity 官方文档，「Get started」。"Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^new-project]: Antigravity 官方文档，「Get started」。"Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^modes]: Antigravity 官方文档，「Get started」。"**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^worktree]: Antigravity 官方文档，「Projects」。"**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects （确认日期 2026-11-01）
[^inherit]: Antigravity 官方文档，「Projects」。"**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects （确认日期 2026-11-01）
[^planning]: Antigravity 官方文档，「Artifact review」。"**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review （确认日期 2026-11-01）
[^proceed]: Antigravity 官方文档，「Implementation plan」。"You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan （确认日期 2026-11-01）
[^review-mode]: Antigravity 官方文档，「Artifact review」。"You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review （确认日期 2026-11-01）
[^always]: Antigravity 官方文档，「Artifact review」。"The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review （确认日期 2026-11-01）
[^walkthrough]: Antigravity 官方文档，「Walkthrough」。"The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough （确认日期 2026-11-01）
[^mention]: Antigravity 官方文档，「Mentions and quoting」。"Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions （确认日期 2026-11-01）
[^review]: Antigravity 官方文档，「Review changes」。"In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes （确认日期 2026-11-01）
[^views]: Antigravity 官方文档，「Review changes」。"| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes （确认日期 2026-11-01）
