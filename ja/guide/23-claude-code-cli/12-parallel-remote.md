# 第12章 同時作業とリモート

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: Gitで最初の記録を残せば、worktreeで **作業フォルダを分けて**、仕事を並べて任せられます。

この章の画面は、2026年11月6日にLinuxでClaude Code 2.1.318を実行した結果です。フォルダのパスとプランの名前は、この講座に合わせて書き換えました。

今の状態を保存しておき、元のフォルダに手を付けない作業フォルダを作ってみます。

## Gitで最初の記録を残す

Gitは、フォルダの変更の履歴を保存しておくプログラムです。保存した時点のひとつを **コミット**（Commit）と呼びます。ゲームのセーブポイントに似ています。記録がたまっていくフォルダは、**リポジトリ**（Repository）と呼びます。

なぜ今必要なのでしょうか？ 理由は2つあります。

- [7章](07-permissions-undo.md)の巻き戻しは、Claudeの編集ツールが直したファイルだけを元に戻します。Bashのコマンドだけで変わったファイルは追跡しません。そういうファイルを元に戻すには、Gitのようなバージョン管理を使います。[^git-undo]
- 次の節のworktreeは、コミットから作られます。リポジトリにコミットが少なくともひとつは必要です。[^one-commit]

まず `git --version` で、Gitがあるかを見ます。番号が出ればOKです。番号の代わりに、コマンドが見つからないという文が出たら、こうインストールしてください。

- **Windows**: git-scm.com/downloads/win からインストーラーをダウンロードしてインストールし、新しいウィンドウを開きます。[^git-win]
- **MacとLinux**: git-scm.comの案内に従います。

では、練習フォルダで記録を始めます。

```bash
cd ~/hello-ai-practice/terminal
git init
```

`git init` は、このフォルダの変更の履歴を記録し始めるようにというコマンドです。次に、記録 **しない** ものを決めます。7章の `secret`（秘密）フォルダは偽物のファイルですが、本当の秘密だと思って外してみましょう。次の節のworktreeのフォルダも一緒に外します。[^wt-ignore] `claude` を起動して、こう送ります。

```text
このフォルダに .gitignore ファイルを作って、"secret/" と ".claude/worktrees/" の2行を書いて。
```

`.gitignore` は、Gitが見なかったことにするファイルを書く一覧です。では、`/exit` で抜けて、ターミナルに入力します。

```bash
git config user.name "自分の名前"
git config user.email "me@example.com"
git config core.quotePath false
git add .
git status --short
```

1行ずつ見ると、こうなります。

- 1行目・2行目（`git config user.…`）: コミットに記録される名前とメールアドレスを決めます。このフォルダにだけ適用されます。あとでリポジトリを公開すると一緒に公開されるので、公開してもよい値を使ってください。
- 3行目（`git config core.quotePath false`）: ハングルのファイル名を、そのまま表示させます。
- `git add .`: 保存するファイルを集めます。`.` は今のフォルダという意味です。
- `git status --short`: 集めたファイルを短く表示します。

新しいフォルダで実行したときは、こう出ました。

```text
A  .claude/skills/meeting-notes/SKILL.md
A  .gitignore
A  CLAUDE.md
A  inbox/meeting-2026-10-27-weekly.txt
A  notes/minutes-2026-10-27.md
A  weekly-summary.sh
A  minutes.md
```

自分の一覧には、もっと多くのファイルがあるかもしれません。3行目を省くと、ハングルの名前が `\355\232…` のような数字で表示されるので、`secret` フォルダが入っていても見分けにくくなります。

ここで自分に聞いてみてください。`secret` フォルダは一覧から外れたか？ 外れていれば保存します。見えたら、コミットしないでください。`.gitignore` の2行を直してから、`git reset` と `git add .` をもう一度入力します。`git reset` は、さっき `git add .` で集めたファイルを、もう一度下ろすコマンドです。ファイルそのものは消えないので、安心してください。

```bash
git commit -m "最初の記録"
```

`git commit` が、実際に記録を残します。`-m` はメッセージ（message）の略で、引用符の中が、この記録の説明です。

この手順は、新しいフォルダで実行して、`secret` フォルダが外れ、コミットが残るところまで確認しました。

<Quiz id="ch812-git" />

## worktreeで作業フォルダを分ける

worktree（ワークツリー）は、別の作業フォルダです。リポジトリの記録は一緒に使い、ファイルとブランチ（Branch、枝分かれした作業の流れ）は別々に持ちます。[^wt-what] コピーのフォルダをもうひとつ作って、その中で作業する様子を思い浮かべてください。ここでは、お試しとして一度だけやってみます。

`--worktree` のあとに名前を付けると、そのフォルダを作り、その中でClaudeを始めます。[^wt-what]

```bash
claude --worktree memo-fix
```

実際に動かすと、起動画面のフォルダがこう変わりました。

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claudeのプラン名
 ▝▝   ▝▝   ~/hello-ai-practice/terminal/.claude/worktrees/memo-fix
```

フォルダは `.claude/worktrees/memo-fix` にでき、新しいブランチの名前は `worktree-memo-fix` です。[^wt-where] セッションに名前を付けず、何も変えないまま `/exit` で終えたら、フォルダはすぐに消されました。

```text
Removing worktree…
Worktree removed (no changes)
```

worktreeの名前とセッションの名前は別のものです。セッションに名前を付けていた場合は、消す前に残しておくかを先に聞くと、公式ドキュメントは説明しています。[^wt-where] この場合は実際には試していません。

知っておきたい点が2つあります。

- **新しく取り出したコピーです。**[^wt-fresh] コミットに入っていないファイルは、その中にはありません。上で外した `secret` フォルダもありません。メモが見当たらなければ、まずコミットしたかを確認してください。
- **残っている作業があれば、終えるときに残すか削除するかを聞かれます。** 削除を選ぶと、フォルダとブランチ、その中の作業が一緒に消えます。あとで戻ってくるには、終了するときに表示される `claude --worktree <名前> --resume` のコマンドを使います。[^wt-remove]

worktreeの結果を元のフォルダにまとめるのは、Gitのブランチのマージ（統合）です。この章では、まとめません。元のフォルダに手を付けずに、別に作業してみる場所だということだけわかれば十分です。まとめる方法が気になるなら、[ステップ4 · AI-SDLC ガイド](/ja/guide/30-ai-sdlc/)のPRの章を見てください。PR（Pull Request）は、ブランチの変更を本流にまとめてほしいと依頼することです。

<Quiz id="ch812-worktree" />

## ターミナルのウィンドウ2つで並べて

議事録を直している間に、勉強ノートも任せたいときがあります。ターミナルのウィンドウを2つ開けばOKです。

- **惜しい例**: 2つのウィンドウとも、同じフォルダで `claude` を起動する。同じファイルに触ってしまうことがあります。別のセッションが直した内容は、巻き戻しでたいてい取り戻せません。[^other-session]
- **良い例**: ウィンドウごとに、別の名前のworktreeを使う。ファイルが別々なので、ぶつかりません。

1つ目のウィンドウでは、こう入力します。

```bash
cd ~/hello-ai-practice/terminal
claude --worktree memo-fix
```

2つ目のウィンドウでは、こう入力します。

```bash
cd ~/hello-ai-practice/terminal
claude --worktree study-note
```

2つのウィンドウは、こうして別々のフォルダで作業します。前の節で見たとおり、worktreeは `.claude/worktrees/<名前>` にできるからです。

```text
ウィンドウ1: ~/hello-ai-practice/terminal/.claude/worktrees/memo-fix     議事録を直す
ウィンドウ2: ~/hello-ai-practice/terminal/.claude/worktrees/study-note   勉強ノートを整理する
```

ウィンドウ2つを同時に動かすことは、このガイドでは試していません。終わったら、自分に聞いてみてください。2つの作業が、お互いのファイルに触っていなかったか？ ウィンドウを増やすと、使う量も増えることがあります。[13章](13-cost-safety-trouble.md)の `/usage` で様子を見ながら、本当に必要なときだけ使ってください。

<Quiz id="ch812-two-windows" />

## もっと知る

下の3つは、このガイドでは試していません。公式ドキュメントが説明している内容だけを、短く紹介します。今はわからなくても大丈夫です。必要になったら取り出して見てください。

**`/loop`** は、セッションの中で同じ依頼を、間隔をあけてもう一度実行します。[^loop-what] たとえば、1時間ごとに新しいメモが来たかを確認させることができます。

::: details `/loop` の使い方と注意点（クリックして開く）

```text
/loop 1h inbox フォルダに新しいメモがあったら、ファイル名だけ知らせて
```

- Claude Codeが起動していて、休んでいるときだけ実行されます。ターミナルを閉じると止まります。[^loop-idle]
- 7日たつと、自動で終わります。[^loop-idle]
- `1h` のように間隔を決めた繰り返しは、EscやCtrl+Cでは止まりません。Claudeに言葉で取り消しを頼みます。[^loop-esc]

:::

**`/goal`** は、完了の条件を決めておくと、ステップごとに指示しなくても、Claudeが仕事を続けるようにします。[^goal-what]

::: details `/goal` の使い方と注意点（クリックして開く）
判定するモデルは、ファイルを直接開きません。だから、条件は答えに表れるように書き、止める条件も入れます。[^goal-judge] ターンは、Claudeが1回作業して結果を受け取る1回分です。

```text
/goal inbox の会議メモごとに notes フォルダに議事録ができて、作ったファイル名を答えに全部書いたら終わり。または10ターン後に止まって。
```

`/goal clear` で解除します。[^goal-state]

:::

**リモートコントロール**（Remote Control）は、自分のパソコンで動いているセッションを、claude.ai/codeやClaudeのスマホアプリにつなぎます。セッションで `/remote-control` と入力します。[^rc-cmd] 使えるプランは決まっています。[^rc-what]

クラウドで実行されるわけでは **ありません**。作業は自分のパソコンで続き、スマホはそのセッションを見る窓です。だから、パソコンの電源が入っていて、`claude` が実行され続けている必要があります。[^rc-window]

パソコンの電源が切れていても動いてほしい仕事なら、アプリのガイドの[クラウドと予約](../20-claude-code/08-parallel-cloud-schedule.md)を見てください。

<Quiz id="ch812-more" />

## やってみよう

1. 練習フォルダで、`git init`、`.gitignore`、最初のコミットまでやります。
2. `git log --oneline` で、記録が1行見えるかを確認します。
3. `claude --worktree memo-fix` で始めて、`! pwd` で今のフォルダを確認します。
4. 何も変えずに `/exit` で終えたあと、画面の案内を読みます。

自分に聞いてみてください。最初の記録から `secret` フォルダは外れたか？ 今自分がどのフォルダにいるかを、`pwd` で言えるか？

## まとめ

- Gitの最初の記録は、巻き戻しで戻せない変更を元に戻す手段であり、worktreeの前提である。
- worktreeは、ファイルとブランチが別々の作業フォルダである。コミットに入っていないファイルは、その中にはない。
- 仕事を並べて任せるときは、ウィンドウごとに別のworktreeを使う。
- `/loop`、`/goal`、リモートコントロールは、必要になったら取り出して見る。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Git | ギット | フォルダの変更の履歴を保存するプログラム |
| Repository | リポジトリ | Gitの記録がたまっていくフォルダ |
| Commit | コミット | Gitに保存した時点のひとつ |
| Branch | ブランチ | 枝分かれした作業の流れ |
| `.gitignore` | ギットイグノア | Gitが記録しないファイルの一覧 |
| Worktree | ワークツリー | 記録は同じで、ファイルとブランチが別々の作業フォルダ |
| Remote Control | リモートコントロール | 自分のパソコンのセッションを、別の機器で続けて見る機能 |

<ChapterDone :chapter="812" />

次の章: [第13章 コスト・安全・トラブル解決](13-cost-safety-trouble.md)

[^git-undo]: Claude Code公式ドキュメント、「Checkpointing」。"A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing （確認日 2026-11-06）
[^one-commit]: Claude Code公式ドキュメント、「Common workflows」。"so the repository needs at least one commit first." https://code.claude.com/docs/en/common-workflows （確認日 2026-11-06）
[^git-win]: Claude Code公式ドキュメント、「Terminal guide for new users」。"Go to git-scm.com/downloads/win and download the installer" https://code.claude.com/docs/en/terminal-guide （確認日 2026-11-06）
[^wt-ignore]: Claude Code公式ドキュメント、「Run parallel sessions with worktrees」。"Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." https://code.claude.com/docs/en/worktrees （確認日 2026-11-06）
[^wt-what]: Claude Code公式ドキュメント、「Run parallel sessions with worktrees」。"A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." / "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." https://code.claude.com/docs/en/worktrees （確認日 2026-11-06）
[^wt-where]: Claude Code公式ドキュメント、「Run parallel sessions with worktrees」。"By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" / "for an unnamed session, Claude removes the worktree and its branch automatically." / "A named session prompts you first so you can keep the worktree for later" https://code.claude.com/docs/en/worktrees （確認日 2026-11-06）
[^wt-fresh]: Claude Code公式ドキュメント、「Run parallel sessions with worktrees」。"A worktree is a fresh checkout, so initialize your development environment there" https://code.claude.com/docs/en/worktrees （確認日 2026-11-06）
[^wt-remove]: Claude Code公式ドキュメント、「Run parallel sessions with worktrees」。"Removing deletes the worktree directory and its branch, along with all the work in them" / "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." https://code.claude.com/docs/en/worktrees （確認日 2026-11-06）
[^other-session]: Claude Code公式ドキュメント、「Checkpointing」。"Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing （確認日 2026-11-06）
[^loop-what]: Claude Code公式ドキュメント、「Run prompts on a schedule」。"Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." https://code.claude.com/docs/en/scheduled-tasks （確認日 2026-11-06）
[^loop-idle]: Claude Code公式ドキュメント、「Run prompts on a schedule」。"Tasks only fire while Claude Code is running and idle." / "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks （確認日 2026-11-06）
[^loop-esc]: Claude Code公式ドキュメント、「Run prompts on a schedule」。"`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." https://code.claude.com/docs/en/scheduled-tasks （確認日 2026-11-06）
[^goal-what]: Claude Code公式ドキュメント、「Keep Claude working toward a goal」。"The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." https://code.claude.com/docs/en/goal （確認日 2026-11-06）
[^goal-judge]: Claude Code公式ドキュメント、「Keep Claude working toward a goal」。"It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." / "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." https://code.claude.com/docs/en/goal （確認日 2026-11-06）
[^goal-state]: Claude Code公式ドキュメント、「Keep Claude working toward a goal」。"`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." https://code.claude.com/docs/en/goal （確認日 2026-11-06）
[^rc-what]: Pro・Max・Ultra・Team・Enterpriseのプランで使えて、APIキー（[13章](13-cost-safety-trouble.md)で説明します）では使えません。Claude Code公式ドキュメント、「Continue local sessions from any device with Remote Control」。"Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." / "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." https://code.claude.com/docs/en/remote-control （確認日 2026-11-06）
[^rc-cmd]: Claude Code公式ドキュメント、「Continue local sessions from any device with Remote Control」。"If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" https://code.claude.com/docs/en/remote-control （確認日 2026-11-06）
[^rc-window]: Claude Code公式ドキュメント、「Continue local sessions from any device with Remote Control」。"The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." https://code.claude.com/docs/en/remote-control （確認日 2026-11-06）
