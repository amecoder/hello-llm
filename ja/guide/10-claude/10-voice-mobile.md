# 第10章 音声とスマホ — 声で聞いて、スマホでもっと速く

> **一言まとめ**: 入力欄の**マイク**は自分の声を文字に書き起こし（音声入力）、**音波のマーク**はClaudeと声でやり取りさせてくれます（音声モード）。
> スマホでは、ウィジェット・ショートカット・ロック画面からもっと速く開けて、メッセージやメールの下書きをアプリにそのまま渡してもらえます。

画面は2026年10月のWeb版を基準にしています。スマホアプリとパソコンアプリでは、ボタンの位置が少し異なることがあり、設定メニューの名前も画面によって違うことがあります。

## 音声入力と音声モード

声で使う機能は2つあります。名前は似ていますが、やることが違います。[^dictation][^voice]

| | 音声入力（Dictation） | 音声モード（Voice mode） |
|---|---|---|
| ボタン | 入力欄の右の**マイク** | マイクの横の**音波のマーク** |
| やること | 自分の声を文章に変えて送る | 声で聞いて、声で聞く |
| Claudeの答え | 文章で届く | 声で届く |
| 向いているとき | 長い質問を打つのが面倒なとき | 手がふさがっているとき、話しながら考えを整理したいとき |

正確な文章が大事なときは、**音声入力**を使ってください。自分の質問も答えもすべて文章で残るので、読み返せます。やり取りする会話が必要なときは、**音声モード**を使いましょう。

どちらの機能も、無料プランでも使えます。[^dictation][^voice]

<Quiz id="ch210-difference" />

## 音声入力をやってみる

この節では、スマホアプリ（iPhone・Android）の音声入力を説明します。[^dictation] パソコンアプリのCoworkでも、音声入力を使えます。[^voice]

1. Claudeアプリで新しいチャットを開きます。
2. 入力欄の右にある**マイク**を押します。
3. 初めて使うときは、話す言語を選びます。
4. いつものように話します。
5. 矢印を押して送ります。送らないときは「X」を押します。

次のように話してみましょう。

```
今週末に、小学生の子どもと家でできる科学実験を3つ教えてください。
材料は、台所にあるものだけを使うものでお願いします。
```

音声入力は、韓国語を含む12の言語に対応しています。英語以外の言語は、まだ試験版（ベータ）です。言語を変えるには、右上のイニシャルを押して「音声入力の言語（음성 입력 언어）」を選んでください。[^dictation]

人の名前や地名は、間違って書き起こされることがあります。送ったあと、チャット画面に書かれた自分の質問を一度読んでみましょう。[^dictation]

### Macで — クイック入力

MacでClaudeデスクトップアプリを使っているなら、**Optionキーを2回**押してみてください。どのアプリを使っていても、すぐにClaudeの入力欄が開きます。[^quick] 作業を止めずに聞くことができます。

- 画面の一部をドラッグしてスクリーンショットとして貼り付けたり、アプリのウィンドウを押してその内容を一緒に送ったりできます。[^quick]
- 音声入力のショートカットをオンにしておくと、Caps Lockを押して声で入力できます。最初はオフになっています。[^quick]
- 無料を含むすべてのプランで使えますが、Macのデスクトップアプリでだけ使えます。アプリが裏でもいいので起動している必要があります。[^quick]
- Macの画面収録のような権限が必要です。「システム設定 > プライバシーとセキュリティ（시스템 설정 > 개인정보 보호 및 보안）」で確認します。[^quick]

見慣れない表やエラーのウィンドウを見ながら、すぐに聞きたいときに便利です。

```
今貼り付けた画面の数字が、それぞれどういう意味なのか、やさしく説明してください。その中で私が気にしたほうがいいものは何かも教えてください。
```

<Quiz id="ch210-dictation" />

## 音声モードをやってみる

音声モードは、まだ**試験版**です。Web・パソコンアプリ・スマホアプリのどれでも使えますが、スマホでいちばんうまく動くように作られています。[^voice]

**Web・パソコンアプリで**

まず、ボタンの場所を見ておきましょう。入力欄の右下の⑧に、マイク（音声入力）と音波のマーク（音声モード）が並んでいます。[^screen]

![Claude Webのトップ画面。赤い番号①〜⑩のうち⑧が、入力欄の右下にあるマイク（音声入力）と音波のマーク（音声モード）を指している](../../../guide/10-claude/assets/shot-01-home-marked.png)

名前と会話のタイトルは、例として書き換えた画面です（無料プラン）。この章で使う番号は⑧だけです。ほかの番号は[第2章](02-screen-tour.md)で説明します。

1. 新しいチャットを開きます。
2. チャット欄の右下にある**音波のマーク**を押します。
3. 話すと、入力欄に自分の声が自動で書き込まれます。話し終わると、Claudeが答えます。
4. 終わらせるには、右下の「停止（중지）」（Stop）を押します。

**スマホアプリで**

1. 入力欄のマイクの横にある**音波のマーク**を押します。
2. 気に入った声を選びます。
3. 話し始めます。[^voice]

<!-- スクリーンショットが必要: 音声モードがオンになった画面と、右下の「停止」ボタン -->

### 聞き取り方は2種類

- **ハンズフリーモード**（hands-free）: 最初からオンになっている方式です。Claudeがずっと聞いていて、自分が話をやめると答えます。静かな場所でいちばんうまくいきます。
- **プッシュトゥトークモード**（push-to-talk）: 話している間ボタンを押し続けて、話し終わったら手を離します。うるさい場所や、横で他の人が話しているときに、より正確です。[^voice]

Claudeが的外れな方向に進んだら、そのまま話し始めてください。Claudeが止まって聞いてくれます。質問がいくつもあるなら、まとめて話さずに一つずつ聞きましょう。[^voice] 一度に一つずつ聞くと、答えも短くなり、耳で聞きやすくなります。

声でやってみるのにちょうどいい頼み方です。

```
来週、面接があります。あなたが面接官になって、質問を一つずつしてください。
私が答えたら、よかった点を一つ、直す点を一つだけ短く言って、次の質問に進んでください。
```

::: details もらえる答えはだいたいこんな感じです（例 — 押して開く）
このガイドが作った例です。実際の答えは、サービスやそのときによって異なります。

> いいですよ、面接を始めますね。最初の質問です。簡単に自己紹介をしていただけますか？

自分が答えたあとは、こう続きます。

> よかった点は、志望した理由を最初にはっきり話されたことです。直す点は、経験の話が少し長いことです。例を一つだけ選んで、短く話してみてください。では2つ目の質問です。働いていて、いちばんやりがいを感じた瞬間はいつでしたか？

**うまくもらえたか確認しましょう**: 質問を一度に一つだけしているか？ 自分の答えのあとに、よい点を一つ、直す点を一つだけ短く言っているか？ 質問のリストを一度にぶちまけていないか？

:::

### 知っておくこと

- 音声での会話も、**プランの使用上限に含まれます**（[第1章](01-getting-started.md)）。
- 同じ会話の中で文章と声を行き来しても、**前の内容は引き継がれます。** インターネットのアドレスのように正確に打つ必要があるものは、途中で文章で入力すればOKです。
- 文章のチャットで最後に使ったモデルで始まり、会話中に変えられます。ただし、Claude Fableは音声モードではまだ使えません（2026-10-26確認）。
- つないでおいたツール（Gmail・Googleカレンダーなど）も、音声モードで使えます。音声モードのヘルプには、無料プランではツールを一つつなげると書かれています。ツールの接続は[第7章](07-projects-tools.md)で扱います。
- 新しい画面では、Claudeが作業中の会話を含めて、どの会話でも音声モードを使えます。[^voice][^cowork-voice-old]

<Quiz id="ch210-voice" />

## 声と言語を変える

Claudeの声は、決まったいくつかの中からだけ選びます。誰かの声をまねたり、コピーしたりできないようにするためです。[^voice]

- **Web・パソコンアプリ**: 「設定（설정）」→「一般（일반）」の「音声（음성）」にあります。「言語（언어）」の下に「スタイル（스타일）」と「速度（속도）」もあります。[^screen][^voice-settings-name] 声を押すと、先に聞いてみられます。
- **スマホアプリ**: 音声モード中に、左下の設定ボタンを押して、声と話す速さを選びます。[^voice]

**話す言語は、別に決める必要があります。** アプリの画面を韓国語にしても、音声の言語は変わりません。[^voice] この画面では、「設定」→「一般」→「音声」→③「言語」で選びます。[^screen] 英語以外の言語は試験版です。会話の途中で「韓国語で話して」と頼んでもかまいません。[^voice]

![「設定」→「一般」の画面。①左のメニュー、②「画面モード（화면 모드）」の「テーマ（테마）」、③「音声」の「言語」（韓国語）に赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-general-marked.png)

無料プランの画面です。**赤い番号は、下の一覧の番号と同じ場所です。**

- ① 左のメニューの「一般」を選んだ状態です。
- ② 「テーマ」: 画面を明るくしたり暗くしたりします。音声とは関係ありません。
- ③ 「言語」: 声で話す言語です。その下に「スタイル」「速度」が続きます。[^screen]

<Quiz id="ch210-settings" />

## 音声の記録と個人情報

**音声での会話も、文章で残ります。** 音声モードでやり取りした会話は、文字の記録に変わって、ふつうの会話と同じようにチャット履歴に保存されます。[^voice]

**音声入力の録音は残りません。** 声を文章に変えたあと、録音は削除され、学習にも使われません。[^dictation] ただし、**変換された文章**は、ふつうの会話と同じです。会話の保管期間に従い、学習を許可していれば、学習に使われることがあります。[^dictation-privacy] 学習の設定は[第9章](09-privacy.md)で見ました。

声でする会話は、**隣の人にも聞こえます。** 自分の質問も、Claudeの答えも聞こえます。

- 地下鉄・カフェ・オフィスでは、イヤホンを使うか、音声入力で静かに入力してください。
- [ステップ1 第9章](../00-common/09-safety.md#入れてはいけないもの)で見た**入れてはいけない情報は、声に出して言うのもやめましょう。** 声で話すときは、文字で打つときよりうっかり言ってしまいやすいからです。

<Quiz id="ch210-privacy" />

## スマホでもっと速く — ウィジェット・ショートカット・ロック画面

アプリを探して開かなくても、Claudeを呼び出せます。どれも**使用上限に含まれます。**[^ios][^android]

### iPhone（iOS 18以上）

- **「Claudeに聞く（Claude에 물어보기）」**（Ask Claude）: アプリを開かずに質問します。Spotlight検索、Siri、共有メニューから使えます。たとえば、文章を選んで共有メニューからそのままClaudeに送れます。
- **ウィジェット**: ホーム画面や「今日」ビューにClaudeのウィジェットを置くと、新しいチャット、音声入力、写真を撮って送ることを、ボタン一つで開きます。
- **「Claudeで写真を分析（Claude로 사진 분석）」**（Analyze Photo with Claude）: コントロールセンターやロック画面に入れておくと、ロックを解除しなくても写真を撮って送れます。
- **「Open Claude」**: ロック画面、コントロールセンター、アクションボタン（Action button）に入れて、Claudeをすぐに開きます。[^ios][^lock]

「Claudeに聞く」とショートカットは、アプリを開いたときに表示される標準のモデルを使います。[^ios]

### ショートカットで「要約ボタン」を作る

iPhoneのショートカットアプリで、自分だけのボタンを作れます。ヘルプの例をまねしてみましょう。[^ios]

1. ショートカットアプリで「+」を押して、新しいショートカットを作ります。
2. 共有（Share）のアクションを入れて、受け取る内容の種類を選びます。
3. 「Claudeに聞く」アクションを入れます。
4. その中にプロンプトを書きます。例: `次の文章を3行で要約してください: [ショートカットの入力]`
5. 名前をつけて（例: 「Claudeで要約」）、共有シートに入れます。

これで、どのアプリでも、文章を選んで共有ボタンを押し、「Claudeで要約」を選べばOKです。

<!-- スクリーンショットが必要: iPhoneのショートカットアプリで「Claudeに聞く」アクションを入れた画面 -->

### Android（Android 8.0以上）

ホーム画面の空いているところを長押しして、「ウィジェット（위젯）」でClaudeを探して置きます。ボタンは3つあります。[^android]

- **チャットボタン**: 新しい会話をすぐに開きます。
- **カメラボタン**: 写真を撮ってClaudeに送ります。
- **マイクボタン**: 新しい会話を開いて、音声入力を始めます。

<Quiz id="ch210-shortcuts" />

## スマホアプリとつなぐ — メッセージ・メール・カレンダー・地図

スマホアプリのClaudeは、スマホに入っている他のアプリとつながって、作業を手伝えます。すべてのプランで使えます。[^ios-apps][^android-apps]

| | iPhone | Android |
|---|---|---|
| メッセージ・メール・カレンダー | 使える | 使える |
| 位置情報・地図 | 使える | 使える |
| リマインダー | 使える | 使えない |
| アラーム・タイマー | — | 使える |

**メッセージとメールは、下書きまでをClaudeが作ります。** Claudeが内容を入れたカードを見せてくれて、それを押すと、メッセージアプリやメールアプリが開きます。内容を読んで直したあと、**送信は自分で**押します。Claudeは、すでに届いているメッセージやメールを読まず、連絡先にも直接入りません。[^ios-apps]

次のように頼んでみましょう。

```
明日の朝の会議に、病院の診察のため30分遅れると、課長に送るメールの下書きを書いてください。
短く、丁寧にお願いします。
```

下書きがメールアプリに渡されたら、宛先と内容を確認して送ってください。[第9章](09-privacy.md)で見た偽の「送りました」と違って、ここでは自分が送信ボタンを押して初めて、実際に送られます。

### 権限は自分で決めます

Claudeが位置情報やカレンダーを初めて使おうとすると、許可を聞かれます。1回だけ許可（Allow once）、常に許可（Always allow）、許可しない（Don't allow）の中から選びます。[^ios-apps] あとから変えるには、スマホの設定で探してください。

- **iPhone**: 「設定」→「Claude」
- **Android**: 「設定」→「アプリ」→「Claude」→「権限」[^ios-apps][^android-apps]

健康データを読む機能もありますが、試験版で、ProとMaxプランのアメリカでだけ使えます。[^ios-apps]

<Quiz id="ch210-apps" />

## 実際にやってみよう

**1. 同じ質問を、2つの方法で**

下の質問を、一度は**マイク（音声入力）**で、もう一度は新しいチャットで**音波のマーク（音声モード）**で試します。

```
冷蔵庫に卵、豆腐、長ねぎがあります。15分以内に作れるおかずを2つ教えてください。
```

そして自分に問いかけてみましょう。音声入力で書かれた文章は、自分が話したとおりか？ 答えを聞くのと読むのでは、どちらが楽か？

**2. 口を挟んでみる**

音声モードで長い説明を頼んだあと、Claudeが話している途中で「ちょっと待って、もっと短く」と言ってみます。Claudeが止まって、短く言い直すか確認してみてください。

**3. スマホにショートカットを一つ置く**

iPhoneならホーム画面にClaudeのウィジェットを、Androidなら Claudeのウィジェットを置いてみます。マイクボタンを押して、音声入力がすぐに開くか確認します。

**続きの課題**（[読書会の準備をする](../00-common/practice-kit.md)）: 音声モードで「読書会の最初の挨拶を30秒くらいで一緒に練習して」と話す。自分が話した挨拶を聞いて、直す点を一つ挙げてほしいと頼んでみる。

## まとめ

- マイクは**音声入力**: 声を文章に変えて送り、答えは文章で届く。この章はスマホアプリを基準に説明した。
- 音波のマークは**音声モード**: 声で聞いて、声で聞く。試験版で、スマホでいちばんうまく動く。
- 音声モードはハンズフリーが標準で、うるさいときはプッシュトゥトークに切り替える。使用上限に含まれる。
- 話す言語は、アプリの画面の言語とは別に決める。この画面では「設定」→「一般」→「音声」→「言語」だ。
- 音声での会話は文字の記録として残る。音声入力の録音は削除されるが、変換された文章は学習の設定に従う。
- iPhoneは「Claudeに聞く」・ショートカット・ウィジェット・ロック画面、Androidはウィジェットで速く開く。
- メッセージやメールはClaudeが下書きを作り、送信は自分でする。権限はスマホの設定で変える。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Dictation | ディクテーション | 声を文章に変えて入力する機能 |
| Voice mode | ボイスモード | Claudeと声でやり取りする機能 |
| Hands-free | ハンズフリー | ボタンなしで、話をやめると答える方式 |
| Push-to-talk | プッシュトゥトーク | ボタンを押している間だけ聞く方式 |
| Beta | ベータ | 正式な公開の前に、試しに出した機能 |
| Transcript | トランスクリプト | 話した内容を文字に起こした記録 |
| Widget | ウィジェット | ホーム画面に置く小さなショートカット欄 |
| Shortcut | ショートカット | 複数の動作をまとめて、ボタン一つで実行するiPhoneの機能 |
| Permission | パーミッション | アプリが位置情報・カレンダーなどを使ってよいか許可すること |

<ChapterDone :chapter="210" />

次の章: [第11章 実習課題](11-practice.md)

---

[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。「設定」→「一般」→「音声」に「言語」・「スタイル」・「速度」。（確認日 2026-10-26）
[^dictation]: Anthropicヘルプ「Use dictation on Claude Mobile」。"Dictation is available to all Claude users (Free, Pro, Max, Team, and Enterprise plans). Support for languages other than English is in beta." / "Dictation allows you to speak your prompts instead of typing them when using Claude for iOS or Android." / "Tap the microphone icon on the right side of the chat input field." / "Your prompt will automatically appear as text in the chat window." / "We will not retain a copy of your speech input or use it for training our generative models." https://support.claude.com/en/articles/10065434 （確認日 2026-10-26）
[^voice]: Anthropicヘルプ「Use voice mode」。"but is built to work best from your phone." / "Tap the sound wave symbol in the lower right corner of the chat window to activate voice mode:" / "Tap the voice mode icon (sound wave symbol next to the microphone icon) in the text input field:" / "Note: Voice conversations count toward your regular usage limits based on your subscription plan." / "In hands-free mode, Claude listens continuously and responds to natural pauses in your speech." / "On the web and desktop: Go to Settings > Capabilities and scroll down to Voice settings." / "When you turn on voice mode, it starts with the model you last used in text chat" / "Note: Claude Fable is not currently available in voice mode." / "Your previous context carries over, so you don't lose anything when you switch." / "On the Free plan you can connect one tool, and paid plans can connect more." / "This prevents voice cloning or impersonation." / "Changing your app's display language doesn't change your voice language, so set it here." / "Textual transcripts of your audio conversations are saved in your chat history just like text conversations." / "In the new Claude experience, voice mode works in any conversation, including ones where Claude is working on a task." / "In Claude Cowork and Claude Code, dictation is available but voice mode isn't." https://support.claude.com/en/articles/11101966 （確認日 2026-10-26）
[^dictation-privacy]: Anthropicプライバシーセンター「What personal data is collected when using dictation on the Claude mobile apps?」。"If you have allowed us to use your chats or coding sessions to improve Claude, the transcribed text may be used in accordance with your privacy settings." https://privacy.claude.com/en/articles/10067979 （確認日 2026-10-26）
[^ios]: Anthropicヘルプ「Use Claude app intents, shortcuts, and widgets on iOS」。"The features described in this guide are available on iOS 18 and above." / "You can use this intent on its own to quickly ask Claude questions or give it tasks without opening the Claude app." / "The Claude widget provides quick access to chat and voice features directly from your Home Screen or Today View." https://support.claude.com/en/articles/10263469 （確認日 2026-10-26）
[^lock]: Anthropicヘルプ「Access Claude for iOS on your Lock Screen, Control Center, and Action button」。"Quickly access Claude for iOS functionality from your Lock Screen, Control Center, or Action button on iOS." https://support.claude.com/en/articles/10302511 （確認日 2026-10-26）
[^android]: Anthropicヘルプ「Use the Claude widget on Android」。"The Claude Android widget is available on Android 8.0 Oreo and above." / "Note: All interactions started through the widget will count toward your usage limit." https://support.claude.com/en/articles/10534883 （確認日 2026-10-26）
[^ios-apps]: Anthropicヘルプ「Use Claude with iOS apps」。"This feature is supported on all Claude plans and works with iOS system apps (Messages, Mail, Calendar, Maps, Reminders, and Location Services), as well as compatible third-party apps." / "Review the pre-filled content and make any changes if needed." / "Messages/Email: Claude does not read existing messages or emails, only creates new content." / "Contacts: Claude does not have direct access to your contacts." / "You’ll be prompted to approve the action with three options: Allow once, Always allow, or Don't allow." / "These permissions can be managed at any time in your device settings by going to Settings > Claude." / "Health features are currently in beta, require a Pro or Max plan, and are available in the US only." https://support.claude.com/en/articles/11869619 （確認日 2026-10-26）
[^android-apps]: Anthropicヘルプ「Use Claude with Android apps」。"This feature is supported on all Claude plans and works with your device's native and third-party apps" / "Reminders: These are exclusively available on Claude for iOS, so Claude can’t create and manage reminders on Android." / "These permissions can be managed at any time in your device settings by going to Settings > Apps > Claude > Permissions." https://support.claude.com/en/articles/11869629 （確認日 2026-10-26）
[^quick]: Anthropicヘルプ「Use quick entry with Claude Desktop on Mac」。"Quick entry is available to all Claude users (free, Pro, Max, Team, and Enterprise plans) using Claude Desktop on macOS." / "Instant access: Double-tap the Option key to open Claude from any app." / "Visual context: Capture screenshots or click application windows to share what you're working on." / "The voice dictation shortcut is disabled by default because it takes over your Caps Lock key." / "Claude Desktop needs to be running on your Mac, but it can run in the background." / "Screen recording: Required to capture screenshots and share application windows." / "You can review or change these permissions in System Settings > Privacy & Security." https://support.claude.com/en/articles/12626668 （確認日 2026-10-26）
[^cowork-voice-old]: 同じヘルプには、Cowork（[第8章](08-cowork.md)）では音声入力だけが使えて音声モードは使えない、という文もあります。
[^voice-settings-name]: ヘルプは「設定」→「機能」と案内しています。画面によって異なることがあります。
