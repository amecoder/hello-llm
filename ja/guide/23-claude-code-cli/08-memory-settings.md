# 第8章 プロジェクトの記憶と設定

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: 毎回言うのが面倒なルールは `CLAUDE.md` に書きます。必ず守らなければならないルールは、`settings.json` の拒否ルールにします。

この章の画面は、2026年11月6日にLinuxでClaude Code 2.1.318を実行した結果です。

[6章](06-sessions-context.md)で見たとおり、新しいセッションは前の会話を知りません。そのため、「議事録は表で書いて」を毎回言い直すことになります。この章では、その言葉をファイルに書いておきます。

## CLAUDE.mdに何を書くか

**CLAUDE.md** は、あなたが書く、ずっと効く指示です。プロジェクトのフォルダに置くと、そのフォルダで `claude` を起動したときに読み込まれます。[^claudemd] 新しく来た同僚に渡す業務メモだと考えるとわかりやすいです。

書く基準はかんたんです。Claudeがファイルを読んでもわからないことだけを書きます。[^practice] 答えを書く言語、議事録の節の構成、結果を保存するフォルダなどです。

書かないものもあります。

- フォルダ構成の説明。Claudeが自分で読んでみます。[^practice]
- いくつもの段階がある手順。こういうものは、[9章](09-skills-extensions.md)のスキル（手順を書いておいて、名前で呼び出して使うファイル）が向いています。[^skill-procedure]
- パスワードや認証情報

長さは、ファイル1つあたり200行未満を目標にしてください。[^claudemd] 大文字や「必ず!!」を重ねる必要もありません。強調を重ねると、かえってルールを必要以上に当てはめがちになります。[^practice]

```text
いまひとつの例: 議事録を必ず!! きれいにしっかり整理すること!!
よい例:         議事録は、決定事項、やること、次回の会議の3つの節だけで書く。
```

よい例は、合っているか間違っているかを確かめられます。「きれいに」は確かめる方法がありません。

<Quiz id="ch808-what" />

## CLAUDE.mdを作って確かめる

実習用のルールです（ファイルで見る: [ch8-CLAUDE.md.txt](/practice/ja/cli/results/ch8-CLAUDE.md.txt)）。`/exit` で出て、ターミナルで練習用フォルダに移動します。MacとLinuxは、下を丸ごと貼り付けます。`notes` フォルダもいっしょに作ります。

```bash
mkdir notes
cat > CLAUDE.md <<'EOF'
# 街角カフェ メモ整理のルール

- 答えは韓国語で書く。
- 議事録は、決定事項、やること、次回の会議の3つの節だけで書く。
- やることは表で書く。列は担当、やること、期限。
- メモにない内容は作り上げない。
- 整理したファイルはnotesフォルダに保存する。
EOF
```

貼り付けたあと、まだ実行されていなければ、Enterをもう一度押してください。何も表示されなければ成功です。`ls` で `CLAUDE.md` と `notes` ができたか確かめてください。

Windows PowerShellでは、`mkdir notes` のあとに `notepad CLAUDE.md` でメモ帳を開きます。`cat` で始まる行と `EOF` の行を除いて、その間だけを入れます。新しいファイルを作るか聞かれたら `はい` を押し、`Ctrl + S` で保存して閉じます。この方法は実行して確かめていません。

新しいセッションがルールを知っているか、ターミナルで確かめます。今回は `claude -p` を使います。`-p` を付けると、会話の画面が開きません。1つの質問への答えだけをターミナルに表示して、すぐ終わります。ちょっと確かめたいときに便利です。詳しくは[10章](10-headless-automation.md)で扱います。

```bash
claude -p "このフォルダの議事録のルールは何？ 3行で答えて。"
```

```text
1. 議事録は、決定事項、やること、次回の会議の3つの節だけで書き、メモにない内容は作り上げません。
2. やることは、担当、やること、期限の列がある表で書きます。
3. 答えは韓国語で書き、整理したファイルはnotesフォルダに保存します。
```

会話で一度も言っていないルールを答えました。ファイルが読み込まれたということです。すべてのプロジェクトで使う自分の習慣は、`~/.claude/CLAUDE.md` に置きます。[^claudemd]

今回の実習では、`CLAUDE.md` を自分で書けば大丈夫です。下書きを自動で作る `/init` コマンドもありますが、今は使いません。

::: details `/init` はいつ使うの？（クリックして開く）
`/init` は、`CLAUDE.md` の下書きを自動で作るコマンドです。ただし、コードを分析して、ビルドのコマンド、テストの方法、プロジェクトの慣習を探して書きます。[^init] わたしたちのメモのフォルダにはそういうものがないので、自分で書くほうがかんたんです。このガイドでも実行していません。あとでコードのプロジェクトを扱うときに使ってみてください。
:::

<Quiz id="ch808-make" />

## /memoryと自動メモリ

セッションの中で `/memory` と入力すると、指示ファイルの一覧が出ます。[^memory]

```text
  ❯ Auto-memory  true

  ❯ Project instructions   Checked in at ./CLAUDE.md
    User instructions      Saved in ~/.claude/CLAUDE.md
    Open auto-memory folder
```

最初の行の **自動メモリ**（Auto memory）は、Claudeがあなたの訂正や好みを見て、自分で書くメモです。`CLAUDE.md` はあなたが書き、自動メモリはClaudeが書きます。ローカルのセッションでは、最初からオンになっています。[^memory]

プロジェクトごとに、`~/.claude/projects/<project>/memory/` フォルダに保存されます。ふつうのマークダウンファイルなので、いつでも直したり消したりできます。オフにしたいときは、`/memory` の中の切り替えスイッチを使います。[^memory]

「覚えておいて」と言うと、自動メモリに保存します。[^memory] ただし、このフォルダでいつも守るべきルールなら、`CLAUDE.md` に自分で書いてください。自分で書いた文章なので、何が書かれているかがはっきりします。

<Quiz id="ch808-memory" />

## settings.jsonの3つの場所

**settings.json** は、Claude Codeの動きを変える設定ファイルです。[^settings] 中身はJSON形式で書きます。JSONは、欄の名前と値を決まった形で書いた文字です。[7章](07-permissions-undo.md)で作った拒否ルールが、ここに入っています。置く場所は3か所です。[^settings]

| ファイル | 適用される範囲 |
|---|---|
| `~/.claude/settings.json` | 自分のパソコンのすべてのプロジェクト |
| `.claude/settings.json` | このフォルダで作業する全員 |
| `.claude/settings.local.json` | 自分だけ、このプロジェクトだけ |

同じ設定が複数の場所にあるときは、表で範囲がせまいほうが勝ちます。[^settings][^managed] たとえば、1行目のファイルと3行目のファイルが違うことを決めていたら、3行目（自分だけ、このプロジェクトだけ）が勝ちます。

拒否ルールは例外です。どの段階であれ拒否されたツールは、ほかの段階で許可することはできません。[^permissions]

- 保存すると、実行中のセッションにも、ほとんどの場合は再起動なしで反映されます。[^settings]
- どのファイルが読み込まれたかは、`/status` の Setting sources の行で見ます。[^settings]
- 最後のカンマとコメントは使えません。[^json-rule] 手で直したあとに効かなかったら、まずカンマを見てください。

```text
間違った例: { "deny": ["Read(./secret/**)"], }
正しい例:   { "deny": ["Read(./secret/**)"] }
```

間違った例は、`]` の後ろにカンマが残っています。

<Quiz id="ch808-settings" />

## .claudeフォルダの構成

Claude Codeは、プロジェクトのフォルダと、ホームフォルダの `~/.claude` から、指示、設定、メモリを読み込みます。[^folder] 名前が点で始まるフォルダは、ふだんは隠れています。`ls -a`（PowerShellでは `ls -Force`）で見られます。

```text
~/hello-ai-practice/terminal/        このプロジェクト
├── CLAUDE.md                  共有の指示
├── CLAUDE.local.md            自分だけが使う指示
└── .claude/
    ├── settings.json          共有の設定
    ├── settings.local.json    自分だけが使う設定
    ├── skills/                このプロジェクトのスキル
    └── agents/                このプロジェクトのサブエージェント

~/.claude/                     自分のすべてのプロジェクト
├── CLAUDE.md, settings.json   個人の指示と設定
├── skills/, agents/           個人のスキルとサブエージェント
└── projects/                  会話の記録と自動メモリ
```

`skills/` と `agents/` は[9章](09-skills-extensions.md)で学びます。スキルは名前で呼び出して使う作業の説明書で、サブエージェントはわきの作業を別に引き受ける助っ人です。今は、こういうフォルダがあることだけ知っておけば大丈夫です。

全部覚える必要はありません。ほとんどの場合、`CLAUDE.md` と `settings.json` だけを直せば大丈夫です。[^folder]

<Quiz id="ch808-folder" />

## 言葉で伝えるルールと、強制されるルール

この章でいちばん大事な節です。下の2行は似て見えますが、力が違います。

```text
CLAUDE.md に書く:     secretフォルダは読まない。
settings.json に書く: "deny": ["Read(./secret/**)"]
```

`CLAUDE.md` の言葉は、Claudeが **何をしようとするか** に影響します。でも、Claude Codeが **何を許可するか** は変えられません。権限ルールは、モデルではなくClaude Codeというプログラムが強制します。[^permissions] 会社にたとえると、`CLAUDE.md` は業務の案内文で、権限ルールは出入り口の鍵です。

ですから、本当に大事なことは拒否ルールにしてください。[^practice] こう分けてみましょう。

- 間違っても直せばすむこと（言葉づかい、形式）は `CLAUDE.md`。
- 間違うと困ること（秘密のファイルを読むこと）は拒否ルール。
- 毎回必ず起きてほしいことは、[11章](11-hooks-statusline.md)のフック（決まった瞬間ごとにClaude Codeが自動で実行するコマンド）。[^hook]

<Quiz id="ch808-enforce" />

## やってみよう

1. ターミナルで、上の `CLAUDE.md` と `notes` フォルダを作り、`claude -p` でルールを聞いてみます。
2. `claude` を起動して、「@inbox/meeting-2026-10-27-weekly.txt このメモを議事録に整理して。」と頼みます。表で書いてと言っていないのに、表が出てきますか？ ファイルは `notes` に保存されましたか？
3. `/memory` と `/status` を開いてみて、Escで閉じます。
4. `/exit` で出て、ターミナルで `ls -a`（PowerShellでは `ls -Force`）を使って `.claude` フォルダを探します。

自分に聞いてみてください。新しいセッションはルールを守ったか？ 自分のルールの中に、言葉だけにしておくと困るものはあるか？

## まとめ

- `CLAUDE.md` には、Claudeが読んでもわからないことだけを、確かめられる形で書く。
- `/init` はコードのフォルダ向け。メモのフォルダは自分で書くほうがかんたん。
- 自動メモリはClaudeが書き、`/memory` で見たりオフにしたりする。
- `settings.json` には3つの場所があり、範囲がせまいほうが勝つ。拒否はどの場所でも勝つ。
- 言葉で伝えたルールは試みを変え、権限ルールは許可を変える。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| CLAUDE.md | クロード エムディー | あなたが書く、ずっと効く指示のファイル |
| Auto memory | オートメモリ | Claudeが自分で書くメモ |
| settings.json | セッティングス ジェイソン | 動きを変える設定ファイル |

<ChapterDone :chapter="808" />

次の章: [第9章 スキルと拡張機能](09-skills-extensions.md)

[^claudemd]: Claude Code公式ドキュメント、「How Claude remembers your project」。"CLAUDE.md files: instructions you write to give Claude persistent context." / "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." / "target under 200 lines per CLAUDE.md file." / "Personal preferences for all projects" https://code.claude.com/docs/en/memory （確認日 2026-11-06）
[^practice]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." / "Claude reads the repo itself. Only write down what isn't in there." / "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." / "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^skill-procedure]: Claude Code公式ドキュメント、「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （確認日 2026-11-06）
[^init]: Claude Code公式ドキュメント、「How Claude remembers your project」。"Run `/init` to generate a starting CLAUDE.md automatically." / "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." https://code.claude.com/docs/en/memory （確認日 2026-11-06）
[^memory]: Claude Code公式ドキュメント、「How Claude remembers your project」。"The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Auto memory is on by default in local sessions." / "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." / "Auto memory files are plain markdown you can edit or delete at any time." / "To toggle it, open `/memory` in a session and use the auto memory toggle" / "Claude saves it to auto memory." https://code.claude.com/docs/en/memory （確認日 2026-11-06）
[^settings]: Claude Code公式ドキュメント、「Settings files and precedence」。"Settings are the JSON keys that change how Claude Code behaves" / "You, in every project on this machine" / "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" / "You, in this one project only." / "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." / "Settings precedence, highest first: managed settings, command line, project local, shared project, user." / "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" / "Run `/status` inside Claude Code to see which settings sources are active." https://code.claude.com/docs/en/settings （確認日 2026-11-06）
[^permissions]: Claude Code公式ドキュメント、「Configure permissions」。"If a tool is denied at any level, no other level can allow it." / "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." / "Permission rules are enforced by Claude Code, not by the model." https://code.claude.com/docs/en/permissions （確認日 2026-11-06）
[^json-rule]: Claude Code公式ドキュメント、「Automate actions with hooks」。"Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide （確認日 2026-11-06）
[^managed]: 会社のパソコンなら、管理者が決めた設定（managed settings）が、この3つより優先されます。根拠は同じドキュメントの "Settings precedence, highest first: managed settings, command line, project local, shared project, user." です。https://code.claude.com/docs/en/settings （確認日 2026-11-06）
[^folder]: Claude Code公式ドキュメント、「Explore the .claude directory」。"Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." / "Most users only edit `CLAUDE.md` and `settings.json`." https://code.claude.com/docs/en/claude-directory （確認日 2026-11-06）
[^hook]: Claude Code公式ドキュメント、「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （確認日 2026-11-06）
