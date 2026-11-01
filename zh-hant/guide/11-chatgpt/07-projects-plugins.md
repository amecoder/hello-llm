# 第7章 專案、外掛與 Work——把經常做的事歸到一起

> **一句話總結**：做同一件事用的對話、檔案、指令，用**專案**歸在一起；想連線其他服務，或者加上固定的工作方式，就用
> **外掛**。想把一件長任務交出去、拿到完整的成果，就把上方切換成 **Work**。

介面以 2026 年 10 月的網頁版（Plus 套餐）為準。免費套餐或手機應用的選單位置可能略有不同。

![登入後的首頁。可以看到側邊選單的「外掛」和「專案」區域（「公司週報」「英語學習」），以及螢幕上方中間的「Chat」/「Work」切換按鈕](../../../guide/11-chatgpt/assets/shot-01-home-projects.png)

對話標題和賬號名稱是改成示例的畫面。本章要講的地方有：① 側邊選單的「外掛」，② 「專案」區域，③ 上方的「Chat」/「Work」切換。

## 專案——把對話、檔案、指令放進一個資料夾

**專案**（project）是把和某一件事有關的對話、參考檔案、指令集中放在一處的資料夾。
比如，在「公司週報」專案裡放進彙報模板檔案和"表格分三欄"這樣的指令。這樣，在裡面開啟的每個對話，一開始就知道這些檔案和指令。不用在每個對話裡重複同樣的說明。

### 建立和新增內容的方法

1. 把滑鼠放在側邊選單「專案」區域的標題上，點出現的 **+ 按鈕（「新增新專案」）**，在「建立專案」窗口裡取個名字。[^projects]
2. 點專案介面右上角的 •••（「專案操作」）→「專案設定」，寫下只在這個專案裡遵守的**指令**。參考檔案透過「檔案」上傳。[^projects]
3. 已有的對話用「移到專案」放進去，用「從專案中移除」拿出來。[^projects]

![「建立專案」視窗。有「專案名稱」欄（示例文字「哥本哈根旅行」）、"專案把聊天、檔案和自定義指令集中放在一處"的說明、左下角的「預設記憶」、右下角的「建立專案」按鈕](../../../guide/11-chatgpt/assets/shot-16-new-project-marked.png)

「建立專案」視窗：① 寫專案名稱，需要的話 ② 修改「預設記憶」，③ 點「建立專案」。

建立後會開啟專案介面。② 輸入框（「示例專案的新聊天」）下面有 ③ 「檔案」「外掛」按鈕，再下面的 ④ 「聊天」「來源」標籤頁裡集中了這個專案的對話和資料。指令要透過 ① 右上角的 ••• 開啟。

![新建的「示例專案」介面。標題右邊有「分享」和 ••• 按鈕，輸入框下面有「檔案」「外掛」，再下面是「聊天」「來源」標籤頁和"還沒有聊天"的提示](../../../guide/11-chatgpt/assets/shot-17-project-home-marked.png)

在 ••• →「專案設定」窗口裡，可以設定 ① 指令、② 記憶、③ 資料庫訪問許可權，還可以用 ④ 「刪除專案」來刪掉專案。

![••• →「專案設定」視窗。有「專案名稱」、「指令」輸入欄、「記憶——預設（此專案和外部聊天可以互相訪問記憶）」、「資料庫訪問許可權——已啟用」、紅色的「刪除專案」按鈕](../../../guide/11-chatgpt/assets/shot-18-project-settings-marked.png)

*對話標題和賬號名稱是改成示例的畫面，模型名稱的位置已抹掉。「示例專案」在截圖後已刪除。*

> **刪除專案時**，確認窗口裡會寫"此專案和專案中包含的所有聊天將在 Chat 和 Work 中被永久刪除"。儲存在資料庫裡的檔案不會被刪除。要保留的對話，請在刪除之前移到別處（2026-10-23 網頁介面確認）。

### 專案指令優先

[第5章](05-memory.md)的自定義指令適用於所有對話。**專案指令只在該專案裡**適用，而且**優先於**自定義指令。[^projects]
比如，平時設定成用敬語回答，而只在「英語學習」專案裡規定"只用英語回答"。

### 各套餐的限額

專案可以隨意建立，沒有數量限制。可以放進去的檔案數量因套餐而異，一次能上傳的檔案最多 10 個。[^projects]

| 套餐 | 每個專案的檔案數 | 分享時可以一起使用的人數 |
|---|---|---|
| Free | 5 個 | 5 人 |
| Go · Plus | 25 個 | 10 人 |
| Pro | 40 個 | 100 人 |

Business·Enterprise·Edu 每個專案也是 40 個檔案。[^projects]
把專案和別人**分享**後，記憶會自動變成「專案專用記憶」。一旦變了，就不能再恢復成「預設記憶」。[^projects]
另外，放進專案裡的 PDF 可能會在沒有圖片和圖表的情況下被讀取。圖片重要的 PDF，請直接附加到聊天裡（[第4章](04-files-images.md)）。[^files]

<Quiz id="ch107-projects" />

## 把要反覆使用的模板放進專案

在[第1階段第8章](../00-common/08-meta-prompting.md)裡，我們學過怎樣把效果好的請求做成只換空格就能重複使用的**模板**。
專案是存放這種模板的好地方。請把模板放進專案指令裡。這樣就不用在每個對話裡貼上模板了。

```
在這個專案的對話裡，請把我發來的工作筆記整理成周報。
- 做成"已完成 / 進行中 / 下週計劃"三欄的表格
- 每個事項寫一行
- 筆記裡沒有的內容不要編造，請標註 [需要確認]
```

這樣設定好之後，在專案裡的新對話中，只要貼上這周的筆記就可以了。

<Quiz id="ch107-template" />

## 外掛——新增其他服務和工作方式

**外掛**（plugin）是給 ChatGPT 新增功能的一個包。外掛由**技能**（skill，寫明固定工作方式的指令）、已連線的應用、應用模板和擴充套件組成。[^plugins]
2026-07-09，原來的「應用目錄」改成了**外掛目錄**。之前連線過的應用會保持不變。[^rn]

- 在側邊選單「外掛」裡開啟外掛目錄，看一看。所有套餐都能看到目錄。[^plugins]
- 有中意的外掛，就點「安裝外掛」。如果需要其他服務的賬號，就點「連線」。[^plugins]

![開啟側邊選單「外掛」的介面。上方有「外掛」「技能」標籤頁和右邊的「新增」按鈕，中間有「搜尋外掛」欄、「公開」「個人」分類，以及「熱門」和「新鮮值得關注的外掛」列表，每一項都用 + 按鈕連線](../../../guide/11-chatgpt/assets/shot-11-plugins-marked.png)

*對話標題和賬號名稱是改成示例的畫面。* ① 點側邊選單「外掛」，就會出現 ② 「外掛」「技能」標籤頁、③ 「新增」按鈕、④ 「搜尋外掛」欄、⑤ 「公開」「個人」分類、⑥ 熱門列表。連線要用每一項右邊的 ⑦ + 按鈕。

使用方法有四種。[^plugins]

| 方法 | 例子 |
|---|---|
| 直接提問 | 如果相關，ChatGPT 會自己使用外掛 |
| 在 `@` 後面寫名字 | `@PDF 只把這份合同裡的日期提取出來` |
| 在 + 按鈕裡輸入名字 | 從 + 選單下方的外掛列表裡選擇 |
| 點輸入框的「Plugins」 | 從已安裝的外掛裡選擇 |

連線其他服務（郵件、儲存空間等）後，ChatGPT 就能讀取其中的內容。連線之前，請確認會交換哪些資訊（[第8章](08-privacy.md)）。

Free·Go 套餐也能看到目錄（外掛列表介面）和推薦。但是不能使用外掛的**擴充套件**（extension，外掛裡包含的附加執行功能）。[^troubleshoot]

<Quiz id="ch107-plugins" />

## 設定已連線應用的許可權

連線 Gmail、Google Drive 這樣的應用後，ChatGPT 可能只做**讀取**。也可能做傳送郵件、修改檔案這樣的**更改**。哪些事不用詢問就可以做，在設定 →「外掛」的「預設許可權」裡決定。[^permissions][^screen-plugin]

介面上有這樣的選項。

- 「始終詢問」：讀取時、更改時，都先詢問。
- 「允許只讀工具」：讀取不用詢問，更改之前會詢問。
- 「允許低風險工具」：低風險的事自己處理，敏感的事可能會被拒絕。如果在個人賬號裡沒有改過設定，一般這是預設值。如果有公司政策，則以公司政策為先。[^health]

幫助文件裡還有一個不用詢問就全部執行的「允許所有操作」（Allow all actions）。幫助文件自己也寫明，這個選項**"風險會升高"**。[^permissions] 2026 年 10 月 24 日，本指南的介面上只看到了上面三個。建議一開始設定成「始終詢問」或「允許只讀工具」，熟悉之後再放寬（這是本指南的建議）。

- **請讀一讀審批卡片再點。** 審批卡片（approval，更改之前徵求許可的框）。在傳送郵件、刪除檔案這樣的更改動作之前，會彈出 ChatGPT 問"可以這樣做嗎？"的框。點之前請先問自己：是哪個應用？是哪個賬號？它要做什麼？[^permissions]
- **請用有資料的賬號去連線。** 如果連線的是個人 Google 賬號，只存在於公司賬號裡的檔案就看不到。即使連線了，也不能看到超出那個賬號本來能開啟的內容。[^accounts]
- **已連線卻沒被使用時，** 請在新聊天裡用 `@應用名稱` 具體地吩咐它。因為即使顯示「已連線」，在當前對話或當前裝置上也可能用不了。[^troubleshoot]
- **斷開連線後也有留下來的東西。** 在設定 →「外掛」裡選擇應用並斷開連線，只是以後讀不了那個應用了。已經進入對話、檔案、記憶裡的內容不會被刪除（[第5章](05-memory.md#刪除記憶的方法)）。允許用於訓練的開關也保持原樣。[^accounts]
- 應用許可權和允許用於訓練這樣的資料設定是**分開**運作的。所以收窄了許可權，訓練設定也不會變（[第8章](08-privacy.md#不讓對話用於訓練)）。[^permissions]

<Quiz id="ch107-permissions" />

## Chat 和 Work 的區別

2026-07-09 **ChatGPT Work** 推出之後，螢幕上方分成了「Chat」/「Work」。[^rn][^work]

| | Chat | Work |
|---|---|---|
| 做什麼 | 一問一答地對話 | 接手需要經過多個步驟的長任務，一直做到底 |
| 成果 | 回答的文字 | 文件、表格、簡報、報告、Sites（簡單的網站）這樣的成品 |
| 例子 | "把會議記錄總結成三行" | "用這個季度的銷售檔案做 10 頁簡報" |

- 網頁和手機上的 Work，**除 Free·Go 以外的付費套餐**可以使用。Free·Go 只能在桌面應用裡有限地使用。[^rn][^pricing]
- 在 Work 裡可以**預約**任務。可以只執行一次，也可以按重複的日程，或者在出現某個條件時執行。預約在側邊選單「預約」裡管理。[^work][^screen]
- 想在專案裡使用 Work，就點 + 按鈕 →「在專案中開始 Work」。[^screen]
- **用 Chat 來想，用 Work 來做。** 在同一個專案裡，Chat 和 Work 共用同樣的資料。所以可以在 Chat 裡一邊提問一邊打磨結構，準備好開始做的時候切換到 Work，也不用從頭再說明一遍。[^academy-content]
- Sites 在 2026-07-09 作為公開測試版推出，Free·Go 不能使用。[^rn]
- 電腦應用（macOS·Windows）裡有**應用內瀏覽器**。在 Work、Codex 對話中，ChatGPT 可以用這個瀏覽器直接開啟網站來工作。需要登入的話，**密碼只能輸入在那個瀏覽器介面裡，絕對不要寫在對話方塊裡。** 網站上寫的內容，要當作不可信的內容來對待。[^browser] 即使網站裡藏著的指令要求 ChatGPT 把我的資訊交出去，那也不是我的許可。[^sitetools]

![把上方切換成「Work」的介面。「要做什麼任務？」下面是輸入框「用 ChatGPT 開始 Work」，以及「選擇專案」「檔案」「外掛」「開啟桌面應用」按鈕](../../../guide/11-chatgpt/assets/shot-12-work-marked.png)

① 把上方切換成「Work」，就會出現 ② 「用 ChatGPT 開始 Work」輸入框，以及 ③ 「選擇專案」「檔案」「外掛」、④ 「開啟桌面應用」按鈕。

*對話標題和賬號名稱是改成示例的畫面，模型名稱的位置已抹掉。實際介面裡，這下面還會出現「看看 Work 能做什麼」的推薦卡片，因為每個賬號內容不同，所以已裁掉。*

<Quiz id="ch107-work" />

## 已經結束的功能——定製 GPT 和智慧體模式

以前的指南或影片裡常見的功能中，有兩個已經結束或即將結束。

**定製 GPT**（custom GPTs，放入指令和檔案做成的我自己的 ChatGPT）**預計在 2026-12-11 結束**。之後會轉移到外掛。獲得批准的 Enterprise 可以寬限到 2027-02-11。即使結束，和 GPT 的對話記錄也會保留。[^gpts]
個人套餐（Free·Go·Plus·Pro）**現在已經不能新建或釋出 GPT 了。** 即使沒有建立按鈕，也不是出錯。
另外，GPT 不使用我的記憶、自定義指令和過去的對話。如果是連線了外部服務的 GPT，我寫的內容有一部分可能會傳給那家公司。OpenAI 不會監督那家公司怎樣處理資訊。所以只使用可信的來源製作的 GPT。[^gpt-help]

如果你有自己做的 GPT，請在結束之前這樣準備。

1. 把建立 GPT 時寫的**指令文字複製**儲存到記事本里，放進去的**參考檔案**也另外儲存在自己的電腦上。
2. 官方的遷移方法，請在幫助文件「Custom GPT retirement and migration FAQ」[^gpts]裡確認。
3. 如果是我一個人用的 GPT，用儲存下來的指令和檔案建一個**專案**，也能差不多地使用（這是本指南的建議）。

<!-- 需要截圖：定製 GPT 編輯介面中能看到指令和檔案的部分 -->

**智慧體模式**（agent mode，ChatGPT 自己處理多步驟工作的舊功能）**現在已經不能使用了。** 它的位置由 Work 取代。[^agent]
即使幫助文件下面還留著舊的使用方法，也不要照著做。

除此之外，影片和資料裡能看到的 OpenAI 服務中，還有兩個已經結束。

- **Sora**（生成影片的應用）：網頁和應用已於 2026-04-26 終止。[^sora]
- **ChatGPT Atlas**（內建 ChatGPT 的網頁瀏覽器）：已終止，不再更新。即使刪除這個應用，**ChatGPT 訂閱也不會被取消。**[^atlas]

<Quiz id="ch107-retired" />

## 再看看影片

這是公司自己製作的介紹影片。畫面和功能名稱可能與本章的說明不同。

> 下面的影片是**英語**的。在 YouTube 影片的設定（齒輪）→ 字幕 → **自動翻譯 → 中文**裡選擇，就能看中文字幕。影片可以直接在本頁面裡播放。

**[Get started with ChatGPT Work](https://www.youtube.com/watch?v=GphgJjaKKhw)** · OpenAI · 適合想看看如何邁出把工作交給 Work 的第一步的人（2026 年 7 月，6 分鐘）

<YouTube id="GphgJjaKKhw" title="Get started with ChatGPT Work" />

## 親手試一試

1. 用「新專案」建立一個「週報」專案，把上面的模板放進專案指令裡。
2. 在專案裡開啟一個新對話，隨便寫五行這周做過的事發過去。看看錶格是不是按指令生成的。
3. 開啟側邊選單「外掛」，看看有哪些外掛，選一個，在 `@` 後面寫上名字來呼叫它。
4. 如果是付費套餐，把上方切換成「Work」，讓它把第 2 步的彙報做成一頁文件。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：上傳之前，先開啟 members.csv，看看裡面有沒有姓名、聯絡方式這樣的個人資訊。然後建立「讀書會」專案，上傳四個示例檔案（memo-next-month.txt、minutes-last-meeting.txt、members.csv、fees.csv），並把第5章的一行指令放進專案指令裡。在專案裡的新對話中，只發一句"幫我寫一份 11 月通知的草稿"，看看備忘錄和會議記錄的內容有沒有被用進去。

## 小結

- 專案是把對話、檔案、指令歸在一起的資料夾。專案指令在專案裡優先於自定義指令。
- 每個專案的檔案數：Free 5 個，Go·Plus 25 個，Pro 40 個。分享之後，記憶會固定成「專案專用記憶」。
- 要反覆使用的模板，放進專案指令裡會很方便。
- 外掛在側邊選單「外掛」裡找，透過提問、`@`、+ 按鈕、「Plugins」來使用。
- Chat 是對話，Work 是長任務和完整的成果。網頁和手機上的 Work，除 Free·Go 以外的付費套餐可以使用。
- 已連線應用的預設許可權在設定 →「外掛」裡選擇。審批卡片要讀明白應用、賬號和要做的事再點；斷開連線後，已經進入的內容仍然保留。
- 定製 GPT 預計在 2026-12-11 結束，所以要事先儲存指令和檔案。個人套餐現在已經不能新建 GPT。智慧體模式、Sora、Atlas 已經結束。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Project | 專案 | 把一件事的對話、檔案、指令集中放在一起的資料夾 |
| Plugin | 外掛 | 給 ChatGPT 新增功能或連線其他服務的包 |
| Skill | 技能 | 寫明固定工作方式的指令，是外掛的一部分 |
| Plugin Directory | 外掛目錄 | 查詢和安裝外掛的列表介面 |
| ChatGPT Work | ChatGPT Work | 接手多步驟的長任務並做出完整成果的功能 |
| Custom GPTs | 定製 GPT | 用指令和檔案做成的我自己的 ChatGPT，預計 2026-12-11 結束 |
| Agent Mode | 智慧體模式 | 自己處理多步驟工作的舊功能，現在由 Work 取代 |
| Approval | 審批卡片 | 透過應用更改某些東西之前，ChatGPT 徵求許可的框 |
| Permission | 許可權 | 在已連線的應用裡，ChatGPT 不用詢問就可以做的事的範圍 |

<ChapterDone :chapter="107" />

下一章：[第8章. 隱私與資料管理](08-privacy.md)

[^projects]: OpenAI 幫助文件，「Projects in ChatGPT」. https://help.openai.com/en/articles/10169521 (確認日期 2026-10-23)
[^files]: OpenAI 幫助文件，「Uploading files and audio to ChatGPT」. https://help.openai.com/en/articles/8555545 (確認日期 2026-10-23)
[^plugins]: OpenAI 幫助文件，「Plugins in ChatGPT」. https://help.openai.com/en/articles/20001256 (確認日期 2026-10-23)
[^work]: OpenAI 幫助文件，「ChatGPT Work and Codex」. https://help.openai.com/en/articles/20001275 (確認日期 2026-10-23)
[^rn]: OpenAI 幫助文件，「ChatGPT release notes」 2026-07-09 條目。 https://help.openai.com/en/articles/6825453 (確認日期 2026-10-23)
[^pricing]: OpenAI，「套餐與價格（플랜 및 가격）」。 https://openai.com/chatgpt/pricing (確認日期 2026-10-23)
[^gpts]: OpenAI 幫助文件，「Custom GPT retirement and migration FAQ」. https://help.openai.com/en/articles/20001519 (確認日期 2026-10-23)
[^agent]: OpenAI 幫助文件，「ChatGPT agent」. "ChatGPT agent is no longer available. Use ChatGPT Work" https://help.openai.com/en/articles/11752874 (確認日期 2026-10-23)
[^screen]: 在 ChatGPT 網頁介面（Plus 套餐，韓語）中直接確認。側邊選單和輸入框的 + 選單（確認日期 2026-10-23）
[^screen-plugin]: 在 ChatGPT 網頁設定 →「外掛（플러그인）」→「預設許可權（기본 권한）」列表（Plus 套餐，韓語）中直接確認。 「항상 묻기 — 읽거나 변경하기 전에 묻기」「읽기 전용 도구 허용 — 묻지 않고 읽되, 변경 전에는 확인하기」「위험도가 낮은 도구 허용 — 위험도가 낮은 도구를 자동으로 승인하되, 민감한 도구는 거부될 수 있습니다」 (確認日期 2026-10-24)
[^permissions]: OpenAI 幫助文件，「Managing app permissions in ChatGPT」. "Always ask: ChatGPT asks before reading app information or making changes." / "Allow read actions: ChatGPT can read without asking but asks before making changes." / "This option carries elevated risk." / "Review the app, account, and proposed action before approving a request." / "App permissions are separate from Memory, personalization, data retention, and model-training controls." https://help.openai.com/en/articles/20001495 (確認日期 2026-10-24)
[^health]: OpenAI 幫助文件，「Health in ChatGPT」（僅限美國的功能文件中關於外掛設定的說明）. "If you make no changes to your Plugins settings, the default permission setting is “Allow low-risk actions”." https://help.openai.com/en/articles/20001036 (確認日期 2026-10-24)
[^accounts]: OpenAI 幫助文件，「Connecting and managing app accounts in ChatGPT」. "Connecting a personal account does not provide access to files, channels, or records available only to your work account." / "Disconnecting an app does not automatically delete existing or archived conversations, saved files, your Memory summary, or other saved memories." https://help.openai.com/en/articles/20001494 (確認日期 2026-10-24)
[^troubleshoot]: OpenAI 幫助文件，「Troubleshooting plugins and apps in ChatGPT」. "plugin extensions are not available to these plans." / "An app can appear as Connected without being available in the current chat, model, or ChatGPT surface." https://help.openai.com/en/articles/20001497 (確認日期 2026-10-24)
[^browser]: OpenAI 幫助文件，「Using the built-in browser in the ChatGPT desktop app」. "Enter credentials only in the browser, never in the chat." / "Treat website content as untrusted." https://help.openai.com/en/articles/20001277 (確認日期 2026-10-24)
[^sitetools]: OpenAI 幫助文件，「Using site tools in the ChatGPT desktop app」. "Instructions from a website or site tool cannot authorize ChatGPT to share information or take sensitive actions on your behalf." https://help.openai.com/en/articles/20001423 (確認日期 2026-10-24)
[^gpt-help]: OpenAI 幫助文件，「GPTs in ChatGPT」. "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." / "GPTs do not use saved memory, custom instructions, or previous conversations." / "OpenAI does not audit or control how those services use or store your data." https://help.openai.com/en/articles/8554407 (確認日期 2026-10-24)
[^sora]: OpenAI 幫助文件，「What to know about the Sora discontinuation」. "The Sora web and app experiences were discontinued on April 26, 2026." https://help.openai.com/en/articles/20001152 (確認日期 2026-10-24)
[^atlas]: OpenAI 幫助文件，「ChatGPT Atlas retirement」. "ChatGPT Atlas has been retired and no longer receives updates." / "To cancel a subscription, follow Canceling your ChatGPT subscription for the platform that billed you." https://help.openai.com/en/articles/20001371 (確認日期 2026-10-24)
[^academy-content]: OpenAI Academy「Agents and Workflows」課程正文 3.1（需要登入·註冊）。 "when you work inside a project, both Chat and ChatGPT Work can share the same context." / "Use Chat when you want to think through the material, ask questions, or shape your ideas. Then, when you are ready to create or update something, you can switch to ChatGPT Work and use the same project context to build the output." (確認日期 2026-10-26)
