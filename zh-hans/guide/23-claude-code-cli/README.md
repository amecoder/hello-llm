# 第3阶段 · Claude Code 终端指南

在第2阶段，你是在聊天里**提问并得到答案。** 在本指南里，你要在终端里调用 Claude Code，让 Claude **直接在你电脑的文件夹里读取并修改文件**。
从没打开过终端也没关系。不懂代码也没关系。第1章从打开终端开始，最后你会做出一个用一行命令就能运行的每周整理。

> **本指南依据 2026年11月6日确认的 Claude Code 官方文档（code.claude.com/docs），以及同一天在 Linux 上实际运行 Claude Code 2.1.318 的结果编写。** 为了不混入作者的个人设置，运行时关掉了这些设置。没有在 macOS·Windows 上运行过。这两部分内容以官方文档为依据。没有实际运行过的功能，会在相应位置说明。
> 使用 Claude Code 需要**付费账号**（Pro·Max·Ultra·Team·Enterprise·Console）。功能和命令经常变化。如果和你的界面不一样，请以屏幕上看到的名称为准。

| 章 | 阅读 | 标题 | 你会了解到 |
|---|---|---|---|
| 1 | 必读 | [终端与 Claude Code](01-what-is.md) | 终端是什么，在自己电脑上怎么打开 |
| 2 | 必读 | [终端基础](02-shell-basics.md) | 切换文件夹、处理文件、建好练习文件夹 |
| 3 | 必读 | [安装与登录](03-install-login.md) | 按操作系统安装、登录、确认版本 |
| 4 | 必读 | [第一次会话](04-first-session.md) | 确认信任文件夹、看懂界面、第一份会议记录 |
| 5 | 必读 | [输入技巧与命令](05-input-commands.md) | `@`·`!`·`/`、多行输入、快捷键 |
| 6 | 必读 | [会话与上下文](06-sessions-context.md) | 起名字、继续会话、`/context`·`/compact`·`/clear` |
| 7 | 必读 | [许可与撤销](07-permissions-undo.md) | 权限模式、许可窗口、回退、拒绝规则 |
| 8 | 必读 | [项目记忆与设置](08-memory-settings.md) | CLAUDE.md、设置文件 |
| 9 | 必读 | [技能与扩展](09-skills-extensions.md) | 制作技能、插件·MCP·子代理 |
| 10 | 必读 | [一行运行与自动化](10-headless-automation.md) | `claude -p`、预先许可、`주간정리.sh` |
| 11 | 必读 | [钩子与界面定制](11-hooks-statusline.md) | 变更记录钩子、状态栏、输出风格 |
| 12 | 必读 | [同时工作与远程](12-parallel-remote.md) | Git 第一次记录、worktree、`/loop`、`/goal`、远程控制 |
| 13 | 必读 | [费用·安全·问题解决](13-cost-safety-trouble.md) | 用量、模型、沙箱、数据、出错时的应对 |
| 14 | 必读 | [实践任务与像专家一样使用](14-practice-expert.md) | 任务与检查表、用自己的笔记做每周整理、每周例行 |

遇到陌生的命令，可以到[命令词典](command-reference.md)里查。这里汇总了本课程里的命令、选项和符号，并附上了意思。

## 练习材料

练习在 `~/hello-ai-연습/터미널`（hello-ai 练习/终端）文件夹里，用下面的笔记来做。**内容全部是虚构的**（小咖啡馆「街角咖啡馆」员工瑞妍的一周）。
第2章只放入每周例会的笔记。临时会议的笔记在第13章再放入。

| 文件 | 内容 |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt)（会议-2026-10-27-每周例会） | 乱糟糟的每周例会笔记 |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt)（会议-2026-10-29-临时会议） | 藏着隐藏指令的笔记（第13章安全实验用） |

本指南通过实际运行做出的**成果物**也公开出来。可以和你自己的结果比一比。即使请求一样，结果的样子也会有些不同。

| 章 | 成果物 |
|---|---|
| 4 | [会议记录](/practice/cli/results/4장-회의록.txt) |
| 8 | [CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) |
| 9 | [技能 meeting-notes](/practice/cli/results/9장-스킬-meeting-notes.txt) |
| 10 | [주간정리.sh](/practice/cli/results/10장-주간정리.sh.txt) · [用脚本做出的会议记录](/practice/cli/results/10장-회의록-스크립트로.txt) |
| 11 | [设置文件](/practice/cli/results/11장-settings.json.txt) |

如果想不用终端来使用，请看 [Claude Code 应用指南](/zh-hans/guide/20-claude-code/)。它用桌面应用整理同样的咖啡馆笔记。账号·套餐·聊天功能在[第2阶段 · Claude 指南](/zh-hans/guide/10-claude/)里说明。
