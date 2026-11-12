# 第1章 ターミナルとClaude Code

<Badge type="tip" text="必須" /> このステップを進めるなら、必ず読んでください。

> **一言まとめ**: ターミナルは、文字でパソコンに仕事をさせるウィンドウです。この講座では、ターミナルを一度も開いたことがない人がClaude Codeをインストールし、最後にはコマンド1行で週間メモを整理するところまで進みます。[^tested]

この講座の実行結果は、Linuxで得たものです。macOS・Windowsでは実行していません。その2つは公式ドキュメントを根拠に書きました。

最初から完璧でなくてかまいません。コードがわからなくても大丈夫です。やりたいことを言葉で説明すればいいのです。[^no-code]

## ターミナルとは

**ターミナル**（Terminal）は、マウスの代わりに**文字でコマンドを入力して**パソコンを操作するウィンドウです。点滅するカーソルがある、黒い（または白い）ウィンドウを思い浮かべてください。[^cursor]

ふだんは、フォルダをダブルクリックして開きます。ターミナルでは、「このフォルダに移動して」と文字で入力します。やることは同じで、やり方が違うだけです。

ターミナルでは、メニューをクリックして選ぶことはできません。矢印キーで動かします。[^no-click] 最初はなじみがなくても、すぐに慣れます。第2章で、どうしても必要なコマンドだけを一つずつ覚えます。

<Quiz id="ch801-terminal" />

## チャットと何が違うのか

Claudeのチャット画面を使ったことがあれば、こんな流れに覚えがあるでしょう。メモをコピーして貼り付けます。答えをもらいます。その答えをまたコピーして、ファイルに移します。

Claude Codeは、ターミナルで動く**エージェント型のアシスタント**です。[^agentic] エージェント（Agent）は、答えるだけでなく、自分で手順を踏んで仕事をするプログラムです。仕事を任せると、文脈を集め、行動し、結果を確かめます。[^phases]

同じ仕事を並べてみると、違いがわかります。

| | チャット画面 | Claude Code |
|---|---|---|
| メモを渡す | 自分で貼り付ける | フォルダから自分で読む |
| 結果 | 文章の答え | 答えとファイル |
| 後片付け | 自分で書き写す | Claudeが保存 |

Claude Codeは、必要なファイルを自分で読みます。[^reads] すでにあるファイルを読んで整理することもできます。[^organize] だから、こう言えばいいのです。

```text
inboxの会議メモを読んで、회의록.md として保存して。答えは1行で。
```

今は入力しなくてかまいません。第4章でやります。

ファイルを直接扱うので、気をつけることも出てきます。何を許可するかは、あとの章で詳しく学びます。

<Quiz id="ch801-diff" />

## 自分のパソコンのターミナルを開く

ターミナルは、パソコンにもともと入っています。別にインストールする必要はありません。自分のOSに合った方法で開いてみてください。

- **Mac**: `Cmd + Space` を押して、Spotlight検索を開きます。`Terminal` と入力してEnterを押します。[^open-mac] 日本語入力の状態なら、`ターミナル` と入力してもかまいません。
- **Linux**: たいていは `Ctrl + Alt + T` を押すと開きます。開かなければ、アプリケーションのメニューで「ターミナル」を探します。[^open-linux]
- **Windows**: `Win + X` を押して、メニューから **Windows PowerShell** または **ターミナル**（Terminal）を選びます。[^open-win]

Windowsには、PowerShellとCMDという2種類のウィンドウがあります。使うコマンドが違うので、見分ける必要があります。先頭に `PS C:\` のように `PS` が見えればPowerShell、`PS` がなく `C:\` で始まればCMDです。[^ps-cmd] この講座のWindowsのコマンドは、すべて**PowerShell**が前提です。

ウィンドウが開いたら、今日やることの半分は終わりです。練習が終わったら、ウィンドウはそのまま閉じてかまいません。

<Quiz id="ch801-open" />

## 準備するもの

必要なものは3つです。

1. **有料のアカウント**: 無料のclaude.aiプランには、Claude Codeが含まれていません。[^free] Pro、Maxのような有料のアカウントが必要です。[^paid]
2. **条件に合うパソコン**: Mac、Windows、Linuxのどれでも使えます。OSのバージョンとメモリの条件は、下のボックスにあります。
3. **インターネット接続**: 必ず必要です。[^ram]

::: details 詳しく（クリックして開く）
- **使えるアカウント**: Pro、Max、Ultra、Team、Enterprise、Consoleのどれかです。[^paid]
- **OS**: MacはmacOS 13.0以上、WindowsはWindows 10 1809以上です。[^os] LinuxはUbuntu 20.04以上などに対応しています。[^linux]
- **メモリ**: 4GB以上必要です。[^ram]
- **地域**: Anthropicが対応している国でだけ使えます。[^countries]
:::

練習用の資料は、この講座が用意します。作り話のカフェのメモで練習するので、自分のファイルを触ってしまう心配をせずに始められます。

<Quiz id="ch801-ready" />

## この講座で作るもの

この講座には、1本の柱があります。**コマンド1行で動く週間整理**です。

小さなカフェ「街角カフェ」で働くソヨンのメモで練習します。ごちゃごちゃした会議メモをフォルダに入れます。スクリプト（script、コマンドを順番に書いておいたファイル）を1つ実行します。すると、メモが1つずつ議事録に整理されます。

先に見てみたいなら、[完成したスクリプト](/practice/cli/results/10장-주간정리.sh.txt)と[そのスクリプトが作った議事録](/practice/cli/results/10장-회의록-스크립트로.txt)を開いてみてください。今は意味がわからなくてかまいません。

こうできるのは、Claude Codeに**一度答えたら終わる実行方式**があるからです。[^oneshot] 会話のやり取りはしません。やることを1行で渡すと、答えたあと自分で終わります。この方式は第10章で学びます。

うまくいかなかったときは、スクリプトがそのことに気づけます。[^exit-code] だから、人が見張っていなくてもいい仕事を任せるのに向いています。

講座は、こんな順番で進みます。

- **第1〜5章**: ターミナルの基本、インストール、最初のセッション、入力のコツ
- **第6〜9章**: 会話を続ける、許可と取り消し、プロジェクトの記憶、スキル
- **第10〜13章**: 自動化、フック、同時作業、費用とトラブル対処[^bash-only]
- **第14章**: 自分のメモで作る週間整理

<Quiz id="ch801-goal" />

## アプリガイドとの関係

ターミナルを使わずに、ウィンドウとボタンで使いたい人のためのデスクトップアプリもあります。[^gui] このサイトの[Claude Code アプリガイド](/ja/guide/20-claude-code/)が、そのアプリを扱っています。

どちらを読むかは、こう選んでください。

- **ターミナルは気が重い**: アプリガイドに進んでください。今すぐターミナルを覚えなければいけないわけではありません。
- **コマンド1行で仕事を動かしたい**: この講座を読み進めてください。

この講座は、アプリガイドを読んでいない前提で書いています。ひとりで進められます。アプリガイドと同じ街角カフェのメモを使うので、すでに読んでいれば見覚えのある内容でしょう。

<Quiz id="ch801-app" />

## やってみよう

1. 上の方法で、自分のパソコンのターミナルを開きます。
2. 下のコマンドを入力して、Enterを押します。

```bash
claude --version
```

2つのうちどちらかが表示されます。どちらでも大丈夫です。

- `2.1.318 (Claude Code)` のように**数字が出る**: すでにインストールされています。[^version] 番号は違っていてもかまいません。
- `command not found` や `not recognized` と出る: まだ見つけられないという意味です。[^not-found] 画面の言語によっては、日本語で出ることもあります。意味は同じです。第3章でインストールします。壊れたわけではありません。

自分に聞いてみてください。自分のパソコンのターミナルは何か？　Macのターミナル、Linuxのターミナル、WindowsのPowerShellのどれかで答えられればOKです。

## まとめ

- ターミナルは、文字でコマンドを入力してパソコンを操作するウィンドウ。もともとパソコンに入っている。
- Claude Codeは、フォルダのファイルを自分で読んだり作ったりするエージェント型のアシスタント。
- 有料のアカウントが必要。無料プランにはない。
- WindowsのコマンドはPowerShellが前提。`PS` が見えるか確かめる。
- この講座の目標は、コマンド1行で動く週間整理。ターミナルが気が重ければ、アプリガイドに進んでもいい。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Terminal | ターミナル | 文字でコマンドを入力してパソコンを操作するウィンドウ |
| PowerShell | パワーシェル | Windowsのターミナルプログラム |
| CMD | シーエムディー | PowerShellとはコマンドが違う、Windowsの昔からのコマンド画面 |
| Agent | エージェント | 自分で手順を踏んで仕事をするプログラム |
| Script | スクリプト | コマンドを順番に書いておいたファイル |

<ChapterDone :chapter="801" />

次の章: [第2章 ターミナルの基本](02-shell-basics.md)

[^tested]: この講座は、2026年11月6日に確認したClaude Codeの公式ドキュメントをもとに書きました。実行結果は、同じ日にLinuxでClaude Code 2.1.318で実行した結果です。筆者の個人設定が混ざらないように、その設定をオフにして実行しました。macOSとWindowsでは実行していません。その2つの内容は、公式ドキュメントを根拠に書きました。この案内は、あとの章では繰り返しません。実行していない機能は、その場で明記します。
[^bash-only]: この講座のスクリプトは、Mac・Linuxのbash（バッシュ）が前提です。bashはシェル（ターミナルでコマンドを理解するプログラム）の一種です。Macの標準のシェルはzshですが、この講座ではスクリプトを `bash ファイル名` のようにbashで動かします。Windows PowerShellでは、そのままでは動きません。Windowsでは、保存したファイルの代わりにブロックを貼り付けて動かします。第10章でもう一度説明します。
[^no-code]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"You don't need to know how to code." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^cursor]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"A window will appear with a blinking cursor. This is your terminal, where you type commands." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^no-click]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^agentic]: Claude Code 公式ドキュメント、「How Claude Code works」。"Claude Code is an agentic assistant that runs in your terminal." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^phases]: Claude Code 公式ドキュメント、「How Claude Code works」。"When you give Claude a task, it works through three phases: gather context, take action, and verify results." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^reads]: Claude Code 公式ドキュメント、「Quickstart」。"Claude Code reads your project files as needed." https://code.claude.com/docs/en/quickstart （確認日 2026-11-06）
[^organize]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"Claude can read and organize files you already have:" https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^open-mac]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^open-linux]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^open-win]: Claude Code 公式ドキュメント、「Terminal guide for new users」。"Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^ps-cmd]: Claude Code 公式ドキュメント、「Quickstart」。"On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." https://code.claude.com/docs/en/quickstart （確認日 2026-11-06）
[^paid]: Claude Code 公式ドキュメント、「Advanced setup」。"Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^free]: Claude Code 公式ドキュメント、「Advanced setup」。"The free claude.ai plan does not include Claude Code access." https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^os]: Claude Code 公式ドキュメント、「Advanced setup」。"macOS 13.0+" / "Windows 10 1809+ or Windows Server 2019+" https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^linux]: Claude Code 公式ドキュメント、「Advanced setup」。"Ubuntu 20.04+" https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^ram]: Claude Code 公式ドキュメント、「Advanced setup」。"4 GB+ RAM, x64 or ARM64 processor" / "internet connection required" https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^countries]: Claude Code 公式ドキュメント、「Advanced setup」。"Anthropic supported countries" https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^oneshot]: Claude Code 公式ドキュメント、「Quickstart」。"Run one-off query, then exit" https://code.claude.com/docs/en/quickstart （確認日 2026-11-06）
[^exit-code]: Claude Code 公式ドキュメント、「Run Claude Code programmatically」。"Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." https://code.claude.com/docs/en/headless （確認日 2026-11-06）
[^gui]: Claude Code 公式ドキュメント、「Advanced setup」。"Prefer a graphical interface?" https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^version]: Claude Code 公式ドキュメント、「Advanced setup」。"A working installation prints a version number such as `2.1.211 (Claude Code)`." https://code.claude.com/docs/en/setup （確認日 2026-11-06）
[^not-found]: Claude Code 公式ドキュメント、「Troubleshoot installation and login」。"If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install （確認日 2026-11-06）
