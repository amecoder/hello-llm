# 第4章 許可權與撤銷 — 交出什麼，怎樣撤銷

> **一句話總結**：在輸入框下面的**許可權選單**裡，決定哪些事 Codex 自己做、哪些事要先問你。剛開始請用 **Ask for approval**。
> 撤銷要靠 **Git**。像 Claude Code 的回退這樣的功能，我在官方文件裡沒有找到。所以在交辦工作的前後留下記錄（提交）的習慣，就更加重要。

這一章依據2026年11月1日確認的 Codex 官方文件和本指南的實踐編寫。許可權為什麼必要，已在 [Claude Code 第4章](../20-claude-code/04-permissions-undo.md)裡講過。

## 三種許可權選單

許可權選單在**輸入框下面**。[^menu] 在本指南的介面上，一開始選中的就是 **Ask for approval**。是不是所有賬號的初始值都一樣，沒有確認到。選單裡可能會出現這些名稱。[^names]

| 介面上的名稱 | 作用 | 什麼時候用 |
|---|---|---|
| Ask for approval | 在資料夾裡自己做，要走出去之前先問 | 大部分工作 |
| Approve for me | 不問你，改由自動稽核來判斷 | 熟悉之後 |
| Full access | 不受限制地執行 | 幾乎不用 |

出處：Codex 官方文件（只摘取了一部分）[^names]

官方文件建議**大部分工作從 Ask for approval 開始**。[^start] 它比 Claude Code 的「手動（수동）」多交出去了一步（本指南的對比）。資料夾**裡面**的檔案，不用問就會修改。

選了 **Approve for me**，Codex 能做的範圍也不會擴大。改變的只有“由誰來批准”。[^same-box] 自動稽核會多呼叫一次模型，所以用量可能增加。[^extra]

**Full access** 會去掉檔案和網際網路的所有邊界。官方文件也說，只有真的想全部交出去時才用。[^full] 整理備忘不需要它。

選單裡看得到，不等於已經選中了。每個對話都請確認一下**現在選中的是什麼**。[^check]

<Quiz id="ch504-modes" />

## 圍欄與批准

許可權靠兩個裝置運作。[^two]

- **圍欄**（沙箱，Sandbox）：能碰哪些檔案和網際網路
- **批准**（Approval）：什麼時候停下來問

在預設狀態下，Codex 是在**網際網路關閉**的情況下工作，圍欄通常到工作資料夾為止。[^default] 要修改資料夾外的檔案，或連線網際網路，就需要批准。[^auto]

也有**即使在資料夾裡也受保護的地方**。工作資料夾裡的 `.git`、`.agents`、`.codex` 資料夾，在預設狀態下只能讀取。[^protected] `.git` 是存放 Git 記錄的地方，所以如果你在對話裡讓 Codex “幫我記錄”，它可能會來問批准，或被攔住。第5章裡要放技能的 `.agents` 資料夾也屬於這裡。

在本指南里就真的被攔住了。我請它在終端裡把技能複製到 `.agents/skills`，Codex 回答說“`.agents` 路徑是隻讀的，所以複製被攔截了”，並告訴了我兩行要自己輸入的命令。它把被攔住的原因和替代辦法一起告訴我，我就能判斷該批准什麼。

<Quiz id="ch504-sandbox" />

## 檢視改動內容

Codex 在**審查窗格**（review pane）裡展示改動內容。它相當於 Claude Code 的「更改（변경 사항）」欄。審查窗格也只在 Git 倉庫裡才會開啟。[^review-git]

審查窗格里**不只有 Codex 改的內容。** 我自己改的、還沒記錄的其他改動，全部都會顯示出來。[^includes] 所以在交辦工作之前，先把到目前為止的改動記錄下來（提交），審查窗格里就只剩下 Codex 的改動，看起來更方便。

在審查窗格上方可以選擇檢視範圍。預設是還沒有記錄的改動（**Unstaged**），選 **Last turn**，則只看 Codex 最近一次回答裡改動的內容。[^views] 剛開始，Last turn 更容易理解。

如果有不滿意的行，可以在那一行寫意見。把滑鼠移到那一行，點 **+**，寫下意見，然後在輸入框裡傳送像“按行上的意見修改”這樣的話就行。[^comments]

<Quiz id="ch504-review" />

## 撤銷 — 用 Git

在審查窗格里可以直接撤銷。[^revert]

| 單位 | 在哪裡 |
|---|---|
| 全部 | 審查窗格上方的 Revert all |
| 一個檔案 | 那個檔案的撤銷（revert） |
| 一個塊 | 那個塊（hunk）的撤銷 |

出處：Codex 官方文件（只摘取了一部分）[^revert]

**請小心 Revert all。** 審查窗格里也包含了我改的內容，全部撤銷的話，我的改動也可能消失。[^includes] 只想丟棄一部分時，請按檔案或塊為單位撤銷。

Claude Code 裡有把對話向前回退的功能（[Claude Code 第4章](../20-claude-code/04-permissions-undo.md)）。**在 Codex 官方文件裡沒有找到同樣的功能。** 官方文件的做法是，**在工作前後留下 Git 記錄**。[^checkpoint] 經常記錄的話，就可以一點一點地撤銷。[^often]

所以在這個階段，把下面的順序養成習慣。

1. 交辦之前：用應用的 Git 功能（提交）把現在的狀態記錄下來。[^commit]
2. 交辦。
3. 在審查窗格里用 Last turn 只看改動的部分。
4. 滿意就再記錄一次，不滿意就撤銷。

用對話請它“幫我記錄”也可以，但正如前面看到的，`.git` 是受保護的資料夾，所以它可能會來問批准。如果它來問，請確認這是不是“只留下 Git 記錄的事”，再批准。

大的工作，請在修改之前先拿到計劃。在輸入框裡輸入 `/plan`，Codex 會先調查並提出方法。[^plan] 它和 Claude Code 第5章的「計劃」模式作用相同。

<Quiz id="ch504-undo" />

## 親自試一試

1. 開啟輸入框下面的許可權選單，看看選中的是什麼。如果不是 Ask for approval，就改過來。
2. 用應用的 Git 功能（或在對話裡請它做，然後批准），記錄現在的狀態。
3. 對第2章的會議紀要，請它“在最上面加一行‘撰寫日期：今天的日期’”。
4. 在審查窗格里用 Last turn 檢視，確認改動的行。
5. 只把那個檔案撤銷試試。

**連續任務**：在第5章裡，會把在 Claude Code 裡做的3個技能搬到 Codex 上，並用 `$weekly-review` 一行做出周覆盤。

## 小結

- 許可權選單在輸入框下面。剛開始用 Ask for approval。
- Approve for me 只改變批准的主體。範圍不會擴大。
- 預設是網際網路關閉，圍欄是工作資料夾。`.git`、`.agents`、`.codex` 即使在資料夾裡也受保護。
- 審查窗格也會顯示我的改動。交辦之前先記錄，再用 Last turn 檢視。
- 不用回退，而是用 Git 撤銷。在交辦前後留下記錄。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Sandbox | 沙箱 | 限制 Codex 能碰的範圍的圍欄 |
| Approval | 批准 | 越過圍欄之前要得到的許可 |
| Review pane | 審查窗格 | 展示改動內容的視窗 |
| Revert | 撤銷（還原） | 把改動的內容恢復原狀 |
| Commit | 提交 | 把現在的狀態記錄到 Git |

<ChapterDone :chapter="504" />

下一章：[第5章. 搬運技能](05-skills.md)

[^menu]: Codex 官方文件，「Permissions」。"Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes（確認日期 2026-11-01）
[^names]: Codex 官方文件，「Sandbox」。"Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing（確認日期 2026-11-01）
[^start]: Codex 官方文件，「Permissions」。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes（確認日期 2026-11-01）
[^same-box]: Codex 官方文件，「Permissions」。"Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes（確認日期 2026-11-01）
[^extra]: Codex 官方文件，「Agent approvals & security」。"Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security（確認日期 2026-11-01）
[^full]: Codex 官方文件，「Sandbox」。"This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing（確認日期 2026-11-01）
[^check]: Codex 官方文件，「Permissions」。"Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes（確認日期 2026-11-01）
[^two]: Codex 官方文件，「Permissions」。"The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes（確認日期 2026-11-01）
[^default]: Codex 官方文件，「Agent approvals & security」。"By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security（確認日期 2026-11-01）
[^auto]: Codex 官方文件，「Agent approvals & security」。"Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security（確認日期 2026-11-01）
[^protected]: Codex 官方文件，「Agent approvals & security」。"`<writable_root>/.git` is protected as read-only whether it appears as a directory or file." / "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "`<writable_root>/.codex` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security（確認日期 2026-11-01）
[^review-git]: Codex 官方文件，「Code review」。"The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^includes]: Codex 官方文件，「Code review」。"It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^views]: Codex 官方文件，「Code review」。"By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^comments]: Codex 官方文件，「Code review」。"Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^revert]: Codex 官方文件，「Code review」。"**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review（確認日期 2026-11-01）
[^checkpoint]: Codex 官方文件，「Codex CLI」。"Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli（確認日期 2026-11-01）
[^often]: Codex 官方文件，「Agent approvals & security」。"Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security（確認日期 2026-11-01）
[^plan]: Codex 官方文件，「Prompting」。"For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting（確認日期 2026-11-01）
[^commit]: Codex 官方文件，「Local environments」。"You can stage or revert individual chunks, stage or revert entire files, commit changes, push a branch, and create a pull request without leaving the app." https://learn.chatgpt.com/docs/environments/local-environment（確認日期 2026-11-01）
