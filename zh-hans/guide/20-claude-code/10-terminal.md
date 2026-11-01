# 第10章 在终端里使用——用一行命令跑同一个整理工具

> **一句话总结**：终端版 Claude Code 和桌面应用是**同一个引擎**。在同一个文件夹里打开，就**原样沿用 CLAUDE.md、技能和设置**。
> 一行 `claude -p "要做的事"` 就能提问、拿到回答，然后立刻结束。自动化重复性工作时特别有用。

本章依据 2026 年 10 月 31 日确认过的 Claude Code 官方文档，以及在 macOS 终端里实际运行 Claude Code 2.1.316 的结果写成。**如果你是第一次接触终端，可以跳过这一章。** 只用桌面应用，整理工具就够用了。

## 终端是什么

**终端**（Terminal）是不用鼠标，而是**用打字输入命令**来操作电脑的窗口。macOS 用「应用程序 → 实用工具 → 终端」，Windows 用 PowerShell。官方文档里也专门有给第一次打开终端的人看的说明。[^install]

已经有了桌面应用，为什么还要用终端？有两个原因。

- **一行就能完成的事**：可以只抛出一个问题，拿到回答就结束。
- **自动化**：可以从其他程序或脚本里调用 Claude Code。桌面应用没有这种运行脚本的功能。[^no-script]

<Quiz id="ch410-why" />

## 安装并开始

打开终端，把适合你电脑的一条命令粘贴进去。[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**不要把陌生网站上的安装命令直接粘贴进去。** 上面的命令会直接运行从互联网下载的脚本。运行之前，一定要确认**和官方文档（code.claude.com）上写的完全一样**。

安装完成后，进入要工作的文件夹，输入 `claude`。[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

第一次会提示你登录。如果是订阅账号，在浏览器里完成登录就行。[^start] `cd` 的意思是"进入这个文件夹"。这和在桌面应用里选择文件夹是同一回事。

<Quiz id="ch410-install" />

## 基本命令

| 命令 | 作用 |
|---|---|
| `claude` | 以对话式启动（与应用里的会话相同） |
| `claude "要做的事"` | 带着第一个请求，以对话式启动 |
| `claude -p "要做的事"` | 问一次、拿到回答就结束 |
| `claude -c` | 继续这个文件夹里最近的对话 |
| `claude -r` | 选择过去的对话来继续 |

来源：Claude Code 官方文档[^commands]

以对话式启动之后，可以像在应用里一样使用 `/` 命令。`/help` 显示可用的命令，`/resume` 显示过去的对话。[^start]

<Quiz id="ch410-commands" />

## 练习——用一行确认整理工具

在整理工具文件夹里，我们这样运行了一下。

```bash
cd ~/hello-ai-연습/정리도구
claude -p "给我看 notes 文件夹里的文件列表，并一行一行告诉我每个文件是用哪个模板（templates 里的哪一个）写的。不要修改文件。回答要简短，只用表格。"
```

几秒钟后回答出来，随即就结束了（完整输出：[10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)）。

| notes 文件 | 使用的模板 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

来源：本指南的实操结果（2026-10-31）。回答末尾还附上了"确认范围：4/4"。

在应用里做的**模板文件，终端也原样读出来了。** 不过，"确认范围：4/4"是带有一个附加说明的数值，说明是**只比较了每个文件的前 15 行**。连这种附加说明都要读，这个习惯就是第5章的"核对依据"。

CLAUDE.md 和技能，官方文档说明是终端和应用**共用的**。[^same] 想亲自确认，可以打开对话式的 `claude`，输入 `/`，看看第7章的技能名称是否出现。

不过，用 `-p` 一次性跑完的运行方式，**中途无法询问许可。** 需要许可的事，如果没有事先用允许规则许可，就会被拒绝。[^p-deny] 比如像 `claude -p "/weekly-review"` 这样会写文件的技能，写入可能会因为没有许可而被拒绝。所以一开始，请像上面的练习一样，用**只读取的提问**来练习。

<Quiz id="ch410-practice" />

## 在应用和终端之间来回切换

- 两边可以在**同一个文件夹里同时**使用。会话列表是各自独立的，但设置和 CLAUDE.md 是共用的。[^same]
- 想把在终端里进行的对话转到应用里，就在终端里输入 `/desktop`（macOS·Windows x64，订阅登录）。[^to-desktop]
- 反过来，用应用首页的 **「导入 Claude Code CLI 会话」**，可以把在终端里进行过的会话导入应用（第2章首页的提示卡片）。

<Quiz id="ch410-switch" />

## 亲手试一试

1. 亲自确认官方文档的安装命令和上面的一样，然后安装（已经有的话，运行 `claude --version`）。
2. 进入整理工具文件夹，运行上面那条只读的 `claude -p` 提问。
3. 用 `claude` 打开对话式，输入 `/help` 看看。输入 `/`，确认能不能看到第7章的技能名称。
4. 结束对话，用 `claude -c` 接着继续刚才的对话。

**连续任务**：第11章会把到目前为止的功能汇总起来，做一个用**我自己的笔记**从头做出整理工具的任务。

## 小结

- 终端版 Claude Code 和应用是同一个引擎。在同一个文件夹里，共用 CLAUDE.md、技能和设置。
- 安装命令要确认和官方文档上写的完全一样再运行。
- `claude` 是对话式，`claude -p` 是问一次就结束，`claude -c` 是继续。
- `-p` 运行时中途无法询问许可。一开始用只读取的提问来练习。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Terminal | 终端 | 用打字输入命令来操作电脑的窗口 |
| CLI | 命令行界面 | 在终端里使用的程序（Command Line Interface） |
| `cd` | 切换目录命令 | 进入另一个文件夹的命令 |
| `-p` | 打印模式（print） | 问一次、输出回答后就结束的运行方式 |

<ChapterDone :chapter="410" />

下一章：[第11章. 实践任务](11-practice.md)

[^install]: Claude Code 官方文档，「Quickstart」. "To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (确认日期 2026-10-31)
[^start]: Claude Code 官方文档，「Quickstart」. "Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart (确认日期 2026-10-31)
[^commands]: Claude Code 官方文档，「Quickstart」. 命令表："Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart (确认日期 2026-10-31)
[^no-script]: Claude Code 官方文档，「Desktop application」. 功能对比表「Scripting and automation」行的 Desktop 栏："Not available" https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^same]: Claude Code 官方文档，「Desktop application」. "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^to-desktop]: Claude Code 官方文档，「Desktop application」. "To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^p-deny]: Claude Code 官方文档，「Choose a permission mode」. "Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes (确认日期 2026-10-31)
