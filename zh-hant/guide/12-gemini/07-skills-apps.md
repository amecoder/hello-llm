# 第7章 技能與已連線的應用 — 儲存常做的請求，接著用 Google 應用

> **一句話總結**：每次都要寫很長的請求，請儲存成**技能**，用 `/` 調出來用。現在在用的 **Gems 從 2026年11月17日起會變成技能。**
> 想問 Gmail·Drive·日曆裡的內容，就開啟**已連線的應用**。連線之前，請先了解哪些資訊會送到 Gemini 那裡。

介面以 2026年10月的網頁版為準，截圖是付費套餐（Google AI Pro）的韓語介面。

## 技能 — 把常做的請求儲存起來

**技能**（Skill）是做一次就能在任何聊天裡重複使用的**已儲存指令。**[^skills][^transition]
比如，“收到會議紀要，就按決定事項·待辦事項·負責人的順序整理”這個請求，如果你每週都要用，就儲存成技能，以後只要叫它的名字就行。

技能有這些特點。[^transition]

- **容易調出來用。** 在聊天輸入框裡輸入 `/`，選擇技能名稱。據說很快會改成 `@`，所以請用螢幕上看到的那個。
- **也會自動使用。** 如果有適合當前問題的技能，Gemini 會識別並應用。
- **可以疊加使用。** 一場聊天裡可以同時用多個技能。

使用的條件是**年滿 18 週歲**並登入，而且「儲存活動記錄（활동 기록 보관）」必須開著。[^skills] **不需要付費套餐。**[^skills] 可以在網頁、手機應用、Mac 應用裡使用。[^skills]

### 開啟技能介面

到側邊選單「個性化（맞춤설정）」→ 上方的「技能（스킬）」標籤頁。如果看不到「個性化」，請先點「更多（더보기）」。[^skills][^screen] 也可以從設定選單裡的「技能」進入（[第2章](02-screen-tour.md#設定頁面-—-賬號、偏好設定、隱私)）。

![「個性化」裡的「技能」標籤頁。紅色編號標出：①「技能」標籤頁，②「建立（만들기）」按鈕，③ 點「建立」後開啟的選單（「用 Gemini 建立」·「手動建立」·「上傳」），④「推薦」技能列表（「匹配寫作風格」·「從多種視角看問題」·「會議準備」等）](../../../guide/12-gemini/assets/shot-19-skills-marked.png)

**紅色編號和下面列表裡的編號是同一個位置。**[^screen]

- ① 是「技能」標籤頁。提示語是“新增或建立技能，擴大 Gemini 能做的事情的範圍”。
- ② 點「建立」，會出現 ③ 三種建立方式。
  - **「用 Gemini 建立（Gemini로 만들기）」**：用對話說明想要什麼，Gemini 會和你一起做。如果是第一次，這個最容易。
  - **「手動建立（수동으로 만들기）」**：在空白表單裡親自寫下名稱·說明·指令。
  - **「上傳（업로드하기）」**：上傳技能檔案（`SKILL.md`）或裝有該檔案的資料夾。用於把其他服務做的技能帶過來（僅限網頁和 Mac 應用）。[^transition]
- ④ 是 Google 預先做好的**推薦技能。** 點「+」新增之後，也可以改成適合自己的樣子來用。[^skills]

在聊天裡說一句“請用這樣的指令幫我建立一個技能”，也能建立。不過，**開啟·關閉·刪除只能在「個性化」→「技能」裡**做。[^skills]

### 管理技能

在技能介面選中一個技能，再點「更多」就行。[^skills]

| 想做的事 | 選單 |
|---|---|
| 暫時不用 | 「停用（비활성화）」 |
| 邊對話邊修改 | 「用 Gemini 修改（Gemini로 수정）」 |
| 儲存到我的電腦 | 「下載（다운로드）」（.zip 檔案） |
| 刪除 | 「刪除（삭제）」 — 無法恢復 |

出處：Google 幫助文件[^skills]

讓它用一個已經關掉的技能時，Gemini 會問是否要重新開啟。[^skills] 技能想做多少個都行，但**能同時開著的最多 100 個。**[^transition]

技能並不是和所有功能都能一起用。它可以和 Gmail·Drive 這類已連線的應用一起用，但**目前還不能和 Canvas·Deep Research·影片·音樂創作·引導式學習一起用。**[^transition]

<Quiz id="ch307-skill" />

## 怎樣寫好技能

技能請當作**簡短的摘要便條**來寫，而不是長篇說明書。[^write] Gemini 會先**只看技能的名稱和說明**，判斷它是否適合當前的問題。只有適合時，才會讀完整的指令。[^write]
所以，如果名稱和說明含糊，需要的時候技能就不會被用上。

### 值得做的事，不必做的事

| 適合做成技能的事 | 不必做成技能的事 |
|---|---|
| 總是重複寫同樣的長請求 | 只做一次的事 |
| 每次都要修改答案的格式 | Gemini 本來就做得好的事 |
| 要靠手工在多個應用之間來回銜接 | 規則經常變的事 |

出處：Google 幫助文件[^write]

### 寫名稱·說明·指令

- **名稱以要做的事（動詞）開頭。** 要寫得讓人看出**它做什麼**，而不是它是什麼。[^write] 名稱用英文小寫，單詞之間用連字元（-）連線（例：`summarize-meeting-notes`）。[^skills]
- **說明寫 1~2 句話，並寫明什麼時候用。** 不能超過 1,024 個字元。[^write]
- **指令要寫成適用於一類事，而不是一件事。** 比如，不是針對“整理本週會議紀要”，而是針對“整理會議紀要”來寫。[^write]
- **用例子展示結果的樣子，並寫明缺少資訊時怎麼辦。** 這樣 Gemini 編造或跳過沒有的內容的情況就會減少。[^write]

比較一下不夠好的例子和更好的例子。

| | 不夠好的例子 | 更好的例子 |
|---|---|---|
| 名稱 | `meeting-helper` | `summarize-meeting-notes` |
| 說明 | 幫忙處理會議 | 收到會議紀要，就整理成決定事項·待辦事項·負責人。在貼上了會議紀要或會議備忘時使用 |

更好的例子，光看名稱就知道做什麼，說明裡還有**什麼時候用。**

在「手動建立」的指令欄裡，可以這樣寫。

```
收到會議紀要，就按下面的順序整理。
1. 已決定的事（每條一行）
2. 待辦事項（待辦事項 - 負責人 - 截止日期）
3. 下次會議時要再看的事
如果會議紀要裡沒有負責人或截止日期，不要編造，請寫“需核實”。
```

不需要一開始就完美。用幾次，再用「用 Gemini 修改」打磨就行。

<Quiz id="ch307-write" />

## Gems 會變成技能

**Gems** 曾經是放進名稱·指令·參考檔案做成的**我自己的 Gemini。** 它在側邊選單「更多」→「Gems」裡。[^gems][^screen]
這個 Gems **會變成技能。** 個人 Google 賬號（年滿 18 週歲）的時間安排如下。[^transition]

| 日期 | 會發生什麼 |
|---|---|
| 2026年11月17日 | Gems 變成**只讀**。可以看，但不能寫、不能改、不能新建 |
| 2026年12月17日 | Gems 從 Gemini 裡**消失** |

出處：Google 幫助文件[^transition]

- 未滿 18 週歲的個人賬號會晚些轉換，時間另行通知。公司賬號是 2027年3月，學校賬號是 2027年6月。[^transition]
- **Gems 消失時，會自動重新做成技能。**[^transition] 不過，自己先搬過去會更放心。
- 用來做小應用的實驗功能 **Opal 和 Google Labs 的 Gems，也會在同一個 11月消失。**[^transition]

### 自動遷移時會丟掉的東西

自動轉換時，有些檔案會丟掉。[^transition]

- 檔案大小合計超過 **100MB** 時，從最大的檔案開始丟掉。
- 技能不支援的檔案（舊版 Office 檔案 .doc·.xls·.ppt、音訊·影片、.zip 這類壓縮檔案等）不會轉移過去。

所以如果有捨不得的 Gem，請**在 12月17日之前，把放進「知識（지식）」的檔案下載下來。**[^transition]

### 自己遷移的順序

1. 開啟 Gem，把「知識」裡的檔案一個一個開啟並下載。[^transition]
2. 在「個性化」→「技能」→「建立」→「手動建立」裡，把 Gem 的名稱·說明·指令複製貼上過去。[^transition][^screen]
3. 想連檔案一起搬過去，就把剛做好的技能「下載」後得到的 `SKILL.md`，放進和 Gem 檔案相同的資料夾裡。**資料夾名稱必須和技能名稱一致。** 然後在同一個技能旁邊點「更多選項（옵션 더보기）」→「替換技能（스킬 바꾸기）」，把那個資料夾上傳。[^transition]

和 Gems 不同，技能**沒有“用這個技能聊過的對話”列表頁面。** 用過技能的對話，也混在側邊選單的普通對話列表裡。[^transition] 據說 Gems 的分享、放入 Drive 檔案·筆記本的功能，會在“未來幾周內”也加到技能裡。[^transition]

<Quiz id="ch307-gems" />

## 已連線的應用 — 在 Gemini 裡用 Gmail·Drive·日曆

開啟**已連線的應用**（Connected Apps）後，Gemini 會查詢我的 Gmail·Drive·日曆這類應用裡的內容來回答。得到允許的話，還會幫忙修改或管理那些應用裡的內容。[^apps]
比如可以這樣問：“幫我找一封上個月收到的、告知讀書會地點的郵件。”

### 已連線的應用介面

在側邊選單「個性化」→「聯結器（커넥터）」標籤頁裡檢視。[^apps][^screen]

![「個性化」裡的「聯結器」標籤頁。紅色編號標出：① 側邊選單「個性化」，② 上方的「探索」·「聯結器」·「技能」標籤頁，③「已安裝（설치됨）」列表（Google Workspace·Google 搜尋服務·聯絡人·YouTube Music·Gemini Notebook·Verify AI），④ 應用旁邊的三點選單，⑤「全部（전체）」列表（YouTube·AndroidDevSummit·Google 商家資料·GitHub，各有一個「+」按鈕），⑥「+ 自定義」按鈕](../../../guide/12-gemini/assets/shot-18-connectors-marked.png)

**紅色編號和下面列表裡的編號是同一個位置。**[^screen]

- ① 點側邊選單「個性化」，② 選擇「聯結器」標籤頁。標題是「已連線的應用（연결된 앱）」。
- ③ **「已安裝」**是已經連線的應用。在本指南使用的賬號裡，看到的是 Google Workspace·Google 搜尋服務·聯絡人·YouTube Music·Gemini Notebook·Verify AI。
- ④ 點三個點，會出現「立即使用（지금 사용）」和「斷開連線（연결 해제）」。
- ⑤ **「全部」**是還可以再連線的應用。用「+」連線。
- ⑥「+ 自定義（+ 맞춤）」看起來是直接連線其他公司伺服器的選單。幫助文件說，這個功能（自定義應用）**只有年滿 18 週歲、在美國的使用者**才能用。[^custom] 初學階段不用也沒關係。

點應用名稱，會開啟詳情介面。上面會寫著能做什麼、不能做什麼，還有示例問題。[^apps] 連線一個「Google Workspace」，就能一起用 **Gmail·Google Calendar·Docs·Drive·Keep·Tasks。**[^workspace][^screen]

**看到的應用因人而異。** 裝置、國家、Gemini 應用的種類不同，列表也不同。[^apps]

### 先確認的兩項設定

- **「儲存活動記錄」必須是開著的。** 如果關著，在網頁上就用不了已連線的應用。[^apps] 這項設定會在[第9章](09-privacy.md)裡詳細講。
- **Gmail 設定裡的「其他 Google 產品中的智慧功能（다른 Google 제품의 스마트 기능）」必須是開著的**，Workspace 才能連線。連線不上時，先確認這一項，開啟之後重新整理 Gemini 再重新連線。[^workspace]

### 好好提問的要領

- **每開一場新對話，都要說明去哪個應用裡找。** 比如“在郵件裡”“在 Drive 裡”“在日曆裡”。同一場對話的下一個問題裡，就不用再說了。[^workspace]
- 在輸入框裡輸入 `@` 並選擇應用，就能準確指定要用哪個應用。[^apps]
- **不要貼上文件或郵件的地址（URL）。** 而是寫上內容裡的詞和應用名稱。[^workspace]

| 不夠好的提問 | 更好的提問 |
|---|---|
| “總結一下這個文件（貼上地址）” | “在 Drive 裡找‘讀書會章程’這份文件，只總結會費規定” |

更好的提問裡，應用名稱和要找的詞都有了，所以 Gemini 選錯檔案的情況就會減少。

**答案一定要核實。** 它可能給出錯誤或過時的答案，比如明明有更新的郵件，卻以舊郵件為依據回答。請點答案後面的來源，開啟原來的郵件·檔案看看。[^workspace]

### 也有做不到的事

即使連線了 Workspace，下面這些事也做不到。[^workspace]

- 讀取 Docs·Gmail 裡的**批註和圖片**
- 讀取 Drive 裡的**照片和影片**
- 在 Drive 裡**建立資料夾、移動檔案**
- **統計** Drive 或 Gmail 裡的**專案數量，告知儲存空間**

### 不連線也能用的公開資訊

Google 搜尋、YouTube、Google 地圖、機票·酒店的**公開資訊**，不用另外連線，Gemini 也會用。沒有我的許可，它不會開啟我的個人資訊。[^apps]

- **YouTube**：可以找到符合主題的影片，並詢問影片內容。但不能儲存到播放列表或發評論。[^youtube]
- **地圖**：查詢地點，並按交通方式獲得路線指引。[^maps]
- **機票·酒店**：幫你找到符合條件的機票和酒店。**不會替你預訂。**[^flights]

搜尋的公開資訊，即使「儲存活動記錄」關著也能用，但地圖·YouTube·機票·酒店需要它開著。[^apps]

幫助文件裡也出現了 Dropbox 這類其他公司的應用，但也有**只面向美國使用者**的應用。[^dropbox] 當前使用的裝置列表裡沒有的應用，在那臺裝置上就用不了。[^apps]

<Quiz id="ch307-apps" />

## 連線之前要知道的隱私事項

連線很方便，但是**我的郵件和檔案內容有一部分會送到 Gemini 那裡。** 連線之前請先了解下面這些。[^connected]

- **可能混有敏感內容。** 已連線應用的資料裡，可能含有健康·宗教這類敏感內容或機密。今後那個應用裡新產生的資料，Gemini 也可能看到。
- **有一部分人可以看到。** 已連線應用的資料中有一部分，會由人工稽核員（包括受過培訓的外部公司員工）檢視。所以 Google 親自提醒：**含有稽核員看到會讓你為難的機密的應用，不要連線。**
- **關於訓練的說明如下。** 不會直接用 Gmail 收件箱或 Drive 本身來訓練 AI 模型。但是，會用生成回答時用到的**摘要·摘錄·推斷**來訓練。如果郵件或檔案很短，那份摘要有可能就是原文。而且，當「儲存活動記錄」開著時，混有已連線應用資料的活動，會用於包括 AI 訓練在內的服務改進。
- **即使斷開連線，對話記錄也會留下。** 即使斷開應用連線，或刪除那個應用的資料，「Gemini 應用活動」裡的記錄也不會被刪除。記錄需要另外刪除（[第9章](09-privacy.md)）。

對於公司郵件，或者含有很多別人資訊的 Drive，**一開始就不連線**是最簡單的辦法。只在需要的時候把需要的檔案上傳上去也行（[第4章](04-files-create.md#上傳檔案)）。

<Quiz id="ch307-privacy" />

## 親手試一試

1. 在「個性化」→「技能」裡新增一個像「從多種視角看問題」這樣的推薦技能，在聊天裡輸入 `/` 調出來用用看。
2. 用「手動建立」做出這一章的會議紀要整理技能，貼上練習用的會議備忘，確認結果。故意去掉負責人，看看會不會出現“需核實”。
3. 如果你一直在用 Gems，就先把「知識」檔案下載下來，再親手把最捨不得的一個 Gem 遷移成技能。
4. 在「聯結器」標籤頁裡確認我的賬號連線了哪些應用，不需要的應用，用三個點 →「斷開連線」斷掉。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：用任務裡的會議紀要示例來試驗第 2 項的技能。親自核對整理出的待辦事項和負責人，和會議紀要是否一致。

## 小結

- 技能是儲存起來、用 `/`（很快改成 `@`）調出來用的指令。需要年滿 18 週歲、登入、「儲存活動記錄」，不需要付費套餐。
- 在「個性化」→「技能」→「建立」裡，用「用 Gemini 建立」·「手動建立」·「上傳」來建立。開啟、關閉、刪除只能在這個介面裡做。
- 好的技能很簡短，名稱以要做的事開頭，說明裡寫明什麼時候用。
- Gems 在 2026年11月17日變成只讀，12月17日消失，並自動轉換成技能。捨不得的 Gem，要提前下載它的檔案。
- 已連線的應用在「個性化」→「聯結器」裡管理。每開新對話都要說明去哪個應用裡找，答案用來源來核實。
- 已連線應用的資料有一部分會被人看到。含有機密的應用不要連線。即使斷開連線，對話記錄也要另外刪除。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Skill | 技能 | 儲存起來、在任何聊天裡重複使用的指令 |
| SKILL.md | SKILL.md 檔案 | 裝著技能的名稱·說明·指令的檔案 |
| Gem | Gem | 放進指令·檔案做成的、我自己的 Gemini。正在變成技能 |
| Connected Apps | 已連線的應用 | 把 Gmail·Drive 這類應用和 Gemini 連起來用的功能 |
| Connector | 聯結器 | 管理已連線的應用的標籤頁名稱 |
| Google Workspace | Google Workspace | Gmail·Docs·Drive·日曆等 Google 辦公應用的合集 |
| Human reviewer | 人工稽核員 | 為改進服務而閱讀一部分對話的人 |

<ChapterDone :chapter="307" />

下一章：[第8章. 把事情交給它做](08-tasks.md)

[^screen]: 在 Gemini 網頁介面（Google AI Pro，韓語）裡親自確認。側邊選單「新聊天（새 채팅）」「資料庫（라이브러리）」「圖片（이미지）」「已安排（예약됨）」「個性化（맞춤설정）」「更多（더보기）」（展開後有「影片（동영상）」「Gems」）。「個性化」上方的標籤頁「探索（탐색）」「聯結器（커넥터）」「技能（스킬）」。「技能」標籤頁的提示語 "스킬을 추가하거나 생성하여 Gemini가 할 수 있는 작업 범위를 넓혀 보세요"（新增或建立技能，擴大 Gemini 能做的事情的範圍），「建立（만들기）」選單「用 Gemini 建立（Gemini로 만들기）」「手動建立（수동으로 만들기）」「上傳（업로드하기）」，「推薦（추천）」技能「匹配寫作風格（글쓰기 스타일 맞추기）」「最佳化能源效率（에너지 효율 최적화）」「從多種視角看問題（다양한 관점 살펴보기）」「產生新想法（새로운 아이디어 생성）」「會議準備（회의 준비）」。「聯結器」標籤頁的標題「已連線的應用（연결된 앱）」，提示語 "도구를 연결하여 더 많은 작업을 처리하세요"（連線工具，處理更多工作），「搜尋（검색）」欄和「+ 自定義（+ 맞춤）」按鈕，「已安裝（설치됨）」Google Workspace·Google 搜尋服務·聯絡人·YouTube Music·Gemini Notebook·Verify AI，「全部（전체）」YouTube·AndroidDevSummit·Google 商家資料·GitHub。已安裝應用的三點選單「立即使用（지금 사용）」「斷開連線（연결 해제）」。「Google Workspace」詳情介面的應用列表 Gmail·Google Calendar·Google Docs·Google Drive·Google Keep·Google Tasks。幫助文件裡 Gems 知識檔案欄的名稱，在韓語版是「지식」。（確認日期 2026-10-31）
[^skills]: Google 幫助文件，《Create & manage skills for Gemini Apps》（韓語版《Gemini 앱에서 스킬 만들기 및 관리하기》）。"Be 18 or over." / "Have Keep Activity on." / "Important: For now, skills are only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com." / "Tip: Skills are available without a Google AI subscription and can be used in your chats." / "If you don’t find “Customize,” first click More ." / "On the Skills page, you can create a skill with help from Gemini, build one from a prefilled or blank template, or upload a skill file or a folder with a SKILL.md file and optional supported reference files." / "Tip: You can’t activate, deactivate, or delete a skill from a chat or task thread." / "Naming convention: The skill name inside SKILL.md must use all lowercase with words separated by a hyphen (such as my-new-skill)." / "If a skill is off and you ask Gemini to use it, Gemini will ask you if you want to turn it back on." / "Important: If you delete a skill, it can’t be undone." / "Click More   Download . This downloads your skill in a .zip file." 韓語介面名稱：「비활성화」「Gemini로 수정」「다운로드」「삭제」。 https://support.google.com/gemini/answer/17094296（確認日期 2026-10-31）
[^transition]: Google 幫助文件，《About the transition from Gems to skills》（韓語版《Gems에서 스킬로의 전환에 관한 정보》）。"Skills are reusable custom instructions that can help you automate tasks and save time in Gemini." / "Easy access: Use a skill by typing / (soon to be @) followed by the skill's name directly in any Gemini chat." / "Automatic use: Gemini automatically recognizes when a skill is relevant to your current prompt and applies it for you." / "Stackable: Combine multiple skills in a single chat to handle more complex tasks." / "You can create as many skills as you want, but only 100 can be active at a time." / "For now, the option to upload files to create skills is only available in the Gemini app on Mac and in the Gemini web app at gemini.google.com." / "Skills work with some but not all features. You can use them with Connected Apps like Workspace apps, but they do not yet work with features like Canvas and Deep Research." / "November 17, 2026: Gems transition to skills and become read only. You can still access your Gems, but can’t use or edit them, or create new ones." / "December 17, 2026: Gems are removed from Gemini Apps. You’ll no longer be able to access your Gems." / "If you’re under 18 and signed in to a personal Google account, your Gems will transition to skills at a later date. We’ll share more details soon." / "March 2027: Workspace business, enterprise, and non-profit accounts." / "June 2027: Workspace education accounts." / "As part of this change, Opal, our experiment for building mini apps, as well as Gems by Google Labs, will also go away at the same time in November." / "When we remove Gems, we’ll automatically recreate your Gems as skills." / "Skills have a 100 MB total size limit for files. If your Gem is larger than this when we transition it to a skill, we automatically remove the largest files first until it’s under the limit." / "Some file types are not supported in skills. When we transition your Gems to skills, these unsupported file types will not be included:" / "If the Gem has files under “Knowledge,” download your files." / "Copy and paste the name, description, and instructions from your Gem to your skill." / "On your computer, open the .zip file and move the SKILL.md file into the folder with your Gem files." / "Important: The name of the folder must match the name of the skill." / "Go back to the Skills page, and next to the same skill, click More options   Replace skill ." 韓語版名稱：「옵션 더보기」「스킬 바꾸기」。 / "Unlike Gems, skills don’t have a dedicated page that lists your recent chats with that skill." / "In the coming weeks, skills will have the features you loved in Gems, including the ability to share them with others and add files from Google Drive and notebooks from Gemini Notebook." https://support.google.com/gemini/answer/18560919（確認日期 2026-10-31）
[^write]: Google 幫助文件，《Write effective skills for Gemini Apps》（韓語版《Gemini 앱을 위한 효과적인 스킬 작성하기》）。"Keep your skills short and focused. Instead of long paragraphs of general explanation, focus on:" / "Check if a skill is relevant. Gemini only checks the skill’s name and description to determine if a skill is relevant for your task." / "Repeat prompts: You give Gemini the same instructions over and over, especially for complex tasks with long prompts." / "A one-off job: You only need to do it once and won't repeat it." / "Start with an action statement, or verb. Focus on what the skill does, not what it is." / "Keep the description focused. Make it as clear as possible and within the 1024 character limit." / "Instead of giving instructions that only apply to a specific task, give instructions that teach Gemini how to handle a type of task." / "Tell Gemini exactly what to do if a piece of information is missing. This prevents Gemini from making up or skipping important details." https://support.google.com/gemini/answer/17102773（確認日期 2026-10-31）
[^gems]: Google 幫助文件，《Use Gems in Gemini Apps》（韓語版《Gemini 앱에서 Gems 사용하기》）。"Enter a name and instructions for your Gem." https://support.google.com/gemini/answer/15146780（確認日期 2026-10-31）
[^apps]: Google 幫助文件，《Use & manage Connected Apps in Gemini》（韓語版《Gemini에서 연결된 앱 사용 및 관리하기》）。"With your permission, Gemini can also help you take actions, like editing and managing your content in other apps." / "When Keep Activity is off, Connected Apps won’t be available on gemini.google.com, iOS devices, or smart watches." / "To specify an app for Gemini to use, enter @ and select the app." / "At the top, click Connectors." / "On the app’s details page, you can find a connected app’s full description, supported and unsupported actions, and example prompts." / "The apps in Connected Apps settings vary by Gemini app, device, country, and more." / "Gemini won’t access your personal information or content in these services without your permission." / "Gemini can always use public information from Google Search, even if Keep Activity is off or you’re signed out." https://support.google.com/gemini/answer/13695044（確認日期 2026-10-31）
[^workspace]: Google 幫助文件，《Connect the Google Workspace app to Gemini Apps》（韓語版《Google Workspace 앱을 Gemini 앱에 연결하기》）。"For Gemini Apps to connect with Google Workspace, Smart features in other Google products must be turned on in your Gmail settings." / "Tip: Don’t paste the URL of a document or email in your prompt." / "For every new conversation, ask the Gemini app to get or add something from your personal Google Workspace explicitly." / "Gemini Apps can hallucinate responses or provide outdated information, like from an older email when there’s a more recent one." / "Access comments or images in Docs or Gmail" / "Access pictures and videos in your Drive" / "Manage content in your Drive, like create folders or move content between folders" / "Count items in your Drive or Gmail or tell you how much Drive or Gmail storage you have" https://support.google.com/gemini/answer/15229592（確認日期 2026-10-31）
[^youtube]: Google 幫助文件，《Find & ask about YouTube content in Gemini Apps》（韓語版《Gemini 앱에서 YouTube 콘텐츠를 찾고 질문하기》）。"Gemini uses public information from YouTube to help you:" / "Take actions that impact your YouTube experience, like saving a video to a playlist or adding a comment on a video." https://support.google.com/gemini/answer/16622858（確認日期 2026-10-31）
[^maps]: Google 幫助文件，《Find places & get directions in Gemini Apps》（韓語版《Gemini 앱에서 장소 및 경로 찾기》）。"Get directions based on mode of transport and help you avoid things like tolls" https://support.google.com/gemini/answer/16622866（確認日期 2026-10-31）
[^flights]: Google 幫助文件，《Search for flights & hotels in Gemini Apps》（韓語版《Gemini 앱에서 항공편 및 호텔 검색하기》）。"Gemini uses public information from Google Flights and Google Hotels to help you:" / "Book a flight or hotel for you"（不能做的事的列表） https://support.google.com/gemini/answer/16622256（確認日期 2026-10-31）
[^dropbox]: Google 幫助文件，《Manage files & folders in your Dropbox in Gemini Apps》。"Be 18 or over and in the US." https://support.google.com/gemini/answer/17211088（確認日期 2026-10-31）
[^custom]: Google 幫助文件，《Connect & manage custom apps for Gemini Apps》。"Be 18 or over and in the US." / "Google does not control, monitor, or secure third-party MCP servers. You’re responsible for supervising the MCP server." https://support.google.com/gemini/answer/17209137（確認日期 2026-10-31）
[^connected]: Google 幫助文件，《About personalization with Connected Apps》（韓語版《연결된 앱을 통한 개인화에 관한 안내》）。"Data shared may relate to topics you find sensitive, like race, religion, and health, or confidential info." / "Keep in mind that if new data is added to these apps in the future, Gemini will have access to that data." / "Gemini does not train generative AI models directly on your Gmail inbox, Drive, Contacts, Calendar or other Workspace apps, on your Google Wallet and payments services, or on imagery or audio from your Google Photos library." / "To make our responses relevant, helpful, and high quality, we train our generative AI models off of these summaries, excerpts, generated media, and inferences." / "Gemini Apps activity, which includes data from apps you connect, is used to improve Google services for everyone, including by training generative AI models, if your Keep Activity setting is on." / "In some cases, for example, where the email or file is brief or particularly relevant to respond to the prompt, the summary may just be the email or file." / "When connected to Gemini, a subset of Connected Apps data processed by Gemini is reviewed by human reviewers (including trained service providers) to debug our services, help keep them safe, and improve them." / "Important: Please don't connect your apps to Gemini Apps if they contain confidential information that you wouldn’t want a reviewer to see." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." https://support.google.com/gemini/answer/16836988（確認日期 2026-10-31）
