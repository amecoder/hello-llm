# 第5章 搬运技能——用一行 `$weekly-review` 做每周回顾

> **一句话总结**：Codex 的技能和 Claude Code 是**同一种格式**（`SKILL.md`），只是存放的位置和调用的符号不同。文件夹是 `.agents/skills`，调用时用 `$名称`。
> 把整理工具里的 3 个技能搬过来，用一行 `$weekly-review` 做出每周回顾，再和原件对一对。

这一章依据 2026年11月1日确认的 Codex 官方文档，以及本指南的实际操作（在 Codex 终端里运行）写成。技能是什么、为什么要用，在 [Claude Code 第7章](../20-claude-code/07-skills-plugins.md)里讲过了。

## 同样的格式，不同的位置

Codex 的技能，也是一个装着 `SKILL.md` 文件的文件夹，`SKILL.md` 里必须有名称（`name`）和说明（`description`）。[^format] 技能遵循多种工具共同使用的公开标准。[^standard] 所以，在 Claude Code 里做的 `SKILL.md`，**不用修改**，原样就搬过来了。

不同的是存放的位置和调用的方法。

| | Claude Code | Codex |
|---|---|---|
| 只用于这个文件夹 | `.claude/skills/` | `.agents/skills/` |
| 用于我所有的文件夹 | `~/.claude/skills/` | `~/.agents/skills/` |
| 调用 | `/名称` | `$名称` |

来源：Codex 官方文档[^where][^mention]

搬之前先试了一下。技能还放在 `.claude/skills` 里的时候调用 `$weekly-review`，Codex 没能直接在技能列表里找到，而是**通过文件搜索**翻找 `SKILL.md`，才找出来的。这次找到了，但放在规定的位置更保险。

<Quiz id="ch505-where" />

## 搬运技能

我这样拜托了 Codex。

```
把 .claude/skills 文件夹里的 3 个技能，复制到 Codex 读取的位置 .agents/skills 里。原来的文件夹保持不动。
```

**被拦住了。** 原因是第4章看到过的受保护文件夹。工作文件夹里的 `.agents`，默认状态下只能读取。[^protected] Codex 告诉我复制被阻止了，并告诉我可以改为输入的命令。

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

这次练习是预先定好许可方式再运行的终端执行（第7章），所以没法询问，就那样停住了。在应用里这一步看起来是什么样，本指南没能亲自确认。如果出现征求许可的画面，请读清楚**要往哪里写什么**，再做判断。

本指南是把 Codex 告诉我的命令**亲自**执行，才完成复制的。打开 macOS 终端，用 `cd ~/hello-ai-연습/정리도구` 进入文件夹，然后输入上面的两行。如果是第一次用终端，请先看 [Claude Code 第10章](../20-claude-code/10-terminal.md)。

搬完之后，`.agents/skills` 下面有 `meeting-notes`、`study-notes`、`weekly-review` 三个文件夹就行了。

<Quiz id="ch505-move" />

## 用 `$` 来调用

在输入框里输入 `$`，就可以挑选并调用技能。[^dollar] 这次只发送了一个技能名称。

```
$weekly-review
```

复制完成之后，它**直接**打开了 `.agents/skills/weekly-review/SKILL.md`，没有用文件搜索。然后汇总 3 份回顾备忘，做出了每周回顾。

结果：[用技能做的每周回顾](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

我把数字和事实，和原始备忘对了一遍。

| 原始备忘 | 每周回顾 | 对吗 |
|---|---|---|
| 点赞 12 个 | 12 个 | 对 |
| 价格错写成 6,000韩元 | 6,000韩元 错误 | 对 |
| 套餐今天 4 个 | 4 个 | 对 |
| 套餐本周合计 11 个 | 11 个 | 对 |
| Instagram 3 次都发了 | 3 次 | 对 |
| 热红酒成本 1,800韩元 | 没有 | 漏了 |
| 买灯泡并换上 | 没有 | 漏了 |
| 写文案花了 2 小时 | 没有 | 漏了 |

来源：本指南的实践结果（2026-11-01）

没有错的项目，但有**三个漏掉了**。看起来是因为不太符合回顾模板的三栏（做得好的、可惜的、下周要做的），就被省掉了。像这样，**不只要看错的，也要看漏的。** 如果有不该漏掉的内容，就在技能里加一行，比如"像热红酒成本这种会成为下次会议议题的数字，要放进下周要做的里"。

即使不调用，只要请求和技能说明相符，Codex 也可能自己挑选技能。[^implicit] 所以最好在说明的开头，把**什么时候用**写清楚。[^frontload]

<Quiz id="ch505-call" />

## 创建新技能与插件

从头创建新技能时，调用默认自带的 `$skill-creator`，然后说明目标、步骤、格式。[^creator] 官方文档推荐的好的第一个技能，是每周汇报或会议后续整理这样的**步骤和格式总是相同的事**。[^first] 整理工具的三个技能正是这样的例子。

**插件**是把技能和外部工具连接打包在一起安装的套装。[^plugin] ChatGPT 和 Codex 共用一份插件目录。[^shared] 对于插件里带的钩子（自动运行的脚本），文档要求在运行之前先审查，判断它是否可信。[^hooks] 第一次见到的插件，就像在 [Claude Code 第7章](../20-claude-code/07-skills-plugins.md)里学的那样，先确认是谁做的、有什么权限。

<Quiz id="ch505-create" />

## 动手试试

1. 请 Codex 把 `.claude/skills` 里的 3 个技能复制到 `.agents/skills`。如果它征求许可，读过内容后判断；如果被拦住，就在终端里（应用菜单「View → Open Terminal」也行）亲自输入正文里的两行命令。
2. 打开一个新对话，在输入框里输入 `$`，确认三个技能是否出现。
3. 发送 `$weekly-review`，把结果和原始备忘对一对。把错的和漏的分开数一数。
4. 有漏掉的，就在技能里加一行，再运行一次。

**接续的课题**：第6章里，我们会看每周五让每周回顾自动运行的预约，以及云端和手机。

## 总结

- 技能格式（`SKILL.md`）和 Claude Code 相同。位置是 `.agents/skills`，调用用 `$名称`。
- `.agents` 是受保护文件夹，搬运时可能被拦住，或者需要许可（本指南只确认了在终端里被拦住）。
- 一行 `$weekly-review` 就出了每周回顾。5 个项目是对的，漏了 3 个。
- 不只确认错的，也要确认漏的。反复出现的话，就修改技能。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| `$` 提及 | 美元符提及 | 在 Codex 里按名称调用技能的方法 |
| `.agents/skills` | agents 技能文件夹 | Codex 在这个文件夹里查找技能 |
| skill-creator | 技能创建器 | 帮助创建新技能的默认技能 |

<ChapterDone :chapter="505" />

下一章：[第6章. 预约、云端、手机](06-schedule-cloud.md)

[^format]: Codex 官方文档，「Build skills」。 "A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^standard]: Codex 官方文档，「Build skills」。 "Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^where]: Codex 官方文档，「Build skills」。 "For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^mention]: Codex 官方文档，「Skills & Plugins」。 "ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins （确认日期 2026-11-01）
[^protected]: Codex 官方文档，「Agent approvals & security」。 "`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security （确认日期 2026-11-01）
[^dollar]: Codex 官方文档，「Slash commands」。 "You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands （确认日期 2026-11-01）
[^implicit]: Codex 官方文档，「Build skills」。 "**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^frontload]: Codex 官方文档，「Build skills」。 "Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills （确认日期 2026-11-01）
[^creator]: Codex 官方文档，「Skills & Plugins」。 "In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins （确认日期 2026-11-01）
[^first]: Codex 官方文档，「Skills & Plugins」。 "Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins （确认日期 2026-11-01）
[^plugin]: Codex 官方文档，「Skills & Plugins」。 "A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins （确认日期 2026-11-01）
[^shared]: Codex 官方文档，「Skills & Plugins」。 "ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins （确认日期 2026-11-01）
[^hooks]: Codex 官方文档，「Plugins」。 "Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins （确认日期 2026-11-01）

