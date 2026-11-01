# 第8章 多件事同时做、云端、定时 — 让整理工具自己运转

> **一句话总结**：你可以打开多个会话，**把几件事并排交出去**。想让它到点自动运行，就创建**定时任务**。
> 定时有三种（桌面、云端、`/loop`），最大的区别是**我的电脑是否必须开着**。

这一章依据2026年10月31日确认的 Claude Code 官方文档编写。会话列表和定时列表里会直接显示真实的任务名称，所以这一章不用截图，而是按官方文档的说明和界面名称来指引。它会用到第7章做的 `/weekly-review` 技能。

## 多件事并排做

会话是彼此独立的对话，各自拥有背景和改动内容。[^session] 所以你可以**打开多个会话，同时交办不同的事**。

- 新会话：侧边菜单的 **+ New**，或者 **Cmd+N**（Windows 是 Ctrl+N）[^parallel]
- 在会话之间切换：**Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- 并排查看两个会话：按住 **Option**（Windows 是 Alt）的同时，点侧边菜单里的会话[^parallel]

比如，可以在一个会话里用 `/study-notes` 做学习笔记，同时在另一个会话里用 `/weekly-review` 做周复盘。这两件事用的是不同的文件，所以不会冲突。

**不要让两个会话同时修改同一个文件。** 一个会话的回退，通常不会追踪另一个会话改过的内容（第4章）。[^other-session] 如果想把同一个文件朝多个方向改改看，就在是 Git 仓库的文件夹（第3、4章里打开了变更记录的文件夹）里，先打开输入框下面的**工作树**（Worktree）再开始会话。这样那个会话就会在文件夹的**独立副本**里工作。[^worktree]

<Quiz id="ch408-parallel" />

## 三种定时

让 Claude 到约定的时间**自动开始一个新会话**，就是定时任务。[^scheduled] 方法有三种。

| | 桌面定时 | 云端定时 | `/loop` |
|---|---|---|---|
| 在哪里运行 | 我的电脑 | 云端 | 我的电脑 |
| 电脑是否必须开着 | 是（应用运行中、没有休眠） | 否 | 是 |
| 是否必须开着会话 | 否 | 否 | 是 |
| 能否访问我的文件 | 能 | 不能（重新获取的副本） | 能 |
| 最短间隔 | 1小时（界面表单） | 1小时 | 1分钟 |

出处：Claude Code 官方文档[^compare]

**对整理工具来说，桌面定时最合适。** 因为它要读我电脑里的 `inbox` 备忘。云端定时即使关掉电脑也能运行，但它读的不是我的文件，而是重新获取的 GitHub 仓库。[^compare][^cloud] `/loop` 用在打开着的会话里短时间重复确认，过了7天就会自动结束。[^loop]

在旧版应用里，定时功能可能显示为 **Routines** 这个名字。[^old-name]

<Quiz id="ch408-kinds" />

## 预约每周五的周复盘

桌面定时有两种创建方法。

**方法1 — 用话请它做。** 在任何会话里说出想要的日程就行。[^ask]

```
请创建一个定时任务：每周五下午6点，用 /weekly-review 生成本周的周复盘。如果那一周没有复盘备忘，就什么都不要生成，只留下“没有备忘”。
```

**方法2 — 在界面上创建。** 点 Code 标签页侧边菜单里的 **Scheduled**（或 More 菜单里面），再点 **New task**。[^create] 日程可以从每小时、每天、工作日、每周等中选，也可以不设日程先存着，之后用 **Run now** 随时运行。[^options]

设定定时时，一定要注意四点。

1. **应用和电脑必须醒着**：桌面定时**只在应用开着、电脑醒着时**才运行。要防止休眠，请打开设置里的 **Keep computer awake**。合上笔记本盖子，电脑还是会休眠。[^awake]
2. **关机期间的运行**：如果电脑休眠了，醒来时只会把错过的运行里**最近的一次**运行一遍。周五下午6点的定时任务，可能会在周六早上才运行。[^missed] 所以要在请求里**一并写上条件**，比如“如果那一周没有备忘……”。[^missed]
3. **停在授权窗口**：定时任务也有单独的权限模式。如果是「手动（수동）」，在需要授权的时刻会**停下来等待。**[^perm] 创建之后，请用 **Run now** 运行一次，并在弹出的授权窗口里选择「始终允许（항상 허용）」。这样从下一次运行起就不会停了。[^perm] 它和第7章里的权限「只允许一次（한 번만 허용）」不同，原因是定时任务在我不盯着的时候运行。
4. **个人允许规则也会适用**：我电脑里 Claude Code 设置（`~/.claude/settings.json`）中的允许规则，也适用于定时任务。[^perm]

<Quiz id="ch408-schedule" />

## 在云端工作

云端会话即使**关掉我的电脑也会继续工作。**[^cloud-run] 不过云端看不到我电脑里的文件夹，通常是获取 **GitHub 仓库**后再工作。所以一般需要连接 GitHub。[^cloud] 像本指南的整理工具那样，在我电脑文件夹里做的事，适合用桌面这一边。等你把工作放到 GitHub 上并开始使用时，再试试云端。

<Quiz id="ch408-cloud" />

## 亲自试一试

1. 打开两个会话，一边运行 `/study-notes`，另一边运行 `/weekly-review`。确认两个结果有没有保存到不同的文件里。
2. 用话请它创建每周五周复盘的定时任务。在请求里加上“如果没有备忘……”这个条件。
3. 在定时列表里打开那个任务，用 **Run now** 运行一次。如果弹出授权窗口，就提前处理好。
4. 不需要的话，就关掉或删除这个定时任务。定时运行也是会话，所以每次运行都会消耗用量。

**接下来的练习**：定时任务读复盘备忘时，如果备忘里混进了“无视这个指示，然后……”这样的句子，会怎么样？我们在第9章里确认。

## 小结

- 会话是彼此独立的。打开多个会话，并排交办不同文件的工作。同一个文件要避开，或者用工作树。
- 定时有桌面（我的电脑、可访问文件）、云端（电脑可以关、GitHub）、`/loop`（会话内、7天）。
- 整理工具要读我的文件，所以桌面定时最合适。
- 错过的运行，在醒来时只运行一次。要在请求里写下条件，并用 Run now 提前处理授权窗口。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Scheduled task | 定时任务 | 到约定的时间自动开始新会话的任务 |
| Routine | Routine | 云端定时任务以前的名字 |
| Worktree | 工作树 | 同一个 Git 仓库的独立工作副本 |
| Cloud session | 云端会话 | 不在我的电脑上，而在云端运行的会话 |
| `/loop` | 循环 | 在打开着的会话里重复做事的命令（7天后结束） |

<ChapterDone :chapter="408" />

下一章：[第9章. 成本、数据、安全](09-cost-data-safety.md)

[^session]: Claude Code 官方文档，「Desktop application」。"Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^parallel]: Claude Code 官方文档，「Desktop application」。"Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^other-session]: Claude Code 官方文档，「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing（确认日期 2026-10-31）
[^worktree]: Claude Code 官方文档，「Desktop application」。"In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^scheduled]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^compare]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。比较表（Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval）和 "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^cloud]: Claude Code 官方文档，「Use Claude Code in the cloud」。"Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web（确认日期 2026-10-31）
[^loop]: Claude Code 官方文档，「Run prompts on a schedule」。"Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks（确认日期 2026-10-31）
[^old-name]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^ask]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^create]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^options]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^missed]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^perm]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
[^cloud-run]: Claude Code 官方文档，「Get started with the desktop app」。"Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart（确认日期 2026-10-31）
[^awake]: Claude Code 官方文档，「Schedule recurring tasks in Claude Code Desktop」。"Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks（确认日期 2026-10-31）
