# 第4章 許可權與撤銷——四種預設，丟棄要小心

> **一句話總結**：應用的許可權用**四個預設**（Request Review、Default、Auto、Turbo）來選。剛開始請從 **Request Review** 或 **Default** 用起。
> Review 窗口裡的**丟棄會不經確認直接生效**。終端裡有 `/rewind`，但最可靠的安全網仍然是 Git 記錄。

本章依據 2026年11月1日確認的 Antigravity 官方文件寫成。為什麼需要許可權，在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)裡講過。本章以個人 Google 賬號為準，公司、企業賬號的許可權介面不同。[^business]

## 四種許可權預設

| 預設 | 執行命令 | 什麼時候用 |
|---|---|---|
| Request Review | 所有命令都要許可 | 剛開始、需要謹慎的事 |
| Default | 在圍欄內不問，要出圍欄時才問 | 熟悉之後 |
| Auto (Preview) | 安全的命令自動執行，只問有風險的命令 | 試驗功能 |
| Turbo | 不設限制，全部執行 | 幾乎不用 |

出處：Antigravity 官方文件（只摘錄了一部分）[^presets]

**Turbo** 沒有圍欄，可以讀寫整臺電腦。[^turbo] 整理筆記用不著它。

修改的地方有三處。[^where]

- 所有專案：**Settings → General → Global Permissions → Permission Preset**
- 單個專案：**Settings → Projects**
- 當前對話：輸入框裡的許可權選擇器

專案預設跟隨全域性設定（**Inherit Global**），也可以給每個專案單獨設定。[^inherit] 意思是，信得過的專案可以放寬，信不過的資料夾可以收緊。[^per-project] 個人賬號一開始用的是哪個預設，官方文件裡沒有寫。開啟應用後請先確認一下。

<Quiz id="ch604-presets" />

## 圍欄與預設規則

應用裡有**終端圍欄**（沙箱），官方文件說它**預設是開著的**。[^sandbox] 不過各預設不一樣。Default、Auto 裡是開的，Request Review、Turbo 裡是關的。[^by-preset] 圍欄內的命令只能用工作資料夾和臨時資料夾，**不能上網。**[^no-net] `~/.ssh` 或 `.env` 這類敏感檔案也被擋住。[^sensitive]

不管哪個預設，也有一些預設規則。

- 專案資料夾**內**的檔案讀寫不會詢問。**外面**的檔案需要許可。[^files]
- 讀取和操作網頁，預設是"詢問"。[^web]
- 規則衝突時，按 拒絕（Deny）> 詢問（Ask）> 允許（Allow）的順序決定。[^order]

對話中給過的許可可能會保留下來，所以智慧體會漸漸學會哪些動作是可以信任的。[^persist] 雖然方便，但請記住自己許可過什麼。

**終端（`agy`）的預設值不一樣。** 終端在寫檔案、執行命令、用網頁工具之前會詢問[^cli-ask]，圍欄**預設是關著的。**[^cli-sandbox] 第6章會講。

<Quiz id="ch604-sandbox" />

## 撤銷

**請小心 Review 視窗的丟棄。**「Discard unstaged changes」會**不經確認直接**生效，甚至把沒有記錄過的新檔案也刪掉。[^discard] 預設視圖裡也包含我自己改的內容（[第2章](02-first-task.md)），所以丟棄之前一定要看一下里面有什麼。

終端裡有 `/rewind`（或 `/undo`），能把對話退回到之前穩定的狀態。[^rewind] 名字和 Claude Code 的回退很像，但官方文件只說它撤銷的是"對話"。是否連檔案也一起撤銷，文件裡沒有寫。

應用裡似乎也有撤銷功能。官方更新記錄裡提到，"Confirm Undo"確認視窗多了一個只撤銷對話的選項。[^undo] 不過**沒有找到講解用法的文件**，本指南也沒能在應用裡確認。

所以在這一階段，也沿用 Codex 第4章的同一個習慣。

1. 交代任務之前：用 Git 把當前狀態記錄下來。
2. 交代任務。
3. 在 Review 視窗用 Agent Edits，只看改動的部分。
4. 滿意就再記錄一次，不滿意就撤回。

<Quiz id="ch604-undo" />

## 親自動手試試

1. 在 Settings → General → Global Permissions 裡確認當前的預設。如果是第一次，就用 Request Review 或 Default。
2. 用 Git 把整理工具資料夾當前的狀態記錄下來。
3. 請它在第2章的會議記錄"最上面加一行'撰寫日期：今天的日期'"。
4. 在 Review 視窗用 Agent Edits 檢視，確認改動過的那一行。

**連續任務**：第5章要看計劃（`/plan`）、定時（`/schedule`、Automations）、瀏覽器（`/browser`）、目標（`/goal`）。

## 小結

- 應用許可權有四個預設。剛開始用 Request Review 或 Default，不要用 Turbo。
- 應用的圍欄在 Default、Auto 預設裡是開的，會擋住網路。終端預設是關的。
- 專案資料夾裡的檔案不問，外面的和網頁要問。
- Review 視窗的丟棄不經確認直接刪除。交代任務之前先用 Git 記錄一下。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Permission preset | 許可權預設 | 一次性定好許可權的組合 |
| Sandbox | 沙箱 | 限制命令能動範圍的圍欄 |
| Discard | 丟棄 | 把改動的內容扔掉 |
| `/rewind` | 回退 | 在終端裡把對話退回之前狀態的命令 |

<ChapterDone :chapter="604" />

下一章：[第5章. 計劃、定時、瀏覽器、目標](05-plan-schedule.md)

[^business]: Antigravity 官方文件，「Agent settings」。"Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings （確認日期 2026-11-01）
[^presets]: Antigravity 官方文件，「Agent settings」。"**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings （確認日期 2026-11-01）
[^turbo]: Antigravity 官方文件，「Agent settings」。"**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings （確認日期 2026-11-01）
[^where]: Antigravity 官方文件，「Agent settings」。"**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." / "**For a single project**: Override the global preset under **Settings** > **Projects**. Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings （確認日期 2026-11-01）
[^inherit]: Antigravity 官方文件，「Agent settings」。"Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings （確認日期 2026-11-01）
[^per-project]: Antigravity 官方文件，「Antigravity features」。"This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features （確認日期 2026-11-01）
[^sandbox]: Antigravity 官方文件，「Terminal sandbox」。"Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox （確認日期 2026-11-01）
[^no-net]: Antigravity 官方文件，「Agent permissions」。"**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions （確認日期 2026-11-01）
[^sensitive]: Antigravity 官方文件，「Terminal sandbox」。"Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox （確認日期 2026-11-01）
[^files]: Antigravity 官方文件，「Agent permissions」。"**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions （確認日期 2026-11-01）
[^web]: Antigravity 官方文件，「Agent permissions」。"**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions （確認日期 2026-11-01）
[^order]: Antigravity 官方文件，「Agent permissions」。"**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions （確認日期 2026-11-01）
[^persist]: Antigravity 官方文件，「Antigravity features」。"Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features （確認日期 2026-11-01）
[^cli-ask]: Antigravity 官方文件，「Antigravity features」。"The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features （確認日期 2026-11-01）
[^cli-sandbox]: Antigravity 官方文件，「Antigravity features」。"The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features （確認日期 2026-11-01）
[^discard]: Antigravity 官方文件，「Review changes」。"**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes （確認日期 2026-11-01）
[^rewind]: Antigravity 官方文件，「CLI best practices」。"Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices （確認日期 2026-11-01）
[^undo]: Antigravity 官方文件，「Changelog」。"The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog （確認日期 2026-11-01）
[^by-preset]: Antigravity 官方文件，「Terminal sandbox」。"| **Default** | On | Allowed in sandbox; ask outside |" / "| **Turbo** | Off | Allowed without prompting, unrestricted |" https://antigravity.google/docs/sandbox （確認日期 2026-11-01）
