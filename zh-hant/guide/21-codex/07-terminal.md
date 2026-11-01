# 第7章 在終端裡使用——用一行 `codex exec` 檢查整理工具

> **一句話總結**：Codex CLI 是在終端裡使用的 Codex。它會讀取執行所在資料夾裡的 `AGENTS.md` 和技能。
> `codex exec "要做的事"` 只執行一次就結束，而且**預設是隻讀的**。它和 Claude Code 的 `claude -p` 很像，但這一點不同。

這一章依據 2026年11月1日確認的 Codex 官方文件，以及在 macOS 終端裡執行 Codex CLI 0.166.0 的結果寫成。**如果你是第一次用終端，可以跳過這一章。** 終端是什麼，在 [Claude Code 第10章](../20-claude-code/10-terminal.md)裡講過了。

## 安裝並開始使用

官方文件裡的安裝命令是這樣的。[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**請確認安裝命令和官方文件（learn.chatgpt.com）上寫的一模一樣，再去執行。** 因為這是把從網上下載的指令碼直接執行的命令。

安裝完成後，進入整理工具資料夾，輸入 `codex`。第一次請選擇 **Sign in with ChatGPT**。[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

終端裡的 Codex，把**執行它的資料夾**當作這次對話的專案。[^cwd] 在應用裡用 Choose project 選資料夾的事，這裡由 `cd` 來代替。

<Quiz id="ch507-install" />

## `codex exec`——問一次就結束

`codex exec` 是這樣一種方式：不開啟對話畫面，只執行一次就結束。[^exec] 我問了和 Claude Code 第10章同樣的問題。

```bash
cd ~/hello-ai-연습/정리도구
codex exec "列出 notes 資料夾裡的檔案，並用一行告訴我每個檔案是用哪種模板（templates 裡的哪一個）寫的。不要修改檔案。回答要簡短，只用表格。"
```

只出來了乾淨的回答（完整輸出：[7장-codex-exec-출력.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)）。

| notes 檔案 | 使用的模板 |
|---|---|
| `공부-2026-10-28-프롬프트-강의.md` | `templates/공부노트.md` |
| `주간회고-2026-10-26.md` | `templates/주간회고.md` |
| `회의록-2026-10-27-주간회의.md` | `templates/회의록.md` |

來源：本指南的實踐結果（2026-11-01）。執行過程的記錄另外丟棄，只留下了最終回答。

`codex exec` 把進度和最終回答**走不同的路**輸出。進度走螢幕旁路（stderr），只有最終回答是正式輸出（stdout）。[^stdout] 所以像 `codex exec "…" > 결과.md` 這樣用，檔案裡只會裝進最終回答。

**`codex exec` 預設是隻讀的。** 想讓它修改檔案，就加上 `--sandbox workspace-write`。[^readonly] 本指南第2、3、5章的練習，也是加了這個選項執行的。

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec` 是**預先定好**許可方式再執行的方式。[^preset] 本指南第5章的練習裡，寫入 `.agents` 資料夾被攔住時，Codex 沒法詢問，就那樣停住了。需要許可的事，在應用或互動式 `codex` 裡做會更方便。

老文章裡出現的 `--full-auto` 選項已經不再支援。[^fullauto] 也有把沙箱和許可全部關掉的 `--dangerously-bypass-approvals-and-sandbox` 之類的選項[^yolo]，但整理備忘用不著。

<Quiz id="ch507-exec" />

## 互動式 `codex` 裡的命令

用 `codex` 開啟互動式介面後，可以使用以 `/` 開頭的命令。

| 命令 | 做什麼 |
|---|---|
| `/permissions` | 更改許可權（應用裡的許可權選單） |
| `/import` | 匯入 Claude Code、Cursor 的設定 |
| `/resume` | 繼續已儲存的對話 |
| `/status` | 檢視對話資訊和剩餘額度 |

來源：Codex 官方文件[^permissions][^import][^resume][^status]

結束互動式介面後，想在外面繼續，就輸入 `codex resume`。[^resume]

`/permissions` 和 `/import` 是**終端這邊的命令**。在應用裡，用的是輸入框下面的許可權選單（第4章）和設定裡的 Import 選單（第3章）。

<Quiz id="ch507-commands" />

## 動手試試

1. 確認官方文件的安裝命令和上面的命令一致後再安裝（如果已經裝了，就輸入 `codex --version`）。
2. 進入整理工具資料夾，執行上面那個只讀的 `codex exec` 提問。
3. 用 `codex` 開啟互動式介面，輸入 `/status` 試試。
4. 輸入 `$`，或者執行 `/skills`，確認第5章的技能名稱是否出現。[^skills]

**連續任務**：第8章裡，我們會整理費用、資料、安全，並確認 Codex 怎麼對待藏著隱藏指示的備忘。

## 總結

- 終端裡的 Codex 把執行它的資料夾當作專案，讀取那個資料夾裡的 `AGENTS.md` 和技能。
- 安裝命令要確認和官方文件一致再執行。
- `codex exec` 執行一次就結束，預設是隻讀的。想修改，就加 `--sandbox workspace-write`。
- `codex exec` 是預先定好許可方式再執行的。需要許可的事，在應用或互動式介面裡做。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Codex CLI | Codex 命令列版 | 在終端裡使用的 Codex |
| `codex exec` | codex 一次性執行 | 執行一次就結束的方式 |
| stdout / stderr | 標準輸出 / 標準錯誤 | 正式輸出 / 輸出進度和錯誤的旁路 |

<ChapterDone :chapter="507" />

下一章：[第8章. 費用、資料、安全，以及怎樣選工具](08-safety-choose.md)

[^install]: Codex 官方文件，「Codex CLI」。 "curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli （確認日期 2026-11-01）
[^signin]: Codex 官方文件，「Codex CLI」。 "Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli （確認日期 2026-11-01）
[^cwd]: Codex 官方文件，「Projects and chats」。 "Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects （確認日期 2026-11-01）
[^exec]: Codex 官方文件，「Non-interactive mode」。 "Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode （確認日期 2026-11-01）
[^stdout]: Codex 官方文件，「Non-interactive mode」。 "While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode （確認日期 2026-11-01）
[^readonly]: Codex 官方文件，「Non-interactive mode」。 "By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode （確認日期 2026-11-01）
[^fullauto]: Codex 官方文件，「Non-interactive mode」。 "`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode （確認日期 2026-11-01）
[^yolo]: Codex 官方文件，「Agent approvals & security」。 "`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security （確認日期 2026-11-01）
[^permissions]: Codex 官方文件，「Permissions」。 "In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes （確認日期 2026-11-01）
[^import]: Codex 官方文件，「Import from another agent」。 "Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import （確認日期 2026-11-01）
[^resume]: Codex 官方文件，「Projects and chats」。 "Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects （確認日期 2026-11-01）
[^status]: Codex 官方文件，「Pricing」。 "If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing （確認日期 2026-11-01）
[^skills]: Codex 官方文件，「Build skills」。 "In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills （確認日期 2026-11-01）
[^preset]: Codex 官方文件，「Non-interactive mode」。 "Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode （確認日期 2026-11-01）

