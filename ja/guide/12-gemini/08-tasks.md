# 第8章 仕事を任せる — タスク、スケジュール、Chrome内のGemini、安全のルール

> **一言まとめ**: 複数のステップが必要な仕事は、入力欄の下の**「タスク（작업）」**で任せましょう。決めた時間に自動で動かしたいときは、**スケジュール**を設定します。
> 任せるときは、**ログイン情報や決済情報を会話に書かず、許可を求める画面をよく読んでください。** 見守ることがいちばんの安全装置です。

画面は2026年10月のWeb版が基準で、画像は有料プラン（Google AI Pro）の韓国語画面です。

## タスク — チャットのかわりに仕事をまるごと任せる

チャットは、質問して答えを受け取る場所です。**タスク**（Task）は、複数のステップからなる仕事を**まるごと任せる**場所です。[^tasks]
Geminiは、連携したアプリ、スキル、過去の会話、自分がログインしているウェブサイトなどの情報を使って仕事を進めます（[7章](07-skills-apps.md)）。[^tasks]

ヘルプに載っている例は次のとおりです。[^tasks]

- 受信トレイのニュースレターを要約したりアーカイブしたりして、休暇明けの急ぎのやることリストを作る
- 航空券・ホテルの値段が予算以内に下がったら知らせる
- 出典つきの調査結果を、PDF・文書・表・発表資料のファイルにして渡す

使うには、次の条件をすべて満たす必要があります。[^tasks]

- 満18歳以上で、**個人のGoogleアカウント**（会社・学校のアカウントはまだ使えません）
- **Google AI ProまたはUltra**の購読
- 「アクティビティを保存（활동 기록 보관）」がオン、「パーソナルインテリジェンス（개인 인텔리전스）」を利用（[5章](05-memory.md)）
- Web、スマホアプリ、Macアプリでのみ使えます。欧州経済領域・ナイジェリア・スイス・イギリスでは使えません。このガイドの韓国のアカウントでは、「タスク」が使えました。[^screen]

### タスクを始める

![入力欄の下の①「チャット」「タスク」切り替えボタンで「タスク」が選ばれている様子。中央の「시작할 준비가 됐어요! 어떤 작업인가요?」（始める準備ができました！ どんなタスクですか？）の下の②入力欄の案内「작업을 설명하세요」（タスクを説明してください）、サイドメニューの③「予約済み（예약됨）」に赤い番号がついている](../../../guide/12-gemini/assets/shot-20-task-marked.png)

**赤い番号は、下のリストの番号と同じ場所です。**[^screen]

- ① 入力欄の下の**「チャット」「タスク」**のうち、「タスク」を押します。
- ② 案内が「작업을 설명하세요」（タスクを説明してください）に変わります。任せたい仕事を書いて送ります。スキルを一緒に使うときは`@`で選びます。ファイルを添付することもできます。[^tasks]
- ③ スケジュールを設定したタスクは、サイドメニューの**「予約済み（예약됨）」**で見ます（下の節）。

初めてで何を任せればいいかわからないときは、タスクの入力欄に**「물어봐 줘（聞いて）」**と書いてみましょう。韓国語版のヘルプによると、「설정（設定）」「시작（開始）」「물어봐 줘」と入力すると、最初のスキルとタスクを会話しながら一緒に作ってくれるそうです（英語版は set up, get started, interview me）。[^tasks]

仕事が進んでいる最中でも、入力欄に指示を書き足して方向を変えられます。すでにした作業はそのまま続きます。[^tasks]

```
過去1週間に届いたメールの中からニュースレターだけを選んで、件名と要点を1行ずつ表にまとめてください。
メールを削除したりアーカイブしたりはせず、まとめた表だけを見せてください。
```

最後の行のように、**してはいけないことを書いておく**と、望まない行動を防ぐのに役立ちます。

知っておきたい点があります。[^tasks][^threads]

- **同時に15個まで**動かせます。超えたら、終わるのを待つ必要があります。
- タスクも使用量を使います。どれだけ使うかは、プランと仕事の複雑さによって変わります。
- タスクはサイドメニューの会話リストにも表示され、アイコンで進行状況を知らせてくれます。「アクティビティを保存」がオンになっていないと、リストに表示されません。
- タスクの会話を削除すると、そのタスクに結びついたスケジュールも一緒に削除されます。タスクで作ったファイルは残ります。

<Quiz id="ch308-task" />

## 決めた時間に自動で — スケジュール

**スケジュール**（Schedule）は、決めた時間にGeminiが自動で仕事をしてくれる機能です。[^schedule] 名前が似たものが2つあるので、区別しましょう。

| | チャットのスケジュール | タスクのスケジュール |
|---|---|---|
| すること | 決まった時刻に要約・ニュースを受け取る | 決まった時間にタスクを実行 |
| オンにしておける数 | 10個 | 50個 |
| 必要なプラン | 条件なし（順次開放中） | Google AI Pro・Ultra |

出典: Googleヘルプ[^chatschedule][^schedule]

### チャットでスケジュールを設定する

ふつうはチャットで、**いつ、どのくらいの頻度で**受け取りたいかを一緒に書いて送れば大丈夫です。Geminiがスケジュールの要約で答えます。[^chatschedule]

```
毎朝7時に、今日の天気と、通勤前に知っておきたいニュースを3つ要約してください。
```

- 内容は、**受け取る予定の時刻の1時間前までに**あらかじめ用意されます。そのため、株価のようにすぐ変わる情報は最新でないことがあります。1日の要約やまとめに向いています。[^chatschedule]
- 「アクティビティを保存」がオンになっている必要があります。[^chatschedule]

### タスクにスケジュールを設定する

タスクでは、3つの方法でタイミングを決めます。[^schedule]

- **時間**: 1回、毎時、毎日、毎週、毎月、毎年
- **Gmailの見張り**: 条件に合うメールが届いたら
- **トピックの見張り**: ニュース・金融・スポーツなどのトピックに新しい情報が出たら

「見張り」は、**とても急ぎの用事には向いていません。** ヘルプは、「チケットが発売されたらすぐ知らせて」のような用事を例にあげています。実行時刻も正確ではなく、おおよそです。[^schedule]

### 「予約済み（예약됨）」で管理する

サイドメニューの**「予約済み」**にスケジュールが集まります。このガイドの画面には、「ベータ（베타）」の表示、状態別に絞り込むメニュー、「予約タスクを作成（예약 작업 만들기）」ボタンがありました。[^screen]

- 「予約タスクを作成」で自分で作れるのは、**時間のスケジュール**だけです。メール・トピックの見張りは、タスクの会話の中で言葉で作ります。[^schedule]
- 新しいスケジュールは、「その他（더보기）」→「今すぐ実行（지금 실행）」ですぐに試せます。[^schedule]
- 長い間確認していないスケジュールは、自動的に止まることがあります。画面にも「비활성 상태의 일부 예약된 작업이 일시중지되었습니다」（非アクティブな状態の一部の予約タスクが一時停止されました）という案内が表示されました。いつでもまたオンにできます。[^chatschedule][^screen]

<Quiz id="ch308-schedule" />

## ブラウザを使うタスクと許可

ショッピング、旅行の予約、レストランの予約のように、**ウェブサイトを自分で操作する必要がある仕事**も任せられます。[^tasks] このとき、Geminiは2種類のブラウザのうちどちらかを使います。[^tasks]

| | 自分のパソコンのChrome | クラウドのリモートブラウザ |
|---|---|---|
| 入れるサイト | 自分がログインしているサイトまで | Gemini専用のブラウザで |
| 使う場所 | パソコンのみ | スマホではこれだけを使う |
| 機器の電源を切ると | つけておく必要がある。切るとリモートブラウザに切り替わることがある | 進行を続ける |
| ログインが必要なとき | — | 止まって、自分が引き継ぐ |

出典: Googleヘルプ[^tasks]

ウェブを使うタスクは、**初期設定では毎回、先に確認を求められます。**[^tasks] 設定で「常に許可（항상 허용）」に変えると、確認なしでウェブを使います。[^permission]

### 許可を求める画面

Geminiは、ブラウザを使う前、アプリの中身を変える前、センシティブかもしれない情報を送る前に、タスクの会話で許可を求めます。[^permission] 選べる答えは次のとおりです（ヘルプの韓国語版での名前）。[^permission]

- **「許可しない（허용 안함）」**: 止まります。自分が断った作業は、別の方法でもう一度試すことはしません。[^tasks]
- **「1回だけ許可（한 번 허용）」**: 今回のステップだけ許可します。
- **「このチャットで許可（이 채팅에 허용）」**: このタスクの会話が終わるまで許可します。連携したGoogleアプリの動作にだけ表示されます。
- **「常に許可（항상 허용）」**: 今後のすべてのタスクの会話で、**その動作**を許可します。**一度押すと設定が変わり**、ずっと適用されます。

最初は**「1回だけ許可」**だけを使いましょう。どんなことを聞かれるのかに慣れてから広げても、遅くありません。

「常に許可」にしていても、メッセージの送信・購入・決済・ウェブフォームの送信のような**重要な行動は、もう一度確認されます。** 健康・金融・身分証番号のようなセンシティブな情報を送る前にも、止まって確認します。[^permission][^tasks]
アプリごとに許可の方法を変えたいときは、「カスタマイズ（맞춤설정）」→「コネクタ（커넥터）」でアプリを押し、「アプリの操作（앱 작업）」の横で「常に許可」または「常に確認（항상 확인）」を選びます。[^permission]

### 止めて引き継ぐ

Geminiが気に入らないことをしていたら、すぐに止めましょう。チャットでは**「回答を停止（대답 중지）」**を、ブラウザでは**「直接操作（직접 제어）」**を押します。[^tasks] パスワードや決済情報を入力する必要があるステップでは、Geminiが止まって、直接操作してほしいと頼んでくることがあります。[^tasks]

### タスクの設定

設定メニューの「タスク設定（작업 설정）」（[2章](02-screen-tour.md#設定画面-—-アカウント・環境設定・プライバシー)）には、3つの項目があります。[^screen][^tasks]

| 項目 | すること |
|---|---|
| 「작업 모드를 사용하여 작업 전달」（タスクモードでタスクを渡す）→「使用を停止（사용 중지）」 | タスク機能をオフにする。インターネットの使用履歴とリモートコード実行のファイルが削除され、スケジュールは止まる（削除はされない） |
| 「リモートブラウザのデータを削除（원격 브라우저 데이터 삭제）」→「削除（삭제）」 | リモートブラウザのCookieを消し、サイトからログアウトする |
| 「リモートコード実行のデータを削除（원격 코드 실행 데이터 삭제）」→「削除」 | リモートコンピュータに残ったファイルなどを消す |

出典: Gemini Web画面[^screen]

タスク機能をオフにしても、すでに作ったタスク、会話、ファイルは削除されません。[^tasks]

<Quiz id="ch308-permission" />

## 任せる前に — 安全のルール

タスクは**実験段階の機能**です。ヘルプは、**ユーザーが見守ることがいちばん大事な安全装置**だと言っています。[^tasks] 任せる前に、この5つを守ってください。

1. **ログイン情報、決済情報、センシティブな情報を、タスクの会話に書かないでください。** 必要なら、ブラウザを直接操作して、ウェブページにそのまま入力します。[^tasks]
2. **センシティブな仕事には、スケジュールを設定しないでください。** 自分がオフラインのときにスケジュールが動くと、間違った行動を止められないことがあります。[^tasks]
3. **許可を求める画面や、聞き返される質問をよく読んでください。** 安心して任せられる仕事だけを任せます。[^tasks]
4. **初めて見るサイトやメールの中の隠れた指示に気をつけてください。** ウェブページやメールに、AIをだます文が隠されていることがあります。これを**プロンプトインジェクション**（Prompt injection、隠れた指示でAIを操ること）といいます。作業中のAIがこうした文を読むと、見当違いのことをしてしまうことがあり、安全装置があってもすべての危険を防げるわけではありません。[^tasks][^inject]
5. **Macアプリにフォルダを接続するときは、失ってはいけないファイルを入れないでください。** Geminiが作業中に消したファイルは、取り戻せないことがあります。Geminiは、自分が「接続されたフォルダ」に入れたフォルダ・ファイルだけを見ます。[^mac]

プロンプトインジェクションは、ステップ1でも扱いました（[ステップ1 第9章](../00-common/09-safety.md#_4-隠れた指示-—-プロンプトインジェクション)）。知らない人が共有したGeminiの会話やCanvasアプリにも気をつけるよう、Googleは案内しています。[^inject]

<Quiz id="ch308-safety" />

## Chrome内のGemini

パソコンの**Chromeブラウザ**でも、Geminiを呼び出せます。いま見ているページを要約したり、難しい概念を説明してもらったり、ページの中から答えを探してもらったりできます。[^chrome]

- パソコン（Chromebook Plus・Mac・Windows）の**最新のChrome**で使います。[^chrome] **満18歳以上**なら、対応地域の一覧に韓国があり、対応言語に韓国語もあります。[^chromeavail]
- Chromeにログインする必要があり、**シークレットモードでは使えません。**[^chrome]
- Chromeの上のほうにある**「Geminiに質問（Gemini에게 물어보기）」**を押し、初回は画面の案内に従って利用に同意します。[^chrome]
- 初期設定では、**いまのタブの内容**がGeminiに送られます。質問欄に`@`を入力すると、ほかのタブも選べ、開いているタブを**最大10個**まで一緒に送れます。[^chrome]
- まだすべての人に開放されていません。段階的に配信中です。[^chrome]

Chromeにウェブを代わりに巡回させて、カートへの追加や予約まで任せる**自動ブラウジング**（auto browse）は、**アメリカにいる満18歳以上**の人だけが使えます。韓国ではまだ使えません。[^autobrowse]

この節は、このガイドが画面で確認できなかったため、ヘルプだけを根拠に書きました。

<Quiz id="ch308-chrome" />

## 実際にやってみよう

1. 入力欄の下の「タスク」を押して「물어봐 줘」と送り、Geminiがどんなタスクを提案するか見る（有料プラン）。
2. チャットで「毎週月曜日の朝8時に、今週の天気を要約して」とスケジュールを設定し、サイドメニューの「予約済み」で確認したあと、「その他」で止めたり削除したりしてみる。
3. 設定→「タスク設定」を開いて、3つの項目の名前と説明を読んでみる（押さなくてもよい）。
4. パソコンのChromeで「Geminiに質問」を押して、いま読んでいる記事をひとつ、3行で要約してもらう。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「会の前日の夜8時に、持ち物リストをもう一度知らせて」というスケジュールを設定してみましょう。受け取ったリストが議事録の持ち物と同じか確認し、会が終わったらスケジュールを削除します。

## まとめ

- 「タスク」は、複数のステップからなる仕事をまるごと任せる場所。満18歳以上・個人アカウント・Google AI ProまたはUltra・「アクティビティを保存」・「パーソナルインテリジェンス」が必要。同時に15個まで動く。
- スケジュールは2種類。チャットのスケジュールは10個、タスクのスケジュールは50個までオンにしておける。サイドメニューの「予約済み」で管理する。
- ウェブを使うタスクは、初期設定では許可を求める。最初は「1回だけ許可」だけを使い、おかしければ「回答を停止」や「直接操作」で止める。
- ログイン情報・決済情報は会話に書かず、センシティブな仕事にはスケジュールを設定しない。隠れた指示（プロンプトインジェクション）に気をつけ、動いている様子を見守る。
- Chrome内のGeminiは、パソコンの最新のChromeで、満18歳以上なら韓国でも使える。段階的に開放中なので、まだ表示されないことがある。自動ブラウジングはまだアメリカ限定。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Task | タスク（作業） | 複数のステップからなる仕事をまるごと任せる機能 |
| Schedule | スケジュール（日程） | 決めた時間にGeminiが自動で仕事をするようにする設定 |
| Remote browser | リモートブラウザ（遠隔ブラウザ） | クラウドで動くGemini専用のブラウザ |
| Take control | テイクコントロール（直接操作） | Geminiが使っていたブラウザを自分が引き継ぐこと |
| Prompt injection | プロンプトインジェクション | ウェブページやメールにAIをだます指示を隠しておく攻撃 |
| Auto browse | オートブラウズ（自動ブラウジング） | Chrome内のGeminiがウェブを代わりに巡回する機能 |

<ChapterDone :chapter="308" />

次の章: [9章 プライバシーと安全](09-privacy.md)

[^screen]: Gemini Web画面（Google AI Pro、韓国語）で直接確認。入力欄の下の「채팅」「작업」切り替えボタン。「작업」を押すと、タイトル"시작할 준비가 됐어요! 어떤 작업인가요?"と入力欄の案内"작업을 설명하세요"が表示される（ヘルプの韓国語版では、このボタンを「할 일」と呼んでいる）。サイドメニューの「예약됨」画面の「베타」表示、状態別の絞り込みメニュー、「예약 작업 만들기」ボタン（ヘルプの韓国語版では「예약된 작업 만들기」）、案内"비활성 상태의 일부 예약된 작업이 일시중지되었습니다"。設定→「작업 설정」画面の「작업 모드를 사용하여 작업 전달」（説明"이 기능을 사용 중지하면 인터넷 사용 기록과 원격 코드 실행 파일이 삭제되고 예약된 작업이 중지됩니다"、ボタン「사용 중지」）、「원격 브라우저 데이터 삭제」（説明"쿠키가 삭제되고 웹사이트에서 로그아웃됩니다"、ボタン「삭제」）、「원격 코드 실행 데이터 삭제」（ボタン「삭제」）。ヘルプはリモートブラウザのデータ削除を「설정 > 브라우저」で行うと書いているが、この画面の設定メニューには「브라우저」がなかった。（確認日 2026-10-31）
[^tasks]: Google ヘルプ、「Manage your tasks & workflows in Gemini Apps」（韓国語版 「Gemini 앱에서 작업 및 워크플로 관리하기」）. "Assign Gemini tasks to automate complex workflows and manage schedules for ongoing tasks." / "Save you money: Gemini can monitor and alert you when the prices of flights and hotels drop within your budget." / "Be 18 or over." / "Have a Google AI Pro or Ultra subscription. Learn how to upgrade." / "Have Keep Activity on." / "Opt in to Personal Intelligence." / "Available wherever Gemini Apps are supported, except in the European Economic Area, Nigeria, Switzerland, and the United Kingdom." / "Only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com." / "Just enter “set up,” “get started,” or “interview me” in a task." 韓国語版 "작업에 '설정', '시작' 또는 '물어봐 줘'를 입력하기만 하면 됩니다." / "If you close or turn off your device before the task is finished, or the device isn’t available, Gemini might use a remote browser to complete the task." / "Your schedules and tasks are paused and not deleted." / "직접 제어 모드: Gemini는 작업을 일시적으로 중지하고 사용자에게 브라우저를 '직접 제어'해 특정 유형의 정보(예: 비밀번호 또는 결제 세부정보) 입력 등 일부 작업을 직접 수행해 달라고 요청할 수 있습니다." / "Gemini updates its work without losing progress." / "You can have up to 15 tasks running at a given time." / "To interact with websites, Gemini can connect to the local Chrome browser on your desktop or use a separate remote browser in the cloud." / "If you use your local browser: Gemini has access to all the same sites that you do, including sites you’re signed into." / "If you use the remote browser: Gemini continues to work on your task even if you close your device, and only uses the remote browser on mobile devices. For certain steps, like signing in to a website, the task pauses until you take over and complete that step." / "After that, for every task that involves web browsing, Gemini will ask for confirmation first." / "Do not enter sign-in info, payment details, or info you may find sensitive directly into the task thread. If needed, take control of Gemini’s browser or the local browser. Then, enter relevant details directly on the webpage." / "If a schedule runs when you are offline, you may not be able to stop Gemini from completing an unintended action." / "Sending communications, modifying or deleting your data, making purchases, completing financial transactions, and filling out and submitting web forms." / "Gemini pauses and asks for your permission before it shares info you may find sensitive, such as your health information, financial details, or government ID numbers, with a website or connected app." / "If an AI agent reads these instructions while doing a task, it may be misled into doing unintended things." / "Deny or don’t allow an action: If you deny an action in a task thread, Gemini stops and doesn’t try another way to complete it." / "Gemini’s ability to handle tasks is experimental." / "Your active supervision is the most important way to protect against risk when you assign tasks to Gemini. Review confirmation requests and clarifying questions closely. Assign tasks to Gemini carefully and safely, and only give it tasks you're comfortable with." / "If Gemini is doing something you don't like, you can stop it by selecting Stop response  in the chat or Take control  over Gemini’s browser." / "Your tasks, threads, schedules, or any related files that Gemini updated or created will not be deleted." 韓国語画面での名前 「대답 중지」「직접 제어」. https://support.google.com/gemini/answer/17094507 （確認日 2026-10-31）
[^threads]: Google ヘルプ、「Find & manage your tasks in Gemini Apps」（韓国語版 「Gemini 앱에서 할 일 확인 및 관리하기」）. "Next to your task threads, check the icon for the progress of your tasks." / "Tasks are only listed in the side bar if you have Keep Activity on." / "If you delete a task thread, it also deletes the following:" https://support.google.com/gemini/answer/17094196 （確認日 2026-10-31）
[^schedule]: Google ヘルプ、「Create & manage schedules for tasks in Gemini」（韓国語版 「Gemini에서 작업 일정 만들기 및 관리하기」）. "A schedule acts as the automated trigger for a task, telling Gemini exactly when to step in and execute your instructions." / "Time-based: schedule tasks to run once, hourly, daily, weekly, monthly, or yearly." / "While Gemini has improved at monitoring and responding to events more quickly, monitors are still not ideal for tracking fast-moving data or performing time-critical tasks like “Let me know when tickets go on sale immediately so I can buy it.”" / "The option to create a schedule manually is only available for time-based schedules." / "Tip: To test your new schedule, hover over the schedule, then click More   Run now ." / "Active schedules limit reached: The current limit for how many active schedules you can have for tasks is 50." / "Schedule run times vary: Scheduled tasks run times are approximate and may not run at the exact moment a time or event condition is met." https://support.google.com/gemini/answer/17094710 （確認日 2026-10-31）
[^chatschedule]: Google ヘルプ、「Schedules in Gemini Apps」（韓国語版 「Gemini 앱의 일정」）. "You can set a delivery time that works for your schedule. Gemini will prepare your content in the background so it’s ready by the scheduled time." / "Important: We’re gradually making this feature available to all personal Google Accounts, so it might not be available to you just yet." / "Have Keep Activity on. This feature isn't available when this setting is off." / "Important: You can have up to 10 active schedules at a time." / "If you aren’t receiving responses for a schedule, it may have been automatically turned off due to inactivity. You can turn the schedule on again at any time." / "Tip: In your prompt, provide details about when and how often you want to schedule the action." / "Responses for schedules are prepared in advance to guarantee timely delivery. As a result, rapidly changing data, like stock prices, won’t be the latest when you receive them. Schedules work best for daily summaries and wrap-ups." https://support.google.com/gemini/answer/16316416 （確認日 2026-10-31）
[^permission]: Google ヘルプ、「Manage browser & app permissions for tasks in Gemini」（韓国語版 「Gemini에서 작업에 대한 브라우저 및 앱 권한 관리하기」）. "Gemini is designed to ask for your permission in the task thread before it uses a browser, makes a change in an app, or performs an action or shares info that you may find sensitive." / "Allow for this chat: Approves the action automatically for the rest of the current thread without changing your Connected Apps settings." / "This option is only available for connected Google products." / "Always allow: Gemini uses the web without asking." / "Always allow: Approves the action for the current thread and all future task threads. Selecting this automatically updates your preference to “Always allow” in your settings." / "Under “App actions,” next to the action, click the dropdown and select your permission preference:" / "To help prevent unintended actions and protect your data, Gemini is designed to apply built-in safeguards that confirm some actions with you even if you set a permission to “Always allow.”" 韓国語版の選択肢の名前 「허용 안함」「한 번 허용」「이 채팅에 허용」「항상 허용」「항상 확인」. https://support.google.com/gemini/answer/18766567 （確認日 2026-10-31）
[^mac]: Google ヘルプ、「Assign tasks in the Gemini app on Mac」（韓国語版 「Mac의 Gemini 앱에서 작업 할당하기」）. "Gemini can only view files or directories that you specifically add to the Connected folders toolbar." / "Don’t include any files that you don’t want Gemini to work with or which are too sensitive to lose. You may not be able to recover files once Gemini completes a task for them or is instructed to delete them." https://support.google.com/gemini/answer/17208717 （確認日 2026-10-31）
[^inject]: Google ヘルプ、「How Gemini Apps help protect users from malicious content & prompt injection」（韓国語版 「Gemini 앱이 악성 콘텐츠 및 프롬프트 인젝션으로부터 사용자를 보호하는 방법」）. "Prompt injection is an attempt to elicit an unintended or harmful response from generative AI tools." / "Use caution when interacting with shared content, like public Gemini Apps chats or Gemini Canvas web apps, from unknown providers" https://support.google.com/gemini/answer/16188217 （確認日 2026-10-31）
[^chrome]: Google ヘルプ、「Use Gemini in Chrome」（韓国語版 「Chrome의 Gemini 사용하기」）. "With Gemini in Chrome, you can get AI assistance in your browser to easily get key takeaways, clarify concepts, find answers and more." / "Important: Gemini in Chrome is not available to all users at this time." / "On a computer, you can also share up to 10 open tabs with Gemini." / "Use a Chromebook Plus, Mac, or Windows computer." / "Use the latest version of Chrome." / "Sign in to Chrome. This feature isn’t available in Incognito mode." / "You’ll need to opt in the first time you use Gemini in Chrome. To opt in, follow the onscreen instructions." / "To add an open tab directly in your prompt, enter @ and select the tab. You can also share up to 10 of your open tabs." 韓国語版のボタン名 「Gemini에게 물어보기」. https://support.google.com/gemini/answer/16283624 （確認日 2026-10-31）
[^chromeavail]: Google ヘルプ、「Gemini in Chrome availability」（韓国語版 「Chrome의 Gemini 사용 가능 여부」）. "For users 18 or older, Gemini in Chrome is available in the following locales:" （一覧に"South Korea"、対応言語の一覧に"Korean"） https://support.google.com/gemini/answer/17140089 （確認日 2026-10-31）
[^autobrowse]: Google ヘルプ、「Ask Gemini in Chrome to complete tasks for you with auto browse」（韓国語版 「Chrome의 Gemini에게 자동 탐색을 사용하여 작업을 완료하도록 요청하기」）. "Be 18 or over and in the US." https://support.google.com/gemini/answer/16821166 （確認日 2026-10-31）
