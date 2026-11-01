# 第1章 AIといっしょに作るということ — SDLCをひと目で

> **一言まとめ**: ソフトウェアは、**計画 → 作る → レビュー → 確認 → デプロイ（公開）→ 運用**を経て、世の中に出ていきます。この流れをSDLCと呼びます。
> AIは各段階の手になってくれますが、**何を作るかを決めて、結果を確認する仕事は人の役目**です。ステップ4では、この役割分担を学びます。

この章は、2026年11月1日に確認したGitHubの公式ドキュメントとClaude Codeの公式ドキュメントをもとに書きました。ステップ3でClaude Code・Codex・Antigravityを使ってフォルダを扱ってみた読者のためのステップです。まだステップ3を読んでいなければ、[ステップ3・Claude Code](../20-claude-code/)から読んでください。

## SDLCとは

SDLC（ソフトウェア開発ライフサイクル、Software Development Life Cycle）は、**最初のアイデアから、実際に動くソフトウェアまで**、プロジェクトが通る段階のことです。[^sdlc] GitHubは、この過程を6つの段階に分けています。

| 段階 | やること | このガイドでは |
|---|---|---|
| 計画（Plan） | やることを書いて追跡する | 第3章 |
| 作る（Create） | コードを書いて、変更を記録する | 第4章 |
| レビュー（Review） | 変更を提案して、意見をもらう | 第6章 |
| 確認（Test） | 取り込む前に、自動で検査する | 第5章 |
| デプロイ（Deploy） | 人が使えるように公開する | 第7章 |
| 運用（Operate） | 見守りながら、直していく | 第8・9章 |

出典: GitHub公式ドキュメント（このガイドのまとめ）[^six]

このガイドでは、確認（第5章）を先に、レビュー（第6章）をあとに扱います。レビューのときに、確認の結果もいっしょに見るためです。「運用」は、GitHubでは監視・部品の管理・セキュリティまで含む広い意味ですが、このガイドでは、イシューで改善すること（第8章）と安全（第9章）までを扱います。

**最初からすべての段階を使う必要はありません。** GitHubも、多くの人がリポジトリ1つとやることいくつかで始めて、プロジェクトが育つのに合わせて広げていくと言っています。[^start-small] このガイドも、小さなウェブページ1つで、6つの段階を一周してみます。

<Quiz id="ch701-sdlc" />

## AIはどう仕事をするのか

Claude Codeは、任された仕事を3つの段階で進めます。**状況を集める → 行動する → 結果を確認する**です。[^loop] ファイルを探して読み、直し、テストを動かして自分の仕事を確かめるところまでが、この流れの中に入っています。

ステップ3で使った**プランモード**も、ここであらためて大切になります。プランモードでは、Claudeがファイルを読んで計画だけを出し、自分が承認するまでは何も直しません。[^plan]

公式のベストプラクティスの文書は、仕事が期待どおりに進まない代表的な原因として、次のようなものを挙げています。[^fail]

- **自分の頭の中とは違うものを作ってしまった。** リポジトリを読むだけではわからない情報が、抜けていたからです。→ 第3章「企画と仕様」で扱います。
- **終わったと言ったのに、実は終わっていなかった。** 自分で確認する方法がなかったからです。→ 第5章「確認とテスト」で扱います。

この2つは、人が**情報と確認の仕組み**を渡せば、減らせます。だからステップ4では、コードの書き方よりも、**AIに何を渡し、何を返してもらって確認するのか**を学びます。

<Quiz id="ch701-ai" />

## 人が担当する仕事

AIが手を担当しても、人が必ず担当しなければならない仕事があります。

| 段階 | 人が担当する仕事 |
|---|---|
| 計画 | 何を、なぜ作るのかを決める |
| 作る | 計画を読んで承認する |
| 確認 | 証拠（コマンドと出力）を見て判断する |
| レビュー | 取り込むかどうかを決める |
| デプロイ | 公開してよいかを判断して押す |

出典: このガイドのまとめ（根拠は各章の脚注）

公式ドキュメントも、提案されたコードやコマンドが安全かどうかを**承認する前に確認する責任はユーザーにある**と書いています。[^responsible] また、デプロイのように外のシステムに影響を与える行動は、Claude Codeの巻き戻し（チェックポイント）では取り消せません。[^no-checkpoint] だから、外に出ていく行動ほど、人が確認してから押します。

<Quiz id="ch701-human" />

## このステップで作るもの

ステップ4の「自分でやってみよう」は、章ごとにつながる1つの例題で行います。**ステップ3の整理ツールが作った議事録のやることを集めて見せるウェブページ**、その名も「街角カフェ やることボード」です。

GitHubの公式の入門シリーズも、小さなウェブサイトを1つ、最後まで作りながら、**計画し、コードを書き、変更をレビューし、本物のウェブサイトとして公開**します。[^journey] このガイドは同じ順番をたどりますが、AIの役にはステップ3で慣れたClaude Codeを使います。

| 章 | やることボードでやること |
|---|---|
| 2 | GitHubにリポジトリを作る |
| 3 | 何を見せるかをインタビューされて、SPEC.mdを書く |
| 4 | 計画をもらい、ブランチで最初の画面を作る |
| 5 | やることの数が合っているかの確認の仕組みを作る |
| 6 | PRを作ってレビューを受ける |
| 7 | GitHub Pagesで公開する |
| 8 | 次の改善をイシューに書いて、もう一周する |
| 9 | 公開前に、秘密の値と個人情報を点検する |

出典: このガイドの計画

**最初から完璧である必要はありません。** 1章ずつたどっていけば、最後にはインターネットのアドレスが付いた自分のページができあがります。

## まとめ

- SDLCは、アイデアから実際に動くソフトウェアまでの段階。GitHubは、計画・作る・レビュー・確認・デプロイ・運用の6つに分けている。
- 最初からすべてを使う必要はない。小さく始めて広げる。
- Claude Codeは、状況を集める → 行動する → 結果を確認する、の順で仕事をする。失敗のよくある原因は、足りない情報と、確認の仕組みがないこと。
- 何を作るかを決め、証拠を見て判断し、取り込んで公開するかを決めるのは、人の役目。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| SDLC | エスディーエルシー | ソフトウェアがアイデアから運用までに通る段階 |
| Repository | リポジトリ | プロジェクトのファイルと変更の記録を置く場所 |
| Deploy | デプロイ | 作ったものを、人が使えるように公開すること |
| Plan mode | プランモード | 直す前に計画だけを見せる、Claude Codeのやり方 |

<ChapterDone :chapter="701" />

次の章: [第2章 GitHubのリポジトリを作る](02-repository.md)

[^sdlc]: GitHub 公式ドキュメント、「What is GitHub?」。"The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github (確認日 2026-11-01)
[^six]: GitHub 公式ドキュメント、「What is GitHub?」。"Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github (確認日 2026-11-01)
[^start-small]: GitHub 公式ドキュメント、「What is GitHub?」。"You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github (確認日 2026-11-01)
[^loop]: Claude Code 公式ドキュメント、「How Claude Code works」。"When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works (確認日 2026-11-01)
[^plan]: Claude Code 公式ドキュメント、「Common workflows」。"For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (確認日 2026-11-01)
[^fail]: Claude Code 公式ドキュメント、「Best practices for Claude Code」。"It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^responsible]: Claude Code 公式ドキュメント、「Security」。"You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (確認日 2026-11-01)
[^no-checkpoint]: Claude Code 公式ドキュメント、「How Claude Code works」。"Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works (確認日 2026-11-01)
[^journey]: GitHub 公式ドキュメント、「Creating a repository for your project on GitHub」。"By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (確認日 2026-11-01)
