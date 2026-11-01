# 第4章 檔案與工件——展示給它看，讓它做出來

> **一句話總結**：難以用語言說明的資料，就**上傳檔案**給它看；需要的文件、表格、簡報，就讓它**生成檔案**。
> 值得給別人看的成果，會作為**工件**（Artifact）在對話旁邊開啟，可以修改和分享。不過，Claude 不會生成照片或插畫。

介面以 2026 年 10 月的網頁版為準。新的 Claude 介面和新的設定介面正在陸續推送，所以你看到的介面可能不一樣。手機應用支援的功能略有不同。

## 上傳檔案

點輸入框左下角的「+」按鈕，選擇 ① 「上傳或新增檔案（파일 업로드 또는 추가）」。鍵盤快捷鍵是 Ctrl+U。[^screen] 也可以把檔案拖到輸入框裡。照片可以直接複製後貼上進去。[^upload]

![展開輸入框「+」選單的介面。① 「上傳或新增檔案」，② 「Skills」，③ 「新增聯結器」，④ 「設計系統」，⑤ 「新增外掛」，⑥ 「記憶」都標有紅色編號](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

這是免費套餐的介面。**上傳檔案時，只用 ① 就夠了。**[^screen][^upload-name] ⑥ 「記憶」在[第3章](03-chats.md)和[第5章](05-memory.md)裡講。

可以上傳的東西如下。[^upload]

| 種類 | 格式 |
|---|---|
| 照片 | JPEG、PNG、GIF、WebP |
| 文件 | PDF、Word（DOCX）、文字（TXT）、RTF、ODT、EPUB、HTML |
| 表格 | Excel（XLSX）、CSV |
| 其他 | JSON |

Excel 檔案（XLSX）只有在設定裡打開了「程式碼執行和檔案生成」才能上傳。這個設定在下一節裡講。[^upload]

與其只上傳檔案然後說"幫我看看"，不如同時寫清楚你想要什麼。這樣得到的回答會有用得多（[第1階段第4章](../00-common/04-prompt-basics.md#好提示詞的5個要素)）。

```
附上的 PDF 是我們小區的物業費通知單。
請找出比上個月漲得最多的三項，用表格列出來，並用一行字寫出可能漲價的原因。
不確定的內容請標註"推測"。
```

::: details 收到的回答大概是這樣（示例——點選展開）
這是本指南編寫的示例。實際的回答會因服務和每次情況而不同。

> 下面是比上個月漲得最多的三項。
>
> | 專案 | 上個月 | 這個月 | 漲價原因 |
> |---|---|---|---|
> | 取暖費 | ○○韓元 | ○○韓元 | 可能是天氣變冷，取暖用得更多了（推測） |
> | 電費 | ○○韓元 | ○○韓元 | 可能是公共用電增加了（推測） |
> | 維修費 | ○○韓元 | ○○韓元 | （通知單說明裡寫的原因） |

**檢查一下有沒有收到想要的結果**：漲得最多的三項是不是用表格給出來了？表格裡的金額和我的通知單一致嗎？每項都用一行字寫了原因嗎？通知單上沒有依據的原因，有沒有標註"推測"？

:::

需要知道的事。[^upload]

- **一個對話最多可以上傳 20 個檔案。**
- **PDF 最多 1,000 頁。** 100 頁以內，連圖片和圖表都會讀取。從第 101 頁起，只讀取文字。如果圖片對你很重要，請只擷取需要的頁再上傳。
- **PDF 以外的文件只讀取文字。** 放在 Word 檔案裡的圖片讀不出來。如果圖片重要，請轉成 PDF 再上傳。
- **照片最好寬和高都在 1,000 畫素以上。**
- **說 PDF 頁碼時，請用螢幕上的頁碼。** 不是文件上印的頁碼，而是 PDF 閱讀軟體上顯示的頁碼。

檔案太大上傳不了的話，可以分開上傳。

::: details 單個檔案最大能上傳多少？（點選展開）
單個檔案的大小上限，不同的文件寫法不同。上傳檔案的幫助文件寫的是每個檔案 500MB。[^upload] 生成檔案功能的幫助文件寫的是，上傳和下載都是每個檔案 30MB。[^create]
:::

> 身份證、合同、病歷這類包含個人資訊的檔案，上傳之前請先遮住或去掉相關部分。原則在[第1階段第9章](../00-common/09-safety.md#_2-個人資訊和機密——放進去之前先想一想)裡講過。

<Quiz id="ch204-upload" />

## 讓它生成檔案——Excel、Word、PowerPoint、PDF

Claude 的回答不只有文字，也可以**生成檔案**給你。可以下載，也可以直接儲存到 Google Drive。[^create]

| 生成的檔案 | 例子 |
|---|---|
| Excel（.xlsx） | 家庭賬本、日程表 |
| Word（.docx） | 通知、報告 |
| PowerPoint（.pptx） | 簡報 |
| PDF | 用於列印的文件 |
| PNG 圖片 | 用數字畫出的圖表 |

包括免費套餐在內，所有套餐都可以使用。網頁、桌面端、手機應用都可以。[^create] 公式保持有效的表格檔案（電子表格）和可以用 PowerPoint 開啟的簡報也能生成。[^new]

**先看看設定是否已經開啟。** 個人套餐（Free·Pro·Max）一開始就是開啟的。[^create] 如果是關閉的，請在「設定 > 功能」（Capabilities）裡開啟 ④ 「程式碼執行和檔案生成」。[^create][^create-name]

![「設定 > 功能」介面。① 「訊息被標記時切換模型」，② 「工件」，③ 「聊天內視覺化」，④ 「程式碼執行和檔案生成」開關都標有紅色編號](../../../guide/10-claude/assets/shot-09-settings-capabilities-marked.png)

這是免費套餐的介面。**紅色編號對應下面表格裡的同號內容。**[^screen]

| 編號 | 名稱 | 作用 |
|---|---|---|
| ① | 「訊息被標記時切換模型」 | 觸發安全機制時，換另一個模型繼續 |
| ② | 「工件」 | 在對話旁邊的窗口裡生成成果 |
| ③ | 「聊天內視覺化」 | 在對話裡畫圖表、圖示 |
| ④ | 「程式碼執行和檔案生成」 | 生成文件、表格、簡報、PDF |

② 「工件」下面寫著"需要程式碼執行和檔案生成"。④ 下面寫著"使用 Skills 需要"。[^screen] 想讓它生成檔案，只要確認 ④ 是開啟的就行。

提出要求時，請具體寫明想要的結構、內容和格式。[^create]

```
請做一個記錄每月生活費的 Excel 表格。
專案有餐飲費、交通費、通訊費、其他，最下面自動計算各項合計和月合計。
```

也可以先上傳一個已有的檔案，讓它修改。

```
附上的 Word 檔案是社群讀書會的通知。
請把日期改成 11 月 14 日星期六下午 2 點，在最下面加上需要準備的物品清單，再重新生成一個 Word 檔案。
```

需要知道的事。

- **生成檔案通常比對話更耗用量。**[^create] 使用額度在[第1章](01-getting-started.md)裡講過。簡短的問題就用文字回答，真的需要檔案時再讓它生成檔案。
- **收到的數字要核對。** Claude 會做計算，但複雜或重要的計算，請用其他計算軟體或手算再核對一遍。[^math] 哪怕只親自加幾個合計也好。
- **上傳的檔案或網站裡，可能藏有隱藏指令。** 使用這個功能的時候要盯著 Claude，如果它用了莫名其妙的資料，就讓它停下來。[^create] 隱藏指令在[第1階段第9章](../00-common/09-safety.md#_4-隱藏指令——提示詞注入)裡講過。

<Quiz id="ch204-create" />

## 工件——在對話旁邊開啟的成果

**工件**（Artifact，生成出來的成果）是值得給別人看的成果。比如文件、簡報、設計、小工具。它在對話旁邊的欄裡開啟，可以修改、以後再開啟，也可以和別人分享。[^artifacts]
包括免費套餐在內，所有套餐都可以使用。前一節的「程式碼執行和檔案生成」必須是開啟的。[^artifacts]

它很容易和前一節的生成檔案混淆。區別在於接收的方式。[^academy-artifacts]

| | 工件 | 生成檔案 |
|---|---|---|
| 在哪裡開啟 | Claude 裡面，對話旁邊的欄 | 下載後用其他軟體開啟 |
| 怎麼分享 | 用連結分享 | 把檔案發出去 |

如果成果要在 Claude 裡繼續修改，或者用連結分享，就選工件。如果需要原樣的 Word、Excel 檔案，就用生成檔案。工件之後也可以匯出成 Word、PDF 之類的檔案（見下面的「匯出成檔案」）。[^artifacts]

![傳送下面通知提示詞後的介面。中間的對話裡出現了「讀書會通知 · Claude Design · 僅自己」卡片，右邊欄裡打開了用大字寫著日期、時間、地點的 A4 通知](../../../guide/10-claude/assets/shot-16-design-panel.png)

*這是用下面的通知提示詞做出來的介面。右邊欄上方有下載按鈕和「Fill」「Fit」（顯示大小）按鈕。卡片上的「僅自己」表示目前只有我能看到。對話和工件在拍完後已刪除。*[^screen-design]

生成的方法有三種。[^artifacts]

- 在對話裡直接提出要求。
- 點輸入框的「輸出」（Output），選擇模板（文件、簡報之類的模板）。
- 在側邊選單的「工件」標籤頁裡選擇模板。

![點選側邊選單「工件」後的介面。① 上方的「全部」「我的專案」「與我共享」標籤頁，② 「建立新內容」下面的「文件」「幻燈片」「設計」卡片都標有紅色編號](../../../guide/10-claude/assets/shot-10-artifacts-marked.png)

這是免費套餐的介面。免費賬號的 ② 「建立新內容」裡也能看到「文件」「幻燈片」「設計」。三個都帶有「新」標記。[^screen] 這些卡片就是第三種方法裡的模板。用 ① 的標籤頁，可以把我做的和別人分享給我的分開檢視。[^screen]

```
請做一份發給社群讀書會會員的一頁通知。
聚會日期是 11 月 14 日星期六下午 2 點，地點是區立圖書館 2 樓研討室，這次讀的書是《小王子》。
讀者大多是 60 歲以上的人，所以字要大，句子要短。
```

想要得到工件時，請要**成果本身，而不是內容**。[^academy-artifacts]

- 不太好的例子："整理一下第 3 季度業績。"
- 更好的例子："把第 3 季度業績做成給各位組長看的一頁文件。"

區別只有一點。更好的例子說出了要做出什麼東西。如果一定要工件，就再加一句"做成工件"。[^academy-artifacts]

**也要說明誰來使用。** 上面的通知例子裡寫的"讀者大多是 60 歲以上的人"就是這個意思。"給新員工看的流程圖"和"給技術團隊看的流程圖"，做出來是不一樣的。[^academy-artifacts]

**充分聊過之後再生成比較好。** 當 Claude 已經理解了問題，做出的成果最好。[^academy-artifacts] 可以在一起完成分析之後，再請它做簡報。

做好的工件都會儲存在側邊選單的「工件」標籤頁裡。在任何對話裡都能再找到它們。[^artifacts]

**只改需要改的地方。** 在文件工件裡，用滑鼠選中要改的文字，點「用 Claude 編輯」（Edit with Claude）。然後寫下你想要的就可以了。[^artifacts] 不用再用語言說明是哪一部分。

**換個方向再試一次。** 修改之前發的訊息並重新發送，對話就會出現另一個分支。這個分支裡也會單獨生成工件，所以不會丟掉之前做的。[^artifacts]

**匯出成檔案。** 點「匯出」（Export），就能得到可以用其他軟體開啟的檔案。[^artifacts]

| 做出的東西 | 可以匯出的格式 |
|---|---|
| 文件 | Word、PDF、Markdown、Google 文件 |
| 簡報 | PowerPoint、PDF、Google 幻燈片 |
| 動畫（Team·Enterprise 專用測試版） | MP4 影片 |

需要知道的事。[^artifacts]

- **出錯時，請點「嘗試用 Claude 修復」。** 不過不保證一定能修好。
- **在手機應用裡可以提要求、檢視和修改。** 分享設定要在網頁或桌面應用裡修改。
- **2026 年 9 月 16 日之前做的叫「舊版工件」。** 可以繼續使用，但不能再用那種方式新建了。

<Quiz id="ch204-artifacts" />

## 分享工件

工件**一開始只有我能看到。** 在你分享之前，誰也看不到。[^share]

1. 開啟工件，點「分享」。
2. 選擇誰可以看。Pro·Max 套餐可以在「僅自己」和「任何拿到連結的人」之間選擇。
3. 複製連結併發出去。

<!-- 需要截圖：工件「分享」視窗——「僅自己」「任何拿到連結的人」和許可權選擇（網頁） -->

許可權有三級。根據工件的種類，只能選其中一部分。[^share]

| 許可權 | 能做的事 |
|---|---|
| 「可檢視」 | 開啟檢視、閱讀評論 |
| 「評論者」 | 在上面的基礎上，可以寫評論、下載檔案 |
| 「可編輯」 | 在上面的基礎上，可以修改 |

需要知道的事。[^share]

- **開啟的人也必須有 Claude 賬號。** 沒有賬號的話，即使有連結也打不開。這是和對話公開連結（第3章）不同的地方。
- **想停止展示時，** 在「分享」裡改成「僅自己」（Pro·Max）。
- **別人發來的工件，要像對待陌生人發來的檔案一樣對待。**

::: details 如果是免費套餐（點選展開）
免費套餐能不能用「任何拿到連結的人」來分享，不同的文件寫法不同。請以你的「分享」窗口裡顯示的選項為準。
:::

<Quiz id="ch204-share" />

## 用眼睛看的回答——卡片、反問、圖示

根據問題的不同，Claude 有時會不用文字，而是用**看得見的形式**來回答。不需要另外開啟什麼。Claude 會自己判斷，所以像平時一樣提問就行。[^visual]

**天氣、菜譜卡片。** 問天氣或做菜的方法，它可能用卡片的形式回答。需要開啟網頁搜尋。[^visual] 新介面裡沒有網頁搜尋的開關，Claude 會在需要時自己去搜索。[^new][^old-search] 在菜譜卡片裡，可以更改幾人份和計量單位。[^visual] 天氣卡片只能在網頁和桌面端看到，在手機上會以文字顯示。[^visual]

**選擇式回答。** Claude 反問你的時候，可能會彈出單選題、多選題、排序之類的選項。點選回答也可以，直接用文字回答也可以。[^visual]

**圖示和圖表。** 如果想把說明變成圖來看，就這樣提要求。它會在對話裡畫出流程圖、圖表、可以點選檢視的圖。這個功能叫**自定義視覺化**（Custom visuals）。它是測試版（正式釋出前的試用版），可以在網頁和桌面應用裡使用。[^custom] 「設定 > 功能」裡也有 ③ 「聊天內視覺化」開關。說明是"允許 Claude 在對話中直接生成互動式視覺化、圖表、圖示"。[^screen]

```
請把醃泡菜的順序，從醃白菜到裝進泡菜桶，畫成分步驟的流程圖。
```

![對話裡畫出的醃泡菜流程圖。醃白菜 → 洗白菜這一行，和處理調料材料 → 拌調料這一行，在中間的「把餡料塞進白菜葉之間」處匯合，最後是「裝進泡菜桶」](../../../guide/10-claude/assets/shot-16-custom-visual.png)

*這是在隱身聊天裡傳送上面提示詞後的介面。把滑鼠放在圖上，也沒有看到「複製為圖片」「儲存為工件」選單。*[^screen-design]

自定義視覺化像畫在白板上的畫一樣，是**不會另外儲存的臨時圖**。幫助文件介紹了保留它的三個選單。上面的介面裡沒有看到這些選單，所以請先看看你的介面裡有沒有。[^custom][^screen-design]

- 「複製為圖片」：複製成圖片，貼上到筆記或簡報裡。
- 「下載」：以 .svg 或 .html 檔案下載。
- 「儲存為工件」：變成工件，繼續修改。

自定義視覺化在手機應用（iPhone·Android）裡看不到。[^custom]

<Quiz id="ch204-visuals" />

## 不會生成照片和插畫

Claude **不會像畫圖 AI（影像生成工具）那樣生成照片或插畫。**[^images] 即使你要它"畫一隻在海邊笑的小狗"，也很難期待得到畫圖 AI 那樣的畫。

不過它能做另外一些事。

- **圖示和圖表**是可以做的。就是前一節的自定義視覺化。[^images] 數字圖表也可以作為 PNG 圖片檔案收下來。[^create]
- **看你上傳的照片並加以說明**也可以。比如把收據照片整理成表格。[^images]

比較一下不太好的例子和更好的例子。

- **不太好的例子**："給我們店畫一隻可愛的貓，用來宣傳。"
- **更好的例子**："把我們店過去 6 個月的銷售額畫成柱狀圖。"

區別只有一點。前者是該由畫圖 AI 來畫的插畫，後者是 Claude 能做的圖表。如果一定需要照片或插畫，請用其他生成圖片的服務。比如 ChatGPT 就能生成圖片（[ChatGPT 第4章](../11-chatgpt/04-files-images.md)）。

<Quiz id="ch204-images" />

## Claude Docs——一起寫的文件

**Claude Docs** 是和 Claude 一起、也和其他人一起修改的文件。Claude 會當著你的面寫初稿。寫之前它會先問你不清楚的地方，並用評論說明為什麼這樣寫。[^docs]
包括免費套餐在內，所有套餐都可以使用，而且一開始就是開啟的。[^docs] 做好的文件儲存在「工件」標籤頁裡。

開始的方法如下。[^docs]

- 在對話裡請它做一份文件。
- 在訊息最前面寫上 `/docs`。
- 選擇輸入框的「輸出」→「文件」。

好的要求裡包含**這份文件用來做什麼、誰來讀、要講什麼**。[^docs]

- **不太好的例子**："寫一份家庭旅行計劃文件。"
- **更好的例子**：像下面這樣寫上用途、讀者和內容。

```
/docs 請做一份 12 月全家去濟州島旅行的計劃文件。
用途：發到家庭群裡，收集大家的意見。
讀者：父母和兄弟姐妹的家人，一共 8 個人。
要講的內容：3 天 2 夜的日程、兩個候選住處、預計費用、每個人要準備的東西。
```

區別有三點。更好的例子裡包含了用來做什麼、誰來讀、要放什麼。這就是好的要求裡包含的三樣東西。[^docs]

需要知道的事。[^docs]

- **想讓它修改時，請在評論裡 @ 一下 `@Claude`。** 修改之後它會說明理由。
- **可以用「匯出」得到 Word、PDF、Markdown、Google 文件。**
- **文件裡的圖表不會自動更新。** 數字變了的話，請再叫它更新一次。
- **刪除後無法恢復。** 沒有回收站。刪除前請先用匯出儲存一份。

<Quiz id="ch204-docs" />

## 在 Google 文件、表格、幻燈片裡使用

如果你已經在用 Google 文件或表格工作，也可以在那個檔案裡呼叫 Claude。這是一個叫 **Claude for Google Workspace** 的擴充套件程式。Google 文件、表格、幻燈片裡會多出一個 Claude 欄（側邊欄）。它是測試版，Pro 及以上的付費套餐可以使用。[^gws]

1. 在 Google Workspace Marketplace（Google 應用市場）裡安裝 Claude。安裝一次，在文件、表格、幻燈片裡都能用。
2. 開啟檔案，點「擴充套件程式 > Claude > 開啟 Claude」。

<!-- 需要截圖：Google 表格右側開啟 Claude 側邊欄的介面（示例表格） -->

```
把這張表格 B 列的金額全部加起來，把合計填進最下面的格子。別動其他格子。
```

需要知道的事。[^gws]

- **只讀取現在開啟的那個檔案。**
- **一開始修改前會先問你。** 預設模式是「編輯前詢問」。也可以改成「接受所有編輯」，但一開始建議一項一項確認。
- **修改的內容會以我的名義記錄在版本記錄裡。** 如果不滿意，在「檔案 > 版本記錄」裡恢復到之前的版本就行。
- **它不能分享檔案，也不能更改許可權。** 即使你要求，它也不會做。
- **在 Word、Excel、PowerPoint 檔案裡不能用。** 請先轉換成 Google 格式。
- **工作過程中不要關閉 Claude 欄。** 關閉的話，正在做的事就會停下來。一次任務最長 6 分鐘，所以大的工作請拆開交給它。
- **在 Chrome、Edge、Safari 裡可以用。** Firefox 不行。

<Quiz id="ch204-google" />

## 再看看影片

這是公司自己製作的介紹影片。畫面和功能名稱可能與本章的說明不同。

> 下面的影片是**英語**的。在 YouTube 影片的設定（齒輪）→ 字幕 → **自動翻譯 → 中文**裡選擇，就能看中文字幕。影片可以直接在本頁面裡播放。

**[Meet Claude Slides, Claude Design and Claude Docs](https://www.youtube.com/watch?v=To5nrYqvR44)** · Claude · 適合想看看如何在對話裡做出簡報、宣傳圖片、一頁文件的人（2026 年 9 月，2 分鐘）

<YouTube id="To5nrYqvR44" title="Meet Claude Slides, Claude Design and Claude Docs" />

## 親手試一試

1. 拍一張家裡的收據，透過「+」→「上傳或新增檔案」上傳，並要求"把上面寫的內容整理成表格"（姓名和卡號要遮住）。
2. 讓它做上面的生活費 Excel 表格，並下載。在表格裡填幾個數字，確認合計會正確變化。
3. 把讀書會通知做成工件，試著讓它改日期。如果是以文件工件的形式開啟的，就選中日期部分，點「用 Claude 編輯」試試。
4. 傳送"把醃泡菜的順序畫成流程圖"，看看流程圖會不會畫在對話裡。如果圖上有「儲存為工件」選單，就點一下試試。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：上傳示例檔案 minutes-last-meeting.txt，然後傳送"把已決定的事、要做的事、還沒決定的事分成表格。要做的事要寫上負責人和期限，沒有期限的事寫上「期限未定」"。第 3 項的通知，請用 memo-next-month.txt 的內容來做。

## 小結

- 透過「+」→「上傳或新增檔案」上傳照片、文件、表格。一個對話 20 個，PDF 最多 1,000 頁。
- PDF 在 100 頁以內連圖片也會讀取，之後只讀文字。PDF 以外的文件只讀文字。
- 可以讓它生成 Excel、Word、PowerPoint、PDF 檔案。需要開啟「程式碼執行和檔案生成」，而且會多耗用量。
- 工件是在對話旁邊開啟的成果。它們彙集在「工件」標籤頁裡，用「用 Claude 編輯」修改，用「匯出」得到檔案。
- 工件一開始只有我能看到。收到分享的人也必須有 Claude 賬號才能開啟。
- 自定義視覺化是不會儲存的臨時圖。想保留的話，就複製、下載或儲存為工件。
- Claude 不會生成照片和插畫。圖示和圖表可以做。
- Claude Docs 要寫明用途、讀者、內容再提要求。刪除後無法恢復。
- 在 Google 文件裡也能使用（Pro 及以上的測試版）。修改的內容可以透過版本記錄恢復。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Upload | 上傳 | 把我裝置裡的檔案傳到服務裡 |
| Artifact | 工件 | 在對話旁邊開啟的、值得給別人看的成果 |
| Template | 模板 | 開始寫文件、簡報的框架 |
| Export | 匯出 | 得到可以用其他軟體開啟的檔案 |
| Custom visuals | 自定義視覺化 | 在對話裡畫出的圖示和圖表 |
| Beta | 測試版 | 正式推出前正在試用的功能 |
| Claude Docs | Claude 文件 | 和 Claude、其他人一起修改的文件 |
| Extension | 擴充套件程式 | 給其他軟體新增功能的小程式 |
| Version history | 版本記錄 | 記錄檔案變化過程的歷史 |

<ChapterDone :chapter="204" />

下一章：[第5章. 記憶與個性化設定](05-memory.md)

[^screen]: 在 Claude 網頁介面（免費套餐，韓語）中直接確認。 "파일 업로드 또는 추가" / "코드 실행 및 파일 생성" / "코드 실행 및 파일 생성에 필요" / "Skills 사용에 필요합니다" / "채팅 내 시각화" / "새로운 무언가 만들기" (確認日期 2026-10-26)
[^upload]: Anthropic 幫助文件，「Upload files to Claude」. "Claude can work with the following document types:" / "Note: You must enable code execution and file creation in your account to upload XLSX files." / "Claude supports the following image formats:" / "Click the "+" button in the lower left corner of the chat box" / "You can also copy images and paste them from your clipboard into Claude." / "File size: 500MB per file" / "Number of files: Up to 20 files per chat" / "You can't upload PDFs over 1000 pages." / "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / "Claude extracts text only from these files. If they contain embedded images, Claude won't be able to read or interpret them." / "For images: Use images that are 1000x1000 pixels or larger." / "use the PDF page numbers as shown in your PDF viewer, not the page numbers printed on the document itself." https://support.claude.com/en/articles/8241126 (確認日期 2026-10-26)
[^create]: Anthropic 幫助文件，「Create and edit files with Claude」. "Code execution and file creation is available to all Claude users (Free, Pro, Max, Team, and Enterprise) on the web, Claude Desktop, and Claude Mobile." / "Code execution and file creation is enabled by default" / "Be specific in your requests—describe the structure, content, and formatting you want." / "Enable file creation from Settings > Capabilities by toggling Code execution and file creation (called Create and edit files in the updated Settings layout) on." / "You can download the files Claude creates or save them directly to Google Drive." / "Claude can create data visualizations in image files like PNG." / "The maximum file size is 30MB per file for both uploads and downloads." / "Note that creating files will use more of your limit compared to normal chats with Claude." / "we recommend you monitor Claude while using the feature and stop it if you see it using or accessing data unexpectedly." https://support.claude.com/en/articles/12111783 (確認日期 2026-10-26)
[^new]: Anthropic 幫助文件，「Claude Cowork and chat are one Claude」. "Claude can create documents, spreadsheets with working formulas, and presentations you can open in PowerPoint." / "Web search: There's no web search toggle. Claude searches the web when it helps." https://support.claude.com/en/articles/16761823 (確認日期 2026-10-26)
[^math]: Anthropic 幫助文件，「How does Claude handle mathematical equations and calculations?」. "complex or mission-critical calculations should be verified using specialized mathematical software or manual methods." https://support.claude.com/en/articles/10366421 (確認日期 2026-10-26)
[^artifacts]: Anthropic 幫助文件，「What are artifacts and how do I use them?」. "It opens beside your conversation, and you can edit it, come back to it, and share it with others." / "Artifacts are available on Free, Pro, Max, Team, and Enterprise plans" / "Important: Artifacts require Cloud code execution and file creation (called Create and edit files in the updated Settings layout) to be turned on in Settings > Capabilities (Free, Pro, Max)" / "Ask for one in any chat, select "Output" in the message box and choose a template, or pick one in the Artifacts tab." / "Everything you make is saved to the Artifacts tab in your Claude sidebar, so you can find it again from any conversation." / "highlight the text you want changed, click "Edit with Claude," and type your request." / "Edit an earlier message to create a different version of the chat, with its own artifacts" / "Docs export to Word, PDF, Markdown, and Google Docs." / "Export the result as an MP4 video. Available on Team and Enterprise plans." / "Claude will attempt to fix the error, but success isn't guaranteed." / "To change sharing settings, use Claude on the web or Claude Desktop." / "Note: Legacy artifacts are artifacts made in a chat before September 16, 2026." https://support.claude.com/en/articles/17153992 (確認日期 2026-10-26)
[^share]: Anthropic 幫助文件，「Share artifacts」. "Artifacts start private to you. Nothing is shared until you share it." / "Open the artifact and click "Share."" / "Pro and Max plans: "Only you" or "Anyone with the link."" / "Everything in Commenter, plus make changes." / "Everyone needs a Claude account. People without one can't open a shared artifact, even with the link." / "choose "Only you" (Pro and Max) or "Only people invited" (Team and Enterprise)." / "Treat someone else's artifact the way you'd treat a file from an unknown sender." https://support.claude.com/en/articles/9547008 (確認日期 2026-10-26)
[^visual]: Anthropic 幫助文件，「Visual and interactive content」. "Data display widgets (weather and recipes) require web search to be enabled." / "On mobile (iOS and Android), Claude provides weather information as text in the conversation." / "change the number of servings or the units of measurement, or click “Get cooking” to launch a step-by-step interface" / "Claude may present interactive options you can click or tap — like multiple choice questions, multi-select options, or a ranking interface." / "Claude decides when a visual response is appropriate based on your question. Just ask naturally." https://support.claude.com/en/articles/13641943 (確認日期 2026-10-26)
[^custom]: Anthropic 幫助文件，「Custom visuals in chat and Cowork」. "Note: Custom visuals are currently in beta and available to all Claude users on web and desktop, in both chat and Cowork." / "Custom visuals are ephemeral by default." / "Download — save the visual as an .svg or .html file." / "They don’t render on Claude for iOS or Claude for Android." https://support.claude.com/en/articles/13979539 (確認日期 2026-10-26)
[^images]: Anthropic 幫助文件，「Can Claude produce images?」. "Claude doesn’t generate photos or illustrations the way image-generation tools do." / "These are generated using HTML and SVG—so you can interact with them, ask follow-up questions, and have Claude adjust them as you go." / "Claude can also view and analyze images you upload." https://support.claude.com/en/articles/9002504 (確認日期 2026-10-26)
[^docs]: Anthropic 幫助文件，「Get started with Claude Docs」. "Claude drafts it in front of you, asks clarifying questions up front, and leaves comments explaining its choices." / "Claude Docs is available on Free, Pro, Max, Team, and Enterprise plans, and it's on by default." / "You can also start your request with /docs, or by selecting “Output” then “Docs” from the message box." / "A good request says what the doc is for, who will read it, and what it should cover." / "To ask Claude for an edit, mention @Claude in a comment." / "To export a doc, click "Export" and choose a format:" / "Charts and diagrams don't update on their own" / "Deleting a doc is permanent. There's no trash" https://support.claude.com/en/articles/16923645 (確認日期 2026-10-26)
[^gws]: Anthropic 幫助文件，「Use Claude in Google Docs, Sheets, and Slides」. "Claude for Google Workspace is available in beta for Pro, Max, Team, and Enterprise plans." / "One install covers Docs, Sheets, and Slides." / "Open a Google Docs, Sheets, or Slides file and go to Extensions > Claude > “Open Claude"" / "Claude reads the file you have open, and only that file" / "Ask before edits (default)" / "Google records them under your name, so they appear in File, Version history like any edit you make yourself." / "Claude cannot share the file, give anyone access, or change who owns it." / "Google doesn’t support extensions in Word, Excel, or PowerPoint files" / "Keep the sidebar open while Claude is working. Closing it stops the current task." / "A single long operation can run for up to six minutes before Google stops it." / "Use Chrome, Edge, or Safari. Firefox is not supported in this beta" https://support.claude.com/en/articles/16951679 (確認日期 2026-10-26)
[^academy-artifacts]: Claude Academy「Claude 101」課程 「Creating with artifacts」. "The practical difference: an artifact opens and updates right in Claude and is shared by link, while file creation hands you a file to download and open in other apps." / "If you want to ensure Claude creates an artifact, just say so: "Create this as an artifact."" / "Ask for the deliverable, not just the content." / "Describe the end user." / "The best artifacts come at the end of a conversation, when Claude already understands the problem." https://academy.claude.com/courses/claude-101/creating-with-artifacts (確認日期 2026-10-26)
[^upload-name]: 幫助文件裡，① 選單的名稱寫的是「新增檔案或照片」（Add files or photos）。名稱可能因介面而異。
[^create-name]: 幫助文件寫的是，在新的設定介面裡這個名稱是「建立和編輯檔案」（Create and edit files）。名稱可能因介面而異。
[^old-search]: 如果是舊介面，請把網頁搜尋開關開啟（[第6章](06-search.md)）。
[^screen-design]: 傳送本節的通知提示詞和醃泡菜流程圖提示詞後直接確認。在隱身聊天裡，Claude 說"Claude Docs는 시크릿 모드 대화에서는 만들 수 없어서(문서가 계정에 남기 때문입니다)"，並把通知以文字寫在了對話裡；在普通對話裡，「Claude Design · 나만」工件在右側欄裡開啟。Claude 指出最初提示詞裡的「11月15日星期六」實際上是星期日，所以本指南把示例日期改成了 11 月 14 日星期六。流程圖在隱身聊天裡也畫出來了（確認日期 2026-10-28，網頁，免費（Free）套餐）
