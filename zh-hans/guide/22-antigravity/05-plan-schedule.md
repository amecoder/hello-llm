# 第5章 计划·定时·浏览器·目标 — 用斜杠命令把事情交出去

> **一句话总结**：`/plan` 是修改之前先做计划，`/schedule` 是**只在这场对话里**运行的定时器，要跨对话持续运行的定时是 **Automations**。
> `/browser` 会操作 Chrome 来做网页上的事，`/goal` 在完成之前不会停下来。这两个都可能消耗很多用量。

这一章依据 2026年11月1日确认的 Antigravity 官方文档编写。本指南没有真正保存定时。因为会暴露实际的工作内容，而且会消耗用量（和 [Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)是同样的原因）。

## 先要计划 — `/plan`

普通的请求会直接开始修改文件。用了 `/plan`，它会先浏览文件夹，把需要决定的点整理出来给你看。[^plan] 如果计划没问题，就点 **Proceed** 转入执行。[^proceed]

```
/plan 我想在会议纪要·学习总结·每周回顾的模板里加一个“撰写日期”栏。先只给我看需要改什么的计划。
```

如果需求还很模糊，`/grill-me` 会有帮助。开始之前，它会**一次问一个问题**，并附上推荐答案。[^grill] 这相当于由工具替你引出 Claude Code 第5章里学到的“怎样把事情交代好”。

<Quiz id="ch605-plan" />

## 定时 — `/schedule` 和 Automations

Antigravity 里的定时有**两种。**

| | `/schedule` | Automations |
|---|---|---|
| 所在位置 | 创建它的对话里 | 对话之外（应用侧边栏） |
| 持续多久 | 在那场对话期间 | 重新打开应用也保留 |
| 每次 | 唤醒同一场对话 | 以新对话开始 |

出处：Antigravity 官方文档（仅摘录一部分）[^compare]

`/schedule` 可以建立只响一次的定时器或重复的日程，并且在等待期间不会堵住对话。[^schedule] 但它属于那场对话，所以像**每周五的每周回顾**这样要持续运行的事，要用 **Automations**。[^scoped]

Automations 会在我不在的时候，也按设好的日程向代理发送消息。[^automations] 在应用侧边栏的 **Automations** 里打开。有几点要知道。

- 每次运行，可以选择模型档次（Flash Lite·Flash·Pro）。默认是 Flash。[^tier]
- 不会在准确的那一分钟运行。会在间隔的 10% 以内、最多 15 分钟内分散运行。[^jitter]
- 可以用 **Run Now** 立刻运行一次，或者用 **Create with Prompt** 和代理对话着创建。[^run-now]

代理工作期间，会阻止电脑进入睡眠。[^sleep] 但是，**应用关着或电脑睡眠期间 Automations 还会不会运行，官方文档里没有写。** 就像 Claude Code·Codex 的桌面定时一样，把应用开着、让电脑保持唤醒会更稳妥（本指南的建议）。

创建定时之前，请先在平时的对话里把同样的请求跑一遍，用 Run Now 试一次，然后再设日程。

<Quiz id="ch605-schedule" />

## 浏览器与目标 — `/browser`·`/goal`

`/browser` 会把网页上的事交给**浏览器专职子代理**。这个子代理会操作 Google Chrome 来打开页面、点击、截图。[^browser] 浏览器会话都会被**录成视频**，留在成果里。[^recorded] 在页面里执行脚本的操作，默认会询问许可。[^js]

`/goal` 会让它在达成目标之前，中途不停地工作。[^goal] 它没有重复次数的上限，会一直运行，直到它判断做完了，或者我让它停下。[^no-cap] 相应地可能消耗很多用量，所以请把**“做完了”的标准写清楚。** 例如：

```
/goal 把 inbox 里的 6 份备忘全部按模板整理到 notes。完成标准：每份备忘都有一个结果文件，每个文件最下面有「与原件核对的事项」一节。
```

目标模式**只改变停下的方式。** 权限和审核设置不变，所以平时会询问许可的事，仍然会问。[^goal-perm]

<Quiz id="ch605-browser-goal" />

## 在其他设备上接着看

在应用的 **Settings → Application → Enable Remote Control** 里打开，就可以在其他设备的网页浏览器里操控我电脑上的 Antigravity。[^remote][^any-browser] 在其他设备上，也要用**和桌面端相同的 Google 账号**登录。[^same-account]

即使远程使用，事情也是用**我电脑**里的文件·工具·登录信息来做的。[^local] 虽然方便，但远程操控只请在可信的设备上打开。

<Quiz id="ch605-remote" />

## 亲手试一试

1. 用 `/plan` 只拿上面“撰写日期”栏的计划，在点 Proceed 之前读一读计划。
2. 打开侧边栏的 Automations 看一看（不创建也可以）。
3. 如果要创建定时，先用平时的对话和 Run Now 试一试。
4. 如果用 `/goal`，要把“完成标准”一起写上。

**连续任务**：在第6章里，我们用终端的 `agy` 来确认同一个整理工具，并看看本指南实际遇到过的陷阱。

## 小结

- `/plan` 先做计划，`/grill-me` 一次问一个问题，把需求引出来。
- `/schedule` 只在那场对话里；要持续运行的事用 Automations。
- Automations 在应用关着时还会不会运行，文档里没有写。把应用开着、让电脑保持唤醒更稳妥。
- `/browser` 会操作 Chrome 并录像。`/goal` 不会停，所以要给它完成标准。
- 远程操控用同一个账号，事情在我的电脑上做。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Automations | 自动化任务 | 跨对话持续运行的定时 |
| Subagent | 子代理 | 主代理把事情分出去交给它的辅助代理 |
| Remote Control | 远程控制 | 在其他设备上操控我电脑上的 Antigravity |

<ChapterDone :chapter="605" />

下一章：[第6章. 在终端里使用](06-terminal.md)

[^plan]: Antigravity 官方文档，《Plan (/plan)》。"While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan（确认日期 2026-11-01）
[^proceed]: Antigravity 官方文档，《Plan (/plan)》。"**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan（确认日期 2026-11-01）
[^grill]: Antigravity 官方文档，《Slash commands overview》。"The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands（确认日期 2026-11-01）
[^compare]: Antigravity 官方文档，《Schedule command (/schedule)》。"| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule（确认日期 2026-11-01）
[^schedule]: Antigravity 官方文档，《Schedule command (/schedule)》。"Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule（确认日期 2026-11-01）
[^scoped]: Antigravity 官方文档，《Schedule command (/schedule)》。"**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule（确认日期 2026-11-01）
[^automations]: Antigravity 官方文档，《Antigravity features》。"Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^tier]: Antigravity 官方文档，《Antigravity features》。"**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^jitter]: Antigravity 官方文档，《Antigravity features》。"Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^run-now]: Antigravity 官方文档，《Antigravity features》。"**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^sleep]: Antigravity 官方文档，《FAQ》。"If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq（确认日期 2026-11-01）
[^browser]: Antigravity 官方文档，《Browser command (/browser)》。"Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser（确认日期 2026-11-01）
[^recorded]: Antigravity 官方文档，《Browser command (/browser)》。"**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser（确认日期 2026-11-01）
[^js]: Antigravity 官方文档，《Browser command (/browser)》。"Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser（确认日期 2026-11-01）
[^goal]: Antigravity 官方文档，《Goal command (/goal)》。"The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal（确认日期 2026-11-01）
[^no-cap]: Antigravity 官方文档，《Goal command (/goal)》。"**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal（确认日期 2026-11-01）
[^goal-perm]: Antigravity 官方文档，《Goal command (/goal)》。"Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal（确认日期 2026-11-01）
[^remote]: Antigravity 官方文档，《Antigravity features》。"In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^same-account]: Antigravity 官方文档，《Remote Control》。"Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control（确认日期 2026-11-01）
[^local]: Antigravity 官方文档，《Antigravity features》。"**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features（确认日期 2026-11-01）
[^any-browser]: Antigravity 官方文档，《Remote Control》。"Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control（确认日期 2026-11-01）
