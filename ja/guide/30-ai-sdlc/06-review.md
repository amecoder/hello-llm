# 第6章 PRとレビュー — マージする前にもう一度見る

> **一言まとめ**: **PR**（Pull Request）は、自分のブランチの変更を `main` に取り込もうと**提案する**ものです。取り込む前に、話し合ったり確認したりする場になります。
> 1人で作っていても、レビューはします。AIレビュー（`/code-review`）も受けますが、**「問題なし」は安全という意味ではなく、マージするかどうかは自分で決めます。**

この章は、2026年11月1日に確認したGitHubとClaude Codeの公式ドキュメントをもとに書きました。

## PRとは

**PR**は、あるブランチの変更を別のブランチに取り込もうと提案するものです。プロジェクトに入る前に、話し合って確認する場を作ってくれます。[^pr]

PRの画面には、次のようなタブがあります。[^tabs]

| タブ | 表示されるもの |
|---|---|
| Conversation | 説明・コメント・レビュー |
| Commits | ブランチが変わってきた経過 |
| Checks | 自動テスト・ビルドの結果（第5章） |
| Files changed | レビューする人がコメントを付ける、変更内容 |

出典: GitHub公式ドキュメント（一部のみ抜粋）[^tabs]

PRを作るときは、**何を変えたのか、どんな問題を解決するのか**を書きます。第8章のイシューを解決するPRなら、イシューとつなげます。決まった言葉でつなげると、PRがマージされたときにイシューが自動で閉じられます。[^describe]

**小さなPRのほうが、レビューしやすく、マージしても安全です。** 他の人にレビューをお願いする前に、まず自分で確認します。変更内容を読み、うっかり変えたところがないかを見て、ビルドとテストが動いたかを確かめます。[^small]

Claude CodeにPRを作ってもらうこともできます。公式ドキュメントは、提出する前にClaudeが作ったPRを確認し、**危ない点を挙げてもらう**ようにすすめています。[^risks]

```
first-boardブランチでPRを作って。提出する前に、この変更で危なそうな点を先に挙げて。
```

<Quiz id="ch706-pr" />

## 1人でもレビューする

GitHubのチュートリアルは、**1人で作業していても**、マージする前に意識してレビューする習慣がプロジェクトを健全に保ち、あとの共同作業を楽にしてくれると言っています。[^alone]

レビューは、3つの決定のどれかで終わります。[^decisions]

| 決定 | 意味 |
|---|---|
| Comment | 意見だけを残す |
| Approve | マージする準備ができた |
| Request changes | マージする前に直す必要がある |

出典: GitHub公式ドキュメント[^decisions]

レビューの基準は、第3章の**SPEC.md**です。公式のベストプラクティスの文書にある例のプロンプトは、作り終えたあとに**SPEC.mdと照らし合わせて**すべての要求が実装されたかを確かめさせ、正確さに影響する抜けだけを報告させて、**スタイルは飛ばす**ように言っています（例ではサブエージェントに任せていますが、このガイドでは新しいセッションに置き換えて書いています）。[^against-spec] 理由も書かれています。問題を探すように頼むと、レビューする側は**いつも何かを見つけてきます。**[^always-finds] それを全部直していくと、余計な飾りが増えてしまいます。

```
新しいセッションで、いまのブランチの変更をSPEC.mdと照らし合わせてレビューして。要求がすべて実装されているか、確認基準ごとに検査があるかを見て、正確さに影響する抜けだけを教えて。スタイルは飛ばして。
```

<Quiz id="ch706-review" />

## AIにレビューしてもらう

Claude Codeには、レビュー用のコマンド `/code-review` があります。作業中のセッションで入力すると、自分のブランチの変更を読み、正確さの問題を探して、会話で知らせてくれます。[^local] 使用量は、セッションのほかの部分とまったく同じように、自分のプランで計算されます。[^usage]

デスクトップアプリでは、コミットする前に入力欄へ `/code-review` と入力して、レビューを受けられます。[^desktop-review] PRを開いたあとは、セッション情報パネルで、PRと自動チェックの状態を見られます。この機能には、GitHub CLI（`gh`）がインストールされ、ログインしている必要があります。[^monitor]

**AIレビューには、はっきりした限界があります。**

- AIレビューは、バグやセキュリティの問題を見逃すことがあります。**指摘がないからといって、エラーがない、または安全だという意味ではありません。**[^miss]
- GitHubのPRに自動で付く管理型レビューも、PRを承認したりブロックしたりしません。**マージするかどうかは、人が決めます。**[^decide] この管理型レビューはTeamとEnterpriseのプラン向けで、個人はどのプランでも `/code-review` を使えます。[^plans]

ステップ3で「作った人と確認する人を分ける」ことを学んだなら、同じClaudeでも**新しいセッション**でレビューさせるほうがよいです。作ったときの会話の流れに引っ張られないからです。

<Quiz id="ch706-ai-review" />

## マージして片付ける

レビューを終えて確認の仕組みが通ったら、PRを**マージします**（Merge）。GitHub flowの最後は、ブランチを削除することです。ブランチを削除しても、**PRとコミットの記録は消えない**ので、心配はいりません。[^delete]

あとで人が増えたら、「承認がないとマージできない」といった**保護ルール**を設定できます。保護ルールは、デフォルトで強制上書きとブランチの削除を防ぎます。[^protect]

<Quiz id="ch706-merge" />

## 自分でやってみよう

1. `first-board` ブランチがGitHubに上がっているか確認する（第4章）。リポジトリのトップ画面で **Pull requests** → **New pull request** を押し、比較するブランチに `first-board` を選んで **Create pull request** を押す。[^create-pr] タイトルと説明に、何をなぜ変えたのかを書く。
2. 作る前に、Claudeに危ない点を挙げてもらう。
3. 新しいセッションで、SPEC.mdと照らし合わせたレビューを受ける。正確さの問題だけを直す。
4. `/code-review` をもう一度受け、指摘がなくても、自分でFiles changedタブに目を通す。
5. 確認の仕組みが通ったらPRをマージし、ブランチを片付ける。

**続きの課題**: 第7章では、マージしたやることボードをGitHub Pagesでインターネットに公開します。

## まとめ

- PRは、マージする前に話し合って確認する場。小さく作り、何をなぜ変えたかを書き、まず自分で確認する。
- 1人でもレビューする。基準はSPEC.md。正確さの抜けだけを直し、スタイルは飛ばす。
- `/code-review` はどのプランでも使える。指摘がなくても安全とは限らず、マージするかどうかは人が決める。
- マージしたあとにブランチを削除しても、PRとコミットの記録は残る。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Pull Request（PR） | プル・リクエスト | ブランチの変更を取り込もうという提案 |
| Review | レビュー | マージする前に変更を確認すること |
| Merge | マージ | ブランチの変更を取り込んで1つにすること |
| `/code-review` | コード・レビュー | Claude Codeのレビュー用コマンド |

<ChapterDone :chapter="706" />

次の章: [第7章 デプロイ](07-deploy.md)

[^pr]: GitHub 公式ドキュメント、「About pull requests」。"A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (確認日 2026-11-01)
[^tabs]: GitHub 公式ドキュメント、「About pull requests」。"**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (確認日 2026-11-01)
[^describe]: GitHub 公式ドキュメント、「GitHub flow」。"When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow (確認日 2026-11-01)
[^small]: GitHub 公式ドキュメント、「Helping others review your changes」。"Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes (確認日 2026-11-01)
[^risks]: Claude Code 公式ドキュメント、「Common workflows」。"Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows (確認日 2026-11-01)
[^alone]: GitHub 公式ドキュメント、「Reviewing your proposed changes」。"Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (確認日 2026-11-01)
[^decisions]: GitHub 公式ドキュメント、「Quickstart for reviewing pull requests」。"**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart (確認日 2026-11-01)
[^against-spec]: Claude Code 公式ドキュメント、「Best practices for Claude Code」。"use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^always-finds]: Claude Code 公式ドキュメント、「Best practices for Claude Code」。"A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^local]: Claude Code 公式ドキュメント、「Review locally with /code-review」。"Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local (確認日 2026-11-01)
[^usage]: Claude Code 公式ドキュメント、「Review locally with /code-review」。"The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local (確認日 2026-11-01)
[^desktop-review]: Claude Code 公式ドキュメント、「Desktop application」。"To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop (確認日 2026-11-01)
[^monitor]: Claude Code 公式ドキュメント、「Desktop application」。"After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop (確認日 2026-11-01)
[^miss]: Claude Code 公式ドキュメント、「Code Review」。"Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review (確認日 2026-11-01)
[^decide]: Claude Code 公式ドキュメント、「Code Review」。"A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review (確認日 2026-11-01)
[^plans]: Claude Code 公式ドキュメント、「Code Review」。"**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review (確認日 2026-11-01)
[^delete]: GitHub 公式ドキュメント、「GitHub flow」。"Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow (確認日 2026-11-01)
[^protect]: GitHub 公式ドキュメント、「About protected branches」。"By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches (確認日 2026-11-01)
[^create-pr]: GitHub 公式ドキュメント、「Quickstart for pull requests」。"then click **New pull request**." / "For the **compare** branch, select the branch that contains your changes." / "Click **Create pull request**." https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart (確認日 2026-11-01)
