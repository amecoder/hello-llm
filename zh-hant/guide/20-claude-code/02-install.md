# 第2章 安裝桌面應用與第一次會話——安裝、登入、Code 標籤頁、選擇資料夾、交代第一件事

> **一句話總結**：安裝 Claude 桌面應用，開啟 **Code** 標籤頁。在輸入框下面一行**選好資料夾**，用平時說話的方式寫下要做的事併發送，Claude 就會在那個資料夾裡工作。
> 這一章要讓它把一份亂七八糟的會議筆記，整理成**按我定的格式寫的會議紀要**。這是貫穿第3階段、不斷長大的「按我的方式幫我整理的工具」的第一步。

本章依據 2026 年 10 月 31 日確認過的 Claude Code 官方文件，以及 macOS 桌面應用（韓語介面，付費賬號）寫成。介面上的名稱經常變化。如果和你的介面不一樣，請以你螢幕上顯示的名稱為準。

## 安裝並登入

Claude Code **包含在 Claude 桌面應用裡面。** 只要安裝應用就行，其他程式（開發用的執行工具 Node.js，或者終端版 Claude Code）不需要另外安裝。[^quickstart]

1. 在官方文件的安裝頁面，下載適合你電腦的檔案。[^quickstart]
   - **macOS**：一個檔案就能同時安裝在 Intel 和 Apple 晶片的 Mac 上。
   - **Windows**：有普通 PC（x64）用的安裝檔案，ARM64 PC 的另有一個。
   - **Linux**：是測試版（試用版），在 Ubuntu、Debian 上用 apt（Linux 的程式安裝工具）安裝。
2. 執行下載好的檔案進行安裝。
3. 開啟應用，用 **Anthropic 賬號**登入。[^quickstart] 如果是個人訂閱（Pro·Max·Ultra），用在 claude.ai 上用的賬號登入。[^auth]

如果你在第2階段已經安裝了 Claude 應用，可以跳過這一步。如果應用比較舊，請下載最新版。macOS 是選單欄的 **Claude → 檢查更新…**，Windows 是 **Help → Check for Updates…**。[^update]

<Quiz id="ch402-install" />

## 開啟 Code 標籤頁

Claude Code 在應用側邊選單最上面的 **Code** 標籤頁裡。[^quickstart] 如果標籤頁只顯示圖示，把滑鼠放上去就能看到名稱。[^quickstart] 在 macOS 上，也可以透過選單欄的 **前往 → Code** 進入。

點 Code 時如果彈出提示，按下面處理。[^quickstart]

- **提示你改用付費套餐**：用 Claude Code 需要有付費訂閱（[第1章](01-what-is.md#需要什麼——套餐)）。訂閱之後再開啟。
- **提示你線上登入**：完成登入後重新啟動應用。
- **403 錯誤**（表示訪問被拒絕的錯誤）：請看官方文件裡的認證問題排查說明。

在 Code 標籤頁裡開啟新會話，會出現這樣的介面。

![Code 標籤頁的新會話介面。① 中間的開始提示卡片（「選擇環境」「匯入 Claude Code CLI 會話」「開啟自動模式」「選擇工作資料夾」），② 輸入框（「描述任務或提問」），③ 環境「這臺電腦」，④ 資料夾「選擇…」，⑤ 模型「Opus 5.5」和努力程度「中」，⑥ 許可權模式「手動」都標有紅色編號](../../../guide/20-claude-code/assets/shot-01-new-session-marked.png)

工作時最常看的地方是**輸入框下面一行**。官方文件也說明，傳送第一條訊息之前，要在這一行選好環境、資料夾、許可權模式和模型。[^desktop-start]

| 編號 | 介面名稱 | 作用 |
|---|---|---|
| ① | 開始提示卡片 | 只在新會話裡能看到，現在可以不用 |
| ② | 輸入框 | 寫下要做的事併發送的地方 |
| ③ | 這臺電腦 | 在哪裡工作（環境）。想在我的電腦上做，就保持不動 |
| ④ | 選擇… | 在哪個資料夾裡工作 |
| ⑤ | Opus 5.5 · 中 | 用哪個模型，思考得多深 |
| ⑥ | 手動 | Claude 哪些事可以不用問就做（許可權模式） |

來源：介面名稱來自本指南的介面確認（2026-10-31），作用來自官方文件[^desktop-start]

③ 的環境，一開始保持**這臺電腦**就行。官方文件裡的「Local」（我的電腦）就是這一項。[^quickstart] 在雲端工作的方法，在第8章裡講。

模型（⑤）以後也可以更換。[^quickstart] 一開始直接用螢幕上選好的就可以。

::: details 如果輸入框上方有「選擇環境」，而下面一行沒有環境
這是舊的介面佈局。官方文件說明，如果新會話的輸入框下面看不到環境，就是舊佈局（earlier layout）。[^quickstart] 在舊佈局裡，環境和資料夾要在**輸入框上方**選，許可權模式和模型要在**下面一行**選。[^desktop-layout] 做的事是一樣的。
:::

<Quiz id="ch402-screen" />

## 準備並選擇練習資料夾

Claude Code 在**我選的資料夾裡面**工作。所以一開始最好另外建一個就算弄壞了也沒關係的**練習用資料夾**。官方文件也建議，一開始先從自己很熟悉的小專案入手。[^quickstart]

**練習材料**：這是小咖啡館「街角咖啡館」的員工瑞妍一週的筆記（全部是虛構的）。這一章只用一份會議筆記，其餘的在後面的章裡用。

| 檔案 | 內容 |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | 亂七八糟的週會筆記 |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | 聽課時寫的筆記 |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | 3 天的每日回顧 |

筆記裡的日期和星期是為了故事編出來的，所以**和真實的 2026 年日曆對不上。** 核對結果時，請看和**筆記裡寫的**日期、星期是否一致。

1. 在你的電腦上新建一個資料夾 **整理工具（정리도구）**，再在裡面建一個 **inbox** 資料夾。
2. 下載上面的 5 個檔案，放進 **inbox**。
3. 點 Code 標籤頁輸入框下面一行的 **選擇…**（④）。

![資料夾選單。① 資料夾「選擇…」，② 「搜尋資料夾…」欄（圖中輸入了一個沒開啟過的其他練習資料夾的名字，顯示出「沒有匹配項」），③ 「開啟資料夾…」都標有紅色編號](../../../guide/20-claude-code/assets/shot-02-folder-menu-marked.png)

4. 選單開啟後，點最下面的 **開啟資料夾…**（③）。官方文件裡的「Open folder…」就是這一項。[^quickstart]
5. 在選擇檔案的窗口裡選擇 **整理工具** 資料夾，點 **開啟**。

選單上方會顯示**最近開啟的資料夾**。開啟過一次的資料夾，下次可以在 ② 的搜尋欄裡輸入名字直接選。第一次開啟的資料夾，會像圖裡那樣顯示「沒有匹配項」，所以用 **開啟資料夾…** 來開啟。

選好資料夾後，④ 的位置會顯示資料夾的名字。

![選好資料夾之後輸入框下面的一行。① 資料夾位置顯示「整理工具」](../../../guide/20-claude-code/assets/shot-03-folder-picked-marked.png)

可以這樣理解：**工作資料夾 = Claude 能動手的範圍。** 所以比起放著我全部文件的大資料夾，選一個只放這次工作所需檔案的小資料夾，會更讓人放心。

<Quiz id="ch402-folder" />

## 交代第一件事

現在寫下要做的事併發送。官方文件的順序也是一樣的。輸入想做的事，按 **Enter**，Claude 就會讀取資料夾裡的檔案、修改檔案，並執行命令。[^desktop-start]

來並排看看不太好的請求和更好的請求。

```
整理一下會議筆記。
```

```
讀一下 inbox 資料夾裡的會議筆記，整理成會議紀要。分成"決定的事 / 要做的事（負責人·期限）/ 下次要討論的事"三部分，儲存成 notes 資料夾裡的新檔案。不要修改原始筆記。
```

第二個請求裡，**要讀什麼、按什麼格式整理、儲存在哪裡、什麼不能動**，全都有了。指定了格式，每次的結果就會差不多，也容易檢查對不對。這是把第1階段學過的"指定格式"，原樣用在資料夾的工作上（[第1階段第4章](../00-common/04-prompt-basics.md)）。

![輸入請求後的介面。① 輸入框裡有整理會議紀要的請求，② 許可權模式是「手動」](../../../guide/20-claude-code/assets/shot-04-prompt-marked.png)

傳送之後，Claude 在做什麼會一行一行顯示在螢幕上。它有時會列出一個待辦清單，一項一項打勾，比如"讀取筆記 → 寫會議紀要 → 檢查原始檔案是否保持原樣"。

**它在工作的時候也可以插話。** 按停止按鈕會立刻停下來；寫下要修正的地方並按 **Enter**，就會在不停止當前工作的情況下傳達過去。[^desktop-start] 比如補充一句"要做的事請做成表格"，它會從下一步開始照辦。

### 它來徵求許可的情況

如果許可權模式是**手動**（官方文件裡的 Manual），Claude 在修改檔案或執行命令**之前，會先詢問。** 它會展示將要改什麼，每次更改你都可以同意或拒絕。[^desktop-modes] 一開始保持手動，一項一項看它想做什麼，會更讓人放心。許可權模式在[第4章](04-permissions-undo.md)裡詳細講。

::: details 明明是手動，卻沒有詢問就直接建立了檔案
如果你以前在終端裡用過 Claude Code，那時設定的內容可能也應用到了應用裡。**桌面應用讀取的設定檔案，和終端版 Claude Code 是同一份。**[^desktop-modes] 比如，如果你加過"寫檔案不要詢問"這樣的允許規則，即使是手動模式，這件事也不會詢問就直接做。本指南的截圖也是在有這種設定的電腦上拍的，所以沒有出現許可視窗。
:::

<Quiz id="ch402-first" />

## 檢查結果

做完之後，Claude 會整理並展示它做了什麼。

![工作完成後的介面。① 填有負責人和期限的待辦表格，② 確認沒有動原始筆記，都標有紅色編號](../../../guide/20-claude-code/assets/shot-05-result-marked.png)

**就算 Claude 說"做完了"，也要親自檢查。** 把原始筆記攤在旁邊，這樣問問自己。

- 每一件要做的事，都有**負責人和期限**嗎？和筆記一致嗎？
- 數字（價格、日期）和筆記一樣嗎？
- 有沒有編造筆記裡**沒有的內容**？
- 原始筆記還是原樣嗎？

我們把本指南里實際生成的會議紀要和筆記對照了一下，結果如下。

| 筆記裡寫的 | 會議紀要 |
|---|---|
| 咖啡+餅乾套餐 5,500 韓元，試做 2 周 / 折扣暫緩 | 原樣搬過來 |
| 俊浩 週五前 成本 / 瑞妍 週三前 文案 / 瑞妍 今天 燈泡 | 日期補上為 10/31（週五）、10/29（週三）、10/27（週一）當天 |
| 新品看了成本再決定 | 另外註明"備忘錄裡沒有寫明什麼時候決定" |
| 下次會議 11/3 週一上午 10 點 | 原樣搬過來 |

來源：本指南的實操結果（2026-10-31）。結果檔案：[2장-회의록-2026-10-27-주간회의.txt](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt)（保持 Markdown 格式原樣）

**即使是同樣的請求，每次的結果也會略有不同。** 表格的樣子或者語氣和本指南不一樣也沒關係。如果上面的檢查問題你都能回答"是"，就是做好了。

生成的檔案在你電腦的 **整理工具/notes** 資料夾裡。請用 Finder 或檔案資源管理器開啟看看。在應用裡檢視檔案和更改內容的方法，在[第3章](03-screen-tour.md)裡講。

<Quiz id="ch402-check" />

## 親手試一試

1. 建立 **整理工具** 資料夾，把 5 個練習材料放進 **inbox**。
2. 在 Code 標籤頁裡開啟新會話，把資料夾選成 **整理工具**。
3. 原樣傳送上面"更好的請求"，並用 4 個檢查問題檢查生成的會議紀要。
4. 如果有不滿意的地方，試著用一句話讓它修改（例如："在待辦表格里加一欄'狀態'"）。

**連續任務**：如果你有自己實際寫過的會議筆記或上課筆記，刪掉個人資訊後放一份進 **inbox**，傳送同樣的請求。格式（決定·要做的事·下次討論）可以按自己的工作改。從[第3章](03-screen-tour.md)起會繼續用這個資料夾。

## 小結

- Claude Code 在 Claude 桌面應用的 **Code** 標籤頁裡。只要安裝應用並用 Anthropic 賬號登入就行。
- 在輸入框下面一行選擇環境（這臺電腦）、資料夾、模型、許可權模式。
- 一開始選一個練習用的小資料夾。工作資料夾就是 Claude 能動手的範圍。
- 請求裡要寫明要讀什麼、格式、儲存在哪裡、什麼不能動。
- 不要輕信"做完了"，要和原始檔案對照檢查。結果每次都會略有不同。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Session | 會話 | 開啟一個資料夾，與 Claude 進行的一次工作對話 |
| Environment | 環境 | Claude 工作的地方。我的電腦（這臺電腦）、雲端等 |
| Local | 本地 | 我的電腦。介面上是「這臺電腦」 |
| Permission mode | 許可權模式 | Claude 不用問就可以做的事的範圍 |
| Manual | 手動 | 修改檔案或執行命令之前每次都詢問的模式 |

<ChapterDone :chapter="402" />

下一章：[第3章. 熟悉介面](03-screen-tour.md)

[^quickstart]: Claude Code 官方文件，「Get started with the desktop app」. "Universal build for Intel and Apple Silicon" / "apt or .deb for Ubuntu and Debian" / "For Windows ARM64, download the ARM64 installer. On Linux, install with apt" / "sign in with your Anthropic account." / "Click the Code tab at the top of the sidebar. If the tabs show only icons, hover over one to see its name." / "Prompt to upgrade: you need to subscribe to a paid plan first" / "Prompt to sign in online: complete the sign-in and restart the app" / "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." / "click the first control, the environment selector, and select the top entry in the Local group. Then click the project folder control beside the environment selector, select Open folder…, and choose your project's directory." / "If a new session shows no environment under your prompt box, you have the earlier layout." / "Start with a small project you know well." / "You can change the model later from the model picker." https://code.claude.com/docs/en/desktop-quickstart (確認日期 2026-10-31)
[^desktop-start]: Claude Code 官方文件，「Desktop application」. "Before you send your first message, choose the environment, project folder, permission mode, and model in the row under the prompt box" / "Type what you want Claude to do and press Enter to send. Claude reads your project files, makes changes, and runs commands based on your permission mode." / "click the stop button to interrupt immediately, or type a correction and press Enter to send it without stopping the running action." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^desktop-layout]: Claude Code 官方文件，「Desktop application」. "In the earlier layout, choose the environment and any project folder or repository above the prompt box, and the permission mode and model in the row under it." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^desktop-modes]: Claude Code 官方文件，「Desktop application」. "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^auth]: Claude Code 官方文件，「Authentication」. "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (確認日期 2026-10-31)
[^update]: Claude Code 官方文件，「Desktop application」. "Open Claude > Check for Updates… on macOS or Help > Check for Updates… on Windows to update." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
