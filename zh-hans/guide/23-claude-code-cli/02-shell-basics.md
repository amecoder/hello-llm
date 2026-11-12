# 第2章 终端基础

<Badge type="tip" text="必读" /> 想跟着这个阶段学下去，一定要读这一章。

> **一句话总结**：终端里真正必需的命令只有几个。用 `pwd` 看自己在哪里，用 `ls` 看有什么，用 `cd` 来回移动。本章最后会建好练习文件夹，并放入笔记。

本章讲的不是 Claude Code，而是终端本身的基本用法。Mac 和 Linux 用同样的命令。Windows PowerShell 不同的地方，会并排写出来。这些 Windows 命令没有实际运行过。

不需要背下来。把这一页开在旁边，跟着做就行。用上两三次，手就记住了。

## 看懂提示符

打开终端，最前面会出现几个字，光标在闪。这叫**提示符**（Prompt）。它表示"我在等你输入命令"。写给 AI 的文字也叫 Prompt（提示词），但这里指的是终端的等待标志。

样子因电脑而异。下面是一个叫瑞妍的人的例子。

```text
seoyeon@macbook ~ %
seoyeon@laptop:~$
PS C:\Users\seoyeon>
```

第一行是 Mac，第二行是 Linux，第三行是 Windows PowerShell 常见的样子。看法很简单。先是用户名和电脑名，然后是当前所在的文件夹，最后是 `%`、`$`、`>` 这样的符号。

**最后的这个符号不是你要输入的字。** 在符号后面输入命令，按 Enter 就会运行。结果出来后，提示符再次出现，就说明已经准备好接收下一条命令了。

命令要在英文输入状态下输入。如果 `pwd` 变成了别的文字，按切换输入法的键（中文输入法里通常是 `Shift`）再输入一次。Mac 通常用 `Caps Lock` 或 `Ctrl + Space` 切换。

有些命令什么也不显示。这不是出错。多数情况下是悄悄成功了。

<Quiz id="ch802-prompt" />

## 现在在哪里、有什么——pwd 和 ls

终端始终**在某一个文件夹里**。就像在资源管理器或 Finder 里打开了一个文件夹。

`pwd` 会告诉你当前所在的文件夹。它是"print working directory（显示工作文件夹）"的缩写。

```bash
pwd
```

如果是 Mac，会显示成这样。名字因你的电脑而不同。

```text
/Users/seoyeon
```

`ls` 显示当前文件夹里有什么。它是"list（列表）"的缩写。

```bash
ls
```

这两个命令在 PowerShell 里也能用同样的名字。只是显示的样子有点不同。

这两个命令什么都不会改变。觉得自己迷路了，随时都可以输入看看。

<Quiz id="ch802-where" />

## 路径和 ~

**路径**（Path）是文件或文件夹的地址。Mac 和 Linux 用 `/` 分隔文件夹，Windows 用 `\`。在韩语键盘和界面上，`\` 可能显示为 `₩`。它们是同一个字符。

| 操作系统 | 自己的主文件夹路径示例 |
|---|---|
| Mac | `/Users/seoyeon` |
| Linux | `/home/seoyeon` |
| Windows | `C:\Users\seoyeon` |

**主文件夹**（Home 文件夹）是你账号的起始文件夹。打开终端，通常就从这里开始。这个地址的简写符号是 `~`（波浪号）。所以 `~/hello-ai-practice` 的意思是"我的主文件夹里的 hello-ai-practice（hello-ai 练习）文件夹"。[^win-home]

写路径有两种方式。

- **完整地址**：像 `~/hello-ai-practice/terminal` 这样，在哪里输入都指向同一个地方。
- **以当前位置为准**：写成 `inbox`，就是"当前文件夹里的 inbox"。

`..` 表示上一级文件夹。`.` 表示当前文件夹。

如果名字里有空格，要像 `"会议 笔记"` 这样用引号括起来。因为终端会把空格理解为"下一个词从这里开始"。本课程的文件夹名里不放空格，也是这个原因。

<Quiz id="ch802-path" />

## 怎么读命令

命令由几个词组成。词和词之间用空格分开。即使是第一次见的命令，按顺序拆开来读，也能看出意思。

```bash
ls -la ~
```

这个例子是 Mac·Linux 的命令。在 Windows PowerShell 里写成 `ls -Force ~`。

| 片段 | 名称 | 意思 |
|---|---|---|
| `ls` | 命令名 | 做什么：看列表 |
| `-la` | 选项 | 怎么做：连隐藏文件一起详细显示 |
| `~` | 对象 | 对哪里做：主文件夹 |

选项是改变命令动作的开关。Mac·Linux 有两种样子。

- **短选项**：一个 `-` 加一个字母。`-l` 和 `-a` 可以合起来写成 `-la`。
- **长选项**：两个 `--` 加一个单词。像 `--version` 这样，意思一看就懂。

PowerShell 是像 `-Force` 这样，一个 `-` 加一个单词。即使意思相同，选项名也可能不同。所以上面的 `ls -la ~` 在 PowerShell 里写成 `ls -Force ~`。`claude` 和 `git` 的选项在哪个操作系统上都一样。

选项后面有时还会跟一个值。比如 `--max-turns 10` 的意思是"次数上限是 10"。这个选项现在不用记。

用引号括起来的部分是一个整体。在 `claude -p "总结一下 notes 里的笔记"` 里，引号里面即使有空格，也算作一个词。

不需要记住所有命令。本课程的命令都汇总在[命令词典](command-reference.md)里。看到陌生的片段就去查一下。

<Quiz id="ch802-anatomy" />

## 移动、新建、复制——cd、mkdir、cp

`cd` 用来移动到别的文件夹。它是"change directory（切换文件夹）"的缩写。下面的练习文件夹会在本章最后建好。现在只读一读就行。

```bash
cd ~/hello-ai-practice
cd ..
cd ~
```

从上往下依次是：去练习文件夹、往上走一级、回到主文件夹。在 PowerShell 里也能原样使用。

`mkdir` 用来新建文件夹。它是"make directory（创建文件夹）"的缩写。在 Mac 和 Linux 上写成 `mkdir -p`，就会把中间的文件夹也一次建好。PowerShell 的 `mkdir` 不加 `-p` 也会这样做。实际命令在本章最后的练习里输入。

`cp` 用来复制文件。它是"copy（复制）"的缩写。按**复制什么、复制到哪里**的顺序写。

不太好的例子。缺了复制到哪里。

```bash
cp 笔记.txt
```

更好的例子。复制什么、复制到哪里都写全了。

```bash
cp 笔记.txt inbox/
```

因为是复制，原来的文件会原样留下。不过，如果已经有同名的文件，可能会不声不响地被覆盖。复制之前先用 `ls` 看一眼。

<Quiz id="ch802-move" />

## 让手更轻松的按键

不需要把命令全部记住、全部手打。只要知道下面五个，就会轻松很多。

**粘贴和复制。** 在终端里，按键和平时有点不同。复制时，先用鼠标拖动选中终端里的文字，再按键。

| 要做的事 | Mac | Linux | Windows PowerShell |
|---|---|---|---|
| 粘贴 | `Cmd + V` | `Ctrl + Shift + V`[^paste] | `Ctrl + V`、右键单击[^paste-win] |
| 复制 | `Cmd + C` | `Ctrl + Shift + C` | 选中后 `Ctrl + C`、右键单击 |

不同程序可能会有些差别。这一页上的命令可以复制后粘贴。这样能减少打错字。粘贴后如果还没有运行，再按一次 Enter。

现在试试。复制上面的 `pwd`，粘贴到终端里，按 Enter。

**向上方向键。** 刚才输入的命令会再出现。多按几次，就会回到更早的命令。想稍微改一下再运行时很方便。按一下看看，刚才输入的 `pwd` 有没有再出现。

**Tab。** 只输入名字的前半部分，按 Tab，就会帮你补全剩下的部分。输入到 `cd ~/Doc`，按 Tab 试试。如果没有 `Documents` 文件夹，就用 `ls` 里看到的别的文件夹名来试。对长的韩文文件名特别有用。如果韩文不太好补全，复制名字粘贴进去就行。

**Ctrl+C。** 让正在运行的命令停下来。如果觉得终端卡住了，先按这个。下面的命令会等待 30 秒。在 Mac、Linux、PowerShell 上都能用。

```bash
sleep 30
```

不用等，按 `Ctrl + C` 试试。提示符会马上回来。在 Mac 上也是 `Ctrl`，不是 `Cmd`。没有选中文字时，Ctrl+C 的意思是"停下"。Windows 只有在选中文字时才是复制。

<Quiz id="ch802-keys" />

## 动手试试

建好练习文件夹，并放入笔记。这个文件夹整个课程都会用到。

**1. 建好练习文件夹并进入。**

Mac·Linux 这样输入。

```bash
mkdir -p ~/hello-ai-practice/terminal/inbox
cd ~/hello-ai-practice/terminal
pwd
ls
```

Windows PowerShell 这样输入。

```powershell
mkdir $HOME\hello-ai-practice\terminal\inbox
cd $HOME\hello-ai-practice\terminal
pwd
ls
```

Mac·Linux 命令里的 `-p` 是让它把中间的文件夹也一次建好的选项。没有这个选项的话，如果 `hello-ai-practice` 文件夹不存在，就会出错。`$HOME` 是 PowerShell 里指代主文件夹的名字。`pwd` 的结果以 `terminal`（终端）结尾，`ls` 里能看到 `inbox`，就成功了。

**2. 下载练习笔记。**

在浏览器里右键单击下面的链接，选「链接另存为（다른 이름으로 링크 저장）」。不同浏览器的叫法会有点不同。保存位置就保持默认的下载文件夹。

- [meeting-2026-10-27-weekly.txt](/practice/zh-hans/notes/inbox/meeting-2026-10-27-weekly.txt)（会议-2026-10-27-每周例会）

这些都是虚构的笔记。日期和星期也是为了故事编出来的，所以和真实日历对不上。在后面的章节里，Claude 可能会指出这一点。它说的没错，不用惊讶。

**3. 把笔记复制到 inbox。**

Mac·Linux 这样输入。

```bash
cp ~/Downloads/meeting-2026-10-27-weekly.txt inbox/
```

Windows PowerShell 这样输入。

```powershell
cp $HOME\Downloads\meeting-2026-10-27-weekly.txt inbox\
```

Mac 的 Finder 里即使显示为「下载」，实际的文件夹名也是 `Downloads`。如果 Linux 用的是韩语界面，可能是 `~/다운로드`。这时把 `~/Downloads` 换成 `~/다운로드` 再输入。

**4. 看看有没有放进去。**

```bash
ls inbox
cat inbox/meeting-2026-10-27-weekly.txt
```

`cat` 会把文件内容显示在屏幕上。如果在 PowerShell 里韩文显示成乱码，就这样输入。

```powershell
Get-Content -Encoding UTF8 inbox\meeting-2026-10-27-weekly.txt
```

问问自己。`pwd` 的结果是我以为的那个文件夹吗？`ls inbox` 里能看到笔记文件吗？如果两个都是，就准备好进入下一章了。

**卡住的时候**：如果出现 `No such file or directory` 或"找不到"之类的话，大多是位置或名字不对。用 `pwd` 看看位置，用 `ls ~/Downloads` 看看文件是不是真的在。

## 小结

- 提示符表示"在等命令"。最后的符号不用输入。
- `pwd` 显示当前位置，`ls` 显示列表。它们什么都不改变，可以经常用。
- `~` 是自己的主文件夹，`..` 是上一级。
- `cd` 是移动，`mkdir` 是新建文件夹，`cp` 是按"复制什么、复制到哪里"来复制。
- 向上方向键是之前的命令，Tab 是补全名字，Ctrl+C 是停止。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Prompt | 提示符 | 表示终端正在等待命令的标志 |
| Path | 路径 | 文件或文件夹的地址 |
| Home | 主文件夹 | 自己账号的起始文件夹（简写为 `~`） |
| `pwd` | 显示当前目录 | 显示当前所在文件夹的命令 |
| `ls` | 列出文件 | 显示文件夹里列表的命令 |
| `cd` | 切换目录 | 移动到别的文件夹的命令 |
| `mkdir` | 新建目录 | 新建文件夹的命令 |
| `cp` | 复制 | 复制文件的命令 |
| `cat` | 显示文件内容 | 把文件内容显示在屏幕上的命令 |

<ChapterDone :chapter="802" />

下一章：[第3章 安装与登录](03-install-login.md)

[^paste]: Claude Code 官方文档，「Terminal guide for new users」. "Copy this line, paste it into your terminal (`Cmd + V` on macOS, `Ctrl + Shift + V` on Linux), and press `Enter`:" https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^paste-win]: Claude Code 官方文档，「Terminal guide for new users」. "Copy this line, paste it into PowerShell with `Ctrl + V` or right-click, and press `Enter`:" https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
[^win-home]: 后面章节里出现的 `~/.claude`，在 Windows 上是 `C:\Users\用户名\.claude`。Claude Code 官方文档，「Settings files and precedence」. "On Windows, `~/.claude` means `%USERPROFILE%\.claude`." https://code.claude.com/docs/en/settings （确认日期 2026-11-06）
