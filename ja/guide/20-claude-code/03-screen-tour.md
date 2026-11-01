# 第3章 画面を見て回る — タイトル行、変更内容、ファイル、セッション情報

> **一言まとめ**: Codeタブは、**会話のペインの横にいくつものペイン（枠）を開いて**使う画面です。セッションのタイトル行のボタンで**変更内容・ファイル・ターミナル・ブラウザ**のペインを開き、セッション情報のペインでは何が変わったかを数字で確認します。
> 変更内容を見るには、フォルダで**変更履歴（Git）** がオンになっている必要があります。この章では、Claudeにオンにしてもらいます。

この章は、2026年10月31日に確認したClaude Code公式ドキュメントと、macOSデスクトップアプリ（韓国語の画面、有料アカウント）をもとに書きました。第2章で作った**整理ツール**フォルダと議事録をそのまま使います。

## 全体のレイアウト

作業を何度かお願いすると、画面はこのようになります。

![Codeタブの作業画面。① 左の会話ペイン、② 右上の変更内容ペイン（削除した行は赤、新しい行は緑）、③ 右下のファイルペイン（議事録が開かれていて、その横にフォルダの一覧）に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-11-layout-marked.png)

| 番号 | ペイン | 何を見るか |
|---|---|---|
| ① | 会話 | 自分が送った依頼とClaudeの説明 |
| ② | 変更内容（変更事項） | ファイルのどの行が削除され、どの行が増えたか |
| ③ | ファイル | フォルダの中のファイルを開いて読む |

Codeタブは、会話・変更内容・ブラウザ・ターミナル・ファイルなどの**ペインを好きなように並べて使う画面**です。[^arrange] ペインの上部をドラッグして位置を動かし、ペインの端をドラッグして大きさを変えます。[^arrange] 最初からすべて開く必要はありません。必要なときに1つずつ開けば大丈夫です。

<Quiz id="ch403-layout" />

## セッションのタイトル行のボタン

会話ペインの一番上の行に、ボタンが集まっています。

![セッションのタイトル行。① サイドメニュー（セッション一覧）の開閉、② セッションのタイトル、③ セッション情報ペイン、④ ターミナル、⑤ 変更事項、⑥ ブラウザ、⑦ ファイル、⑧ その他（⋯）に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-06-titlebar-marked.png)

| 番号 | できること |
|---|---|
| ① | サイドメニュー（セッション一覧）を開閉する |
| ② | セッションのタイトル。押すと名前を変えられる |
| ③ | セッション情報ペインを開閉する |
| ④ | ターミナルペイン |
| ⑤ | 変更事項（変更内容）ペイン |
| ⑥ | ブラウザペイン |
| ⑦ | ファイルペイン |
| ⑧ | ボタンがない別のペインを開く |

出典: ボタンの名前はこのガイドでの画面確認（メニューバーの「表示（보기）」メニュー、2026-10-31）、役割は公式ドキュメント[^arrange][^sessions]

ボタンがアイコンだけで迷ったときは、**マウスを重ねて名前を確認**してください。[^arrange] ウィンドウが狭いと、入りきらないボタンは⑧のメニューの中に移ります。[^arrange]

セッションのタイトル（②）は、アプリが最初の依頼を見て自動でつけてくれます。このガイドでは「会議メモの整理（회의 메모 정리）」とつきました。タイトルを押すと名前を変えられます。[^sessions]

① のサイドメニューには、これまでに開いたセッションの一覧があります。セッションごとに、会話と変更内容が別々に保存されます。[^sessions] 複数のセッションを並べて使う方法は、第8章で扱います。

<Quiz id="ch403-titlebar" />

## 変更内容を見る — 変更履歴（Git）が必要

第2章で作ったフォルダで ⑤ の変更事項ボタンを押すと、このような案内が出ます。

![変更事項ペイン。① ペイン名「変更事項（변경 사항）」、② 「変更事項を見るにはGitリポジトリが必要です」という案内に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-07-changes-need-git-marked.png)

**Git**（ギット）は、ファイルがいつ、どのように変わったかを記録しておくツールです。変更事項ペインは、この記録と今のファイルを比べて見せてくれます。そのため、記録がない普通のフォルダでは、見せるものがありません。

Gitのコマンドは知らなくても大丈夫です。**Claudeにオンにしてもらえばいいのです。**

```
変更内容を見るにはGitリポジトリが必要だって。このフォルダで変更履歴（Git）をオンにして、今あるファイルを最初の記録として残して。何をしたのかやさしく説明して。
```

このガイドでは、ClaudeがフォルダでGitをオンにし、メモ5件と議事録を**最初の記録**として残しました。すると、変更事項ペインに「表示する変更事項がありません（표시할 변경 사항이 없습니다）」と出ました。最初の記録のあとで変わったものはまだない、という意味です。

では、議事録を少し直してもらいましょう。振り返りメモをもとに、やることごとに進行状況をつける依頼です。

```
議事録のやること表に「状態」列を追加して。inboxの振り返りメモ3件を見て、終わったことは「完了（日付）」、まだなら「進行中」と書いて。振り返りにないことは「要確認」と書いて、ほかの部分は直さないで。
```

![変更内容ペイン。① 変更された行数「+7 −7」、② 削除された行（赤）、③ 新しくできた行（緑、「状態」列と「完了(10/31)」など）、④ 変更されたファイルの一覧に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-08-diff-marked.png)

**赤い行は削除された行、緑の行は新しくできた行です。** `+7 −7` は、7行が増えて7行が削除されたという意味です。表の1行の末尾に列が増えると、Gitはその行を「消して書き直した」と数えます。そのため、やること表の7行が、赤と緑で1回ずつ表示されます。

このペインのおかげで、**「ほかの部分は直さないで」を守ったかどうかを目で確認**できます。表以外の行が赤や緑で出ていなければ、守られています。

::: tip Claudeが自分で判断した部分を確認しましょう
このガイドの実習では、Claudeが先に1つの判断を明かしました。振り返りにジュノの写真撮影は別に書かれていないけれど、投稿が3回とも上がっているので「進行中」と書いた、というものです。厳密にするなら「要確認」に変えればいい、という一言も添えていました。こうした説明が出てきたら、その判断が自分の基準に合っているかをもう一度確認します。基準と違えば、一言で直してもらえます。
:::

::: warning Gitの記録に残る名前
Gitは記録ごとに、**このコンピューターのGit設定に書かれた名前とメールアドレス**を一緒に残します。会社のコンピューターなら、会社のアカウントが入ることがあります。記録の画面をほかの人に見せたり、フォルダをアップロードしたりする前に確認してください。コンピューターにGitがなければ、公式サイト（git-scm.com）からインストールします。[^git]
:::

変更事項ペインは、ショートカット **Cmd+Shift+D** でも開閉できます。[^keys]

<Quiz id="ch403-changes" />

## セッション情報ペイン

③ のボタンを押すと、会話の横に**セッション情報ペイン**が開きます。このセッションがどこで動いているか、何を変えたか、コンテキストをどれだけ使ったかを、カードで見せてくれます。[^rail]

![セッション情報ペイン。① 環境（このコンピューター · 整理ツール · main）、② コンテキスト12%、③ 成果物（議事録ファイル）、④ 変更事項（+7 −7と「変更事項をコミット」ボタン）に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-09-rail-marked.png)

| 番号 | カード | 何を見るか |
|---|---|---|
| ① | 環境 | どこで（このコンピューター）、どのフォルダで作業しているか |
| ② | コンテキスト | このセッションが覚えられる量のうち、どれだけ使ったか |
| ③ | 成果物 | このセッションで作ったファイル |
| ④ | 変更事項 | 変更された行数。数字を押すと変更内容ペインが開く |

出典: カードの名前はこのガイドでの画面確認（2026-10-31）、役割は公式ドキュメント[^rail][^diff]

**コンテキスト**（Context）は、ステップ1で学んだ「AIが一度に見られる量」のことです（[ステップ1 第1章](../00-common/01-what-is-llm.md#_3-一度に見ることができる量に限界がある-—-「コンテキストウィンドウ」)）。いっぱいになると、Claudeがそれまでの会話を**自動で要約して、続きから作業します。**[^context] このガイドでは、こう勧めます。数字がかなり上がったセッションに新しい作業をつなげるより、新しい作業は新しいセッションで始めるほうがすっきりします。

④ の「変更事項をコミット」は、変更内容をGitに新しい記録として残すボタンです。記録と元に戻す方法は、[第4章](04-permissions-undo.md)で扱います。

<Quiz id="ch403-rail" />

## ファイルペイン — 作ったファイルを開いてみる

⑦ のファイルボタンを押すと、フォルダの一覧と一緒にファイルペインが開きます。一覧でファイルを押すと、中身が見られます。

![ファイルペイン。① 右側のフォルダ一覧（.claude、inbox、notesと、その中の議事録）、② 左に開かれた議事録に赤い番号が付いている](../../../guide/20-claude-code/assets/shot-10-files-marked.png)

- 会話に出てきた**ファイルパスを押しても**、そのファイルが開きます。[^files]
- このコンピューターで行うセッションなら、**ファイルペインで直接直すこともできます。** 直した内容は自動で保存されます。[^files]
- 一覧に `.claude` フォルダが見えることがあります。Claude Codeがこのフォルダ用の設定を置く場所で、第6章で扱います。

Claudeが作ったファイルは、**Finderやエクスプローラーなしでアプリの中ですぐに確認**できます。第2章で元のメモと見比べていた作業が、1つの画面でできるようになりました。

<Quiz id="ch403-files" />

## ターミナル・ブラウザのペインとショートカット

残りの2つのペインは、簡単に知っておくだけで十分です。

- **ターミナル**（④）: コマンドを直接打って実行するペインです。Claudeと同じフォルダで開きます。[^terminal] このステップでは使わなくても大丈夫です。ターミナルは第10章で扱います。
- **ブラウザ**（⑥）: アプリの中でウェブページを開くペインです。[^arrange]

よく使うショートカット（macOS）です。[^keys]

| ショートカット | できること |
|---|---|
| Cmd+Shift+D | 変更事項ペインを開閉する |
| Ctrl+\` | ターミナルペインを開閉する |
| Cmd+Shift+B | ブラウザペインを開閉する |
| Cmd+\\ | 今使っているペインを閉じる |
| Esc | Claudeの応答を止める |
| Cmd+Shift+M | 権限モードのメニューを開く |

出典: Claude Code公式ドキュメント[^keys]

## 自分でやってみよう

1. 第2章のセッション（または整理ツールフォルダで開いた新しいセッション）で、⑤ の変更事項ボタンを押してみる。Gitが必要という案内が出たら、上の依頼でClaudeにオンにしてもらう。
2. 議事録に「状態」列を入れる依頼を送り、変更事項ペインで**表以外の行が変わっていないか**を確認する。
3. ③ のセッション情報ペインを開いて、コンテキストの数字と変更された行数を見る。
4. ⑦ のファイルペインで議事録を開き、状態列が振り返りメモと合っているか確認する（電球・文房具・原価は完了、インスタは進行中）。

**続きの課題**: このガイドの結果（[3장-회의록-상태칸.txt](/practice/notes/results/3장-회의록-상태칸.txt)）と自分の結果を比べてみる。表の形が違っても、状態の値が振り返りと合っていればうまくできている。

## まとめ

- Codeタブは、会話の横に変更内容・ファイル・ターミナル・ブラウザのペインを開いて使う。セッションのタイトル行のボタンで開く。
- 変更内容を見るには、フォルダにGit（変更履歴）が必要。Claudeにオンにしてもらえばいい。
- 赤い行は削除した行、緑の行は新しい行。「ほかの部分は直さないで」を守ったかをここで確認する。
- セッション情報ペインで、環境・コンテキスト・成果物・変更された行数を見る。コンテキストがいっぱいになると、自動で要約して続きから作業する。
- ファイルペインで、作ったファイルをすぐ開いて確認し、直すこともできる。

## 用語整理

| 用語 | 読み方 | 一言での意味 |
|---|---|---|
| Pane | ペイン（枠） | Codeタブの中に開く1つのウィンドウ。会話・変更内容・ファイルなど |
| Diff | ディフ（変更内容） | 直す前と後を行単位で比べたもの |
| Git | ギット | ファイルがいつ、どのように変わったかを記録しておくツール |
| Commit | コミット | Gitに今の状態を記録として1つ残すこと |
| Context | コンテキスト | 1つのセッションでClaudeが一度に覚えていられる量 |
| Session rail | セッションレール（セッション情報ペイン） | 環境・コンテキスト・成果物・変更された行数を見せるペイン |

<ChapterDone :chapter="403" />

次の章: [第4章 許可と元に戻す方法](04-permissions-undo.md)

[^arrange]: Claude Code公式ドキュメント、「Desktop application」。"The Code tab is built around panes you can arrange in any layout: chat, diff, browser, terminal, file, plan, tasks, and subagent" / "Drag a pane by its header to reposition it, or drag a pane edge to resize it." / "To open another pane, click its icon button in the session's title bar. Hover to see each button's name, such as Terminal, Changes for the diff view, Browser, and Files." / "When the window is narrow: buttons that don't fit move into the menu" https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^sessions]: Claude Code公式ドキュメント、「Desktop application」。"Each session is an independent conversation with its own context and changes." / "To rename a session, open it and click the session title in the title bar." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^rail]: Claude Code公式ドキュメント、「Desktop application」。"The session details panel is a set of cards beside the chat that show where the session runs, what it changed, what it's running, and its context usage." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^diff]: Claude Code公式ドキュメント、「Desktop application」。"To open the diff view, click the line counts, such as +12 -1, in the Changes card of the session details panel." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^context]: Claude Code公式ドキュメント、「Desktop application」。"When context fills up, Claude automatically summarizes the conversation and continues working." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^files]: Claude Code公式ドキュメント、「Desktop application」。"To open a file Claude mentions, click its path in the chat." / "Local sessions: you can edit files inside the session's working directory" / "By default, your edits in the file pane save on their own" https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^terminal]: Claude Code公式ドキュメント、「Desktop application」。"The terminal opens in your session's working directory and shares the same environment as Claude" https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^keys]: Claude Code公式ドキュメント、「Desktop application」のショートカット表。"Toggle diff pane" / "Toggle Browser pane" / "Toggle terminal pane" / "Close focused pane" / "Stop Claude's response" / "Open permission mode menu" https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^git]: Claude Code公式ドキュメント、「Desktop application」のトラブルシューティング。"install Git" — 公式ドキュメントは、Gitが必要な機能（worktree）でGitのインストールを案内している。変更事項ペインがGitリポジトリを要求することは、このガイドでの画面確認（2026-10-31）。 https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
