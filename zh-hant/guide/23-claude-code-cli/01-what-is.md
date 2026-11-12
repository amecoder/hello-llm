# 第1章 終端與 Claude Code

<Badge type="tip" text="必讀" /> 想跟著這一階段學下去，一定要讀這一章。

> **一句話總結**：終端是用文字讓電腦幹活的視窗。本課程會帶一個從沒開啟過終端的人安裝 Claude Code，最後做到用一行命令整理每週的筆記。[^tested]

本課程的執行結果是在 Linux 上得到的。沒有在 macOS·Windows 上執行過，這兩部分以官方文件為依據。

一開始不需要做到完美。不懂程式碼也沒關係。把你想要的東西用話說清楚就行。[^no-code]

## 終端是什麼

**終端**（Terminal）是不用滑鼠，而是**用文字輸入命令**來操作電腦的視窗。想象一個有游標在閃的黑色（或白色）視窗就行。[^cursor]

平時你是雙擊資料夾來開啟它。在終端裡，你要用文字輸入"去這個資料夾"。做的事一樣，只是方法不同。

在終端裡不能點選單來選擇。要用方向鍵移動。[^no-click] 一開始可能不習慣，但很快就會熟悉。第2章會一步一步學最需要的幾個命令。

<Quiz id="ch801-terminal" />

## 和聊天有什麼不同

如果你用過 Claude 的聊天視窗，應該對這樣的順序很熟悉。複製筆記貼上進去。拿到回答。再把回答複製到檔案裡。

Claude Code 是在終端裡執行的**代理型助手**。[^agentic] 代理（Agent）是不只回答，還會自己一步一步把事情做完的程式。交給它一件事，它會收集上下文、採取行動、再確認結果。[^phases]

把同一件事放在一起比較，就能看出區別。

| | 聊天視窗 | Claude Code |
|---|---|---|
| 交給它筆記 | 自己貼上 | 自己從資料夾裡讀 |
| 結果 | 文字回答 | 回答和檔案 |
| 收尾 | 我來抄過去 | Claude 來儲存 |

Claude Code 會自己讀需要的檔案。[^reads] 它也能讀取並整理已有的檔案。[^organize] 所以你可以這樣說。

```text
讀一下 inbox 裡的會議筆記，儲存成 회의록.md。回答只要一行。
```

現在不用輸入。第4章再做。

因為它直接處理檔案，所以也有需要小心的地方。允許它做什麼，後面的章節會詳細講。

<Quiz id="ch801-diff" />

## 開啟你電腦上的終端

終端本來就裝在電腦裡。不用另外安裝。按你的作業系統開啟看看。

- **Mac**：按 `Cmd + Space` 開啟 Spotlight 搜尋。輸入 `Terminal`，按 Enter。[^open-mac] 如果系統是中文，也可以輸入 `終端`。
- **Linux**：大多數情況下按 `Ctrl + Alt + T` 就能開啟。不行的話，在程式選單裡找"終端"。[^open-linux]
- **Windows**：按 `Win + X`，在選單裡選 **Windows PowerShell** 或 **終端**（Terminal）。[^open-win]

Windows 有 PowerShell 和 CMD 兩種視窗。它們用的命令不同，所以要分清。最前面如果看到 `PS C:\` 這樣帶 `PS` 的，就是 PowerShell；沒有 `PS`、以 `C:\` 開頭的，就是 CMD。[^ps-cmd] 本課程裡的 Windows 命令都以 **PowerShell** 為準。

視窗打開了，今天的事就完成了一半。練習結束後，直接關掉視窗也可以。

<Quiz id="ch801-open" />

## 準備什麼

需要三樣東西。

1. **付費帳號**：免費的 claude.ai 套餐裡不包含 Claude Code。[^free] 需要有 Pro、Max 這樣的付費帳號。[^paid]
2. **合適的電腦**：Mac、Windows、Linux 都可以。作業系統版本和記憶體要求寫在下面的框裡。
3. **網路連線**：必須有。[^ram]

::: details 詳細說明（點選展開）
- **可以使用的帳號**：Pro、Max、Ultra、Team、Enterprise、Console 之一。[^paid]
- **作業系統**：Mac 需要 macOS 13.0 及以上，Windows 需要 Windows 10 1809 及以上。[^os] Linux 支援 Ubuntu 20.04 及以上等版本。[^linux]
- **記憶體**：需要 4GB 及以上。[^ram]
- **地區**：只能在 Anthropic 支援的國家和地區使用。[^countries]
:::

練習材料由本課程提供。用虛構的咖啡館筆記來練習，所以不用擔心碰到你自己的檔案，可以放心開始。

<Quiz id="ch801-ready" />

## 本課程要做出什麼

本課程有一條主線。就是**用一行命令執行的每週整理**。

我們用小咖啡館「街角咖啡館」員工瑞妍的筆記來練習。把亂糟糟的會議筆記放進資料夾。執行一個指令碼（script，按順序寫好命令的檔案）。筆記就會一份一份整理成會議記錄。

想先看看的話，可以開啟[完成的指令碼](/practice/cli/results/10장-주간정리.sh.txt)和[這個指令碼做出的會議記錄](/practice/cli/results/10장-회의록-스크립트로.txt)。現在看不懂也沒關係。

之所以能這樣做，是因為 Claude Code 有一種**回答一次就結束的執行方式**。[^oneshot] 不用來回對話。用一行把要做的事交給它，它回答後就自己結束。這種方式在第10章學。

如果出了問題，指令碼能發現這一點。[^exit-code] 所以很適合交給它那些不需要人盯著的工作。

課程按這樣的順序進行。

- **第1~5章**：終端基礎、安裝、第一次會話、輸入技巧
- **第6~9章**：繼續對話、許可與撤銷、專案記憶、技能
- **第10~13章**：自動化、鉤子、同時工作、費用與問題解決[^bash-only]
- **第14章**：用自己的筆記做每週整理

<Quiz id="ch801-goal" />

## 和應用指南的關係

也有一個桌面應用，給那些不想用終端、想用視窗和按鈕的人。[^gui] 本網站的 [Claude Code 應用指南](/zh-hant/guide/20-claude-code/)講的就是這個應用。

看哪一個，可以這樣選。

- **覺得終端有負擔**：去看應用指南。現在不是非學終端不可。
- **想用一行命令來跑工作**：繼續讀本課程。

本課程假設你沒有讀過應用指南。你可以獨自跟著學。它和應用指南用的是同樣的街角咖啡館筆記，所以如果你已經讀過，內容會覺得眼熟。

<Quiz id="ch801-app" />

## 動手試試

1. 用上面的方法開啟你電腦上的終端。
2. 輸入下面的命令，按 Enter。

```bash
claude --version
```

會出現兩種結果之一。哪一種都沒關係。

- **出現數字**，比如 `2.1.318 (Claude Code)`：說明已經裝好了。[^version] 版本號不同也沒關係。
- 出現 `command not found` 或 `not recognized`：意思是還找不到它。[^not-found] 根據介面語言，也可能用中文顯示。意思是一樣的。第3章會安裝。這不是壞了。

問問自己。我電腦上的終端是什麼？能回答出 Mac 的終端、Linux 的終端、Windows 的 PowerShell 其中之一就行。

## 小結

- 終端是用文字輸入命令來操作電腦的視窗。它本來就裝在電腦裡。
- Claude Code 是自己讀取和建立資料夾裡檔案的代理型助手。
- 需要付費帳號。免費套餐裡沒有。
- Windows 的命令以 PowerShell 為準。確認有沒有看到 `PS`。
- 本課程的目標是用一行命令執行的每週整理。覺得終端有負擔，也可以去看應用指南。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Terminal | 終端 | 用文字輸入命令來操作電腦的視窗 |
| PowerShell | PowerShell | Windows 的終端程式 |
| CMD | 命令提示符 | 和 PowerShell 命令不同的 Windows 舊式命令視窗 |
| Agent | 代理 | 自己一步一步把事情做完的程式 |
| Script | 指令碼 | 按順序寫好命令的檔案 |

<ChapterDone :chapter="801" />

下一章：[第2章 終端基礎](02-shell-basics.md)

[^tested]: 本課程依據 2026年11月6日確認的 Claude Code 官方文件編寫。執行結果是同一天在 Linux 上用 Claude Code 2.1.318 執行得到的。為了不混入作者的個人設定，執行時關掉了這些設定。沒有在 macOS 和 Windows 上執行過。這兩部分的內容以官方文件為依據。這段說明在後面的章節裡不再重複。沒有實際執行過的功能，會在相應位置說明。
[^bash-only]: 本課程的指令碼以 Mac·Linux 的 bash 為準。bash 是 shell（在終端裡理解命令的程式）的一種。Mac 的預設 shell 是 zsh，但本課程用 `bash 檔名` 這樣的方式，用 bash 來執行指令碼。在 Windows PowerShell 裡不能原樣執行。Windows 不用儲存的檔案，而是貼上整段內容來執行。第10章會再講一次。
[^no-code]: Claude Code 官方文件，「Terminal guide for new users」. "You don't need to know how to code." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^cursor]: Claude Code 官方文件，「Terminal guide for new users」. "A window will appear with a blinking cursor. This is your terminal, where you type commands." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^no-click]: Claude Code 官方文件，「Terminal guide for new users」. "You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^agentic]: Claude Code 官方文件，「How Claude Code works」. "Claude Code is an agentic assistant that runs in your terminal." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^phases]: Claude Code 官方文件，「How Claude Code works」. "When you give Claude a task, it works through three phases: gather context, take action, and verify results." https://code.claude.com/docs/en/how-claude-code-works （確認日期 2026-11-06）
[^reads]: Claude Code 官方文件，「Quickstart」. "Claude Code reads your project files as needed." https://code.claude.com/docs/en/quickstart （確認日期 2026-11-06）
[^organize]: Claude Code 官方文件，「Terminal guide for new users」. "Claude can read and organize files you already have:" https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^open-mac]: Claude Code 官方文件，「Terminal guide for new users」. "Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^open-linux]: Claude Code 官方文件，「Terminal guide for new users」. "On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^open-win]: Claude Code 官方文件，「Terminal guide for new users」. "Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." https://code.claude.com/docs/en/terminal-guide （確認日期 2026-11-06）
[^ps-cmd]: Claude Code 官方文件，「Quickstart」. "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." https://code.claude.com/docs/en/quickstart （確認日期 2026-11-06）
[^paid]: Claude Code 官方文件，「Advanced setup」. "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^free]: Claude Code 官方文件，「Advanced setup」. "The free claude.ai plan does not include Claude Code access." https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^os]: Claude Code 官方文件，「Advanced setup」. "macOS 13.0+" / "Windows 10 1809+ or Windows Server 2019+" https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^linux]: Claude Code 官方文件，「Advanced setup」. "Ubuntu 20.04+" https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^ram]: Claude Code 官方文件，「Advanced setup」. "4 GB+ RAM, x64 or ARM64 processor" / "internet connection required" https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^countries]: Claude Code 官方文件，「Advanced setup」. "Anthropic supported countries" https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^oneshot]: Claude Code 官方文件，「Quickstart」. "Run one-off query, then exit" https://code.claude.com/docs/en/quickstart （確認日期 2026-11-06）
[^exit-code]: Claude Code 官方文件，「Run Claude Code programmatically」. "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." https://code.claude.com/docs/en/headless （確認日期 2026-11-06）
[^gui]: Claude Code 官方文件，「Advanced setup」. "Prefer a graphical interface?" https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^version]: Claude Code 官方文件，「Advanced setup」. "A working installation prints a version number such as `2.1.211 (Claude Code)`." https://code.claude.com/docs/en/setup （確認日期 2026-11-06）
[^not-found]: Claude Code 官方文件，「Troubleshoot installation and login」. "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install （確認日期 2026-11-06）
