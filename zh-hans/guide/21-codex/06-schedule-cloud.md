# 第6章 预约、云端、手机——到点自动运行，人不在也行

> **一句话总结**：每周都一样的事，用**预约**（Scheduled）来跑。用我的文件夹的预约，必须**电脑开着、应用在运行**才会运行。
> 云端是给有 GitHub 仓库的人用的，手机则像遥控器一样用来操控我的电脑。

这一章是根据 2026 年 11 月 1 日确认的 Codex 官方文档写的。这本指南没有真的保存预约。因为会暴露真实的工作内容，还会消耗用量（和 [Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)是同样的理由）。

## 用预约每周自动做周回顾

预约任务是先定好要重复的事，然后在后台运行的功能。[^schedule] 在应用侧边栏的 **Scheduled** 里，可以看到所有预约和运行记录。[^inbox]

预约在桌面应用或网页上创建，终端（Codex CLI）里没有预约管理界面。[^no-cli] 预约也是通过对话来创建。[^chat-create] 在预约里，还可以用 `$技能名称` 来调用技能。[^skill] 用第5章的技能，可以这样拜托它。

```
每周五下午 6 点，用 $weekly-review 在 notes 文件夹里做出那一周的周回顾。
```

**有条件。** 用我电脑里文件夹的预约，只有在电脑开着、应用正在运行时才会运行。[^awake] macOS·Linux 的 **Prevent sleep while running** 设置，会让电脑在对话**运行期间**不进入睡眠，这样人不在也能让对话继续。[^sleep] 它并不是让电脑一直醒着等到预约时间的功能，所以要使用预约，请另外确认电脑的节能设置。

预约是**没有人**的情况下运行的。所以，它沿用我默认的围栏（沙盒）范围，但如果组织没有禁止，就会以**不征求许可的方式**运行。[^unattended] 围栏之外的事，没有人可以问，所以可以认为会失败。

| 我的默认权限（围栏） | 在预约里发生的事 |
|---|---|
| 只读 | 需要写文件的预约会失败 |
| 在文件夹内写入 | 像整理工具那样只在文件夹里写的事可以运行 |
| Full access | 不问就使用文件·命令甚至互联网。危险 |

出处：Codex 官方文档（只摘录了一部分，中间一行是这本指南的整理）[^modes]

用第4章的权限菜单来说，Ask for approval 和 Approve for me 用的是中间一行（在文件夹内写入）的围栏，Full access 用的是最后一行。[^ask] 不过在预约里，即使是 Ask for approval，也**不会询问。** “只读”是在菜单里可能看不到的设置。

创建预约之前，**请先在平时的对话里把同样的请求跑一遍。** 像第5章那样把结果和原件对一对，没问题时再转成预约。最初几次的运行结果也一定要确认。官方文档也建议同样的顺序。[^test]

<Quiz id="ch506-schedule" />

## 云端有什么不同

云端任务在互联网另一端的工作空间里运行，所以我的电脑睡着时它也会继续。[^cloud] 作为交换，有条件。

- 必须有我能使用的**已发布环境**（published environment）。[^env]
- 创建环境时，要选择并连接**GitHub 仓库**。[^github]
- 我电脑里的文件、正在运行的程序、浏览器登录都不会转到云端。[^not-moved]

整理工具文件夹只在我的电脑上，所以这本指南不使用云端。如果你在公司用 GitHub 工作，只要记住：耗时很久的事可以送到云端，电脑关掉也行。

<Quiz id="ch506-cloud" />

## 用手机接着看

在手机上，可以查看进度、允许操作、发送指示。实际的任务在云端或**已连接的我的电脑**上运行。[^mobile] 要连接我的电脑，在应用的 **Settings → Connections → Control this Mac or PC** 里点 **Set up**。[^connect]

连接通过二维码完成。官方文档要求**只连接我自己拥有的、可信的设备。**[^trust] 因为已连接的手机可以操控我电脑里的 Codex。

官方文档以 iOS 应用为准来说明。功能是按账号依次开放的，所以我的手机上可能还没有。[^rollout]

<Quiz id="ch506-mobile" />

## 亲自试一试

1. 打开侧边栏的 **Scheduled** 看看（不创建也可以）。
2. 把第5章的 `$weekly-review` 在平时的对话里再跑一次，并确认结果。
3. 如果要创建预约，先确认这件事在文件夹里就能完成，再把第一次运行的结果和原件对一对。

**接下来的作业**：第7章会在终端里用 `codex exec` 一行命令来确认同一个整理工具。

## 整理

- 预约通过对话创建，在 Scheduled 里查看。在预约里可以调用 `$技能`。
- 用我的文件夹的预约，必须电脑开着、应用在运行。
- 预约是没有人的情况下运行的，所以沿用默认权限。Full access 很危险。
- 云端需要 GitHub 仓库和已发布环境。我的文件不会转过去。
- 手机用来操控我的电脑或云端。只连接可信的设备。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Scheduled | 预约任务 | 查看预约任务和运行记录的地方 |
| Published environment | 已发布环境 | 云端任务开始时准备好的工作空间 |
| Unattended | 无人值守 | 在没有人盯着的状态下运行 |

<ChapterDone :chapter="506" />

下一章：[第7章. 在终端里使用](07-terminal.md)

[^schedule]: Codex 官方文档，《Scheduled tasks》。"Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^inbox]: Codex 官方文档，《Scheduled tasks》。"Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^chat-create]: Codex 官方文档，《Scheduled tasks》。"You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^skill]: Codex 官方文档，《Scheduled tasks》。"In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^awake]: Codex 官方文档，《Scheduled tasks》。"Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^sleep]: Codex 官方文档，《Settings》。"On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings （确认日期 2026-11-01）
[^unattended]: Codex 官方文档，《Scheduled tasks》。"Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^modes]: Codex 官方文档，《Scheduled tasks》。"If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^test]: Codex 官方文档，《Scheduled tasks》。"Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
[^cloud]: Codex 官方文档，《Codex Cloud》。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud （确认日期 2026-11-01）
[^env]: Codex 官方文档，《Codex environments》。"A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes （确认日期 2026-11-01）
[^github]: Codex 官方文档，《Codex Cloud》。"Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud （确认日期 2026-11-01）
[^not-moved]: Codex 官方文档，《Codex environments》。"Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes （确认日期 2026-11-01）
[^mobile]: Codex 官方文档，《Codex on mobile》。"Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile （确认日期 2026-11-01）
[^connect]: Codex 官方文档，《Codex on mobile》。"Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile （确认日期 2026-11-01）
[^trust]: Codex 官方文档，《Codex on mobile》。"Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile （确认日期 2026-11-01）
[^rollout]: Codex 官方文档，《Codex on mobile》。"Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile （确认日期 2026-11-01）
[^ask]: Codex 官方文档，《Permissions》。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes （确认日期 2026-11-01）
[^no-cli]: Codex 官方文档，《Scheduled tasks》。"Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations （确认日期 2026-11-01）
