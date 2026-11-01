# 第4章 许可与撤销——权限模式、回退、Git 记录

> **一句话总结**：用**权限模式**来决定 Claude 不用问就能做的事的范围。结果不满意，就用**回退**（`/rewind`）退回到上一个请求之前。
> 但回退也有撤不回的东西。所以，重要的状态要用 **Git 记录（提交）** 再留一份。

这一章依据 2026年10月31日确认的 Claude Code 官方文档，以及 macOS 桌面应用（韩文界面，付费账号）写成。直接使用第3章为止用的**整理工具（정리도구）**文件夹（已开启 Git）。

## 选择权限模式

点输入框下面一行右侧的模式名称（本指南的画面里是「手动（수동）」），就会打开权限模式菜单。快捷键是 **Cmd+Shift+M**。[^keys]

![权限模式菜单。① 自动，② 手动（有勾选标记），③ 自动接受编辑，④ 计划，⑤ 绕过权限（灰色的「在 Claude Code 设置中启用」），⑥ 输入框下面一行的模式按钮上标有红色编号](../../../guide/20-claude-code/assets/shot-12-modes-marked.png)

| 编号 | 画面名称 | 官方文档名称 | Claude 不用问就做的事 |
|---|---|---|---|
| ② | 手动（수동） | Manual | 没有（修改或执行之前每次都问） |
| ③ | 自动接受编辑（편집 자동 수락） | Accept edits | 在文件夹里新建、修改文件，以及基本的文件命令 |
| ④ | 计划（계획） | Plan | 只读取和查看（不修改文件，只给出计划） |
| ① | 自动（자동） | Auto | 大部分（由检查器在后台核对是否符合请求） |
| ⑤ | 绕过权限（권한 무시） | Bypass permissions | 几乎全部（要在设置里打开才会出现） |

来源：画面名称取自本指南的画面确认（2026-10-31），行为取自官方文档[^modes]

每种模式，都是在**便利和我盯着看的程度之间做取舍。**[^tradeoff]

**一开始请从「手动」开始。** 一边看 Claude 要做什么，一边逐步熟悉，会更让人放心。它做的事靠得住了，可以换到「自动接受编辑」。事情大的时候，最好先用「计划」拿到方法（第5章）。[^plan-tip]

- 在菜单里选的模式，**按文件夹分别记住。** 不过「计划」只适用于当前会话。[^remember]
- 以前的画面里，模式名称是 Ask permissions、Auto accept edits、Plan mode。[^old-names]

<Quiz id="ch404-modes" />

## 为什么要小心「自动接受编辑」「自动」「绕过权限」

**自动接受编辑**不只是修改文件，连**删除文件的命令**（`rm`）也不问就执行。不过只限于工作文件夹里。[^accept] 第2章说"要选一个小的练习文件夹"，原因就在这里。文件夹小，失误能波及的范围也小。不过，整条删除危险路径的命令（例：`rm -rf ~`，删除整个主文件夹），在任何模式下都不会被自动允许。[^critical]

**自动**能大幅减少询问，但官方文档把话说得很死：自动模式只是减少许可窗口，**并不保证安全。**[^auto] 请把它用在大方向可以信任的事情上，不要在敏感的事情上，用它来代替检查。[^auto]

**绕过权限**在菜单里是灰色的，要在设置里另外打开才会出现。[^modes] 官方文档要求，这个模式**只在隔离的容器或虚拟机里**使用。[^modes] 普通用户不需要打开它。

::: details 明明是「手动」，却不弹出许可窗口时
就像第2章看到的，如果在终端版 Claude Code 里设置过允许规则，应用里也会套用那些设置。[^same-settings] 本指南的截图也是在这样的电脑上拍的，所以没有出现许可窗口。在会弹出许可窗口的画面里，会显示将要改变什么，每次改变时都可以选择允许或拒绝。[^modes]
:::

<Quiz id="ch404-auto" />

## 回退——退回到上一个请求之前

Claude Code **每次在我发出请求时，都会自动保存那之前的状态。** 这叫作**检查点**（Checkpoint）。[^checkpoint] 就像游戏里的存档点，结果不满意，就可以回到那个点。

我们来实际操作。在一个新会话里，请它整理学习笔记。

```
把 inbox 里的学习笔记整理成学习笔记文档。分成核心内容 / 生词解释 / 要提的问题 / 要试的事 四个部分，作为新文件保存在 notes 文件夹里。不要修改原始备忘。
```

学习笔记做好了（结果：[4장-공부노트-2026-10-28.txt](/practice/notes/results/4장-공부노트-2026-10-28.txt)）。我们来把这份笔记退回到没发生过的状态。

1. 在输入框里输入 `/rewind` 。出现"将会话回退到之前的消息（세션을 이전 메시지로 되돌리기）"这条提示时，按 **Enter**，再按一次 **Enter** 执行。
2. 在**回退**窗口里，会以列表形式显示我发出过的请求。点一下想退回到的那个请求。

![回退窗口。在"将会话恢复到之前的消息（세션을 이전 메시지로 복원합니다）"下面，① 我发出的请求列表上标有红色编号](../../../guide/20-claude-code/assets/shot-13-rewind-marked.png)

3. 在确认窗口里选择**要撤销什么**，然后点**回退**。

![回退确认窗口。① 恢复「代码和对话（코드와 대화）」，②「1 个文件 · +0 −35」，③「通过 shell 命令所做的更改不会被撤销。提交会原样保留。（셸 명령으로 적용된 변경 사항은 되돌려지지 않습니다. 커밋은 그대로 유지됩니다.）」，④「回退」按钮上标有红色编号](../../../guide/20-claude-code/assets/shot-14-rewind-confirm-marked.png)

② 里的 `+0 −35`，意思是一回退，**就会消失 35 行**。在这次练习里，是新建的学习笔记的 35 行。点之前，请用这个数字确认会改变什么。

① 的恢复列表里有三项。

![恢复选项。① 「代码和对话」（已勾选）、「仅对话（대화만）」、「仅代码（코드만）」列表上标有红色编号](../../../guide/20-claude-code/assets/shot-15-restore-options-marked.png)

| 画面名称 | 做什么 |
|---|---|
| 代码和对话（코드와 대화） | 文件和对话都回到那个时间点 |
| 仅对话（대화만） | 只有对话回到那个时间点，文件保持现在的样子 |
| 仅代码（코드만） | 只有文件回到那个时间点，对话保持现在的样子 |

来源：画面名称取自本指南的画面确认（2026-10-31），行为取自官方文档[^restore]

用「代码和对话」回退之后，学习笔记文件消失了，对话也空了。回退掉的请求**又回到了输入框里**，所以可以修改后重新发送。[^restore-prompt]

![回退之后的画面。① 「还没有消息（아직 메시지가 없습니다）」，② 输入框里又出现了被回退的请求，③ 会话信息栏里成果物、更改事项卡片消失，这几处标有红色编号](../../../guide/20-claude-code/assets/shot-16-after-rewind-marked.png)

这些时候用起来不错。

- 不喜欢整理的格式，想**修改请求再来一遍**时 → 「代码和对话」
- 文件很好，但**对话莫名其妙变得很长**时 → 「仅对话」
- 想保留对话里的说明，**只把文件恢复原样**时 → 「仅代码」

<Quiz id="ch404-rewind" />

## 回退撤不回的东西

回退不是万能的。确认窗口里 ③ 的那句话，就说明了它的局限。

- **用命令（shell）改的文件**：Claude 不是用文件编辑工具，而是只靠执行命令改的文件，不会被追踪。[^limits-bash]
- **我亲自修改的文件、其他会话修改的文件**：通常不追踪。只追踪当前会话里修改过的文件。[^limits-external]
- **提交**：Git 记录会原样保留（确认窗口里的文字）。
- **过旧的检查点**：每个会话最多保留最近 100 个检查点，默认约 30 天后清理。[^retention]

官方文档在这种情况下，建议**用 Git 之类的版本管理来恢复**。[^limits-bash] 所以下一节的 Git 记录，是第二道安全网。

<Quiz id="ch404-limits" />

## Git 记录——第二道安全网

第3章里，我们给文件夹开启了 Git。对结果满意时，请把那个状态用**提交**（一条记录）留下来。这样，即使回退回不去的情况下，也能回到那条记录。

会话信息栏的更改事项卡片上，有一个**「提交更改（변경 사항 커밋）」**按钮（第3章）。在本指南里点了一下，应用替我向 Claude 发出了"请把现在改动的内容提交"的请求，Claude 就留下了提交。用嘴说着拜托它也可以。

```
把现在改动的内容提交。记录的名称用韩文写，要让人看得出改了什么。
```

以后想回到那条记录时，这样拜托。

```
先给我看自上次提交以来改动了哪些文件。我确认之后，再恢复到那个提交的状态。
```

**恢复之前，请先让它给你看"会消失什么"。** 提交之后做的事，用 Git 恢复时可能会消失。多加一步确认，就能减少误删。

| | 回退（检查点） | Git 记录（提交） |
|---|---|---|
| 什么时候保存 | 每次发出请求时自动保存 | 我（或 Claude）留下时 |
| 撤销什么 | 在这个会话中 Claude 编辑的文件和对话 | 已提交的文件 |
| 能保留多久 | 最近 100 个，约 30 天 | 直到删除记录为止 |

来源：官方文档[^checkpoint][^retention]，Git 一栏是本指南的整理

<Quiz id="ch404-git" />

## 动手试试

1. 点输入框下面一行的模式按钮，打开权限模式菜单，读读五种模式的说明。现在先保持「手动」。
2. 发出整理学习笔记的请求，把做好的笔记和原始笔记对一对（5 个要领、生词、1 个问题、1 件要试的事）。在本指南里，Claude 连回顾备忘也读了，并填上了"要试的事：已试过（10/30）"。对于用了没有被要求的文件作依据的地方，要另外确认那个依据对不对。
3. 用 `/rewind` 回退到那个请求之前。先确认确认窗口里的 `+0 −N` 数字。
4. 在回到输入框的请求里改一个格式（例："生词解释用表格"），再发送一次。
5. 出现满意的结果，就用「提交更改」留下记录。

**接续的课题**：把第2章的会议纪要和第4章的学习笔记并排放在一起，用三行写下想让两份文档共用的规则（日期写法、待办事项表格的样子等）。在第6章里，会把这些规则保存到 CLAUDE.md 里。

## 总结

- 权限模式有手动、自动接受编辑、计划、自动、绕过权限。一开始从手动开始。
- 自动接受编辑，连文件夹里删除文件的命令都不问。自动不保证安全。绕过权限只在隔离的环境里使用。
- 每个请求都会保存检查点。用 `/rewind` 在代码和对话、仅对话、仅代码里选一种回退。
- 回退通常不会撤销只靠命令改动的文件、我亲自修改的文件和提交。
- 好的状态用提交留下，做成第二道安全网。恢复之前，先确认会消失什么。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Permission mode | 权限模式 | Claude 不用问也可以做的事的范围 |
| Accept edits | 自动接受编辑 | 文件夹里的文件编辑和基本文件命令不用问的模式 |
| Plan mode | 计划模式 | 不修改，看过之后只给出计划的模式 |
| Checkpoint | 检查点 | 每次发出请求时自动留下的存档点 |
| Rewind | 回退 | 回到检查点的功能 |
| Commit | 提交 | 在 Git 里把现在的状态作为一条记录留下来 |

<ChapterDone :chapter="404" />

下一章：[第5章. 怎样交代得好](05-delegate-well.md)

[^keys]: Claude Code 官方文档，「Desktop application」 快捷键表。 "Open permission mode menu" https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^modes]: Claude Code 官方文档，「Desktop application」。 "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "Claude auto-accepts file edits and common filesystem commands like mkdir, touch, and mv, but still asks before running other terminal commands." / "Claude reads files and runs commands to explore, then proposes a plan without editing your source code." / "Claude runs without routine prompts; before actions such as shell commands and network requests run, a background classifier checks that they align with your request." / "On Pro, Max, and Ultra plans, enable "Allow bypass permissions mode" in Settings > Code or Settings > Claude Code." / "Only use this in sandboxed containers or VMs." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^tradeoff]: Claude Code 官方文档，「Choose a permission mode」。 "Each mode makes a different tradeoff between convenience and oversight." https://code.claude.com/docs/en/permission-modes （确认日期 2026-10-31）
[^plan-tip]: Claude Code 官方文档，「Desktop application」。 "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^remember]: Claude Code 官方文档，「Desktop application」。 "A mode you pick in the selector is remembered per folder and takes precedence over defaultMode for that folder, except Plan, which applies to the current session only." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^old-names]: Claude Code 官方文档，「Desktop application」。 "Earlier versions of the Code tab labeled these modes Ask permissions, Auto accept edits, and Plan mode." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^accept]: Claude Code 官方文档，「Choose a permission mode」。 "acceptEdits mode auto-approves common filesystem Bash commands: mkdir, touch, rm, rmdir, mv, cp, and sed." / "Like file edits, auto-approval applies only to paths inside your working directory or additionalDirectories." https://code.claude.com/docs/en/permission-modes （确认日期 2026-10-31）
[^auto]: Claude Code 官方文档，「Choose a permission mode」。 "Auto mode reduces permission prompts but does not guarantee safety. Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." https://code.claude.com/docs/en/permission-modes （确认日期 2026-10-31）
[^same-settings]: Claude Code 官方文档，「Desktop application」。 "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop （确认日期 2026-10-31）
[^checkpoint]: Claude Code 官方文档，「Checkpointing」。 "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." / "Every prompt you send that starts a turn creates a new checkpoint" https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^restore]: Claude Code 官方文档，「Checkpointing」。 "Restore code and conversation: revert both code and conversation to that point" / "Restore conversation: rewind to that message while keeping current code" / "Restore code: revert file changes while keeping the conversation" https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^restore-prompt]: Claude Code 官方文档，「Checkpointing」。 "After restoring the conversation or choosing Summarize from here, the original prompt from the selected message is restored into the input field so you can re-send or edit it." https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^limits-bash]: Claude Code 官方文档，「Checkpointing」。 "A file that only Bash commands changed isn't tracked and stays as it is. To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^limits-external]: Claude Code 官方文档，「Checkpointing」。 "Checkpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^retention]: Claude Code 官方文档，「Checkpointing」。 "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." / "by default about 30 days after the session last saved one" https://code.claude.com/docs/en/checkpointing （确认日期 2026-10-31）
[^critical]: Claude Code 官方文档，「Choose a permission mode」。 "Claude Code doesn't auto-approve the following in any mode, including bypassPermissions" / "Recognized rm and rmdir critical-path removals, which no allow rule or PreToolUse hook "allow" approves" https://code.claude.com/docs/en/permission-modes （确认日期 2026-10-31）

