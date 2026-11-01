# 第3章 熟悉界面 — 标题栏、改动内容、文件、会话信息

> **一句话总结**：Code 标签页是一个**在对话栏旁边再打开多个栏（窗格）**来使用的界面。通过会话标题栏的按钮，打开**改动内容、文件、终端、浏览器**栏，并在会话信息栏里用数字查看改了什么。
> 要查看改动内容，文件夹里必须打开**变更记录（Git）**。这一章会请 Claude 帮你打开它。

这一章依据2026年10月31日确认的 Claude Code 官方文档和 macOS 桌面应用（韩语界面，付费账号）编写。它会直接使用第2章里创建的**整理工具（정리도구）**文件夹和会议纪要。

## 布局一览

交办几次工作之后，界面会变成这样。

![Code 标签页的工作界面。红色编号标在：① 左边的对话栏，② 右上方的改动内容栏（删掉的行是红色，新增的行是绿色），③ 右下方的文件栏（打开了会议纪要，旁边是文件夹列表）](../../../guide/20-claude-code/assets/shot-11-layout-marked.png)

| 编号 | 栏 | 看什么 |
|---|---|---|
| ① | 对话 | 我发出的请求和 Claude 的说明 |
| ② | 改动内容（更改，변경 사항） | 文件里哪几行被删掉、哪几行是新增的 |
| ③ | 文件 | 打开并阅读文件夹里的文件 |

Code 标签页是一个可以**按自己的想法排列各个栏**的界面，这些栏包括对话、改动内容、浏览器、终端、文件。[^arrange] 拖动栏的标题可以移动它，拖动栏的边缘可以改变大小。[^arrange] 不需要一开始就全部打开。需要时一个个打开就行。

<Quiz id="ch403-layout" />

## 会话标题栏的按钮

对话栏最上面一行聚集着按钮。

![会话标题栏。红色编号标在：① 打开和关闭侧边菜单（会话列表），② 会话标题，③ 会话信息栏，④ 终端，⑤ 更改，⑥ 浏览器，⑦ 文件，⑧ 更多（⋯）](../../../guide/20-claude-code/assets/shot-06-titlebar-marked.png)

| 编号 | 作用 |
|---|---|
| ① | 打开和关闭侧边菜单（会话列表） |
| ② | 会话标题。点一下可以改名 |
| ③ | 打开和关闭会话信息栏 |
| ④ | 终端栏 |
| ⑤ | 更改（改动内容）栏 |
| ⑥ | 浏览器栏 |
| ⑦ | 文件栏 |
| ⑧ | 打开没有按钮的其他栏 |

出处：按钮名称来自本指南的界面确认（菜单栏「显示（보기）」菜单，2026-10-31），作用来自官方文档[^arrange][^sessions]

如果按钮只有图标、让你搞不清，请**把鼠标移上去看名称**。[^arrange] 窗口太窄时，放不下的按钮会收进 ⑧ 菜单里。[^arrange]

会话标题（②）是应用看了第一个请求后自动加上的。在本指南里，加上的是「整理会议备忘（회의 메모 정리）」。点标题可以改名。[^sessions]

① 侧边菜单里是到目前为止打开过的会话列表。每个会话的对话和改动内容是分开保存的。[^sessions] 把多个会话并排使用的方法，在第8章里讲。

<Quiz id="ch403-titlebar" />

## 查看改动内容 — 需要变更记录（Git）

在第2章创建的文件夹里点 ⑤ 更改按钮，会出现这样的提示。

![更改栏。红色编号标在：① 栏名「更改（변경 사항）」，② 提示「要查看更改，需要 Git 仓库（변경 사항을 보려면 Git 저장소가 필요합니다）」](../../../guide/20-claude-code/assets/shot-07-changes-need-git-marked.png)

**Git** 是记录文件在什么时候、怎样被改动的工具。更改栏会把这份记录和现在的文件做比较后展示出来。所以在没有记录的普通文件夹里，就没有东西可以展示。

不需要懂 Git 命令。**请 Claude 帮你打开就行。**

```
听说要看改动内容，需要 Git 仓库。请在这个文件夹里打开变更记录（Git），并把现有的文件留作第一条记录。请用简单的话告诉我你做了什么。
```

在本指南里，Claude 在文件夹中打开了 Git，并把5份备忘和会议纪要留作**第一条记录**。随后，更改栏显示出「没有可显示的更改（표시할 변경 사항이 없습니다）」。意思是第一条记录之后还没有改动过任何东西。

接下来，试着让它稍微改一下会议纪要。这个请求是依据复盘备忘，给每项待办事项加上进度状态。

```
请在会议纪要的待办事项表里增加一个“状态”列。看 inbox 里的3份复盘备忘，已经做完的写“完成(日期)”，还没做的写“进行中”。复盘里没有的事写“需确认”，其他部分不要改。
```

![改动内容栏。红色编号标在：① 改动的行数「+7 −7」，② 被删除的行（红色），③ 新增的行（绿色，有「状态」列和「完成(10/31)」等），④ 被改动的文件列表](../../../guide/20-claude-code/assets/shot-08-diff-marked.png)

**红色的行是被删除的行，绿色的行是新增的行。** `+7 −7` 的意思是新增了7行、删除了7行。表格的一行末尾加了一列之后，Git 会把那一行算作“删掉再重新写的”。所以待办事项表的7行，会各以红色和绿色出现一次。

多亏这一栏，你可以**用眼睛确认“其他部分不要改”有没有被遵守**。除了表格，如果没有其他行显示成红色或绿色，就说明遵守了。

::: tip 请确认 Claude 自己做出判断的部分
在本指南的练习里，Claude 先说明了一项判断。复盘里没有单独写俊浩的拍照，但是帖子3次都发出去了，所以它写成了“进行中”。它还补充说，想要严格一点，改成“需确认”就行。看到这样的说明，请再确认一下这个判断是否符合我的标准。如果和标准不同，用一句话请它改一下就行。
:::

::: warning Git 记录里留下的名字
Git 会在每条记录里一并留下**这台电脑的 Git 设置里写的姓名和邮箱**。如果是公司电脑，可能会放进公司账号。在把记录界面给别人看，或把文件夹上传之前，请先确认。如果电脑上没有 Git，请到官方网站（git-scm.com）安装。[^git]
:::

更改栏也可以用快捷键 **Cmd+Shift+D** 打开和关闭。[^keys]

<Quiz id="ch403-changes" />

## 会话信息栏

点 ③ 按钮，对话旁边会打开**会话信息栏**。它用卡片展示这个会话在哪里运行、改了什么、用掉了多少上下文。[^rail]

![会话信息栏。红色编号标在：① 环境（这台电脑 · 整理工具 · main），② 上下文 12%，③ 成果（会议纪要文件），④ 更改（+7 −7 和「提交更改（변경 사항 커밋）」按钮）](../../../guide/20-claude-code/assets/shot-09-rail-marked.png)

| 编号 | 卡片 | 看什么 |
|---|---|---|
| ① | 环境 | 在哪里（这台电脑）、在哪个文件夹里工作 |
| ② | 上下文 | 这个会话能记住的量里，已经用了多少 |
| ③ | 成果 | 这个会话里生成的文件 |
| ④ | 更改 | 改动的行数。点数字会打开改动内容栏 |

出处：卡片名称来自本指南的界面确认（2026-10-31），作用来自官方文档[^rail][^diff]

**上下文**（Context）就是你在第1阶段学到的“AI 一次能看到的量”（[第1阶段第1章](../00-common/01-what-is-llm.md#_3-一次能看的量有限——-上下文窗口)）。装满之后，Claude 会**自动把到目前为止的对话做成摘要，然后接着工作。**[^context] 本指南建议这样做：与其把新工作接在数字已经涨得很高的会话后面，不如在新会话里开始新工作，这样更清爽。

④ 的「提交更改（변경 사항 커밋）」是把改动的内容作为新记录留在 Git 里的按钮。记录和撤销，在[第4章](04-permissions-undo.md)里讲。

<Quiz id="ch403-rail" />

## 文件栏 — 打开看看生成的文件

点 ⑦ 文件按钮，文件栏会连同文件夹列表一起打开。在列表里点文件，就能看到内容。

![文件栏。红色编号标在：① 右边的文件夹列表（.claude、inbox、notes 以及其中的会议纪要），② 左边打开的会议纪要](../../../guide/20-claude-code/assets/shot-10-files-marked.png)

- 点对话里出现的**文件路径**，也会打开那个文件。[^files]
- 如果是在这台电脑上进行的会话，**也可以在文件栏里直接修改。** 修改的内容会自动保存。[^files]
- 列表里可能会看到 `.claude` 文件夹。这是 Claude Code 放这个文件夹专用设置的地方，在第6章里讲。

Claude 生成的文件，**不用打开 Finder 或资源管理器，在应用里就能直接确认**。在第2章里和原始备忘对照的事，现在在一个界面里就能完成。

<Quiz id="ch403-files" />

## 终端、浏览器栏和快捷键

剩下的两个栏，只简单了解一下。

- **终端**（④）：直接输入命令并执行的栏。它在和 Claude 相同的文件夹里打开。[^terminal] 这个阶段可以不用。终端在第10章里讲。
- **浏览器**（⑥）：在应用里打开网页的栏。[^arrange]

常用快捷键（macOS）如下。[^keys]

| 快捷键 | 作用 |
|---|---|
| Cmd+Shift+D | 打开和关闭更改栏 |
| Ctrl+\` | 打开和关闭终端栏 |
| Cmd+Shift+B | 打开和关闭浏览器栏 |
| Cmd+\\ | 关闭当前使用的栏 |
| Esc | 停止 Claude 的回应 |
| Cmd+Shift+M | 打开权限模式菜单 |

出处：Claude Code 官方文档[^keys]

## 亲自试一试

1. 在第2章的会话（或用整理工具文件夹打开的新会话）里，点一下 ⑤ 更改按钮。如果弹出需要 Git 的提示，就用上面的请求让 Claude 帮你打开。
2. 发送给会议纪要加“状态”列的请求，在更改栏里确认**除了表格，其他行有没有被改动**。
3. 打开 ③ 会话信息栏，看上下文数字和改动的行数。
4. 在 ⑦ 文件栏里打开会议纪要，确认状态列和复盘备忘是否一致（灯泡、文案、成本是完成，Instagram 是进行中）。

**连续任务**：把本指南的结果（[3장-회의록-상태칸.txt](/practice/notes/results/3장-회의록-상태칸.txt)）和我的结果比一比。表格的样子即使不同，只要状态值和复盘一致，就算做得好。

## 小结

- Code 标签页在对话旁边打开改动内容、文件、终端、浏览器栏。通过会话标题栏的按钮打开。
- 要查看改动内容，文件夹里必须有 Git（变更记录）。请 Claude 帮你打开就行。
- 红色的行是删掉的行，绿色的行是新行。“其他部分不要改”有没有被遵守，在这里确认。
- 在会话信息栏里查看环境、上下文、成果、改动的行数。上下文装满后，会自动做摘要并继续。
- 在文件栏里，可以直接打开生成的文件进行确认和修改。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Pane | 窗格（栏） | 在 Code 标签页里打开的一个窗口。对话、改动内容、文件等 |
| Diff | 差异（改动内容） | 按行比较修改前和修改后的结果 |
| Git | Git | 记录文件在什么时候、怎样被改动的工具 |
| Commit | 提交 | 在 Git 里把现在的状态留下一条记录 |
| Context | 上下文 | 在一个会话里，Claude 一次能记住的量 |
| Session rail | 会话信息栏 | 展示环境、上下文、成果、改动行数的栏 |

<ChapterDone :chapter="403" />

下一章：[第4章. 允许与撤销](04-permissions-undo.md)

[^arrange]: Claude Code 官方文档，「Desktop application」。"The Code tab is built around panes you can arrange in any layout: chat, diff, browser, terminal, file, plan, tasks, and subagent" / "Drag a pane by its header to reposition it, or drag a pane edge to resize it." / "To open another pane, click its icon button in the session's title bar. Hover to see each button's name, such as Terminal, Changes for the diff view, Browser, and Files." / "When the window is narrow: buttons that don't fit move into the menu" https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^sessions]: Claude Code 官方文档，「Desktop application」。"Each session is an independent conversation with its own context and changes." / "To rename a session, open it and click the session title in the title bar." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^rail]: Claude Code 官方文档，「Desktop application」。"The session details panel is a set of cards beside the chat that show where the session runs, what it changed, what it's running, and its context usage." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^diff]: Claude Code 官方文档，「Desktop application」。"To open the diff view, click the line counts, such as +12 -1, in the Changes card of the session details panel." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^context]: Claude Code 官方文档，「Desktop application」。"When context fills up, Claude automatically summarizes the conversation and continues working." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^files]: Claude Code 官方文档，「Desktop application」。"To open a file Claude mentions, click its path in the chat." / "Local sessions: you can edit files inside the session's working directory" / "By default, your edits in the file pane save on their own" https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^terminal]: Claude Code 官方文档，「Desktop application」。"The terminal opens in your session's working directory and shares the same environment as Claude" https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^keys]: Claude Code 官方文档，「Desktop application」快捷键表。"Toggle diff pane" / "Toggle Browser pane" / "Toggle terminal pane" / "Close focused pane" / "Stop Claude's response" / "Open permission mode menu" https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^git]: Claude Code 官方文档，「Desktop application」故障排除。"install Git" — 官方文档在需要 Git 的功能（worktree）处指引安装 Git。更改栏要求有 Git 仓库一事，来自本指南的界面确认（2026-10-31）。https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
