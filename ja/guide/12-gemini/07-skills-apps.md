# 第7章 スキルと連携アプリ — よくあるお願いの保存、Googleアプリとの連携

> **一言まとめ**: 毎回長く書くお願いは**スキル**として保存して、`/`で呼び出して使いましょう。今使っている**Gemsは、2026年11月17日からスキルに変わります。**
> Gmail・Drive・カレンダーの内容について聞きたいときは、**連携アプリ**をオンにします。連携する前に、どんな情報がGeminiに送られるのかを先に知っておきましょう。

画面は2026年10月のWeb版を基準にしていて、図は有料プラン（Google AI Pro）の韓国語画面です。

## スキル — よくあるお願いを保存しておく

**スキル**（Skill）は、一度作っておくとどのチャットでも使い回せる**保存された指示**です。[^skills][^transition]
たとえば、「議事録を受け取ったら、決定事項・やること・担当者の順に整理してください」というお願いを毎週使うなら、スキルとして保存しておいて、名前を呼ぶだけで使えます。

スキルには次のような特長があります。[^transition]

- **呼び出しやすい。** チャットの入力欄に`/`を入力して、スキル名を選びます。もうすぐ`@`に変わるそうなので、画面に表示されているほうを使ってください。
- **自動で使われることもある。** 今の質問に合うスキルがあれば、Geminiが見つけて適用します。
- **重ねて使える。** 一つのチャットで、複数のスキルを一緒に使えます。

使うには、**18歳以上**でログインしている必要があり、「アクティビティの保存（활동 기록 보관）」がオンになっていなければなりません。[^skills] **有料プランはなくても大丈夫です。**[^skills] Web、スマホアプリ、Macアプリで使えます。[^skills]

### スキル画面を開く

サイドメニューの「カスタマイズ（맞춤설정）」→上の「スキル（스킬）」タブに進みます。「カスタマイズ（맞춤설정）」が見当たらなければ、先に「もっと見る（더보기）」を押してください。[^skills][^screen] 設定メニューの「スキル（스킬）」からも行けます（[第2章](02-screen-tour.md#設定画面-—-アカウント・環境設定・プライバシー)）。

![「カスタマイズ（맞춤설정）」の「スキル（스킬）」タブ。①「スキル（스킬）」タブ、②「作成（만들기）」ボタン、③「作成（만들기）」を押すと開くメニュー（「Geminiで作成（Gemini로 만들기）」・「手動で作成（수동으로 만들기）」・「アップロード（업로드하기）」）、④「おすすめ（추천）」スキル一覧（「文章スタイルを合わせる（글쓰기 스타일 맞추기）」・「さまざまな視点を探る（다양한 관점 살펴보기）」・「会議の準備（회의 준비）」など）に赤い番号がついている](../../../guide/12-gemini/assets/shot-19-skills-marked.png)

**赤い番号は、下の一覧の番号と同じ場所です。**[^screen]

- ①「スキル（스킬）」タブです。案内文は「スキルを追加または作成して、Geminiができる作業の範囲を広げてみましょう（스킬을 추가하거나 생성하여 Gemini가 할 수 있는 작업 범위를 넓혀 보세요）」です。
- ②「作成（만들기）」を押すと、③作り方が3つ出てきます。
  - **「Geminiで作成（Gemini로 만들기）」**: 何がしたいかを会話で説明すると、Geminiが一緒に作ってくれます。初めてなら、これがいちばん簡単です。
  - **「手動で作成（수동으로 만들기）」**: 空の用紙に、名前・説明・指示を自分で書きます。
  - **「アップロード（업로드하기）」**: スキルファイル（`SKILL.md`）や、そのファイルが入ったフォルダをアップロードします。別のサービスで作ったスキルを持ってくるときに使います（WebとMacアプリのみ）。[^transition]
- ④Googleがあらかじめ作った**おすすめスキル**です。「+」を押して追加してから、自分に合わせて直して使ってもかまいません。[^skills]

チャットで「こういう指示でスキルを作って」と話しかけても作れます。ただし、**オン・オフ・削除は「カスタマイズ（맞춤설정）」→「スキル（스킬）」でしか**できません。[^skills]

### スキルを管理する

スキル画面でスキルを選んでから、「もっと見る（더보기）」を押します。[^skills]

| やりたいこと | メニュー |
|---|---|
| しばらく使わない | 「無効にする（비활성화）」 |
| 会話しながら直す | 「Geminiで編集（Gemini로 수정）」 |
| 自分のパソコンに保存する | 「ダウンロード（다운로드）」（.zipファイル） |
| 消す | 「削除（삭제）」— 元に戻せない |

出典: Googleヘルプ[^skills]

オフにしたスキルを使うよう頼むと、Geminiが再びオンにするかどうかを聞いてきます。[^skills] スキルはいくつでも作れますが、**同時にオンにしておけるのは100個まで**です。[^transition]

スキルが、すべての機能と一緒に使えるわけではありません。GmailやDriveなどの連携アプリとは一緒に使えますが、**Canvas・Deep Research・動画の作成・音楽の作成・ガイド付き学習とは、まだ一緒に使えません。**[^transition]

<Quiz id="ch307-skill" />

## 良いスキルの書き方

スキルは、長い説明書ではなく**短い要約メモ**のように書きましょう。[^write] Geminiは、まず**スキルの名前と説明だけを見て**、今の質問に合うかどうかを判断します。合うときだけ、指示の全体を読みます。[^write]
ですから、名前と説明がぼんやりしていると、必要なときにスキルが使われません。

### 作る価値のある仕事、作らなくてよい仕事

| スキルにするとよい仕事 | 作らなくてよい仕事 |
|---|---|
| 同じ長いお願いを何度も書き直している | 一度しかやらない仕事 |
| 答えの形式を毎回直している | Geminiがもともと得意な仕事 |
| 複数のアプリを行き来する作業を手でつないでいる | ルールがよく変わる仕事 |

出典: Googleヘルプ[^write]

### 名前・説明・指示の書き方

- **名前は、することを表す言葉（動詞）で始めます。** 何であるかより、**何をするか**が伝わるように書きます。[^write] 名前は英語の小文字で書き、単語の間をハイフン（-）でつなぎます（例: `summarize-meeting-notes`）。[^skills]
- **説明は1〜2文で、いつ使うかまで書きます。** 1,024文字を超えられません。[^write]
- **指示は、一つの案件ではなく、一種類の仕事に通じるように**書きます。「今週の議事録の整理」ではなく、「議事録の整理」に合わせて書く、ということです。[^write]
- **結果の形を例で見せて、情報が欠けているときにどうするかを書いておきましょう。** そうすると、Geminiが無いことを作り話で補ったり、飛ばしたりすることが減ります。[^write]

物足りない例と、より良い例を比べてみましょう。

| | 物足りない例 | より良い例 |
|---|---|---|
| 名前 | `meeting-helper` | `summarize-meeting-notes` |
| 説明 | 会議を手伝います | 議事録を受け取ったら、決定事項・やること・担当者に整理する。議事録や会議メモを貼り付けたときに使う |

より良い例は、名前を見るだけでやることがわかり、説明に**いつ使うか**が入っています。

「手動で作成（수동으로 만들기）」の指示欄には、次のように書いてみましょう。

```
議事録を受け取ったら、下の順番で整理してください。
1. 決まったこと（一行ずつ）
2. やること（やること - 担当者 - 期限）
3. 次の会議でもう一度見ること
担当者や期限が議事録にないときは、作り話をせず「要確認」と書いてください。
```

最初から完璧である必要はありません。何回か使ってみて、「Geminiで編集（Gemini로 수정）」で整えていけば大丈夫です。

<Quiz id="ch307-write" />

## Gemsはスキルに変わります

**Gems**（ジェムズ）は、名前・指示・参考ファイルを入れて作る**自分だけのGemini**でした。サイドメニューの「もっと見る（더보기）」→「Gems」にあります。[^gems][^screen]
このGemsが**スキルに変わります。** 個人のGoogleアカウント（18歳以上）の日程は次のとおりです。[^transition]

| 日付 | 起こること |
|---|---|
| 2026年11月17日 | Gemsが**読み取り専用**になる。見ることはできるが、使う・直す・新しく作ることはできない |
| 2026年12月17日 | GemsがGeminiから**なくなる** |

出典: Googleヘルプ[^transition]

- 18歳未満の個人アカウントは、あとで切り替わり、日程は別に知らされるそうです。会社のアカウントは2027年3月、学校のアカウントは2027年6月です。[^transition]
- **Gemsがなくなるときに、スキルとして自動で作り直してくれます。**[^transition] それでも、自分で移しておくと安心です。
- ミニアプリを作る実験機能の**OpalとGoogle LabsのGemsも、同じ11月になくなります。**[^transition]

### 自動で移すときに抜けるもの

自動の切り替えでは、一部のファイルが抜けます。[^transition]

- ファイルサイズの合計が**100MB**を超えると、大きなファイルから抜けます。
- スキルが対応していないファイル（古いOfficeファイルの.doc・.xls・.ppt、音声・動画、.zipのような圧縮ファイルなど）は移りません。

ですから、大切なGemがあるなら、**12月17日の前に「ナレッジ（지식）」に入れたファイルをダウンロードしておきましょう。**[^transition]

### 自分で移す手順

1. Gemを開き、「ナレッジ（지식）」にあるファイルを一つずつ開いてダウンロードします。[^transition]
2. 「カスタマイズ（맞춤설정）」→「スキル（스킬）」→「作成（만들기）」→「手動で作成（수동으로 만들기）」に、Gemの名前・説明・指示をコピーして貼り付けます。[^transition][^screen]
3. ファイルまで移すには、今作ったスキルを「ダウンロード（다운로드）」して出てきた`SKILL.md`を、Gemのファイルと同じフォルダに入れます。**フォルダの名前は、スキルの名前と同じでなければなりません。** そのあと、同じスキルの横の「その他のオプション（옵션 더보기）」→「スキルを置き換える（스킬 바꾸기）」で、そのフォルダをアップロードします。[^transition]

Gemsと違って、スキルには**「このスキルでやり取りした会話」の一覧ページがありません。** スキルを使った会話も、サイドメニューの通常の会話一覧に混ざって表示されます。[^transition] Gemsの共有、Driveのファイル・ノートブックを入れる機能は、「今後数週間以内に」スキルにも入ってくるそうです。[^transition]

<Quiz id="ch307-gems" />

## 連携アプリ — Gmail・Drive・カレンダーをGeminiで

**連携アプリ**（Connected Apps）をオンにすると、Geminiが自分のGmail・Drive・カレンダーなどのアプリの内容を探して答えます。許可すれば、そのアプリの中の内容を直したり管理したりする作業も手伝ってくれます。[^apps]
たとえば、「先月受け取ったメールの中から、読書会の場所を教えてくれたメールを探してください」のように聞けます。

### 連携アプリの画面

サイドメニューの「カスタマイズ（맞춤설정）」→「コネクタ（커넥터）」タブで見ます。[^apps][^screen]

![「カスタマイズ（맞춤설정）」の「コネクタ（커넥터）」タブ。①サイドメニューの「カスタマイズ（맞춤설정）」、②上の「探索（탐색）」・「コネクタ（커넥터）」・「スキル（스킬）」タブ、③「インストール済み（설치됨）」一覧（Google Workspace・Google検索サービス・連絡先・YouTube Music・Gemini Notebook・Verify AI）、④アプリの横の点が3つのメニュー、⑤「すべて（전체）」一覧（YouTube・AndroidDevSummit・Googleビジネスプロフィール・GitHub、それぞれに「+」ボタン）、⑥「+ カスタム（+ 맞춤）」ボタンに赤い番号がついている](../../../guide/12-gemini/assets/shot-18-connectors-marked.png)

**赤い番号は、下の一覧の番号と同じ場所です。**[^screen]

- ①サイドメニューの「カスタマイズ（맞춤설정）」を押し、②「コネクタ（커넥터）」タブを選びます。タイトルは「連携アプリ（연결된 앱）」です。
- ③**「インストール済み（설치됨）」**は、すでに連携されているアプリです。このガイドのアカウントでは、Google Workspace・Google検索サービス・連絡先・YouTube Music・Gemini Notebook・Verify AIが表示されていました。
- ④点が3つのメニューを押すと、「今すぐ使う（지금 사용）」と「接続を解除（연결 해제）」が出ます。
- ⑤**「すべて（전체）」**は、さらに連携できるアプリです。「+」で連携します。
- ⑥「+ カスタム（+ 맞춤）」は、他の会社のサーバーを直接つなぐメニューのようです。ヘルプによると、この機能（カスタムアプリ）は**18歳以上で、アメリカにいるユーザー**だけが使えます。[^custom] 初心者の段階では、使わなくてかまいません。

アプリ名を押すと、詳細画面が開きます。何ができて何ができないか、質問の例が出ます。[^apps] 「Google Workspace」を一つ連携すると、**Gmail・Googleカレンダー・Docs・Drive・Keep・Tasks**を一緒に使えるようになります。[^workspace][^screen]

**表示されるアプリは、人によって違います。** デバイス、国、Geminiアプリの種類によって、一覧が変わります。[^apps]

### 先に確認する2つの設定

- **「アクティビティの保存（활동 기록 보관）」がオンになっている必要があります。** オフだと、Webでは連携アプリを使えません。[^apps] この設定は[第9章](09-privacy.md)で詳しく扱います。
- **Gmailの設定の「他のGoogleプロダクトのスマート機能（다른 Google 제품의 스마트 기능）」がオンになっている必要があります。** そうでないとWorkspaceが連携されません。連携できないときはまずこれを確認し、オンにしたあとGeminiを再読み込みしてもう一度連携してください。[^workspace]

### 上手な聞き方

- **新しい会話のたびに、どのアプリから探すかを伝えてください。**「メールから」「Driveから」「カレンダーから」のようにです。同じ会話の次の質問では、もう一度言わなくてもかまいません。[^workspace]
- 入力欄に`@`を入力してアプリを選ぶと、そのアプリを使うよう正確に指定できます。[^apps]
- **文書やメールのアドレス（URL）を貼り付けないでください。** かわりに、内容の中の言葉とアプリ名を書きます。[^workspace]

| 物足りない質問 | より良い質問 |
|---|---|
| 「この文書を要約してください（アドレスを貼り付け）」 | 「Driveから『読書会の会則』という文書を探して、会費の規定だけ要約してください」 |

より良い質問は、アプリ名と探す言葉がそろっているので、Geminiが見当違いのファイルを選ぶことが減ります。

**答えは必ず確認してください。** もっと新しいメールがあるのに古いメールをもとに答えるなど、間違った答えや古い答えが出ることがあります。答えのあとにつく出典を押して、元のメールやファイルを開いてみましょう。[^workspace]

### できないこともあります

Workspaceを連携しても、次のことはできません。[^workspace]

- DocsやGmailの**コメントと画像**の読み取り
- Drive内の**写真と動画**の読み取り
- Driveの**フォルダの作成、ファイルの移動**
- DriveやGmailの**項目数の集計、保存容量の案内**

### 連携しなくても使う公開情報

Google検索、YouTube、Googleマップ、航空券・ホテルの**公開情報**は、別に連携しなくてもGeminiが使います。自分の個人情報は、許可なく開いて見ることはありません。[^apps]

- **YouTube**: テーマに合った動画を探し、内容について聞けます。再生リストに保存したり、コメントをつけたりすることはできません。[^youtube]
- **マップ**: 場所を探し、移動手段ごとの道案内を受けられます。[^maps]
- **航空券・ホテル**: 条件に合った航空券とホテルを探してくれます。**予約はしてくれません。**[^flights]

検索の公開情報は「アクティビティの保存（활동 기록 보관）」がオフでも使えますが、マップ・YouTube・航空券・ホテルはオンになっている必要があります。[^apps]

ヘルプにはDropboxなど他の会社のアプリも出てきますが、**アメリカにいるユーザー専用**のアプリもあります。[^dropbox] 今使っているデバイスの一覧にないアプリは、そのデバイスでは使えません。[^apps]

<Quiz id="ch307-apps" />

## 連携する前に知っておきたい個人情報

連携は便利ですが、**自分のメールやファイルの内容の一部がGeminiに送られます。** 連携する前に、次のことを知っておいてください。[^connected]

- **機微な内容が混ざることがあります。** 連携アプリのデータには、健康や宗教のような機微な内容や機密が入っていることがあります。今後そのアプリに新しくできるデータも、Geminiが見られます。
- **人が一部を見ることがあります。** 連携アプリのデータの一部は、人間のレビュー担当者（訓練を受けた外部業者の職員を含む）が見ます。そのため、**レビュー担当者に見られては困る機密が入ったアプリは連携しないように**と、Google自身が案内しています。
- **学習についての説明は次のとおりです。** Gmailの受信トレイやDrive自体で、AIモデルを直接学習させることはありません。ただし、答えを作るときに使った**要約・抜粋・推論**では学習します。メールやファイルが短ければ、その要約が原文そのままのこともあります。そして「アクティビティの保存（활동 기록 보관）」がオンだと、連携アプリのデータが混ざったアクティビティが、AI学習を含むサービス改善に使われます。
- **連携を切っても、会話の記録は残ります。** アプリの連携を切ったり、そのアプリのデータを消したりしても、「Geminiアプリのアクティビティ（Gemini 앱 활동）」の記録は消えません。記録は別に消す必要があります（[第9章](09-privacy.md)）。

会社のメールや、他の人の情報が多いDriveは、**最初から連携しない**のがいちばん簡単な方法です。必要なファイルだけをその都度アップロードしてもかまいません（[第4章](04-files-create.md#ファイルのアップロード)）。

<Quiz id="ch307-privacy" />

## 実際にやってみよう

1. 「カスタマイズ（맞춤설정）」→「スキル（스킬）」で、「さまざまな視点を探る（다양한 관점 살펴보기）」のようなおすすめスキルを一つ追加して、チャットで`/`を入力して呼び出して使ってみる。
2. 「手動で作成（수동으로 만들기）」で、この章の議事録整理スキルを作り、練習用の会議メモを貼り付けて結果を確認する。担当者をわざと抜いて、「要確認」と出るかどうかを見る。
3. Gemsを使っていたなら、「ナレッジ（지식）」のファイルをダウンロードしておき、いちばん大切なGemを一つ、自分でスキルに移してみる。
4. 「コネクタ（커넥터）」タブで自分のアカウントに連携されているアプリを確認し、不要なアプリは点が3つ→「接続を解除（연결 해제）」で切る。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 課題の議事録の例で、2番のスキルを試してみる。整理されたやることと担当者が、議事録と合っているかを自分で突き合わせる。

## まとめ

- スキルは、保存しておいて`/`（もうすぐ`@`）で呼び出して使う指示。18歳以上・ログイン・「アクティビティの保存（활동 기록 보관）」が必要で、有料プランはなくてもよい。
- 「カスタマイズ（맞춤설정）」→「スキル（스킬）」→「作成（만들기）」から、「Geminiで作成（Gemini로 만들기）」・「手動で作成（수동으로 만들기）」・「アップロード（업로드하기）」で作る。オン・オフ・削除は、この画面でだけ行う。
- 良いスキルは、短く、名前がすることで始まり、説明にいつ使うかが書かれている。
- Gemsは、2026年11月17日に読み取り専用、12月17日になくなり、スキルに自動で切り替わる。大切なGemのファイルは先にダウンロードしておく。
- 連携アプリは、「カスタマイズ（맞춤설정）」→「コネクタ（커넥터）」で管理する。新しい会話のたびにどのアプリから探すかを伝え、答えは出典で確認する。
- 連携アプリのデータの一部は、人が見ることがある。機密が入ったアプリは連携しない。連携を切っても、会話の記録は別に消す必要がある。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Skill | スキル | 保存しておいて、どのチャットでも使い回す指示 |
| SKILL.md | スキル・エムディー | スキルの名前・説明・指示が入ったファイル |
| Gem | ジェム | 指示・ファイルを入れて作る自分だけのGemini。スキルに切り替え中 |
| Connected Apps | コネクテッド・アップス（連携アプリ） | GmailやDriveなどのアプリをGeminiとつないで使う機能 |
| Connector | コネクタ | 連携アプリを管理するタブの名前 |
| Google Workspace | グーグル・ワークスペース | Gmail・Docs・Drive・カレンダーなどのGoogleの業務用アプリのまとまり |
| Human reviewer | ヒューマン・レビュアー（人間のレビュー担当者） | サービス改善のために会話の一部を読む人 |

<ChapterDone :chapter="307" />

次の章: [第8章 仕事を任せる](08-tasks.md)

[^screen]: Gemini Web画面（Google AI Pro、韓国語）で直接確認。サイドメニュー「새 채팅」「라이브러리」「이미지」「예약됨」「맞춤설정」「더보기」（開くと「동영상」「Gems」）。「맞춤설정」の上のタブ「탐색」「커넥터」「스킬」。「스킬」タブの案内 "스킬을 추가하거나 생성하여 Gemini가 할 수 있는 작업 범위를 넓혀 보세요"、「만들기」メニュー「Gemini로 만들기」「수동으로 만들기」「업로드하기」、「추천」スキル「글쓰기 스타일 맞추기」「에너지 효율 최적화」「다양한 관점 살펴보기」「새로운 아이디어 생성」「회의 준비」。「커넥터」タブのタイトル「연결된 앱」、案内 "도구를 연결하여 더 많은 작업을 처리하세요"、「검색」欄と「+ 맞춤」ボタン、「설치됨」Google Workspace・Google 검색 서비스・연락처・YouTube Music・Gemini Notebook・Verify AI、「전체」YouTube・AndroidDevSummit・Google 비즈니스 프로필・GitHub。インストール済みアプリの点が3つのメニュー「지금 사용」「연결 해제」。「Google Workspace」詳細画面のアプリ一覧 Gmail・Google Calendar・Google Docs・Google Drive・Google Keep・Google Tasks。ヘルプのGemsのナレッジファイル欄の名前は、韓国語版で「지식」。（確認日 2026-10-31）
[^skills]: Googleヘルプ「Create & manage skills for Gemini Apps」（韓国語版「Gemini 앱에서 스킬 만들기 및 관리하기」）。"Be 18 or over." / "Have Keep Activity on." / "Important: For now, skills are only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com." / "Tip: Skills are available without a Google AI subscription and can be used in your chats." / "If you don’t find “Customize,” first click More ." / "On the Skills page, you can create a skill with help from Gemini, build one from a prefilled or blank template, or upload a skill file or a folder with a SKILL.md file and optional supported reference files." / "Tip: You can’t activate, deactivate, or delete a skill from a chat or task thread." / "Naming convention: The skill name inside SKILL.md must use all lowercase with words separated by a hyphen (such as my-new-skill)." / "If a skill is off and you ask Gemini to use it, Gemini will ask you if you want to turn it back on." / "Important: If you delete a skill, it can’t be undone." / "Click More   Download . This downloads your skill in a .zip file." 韓国語画面の名前 「비활성화」「Gemini로 수정」「다운로드」「삭제」. https://support.google.com/gemini/answer/17094296 （確認日 2026-10-31）
[^transition]: Googleヘルプ「About the transition from Gems to skills」（韓国語版「Gems에서 스킬로의 전환에 관한 정보」）。"Skills are reusable custom instructions that can help you automate tasks and save time in Gemini." / "Easy access: Use a skill by typing / (soon to be @) followed by the skill's name directly in any Gemini chat." / "Automatic use: Gemini automatically recognizes when a skill is relevant to your current prompt and applies it for you." / "Stackable: Combine multiple skills in a single chat to handle more complex tasks." / "You can create as many skills as you want, but only 100 can be active at a time." / "For now, the option to upload files to create skills is only available in the Gemini app on Mac and in the Gemini web app at gemini.google.com." / "Skills work with some but not all features. You can use them with Connected Apps like Workspace apps, but they do not yet work with features like Canvas and Deep Research." / "November 17, 2026: Gems transition to skills and become read only. You can still access your Gems, but can’t use or edit them, or create new ones." / "December 17, 2026: Gems are removed from Gemini Apps. You’ll no longer be able to access your Gems." / "If you’re under 18 and signed in to a personal Google account, your Gems will transition to skills at a later date. We’ll share more details soon." / "March 2027: Workspace business, enterprise, and non-profit accounts." / "June 2027: Workspace education accounts." / "As part of this change, Opal, our experiment for building mini apps, as well as Gems by Google Labs, will also go away at the same time in November." / "When we remove Gems, we’ll automatically recreate your Gems as skills." / "Skills have a 100 MB total size limit for files. If your Gem is larger than this when we transition it to a skill, we automatically remove the largest files first until it’s under the limit." / "Some file types are not supported in skills. When we transition your Gems to skills, these unsupported file types will not be included:" / "If the Gem has files under “Knowledge,” download your files." / "Copy and paste the name, description, and instructions from your Gem to your skill." / "On your computer, open the .zip file and move the SKILL.md file into the folder with your Gem files." / "Important: The name of the folder must match the name of the skill." / "Go back to the Skills page, and next to the same skill, click More options   Replace skill ." 韓国語版の名前 「옵션 더보기」「스킬 바꾸기」. / "Unlike Gems, skills don’t have a dedicated page that lists your recent chats with that skill." / "In the coming weeks, skills will have the features you loved in Gems, including the ability to share them with others and add files from Google Drive and notebooks from Gemini Notebook." https://support.google.com/gemini/answer/18560919 （確認日 2026-10-31）
[^write]: Googleヘルプ「Write effective skills for Gemini Apps」（韓国語版「Gemini 앱을 위한 효과적인 스킬 작성하기」）。"Keep your skills short and focused. Instead of long paragraphs of general explanation, focus on:" / "Check if a skill is relevant. Gemini only checks the skill’s name and description to determine if a skill is relevant for your task." / "Repeat prompts: You give Gemini the same instructions over and over, especially for complex tasks with long prompts." / "A one-off job: You only need to do it once and won't repeat it." / "Start with an action statement, or verb. Focus on what the skill does, not what it is." / "Keep the description focused. Make it as clear as possible and within the 1024 character limit." / "Instead of giving instructions that only apply to a specific task, give instructions that teach Gemini how to handle a type of task." / "Tell Gemini exactly what to do if a piece of information is missing. This prevents Gemini from making up or skipping important details." https://support.google.com/gemini/answer/17102773 （確認日 2026-10-31）
[^gems]: Googleヘルプ「Use Gems in Gemini Apps」（韓国語版「Gemini 앱에서 Gems 사용하기」）。"Enter a name and instructions for your Gem." https://support.google.com/gemini/answer/15146780 （確認日 2026-10-31）
[^apps]: Googleヘルプ「Use & manage Connected Apps in Gemini」（韓国語版「Gemini에서 연결된 앱 사용 및 관리하기」）。"With your permission, Gemini can also help you take actions, like editing and managing your content in other apps." / "When Keep Activity is off, Connected Apps won’t be available on gemini.google.com, iOS devices, or smart watches." / "To specify an app for Gemini to use, enter @ and select the app." / "At the top, click Connectors." / "On the app’s details page, you can find a connected app’s full description, supported and unsupported actions, and example prompts." / "The apps in Connected Apps settings vary by Gemini app, device, country, and more." / "Gemini won’t access your personal information or content in these services without your permission." / "Gemini can always use public information from Google Search, even if Keep Activity is off or you’re signed out." https://support.google.com/gemini/answer/13695044 （確認日 2026-10-31）
[^workspace]: Googleヘルプ「Connect the Google Workspace app to Gemini Apps」（韓国語版「Google Workspace 앱을 Gemini 앱에 연결하기」）。"For Gemini Apps to connect with Google Workspace, Smart features in other Google products must be turned on in your Gmail settings." / "Tip: Don’t paste the URL of a document or email in your prompt." / "For every new conversation, ask the Gemini app to get or add something from your personal Google Workspace explicitly." / "Gemini Apps can hallucinate responses or provide outdated information, like from an older email when there’s a more recent one." / "Access comments or images in Docs or Gmail" / "Access pictures and videos in your Drive" / "Manage content in your Drive, like create folders or move content between folders" / "Count items in your Drive or Gmail or tell you how much Drive or Gmail storage you have" https://support.google.com/gemini/answer/15229592 （確認日 2026-10-31）
[^youtube]: Googleヘルプ「Find & ask about YouTube content in Gemini Apps」（韓国語版「Gemini 앱에서 YouTube 콘텐츠를 찾고 질문하기」）。"Gemini uses public information from YouTube to help you:" / "Take actions that impact your YouTube experience, like saving a video to a playlist or adding a comment on a video." https://support.google.com/gemini/answer/16622858 （確認日 2026-10-31）
[^maps]: Googleヘルプ「Find places & get directions in Gemini Apps」（韓国語版「Gemini 앱에서 장소 및 경로 찾기」）。"Get directions based on mode of transport and help you avoid things like tolls" https://support.google.com/gemini/answer/16622866 （確認日 2026-10-31）
[^flights]: Googleヘルプ「Search for flights & hotels in Gemini Apps」（韓国語版「Gemini 앱에서 항공편 및 호텔 검색하기」）。"Gemini uses public information from Google Flights and Google Hotels to help you:" / "Book a flight or hotel for you" （できないことの一覧） https://support.google.com/gemini/answer/16622256 （確認日 2026-10-31）
[^dropbox]: Googleヘルプ「Manage files & folders in your Dropbox in Gemini Apps」。"Be 18 or over and in the US." https://support.google.com/gemini/answer/17211088 （確認日 2026-10-31）
[^custom]: Googleヘルプ「Connect & manage custom apps for Gemini Apps」。"Be 18 or over and in the US." / "Google does not control, monitor, or secure third-party MCP servers. You’re responsible for supervising the MCP server." https://support.google.com/gemini/answer/17209137 （確認日 2026-10-31）
[^connected]: Googleヘルプ「About personalization with Connected Apps」（韓国語版「연결된 앱을 통한 개인화에 관한 안내」）。"Data shared may relate to topics you find sensitive, like race, religion, and health, or confidential info." / "Keep in mind that if new data is added to these apps in the future, Gemini will have access to that data." / "Gemini does not train generative AI models directly on your Gmail inbox, Drive, Contacts, Calendar or other Workspace apps, on your Google Wallet and payments services, or on imagery or audio from your Google Photos library." / "To make our responses relevant, helpful, and high quality, we train our generative AI models off of these summaries, excerpts, generated media, and inferences." / "Gemini Apps activity, which includes data from apps you connect, is used to improve Google services for everyone, including by training generative AI models, if your Keep Activity setting is on." / "In some cases, for example, where the email or file is brief or particularly relevant to respond to the prompt, the summary may just be the email or file." / "When connected to Gemini, a subset of Connected Apps data processed by Gemini is reviewed by human reviewers (including trained service providers) to debug our services, help keep them safe, and improve them." / "Important: Please don't connect your apps to Gemini Apps if they contain confidential information that you wouldn’t want a reviewer to see." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." https://support.google.com/gemini/answer/16836988 （確認日 2026-10-31）
