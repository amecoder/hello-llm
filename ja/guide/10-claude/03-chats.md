# 第3章 会話の管理 — 探す、整理する、共有する、隠す

> **一言まとめ**: 使い終わった会話は**名前を変えるか削除**しましょう。過去の会話は一覧から探すか、Claudeに**探してもらう**ことができます。
> 他の人に見せるときは**特定の人を招待**するか**公開リンク**を使い、記録を残したくないときは**シークレットチャット**を使います。

画面は2026年10月のWeb版を基準にしています。チャットとCoworkが統合された新しいClaudeの画面が順次配信されているため、お使いの画面によって表示が異なる場合があります。スマホアプリではメニューの位置が少し異なります。

どんなときに新しい会話を開くのがよいかは、ステップ1で学びました。話題が変わったとき、最初の指示を何度も忘れるとき、会話が長くなりすぎたときです（[ステップ1 第6章](../00-common/06-conversation.md#いつ新しい会話を始めるか)）。これはClaudeでもそのまま当てはまります。この章では、そうして溜まった会話の扱い方を見ていきます。

## 会話の名前変更・削除

あとから見つけやすいように、会話の名前を自分の言葉に変えておきましょう。
Web版では次のように操作します。

1. 左メニューの「ピン留め（고정됨）」や「最近の項目（최근 항목）」の一覧から会話を探します。[^screen]
2. 会話の上にマウスを乗せ、右側の「⋯」（三点リーダー）ボタンを押します。[^screen]
3. 「名前を変更（이름 변경）」または「削除（삭제）」を選びます。[^screen] 削除する場合は、確認画面でもう一度ボタンを押します。[^delete]

![左メニューで1つの会話の「⋯」メニューを開いた画面。①「⋯」ボタン、②「名前を変更（이름 변경）」、③「プロジェクトに追加（프로젝트에 추가）」、④「アーカイブ（보관）」、⑤「削除（삭제）」に赤い番号がついている](../../../guide/10-claude/assets/shot-11-chat-menu-marked.png)

会話のタイトルは例として変更した画面です（無料プラン）。**赤い番号は、下の一覧の番号に対応しています。**[^screen]

- ① 「⋯」: 会話の上にマウスを乗せると表示されるボタンです。
- ② 「名前を変更（이름 변경）」: 会話のタイトルを自分の言葉に変えます。
- ③ 「プロジェクトに追加（프로젝트에 추가）」: 会話をプロジェクトに入れます。プロジェクトについては[第7章](07-projects-tools.md)で見ていきます。
- ④ 「アーカイブ（보관）」: 会話を一覧から片付けておきます。削除とは別のメニューです。
- ⑤ 「削除（삭제）」: 会話を消します。

同じメニューには「ピン留めを外す（고정 해제）」（またはピン留め）と「下に移動（아래로 이동）」もあります。[^screen] ピン留めした会話は、左メニューの「ピン留め」一覧にまとまります。

::: details 複数の会話をまとめて消すには（クリックして開く）
複数の会話を一度に消す方法もヘルプに記載されています。すべての会話一覧（「チャットとタスク（채팅 및 작업）」、Chats and tasks）で「⋮」→「選択（선택）」を押し、消したい会話にチェックを入れるか、一番上の「すべて選択（모두 선택）」を押す方法です。[^delete] 画面によってメニュー名が異なる場合があります。
:::

スマホではやり方が少し異なります。[^delete]

- **iPhone**: チャット一覧で会話を長押しします。
- **Android**: 開いている会話の右上にある「⋮」を押します。複数消す場合は、一覧の右上にあるチェックリストのアイコンを押し、ゴミ箱アイコンで削除します。

削除する前に知っておきたいポイントです。

- **削除した会話は一覧からすぐに消えます。** 運営会社のサーバーからも30日以内に削除されます。[^delete] 元に戻す方法はヘルプにはありません。消しても大丈夫か、もう一度考えてから押してください。
- **会話を消しても、その会話から作られたメモリは残ります。** メモリ（Claudeがあなたについて覚えておく内容）は、別に消す必要があります。[^memory-delete] 消し方は[第5章](05-memory.md)で見ていきます。

<Quiz id="ch203-delete" />

## 過去の会話を探す

過去の会話を探す方法は2つあります。

**1つ目は、一覧から探す方法です。** 左メニューの「最近の項目」の一覧を見てみましょう。左メニューの上部には「検索（검색）」ボタンもあります。[^screen] 短い質問も長い作業も、「最近の項目」（Recents）という1つの一覧にまとまります。[^new] タイトルを自分の言葉に変えておけば、このときずっと早く見つけられます。

**2つ目は、Claudeに探してもらう方法です。** 有料プラン（Pro・Max・Team・Enterprise）なら、新しい会話でそのまま聞くだけで大丈夫です。Web版・デスクトップ版・スマホアプリのどれでも使えます。[^search]

```
先週エクセルの関数について聞いた会話を探して。そのとき教えてくれた関数をもう一度まとめて。
```

Claudeが過去の会話を調べるときは、会話の途中で**ツール呼び出し**（Claudeが機能を1つ取り出して使うこと）として表示されます。回答に使われた過去の会話は、元の会話へ移動できるリンク（引用）として添付されます。[^search] リンクを押して元の会話を開いてみましょう。Claudeが見当違いの会話を持ってきていないか、すぐに確認できます。

探せる範囲も知っておきましょう。[^search]

- プロジェクトの外で聞くと、**プロジェクト外の会話すべて**から探します。
- プロジェクトの中で聞くと、**そのプロジェクト内の会話**だけから探します。プロジェクトは[第7章](07-projects-tools.md)で扱います。
- この検索では、以前のCoworkの作業は見つかりません。そうした作業は「最近の項目」から名前で探してください。[^new]

Claudeに過去の会話を調べさせたくない場合は、「設定 > メモリ（설정 > 메모리）」（または「設定 > Your Claude」）で「チャットを検索・参照（채팅 검색 및 참조）」（Search and reference chats）をオフにしてください。[^search]

::: details スイッチが見つからないときは（クリックして開く）
ヘルプには、このスイッチは「設定 > Your Claude」または「設定 > メモリ」（Memory）にあると書かれています。[^search] この章のスクリーンショットを撮った無料アカウントでは、このスイッチは表示されませんでした。過去の会話の検索が有料プランの機能だからです。[^screen] お使いの画面によって異なる場合があります。
:::

<Quiz id="ch203-search" />

## 会話を見せる — 特定の人に

会話を他の人に見せる方法は2つあります。決めた人だけが見られる**特定の人の招待**と、リンクを知っていれば誰でも見られる**公開リンク**です。特定の人の招待が基本の方法です。[^share-people] まずは、こちらから見ていきましょう。

1. 上部の会話タイトルの横にある ▾ メニューを押し、「セッションを共有（세션 공유）」を選びます。右側にアーティファクトの欄が開いていなければ、右上の「共有（공유）」ボタンからも開けます。
2. 「メールで人を追加（이메일로 사람 추가）」の欄に、受け取る人のメールアドレスを入力します。
3. 「招待する（초대하기）」を押します。[^screen-share]

![「セッションを共有（세션 공유）」ウィンドウ。「これまでのメッセージのみ共有されます」という案内、「メールで人を追加（이메일로 사람 추가）」欄と「招待する（초대하기）」、「アクセス権のあるユーザー（액세스 권한이 있는 사용자）」の下に「招待された人のみ（초대받은 사람만）」と自分の名前（管理者）、下部に「リンクをコピー（링크 복사）」ボタンがある](../../../guide/10-claude/assets/shot-15-session-share.png)

*名前とメールアドレスは例として差し替えた画面です。誰も招待せずに閉じました。新しい画面では、会話のことを「セッション」と呼びます。*

受け取る人には、あなたの名前と会話のタイトル、開くためのリンクが書かれたメールが届きます。無料プランを含め、すべてのプランで利用できます。[^share-people]

この方法には、次のような特徴があります。[^share-people]

- **招待したメールアドレスでのみ開けます。** 受け取った人がメールを転送しても、他の人は開けません。
- **閲覧のみ可能です。** 受け取った人は会話を続けたり、自分のアカウントにコピーしたり、ファイルをダウンロードしたりすることはできません。
- **Claudeのアカウントを持っていない人も招待できます。** 無料アカウントを作れば見ることができます。開かれなかった招待は30日後に消えます。
- **1日に招待できる人数には上限があります。** 正確な人数はヘルプに記載されていません。
- **スマホアプリからはまだ送れません。** Web版から送ってください。受け取った会話はどの端末からでも開けます。

共有は、**写真を撮るようにその瞬間を残したもの**（スナップショット、snapshot）です。[^share-old] 共有したあとにやり取りした会話は、受け取った人には見えません。新しい内容まで見せたいときは、共有ウィンドウで「共有チャットを更新（공유 채팅 업데이트）」（Update shared chat）を押してください。[^share-people]

添付したファイルも共有ページには含まれません。ファイルは引き続き自分だけが見られます。[^share-old]

見せるのをやめたいときは、共有ウィンドウで「オフにする（끄기）」（Turn off）を押してください。すべての人に対してすぐにリンクが無効になります。会話を削除してもリンクは無効になります。[^share-people]
これまでに共有した会話は、1か所で確認して1つずつオフにすることができます。[^share-people] 「設定 > プライバシー（설정 > 개인정보보호）」にある「共有されたチャット（공유된 채팅）」の横の「管理（관리）」を押してください。[^screen]

<Quiz id="ch203-share" />

## 公開リンク — 誰でも見られるように

公開リンクは、リンクを持っている人なら**誰でも**開くことができます。Claudeのアカウントがなくても大丈夫です。見るだけしかできない点は、招待と同じです。[^public]
個人向けプラン（Free・Pro・Max）でのみ利用できます。法人向けプラン（Team・Enterprise）では、組織の中でのみ共有できます。[^public]

公開リンクも、会話画面の「共有」から作成します。共有ウィンドウに表示される項目に従ってください。

::: details ヘルプによって作り方の手順が違って書かれています（クリックして開く）
公開リンクを作る手順は、ドキュメントによって書き方が異なります。以前のヘルプでは、「共有」を押して出てきたウィンドウでもう一度「共有」を押すとリンクができると説明されています。[^share-old] お使いの画面によって異なる場合があります。
:::

公開リンクを使う前に、1つだけ原則を覚えておいてください。ヘルプの表現そのままですが、**「公開リンクは公開情報として扱うこと」**です。[^public] インターネットに載せたくない内容なら、公開リンクにもしないでください。

- **1人にだけ送っても「公開」です。** 受け取った人が転送したり、どこかに載せたりする可能性があります。特定の人だけに見せるように制限する方法はありません。
- **検索エンジンには出ないように設定されています。** しかし、リンクが広まったり、誰かがコピーを作ったりすることまでは防げません。
- **オフにすればリンクはすぐに使えなくなります。** ただし、他の人がすでに作ったコピーやスクリーンショットを消すことはできません。

Claudeが作成したファイル（第4章）が含まれる会話は、個人向けプランでは公開共有できません。[^file-share]

残念な例と良い例を比べてみましょう。

- **残念な例**: 家族の健康相談の会話を公開リンクにして、兄弟に送る。
- **良い例**: 同じ会話を、兄弟のメールアドレスを指定して招待する。

違いは1つだけです。公開リンクは兄弟が転送すれば誰でも開けますが、招待なら兄弟のメールアドレスでしか開けません。共有する前には、会話の中に名前や電話番号などの個人情報が含まれていないか、一度目を通しておきましょう（[ステップ1 第9章](../00-common/09-safety.md#_2-個人情報と秘密-—-入れる前に一度考える)）。

<Quiz id="ch203-public-link" />

## 記録を残さない — シークレットチャット

プレゼント選びのように記録に残したくない会話は、**「シークレットチャット（시크릿 채팅）」**（Incognito chat）で行いましょう。無料プランを含め、すべてのプランで利用できます。[^incognito]

1. プロジェクトの外で新しい会話を開きます。[^incognito]
2. 画面右上の**おばけアイコン**（「シークレットモードを使用（시크릿 모드 사용）」）を押します。[^screen]
3. 画面の周りが黒くなり、左上に「シークレット（시크릿）」という表示が出たら開始です。[^screen][^incognito-name]

![シークレットモードをオンにした画面。①左上の「シークレット（시크릿）」表示、②点線で囲まれた入力欄とその上のタイトル「シークレットモードです（시크릿 모드입니다）」、③入力欄の下の案内文、④右上の ✕ ボタンに赤い番号がついている](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

無料プランの画面です。**赤い番号は、下の表の番号に対応しています。**[^screen]

| 番号 | 位置 | 名前 | 役割 |
|---|---|---|---|
| ① | 左上 | 「シークレット」 | シークレット会話中であるという印 |
| ② | 中央 | 入力欄 | 点線で囲まれ、通常の会話と区別される |
| ③ | 入力欄の下 | 案内文 | 記録に残らないという説明 |
| ④ | 右上 | ✕ | シークレット会話を終了する |

③の案内文には次のように書かれています。「シークレットセッションは履歴、メモリ、検索に残らず、Claudeの学習にも使用されません。」[^screen]

シークレットチャットの特徴です。[^incognito]

- **会話の履歴やメモリに保存されません。** 左メニューの会話一覧にも残りません。
- **学習に使われません。** この会話は、AIをより良くするための学習には使われません。
- **既存のメモリも使いません。** ただし、設定しておいた個人設定などのプロフィール情報は使われます。
- **通常の会話に切り替えることはできません。** 閉じるともう一度開くこともできません。残しておきたい回答は、閉じる前にコピーしておきましょう。

とはいえ、「どこにも一切残らない」という意味ではありません。**履歴には残りませんが、基本として30日間は保管されます。**[^incognito] パスワードのような情報は、シークレットチャットにも入力しないでください。

新しい画面では、シークレットチャットの中で**Claudeがファイルを作成したりコードを実行したりすることはできません。**[^incognito] ファイルの作成については第4章で扱います。

::: details なぜシークレットチャットではファイルを作れないのですか？（クリックして開く）
新しいClaudeの画面を使っていても、シークレットチャットは以前の画面の仕組みで開かれるためです。[^incognito] 以前の画面については[第2章](02-screen-tour.md#新しいclaudeの画面と以前の画面)で説明しています。
:::

### 会話は残してメモリだけオフにする

会話の履歴は残しつつ、Claudeがあなたについての記憶を使わないようにしたいときもあります。そんなときは、新しい会話で**最初のメッセージを送る前に**、「+」メニューの「メモリ」（Memory）をオフにしてください。会話を始めたあとから切り替えることはできません。[^memory-off]
プロジェクトの中ではシークレットチャットを使えません。おばけアイコンも表示されません。プロジェクトの中では、こちらの方法を使いましょう。[^incognito]

| | 「シークレットチャット」 | メモリだけオフにした会話 |
|---|---|---|
| 会話一覧に | 残らない | 残る |
| メモリを使う・追加するか | しない | しない |
| あとから過去の会話検索に | 出ない | 出る |
| プロジェクトの中で | 使えない | 使える |
| オン・オフの場所 | 右上のおばけアイコン | 「+」→「メモリ」をオフにする |

出典: Anthropic ヘルプ[^incognito][^memory-off]

あなたについての記憶がない状態で、まっさらな回答を受け取ってみたいときは、シークレットチャットで次のように聞いてみましょう。

```
私について何も知らないものとして、50代が初めて習うのにちょうどいい運動を3つ、メリットとデメリットと一緒に教えて。
```

::: details 返ってくる回答のだいたいのイメージ（例 — クリックして開く）
このガイドが作成した例です。実際の回答はサービスやその時々によって異なります。

> 50代の方が初めて習うのにおすすめの運動を3つご紹介します。
>
> | 運動 | メリット | デメリット |
> |---|---|---|
> | ウォーキング | お金がほとんどかからず、すぐ始められる | 効果を感じるまでに時間がかかる |
> | 水泳 | 関節への負担が少ない | プールに行く必要があり、利用料がかかる |
> | ストレッチ・ヨガ | 体が柔らかくなり、バランス感覚に良い | 最初は動きを覚えるのが少し難しい |
>
> 持病がある場合は、始める前にまず医師に相談してみてください。

**うまく回答が返ってきたか確認してみましょう**: ちょうど3つになっているか？ メリットとデメリットの両方があるか？ シークレットチャットなのに、あなたの仕事や住んでいる場所など、あなた自身の情報が混ざっていないか？

:::

<Quiz id="ch203-incognito" />

## ログイン中の端末管理

ネットカフェのパソコンや他の人のスマホで、Claudeにログインしたことはありますか？ もしあるなら、どこでログインしたままになっているか確認してみましょう。

Web版でログインすると、28日間ログイン状態が保たれます。その間にClaudeを使うと、そこからまた28日間に延びます。[^logout] つまり、ログアウトし忘れたパソコンでは、かなり長い間開いたままになっている可能性があるということです。

**どこでログインしているか確認する**[^sessions]

1. 左下の自分の名前を押し、「設定」を選びます。[^screen]
2. 「アカウント（계정）」（Account）に進みます。
3. 「アクティブなセッション（활성 세션）」（Active sessions）までスクロールします。新しい設定画面では「ログインしている場所（로그인된 위치）」（Where you're logged in）と表示されます。

端末とブラウザ、おおよその位置、最後に使った日時が表示されます。見覚えのない端末があれば、その横の「⋮」→「終了（종료）」（Terminate）を押してください。その端末からすぐにログアウトされます。見知らぬ場所や端末があればすぐに切断し、アカウントのセキュリティを点検してください。[^sessions]

![「設定」ウィンドウの「アカウント（계정）」画面。上から「すべての端末からログアウト（모든 기기에서 로그아웃）」、「アカウント削除（계정 삭제）」、組織ID、「信頼できる端末（신뢰할 수 있는 기기）」、「パスキー（패스키）」、一番下に「アクティブなセッション（활성 세션）」の表（端末・位置・作成日時・更新日時）がある](../../../guide/10-claude/assets/shot-15-active-sessions.png)

*位置と組織IDは例として差し替えた画面です。今使っている端末には「現在（현재）」という印がつきます。この画面には端末が1つしかないため、「⋮」→「終了」メニューは表示されていません。*

**すべての端末から一度にログアウトする**[^logout]

同じ「設定 > アカウント」で「すべての端末からログアウト（모든 기기에서 로그아웃）」を押して確認画面で確定してください。[^screen][^logout-name] Web版・スマホ・デスクトップアプリなど、ログインしていたすべての場所からすぐにログアウトされます。[^logout]
この機能はWeb版でのみ使えます。スマホアプリにはまだありません。

<Quiz id="ch203-sessions" />

## やってみよう

1. 「来月の家族旅行のおすすめスポットを3つ教えて」と聞いて、その会話の名前を「家族旅行の候補」に変えてみましょう。
2. 有料プランなら、新しい会話で「家族旅行について話した会話を探して」と聞いてみましょう。回答についたリンクから元の会話が開くか確認します。無料プランなら、左メニューの「検索」や「最近の項目」の一覧から探してみましょう。
3. おばけアイコンで「シークレットチャット」をオンにし、何か質問をしてから閉じます。左メニューの一覧にその会話が残っていないことを確認しましょう。
4. 「設定 > アカウント」でログイン中の端末一覧を開き、見覚えのない端末がないか確認しましょう。

**続く課題**（[読書会の準備をする](../00-common/practice-kit.md)）: 第1章でやり取りした読書会の会話の名前を「読書会の準備」に変えましょう。

## まとめ

- 会話の名前変更と削除は、会話の横にある「⋯」から行う。削除した会話はすぐに消え、サーバーからも30日以内に削除される。
- 会話を消しても、そこから作られたメモリは残る。メモリは別に消す必要がある。
- 過去の会話は「最近の項目」一覧や「検索」から探すか、有料プランならClaudeに探してもらう。
- 特定の人の招待は、そのメールアドレスでのみ開ける。公開リンクは誰でも開けるため、公開情報として扱う。
- 共有はその瞬間のスナップショットである。新しい内容を見せるには「共有チャットを更新」を押す。
- シークレットチャットは履歴・メモリ・学習から外れるが、30日間は保管される。会話は残してメモリだけ外すには、最初のメッセージの前に「+」→「メモリ」をオフにする。
- 「設定 > アカウント」でログイン中の端末を確認し、見覚えのない端末は「終了」する。

## 用語集

| 用語 | 読み方 | 一言での意味 |
|---|---|---|
| Snapshot | スナップショット | ある一瞬の状態をそのまま残したもの |
| Public link | パブリックリンク（公開リンク） | リンクを知っていれば誰でも開ける共有アドレス |
| Incognito chat | インコグニートチャット（シークレットチャット） | 履歴やメモリに保存されない一時的な会話 |
| Memory | メモリ | Claudeがあなたについて覚えておく内容 |
| Tool call | ツールコール（ツール呼び出し） | Claudeが検索などの機能を取り出して使うこと |
| Session | セッション | 1つの端末でログインしている状態 |
| Recents | リーセンツ（最近の項目） | 新しい画面で会話と作業がまとまる一覧 |

<ChapterDone :chapter="203" />

次の章: [第4章 ファイルとアーティファクト](04-files-artifacts.md)

[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。"이름 변경" / "프로젝트에 추가" / "보관" / "삭제" / "시크릿 모드입니다" / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." / "모든 기기에서 로그아웃"（確認日 2026-10-26）
[^delete]: Anthropic ヘルプ、「Delete or rename a conversation」。"Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." / "Click the checkbox on the left side of additional conversations you want to delete, or click "Select all" at the top." / "Touch and hold the conversation." / "Open your chat list and tap the checklist icon in the top right corner." / "When you delete a conversation, it's removed from your conversation history immediately and deleted from our back-end systems within 30 days." https://support.claude.com/en/articles/8230524 （確認日 2026-10-26）
[^memory-delete]: Anthropic ヘルプ、「Use Claude’s chat search and memory to build on previous context」。"When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 （確認日 2026-10-26）
[^new]: Anthropic ヘルプ、「Claude Cowork and chat are one Claude」。"One conversation list: Your quick questions and longer tasks live together in Recents." / "Search doesn't include older Cowork tasks." https://support.claude.com/en/articles/16761823 （確認日 2026-10-26）
[^search]: Anthropic ヘルプ、「Use Claude’s chat search and memory to build on previous context」。"Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "Individual project conversations (searches are limited to within each specific project)." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Yes, navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 （確認日 2026-10-26）
[^share-people]: Anthropic ヘルプ、「Share a chat with specific people」。"This is the default way to share a chat and keeps it private to the people you choose." / "Sharing with specific people is available on all plans (Free, Pro, Max, Team, and Enterprise) on claude.ai." / "If someone forwards the email, the link won't open for anyone else." / "Recipients can't continue the chat, copy it to their account, or download files from it." / "Pending invites expire after 30 days if they aren't opened." / "There's a limit on how many people you can invite in a day." / "open the share dialog and click "Update shared chat."" / "To stop sharing the chat entirely, click "Turn off" in the share dialog." / "You can also review everything you've shared from Settings > Privacy under Shared chats." / "Sharing with specific people is available on claude.ai on the web." https://support.claude.com/en/articles/16762496 （確認日 2026-10-26）
[^share-old]: Anthropic ヘルプ、「Share and unshare chats」。"While chats are always private by default, you can easily create snapshots of your conversations to share via direct link." / "Click the "Share" button in the pop out to create a shareable link." / "If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private." https://support.claude.com/en/articles/10593882 （確認日 2026-10-26）
[^public]: Anthropic ヘルプ、「Public links for shared chats」。"Public links are available on Free, Pro, and Max plans." / "Anyone with the link can open it. No Claude account is required." / "The simple rule: treat a public link as public." / "there's no way to limit a public link to specific people." / "It can't remove copies, screenshots, or archives someone else already made." https://support.claude.com/en/articles/16762437 （確認日 2026-10-26）
[^file-share]: Anthropic ヘルプ、「Create and edit files with Claude」。"Disabled public sharing of conversations that include any file artifacts from the code execution and file creation feature for free, Pro, and Max users." https://support.claude.com/en/articles/12111783 （確認日 2026-10-26）
[^incognito]: Anthropic ヘルプ、「Use incognito chats」。"Incognito chats are temporary conversations that aren't saved to your chat history or to Claude’s memory." / "Incognito chats are not used for training." / "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." / "The interface will indicate you're in an incognito chat with a black border and “Incognito chat” label in the upper left corner." / "Yes, Claude can access this information within an incognito chat." / "Once closed, incognito chats cannot be reopened." / "Incognito mode is currently only available for chats outside of projects, so you won't see the ghost icon when starting a chat within a project." / "If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them." https://support.claude.com/en/articles/12260368 （確認日 2026-10-26）
[^memory-off]: Anthropic ヘルプ、「Use Claude’s chat search and memory to build on previous context」。"Unlike an incognito chat, the chat stays in your chat history and Claude can still find it when searching past chats from your other conversations." / "You need to turn memory off before you send the first message." https://support.claude.com/en/articles/11817273 （確認日 2026-10-26）
[^sessions]: Anthropic ヘルプ、「Managing your active sessions」。"Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "Click the three-dot menu (⋮) next to that session." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 （確認日 2026-10-26）
[^logout]: Anthropic ヘルプ、「How do I log out of all active sessions?」。"When you log in via claude.ai, this creates a session with a duration of 28 days." / "This option is not currently available in the Claude mobile apps for iOS or Android." / "This action will immediately sign you out of your account across all devices where you were previously logged in, including:" https://support.claude.com/en/articles/10310342 （確認日 2026-10-26）
[^incognito-name]: ヘルプには黒い枠線と「Incognito chat」という表示が出ると書かれています。画面によって表示名が異なる場合があります。
[^logout-name]: ヘルプには「ログアウト」（Log Out）ボタンと書かれています。
[^screen-share]: 会話タイトル横の ▾ →「セッションを共有（세션 공유）」で開いたウィンドウを直接確認。"지금까지의 메시지만 공유됩니다"、「メールで人を追加（이메일로 사람 추가）」「招待する（초대하기）」、「アクセス権のあるユーザー（액세스 권한이 있는 사용자）」、「招待された人のみ（초대받은 사람만）」、「リンクをコピー（링크 복사）」。ヘルプでは同じ箇所を「アクセス権のある人」（People with access）と「送信（보내기）」と呼んでいます。キャプチャに使った会話は撮影後に削除しました（確認日 2026-10-28、Web版、無料（Free）プラン）
