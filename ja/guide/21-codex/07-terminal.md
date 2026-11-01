# 第7章 ターミナルで使う — `codex exec`一行で整理ツールを確認

> **一言まとめ**: Codex CLIは、ターミナルで使うCodexです。実行したフォルダの`AGENTS.md`とスキルを読みます。
> `codex exec "やること"`は一度実行して終わりで、**初期設定は読み取り専用**です。Claude Codeの`claude -p`と似ていますが、この点が違います。

この章は、2026年11月1日に確認したCodexの公式ドキュメントと、macOSのターミナルでCodex CLI 0.166.0を実行した結果をもとに書きました。**ターミナルが初めてなら、この章は飛ばしてもかまいません。** ターミナルとは何かは、[Claude Code 第10章](../20-claude-code/10-terminal.md)で説明しました。

## インストールして始める

公式ドキュメントのインストールコマンドは、次のとおりです。[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**インストールコマンドは、公式ドキュメント（learn.chatgpt.com）に書かれているものと同じかを確認してから実行してください。** インターネットから受け取ったスクリプトをすぐに実行するコマンドだからです。

インストールが終わったら、整理ツールのフォルダに移動して`codex`と入力します。最初は**Sign in with ChatGPT**を選びます。[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

ターミナルのCodexは、**実行したフォルダ**をその会話のプロジェクトとして見ます。[^cwd] アプリでChoose projectを使ってフォルダを選んでいたことを、`cd`が代わりにやってくれます。

<Quiz id="ch507-install" />

## `codex exec` — 一度聞いて終わらせる

`codex exec`は、会話の画面を開かずに、一度実行して終わる方式です。[^exec] Claude Code 第10章と同じ質問をしてみました。

```bash
cd ~/hello-ai-연습/정리도구
codex exec "notesフォルダのファイルの一覧を見せて、各ファイルがどのひな形（templatesのどれ）で書かれたかを一行ずつ教えて。ファイルは書き換えないで。答えは短く、表だけで。"
```

答えだけがすっきりと出ました（全体の出力: [7장-codex-exec-출력.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)）。

| notesのファイル | 使われたひな形 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-26.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |

出典: このガイドの実習結果（2026-11-01）。進行の記録は別に捨てて、最終的な答えだけを残した。

`codex exec`は、進み具合と最終的な答えを**別の道**に出します。進み具合は画面の脇道（stderr）、最終的な答えだけが正式な出力（stdout）です。[^stdout] そのため、`codex exec "…" > 결과.md`のように使うと、最終的な答えだけがファイルに入ります。

**`codex exec`は、初期設定が読み取り専用です。** ファイルを書き換えさせたいときは、`--sandbox workspace-write`を付けます。[^readonly] このガイドの第2・3・5章の実習も、このオプションを付けて実行しました。

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec`は、許可の方式を**あらかじめ決めておいて**動かす方式です。[^preset] このガイドの第5章の実習では、`.agents`フォルダへの書き込みがブロックされたとき、Codexは確認できないまま止まってしまいました。許可が必要な仕事は、アプリや対話型の`codex`でやるほうが楽です。

古い記事に出てくる`--full-auto`オプションは、もうサポートされていません。[^fullauto] サンドボックスと許可の両方をオフにする`--dangerously-bypass-approvals-and-sandbox`のようなオプションもありますが[^yolo]、メモの整理には要りません。

<Quiz id="ch507-exec" />

## 対話型`codex`の中のコマンド

`codex`で対話型を開くと、`/`で始まるコマンドが使えます。

| コマンド | することの内容 |
|---|---|
| `/permissions` | 権限を変える（アプリの権限メニュー） |
| `/import` | Claude CodeやCursorの設定を取り込む |
| `/resume` | 保存した会話を続ける |
| `/status` | 会話の情報と残りの上限を見る |

出典: Codex公式ドキュメント[^permissions][^import][^resume][^status]

対話型を終えたあとで外から続けたいときは、`codex resume`と入力します。[^resume]

`/permissions`と`/import`は、**ターミナル側のコマンド**です。アプリでは、入力欄の下の権限メニュー（第4章）と、設定のImportメニュー（第3章）を使います。

<Quiz id="ch507-commands" />

## やってみましょう

1. 公式ドキュメントのインストールコマンドと上のコマンドが同じかを確認してから、インストールする（すでに入っていれば`codex --version`）。
2. 整理ツールのフォルダに移動して、上の読み取り専用の`codex exec`の質問を実行する。
3. `codex`で対話型を開いて、`/status`を入力してみる。
4. `$`を入力するか`/skills`を実行して、第5章のスキル名が見えるかを確認する。[^skills]

**続きの課題**: 第8章では、コスト・データ・安全をまとめ、隠れた指示が入ったメモをCodexがどう扱うかを確認します。

## まとめ

- ターミナルのCodexは、実行したフォルダをプロジェクトとして見て、そのフォルダの`AGENTS.md`とスキルを読む。
- インストールコマンドは、公式ドキュメントと同じかを確認してから実行する。
- `codex exec`は一度実行して終わり、初期設定は読み取り専用。書き換えるなら`--sandbox workspace-write`。
- `codex exec`は、許可の方式をあらかじめ決めて動く。許可が必要な仕事は、アプリや対話型で。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Codex CLI | コーデックス・シーエルアイ | ターミナルで使うCodex |
| `codex exec` | コーデックス・エグゼック | 一度実行して終わらせる方式 |
| stdout / stderr | スタンダード・アウト / スタンダード・エラー | 正式な出力 / 進み具合やエラーが出る脇道 |

<ChapterDone :chapter="507" />

次の章: [第8章 コスト・データ・安全、そしてツールの選び方](08-safety-choose.md)

[^install]: Codex 公式ドキュメント「Codex CLI」。"curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli (確認日 2026-11-01)
[^signin]: Codex 公式ドキュメント「Codex CLI」。"Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli (確認日 2026-11-01)
[^cwd]: Codex 公式ドキュメント「Projects and chats」。"Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects (確認日 2026-11-01)
[^exec]: Codex 公式ドキュメント「Non-interactive mode」。"Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode (確認日 2026-11-01)
[^stdout]: Codex 公式ドキュメント「Non-interactive mode」。"While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode (確認日 2026-11-01)
[^readonly]: Codex 公式ドキュメント「Non-interactive mode」。"By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode (確認日 2026-11-01)
[^fullauto]: Codex 公式ドキュメント「Non-interactive mode」。"`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode (確認日 2026-11-01)
[^yolo]: Codex 公式ドキュメント「Agent approvals & security」。"`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security (確認日 2026-11-01)
[^permissions]: Codex 公式ドキュメント「Permissions」。"In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes (確認日 2026-11-01)
[^import]: Codex 公式ドキュメント「Import from another agent」。"Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import (確認日 2026-11-01)
[^resume]: Codex 公式ドキュメント「Projects and chats」。"Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects (確認日 2026-11-01)
[^status]: Codex 公式ドキュメント「Pricing」。"If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing (確認日 2026-11-01)
[^skills]: Codex 公式ドキュメント「Build skills」。"In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills (確認日 2026-11-01)
[^preset]: Codex 公式ドキュメント「Non-interactive mode」。"Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode (確認日 2026-11-01)
