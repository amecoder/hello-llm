# 第11章 像專家一樣使用 — 超越新手，按工作需要來駕馭

> **一句話總結**：專家不是知道更多新功能的人，而是**像交辦工作那樣說話、按工作選合適的工具、把重複的事做成模板、確認結果之後才使用**的人。
> 這一章會介紹怎樣**組合**你在第1~10章學到的功能，也會介紹還沒講過的定時任務、資料分析和學習模式。

介面以2026年10月的網頁版（Plus 套餐）為準。免費套餐或手機 App 的選單位置可能略有不同。

## 專家有什麼不同

在[第1階段第3章「同一個工具，不同的結果（같은 도구, 다른 결과）」](../00-common/03-why-learn.md#同樣的工具-不同的結果)裡，你學到了同一個 AI 也會因使用方法不同而結果不同。OpenAI 調查公司裡怎樣使用 ChatGPT 的報告裡，也能看到類似的情況。即使在效果可能很大的地方，推理、深度研究、專案、自定義指令這類**高階功能也用得比較少**。[^adopt]

怎樣判斷該交辦什麼、交辦之前怎樣先試一試、怎樣按工作的分量來確認，這類**適用於任何 AI 的方法**，在[第1階段第11章「像專家一樣使用」](../00-common/11-expert.md)裡。這一章把那些方法搬到 ChatGPT 的功能上。先一眼看看這一章講什麼。

| 要素 | 一句話說明 | 詳細內容 |
|---|---|---|
| 像交辦工作那樣說話 | 講明要做的事、物件、目的、形式，看過第一版回答後再修改 | [第1階段第4章「好提示詞的5個要素」](../00-common/04-prompt-basics.md#好提示詞的5個要素)、[第1階段第6章「怎樣好好地請它修改」](../00-common/06-conversation.md#怎樣把修改要求說清楚) |
| 選工具 | 在搜尋、深度研究、Work、推理級別中，用適合這項工作的 | [第6章「深度研究 — 把報告交給它」](06-search.md#深度調研——把報告交給它)、[第7章「Chat 和 Work 的區別」](07-projects-plugins.md#chat-和-work-的區別) |
| 積累資料 | 把同一項工作的檔案、指令、做得好的回答彙集在一處 | [第7章「專案 — 把對話、檔案、指令放進一個資料夾」](07-projects-plugins.md#專案——把對話、檔案、指令放進一個資料夾) |
| 做模板 | 把重複的請求留成指令、模板、技能 | [第1階段第8章「4. 做成可重複使用的模板」](../00-common/08-meta-prompting.md#_4-做成可重複使用的模板) |
| 定時任務 | 讓 ChatGPT 在約定的時間自己去做 | [本章「到點自動去做」](#到點自動去做-—-定時任務) |
| 資料分析 | 計算表格和數字，並以圖表形式拿到 | [本章「把表格和數字交給它」](#把表格和數字交給它-—-資料分析) |
| 學習模式 | 不直接給答案，而是用提問幫助理解 | [本章「用來學習」](#用來學習-—-學習模式) |
| 回答的樣子 | 按我的工作調整語氣、表格和圖片的數量 | [第5章「設定語氣」](05-memory.md#設定語氣——基本風格和語氣、溫暖度、參考我的文風) |
| 確認 | 為每種成果事先定好看哪裡，再去確認 | [第1階段第9章「確認的四個習慣」](../00-common/09-safety.md#核對的四個習慣) |

<Quiz id="ch111-difference" />

## 交辦工作的五行 — 成果、資料、保留項、稽核標準、形式

不是問一個問題，而是把文件或表格工作整個交出去時，除了[第1階段第4章「好提示詞的5個要素」](../00-common/04-prompt-basics.md#好提示詞的5個要素)，還要再注意兩點。一點是像公式、順序、表格結構這類**不能改動的東西**，[^docs]另一點是判斷結果做得好不好的標尺，也就是**稽核標準**（review criteria）。[^work] 提前把這兩點說清楚，就能減少原本好好的格式被改掉、或數字錯了還被放行的情況。

請按下面的五行來寫（[第1階段第7章「1. 用 Markdown 整理」](../00-common/07-structured-prompts.md#_1-用-markdown-來整理)）。
- **成果**：做什麼、為誰做、為什麼做
- **資料**：要參考的檔案
- **保留項**：不能改動的東西
- **稽核標準**：最後要和什麼對照
- **形式**：格式和長度
```
成果：請做一份要交給組長的本月支出摘要。下週的預算會議上要用。
資料：請使用附件的支出明細檔案。
保留項：專案名稱和順序不要改動。
稽核標準：最後請核對合計是否和原始檔案一致，並告訴我結果。
形式：按專案列一個表格，再加三句話的摘要。
```

::: details 得到的回答大致是這樣（示例 — 點選展開）
這是本指南製作的示例。實際的回答會因服務和每次情況而不同。

> | 專案 | 本月金額 |
> |---|---|
> | （檔案中的第一個專案） | ○○韓元 |
> | （檔案中的第二個專案） | ○○韓元 |
> | … | … |
> | 合計 | ○○韓元 |
>
> **三句話摘要**
> 1. 本月總支出為○○韓元。
> 2. 花得最多的專案是（專案名稱），為○○韓元。
> 3. 在下週的預算會議上，值得討論一下怎樣減少（專案名稱）的支出。
>
> **合計核對**：表格裡的合計○○韓元與原始檔案的合計一致。

**確認一下有沒有答好**：專案名稱和順序是不是和原件一模一樣？是不是以一個表格加三句話摘要的形式給出？最後有沒有合計核對的結果？不要只相信“一致”這句話，請你自己再看一眼原件的合計。

:::

**拆開，還是合在一起？** OpenAI 幫助中心建議把複雜的工作拆成小的請求（[第1階段第5章「3. 分步驟（단계 나누기）」](../00-common/05-prompt-patterns.md#_3-分步驟-—-提示詞鏈)）。[^prompt] Academy 的資料則說明，把互相有關的背景和指示合在一個請求裡也可以。不過它也補充說，資訊太多，回答可能會變得模糊。[^aprompt]

如果需要看過中間結果再決定下一步方向，就拆開。如果目標只有一個而且很明確，就把五行合在一個請求裡。無論哪種，只附上真正必要的資料就行。

**需要多個步驟的工作，要定好在哪裡停下。** 不要一開始就要成品，先定好在哪裡由我來選擇或確認。步驟小，ChatGPT 理解錯的時候你就能早點發現。不用等全部做完後再從頭修改。[^academy-content]
```
請幫我籌備本週的家庭出遊。
1. 請按日期、預算、出發地區，把三個候選地點整理成表格。
2. 請比較交通時間和費用。到這裡停下，由我來選地點。
3. 請用我選的地點做一份一天的行程表。
```

**如果有好幾個檔案，先要摘要，再要草稿。** 讓它先說“現在看到了什麼”，你就能在寫草稿之前，確認它有沒有把需要的檔案讀全。Academy 課程在把文件交給 Work 之前，也會讓你先走這個順序。[^academy-content]
```
先不要寫草稿。請先讀附件的檔案，簡短整理：已經定下的內容、還沒定的內容、缺少或不清楚的內容。
```

<Quiz id="ch111-five-lines" />

## 按工作選合適的工具

同一個問題，用哪個功能來問，結果也會不同。快速的事實，用搜索去找。需要深度和細緻，就用深度研究。[^deep] 其餘的工作，請從下面的表裡選。

| 要做的事 | 要用的功能 | 詳細內容 |
|---|---|---|
| 今天的天氣、營業時間這類快速的事實 | 網頁搜尋 | [第6章「網頁搜尋」](06-search.md#聯網搜尋——讓-chatgpt-去網上查) |
| 對比多份資料的長篇報告 | 深度研究 | [第6章「深度研究」](06-search.md#深度調研——把報告交給它) |
| 文件、表格、演示資料這類成品檔案 | Work（付費套餐） | [第7章「Chat 和 Work 的區別」](07-projects-plugins.md#chat-和-work-的區別) |
| 修改已有的 Word、PowerPoint 檔案 | Microsoft 載入項「ChatGPT」（含免費版） | [本章下方](#在-word、powerpoint-裡使用) |
| 困難的計算、多個條件交織的計劃 | 調高推理級別 | [第2章「推理級別和思考」](02-screen-tour.md#推理級別和思考-—-想得多深) |
| 表格、數字分析和圖表 | 上傳檔案並使用資料分析 | [本章下方](#把表格和數字交給它-—-資料分析) |
| 學習新東西 | 學習模式 | [本章下方](#用來學習-—-學習模式) |

**想知道某個功能行不行，直接讓它做做看。** 這比問“你能做這個嗎？”要好。ChatGPT 看不到自己的系統現在是怎樣執行的。所以你問它，它可能答錯。[^ask]
```
請從附件的五張收據照片裡，提取日期、店名、金額，做成表格。
```

### 在 Word、PowerPoint 裡使用

Word、Excel、PowerPoint 共用**同一個 ChatGPT 載入項**（add-in，附加在程式裡使用的小功能）。請在 Microsoft 應用商店裡安裝「ChatGPT」。在文件旁邊的窗格里就能直接修改。[^word][^ppt]

- Word 版**包括免費（Free）在內的所有套餐**都能用。PowerPoint 版在 Free 和 Go 裡有限使用。如果是公司賬號，要管理員允許才會顯示。[^word][^ppt]
- 載入項裡的對話和 ChatGPT 的對話記錄是分開的。記憶和技能也不會帶過來。[^word]
- **大改之前，請先儲存一份副本。** 如果是大的修改，就讓它先把計劃拿給你看。有副本的話，需要時可以恢復原狀。[^word][^ppt]

```
我想把這份演示資料的第3~5張幻燈片縮成一張。先不要直接改，請先把怎麼合併的計劃給我看。
數字和表格保持原樣，標題請控制在15個字以內。
```

<Quiz id="ch111-tools" />

## 積累資料並使用

在[第7章「專案」](07-projects-plugins.md#專案——把對話、檔案、指令放進一個資料夾)裡，你學了怎樣把對話、檔案、指令放進一個資料夾。專案請用在每週調研、文章草稿這類**重複的工作**上。[^projects] 再往前走一步，做得好的回答也可以作為下次用的資料積累起來。
- **做得好的回答要儲存成資料。** 在專案對話裡，打開回答下方的訊息選單，選「儲存到專案（프로젝트에 저장）」或「新增到專案來源（프로젝트 소스에 추가）」就行。這個回答就會進入專案的「來源（소스）」。選單名稱可能因介面而不同。[^projects]
- **其他服務的資料也可以連線。** 在個人專案的來源區域點「Add sources」，填入 Slack 頻道或 Google Drive 檔案、資料夾的連結。[^projects] 以前上傳的檔案，可以從[第4章「資料庫」](04-files-images.md#資料庫-—-彙集上傳檔案的地方)裡重新呼叫。

<!-- 需要截圖：在專案對話中展開回答的訊息選單，能看到「新增到專案來源（프로젝트 소스에 추가）」的介面 -->

最好在專案指令裡寫上“先看積累下來的資料”。
```
這個專案是每週調研我們社群文化活動的地方。做新的調研之前，請先看儲存在「來源（소스）」裡的上次調研結果，
把和上週重複的活動去掉，只把新出現的整理成表格。
```

<Quiz id="ch111-sources" />

## 重複的工作做成模板 — 指令、模板、技能

先從哪些工作開始做模板，請看[第1階段第11章「選擇先練習的工作」](../00-common/11-expert.md#選一件最先練習的事)。

如果你經常做同一件事，就先做好模板。第一步，是把[第1階段第8章「4. 做成可重複使用的模板」](../00-common/08-meta-prompting.md#_4-做成可重複使用的模板)裡的模板，[像第7章那樣放進專案指令](07-projects-plugins.md#把要反覆使用的模板放進專案)。接下來才是模板和技能。[^docs][^skills]

| 名稱 | 是什麼 | 可以在哪裡使用 |
|---|---|---|
| 參考檔案 | 只這一次拿給它看的示例檔案 | 所有對話 |
| 模板（template） | 示例檔案 + 可重複使用的指令。只有建立的人自己用 | 網頁版的 Work（付費套餐） |
| 技能（skill） | 裝著指令和示例、可以重複使用並分享的工作方式 | 按幫助中心所述，是 Business·Enterprise·Edu 等公司、學校套餐 |
| 外掛（plugin） | 把技能和應用連線打包在一起的組合 | [第7章「外掛」](07-projects-plugins.md#外掛——新增其他服務和工作方式) |

**模板在網頁版的 Work 裡建立。** 在輸入框裡輸入 `@Template-Creator`。附上一個要參考的檔案（Word·Excel·PowerPoint 檔案，或谷歌文件連結）。然後說明要保留什麼、要改什麼、每次要填入什麼資訊。建立好之後，請點「安裝（설치）」。[^docs]
```
@Template-Creator 請用附件的週報檔案做一個模板。
保留項：標題行、表格的三欄（已完成 / 進行中 / 下週計劃）、字型和顏色。
要改的：表格裡的內容和日期。
每次要填入的資訊：那一週的工作備忘。
```

使用建立好的模板時，請在輸入框裡輸入 `@Documents`·`@Spreadsheets`·`@Presentations` 其中之一。模板庫開啟後，選「Use template」。光是選中，任務並不會開始。還需要接著寫上這次的內容併發送。[^docs]

寫專案指令時，可以參考下面的要點。它原本是 OpenAI 對定製 GPT 指令的建議。[^gpt-make] 認為它對專案指令也適用，是本指南的解讀。

| 要點 | 例子 |
|---|---|
| 與其羅列“不要做”，不如具體寫“請這樣做” | 不寫“不要寫太長”，而寫“請寫三句話” |
| 參考檔案放在**資料**裡，規則和語氣放在**指令**裡 | 公司的格式用檔案，“表格是三欄”寫在指令裡 |
| 結果不理想時，先打磨指令、放進一個好例子，再考慮加功能 | “收到這樣的備忘 → 就這樣整理”的一對示例 |

**技能**在側邊選單的「外掛（플러그인）」→「技能（스킬）」標籤頁 →「建立（만들기）」裡建立。選「透過聊天建立（채팅으로 만들기）」之類即可。[^skills] 不過，幫助中心寫的是技能可以在 **Business·Enterprise·Healthcare·Edu 套餐**裡使用。個人套餐的介面裡也可能看到「技能（스킬）」標籤頁。能不能用，請在你自己的介面上確認。

上傳別人做的技能檔案時，請先看看建立者是否可信。即使有自動檢查，也代替不了你自己的確認。[^skills]

**什麼時候建立技能呢？** 如果你一直在用同樣的標準重複同樣的請求，就值得建立。還為時過早的情況，見[第1階段第11章「把重複的事積累起來」](../00-common/11-expert.md#把重複的事積累下來)。[^academy-content]

<Quiz id="ch111-templates" />

## 到點自動去做 — 定時任務

**定時任務**（scheduled tasks）是讓 ChatGPT 在約定的時間自己去做事的功能。可以只執行一次，也可以重複執行。也可以讓它盯著某樣東西有沒有變化，變了就通知你。[^tasks] 建立方法很簡單。在對話裡直接請它做就行。
```
每週一早上8點，把本週首爾的天氣預報按星期整理成每天一行，告訴我。
```

建立好的任務，可以在側邊選單「定時任務（예약）」裡檢視、修改、暫停、刪除。[^tasks][^scheduled-name] 也可以透過設定 →「通知（알림）」→「任務管理（작업 관리）」開啟，還可以透過對話的 •••（更多）→「檢視定時任務（예약 작업 보기）」開啟。[^tasks]

怎樣接收通知，請在設定 →「通知（알림）」裡選推送或郵件。想收到手機推送，就在手機 App 上建立任務。[^tasks]

![側邊選單的「定時任務（예약）」介面。上面是「安排任務（작업 예약하기）」輸入框，下面是建立好的一行任務（暫停、編輯、••• 按鈕），再下面是「推薦（추천）」任務列表](../../../guide/11-chatgpt/assets/shot-29-scheduled.png)

*任務名稱已換成示例。任務行的左邊是暫停，右邊是編輯和 ••• 按鈕。*[^screen-scheduled] 也可以直接在上面的「安排任務（작업 예약하기）」欄裡寫下請求來建立。

可以同時開著的任務數，因套餐而異。Free 和 Go 是3個，Plus 是5個，Business·Edu 是10個，Pro·Enterprise 是15個，這些數字可能會變（確認日期 2026-10-24）。Free 每天最多隻執行一次。時間也只能大致定為早上、下午、晚上。像上面的例子那樣指定準確的時刻，或者每小時執行，需要付費套餐。[^tasks] 像收到新郵件就做出反應這樣的**應用事件任務**，要在 Work 裡建立。Free 和 Go 不能用。[^tasks]

也有需要小心的地方。[^tasks]
- **在專案裡建立的任務，讀不到那個專案的檔案。** 如果需要檔案內容，請直接寫進指示文字裡。
- 在語音對話、定製 GPT、[上鎖的對話](03-chats.md#不讓別人開啟——鎖定的對話)裡，不能建立定時任務。
- 把任務用分享連結發給別人，收到的人會原樣看到指示文字。所以請不要放入健康、金融資訊或密碼。即使分享了，我已連線的應用（例：Slack）的連線和許可權也不會傳過去。[^slack]
- 透過已連線的應用傳送郵件、修改檔案的任務，可能會**停下來等我批准**。如果一直沒有結果，請到側邊選單「定時任務（예약）」裡看看是不是在等待批准。[^apps-trouble]

**該把什麼工作設成定時呢？** 請用在看了結果後由我來判斷的工作上。請它定期確認、盯著看、總結後通知你就行。像傳送、釋出、刪除、批准這類會對外產生影響、或難以撤銷的事，要小心。[^academy-content]

**設成定時之前，請先親手做幾次。** 把同樣的請求手動發幾次，打磨提示詞和資料，等結果可靠了再設成定時。在指示文字裡要寫下這些內容。[^academy-content]
- 看哪些資料
- 做出什麼
- 沒有資訊時怎麼辦
- 哪些由我來確認

這是本指南製作的示例。
```
每週五下午5點，從我們區政府網站的公告裡，找出本週新發布的活動和報名日程，整理成表格。
日期不明確的不要編造，寫上「需確認」，並附上出處連結。不要報名，也不要發帖。
```

<Quiz id="ch111-scheduled" />

## 把表格和數字交給它 — 資料分析

**資料分析**（data analysis）沒有需要單獨開啟的選單。像[第4章「上傳照片和檔案」](04-files-images.md#上傳照片和檔案)那樣，上傳 Excel 或 CSV 檔案，再問你想知道的就行。ChatGPT 會做出摘要、表格、圖表，需要時還會用 Python（Python，用於計算的程式語言）直接計算。[^data]

想得到準確的結果，**上傳之前請先整理好檔案。**[^data]
- 第一行放像「日期 / 品名 / 數量 / 金額」這樣一眼就能看懂的列名。
- 一行只寫一條記錄。
- 不要在一個工作表裡放多個表格，也不要在中間留空行。

上傳檔案之後，不要馬上問合計，而是先讓它看**資料有沒有問題**。OpenAI 也建議用這個問題開始分析。接著，請**自己指定計算方法。** 因為第一次嘗試的計算方法或圖表，可能和我的本意不同。[^data]
```
請先檢查這份資料裡有沒有常見的問題（空值、異常值、重複、日期和數字格式錯誤）。
如果沒有問題，請按品名彙總「金額」列，按從大到小的順序做成表格，並用柱狀圖展示。
也請各用一句話寫出計算用的方法和假設。
```

- 幫助中心說明，柱狀圖、折線圖、餅圖、散點圖可以透過「轉換為互動式圖表（대화형 차트로 전환）」親手操作。在2026-10-28的介面上，沒有看到這個按鈕，只看到「下載圖表（차트 다운로드）」「展開圖表（차트 펼치기）」。[^screen-data] 可以展開結果表格，只選需要的格子再次提問，表格可以下載成 CSV（能在 Excel 裡開啟的、用逗號分隔的檔案）（也請參考[第1階段第7章「3. 搬到 Excel 時，請用表格形式拿到」](../00-common/07-structured-prompts.md#_3-要搬到-excel-時-讓-ai-給表格)）。[^data]
- **侷限**：分析用的 Python 不能連線網際網路。掃描的 PDF 或照片裡的表格數字可能不準確，檔案很大時只能看到一部分，所以請指定工作表或範圍。[^data]

我把[接下來的練習](../00-common/practice-kit.md)裡的假會費賬本（fees.csv）上傳，原封不動地發了上面的提示詞。ChatGPT 找出了金額為空的一行和被寫了兩次的一行。然後，按照“如果沒有問題”這個條件，它在畫圖表之前停下來，請我確認。

![資料檢查結果表。整理了空值1條（傳送通知簡訊）、重複1對（茶點 32,500韓元）、異常值需確認、日期格式正常、數字格式1條，下面寫著計算方法和假設](../../../guide/11-chatgpt/assets/shot-30-data-check.png)

我告訴它“茶點是不小心寫了兩次”之後，它就把按專案的支出畫成了柱狀圖。收入210,000韓元、支出114,300韓元、剩餘95,700韓元，整理在它下面的表格裡。和我手算的數值一致。

**如果圖表裡的韓文變成方框（□）**，就這麼告訴它，請它重新畫。我第一次拿到的圖表，專案名稱變成了方框。我說“請重新畫，讓韓文能正常顯示”之後，它就重新畫出了文字馬上能看清的圖表。[^screen-data]

![第一次拿到的按專案支出柱狀圖。數字能看到，但專案名稱和標題這類韓文變成了方框](../../../guide/11-chatgpt/assets/shot-30-data-chart-broken.png)

![重新畫的按專案支出柱狀圖。橫幅製作 45,000韓元、茶點 32,500韓元、研討室租借 20,000韓元、11月買書 16,800韓元，下面有總支出 114,300韓元](../../../guide/11-chatgpt/assets/shot-30-data-chart.png)

*對話和上傳的檔案在拍完截圖後已刪除。刪除對話後，上傳的檔案仍留在資料庫裡，所以另行刪除了（[第4章](04-files-images.md#資料庫-—-彙集上傳檔案的地方)）。*

<Quiz id="ch111-data" />

## 用來學習 — 學習模式

**學習模式**（study mode）是不直接給答案，而是教你的方式。它會丟擲問題，分步驟講解，一邊確認你是否理解一邊推進。**所有套餐**都可以在網頁、iOS、安卓上使用。[^study]

在網頁上開啟它，要在輸入框裡輸入 `@study`，然後在建議列表裡選「學習（공부하기）」。也可以點 + 按鈕，搜尋 `study` 後選擇。直接進入 `chatgpt.com/studymode` 也行。[^study] 學習模式請在普通對話裡開啟。在[臨時聊天](03-chats.md#不留記錄——臨時聊天)、定製 GPT、專案裡不能開啟。[^study]

![在輸入框裡輸入 @study 後，下面彈出「學習（공부하기） — 學習新概念（새로운 개념을 배워보세요）」建議的介面](../../../guide/11-chatgpt/assets/shot-31-study-mention.png)

*建議列表裡顯示為「學習（공부하기）」。這是傳送之前的介面，還沒有開始任何事。*[^screen-study]

請把下面的內容放進第一條訊息裡。這樣學習模式就能更好地幫到你。[^study]
- 我的水平
- 科目和確切的主題
- 想做的事
- 已經知道的內容
- 考試日期、形式
- 資料

```
我想用20分鐘複習這個主題。主題是初中2年級科學的「電路」。
我聽說過歐姆定律，但分不清串聯和並聯。下週二有選擇題考試。
請先簡短地告訴我最重要的概念，然後一次出一道題，確認我的回答。
```

學習模式也可能出錯。有時它還會直接告訴你答案。這時請再次請求：“只給我提示”“一次出一道題”。作業、考試、健康、法律、金錢這類重要的內容，一定要另外確認。[^study]

你也可以在學習模式裡請它做複習資料。請以測驗或抽認卡（正面是問題、背面是答案的記憶卡片）的形式請求。[^study] 用抽認卡功能做出的卡片，會自動儲存到資料庫裡。卡片內容請和原來的筆記對照一下。[^study]

不用學習模式也能用的講解類提示詞，在[提示詞合集「學習·聽講解（공부·설명 듣기）」](../00-common/prompt-library.md#學習、聽講解)裡。

<Quiz id="ch111-study" />

## 讓回答的樣子適合我的工作

在[第5章「設定語氣」](05-memory.md#設定語氣——基本風格和語氣、溫暖度、參考我的文風)裡，你看過了基本風格和「溫暖（따뜻함）」。這裡看四種方法，把回答的樣子更貼合工作地進一步調整。修改生成圖片的方法，在[第4章「生成圖片」](04-files-images.md#生成圖片)裡。

![個性化設定介面。請看最下面 ⑤ 「基本風格與語氣（기본 스타일 및 톤）」和 ⑥ 「溫暖（따뜻함）」選擇按鈕。特性就在這裡調整](../../../guide/11-chatgpt/assets/shot-06-personalization-marked.png)

- **特性**（characteristics）是把溫暖、熱情、標題與列表、表情符號，朝“更多（+）”或“更少（–）”的方向一點點調整的設定。可以在設定 →「個性化設定（개인 맞춤 설정）」裡更改。更改後，會應用於這個聊天和今後的新聊天。[^char] 在2026-10-23的介面上，只確認了「溫暖（따뜻함）」（上圖 ⑥）。其他專案請在你自己的介面上找找看。
- **表格、圖片太多時可以減少。** 最新的模型有時會在回答裡混合顯示錶格、按鈕、圖表。請在網頁設定的個性化設定裡，把「Layout and Visuals」改成「Simple」。這個名稱是幫助中心的英文寫法，韓語介面上的名稱沒有確認到。改了之後，也可能還有一部分會出現。[^ui]
- **總想要的樣子，用指令固定下來。** 把“回答要簡短”“比較選項時用表格”這類要求，寫進[第5章「自定義指令」](05-memory.md#自定義指令——希望它始終遵守的事)就行。[^ui]
- **也可以直接在回答裡修改。** 郵件、簡訊這類草稿，有時會以寫作塊（writing block，回答裡可以直接修改的文字框）的形式出現。你可以在原地直接修改，或者只選一部分請它修改。修改的內容會儲存到對話裡，並用於下一次提問。[^blocks]
```
請只把剛才寫的郵件草稿的第二段改得更短、更禮貌。其餘保持不變。
```

<Quiz id="ch111-shape" />

## 相信之前先確認

要看多仔細、在哪個階段看，請在[第1階段第11章「按工作的分量來確認」](../00-common/11-expert.md#按事情的分量檢查)裡學習。這裡看看 ChatGPT 的各種成果該看什麼。

每種成果要看的地方不一樣。

| 成果 | 要確認的地方 |
|---|---|
| 資料分析 | 計算用的方法、程式碼、假設。方法很重要的話，請它展示出來或改一改[^data] |
| 深度研究報告 | 親自開啟引用和出處連結（[第6章「核對出處的習慣」](06-search.md#核對出處的習慣)）[^deep] |
| Work 生成的檔案 | 在分享之前看內容、版式、公式、圖表[^docs] |
| Work 在網站上做的事 | 確認結果和出處，重要的操作要在批准介面上親手點選[^work] |
| 在已連線的應用裡找到的檔案 | 找到檔案的**名稱**，不等於讀過**內容**。重要的檔案，要直接貼上鍊接讓它讀[^drive] |
| 透過已連線的應用傳送的郵件、訊息 | 任務中斷或結果含糊時，在重新讓它做之前，先親自確認已傳送郵件箱和收件物件。同一封郵件可能會發出兩次[^apps-trouble] |

**連結也要小心。** ChatGPT 生成的連結，可能被第三方塞進了虛假資訊或惡意指示。[^links] 隱藏指示的原理，在[第1階段第9章「4. 隱藏的指示」](../00-common/09-safety.md#_4-隱藏指令——提示詞注入)裡。越是我不熟悉的領域，越要在最後加上這句話。
```
請標出剛才的回答裡我需要另外確認的部分，並告訴我該去哪裡確認（官方機構或原文）。
```

<Quiz id="ch111-verify" />

## 想學得更多 — OpenAI Academy

**OpenAI Academy** 是 OpenAI 製作的**免費線上課程**。有 ChatGPT 賬號的人都可以聽，按自己的節奏進行。[^academy] 在課程頁面點「Enroll now」（報名）後，正文才會開啟。進度會自動儲存，所以不必一次聽完。下面三門課程的正文是**英語**（2026-10-26確認）。[^academy-courses]

講怎樣把 AI 用在工作上的課程有三門。後面兩門建議先聽前面的課程。時間是課程頁面上寫的數值，可能會變。[^academy-courses]

| 課程 | 時間·水平 | 講的內容 | 準備 |
|---|---|---|---|
| **AI Foundations** | 約70分鐘，入門 | AI·LLM 是什麼、清楚的指示、提供背景、稽核結果、負責任地使用 | ChatGPT 賬號，一項要練習的真實工作。不需要技術知識 |
| **Applied AI Foundations** | 約80分鐘，中級 | 把一次提問變成**可重複使用的工作流程**（workflow）、選擇推理模型（回答之前想得更久的模型）、稽核節點、技能 | ChatGPT 賬號，一項要練習的真實工作。建議先聽 AI Foundations |
| **Agents and Workflows** | 約90分鐘，中級 | 把工作交給 [Work](07-projects-plugins.md#chat-和-work-的區別)，稽核結果，用技能、定時任務重複使用 | ChatGPT 賬號，一項要練習的真實工作，能使用交辦工作功能（原文 "agent capabilities"，課程裡指 Work）的賬號。建議先聽前兩門課程 |

每門課程聽完正文，並在**測驗（Assessment）中得到80%以上**，就會透過郵件收到**徽章**。[^academy-courses] 幫助中心說明，這不是證書。[^academy] 本指南的[認證考試](../00-common/certificate.md)也是同樣性質的學習徽章。

### 課程裡學到的框架 — 和本指南對比

這三門課程裡，有和本指南相同的內容，只是名字不同。瞭解下面的對應關係，在課程裡遇到新術語時就容易猜到意思。課程裡用的名稱，照英文原文寫出。[^academy-content]

- **Task·Context·Expectation**（AI Foundations）：定好要做的事、背景（為誰做、為什麼需要）、回答的樣子（格式、長度、語氣）再提出請求。和[第1階段第4章「好提示詞的5個要素」](../00-common/04-prompt-basics.md#好提示詞的5個要素)是同一個想法。
- **CLEAR**（AI Foundations）：拿到回答後，自己問自己。都回答了嗎（Complete）？前後合理嗎（Logical）？有依據嗎（Evidence）？適合讀的人嗎（Audience）？有沒有離題（Relevant）？請和[第1階段第9章「確認的四個習慣」](../00-common/09-safety.md#核對的四個習慣)、[第1階段第11章「按工作的分量來確認」](../00-common/11-expert.md#按事情的分量檢查)一起看。
- **"Use ChatGPT as the workspace, not the source of truth."**（AI Foundations）：意思是把 ChatGPT 當作工作的地方，不要只憑 ChatGPT 的回答來判斷事實。需要最新的事實、政策、價格、日期時，先從可信的資料或搜尋裡拿到，再讓 ChatGPT 去整理這些資料。這和[第6章「網頁搜尋」](06-search.md#聯網搜尋——讓-chatgpt-去網上查)相連。
- **工作流程的五個部分**（Applied AI Foundations）：定好目標、背景、步驟、稽核節點、成果。不要一次全部交給它，而是每一步都確認著推進。請看本章的[「交辦工作的五行」](#交辦工作的五行-—-成果、資料、保留項、稽核標準、形式)和[第1階段第5章「3. 分步驟（단계 나누기）」](../00-common/05-prompt-patterns.md#_3-分步驟-—-提示詞鏈)。
- **工作流程筆記**（Applied AI Foundations）：做長時間的工作時，ChatGPT 可能會忘掉最初的目標或條件。所以把目標、已做的決定、要遵守的條件、要確認的節點寫在一份簡短的筆記裡。下一步再把這份筆記拿給它看，就能接著之前定好的內容繼續。把這份筆記作為[第7章「專案」](07-projects-plugins.md#專案——把對話、檔案、指令放進一個資料夾)的檔案，每次修改都更新，是本指南的建議。
- **把工作交給智慧體**（Agents and Workflows）：事先寫好做什麼、用哪些資料、不能做的事（不傳送、不編造日期和負責人等）、成果的樣子、我要確認的內容。和本章的[「交辦工作的五行」](#交辦工作的五行-—-成果、資料、保留項、稽核標準、形式)幾乎一樣。
- **選功能的規則**（Agents and Workflows）：很多時候，一個清楚的提示詞就夠了。需要其他服務的資料就用外掛，同一件事反覆出現就用技能，想在約定的時間重複同樣的確認就用定時任務。請看[「重複的工作做成模板」](#重複的工作做成模板-—-指令、模板、技能)和[「到點自動去做」](#到點自動去做-—-定時任務)。

課程裡有很多親手做的活動。在旁邊的標籤頁裡開啟 ChatGPT，聽的同時就可以馬上跟著做。建議用電腦而不是手機聽課。[^academy-content]

### 可以免費看的公開資料

Academy 課程要用 ChatGPT 賬號登入才能聽，但下面的資料是**免費**的，不登入也能開啟介紹頁面。不過也有些地方，真要聽課需要註冊（Boostcourse 需要報名選課）。全部都在2026-10-25親自開啟官方頁面確認過。

| 資料 | 製作方 | 語言·篇幅 | 適合誰 |
|---|---|---|---|
| [Introduction to Prompt Engineering](https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13)（影片） | OpenAI Academy | 英語 | 想透過 OpenAI 製作的影片，複習本指南第1階段學過的提示詞寫法的人。下一集是 [Advanced Prompt Engineering](https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13)[^academy-public] |
| [ChatGPT fundamentals](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics)（文章） | OpenAI Academy | 英語 | 想透過 OpenAI 親自整理的文章，重溫 ChatGPT 基礎的人[^academy-public] |
| [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | DeepLearning.AI。由 OpenAI 員工（Isa Fulford）和吳恩達（Andrew Ng）共同授課 | 英語，1小時40分鐘 | 好奇面向開發者的提示詞課程的人。需要 **Python**（程式語言的一種）基礎。免費一事寫著“僅限學習平臺測試版（正式釋出前的試執行）期間”，請到頁面上確認現在是否仍免費再聽[^dlai] |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners)（GitHub — 存放資料的網站） | Microsoft | 21講，**有韓語翻譯**（[韓語版](https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations/ko)） | 對做生成式 AI 應用感興趣的人。先讀講解概念的「Learn」課程（「Build」課程裡有程式碼示例）[^msgenai] |
| [用 AI 學習的分步策劃書寫作法（AI로 배우는 단계별 기획서 작성법）](https://www.boostcourse.org/aix210) | Boostcourse（부스트코스） | **韓語**，3節課和實踐作業 | 想透過韓語課程學習怎樣把 AI 用在工作上的人。這是講怎樣用 AI 寫策劃書的課程，需要報名選課（註冊會員）[^boost] |

英語資料可以用 Chrome 這類瀏覽器的翻譯功能（在頁面上點滑鼠右鍵 →「翻譯成中文」）來讀。

講解 ChatGPT 是怎樣做出來的、怎樣使用的，Andrej Karpathy 的那些著名影片，彙集在[第1階段第1章「看影片瞭解更多」](../00-common/01-what-is-llm.md#看影片瞭解更多)和[第1階段第3章「看影片瞭解更多」](../00-common/03-why-learn.md#看影片瞭解更多)裡。

> Coursera 的著名課程「Prompt Engineering for ChatGPT」和「Generative AI for Everyone」，課程頁面上寫著“要檢視課程資料和作業，必須購買證書課程”，所以從這份免費列表裡去掉了（確認日期 2026-10-25）。[^coursera]

<Quiz id="ch111-academy" />

## 親自試一試

1. 在記事本里編一個有10行左右的日期、品名、數量、金額的表格，存成 CSV，上傳到 ChatGPT，傳送“請先檢查有沒有常見的問題”。然後讓它用柱狀圖給出按品名的合計，並請它展示計算方法和假設，把合計和我自己加出來的值對照一下。
2. 用「五行」模板，請它整理本週要做的事。分別發一次去掉稽核標準那一行的和加上的，比較差別。
3. 建立一個定時任務（“明天早上提醒我喝水”）。到側邊選單「定時任務（예약）」裡確認能不能看到，看完後刪除。
4. 用 `@study` 開啟學習模式，用20分鐘複習提示詞，學一個你最近好奇的主題。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：上傳示例檔案 fees.csv，像第1條那樣傳送“請先檢查有沒有常見的問題”。看看它能不能找出寫了兩次的茶點和金額為空的一行。然後傳送“請把收入·支出合計和剩餘的錢做成表格，把按專案的支出做成柱狀圖”，把表格裡的數字和自己加出來的值對一對。最後把[作業檢查表](../00-common/practice-kit.md#最後留下的東西)逐條打勾。

## 小結

- 專家像交辦工作那樣說話。寫下成果、資料、保留項、稽核標準、形式這五行，並在每種成果都確認過事先定好的地方之後才使用。
- 快速的事實用搜索，深入的調研用深度研究，成品檔案用 Work，困難的思考用推理級別。功能行不行，別去問，直接讓它做做看。
- 做得好的回答用「新增到專案來源（프로젝트 소스에 추가）」積累起來，重複的工作按指令 → 模板（Work）→ 技能（按幫助中心所述是公司、學校套餐）的順序做成模板。
- Word、PowerPoint 的 ChatGPT 載入項也可以免費使用。大改之前先儲存副本，並先拿到計劃。
- 定時任務透過在對話裡請求來建立，在側邊選單「定時任務（예약）」裡管理。專案裡的任務讀不到專案檔案，透過應用修改東西的任務可能會停下來等批准。
- 資料分析是上傳整理好的檔案，先確認資料問題，再指定方法。學習模式用 `@study` 開啟，所有套餐都能用（專案、臨時聊天除外）。
- 想學更多，可以看 OpenAI Academy（需要登入，約70~90分鐘的三門課程）或免費公開資料（OpenAI Academy 公開影片、DeepLearning.AI、Microsoft、Boostcourse）。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Review criteria | 稽核標準 | 判斷結果做得好不好的標尺 |
| Scheduled tasks | 定時任務 | ChatGPT 在約定的時間自己執行的任務 |
| Data analysis | 資料分析 | 計算上傳檔案裡的表格和數字，並以摘要、圖表呈現的功能 |
| Template | 模板 | 把示例檔案和可重複使用的指令打包在一起的框架 |
| Study mode | 學習模式 | 不給答案，而用提問和分步驟講解來教你的方式 |
| Characteristics | 特性 | 把溫暖、表情符號等回答的氛圍往多、往少調整的設定 |
| Writing block | 寫作塊 | 回答裡可以直接修改的草稿文字框 |
| OpenAI Academy | OpenAI 學院 | OpenAI 製作的免費線上 AI 課程 |
| Add-in | 載入項 | 附加在 Word、PowerPoint 這類程式裡使用的小功能 |

<ChapterDone :chapter="111" />

下一章：第2階段到此結束。請用[AI 知識水平測試](../00-common/level-test.md)來檢驗你的實力。

[^adopt]: OpenAI，「ChatGPT Usage and Adoption Patterns at Work」。"Advanced features remain underused, even where they could deliver broad impact." https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work（確認日期 2026-10-24）
[^work]: OpenAI 幫助中心，「ChatGPT Work and Codex」"Describe the outcome you want. Add any files, constraints, and review criteria ChatGPT should use." https://help.openai.com/en/articles/20001275 · 「Using cloud browser in ChatGPT」"Check the result and its sources before relying on it." https://help.openai.com/en/articles/20001280（確認日期 2026-10-24）
[^docs]: OpenAI 幫助中心，「Creating and editing documents, spreadsheets, and presentations with ChatGPT Work」。模板、`@Template-Creator`，"Say what must stay unchanged…" https://help.openai.com/en/articles/20001278（確認日期 2026-10-24）
[^prompt]: OpenAI 幫助中心，「How do I create a good prompt for an AI model?」。https://help.openai.com/en/articles/4936848（確認日期 2026-10-24）
[^aprompt]: OpenAI Academy，「Prompting」。https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting（確認日期 2026-10-24）
[^deep]: OpenAI 幫助中心，「Deep research in ChatGPT」。"Use search for quick facts, and use deep research for depth and thoroughness." https://help.openai.com/en/articles/10500283（確認日期 2026-10-24）
[^ask]: OpenAI 幫助中心，「How to Ask ChatGPT About Its Features」。https://help.openai.com/en/articles/12548278（確認日期 2026-10-24）
[^projects]: OpenAI 幫助中心，「Projects in ChatGPT」。https://help.openai.com/en/articles/10169521（確認日期 2026-10-24）
[^skills]: OpenAI 幫助中心，「Skills in ChatGPT」。"Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" https://help.openai.com/en/articles/20001066（確認日期 2026-10-24）
[^tasks]: OpenAI 幫助中心，「Scheduled tasks in ChatGPT」。各套餐的任務數、專案內任務的檔案訪問限制、分享時的注意事項。https://help.openai.com/en/articles/10291617（確認日期 2026-10-24）
[^data]: OpenAI 幫助中心，「Data analysis with ChatGPT」https://help.openai.com/en/articles/8437071 · 「Extracting Insights with ChatGPT Data Analysis」"Check this data for common issues." https://help.openai.com/en/articles/9213685（確認日期 2026-10-24）
[^study]: OpenAI 幫助中心，「Using study mode in ChatGPT」https://help.openai.com/en/articles/11780217 · 「Flashcards in ChatGPT」"Flashcards are automatically saved in your library." https://help.openai.com/en/articles/20001533（確認日期 2026-10-24）
[^char]: OpenAI 幫助中心，「Characteristics in ChatGPT」。https://help.openai.com/en/articles/20001038（確認日期 2026-10-24）
[^ui]: OpenAI 幫助中心，「Intelligent UI in ChatGPT」。"Select Personalization → Layout and Visuals → Simple." https://help.openai.com/en/articles/20001598（確認日期 2026-10-24）
[^blocks]: OpenAI 幫助中心，「Working with writing blocks and code blocks in ChatGPT」。https://help.openai.com/en/articles/20001246（確認日期 2026-10-24）
[^links]: OpenAI 幫助中心，「ChatGPT generated links」。https://help.openai.com/en/articles/10984597（確認日期 2026-10-24）
[^academy-courses]: OpenAI Academy 課程頁面（登入後）。AI Foundations "Duration: ~70 minutes", "Level: Introduction", "No technical background is required." · Applied AI Foundations "Duration: ~80 minutes", "Level: Intermediate", "We recommend completing AI Foundations first." · Agents and Workflows "Duration: ~90 minutes", "Level: Intermediate", "We recommend completing AI Foundations and Applied AI Foundations first.", "Access to agent capabilities"。三個頁面共同的 "The pathway includes two required steps: completing the course and passing the assessment with a score of at least 80%." / "Your progress is automatically saved." https://academy.openai.com/home/courses/ai-foundations-dnq5w · https://academy.openai.com/home/courses/applied-ai-foundations-szsmv · https://academy.openai.com/home/courses/agents-and-workflows-y0qoc（確認日期 2026-10-26）
[^academy-content]: OpenAI Academy 課程正文（需要登入和註冊）。AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Use ChatGPT as the workspace, not the source of truth." / "we recommend that you:" "Use a desktop computer or laptop". Applied AI Foundations: "A workflow has five parts" (Goal, Context, Steps, Checkpoints, Output) / "Do not ask ChatGPT to do the whole job at once." / "A workflow note keeps the goal, context, decisions, sources, capabilities, and review points in one place." Applied AI Foundations 補充: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations 補充: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Before you direct the agent to create the project brief document, have the agent review what's in the folder." / "Keep the update internal, do not send or publish it, do not invent owners or dates" / "If Work needs another approved source, start with a plugin. If the same workflow keeps repeating, consider a skill. If the same stable review should run later or recur, consider a scheduled task." / "Often, a clear prompt is enough." / "Use scheduled tasks for workflows that check, monitor, summarize, or report. Be cautious with anything that sends, posts, publishes, deletes, approves, changes records, or creates external commitments." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person"（確認日期 2026-10-26）
[^academy]: OpenAI 幫助中心，「OpenAI Academy courses」。"These badges and certificates of completion are not certifications" https://help.openai.com/en/articles/20001270（確認日期 2026-10-24）
[^word]: OpenAI 幫助中心，「ChatGPT for Word」。"ChatGPT for Word is available on all ChatGPT plans, including Free." / "Word, Excel, and PowerPoint use the same ChatGPT Microsoft add-in." / "ChatGPT memory and skills do not carry over to the add-in." / "Save a copy of important work before making substantial changes." https://help.openai.com/en/articles/20001526（確認日期 2026-10-24）
[^ppt]: OpenAI 幫助中心，「ChatGPT for PowerPoint」。"Free and Go include limited usage access." / "Ask for a plan first when you are making larger edits." / "For important work, duplicate the file first so you can revert if needed." https://help.openai.com/en/articles/20001242（確認日期 2026-10-24）
[^gpt-make]: OpenAI 幫助中心，「Creating and editing GPTs」。"Prefer positive, concrete instructions (“Do X”) over long lists of prohibitions (“Don’t do Y”) when possible." / "Use knowledge for reference material, not rules or behavior." / "Before adding more tools, tighten instructions and add examples." https://help.openai.com/en/articles/8554397（確認日期 2026-10-24）
[^slack]: OpenAI 幫助中心，「Using Slack in ChatGPT」。"A shared task link does not transfer your Slack connection, credentials, channel access, or message history." https://help.openai.com/en/articles/12525822（確認日期 2026-10-24）
[^apps-trouble]: OpenAI 幫助中心，「Troubleshooting plugins and apps in ChatGPT」。"If approval is required, the task pauses until you review it." / "Before resending an email or message, check the intended account’s sent messages and the destination." https://help.openai.com/en/articles/20001497（確認日期 2026-10-24）
[^drive]: OpenAI 幫助中心，「Google Drive app and setup in ChatGPT」。"Finding a filename or file details does not confirm that ChatGPT retrieved the file’s contents." https://help.openai.com/en/articles/10929079（確認日期 2026-10-24）
[^academy-public]: OpenAI Academy 公開頁面。「Introduction to Prompt Engineering」(Posted Mar 08, 2025)，「Advanced Prompt Engineering」，「ChatGPT fundamentals」(Last updated on May 30, 2026)。三個頁面都確認了可以在未登入的瀏覽器中開啟。https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13 · https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13 · https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics（確認日期 2026-10-25）
[^dlai]: DeepLearning.AI，「ChatGPT Prompt Engineering for Developers」。講師 Isa Fulford "Member of Technical Staff, OpenAI"·Andrew Ng，"1h40m"，"Beginner"，"Only a basic understanding of Python is needed."，"Course access is free for a limited time during the DeepLearning.AI learning platform beta!" https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/（確認日期 2026-10-25）
[^msgenai]: Microsoft，「Generative AI for Beginners」GitHub 倉庫 README。"This course has 21 lessons." / "Lessons are labeled either 'Learn' lessons explaining a Generative AI concept or 'Build' lessons that explain a concept and code examples"。韓語翻譯在 `translations/ko` 資料夾。https://github.com/microsoft/generative-ai-for-beginners（確認日期 2026-10-25）
[^boost]: Boostcourse（부스트코스），「用 AI 學習的分步策劃書寫作法（AI로 배우는 단계별 기획서 작성법）」課程介紹。「免費課程（무료강의）」，難度「入門（입문）」，「隨時聽課（상시 수강）」，課程計劃 #1~#3 和「[作業] 自主實踐（[과제] 자율 실습 해보기）」，講師李承弼（이승필）。https://www.boostcourse.org/aix210（確認日期 2026-10-25）
[^coursera]: Coursera 課程頁面 FAQ。"To access course materials, assignments, and earn a Certificate, you'll need to purchase the Certificate experience when you enroll in a course." https://www.coursera.org/learn/prompt-engineering · https://www.coursera.org/learn/generative-ai-for-everyone（確認日期 2026-10-25）
[^scheduled-name]: 幫助中心把這個選單叫作「已安排（예약됨）」，但實際的介面名稱是「定時任務（예약）」。
[^screen-scheduled]: 親自確認了側邊選單「定時任務（예약）」介面。提示文字 "ChatGPT에게 작업 예약, 알림 설정 또는 업데이트 모니터링을 요청하세요"（請 ChatGPT 安排任務、設定通知或監控更新），輸入框「安排任務（작업 예약하기）」，任務行的「暫停（일시 중지）」「編輯（편집）」按鈕，「推薦（추천）」列表（新聞更新、郵件監控、尋找週末讀物等）。點開任務開啟的面板裡顯示的是真實的任務結果，所以沒有收入（確認日期 2026-10-28，Plus 賬號網頁介面）
[^screen-data]: 上傳假會費賬本 fees.csv，併發送本節的提示詞後親自確認。第一次回答找出了空值和重複，並停止了彙總；第二次回答裡的圖片圖表，韓文變成了方框，請它重新畫之後，換成了畫在介面裡的圖表。圖表旁邊的按鈕是「下載圖表（차트 다운로드）」「展開圖表（차트 펼치기）」。刪除對話之後，fees.csv 仍留在資料庫裡，從資料庫裡刪除時，提示 "휴지통으로 이동되며 30일 후 영구 삭제됩니다"（將移到回收站，30天後永久刪除）（確認日期 2026-10-28，Plus 賬號網頁介面）
[^screen-study]: 在輸入框裡輸入 `@study`，親自確認了建議列表（沒有傳送）。建議名稱「學習（공부하기）」，說明 "새로운 개념을 배워보세요"（學習新概念）（確認日期 2026-10-28，Plus 賬號網頁介面）
