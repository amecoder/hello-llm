# 第2章 GitHubリポジトリを作る — プロジェクトの家を建てる

> **一言まとめ**: リポジトリ（Repository）は、プロジェクトのファイルと**すべての変更履歴**を置く場所です。GitHubにリポジトリを作ると、自分のコンピューターの外にも安全なコピーと、共同作業の場ができます。
> 公開・非公開は**あとで無料でウェブに公開できるか**に関わるので、作るときから決めておきます。

この章は、2026年11月1日に確認したGitHub公式ドキュメントをもとに書きました。GitHubの画面は英語表記で書いています。ステップ3でGitを使って「変更履歴」を残したことがあれば、その履歴をインターネットに置いておく段階だと考えてください。

## GitとGitHub、リポジトリ

**Git**は、ファイルの変更を追跡するバージョン管理システムです。[^git] ステップ3でClaudeに「記録して」とお願いしたコミットが、Gitの記録です。

**GitHub**は、そのGitのプロジェクトをインターネットに置き、計画や共同作業のツールを加えたサービスです。[^git] そして**リポジトリ**は、プロジェクトのコードとファイルをGitHubに置く場所です。ファイルを保管し、変わるたびにコミットで記録し、一緒に作業する場にもなります。[^repo]

よく出てくる言葉を先に知っておきましょう。

| 言葉 | 意味 |
|---|---|
| ブランチ（branch） | 基本のバージョンに影響を与えず、別に作業する枝分かれ |
| マージ（merge） | 1つの枝の変更を、別の枝に合わせること |
| リモート（remote） | 自分のコンピューターではなく、GitHubにあるリポジトリ |
| クローン（clone） | リポジトリを履歴ごと自分のコンピューターにダウンロードすること |

出典: GitHub公式ドキュメント（一部のみ抜粋）[^terms]

<Quiz id="ch702-basics" />

## 公開と非公開

リポジトリを作るとき、最初に決めるのが**公開範囲**です。

| 範囲 | 見られる人 |
|---|---|
| 公開（Public） | インターネットの誰でも |
| 非公開（Private） | 自分と、自分が共有した人 |

出典: GitHub公式ドキュメント[^visibility]

無料アカウントでは、この選択が第7章の公開（デプロイ）につながります。**無料アカウントでは、公開リポジトリでのみGitHub Pages（無料のウェブ公開）を使えます。**[^pages-free] そのため、GitHubの入門チュートリアルも、あとで実際のサイトとして公開できるよう**Public**を選ぶことになっています。[^tutorial-public]

公開リポジトリには代償があります。コード全体が誰にでも見えるので、弱点や機密情報を狙う人が出てくる危険が高まります。[^public-risk] そのため、**公開リポジトリには、個人情報・パスワード・実名が入ったメモを入れません。** 第9章で詳しく扱います。

あとで変更することもできますが、代償があります。無料アカウントで公開リポジトリを非公開に変えると、公開していたPagesサイトが自動で取り下げられます。[^switch]

<Quiz id="ch702-visibility" />

## README・.gitignore・ライセンス

新しいリポジトリを作るとき、3つのファイルを一緒に入れられます。[^options]

- **README**: 訪れた人が最初に見る説明書です。[^readme] どんなプロジェクトなのか、なぜ役に立つのか、どう始めるのかを書きます。チュートリアルでは**Add README**を選びます。最初のファイルであり、プロジェクトを説明する場所にもなるからです。[^add-readme]
- **.gitignore**: コミットするとき、Gitが**無視するファイル**を書いておくリストです。[^gitignore] パスワードが入った設定ファイルのように、アップロードしてはいけないものをここに書きます。注意点があります。**すでにコミットしたファイルは、リストに書くだけでは無視されません。**[^already] そのため、最初から書いておくほうがいいでしょう。
- **ライセンス**: ほかの人があなたのコードで何をしてよいかを知らせます。必ず選ぶ必要はありませんが、ないと基本の著作権法が適用され、誰も複製・配布・改変ができません。[^license] 選ぶのが難しければ、GitHubはchoosealicense.comを勧めています。GitHubも、この案内は法的なアドバイスではないと明らかにしています。[^not-lawyer]

すでにGitの履歴があるリポジトリを持ち込むときは、この3つを選ばないでください。自分のフォルダとぶつかって（マージの競合）、面倒なことになる場合があります。[^conflict]

<Quiz id="ch702-files" />

## 自分のコンピューターとつなぐ

GitHubのリポジトリを自分のコンピューターに持ってくることを、**クローン**（clone）と呼びます。クローンしたコピーは、GitHubの元のリポジトリと**つながったまま**なので、自分が記録したものをもう一度アップロードできます。[^clone]

持ってくる方法はいくつかあります。

| 方法 | こんなとき |
|---|---|
| GitHub Desktop | 公式の入門チュートリアルのように、グラフィカルな画面で |
| Claude Codeにお願いする | ステップ3のように、言葉で任せたいとき |

出典: このガイドのまとめ（GitHub Desktopは公式チュートリアルの方法）[^clone]

Claude Codeには、このようにお願いできます。リポジトリのアドレスは、GitHubでリポジトリを開いたときにブラウザのアドレスバーに表示されるアドレス（例: `https://github.com/自分のID/cafe-todo-board`）を使います。

```
このGitHubリポジトリを ~/hello-ai-연습/할일보드 フォルダにクローンして: <リポジトリのアドレス>
```

**すでにあるフォルダをアップロードすることもできます。** ステップ3の整理ツールのように、自分のコンピューターにあったフォルダもGitHubにアップロードできます。Gitで管理していなかったフォルダなら、先にGitリポジトリにします。[^existing] ただしこのガイドでは、**やることボードを新しいリポジトリとして**作ります。整理ツールにはメモの原本が入っているので、公開リポジトリにそのままアップロードするのは避けたほうが安全です。

<Quiz id="ch702-clone" />

## 自分でやってみよう

1. [github.com](https://github.com)に登録するか、ログインする（無料アカウントで大丈夫）。
2. 右上の **+** → **New repository** で新しいリポジトリを作る。名前は `cafe-todo-board`、公開範囲は **Public**、**Add README** を選ぶ。`.gitignore` も一緒に入れられるなら入れる（リストは画面の案内に従う）。
3. リポジトリの画面でREADMEが見えるか確認する。
4. GitHub DesktopかClaude Codeで、リポジトリを `~/hello-ai-연습/할일보드` にクローンする。あとで変更をGitHubにアップロードする（プッシュ）には、そのツールが自分のGitHubアカウントにログインしている必要がある。初めてアップロードするときにログイン画面が出たら、案内に従う。
5. クローンしたフォルダをClaude Codeのアプリで開き、フォルダの中にREADME.mdがあるか確認する。

**続きの課題**: 第3章では、このリポジトリに何を作るかをClaudeにインタビューしてもらい、SPEC.mdにまとめます。

## まとめ

- Gitは変更履歴を残す仕組み、GitHubはその履歴をインターネットに置いて共同作業する場所、リポジトリはプロジェクトの家である。
- 無料アカウントでは、公開リポジトリでのみGitHub Pagesを使える。公開リポジトリには個人情報を入れない。
- READMEは説明書、.gitignoreはアップロードしないもののリスト、ライセンスは使用の許可である。.gitignoreは最初から書く。
- クローンしたコピーは、GitHubとつながったまま残る。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Git | ギット | ファイルの変更を追跡するバージョン管理システム |
| GitHub | ギットハブ | Gitリポジトリをインターネットに置いて共同作業するサービス |
| README | リードミー | リポジトリの最初の説明書 |
| .gitignore | ギットイグノア | Gitが無視するファイルのリスト |
| Clone | クローン | リポジトリを履歴ごと自分のコンピューターにダウンロードすること（複製） |

<ChapterDone :chapter="702" />

次の章: [第3章 企画と仕様](03-plan-spec.md)

[^git]: GitHub公式ドキュメント、「What is GitHub?」。"Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github (確認日 2026-11-01)
[^repo]: GitHub公式ドキュメント、「Creating a repository for your project on GitHub」。"It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (確認日 2026-11-01)
[^terms]: GitHub公式ドキュメント、「About repositories」。"Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (確認日 2026-11-01)
[^visibility]: GitHub公式ドキュメント、「About repositories」。"Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (確認日 2026-11-01)
[^pages-free]: GitHub公式ドキュメント、「What is GitHub Pages?」。"GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (確認日 2026-11-01)
[^tutorial-public]: GitHub公式ドキュメント、「Creating a repository for your project on GitHub」。"Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (確認日 2026-11-01)
[^public-risk]: GitHub公式ドキュメント、「About repositories」。"Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (確認日 2026-11-01)
[^switch]: GitHub公式ドキュメント、「Setting repository visibility」。"Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility (確認日 2026-11-01)
[^options]: GitHub公式ドキュメント、「Creating a new repository」。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (確認日 2026-11-01)
[^readme]: GitHub公式ドキュメント、「About the repository README file」。"A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (確認日 2026-11-01)
[^add-readme]: GitHub公式ドキュメント、「Creating a repository for your project on GitHub」。"Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (確認日 2026-11-01)
[^gitignore]: GitHub公式ドキュメント、「Ignoring files」。"You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files (確認日 2026-11-01)
[^already]: GitHub公式ドキュメント、「Ignoring files」。"If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files (確認日 2026-11-01)
[^license]: GitHub公式ドキュメント、「Licensing a repository」。"A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (確認日 2026-11-01)
[^not-lawyer]: GitHub公式ドキュメント、「Licensing a repository」。"We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (確認日 2026-11-01)
[^conflict]: GitHub公式ドキュメント、「Creating a new repository」。"If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (確認日 2026-11-01)
[^clone]: GitHub公式ドキュメント、「Connecting to your code locally」。"Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally (確認日 2026-11-01)
[^existing]: GitHub公式ドキュメント、「Adding locally hosted code to GitHub」。"If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (確認日 2026-11-01)
