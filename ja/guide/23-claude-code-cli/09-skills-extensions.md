# 第9章 スキルと拡張機能

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: 何度も繰り返す指示は、スキルにします。脇の作業はサブエージェント、外のサービスはMCP、まとめてのインストールはプラグインです。最初はスキルひとつで十分です。

この章の画面は、2026年11月6日にLinuxでClaude Code 2.1.318を実行した結果です。

## スキルを作る

**スキル**（Skill）は、`SKILL.md` ファイルひとつで、Claudeに仕事の手順を足してくれる機能です。同じ指示を何度もチャットに貼り付けているなら、作る価値があります。[^skill] 名前を呼んで使う作業マニュアルだと考えてください。

プロジェクトのスキルは `.claude/skills/<スキル名>/SKILL.md` に置きます。[^skill] `/exit` で抜けて、ターミナルで練習フォルダに移動します。MacとLinuxでは、下をまるごと貼り付けます（ファイルで見る: [9장-스킬-meeting-notes.txt](/practice/cli/results/9장-스킬-meeting-notes.txt)）。

```bash
mkdir -p .claude/skills/meeting-notes
cat > .claude/skills/meeting-notes/SKILL.md <<'EOF'
---
description: 会議メモをルールどおりの議事録に整理する。会議メモを整理してほしいという依頼に使う。
---

$ARGUMENTS ファイルを読み、CLAUDE.md のルールどおりに議事録を作る。
ファイル名は `회의록-날짜.md`（議事録-日付）にして notes フォルダに保存する。
終わったら、保存したファイル名とToDoの数を1行で知らせる。
EOF
```

貼り付けたあと、まだ実行されていなければ、Enterをもう一度押してください。何も表示されなければ成功です。`ls .claude/skills/meeting-notes` で、`SKILL.md` ができたかを見てください。

Windows PowerShellでは、`mkdir .claude\skills\meeting-notes` のあとに `notepad .claude\skills\meeting-notes\SKILL.md` でメモ帳を開きます。`cat` で始まる行と `EOF` の行は除いて、その間だけを入れます。新しいファイルを作るか聞かれたら `はい` を押し、`Ctrl + S` で保存して閉じます。この方法は実際には試していません。

ファイルは、`---` の間の設定と、その下の指示文の2つの部分でできています。[^skill]

- **フォルダ名** `meeting-notes` が、自分が入力するコマンド名になります。[^skill]
- **description** は、Claudeがこのスキルをいつ呼び出すかを決める手がかりです。[^skill]
- **`$ARGUMENTS`** は空欄です。スキルを呼ぶときに渡した文字が、ここに入ります。[^arguments] 実習では、コマンドのあとに書いたファイルのパスが入り、そのメモを整理しました。だから同じスキルで、別のメモも整理できます。

```text
惜しい description: 会議
良い description:   会議メモをルールどおりの議事録に整理する。会議メモを整理してほしいという依頼に使う。
```

良い例は、何をするのかと、いつ使うのかを一緒に伝えています。Claudeが、ちょうどよいタイミングに気づきやすくなります。

では、ターミナルで `claude` を起動し、`/` を入力して一覧から探してみてください。直接呼ぶときは、こう入力します。

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

同じスキルを[10章](10-headless-automation.md)の `claude -p` で呼んだら、`notes/회의록-2026-10-27.md` ができて、Claudeはこう答えました。

```text
`notes/회의록-2026-10-27.md`に保存しました。ToDoは5個です。
```

[8章](08-memory-settings.md)の `CLAUDE.md` のルールどおり、決定事項、ToDo、次の会議の3つの節が出てきました（[結果を見る](/practice/cli/results/10장-회의록-스크립트로.txt)）。スキルの本文は使うときだけ読み込まれるので、ふだんの負担はほとんどありません。[^skill]

<Quiz id="ch809-skill" />

## スキルが効かないとき

書き間違えても、エラーが出ないことがあります。一覧にない、または動きがおかしいときは、この順番で確認してください。

1. フォルダ名は、自分が入力したコマンドと同じか？
2. 場所は `.claude/skills/meeting-notes/SKILL.md` か？
3. ファイルのいちばん最初の行が `---` か？ 最初の行のときだけ、設定が読み込まれます。[^skill-debug]
4. 設定項目の名前のつづりは合っているか？ 間違っていると、エラーなしで無視されます。[^skill-debug]
5. `claude` を起動したフォルダは、練習フォルダか？ `pwd` で確認します。

セッションの途中で直した内容は、再起動しなくても反映されます。ただし、セッションを起動したときになかったスキルフォルダを新しく作ったなら、`/reload-skills` を実行します。[^skill-debug]

<Quiz id="ch809-debug" />

## サブエージェント

**サブエージェント**（Subagent）は、特定の種類の仕事を受け持つ専門の助手です。自分専用のコンテキストウィンドウで作業し、要約だけを返します。だから、検索結果やログで自分の会話がごちゃごちゃになりません。[^sub] アシスタントに資料調べを任せて、結論だけを聞くのに似ています。

たとえば、議事録5つが元のメモと合っているかを、ひとつずつ照らし合わせる作業を思い浮かべてください。自分で直接頼むと、メモと議事録あわせて10個の内容が、自分の会話にずらずらと積み重なります。サブエージェントに任せると、ファイルはサブエージェントが読み、自分の会話には「3番の議事録の期限がメモと違う」のような結論が数行だけ返ってきます。

いちばん簡単な作り方は、Claudeに頼むことです。[^sub] 「議事録が元のメモと合っているかを照らし合わせるサブエージェントを、このプロジェクトに作って。」のように言えばOKです。新しく作ったものが見つからなければ、Claude Codeを再起動してみてください。[^sub] このガイドでは、サブエージェントを実際に作ってはいません。

古い記事には、`/agents` の画面で作るように書かれていることがあります。今はそのウィザードはなくなりました。`/agents` を入力すると、Claudeに頼むか、ファイルを直接編集するようにという案内の文字だけが出ます。[^sub]

サブエージェントのリクエストも、自分の会話と同じ利用上限に合算されます。[^sub] 小さな仕事なら、そのまま頼むほうがよいです。

<Quiz id="ch809-subagent" />

## MCP

**MCP**（Model Context Protocol）は、Claude Codeが基本のツール以外の仕事をできるようにします。ToDoやエラー報告を集めた一覧（課題管理ツール、イシュートラッカー）の検索、データをためておく保管庫（データベース）の照会、Webブラウザの操作などです。[^mcp] Claudeに、外のサービスへつながる接続ケーブルを差し込んであげることだと考えてください。

コマンドを入力する場所は、2つに分かれます。`claude mcp add` は、`claude` を起動する前のターミナル（シェル）で入力します。`/mcp` は、セッションの中で、すでに追加したサーバーを確認するときに入力します。[^mcp] 公式ドキュメントの例のサーバーで、追加、確認、削除をやってみました。

```bash
claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp
claude mcp list
claude mcp remove claude-code-docs
```

1行目を区切って読んでみます。

- `claude mcp add`: MCPサーバーを追加します。
- `--transport http`: HTTP方式で接続するリモートサーバーという意味です。
- `claude-code-docs`: 自分が付けるサーバーの名前です。
- `https://…`: サーバーのアドレスです。

`list` は一覧を表示し、`remove` のあとには消すサーバーの名前を書きます。3つのコマンドを実行すると、順にこんな行が出ます。

```text
Added HTTP MCP server claude-code-docs with URL: https://code.claude.com/docs/mcp to local config
claude-code-docs: https://code.claude.com/docs/mcp (HTTP) - ✔ Connected
Removed MCP server "claude-code-docs" from local config
```

`✔ Connected` が、つながったという印です。基本の範囲 `local` は、自分だけが、このプロジェクトでだけ使うという意味です。[^mcp]

**信頼できるサーバーだけをつないでください。** 外の内容を取ってくるサーバーは、プロンプトインジェクション（文章の中に隠した指示でAIを操ろうとする手口）の危険にさらされることがあります。[^mcp-trust] 誰が作ったかわからないサーバーは追加しないでください。[^mcp-audit]

<Quiz id="ch809-mcp" />

## プラグイン

**プラグイン**（Plugin）は、スキル、エージェント、フック、MCPサーバーなどを、ひとまとめにしてインストールするフォルダです。フックは決まったタイミングごとに自動で動くコマンドで、[11章](11-hooks-statusline.md)で学びます。前に挙げたものは、プラグインがなくても個別に使えます。いくつかをまとめて使いたいときだけ必要です。[^plugin]

たとえば、この章の議事録スキルと、照らし合わせ用のサブエージェントを、プラグインひとつにまとめたとしましょう。同僚は2つをひとつずつ作る必要がなく、プラグインをひとつインストールするだけで済みます。

セッションの中で `/plugin` を入力すると、Discoverタブでプラグインを選べます。[^plugin] インストールのコマンドは `/plugin install commit-commands@claude-plugins-official` のような形です。セッションで入力すると、すぐにはインストールされず、先に詳細画面が開きます。[^plugin-install] このガイドでは、インストールまでは実際に試していません。

**プラグインは自分の権限で実行されます。** どんな出どころでも、インストールしたプラグインは、自分のユーザー権限でコードを実行できます。[^plugin] だから、インストールする前に詳細画面を読む必要があります。[^plugin-install] 自分で直接実行するプログラムと同じように扱ってください。

有効にしたプラグインは、使わないセッションでも、そのセッションの一部になります。[^plugin] 使わないなら、`/plugin` のInstalledタブで無効にするか、削除してください。[^plugin-install]

<Quiz id="ch809-plugin" />

## いつ何を使うか

| こんなとき | 使うもの |
|---|---|
| いつも守るルールがある | `CLAUDE.md` |
| 同じ手順を繰り返す | スキル |
| 大きな脇の作業を切り離して任せる | サブエージェント |
| 外のサービスを使う | MCP |
| いくつかをまとめて受け取る | プラグイン |
| 毎回必ず実行されてほしい | フック（[11章](11-hooks-statusline.md)） |

全部インストールする必要はありません。まず自分に聞いてみてください。今、不便な作業があるか？ ないなら、まだ作らなくても大丈夫です。

<Quiz id="ch809-choose" />

## やってみよう

1. ターミナルでスキルを作ります。`claude` を起動し、`/` を入力して `meeting-notes` が見えるかを確認します。
2. `/meeting-notes inbox/회의-2026-10-27-주간회의.txt` を実行します。`notes` にファイルができましたか？ 内容はメモと合っていますか？
3. `/exit` で抜けて、ターミナルで `claude mcp` の3つのコマンドを順に入力します。消えたかを `claude mcp list` で確認します。

自分に聞いてみてください。同じスキルで、別のメモも整理できそうか？ 今の自分に、どうしても必要な拡張機能はあるか？

## まとめ

- スキルは `.claude/skills/<名前>/SKILL.md` ひとつで作る。フォルダ名がコマンド名になる。
- 効かないときは、フォルダ名、最初の行の `---`、項目名のつづりを見る。
- `/agents` のウィザードはなくなった。サブエージェントは、Claudeに頼むか、ファイルで作る。
- `claude mcp add` などはシェルで、`/mcp` はセッションの中で入力する。
- MCPサーバーとプラグインは、信頼できるものだけを使う。プラグインは自分の権限で実行される。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Skill | スキル | 名前で呼び出して使う作業マニュアル |
| Subagent | サブエージェント | 自分のコンテキストで脇の作業を受け持つ助手 |
| MCP | エムシーピー | 外のツールをつなぐ仕組み |
| Plugin | プラグイン | いくつかの拡張機能をまとめたインストール単位 |

<ChapterDone :chapter="809" />

次の章: [第10章 1行実行と自動化](10-headless-automation.md)

[^skill]: Claude Code公式ドキュメント、「Extend Claude with skills」。"Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." / "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." / "Commit it so your team gets it too" / "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." / "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." / "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills （確認日 2026-11-06）
[^skill-debug]: Claude Code公式ドキュメント、「Extend Claude with skills」。"Claude Code reads the frontmatter only when the opening `---` is the file's first line." / "Claude Code ignores a field it doesn't recognize without reporting an error." / "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." / "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." https://code.claude.com/docs/en/skills （確認日 2026-11-06）
[^sub]: Claude Code公式ドキュメント、「Create custom subagents」。"Subagents are specialized AI assistants that handle specific types of tasks." / "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." / "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." / "To create one, ask Claude to write it for you, or write the file yourself." / "If Claude can't find the new subagent, restart Claude Code and try again." / "It also sends its own requests, which count toward the same usage limits as your main conversation." https://code.claude.com/docs/en/sub-agents （確認日 2026-11-06）
[^mcp]: Claude Code公式ドキュメント、「Connect to MCP servers」。"lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." / "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." / "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." / "By default it registers the server at `local` scope: private to you, active only in the current project." https://code.claude.com/docs/en/mcp-quickstart （確認日 2026-11-06）
[^mcp-trust]: Claude Code公式ドキュメント、「Connect Claude Code to tools via MCP」。"Verify you trust each server before connecting it." / "Servers that fetch external content can expose you to prompt injection risk." https://code.claude.com/docs/en/mcp （確認日 2026-11-06）
[^mcp-audit]: AnthropicがMCPサーバーのセキュリティ点検をしてくれるわけでもありません。Claude Code公式ドキュメント、「Security」。"Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." https://code.claude.com/docs/en/security （確認日 2026-11-06）
[^plugin]: Claude Code公式ドキュメント、「Plugins overview」。"A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." / "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." / "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." / "Whatever the tier, a plugin you install can run code with your user privileges." / "An enabled plugin is part of every session, not only the sessions where you use it." https://code.claude.com/docs/en/plugins/overview （確認日 2026-11-06）
[^plugin-install]: Claude Code公式ドキュメント、「Install and manage plugins」。"/plugin install commit-commands@claude-plugins-official" / "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." / "A plugin can run hooks and MCP servers, so read the pane before you install." / "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." https://code.claude.com/docs/en/plugins/install （確認日 2026-11-06）
[^arguments]: Claude Code公式ドキュメント、「Extend Claude with skills」。"All arguments passed when invoking the skill." https://code.claude.com/docs/en/skills （確認日 2026-11-06）
