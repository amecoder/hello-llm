# 第12章 同时工作与远程

<Badge type="tip" text="必读" /> 要跟上这个阶段，请一定读完。

> **一句话总结**：用 Git 留下第一次记录后，就能用 worktree **分出工作文件夹**，让几项工作并排进行。

本章的界面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 运行的结果。文件夹路径和套餐名称按本课程做了改写。

我们先把当前状态保存下来，再做一个不会碰到主文件夹的工作文件夹。

## 用 Git 留下第一次记录

Git 是保存文件夹变更历史的程序。保存下来的一个时间点叫作**提交**（Commit）。和游戏里的存档点差不多。积累记录的文件夹叫作**仓库**（Repository）。

为什么现在需要它？原因有两个。

- [第7章](07-permissions-undo.md)的回退只能还原 Claude 的编辑工具修改过的文件。只被 Bash 命令改动的文件不会被跟踪。要还原这类文件，就要用 Git 这样的版本管理。[^git-undo]
- 下一节的 worktree 是从提交创建的。仓库里至少要有一个提交。[^one-commit]

先用 `git --version` 看看有没有 Git。显示出版本号就行。如果没有版本号，而是提示找不到命令，就这样安装。

- **Windows**：在 git-scm.com/downloads/win 下载安装程序并安装，然后打开一个新窗口。[^git-win]
- **Mac 和 Linux**：按照 git-scm.com 上的说明操作。

现在在练习文件夹里开始记录。

```bash
cd ~/hello-ai-연습/터미널
git init
```

`git init` 是让这个文件夹开始记录变更历史的命令。接下来决定**不**记录哪些东西。第7章的 `비밀`（秘密）文件夹虽然是假文件，但我们就当它是真的秘密，把它排除掉。下一节的 worktree 文件夹也一起排除。[^wt-ignore] 启动 `claude`，发送下面的内容。

```text
在这个文件夹里新建 .gitignore 文件，写上"비밀/"和".claude/worktrees/"这两行。
```

`.gitignore` 是写着让 Git 装作看不见的文件的列表。现在用 `/exit` 退出，在终端里输入。

```bash
git config user.name "你的名字"
git config user.email "me@example.com"
git config core.quotePath false
git add .
git status --short
```

逐行来看是这样的。

- 第一、二行（`git config user.…`）：设置写进提交里的名字和邮箱。只对这个文件夹有效。以后公开仓库时，这些也会一起公开，所以请用可以公开的值。
- 第三行（`git config core.quotePath false`）：让韩文文件名按原样显示。
- `git add .`：把要保存的文件收集起来。`.` 表示当前文件夹。
- `git status --short`：简短地显示收集好的文件。

在新文件夹里运行时，显示的是这样。

```text
A  .claude/skills/meeting-notes/SKILL.md
A  .gitignore
A  CLAUDE.md
A  inbox/회의-2026-10-27-주간회의.txt
A  notes/회의록-2026-10-27.md
A  주간정리.sh
A  회의록.md
```

你的列表里文件可能更多。如果去掉第三行，韩文名字会显示成 `\355\232…` 这样的数字，就算 `비밀` 文件夹被收进去了也很难认出来。

这时问问自己：`비밀` 文件夹从列表里去掉了吗？去掉了就保存。如果还能看到，就不要提交。改好 `.gitignore` 的两行后，再输入一次 `git reset` 和 `git add .`。`git reset` 是把刚才用 `git add .` 收集的文件重新放下的命令。文件本身不会被删除，放心。

```bash
git commit -m "第一次记录"
```

`git commit` 才是真正留下记录。`-m` 是 message（消息）的缩写，引号里是这次记录的说明。

这个顺序我们在新文件夹里运行过，确认了 `비밀` 文件夹被排除、提交也留了下来。

<Quiz id="ch812-git" />

## 用 worktree 分出工作文件夹

worktree（工作树）是另一个独立的工作文件夹。仓库的记录是共用的，文件和分支（Branch，分出来的工作线）各自独立。[^wt-what] 可以想象成再做一个副本文件夹，在里面工作。这里只体验一次。

在 `--worktree` 后面给个名字，就会创建那个文件夹，并在里面启动 Claude。[^wt-what]

```bash
claude --worktree memo-fix
```

实际运行后，启动界面上的文件夹变成了这样。

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claude 套餐名称
 ▝▝   ▝▝   ~/hello-ai-연습/터미널/.claude/worktrees/memo-fix
```

文件夹建在 `.claude/worktrees/memo-fix`，新分支的名字是 `worktree-memo-fix`。[^wt-where] 我们没有给会话起名，什么也没改，就用 `/exit` 结束，文件夹马上被删掉了。

```text
Removing worktree…
Worktree removed (no changes)
```

worktree 的名字和会话的名字是两回事。官方文档说明，如果给会话起了名字，删除前会先问你要不要保留。[^wt-where] 这种情况我们没有实际运行过。

有两点要知道。

- **这是新取出来的副本。**[^wt-fresh] 提交里没有的文件，里面也没有。上面排除的 `비밀` 文件夹也没有。如果看不到笔记，先确认有没有提交。
- **如果还有没处理完的工作，结束时会问你保留还是删除。** 选择删除，文件夹、分支以及里面的工作会一起消失。以后想回来，就用结束时显示的 `claude --worktree <名称> --resume` 命令。[^wt-remove]

把 worktree 的结果合并回主文件夹，是 Git 的分支合并。本章不做合并。只要知道这是一个不碰主文件夹、单独工作的地方就够了。如果好奇怎么合并，可以看[第4阶段 · AI-SDLC 指南](/zh-hans/guide/30-ai-sdlc/)里讲 PR 的那一章。PR（Pull Request）是请求把分支的变更合并到主线的操作。

<Quiz id="ch812-worktree" />

## 两个终端窗口并排工作

有时你想在修改会议记录的同时，把学习笔记也交给 Claude。打开两个终端窗口就行。

- **不太好的例子**：两个窗口都在同一个文件夹里启动 `claude`。它们可能会碰到同一个文件。别的会话改动的内容，回退通常抓不住。[^other-session]
- **更好的例子**：每个窗口用不同名字的 worktree。文件是分开的，所以不会互相冲突。

在第一个窗口里这样输入。

```bash
cd ~/hello-ai-연습/터미널
claude --worktree memo-fix
```

在第二个窗口里这样输入。

```bash
cd ~/hello-ai-연습/터미널
claude --worktree study-note
```

这样两个窗口就在不同的文件夹里工作。正如上一节看到的，worktree 建在 `.claude/worktrees/<名称>` 里。

```text
窗口 1：~/hello-ai-연습/터미널/.claude/worktrees/memo-fix     修改会议记录
窗口 2：~/hello-ai-연습/터미널/.claude/worktrees/study-note   整理学习笔记
```

同时运行两个窗口，本指南没有实际试过。做完后问问自己：两项工作有没有碰到对方的文件？窗口多了，用量也可能增加。用[第13章](13-cost-safety-trouble.md)的 `/usage` 留意着，只在真正需要时使用。

<Quiz id="ch812-two-windows" />

## 进一步了解

下面三样本指南都没有实际运行过。这里只简短转述官方文档说明的内容。现在不懂也没关系。需要的时候再来看。

**`/loop`** 会在会话里隔一段时间重新运行同一个请求。[^loop-what] 比如可以让它每小时检查一次有没有新笔记。

::: details `/loop` 的用法和注意事项（点击展开）

```text
/loop 1h 如果 inbox 文件夹里有新笔记，只告诉我文件名
```

- 只在 Claude Code 开着并且处于空闲状态时运行。关掉终端就会停止。[^loop-idle]
- 过了 7 天会自动结束。[^loop-idle]
- 像 `1h` 这样设定了间隔的重复，用 Esc 或 Ctrl+C 停不下来。要用语言请 Claude 取消。[^loop-esc]

:::

**`/goal`** 只要设定好完成条件，即使你不逐步指示，Claude 也会一直工作下去。[^goal-what]

::: details `/goal` 的用法和注意事项（点击展开）
负责判定的模型不会自己打开文件。所以条件要写成能在回答里体现出来的形式，还要写上停止条件。[^goal-judge] 轮次是 Claude 做一次工作并拿到结果的一个回合。

```text
/goal 当 inbox 里的每份会议笔记都在 notes 文件夹里生成了会议记录，并且回答里列出了所有生成的文件名，就算完成。或者 10 轮后停止。
```

用 `/goal clear` 解除。[^goal-state]

:::

**远程控制**（Remote Control）把你电脑上正在运行的会话连接到 claude.ai/code 或 Claude 手机应用。在会话里输入 `/remote-control`。[^rc-cmd] 能使用的套餐是有限定的。[^rc-what]

它**不是**在云端运行的。工作仍在你的电脑上进行，手机只是查看那个会话的窗口。所以电脑必须开着，`claude` 也必须一直在运行。[^rc-window]

如果是电脑关着也要运行的工作，请看应用指南里的[云端与定时](../20-claude-code/08-parallel-cloud-schedule.md)。

<Quiz id="ch812-more" />

## 动手试一试

1. 在练习文件夹里完成 `git init`、`.gitignore` 和第一次提交。
2. 用 `git log --oneline` 确认能看到一行记录。
3. 用 `claude --worktree memo-fix` 启动，用 `! pwd` 确认当前文件夹。
4. 什么都不改，用 `/exit` 结束，然后读一读界面上的提示。

问问自己：第一次记录里排除了 `비밀` 文件夹吗？你能用 `pwd` 说出自己现在在哪个文件夹吗？

## 小结

- Git 的第一次记录，是还原回退无法撤回的变更的途径，也是 worktree 的前提。
- worktree 是文件和分支各自独立的工作文件夹。提交里没有的文件，里面也没有。
- 让几项工作并排进行时，每个窗口用不同的 worktree。
- `/loop`、`/goal`、远程控制，需要时再拿出来看。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Git | Git | 保存文件夹变更历史的程序 |
| Repository | 仓库 | 积累 Git 记录的文件夹 |
| Commit | 提交 | 在 Git 里保存的一个时间点 |
| Branch | 分支 | 分出来的工作线 |
| `.gitignore` | 忽略文件列表 | Git 不记录的文件列表 |
| Worktree | 工作树 | 记录相同、文件和分支各自独立的工作文件夹 |
| Remote Control | 远程控制 | 在别的设备上接着查看你电脑上会话的功能 |

<ChapterDone :chapter="812" />

下一章：[第13章 费用·安全·问题解决](13-cost-safety-trouble.md)

[^git-undo]: Claude Code 官方文档，「Checkpointing」。"A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (确认日期 2026-11-06)
[^one-commit]: Claude Code 官方文档，「Common workflows」。"so the repository needs at least one commit first." https://code.claude.com/docs/en/common-workflows (确认日期 2026-11-06)
[^git-win]: Claude Code 官方文档，「Terminal guide for new users」。"Go to git-scm.com/downloads/win and download the installer" https://code.claude.com/docs/en/terminal-guide (确认日期 2026-11-06)
[^wt-ignore]: Claude Code 官方文档，「Run parallel sessions with worktrees」。"Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." https://code.claude.com/docs/en/worktrees (确认日期 2026-11-06)
[^wt-what]: Claude Code 官方文档，「Run parallel sessions with worktrees」。"A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." / "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." https://code.claude.com/docs/en/worktrees (确认日期 2026-11-06)
[^wt-where]: Claude Code 官方文档，「Run parallel sessions with worktrees」。"By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" / "for an unnamed session, Claude removes the worktree and its branch automatically." / "A named session prompts you first so you can keep the worktree for later" https://code.claude.com/docs/en/worktrees (确认日期 2026-11-06)
[^wt-fresh]: Claude Code 官方文档，「Run parallel sessions with worktrees」。"A worktree is a fresh checkout, so initialize your development environment there" https://code.claude.com/docs/en/worktrees (确认日期 2026-11-06)
[^wt-remove]: Claude Code 官方文档，「Run parallel sessions with worktrees」。"Removing deletes the worktree directory and its branch, along with all the work in them" / "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." https://code.claude.com/docs/en/worktrees (确认日期 2026-11-06)
[^other-session]: Claude Code 官方文档，「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing (确认日期 2026-11-06)
[^loop-what]: Claude Code 官方文档，「Run prompts on a schedule」。"Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." https://code.claude.com/docs/en/scheduled-tasks (确认日期 2026-11-06)
[^loop-idle]: Claude Code 官方文档，「Run prompts on a schedule」。"Tasks only fire while Claude Code is running and idle." / "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (确认日期 2026-11-06)
[^loop-esc]: Claude Code 官方文档，「Run prompts on a schedule」。"`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." https://code.claude.com/docs/en/scheduled-tasks (确认日期 2026-11-06)
[^goal-what]: Claude Code 官方文档，「Keep Claude working toward a goal」。"The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." https://code.claude.com/docs/en/goal (确认日期 2026-11-06)
[^goal-judge]: Claude Code 官方文档，「Keep Claude working toward a goal」。"It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." / "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." https://code.claude.com/docs/en/goal (确认日期 2026-11-06)
[^goal-state]: Claude Code 官方文档，「Keep Claude working toward a goal」。"`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." https://code.claude.com/docs/en/goal (确认日期 2026-11-06)
[^rc-what]: 可以在 Pro·Max·Ultra·Team·Enterprise 套餐中使用，用 API 密钥（[第13章](13-cost-safety-trouble.md)会说明）不能使用。Claude Code 官方文档，「Continue local sessions from any device with Remote Control」。"Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." / "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." https://code.claude.com/docs/en/remote-control (确认日期 2026-11-06)
[^rc-cmd]: Claude Code 官方文档，「Continue local sessions from any device with Remote Control」。"If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" https://code.claude.com/docs/en/remote-control (确认日期 2026-11-06)
[^rc-window]: Claude Code 官方文档，「Continue local sessions from any device with Remote Control」。"The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." https://code.claude.com/docs/en/remote-control (确认日期 2026-11-06)
