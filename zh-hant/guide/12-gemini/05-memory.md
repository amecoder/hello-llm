# 第5章 記憶與個性化設定 — 記憶、指令、從其他 AI 遷移過來

> **一句話總結**：Gemini 會根據**過往對話（記憶）**、**已連線的 Google 應用**和**我寫下的指令**，來給出適合我的回答。
> 記憶有誤時，直接在對話中糾正；想刪除時，就刪掉包含那些內容的對話。ChatGPT·Claude 裡的記憶和對話也可以遷移過來。

介面以 2026年10月的網頁版為準，截圖是付費套餐（Google AI Pro）的韓語介面。這一章的功能中，有些**只有在美國**才能用，這類功能已經單獨標出。

## Gemini 瞭解我的三條路

Gemini 透過三種方式，給出適合我的回答。[^personal]

| 途徑 | 用什麼 | 本指南里 |
|---|---|---|
| 記憶 | 過去的 Gemini 對話 | 這一章 |
| 已連線的應用 | Gmail·Google 相簿這類 Google 應用裡的內容[^apps] | [第7章](07-skills-apps.md) |
| 指令 | 我寫下的偏好（語氣·格式等） | 這一章 |

出處：Google 幫助文件[^personal]

這些功能**只有個人 Google 賬號**才能用。公司·學校賬號，或者由監護人管理的賬號上不行。[^personal] 它們目前還沒有對所有人開放，所以每個功能的條件各不相同。[^personal]

設定集中在一個地方。請點「設定（설정）」→「個人智慧（개인 인텔리전스）」。[^screen][^memory]

![「設定」→「個人智慧」介面。標題下方寫著“根據對我的瞭解，獲得更有用的回答和推薦。” 紅色編號標出：①「記憶」卡片（“Gemini 會透過之前的對話內容，更好地瞭解使用者。”），② 記憶開關（已開啟），③「已連線的應用」卡片，④「Gemini 請求事項」卡片](../../../guide/12-gemini/assets/shot-14-personal-marked.png)

**紅色編號和下面列表裡的編號是同一個位置。**[^screen]

- ①「記憶（메모리）」：透過過往對話來了解我的功能。可以用「管理和刪除（관리 및 삭제）」去整理過往的對話。
- ② 開啟和關閉記憶的開關。
- ③「已連線的應用（연결된 앱）」：Google 應用的連線（[第7章](07-skills-apps.md#已連線的應用-—-在-gemini-裡用-gmail·drive·日曆)）。
- ④「Gemini 請求事項（Gemini 요청 사항）」：寫下指令的地方。說明是“個性化定製 Gemini 的回答（例：‘請對長段落使用專案符號’）”。點它會單獨開啟一個介面（見下面的“指令”一節）。

<Quiz id="ch305-overview" />

## 記憶 — 記住過往的對話

開啟**記憶**後，Gemini 會從過往對話裡瞭解我和我周圍的情況，並用在回答裡。[^memory]
比如，你上次說過“我正在準備下個月的濟州島旅行”，以後聊到旅行時，它就可以接著用這些內容。它有時還會主動建議正在做的事的下一步，或旅行計劃。[^memory]

使用有幾個條件。[^memory]

- **年滿 18 週歲**，個人 Google 賬號
- **「儲存活動記錄（활동 기록 보관）」必須是開著的**（[第3章](03-chats.md#查詢過去的對話)）
- **有些功能裡不會用到。** 典型的是 Gem 和語音對話（Live）。不過，在文字對話時，可以請它參考過去的語音對話。

### 詢問過去的對話

在新對話裡，可以按**主題或時間**詢問過去的對話。[^recent]

```
找一下上個月聊讀書會地點的那場對話，幫我總結一下。
```

如果 Gemini 參考了過往對話，答案下方的「來源和相關內容（소스 및 관련 콘텐츠）」裡會顯示「之前的聊天（이전 채팅）」。不過，這個標記偶爾會出錯。[^recent]
好奇的話，直接問它。問一句“你用過往對話裡的資訊了嗎？”就行。[^memory]

### 記憶有誤時，想刪除時

**錯誤的內容，直接在對話裡糾正。** 記憶開著的話，Gemini 會採納那句話。不過，它也未必每次都能改對。[^memory]

**想刪除記憶，必須把包含那些內容的對話全部刪掉。** 請在「Gemini 應用活動」裡找到那些對話並刪除。[^memory] 刪除之後，答案裡也要過一會兒才會不再出現。[^memory]

即使用指令說“請忘掉那件事”，也**不一定每次都會遵守。** 想讓它徹底不再提，請把那個主題的對話刪掉。[^instructions]

**直接關閉記憶**的話，Gemini 就不再新學習關於我的內容。把上圖裡 ② 的開關關掉就行。[^instructions][^screen]

<Quiz id="ch305-memory" />

## 指令 — 不用每次都說

**指令**是我希望 Gemini 始終遵循的、屬於我的規則。寫下一次，在新對話裡也不用再說。[^instructions]
介面上的名稱是「Gemini 請求事項」（上圖的 ④）。[^screen] **指令，所有使用者都可以新增。**[^instructions]

指令的例子如下。[^instructions]

```
所有回答都先用簡短的總結開頭。
```

```
長段落請用專案符號拆開。
```

比較一下不夠好的指令和更好的指令。

| 不夠好的指令 | 更好的指令 |
|---|---|
| “講得好一點” | “出現專業術語時，用括號裡的通俗話解釋” |
| “簡短” | “回答控制在五行以內，最後一行只寫一件要做的事” |

更好的指令足夠具體，我可以立刻確認 Gemini 有沒有遵守（[第1階段第4章](../00-common/04-prompt-basics.md)）。

新增指令的順序如下。第 1 步在介面上確認過，第 2~3 步是幫助文件裡寫的名稱（本指南沒有開啟指令的內部介面）。[^instructions][^screen]

1. 點「設定」→「個人智慧」→「Gemini 請求事項」。
2. 點「新增 +（추가 +）」，寫下指令後提交（제출）。
3. 要修改或刪除，點那條指令的「更多（더보기）」。也可以用最上面的開關，把指令整體開啟或關閉。

### 用對話讓它記住（僅限美國）

也有一個功能，是在對話中說一句，比如“記住我是素食者”，來讓它記住。但這個功能**目前只有在美國**才能用，而且需要 Google AI 套餐並年滿 18 週歲。[^instructions]
在韓國，請用上面的**指令**達到同樣的效果。像“我吃素。推薦食物時請去掉肉類。”這樣寫下來就行。

還有一個**記憶摘要**介面，可以彙總、檢視並修改 Gemini 對我的理解，但這個也是**只面向美國的付費套餐使用者，而且只有英語**。[^summary]

<Quiz id="ch305-instructions" />

## 從其他 AI 遷移過來

如果你原來用 ChatGPT 或 Claude，現在換到 Gemini，可以**把記憶和對話帶過來。**[^import] 請在「設定」選單的「資料和隱私（데이터 및 개인 정보 보호）」組裡，點「向 Gemini 匯入記憶（Gemini로 메모리 가져오기）」（[第2章](02-screen-tour.md#設定頁面-—-賬號、偏好設定、隱私)）。[^screen]

![「向 Gemini 匯入記憶」介面。紅色編號標出：① 要貼上到其他 AI 的提示詞和「複製」，②「在這裡貼上資訊...」欄和「新增記憶」，③「匯入聊天」— ZIP 檔案（5 GB 以下）和「新增」，④ 說明匯入後繼續聊的對話會儲存到活動裡，並用於包括 AI 模型訓練在內的服務改進的提示](../../../guide/12-gemini/assets/shot-15-import-marked.png)

**匯入記憶**的做法如下。[^import][^screen]

1. 把 ① 的提示詞「複製（복사）」，貼上到 ChatGPT 或 Claude 的聊天窗口裡。
2. 複製那個 AI 整理出的關於我的答案。
3. 貼上到 ② 欄裡，點「新增記憶（메모리 추가）」。

**匯入對話**在 ③ 裡做。請用「新增（추가）」上傳從 ChatGPT 或 Claude 匯出的 ZIP 檔案。[^import][^screen]

- ChatGPT 在「設定 > 資料管理」的「匯出資料」裡獲取，Claude 在「設定」→「隱私」的「匯出資料」裡獲取。詳細路徑請看 [ChatGPT 第8章](../11-chatgpt/08-privacy.md#匯出資料)·[Claude 第9章](../10-claude/09-privacy.md#下載我的資料)。Gemini 幫助文件把這個選單翻譯成「資料控制」，但本指南確認過的 ChatGPT 介面名稱是「資料管理（데이터 관리）」。[^import]
- 一個檔案最大 5GB，一天最多上傳 5 個。[^import]
- 再次上傳同一個 ZIP 時，新對話會被新增，之前匯入過的對話會被覆蓋。[^import]

**匯入之前有一點要知道。** 正如 ④ 所寫，匯入後**繼續聊下去**的對話會儲存到我的活動裡，並**用於包括生成式 AI 模型訓練在內的 Google 服務改進。**[^import][^screen] 活動可以隨時管理和刪除。

匯入只有個人 Google 賬號、年滿 18 週歲才能用。在歐洲經濟區（EEA）·瑞士·英國不行。[^import]

<Quiz id="ch305-import" />

## 親手試一試

1. 開啟「設定」→「個人智慧」，確認「記憶」是不是開著的。
2. 在「Gemini 請求事項」裡新增“所有回答都先用簡短的總結開頭。”，然後在新對話裡隨便問一個問題。是以總結開頭的嗎？
3. 在新對話裡問一句“你用過往對話裡的資訊了嗎？”。
4. 確認完畢後，把第 2 步的指令刪掉，或者用開關關掉。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：在「Gemini 請求事項」裡新增“讀書會通知請用敬語，把日期·地點·需要準備的東西寫在最上面。”，然後在新對話裡再請它寫一次通知，看看指令有沒有被遵守。

## 小結

- Gemini 透過記憶（過往對話）、已連線的應用、指令來貼合我。設定集中在「設定」→「個人智慧」。
- 記憶需要年滿 18 週歲·個人賬號·「儲存活動記錄」。Gem 和語音對話裡不會用到。
- 錯誤的記憶，在對話裡糾正；想刪除，就把包含那些內容的對話全部刪掉。“請忘掉”這樣的指令不一定每次都被遵守。
- 指令（「Gemini 請求事項」）所有使用者都能用。用對話讓它記住，以及記憶摘要，僅限美國。
- ChatGPT·Claude 的記憶，複製提示詞來遷移；對話則用匯出的 ZIP 匯入。匯入後繼續聊的對話，會用於包括 AI 訓練在內的服務改進。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Memory | 記憶 | 從過往對話中瞭解我並用在回答裡的功能 |
| Personal Intelligence | 個人智慧 | 把記憶·已連線的應用·指令合在一起的個性化功能及其設定介面 |
| Instructions for Gemini | Gemini 請求事項（指令） | 我希望 Gemini 始終遵循的、屬於我的規則 |
| Memory summary | 記憶摘要 | 檢視並修改 Gemini 所理解的我的介面。僅限美國 |
| Import | 匯入 | 把其他 AI 的記憶·對話搬到 Gemini |
| ZIP | ZIP | 把多個檔案打包成一個的壓縮檔案 |

<ChapterDone :chapter="305" />

下一章：[第6章. 搜尋與 Deep Research](06-search.md)

[^screen]: 在 Gemini 網頁介面（Google AI Pro，韓語）裡親自確認。「設定（설정）」→「個人智慧（개인 인텔리전스）」（地址 /personalization-settings）介面 "나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요."（根據對我的瞭解，獲得更有用的回答和推薦），卡片「記憶（메모리）」（"Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다. 언제든지 이전 채팅을 관리 및 삭제할 수 있습니다."，意思是：Gemini 會透過之前的對話內容更好地瞭解使用者，隨時可以管理和刪除之前的聊天）和開關，「已連線的應用（연결된 앱）」，「Gemini 請求事項（Gemini 요청 사항）」。「設定」→「向 Gemini 匯入記憶（Gemini로 메모리 가져오기）」（地址 /import）介面 "1 다른 AI 제공업체와의 채팅에 이 프롬프트 복사하기" 「複製（복사）」，"2 여기에 대답 붙여넣기" 「여기에 정보를 붙여넣으세요...」 「新增記憶（메모리 추가）」，「匯入聊天（채팅 가져오기）」 "지원되는 AI 제공업체에서 데이터를 내보낸 후 ZIP 파일(5 GB 이하)로 Gemini에 직접 업로드하세요." 「新增（추가）」，"Gemini로 가져와 계속 이어 간 채팅은 활동에 저장됩니다. 이 데이터는 생성형 AI 모델 학습을 비롯한 Google 서비스를 개선하고 Google, Google 사용자, 일반 대중을 보호하는 데 사용됩니다."（意思是：匯入 Gemini 後繼續聊的對話會儲存到活動裡，這些資料用於改進包括生成式 AI 模型訓練在內的 Google 服務，並保護 Google、Google 使用者和公眾）。「Gemini 請求事項」卡片說明 "Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')"。「向 Gemini 匯入記憶」在「設定」選單的「資料和隱私（데이터 및 개인 정보 보호）」組裡。「Gemini 請求事項」裡面的介面會顯示使用者的指令，所以沒有開啟。只確認了 Google AI Pro 介面，沒能確認免費·未成年賬號上是否看得到這張卡片。（確認日期 2026-10-31）
[^personal]: Google 幫助文件，《Get personalization in Gemini Apps》（韓語版《Gemini 앱에서 개인화 기능 사용하기》）。"You can get a personalized experience in Gemini Apps based on:" / "These features are not available to everyone at this time. You can find details about each feature in the articles linked below." / "To use these features, you must sign in to Gemini Apps with a personal Google Account. These features are not available while signed in to a work, school, or supervised account." https://support.google.com/gemini/answer/16598623（確認日期 2026-10-31）
[^memory]: Google 幫助文件，《Get personalization with memory of your past Gemini chats》（韓語版《이전 Gemini 채팅의 메모리를 사용해 개인화 기능 사용하기》）。"With this feature, Gemini can learn from your chats to understand more about you and your world." / "Be 18 or over." / "Not available in certain features, like Gems or Live chats. In a text chat, you can ask Gemini to reference a past Gemini Live conversation." / "At the top, tap Menu   Settings & help   Personal Intelligence." / "Tip: When Memory is turned on, Gemini may suggest topics or tools for you based on previous conversations. For instance, Gemini might:" / "Suggest next steps for a project you’re working on" / "Offer to help plan a trip you’ve mentioned" / "To correct what Gemini knows about you and uses in a response:" / "Make sure that Memory is turned on." / "If you delete a chat, there might be a short delay before Gemini stops using it to personalize your responses." / "To check if Gemini used your past chats, just ask Gemini, “Did you use any info from past chats?”" / "To delete something that Gemini remembered about you, delete all chats with this info from Gemini Apps Activity." / "While Gemini continues to improve, it might not always get it right." https://support.google.com/gemini/answer/16598469（確認日期 2026-10-31）
[^recent]: Google 幫助文件，《Find & manage your recent chats in Gemini Apps》。"In a new chat, you can ask Gemini about your past Gemini chats by topic or timeframe, or ask it to reference them before responding." / "Gemini may occasionally make mistakes and display this label incorrectly." 韓語介面名稱：「소스 및 관련 콘텐츠」「이전 채팅」。 https://support.google.com/gemini/answer/13666746（確認日期 2026-10-31）
[^instructions]: Google 幫助文件，《Manage what Gemini remembers about you and customize responses》（韓語版《Gemini가 나에 대해 기억하는 정보 관리 및 대답 맞춤설정》）。"Gemini will remember the information or instructions you share with it, even in new chats." / "be over 18." （韓語版 "만 18세 이상이어야 합니다."） / "Have a Google AI plan." / "Only available in the US. All users can add instructions for Gemini Apps." / "Remember that I am vegetarian." / "“Start all responses with a short summary.”" / "Important: Instructions for Gemini to forget or avoid topics in chats doesn’t always work perfectly. To make sure Gemini stops mentioning a topic, delete any chats about it from your Gemini Apps Activity." / "Tap Add +." / "At the top, turn Instructions for Gemini off  or on ." / "To stop Gemini from learning about you" 韓語介面名稱：「Gemini 요청 사항」「추가 +」「제출」「더보기」「수정」「삭제」。 https://support.google.com/gemini/answer/16598625（確認日期 2026-10-31）
[^summary]: Google 幫助文件，《View & manage your Memory summary in Gemini Apps》（韓語版《Gemini 앱에서 내 메모리 요약 보기 및 관리하기》）。"You can use memory summary to view, edit, and delete what Gemini Apps understands about you." / "Currently available to US users with an active Google AI plan." / "Available in English." https://support.google.com/gemini/answer/18617127（確認日期 2026-10-31）
[^apps]: Google 幫助文件，《Connect your Google apps to personalize your Gemini experience》（韓語版《Google 앱을 연결하여 Gemini 환경 개인화하기》）。"Get content from Gmail and Google Photos, like photos from your last vacation." https://support.google.com/gemini/answer/16598406（確認日期 2026-10-31）
[^import]: Google 幫助文件，《Import from other AI platforms to Gemini Apps》（韓語版《다른 AI 플랫폼에서 Gemini 앱으로 가져오기》）。"You can bring over your preferences, remembered facts & details, and general contextual information (sometimes called  "memory") from other AI platforms." / "Be signed in with a personal Google Account. This feature isn’t available if you sign in to a work, school, or supervised Google Account." / "Be 18 or older." / "The EEA, Switzerland, or the United Kingdom." / "Click Settings  Data controls." / "Click Settings  Privacy." / "Copy the response from the other AI platform that contains memories about you." / "Tip:  You can upload up to 5 .zip.files per day." / "A download link will be sent to the email associated with your account on the other AI platform." / "If you reupload a  .zip file with your exported chats it will add any new conversations and overwrite previously imported ones." / "Your imported and continued chats are saved in your Activity. This data is used to improve our services (including training generative AI models), and to protect Google, our users and the public." https://support.google.com/gemini/answer/16868299（確認日期 2026-10-31）
