# 第12章 専門家のように使う — 仕事に合わせて選び、必要なときに1つずつ積み上げる

> **一言まとめ**: 専門家とは、機能をたくさん使う人ではなく、**仕事の大きさに合った機能を選ぶ**人です。最初から全部を設定せず、**同じ不便がくり返されたとき**に、1つずつ足していきます。
> この章では、ステップ3で作った「整理ツール」を毎週回すルーティンで締めくくります。

この章は、2026年10月31日に確認したClaude Codeの公式ドキュメントをもとに書きました。どのAIにも通じる「専門家のように使う」ための原則は、[ステップ1 第11章](../00-common/11-expert.md)にあります。ここでは、Claude Codeの機能を選んで積み上げる方法だけを扱います。

## 仕事の大きさに合わせて選ぶ

| こんな仕事なら | これを使う | 学んだ場所 |
|---|---|---|
| 質問ひとつ、文章一本 | チャット（ClaudeアプリのChat） | [ステップ2](../10-claude/) |
| 自分のフォルダのファイルを読んで直す仕事 | Codeタブのセッション | [第2章](02-install.md) |
| 大きくて、やり方がいろいろある仕事 | 「プラン（계획）」モードで、まずやり方から | [第5章](05-delegate-well.md) |
| 毎回言い直しているルール | CLAUDE.md | [第6章](06-claude-md.md) |
| 同じ手順をよくやる仕事 | スキル（`/名前`） | [第7章](07-skills-plugins.md) |
| 決まった時間に自動でやる仕事 | 予約タスク | [第8章](08-parallel-cloud-schedule.md) |
| 1行での確認・自動化 | ターミナルの `claude -p` | [第10章](10-terminal.md) |
| 失敗したら元に戻したい仕事 | 巻き戻し + Gitの記録 | [第4章](04-permissions-undo.md) |

公式ドキュメントも、機能を「セッションのたびにいつも見えているもの（CLAUDE.md）」「必要なときに呼び出すもの（スキル）」「決まったときに自動で動くもの」に分けて説明しています。[^match] 大きな機能を使うほど、できることは増えますが、そのぶん確認することも増えます。

<Quiz id="ch412-choose" />

## 一度に全部作らず、積み上げていく

**最初からすべてを設定する必要はありません。** 公式ドキュメントは、機能ごとに「こういうときに足す」という合図があると言っています。[^build]

| こんなことが起きたら | これを足す |
|---|---|
| 同じルールやコマンドを2回間違える | CLAUDE.mdに書く |
| 同じ依頼で仕事を何度も始めている | スキルとして保存する |
| 同じ手順を3回目に貼り付けている | スキルとして保存する |
| ブラウザから資料を何度もコピーしてきている | そのサービスをコネクタ（MCP）でつなぐ |
| 聞かなくても毎回起きてほしいことがある | フック（決まった瞬間に自動で動くコマンド） |

出典: Claude Code公式ドキュメント（一部のみ抜粋）[^build]

このガイドの整理ツールも、この順番で育ちました。第2章の長い依頼 → 第5章の様式 → 第6章のCLAUDE.md → 第7章のスキル、です。**先に不便を経験して、そのあとでツールを作った**のです。

同じ合図は、**すでに作ったものを直すとき**にも使います。同じ間違いがまた出たら、チャットで一度直して終わりにせず、CLAUDE.mdを直します。手で直し続けている手順があれば、スキルを直します。[^update]

<Quiz id="ch412-build" />

## もうしなくていい習慣

以前のモデルには必要だったコツの中には、いまはかえって邪魔になるものもあります。公式ドキュメントが挙げているものの中から、このガイドの読者に当てはまるものだけを載せます。[^stop]

| 以前のコツ | いまは |
|---|---|
| 大事な指示に「重要！」や大文字を付ける | ふつうに書いた1行にも従う。強調を重ねると、ルールを過剰に適用してしまう |
| 「止まらずに最後までやって」とせかす | 合意した仕事は、たいてい最後までやる。かわりに、確認の基準（第5章）を渡す |
| フォルダ構成をCLAUDE.mdに長く書く | フォルダはClaudeが自分で読む。フォルダにないことだけを書く |

出典: Claude Code公式ドキュメント[^stop]

**必ず守らせたいルール**なら、強調のかわりに別の仕組みを使います。公式ドキュメントは、曲げられないルールは、フックや拒否ルールに変えるよう言っています。[^stop] このガイドの読者なら、まず第4章の権限モードとGitの記録で守れば十分です。

<Quiz id="ch412-stop" />

## 毎週の整理ルーティン

ステップ3で作ったツールを、毎週こんなふうに回してみましょう。

1. **集める**: 会議・勉強・1日の振り返りのメモを、そのつど `inbox` に入れる。個人情報は消す。
2. **整理する**: `/meeting-notes`、`/study-notes`、金曜日には `/weekly-review`（または予約）。
3. **確認する**: Claudeが見せてくれた**点検結果と「確認が必要な点」**を読み、数字・担当・期限を元のメモと照らし合わせる。
4. **記録する**: 気に入ったら、コミットとして残す（第4章）。
5. **直す**: 同じ指摘を2回したなら、CLAUDE.mdやスキルを直す。

**最初から完璧である必要はありません。** 週に一度回して、不便だった点をひとつだけ直していけば、数週間後には自分にぴったりのツールになります。

<Quiz id="ch412-routine" />

## まとめ

- 仕事の大きさに合わせて選ぶ: 質問はチャット、ファイルの仕事はCode、大きな仕事はまずプラン、くり返しはCLAUDE.mdやスキル、決まった時間は予約。
- 最初から全部は設定しない。同じ不便がくり返されたら、そのとき1つずつ足す。すでに作ったものも、同じ合図で直す。
- 強調やせかしのかわりに、ふつうの1行と確認の基準を渡す。必ず守らせたいルールは、権限やGitのような仕組みで守る。
- 集める → 整理する → 確認する → 記録する → 直す、を毎週回す。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Hook | フック | 決まった瞬間ごとに自動で動くコマンド |
| Routine | ルーティン | 毎週同じ順番で回す作業の習慣（第8章のクラウド予約の名前とは別の意味） |

<ChapterDone :chapter="412" />

次の章: ステップ3のClaude Codeガイドを読み終えました。同じ整理ツールをOpenAIのCodexに移してみたいなら、[ステップ3・Codexガイド](../21-codex/)に進んでください。[ステップ3・Claude Code 目次](./)で読み返したい章を選んだり、[AI知識レベルテスト](../00-common/level-test.md)でここまで学んだことを確かめたりすることもできます。

[^match]: Claude Code 公式ドキュメント、「Extend Claude Code」。"Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview (確認日 2026-10-31)
[^build]: Claude Code 公式ドキュメント、「Extend Claude Code」。"You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview (確認日 2026-10-31)
[^update]: Claude Code 公式ドキュメント、「Extend Claude Code」。"A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview (確認日 2026-10-31)
[^stop]: Claude Code 公式ドキュメント、「Best practices for Claude Code」。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices (確認日 2026-10-31)
