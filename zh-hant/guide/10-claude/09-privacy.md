# 第9章 個人資訊與安全——瞭解我的對話會傳到哪裡

> **一句話總結**：發給 Claude 的對話會不會被用於 AI 訓練，由「Help improve our AI models」這一個開關決定。
> 刪掉的對話，會在30天內從伺服器上也被刪除。匯出、刪除賬號、舉報、危機求助在哪裡，本章也一併來看。

介面以2026年10月的網頁版為準。設定介面有新舊兩種在同時使用，所以選單的名稱和位置，可能因介面而不同。

**不該放進去什麼**，對任何 AI 都一樣。已經在[第1階段第9章「不要放進去的東西」](../00-common/09-safety.md#不要放進去的東西)裡講過了。本章只看**已經放進去的對話，在 Claude 裡是怎麼處理的**。

## 決定是否用於訓練——「Help improve our AI models」

**模型訓練**（model training）是 AI 公司收集人們的對話，用來把下一代 AI 教得更好。在 Claude 裡，我的對話被用於訓練，大致有三種情況。[^training-use]

- 我**允許**把對話用於訓練的時候
- 對話被標記為**安全審查**物件的時候
- 我在回答下面傳送了**贊／踩**這樣的反饋的時候[^training-personal]

第一種可以由我自己決定。這個開關一開始是開著還是關著，我們沒能在文件裡確認到。所以請你親自開啟看一看。

### 找到開關的方法

1. 點左下角我的名字，開啟「設定（설정）」。
2. 點左側選單裡的「隱私（개인정보보호）」。[^screen]
3. 把 ② 「Help improve our AI models」開關開啟或關上。即使是韓語介面，這一行也是用英語顯示的。[^screen][^improve-name]

![「設定」→「隱私」介面。① 「位置元資料（위치 메타데이터）」、② 「Help improve our AI models」開關、③ 「匯出資料（데이터 내보내기）」、④ 「已分享的聊天（공유된 채팅）」→「管理（관리）」上標著紅色編號](../../../guide/10-claude/assets/shot-09-settings-privacy-marked.png)

這是免費套餐的介面。**紅色編號和下面列表裡的編號是同一個位置。**

- ① **「位置元資料」**：決定是否允許使用大致位置（城市、地區）。在下面的「位置是怎麼用的」裡看。[^screen]
- ② **「Help improve our AI models」**：決定是否允許把我的對話用於訓練。[^screen]
- ③ **「匯出資料」**：把我的記錄以檔案形式拿到手。在下面的「下載我的資料」裡看。[^screen]
- ④ **「已分享的聊天」→「管理」**：檢視我用連結分享出去的對話（[第3章](03-chats.md)）。[^screen]

下面還有「已分享的工件（공유된 아티팩트）」、「已上傳的檔案（업로드한 파일）」、「我的反饋（내 피드백）」、「記憶設定（메모리 설정）」，每一項都有「管理」按鈕。[^screen]

手機應用的順序也一樣。名字 → 「設定」 → 隱私 → 同一個開關。應用裡的選單名稱，可能和網頁版略有不同。[^toggle]

### 關掉之後有什麼變化

- **新對話**以後不會再用於訓練。
- **以前儲存的對話**，也會從今後的訓練中排除。
- 不過，**已經開始的訓練和已經做好的模型**裡，仍然會保留。
- 觸發了安全裝置的對話，即使關掉開關，也可能被用於與安全有關的改進。[^toggle]

### 開著的話，什麼會被用到

可能被用於訓練的是整段對話。對話裡上傳的檔案和對話設定也會一起包含進去。另一方面，透過聯結器（[第7章](07-projects-tools.md)）連線的 Google Drive 之類的地方，其中的**原始資料不會包含在內。** 不過，如果你把那些內容直接貼上到了對話窗口裡，就可能被包含進去。[^training-use]

用於訓練之前，會自動把電子郵件這樣的賬號資訊和對話分離開。[^training-personal] Anthropic 表示不出售資料，Claude 裡也沒有廣告。[^policy]

### 一開始就不想留下的對話

請用**隱身聊天**（Incognito）。從首頁右上角的幽靈形狀按鈕開啟。開始的方法在[第3章](03-chats.md)裡。

![隱身模式介面。① 上方黑色橫條左側的「隱身（시크릿）」、② 虛線輸入框、③ 說明文字、④ 右上角 ✕（退出）上標著紅色編號](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

這是免費套餐的介面。③ 說明文字是："隱身會話不會保留在記錄、記憶、搜尋裡，也不會用於 Claude 的訓練。"[^screen] 即使開關開著，隱身聊天也不會用於訓練。[^training-use] 不過，雖然不會留在記錄裡，預設仍會儲存30天。[^incognito] 要結束的話，請點 ④ ✕。

**贊／踩不要隨手點。** 一旦傳送了反饋，那整段對話最多會被儲存5年。也可能被用於訓練。[^feedback] 如果是聊過敏感內容的對話，最好不要傳送反饋，而是選別的辦法。

<Quiz id="ch209-training" />

## 會留多久——儲存期限

對話會留多久，因情況而異。[^retention]

| 情況 | 保留多久 |
|---|---|
| 我刪除的對話 | 記錄裡立刻消失，伺服器上在30天內刪除 |
| 允許用於訓練的對話 | 去掉標識後的形態，最多5年 |
| 傳送了贊／踩的對話 | 最多5年 |
| 因違反使用規則被標記的對話 | 對話內容最多2年，安全評分最多7年 |

看這張表時，有三點要知道。

- 5年的儲存期，只適用於**開啟開關之後**新開始，或重新接著聊的對話。
- 刪除的對話，以後不會再用於訓練。
- 法律有規定的情況，或需要解決糾紛的時候，可能會保留更久。[^retention]

不想留下的對話，請刪掉。刪除的對話，以後不會再用於訓練。不過，從那段對話裡生成的記憶還會留著，所以請到[第5章](05-memory.md)裡另外刪除。[^memory] 刪除對話的方法，在[第3章](03-chats.md)裡看過了。

<Quiz id="ch209-retention" />

## 誰會看到我的對話

預設情況下，**Anthropic 的員工看不到我的對話。** 例外有兩種。一是我把對話作為反饋傳送的時候，二是需要審查是否遵守使用規則的時候。審查時，也只是指定的安全團隊中的一部分人，按需要的範圍去看。資料在傳輸途中和儲存之後，都會被自動加密（變成別人讀不了的樣子）。[^protect]

允許用於訓練的對話，也只有負責訓練工作的少數人才能看到。即便如此，身份證號、銀行卡號、健康記錄、密碼這樣特別敏感的資訊，也請謹慎放入。[^sensitive]

### 位置是怎麼用的

像"附近的好餐廳"這樣，用網頁搜尋去找附近的結果時，Claude 可能會透過網際網路連線地址（IP 地址），使用城市、地區這種大致的位置。在這個介面裡，「隱私」的 ① 「位置元資料」開關決定這件事。[^screen] 在手機應用裡，位置許可權在手機設定中管理。不過，為了安全和防止濫用，推測國家、地區這一級別的位置，是關不掉的。[^location]

### 看到不認識的裝置時

在「設定」→「賬號（계정）」的「活躍會話（활성 세션）」（視介面不同，也叫「已登入的位置（로그인된 위치）」）裡，可以看到登入過我賬號的裝置。表裡會顯示裝置、位置、建立時間、更新時間。[^screen] 看到不認識的裝置，請點旁邊的「⋮」→「終止（종료）」，馬上斷開它。[^sessions]

![「設定」→「賬號」介面。① 「姓名（성명）」和「Claude 該怎麼稱呼你？（Claude가 어떻게 불러드릴까요?）」、② 「Claude 指令（Claude 지침）」、③ 「在所有裝置上退出登入（모든 기기에서 로그아웃）」、④ 「刪除賬號（계정 삭제）」上標著紅色編號](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

這是免費套餐的介面。「活躍會話」表在圖的下方，所以圖裡沒有顯示。[^screen] 如果不清楚是哪臺裝置，也可以用 ③ **「在所有裝置上退出登入」**一次性全部斷開。[^screen] ① 名字和 ② 指令，在[第5章](05-memory.md)裡看。Claude 沒有專用的密碼（[第1章](01-getting-started.md)），所以請檢查登入用的電子郵件或 Google 賬號的安全。詳細方法在[第3章](03-chats.md)裡。

<Quiz id="ch209-access" />

## 下載我的資料

**資料匯出**（export）是把到目前為止的對話記錄和賬號資訊以檔案形式拿到手的功能。在刪除賬號之前，用它來做備份。Free、Pro、Max 的個人使用者都可以用。[^export]

1. 在網頁版或電腦應用裡，開啟「設定」→「隱私」。[^screen]
2. 點上圖中 ③ 的「匯出資料」按鈕。
3. 準備好之後，下載連結會發到賬號的電子郵箱。
4. 在登入狀態下點連結下載。

有幾點要知道。

- **手機應用裡不能匯出。** 請用網頁版或電腦應用。
- 連結在收到後**過24小時就會失效**。錯過了的話，重新申請就行。
- 匯出的資料，**不能匯入到別的個人賬號裡。**[^export]

> 下載下來的檔案裡，裝著我所有的對話。不要下載到公用電腦上，也不要傳到和別人共用的資料夾裡。

公司套餐（Team、Enterprise），要管理員允許，才能匯出本人的資料。[^export]

<Quiz id="ch209-export" />

## 刪除賬號

刪除賬號是**永久性的**。對話、專案、儲存的資料都無法再進入，賬號也無法恢復。如果有想留下的對話，請先做匯出。[^delete]

**如果你在用 Pro、Max，先要取消訂閱。** 取消訂閱，等到目前已付費的期限結束之後再刪除。[^delete] 取消訂閱在[第1章](01-getting-started.md)裡看過了。

各裝置上的刪除順序是這樣的。[^delete]

- **網頁**：左下角名字 →「設定」→「賬號」→ 上圖的 ④ 「刪除賬號」[^screen]
- **iPhone**：「設定」→ 賬號項裡的「個人資料（프로필）」→「刪除賬號」→「刪除（삭제）」
- **安卓**：左上角選單 → 左下角的首字母 →「個人資料」→「賬號操作（계정 작업）」裡的「刪除賬號」→「我同意（동의합니다）」（I Understand）

如果用同一個郵箱建了多個賬號，聯絡客服時必須明確說明要刪除哪個賬號。[^delete] 如果你是在 Slack 之類的其他服務裡使用 Claude 的，就要向那個服務提出刪除請求。[^third-party]

<Quiz id="ch209-delete" />

## AI 出錯的時候——錯誤的回答和假的"已傳送"

Claude 也可能給出似是而非卻錯誤的回答。這叫做**幻覺**（hallucination）。核對的習慣，在[第1階段第9章](../00-common/09-safety.md#_1-似是而非的謊話——核對幻覺)學過了。在 Claude 裡，特別要知道的有三點。[^wrong]

- 看起來很權威的引文，也可能是**毫無根據編出來的。**
- **不要把 Claude 當作唯一的正確答案來源。** 越是重要的建議，越要仔細核對。
- 透過網頁搜尋得到的回答，請**親自開啟 Claude 標註的出處**看（[第6章](06-search.md)）。

### "郵件已經發送了"這句話

Claude 說"郵件已經發送了""檔案已經傳出去了"，實際上可能並沒有做。沒有連線的工具，Claude 是用不了的。可是它有時還是會說自己做了。[^fake]

所以請這樣問問自己：做這件事的工具，我連線了嗎？在我的已傳送郵件裡真的有嗎？確認不了的話，一開始就只請它寫草稿，會更安全。

```
請寫一封郵件，通知組員明天的會議改到下午3點。
不要傳送，請只給我看標題和正文，我複製後自己發。
```

這樣一來，要發什麼，最後由我來確認。

<Quiz id="ch209-mistakes" />

## 安全裝置、舉報、申訴

Claude 裡有過濾有害內容的裝置。有找出有害內容的模型，有能攔住回答的過濾器，對反覆違反規則的人，還會暫時加上更強的過濾器。幫助文件自己也說明，這些裝置**並不完美**。意思是，它可能攔住正常的提問，也可能漏掉該攔的內容。[^safety]

### 收到警告或賬號被停用的時候

輸入被認為違反使用規則時，會收到警告。如果反覆違反規則，或者在不支援的地區註冊，賬號可能會被停用。[^appeal]

認為被錯誤停用的話，可以提出申訴。

1. 用被停用的賬號，原樣登入 claude.ai。**登入之後才能看到表單。**
2. 在幫助文件裡點開表單的「提交申訴（이의 제기 제출）」（Submit an appeal）連結，填寫申訴表單。

被停用的 Free、Pro、Max 賬號，也可以登入後匯出資料或刪除賬號。不過，能匯出的範圍可能會縮小。[^appeal]

### 看到有問題的內容時

在別人分享的對話裡看到有問題的內容，請點那個介面上的「舉報（신고）」按鈕。也有另外準備的舉報表單。著作權、商標問題要走另外的流程。如果總是提交沒有依據的舉報，舉報的處理可能會被中止。在此之前會先收到警告。[^report]

<Quiz id="ch209-safeguards" />

## 難受的時候獲得幫助

**如果現在身體受傷了，或處在危險的情況裡，請不要找 Claude，而是直接聯絡急救服務。** 去最近的急診室也可以。幫助文件舉的例子是美國、加拿大的 911，歐洲許多國家的 112。[^crisis]

如果對話涉及內心的痛苦或自殘這樣的話題，介面上可能會彈出**提供諮詢熱線和安全計劃的橫幅**。這個橫幅不是 Claude 彈出的，而是另外的檢測裝置彈出的。[^crisis]

- 要不要使用橫幅，由我自己決定。用或不用，**賬號都不會有任何不利後果。**
- 橫幅彈出一次後，約2小時內不會再彈出。
- 隨時都可以在 **claude.findahelpline.com** 找到諮詢機構。它會按我所在的位置，挑選並顯示合適的機構。
- Anthropic **不會**把我的對話傳送給諮詢機構。[^crisis]

橫幅裡，可能還會同時出現非營利組織 Koko 的**安全計劃**工具。這是一個一起制定難受時拿出來看的簡短計劃的工具。大約需要5分鐘，免費，也不需要透露姓名。[^crisis]

如果一個人扛不住，先從對某個人說出來開始，也沒關係。

<Quiz id="ch209-crisis" />

## 親自動手試試

**1. 確認我的訓練設定**

開啟「設定」→「隱私」，看看 ② 「Help improve our AI models」是不是開著。改成你想要的狀態之後，如果有手機應用，也在應用裡確認是同一個值。

**2. 看看登入過的裝置**

開啟「設定」→「賬號」往下拉，看「活躍會話」（或「已登入的位置」）。都是我認識的裝置嗎？有不認識的，就馬上終止。

**3. 請 Claude 給我一份我的檢查清單**

```
我在用個人賬號使用 Claude。
我想確認我的對話是否被用於訓練，並整理掉不需要的對話。
請把需要我在設定介面裡親自確認的專案，做成檢查清單（☐）。
不確定的選單名稱不要編造，請寫"在介面上確認"。
```

把收到的清單和本章對照一下。如果選單名稱不同，以我介面上看到的名稱為準。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：確認「設定」→「隱私」裡的「Help improve our AI models」是什麼狀態。如果要把真實的聚會資料上傳到「讀書會」專案，想一想這個設定要怎麼放。

## 小結

- 是否用於訓練，在「設定」→「隱私」→「Help improve our AI models」裡決定。一開始的值，要親自開啟確認。
- 關掉之後，已經做好的模型裡仍會保留，觸發安全裝置的對話也可能被用到。
- 隱身聊天不會用於訓練。傳送了贊／踩，那段對話最多會保留5年。
- 刪除的對話會在30天內從伺服器上也被刪除。允許用於訓練的對話最多可能保留5年。
- 員工預設看不到對話。不認識的裝置，在「活躍會話」裡斷開。
- 匯出只能在網頁版、電腦應用裡做，連結24小時後失效。刪除賬號無法撤銷，付費訂閱要先取消。
- "已傳送"這句話要親自確認。被錯誤停用的話，登入後提出申訴。
- 遇到危險的情況，先聯絡急救服務。諮詢機構到 claude.findahelpline.com 去找。

## 術語解釋

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Model training | 模型訓練 | 用收集到的對話來教下一代 AI |
| Model improvement | 模型改進 | 決定是否允許把我的對話用於訓練的設定 |
| Incognito | 隱身聊天 | 不進記錄、也不用於訓練的對話 |
| Feedback | 反饋 | 用贊／踩告訴它回答好不好 |
| Retention | 保留 | 資料不刪除、留存的期限 |
| Encryption | 加密 | 把資料變成別人讀不了的樣子 |
| IP address | IP 地址 | 接入網際網路的裝置的地址。可以得知大致的地區 |
| Export | 匯出 | 把我的全部記錄以檔案形式拿到手 |
| Session | 會話 | 在一臺裝置上保持登入的狀態 |
| Hallucination | 幻覺 | AI 編造似是而非的錯誤說法 |
| Appeal | 申訴 | 請求重新審查被錯誤停用的情況 |
| Helpline | 諮詢熱線 | 難受的時候，可以和受過訓練的人聊一聊的地方 |

<ChapterDone :chapter="209" />

下一章：[第10章. 語音與手機](10-voice-mobile.md)

---

[^screen]: 在 Claude 網頁介面（免費套餐，韓語）上親自確認。"Help improve our AI models — Allow the use of your chats and coding sessions to train and improve Anthropic AI models." / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." （確認日期 2026-10-26）
[^training-use]: Anthropic 隱私中心，「Is my data used for model training?」。"You choose to allow us to use your chats and coding sessions to improve Claude, learn more here" / "It does not include raw content from connectors (e.g. Google Drive), including remote and local MCP servers, though data may be included if it’s directly copied into your conversation with Claude." / "Your Incognito chats are not used to improve Claude, even if you have enabled Model Improvement in your Privacy Settings." https://privacy.claude.com/en/articles/10023580 （確認日期 2026-10-26）
[^training-personal]: Anthropic 隱私中心，「How Do You Use Personal Data in Model Training?」。"You’ve explicitly provided materials to us (e.g.via our thumbs up/down feedback button), or" / "we will automatically de-link them from your user ID (e.g. email address) before it’s used by Anthropic." https://privacy.claude.com/en/articles/10023555 （確認日期 2026-10-26）
[^toggle]: Anthropic 隱私中心，「How do I change my model improvement privacy settings?」。"Under Help Improve our AI models, click the button to toggle it off/on" / "we will stop using your previously stored chats and coding sessions in future model training runs." / "Your data will still be included in model training that has already started and in models that have already been trained" / "If our safety classifiers flag your conversations, they may still be used to improve our internal trust and safety models" https://privacy.claude.com/en/articles/12109829 （確認日期 2026-10-26）
[^policy]: Anthropic 隱私中心，「Updates to our Privacy Policy」。"We don’t sell your data, Claude remains ad-free, and you can control whether your conversations are used to improve Anthropic’s AI models." https://privacy.claude.com/en/articles/10301952 （確認日期 2026-10-26）
[^feedback]: Anthropic 隱私中心，「Is my data used for model training?」。"we will store the entire related conversation, including any content, custom styles or conversation preferences, in our secured back-end for up to 5 years." https://privacy.claude.com/en/articles/10023580 （確認日期 2026-10-26）
[^incognito]: Anthropic 幫助，「Use incognito chats」。"While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." https://support.claude.com/en/articles/12260368 （確認日期 2026-10-26）
[^memory]: Anthropic 幫助，「Use Claude’s chat search and memory to build on previous context」。"When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 （確認日期 2026-10-26）
[^retention]: Anthropic 隱私中心，「How long do you store my data?」。"Deleted from our back-end storage systems within 30 days" / "we may retain your data in a de-identified format for up to 5 years in our model training pipelines." / "This retention period only applies to new or resumed chats after the model training setting has been enabled." / "Additionally, if you delete a chat from your chat history, it will not be used to train future models." / "We retain inputs and outputs for up to 2 years and trust and safety classification scores for up to 7 years" / "In all cases, we may retain chats and coding sessions as required by law, to resolve disputes, or as necessary to combat violations of our Usage Policy." https://privacy.claude.com/en/articles/10023548 （確認日期 2026-10-26）
[^protect]: Anthropic 隱私中心，「How does Anthropic protect the personal data of Claude users?」。"Limited Access: By default, Anthropic employees cannot access your conversations unless:" / "Encryption: Your data is automatically encrypted both while in transit, and stored (at rest)." https://privacy.claude.com/en/articles/10458704 （確認日期 2026-10-26）
[^sensitive]: Anthropic 幫助，「I would like to input sensitive data into my chats with Claude. Who can view my conversations?」。"Access is limited to a small number of personnel involved in model training." / "we also recommend being thoughtful about sharing highly sensitive personal details such as:" https://support.claude.com/en/articles/8325621 （確認日期 2026-10-26）
[^location]: Anthropic 隱私中心，「Does Claude use my location?」。"Claude may use your IP address to determine coarse-grained location (city/region level)." / "Claude's access to location data for non-web surfaces (e.g. the mobile app and browser extension) are managed at the device level." / "This use is necessary to protect our users and business and cannot be toggled off." https://privacy.claude.com/en/articles/11186740 （確認日期 2026-10-26）
[^sessions]: Anthropic 幫助，「Managing your active sessions」。"Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 （確認日期 2026-10-26）
[^export]: Anthropic 幫助，「Export your Claude data」。"Data exports are available to individual Claude users on Free, Pro, and Max plans." / "It's not possible to run an export from Claude for iOS or Android." / "You must be signed in to your account to download your data using this link." / "The download link will expire 24 hours after delivery." / "Exported data can't be imported into another personal Claude account, and we don't support migrating data between personal accounts." / "you can export your own data once an organization Owner or Primary Owner turn this on." https://support.claude.com/en/articles/9450526 （確認日期 2026-10-26）
[^delete]: Anthropic 幫助，「Delete your Claude account」。"You'll lose access to your conversations, projects, and other saved data, and you can't recover the account afterward." / "Wait until the end of your current subscription period." / "If you have multiple accounts associated with the same email address, you'll need to specify which accounts you want to delete when you contact us." https://support.claude.com/en/articles/9028421 （確認日期 2026-10-26）
[^third-party]: Anthropic 隱私中心，「Deleting Claude accounts」。"you will need to request account deletion through that third party service provider." https://privacy.claude.com/en/articles/10023660 （確認日期 2026-10-26）
[^wrong]: Anthropic 幫助，「Claude is providing incorrect or misleading responses. What’s going on?」。"Claude can display quotes that may look authoritative or sound convincing, but are not grounded in fact." / "Users should not rely on Claude as a singular source of truth and should carefully scrutinize any high-stakes advice given by Claude." / "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 （確認日期 2026-10-26）
[^fake]: Anthropic 幫助，「Claude is producing links that don’t work and falsely claiming that it has sent emails or produced external documents. What’s going on?」。"Even if it claims otherwise, Claude does not have access to other tools or software that are not explicitly integrated, including email, word processors, or file transfers." https://support.claude.com/en/articles/8241188 （確認日期 2026-10-26）
[^safety]: Anthropic 幫助，「Our Approach to User Safety」。"We may temporarily apply enhanced safety filters to users who repeatedly violate our policies" / "These features are not failsafe, and we may make mistakes through false positives or false negatives." https://support.claude.com/en/articles/8106465 （確認日期 2026-10-26）
[^appeal]: Anthropic 幫助，「Safeguards warnings and appeals」。"we warn users if we believe their prompts are violating our Usage Policy." / "Account creation from an unsupported location" / "If you feel your account has been wrongly suspended or terminated, please go to claude.ai, log in with your banned account, and fill out the appeal form linked below." / "Important: You must be logged in to access the appeal form." / "you can still log in at claude.ai to export your data or delete your account." https://support.claude.com/en/articles/8241253 （確認日期 2026-10-26）
[^report]: Anthropic 幫助，「Report, block, and remove content from Claude」。"Use the “report” button on the shared content." / "If you believe content violates Anthropic’s usage policies or local laws and should be removed or restricted, you can report it through this form." / "We will provide a warning before suspension." https://support.claude.com/en/articles/10684638 （確認日期 2026-10-26）
[^crisis]: Anthropic 幫助，「Crisis Helpline Support in Claude」。"please contact emergency services (such as 911 in the US and Canada, or 112 in much of Europe) or go to your nearest emergency room." / "This banner is surfaced by a separate detection system, not from Claude directly." / "there are no consequences for your account based on your decision to access resources." / "After you see the banner, it won’t appear again for about two hours" / "The resources shown are selected based on your location to provide relevant, local support options." / "Anthropic doesn’t send your conversations to helplines or to Koko." / "It takes about five minutes. You’re guided one step at a time, and you decide what goes in it." https://support.claude.com/en/articles/13171706 （確認日期 2026-10-26）
[^improve-name]: 韓語幫助裡把它稱為「AI 모델 개선 지원」（幫助改進 AI 模型）。
