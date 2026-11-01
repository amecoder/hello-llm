# 第1章 Antigravityとは何か、前の2つのツールと何が違うのか

> **一言まとめ**: Antigravityは、Googleが作った、**自分のパソコンのフォルダで直接作業する**AIツールです。デスクトップアプリと、ターミナル用プログラムの `agy` があります。
> 前の2つのツールと違う点は2つあります。**無料のGoogleアカウントでもすべての機能**が使えることと、Codexのステップで作った**`AGENTS.md` と `.agents/skills` をそのまま読んでくれる**ことです。

この章は、2026年11月1日に確認したAntigravityの公式ドキュメント（antigravity.google/docs）をもとに書きました。機能やメニューの名前はよく変わります。

## 4つの形

Antigravityには、使う場所によって4つの形があります。[^surfaces]

| 形 | やること | このガイドでは |
|---|---|---|
| Antigravity App | デスクトップで、エージェントに仕事を任せて見守る | 第2章から |
| Antigravity CLI（`agy`） | ターミナルで使う | 第6章 |
| エディタ拡張・Antigravity IDE | コードエディタの中で使う | 扱わない |
| SDK | Pythonでエージェントを作る | 扱わない |

出典: Antigravity公式ドキュメント（このガイドのまとめ）[^surfaces][^ide][^sdk]

アプリとCLIは**同じエージェント**を動かしているので、ほとんどの機能をどちらでも使えます。[^same] 1か所でログインすれば、自分のパソコンにある他の形でも、同じログインを使います。[^auth]

<Quiz id="ch601-surfaces" />

## 無料でもすべての機能

Antigravityは、**どのプランでもすべての機能**を使えます。予約タスクとCLIも含まれます。[^all-features] プランによって違うのは、**使用量**と**選べるモデル**です。

| プラン | 使用量 |
|---|---|
| 無料（Google AI ProでもUltraでもないアカウント） | 週単位で回復する |
| Google AI Pro | 週間の上限まで、5時間ごとに回復する |
| Google AI Ultra | いちばん余裕がある。5時間ごとに回復する |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^plans]

使用量は、質問の数ではなく、**エージェントがした仕事の量**に応じて減ります。簡単な仕事なら、そのぶんたくさん質問できます。[^work]

個人のGoogleアカウント（例: @gmail.com）なら、無料でも使えます。[^personal] ただし、**満18歳以上**で、利用できる国である必要があります（大韓民国は一覧に入っています）。[^age][^country] 会社や学校が管理しているアカウントは個人アカウントではないので、管理者が許可する必要があります。[^workspace]

**3つのツールのうち、無料アカウントですべての機能が使えるのはAntigravityだけです。** Claude Codeは有料の契約が必要で、Codexの章はPlus以上を前提にしました。まだ有料プランがなければ、このステップから実習しても大丈夫です。

<Quiz id="ch601-plans" />

## モデルを選ぶ

Antigravityでは、Geminiのほかに、他の会社のモデルも選べて、考える深さ（Low・Medium・High）も決められます。[^models] 選べるモデルは、プランによって違います。

| モデル | 無料 | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

出典: Antigravity公式ドキュメント（一部のみ抜粋。ProのClaudeは体験版を除く）[^model-table]

無料で選べたClaude 4.6系は、**2026年11月2日に削除される予定**と書かれています（2026-11-01確認時点）。[^removed] ですから、無料アカウントなら、Gemini 3.8 Flashで実習すると考えておけば大丈夫です。

<Quiz id="ch601-models" />

## Claude CodeやCodexと、何が同じで何が違うのか

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| デスクトップ | ClaudeアプリのCodeタブ | ChatGPTアプリのCodex | 独立したアプリ |
| ルールのファイル | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md`・`GEMINI.md` |
| このフォルダのスキル | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| スキルの呼び出し | `/名前` | `$名前` | `/名前` |
| ターミナル | `claude -p` | `codex exec` | `agy -p` |
| 無料での実習 | できない | 限定的 | できる |

出典: このガイドのまとめ（根拠は各章の脚注）

**いちばん大きな違いは、「移す必要がない」ことです。** Antigravityは、フォルダの `AGENTS.md`・`GEMINI.md` と、`.agents/` フォルダを読みます。[^discovery] Codexのステップで作ったファイルと、名前も場所も同じです。第3章で実際に試します。

<Quiz id="ch601-compare" />

## このステップでやること

Codex第5章まで終えた整理ツールのフォルダを、**そのまま**Antigravityで開きます。Codexを飛ばしていた場合は、[ステップ3・Antigravity 目次](./)の「練習用の資料（연습 자료）」から、同じ出発点のファイルをダウンロードできます。

1. 第2章: アプリをインストールし、フォルダをプロジェクトとして開き、最初の整理を任せる。
2. 第3章: ルールとスキルを移さなくても守られるかを試す。
3. 第4〜5章: 権限・取り消し、プラン・予約を、Claude CodeやCodexと比べる。
4. 第6章: ターミナルの `agy -p` と、その落とし穴を身につける。
5. 第7章: 費用・データ・安全をまとめ、3つのツールをどう組み合わせて使うかを決める。

## まとめ

- Antigravityには、アプリ・CLI・エディタ・SDKの4つの形がある。アプリとCLIは同じエージェント。
- どのプランでもすべての機能がある。違うのは使用量とモデル。無料は週単位で回復する。
- 満18歳以上で、個人のGoogleアカウントなら、無料で始められる。
- `AGENTS.md` と `.agents/skills` を、Codexと同じ名前・場所で読む。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Antigravity | アンチグラビティ | Googleのコーディングエージェントツール |
| `agy` | エージーワイ | Antigravityのターミナル用プログラム |
| Quota | クオータ | 決まった期間に使える使用量 |
| GEMINI.md | ジェミニ・エムディー | Antigravityが読む、もうひとつのルールファイルの名前 |

<ChapterDone :chapter="601" />

次の章: [第2章 アプリのインストールと最初の整理](02-first-task.md)

[^surfaces]: Antigravity 公式ドキュメント、「Choose your Antigravity」。"Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview (確認日 2026-11-01)
[^ide]: Antigravity 公式ドキュメント、「Get started」。"Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started (確認日 2026-11-01)
[^sdk]: Antigravity 公式ドキュメント、「Google Antigravity SDK」。"The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview (確認日 2026-11-01)
[^same]: Antigravity 公式ドキュメント、「Antigravity features」。"The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features (確認日 2026-11-01)
[^auth]: Antigravity 公式ドキュメント、「Authenticate」。"Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install (確認日 2026-11-01)
[^all-features]: Antigravity 公式ドキュメント、「Plans」。"All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans (確認日 2026-11-01)
[^plans]: Antigravity 公式ドキュメント、「Plans」。"The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans (確認日 2026-11-01)
[^work]: Antigravity 公式ドキュメント、「Plans」。"As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans (確認日 2026-11-01)
[^personal]: Antigravity 公式ドキュメント、「FAQ」。"Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq (確認日 2026-11-01)
[^age]: Antigravity 公式ドキュメント、「FAQ」。"Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq (確認日 2026-11-01)
[^workspace]: Antigravity 公式ドキュメント、「FAQ」。"Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq (確認日 2026-11-01)
[^models]: Antigravity 公式ドキュメント、「Choose a model」。"You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models (確認日 2026-11-01)
[^model-table]: Antigravity 公式ドキュメント、「Choose a model」。モデル表のGemini 3.8 Flash・Gemini 4 Argon・Claude Sonnet 5.5の行と、"\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models (確認日 2026-11-01)
[^removed]: Antigravity 公式ドキュメント、「Choose a model」。"\* Will be removed on November 2, 2026." https://antigravity.google/docs/models (確認日 2026-11-01)
[^discovery]: Antigravity 公式ドキュメント、「Customization discovery」。"**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery (確認日 2026-11-01)
[^country]: Antigravity 公式ドキュメント、「FAQ」。"Google Antigravity is available in the following countries and territories." / "South Korea" https://antigravity.google/docs/faq (確認日 2026-11-01)
