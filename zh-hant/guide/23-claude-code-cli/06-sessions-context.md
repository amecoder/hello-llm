# 第6章 會話與上下文

<Badge type="tip" text="必讀" /> 想跟著這個階段走下去，一定要讀這一章。

> **一句話總結**：對話按資料夾儲存，隨時可以重新開啟。對話變長了就用 `/compact` 縮短，換做別的事就用 `/clear` 清空。

有時你想今天接著做昨天的事。有時對話太長，回答變得含糊。這一章就講這兩件事。[^run]

## 什麼是會話

**會話**（Session）是繫結在專案資料夾上儲存下來的對話。[^session-names] 開啟 `claude` 後進行的一組對話，就是一個會話。

這裡的關鍵詞是"繫結在資料夾上"。預設列表只顯示這個資料夾裡的對話。所以本章的命令，都要先在終端裡進入練習資料夾再輸入。

```bash
cd ~/hello-ai-연습/터미널
```

重新開啟 `claude` 時，Claude 不知道之前的對話。因為新會話是在沒有以前對話的狀態下開始的。[^fresh] 想接著昨天的話題，就得自己開啟以前的會話。

<Quiz id="ch806-session" />

## 起名字並重新開啟

要花好幾天的工作，先給它起個名字。[^rename-tip] 有了名字，以後找起來就容易。在會話裡這樣輸入。

```text
❯ /rename 週會-整理
  ⎿  Session renamed to: 週會-整理
```

不起名字也沒關係。Claude Code 會把第一個請求概括一下，自動生成標題。[^session-names]

重新開啟有三種方法。都是先用 `/exit` 退出，再在終端裡輸入。

| 命令 | 什麼時候用 |
|---|---|
| `claude -c` | 這個資料夾裡最近的對話[^continue-resume] |
| `claude -r` | 從列表裡選擇[^continue-resume] |
| `claude -r 週會-整理` | 用名字直接開啟[^continue-resume] |

如果是剛結束的對話，`claude -c` 最快。在沒有可繼續對話的資料夾裡輸入，會提示 `No conversation found to continue` 然後結束。[^no-conversation] 看到這行字，先確認一下資料夾。用 `pwd` 能知道你現在在哪個資料夾。

如果是幾天前的對話，用 `claude -r` 開啟列表。看起來是這樣。

```text
  Resume session
  ╭──────────────────────────────────────────────────────────────────────────────────────────────╮
  │ ⌕ Search…                                                                                    │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────╯
    터미널

  ❯ 週會-整理
    4 seconds ago · HEAD · 320.7KB

    Ctrl+A to show all projects · Ctrl+B to only show current branch · Space to preview · Ctrl+R
    to rename · Type to search · Esc to cancel
```

用上下方向鍵選擇，按 Enter 就會開啟。只需要看兩個地方。

- **`❯` 那一行**：選中的對話的名字。
- **它下面那一行**：對話是什麼時候寫的（`4 seconds ago`）和大小（`320.7KB`）。中間的 `HEAD` 可以不管。

最下面兩行是可用按鍵的說明。輸入文字就能搜尋，Space 是預覽，Ctrl+R 是改名，Esc 是取消。其餘的鍵現在不用也行。

如果已經在 `claude` 裡面，就輸入 `/resume`。會開啟同樣的列表。[^session-names] 重新開啟後，新訊息會接著累積在同一個會話裡。[^same-session]

<Quiz id="ch806-resume" />

## 什麼是上下文視窗

**上下文視窗**（Context window）是 Claude 此時此刻手上拿著的全部內容。把它想成攤在書桌上的資料，就容易理解了。

書桌上不只有你發的話。對話記錄、Claude 讀過的檔案內容、執行命令的結果，都一起擺在上面。寫著規則的檔案、自動留下的筆記、載入的技能、基礎指令也都在裡面。[^window] 這四樣東西的名字依次是 `CLAUDE.md`、自動記憶、技能、系統指令。`CLAUDE.md` 和自動記憶在第8章學，技能在第9章學。現在只要記住名字就行。

這個空間用 **token**（Token）來計算。這是 AI 把文字切成小塊來計數的單位。一個詞有時是一塊，有時會被切成好幾塊（就是[第1階段第1章](../00-common/01-what-is-llm.md)裡看到的那種小塊）。讓它讀一個很長的檔案，就會有同樣多的 token 佔據書桌上的位置。

對話一長，空間就會滿。這時 Claude Code 會自動壓縮對話。不過對話開頭給的指令可能會被忘掉。[^works-context] 如果你一開始說過一次"用表格寫"，可某一刻表格不見了，可能就是這種情況。

所以需要長期遵守的規則，不要只在對話裡口頭說，而要寫進 `CLAUDE.md`（寫下專案要遵守的規則的檔案）。[^works-context] 怎麼建立會在[第8章](08-memory-settings.md)講。

<Quiz id="ch806-window" />

## 管理上下文的三個命令

一開始不用操心這些。覺得回答變含糊時，想起這三個就行。

**`/context` — 看看佔了多少。** 用彩色方格顯示上下文佔用了多少。[^context-grid] 還會一起顯示各類別的用量和改進建議。[^context-doc] 結果以文字形式出現在對話裡。不用關閉，接著輸入就行。

**`/compact` — 做成摘要來縮短。** 把到目前為止的對話做成摘要，騰出空間。[^compact-cmd] 後面可以寫上要保留什麼。[^context-doc] 寫上的話，需要的內容就不太會在摘要裡被漏掉。

```text
欠佳的例子：/compact
更好的例子：/compact 只保留關於會議記錄格式定下來的內容
```

對話幾乎沒有時輸入，它會告訴你沒有可縮短的內容。

```text
❯ /compact
  ⎿  Not enough messages to compact.
```

對話積累起來之後再輸入，它縮短完會提示 `Compacted (ctrl+o to see full summary)`。

**`/clear` — 清空後重新開始。** 用空白的上下文開始新對話。以前的對話已經儲存，可以用 `/resume` 回去。[^compact-cmd] 換做無關的事時用它。舊對話就不會佔著接下來需要的檔案的位置。[^context-doc]

不知道該用哪個時，這樣問問自己。

- 還在做同一件事嗎？那就用 `/compact`。
- 要換做別的事嗎？那就用 `/clear`。

::: details 詳細（點選展開）
用了 `/clear` 之後，可能會出現兩個同名的會話。這時 `claude -r 名字` 會顯示叫這個名字的列表。看時間和大小來選就行。
:::

還有一個竅門。如果改口說了兩次，回答還是一直跑偏，就不要再改第三次。用 `/clear` 清空，把請求寫得更好再重新開始，效果更好。[^two-corrections] 因為錯誤的嘗試不會堆在對話裡。

對話太長時，可能會出現這樣的字。

```text
Context limit reached · /compact or /clear to continue
```

不用慌。[^context-limit] 照著上面寫的，輸入兩者之一就行。

<Quiz id="ch806-manage" />

## 對話記錄會留在你的電腦上

會話之所以能重新開啟，是因為記錄儲存在你的電腦上。對話記錄以明文形式儲存在 `~/.claude/projects/` 資料夾裡。明文的意思是沒有加密、誰都能讀的文字。預設儲存期限是 30 天。[^local-history]

這裡留下的不只是你輸入的話。經過工具的內容也會一起留下，比如檔案內容、命令輸出、貼上的文字。[^transcript]

所以請養成這些習慣。

- 不要讓 Claude 讀含有密碼或認證資訊的檔案。一讀，就可能留在記錄裡。
- 如果是和別人共用的電腦，要記住有這個資料夾。

徹底禁止讀取的方法，會在[第7章](07-permissions-undo.md)裡試試。

::: details 詳細（點選展開）
- 還有一個刪除某個專案記錄的 `claude purge` 命令。[^purge] 它很難撤回，所以不要拿來練手。本指南也沒有執行它。
- 伺服器端的儲存期限在[第13章](13-cost-safety-trouble.md)講。
:::

<Quiz id="ch806-history" />

## 動手試試

在練習資料夾 `~/hello-ai-연습/터미널` 裡試試看。

1. 開啟 `claude`，這樣問。

   ```text
   @inbox/회의-2026-10-27-주간회의.txt 用兩行告訴我這份記錄裡決定了哪些事。
   ```

2. 用 `/rename 週會-整理` 起名字，再用 `/exit` 退出。
3. 在終端裡用 `claude -c` 重新開啟，問一句"我剛才問了什麼？"。如果它記得前面的對話，就說明接上了。
4. 用 `/exit` 退出後，在終端裡輸入 `claude -r`。在列表裡找到 `週會-整理`，按 Enter 開啟。
5. 輸入 `/context`，看看是什麼在佔用空間。
6. 輸入 `/compact 只保留決定了的事`。就算因為對話太短，出現沒有可縮短內容的提示也沒關係。
7. 用 `/clear` 清空後，再問一次"我剛才問了什麼？"。如果它回答不知道，說明上下文已經清空了。用 `/resume` 再找找之前的會話。

問問自己：我能找到昨天的對話接著做嗎？我能說出什麼時候用 `/compact`、什麼時候用 `/clear` 嗎？

## 小結

- 會話是繫結在資料夾上儲存的對話。重新開啟時，不知道以前的對話。
- 用 `/rename` 起名字，用 `claude -c` 或 `claude -r` 重新開啟。
- 上下文視窗裡不只有對話，還有檔案內容和命令輸出。
- 自動壓縮後，開頭的指令可能會被忘掉。要長期遵守的規則寫進 `CLAUDE.md`。
- 繼續同一件事用 `/compact`，換做別的事用 `/clear`。
- 對話記錄以明文留在你的電腦上。預設 30 天。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Session | 會話 | 繫結在資料夾上儲存的對話 |
| Context window | 上下文視窗 | Claude 現在手上拿著的全部內容 |
| Token | 詞元（token） | AI 計算文字的單位 |
| Compact | 壓縮 | 把對話做成摘要、騰出空間 |
| Plaintext | 明文 | 沒有加密的文字 |

<ChapterDone :chapter="806" />

下一章：[第7章 許可與撤回](07-permissions-undo.md)

[^run]: 本章的畫面是 2026 年 11 月 6 日在 Linux 上用 Claude Code 2.1.318 執行的結果。
[^session-names]: Claude Code 官方文件，「Manage sessions」。"A session is a saved conversation tied to a project directory." / "if you don't name a session, Claude Code generates a session title for it." / "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." https://code.claude.com/docs/en/sessions （確認日期 2026-11-06）
[^fresh]: Claude Code 官方文件，「How Claude Code works」。"Each new session starts with a fresh context window, without the conversation history from previous sessions." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^rename-tip]: Claude Code 官方文件，「Best practices for Claude Code」。"for work that spans several days, `/rename oauth-migration` in the session names it" https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^continue-resume]: Claude Code 官方文件，「CLI reference」。"Load the most recent conversation in the current directory" / "Resume a specific session by ID or name, or show an interactive picker to choose a session." https://code.claude.com/docs/en/cli-reference （確認日期 2026-11-06）
[^no-conversation]: Claude Code 官方文件，「Common workflows」。"it prints `No conversation found to continue` and exits." https://code.claude.com/docs/en/common-workflows （確認日期 2026-11-06）
[^same-session]: Claude Code 官方文件，「How Claude Code works」。"Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^window]: Claude Code 官方文件，「How Claude Code works」。"Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^works-context]: Claude Code 官方文件，「How Claude Code works」。"Claude compacts automatically, but instructions from early in the conversation can get lost." / "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^context-grid]: Claude Code 官方文件，「Commands」。"Visualize current context usage as a colored grid." https://code.claude.com/docs/en/commands （確認日期 2026-11-06）
[^context-doc]: Claude Code 官方文件，「Explore the context window」。"run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." / "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." / "Old conversation crowds out the files you need next and costs tokens on every message." https://code.claude.com/docs/en/context-window （確認日期 2026-11-06）
[^compact-cmd]: Claude Code 官方文件，「Commands」。"Free up context by summarizing the conversation so far." / "Start a new conversation with empty context." / "Resume the previous conversation with `/resume`" https://code.claude.com/docs/en/commands （確認日期 2026-11-06）
[^two-corrections]: Claude Code 官方文件，「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^context-limit]: Claude Code 官方文件，「Error reference」。"Context limit reached · /compact or /clear to continue" https://code.claude.com/docs/en/errors （確認日期 2026-11-06）
[^local-history]: Claude Code 官方文件，「Data usage」。"Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." https://code.claude.com/docs/en/data-usage （確認日期 2026-11-06）
[^transcript]: Claude Code 官方文件，「Explore the .claude directory」。"Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." https://code.claude.com/docs/en/claude-directory （確認日期 2026-11-06）
[^purge]: Claude Code 官方文件，「Explore the .claude directory」。"Run `claude purge` to delete the state Claude Code holds for one project." https://code.claude.com/docs/en/claude-directory （確認日期 2026-11-06）
