# 第1章 始め方 — 使う場所、登録、料金プランと利用上限

> **一言まとめ**: ClaudeはWeb・パソコンアプリ・スマホアプリで同じアカウントを使います。登録にはメールアドレス（またはGoogle・Appleアカウント）と
> スマホのSMS認証が必要です。無料で始めて、上限がたびたび足りなくなってから有料プランを考えれば大丈夫です。

画面は2026年10月のWeb版を基準にしており、画像は無料プランの画面です。スマホアプリやパソコンアプリではメニューの位置が少し異なる場合があります。

## Claudeとは何か、どこで使うか

Claude（クロード）はAnthropic（アンソロピック）という会社が作った**LLM**（大規模言語モデル、[ステップ1 第1章](../00-common/01-what-is-llm.md)）です。[^start]
ステップ1で学んだ上手な聞き方は、Claudeでもそのまま通用します。この章ではClaudeというサービスに入る方法だけを扱います。

使う場所は3つあります。どこで使ってもアカウントは1つです。

| 使う場所 | 開き方 | 必要なもの |
|---|---|---|
| Web | ブラウザで claude.ai | インターネットブラウザ |
| パソコンアプリ | ダウンロードページから入手 | macOS 13以上、Windows 10以上 |
| スマホアプリ | アプリストアから入手 | iOS 18以上、Android 8.0以上 |

出典: Anthropic ヘルプ[^start][^desktop][^ios][^android]

パソコンアプリはLinux（リナックス、パソコンのOSの1つ）でも**ベータ**（正式公開前のテスト段階）として使えます。[^desktop]
初めてならWebから始めてみましょう。インストールするものがなく、一番簡単です。

使うには2つの条件があります。[^start]

- **対応地域**（サービスを公式に提供している国）の中にいる必要があります。日本や韓国は対応地域の一覧に入っています。[^where]
- **満18歳以上**である必要があります。

スマホアプリを入手するときは、アプリストアで「Claude by Anthropic」を検索してください。[^ios][^android]
iPhoneのApp Storeには会社用の「Claude for Intune」もあります。会社から別に使うよう指示されていなければ、「Claude by Anthropic」を入手すれば大丈夫です。[^ios]
アプリが検索に出てこない場合は、非対応の地域・端末・OSバージョンである可能性があります。[^android]
新しい機能が自分のアプリにだけ見えないときは、アプリストアでアプリを手動でアップデートしてみてください。[^update]

初めて入ったら、こう聞いてみましょう。

```
あなたはどんな仕事を手伝ってくれますか？会社員がすぐに使える例を5つだけ挙げてください。
```

<Quiz id="ch201-where" />

## 登録してログインする

claude.ai にアクセスしてメールアドレスを入力してください。次に「メールで続ける（이메일로 계속하기）」を押せば大丈夫です。GoogleやAppleのアカウントがあれば、「Googleで続ける（Google로 계속하기）」「Appleで続ける（Apple로 계속하기）」を押しても構いません。[^signup][^screen-login]

![claude.ai ログイン前の最初の画面。「Googleで続ける（Google로 계속하기）」「Appleで続ける（Apple로 계속하기）」ボタン、「または（또는）」の下にメール欄と「メールで続ける（이메일로 계속하기）」、一番下に「デスクトップアプリをダウンロード（데스크톱 앱 다운로드）」がある](../../../guide/10-claude/assets/shot-14-login.png)

**Claudeにはパスワードがありません。** Claudeアカウント専用のパスワードは作れません。[^login]
メールで入ると、「Claude.aiにログインするためのセキュリティリンク（Claude.ai에 로그인하기 위한 보안 링크）」（Secure link to log in to Claude.ai）という件名のメールが届きます。そのメールの中のリンクを押すとログインできます。[^login]
パスワードを覚える必要がないので便利です。その代わり、**そのメールアカウントにアクセスできる必要**があります。

知っておくべき点が3つあります。[^login]

1. **リンクを別の端末で押すとコードが出ます。** たとえばパソコンでログインをリクエストし、メールはスマホで開いたとしましょう。するとスマホに認証コードが表示されます。そのコードを最初にログインをリクエストしたパソコンに入力してください。
2. **メールが届かないときは迷惑メールフォルダを見てください。** @mail.anthropic.com から届いたメールを探せば大丈夫です。
3. **どの端末でも同じメールアドレスで入ってください。** 普段使っているメールアドレスでログインすると、同じアカウントが開きます。

<Quiz id="ch201-login" />

## スマホのSMS認証

初めて登録するときは**携帯電話番号の認証**を受けます。対応地域の携帯電話番号を入力すると、**6桁の数字**のコードがSMSで届きます。[^phone]
この手順は**スキップできません。** すべての新規ユーザーが通ります。[^phone]

<!-- 스크린샷 필요: 휴대폰 번호 입력 화면과 「코드 확인」 화면 (웹) -->

入力する前に以下を確認してください。[^phone]

- **一般的な携帯電話番号のみ使えます。** インターネット電話（VoIP）の番号、Google Voice、アプリで作った番号、固定電話は使えません。
- **5分経ってもSMSが届かないときは**「再試行（다시 시도）」を押してください。
- **1つの番号で認証できるアカウントは3つまで**です。
- **一度認証した番号はあとから変更できません。** そのため、長く使う自分の番号で認証してください。一時的に借りた番号で認証すると、あとで変える方法がありません。

<Quiz id="ch201-phone" />

## 料金プランを一目で見る

Claudeにも無料から会社用まで、いくつかの**料金プラン**（支払う金額に応じて使える機能と量が変わる利用方式）があります。[^pricing]

| 料金プラン | 誰向けか | 料金（月額、米ドル） |
|---|---|---|
| Free（無料） | 初めて使ってみる人 | $0 |
| Pro | 毎日使う人 | $20（年払いの場合は月$17相当） |
| Max | とてもたくさん使う人 | 5x $100 · 20x $200 |
| Team · Enterprise | 会社単位で使うところ | 別途 |

出典: Anthropic 料金ページ・ヘルプ[^pricing][^pro][^max]

この価格は**米ドル基準**で、**税金は含まれていません。**[^pricing] 住んでいる国によってはその国の通貨で表示されることがあり、税金も国ごとに異なります。[^pro]
スマホアプリで決済すると、Webと価格が異なる場合があります。[^max] 決済する前に[料金ページ](https://claude.com/pricing)で直接確認してください。

### 料金プランごとに何が違うのか

数字よりも**「何が変わるのか」**を知っておくと選びやすくなります。

| 変わるもの | 無料（Free） | 有料（Pro・Max） |
|---|---|---|
| **利用量** | 基本 | Proは無料の5倍以上[^pricing] |
| **Web検索・ファイル作成** | できる[^pricing] | できる |
| **リサーチ**（長い調査レポート） | できない | できる（[第6章](06-search.md)）[^pricing] |
| **大きなモデル**（Opus） | 選べない | 選べる（[第2章](02-screen-tour.md)）[^pricing] |
| **Cowork**（仕事を丸ごと任せる） | できない | できる（[第8章](08-cowork.md)）[^desktop] |

無料プランに何が入っているかは、設定 →「請求（결제）」で直接見ることができます。

![設定 →「請求（결제）」画面。①「無料プラン · Claudeを試す（무료 플랜 · Claude 사용해 보기）」、② 無料プランに入っている機能一覧（チャット、Web検索機能、会話間のメモリ、ファイル作成およびコード実行、複雑な作業のための拡張思考など）、③ 右上の「プランをアップグレード（플랜 업그레이드）」ボタンに赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-billing-marked.png)

無料プランのWeb画面です。**赤い番号は以下のリストの番号と同じ場所を指しています。**

- ① 現在の料金プラン:「無料プラン（무료 플랜）」
- ② 無料プランに入っているもの: Web・iOS・Android・デスクトップでのチャット、コード生成とデータ可視化、文章の作成と修正、Web検索機能、会話間のメモリ、ファイル作成とコード実行、デスクトップ拡張機能、Slack・Google Workspace連携、コネクタ（他のサービスとつなぐ機能、[第7章](07-projects-tools.md)）、複雑な作業のための拡張思考[^screen]
- ③「プランをアップグレード（플랜 업그레이드）」: 有料に切り替えるボタン（下の「有料に切り替える前に知っておくこと」を参照）

リストにない機能が必要になったときに有料を考えてみてください。そうすれば使わない機能にお金を払わずに済みます。

MaxはProよりも利用量が5倍（5x）または20倍（20x）です。より長い回答を受け取ることができ、新しい機能を先に試せます。[^pricing]

支払い周期も異なります。Proは月払い・年払いから選べます。**Maxは月払いのみ**です。[^max]
年払いの割引以外に、Pro・Maxに常時適用される割引価格はありません。たまに期間限定のキャンペーンがあるだけです。[^pro]

<Quiz id="ch201-plans" />

## 利用上限 — 5時間・週間・長さ

Claudeには**「1日何回」のような決まったメッセージ数はありません。** どれくらい使えるかは、会話の長さと複雑さ、選んだモデル、使う機能によって変わります。[^pricing]
その代わりに上限が3つあります。

| 上限 | 意味 | 誰向けか |
|---|---|---|
| **セッション上限** | 5時間ごとに回復する利用量 | すべての料金プラン |
| **週間上限** | 1週間ごとに回復する利用量 | 有料プラン |
| **長さ上限** | 1つの会話に入れられる量 | すべての料金プラン |

出典: Anthropic ヘルプ[^start][^limits]

**セッション上限と週間上限**は、使った量を測るバケツのようなものです。週間上限はアカウントごとに決まった曜日・時刻に回復します。[^pro]
Web・パソコンアプリ・スマホアプリで使った量は**1つのバケツに合わせて**数えます。スマホに移っても上限が新しく増えるわけではありません。[^limits][^pricing]

上限が近づくと「セッション制限に近づいています（세션 제한에 접근 중）」や「週間制限に近づいています（주간 제한에 접근 중）」という警告が出ます。[^errors] 上限に達すると、いつ再び使えるか時刻を教えてくれます。[^errors]
そのときはその時刻まで待つか、料金プランを上げれば大丈夫です。[^limits] 有料プランは設定の「使用量（사용량）」（Usage）画面で、どれくらい使ったかをバーで見ることができます。[^best][^usage-name]

**長さ上限**は、Claudeが1つの会話で扱える量です。ステップ1で学んだ[コンテキストウィンドウ](../00-common/01-what-is-llm.md#_3-一度に見ることができる量に限界がある-—-「コンテキストウィンドウ」)と同じ意味です。[^limits]
「メッセージがこのチャットの長さ制限を超えています（메시지가 이 채팅의 길이 제한을 초과합니다）」で始まる案内が出たら、ファイルを減らすか新しい会話を始めてください。[^errors]
会話がとても長くなると、Claudeが前半を自動で要約しながら続けることがあります。このとき「思考を整理中（생각을 정리 중）」という表示が見えます。[^limits]
このように長い会話は利用量をより多く消費します。話題が変わったら[新しい会話](../00-common/06-conversation.md#いつ新しい会話を始めるか)を開くほうがよいでしょう。[^limits]

上限を節約するコツもあります。[^best]

- **関連する質問は1つのメッセージにまとめてください。** 3回に分けて聞くより、1回で聞くほうが消費を抑えられます。
- **送る前に一度読み返してください。** 聞き直す回数が減ります。
- **よく使う資料はプロジェクトに入れておいてください**（[第7章](07-projects-tools.md)）。プロジェクトの資料は再利用するときに上限の消費が少なくなります。

たとえば質問を別々に3回送るのではなく、このようにまとめてみましょう。

```
次の3つに一度に答えてください。
1. この議事録を5行で要約してください。
2. 決まった作業と担当者を表に整理してください。
3. 参加者に送る短い案内メールの下書きを書いてください。
（議事録を貼り付け）
```

::: details 返ってくる回答はだいたいこんな感じ（例 — 押して開く）
このガイドが作った例です。実際の回答はサービスやその時々の状況によって異なります。

> **1. 5行要約**
> - 来月のイベントの日程を○月○日に決めました。
> - イベントの場所は（議事録の場所）にすることにしました。
> - 予算は前回と同じにすることにしました。
> - 場所の予約と案内文の作成の担当者を決めました。
> - 次回の会議は○月○日に開くことにしました。
>
> **2. 決まった作業と担当者**
>
> | やること | 担当者 |
> |---|---|
> | 場所の予約 | （議事録の名前） |
> | 案内文の作成 | （議事録の名前） |
>
> **3. 案内メールの下書き**
> 件名: ○月○日 会議結果のご案内
> お疲れ様です。本日の会議で決まったイベント内容と担当業務を整理してお送りします。担当される業務は次回の会議までにご準備をお願いいたします。

**うまく受け取れたか確認してみましょう**: 3つの回答が番号どおりすべて届いたか？ 要約が本当に5行か？ 表のやることと担当者が議事録と同じか？ 議事録にない内容を作り出して入れていないか？ 参加者にそのまま送れそうな短いメールの下書きが届いたか？

:::

<Quiz id="ch201-limits" />

## 有料に切り替える前に知っておくこと

最初から有料で始める必要はありません。**無料で始めて、上限にたびたび引っかかるようになってから上げる**のが一番無難です。

**Webで申し込む方法**は次のとおりです。[^signup]

1. 左下の自分の名前（または名前の頭文字）を押し、「設定（설정）」を選びます。
2. 「請求（결제）」に進み、「プランをアップグレード（플랜 업그레이드）」を押します（上の請求画面の③）。[^screen][^billing-name]
3. 月払い・年払いの中から支払い周期を選び、支払い情報を入力したあと「購読（구독）」を押します。

![左下の名前「キム・ハナ · Free（김하나 · Free）」を押すと開くアカウントメニュー。一番上のメールアドレスの下に①「設定（설정）」、②「言語（언어）」、③「ヘルプ（도움 받기）」、④「プランをアップグレード（플랜 업그레이드）」、⑤「アプリと拡張機能をダウンロード（앱 및 확장 프로그램 다운로드）」に赤い番号がついている](../../../guide/10-claude/assets/shot-07-account-menu-marked.png)

名前・メールアドレスは例として差し替えた画面です（無料プラン）。アカウントメニューには①「設定（설정）」のほかにも④「プランをアップグレード（플랜 업그레이드）」がすぐに見えます。[^screen] どちらから入っても、決済前に料金と条件をもう一度読んでおきましょう。

スマホアプリでは右上の名前の頭文字を押し、「Proにアップグレード（Pro로 업그레이드）」を選びます。アプリストア決済（アプリ内課金）で進みます。[^ios-pro][^android-pro]

決済前に以下の内容は必ず知っておいてください。

- **サブスクリプションは自動で継続されます。** デフォルトで支払い期間が終わるたびに自動更新されます。[^signup]
- **解約は申し込んだ場所で行います。** Web・パソコンアプリで申し込んだ場合は、設定 →「請求（결제）」の「解約（취소）」ボタンを押します。[^billing-name] スマホアプリで申し込んだ場合は、アプリの名前の頭文字 →「請求（청구）」→「サブスクリプションの管理（구독 관리）」に進みます。このとき決済はAppleやGoogleが処理します。[^cancel]
- **決済日の24時間前までに解約してください。** そうすれば次回の決済金額が引き落とされません。解約は現在の支払い期間が終わるときに適用されます。[^cancel]
- **アプリを消してもサブスクリプションは続きます。** スマホからアプリを削除しても、サブスクリプションは自動で解約されません。[^ios]
- **解約しても会話は残ります。** チャット・プロジェクト・ファイルはそのままで、期間が終わると無料プランに切り替わります。[^pricing]
- **返金は原則としてできません。** 規約やその国の法律が定めた場合のみ例外となります。[^pricing]
- **Web決済はクレジットカード・デビットカードのみ**受け付けます。[^billing]
- **決済日は自分で変更できません。** 変更したい場合は、一度解約したあと希望の日に再度申し込む必要があります。[^billing]
- **決済したのに無料と表示されても、もう一度決済しないでください。** まず別のメールアドレスでログインしていないか見てください。決済が失敗していないかも確認してください。[^billing]

領収書は設定 →「請求（결제）」で見ることができ、メールでも届きます。メールボックスで "Your receipt from Anthropic" を検索してみてください。[^billing]

どの料金プランが合っているかわからないときは、Claudeに自分の使い方を教えて聞いてみましょう。ただし、料金と条件はAIの回答ではなく料金ページで確認してください（[ステップ1 第9章](../00-common/09-safety.md)）。

```
私は1日にClaudeを3〜4回、主に会社のメールの手直しと議事録の要約に使っています。
たまにPDFファイルをアップロードして要約もします。無料で使ってみて、どんな瞬間に有料が必要になるのか、
自分で判断できる基準を3つ教えてください。
```

<Quiz id="ch201-billing" />

## うまくいかないときにまず試すこと

回答が返ってこなかったり、エラー文言が出たり、ログインできなかったりすることがあります。そんなときは以下の順番で試してみてください。

1. **「予期しない容量の制約により…（예상치 못한 용량 제약으로 인해…）」という文言は故障ではありません。** 人が集まって混雑しているという意味です。数分後にもう一度試してみてください。このような混雑はサービスステータスページには載りません。[^errors]
2. **本当の故障かどうかは status.claude.com**（Anthropic サービスステータスページ）で確認してください。[^errors]
3. **ログインエラーが出たら** VPN（インターネットの住所を変えるプログラム）とブラウザの拡張機能をオフにしてください。ブラウザのキャッシュとCookie（訪問したサイトが残した一時記録）を消すのも1つの方法です。[^errors]
4. **ログインメールが届かないときは**迷惑メールフォルダで @mail.anthropic.com を探してみてください。[^login]

それでも解決しない場合は、カスタマーサポートに聞いてみましょう。**電話サポートはなく、文章でのみ**やり取りします。[^support]

- **ログインしている状態なら**左下の自分の名前（または名前の頭文字）→「ヘルプ（도움 받기）」を押してください（上のアカウントメニュー画像の③）。[^screen] **Fin**（AnthropicのAIサポートボット）との会話が始まります。Finと会話しても利用上限は減りません。[^support]
- **ログイン自体ができないなら**ヘルプセンター（support.claude.com）の右下のメッセージアイコンを押し、「ログインできません（로그인할 수 없습니다）」を選んでください。[^support]
- **有料（Pro・Max）なら** Finが解決できなかった問題を人間のサポートチームが引き継いで見てくれます。無料の場合はほとんどがヘルプ記事とFinまでの対応となります。[^support]
- **同じ問題で問い合わせをもう1つ開かないでください。** 元の会話に返信すれば大丈夫です。返信はメッセンジャーとアカウントのメールの両方に届くので、ウィンドウを閉じても構いません。[^support]

画面をキャプチャして送るときは、他の個人情報が見えないようにしてください。

<Quiz id="ch201-trouble" />

## 自分でやってみる

1. claude.ai にアクセスしてメールアドレスで登録し、ログインメールのリンクを押して入る。メールが届かないときは迷惑メールフォルダを見る。
2. スマホのSMS認証を完了する。長く使う自分の番号かもう一度確認する。
3. 「あなたはどんな仕事を手伝ってくれますか？」と聞いてみる。
4. スマホに「Claude by Anthropic」アプリをインストールして同じメールアドレスでログインし、パソコンで交わした会話が見えるか確認する。

**続く課題**（[読書会の準備をする](../00-common/practice-kit.md)）:「私は地域の読書会の幹事です。来月の集まりを準備するときにやるべきことをリストにしてください。」と聞いてみる。受け取ったリストは、課題を終えたあとに自分が実際にやったことと比べてみる。

## まとめ

- ClaudeはWeb（claude.ai）・パソコンアプリ・スマホアプリで同じアカウントを使う。満18歳以上、対応地域（日本・韓国を含む）で使える。
- 登録とログインはメールアドレスまたはGoogle・Appleアカウントで行う。パスワードの代わりにログインリンクが入ったメールを受け取る。
- 初めて登録するときにスマホのSMS認証を通る。一度認証した番号は変更できない。
- 料金プランはFree・Pro・Maxが個人用である。価格は米ドル・税別なので料金ページで確認する。
- 上限は5時間のセッション上限、（有料の）週間上限、1つの会話の長さ上限の3つである。決まったメッセージ数はない。
- サブスクリプションは自動更新される。申し込んだ場所で決済日の24時間前までに解約する。アプリを消してもサブスクリプションは続く。
- 「容量の制約」という文言は混雑である。本当の故障は status.claude.com で見る。サポートはアカウントメニュー「ヘルプ（도움 받기）」のFinから始める。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Supported Location | サポーテッド・ロケーション（対応地域） | サービスを公式に提供している国・地域 |
| Beta | ベータ | 正式公開前のテスト段階 |
| Plan | プラン（料金プラン） | 支払う金額に応じて機能と利用量が変わる利用方式 |
| Subscription | サブスクリプション（定期購読） | 毎月または毎年自動で決済される利用契約 |
| Session Limit | セッション・リミット（セッション上限） | 5時間ごとに回復する利用量 |
| Weekly Limit | ウィークリー・リミット（週間上限） | 有料プランで1週間ごとに回復する利用量 |
| Length Limit | レングス・リミット（長さ上限） | 1つの会話に入れられる量。コンテキストウィンドウと関係がある |
| VoIP | ブイオーアイピー | インターネットでかける電話。SMS認証には使えない |
| Fin | フィン | Anthropic カスタマーサポートのAIボット |

<ChapterDone :chapter="201" />

次の章: [第2章 画面を見て回る](02-screen-tour.md)

[^usage-name]: 韓国語ヘルプには「사용（使用）」と書かれている箇所もあります。
[^billing-name]: 韓国語画面の名前は「결제（決済）」ですが、英語ヘルプには「Billing」（請求）と書かれています。
[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。設定 →「請求（결제）」の「無料プラン · Claudeを試す（무료 플랜 · Claude 사용해 보기）」一覧と「プランをアップグレード（플랜 업그레이드）」、アカウントメニューの「設定（설정）」「言語（언어）」「ヘルプ（도움 받기）」「プランをアップグレード（플랜 업그레이드）」。(確認日 2026-10-26)
[^start]: Anthropic ヘルプ、「Get started with Claude」。"Claude is a large language model (LLM) built by Anthropic." / "Web: Visit claude.ai to chat with Claude in a web browser." / "You must be in one of our supported locations to access Claude." / "You must be at least 18 years old to use our services." / "there is a session-based usage limit that will reset every five hours." https://support.claude.com/en/articles/8114491 (確認日 2026-10-26)
[^where]: Anthropic ヘルプ、「Where can I access Claude?」。対応地域一覧に "South Korea" を含む。https://support.claude.com/en/articles/8461763 (確認日 2026-10-26)
[^desktop]: Anthropic ヘルプ、「Install Claude Desktop」。"Claude Desktop is available on macOS, Windows, and Linux (beta)." / "macOS: macOS 13 (Ventura) or higher" / "Claude Cowork is available for all paid plans (Pro, Max, Team, Enterprise)" https://support.claude.com/en/articles/10065433 (確認日 2026-10-26)
[^ios]: Anthropic ヘルプ、「Install Claude for iOS」。"You can install the Claude app onto your iOS device by navigating to the App Store and searching for “Claude by Anthropic”" / "If your organization hasn't asked you to use Claude for Intune, install Claude by Anthropic." / "We currently support iOS version 18.0 and above, and iPadOS 18.0 and above." / "your subscription will not be automatically canceled." https://support.claude.com/en/articles/9266462 (確認日 2026-10-26)
[^android]: Anthropic ヘルプ、「Install Claude for Android」。"We currently support Android 8.0 Oreo and above." / "you may be located in an unsupported region, using an unsupported device, or using an unsupported version of Android." https://support.claude.com/en/articles/9612887 (確認日 2026-10-26)
[^update]: Anthropic ヘルプ、「How to update Claude for iOS」。"you may need to update your mobile app manually" https://support.claude.com/en/articles/11825384 (確認日 2026-10-26)
[^signup]: Anthropic ヘルプ、「How do I sign up for the Pro plan?」。"Enter your email address and click “Continue with email” or click “Continue with Google” if applicable." / "Navigate to Settings > Billing and click the “Upgrade plan” button." / "Choose between monthly and annual billing periods." / "your subscription will be set to automatically renew at the end of each billing period (monthly or annual) by default." https://support.claude.com/en/articles/8325609 (確認日 2026-10-26)
[^login]: Anthropic ヘルプ、「Log in to your Claude account」。"you will see two different options for logging in to your Claude account." / "This will send you an email with the subject line “Secure link to log in to Claude.ai” and a login link." / "You should enter this code on the original device where you requested the login email to authenticate." / "It’s not possible to create a dedicated password for your Claude account at this time." / "enter the same email address you use to log in on your usual device." / "Check your spam and junk folders for emails from @mail.anthropic.com." https://support.claude.com/en/articles/13189465 (確認日 2026-10-26)
[^phone]: Anthropic ヘルプ、「Verify your phone number」。"you’ll be asked to enter your phone number from a supported location to receive a verification code via text message." / "We’ll send a six-digit verification code to your phone number via text message." / "you cannot use VoIP numbers, Google Voice, phone numbers created using apps, landlines" / "We require phone verification for all new users, and there isn’t a way to skip this step." / "if it has been more than five minutes, click "Try again" to reset the modal" / "We only allow a maximum of three Claude accounts to be verified with the same phone number." / "There isn’t a way to change your phone number associated with your Claude account once it has been verified." https://support.claude.com/en/articles/8287232 (確認日 2026-10-26)
[^pricing]: Anthropic 料金ページ。"Per month with annual subscription discount ( $200 billed up front). $20 if billed monthly." / "Prices shown don’t include applicable tax." / "Search the web, create files, and run code" / "Pro gives you at least 5x more usage per 5-hour session than Free." / "Higher output limits for all tasks" / "How much you can do depends on the length and complexity of your conversations, the model you choose, and the features you use, so there's no fixed message count." / "Your activity across Claude on web, desktop, mobile, and Claude Code all draws from the same pool." / "Canceling doesn't delete your data. Your chats, projects, and files stay with your account" / "For Pro and Max, your account moves to the Free plan once the period ends." / "Payments are generally non-refundable, except where our Consumer Terms of Service say otherwise or where local law requires it." 比較表のResearch行とOpus行はFreeなし、Proからあり。https://claude.com/pricing (確認日 2026-10-26)
[^pro]: Anthropic ヘルプ、「What is the Pro plan?」。"The Pro plan is available for $20 per month (US), with pricing in your local currency where supported." / "Annual subscriptions are billed once yearly at a discounted rate." / "We don’t offer standard discounted pricing for individual plans (Pro and Max)." / "Weekly limits reset at a fixed time each week that is assigned to your account." https://support.claude.com/en/articles/8325606 (確認日 2026-10-26)
[^max]: Anthropic ヘルプ、「What is the Max plan?」。"Max 5x: $100 per month" / "These prices are for web subscriptions only. Mobile pricing may vary depending on your app platform." / "The Max plan is currently available as a monthly subscription only." https://support.claude.com/en/articles/11049741 (確認日 2026-10-26)
[^limits]: Anthropic ヘルプ、「How do usage and length limits work?」。"Paid plans have two types of usage limits: a session limit that resets every five hours, and weekly limits that reset once every week." / "your usage of all different Claude product surfaces (claude.ai, Claude Code, Claude Desktop) counts towards the same usage limit." / "If you hit your session limit or weekly limit, you can wait for it to reset or upgrade your plan." / "Length limits relate to Claude's context window—the amount of information Claude can work with in a single chat." / "Claude summarizes earlier messages to continue the conversation seamlessly." / "Longer conversations that trigger automatic context management consume more of your usage limit." https://support.claude.com/en/articles/11647753 (確認日 2026-10-26)
[^best]: Anthropic ヘルプ、「Usage limit best practices」。"you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." / "If you have multiple related tasks or questions, group them in a single message." / "Content in projects is cached and counts less against your limits when reused." https://support.claude.com/en/articles/9797557 (確認日 2026-10-26)
[^errors]: Anthropic ヘルプ、「Troubleshoot Claude error messages」。"“Approaching session limit” or "Approaching weekly limit."" / "you’ll see an error message letting you know when you can use Claude again" / "Try attaching fewer or smaller files or starting a new conversation." / "Ensure you’re not using a VPN when accessing Claude." / "The system is functioning normally but managing high demand across all users." / "Capacity issues will not appear on our status page" / "To check for confirmed incidents, visit status.claude.com" https://support.claude.com/en/articles/12466728 (確認日 2026-10-26)
[^ios-pro]: Anthropic ヘルプ、「How do I sign up for Claude Pro on the Claude app for iOS?」。"click on your initials in the upper right corner" / "From your settings page, click on “Upgrade to Pro” and follow the payment instructions to complete your in-app purchase." https://support.claude.com/en/articles/9266495 (確認日 2026-10-26)
[^android-pro]: Anthropic ヘルプ、「How do I sign up for Claude Pro on Claude for Android?」。"To sign up for Claude Pro using the Claude app for Android, open the app on your device and click on your initials in the upper right corner." https://support.claude.com/en/articles/9612892 (確認日 2026-10-26)
[^cancel]: Anthropic ヘルプ、「Cancel your Pro or Max subscription」。"Your cancellation will take effect at the end of your current billing period" / "cancel your subscription at least 24 hours before your next billing date." / "Navigate to Settings > Billing and click the “Cancel” button." / "Select “Manage subscription” and follow the prompts for cancellation." https://support.claude.com/en/articles/8325617 (確認日 2026-10-26)
[^billing]: Anthropic ヘルプ、「Paid plan billing FAQs」。"For subscriptions purchased on the web, we only accept credit or debit cards." / "search by the subject line "Your receipt from Anthropic."" / "there isn't a direct way to change your subscription billing date." / "You've logged in with a different email." https://support.claude.com/en/articles/8325618 (確認日 2026-10-26)
[^support]: Anthropic ヘルプ、「How to get support」。"Support is provided in writing through the support messenger and email. We don't offer phone support." / "Click your initials or name in the lower left corner and select “Get help” from the menu." / "Chatting with Fin will not impact Claude usage or spend limits." / "Further assistance from our Product Support team" / "Select "I can't login."" / "Opening a second request for the same problem creates a duplicate that has to be re-triaged" / "Replies are delivered to the messenger and to your account email, so you won't miss one." https://support.claude.com/en/articles/9015913 (確認日 2026-10-26)
[^screen-login]: ログインしていない新しいブラウザウィンドウで claude.ai/login を直接確認。ボタンは「Googleで続ける（Google로 계속하기）」「Appleで続ける（Apple로 계속하기）」「メールで続ける（이메일로 계속하기）」。ヘルプにはログイン方法がメールとGoogleの2つだけという一文があるが、この画面にはAppleボタンもあった (確認日 2026-10-28、Webログイン前画面)
