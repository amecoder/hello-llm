# 第5章 記憶與個性化設定 — 不用每次都自我介紹

> **一句話總結**：希望 Claude 始終遵守的事，寫在**指令**裡；對話中瞭解到的關於我的內容，由**記憶**來記住。
> 你會學到怎麼檢視、修改、關閉被記住的內容。還會看到長時間使用時，提醒你休息的休息提醒。

介面以 2026年10月的網頁版為準。目前新的 Claude 介面和新的設定介面正在陸續推送，所以選單名稱和位置可能因介面而異。
這一章的截圖是免費套餐的網頁介面。選單名稱按截圖裡看到的名稱來寫。幫助文件裡出現的其他名稱，集中放在腳註和摺疊框裡。

## 讓 Claude 瞭解我的三種方法

在[第1階段第4章](../00-common/04-prompt-basics.md#好提示詞的5個要素)裡你學過，好的提示詞裡要包含**背景資訊**。
可是“我是小區附近一家小菜店的老闆”這樣的話，每開一個新聊天就重寫一遍，實在麻煩。
正如在[第1階段第6章](../00-common/06-conversation.md#在新對話裡-預設它不知道)裡看到的，新對話本來就是在不認識我的狀態下開始的。

Claude 有三個功能，可以省去這份辛苦。

| 功能 | 誰來決定 | 比喻 |
|---|---|---|
| **指令**（instructions） | 我自己寫 | 貼在店裡牆上的點單備忘 |
| **記憶**（memory） | Claude 在對話中儲存 | 記得熟客口味的店主 |
| **參考過往對話** | 我一問，Claude 就去查詢 | 翻看以前的賬本 |

三個功能都不需要一開始就設定得很完美。邊用邊一點一點調整就行。

<Quiz id="ch205-three-ways" />

## 指令 — 適用於所有對話的規則

**指令**是我自己寫下的“請始終遵守的事”。寫在這裡的內容，會適用於和 Claude 的**所有對話**。[^personal]

開啟的位置如下。[^personal]

1. 點左下角我的名字。
2. 選擇「設定（설정）」→「賬戶（계정）」。[^screen]
3. 寫在 ②「Claude 指令（Claude 지침）」這一欄裡。[^screen]

![設定裡的「賬戶」介面。紅色編號標出：①「姓名（성명）」和「希望 Claude 怎麼稱呼你？」，②「Claude 指令」輸入欄，③「退出所有裝置的登入」，④「刪除賬戶」](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

姓名和郵箱是改成示例的介面（免費套餐）。**紅色編號和下面列表裡的編號是同一個位置。**

- ①「姓名（성명）」·「希望 Claude 怎麼稱呼你？（Claude가 어떻게 불러드릴까요?）」 — Claude 稱呼我用的名字
- ②「Claude 指令（Claude 지침）」 — 寫下適用於所有對話的規則的欄
- ③「退出所有裝置的登入（모든 기기에서 로그아웃）」
- ④「刪除賬戶（계정 삭제）」

② 欄的上方有一段提示，說明這份指令會在聊天和 Cowork 的整體範圍內被記在心裡。[^screen] 空白處用淺色字寫著「例：保持說明簡單明瞭」。[^screen]

::: details 如果設定裡看到的不是「賬戶」而是「Your Claude」（點選展開）
在幫助文件裡，這一欄出現在「設定（설정）」→「Your Claude」的「指令（지침）」裡。[^personal] 收到新設定介面的賬號，可能會看到這樣的樣子。請以螢幕上看到的名稱為準。
:::

如果不知道該寫什麼，可以從[第1階段第4章](../00-common/04-prompt-basics.md#好提示詞的5個要素)的五個要素裡，只挑**每次都一樣**的放進去。

```
我是一位經營小區附近小菜店的 50 多歲的老闆。我不太懂電腦術語。
- 回答請用敬語，難懂的詞請用括號解釋。
- 先用一行話說結論，然後再說明。
- 不確定的內容不要編造，請說不知道。
```

比較一下不夠好的例子和更好的例子。

- 不夠好的例子：“請親切地回答。”
- 更好的例子：“難懂的詞請用括號解釋。請先用一行話說結論。”

更好的例子，把該做什麼寫得很具體。

寫好指令後，開一個新聊天，發一個簡短的問題試試。只要問問自己：“語氣對嗎？結論先出來了嗎？”就行。

指令不用在第一天就填滿。用著用著，你會發現自己**總是在要求改同一件事**。比如“請先說結論”“表格最多三列”。這些話，正是該抄進指令裡的句子。[^academy-context] 寫下一次，從下次對話開始就不用再說了。

只在特定事情上用的規則，放在**專案指令**裡，比放在賬戶全域性的指令裡更合適。專案指令只適用於該專案裡的聊天。[^personal] 專案會在[第7章](07-projects-tools.md)裡講。

<Quiz id="ch205-instructions" />

## 記憶 — Claude 在對話中記住的內容

**記憶**是 Claude 把對話中瞭解到的關於我的內容記下來的功能。
在 Free·Pro·Max 套餐裡，網頁·桌面·手機應用都是**一開始就開著的。**[^memory]
公司用套餐（Team·Enterprise）要管理員允許才能用，在每個人自己開啟之前是關閉的。[^memory]

Claude 不會在對話結束後再做總結。它是**在對話的過程中**，按主題分開儲存。[^memory]
所以如果你說“截止日期變了”，下一次對話就已經知道這件事了。

在[第1階段第6章](../00-common/06-conversation.md#在新對話裡-預設它不知道)或其他 AI 課程裡，你學到的是“新對話從零開始”。[^academy-memory] 在 Claude 裡，只要記憶開著，新對話也能帶著我告訴過它的內容開始。
如果你真想看看從白紙開始的樣子，請在新聊天裡發第一條訊息之前，先把「+」→「記憶」關掉。這樣那個聊天裡就不會用到記住的內容。[^off] 方法在下面的“只關閉一個聊天的記憶”裡。

### 記住什麼

Claude 會記住對一起工作有幫助的日常背景資訊。[^memory]

- 我的角色，我正在做的事
- 工作和生活中出現的人和地方
- 喜歡的溝通方式和工作方式
- 正在進行的事情的細節

Claude 也會自己決定儲存。如果有一定要留下的內容，直接說“記住”就行。[^memory]

```
記住：我在首爾開小菜店，顧客主要是 40~60 歲的人。
我請你寫宣傳文案時，請按這個顧客群來寫。
```

### 不會記住的內容

健康、種族、宗教、政治、性取向這類**敏感話題**，預設不儲存。[^sensitive]
如果不想每次都重新解釋，可以在「設定（설정）」→「記憶（메모리）」裡，開啟「在記憶中包含敏感話題（민감한 주제를 메모리에 포함）」。[^screen][^sensitive][^your-claude] 一開始是關閉的。[^screen]

身份證號碼、犯罪記錄、金融賬戶號碼、居留身份，**即使你拜託它也不會儲存。**[^sensitive]
但這並不意味著可以把這類資訊寫進聊天裡。輸入之前，請先回想一下[第1階段第9章](../00-common/09-safety.md#不要放進去的東西)。

> 在專案裡，會單獨積累屬於該專案的記憶。不會使用其他專案的記憶。[^memory] 詳細內容在[第7章](07-projects-tools.md)裡看。

<Quiz id="ch205-memory" />

## 檢視並修改被記住的內容

你可以親自看到 Claude 記住了關於我的什麼。
與記憶有關的設定，集中在「設定（설정）」→「記憶（메모리）」這一個介面裡。[^screen]

![設定裡的「記憶」介面。紅色編號標出：①「從聊天中生成記憶」開關，②「在記憶中包含敏感話題」開關，③「從其他 AI 提供商匯入記憶」和「開始匯入」，④「匯出記憶」和「匯出」](../../../guide/10-claude/assets/shot-09-settings-memory-marked.png)

這是免費套餐的介面。**紅色編號和下面列表裡的編號是同一個位置。**

- ①「從聊天中生成記憶（채팅에서 메모리 생성）」 — 開啟和關閉記憶的開關
- ②「在記憶中包含敏感話題（민감한 주제를 메모리에 포함）」 — 讓它也記住健康·宗教等話題的開關
- ③「從其他 AI 提供商匯入記憶（다른 AI 제공업체에서 메모리 가져오기）」 — 把其他 AI 的記憶搬過來
- ④「匯出記憶（메모리 내보내기）」 — 把記憶下載成檔案

這個介面下方有已儲存的記憶列表。[^screen] 點開主題來讀，用鉛筆圖示修改，或者用「刪除（삭제）」刪掉就行。[^manage][^your-claude]

<!-- 需要截圖：有已儲存記憶的賬號裡的主題列表和編輯·「刪除」按鈕 -->

列表最下面還有一個輸入欄，寫著「告訴 Claude 需要修改的內容（Claude에게 변경할 내용을 알려 주세요）」。[^screen]
不用特地跑到設定介面。在聊天裡用話說一遍來修改，從下一次對話起也會生效。[^manage]

```
我開小菜店這件事，現在可以忘掉了。上個月我已經把店關了。
```

開啟列表之後，請問問自己：“有沒有錯誤的內容？有沒有不想留下的內容？”

### 刪了聊天，記憶還在

有一點很容易搞混。**即使刪除了對話，從那場對話裡產生的記憶也不會被刪除。**[^manage]
如果有想刪掉的內容，請到「設定（설정）」→「記憶（메모리）」的列表裡，把那條記憶單獨刪掉。

> 這個說明以現在的新記憶為準。部分公司用套餐裡還保留著舊方式的記憶。[^manage] 如果和你的介面不一樣，請以介面為準。

<Quiz id="ch205-manage" />

## 關閉記憶 — 暫停與重置

記憶開關是「設定（설정）」→「記憶（메모리）」裡的 ①「從聊天中生成記憶」（Memory from chats）。[^screen][^off][^your-claude]
點它想要關閉時，會讓你在兩個選項裡選一個。[^off]

- **「暫停記憶」**（Pause memory） — 已有的記憶原樣保留。只是既不使用，也不新建。
- **「重置記憶」**（Reset memory） — 連專案記憶在內，**全部永久刪除**。無法恢復。

如果只是想暫時歇一歇，請選暫停。重置的話，即使再開啟，也要從頭開始。[^off]

### 只關閉一個聊天的記憶

也可以讓記憶保持開啟，只在**這一次聊天裡**關閉。[^off]

1. 開啟一個新聊天。
2. 點輸入框裡的「+」。
3. 點選單最下面的 ⑥「記憶」（Memory）把它關掉。右邊有勾選標記時，表示是開著的狀態。[^screen]
4. 傳送第一條訊息。

![點輸入框裡的「+」後開啟的選單。紅色編號標出：①「上傳或新增檔案」，②「Skills」，③「新增聯結器」，④「設計系統」，⑤「新增外掛」，⑥ 帶勾選標記的「記憶」](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

這是免費套餐的介面。這一章用到的是 ⑥「記憶」。其餘的在[第4章](04-files-artifacts.md)和[第7章](07-projects-tools.md)裡講。

**只能在傳送第一條訊息之前**關閉。對話一開始，就不能再改了。[^off]

這樣開始的聊天，和[第3章](03-chats.md)裡的**隱身聊天**不同。只關了記憶的聊天，仍然會留在對話記錄裡。[^off] 如果連記錄都不想留下，請用隱身聊天。

| 選擇 | 記憶 | 對話記錄 |
|---|---|---|
| 「+」→ 關閉「記憶」 | 不使用也不新建 | 會留下 |
| 隱身聊天 | 不儲存 | 不留下 |

<Quiz id="ch205-off" />

## 參考過往對話

你也可以問“上次聊的那個，你還記得嗎”。
在付費套餐（Pro·Max·Team·Enterprise）裡，Claude 會**查詢過往的對話**，並接著用裡面的內容。[^past]

自然地問就行。

```
上次一起做的店鋪宣傳文案，你還記得嗎？接著在那個基礎上再潤色一下。
```

Claude 一旦去查詢過往對話，當前聊天裡就會出現**使用了工具的標記**。[^past]
被找來用的對話，會附上通往原對話的連結。[^past] 點連結看看，確認 Claude 找到的是不是對的對話。

需要了解的幾點。

- **專案裡的對話**，只會在該專案裡查詢。[^past]
- **想關掉的話**，請在「設定（설정）」→「記憶（메모리）」裡關閉「搜尋和引用聊天（채팅 검색 및 참조）」。[^past][^past-where] 這是付費套餐的功能，所以在這一章的免費套餐介面裡，看不到這個開關。[^screen]
- 在側邊選單裡自己查詢過往對話的方法，在[第3章](03-chats.md)裡講。

<Quiz id="ch205-past-chats" />

## 遷入·匯出其他 AI 的記憶

如果你原來用別的 AI 服務，現在換到了 Claude，可以把那邊積累的記憶帶過來。
**所有套餐**都可以在網頁和桌面應用上做到。[^import]

1. **從原來用的 AI 裡提取記憶。** 幫助文件裡有推薦的提示詞。這是一段以 "I'm moving to another service and need to export my data." 開頭的英文提示詞。請到腳註的幫助連結裡，把全文複製下來用。[^import]
2. **在 Claude 裡開啟匯入。** 點「設定（설정）」→「記憶（메모리）」裡 ③「從其他 AI 提供商匯入記憶」旁邊的「開始匯入（가져오기 시작）」。[^screen][^your-claude]
3. **貼上。** 把提取來的文字貼上進輸入欄，點「新增到記憶（메모리에 추가）」。[^import]
4. **確認。** 完成後，點「檢視 Claude 對我瞭解到的內容（Claude가 나에 대해 학습한 내용 보기）」，看看進去了什麼。[^import]

匯入之前，可以修改提示詞，**把敏感資訊去掉。**[^import] 不想留下的內容，一開始就不放進去更安全。

有兩點需要知道。

- **這是實驗功能。** 匯入的記憶不一定總能正確寫入。[^import]
- **和工作無關的個人資訊，可能不會被保留。**[^import]

反過來，如果想把 Claude 的記憶**匯出**，請點「設定（설정）」→「記憶（메모리）」裡 ④「匯出記憶」旁邊的「匯出（내보내기）」。你會下載到一個 .zip 檔案，裡面是 Markdown（只裝文字的簡單文件格式）檔案。[^screen]
在聊天裡這樣拜託它也可以。[^import]

```
把記憶裡關於我的內容，原封不動、一個字都不要改，全部寫出來。
```

把拿到的文字儲存成電腦上的檔案，就成了備份。

<Quiz id="ch205-import" />

## 休息提醒與免打擾時間

和 AI 聊著聊著，有時會不知不覺過去很久。這時可以用的功能有兩個。
在 Free·Pro·Max 套餐裡，以**測試版**（beta，正式釋出前的試用功能）提供。[^wellbeing]

開啟的位置是「設定（설정）」→「時間與專注（시간 및 집중）」（Time and focus）。[^screen][^wellbeing-name]

![設定裡的「時間與專注」介面。紅色編號標出：①「休息提醒」和選擇小時·分鐘的兩個欄，②「免打擾時間」和週日~週六的星期按鈕](../../../guide/10-claude/assets/shot-09-settings-time-marked.png)

這是免費套餐的介面。**紅色編號和下面列表裡的編號是同一個位置。**

- ① **休息提醒** — 先選好小時和分鐘。[^screen] 用到那個時長，就會彈出提醒。你可以選擇停下，稍後再提醒，或者關掉提醒繼續用。[^wellbeing]
- ② **免打擾時間**（quiet hours）[^quiet-name] — 選出為了做別的事而空出來的星期幾。[^screen]

在網頁或桌面端設定一次，手機應用也會適用。[^wellbeing]

兩者都**不是強制鎖定。** 你隨時可以點「繼續」接著用。[^wellbeing]
而且它們和套餐的使用額度是**兩回事。**[^wellbeing] 使用額度在[第1章](01-getting-started.md)裡講過。

<Quiz id="ch205-wellbeing" />

## 親手試一試

1. 開啟「設定（설정）」→「記憶（메모리）」裡的列表，讀一讀 Claude 記住了關於我的什麼。如果有錯的內容，就修改或刪除。
2. 在「設定（설정）」→「賬戶（계정）」的「Claude 指令」裡，像上面的示例那樣，寫下一行關於我的背景資訊和三行規則。
3. 在新聊天裡只發一句“推薦三件週末可以做的事”。看看語氣和格式是不是按指令來的。
4. 再開一個新聊天，在發第一條訊息前把「+」→「記憶」關掉，再發同樣的問題。比較一下兩個答案有什麼不同。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：把你對通知文一直以來的期望，寫成一行規則放進「Claude 指令」。例：“寫通知文時，把日期·地點·需要準備的東西放在最上面。”這一行，到第7章也可以挪到專案指令裡。

## 小結

- 指令是我寫的規則，適用於所有對話。寫在「設定」→「賬戶」→「Claude 指令」裡。只在特定事情上用的規則，放在專案指令裡。
- 記憶是 Claude 在對話過程中按主題儲存的。Free·Pro·Max 一開始就是開著的。
- 敏感話題預設不儲存，身份證號碼、賬戶號碼之類，即使拜託也不會儲存。
- 在「設定」→「記憶」裡檢視和修改。刪了對話，記憶也還在，所以要另外刪除。
- 關閉記憶時，暫停會保留記憶，重置會全部刪除。只想關一個聊天，就在第一條訊息之前關「+」→「記憶」。
- 在付費套餐裡，可以查詢過往對話並接著用。
- 其他 AI 的記憶，用「開始匯入」搬過來。這是實驗功能。我的記憶，用「匯出」下載。
- 休息提醒和免打擾時間，在「設定」→「時間與專注」裡設定。這是提醒，不是鎖定。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Instructions | 指令 | 為了適用於所有對話，我自己寫下的規則 |
| Memory | 記憶 | Claude 把對話中瞭解到的關於我的內容記住的功能 |
| Pause memory | 暫停記憶 | 保留記憶，但不使用也不新建 |
| Reset memory | 重置記憶 | 把所有記憶永久刪掉 |
| Search and reference chats | 搜尋和引用聊天 | 查詢過往對話，用在當前答案裡的功能 |
| Memory import | 匯入記憶 | 把其他 AI 裡積累的記憶搬到 Claude 的功能 |
| Time and focus | 時間與專注 | 設定休息提醒和免打擾時間的設定（幫助文件裡的新名稱是 Wellbeing） |
| Quiet hours | 免打擾時間 | 事先定好為做別的事而空出來的星期幾的功能 |

<ChapterDone :chapter="205" />

下一章：[第6章. 搜尋與調研](06-search.md)

[^screen]: 在 Claude 網頁介面（免費套餐，韓語）中親自確認。「設定（설정）」→「賬戶（계정）」的「Claude 指令（Claude 지침）」："Claude는 Anthropic의 가이드라인 범위 내에서 이 계정 및 연결된 모든 계정의 채팅과 Cowork 전반에 걸쳐 이 지침을 염두에 둡니다."（意思是：Claude 會在 Anthropic 準則的範圍內，把這份指令記在心裡，用於這個賬號及所有關聯賬號的聊天和 Cowork 整體。） / 「設定」→「記憶（메모리）」：「從聊天中生成記憶（채팅에서 메모리 생성）」、「在記憶中包含敏感話題（민감한 주제를 메모리에 포함）」、「從其他 AI 提供商匯入記憶（다른 AI 제공업체에서 메모리 가져오기）」、「匯出記憶（메모리 내보내기）」（"把記憶下載為裝有 Markdown 檔案的 .zip 檔案。"） / 「+」選單裡的「記憶」 / 「設定」→「時間與專注（시간 및 집중）」：「休息提醒（휴식 알림）」、「免打擾時間（방해 금지 시간）」（確認日期 2026-10-26）
[^personal]: Anthropic 幫助文件，《Understanding Claude's personalization features》。"Any instructions you add here will be applied to all of your conversations with Claude." / "Select "Settings," then "Your Claude" (or "Account" in the older Settings layout)." / "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728（確認日期 2026-10-26）
[^memory]: Anthropic 幫助文件，《Use Claude’s chat search and memory to build on previous context》。"Memory is on by default for Free, Pro, and Max plans on the web, Claude Desktop, and Claude Mobile" / "On Team and Enterprise plans, owners control whether memory is available, and it's off for each member until they turn it on." / "Claude saves memory as a set of individual topics as you chat, rather than summarizing conversations after they end." / "Your role, projects, and professional context" / "Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." https://support.claude.com/en/articles/11817273（確認日期 2026-10-26）
[^sensitive]: Anthropic 幫助文件，《Use Claude’s chat search and memory to build on previous context》。"By default, Claude does not store topics related to personal or sensitive subject matter" / "Turn on Include sensitive topics in memory in Settings > Your Claude" / "This includes government ID numbers, criminal history, financial account numbers, and immigration status." https://support.claude.com/en/articles/11817273（確認日期 2026-10-26）
[^manage]: Anthropic 幫助文件，《Use Claude’s chat search and memory to build on previous context》。"Select any topic to read it, then use the edit icon to change it or select "Delete" to remove it." / "Tell Claude what you'd like it to remember, change, or forget, and the update applies to your next conversation." / "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed" / "A small number of Team and Enterprise organizations still use the legacy memory from chats experience." https://support.claude.com/en/articles/11817273（確認日期 2026-10-26）
[^off]: Anthropic 幫助文件，《Use Claude’s chat search and memory to build on previous context》。"navigating to Settings > Your Claude and turning on Memory from chats" / "Reset memory: Permanently deletes all memories including project memories." / "You need to turn memory off before you send the first message." / "Unlike incognito chats, they stay in your chat history." / "Claude won't use what it remembers about you in that chat, and nothing from the chat is saved to memory." https://support.claude.com/en/articles/11817273（確認日期 2026-10-26）
[^past]: Anthropic 幫助文件，《Use Claude’s chat search and memory to build on previous context》。"Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Individual project conversations (searches are limited to within each specific project)." / "navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273（確認日期 2026-10-26）
[^import]: Anthropic 幫助文件，《Import and export your memory from Claude》。"Memory imports are available for Free, Pro, Max, Team, and Enterprise plans on the web and Claude Desktop." / "I'm moving to another service and need to export my data." / "Paste the exported text from your previous AI provider into the text box and click the "Add to memory" button to submit it." / "Click the "See what Claude learned about you" button to start a new conversation" / "You can customize this prompt to exclude any sensitive information before importing into Claude." / "Claude may not retain imported personal details unrelated to work." / "Important: Memory imports are experimental and still in active development" / "Write out your memories of me verbatim, exactly as they appear in your memory." https://support.claude.com/en/articles/12123587（確認日期 2026-10-26）
[^wellbeing]: Anthropic 幫助文件，《Set break reminders and quiet hours》。"Break reminders and quiet hours are in beta on Free, Pro, and Max plans." / "Go to Settings > Wellbeing (or Settings > Time and focus in the older Settings layout)." / "When you reach the amount you set, Claude shows a reminder. You can stop, snooze it, or dismiss it and keep going." / "Neither is a hard lock, so you can always continue past them." / "They’re separate from your plan’s usage limits." https://support.claude.com/en/articles/15672868（確認日期 2026-10-26）
[^academy-context]: Claude Academy《Introduction to Claude Cowork》課程《Standing context: Global instructions and projects》。"Your global instructions don't need to be complete on day one." / "those are global-instruction candidates." https://academy.claude.com/courses/introduction-to-claude-cowork/giving-cowork-context（確認日期 2026-10-26）
[^academy-memory]: Claude Academy《AI capabilities and limitations》課程《Working Memory》。"Then open a brand-new conversation and ask a question that assumes it remembers what you taught it. Watch it start from zero." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory（確認日期 2026-10-26）
[^your-claude]: 在幫助文件裡，這個選單出現在新設定介面的名稱「設定（설정）」→「Your Claude」之下（例：記憶列表在「Your memory」旁邊的「管理」裡）。收到新設定介面的賬號，可能會看到這樣的樣子。請以螢幕上看到的名稱為準。
[^past-where]: 幫助文件說明，這個開關在「設定」→「Your Claude」裡；在舊介面裡，則在「設定」→「記憶」裡。
[^wellbeing-name]: 在幫助文件裡，它也以新設定介面的名稱「Wellbeing」出現。可能因介面而異。
[^quiet-name]: 幫助文件的韓語譯名是「조용한 시간」（安靜時間）。
