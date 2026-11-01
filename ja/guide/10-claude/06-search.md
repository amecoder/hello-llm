# 第6章 検索とリサーチ — 最新情報を出典つきで受け取る

> **一言まとめ**: 今日起きたことやよく変わる情報は**ウェブ検索**で、複数の資料を集めて比べる必要がある大きな質問は
> **リサーチ**で任せましょう。どちらの場合も、ついてきた出典を自分で開いて確かめるところまでが1セットです。

画面は2026年10月のWeb版を基準にしています。いまは新しいClaudeの画面が順次配信されているため、メニュー名や位置が画面によって異なる場合があります。

## ウェブ検索 — Claudeにインターネットを調べてもらう

AIは、学習した時点までの内容しか知りません（[ステップ1 1章](../00-common/01-what-is-llm.md)の「知識カットオフ」）。
そのため、「今週の天気」や「昨日発表された政策」のような最近のことは、ただ聞くだけだと間違えやすくなります。
**ウェブ検索**（web search）は、Claudeがインターネットから最新の情報を探して答える機能です。[^search]
無料プランでも使えます。[^pricing]

とくにオンにするものはありません。新しい画面にはウェブ検索のスイッチがなく、役に立つときにClaudeが自分で検索します。[^search][^new] 無料アカウントの「+」メニューにも「ウェブ検索（웹 검색）」はありませんでした。[^screen]

::: details 古い画面を使っている場合（クリックして開く）
古い画面では、入力欄の左下にある「+」を押して「ウェブ検索」を選びます。オンになると、横にチェックマークがつきます。もう一度押すとオフになります。[^search]

<!-- 스크린샷 필요: 옛 화면 입력창 「+」 메뉴에서 「웹 검색」에 체크 표시가 된 모습 -->
:::

検索を必ずさせたいときは、プロンプトに「ウェブで検索して」と書いてみましょう。[^search]

```
ウェブで検索して。今週末のソウルの天気を、土曜日と日曜日に分けて教えて、
参考にしたサイトも一緒に見せてください。
```

写真が必要な質問には、検索で見つけた**画像**を答えの横に表示することもあります。とくにオンにする設定はありません。[^search]

> ここでいう検索は**インターネット検索**です。自分の過去の会話を探すのは、別の機能です。[3章](03-chats.md)と[5章](05-memory.md#過去の会話を参照する)を見てください。

<Quiz id="ch206-web-search" />

## リンクを渡して読んでもらう

読んでほしいウェブページがあるなら、**アドレス**（URL、ウェブページごとについたインターネット上の住所）を貼り付けましょう。
ウェブ検索がオンになっていると、Claudeがそのページの内容を直接読みに行きます。これを**ウェブフェッチ**（web fetch）と呼びます。[^fetch]

```
下の記事を読んで、うちのような小さな食堂に当てはまる内容だけを3行でまとめてください。
https://www.example.com/news/12345
```

長い文章をまるごと要約させると、**使用量をたくさん使います。**[^fetch]
無料プランは、使用上限が5時間ごとに回復しますが、検索やフェッチもこの上限に含まれます。[^fetch]
だから、全体の分析が必要なのか、要点だけ知りたいのかを、先に考えてみましょう。使用上限は[1章](01-getting-started.md)で扱います。

<Quiz id="ch206-fetch" />

## 出典を確かめる習慣

ウェブ検索で受け取った答えには、**引用**（citation、どこから持ってきたかを示す表示）がついています。
すべての検索の答えに引用があるので、出典を自分で確認できます。[^search]

![シークレットモードで「웹에서 검색해 줘. 국립중앙박물관 관람 시간 알려 줘.」（ウェブで検索して。国立中央博物館の観覧時間を教えて。）と聞いた画面。①答えの上の「웹 검색함」（ウェブ検索済み）、②文末の出典表示「museum」、③入力欄の下の「기록, 메모리, Claude 학습에 사용되지 않습니다.」（履歴、メモリ、Claudeの学習には使用されません。）という案内](../../../guide/10-claude/assets/shot-13-web-search-marked.png)

シークレットモードで撮った画面です（無料プラン）。**赤い番号は、下のリストの番号と同じ場所です。**

- ① **「ウェブ検索済み（웹 검색함）」** — Claudeがインターネットを調べたという表示です。押すと、何を調べたかが開きます。
- ② **出典表示** — 文末の小さなラベル（「museum」「segye」など）が、その文を持ってきたサイトです。
- ③ シークレットモードなので、この会話が履歴・メモリ・学習に使われないという案内です。[^screen]

①を押してもう一段開くと、Claudeが使った検索語と、検索結果として出てきたサイトの一覧が見えます。

![「ウェブ検索済み」を開いた画面。①Claudeが使った検索語「국립중앙박물관 관람시간」（国立中央博物館 観覧時間）、②検索結果として見たサイト9件の一覧](../../../guide/10-claude/assets/shot-13-web-search-sites-marked.png)

- ① Claudeが実際に使った検索語です。自分の質問を短くして検索しました。
- ② 検索結果として出てきたサイト9件の一覧です。政府のサイト（mcst.go.kr、museum.go.kr）とニュース記事、個人のサイトが混ざっています。[^screen]

答えを読む前に、この一覧をざっと見てみましょう。公式サイトが入っているか、先に見当がつけられます。

②の出典表示にマウスを乗せると矢印がつき、①サイトのアドレスが書かれた小さなウィンドウが表示されます。表示を押すと、元のページが新しいタブで開きます。[^screen]

![出典表示「museum」にマウスを乗せた画面。①サイトのアドレスwww.museum.go.krが表示された小さなウィンドウ、②矢印がついた出典表示](../../../guide/10-claude/assets/shot-13-citation-hover-marked.png)

ただし、リンクがついているだけで、正しい答えになるわけではありません。
[ステップ1 9章](../00-common/09-safety.md#確認する4つの習慣)で学んだとおり、数字・日付・名前は、リンクを開いて原文と照らし合わせましょう。
リンクを開いたら、自分に聞いてみてください。

- **リンクは開くか？** 出典を押して、実際のページが表示されるかを見る。
- **原文にその言葉はあるか？** 答えの数字や文が、ページにそのまま書かれているかを探す。
- **いつ書かれた文章か？** 古い情報でないかどうか、書かれた日付を見る。
- **誰が書いた文章か？** 公式な機関・会社のページか、個人のブログかを見る。

出典が気に入らないときは、こう頼み直してみましょう。

```
さっきの答えから個人ブログの出典を外して、政府や公共機関のサイトだけを参考にして、もう一度教えてください。
内容ごとに、どのページから持ってきたかをつけてください。
```

「近くのおいしい店」のように、場所が大事な質問には、**IPアドレス**（インターネットに接続された機器ごとについた番号）から推測した位置を使うことがあります。[^search] 見当違いの地域の結果が出たら、町の名前を自分で書いてください。

<Quiz id="ch206-citations" />

## リサーチ — レポートを任せる

**リサーチ**（Research）は、1つの質問を深く掘り下げる機能です。
検索を何度も続けて行い、見つけた内容を見て、次に何を調べるかを自分で決めます。[^research]
有料プラン（Pro・Max・Team・Enterprise）で、Web・デスクトップ・スマホアプリから使えます。[^research]

### 始め方

入力欄に`/deep-research`と入力するか、入力欄の下の「+」→「Research」を選びます。[^new]

::: details 古い画面を使っている場合（クリックして開く）
古い画面では、入力欄の左下の「+」→「Research」を押します。入力欄の下に青い表示が出たらオンです。[^research] リサーチは**ウェブ検索がオンになっていないと**動きません。[^research]

<!-- 스크린샷 필요: 「+」 → 「Research」를 켠 뒤 입력창 아래에 생긴 파란 표시 -->
:::

韓国語の画面でも、「Research」が英語のまま表示されることがあります。

![入力欄に①「/deep」まで入力すると、②「deep-research」が一覧に表示され、③横に英語の説明が出た画面](../../../guide/10-claude/assets/shot-12-deep-research-marked.png)

無料プランの画面です。①入力欄に`/deep`まで入力するだけでも、②「deep-research」が一覧に表示されます。③横には、いつ使う機能かの英語の説明が出ます。[^screen]
無料アカウントの「+」メニューには「Research」がありませんでした。一覧に名前は表示されましたが、ヘルプはリサーチを有料プランの機能だとしています。[^research] このガイドは、無料アカウントでリサーチを送ってはいません。

質問は、詳しいほどよいです。[ステップ1 4章](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)の5つの要素を、そのまま入れてみましょう。

```
町のお惣菜屋さんが使える、デリバリーアプリの手数料を比較するレポートを書いてください。
- 対象: お店を1軒経営しているオーナー
- 比べるもの: 仲介手数料、決済手数料、広告費
- 形式: 最初に1行の結論、次に比較表、最後に出典のリスト
- 2026年の資料を優先し、日付がわからない資料は別に表示してください
```

::: details 返ってくる答えはだいたいこんな感じ（例 — クリックして開く）
このガイドが作った例です。実際の答えは、サービスやそのときによって変わります。

> **1行の結論**: お店を1軒経営しているオーナーなら、3つの費用を足したときにいちばん少ないアプリ○が有利です。
>
> | アプリ | 仲介手数料 | 決済手数料 | 広告費 | 資料の日付 |
> |---|---|---|---|---|
> | アプリ A | ○% | ○% | 月○○円から | 2026年○月 |
> | アプリ B | ○% | ○% | ○○ | 日付不明 |
>
> **出典**
> 1. （出典リンク）— 2026年○月○日
> 2. （出典リンク）— 日付がわからない

**うまくいったか確認しましょう**: 1行の結論 → 比較表 → 出典のリストの順番で届いたか？ 仲介手数料・決済手数料・広告費が表にすべて入っているか？ 2026年の資料が優先され、日付がわからない資料は別に表示されたか？ 手数料のように大事な数字は、出典リンクを押して自分で確認してみましょう。

:::

リサーチは、数分かかることがあります。[^academy-research] だから、送る前に質問を練り直す時間は無駄になりません。何を聞けばいいのかわからないときは、リサーチをオンにする前に、まず通常の会話でこう聞いてみましょう。[^academy-research]

```
町内に小さなお惣菜屋さんを開こうかと考えています。これをリサーチで調べたいのですが、どんな質問で任せればいいか、一緒に練り直してください。予算・地域・期間のように、私が決めておくべき条件も聞いてください。
```

予算、地域、期間のような条件を入れてみましょう。[^academy-research] 条件があると、リサーチが自分の状況に合った資料を見つけやすくなります。

### 知っておきたい点

- **使用量が早く減ることがあります。** 上限は通常の会話と同じです。ただし、複数の出典を集めて長い答えを作るので、より早く使ってしまいます。[^research]
- **リサーチをしていないようなら、**「リサーチツールを使って〜して」と自分で言いましょう。[^research]
- **連携したアプリも使います。** コネクタ（Claudeに連携した他のアプリ、[7章](07-projects-tools.md)）をオンにしてあれば、リサーチ中は毎回確認せずにそのツールを使います。[^research]
- **スマホで始めるとウェブだけを探します。** コネクタを飛ばしても、とくに知らせてくれません。連携したアプリの資料まで必要なら、Webまたはデスクトップで始めましょう。[^research]
- **モデルは決まっています。** 自分が選んだモデルに関係なく、リサーチ用に決められたモデルが動きます。[^research]

レポートが長くもっともらしいほど、確認を飛ばしやすくなります。結論に使われている数字から、出典を開いて照らし合わせましょう。

<Quiz id="ch206-research" />

## いつ何を使うか

どの機能を使うか迷ったら、質問を送る前に自分に聞いてみてください。「答えは1、2回調べれば出るか？ 複数の資料を集める必要があるか？ そもそも最新の情報が必要か？」

**拡張思考**（extended thinking）は、答える前にもっと長く考えさせる機能です。オンにする場所は[2章](02-screen-tour.md)で扱いました。

次のように分けて選べば大丈夫です。[^when]

| こんなとき | 選ぶもの | 例 |
|---|---|---|
| 検索1、2回で答えが出る | ウェブ検索 | 天気、ニュース、昨夜の試合結果 |
| 最新情報はいらないが、深く考える必要がある | 拡張思考 | 数学の問題、複数の観点での分析 |
| 複数の資料を集めてレポートが必要 | リサーチ | 競合店の比較 |

リサーチは、1〜3分の間にツールを5回以上使うような、幅広い調査に向いています。[^when]

拡張思考とリサーチを**一緒に**オンにすると、Claudeが計画を立てたうえで幅広く集めて、より長いレポートを出します。[^when]

<Quiz id="ch206-when" />

## 実際にやってみよう

1. 新しいチャットで「ウェブで検索して。うちの町の今月の文化イベントを教えて」と聞く。町の名前は自分で書く。
2. 答えについた出典を2つ自分で開いて、イベントの日付が原文と同じか確認する。
3. 最近読んだ記事のアドレスを貼り付けて、3行の要約を頼む。
4. 有料プランなら、上のデリバリーアプリの手数料の例を自分の仕事に合わせて変え、リサーチで送る。受け取ったレポートの結論に使われている数字をひとつ選んで、出典から探してみる。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「ウェブで検索して。うちの町の区立図書館のセミナー室の貸出方法を教えて」と聞きます。町の名前は自分で入れます。運営時間と申し込み方法は、出典を開いて自分で確認します。

## まとめ

- 最新の情報は、ウェブ検索で聞く。無料プランでも使える。
- 新しい画面ではClaudeが自分で検索する（古い画面は「+」→「ウェブ検索」）。必ず検索させたいときは「ウェブで検索して」と書く。
- アドレスを貼り付けると、そのページを読みに行く。長い文章は使用量をたくさん使う。
- 引用がついていても間違うことがある。リンクを開いて原文と照らし合わせる。
- 大きな質問は、リサーチ（有料）で任せる。`/deep-research`か「+」→「Research」で始める。
- 簡単な事実はウェブ検索、深く考える仕事は拡張思考、複数の資料を集める仕事はリサーチ。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Web Search | ウェブ・サーチ（ウェブ検索） | Claudeがインターネットから最新の情報を探して答える機能 |
| Web Fetch | ウェブ・フェッチ（ウェブフェッチ） | 貼り付けたアドレスのページの内容を読みに行く機能 |
| Citation | サイテーション（引用） | 答えの内容をどこから持ってきたかを示す表示 |
| URL | ユーアールエル（アドレス） | ウェブページごとについたインターネット上の住所 |
| IP Address | アイピー・アドレス | インターネットに接続された機器ごとについた番号。おおよその位置がわかる |
| Research | リサーチ | 検索を何度も続けて行い、レポートにまとめる機能 |
| Extended Thinking | エクステンデッド・シンキング（拡張思考） | 答える前にもっと長く考えさせる機能 |

<ChapterDone :chapter="206" />

次の章: [7章 プロジェクト・コネクタ・スキル](07-projects-tools.md)

[^search]: Anthropic ヘルプ、「Enable and use web search」. "You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:" / "A checkmark will appear next to “Web search” when it’s enabled." / "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." / "Claude selects images from web search results, powered by Bing, and displays them alongside its text response." / "Every response includes citations, so you can easily verify sources yourself." / "Claude may use your location (inferred from your IP address) when responding to a request for localized results." https://support.claude.com/en/articles/10684626 （確認日 2026-10-26）
[^fetch]: Anthropic ヘルプ、「Enable and use web search」. "When “Web search” is toggled on, Claude can also retrieve content directly from web pages when provided with specific URLs." / "This can consume a significant portion of your usage limit, especially for lengthy content." / "As a free user, you have usage limits that reset every five hours." https://support.claude.com/en/articles/10684626 （確認日 2026-10-26）
[^pricing]: Anthropic料金ページ、Freeプランの説明。 "Search the web, create files, and run code" https://claude.com/pricing （確認日 2026-10-26）
[^new]: Anthropic ヘルプ、「Claude Cowork and chat are one Claude」. "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" https://support.claude.com/en/articles/16761823 （確認日 2026-10-26）
[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。入力欄の「+」メニュー（「웹 검색」・「Research」なし）、シークレットモードで質問した答えの"웹 검색함"表示と出典表示、出典を押したときに新しいタブで開いたwww.museum.go.kr、入力欄の`/deep`の一覧に表示された"deep-research"。（確認日 2026-10-27）
[^research]: Anthropic ヘルプ、「Use research on Claude」. "It runs multiple searches that build on each other and decides what to look into next based on what it finds." / "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "Click the “+” button on the bottom left of your chat interface, then "Research." A blue indicator will appear on the bottom of the chat window." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." / "In this case, you can steer and prompt Claude to use Research by saying “Claude, please use the research tool to…”" / "During research, Claude can use tools from your connectors automatically, without asking for approval each time." / "When you start research in Claude Mobile, Claude only searches the web and doesn’t use your connectors." / "Research runs on Claude Opus 5.5 and falls back to Claude Opus 4.8 when needed." https://support.claude.com/en/articles/11088861 （確認日 2026-10-26）
[^when]: Anthropic ヘルプ、「When should I use web search, extended thinking, and research?」. "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" / "Combining extended thinking with research allows Claude to both plan its approach thoughtfully and execute comprehensive information gathering" / "The research feature can synthesize information across multiple sources with proper citations and produces a longer final report." https://support.claude.com/en/articles/11095361 （確認日 2026-10-26）
[^academy-research]: Claude Academy「Claude 101」講座「Research for deep dives」。 "Include relevant constraints." / "a few minutes or more, depending on the question." / "If you're not sure how to frame your research question, you can even ask Claude to help you write a better Research prompt before enabling the feature." https://academy.claude.com/courses/claude-101/research-mode-for-deep-dives （確認日 2026-10-26）
