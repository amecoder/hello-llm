# ステップ3 · Antigravity 利用ガイド

Antigravityは、Googleが作った、**自分のコンピューターのフォルダで直接作業する**AIツールです。デスクトップアプリと、ターミナルプログラムの`agy`があります。
このガイドでは、[Codexガイド](../21-codex/)までで作った「自分流に整理してくれるツール」のフォルダを、**移さずにそのまま開き**、3つ目のツールでも動くかを確かめながら、違う点だけを学びます。

> **このガイドは、2026年11月1日に確認したAntigravity公式ドキュメント（antigravity.google/docs）と、ターミナルの`agy`で実行した結果をもとに書きました。アプリの画面ではまだ実習できていません。** 機能とメニューの名前はよく変わります。
> 3つのツールの中で唯一、**無料のGoogleアカウント**（満18歳以上）でもすべての機能を使えます。料金プランによって違うのは、使用量とモデルだけです。

| 章 | 読む | タイトル | こんなことがわかります |
|---|---|---|---|
| 1 | 必須 | [Antigravityとは何か、前の2つのツールと何が違うのか](01-what-is.md) | 4つの形、無料でもすべての機能、モデル、3つのツールの対応 |
| 2 | 必須 | [アプリのインストールと最初の整理](02-first-task.md) | インストール・ログイン、プロジェクトとして開く、Planning modeとProceed、Reviewウィンドウ |
| 3 | 必須 | [ルールとスキル — 移さなくてもよい](03-rules-skills.md) | AGENTS.md・.agents/skillsそのまま、同じメモで0→1、/スキル名 |
| 4 | 必須 | [権限と元に戻す方法](04-permissions-undo.md) | プリセット4つ、柵の標準値（アプリ・ターミナル）、破棄の注意、/rewind |
| 5 | 選択 | [計画・予約・ブラウザ・目標](05-plan-schedule.md) | /plan、/scheduleとAutomations、/browser、/goal、リモート操作 |
| 6 | 選択 | [ターミナルで使う](06-terminal.md) | agy -p、静かな拒否と終了コード0、フォルダの信頼、落とし穴4つ |
| 7 | 必須 | [コスト・データ・安全、そして3つのツールを選ぶ](07-safety-choose.md) | 使用量・クレジット、Enable Telemetry、隠れた指示の実験、3つのツールを一緒に使う、実習課題 |

## 練習用の資料

出発点は、**Codex 第5章まで終えた整理ツールフォルダ**です。前のステップを飛ばした場合は、下のファイルをダウンロードして、同じ形に作ってください。すべてのメモは**作り話**で、日付・曜日はお話のために作ったものなので、実際の2026年のカレンダーとは合いません。

| フォルダ内の場所 | ダウンロードするファイル |
|---|---|
| `inbox/` | [meeting-2026-10-27-weekly.txt](/practice/ja/notes/inbox/meeting-2026-10-27-weekly.txt) · [study-2026-10-28-prompt-lecture.txt](/practice/ja/notes/inbox/study-2026-10-28-prompt-lecture.txt) · [review-2026-10-29.txt](/practice/ja/notes/inbox/review-2026-10-29.txt) · [review-2026-10-30.txt](/practice/ja/notes/inbox/review-2026-10-30.txt) · [review-2026-10-31.txt](/practice/ja/notes/inbox/review-2026-10-31.txt) · [meeting-2026-10-29-adhoc.txt](/practice/ja/notes/inbox/meeting-2026-10-29-adhoc.txt) |
| `templates/` | [minutes.md](/practice/ja/notes/results/ch5-template-minutes.txt) · [study-notes.md](/practice/ja/notes/results/ch5-template-study-notes.txt) · [weekly-review.md](/practice/ja/notes/results/ch5-template-weekly-review.txt) · [README.md](/practice/ja/notes/results/ch5-template-README.txt) |
| 一番上 | [AGENTS.md](/practice/ja/notes/results/codex/ch3-AGENTS.md.txt) · [CLAUDE.md](/practice/ja/notes/results/ch6-CLAUDE.md.txt) |
| `.agents/skills/名前/SKILL.md`（Claude Codeでも使うなら、`.claude/skills/`にも同じファイル） | [meeting-notes](/practice/ja/notes/results/ch7-skill-meeting-notes.txt) · [study-notes](/practice/ja/notes/results/ch7-skill-study-notes.txt) · [weekly-review](/practice/ja/notes/results/ch7-skill-weekly-review.txt) |

ダウンロードしたファイルは、拡張子を表の名前に変えて保存します（例: `ch3-AGENTS.md.txt` → `AGENTS.md`）。`notes/`フォルダは空にしておきます。

このガイドがAntigravityで作った**成果物**も公開します。同じ依頼でも、形は少しずつ違います。

| 章 | 成果物 |
|---|---|
| 3 | [議事録（AGENTS.mdなし）](/practice/ja/notes/results/antigravity/ch3-minutes-without-AGENTS.txt) · [議事録（AGENTS.mdあり）](/practice/ja/notes/results/antigravity/ch3-minutes-with-AGENTS.txt) · [スキルで作った週間振り返り](/practice/ja/notes/results/antigravity/ch3-weekly-review-with-skill.txt) |
| 6 | [agy -p の出力](/practice/ja/notes/results/antigravity/ch6-agy-p-output.txt) |
| 7 | [隠れた指示のメモで作った議事録](/practice/ja/notes/results/antigravity/ch7-minutes-hidden-instruction-memo.txt) |

Codexをまだ読んでいなければ、[ステップ3 · Codexガイド](../21-codex/)から読んでください。無料アカウントしかない場合は、このガイドから実習してもかまいません。
