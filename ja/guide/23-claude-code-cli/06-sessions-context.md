# 第6章 セッションとコンテキスト

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: 会話はフォルダごとに保存され、いつでもまた開けます。会話が長くなったら `/compact` で縮め、別の作業に移るときは `/clear` で空にします。

昨日やっていた作業を、今日も続けたいときがあります。会話が長くなって、答えがぼやけてくるときもあります。この章では、その2つを扱います。[^run]

## セッションとは

**セッション**（Session）は、プロジェクトのフォルダに結びつけて保存された会話です。[^session-names] `claude` を起動して交わした会話のひとまとまりが、セッション1つです。

ここで大事なのは「フォルダに結びつけて」という点です。標準の一覧には、そのフォルダの会話だけが表示されます。そのため、この章のコマンドは、どれもターミナルで練習用フォルダに移動してから入力します。

```bash
cd ~/hello-ai-practice/terminal
```

新しく `claude` を起動すると、Claudeは前の会話を知りません。新しいセッションは、前の会話なしで始まるからです。[^fresh] 昨日の話を続けるには、前のセッションを自分で開く必要があります。

<Quiz id="ch806-session" />

## 名前を付けて、また開く

何日もかかる作業には、名前を付けておきましょう。[^rename-tip] 名前があれば、あとで探しやすくなります。セッションの中で、こう入力します。

```text
❯ /rename 週次会議-整理
  ⎿  Session renamed to: 週次会議-整理
```

名前を付けなくてもかまいません。Claude Codeが最初の依頼を要約して、タイトルを作ってくれます。[^session-names]

また開く方法は3つあります。どれも `/exit` で出てから、ターミナルで入力します。

| コマンド | いつ使う？ |
|---|---|
| `claude -c` | このフォルダのいちばん最近の会話[^continue-resume] |
| `claude -r` | 一覧から選ぶ[^continue-resume] |
| `claude -r 週次会議-整理` | 名前ですぐ開く[^continue-resume] |

さっき終えた会話なら、`claude -c` がいちばん早いです。続ける会話がないフォルダで入力すると、`No conversation found to continue` と表示して終わります。[^no-conversation] この文字が出たら、まずフォルダを確かめてみてください。`pwd` で、今どのフォルダにいるかがわかります。

何日か前の会話なら、`claude -r` で一覧を開きましょう。こう表示されます。

```text
  Resume session
  ╭──────────────────────────────────────────────────────────────────────────────────────────────╮
  │ ⌕ Search…                                                                                    │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────╯
    터미널

  ❯ 週次会議-整理
    4 seconds ago · HEAD · 320.7KB

    Ctrl+A to show all projects · Ctrl+B to only show current branch · Space to preview · Ctrl+R
    to rename · Type to search · Esc to cancel
```

上下の矢印キーで選んでEnterを押すと開きます。見るところは2か所だけです。

- **`❯` の行**: 選んだ会話の名前です。
- **その下の行**: いつの会話か（`4 seconds ago`）と、大きさ（`320.7KB`）です。真ん中の `HEAD` は無視してかまいません。

いちばん下の2行は、使えるキーの案内です。文字を入力すると検索、Spaceはプレビュー、Ctrl+Rは名前の変更、Escはキャンセルです。ほかのキーは、今は使わなくても大丈夫です。

すでに `claude` の中にいるなら、`/resume` と入力してください。同じ一覧が開きます。[^session-names] また開くと、同じセッションに新しいメッセージが続けて積み重なります。[^same-session]

<Quiz id="ch806-resume" />

## コンテキストウィンドウとは

**コンテキストウィンドウ**（Context window）は、Claudeが今この瞬間に抱えている内容の全体です。机の上に広げた資料だと考えるとわかりやすいです。

机の上にあるのは、あなたが送った言葉だけではありません。会話の記録、Claudeが読んだファイルの中身、コマンドを実行した結果がいっしょに置かれています。ルールを書いておいたファイル、自動で残したメモ、読み込んだスキル、基本の指示もいっしょに入っています。[^window] この4つの名前は、順に `CLAUDE.md`、自動メモリ、スキル、システム指示です。`CLAUDE.md` と自動メモリは8章、スキルは9章で学びます。今は名前だけ覚えておいてください。

この空間は **トークン**（Token）で数えます。AIが文章を細かく分けて数える単位です。1つの単語が1つのかけらになることもあれば、いくつかのかけらに分かれることもあります（[ステップ1の第1章](../00-common/01-what-is-llm.md)で見たあのかけらです）。長いファイルを1つ読ませると、そのぶん多くのトークンが机の上の場所を取ります。

会話が長くなると、空間が埋まっていきます。するとClaude Codeは、会話を自動で圧縮します。ただし、会話の最初のほうで出した指示は忘れられることがあります。[^works-context] 最初に一度「表で書いて」と言ったのに、いつの間にか表がなくなっていたら、このケースかもしれません。

ですから、長く守ってほしいルールは会話の中で言葉にしておくのではなく、`CLAUDE.md`（プロジェクトで守るルールを書いておくファイル）に書きます。[^works-context] 作り方は[8章](08-memory-settings.md)で扱います。

<Quiz id="ch806-window" />

## コンテキストを扱う3つのコマンド

最初から気にする必要はありません。答えがぼやけてきたなと思ったら、この3つを思い出せば大丈夫です。

**`/context` — どれだけ埋まったかを見る。** コンテキストがどれだけ埋まったかを、色のマス目で見せてくれます。[^context-grid] 種類ごとの使用量と、改善の提案もいっしょに出ます。[^context-doc] 結果は会話の中に文字で出ます。特に閉じなくても、そのまま続けて入力すれば大丈夫です。

**`/compact` — 要約して縮める。** ここまでの会話を要約して、空きを作ります。[^compact-cmd] 後ろに、何を残すかを書けます。[^context-doc] 書いておけば、必要な内容が要約から抜け落ちることが減ります。

```text
いまひとつの例: /compact
よい例:         /compact 議事録の形式について決めた内容だけ残して
```

会話がほとんどないときに入力すると、縮めるものがないと教えてくれます。

```text
❯ /compact
  ⎿  Not enough messages to compact.
```

会話がたまってから入力すると、縮めたあとに `Compacted (ctrl+o to see full summary)` と教えてくれます。

**`/clear` — 空にして新しく始める。** 空のコンテキストで新しい会話を始めます。前の会話は保存されているので、`/resume` で戻れます。[^compact-cmd] 関係のない作業に移るときに使ってください。古い会話が、次に必要なファイルの場所を取らずにすみます。[^context-doc]

どちらを使うか迷ったら、こう自分に聞いてみてください。

- 同じ作業を続ける？ それなら `/compact`。
- 別の作業に移る？ それなら `/clear`。

::: details 詳しく（クリックして開く）
`/clear` を使うと、同じ名前のセッションが2つになることがあります。このとき `claude -r 名前` は、その名前の一覧を表示します。時間と大きさを見て選べば大丈夫です。
:::

もうひとつコツがあります。2回言い直しても答えがずれ続けるなら、3回目の言い直しはやめましょう。`/clear` して、依頼をもっとよく書いて始め直すほうがよいです。[^two-corrections] 失敗した試みが会話にたまっていないからです。

会話が長くなりすぎると、こんな文字が出ることがあります。

```text
Context limit reached · /compact or /clear to continue
```

あわてなくて大丈夫です。[^context-limit] 書いてあるとおり、どちらかを入力すればOKです。

<Quiz id="ch806-manage" />

## 会話の記録はあなたのパソコンに残ります

セッションをまた開けるのは、記録があなたのパソコンに保存されているからです。会話の記録は `~/.claude/projects/` フォルダに平文で保存されます。平文とは、暗号をかけていない、誰でも読める文字という意味です。標準の保存期間は30日です。[^local-history]

ここには、あなたが入力した言葉だけが残るわけではありません。ツールを通った内容もいっしょに残ります。ファイルの中身、コマンドの出力、貼り付けた文章などです。[^transcript]

ですから、こんな習慣をつけましょう。

- パスワードや認証情報が入ったファイルは、Claudeに読ませないでください。読んだ瞬間に、記録にも残ることがあります。
- ほかの人といっしょに使うパソコンなら、このフォルダがあることを覚えておいてください。

読むこと自体をふさぐ方法は、[7章](07-permissions-undo.md)で試します。

::: details 詳しく（クリックして開く）
- 1つのプロジェクトの記録を消す `claude purge` コマンドもあります。[^purge] 元に戻しにくいので、練習として実行するのはやめましょう。このガイドでも実行していません。
- サーバー側の保存期間は[13章](13-cost-safety-trouble.md)で扱います。
:::

<Quiz id="ch806-history" />

## やってみよう

練習用フォルダ `~/hello-ai-practice/terminal` で試します。

1. `claude` を起動して、こう聞いてみます。

   ```text
   @inbox/meeting-2026-10-27-weekly.txt このメモで決まったことを2行で教えて。
   ```

2. `/rename 週次会議-整理` で名前を付けて、`/exit` で出ます。
3. ターミナルで `claude -c` でまた開き、「さっき私、何を聞いたっけ？」と聞きます。前の会話を覚えていれば、うまく続いています。
4. `/exit` で出たあと、ターミナルで `claude -r` と入力します。一覧から `週次会議-整理` を探して、Enterで開きます。
5. `/context` と入力して、何が空間を使っているかを見ます。
6. `/compact 決まったことだけ残して` と入力します。会話が短くて、縮めるものがないという文字が出てもかまいません。
7. `/clear` で空にしてから、「さっき私、何を聞いたっけ？」ともう一度聞きます。わからないと答えたら、コンテキストが空になっています。`/resume` で前のセッションをまた探してみてください。

自分に聞いてみてください。昨日の会話を探して続けられそうか？ いつ `/compact` を使い、いつ `/clear` を使うか説明できるか？

## まとめ

- セッションは、フォルダに結びつけて保存された会話。新しく起動すると、前の会話を知らない。
- `/rename` で名前を付け、`claude -c` か `claude -r` でまた開く。
- コンテキストウィンドウには、会話だけでなく、ファイルの中身やコマンドの出力も入る。
- 自動圧縮のあとは、最初のほうの指示が忘れられることがある。長く守るルールは `CLAUDE.md` に書く。
- 同じ作業を続けるなら `/compact`、別の作業に移るなら `/clear`。
- 会話の記録は、あなたのパソコンに平文で残る。標準は30日。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Session | セッション | フォルダに結びつけて保存された会話 |
| Context window | コンテキストウィンドウ | Claudeが今抱えている内容の全体 |
| Token | トークン | AIが文章を数える単位 |
| Compact | コンパクト | 会話を要約して空きを作ること |
| Plaintext | プレーンテキスト | 暗号をかけていない平文 |

<ChapterDone :chapter="806" />

次の章: [第7章 許可と元に戻す操作](07-permissions-undo.md)

[^run]: この章の画面は、2026年11月6日にLinuxでClaude Code 2.1.318を実行した結果です。
[^session-names]: Claude Code公式ドキュメント、「Manage sessions」。"A session is a saved conversation tied to a project directory." / "if you don't name a session, Claude Code generates a session title for it." / "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." https://code.claude.com/docs/en/sessions （確認日 2026-11-06）
[^fresh]: Claude Code公式ドキュメント、「How Claude Code works」。"Each new session starts with a fresh context window, without the conversation history from previous sessions." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^rename-tip]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"for work that spans several days, `/rename oauth-migration` in the session names it" https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^continue-resume]: Claude Code公式ドキュメント、「CLI reference」。"Load the most recent conversation in the current directory" / "Resume a specific session by ID or name, or show an interactive picker to choose a session." https://code.claude.com/docs/en/cli-reference （確認日 2026-11-06）
[^no-conversation]: Claude Code公式ドキュメント、「Common workflows」。"it prints `No conversation found to continue` and exits." https://code.claude.com/docs/en/common-workflows （確認日 2026-11-06）
[^same-session]: Claude Code公式ドキュメント、「How Claude Code works」。"Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^window]: Claude Code公式ドキュメント、「How Claude Code works」。"Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^works-context]: Claude Code公式ドキュメント、「How Claude Code works」。"Claude compacts automatically, but instructions from early in the conversation can get lost." / "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." https://code.claude.com/docs/en/how-claude-code-works （確認日 2026-11-06）
[^context-grid]: Claude Code公式ドキュメント、「Commands」。"Visualize current context usage as a colored grid." https://code.claude.com/docs/en/commands （確認日 2026-11-06）
[^context-doc]: Claude Code公式ドキュメント、「Explore the context window」。"run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." / "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." / "Old conversation crowds out the files you need next and costs tokens on every message." https://code.claude.com/docs/en/context-window （確認日 2026-11-06）
[^compact-cmd]: Claude Code公式ドキュメント、「Commands」。"Free up context by summarizing the conversation so far." / "Start a new conversation with empty context." / "Resume the previous conversation with `/resume`" https://code.claude.com/docs/en/commands （確認日 2026-11-06）
[^two-corrections]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^context-limit]: Claude Code公式ドキュメント、「Error reference」。"Context limit reached · /compact or /clear to continue" https://code.claude.com/docs/en/errors （確認日 2026-11-06）
[^local-history]: Claude Code公式ドキュメント、「Data usage」。"Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." https://code.claude.com/docs/en/data-usage （確認日 2026-11-06）
[^transcript]: Claude Code公式ドキュメント、「Explore the .claude directory」。"Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." https://code.claude.com/docs/en/claude-directory （確認日 2026-11-06）
[^purge]: Claude Code公式ドキュメント、「Explore the .claude directory」。"Run `claude purge` to delete the state Claude Code holds for one project." https://code.claude.com/docs/en/claude-directory （確認日 2026-11-06）
