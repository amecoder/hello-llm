# 第11章 専門家のように使う — 初心者を越えて、仕事に合わせて使いこなす

> **一言まとめ**: 専門家とは、新しい機能をたくさん知っている人ではなく、**仕事を任せるように伝え、仕事に合った道具を選び、繰り返す作業は型にして、結果を確認してから使う**人です。
> この章では、第1〜10章で学んだ機能を**組み合わせる方法**と、まだ扱っていない予約タスク・データ分析・勉強モードを紹介します。

画面は2026年10月のWeb版（Plusプラン）を基準にしています。無料プランやスマホアプリでは、メニューの位置が少し異なることがあります。

## 専門家は何が違うのか

[ステップ1 第3章「同じ道具、違う結果」](../00-common/03-why-learn.md#同じ道具、違う結果)で、同じAIでも使い方によって結果が変わると学びました。OpenAIが会社でのChatGPTの使われ方を調べたレポートにも、似た点が見られます。効果が大きそうな場面でも、推論・ディープリサーチ・プロジェクト・カスタム指示のような**高度な機能はあまり使われていません**。[^adopt]

何を任せるかを判断する方法、任せる前に試す方法、仕事の重さに見合うだけ確認する方法のように、**どのAIにも通じるやり方**は[ステップ1 第11章「専門家のように使う」](../00-common/11-expert.md)にあります。この章では、そのやり方をChatGPTの機能に当てはめてみます。この章で扱うものを、先に一目で見ておきましょう。

| 要素 | 一言の説明 | 詳しく見る |
|---|---|---|
| 任せるように伝える | やること・対象・目的・形を伝え、最初の答えを見ながら直していく | [ステップ1 第4章「よいプロンプトの5つの要素」](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)、[ステップ1 第6章「直してほしいと上手に伝える方法」](../00-common/06-conversation.md#上手に直してもらう言い方) |
| 道具を選ぶ | 検索・ディープリサーチ・Work・推論レベルのうち、仕事に合ったものを使う | [第6章「ディープリサーチ — レポートを任せる」](06-search.md#ディープリサーチ-—-レポートを任せる)、[第7章「ChatとWorkの違い」](07-projects-plugins.md#chatとworkの違い) |
| 資料をためておく | 同じ仕事のファイル・指示・うまくいった答えを一か所に集める | [第7章「プロジェクト — 会話・ファイル・指示を一つのフォルダに」](07-projects-plugins.md#プロジェクト-—-会話・ファイル・指示を1つのフォルダーに) |
| 型を作る | 繰り返す依頼を、指示・テンプレート・スキルとして残す | [ステップ1 第8章「4. 再利用する型にする」](../00-common/08-meta-prompting.md#_4-使い回すひな形にする) |
| 予約タスク | 決まった時間に、ChatGPTが自分で実行するようにする | [この章「決まった時間に自動で — 予約タスク」](#決まった時間に自動で-—-予約タスク) |
| データ分析 | 表と数字を計算し、グラフでもらう | [この章「表と数字を任せる — データ分析」](#表と数字を任せる-—-データ分析) |
| 勉強モード | 答えの代わりに質問で理解を助けてもらう | [この章「学ぶために使う — 勉強モード」](#学ぶために使う-—-勉強モード) |
| 答えの形 | 話し方・表・図の量を自分の仕事に合わせる | [第5章「話し方を決める」](05-memory.md#話し方を決める-—-基本のスタイルとトーン、温かさ、自分の文体を参照) |
| 確認する | 成果物の種類ごとに見る場所を決めておき、確認する | [ステップ1 第9章「確認する4つの習慣」](../00-common/09-safety.md#確認する4つの習慣) |

<Quiz id="ch111-difference" />

## 仕事を任せる5行 — 結果・資料・残すもの・確認基準・形

質問一つではなく、文書や表の作業をまるごと任せるときは、[ステップ1 第4章「よいプロンプトの5つの要素」](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)に2つ加えて用意しましょう。一つは、数式・順序・表の構造のように**変えてはいけないもの**[^docs]、もう一つは、結果がうまくできたか判断する物差しである**確認基準**（review criteria）です。[^work] この2つを先に伝えておくと、問題のない書式が変わってしまったり、数字が間違ったまま通ってしまったりすることを減らせます。

下の5行で書いてみましょう（[ステップ1 第7章「1. マークダウンで整理する」](../00-common/07-structured-prompts.md#_1-markdownで整理する)）。
- **結果**: 何を、誰のために、なぜ作るのか
- **資料**: 参考にするファイル
- **残すもの**: 変えてはいけないもの
- **確認基準**: 最後に何と照らし合わせるか
- **形**: 形式と長さ
```
結果: 課長に提出する今月の支出のまとめを作ってください。来週の予算会議で使います。
資料: 添付した支出明細のファイルを使ってください。
残すもの: 項目の名前と順序は変えないでください。
確認基準: 最後に、合計が元のファイルと同じかどうか照らし合わせて教えてください。
形: 項目別の表を1つと、3行の要約。
```

::: details もらえる答えはだいたいこんな感じです（例 — 押して開く）
このガイドが作った例です。実際の答えは、サービスやそのときによって異なります。

> | 項目 | 今月の金額 |
> |---|---|
> | （ファイルの最初の項目） | ○○ウォン |
> | （ファイルの2番目の項目） | ○○ウォン |
> | … | … |
> | 合計 | ○○ウォン |
>
> **3行の要約**
> 1. 今月の総支出は○○ウォンです。
> 2. いちばん多く使った項目は（項目名）で、○○ウォンです。
> 3. 来週の予算会議では、（項目名）の支出を減らす方法を話し合ってみるとよいでしょう。
>
> **合計の照合**: 表の合計○○ウォンは、元のファイルの合計と同じです。

**うまくもらえたか確認しましょう**: 項目の名前と順序が元のままか？ 表1つと3行の要約で届いたか？ 最後に合計の照合結果があるか？ 「同じ」という言葉だけを信じずに、元の合計を一度自分で見てください。

:::

**分けるか、まとめるか？** OpenAIヘルプは、複雑な仕事を小さな依頼に分けるよう勧めています（[ステップ1 第5章「3. 段階に分ける」](../00-common/05-prompt-patterns.md#_3-段階を分ける-—-プロンプトチェイニング)）。[^prompt] Academyの資料は、互いに関係する文脈と指示を一つの依頼にまとめてもよいと説明しています。ただし、情報が多すぎると答えがぼやけることがあると付け加えています。[^aprompt]

途中の結果を見て次の方向を決める必要があるなら、分けましょう。目標が一つにはっきりしているなら、5行を一つの依頼にまとめましょう。どちらの場合も、本当に必要な資料だけをつければOKです。

**複数の段階が必要な仕事は、止まる場所を決めてください。** 最初から完成版を頼まずに、どこで自分が選んだり確認したりするかを先に決めてみましょう。段階が小さければ、ChatGPTが誤解したときに早く気づけます。全部作り終えたあとで、最初から直さなくてもすみます。[^academy-content]
```
今週の家族のお出かけの準備を手伝ってください。
1. 日付・予算・出発地域から、候補を3か所、表にまとめてください。
2. 移動時間と費用を比べてください。ここで止まってください。場所は私が選びます。
3. 選んだ場所で、1日の日程表を作ってください。
```

**ファイルが複数あるなら、下書きより先に要約をもらいましょう。** 「今何が見えているか」から話させると、必要なファイルを漏れなく読んだかどうかを、下書きを書く前に確認できます。Academyの講座も、Workに文書を任せる前にこの順序を踏ませます。[^academy-content]
```
まだ下書きは書かないでください。まず添付したファイルを読んで、決まっていること・まだ決まっていないこと・抜けている、またははっきりしない内容を、短くまとめてください。
```

<Quiz id="ch111-five-lines" />

## 仕事に合った道具を選ぶ

同じ質問でも、どの機能で聞くかによって結果が変わります。手早く知りたい事実は検索で探しましょう。深さと丁寧さが必要なら、ディープリサーチを使いましょう。[^deep] そのほかの仕事は、下の表から選んでみてください。

| やりたいこと | 使う機能 | 詳しく見る |
|---|---|---|
| 今日の天気・営業時間のような手早い事実 | ウェブ検索 | [第6章「ウェブ検索」](06-search.md#ウェブ検索-—-chatgptにインターネットを調べさせる) |
| 複数の資料を比べた長いレポート | ディープリサーチ | [第6章「ディープリサーチ」](06-search.md#ディープリサーチ-—-レポートを任せる) |
| 文書・表・発表資料のような完成ファイル | Work（有料プラン） | [第7章「ChatとWorkの違い」](07-projects-plugins.md#chatとworkの違い) |
| すでにあるWord・PowerPointファイルの修正 | Microsoftの追加機能「ChatGPT」（無料を含む） | [この章の下](#word・powerpointの中で使う) |
| 難しい計算・複数の条件が絡み合った計画 | 推論レベルを上げる | [第2章「推論レベルと考える時間」](02-screen-tour.md#推論レベルと考える機能-—-どのくらい深く考えるか) |
| 表・数字の分析とグラフ | ファイルをアップロードしてデータ分析 | [この章の下](#表と数字を任せる-—-データ分析) |
| 新しいことを学ぶ | 勉強モード | [この章の下](#学ぶために使う-—-勉強モード) |

**どの機能が使えるか気になったら、すぐにやらせてみましょう。** 「あなたはこれができる？」と聞くより、そのほうがよい方法です。ChatGPTは、自分のシステムが今どう動いているかを見ることができません。そのため、聞くと間違って答えることがあります。[^ask]
```
添付したレシートの写真5枚から、日付・店名・金額を取り出して、表にしてください。
```

### Word・PowerPointの中で使う

Word・Excel・PowerPointは、**ChatGPT追加機能**（add-in、プログラムの中に組み込んで使う小さな機能）を一つ共有して使います。Microsoftのマーケットプレイスで「ChatGPT」をインストールしてみてください。文書の横のウィンドウで、そのまま修正できます。[^word][^ppt]

- Word用は、**無料（Free）を含むすべてのプラン**で使えます。PowerPoint用は、FreeとGoで限定的に使えます。会社のアカウントなら、管理者が許可しないと表示されません。[^word][^ppt]
- 追加機能の中の会話は、ChatGPTの会話履歴とは別です。メモリとスキルも引き継がれません。[^word]
- **大きく直す前に、コピーを保存してください。** 大きな修正なら、計画から見せてほしいと頼みましょう。コピーがあれば、必要なときに元に戻せます。[^word][^ppt]

```
この発表資料の3〜5番のスライドを1枚に減らしたいです。すぐには直さず、どうまとめるか計画から見せてください。
数字と表はそのままにして、タイトルは15文字以内で書いてください。
```

<Quiz id="ch111-tools" />

## 資料をためて使う

[第7章「プロジェクト」](07-projects-plugins.md#プロジェクト-—-会話・ファイル・指示を1つのフォルダーに)で、会話・ファイル・指示を一つのフォルダにまとめる方法を学びました。プロジェクトは、週ごとの調査や文章の下書きのような**繰り返す作業**に、また使ってみてください。[^projects] ここからさらに一歩進めると、うまくできた答えも次に使う資料としてためておけます。
- **うまくできた答えは、資料として保存しましょう。** プロジェクトの会話で、答えの下のメッセージメニューを開いて、「プロジェクトに保存（프로젝트에 저장）」または「プロジェクトのソースに追加（프로젝트 소스에 추가）」を選べばOKです。その答えがプロジェクトの「ソース（소스）」に入ります。メニューの名前は、画面によって異なることがあります。[^projects]
- **ほかのサービスの資料もつなげられます。** 個人プロジェクトのソース欄で「Add sources」を押して、Slackのチャンネルや、Google Driveのファイル・フォルダのリンクを入れてください。[^projects] 以前アップロードしたファイルは、[第4章「ライブラリ」](04-files-images.md#ライブラリ-—-アップロードしたファイルをまとめておく場所)からまた呼び出せばOKです。

<!-- スクリーンショットが必要: プロジェクトの会話で答えのメッセージメニューを開き、「プロジェクトのソースに追加」が見える画面 -->

プロジェクトの指示に「たまった資料を先に見て」と書いておくとよいでしょう。
```
このプロジェクトは、毎週私の町の文化イベントを調べる場所です。新しい調査をする前に、「ソース」に保存された過去の調査結果を先に見て、
先週と重なるイベントは除き、新しくできたものだけを表にまとめてください。
```

<Quiz id="ch111-sources" />

## 繰り返す仕事は型にする — 指示・テンプレート・スキル

どの仕事から型にするかは、[ステップ1 第11章「最初に練習する仕事を選ぶ」](../00-common/11-expert.md#最初に練習する仕事を選ぶ)を見てください。

同じ仕事をよくするなら、型を作っておきましょう。最初の一歩は、[ステップ1 第8章「4. 再利用する型にする」](../00-common/08-meta-prompting.md#_4-使い回すひな形にする)の型を、[第7章のようにプロジェクトの指示に入れること](07-projects-plugins.md#使い回す型をプロジェクトに入れる)です。その次がテンプレートとスキルです。[^docs][^skills]

| 名前 | 何か | 使える場所 |
|---|---|---|
| 参照ファイル | 今回一度だけ見せる例のファイル | すべての会話 |
| テンプレート（template） | 例のファイル＋再利用する指示。作った本人だけが使う | WebのWork（有料プラン） |
| スキル（skill） | 指示・例を入れておいた、再利用して共有できる作業方法 | ヘルプによるとBusiness・Enterprise・Eduなど会社・学校向けのプラン |
| プラグイン（plugin） | スキルとアプリ連携をまとめたセット | [第7章「プラグイン」](07-projects-plugins.md#プラグイン-—-他のサービスや作業のやり方を加える) |

**テンプレートは、WebのWorkで作ります。** 入力欄に `@Template-Creator` と入力してください。参考にするファイルを一つ（Word・Excel・PowerPointのファイル、またはGoogleドキュメントのリンク）貼り付けます。そして、残すもの、変えるもの、毎回入れる情報を説明すればOKです。できたら「インストール（설치）」を押してください。[^docs]
```
@Template-Creator 添付した週報のファイルでテンプレートを作ってください。
残すもの: タイトル行、表の3つの列（完了 / 進行中 / 来週の予定）、フォントと色。
変えるもの: 表の中の内容と日付。
毎回入れる情報: その週の業務メモ。
```

作ったテンプレートを使うときは、入力欄に `@Documents`・`@Spreadsheets`・`@Presentations` のどれかを入力してください。テンプレートギャラリーが開いたら、「Use template」を選びます。選ぶだけでは作業は始まりません。続けて、今回の内容を書いて送る必要があります。[^docs]

プロジェクトの指示を書くときは、下のコツを参考にしてみてください。もとはOpenAIが、カスタムGPTの指示に勧めているコツです。[^gpt-make] プロジェクトの指示にも通じると見るのは、このガイドの解釈です。

| コツ | 例 |
|---|---|
| 「しないで」を並べるより、「こうして」を具体的に | 「長く書かないで」の代わりに「3行で書いて」 |
| 参考ファイルは**資料**に、ルール・話し方は**指示**に | 会社の書式はファイルで、「表は3列」は指示で |
| 結果が物足りなければ、機能を足す前に指示を磨いて、よい例を一つ入れる | 「こういうメモが来たら → こうまとめる」の例を一組 |

**スキル**は、横のメニューの「プラグイン（플러그인）」→「スキル（스킬）」タブ→「作成（만들기）」から作ります。「チャットで作成（채팅으로 만들기）」などを選べばOKです。[^skills] ただし、ヘルプはスキルを**Business・Enterprise・Healthcare・Eduプラン**で使えると書いています。個人プランの画面にも「スキル」タブが見えることがあります。使えるかどうかは、自分の画面で直接確認してください。

他の人が作ったスキルのファイルをアップロードするときは、作った場所を信頼できるか先に確かめましょう。自動検査があっても、自分の確認の代わりにはなりません。[^skills]

**スキルはいつ作るのがよいでしょうか？** 同じ頼みごとを同じ基準で繰り返しているなら、作ってみる価値があります。まだ早い場合は、[ステップ1 第11章「繰り返す仕事はためておく」](../00-common/11-expert.md#繰り返す仕事は積み重ねておく)にあります。[^academy-content]

<Quiz id="ch111-templates" />

## 決まった時間に自動で — 予約タスク

**予約タスク**（scheduled tasks）は、ChatGPTが決めておいた時間に自分で仕事をする機能です。一度だけ実行することも、繰り返し実行することもできます。何かが変わるのを見守って、知らせてもらうこともできます。[^tasks] 作り方は簡単です。会話の中で、ただ頼めばOKです。
```
毎週月曜日の朝8時に、今週のソウルの天気予報を曜日ごとに一行でまとめて教えてください。
```

作ったタスクは、横のメニューの「予約（예약）」で見たり、直したり、一時停止したり、削除したりできます。[^tasks][^scheduled-name] 設定→「通知（알림）」→「タスクの管理（작업 관리）」からも開けますし、会話の•••（その他）→「予約タスクを表示（예약 작업 보기）」からも開けます。[^tasks]

通知をどう受け取るかは、設定→「通知」でプッシュかメールかを選んでください。スマホにプッシュ通知を受け取るには、スマホアプリでタスクを作ればOKです。[^tasks]

![横のメニューの「予約（예약）」画面。上に「タスクを予約（작업 예약하기）」の入力欄、その下に作ったタスクが一行（一時停止・編集・•••のボタン）、その下に「おすすめ（추천）」のタスク一覧がある](../../../guide/11-chatgpt/assets/shot-29-scheduled.png)

*タスク名は、例として書き換えた画面です。タスクの行の左に一時停止、右に編集と•••のボタンがあります。*[^screen-scheduled] 上の「タスクを予約」欄に、頼みごとをそのまま書いて作ることもできます。

同時にオンにしておけるタスクの数は、プランごとに違います。FreeとGoは3個、Plusは5個、BusinessとEduは10個、ProとEnterpriseは15個で、この数字は変わることがあります（確認日 2026-10-24）。Freeでは、1日1回までしか実行されません。時間も、朝・午後・夜のように大まかにしか決められません。上の例のように正確な時刻を決めたり、毎時間実行したりするには、有料プランが必要です。[^tasks] 新しいメールが来たら反応するような**アプリイベントのタスク**は、Workで作ります。FreeとGoでは使えません。[^tasks]

注意する点もあります。[^tasks]
- **プロジェクトの中で作ったタスクは、そのプロジェクトのファイルを読めません。** ファイルの内容が必要なら、指示文に直接書いてください。
- 音声での会話・カスタムGPT・[ロックしたチャット](03-chats.md#他の人に開かれないように-—-ロックしたチャット)では、予約タスクを作れません。
- タスクを共有リンクで共有すると、受け取った人に指示文がそのまま見えます。そのため、健康・金融の情報やパスワードは入れないでください。共有しても、自分がつないでおいたアプリ（例: Slack）の接続や権限は引き継がれません。[^slack]
- つないだアプリでメールを送ったりファイルを変更したりするタスクは、**自分が承認するまで止まっている**ことがあります。結果が届かなければ、横のメニューの「予約」で、承認待ちになっていないか確認してみてください。[^apps-trouble]

**どんな仕事を予約するとよいでしょうか？** 結果を見て自分が判断する仕事に使ってみてください。定期的に確認して、見守って、要約して知らせてほしい、と頼めばOKです。送信・投稿・削除・承認のように、外に出てしまったり元に戻しにくかったりする仕事には気をつけましょう。[^academy-content]

**予約する前に、自分で何回かやってみてください。** 同じ頼みごとを手で送りながら、プロンプトと資料を磨いて、結果が信頼できるようになったら予約します。指示文には、これらを書いておきます。[^academy-content]
- どの資料を見るか
- 何を作るか
- 情報がないときはどうするか
- 何は自分が確認するか

このガイドが作った例です。
```
毎週金曜日の午後5時に、私の区庁のホームページのお知らせから、今週新しく掲載されたイベントと受付日程を探して、表にまとめてください。
日付がはっきりしないものは、でっち上げずに「要確認」と書いて、出典のリンクをつけてください。申し込みや投稿はしないでください。
```

<Quiz id="ch111-scheduled" />

## 表と数字を任せる — データ分析

**データ分析**（data analysis）は、別にオンにするメニューがありません。[第4章「写真・ファイルのアップロード」](04-files-images.md#写真・ファイルをアップロードする)のように、ExcelやCSVのファイルをアップロードして、気になることを聞けばOKです。ChatGPTが要約・表・グラフを作り、必要ならPython（パイソン、計算用のプログラミング言語）で直接計算します。[^data]

正確な結果をもらうには、**アップロードする前にファイルを整えてください。**[^data]
- 最初の行には、「日付 / 品目 / 数量 / 金額」のようにわかりやすい列の名前を置きます。
- 1行には1件だけ書きます。
- 1つのシートに表を複数置いたり、途中に空行を入れたりしません。

ファイルをアップロードしたら、すぐに合計を聞かずに、**データに問題がないかどうかから**見させてください。OpenAIも、分析をこの質問から始めるよう勧めています。その次は、**計算方法を自分で指定してください。** 最初の試行の計算方法やグラフが、自分の意図と違うことがあるからです。[^data]
```
このデータによくある問題（空の値、飛び抜けた値、重複、日付・数字の形式の誤り）がないか、先に確認してください。
問題がなければ、「金額」の列を品目ごとに合計して、大きい順に表を作り、棒グラフで見せてください。
計算に使った方法と前提も、一行ずつ書いてください。
```

- ヘルプは、棒・線・円・散布図のグラフを、「インタラクティブなグラフに切り替え（대화형 차트로 전환）」で自分で触って動かせると説明しています。2026-10-28の画面では、このボタンの代わりに「グラフをダウンロード（차트 다운로드）」「グラフを展開（차트 펼치기）」だけが見えました。[^screen-data] 結果の表を展開して、必要なセルだけを選んで聞き直すことができ、表はCSV（Excelで開けるカンマ区切りのファイル）でダウンロードします（[ステップ1 第7章「3. Excelに移すときは表でもらう」](../00-common/07-structured-prompts.md#_3-excelに移すときは表で受け取る)も参考にしてください）。[^data]
- **限界**: 分析用のPythonは、インターネットに出られません。スキャンしたPDFや写真の中の表の数字は正確でないことがあり、大きなファイルは一部しか見られないので、シートや範囲を指定します。[^data]

[続きの課題](../00-common/practice-kit.md)の架空の会費の帳簿（fees.csv）をアップロードして、上のプロンプトをそのまま送ってみました。ChatGPTは、金額が空の行と、2回書かれた行を見つけました。そして「問題がなければ」という条件のとおり、グラフを描く前に止まって、確認を求めてきました。

![データ点検の結果の表。空の値1件（案内メールの送信）、重複1組（お菓子32,500ウォン）、飛び抜けた値は要確認、日付の形式は正常、数字の形式1件がまとめられていて、下に計算方法と前提が書かれている](../../../guide/11-chatgpt/assets/shot-30-data-check.png)

「お菓子は間違えて2回書いたんだ」と伝えると、項目別の支出を棒グラフで描きました。収入210,000ウォン、支出114,300ウォン、残りのお金95,700ウォンは、その下の表にまとめました。手で足した値と同じでした。

**グラフの韓国語の文字が四角（□）に文字化けしたら**、そう伝えて描き直してもらってください。最初にもらったグラフは、項目名が四角に化けていました。「韓国語がきちんと見えるように描き直して」と頼むと、文字がすぐ読めるグラフに描き直しました。[^screen-data]

![最初にもらった項目別支出の棒グラフ。数字は見えるが、項目名やタイトルなどの韓国語が四角に文字化けしている](../../../guide/11-chatgpt/assets/shot-30-data-chart-broken.png)

![描き直した項目別支出の棒グラフ。横断幕の制作45,000ウォン、お菓子32,500ウォン、セミナー室の借用20,000ウォン、11月の本の購入16,800ウォンで、下に総支出114,300ウォンがある](../../../guide/11-chatgpt/assets/shot-30-data-chart.png)

*会話とアップロードしたファイルは、撮影後に削除しました。会話を削除しても、アップロードしたファイルはライブラリに残っているので、別に削除しました（[第4章](04-files-images.md#ライブラリ-—-アップロードしたファイルをまとめておく場所)）。*

<Quiz id="ch111-data" />

## 学ぶために使う — 勉強モード

**勉強モード**（study mode）は、答えをすぐに渡さず、教えてくれる方式です。質問を投げかけ、段階的に説明し、理解したかを確認しながら進みます。**すべてのプラン**で、Web・iOS・Androidから使えます。[^study]

Webでオンにするには、入力欄に `@study` と入力して、候補の一覧から「勉強する（공부하기）」を選んでください。+ボタンを押して `study` で検索して選んでもかまいません。`chatgpt.com/studymode` に直接行ってもOKです。[^study] 勉強モードは、通常の会話でオンにしてください。[一時チャット](03-chats.md#履歴を残さない-—-一時チャット)、カスタムGPT、プロジェクトでは、オンにできません。[^study]

![入力欄に @study を入力すると、下に「勉強する — 新しい概念を学びましょう（공부하기 — 새로운 개념을 배워보세요）」という候補が出た画面](../../../guide/11-chatgpt/assets/shot-31-study-mention.png)

*候補の一覧には「勉強する」と表示されます。送信する前なので、まだ何も始まっていない画面です。*[^screen-study]

最初のメッセージに、下の内容を入れてみましょう。そうすると、勉強モードがもっとうまく手伝ってくれます。[^study]
- 自分のレベル
- 科目と正確なテーマ
- やりたいこと
- すでに知っていること
- 試験の日付・形式
- 資料

```
20分間で、このテーマを復習したいです。テーマは中学2年の理科の「電気回路」です。
オームの法則は聞いたことがありますが、直列と並列がごちゃごちゃになります。来週の火曜日に選択式の試験があります。
いちばん大事な概念から短く教えてください。そのあとは、一度に一問ずつ出題して、私の答えを確認してください。
```

勉強モードも間違えることがあります。ときどき、答えをすぐに教えてしまうこともあります。そんなときは、「ヒントだけちょうだい」「一問ずつ出して」と頼み直してください。宿題・試験・健康・法律・お金の問題のように重要な内容は、必ず別に確認してください。[^study]

勉強モードで、復習用の資料を作ってもらうこともできます。クイズやフラッシュカード（表が質問・裏が答えの暗記カード）の形式で頼んでみましょう。[^study] フラッシュカード機能で作ったカードは、ライブラリに自動的に保存されます。カードの内容は、元のノートと照らし合わせてください。[^study]

勉強モードなしで使える、説明を求めるプロンプトは、[プロンプト集「勉強・説明を聞く」](../00-common/prompt-library.md#勉強・説明を聞く)にあります。

<Quiz id="ch111-study" />

## 答えの形を自分の仕事に合わせる

[第5章「話し方を決める」](05-memory.md#話し方を決める-—-基本のスタイルとトーン、温かさ、自分の文体を参照)で、基本スタイルと「温かさ（따뜻함）」を見ました。ここでは、答えの形を仕事に合わせてさらに整える方法を4つ見ます。作った画像を直す方法は、[第4章「画像を作る」](04-files-images.md#画像を作る)にあります。

![パーソナライズの画面。一番下の⑤「基本スタイルとトーン（기본 스타일 및 톤）」と⑥「温かさ（따뜻함）」の選択ボタンを見る。特性は、この場所で調整する](../../../guide/11-chatgpt/assets/shot-06-personalization-marked.png)

- **特性**（characteristics）は、温かさ・熱意・見出しとリスト・絵文字を「もっと（+）」または「もっと少なく（–）」の側に少しずつ調整する設定です。設定→「パーソナライズ（개인 맞춤 설정）」で変えられます。変えると、このチャットと今後の新しいチャットに適用されます。[^char] 2026-10-23の画面では、「温かさ」（上の図の⑥）だけ確認しました。ほかの項目は、自分の画面で探してみてください。
- **表や図が多すぎるときは、減らせます。** 最新のモデルは、答えに表・ボタン・グラフを混ぜて見せることもあります。Web設定のパーソナライズで、「Layout and Visuals」を「Simple」に変えてみてください。この名前はヘルプの英語表記で、韓国語の画面での名前は確認できていません。変えても、一部は出ることがあります。[^ui]
- **いつもほしい形は、指示で固定しましょう。** 「答えは短く」「選択肢を比べるときは表で」のようなことを、[第5章「カスタム指示」](05-memory.md#カスタム指示-—-いつも守ってほしいこと)に書いておけばOKです。[^ui]
- **答えの中で、すぐに直すこともできます。** メールやメッセージのような下書きは、ライティングブロック（writing block、答えの中ですぐに直せる文章の箱）として出ることがあります。その場で直接直したり、一部だけ選んで直してほしいと頼んだりしてみてください。直した内容は会話に保存され、次の質問で使われます。[^blocks]
```
さっき書いたメールの下書きの2番目の段落だけ、もっと短く丁寧に直してください。残りはそのままにしてください。
```

<Quiz id="ch111-shape" />

## 信じる前に確認する

どれくらい丁寧に見るか、どの段階で見るかは、[ステップ1 第11章「仕事の重さに見合うだけ確認する」](../00-common/11-expert.md#仕事の重さに応じて確認する)で学びます。ここでは、ChatGPTの成果物ごとに何を見るかを確認します。

成果物ごとに、見る場所が違います。

| 成果物 | 確認する場所 |
|---|---|
| データ分析 | 計算に使った方法・コード・前提。方法が重要なら、見せてほしい、または変えてほしいと頼む[^data] |
| ディープリサーチのレポート | 引用と出典のリンクを自分で開いてみる（[第6章「出典を確認する習慣」](06-search.md#出典を確認する習慣)）[^deep] |
| Workが作ったファイル | 内容・レイアウト・数式・グラフを、共有する前に見る[^docs] |
| Workがウェブサイトでしたこと | 結果と出典を確認し、重要な行動は承認画面で自分で押す[^work] |
| つないだアプリで見つけたファイル | ファイルの**名前**を見つけたからといって、**内容**まで読んだわけではない。重要なファイルは、リンクを直接貼って読ませる[^drive] |
| つないだアプリで送ったメール・メッセージ | タスクが止まったり結果があいまいだったりしたら、やり直させる前に、送信済みフォルダと宛先を自分で確認する。同じメールが2回出ていくことがある[^apps-trouble] |

**リンクにも気をつけましょう。** ChatGPTが作ったリンクには、第三者が偽の情報や悪い指示を入れ込んでいることがあります。[^links] 隠れた指示の仕組みは、[ステップ1 第9章「4. 隠れた指示」](../00-common/09-safety.md#_4-隠れた指示-—-プロンプトインジェクション)にあります。自分がよく知らない分野ほど、最後にこう付け加えましょう。
```
さっきの答えで、私が別に確認する必要のある部分に印をつけて、確認する場所（公的機関や原文）を教えてください。
```

<Quiz id="ch111-verify" />

## もっと学ぶには — OpenAI Academy

**OpenAI Academy**は、OpenAIが作った**無料のオンライン講座**です。ChatGPTのアカウントがあれば誰でも受講でき、自分のペースで進められます。[^academy] 講座のページで「Enroll now」（登録）を押すと、本文が開きます。進み具合は自動で保存されるので、一度に全部受講しなくてもかまいません。下の3つの講座の本文は**英語**です（2026-10-26確認）。[^academy-courses]

仕事での使い方を扱う講座は3つです。後ろの2つの講座は、前の講座を先に受講するよう勧めています。時間は講座のページに書かれた値で、変わることがあります。[^academy-courses]

| 講座 | 時間・レベル | 扱うこと | 準備するもの |
|---|---|---|---|
| **AI Foundations** | 約70分、入門 | AI・LLMとは何か、明確な指示、文脈を与えること、結果の確認、責任をもって使うこと | ChatGPTのアカウント、練習する実際の仕事を一つ。技術的な知識は不要 |
| **Applied AI Foundations** | 約80分、中級 | 1回の質問を**繰り返し使う作業手順**（ワークフロー）に変えること、推論モデル（答える前により長く考えるモデル）の選び方、確認ポイント、スキル | ChatGPTのアカウント、練習する実際の仕事を一つ。先にAI Foundationsを受講することを勧める |
| **Agents and Workflows** | 約90分、中級 | [Work](07-projects-plugins.md#chatとworkの違い)に仕事を任せ、結果を確認し、スキル・予約タスクで再利用すること | ChatGPTのアカウント、練習する実際の仕事を一つ、仕事を任せる機能（原文は"agent capabilities"、講座ではWork）を使えるアカウント。先に前の2つの講座を受講することを勧める |

講座ごとに本文を最後まで受講して、**試験（Assessment）で80%以上**とると、**バッジ**をメールで受け取れます。[^academy-courses] ヘルプは、これが資格ではないと明らかにしています。[^academy] このガイドの[認定試験](../00-common/certificate.md)も、同じ性格の学習バッジです。

### 講座で学ぶ枠組み — このガイドと比べる

3つの講座には、このガイドと同じ内容が別の名前で出てきます。下の対応を知っておくと、講座で新しい用語に出会ったときに意味を推測しやすくなります。講座で使われている名前は、英語の原文のまま書きました。[^academy-content]

- **Task・Context・Expectation**（AI Foundations）: やること、背景（誰のための仕事か、なぜ必要か）、答えの形（形式・長さ・話し方）を決めて頼みます。[ステップ1 第4章「よいプロンプトの5つの要素」](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)と同じ考え方です。
- **CLEAR**（AI Foundations）: 答えをもらったら、自分に問いかけます。全部答えたか（Complete）？ 筋が通っているか（Logical）？ 根拠があるか（Evidence）？ 読む人に合っているか（Audience）？ テーマから外れていないか（Relevant）？ [ステップ1 第9章「確認する4つの習慣」](../00-common/09-safety.md#確認する4つの習慣)と[ステップ1 第11章「仕事の重さに見合うだけ確認する」](../00-common/11-expert.md#仕事の重さに応じて確認する)を一緒に見てください。
- **"Use ChatGPT as the workspace, not the source of truth."**（AI Foundations）: ChatGPTを作業する場所として使い、ChatGPTの答えだけで事実を判断しないという意味です。最新の事実・政策・価格・日付が必要なら、信頼できる資料や検索で先に取ってきて、ChatGPTにはその資料を整理させましょう。[第6章「ウェブ検索」](06-search.md#ウェブ検索-—-chatgptにインターネットを調べさせる)につながります。
- **ワークフローの5つの部分**（Applied AI Foundations）: 目標・文脈・手順・確認ポイント・成果物を決めます。一度に全部やらせず、段階ごとに確認しながら進みます。この章の[「仕事を任せる5行」](#仕事を任せる5行-—-結果・資料・残すもの・確認基準・形)と[ステップ1 第5章「3. 段階に分ける」](../00-common/05-prompt-patterns.md#_3-段階を分ける-—-プロンプトチェイニング)を見てください。
- **ワークフローノート**（Applied AI Foundations）: 長い作業をしていると、ChatGPTが最初の目標や条件を見失うことがあります。そこで、目標、決めた内容、守る条件、確認するポイントを、短いメモ一つに書いておきます。次の段階でこのメモをもう一度見せれば、先に決めた内容を引き継いで進められます。このメモを[第7章「プロジェクト」](07-projects-plugins.md#プロジェクト-—-会話・ファイル・指示を1つのフォルダーに)のファイルとして置いて、直すたびに更新しておくのは、このガイドの提案です。
- **エージェントに仕事を任せる**（Agents and Workflows）: 何を作るか、どの資料を使うか、してはいけないこと（送らない、日付や担当者をでっち上げないなど）、結果の形、自分が確認することを、あらかじめ書いておきます。この章の[「仕事を任せる5行」](#仕事を任せる5行-—-結果・資料・残すもの・確認基準・形)とほぼ同じです。
- **機能を選ぶルール**（Agents and Workflows）: 多くの場合は、明確なプロンプトが一つあれば十分です。ほかのサービスの資料が必要ならプラグイン、同じ仕事が繰り返されるならスキル、同じ確認を決まった時間にもう一度するなら予約タスクを使います。[「繰り返す仕事は型にする」](#繰り返す仕事は型にする-—-指示・テンプレート・スキル)と[「決まった時間に自動で」](#決まった時間に自動で-—-予約タスク)を見てください。

講座には、自分でやってみる活動がたくさんあります。横のタブにChatGPTを開いておけば、受講しながらすぐに真似できます。講座は、スマホよりパソコンで受講することが勧められています。[^academy-content]

### 無料で見られる公開資料

Academyの講座はChatGPTアカウントでログインしないと受講できませんが、下の資料は**無料**で、紹介ページをログインなしで開けます。ただし、講義を実際に受けるには登録が必要な場所もあります（ブーストコースは受講申請が必要です）。すべて、2026-10-25に公式ページを直接開いて確認しました。

| 資料 | 作った場所 | 言語・分量 | こんな方に |
|---|---|---|---|
| [Introduction to Prompt Engineering](https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13)（動画） | OpenAI Academy | 英語 | このガイドのステップ1で学んだプロンプトの書き方を、OpenAIが作った動画で復習したい方。次の回は[Advanced Prompt Engineering](https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13)[^academy-public] |
| [ChatGPT fundamentals](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics)（記事） | OpenAI Academy | 英語 | ChatGPTの基礎を、OpenAIが直接まとめた記事でもう一度見たい方[^academy-public] |
| [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | DeepLearning.AI。OpenAIの社員（Isa Fulford）とアンドリュー・ン（Andrew Ng）が一緒に講義 | 英語、1時間40分 | 開発者向けのプロンプト講座が気になる方。**Python**（プログラミング言語の一つ）の基礎が必要。無料は「学習プラットフォームのベータ（正式公開前の試験運用）期間限定」と書かれているので、今も無料かどうかをページで確認してから受講する[^dlai] |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners)（GitHub — 資料を置いておくサイト） | Microsoft | 21講、**韓国語訳あり**（[韓国語版](https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations/ko)） | 生成AIアプリ作りに興味がある方。概念を説明する「Learn」の講義から読む（「Build」の講義にはコードの例がある）[^msgenai] |
| [AIで学ぶ段階別の企画書の書き方（AI로 배우는 단계별 기획서 작성법）](https://www.boostcourse.org/aix210) | ブーストコース | **韓国語**、講義3つと実習課題 | 韓国語の講義で、AIを仕事に使う方法を学びたい方。AIで企画書を書く方法を扱う講座で、受講申請（会員登録）が必要[^boost] |

英語の資料は、Chromeなどのブラウザーの翻訳機能（ページの上で右クリック→「日本語に翻訳」）で読めます。

ChatGPTがどのように作られ、どのように使うのかを説明する、Andrej Karpathyの有名な動画は、[ステップ1 第1章「動画でもっと見る」](../00-common/01-what-is-llm.md#動画でもっと見る)と[ステップ1 第3章「動画でもっと見る」](../00-common/03-why-learn.md#動画でもっと見る)にまとめてあります。

> Courseraの有名な講座「Prompt Engineering for ChatGPT」と「Generative AI for Everyone」は、講座のページに「講義資料と課題を見るには、修了証のコースを購入する必要がある」と書かれているため、この無料リストから外しました（確認日 2026-10-25）。[^coursera]

<Quiz id="ch111-academy" />

## 実際にやってみよう

1. 日付・品目・数量・金額の表を、メモ帳に10行ほど作り話で作ってCSVで保存し、ChatGPTにアップロードして「よくある問題がないか先に確認して」と送る。そのあと品目ごとの合計を棒グラフでもらい、計算方法と前提を見せてほしいと頼んで、合計が自分で足した値と同じか照らし合わせる。
2. 「5行」の型で、今週のやることの整理を頼んでみる。確認基準の行を抜いて一度、入れて一度送り、違いを比べる。
3. 予約タスクを一つ作ってみる（「明日の朝、水を飲むよう知らせて」）。横のメニューの「予約」に表示されるか確認し、見終わったら削除する。
4. `@study` で勉強モードをオンにして、最近気になっていたテーマを一つ、20分復習のプロンプトで学んでみる。

**続きの課題**（[読書会の準備をする](../00-common/practice-kit.md)）: 例のファイルfees.csvをアップロードして、1番のように「よくある問題がないか先に確認して」と送る。2回書かれたお菓子と、金額が空の行を見つけるか見る。そのあと「収入・支出の合計と残りのお金を表で、項目別の支出を棒グラフで見せて」と送り、表の数字を自分で足した値と照らし合わせる。最後に[課題チェックリスト](../00-common/practice-kit.md#最後に手元に残るもの)を一つずつチェックする。

## まとめ

- 専門家は、仕事を任せるように伝える。結果・資料・残すもの・確認基準・形の5行を書き、成果物ごとに決めておいた場所を確認してから使う。
- 手早い事実は検索、深い調査はディープリサーチ、完成ファイルはWork、難しい思考は推論レベル。機能が使えるかどうかは、聞かずにやらせてみる。
- うまくできた答えは「プロジェクトのソースに追加」でためて、繰り返す仕事は指示→テンプレート（Work）→スキル（ヘルプによると会社・学校向けプラン）の順に型を作る。
- Word・PowerPointのChatGPT追加機能は、無料でも使える。大きく直す前にコピーを保存して、計画からもらう。
- 予約タスクは、会話で頼んで作り、横のメニューの「予約」で管理する。プロジェクトの中のタスクはプロジェクトのファイルを読めず、アプリで変更するタスクは承認を待って止まることがある。
- データ分析は、整えたファイルをアップロードして、まずデータの問題を確認してから、方法を指定する。勉強モードは `@study` でオンにして、すべてのプランで使う（プロジェクト・一時チャットを除く）。
- もっと学ぶには、OpenAI Academy（ログインが必要、約70〜90分の講座が3つ）や、無料の公開資料（OpenAI Academyの公開動画、DeepLearning.AI、Microsoft、ブーストコース）を見る。

## 用語のまとめ

| 用語 | 読み方 | 一言の意味 |
|---|---|---|
| Review criteria | レビュークライティーリア | 結果がうまくできたか判断する物差し |
| Scheduled tasks | スケジュールドタスクス | 決めておいた時間に、ChatGPTが自分で実行するタスク |
| Data analysis | データアナリシス | アップロードしたファイルの表と数字を計算して、要約やグラフで見せる機能 |
| Template | テンプレート | 例のファイルと再利用する指示をまとめた型 |
| Study mode | スタディモード | 答えの代わりに、質問と段階的な説明で教える方式 |
| Characteristics | キャラクタリスティクス | 温かさや絵文字など、答えの雰囲気をもっと・もっと少なくに調整する設定 |
| Writing block | ライティングブロック | 答えの中ですぐに直せる、下書きの文章の箱 |
| OpenAI Academy | オープンエーアイアカデミー | OpenAIが作った無料のオンラインAI講座 |
| Add-in | アドイン | WordやPowerPointなどのプログラムの中に組み込んで使う小さな機能 |

<ChapterDone :chapter="111" />

次の章: ステップ2を終えました。[AI知識レベル試験](../00-common/level-test.md)で実力を確認してみましょう。

[^adopt]: OpenAI「ChatGPT Usage and Adoption Patterns at Work」。"Advanced features remain underused, even where they could deliver broad impact." https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work （確認日 2026-10-24）
[^work]: OpenAIヘルプ「ChatGPT Work and Codex」 "Describe the outcome you want. Add any files, constraints, and review criteria ChatGPT should use." https://help.openai.com/en/articles/20001275 · 「Using cloud browser in ChatGPT」 "Check the result and its sources before relying on it." https://help.openai.com/en/articles/20001280 （確認日 2026-10-24）
[^docs]: OpenAIヘルプ「Creating and editing documents, spreadsheets, and presentations with ChatGPT Work」。テンプレート・`@Template-Creator`、"Say what must stay unchanged…" https://help.openai.com/en/articles/20001278 （確認日 2026-10-24）
[^prompt]: OpenAIヘルプ「How do I create a good prompt for an AI model?」。https://help.openai.com/en/articles/4936848 （確認日 2026-10-24）
[^aprompt]: OpenAI Academy「Prompting」。https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting （確認日 2026-10-24）
[^deep]: OpenAIヘルプ「Deep research in ChatGPT」。"Use search for quick facts, and use deep research for depth and thoroughness." https://help.openai.com/en/articles/10500283 （確認日 2026-10-24）
[^ask]: OpenAIヘルプ「How to Ask ChatGPT About Its Features」。https://help.openai.com/en/articles/12548278 （確認日 2026-10-24）
[^projects]: OpenAIヘルプ「Projects in ChatGPT」。https://help.openai.com/en/articles/10169521 （確認日 2026-10-24）
[^skills]: OpenAIヘルプ「Skills in ChatGPT」。"Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" https://help.openai.com/en/articles/20001066 （確認日 2026-10-24）
[^tasks]: OpenAIヘルプ「Scheduled tasks in ChatGPT」。プランごとのタスク数、プロジェクト内のタスクのファイルアクセス制限、共有時の注意。https://help.openai.com/en/articles/10291617 （確認日 2026-10-24）
[^data]: OpenAIヘルプ「Data analysis with ChatGPT」 https://help.openai.com/en/articles/8437071 · 「Extracting Insights with ChatGPT Data Analysis」 "Check this data for common issues." https://help.openai.com/en/articles/9213685 （確認日 2026-10-24）
[^study]: OpenAIヘルプ「Using study mode in ChatGPT」 https://help.openai.com/en/articles/11780217 · 「Flashcards in ChatGPT」 "Flashcards are automatically saved in your library." https://help.openai.com/en/articles/20001533 （確認日 2026-10-24）
[^char]: OpenAIヘルプ「Characteristics in ChatGPT」。https://help.openai.com/en/articles/20001038 （確認日 2026-10-24）
[^ui]: OpenAIヘルプ「Intelligent UI in ChatGPT」。"Select Personalization → Layout and Visuals → Simple." https://help.openai.com/en/articles/20001598 （確認日 2026-10-24）
[^blocks]: OpenAIヘルプ「Working with writing blocks and code blocks in ChatGPT」。https://help.openai.com/en/articles/20001246 （確認日 2026-10-24）
[^links]: OpenAIヘルプ「ChatGPT generated links」。https://help.openai.com/en/articles/10984597 （確認日 2026-10-24）
[^academy-courses]: OpenAI Academyの講座ページ（ログイン後）。AI Foundations "Duration: ~70 minutes", "Level: Introduction", "No technical background is required." · Applied AI Foundations "Duration: ~80 minutes", "Level: Intermediate", "We recommend completing AI Foundations first." · Agents and Workflows "Duration: ~90 minutes", "Level: Intermediate", "We recommend completing AI Foundations and Applied AI Foundations first.", "Access to agent capabilities". 3ページ共通 "The pathway includes two required steps: completing the course and passing the assessment with a score of at least 80%." / "Your progress is automatically saved." https://academy.openai.com/home/courses/ai-foundations-dnq5w · https://academy.openai.com/home/courses/applied-ai-foundations-szsmv · https://academy.openai.com/home/courses/agents-and-workflows-y0qoc （確認日 2026-10-26）
[^academy-content]: OpenAI Academyの講座本文（ログイン・登録が必要）。AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Use ChatGPT as the workspace, not the source of truth." / "we recommend that you:" "Use a desktop computer or laptop". Applied AI Foundations: "A workflow has five parts" (Goal, Context, Steps, Checkpoints, Output) / "Do not ask ChatGPT to do the whole job at once." / "A workflow note keeps the goal, context, decisions, sources, capabilities, and review points in one place." Applied AI Foundations 追加: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations 追加: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Before you direct the agent to create the project brief document, have the agent review what's in the folder." / "Keep the update internal, do not send or publish it, do not invent owners or dates" / "If Work needs another approved source, start with a plugin. If the same workflow keeps repeating, consider a skill. If the same stable review should run later or recur, consider a scheduled task." / "Often, a clear prompt is enough." / "Use scheduled tasks for workflows that check, monitor, summarize, or report. Be cautious with anything that sends, posts, publishes, deletes, approves, changes records, or creates external commitments." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" （確認日 2026-10-26）
[^academy]: OpenAIヘルプ「OpenAI Academy courses」。"These badges and certificates of completion are not certifications" https://help.openai.com/en/articles/20001270 （確認日 2026-10-24）
[^word]: OpenAIヘルプ「ChatGPT for Word」。"ChatGPT for Word is available on all ChatGPT plans, including Free." / "Word, Excel, and PowerPoint use the same ChatGPT Microsoft add-in." / "ChatGPT memory and skills do not carry over to the add-in." / "Save a copy of important work before making substantial changes." https://help.openai.com/en/articles/20001526 （確認日 2026-10-24）
[^ppt]: OpenAIヘルプ「ChatGPT for PowerPoint」。"Free and Go include limited usage access." / "Ask for a plan first when you are making larger edits." / "For important work, duplicate the file first so you can revert if needed." https://help.openai.com/en/articles/20001242 （確認日 2026-10-24）
[^gpt-make]: OpenAIヘルプ「Creating and editing GPTs」。"Prefer positive, concrete instructions (“Do X”) over long lists of prohibitions (“Don’t do Y”) when possible." / "Use knowledge for reference material, not rules or behavior." / "Before adding more tools, tighten instructions and add examples." https://help.openai.com/en/articles/8554397 （確認日 2026-10-24）
[^slack]: OpenAIヘルプ「Using Slack in ChatGPT」。"A shared task link does not transfer your Slack connection, credentials, channel access, or message history." https://help.openai.com/en/articles/12525822 （確認日 2026-10-24）
[^apps-trouble]: OpenAIヘルプ「Troubleshooting plugins and apps in ChatGPT」。"If approval is required, the task pauses until you review it." / "Before resending an email or message, check the intended account’s sent messages and the destination." https://help.openai.com/en/articles/20001497 （確認日 2026-10-24）
[^drive]: OpenAIヘルプ「Google Drive app and setup in ChatGPT」。"Finding a filename or file details does not confirm that ChatGPT retrieved the file’s contents." https://help.openai.com/en/articles/10929079 （確認日 2026-10-24）
[^academy-public]: OpenAI Academyの公開ページ。「Introduction to Prompt Engineering」(Posted Mar 08, 2025)、「Advanced Prompt Engineering」、「ChatGPT fundamentals」(Last updated on May 30, 2026)。3つともログインしていないブラウザーで開けることを確認。https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13 · https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13 · https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics （確認日 2026-10-25）
[^dlai]: DeepLearning.AI「ChatGPT Prompt Engineering for Developers」。講師 Isa Fulford "Member of Technical Staff, OpenAI"・Andrew Ng、"1h40m", "Beginner", "Only a basic understanding of Python is needed.", "Course access is free for a limited time during the DeepLearning.AI learning platform beta!" https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/ （確認日 2026-10-25）
[^msgenai]: Microsoft「Generative AI for Beginners」GitHubリポジトリのREADME。"This course has 21 lessons." / "Lessons are labeled either 'Learn' lessons explaining a Generative AI concept or 'Build' lessons that explain a concept and code examples". 韓国語訳は `translations/ko` フォルダ。https://github.com/microsoft/generative-ai-for-beginners （確認日 2026-10-25）
[^boost]: ブーストコース「AIで学ぶ段階別の企画書の書き方（AI로 배우는 단계별 기획서 작성법）」講座紹介。「無料講義（무료강의）」、難易度「入門（입문）」、「常時受講（상시 수강）」、講義計画 #1〜#3 と「[課題] 自主実習をやってみる（[과제] 자율 실습 해보기）」、イ・スンピル講師。https://www.boostcourse.org/aix210 （確認日 2026-10-25）
[^coursera]: Courseraの講座ページのFAQ。"To access course materials, assignments, and earn a Certificate, you'll need to purchase the Certificate experience when you enroll in a course." https://www.coursera.org/learn/prompt-engineering · https://www.coursera.org/learn/generative-ai-for-everyone （確認日 2026-10-25）
[^scheduled-name]: ヘルプはこのメニューを「予約済み（예약됨）」と呼んでいますが、実際の画面での名前は「予約（예약）」です。
[^screen-scheduled]: 横のメニューの「予約」画面を直接確認。案内の文言 "ChatGPT에게 작업 예약, 알림 설정 또는 업데이트 모니터링을 요청하세요"、入力欄「タスクを予約」、タスクの行の「一時停止」「編集」ボタン、「おすすめ」の一覧（ニュースの更新・メールの監視・週末の読み物探しなど）。タスクを押して開くパネルは、実際のタスクの結果が見えるため載せなかった （確認日 2026-10-28、Plusアカウントの Web画面）
[^screen-data]: 架空の会費の帳簿fees.csvをアップロードして、この節のプロンプトを送って直接確認。最初の答えは空の値・重複を見つけて集計を止め、2番目の答えの図のグラフは韓国語が四角に文字化けしており、描き直してほしいと頼むと画面の中に描いたグラフに変えた。グラフの横のボタンは「グラフをダウンロード」「グラフを展開」。会話を削除したあとも、fees.csvはライブラリに残っており、ライブラリから削除すると "휴지통으로 이동되며 30일 후 영구 삭제됩니다" と案内された （確認日 2026-10-28、Plusアカウントの Web画面）
[^screen-study]: 入力欄に `@study` を入力して候補の一覧を直接確認（送信はしていない）。候補の名前「勉強する（공부하기）」、説明 "새로운 개념을 배워보세요" （確認日 2026-10-28、Plusアカウントの Web画面）
