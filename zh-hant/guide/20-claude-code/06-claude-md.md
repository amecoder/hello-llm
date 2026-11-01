# 第6章 專案記憶 — 用 CLAUDE.md 寫下我的規則

> **一句話總結**：每次都要重新說一遍的規則，寫進資料夾裡的 **CLAUDE.md** 檔案。Claude 每次開始會話時都會讀這個檔案。
> 不過它**不是強制裝置，而是參考背景**。寫得越短、越具體，它就越能遵守。

這一章依據2026年10月31日確認的 Claude Code 官方文件和 macOS 桌面應用（韓語介面，付費賬號）編寫。這一章是把第5章做的模板，歸攏成“基本規則”。

## 每次會話都從頭開始

Claude Code 的會話每次都**從空白狀態開始。** 即使在上一個會話裡說過“日期請這樣寫”，新會話也不知道。[^fresh] 能讓記憶跨會話延續的機制有兩種。[^two]

| | CLAUDE.md | 自動記憶 |
|---|---|---|
| 誰來寫 | 我 | Claude |
| 裡面有什麼 | 指示和規則 | 我糾正過的內容、我的喜好 |
| 什麼時候讀取 | 每次會話開始時 | 每次會話開始時（只讀前面部分） |

出處：Claude Code 官方文件[^two]

這一章講的是我自己寫的 **CLAUDE.md**。自動記憶是 Claude 看了我的糾正後，自己記下的備忘。[^two]

<Quiz id="ch406-fresh" />

## 寫什麼

CLAUDE.md 是寫下**“不寫的話每次都要重新解釋的內容”**的地方。[^when] 遇到這些情況就寫下來。

- Claude **第二次**犯同樣的錯時
- 正在**重複提出**上個會話裡提過的**同一個糾正**時
- 對新來的人也**需要同樣告知**的內容

出處：Claude Code 官方文件[^when]

並且要寫得**具體到可以驗證**。[^concrete]

| 不夠好的規則 | 更好的規則 |
|---|---|
| 日期請寫得整潔一點 | 日期像 10/27(週一) 這樣寫 |
| 請好好整理 | 待辦事項用表格寫，一定要包含負責人和期限 |
| 請小心對待原件 | 絕不修改 inbox 裡的原始備忘 |

更好的規則，看了結果就能馬上判斷“有沒有遵守”。

**請寫得簡短。** 官方文件建議每個檔案**控制在200行以內**。越長，佔用的背景越多，被遵守的程度也越低。[^short] 由多個步驟組成的流程，最好挪到第7章的技能裡。[^when]

<Quiz id="ch406-what" />

## 實踐 — 用我的規則做出 CLAUDE.md

讓它把第4章裡寫下的“通用規則”做成 CLAUDE.md。

![CLAUDE.md 請求。紅色編號 ① 標在輸入框裡寫著5條規則的請求上](../../../guide/20-claude-code/assets/shot-22-claudemd-prompt-marked.png)

```
請為這個資料夾做一個 CLAUDE.md。要放進去的規則：1) 絕不修改 inbox 裡的原始備忘 2) 整理時使用 templates 資料夾裡的模板 3) 日期像 10/27(週一) 這樣寫 4) 備忘裡沒有的內容不要編造，寫成（備忘中沒有） 5) 待辦事項用表格寫，一定要包含負責人和期限。要簡短，控制在20行以內。
```

Claude 在資料夾最上層做出了 `CLAUDE.md`（結果：[6장-CLAUDE.md.txt](/practice/notes/results/6장-CLAUDE.md.txt)）。5條規則各佔一行，用粗體寫出，後面還附上了待辦事項表格的示例。

資料夾最上層的 `CLAUDE.md`（或 `.claude/CLAUDE.md`）稱為**專案指示**。它適用於在這個資料夾裡工作的所有會話。[^where]

<Quiz id="ch406-make" />

## 測試它有沒有遵守 — 在新會話裡

CLAUDE.md 是在**會話開始時**讀取的。[^fresh] 所以測試要在**新會話**裡做。這次完全不提格式，只簡短地提出請求。

![新會話裡的簡短請求。紅色編號 ① 標在「請用 inbox 裡的3份覆盤備忘，寫本週的周覆盤。」上](../../../guide/20-claude-code/assets/shot-23-claudemd-test-marked.png)

```
請用 inbox 裡的3份覆盤備忘，寫本週的周覆盤。
```

把結果（[6장-주간회고-2026-10-27.txt](/practice/notes/results/6장-주간회고-2026-10-27.txt)）和規則對照了一下，是這樣的。

| 規則 | 結果 |
|---|---|
| 使用 templates 的模板 | 原樣使用第5章的 KPT 模板（做得好的、不足的、下週要做的） |
| 日期像 10/27(週一) | `10/30(週四)`、`11/3(週一)` 的格式 |
| 備忘裡沒有就寫（備忘中沒有） | 在缺少“為什麼”的兩處寫了`（備忘中沒有）` |
| 不修改原件 | inbox 備忘保持原樣 |

出處：本指南的實踐結果（2026-10-31）

數字（Instagram 3次、點贊12個、寫錯的價格 6,000韓元、套裝4個·每週11個、熱紅酒成本 1,800韓元）也都和備忘一致。

![結果介面。紅色編號標在：① Claude 用模板的檢查表自己確認出的「檢查結果」，② 「需要確認的3件事」，③ 會話資訊欄裡的成果（周覆盤檔案）](../../../guide/20-claude-code/assets/shot-24-claudemd-result-marked.png)

看 ①，你會發現 Claude 用第5章做的模板說明裡的**檢查表自己做了確認**，還說明了確認的範圍（覆盤備忘 3/3）。在 ② 裡，它先告知了這幾件事：備忘裡的星期和實際日曆不一致（第2章裡說過的“編造的日期”）、備忘裡沒寫原因的格子、原始備忘裡一處沒有記錄的修改（那是截圖前本指南改的一行，不是 Claude 做的）。**把規則和檢查表寫下來，結果回來時就會連同依據一起回來。**

<Quiz id="ch406-test" />

## 它不是強制規則

官方文件明確說，CLAUDE.md 是**參考背景，不是強制設定**。[^context] 所以要這樣寫。

- 越是必須遵守的東西，越要寫得**具體而簡短**。越具體，遵守得越一致。[^context]
- 如果有互相**衝突的規則**，Claude 可能會隨便選一條。要時不時讀一讀，把過時的規則刪掉。[^conflict]
- 無論如何都必須阻止的事（例：刪除原件資料夾），不要只相信 CLAUDE.md，要和第4章的許可權模式及 Git 記錄一起來守住。

::: details 也有適用於我整臺電腦的 CLAUDE.md
寫在 `~/.claude/CLAUDE.md`（我的使用者資料夾）裡的指示，適用於**所有資料夾的會話**。[^where] 本指南截圖用的電腦上也有這樣的個人指示，所以會在回答末尾加“狀態：”一行等，介面略有不同。只在一個資料夾裡使用的規則，請寫進那個資料夾的 CLAUDE.md。
:::

<Quiz id="ch406-not-enforced" />

## 親自試一試

1. 把第4章寫下的通用規則，精簡成3~5行。要寫得具體，讓人能判斷“有沒有遵守”。
2. 像上面的請求那樣，請它做出 CLAUDE.md，並在檔案欄裡確認內容。
3. 開啟**新會話**，傳送一個不提格式的簡短請求。
4. 把結果和規則表逐條對照。如果有沒遵守的規則，就寫得更具體一些。

**連續任務**：現在，“幫我整理會議紀要”“幫我做學習筆記”都是每次用話來說。在第7章裡，會把這些請求做成像 `/會議整理` 這樣的**技能**，用一行就能呼叫。

## 小結

- 會話每次都從頭開始。要重新解釋的內容，寫進 CLAUDE.md。
- 同樣的錯誤、同樣的糾正第二次出現時，就是該寫的時候。要具體，控制在200行以內。
- 資料夾最上層的 CLAUDE.md 適用於那個資料夾的所有會話，`~/.claude/CLAUDE.md` 適用於所有資料夾。
- 它有沒有遵守，在新會話裡用簡短的請求來測試。
- 它不是強制裝置。必須阻止的事，要和許可權模式、Git 記錄一起來守住。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| CLAUDE.md | CLAUDE.md | 每次會話都會讀取的、由我來寫的指示檔案 |
| Auto memory | 自動記憶 | Claude 自己記下我的糾正和喜好的備忘 |
| Project instructions | 專案指示 | 適用於那個資料夾所有會話的 CLAUDE.md |
| Context | 背景（上下文） | 給它參考用的資訊。和強制規則不同 |

<ChapterDone :chapter="406" />

下一章：[第7章. 技能、外掛、外部工具](07-skills-plugins.md)

[^fresh]: Claude Code 官方文件，「How Claude remembers your project」。"Each Claude Code session begins with a fresh context window." / "Claude reads them at the start of every session." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^two]: Claude Code 官方文件，「How Claude remembers your project」。"Two mechanisms carry knowledge across sessions" / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Both are loaded at the start of every conversation." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^when]: Claude Code 官方文件，「How Claude remembers your project」。"Treat CLAUDE.md as the place you write down what you'd otherwise re-explain." / "Claude makes the same mistake a second time" / "You type the same correction or clarification into chat that you typed last session" / "A new teammate would need the same context to be productive" / "If an entry is a multi-step procedure or only matters for one part of the codebase, move it to a skill" https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^concrete]: Claude Code 官方文件，「How Claude remembers your project」。"Write instructions that are concrete enough to verify" https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^short]: Claude Code 官方文件，「How Claude remembers your project」。"target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^where]: Claude Code 官方文件，「How Claude remembers your project」。"Personal preferences for all projects" / "Team-shared instructions for the project" / "A project CLAUDE.md can be stored in either ./CLAUDE.md or ./.claude/CLAUDE.md." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^context]: Claude Code 官方文件，「How Claude remembers your project」。"Claude treats them as context, not enforced configuration." / "The more specific and concise your instructions, the more consistently Claude follows them." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
[^conflict]: Claude Code 官方文件，「How Claude remembers your project」。"if two instructions contradict each other, Claude may pick one arbitrarily." https://code.claude.com/docs/en/memory（確認日期 2026-10-31）
