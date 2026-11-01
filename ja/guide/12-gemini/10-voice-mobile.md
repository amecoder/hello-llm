# 第10章 音声とスマホ — 声で聞く、Gemini Live、スマホ・パソコンのアプリ

> **一言まとめ**: 入力が面倒なときは、**マイク**で聞きましょう。声でやり取りしながら会話したいときは、スマホの**Gemini Live**を使います。
> カメラや画面を見せながら聞くこともできます。パソコンのアプリは、**ショートカットキー一つ**ですぐに呼び出せます。

この章のスマホの画面は、このガイドが直接撮影できませんでした。ヘルプをもとに書いたので、スマホによってメニューの位置が違うことがあります。

## 声で聞く — マイクボタン

文字を打つかわりに、声で聞くことができます。

- **スマホアプリ**: 入力欄のマイクを押して話します。マイクは、質問を聞くために**最大5分間**開いています。[^mobilestart]
- **Web**: 入力欄の右にあるマイクボタン（「音声入力（음성기록）」）を押します。Macでは、ショートカットの ⌘ + Shift + D でも使えます。[^screen]

声で聞くときも、ステップ1で学んだコツは同じです。何を、誰に、どんな形でほしいのかを伝えましょう（[ステップ1 第4章](../00-common/04-prompt-basics.md)）。

韓国語はスマホアプリが対応している言語で、韓国も対応国です。[^mobile] ただし、声の変更のように、一部の言語では使えない音声機能もあります。[^voice]

<Quiz id="ch310-voice" />

## Gemini Live — 声でやり取りする会話

**Gemini Live**（ジェミニ・ライブ）は、文字を打たずに**声でやり取りする会話**です。Geminiが話している途中で割り込んで、内容を足したり話題を変えたりすることもできます。[^live]
こんなときに便利です。[^live]

- プレゼントのアイデアやイベントの計画のように、**声に出して考えを整理する**とき
- 面接や発表のように、**大事な場面を声で練習する**とき

```
明日、近所の読書会で新しいメンバーに、1分間で会の紹介をしなければなりません。
先に私が話してみるので、聞いたあとで、もっと短くて温かい話し方を教えてください。
```

### 使える場所と条件

ヘルプでは、**Androidのスマホ・タブレットのGeminiアプリ**で使うと案内しています。**Webでは、まだLiveを使えません。**[^live] 13歳以上（国によって異なる）で、ログインしている必要があります。[^live]
iPhone用のGeminiウィジェット（iOS 17以上）にも、Liveのショートカットがあります。[^widget] ただし、LiveのヘルプはAndroidが基準なので、iPhoneでどこまでできるかは、このガイドでは確認できませんでした。

今のところ、**GemをLiveで使うことはできません。**[^live] 過去の会話の記憶（メモリ）をLiveで使うパーソナライズ機能は、**アメリカの英語**でのみ使えるそうです。[^live]

### 始める、止める

- **開始**: Geminiアプリの下にある「Live」を押すか、左にスワイプします。「Hey Google, let’s talk Live」と話しかけてもかまいません。[^live]
- **一時停止**: 「保留（대기）」を押すと、マイクがオフになります。もう一度「Live」を押すと再開します。[^live]
- **ミュート（음소거）**: 自分のマイクだけをオフにして、Geminiには話し続けさせます。[^live]
- **文字で続ける**: 「終了（종료）」を押すと、同じ会話が文字の会話として続きます。新しいチャットを作る必要はありません。その会話でもう一度「Live」を押すと、音声に戻ります。[^live]
- **他のアプリを使う**: 画面の下から上へスワイプすると、Liveをオンにしたまま他のアプリに移れます。[^live]

声での割り込みをオフにしていても、画面をタップすれば止められます。字幕をオンにすると、その後のLiveの会話すべてに字幕がつきます。[^live]

### Geminiの声を変える

声は**スマホアプリの設定**で選びます。名前を押して試し聞きをして、「OK（확인）」で保存します。[^voice] 選んだ声は、Liveだけでなく、答えを読み上げる「聞く（듣기）」のように**音声で答えるすべての機能**に使われます。[^voice]

### カメラと画面を見せる

Live中に**カメラ**をオンにすると、自分が見ているものを見せながら話せます。[^live] たとえば、冷蔵庫の中を映しながら「これで夜ご飯は何を作ろう？」と聞けます。

**画面共有**もできます。このときは、**自分のスマホの画面全体**がGeminiに見えます。[^live] ですから、共有する前に、パスワード、決済情報、他の人のメッセージが画面に出ていないかを確認してください。

- 共有を終えるには、画面の上から下へスワイプしてから、「画面共有（화면 공유）」カードの「共有を停止（공유 중지）」を押します。[^live]
- アプリを離れると、カメラはオフになり、戻ってきても自動ではオンになりません。画面共有も同じです。[^live]

**他の人を録音したり、Liveの会話に入れたりするときは、先に許可をもらってください。**[^live] Liveの録音・映像・画面共有がどう保存されるかは、[第9章](09-privacy.md#人が読むのか-aiの学習に使われるのか)を見てください。

<Quiz id="ch310-live" />

## スマホアプリ — 写真を撮って聞く、アシスタントとして使う

スマホアプリでは、Webよりできることが少し多くなります。

- **写真を撮って聞く**: アプリのカメラを押して写真を撮り、その写真について聞きます。[^mobileuse]
- **Gmail・Driveの要約**: 連携アプリがオンなら、スマホでもメールとファイルを要約します（[第7章](07-skills-apps.md)）。[^mobileuse]

### Androidでアシスタントとして使う

Androidでは、Geminiを**標準のアシスタント**（スマホのボタンや声で呼び出すお手伝い役）に設定できます。[^mobilestart]

- 電源ボタンやホームボタンを長押しするなどして呼び出します。方法は機種によって違います。[^mobilestart]
- 「Hey Google」が使えない言語もありますが、そのときもマイクを押して声で会話できます。[^mobilestart]
- 他のアプリを見ているときにGeminiを呼び出して、**今の画面について聞く**こともできます。設定で、画面のコンテキスト（「画面コンテキスト（화면 컨텍스트）」）がオンになっている必要があります。[^mobilestart]

### ロック画面で使う

Androidのスマホ・タブレットでは、ロックを解除しなくても、Geminiに一部の仕事を頼めます。設定の「ロックを解除せずにGeminiを使う（잠금 해제하지 않고 Gemini 사용하기）」で、オン・オフを切り替えます。[^lock] 許可しておいても、**個人情報が必要な仕事では、ロックを解除するよう求められます。**[^lock]

スマホを他の人と一緒に使ったり、よく置き忘れたりするなら、この設定はオフにしておくほうが安全です。

<Quiz id="ch310-mobile" />

## パソコンアプリ — ショートカットキーですぐに呼び出す

MacとWindowsのアプリをインストールする方法は、[第1章](01-getting-started.md#geminiとは何で、どこで使うか)にあります。インストールしてアプリを起動してある状態なら、**ショートカットキー**ですぐに呼び出せます。

| パソコン | ショートカットキー | その他 |
|---|---|---|
| Mac | Option + Space | ウィンドウの共有、「現在のウィンドウにすぐ話す（현재 창에서 바로 말하기）」 |
| Windows | Alt + Space | — |

出典: Googleヘルプ[^mac][^windows]

Macアプリでは、こんなこともできます。[^mac]

- **ウィンドウの共有**: 「ファイルとツールを追加（파일 및 도구 추가）」→「ウィンドウを共有（창 공유）」で、今見ているウィンドウをGeminiに見せると、その内容に合わせた答えをもらえます。
- **「現在のウィンドウにすぐ話す（현재 창에서 바로 말하기）」**: fnキーを押したまま話し、手を離すと質問が送られます。まだ全員には公開されていません。

ウィンドウを共有するときも、スマホの画面共有と同じです。見せてはいけない内容がそのウィンドウにないか、先に確認しましょう。

<Quiz id="ch310-desktop" />

## 実際にやってみよう

1. スマホのGeminiアプリでマイクを押して、「今日の夜ご飯のメニューを3つおすすめして」と話してみる。
2. Androidなら「Live」を押して1分間の自己紹介を練習し、「終了（종료）」を押して、同じ会話が文字で続くかを確認する。
3. スマホアプリの設定で、Geminiの声を2〜3個試し聞きして、一つ選ぶ。
4. パソコンアプリがあるなら、ショートカットキー（MacはOption + Space、WindowsはAlt + Space）でGeminiを呼び出してみる。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 次の集まりの進行のセリフを、Liveで声に出して練習してみる。練習が終わったら、文字に切り替わった会話で、直すところを整理してもらう。

## まとめ

- マイクを押すと、声で聞ける。スマホアプリのマイクは最大5分間聞く。韓国語はアプリの対応言語。
- Gemini Liveは、声でやり取りする会話。ヘルプによるとAndroidアプリで使え、Webではまだ使えない。「保留（대기）」・「終了（종료）」で止め、「終了（종료）」すると文字の会話に続く。
- Live中に、カメラと画面を見せられる。画面共有は、スマホの画面全体が見える。
- 声は、スマホアプリの設定で変えられ、音声で答えるすべての機能に使われる。
- Androidでは、Geminiを標準のアシスタントとして使え、ロック画面でも使える。個人情報が必要な仕事は、ロックを解除する必要がある。
- パソコンアプリは、MacはOption + Space、WindowsはAlt + Spaceで呼び出す。

## 用語のまとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Gemini Live | ジェミニ・ライブ | 声でやり取りするGeminiの会話 |
| Screen sharing | スクリーン・シェアリング（画面共有） | 自分のデバイスの画面をGeminiに見せること |
| Mobile assistant | モバイル・アシスタント | スマホのボタンや声で呼び出す標準のお手伝い役 |
| Widget | ウィジェット | ホーム画面からアプリの機能をすぐに開く小さなウィンドウ |
| Speak to Window | スピーク・トゥ・ウィンドウ（現在のウィンドウにすぐ話す） | Macでfnキーを押したまま話して聞く機能 |

<ChapterDone :chapter="310" />

次の章: [第11章 実践課題](11-practice.md)

[^screen]: Gemini Web画面（Google AI Pro、韓国語、Mac）で直接確認。入力欄の右のマイクボタンのラベル "음성기록 (⌘⇧D)"。（確認日 2026-10-31）
[^mobile]: Googleヘルプ「Gemini mobile app availability」（韓国語版「Gemini 모바일 앱 사용 가능 여부」）。"To use your Gemini mobile app, you must be 13 (or the applicable age in your country) or over." / "Where you can download the Gemini app from the Google Play Store" （対応言語の一覧に "Korean"、国の一覧に "South Korea"） https://support.google.com/gemini/answer/14579026 （確認日 2026-10-31）
[^mobilestart]: Googleヘルプ「Get started with the Gemini mobile app」（韓国語版「Gemini 모바일 앱 시작하기」）。"The microphone stays open for up to 5 minutes to listen to your prompt." / "On Android, if you set the Google app  as the default assist app on your device, you can choose Gemini as your mobile assistant." / "Activate by touch, which differs by device." / "“Hey Google” is not available in all languages, but you can still chat with Gemini with your voice when you tap Microphone ." / "Make sure your screen context setting is turned on." https://support.google.com/gemini/answer/14554984 （確認日 2026-10-31）
[^mobileuse]: Googleヘルプ「What you can do with your Gemini mobile app」（韓国語版「Gemini 모바일 앱으로 할 수 있는 작업」）。"Ask questions about your surroundings. In the Gemini app, tap Camera , take a photo, and ask questions about it." / "Summarize and find quick info from Gmail or Google Drive" https://support.google.com/gemini/answer/14579631 （確認日 2026-10-31）
[^live]: Googleヘルプ「Talk naturally with Gemini Live」（韓国語版「Gemini Live로 자연스럽게 대화하기」）。"With Gemini Live, you can have a natural, free-flowing conversation with Gemini. You can even interrupt it like when you want to add more details or change the topic of the conversation." / "Brainstorm ideas out loud: Ask for a gift idea, to plan an event, or to make a business plan." / "Practice aloud: Rehearse for important moments in a more natural and conversational way." / "An Android phone or tablet." / "For now, Gemini Live isn’t available in the Gemini web app or Gemini in Google messages." / "Be over 13 (or the applicable age in your country)." / "To use this feature, you must be signed in to Gemini Apps." / "For now, Gems can't be used with Gemini Live." / "Respect others’ privacy and ask permission before recording or including them in a Live chat." / "At the bottom, tap Live  or swipe left." / "You can also go Live by saying “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”" / "To put the Live chat on hold, tap Hold . This turns off the mic." / "To resume the Live chat, tap Live ." / "Mute a Live chat to turn off your microphone but allow Gemini to keep speaking." / "You can seamlessly switch an ongoing conversation between Live (voice) and non-Live (text) modes without needing to start a new chat." / "Important: This feature is only available in English in the US." / "To get more helpful, tailored responses, Gemini can use memories of your past chats and info from some Connected Apps." / "To switch back to Live (voice) mode: In a non-Live chat, tap Live ." / "To put Live in the background: from the bottom edge of your screen, swipe up." / "Tip: If you turn off interrupt Live responses, you can still interrupt Gemini by tapping the screen." / "If you turn on captions, all of your Gemini Live conversations will have captions until you turn the setting off." / "In your Live chat, you can turn on your camera to show Gemini what you see and talk about it." / "You leave the Gemini mobile app. The camera doesn’t automatically turn back on when you return to the app." / "You can share and get help with what’s on your device’s screen. When you share your screen, your full screen is shared with Gemini." / "From the top edge of your screen, swipe down, then on the “Screen Sharing” card, tap Stop sharing." / "Screen sharing doesn’t automatically resume when you continue your Live chat or unlock your screen." 韓国語版の画面名 「대기」「종료」「음소거」「공유 중지」. https://support.google.com/gemini/answer/15274899 （確認日 2026-10-31）
[^widget]: Googleヘルプ「Add & customize your Gemini widget」（韓国語版「Gemini 위젯 추가 및 맞춤설정하기」）。"Open directly to Gemini live with" / "Your device has iOS 17 or up." https://support.google.com/gemini/answer/16179553 （確認日 2026-10-31）
[^voice]: Googleヘルプ「Change Gemini’s voice」（韓国語版「Gemini의 음성 변경」）。"For now, you can only access Gemini’s voice setting in the Gemini mobile app." / "The option to change Gemini’s voice isn’t available in some languages." / "This voice setting applies to all Gemini Apps features." 韓国語版の画面名 「Gemini의 음성」「듣기」「확인」. https://support.google.com/gemini/answer/15277943 （確認日 2026-10-31）
[^lock]: Googleヘルプ「How your Gemini mobile app can help when your phone is locked」（韓国語版「휴대전화가 잠겨 있을 때 Gemini 모바일 앱의 도움을 받는 방법」）。"On Android phones and tablets, you can get help from your Gemini mobile app by touch" / "When you give Gemini permission to respond while your phone is locked, you may still need to unlock your phone for certain tasks." / "Turn Use Gemini without unlocking on or off." 韓国語版の画面名 「잠금 해제하지 않고 Gemini 사용하기」. https://support.google.com/gemini/answer/14576209 （確認日 2026-10-31）
[^mac]: Googleヘルプ「Use the Gemini app on Mac」（韓国語版「Mac에서 Gemini 앱 사용하기」）。"For quick access, you can also use the keyboard shortcut Option + Space to bring up the Gemini chat window after the app is installed and running." / "Tip: To get more personalized responses, you can share your window with Gemini. In Gemini, click Add files and tools  Share window ." / "To use Speak to Window, press and hold the fn key." / "Important: Speak to Window is rolling out over time, so it may not be available to you yet." 韓国語版の画面名 「파일 및 도구 추가」「창 공유」「현재 창에서 바로 말하기」. https://support.google.com/gemini/answer/17011627 （確認日 2026-10-31）
[^windows]: Googleヘルプ「Use the Gemini app for Windows」（韓国語版「Windows용 Gemini 앱 사용하기」）。"For quick access to Gemini, you can use the keyboard shortcut Alt + Space." https://support.google.com/gemini/answer/18263854 （確認日 2026-10-31）
