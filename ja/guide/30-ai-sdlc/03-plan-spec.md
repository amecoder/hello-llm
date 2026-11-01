# 第3章 企画と仕様 — インタビューを受けてSPEC.mdを書く

> **一言まとめ**: 何を作るかがまだぼんやりしているときは、ひとりで全部まとめようとせず、**Claudeに自分をインタビューさせましょう**。インタビューが終わったら、Claudeがその内容を**SPEC.md**（仕様書）に書きます。
> 仕様は「どう作るか」ではなく、**「何ができていなければならないか」の約束**です。この約束が、第4〜6章で作り、確認し、レビューするときの基準になります。

この章は、2026年11月1日に確認したClaude CodeとGitHubの公式ドキュメント、およびspec-kitとOpenSpecのリポジトリの説明をもとに書きました。何を任せるかを具体的に伝えるコツは、[Claude Code 第5章](../20-claude-code/05-delegate-well.md)で学びました。この章では、そのコツを「作る前の段階」に広げます。

## なぜ企画から始めるのか

第1章で見たように、AIが**自分の頭の中とは違うものを作る**よくある理由は、リポジトリを読むだけではわからない情報が抜けているからです。[^missing] その情報は、自分の頭の中にしかありません。誰が使うのか、何が不便なのか、何はやらないのか、といったことです。

GitHubの入門チュートリアルも、**コードを書く前に、作りたいものを書き留めて、進み具合を追うように**言っています。[^before-code]

具体的に伝えるほど、直すやり取りの往復が減ります。公式ドキュメントは、ファイルを指し示し、症状を伝え、「できた」がどんな状態かを最初に伝えるよう言っています。[^specific]

| 惜しい例 | よりよい例 |
|---|---|
| やることを見せるページを作って | 議事録のやること表を集めて、担当・期限ごとに見せるページ。できたら、メモのやること5つがすべて見えるようにして |

出典: このガイドの例（コツは公式ドキュメント）[^specific]

<Quiz id="ch703-why" />

## インタビューを受けてSPEC.mdを書く

ほしいものがまだはっきりしていなくても大丈夫です。公式ドキュメントは、プロンプトを書く前にすべてを整理する必要はなく、**Claudeに自分をインタビューさせる**よう言っています。[^interview] ドキュメントの例を日本語にすると、こんな形です。

> こういうものを作りたいんだけど、まだ深く考えていないんだ。仕様を書けるようになるまで私にインタビューして、終わったらSPEC.mdに書いて。

すると、Claudeはまだ決まっていない部分を**選択式の質問**で聞き返してきます。[^choices] やることボードなら、こんな依頼になります。

```
第3段階の整理ツールが作った議事録のやること表を集めて見せるWebページを作りたいんだ。まだ深く考えていないんだ。仕様を書けるようになるまで私にインタビューして、終わったらSPEC.mdに書いて。
```

SPEC.mdができたら、**新しいセッション**で、そのファイルを見て作らせます。まっさらな文脈と、文章で書かれた「完了の定義」から始めるためです。[^fresh] インタビューでやり取りした長い会話が、作る作業に混ざらないようにするのです。

**作り終わったあとは、SPEC.mdと照らし合わせて確認します。** この話は、第6章のレビューでもう一度します。

<Quiz id="ch703-interview" />

## よい仕様の形

仕様には、**外から見える動作**を書きます。OpenSpecの説明書は、仕様を「実装計画ではなく、動作の約束」だと言い、外から見える動作を変えない実装の話は、ふつう仕様に入れないと説明しています。[^contract] spec-kitも、仕様の段階では技術ではなく**何を、なぜ**に集中し、技術の選択は次の計画の段階に回すよう言っています。[^what-why]

やることボードのSPEC.mdなら、こんな行が入ります。

| よい行 | 惜しい行 |
|---|---|
| 議事録のやることが、ひとつも漏れずに見える | JavaScriptで表を読む |
| 期限が過ぎたやることは、表示が違う | きれいに見える |
| 個人名の代わりに、役割だけが見える | すっきりしたコードで作る |

出典: このガイドの例

左の行は、**はい／いいえで確認できます。** 第5章で、この行がそのまま確認の仕組みになります。

<Quiz id="ch703-spec" />

## スペック駆動開発のツール

仕様を中心に置いて開発する方法を、**スペック駆動開発**（Spec-Driven Development）と呼びます。何をなぜ作るのかを先に決め、その仕様を計画・作業・コードに変えていく方法です。[^sdd] これを助けるツールが2つあります。

| ツール | 作った組織 | することの内容 |
|---|---|---|
| spec-kit | GitHub | 仕様 → 計画 → 作業リスト → 実装を段階ごとに進める |
| OpenSpec | Fission-AI | 変更ごとに、提案・仕様・設計・作業のフォルダを作る |

出典: 各ツールの説明（一部のみ抜粋）[^speckit][^openspec]

OpenSpecでは、AIが文書を書き、**人はコードが書かれる前に計画を確認**します。[^openspec] spec-kitは、各段階をひとつずつ実行し、**結果を確認してから**次に進むよう言っています。[^one-at-a-time] どちらも、人が途中で確認する場面を設けています。

このガイドでは、**2つのツールをインストールしません。** spec-kitにはPython 3.11以上とuvというツールが必要で[^speckit-req]、OpenSpecにはターミナルでのインストール（またはNode.js 22.12以上）が必要です。[^os-install] 上で学んだ「インタビュー → SPEC.md → 新しいセッション」という流れだけでも、同じ考え方を実践できます。もっと大きなプロジェクトに取り組むときに、見てみてください。

<Quiz id="ch703-tools" />

## やってみましょう

1. 第2章で作った`할일보드`フォルダを、Claude Codeアプリで開く。
2. 上のインタビューの依頼を送って、Claudeの質問に答える。わからなければ、「おすすめを教えて」と言ってもよい。
3. できあがったSPEC.mdを読んで、行ごとに「はい／いいえで確認できるか？」と自分に問う。そうでなければ、直してもらう。
4. SPEC.mdに実名や連絡先が入っていないか確認する（公開リポジトリなので）。
5. 気に入ったら、記録（コミット）する。

**続きの課題**: 第4章では、新しいセッションでSPEC.mdをもとに計画を出してもらい、ブランチで最初の画面を作ります。

## まとめ

- AIが見当違いのものを作るよくある理由は、自分の頭の中の情報が抜けているから。作る前に書く。
- わからなければ、Claudeに自分をインタビューさせて、結果をSPEC.mdで受け取る。
- SPEC.mdができたら、新しいセッションで作る。作り終わったあと、SPEC.mdと照らし合わせる。
- 仕様には、外から見える動作を、はい／いいえで確認できるように書く。
- spec-kitとOpenSpecは、同じ考え方を助けるツール。このガイドではインストールしない。

## 用語の整理

| 用語 | 読み方 | ひとこと説明 |
|---|---|---|
| Spec | スペック | 何ができていなければならないかを書いた約束（仕様） |
| SPEC.md | スペック・エムディー | 仕様を書いたファイル |
| Spec-Driven Development | スペック・ドリブン・ディベロップメント | 仕様を先に決めて、それをもとに作る方法 |
| Definition of done | ディフィニション・オブ・ダン | 「できた」の基準 |

<ChapterDone :chapter="703" />

次の章: [第4章 作る](04-build.md)

[^missing]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^before-code]: GitHub 公式ドキュメント「Planning your work」。"Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (確認日 2026-11-01)
[^specific]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^interview]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^choices]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^fresh]: Claude Code 公式ドキュメント「Best practices for Claude Code」。"Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices (確認日 2026-11-01)
[^contract]: OpenSpec ドキュメント「Concepts」。"A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md (確認日 2026-11-01)
[^what-why]: spec-kit ドキュメント「Spec-Driven Development Quickstart」。"Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md (確認日 2026-11-01)
[^sdd]: spec-kit README。"Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit (確認日 2026-11-01)
[^speckit]: spec-kit README。"Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit (確認日 2026-11-01)
[^openspec]: OpenSpec README。"**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec (確認日 2026-11-01)
[^one-at-a-time]: spec-kit README。"Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit (確認日 2026-11-01)
[^speckit-req]: spec-kit README。"You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit (確認日 2026-11-01)
[^os-install]: OpenSpec README。"Install OpenSpec. On macOS or Linux, in your terminal:" / "(needs Node.js 22.12.0 or higher)" https://github.com/Fission-AI/OpenSpec (確認日 2026-11-01)
