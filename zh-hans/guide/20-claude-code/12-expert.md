# 第12章 像专家一样使用 — 按工作挑选，需要时再一个一个积累

> **一句话总结**：专家不是用很多功能的人，而是**挑选与工作大小相称的功能**的人。不要一开始就全部设置好，而是在**同样的不便反复出现时**，一个一个地增加。
> 这一章用每周运转第3阶段做出的「整理工具」的固定流程来收尾。

这一章依据 2026年10月31日确认的 Claude Code 官方文档编写。适用于任何 AI 的“像专家一样使用”原理，在[第1阶段第11章](../00-common/11-expert.md)里。这里只讲挑选和积累 Claude Code 功能的方法。

## 按工作的大小来挑选

| 这样的事 | 用这个 | 在哪里学过 |
|---|---|---|
| 一个问题，一篇文章 | 聊天（Claude 应用的 Chat） | [第2阶段](../10-claude/) |
| 读取并修改我文件夹里的文件 | Code 标签页的会话 | [第2章](02-install.md) |
| 很大、方法有多种的事 | 「计划」模式，先看方法 | [第5章](05-delegate-well.md) |
| 每次都要重新说的规则 | CLAUDE.md | [第6章](06-claude-md.md) |
| 经常重复同一流程的事 | 技能（`/名称`） | [第7章](07-skills-plugins.md) |
| 到点自动做的事 | 定时任务 | [第8章](08-parallel-cloud-schedule.md) |
| 一行确认·自动化 | 终端的 `claude -p` | [第10章](10-terminal.md) |
| 出错了必须撤销的事 | 回退 + Git 记录 | [第4章](04-permissions-undo.md) |

官方文档也把功能分成“每次会话始终可见的（CLAUDE.md）”“需要时调用的（技能）”“到点自己运行的”来说明。[^match] 用的功能越大，能做的事就越多，但要确认的东西也相应变多。

<Quiz id="ch412-choose" />

## 不要一次全做，而是逐步积累

**不需要一开始就设置好一切。** 官方文档说，每个功能都有“这时候就加上”的信号。[^build]

| 出现这样的事 | 就加上这个 |
|---|---|
| 同一条规则或命令错了两次 | 写进 CLAUDE.md |
| 总是用同样的请求开始一件事 | 保存成技能 |
| 同一个流程已经是第三次粘贴 | 保存成技能 |
| 总是从浏览器里复制资料过来 | 把那个服务连接成连接器（MCP） |
| 有些事不用问也该每次都发生 | 钩子（在规定的时刻自动运行的命令） |

出处：Claude Code 官方文档（仅摘录一部分）[^build]

本指南的整理工具也是按这个顺序长大的。第2章的长请求 → 第5章的模板 → 第6章的 CLAUDE.md → 第7章的技能。是**先遇到不便，然后才做工具。**

同样的信号，在**修改已经做好的东西时**也适用。同样的失误又出现了，就不要只在聊天里改一次就算了，而是修改 CLAUDE.md。如果有一个流程总是靠手工反复调整，就修改技能。[^update]

<Quiz id="ch412-build" />

## 现在可以不用再做的习惯

以前的模型所需要的窍门里，有些现在反而会碍事。这里只摘录官方文档列出的、与本指南读者相关的部分。[^stop]

| 以前的窍门 | 现在 |
|---|---|
| 给重要指令加上“重要！”或大写 | 平实写下的一行也会遵循。叠加强调，反而会让规则被过度套用 |
| 催促“别停，一直做到底” | 约好的事通常会做到底。取而代之的是给它确认标准（第5章） |
| 把文件夹结构长篇写进 CLAUDE.md | 文件夹 Claude 会自己读。只写文件夹里没有的东西 |

出处：Claude Code 官方文档[^stop]

如果是**一定要遵守的规则**，就用强调以外的办法。官方文档说，不能让步的规则，要改成钩子或拒绝规则。[^stop] 对本指南的读者来说，先用第4章的权限模式和 Git 记录来守住就足够了。

<Quiz id="ch412-stop" />

## 每周整理的固定流程

把第3阶段做出的工具，每周这样运转一下。

1. **收集**：会议·学习·每日回顾的备忘，随时放进 `inbox`。删掉个人信息。
2. **整理**：`/meeting-notes`、`/study-notes`，周五用 `/weekly-review`（或定时）。
3. **确认**：读 Claude 给出的**检查结果和“需要核实的地方”**，把数字·负责人·期限和原件对照。
4. **记录**：满意的话，用提交留存下来（第4章）。
5. **修改**：同样的意见提了两次，就修改 CLAUDE.md 或技能。

**不需要一开始就完美。** 每周运转一次，每次只改一处不便，几周之后就会成为一个完全适合我的工具。

<Quiz id="ch412-routine" />

## 小结

- 按工作的大小来挑选：提问用聊天，文件的事用 Code，大事先做计划，重复的用 CLAUDE.md·技能，到点的用定时。
- 不要一开始就全设置好。同样的不便反复出现时再一个一个地加，已经做好的东西也靠同样的信号来修改。
- 不用强调和催促，而是给平实的一行话和确认标准。一定要守的规则，靠权限·Git 这类机制来守。
- 每周运转 收集 → 整理 → 确认 → 记录 → 修改。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Hook | 钩子 | 在规定的时刻自动运行的命令 |
| Routine | 固定流程 | 每周按同样顺序运转的工作习惯（与第8章的云端定时名称含义不同） |

<ChapterDone :chapter="412" />

下一章：第3阶段 Claude Code 指南到这里就结束了。想把同样的整理工具搬到 OpenAI 的 Codex 上，请接着看[第3阶段 · Codex 指南](../21-codex/)。也可以在[第3阶段 · Claude Code 目录](./)里挑想再看的章节，或者用 [AI 知识水平测试](../00-common/level-test.md)检验一下到目前为止所学的内容。

[^match]: Claude Code 官方文档，《Extend Claude Code》。"Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview（确认日期 2026-10-31）
[^build]: Claude Code 官方文档，《Extend Claude Code》。"You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview（确认日期 2026-10-31）
[^update]: Claude Code 官方文档，《Extend Claude Code》。"A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview（确认日期 2026-10-31）
[^stop]: Claude Code 官方文档，《Best practices for Claude Code》。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices（确认日期 2026-10-31）
