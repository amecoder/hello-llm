# 第7章 技能·插件·外部工具 — 把整理工具变成一行命令

> **一句话总结**：每次都要粘贴的指令·检查表·多步骤流程，做成**技能**，用 `/名称` 一行就能调出来。这一章里「整理工具」就完成了。
> 别人做的**插件**和外部服务**连接器**也可以接上，但它们会以我的权限运行代码，所以只安装值得信任的。

这一章依据 2026年10月31日确认的 Claude Code 官方文档和 macOS 桌面应用（韩语界面，付费账号）编写。直接使用第5章的模板和第6章的 CLAUDE.md。

## 什么是技能

**技能**（Skill）是写在 `SKILL.md` 文件里的指令。Claude 遇到相关的请求时会自己用上技能，我也可以用 `/技能名称` 直接调出来。[^what]

遇到这些情况，就做一个技能。[^when]

- 一直在**反复粘贴**同样的指令或检查表时
- CLAUDE.md 的某一部分已经不是“事实”，而是长成了**多步骤的流程**时

和 CLAUDE.md 的不同之处在于**什么时候被读取**。CLAUDE.md 每次会话都会被读取，而技能的正文**只在用到时**才被读取。所以即使写得又长又详细，平时也几乎没有负担。[^when]

| | CLAUDE.md（第6章） | 技能（第7章） |
|---|---|---|
| 装什么 | 始终要遵守的规则 | 一件事的流程 |
| 什么时候被读取 | 每次会话 | 只在用到时 |
| 怎么调用 | 没有专门的调用方式 | `/名称` 或相关请求 |

<Quiz id="ch407-what" />

## 实践 — 做 3 个整理技能

把整理工具的三件事做成技能。

![技能请求。红色编号标出：① 输入框里请求创建 3 个技能（meeting-notes·study-notes·weekly-review）的内容](../../../guide/20-claude-code/assets/shot-25-skill-prompt-marked.png)

```
请用 templates 模板和 CLAUDE.md 规则，在这个文件夹的 .claude/skills 里创建 3 个技能。meeting-notes（会议备忘 → 会议纪要）、study-notes（学习笔记 → 学习总结）、weekly-review（回顾备忘 → 每周回顾）。每个 SKILL.md 里请写上什么时候用、要读的文件、要用的模板、保存位置、完成后要核对的检查表。
```

把技能文件夹 `.claude/skills/<名称>/SKILL.md` 放在某个文件夹里，它就成了**只在那个文件夹的会话里**用的项目技能。[^where] 文件夹名称就是命令名称（`/meeting-notes`）。[^name] 中文命令名称是否可行，没能在官方文档里确认，所以本指南用了英文名称。

### 这次弹出了许可窗口

就在要写技能文件的时候，**弹出了许可窗口。**

![许可窗口。红色编号标出：①「允许 Claude 写入 SKILL.md 吗？（Claude가 쓰기 SKILL.md하도록 허용하시겠습니까?）」，② 要写入内容的预览（绿色行），③「拒绝（거부）」，④「始终允许（항상 허용）」和 ▾ 按钮（路径行里有电脑用户名，已遮住）](../../../guide/20-claude-code/assets/shot-26-permission-marked.png)

在第2~4章里，因为这台电脑上的个人允许规则，没有弹出许可窗口。这次弹出来，是因为 `.claude` 文件夹是**受保护的路径。** 即使在「自动接受编辑」模式下，向受保护的路径写入也仍然会询问。[^protected] 技能、设置这类会改变 Claude 行为的文件就放在这个文件夹里，所以改动之前要让人先确认一下。

在 ② 处可以**先读一读它要写什么。** 点 ▾ 会出现「仅允许一次（한 번만 허용）」。

![▾ 菜单。红色编号标出：①「仅允许一次」（⌘↩）](../../../guide/20-claude-code/assets/shot-27-allow-once-marked.png)

| 按钮 | 作用 |
|---|---|
| 拒绝 | 阻止这一次写入 |
| 仅允许一次（⌘↩） | 只允许这一次 |
| 始终允许（⇧⌘↩） | 允许今后同样的事不再询问 |

出处：本指南的界面确认（2026-10-31）

一开始建议选**「仅允许一次」**。「始终允许」虽然方便，但同样的事就不会再问你了（能持续多久，请看界面上的说明）。这次实践里有 3 个技能，所以许可窗口弹出了三次，三次都选了「仅允许一次」。

做出来的技能（本指南的成果）：[meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt)

每个 SKILL.md 的最上面都有 `name`（名称）和 `description`（什么时候用）。Claude 是看 description 来决定什么时候用这个技能的。[^desc] 比如，weekly-review 的 description 里写着，遇到“写每周回顾”“整理这周的回顾”这类请求时使用。

<Quiz id="ch407-make" />

## 一行调出来用

在新会话的输入框里输入 `/`，会出现可用的命令和技能列表。接着输入名称的一部分，就能筛选。[^slash]

![技能列表。红色编号标出：①「study-notes」条目，② 旁边的说明框（说明末尾有「(project)」）](../../../guide/20-claude-code/assets/shot-28-skill-menu-marked.png)

② 里的 **(project)** 是表示“这是这个文件夹的项目技能”的标记。用 Enter 选中，再接着写上要整理的文件，然后发送。

![运行技能。红色编号标出：① 输入了「/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt」的输入框](../../../guide/20-claude-code/assets/shot-29-skill-run-marked.png)

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

靠这一行，学习总结就按模板做好了（成果：[7장-공부노트-스킬로.txt](/practice/notes/results/7장-공부노트-스킬로.txt)）。一行总结、5 个要点、新学到的 4 样东西、要注意的事、要提的问题，都按模板的顺序放进去了。第4章里用很长的请求做出来又回退掉的那份笔记，这次是靠**一行命令**做出来的。

**现在整理工具完成了。**

| 备忘 | 命令 |
|---|---|
| 会议备忘 | `/meeting-notes inbox/회의-….txt` |
| 学习笔记 | `/study-notes inbox/공부-….txt` |
| 好几天的每日回顾 | `/weekly-review` |

不记得名称也没关系。像“整理这周的回顾”这样说，Claude 就会看 description，选出合适的技能来用。[^what]

<Quiz id="ch407-run" />

## 插件和连接器

**插件**（Plugin）是把别人做的技能·命令·工具成套安装，**连接器**（Connector）是把 Gmail·日历这类外部服务连接到 Claude。在桌面应用里，通过输入框旁边的 **+** 按钮添加连接器和插件。[^plus] 连接器是把 MCP 服务器（AI 连接外部工具的标准方式）做成可以在界面上轻松设置的形式。[^connectors]

虽然方便，但**安装之前一定要想一想。** 插件可以在**我的电脑上以我的权限运行代码。**[^plugin-risk] 而且这样的代码，有时是在第4章的权限模式所保护的范围之外运行的。权限规则适用于 Claude 的工具调用，不适用于插件自己运行的代码。[^plugin-scope]

- 只安装知道是谁做的、值得信任的插件。
- 用不着的插件要删掉。
- 通过连接器连接的服务里的内容（邮件·日程），也会成为 Claude 读取的资料。请一并阅读第9章的“隐藏指令”。

本指南的整理工具，**只靠我自己做的技能**就够了。插件和连接器，等真的需要时再一个一个增加。

<Quiz id="ch407-plugins" />

## 亲手试一试

1. 请它创建 3 个整理技能，弹出许可窗口时，先读 ② 里的预览，再选「仅允许一次」。
2. 在新会话里输入 `/`，再输入技能名称的一部分，看看列表里有没有出现。
3. 用 `/study-notes` 整理学习笔记，确认是否按第5章模板的顺序生成。
4. 不带名称，只发“整理这周的回顾”，看看 Claude 会不会选出 weekly-review 技能来用。

**接着做的任务**：现在每到周五，都是我自己调用 `/weekly-review`。在第8章里，我们来看把这件事**设成定时**的方法，以及同时运行多个整理的方法。

## 小结

- 技能是写在 SKILL.md 里的流程。只在用到时才被读取，用 `/名称` 或相关请求来使用。
- 文件夹里的 `.claude/skills/<名称>/SKILL.md` 是只属于那个文件夹的技能。description 决定了“什么时候用”。
- `.claude` 文件夹是受保护的路径，写入前会询问许可。一开始选「仅允许一次」。
- 整理工具完成：`/meeting-notes`、`/study-notes`、`/weekly-review`。
- 插件可以用我的权限运行代码。只安装值得信任的，而且只在需要时安装。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Skill | 技能 | 写在 SKILL.md 里、用 `/名称` 调用的流程 |
| description | 描述 | 写明技能何时使用的说明。Claude 看这个来挑选 |
| Protected path | 受保护的路径 | 写入前始终会询问许可的位置。`.claude` 文件夹等 |
| Plugin | 插件 | 把技能·命令·工具打包安装的扩展 |
| Connector | 连接器 | 把外部服务连接到 Claude（基于 MCP 服务器） |
| MCP | MCP | AI 连接外部工具·数据的标准方式 |

<ChapterDone :chapter="407" />

下一章：[第8章. 同时做多件事·云端·定时](08-parallel-cloud-schedule.md)

[^what]: Claude Code 官方文档，《Extend Claude with skills》。"Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name." https://code.claude.com/docs/en/skills（确认日期 2026-10-31）
[^when]: Claude Code 官方文档，《Extend Claude with skills》。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills（确认日期 2026-10-31）
[^where]: Claude Code 官方文档，《Extend Claude with skills》。位置表的 Project 行："`.claude/skills/<skill-name>/SKILL.md`" https://code.claude.com/docs/en/skills（确认日期 2026-10-31）
[^name]: Claude Code 官方文档，《Extend Claude with skills》。"The directory name, or the frontmatter name when you set one, becomes the command you type, and the description helps Claude decide when to load the skill automatically." https://code.claude.com/docs/en/skills（确认日期 2026-10-31）
[^desc]: Claude Code 官方文档，《Extend Claude with skills》。"Only description is recommended so Claude knows when to use the skill." https://code.claude.com/docs/en/skills（确认日期 2026-10-31）
[^slash]: Claude Code 官方文档，《Desktop application》。"type / in the prompt box or click the + button and select Slash commands to browse what's available." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^protected]: Claude Code 官方文档，《Choose a permission mode》。acceptEdits 一节 "These still prompt:" 下面的 "Writes to protected paths" https://code.claude.com/docs/en/permission-modes（确认日期 2026-10-31）
[^plus]: Claude Code 官方文档，《Desktop application》。"Click the + button next to the prompt box for file attachments, skills, connectors, and plugins." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^connectors]: Claude Code 官方文档，《Desktop application》。"Connectors are MCP servers with a graphical setup flow." https://code.claude.com/docs/en/desktop（确认日期 2026-10-31）
[^plugin-risk]: Claude Code 官方文档，《Plugin security and trust》。"A plugin can carry content that runs code on your machine with your user privileges and content that enters Claude's context as instructions, so review a plugin before you install it." https://code.claude.com/docs/en/plugins/security（确认日期 2026-10-31）
[^plugin-scope]: Claude Code 官方文档，《Plugin security and trust》。"Claude Code's permission rules and sandbox cover the tool calls Claude makes, not the code a plugin runs by itself" https://code.claude.com/docs/en/plugins/security（确认日期 2026-10-31）
