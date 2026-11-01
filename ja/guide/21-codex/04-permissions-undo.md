# 4章. 権限と元に戻す方法 — 何を任せて、どう元に戻すか

> **一言まとめ**: 入力欄の下の **権限メニュー** で、Codexが1人でしてよいことと、聞いてほしいことを決めます。最初は **Ask for approval** から始めましょう。
> 元に戻すのは **Git** で行います。Claude Codeの巻き戻しのような機能は、公式ドキュメントでは見つかりませんでした。だから、仕事を任せる前後に記録（コミット）を残しておく習慣のほうが大切です。

この章は、2026年11月1日に確認したCodexの公式ドキュメントと、このガイドの実習をもとに書きました。権限がなぜ必要なのかは、[Claude Code 4章](../20-claude-code/04-permissions-undo.md)で説明しました。

## 権限メニューの3つ

権限メニューは **入力欄の下** にあります。[^menu] このガイドの画面では、最初から **Ask for approval** が選ばれていました。すべてのアカウントで最初の値が同じかどうかは確認できていません。メニューには、次のような名前が入ることがあります。[^names]

| 画面の名前 | 役割 | どんなとき |
|---|---|---|
| Ask for approval | フォルダの中では自分で進め、外に出る前に聞く | ほとんどの仕事 |
| Approve for me | 聞く代わりに自動レビューが判断する | 慣れてから |
| Full access | 制限なしで実行する | ほとんど使わない |

出典: Codex公式ドキュメント（一部のみ抜粋）[^names]

公式ドキュメントは、**ほとんどの仕事はAsk for approvalから始めるように**と言っています。[^start] Claude Codeの「手動」よりは、一歩だけ多く任せる方式です（このガイドの比較）。フォルダの **中** のファイルは、聞かずに直します。

**Approve for me** を選んでも、Codexにできる範囲は広がりません。変わるのは「誰が許可するか」だけです。[^same-box] 自動レビューはモデルをもう一度呼び出すので、使用量が増えることがあります。[^extra]

**Full access** は、ファイルとインターネットの境界をすべて取り払います。公式ドキュメントも、本当にすべてを任せたいときだけ使うように言っています。[^full] メモの整理には必要ありません。

メニューに表示されているからといって、選ばれているわけではありません。会話ごとに **いま何が選ばれているか** を確認してください。[^check]

<Quiz id="ch504-modes" />

## 柵と許可

権限は、2つの仕組みで動いています。[^two]

- **柵**（サンドボックス、Sandbox）: どのファイルやインターネットに手を出せるか
- **許可**（Approval）: いつ止まって聞くか

初期状態のCodexは **インターネットが切れたまま** 作業し、柵は通常、作業フォルダまでです。[^default] フォルダの外のファイルを直したり、インターネットに接続したりするには、許可が必要です。[^auto]

**フォルダの中でも守られている場所** があります。作業フォルダの中の `.git`・`.agents`・`.codex` フォルダは、初期状態では読み取りだけができます。[^protected] `.git` はGitの記録が入る場所なので、Codexに会話で「記録して」と頼むと、許可を聞かれたり、止められたりすることがあります。5章でスキルを入れる `.agents` フォルダもここに含まれます。

このガイドでも実際に止められました。ターミナルでスキルを `.agents/skills` にコピーしてほしいと頼むと、Codexは「`.agents` のパスが読み取り専用なのでコピーがブロックされた」と答え、自分で入力するコマンドを2行教えてくれました。止められた理由と代わりの方法を一緒に教えてもらえたので、何を許可するかを自分で判断できました。

<Quiz id="ch504-sandbox" />

## 変更内容を見る

Codexは、変更された内容を **レビューウィンドウ**（review pane）で見せてくれます。Claude Codeの「変更内容」欄にあたります。レビューウィンドウも、Gitリポジトリ（Gitで管理しているフォルダ）の中でしか開きません。[^review-git]

レビューウィンドウには、**Codexが直したものだけが入っているわけではありません。** 自分で直したもの、まだ記録していない別の変更まで、すべて表示されます。[^includes] だから、仕事を任せる前にそこまでの変更を記録（コミット）しておくと、レビューウィンドウにはCodexの変更だけが残って見やすくなります。

レビューウィンドウの上で、見る範囲を選べます。初期値はまだ記録していない変更（**Unstaged**）で、**Last turn** を選ぶと、Codexの直前の回答1回で変わったものだけを見られます。[^views] 最初はLast turnのほうがわかりやすいです。

気に入らない行があれば、その行に意見を付けられます。行にマウスを重ねて **+** を押し、意見を書いてから、入力欄に「行の意見のとおりに直して」のように送ればOKです。[^comments]

<Quiz id="ch504-review" />

## 元に戻す — Gitで

レビューウィンドウから、そのまま元に戻せます。[^revert]

| 単位 | どこで |
|---|---|
| 全体 | レビューウィンドウの上のほうにあるRevert all |
| ファイル1つ | そのファイルの元に戻す操作（revert） |
| かたまり1つ | そのかたまり（hunk）の元に戻す操作 |

出典: Codex公式ドキュメント（一部のみ抜粋）[^revert]

**Revert allには気をつけてください。** レビューウィンドウには自分で直したものまで入っているので、全部を元に戻すと、自分の変更も消えることがあります。[^includes] 一部だけ捨てたいときは、ファイルやかたまりの単位で元に戻します。

Claude Codeには、会話を前の状態に巻き戻す機能がありました（[Claude Code 4章](../20-claude-code/04-permissions-undo.md)）。**Codexの公式ドキュメントでは、同じ機能は見つかりませんでした。** 公式ドキュメントは、代わりに **仕事の前後にGitの記録を残す** ように言っています。[^checkpoint] こまめに記録しておけば、少しずつ元に戻せます。[^often]

そこで、この段階では次の順番を習慣にします。

1. 任せる前: アプリのGit機能（コミット）で、いまの状態を記録する。[^commit]
2. 任せる。
3. レビューウィンドウでLast turnを選び、変わったところだけを見る。
4. よければもう一度記録し、そうでなければ元に戻す。

会話で「記録して」と頼んでもかまいませんが、先ほど見たとおり `.git` は保護されたフォルダなので、許可を聞かれることがあります。聞かれたら「Gitの記録を残すだけの作業」かどうかを確かめてから、許可してください。

大きな仕事は、直す前に計画から出してもらいましょう。入力欄に `/plan` と書くと、Codexがまず調べてから、進め方を提案してくれます。[^plan] Claude Code 5章の「計画」モードと同じ役割です。

<Quiz id="ch504-undo" />

## やってみよう

1. 入力欄の下の権限メニューを開いて、何が選ばれているかを見る。Ask for approvalでなければ変える。
2. アプリのGit機能（または会話で頼んでから許可する）で、いまの状態を記録する。
3. 2章の議事録に「一番上に『作成日: 今日の日付』を1行追加して」と頼む。
4. レビューウィンドウをLast turnにして、変わった行を確認する。
5. そのファイルだけを元に戻してみる。

**続けての課題**: 5章では、Claude Codeで作ったスキル3つをCodexに移し、`$weekly-review` の1行で週の振り返りを作ります。

## まとめ

- 権限メニューは入力欄の下にある。最初はAsk for approvalから始める。
- Approve for meは、許可する側だけを変える。範囲は広がらない。
- 初期状態はインターネットがオフで、柵は作業フォルダ。`.git`・`.agents`・`.codex` は、フォルダの中でも守られている。
- レビューウィンドウは自分の変更まで見せる。任せる前に記録しておき、Last turnで見る。
- 巻き戻しの代わりにGitで元に戻す。任せる前後に記録を残す。

## 用語整理

| 用語 | 読み方 | 一言で言うと |
|---|---|---|
| Sandbox | サンドボックス | Codexが手を出せる範囲を囲む柵 |
| Approval | アプルーバル | 柵を越える前にもらう許可 |
| Review pane | レビューペイン | 変更された内容を見せるウィンドウ |
| Revert | リバート | 変更された内容を元に戻すこと |
| Commit | コミット | いまの状態をGitに記録すること |

<ChapterDone :chapter="504" />

次の章: [5章. スキルを移す](05-skills.md)

[^menu]: Codex公式ドキュメント、「Permissions」。"Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes （確認日 2026-11-01）
[^names]: Codex公式ドキュメント、「Sandbox」。"Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing （確認日 2026-11-01）
[^start]: Codex公式ドキュメント、「Permissions」。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes （確認日 2026-11-01）
[^same-box]: Codex公式ドキュメント、「Permissions」。"Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes （確認日 2026-11-01）
[^extra]: Codex公式ドキュメント、「Agent approvals & security」。"Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^full]: Codex公式ドキュメント、「Sandbox」。"This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing （確認日 2026-11-01）
[^check]: Codex公式ドキュメント、「Permissions」。"Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes （確認日 2026-11-01）
[^two]: Codex公式ドキュメント、「Permissions」。"The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes （確認日 2026-11-01）
[^default]: Codex公式ドキュメント、「Agent approvals & security」。"By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^auto]: Codex公式ドキュメント、「Agent approvals & security」。"Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^protected]: Codex公式ドキュメント、「Agent approvals & security」。"`<writable_root>/.git` is protected as read-only whether it appears as a directory or file." / "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "`<writable_root>/.codex` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^review-git]: Codex公式ドキュメント、「Code review」。"The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review （確認日 2026-11-01）
[^includes]: Codex公式ドキュメント、「Code review」。"It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review （確認日 2026-11-01）
[^views]: Codex公式ドキュメント、「Code review」。"By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review （確認日 2026-11-01）
[^comments]: Codex公式ドキュメント、「Code review」。"Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review （確認日 2026-11-01）
[^revert]: Codex公式ドキュメント、「Code review」。"**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review （確認日 2026-11-01）
[^checkpoint]: Codex公式ドキュメント、「Codex CLI」。"Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli （確認日 2026-11-01）
[^often]: Codex公式ドキュメント、「Agent approvals & security」。"Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^plan]: Codex公式ドキュメント、「Prompting」。"For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting （確認日 2026-11-01）
[^commit]: Codex公式ドキュメント、「Local environments」。"You can stage or revert individual chunks, stage or revert entire files, commit changes, push a branch, and create a pull request without leaving the app." https://learn.chatgpt.com/docs/environments/local-environment （確認日 2026-11-01）
