# 10章. ターミナルで使う — 同じ整理ツールをコマンド1行で

<Badge type="info" text="選択" /> 必要なときに読んでください。読み飛ばしても、後の章についていけます。

> **一言まとめ**: ターミナル用のClaude Codeは、デスクトップアプリと **同じエンジン** です。同じフォルダで開けば、**CLAUDE.md・スキル・設定をそのまま** 使います。
> `claude -p "やること"` の1行で、質問して答えをもらったらすぐ終わります。繰り返しの作業を自動化するときに役立ちます。

この章は、2026年10月31日に確認したClaude Codeの公式ドキュメントと、macOSのターミナルでClaude Code 2.1.316を実際に実行した結果をもとに書きました。**ターミナルが初めてなら、この章は飛ばしてもかまいません。** デスクトップアプリだけで、整理ツールはすべて使えます。ターミナルをしっかり学びたいなら、[Claude Codeターミナルガイド](/ja/guide/23-claude-code-cli/)を見てください。

## ターミナルとは

**ターミナル**（Terminal）は、マウスの代わりに **文字でコマンドを入力して** パソコンを操作するウィンドウです。

- **macOS**: Finderで「アプリケーション → ユーティリティ → ターミナル」を開きます。
- **Windows**: スタートメニューで **PowerShell** を探して開きます。

ウィンドウが開いたら、点滅している文字の位置にコマンドを入力してEnterを押します。もっと詳しい開き方は、公式ドキュメントのターミナルの案内にあります。[^install]

デスクトップアプリがすでにあるのにターミナルを使う理由は、2つあります。

- **1行で終わる仕事**: 質問をひとつ投げて、答えだけもらって終わりにできます。
- **自動化**: ほかのプログラムや **スクリプト**（やることを順番に書いておいて、一度に実行するコマンドのまとまり）から、Claude Codeを呼び出せます。たとえば「フォルダの新しいメモを確認して」を毎回手で入力せずに、コマンドのまとまりの中に入れておいて動かす、というやり方です。デスクトップアプリには、こうしたスクリプト実行の機能がありません。[^no-script]

<Quiz id="ch410-why" />

## インストールして始める

ターミナルを開いて、自分のパソコンに合ったコマンドをひとつ貼り付けます。[^install] macOSなら1つ目のボックス、Windowsなら2つ目のボックスだけを使います。

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

コマンドを部分ごとに見ると、こうなります。

- `curl`: インターネットのアドレスからファイルをダウンロードするコマンド
- `-fsSL`: ダウンロードするときのオプション（エラーが出たら止まる、進み具合の表示は隠す、アドレスが移っていたらたどる）
- `|`: 前のコマンドの結果を、後ろのコマンドに渡す記号
- `bash`: 受け取ったインストールスクリプトを実行するプログラム
- Windowsの `irm` はダウンロード、`iex` はダウンロードしたものの実行で、やることは同じです。

つまり上のコマンドは、**インターネットからダウンロードしたインストールスクリプトをすぐに実行します。** だから、**初めて見るサイトのインストールコマンドは、そのまま貼り付けないでください。** 必ず **公式ドキュメント（code.claude.com）に書かれているとおりか** を確認してから実行します。

インストールが終わったら、作業するフォルダに移動して `claude` と入力します。[^start] `cd` は「このフォルダに移動」という意味です。デスクトップアプリでフォルダを選ぶのと同じことです。

```bash
cd ~/hello-ai-practice/organizer
claude
```

`~/hello-ai-practice/organizer` は例の場所です。

- `~`: 自分のユーザーフォルダ（ホームフォルダ）を短く書いた記号
- `/`: フォルダの中のフォルダに入るという印

2章で作った **整理ツール**（organizer）フォルダが実際にある場所に書き換えてください。フォルダの名前を別にしたなら、その名前を使います。macOSでは、`cd `（cdのあとに半角スペース1つ）まで入力してから、Finderのフォルダをターミナルのウィンドウにドラッグ＆ドロップすると、場所が自動で入ります。

最初はログインするよう求められます。サブスクリプションのアカウントなら、ブラウザでログインを済ませればOKです。[^start]

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
cd ~/hello-ai-practice/organizer
claude -p "notesフォルダのファイルの一覧を見せて、それぞれのファイルがどの様式（templatesのどれか）で書かれているかを1行ずつ教えて。ファイルは直さないで。答えは短く、表だけで。"
```

数秒後に答えが出て、すぐに終わりました（全体の出力: [ch10-claude-p-output.txt](/practice/ja/notes/results/ch10-claude-p-output.txt)）。

| notesのファイル | 使われた様式 |
|---|---|
| study-2026-10-28-prompt-lecture.md | templates/study-notes.md |
| weekly-review-2026-10-27.md | templates/weekly-review.md |
| minutes-2026-10-27-weekly.md | templates/minutes.md |
| minutes-2026-10-29-adhoc.md | templates/minutes.md |

出典: このガイドの実習結果（2026-10-31）。答えの最後に「確認範囲: 4/4」も付いていた。

アプリで作った **様式のファイルを、ターミナルもそのまま読み取りました。** ただし「確認範囲: 4/4」は、各ファイルの **最初の15行だけを比べた** という但し書きが付いた値です。こうした但し書きまで読む習慣が、5章の「根拠の確認」です。

CLAUDE.mdとスキルは、公式ドキュメントが、ターミナルとアプリが **共通で使う** と説明しています。[^same] 自分で確認するには、対話形式の `claude` を開いて `/` を入力し、7章のスキルの名前が表示されるかを見ます。

ただし、`-p` で一度に終わらせる実行は、**途中で許可を聞くことができません。** 許可が必要な仕事は、許可ルールで先に許可しておかないと、断られます。[^p-deny] たとえば `claude -p "/weekly-review"` のようにファイルを書き込むスキルは、許可なしでは書き込みが断られることがあります。だから最初は、上の実習のように **読むだけの質問** で練習してください。

<Quiz id="ch410-practice" />

## アプリとターミナルを行き来する

- 2か所を **同時に、同じフォルダで** 使ってもかまいません。セッションの一覧は別ですが、設定とCLAUDE.mdは共通で使います。[^same]
- ターミナルでしていた会話をアプリへ渡すには、ターミナルで `/desktop` と入力します（macOS・Windows x64、サブスクリプションでのログイン）。[^to-desktop]
- アプリの側から取り込むこともできます。アプリの最初の画面にある **「Claude Code CLI 세션 가져오기」**（Claude Code CLIセッションを取り込む。2章の最初の画面の案内カード）を押すと、ターミナルでしたセッションをアプリに取り込みます。ここでのCLIは「ターミナル用のClaude Code」という意味です。

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
