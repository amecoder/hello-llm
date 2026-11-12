# 2章. アプリのインストールと最初の整理 — フォルダをプロジェクトとして開く

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: Antigravityアプリをインストールし、Googleアカウントでログインしたら、整理ツールのフォルダを **プロジェクト** として開きます。
> 最初は **Planning mode**（先に計画）で任せ、計画を読んでから **Proceed** で進めます。

このガイドは、まだアプリの画面では実習できていません。画面のボタンの名前は、公式ドキュメントの英語名をそのまま書きました。自分の画面と少し違っても大丈夫です。名前の似たボタンを探して、まねしてみてください。実際に動かしてみた結果は、3章（ターミナルで実行）にあります。[^tested]

## インストールしてログインする

1. [antigravity.google/download](https://antigravity.google/download)から、自分のパソコン用のインストールファイルをダウンロードします。macOSなら `Antigravity.dmg` を開いて、**Applications** フォルダにドラッグして入れます。[^dmg]
2. アプリを開いて **Sign in** を押します。ブラウザが開いたら、個人のGoogleアカウントでログインします。[^signin]

ログインしたアカウントのプラン（無料・Pro・Ultra）によって、使用量とモデルが決まります（[1章](01-what-is.md)）。

<Quiz id="ch602-install" />

## フォルダをプロジェクトとして開く

Antigravityアプリのエージェントは、**プロジェクト**（Projects）の中で作業します。プロジェクトは、エージェントが手を出せるフォルダの範囲と権限を決めます。[^projects]

1. 左のサイドバーにある **New Project** アイコン（プラスが付いたフォルダ）を押します。[^new-project]
2. **Add Folder** で、整理ツールのフォルダを選びます。Gitリポジトリではない、ふつうのフォルダでも大丈夫です。[^new-project]

最初の指示を送るときに、作業のしかたを選びます。[^modes]

| 名前 | 役割 |
|---|---|
| Local mode | いまのフォルダでそのまま作業する |
| New worktree mode | 切り離したGitの作業スペースで作業する |

出典: Antigravity公式ドキュメント[^modes]

整理ツールには、**Local mode** を選んでください。今のフォルダで直接作業するので、結果のファイルをすぐに見つけられます。

権限（エージェントが何をしてよいか）は4章で扱います。今は設定を変えなくても大丈夫です。

::: details 詳しく（クリックして開く）
- New worktree modeは、Gitリポジトリでだけ使う方式です。複雑な仕事を、今のフォルダから切り離してやらせるときに使います。[^worktree]
- 新しいプロジェクトは、最初は **Inherit Global** 権限で始まります。プロジェクトフォルダのすべてを読み書きできる状態です。[^inherit]
:::

<Quiz id="ch602-project" />

## 計画から受け取って進める

新しい会話を始めるとき、2つの方式のうちひとつを選びます。[^planning]

| 名前 | 役割 | どんなとき |
|---|---|---|
| Planning mode | 先に計画を立ててから実行する | 初めて任せる仕事 |
| Fast mode | 計画なしですぐ実行する | 名前の変更のような小さな仕事 |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^planning]

最初は **Planning mode** をおすすめします。計画書（Implementation plan）が出たら読んでみて、問題なければ、会話か計画書の上のほうにある **Proceed** を押して進めます。[^proceed] Claude Code 5章の「計画」モード、Codex 4章の `/plan` と同じ役割です。

仕事を終えると、エージェントが **まとめの報告**（Walkthrough）を作って、何が変わったかを要約します。[^walkthrough]

最初は **Request review**（自分の承認を待つ方式）にしておくのが安全です。エージェントは計画を作ると止まって、自分がProceedを押すまで待ちます。[^review-mode] 確認のしかたは、設定の **Agent** タブで選びます。[^review-mode]

::: details 詳しく（クリックして開く）
反対の端にあるAlways proceedは、止まらずにすぐ実行します。[^always] 慣れるまでは選ばないほうがよいでしょう。
:::

<Quiz id="ch602-plan" />

## 最初の整理を任せる

前の2つのツールと同じ依頼を送ります。

```
inbox/meeting-2026-10-27-weekly.txt のメモを議事録に整理して、notes/ フォルダに新しいファイルとして保存して。
```

ファイルを指定したいときは、`@` を入力して選ぶこともできます。ファイルを指定しても、中身が貼り付けられるわけではありません。エージェントにはファイルのパスが渡され、必要なときにそのファイルを読みます。[^mention]

同じ依頼をこのガイドがターミナル（`agy`）で実行した結果は、[3章](03-rules-skills.md)にあります。アプリとターミナルは同じエージェントを使います（[1章](01-what-is.md)）。

**結果を元のメモと照らし合わせてみましょう。** やることが5つとも移されているか？ 担当と期限がメモと同じか？ メモにない内容を作り出していないか？

<Quiz id="ch602-first" />

## 変更内容を見る

アプリの **Review** ウィンドウは、プロジェクトのGitリポジトリの変更を表示します。[^review] 初期の表示は、まだ記録していないすべての変更（**Uncommitted**）なので、自分が直したものも一緒に表示されます。**Agent Edits** を選ぶと、この会話でエージェントが直したファイルだけを見られます。[^views]

**Git**（ギット）は、ファイルがいつ、どう変わったかを記録しておくツールです。Reviewウィンドウは、この記録と今のファイルを比べて表示します。そのため、整理ツールのフォルダもGitリポジトリ（Gitの記録がオンになったフォルダ）にしておくと便利です。

- Claude Code 3章やCodex 2章のとおりに進めたなら、すでにGitリポジトリです。
- まだなら、Gitのコマンドを知らなくても大丈夫です。エージェントに「このフォルダで変更の記録（Git）をオンにして」と頼む方法が、[Claude Code 3章](../20-claude-code/03-screen-tour.md)にあります（選択）。Claude Codeで確かめた方法なので、Antigravityでもそのままできるかは、このガイドでは確認できていません。

Gitではないフォルダで、Reviewウィンドウがどう見えるかは、公式ドキュメントに出ていません。

<Quiz id="ch602-review" />

## やってみよう

1. アプリをインストールして、ログインする。
2. New Project → Add Folderで、整理ツールのフォルダを開く。
3. Planning modeで上の依頼を送り、計画を読んでからProceedを押す。
4. できあがった議事録を元のメモと照らし合わせ、Reviewウィンドウで変わったファイルを確認する。

**続けての課題**: 3章では、ルール（`AGENTS.md`）とスキルを、移さなくても守るかどうかを試します。

## まとめ

- アプリはSign in → 個人のGoogleアカウントでログインする。
- New Project → Add Folderで、フォルダをプロジェクトとして開く。ふつうのフォルダでもよい。
- 最初はPlanning modeとRequest reviewで、計画を読んでからProceedする。
- ReviewウィンドウはGitの変更を表示する。Agent Editsで、エージェントの変更だけを見られる。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Project | プロジェクト | エージェントが作業するフォルダと権限のまとまり |
| Planning mode | プランニング・モード | 計画を先に立ててから実行する方式 |
| Implementation plan | インプリメンテーション・プラン | エージェントが作った作業計画書 |
| Walkthrough | ウォークスルー | 仕事を終えたあとのまとめの報告 |

<ChapterDone :chapter="602" />

次の章: [3章. ルールとスキル — 移さなくてもいい](03-rules-skills.md)

[^tested]: この章は、2026年11月1日に確認したAntigravityの公式ドキュメントをもとに書きました。このガイドは、まだアプリの画面では実習できていません。
[^dmg]: Antigravity公式ドキュメント、「Get started」。"Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started （確認日 2026-11-01）
[^signin]: Antigravity公式ドキュメント、「Authenticate」。"Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install （確認日 2026-11-01）
[^projects]: Antigravity公式ドキュメント、「Get started」。"Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started （確認日 2026-11-01）
[^new-project]: Antigravity公式ドキュメント、「Get started」。"Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started （確認日 2026-11-01）
[^modes]: Antigravity公式ドキュメント、「Get started」。"**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started （確認日 2026-11-01）
[^worktree]: Antigravity公式ドキュメント、「Projects」。"**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects （確認日 2026-11-01）
[^inherit]: Antigravity公式ドキュメント、「Projects」。"**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects （確認日 2026-11-01）
[^planning]: Antigravity公式ドキュメント、「Artifact review」。"**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review （確認日 2026-11-01）
[^proceed]: Antigravity公式ドキュメント、「Implementation plan」。"You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan （確認日 2026-11-01）
[^review-mode]: Antigravity公式ドキュメント、「Artifact review」。"You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review （確認日 2026-11-01）
[^always]: Antigravity公式ドキュメント、「Artifact review」。"The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review （確認日 2026-11-01）
[^walkthrough]: Antigravity公式ドキュメント、「Walkthrough」。"The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough （確認日 2026-11-01）
[^mention]: Antigravity公式ドキュメント、「Mentions and quoting」。"Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions （確認日 2026-11-01）
[^review]: Antigravity公式ドキュメント、「Review changes」。"In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes （確認日 2026-11-01）
[^views]: Antigravity公式ドキュメント、「Review changes」。"| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes （確認日 2026-11-01）
