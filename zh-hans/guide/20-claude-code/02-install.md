# 第2章 安装桌面应用与第一次会话——安装、登录、Code 标签页、选择文件夹、交代第一件事

> **一句话总结**：安装 Claude 桌面应用，打开 **Code** 标签页。在输入框下面一行**选好文件夹**，用平时说话的方式写下要做的事并发送，Claude 就会在那个文件夹里工作。
> 这一章要让它把一份乱七八糟的会议笔记，整理成**按我定的格式写的会议纪要**。这是贯穿第3阶段、不断长大的「按我的方式帮我整理的工具」的第一步。

本章依据 2026 年 10 月 31 日确认过的 Claude Code 官方文档，以及 macOS 桌面应用（韩语界面，付费账号）写成。界面上的名称经常变化。如果和你的界面不一样，请以你屏幕上显示的名称为准。

## 安装并登录

Claude Code **包含在 Claude 桌面应用里面。** 只要安装应用就行，其他程序（开发用的运行工具 Node.js，或者终端版 Claude Code）不需要另外安装。[^quickstart]

1. 在官方文档的安装页面，下载适合你电脑的文件。[^quickstart]
   - **macOS**：一个文件就能同时安装在 Intel 和 Apple 芯片的 Mac 上。
   - **Windows**：有普通 PC（x64）用的安装文件，ARM64 PC 的另有一个。
   - **Linux**：是测试版（试用版），在 Ubuntu、Debian 上用 apt（Linux 的程序安装工具）安装。
2. 运行下载好的文件进行安装。
3. 打开应用，用 **Anthropic 账号**登录。[^quickstart] 如果是个人订阅（Pro·Max·Ultra），用在 claude.ai 上用的账号登录。[^auth]

如果你在第2阶段已经安装了 Claude 应用，可以跳过这一步。如果应用比较旧，请下载最新版。macOS 是菜单栏的 **Claude → 检查更新…**，Windows 是 **Help → Check for Updates…**。[^update]

<Quiz id="ch402-install" />

## 打开 Code 标签页

Claude Code 在应用侧边菜单最上面的 **Code** 标签页里。[^quickstart] 如果标签页只显示图标，把鼠标放上去就能看到名称。[^quickstart] 在 macOS 上，也可以通过菜单栏的 **前往 → Code** 进入。

点 Code 时如果弹出提示，按下面处理。[^quickstart]

- **提示你改用付费套餐**：用 Claude Code 需要有付费订阅（[第1章](01-what-is.md#需要什么——套餐)）。订阅之后再打开。
- **提示你在线登录**：完成登录后重新启动应用。
- **403 错误**（表示访问被拒绝的错误）：请看官方文档里的认证问题排查说明。

在 Code 标签页里打开新会话，会出现这样的界面。

![Code 标签页的新会话界面。① 中间的开始提示卡片（「选择环境」「导入 Claude Code CLI 会话」「开启自动模式」「选择工作文件夹」），② 输入框（「描述任务或提问」），③ 环境「这台电脑」，④ 文件夹「选择…」，⑤ 模型「Opus 5.5」和努力程度「中」，⑥ 权限模式「手动」都标有红色编号](../../../guide/20-claude-code/assets/shot-01-new-session-marked.png)

工作时最常看的地方是**输入框下面一行**。官方文档也说明，发送第一条消息之前，要在这一行选好环境、文件夹、权限模式和模型。[^desktop-start]

| 编号 | 界面名称 | 作用 |
|---|---|---|
| ① | 开始提示卡片 | 只在新会话里能看到，现在可以不用 |
| ② | 输入框 | 写下要做的事并发送的地方 |
| ③ | 这台电脑 | 在哪里工作（环境）。想在我的电脑上做，就保持不动 |
| ④ | 选择… | 在哪个文件夹里工作 |
| ⑤ | Opus 5.5 · 中 | 用哪个模型，思考得多深 |
| ⑥ | 手动 | Claude 哪些事可以不用问就做（权限模式） |

来源：界面名称来自本指南的界面确认（2026-10-31），作用来自官方文档[^desktop-start]

③ 的环境，一开始保持**这台电脑**就行。官方文档里的「Local」（我的电脑）就是这一项。[^quickstart] 在云端工作的方法，在第8章里讲。

模型（⑤）以后也可以更换。[^quickstart] 一开始直接用屏幕上选好的就可以。

::: details 如果输入框上方有「选择环境」，而下面一行没有环境
这是旧的界面布局。官方文档说明，如果新会话的输入框下面看不到环境，就是旧布局（earlier layout）。[^quickstart] 在旧布局里，环境和文件夹要在**输入框上方**选，权限模式和模型要在**下面一行**选。[^desktop-layout] 做的事是一样的。
:::

<Quiz id="ch402-screen" />

## 准备并选择练习文件夹

Claude Code 在**我选的文件夹里面**工作。所以一开始最好另外建一个就算弄坏了也没关系的**练习用文件夹**。官方文档也建议，一开始先从自己很熟悉的小项目入手。[^quickstart]

**练习材料**：这是小咖啡馆「街角咖啡馆」的员工瑞妍一周的笔记（全部是虚构的）。这一章只用一份会议笔记，其余的在后面的章里用。

| 文件 | 内容 |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | 乱七八糟的周会笔记 |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | 听课时写的笔记 |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | 3 天的每日回顾 |

笔记里的日期和星期是为了故事编出来的，所以**和真实的 2026 年日历对不上。** 核对结果时，请看和**笔记里写的**日期、星期是否一致。

1. 在你的电脑上新建一个文件夹 **整理工具（정리도구）**，再在里面建一个 **inbox** 文件夹。
2. 下载上面的 5 个文件，放进 **inbox**。
3. 点 Code 标签页输入框下面一行的 **选择…**（④）。

![文件夹菜单。① 文件夹「选择…」，② 「搜索文件夹…」栏（图中输入了一个没打开过的其他练习文件夹的名字，显示出「没有匹配项」），③ 「打开文件夹…」都标有红色编号](../../../guide/20-claude-code/assets/shot-02-folder-menu-marked.png)

4. 菜单打开后，点最下面的 **打开文件夹…**（③）。官方文档里的「Open folder…」就是这一项。[^quickstart]
5. 在选择文件的窗口里选择 **整理工具** 文件夹，点 **打开**。

菜单上方会显示**最近打开的文件夹**。打开过一次的文件夹，下次可以在 ② 的搜索栏里输入名字直接选。第一次打开的文件夹，会像图里那样显示「没有匹配项」，所以用 **打开文件夹…** 来打开。

选好文件夹后，④ 的位置会显示文件夹的名字。

![选好文件夹之后输入框下面的一行。① 文件夹位置显示「整理工具」](../../../guide/20-claude-code/assets/shot-03-folder-picked-marked.png)

可以这样理解：**工作文件夹 = Claude 能动手的范围。** 所以比起放着我全部文档的大文件夹，选一个只放这次工作所需文件的小文件夹，会更让人放心。

<Quiz id="ch402-folder" />

## 交代第一件事

现在写下要做的事并发送。官方文档的顺序也是一样的。输入想做的事，按 **Enter**，Claude 就会读取文件夹里的文件、修改文件，并运行命令。[^desktop-start]

来并排看看不太好的请求和更好的请求。

```
整理一下会议笔记。
```

```
读一下 inbox 文件夹里的会议笔记，整理成会议纪要。分成"决定的事 / 要做的事（负责人·期限）/ 下次要讨论的事"三部分，保存成 notes 文件夹里的新文件。不要修改原始笔记。
```

第二个请求里，**要读什么、按什么格式整理、保存在哪里、什么不能动**，全都有了。指定了格式，每次的结果就会差不多，也容易检查对不对。这是把第1阶段学过的"指定格式"，原样用在文件夹的工作上（[第1阶段第4章](../00-common/04-prompt-basics.md)）。

![输入请求后的界面。① 输入框里有整理会议纪要的请求，② 权限模式是「手动」](../../../guide/20-claude-code/assets/shot-04-prompt-marked.png)

发送之后，Claude 在做什么会一行一行显示在屏幕上。它有时会列出一个待办清单，一项一项打勾，比如"读取笔记 → 写会议纪要 → 检查原始文件是否保持原样"。

**它在工作的时候也可以插话。** 按停止按钮会立刻停下来；写下要修正的地方并按 **Enter**，就会在不停止当前工作的情况下传达过去。[^desktop-start] 比如补充一句"要做的事请做成表格"，它会从下一步开始照办。

### 它来征求许可的情况

如果权限模式是**手动**（官方文档里的 Manual），Claude 在修改文件或运行命令**之前，会先询问。** 它会展示将要改什么，每次更改你都可以同意或拒绝。[^desktop-modes] 一开始保持手动，一项一项看它想做什么，会更让人放心。权限模式在[第4章](04-permissions-undo.md)里详细讲。

::: details 明明是手动，却没有询问就直接创建了文件
如果你以前在终端里用过 Claude Code，那时设置的内容可能也应用到了应用里。**桌面应用读取的设置文件，和终端版 Claude Code 是同一份。**[^desktop-modes] 比如，如果你加过"写文件不要询问"这样的允许规则，即使是手动模式，这件事也不会询问就直接做。本指南的截图也是在有这种设置的电脑上拍的，所以没有出现许可窗口。
:::

<Quiz id="ch402-first" />

## 检查结果

做完之后，Claude 会整理并展示它做了什么。

![工作完成后的界面。① 填有负责人和期限的待办表格，② 确认没有动原始笔记，都标有红色编号](../../../guide/20-claude-code/assets/shot-05-result-marked.png)

**就算 Claude 说"做完了"，也要亲自检查。** 把原始笔记摊在旁边，这样问问自己。

- 每一件要做的事，都有**负责人和期限**吗？和笔记一致吗？
- 数字（价格、日期）和笔记一样吗？
- 有没有编造笔记里**没有的内容**？
- 原始笔记还是原样吗？

我们把本指南里实际生成的会议纪要和笔记对照了一下，结果如下。

| 笔记里写的 | 会议纪要 |
|---|---|
| 咖啡+饼干套餐 5,500 韩元，试做 2 周 / 折扣暂缓 | 原样搬过来 |
| 俊浩 周五前 成本 / 瑞妍 周三前 文案 / 瑞妍 今天 灯泡 | 日期补上为 10/31（周五）、10/29（周三）、10/27（周一）当天 |
| 新品看了成本再决定 | 另外注明"备忘录里没有写明什么时候决定" |
| 下次会议 11/3 周一上午 10 点 | 原样搬过来 |

来源：本指南的实操结果（2026-10-31）。结果文件：[2장-회의록-2026-10-27-주간회의.txt](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt)（保持 Markdown 格式原样）

**即使是同样的请求，每次的结果也会略有不同。** 表格的样子或者语气和本指南不一样也没关系。如果上面的检查问题你都能回答"是"，就是做好了。

生成的文件在你电脑的 **整理工具/notes** 文件夹里。请用 Finder 或文件资源管理器打开看看。在应用里查看文件和更改内容的方法，在[第3章](03-screen-tour.md)里讲。

<Quiz id="ch402-check" />

## 亲手试一试

1. 创建 **整理工具** 文件夹，把 5 个练习材料放进 **inbox**。
2. 在 Code 标签页里打开新会话，把文件夹选成 **整理工具**。
3. 原样发送上面"更好的请求"，并用 4 个检查问题检查生成的会议纪要。
4. 如果有不满意的地方，试着用一句话让它修改（例如："在待办表格里加一栏'状态'"）。

**接续任务**：如果你有自己实际写过的会议笔记或上课笔记，删掉个人信息后放一份进 **inbox**，发送同样的请求。格式（决定·要做的事·下次讨论）可以按自己的工作改。从[第3章](03-screen-tour.md)起会继续用这个文件夹。

## 小结

- Claude Code 在 Claude 桌面应用的 **Code** 标签页里。只要安装应用并用 Anthropic 账号登录就行。
- 在输入框下面一行选择环境（这台电脑）、文件夹、模型、权限模式。
- 一开始选一个练习用的小文件夹。工作文件夹就是 Claude 能动手的范围。
- 请求里要写明要读什么、格式、保存在哪里、什么不能动。
- 不要轻信"做完了"，要和原始文件对照检查。结果每次都会略有不同。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Session | 会话 | 打开一个文件夹，与 Claude 进行的一次工作对话 |
| Environment | 环境 | Claude 工作的地方。我的电脑（这台电脑）、云端等 |
| Local | 本地 | 我的电脑。界面上是「这台电脑」 |
| Permission mode | 权限模式 | Claude 不用问就可以做的事的范围 |
| Manual | 手动 | 修改文件或运行命令之前每次都询问的模式 |

<ChapterDone :chapter="402" />

下一章：[第3章. 熟悉界面](03-screen-tour.md)

[^quickstart]: Claude Code 官方文档，「Get started with the desktop app」. "Universal build for Intel and Apple Silicon" / "apt or .deb for Ubuntu and Debian" / "For Windows ARM64, download the ARM64 installer. On Linux, install with apt" / "sign in with your Anthropic account." / "Click the Code tab at the top of the sidebar. If the tabs show only icons, hover over one to see its name." / "Prompt to upgrade: you need to subscribe to a paid plan first" / "Prompt to sign in online: complete the sign-in and restart the app" / "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." / "click the first control, the environment selector, and select the top entry in the Local group. Then click the project folder control beside the environment selector, select Open folder…, and choose your project's directory." / "If a new session shows no environment under your prompt box, you have the earlier layout." / "Start with a small project you know well." / "You can change the model later from the model picker." https://code.claude.com/docs/en/desktop-quickstart (确认日期 2026-10-31)
[^desktop-start]: Claude Code 官方文档，「Desktop application」. "Before you send your first message, choose the environment, project folder, permission mode, and model in the row under the prompt box" / "Type what you want Claude to do and press Enter to send. Claude reads your project files, makes changes, and runs commands based on your permission mode." / "click the stop button to interrupt immediately, or type a correction and press Enter to send it without stopping the running action." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^desktop-layout]: Claude Code 官方文档，「Desktop application」. "In the earlier layout, choose the environment and any project folder or repository above the prompt box, and the permission mode and model in the row under it." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^desktop-modes]: Claude Code 官方文档，「Desktop application」. "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
[^auth]: Claude Code 官方文档，「Authentication」. "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (确认日期 2026-10-31)
[^update]: Claude Code 官方文档，「Desktop application」. "Open Claude > Check for Updates… on macOS or Help > Check for Updates… on Windows to update." https://code.claude.com/docs/en/desktop (确认日期 2026-10-31)
