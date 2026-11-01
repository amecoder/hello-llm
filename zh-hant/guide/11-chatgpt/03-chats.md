# 第3章 管理對話——查詢、整理、分享、隱藏

> **一句話總結**：對話攢多了，就用**搜尋**去找；不用的就**歸檔**或**刪除**。
> 給別人看的時候用**分享連結**，不想留下記錄的時候用**臨時聊天**，怕旁邊的人看到的對話用**鎖定的對話**。

介面以2026年10月的網頁版（Plus 套餐）為準。免費套餐或手機應用裡，選單的位置可能略有不同。

## 開始新聊天

點側邊選單最上面的「新聊天（새 채팅）」，會開啟一個空白對話。發出第一個問題後，這個對話就會出現在側邊選單的「最近（최근）」列表裡。

什麼時候最好開一個新聊天，你在第1階段已經學過了。話題變了、總是忘記最初的指示、對話太長了，就是這些時候（[第1階段 第6章](../00-common/06-conversation.md)）。
在 ChatGPT 裡也同樣適用。要搬一段很長的對話時，請這樣讓它寫一份交接備忘，再貼上到新聊天裡。

```
我想在新聊天裡接著這段對話。請把到目前為止定下的內容、我的喜好、剩下的事，分條整理出來。
```

::: details 收到的回答大概是這樣（示例——點選展開）
這是本指南編的示例。實際的回答會因服務和當時的情況而不同。

如果是討論家庭旅行的對話，會是這樣的樣子。

> **到目前為止定下的內容**
> - ○月第○周，○晚○天
> - 和父母一起去的旅行
>
> **我的喜好**
> - 步行的行程要短
> - 住的地方要安靜
>
> **剩下的事**
> - 在○個住處候選裡選一個
> - 定下第一天晚上吃飯的餐廳

**檢查一下有沒有收好**：是不是分成了定下的內容、我的喜好、剩下的事三組？對話裡定下的事有沒有漏掉？還沒定的事有沒有被寫得像已經定了？

:::

<Quiz id="ch103-new" />

## 查詢以前的對話——聊天搜尋

點側邊選單最上面的**放大鏡**（「搜尋（검색）」），會彈出搜尋視窗。用鍵盤的話，Windows 是 Ctrl+K，Mac 是 Cmd+K。[^search]

![聊天搜尋視窗。請看上方的輸入欄「搜尋…（검색…）」和下面的「最近（최근）」對話列表](../../../guide/11-chatgpt/assets/shot-10-search-marked.png)

對話標題和賬號名稱是改成示例的畫面。① 在「搜尋…（검색…）」欄裡輸入詞語；什麼都不輸入的話，② 會顯示「最近（최근）」對話列表。

如果想找"上週問 Excel 函式的那次對話"，在 ① 「搜尋…」欄裡只寫 `Excel` 也可以。有幾點要知道。[^search]

- **聊天搜尋不是網際網路搜尋。** 它只在我的對話、專案、檔案裡查詢。想在網際網路上查，請用 + 選單裡的「網頁搜尋」（[第6章](06-search.md)）。
- **刪除的對話不會出現，歸檔的對話會出現。** 歸檔和刪除的區別，下一節再看。

<Quiz id="ch103-search" />

## 整理對話——置頂、歸檔、刪除

在側邊選單裡對話旁邊的**更多選單**（•••，三個點的按鈕）裡整理對話。[^delete]

![側邊選單裡某個對話的更多（•••）選單展開後的畫面。有「重新命名（이름 변경）」「置頂（고정）」「分享（공유）」「歸檔（보관）」「刪除（삭제）」「移到專案（프로젝트로 이동）」](../../../guide/11-chatgpt/assets/shot-24-chat-menu.png)

*對話標題和名稱是改成示例的畫面。*

選單裡有「重新命名」「置頂」「分享」「歸檔」「刪除」「移到專案」。[^screen-menu] 對話的名稱用「重新命名」來改。經常開啟的對話，點「置頂」，它就會固定在側邊選單上方的「已置頂的對話（고정된 스레드）」裡。

### 歸檔和刪除不一樣

| | 「歸檔」 | 「刪除」 |
|---|---|---|
| 在側邊選單裡 | 消失 | 消失 |
| 確認視窗 | 沒有，直接歸檔 | — |
| 在聊天搜尋裡 | **會出現** | 不會出現 |
| 恢復 | 用「取消歸檔」恢復 | **無法恢復**（客服團隊也救不回來） |
| 在公司伺服器上 | 仍然保留 | 會被安排在30天內永久刪除 |

出處：OpenAI 幫助[^delete]

可以把**歸檔**想成放進抽屜裡收著，**刪除**想成扔掉。拿不準的話，先歸檔。歸檔可以恢復，刪除卻無法恢復。
歸檔的對話，可以在設定 → 「已歸檔的聊天（보관된 채팅）」裡重新取出來。

在側邊選單裡看不到某個對話，並不代表它被刪掉了。[^mobile] 先看看是不是用同一個賬號登入的（[第1章](01-getting-started.md#註冊並登入)），再用聊天搜尋找一找。歸檔的對話也會出現在搜尋裡。

點「刪除」後，會彈出確認視窗："此操作將永久刪除（對話標題）。無法恢復。" 要點「刪除聊天」才會真正刪除。[^screen-menu]

![「要刪除聊天嗎？」確認視窗。有「取消」和紅色的「刪除聊天」按鈕](../../../guide/11-chatgpt/assets/shot-24-chat-delete-confirm.png)

想一次性整理的話，可以用設定 → 「資料管理（데이터 관리）」裡的「歸檔所有聊天」或「刪除所有聊天」。**「刪除所有聊天」無法恢復。**[^delete]

> **刪除了對話，檔案還在。** 如果在對話裡上傳的檔案另外儲存在「資料庫」裡，那麼刪除對話並不會刪除檔案。檔案要到資料庫裡另外刪除（[第4章](04-files-images.md)）。[^delete]

<Quiz id="ch103-archive-delete" />

## 把對話給別人看——分享連結

想把對話給別人看，請點對話介面裡的「分享」。點介面上出現的「建立連結」或「複製連結」，再貼上到聊天軟體裡就可以了。
連結地址的樣子是 `https://chatgpt.com/share/…`。[^share]

<!-- 需要截圖：在對話介面點「分享」後出現的建立連結視窗（網頁版） -->

請記住，分享連結是**像拍照一樣留下那個瞬間**（快照，snapshot）。[^share]

- **建立連結之後繼續的對話不會包含在內。** 想把新內容也讓別人看到，要點「更新連結」。
- **拿到連結的人，誰都能看。** 無法限制成只有特定的人看，連結也可能傳到別處。
- **沒有到期日。** 它不會自己消失。不需要了，請自己刪除。
- 預設情況下不會顯示我的名字（匿名）。

建立過的連結，可以在設定 → 「資料管理」 → 「分享連結——管理」裡一個個刪除，也可以用「刪除所有分享連結」一次性刪除。[^share]
分享之前，請先掃一遍對話裡有沒有姓名、電話號碼這樣的個人資訊（[第1階段 第9章](../00-common/09-safety.md)）。因為拿到連結的人誰都能看。

<Quiz id="ch103-share" />

## 不留記錄——臨時聊天

像挑禮物這樣不想留下記錄的對話，請用**臨時聊天**。點右上角的「臨時聊天」按鈕，畫面就會換成臨時聊天介面。
第一次開啟時，可能會先彈出一個說明視窗。

![臨時聊天介面。中間有標題「臨時聊天」和「此聊天可以參考記憶、外掛、自定義指令，但不會顯示在記錄中」的文字，點右上角的「個性化（개인화됨）」會展開一個選單，可以在「個性化」和「不個性化（개인화되지 않음）」兩項之間選擇](../../../guide/11-chatgpt/assets/shot-19-temporary-personal-marked.png)

臨時聊天有三個特點。

- **不會留下記錄**（圖中 ④ 的文字）。不會出現在側邊選單的對話列表裡。不過，**為了安全，可能會保留最多30天的副本**。
- **不會被用來訓練。** 這段對話不會被用來訓練、讓 AI 變得更好。
- **不會生成新的記憶。** 在臨時聊天裡聊的內容，不會新存進記憶（[第5章](05-memory.md)）。

右上角的**「個性化」**按鈕（圖中 ①）用來選擇，這段對話裡要不要使用已經儲存的記憶、自定義指令、外掛。[^temp][^screen-temp]

| 選項 | 含義 |
|---|---|
| ② 「個性化」（一開始的選擇） | 參考儲存的記憶、外掛、自定義指令來回答 |
| ③ 「不個性化」 | 不使用記憶、外掛、自定義指令來回答（可能會用到為了安全而有限的資訊） |

**必須在傳送第一條訊息之前選好。** 對話開始後就不能更改了。[^temp] 以前沒有這個選項。如果介面和本指南不同，請以介面為準。

> **臨時聊天裡也有用不了的功能。** 在2026年10月的網頁介面裡，臨時聊天的 + 選單中「生成圖片」是灰色關閉的，也沒有「深度研究」這一項。「新增照片和檔案」和「網頁搜尋」可以使用。

需要知道的事。

- **並不是"哪裡都不留"。** 可能會保留最多30天的副本。密碼這類資訊，在臨時聊天裡也不要輸入。[^temp]
- 在臨時聊天裡上傳的檔案，不會儲存到「資料庫」。[^library]
- 以後也可以把它儲存成普通對話。那樣的話，就會像普通對話一樣，遵循賬號的訓練設定。[^temp]
- 想在沒有我的資訊的情況下得到一個乾淨的回答，請選「不個性化」再開始。

<Quiz id="ch103-temporary" />

## 不讓別人開啟——鎖定的對話

和家人共用電腦，但不想讓別人看到健康諮詢的對話時，請用**鎖定的對話**。這是從2026年10月20日起陸續開放的功能。[^rn-lock]

1. 點要鎖定的對話的更多（•••）→ 「鎖定對話」。
2. 鎖定的對話會集中在「專案」 → 「鎖定的對話」裡。
3. 開啟時要輸入**4位賬號 PIN**（我自己定的數字密碼）。在手機上，也可以用 Face ID 這樣的生物識別。

賬號 PIN 在設定 → 「安全與登入（보안 및 로그인）」裡設定。[^lock] 在手機應用裡，過1分鐘會重新鎖上。也就是離開鎖定的對話1分鐘，或者應用退到後臺（在後臺）1分鐘的時候。

<!-- 需要截圖：側邊選單「專案」 → 「鎖定的對話」裡詢問 PIN 的介面（網頁版） -->

有幾個一定要知道的限制。[^lock]

- **它是遮擋板，不是保險櫃。** 並沒有另外做加密（把內容變成別人讀不了的樣子）。保留期限和訓練設定也都照舊。
- **忘記 PIN 重新設定的話，所有鎖定的對話都會被永久刪除。** 裡面的檔案也會一起刪掉，客服團隊也救不回來。請一定記住 PIN。
- 臨時聊天、已歸檔的聊天、透過分享連結建立的聊天等部分對話，無法鎖定。

<Quiz id="ch103-locked" />

## 親自動手試試

1. 點「新聊天」，問"請推薦下個月家庭旅行的三個目的地"。
2. 按放大鏡（Ctrl+K），用 `旅行` 找一下剛才的對話。
3. 把那個對話「歸檔」之後，再搜尋一次，確認它會不會出現；然後在設定 → 「已歸檔的聊天」裡「取消歸檔」。
4. 開啟「臨時聊天」，隨便問個問題，然後回到新聊天，確認側邊選單的「最近」裡沒有那個對話。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：在放大鏡（Ctrl+K）裡輸入 `讀書`，找一找前一章裡聊過的讀書會對話。

## 小結

- 聊天搜尋只在我的對話裡查詢。歸檔的對話會出現，刪除的對話不會出現。
- 歸檔可以恢復，刪除無法恢復。拿不準就先歸檔。
- 分享連結是建立那一刻的快照，拿到連結的人誰都能看，也不會過期。
- 臨時聊天不進記錄、不用於訓練，也不會生成新的記憶，但可能會留下最多30天的副本。要不要使用已儲存的記憶和指令，在開始前用「個性化」/「不個性化」來選。
- 鎖定的對話是用 PIN 遮起來的功能。重新設定 PIN，鎖定的對話就會全部被刪掉。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Archive | 歸檔 | 從列表裡收起來，但不刪除 |
| Shared Link | 分享連結 | 把對話給別人看的網址 |
| Snapshot | 快照 | 把某一瞬間的樣子原樣留下來 |
| Temporary Chat | 臨時聊天 | 不進記錄、不用於訓練、不生成新記憶的對話 |
| Personalized | 個性化 | 參考儲存的記憶和指令，按我的情況來回答的狀態 |
| Locked Chat | 鎖定的對話 | 要輸入 PIN 才能開啟的對話 |
| PIN | PIN 碼 | 用來確認本人的短數字密碼 |
| Encryption | 加密 | 把內容變成只有指定的人才能讀的樣子 |

<ChapterDone :chapter="103" />

下一章：[第4章. 檔案、照片與生成圖片](04-files-images.md)

[^search]: OpenAI 幫助，「Finding your chats, projects, and files in ChatGPT」。"press Ctrl+K on Windows or Cmd+K on macOS" / "Sidebar search finds your existing content. It does not search the web." https://help.openai.com/en/articles/10056348 （確認日期 2026-10-23）
[^delete]: OpenAI 幫助，「Deleting and archiving chats in ChatGPT」。"schedules it for permanent deletion from its systems within 30 days" / "You cannot restore a deleted chat" / "No confirmation is required." / "Archived chats remain searchable." / "The Delete all chats action cannot be undone." / "Deleting a chat does not delete files saved separately in Library." https://help.openai.com/en/articles/8809935 （確認日期 2026-10-23）
[^share]: OpenAI 幫助，「Sharing conversations and scheduled tasks in ChatGPT」。"Messages added later are not included automatically." / "Shared links do not have configurable expiration dates." / "Personal-account links are available to anyone who has the link." / "anonymous by default" / "Shared conversation links begin with https://chatgpt.com/share/." https://help.openai.com/en/articles/7925741 （確認日期 2026-10-23）
[^temp]: OpenAI 幫助，「Temporary chat in ChatGPT」。"OpenAI may keep a copy of a temporary chat for up to 30 days for safety purposes." / "Saving converts it into a regular chat" / "Choose Personalized or Unpersonalized before you send your first message." / "Neither option creates or updates memories while the chat remains temporary. You cannot change personalization after the conversation starts." https://help.openai.com/en/articles/8914046 （確認日期 2026-10-24）
[^screen-temp]: 在 ChatGPT 網頁介面（Plus 套餐，韓語）上親自確認。臨時聊天介面的「個性化」選單——"이 채팅은 메모리, 플러그인, 사용자 지정 지침을 참조할 수 있습니다" / "이 채팅에서는 메모리, 플러그인, 사용자 지정 지침을 무시합니다" （確認日期 2026-10-24）
[^library]: OpenAI 幫助，「Using Library to manage files in ChatGPT」。"files uploaded while using Temporary Chat are not saved to your account or Library". https://help.openai.com/en/articles/20001052 （確認日期 2026-10-23）
[^mobile]: OpenAI 幫助，「Troubleshooting the ChatGPT mobile app」。"A chat missing from the sidebar hasn't necessarily been deleted." https://help.openai.com/en/articles/7910461 （確認日期 2026-10-24）
[^rn-lock]: OpenAI 幫助，「ChatGPT release notes」2026-10-20 條目。"Open them with your 4-digit account PIN". https://help.openai.com/en/articles/6825453 （確認日期 2026-10-23）
[^lock]: OpenAI 幫助，「Using locked chats in ChatGPT」。"You can find your locked chats under Projects > Locked chats." / "It does not: create end-to-end encryption or a separate encrypted vault" / "Resetting your account PIN permanently deletes all locked chats" / "Access ends automatically after 1 minute away" / "The Lock chat option is unavailable for some conversation types". https://help.openai.com/en/articles/20001411 （確認日期 2026-10-23）
[^screen-menu]: 親自確認了側邊選單裡對話的「聊天操作」（•••）選單和「刪除」確認視窗。截圖用的對話在拍完之後已刪除 （確認日期 2026-10-28，Plus 賬號網頁介面）
