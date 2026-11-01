# 8章. 運用と改善 — イシューで次の一周を回す

> **一言まとめ**: 公開したあとに思いついた改善点やバグは、**イシュー**（Issue）として書いておきます。イシューひとつが、次の一周の企画になります。
> PRに `fixes #番号` のように決まった言葉を書くと、PRをマージするときにそのイシューが **自動で閉じられます。** 企画と運用が、こうしてつながります。

この章は、2026年11月1日に確認したGitHubの公式ドキュメントをもとに書きました。GitHubの画面は英語表示で書きました。

## イシューとは

**イシュー**は、計画し、話し合い、やることを追跡するための記録です。[^issue] バグの報告、新機能、アイデアなど、書いておくことや話し合うことなら何でも入れられます。ステップ3の議事録に「次に話し合うこと」を書いたのと似ています。

イシューはPRとつながります。イシューやPRで別のイシューに触れると、お互いがリンクされ、PRに `fixes` のような決まった言葉を書くと **関連するイシューが自動で閉じられます。**[^close]

```
fixes #イシュー番号
```

イシュー番号は、イシューのタイトルの横に `#2` のように付いています。6章でPRをひとつ作っていたなら、最初のイシューが1番ではないことがあるので、必ず画面で確認してください。

GitHubの入門チュートリアルも、計画の段階で最初のイシューを作ります。タイトルに作りたい機能を書き、説明に作りたいものを数行書きます。[^first-issue]

<Quiz id="ch708-issue" />

## ラベルとボードで整理する

イシューが増えたら、**ラベル**で分けます。新しいリポジトリには、最初からいくつかのラベルが入っています。[^labels]

| ラベル | 意味 |
|---|---|
| bug | 予期しない問題 |
| enhancement | 新機能のリクエスト |
| documentation | ドキュメントの改善 |

出典: GitHub公式ドキュメント（一部のみ抜粋）[^labels]

**プロジェクト**（Projects）は、イシューやPRとつながった表・ボード・ロードマップです。[^projects] チュートリアルのボードでは、列が仕事の段階を表しています。やること（Todo）→ 進行中（In Progress）→ 完了（Done）と動かして、進み具合を見ます。[^board]

**最初からすべてを使う必要はありません。** 1章で見たように、多くの人はリポジトリひとつとイシュー数個から始めます。ラベルとボードは、イシューが増えて一目で見渡せなくなってから使っても遅くありません。

<Quiz id="ch708-labels" />

## もう一周回る

一周が終わったら、次の機能を **新しいイシューとして** 作り、始めるときに進行中へ動かして、次のサイクルを始めます。[^next-cycle] ステップ4で学んだ流れを、イシューひとつでもう一度回すと、こうなります。

1. **計画**: イシューに何を変えるかを書く。必要なら、SPEC.mdに確認の基準を1行足す（3章）。
2. **作る**: 新しいブランチで、計画モードで計画をもらってから作る（4章）。
3. **確認**: 確認の仕組みを動かして、証拠をもらう。**既存のチェックもすべて通る**必要がある（5章）。
4. **レビュー**: PRに `fixes #番号` を書いて、レビューを受ける（6章）。
5. **公開**: マージするとPagesに再び公開される（7章）。

Claude Codeに、イシューをそのまま渡すこともできます。

```
GitHubのイシュー #<イシュー番号> の内容を読んで、SPEC.mdに確認の基準を1行足してから、まず計画を立てて。まだファイルは直さないで。
```

Claudeがイシューを読めないと言ったら、イシューのタイトルと内容をコピーして、依頼に貼り付けてください。その方法がいちばん確実です。

<Quiz id="ch708-cycle" />

## リリースはあとで

**リリース**（Release）は、より多くの人がダウンロードして使えるようにまとめた、配布の単位です。[^release] ダウンロードしてインストールするプログラムには大切ですが、ウェブページひとつのやることボードには、必ずしも必要ではありません。こういうものがある、ということだけ知っておいてください。

## やってみよう

1. `cafe-todo-board` リポジトリのトップ画面で **Issues** → **New issue** を押して、新しいイシューを作る。[^new-issue] タイトルは「期限が過ぎたやることを赤色に」、ラベルは `enhancement`。
2. イシューの内容をClaude Codeに渡し、SPEC.mdに確認の基準を1行足してから、計画をもらう。
3. 新しいブランチで作り、確認の仕組みで、新しい基準も既存の基準もすべて通る証拠をもらう。
4. イシューのタイトルの横にある番号を確認して、PRの説明に `fixes #イシュー番号` を書く。レビューしてからマージする。
5. イシューが自動で閉じられたか、Pagesに変わった画面が出るかを確認する。

**続けての課題**: 9章では、公開リポジトリにシークレット（秘密の値）や個人情報が入らないように守る方法をまとめます。

## まとめ

- イシューは、計画・話し合い・追跡の記録である。改善点とバグをイシューとして書いて、次の一周を始める。
- PRに `fixes #イシュー番号` と書くと、マージしたときにイシューが自動で閉じられる。番号は画面で確認する。
- ラベル（bug・enhancement・documentation）とボード（Todo → In Progress → Done）は、イシューが増えたら使う。
- 次の一周も、計画 → 作る → 確認 → レビュー → 公開。既存のチェックも引き続き通る必要がある。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Issue | イシュー | やること・バグ・アイデアを書いて追跡する記録 |
| Label | ラベル | イシューとPRを分けるための札 |
| Project | プロジェクト | イシューやPRとつながった表・ボード・ロードマップ |
| Release | リリース | ダウンロードして使えるようにまとめた配布の単位 |

<ChapterDone :chapter="708" />

次の章: [9章. 安全と責任](09-safety.md)

[^issue]: GitHub公式ドキュメント、「About issues」。"You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues （確認日 2026-11-01）
[^close]: GitHub公式ドキュメント、「About issues」。"Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues （確認日 2026-11-01）
[^first-issue]: GitHub公式ドキュメント、「Planning your work」。"In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work （確認日 2026-11-01）
[^labels]: GitHub公式ドキュメント、「Managing labels」。"GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels （確認日 2026-11-01）
[^projects]: GitHub公式ドキュメント、「About Projects」。"A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects （確認日 2026-11-01）
[^board]: GitHub公式ドキュメント、「Planning your work」。"The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work （確認日 2026-11-01）
[^next-cycle]: GitHub公式ドキュメント、「Reviewing your proposed changes」。"If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes （確認日 2026-11-01）
[^release]: GitHub公式ドキュメント、「About releases」。"Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases （確認日 2026-11-01）
[^new-issue]: GitHub公式ドキュメント、「Planning your work」。"On the main page of your `stargazers-log` repository, click **Issues**." / "Click **New issue**." https://docs.github.com/en/get-started/start-your-journey/planning-your-work （確認日 2026-11-01）
