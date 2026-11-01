# 3章. ルールとスキル — 移さなくてもいい

> **一言まとめ**: Antigravityは、フォルダの **`AGENTS.md`** を常にオンのルールとして読み、**`.agents/skills`** のスキルを自分で選びます。Codexの段階で作ったファイルが **そのまま** 通用します。
> 同じメモで、`AGENTS.md` をどけたまま1回、戻してからもう1回整理させて、これを確かめます。

この章は、2026年11月1日に確認したAntigravityの公式ドキュメントと、このガイドがAntigravity CLIの `agy` 1.4.12で実行した結果をもとに書きました。このガイドは、実習用の別のAIツールの中から `agy` を呼び出して実行しました。公式FAQはこうした使い方を個人プランではサポートしていないので（[7章](07-safety-choose.md)）、真似するときはアプリかターミナルから直接実行してください。アプリとCLIは同じエージェントを使います（[1章](01-what-is.md)）。ルールファイルとスキルが何かは、[Claude Code 6・7章](../20-claude-code/06-claude-md.md)で説明しました。

## Antigravityが探す場所

Antigravityは、ルールとスキルを決まったフォルダから探します。[^where]

| 何を | このフォルダ（プロジェクト） | 自分のすべてのフォルダ |
|---|---|---|
| ルール | `AGENTS.md`・`GEMINI.md`・`.agents/rules/` | `~/.gemini/AGENTS.md` など |
| スキル | `.agents/skills/名前/SKILL.md` | `~/.gemini/config/skills/` |

出典: Antigravity公式ドキュメント（一部のみ抜粋）[^where][^global][^global-skill]

**Codexの段階で作ったファイルと、名前も場所も同じです。** ルールファイルの `AGENTS.md` と、スキルフォルダの `.agents/skills` です。だから、整理ツールのフォルダを **何も移さずに** そのまま開けば大丈夫です。

`CLAUDE.md` は、ルールファイルの一覧にありません。[^names] Claude Codeでだけ使っていたルールがあるなら、`AGENTS.md` にも書いておいてください（Codex 3章と同じ理由です）。

`AGENTS.md` は先頭の設定なしで使い、**内容全体が常にオンです。**[^always] 直したルールとスキルは、次のメッセージからすぐ反映されます。[^reread]

<Quiz id="ch603-where" />

## 同じメモで試す

`AGENTS.md` には、Codex 3章で足したルールがあります。「整理したファイルの一番下に『원본과 대조할 것』（元のメモと照らし合わせること）の節を置く」というルールです。このルールは `AGENTS.md` にしかないので、結果にその節があるかを見れば、`AGENTS.md` が読まれたかがわかります。

Codexの段階のレビューで、「前と後で別のメモを使うと、厳密な比較にならない」という指摘を受けました。そこで今回は、**同じメモ、同じ依頼** で2回実行しました。

```
inbox/회의-2026-10-27-주간회의.txt のメモを議事録に整理して、notes/ フォルダに新しいファイルとして保存して。
```

| 実行 | 「원본과 대조할 것」（元のメモと照らし合わせること）の節 |
|---|---|
| `AGENTS.md` をフォルダの外にどけたまま | なし |
| `AGENTS.md` を戻したあと | あり |

出典: このガイドの実習結果（2026-11-01、各1回）

結果: [AGENTS.mdなし](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [AGENTS.mdあり](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

実行記録を見ると、違いがもっとはっきりします。

- **`AGENTS.md` がないとき**: エージェントが `AGENTS.md`・`CLAUDE.md`・`GEMINI.md` を自分で探して開いていました。
- **`AGENTS.md` があるとき**: そのファイルを別に開いていないのに、新しいルールを守りました。常にオンのルールとして、最初から入っていたからだと思われます。

`CLAUDE.md` は、どちらの回も **自分で開いて読みました。** ルールファイルとして自動的に入ったわけではありませんが、フォルダにあれば参考資料として読める、という意味だと思われます。このパソコンには個人のルールファイル（`~/.gemini/GEMINI.md`）もあり、実行に一緒に入っていたので、この動きがその影響かどうかは見分けられません。それぞれ1回ずつ試した結果です。

同じメモなのに、結果にもうひとつ違いがありました。Codexはメモの曜日を2026年のカレンダーに合わせて直しましたが、Antigravityはメモに書かれた曜日（`10/27(月)`）をそのまま使いました。練習用メモの曜日は話のために作ったもので、実際のカレンダーとは合いません。ツールによってこうした判断が違うので、日付は常に元のメモと照らし合わせてください。

間違った日付もひとつありました。`AGENTS.md` があるときに作った議事録では、ヴァンショーの原価調査の期限が `10/31(金)` ではなく `10/30(金)` と書かれていました（メモは「金曜まで」）。**ルールの節を守っていても、日付は間違えることがあります。**「원본과 대조할 것」（元のメモと照らし合わせること）の節があるからと安心せず、自分で照らし合わせてください。

<Quiz id="ch603-test" />

## スキルは自分で選ぶ

エージェントは毎回、スキルの名前と説明（`description`）の一覧を見て、仕事に合うスキルがあれば、そのスキルの全体の指示を読みます。[^progressive] だから、スキルを使うよう毎回言う必要はなく、必ず使わせたいときは名前を言えばOKです。[^mention]

上の2回の実行では、スキルの話をしていないのに、**最初の動作が `.agents/skills/meeting-notes/SKILL.md` を読むことでした。** Codex 5章で移しておいたスキルを、そのまま見つけたわけです。

直接呼ぶときは、アプリの入力欄に `/スキル名` と入力します。[^slash] Codexの `$名前` とは違い、Claude Codeの `/名前` と同じです。

```
/weekly-review
```

このガイドは、ターミナルで「weekly-reviewスキルで今週の振り返りを整理して」と名前を言って実行しました。エージェントは `.agents/skills/weekly-review/SKILL.md` を読み、振り返りメモ3つから週次の振り返りを作りました。

結果: [スキルで作った週次の振り返り](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

元のメモと照らし合わせる事実8つが **すべて** 入っていました。「いいね」12個、6,000ウォンの誤り、セット4個、合計11個、インスタ3回、ヴァンショー1,800ウォン、電球、文言を書くのに2時間、です。同じスキルでCodexが作った振り返りでは、3つが抜けていました（[Codex 5章](../21-codex/05-skills.md)）。同じ指示でも、ツールによって結果が違うことがあるという例です。

結果には `(メモに記載なし)` という表示が何か所かあります。事実が間違っているという意味ではなく、様式が求める「なぜうまくいったか」や「いつやるか」がメモにない、という表示です。間違っているもの・抜けているものと一緒に、こうした表示が正しく付いているかも見てください。

<Quiz id="ch603-skills" />

## 条件付きルールと、学んだことの残し方

ルールが増えてきたら、`.agents/rules/` フォルダにファイルとして分けられます。これらのファイルは、先頭にいつオンにするか（`trigger`）を必ず書く必要があります。書かなかったり間違えたりすると、**何も言わずに捨てられます。**[^trigger] 整理ツールのようにルールが数行だけなら、`AGENTS.md` ひとつで十分です。

ルールは「いつも守ること」、スキルは「複数のステップでする仕事」に使います。[^rule-skill] たとえば「日付は10/27(月)のように書く」はルールで、「振り返りメモ3つをまとめて週次の振り返りを作る」はスキルです。

会話の中で直してもらったことを、ルールやスキルとして残したいときは `/learn` を使います。エージェントが直す内容を提案し、**自分が承認したあとにだけ** ファイルに書きます。[^learn]

<Quiz id="ch603-rules" />

## やってみよう

1. 整理ツールのフォルダをAntigravityのプロジェクトとして開く（2章）。何も移さない。
2. 会議メモの整理を任せて、結果の一番下に「원본과 대조할 것」（元のメモと照らし合わせること）の節があるかを見る。
3. もっとはっきりさせたいなら、`AGENTS.md` を一時的に別の場所へ移して同じ依頼をもう一度し、比べる。終わったら戻す。
4. `/weekly-review` で週次の振り返りを作り、間違っているものと抜けているものを、元のメモと照らし合わせて数える。

**続けての課題**: 4章では、Antigravityの権限プリセットと元に戻す方法を、Claude CodeやCodexと比べます。

## まとめ

- Antigravityは `AGENTS.md`・`GEMINI.md` と `.agents/skills` を読む。Codexで作ったファイルがそのまま通用する。
- 同じメモで試した結果、`AGENTS.md` なしで0 → ありで1（「원본과 대조할 것」（元のメモと照らし合わせること）の節）。
- スキルは、言わなくても自分で選んだ。直接呼ぶときは `/スキル名`。
- `.agents/rules/` のファイルは `trigger` を必ず書く。会話で学んだことは、`/learn` で承認してから残す。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| always_on | オールウェイズ・オン | 常にオンになっているルール |
| trigger | トリガー | ルールをいつオンにするかを決める値 |
| `/learn` | ラーン | 会話で学んだことをルールやスキルとして残そうと提案するコマンド |

<ChapterDone :chapter="603" />

次の章: [4章. 権限と元に戻す方法](04-permissions-undo.md)

[^where]: Antigravity公式ドキュメント、「Customization discovery」。"**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery （確認日 2026-11-01）
[^global]: Antigravity公式ドキュメント、「Rules」。"**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules （確認日 2026-11-01）
[^global-skill]: Antigravity公式ドキュメント、「Customization discovery」。"To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery （確認日 2026-11-01）
[^names]: Antigravity公式ドキュメント、「Rules」。"You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules （確認日 2026-11-01）
[^always]: Antigravity公式ドキュメント、「Rules」。"**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules （確認日 2026-11-01）
[^reread]: Antigravity公式ドキュメント、「Customization discovery」。"Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery （確認日 2026-11-01）
[^progressive]: Antigravity公式ドキュメント、「Agent skills」。"On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills （確認日 2026-11-01）
[^mention]: Antigravity公式ドキュメント、「Agent skills」。"You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills （確認日 2026-11-01）
[^slash]: Antigravity公式ドキュメント、「Agent skills」。"**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills （確認日 2026-11-01）
[^trigger]: Antigravity公式ドキュメント、「Rules」。"**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules （確認日 2026-11-01）
[^rule-skill]: Antigravity公式ドキュメント、「Rules」。"**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules （確認日 2026-11-01）
[^learn]: Antigravity公式ドキュメント、「Slash commands overview」。"The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands （確認日 2026-11-01）
