# 第12章 専門家のように使う — 判断し、試し、積み重ねる

> **一言まとめ**: 上手に使うために必要なのは、ボタンをたくさん知ることだけではありません。**何を任せるか判断し、任せる前に試し、繰り返すことは積み重ねておく**力です。
> この章では、第1〜11章で身につけた機能を自分の仕事に合わせて**組み合わせる方法**を扱います。最後に、Anthropicが作った講座集Claude Academyを紹介します。

この章では、新しい機能はほとんど扱いません。前の章で学んだClaudeの機能を、いつ、どう取り出して使うかがテーマです。

何を任せるか判断する方法（4D）、任せる前にすでに答えを知っている仕事で試す方法、学ぶときに質問してもらう方法など、**どのAIにも通じるやり方**は、[ステップ1 第11章「専門家のように使う」](../00-common/11-expert.md)にあります。先にそちらを読んでおくと、この章がわかりやすくなります。この章では、そのやり方をClaudeの機能とメニューに合わせて見ていきます。

## 仕事に合った道具を選ぶ

先にメニューを選ばないでください。まず、目の前の仕事がどんな形をしているかを見ましょう。そうすれば、使う機能は自然に決まります。[^academy-tabs]

| こんな仕事なら | これを使う | 詳しくは |
|---|---|---|
| 聞く、整える、一緒に考える | 通常の会話 | [ステップ1](../00-common/) |
| 簡単な事実、今日起きたこと | ウェブ検索 | [第6章](06-search.md#いつ何を使うか) |
| 最新情報なしで深く考える | 拡張思考 | [第6章](06-search.md#いつ何を使うか) |
| 資料をたくさん集めてレポートにする | リサーチ（有料） | [第6章](06-search.md#いつ何を使うか) |
| 一つの仕事を続けて進める | プロジェクト | [第7章](07-projects-tools.md#プロジェクト-—-資料と指示をひとつに) |
| 文書・表・発表資料のファイルが必要 | ファイルの作成 | [第4章](04-files-artifacts.md#ファイルを作ってもらう-—-excel・word・powerpoint・pdf) |
| 複数のステップを経て成果物を受け取る | Cowork（有料） | [第8章](08-cowork.md#coworkとは-—-会話ではなく仕事を任せる) |
| 決まった時間に繰り返す | 予約タスク（有料） | [第8章](08-cowork.md#決まった時間に自動で-—-予約タスク) |

ウェブ検索・拡張思考・リサーチの使い分けの基準は、ヘルプから引いたものです。[^when] 残りの行は、前の章の内容を一つの表にまとめたものです。

ほとんどの場合は、いちばん上の行、通常の会話だけで十分です。

<Quiz id="ch212-tools" />

## 繰り返すことは積み重ねておく

使っていると、同じことを何度も言うようになります。繰り返すことを一度書いておけば、次からはClaudeがそれを知った状態で始められます。

置き場所は4つあります。最初から全部使う必要はありません。次の順番で、必要になったときに一つずつ足してください。[^academy-layers] どんなときは型にする場面ではないかは、[ステップ1 第11章「繰り返すことは積み重ねておく」](../00-common/11-expert.md#繰り返す仕事は積み重ねておく)にあります。

1. **すべての会話で同じお願いをする** → [指示](05-memory.md#指示-—-すべての会話に適用するルール)に書きます。
2. **一つの仕事を続けて進める** → その仕事を[プロジェクト](07-projects-tools.md#プロジェクト-—-資料と指示をひとつに)にまとめます。
3. **同じ手順を毎回説明している** → その手順を[スキル](07-projects-tools.md#スキル-—-仕事のやり方を覚えさせる)にします。
4. **よく仕上がったスキルをひとまとまりにして分けたい** → 複数のスキルを[プラグイン](07-projects-tools.md#プラグイン-—-業務別のパッケージ)にまとめます。プラグインは有料プランの機能です。[^plugins]

順番に進めれば、毎回新しく説明することが少しずつ減っていきます。

プロジェクトとスキルがごちゃごちゃになったら、こう覚えてください。**プロジェクトは資料を入れ、スキルは仕事の手順を入れます。**[^academy-skills-vs] 違いの詳細は[第7章「指示・プロジェクト・コネクタとどう違うか」](07-projects-tools.md#指示・プロジェクト・コネクタと何が違うのか)にあります。

### 作ったスキルはオン・オフで比べる

作ったスキルは、同じお願いを2回送って比べてみましょう。1回はスキルをオンにして、もう1回はオフにして送ります。比べ方と直し方のコツは、[ステップ1 第11章「作った型は試して直す」](../00-common/11-expert.md#作った型は試して直す)にあります。

スキルは「カスタマイズ（사용자 지정）」→「Skills」でオン・オフを切り替えられます（[第7章「標準のスキルと自分のスキル」](07-projects-tools.md#基本スキルとマイスキル)）。[^skills-use] オフにしたスキルはClaudeが使いません。

<Quiz id="ch212-layers" />

## 表と数字を任せる

[第4章「ファイルのアップロード」](04-files-artifacts.md#ファイルをアップロードする)のように、CSVやTSVなどの表ファイルをアップロードすると、Claudeがデータを分析してグラフを描いてくれます。グラフはPNGなどの画像ファイルとしても受け取れます。[^create]

```
添付したCSVは、過去3か月の近所のお店の品目別の販売記録です。品目ごとの合計を大きい順に表にして、棒グラフをPNG画像で作ってください。
計算に使った方法も、一行ずつ書いてください。
```

数字の分析では、結果を信じてよいのかがいちばん心配です。まず、**すでに分析し終えている過去の資料**で答え合わせをしてみましょう。方法と例は、[ステップ1 第11章「表と数字を任せる」](../00-common/11-expert.md#表と数字を任せる)にあります。大事な計算は、別の計算ソフトや手計算でもう一度確かめてください（[第4章](04-files-artifacts.md#ファイルを作ってもらう-—-excel・word・powerpoint・pdf)）。

<Quiz id="ch212-data" />

## もっと学ぶには — Claude Academy

**Claude Academy**は、Anthropicが作ったオンライン講座集です。以下の講座は、講義の本文をログインなしで開いて読めます（2026-10-26確認）。本文はすべて**英語**で、講座の最初のページには所要時間が書かれていません。[^academy-courses]

| 講座 | 講義数 | こんな方に | 準備するもの |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14講＋クイズ | AIの経験を問わず誰でも | 何かのAIサービスのアカウント。有料プランは不要 |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13講＋クイズ | AIがなぜそう答えるのか知りたい方 | 予備知識は不要 |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13講＋クイズ | 仕事でClaudeを初めて使う方 | Claudeアカウント（無料も可）。Cowork・リサーチの講義は有料プラン |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14講＋クイズ | ファイルやアプリを行き来して働く方 | 有料プラン。フォルダを使う講義はパソコンのアプリ。コーディングの知識は不要 |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6講 | スキルファイルを自分で作りたい方 | Claude Code（ステップ3で扱う開発者向けツール） |

- 最初の2つの講座は、Claude以外のAIで受けてもかまいません。この2つは、どちらを先に受けてもよいように作られています。[^academy-courses]
- 「AI Fluency」講座は、最後のクイズで80%以上正解すると、アカウントに**修了バッジ**（completion badge）を追加できます。資格ではありません。[^academy-courses] このガイドの[理解度確認テスト](../00-common/certificate.md)も、同じ性格の学習バッジです。
- 「Introduction to agent skills」は、このガイドのステップ3（コーディングエージェントツール）を終えてから見てください。内容はすべてClaude Codeが前提です。

英語のページは、Chromeなどのブラウザの翻訳機能（ページ上で右クリック →「日本語に翻訳」）で読めます。

### 講座で学ぶ枠組み — このガイドとの対応

講座には、このガイドと同じ内容が別の名前で出てきます。下の対応を知っておくと、講座で新しい用語に出会ったときに意味を推測しやすくなります。講座で使われている名前は、英語の原文のまま書きました。

- **Setting the stage · Defining the task · Specifying rules**（Claude 101）: 自分の役割と目標、やってほしいこと、口調・形式・例を決めてお願いします。[^academy-stage] [ステップ1 第4章「良いプロンプトの5要素」](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)と同じ考え方です。
- **4D — Delegation · Description · Discernment · Diligence**（Claude 101、AI Fluency）: [ステップ1 第11章「専門家は何が違うのか」](../00-common/11-expert.md#専門家はどこが違うのか)をご覧ください。
- **Evals**（Claude 101、Cowork）: すでに答えを知っている仕事で試してみることです。[ステップ1 第11章「任せる前に試してみる」](../00-common/11-expert.md#任せる前に試してみる)と、この章の[「作ったスキルはオン・オフで比べる」](#作ったスキルはオン・オフで比べる)をご覧ください。
- **Chat · Cowork · Code**（Claude 101）: やり取りしながら進める仕事は会話、任せる仕事はCowork、プログラムを作る仕事はClaude Codeです。[^academy-tabs] [第8章「Coworkとは」](08-cowork.md#coworkとは-—-会話ではなく仕事を任せる)と、この章の[「仕事に合った道具を選ぶ」](#仕事に合った道具を選ぶ)をご覧ください。
- **成果物・資料・自分だけが知っている事情**（Cowork）: 任せるときに、この3つを書きます。[^academy-review] [第8章「任せるときのコツ」](08-cowork.md#任せるコツ)と同じです。
- **結果を確かめる3つの質問**（Cowork）: 望んだ結果か？ 事実は合っているか？ 作り話はないか？[^academy-review] [ステップ1 第9章「確認するための4つの習慣」](../00-common/09-safety.md#確認する4つの習慣)もあわせてご覧ください。
- **"projects store knowledge, skills perform tasks"**（Claude 101）: プロジェクトは資料、スキルは仕事の手順です。[^academy-skills-vs] この章の[「繰り返すことは積み重ねておく」](#繰り返すことは積み重ねておく)をご覧ください。

<Quiz id="ch212-academy" />

## 実際にやってみよう

[第11章「実習で守る3つのこと」](11-practice.md#実習で守る3つのこと)のように、実際の会社の資料ではなく、作り話の資料でやってみましょう。

1. [ステップ1 第11章「実際にやってみよう」](../00-common/11-expert.md#自分でやってみる)の2〜3番（答えを知っているメールで試す）をClaudeでやってみる。正しく出るようにできた一行は、[第5章の指示](05-memory.md#指示-—-すべての会話に適用するルール)かプロジェクトの指示に入れておく。
2. 日付・品目・金額の表を10行ほど作り話で作って、CSVで保存する。先に自分で品目ごとの合計を手計算で出してから、この章のCSV用プロンプトで表とPNGグラフを受け取り、2つの合計を突き合わせる。
3. スキルを一つ作ったなら、同じお願いをスキルをオンにして1回、オフにして1回送り、2つの答えを比べる。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: サンプルファイルfees.csvをアップロードして、「重複や空欄があれば先に教えてください。そのあと、収入・支出の合計と残りのお金を表に、項目別の支出を棒グラフのPNGにしてください」と送ります。2回書かれているお菓子と、金額が空欄の行を見つけられるか確かめます。最後に[課題チェックリスト](../00-common/practice-kit.md#最後に手元に残るもの)を一つずつチェックします。

## まとめ

- どのAIにも通じる判断・試し方・確認方法は、ステップ1の第11章にある。この章はそれをClaudeの機能に合わせたもの。
- メニューより先に、仕事の形を見る。ほとんどの場合は、通常の会話だけで十分。
- 繰り返すことは、指示 → プロジェクト → スキル → プラグイン（有料）の順に、必要になったときに一つずつ積み重ねる。
- 作ったスキルは、「カスタマイズ（사용자 지정）」→「Skills」でオン・オフを切り替え、2回お願いして比べる。
- 表ファイルをアップロードすると、分析とグラフ（PNG画像を含む）を受け取れる。信じる前に、過去の資料で答え合わせをする。
- もっと学ぶには、Claude Academyの講座（英語、講義の本文はログインなしで閲覧可）を見る。

## 用語まとめ
| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Claude Academy | クロード・アカデミー | Anthropicが作ったオンライン講座集 |

4D・Evalsなどの講座用語は、[ステップ1 第11章「用語のまとめ」](../00-common/11-expert.md#用語まとめ)にあります。

<ChapterDone :chapter="212" />

次の章: ステップ2のClaudeガイドはこれで終わりです。[ステップ2・Claude 目次](./)で読み返したい章を選ぶか、[AI知識レベルテスト](../00-common/level-test.md)で実力を確かめてみましょう。

[^academy-tabs]: Claude Academy「Claude 101」講義「How you'll work with Claude on your desktop」。"You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code （確認日 2026-10-26）
[^academy-layers]: Claude Academy「Introduction to Claude Cowork」講義「Get better results faster」。"You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale （確認日 2026-10-26）
[^academy-skills-vs]: Claude Academy「Claude 101」講義「Working with skills」。"projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills （確認日 2026-10-26）
[^academy-stage]: Claude Academy「Claude 101」講義「Your first conversation with Claude」。"One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude （確認日 2026-10-26）
[^academy-review]: Claude Academy「Introduction to Claude Cowork」講義「Hand Claude Cowork your first task」。"name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop （確認日 2026-10-26）
[^academy-courses]: Claude Academy講座の最初のページ。AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." 同じ講座の講義「Introduction to AI Fluency」 "you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities", クイズ "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · 講義の本文は、ログインしていないブラウザで開けることを確認（確認日 2026-10-26）
[^when]: Anthropicヘルプ「When should I use web search, extended thinking, and research?」。"Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 （確認日 2026-10-26）
[^plugins]: Anthropicヘルプ「Use plugins in Claude」。"Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 （確認日 2026-10-26）
[^skills-use]: Anthropicヘルプ「Use skills in Claude」。"Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 （確認日 2026-10-26）
[^create]: Anthropicヘルプ「Create and edit files with Claude」。"You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 （確認日 2026-10-26）
