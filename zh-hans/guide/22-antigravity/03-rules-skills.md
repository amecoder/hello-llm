# 第3章 规则与技能——不用搬

> **一句话总结**：Antigravity 把文件夹里的 **`AGENTS.md`** 当作始终开启的规则来读，并自己挑选 **`.agents/skills`** 里的技能。在 Codex 阶段做好的文件**原样**就能用。
> 用同一份笔记，一次把 `AGENTS.md` 拿走，一次放回去，各整理一遍，以此来确认这一点。

本章依据 2026 年 11 月 1 日确认过的 Antigravity 官方文档，以及本指南用 Antigravity CLI `agy` 1.4.12 运行的结果写成。本指南是在练习用的另一个 AI 工具里调用并运行 `agy` 的。官方 FAQ 对个人套餐不支持这样的用法（[第7章](07-safety-choose.md)），所以你照着做的时候，请直接在应用或终端里运行。应用和 CLI 用的是同一个智能体（[第1章](01-what-is.md)）。规则文件和技能是什么，已在 [Claude Code 第 6、7 章](../20-claude-code/06-claude-md.md)里讲过。

## Antigravity 会找的地方

Antigravity 会在固定的文件夹里查找规则和技能。[^where]

| 什么 | 这个文件夹（项目） | 我的所有文件夹 |
|---|---|---|
| 规则 | `AGENTS.md`·`GEMINI.md`·`.agents/rules/` | `~/.gemini/AGENTS.md` 等 |
| 技能 | `.agents/skills/名称/SKILL.md` | `~/.gemini/config/skills/` |

来源：Antigravity 官方文档（只摘录了一部分）[^where][^global][^global-skill]

**名称和位置都和 Codex 阶段做好的文件一样。** 就是规则文件 `AGENTS.md` 和技能文件夹 `.agents/skills`。所以整理工具文件夹**什么都不用搬**，直接打开就行。

`CLAUDE.md` 不在规则文件列表里。[^names] 如果有只在 Claude Code 里用过的规则，也请写进 `AGENTS.md`（和 Codex 第3章的理由相同）。

`AGENTS.md` 不需要开头的设置，**整个内容始终是开启的。**[^always] 修改过的规则和技能，从下一条消息起立刻生效。[^reread]

<Quiz id="ch603-where" />

## 用同一份笔记来测试

`AGENTS.md` 里有 Codex 第3章加进去的规则。就是"在整理好的文件最下面设一节「与原件核对」"。这条规则只在 `AGENTS.md` 里有，所以看结果里有没有这一节，就能知道 `AGENTS.md` 有没有被读取。

在 Codex 阶段的审查中，有人指出"前后用不同的笔记，就不是严格的比较"。所以这次用**同一份笔记、同一个请求**运行了两次。

```
把 inbox/회의-2026-10-27-주간회의.txt 这份笔记整理成会议纪要，保存成 notes/ 文件夹里的新文件。
```

| 运行 | 「与原件核对」一节 |
|---|---|
| 把 `AGENTS.md` 拿到文件夹外面时 | 没有 |
| 把 `AGENTS.md` 放回去之后 | 有 |

来源：本指南的实操结果（2026-11-01，各 1 次）

结果：[没有 AGENTS.md 时](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [有 AGENTS.md 时](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

看运行记录，差别会更明显。

- **没有 `AGENTS.md` 时**：智能体自己去找并打开了 `AGENTS.md`、`CLAUDE.md`、`GEMINI.md`。
- **有 `AGENTS.md` 时**：没有另外打开那个文件，却遵守了新规则。看起来是因为它作为始终开启的规则，一开始就被放进去了。

`CLAUDE.md` 两次都是**自己打开读了。** 虽然它没有自动作为规则文件放进去，但这似乎意味着，只要文件夹里有，就可以当作参考资料来读。这台电脑上还有个人规则文件（`~/.gemini/GEMINI.md`），也一起放进了运行里，所以无法分辨这个行为是不是受它的影响。这是各做一次的结果。

同一份笔记，结果里还有一处差别。Codex 把笔记里的星期按 2026 年的日历改了，而 Antigravity 直接用了笔记里写的星期（`10/27(月)`）。练习笔记里的星期是为了故事编出来的，和真实日历对不上。每个工具的这类判断都不一样，所以日期请始终和原件对照。

还有一个日期是错的。在有 `AGENTS.md` 时生成的会议纪要里，热红酒成本调查的期限，写成了 `10/30(周五)`，而不是 `10/31(周五)`（笔记里是"周五前"）。**即使遵守了规则那一节，日期也可能出错。** 不要因为有「与原件核对」这一节就放心，要亲自核对。

<Quiz id="ch603-test" />

## 技能由它自己挑选

智能体每次都会看技能名称和说明（`description`）的列表，如果有适合这件事的技能，就读那个技能的完整指令。[^progressive] 所以不需要逐一告诉它要用技能；一定要它用的话，说出名称就行。[^mention]

在上面的两次运行中，我们没有提到技能，**第一个动作却是读取 `.agents/skills/meeting-notes/SKILL.md`。** 它认出了 Codex 第5章里搬过来的技能。

自己调用时，在应用输入框里输入 `/技能名称`。[^slash] 这和 Codex 的 `$名称` 不同，和 Claude Code 的 `/名称` 相同。

```
/weekly-review
```

本指南在终端里说出名称——"用 weekly-review 技能整理这周的回顾"——来运行。智能体读取了 `.agents/skills/weekly-review/SKILL.md`，用 3 份回顾笔记做出了每周回顾。

结果：[用技能做出的每周回顾](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

要和原始笔记对照的 8 个事实，**全都**在里面。12 个赞、6,000 韩元的错误、4 个套餐、合计 11 个、Instagram 3 次、热红酒 1,800 韩元、灯泡、写文案花了 2 小时。同一个技能，Codex 做出的回顾里漏了 3 个（[Codex 第5章](../21-codex/05-skills.md)）。这是同样的指令，各个工具的结果也可能不同的例子。

结果里有好几处 `(备忘录里没有)` 的标记。这不是说事实错了，而是说模板要求的"为什么做得好"或"什么时候做"，在笔记里没有。除了错的和漏的，也请看看这样的标记贴得对不对。

<Quiz id="ch603-skills" />

## 条件规则和留下学到的东西

规则变多之后，可以按文件拆到 `.agents/rules/` 文件夹里。这些文件最前面必须写明什么时候开启（`trigger`）。不写或写错的话，会**悄悄地被丢弃。**[^trigger] 像整理工具这样规则只有几行，一个 `AGENTS.md` 就够了。

规则用于"始终要遵守的事"，技能用于"分多个步骤完成的工作"。[^rule-skill] 比如，"日期写成 10/27(周一) 的样子"是规则，"把 3 份回顾笔记汇总，做出每周回顾"是技能。

想把对话中纠正过的内容留成规则或技能，就用 `/learn`。智能体会提出要修改的内容，**只有我批准之后**才会写文件。[^learn]

<Quiz id="ch603-rules" />

## 亲手试一试

1. 把整理工具文件夹作为 Antigravity 项目打开（第2章）。什么都不用搬。
2. 让它整理会议笔记，看看结果最下面有没有「与原件核对」一节。
3. 想更确定的话，把 `AGENTS.md` 暂时挪到别处，用同一个请求再做一次并比较。结束后放回去。
4. 用 `/weekly-review` 做每周回顾，对照原件数一数错的和漏的。

**连续任务**：第4章会把 Antigravity 的权限预设和撤销，与 Claude Code、Codex 做比较。

## 小结

- Antigravity 读取 `AGENTS.md`、`GEMINI.md` 和 `.agents/skills`。在 Codex 里做的文件原样可用。
- 用同一份笔记测试的结果：没有 `AGENTS.md` 是 0 → 有的时候是 1（「与原件核对」一节）。
- 技能不用说，它自己会挑选。自己调用时用 `/技能名称`。
- `.agents/rules/` 里的文件一定要写 `trigger`。对话中学到的内容，用 `/learn` 经批准后留下来。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| always_on | 始终开启 | 始终处于开启状态的规则 |
| trigger | 触发条件 | 决定规则什么时候开启的值 |
| `/learn` | 学习命令 | 提议把对话中学到的内容留成规则、技能的命令 |

<ChapterDone :chapter="603" />

下一章：[第4章. 权限与撤销](04-permissions-undo.md)

[^where]: Antigravity 官方文档，「Customization discovery」. "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery (确认日期 2026-11-01)
[^global]: Antigravity 官方文档，「Rules」. "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules (确认日期 2026-11-01)
[^global-skill]: Antigravity 官方文档，「Customization discovery」. "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery (确认日期 2026-11-01)
[^names]: Antigravity 官方文档，「Rules」. "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules (确认日期 2026-11-01)
[^always]: Antigravity 官方文档，「Rules」. "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules (确认日期 2026-11-01)
[^reread]: Antigravity 官方文档，「Customization discovery」. "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery (确认日期 2026-11-01)
[^progressive]: Antigravity 官方文档，「Agent skills」. "On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills (确认日期 2026-11-01)
[^mention]: Antigravity 官方文档，「Agent skills」. "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills (确认日期 2026-11-01)
[^slash]: Antigravity 官方文档，「Agent skills」. "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills (确认日期 2026-11-01)
[^trigger]: Antigravity 官方文档，「Rules」. "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules (确认日期 2026-11-01)
[^rule-skill]: Antigravity 官方文档，「Rules」. "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules (确认日期 2026-11-01)
[^learn]: Antigravity 官方文档，「Slash commands overview」. "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands (确认日期 2026-11-01)
