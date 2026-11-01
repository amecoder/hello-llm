# 第9章 隱私與安全——儲存了什麼、誰會看、怎麼刪除

> **一句話總結**：只要「保留活動記錄（활동 기록 보관）」是開啟的，Gemini 的對話就會**在賬號裡保留 18 個月**，其中一部分**會被人閱讀，也會用於 AI 訓練。**
> 不想留下的對話，請用**臨時聊天**；機密資訊一開始就不要放進去。記錄可以在「設定」→「活動」裡關閉和刪除。

介面以 2026 年 10 月的網頁版為準。本章以個人 Google 賬號為準。公司和學校賬號的規則不同（最後一節）。

## 會儲存什麼

登入後使用 Gemini，Google 會收集這些資訊。[^hub]

- **我說的話**：輸入或說出的提問、交給它做的任務
- **我給它看的東西**：上傳的檔案、照片、影片，問過的螢幕畫面，匯入的對話，從瀏覽器傳送的網頁內容
- **來自已連線應用的資訊**：Gmail 之類已連線的應用、搜尋和 YouTube 記錄、在 Chrome 裡看過的網頁地址（[第7章](07-skills-apps.md#已連線的應用-—-在-gemini-裡用-gmail·drive·日曆)）
- **其他**：語音對話（Live）的錄音、反饋、位置資訊等

**位置資訊是始終會收集的。** 這是為了給出符合問題的回答。不過，裝置允許提供的**精確位置**，不會儲存到「Gemini 應用活動」記錄裡。[^hub]

Google 表示，**不會用聊天內容來展示廣告**。並且說如果有變化，會明確告知。[^hub]

<Quiz id="ch309-saved" />

## 會有人閱讀嗎？會用於 AI 訓練嗎？

**其中一部分會被人閱讀。** 人工稽核員（包括與 Google 簽約的外部公司員工）會評估 Gemini 的回答是否不準確或有害，並提出更好的回答。[^hub]
對話在傳送給稽核員之前，會先與我的賬號分離。即便如此，Google 還是這樣提醒。[^hub]

> **不要輸入機密資訊**，那些資訊如果被稽核員看到，或被用來改進服務，會讓你很為難。

**也會用於訓練。** 如果「保留活動記錄」是開啟的，我的活動就會被用於**包括訓練生成式 AI 模型在內的服務改進**，這個過程有人工稽核員參與。[^hub]
為了讓以後的對話不被用來改進服務而進行稽核，幫助文件介紹的方法是**關閉「保留活動記錄」**。[^hub]

不過，即使關閉記錄或使用臨時聊天，對話仍然會用於**給出回答，以及保護使用者和 Google**。這時也可能有人工稽核員參與。[^hub]

| | 「保留活動記錄」開啟 | 關閉或臨時聊天 |
|---|---|---|
| 在我的活動列表裡 | 保留 | 不保留 |
| 儲存在賬號裡 | 預設 18 個月 | 72 小時 |
| AI 訓練 | 會用 | 不會用 |
| 出於保護目的的人工稽核 | 有 | 有 |

來源：Google 幫助文件[^hub][^activity]

**語音對話（Live）的錄音、影片和螢幕共享，預設不會用於改進服務。** 只有我自己開啟時才會使用。[^hub]

**傳送反饋（贊、踩）時**，即使記錄是關閉的，這條反饋和相關的對話也會用於改進服務。[^hub] 涉及敏感內容的對話，最好不要留下反饋。

<Quiz id="ch309-review" />

## 開啟和關閉「保留活動記錄」

「保留活動記錄」（Keep Activity）是把我的 Gemini 對話保留在賬號裡的設定。**年滿 18 週歲的話，一開始就是開啟的。**[^activity]

### 關閉的方法

1. 點左下角的「設定」→「活動」。新標籤頁裡會開啟「Gemini 應用活動」（[第2章](02-screen-tour.md#設定頁面-—-賬號、偏好設定、隱私)）。[^report]
2. 點上方「保留活動記錄」旁邊的「開啟」。[^report]
3. 選擇**「停用」**（只從今以後關閉）或**「停用並刪除活動」**（關閉，同時刪除過去的記錄）。[^activity]

### 關閉之後有什麼變化

關閉之後，對話不會留在活動列表裡。取而代之的是，很多功能都用不了了。

| 功能 | 關閉後 | 講到的章 |
|---|---|---|
| 查詢過去的對話、固定、重新命名 | 不可以 | [第3章](03-chats.md#查詢過去的對話) |
| 記憶（記住過去的對話） | 不可以 | [第5章](05-memory.md) |
| 技能，大部分已連線的應用 | 不可以 | [第7章](07-skills-apps.md) |
| 任務，日程 | 不可以 | [第8章](08-tasks.md) |

來源：各章的 Google 幫助文件腳註

所以可以這樣選。

- **如果方便最重要，** 就開著，只把敏感的對話用**臨時聊天**（[第2章](02-screen-tour.md#臨時聊天-—-不留記錄的對話)）。
- **如果根本不想被用於訓練，** 就關掉，並放棄上面這些功能。

不管選哪一邊，**最保險的做法都是一開始就不要放進機密資訊**（[第1階段第9章](../00-common/09-safety.md#不要放進去的東西)）。

<Quiz id="ch309-activity" />

## 刪除記錄和下載

### 刪除

在「Gemini 應用活動」頁面（`myactivity.google.com/product/gemini`）裡刪除。[^activity]

- 點記錄上方的**「刪除」**，可以在**「全部時間」「過去 1 小時」「過去 1 天」「自定義範圍」**中選擇。[^activity]
- 也可以用日期旁邊或條目旁邊的刪除按鈕，只刪一天的或者一條。[^activity]

也可以設定**自動刪除**。預設是超過 **18 個月**就刪除。本指南的介面上也顯示著「刪除超過 18 個月的活動」。可以改成 3 個月、36 個月，或者「不自動刪除」。[^activity][^report]

刪除之後也有留下來的東西。

- **已經被人工稽核過的對話不會被刪除，最長保留 3 年。**[^hub]
- **刪除分享過的對話，公開連結不會被刪除。** 連結要另外刪除（[第3章](03-chats.md#刪除分享過的連結)）。[^activity]
- 斷開已連線應用的連線，Gemini 活動記錄也不會被刪除。[^hub]

### 下載

可以把我的 Gemini 記錄儲存成檔案。到 **Google 匯出（Takeout）**（`takeout.google.com`）裡，用 Gemini 所用的賬號登入後，點「全部取消選擇」，只選 Gemini 專案。[^download]

- 透過郵件收到的下載連結會**有效 7 天**。[^download]
- **即使下載了，Google 伺服器上的記錄也不會被刪除。** 要刪除的話，請像上面那樣另外刪除。[^download]

<Quiz id="ch309-delete" />

## 不能做的事，不能輕信的事

### 使用規則

Google 規定了不能用 Gemini 製作的東西。比如兒童性剝削內容、真實人物的性相關影像、垃圾資訊和詐騙、危險或違法的活動、仇恨和騷擾、欺騙他人的虛假內容。[^guidelines]
違反的話，可能受到從警告、部分功能受限，到**停止使用 Gemini、停止使用其他 Google 服務**的處罰。[^guidelines]

### 不要原樣相信回答

Gemini 不是人。它不能自己思考，也不會有感情，只是特別擅長找出規律。[^genai]
所以它**可能把錯誤的內容當作事實來說**（幻覺）。[^hub] **診斷、治療、醫療建議，或者法律、金融之類的專業幫助，請不要指望 Gemini。** 它的回答只是參考資訊。[^hub]
核對的習慣，已整理在[第1階段第9章](../00-common/09-safety.md#核對的四個習慣)裡。

### 孩子和公司賬號

- **未滿 13 週歲**（各國不同）的孩子，要由家長在 **Family Link**（家庭管理應用）裡允許後，才能使用 Gemini。[^child]
- **公司和學校賬號**的規則不同。根據公司使用的 Google Workspace 等級，有的情況下對話和上傳的檔案不會由人工稽核，也不會用於 AI 訓練。「保留活動記錄」只有管理員才能關閉。[^work] 如果是公司賬號，請先確認公司的 AI 使用規定。

<Quiz id="ch309-rules" />

## 親手試一試

1. 開啟「設定」→「活動」，確認「保留活動記錄」是否開啟，自動刪除設定的是多少個月。
2. 選一個適合自己的自動刪除期限（例如：3 個月）。
3. 用「刪除」→「過去 1 小時」，把剛才練習用的對話刪掉試試。
4. 像[第3章](03-chats.md#刪除分享過的連結)裡學的那樣，確認「我的公開連結」裡有沒有剩下的連結。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：像任務裡用到的會員名單這樣包含他人個人資訊的檔案，只在臨時聊天裡處理，或者把姓名改成"會員1"之類再上傳。完成任務後，把相關的對話刪除。

## 小結

- 登入使用的話，提問、上傳的檔案、已連線應用的資訊、位置等都會被儲存。不會用聊天內容展示廣告。
- 一部分對話會被人閱讀。「保留活動記錄」開啟時，也會用於 AI 訓練。不要放進機密資訊。
- 「保留活動記錄」在年滿 18 週歲時預設開啟。關閉後只儲存 72 小時，也不會用於訓練，但記憶、技能、任務等多項功能就不能用了。
- 在「Gemini 應用活動」裡選擇時間段刪除，並修改自動刪除（預設 18 個月）。被人工稽核過的對話最長保留 3 年。
- 可以透過 Takeout 下載記錄。即使下載了，伺服器上的記錄也不變。
- 回答可能出錯。醫療、法律、金融方面的判斷，交給專業人士。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Keep Activity | 保留活動記錄 | 把我的 Gemini 對話保留在賬號裡的設定 |
| Gemini Apps Activity | Gemini 應用活動 | 檢視和刪除我的對話記錄的頁面 |
| Auto-delete | 自動刪除 | 超過設定期限的記錄會自動被刪除的設定 |
| Human reviewer | 人工稽核員 | 為改進服務而閱讀部分對話的人 |
| Google Takeout | Google 匯出（Takeout） | 下載我在 Google 服務裡的資料的地方 |
| Family Link | 家庭連結（Family Link） | 家長管理孩子 Google 賬號的應用 |

<ChapterDone :chapter="309" />

下一章：[第10章. 語音與手機](10-voice-mobile.md)

[^report]: 在 Gemini 網頁介面（Google AI Pro，韓語）中確認。點「設定（설정）」→「活動（활동）」，新標籤頁裡會開啟 myactivity.google.com 的「Gemini 應用活動（Gemini 앱 활동）」，設定名稱為「保留活動記錄（활동 기록 보관）」，狀態顯示為「開啟（사용）」，說明為 "이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다."，自動刪除按鈕為「18개월이 지난 활동 삭제」。（確認日期 2026-10-30，`docs/reports/2026-10-30_Gemini-공식-자료.md` 的「실제 화면에서 직접 확인」一節。這個頁面上能看到真實的對話記錄，所以沒有截圖）
[^hub]: Google 幫助文件，「Gemini Apps Privacy Hub」（韓語版「Gemini 앱 개인 정보 보호 허브」）. "What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (確認日期 2026-10-31)
[^activity]: Google 幫助文件，「Manage & delete your activity in Gemini Apps」（韓語版「Gemini 앱에서 활동 관리 및 삭제하기」）. "If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." 韓語版名稱 「사용 중지」「사용 중지 및 활동 삭제」「삭제」「전체 기간」「지난 1시간」「지난 1일」「사용자설정 범위」「자동 삭제 안함」. https://support.google.com/gemini/answer/13278892 (確認日期 2026-10-31)
[^download]: Google 幫助文件，「Download your Gemini Apps data」（韓語版「Gemini 앱 데이터 다운로드하기」）. "Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." 韓語版名稱 「모두 선택 해제」. https://support.google.com/gemini/answer/16920332 (確認日期 2026-10-31)
[^guidelines]: Google 幫助文件，「Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful」（韓語版「Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기」）. 禁止專案標題 "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (確認日期 2026-10-31)
[^genai]: Google 幫助文件，「Learn about generative AI」（韓語版「생성형 AI에 대해 자세히 알아보기」）. "Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (確認日期 2026-10-31)
[^child]: Google 幫助文件，「Guide your child's Gemini Apps experience」（韓語版「자녀의 Gemini 앱 사용 관리하기」）. "A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (確認日期 2026-10-31)
[^work]: Google 幫助文件，「Use Gemini Apps with a work or school Google Account」（韓語版「직장 또는 학교 Google 계정으로 Gemini 앱 사용하기」）. "Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." （作為核心服務提供的 Workspace 等級的說明） / "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (確認日期 2026-10-31)
