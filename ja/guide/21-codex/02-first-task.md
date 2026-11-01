# 第2章 ChatGPTアプリでCodexを始める — フォルダを開いて、最初の整理を任せる

> **一言まとめ**: ChatGPTデスクトップアプリをインストールし、左上で**Codex**を選んで、入力欄の上の**Choose project**で整理ツールフォルダを開きます。
> そのあと、Claude Code 第2章と同じ依頼で会議メモを整理してもらい、結果を元のメモと照らし合わせます。

この章は、2026年11月1日に確認したCodex公式ドキュメントと、macOS用のChatGPTデスクトップアプリの画面をもとに書きました。このガイドの画面は**英語**です。自分の画面が日本語なら、同じ場所のボタンを探してください。

## インストールしてログインする

1. [chatgpt.com/download](https://chatgpt.com/download/)から、自分のコンピューター用のChatGPTアプリをダウンロードしてインストールします。Linuxは、公式ドキュメントの別の案内に従います。[^install]
2. アプリを開き、ChatGPTのアカウントでログインします。[^signin]

ステップ2でChatGPTを使ったことがあれば、同じアカウントで入れば大丈夫です。アカウントと料金プランは、[ステップ2 ChatGPT 第1章](../11-chatgpt/01-getting-started.md)で扱いました。

<Quiz id="ch502-install" />

## Codexを選んでフォルダを開く

アプリの**左上の名前**を押すと、ChatGPTとCodexの中から選べます。ChatとWorkは、ChatGPTを選んだあとに、入力欄の上のスイッチで切り替えます。[^toggle] 公式ドキュメントも、開発ツールが必要な作業は、このメニューで**Codex**を選ぶよう言っています。[^select] Codexを選ぶと、中央に"What should we build?"（何を作りましょうか？）と表示されます。

入力欄のすぐ上には、2つの選択肢があります。

| 画面上の名前 | できること |
|---|---|
| Choose project | 作業するフォルダ（プロジェクト）を選ぶ |
| This computer | どこで作業するかを選ぶ。自分のコンピューターまたはCloud |

出典: このガイドでの画面確認（2026-11-01）

![Codexの最初の画面: 中央に"What should we build in 정리도구?"、入力欄の上にプロジェクト「정리도구」と「This computer」、入力欄の下に権限「Ask for approval」とモデル名](../../../guide/21-codex/assets/shot-01-home.png)

上の画面は、整理ツールフォルダをプロジェクトとして開いた状態です。入力欄の上に選んだフォルダ（정리도구）と作業する場所（This computer）が、入力欄の下に権限（Ask for approval）とモデル名が見えます。左側の会話一覧と使用量の案内は、図から切り取りました。

**Choose project**を押して、`정리도구`フォルダ（Claude Codeのガイドに沿って進めたなら`~/hello-ai-연습/정리도구`）を選びます。Codexは、選んだフォルダのファイルを読んで直せます。[^folder] メニューバーの「File → Open Folder…」で開いてもかまいません。

作業する場所は、**This computer**（自分のコンピューター）のままにしておきます。CloudはGitHubリポジトリを連携した人向けのもので、自分のコンピューターのファイルがクラウドに渡ることはありません。[^cloud-files]

フォルダが**Gitリポジトリ**（変更の履歴を残す仕組み）かどうかも確認してください。Codexで変更内容を見るペインは、Gitリポジトリでしか開けません。Gitでなければ、アプリが1つ作ろうと聞いてきます。[^review-git] Claude Code 第3章に沿って進めたなら、すでにGitリポジトリです。練習用の資料で新しく始めたなら、**アプリがリポジトリを作ろうと聞いてきたとき**に従えば大丈夫です。[^review-git] Codexに会話でお願いすることもできますが、Gitの履歴を入れる`.git`フォルダは保護フォルダなので（[第4章](04-permissions-undo.md)）、許可を聞かれたり、止められたりすることがあります。

<Quiz id="ch502-open" />

## 最初の作業を任せる

Claude Code 第2章に似た依頼を送ります。今回は、形式を別に指定しませんでした。フォルダに様式（`templates/`）がすでにあるからです。

```
inbox/회의-2026-10-27-주간회의.txt のメモを議事録に整理して、notes/ フォルダに新しいファイルとして保存して。
```

このガイドで実行してみると、Codexは次のように作業しました。この実行は、同じCodexをターミナル（[第7章](07-terminal.md)）で動かしたものです。公式ドキュメントは、アプリも選んだフォルダで`AGENTS.md`とスキルを自動で探すと説明しています。[^discovery] ただし、このガイドがアプリの画面で同じ結果を直接確認したわけではありません。

1. フォルダでルールファイル（`AGENTS.md`）と様式を探しました。ルールファイルはまだなかったので、**様式だけ**を読みました。
2. 様式の欄の順番どおりに、決まったこと2件、やること5件、次に話し合うこと、次の会議を埋めました。
3. メモにない期限は`（メモになし）`と残しました。様式の案内文に書かれたルールです。
4. 保存したあと、欄の順番と日付・曜日を自分で検査しました。

結果: [第2章の議事録](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

**結果を元のメモと照らし合わせましょう。** 次の質問を1つずつ確認します。

- やること5件が全部移されたか。担当がメモと同じか。
- メモにない期限を作り上げていないか。
- 日付が合っているか。

今回の結果では、日付が目につきます。メモには`10/27（月）`と書かれているのに、議事録では`10/27（火）`に変わりました。練習用メモの曜日は、お話のために作ったものなので、2026年のカレンダーとは違います。Codexはカレンダーに合わせて直し、直したことを、答えとファイル内のメモで**自分から明かしました。** こうした判断が気に入らなければ、「曜日はメモに書かれたとおりに書いて」と、もう一度お願いすれば大丈夫です。

同じ依頼でも、結果の形は実行するたびに少しずつ違います。公式ドキュメントも、もっともらしい結果でも抜けや間違いがあるかもしれないので、大事な部分は使う前に確認するよう言っています。[^review]

<Quiz id="ch502-first" />

## 自分でやってみよう

1. ChatGPTアプリをインストールして、ログインする。
2. 左上で**Codex**を選び、**Choose project**で整理ツールフォルダを開く。
3. 上の依頼で、会議メモを整理してもらう。
4. やることの数・担当・期限・日付を、元のメモと照らし合わせる。

**続きの課題**: 第3章では、Claude Codeのルールファイル`CLAUDE.md`を、Codexが読む`AGENTS.md`に移します。

## まとめ

- アプリの左上でCodexを選び、入力欄の上のChoose projectでフォルダを開く。
- 作業する場所はThis computerにしておく。自分のファイルはCloudに渡らない。
- 変更内容の表示は、Gitリポジトリでしかできない。フォルダを先にGitリポジトリにしておく。
- 結果は元のメモと照らし合わせる。Codexが自分で変えた部分（今回は曜日）は、特に確認する。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Project | プロジェクト | Codexが作業するフォルダ |
| This computer | ディス・コンピューター | 自分のコンピューターで作業すること |
| Cloud | クラウド | インターネットの向こうの作業スペースで作業すること |
| Git | ギット | ファイルが変わった履歴を残す仕組み |

<ChapterDone :chapter="502" />

次の章: [第3章 ルールファイルAGENTS.md](03-agents-md.md)

[^install]: Codex公式ドキュメント、「ChatGPT desktop app」。"**Install the ChatGPT desktop app.** [Download ChatGPT](https://chatgpt.com/download/) for macOS or Windows, or follow the [Linux installation guide](https://learn.chatgpt.com/docs/linux/linux-app)." https://learn.chatgpt.com/docs/app (確認日 2026-11-01)
[^signin]: Codex公式ドキュメント、「Quickstart」。"Open the app, then sign in with your ChatGPT account." https://learn.chatgpt.com/docs/quickstart (確認日 2026-11-01)
[^select]: Codex公式ドキュメント、「Quickstart」。"For software development with codebase context and developer tools, select **Codex** from the ChatGPT dropdown." https://learn.chatgpt.com/docs/quickstart (確認日 2026-11-01)
[^folder]: Codex公式ドキュメント、「Quickstart」。"Start a chat, create a project, or open a folder. ChatGPT can read and modify files in the folder you choose." https://learn.chatgpt.com/docs/quickstart (確認日 2026-11-01)
[^cloud-files]: Codex公式ドキュメント、「Codex environments」。"Use **Work in** to choose **This computer** or **Cloud**." / "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (確認日 2026-11-01)
[^review-git]: Codex公式ドキュメント、「Code review」。"The review pane requires a project inside a Git repository. If your project isn't a Git repository yet, the app prompts you to create one." https://learn.chatgpt.com/docs/code-review (確認日 2026-11-01)
[^review]: Codex公式ドキュメント、「Use ChatGPT」。"A polished response can still be incomplete or wrong, so review the details that matter before you use or share it." https://learn.chatgpt.com/docs/use-chatgpt (確認日 2026-11-01)
[^discovery]: Codex公式ドキュメント、「Projects and chats」。"New chats start in the primary folder. Codex also uses that folder as the default for Git operations and automatic discovery of `AGENTS.md`, skills, and `config.toml`." https://learn.chatgpt.com/docs/projects (確認日 2026-11-01)
[^toggle]: Codex公式ドキュメント、「ChatGPT desktop app」。"Choose ChatGPT or Codex. In ChatGPT, use the toggle above the composer to select Chat or Work. In Codex, start with New chat." https://learn.chatgpt.com/docs/app (確認日 2026-11-01)
