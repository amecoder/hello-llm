# 第12章 同時工作與遠端

<Badge type="tip" text="必讀" /> 想跟著這個階段學下去，一定要讀這一章。

> **一句話總結**：用 Git 留下第一次記錄後，就能用 worktree **分出工作資料夾**，讓幾項工作並排進行。

本章的介面是 2026年11月6日在 Linux 上用 Claude Code 2.1.318 執行的結果。資料夾路徑和方案名稱按本課程做了改寫。

我們先把當前狀態儲存下來，再做一個不會碰到主資料夾的工作資料夾。

## 用 Git 留下第一次記錄

Git 是儲存資料夾變更歷史的程式。儲存下來的一個時間點叫作**提交**（Commit）。和遊戲裡的存檔點差不多。積累記錄的資料夾叫作**倉庫**（Repository）。

為什麼現在需要它？原因有兩個。

- [第7章](07-permissions-undo.md)的回退只能還原 Claude 的編輯工具修改過的檔案。只被 Bash 命令改動的檔案不會被跟蹤。要還原這類檔案，就要用 Git 這樣的版本管理。[^git-undo]
- 下一節的 worktree 是從提交建立的。倉庫裡至少要有一個提交。[^one-commit]

先用 `git --version` 看看有沒有 Git。顯示出版本號就行。如果沒有版本號，而是提示找不到命令，就這樣安裝。

- **Windows**：在 git-scm.com/downloads/win 下載安裝程式並安裝，然後開啟一個新視窗。[^git-win]
- **Mac 和 Linux**：按照 git-scm.com 上的說明操作。

現在在練習資料夾裡開始記錄。

```bash
cd ~/hello-ai-practice/terminal
git init
```

`git init` 是讓這個資料夾開始記錄變更歷史的命令。接下來決定**不**記錄哪些東西。第7章的 `secret`（秘密）資料夾雖然是假檔案，但我們就當它是真的秘密，把它排除掉。下一節的 worktree 資料夾也一起排除。[^wt-ignore] 啟動 `claude`，傳送下面的內容。

```text
在這個資料夾裡新建 .gitignore 檔案，寫上"secret/"和".claude/worktrees/"這兩行。
```

`.gitignore` 是寫著讓 Git 裝作看不見的檔案的列表。現在用 `/exit` 退出，在終端裡輸入。

```bash
git config user.name "你的名字"
git config user.email "me@example.com"
git config core.quotePath false
git add .
git status --short
```

逐行來看是這樣的。

- 第一、二行（`git config user.…`）：設定寫進提交裡的名字和電子郵件。只對這個資料夾有效。以後公開倉庫時，這些也會一起公開，所以請用可以公開的值。
- 第三行（`git config core.quotePath false`）：讓韓文檔名按原樣顯示。
- `git add .`：把要儲存的檔案收集起來。`.` 表示當前資料夾。
- `git status --short`：簡短地顯示收集好的檔案。

在新資料夾裡執行時，顯示的是這樣。

```text
A  .claude/skills/meeting-notes/SKILL.md
A  .gitignore
A  CLAUDE.md
A  inbox/meeting-2026-10-27-weekly.txt
A  notes/minutes-2026-10-27.md
A  weekly-summary.sh
A  minutes.md
```

你的列表裡檔案可能更多。如果去掉第三行，韓文名字會顯示成 `\355\232…` 這樣的數字，就算 `secret` 資料夾被收進去了也很難認出來。

這時問問自己：`secret` 資料夾從列表裡去掉了嗎？去掉了就儲存。如果還能看到，就不要提交。改好 `.gitignore` 的兩行後，再輸入一次 `git reset` 和 `git add .`。`git reset` 是把剛才用 `git add .` 收集的檔案重新放下的命令。檔案本身不會被刪除，放心。

```bash
git commit -m "第一次記錄"
```

`git commit` 才是真正留下記錄。`-m` 是 message（訊息）的縮寫，引號裡是這次記錄的說明。

這個順序我們在新資料夾裡執行過，確認了 `secret` 資料夾被排除、提交也留了下來。

<Quiz id="ch812-git" />

## 用 worktree 分出工作資料夾

worktree（工作樹）是另一個獨立的工作資料夾。倉庫的記錄是共用的，檔案和分支（Branch，分出來的工作線）各自獨立。[^wt-what] 可以想象成再做一個副本資料夾，在裡面工作。這裡只體驗一次。

在 `--worktree` 後面給個名字，就會建立那個資料夾，並在裡面啟動 Claude。[^wt-what]

```bash
claude --worktree memo-fix
```

實際執行後，啟動介面上的資料夾變成了這樣。

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claude 方案名稱
 ▝▝   ▝▝   ~/hello-ai-practice/terminal/.claude/worktrees/memo-fix
```

資料夾建在 `.claude/worktrees/memo-fix`，新分支的名字是 `worktree-memo-fix`。[^wt-where] 我們沒有給會話起名，什麼也沒改，就用 `/exit` 結束，資料夾馬上被刪掉了。

```text
Removing worktree…
Worktree removed (no changes)
```

worktree 的名字和會話的名字是兩回事。官方文件說明，如果給會話起了名字，刪除前會先問你要不要保留。[^wt-where] 這種情況我們沒有實際執行過。

有兩點要知道。

- **這是新取出來的副本。**[^wt-fresh] 提交裡沒有的檔案，裡面也沒有。上面排除的 `secret` 資料夾也沒有。如果看不到筆記，先確認有沒有提交。
- **如果還有沒處理完的工作，結束時會問你保留還是刪除。** 選擇刪除，資料夾、分支以及裡面的工作會一起消失。以後想回來，就用結束時顯示的 `claude --worktree <名稱> --resume` 命令。[^wt-remove]

把 worktree 的結果合併回主資料夾，是 Git 的分支合併。本章不做合併。只要知道這是一個不碰主資料夾、單獨工作的地方就夠了。如果好奇怎麼合併，可以看[第4階段 · AI-SDLC 指南](/zh-hant/guide/30-ai-sdlc/)裡講 PR 的那一章。PR（Pull Request）是請求把分支的變更合併到主線的操作。

<Quiz id="ch812-worktree" />

## 兩個終端視窗並排工作

有時你想在修改會議記錄的同時，把學習筆記也交給 Claude。開啟兩個終端視窗就行。

- **不太好的例子**：兩個視窗都在同一個資料夾裡啟動 `claude`。它們可能會碰到同一個檔案。別的會話改動的內容，回退通常抓不住。[^other-session]
- **更好的例子**：每個視窗用不同名字的 worktree。檔案是分開的，所以不會互相沖突。

在第一個視窗裡這樣輸入。

```bash
cd ~/hello-ai-practice/terminal
claude --worktree memo-fix
```

在第二個視窗裡這樣輸入。

```bash
cd ~/hello-ai-practice/terminal
claude --worktree study-note
```

這樣兩個視窗就在不同的資料夾裡工作。正如上一節看到的，worktree 建在 `.claude/worktrees/<名稱>` 裡。

```text
視窗 1：~/hello-ai-practice/terminal/.claude/worktrees/memo-fix     修改會議記錄
視窗 2：~/hello-ai-practice/terminal/.claude/worktrees/study-note   整理學習筆記
```

同時執行兩個視窗，本指南沒有實際試過。做完後問問自己：兩項工作有沒有碰到對方的檔案？視窗多了，用量也可能增加。用[第13章](13-cost-safety-trouble.md)的 `/usage` 留意著，只在真正需要時使用。

<Quiz id="ch812-two-windows" />

## 進一步瞭解

下面三樣本指南都沒有實際執行過。這裡只簡短轉述官方文件說明的內容。現在不懂也沒關係。需要的時候再來看。

**`/loop`** 會在會話裡隔一段時間重新運行同一個請求。[^loop-what] 比如可以讓它每小時檢查一次有沒有新筆記。

::: details `/loop` 的用法和注意事項（點選展開）

```text
/loop 1h 如果 inbox 資料夾裡有新筆記，只告訴我檔名
```

- 只在 Claude Code 開著並且處於空閒狀態時執行。關掉終端就會停止。[^loop-idle]
- 過了 7 天會自動結束。[^loop-idle]
- 像 `1h` 這樣設定了間隔的重複，用 Esc 或 Ctrl+C 停不下來。要用語言請 Claude 取消。[^loop-esc]

:::

**`/goal`** 只要設定好完成條件，即使你不逐步指示，Claude 也會一直工作下去。[^goal-what]

::: details `/goal` 的用法和注意事項（點選展開）
負責判定的模型不會自己開啟檔案。所以條件要寫成能在回答裡體現出來的形式，還要寫上停止條件。[^goal-judge] 輪次是 Claude 做一次工作並拿到結果的一個回合。

```text
/goal 當 inbox 裡的每份會議筆記都在 notes 資料夾裡生成了會議記錄，並且回答裡列出了所有生成的檔名，就算完成。或者 10 輪後停止。
```

用 `/goal clear` 解除。[^goal-state]

:::

**遠端控制**（Remote Control）把你電腦上正在執行的會話連線到 claude.ai/code 或 Claude 手機應用。在會話裡輸入 `/remote-control`。[^rc-cmd] 能使用的方案是有限定的。[^rc-what]

它**不是**在雲端執行的。工作仍在你的電腦上進行，手機只是檢視那個會話的視窗。所以電腦必須開著，`claude` 也必須一直在執行。[^rc-window]

如果是電腦關著也要執行的工作，請看應用指南裡的[雲端與定時](../20-claude-code/08-parallel-cloud-schedule.md)。

<Quiz id="ch812-more" />

## 動手試一試

1. 在練習資料夾裡完成 `git init`、`.gitignore` 和第一次提交。
2. 用 `git log --oneline` 確認能看到一行記錄。
3. 用 `claude --worktree memo-fix` 啟動，用 `! pwd` 確認當前資料夾。
4. 什麼都不改，用 `/exit` 結束，然後讀一讀介面上的提示。

問問自己：第一次記錄裡排除了 `secret` 資料夾嗎？你能用 `pwd` 說出自己現在在哪個資料夾嗎？

## 小結

- Git 的第一次記錄，是還原回退無法撤回的變更的途徑，也是 worktree 的前提。
- worktree 是檔案和分支各自獨立的工作資料夾。提交裡沒有的檔案，裡面也沒有。
- 讓幾項工作並排進行時，每個視窗用不同的 worktree。
- `/loop`、`/goal`、遠端控制，需要時再拿出來看。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Git | Git | 儲存資料夾變更歷史的程式 |
| Repository | 倉庫 | 積累 Git 記錄的資料夾 |
| Commit | 提交 | 在 Git 裡儲存的一個時間點 |
| Branch | 分支 | 分出來的工作線 |
| `.gitignore` | 忽略檔案列表 | Git 不記錄的檔案列表 |
| Worktree | 工作樹 | 記錄相同、檔案和分支各自獨立的工作資料夾 |
| Remote Control | 遠端控制 | 在別的裝置上接著檢視你電腦上會話的功能 |

<ChapterDone :chapter="812" />

下一章：[第13章 費用·安全·問題解決](13-cost-safety-trouble.md)

[^git-undo]: Claude Code 官方文件，「Checkpointing」。"A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (確認日期 2026-11-06)
[^one-commit]: Claude Code 官方文件，「Common workflows」。"so the repository needs at least one commit first." https://code.claude.com/docs/en/common-workflows (確認日期 2026-11-06)
[^git-win]: Claude Code 官方文件，「Terminal guide for new users」。"Go to git-scm.com/downloads/win and download the installer" https://code.claude.com/docs/en/terminal-guide (確認日期 2026-11-06)
[^wt-ignore]: Claude Code 官方文件，「Run parallel sessions with worktrees」。"Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." https://code.claude.com/docs/en/worktrees (確認日期 2026-11-06)
[^wt-what]: Claude Code 官方文件，「Run parallel sessions with worktrees」。"A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." / "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." https://code.claude.com/docs/en/worktrees (確認日期 2026-11-06)
[^wt-where]: Claude Code 官方文件，「Run parallel sessions with worktrees」。"By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" / "for an unnamed session, Claude removes the worktree and its branch automatically." / "A named session prompts you first so you can keep the worktree for later" https://code.claude.com/docs/en/worktrees (確認日期 2026-11-06)
[^wt-fresh]: Claude Code 官方文件，「Run parallel sessions with worktrees」。"A worktree is a fresh checkout, so initialize your development environment there" https://code.claude.com/docs/en/worktrees (確認日期 2026-11-06)
[^wt-remove]: Claude Code 官方文件，「Run parallel sessions with worktrees」。"Removing deletes the worktree directory and its branch, along with all the work in them" / "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." https://code.claude.com/docs/en/worktrees (確認日期 2026-11-06)
[^other-session]: Claude Code 官方文件，「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing (確認日期 2026-11-06)
[^loop-what]: Claude Code 官方文件，「Run prompts on a schedule」。"Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." https://code.claude.com/docs/en/scheduled-tasks (確認日期 2026-11-06)
[^loop-idle]: Claude Code 官方文件，「Run prompts on a schedule」。"Tasks only fire while Claude Code is running and idle." / "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (確認日期 2026-11-06)
[^loop-esc]: Claude Code 官方文件，「Run prompts on a schedule」。"`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." https://code.claude.com/docs/en/scheduled-tasks (確認日期 2026-11-06)
[^goal-what]: Claude Code 官方文件，「Keep Claude working toward a goal」。"The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." https://code.claude.com/docs/en/goal (確認日期 2026-11-06)
[^goal-judge]: Claude Code 官方文件，「Keep Claude working toward a goal」。"It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." / "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." https://code.claude.com/docs/en/goal (確認日期 2026-11-06)
[^goal-state]: Claude Code 官方文件，「Keep Claude working toward a goal」。"`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." https://code.claude.com/docs/en/goal (確認日期 2026-11-06)
[^rc-what]: 可以在 Pro·Max·Ultra·Team·Enterprise 方案中使用，用 API 金鑰（[第13章](13-cost-safety-trouble.md)會說明）不能使用。Claude Code 官方文件，「Continue local sessions from any device with Remote Control」。"Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." / "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." https://code.claude.com/docs/en/remote-control (確認日期 2026-11-06)
[^rc-cmd]: Claude Code 官方文件，「Continue local sessions from any device with Remote Control」。"If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" https://code.claude.com/docs/en/remote-control (確認日期 2026-11-06)
[^rc-window]: Claude Code 官方文件，「Continue local sessions from any device with Remote Control」。"The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." https://code.claude.com/docs/en/remote-control (確認日期 2026-11-06)
