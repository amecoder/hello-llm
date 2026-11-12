# 第11章 フックと画面のカスタマイズ

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: フック（Hook）は、決まったタイミングごとに **Claude Codeが自分で** 実行するコマンドです。AIの判断に任せないので、必ず起きてほしいことに使います。

この章の画面は、2026年11月6日にLinuxでClaude Code 2.1.318を実行した結果です。

ファイルが変わるたびに記録を残すフックを作ってみます。画面の下のステータスラインと、答えの口調も自分に合わせます。

## フックとは

フックは、自分で決めておいたシェルのコマンドです。Claude Codeが、決まったタイミングごとにそのコマンドを実行します。だから、Claudeが「覚えていてやってくれる」ことを期待する必要がありません。[^hook-what]

[8章](08-memory-settings.md)のCLAUDE.mdと並べてみると、違いがわかります。

- **惜しい例**: CLAUDE.mdに「ファイルを変えたら、변경기록.txtに1行残して」と書く。守るのはClaudeです。抜け落ちることがあります。
- **良い例**: 同じことをフックにする。守るのはClaude Codeです。ファイルを変えるたびに、そのあとコマンドが実行されます。

毎回必ず起きなければならないことには、フックを使ってください。[^every-time] だからといって、ルールを全部フックに移す必要はありません。口調や文書の形式のようなルールは、CLAUDE.mdで十分です。フックは「抜けると困ること」にだけ使ってください。

<Quiz id="ch811-what" />

## 変更記録のフックを作る

フックは、設定ファイルに `hooks` の欄を追加して作ります。[^hook-add] この章では、プロジェクトの設定ファイル `.claude/settings.json` に入れます。[7章](07-permissions-undo.md)の拒否ルールが入っている、あのファイルです。

手で直すと、カンマひとつで間違えやすくなります。そこで、ファイル全体を一度に上書きします。7章の拒否ルールも下の内容の中にそのまま入っているので、消えることはありません。

`/exit` で抜けて、ターミナルの練習フォルダで、下をまるごと貼り付けます。貼り付けたあと、まだ実行されていなければ、Enterをもう一度押してください。

見慣れない欄の名前がいくつも出てきますが、今すべてを知る必要はありません。大きなかたまりは3つです。

- `permissions`: 7章で作った拒否ルール
- `hooks`: 今回作る変更記録のフック
- `statusLine`: 画面の下のステータスライン

詳しい意味は、ボックスのすぐ下でひとつずつ説明します。

```bash
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./비밀/**)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "date '+%F %T ファイルが変更されました' >> 변경기록.txt" }
        ]
      }
    ]
  },
  "statusLine": { "type": "command", "command": "echo 街角カフェ整理中" }
}
EOF
```

Windows PowerShellでは、`notepad .claude\settings.json` でメモ帳を開きます。もとの内容を消して、上のボックスから `cat` で始まる行と `EOF` の行を除いた間だけを入れます。`Ctrl + S` で保存して閉じます。この方法は実際には試していません。

見慣れない言葉を、ひとつずつ説明しますね。最後の `statusLine` の欄は、あとの「ステータスライン」の節で見ます。

- `PostToolUse`: Claudeがツールを使った **あと** という意味です。すでに終わったことを元に戻すことはできません。ツールを使う **前** に割り込んで止められるタイミングは `PreToolUse` です。[^post]
- `matcher`: どのツールに反応するかを決めます。`Write|Edit` は、ファイルを作るツールと直すツールです。ここで `|` は「または」という意味です。Claudeがシェルのコマンドで変えたファイルには、このフックは反応しません。
- `command`: 実行するコマンドです。今の日付・時刻と文を、`변경기록.txt`（変更記録.txt）の最後に書き足します。コマンドを部品に分けてみると、こうなります。
  - `date`: 今の日付と時刻を出力するコマンドです。
  - `'+%F %T ファイルが変更されました'`: 出力する形です。`%F` の場所に日付（`2026-11-06`）、`%T` の場所に時刻（`11:19:11`）が入ります。
  - `>> 변경기록.txt`: 結果をそのファイルの最後に書き足します。10章の `>` はファイルを上書きし、`>>` は後ろに続けて書きます。ファイルがなければ新しく作ります。

上書きする代わりに、Claudeに言葉で頼んでもかまいません。[^ask-claude] 自分のプロジェクトのように、すでに設定が入っているファイルなら、この方法のほうがよいです。`.claude` フォルダは特別に守られている場所なので、このとき許可の画面が出ることがあります。[^protected]

```text
.claude/settings.json にフックを追加して。ClaudeがWriteかEditのツールを使ったあとに、毎回下のコマンドが動くようにして。すでにある内容は消さないで。
date '+%F %T ファイルが変更されました' >> 변경기록.txt
```

すでに `hooks` の欄があるなら、まるごと置き換えずに、その中にもうひとつ入れます。[^sibling] Windowsでは、このフックは試していません。`date` コマンドはbashの形式なので、そのままでは実行されないことがあります。そのときは、Claudeに自分の環境に合うコマンドに変えてほしいと頼んでください。

では試してみます。`claude` を起動して、こう送ります。

```text
notes フォルダに 훅시험.md を作って、「フックのテスト」と1行だけ書いて。
```

終わったら、`! cat 변경기록.txt` と入力します。実際に動かしたときは、こんな1行が残りました。

```text
2026-11-06 11:19:11 ファイルが変更されました
```

設定ファイル全体は、[11장-settings.json.txt](/practice/cli/results/11장-settings.json.txt)で見られます。

<Quiz id="ch811-log" />

## フックを確認する

フックが登録されたかは、セッションで `/hooks` と入力して見ます。[^hooks-menu] この画面は **見るだけ** です。ここでフックを作ったり直したりはできません。画面自体がそう言っています。

```text
  Hooks
  1 hook on 1 event

  This menu is read-only. To add or change a hook, edit settings.json or ask Claude. Learn more

    PostToolUse  after tool execution
  ❯ [Project] date '+%F %T ファイルが変更されました' >> 변경기록.txt   Write|Edit · command

    All events

  Enter to view · Esc to close
```

フックが実行されないときは、まず自分に聞いてみてください。`/hooks` に表示されているか？ `PostToolUse` の下にあるか？[^hooks-menu] それでもなければ、設定ファイルの書き方を見ます。設定ファイルには、**最後に残ったカンマとコメントは書けません。**[^json] 前のボックスをもう一度上書きするのが、いちばん早いです。

<Quiz id="ch811-check" />

## 人からもらったフォルダのフック

自分で作った練習フォルダなら、危険は低いです。気をつけたいのは、人からもらったフォルダです。

人からもらったフォルダには、その人が書いておいたフックが入っていることがあります。[^hook-share] `claude -p` で実行すると、自分が信頼すると答えたことのないフォルダでも、そのフックが実行されます。[^p-untrusted] だから、そのフックは自分のパソコンで、自分のアカウントで実行されると考えるほうが安全です。もらったフォルダは、Claudeを起動する **前に**、まず設定ファイルを読んでください。この勧めは、公式ドキュメントの文ではなく、このガイドの判断です。

```bash
cat .claude/settings.json
```

`hooks` と `statusLine` の欄に、どんなコマンドがあるかを見ます。意味がわからなければ、そのフォルダの外で、チャットで聞いてみてください。[9章](09-skills-extensions.md)のプラグインも、自分の権限でコードを実行できます。[^plugin-run] 同じ気持ちで扱えばOKです。

<Quiz id="ch811-trust" />

## ステータスライン

ステータスライン（Status line）は、Claude Codeの画面の下のほうに、自分が決めたシェルスクリプトの出力を表示する行です。[^status-what] 設定ファイルに `statusLine` の欄を入れればOKです。[^status-set] 前に上書きした設定に、すでに下の行が入っています。別に直すものはありません。

```json
"statusLine": { "type": "command", "command": "echo 街角カフェ整理中" }
```

実際に動かすと、入力欄の下にこう表示されました。

```text
  街角カフェ整理中
```

フォルダを信頼するかの画面で承諾するまでは、ステータスラインは空のままです。[^status-trust] シェルのコマンドを実行する機能なので、フックと同じ信頼のルールに従います。前の節の注意も、そのまま当てはまります。

`/statusline` のあとに、ほしい形を言葉で書いて作る方法もあります。[^status-nl] この機能は、このガイドでは試していません。

<Quiz id="ch811-statusline" />

## 出力スタイルとテーマ

最初から変える必要はありません。必要なときに取り出して使ってください。この2つは、このガイドでは試しておらず、公式ドキュメントが説明している内容です。

**出力スタイル**（Output style）は、ひとつのセッションのすべての答えで、役割・口調・形式を決めます。たとえば `Concise` は、結果から先に言い、前置きと要約を減らします。[^style-what]

```text
/output-style Concise
```

**テーマ** は色です。画面の文字が見えにくければ、`/theme` でターミナルに合う色を選びます。[^theme]

<Quiz id="ch811-style" />

## やってみよう

1. `/exit` で抜けて、ターミナルで設定のボックスを貼り付けます。
2. `claude` を起動し、入力欄の下に `街角カフェ整理中` が見えるかを確かめます。
3. `/hooks` と入力して、`PostToolUse` の下に表示されるかを確認し、Escで閉じます。
4. フックのテストの依頼を送ったあと、`! cat 변경기록.txt` で1行増えたかを見ます。

自分に聞いてみてください。フックは本当に実行されたか？ Claudeの答えではなく、`변경기록.txt` を直接開いて答えてください。

## まとめ

- フックは、Claude Codeが決まったタイミングごとに実行するコマンドである。必ず起きてほしいことに使う。
- `/hooks` は見るだけである。作ったり直したりする場所は、設定ファイルである。
- 設定ファイルのJSONには、最後のカンマとコメントを書かない。
- 人からもらったフォルダは、起動する前に、まず `.claude/settings.json` を読む（このガイドの判断）。
- ステータスライン、出力スタイル、テーマは、必要なときだけ変える。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Hook | フック | 決まったタイミングごとに自動で実行されるコマンド |
| `PostToolUse` | ポストツールユーズ | ツールを使ったあと、というタイミング |
| `PreToolUse` | プリツールユーズ | ツールを使う前、というタイミング |
| JSON | ジェイソン | 設定ファイルに使う文字の形式 |
| Status line | ステータスライン | 画面の下に自分のコマンドの出力を表示する行 |
| Output style | アウトプットスタイル | 答えの役割・口調・形式のセット |

<ChapterDone :chapter="811" />

次の章: [第12章 同時作業とリモート](12-parallel-remote.md)

[^hook-what]: Claude Code公式ドキュメント、「Automate actions with hooks」。"Hooks are user-defined shell commands." / "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^every-time]: Claude Code公式ドキュメント、「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （確認日 2026-11-06）
[^hook-add]: Claude Code公式ドキュメント、「Automate actions with hooks」。"To create a hook, add a `hooks` block to a settings file." https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^post]: Claude Code公式ドキュメント、「Automate actions with hooks」。"`PostToolUse` hooks can't undo actions since the tool has already executed." / "Before a tool call executes. Can block it" https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^ask-claude]: Claude Code公式ドキュメント、「Automate actions with hooks」。"You can also ask Claude to write the hook for you by describing what you want in the CLI." https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^protected]: `.claude` フォルダは保護されたパスなので、書き込みがそのまま承認されることはありません。手動モードでは許可の画面が出て、自動モードでは、行動を前もって確かめる別のAIが判断します。Claude Code公式ドキュメント、「Choose a permission mode」。"Writes to a small set of paths are never auto-approved" / 表の `auto` 行: "Routed to the classifier" https://code.claude.com/docs/en/permission-modes （確認日 2026-11-06）
[^sibling]: Claude Code公式ドキュメント、「Automate actions with hooks」。"If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^hooks-menu]: Claude Code公式ドキュメント、「Automate actions with hooks」。"Type `/hooks` at the Claude Code prompt to open the hooks browser." / "Run `/hooks` and confirm the hook appears under the correct event" https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^json]: Claude Code公式ドキュメント、「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^hook-share]: Claude Code公式ドキュメント、「Automate actions with hooks」。`.claude/settings.json` 行の共有できるかの欄: "Yes, can be committed to the repo" https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^p-untrusted]: Claude Code公式ドキュメント、「Run Claude Code programmatically」。"Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." https://code.claude.com/docs/en/headless （確認日 2026-11-06）
[^plugin-run]: Claude Code公式ドキュメント、「Plugins overview」。"Whatever the tier, a plugin you install can run code with your user privileges." https://code.claude.com/docs/en/plugins/overview （確認日 2026-11-06）
[^status-what]: Claude Code公式ドキュメント、「Customize your status line」。"The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." https://code.claude.com/docs/en/statusline （確認日 2026-11-06）
[^status-set]: Claude Code公式ドキュメント、「Customize your status line」。"Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." https://code.claude.com/docs/en/statusline （確認日 2026-11-06）
[^status-trust]: Claude Code公式ドキュメント、「Customize your status line」。"Until you accept the workspace trust dialog, the status line stays blank." / "Because `statusLine` executes a shell command" https://code.claude.com/docs/en/statusline （確認日 2026-11-06）
[^status-nl]: Claude Code公式ドキュメント、「Customize your status line」。"The `/statusline` command accepts natural language instructions describing what you want displayed." https://code.claude.com/docs/en/statusline （確認日 2026-11-06）
[^style-what]: Claude Code公式ドキュメント、「Output styles」。"An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." / "Responses lead with the result and leave out preamble, narration, and recaps" https://code.claude.com/docs/en/output-styles （確認日 2026-11-06）
[^theme]: Claude Code公式ドキュメント、「Configure your terminal for Claude Code」。"Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." https://code.claude.com/docs/en/terminal-config （確認日 2026-11-06）
