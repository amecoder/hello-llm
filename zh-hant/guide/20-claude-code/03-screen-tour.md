# 第3章 熟悉介面 — 標題欄、改動內容、檔案、會話資訊

> **一句話總結**：Code 標籤頁是一個**在對話欄旁邊再開啟多個欄（窗格）**來使用的介面。透過會話標題欄的按鈕，開啟**改動內容、檔案、終端、瀏覽器**欄，並在會話資訊欄裡用數字檢視改了什麼。
> 要檢視改動內容，資料夾裡必須開啟**變更記錄（Git）**。這一章會請 Claude 幫你開啟它。

這一章依據2026年10月31日確認的 Claude Code 官方文件和 macOS 桌面應用（韓語介面，付費賬號）編寫。它會直接使用第2章裡建立的**整理工具（정리도구）**資料夾和會議紀要。

## 佈局一覽

交辦幾次工作之後，介面會變成這樣。

![Code 標籤頁的工作介面。紅色編號標在：① 左邊的對話欄，② 右上方的改動內容欄（刪掉的行是紅色，新增的行是綠色），③ 右下方的檔案欄（打開了會議紀要，旁邊是資料夾列表）](../../../guide/20-claude-code/assets/shot-11-layout-marked.png)

| 編號 | 欄 | 看什麼 |
|---|---|---|
| ① | 對話 | 我發出的請求和 Claude 的說明 |
| ② | 改動內容（更改，변경 사항） | 檔案裡哪幾行被刪掉、哪幾行是新增的 |
| ③ | 檔案 | 開啟並閱讀資料夾裡的檔案 |

Code 標籤頁是一個可以**按自己的想法排列各個欄**的介面，這些欄包括對話、改動內容、瀏覽器、終端、檔案。[^arrange] 拖動欄的標題可以移動它，拖動欄的邊緣可以改變大小。[^arrange] 不需要一開始就全部開啟。需要時一個個開啟就行。

<Quiz id="ch403-layout" />

## 會話標題欄的按鈕

對話欄最上面一行聚集著按鈕。

![會話標題欄。紅色編號標在：① 開啟和關閉側邊選單（會話列表），② 會話標題，③ 會話資訊欄，④ 終端，⑤ 更改，⑥ 瀏覽器，⑦ 檔案，⑧ 更多（⋯）](../../../guide/20-claude-code/assets/shot-06-titlebar-marked.png)

| 編號 | 作用 |
|---|---|
| ① | 開啟和關閉側邊選單（會話列表） |
| ② | 會話標題。點一下可以改名 |
| ③ | 開啟和關閉會話資訊欄 |
| ④ | 終端欄 |
| ⑤ | 更改（改動內容）欄 |
| ⑥ | 瀏覽器欄 |
| ⑦ | 檔案欄 |
| ⑧ | 開啟沒有按鈕的其他欄 |

出處：按鈕名稱來自本指南的介面確認（選單欄「顯示（보기）」選單，2026-10-31），作用來自官方文件[^arrange][^sessions]

如果按鈕只有圖示、讓你搞不清，請**把滑鼠移上去看名稱**。[^arrange] 視窗太窄時，放不下的按鈕會收進 ⑧ 選單裡。[^arrange]

會話標題（②）是應用看了第一個請求後自動加上的。在本指南里，加上的是「整理會議備忘（회의 메모 정리）」。點標題可以改名。[^sessions]

① 側邊選單裡是到目前為止開啟過的會話列表。每個會話的對話和改動內容是分開儲存的。[^sessions] 把多個會話並排使用的方法，在第8章裡講。

<Quiz id="ch403-titlebar" />

## 檢視改動內容 — 需要變更記錄（Git）

在第2章建立的資料夾裡點 ⑤ 更改按鈕，會出現這樣的提示。

![更改欄。紅色編號標在：① 欄名「更改（변경 사항）」，② 提示「要檢視更改，需要 Git 倉庫（변경 사항을 보려면 Git 저장소가 필요합니다）」](../../../guide/20-claude-code/assets/shot-07-changes-need-git-marked.png)

**Git** 是記錄檔案在什麼時候、怎樣被改動的工具。更改欄會把這份記錄和現在的檔案做比較後展示出來。所以在沒有記錄的普通資料夾裡，就沒有東西可以展示。

不需要懂 Git 命令。**請 Claude 幫你開啟就行。**

```
聽說要看改動內容，需要 Git 倉庫。請在這個資料夾裡開啟變更記錄（Git），並把現有的檔案留作第一條記錄。請用簡單的話告訴我你做了什麼。
```

在本指南里，Claude 在資料夾中打開了 Git，並把5份備忘和會議紀要留作**第一條記錄**。隨後，更改欄顯示出「沒有可顯示的更改（표시할 변경 사항이 없습니다）」。意思是第一條記錄之後還沒有改動過任何東西。

接下來，試著讓它稍微改一下會議紀要。這個請求是依據覆盤備忘，給每項待辦事項加上進度狀態。

```
請在會議紀要的待辦事項表裡增加一個“狀態”列。看 inbox 裡的3份覆盤備忘，已經做完的寫“完成(日期)”，還沒做的寫“進行中”。覆盤裡沒有的事寫“需確認”，其他部分不要改。
```

![改動內容欄。紅色編號標在：① 改動的行數「+7 −7」，② 被刪除的行（紅色），③ 新增的行（綠色，有「狀態」列和「完成(10/31)」等），④ 被改動的檔案列表](../../../guide/20-claude-code/assets/shot-08-diff-marked.png)

**紅色的行是被刪除的行，綠色的行是新增的行。** `+7 −7` 的意思是新增了7行、刪除了7行。表格的一行末尾加了一列之後，Git 會把那一行算作“刪掉再重新寫的”。所以待辦事項表的7行，會各以紅色和綠色出現一次。

多虧這一欄，你可以**用眼睛確認“其他部分不要改”有沒有被遵守**。除了表格，如果沒有其他行顯示成紅色或綠色，就說明遵守了。

::: tip 請確認 Claude 自己做出判斷的部分
在本指南的練習裡，Claude 先說明了一項判斷。覆盤裡沒有單獨寫俊浩的拍照，但是帖子3次都發出去了，所以它寫成了“進行中”。它還補充說，想要嚴格一點，改成“需確認”就行。看到這樣的說明，請再確認一下這個判斷是否符合我的標準。如果和標準不同，用一句話請它改一下就行。
:::

::: warning Git 記錄裡留下的名字
Git 會在每條記錄裡一併留下**這臺電腦的 Git 設定裡寫的姓名和郵箱**。如果是公司電腦，可能會放進公司賬號。在把記錄介面給別人看，或把資料夾上傳之前，請先確認。如果電腦上沒有 Git，請到官方網站（git-scm.com）安裝。[^git]
:::

更改欄也可以用快捷鍵 **Cmd+Shift+D** 開啟和關閉。[^keys]

<Quiz id="ch403-changes" />

## 會話資訊欄

點 ③ 按鈕，對話旁邊會開啟**會話資訊欄**。它用卡片展示這個會話在哪裡執行、改了什麼、用掉了多少上下文。[^rail]

![會話資訊欄。紅色編號標在：① 環境（這臺電腦 · 整理工具 · main），② 上下文 12%，③ 成果（會議紀要檔案），④ 更改（+7 −7 和「提交更改（변경 사항 커밋）」按鈕）](../../../guide/20-claude-code/assets/shot-09-rail-marked.png)

| 編號 | 卡片 | 看什麼 |
|---|---|---|
| ① | 環境 | 在哪裡（這臺電腦）、在哪個資料夾裡工作 |
| ② | 上下文 | 這個會話能記住的量裡，已經用了多少 |
| ③ | 成果 | 這個會話裡生成的檔案 |
| ④ | 更改 | 改動的行數。點數字會開啟改動內容欄 |

出處：卡片名稱來自本指南的介面確認（2026-10-31），作用來自官方文件[^rail][^diff]

**上下文**（Context）就是你在第1階段學到的“AI 一次能看到的量”（[第1階段第1章](../00-common/01-what-is-llm.md#_3-一次能看的量有限——-上下文視窗)）。裝滿之後，Claude 會**自動把到目前為止的對話做成摘要，然後接著工作。**[^context] 本指南建議這樣做：與其把新工作接在數字已經漲得很高的會話後面，不如在新會話裡開始新工作，這樣更清爽。

④ 的「提交更改（변경 사항 커밋）」是把改動的內容作為新記錄留在 Git 裡的按鈕。記錄和撤銷，在[第4章](04-permissions-undo.md)裡講。

<Quiz id="ch403-rail" />

## 檔案欄 — 開啟看看生成的檔案

點 ⑦ 檔案按鈕，檔案欄會連同資料夾列表一起開啟。在列表裡點檔案，就能看到內容。

![檔案欄。紅色編號標在：① 右邊的資料夾列表（.claude、inbox、notes 以及其中的會議紀要），② 左邊開啟的會議紀要](../../../guide/20-claude-code/assets/shot-10-files-marked.png)

- 點對話裡出現的**檔案路徑**，也會開啟那個檔案。[^files]
- 如果是在這臺電腦上進行的會話，**也可以在檔案欄裡直接修改。** 修改的內容會自動儲存。[^files]
- 列表裡可能會看到 `.claude` 資料夾。這是 Claude Code 放這個資料夾專用設定的地方，在第6章裡講。

Claude 生成的檔案，**不用開啟 Finder 或資源管理器，在應用裡就能直接確認**。在第2章裡和原始備忘對照的事，現在在一個介面裡就能完成。

<Quiz id="ch403-files" />

## 終端、瀏覽器欄和快捷鍵

剩下的兩個欄，只簡單瞭解一下。

- **終端**（④）：直接輸入命令並執行的欄。它在和 Claude 相同的資料夾裡開啟。[^terminal] 這個階段可以不用。終端在第10章裡講。
- **瀏覽器**（⑥）：在應用裡開啟網頁的欄。[^arrange]

常用快捷鍵（macOS）如下。[^keys]

| 快捷鍵 | 作用 |
|---|---|
| Cmd+Shift+D | 開啟和關閉更改欄 |
| Ctrl+\` | 開啟和關閉終端欄 |
| Cmd+Shift+B | 開啟和關閉瀏覽器欄 |
| Cmd+\\ | 關閉當前使用的欄 |
| Esc | 停止 Claude 的回應 |
| Cmd+Shift+M | 開啟許可權模式選單 |

出處：Claude Code 官方文件[^keys]

## 親自試一試

1. 在第2章的會話（或用整理工具資料夾開啟的新會話）裡，點一下 ⑤ 更改按鈕。如果彈出需要 Git 的提示，就用上面的請求讓 Claude 幫你開啟。
2. 傳送給會議紀要加“狀態”列的請求，在更改欄裡確認**除了表格，其他行有沒有被改動**。
3. 開啟 ③ 會話資訊欄，看上下文數字和改動的行數。
4. 在 ⑦ 檔案欄裡開啟會議紀要，確認狀態列和覆盤備忘是否一致（燈泡、文案、成本是完成，Instagram 是進行中）。

**連續任務**：把本指南的結果（[3장-회의록-상태칸.txt](/practice/notes/results/3장-회의록-상태칸.txt)）和我的結果比一比。表格的樣子即使不同，只要狀態值和覆盤一致，就算做得好。

## 小結

- Code 標籤頁在對話旁邊開啟改動內容、檔案、終端、瀏覽器欄。透過會話標題欄的按鈕開啟。
- 要檢視改動內容，資料夾裡必須有 Git（變更記錄）。請 Claude 幫你開啟就行。
- 紅色的行是刪掉的行，綠色的行是新行。“其他部分不要改”有沒有被遵守，在這裡確認。
- 在會話資訊欄裡檢視環境、上下文、成果、改動的行數。上下文裝滿後，會自動做摘要並繼續。
- 在檔案欄裡，可以直接開啟生成的檔案進行確認和修改。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Pane | 窗格（欄） | 在 Code 標籤頁裡開啟的一個視窗。對話、改動內容、檔案等 |
| Diff | 差異（改動內容） | 按行比較修改前和修改後的結果 |
| Git | Git | 記錄檔案在什麼時候、怎樣被改動的工具 |
| Commit | 提交 | 在 Git 裡把現在的狀態留下一條記錄 |
| Context | 上下文 | 在一個會話裡，Claude 一次能記住的量 |
| Session rail | 會話資訊欄 | 展示環境、上下文、成果、改動行數的欄 |

<ChapterDone :chapter="403" />

下一章：[第4章. 允許與撤銷](04-permissions-undo.md)

[^arrange]: Claude Code 官方文件，「Desktop application」。"The Code tab is built around panes you can arrange in any layout: chat, diff, browser, terminal, file, plan, tasks, and subagent" / "Drag a pane by its header to reposition it, or drag a pane edge to resize it." / "To open another pane, click its icon button in the session's title bar. Hover to see each button's name, such as Terminal, Changes for the diff view, Browser, and Files." / "When the window is narrow: buttons that don't fit move into the menu" https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^sessions]: Claude Code 官方文件，「Desktop application」。"Each session is an independent conversation with its own context and changes." / "To rename a session, open it and click the session title in the title bar." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^rail]: Claude Code 官方文件，「Desktop application」。"The session details panel is a set of cards beside the chat that show where the session runs, what it changed, what it's running, and its context usage." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^diff]: Claude Code 官方文件，「Desktop application」。"To open the diff view, click the line counts, such as +12 -1, in the Changes card of the session details panel." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^context]: Claude Code 官方文件，「Desktop application」。"When context fills up, Claude automatically summarizes the conversation and continues working." https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^files]: Claude Code 官方文件，「Desktop application」。"To open a file Claude mentions, click its path in the chat." / "Local sessions: you can edit files inside the session's working directory" / "By default, your edits in the file pane save on their own" https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^terminal]: Claude Code 官方文件，「Desktop application」。"The terminal opens in your session's working directory and shares the same environment as Claude" https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^keys]: Claude Code 官方文件，「Desktop application」快捷鍵表。"Toggle diff pane" / "Toggle Browser pane" / "Toggle terminal pane" / "Close focused pane" / "Stop Claude's response" / "Open permission mode menu" https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
[^git]: Claude Code 官方文件，「Desktop application」故障排除。"install Git" — 官方文件在需要 Git 的功能（worktree）處指引安裝 Git。更改欄要求有 Git 倉庫一事，來自本指南的介面確認（2026-10-31）。https://code.claude.com/docs/en/desktop（確認日期 2026-10-31）
