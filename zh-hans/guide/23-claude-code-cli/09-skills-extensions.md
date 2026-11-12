# 第9章 技能与扩展

<Badge type="tip" text="必读" /> 想跟着这个阶段学下去，一定要读这一章。

> **一句话总结**：反复下达的指示，就做成技能。旁支工作交给子代理，外部服务用 MCP，打包安装用插件。一开始有一个技能就够了。

本章的界面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 运行的结果。

## 制作技能

**技能**（Skill）是只用一个 `SKILL.md` 文件，就能给 Claude 增加一套工作流程的功能。如果你总是把同样的指示粘贴到聊天里，就值得做一个。[^skill] 可以把它看成一本叫名字就能用的工作说明书。

项目技能放在 `.claude/skills/<技能名>/SKILL.md`。[^skill] 用 `/exit` 退出，在终端里进入练习文件夹。Mac 和 Linux 把下面整段粘贴进去（以文件查看：[ch9-skill-meeting-notes.txt](/practice/zh-hans/cli/results/ch9-skill-meeting-notes.txt)）。

```bash
mkdir -p .claude/skills/meeting-notes
cat > .claude/skills/meeting-notes/SKILL.md <<'EOF'
---
description: 把会议笔记整理成符合规则的会议记录。用于整理会议笔记的请求。
---

读取 $ARGUMENTS 文件，按照 CLAUDE.md 的规则制作会议记录。
文件名用 `minutes-date.md`（会议记录-日期），保存到 notes 文件夹。
完成后，用一行告诉我保存的文件名和待办事项的数量。
EOF
```

粘贴后如果还没运行，就再按一次 Enter。什么都没显示就是成功了。用 `ls .claude/skills/meeting-notes` 看看 `SKILL.md` 有没有生成。

Windows PowerShell 先运行 `mkdir .claude\skills\meeting-notes`，再用 `notepad .claude\skills\meeting-notes\SKILL.md` 打开记事本。去掉以 `cat` 开头的那一行和 `EOF` 那一行，只放中间的内容。如果问你要不要新建文件，就点 `是`，按 `Ctrl + S` 保存后关闭。这个方法我们没有实际运行过。

文件分两部分：`---` 之间的设置，和下面的指示文字。[^skill]

- **文件夹名** `meeting-notes` 就是你要输入的命令名。[^skill]
- **description** 是 Claude 判断什么时候调用这个技能的依据。[^skill]
- **`$ARGUMENTS`** 是一个空位。调用技能时传进去的文字会填到这里。[^arguments] 练习里，命令后面写的文件路径填了进去，于是整理了那份笔记。所以同一个技能也能整理别的笔记。

```text
不太好的 description：会议
更好的 description：  把会议笔记整理成符合规则的会议记录。用于整理会议笔记的请求。
```

更好的例子同时说明了做什么事和什么时候用。Claude 更容易察觉合适的时机。

现在在终端里启动 `claude`，输入 `/`，在列表里找找看。直接调用时这样输入。

```text
/meeting-notes inbox/meeting-2026-10-27-weekly.txt
```

用[第10章](10-headless-automation.md)的 `claude -p` 调用同一个技能后，生成了 `notes/minutes-2026-10-27.md`，Claude 这样回答。

```text
已保存到 `notes/minutes-2026-10-27.md`，待办事项有 5 个。
```

按照[第8章](08-memory-settings.md)的 `CLAUDE.md` 规则，生成了决定事项、待办事项、下次会议三个部分（[查看结果](/practice/zh-hans/cli/results/ch10-minutes-by-script.txt)）。技能正文只在使用时才加载，所以平时几乎没有负担。[^skill]

<Quiz id="ch809-skill" />

## 技能不起作用时

有时写错了也不会报错。如果列表里没有，或者表现奇怪，就按这个顺序检查。

1. 文件夹名和你输入的命令一样吗？
2. 位置是 `.claude/skills/meeting-notes/SKILL.md` 吗？
3. 文件的第一行是 `---` 吗？只有在第一行时，设置才会被读取。[^skill-debug]
4. 设置项名称的拼写对吗？拼错了会被悄悄忽略，不报错。[^skill-debug]
5. 启动 `claude` 的文件夹是练习文件夹吗？用 `pwd` 确认。

会话中途修改的内容，不用重启就会生效。不过，如果新建了会话启动时还不存在的技能文件夹，就运行 `/reload-skills`。[^skill-debug]

<Quiz id="ch809-debug" />

## 子代理

**子代理**（Subagent）是负责某一类工作的专门助手。它在自己的上下文窗口里工作，只把总结交回来。所以搜索结果和日志不会把你的对话弄乱。[^sub] 就像把资料调查交给助理，自己只听结论。

比如，想象一下要把五份会议记录逐一和原始笔记核对的工作。如果你直接让 Claude 做，笔记和会议记录这十个文件的内容会一行行堆进你的对话。交给子代理的话，文件由子代理去读，你的对话里只会回来几行结论，比如"第3份会议记录的截止日期和笔记不一致"。

最简单的制作方法是请 Claude 帮忙。[^sub] 说"在这个项目里做一个子代理，用来核对会议记录和原始笔记是否一致。"就行。如果找不到新做的子代理，试试重启 Claude Code。[^sub] 本指南没有实际做过子代理。

旧文章里可能会让你在 `/agents` 界面里制作。现在那个向导已经没有了。输入 `/agents`，只会显示一段提示文字，让你请 Claude 帮忙或者直接修改文件。[^sub]

子代理的请求也和你的对话计入同一个用量上限。[^sub] 如果是小事，直接让 Claude 做更好。

<Quiz id="ch809-subagent" />

## MCP

**MCP**（Model Context Protocol）让 Claude Code 能做内置工具以外的事。比如搜索汇总待办和错误报告的列表（问题跟踪器），查询存放资料的仓库（数据库），操作网页浏览器。[^mcp] 可以把它看成给 Claude 插上通往外部服务的连接线。

输入命令的地方分成两处。`claude mcp add` 是在启动 `claude` 之前的终端（Shell）里输入。`/mcp` 是在会话里查看已经添加的服务器时输入。[^mcp] 我们用官方文档里的示例服务器试了添加、查看和删除。

```bash
claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp
claude mcp list
claude mcp remove claude-code-docs
```

把第一行拆开来读。

- `claude mcp add`：添加 MCP 服务器。
- `--transport http`：表示这是用 HTTP 方式连接的远程服务器。
- `claude-code-docs`：你给服务器起的名字。
- `https://…`：服务器地址。

`list` 查看列表，`remove` 后面写要删除的服务器名。运行这三条命令，会依次出现这样的行。

```text
Added HTTP MCP server claude-code-docs with URL: https://code.claude.com/docs/mcp to local config
claude-code-docs: https://code.claude.com/docs/mcp (HTTP) - ✔ Connected
Removed MCP server "claude-code-docs" from local config
```

`✔ Connected` 表示已经连接上了。默认范围 `local` 的意思是只有你自己、只在这个项目里使用。[^mcp]

**只连接可以信任的服务器。** 获取外部内容的服务器，可能让你暴露在提示词注入（用藏在文字里的指示来操纵 AI 的手法）风险中。[^mcp-trust] 不知道是谁做的服务器，不要添加。[^mcp-audit]

<Quiz id="ch809-mcp" />

## 插件

**插件**（Plugin）是把技能、代理、钩子、MCP 服务器等打包成一组来安装的文件夹。钩子是在固定时刻自动运行的命令，会在[第11章](11-hooks-statusline.md)学到。前面这些东西不用插件也能单独使用。只有想把好几个打包使用时才需要插件。[^plugin]

比如，假设把本章的会议记录技能和核对用的子代理打包成一个插件。同事就不用一个个去做，只装这一个插件就行。

在会话里输入 `/plugin`，就能在 Discover 标签页里挑选插件。[^plugin] 安装命令是 `/plugin install commit-commands@claude-plugins-official` 这样的形式。在会话里输入后不会马上安装，而是先打开详情界面。[^plugin-install] 本指南没有实际运行到安装这一步。

**插件以你的权限运行。** 不管来源是哪里，装上的插件都能以你的用户权限运行代码。[^plugin] 所以安装前要读一下详情界面。[^plugin-install] 把它当成你亲自运行的程序来对待。

开启的插件，在你不用它的会话里也是那个会话的一部分。[^plugin] 不用的话，就在 `/plugin` 的 Installed 标签页里关掉或删除。[^plugin-install]

<Quiz id="ch809-plugin" />

## 什么时候用什么

| 这种时候 | 用这个 |
|---|---|
| 有一直要遵守的规则 | `CLAUDE.md` |
| 反复做同样的流程 | 技能 |
| 把大的旁支工作分出去 | 子代理 |
| 要用外部服务 | MCP |
| 想把几个打包获取 | 插件 |
| 每次都必须运行 | 钩子（[第11章](11-hooks-statusline.md)） |

不用全部安装。先问问自己：现在有不方便的事吗？如果没有，暂时不做也没关系。

<Quiz id="ch809-choose" />

## 动手试一试

1. 在终端里制作技能。启动 `claude`，输入 `/`，确认能看到 `meeting-notes`。
2. 运行 `/meeting-notes inbox/meeting-2026-10-27-weekly.txt`。`notes` 里生成文件了吗？内容和笔记一致吗？
3. 用 `/exit` 退出，在终端里依次输入 `claude mcp` 的三条命令。用 `claude mcp list` 确认已经删除。

问问自己：同一个技能能整理别的笔记吗？现在有我真正需要的扩展吗？

## 小结

- 技能只用一个 `.claude/skills/<名称>/SKILL.md` 就能做出来。文件夹名就是命令名。
- 不起作用时，检查文件夹名、第一行的 `---`、设置项名称的拼写。
- `/agents` 向导已经没有了。子代理要请 Claude 帮忙做，或者用文件做。
- `claude mcp add` 等在 Shell 里输入，`/mcp` 在会话里输入。
- MCP 服务器和插件只用可以信任的。插件以你的权限运行。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Skill | 技能 | 叫名字就能用的工作说明书 |
| Subagent | 子代理 | 在自己的上下文里接手旁支工作的助手 |
| MCP | 模型上下文协议 | 连接外部工具的方式 |
| Plugin | 插件 | 把多个扩展打包在一起的安装单位 |

<ChapterDone :chapter="809" />

下一章：[第10章 一行运行与自动化](10-headless-automation.md)

[^skill]: Claude Code 官方文档，「Extend Claude with skills」。"Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." / "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." / "Commit it so your team gets it too" / "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." / "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." / "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (确认日期 2026-11-06)
[^skill-debug]: Claude Code 官方文档，「Extend Claude with skills」。"Claude Code reads the frontmatter only when the opening `---` is the file's first line." / "Claude Code ignores a field it doesn't recognize without reporting an error." / "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." / "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." https://code.claude.com/docs/en/skills (确认日期 2026-11-06)
[^sub]: Claude Code 官方文档，「Create custom subagents」。"Subagents are specialized AI assistants that handle specific types of tasks." / "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." / "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." / "To create one, ask Claude to write it for you, or write the file yourself." / "If Claude can't find the new subagent, restart Claude Code and try again." / "It also sends its own requests, which count toward the same usage limits as your main conversation." https://code.claude.com/docs/en/sub-agents (确认日期 2026-11-06)
[^mcp]: Claude Code 官方文档，「Connect to MCP servers」。"lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." / "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." / "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." / "By default it registers the server at `local` scope: private to you, active only in the current project." https://code.claude.com/docs/en/mcp-quickstart (确认日期 2026-11-06)
[^mcp-trust]: Claude Code 官方文档，「Connect Claude Code to tools via MCP」。"Verify you trust each server before connecting it." / "Servers that fetch external content can expose you to prompt injection risk." https://code.claude.com/docs/en/mcp (确认日期 2026-11-06)
[^mcp-audit]: Anthropic 也不会替你对 MCP 服务器做安全检查。Claude Code 官方文档，「Security」。"Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." https://code.claude.com/docs/en/security (确认日期 2026-11-06)
[^plugin]: Claude Code 官方文档，「Plugins overview」。"A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." / "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." / "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." / "Whatever the tier, a plugin you install can run code with your user privileges." / "An enabled plugin is part of every session, not only the sessions where you use it." https://code.claude.com/docs/en/plugins/overview (确认日期 2026-11-06)
[^plugin-install]: Claude Code 官方文档，「Install and manage plugins」。"/plugin install commit-commands@claude-plugins-official" / "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." / "A plugin can run hooks and MCP servers, so read the pane before you install." / "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." https://code.claude.com/docs/en/plugins/install (确认日期 2026-11-06)
[^arguments]: Claude Code 官方文档，「Extend Claude with skills」。"All arguments passed when invoking the skill." https://code.claude.com/docs/en/skills (确认日期 2026-11-06)
