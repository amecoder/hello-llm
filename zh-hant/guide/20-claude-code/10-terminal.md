# 第10章 在終端裡使用——用一行命令跑同一個整理工具

<Badge type="info" text="選讀" /> 需要的時候再讀。跳過也能跟上後面的章節。

> **一句話總結**：終端版 Claude Code 和桌面應用是**同一個引擎**。在同一個資料夾裡開啟，就**原樣沿用 CLAUDE.md、技能和設定**。
> 一行 `claude -p "要做的事"` 就能提問、拿到回答，然後立刻結束。自動化重複性工作時特別有用。

本章依據 2026 年 10 月 31 日確認過的 Claude Code 官方文件，以及在 macOS 終端裡實際執行 Claude Code 2.1.316 的結果寫成。**如果你是第一次接觸終端，可以跳過這一章。** 只用桌面應用，整理工具就夠用了。如果想好好學終端，請看 [Claude Code 終端指南](/zh-hant/guide/23-claude-code-cli/)。

## 終端是什麼

**終端**（Terminal）是不用滑鼠，而是**用打字輸入命令**來操作電腦的視窗。

- **macOS**：在 Finder 裡開啟「應用程式 → 實用工具 → 終端」。
- **Windows**：在開始選單裡找到 **PowerShell** 並開啟。

視窗開啟後，在閃爍的游標處輸入命令，按 Enter。更詳細的開啟方法，在官方文件的終端說明裡。[^install]

已經有了桌面應用，為什麼還要用終端？有兩個原因。

- **一行就能完成的事**：可以只丟擲一個問題，拿到回答就結束。
- **自動化**：可以從其他程式或**指令碼**（把要做的事按順序寫好、一次執行的一組命令）裡呼叫 Claude Code。比如「檢查一下資料夾裡的新備忘」，不用每次手動輸入，而是放進一組命令裡執行。桌面應用沒有這種執行指令碼的功能。[^no-script]

<Quiz id="ch410-why" />

## 安裝並開始

開啟終端，把適合你電腦的一條命令貼上進去。[^install] 如果是 macOS，只用第一個框；如果是 Windows，只用第二個框。

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

把命令拆開來看是這樣的。

- `curl`：從網址下載檔案的命令
- `-fsSL`：下載時的選項（出錯就停止、隱藏進度顯示、地址搬走了就跟過去）
- `|`：把前一個命令的結果交給後一個命令的符號
- `bash`：執行接過來的安裝指令碼的程式
- Windows 的 `irm` 是下載，`iex` 是執行下載的內容，做的事是一樣的。

也就是說，上面的命令會**直接執行從網際網路下載的安裝指令碼。** 所以**不要把陌生網站上的安裝命令直接貼上進去。** 執行之前，一定要確認**和官方文件（code.claude.com）上寫的完全一樣**。

安裝完成後，進入要工作的資料夾，輸入 `claude`。[^start] `cd` 的意思是"進入這個資料夾"。這和在桌面應用裡選擇資料夾是同一回事。

```bash
cd ~/hello-ai-practice/organizer
claude
```

`~/hello-ai-practice/organizer` 是舉例的位置。

- `~`：我的使用者資料夾（主資料夾）的簡寫符號
- `/`：表示進入資料夾裡面的資料夾

請換成第2章建的**整理工具（organizer）**資料夾實際所在的位置。如果資料夾起了別的名字，就用那個名字。在 macOS 上，輸入 `cd `（cd 後面加一個空格）之後，把 Finder 裡的資料夾拖到終端視窗裡，位置就會自動填進去。

第一次會提示你登入。如果是訂閱帳號，在瀏覽器裡完成登入就行。[^start]

<Quiz id="ch410-install" />

## 基本命令

| 命令 | 作用 |
|---|---|
| `claude` | 以對話式啟動（與應用裡的會話相同） |
| `claude "要做的事"` | 帶著第一個請求，以對話式啟動 |
| `claude -p "要做的事"` | 問一次、拿到回答就結束 |
| `claude -c` | 繼續這個資料夾裡最近的對話 |
| `claude -r` | 選擇過去的對話來繼續 |

來源：Claude Code 官方文件[^commands]

以對話式啟動之後，可以像在應用裡一樣使用 `/` 命令。`/help` 顯示可用的命令，`/resume` 顯示過去的對話。[^start]

<Quiz id="ch410-commands" />

## 練習——用一行確認整理工具

在整理工具資料夾裡，我們這樣運行了一下。

```bash
cd ~/hello-ai-practice/organizer
claude -p "給我看 notes 資料夾裡的檔案列表，並一行一行告訴我每個檔案是用哪個模板（templates 裡的哪一個）寫的。不要修改檔案。回答要簡短，只用表格。"
```

幾秒鐘後回答出來，隨即就結束了（完整輸出：[ch10-claude-p-output.txt](/practice/zh-hant/notes/results/ch10-claude-p-output.txt)）。

| notes 檔案 | 使用的模板 |
|---|---|
| study-2026-10-28-prompt-lecture.md | templates/study-notes.md |
| weekly-review-2026-10-27.md | templates/weekly-review.md |
| minutes-2026-10-27-weekly.md | templates/minutes.md |
| minutes-2026-10-29-adhoc.md | templates/minutes.md |

來源：本指南的實操結果（2026-10-31）。回答末尾還附上了"確認範圍：4/4"。

在應用裡做的**模板檔案，終端也原樣讀出來了。** 不過，"確認範圍：4/4"是帶有一個附加說明的數值，說明是**只比較了每個檔案的前 15 行**。連這種附加說明都要讀，這個習慣就是第5章的"核對依據"。

CLAUDE.md 和技能，官方文件說明是終端和應用**共用的**。[^same] 想親自確認，可以開啟對話式的 `claude`，輸入 `/`，看看第7章的技能名稱是否出現。

不過，用 `-p` 一次性跑完的執行方式，**中途無法詢問許可。** 需要許可的事，如果沒有事先用允許規則許可，就會被拒絕。[^p-deny] 比如像 `claude -p "/weekly-review"` 這樣會寫檔案的技能，寫入可能會因為沒有許可而被拒絕。所以一開始，請像上面的練習一樣，用**只讀取的提問**來練習。

<Quiz id="ch410-practice" />

## 在應用和終端之間來回切換

- 兩邊可以在**同一個資料夾裡同時**使用。會話列表是各自獨立的，但設定和 CLAUDE.md 是共用的。[^same]
- 想把在終端裡進行的對話轉到應用裡，就在終端裡輸入 `/desktop`（macOS·Windows x64，訂閱登入）。[^to-desktop]
- 也可以從應用這邊匯入。點應用首頁的 **「匯入 Claude Code CLI 會話」**（第2章首頁的提示卡片），就能把在終端裡進行過的會話匯入應用。這裡的 CLI 是「終端版 Claude Code」的意思。

<Quiz id="ch410-switch" />

## 親手試一試

1. 親自確認官方文件的安裝命令和上面的一樣，然後安裝（已經有的話，執行 `claude --version`）。
2. 進入整理工具資料夾，執行上面那條只讀的 `claude -p` 提問。
3. 用 `claude` 開啟對話式，輸入 `/help` 看看。輸入 `/`，確認能不能看到第7章的技能名稱。
4. 結束對話，用 `claude -c` 接著繼續剛才的對話。

**連續任務**：第11章會把到目前為止的功能彙總起來，做一個用**我自己的筆記**從頭做出整理工具的任務。

## 小結

- 終端版 Claude Code 和應用是同一個引擎。在同一個資料夾裡，共用 CLAUDE.md、技能和設定。
- 安裝命令要確認和官方文件上寫的完全一樣再執行。
- `claude` 是對話式，`claude -p` 是問一次就結束，`claude -c` 是繼續。
- `-p` 執行時中途無法詢問許可。一開始用只讀取的提問來練習。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Terminal | 終端 | 用打字輸入命令來操作電腦的視窗 |
| CLI | 命令列介面 | 在終端裡使用的程式（Command Line Interface） |
| `cd` | 切換目錄命令 | 進入另一個資料夾的命令 |
| `-p` | 列印模式（print） | 問一次、輸出回答後就結束的執行方式 |

<ChapterDone :chapter="410" />

下一章：[第11章. 實踐任務](11-practice.md)

[^install]: Claude Code 官方文件，「Quickstart」. "To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (確認日期 2026-10-31)
[^start]: Claude Code 官方文件，「Quickstart」. "Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart (確認日期 2026-10-31)
[^commands]: Claude Code 官方文件，「Quickstart」. 命令表："Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart (確認日期 2026-10-31)
[^no-script]: Claude Code 官方文件，「Desktop application」. 功能對比表「Scripting and automation」行的 Desktop 欄："Not available" https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^same]: Claude Code 官方文件，「Desktop application」. "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^to-desktop]: Claude Code 官方文件，「Desktop application」. "To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^p-deny]: Claude Code 官方文件，「Choose a permission mode」. "Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes (確認日期 2026-10-31)
