# 第6章 会话与上下文

<Badge type="tip" text="必读" /> 想跟着这个阶段走下去，一定要读这一章。

> **一句话总结**：对话按文件夹保存，随时可以重新打开。对话变长了就用 `/compact` 缩短，换做别的事就用 `/clear` 清空。

有时你想今天接着做昨天的事。有时对话太长，回答变得含糊。这一章就讲这两件事。[^run]

## 什么是会话

**会话**（Session）是绑定在项目文件夹上保存下来的对话。[^session-names] 打开 `claude` 后进行的一组对话，就是一个会话。

这里的关键词是"绑定在文件夹上"。默认列表只显示这个文件夹里的对话。所以本章的命令，都要先在终端里进入练习文件夹再输入。

```bash
cd ~/hello-ai-연습/터미널
```

重新打开 `claude` 时，Claude 不知道之前的对话。因为新会话是在没有以前对话的状态下开始的。[^fresh] 想接着昨天的话题，就得自己打开以前的会话。

<Quiz id="ch806-session" />

## 起名字并重新打开

要花好几天的工作，先给它起个名字。[^rename-tip] 有了名字，以后找起来就容易。在会话里这样输入。

```text
❯ /rename 周会-整理
  ⎿  Session renamed to: 周会-整理
```

不起名字也没关系。Claude Code 会把第一个请求概括一下，自动生成标题。[^session-names]

重新打开有三种方法。都是先用 `/exit` 退出，再在终端里输入。

| 命令 | 什么时候用 |
|---|---|
| `claude -c` | 这个文件夹里最近的对话[^continue-resume] |
| `claude -r` | 从列表里选择[^continue-resume] |
| `claude -r 周会-整理` | 用名字直接打开[^continue-resume] |

如果是刚结束的对话，`claude -c` 最快。在没有可继续对话的文件夹里输入，会提示 `No conversation found to continue` 然后结束。[^no-conversation] 看到这行字，先确认一下文件夹。用 `pwd` 能知道你现在在哪个文件夹。

如果是几天前的对话，用 `claude -r` 打开列表。看起来是这样。

```text
  Resume session
  ╭──────────────────────────────────────────────────────────────────────────────────────────────╮
  │ ⌕ Search…                                                                                    │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────╯
    터미널

  ❯ 周会-整理
    4 seconds ago · HEAD · 320.7KB

    Ctrl+A to show all projects · Ctrl+B to only show current branch · Space to preview · Ctrl+R
    to rename · Type to search · Esc to cancel
```

用上下方向键选择，按 Enter 就会打开。只需要看两个地方。

- **`❯` 那一行**：选中的对话的名字。
- **它下面那一行**：对话是什么时候写的（`4 seconds ago`）和大小（`320.7KB`）。中间的 `HEAD` 可以不管。

最下面两行是可用按键的说明。输入文字就能搜索，Space 是预览，Ctrl+R 是改名，Esc 是取消。其余的键现在不用也行。

如果已经在 `claude` 里面，就输入 `/resume`。会打开同样的列表。[^session-names] 重新打开后，新消息会接着累积在同一个会话里。[^same-session]

<Quiz id="ch806-resume" />

## 什么是上下文窗口

**上下文窗口**（Context window）是 Claude 此时此刻手上拿着的全部内容。把它想成摊在书桌上的资料，就容易理解了。

书桌上不只有你发的话。对话记录、Claude 读过的文件内容、运行命令的结果，都一起摆在上面。写着规则的文件、自动留下的笔记、加载的技能、基础指令也都在里面。[^window] 这四样东西的名字依次是 `CLAUDE.md`、自动记忆、技能、系统指令。`CLAUDE.md` 和自动记忆在第8章学，技能在第9章学。现在只要记住名字就行。

这个空间用 **token**（Token）来计算。这是 AI 把文字切成小块来计数的单位。一个词有时是一块，有时会被切成好几块（就是[第1阶段第1章](../00-common/01-what-is-llm.md)里看到的那种小块）。让它读一个很长的文件，就会有同样多的 token 占据书桌上的位置。

对话一长，空间就会满。这时 Claude Code 会自动压缩对话。不过对话开头给的指令可能会被忘掉。[^works-context] 如果你一开始说过一次"用表格写"，可某一刻表格不见了，可能就是这种情况。

所以需要长期遵守的规则，不要只在对话里口头说，而要写进 `CLAUDE.md`（写下项目要遵守的规则的文件）。[^works-context] 怎么创建会在[第8章](08-memory-settings.md)讲。

<Quiz id="ch806-window" />

## 管理上下文的三个命令

一开始不用操心这些。觉得回答变含糊时，想起这三个就行。

**`/context` — 看看占了多少。** 用彩色方格显示上下文占用了多少。[^context-grid] 还会一起显示各类别的用量和改进建议。[^context-doc] 结果以文字形式出现在对话里。不用关闭，接着输入就行。

**`/compact` — 做成摘要来缩短。** 把到目前为止的对话做成摘要，腾出空间。[^compact-cmd] 后面可以写上要保留什么。[^context-doc] 写上的话，需要的内容就不太会在摘要里被漏掉。

```text
欠佳的例子：/compact
更好的例子：/compact 只保留关于会议记录格式定下来的内容
```

对话几乎没有时输入，它会告诉你没有可缩短的内容。

```text
❯ /compact
  ⎿  Not enough messages to compact.
```

对话积累起来之后再输入，它缩短完会提示 `Compacted (ctrl+o to see full summary)`。

**`/clear` — 清空后重新开始。** 用空白的上下文开始新对话。以前的对话已经保存，可以用 `/resume` 回去。[^compact-cmd] 换做无关的事时用它。旧对话就不会占着接下来需要的文件的位置。[^context-doc]

不知道该用哪个时，这样问问自己。

- 还在做同一件事吗？那就用 `/compact`。
- 要换做别的事吗？那就用 `/clear`。

::: details 详细（点击展开）
用了 `/clear` 之后，可能会出现两个同名的会话。这时 `claude -r 名字` 会显示叫这个名字的列表。看时间和大小来选就行。
:::

还有一个窍门。如果改口说了两次，回答还是一直跑偏，就不要再改第三次。用 `/clear` 清空，把请求写得更好再重新开始，效果更好。[^two-corrections] 因为错误的尝试不会堆在对话里。

对话太长时，可能会出现这样的字。

```text
Context limit reached · /compact or /clear to continue
```

不用慌。[^context-limit] 照着上面写的，输入两者之一就行。

<Quiz id="ch806-manage" />

## 对话记录会留在你的电脑上

会话之所以能重新打开，是因为记录保存在你的电脑上。对话记录以明文形式保存在 `~/.claude/projects/` 文件夹里。明文的意思是没有加密、谁都能读的文字。默认保存期限是 30 天。[^local-history]

这里留下的不只是你输入的话。经过工具的内容也会一起留下，比如文件内容、命令输出、粘贴的文字。[^transcript]

所以请养成这些习惯。

- 不要让 Claude 读含有密码或认证信息的文件。一读，就可能留在记录里。
- 如果是和别人共用的电脑，要记住有这个文件夹。

彻底禁止读取的方法，会在[第7章](07-permissions-undo.md)里试试。

::: details 详细（点击展开）
- 还有一个删除某个项目记录的 `claude purge` 命令。[^purge] 它很难撤回，所以不要拿来练手。本指南也没有运行它。
- 服务器端的保存期限在[第13章](13-cost-safety-trouble.md)讲。
:::

<Quiz id="ch806-history" />

## 动手试试

在练习文件夹 `~/hello-ai-연습/터미널` 里试试看。

1. 打开 `claude`，这样问。

   ```text
   @inbox/회의-2026-10-27-주간회의.txt 用两行告诉我这份记录里决定了哪些事。
   ```

2. 用 `/rename 周会-整理` 起名字，再用 `/exit` 退出。
3. 在终端里用 `claude -c` 重新打开，问一句"我刚才问了什么？"。如果它记得前面的对话，就说明接上了。
4. 用 `/exit` 退出后，在终端里输入 `claude -r`。在列表里找到 `周会-整理`，按 Enter 打开。
5. 输入 `/context`，看看是什么在占用空间。
6. 输入 `/compact 只保留决定了的事`。就算因为对话太短，出现没有可缩短内容的提示也没关系。
7. 用 `/clear` 清空后，再问一次"我刚才问了什么？"。如果它回答不知道，说明上下文已经清空了。用 `/resume` 再找找之前的会话。

问问自己：我能找到昨天的对话接着做吗？我能说出什么时候用 `/compact`、什么时候用 `/clear` 吗？

## 小结

- 会话是绑定在文件夹上保存的对话。重新打开时，不知道以前的对话。
- 用 `/rename` 起名字，用 `claude -c` 或 `claude -r` 重新打开。
- 上下文窗口里不只有对话，还有文件内容和命令输出。
- 自动压缩后，开头的指令可能会被忘掉。要长期遵守的规则写进 `CLAUDE.md`。
- 继续同一件事用 `/compact`，换做别的事用 `/clear`。
- 对话记录以明文留在你的电脑上。默认 30 天。

## 术语整理

| 术语 | 中文名称 | 一句话解释 |
|---|---|---|
| Session | 会话 | 绑定在文件夹上保存的对话 |
| Context window | 上下文窗口 | Claude 现在手上拿着的全部内容 |
| Token | 词元（token） | AI 计算文字的单位 |
| Compact | 压缩 | 把对话做成摘要、腾出空间 |
| Plaintext | 明文 | 没有加密的文字 |

<ChapterDone :chapter="806" />

下一章：[第7章 许可与撤回](07-permissions-undo.md)

[^run]: 本章的画面是 2026 年 11 月 6 日在 Linux 上用 Claude Code 2.1.318 运行的结果。
[^session-names]: Claude Code 官方文档，「Manage sessions」。"A session is a saved conversation tied to a project directory." / "if you don't name a session, Claude Code generates a session title for it." / "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." https://code.claude.com/docs/en/sessions （确认日期 2026-11-06）
[^fresh]: Claude Code 官方文档，「How Claude Code works」。"Each new session starts with a fresh context window, without the conversation history from previous sessions." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^rename-tip]: Claude Code 官方文档，「Best practices for Claude Code」。"for work that spans several days, `/rename oauth-migration` in the session names it" https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^continue-resume]: Claude Code 官方文档，「CLI reference」。"Load the most recent conversation in the current directory" / "Resume a specific session by ID or name, or show an interactive picker to choose a session." https://code.claude.com/docs/en/cli-reference （确认日期 2026-11-06）
[^no-conversation]: Claude Code 官方文档，「Common workflows」。"it prints `No conversation found to continue` and exits." https://code.claude.com/docs/en/common-workflows （确认日期 2026-11-06）
[^same-session]: Claude Code 官方文档，「How Claude Code works」。"Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^window]: Claude Code 官方文档，「How Claude Code works」。"Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^works-context]: Claude Code 官方文档，「How Claude Code works」。"Claude compacts automatically, but instructions from early in the conversation can get lost." / "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." https://code.claude.com/docs/en/how-claude-code-works （确认日期 2026-11-06）
[^context-grid]: Claude Code 官方文档，「Commands」。"Visualize current context usage as a colored grid." https://code.claude.com/docs/en/commands （确认日期 2026-11-06）
[^context-doc]: Claude Code 官方文档，「Explore the context window」。"run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." / "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." / "Old conversation crowds out the files you need next and costs tokens on every message." https://code.claude.com/docs/en/context-window （确认日期 2026-11-06）
[^compact-cmd]: Claude Code 官方文档，「Commands」。"Free up context by summarizing the conversation so far." / "Start a new conversation with empty context." / "Resume the previous conversation with `/resume`" https://code.claude.com/docs/en/commands （确认日期 2026-11-06）
[^two-corrections]: Claude Code 官方文档，「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （确认日期 2026-11-06）
[^context-limit]: Claude Code 官方文档，「Error reference」。"Context limit reached · /compact or /clear to continue" https://code.claude.com/docs/en/errors （确认日期 2026-11-06）
[^local-history]: Claude Code 官方文档，「Data usage」。"Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." https://code.claude.com/docs/en/data-usage （确认日期 2026-11-06）
[^transcript]: Claude Code 官方文档，「Explore the .claude directory」。"Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." https://code.claude.com/docs/en/claude-directory （确认日期 2026-11-06）
[^purge]: Claude Code 官方文档，「Explore the .claude directory」。"Run `claude purge` to delete the state Claude Code holds for one project." https://code.claude.com/docs/en/claude-directory （确认日期 2026-11-06）
