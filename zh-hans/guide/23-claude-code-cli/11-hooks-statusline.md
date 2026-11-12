# 第11章 钩子与界面定制

<Badge type="tip" text="必读" /> 想跟着这个阶段学下去，一定要读这一章。

> **一句话总结**：钩子（Hook）是在固定时刻由 **Claude Code 亲自**运行的命令。它不交给 AI 去判断，所以用在必须发生的事情上。

本章的界面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 运行的结果。

我们来做一个每次文件被修改就留下记录的钩子。还会把界面底部的状态栏和回答的语气调成适合你的样子。

## 钩子是什么

钩子是你事先定好的 Shell 命令。Claude Code 会在固定的时间点运行这条命令。所以你不用指望 Claude "记得去做"。[^hook-what]

和[第8章](08-memory-settings.md)的 CLAUDE.md 放在一起比较，就能看出区别。

- **不太好的例子**：在 CLAUDE.md 里写上"修改文件后，在 changelog.txt 里记一行"。负责遵守的是 Claude。它可能会漏掉。
- **更好的例子**：把同样的事做成钩子。负责遵守的是 Claude Code。每次修改文件后，命令都会运行。

每次都必须发生的事，就用钩子。[^every-time] 不过也不用把规则全都搬到钩子里。语气、文档格式这类规则，用 CLAUDE.md 就够了。钩子只用在"漏掉就麻烦的事"上。

<Quiz id="ch811-what" />

## 制作变更记录钩子

钩子是在设置文件里加上 `hooks` 这一项来制作的。[^hook-add] 本章把它放进项目设置文件 `.claude/settings.json`。就是放着[第7章](07-permissions-undo.md)拒绝规则的那个文件。

手动修改的话，很容易因为一个逗号出错。所以我们一次性覆盖整个文件。第7章的拒绝规则也原样包含在下面的内容里，不会消失。

用 `/exit` 退出，在终端的练习文件夹里把下面整段粘贴进去。粘贴后如果还没运行，就再按一次 Enter。

会出现好几个陌生的项目名，但现在不用全都懂。大块只有三个。

- `permissions`：第7章做的拒绝规则
- `hooks`：这次要做的变更记录钩子
- `statusLine`：界面底部的状态栏

详细意思在代码框下面逐一解释。

```bash
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./secret/**)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "date '+%F %T 文件已被修改' >> changelog.txt" }
        ]
      }
    ]
  },
  "statusLine": { "type": "command", "command": "echo 街角咖啡馆 整理中" }
}
EOF
```

Windows PowerShell 用 `notepad .claude\settings.json` 打开记事本。删掉原来的内容，从上面的代码框里去掉以 `cat` 开头的那一行和 `EOF` 那一行，只放中间的内容。按 `Ctrl + S` 保存后关闭。这个方法我们没有实际运行过。

我们把陌生的词逐个解释一下。最后的 `statusLine` 项，放到后面的「状态栏」一节再看。

- `PostToolUse`：表示 Claude 使用工具**之后**。已经完成的事无法撤回。能在使用工具**之前**插进去阻止的时间点是 `PreToolUse`。[^post]
- `matcher`：决定对哪些工具做出反应。`Write|Edit` 是创建文件的工具和修改文件的工具。这里的 `|` 是"或者"的意思。Claude 用 Shell 命令改动的文件，这个钩子不会做出反应。
- `command`：要运行的命令。把当前的日期、时间和一句话追加到 `changelog.txt`（变更记录.txt）的末尾。把命令拆开来看是这样的。
  - `date`：打印当前日期和时间的命令。
  - `'+%F %T 文件已被修改'`：要打印的格式。`%F` 的位置填日期（`2026-11-06`），`%T` 的位置填时间（`11:19:11`）。
  - `>> changelog.txt`：把结果追加到那个文件的末尾。第10章的 `>` 会覆盖文件，`>>` 是接在后面写。如果文件不存在，就新建一个。

不覆盖文件，也可以用语言请 Claude 帮忙。[^ask-claude] 如果是像你自己的项目那样已经写有设置的文件，这个方法更好。`.claude` 文件夹是特别保护的地方，这时可能会弹出许可窗口。[^protected]

```text
请在 .claude/settings.json 里添加一个钩子。让 Claude 每次使用 Write 或 Edit 工具之后都运行下面的命令。不要删掉已有的内容。
date '+%F %T 文件已被修改' >> changelog.txt
```

如果已经有 `hooks` 项，不要整个替换，而是在里面再加一个。[^sibling] 在 Windows 上我们没有运行过这个钩子。`date` 命令是 bash 格式，可能无法直接运行。这种时候，请 Claude 把它换成适合你环境的命令。

现在来测试。启动 `claude`，发送下面的内容。

```text
在 notes 文件夹里新建 hook-test.md，只写一行"钩子测试"。
```

完成后输入 `! cat changelog.txt`。实际运行时，留下了这样一行。

```text
2026-11-06 11:19:11 文件已被修改
```

完整的设置文件可以在 [ch11-settings.json.txt](/practice/zh-hans/cli/results/ch11-settings.json.txt) 里查看。

<Quiz id="ch811-log" />

## 确认钩子

钩子有没有注册上，在会话里输入 `/hooks` 查看。[^hooks-menu] 这个界面是**只读的**。不能在这里创建或修改钩子。界面上自己就是这么写的。

```text
  Hooks
  1 hook on 1 event

  This menu is read-only. To add or change a hook, edit settings.json or ask Claude. Learn more

    PostToolUse  after tool execution
  ❯ [Project] date '+%F %T 文件已被修改' >> changelog.txt   Write|Edit · command

    All events

  Enter to view · Esc to close
```

如果钩子没有运行，先问问自己：`/hooks` 里能看到吗？在 `PostToolUse` 下面吗？[^hooks-menu] 如果还是没有，就检查设置文件的语法。设置文件里**不能有末尾多出来的逗号和注释。**[^json] 重新用前面的代码框覆盖一次是最快的。

<Quiz id="ch811-check" />

## 别人给的文件夹里的钩子

如果是你自己做的练习文件夹，风险很低。要小心的是从别人那里拿到的文件夹。

别人给的文件夹里，可能有别人写好的钩子。[^hook-share] 用 `claude -p` 运行时，即使是你从没回答过"信任"的文件夹，那些钩子也会运行。[^p-untrusted] 所以最安全的想法是：那些钩子会在你的电脑上、用你的账号运行。拿到的文件夹，在启动 Claude **之前**先读一读设置文件。这条建议不是官方文档里的话，而是本指南的判断。

```bash
cat .claude/settings.json
```

看看 `hooks` 和 `statusLine` 项里有什么命令。看不懂的话，就在那个文件夹以外的地方用聊天问一问。[第9章](09-skills-extensions.md)的插件也能以你的权限运行代码。[^plugin-run] 用同样的态度对待就行。

<Quiz id="ch811-trust" />

## 状态栏

状态栏（Status line）是在 Claude Code 界面底部，显示你指定的 Shell 脚本输出的那一行。[^status-what] 在设置文件里加上 `statusLine` 项就行。[^status-set] 前面覆盖的设置里已经有下面这一行了。不用另外修改。

```json
"statusLine": { "type": "command", "command": "echo 街角咖啡馆 整理中" }
```

实际运行后，输入框下面显示成这样。

```text
  街角咖啡馆 整理中
```

在接受文件夹信任窗口之前，状态栏是空的。[^status-trust] 因为这是运行 Shell 命令的功能，所以和钩子遵守同样的信任规则。上一节的注意事项也同样适用。

也可以在 `/statusline` 后面用文字写出想要的样子来制作。[^status-nl] 这个功能本指南没有实际运行过。

<Quiz id="ch811-statusline" />

## 输出风格与主题

一开始不用改。需要的时候再拿出来用。这两样本指南都没有实际运行过，下面是官方文档说明的内容。

**输出风格**（Output style）决定一个会话里所有回答的角色、语气和格式。比如 `Concise` 会先说结果，减少开场白和总结。[^style-what]

```text
/output-style Concise
```

**主题**是颜色。如果界面上的字看不清，就用 `/theme` 选适合你终端的颜色。[^theme]

<Quiz id="ch811-style" />

## 动手试一试

1. 用 `/exit` 退出，在终端里粘贴设置代码框。
2. 启动 `claude`，看看输入框下面有没有显示 `街角咖啡馆 整理中`。
3. 输入 `/hooks`，确认它出现在 `PostToolUse` 下面，然后按 Esc 关闭。
4. 发送钩子测试的请求后，用 `! cat changelog.txt` 看看是不是多了一行。

问问自己：钩子真的运行了吗？不要看 Claude 的回答，而是亲自打开 `changelog.txt` 再回答。

## 小结

- 钩子是 Claude Code 在固定时间点运行的命令。用在必须发生的事情上。
- `/hooks` 是只读的。创建和修改要在设置文件里进行。
- 设置文件的 JSON 里不写末尾逗号和注释。
- 别人给的文件夹，启动前先读 `.claude/settings.json`（本指南的判断）。
- 状态栏、输出风格、主题，只在需要时再改。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Hook | 钩子 | 在固定时间点自动运行的命令 |
| `PostToolUse` | 工具使用后 | 表示使用工具之后的时间点 |
| `PreToolUse` | 工具使用前 | 表示使用工具之前的时间点 |
| JSON | JSON | 设置文件使用的文字格式 |
| Status line | 状态栏 | 在界面底部显示你的命令输出的一行 |
| Output style | 输出风格 | 回答的角色、语气、格式的组合 |

<ChapterDone :chapter="811" />

下一章：[第12章 同时工作与远程](12-parallel-remote.md)

[^hook-what]: Claude Code 官方文档，「Automate actions with hooks」。"Hooks are user-defined shell commands." / "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^every-time]: Claude Code 官方文档，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (确认日期 2026-11-06)
[^hook-add]: Claude Code 官方文档，「Automate actions with hooks」。"To create a hook, add a `hooks` block to a settings file." https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^post]: Claude Code 官方文档，「Automate actions with hooks」。"`PostToolUse` hooks can't undo actions since the tool has already executed." / "Before a tool call executes. Can block it" https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^ask-claude]: Claude Code 官方文档，「Automate actions with hooks」。"You can also ask Claude to write the hook for you by describing what you want in the CLI." https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^protected]: `.claude` 文件夹是受保护的路径，写入不会被直接批准。手动模式下会弹出许可窗口，自动模式下由另一个预先审查行为的 AI 来判断。Claude Code 官方文档，「Choose a permission mode」。"Writes to a small set of paths are never auto-approved" / 表格的 `auto` 行："Routed to the classifier" https://code.claude.com/docs/en/permission-modes (确认日期 2026-11-06)
[^sibling]: Claude Code 官方文档，「Automate actions with hooks」。"If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^hooks-menu]: Claude Code 官方文档，「Automate actions with hooks」。"Type `/hooks` at the Claude Code prompt to open the hooks browser." / "Run `/hooks` and confirm the hook appears under the correct event" https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^json]: Claude Code 官方文档，「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^hook-share]: Claude Code 官方文档，「Automate actions with hooks」。`.claude/settings.json` 一行中"是否共享"一栏："Yes, can be committed to the repo" https://code.claude.com/docs/en/hooks-guide (确认日期 2026-11-06)
[^p-untrusted]: Claude Code 官方文档，「Run Claude Code programmatically」。"Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." https://code.claude.com/docs/en/headless (确认日期 2026-11-06)
[^plugin-run]: Claude Code 官方文档，「Plugins overview」。"Whatever the tier, a plugin you install can run code with your user privileges." https://code.claude.com/docs/en/plugins/overview (确认日期 2026-11-06)
[^status-what]: Claude Code 官方文档，「Customize your status line」。"The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." https://code.claude.com/docs/en/statusline (确认日期 2026-11-06)
[^status-set]: Claude Code 官方文档，「Customize your status line」。"Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." https://code.claude.com/docs/en/statusline (确认日期 2026-11-06)
[^status-trust]: Claude Code 官方文档，「Customize your status line」。"Until you accept the workspace trust dialog, the status line stays blank." / "Because `statusLine` executes a shell command" https://code.claude.com/docs/en/statusline (确认日期 2026-11-06)
[^status-nl]: Claude Code 官方文档，「Customize your status line」。"The `/statusline` command accepts natural language instructions describing what you want displayed." https://code.claude.com/docs/en/statusline (确认日期 2026-11-06)
[^style-what]: Claude Code 官方文档，「Output styles」。"An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." / "Responses lead with the result and leave out preamble, narration, and recaps" https://code.claude.com/docs/en/output-styles (确认日期 2026-11-06)
[^theme]: Claude Code 官方文档，「Configure your terminal for Claude Code」。"Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." https://code.claude.com/docs/en/terminal-config (确认日期 2026-11-06)
