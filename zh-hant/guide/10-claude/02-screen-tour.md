# 第2章 逛一逛介面——什麼在哪裡

> **一句話總結**：Claude 的介面只要認識四個地方就夠了：**左邊的側邊選單**（過去的對話）、**中間的輸入框**（提問的地方和「+」）、
> **輸入框下面的模型選單**（模型·投入程度）、**左下角的我的名字**（設定）。剛開始只用輸入框也完全夠用。

介面以 2026 年 10 月的網頁版為準，圖片是免費套餐的韓語介面。Claude 現在正在陸續推送新介面，所以你看到的可能不一樣。如果和你的介面名稱不同，就找一個名字相近的按鈕。

## 新的 Claude 介面和舊介面

Claude 現在**正在更換介面**。在新介面裡，通常是把對話和整件事交出去的 **Cowork**（協作模式，[第8章](08-cowork.md)）**合併成了一個對話。** 開始之前不需要先選模式。[^new]

這本指南以**新介面**為準來講解。拍這本指南圖片用的賬號是新介面。把下面的首頁圖片和你的介面比一比。

![登入後的首頁整體。紅色編號 ①~⑩。左側側邊選單上方 ① 「新建」「搜尋」「專案」「Artifacts」「自定義」，② 「已固定」「最近專案」對話列表，中間 ③ 輸入框「今天需要什麼幫助？」，④ 「+」，輸入框下面 ⑤ 「專案」，⑥ 「Sonnet 5.5 中等」，⑦ 「手動」，輸入框右側 ⑧ 麥克風和聲波圖示，右上角 ⑨ 幽靈圖示，左下角 ⑩ 「김하나 · Free」。輸入框周圍沒有「Chat」「Cowork」的選項和網頁搜尋開關](../../../guide/10-claude/assets/shot-01-home-marked.png)

姓名和對話標題是改成示例的介面（免費套餐）。**紅色編號和下面「側邊選單」一節表格裡的編號是同一處。**

- ③ 輸入框周圍哪裡都沒有「Chat」「Cowork」的選項。[^screen]
- 也沒有開關網頁搜尋的開關。[^screen]
- ② 過去的對話都在「最近專案」（Recents）這一個列表裡。[^screen]

如果你的介面和圖片差別很大，請展開下面的框。

::: details 如果你用的是舊介面（點選展開）

以前的介面裡，通常對話（Chat）和 Cowork 是分開的。新介面從 Pro·Max 套餐開始，依次推送到網頁、電腦應用和手機應用。[^new] 即使是同一個套餐，每個人換成新介面的時間也不同。

如果是 Pro·Max 套餐，請看輸入框。如果能看到「Chat」和「Cowork」的選項，說明還是舊介面。[^new] 免費套餐不能用這個方法來判斷。輸入框裡沒有這個選項，並不代表就是新介面。

不需要你另外做什麼。輪到你的時候，會自動換過去。一旦換成新介面，就不能再換回舊介面了。[^new]

| 變化的地方 | 舊介面 | 新介面 |
|---|---|---|
| 輸入框模式 | 在「Chat」·「Cowork」中選一個 | 不用選 |
| 網頁搜尋 | 有開關可以開啟關閉 | 沒有開關，需要時自己去搜 |
| 對話列表 | — | 簡短的提問和長時間的任務都在「Recents」一處 |

出處：Anthropic 幫助文件[^new]

<!-- 需要截圖：舊介面輸入框裡的「Chat」「Cowork」選項（網頁版，仍保留舊介面的 Pro·Max 賬號） -->

這本指南以新介面為準來講解，和舊介面不同的地方，會像這樣放在摺疊框或腳註裡說明。

:::

<Quiz id="ch202-new-screen" />

## 側邊選單——通往過去對話的路

介面左邊有一個**側邊選單**（sidebar）。過去的對話列表和各種選單都集中在這裡。
把上面首頁圖片裡的編號逐個看一遍，是這樣的。[^screen]

| 編號 | 位置 | 名稱 | 作用 |
|---|---|---|---|
| ① | 側邊選單上方 | 「新建」「搜尋」「專案」「Artifacts」「自定義」 | 新對話、查詢對話、各種功能 |
| ② | 側邊選單 | 「已固定」「最近專案」 | 過去的對話列表（[第3章](03-chats.md)） |
| ③ | 中間 | 輸入框「今天需要什麼幫助？」 | 寫問題的地方 |
| ④ | 輸入框左下方 | 「+」 | 新增檔案·聯結器等 |
| ⑤ | 輸入框下方左邊 | 「專案」 | 選擇專案（[第7章](07-projects-tools.md)） |
| ⑥ | 輸入框下方右邊 | 「Sonnet 5.5 中等」 | 模型·投入程度選單 |
| ⑦ | ⑥ 旁邊 | 「手動」 | 許可權模式 |
| ⑧ | 輸入框右側 | 麥克風·聲波圖示 | 語音輸入、語音模式（[第10章](10-voice-mobile.md)） |
| ⑨ | 右上角 | 幽靈圖示 | 隱身模式（[第3章](03-chats.md)） |
| ⑩ | 左下角 | 「김하나 · Free」 | 賬號選單（設定·語言·「獲取幫助」） |

最上方正中間能看到「免費套餐 · 升級」。問候語會隨時變化，比如「你好！」或「김하나，下午好」。[^screen]

過去的對話，可以在 ① 「搜尋」或 ② 列表裡找。[^screen][^chats]

::: details 和幫助文件的名稱不同時（點選展開）
幫助文件說，過去的全部對話可以在「Chats and tasks」（聊天和任務）裡看。[^chats] 這本指南使用的介面裡沒有看到這個選單。[^screen] 不同介面可能有差別。
:::

韓語介面和幫助文件裡，也有直接寫成英語的選單（例如「Skills」）。[^new][^screen] 介面上出現英語，不用慌。

側邊選單**不能完全關掉。** 只能展開和收起。[^appearance] 如果覺得介面太窄，可以先收起來，找過去的對話時再展開。

<Quiz id="ch202-sidebar" />

## 輸入框和 + 選單

在中間的輸入框裡寫下問題，按傳送按鈕，對話就開始了。
點輸入框左下方的 **「+」按鈕**，或者在輸入框裡輸入 **「/」**，就會出現更多功能和命令。[^start]

![點輸入框「+」後的選單。① 「上傳或新增檔案」(Ctrl+U)，② 「Skills」，③ 「新增聯結器」，④ 「設計系統」，⑤ 「新增外掛」，⑥ 帶勾選標記的「記憶」上標有紅色編號](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

這是免費套餐的介面。**紅色編號和下面列表的編號是同一處。**[^screen]

- ① 「上傳或新增檔案」：上傳我電腦裡的文件和照片。把檔案拖到輸入框裡也可以（[第4章](04-files-artifacts.md)）。[^upload]
- ② 「Skills」·③ 「新增聯結器」·④ 「設計系統」·⑤ 「新增外掛」：給 Claude 新增更多功能的選單。技能·聯結器·外掛在[第7章](07-projects-tools.md)裡講。
- ⑥ 「記憶」：有勾選標記就是開啟狀態（[第5章](05-memory.md)）。

剛開始只要知道 ① 就夠了。

花較長時間調查並給出報告的 **「Research」（研究）** 也在「+」選單裡。在輸入框裡輸入 `/deep-research` 也可以（[第6章](06-search.md)）。[^new] 研究功能從付費套餐開始提供，所以上面免費賬號的選單裡沒有看到。[^pricing][^screen]

輸入框下面的 ⑦ 「手動」是**許可權模式**。它決定 Claude 能多自主地做事。免費賬號裡也能看到。[^screen]

![點 ⑦ 「手動」後的「許可權模式」選單。① 「手動」(帶勾選標記)和 ② 「自動」兩項說明上標有紅色編號](../../../guide/10-claude/assets/shot-04-permission-marked.png)

- ① 「手動」："Claude 在使用新工具或開啟新網站之前會請求確認。" 這是免費賬號的預設值。[^screen]
- ② 「自動」："Claude 會自行執行，如果發現看起來不安全的內容，會暫停並確認。"[^screen]

Pro·Max 的預設值是「自動」（Auto）。[^new] 剛開始設成「手動」會更安心。因為它會在使用新工具或開啟新網站之前先問你。把發訊息這類後果比較大的事交給它時，請在旁邊看著。詳細說明在[第8章](08-cowork.md#選擇確認方式——許可權模式)。[^new]

選單不用全背下來。不知道能做什麼的話，直接問 Claude。

```
告訴我，在現在這個介面上，你可以幫我做的事情，只說五件。每一件再各配一個我該怎麼拜託你的例句。
```

<Quiz id="ch202-plus" />

## 模型選單——選擇模型·投入程度·思考

在網頁版和電腦應用裡，**輸入框下面**能看到現在使用的模型名稱和投入程度（首頁圖片裡的 ⑥ 「Sonnet 5.5 中等」）。在手機應用裡，它顯示在螢幕上方。[^start][^screen]
點這個名稱，就會開啟**模型選單**。幫助文件說，在這裡可以決定三件事。[^model]

| 決定的事 | 含義 |
|---|---|
| **模型** | 和哪一個 Claude 對話 |
| **投入程度**（Effort） | 每個回答要花多少功夫 |
| **思考**（Thinking） | 回答之前要不要先經過一個仔細推敲的階段 |

![點 ⑥ 「Sonnet 5.5 中等」後的模型選單。① 模型列表（Fable 5.1「Pro 或 Max」·「升級」，Opus 5.5「Pro」·「升級」，帶勾選標記的 Sonnet 5.5，Haiku 5.5），② 「投入程度」中等，③ 「更多模型」，④ 最下面 Fable 5.1 的說明文字上標有紅色編號](../../../guide/10-claude/assets/shot-03-model-menu-marked.png)

這是免費套餐的介面。**紅色編號和下面列表的編號是同一處。**[^screen]

- ① 模型列表：免費賬號只能選 Sonnet 5.5 和 Haiku 5.5。Fable 5.1 和 Opus 5.5 旁邊帶著「升級」。
- ② 「投入程度」：決定每個回答花多少功夫（見下面的「投入程度」）。
- ③ 「更多模型」：檢視列表裡沒有的模型。
- ④ 說明："Fable 5.1 包含在 Max 套餐中，在 Pro 套餐裡可以使用額度來使用。"

這個免費賬號的選單裡，**沒有看到單獨的思考開關。** 只有 ② 「投入程度」。[^screen] 思考開關可能會因套餐和模型而出現。

對話過程中隨時都可以更改。改過的設定**從下一個回答開始**生效。[^model]

### 選擇模型

Claude 有好幾個大小和性格各不相同的模型。點模型名稱就可以更換，列表裡沒有的模型在「更多模型」（More models）裡。[^model]

模型名稱經常變。僅 2026 年一年，就推出了好幾次新模型。[^rn] 所以這本指南按**角色**來稱呼模型。2026 年 10 月 26 日的名稱，以及各套餐能不能用，如下所示。

| 角色 | 名稱（系列） | Free | Pro | Max |
|---|---|---|---|---|
| 效能最高的模型 | Fable | 沒有 | 只能用額度 | 最多用到每週額度的 50% |
| 大模型 | Opus | 沒有 | 有 | 有 |
| 快速模型 | Sonnet | 有 | 有 | 有 |
| 最小最快的模型 | Haiku | 有 | 有 | 有 |

出處：Anthropic 價格頁面·幫助文件[^pricing][^fable][^rn]

**使用額度**（Usage credits）是和套餐額度分開、用多少付多少錢的用量。在 Pro 裡，效能最高的模型不包含在套餐額度內，所以一開始就只能用這種額度。[^fable]
Max 的“最多 50%”並不是說額度變多了。意思是和其他模型**共用同一份每週額度**，其中最多一半可以用在效能最高的模型上。[^fable]

模型也會從列表中撤下。到目前為止，Anthropic 大多是在模型推出大約 1 年後將其撤下。[^persona] 換成新模型後，如果覺得說話的口氣變陌生了，可以把你喜歡的過去的對話給它看，這樣拜託它。[^persona]

```
請看一看我覺得很不錯的幾個過去的對話，然後親自寫出今後要給你的指示。
請整理出我對語氣、回答長度和格式的偏好。
```

### 投入程度——花多少功夫

**投入程度**（Effort）越高，回答就越細緻。代價是花的時間更久，也會更快用到使用額度的上限。[^model]

![滑鼠放在模型選單的「投入程度」上時，在左邊展開的檔位列表。① 最上面的說明文字，② 「低」，帶「推薦」標記和勾選的「中等」，「高」，「超高」，帶「5× 以上用量」警告的「最高」上標有紅色編號](../../../guide/10-claude/assets/shot-05-effort-marked.png)

這是免費套餐的介面（Sonnet 5.5）。① 說明文字是這樣的："更高的投入程度意味著更全面的回答，但需要更長時間，並且更快用完額度。"[^screen]
② 檔位有五種。

| 投入程度 | 適合的事 |
|---|---|
| 「低」·「中等」 | 日常的事 |
| 「高」 | 質量和速度的平衡 |
| 「超高」 | 耗時很長的程式設計、自己完成多個步驟的任務 |
| 「最高」 | 需要最深入分析的事 |

出處：Anthropic 幫助文件[^model]，檔位名稱來自介面[^screen]

「最高」旁邊帶著「5× 以上用量」的警告。這是提示用量可能超過五倍，所以只在確實需要時再選。[^screen]

每個模型推薦的投入程度都帶有標記。在這個介面裡，是「中等」旁邊的「推薦」。[^model][^screen] 大多數情況下保持原樣就行。

::: details 和幫助文件的名稱不同時（點選展開）
- 幫助文件把模型選單的位置叫作“傳送按鈕旁邊”。[^model]
- 幫助文件把「超高」叫作「極高」（Extra high），並說只有一部分模型才有。[^model]
- 介面上的「推薦」標記，幫助文件叫作「預設值」。[^model]
:::

### 思考——回答之前先推敲一下嗎

開啟**思考**（Thinking）後，Claude 在回答之前會先拆分問題、規劃方法、比較多條思路。[^model] 這也叫作**擴充套件思考**（extended thinking）。[^start]
幫助文件介紹的開關方法是這樣的：點模型名稱，把滑鼠放在「投入程度」上方，然後開啟或關閉「思考」（Thinking，或「擴充套件」）開關。[^model]
這個開關可能會因套餐和模型而出現。這本指南使用的免費賬號選單裡沒有看到。[^screen] 如果沒有這個開關，這一節讀一讀了解就行。
思考和投入程度是**分開設定的**。任意組合都可以用。[^model] 最新的模型裡，也有無法關閉思考的。[^model]

開啟思考後，回答期間會看到顯示時間流逝的「思考」標記。點回答上方的「思考」欄，可以看到 Claude 是怎麼想的摘要。[^model]
讀這份摘要，就能確認 Claude 是透過哪條路得出結論的。
偶爾會出現提示，說思考在中途斷了、看不到剩下的部分。這時可以換個角度重新提問。[^model]

### 什麼時候調高

**日常的事，預設值就夠了。**[^model] 如果是數學計算、長文件分析、需要經過多個步驟的問題，就試試調高投入程度，或者開啟思考。[^model]
無論選哪種設定，最重要的都是**把問題寫具體**（[第1階段第4章](../00-common/04-prompt-basics.md#好提示詞的5個要素)）。[^model]

同一個問題，只改變投入程度來問一下。你馬上就能感受到快速回答和用心回答的差別。

```
月薪 300 萬韓元的上班族，想在 3 年內攢到 2,000 萬韓元，每個月需要存多少錢？
請分成考慮定期存款利息和不考慮利息兩種情況，把計算過程展示出來。
```

::: details 得到的回答大致是這樣（示例——點選展開）
這是這本指南做的示例。實際的回答會因服務和當時的情況而不同。

> **1. 不考慮利息的情況**
> - 3 年是 36 個月。
> - 2,000 萬韓元 ÷ 36 個月 = 約 55 萬 5,556 韓元
> - 約佔月薪 300 萬韓元的 18.5%。
>
> **2. 考慮定期存款利息的情況**
> - 假設年利率為 ○%來計算。
> - 第一個月存入的錢計息 36 個月，第二個月的錢計息 35 個月……最後一個月的錢計息 1 個月。
> - 把本金合計（每月存入的錢 × 36）和利息合計（○○韓元）加起來，找到正好是 2,000 萬韓元的金額。
> - 每個月約存 ○○萬韓元就行。因為有利息，比第 1 種情況稍微少一點。
>
> 實際利率因產品而異，請用你要辦理的產品的利率重新計算一下。

**確認一下有沒有收到好的回答**：分成兩種情況了嗎？計算過程一行一行看得到嗎？說明了假設利率是百分之幾嗎？第 1 種情況，請自己用計算器除一遍。

:::

<Quiz id="ch202-model-menu" />

## 對話中出現“模型已更換”的提示

偶爾會彈出**“模型已更換”的提示**。包括效能最高的模型在內，有些模型會自動對問題做安全檢查。如果判斷屬於範圍很窄的高風險領域，就會轉給另一個模型來回答。[^switch]
這樣轉交，叫作**回退**（fallback，轉給替你接手的模型）。攻擊性的駭客技術、病毒·毒素之類的生物風險領域等，就屬於這類。[^switch] 大多數問題不會受影響。

模型被更換後，會這樣。[^switch]

- **會彈出提示，回答上會標明回答的模型名稱。** 自動切換預設是開啟的。
- **在這個對話結束之前，會一直停留在更換後的模型上。** 你也可以親自切回原來的模型。但是，如果引起問題的內容還留在對話裡，可能會再次被更換。請改一改前面的訊息，再重新發送。
- **也可能因為不是我輸入的內容而被更換。** 檢查會連記憶、連線的應用、網頁搜尋結果、上傳的檔案一起看。

如果不喜歡自動切換，請在設定 → 「功能」（Capabilities）裡，關閉「訊息被標記時切換模型」（Switch models when a message is flagged）。[^screen] 關閉後，不會更換模型，而是對話暫停，由我自己來選。[^switch]
如果覺得是沒有問題的提問卻被誤攔了，請用「傳送反饋」（Send feedback）告訴他們。[^switch]

<Quiz id="ch202-fallback" />

## 設定介面——語言和介面外觀

點左下角我的名字（首頁圖片裡的 ⑩），會開啟賬號選單。[^signup][^screen]

![點左下角「김하나 · Free」後的賬號選單。最上面的郵箱下面，① 「設定」(Ctrl+Shift+,)，② 「語言」，③ 「獲取幫助」，④ 「升級套餐」，⑤ 「下載應用和擴充套件程式」上標有紅色編號，下面還有「瞭解更多」「獲取 API 金鑰」「退出登入」](../../../guide/10-claude/assets/shot-07-account-menu-marked.png)

姓名和郵箱是改成示例的介面（免費套餐）。**紅色編號和下面列表的編號是同一處。**[^screen]

- ① 「設定」：開啟設定介面。
- ② 「語言」：更改介面語言。
- ③ 「獲取幫助」：向客戶支援提問（[第1章](01-getting-started.md#用不了的時候先試試這些)）。[^support]
- ④ 「升級套餐」：換成付費套餐（[第1章](01-getting-started.md#改成付費前要知道的事)）。
- ⑤ 「下載應用和擴充套件程式」：下載電腦應用、手機應用等。

點 ① 「設定」，設定介面就會開啟。左邊的選單是豎著排列的。

![設定 → 「通用」介面。① 左側選單（「通用」「賬號」「隱私」「付費」「功能」「記憶」「回顧」「時間與專注」「Claude Code」），② 「顯示模式」的「主題」（跟隨系統·淺色·深色圖示），③ 「語音」的「語言」（韓語）上標有紅色編號](../../../guide/10-claude/assets/shot-09-settings-general-marked.png)

這是免費套餐的介面。**紅色編號和下面文字裡的編號是同一處。**[^screen]

① 左側選單中，剛開始只要知道下面這幾個就夠了。[^screen]

| 設定選單 | 在這裡做什麼 | 詳細內容 |
|---|---|---|
| 「通用」 | 主題（淺色·深色）、字型、語音語言 | 這一章 |
| 「賬號」 | 我的名字、「Claude 指示」、已登入的裝置 | [第3章](03-chats.md)、[第5章](05-memory.md) |
| 「隱私」 | 分享過的對話、匯出資料 | [第3章](03-chats.md)、[第9章](09-privacy.md) |
| 「付費」 | 更換套餐、取消、收據 | [第1章](01-getting-started.md#改成付費前要知道的事) |
| 「功能」 | 模型自動切換 | 這一章 |
| 「記憶」 | Claude 記住的內容 | [第5章](05-memory.md) |
| 「時間與專注」 | 休息提醒、勿擾時間 | [第5章](05-memory.md#休息提醒與免打擾時間) |

出處：介面[^screen]，Anthropic 幫助文件[^cancel][^switch][^sessions][^share]

要適用於所有對話的指示，寫在「賬號」裡的「Claude 指示」中。[^screen]
付費套餐裡還有檢視剩餘額度的「用量」（Usage）介面（[第1章](01-getting-started.md#使用額度——5-小時、每週、長度)）。[^best] 這個免費賬號的設定選單裡沒有看到。[^screen]

**更改介面語言**：在賬號選單的 ② 「語言」裡選擇。[^lang][^screen] 網頁版和電腦應用包括韓語在內，可以用 11 種語言。[^lang]
無論介面語言是什麼，Claude 都會**用我使用的語言回答。** 即使介面是英語，用韓語提問，也會用韓語回答。[^lang]
語音模式使用的語言要另外設定。在設定 → 「通用」 → 「語音」的 ③ 「語言」裡選擇（[第10章](10-voice-mobile.md)）。[^screen]

**使用深色介面**：在設定 → 「通用」 → 「顯示模式」的 ② 「主題」裡，點跟隨系統·淺色·深色圖示中的一個。[^screen] 選擇跟隨系統，就會跟著電腦或手機的設定走。[^appearance]
如果覺得文字難讀，可以改一改同一處的「介面字型」或「回答字型」。[^screen] 幫助文件介紹說，字型還可以選「閱讀障礙友好」。不同介面可能有差別。[^appearance]

::: details 和幫助文件的名稱不同時（點選展開）
設定選單的名稱可能因介面而異。

- 幫助文件介紹說，適用於所有對話的指示在新設定介面的「Your Claude」裡。[^new] 這個賬號裡沒有看到「Your Claude」，「賬號」裡的「Claude 指示」就是那個位置。[^screen]
- 語音語言，幫助文件介紹的是設定 → 「功能」 → 語音 → 「語音語言」。[^lang]
:::

<Quiz id="ch202-settings" />

## 親自試一試

1. 把首頁圖片和我的介面比較一下。如果差別很大，就展開「如果你用的是舊介面」框來讀。
2. 點輸入框的「+」按鈕，把選單項逐個讀一遍（不點也可以），然後關上。
3. 點輸入框下面的模型名稱，看一看現在的模型，以及投入程度裡帶「推薦」的是哪一檔。
4. 把上面的儲蓄計算問題，分別用投入程度「低」和「高」各發一次，比較回答。如果看到了思考開關，也點一下「思考」欄，讀一讀摘要。
5. 把設定 → 「通用」裡的「主題」改成深色試試，然後換回你喜歡的那一邊。

## 整理

- 在新的 Claude 介面裡，聊天和 Cowork 合併成一個對話，不用選模式。這本指南以新介面為準（舊介面的說明在摺疊框裡）。
- 側邊選單裡有過去的對話，左下角我的名字裡有設定·語言·「獲取幫助」·「升級套餐」。側邊選單不能關掉，只能展開和收起。
- 用輸入框的「+」或「/」，可以開啟上傳檔案、研究之類的功能。輸入框下面的「手動」·「自動」是許可權模式。
- 在輸入框下面的模型選單裡決定模型·投入程度（思考開關會因套餐·模型而出現）。免費套餐只能選 Sonnet·Haiku。日常的事用推薦值就夠了。
- 被判斷為高風險領域的問題，可能由另一個模型代為回答。可以透過提示和模型標籤知道，也可以在設定 → 「功能」裡關閉。
- 介面語言在賬號選單的「語言」裡改，深色介面和字型在設定 → 「通用」裡改。設定選單的名稱可能因介面而異。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Cowork | 協作模式 | 把多步驟的事整件交出去的功能（[第8章](08-cowork.md)） |
| Sidebar | 側邊選單 | 豎著貼在介面左邊的選單 |
| Recents | 最近專案 | 最近的對話和任務列表 |
| Effort | 投入程度 | 決定每個回答花多少功夫的設定 |
| Extended Thinking | 擴充套件思考 | 回答之前經過仔細推敲階段 |
| Usage Credits | 使用額度 | 和套餐額度分開、用多少付多少錢的用量 |
| Fallback | 回退 | 被安全檢查攔住的問題，由另一個模型接手回答 |
| Dyslexic Friendly | 閱讀障礙友好 | 為閱讀文字有困難的人設計的字型 |

<ChapterDone :chapter="202" />

下一章：[第3章. 管理對話](03-chats.md)

[^screen]: 在 Claude 網頁介面（免費套餐，韓語）上親自確認。輸入框「오늘 어떤 도움을 드릴까요?」周圍沒有「Chat」「Cowork」選項和網頁搜尋開關，側邊選單「고정됨」「최근 항목」，「+」選單「파일 업로드 또는 추가」「Skills」「커넥터 추가」「디자인 시스템」「플러그인 추가」「메모리」，「권한 모드」「수동」·「자동」，模型選單（免費只能選 Sonnet 5.5·Haiku 5.5，沒有思考開關），投入程度「낮음」「중간」（推薦）「높음」「엑스트라」「최대」，賬號選單，設定 → 「일반」的「테마」·「음성」 → 「언어」，設定 → 「계정」的「Claude 지침」，設定 → 「기능」的「메시지가 플래그 지정되면 모델 전환」。（確認日期 2026-10-26）
[^new]: Anthropic 幫助文件，《Claude Cowork and chat are one Claude》。"With the new Claude experience, you ask for all of it in the same conversation, with no mode to choose." / "The new Claude experience is rolling out gradually, starting with Pro and Max plans on web, desktop, and mobile." / "If you're on a Pro or Max plan and your message box still shows "Chat" and "Cowork" options, you don't have it yet." / "One conversation list: Your quick questions and longer tasks live together in Recents." / "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" / "Auto (default on Pro, Max, and Team plans): Claude keeps working without stopping to ask about each step, and automated safety checks run before it takes an action." / "For work with real consequences, like sending messages or changing important files, stay close and review what Claude does." / "Instructions for Claude: Set preferences that apply to every conversation in Settings > Your Claude (or Settings > Account in the older Settings layout)." https://support.claude.com/en/articles/16761823 （確認日期 2026-10-26）
[^chats]: Anthropic 幫助文件，《Delete or rename a conversation》。"Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." https://support.claude.com/en/articles/8230524 （確認日期 2026-10-26）
[^support]: Anthropic 幫助文件，《How to get support》。"Click your initials or name in the lower left corner and select “Get help” from the menu." https://support.claude.com/en/articles/9015913 （確認日期 2026-10-26）
[^appearance]: Anthropic 幫助文件，《Customizing your appearance settings》。"Select from Light, Match System, and Dark under Color mode." / "Select from Default, Match System, and Dyslexic Friendly." / "It's not currently possible to completely disable the sidebar." https://support.claude.com/en/articles/8887527 （確認日期 2026-10-26）
[^start]: Anthropic 幫助文件，《Get started with Claude》。"You can click the "+" button in the lower left or type "/" to view additional options and commands" / "displayed either below your text input (on web and desktop) or at the top of your screen (on mobile)." / "You can also choose how much effort Claude puts into each response and whether it uses extended thinking." https://support.claude.com/en/articles/8114491 （確認日期 2026-10-26）
[^upload]: Anthropic 幫助文件，《Upload files to Claude》。"Click the \"+\" button in the lower left corner of the chat box" https://support.claude.com/en/articles/8241126 （確認日期 2026-10-26）
[^model]: Anthropic 幫助文件，《Change the model, effort, and thinking settings》。"The model menu next to the send button controls three settings: which Claude model you're chatting with, how much effort it puts into each response, and whether it uses thinking." / "The selected model and effort level appear next to the send button." / "Click "More models" to view additional options." / "You can change the model, effort level, or thinking setting at any point in a conversation. Changes apply starting with Claude's next response." / "Higher effort means more thorough responses, but they take longer and use more tokens, so you'll reach your usage limits faster." / "Each model has a recommended effort level, marked as "Default" in the menu:" / "Extra high (xhigh) is designed for long-running coding and agentic tasks" / "Thinking lets Claude spend more time breaking down problems, planning solutions, and exploring different approaches before responding." / "Thinking and effort are separate settings, and you can use any combination of the two." / "Switch the "Thinking" (or “Extended”) toggle on or off." / "Click the "Thinking" section to view Claude's thought process summary and problem-solving approach." / "Occasionally, you may notice that Claude's thinking stops before it's complete, with a message stating that the rest of Claude's thought process is not available." / "For everyday tasks, the defaults work well." / "Whichever settings you choose, be specific about your problem or question." 無法關閉思考的模型列表，英文版和韓文版略有不同。https://support.claude.com/en/articles/8664678 （確認日期 2026-10-26）
[^rn]: Anthropic 幫助文件，《Release notes》（2026 年條目）。"We just launched Claude Haiku 5.5, the cheapest, fastest, and most capable small model we’ve released" / "Sonnet 5.5 is a faster, lower-cost complement to Claude Opus 5.5." / "It performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5." / "We just launched Claude Fable 5.1 and Claude Mythos 5.1, the world’s most advanced models for coding and knowledge work." https://support.claude.com/en/articles/12138966 （確認日期 2026-10-26）
[^pricing]: Anthropic 價格頁面。模型對比表的 Fable 行 " No Usage credits 50% of weekly limits* 50% of weekly limits* "（列 = Free/Pro/Max 5x/Max 20x），Opus 行 Free 沒有，Sonnet·Haiku 行 Free 有。Research 行 Free 沒有，從 Pro 開始有。https://claude.com/pricing （確認日期 2026-10-26）
[^fable]: Anthropic 幫助文件，《Claude Fable models on your plan》。"On Pro plans, standard seats on Team plans, and standard seats on seat-based Enterprise plans, Fable models run on pay-as-you-go usage credits from the start, since they aren’t included in your plan's usage limits." / "No. You can use up to 50% of your weekly limit on Fable models, but your use of other models draws from the same usage limits and you can never use more than your weekly limit." https://support.claude.com/en/articles/15424964 （確認日期 2026-10-26）
[^persona]: Anthropic 幫助文件，《Adapt to new model personas after deprecations》。"historically Anthropic has deprecated most models around a year after their initial release." / "you can ask Claude to review some of the conversations you’ve most appreciated and to craft instructions for itself based on those." https://support.claude.com/en/articles/12738598 （確認日期 2026-10-26）
[^switch]: Anthropic 幫助文件，說明對話中模型為什麼被更換的文件（文件標題裡帶有當前的模型名稱，所以這本指南里不寫出）。"Offensive cybersecurity techniques, such as building exploits, malware, or attack tooling." / "so a block can be triggered by content you didn't type." / "You’ll see a notice explaining that the model switched, and the response will be labeled with the model that answered." / "Editing your previous message before retrying often helps." / "With automatic model switching off, a blocked request pauses the conversation instead of switching models." / "Use "Send feedback" to report it." https://support.claude.com/en/articles/15363606 （確認日期 2026-10-26）
[^signup]: Anthropic 幫助文件，《How do I sign up for the Pro plan?》。"Navigate to Settings > Billing and click the “Upgrade plan” button." 設定透過左下角名字的首字母（或名字）→ 「設定」開啟。https://support.claude.com/en/articles/8325609 （確認日期 2026-10-26）
[^cancel]: Anthropic 幫助文件，《Cancel your Pro or Max subscription》。"Navigate to Settings > Billing and click the “Cancel” button." https://support.claude.com/en/articles/8325617 （確認日期 2026-10-26）
[^best]: Anthropic 幫助文件，《Usage limit best practices》。"you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." https://support.claude.com/en/articles/9797557 （確認日期 2026-10-26）
[^lang]: Anthropic 幫助文件，《How to use Claude in your preferred language》。"Claude is available in multiple languages on web and desktop applications." / "Go to the "Language" section." / "Claude will converse with you in the language you use." / "go to Settings > Capabilities, then find Voice > Spoken language and choose a language." https://support.claude.com/en/articles/10769299 （確認日期 2026-10-26）
[^sessions]: Anthropic 幫助文件，《Managing your active sessions》。"Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." https://support.claude.com/en/articles/13124001 （確認日期 2026-10-26）
[^share]: Anthropic 幫助文件，《Share a chat with specific people》。"You can also review everything you've shared from Settings > Privacy under Shared chats." https://support.claude.com/en/articles/16762496 （確認日期 2026-10-26）
