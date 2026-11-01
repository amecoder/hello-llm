# 第1章 開始使用 — 試用、註冊、選擇套餐

> **一句話總結**：ChatGPT 不用註冊就能直接試用。想儲存對話、上傳檔案，就免費註冊；
> 只有免費版不夠用時，才需要考慮付費套餐。

介面以2026年10月的網頁版（Plus 套餐）為準。免費套餐或手機 App 的選單位置可能略有不同。

## 不登入先試試

開啟 ChatGPT 的網址（chatgpt.com）。不註冊也可以直接在中間的輸入框「向 ChatGPT 提問（ChatGPT에게 물어보세요）」裡提問。
韓國屬於可以使用 ChatGPT 的**支援國家**（正式提供該服務的國家）。[^countries]

![登入前的首頁。紅色編號 ① 輸入框，② 登入和註冊按鈕，③ 側邊選單。請看中間「今天想做點什麼？（오늘은 무엇을 해볼까요?）」下面的輸入框、右上角的「登入（로그인）」「免費註冊（무료로 회원가입）」按鈕，以及左邊側邊選單裡的「新聊天（새 채팅）」「圖片（이미지）」「外掛（플러그인）」「檢視套餐與價格（플랜 및 가격 보기）」等](../../../guide/11-chatgpt/assets/shot-00-logged-out-marked.png)

① 直接在中間的輸入框裡提問；② 透過右上角的「登入（로그인）」「免費註冊（무료로 회원가입）」進入賬號；③ 左邊的側邊選單裡有「新聊天（새 채팅）」「檢視套餐與價格（플랜 및 가격 보기）」這樣的選單。

不登入使用時，有兩個限制。[^home]

- **一次只能進行1個對話。**
- **不會儲存記錄。** 關掉視窗後，就再也找不回聊過的內容。

你可以先不登入試用，感受一下是什麼樣的。打算長期用的話，註冊會更好。如果是第一次用，可以這樣問：

```
你能幫我做哪些事？請舉五個上班族馬上就能用上的例子。
```

::: details 得到的回答大致是這樣（示例 — 點選展開）
這是本指南製作的示例。實際的回答會因服務和每次情況而不同。

> 我挑了五件上班族馬上就能用上的事。
>
> 1. **潤色郵件**：把你寫的郵件貼進來，我幫你改得更禮貌。
> 2. **總結會議紀要**：把很長的筆記整理成五行摘要和待辦清單。
> 3. **搭報告框架**：你告訴我要點，我先幫你列出目錄。
> 4. **問 Excel 函式**：說出你想做的計算，我告訴你該用哪個函式。
> 5. **想點子**：活動名稱或發言順序，我可以給你幾個方案。
>
> 如果有想試的，請告訴我。

**確認一下有沒有答好**：正好是五個嗎？每一個都適合馬上用到我的工作上嗎？如果有喜歡的，就用那個編號接著繼續請它幫忙。

:::

<Quiz id="ch101-logged-out" />

## 註冊並登入

如果是第一次用，點右上角的「免費註冊（무료로 회원가입）」（上圖 ②）。已經有賬號的話，點「登入（로그인）」就行。
進入的方式有兩種。[^login]

| 方式 | 說明 |
|---|---|
| 郵箱和密碼 | 用你自己的郵箱地址建立賬號 |
| **社交登入**（用其他公司的賬號代為登入） | 用 Google、Microsoft、Apple 賬號進入 |

![在未登入的介面點「免費註冊（무료로 회원가입）」後彈出的「登入或註冊（로그인 또는 회원가입）」視窗。有用 Google 賬號、Apple 賬號、手機號碼繼續的按鈕，以及郵箱位址列](../../../guide/11-chatgpt/assets/shot-23-signup.png)

*這是2026-10-28的網頁介面。這個窗口裡沒有看到 Microsoft 按鈕，而是「使用手機號碼繼續（휴대 전화 번호로 계속하기）」。*[^screen-signup]

有四點需要注意。

1. **郵箱相同就是同一個賬號。** 即使一開始是用郵箱註冊的，之後用同一地址的 Google 賬號登入，進入的也是同一個賬號。[^login]
2. **小心 Apple 的“隱藏郵件地址”。** 用 Apple 註冊時，如果選了隱藏真實地址的假地址，之後只能用同一個 Apple ID 進入原來的賬號。用真實郵箱登入，會開啟**另一個新賬號**。[^login]
3. **個人使用請用個人郵箱註冊。** 用公司郵箱註冊的話，離職時可能就進不去賬號了。[^home]
4. **賬號不會自動合併。** 如果用另一個郵箱進入、生成了新賬號，對話記錄和訂閱也是各管各的。覺得“我訂閱了卻顯示免費版”“對話不見了”時，請先看看是不是用註冊時的賬號登入的。接收付款收據的郵箱，也可能和賬號郵箱不一樣。[^cantlogin]

<Quiz id="ch101-login" />

## 套餐一覽

ChatGPT 從免費到公司用，有多種**套餐**（plan，按付費多少，可用的功能和用量不同的使用方式）。[^pricing]

| 套餐 | 適合誰 | 韓國價格（每月） |
|---|---|---|
| Free（免費） | 第一次試用的人、偶爾使用的人 | ₩0 |
| Go | 免費版額度經常不夠的人 | ₩13,000 |
| Plus | 每天使用、需要深入思考的回答的人 | ₩29,000 |
| Pro | 用得非常多的人（分為3檔） | ₩159,000起 |
| Business · Enterprise · Edu | 以公司、機構、學校為單位使用的地方 | 另議 |

價格是在韓國開啟 OpenAI 價格頁面時顯示的數值，**經常變動。** 付款前請到[價格頁面](https://openai.com/chatgpt/pricing)親自確認。[^pricing]
Business 是以前叫「Team」的公司用套餐，在2025年8月29日改了名字。[^business]

### 各套餐有什麼不同

比起數字，瞭解**“有什麼不同”** 會更容易選擇。

| 不同之處 | 免費（Free） | 付費 |
|---|---|---|
| **文字對話** | 日常的文字對話沒有次數限制[^free] | 各功能的額度更寬裕 |
| **廣告** | Free 和 Go 裡，回答下方可能會出現廣告 | Plus 以上沒有廣告 |
| **選擇思考深度** | 開啟「思考（생각하기）」，讓它想得更深 | Plus 以上可以選擇「推理級別（추론 수준）」（[第2章](02-screen-tour.md)） |
| **上傳檔案** | 每天最多3個（[第4章](04-files-images.md)） | 可以上傳多得多 |
| **Work**（交付長時間任務的模式） | 網頁和手機上不能用 | 可以使用（[第7章](07-projects-plugins.md)） |

免費版的“沒有次數限制”只適用於日常的文字對話。它有防止濫用的機制。檔案、圖片、語音這類功能另有額度。[^free]

如果你擔心廣告，請看官方說明。[^ads] 據說廣告**不會影響 ChatGPT 回答的內容**。廣告主看不到我的對話。
**臨時聊天**（不留在記錄裡的對話，[第3章](03-chats.md)）裡不會出現廣告。廣告於2026年2月在美國開始測試，正在逐步擴大到一些國家。
韓國是否也會出現，在官方說明裡沒有確認到。

<Quiz id="ch101-plans" />

## 改成付費之前要知道的事

不需要一開始就付費。**先用免費版，經常碰到額度上限時再升級**是最穩妥的。付款前，請務必瞭解下面這些。

- **只能按月付費。** Go、Plus、Pro 都沒有一次付1年的年付方式。[^go]
- **刪除 App 後訂閱仍會繼續。** 即使在手機上刪除 ChatGPT App，扣費也不會停止。不想再用的話，必須自己取消訂閱。[^pro]
- **取消要在開始訂閱的地方進行。** 在網頁上付的款，就在網頁上取消；透過 App Store 或 Google Play 付的款，就在那個商店取消。在 ChatGPT 手機 App 裡不能取消。必須在下次扣款日**至少24小時前**取消，下個月的費用才不會被扣。[^promo]
- **免費試用結束後會自動扣費。** 透過邀請朋友或活動獲得的免費試用、折扣期結束後，會用你登記的付款方式繼續付費訂閱。如果不打算繼續用，請在期限結束前取消。折扣碼只能用一次，不能疊加使用。[^trial]
- **付了款卻顯示免費版，請不要再次付款。** 先看看是不是用付款的那個賬號登入的。如果是手機 App，請在設定裡點恢復購買（Restore purchases）。這個選單的韓語介面名稱沒有確認到。[^plus]
- **Go 不能使用舊版模型。** 舊版模型（上一代 AI 模型）不包含在 Go 裡，語音對話的額度也和免費版一樣。[^go]

還有一種叫**積分**（Credit，和套餐分開、提前買好的額外用量）的東西。設定 →「用量（사용량）」頁面裡有這樣的提示：“達到使用上限後仍想繼續使用 Work 和 Codex，請購買積分或開啟自動充值。”[^screen-usage]
買了積分，套餐並不會改變。**從購買之日起12個月**後就會失效。除非有支付錯誤、未經授權使用這類例外，原則上**不能退款。** 如果開啟「自動充值（자동 충전）」，當餘額低於你設定的標準時，會自動用登記的預設付款方式付款。[^credits]
如果只是普通對話，不需要積分。

如果不知道哪個套餐合適，可以把你的使用習慣告訴 ChatGPT，問問它。不過，價格和條件請以價格頁面為準，而不是 AI 的回答（[第1階段第9章](../00-common/09-safety.md)）。

```
我每天用 ChatGPT 3~4次，主要用來潤色公司郵件和總結會議紀要。
偶爾也會上傳 PDF 檔案來做總結。我想先免費用著，請告訴我在什麼時候需要付費，
並給出3條我自己可以判斷的標準。
```

<Quiz id="ch101-subscribe" />

## 手機和電腦 App

除了網頁瀏覽器，ChatGPT 還可以用手機 App 和電腦 App。不需要在每臺裝置上新建賬號。**用同一個賬號登入**就行。在其他裝置上聊過的對話能不能看到，請在下面「親自試一試」的第4條裡確認。

- **手機 App**：在上方的下拉選單（點一下展開的列表）裡選擇 Chat 或 Work。[^work]
- **電腦 App**：在一個新 App 裡同時使用 Chat、Work、Codex。舊 App 可能以「ChatGPT Classic」的名字保留著。[^desktop] Mac 版 App 需要 macOS 14 以上。[^macos]
- **KakaoTalk**：在韓國，也可以在 KakaoTalk 裡使用 ChatGPT（見下面的說明）。[^kakao]

手機 App 在2026年3月簡化了側邊選單。圖片之類的功能被移到了聊天列表上方的橫條裡。
之後可能又有變化。如果和本指南的網頁介面位置不同，請找名稱相近的按鈕。[^rn]

下載 App 時，請在應用商店搜尋“ChatGPT”，然後確認**開發者名稱**。iPhone（App Store）上應顯示「OpenAI OpCo, LLC」，安卓（Google Play）上應顯示「OpenAI」。因為名字相似的其他 App 很多。[^appfaq]

**KakaoTalk 裡的 ChatGPT** 是 Kakao 和 OpenAI 共同打造的服務。**只在韓國**可用。不需要另外安裝 App。點 KakaoTalk「聊天」標籤頁最上面的「ChatGPT」就能開始。用韓國手機號註冊的最新版 KakaoTalk 裡會顯示。[^kakaofaq]

- 如果已經有 ChatGPT 賬號，請把它連線起來。在 KakaoTalk 裡聊過的對話記錄，在 ChatGPT 裡也能看到。沒有賬號的話，可以用 Kakao 賬號註冊。在 KakaoTalk 裡註冊的賬號，在 ChatGPT App 裡也可以直接使用。
- 對 OpenAI 來說，它是**第三方服務**（由其他公司參與運營的服務）。所以請把 OpenAI 和 Kakao 的條款、隱私說明**兩份都**讀一讀。[^kakaofaq]

<!-- 需要截圖：手機 App 首頁（Chat/Work 下拉選單和橫條），安卓或 iOS -->

<Quiz id="ch101-apps" />

## 用不了時先做這些

回答可能會卡住，可能會彈出錯誤提示，也可能反覆出現“確認你是真人”的驗證。遇到這些情況，請按下面的順序試試。這是把 OpenAI 幫助中心的錯誤排查說明整理成了適合新手的版本。[^errors]

1. **先看看是不是服務出了故障。** 如果 status.openai.com（OpenAI 服務狀態頁面）上有故障通報，等著就行。人多的時段，本來也會變慢。[^slow]
2. **等30~60秒。** 有時回答會結束得比較晚。如果還是卡住不動、而且對話已經很長，就在**新聊天**裡重新問一次。
3. 用**隱身視窗**（incognito，不留瀏覽記錄、不帶擴充套件程式開啟的瀏覽器視窗）開啟試試。換一個瀏覽器也可以。
4. 暫時關掉 **VPN**（改變上網地址的程式）。偶爾彈出“確認你是真人”的驗證（**驗證碼**，CAPTCHA）是正常的。如果每次都彈出，原因可能是 VPN 或瀏覽器擴充套件程式。[^captcha]
5. **如果只有在公司 Wi-Fi 下用不了**，換成手機流量試試。那時能用的話，就是公司網路的問題。請問問資訊部門的同事。[^network]
6. 如果看到**達到額度上限的提示**或可以再次使用的時間，請等到那個時間。也可以選其他功能。[^feature]

把 App 刪了再重灌，**使用額度也不會重置。**[^mobile] 如果還是不行，請聯絡 help.openai.com 的客服。把錯誤提示原樣寫下來發過去就行。截圖傳送時，請注意不要露出密碼或其他個人資訊。

<Quiz id="ch101-trouble" />

## 親自試一試

1. 不登入，進入 chatgpt.com，問一句“你能幫我做哪些事？”。
2. 把瀏覽器完全關掉再重新開啟，確認剛才的對話還在不在（登入前的對話，只有在同一個瀏覽器裡、此刻還在訪問期間才能看到）。[^home]
3. 用個人郵箱註冊，再問一次同樣的問題，然後看看左邊側邊選單的「最近（최근）」裡有沒有出現這段對話。
4. 在手機上安裝 App，用同一個賬號登入，確認能不能看到在電腦上聊過的對話。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：保持登入狀態，問：“我是社群讀書會的總務。請把籌備下個月聚會要做的事列成清單。”把得到的清單，和練習結束後我實際做的事對比一下。

## 小結

- 不登入也能用，但一次只能有一個對話，也不會留下記錄。
- 註冊可以用郵箱，或 Google、Microsoft、Apple 賬號。郵箱相同就是同一個賬號。
- 各套餐在有無廣告、選擇思考深度、檔案額度、能否使用 Work 上有所不同。價格請到價格頁面確認。
- 刪除 App 後訂閱仍會繼續。不想再用的話，要在開始訂閱的地方（網頁、應用商店、Google Play）於扣款日24小時前取消。免費試用結束後也會自動扣費。
- 下載 App 時，要確認開發者名稱（App Store「OpenAI OpCo, LLC」，Google Play「OpenAI」）。KakaoTalk 裡的 ChatGPT 只在韓國可用。
- 用不了時，依次試：服務狀態 → 等待或開新聊天 → 隱身視窗 → 關掉 VPN → 換一個網路。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Supported Country | 支援國家 | 正式提供服務的國家 |
| Social Login | 社交登入 | 用 Google、Apple 這類其他公司的賬號代為登入的方式 |
| Plan | 套餐 | 按付費多少，功能和用量不同的使用方式 |
| Subscription | 訂閱 | 每月自動扣費的使用合約 |
| Legacy Model | 舊版模型 | 新模型推出後仍保留的上一代 AI 模型 |
| Temporary Chat | 臨時聊天 | 不留在記錄裡的對話（[第3章](03-chats.md)） |
| Credit | 積分 | 套餐額度用完後，為了繼續使用 Work 這類功能而另外買下的用量 |
| CAPTCHA | 驗證碼 | 為了確認你是真人而出的簡單小測試 |
| Incognito Window | 隱身視窗 | 不留瀏覽記錄、不帶擴充套件程式開啟的瀏覽器視窗 |
| VPN | 虛擬專用網路 | 改變上網地址，讓你看起來像從別處訪問的程式 |

<ChapterDone :chapter="101" />

下一章：[第2章. 熟悉介面](02-screen-tour.md)

[^countries]: OpenAI 幫助中心，「ChatGPT Supported Countries」。列表中包含 "South Korea"。https://help.openai.com/en/articles/7947663（確認日期 2026-10-23）
[^home]: OpenAI 幫助中心，「The ChatGPT home page」。"ChatGPT can be used without an account in supported countries" / "only have one conversation at a time" / "Chats will remain accessible only for the current session on the same browser." / "For personal use, we recommend an account with an email address you personally own"。https://help.openai.com/en/articles/9125172（確認日期 2026-10-23）
[^login]: OpenAI 幫助中心，「Changing your account sign-in method」。"log in using a social login method (Google, Microsoft, or Apple) as long as the email address matches" / "using your personal email… will open a different account"。https://help.openai.com/en/articles/4936824（確認日期 2026-10-23）
[^pricing]: OpenAI，「套餐與價格」（在韓國開啟所見）。"₩13,000 /월"，"₩29,000 /월"，"From ₩159,000 /월"。顯示的貨幣會隨訪問的國家而變化。https://openai.com/chatgpt/pricing（確認日期 2026-10-23）
[^business]: OpenAI 幫助中心，「ChatGPT Business overview」。"ChatGPT Team was renamed to ChatGPT Business on August 29, 2025." https://help.openai.com/en/articles/8792828（確認日期 2026-10-23）
[^ads]: OpenAI 幫助中心，「Ads in ChatGPT」。"Ads may appear for users on the Free and Go plans." / "Ads do not influence ChatGPT's answers." / "Temporary Chats will not show ads." / "Ad testing started in the United States on February 9, 2026." https://help.openai.com/en/articles/20001047（確認日期 2026-10-23）
[^go]: OpenAI 幫助中心，「What is ChatGPT Go?」。"we do not support annual billing… for ChatGPT Go, Plus, or Pro" / "Access to legacy models is not included" / "Voice mode is included with the same usage limits as the Free tier." https://help.openai.com/en/articles/11989085（確認日期 2026-10-23）
[^pro]: OpenAI 幫助中心，「About ChatGPT Pro tiers」。"Uninstalling the ChatGPT app does not cancel your subscription." https://help.openai.com/en/articles/9793128（確認日期 2026-10-23）
[^work]: OpenAI 幫助中心，「ChatGPT Work and Codex」。"On mobile: Select Chat or Work from the dropdown." https://help.openai.com/en/articles/20001275（確認日期 2026-10-23）
[^desktop]: OpenAI 幫助中心，「Moving to the new ChatGPT desktop app」。"ChatGPT Classic: The previous ChatGPT desktop app." https://help.openai.com/en/articles/20001276（確認日期 2026-10-23）
[^kakao]: OpenAI 幫助中心，「ChatGPT release notes」2026-07-13 條目。"ChatGPT is also available on Kakao in South Korea"。https://help.openai.com/en/articles/6825453（確認日期 2026-10-23）
[^rn]: OpenAI 幫助中心，「ChatGPT release notes」2026-03-26 條目。"now appear in a horizontal bar above your chats and projects"。https://help.openai.com/en/articles/6825453（確認日期 2026-10-23）
[^cantlogin]: OpenAI 幫助中心，「Why can't I log in to ChatGPT?」。"OpenAI doesn't automatically merge accounts" / "This may be different from the email address where you receive invoices or receipts." https://help.openai.com/en/articles/7426629（確認日期 2026-10-24）
[^free]: OpenAI 幫助中心，「ChatGPT Free Tier FAQ」。"Free users have unlimited everyday text chats, subject to abuse-prevention safeguards." https://help.openai.com/en/articles/9275245（確認日期 2026-10-24）
[^promo]: OpenAI 幫助中心，「ChatGPT Plus promotions and referrals」。"you must cancel from the same platform where you started the subscription" / "You can’t cancel through the ChatGPT mobile app." / "Cancel at least 24 hours before your renewal date to avoid an unwanted charge." https://help.openai.com/en/articles/10492689（確認日期 2026-10-24）
[^trial]: OpenAI 幫助中心，「ChatGPT Promotional Subscriptions/Free Trial Invites FAQ」。"ChatGPT will automatically renew as a paid subscription at the end of the initial free trial or promotional subscription period" / "Referral or promo codes are single‑use and cannot be stacked." https://help.openai.com/en/articles/8381046（確認日期 2026-10-24）
[^plus]: OpenAI 幫助中心，「What is ChatGPT Plus?」。"On the iOS or Android app, go to Settings > Restore purchases to sync your subscription." 韓語選單名稱在介面上沒有確認到。https://help.openai.com/en/articles/6950777（確認日期 2026-10-24）
[^screen-usage]: 在 ChatGPT 網頁設定 →「用量（사용량）」頁面（Plus 套餐，韓語）上親自確認。「積分（크레딧）」「自動充值（자동 충전）」專案（確認日期 2026-10-24）
[^credits]: OpenAI 幫助中心，「Credits (Personal plans)」。"Credits are valid for 12 months from purchase." / "Credits are non-refundable unless required by law or contract, or an approved exception applies." / "Unused credits may qualify for a refund for a verified billing error, confirmed unauthorized activity" / "you can turn it on from Settings > Usage"。https://help.openai.com/en/articles/12642688（確認日期 2026-10-24）
[^macos]: OpenAI 幫助中心，「Downloading the ChatGPT macOS app」。"The ChatGPT macOS app requires macOS 14"。https://help.openai.com/en/articles/9275200（確認日期 2026-10-24）
[^appfaq]: OpenAI 幫助中心，「ChatGPT iOS and Android app FAQ」。"Check that the developer is OpenAI OpCo, LLC." / "Check that the publisher is OpenAI." https://help.openai.com/en/articles/8142208（確認日期 2026-10-24）
[^kakaofaq]: OpenAI 幫助中心，「ChatGPT for Kakao: Overview and Kakao Tools」。"ChatGPT for Kakao is only available in Korea." / "There is no separate app to install." / "the latest version of the KakaoTalk Korea app if it’s registered with a Korean phone number" / "ChatGPT for Kakao is a third-party service" / "Review both sets of terms and privacy notices"。https://help.openai.com/en/articles/12677933（確認日期 2026-10-24）
[^errors]: OpenAI 幫助中心，「Troubleshooting ChatGPT Error Messages」。"Check status.openai.com for known outages" / "Wait 30–60 seconds to see if the response completes" / "Start a new chat if the conversation is long or has many turns" / "Use an incognito or private browsing window" / "Disable VPNs or proxy connections"。https://help.openai.com/en/articles/7996703（確認日期 2026-10-24）
[^slow]: OpenAI 幫助中心，「Why is my ChatGPT taking so long to respond?」。"ChatGPT users during peak hours may notice a pattern of slowness at specific times of the day." https://help.openai.com/en/articles/9047779（確認日期 2026-10-24）
[^captcha]: OpenAI 幫助中心，「CAPTCHAs in ChatGPT」。"While encountering CAPTCHAs occasionally is normal, you shouldn't constantly encounter them." https://help.openai.com/en/articles/8184038（確認日期 2026-10-24）
[^network]: OpenAI 幫助中心，「Network recommendations for ChatGPT errors on web and apps」。"Company WiFi network vs Cellular hotspot"。https://help.openai.com/en/articles/9247338（確認日期 2026-10-24）
[^feature]: OpenAI 幫助中心，「Troubleshooting model feature access」。"If it says you reached a limit or shows a reset time, wait until that time and try again, or choose another available option." https://help.openai.com/en/articles/10258669（確認日期 2026-10-24）
[^mobile]: OpenAI 幫助中心，「Troubleshooting the ChatGPT mobile app」。"Reinstalling doesn't reset usage limits, change workspace permissions, or remove account restrictions." https://help.openai.com/en/articles/7910461（確認日期 2026-10-24）
[^screen-signup]: 在未登入的新瀏覽器視窗中親自確認。按鈕為「使用 Google 賬號繼續（Google 계정으로 계속하기）」「使用 Apple 賬號繼續（Apple 계정으로 계속하기）」「使用手機號碼繼續（휴대 전화 번호로 계속하기）」，其下方是「郵箱地址（이메일 주소）」欄和「繼續（계속）」（確認日期 2026-10-28，網頁登入前介面）
