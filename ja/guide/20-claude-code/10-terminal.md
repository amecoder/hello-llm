# 10章. ターミナルで使う — 同じ整理ツールをコマンド1行で

> **一言まとめ**: ターミナル用のClaude Codeは、デスクトップアプリと **同じエンジン** です。同じフォルダで開けば、**CLAUDE.md・スキル・設定をそのまま** 使います。
> `claude -p "やること"` の1行で、質問して答えをもらったらすぐ終わります。繰り返しの作業を自動化するときに役立ちます。

この章は、2026年10月31日に確認したClaude Codeの公式ドキュメントと、macOSのターミナルでClaude Code 2.1.316を実際に実行した結果をもとに書きました。**ターミナルが初めてなら、この章は飛ばしてもかまいません。** デスクトップアプリだけで、整理ツールはすべて使えます。

## ターミナルとは

**ターミナル**（Terminal）は、マウスの代わりに **文字でコマンドを入力して** パソコンを操作するウィンドウです。macOSは「アプリケーション → ユーティリティ → ターミナル」、WindowsはPowerShellを使います。公式ドキュメントにも、ターミナルを初めて開く人のための案内が別にあります。[^install]

デスクトップアプリがすでにあるのにターミナルを使う理由は、2つあります。

- **1行で終わる仕事**: 質問をひとつ投げて、答えだけもらって終わりにできます。
- **自動化**: ほかのプログラムやスクリプトから、Claude Codeを呼び出せます。デスクトップアプリには、こうしたスクリプト実行の機能がありません。[^no-script]

<Quiz id="ch410-why" />

## インストールして始める

ターミナルを開いて、自分のパソコンに合ったコマンドをひとつ貼り付けます。[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**初めて見るサイトのインストールコマンドは、そのまま貼り付けないでください。** 上のコマンドは、インターネットからダウンロードしたスクリプトをすぐに実行します。必ず **公式ドキュメント（code.claude.com）に書かれているとおりか** を確認してから実行します。

インストールが終わったら、作業するフォルダに移動して `claude` と入力します。[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

最初はログインするよう求められます。サブスクリプションのアカウントなら、ブラウザでログインを済ませればOKです。[^start] `cd` は「このフォルダに移動」という意味です。デスクトップアプリでフォルダを選ぶのと同じことです。

<Quiz id="ch410-install" />

## 基本のコマンド

| コマンド | 役割 |
|---|---|
| `claude` | 対話形式で始める（アプリのセッションと同じ） |
| `claude "やること"` | 最初の依頼を入れて、対話形式で始める |
| `claude -p "やること"` | 一度だけ質問して、答えをもらったら終わる |
| `claude -c` | このフォルダの、いちばん最近の会話を続ける |
| `claude -r` | 過去の会話を選んで続ける |

出典: Claude Code公式ドキュメント[^commands]

対話形式で始めたあとは、アプリのように `/` コマンドを使います。`/help` は使えるコマンドを、`/resume` は過去の会話を表示します。[^start]

<Quiz id="ch410-commands" />

## 実習 — 整理ツールを1行で確認する

整理ツールのフォルダで、こう実行してみました。

```bash
cd ~/hello-ai-연습/정리도구
claude -p "notesフォルダのファイルの一覧を見せて、それぞれのファイルがどの様式（templatesのどれか）で書かれているかを1行ずつ教えて。ファイルは直さないで。答えは短く、表だけで。"
```

数秒後に答えが出て、すぐに終わりました（全体の出力: [10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)）。

| notesのファイル | 使われた様式 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

出典: このガイドの実習結果（2026-10-31）。答えの最後に「確認範囲: 4/4」も付いていた。

アプリで作った **様式のファイルを、ターミナルもそのまま読み取りました。** ただし「確認範囲: 4/4」は、各ファイルの **最初の15行だけを比べた** という但し書きが付いた値です。こうした但し書きまで読む習慣が、5章の「根拠の確認」です。

CLAUDE.mdとスキルは、公式ドキュメントが、ターミナルとアプリが **共通で使う** と説明しています。[^same] 自分で確認するには、対話形式の `claude` を開いて `/` を入力し、7章のスキルの名前が表示されるかを見ます。

ただし、`-p` で一度に終わらせる実行は、**途中で許可を聞くことができません。** 許可が必要な仕事は、許可ルールで先に許可しておかないと、断られます。[^p-deny] たとえば `claude -p "/weekly-review"` のようにファイルを書き込むスキルは、許可なしでは書き込みが断られることがあります。だから最初は、上の実習のように **読むだけの質問** で練習してください。

<Quiz id="ch410-practice" />

## アプリとターミナルを行き来する

- 2か所を **同時に、同じフォルダで** 使ってもかまいません。セッションの一覧は別ですが、設定とCLAUDE.mdは共通で使います。[^same]
- ターミナルでしていた会話をアプリへ渡すには、ターミナルで `/desktop` と入力します（macOS・Windows x64、サブスクリプションでのログイン）。[^to-desktop]
- 逆に、アプリの最初の画面にある **「Claude Code CLI 세션 가져오기」**（Claude Code CLIセッションを取り込む）で、ターミナルでしたセッションをアプリに取り込めます（2章の最初の画面の案内カード）。

<Quiz id="ch410-switch" />

## やってみよう

1. 公式ドキュメントのインストールコマンドが上のものと同じかを自分で確認してからインストールする（すでにあるなら `claude --version`）。
2. 整理ツールのフォルダに移動して、上の読み取り専用の `claude -p` の質問を実行する。
3. `claude` で対話形式を開いて、`/help` を入力してみる。`/` を入力して、7章のスキルの名前が表示されるかを確認する。
4. 会話を終えて、`claude -c` で、さっきの会話を続けてみる。

**続けての課題**: 11章では、ここまでの機能をまとめて、**自分のメモ**で整理ツールを最初から作ってみる課題をします。

## まとめ

- ターミナル用のClaude Codeは、アプリと同じエンジンである。同じフォルダなら、CLAUDE.md・スキル・設定を共通で使う。
- インストールコマンドは、公式ドキュメントに書かれているとおりかを確認してから実行する。
- `claude` は対話形式、`claude -p` は一度聞いて終わり、`claude -c` は続きから。
- `-p` の実行は、途中で許可を聞けない。最初は読むだけの質問で練習する。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Terminal | ターミナル | 文字でコマンドを入力してパソコンを操作するウィンドウ |
| CLI | シーエルアイ | ターミナルで使うプログラム（Command Line Interface） |
| `cd` | シーディー | 別のフォルダに移動するコマンド |
| `-p` | ピー（print） | 一度聞いて、答えを出力したら終わる実行方式 |

<ChapterDone :chapter="410" />

次の章: [11章. 実習の課題](11-practice.md)

[^install]: Claude Code公式ドキュメント、「Quickstart」。"To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart （確認日 2026-10-31）
[^start]: Claude Code公式ドキュメント、「Quickstart」。"Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart （確認日 2026-10-31）
[^commands]: Claude Code公式ドキュメント、「Quickstart」。コマンド表: "Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart （確認日 2026-10-31）
[^no-script]: Claude Code公式ドキュメント、「Desktop application」。機能比較表「Scripting and automation」行のDesktop列: "Not available" https://code.claude.com/docs/en/desktop （確認日 2026-10-31）
[^same]: Claude Code公式ドキュメント、「Desktop application」。"If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop （確認日 2026-10-31）
[^to-desktop]: Claude Code公式ドキュメント、「Desktop application」。"To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop （確認日 2026-10-31）
[^p-deny]: Claude Code公式ドキュメント、「Choose a permission mode」。"Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes （確認日 2026-10-31）
