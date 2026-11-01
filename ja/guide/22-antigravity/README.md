# ステップ3 · Antigravity 利用ガイド

Antigravityは、Googleが作った、**自分のコンピューターのフォルダで直接作業する**AIツールです。デスクトップアプリと、ターミナルプログラムの`agy`があります。
このガイドでは、[Codexガイド](../21-codex/)までで作った「自分流に整理してくれるツール」のフォルダを、**移さずにそのまま開き**、3つ目のツールでも動くかを確かめながら、違う点だけを学びます。

> **このガイドは、2026年11月1日に確認したAntigravity公式ドキュメント（antigravity.google/docs）と、ターミナルの`agy`で実行した結果をもとに書きました。アプリの画面ではまだ実習できていません。** 機能とメニューの名前はよく変わります。
> 3つのツールの中で唯一、**無料のGoogleアカウント**（満18歳以上）でもすべての機能を使えます。料金プランによって違うのは、使用量とモデルだけです。

| 章 | タイトル | こんなことがわかります |
|---|---|---|
| 1 | [Antigravityとは何か、前の2つのツールと何が違うのか](01-what-is.md) | 4つの形、無料でもすべての機能、モデル、3つのツールの対応 |
| 2 | [アプリのインストールと最初の整理](02-first-task.md) | インストール・ログイン、プロジェクトとして開く、Planning modeとProceed、Reviewウィンドウ |
| 3 | [ルールとスキル — 移さなくてもよい](03-rules-skills.md) | AGENTS.md・.agents/skillsそのまま、同じメモで0→1、/スキル名 |
| 4 | [権限と元に戻す方法](04-permissions-undo.md) | プリセット4つ、柵の標準値（アプリ・ターミナル）、破棄の注意、/rewind |
| 5 | [計画・予約・ブラウザ・目標](05-plan-schedule.md) | /plan、/scheduleとAutomations、/browser、/goal、リモート操作 |
| 6 | [ターミナルで使う](06-terminal.md) | agy -p、静かな拒否と終了コード0、フォルダの信頼、落とし穴4つ |
| 7 | [コスト・データ・安全、そして3つのツールを選ぶ](07-safety-choose.md) | 使用量・クレジット、Enable Telemetry、隠れた指示の実験、3つのツールを一緒に使う、実習課題 |

## 練習用の資料

出発点は、**Codex 第5章まで終えた整理ツールフォルダ**です。前のステップを飛ばした場合は、下のファイルをダウンロードして、同じ形に作ってください。すべてのメモは**作り話**で、日付・曜日はお話のために作ったものなので、実際の2026年のカレンダーとは合いません。

| フォルダ内の場所 | ダウンロードするファイル |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 一番上 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/名前/SKILL.md`（Claude Codeでも使うなら、`.claude/skills/`にも同じファイル） | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

ダウンロードしたファイルは、拡張子を表の名前に変えて保存します（例: `3장-AGENTS.md.txt` → `AGENTS.md`）。`notes/`フォルダは空にしておきます。

このガイドがAntigravityで作った**成果物**も公開します。同じ依頼でも、形は少しずつ違います。

| 章 | 成果物 |
|---|---|
| 3 | [議事録（AGENTS.mdなし）](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [議事録（AGENTS.mdあり）](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [スキルで作った週間振り返り](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [agy -p の出力](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [隠れた指示のメモで作った議事録](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

Codexをまだ読んでいなければ、[ステップ3 · Codexガイド](../21-codex/)から読んでください。無料アカウントしかない場合は、このガイドから実習してもかまいません。
