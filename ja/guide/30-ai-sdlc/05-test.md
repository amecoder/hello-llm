# 第5章 確認とテスト — 確認の仕組みを渡して、証拠を受け取る

> **一言まとめ**: AIは**作業が終わったように見えると**止まります。本当に終わったかを知らせる**確認の仕組み**を渡せば、AIは自分で直して、もう一度確認するサイクルを回します。
> そして「全部通りました」という言葉の代わりに、**証拠**（実行したコマンドとその出力、または画面）を受け取りましょう。

この章は、2026年11月1日に確認したClaude Code・GitHub公式ドキュメントをもとに書きました。ステップ3で結果を元のメモと照らし合わせた習慣が、ステップ4では「確認の仕組み」という名前で自動化されます。

## なぜ確認の仕組みが必要なのか

公式のベストプラクティス文書は、こう言っています。Claudeは作業が**終わったように見えると**止まります。本当に終わったかを知らせるものがなければ、「終わったように見える」が判断のすべてになります。[^looks-done] すると結局、**自分がテストの役割**をすることになり、間違いは自分がたまたま気づくまでそのまま残ります。[^you-test]

反対に、**合格/不合格で答えてくれる何か**を渡せば、Claudeは自分でサイクルを閉じます。変更して、検査を動かし、壊れていたら出力を読んで直し、もう一度動かします。[^loop]

| 確認の仕組みがないと | 確認の仕組みを渡すと |
|---|---|
| 「全部できました」→ 自分で開いて間違いを探す | 検査が不合格 → Claudeが直す → もう一度検査 → 合格 |

出典: このガイドのまとめ（根拠は公式ドキュメント）[^loop]

<Quiz id="ch705-why" />

## 確認の仕組みの種類

確認の仕組みは、**Claudeが結果を読めるものなら何でも**かまいません。公式ドキュメントは、テストファイル、ビルドが成功したか、構文チェッカー、出力を比べるスクリプト、デザイン案の横に置いて比べたブラウザの画面を例に挙げています。[^kinds] そうした仕組みがあるなら、CLAUDE.mdで**最も役に立つ1行は、それを動かすコマンド**だとまで言っています。[^claude-md]

一番簡単な方法は、**依頼に書くこと**です。設定なしで、今日すぐできます。[^in-prompt]

```
やることボードを直したあとは、SPEC.mdの確認基準を1つずつ検査して、全部通るまで続けて。
```

デスクトップアプリでは、Claudeが開発サーバーを起動し、アプリの中の**ブラウザペイン**で開いて、自分の変更を確認できます。標準では、編集のたびに自動で確認します。[^browser] ウェブページであるやることボードによく合う仕組みです。

テストを作ってもらうときは、**どの動作を確認するかを具体的に**伝えます。[^specific-test]

| 物足りない依頼 | よりよい依頼 |
|---|---|
| テストを作って | 議事録のやること5件が画面にすべて見えるか、期限が日付の形式になっているかを確認するテストを作って |

出典: このガイドの例（コツは公式ドキュメント）[^specific-test]

<Quiz id="ch705-kinds" />

## 証拠を受け取る

どの仕組みを使っても、**証拠**を求めてください。実行したコマンドとその出力、または画面です。[^evidence] 「全部通りました」という言葉だけでは、わかることがほとんどありません。出力を読むほうが、自分でもう一度動かすより速いです。[^evidence]

```
さっき動かした確認コマンドとその出力を、そのまま見せて。合格がいくつ、不合格がいくつかも。
```

**検査が本当に検査しているかも確認してください。** わざと間違いを入れたときに不合格にならない検査は、仕組みではなく飾りです。たとえば、やることを1つ消したまま動かして、検査が不合格になるかを見ます。

<Quiz id="ch705-evidence" />

## アップロードのたびに自動で — GitHub Actions

確認を、人が毎回指示しなくてもよいようにできます。**GitHub Actions**は、ビルド・テスト・デプロイを自動で動かすGitHubの機能です。変更をアップロードするたびに、テストを動かせます。[^actions]

- 何をするかは、リポジトリの`.github/workflows`フォルダに入れたYAMLファイル（設定ファイル）で決めます。[^yaml]
- こまめにコミットし、こまめに確認する習慣を**継続的インテグレーション**（CI）と呼びます。エラーを早く見つけられます。[^ci]
- GitHubは、確認の結果を第6章のPRの画面に表示します。自分のブランチの変更がエラーを起こしたかどうかを、すぐに見られます。[^ci]
- **公開リポジトリ**では、GitHubが提供する標準の実行環境（ランナー）を無料で使えます。[^free]

設定ファイルは、Claudeに作ってもらえば大丈夫です。ただし最初は、上の「依頼に書くこと」とブラウザでの確認だけで十分です。**最初からすべての自動化を整える必要はありません。**

<Quiz id="ch705-actions" />

## 自分でやってみよう

1. 第4章の`first-board`ブランチで、SPEC.mdの確認基準を検査する仕組みを作ってもらう。
2. 検査を動かし、実行したコマンドと出力をそのまま見せてもらう。
3. やることを1つわざと消したままもう一度動かして、検査が不合格になるかを見る。確認したら元に戻す。
4. アプリのブラウザペインでやることボードを開き、やることの数を自分で数えてみる。
5. 検査のコマンドを、CLAUDE.mdに1行で書いておく。

**続きの課題**: 第6章では、ここまでの変更をPRとしてアップロードして、レビューを受けます。

## まとめ

- AIは終わったように見えると止まる。合格/不合格で答える確認の仕組みを渡せば、自分で直して、もう一度確認する。
- 確認の仕組みは、テスト・ビルド・比較スクリプト・ブラウザの画面など、Claudeが結果を読めるものならよい。
- 「全部通った」という言葉の代わりに、コマンドと出力という証拠を受け取る。わざと間違えて、検査が不合格になるかも見る。
- GitHub Actionsは、アップロードのたびに自動で確認する。公開リポジトリでは標準のランナーが無料である。

## 用語整理

| 用語 | 読み方 | 一言での意味 |
|---|---|---|
| Test | テスト | 結果が期待どおりかを自動で確認する検査 |
| CI | シーアイ | こまめに統合して、こまめに自動で確認する習慣（継続的インテグレーション） |
| GitHub Actions | ギットハブ・アクションズ | アップロードのたびに、決めておいた作業を自動で動かす機能 |
| YAML | ヤムル | 自動作業の設定に使う書式 |

<ChapterDone :chapter="705" />

次の章: [第6章 PRとレビュー](06-review.md)

[^looks-done]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^you-test]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^loop]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^kinds]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^claude-md]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^in-prompt]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^browser]: Claude Code公式ドキュメント、「Desktop application」。"Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (確認日 2026-11-01)
[^specific-test]: Claude Code公式ドキュメント、「Common workflows」。"When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (確認日 2026-11-01)
[^evidence]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^actions]: GitHub公式ドキュメント、「Quickstart for GitHub Actions」。"GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (確認日 2026-11-01)
[^yaml]: GitHub公式ドキュメント、「Understanding GitHub Actions」。"Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (確認日 2026-11-01)
[^ci]: GitHub公式ドキュメント、「Continuous integration」。"Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (確認日 2026-11-01)
[^free]: GitHub公式ドキュメント、「Billing and usage」。"GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (確認日 2026-11-01)
