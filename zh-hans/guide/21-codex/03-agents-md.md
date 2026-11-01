# 第3章 规则文件 AGENTS.md——把 CLAUDE.md 搬到 Codex

> **一句话总结**：Codex 在开始工作之前会读取 **`AGENTS.md`**。Claude Code 的 `CLAUDE.md`，Codex 如果不做处理就不会读。
> 把整理工具文件夹的规则搬到 `AGENTS.md`，然后在新对话里测试，**不用说出规则**它是否也会遵守。

本章依据 2026 年 11 月 1 日确认过的 Codex 官方文档，以及本指南在整理工具文件夹里亲手试过的结果写成。为什么需要规则文件，[Claude Code 第6章](../20-claude-code/06-claude-md.md)里已经讲过。这里只讲在 Codex 里不一样的地方。

## Codex 不读 CLAUDE.md

Codex 的规则文件名叫 `AGENTS.md`。[^agents] 如果想把其他名字的文件当作规则，需要在设置里另外登记，没有登记的名字会被忽略。[^ignored] 所以 `CLAUDE.md` 如果不做处理，就不会被当作规则来读。

在第2章的运行记录里也能确认这一点。Codex 在文件夹里找了 `AGENTS.md`，没有找到，就只读了模板（`templates/`）。它没有打开 `CLAUDE.md`。

即便如此，第2章的会议纪要还是遵守了 `(备忘录里没有)` 这条规则。因为同样的规则也写在**模板说明**（`templates/README.md`）里。反过来说，**只**写在 `CLAUDE.md` 里的规则，Codex 是不知道的。

<Quiz id="ch503-why" />

## 把 CLAUDE.md 搬到 AGENTS.md

搬的工作也交给 Codex。本章的运行和第2章一样，是在终端里运行同一个 Codex。这次**新增**了一条规则。之后看这条规则有没有被遵守，就能相当可信地推断它有没有读 `AGENTS.md`。

```
CLAUDE.md 是 Claude Code 读取的规则文件。请把同样的规则搬到 AGENTS.md，让 Codex 也能读到。规则内容不要改，只增加一条规则：'在整理好的文件最下面设一节「与原件核对」，把数字、名字、日期中需要再次确认的内容写在 3 条以内。' CLAUDE.md 保持原样。
```

Codex 把 `CLAUDE.md` 的五条规则原样搬了过来，并把新规则作为第 6 条加了上去。然后它报告说"已验证，除了新增的规则，内容与原文完全一致"。

结果：[AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt)

没有删除 `CLAUDE.md` 是有原因的。这是为了让同一个文件夹在 Claude Code 里也能继续使用。代价是**两个文件要一起修改**。如果只改一边，两个工具就会按不同的规则工作。

<Quiz id="ch503-move" />

## 不说出规则来测试

打开一个新对话，不提规则，只请它整理学习笔记。

```
把 inbox/공부-2026-10-28-프롬프트-강의.txt 整理成学习笔记，保存到 notes/ 里。
```

结果的最下面多了新规则的那一节。

```
## 与原件核对

- 授课日期：10/28（周三）。原件上写的是 10/28，年份以文件名里的 2026 年为准。
- 授课时长：1 小时。
- 讲师介绍的写提示词的方法：5 种。
```

结果：[只靠规则写出的学习笔记](/practice/notes/results/codex/3장-공부노트-규칙확인.txt)

| 什么时候生成的文件 | 「与原件核对」一节 |
|---|---|
| AGENTS.md 之前（第2章会议纪要） | 没有 |
| AGENTS.md 之后（这份学习笔记） | 有 |

来源：本指南的实操结果（2026-11-01，各 1 次）

新规则只在 `AGENTS.md` 里有，所以可以认为 Codex 读了那个文件并照做了。不过这只是**各做一次的结果**，而且前后的笔记种类（会议纪要、学习笔记）也不同。模板的检查清单里也有"和原始笔记核对过一次"这样类似的项目。想更确定的话，请用**同一份笔记**，没有 `AGENTS.md` 跑一次，有 `AGENTS.md` 跑一次，比较一下。这不保证它每次都遵守，所以每次看结果时都要确认。

<Quiz id="ch503-test" />

## 读取 AGENTS.md 的顺序

`AGENTS.md` 可以放在两个地方。[^chain]

| 位置 | 适用范围 | 例子 |
|---|---|---|
| `~/.codex/AGENTS.md` | 我的所有文件夹 | "用韩语回答" |
| 项目文件夹里的 `AGENTS.md` | 只限那个文件夹 | 整理工具的规则 |

来源：Codex 官方文档（只摘录了一部分）[^chain]

两个都有的话，会**连起来**读取，离当前文件夹更近的文件排在后面，优先于前面的指令。[^override] 合并后的大小达到默认的 32KiB，后面的就不再追加了。[^limit] 换成韩语大约是 1 万字出头。规则请保持简短。

如果改了规则却好像没有生效，请**开始一个新对话**，或者重新启动 Codex。Codex 每次开始运行时都会重新读取规则。[^restart]

如果文件夹里还没有 `AGENTS.md`，也可以在应用输入框里输入 `/init`，生成一个框架。[^init]

<Quiz id="ch503-order" />

## 导入（Import）和记忆

**导入**是把其他智能体的设置一次性搬过来的功能。在应用里，可以从 Claude Code、Claude Cowork、Cursor 导入。[^import-from] 从应用设置里的 **Import** 菜单开始。如果没有这个菜单，就在 **General** 里找 **Import other agent setup**。[^import-menu]

![ChatGPT 应用的 Settings → Import 界面：「Import from another AI app」下面有 Claude Code、Claude Cowork、Cursor，每个都有 Import 按钮](../../../guide/21-codex/assets/shot-02-import.png)

在本指南的界面（2026-11-01）中，设置左侧列表里有 **Import**，在这台电脑上找到的 Claude Code、Claude Cowork、Cursor 各自带着 **Import** 按钮显示出来。本指南没有点这些按钮。

| Claude Code 这边 | 到了 Codex 变成 |
|---|---|
| 规则文件（`CLAUDE.md` 等） | `AGENTS.md` |
| 技能 | 技能 |
| 斜杠命令（`/名称`） | 技能（`$名称`） |
| `settings.json` | `config.toml` |

来源：Codex 官方文档（只摘录了一部分）[^import-map]

导入之后，原来的设置不会被更改或删除。[^import-keep] 不过官方文档说，导入之后一定要检查**技能的权限限制、钩子（hook）、使用参数的命令**。[^import-review]

本指南**没有执行**导入。因为导入不只查看一个文件夹，还会一并查看我电脑上的个人设置。[^import-scope] 如果想亲眼看看搬了什么，像本章这样手动搬会更好。

**记忆**（Memories）是把以前工作的上下文带到下一次工作里的功能。[^memory] 我电脑上的 Codex 记忆默认是关闭的。[^memory-off] 官方文档只把记忆看作"辅助回想"，说一定要遵守的规则不要交给记忆。[^memory-rules] 它说**一定要遵守的规则要写在 `AGENTS.md` 里**。[^memory-agents]

<Quiz id="ch503-import" />

## 亲手试一试

1. 用上面的请求，让它把 `CLAUDE.md` 搬到 `AGENTS.md`。同时加上一条新规则。
2. 打开 `AGENTS.md`，看看原来的规则是否原样保留，新规则是否加上了。
3. 打开一个**新对话**，不提规则，让它整理学习笔记。
4. 检查结果里新规则有没有被遵守。

**接续任务**：第4章会学习决定 Codex 自己做什么、问什么的权限菜单，以及撤销更改内容的方法。

## 小结

- Codex 读取 `AGENTS.md`，而 `CLAUDE.md` 如果不做处理就不会读。
- 两个工具一起用的话，两个文件一起修改。
- 加入一条新规则，在不说出来的情况下测试，就能知道规则文件有没有被读到（本次练习：之前 0 → 之后 1）。
- 个人规则放在 `~/.codex/AGENTS.md`，文件夹规则放在文件夹里的 `AGENTS.md`。离得近的优先。
- 导入可以一次性搬设置，但会看到个人设置。一定要遵守的规则，写在 `AGENTS.md` 里，而不是记忆里。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Import | 导入 | 把其他智能体的设置搬到 Codex 的功能 |
| Memories | 记忆 | 回想以前工作上下文的功能 |
| `/init` | 初始化命令 | 生成 `AGENTS.md` 框架的命令 |

<ChapterDone :chapter="503" />

下一章：[第4章. 权限与撤销](04-permissions-undo.md)

[^agents]: Codex 官方文档，「Custom instructions with AGENTS.md」. "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^ignored]: Codex 官方文档，「Custom instructions with AGENTS.md」. "Filenames not on this list are ignored for instruction discovery." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^chain]: Codex 官方文档，「Custom instructions with AGENTS.md」. "In your Codex home directory (defaults to `~/.codex`, unless you set `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists." / "Starting at the project root (typically the Git root), Codex walks down to your current working directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^override]: Codex 官方文档，「Custom instructions with AGENTS.md」. "Files closer to your current directory override earlier guidance because they appear later in the combined prompt." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^limit]: Codex 官方文档，「Custom instructions with AGENTS.md」. "Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default)." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^restart]: Codex 官方文档，「Custom instructions with AGENTS.md」. "If instructions look stale, restart Codex in the target directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (确认日期 2026-11-01)
[^init]: Codex 官方文档，「Slash commands」. "Generate an `AGENTS.md` scaffold for the current project." https://learn.chatgpt.com/docs/reference/slash-commands (确认日期 2026-11-01)
[^import-from]: Codex 官方文档，「Import from another agent」. "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^import-menu]: Codex 官方文档，「Import from another agent」. "If **Import** isn't available as a settings section yet, open **General** and find **Import other agent setup**." https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^import-map]: Codex 官方文档，「Import from another agent」. 表「What ChatGPT can import」中 Instruction files、`settings.json`、Skills、Slash commands 这几行。 https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^import-scope]: Codex 官方文档，「Import from another agent」. "The import flow checks both your user-level setup and your existing projects." https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^import-keep]: Codex 官方文档，「Import from another agent」. "Importing doesn't change or delete your existing agent setup." https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^import-review]: Codex 官方文档，「Import from another agent」. "Tool restrictions or permissions in imported skills and agents." / "Hooks whose behavior may differ after import." / "Prompt templates or command-style prompts that depend on arguments, shell interpolation, or file-path placeholders." https://learn.chatgpt.com/docs/import (确认日期 2026-11-01)
[^memory]: Codex 官方文档，「Memories」. "Memories let ChatGPT and Codex carry useful context from earlier work into future work." https://learn.chatgpt.com/docs/customization/memories (确认日期 2026-11-01)
[^memory-off]: Codex 官方文档，「Memories」. "Local Codex memories are off by default." https://learn.chatgpt.com/docs/customization/memories (确认日期 2026-11-01)
[^memory-rules]: Codex 官方文档，「Memories」. "Treat memories as a helpful recall layer, not as the only source for rules that must always apply." https://learn.chatgpt.com/docs/customization/memories (确认日期 2026-11-01)
[^memory-agents]: Codex 官方文档，「Memories」. "Keep required team guidance in `AGENTS.md` or checked-in documentation." https://learn.chatgpt.com/docs/customization/memories (确认日期 2026-11-01)
