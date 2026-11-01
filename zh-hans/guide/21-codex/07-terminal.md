# 第7章 在终端里使用——用一行 `codex exec` 检查整理工具

> **一句话总结**：Codex CLI 是在终端里使用的 Codex。它会读取运行所在文件夹里的 `AGENTS.md` 和技能。
> `codex exec "要做的事"` 只运行一次就结束，而且**默认是只读的**。它和 Claude Code 的 `claude -p` 很像，但这一点不同。

这一章依据 2026年11月1日确认的 Codex 官方文档，以及在 macOS 终端里运行 Codex CLI 0.166.0 的结果写成。**如果你是第一次用终端，可以跳过这一章。** 终端是什么，在 [Claude Code 第10章](../20-claude-code/10-terminal.md)里讲过了。

## 安装并开始使用

官方文档里的安装命令是这样的。[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**请确认安装命令和官方文档（learn.chatgpt.com）上写的一模一样，再去运行。** 因为这是把从网上下载的脚本直接执行的命令。

安装完成后，进入整理工具文件夹，输入 `codex`。第一次请选择 **Sign in with ChatGPT**。[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

终端里的 Codex，把**运行它的文件夹**当作这次对话的项目。[^cwd] 在应用里用 Choose project 选文件夹的事，这里由 `cd` 来代替。

<Quiz id="ch507-install" />

## `codex exec`——问一次就结束

`codex exec` 是这样一种方式：不打开对话画面，只运行一次就结束。[^exec] 我问了和 Claude Code 第10章同样的问题。

```bash
cd ~/hello-ai-연습/정리도구
codex exec "列出 notes 文件夹里的文件，并用一行告诉我每个文件是用哪种模板（templates 里的哪一个）写的。不要修改文件。回答要简短，只用表格。"
```

只出来了干净的回答（完整输出：[7장-codex-exec-출력.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)）。

| notes 文件 | 使用的模板 |
|---|---|
| `공부-2026-10-28-프롬프트-강의.md` | `templates/공부노트.md` |
| `주간회고-2026-10-26.md` | `templates/주간회고.md` |
| `회의록-2026-10-27-주간회의.md` | `templates/회의록.md` |

来源：本指南的实践结果（2026-11-01）。运行过程的记录另外丢弃，只留下了最终回答。

`codex exec` 把进度和最终回答**走不同的路**输出。进度走屏幕旁路（stderr），只有最终回答是正式输出（stdout）。[^stdout] 所以像 `codex exec "…" > 결과.md` 这样用，文件里只会装进最终回答。

**`codex exec` 默认是只读的。** 想让它修改文件，就加上 `--sandbox workspace-write`。[^readonly] 本指南第2、3、5章的练习，也是加了这个选项运行的。

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec` 是**预先定好**许可方式再运行的方式。[^preset] 本指南第5章的练习里，写入 `.agents` 文件夹被拦住时，Codex 没法询问，就那样停住了。需要许可的事，在应用或交互式 `codex` 里做会更方便。

老文章里出现的 `--full-auto` 选项已经不再支持。[^fullauto] 也有把沙箱和许可全部关掉的 `--dangerously-bypass-approvals-and-sandbox` 之类的选项[^yolo]，但整理备忘用不着。

<Quiz id="ch507-exec" />

## 交互式 `codex` 里的命令

用 `codex` 打开交互式界面后，可以使用以 `/` 开头的命令。

| 命令 | 做什么 |
|---|---|
| `/permissions` | 更改权限（应用里的权限菜单） |
| `/import` | 导入 Claude Code、Cursor 的设置 |
| `/resume` | 继续已保存的对话 |
| `/status` | 查看对话信息和剩余额度 |

来源：Codex 官方文档[^permissions][^import][^resume][^status]

结束交互式界面后，想在外面继续，就输入 `codex resume`。[^resume]

`/permissions` 和 `/import` 是**终端这边的命令**。在应用里，用的是输入框下面的权限菜单（第4章）和设置里的 Import 菜单（第3章）。

<Quiz id="ch507-commands" />

## 动手试试

1. 确认官方文档的安装命令和上面的命令一致后再安装（如果已经装了，就输入 `codex --version`）。
2. 进入整理工具文件夹，运行上面那个只读的 `codex exec` 提问。
3. 用 `codex` 打开交互式界面，输入 `/status` 试试。
4. 输入 `$`，或者运行 `/skills`，确认第5章的技能名称是否出现。[^skills]

**接续的课题**：第8章里，我们会整理费用、数据、安全，并确认 Codex 怎么对待藏着隐藏指示的备忘。

## 总结

- 终端里的 Codex 把运行它的文件夹当作项目，读取那个文件夹里的 `AGENTS.md` 和技能。
- 安装命令要确认和官方文档一致再运行。
- `codex exec` 运行一次就结束，默认是只读的。想修改，就加 `--sandbox workspace-write`。
- `codex exec` 是预先定好许可方式再运行的。需要许可的事，在应用或交互式界面里做。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Codex CLI | Codex 命令行版 | 在终端里使用的 Codex |
| `codex exec` | codex 一次性执行 | 运行一次就结束的方式 |
| stdout / stderr | 标准输出 / 标准错误 | 正式输出 / 输出进度和错误的旁路 |

<ChapterDone :chapter="507" />

下一章：[第8章. 费用、数据、安全，以及怎样选工具](08-safety-choose.md)

[^install]: Codex 官方文档，「Codex CLI」。 "curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli （确认日期 2026-11-01）
[^signin]: Codex 官方文档，「Codex CLI」。 "Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli （确认日期 2026-11-01）
[^cwd]: Codex 官方文档，「Projects and chats」。 "Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects （确认日期 2026-11-01）
[^exec]: Codex 官方文档，「Non-interactive mode」。 "Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode （确认日期 2026-11-01）
[^stdout]: Codex 官方文档，「Non-interactive mode」。 "While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode （确认日期 2026-11-01）
[^readonly]: Codex 官方文档，「Non-interactive mode」。 "By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode （确认日期 2026-11-01）
[^fullauto]: Codex 官方文档，「Non-interactive mode」。 "`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode （确认日期 2026-11-01）
[^yolo]: Codex 官方文档，「Agent approvals & security」。 "`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security （确认日期 2026-11-01）
[^permissions]: Codex 官方文档，「Permissions」。 "In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes （确认日期 2026-11-01）
[^import]: Codex 官方文档，「Import from another agent」。 "Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import （确认日期 2026-11-01）
[^resume]: Codex 官方文档，「Projects and chats」。 "Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects （确认日期 2026-11-01）
[^status]: Codex 官方文档，「Pricing」。 "If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing （确认日期 2026-11-01）
[^skills]: Codex 官方文档，「Build skills」。 "In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^preset]: Codex 官方文档，「Non-interactive mode」。 "Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode （确认日期 2026-11-01）

