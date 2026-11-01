# 第7章 專案·聯結器·技能 — 把資料和工具接到 Claude 上

> **一句話總結**：用在同一件事上的資料和指令，請歸攏到**專案**裡。郵件、日曆這類其他應用，用**聯結器**接上；
> 每次都要用同樣方式去做的事，放進**技能**。把這三樣按工作打包在一起的，就是**外掛**。

介面以 2026年10月的網頁版為準。把聊天和 Cowork 合在一起的新介面正在陸續推送，所以選單位置和名稱可能因介面而異。
這一章的截圖是免費套餐的網頁介面。選單名稱按截圖裡看到的名稱來寫。幫助文件裡出現的其他名稱，集中放在腳註裡。

這一章用到的是側邊選單裡的兩處：「專案（프로젝트）」和「自定義（사용자 지정）」（Customize）。[^screen] 在下面的截圖裡，分別標為 ③·④。

## 專案 — 把資料和指令放在一處

**專案**（project）是為一件事準備的工作空間。每個專案都有各自獨立的對話記錄和**知識**（knowledge，放參考資料的地方）。[^projects]
比如，在「公司週報」專案裡放進彙報模板檔案。以後在裡面開的對話，每次一開始就知道那個模板。

專案在免費套餐裡也可以建立。免費使用者最多 5 個。[^projects-how][^projects-limit]

### 建立和填充的方法

1. 開啟側邊選單 ③「專案」（claude.ai/projects）。點右上角 ①「新建專案（새 프로젝트）」。[^screen][^projects-how][^new-project-name]
2. 寫上名稱和說明。名稱和說明**Claude 讀不到。** 工作需要的內容，請放進知識或指令裡。[^projects-how]
3. 在專案介面右邊**專案知識**的「+」處上傳檔案或文字。放在這裡的內容，會用在該專案的所有對話裡。[^projects-how]
4. 在「設定專案指令（프로젝트 지침 설정）」裡寫下這個專案要遵守的規則，點「儲存指令（지침 저장）」。[^projects-how]
5. 已有的對話，點對話名稱旁邊的箭頭 →「新增到專案（프로젝트에 추가）」就能移過去。[^projects-how]

只在這一次對話裡看的資料，不要放進專案知識，直接傳到那個對話裡。這樣知識庫不會變得雜亂。[^academy-projects]

![「專案」介面。紅色編號標出：① 右上角「新建專案」按鈕，② 中間的專案列表（部分帶有「示例專案」標記），③ 側邊選單的「專案」](../../../guide/10-claude/assets/shot-10-projects-marked.png)

專案名稱和對話標題是改成示例的介面（免費套餐）。**紅色編號和下面列表裡的編號是同一個位置。**

- ①「新建專案」 — 建立新專案
- ② 專案列表 — 建立過的專案連同日期一起顯示
- ③ 側邊選單「專案」 — 開啟這個介面的地方

列表裡也有帶「示例專案（예제 프로젝트）」標記的專案。[^screen] 如果看到不是自己建立的專案，請不要驚訝。

<!-- 需要截圖：專案介面。右側的「專案知識」欄和「+」，以及「設定專案指令」按鈕 -->

[第5章](05-memory.md)的指令適用於所有對話。專案指令則**只適用於該專案裡的對話。**[^personal][^project-instr-free]

### 即使在同一個專案裡，對話內容也不會原樣共享

即使在同一個專案裡，**對話內容也不會整個帶到下一次對話。** 在其他對話裡也需要知道的內容，請放進專案知識。[^projects-how]
比如，昨天對話裡定下的“表格用三列”，如果記憶開著，今天的新對話也許會知道。但如果是一定要遵守的規則，請寫在指令或知識裡。這樣所有對話都會知道。

記憶是每個專案各有一份的。在專案裡，會同時使用該專案的記憶和專案之外對話的記憶。不會使用其他專案的記憶。[^projects-how]
如果想讓專案完全獨立，請把專案介面記憶裡的「使用賬戶記憶（계정 메모리 사용）」關掉。[^projects-how] 記憶本身在[第5章](05-memory.md)裡講。

### 資料變多時 — RAG

在付費套餐裡，當知識變多、接近上限時，會自動切換成 **RAG**（Retrieval Augmented Generation，不是讀全部資料，而是隻找出需要的部分來讀的方式）。這樣能放進去的量最多會增加到 10 倍。不需要另外開啟或關閉。[^rag]
資料很多時，可以這樣做：把檔名起得容易辨認，提問時指明文件名稱。這樣 Claude 就能縮小該去哪裡找。[^rag]

```
從「2026年第3季度銷售報告」檔案裡，只把各地區的銷售額提取成表格。
```

### 整理時

- **先從一件事開始。** 比起一個裝下所有事情的專案，更建議先從「週報」這樣範圍窄的專案開始。資料可以邊用邊補充。[^academy-projects]
- **過期的資料偶爾換一換。** 專案知識裡如果留著舊資料，答案也可能是舊的內容。偶爾瀏覽一下知識列表，改一改。[^academy-projects]
- 加上**星標**，就能在側邊選單裡很快找到。[^projects-how]
- 結束的專案可以**歸檔**。歸檔的專案不能直接刪除。要先「取消歸檔（보관 해제）」再刪。[^projects-how]
- 和別人共享專案的功能，只有 Team·Enterprise（公司套餐）才有。[^projects]

> **新版專案（測試版）**：把一個專案當作一場對話來用的新方式，正在從一部分使用者開始推送。遷移過去後，指令·檔案·對話記錄都原樣帶過去。[^projects] 這還是隻對一部分人開放的功能，所以這一章按現在的專案來講。

### 把要反覆使用的模板放進指令

在[第1階段第8章](../00-common/08-meta-prompting.md#_4-做成可重複使用的模板)裡，你把做得好的請求變成了只換空白處就能反覆使用的**模板**。把這個模板放進專案指令試試看。這樣不用每次對話都貼上模板。

```
在這個專案的對話裡，把我發來的工作備忘整理成周報。
- 做成“已完成 / 進行中 / 下週計劃”三列的表格
- 每個條目寫一行
- 備忘裡沒有的內容不要編造，請標上[需核實]
```

::: details 得到的答案大致是這樣（示例 — 點選展開）
這是本指南做的示例。實際的答案會因服務和每次情況而不同。

比如，這周的備忘是“報價單發給了兩家。正在更換網站照片。下週與客戶開會”，就會得到這樣的答案。

> | 已完成 | 進行中 | 下週計劃 |
> |---|---|---|
> | 向兩家傳送報價單 | 更換網站照片 | 與客戶開會（日期[需核實]） |

**請確認有沒有順利得到**：是三列表格嗎？每個條目是一行嗎？有沒有混進備忘裡沒有的內容？備忘裡沒有的日期之類的空缺處，有沒有標上[需核實]？

:::

現在，在專案裡的新對話中，只要貼上這周的備忘就行了。

<Quiz id="ch207-projects" />

## 聯結器 — 與其他應用連線

**聯結器**（connector）是把 Claude 接到我所用的應用和服務上的連線。連線之後，Claude 可以取得裡面的資料，還能在那個服務裡做事。[^connectors]
比如連線了 Google 日曆，就可以問“告訴我下週什麼時候有空”。不用把日程複製貼上過來。

聯結器對包括免費使用者在內的所有使用者，在網頁·桌面·手機上都可以使用。[^connectors]

### 連線的方法

1. 點輸入框左下角的「+」，選擇 ③「新增聯結器（커넥터 추가）」。[^screen][^connector-name] 也可以在側邊選單「自定義」→「聯結器（커넥터）」標籤頁裡操作。[^screen]
2. 選擇要用的服務，點「連線（연결）」或「安裝（설치）」。登入那個服務，授予許可權。[^connectors]
3. 每次對話，在「+」→「聯結器」裡，開啟或關閉這次對話要用的服務。[^connectors]

連線之後，用一個簡單的請求確認一下。[^academy-connect]

```
你能訪問我的 Google 日曆嗎？只給我看下週一的日程。
```

如果日程顯示出來，就說明連線成功了。

![點輸入框的「+」後開啟的選單。紅色編號標出：①「上傳或新增檔案」，②「Skills」，③「新增聯結器」，④「設計系統」，⑤「新增外掛」，⑥「記憶」](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

這是免費套餐的介面。這一章用到的是下面三項。

- ②「Skills」 — 開啟技能列表
- ③「新增聯結器」 — 連線其他應用
- ⑤「新增外掛」 — 放入外掛

⑥「記憶」在[第5章](05-memory.md#只關閉一個聊天的記憶)裡講。

![在輸入框「+」選單裡，滑鼠停在「新增聯結器」上的介面。旁邊展開了「瀏覽聯結器」和灰色顯示的「新增自定義聯結器」](../../../guide/10-claude/assets/shot-17-connectors-menu.png)

*這是還沒有連線任何聯結器的免費賬號介面。所以看不到各個服務的開關，只看到「瀏覽聯結器（커넥터 둘러보기）」。「新增自定義聯結器（커스텀 커넥터 추가）」是灰色的，點不了。*[^screen-connectors]

在手機上安裝聯結器，目前還是測試版。如果在網頁或桌面端先連好，下次登入手機應用時就能直接用。[^connectors]

### 連線之前要知道的事

- **只連線信任的服務，只連線需要的。** 因為連線之後，Claude 可以在我的賬號許可權範圍內讀取資料，也可能修改資料。[^connectors] 連線之前先問問自己：這是可信的服務嗎？這件事一定需要它嗎？
- **本來就看不到的東西，連線了也看不到。** 在那個服務裡我打不開的檔案，用聯結器也打不開。[^connectors]
- **斷開連線和檢視許可權**，在「自定義」→「聯結器」裡進行。[^connectors]
- **不會用連線的應用裡的資料來訓練模型。** 連線的應用也看不到我的其他對話。[^suggest] 訓練設定的全部內容在[第9章](09-privacy.md)裡講。

### 代表例子 — Google·Microsoft 365

**Gmail·Google 日曆·Google Drive** 聯結器，網頁和桌面端的所有使用者都能用。[^google]
- 傳送·回覆郵件，共享·移動·丟進回收站 Drive 檔案這類事，預設**每次都會先問你。**[^google]
- 如果想要 Google 文件，請明確說出名稱。只說“文件”的話，會生成一個可下載的檔案。[^google]
- Gmail 的附件讀不到內容。Drive 文件只讀文字，不處理圖片。[^google]
- 透過聯結器取得的資料，會和那個對話一起儲存。刪除對話時，會一同被刪除。[^google]

比較一下不夠好的例子和更好的例子。

```
把會議內容整理成文件。
```

```
用這份備忘建立一個 Google 文件。標題定為「10月團隊會議紀要」。
```

像第二個那樣說“Google 文件”，Drive 裡才會生成 Google 文件。

**Microsoft 365** 聯結器在包括免費在內的所有套餐裡都可以用。不過，**只能連線公司賬號。** @outlook.com 這樣的個人賬號不行。[^m365] 還需要先得到公司管理員的同意。[^m365]

### 在對話裡彈出介面的聯結器

**互動式聯結器**（interactive connector）會在對話裡彈出那個應用的介面。比如問專案情況時，Asana 的任務看板會在對話裡開啟。在那裡可以直接勾掉待辦事項。[^interactive] 聯結器列表裡帶「互動式（대화형）」標記的，就是這類聯結器。[^interactive]

已連線的應用，即使我不說名字，Claude 也會在合適的時候主動拿出來用。[^suggest]
- 合適的應用有兩個以上時，Claude 不會悄悄替我選一個，而是由我來選。[^suggest]
- 應用推薦裡沒有廣告，也沒有收費的曝光。[^suggest]
- 替我預訂或購買之前，會先徵得我的確認。[^suggest]

> **自定義聯結器**（custom connector）是用地址直接連線 Anthropic 沒有驗證過的服務的功能。免費使用者最多 1 個。請只連線可信的地方。[^connectors] 大多數情況下，列表裡的聯結器就夠用了。

<Quiz id="ch207-connectors" />

## 工具許可權 — 讓它用什麼、用多少

一個聯結器裡包含多個**工具**（tool，像“讀郵件”“發郵件”這樣，聯結器能做的每一個動作）。

### 不用的工具就關掉

在對話裡的「搜尋和工具（검색 및 도구）」選單中，可以只關掉特定工具。[^interactive]
比如，只打算讓它讀郵件、整理郵件的話，請把“傳送”工具關掉。這樣就不會誤發郵件了（本指南的建議）。

自定義聯結器徵求許可時，如果出現「始終允許（항상 허용）」，請小心。只對那些信任到可以放心交給它、不用盯著的工具才點。[^custom]

### 聯結器很多時 — 「工具訪問」

每個聯結器都會佔用對話的空間。所以開啟得越多，真正用來做事的空間就越少。[^tools]
在「+」→「聯結器」→「工具訪問（도구 액세스）」裡，可以選擇載入的方式。[^tools]

| 選項 | 適合的情況 |
|---|---|
| 「自動（預設值）」 | 大多數情況。Claude 自己判斷 |
| 「始終可用」 | 常用的聯結器不到 10 個 |
| 「需要時」 | 聯結器有 10 個以上，或對話變長時 |

「始終可用」從一開始就多佔空間。「需要時」可能要多一步去找合適的聯結器。[^tools] 這個選擇**只適用於那一場對話。**[^tools]

### 使用調研時

[第6章](06-search.md)的調研，會**不用每次都問**就使用已開啟的聯結器裡的工具。[^research] 開始調研之前，請只把要用的聯結器開啟。事先縮小讓它讀什麼，就不會混進不相干的資料（本指南的建議）。

<Quiz id="ch207-tool-access" />

## 技能 — 把做事的方式放進去

**技能**（skill）是讓某件事每次都用同樣方式去做的指令和資料的組合。[^skills]
比如，把“公司報告按這個順序、用這種字型”這條規則做成技能放進去，以後每次做報告，都會按那個方式來。

技能在 Free·Pro·Max·Team·Enterprise 裡都能用。不過，**必須開啟建立檔案的功能。** 請在設定 →「功能（기능）」裡，開啟「程式碼執行與檔案生成（코드 실행 및 파일 생성）」。[^create-name][^skills][^skills-use]

### 預設技能和我的技能

- Anthropic 放好的**預設技能**（製作 Excel·Word·PowerPoint·PDF）不用叫它，會自動被用上。[^skills-use] 在[第4章](04-files-artifacts.md)裡建立檔案時用到的，就是這些。
- 開啟和關閉技能的地方，是側邊選單「自定義」→「Skills」標籤頁。[^screen] 關掉的技能，Claude 不會使用。[^skills-use]
- 簡單的技能不用寫程式碼，只用文字就能做出來。[^skills] 做好的技能資料夾，打成 ZIP 上傳。幫助文件裡寫作「+ 建立技能」→「上傳技能」。[^skills-use] 在這一章的介面裡，「自定義」的右上角有「+ 新增（추가）」按鈕。[^screen]
- 從技能列表裡安裝的技能，內容不能修改。[^directory]

如果覺得技能沒有被用上，請點名拜託它。[^skills-use]

```
用我的「公司報告模板」技能，把這份備忘做成演示資料。
```

如果我做的技能總是用不上，請修改技能的**說明**（description）。Claude 是看這段說明來決定什麼時候用這個技能的。[^skills-make] 說明裡請具體寫明什麼時候用這個技能。[^skills-make] 把我平時拜託時用的話寫進去也不錯，比如“整理會議紀要”“總結會議內容”（本指南的建議）。說明最多可以寫 200 個字元。[^skills-make]

### 做我的技能 — 用說的來拜託

如果你每做某件事都在重複同樣的說明，那段說明就是第一個技能的材料。[^academy-layers] 比如，你每次都說“會議紀要按決定事項、待辦事項、負責人的順序”。

技能檔案不必自己一個人寫。開啟新對話，對 Claude 說一起來做吧。[^academy-skills]

```
我想做一個整理會議紀要的技能。請一個一個地問我需要什麼。
```

Claude 會問幾個問題。比如這個技能做什麼、好的結果是什麼樣、什麼時候用。請儘可能具體地回答。如果有做得好的例子或模板檔案，請一起上傳。看到真實的例子，Claude 會更準確地知道我想要的結果。[^academy-skills]

做好的技能怎麼儲存，可能因介面而異。如果沒看到儲存的方法，請讓 Claude 把技能資料夾打成 ZIP。把那個檔案用上面的「上傳技能（스킬 업로드）」傳上去就行。[^skills-use] 想修改某處時，用話拜託 Claude 就行。也可以在對話旁邊開啟的技能檔案裡，選中要改的文字，點「用 Claude 編輯」（Edit with Claude）。[^skills-make]

### 和指令·專案·聯結器有什麼不同

| 功能 | 什麼時候用到 |
|---|---|
| 指令 | 所有對話，始終 |
| 專案 | 在該專案裡，始終 |
| 技能 | 只在做相關的事時 |
| 聯結器 | 需要接觸其他應用時 |

指令廣泛適用於所有對話，而技能只在相關時才呼叫。[^skills] 專案是始終鋪在那裡的背景知識。[^skills] 如果說聯結器是讓 Claude **夠得著**工具，那技能就是教它**怎麼用好**那個工具。[^skills]
因為只在需要時才呼叫，所以放進好幾個技能，也不太佔用對話空間。[^skills]

一句話概括：專案握著**需要知道的資料**，技能握著**做事的順序**。[^academy-skills] 兩者可以一起用。比如客戶資料放在專案裡，諮詢準備的順序放在技能裡。

### 要小心的地方

- **只安裝來自可信之處的技能。** 技能最大的風險，是用隱藏指令操縱 Claude 的**提示詞注入**，以及把資料偷偷送出去的**資料洩露**。[^skills-use] 提示詞注入，你在[第1階段第9章](../00-common/09-safety.md#_4-隱藏指令——提示詞注入)裡學過。
- 還有**用螢幕錄製來做技能**。把我做事的過程錄下來，Claude 就能據此做出技能。只有 Pro·Max·Team 的 Mac 應用 Cowork 裡可以，錄製最長 10 分鐘左右。[^skills-make] 錄製期間，請不要出現密碼或敏感的介面。

<Quiz id="ch207-skills" />

## 外掛 — 按工作打包的套裝

**外掛**（plugin）是把技能·聯結器·**子代理**（sub-agent，單獨負責大任務中一部分的輔助 Claude）打成一包。[^plugins]
銷售·財務·法務·營銷·人事這類按工作分類的外掛都已準備好。[^plugins] 這就相當於不用一個一個去找、去連線，而是一次放進一套適合我工作的組合。

這一章的三個功能，打個比方是這樣（本指南的比方）：聯結器是接觸其他應用的**手**，技能是做事的**竅門**，外掛是把兩者打包在一起的**工作套裝**。

外掛只能在**付費套餐**（Pro·Max·Team·Enterprise）裡使用。[^plugins]

### 放進去和使用的方法

1. 開啟側邊選單 ④「自定義」（Customize）。[^screen] 技能·聯結器·外掛，在這裡的一個列表裡就能找到。[^directory]
2. ①「外掛（플러그인）」標籤頁 → ②「探索（탐색）」裡選好外掛，點「新增（추가）」。[^screen][^discover-name]
3. 在對話或 Cowork 裡輸入 `/` 或點「+」，就能看到外掛裡包含的技能。選一個來用。[^plugins]

拿到的外掛，裝的是通常的做事方式。我的工作的模板和順序可能不一樣。[^academy-plugins] 在檢視已放入外掛的介面裡，點右上角的「定製（커스터마이징）」（Customize），就會開啟修改這個外掛的 Cowork 任務。點「開始吧（시작하기）」（Let's go），和 Claude 一起修改就行。[^plugins] 選單名稱可能因介面而異。請拿出我實際在用的例子來拜託它。

```
我上傳了我們團隊上個月發出的三份報價單。請修改這個外掛的報價單技能，讓它遵循這個模板和語氣。
```

越是按我的工作來調整，外掛就越有用。[^academy-plugins]

![「自定義」介面。紅色編號標出：①「Skills」「聯結器」「外掛」標籤頁，②「我的專案」「探索」，③ 右上角「+ 新增」，④ 側邊選單的「自定義」。中間可以看到 Anthropic 製作的條目和「新增」「試用」按鈕](../../../guide/10-claude/assets/shot-10-customize-marked.png)

這是免費套餐的介面。**紅色編號和下面列表裡的編號是同一個位置。**

- ①「Skills」·「聯結器」·「外掛」 — 選擇看哪一類的標籤頁
- ②「我的專案（내 항목）」·「探索」 — 已經放進去的，和要新逛一逛的
- ③「+ 新增」 — 新增條目的按鈕
- ④ 側邊選單「自定義」 — 開啟這個介面的地方

「探索」裡有 Anthropic 製作的技能·外掛，還能看到「試用（체험）」按鈕。[^screen]
免費套餐的介面裡，也能看到「外掛」標籤頁和「+」選單裡的「新增外掛」。[^screen] 不過，幫助文件把外掛介紹為付費套餐的功能。[^plugins]

- 新增的外掛儲存在賬號裡。可以在網頁聊天、桌面應用的 Chat、Cowork 裡使用。[^plugins]
- 部分功能（子代理等）在聊天裡不執行，顯示為灰色。它們在[第8章](08-cowork.md)的 Cowork 裡執行。[^plugins]
- **只安裝來自可信之處的外掛。** 因為有些外掛裡包含的部分，會在我的電腦上以和其他程式相同的許可權執行。[^plugins]

<Quiz id="ch207-plugins" />

## 看影片瞭解更多

這是公司自己製作的介紹影片。畫面和功能名稱可能與這一章的說明不同。

> 下面的影片全是**英語**。在 YouTube 影片的設定（齒輪）→ 字幕 → **自動翻譯 → 中文（簡體）**，就可以看到中文字幕。影片可以直接在這個頁面裡播放。

**[Projects are now a conversation with Claude](https://www.youtube.com/watch?v=5qt_aGyAsKk)** · Claude · 適合想看看專案變成什麼樣的人（2026年9月，1分鐘）

<YouTube id="5qt_aGyAsKk" title="Projects are now a conversation with Claude" />

**[Creating custom Skills with Claude](https://www.youtube.com/watch?v=kS1MJFZWMq4)** · Anthropic · 適合想看看 Claude 一邊提問一邊幫你做技能的例子的人（2025年10月，1分鐘）

<YouTube id="kS1MJFZWMq4" title="Creating custom Skills with Claude" />

第一個影片把專案介紹為“一場對話”。如果我的介面和影片不一樣，請以這一章的說明為準。

## 親手試一試

1. 用「新建專案」建立一個「週報」專案，把上面的模板放進專案指令。如果沒有指令欄，就把模板寫成文字，上傳到專案知識裡。
2. 在專案裡開啟一個新對話，隨意寫五行這周做的事發過去。看看錶格是不是按指令生成的。
3. 在專案裡再開一個新對話，在發第一條訊息之前，把「+」→「記憶」（Memory）關掉（[第5章](05-memory.md#只關閉一個聊天的記憶)）。然後問“剛才的對話裡我說了什麼？”。確認關掉記憶的對話不知道前一個對話的內容。
4. 開啟「自定義」→「聯結器」標籤頁 →「探索」，逛一逛都有哪些服務。如果連線了一個，就在「搜尋和工具」裡，把它的工具中不會用的關掉試試。
5. 在「自定義」→「Skills」標籤頁 →「我的專案」裡，看看預設技能有沒有開著。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：上傳之前，先開啟 members.csv，看看裡面有沒有姓名·聯絡方式這類個人資訊。然後建立「讀書會」專案，把四個示例檔案（memo-next-month.txt、minutes-last-meeting.txt、members.csv、fees.csv）上傳到「專案知識」裡，再把第5章的那一行指令放進專案指令。在專案裡的新對話中，只發“寫一份11月的通知文初稿”，看看備忘和會議紀要的內容有沒有被用進去。

## 小結

- 專案是把對話·知識·指令打包在一起的工作空間。免費使用者最多建立 5 個（以幫助文件為準）。
- Claude 讀不到專案的名稱和說明。即使在同一個專案裡，對話內容也不會整個帶過去，所以需要大家都知道的內容，要放進知識或指令。
- 在付費套餐裡，資料變多時會自動切換成 RAG。檔名要起得容易辨認。
- 聯結器是與其他應用的連線。只連線信任的服務，本來就看不到的東西，連線了也看不到。
- 不用的工具在「搜尋和工具」裡關掉，聯結器很多時，把「工具訪問」改成「需要時」。
- 技能是裝著做事方式的組合。只在相關時才呼叫，也只安裝來自可信之處的。
- 外掛是把技能·聯結器·子代理打包的工作套裝，僅限付費套餐。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Project | 專案 | 各自擁有對話記錄和知識的工作空間 |
| Project knowledge | 專案知識 | 專案裡所有對話共用的參考資料 |
| RAG | 檢索增強生成 | 不讀全部資料，只找出需要的部分來讀的方式 |
| Connector | 聯結器 | 把 Claude 與其他應用·服務連線起來的連線 |
| Tool | 工具 | 聯結器能做的每一個動作 |
| Tool access | 工具訪問 | 決定聯結器何時載入到對話裡的設定 |
| Skill | 技能 | 讓某件事用同樣方式去做的指令組合 |
| Plugin | 外掛 | 把技能·聯結器·子代理打包的、按工作分類的套裝 |
| Sub-agent | 子代理 | 單獨負責大任務中一部分的輔助 Claude |
| Prompt injection | 提示詞注入 | 用藏在資料裡的指令來欺騙 AI 的攻擊 |

<ChapterDone :chapter="207" />

下一章：[第8章. Cowork — 把整件事交給它](08-cowork.md)

[^screen]: 在 Claude 網頁介面（免費套餐，韓語）中親自確認。側邊選單「專案（프로젝트）」·「自定義（사용자 지정）」 /「專案」介面的「新建專案（새 프로젝트）」和「示例專案（예제 프로젝트）」標記 /「+」選單裡的「Skills」·「新增聯結器（커넥터 추가）」·「新增外掛（플러그인 추가）」 /「自定義」介面的「Skills」·「聯結器（커넥터）」·「外掛（플러그인）」標籤頁，「我的專案（내 항목）」·「探索（탐색）」，「+ 新增（추가）」，「試用（체험）」（確認日期 2026-10-26）
[^projects]: Anthropic 幫助文件，《What are projects?》。"Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." / "For users on Team and Enterprise plans, projects can be shared with other members of your organization" / "Nothing is lost or deleted in the move." https://support.claude.com/en/articles/9517075（確認日期 2026-10-26）
[^projects-how]: Anthropic 幫助文件，《How can I create and manage projects?》。"Free users can create a maximum of five projects." / "Click "+ New Project" in the upper right corner." / "Give your project a name and description (note that Claude will not have access to these details)." / "Anything you upload to this space will be used across all of your chats within that project." / "Claude will use these instructions for all the chats within the project." / "Note: Context is not shared across chats within a project unless the information is added into the project knowledge base." / "While working in a project, Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." / "There is no way to delete archived projects at this time (you must unarchive it first)." https://support.claude.com/en/articles/9519177（確認日期 2026-10-26）
[^personal]: Anthropic 幫助文件，《Understanding Claude's personalization features》。"These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728（確認日期 2026-10-26）
[^rag]: Anthropic 幫助文件，《Retrieval augmented generation (RAG) for projects》。"RAG for projects is available on paid plans (Pro, Max, Team, and Enterprise)." / "When your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity by up to 10x while maintaining quality responses." / "When asking questions, you can reference specific documents by name to help Claude focus its search." https://support.claude.com/en/articles/11473015（確認日期 2026-10-26）
[^connectors]: Anthropic 幫助文件，《Use connectors to extend Claude's capabilities》。"Connectors let Claude access your apps and services, retrieve your data, and take actions within connected services." / "Web connectors are available for all users on Claude, Cowork, Claude Desktop, and Claude Mobile (iOS and Android)." / "If someone can't access a specific file, channel, or record in the source system, the connector can't reach it from Claude either." / "Only connect services you trust and need for your workflows." / "Installing connectors on mobile is currently in beta—Claude Desktop and web remain the primary path for custom connectors." / "Free users are limited to one custom connector." https://support.claude.com/en/articles/11176164（確認日期 2026-10-26）
[^suggest]: Anthropic 幫助文件，《How Claude suggests connected apps》。"Your data from that app isn’t used to train Claude’s models, and the connected app can’t see your other conversations." / "Claude doesn’t silently default to one over the other; you choose which app to use, and Claude proceeds from there." / "There are no sponsored rankings, no paid placements, and no advertising." / "Before Claude books, buys, or reserves something on your behalf, it checks with you first." https://support.claude.com/en/articles/14730684（確認日期 2026-10-26）
[^google]: Anthropic 幫助文件，《Use Google Workspace connectors》。"By default, Claude asks for your approval before each of these actions." / "Asking for a generic "doc" or "deck" without naming Google creates a local file instead." / "Attachment content is not directly accessible through Gmail (metadata only)." / "This data is retained with its associated chat, so you can delete any retrieved data by deleting the chat." https://support.claude.com/en/articles/10166901（確認日期 2026-10-26）
[^m365]: Anthropic 幫助文件，《Connect to Microsoft 365》。"The Microsoft 365 connector is available on all Claude plans: Free, Pro, Max, Team, and Enterprise." / "Personal Microsoft accounts (such as @outlook.com, @hotmail.com, or @live.com) can't be used." / "In every tenant, a Microsoft Entra Global Administrator also needs to grant a one-time consent." https://support.claude.com/en/articles/15183774（確認日期 2026-10-26）
[^interactive]: Anthropic 幫助文件，《Use interactive connectors in Claude》。"You can check off tasks, update statuses, and keep chatting with Claude—all in one place." / "Individual users: You can disable specific connector tools via the "Search and tools" menu in your conversation." https://support.claude.com/en/articles/13454812（確認日期 2026-10-26）
[^custom]: Anthropic 幫助文件，《Get started with custom connectors using remote MCP》。"only click "Allow always" when using a server and tool that you trust to run unsupervised." https://support.claude.com/en/articles/11175166（確認日期 2026-10-26）
[^tools]: Anthropic 幫助文件，《Manage Claude’s tool access》。"Each connector takes up space in a conversation." / "Best for: Fewer than 10 connectors you use constantly." / "Trade-off: Claude may take an extra step to find the right connector before using it." / "Your selection only applies to that conversation. You can change it at any time." https://support.claude.com/en/articles/13730515（確認日期 2026-10-26）
[^research]: Anthropic 幫助文件，《Use research on Claude》。"During research, Claude can use tools from your connectors automatically, without asking for approval each time." https://support.claude.com/en/articles/11088861（確認日期 2026-10-26）
[^skills]: Anthropic 幫助文件，《What are skills?》。"Skills are available for users on Free, Pro, Max, Team, and Enterprise plans. This feature requires code execution to be enabled." / "Anyone can create skills by writing instructions in Markdown—no coding required for simple skills" / "Custom instructions apply broadly to all your conversations. Skills are task-specific and only load when relevant" / "Projects provide static background knowledge that's always loaded when you start chats within them." / "MCP connections give Claude access to tools, while skills teach Claude how to use those tools effectively." / "Claude determines which skills are relevant and loads the information it needs to complete that task, helping to prevent context window overload." https://support.claude.com/en/articles/12512176（確認日期 2026-10-26）
[^skills-use]: Anthropic 幫助文件，《Use skills in Claude》。"Navigate to Settings > Capabilities and ensure that Code execution and file creation (called Create and edit files in the updated Settings layout) is enabled." / "You don't need to explicitly invoke them—Claude determines when each skill is needed based on your request." / "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." / "Upload a ZIP file containing your skill folder." / "Try being more explicit in your request (e.g., "Use my brand guidelines skill to create a presentation")." / "The most significant risks are prompt injection, which allows Claude to be manipulated to execute unintended actions, and data exfiltration" https://support.claude.com/en/articles/12512180（確認日期 2026-10-26）
[^skills-make]: Anthropic 幫助文件，《How to create custom skills》。"Recording a skill is available on Pro, Max, and Team plans, in Cowork in Claude for Mac." / "A recording can run for about 10 minutes." / "This is critical—Claude uses this to determine when to invoke your skill (200 characters maximum)." / "Write clear descriptions: Claude uses descriptions to decide when to invoke your skill. Be specific about when it applies." / "Iterate on the description if Claude isn't using it when expected." / "When you're iterating on a skill with Claude in chat, you can edit the skill files directly where they open beside the conversation. Highlight the text you want changed, click "Edit with Claude," and type your request." https://support.claude.com/en/articles/12512198（確認日期 2026-10-26）
[^directory]: Anthropic 幫助文件，《Browse skills, connectors, and plugins in one directory》。"Our unified directory brings skills, connectors, and plugins together in one place" / "Skills you install from the directory are view-only." https://support.claude.com/en/articles/14328846（確認日期 2026-10-26）
[^plugins]: Anthropic 幫助文件，《Use plugins in Claude》。"Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" / "Claude includes a growing library of plugins for common knowledge work—including sales, finance, legal, marketing, HR, engineering, design, operations, data analysis, and more." / "Select the plugin you want, then click "Add."" / "Type "/" or click the "+" button to see the available skills from your plugins, in chat and in Cowork." / "You can add and use plugins in chat on the web, the Chat tab in Claude Desktop, and Claude Cowork." / "Hooks and sub-agents run in Cowork and Claude Code, not in chat, so they appear grayed out in chat." / "Only install plugins from sources you trust." / "This opens a new Cowork task with a prompt asking Claude to customize the plugin you chose." / "Click “Let's go” to start working with Claude to adjust the plugin's Skills and connectors to match how you work." 韓語版幫助文件寫作「커스터마이징」→「시작하기」。 https://support.claude.com/en/articles/13837440（確認日期 2026-10-26）
[^academy-projects]: Claude Academy《Claude 101》課程《Introduction to projects》。"Simply upload it during the conversation and it stays separate from your project knowledge. It's a perfect way to share context or examples without cluttering the knowledge base." / "Begin with a specific use case rather than trying to create one project for everything. You can always add more content as you go." / "Outdated documents can lead to outdated responses. Review and update your project knowledge periodically." https://academy.claude.com/courses/claude-101/introduction-to-projects（確認日期 2026-10-26）
[^academy-connect]: Claude Academy《Claude 101》課程《Connecting your tools》。"Return to Claude and try a simple request, like "Can you access my [tool name]?"" https://academy.claude.com/courses/claude-101/connecting-your-tools（確認日期 2026-10-26）
[^academy-layers]: Claude Academy《Introduction to Claude Cowork》課程《Get better results faster》。"If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale（確認日期 2026-10-26）
[^academy-skills]: Claude Academy《Claude 101》課程《Working with skills》。"The easiest way to create a custom Skill is through conversation with Claude itself." / "Claude will interview you about your workflow, asking things like: What should this skill do? What makes good output for this type of work? Can you give examples of when you'd use this skill?" / "Templates, style guides, brand assets, or examples of work you're proud of all help Claude understand exactly what you're looking for." / "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills（確認日期 2026-10-26）
[^academy-plugins]: Claude Academy《Introduction to Claude Cowork》課程《Plugins: Encode your team's expertise》。"A plugin from the marketplace is a strong default, not a final answer." / "The more you shape it to your team's actual work, the more leverage it produces." https://academy.claude.com/courses/introduction-to-claude-cowork/plugins-cowork-as-a-specialist（確認日期 2026-10-26）
[^projects-limit]: 可能與價格頁面的說明不同，請在你自己的介面上確認。
[^new-project-name]: 在幫助文件裡寫作「+ 새 프로젝트」（+ 新建專案）。
[^project-instr-free]: 免費套餐能否使用專案指令，各份文件的寫法不一樣。
[^connector-name]: 在幫助文件裡寫作「커넥터」→「커넥터 관리」（聯結器 → 管理聯結器），並且說輸入 `/` 也可以。
[^create-name]: 在新設定介面裡，名稱是「파일 생성 및 편집」（建立和編輯檔案）。
[^discover-name]: 在幫助文件裡寫作「발견」標籤頁（發現）。
[^screen-connectors]: 親自確認輸入框「+」→「新增聯結器」的子選單。條目為「커넥터 둘러보기」「커스텀 커넥터 추가」（灰色顯示）（確認日期 2026-10-28，網頁，免費（Free）套餐）
