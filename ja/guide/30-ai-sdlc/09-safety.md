# 第9章 安全と責任 — 秘密の値・公開・ライセンス

> **一言まとめ**: パスワードやAPIキーのような**秘密の値は、絶対にリポジトリに上げません。** 一度コミットすると、ファイルを消してもGitの履歴に残ります。
> 漏れてしまったときは、履歴を消すことよりも、**その秘密の値を先に変えること（無効化・交換）**が最初にやることです。

この章は、2026年11月1日に確認したGitHubとClaude Codeの公式ドキュメント、およびAnthropicの消費者向け利用規約をもとに書きました。どのAIにも通じる安全の心得は[第1段階 第9章](../00-common/09-safety.md)にあります。この章では、**公開リポジトリと公開（デプロイ）**で新しく生まれる危険を扱います。法律上のアドバイスではないので、重要な決定は専門家に確認してください。

## 秘密の値は上げない

**秘密の値**（シークレット）は、機密性の高いシステムやデータにアクセスできるようにする認証情報です。外部サービス用のAPIキーやトークン、データベースのパスワードなどがそうです。[^secret] GitHubは、パスワードやAPIキーのような機密情報を**絶対に**リポジトリに上げないよう言っています。[^never]

なぜそこまで強く言うのでしょうか？ コミットされた秘密の値は**Gitの履歴の一部**になり、最新のファイルから消しても履歴には残るからです。[^history] しかも、公開リポジトリの秘密の値は、検索エンジンや専門の収集ツールに見つかってしまいます。[^indexed]

よくある漏れ方は次のとおりです。[^paths]

- 試している途中で入れた値を、うっかりコミットする
- `.env`のような設定ファイル
- 文書やREADMEの例に、本物のキーを書く

<Quiz id="ch709-secret" />

## 三重に守る

| 段階 | することの内容 | 根拠 |
|---|---|---|
| 1. 入れない | `.gitignore`に書き、Claudeに読ませないようにする | 第2章、この節 |
| 2. 止める | GitHubのプッシュ保護が、上げる前に止める | この節 |
| 3. 変える | 漏れたらすぐに無効化・交換する | この節 |

出典: このガイドのまとめ（根拠は各脚注）

**1. 入れない。** 秘密の値が入ったファイルは、最初から`.gitignore`に書きます（第2章）。すでにコミットしたファイルは、一覧に書くだけでは無視されないので、順番が大切です。Claude Codeのファイルツールが`.env`のようなファイルを読めないようにするには、`Read`の拒否ルール（例: `Read(./.env)`）を入れます。[^deny] ただし、このルールは、ファイル名を指定せずに読むコマンドや、他のプログラムまでは止められません。[^deny-limit] ですから、秘密の値のファイルは、最初からリポジトリのフォルダの外に置くのがいちばん安全です。権限のルールを入れる場所は、[Claude Code 第4章](../20-claude-code/04-permissions-undo.md)で扱いました。自動化した作業に秘密の値が必要なときは、リポジトリのファイルではなく、GitHubのSecretsに入れます。[^actions-secret][^gh-secrets]

**2. 止める。** GitHubの**プッシュ保護**は、秘密の値が入ったプッシュを、リポジトリに届く**前に**止めます。[^push] 自分のアカウントでは、公開リポジトリに秘密の値を上げられないようにする保護が、初期設定でオンになっています。[^push] それでも、これは最後の網にすぎません。すべての種類を捕まえる保証はないので、まず1の段階を守ってください。

**3. 変える。** 秘密の値が漏れたという警告を受けたら、その認証情報を**すぐに交換**します。[^rotate] Gitの履歴を書き換える作業は、一緒に使っている人との調整が必要で、副作用もあります。公式ドキュメントも、消したいものが秘密の値なら、**最初の一歩は無効化・交換**だと言っています。[^revoke-first]

<Quiz id="ch709-layers" />

## 公開にともなうこと

公開リポジトリとPagesのサイトは、誰でも見られます（第2・7章）。そこで、公開する前に次のことを点検します。

- **個人情報**: 実名・連絡先・住所が入ったメモを入れない。第3段階の整理ツールのメモを、そのまま上げない理由です。
- **訪問者の情報**: Pagesは、セキュリティのために訪問者のIPを記録します（第7章）。
- **承認の責任**: 提案されたコードやコマンドが安全かを、承認する前に確認する責任は、利用者にあります。[^responsible]

<Quiz id="ch709-public" />

## ライセンスと、AIが作った成果物

**ライセンス**を決めないと、基本の著作権法が適用されて、他の人は自分のコードを複製・配布・改変して使えません（第2章）。他の人に使ってもらいたいなら、ライセンスを選びます。

**AIが作ったコードの権利**については、このガイドでは公式の見解を見つけられませんでした。確認できたのは、Claudeの個人アカウントに適用されるAnthropicの消費者向け利用規約の、次の条項です（CodexとAntigravityは、それぞれの会社の規約に従います）。規約を守ることを条件に、出力物（Outputs）についてAnthropicが持つ権利を**「あれば」**利用者に譲渡する、というものです。[^outputs] これは、「AIが作ったコードに著作権が生まれるのか」という問いへの答えではありません。重要な場面で使うなら、専門家に確認してください。

**自分のデータが学習に使われるか**も確認してください。Claude Codeのドキュメントは、Free・Pro・Max・Ultraのアカウントでその設定がオンになっていると、Claude Codeの利用を含むデータで新しいモデルを学習すると書いています。[^training] 設定を見る場所は、[第2段階 Claude 第9章](../10-claude/09-privacy.md)で扱いました。

<Quiz id="ch709-license" />

## 他の人が作った部品も見る

ソフトウェアは、いろいろな場所から持ってきた部品（パッケージ）に頼ることが多く、その部品に知らないうちにセキュリティ上の弱点が入り込むことがあります。[^deps] GitHubの**Dependabot**は、自分が使っている部品に既知の脆弱性があると、警告してくれます。

やることボードのように、部品をほとんど使わないページなら、心配は少なめです。ただし、Claudeが新しい部品をインストールしようと言ってきたら、**何を、なぜインストールするのか**を聞いてから承認してください（第4章の計画の点検と同じ質問です）。

<Quiz id="ch709-deps" />

## やってみましょう — 公開前の点検表

1. やることボードのフォルダに`.gitignore`があるか、秘密の値が入りそうなファイル（`.env`など）が書かれているかを見る。なければ、Claudeに作ってもらう。
2. Claudeに「このリポジトリに、パスワード・APIキー・トークンのように見える文字列がないか探して。見つかったら、ファイルと行だけを教えて、値は見せないで。」と頼む。
3. README・SPEC.md・データに、実名や連絡先がないかを、自分の目でざっと見る。
4. ライセンスを決めるかどうかを考えてみる。決めないと他の人が使えないことを覚えておく。
5. もし秘密の値を上げてしまったら: まず、その値を発行した場所で無効化・交換し、そのあとでリポジトリを整理する。

**続きの課題**: 第10章では、第1〜9章を最初から最後まで一度にやってみる実習課題に取り組みます。

## まとめ

- 秘密の値は絶対に上げない。コミットすると消しても履歴に残り、公開リポジトリは収集される。
- 三重の守り: `.gitignore`で入れず（Readの拒否はClaudeのファイルツールだけを止める）、プッシュ保護が止め、漏れたらまず交換する。
- 公開リポジトリとPagesには個人情報を入れない。承認前に確認する責任は利用者にある。
- ライセンスがないと、他の人は使えない。AIの出力物の権利は、公式の答えを見つけられなかった。
- 新しい部品のインストールは、何をなぜするのかを聞いてから承認する。

## 用語の整理

| 用語 | 読み方 | ひとこと説明 |
|---|---|---|
| Secret | シークレット | パスワードやAPIキーのような認証情報（秘密の値） |
| Push protection | プッシュ・プロテクション | 秘密の値が入ったプッシュを、前もって止めるGitHubの機能 |
| Rotate | ローテート | 漏れた秘密の値を新しい値に変えること（交換） |
| Dependency | ディペンデンシー | 自分のソフトウェアが頼っている他人の部品（依存関係） |

<ChapterDone :chapter="709" />

次の章: [第10章 実習課題](10-practice.md)

[^secret]: GitHub 公式ドキュメント「Secret leakage risks」。"Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (確認日 2026-11-01)
[^never]: GitHub 公式ドキュメント「Adding locally hosted code to GitHub」。"Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (確認日 2026-11-01)
[^history]: GitHub 公式ドキュメント「Secret leakage risks」。"These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (確認日 2026-11-01)
[^indexed]: GitHub 公式ドキュメント「Secret leakage risks」。"Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (確認日 2026-11-01)
[^paths]: GitHub 公式ドキュメント「Secret leakage risks」。"Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (確認日 2026-11-01)
[^deny]: Claude Code 公式ドキュメント「Configure permissions」。"To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions (確認日 2026-11-01)
[^actions-secret]: Claude Code 公式ドキュメント「Claude Code GitHub Actions」。"Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions (確認日 2026-11-01)
[^push]: GitHub 公式ドキュメント「Push protection」。"Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection (確認日 2026-11-01)
[^rotate]: GitHub 公式ドキュメント「Secret scanning」。"When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning (確認日 2026-11-01)
[^revoke-first]: GitHub 公式ドキュメント「Removing sensitive data from a repository」。"It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository (確認日 2026-11-01)
[^responsible]: Claude Code 公式ドキュメント「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (確認日 2026-11-01)
[^outputs]: Anthropic 消費者向け利用規約（Consumer Terms of Service）。"Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms (確認日 2026-11-01)
[^training]: Claude Code 公式ドキュメント「Data usage」。"We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage (確認日 2026-11-01)
[^deps]: GitHub 公式ドキュメント「Dependabot alerts」。"Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts (確認日 2026-11-01)
[^gh-secrets]: GitHub 公式ドキュメント「Secrets」。"GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets (確認日 2026-11-01)
[^deny-limit]: Claude Code 公式ドキュメント「Configure permissions」。"They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions (確認日 2026-11-01)
