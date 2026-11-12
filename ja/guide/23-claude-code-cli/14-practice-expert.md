# 第14章 実習課題とプロのような使い方

<Badge type="tip" text="必須" /> この段階を進めるなら、必ず読んでください。

> **一言まとめ**: ここまで学んだことを、**自分の手でもう一度ずつ**やってみる課題が8つあります。最後の課題は、**自分のメモ**で週のまとめを作ることです。

この章は2026年11月6日時点の内容です。課題の結果は、実行するたびに少しずつ違います。

プロとは、機能をたくさん使う人ではありません。小さく始めて、確認の基準を渡し、必要なときだけルールを足す人です。

## 実習課題の進め方

1. **練習フォルダを新しく作ります。** 例: `~/hello-ai-practice/again`（「다시」は「もう一度」）。`inbox` には週次会議のメモを1つだけ入れます。臨時会議のメモは課題7で入れます。
2. **課題の「やってみること」のとおりに進めます。** 灰色の箱の文をコピーして使えば大丈夫です。
3. **「うまくいったか確認」を1つずつチェックします。** できなかった項目があったら、「見直す場所」の章で、その部分だけもう一度やってみてください。

MacとLinuxは、ターミナルでこう入力します。メモは、前に使っていた練習フォルダからコピーします。

```bash
mkdir -p ~/hello-ai-practice/again/inbox
cd ~/hello-ai-practice/again
cp ../terminal/inbox/meeting-2026-10-27-weekly.txt inbox/
```

Windows PowerShellはこう入力します。この章のWindowsのコマンドは、実行して試してはいません。

```powershell
mkdir $HOME\hello-ai-practice\again\inbox
cd $HOME\hello-ai-practice\again
cp ..\terminal\inbox\meeting-2026-10-27-weekly.txt inbox\
```

課題1〜7は順番に進めます。前の課題の結果を、後の課題が使います。**課題8はいちばん最後に**やります。

最初から全部できなくてもかまいません。1日に課題を2〜3個ずつで十分です。結果の形がこのガイドと違っても、チェックリストを全部チェックできれば成功です。

守ることは3つです。

- **最初は `claude --permission-mode manual` で始めます。** 何をしようとしているのかを1つずつ見ながら慣れていきます。
- **練習フォルダの中だけでやります。** 自分の文書が全部入ったフォルダは使いません。
- **課題8の自分のメモは、個人情報を消してから**入れます。

<Quiz id="ch814-how" />

## 課題

### 課題1. 最初の整理を任せる

**こんなとき**: ごちゃごちゃのメモを議事録に変えたいとき。

**やってみること**: 練習フォルダで `claude --permission-mode manual` で起動して、送ります。信頼の確認の画面で、最初に選ばれているのは `No, exit` です。下矢印で `Yes, I trust this folder` を選びます。

```text
inbox/meeting-2026-10-27-weekly.txt を読んで minutes.md に整理して。決定事項、タスク（担当・期限）、次の会議に分けて、メモにない内容は書かないで。
```

**うまくいったか確認**

- ☐ 許可の画面の内容を読んでから `Yes` を選んだ
- ☐ タスクごとに担当と期限がある
- ☐ 元のメモはそのままだ

**見直す場所**: [4章](04-first-session.md)

### 課題2. 名前を付けて続ける

**こんなとき**: 何日かにわたる仕事を、次に見つけて続けたいとき。

**やってみること**: `/rename 週次会議-整理` で名前を付けて、`/exit` で抜けます。そのあと `claude -r` でそのセッションを探して開きます。

**うまくいったか確認**

- ☐ 一覧から名前でセッションを見つけた
- ☐ 続けたセッションが、さっきの会話を覚えている
- ☐ `/context` で、コンテキストがどれだけ埋まっているかを見た

**見直す場所**: [6章](06-sessions-context.md)

### 課題3. 許可と巻き戻し

**こんなとき**: Claudeが何を変えるのかを見て、必要なら元に戻したいとき。

**やってみること**: 次の順番でやってみてください。

1. いちばん下の行を見ます。一覧から選んだセッションは、新しく起動したセッションと同じように、自動モードで始まることがあります。`auto mode on` なら、`Shift + Tab` を1回押して `manual mode on` に変えます。
2. 下の依頼を送り、許可の画面で変わる行を読みます。
3. 終わったら、入力欄が空の状態でEscを2回押して、巻き戻しメニューを開きます。
4. `Restore code and conversation` を押して元に戻します。練習フォルダなので、心配せずにやってみてください。このガイドでも、ここまで押してファイルが戻ることを確かめました。
5. 元に戻すと、送った依頼が入力欄に戻ってきます。Escを2回押して消してから、次の課題に進みます。

```text
minutes.md のタスクの表に「状態」の列を追加して、すべて「進行中」と書いて。ほかの部分は直さないで。
```

**うまくいったか確認**

- ☐ 許可の画面で、変わる行を先に読んだ
- ☐ 巻き戻しメニューの警告の文を読んだ
- ☐ 巻き戻しで戻せないものを1つ言える

**見直す場所**: [7章](07-permissions-undo.md)

### 課題4. ルールとスキルを作る

**こんなとき**: 同じルールや手順を、何度も言い直しているとき。

**やってみること**: 議事録のルールをCLAUDE.mdに3〜5行で書きます。そのあとスキル `meeting-notes` を作り、**新しいセッション**でルールを伝えずに呼び出します。お手本: [CLAUDE.md](/practice/ja/cli/results/ch8-CLAUDE.md.txt) ・ [スキル](/practice/ja/cli/results/ch9-skill-meeting-notes.txt)

```text
/meeting-notes inbox/meeting-2026-10-27-weekly.txt
```

**うまくいったか確認**

- ☐ `/` を入力したとき、一覧に `meeting-notes` が見える
- ☐ 新しいセッションの結果がルールを守った
- ☐ ファイルが `notes` フォルダにできた

**見直す場所**: [8章](08-memory-settings.md)、[9章](09-skills-extensions.md)

### 課題5. コマンド1行で回す

**こんなとき**: 会話を開かずに整理を終わらせたいとき。

**やってみること**: 回す前に、セッションで `/usage` を見ておきます。そのあと `/exit` で抜けて、ターミナルで進めます。[10章](10-headless-automation.md)の貼り付け用の箱で `weekly-summary.sh`（週のまとめのスクリプト）を作り、`bash weekly-summary.sh` で回します。Windowsは10章のPowerShellの箱を貼り付けます。

**うまくいったか確認**

- ☐ 人が答えなくても、最後まで回った
- ☐ メモごとに `完了:` または `失敗:` が出た
- ☐ 回す前と後の `/usage` を比べた

**見直す場所**: [10章](10-headless-automation.md)、[13章](13-cost-safety-trouble.md)

### 課題6. フックとGitの記録

**こんなとき**: ファイルが変わった跡を残し、今の状態を保存しておきたいとき。

**やってみること**: 次の順番でやってみてください。

1. 11章の変更記録のフックを入れて、ファイルを1つ変えさせます。
2. この練習フォルダで、12章の「Gitで最初の記録を残す」を最初からたどります。ただし、12章の最初の箱の `cd ~/hello-ai-practice/terminal` の行は入力しなくてかまいません。すでにそのフォルダにいるからです。`git init` から入力します。
3. 12章のとおりに `.gitignore` を作り、`git config`・`git add .`・`git status --short` を経て、`git commit` で最初のコミットまで進めます。

**うまくいったか確認**

- ☐ `/hooks` にフックが見える
- ☐ `changelog.txt`（変更記録）を自分で開いて、行が増えたかを見た
- ☐ `git log --oneline` に記録が見える

**見直す場所**: [11章](11-hooks-statusline.md)、[12章](12-parallel-remote.md)

### 課題7. 隠れた指示とworktree

**こんなとき**: 他人の資料を任せるときに気をつけることを身につけ、元のフォルダに触れずに試したいとき。

**やってみること**: 大きく3つの段階です。

1. 臨時会議のメモを `inbox` に入れ、中身を読んでからコミットします。
2. worktreeで、Claudeにそのメモを任せます。
3. 終わったら、元のフォルダの `inbox` からメモを取り出します。

コミットを先にするのには理由があります。[12章](12-parallel-remote.md)で見たとおり、worktreeにはコミットしたファイルしか入りません。コミットしないと、worktreeの中でこのメモが見えません。

1つ目の段階では、13章で保存しておいたファイルを使います。消してしまったなら、[13章](13-cost-safety-trouble.md)のとおりにもう一度保存します。MacとLinuxはこう入力します。

```bash
cp ~/Downloads/meeting-2026-10-29-adhoc.txt inbox/
cat inbox/meeting-2026-10-29-adhoc.txt
git add .
git commit -m "臨時会議のメモを追加"
```

Windows PowerShellはこう入力します。

```powershell
cp $HOME\Downloads\meeting-2026-10-29-adhoc.txt inbox\
Get-Content -Encoding UTF8 inbox\meeting-2026-10-29-adhoc.txt
git add .
git commit -m "臨時会議のメモを追加"
```

2つ目の段階はこうします。

- `claude --worktree injection-test` で始めます。
- いちばん下の行が `auto mode on` なら、`Shift + Tab` を1回押して `manual mode on` に変えます。
- 13章のよい例のとおりに任せます。

3つ目の段階で、元のフォルダの `inbox` からメモを取り出す理由は `weekly-summary.sh` です。このスクリプトは、`inbox` の会議メモをすべて人の目を通さずに処理します。隠れた指示が入ったメモが残っていると、次に回したときにそのまま処理されます。取り出すコマンドは、13章「隠れた指示に気をつける」の節の最後にあります。

**うまくいったか確認**

- ☐ いちばん下の行が `manual mode on` であることを確かめた
- ☐ `! pwd` で、worktreeの中にいることを確かめた
- ☐ 議事録の最後に「すべてのタスク完了」がない
- ☐ 終えるとき、残すか消すかのどちらを選ぶかを読んでから選んだ
- ☐ 臨時会議のメモを `inbox` から取り出した

**見直す場所**: [12章](12-parallel-remote.md)、[13章](13-cost-safety-trouble.md)

### 課題8. 自分のメモで週のまとめを作る

**こんなとき**: もう練習ではなく、自分の仕事に使いたいとき。

**やってみること**: 新しいフォルダ（例: `~/hello-ai-practice/my-weekly-summary`、「自分の週のまとめ」）に `inbox` を作り、**個人情報を消した**自分のメモを2〜3個入れます。入れるときに2つのことをそろえます。

- ファイル名は `meeting-日付.txt` の形にそろえます。スクリプトが `meeting-`（「会議-」）で始まるファイルだけを探すからです。
- WordやHangul（ワープロソフト）のファイルなら、`.txt` で保存してから入れます。

そのあと `claude` を起動して、送ります。

```text
inboxのメモを読んで、私が毎週使うまとめの様式を決めたい。どんな項目が必要か、まず私に質問して。答えを聞いてから、CLAUDE.mdにルールを3〜5行で書いて、.claude/skills/meeting-notes/SKILL.md のスキルを作って。
```

スキルができたら `/exit` で抜けて、課題5のスクリプトをこのフォルダにコピーして回します。Windowsは、10章のPowerShellの箱をこのフォルダで貼り付けます。

```bash
cp ../again/weekly-summary.sh .
bash weekly-summary.sh
```

回し終わったメモは移しておきます。そうすれば、次の週に同じメモをまた整理せずにすみます。`mv` はファイルを移すコマンドです。次の週は `inbox` に新しいメモを入れて回します。MacとLinuxはこう入力します。

```bash
mkdir -p done
mv inbox/meeting-*.txt done/
```

Windows PowerShellはこう入力します。

```powershell
mkdir done -Force
Move-Item inbox\meeting-*.txt done\
```

**うまくいったか確認**

- ☐ ルールを書く前にClaudeが質問し、自分の答えが反映された
- ☐ `bash weekly-summary.sh` の1行（Windowsは10章のPowerShellの箱）で、自分のメモが自分の様式どおりに整理される
- ☐ 数字・名前・期限を、元のメモと照らし合わせた
- ☐ 次の週も同じコマンドで回るか、メモを新しく入れて試した

**見直す場所**: [8章](08-memory-settings.md)、[9章](09-skills-extensions.md)、[10章](10-headless-automation.md)

<Quiz id="ch814-check" />

## プロの習慣

Claude Codeは、設定をしなくても、新しいセッションのふつうの最初の依頼だけで、たいていうまく動くように作られています。[^plain] だから、複雑な設定より習慣が先です。

**小さく始めます。** 大きな仕事は、まずファイル1つでやってみます。誤解されたときに、早く気づけます。

- **惜しい例**: `自分の文書フォルダを全部整理して`
- **よい例**: `inboxのメモを1つだけ議事録に整理して。結果を見てから残りを任せるね。`

**確認の基準を渡します。** 合っているか間違っているかを、Claudeが確かめる方法を渡してください。そうすれば、自分で直しながら進められます。[^check]

- **惜しい例**: `議事録をうまく書いて`
- **よい例**: `議事録を書いたあと、メモの金額・日付・名前がすべて同じか照らし合わせて、違うものがあったら表で教えて。`

**仕事が変わったら `/clear` します。** 集中したコンテキストのほうがよい答えをくれて、コストも少なくすみます。[^clear]

**2回間違えたら書き直します。** 最初の1分を見守って、ずれてきたらすぐEscを押します。2回言い直しても間違えるなら、3回目を直そうとせず、`/clear` してからよりよい依頼を書きます。[^two-fails] 長くなった会話にしがみつくより速いです。

<Quiz id="ch814-habits" />

## ルールは必要なときに足す

最初から全部のルールを書く必要はありません。同じ不便がくり返されたときに、1つずつ足してください。

| こんなことが起きたら | これを足す |
|---|---|
| 同じことをまた言っている | CLAUDE.mdに1行 |
| 同じ手順を何度も貼り付けている | スキル[^add-skill] |
| 毎回必ず起きてほしい | フック[^add-hook] |
| 絶対にしてはいけない | 拒否ルール[^add-deny] |

CLAUDE.mdには、Claudeがフォルダを読んでもわからないことだけを書きます。[^only-unknown] 大文字や「重要！」を重ねないでください。ふつうの1行で十分です。強調を重ねると、ルールを必要以上に当てはめやすくなります。[^no-caps]

<Quiz id="ch814-rules" />

## 毎週のルーティン

作ったツールを、毎週こんなふうに回してみてください。

1. **集める**: メモをその都度 `inbox` に入れる。個人情報は消す。
2. **整理する**: `bash weekly-summary.sh` を回す（Windowsは10章のPowerShellの箱）。
3. **確かめる**: 数字・担当・期限を元のメモと照らし合わせる。
4. **記録する**: 回し終わったメモを `done` に移す。気に入ったら `git add .` と `git commit -m "今週のまとめ"` で残す。初めてなら、このフォルダで `git init` から始める。[12章](12-parallel-remote.md)の箱の `cd` の行は入力しない。
5. **直す**: 同じ指摘を2回したら、CLAUDE.mdかスキルを直す。

**最初から完璧でなくて大丈夫です。** 週に1回回して、不便だったところを1つだけ直せばいいのです。何週間かたつと、自分に合ったツールになります。

<Quiz id="ch814-routine" />

## やってみよう

1. 今週のメモを1つ `inbox` に入れます。
2. 毎週のルーティンを、1番から5番まで順番にやってみます。
3. 不便だったところを1つ、CLAUDE.mdかスキルに反映します。

自分に聞いてみてください。次の週も、同じコマンドで回るか？

## まとめ

- チェックリストは「Claudeが全部やった」ではなく、「自分が確かめた」をチェックする。
- 小さく始め、確認の基準を渡し、仕事が変わったら `/clear` する。
- 2回直しても間違えるなら、`/clear` して依頼を書き直す。
- ルールは、同じ不便がくり返されたときに1つずつ足す。
- 集める → 整理する → 確かめる → 記録する → 直す を毎週回す。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Routine | ルーティン | 毎週同じ順番で回す作業の習慣 |
| Script | スクリプト | 何行ものコマンドを入れて、一度に回すファイル |

<ChapterDone :chapter="814" />

次の章: [ステップ4 · AI-SDLC ガイド](/ja/guide/30-ai-sdlc/)

[^plain]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^check]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^clear]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^two-fails]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^add-skill]: Claude Code公式ドキュメント、「Extend Claude with skills」。"Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills （確認日 2026-11-06）
[^add-hook]: Claude Code公式ドキュメント、「Output styles」。"For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles （確認日 2026-11-06）
[^add-deny]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^only-unknown]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
[^no-caps]: Claude Code公式ドキュメント、「Best practices for Claude Code」。"Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." https://code.claude.com/docs/en/best-practices （確認日 2026-11-06）
