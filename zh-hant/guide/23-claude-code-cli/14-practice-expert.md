# 第14章 實踐任務與像專家一樣使用

<Badge type="tip" text="必讀" /> 要跟著這個階段學下去，請一定讀一讀。

> **一句話總結**：這是把到目前為止學過的東西**親手再做一遍**的 8 個任務。最後一個任務是用**你自己的筆記**做出每週整理。

本章以 2026年11月6日為準。任務的結果每次執行都會有些不同。

專家不是用很多功能的人。而是從小處開始、給出確認標準、只在需要時才加規則的人。

## 怎麼做實踐任務

1. **新建一個練習資料夾。** 例如：`~/hello-ai-연습/다시`（hello-ai 練習/重來）。`inbox` 裡只放每週例會的筆記一份。臨時會議的筆記在任務 7 再放進去。
2. **按任務的「動手試試」來做。** 複製灰色框裡的文字來用就行。
3. **把「確認做好了沒有」逐項勾選。** 如果有沒做到的項，就到「回頭再看」裡的那一章，只把那一部分重做一遍。

Mac 和 Linux 在終端裡這樣輸入。筆記從之前用的練習資料夾裡複製過來。

```bash
mkdir -p ~/hello-ai-연습/다시/inbox
cd ~/hello-ai-연습/다시
cp ../터미널/inbox/회의-2026-10-27-주간회의.txt inbox/
```

Windows PowerShell 這樣輸入。本章的 Windows 命令沒有實際執行過。

```powershell
mkdir $HOME\hello-ai-연습\다시\inbox
cd $HOME\hello-ai-연습\다시
cp ..\터미널\inbox\회의-2026-10-27-주간회의.txt inbox\
```

任務 1~7 按順序做。後面的任務會用到前面任務的結果。**任務 8 放在最後**做。

不需要一開始就全部做完。一天做兩三個任務就夠了。結果的樣子就算和本指南不一樣，只要檢查表全部勾上，就是做好了。

要遵守的有三條。

- **一開始用 `claude --permission-mode manual` 啟動。** 一項一項看它要做什麼，邊看邊熟悉。
- **只在練習資料夾裡做。** 不要用裝著你全部文件的資料夾。
- **任務 8 裡你自己的筆記，要先刪掉個人資訊**再放進去。

<Quiz id="ch814-how" />

## 任務

### 任務 1. 交給它第一次整理

**適用情況**：想把亂糟糟的筆記變成會議記錄時。

**動手試試**：在練習資料夾裡用 `claude --permission-mode manual` 啟動，然後傳送下面的請求。信任確認視窗的預設選項是 `No, exit`。用向下方向鍵選 `Yes, I trust this folder`。

```text
讀一下 inbox/회의-2026-10-27-주간회의.txt，整理成 회의록.md。分成決定事項、待辦（負責人·期限）、下次會議，筆記裡沒有的內容不要寫。
```

**確認做好了沒有**

- ☐ 讀了許可視窗的內容後選了 `Yes`
- ☐ 每條待辦都有負責人和期限
- ☐ 原始筆記保持原樣

**回頭再看**：[第4章](04-first-session.md)

### 任務 2. 起名字並繼續

**適用情況**：想讓需要幾天才能做完的事，下次能找到並接著做時。

**動手試試**：用 `/rename 週會-整理` 起個名字，再用 `/exit` 退出。然後用 `claude -r` 找到並開啟那個會話。

**確認做好了沒有**

- ☐ 在列表裡按名字找到了會話
- ☐ 接著開啟的會話記得剛才的對話
- ☐ 用 `/context` 看了上下文佔了多少

**回頭再看**：[第6章](06-sessions-context.md)

### 任務 3. 許可與回退

**適用情況**：想看看 Claude 改了什麼，必要時把它改回去時。

**動手試試**：按下面的順序做。

1. 看最下面一行。從列表裡選的會話，可能會和新啟動的會話一樣以自動模式開始。如果是 `auto mode on`，按一次 `Shift + Tab` 換成 `manual mode on`。
2. 傳送下面的請求，在許可視窗裡讀一讀要改的行。
3. 做完後，在輸入框為空的狀態下按兩次 Esc，打開回退選單。
4. 點 `Restore code and conversation` 恢復。這是練習資料夾，放心試吧。本指南也點到了這一步，確認了檔案會恢復回來。
5. 恢復後，傳送過的請求會回到輸入框裡。按兩次 Esc 清掉，再進入下一個任務。

```text
在 회의록.md 的待辦表裡加一欄"狀態"，全部寫成"進行中"。別的部分不要改。
```

**確認做好了沒有**

- ☐ 先在許可視窗裡讀了要改的行
- ☐ 讀了回退選單裡的警告句子
- ☐ 能說出一樣回退恢復不了的東西

**回頭再看**：[第7章](07-permissions-undo.md)

### 任務 4. 製作規則和技能

**適用情況**：同樣的規則和步驟總是一遍遍重複說時。

**動手試試**：把會議記錄的規則用 3~5 行寫進 CLAUDE.md。然後製作技能 `meeting-notes`，在**新會話**裡不說規則、直接呼叫它。參考樣例：[CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) · [技能](/practice/cli/results/9장-스킬-meeting-notes.txt)

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

**確認做好了沒有**

- ☐ 輸入 `/` 時，列表裡能看到 `meeting-notes`
- ☐ 新會話的結果遵守了規則
- ☐ 檔案生成在了 `notes` 資料夾裡

**回頭再看**：[第8章](08-memory-settings.md)、[第9章](09-skills-extensions.md)

### 任務 5. 用一行命令執行

**適用情況**：不想開啟對話就把整理做完時。

**動手試試**：執行之前，先在會話裡看一下 `/usage`。然後用 `/exit` 退出，在終端裡做。用[第10章](10-headless-automation.md)的貼上框做出 `주간정리.sh`（每週整理），再用 `bash 주간정리.sh` 執行。Windows 貼上第10章的 PowerShell 框。

**確認做好了沒有**

- ☐ 不用人回答也一直執行到了最後
- ☐ 每份筆記都顯示了 `完成：` 或 `失敗：`
- ☐ 比較了執行前後的 `/usage`

**回頭再看**：[第10章](10-headless-automation.md)、[第13章](13-cost-safety-trouble.md)

### 任務 6. 鉤子和 Git 記錄

**適用情況**：想留下檔案被改動的痕跡，並把當前狀態儲存下來時。

**動手試試**：按下面的順序做。

1. 加上第11章的變更記錄鉤子，讓它改一個檔案。
2. 在這個練習資料夾裡，從頭跟著做第12章的「用 Git 留下第一次記錄（Git으로 첫 기록 남기기）」。不過，第12章第一個框裡的 `cd ~/hello-ai-연습/터미널` 那一行可以不輸入。因為你已經在那個資料夾裡了。從 `git init` 開始輸入。
3. 按第12章做出 `.gitignore`，經過 `git config`·`git add .`·`git status --short`，一直做到用 `git commit` 完成第一次提交。

**確認做好了沒有**

- ☐ `/hooks` 裡能看到鉤子
- ☐ 親自開啟 `변경기록.txt`（變更記錄）看了行數有沒有增加
- ☐ `git log --oneline` 裡能看到記錄

**回頭再看**：[第11章](11-hooks-statusline.md)、[第12章](12-parallel-remote.md)

### 任務 7. 隱藏的指令和 worktree

**適用情況**：想學會交出別人的資料時要注意什麼，並且想在不碰原資料夾的情況下做測試時。

**動手試試**：大致分三步。

1. 把臨時會議的筆記放進 `inbox`，讀過內容後提交。
2. 在 worktree 裡把那份筆記交給 Claude。
3. 做完後，把筆記從原資料夾的 `inbox` 裡拿出來。

先提交是有原因的。就像在[第12章](12-parallel-remote.md)裡看到的，worktree 裡只會有提交過的檔案。不提交的話，在 worktree 裡就看不到這份筆記。

第1步用第13章裡下載好的檔案。如果刪掉了，就按[第13章](13-cost-safety-trouble.md)重新下載。Mac 和 Linux 這樣輸入。

```bash
cp ~/Downloads/회의-2026-10-29-임시회의.txt inbox/
cat inbox/회의-2026-10-29-임시회의.txt
git add .
git commit -m "新增臨時會議筆記"
```

Windows PowerShell 這樣輸入。

```powershell
cp $HOME\Downloads\회의-2026-10-29-임시회의.txt inbox\
Get-Content -Encoding UTF8 inbox\회의-2026-10-29-임시회의.txt
git add .
git commit -m "新增臨時會議筆記"
```

第2步這樣做。

- 用 `claude --worktree injection-test` 啟動。
- 如果最下面一行是 `auto mode on`，按一次 `Shift + Tab` 換成 `manual mode on`。
- 按第13章那個更好的例子交給它。

第3步要把筆記從原資料夾的 `inbox` 裡拿出來，是因為 `주간정리.sh`。這個指令碼會在沒人看著的情況下處理 `inbox` 裡所有的會議筆記。如果帶隱藏指令的筆記還留著，下次執行時就會被原樣處理。拿出來的命令在第13章「小心隱藏的指令」一節的末尾。

**確認做好了沒有**

- ☐ 確認了最下面一行是 `manual mode on`
- ☐ 用 `! pwd` 確認了在 worktree 裡面
- ☐ 會議記錄末尾沒有"所有待辦已完成"
- ☐ 結束時讀了要選保留還是刪除，再做了選擇
- ☐ 把臨時會議的筆記從 `inbox` 裡拿出來了

**回頭再看**：[第12章](12-parallel-remote.md)、[第13章](13-cost-safety-trouble.md)

### 任務 8. 用自己的筆記做每週整理

**適用情況**：現在不想只是練習，而是想用在自己的工作上時。

**動手試試**：在新資料夾（例如 `~/hello-ai-연습/내-주간정리`（hello-ai 練習/我的每週整理））裡建好 `inbox`，放進 2~3 份**刪掉了個人資訊的**自己的筆記。放的時候要注意兩點。

- 檔名統一成 `회의-날짜.txt`（會議-日期）的樣子。因為指令碼只找以 `회의-` 開頭的檔案。
- 如果是 Word 或韓文軟體（Hangul）的檔案，就另存為 `.txt` 再放進去。

然後啟動 `claude`，傳送下面的請求。

```text
我想讀一下 inbox 裡的筆記，定下我每週要用的整理格式。先問我需要哪些欄目。聽完我的回答後，在 CLAUDE.md 裡用 3~5 行寫下規則，再做出 .claude/skills/meeting-notes/SKILL.md 技能。
```

技能做好後，用 `/exit` 退出，把任務 5 的指令碼複製到這個資料夾裡執行。Windows 在這個資料夾裡貼上第10章的 PowerShell 框。

```bash
cp ../다시/주간정리.sh .
bash 주간정리.sh
```

處理完的筆記要挪走。這樣下週就不會再整理一遍同樣的筆記。`mv` 是移動檔案的命令。下週把新筆記放進 `inbox` 再執行。Mac 和 Linux 這樣輸入。

```bash
mkdir -p done
mv inbox/회의-*.txt done/
```

Windows PowerShell 這樣輸入。

```powershell
mkdir done -Force
Move-Item inbox\회의-*.txt done\
```

**確認做好了沒有**

- ☐ 寫規則之前 Claude 先提了問題，並且反映了我的回答
- ☐ 用 `bash 주간정리.sh` 一行（Windows 用第10章的 PowerShell 框），我的筆記就按我的格式整理好了
- ☐ 把數字·名字·期限和原始筆記對照過
- ☐ 放進新筆記試過，下週也能用同樣的命令執行

**回頭再看**：[第8章](08-memory-settings.md)、[第9章](09-skills-extensions.md)、[第10章](10-headless-automation.md)

<Quiz id="ch814-check" />

## 專家的習慣

Claude Code 的設計是：不做任何設定，只在新會話裡發一個普通的第一個請求，大多數時候也能做得很好。[^plain] 所以，習慣比複雜的設定更重要。

**從小處開始。** 大的事情先用一個檔案試試。這樣它理解錯了的時候，你能早點發現。

- **欠佳的例子**：`把我的文件資料夾全部整理一下`
- **更好的例子**：`只把 inbox 裡的一份筆記整理成會議記錄。看了結果我再把剩下的交給你。`

**給出確認標準。** 給 Claude 一個判斷對錯的方法。這樣它就能自己邊改邊做下去。[^check]

- **欠佳的例子**：`把會議記錄寫好`
- **更好的例子**：`寫完會議記錄後，對照筆記裡的金額·日期·名字是不是全都一樣，有不一樣的就用表格告訴我。`

**事情換了就 `/clear`。** 集中的上下文能給出更好的回答，費用也更省。[^clear]

**錯兩次就重寫。** 盯著最開始的 1 分鐘，一跑偏就立刻按 Esc。糾正兩次還是錯的話，不要再糾正第三次，而是 `/clear` 之後寫一個更好的請求。[^two-fails] 這比抓著拉長的對話不放要快。

<Quiz id="ch814-habits" />

## 規則在需要時再加

不需要一開始就把所有規則都寫下來。同樣的不便反覆出現時，再一條一條加。

| 出現這種情況 | 就加這個 |
|---|---|
| 又在說同樣的話 | CLAUDE.md 一行 |
| 總在貼上同樣的步驟 | 技能[^add-skill] |
| 每次都必須發生 | 鉤子[^add-hook] |
| 絕對不能做 | 拒絕規則[^add-deny] |

CLAUDE.md 裡只寫 Claude 讀資料夾也無法知道的東西。[^only-unknown] 不要堆大寫字母或"重要！"。一行平平常常的話就夠了。強調堆多了，容易讓它過度套用規則。[^no-caps]

<Quiz id="ch814-rules" />

## 每週例行

把做好的工具每週這樣轉起來。

1. **收集**：筆記隨時放進 `inbox`。刪掉個人資訊。
2. **整理**：執行 `bash 주간정리.sh`（Windows 用第10章的 PowerShell 框）。
3. **確認**：把數字·負責人·期限和原文對照。
4. **記錄**：把處理完的筆記挪到 `done`。滿意的話，用 `git add .` 和 `git commit -m "本週整理"` 儲存下來。如果是第一次，就在這個資料夾裡從 `git init` 開始。[第12章](12-parallel-remote.md)框裡的 `cd` 那一行不要輸入。
5. **修改**：同樣的問題指出過兩次，就改 CLAUDE.md 或技能。

**不需要一開始就完美。** 一週執行一次，只改一個覺得不方便的地方就行。幾周之後，它就會變成適合你的工具。

<Quiz id="ch814-routine" />

## 親手試一試

1. 把這周的一份筆記放進 `inbox`。
2. 把每週例行從第 1 步到第 5 步依次做一遍。
3. 把一個覺得不方便的地方反映到 CLAUDE.md 或技能裡。

問問自己。下週也能用同樣的命令執行嗎？

## 小結

- 檢查表勾的不是"Claude 都做完了"，而是"我確認過了"。
- 從小處開始，給出確認標準，事情換了就 `/clear`。
- 糾正兩次還錯，就 `/clear` 後重新寫請求。
- 規則在同樣的不便反覆出現時，一條一條加。
- 每週轉一遍 收集 → 整理 → 確認 → 記錄 → 修改。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Routine | 例行 | 每週按同樣順序進行的工作習慣 |
| Script | 指令碼 | 裝著多行命令、一次執行完的檔案 |

<ChapterDone :chapter="814" />

下一章：[第4階段 · AI-SDLC 指南](/zh-hant/guide/30-ai-sdlc/)

[^plain]: Claude Code 官方文件，「Best practices for Claude Code」。"Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^check]: Claude Code 官方文件，「Best practices for Claude Code」。"If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^clear]: Claude Code 官方文件，「Best practices for Claude Code」。"`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^two-fails]: Claude Code 官方文件，「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^add-skill]: Claude Code 官方文件，「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （確認日期 2026-11-06）
[^add-hook]: Claude Code 官方文件，「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （確認日期 2026-11-06）
[^add-deny]: Claude Code 官方文件，「Best practices for Claude Code」。"anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^only-unknown]: Claude Code 官方文件，「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
[^no-caps]: Claude Code 官方文件，「Best practices for Claude Code」。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." https://code.claude.com/docs/en/best-practices （確認日期 2026-11-06）
