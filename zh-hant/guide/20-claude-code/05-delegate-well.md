# 第5章 怎樣把事情交代好——說具體、先做計劃、給出檢查標準

> **一句話總結**：在請求裡寫明**看什麼、做成什麼樣、放在哪裡、怎樣才算完成**。事情比較大時，先用**「計劃」模式拿到方法**，修改之後再交給它。
> 不要只相信"做完了"這句話，要它同時給出**檢查標準和依據**。

本章依據 2026 年 10 月 31 日確認過的 Claude Code 官方文件，以及 macOS 桌面應用（韓語介面，付費賬號）寫成。這一章要做出「整理工具」的骨架——**3 種模板**（會議紀要、學習筆記、每週回顧）。

## 說具體

官方文件指出，請求沒有達到預期，最常見的原因是這樣的。**因為缺少了 Claude 只讀資料夾是無法知道的資訊。**[^cant-see] 比如會議上決定了什麼、我喜歡的格式、"做完了"的標準，都屬於這一類。

所以請求裡要寫這四樣。

| 要寫的 | 例子 |
|---|---|
| 看什麼 | inbox 裡的會議筆記 |
| 做成什麼樣 | 決定的事 / 要做的事（負責人·期限）/ 下次討論 |
| 放在哪裡 | 在 notes 資料夾裡存成新檔案 |
| 怎樣才算完成 | 每件要做的事都有負責人和期限 |

官方文件也說，一開始就說明"看什麼、是什麼症狀、怎樣才算修好"，可以少費一輪修改的功夫。[^specific]

```
整理一下會議筆記。
```

```
讀一下 inbox 裡的會議筆記，整理成會議紀要。分成"決定的事 / 要做的事（負責人·期限）/ 下次要討論的事"三部分，儲存成 notes 資料夾裡的新檔案。不要修改原始筆記。
```

第二個請求就是第2章用過的那個。它比第一個長，但可以減少把結果改兩三遍的麻煩。

**想要多一點的時候，就這樣說。** Claude 讀請求很謹慎，傾向於做出滿足請求的**最小的結果**。[^ambitious] 請像"連空白的時候怎麼處理也寫上""每個再給一個例子"這樣，親自把範圍放寬。

<Quiz id="ch405-specific" />

## 不清楚的時候，讓它來提問

即使還沒想好要什麼也沒關係。可以**讓 Claude 向你提問**。[^interview]

```
我想做一份每週五用的每週回顧模板，但還什麼都沒定。請你一個一個地問我問題，我來回答，全部定下來之後，把內容整理成 회고-양식-초안.md。
```

Claude 會用帶選項的問題，來問還沒定下來的部分。它會一直問下去，直到回答彙集成規格說明（Spec，寫明要做什麼的文件）。[^interview] 整理出來的草稿檔案，會成為下次真正動手做時的標準。

<Quiz id="ch405-interview" />

## 先做計劃——「計劃」模式

事情比較大時，不要馬上交給它，先**拿到方法**看看。在「計劃」模式下，Claude 會讀取並檢視檔案，然後寫出計劃，但**不會修改檔案。**[^plan] 官方文件也建議，複雜的事從「計劃」開始。[^plan-tip]

我們來練習一下。在新會話裡，把輸入框下面一行的模式換成**「計劃」**（第4章的許可權模式選單），然後這樣傳送。

![計劃請求。① 輸入框裡有製作 3 個模板的計劃請求，② 許可權模式「計劃」都標有紅色編號](../../../guide/20-claude-code/assets/shot-17-plan-prompt-marked.png)

```
我想讓會議紀要、學習筆記、每週回顧每次都做成同樣的樣子。請參考 notes 資料夾裡的會議紀要和 inbox 裡的筆記，制定一個在 templates 資料夾裡做 3 個模板的計劃。每個模板要放哪些欄、每個欄裡寫什麼，還有讓我檢查結果對不對的檢查清單，也請放進計劃裡。
```

過一會兒，計劃就出來了。

![計劃提議介面。① 「Claude 提議了一個計劃」卡片（拒絕·修改…·接受·接受並使用自動模式），② 右側的「計劃」欄，③ 計劃中的「假設（未詢問就定下的預設值）」一節都標有紅色編號](../../../guide/20-claude-code/assets/shot-18-plan-marked.png)

在 **① 卡片**裡選擇怎麼處理計劃。

| 介面名稱 | 作用 |
|---|---|
| 拒絕 | 不接受這個計劃 |
| 修改… | 寫下要改的地方，讓它重新做計劃 |
| 接受 | 批准，修改逐項確認 |
| 接受並使用自動模式 | 批准，並用自動模式進行 |

來源：介面名稱來自本指南的介面確認（2026-10-31），動作來自官方文件[^approve]

在 **② 計劃欄**裡讀計劃全文。欄的上方有「選中文字即可給 Claude 留言」的提示，所以可以直接給讓你在意的句子寫意見。

請一定要讀一讀 **③ 假設**一節。在這個練習裡，Claude 說"這是沒問我就定下的預設值——想改的話請在批准之前告訴我"，並把檔名、儲存位置、空白的標註方法等單獨集中在這裡。**批准之前，是修改成本最低的時候。**

### 修改計劃

每週回顧，我想寫成做得好的、可惜的、下次要做的三欄。點「修改…」，就會開啟「需要更改什麼？（可選）」欄。

![計劃修改欄。① 寫著「每週回顧做成 做得好的 / 可惜的 / 下週要做的 三欄（KPT）。」的欄，② 「修改」按鈕都標有紅色編號](../../../guide/20-claude-code/assets/shot-19-plan-edit-marked.png)

**KPT** 是分成做得好的（Keep）、可惜的（Problem）、下次要試的（Try）的回顧方式。點「修改」，Claude 會修改計劃，並再次請求批准。

![修改後的計劃。① 前一個計劃顯示「未批准」，② 計劃檔案「+12 −16」已編輯，③ 重新出現的計劃卡片，④ 「接受」按鈕都標有紅色編號](../../../guide/20-claude-code/assets/shot-20-plan-revised-marked.png)

這次我點的是**「接受」**。批准之後，Claude 會退出計劃模式，切換成與所選方式相符的許可權模式，並開始修改檔案。[^approve] 介面下面一行的模式也從「計劃」變成了「手動」。

![執行計劃的介面。① 正在執行的待辦清單，② 會話資訊欄裡的成果（README·每週回顧·學習筆記·會議紀要），③ 變更 「+155 −1」，④ 許可權模式「手動」都標有紅色編號](../../../guide/20-claude-code/assets/shot-21-plan-run-marked.png)

① 待辦清單裡能看到的"建立分支""寫 HANDOFF.md"，是因為截圖電腦上的個人指令（第6章的摺疊框）才出現的步驟。你的介面裡可能不會出現。

做出的模板是這樣的（本指南的實操結果）。

- [5장-양식-회의록.txt](/practice/notes/results/5장-양식-회의록.txt) · [5장-양식-공부노트.txt](/practice/notes/results/5장-양식-공부노트.txt) · [5장-양식-주간회고.txt](/practice/notes/results/5장-양식-주간회고.txt)
- [5장-양식-README.txt](/practice/notes/results/5장-양식-README.txt)——模板的使用方法和檢查清單

每週回顧模板按照修改要求，變成了「做得好的 (Keep) / 可惜的 (Problem) / 下週要做的 (Try)」三欄。每個欄都附有寫什麼的說明和示例。

<Quiz id="ch405-plan" />

## 給出檢查標準——用依據代替"做完了"

Claude 在事情**看起來做完了**的時候就會停下。如果沒有辦法自己確認對不對，那麼"看起來做完了"就是全部。這樣一來，我就成了一項一項檢查的人。[^check]

所以要同時給出**能得出對或錯答案的標準**。[^check] 如果是程式碼，就是測試；如果是整理文件，檢查清單就起這個作用。

```
用模板寫這周的回顧。寫完後，把下面的檢查清單逐項確認，每一項都給出"透過/未透過"，以及作為依據的筆記那一行。
- 每個欄裡放了 1~3 條嗎？
- 數字（銷量、點贊數）和筆記一樣嗎？
- 有沒有編造筆記裡沒有的內容？
```

官方文件說，不管用什麼方法，都要**要求它給出依據**。比起"全部透過"這一行字，讀它實際確認的內容更快也更準確。[^evidence] 這個練習的模板 README 裡，Claude 也放進了檢查清單。

<Quiz id="ch405-check" />

## 中途改變方向

請看著最初的 1 分鐘。如果它往奇怪的方向走了，就馬上讓它停下並糾正。[^steer]

- **停下來**：停止按鈕或 **Esc**。到那時為止做過的事都會保留。[^steer]
- **倒回去**：第4章的 `/rewind`。可以先試大膽的方法，不行再倒回去，所以嘗試起來沒有負擔。[^steer]
- **從頭再來**：**同一件事改了兩次還是不對**，就不要改第三次，重新開始。因為失敗的兩次嘗試留在對話裡，Claude 會一直重讀它們。一個帶上所學教訓的新請求，幾乎總是更好。[^steer] 在桌面應用裡，開啟一個新會話就行。

<Quiz id="ch405-steer" />

## 親手試一試

1. 在新會話裡把模式換成「計劃」，傳送上面製作 3 個模板的計劃請求。
2. 讀計劃的「假設」一節，用「修改…」改掉其中至少一個（例如：把每週回顧改成 KPT 三欄）。
3. 用「接受」批准，看看會話資訊欄的成果裡有沒有生成模板檔案。
4. 讓它用模板寫這周的回顧，同時要它給出檢查清單和依據。

**連續任務**：再看一遍第4章裡記下的"想在兩份文件裡通用的規則"三行。在第6章裡，把這些規則儲存到 CLAUDE.md，這樣不用每次都說，它也會遵守。

## 小結

- 請求裡要寫明看什麼、做成什麼樣、放在哪裡、怎樣才算完成。
- 沒想好的話，讓 Claude 來提問。
- 事情大時，用「計劃」模式先拿到方法。讀「假設」一節，用「修改…」改好之後再「接受」。
- 給出能得出對錯答案的標準（檢查清單），並要求它連同結果一起給出依據。
- 看最初的 1 分鐘，改了兩次還不對就重新開始。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Plan mode | 計劃模式 | 不修改檔案，只檢視後給出計劃的模式 |
| Spec | 規格說明 | 寫明要做什麼的文件 |
| Template | 模板 | 每次都按同樣樣子填寫的框架 |
| KPT | KPT 回顧法 | 分成做得好的（Keep）、可惜的（Problem）、要試的（Try）的回顧方式 |
| Evidence | 依據 | 實際確認過的內容。用來代替"做完了"這句話 |

<ChapterDone :chapter="405" />

下一章：[第6章. 專案記憶](06-claude-md.md)

[^cant-see]: Claude Code 官方文件，「Best practices for Claude Code」. "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^specific]: Claude Code 官方文件，「Best practices for Claude Code」. "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^ambitious]: Claude Code 官方文件，「Best practices for Claude Code」. "Claude tends to read a request conservatively and build the smallest thing that satisfies it, since it can't see how much you were hoping for." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^interview]: Claude Code 官方文件，「Best practices for Claude Code」. "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead" / "Claude comes back with multiple-choice questions about the parts you haven't pinned down" / "It keeps asking until the answers add up to a spec." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^plan]: Claude Code 官方文件，「Choose a permission mode」. "Plan mode tells Claude to research and propose changes without making them. Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." https://code.claude.com/docs/en/permission-modes (確認日期 2026-10-31)
[^plan-tip]: Claude Code 官方文件，「Desktop application」. "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (確認日期 2026-10-31)
[^approve]: Claude Code 官方文件，「Choose a permission mode」. "When the plan is ready, Claude presents it and asks how to proceed." / "Approving a plan exits plan mode and switches the session to the permission mode each approve option describes, so Claude starts editing." https://code.claude.com/docs/en/permission-modes (確認日期 2026-10-31)
[^check]: Claude Code 官方文件，「Best practices for Claude Code」. "Claude stops when the work looks done." / "Give Claude something it can run that comes back pass or fail." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^evidence]: Claude Code 官方文件，「Best practices for Claude Code」. "\"All tests pass\" on its own tells you very little" / "reading the output is faster than rerunning the check yourself" https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
[^steer]: Claude Code 官方文件，「Best practices for Claude Code」. "Watch the first minute, press Esc the moment Claude drifts, and after two failed corrections run /clear and write a better prompt instead of a third." / "Esc stops Claude mid-action and keeps everything up to that point" / "That makes it low-risk to try the bolder approach first and rewind if it doesn't work out." / "a third correction mostly adds to a conversation that already contains two failed attempts for Claude to keep re-reading. /clear plus one new prompt that folds in what you learned works better almost every time." https://code.claude.com/docs/en/best-practices (確認日期 2026-10-31)
