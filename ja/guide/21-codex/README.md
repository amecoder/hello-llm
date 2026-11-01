# ステップ3・Codex利用ガイド

Codexは、OpenAIが作った、**自分のパソコンのフォルダで直接作業する**AIツールです。今は、ChatGPTデスクトップアプリの中で「Codex」を選んで使います。
このガイドでは、[Claude Codeガイド](../20-claude-code/)で作った「自分のやり方で整理してくれるツール」をCodexに移しながら、**Claude Codeと違う点だけ**を学びます。

> **このガイドは、2026年11月1日に確認したCodexの公式ドキュメント（learn.chatgpt.com）と、実際の実行結果をもとに書きました。** 機能とメニューの名前は、よく変わります。
> 実習は**Plus以上**のプランを基準にしています。FreeとGoは順次提供なので、まだCodexが見えないことがあります。

| 章 | タイトル | こんなことがわかります |
|---|---|---|
| 1 | [Codexとは何か、Claude Codeと何が違うのか](01-what-is.md) | ChatGPTアプリの中のChat・Work・Codex、Claude Codeとの対応、料金プラン |
| 2 | [ChatGPTアプリでCodexを始める](02-first-task.md) | インストール、Codexを選ぶ、フォルダを開く、最初の整理を任せる |
| 3 | [ルールのファイルAGENTS.md](03-agents-md.md) | CLAUDE.mdを移す、ルールを伝えずに試す、インポート・メモリ |
| 4 | [権限と元に戻す](04-permissions-undo.md) | 権限メニュー3種類、保護されたフォルダ、レビュー画面、Gitで元に戻す |
| 5 | [スキルを移す](05-skills.md) | .agents/skills、$weekly-reviewの一行、間違いと抜け |
| 6 | [予約・クラウド・スマートフォン](06-schedule-cloud.md) | 予約の条件と権限、クラウドとの違い、スマートフォンとの連携 |
| 7 | [ターミナルで使う](07-terminal.md) | インストール、codex exec（初期設定は読み取り専用）、対話型のコマンド |
| 8 | [コスト・データ・安全、そしてツールの選び方](08-safety-choose.md) | 使用量、データの設定、隠れた指示の実験、2つのツールの組み合わせ、実習課題 |

## 練習用の資料

出発点は、**Claude Code 第7章まで終えた整理ツールのフォルダ**です。Claude Codeガイドを飛ばした場合は、下のファイルを受け取って、同じ形にしてください。すべてのメモは**作り話の内容**で、日付・曜日は話のために作ったものなので、実際の2026年のカレンダーとは合いません。

| フォルダ内の場所 | 受け取るファイル |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 一番上 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/名前/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

受け取ったファイルは、拡張子を表の名前のとおりに変えて保存します（例: `5장-양식-회의록.txt` → `templates/회의록.md`）。`notes/`フォルダは空にしておきます。

このガイドがCodexで作った**成果物**も公開します。同じ依頼でも、形は少しずつ違います。

| 章 | 成果物 |
|---|---|
| 2 | [議事録](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [ルールだけで書いた勉強ノート](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [スキルで作った週次の振り返り](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [codex execの出力](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [隠れた指示のメモから作った議事録](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

Claude Codeをまだ読んでいない場合は、[ステップ3・Claude Codeガイド](../20-claude-code/)から読んでください。フォルダ・権限・ルールのファイル・スキルとは何かは、そちらで説明していて、このガイドはリンクでつなぎます。
