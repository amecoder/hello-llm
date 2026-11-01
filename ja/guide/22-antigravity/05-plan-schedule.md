# 第5章 プラン・予約・ブラウザ・ゴール — スラッシュコマンドで仕事を任せる

> **一言まとめ**: `/plan` は直す前にまず計画を出すコマンドです。`/schedule` は**この会話の中でだけ**動くタイマーで、会話をまたいで動き続ける予約は **Automations** です。
> `/browser` はChromeを動かしてウェブの作業をし、`/goal` は終わるまで止まりません。どちらも使用量を多く使うことがあります。

この章は、2026年11月1日に確認したAntigravityの公式ドキュメントをもとに書きました。このガイドでは、予約を実際には保存していません。実際の作業内容が見えてしまううえ、使用量を使うからです（[Claude Code 第8章](../20-claude-code/08-parallel-cloud-schedule.md)と同じ理由です）。

## まず計画をもらう — `/plan`

ふつうの依頼は、すぐにファイルを直し始めます。`/plan` を使うと、先にフォルダを調べて、決める点を整理して見せてくれます。[^plan] 計画がよければ **Proceed** を押して、実行に進みます。[^proceed]

```
/plan 議事録・勉強ノート・週間振り返りの様式に「作成日」の欄を入れたい。何を変える必要があるか、計画だけ先に見せて。
```

要件がまだぼんやりしているときは、`/grill-me` が役に立ちます。始める前に、**1回に1つずつ**、おすすめの答えといっしょに質問してくれます。[^grill] Claude Code 第5章で学んだ「上手な任せ方」を、ツールが代わりに引き出してくれるようなものです。

<Quiz id="ch605-plan" />

## 予約 — `/schedule` とAutomations

Antigravityには、予約が**2種類**あります。

| | `/schedule` | Automations |
|---|---|---|
| 置かれる場所 | 作った会話の中 | 会話の外（アプリのサイドバー） |
| どのくらい続く？ | その会話のあいだ | アプリを開き直しても続く |
| 毎回 | 同じ会話を呼び起こす | 新しい会話として始まる |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^compare]

`/schedule` は、一度だけ鳴るタイマーや繰り返しの予定を作り、待っているあいだも会話を止めません。[^schedule] ただし、その会話に属しているので、**毎週金曜日の週間振り返り**のようにずっと動かしたい仕事には、**Automations** を使います。[^scoped]

Automationsは、席を外しているあいだも、決めておいた日程に合わせてエージェントにメッセージを送ります。[^automations] アプリのサイドバーにある**Automations**から開きます。いくつか知っておきましょう。

- 実行ごとにモデルの等級（Flash Lite・Flash・Pro）を選びます。デフォルトはFlashです。[^tier]
- ぴったりの分には動きません。間隔の10%まで、最大15分ずれて動きます。[^jitter]
- **Run Now** ですぐに一度動かしてみたり、**Create with Prompt** でエージェントと話しながら作ったりできます。[^run-now]

エージェントが作業しているあいだは、パソコンがスリープしないようにしてくれます。[^sleep] ただし、**アプリが閉じているときや、パソコンがスリープしているあいだにもAutomationsが動くのかどうかは、公式ドキュメントには書かれていません。** Claude CodeやCodexのデスクトップ版の予約と同じように、アプリを開いたままにして、パソコンを起こしておくほうが安全です（このガイドからのすすめです）。

予約を作る前に、同じ依頼をふだんの会話で先に動かしてみて、Run Nowで一度試してから、日程を設定してください。

<Quiz id="ch605-schedule" />

## ブラウザとゴール — `/browser`・`/goal`

`/browser` は、ウェブの作業を**ブラウザ担当のサブエージェント**に任せます。このサブエージェントがGoogle Chromeを動かして、ページを開き、クリックし、画面を撮影します。[^browser] ブラウザのセッションはすべて**動画として録画**され、成果物に残ります。[^recorded] ページ内でスクリプトを実行する動作は、デフォルトで許可を求められます。[^js]

`/goal` は、目標をすべて達成するまで、途中で止まらずに作業させます。[^goal] 繰り返しの回数に上限がないので、終わったと判断するか、自分が止めるまで動き続けます。[^no-cap] そのぶん使用量を多く使うことがあるので、**「終わった」の基準をはっきり**書いておきましょう。たとえば、こんなふうにします。

```
/goal inboxのメモ6個をすべて様式どおりにnotesへ整理して。終わったと言える基準: メモごとに結果のファイルが1つずつあり、各ファイルの一番下に「原本と照らし合わせること」の節がある。
```

ゴールモードが変えるのは、**止まり方だけ**です。権限やレビューの設定はそのままなので、ふだん確認されていた作業は、これまでどおり確認されます。[^goal-perm]

<Quiz id="ch605-browser-goal" />

## 別の機器から続きを見る

アプリの **Settings → Application → Enable Remote Control** をオンにすると、別の機器のウェブブラウザから、自分のパソコンのAntigravityを操作できます。[^remote][^any-browser] 別の機器でも、**デスクトップと同じGoogleアカウント**でログインします。[^same-account]

リモートで使っても、作業は**自分のパソコン**のファイル・ツール・ログイン情報で行われます。[^local] 便利なぶん、リモート操作は信頼できる機器でだけオンにしてください。

<Quiz id="ch605-remote" />

## 自分でやってみよう

1. `/plan` で、上の「作成日」の欄の計画だけをもらい、Proceedを押す前に計画を読む。
2. サイドバーのAutomationsを開いてみる（作らなくてもよい）。
3. 予約を作るなら、まずふだんの会話とRun Nowで試す。
4. `/goal` を使うなら、「終わった基準」もいっしょに書く。

**続きの課題**: 第6章では、ターミナルの `agy` で同じ整理ツールを確認し、このガイドが実際に出会った落とし穴を見ます。

## まとめ

- `/plan` はまず計画、`/grill-me` は1回に1つずつ質問して要件を引き出す。
- `/schedule` はその会話の中だけ。ずっと動かしたい仕事にはAutomations。
- アプリが閉じているときもAutomationsが動くのかは、ドキュメントに書かれていない。アプリを開いたままにして、パソコンを起こしておくほうが安全。
- `/browser` はChromeを動かして録画する。`/goal` は止まらないので、完了の基準を渡す。
- リモート操作は同じアカウントで行い、作業は自分のパソコンで行われる。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Automations | オートメーションズ | 会話をまたいで動き続ける予約 |
| Subagent | サブエージェント | メインのエージェントが仕事を分けて任せる、補助のエージェント |
| Remote Control | リモート・コントロール | 別の機器から自分のパソコンのAntigravityを操作すること |

<ChapterDone :chapter="605" />

次の章: [第6章 ターミナルで使う](06-terminal.md)

[^plan]: Antigravity 公式ドキュメント、「Plan (/plan)」。"While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan (確認日 2026-11-01)
[^proceed]: Antigravity 公式ドキュメント、「Plan (/plan)」。"**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan (確認日 2026-11-01)
[^grill]: Antigravity 公式ドキュメント、「Slash commands overview」。"The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands (確認日 2026-11-01)
[^compare]: Antigravity 公式ドキュメント、「Schedule command (/schedule)」。"| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule (確認日 2026-11-01)
[^schedule]: Antigravity 公式ドキュメント、「Schedule command (/schedule)」。"Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule (確認日 2026-11-01)
[^scoped]: Antigravity 公式ドキュメント、「Schedule command (/schedule)」。"**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule (確認日 2026-11-01)
[^automations]: Antigravity 公式ドキュメント、「Antigravity features」。"Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features (確認日 2026-11-01)
[^tier]: Antigravity 公式ドキュメント、「Antigravity features」。"**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features (確認日 2026-11-01)
[^jitter]: Antigravity 公式ドキュメント、「Antigravity features」。"Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features (確認日 2026-11-01)
[^run-now]: Antigravity 公式ドキュメント、「Antigravity features」。"**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features (確認日 2026-11-01)
[^sleep]: Antigravity 公式ドキュメント、「FAQ」。"If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq (確認日 2026-11-01)
[^browser]: Antigravity 公式ドキュメント、「Browser command (/browser)」。"Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser (確認日 2026-11-01)
[^recorded]: Antigravity 公式ドキュメント、「Browser command (/browser)」。"**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser (確認日 2026-11-01)
[^js]: Antigravity 公式ドキュメント、「Browser command (/browser)」。"Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser (確認日 2026-11-01)
[^goal]: Antigravity 公式ドキュメント、「Goal command (/goal)」。"The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal (確認日 2026-11-01)
[^no-cap]: Antigravity 公式ドキュメント、「Goal command (/goal)」。"**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal (確認日 2026-11-01)
[^goal-perm]: Antigravity 公式ドキュメント、「Goal command (/goal)」。"Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal (確認日 2026-11-01)
[^remote]: Antigravity 公式ドキュメント、「Antigravity features」。"In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features (確認日 2026-11-01)
[^same-account]: Antigravity 公式ドキュメント、「Remote Control」。"Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control (確認日 2026-11-01)
[^local]: Antigravity 公式ドキュメント、「Antigravity features」。"**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features (確認日 2026-11-01)
[^any-browser]: Antigravity 公式ドキュメント、「Remote Control」。"Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control (確認日 2026-11-01)
