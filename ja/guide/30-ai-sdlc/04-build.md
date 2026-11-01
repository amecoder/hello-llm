# 第4章 作る — まず計画、ブランチとコミット

> **一言まとめ**: 新しいセッションでSPEC.mdを渡し、**計画モード**でまず計画を受け取ります。承認したあとは、**ブランチ**という切り離された場所で作り、小さな変更ごとに**コミット**で記録します。
> これがGitHub flowです。開発者だけでなく誰にでも役に立つ、軽い作業の流れです。

この章は、2026年11月1日に確認したClaude Code・GitHub公式ドキュメントをもとに書きました。計画モードとコミットは、[Claude Code 第4・5章](../20-claude-code/05-delegate-well.md)で使ってみました。この章では、それをブランチと結び付けて、「安全に作る流れ」としてまとめます。

## まず計画を受け取る

SPEC.mdができたら、新しいセッションを開いて**計画モード**に切り替えます。デスクトップアプリでは、[Claude Code 第5章](../20-claude-code/05-delegate-well.md)のように、入力欄の下のモードを「計画（계획）」に切り替えます。計画モードでは、Claudeはファイルを読んで計画だけを出し、自分が承認するまで何も直しません。[^plan]

```
SPEC.mdを読んで、この仕様を満たすやることボードを作る計画を立てて。まだファイルは作らないで。
```

計画を受け取ったら、こう聞いてみましょう。

- SPEC.mdの行ごとに、計画のどの段階が対応しているか。
- 1つの段階が、一度に確認できる大きさか。
- 自分の知らない新しいツールやインストールが入っていないか。

気に入らなければ、承認する前に直してもらいます。計画の段階で直すのが一番安くすみます。

<Quiz id="ch704-plan" />

## ブランチで作る

**ブランチ**は、機能を切り離された場所で作らせてくれます。準備ができるまで、基本のバージョン（`main`）は変わりません。[^branch] 失敗しても`main`は無事なので、安心して試せます。

GitHubの入門チュートリアルは、作る過程をこうまとめています。**作業の場所を用意する → 変更して保存する → レビューを受けるために提案する**で、そのための道具がブランチ・コミット・PR（第6章）です。[^core]

ブランチの名前は、**短く、意味が伝わる**ようにつけます。[^name] やることボードの最初の画面なら、`first-board`くらいで十分です。

```
first-boardブランチを作って、承認した計画どおりに最初の画面を作って。ビルドが要らないように、一番上のフォルダのindex.html一つで開けるようにして。
```

`index.html`一つで作る理由は、第7章のGitHub Pagesが、公開するフォルダの一番上で`index.html`を探すからです。

<Quiz id="ch704-branch" />

## 小さくコミットする

**コミット**は、変更をその瞬間の写真のように保存し、**プッシュ**はその写真をGitHubのリポジトリに送ります。[^commit]

1つのコミットには、**切り離された、完結した変更を1つ**入れるのがよいです。そうすれば、別の方法を選びたくなったとき、その部分だけ元に戻しやすくなります。[^atomic] 関係のない変更は、ブランチも別に作ります。[^atomic]

| 物足りないコミット | よりよいコミット |
|---|---|
| 1日分の作業を一度に「作業」 | 「やること表の読み込みを追加」、「期限を過ぎたやることを色で表示」 |

出典: このガイドの例（原則はGitHub公式ドキュメント）[^atomic]

ステップ3で学んだとおり、任せる前と後に記録を残す習慣は、ここでもそのまま通用します。

<Quiz id="ch704-commit" />

## AIが作ったものを読む

AIが作った結果は、**読んでから**受け入れます。GitHubのチュートリアルも、AIが作ったものを確認してから、例に合わせて直すよう言っています。[^review-ai]

Claude Codeデスクトップアプリでは、変更内容の表示（diff）で、ファイルごとに変更を確認できます。行の横の**+**で意見を付けると、Claudeが読んで直してくれます。[^diff]

コードを全部理解できなくても大丈夫です。こう聞いてみましょう。

```
さっき変えたファイルごとに、何をなぜ変えたのか1行ずつ説明して。SPEC.mdのどの行とつながるかも教えて。
```

説明がSPEC.mdとつながらない変更があれば、頼んでいないことをしたのかもしれません。その部分を聞いてみましょう。

<Quiz id="ch704-read" />

## 自分でやってみよう

1. やることボードのフォルダで**新しいセッション**を開き、計画モードに切り替える。
2. 上の計画の依頼を送り、3つの質問で計画を点検してから承認する。
3. `first-board`ブランチで最初の画面を作らせる。やることのデータは、ステップ3の議事録のやること表を使う。
4. 変更内容の表示でファイルを確認し、変更の説明を依頼する。
5. 小さな単位でコミットさせる。
6. Claudeに「`first-board`ブランチをGitHubにアップロード（プッシュ）して」とお願いする。GitHubのリポジトリ画面でブランチが見えればよい。

**続きの課題**: 第5章では、「やることが1つも欠けずに見えるか？」をClaudeが自分で確認する仕組みを作ります。

## まとめ

- 新しいセッションでSPEC.mdを渡し、計画モードでまず計画を受け取る。直すのは計画の段階が一番安い。
- ブランチは、`main`に触れない作業の場所。名前は短く、意味が伝わるように。
- 1つのコミットに、完結した変更を1つ。関係のない変更は、ブランチを分ける。
- AIが作ったものは、読んでから受け入れる。変更ごとに、SPEC.mdのどの行とつながるかを聞く。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Branch | ブランチ | 基本のバージョンに触れずに、別に作業する枝分かれ |
| Commit | コミット | 変更をその瞬間の写真のように記録すること |
| Push | プッシュ | 自分の記録をGitHubのリポジトリに送ること |
| GitHub flow | ギットハブ・フロー | ブランチ → 変更 → PR → レビュー → マージという作業の流れ |

<ChapterDone :chapter="704" />

次の章: [第5章 確認とテスト](05-test.md)

[^plan]: Claude Code公式ドキュメント、「Common workflows」。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (確認日 2026-11-01)
[^branch]: GitHub公式ドキュメント、「Writing and storing your code」。"A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (確認日 2026-11-01)
[^core]: GitHub公式ドキュメント、「Writing and storing your code」。"Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (確認日 2026-11-01)
[^name]: GitHub公式ドキュメント、「GitHub flow」。"A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow (確認日 2026-11-01)
[^commit]: GitHub公式ドキュメント、「Writing and storing your code」。"Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (確認日 2026-11-01)
[^atomic]: GitHub公式ドキュメント、「GitHub flow」。"Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow (確認日 2026-11-01)
[^review-ai]: GitHub公式ドキュメント、「Writing and storing your code」。"Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (確認日 2026-11-01)
[^diff]: Claude Code公式ドキュメント、「Desktop application」。"After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop (確認日 2026-11-01)
