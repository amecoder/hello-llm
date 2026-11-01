# 1章. Claude Codeとは何か、どこで使うか — チャットとの違い、使う場所、料金プラン

> **一言まとめ**: Claude Codeは、**自分のパソコンのフォルダを直接読み、ファイルを直し、コマンドを実行する** Claudeです。チャットのように答えをコピーして貼り付ける代わりに、仕事を任せて結果を確認します。
> 使うには **有料サブスクリプション**（Pro・Max・Ultra・Team・Enterprise）が必要です。この段階は、ターミナルなしで使える **デスクトップアプリ** から始めます。

この章は、2026年10月31日に確認したClaude Codeの公式ドキュメントをもとに書きました。機能やメニューの名前はよく変わります。

## チャットと何が違うか

ステップ2で使ったClaudeのチャットは、**質問して答えをもらう** 場所でした。答えに出てきた文章を、自分でコピーしてファイルに貼り付けていました。

**Claude Codeは、自分のパソコンのフォルダで直接作業します。** 公式ドキュメントは、Claude Codeを「フォルダの内容を読み、ファイルを直し、コマンドを実行する」ツールだと紹介しています。[^overview] やりたいことをふだんの言葉で説明すると、進め方を計画し、複数のファイルにまたがって作業し、うまく動くかの確認までしてくれます。[^overview]

| | チャット（ステップ2） | Claude Code（ステップ3） |
|---|---|---|
| 作業する場所 | 会話ウィンドウの中 | 自分のパソコンのフォルダ |
| ファイル | 自分でアップロードし、もらった答えを自分で貼り付ける | Claudeがフォルダの中のファイルを直接読んで直す |
| 複数のステップの仕事 | 1ステップずつ自分がつなぐ | 計画 → 作業 → 確認を自分でつないでいく |
| 自分がすること | 答えを読んで移す | 任せて、変わった内容を確認する |

出典: このガイドの整理（公式ドキュメントはチャットと直接は比較していない）[^overview]

このような方式を **エージェント**（Agent、自分で複数のステップを進めていくAI）と呼びます。公式ドキュメントも、Claude Codeを「エージェント型のコーディングツール」（agentic coding tool）と呼んでいます。[^overview]

ステップ2のClaudeガイドの **Cowork** も、仕事をまるごと任せる機能でした（[ステップ2 Claude 第8章](../10-claude/08-cowork.md)）。デスクトップアプリの中に、チャット（Chat）、Cowork、Claude Code（**Code** タブ）がまとめて入っています。[^linux] この段階では、その中の **Code** タブを扱います。

<Quiz id="ch401-what" />

## 何を任せられるか

名前は「コード」ですが、やっていることは結局、**フォルダの中のファイルを読んで直すこと**です。[^overview] 公式ドキュメントが挙げる例は、開発者の仕事です。[^overview]

- 機能を作る、バグを直す
- バグが出たら、エラーメッセージを貼り付けるか、症状を言葉で説明する
- テストを書く、複数のファイルの書式エラーを直す、リリースノート（変更点のお知らせ）を書く、といった繰り返し作業

**このガイドでは、コードの代わりにメモのファイルが入ったフォルダで練習します。** 会議のメモ・勉強のノート・1日の振り返りのような整理されていないメモを入れると、**自分で決めた形式** の議事録・勉強ノート・週次の振り返りが出てくる「自分のやり方で整理してくれるツール」を、ステップ3を通して少しずつ作っていきます。最初の仕事は、こんな依頼です。

```
inboxフォルダの会議メモを読んで、議事録に整理して。決めたこと / やること（担当・期限） / 次に話し合うこと の3つに分けて、notesフォルダに新しいファイルとして保存して。元のメモは直さないで。
```

チャットなら、メモをアップロードして、もらった答えを新しいファイルに貼り付けて保存する必要がありました。Claude Codeは、フォルダを直接読んで議事録のファイルを作っておいてくれます。自分は **できあがったファイルが合っているかを確認する** だけで済みます。

決まったやり方で要約してくれるサービスもあります。Claude Codeでは「やることは担当と期限を必ず分ける」のような **自分の形式をファイルに保存しておいて、毎回説明し直さずに** 使えます。その方法は6・7章で学びます。

ただし、**ファイルを直接直す分、気をつけることも増えます。** そのため、何を許可するかを決める方法（[第4章](04-permissions-undo.md)）と、変わった内容を確認する方法を、この段階でしっかり学びます。

<Quiz id="ch401-tasks" />

## どこで使うか

Claude Codeはいろいろな場所で使えます。どこで使っても **同じエンジン**（中心になるプログラム）が動き、使い方に合わせて画面だけが違います。[^platforms]

| 使う場所 | 向いているとき |
|---|---|
| **デスクトップアプリ**（Codeタブ） | 変わった内容を目で確認する、複数の仕事を並べて進める、設定が簡単 |
| ターミナル（CLI） | コマンドの画面で作業する、自動化 |
| VS Codeのようなエディタ | コードエディタの中でそのまま使う |
| ウェブ（クラウド） | 時間のかかる仕事、自分のパソコンを切っても続けたい仕事 |
| スマートフォン | 外出先で仕事を始めて、様子を見守る |

出典: Claude Code公式ドキュメント[^platforms]

**このガイドはデスクトップアプリから始めます。** ターミナルを使いたくない人のために、デスクトップアプリが同じエンジンをグラフィカルな画面で提供すると、公式ドキュメントも案内しています。[^platforms] デスクトップアプリにはClaude Codeが入っているので、別にインストールするプログラムはありません。[^quickstart]

同じ仕事を、複数の場所を混ぜて使ってもかまいません。[^platforms] ターミナルは10章で、ウェブとスマートフォンは8章で扱います。

<Quiz id="ch401-where" />

## 何が必要か — 料金プラン

**Claude Codeは、有料サブスクリプションでだけ使えます。** Pro、Max、Ultra、Team、Enterpriseのサブスクリプションか、Console（API）アカウントが必要で、**無料プランでは使えません。**[^setup] 個人のサブスクリプション（Pro・Max・Ultra）は、claude.aiのアカウントでログインします。[^auth]

- プランの名前が変わりました。**Ultraは以前のMax 20x、Maxは以前のMax 5x** の新しい名前です。[^availability] 古い記事で「Max 5x」を見かけたら、今のMaxのことです。
- 料金と使用の上限は、ステップ2のClaudeガイドで扱いました（[ステップ2 Claude 第1章](../10-claude/01-getting-started.md#料金プランを一目で見る)）。使用量は、デスクトップやターミナルなど **Claude Codeを使うすべての場所で共通して** 使います。[^desktop] Team・Enterpriseは、チャットやCoworkとも共通です。[^costs]
- 公表されている使用上限は、**1人がふつうに使うこと** を前提にしています。[^legal] 別の会社が作ったサービスが、自分のサブスクリプションのログインを使って代わりにリクエストを送る方式も、認められていません。[^legal]

どのプランが合うかは、使ってみながら決めてもかまいません。使用量の見方は9章で扱います。

<Quiz id="ch401-plan" />

## この段階で学ぶ順番

| 章 | 学ぶこと |
|---|---|
| [第2章](02-install.md) | デスクトップアプリをインストールして、最初の仕事を任せる |
| 3章 | 画面を見て回る |
| 4〜5章 | 許可して元に戻す方法、上手に任せる方法 |
| 6〜7章 | プロジェクトのルールを書いておく、機能を広げる |
| 8〜9章 | 複数の仕事を同時に・クラウド・予約、費用と安全 |
| 10章 | ターミナルで使う |
| 11〜12章 | 実習の課題、専門家のように使う |

最初からすべてを知っておく必要はありません。2章で、小さな仕事をひとつ任せてみるだけで十分です。

## やってみよう

1. claude.aiにログインして、今の自分のプランが何かを確認する。無料なら、この段階の実習は購読したあとにできる。
2. 自分のパソコンでClaudeに任せたい「フォルダの仕事」をひとつ書いてみる（例: 散らばったメモをひとつのファイルにまとめる）。
3. その仕事をチャットでしたら、コピー・貼り付けを何回することになるか数えてみる。

**続けての課題**: 自分が毎週整理しているもの（議事録・授業のノート・振り返りなど）をひとつ選んで、どんな形式で整理されるとよいかを3行で書いておきましょう（例:「決めたこと / やること（担当・期限） / 次に話し合うこと」）。2章で練習用のメモを使って最初の整理を任せ、11章で自分のメモでやってみます。

## まとめ

- Claude Codeは、自分のパソコンのフォルダを直接読み、ファイルを直し、コマンドを実行するエージェント型のツールである。
- チャットは答えをもらって自分が移し、Claude Codeは仕事を任せて自分が確認する。
- デスクトップアプリ・ターミナル・エディタ・ウェブ・スマートフォンで、同じエンジンを使う。この段階はデスクトップアプリから学ぶ。
- Pro・Max・Ultra・Team・Enterpriseのサブスクリプションが必要で、無料プランでは使えない。Ultraは以前のMax 20x、Maxは以前のMax 5xである。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Claude Code | クロード・コード | 自分のパソコンのフォルダで直接作業するClaude |
| Agent | エージェント | 自分で複数のステップをつなぎながら作業するAI |
| Codeタブ（Code 탭） | コードタブ | デスクトップアプリでClaude Codeを使う場所 |
| CLI | シーエルアイ | コマンドを文字で入力して使うプログラム（ターミナル） |
| Surface | サーフェス（使う場所） | デスクトップ・ターミナル・ウェブのように、Claude Codeを使う画面 |

<ChapterDone :chapter="401" />

次の章: [2章. デスクトップアプリのインストールと最初のセッション](02-install.md)

[^overview]: Claude Code公式ドキュメント、「Overview」。"Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview （確認日 2026-10-31）
[^platforms]: Claude Code公式ドキュメント、「Platforms and integrations」。"Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms （確認日 2026-10-31）
[^linux]: Claude Code公式ドキュメント、「Claude Desktop on Linux (beta)」。"The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux （確認日 2026-10-31）
[^quickstart]: Claude Code公式ドキュメント、「Get started with the desktop app」。"The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart （確認日 2026-10-31）
[^setup]: Claude Code公式ドキュメント、「Advanced setup」。"Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." 規約ページ（legal-and-compliance）は無料ユーザーも併記していて食い違って見えるが、利用条件はこの文書の明示的な文に従った。https://code.claude.com/docs/en/setup （確認日 2026-10-31）
[^desktop]: Claude Code公式ドキュメント、「Desktop application」。"Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop （確認日 2026-10-31）
[^costs]: Claude Code公式ドキュメント、「Manage costs effectively」。"The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs （確認日 2026-10-31）
[^auth]: Claude Code公式ドキュメント、「Authentication」。"Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication （確認日 2026-10-31）
[^availability]: Claude Code公式ドキュメント、「Feature availability」。"Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability （確認日 2026-10-31）
[^legal]: Claude Code公式ドキュメント、「Legal and compliance」。"Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance （確認日 2026-10-31）
