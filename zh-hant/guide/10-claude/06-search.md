# 第6章 搜尋與研究——連同來源一起獲取最新資訊

> **一句話總結**：今天發生的事、經常變化的資訊，用**網頁搜尋**；需要彙集多份資料來比較的大問題，就交給**研究**（Research）。
> 不管用哪一種，都要把附帶的來源親自開啟看一看，這才算完整的一套。

介面以 2026 年 10 月的網頁版為準。現在新的 Claude 介面正在陸續推送，所以選單名稱和位置可能因介面而異。

## 網頁搜尋——讓 Claude 去網上找

AI 只知道它學習到某個時間點為止的內容（[第1階段第1章](../00-common/01-what-is-llm.md)裡的"知識截止時間"）。
所以像"這周的天氣""昨天釋出的政策"這樣的近期事情，直接問很容易答錯。
**網頁搜尋**（web search）是讓 Claude 去網際網路上查詢最新資訊再回答的功能。[^search]
免費套餐也可以使用。[^pricing]

不需要另外開啟什麼。新介面裡沒有網頁搜尋的開關，Claude 會在有幫助時自己去搜索。[^search][^new] 免費賬號的「+」選單裡也沒有「網頁搜尋」。[^screen]

::: details 如果你在用舊介面（點選展開）
在舊介面裡，點輸入框左下角的「+」，選擇「網頁搜尋」。開啟後，旁邊會出現一個勾選標記。再點一下就關閉了。[^search]

<!-- 需要截圖：舊介面輸入框「+」選單裡「網頁搜尋」被勾選的樣子 -->
:::

如果一定要它搜尋，可以在提示詞裡寫上"在網上搜索"。[^search]

```
請在網上搜索。告訴我這個週末首爾的天氣，分星期六和星期日說明，
並把參考過的網站也一起給我。
```

遇到需要照片的問題，它有時會把搜尋到的**圖片**放在回答旁邊。不需要另外設定。[^search]

> 這裡說的搜尋是**網際網路搜尋**。查詢我過去的對話是另一個功能。請看[第3章](03-chats.md)和[第5章](05-memory.md#參考過往對話)。

<Quiz id="ch206-web-search" />

## 給它連結，讓它去讀

如果有想讓它讀的網頁，就把**網址**（URL，每個網頁都有的網際網路地址）貼上進來。
如果網頁搜尋是開啟的，Claude 會直接去讀取那個網頁的內容。這叫做**網頁抓取**（web fetch）。[^fetch]

```
請讀下面這篇報道，只把與我們店這樣的小飯館有關的內容整理成三行。
https://www.example.com/news/12345
```

讓它整篇總結一篇很長的文章，會**消耗很多用量。**[^fetch]
免費套餐的使用額度每 5 小時重新補滿一次，搜尋和抓取也算在這個額度裡。[^fetch]
所以請先想一想，是需要完整分析，還是隻要知道要點就行。使用額度在[第1章](01-getting-started.md)裡講。

<Quiz id="ch206-fetch" />

## 核對來源的習慣

透過網頁搜尋得到的回答，會附上**引用**（citation，標明內容取自哪裡的標記）。
每一個搜尋得到的回答都有引用，所以你可以親自核對來源。[^search]

![在隱身模式下問"請在網上搜索。告訴我國立中央博物館的參觀時間。"的介面。① 回答上方的「已搜尋網頁」，② 句末的來源標記「museum」，③ 輸入框下面"不會用於歷史記錄、記憶和 Claude 的訓練"的提示](../../../guide/10-claude/assets/shot-13-web-search-marked.png)

這是在隱身模式下拍的介面（免費套餐）。**紅色編號對應下面列表裡的同號內容。**

- ① **「已搜尋網頁」**——表示 Claude 在網際網路上查詢過。點一下，就會展開它找了什麼。
- ② **來源標記**——句末的小標籤（「museum」「segye」等）就是這句話取自的網站。
- ③ 提示這是隱身模式，所以這個對話不會用於記錄、記憶和訓練。[^screen]

點開 ① 再展開一次，就能看到 Claude 用的搜尋詞和搜尋結果裡出現的網站列表。

![展開「已搜尋網頁」的介面。① Claude 用的搜尋詞「國立中央博物館 參觀時間」，② 作為搜尋結果檢視的 9 個網站的列表](../../../guide/10-claude/assets/shot-13-web-search-sites-marked.png)

- ① 是 Claude 實際用的搜尋詞。它把我的問題縮短後進行了搜尋。
- ② 是作為搜尋結果出現的 9 個網站的列表。裡面混有政府網站（mcst.go.kr、museum.go.kr）、新聞報道和個人網站。[^screen]

讀回答之前，先瀏覽一下這個列表。這樣可以先估計裡面有沒有官方網站。

把滑鼠放在 ② 來源標記上，會出現一個箭頭，並彈出一個寫著 ① 網站地址的小視窗。點選這個標記，原來的網頁會在新標籤頁裡開啟。[^screen]

![把滑鼠放在來源標記「museum」上的介面。① 彈出寫著網站地址 www.museum.go.kr 的小視窗，② 帶箭頭的來源標記](../../../guide/10-claude/assets/shot-13-citation-hover-marked.png)

不過，僅僅有連結，並不代表回答就是對的。
正如[第1階段第9章](../00-common/09-safety.md#核對的四個習慣)裡學過的，數字、日期、名字，要開啟連結和原文對照。
開啟連結後，請問問自己：

- **連結能開啟嗎？** 點來源，看是否真的出現了那個網頁。
- **原文裡有這句話嗎？** 找一找回答裡的數字和句子，在網頁上是不是一模一樣。
- **是什麼時候寫的？** 看一下寫作日期，確認不是過時的資訊。
- **是誰寫的？** 看看是官方機構、公司的網頁，還是個人部落格。

如果對來源不滿意，可以這樣重新請求。

```
剛才的回答裡，去掉個人部落格的來源，只參考政府或公共機構的網站，重新告訴我。
每條內容都請標明取自哪個網頁。
```

像"附近的餐館"這樣地點很重要的問題，它可能會使用根據 **IP 地址**（連線網際網路的每臺裝置都有的編號）推測出的位置。[^search] 如果出現了不對的地區的結果，請直接寫上小區或街道的名字。

<Quiz id="ch206-citations" />

## 研究——把報告交給它做

**研究**（Research）是深入挖掘一個問題的功能。
它會連續搜尋很多次，並根據找到的內容，自己決定接下來看什麼。[^research]
付費套餐（Pro·Max·Team·Enterprise）可以在網頁、桌面端、手機應用裡使用。[^research]

### 開始的方法

在輸入框裡輸入 `/deep-research`，或者點輸入框下面的「+」→「Research」。[^new]

::: details 如果你在用舊介面（點選展開）
在舊介面裡，點輸入框左下角的「+」→「Research」。輸入框下面出現藍色標記，就是打開了。[^research] 研究**需要網頁搜尋是開啟的**才能執行。[^research]

<!-- 需要截圖：開啟「+」→「Research」後，輸入框下面出現的藍色標記 -->
:::

即使在韓語介面裡，「Research」也可能直接顯示為英語。

![在輸入框裡輸入到 ① 「/deep」時，② 「deep-research」出現在列表裡，③ 旁邊顯示英文說明的介面](../../../guide/10-claude/assets/shot-12-deep-research-marked.png)

這是免費套餐的介面。① 在輸入框裡只輸入 `/deep`，② 「deep-research」就會出現在列表裡。③ 旁邊用英語寫著什麼時候用這個功能。[^screen]
免費賬號的「+」選單裡沒有「Research」。列表裡雖然能看到這個名稱，但幫助文件說研究是付費套餐的功能。[^research] 本指南沒有在免費賬號裡傳送過研究。

問題越詳細越好。請把[第1階段第4章](../00-common/04-prompt-basics.md#好提示詞的5個要素)裡的五個要素原樣放進去。

```
請寫一份比較社群小菜店能用的外賣 App 手續費的報告。
- 物件：經營 1 家店的老闆
- 要比較的：平臺服務費、支付手續費、廣告費
- 格式：最前面一行結論，然後是對比表，最後是來源列表
- 優先使用 2026 年的資料，不知道日期的資料請單獨標出
```

::: details 收到的回答大概是這樣（示例——點選展開）
這是本指南編寫的示例。實際的回答會因服務和每次情況而不同。

> **一行結論**：如果是經營 1 家店的老闆，把三項費用加起來，最少的那個 App ○ 更有利。
>
> | App | 平臺服務費 | 支付手續費 | 廣告費 | 資料日期 |
> |---|---|---|---|---|
> | App A | ○% | ○% | 每月 ○○韓元起 | 2026 年○月 |
> | App B | ○% | ○% | ○○ | 日期不明 |
>
> **來源**
> 1. （來源連結）——2026 年○月○日
> 2. （來源連結）——無法得知日期

**檢查一下有沒有收到想要的結果**：是按一行結論 → 對比表 → 來源列表的順序給出的嗎？平臺服務費、支付手續費、廣告費都放進表格了嗎？是不是優先用了 2026 年的資料，不知道日期的資料有沒有單獨標出？像手續費這樣重要的數字，請點開來源連結親自確認。

:::

研究可能要花幾分鐘。[^academy-research] 所以傳送前花時間打磨問題，並不浪費。如果不知道該問什麼，在開啟研究之前，可以先在普通對話裡這樣問。[^academy-research]

```
我在考慮在我們小區開一家小菜店。我想用研究來調查這件事，請和我一起打磨一下，用什麼樣的問題交給它比較好。預算、地區、期間這些需要我來定的條件，也請問我。
```

請把預算、地區、期間這樣的條件放進去。[^academy-research] 有了條件，研究就更容易找到符合我的情況的資料。

### 需要知道的事

- **用量可能很快用完。** 額度和普通對話是一樣的。不過它會彙集多個來源寫出很長的回答，所以用得更快。[^research]
- **如果它好像沒有做研究，** 就直接說"請使用研究工具來……"。[^research]
- **連線的應用也會用到。** 如果你打開了聯結器（連線到 Claude 的其他應用，[第7章](07-projects-tools.md)），研究過程中就會不每次詢問，直接使用那些工具。[^research]
- **在手機上開始的話，只會搜尋網頁。** 它跳過聯結器時，也不會另外告訴你。如果還需要所連線應用裡的資料，請在網頁或桌面端開始。[^research]
- **模型是固定的。** 不管你選了哪個模型，執行的都是為研究指定的模型。[^research]

報告越長、越像那麼回事，就越容易跳過核對。請從結論裡用到的數字開始，開啟來源對照一下。

<Quiz id="ch206-research" />

## 什麼時候用什麼

如果搞不清該用哪個功能，傳送問題之前先問問自己。"答案查一兩次就能得到嗎？需要彙集多份資料嗎？真的需要最新資訊嗎？"

**擴充套件思考**（extended thinking）是讓它在回答之前思考更久的功能。在哪裡開啟，[第2章](02-screen-tour.md)裡講過。

可以這樣區分著選。[^when]

| 這種時候 | 選這個 | 例子 |
|---|---|---|
| 搜尋一兩次就能得到答案 | 網頁搜尋 | 天氣、新聞、昨晚的比賽結果 |
| 不需要最新資訊，但要深入思考 | 擴充套件思考 | 數學題、多角度分析 |
| 需要彙集多份資料寫成報告 | 研究 | 比較競爭對手的店 |

研究適合在 1~3 分鐘內使用五次以上工具的大範圍調查。[^when]

把擴充套件思考和研究**一起**開啟，Claude 會先制定計劃，再廣泛收集，給出更長的報告。[^when]

<Quiz id="ch206-when" />

## 親手試一試

1. 在新聊天裡問"請在網上搜索。告訴我我們小區這個月的文化活動"。小區的名字要自己寫。
2. 親自打開回答裡附的兩個來源，確認活動日期和原文一致。
3. 貼上一個你最近讀過的報道的網址，請它總結成三行。
4. 如果是付費套餐，把上面的外賣 App 手續費例子改成適合你工作的樣子，用研究傳送。從收到的報告結論裡挑一個數字，到來源裡去找一找。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：問"請在網上搜索。告訴我我們小區區立圖書館研討室的租借方法"。小區的名字要自己填。營業時間和申請方法，請開啟來源親自確認。

## 小結

- 最新資訊用網頁搜尋來問。免費套餐也可以。
- 在新介面裡，Claude 會自己去搜索（舊介面是「+」→「網頁搜尋」）。一定要它搜尋的話，就寫"在網上搜索"。
- 貼上網址，它就會去讀那個網頁。長文章會多耗用量。
- 就算附了引用，也可能出錯。開啟連結和原文對照。
- 大問題交給研究（付費）。用 `/deep-research` 或「+」→「Research」開始。
- 簡單的事實用網頁搜尋，需要深入思考的用擴充套件思考，需要彙集多份資料的用研究。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Web Search | 網頁搜尋 | Claude 去網際網路上查詢最新資訊再回答的功能 |
| Web Fetch | 網頁抓取 | 讀取貼上進來的網址對應的網頁內容的功能 |
| Citation | 引用 | 標明回答內容取自哪裡的標記 |
| URL | 網址 | 每個網頁都有的網際網路地址 |
| IP Address | IP 地址 | 連線網際網路的每臺裝置都有的編號，可以大致得知位置 |
| Research | 研究 | 連續多次搜尋，並整理成報告的功能 |
| Extended Thinking | 擴充套件思考 | 讓它在回答之前思考更久的功能 |

<ChapterDone :chapter="206" />

下一章：[第7章. 專案、聯結器與技能](07-projects-tools.md)

[^search]: Anthropic 幫助文件，「Enable and use web search」. "You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:" / "A checkmark will appear next to “Web search” when it’s enabled." / "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." / "Claude selects images from web search results, powered by Bing, and displays them alongside its text response." / "Every response includes citations, so you can easily verify sources yourself." / "Claude may use your location (inferred from your IP address) when responding to a request for localized results." https://support.claude.com/en/articles/10684626 (確認日期 2026-10-26)
[^fetch]: Anthropic 幫助文件，「Enable and use web search」. "When “Web search” is toggled on, Claude can also retrieve content directly from web pages when provided with specific URLs." / "This can consume a significant portion of your usage limit, especially for lengthy content." / "As a free user, you have usage limits that reset every five hours." https://support.claude.com/en/articles/10684626 (確認日期 2026-10-26)
[^pricing]: Anthropic 價格頁面，Free 套餐說明。 "Search the web, create files, and run code" https://claude.com/pricing (確認日期 2026-10-26)
[^new]: Anthropic 幫助文件，「Claude Cowork and chat are one Claude」. "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" https://support.claude.com/en/articles/16761823 (確認日期 2026-10-26)
[^screen]: 在 Claude 網頁介面（免費套餐，韓語）中直接確認。輸入框「+」選單（沒有「網頁搜尋」「Research」）、在隱身模式下提問所得回答中的"웹 검색함"標記和來源標記、點選來源後在新標籤頁開啟的 www.museum.go.kr、輸入框 `/deep` 列表裡出現的 "deep-research"。（確認日期 2026-10-27）
[^research]: Anthropic 幫助文件，「Use research on Claude」. "It runs multiple searches that build on each other and decides what to look into next based on what it finds." / "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "Click the “+” button on the bottom left of your chat interface, then "Research." A blue indicator will appear on the bottom of the chat window." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." / "In this case, you can steer and prompt Claude to use Research by saying “Claude, please use the research tool to…”" / "During research, Claude can use tools from your connectors automatically, without asking for approval each time." / "When you start research in Claude Mobile, Claude only searches the web and doesn’t use your connectors." / "Research runs on Claude Opus 5.5 and falls back to Claude Opus 4.8 when needed." https://support.claude.com/en/articles/11088861 (確認日期 2026-10-26)
[^when]: Anthropic 幫助文件，「When should I use web search, extended thinking, and research?」. "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" / "Combining extended thinking with research allows Claude to both plan its approach thoughtfully and execute comprehensive information gathering" / "The research feature can synthesize information across multiple sources with proper citations and produces a longer final report." https://support.claude.com/en/articles/11095361 (確認日期 2026-10-26)
[^academy-research]: Claude Academy「Claude 101」課程 「Research for deep dives」. "Include relevant constraints." / "a few minutes or more, depending on the question." / "If you're not sure how to frame your research question, you can even ask Claude to help you write a better Research prompt before enabling the feature." https://academy.claude.com/courses/claude-101/research-mode-for-deep-dives (確認日期 2026-10-26)
