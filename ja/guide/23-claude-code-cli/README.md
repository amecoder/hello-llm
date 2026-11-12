# ステップ3・Claude Code ターミナルガイド

ステップ2では、チャットで**質問して答えをもらいました。** このガイドでは、ターミナルからClaude Codeを呼び出して、Claudeに**自分のパソコンのフォルダで、直接ファイルを読んで直してもらいます。**
ターミナルを一度も開いたことがなくても大丈夫です。コードがわからなくてもかまいません。第1章でターミナルを開くところから始めて、最後にはコマンド1行で動く週間整理を作ります。

> **このガイドは、2026年11月6日に確認したClaude Codeの公式ドキュメント（code.claude.com/docs）と、同じ日にLinuxでClaude Code 2.1.318を実際に実行した結果をもとに書きました。** 筆者の個人設定が混ざらないように、その設定をオフにして実行しました。macOS・Windowsでは実行していません。そちらの内容は公式ドキュメントを根拠に書きました。実行していない機能は、その場で明記します。
> Claude Codeを使うには、**有料のアカウント**（Pro・Max・Ultra・Team・Enterprise・Console）が必要です。機能やコマンドはよく変わります。自分の画面と違うときは、画面に表示されている名前に従ってください。

| 章 | 読む | タイトル | こんなことがわかります |
|---|---|---|---|
| 1 | 必須 | [ターミナルとClaude Code](01-what-is.md) | ターミナルとは何か、自分のパソコンで開く方法 |
| 2 | 必須 | [ターミナルの基本](02-shell-basics.md) | フォルダの移動とファイルの扱い方、練習用フォルダを作る |
| 3 | 必須 | [インストールとログイン](03-install-login.md) | OSごとのインストール、ログイン、バージョンの確認 |
| 4 | 必須 | [最初のセッション](04-first-session.md) | フォルダの信頼の確認、画面の読み方、最初の議事録 |
| 5 | 必須 | [入力のコツとコマンド](05-input-commands.md) | `@`・`!`・`/`、複数行の入力、ショートカットキー |
| 6 | 必須 | [セッションと文脈](06-sessions-context.md) | 名前を付ける、続きから再開する、`/context`・`/compact`・`/clear` |
| 7 | 必須 | [許可と取り消し](07-permissions-undo.md) | 権限モード、許可の画面、巻き戻し、拒否ルール |
| 8 | 必須 | [プロジェクトの記憶と設定](08-memory-settings.md) | CLAUDE.md、設定ファイル |
| 9 | 必須 | [スキルと拡張](09-skills-extensions.md) | スキルを作る、プラグイン・MCP・サブエージェント |
| 10 | 必須 | [1行実行と自動化](10-headless-automation.md) | `claude -p`、あらかじめ許可する、`weekly-summary.sh` |
| 11 | 必須 | [フックと画面のカスタマイズ](11-hooks-statusline.md) | 変更記録のフック、ステータスライン、出力スタイル |
| 12 | 必須 | [同時作業とリモート](12-parallel-remote.md) | Gitの最初の記録、worktree、`/loop`、`/goal`、リモート操作 |
| 13 | 必須 | [費用・安全・トラブル対処](13-cost-safety-trouble.md) | 使用量、モデル、サンドボックス、データ、エラーへの対処 |
| 14 | 必須 | [実習課題と専門家のように使う](14-practice-expert.md) | 課題とチェックリスト、自分のメモで週間整理、毎週のルーティン |

知らないコマンドが出てきたら、[コマンド辞典](command-reference.md)で調べてください。この講座のコマンドとオプション、記号を、意味と一緒にまとめてあります。

## 練習用の資料

実習は `~/hello-ai-practice/terminal` フォルダで、下のメモを使って行います。**すべて作り話の内容です**（小さなカフェ「街角カフェ」で働くソヨンの1週間）。
第2章では週間会議のメモだけを入れます。臨時会議のメモは第13章で入れます。

| ファイル | 内容 |
|---|---|
| [meeting-2026-10-27-weekly.txt](/practice/ja/notes/inbox/meeting-2026-10-27-weekly.txt) | ごちゃごちゃした週間会議のメモ |
| [meeting-2026-10-29-adhoc.txt](/practice/ja/notes/inbox/meeting-2026-10-29-adhoc.txt) | 隠れた指示が入ったメモ（第13章の安全の実験用） |

このガイドが実際に実行して作った**成果物**も公開しています。自分の結果と見比べてみてください。同じ依頼でも、形は少しずつ違います。

| 章 | 成果物 |
|---|---|
| 4 | [議事録](/practice/ja/cli/results/ch4-minutes.txt) |
| 8 | [CLAUDE.md](/practice/ja/cli/results/ch8-CLAUDE.md.txt) |
| 9 | [スキル meeting-notes](/practice/ja/cli/results/ch9-skill-meeting-notes.txt) |
| 10 | [weekly-summary.sh](/practice/ja/cli/results/ch10-weekly-summary.sh.txt) ・ [スクリプトで作った議事録](/practice/ja/cli/results/ch10-minutes-by-script.txt) |
| 11 | [設定ファイル](/practice/ja/cli/results/ch11-settings.json.txt) |

ターミナルを使わずに使いたいなら、[Claude Code アプリガイド](/ja/guide/20-claude-code/)を見てください。デスクトップアプリで、同じカフェのメモを整理します。アカウント・料金プラン・チャットの機能は、[ステップ2・Claudeガイド](/ja/guide/10-claude/)で説明しています。
