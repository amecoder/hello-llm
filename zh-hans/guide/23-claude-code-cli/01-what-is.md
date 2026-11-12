# 第1章 终端与 Claude Code

<Badge type="tip" text="必读" /> 想跟着这一阶段学下去，一定要读这一章。

> **一句话总结**：终端是用文字让电脑干活的窗口。本课程会带一个从没打开过终端的人安装 Claude Code，最后做到用一行命令整理每周的笔记。[^tested]

本课程的运行结果是在 Linux 上得到的。没有在 macOS·Windows 上运行过，这两部分以官方文档为依据。

一开始不需要做到完美。不懂代码也没关系。把你想要的东西用话说清楚就行。[^no-code]

## 终端是什么

**终端**（Terminal）是不用鼠标，而是**用文字输入命令**来操作电脑的窗口。想象一个有光标在闪的黑色（或白色）窗口就行。[^cursor]

平时你是双击文件夹来打开它。在终端里，你要用文字输入"去这个文件夹"。做的事一样，只是方法不同。

在终端里不能点菜单来选择。要用方向键移动。[^no-click] 一开始可能不习惯，但很快就会熟悉。第2章会一步一步学最需要的几个命令。

<Quiz id="ch801-terminal" />

## 和聊天有什么不同

如果你用过 Claude 的聊天窗口，应该对这样的顺序很熟悉。复制笔记粘贴进去。拿到回答。再把回答复制到文件里。

Claude Code 是在终端里运行的**代理型助手**。[^agentic] 代理（Agent）是不只回答，还会自己一步一步把事情做完的程序。交给它一件事，它会收集上下文、采取行动、再确认结果。[^phases]

把同一件事放在一起比较，就能看出区别。

| | 聊天窗口 | Claude Code |
|---|---|---|
| 交给它笔记 | 自己粘贴 | 自己从文件夹里读 |
| 结果 | 文字回答 | 回答和文件 |
| 收尾 | 我来抄过去 | Claude 来保存 |

Claude Code 会自己读需要的文件。[^reads] 它也能读取并整理已有的文件。[^organize] 所以你可以这样说。

```text
读一下 inbox 里的会议笔记，保存成 회의록.md。回答只要一行。
```

现在不用输入。第4章再做。

因为它直接处理文件，所以也有需要小心的地方。允许它做什么，后面的章节会详细讲。

<Quiz id="ch801-diff" />

## 打开你电脑上的终端

终端本来就装在电脑里。不用另外安装。按你的操作系统打开看看。

- **Mac**：按 `Cmd + Space` 打开 Spotlight 搜索。输入 `Terminal`，按 Enter。[^open-mac] 如果系统是中文，也可以输入 `终端`。
- **Linux**：大多数情况下按 `Ctrl + Alt + T` 就能打开。不行的话，在程序菜单里找"终端"。[^open-linux]
- **Windows**：按 `Win + X`，在菜单里选 **Windows PowerShell** 或 **终端**（Terminal）。[^open-win]

Windows 有 PowerShell 和 CMD 两种窗口。它们用的命令不同，所以要分清。最前面如果看到 `PS C:\` 这样带 `PS` 的，就是 PowerShell；没有 `PS`、以 `C:\` 开头的，就是 CMD。[^ps-cmd] 本课程里的 Windows 命令都以 **PowerShell** 为准。

窗口打开了，今天的事就完成了一半。练习结束后，直接关掉窗口也可以。

<Quiz id="ch801-open" />

## 准备什么

需要三样东西。

1. **付费账号**：免费的 claude.ai 套餐里不包含 Claude Code。[^free] 需要有 Pro、Max 这样的付费账号。[^paid]
2. **合适的电脑**：Mac、Windows、Linux 都可以。操作系统版本和内存要求写在下面的框里。
3. **网络连接**：必须有。[^ram]

::: details 详细说明（点击展开）
- **可以使用的账号**：Pro、Max、Ultra、Team、Enterprise、Console 之一。[^paid]
- **操作系统**：Mac 需要 macOS 13.0 及以上，Windows 需要 Windows 10 1809 及以上。[^os] Linux 支持 Ubuntu 20.04 及以上等版本。[^linux]
- **内存**：需要 4GB 及以上。[^ram]
- **地区**：只能在 Anthropic 支持的国家和地区使用。[^countries]
:::

练习材料由本课程提供。用虚构的咖啡馆笔记来练习，所以不用担心碰到你自己的文件，可以放心开始。

<Quiz id="ch801-ready" />

## 本课程要做出什么

本课程有一条主线。就是**用一行命令运行的每周整理**。

我们用小咖啡馆「街角咖啡馆」员工瑞妍的笔记来练习。把乱糟糟的会议笔记放进文件夹。运行一个脚本（script，按顺序写好命令的文件）。笔记就会一份一份整理成会议记录。

想先看看的话，可以打开[完成的脚本](/practice/cli/results/10장-주간정리.sh.txt)和[这个脚本做出的会议记录](/practice/cli/results/10장-회의록-스크립트로.txt)。现在看不懂也没关系。

之所以能这样做，是因为 Claude Code 有一种**回答一次就结束的运行方式**。[^oneshot] 不用来回对话。用一行把要做的事交给它，它回答后就自己结束。这种方式在第10章学。

如果出了问题，脚本能发现这一点。[^exit-code] 所以很适合交给它那些不需要人盯着的工作。

课程按这样的顺序进行。

- **第1~5章**：终端基础、安装、第一次会话、输入技巧
- **第6~9章**：继续对话、许可与撤销、项目记忆、技能
- **第10~13章**：自动化、钩子、同时工作、费用与问题解决[^bash-only]
- **第14章**：用自己的笔记做每周整理

<Quiz id="ch801-goal" />

## 和应用指南的关系

也有一个桌面应用，给那些不想用终端、想用窗口和按钮的人。[^gui] 本网站的 [Claude Code 应用指南](/zh-hans/guide/20-claude-code/)讲的就是这个应用。

看哪一个，可以这样选。

- **觉得终端有负担**：去看应用指南。现在不是非学终端不可。
- **想用一行命令来跑工作**：继续读本课程。

本课程假设你没有读过应用指南。你可以独自跟着学。它和应用指南用的是同样的街角咖啡馆笔记，所以如果你已经读过，内容会觉得眼熟。

<Quiz id="ch801-app" />

## 动手试试

1. 用上面的方法打开你电脑上的终端。
2. 输入下面的命令，按 Enter。

```bash
claude --version
```

会出现两种结果之一。哪一种都没关系。

- **出现数字**，比如 `2.1.318 (Claude Code)`：说明已经装好了。[^version] 版本号不同也没关系。
- 出现 `command not found` 或 `not recognized`：意思是还找不到它。[^not-found] 根据界面语言，也可能用中文显示。意思是一样的。第3章会安装。这不是坏了。

问问自己。我电脑上的终端是什么？能回答出 Mac 的终端、Linux 的终端、Windows 的 PowerShell 其中之一就行。

## 小结

- 终端是用文字输入命令来操作电脑的窗口。它本来就装在电脑里。
- Claude Code 是自己读取和创建文件夹里文件的代理型助手。
- 需要付费账号。免费套餐里没有。
- Windows 的命令以 PowerShell 为准。确认有没有看到 `PS`。
- 本课程的目标是用一行命令运行的每周整理。觉得终端有负担，也可以去看应用指南。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Terminal | 终端 | 用文字输入命令来操作电脑的窗口 |
| PowerShell | PowerShell | Windows 的终端程序 |
| CMD | 命令提示符 | 和 PowerShell 命令不同的 Windows 旧式命令窗口 |
| Agent | 代理 | 自己一步一步把事情做完的程序 |
| Script | 脚本 | 按顺序写好命令的文件 |

<ChapterDone :chapter="801" />

下一章：[第2章 终端基础](02-shell-basics.md)

[^tested]: 本课程依据 2026年11月6日确认的 Claude Code 官方文档编写。运行结果是同一天在 Linux 上用 Claude Code 2.1.318 运行得到的。为了不混入作者的个人设置，运行时关掉了这些设置。没有在 macOS 和 Windows 上运行过。这两部分的内容以官方文档为依据。这段说明在后面的章节里不再重复。没有实际运行过的功能，会在相应位置说明。
[^bash-only]: 本课程的脚本以 Mac·Linux 的 bash 为准。bash 是 shell（在终端里理解命令的程序）的一种。Mac 的默认 shell 是 zsh，但本课程用 `bash 文件名` 这样的方式，用 bash 来运行脚本。在 Windows PowerShell 里不能原样运行。Windows 不用保存的文件，而是粘贴整段内容来运行。第10章会再讲一次。
[^no-code]: Claude Code 官方文档，「Terminal guide for new users」. "You don't need to know how to code." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^cursor]: Claude Code 官方文档，「Terminal guide for new users」. "A window will appear with a blinking cursor. This is your terminal, where you type commands." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^no-click]: Claude Code 官方文档，「Terminal guide for new users」. "You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^agentic]: Claude Code 官方文档，「How Claude Code works」. "Claude Code is an agentic assistant that runs in your terminal." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^phases]: Claude Code 官方文档，「How Claude Code works」. "When you give Claude a task, it works through three phases: gather context, take action, and verify results." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^reads]: Claude Code 官方文档，「Quickstart」. "Claude Code reads your project files as needed." https://code.claude.com/docs/en/quickstart （确认日期 2026-11-06）
[^organize]: Claude Code 官方文档，「Terminal guide for new users」. "Claude can read and organize files you already have:" https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^open-mac]: Claude Code 官方文档，「Terminal guide for new users」. "Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^open-linux]: Claude Code 官方文档，「Terminal guide for new users」. "On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^open-win]: Claude Code 官方文档，「Terminal guide for new users」. "Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^ps-cmd]: Claude Code 官方文档，「Quickstart」. "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." https://code.claude.com/docs/en/quickstart （确认日期 2026-11-06）
[^paid]: Claude Code 官方文档，「Advanced setup」. "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^free]: Claude Code 官方文档，「Advanced setup」. "The free claude.ai plan does not include Claude Code access." https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^os]: Claude Code 官方文档，「Advanced setup」. "macOS 13.0+" / "Windows 10 1809+ or Windows Server 2019+" https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^linux]: Claude Code 官方文档，「Advanced setup」. "Ubuntu 20.04+" https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^ram]: Claude Code 官方文档，「Advanced setup」. "4 GB+ RAM, x64 or ARM64 processor" / "internet connection required" https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^countries]: Claude Code 官方文档，「Advanced setup」. "Anthropic supported countries" https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^oneshot]: Claude Code 官方文档，「Quickstart」. "Run one-off query, then exit" https://code.claude.com/docs/en/quickstart （确认日期 2026-11-06）
[^exit-code]: Claude Code 官方文档，「Run Claude Code programmatically」. "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." https://code.claude.com/docs/en/headless （确认日期 2026-11-06）
[^gui]: Claude Code 官方文档，「Advanced setup」. "Prefer a graphical interface?" https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^version]: Claude Code 官方文档，「Advanced setup」. "A working installation prints a version number such as `2.1.211 (Claude Code)`." https://code.claude.com/docs/en/setup （确认日期 2026-11-06）
[^not-found]: Claude Code 官方文档，「Troubleshoot installation and login」. "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install （确认日期 2026-11-06）
