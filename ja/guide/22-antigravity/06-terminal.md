# 第6章 ターミナルで使う — `agy -p`と静かな拒否

> **一言まとめ**: `agy`はAntigravityのターミナルプログラムで、`agy -p "やること"`は1回実行して終わります。
> `-p`では、許可が必要な作業が**静かに拒否**されます。それでも**終了コードは0（成功）**なので、空の結果を成功と勘違いしやすくなります。

この章は、2026年11月1日に確認したAntigravity公式ドキュメントと、macOSで`agy` 1.4.12を実行した結果をもとに書きました。このガイドは、実習用の別のAIツールの中から`agy`を呼び出して実行しました。公式FAQは、こうした使い方を個人向けプランではサポートしていないため（[第7章](07-safety-choose.md)）、真似するときは**ターミナルで`agy`を直接**実行してください。**ターミナルが初めてなら、この章は飛ばしても大丈夫です。** ターミナルとは何かは、[Claude Code 第10章](../20-claude-code/10-terminal.md)で説明しました。

## インストールして始める

macOS・Linuxのインストールコマンドは次のとおりです。[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

このコマンドは、インターネットからダウンロードしたインストールプログラムをすぐに実行します。そのため、**公式ドキュメント（antigravity.google/docs）に書かれているとおりか確認してから実行してください。** Windows用のコマンドも公式ドキュメントにあります。

整理ツールフォルダに移動して`agy`と打つと、対話画面が開きます。[^tui] アプリですでにログインしていれば、ブラウザなしですぐにログインされます。[^keyring] 初めて実行するときは、**このフォルダを信頼するか**を確認されます（Workspace trust）。[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## 実行モード

対話型の`agy`では、Shift+Tabで実行モードを切り替えます。[^cycle]

| モード | ファイルの変更 | コマンドの実行 |
|---|---|---|
| `default` | 変更内容を見せて確認 | 聞く |
| `accept-edits` | 作業フォルダの中は自動 | 聞く |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^modes]

ターミナルの標準の権限は、アプリより慎重です。ファイルの書き込み・コマンド・ウェブツールの前に聞き、コマンドを囲い込む柵は標準ではオフです（[第4章](04-permissions-undo.md)）。

<Quiz id="ch606-modes" />

## `agy -p` — 1回聞いて終わらせる

`-p`は、依頼を1つ送って答えを受け取ったら終わる方式です。聞く画面がないので、許可が必要な作業は、決めておいたルールのとおりに処理します。[^headless] 答えは標準出力（stdout）に、進行状況とエラーは別の経路（stderr）に出ます。[^stdout]

公式ドキュメントは、作業フォルダの中のファイルの読み書きは自動で許可し、シェルコマンドは標準が「聞く」なので**静かに拒否**（soft-deny）すると説明しています。[^policy] 静かな拒否は、実行を止めずに**終了コード0**で終わり、何が止められたかだけをstderrで知らせます。[^soft]

<Quiz id="ch606-headless" />

## このガイドが体験した落とし穴4つ

整理ツールフォルダで`agy -p`を何度も動かして、実際に体験したことです。

1. **空の結果なのに成功。** エージェントがフォルダの一覧を見ようとしてシェルコマンド（`ls`）を使おうとして拒否されると、**何も作らずに終わりました。** 終了コードは0でした。こうしたことが3回ありました。結果のファイルが本当にできたかを必ず確認してください。
2. **信頼していないフォルダでは、読み書きも拒否。** 公式ドキュメントは、作業フォルダの中のファイルを自動で許可すると言っていますが、このガイドの練習フォルダでは、書き込みも読み取りも拒否されました。このフォルダをまだ「信頼するフォルダ」として登録していなかったことが原因のようです（このガイドの推測）。対話型の`agy`を一度開いて、フォルダを信頼すると答えれば登録されます。[^trusted]
3. **解決: モード1つ＋一文。** `--mode accept-edits`をつけ、依頼の最後に「シェルコマンドは使わずに、ファイルの読み書きだけして」を加えたところ、すべて成功しました。何でも許可する`--dangerously-skip-permissions`は使いませんでした。公式ドキュメントも、範囲を絞った許可ルールを勧めています。[^skip]
4. **答えが抜かしたファイル。** 読み取り専用で、notesフォルダのファイル一覧を表にしてもらいました。整理したファイルは3つ（週間会議の議事録・臨時会議の議事録・週間振り返り）でしたが、表では**臨時会議の議事録が抜けて**、代わりに空のファイル`.gitkeep`が入っていました。確認した範囲は、自分で数えてみましょう。

実際に使ったコマンドは次のとおりです。

```bash
cd ~/hello-ai-연습/정리도구
agy -p "notesフォルダのファイル一覧を見せて、各ファイルがどの様式（templatesのうちどれ）で書かれているかを1行ずつ教えて。ファイルは直さないで。答えは短く、表だけで。シェルコマンドは使わずに、ファイルの読み取りだけして。" --mode accept-edits
```

結果: [agy -p 出力](/practice/notes/results/antigravity/6장-agy-p-출력.txt)（自分のコンピューターのパスは`~`に置き換えました）

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 1回だけ実行 | `claude -p` | `codex exec` | `agy -p` |
| 標準のファイル書き込み | 許可が必要 | 読み取り専用 | 作業フォルダの中は自動（ドキュメント） |
| 止められたら | 拒否 | 停止 | 静かに拒否、終了コード0 |

出典: このガイドのまとめ（各ツールのターミナルの章と実習）

<Quiz id="ch606-pitfalls" />

## 続きから再開することと使用量

ターミナルの会話履歴は、**実行したフォルダごとに**分かれます。[^per-folder] `agy -c`でそのフォルダの最後の会話にすぐ続けるか、`/resume`で選んで続けます。[^resume] `/rewind`（または`/undo`）は、会話を前のメッセージまで戻します（[第4章](04-permissions-undo.md)）。ファイルまで戻るかどうかは公式ドキュメントに書かれていないので、ファイルはGitの記録を頼りにしてください。

使用量は`/usage`で見ます。[^usage]

<Quiz id="ch606-resume" />

## 自分でやってみよう

1. 公式ドキュメントのインストールコマンドと上のコマンドが同じか確認してから、インストールする（すでにあれば`agy --version`）。
2. 整理ツールフォルダで対話型の`agy`を一度開き、フォルダを信頼するか聞かれたら答える。
3. 上の読み取り専用の`agy -p`を実行して、表のファイル数をnotesフォルダと照らして数える。
4. 結果が空なら、stderrの拒否の案内を読んで、何が止められたかを確認する。

**続きの課題**: 第7章では、コスト・データ・安全をまとめ、3つのツールをどう一緒に使うかを決めます。

## まとめ

- `agy`は対話型、`agy -p`は1回実行して終わり。会話履歴はフォルダごと。
- `-p`で許可が必要な作業は静かに拒否され、終了コードは0。結果のファイルを自分で確認する。
- 信頼していないフォルダでは、ファイル操作も止められることがある。フォルダを信頼すると登録するか、`--mode accept-edits`を使う。
- 「シェルコマンドは使わずに」という一文で、拒否で止まることが減った。答えの範囲は自分で数える。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Headless | ヘッドレス | 対話画面なしで1回だけ実行する方式 |
| Soft-deny | ソフトデナイ | 実行を止めずに、その動作だけを静かに拒否すること |
| Workspace trust | ワークスペーストラスト | このフォルダを信頼すると登録する手続き |
| Exit code | イグジットコード | プログラムが終わるときに残す成功・失敗の番号 |

<ChapterDone :chapter="606" />

次の章: [第7章 コスト・データ・安全、そして3つのツールを選ぶ](07-safety-choose.md)

[^install]: Antigravity公式ドキュメント、「Get started」。"curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started (確認日 2026-11-01)
[^tui]: Antigravity公式ドキュメント、「Get started」。"| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started (確認日 2026-11-01)
[^keyring]: Antigravity公式ドキュメント、「Authenticate」。"If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install (確認日 2026-11-01)
[^trust]: Antigravity公式ドキュメント、「Get started」。"**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started (確認日 2026-11-01)
[^cycle]: Antigravity公式ドキュメント、「Choose an execution mode」。"Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes (確認日 2026-11-01)
[^modes]: Antigravity公式ドキュメント、「Choose an execution mode」。"| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes (確認日 2026-11-01)
[^headless]: Antigravity公式ドキュメント、「Headless mode」。"Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless (確認日 2026-11-01)
[^stdout]: Antigravity公式ドキュメント、「Headless mode」。"Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless (確認日 2026-11-01)
[^policy]: Antigravity公式ドキュメント、「Headless mode」。"Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless (確認日 2026-11-01)
[^soft]: Antigravity公式ドキュメント、「Headless mode」。"A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless (確認日 2026-11-01)
[^skip]: Antigravity公式ドキュメント、「Headless mode」。"**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless (確認日 2026-11-01)
[^per-folder]: Antigravity公式ドキュメント、「Managing conversations」。"When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations (確認日 2026-11-01)
[^resume]: Antigravity公式ドキュメント、「Managing conversations」。"Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations (確認日 2026-11-01)
[^usage]: Antigravity公式ドキュメント、「Model quotas (/usage)」。"Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage (確認日 2026-11-01)
[^trusted]: Antigravity公式ドキュメント、「CLI commands」。"| **`trustedWorkspaces`** | string\[\] | `[]` | Folders you chose to trust when the CLI asked. The CLI adds entries for you. |" https://antigravity.google/docs/cli/reference (確認日 2026-11-01)
