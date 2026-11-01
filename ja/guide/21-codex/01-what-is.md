# 第1章 Codexとは何か、Claude Codeと何が違うのか

> **一言まとめ**: Codexは、OpenAIが作った、**自分のパソコンのフォルダで直接作業する**AIツールです。今は**ChatGPTデスクトップアプリの中で「Codex」を選んで**使います。
> やることはClaude Codeとほぼ同じです。この段階では、Claude Codeの章で作った「整理ツール」をCodexに移しながら、**違う点だけ**を学びます。

この章は、2026年11月1日に確認したCodexの公式ドキュメント（learn.chatgpt.com）をもとに書きました。機能とメニューの名前は、よく変わります。

## ChatGPTアプリの中の3つの方式

デスクトップでは、Codexを別にインストールしません。**ChatGPTデスクトップアプリひとつの中に**、3つの方式がまとめて入っています。[^modes]

| 方式 | こんなとき | 例 |
|---|---|---|
| Chat | 聞いて答えてもらう | 質問、アイデア出し、文章の手直し |
| Work | 成果物まで任せる | レポート、発表資料、ファイルの分析 |
| **Codex** | フォルダで直接作業する、技術的な情報を見る | ファイルの修正、変わった内容の確認 |

出典: Codex公式ドキュメント（一部のみ抜粋）[^modes]

WorkとCodexは、できることが重なっています。違いは**見せ方**です。WorkはGitやコマンドのような技術的な情報を隠して、完成した成果物を見せます。Codexは、何が変わったのか（diff）まで見せます。[^compare]

コーディングをしなくても、Codexを使ってかまいません。公式ドキュメントも、Codexが使いやすければ、調査・文書・発表資料のような仕事にそのまま使い続けてよいと言っています。[^prefer] このガイドがCodexを選んだ理由は、**変わった内容を自分で確認できるから**です。メモの整理結果が元のデータと合っているかを確かめる習慣をClaude Codeの章で身につけたなら、Codexでもそのまま続けられます。

<Quiz id="ch501-modes" />

## Claude Codeと何が同じで、何が違うのか

Claude Codeで学んだ概念は、Codexにもほとんどあります。**名前と場所が違うだけ**です。

| Claude Code | Codex | 学ぶ場所 |
|---|---|---|
| ClaudeアプリのCodeタブ | ChatGPTアプリで「Codex」を選ぶ | 第2章 |
| `CLAUDE.md` | `AGENTS.md` | 第3章 |
| 権限モード（手動など） | 権限メニュー（Ask for approvalなど） | 第4章 |
| 巻き戻し（チェックポイント） | Gitで元に戻す | 第4章 |
| `.claude/skills` · `/名前` | `.agents/skills` · `$名前` | 第5章 |
| 予約した作業 | Scheduled | 第6章 |
| `claude -p` | `codex exec` | 第7章 |

出典: このガイドのまとめ（公式ドキュメントは2つのツールを直接は比べていない）

**いちばん大きな違いは、ルールのファイル名です。** Codexは、仕事を始める前に`AGENTS.md`を読みます。[^agents] CodexはClaude Codeの`CLAUDE.md`をそのままにしておいても、読みません。そのため、整理ツールを移すときは、このファイルから変えます（第3章）。

移す作業を代わりにやってくれる機能もあります。ChatGPTアプリの**インポート**（Import）は、Claude Codeのルールファイル・スキル・設定をCodexに移してくれます。[^import] このガイドでは、何がどう変わるのかを自分の目で見るために、**手で一つずつ**移します。インポートは、第3章の終わりで紹介します。

<Quiz id="ch501-compare" />

## どこで使うかと料金プラン

Codexは、いろいろな場所で使えます。

- **ChatGPTデスクトップアプリ**: macOS・Windows・Linux用があります。[^desktop] このガイドはここから始めます。
- **ターミナル（Codex CLI）**: コマンドの画面で使います。[^cli] 第7章で扱います。
- **クラウド**: 作業ごとに別の作業スペースができて、自分のパソコンがスリープしている間も作業します。[^cloud] 第6章で紹介します。

料金プランによって、使える範囲が違います。

| プラン | 月額 | Codexで使えるもの |
|---|---|---|
| Free | $0 | デスクトップアプリで軽いモデル、順次提供 |
| Go | $8 | Freeと同じ |
| Plus | $20 | Web・ターミナル・エディタ・iOSでも、より強いモデル |
| Pro | $100から | Plusのすべてと、より多い使用量 |

出典: Codex公式ドキュメントの料金案内（一部のみ抜粋）[^pricing]

**FreeとGoは「順次提供」**（rollout、アカウントごとに順番に使えるようにしていく方式）です。自分の画面にCodexが見えなければ、まだ開放されていないのかもしれません。このガイドの実習は、**Plus以上**を基準にしています。

使用量は、**ChatGPT Workと一緒に**消費されます。Workで大きな仕事をたくさん任せると、Codexに使える分も減ります。[^shared] 使用量については、第8章でさらに扱います。

<Quiz id="ch501-where" />

## この段階でやること

Claude Codeの章の「整理ツール」のフォルダをそのまま持ってきて、Codexで動くようにします。Claude Codeの章を飛ばした場合は、[ステップ3 Codex目次](./)の「練習用の資料」で、同じ出発点のファイルを受け取れます。

1. 第2章: アプリでCodexを開いて、会議メモをひとつ整理する。
2. 第3章: `CLAUDE.md`を`AGENTS.md`に移して、ルールを伝えなくても守るかを試す。
3. 第4章: 権限メニューと、変わった内容の確認、元に戻す方法を身につける。
4. 第5章: スキル3つを移して、`$weekly-review`の一行で週次の振り返りを作る。
5. 第6〜8章: 予約・ターミナル・安全を、Claude Codeと比べながらまとめる。

**最初から全部覚える必要はありません。** Claude Codeでやってみたことを、Codexで一回ずつやり直してみると、違いが自然に見えてきます。

## まとめ

- Codexは、ChatGPTデスクトップアプリの中で「Codex」を選んで使う。Chat・Work・Codexがひとつのアプリにある。
- Codexは、変わった内容のような技術的な情報を見せてくれる。コーディングをしなくても使える。
- Claude Codeと概念はほとんど同じ。ルールのファイルは`AGENTS.md`、スキルは`$名前`のように、名前が違う。
- FreeとGoは順次提供。実習はPlus以上が基準で、使用量はWorkと一緒に消費される。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Codex | コーデックス | OpenAIのコーディングエージェント。ChatGPTアプリの中で選ぶ方式 |
| ChatGPT Work | チャットジーピーティー・ワーク | 成果物まで任せるChatGPTの方式。技術的な情報は隠す |
| AGENTS.md | エージェンツ・エムディー | Codexが仕事をする前に読むルールのファイル |
| Rollout | ロールアウト | アカウントごとに順番に機能を開放していく方式 |

<ChapterDone :chapter="501" />

次の章: [第2章 ChatGPTアプリでCodexを始める](02-first-task.md)

[^modes]: Codex 公式ドキュメント「Use ChatGPT」。"Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt (確認日 2026-11-01)
[^compare]: Codex 公式ドキュメント「Use ChatGPT」。"ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt (確認日 2026-11-01)
[^prefer]: Codex 公式ドキュメント「Use ChatGPT」。"If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt (確認日 2026-11-01)
[^agents]: Codex 公式ドキュメント「Custom instructions with AGENTS.md」。"Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (確認日 2026-11-01)
[^import]: Codex 公式ドキュメント「Import from another agent」。"The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (確認日 2026-11-01)
[^desktop]: Codex 公式ドキュメント「Quickstart」。"The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart (確認日 2026-11-01)
[^cli]: Codex 公式ドキュメント「Codex CLI」。"Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli (確認日 2026-11-01)
[^cloud]: Codex 公式ドキュメント「Codex Cloud」。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (確認日 2026-11-01)
[^pricing]: Codex 公式ドキュメント「Pricing」。"GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing (確認日 2026-11-01)
[^shared]: Codex 公式ドキュメント「Pricing」。"ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing (確認日 2026-11-01)
