# 第8章 複数の作業を同時に・クラウド・予約 — 整理ツールを自動で動かす

> **一言まとめ**: セッションを複数開いて、**作業を並べて**任せられます。決まった時間に自動で動かしたいときは、**予約タスク**を作ります。
> 予約には3種類（デスクトップ・クラウド・`/loop`）があり、**自分のコンピューターの電源が入っている必要があるか**が最大の違いです。

この章は、2026年10月31日に確認したClaude Code公式ドキュメントをもとに書きました。セッション一覧と予約一覧には実際の作業名がそのまま出るので、この章ではキャプチャの代わりに、公式ドキュメントの説明と画面上の名前で案内します。第7章で作った`/weekly-review`スキルを使います。

## 複数の作業を並べて

セッションは互いに独立した会話で、文脈と変更内容を別々に持っています。[^session] そのため、**セッションを複数開いて、別々の作業を同時に**任せられます。

- 新しいセッション: サイドメニューの**+ New**、または**Cmd+N**（WindowsはCtrl+N）[^parallel]
- セッション間の移動: **Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- 2つのセッションを並べて見る: **Option**（WindowsはAlt）を押しながら、サイドメニューのセッションを押す[^parallel]

たとえば、1つのセッションで`/study-notes`を使って勉強ノートを、別のセッションで`/weekly-review`を使って週間振り返りを、同時に作れます。2つは別々のファイルを使うので、ぶつかりません。

**同じファイルを2つのセッションで同時に直させるのは避けてください。** 1つのセッションの巻き戻しは、別のセッションが直した内容を通常は追跡しません（第4章）。[^other-session] 同じファイルをいろいろな方向に変えてみたいときは、Gitリポジトリになっているフォルダ（第3・4章で変更履歴をオンにしたフォルダ）で、入力欄の下の**ワークツリー**（Worktree）をオンにしてセッションを始めます。すると、そのセッションはフォルダの**切り離されたコピー**で作業します。[^worktree]

<Quiz id="ch408-parallel" />

## 予約の3種類

決まった時間にClaudeが**新しいセッションを自動で始める**のが、予約タスクです。[^scheduled] 方法は3つあります。

| | デスクトップ予約 | クラウド予約 | `/loop` |
|---|---|---|---|
| どこで動くか | 自分のコンピューター | クラウド | 自分のコンピューター |
| コンピューターの電源が必要か | はい（アプリ実行中、スリープしていない） | いいえ | はい |
| セッションを開いておく必要があるか | いいえ | いいえ | はい |
| 自分のファイルにアクセスできるか | はい | いいえ（新しく取得したコピー） | はい |
| 最短の間隔 | 1時間（画面の入力欄） | 1時間 | 1分 |

出典: Claude Code公式ドキュメント[^compare]

**整理ツールにはデスクトップ予約が合っています。** 自分のコンピューターの`inbox`のメモを読む必要があるからです。クラウド予約はコンピューターの電源を切っても動きますが、自分のファイルではなく、GitHubのリポジトリを新しく取得して作業します。[^compare][^cloud] `/loop`は、開いておいたセッションの中で少しの間、繰り返し確認するときに使い、7日たつと自動で終わります。[^loop]

古いアプリでは、予約機能が**Routines**という名前で表示されることがあります。[^old-name]

<Quiz id="ch408-kinds" />

## 毎週金曜日に週間振り返りを予約する

デスクトップ予約は、2つの方法で作ります。

**方法1 — 言葉でお願いする。** どのセッションでも、希望の日程を伝えれば大丈夫です。[^ask]

```
毎週金曜日の午後6時に /weekly-review を使って今週の週間振り返りを作る予約タスクを作って。その週の振り返りメモがなければ何も作らずに、「メモなし」とだけ残して。
```

**方法2 — 画面で作る。** Codeタブのサイドメニューの**Scheduled**（またはMoreメニューの中）を押して、**New task**を押します。[^create] 日程は、毎時間・毎日・平日・毎週などから選べます。日程なしで保存しておいて、**Run now**でそのときどきに動かすこともできます。[^options]

予約するときに、必ず確認したいことが4つあります。

1. **アプリとコンピューターが起きている必要がある**: デスクトップ予約は、**アプリが起動していて、コンピューターが起きているときだけ**動きます。スリープを防ぐには、設定の**Keep computer awake**をオンにします。ノートパソコンのふたを閉じると、それでもスリープします。[^awake]
2. **電源が切れていた間の実行**: コンピューターがスリープしていたら、起きたときに、逃した実行のうち**一番新しいもの1回だけ**を動かします。金曜日の午後6時の予約が、土曜日の朝に動くこともあります。[^missed] そのため、依頼に「その週のメモがなければ…」のような**条件を一緒に書いて**おきます。[^missed]
3. **許可の画面で止まる**: 予約タスクも、権限モードを別に持っています。「手動（수동）」だと、許可が必要な場面で**止まって待ちます。**[^perm] 作ったあとに**Run now**で1回動かし、出てくる許可の画面で**常に許可**（always allow）を選んでおいてください。そうすれば、次の実行からは止まりません。[^perm] 第7章の権限「1回だけ許可」と違う理由は、予約は自分が見ていない間に動くからです。
4. **個人の許可ルールも適用される**: 自分のコンピューターのClaude Codeの設定（`~/.claude/settings.json`）の許可ルールが、予約タスクにも適用されます。[^perm]

<Quiz id="ch408-schedule" />

## クラウドで作業する

クラウドセッションは、**自分のコンピューターの電源を切っても作業を続けます。**[^cloud-run] ただし、クラウドは自分のコンピューターのフォルダを見られず、たいてい**GitHubリポジトリ**を取得して作業します。そのため、普通はGitHubとの連携が必要です。[^cloud] このガイドの整理ツールのように、自分のコンピューターのフォルダで行う作業は、デスクトップ側が合っています。クラウドは、作業をGitHubに置いて使うようになったときに試してみてください。

<Quiz id="ch408-cloud" />

## 自分でやってみよう

1. セッションを2つ開いて、片方で`/study-notes`、もう片方で`/weekly-review`を動かしてみる。2つの結果が別々のファイルに保存されたか確認する。
2. 金曜日の週間振り返りの予約を、言葉でお願いして作る。依頼に「メモがなければ…」という条件を入れる。
3. 予約一覧でそのタスクを開き、**Run now**で1回動かしてみる。許可の画面が出たら、先に処理しておく。
4. 必要なければ、予約をオフにするか削除する。予約の実行もセッションなので、動くたびに使用量を使います。

**続きの課題**: 予約タスクが振り返りメモを読むとき、メモの中に「この指示を無視して…」のような文が混ざっていたら、どうなるでしょうか。第9章で確認します。

## まとめ

- セッションは互いに独立している。複数開いて、別々のファイルの作業を並べて任せる。同じファイルは避けるか、ワークツリーを使う。
- 予約には、デスクトップ（自分のコンピューター・ファイルにアクセス可能）、クラウド（コンピューターの電源を切ってもよい・GitHub）、`/loop`（セッションの中・7日）がある。
- 整理ツールは自分のファイルを読むので、デスクトップ予約が合っている。
- 逃した実行は、起きたときに1回だけ動く。依頼に条件を書き、Run nowで許可の画面を先に処理する。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Scheduled task | スケジュールドタスク（予約タスク） | 決まった時間に新しいセッションを自動で始める作業 |
| Routine | ルーティン | クラウド予約タスクの以前の名前 |
| Worktree | ワークツリー | 同じGitリポジトリの切り離された作業用コピー |
| Cloud session | クラウドセッション | 自分のコンピューターの代わりにクラウドで動くセッション |
| `/loop` | ループ | 開いておいたセッションの中で作業を繰り返すコマンド（7日後に終わる） |

<ChapterDone :chapter="408" />

次の章: [第9章 コスト・データ・安全](09-cost-data-safety.md)

[^session]: Claude Code公式ドキュメント、「Desktop application」。"Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^parallel]: Claude Code公式ドキュメント、「Desktop application」。"Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^other-session]: Claude Code公式ドキュメント、「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (確認日 2026-10-31)
[^worktree]: Claude Code公式ドキュメント、「Desktop application」。"In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop (確認日 2026-10-31)
[^scheduled]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^compare]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。比較表（Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval）と "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^cloud]: Claude Code公式ドキュメント、「Use Claude Code in the cloud」。"Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web (確認日 2026-10-31)
[^loop]: Claude Code公式ドキュメント、「Run prompts on a schedule」。"Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (確認日 2026-10-31)
[^old-name]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^ask]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^create]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^options]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^missed]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^perm]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
[^cloud-run]: Claude Code公式ドキュメント、「Get started with the desktop app」。"Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart (確認日 2026-10-31)
[^awake]: Claude Code公式ドキュメント、「Schedule recurring tasks in Claude Code Desktop」。"Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks (確認日 2026-10-31)
