# 5章. スキルを移す — `$weekly-review` 1行で週次の振り返り

> **一言まとめ**: Codexのスキルは、Claude Codeと **同じ形式**（`SKILL.md`）で、置く場所と呼び出す記号だけが違います。フォルダは `.agents/skills`、呼び出すときは `$名前` です。
> 整理ツールのスキル3つを移し、`$weekly-review` 1行で週次の振り返りを作って、元のメモと照らし合わせます。

この章は、2026年11月1日に確認したCodexの公式ドキュメントと、このガイドの実習（Codexのターミナルで実行）をもとに書きました。スキルが何か、なぜ使うのかは、[Claude Code 7章](../20-claude-code/07-skills-plugins.md)で説明しました。

## 同じ形式、違う場所

Codexのスキルも `SKILL.md` ファイルが入ったフォルダで、`SKILL.md` には名前（`name`）と説明（`description`）が必ずなければなりません。[^format] スキルは、複数のツールが共通で使う公開標準に従っています。[^standard] だから、Claude Codeで作った `SKILL.md` を **直さずに** そのまま移しました。

違うのは、置く場所と呼び出し方です。

| | Claude Code | Codex |
|---|---|---|
| このフォルダ専用 | `.claude/skills/` | `.agents/skills/` |
| 自分のすべてのフォルダ | `~/.claude/skills/` | `~/.agents/skills/` |
| 呼び出し方 | `/名前` | `$名前` |

出典: Codex公式ドキュメント[^where][^mention]

移す前に試してみました。`.claude/skills` に置いたまま `$weekly-review` を呼ぶと、Codexはスキルの一覧からはすぐに見つけられず、**ファイル検索で** `SKILL.md` を探して見つけ出しました。今回は見つかりましたが、決まった場所に置くほうが確実です。

<Quiz id="ch505-where" />

## スキルを移す

Codexに、こう頼みました。

```
.claude/skills フォルダのスキル3つを、Codexが読む場所である .agents/skills にコピーして。元のフォルダはそのままにして。
```

**止められました。** 4章で見た保護フォルダのためです。作業フォルダの中の `.agents` は、初期状態では読み取りだけができます。[^protected] Codexは、コピーがブロックされたと知らせ、代わりに入力するコマンドを教えてくれました。

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

この実習は、許可の方式をあらかじめ決めておいて動かすターミナル実行（7章）なので、聞くことができず、そのまま止まりました。アプリでこの場面がどう見えるかは、このガイドでは直接確認できませんでした。許可を聞く画面が出たら、**何をどこに書くのか** を読んで判断してください。

このガイドは、Codexが教えてくれたコマンドを **自分で** 実行してコピーしました。macOSのターミナルを開いて、`cd ~/hello-ai-연습/정리도구` でフォルダに入ってから、上の2行を入力します。ターミナルが初めてなら、先に[Claude Code 10章](../20-claude-code/10-terminal.md)を見てください。

移したあと、`.agents/skills` の下に `meeting-notes`、`study-notes`、`weekly-review` の3つのフォルダがあればOKです。

<Quiz id="ch505-move" />

## `$` で呼び出す

入力欄に `$` を入力すると、スキルを選んで呼び出せます。[^dollar] 今回は、スキル名だけを送りました。

```
$weekly-review
```

コピーを終えたあとは、ファイル検索なしで `.agents/skills/weekly-review/SKILL.md` を **すぐに** 開きました。そして、振り返りメモ3つをまとめて、週次の振り返りを作りました。

結果: [スキルで作った週次の振り返り](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

数字と事実を、元のメモと照らし合わせてみました。

| 元のメモ | 週次の振り返り | 合っているか |
|---|---|---|
| 「いいね」12個 | 12個 | 合っている |
| 価格を6,000ウォンと書き間違えた | 6,000ウォンの誤り | 合っている |
| セット 今日4個 | 4個 | 合っている |
| セット 今週の合計11個 | 11個 | 合っている |
| インスタ 3回とも投稿した | 3回 | 合っている |
| ヴァンショーの原価1,800ウォン | なし | 抜けている |
| 電球を買って交換した | なし | 抜けている |
| 文言を書くのに2時間 | なし | 抜けている |

出典: このガイドの実習結果（2026-11-01）

間違った項目はありませんでしたが、**抜けているものが3つ** ありました。振り返りの様式の3つの欄（よくできたこと・残念だったこと・来週やること）にぴったり合わなくて外したのだと思われます。このように、**間違いだけでなく抜けも** 確認してください。抜けてはいけない内容があるなら、スキルに「ヴァンショーのように次の会議の議題になる数字は、来週やることに入れる」のように、1行足せばOKです。

呼び出さなくても、依頼がスキルの説明と合っていれば、Codexが自分でスキルを選ぶことがあります。[^implicit] だから、説明の前のほうに **いつ使うか** をはっきり書いておくのがおすすめです。[^frontload]

<Quiz id="ch505-call" />

## 新しいスキルの作り方とプラグイン

新しいスキルをゼロから作るときは、最初から入っている `$skill-creator` を呼び出して、目標・ステップ・形式を説明します。[^creator] 公式ドキュメントが挙げる良い最初のスキルは、週次報告や会議後のフォローアップの整理のような、**ステップと形式がいつも同じ仕事** です。[^first] 整理ツールの3つのスキルが、まさにその例です。

**プラグイン**は、スキルと外部ツールとの接続をまとめてインストールするパッケージです。[^plugin] ChatGPTとCodexは、ひとつのプラグイン一覧を共通で使います。[^shared] プラグインに入っているフック（自動で動くスクリプト）は、動く前に確認して、信頼できるかを判断するように言っています。[^hooks] 初めて見るプラグインは、[Claude Code 7章](../20-claude-code/07-skills-plugins.md)で学んだように、作った人と権限を先に確認してください。

<Quiz id="ch505-create" />

## やってみよう

1. Codexに、`.claude/skills` のスキル3つを `.agents/skills` にコピーしてほしいと頼む。許可を聞かれたら内容を読んで判断し、止められたら、本文の2行のコマンドをターミナル（アプリのメニュー「View → Open Terminal」でもよい）で自分で入力する。
2. 新しい会話を開いて、入力欄に `$` を入力し、3つのスキルが表示されるかを確認する。
3. `$weekly-review` を送り、結果を元のメモと照らし合わせる。間違いと抜けを別々に数える。
4. 抜けがあれば、スキルに1行足して、もう一度動かしてみる。

**続けての課題**: 6章では、毎週金曜に週次の振り返りを自動で動かす予約と、クラウド・スマートフォンを見ていきます。

## まとめ

- スキルの形式（`SKILL.md`）は、Claude Codeと同じ。場所は `.agents/skills`、呼び出しは `$名前`。
- `.agents` は保護フォルダなので、移すときに止められたり、許可が必要になったりすることがある（このガイドは、ターミナルで止められたことだけを確認）。
- `$weekly-review` 1行で週次の振り返りができた。項目5つは合っていて、3つが抜けていた。
- 間違いだけでなく、抜けも確認する。繰り返し起きるなら、スキルを直す。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| `$` メンション | ドル・メンション | Codexでスキルを名前で呼び出す方法 |
| `.agents/skills` | エージェンツ・スキルズ | Codexがこのフォルダのスキルを探す場所 |
| skill-creator | スキル・クリエイター | 新しいスキル作りを手伝う、標準のスキル |

<ChapterDone :chapter="505" />

次の章: [6章. 予約・クラウド・スマートフォン](06-schedule-cloud.md)

[^format]: Codex公式ドキュメント、「Build skills」。"A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills （確認日 2026-11-01）
[^standard]: Codex公式ドキュメント、「Build skills」。"Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills （確認日 2026-11-01）
[^where]: Codex公式ドキュメント、「Build skills」。"For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills （確認日 2026-11-01）
[^mention]: Codex公式ドキュメント、「Skills & Plugins」。"ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins （確認日 2026-11-01）
[^protected]: Codex公式ドキュメント、「Agent approvals & security」。"`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security （確認日 2026-11-01）
[^dollar]: Codex公式ドキュメント、「Slash commands」。"You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands （確認日 2026-11-01）
[^implicit]: Codex公式ドキュメント、「Build skills」。"**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills （確認日 2026-11-01）
[^frontload]: Codex公式ドキュメント、「Build skills」。"Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills （確認日 2026-11-01）
[^creator]: Codex公式ドキュメント、「Skills & Plugins」。"In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins （確認日 2026-11-01）
[^first]: Codex公式ドキュメント、「Skills & Plugins」。"Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins （確認日 2026-11-01）
[^plugin]: Codex公式ドキュメント、「Skills & Plugins」。"A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins （確認日 2026-11-01）
[^shared]: Codex公式ドキュメント、「Skills & Plugins」。"ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins （確認日 2026-11-01）
[^hooks]: Codex公式ドキュメント、「Plugins」。"Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins （確認日 2026-11-01）
