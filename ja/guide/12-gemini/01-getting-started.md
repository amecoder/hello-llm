# 第1章 はじめに — 使う場所、ログイン、料金プランと利用上限

> **一言まとめ**: Geminiは、Googleアカウント1つで、Web・スマホアプリ・パソコンアプリで使えます。別に登録するものはなく、
> すでに使っているGoogleアカウントでログインすれば大丈夫です。無料で始めて、上限によく足りなくなったときだけ有料プランを考えましょう。

画面は2026年10月のWeb版が基準で、画像は有料プラン（Google AI Pro）の韓国語画面です。無料アカウントやスマホアプリは、メニューが少し違うことがあります。

## Geminiとは何で、どこで使うか

Gemini（ジェミニ）は、Googleが作ったAIサービスです。ステップ1で学んだ**LLM**（大規模言語モデル、[ステップ1 1章](../00-common/01-what-is-llm.md)）で動いています。
ステップ1で学んだ上手な頼み方は、Geminiにもそのまま通用します。この章では、Geminiというサービスに入る方法だけを扱います。

使う場所は、Web、スマホアプリ、パソコンアプリです。どこで使っても、同じGoogleアカウントで入ります。

| 使う場所 | 開き方 | 必要なもの |
|---|---|---|
| Web | ブラウザでgemini.google.com | Chrome・Safari・Firefox・Opera・Edge |
| Androidアプリ | Google Playで入手 | Android 9以上、RAM 2GB以上 |
| Macアプリ | gemini.google/macで入手 | macOS 15以上、Appleチップ |
| Windowsアプリ | gemini.google/desktopで入手 | Windows 10以上 |

出典: Googleヘルプ[^start][^mobile][^mac][^windows]

iPhone・iPadでは、App StoreからGeminiアプリを入手すれば大丈夫です。[^mobile]
初めてなら、Webから始めてみましょう。インストールするものがないので、いちばん簡単です。

使うには、2つの条件があります。

- **対応している国**にいる必要があります。韓国は、Webアプリとスマホアプリの対応国の一覧に入っていて、韓国語にも対応しています。[^where][^mobile]
- **満13歳以上**である必要があります（個人アカウントの場合。国によって基準の年齢が違うことがあります）。会社のアカウントは満18歳以上です。[^signin]

ただし、有料プランと一部の機能（カスタマイズ、ほかのAIからのインポートなど）は、**満18歳以上**の人だけが使えます。[^plans][^customize]
子ども用アカウントのように、Family Link（家族管理機能）で管理されているアカウントは、WebでGeminiを使えません。スマホアプリは、保護者がFamily Linkの設定で子どもの利用をオフにできます。[^signin]

初めて入ったら、こう聞いてみましょう。

```
あなたはどんなことで手伝ってくれますか？ 会社員がすぐに使える例を5つだけあげてください。
```

<Quiz id="ch301-where" />

## Googleアカウントでログインする

Geminiには、別に登録する手続きはありません。**GmailやYouTubeで使っているGoogleアカウント**でログインすれば大丈夫です。[^start]
gemini.google.comに入って、右上の「ログイン（로그인）」を押しましょう。[^signin]

![ログインしていないgemini.google.comの最初の画面。中央に「개인 AI 어시스턴트인 Gemini를 만나 보세요」（パーソナルAIアシスタントのGeminiに会いましょう）と入力欄「Gemini에게 물어보기」（Geminiに聞く）、入力欄の右にモデル表示「Flash-Lite」、左のサイドメニューに「활동을 저장하려면 로그인하세요.」（アクティビティを保存するにはログインしてください。）、右上と左下に「ログイン（로그인）」ボタンがある](../../../guide/12-gemini/assets/shot-01-logged-out.png)

ログインする前の画面です。サイドメニューに「활동을 저장하려면 로그인하세요.」（アクティビティを保存するにはログインしてください。）という案内が表示され、モデルは「Flash-Lite」に決まっています。[^screen-out]

ログインしなくても、Webでは簡単な質問くらいはできます。でも、できないことが多くあります。[^start]

| ログインしない | ログインする |
|---|---|
| 文章で質問して答えをもらう | 文章で質問して答えをもらう |
| 過去の会話を見返す ✗ | 過去の会話を見返す |
| ファイルのアップロード・画像の作成 ✗ | ファイルのアップロード・画像の作成 |
| GmailやDriveなどのGoogleアプリとの連携 ✗ | Googleアプリとの連携 |

出典: Googleヘルプ[^start]

会話を残して見返したいなら、ログインしましょう。Androidのスマホアプリは、最初からログインしないと使えません。[^start]

ログアウトするには、左のメニューでプロフィール写真（または名前の頭文字）を押して「ログアウト（로그아웃）」を選びます。[^signin]
複数人で使うパソコンなら、使い終わったら必ずログアウトしてください。ログインしたままにしておくと、次の人がサイドメニューから自分の会話を開けてしまいます。

<Quiz id="ch301-login" />

## 料金プランを一目で見る

Geminiにも、無料からいくつかの**料金プラン**（払う金額によって、使える機能や量が違う利用方法）があります。
有料プランはGoogle AIプランと呼ばれ、**Google One**（Googleの有料サブスクリプションサービス）で登録します。[^upgrade]

| プラン | 月額（韓国） | 使用量 | ストレージ |
|---|---|---|---|
| 無料 | ₩0 | 基本 | — |
| Google AI Plus | ₩7,500 | 基本の2倍 | 400GB |
| Google AI Pro | ₩29,000 | 基本の4倍 | 5TB |
| Google AI Ultra | ₩119,000から | Proの5倍または20倍 | 20TBから |

出典: Googleプランページ（大韓民国）とヘルプ[^plans-screen][^limits]

注目したい点が1つあります。Google AIプランには、**Googleのストレージ**がついています。この容量は、Drive・Gmail・Googleフォトが共用します。[^upgrade]
そのため、写真やメールのためにすでにストレージを買って使っているなら、プランを選ぶときに一緒に考えましょう。

Ultraは2種類です。「Ultra 5倍」（月₩119,000、20TB）と「Ultra 20倍」（月₩300,000、30TB）です。[^plans-screen]
価格は変わることがあり、期間限定の割引もよくあります。支払う前に、[プランのページ](https://one.google.com/about/google-ai-plans/)で自分で確認してください。

### プランごとに何が違うか

数字よりも、**「何が変わるのか」**を知っておくと選びやすくなります。

| 変わるもの | 無料 | 有料 |
|---|---|---|
| **使用量** | 基本 | Plusは2倍、Proは4倍[^limits] |
| **一度に読む量** | 約3万2千トークン | Plusは12万8千、Pro・Ultraは100万トークン[^limits] |
| **モデルを自分で選ぶ** | 選べない | 選べる（[2章](02-screen-tour.md)）[^models] |
| **いちばん大きなモデル**（Argon） | 使えない | Pro・Ultra[^plans] |

**一度に読む量**は、ステップ1で学んだ[コンテキストウィンドウ](../00-common/01-what-is-llm.md#_3-一度に見ることができる量に限界がある-—-「コンテキストウィンドウ」)です。トークンは、AIが文章を数える単位です。
100万トークンなら、文章で約1,500ページを一度に読めます。[^limits] 長い報告書や本1冊をまるごとアップロードして質問したいときに、差が出ます。

Proプランをファミリープランとして使うと、家族のメンバーも追加の費用なしでAI機能を使えます。[^plans]

<Quiz id="ch301-plans" />

## 利用上限 — 5時間・週間・読む量

Geminiの上限は、**「1日に何回」のような回数ではなく、使った量で数えます。** 質問がどれだけ複雑か、どのモデルと機能を使うか、会話がどれだけ長いかを合わせて数えます。[^limits]
使った量は**5時間ごとに**回復し、別に**週間の上限**があります。[^limits]

どんなことが使用量を多く使うかを知っておくと、節約できます。[^limits]

| すること | 使う量 |
|---|---|
| 短い質問1つ | とても少ない |
| 長く続いた会話 | ふつう |
| Deep Research（長い調査レポート） | 多い |
| 画像・音楽・動画の作成 | 多い（動画がいちばん多い） |

出典: Googleヘルプ[^limits]

長く続いた会話がより多く使うのには、理由があります。Geminiは、答えるたびに前の会話を読み直します。[^limits]
だから、**話題が変わったら新しいチャットを開きましょう。** 長い会話を読み直さなくてよくなるので、使用量が減ります（[ステップ1 6章](../00-common/06-conversation.md#いつ新しい会話を始めるか)）。[^limits]

上限に近づくと通知が表示され、上限に達すると、いつ回復するかを教えてくれます。[^limits]
有料プランなら、上限に達しても、軽いモデル（Flash-Lite）で会話を続けられます。無料なら、回復するまで待てば大丈夫です。[^limits]
無料アカウントは、人が集中する時間帯に、Deep Researchなどの機能を一時的に使えないこともあります。[^limits]

どれだけ使ったかは、左下の「設定（설정）」→「使用量の上限（사용량 한도）」で見られます。[^limits][^screen]

![設定→「使用量の上限（사용량 한도）」画面。タイトルの横にプラン表示「PRO」、①「現在の使用量（현재 사용량）」のバーと「오후 2:55에 초기화」（午後2:55にリセット）、②「週間の上限（주간 한도）」と「11월 1일 오후 7:55에 초기화」（11月1日午後7:55にリセット）、③「AI Ultra(으)로 사용량 5배 늘리기 · ₩119,000/월」（AI Ultraで使用量を5倍に · 月₩119,000）と「アップグレード（업그레이드）」ボタンに赤い番号がついている](../../../guide/12-gemini/assets/shot-07-usage-marked.png)

有料プラン（Pro）の画面です。**赤い番号は、下のリストの番号と同じ場所です。**[^screen]

- ① 「現在の使用量」: 5時間ごとに回復する使用量です。どれだけ使ったかと、いつ回復するかの時刻が表示されます。
- ② 「週間の上限」: 1週間単位の使用量です。回復する日付と時刻が別に表示されます。
- ③ より上のプランに上げるための案内です。

たとえば、質問を3回に分けて送らず、こんなふうにまとめてみましょう。一度に送ると、前の会話を読み直す回数が減って、使用量を節約できます。

```
次の3つに、一度に答えてください。
1. この議事録を5行で要約してください。
2. 決まったことと担当者を表にまとめてください。
3. 参加者に送る短いお知らせメールの下書きを書いてください。
（議事録を貼り付け）
```

<Quiz id="ch301-limits" />

## 有料に変える前に知っておくこと

最初から有料で始める必要はありません。**無料で始めて、上限によく引っかかるようになったら上げる**のが、いちばん無難です。

有料に変える道筋は次のとおりです。[^upgrade]

1. gemini.google.comの左下にある「設定」を押します。
2. 「購読を見る（구독 보기）」（プランのないアカウントに表示される名前）を押して、ほしいGoogle AIプランを選びます。
3. 支払い方法を選ぶか、新しく入力して購読します。

支払いはGoogle Oneで処理されます。そのため、プランの変更や解約をする場所もGoogle Oneです。[^upgrade]

![左下の歯車「設定」を押すと開くメニュー。①「アカウント（계정）」のまとまり（「使用量の上限」「購読の管理（구독 관리）」「Google AI Ultra(으)로 업그레이드」）、②「環境設定（환경설정）」のまとまり、③「データとプライバシー（데이터 및 개인 정보 보호）」のまとまり、④歯車の「設定」ボタンに赤い番号がついている。名前は例として変えた画面である](../../../guide/12-gemini/assets/shot-06-settings-marked.png)

名前と会話のタイトルは、例として変更した画面です。④の歯車を押すとメニューが開き、いちばん上の①「アカウント」のまとまりに「使用量の上限」と「購読の管理」があります。[^screen] 残りのまとまりは[2章](02-screen-tour.md)で扱います。

支払う前に、次のことは必ず知っておいてください。

- **解約はいつでもできます。**[^plans] 「設定」→「購読の管理」に入り、Google Oneの設定で「メンバーシップを解約（멤버십 취소）」を押します。[^upgrade][^screen]
- **プランの変更もGoogle Oneで行います。** 「メンバーシップを管理」→「メンバーシッププランを変更」で、上げたり下げたりします。[^upgrade]
- **プランが終わると、ストレージも一緒に減ります。** ヘルプは、Proを例にあげて、増えたDrive・Gmail・フォトのストレージや、GmailやDocsの中のGeminiなどの特典を使えなくなると案内しています。[^upgrade] ストレージをたくさん使っていたなら、解約する前に確認してください。
- **有料が終わると、Proで新しい会話を始めたり、Proで作った会話を続けたりできません。**[^upgrade]
- **会社・学校のアカウントは、このプランに登録できません。** 個人のGoogleアカウントだけが登録できます。[^plans]

どのプランが合っているかわからないなら、Geminiに自分の使い方を伝えて聞いてみましょう。ただし、料金や条件は、AIの答えではなくプランのページで確認してください（[ステップ1 9章](../00-common/09-safety.md)）。

```
私は1日にGeminiを3〜4回、おもに会社のメールの推敲と議事録の要約に使っています。
ときどきPDFファイルをアップロードして要約もします。無料で使ってみて、どんなときに有料が必要になるのか、
自分で判断できる基準を3つ教えてください。
```

<Quiz id="ch301-billing" />

## うまくいかないときに最初にすること

答えが返ってこなかったり、エラーの文言が出たり、ログインできなかったりすることがあります。そんなときは、次の順番で試してみましょう。[^errors]

1. **同じ質問をもう一度送ってみましょう。** それでもだめなら、新しいチャットでやってみます。
2. **アップロードしたファイルがあれば外して**、文章だけで聞いてみましょう。
3. **インターネット接続を確認して、5分ほど待って**みましょう。人が集中すると、少しの間使えないことがあります。
4. **ページを更新するか、アプリを再起動**しましょう。

よく見かける文言は、意味を知っておくと慌てずにすみます。

| 文言 | 意味 | 試すこと |
|---|---|---|
| 「문제가 발생했습니다」（問題が発生しました）（ログインのとき） | このアカウントでは、いまは使えない[^signin] | 年齢・アカウントの種類を確認 |
| Too many requests… | 混雑している、または一時的に上限に達した[^errors] | 数分後にもう一度 |
| エラー1060 | この国では使えないかもしれない[^errors] | 対応国を確認 |
| I cannot fulfill this request | 必要なアプリの連携がオフ[^errors] | 連携したアプリを確認 |

ログインのときに「문제가 발생했습니다」（問題が発生しました）と表示されたら、アカウント側の問題かもしれません。住んでいる場所、年齢、アカウントの種類（会社・学校のアカウントなど）が理由のことがあります。[^signin]

それでもだめなら、フィードバックを送りましょう。「設定」→「フィードバックを送信（의견 보내기）」で書き、スクリーンショットを添付できます。[^feedback][^screen]
**フィードバックを送ると、その会話とアップロードしたファイルが一緒にGoogleに送られます。**[^feedback] 個人情報が入った会話なら、その部分が見えないようにしましょう。

<Quiz id="ch301-trouble" />

## 実際にやってみよう

1. gemini.google.comに入って、ふだん使っているGoogleアカウントでログインする。
2. 「あなたはどんなことで手伝ってくれますか？」と聞いてみる。
3. 「設定」→「使用量の上限」を開いて、いまのプランと使った量を確認する。
4. スマホにGeminiアプリをインストールして同じGoogleアカウントでログインし、パソコンで交わした会話が表示されるか確認する。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「私は町内の読書会の幹事です。来月の会を準備するときにやることを、リストにしてください。」と聞いてみます。受け取ったリストは、課題を終えたあと、自分が実際にしたことと比べてみましょう。

## まとめ

- Geminiは、Web（gemini.google.com）・スマホアプリ・Mac・Windowsアプリで、同じGoogleアカウントで使う。韓国と韓国語に対応している。
- 別に登録せず、Googleアカウントでログインする。ログインしないと、過去の会話・ファイルのアップロード・画像の作成は使えない。
- 個人アカウントは満13歳以上だが、有料プランと一部の機能は満18歳以上。
- 有料はGoogle AI Plus・Pro・Ultraで、Google Oneで登録する。Googleのストレージがついている。
- 使用量は5時間ごとに回復し、週間の上限が別にある。話題が変わったら新しいチャットを開いて節約する。
- 解約は「設定」→「購読の管理」でGoogle Oneに移動して行う。解約すると、増えたストレージもなくなる。
- エラーが出たら、再送信→新しいチャット→ファイルを外す→5分待つ、の順に試す。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Google Account | グーグル・アカウント（Googleアカウント） | GmailやYouTubeなどで共通して使うGoogleのログインアカウント |
| Google One | グーグル・ワン | Googleの有料サブスクリプションサービス。ストレージとAIプランを販売している |
| Google AI Plan | グーグル・エーアイ・プラン（Google AIプラン） | Plus・Pro・Ultraの3種類のGemini有料プラン |
| Usage Limit | ユーセージ・リミット（使用量の上限） | 5時間・1週間ごとに回復する、使える量 |
| Context Window | コンテキスト・ウィンドウ | 一度にまとめて読める量。トークンで数える |
| Token | トークン | AIが文章を分けて数える小さな単位 |
| Family Link | ファミリー・リンク | 保護者が子どものGoogleアカウントを管理する機能 |

<ChapterDone :chapter="301" />

次の章: [2章 画面を見てみよう](02-screen-tour.md)

[^screen-out]: ログインしていないブラウザでgemini.google.comを直接確認。サイドメニュー「활동을 저장하려면 로그인하세요.」、入力欄のモデル表示「Flash-Lite」、右上の「Gemini 정보」「Gemini 앱 다운로드」「구독」「비즈니스용」「로그인」。（確認日 2026-10-31）
[^screen]: Gemini Web画面（Google AI Pro、韓国語）で直接確認。左下の「설정」メニューの「계정」のまとまりに「사용량 한도」「구독 관리」、「사용량 한도」画面（gemini.google.com/usage）の「현재 사용량」・「주간 한도」とそれぞれのリセット時刻、「데이터 및 개인 정보 보호」のまとまりに「의견 보내기」。（確認日 2026-10-30、画像は2026-10-31）
[^plans-screen]: Google Oneプランページ（地域「大韓民国」）をログインしたブラウザで直接確認。Google AI Plus ₩7,500/月・400GB・"2배 더 많은 Gemini 액세스"、Google AI Pro ₩29,000/月・5TB・"4배 더 많은 Gemini 액세스"、比較表のUltra 5倍 月₩119,000・20TBとUltra 20倍 月₩300,000・30TB。https://one.google.com/about/google-ai-plans/ （確認日 2026-10-30）
[^start]: Google ヘルプ、「Use Gemini Apps」. "You can use some features in Gemini Apps without signing in." / "The Gemini mobile app on an Android device." / "Accessing past chats: Your chat history with Gemini Apps won’t be available." / "Other features that require account authentication: Features like image generation, Gems, and file upload won’t be available." / "Integration with other Google services: Features that rely on Connected Apps (like Google Workspace, Google Photos, or other Google services) won’t be available." / "To use gemini.google.com, you need access to a supported browser: Chrome, Safari, Firefox, Opera, or Edgium." https://support.google.com/gemini/answer/13275745 （確認日 2026-10-30）
[^signin]: Google ヘルプ、「What you need to sign in to Gemini Apps」. "At the top right, select Sign in." / "Select Sign out." / "You must be 13 (or the applicable age in your country) or over to use Gemini with a personal or school Google Account and 18 or over to use Gemini with a work account." / "You still can’t access the Gemini web app with a Google Account managed by Family Link." / "If you get a “Something went wrong” message while trying to access or sign in to the Gemini web app, your account can't access the app at the moment." https://support.google.com/gemini/answer/13278668 （確認日 2026-10-30）
[^where]: Google ヘルプ、「Where you can use the Gemini web app」. "The Gemini web app is currently available in more than 70 languages and over 230 countries and territories." 言語の一覧に"Korean"、国の一覧に"South Korea"が含まれる。 https://support.google.com/gemini/answer/13575153 （確認日 2026-10-30）
[^mobile]: Google ヘルプ、「Gemini mobile app availability」. "Gemini mobile apps are currently available in multiple languages and more than 150 countries." 「Where you can download the Gemini app from the Google Play Store」 の一覧に"South Korea"が含まれる。 "On iOS: The Gemini app." / "Tip: Android Go doesn't support the Gemini mobile app." https://support.google.com/gemini/answer/14579026 （確認日 2026-10-30）
[^mac]: Google ヘルプ、「Use the Gemini app on Mac」. "A Mac running macOS Sequoia (15.0) or later with Apple Silicon, 8 GB of RAM or more, and at least 200 MB of available disk space for installation." / "Open your web browser and go to gemini.google/mac." https://support.google.com/gemini/answer/17011627 （確認日 2026-10-30）
[^windows]: Google ヘルプ、「Use the Gemini app for Windows」. "A PC running Windows 10 or later." / "Go to gemini.google/desktop on your PC." https://support.google.com/gemini/answer/18263854 （確認日 2026-10-30）
[^customize]: Google ヘルプ、「Customize your Gemini chats experience」. "Customize is available for signed-in users 18 and older using Gemini Apps in an available language and region." 他のAIからのインポートも、満18歳以上の個人アカウントのみ可能: 「Import from other AI platforms to Gemini Apps」 https://support.google.com/gemini/answer/16868299 https://support.google.com/gemini/answer/18736938 （確認日 2026-10-30）
[^plans]: Google Oneプランページ（韓国語）。 "Google AI 요금제에 포함된 Gemini 앱과 Gmail, Docs 등의 Gemini는 만 18세 이상만 이용할 수 있습니다." / "개인 Google 계정만 Google AI 요금제에 가입할 수 있습니다." / "복잡한 워크플로에서 최첨단 성능을 발휘하는 Gemini 4 Argon에 대한 액세스" / "Google AI Pro 요금제를 사용하는 가족 요금제 구성원은 추가 비용 없이 AI 혜택과 기능을 이용할 수 있습니다." / "언제든지 취소할 수 있습니다." ヘルプ（16275805）はプランの年齢を大半の国で満13歳と書いており、食い違っている。このガイドはより厳しい側（18歳）を書いた。 https://one.google.com/about/google-ai-plans/ （確認日 2026-10-30）
[^limits]: Google ヘルプ、「Gemini Apps limits & feature availability」. "These limits factor in the complexity of your prompt, the models and features you use, and the length of your chat." / "Your limit refreshes every 5 hours until you reach your weekly limit." / "4x higher than standard limits" / "5x or 20x higher than AI Pro limits depending on your subscription" / "32k tokens" / "128k tokens" / "1 million tokens" / "For example, with a 1M token context window, Gemini can understand up to 1,500 pages of text or 30,000 lines of code." / "These require Gemini to re-read the previous conversation history to maintain context. As the chat gets longer, this requires more thinking power." / "Video generally requires the most usage." / "Start a new chat when you move to a new topic. This will help save usage because Gemini won’t have to re-read a long conversation history before creating a response." / "If you have a Google AI subscription and reach your limit, you can continue your conversation with Flash-Lite." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." / "Gemini Apps will notify you when you're close to your limit based on your plan's level." / "To view your usage limits:" https://support.google.com/gemini/answer/16275805 （確認日 2026-10-30）
[^models]: Google ヘルプ、「About Gemini models」. "If you have a Google AI plan you can manually switch models in both Chat Mode and Task Mode." https://support.google.com/gemini/answer/18648722 （確認日 2026-10-30）
[^upgrade]: Google ヘルプ、「Manage your Google AI plan from Gemini Apps」. "You can subscribe to a Google AI plan through Google One." / "Select the Google AI plan you want." / "When you subscribe to the plan, you’ll need to select or provide a form of payment." / "To upgrade: Select a plan under "Upgrade options."" / "You can cancel your plan in Google One settings." / 韓国語版の手順 "하단에서 설정 및 도움말 구독 보기를 클릭합니다."（現在プラン未加入） / "When your AI Pro plan ends, you’ll no longer have access to:" / 韓国語版 「Pro로 새 채팅 시작하기」「Pro로 생성된 채팅 이어서 하기」 / "Expanded storage across Drive, Gmail, and Photos" https://support.google.com/gemini/answer/14517446 （確認日 2026-10-30）
[^errors]: Google ヘルプ、「Troubleshoot error codes in Gemini Apps」. "Gemini Apps may not be available in your country or region." / "Wait a few minutes: If Gemini Apps are experiencing high traffic, wait 5 minutes and try your prompt again." / "High demand or usage limits: If you get "Too many requests in a short time period," Gemini Apps may be experiencing high traffic, or you may have reached a temporary usage limit." / "Connected Apps aren't turned on: If you get "I cannot fulfill this request" or "This feature only works with content that Gemini can access," the required connected app (such as Google Workspace) might not be connected." https://support.google.com/gemini/answer/18647528 （確認日 2026-10-30）
[^feedback]: Google ヘルプ、「Send feedback or report a problem with Gemini Apps」. "Enter your feedback. You can choose to add a screenshot to help us better understand the issue." / "When you submit feedback, the associated conversation, like your prompts and the Gemini app’s responses, is added as part of your feedback." https://support.google.com/gemini/answer/13275746 （確認日 2026-10-30）
