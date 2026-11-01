# 第5章 計劃·定時·瀏覽器·目標 — 用斜槓命令把事情交出去

> **一句話總結**：`/plan` 是修改之前先做計劃，`/schedule` 是**只在這場對話裡**執行的定時器，要跨對話持續執行的定時是 **Automations**。
> `/browser` 會操作 Chrome 來做網頁上的事，`/goal` 在完成之前不會停下來。這兩個都可能消耗很多用量。

這一章依據 2026年11月1日確認的 Antigravity 官方文件編寫。本指南沒有真正儲存定時。因為會暴露實際的工作內容，而且會消耗用量（和 [Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)是同樣的原因）。

## 先要計劃 — `/plan`

普通的請求會直接開始修改檔案。用了 `/plan`，它會先瀏覽資料夾，把需要決定的點整理出來給你看。[^plan] 如果計劃沒問題，就點 **Proceed** 轉入執行。[^proceed]

```
/plan 我想在會議紀要·學習總結·每週回顧的模板里加一個“撰寫日期”欄。先只給我看需要改什麼的計劃。
```

如果需求還很模糊，`/grill-me` 會有幫助。開始之前，它會**一次問一個問題**，並附上推薦答案。[^grill] 這相當於由工具替你引出 Claude Code 第5章裡學到的“怎樣把事情交代好”。

<Quiz id="ch605-plan" />

## 定時 — `/schedule` 和 Automations

Antigravity 裡的定時有**兩種。**

| | `/schedule` | Automations |
|---|---|---|
| 所在位置 | 建立它的對話裡 | 對話之外（應用側邊欄） |
| 持續多久 | 在那場對話期間 | 重新開啟應用也保留 |
| 每次 | 喚醒同一場對話 | 以新對話開始 |

出處：Antigravity 官方文件（僅摘錄一部分）[^compare]

`/schedule` 可以建立只響一次的定時器或重複的日程，並且在等待期間不會堵住對話。[^schedule] 但它屬於那場對話，所以像**每週五的每週回顧**這樣要持續執行的事，要用 **Automations**。[^scoped]

Automations 會在我不在的時候，也按設好的日程向代理傳送訊息。[^automations] 在應用側邊欄的 **Automations** 裡開啟。有幾點要知道。

- 每次執行，可以選擇模型檔次（Flash Lite·Flash·Pro）。預設是 Flash。[^tier]
- 不會在準確的那一分鐘執行。會在間隔的 10% 以內、最多 15 分鐘內分散執行。[^jitter]
- 可以用 **Run Now** 立刻執行一次，或者用 **Create with Prompt** 和代理對話著建立。[^run-now]

代理工作期間，會阻止電腦進入睡眠。[^sleep] 但是，**應用關著或電腦睡眠期間 Automations 還會不會執行，官方文件裡沒有寫。** 就像 Claude Code·Codex 的桌面定時一樣，把應用開著、讓電腦保持喚醒會更穩妥（本指南的建議）。

建立定時之前，請先在平時的對話裡把同樣的請求跑一遍，用 Run Now 試一次，然後再設日程。

<Quiz id="ch605-schedule" />

## 瀏覽器與目標 — `/browser`·`/goal`

`/browser` 會把網頁上的事交給**瀏覽器專職子代理**。這個子代理會操作 Google Chrome 來開啟頁面、點選、截圖。[^browser] 瀏覽器會話都會被**錄成影片**，留在成果裡。[^recorded] 在頁面裡執行指令碼的操作，預設會詢問許可。[^js]

`/goal` 會讓它在達成目標之前，中途不停地工作。[^goal] 它沒有重複次數的上限，會一直執行，直到它判斷做完了，或者我讓它停下。[^no-cap] 相應地可能消耗很多用量，所以請把**“做完了”的標準寫清楚。** 例如：

```
/goal 把 inbox 裡的 6 份備忘全部按模板整理到 notes。完成標準：每份備忘都有一個結果檔案，每個檔案最下面有「與原件核對的事項」一節。
```

目標模式**只改變停下的方式。** 許可權和稽核設定不變，所以平時會詢問許可的事，仍然會問。[^goal-perm]

<Quiz id="ch605-browser-goal" />

## 在其他裝置上接著看

在應用的 **Settings → Application → Enable Remote Control** 裡開啟，就可以在其他裝置的網頁瀏覽器裡操控我電腦上的 Antigravity。[^remote][^any-browser] 在其他裝置上，也要用**和桌面端相同的 Google 賬號**登入。[^same-account]

即使遠端使用，事情也是用**我電腦**裡的檔案·工具·登入資訊來做的。[^local] 雖然方便，但遠端操控只請在可信的裝置上開啟。

<Quiz id="ch605-remote" />

## 親手試一試

1. 用 `/plan` 只拿上面“撰寫日期”欄的計劃，在點 Proceed 之前讀一讀計劃。
2. 開啟側邊欄的 Automations 看一看（不建立也可以）。
3. 如果要建立定時，先用平時的對話和 Run Now 試一試。
4. 如果用 `/goal`，要把“完成標準”一起寫上。

**連續任務**：在第6章裡，我們用終端的 `agy` 來確認同一個整理工具，並看看本指南實際遇到過的陷阱。

## 小結

- `/plan` 先做計劃，`/grill-me` 一次問一個問題，把需求引出來。
- `/schedule` 只在那場對話裡；要持續執行的事用 Automations。
- Automations 在應用關著時還會不會執行，文件裡沒有寫。把應用開著、讓電腦保持喚醒更穩妥。
- `/browser` 會操作 Chrome 並錄影。`/goal` 不會停，所以要給它完成標準。
- 遠端操控用同一個賬號，事情在我的電腦上做。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Automations | 自動化任務 | 跨對話持續執行的定時 |
| Subagent | 子代理 | 主代理把事情分出去交給它的輔助代理 |
| Remote Control | 遠端控制 | 在其他裝置上操控我電腦上的 Antigravity |

<ChapterDone :chapter="605" />

下一章：[第6章. 在終端裡使用](06-terminal.md)

[^plan]: Antigravity 官方文件，《Plan (/plan)》。"While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan（確認日期 2026-11-01）
[^proceed]: Antigravity 官方文件，《Plan (/plan)》。"**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan（確認日期 2026-11-01）
[^grill]: Antigravity 官方文件，《Slash commands overview》。"The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands（確認日期 2026-11-01）
[^compare]: Antigravity 官方文件，《Schedule command (/schedule)》。"| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule（確認日期 2026-11-01）
[^schedule]: Antigravity 官方文件，《Schedule command (/schedule)》。"Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule（確認日期 2026-11-01）
[^scoped]: Antigravity 官方文件，《Schedule command (/schedule)》。"**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule（確認日期 2026-11-01）
[^automations]: Antigravity 官方文件，《Antigravity features》。"Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^tier]: Antigravity 官方文件，《Antigravity features》。"**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^jitter]: Antigravity 官方文件，《Antigravity features》。"Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^run-now]: Antigravity 官方文件，《Antigravity features》。"**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^sleep]: Antigravity 官方文件，《FAQ》。"If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq（確認日期 2026-11-01）
[^browser]: Antigravity 官方文件，《Browser command (/browser)》。"Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser（確認日期 2026-11-01）
[^recorded]: Antigravity 官方文件，《Browser command (/browser)》。"**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser（確認日期 2026-11-01）
[^js]: Antigravity 官方文件，《Browser command (/browser)》。"Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser（確認日期 2026-11-01）
[^goal]: Antigravity 官方文件，《Goal command (/goal)》。"The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal（確認日期 2026-11-01）
[^no-cap]: Antigravity 官方文件，《Goal command (/goal)》。"**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal（確認日期 2026-11-01）
[^goal-perm]: Antigravity 官方文件，《Goal command (/goal)》。"Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal（確認日期 2026-11-01）
[^remote]: Antigravity 官方文件，《Antigravity features》。"In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^same-account]: Antigravity 官方文件，《Remote Control》。"Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control（確認日期 2026-11-01）
[^local]: Antigravity 官方文件，《Antigravity features》。"**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features（確認日期 2026-11-01）
[^any-browser]: Antigravity 官方文件，《Remote Control》。"Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control（確認日期 2026-11-01）
