# 第8章 项目记忆与设置

<Badge type="tip" text="必读" /> 想跟着这个阶段走下去，一定要读这一章。

> **一句话总结**：懒得每次都说的规则，写进 `CLAUDE.md`。必须遵守的规则，做成 `settings.json` 里的拒绝规则。

本章的画面是 2026 年 11 月 6 日在 Linux 上用 Claude Code 2.1.318 运行的结果。

正如在[第6章](06-sessions-context.md)里看到的，新会话不知道以前的对话。所以"会议记录用表格写"这句话，你每次都得重新说。这一章我们把这句话写进文件里。

## CLAUDE.md 里写什么

**CLAUDE.md** 是你写下的持久指令。放在项目文件夹里，在这个文件夹里打开 `claude` 时就会被加载。[^claudemd] 把它想成交给新同事的工作备忘，就容易理解了。

写的标准很简单：只写 Claude 读了文件也无法知道的东西。[^practice] 比如回答用的语言、会议记录的分节结构、保存结果的文件夹。

也有不该写的。

- 文件夹结构的说明。Claude 会自己去读。[^practice]
- 由好几步组成的流程。这类内容适合用[第9章](09-skills-extensions.md)的技能（写下流程、按名字调用的文件）。[^skill-procedure]
- 密码或认证信息

长度的目标是每个文件不超过 200 行。[^claudemd] 也不用堆大写字母或"一定要！！"。强调堆多了，反而容易让规则被过度执行。[^practice]

```text
欠佳的例子：会议记录一定要！！整理得干干净净！！
更好的例子：会议记录只写决定事项、待办事项、下次会议三节。
```

更好的例子可以确认对错。"干干净净"就没法确认。

<Quiz id="ch808-what" />

## 创建并确认 CLAUDE.md

这是练习用的规则（查看文件：[8장-CLAUDE.md.txt](/practice/cli/results/8장-CLAUDE.md.txt)）。用 `/exit` 退出，在终端里进入练习文件夹。Mac 和 Linux 把下面的内容整段粘贴进去。`notes` 文件夹也会一起创建。

```bash
mkdir notes
cat > CLAUDE.md <<'EOF'
# 街角咖啡馆 记录整理规则

- 回答用韩语写。
- 会议记录只写决定事项、待办事项、下次会议三节。
- 待办事项用表格写。列是负责人、待办事项、截止日期。
- 记录里没有的内容不要编造。
- 整理好的文件保存到 notes 文件夹。
EOF
```

粘贴后如果还没运行，就再按一次 Enter。什么都没显示就是成功了。用 `ls` 看看 `CLAUDE.md` 和 `notes` 有没有建好。

Windows PowerShell 用 `mkdir notes` 之后，再用 `notepad CLAUDE.md` 打开记事本。去掉以 `cat` 开头的那一行和 `EOF` 那一行，只填入两者之间的内容。问你是否新建文件时点「是（예）」，用 `Ctrl + S` 保存后关闭。这个方法我们没有实际运行过。

在终端里确认一下新会话是否知道这些规则。这次用 `claude -p`。加上 `-p`，就不会打开对话窗口。它只把一个问题的回答打印在终端里，然后马上结束。想快速确认一下时很方便。详细内容在[第10章](10-headless-automation.md)里讲。

```bash
claude -p "这个文件夹的会议记录规则是什么？用三行回答。"
```

```text
1. 会议记录只写决定事项、待办事项、下次会议三节，记录里没有的内容不编造。
2. 待办事项用包含负责人、待办事项、截止日期三列的表格来写。
3. 回答用韩语写，整理好的文件保存到 notes 文件夹。
```

它回答出了你在对话里从没说过的规则。这说明文件被加载了。要用于所有项目的个人习惯，放在 `~/.claude/CLAUDE.md` 里。[^claudemd]

现在的练习里，直接手写 `CLAUDE.md` 就行。也有自动生成草稿的 `/init` 命令，但现在先不用。

::: details `/init` 什么时候用？（点击展开）
`/init` 是自动生成 `CLAUDE.md` 草稿的命令。不过它会分析代码，找出构建命令、测试方法和项目惯例写进去。[^init] 我们的记录文件夹里没有这些东西，所以自己写更简单。本指南也没有实际运行过它。以后处理代码项目时再试试。
:::

<Quiz id="ch808-make" />

## /memory 与自动记忆

在会话里输入 `/memory`，会显示指令文件的列表。[^memory]

```text
  ❯ Auto-memory  true

  ❯ Project instructions   Checked in at ./CLAUDE.md
    User instructions      Saved in ~/.claude/CLAUDE.md
    Open auto-memory folder
```

第一行的**自动记忆**（Auto memory）是 Claude 根据你的纠正和偏好自己写下的笔记。`CLAUDE.md` 由你来写，自动记忆由 Claude 来写。在本地会话里它默认是打开的。[^memory]

它按项目保存在 `~/.claude/projects/<project>/memory/` 文件夹里。都是普通的 Markdown 文件，随时可以修改或删除。想关掉的话，用 `/memory` 里的开关。[^memory]

你说"记住这个"，它就会存进自动记忆。[^memory] 不过，如果是在这个文件夹里任何时候都要遵守的规则，就直接写进 `CLAUDE.md`。因为是你自己写的，写了什么一清二楚。

<Quiz id="ch808-memory" />

## settings.json 的三个位置

**settings.json** 是改变 Claude Code 行为的设置文件。[^settings] 内容用 JSON 格式写。JSON 是按固定格式写下栏位名和值的文字。在[第7章](07-permissions-undo.md)里做的拒绝规则就在这里面。它可以放在三个地方。[^settings]

| 文件 | 适用范围 |
|---|---|
| `~/.claude/settings.json` | 你电脑上的所有项目 |
| `.claude/settings.json` | 在这个文件夹里工作的所有人 |
| `.claude/settings.local.json` | 只有你，只在这个项目里 |

同一个设置出现在好几个地方时，表格里范围窄的那个胜出。[^settings][^managed] 比如第一行的文件和第三行的文件规定得不一样，就是第三行（只有你，只在这个项目里）胜出。

拒绝规则是例外。在任何一级被拒绝的工具，其他级都不能允许。[^permissions]

- 保存后，大多数情况下不用重启，就会作用到正在运行的会话。[^settings]
- 加载了哪些文件，可以在 `/status` 的 Setting sources 一行里查看。[^settings]
- 不能用结尾逗号和注释。[^json-rule] 手动修改后如果不生效，先检查逗号。

```text
错误的例子：{ "deny": ["Read(./비밀/**)"], }
正确的例子：{ "deny": ["Read(./비밀/**)"] }
```

错误的例子在 `]` 后面多了一个逗号。

<Quiz id="ch808-settings" />

## .claude 文件夹的结构

Claude Code 会从项目文件夹和你主文件夹里的 `~/.claude` 读取指令、设置和记忆。[^folder] 名字以点开头的文件夹平时是隐藏的。用 `ls -a`（PowerShell 用 `ls -Force`）可以看到。

```text
~/hello-ai-연습/터미널/        这个项目
├── CLAUDE.md                  共享指令
├── CLAUDE.local.md            只有你用的指令
└── .claude/
    ├── settings.json          共享设置
    ├── settings.local.json    只有你用的设置
    ├── skills/                这个项目的技能
    └── agents/                这个项目的子代理

~/.claude/                     你的所有项目
├── CLAUDE.md, settings.json   个人指令和设置
├── skills/, agents/           个人技能和子代理
└── projects/                  对话记录和自动记忆
```

`skills/` 和 `agents/` 在[第9章](09-skills-extensions.md)里学。技能是按名字调用的工作说明书，子代理是另外负责旁支工作的帮手。现在只要知道有这些文件夹就行。

不用全部记住。大多数情况下，只改 `CLAUDE.md` 和 `settings.json` 就够了。[^folder]

<Quiz id="ch808-folder" />

## 口头规则与强制规则

这是本章最重要的一节。下面两行看起来差不多，但力量不同。

```text
写在 CLAUDE.md 里：     不读秘密文件夹。
写在 settings.json 里："deny": ["Read(./비밀/**)"]
```

`CLAUDE.md` 里的话，会影响 Claude **打算尝试做什么**。但它改变不了 Claude Code **允许做什么**。权限规则不是由模型，而是由 Claude Code 程序来强制执行的。[^permissions] 拿公司来比方，`CLAUDE.md` 是工作须知，权限规则是门上的锁。

所以真正重要的事，要放进拒绝规则里。[^practice] 可以这样来分。

- 错了改回来就行的事（语气、格式），写进 `CLAUDE.md`。
- 错了就麻烦的事（读秘密文件），用拒绝规则。
- 每次都必须发生的事，用[第11章](11-hooks-statusline.md)的钩子（在固定时刻由 Claude Code 自动运行的命令）。[^hook]

<Quiz id="ch808-enforce" />

## 动手试试

1. 在终端里创建上面的 `CLAUDE.md` 和 `notes` 文件夹，用 `claude -p` 问一下规则。
2. 打开 `claude`，请它"把 @inbox/회의-2026-10-27-주간회의.txt 这份记录整理成会议记录。"你没说要用表格，表格出来了吗？文件保存到 `notes` 里了吗？
3. 打开 `/memory` 和 `/status` 看看，再按 Esc 关闭。
4. 用 `/exit` 退出，在终端里用 `ls -a`（PowerShell 用 `ls -Force`）找到 `.claude` 文件夹。

问问自己：新会话遵守规则了吗？我的规则里，有没有只是口头说说就会出问题的？

## 小结

- `CLAUDE.md` 里只写 Claude 读了也无法知道的东西，并且写成可以确认的样子。
- `/init` 是以代码文件夹为准的。记录文件夹自己写更简单。
- 自动记忆由 Claude 来写，在 `/memory` 里查看和关闭。
- `settings.json` 有三个位置，范围窄的胜出。拒绝在任何位置都胜出。
- 口头规则改变的是尝试，权限规则改变的是允许。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| CLAUDE.md | CLAUDE.md（项目指令文件） | 你写下的持久指令文件 |
| Auto memory | 自动记忆 | Claude 自己写下的笔记 |
| settings.json | 设置文件 | 改变行为的设置文件 |

<ChapterDone :chapter="808" />

下一章：[第9章 技能与扩展](09-skills-extensions.md)

[^claudemd]: Claude Code 官方文档，「How Claude remembers your project」。"CLAUDE.md files: instructions you write to give Claude persistent context." / "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." / "target under 200 lines per CLAUDE.md file." / "Personal preferences for all projects" https://code.claude.com/docs/en/memory （确认日期 2026-11-06）
[^practice]: Claude Code 官方文档，「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." / "Claude reads the repo itself. Only write down what isn't in there." / "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." / "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^skill-procedure]: Claude Code 官方文档，「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （确认日期 2026-11-06）
[^init]: Claude Code 官方文档，「How Claude remembers your project」。"Run `/init` to generate a starting CLAUDE.md automatically." / "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." https://code.claude.com/docs/en/memory （确认日期 2026-11-06）
[^memory]: Claude Code 官方文档，「How Claude remembers your project」。"The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Auto memory is on by default in local sessions." / "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." / "Auto memory files are plain markdown you can edit or delete at any time." / "To toggle it, open `/memory` in a session and use the auto memory toggle" / "Claude saves it to auto memory." https://code.claude.com/docs/en/memory （确认日期 2026-11-06）
[^settings]: Claude Code 官方文档，「Settings files and precedence」。"Settings are the JSON keys that change how Claude Code behaves" / "You, in every project on this machine" / "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" / "You, in this one project only." / "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." / "Settings precedence, highest first: managed settings, command line, project local, shared project, user." / "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" / "Run `/status` inside Claude Code to see which settings sources are active." https://code.claude.com/docs/en/settings （确认日期 2026-11-06）
[^permissions]: Claude Code 官方文档，「Configure permissions」。"If a tool is denied at any level, no other level can allow it." / "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." / "Permission rules are enforced by Claude Code, not by the model." https://code.claude.com/docs/en/permissions （确认日期 2026-11-06）
[^json-rule]: Claude Code 官方文档，「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide （确认日期 2026-11-06）
[^managed]: 如果是公司的电脑，管理员规定的设置（managed settings）优先于这三个。依据是同一份文档里的 "Settings precedence, highest first: managed settings, command line, project local, shared project, user."。https://code.claude.com/docs/en/settings （确认日期 2026-11-06）
[^folder]: Claude Code 官方文档，「Explore the .claude directory」。"Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." / "Most users only edit `CLAUDE.md` and `settings.json`." https://code.claude.com/docs/en/claude-directory （确认日期 2026-11-06）
[^hook]: Claude Code 官方文档，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （确认日期 2026-11-06）
