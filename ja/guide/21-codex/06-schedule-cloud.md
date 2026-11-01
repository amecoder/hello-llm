# 第6章 予約・クラウド・スマートフォン — 決まった時間に自動で、席を外していても

> **一言まとめ**: 毎週同じ仕事は**予約**（Scheduled）で動かします。自分のフォルダを使う予約は、**パソコンが起動していて、アプリが実行中**のときだけ動きます。
> クラウドはGitHubのリポジトリがある人向けで、スマートフォンは自分のパソコンを操作するリモコンのように使います。

この章は、2026年11月1日に確認したCodexの公式ドキュメントをもとに書きました。このガイドでは、予約を実際には保存していません。実際の作業内容が見えてしまううえ、使用量を使うからです（[Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)と同じ理由です）。

## 予約で毎週の振り返りを動かす

予約タスクは、くり返す仕事を決めておいて、裏で動かす機能です。[^schedule] アプリのサイドバーにある**Scheduled**で、予約と実行の履歴をすべて見られます。[^inbox]

予約はデスクトップアプリかウェブで作ります。ターミナル（Codex CLI）には、予約を管理する画面がありません。[^no-cli] 予約も、会話で作ります。[^chat-create] 予約の中で `$スキル名` と書いて、スキルを呼び出すこともできます。[^skill] 第5章のスキルを使うなら、こうお願いできます。

```
毎週金曜日の午後6時に $weekly-review で、その週の週間振り返りをnotesフォルダに作って。
```

**条件があります。** 自分のパソコンのフォルダを使う予約は、パソコンが起動していて、アプリが実行中のときだけ動きます。[^awake] macOS・Linuxにある**Prevent sleep while running**の設定は、会話が**動いているあいだ**パソコンがスリープしないようにして、席を外していても会話が続くようにします。[^sleep] 予約の時刻までパソコンを起こしておく機能ではないので、予約を使うなら、パソコンの省電力の設定を別に確認してください。

予約は**人がいない状態**で動きます。そのため、自分のデフォルトの柵（サンドボックス）の範囲はそのまま使いつつ、組織が禁止していなければ、**許可を求めない方式**で動きます。[^unattended] 柵の外の作業は、聞く相手がいないので、失敗すると考えてください。

| 自分のデフォルトの権限（柵） | 予約で起きること |
|---|---|
| 読み取りのみ | ファイルを書く必要がある予約は失敗 |
| フォルダ内への書き込み | 整理ツールのように、フォルダの中でだけ書く作業は動く |
| Full access | 確認せずに、ファイル・コマンド・インターネットまで使う。危険 |

出典: Codex公式ドキュメント（一部のみ抜粋。真ん中の行はこのガイドのまとめ）[^modes]

第4章の権限メニューでいうと、Ask for approvalとApprove for meは真ん中の行（フォルダ内への書き込み）の柵を、Full accessは最後の行を使います。[^ask] ただし、予約ではAsk for approvalでも**確認されません。** 「読み取りのみ」は、メニューには別の項目として表示されないことがある設定です。

予約を作る前に、**同じ依頼をふだんの会話で先に動かしてみましょう。** 第5章のように、結果を元のメモと照らし合わせて、問題がなければ予約に移します。最初の数回の実行結果も、必ず確認します。公式ドキュメントも、同じ順番をすすめています。[^test]

<Quiz id="ch506-schedule" />

## クラウドは何が違うか

クラウドのタスクは、インターネットの向こうにある作業スペースで動くので、自分のパソコンがスリープしているあいだも続きます。[^cloud] そのかわり、条件があります。

- 自分が使える**公開済みの環境**（published environment）が必要です。[^env]
- 環境を作るには、**GitHubのリポジトリ**を選んで接続します。[^github]
- 自分のパソコンのファイル、実行中のプログラム、ブラウザのログイン情報は、クラウドには移りません。[^not-moved]

整理ツールのフォルダは自分のパソコンにしかないので、このガイドではクラウドを使いません。仕事でGitHubを使っているなら、時間のかかる仕事をクラウドに送って、パソコンの電源を切ってもよい、という点だけ覚えておいてください。

<Quiz id="ch506-cloud" />

## スマートフォンから続きを見る

スマートフォンでは、進み具合を見たり、許可を出したり、指示を送ったりできます。実際の作業は、クラウドか**つないだ自分のパソコン**で動きます。[^mobile] 自分のパソコンをつなぐには、アプリの**Settings → Connections → Control this Mac or PC**で、**Set up**を押します。[^connect]

接続はQRコードで行います。公式ドキュメントは、**自分のもので、信頼できる機器だけ**をつなぐように言っています。[^trust] つないだスマートフォンは、自分のパソコンのCodexを動かせるからです。

公式ドキュメントは、iOSアプリを基準に説明しています。機能はアカウントごとに順番に開放されるので、自分のスマートフォンにはまだないことがあります。[^rollout]

<Quiz id="ch506-mobile" />

## 自分でやってみよう

1. サイドバーで**Scheduled**を開いてみる（作らなくてもよい）。
2. 第5章の `$weekly-review` を、ふだんの会話でもう一度動かして、結果を確認する。
3. 予約を作るなら、仕事がフォルダの中で終わるかを確認し、最初の実行結果を元のメモと照らし合わせる。

**続きの課題**: 第7章では、同じ整理ツールを、ターミナルの `codex exec` の1行で確認します。

## まとめ

- 予約は会話で作り、Scheduledで見る。`$スキル` を予約の中で呼び出せる。
- 自分のフォルダを使う予約は、パソコンが起動していて、アプリが実行中でなければならない。
- 予約は人がいない状態で動くので、デフォルトの権限をそのまま使う。Full accessは危険。
- クラウドには、GitHubのリポジトリと公開済みの環境が必要。自分のファイルは移らない。
- スマートフォンは、自分のパソコンやクラウドを操作する。信頼できる機器だけをつなぐ。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Scheduled | スケジュールド | 予約タスクと実行の履歴を見る場所 |
| Published environment | パブリッシュド・エンバイロンメント | クラウドのタスクが始まる、準備済みの作業スペース |
| Unattended | アンアテンディッド | 人が見ていない状態で実行すること |

<ChapterDone :chapter="506" />

次の章: [第7章 ターミナルで使う](07-terminal.md)

[^schedule]: Codex 公式ドキュメント、「Scheduled tasks」。"Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^inbox]: Codex 公式ドキュメント、「Scheduled tasks」。"Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^chat-create]: Codex 公式ドキュメント、「Scheduled tasks」。"You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^skill]: Codex 公式ドキュメント、「Scheduled tasks」。"In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^awake]: Codex 公式ドキュメント、「Scheduled tasks」。"Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^sleep]: Codex 公式ドキュメント、「Settings」。"On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings (確認日 2026-11-01)
[^unattended]: Codex 公式ドキュメント、「Scheduled tasks」。"Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^modes]: Codex 公式ドキュメント、「Scheduled tasks」。"If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^test]: Codex 公式ドキュメント、「Scheduled tasks」。"Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
[^cloud]: Codex 公式ドキュメント、「Codex Cloud」。"Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (確認日 2026-11-01)
[^env]: Codex 公式ドキュメント、「Codex environments」。"A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes (確認日 2026-11-01)
[^github]: Codex 公式ドキュメント、「Codex Cloud」。"Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud (確認日 2026-11-01)
[^not-moved]: Codex 公式ドキュメント、「Codex environments」。"Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (確認日 2026-11-01)
[^mobile]: Codex 公式ドキュメント、「Codex on mobile」。"Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile (確認日 2026-11-01)
[^connect]: Codex 公式ドキュメント、「Codex on mobile」。"Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile (確認日 2026-11-01)
[^trust]: Codex 公式ドキュメント、「Codex on mobile」。"Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile (確認日 2026-11-01)
[^rollout]: Codex 公式ドキュメント、「Codex on mobile」。"Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile (確認日 2026-11-01)
[^ask]: Codex 公式ドキュメント、「Permissions」。"For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (確認日 2026-11-01)
[^no-cli]: Codex 公式ドキュメント、「Scheduled tasks」。"Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations (確認日 2026-11-01)
