# 第5章 上手な任せ方 — 具体的に、計画を先に、確認の基準を渡す

> **一言まとめ**: 依頼には、**何を見て、どんな形で、どこに置いて、何ができたら完了か**を書きます。仕事が大きいときは**「計画」モードで進め方から**出してもらい、直してから任せます。
> 「終わりました」という言葉だけを信じず、**確認の基準と根拠**も一緒に出してもらいます。

この章は、2026年10月31日に確認したClaude Codeの公式ドキュメントと、macOSデスクトップアプリ（韓国語の画面、有料アカウント）をもとに書きました。この章では「整理ツール」の骨組みになる**ひな形3種**（議事録・勉強ノート・週次の振り返り）を作ります。

## 具体的に伝える

公式ドキュメントは、依頼が思いどおりに進まない一番多い理由をこう挙げています。**Claudeがフォルダを読んだだけではわからない情報が抜けているからです。**[^cant-see] 会議で決めたこと、自分の好きな形式、「完了」の基準などがそうです。

そこで、依頼には次の4つを書きます。

| 書くこと | 例 |
|---|---|
| 何を見て | inboxの会議メモ |
| どんな形で | 決めたこと / やること（担当・期限）/ 次に話し合うこと |
| どこに置いて | notesフォルダに新しいファイルで |
| 何ができたら完了か | やることのすべてに担当と期限があれば |

公式ドキュメントも、「何を見て、どんな症状で、何ができたら直ったことになるのか」を最初に伝えておくと、直す手間を一回減らせると説明しています。[^specific]

```
会議メモを整理して。
```

```
inboxの会議メモを読んで、議事録として整理して。決めたこと / やること（担当・期限）/ 次に話し合うことの3つに分けて、notesフォルダに新しいファイルで保存して。元のメモは書き換えないで。
```

2つ目の依頼は第2章で使ったものです。1つ目より長いですが、結果を2回、3回と直す手間が減ります。

**多めに求めたいときは、そう伝えます。** Claudeは依頼を控えめに読んで、依頼を満たす**いちばん小さな結果**を作る傾向があります。[^ambitious] 「空欄のときの扱いまで」「例もひとつずつ」のように、範囲を自分で広げてあげてください。

<Quiz id="ch405-specific" />

## わからないときは質問してもらう

何がほしいのかまだ決まっていなくても大丈夫です。**Claudeに質問してもらえばいい**のです。[^interview]

```
毎週金曜日に書く週次の振り返りのひな形を作りたいけれど、まだ何も決めていないよ。私が答えられるように質問をひとつずつして、全部決まったらその内容を振り返り-ひな形-草案.mdにまとめて。
```

Claudeは、まだ決まっていない部分を選択肢つきの質問で聞いてきます。答えが集まってスペック（何を作るかを書いた文書）になるまで、質問を続けます。[^interview] まとまった草案ファイルは、次に実際に作るときの基準になります。

<Quiz id="ch405-interview" />

## 計画を先に — 「計画」モード

仕事が大きいときは、すぐに任せずに**進め方から出してもらいます。**「計画」モードのClaudeは、ファイルを読んで調べたうえで計画を書きますが、**ファイルは書き換えません。**[^plan] 公式ドキュメントも、複雑な仕事は「計画」から始めることを勧めています。[^plan-tip]

実際にやってみましょう。新しいセッションで、入力欄の下の行にあるモードを**「計画」**に変え（第4章の権限モードのメニュー）、次のように送ります。

![計画の依頼。① 入力欄にひな形3つの計画の依頼、② 権限モード「計画」に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-17-plan-prompt-marked.png)

```
議事録・勉強ノート・週次の振り返りを、毎回同じ形で作りたいよ。notesフォルダの議事録とinboxのメモを参考にして、templatesフォルダにひな形を3つ作る計画を立てて。ひな形ごとにどんな欄を入れて、各欄に何を書くのか、そして結果が合っているかを私が確認するチェックリストも計画に入れて。
```

しばらくすると、計画が出てきます。

![計画の提案画面。① 「Claudeが計画を提案しました」カード（拒否・修正…・承認・承認して自動モードを使用）、② 右側の「計画」欄、③ 計画の中の「仮定（聞かずに決めた初期値）」の節に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-18-plan-marked.png)

**①のカード**で、計画をどうするかを選びます。

| 画面の名前 | することの内容 |
|---|---|
| 拒否 | この計画を受け入れない |
| 修正… | 変えたい点を書いて、計画を作り直させる |
| 承認 | 承認して、編集はひとつずつ確認する |
| 承認して自動モードを使用 | 承認して、自動モードで進める |

出典: 画面の名前はこのガイドの画面確認（2026-10-31）、動作は公式ドキュメント[^approve]

**②の計画欄**で、計画の全文を読みます。欄の上に「テキストを選択してClaudeにコメントを残してください」という案内があり、気になる文にその場で意見を付けられます。

**③の仮定**の節は、必ず読んでください。この実習では、Claudeが「聞かずに決めた初期値 — 変えたければ承認する前に言ってください」と書いて、ファイル名、保存場所、空欄の表示方法などを別にまとめていました。**承認する前が、いちばん安く直せるタイミングです。**

### 計画を直す

週次の振り返りは、よかったこと・惜しかったこと・次にやることの3欄で書きたいと思っていました。「修正…」を押すと、「何を変更する必要がありますか？（任意）」の欄が開きます。

![計画の修正欄。① 「週次の振り返りは、よかったこと / 惜しかったこと / 来週やることの3欄（KPT）にして。」と書いた欄、② 「修正」ボタンに赤い番号が付いている](../../../guide/20-claude-code/assets/shot-19-plan-edit-marked.png)

**KPT**は、よかったこと（Keep）・惜しかったこと（Problem）・次に試すこと（Try）に分けて振り返る方法です。「修正」を押すと、Claudeが計画を直して、もう一度承認を求めてきます。

![直した計画。① 前の計画に「承認されませんでした」、② 計画ファイルが「+12 −16」編集された、③ 再び出てきた計画カード、④ 「承認」ボタンに赤い番号が付いている](../../../guide/20-claude-code/assets/shot-20-plan-revised-marked.png)

今回は**「承認」**を押しました。承認すると、Claudeは計画モードを出て、選んだ方式に合う権限モードに切り替え、ファイルを書き換え始めます。[^approve] 画面の下の行のモードも、「計画」から「手動」に変わりました。

![計画を実行している画面。① 実行中のやることリスト、② セッション情報欄の成果物（README・週次の振り返り・勉強ノート・議事録）、③ 変更内容「+155 −1」、④ 権限モード「手動」に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-21-plan-run-marked.png)

①のやることリストに見える「ブランチを作る」「HANDOFF.mdを書く」は、キャプチャしたパソコンの個人用の指示（第6章の折りたたみボックス）のせいで増えたステップです。あなたの画面には出ないかもしれません。

作られたひな形は次のとおりです（このガイドの実習結果です）。

- [5장-양식-회의록.txt](/practice/notes/results/5장-양식-회의록.txt) · [5장-양식-공부노트.txt](/practice/notes/results/5장-양식-공부노트.txt) · [5장-양식-주간회고.txt](/practice/notes/results/5장-양식-주간회고.txt)
- [5장-양식-README.txt](/practice/notes/results/5장-양식-README.txt) — ひな形の使い方とチェックリスト

週次の振り返りのひな形は、修正の依頼どおり「よかったこと (Keep) / 惜しかったこと (Problem) / 来週やること (Try)」の3欄になりました。欄ごとに、何を書くかの案内と例が付いています。

<Quiz id="ch405-plan" />

## 確認の基準を渡す — 「やりました」ではなく根拠

Claudeは、仕事が**終わったように見えたら**止まります。合っているかを自分で確かめる方法がなければ、「終わったように見える」がすべてです。そうなると、あなたがひとつひとつ検査する人になってしまいます。[^check]

そこで、**合っているか間違っているかの答えが出る基準**を一緒に渡します。[^check] コードならテスト、文書の整理ならチェックリストがその役目をします。

```
ひな形で今週の振り返りを書いて。書き終わったら下のチェックリストをひとつずつ確認して、項目ごとに「合格/不合格」と、根拠になったメモの行を見せて。
- 欄ごとに1〜3個ずつ入っているか？
- 数字（販売個数、いいねの数）がメモと同じか？
- メモにない内容を作っていないか？
```

公式ドキュメントは、どの方法を使うにしても**根拠を出してもらう**よう勧めています。「すべて合格」という一行より、実際に確認した内容を読むほうが速くて正確です。[^evidence] この実習のひな形のREADMEにも、Claudeがチェックリストを入れておいてくれました。

<Quiz id="ch405-check" />

## 途中で方向を変える

最初の1分は様子を見てください。見当違いの方向に進んだら、すぐに止めて直します。[^steer]

- **止める**: 停止ボタンか**Esc**。それまでにやった作業は残ります。[^steer]
- **巻き戻す**: 第4章の`/rewind`。思い切った方法を先に試して、だめなら戻せばいいので、試すのが怖くありません。[^steer]
- **最初からやり直す**: **同じことを2回直しても間違っているなら**、3回目の修正はせずに新しく始めます。失敗した試みが2回分、会話に残っていて、Claudeがそれを読み返し続けるからです。学んだことを盛り込んだ新しい依頼をひとつ出すほうが、ほとんどいつもうまくいきます。[^steer] デスクトップアプリでは、新しいセッションを開けばできます。

<Quiz id="ch405-steer" />

## やってみましょう

1. 新しいセッションでモードを「計画」に変えて、上のひな形3つの計画の依頼を送る。
2. 計画の「仮定」の節を読んで、ひとつ以上を「修正…」で変えてみる（例: 週次の振り返りをKPTの3欄にする）。
3. 「承認」で進めて、セッション情報欄の成果物にひな形のファイルができたかを見る。
4. ひな形で今週の振り返りを書いてもらうとき、チェックリストと根拠も一緒に出してもらう。

**続きの課題**: 第4章で書いておいた「2つの文書に共通して使いたいルール」の3行を、もう一度見てみましょう。第6章で、このルールをCLAUDE.mdに保存して、毎回言わなくても守ってもらえるようにします。

## まとめ

- 依頼には、何を見て・どんな形で・どこに置いて・何ができたら完了かを書く。
- 決まっていなければ、Claudeに質問してもらう。
- 仕事が大きいときは、「計画」モードで進め方から出してもらう。「仮定」の節を読み、「修正…」で直してから「承認」する。
- 合っているかの答えが出る基準（チェックリスト）を渡し、結果と一緒に根拠も出してもらう。
- 最初の1分は様子を見て、2回直しても間違っていれば新しく始める。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Plan mode | プランモード（計画） | ファイルを書き換えず、調べたうえで計画だけを出すモード |
| Spec | スペック | 何を作るかを書いておいた文書 |
| Template | テンプレート（ひな形） | 毎回同じ形で埋めて書くための型 |
| KPT | ケーピーティー | よかったこと(Keep)・惜しかったこと(Problem)・試すこと(Try)に分けて振り返る方法 |
| Evidence | エビデンス（根拠） | 実際に確認した内容。「やりました」という言葉の代わりにもらうもの |

<ChapterDone :chapter="405" />

次の章: [第6章 プロジェクトの記憶](06-claude-md.md)

[^cant-see]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^specific]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^ambitious]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Claude tends to read a request conservatively and build the smallest thing that satisfies it, since it can't see how much you were hoping for." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^interview]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead" / "Claude comes back with multiple-choice questions about the parts you haven't pinned down" / "It keeps asking until the answers add up to a spec." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^plan]: Claude Code 公式ドキュメント「Choose a permission mode」。"Plan mode tells Claude to research and propose changes without making them. Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." https://code.claude.com/docs/en/permission-modes (確認日 2026-10-31)
[^plan-tip]: Claude Code 公式ドキュメント「Desktop application」。"Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^approve]: Claude Code 公式ドキュメント「Choose a permission mode」。"When the plan is ready, Claude presents it and asks how to proceed." / "Approving a plan exits plan mode and switches the session to the permission mode each approve option describes, so Claude starts editing." https://code.claude.com/docs/en/permission-modes (確認日 2026-10-31)
[^check]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Claude stops when the work looks done." / "Give Claude something it can run that comes back pass or fail." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^evidence]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"\"All tests pass\" on its own tells you very little" / "reading the output is faster than rerunning the check yourself" https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
[^steer]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Watch the first minute, press Esc the moment Claude drifts, and after two failed corrections run /clear and write a better prompt instead of a third." / "Esc stops Claude mid-action and keeps everything up to that point" / "That makes it low-risk to try the bolder approach first and rewind if it doesn't work out." / "a third correction mostly adds to a conversation that already contains two failed attempts for Claude to keep re-reading. /clear plus one new prompt that folds in what you learned works better almost every time." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
