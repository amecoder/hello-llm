# 第4章 檔案、照片與生成圖片 — 拿給它看，請它來畫

> **一句話總結**：難以用話語說清楚的東西，就**上傳照片或檔案**給它看；需要的圖畫，就**請它生成**。
> 上傳的檔案會彙集在「資料庫（라이브러리）」裡，可以再次使用。免費套餐每天能上傳的檔案數量很少。

介面以2026年10月的網頁版（Plus 套餐）為準。免費套餐或手機 App 的選單位置可能略有不同。

## 上傳照片和檔案

點輸入框左邊的 + 按鈕，選擇「新增照片和檔案（사진 및 파일 추가）」。然後在你的電腦裡選檔案就行。[^files]
檔案出現在輸入框上方後，請把你想用這個檔案做什麼也一起寫成問題，再發送。

![展開了輸入框 + 選單的介面。請看最上面的「新增照片和檔案 — 從電腦上傳（사진 및 파일 추가 — 컴퓨터에서 업로드）」，以及下面的「從資料庫匯入（라이브러리에서 가져오기）」「生成圖片（이미지 생성）」「草圖（스케치）」專案](../../../guide/11-chatgpt/assets/shot-02-plus-menu-marked.png)

對話標題和賬號名稱已換成示例。這一章用到的是 ① + 按鈕、② 「新增照片和檔案（사진 및 파일 추가）」、③ 「從資料庫匯入（라이브러리에서 가져오기）」、④ 「生成圖片（이미지 생성）」、⑧ 「草圖（스케치）」。

可以上傳的東西如下。[^files]

| 種類 | 例子 |
|---|---|
| 照片、圖片 | 收據照片、螢幕截圖、手寫筆記的照片 |
| 文件 | PDF、Word（DOCX）、文字（TXT） |
| 表格 | Excel（XLSX·XLS）、CSV |
| 演示資料 | PowerPoint（PPTX） |
| 聲音（僅付費） | WAV、MP3、M4A 錄音檔案 |

影片也可以作為附件。免費套餐也可以。不過能不能成功，要看裝置和上傳方式。另外，ChatGPT 也可能無法完全理解整段影片或聲音。[^image-faq]

谷歌文件（`.gdoc`）不能直接上傳。請先在谷歌文件裡下載成 PDF 或 Word，再上傳。[^files]
把 PDF 直接上傳到對話裡，它不只讀文字，還會讀**裡面的圖片和圖表**。[^files]

比起只上傳檔案然後說“看看吧”，請把你想要什麼也一起寫出來。這樣得到的回答會好得多。

```
附件的 PDF 是我們公寓的物業費通知單。
請找出比上個月漲得多的三個專案，用表格展示，並用一句話寫出你猜測的漲價原因。
不確定的內容請標註“推測”。
```

檔案的用處不只是做總結。你可以把以前寫得好的文件作為**範本**上傳，請它把我的草稿改成同樣的結構和語氣。把原件和我寫的摘要一起上傳，還能找出**兩者不一致的事實，或原件裡沒有的內容**。[^academy-content]
```
第一個檔案是官方通知（原件），第二個檔案是我寫的摘要。
請找出我的摘要裡和原件不同的事實和數字，以及原件裡沒有的內容。
```

::: details 得到的回答大致是這樣（示例 — 點選展開）
這是本指南製作的示例。實際的回答會因服務和每次情況而不同。

> 和原件對照後，有三處不同。
>
> | 我的摘要 | 原件 | 差異 |
> |---|---|---|
> | “截止 ○月○日” | “截止 ○月△日” | 截止日期不同 |
> | “參加費 ○○韓元” | （原件裡沒有） | 原件裡沒有的內容 |
> | “任何人都可申請” | “僅限○○居民申請” | 物件不同 |
>
> 其餘內容與原件相同。

**確認一下有沒有答好**：和原件不同的事實、數字，有沒有一個不漏地找出來？原件裡沒有的內容，有沒有單獨標出來？請把回答指出的地方，和真正的原件檔案對照一遍。

:::

如果是照片，可以這樣寫。

```
附件的照片是我家冰箱裡面。請只用能看到的食材，推薦兩道30分鐘內能做好的晚餐。
```

> 身份證、合同、病歷這類含有個人資訊的檔案，上傳之前請先遮住或去掉。原則已在[第1階段第9章](../00-common/09-safety.md)講過。

上傳照片時，也請了解下面這些。[^image-faq]

- **照片裡的韓文可能會讀錯。** 韓文、日文這類非拉丁字母的文字，讀得比英文不準確。拍的時候讓文字顯得大一些，數字請和原件核對。
- **不要用它來判讀 CT、X 光這類醫學影像。** 這不是合適的用途。
- 如果有想讓它重點看的地方，可以用照片編輯 App **畫個圈**再上傳。這樣能讓它更關注那一部分。

<Quiz id="ch104-upload" />

## 可以上傳的數量 — 各套餐的額度

檔案有大小和數量的限制。官方幫助中寫明的數值如下。[^files]

| 限制 | 數值 |
|---|---|
| 單個檔案的大小（文件、演示資料） | 最多512MB |
| 單個文件的文字量 | 最多200萬 token |
| 表格檔案（CSV 等） | 約50MB（因內容而異） |
| 單張照片 | 最多20MB |
| 上傳數量 | 3小時內最多80個（擁擠時可能更低） |
| **免費（Free）套餐** | **每天最多3個** |
| 我的整個賬號的儲存空間 | 最多25GB |
| 聲音檔案 | **僅付費**可上傳 |

**token**（詞元）是 AI 把文字切成小塊來閱讀的單位。200萬 token 是非常長的篇幅。一般的工作文件很少會碰到這個上限。

在免費套餐裡，最先碰到的是**每天3個**。如果需要問好幾個檔案，請先上傳最必要的檔案。
如果有好幾張照片，把它們拼成一張再上傳也是個辦法。這樣可以省下相應的數量。
額度的數字經常變，所以上面的數值請以確認日期為準。

<Quiz id="ch104-limits" />

## 資料庫 — 彙集上傳檔案的地方

你上傳的檔案和 ChatGPT 生成的檔案，會**自動儲存**在側邊選單的「資料庫（라이브러리）」裡。資料庫在網頁上使用。[^library]
想再次使用以前上傳的檔案，就點 + 按鈕 →「從資料庫匯入（라이브러리에서 가져오기）」。不需要重新上傳檔案。

<!-- 需要截圖：開啟側邊選單「資料庫（라이브러리）」的介面（網頁，只顯示示例檔案） -->

資料庫能裝的容量因套餐而異。[^library]

| 套餐 | 資料庫容量 |
|---|---|
| Free | 500MB |
| Go | 4GB |
| Plus · Business | 20GB |
| Pro | 100GB |

需要知道的幾點如下。

- **刪除對話後，資料庫裡的檔案仍會保留。** 想去掉檔案，請在資料庫裡另外刪除。[^delete]
- 刪除的檔案，有時可以在「最近刪除的專案（최근 삭제된 항목）」裡恢復。並且會被安排在30天內永久刪除。[^library]
- 在**臨時聊天**（[第3章](03-chats.md)）裡上傳的檔案不會儲存到資料庫。[^library]
- **對話裡的下載連結很快就會失效。** ChatGPT 生成的檔案請馬上儲存；如果像「Download failed」這樣失敗了，請讓它重新生成。[^errors]

> **資料庫正在改成「Space」。** Space 取代資料庫，專案則保持不變。[^space] 在 Space 裡，除了檔案，還可以建立多人一起修改的**頁面**（page，文件）。2026年10月24日，在本指南的介面上還顯示為「資料庫（라이브러리）」。如果側邊選單裡看到「Space」，就當作和這一節的資料庫是同一個地方。

<Quiz id="ch104-library" />

## 生成圖片

ChatGPT 不只會寫字，還會畫圖。點 + 按鈕 →「生成圖片（이미지 생성）」，或者點首頁推薦的「幫我做圖片或貼紙（이미지나 스티커 만들어줘）」。然後描述你想要的圖畫就行。臨時聊天裡「生成圖片（이미지 생성）」是關閉的，所以請在普通聊天裡進行（[第3章](03-chats.md)）。

![用「生成圖片（이미지 생성）」做出小菜店圖畫的介面。右上方是發出的請求，下面是水彩畫，畫上有「編輯（편집）」按鈕](../../../guide/11-chatgpt/assets/shot-25-image-gen.png)

*這是在下面的示例提示詞裡，去掉最後的「文字」一行後傳送得到的介面。因為沒有指定文字，它自己在招牌上寫了「우리동네 반찬가게」（我們社群小菜店）。對話和圖片在截圖後已刪除。*[^screen-image]

請它畫圖時，第1階段學過的提示詞原則也同樣適用（[第1階段第4章](../00-common/04-prompt-basics.md)）。請寫進下面四項。這樣會更接近你想要的圖。

| 要寫的內容 | 例子 |
|---|---|
| 畫什麼 | 站在小菜店門前微笑的奶奶 |
| 什麼感覺 | 溫暖的水彩，童話繪本的畫風 |
| 怎麼佈局 | 正方形，人物在中間，背景簡單 |
| 文字 | 上方寫“今日小菜” |

```
請幫我做一幅社群小菜店的宣傳圖。
- 內容：在店門前端著小菜盤子微笑的奶奶
- 感覺：溫暖的水彩，童話繪本的畫風
- 形狀：正方形，奶奶在中間，背景簡單
- 文字：上方用大字寫“今日小菜”
```

第一幅圖不滿意也沒關係。就像修改文字時一樣，**只指出要改的地方**，再次請求。像“把背景改成夜晚，其餘保持不變”這樣說就行（[第1階段第6章](../00-common/06-conversation.md)）。

### 使用參考照片

難以用話語描述的樣子，可以一起上傳**參考照片**。用「新增照片和檔案（사진 및 파일 추가）」附上照片，並說明要模仿什麼。

```
附件的照片是我們店的招牌。請保留這塊招牌的顏色和字型風格，
做一張秋夕假期休息通知海報。休息日：10月5日~7日。
```

在設定 →「個性化設定（개인 맞춤 설정）」頁面裡，也有「參考照片（참고 사진）」「全身參考照片（전신 참고 사진）」專案。個性化設定在[第5章](05-memory.md)裡講。

ChatGPT 生成的圖片裡帶有 **C2PA**（記錄圖片是怎樣製作出來的國際標準標籤）。[^faq] 它肉眼看不見，是和圖片檔案一起儲存的資訊。

關於 AI 生成圖片的權利，以及上傳別人的照片、作品時的注意事項，請在[第1階段第9章](../00-common/09-safety.md)裡確認。

<Quiz id="ch104-image" />

## 草圖 — 親手畫給它看

+ 按鈕 →「草圖（스케치）」是**在螢幕上親手畫畫，再作為圖片附上**的功能。介面上的說明是“畫一幅畫，作為圖片附上”。

![「草圖編輯器（스케치 편집기）」介面。上方有選擇、畫筆、文字、形狀、橡皮擦工具，下方有選顏色和藍色的確認按鈕，用畫筆畫了三個方框](../../../guide/11-chatgpt/assets/shot-26-sketch.png)

*畫好的圖沒有附上就關閉了。關閉時會再問一次「要放棄更改嗎？（변경 사항을 삭제할까요?）」。*[^screen-sketch]

不需要畫得好。把難以用話語說清楚的**佈局或形狀**大概畫出來給它看就行。
比如，用方框和箭頭畫出傳單的佈局並附上，然後這樣請求。

```
附件的草圖是傳單的佈局。上面的大方框裡放店名，中間的圓圈裡放招牌菜的照片，
下面的三個小方框裡放價格。請按這個佈局做一張傳單圖。
```

<Quiz id="ch104-sketch" />

## 看影片瞭解更多

這是公司自己製作的介紹影片。介面和功能名稱可能與本章的說明不同。

> 下面的影片是**英語**。在 YouTube 影片的設定（齒輪）→ 字幕 → **自動翻譯 → 中文**，就可以看到中文字幕。影片可以直接在本頁面內播放。

**[Introducing ChatGPT Images 2.5](https://www.youtube.com/watch?v=6l7ble9P74o)** · OpenAI · 想簡短了解更快、更清晰的圖片生成的人（2026年9月，1分鐘）

<YouTube id="6l7ble9P74o" title="Introducing ChatGPT Images 2.5" />

## 親自試一試

1. 用手機拍下家裡的收據或便條，傳到電腦上，用「新增照片和檔案（사진 및 파일 추가）」上傳，並請求“把上面寫的內容整理成表格”（請遮住姓名和卡號）。
2. 開啟側邊選單的「資料庫（라이브러리）」，確認剛才上傳的照片是否已儲存。
3. 用「生成圖片（이미지 생성）」做出上面的小菜店圖畫，然後說一次“把背景改成春天的感覺，其餘保持不變”來修改它。
4. 用「草圖（스케치）」畫三個方框附上，並請求“按這個佈局做一張生日邀請函”。

**連續任務**（[籌備讀書會](../00-common/practice-kit.md)）：用「新增照片和檔案（사진 및 파일 추가）」上傳示例檔案 minutes-last-meeting.txt，傳送“請把定下來的事、要做的事、還沒定的事分成表格。要做的事要寫上負責人和期限，沒有期限的事寫「期限待定」”。把要做的三件事是否全部列出來，和會議紀要對一對。

## 小結

- 透過 + 按鈕 →「新增照片和檔案（사진 및 파일 추가）」上傳照片、文件、表格、演示資料。聲音檔案只有付費版可以。
- 不要只上傳檔案，也要寫出你想要什麼。
- 免費套餐每天最多上傳3個。照片最大20MB，文件最大512MB。
- 照片裡的韓文、數字可能讀錯，要和原件核對。
- 上傳的檔案會自動儲存到「資料庫（라이브러리）」（正在改成「Space」），刪除對話後也會保留。
- 圖片在「生成圖片（이미지 생성）」裡，寫進內容、感覺、佈局、文字來請求，也可以用參考照片或「草圖（스케치）」給它看。

## 術語表

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Upload | 上傳 | 把我裝置裡的檔案傳到服務上 |
| Token | 詞元（token） | AI 把文字切成小塊來閱讀的單位 |
| MB · GB | 兆位元組 · 吉位元組 | 檔案大小單位。1GB約為1,000MB |
| Library | 資料庫 | 彙集上傳或生成的檔案的地方 |
| Image Generation | 圖片生成 | AI 把用文字描述的圖畫出來的功能 |
| Reference Image | 參考圖（參考照片） | 生成圖片時用來模仿的範本照片 |
| Sketch | 草圖 | 親手大致畫出的圖 |
| Space | Space | 取代資料庫的檔案、頁面空間 |
| C2PA | C2PA | 記錄照片、圖畫是怎樣製作出來的國際標準標籤 |

<ChapterDone :chapter="104" />

下一章：[第5章. 記憶與個性化設定](05-memory.md)

[^files]: OpenAI 幫助中心，「Uploading files and audio to ChatGPT」。"Select + in the prompt area, then Add photos & files." / "You can't upload a .gdoc file directly." / "maximum size of 512 MB per file" / "capped at 2 million tokens per file" / "size limit of approximately 50 MB" / "Images have a limit of 20 MB per image." / "Free users are limited to 3 file uploads per day." / "capped at 25 GB per user" / "Audio uploads are not available on the Free plan at this time." / "ChatGPT can analyze both text and images in PDFs"。https://help.openai.com/en/articles/8555545（確認日期 2026-10-23）
[^library]: OpenAI 幫助中心，「Using Library to manage files in ChatGPT」。"Library is available on web" / "Select Add from library." / "Free users have up to 500 MB of Library storage." / "scheduled for permanent deletion from OpenAI systems within 30 days" / "files uploaded while using Temporary Chat are not saved to your account or Library"。https://help.openai.com/en/articles/20001052（確認日期 2026-10-23）
[^image-faq]: OpenAI 幫助中心，「ChatGPT Image Inputs FAQ」。"The model does not perform as well handling images with text of non-Latin alphabets, such as Japanese or Korean." / "The model is not suitable for interpreting specialized medical images like CT scans" / "consider using a photo edit markup tool on your image before uploading." / "ChatGPT can accept video files as attachments through supported upload methods, including on Free plans." / "It may not analyze the entire video or accurately interpret its audio." https://help.openai.com/en/articles/8400551（確認日期 2026-10-24）
[^errors]: OpenAI 幫助中心，「Troubleshooting ChatGPT Error Messages」。"Ensure that the file is recently generated, files generated by ChatGPT expire quickly"。https://help.openai.com/en/articles/7996703（確認日期 2026-10-24）
[^space]: OpenAI 幫助中心，「ChatGPT Space: sharing, data, and controls」。"It replaces Library, while your Projects stay as they are." / "Pages are editable documents that you can organize inside other pages and work on with other people." https://help.openai.com/en/articles/20001544（確認日期 2026-10-24）
[^faq]: OpenAI 幫助中心，「What is ChatGPT: FAQ」。"ChatGPT images include C2PA provenance metadata." https://help.openai.com/en/articles/12677804（確認日期 2026-10-24）
[^delete]: OpenAI 幫助中心，「Deleting and archiving chats in ChatGPT」。"Deleting a chat does not delete files saved separately in Library." https://help.openai.com/en/articles/8809935（確認日期 2026-10-23）
[^academy-content]: OpenAI Academy 課程正文（需要登入和註冊）。AI Foundations: "Use this template as a model. Rewrite my draft so it follows the same structure and tone." Applied AI Foundations: "Verify" "Check whether a draft is supported by the source"（確認日期 2026-10-26）
[^screen-sketch]: 親自確認了透過 + 選單 →「草圖（스케치）」開啟的「草圖編輯器（스케치 편집기）」，以及關閉時的確認視窗（「繼續編輯（계속 편집하기）」「放棄更改（변경 사항 삭제）」）（確認日期 2026-10-28，Plus 賬號網頁介面）
[^screen-image]: 透過 + 選單 →「生成圖片（이미지 생성）」傳送本節的示例提示詞（不含「文字」一行）後親自確認。圖片上方有「編輯（편집）」按鈕和分享按鈕。刪除對話後，圖片仍保留在資料庫「圖片（이미지）」中，因此另行刪除了（確認日期 2026-10-28，Plus 賬號網頁介面）
