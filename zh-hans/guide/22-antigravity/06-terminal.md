# 第6章 在终端里使用——`agy -p` 和悄悄拒绝

> **一句话总结**：`agy` 是 Antigravity 的终端程序，`agy -p "要做的事"` 运行一次就结束。
> 在 `-p` 下，需要许可的事会被**悄悄拒绝**。可是**退出码仍是 0（成功）**，所以很容易把空结果误当成成功。

这一章是根据 2026 年 11 月 1 日确认的 Antigravity 官方文档，以及在 macOS 上运行 `agy` 1.4.12 的结果写的。这本指南是在另一个实践用的 AI 工具里调用并运行了 `agy`。官方 FAQ 说个人套餐不支持这种用法（[第7章](07-safety-choose.md)），所以照着做时，请**直接在终端里**运行 `agy`。**如果你是第一次接触终端，这一章可以跳过。** 终端是什么，在 [Claude Code 第10章](../20-claude-code/10-terminal.md)里讲过了。

## 安装并开始

macOS·Linux 的安装命令是这样的。[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

这条命令会直接运行从互联网上下载的安装程序。所以，**请确认和官方文档（antigravity.google/docs）上写的一模一样，再运行。** Windows 用的命令也在官方文档里。

进入整理工具文件夹，输入 `agy`，就会打开对话界面。[^tui] 如果已经在应用里登录过，就不用浏览器，直接登录。[^keyring] 第一次运行时，会确认**是否信任这个文件夹**（Workspace trust）。[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## 运行模式

在交互式 `agy` 里，用 Shift+Tab 切换运行模式。[^cycle]

| 模式 | 修改文件 | 运行命令 |
|---|---|---|
| `default` | 展示改动内容并确认 | 询问 |
| `accept-edits` | 工作文件夹内自动 | 询问 |

出处：Antigravity 官方文档（只摘录了一部分）[^modes]

终端的默认权限比应用更谨慎。写文件·命令·网络工具之前都会询问，把命令关在围栏里的沙盒默认是关闭的（[第4章](04-permissions-undo.md)）。

<Quiz id="ch606-modes" />

## `agy -p`——问一次就结束

`-p` 是发出一个请求、拿到回答后就结束的方式。因为没有询问的窗口，需要许可的事会按事先定好的规则处理。[^headless] 回答作为正式输出（stdout）输出，进度和错误则走旁路（stderr）。[^stdout]

官方文档说明，工作文件夹内文件的读写自动允许，shell 命令默认是“询问”，所以会被**悄悄拒绝**（soft-deny）。[^policy] 悄悄拒绝不会中断运行，而是以**退出码 0** 结束，只在 stderr 里告知什么被拦住了。[^soft]

<Quiz id="ch606-headless" />

## 这本指南遇到的四个陷阱

这些是在整理工具文件夹里多次运行 `agy -p` 时真实遇到的事。

1. **结果是空的，却显示成功。** 代理想用 shell 命令（`ls`）查看文件夹列表，被拒绝后，**什么也没做出来就结束了。** 退出码是 0。这种事发生了三次。请一定要确认结果文件是不是真的生成了。
2. **在没有信任的文件夹里，连读写也被拒绝。** 官方文档说工作文件夹内的文件自动允许，但在这本指南的练习文件夹里，写入和读取也被拒绝了。原因看起来是这个文件夹还没有被登记为“信任的文件夹”（这本指南的推测）。打开一次交互式 `agy`，在被问到时回答信任这个文件夹，就会登记。[^trusted]
3. **解决：一个模式 + 一句话。** 加上 `--mode accept-edits`，并在请求末尾加上“不要用 shell 命令，只读写文件”，就全部成功了。没有使用允许一切的 `--dangerously-skip-permissions`。官方文档也建议使用缩小范围的允许规则。[^skip]
4. **回答漏掉的文件。** 我请它以只读方式，把 notes 文件夹的文件列表做成表格给我。整理好的文件有 3 个（周会会议记录·临时会议会议记录·周回顾），但表格里**漏掉了临时会议会议记录**，反而放进了空文件 `.gitkeep`。请自己数一数确认的范围。

实际用的命令是这样的。

```bash
cd ~/hello-ai-연습/정리도구
agy -p "列出 notes 文件夹的文件，并用一行告诉我每个文件是用哪个模板（templates 里的哪一个）写的。不要修改文件。回答要简短，只用表格。不要用 shell 命令，只读取文件。" --mode accept-edits
```

结果：[agy -p 输出](/practice/notes/results/antigravity/6장-agy-p-출력.txt)（我电脑里的路径换成了 `~`）

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 运行一次 | `claude -p` | `codex exec` | `agy -p` |
| 默认写文件 | 需要许可 | 只读 | 工作文件夹内自动（文档） |
| 被拦住时 | 拒绝 | 暂停 | 悄悄拒绝，退出码 0 |

出处：这本指南的整理（各个工具的终端章节和实践）

<Quiz id="ch606-pitfalls" />

## 继续对话和用量

终端里的对话记录是**按运行时所在的文件夹**分开的。[^per-folder] 用 `agy -c` 可以直接接上那个文件夹的最后一次对话，也可以用 `/resume` 选择后接着做。[^resume] `/rewind`（或 `/undo`）会把对话退回到前面的消息（[第4章](04-permissions-undo.md)）。文件会不会也跟着退回，官方文档里没有写，所以文件请相信 Git 的记录。

用量用 `/usage` 查看。[^usage]

<Quiz id="ch606-resume" />

## 亲自试一试

1. 确认官方文档的安装命令和上面的命令一样之后再安装（已经有的话，运行 `agy --version`）。
2. 在整理工具文件夹里打开一次交互式 `agy`，被问到是否信任文件夹时回答。
3. 运行上面的只读 `agy -p`，把表里的文件数和 notes 文件夹对着数一数。
4. 如果结果是空的，读 stderr 里的拒绝提示，确认是什么被拦住了。

**连续任务**：第7章会整理费用·数据·安全，并决定怎么搭配使用三个工具。

## 整理

- `agy` 是交互式，`agy -p` 是运行一次就结束。对话记录按文件夹分开。
- 在 `-p` 下，需要许可的事会被悄悄拒绝，退出码是 0。要亲自确认结果文件。
- 在没有信任的文件夹里，文件操作也可能被拦住。把文件夹登记为信任，或者用 `--mode accept-edits`。
- “不要用 shell 命令”这一句话，减少了因拒绝而停下来的情况。回答的范围要自己数。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Headless | 无界面模式 | 不打开对话界面，运行一次的方式 |
| Soft-deny | 软拒绝 | 不中断运行，只悄悄拒绝那个动作 |
| Workspace trust | 工作区信任 | 把这个文件夹登记为信任的步骤 |
| Exit code | 退出码 | 程序结束时留下的成功·失败编号 |

<ChapterDone :chapter="606" />

下一章：[第7章. 费用·数据·安全，以及选择三个工具](07-safety-choose.md)

[^install]: Antigravity 官方文档，《Get started》。"curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^tui]: Antigravity 官方文档，《Get started》。"| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^keyring]: Antigravity 官方文档，《Authenticate》。"If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install （确认日期 2026-11-01）
[^trust]: Antigravity 官方文档，《Get started》。"**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started （确认日期 2026-11-01）
[^cycle]: Antigravity 官方文档，《Choose an execution mode》。"Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes （确认日期 2026-11-01）
[^modes]: Antigravity 官方文档，《Choose an execution mode》。"| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes （确认日期 2026-11-01）
[^headless]: Antigravity 官方文档，《Headless mode》。"Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless （确认日期 2026-11-01）
[^stdout]: Antigravity 官方文档，《Headless mode》。"Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless （确认日期 2026-11-01）
[^policy]: Antigravity 官方文档，《Headless mode》。"Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless （确认日期 2026-11-01）
[^soft]: Antigravity 官方文档，《Headless mode》。"A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless （确认日期 2026-11-01）
[^skip]: Antigravity 官方文档，《Headless mode》。"**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless （确认日期 2026-11-01）
[^per-folder]: Antigravity 官方文档，《Managing conversations》。"When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations （确认日期 2026-11-01）
[^resume]: Antigravity 官方文档，《Managing conversations》。"Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations （确认日期 2026-11-01）
[^usage]: Antigravity 官方文档，《Model quotas (/usage)》。"Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage （确认日期 2026-11-01）
[^trusted]: Antigravity 官方文档，《CLI commands》。"| **`trustedWorkspaces`** | string\[\] | `[]` | Folders you chose to trust when the CLI asked. The CLI adds entries for you. |" https://antigravity.google/docs/cli/reference （确认日期 2026-11-01）
