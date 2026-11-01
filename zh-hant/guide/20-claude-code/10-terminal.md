# 第10章 在終端裡使用——用一行命令跑同一個整理工具

> **一句話總結**：終端版 Claude Code 和桌面應用是**同一個引擎**。在同一個資料夾裡開啟，就**原樣沿用 CLAUDE.md、技能和設定**。
> 一行 `claude -p "要做的事"` 就能提問、拿到回答，然後立刻結束。自動化重複性工作時特別有用。

本章依據 2026 年 10 月 31 日確認過的 Claude Code 官方文件，以及在 macOS 終端裡實際執行 Claude Code 2.1.316 的結果寫成。**如果你是第一次接觸終端，可以跳過這一章。** 只用桌面應用，整理工具就夠用了。

## 終端是什麼

**終端**（Terminal）是不用滑鼠，而是**用打字輸入命令**來操作電腦的視窗。macOS 用「應用程式 → 實用工具 → 終端」，Windows 用 PowerShell。官方文件裡也專門有給第一次開啟終端的人看的說明。[^install]

已經有了桌面應用，為什麼還要用終端？有兩個原因。

- **一行就能完成的事**：可以只丟擲一個問題，拿到回答就結束。
- **自動化**：可以從其他程式或腳本里呼叫 Claude Code。桌面應用沒有這種執行指令碼的功能。[^no-script]

<Quiz id="ch410-why" />

## 安裝並開始

開啟終端，把適合你電腦的一條命令貼上進去。[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**不要把陌生網站上的安裝命令直接貼上進去。** 上面的命令會直接執行從網際網路下載的指令碼。執行之前，一定要確認**和官方文件（code.claude.com）上寫的完全一樣**。

安裝完成後，進入要工作的資料夾，輸入 `claude`。[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

第一次會提示你登入。如果是訂閱賬號，在瀏覽器裡完成登入就行。[^start] `cd` 的意思是"進入這個資料夾"。這和在桌面應用裡選擇資料夾是同一回事。

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
cd ~/hello-ai-연습/정리도구
claude -p "給我看 notes 資料夾裡的檔案列表，並一行一行告訴我每個檔案是用哪個模板（templates 裡的哪一個）寫的。不要修改檔案。回答要簡短，只用表格。"
```

幾秒鐘後回答出來，隨即就結束了（完整輸出：[10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)）。

| notes 檔案 | 使用的模板 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

來源：本指南的實操結果（2026-10-31）。回答末尾還附上了"確認範圍：4/4"。

在應用裡做的**模板檔案，終端也原樣讀出來了。** 不過，"確認範圍：4/4"是帶有一個附加說明的數值，說明是**只比較了每個檔案的前 15 行**。連這種附加說明都要讀，這個習慣就是第5章的"核對依據"。

CLAUDE.md 和技能，官方文件說明是終端和應用**共用的**。[^same] 想親自確認，可以開啟對話式的 `claude`，輸入 `/`，看看第7章的技能名稱是否出現。

不過，用 `-p` 一次性跑完的執行方式，**中途無法詢問許可。** 需要許可的事，如果沒有事先用允許規則許可，就會被拒絕。[^p-deny] 比如像 `claude -p "/weekly-review"` 這樣會寫檔案的技能，寫入可能會因為沒有許可而被拒絕。所以一開始，請像上面的練習一樣，用**只讀取的提問**來練習。

<Quiz id="ch410-practice" />

## 在應用和終端之間來回切換

- 兩邊可以在**同一個資料夾裡同時**使用。會話列表是各自獨立的，但設定和 CLAUDE.md 是共用的。[^same]
- 想把在終端裡進行的對話轉到應用裡，就在終端裡輸入 `/desktop`（macOS·Windows x64，訂閱登入）。[^to-desktop]
- 反過來，用應用首頁的 **「匯入 Claude Code CLI 會話」**，可以把在終端裡進行過的會話匯入應用（第2章首頁的提示卡片）。

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
