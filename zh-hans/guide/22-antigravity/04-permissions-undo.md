# 第4章 权限与撤销——四种预设，丢弃要小心

> **一句话总结**：应用的权限用**四个预设**（Request Review、Default、Auto、Turbo）来选。刚开始请从 **Request Review** 或 **Default** 用起。
> Review 窗口里的**丢弃会不经确认直接生效**。终端里有 `/rewind`，但最可靠的安全网仍然是 Git 记录。

本章依据 2026年11月1日确认的 Antigravity 官方文档写成。为什么需要权限，在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)里讲过。本章以个人 Google 账号为准，公司、企业账号的权限界面不同。[^business]

## 四种权限预设

| 预设 | 执行命令 | 什么时候用 |
|---|---|---|
| Request Review | 所有命令都要许可 | 刚开始、需要谨慎的事 |
| Default | 在围栏内不问，要出围栏时才问 | 熟悉之后 |
| Auto (Preview) | 安全的命令自动执行，只问有风险的命令 | 试验功能 |
| Turbo | 不设限制，全部执行 | 几乎不用 |

出处：Antigravity 官方文档（只摘录了一部分）[^presets]

**Turbo** 没有围栏，可以读写整台电脑。[^turbo] 整理笔记用不着它。

修改的地方有三处。[^where]

- 所有项目：**Settings → General → Global Permissions → Permission Preset**
- 单个项目：**Settings → Projects**
- 当前对话：输入框里的权限选择器

项目默认跟随全局设置（**Inherit Global**），也可以给每个项目单独设定。[^inherit] 意思是，信得过的项目可以放宽，信不过的文件夹可以收紧。[^per-project] 个人账号一开始用的是哪个预设，官方文档里没有写。打开应用后请先确认一下。

<Quiz id="ch604-presets" />

## 围栏与默认规则

应用里有**终端围栏**（沙箱），官方文档说它**默认是开着的**。[^sandbox] 不过各预设不一样。Default、Auto 里是开的，Request Review、Turbo 里是关的。[^by-preset] 围栏内的命令只能用工作文件夹和临时文件夹，**不能上网。**[^no-net] `~/.ssh` 或 `.env` 这类敏感文件也被挡住。[^sensitive]

不管哪个预设，也有一些默认规则。

- 项目文件夹**内**的文件读写不会询问。**外面**的文件需要许可。[^files]
- 读取和操作网页，默认是"询问"。[^web]
- 规则冲突时，按 拒绝（Deny）> 询问（Ask）> 允许（Allow）的顺序决定。[^order]

对话中给过的许可可能会保留下来，所以智能体会渐渐学会哪些动作是可以信任的。[^persist] 虽然方便，但请记住自己许可过什么。

**终端（`agy`）的默认值不一样。** 终端在写文件、执行命令、用网页工具之前会询问[^cli-ask]，围栏**默认是关着的。**[^cli-sandbox] 第6章会讲。

<Quiz id="ch604-sandbox" />

## 撤销

**请小心 Review 窗口的丢弃。**「Discard unstaged changes」会**不经确认直接**生效，甚至把没有记录过的新文件也删掉。[^discard] 默认视图里也包含我自己改的内容（[第2章](02-first-task.md)），所以丢弃之前一定要看一下里面有什么。

终端里有 `/rewind`（或 `/undo`），能把对话退回到之前稳定的状态。[^rewind] 名字和 Claude Code 的回退很像，但官方文档只说它撤销的是"对话"。是否连文件也一起撤销，文档里没有写。

应用里似乎也有撤销功能。官方更新记录里提到，"Confirm Undo"确认窗口多了一个只撤销对话的选项。[^undo] 不过**没有找到讲解用法的文档**，本指南也没能在应用里确认。

所以在这一阶段，也沿用 Codex 第4章的同一个习惯。

1. 交代任务之前：用 Git 把当前状态记录下来。
2. 交代任务。
3. 在 Review 窗口用 Agent Edits，只看改动的部分。
4. 满意就再记录一次，不满意就撤回。

<Quiz id="ch604-undo" />

## 亲自动手试试

1. 在 Settings → General → Global Permissions 里确认当前的预设。如果是第一次，就用 Request Review 或 Default。
2. 用 Git 把整理工具文件夹当前的状态记录下来。
3. 请它在第2章的会议记录"最上面加一行'撰写日期：今天的日期'"。
4. 在 Review 窗口用 Agent Edits 查看，确认改动过的那一行。

**连续任务**：第5章要看计划（`/plan`）、定时（`/schedule`、Automations）、浏览器（`/browser`）、目标（`/goal`）。

## 小结

- 应用权限有四个预设。刚开始用 Request Review 或 Default，不要用 Turbo。
- 应用的围栏在 Default、Auto 预设里是开的，会挡住网络。终端默认是关的。
- 项目文件夹里的文件不问，外面的和网页要问。
- Review 窗口的丢弃不经确认直接删除。交代任务之前先用 Git 记录一下。

## 术语解释

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Permission preset | 权限预设 | 一次性定好权限的组合 |
| Sandbox | 沙箱 | 限制命令能动范围的围栏 |
| Discard | 丢弃 | 把改动的内容扔掉 |
| `/rewind` | 回退 | 在终端里把对话退回之前状态的命令 |

<ChapterDone :chapter="604" />

下一章：[第5章. 计划、定时、浏览器、目标](05-plan-schedule.md)

[^business]: Antigravity 官方文档，「Agent settings」。"Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings （确认日期 2026-11-01）
[^presets]: Antigravity 官方文档，「Agent settings」。"**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings （确认日期 2026-11-01）
[^turbo]: Antigravity 官方文档，「Agent settings」。"**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings （确认日期 2026-11-01）
[^where]: Antigravity 官方文档，「Agent settings」。"**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." / "**For a single project**: Override the global preset under **Settings** > **Projects**. Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings （确认日期 2026-11-01）
[^inherit]: Antigravity 官方文档，「Agent settings」。"Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings （确认日期 2026-11-01）
[^per-project]: Antigravity 官方文档，「Antigravity features」。"This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features （确认日期 2026-11-01）
[^sandbox]: Antigravity 官方文档，「Terminal sandbox」。"Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox （确认日期 2026-11-01）
[^no-net]: Antigravity 官方文档，「Agent permissions」。"**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions （确认日期 2026-11-01）
[^sensitive]: Antigravity 官方文档，「Terminal sandbox」。"Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox （确认日期 2026-11-01）
[^files]: Antigravity 官方文档，「Agent permissions」。"**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions （确认日期 2026-11-01）
[^web]: Antigravity 官方文档，「Agent permissions」。"**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions （确认日期 2026-11-01）
[^order]: Antigravity 官方文档，「Agent permissions」。"**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions （确认日期 2026-11-01）
[^persist]: Antigravity 官方文档，「Antigravity features」。"Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features （确认日期 2026-11-01）
[^cli-ask]: Antigravity 官方文档，「Antigravity features」。"The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features （确认日期 2026-11-01）
[^cli-sandbox]: Antigravity 官方文档，「Antigravity features」。"The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features （确认日期 2026-11-01）
[^discard]: Antigravity 官方文档，「Review changes」。"**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes （确认日期 2026-11-01）
[^rewind]: Antigravity 官方文档，「CLI best practices」。"Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices （确认日期 2026-11-01）
[^undo]: Antigravity 官方文档，「Changelog」。"The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog （确认日期 2026-11-01）
[^by-preset]: Antigravity 官方文档，「Terminal sandbox」。"| **Default** | On | Allowed in sandbox; ask outside |" / "| **Turbo** | Off | Allowed without prompting, unrestricted |" https://antigravity.google/docs/sandbox （确认日期 2026-11-01）
