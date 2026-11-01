# 第4章 権限と元に戻す — プリセットは4つ、破棄は慎重に

> **一言まとめ**: アプリの権限は**4つのプリセット**（Request Review・Default・Auto・Turbo）から選びます。最初は**Request Review**か**Default**で始めましょう。
> Reviewウィンドウの**破棄は、確認なしですぐに**適用されます。ターミナルには`/rewind`がありますが、いちばん確実な安全網は、やはりGitの記録です。

この章は、2026年11月1日に確認したAntigravityの公式ドキュメントをもとに書きました。権限がなぜ必要なのかは、[Claude Code 第4章](../20-claude-code/04-permissions-undo.md)で説明しました。個人のGoogleアカウントを前提にしていて、会社・企業のアカウントでは権限の画面が違います。[^business]

## 権限のプリセット4種類

| プリセット | コマンドの実行 | いつ使う |
|---|---|---|
| Request Review | すべてのコマンドで許可を求める | 最初、慎重にしたい仕事 |
| Default | 柵の中では聞かず、外に出るときに聞く | 慣れてから |
| Auto (Preview) | 安全なコマンドは任せ、危険なコマンドだけ聞く | 試験的な機能 |
| Turbo | 制限なしにすべて実行する | ほとんど使わない |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^presets]

**Turbo**は、柵なしでパソコン全体を読み書きできます。[^turbo] メモの整理には要りません。

切り替える場所は3か所あります。[^where]

- すべてのプロジェクト: **Settings → General → Global Permissions → Permission Preset**
- プロジェクトひとつ: **Settings → Projects**
- 今の会話: 入力欄の権限セレクター

プロジェクトは初期設定で全体の設定に従い（**Inherit Global**）、プロジェクトごとに別々に決めることもできます。[^inherit] 信頼できるプロジェクトは緩く、信頼できないフォルダは厳しくしておける、ということです。[^per-project] 個人アカウントが最初にどのプリセットで始まるのかは、公式ドキュメントには載っていません。アプリを開いたら、まず確認してください。

<Quiz id="ch604-presets" />

## 柵と基本のルール

アプリには**ターミナルの柵**（サンドボックス）があり、公式ドキュメントは**初期設定でオン**だと説明しています。[^sandbox] ただし、プリセットによって違います。DefaultとAutoではオンになり、Request ReviewとTurboではオフになります。[^by-preset] 柵の中のコマンドは、作業フォルダと一時フォルダだけを使い、**インターネットには出られません。**[^no-net] `~/.ssh`や`.env`のような機密性の高いファイルも、ブロックされます。[^sensitive]

プリセットに関係なく、基本のルールもあります。

- プロジェクトフォルダの**中**のファイルの読み書きは、聞かれません。**外**のファイルには許可が必要です。[^files]
- Webページの読み込みと操作は、初期設定が「聞く」です。[^web]
- ルールが重なったときは、ブロック（Deny）> 確認（Ask）> 許可（Allow）の順で決まります。[^order]

会話の中で許可したことは残ることがあり、エージェントが信頼できる動作を少しずつ覚えていきます。[^persist] 便利ですが、何を許可したかは覚えておいてください。

**ターミナル（`agy`）の初期設定は違います。** ターミナルは、ファイルの書き込み・コマンド・Webツールの前に聞き[^cli-ask]、柵は**初期設定でオフです。**[^cli-sandbox] 第6章で扱います。

<Quiz id="ch604-sandbox" />

## 元に戻す

**Reviewウィンドウの破棄には気をつけてください。**「Discard unstaged changes」は**確認なしですぐに**適用され、記録されていない新しいファイルまで消します。[^discard] 初期の表示には自分で直したものも入っているので（[第2章](02-first-task.md)）、破棄する前に、何が入っているかを必ず見てください。

ターミナルには、会話をひとつ前の安定した状態に戻す`/rewind`（または`/undo`）があります。[^rewind] 名前はClaude Codeの巻き戻しと似ていますが、公式ドキュメントは「会話」を戻すとしか説明していません。ファイルまで戻るのかは、書かれていません。

アプリにも元に戻す機能があるようです。公式の変更履歴に、「Confirm Undo」の確認ウィンドウに、会話だけを戻す選択肢が加わったという内容があります。[^undo] ただし、**使い方を説明したドキュメントは見つかりませんでした**し、このガイドもアプリで確認できていません。

そこで、この段階でもCodex 第4章と同じ習慣を使います。

1. 任せる前: Gitで今の状態を記録しておく。
2. 任せる。
3. ReviewウィンドウのAgent Editsで、変わったものだけを見る。
4. よければまた記録し、そうでなければ元に戻す。

<Quiz id="ch604-undo" />

## やってみましょう

1. Settings → General → Global Permissionsで、今のプリセットを確認する。初めてなら、Request ReviewかDefaultにしておく。
2. 整理ツールのフォルダの今の状態を、Gitで記録する。
3. 第2章の議事録に「一番上に『作成日: 今日の日付』を一行追加して」と頼む。
4. ReviewウィンドウをAgent Editsで見て、変わった行を確認する。

**続きの課題**: 第5章では、計画（`/plan`）、予約（`/schedule`・Automations）、ブラウザ（`/browser`）、目標（`/goal`）を見ていきます。

## まとめ

- アプリの権限はプリセット4つ。最初はRequest ReviewかDefault、Turboは使わない。
- アプリの柵は、DefaultとAutoのプリセットでオンになり、インターネットが止まる。ターミナルは初期設定でオフ。
- プロジェクトフォルダの中のファイルは聞かれず、外とWebは聞かれる。
- Reviewウィンドウの破棄は、確認なしですぐに消す。任せる前にGitで記録しておく。

## 用語の整理

| 用語 | 読み方 | ひとこと説明 |
|---|---|---|
| Permission preset | パーミッション・プリセット | 権限を一度に決めるセット |
| Sandbox | サンドボックス | コマンドが手を出せる範囲を限る柵 |
| Discard | ディスカード | 変わった内容を捨てること |
| `/rewind` | リワインド | ターミナルで会話をひとつ前の状態に戻すコマンド |

<ChapterDone :chapter="604" />

次の章: [第5章 計画・予約・ブラウザ・目標](05-plan-schedule.md)

[^business]: Antigravity 公式ドキュメント「Agent settings」。"Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings (確認日 2026-11-01)
[^presets]: Antigravity 公式ドキュメント「Agent settings」。"**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings (確認日 2026-11-01)
[^turbo]: Antigravity 公式ドキュメント「Agent settings」。"**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings (確認日 2026-11-01)
[^where]: Antigravity 公式ドキュメント「Agent settings」。"**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." / "**For a single project**: Override the global preset under **Settings** > **Projects**. Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (確認日 2026-11-01)
[^inherit]: Antigravity 公式ドキュメント「Agent settings」。"Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (確認日 2026-11-01)
[^per-project]: Antigravity 公式ドキュメント「Antigravity features」。"This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features (確認日 2026-11-01)
[^sandbox]: Antigravity 公式ドキュメント「Terminal sandbox」。"Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox (確認日 2026-11-01)
[^no-net]: Antigravity 公式ドキュメント「Agent permissions」。"**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions (確認日 2026-11-01)
[^sensitive]: Antigravity 公式ドキュメント「Terminal sandbox」。"Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox (確認日 2026-11-01)
[^files]: Antigravity 公式ドキュメント「Agent permissions」。"**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions (確認日 2026-11-01)
[^web]: Antigravity 公式ドキュメント「Agent permissions」。"**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions (確認日 2026-11-01)
[^order]: Antigravity 公式ドキュメント「Agent permissions」。"**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions (確認日 2026-11-01)
[^persist]: Antigravity 公式ドキュメント「Antigravity features」。"Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features (確認日 2026-11-01)
[^cli-ask]: Antigravity 公式ドキュメント「Antigravity features」。"The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features (確認日 2026-11-01)
[^cli-sandbox]: Antigravity 公式ドキュメント「Antigravity features」。"The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features (確認日 2026-11-01)
[^discard]: Antigravity 公式ドキュメント「Review changes」。"**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes (確認日 2026-11-01)
[^rewind]: Antigravity 公式ドキュメント「CLI best practices」。"Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices (確認日 2026-11-01)
[^undo]: Antigravity 公式ドキュメント「Changelog」。"The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog (確認日 2026-11-01)
[^by-preset]: Antigravity 公式ドキュメント「Terminal sandbox」。"| **Default** | On | Allowed in sandbox; ask outside |" / "| **Turbo** | Off | Allowed without prompting, unrestricted |" https://antigravity.google/docs/sandbox (確認日 2026-11-01)
