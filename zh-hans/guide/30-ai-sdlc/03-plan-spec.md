# 第3章 规划与规格说明——接受访谈，写出 SPEC.md

> **一句话总结**：要做什么还模模糊糊的时候，不要自己一个人全部理清楚，而是**让 Claude 来采访你**。访谈结束后，Claude 会把那些内容写成 **SPEC.md**（规格说明书）。
> 规格说明讲的不是"怎么做"，而是**"应该变成什么样"的约定**。这个约定，就是第4～6章里制作、确认、评审的依据。

这一章依据 2026年11月1日确认的 Claude Code、GitHub 官方文档，以及 spec-kit、OpenSpec 仓库里的说明写成。具体说明要交代什么的要领，在 [Claude Code 第5章](../20-claude-code/05-delegate-well.md)学过了。这一章把那些要领扩展到"制作之前的阶段"。

## 为什么要先做规划

就像第1章看到的，AI 常常**做出和我脑子里想的不一样的东西**，常见的原因是缺了只读仓库是看不出来的信息。[^missing] 那些信息只在我脑子里。比如谁来用、哪里不方便、什么事不做。

GitHub 的入门教程也说，**写代码之前，先把要做的东西记下来，并追踪进度。**[^before-code]

说得越具体，来回修改的次数就越少。官方文档要求一开始就点明文件、说出症状，并说明"做完了"是什么样子。[^specific]

| 不够好的例子 | 更好的例子 |
|---|---|
| 做一个显示待办事项的页面 | 一个把会议纪要里的待办事项表汇总起来，按负责人、期限分别显示的页面。做完时，备忘里的 5 个待办事项必须全部看得到 |

来源：本指南的例子（要领来自官方文档）[^specific]

<Quiz id="ch703-why" />

## 接受访谈，写出 SPEC.md

想要的东西还不清楚也没关系。官方文档说，不需要在写提示词之前全部想清楚，可以**让 Claude 来采访你**。[^interview] 把文档里的示例译成中文，大致是这样。

> 我想做这样一个东西，但还没有深入想过。请先采访我，直到能写出规格说明为止，做完后写进 SPEC.md。

这样，Claude 会针对还没有定下来的部分，用**选择题**反过来问你。[^choices] 如果是待办事项看板，请求就会是这样。

```
我想做一个网页，把第3阶段整理工具生成的会议纪要里的待办事项表汇总起来显示。我还没有深入想过。请先采访我，直到能写出规格说明为止，做完后写进 SPEC.md。
```

SPEC.md 生成之后，在**新会话**里让它看着这个文件来制作。这是为了从干净的上下文，以及用文字写下来的"完成的定义"开始。[^fresh] 这样可以让访谈中来回的那一长串对话，不要掺进制作过程里。

**做完之后，要对照 SPEC.md 来确认。** 这件事，在第6章评审里还会再讲。

<Quiz id="ch703-interview" />

## 好的规格说明是什么样

规格说明里写的是**从外面看得到的行为**。OpenSpec 的说明书说，规格说明"不是实现计划，而是行为的约定"，而且不改变外部可见行为的实现细节，通常不放进规格说明。[^contract] spec-kit 也说，在规格说明阶段，应该专注于**做什么、为什么**，而不是技术，技术选择要推迟到下一个计划阶段。[^what-why]

如果是待办事项看板的 SPEC.md，就会有这样的句子。

| 好的句子 | 不够好的句子 |
|---|---|
| 会议纪要里的待办事项，一个不漏地都显示出来 | 用 JavaScript 读取表格 |
| 过了期限的待办事项，标记不一样 | 看起来漂亮 |
| 不显示个人姓名，只显示角色 | 用整洁的代码来做 |

来源：本指南的例子

左边的句子，**可以用"是／否"来确认。** 到了第5章，这些句子就直接成了确认的手段。

<Quiz id="ch703-spec" />

## 规格驱动开发工具

以规格说明为中心的开发方式，叫作**规格驱动开发**（Spec-Driven Development）。先定下要做什么、为什么做，再把那份规格说明变成计划、任务、代码。[^sdd] 有两个工具可以帮助做这件事。

| 工具 | 出品方 | 做什么 |
|---|---|---|
| spec-kit | GitHub | 分阶段完成规格说明 → 计划 → 任务清单 → 实现 |
| OpenSpec | Fission-AI | 每次变更都建立提案、规格、设计、任务文件夹 |

来源：各工具的说明（只摘录了一部分）[^speckit][^openspec]

OpenSpec 是让 AI 写文档，而**人在代码写出来之前审查计划**。[^openspec] spec-kit 是一次执行一个阶段，**审查结果之后**再往下走。[^one-at-a-time] 两个工具都在中间留了人来确认的位置。

本指南**不安装这两个工具。** spec-kit 需要 Python 3.11 及以上，以及叫 uv 的工具[^speckit-req]，OpenSpec 需要在终端安装（或者 Node.js 22.12 及以上）。[^os-install] 只靠上面学过的"访谈 → SPEC.md → 新会话"流程，也能实践同样的想法。以后做更大的项目时，再去了解它们。

<Quiz id="ch703-tools" />

## 动手试试

1. 在 Claude Code 应用里，打开第2章建的 `할일보드` 文件夹。
2. 发送上面的访谈请求，回答 Claude 的问题。不知道的话，说"给我推荐"也可以。
3. 读一读生成的 SPEC.md，每一句都问问"能用是／否来确认吗？"。不能的话，请它修改。
4. 确认 SPEC.md 里没有放入真实姓名、联系方式（因为是公开仓库）。
5. 满意的话，就留下记录（提交）。

**接续的课题**：第4章里，我们会在新会话里依据 SPEC.md 拿到计划，并在分支上做出第一个画面。

## 总结

- AI 常常做出离谱的东西，常见原因是缺了我脑子里的信息。制作之前先写下来。
- 不清楚的话，让 Claude 采访我，把结果写成 SPEC.md。
- SPEC.md 生成之后，在新会话里制作。做完之后，对照 SPEC.md 检查。
- 规格说明里写的是从外面看得到的行为，而且要写成能用是／否来确认。
- spec-kit、OpenSpec 是帮助实践同样想法的工具。本指南不安装。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Spec | 规格说明 | 写下应该变成什么样的约定 |
| SPEC.md | SPEC.md 文件 | 写着规格说明的文件 |
| Spec-Driven Development | 规格驱动开发 | 先定规格说明，再据此制作的方式 |
| Definition of done | 完成的定义 | "做完了"的标准 |

<ChapterDone :chapter="703" />

下一章：[第4章. 制作](04-build.md)

[^missing]: Claude Code 官方文档，「Best practices for Claude Code」。 "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^before-code]: GitHub 官方文档，「Planning your work」。 "Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work （确认日期 2026-11-01）
[^specific]: Claude Code 官方文档，「Best practices for Claude Code」。 "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^interview]: Claude Code 官方文档，「Best practices for Claude Code」。 "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^choices]: Claude Code 官方文档，「Best practices for Claude Code」。 "Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^fresh]: Claude Code 官方文档，「Best practices for Claude Code」。 "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-01）
[^contract]: OpenSpec 文档，「Concepts」。 "A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md （确认日期 2026-11-01）
[^what-why]: spec-kit 文档，「Spec-Driven Development Quickstart」。 "Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md （确认日期 2026-11-01）
[^sdd]: spec-kit README. "Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit （确认日期 2026-11-01）
[^speckit]: spec-kit README. "Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit （确认日期 2026-11-01）
[^openspec]: OpenSpec README. "**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec （确认日期 2026-11-01）
[^one-at-a-time]: spec-kit README. "Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit （确认日期 2026-11-01）
[^speckit-req]: spec-kit README. "You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit （确认日期 2026-11-01）
[^os-install]: OpenSpec README. "Install OpenSpec. On macOS or Linux, in your terminal:" / "(needs Node.js 22.12.0 or higher)" https://github.com/Fission-AI/OpenSpec （确认日期 2026-11-01）

