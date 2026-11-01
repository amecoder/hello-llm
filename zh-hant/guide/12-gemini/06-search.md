# 第6章 搜尋與 Deep Research——核實依據、長篇調查報告、筆記本、學習助手

> **一句話總結**：如果需要把多方資料查詢並整理成的**長篇報告**，就用 **Deep Research**。它會先給你看調查計劃，有要改的地方，當場就改。
> 想長期收集某個主題的資料和對話，就用**筆記本**；學習時用**引導式學習·測驗·閃卡**。無論是什麼回答，依據都要親自核實。

介面以 2026 年 10 月的網頁版為準，圖片是付費套餐（Google AI Pro）的韓語介面。

## 核實回答的依據

Gemini 的回答可能出錯。Google 也提醒，**要時常審視回答，並用內建工具或 Google 搜尋重新核實事實**。[^learn]
如果在回答下方或句子之間看到「來源」，請點開，開啟原文看看。也有沒有來源的回答（[第3章](03-chats.md#核實出處)）。

核實時，請這樣問問自己。

- 來源連結真的是在說這個內容嗎？
- 數字和日期與原文一致嗎？
- 來源是官方機構或可靠的地方嗎？

**問得越具體，回答越有用。**[^learn] 比如，可以這樣比較一下。

| 不夠好的問題 | 更好的問題 |
|---|---|
| “告訴我閱讀率” | “告訴我最近 10 年韓國成年人的年度閱讀率是怎麼變化的，並附上官方統計的出處” |

更好的問題寫全了期間·物件·出處條件，核實回答也更容易（[第1階段第9章](../00-common/09-safety.md)）。

<Quiz id="ch306-check" />

## Deep Research——拿到長篇調查報告

**Deep Research** 是一個會多次搜尋、推敲之後，為你做出**綜合報告**的功能。預設使用 Google 搜尋作為來源。[^deep]
需要的條件是**年滿 18 週歲並已登入**。幫助文件裡沒有說一定要有付費套餐。不過免費賬號在人多的時段可能用不了（[第1章](01-getting-started.md#使用額度——5-小時·每週·閱讀量)）。[^deep][^limits] Google AI Pro·Ultra 可以用質量更高的模型生成報告。[^deep]

### 開始使用

請點輸入框的「+」 → 「更多工具」 → 「Deep Research」（[第2章](02-screen-tour.md#輸入框和-選單)）。[^deep][^screen]

![輸入框裡 ① 「Deep Research」已開啟的樣子。提示文字“你想調查什麼？”，② 「來源」按鈕，③ 來源選單（“請選擇一個或多個來源”——「Google 搜尋」（已勾選）·「Gmail」·「Drive」·「聊天」·「啟用已連線的應用」），④ 「檔案」按鈕上標有紅色編號](../../../guide/12-gemini/assets/shot-16-deep-sources-marked.png)

**紅色編號和下面列表的編號是同一處。**[^screen]

- ① 表示「Deep Research」已經開啟。輸入框的提示變成“你想調查什麼？”。
- ② 點「來源」，就可以選擇 ③ 到哪裡去找。「Google 搜尋」一開始就是勾選的。
- ③ 「聊天」看起來是把我過去的 Gemini 對話作為來源加進去的選項（幫助文件裡沒有說明）。要把 Gmail·Drive 作為來源使用，Google Workspace 必須已連線到 Gemini（[第7章](07-skills-apps.md#已連線的應用-—-在-gemini-裡用-gmail·drive·日曆)）。[^deep] 去掉「Google 搜尋」的勾選後，就**只在選定的來源裡**查詢。[^deep]
- ④ 用「檔案」可以一起放進我的檔案。[^deep]

寫下要調查的主題傳送後，Gemini 會先給你看**調查計劃**。[^deep]

### 確認計劃後開始

![Deep Research 進行中的介面。① 計劃下面的「修改計劃」·「開始研究」按鈕，② 寫著“正在調查 16 個網站……”的進度卡片，③ 右側調查面板（「顯示思考過程」，調查步驟和找到的網站列表），④ 停止按鈕上標有紅色編號](../../../guide/12-gemini/assets/shot-17-deep-run-marked.png)

**紅色編號和下面列表的編號是同一處。**[^screen]

- ① 用**「修改計劃」**來修改計劃，點**「開始研究」**，調查就開始了。[^deep][^screen]
- ② 調查開始後，會出現“我這就開始。研究完成後會通知你。在此期間你可以離開這個對話。”的回答，以及進度卡片。[^screen]
- ③ 在右側面板裡，可以看到按哪些步驟調查、查看了哪些網站。[^screen]
- ④ 想停下來，就點這個按鈕。彈出「要取消調查嗎？」時，點「是，取消」。[^screen]

**如果想修改計劃，請儘量馬上點「修改計劃」。** 這本指南試過一次，沒有點「開始研究」，調查卻已經開始了。圖中的「開始研究」氣泡也是當時自己冒出來的。幫助文件裡只寫著要點「開始研究」才會開始，所以沒能確認為什麼會這樣。如果已經開始了，可以用 ④ 停下來。[^screen]

報告**通常需要 5~10 分鐘**，複雜的會更久。等待期間可以離開對話。完成後會通知你。[^deep]

### 要知道的事

- **會用掉很多用量**（[第1章](01-getting-started.md#使用額度——5-小時·每週·閱讀量)）。[^limits] 一天能做的調查數量，以及能同時執行的調查數量也有上限。接近上限時，會告訴你剩餘的次數。[^deep]
- **過去的報告在對話列表裡找。** 必須開著「保留活動記錄」，之後才能找到。[^deep]
- **報告可以匯出到 Docs。**[^deep] 也可以轉成音訊概覽（[第4章](04-files-create.md#canvas-—-一起修改文件和應用)）。[^deep]

報告也是 Gemini 寫的文字。重要的數字，請開啟報告裡的來源連結親自核實。

```
請調查最近 10 年韓國成年人的年度閱讀率是怎麼變化的。
優先使用官方統計（文化體育觀光部的國民閱讀實況調查等），
各年份的數值做成表格，每個數值都附上出處。
```

### 那 Deep Think 呢？

**Deep Think** 曾經是思考更久的功能，但現在**正在被 Gemini 4 Argon 取代**。而且以前只有 Google AI Ultra 訂閱者才能用。[^deepthink] 難題的話，在[第2章](02-screen-tour.md#模型按鈕-—-模型和思考級別)的模型按鈕裡選擇 Argon 和思考級別「高」就行（Pro·Ultra）。

<Quiz id="ch306-deep" />

## 筆記本——按主題收集資料和對話

**筆記本**是把一個主題的資料（來源）、指示和對話集中放在一處的空間。在裡面對話時，它會記住放進去的資料和指示以及以前聊過的內容，接著繼續。[^notebook]
比如，在“讀書會”筆記本里放進章程、上次的會議記錄和聚會日程表，就不用每次重新上傳資料了。

點側邊選單「筆記本」下面的「新建筆記本」，取個名字後提問。資料透過「新增來源」放進去（[第2章](02-screen-tour.md#側邊選單-—-新聊天和以前的對話)）。[^notebook][^screen]

| 可以放的資料 | 例子 |
|---|---|
| 我裝置裡的檔案 | PDF、文件、表格檔案、圖片、音訊、文字 |
| Google Drive 檔案 | 上傳到 Drive 裡的文件·表格 |
| 網站地址 | 文章或說明頁面 |
| 複製的文字 | 備忘、郵件正文 |

出處：Google 幫助文件[^notebook]

有幾點要知道。[^notebook]

- **一個筆記本最多可以放 600 份資料**（因套餐而異）。
- 在筆記本里也可以使用**網頁搜尋和 Gemini 工具**。
- 筆記本改名、放入指示（「筆記本設定」）、置頂，在「所有筆記本」裡透過筆記本的「更多」來做。
- **刪除筆記本時，裡面的資料和對話也會一起刪除。**
- 即使「保留活動記錄」關閉，也可以對話，但是對話自動儲存、記住過去的對話、放入過去的對話、**把 Drive 檔案作為資料放入**等一部分功能不能使用。
- 這是逐步開放的功能，所以可能還看不到。

用對話選單裡的「新增到筆記本」，也可以把過去的對話放進筆記本（[第3章](03-chats.md#置頂·改名·刪除)）。這個也必須開著「保留活動記錄」才行。[^notebook][^screen]

<Quiz id="ch306-notebook" />

## 學習助手——引導式學習·測驗·閃卡

學習時，可以把 Gemini 當作**家教**來用。請點輸入框的「+」 → 「更多工具」 → **「引導式學習」**。[^tutor][^screen] 也可以請它用圖片或圖表來講解。[^tutor]

準備考試時，請它做**測驗、閃卡（正面是問題、背面是答案的單詞卡片）、學習指南**。[^study] 要領是先說要做什麼，然後再寫資料或主題。[^study]

```
幫我出一份測驗。主題是朝鮮後期的實學，出 10 道選擇題。
```

```
幫我做閃卡。正面是英語單詞，背面是詞義和例句。單詞用下面的列表。
（貼上單詞列表）
```

- 做測驗時，可以看「提示」，或者做完後用「生成更多問題」得到更多題目。做完後，會告訴你**強項和需要繼續學習的部分**。[^study]
- 閃卡可以使用打亂順序（「隨機模式」）和朗讀。[^study]
- 作為模擬考試，幫助文件裡寫的考試有 SAT·JEE Main·NEET UG 等，沒有寫韓國的考試。[^study]

**用在學校作業上時，請先確認學校的 AI 使用規定。**[^learn] 把 Gemini 的建議當作出發點，再加上自己的想法和語言來完成。[^learn]

<Quiz id="ch306-study" />

## 親自試一試

1. 選一個你好奇的主題，比如“最近 10 年韓國1 人家庭比例的變化”，開啟 Deep Research，計劃出來後用「修改計劃」改成“只用官方統計”，然後點「開始研究」。
2. 從報告裡選一個數字，開啟來源連結，確認和原文是否一致。
3. 用「新建筆記本」建立“讀書會”筆記本，用「新增來源」放進練習用的通知，然後試著說“請用這個格式寫下次聚會的通知”。
4. 開啟「引導式學習」，一步一步地學一個你最近好奇的概念。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：把作業裡的示例檔案（會議記錄·備忘·賬本）作為來源放進“讀書會”筆記本，然後問“請整理下次聚會要準備的東西和剩餘的會費”。親自確認得到的數字和賬本是否一致。

## 整理

- Gemini 的回答可能出錯。開啟「來源」，用內建工具或 Google 搜尋重新核實。問得越具體，越容易核實。
- Deep Research 年滿 18 週歲的人登入後就能用。免費賬號在擁擠的時段可能用不了。在「來源」裡選擇 Google 搜尋·Gmail·Drive 等，計劃出來後點「修改計劃」或「開始研究」。
- 報告通常需要 5~10 分鐘，會用掉很多用量。每天的調查數量有上限。可以匯出到 Docs。
- Deep Think 正在被 Gemini 4 Argon 取代。
- 筆記本按主題收集資料（因套餐而異，最多 600 份）·指示·對話。刪除筆記本時，裡面的資料和對話也會一起刪除。
- 用「引導式學習」、測驗、閃卡來輔助學習。學校作業要先看學校的規定。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Deep Research | 深度研究 | 多次搜尋、推敲後做出綜合報告的功能 |
| Source | 來源（出處·資料） | 作為回答或調查依據的網頁·檔案 |
| Research plan | 調查計劃 | Deep Research 在調查之前給你看的步驟列表 |
| Deep Think | 深度思考 | 曾經會思考很久的功能。正在被 Gemini 4 Argon 取代 |
| Notebook | 筆記本 | 集中放一個主題的資料·指示·對話的空間 |
| Guided Learning | 引導式學習 | 把 Gemini 當作家教的學習工具 |
| Flashcard | 閃卡 | 正面是問題、背面是答案的單詞卡片 |

<ChapterDone :chapter="306" />

下一章：[第7章. 技能和已連線的應用](07-skills-apps.md)

[^screen]: 在 Gemini 網頁介面（Google AI Pro，韓語）上用練習用的對話親自確認（對話在截圖後已刪除）。開啟「Deep Research」後輸入框提示 "무엇을 조사하고 싶으신가요?"，「소스」（已選中 Google 搜尋）和「파일」按鈕。「소스」選單 "하나 이상의 소스를 선택하세요"——「Google 검색」「Gmail」「Drive」「채팅」「연결된 앱 사용 설정」。計劃下面的按鈕「계획 수정」「연구 시작」（幫助文件韓語版是「계획서 수정」「조사 시작」）。調查開始後的回答 "착수할게요. 연구가 완료되면 알려 드릴게요. 그러는 동안 이 대화에서 나가셔도 됩니다."，進度卡片 "웹사이트 16개 조사 중..."，右側面板「생각하는 과정 표시」。點停止按鈕會出現「조사를 취소하시겠어요?」——「아니요」「예, 취소합니다」。這本指南在沒有點「연구 시작」的情況下，等計劃期間調查就開始了，所以拍下進行介面後取消了。「도구 더보기」裡的「가이드 학습」，側邊選單「노트북」裡的「새 노트북」「모든 노트북」，對話選單裡的「노트북에 추가」。（確認日期 2026-10-31）
[^learn]: Google 幫助文件，《Learn in creative ways with generative AI》（韓語版《생성형 AI를 활용해 창의적으로 학습하기》）。"Important: Make sure to check and follow your school’s policy on using Generative AI." / "Use its suggestions as a starting point, then add your own unique voice and ideas to create something truly original." / "Always evaluate responses: While generative AI is a powerful tool, it can make mistakes." / "It’s important to always fact-check information using built-in tools or by double-checking with Google Search." / "Be specific: The more specific your questions, the more helpful the AI's answers will be." https://support.google.com/gemini/answer/15216790 （確認日期 2026-10-31）
[^deep]: Google 幫助文件，《Use Deep Research in Gemini Apps》（韓語版《Gemini 앱에서 Deep Research 사용하기》）。"By default, Gemini includes Google Search as a source for your research." / "You can also upload files and add NotebookLM notebooks." / "Be 18 or over." / "Google AI Pro and Google AI Ultra users can generate reports using Pro for even higher quality. All users can use Thinking for their reports." / "In Gemini Apps, there are limits for:" / "Number of research requests you can run at the same time" / "If you’re close to your limit, Gemini Apps notifies you how many research requests are left for the day." / "To update the research plan before you create a report, click Edit plan." / "Click Start research." / "Google Search is included as a source by default. To limit your research to other selected sources, deselect Google Search." / "It usually takes about 5-10 minutes to generate the report since Gemini analyzes many sources. For more complex reports, it may take longer." / "Important: You can only find past research reports if your Keep Activity setting is on." / "To export the report, click Export to Docs ." / "Other Google services, like Gmail and Drive, are only available if the Google Workspace app is connected to Gemini Apps." / "On the right in the Canvas panel, click Create  Audio Overview ." 韓語版裡有 "Gemini가 주제에 맞는 조사 계획서를 작성합니다." https://support.google.com/gemini/answer/15719111 （確認日期 2026-10-31）
[^limits]: Google 幫助文件，《Gemini Apps limits & feature availability》。"This requires Gemini to use multiple, multi-step search queries and several rounds of reasoning sweeps to create a comprehensive report." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." https://support.google.com/gemini/answer/16275805 （確認日期 2026-10-31）
[^deepthink]: Google 幫助文件，《Use Deep Think in Gemini Apps》（韓語版《Gemini 앱에서 Deep Think 사용하기》）。"Important: Deep Think is being replaced by Gemini 4 Argon." / "Be a Google AI Ultra subscriber or have a Google AI Ultra for Business license." https://support.google.com/gemini/answer/16345172 （確認日期 2026-10-31）
[^notebook]: Google 幫助文件，《Organize your projects with notebooks in Gemini Apps》（韓語版《Gemini 앱의 노트북으로 프로젝트 정리하기》）。"Notebooks provide a continuous chat experience that remembers your sources, instructions, and ongoing discussions." / "We’re gradually making this feature available, so it might not be available to you just yet." / "Some features in notebooks require Keep Activity turned on. When Keep Activity is off, you can still chat with your notebook, but the following features aren’t available" / "Give your new notebook a name. This name helps you organize your notebooks and also helps you find them" / "Based on your Google AI Plan, you can add up to 600 sources." / "Files from your device: PDFs, documents, spreadsheets, images, audio, text files, files, and .md files." / "Files from Google Drive." / "Websites/URLs" / "Copied text" / "Auto-saving chats. Gemini cannot save new chats in your notebook." / "Adding existing chats. You cannot add existing chats to a notebook directly from the sidebar." / "Google Drive. You cannot add files from Google Drive as sources." （這兩條都是關閉保留活動記錄時不能用的功能列表）/ "Pin or unpin a notebook" / "Your chats in Gemini apps notebooks can include web searches and use of any Gemini tools." / "Important: If you delete a notebook, any sources or chats that you added to that notebook will also be deleted." / "You can create detailed instructions for Gemini Apps, like how to format responses or the tone you want it to use." 韓語介面名稱「새 노트북」「소스 추가」「모든 노트북」「이름 바꾸기」「노트북 설정」「고정」。https://support.google.com/gemini/answer/16972047 （確認日期 2026-10-31）
[^tutor]: Google 幫助文件，《Use learning tools in Gemini Apps》（韓語版《Gemini 앱에서 학습 도구 사용하기》）。"You can use Gemini Apps as a tutor with guided learning, visual aids, and educational resources." / "Gemini Apps may include images in responses to help explain a topic or concept. You can also ask Gemini to provide a diagram or image in your prompt." https://support.google.com/gemini/answer/16448384 （確認日期 2026-10-31）
[^study]: Google 幫助文件，《Create quizzes, flashcards, practice tests & more in Gemini Apps》（韓語版《Gemini 앱에서 퀴즈, 플래시카드, 연습 시험 등 만들기》）。"You can use Gemini Apps to create, use, and share study materials like flashcards, quizzes, and study guides to help prepare for exams." / "Tip: Start your prompt telling Gemini what to create followed by the materials or topic you want to study." / "Supported tests include SAT, JEE Main, and NEET UG." / "Once you finish a quiz, wait a moment for Gemini to share strengths and focus areas." / "To get a hint, click Hint." / "To generate more questions, when you complete the quiz, click More questions." / "To have Gemini play audio of the text, click Text to speech ." / "To shuffle the flashcards, click Shuffle mode . This will shuffle all of the flashcards in the deck." 韓語介面名稱「힌트」「더 많은 질문 생성」「셔플 모드」「텍스트 음성 변환」。https://support.google.com/gemini/answer/16275879 （確認日期 2026-10-31）
