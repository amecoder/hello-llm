# 第4章 許可與撤銷——許可權模式、回退、Git 記錄

> **一句話總結**：用**許可權模式**來決定 Claude 不用問就能做的事的範圍。結果不滿意，就用**回退**（`/rewind`）退回到上一個請求之前。
> 但回退也有撤不回的東西。所以，重要的狀態要用 **Git 記錄（提交）** 再留一份。

這一章依據 2026年10月31日確認的 Claude Code 官方文件，以及 macOS 桌面應用（韓文介面，付費賬號）寫成。直接使用第3章為止用的**整理工具（정리도구）**資料夾（已開啟 Git）。

## 選擇許可權模式

點輸入框下面一行右側的模式名稱（本指南的畫面裡是「手動（수동）」），就會開啟許可權模式選單。快捷鍵是 **Cmd+Shift+M**。[^keys]

![許可權模式選單。① 自動，② 手動（有勾選標記），③ 自動接受編輯，④ 計劃，⑤ 繞過許可權（灰色的「在 Claude Code 設定中啟用」），⑥ 輸入框下面一行的模式按鈕上標有紅色編號](../../../guide/20-claude-code/assets/shot-12-modes-marked.png)

| 編號 | 畫面名稱 | 官方文件名稱 | Claude 不用問就做的事 |
|---|---|---|---|
| ② | 手動（수동） | Manual | 沒有（修改或執行之前每次都問） |
| ③ | 自動接受編輯（편집 자동 수락） | Accept edits | 在資料夾裡新建、修改檔案，以及基本的檔案命令 |
| ④ | 計劃（계획） | Plan | 只讀取和檢視（不修改檔案，只給出計劃） |
| ① | 自動（자동） | Auto | 大部分（由檢查器在後臺核對是否符合請求） |
| ⑤ | 繞過許可權（권한 무시） | Bypass permissions | 幾乎全部（要在設定裡開啟才會出現） |

來源：畫面名稱取自本指南的畫面確認（2026-10-31），行為取自官方文件[^modes]

每種模式，都是在**便利和我盯著看的程度之間做取捨。**[^tradeoff]

**一開始請從「手動」開始。** 一邊看 Claude 要做什麼，一邊逐步熟悉，會更讓人放心。它做的事靠得住了，可以換到「自動接受編輯」。事情大的時候，最好先用「計劃」拿到方法（第5章）。[^plan-tip]

- 在選單裡選的模式，**按資料夾分別記住。** 不過「計劃」只適用於當前會話。[^remember]
- 以前的畫面裡，模式名稱是 Ask permissions、Auto accept edits、Plan mode。[^old-names]

<Quiz id="ch404-modes" />

## 為什麼要小心「自動接受編輯」「自動」「繞過許可權」

**自動接受編輯**不只是修改檔案，連**刪除檔案的命令**（`rm`）也不問就執行。不過只限於工作資料夾裡。[^accept] 第2章說"要選一個小的練習資料夾"，原因就在這裡。資料夾小，失誤能波及的範圍也小。不過，整條刪除危險路徑的命令（例：`rm -rf ~`，刪除整個主資料夾），在任何模式下都不會被自動允許。[^critical]

**自動**能大幅減少詢問，但官方文件把話說得很死：自動模式只是減少許可視窗，**並不保證安全。**[^auto] 請把它用在大方向可以信任的事情上，不要在敏感的事情上，用它來代替檢查。[^auto]

**繞過許可權**在選單裡是灰色的，要在設定裡另外開啟才會出現。[^modes] 官方文件要求，這個模式**只在隔離的容器或虛擬機器裡**使用。[^modes] 普通使用者不需要開啟它。

::: details 明明是「手動」，卻不彈出許可視窗時
就像第2章看到的，如果在終端版 Claude Code 裡設定過允許規則，應用裡也會套用那些設定。[^same-settings] 本指南的截圖也是在這樣的電腦上拍的，所以沒有出現許可視窗。在會彈出許可視窗的畫面裡，會顯示將要改變什麼，每次改變時都可以選擇允許或拒絕。[^modes]
:::

<Quiz id="ch404-auto" />

## 回退——退回到上一個請求之前

Claude Code **每次在我發出請求時，都會自動儲存那之前的狀態。** 這叫作**檢查點**（Checkpoint）。[^checkpoint] 就像遊戲裡的存檔點，結果不滿意，就可以回到那個點。

我們來實際操作。在一個新會話裡，請它整理學習筆記。

```
把 inbox 裡的學習筆記整理成學習筆記文件。分成核心內容 / 生詞解釋 / 要提的問題 / 要試的事 四個部分，作為新檔案儲存在 notes 資料夾裡。不要修改原始備忘。
```

學習筆記做好了（結果：[4장-공부노트-2026-10-28.txt](/practice/notes/results/4장-공부노트-2026-10-28.txt)）。我們來把這份筆記退回到沒發生過的狀態。

1. 在輸入框裡輸入 `/rewind` 。出現"將會話回退到之前的訊息（세션을 이전 메시지로 되돌리기）"這條提示時，按 **Enter**，再按一次 **Enter** 執行。
2. 在**回退**窗口裡，會以列表形式顯示我發出過的請求。點一下想退回到的那個請求。

![回退視窗。在"將會話恢復到之前的訊息（세션을 이전 메시지로 복원합니다）"下面，① 我發出的請求列表上標有紅色編號](../../../guide/20-claude-code/assets/shot-13-rewind-marked.png)

3. 在確認窗口裡選擇**要撤銷什麼**，然後點**回退**。

![回退確認視窗。① 恢復「程式碼和對話（코드와 대화）」，②「1 個檔案 · +0 −35」，③「透過 shell 命令所做的更改不會被撤銷。提交會原樣保留。（셸 명령으로 적용된 변경 사항은 되돌려지지 않습니다. 커밋은 그대로 유지됩니다.）」，④「回退」按鈕上標有紅色編號](../../../guide/20-claude-code/assets/shot-14-rewind-confirm-marked.png)

② 裡的 `+0 −35`，意思是一回退，**就會消失 35 行**。在這次練習裡，是新建的學習筆記的 35 行。點之前，請用這個數字確認會改變什麼。

① 的恢復列表裡有三項。

![恢復選項。① 「程式碼和對話」（已勾選）、「僅對話（대화만）」、「僅程式碼（코드만）」列表上標有紅色編號](../../../guide/20-claude-code/assets/shot-15-restore-options-marked.png)

| 畫面名稱 | 做什麼 |
|---|---|
| 程式碼和對話（코드와 대화） | 檔案和對話都回到那個時間點 |
| 僅對話（대화만） | 只有對話回到那個時間點，檔案保持現在的樣子 |
| 僅程式碼（코드만） | 只有檔案回到那個時間點，對話保持現在的樣子 |

來源：畫面名稱取自本指南的畫面確認（2026-10-31），行為取自官方文件[^restore]

用「程式碼和對話」回退之後，學習筆記檔案消失了，對話也空了。回退掉的請求**又回到了輸入框裡**，所以可以修改後重新發送。[^restore-prompt]

![回退之後的畫面。① 「還沒有訊息（아직 메시지가 없습니다）」，② 輸入框裡又出現了被回退的請求，③ 會話資訊欄裡成果物、更改事項卡片消失，這幾處標有紅色編號](../../../guide/20-claude-code/assets/shot-16-after-rewind-marked.png)

這些時候用起來不錯。

- 不喜歡整理的格式，想**修改請求再來一遍**時 → 「程式碼和對話」
- 檔案很好，但**對話莫名其妙變得很長**時 → 「僅對話」
- 想保留對話裡的說明，**只把檔案恢復原樣**時 → 「僅程式碼」

<Quiz id="ch404-rewind" />

## 回退撤不回的東西

回退不是萬能的。確認窗口裡 ③ 的那句話，就說明了它的侷限。

- **用命令（shell）改的檔案**：Claude 不是用檔案編輯工具，而是隻靠執行命令改的檔案，不會被追蹤。[^limits-bash]
- **我親自修改的檔案、其他會話修改的檔案**：通常不追蹤。只追蹤當前會話裡修改過的檔案。[^limits-external]
- **提交**：Git 記錄會原樣保留（確認窗口裡的文字）。
- **過舊的檢查點**：每個會話最多保留最近 100 個檢查點，預設約 30 天後清理。[^retention]

官方文件在這種情況下，建議**用 Git 之類的版本管理來恢復**。[^limits-bash] 所以下一節的 Git 記錄，是第二道安全網。

<Quiz id="ch404-limits" />

## Git 記錄——第二道安全網

第3章裡，我們給資料夾開啟了 Git。對結果滿意時，請把那個狀態用**提交**（一條記錄）留下來。這樣，即使回退回不去的情況下，也能回到那條記錄。

會話資訊欄的更改事項卡片上，有一個**「提交更改（변경 사항 커밋）」**按鈕（第3章）。在本指南里點了一下，應用替我向 Claude 發出了"請把現在改動的內容提交"的請求，Claude 就留下了提交。用嘴說著拜託它也可以。

```
把現在改動的內容提交。記錄的名稱用韓文寫，要讓人看得出改了什麼。
```

以後想回到那條記錄時，這樣拜託。

```
先給我看自上次提交以來改動了哪些檔案。我確認之後，再恢復到那個提交的狀態。
```

**恢復之前，請先讓它給你看"會消失什麼"。** 提交之後做的事，用 Git 恢復時可能會消失。多加一步確認，就能減少誤刪。

| | 回退（檢查點） | Git 記錄（提交） |
|---|---|---|
| 什麼時候儲存 | 每次發出請求時自動儲存 | 我（或 Claude）留下時 |
| 撤銷什麼 | 在這個會話中 Claude 編輯的檔案和對話 | 已提交的檔案 |
| 能保留多久 | 最近 100 個，約 30 天 | 直到刪除記錄為止 |

來源：官方文件[^checkpoint][^retention]，Git 一欄是本指南的整理

<Quiz id="ch404-git" />

## 動手試試

1. 點輸入框下面一行的模式按鈕，開啟許可權模式選單，讀讀五種模式的說明。現在先保持「手動」。
2. 發出整理學習筆記的請求，把做好的筆記和原始筆記對一對（5 個要領、生詞、1 個問題、1 件要試的事）。在本指南里，Claude 連回顧備忘也讀了，並填上了"要試的事：已試過（10/30）"。對於用了沒有被要求的檔案作依據的地方，要另外確認那個依據對不對。
3. 用 `/rewind` 回退到那個請求之前。先確認確認窗口裡的 `+0 −N` 數字。
4. 在回到輸入框的請求裡改一個格式（例："生詞解釋用表格"），再發送一次。
5. 出現滿意的結果，就用「提交更改」留下記錄。

**連續任務**：把第2章的會議紀要和第4章的學習筆記並排放在一起，用三行寫下想讓兩份文件共用的規則（日期寫法、待辦事項表格的樣子等）。在第6章裡，會把這些規則儲存到 CLAUDE.md 裡。

## 總結

- 許可權模式有手動、自動接受編輯、計劃、自動、繞過許可權。一開始從手動開始。
- 自動接受編輯，連資料夾裡刪除檔案的命令都不問。自動不保證安全。繞過許可權只在隔離的環境裡使用。
- 每個請求都會儲存檢查點。用 `/rewind` 在程式碼和對話、僅對話、僅程式碼裡選一種回退。
- 回退通常不會撤銷只靠命令改動的檔案、我親自修改的檔案和提交。
- 好的狀態用提交留下，做成第二道安全網。恢復之前，先確認會消失什麼。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Permission mode | 許可權模式 | Claude 不用問也可以做的事的範圍 |
| Accept edits | 自動接受編輯 | 資料夾裡的檔案編輯和基本檔案命令不用問的模式 |
| Plan mode | 計劃模式 | 不修改，看過之後只給出計劃的模式 |
| Checkpoint | 檢查點 | 每次發出請求時自動留下的存檔點 |
| Rewind | 回退 | 回到檢查點的功能 |
| Commit | 提交 | 在 Git 裡把現在的狀態作為一條記錄留下來 |

<ChapterDone :chapter="404" />

下一章：[第5章. 怎樣交代得好](05-delegate-well.md)

[^keys]: Claude Code 官方文件，「Desktop application」 快捷鍵表。 "Open permission mode menu" https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^modes]: Claude Code 官方文件，「Desktop application」。 "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "Claude auto-accepts file edits and common filesystem commands like mkdir, touch, and mv, but still asks before running other terminal commands." / "Claude reads files and runs commands to explore, then proposes a plan without editing your source code." / "Claude runs without routine prompts; before actions such as shell commands and network requests run, a background classifier checks that they align with your request." / "On Pro, Max, and Ultra plans, enable "Allow bypass permissions mode" in Settings > Code or Settings > Claude Code." / "Only use this in sandboxed containers or VMs." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^tradeoff]: Claude Code 官方文件，「Choose a permission mode」。 "Each mode makes a different tradeoff between convenience and oversight." https://code.claude.com/docs/en/permission-modes （確認日期 2026-10-31）
[^plan-tip]: Claude Code 官方文件，「Desktop application」。 "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^remember]: Claude Code 官方文件，「Desktop application」。 "A mode you pick in the selector is remembered per folder and takes precedence over defaultMode for that folder, except Plan, which applies to the current session only." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^old-names]: Claude Code 官方文件，「Desktop application」。 "Earlier versions of the Code tab labeled these modes Ask permissions, Auto accept edits, and Plan mode." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^accept]: Claude Code 官方文件，「Choose a permission mode」。 "acceptEdits mode auto-approves common filesystem Bash commands: mkdir, touch, rm, rmdir, mv, cp, and sed." / "Like file edits, auto-approval applies only to paths inside your working directory or additionalDirectories." https://code.claude.com/docs/en/permission-modes （確認日期 2026-10-31）
[^auto]: Claude Code 官方文件，「Choose a permission mode」。 "Auto mode reduces permission prompts but does not guarantee safety. Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." https://code.claude.com/docs/en/permission-modes （確認日期 2026-10-31）
[^same-settings]: Claude Code 官方文件，「Desktop application」。 "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop （確認日期 2026-10-31）
[^checkpoint]: Claude Code 官方文件，「Checkpointing」。 "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." / "Every prompt you send that starts a turn creates a new checkpoint" https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^restore]: Claude Code 官方文件，「Checkpointing」。 "Restore code and conversation: revert both code and conversation to that point" / "Restore conversation: rewind to that message while keeping current code" / "Restore code: revert file changes while keeping the conversation" https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^restore-prompt]: Claude Code 官方文件，「Checkpointing」。 "After restoring the conversation or choosing Summarize from here, the original prompt from the selected message is restored into the input field so you can re-send or edit it." https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^limits-bash]: Claude Code 官方文件，「Checkpointing」。 "A file that only Bash commands changed isn't tracked and stays as it is. To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^limits-external]: Claude Code 官方文件，「Checkpointing」。 "Checkpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^retention]: Claude Code 官方文件，「Checkpointing」。 "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." / "by default about 30 days after the session last saved one" https://code.claude.com/docs/en/checkpointing （確認日期 2026-10-31）
[^critical]: Claude Code 官方文件，「Choose a permission mode」。 "Claude Code doesn't auto-approve the following in any mode, including bypassPermissions" / "Recognized rm and rmdir critical-path removals, which no allow rule or PreToolUse hook "allow" approves" https://code.claude.com/docs/en/permission-modes （確認日期 2026-10-31）

