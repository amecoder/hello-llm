# 第6章 在終端裡使用——`agy -p` 和悄悄拒絕

> **一句話總結**：`agy` 是 Antigravity 的終端程式，`agy -p "要做的事"` 執行一次就結束。
> 在 `-p` 下，需要許可的事會被**悄悄拒絕**。可是**退出碼仍是 0（成功）**，所以很容易把空結果誤當成成功。

這一章是根據 2026 年 11 月 1 日確認的 Antigravity 官方文件，以及在 macOS 上執行 `agy` 1.4.12 的結果寫的。這本指南是在另一個實踐用的 AI 工具裡呼叫並運行了 `agy`。官方 FAQ 說個人套餐不支援這種用法（[第7章](07-safety-choose.md)），所以照著做時，請**直接在終端裡**執行 `agy`。**如果你是第一次接觸終端，這一章可以跳過。** 終端是什麼，在 [Claude Code 第10章](../20-claude-code/10-terminal.md)裡講過了。

## 安裝並開始

macOS·Linux 的安裝命令是這樣的。[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

這條命令會直接執行從網際網路上下載的安裝程式。所以，**請確認和官方文件（antigravity.google/docs）上寫的一模一樣，再執行。** Windows 用的命令也在官方文件裡。

進入整理工具資料夾，輸入 `agy`，就會開啟對話介面。[^tui] 如果已經在應用裡登入過，就不用瀏覽器，直接登入。[^keyring] 第一次執行時，會確認**是否信任這個資料夾**（Workspace trust）。[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## 執行模式

在互動式 `agy` 裡，用 Shift+Tab 切換執行模式。[^cycle]

| 模式 | 修改檔案 | 執行命令 |
|---|---|---|
| `default` | 展示改動內容並確認 | 詢問 |
| `accept-edits` | 工作資料夾內自動 | 詢問 |

出處：Antigravity 官方文件（只摘錄了一部分）[^modes]

終端的預設許可權比應用更謹慎。寫檔案·命令·網路工具之前都會詢問，把命令關在圍欄裡的沙盒預設是關閉的（[第4章](04-permissions-undo.md)）。

<Quiz id="ch606-modes" />

## `agy -p`——問一次就結束

`-p` 是發出一個請求、拿到回答後就結束的方式。因為沒有詢問的視窗，需要許可的事會按事先定好的規則處理。[^headless] 回答作為正式輸出（stdout）輸出，進度和錯誤則走旁路（stderr）。[^stdout]

官方文件說明，工作資料夾內檔案的讀寫自動允許，shell 命令預設是“詢問”，所以會被**悄悄拒絕**（soft-deny）。[^policy] 悄悄拒絕不會中斷執行，而是以**退出碼 0** 結束，只在 stderr 裡告知什麼被攔住了。[^soft]

<Quiz id="ch606-headless" />

## 這本指南遇到的四個陷阱

這些是在整理工具資料夾裡多次執行 `agy -p` 時真實遇到的事。

1. **結果是空的，卻顯示成功。** 代理想用 shell 命令（`ls`）檢視資料夾列表，被拒絕後，**什麼也沒做出來就結束了。** 退出碼是 0。這種事發生了三次。請一定要確認結果檔案是不是真的生成了。
2. **在沒有信任的資料夾裡，連讀寫也被拒絕。** 官方文件說工作資料夾內的檔案自動允許，但在這本指南的練習資料夾裡，寫入和讀取也被拒絕了。原因看起來是這個資料夾還沒有被登記為“信任的資料夾”（這本指南的推測）。開啟一次互動式 `agy`，在被問到時回答信任這個資料夾，就會登記。[^trusted]
3. **解決：一個模式 + 一句話。** 加上 `--mode accept-edits`，並在請求末尾加上“不要用 shell 命令，只讀寫檔案”，就全部成功了。沒有使用允許一切的 `--dangerously-skip-permissions`。官方文件也建議使用縮小範圍的允許規則。[^skip]
4. **回答漏掉的檔案。** 我請它以只讀方式，把 notes 資料夾的檔案列表做成表格給我。整理好的檔案有 3 個（週會會議記錄·臨時會議會議記錄·週迴顧），但表格裡**漏掉了臨時會議會議記錄**，反而放進了空檔案 `.gitkeep`。請自己數一數確認的範圍。

實際用的命令是這樣的。

```bash
cd ~/hello-ai-연습/정리도구
agy -p "列出 notes 資料夾的檔案，並用一行告訴我每個檔案是用哪個模板（templates 裡的哪一個）寫的。不要修改檔案。回答要簡短，只用表格。不要用 shell 命令，只讀取檔案。" --mode accept-edits
```

結果：[agy -p 輸出](/practice/notes/results/antigravity/6장-agy-p-출력.txt)（我電腦裡的路徑換成了 `~`）

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 執行一次 | `claude -p` | `codex exec` | `agy -p` |
| 預設寫檔案 | 需要許可 | 只讀 | 工作資料夾內自動（文件） |
| 被攔住時 | 拒絕 | 暫停 | 悄悄拒絕，退出碼 0 |

出處：這本指南的整理（各個工具的終端章節和實踐）

<Quiz id="ch606-pitfalls" />

## 繼續對話和用量

終端裡的對話記錄是**按執行時所在的資料夾**分開的。[^per-folder] 用 `agy -c` 可以直接接上那個資料夾的最後一次對話，也可以用 `/resume` 選擇後接著做。[^resume] `/rewind`（或 `/undo`）會把對話退回到前面的訊息（[第4章](04-permissions-undo.md)）。檔案會不會也跟著退回，官方文件裡沒有寫，所以檔案請相信 Git 的記錄。

用量用 `/usage` 檢視。[^usage]

<Quiz id="ch606-resume" />

## 親自試一試

1. 確認官方文件的安裝命令和上面的命令一樣之後再安裝（已經有的話，執行 `agy --version`）。
2. 在整理工具資料夾裡開啟一次互動式 `agy`，被問到是否信任資料夾時回答。
3. 執行上面的只讀 `agy -p`，把表裡的檔案數和 notes 資料夾對著數一數。
4. 如果結果是空的，讀 stderr 裡的拒絕提示，確認是什麼被攔住了。

**連續任務**：第7章會整理費用·資料·安全，並決定怎麼搭配使用三個工具。

## 整理

- `agy` 是互動式，`agy -p` 是執行一次就結束。對話記錄按資料夾分開。
- 在 `-p` 下，需要許可的事會被悄悄拒絕，退出碼是 0。要親自確認結果檔案。
- 在沒有信任的資料夾裡，檔案操作也可能被攔住。把資料夾登記為信任，或者用 `--mode accept-edits`。
- “不要用 shell 命令”這一句話，減少了因拒絕而停下來的情況。回答的範圍要自己數。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Headless | 無介面模式 | 不開啟對話介面，執行一次的方式 |
| Soft-deny | 軟拒絕 | 不中斷執行，只悄悄拒絕那個動作 |
| Workspace trust | 工作區信任 | 把這個資料夾登記為信任的步驟 |
| Exit code | 退出碼 | 程式結束時留下的成功·失敗編號 |

<ChapterDone :chapter="606" />

下一章：[第7章. 費用·資料·安全，以及選擇三個工具](07-safety-choose.md)

[^install]: Antigravity 官方文件，《Get started》。"curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^tui]: Antigravity 官方文件，《Get started》。"| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^keyring]: Antigravity 官方文件，《Authenticate》。"If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install （確認日期 2026-11-01）
[^trust]: Antigravity 官方文件，《Get started》。"**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started （確認日期 2026-11-01）
[^cycle]: Antigravity 官方文件，《Choose an execution mode》。"Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes （確認日期 2026-11-01）
[^modes]: Antigravity 官方文件，《Choose an execution mode》。"| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes （確認日期 2026-11-01）
[^headless]: Antigravity 官方文件，《Headless mode》。"Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless （確認日期 2026-11-01）
[^stdout]: Antigravity 官方文件，《Headless mode》。"Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless （確認日期 2026-11-01）
[^policy]: Antigravity 官方文件，《Headless mode》。"Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless （確認日期 2026-11-01）
[^soft]: Antigravity 官方文件，《Headless mode》。"A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless （確認日期 2026-11-01）
[^skip]: Antigravity 官方文件，《Headless mode》。"**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless （確認日期 2026-11-01）
[^per-folder]: Antigravity 官方文件，《Managing conversations》。"When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations （確認日期 2026-11-01）
[^resume]: Antigravity 官方文件，《Managing conversations》。"Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations （確認日期 2026-11-01）
[^usage]: Antigravity 官方文件，《Model quotas (/usage)》。"Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage （確認日期 2026-11-01）
[^trusted]: Antigravity 官方文件，《CLI commands》。"| **`trustedWorkspaces`** | string\[\] | `[]` | Folders you chose to trust when the CLI asked. The CLI adds entries for you. |" https://antigravity.google/docs/cli/reference （確認日期 2026-11-01）
