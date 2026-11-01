# 第7章 デプロイ — GitHub Pagesで公開する

> **一言まとめ**: **GitHub Pages**は、リポジトリにあるウェブ用のファイルをそのままインターネットのサイトにしてくれる無料サービスです。無料アカウントでは、**公開リポジトリ**でないと使えません。
> デプロイ（公開）は外の世界に影響を与える行動なので、**Claude Codeの巻き戻しでは取り消せません。** 公開してよいかどうかは、人が確認してから押します。

この章は、2026年11月1日に確認したGitHubとClaude Codeの公式ドキュメントをもとに書きました。GitHubの画面は、英語表示で書いています。

## GitHub Pagesとは

GitHub Pagesは、リポジトリにあるHTML・CSS・JavaScriptのファイルを受け取り、必要ならビルドを通して、**ウェブサイトとして公開する**静的サイトのホスティングサービスです。[^pages] 静的サイトとは、訪問者ごとに内容が変わるサーバーを持たず、決まったファイルをそのまま見せるサイトのことです。やることボードのように、表を見せるページに向いています。

第2章で見たとおり、**無料アカウントは公開リポジトリでだけ**Pagesを使えます。[^free] そして、Pagesのサイトは**インターネットに公開されます。** 契約しているプランで非公開リポジトリにできる場合でも、サイトは公開されます。そのため、デリケートなデータは公開前に消しておく必要があります。[^public-site]

<Quiz id="ch707-pages" />

## 公開する2つの方法

| 方法 | いつ使う？ |
|---|---|
| ブランチから公開 | ビルドの手順を自分で調整する必要がないとき（おすすめ） |
| GitHub Actionsで公開 | ビルドの手順を自分で決めたいとき |

出典: GitHub公式ドキュメント（一部のみ抜粋）[^two-ways]

やることボードのように、ファイルをそのまま見せるページなら、**ブランチから公開**で十分です。公式ドキュメントも、ビルドの手順を調整する必要がなければこの方法をすすめています。[^two-ways] ブランチとフォルダ（リポジトリの一番上の `/` または `/docs`）を選ぶと、そのブランチに反映するたびに、そのフォルダの内容が公開されます。[^branch-source]

GitHubの入門チュートリアルでは、Actionsの方法を使っています。設定のPagesで**Source**を**GitHub Actions**に変え、デプロイ用の設定ファイルを入れると、それ以降は `main` に反映するたびにサイトが再デプロイされます。[^actions-deploy] アドレスは `https://自分のID.github.io/リポジトリ名/` の形になります。

<Quiz id="ch707-ways" />

## 上限と禁止事項

無料ですが、使ってはいけない用途と上限があります。

| 区分 | 内容 |
|---|---|
| 禁止 | 事業・ネットショップ・商用サービス（SaaS）の運営 |
| 使わない | パスワードやカード番号をやり取りするページ |
| サイズ | 公開するサイトは1GB以下 |
| 時間 | デプロイが10分を超えると失敗 |
| 帯域幅 | 1か月100GB（ゆるやかな上限） |

出典: GitHub公式ドキュメント（一部のみ抜粋）[^business][^sensitive][^size][^timeout][^bandwidth]

**訪問者のIPアドレスが記録されます。** Pagesのサイトに誰かがアクセスすると、ログインしているかどうかに関係なく、セキュリティ目的で訪問者のIPアドレスが記録・保存されます。[^ip] 自分のページに「何も集めていません」と書きたい場合は、この点もあわせて書いておきましょう。

**実際のサービスをまねた練習用のサイト**には、条件があります。学ぶためにまねて作ること自体は禁止されていませんが、コードを自分で書き、ユーザーのデータを集めず、元のサービスとは関係のない教育目的のものだという**目立つ注意書き**を付ける必要があります。[^clone-site]

<Quiz id="ch707-limits" />

## デプロイは巻き戻しでは取り消せない

ステップ3で学んだClaude Codeの巻き戻し（チェックポイント）は、**セッションの中ですばやく復旧するためのもの**です。永続的な記録は、Gitが担当します。[^checkpoint] そして、データベースや外部サービス、**デプロイ**のように、外のシステムに影響を与える行動は、チェックポイントでは取り消せません。[^remote]

だから、デプロイの直前には人が確認します。公式ドキュメントも、提案されたコマンドが安全かどうかを**承認する前に確認する責任はユーザーにある**と書いています。[^responsible]

デプロイの前に、次の質問をしてみましょう。

- 第5章の確認の仕組みは通ったか？
- 第6章のレビューを終えて、PRをマージしたか？
- 公開リポジトリとページに、本名・連絡先・パスワードが入っていないか？（第9章）

デリケートなものをアップロードしてしまったときは、取り消すだけでは足りません。公開リポジトリのGitの記録に残るからです。[第9章](09-safety.md)の順番（先に無効にして、入れ替える）に従ってください。

<Quiz id="ch707-undo" />

## 自分でやってみよう

1. まず[第9章の公開前チェックリスト](09-safety.md)で、秘密の値や個人情報を確認する。
2. GitHubで `cafe-todo-board` リポジトリの **Settings → Pages** を開く。
3. 「Build and deployment」の **Source** で **Deploy from a branch** を選び、**Branch** で `main` ブランチと `/`（一番上）のフォルダを選ぶ。[^quickstart]
4. リポジトリの一番上に `index.html` があるか確認する。GitHub Pagesは、公開するフォルダの一番上でこのファイルを探す。[^entry] そのあと `https://自分のID.github.io/cafe-todo-board/` を開く。反映までには、最大で10分ほどかかることがある。[^quickstart] やることボードが表示されれば成功。
5. スマートフォンでも開いてみる。
6. ページの下に「練習用に作ったページで、訪問情報は集めていません（GitHub Pagesはセキュリティ目的で訪問者のIPを記録します）」のような注意書きを付けるかどうか、考えてみる。

**続きの課題**: 第8章では、「期限を過ぎたやることを赤色に」のような改善をイシューに書いて、もう一周します。

## まとめ

- GitHub Pagesは、リポジトリのウェブ用ファイルをサイトとして公開する。無料アカウントは公開リポジトリでだけ使え、サイトはいつも公開される。
- ビルドを調整する必要がなければ、ブランチから公開する。
- 事業・ネットショップ・パスワードの入力には使わない。サイトは1GB、デプロイは10分、帯域幅は月100GB（ゆるやかな上限）。訪問者のIPが記録される。
- デプロイは巻き戻しでは取り消せない。確認・レビュー・公開前チェックを終えてから、人が押す。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| GitHub Pages | ギットハブ・ページズ | リポジトリのファイルを無料のウェブサイトとして公開するサービス |
| Static site | スタティック・サイト | 決まったファイルをそのまま見せるサイト（静的サイト） |
| Hosting | ホスティング | サイトをインターネット上に置いておくこと |
| Bandwidth | バンドウィズ | 訪問者に送ったデータの量（帯域幅） |

<ChapterDone :chapter="707" />

次の章: [第8章 運用と改善](08-operate.md)

[^pages]: GitHub 公式ドキュメント、「What is GitHub Pages?」。"GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (確認日 2026-11-01)
[^free]: GitHub 公式ドキュメント、「What is GitHub Pages?」。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (確認日 2026-11-01)
[^public-site]: GitHub 公式ドキュメント、「Configuring a publishing source for your GitHub Pages site」。"GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (確認日 2026-11-01)
[^two-ways]: GitHub 公式ドキュメント、「Configuring a publishing source for your GitHub Pages site」。"You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (確認日 2026-11-01)
[^branch-source]: GitHub 公式ドキュメント、「Configuring a publishing source for your GitHub Pages site」。"Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (確認日 2026-11-01)
[^actions-deploy]: GitHub 公式ドキュメント、「Deploying your website automatically」。"Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically (確認日 2026-11-01)
[^business]: GitHub 公式ドキュメント、「GitHub Pages limits」。"GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^sensitive]: GitHub 公式ドキュメント、「GitHub Pages limits」。"GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^size]: GitHub 公式ドキュメント、「GitHub Pages limits」。"Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^timeout]: GitHub 公式ドキュメント、「GitHub Pages limits」。"GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^bandwidth]: GitHub 公式ドキュメント、「GitHub Pages limits」。"GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^ip]: GitHub 公式ドキュメント、「What is GitHub Pages?」。"When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (確認日 2026-11-01)
[^clone-site]: GitHub 公式ドキュメント、「GitHub Pages limits」。"Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (確認日 2026-11-01)
[^checkpoint]: Claude Code 公式ドキュメント、「Checkpointing」。"Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing (確認日 2026-11-01)
[^remote]: Claude Code 公式ドキュメント、「How Claude Code works」。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works (確認日 2026-11-01)
[^responsible]: Claude Code 公式ドキュメント、「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (確認日 2026-11-01)
[^quickstart]: GitHub 公式ドキュメント、「Quickstart for GitHub Pages」。"Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart (確認日 2026-11-01)
[^entry]: GitHub 公式ドキュメント、「Creating a GitHub Pages site」。"GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (確認日 2026-11-01)
