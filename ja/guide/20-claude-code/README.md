# ステップ3・Claude Code 利用ガイド

ステップ2では、チャットで**質問して答えをもらいました。** ステップ3では、Claudeが**自分のパソコンのフォルダで、直接ファイルを読んで直す**Claude Codeを学びます。
コードがわからなくても大丈夫です。このガイドは、メモや表のファイルが入ったフォルダで練習し、ターミナルを使わずに使える**Claudeデスクトップアプリの「Code」タブ**から始めます。

> **このガイドは、2026年10月31日に確認したClaude Codeの公式ドキュメント（code.claude.com/docs）と、実際の画面をもとに書きました。** 機能やメニューの名前はよく変わります。
> Claude Codeを使うには、**有料の契約**（Pro・Max・Ultra・Team・Enterprise）が必要です。自分の画面と違うときは、画面に表示されている名前に従ってください。

| 章 | 読む | タイトル | こんなことがわかります |
|---|---|---|---|
| 1 | 必須 | [Claude Codeとは何か、どこで使うか](01-what-is.md) | チャットとの違い、使う場所、料金プラン |
| 2 | 必須 | [デスクトップアプリのインストールと最初のセッション](02-install.md) | インストール・ログイン、Codeタブ、フォルダの選び方、最初の仕事の任せ方 |
| 3 | 必須 | [画面を見て回る](03-screen-tour.md) | タイトル行のボタン、変更内容の確認（Git）、セッション情報、ファイルの欄 |
| 4 | 必須 | [許可と取り消し](04-permissions-undo.md) | 権限モード、巻き戻し、巻き戻しの限界、Gitの記録 |
| 5 | 必須 | [上手な任せ方](05-delegate-well.md) | 具体的に伝える、プランモードで様式3種を設計する、確認の基準と根拠 |
| 6 | 必須 | [プロジェクトの記憶](06-claude-md.md) | CLAUDE.mdに自分のルールを書いておき、新しいセッションで試す |
| 7 | 必須 | [スキル・プラグイン・外部ツール](07-skills-plugins.md) | 整理スキル3つでツールを完成させる、保護された場所の許可画面、プラグインの安全 |
| 8 | 選択 | [複数の仕事を同時に・クラウド・予約](08-parallel-cloud-schedule.md) | セッションを並べる、予約の3種類、金曜日の週間振り返りを予約する、クラウド |
| 9 | 必須 | [費用・データ・安全](09-cost-data-safety.md) | 使用量、学習の設定と保管期間、隠れた指示の実験と安全の心得 |
| 10 | 選択 | [ターミナルで使う](10-terminal.md) | インストールと基本コマンド、claude -p で整理ツールを確認する、アプリとの行き来 |
| 11 | 必須 | [実習課題](11-practice.md) | 9つの課題とチェックリスト、最後は自分のメモで自分だけの整理ツールを作る |
| 12 | 発展 | [専門家のように使う](12-expert.md) | 仕事に合わせて選ぶ、必要なときに1つずつ積み上げる、毎週の整理ルーティン |

## 練習用の資料

ステップ3の実習は、下のメモ6個で行います。**すべて作り話の内容です**（小さなカフェ「街角カフェ」で働くソヨンの1週間）。自分のパソコンに `organizer/inbox` フォルダを作って、ダウンロードして入れてください。メモの日付や曜日は、物語のために作ったものなので、実際の2026年のカレンダーとは合いません。

| ファイル | 内容 | 初めて使う章 |
|---|---|---|
| [meeting-2026-10-27-weekly.txt](/practice/ja/notes/inbox/meeting-2026-10-27-weekly.txt) | ごちゃごちゃした週間会議のメモ | 第2章 |
| [study-2026-10-28-prompt-lecture.txt](/practice/ja/notes/inbox/study-2026-10-28-prompt-lecture.txt) | 講義のノート | 第4章 |
| [review-2026-10-29.txt](/practice/ja/notes/inbox/review-2026-10-29.txt) ・ [10-30](/practice/ja/notes/inbox/review-2026-10-30.txt) ・ [10-31](/practice/ja/notes/inbox/review-2026-10-31.txt) | 1日の振り返り3日分 | 第3章 |
| [meeting-2026-10-29-adhoc.txt](/practice/ja/notes/inbox/meeting-2026-10-29-adhoc.txt) | 隠れた指示が入ったメモ（安全の実験用） | 第9章 |

このガイドが実際のClaude Codeアプリで作った**成果物**も公開しています。自分の結果と見比べてみてください。同じ依頼でも、形は少しずつ違います。

| 章 | 成果物 |
|---|---|
| 2 | [議事録](/practice/ja/notes/results/ch2-minutes-2026-10-27-weekly.txt) |
| 3 | [状態の欄を入れた議事録](/practice/ja/notes/results/ch3-minutes-status-column.txt) |
| 4 | [勉強ノート（巻き戻し前）](/practice/ja/notes/results/ch4-study-notes-2026-10-28.txt) |
| 5 | [議事録の様式](/practice/ja/notes/results/ch5-template-minutes.txt) ・ [勉強ノートの様式](/practice/ja/notes/results/ch5-template-study-notes.txt) ・ [週間振り返りの様式](/practice/ja/notes/results/ch5-template-weekly-review.txt) ・ [様式の案内](/practice/ja/notes/results/ch5-template-README.txt) |
| 6 | [CLAUDE.md](/practice/ja/notes/results/ch6-CLAUDE.md.txt) ・ [ルールだけで書いた週間振り返り](/practice/ja/notes/results/ch6-weekly-review-2026-10-27.txt) |
| 7 | [meeting-notes](/practice/ja/notes/results/ch7-skill-meeting-notes.txt) ・ [study-notes](/practice/ja/notes/results/ch7-skill-study-notes.txt) ・ [weekly-review](/practice/ja/notes/results/ch7-skill-weekly-review.txt) スキル ・ [スキルで作った勉強ノート](/practice/ja/notes/results/ch7-study-notes-with-skill.txt) |
| 9 | [隠れた指示のメモで作った議事録](/practice/ja/notes/results/ch9-minutes-hidden-instruction-memo.txt) |
| 10 | [claude -p の出力](/practice/ja/notes/results/ch10-claude-p-output.txt) |

ステップ2をまだ読んでいなければ、[ステップ2・Claudeガイド](../10-claude/)から読んでください。アカウント・料金プラン・チャットの機能はそこで説明していて、ステップ3ではリンクでつないでいます。
