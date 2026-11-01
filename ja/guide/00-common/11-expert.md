# 第11章 専門家のように使う — 判断し、試し、積み重ねる

> **一言まとめ**: 上手に使うために必要なのは、ボタンをたくさん知ることだけではありません。**何を任せるか判断し、任せる前に試し、繰り返すことは積み重ねておく**力です。
> この章では、どのAIサービスでも通用する仕事のやり方をまとめました。メニューの位置やサービスごとの機能は、ステップ2の[ChatGPT 第11章](/ja/guide/11-chatgpt/11-expert.md)と[Claude 第12章](/ja/guide/10-claude/12-expert.md)で扱います。

この章のテーマは、第1〜10章で身につけたことを、いつ、どうやって引き出して使うかです。ステップ2で学ぶ機能（プロジェクトやスキルなど）は名前だけが登場し、詳しい使い方は各サービスの章にあります。ステップ2を読む前に見てもよいですし、ステップ2を終えたあとで見直してもかまいません。

## 専門家はどこが違うのか

[第3章「同じ道具、違う結果」](03-why-learn.md#同じ道具、違う結果)で、同じAIでも使い方によって結果が変わると学びました。Anthropicの講座では、AIを上手に扱う力を次のように説明しています。どのボタンを押すか知っているだけでなく、状況ごとにAIをどう使うか**判断する力**まで育てることです。[^academy-4d]

講座ではこの判断を4つの力に分けています。英語の頭文字をとって「4D」と呼びます。[^academy-4d]

- **任せる — Delegation**: どの仕事を自分でやり、どの仕事をAIに任せるか分けます。
- **説明する — Description**: 求める結果とやり方をはっきりと伝えます。
- **見極める — Discernment**: 受け取った結果が合っているか、使えるものかを見極めます。
- **責任を持つ — Diligence**: 責任を持って使い、AIを使ったことを隠さず、結果に自分で責任を持ちます。

このうち、すでに練習したものもたくさんあります。[第4章「良いプロンプトの5要素」](04-prompt-basics.md#良いプロンプトの5つの要素)が「説明する」です。[第9章「確認する4つの習慣」](09-safety.md#確認する4つの習慣)が「見極める」と「責任を持つ」にあたります。

OpenAIが、仕事でChatGPTを使う人たちの様子を分析した記事にも似た点が見られます。人々は**自分の専門外の仕事**を任せるとき、例や背景をより多く渡し、結果を確認してほしいというお願いもより頻繁にしていました。[^ways] 不慣れな仕事ほど、資料を一緒に渡して確認をお願いしましょう。

この章では残りの1つ、**何を任せるか決める力**を主に扱います。

<Quiz id="ch11-difference" />

## 最初に練習する仕事を選ぶ

一番大きくて大事な仕事から始める必要はありません。最初は次のような仕事を選びましょう。OpenAIの講座が避けるように言っている仕事（広すぎる仕事、たまにしかやらない仕事、リスクが大きい仕事、確認しにくい仕事）を、このガイドが裏返して書いたものです。[^academy-openai]

- よくやる
- 結果がはっきりしている
- 自分で確認しやすい
- 間違えても被害が小さい

広すぎる仕事、たまにしかやらない仕事、間違えると大変なことになる仕事、合っているか確認しにくい仕事は後回しにします。[^academy-openai]

| まだ早い仕事 | まず試すのに良い仕事 |
|---|---|
| お店の売上を上げる | 毎週月曜日に、先週の販売記録から要約表を作る |
| 集まりの運営をうまくやる | 集まりが終わるたびに、決まったこととやることを案内メッセージにする |

左の仕事は広すぎて、何を頼めばいいかから行き詰まります。右の仕事は毎週やってきますし、受け取った結果が合っているか自分ですぐに確認できます。

<Quiz id="ch11-pick" />

## 任せる前に試してみる

「この仕事をAIに任せても大丈夫だろうか？」と勘で決めずに、試してみましょう。やり方は簡単です。**自分がすでに答えを知っている仕事**をやらせてみるのです。Anthropicの講座ではこれを評価（Evals）と呼んでいます。[^academy-eval] 講座ではClaudeを例に挙げていますが、同じやり方を他のAIにも使えます（このガイドの判断）。

1. よくやる仕事を1つ選びます。先月書いた案内メールや、前の四半期に作った整理表のようなものです。
2. 自分が作った成果物を5〜10個集めます。
3. そのとき手元にあった資料を渡して、同じ仕事をAIに頼みます。
4. 自分の結果と並べて比べてみます。

たとえばこのように送ってみることができます。自分が前に書いたメールはまだ見せないでください（このガイドの提案）。そうすることで、AIが真似せずに自力で作った結果を見ることができます。

```
下のメモをもとに、地域の読書会の会員に送る来月の案内メールを書いて。
受け取る人は40〜60代の会員20人で、口調は丁寧だけれど堅苦しくないようにして。
[メモを貼り付け]
```

比べるときは、自分に問いかけてみてください。大事な内容をすべて盛り込めているか？ 口調や形は合っているか？ 抜けているものは何か？[^academy-eval]

抜けている点が見つかったら、説明を書き足してもう一度頼んでみましょう。説明を足してちゃんとした結果が出たなら、次からはその説明を必ず入れれば大丈夫です。何度手直ししても自分の結果に届かないなら、その仕事は任せないほうがよいとわかったことになります。[^academy-eval]

テストに合格しても、確認は続けます。テストは信頼を深めてくれるだけで、責任をなくしてくれるわけではありません。[^academy-eval]

<Quiz id="ch11-eval" />

## 仕事の形から見る

メニューを先に選ばないでください。今目の前にある仕事がどんな形をしているかを先に見ましょう。そうすれば、使う機能は自然と決まります。[^academy-tabs]

サービスごとに機能の名前は違っても、仕事の形に合った機能は似ています。

| こんな仕事なら | ChatGPT | Claude |
|---|---|---|
| 尋ねて、整えて、一緒に考える | 通常の会話 | 通常の会話 |
| 簡単な事実、今日起きたこと | [ウェブ検索](/ja/guide/11-chatgpt/06-search.md#ウェブ検索-—-chatgptにインターネットを調べさせる) | [ウェブ検索](/ja/guide/10-claude/06-search.md#いつ何を使うか) |
| 資料をたくさん集めて報告書にする | [Deep Research](/ja/guide/11-chatgpt/06-search.md#ディープリサーチ-—-レポートを任せる) | [リサーチ](/ja/guide/10-claude/06-search.md#いつ何を使うか)（有料） |
| 1つの仕事をずっと続けていく | [プロジェクト](/ja/guide/11-chatgpt/07-projects-plugins.md#プロジェクト-—-会話・ファイル・指示を1つのフォルダーに) | [プロジェクト](/ja/guide/10-claude/07-projects-tools.md#プロジェクト-—-資料と指示をひとつに) |
| いくつかの段階を経て完成ファイルを受け取る | [Work](/ja/guide/11-chatgpt/07-projects-plugins.md#chatとworkの違い)（有料） | [Cowork](/ja/guide/10-claude/08-cowork.md#coworkとは-—-会話ではなく仕事を任せる)（有料） |
| 決まった時間ごとに繰り返す | [スケジュールされたタスク](/ja/guide/11-chatgpt/11-expert.md#決まった時間に自動で-—-予約タスク) | [スケジュールされたタスク](/ja/guide/10-claude/08-cowork.md#決まった時間に自動で-—-予約タスク)（有料） |

表の機能名と料金プランは、各サービスの章で確認したものです。変わることがあるので、使う前にその章を見てください。

たいていのことは、一番上の行（通常の会話）で、はっきりしたプロンプト1つあれば十分です。[^academy-openai] 下の行の機能は、通常の会話でやってみて足りないときに引き出しましょう。

<Quiz id="ch11-tools" />

## 繰り返す仕事は積み重ねておく

使っているうちに、同じことを繰り返し言うようになります。繰り返すことを一度書き留めておけば、次からはAIがわかった状態で始められます。

しまっておく場所は4つあります。最初から全部使う必要はありません。下の順番で、必要になったときに1つずつ足していきましょう。[^academy-layers]

1. **すべての会話で同じお願いをする** → 指示（カスタム指示）に書きます。ChatGPTは[「カスタム指示（사용자 지정 지침）」](/ja/guide/11-chatgpt/05-memory.md#カスタム指示-—-いつも守ってほしいこと)、Claudeは[「指示（지침）」](/ja/guide/10-claude/05-memory.md#指示-—-すべての会話に適用するルール)です。
2. **1つの仕事をずっと続けていく** → その仕事をプロジェクトにまとめます。
3. **同じ手順を毎回説明する** → その手順を使い回せる型として残します。[第8章「4. 使い回すひな形にする」](08-meta-prompting.md#_4-使い回すひな形にする)の型をプロジェクトの指示に入れるところから始めましょう。サービスと料金プランが対応していれば、スキルとして作ることもできます。
4. **よく整えた型を他の人と共有したい** → 型を文書として配るか、サービスが提供する共有機能（プラグインなど）にまとめます。こうした機能はサービスや料金プランによっては使えないことがあります。

順番に進めていけば、毎回新しく説明することが少しずつ減っていきます。

**まだ型にする時期ではない仕事もあります。** 仕事が毎週変わったり、結果の形がまだ決まっていなかったり、人が判断しなければならない仕事なら、まだ早いです。そういうときは会話の中で何度か試しながら整えていきましょう。[^academy-openai] 決まった時間に自動で動かす仕事も同じです。まずは手動で何度かやってみて、結果が信頼できるようになってから予約しましょう。[^academy-openai]

### 作った型は試して直す

自分が作った型は、自分で使うときにはうまくいきます。何を入れればいいか自分がわかっているからです。ところが、少し違う頼み方をしたり、少し違う資料を渡したりすると、ぶれることがあります。[^academy-skilltest]

そこで、同じお願いを2回してみましょう。1回は型を使い、もう1回は型を使わずに送ります。2つの答えを並べて、自分に問いかけてみてください。型を使ったほうが本当によくなっているか？ そうでないなら、何が抜けたのか？[^academy-skilltest]

直す点は具体的に伝えましょう。[^academy-skilltest]

- いまいちな例: 「なんか変。」
- 良い例: 「口調が堅苦しすぎる。」「冒頭の要約が抜けている。」

良い例は何を直せばいいか指し示しているので、AIがすぐに手直しできます。そして**一度に1つだけ**直しましょう。そうすれば、何が効果的だったのかがわかります。[^academy-skilltest]

最初から完璧である必要はありません。講座では、ほとんどのスキルは1〜2回手直しすれば使えるようになると言っています。[^academy-skilltest]

<Quiz id="ch11-layers" />

## 表と数字を任せる

数字の分析は、結果を信じても大丈夫かどうかが一番心配になります。こういうときは[前の節「任せる前に試してみる」](#任せる前に試してみる)のやり方を数字に使ってみましょう。

Anthropicの講座に出てくる例は次のようなものです。[^academy-data] 退役軍人を支援する団体の担当者リオは、四半期ごとに出席と就職の結果を分析しています。

1. リオは**すでに分析を終えた前の四半期の資料**を、あらためてAIに任せました。
2. 答えが返ってくるたびに自分の結果と照らし合わせ、抜けている点を書き留めました。
3. AIは出席と就職の関係は正しく見つけました。しかし、住居支援と就職あっせんを一緒に行うプログラムで見られる重要な点を見落としました。
4. 「プログラムの種類も別々に見て」と付け足すと、その点も捉えることができました。
5. リオは次の四半期から、その一文を必ず入れることにしました。

このようにやってみましょう。

```
添付した表は前の四半期の売上元データだよ。すでに自分で分析した結果があるから、同じ結論にたどり着くか見てみたいんだ。
月別の変化と支店ごとの違いを計算して、どうやって計算したか段階ごとに見せて。
```

数字に慣れていなくても大丈夫です。Excelの関数や散らかった表の整理をお願いしてみましょう。わからない段階が出てきたら、説明してほしいと続けて尋ねてください。過程を追いかけられてこそ、結果を確認できます。[^academy-data]

答え合わせのテストに合格しても、責任はそのまま残ります。結果が常識に合っているか見てください。AIの手助けを受けたことも隠さないでください。[^academy-data] 大事な計算は電卓やExcelでもう一度確認しましょう。

ファイルをアップロードする方法やグラフを受け取る方法はサービスごとに異なります。[ChatGPT 第11章「表と数字を任せる」](/ja/guide/11-chatgpt/11-expert.md#表と数字を任せる-—-データ分析)と[Claude 第12章「表と数字を任せる」](/ja/guide/10-claude/12-expert.md#表と数字を任せる)を見てください。

<Quiz id="ch11-data" />

## 学ぶために使う

何かを学ぶときは、答えをすぐにもらうのではなく、自分で考えるように導いてほしいと頼んでみましょう。自力で答えを探していけば、解き方の道筋も一緒に身につきます。

```
ExcelのVLOOKUPを学びたい。答えをすぐ教えるのではなくて、自分で考えられるように質問を1つずつ投げかけて。
```

::: details 返ってくる答えはだいたいこんな感じ（例 — クリックして開く）
このガイドが作った例です。実際の答えはサービスやその時々によって異なります。

> いいですね、一緒に考えてみましょう。最初の質問です。1つの表には商品番号と価格があり、もう1つの表には商品番号だけがあります。価格を手作業で埋めるとしたら、どうしますか？

自分が「番号を見て最初の表から探して書き写す」と答えると、このように続きます。

> そのとおりです。VLOOKUPはまさにその仕事を代わりにやってくれます。では次の質問です。Excelに探してもらうには、何を教えてあげる必要があるでしょうか？

**うまく受け取れたか確認してみましょう**: 関数の式を最初から全部教えてしまっていないか？ 質問が一度に1つずつか？ 自分の答えに合わせて次の質問が続いているか？

:::

AIから自分に質問を投げかけさせる方法は、[第5章「4. 質問してもらう」](05-prompt-patterns.md#_4-質問してもらう-—-flipped-interaction)と同じ仕組みです。自分のレベルに合わせた説明を受け取るプロンプトは、[プロンプト集「勉強・説明を聞く」](prompt-library.md#勉強・説明を聞く)にあります。ChatGPTには、このように教えるやり方を別途オンにする学習モードもあります（[ChatGPT 第11章](/ja/guide/11-chatgpt/11-expert.md#学ぶために使う-—-勉強モード)）。

<Quiz id="ch11-learn" />

## 仕事の重さに応じて確認する

結果を使う前に確認する習慣は、[第9章「確認する4つの習慣」](09-safety.md#確認する4つの習慣)で学びました。ここでは、どれくらい入念に見るか、どの段階で見るかを確かめます。

**すべての答えを同じように隅々まで見る必要はありません。** 仕事の重さに合わせて確認しましょう。[^academy-openai] 表の一番下の行は講座の基準で、上の3行はこのガイドが選んだ日常の例です。

| こんな仕事なら | これくらい確認する |
|---|---|
| 集まりのアイデア出し | 軽く読んで選ぶ |
| お知らせ・案内文の下書き | 事実・口調・抜け漏れがないかを見る |
| 記事・資料の要約 | 原文と合っているか照らし合わせる |
| 健康・お金・仕事・法的権利に影響する仕事 | 専門家が念入りに検討するか、決められた手続きを踏む |

**最後に1回だけでなく、段階ごとに見ましょう。** いくつかの段階で進める仕事なら、次の段階に進む前に少し立ち止まります。[^academy-openai] そして次の3つを自分に問いかけてみてください。講座のチェック枠組み「CLEAR」から、このガイドが3つを選びました。[^academy-openai]

- **事実**: 数字・名前・日付・出典は合っているか？
- **論理**: 「〜だから〜だ」というつながりは筋が通っているか？
- **口調**: 読む人に合っているか？

段階ごとに見ておけば、AIが勘違いしたときに早く気づけます。全部作り終えたあとで最初からやり直す必要がなくなります。[^academy-openai]

論理がおかしいときは、その部分を指摘して説明してもらいましょう。

```
2つ目の段落の結論がなぜ出てきたのか理解できないよ。どんな根拠と仮定でつながったのか説明して、弱いところがあれば直して。
```

成果物の種類ごとに特に見るべきポイント（データ分析の計算方法、リサーチ報告書の出典など）は、[ChatGPT 第11章「信じる前に確認する」](/ja/guide/11-chatgpt/11-expert.md#信じる前に確認する)に表でまとめました。

<Quiz id="ch11-verify" />

## 自分でやってみる

[第10章](10-practice.md)と同じように、実際の会社の資料ではなく架空の資料でやってみましょう。

1. 最近やっている仕事の中から、「最初に練習する仕事を選ぶ」の4つの条件（よくやる、結果がはっきりしている、確認しやすい、間違えても被害が小さい）に合う仕事を1つ書き出してみる。
2. 先月書いたことにする短い案内メール1通と、そのときのメモを架空で作って書き留めておく。[連続課題](practice-kit.md)のサンプルファイル `memo-last-month.txt` と `last-notice.txt` を使ってもよい。メモだけをAIに渡して同じメールを書かせたあと、自分のメールと比べて「全部入っているか？ 口調は合っているか？ 抜けているものは？」を書き出してみる。
3. 2番で抜けていた点を1つ説明に付け足して、もう一度頼んでみる。ちゃんとした結果が出たら、その一文を指示やプロジェクトの指示に入れておく。
4. 日付・品目・金額の表を10行ほど架空で作り、まず自分で品目ごとの合計を手計算で出す。次に同じ表をAIに渡して計算の段階を見せるように頼み、2つの結果を照らし合わせてみる。
5. この章のVLOOKUPのプロンプトを使って、最近学びたいと思っていることを1つ、質問を受けながら身につけてみる。

**連続課題**（[読書会の準備をする](practice-kit.md)）: 2番をサンプルファイルで行ったなら、ここから課題が始まります。ステップ2の各章の終わりに次の段階があります。この課題に沿って進めると、ステップ2を終えるときに11月の集まりの案内文パッケージが手元に残ります。

## まとめ

- 上手に使うには判断する力が必要である。Anthropicの講座はその判断を、任せる・説明する・見極める・責任を持つ（4D）に分けている。
- 最初は、よくやり、結果がはっきりしていて、確認しやすく、間違えても被害が小さい仕事で練習する。
- 任せるかどうかは勘で決めず、すでに答えを知っている仕事で試してみる。テストに合格しても確認と責任は残る。
- メニューより仕事の形を先に見る。たいていははっきりしたプロンプト1つで十分である。
- 繰り返すことは、指示 → プロジェクト → 型（スキル） → パッケージの順で、必要になったときに1つずつ積み重ねる。作った型は、使った場合と使わない場合の2回頼んで比較し、一度に1つだけ直す。
- 数字の分析は過去の資料で先に答え合わせをし、計算の過程を見せるように頼む。
- 確認は仕事の重さに応じて、最後に1回ではなく段階ごとに行う。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| AI Fluency | エーアイ・フルーエンシー | AIと上手に一緒に働く能力 |
| Delegation | デリゲーション（任せる） | 何を自分でやり、何をAIに任せるか分けること |
| Description | ディスクリプション（説明する） | 求める結果とやり方をはっきりと伝えること |
| Discernment | ディサーンメント（見極める） | 受け取った結果が合っていて使えるものか見極めること |
| Diligence | ディリジェンス（責任を持つ） | 責任を持って使い、AIを使ったことを明かし、結果に責任を持つこと |
| Evals | エバルズ（評価） | すでに答えを知っている仕事でAIを試してみる方法 |

<ChapterDone :chapter="11" />

次の章: ステップ1を終えました。[理解度確認テスト](certificate.md)で自分のAI理解レベルを確認するか、ステップ2の[ChatGPT](/ja/guide/11-chatgpt/01-getting-started.md)・[Claude](/ja/guide/10-claude/01-getting-started.md)ガイドへ進んでみましょう。

[^academy-4d]: Claude Academy「Claude 101」講義「Getting better results」。"AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results （確認日 2026-10-26）
[^ways]: OpenAI、「How workers are unlocking new ways of working」。自分の職種以外の仕事で例や背景をより多く添え、確認をより多く頼むという分析。https://openai.com/index/unlocking-new-ways-of-working （確認日 2026-10-24）
[^academy-eval]: Claude Academy「Claude 101」講義「Getting better results」。"Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results （確認日 2026-10-26）
[^academy-tabs]: Claude Academy「Claude 101」講義「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （確認日 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」講義「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （確認日 2026-10-26）
[^academy-skilltest]: Claude Academy「Introduction to Claude Cowork」講義「Validating skills for plugins」。"When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." 講義ではスキルを使った答えと使わなかった答えを比較する方法を説明している。この章では同じ方法をプロジェクトの指示のような型にも使えるように広げて記した（このガイドの解釈）。https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins （確認日 2026-10-26）
[^academy-data]: Claude Academy「Claude 101」講義「Getting better results」の動画（もとは「AI Fluency for nonprofits」講座の動画だと講義が明かしている）。"Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results （確認日 2026-10-26）
[^academy-openai]: OpenAI Academy 講座本文（ログイン・登録が必要）。Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" （確認日 2026-10-26）
