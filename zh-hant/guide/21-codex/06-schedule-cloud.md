# 第6章 預約、雲端、手機——到點自動執行，人不在也行

> **一句話總結**：每週都一樣的事，用**預約**（Scheduled）來跑。用我的資料夾的預約，必須**電腦開著、應用在執行**才會執行。
> 雲端是給有 GitHub 倉庫的人用的，手機則像遙控器一樣用來操控我的電腦。

這一章是根據 2026 年 11 月 1 日確認的 Codex 官方文件寫的。這本指南沒有真的儲存預約。因為會暴露真實的工作內容，還會消耗用量（和 [Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)是同樣的理由）。

## 用預約每週自動做週迴顧

預約任務是先定好要重複的事，然後在後臺執行的功能。[^schedule] 在應用側邊欄的 **Scheduled** 裡，可以看到所有預約和執行記錄。[^inbox]

預約在桌面應用或網頁上建立，終端（Codex CLI）裡沒有預約管理介面。[^no-cli] 預約也是透過對話來建立。[^chat-create] 在預約裡，還可以用 `$技能名稱` 來呼叫技能。[^skill] 用第5章的技能，可以這樣拜託它。

```
每週五下午 6 點，用 $weekly-review 在 notes 資料夾裡做出那一週的週迴顧。
```

**有條件。** 用我電腦裡資料夾的預約，只有在電腦開著、應用正在執行時才會執行。[^awake] macOS·Linux 的 **Prevent sleep while running** 設定，會讓電腦在對話**執行期間**不進入睡眠，這樣人不在也能讓對話繼續。[^sleep] 它並不是讓電腦一直醒著等到預約時間的功能，所以要使用預約，請另外確認電腦的節能設定。

預約是**沒有人**的情況下執行的。所以，它沿用我預設的圍欄（沙盒）範圍，但如果組織沒有禁止，就會以**不徵求許可的方式**執行。[^unattended] 圍欄之外的事，沒有人可以問，所以可以認為會失敗。

| 我的預設許可權（圍欄） | 在預約裡發生的事 |
|---|---|
| 只讀 | 需要寫檔案的預約會失敗 |
| 在資料夾內寫入 | 像整理工具那樣只在資料夾裡寫的事可以執行 |
| Full access | 不問就使用檔案·命令甚至網際網路。危險 |

出處：Codex 官方文件（只摘錄了一部分，中間一行是這本指南的整理）[^modes]

用第4章的許可權選單來說，Ask for approval 和 Approve for me 用的是中間一行（在資料夾內寫入）的圍欄，Full access 用的是最後一行。[^ask] 不過在預約裡，即使是 Ask for approval，也**不會詢問。** “只讀”是在選單裡可能看不到的設定。

建立預約之前，**請先在平時的對話裡把同樣的請求跑一遍。** 像第5章那樣把結果和原件對一對，沒問題時再轉成預約。最初幾次的執行結果也一定要確認。官方文件也建議同樣的順序。[^test]

<Quiz id="ch506-schedule" />

## 雲端有什麼不同

雲端任務在網際網路另一端的工作空間裡執行，所以我的電腦睡著時它也會繼續。[^cloud] 作為交換，有條件。

- 必須有我能使用的**已釋出環境**（published environment）。[^env]
- 建立環境時，要選擇並連線**GitHub 倉庫**。[^github]
- 我電腦裡的檔案、正在執行的程式、瀏覽器登入都不會轉到雲端。[^not-moved]

整理工具資料夾只在我的電腦上，所以這本指南不使用雲端。如果你在公司用 GitHub 工作，只要記住：耗時很久的事可以送到雲端，電腦關掉也行。

<Quiz id="ch506-cloud" />

## 用手機接著看

在手機上，可以檢視進度、允許操作、傳送指示。實際的任務在雲端或**已連線的我的電腦**上執行。[^mobile] 要連線我的電腦，在應用的 **Settings → Connections → Control this Mac or PC** 裡點 **Set up**。[^connect]

連線透過二維碼完成。官方文件要求**只連線我自己擁有的、可信的裝置。**[^trust] 因為已連線的手機可以操控我電腦裡的 Codex。

官方文件以 iOS 應用為準來說明。功能是按賬號依次開放的，所以我的手機上可能還沒有。[^rollout]

<Quiz id="ch506-mobile" />

## 親自試一試

1. 開啟側邊欄的 **Scheduled** 看看（不建立也可以）。
2. 把第5章的 `$weekly-review` 在平時的對話裡再跑一次，並確認結果。
3. 如果要建立預約，先確認這件事在資料夾裡就能完成，再把第一次執行的結果和原件對一對。

**連續任務**：第7章會在終端裡用 `codex exec` 一行命令來確認同一個整理工具。

## 整理

- 預約透過對話建立，在 Scheduled 裡檢視。在預約裡可以呼叫 `$技能`。
- 用我的資料夾的預約，必須電腦開著、應用在執行。
- 預約是沒有人的情況下執行的，所以沿用預設許可權。Full access 很危險。
- 雲端需要 GitHub 倉庫和已釋出環境。我的檔案不會轉過去。
- 手機用來操控我的電腦或雲端。只連線可信的裝置。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Scheduled | 預約任務 | 檢視預約任務和執行記錄的地方 |
| Published environment | 已釋出環境 | 雲端任務開始時準備好的工作空間 |
| Unattended | 無人值守 | 在沒有人盯著的狀態下執行 |

<ChapterDone :chapter="506" />

下一章：[第7章. 在終端裡使用](07-terminal.md)

[^schedule]: Codex 官方文件，《Scheduled tasks》。"Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^inbox]: Codex 官方文件，《Scheduled tasks》。"Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^chat-create]: Codex 官方文件，《Scheduled tasks》。"You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^skill]: Codex 官方文件，《Scheduled tasks》。"In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^awake]: Codex 官方文件，《Scheduled tasks》。"Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^sleep]: Codex 官方文件，《Settings》。"On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings （確認日期 2026-11-01）
[^unattended]: Codex 官方文件，《Scheduled tasks》。"Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^modes]: Codex 官方文件，《Scheduled tasks》。"If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^test]: Codex 官方文件，《Scheduled tasks》。"Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
[^cloud]: Codex 官方文件，《Codex Cloud》。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud （確認日期 2026-11-01）
[^env]: Codex 官方文件，《Codex environments》。"A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes （確認日期 2026-11-01）
[^github]: Codex 官方文件，《Codex Cloud》。"Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud （確認日期 2026-11-01）
[^not-moved]: Codex 官方文件，《Codex environments》。"Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes （確認日期 2026-11-01）
[^mobile]: Codex 官方文件，《Codex on mobile》。"Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile （確認日期 2026-11-01）
[^connect]: Codex 官方文件，《Codex on mobile》。"Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile （確認日期 2026-11-01）
[^trust]: Codex 官方文件，《Codex on mobile》。"Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile （確認日期 2026-11-01）
[^rollout]: Codex 官方文件，《Codex on mobile》。"Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile （確認日期 2026-11-01）
[^ask]: Codex 官方文件，《Permissions》。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes （確認日期 2026-11-01）
[^no-cli]: Codex 官方文件，《Scheduled tasks》。"Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations （確認日期 2026-11-01）
