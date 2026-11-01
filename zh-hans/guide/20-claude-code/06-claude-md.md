# 第6章 项目记忆 — 用 CLAUDE.md 写下我的规则

> **一句话总结**：每次都要重新说一遍的规则，写进文件夹里的 **CLAUDE.md** 文件。Claude 每次开始会话时都会读这个文件。
> 不过它**不是强制装置，而是参考背景**。写得越短、越具体，它就越能遵守。

这一章依据2026年10月31日确认的 Claude Code 官方文档和 macOS 桌面应用（韩语界面，付费账号）编写。这一章是把第5章做的模板，归拢成“基本规则”。

## 每次会话都从头开始

Claude Code 的会话每次都**从空白状态开始。** 即使在上一个会话里说过“日期请这样写”，新会话也不知道。[^fresh] 能让记忆跨会话延续的机制有两种。[^two]

| | CLAUDE.md | 自动记忆 |
|---|---|---|
| 谁来写 | 我 | Claude |
| 里面有什么 | 指示和规则 | 我纠正过的内容、我的喜好 |
| 什么时候读取 | 每次会话开始时 | 每次会话开始时（只读前面部分） |

出处：Claude Code 官方文档[^two]

这一章讲的是我自己写的 **CLAUDE.md**。自动记忆是 Claude 看了我的纠正后，自己记下的备忘。[^two]

<Quiz id="ch406-fresh" />

## 写什么

CLAUDE.md 是写下**“不写的话每次都要重新解释的内容”**的地方。[^when] 遇到这些情况就写下来。

- Claude **第二次**犯同样的错时
- 正在**重复提出**上个会话里提过的**同一个纠正**时
- 对新来的人也**需要同样告知**的内容

出处：Claude Code 官方文档[^when]

并且要写得**具体到可以验证**。[^concrete]

| 不够好的规则 | 更好的规则 |
|---|---|
| 日期请写得整洁一点 | 日期像 10/27(周一) 这样写 |
| 请好好整理 | 待办事项用表格写，一定要包含负责人和期限 |
| 请小心对待原件 | 绝不修改 inbox 里的原始备忘 |

更好的规则，看了结果就能马上判断“有没有遵守”。

**请写得简短。** 官方文档建议每个文件**控制在200行以内**。越长，占用的背景越多，被遵守的程度也越低。[^short] 由多个步骤组成的流程，最好挪到第7章的技能里。[^when]

<Quiz id="ch406-what" />

## 实践 — 用我的规则做出 CLAUDE.md

让它把第4章里写下的“通用规则”做成 CLAUDE.md。

![CLAUDE.md 请求。红色编号 ① 标在输入框里写着5条规则的请求上](../../../guide/20-claude-code/assets/shot-22-claudemd-prompt-marked.png)

```
请为这个文件夹做一个 CLAUDE.md。要放进去的规则：1) 绝不修改 inbox 里的原始备忘 2) 整理时使用 templates 文件夹里的模板 3) 日期像 10/27(周一) 这样写 4) 备忘里没有的内容不要编造，写成（备忘中没有） 5) 待办事项用表格写，一定要包含负责人和期限。要简短，控制在20行以内。
```

Claude 在文件夹最上层做出了 `CLAUDE.md`（结果：[6장-CLAUDE.md.txt](/practice/notes/results/6장-CLAUDE.md.txt)）。5条规则各占一行，用粗体写出，后面还附上了待办事项表格的示例。

文件夹最上层的 `CLAUDE.md`（或 `.claude/CLAUDE.md`）称为**项目指示**。它适用于在这个文件夹里工作的所有会话。[^where]

<Quiz id="ch406-make" />

## 测试它有没有遵守 — 在新会话里

CLAUDE.md 是在**会话开始时**读取的。[^fresh] 所以测试要在**新会话**里做。这次完全不提格式，只简短地提出请求。

![新会话里的简短请求。红色编号 ① 标在「请用 inbox 里的3份复盘备忘，写本周的周复盘。」上](../../../guide/20-claude-code/assets/shot-23-claudemd-test-marked.png)

```
请用 inbox 里的3份复盘备忘，写本周的周复盘。
```

把结果（[6장-주간회고-2026-10-27.txt](/practice/notes/results/6장-주간회고-2026-10-27.txt)）和规则对照了一下，是这样的。

| 规则 | 结果 |
|---|---|
| 使用 templates 的模板 | 原样使用第5章的 KPT 模板（做得好的、不足的、下周要做的） |
| 日期像 10/27(周一) | `10/30(周四)`、`11/3(周一)` 的格式 |
| 备忘里没有就写（备忘中没有） | 在缺少“为什么”的两处写了`（备忘中没有）` |
| 不修改原件 | inbox 备忘保持原样 |

出处：本指南的实践结果（2026-10-31）

数字（Instagram 3次、点赞12个、写错的价格 6,000韩元、套装4个·每周11个、热红酒成本 1,800韩元）也都和备忘一致。

![结果界面。红色编号标在：① Claude 用模板的检查表自己确认出的「检查结果」，② 「需要确认的3件事」，③ 会话信息栏里的成果（周复盘文件）](../../../guide/20-claude-code/assets/shot-24-claudemd-result-marked.png)

看 ①，你会发现 Claude 用第5章做的模板说明里的**检查表自己做了确认**，还说明了确认的范围（复盘备忘 3/3）。在 ② 里，它先告知了这几件事：备忘里的星期和实际日历不一致（第2章里说过的“编造的日期”）、备忘里没写原因的格子、原始备忘里一处没有记录的修改（那是截图前本指南改的一行，不是 Claude 做的）。**把规则和检查表写下来，结果回来时就会连同依据一起回来。**

<Quiz id="ch406-test" />

## 它不是强制规则

官方文档明确说，CLAUDE.md 是**参考背景，不是强制设置**。[^context] 所以要这样写。

- 越是必须遵守的东西，越要写得**具体而简短**。越具体，遵守得越一致。[^context]
- 如果有互相**冲突的规则**，Claude 可能会随便选一条。要时不时读一读，把过时的规则删掉。[^conflict]
- 无论如何都必须阻止的事（例：删除原件文件夹），不要只相信 CLAUDE.md，要和第4章的权限模式及 Git 记录一起来守住。

::: details 也有适用于我整台电脑的 CLAUDE.md
写在 `~/.claude/CLAUDE.md`（我的用户文件夹）里的指示，适用于**所有文件夹的会话**。[^where] 本指南截图用的电脑上也有这样的个人指示，所以会在回答末尾加“状态：”一行等，界面略有不同。只在一个文件夹里使用的规则，请写进那个文件夹的 CLAUDE.md。
:::

<Quiz id="ch406-not-enforced" />

## 亲自试一试

1. 把第4章写下的通用规则，精简成3~5行。要写得具体，让人能判断“有没有遵守”。
2. 像上面的请求那样，请它做出 CLAUDE.md，并在文件栏里确认内容。
3. 打开**新会话**，发送一个不提格式的简短请求。
4. 把结果和规则表逐条对照。如果有没遵守的规则，就写得更具体一些。

**连续任务**：现在，“帮我整理会议纪要”“帮我做学习笔记”都是每次用话来说。在第7章里，会把这些请求做成像 `/会议整理` 这样的**技能**，用一行就能调用。

## 小结

- 会话每次都从头开始。要重新解释的内容，写进 CLAUDE.md。
- 同样的错误、同样的纠正第二次出现时，就是该写的时候。要具体，控制在200行以内。
- 文件夹最上层的 CLAUDE.md 适用于那个文件夹的所有会话，`~/.claude/CLAUDE.md` 适用于所有文件夹。
- 它有没有遵守，在新会话里用简短的请求来测试。
- 它不是强制装置。必须阻止的事，要和权限模式、Git 记录一起来守住。

## 术语表

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| CLAUDE.md | CLAUDE.md | 每次会话都会读取的、由我来写的指示文件 |
| Auto memory | 自动记忆 | Claude 自己记下我的纠正和喜好的备忘 |
| Project instructions | 项目指示 | 适用于那个文件夹所有会话的 CLAUDE.md |
| Context | 背景（上下文） | 给它参考用的信息。和强制规则不同 |

<ChapterDone :chapter="406" />

下一章：[第7章. 技能、插件、外部工具](07-skills-plugins.md)

[^fresh]: Claude Code 官方文档，「How Claude remembers your project」。"Each Claude Code session begins with a fresh context window." / "Claude reads them at the start of every session." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^two]: Claude Code 官方文档，「How Claude remembers your project」。"Two mechanisms carry knowledge across sessions" / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Both are loaded at the start of every conversation." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^when]: Claude Code 官方文档，「How Claude remembers your project」。"Treat CLAUDE.md as the place you write down what you'd otherwise re-explain." / "Claude makes the same mistake a second time" / "You type the same correction or clarification into chat that you typed last session" / "A new teammate would need the same context to be productive" / "If an entry is a multi-step procedure or only matters for one part of the codebase, move it to a skill" https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^concrete]: Claude Code 官方文档，「How Claude remembers your project」。"Write instructions that are concrete enough to verify" https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^short]: Claude Code 官方文档，「How Claude remembers your project」。"target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^where]: Claude Code 官方文档，「How Claude remembers your project」。"Personal preferences for all projects" / "Team-shared instructions for the project" / "A project CLAUDE.md can be stored in either ./CLAUDE.md or ./.claude/CLAUDE.md." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^context]: Claude Code 官方文档，「How Claude remembers your project」。"Claude treats them as context, not enforced configuration." / "The more specific and concise your instructions, the more consistently Claude follows them." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
[^conflict]: Claude Code 官方文档，「How Claude remembers your project」。"if two instructions contradict each other, Claude may pick one arbitrarily." https://code.claude.com/docs/en/memory（确认日期 2026-10-31）
