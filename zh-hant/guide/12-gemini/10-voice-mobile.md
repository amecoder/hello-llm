# 第10章 語音與手機——開口提問、Gemini Live、手機和電腦應用

> **一句話總結**：嫌打字麻煩，就用**麥克風**來問。想用說話的方式來回交談，就用手機上的 **Gemini Live**。
> 也可以把攝像頭或螢幕展示給它再提問。電腦應用只要按**一個快捷鍵**，就能馬上叫出來。

這一章裡手機畫面，本指南沒能親自拍攝。內容是依據幫助文件寫的，每部手機的選單位置可能不同。

## 開口提問——麥克風按鈕

可以不打字，直接用嘴來問。

- **手機應用**：點輸入框裡的麥克風，然後說話。麥克風為了聽你的問題，會**最長**開著 5 分鐘。[^mobilestart]
- **網頁**：點輸入框右側的麥克風按鈕（「語音記錄（음성기록）」）。在 Mac 上，用快捷鍵 ⌘ + Shift + D 也可以。[^screen]

用嘴問的時候，第1階段學的要領也是一樣的。要說明想要什麼、給誰、什麼樣子（[第1階段第4章](../00-common/04-prompt-basics.md)）。

韓語是手機應用支援的語言，韓國也是支援的國家。[^mobile] 不過，像更換聲音這樣的一些語音功能，在部分語言裡是不能用的。[^voice]

<Quiz id="ch310-voice" />

## Gemini Live——用說話來交流的對話

**Gemini Live**（Gemini 即時對話）是不用打字、**用說話來回交流的對話**。Gemini 說話的過程中，你也可以插話補充內容，或者換個話題。[^live]
適合這些時候。[^live]

- 像禮物點子、活動計劃這樣，需要**出聲整理思路**時
- 像面試、演講這樣，需要**用嘴練習重要場合**時

```
明天在街坊讀書會上，我要給新會員做 1 分鐘的讀書會介紹。
我先說一遍，你聽完之後，告訴我怎樣說得更簡短、更溫暖。
```

### 在哪裡用，有什麼條件

幫助文件介紹的是在 **Android 手機、平板上的 Gemini 應用**裡使用。**在網頁上還不能使用 Live。**[^live] 要年滿 13 歲（各國有所不同），並且需要登入。[^live]
iPhone 版 Gemini 小元件（iOS 17 及以上）裡，也有 Live 快捷入口。[^widget] 不過 Live 的幫助文件是以 Android 為準的，在 iPhone 上能做到什麼程度，本指南沒能確認。

目前 **Gem 不能在 Live 裡使用。**[^live] 在 Live 裡使用以前對話的記憶（記憶功能）的個性化功能，據說只有**美國的英語**才能用。[^live]

### 開始和停止

- **開始**：點 Gemini 應用下方的「Live」，或者向左滑動。說"Hey Google, let’s talk Live"也可以。[^live]
- **暫時停下**：點「待機（대기）」，麥克風就關了。再點「Live」就會接著繼續。[^live]
- **靜音**：只關我的麥克風，讓 Gemini 繼續說話。[^live]
- **改用文字繼續**：點「結束（종료）」，同一個對話就會轉成文字對話繼續。不用新建聊天。在那個對話裡再點「Live」，就回到語音。[^live]
- **使用其他應用**：從螢幕下方向上滑，就可以在開著 Live 的情況下去用其他應用。[^live]

即使關掉了用說話來打斷，點一下螢幕也能讓它停下。開啟字幕之後，之後所有的 Live 對話都會帶字幕。[^live]

### 更換 Gemini 的聲音

聲音在**手機應用的設定**裡選擇。點名字可以先試聽，再用「確定（확인）」儲存。[^voice] 選好的聲音，不只用在 Live 上，也用在讀回答的「收聽（듣기）」這樣的**所有用聲音回答的功能**上。[^voice]

### 展示攝像頭和螢幕

在 Live 中開啟**攝像頭**，就能一邊給它看我所看到的東西，一邊交談。[^live] 比如照著冰箱裡面問："用這些東西，晚飯做什麼好呢？"

也可以**分享螢幕**。這時，**我手機的整個螢幕**都會被 Gemini 看到。[^live] 所以分享之前，請確認螢幕上沒有密碼、支付資訊、別人的訊息。

- 想結束分享，從螢幕上方向下滑，在「螢幕分享（화면 공유）」卡片上點「停止分享（공유 중지）」。[^live]
- 離開應用，攝像頭就會關閉，回來之後也不會自動重新開啟。螢幕分享也是一樣。[^live]

**錄下別人，或者把別人加入 Live 對話時，請先徵得許可。**[^live] Live 的錄音、影片、螢幕分享是怎麼儲存的，請看[第9章](09-privacy.md#會有人閱讀嗎-會用於-ai-訓練嗎)。

<Quiz id="ch310-live" />

## 手機應用——拍照提問、當作助手使用

手機應用比網頁能做的事稍微多一些。

- **拍照提問**：點應用裡的相機拍照，然後就那張照片提問。[^mobileuse]
- **總結 Gmail、雲端硬碟**：已連線的應用開著時，在手機上也能總結郵件和檔案（[第7章](07-skills-apps.md)）。[^mobileuse]

### 在 Android 上當作助手使用

在 Android 上，可以把 Gemini 設為**預設助手**（用手機按鍵或聲音叫出來的幫手）。[^mobilestart]

- 用長按電源鍵或主螢幕鍵這類方式叫出來。方法因裝置而異。[^mobilestart]
- 有些語言不能用"Hey Google"，但這時也可以點麥克風，用說話來對話。[^mobilestart]
- 在看其他應用時，可以叫出 Gemini，**就當前的螢幕提問**。需要在設定裡開啟螢幕上下文（「螢幕上下文（화면 컨텍스트）」）。[^mobilestart]

### 在鎖屏介面使用

在 Android 手機、平板上，不用解鎖，也能讓 Gemini 做一部分事。在設定裡開啟或關閉「不解鎖使用 Gemini（잠금 해제하지 않고 Gemini 사용하기）」。[^lock] 即使允許了，**需要個人資訊的事，它也會讓你解鎖。**[^lock]

如果手機和別人共用，或者經常隨手放在外面，這個設定還是關掉更安全。

<Quiz id="ch310-mobile" />

## 電腦應用——用快捷鍵馬上叫出來

安裝 Mac、Windows 應用的方法在[第1章](01-getting-started.md#gemini-是什麼-在哪裡用)裡。安裝好並且應用開著的話，就可以用**快捷鍵**馬上叫出來。

| 電腦 | 快捷鍵 | 其他 |
|---|---|---|
| Mac | Option + Space | 分享視窗、「在當前視窗直接說話（현재 창에서 바로 말하기）」 |
| Windows | Alt + Space | — |

來源：Google 幫助文件[^mac][^windows]

Mac 應用裡還能這樣做。[^mac]

- **分享視窗**：透過「新增檔案和工具（파일 및 도구 추가）」→「分享視窗（창 공유）」，把正在看的視窗展示給 Gemini，就能得到針對那些內容的回答。
- **「在當前視窗直接說話」**：按住 fn 鍵說話，鬆手後問題就發出去了。目前還沒有對所有人開放。

分享視窗時，和手機螢幕分享一樣。請先看看那個窗口裡有沒有不該給人看的內容。

<Quiz id="ch310-desktop" />

## 動手試試

1. 在手機 Gemini 應用裡點麥克風，說"推薦三道今晚的菜"。
2. 如果是 Android，點「Live」練習 1 分鐘的自我介紹，再點「結束」，確認同一個對話是不是以文字繼續。
3. 在手機應用設定裡，試聽兩三個 Gemini 的聲音，挑一個。
4. 如果有電腦應用，用快捷鍵（Mac 是 Option + Space，Windows 是 Alt + Space）叫出 Gemini 試試。

**連續任務**（[準備讀書會](../00-common/practice-kit.md)）：用 Live 開口練習下次聚會的主持詞。練習結束後，請它把變成文字的對話中要改的地方整理出來。

## 總結

- 點麥克風就能用嘴問。手機應用的麥克風最長聽 5 分鐘。韓語是應用支援的語言。
- Gemini Live 是用說話來回交流的對話。按幫助文件，在 Android 應用裡使用，網頁上還不行。用「待機」「結束」來停下，「結束」之後會轉成文字對話繼續。
- Live 中可以展示攝像頭和螢幕。螢幕分享會讓整個手機螢幕都被看到。
- 聲音在手機應用設定裡更換，會用在所有用聲音回答的功能上。
- 在 Android 上，把 Gemini 當作預設助手，鎖屏介面也能用。需要個人資訊的事，要解鎖才行。
- 電腦應用，Mac 用 Option + Space，Windows 用 Alt + Space 來叫出。

## 術語整理

| 術語 | 中文名稱 | 一句話解釋 |
|---|---|---|
| Gemini Live | Gemini Live（即時對話） | 用說話來回交流的 Gemini 對話 |
| Screen sharing | 螢幕分享 | 把我裝置的螢幕展示給 Gemini |
| Mobile assistant | 手機助手 | 用手機按鍵或聲音叫出的預設幫手 |
| Widget | 小元件 | 在主螢幕上直接開啟應用功能的小視窗 |
| Speak to Window | 對當前視窗說話 | 在 Mac 上按住 fn 鍵說話來提問的功能 |

<ChapterDone :chapter="310" />

下一章：[第11章. 實踐課題](11-practice.md)

[^screen]: 在 Gemini 網頁畫面（Google AI Pro，韓文介面，Mac）上親自確認。輸入框右側麥克風按鈕的標籤 "음성기록 (⌘⇧D)". （確認日期 2026-10-31）
[^mobile]: Google 幫助文件，「Gemini mobile app availability」（韓文版 「Gemini 모바일 앱 사용 가능 여부」）. "To use your Gemini mobile app, you must be 13 (or the applicable age in your country) or over." / "Where you can download the Gemini app from the Google Play Store" （支援語言列表中有 "Korean"，國家列表中有 "South Korea"） https://support.google.com/gemini/answer/14579026 （確認日期 2026-10-31）
[^mobilestart]: Google 幫助文件，「Get started with the Gemini mobile app」（韓文版 「Gemini 모바일 앱 시작하기」）. "The microphone stays open for up to 5 minutes to listen to your prompt." / "On Android, if you set the Google app  as the default assist app on your device, you can choose Gemini as your mobile assistant." / "Activate by touch, which differs by device." / "“Hey Google” is not available in all languages, but you can still chat with Gemini with your voice when you tap Microphone ." / "Make sure your screen context setting is turned on." https://support.google.com/gemini/answer/14554984 （確認日期 2026-10-31）
[^mobileuse]: Google 幫助文件，「What you can do with your Gemini mobile app」（韓文版 「Gemini 모바일 앱으로 할 수 있는 작업」）. "Ask questions about your surroundings. In the Gemini app, tap Camera , take a photo, and ask questions about it." / "Summarize and find quick info from Gmail or Google Drive" https://support.google.com/gemini/answer/14579631 （確認日期 2026-10-31）
[^live]: Google 幫助文件，「Talk naturally with Gemini Live」（韓文版 「Gemini Live로 자연스럽게 대화하기」）. "With Gemini Live, you can have a natural, free-flowing conversation with Gemini. You can even interrupt it like when you want to add more details or change the topic of the conversation." / "Brainstorm ideas out loud: Ask for a gift idea, to plan an event, or to make a business plan." / "Practice aloud: Rehearse for important moments in a more natural and conversational way." / "An Android phone or tablet." / "For now, Gemini Live isn’t available in the Gemini web app or Gemini in Google messages." / "Be over 13 (or the applicable age in your country)." / "To use this feature, you must be signed in to Gemini Apps." / "For now, Gems can't be used with Gemini Live." / "Respect others’ privacy and ask permission before recording or including them in a Live chat." / "At the bottom, tap Live  or swipe left." / "You can also go Live by saying “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”" / "To put the Live chat on hold, tap Hold . This turns off the mic." / "To resume the Live chat, tap Live ." / "Mute a Live chat to turn off your microphone but allow Gemini to keep speaking." / "You can seamlessly switch an ongoing conversation between Live (voice) and non-Live (text) modes without needing to start a new chat." / "Important: This feature is only available in English in the US." / "To get more helpful, tailored responses, Gemini can use memories of your past chats and info from some Connected Apps." / "To switch back to Live (voice) mode: In a non-Live chat, tap Live ." / "To put Live in the background: from the bottom edge of your screen, swipe up." / "Tip: If you turn off interrupt Live responses, you can still interrupt Gemini by tapping the screen." / "If you turn on captions, all of your Gemini Live conversations will have captions until you turn the setting off." / "In your Live chat, you can turn on your camera to show Gemini what you see and talk about it." / "You leave the Gemini mobile app. The camera doesn’t automatically turn back on when you return to the app." / "You can share and get help with what’s on your device’s screen. When you share your screen, your full screen is shared with Gemini." / "From the top edge of your screen, swipe down, then on the “Screen Sharing” card, tap Stop sharing." / "Screen sharing doesn’t automatically resume when you continue your Live chat or unlock your screen." 韓文版畫面名稱 「대기」「종료」「음소거」「공유 중지」。 https://support.google.com/gemini/answer/15274899 （確認日期 2026-10-31）
[^widget]: Google 幫助文件，「Add & customize your Gemini widget」（韓文版 「Gemini 위젯 추가 및 맞춤설정하기」）. "Open directly to Gemini live with" / "Your device has iOS 17 or up." https://support.google.com/gemini/answer/16179553 （確認日期 2026-10-31）
[^voice]: Google 幫助文件，「Change Gemini’s voice」（韓文版 「Gemini의 음성 변경」）. "For now, you can only access Gemini’s voice setting in the Gemini mobile app." / "The option to change Gemini’s voice isn’t available in some languages." / "This voice setting applies to all Gemini Apps features." 韓文版畫面名稱 「Gemini의 음성」「듣기」「확인」。 https://support.google.com/gemini/answer/15277943 （確認日期 2026-10-31）
[^lock]: Google 幫助文件，「How your Gemini mobile app can help when your phone is locked」（韓文版 「휴대전화가 잠겨 있을 때 Gemini 모바일 앱의 도움을 받는 방법」）. "On Android phones and tablets, you can get help from your Gemini mobile app by touch" / "When you give Gemini permission to respond while your phone is locked, you may still need to unlock your phone for certain tasks." / "Turn Use Gemini without unlocking on or off." 韓文版畫面名稱 「잠금 해제하지 않고 Gemini 사용하기」。 https://support.google.com/gemini/answer/14576209 （確認日期 2026-10-31）
[^mac]: Google 幫助文件，「Use the Gemini app on Mac」（韓文版 「Mac에서 Gemini 앱 사용하기」）. "For quick access, you can also use the keyboard shortcut Option + Space to bring up the Gemini chat window after the app is installed and running." / "Tip: To get more personalized responses, you can share your window with Gemini. In Gemini, click Add files and tools  Share window ." / "To use Speak to Window, press and hold the fn key." / "Important: Speak to Window is rolling out over time, so it may not be available to you yet." 韓文版畫面名稱 「파일 및 도구 추가」「창 공유」「현재 창에서 바로 말하기」。 https://support.google.com/gemini/answer/17011627 （確認日期 2026-10-31）
[^windows]: Google 幫助文件，「Use the Gemini app for Windows」（韓文版 「Windows용 Gemini 앱 사용하기」）. "For quick access to Gemini, you can use the keyboard shortcut Alt + Space." https://support.google.com/gemini/answer/18263854 （確認日期 2026-10-31）

