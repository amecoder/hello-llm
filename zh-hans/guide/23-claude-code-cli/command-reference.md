# 命令词典

> **一句话总结**：把本课程里出现的命令集中到了一个地方。遇到陌生的命令，就到这里查。不需要背下来。

读命令的方法在[第2章](02-shell-basics.md)里。简单说，就是 **名称 · 选项 · 对象** 的顺序。选项以 `-` 或 `--` 开头。

先看看要输入到哪里。光标前面紧挨着的符号如果是 `%`、`$`、`>`，那就是终端；如果是 `❯`，那就是 Claude 输入框。如果行首只看到 `>`、`dquote>` 或 `heredoc>`，说明输入还没结束。按 `Ctrl + C`，再重新粘贴。这本词典的表里大多是在终端里输入的命令。只有最后一节是在 Claude 输入框里输入的。

## 符号

| 符号 | 意思 | 例子 |
|---|---|---|
| `~` | 我的主文件夹 | `cd ~` |
| `.` | 当前文件夹 | `git add .` |
| `..` | 上一级文件夹 | `cd ..` |
| `*` | 任意几个字符（没有也行） | `inbox/회의-*.txt` |
| `\|` | 把前一个命令的输出交给后一个命令 | `cat 笔记.txt \| claude -p "帮我总结"` |
| `>` | 把输出存进文件（覆盖） | `claude -p "帮我总结" > 总结.txt` |
| `>>` | 把输出追加到文件末尾 | `echo 第二行 >> 笔记.txt` |
| `<<'EOF'` | 把 `EOF` 那一行之前的内容原样作为输入交过去 | 见下面的说明 |
| `"…"` | 即使有空格也捆成一整块 | `claude -p "两个词以上"` |
| `;` | 在前一个命令之后接着运行下一个命令 | `pwd; ls` |
| `2>/dev/null` | 在屏幕上隐藏错误文字 | `ls 不存在的文件夹 2>/dev/null` |
| `$?` | 前一个命令的退出码 | `echo $?` |

`>` 会清掉文件内容再重新写。不能被清掉的文件不要用它。`<<'EOF'` 只能在 Mac·Linux 上用。在 Windows PowerShell 里，用记事本来创建文件。

好几章里都用到的下面这种写法，是创建一个文件的一组命令。

```bash
cat > 笔记.txt <<'EOF'
第一行
第二行
EOF
```

`cat > 笔记.txt` 把收到的内容存进 `笔记.txt`。`<<'EOF'` 把直到出现只有 `EOF` 的那一行为止的内容交过去。所以文件里只会存进中间两行。`EOF` 是"到这里结束"的标记。因为加了引号，像 `$HOME` 这样的文字也不会被替换，会原样保存。

## 文件夹和文件

这张表以 Mac·Linux 为准。PowerShell 也认 `ls`、`cd`、`cp`、`mv`、`rm` 这些名称，但选项不同。所以不要在 PowerShell 里直接用 `ls -la` 或 `rm -rf`。PowerShell 命令另外汇总在下面一节。

| 命令 | 作用 |
|---|---|
| `pwd` | 查看当前文件夹 |
| `ls` | 查看文件夹里的列表 |
| `ls -la` | 连隐藏文件一起详细查看 |
| `ls -a` | 连隐藏文件一起查看 |
| `cd 文件夹` | 进入那个文件夹 |
| `mkdir 文件夹` | 创建文件夹 |
| `mkdir -p 甲/乙/丙` | 连中间的文件夹一次创建好 |
| `cp 原文件 目标` | 复制文件 |
| `mv 原文件 目标` | 移动文件 |
| `cat 文件` | 查看文件内容 |
| `rm 文件` | 删除文件 |
| `rm -f 文件` | 即使文件不存在也不报错地删除 |
| `rm -rf 文件夹` | 连同里面的内容一起删除文件夹 |
| `echo 文字` | 输出文字 |
| `sleep 30` | 等 30 秒 |
| `source 文件` | 把文件里的设置应用到当前窗口 |
| `bash 文件` | 依次运行文件里写的命令 |
| `fg` | 回到用 `Ctrl + Z` 暂停的程序 |

`mkdir -p` 的 `-p` 是 parents（父级）的缩写。即使文件夹已经存在也不会报错。

`rm` 不经过回收站。`-r` 是连文件夹里面全部，`-f` 是不询问直接删除的意思。`rm -rf` 无法撤销。输入时一定要再读一遍文件夹名称。

## 安装时用的命令

| 命令 | 作用 |
|---|---|
| `curl 地址` | 下载网络地址上的内容 |
| `curl -fsSL 地址 \| bash` | 下载安装文件并立刻运行 |
| `irm 地址 \| iex` | 在 PowerShell 里下载并立刻运行 |

`-fsSL` 是把四个选项连在一起写。

- `-f`：服务器出错时，不把错误页面交过去。
- `-s`：隐藏进度显示。
- `-S`：即使用了 `-s`，也显示错误。
- `-L`：如果地址搬走了，就跟过去。

`irm` 下载文件，`iex` 运行它的内容。[^irm] 上表的两行都会**把下载的内容原样运行**。所以只对可信的地址使用。

## Windows PowerShell 命令

| 命令 | 作用 |
|---|---|
| `$HOME` | 我的主文件夹 |
| `ls -Force` | 连隐藏文件一起查看 |
| `mkdir 文件夹 -Force` | 文件夹已经存在也不报错，直接跳过 |
| `Get-Content -Encoding UTF8 文件` | 查看文件时不让韩文变成乱码 |
| `Copy-Item 原文件 目标` | 复制文件 |
| `Move-Item 原文件 目标` | 移动文件 |
| `Remove-Item 文件` | 删除文件 |
| `Write-Output 文字` | 输出文字 |
| `notepad 文件` | 用记事本打开文件 |
| `foreach (…) { … }` | 对列表里的每一项运行 `{ }` 里的内容 |
| `if ($LASTEXITCODE -eq 0) { … } else { … }` | 成功就运行前面，失败就运行后面 |

`$LASTEXITCODE` 是刚结束的程序的退出码。`-eq 0` 的意思是"如果等于 0"。0 表示成功。

## claude 命令

在终端里输入。第一个词是 `claude`。

| 命令 | 作用 |
|---|---|
| `claude` | 开始对话 |
| `claude --version` | 查看版本 |
| `claude --permission-mode manual` | 以手动模式启动 |
| `claude -c` | 继续这个文件夹里最近的对话 |
| `claude -r` | 选一个过去的对话打开 |
| `claude --resume 名称` | 直接打开起过名字的对话 |
| `claude --safe-mode` | 关掉自己的设置后启动 |
| `claude purge` | 删除这个文件夹保存的记录和状态（不要拿来练习） |
| `claude -p "请求"` | 问一次就结束 |
| `claude --worktree 名称` | 在单独的工作文件夹里启动 |
| `claude doctor` | 检查安装状态 |
| `claude update` | 更新到最新版本 |
| `claude mcp add --transport http 名称 地址` | 添加远程 MCP 服务器 |
| `claude mcp list` | MCP 服务器列表和连接状态 |
| `claude mcp remove 名称` | 删除 MCP 服务器 |

`-r` 是 `--resume` 的简写。`claude purge` 很难撤销。不要拿它来练手。

和 `-p` 一起用的选项如下。

| 命令 | 意思 |
|---|---|
| `claude -p "请求" --allowedTools "Read,Write"` | 指定不询问就可以用的工具 |
| `claude -p "请求" --max-turns 10` | 接着做事的次数上限 |
| `claude -p "请求" --output-format json` | 用 JSON 格式输出回答 |

`--allowedTools` 里的 `Read` 是读文件，`Write` 是写文件。`--transport http` 的意思是用 HTTP 方式连接的远程服务器。

## git 命令

| 命令 | 作用 |
|---|---|
| `git --version` | 看看有没有 Git |
| `git init` | 开始记录这个文件夹 |
| `git config user.name "名字"` | 设定写进记录里的名字 |
| `git config user.email "邮箱"` | 设定写进记录里的邮箱 |
| `git config core.quotePath false` | 原样显示韩文文件名 |
| `git add .` | 把当前文件夹的改动放进下一次记录 |
| `git status --short` | 简短地查看改动状态 |
| `git commit -m "说明"` | 附上说明，留下记录 |
| `git reset` | 取消放进下一次记录的内容 |
| `git log --oneline` | 一行一行地查看记录 |

`-m` 是 message（消息）的缩写。`--short` 的意思是简短地显示列表。

## Claude 输入框命令

启动 `claude` 之后，在输入框里输入。这里只收集了常用的。完整列表在输入框里输入 `/` 就能看到。

| 命令 | 作用 |
|---|---|
| `/help` | 帮助 |
| `/exit` | 结束 |
| `/rename 名称` | 给会话起名字 |
| `/resume` | 打开过去的对话 |
| `/context` | 查看上下文被什么占着 |
| `/compact` | 把对话总结、缩短 |
| `/clear` | 以空白对话重新开始 |
| `/rewind` | 打开回退菜单 |
| `/permissions` | 查看许可规则 |
| `/usage` | 查看用量 |
| `/model` | 选择模型 |

快捷键在[第5章](05-input-commands.md)里。

[^irm]: Claude Code 官方文档，「Terminal guide for new users」。"`irm` fetches the file and `iex` runs it." https://code.claude.com/docs/en/terminal-guide （确认日期 2026-11-06）
