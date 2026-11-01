# 第6章 検索とDeep Research — 根拠の確認、長い調査レポート、ノートブック、勉強のお助け機能

> **一言まとめ**: 複数の資料を探してまとめた**長いレポート**が必要なときは、**Deep Research**を使いましょう。調査の計画を先に見せてくれるので、直したい点があればすぐに直してください。
> 1つのテーマの資料と会話を長く集めておきたいときは**ノートブック**を、勉強するときは**ガイド付き学習・クイズ・フラッシュカード**を使います。どんな回答でも、根拠は自分で確認します。

画面は2026年10月のWeb版を基準にしており、図は有料プラン（Google AI Pro）の韓国語の画面です。

## 回答の根拠を確認する

Geminiの回答は、間違うことがあります。Googleも、**いつも回答を吟味し、組み込みのツールやGoogle検索で事実を改めて確認する**よう案内しています。[^learn]
回答の下や文の間に「出典（출처）」が見えたら、押して元の文章を開いてみましょう。出典がない回答もあります（[第3章](03-chats.md#出典を確認する)）。

確認するときは、次のように自分に問いかけてみてください。

- 出典のリンクは、本当にその内容を述べているか？
- 数字と日付は、元の文章と同じか？
- 出典は、公的機関や信頼できるところか？

**具体的に聞くほど、回答は役に立つものになります。**[^learn] たとえば、次のように比べてみましょう。

| 惜しい質問 | よりよい質問 |
|---|---|
| 「読書率を教えて」 | 「最近10年間で、韓国の成人の年間読書率がどう変わったか、公式統計の出典つきで教えて」 |

よりよい質問は、期間・対象・出典の条件をすべて書いているので、回答を確認するのも簡単です（[ステップ1 第9章](../00-common/09-safety.md)）。

<Quiz id="ch306-check" />

## Deep Research — 長い調査レポートを受け取る

**Deep Research**（ディープリサーチ）は、何度も検索して吟味したあとで、**総合レポート**を作ってくれる機能です。初期設定では、Google検索を出典として使います。[^deep]
必要な条件は、**満18歳以上とログイン**です。有料プランが必須だという記述は、ヘルプにはありません。ただし、無料アカウントは、利用者が集中する時間帯には使えないことがあります（[第1章](01-getting-started.md#利用上限-—-5時間・週間・読む量)）。[^deep][^limits] Google AI ProとUltraは、より高い品質のモデルでレポートを作れます。[^deep]

### 始め方

入力欄の「+」 → 「その他のツール（도구 더보기）」 → 「Deep Research」を押します（[第2章](02-screen-tour.md#入力欄と-メニュー)）。[^deep][^screen]

![入力欄で①「Deep Research」がオンになった様子。案内の文言「무엇을 조사하고 싶으신가요?」（何を調べたいですか？）、②「ソース（소스）」ボタン、③ソースのメニュー（「하나 이상의 소스를 선택하세요」（1つ以上のソースを選んでください）— 「Google検索（Google 검색）」（チェック済み）・「Gmail」・「Drive」・「チャット（채팅）」・「連携アプリを有効にする（연결된 앱 사용 설정）」）、④「ファイル（파일）」ボタンに赤い番号がついている](../../../guide/12-gemini/assets/shot-16-deep-sources-marked.png)

**赤い番号は、下の一覧の番号と同じ場所です。**[^screen]

- ①「Deep Research」がオンになったという表示です。入力欄の案内が「무엇을 조사하고 싶으신가요?」（何を調べたいですか？）に変わります。
- ②「ソース」を押すと、③どこから探すかを選べます。「Google検索」は、最初からチェックされています。
- ③「チャット」は、自分の過去のGeminiの会話を出典に入れる項目のようです（ヘルプには説明がありません）。GmailやDriveを出典に使うには、Google WorkspaceがGeminiに連携されている必要があります（[第7章](07-skills-apps.md#連携アプリ-—-gmail・drive・カレンダーをgeminiで)）。[^deep]「Google検索」のチェックを外すと、**選んだ出典の中だけ**で探します。[^deep]
- ④「ファイル」で、自分のファイルを一緒に入れられます。[^deep]

調べたいテーマを書いて送ると、Geminiがまず**調査計画**を見せてくれます。[^deep]

### 計画を確認して始める

![Deep Researchの進行画面。①計画の下の「計画を修正（계획 수정）」・「リサーチを開始（연구 시작）」ボタン、②「웹사이트 16개 조사 중...」（ウェブサイト16件を調査中…）と書かれた進行カード、③右側の調査パネル（「思考プロセスを表示（생각하는 과정 표시）」、調査の手順と見つかったウェブサイトの一覧）、④停止ボタンに赤い番号がついている](../../../guide/12-gemini/assets/shot-17-deep-run-marked.png)

**赤い番号は、下の一覧の番号と同じ場所です。**[^screen]

- ①**「計画を修正」**で計画を直し、**「リサーチを開始」**を押すと調査が始まります。[^deep][^screen]
- ②調査が始まると、「착수할게요. 연구가 완료되면 알려 드릴게요. 그러는 동안 이 대화에서 나가셔도 됩니다.」（始めます。リサーチが完了したらお知らせします。その間、この会話から離れても大丈夫です。）という返答とともに、進行カードが表示されます。[^screen]
- ③右側のパネルで、どんな手順で調べているか、どのウェブサイトを見ているかが分かります。[^screen]
- ④止めたいときは、このボタンを押します。「조사를 취소하시겠어요?」（調査をキャンセルしますか？）が表示されたら、「예, 취소합니다」（はい、キャンセルします）を押してください。[^screen]

**計画を直したいなら、できるだけすぐに「計画を修正」を押してください。** このガイドで一度試したとき、「リサーチを開始」を押していないのに調査が始まりました。図の「リサーチを開始」の吹き出しも、そのとき自然に生じたものです。ヘルプには、「リサーチを開始」を押して初めて始まるとしか書かれていないので、なぜそうなったのかは確認できませんでした。すでに始まっていたら、④で止められます。[^screen]

レポートは**ふつう5〜10分**かかり、複雑だともっとかかります。待っている間は、会話を離れてもかまいません。完成したらお知らせしてくれます。[^deep]

### 知っておきたい点

- **使用量を多く使います**（[第1章](01-getting-started.md#利用上限-—-5時間・週間・読む量)）。[^limits] 1日にできる調査の数と、同時に動かせる調査の数にも上限があります。上限に近づくと、残りの回数を知らせてくれます。[^deep]
- **過去のレポートは、会話の一覧から探します。** 「アクティビティを保存（활동 기록 보관）」がオンになっていないと、あとで探せません。[^deep]
- **レポートは、Docsにエクスポートできます。**[^deep] 音声概要に変えることもできます（[第4章](04-files-create.md#canvas-—-文書とアプリを一緒に直す)）。[^deep]

レポートも、Geminiが作った文章です。重要な数字は、レポートの出典リンクを開いて、自分で確認してください。

```
最近10年間で、韓国の成人の年間読書率がどう変わったかを調べてください。
公式統計（文化体育観光部の国民読書実態調査など）を優先して使い、
年ごとの数値は表にして、出典は数値ごとにつけてください。
```

### Deep Thinkは？

**Deep Think**（ディープシンク）は、より長く考える機能でしたが、**Gemini 4 Argonに置き換えられている途中**です。しかも、Google AI Ultraの購読者だけが使えていました。[^deepthink] 難しい問題は、[第2章](02-screen-tour.md#モデルボタン-—-モデルと思考レベル)のモデルボタンで、Argonと思考レベル「高（높음）」を選べば大丈夫です（Pro・Ultra）。

<Quiz id="ch306-deep" />

## ノートブック — 資料と会話をテーマごとにまとめる

**ノートブック**は、1つのテーマの資料（ソース）、指示、会話を1か所にまとめておく場所です。その中で会話すると、入れておいた資料と指示、過去の話を覚えたまま、続けられます。[^notebook]
たとえば、「読書会」ノートブックに会則、前回の議事録、会の予定表を入れておけば、毎回資料をアップロードし直さなくてすみます。

横のメニューの「ノートブック」の下にある「新しいノートブック（새 노트북）」を押し、名前をつけてから質問してください。資料は「ソースを追加（소스 추가）」で入れます（[第2章](02-screen-tour.md#サイドメニュー-—-新しいチャットと過去の会話)）。[^notebook][^screen]

| 入れられる資料 | 例 |
|---|---|
| 自分の端末のファイル | PDF、文書、表のファイル、画像、音声、テキスト |
| Google Driveのファイル | Driveにアップロードしてある文書・表 |
| ウェブサイトのアドレス | 記事や案内ページ |
| コピーした文章 | メモ、メールの本文 |

出典: Googleヘルプ[^notebook]

知っておきたい点があります。[^notebook]

- **1つのノートブックに、資料を最大600個まで**入れられます（プランによって異なります）。
- ノートブックの中でも、**ウェブ検索とGeminiのツール**を使えます。
- ノートブックの名前の変更、指示の追加（「ノートブック設定（노트북 설정）」）、ピン留めは、「すべてのノートブック（모든 노트북）」で、ノートブックの「その他（더보기）」から行います。
- **ノートブックを削除すると、その中の資料と会話も一緒に削除されます。**
- 「アクティビティを保存」がオフでも会話はできますが、会話の自動保存、過去の会話の記憶、過去の会話の追加、**Driveのファイルを資料として入れること**など、一部の機能は使えません。
- 少しずつ開放されている機能なので、まだ表示されないことがあります。

会話のメニューの「ノートブックに追加（노트북에 추가）」で、過去の会話をノートブックに入れることもできます（[第3章](03-chats.md#固定・名前の変更・削除)）。これも、「アクティビティを保存」がオンになっている必要があります。[^notebook][^screen]

<Quiz id="ch306-notebook" />

## 勉強のお助け機能 — ガイド付き学習・クイズ・フラッシュカード

勉強するときは、Geminiを**家庭教師**のように使えます。入力欄の「+」 → 「その他のツール」 → **「ガイド付き学習（가이드 학습）」**を押してください。[^tutor][^screen] 図や図表で説明してほしいと頼むこともできます。[^tutor]

試験の準備には、**クイズ、フラッシュカード（表に質問、裏に答えがある単語カード）、学習ガイド**を作ってほしいと頼みましょう。[^study] 作りたいものを先に言い、そのあとで資料やテーマを書くのがコツです。[^study]

```
クイズを作ってください。テーマは朝鮮後期の実学で、4択を10問でお願いします。
```

```
フラッシュカードを作ってください。表面は英単語、裏面は意味と例文でお願いします。単語は下の一覧を使ってください。
（単語の一覧を貼り付け）
```

- クイズを解くときは、「ヒント（힌트）」を見たり、解き終わったあとに「さらに質問を生成（더 많은 질문 생성）」で問題を追加でもらったりできます。解き終わると、**強みと、もっと勉強すべき部分**を教えてくれます。[^study]
- フラッシュカードは、シャッフル（「シャッフルモード（셔플 모드）」）と読み上げを使えます。[^study]
- 練習試験（模擬試験）として、ヘルプに書かれている試験はSAT・JEE Main・NEET UGなどで、韓国の試験は書かれていません。[^study]

**学校の課題に使うときは、学校のAI利用ルールを先に確認してください。**[^learn] Geminiの提案は出発点にして、自分の考えと言葉を加えて仕上げましょう。[^learn]

<Quiz id="ch306-study" />

## 実際にやってみよう

1. 「最近10年間の韓国の単身世帯の割合の変化」のように、気になるテーマでDeep Researchをオンにし、計画が出たら「計画を修正」で「公式統計だけを使って」と直してから、「リサーチを開始」を押す。
2. レポートの数字を1つ選んで出典リンクを開き、元の文章と同じか確認する。
3. 「新しいノートブック」で「読書会」ノートブックを作り、練習用の案内文を「ソースを追加」で入れてから、「次回の会の案内文を、この形式で書いて」と頼んでみる。
4. 「ガイド付き学習」をオンにして、最近気になる概念を1つ、段階を追って学んでみる。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 課題の例のファイル（議事録・メモ・帳簿）を「読書会」ノートブックにソースとして入れ、「次回の会の準備物と残りの会費を整理して」と聞いてみる。受け取った数字が帳簿と合っているか、自分で確認する。

## まとめ

- Geminiの回答は間違うことがある。「出典」を開き、組み込みのツールやGoogle検索で改めて確認する。具体的に聞くほど確認しやすい。
- Deep Researchは、満18歳以上でログインすれば使える。無料アカウントは、混む時間帯に使えないことがある。「ソース」でGoogle検索・Gmail・Driveなどを選び、計画が出たら「計画を修正」または「リサーチを開始」を押す。
- レポートはふつう5〜10分かかり、使用量を多く使う。1日の調査数に上限がある。Docsにエクスポートできる。
- Deep Thinkは、Gemini 4 Argonに置き換えられている途中だ。
- ノートブックは、資料（プランによって最大600個）・指示・会話をテーマごとにまとめる。ノートブックを削除すると、中の資料と会話も削除される。
- 「ガイド付き学習」、クイズ、フラッシュカードで、勉強を助けてもらう。学校の課題は、学校のルールを先に確認する。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Deep Research | ディープリサーチ | 何度も検索して吟味し、総合レポートを作る機能 |
| Source | ソース（出典・資料） | 回答や調査の根拠になるウェブページ・ファイル |
| Research plan | リサーチプラン（調査計画） | Deep Researchが調査の前に見せる手順の一覧 |
| Deep Think | ディープシンク | 長く考える機能だった。Gemini 4 Argonに置き換えられている途中 |
| Notebook | ノートブック | 1つのテーマの資料・指示・会話をまとめておく場所 |
| Guided Learning | ガイデッドラーニング（ガイド付き学習） | Geminiを家庭教師のように使う学習ツール |
| Flashcard | フラッシュカード | 表に質問、裏に答えがある単語カード |

<ChapterDone :chapter="306" />

次の章: [第7章 スキルと連携アプリ](07-skills-apps.md)

[^screen]: Gemini Web画面（Google AI Pro、韓国語）で練習用の会話を使って直接確認（会話は撮影後に削除）。「Deep Research」をオンにすると、入力欄の案内 "무엇을 조사하고 싶으신가요?"、「소스」（Google検索が選択済み）と「파일」ボタン。「소스」メニュー "하나 이상의 소스를 선택하세요" — 「Google 검색」「Gmail」「Drive」「채팅」「연결된 앱 사용 설정」。計画の下のボタン 「계획 수정」「연구 시작」（ヘルプの韓国語版は「계획서 수정」「조사 시작」）。調査開始後の返答 "착수할게요. 연구가 완료되면 알려 드릴게요. 그러는 동안 이 대화에서 나가셔도 됩니다."、進行カード "웹사이트 16개 조사 중..."、右側のパネル 「생각하는 과정 표시」。停止ボタンを押すと 「조사를 취소하시겠어요?」 — 「아니요」「예, 취소합니다」。このガイドでは、「연구 시작」を押す操作なしに計画を待っている間に調査が始まったため、進行画面を撮影してからキャンセルした。「도구 더보기」の「가이드 학습」、横のメニュー「노트북」の「새 노트북」「모든 노트북」、会話メニューの「노트북에 추가」。(確認日 2026-10-31)
[^learn]: Googleヘルプ「Learn in creative ways with generative AI」（韓国語版「생성형 AI를 활용해 창의적으로 학습하기」）。"Important: Make sure to check and follow your school’s policy on using Generative AI." / "Use its suggestions as a starting point, then add your own unique voice and ideas to create something truly original." / "Always evaluate responses: While generative AI is a powerful tool, it can make mistakes." / "It’s important to always fact-check information using built-in tools or by double-checking with Google Search." / "Be specific: The more specific your questions, the more helpful the AI's answers will be." https://support.google.com/gemini/answer/15216790 (確認日 2026-10-31)
[^deep]: Googleヘルプ「Use Deep Research in Gemini Apps」（韓国語版「Gemini 앱에서 Deep Research 사용하기」）。"By default, Gemini includes Google Search as a source for your research." / "You can also upload files and add NotebookLM notebooks." / "Be 18 or over." / "Google AI Pro and Google AI Ultra users can generate reports using Pro for even higher quality. All users can use Thinking for their reports." / "In Gemini Apps, there are limits for:" / "Number of research requests you can run at the same time" / "If you’re close to your limit, Gemini Apps notifies you how many research requests are left for the day." / "To update the research plan before you create a report, click Edit plan." / "Click Start research." / "Google Search is included as a source by default. To limit your research to other selected sources, deselect Google Search." / "It usually takes about 5-10 minutes to generate the report since Gemini analyzes many sources. For more complex reports, it may take longer." / "Important: You can only find past research reports if your Keep Activity setting is on." / "To export the report, click Export to Docs ." / "Other Google services, like Gmail and Drive, are only available if the Google Workspace app is connected to Gemini Apps." / "On the right in the Canvas panel, click Create  Audio Overview ." 韓国語版に "Gemini가 주제에 맞는 조사 계획서를 작성합니다." https://support.google.com/gemini/answer/15719111 (確認日 2026-10-31)
[^limits]: Googleヘルプ「Gemini Apps limits & feature availability」。"This requires Gemini to use multiple, multi-step search queries and several rounds of reasoning sweeps to create a comprehensive report." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." https://support.google.com/gemini/answer/16275805 (確認日 2026-10-31)
[^deepthink]: Googleヘルプ「Use Deep Think in Gemini Apps」（韓国語版「Gemini 앱에서 Deep Think 사용하기」）。"Important: Deep Think is being replaced by Gemini 4 Argon." / "Be a Google AI Ultra subscriber or have a Google AI Ultra for Business license." https://support.google.com/gemini/answer/16345172 (確認日 2026-10-31)
[^notebook]: Googleヘルプ「Organize your projects with notebooks in Gemini Apps」（韓国語版「Gemini 앱의 노트북으로 프로젝트 정리하기」）。"Notebooks provide a continuous chat experience that remembers your sources, instructions, and ongoing discussions." / "We’re gradually making this feature available, so it might not be available to you just yet." / "Some features in notebooks require Keep Activity turned on. When Keep Activity is off, you can still chat with your notebook, but the following features aren’t available" / "Give your new notebook a name. This name helps you organize your notebooks and also helps you find them" / "Based on your Google AI Plan, you can add up to 600 sources." / "Files from your device: PDFs, documents, spreadsheets, images, audio, text files, files, and .md files." / "Files from Google Drive." / "Websites/URLs" / "Copied text" / "Auto-saving chats. Gemini cannot save new chats in your notebook." / "Adding existing chats. You cannot add existing chats to a notebook directly from the sidebar." / "Google Drive. You cannot add files from Google Drive as sources." （いずれも、アクティビティの保存がオフのときにできなくなる機能の一覧）/ "Pin or unpin a notebook" / "Your chats in Gemini apps notebooks can include web searches and use of any Gemini tools." / "Important: If you delete a notebook, any sources or chats that you added to that notebook will also be deleted." / "You can create detailed instructions for Gemini Apps, like how to format responses or the tone you want it to use." 韓国語の画面名 「새 노트북」「소스 추가」「모든 노트북」「이름 바꾸기」「노트북 설정」「고정」。https://support.google.com/gemini/answer/16972047 (確認日 2026-10-31)
[^tutor]: Googleヘルプ「Use learning tools in Gemini Apps」（韓国語版「Gemini 앱에서 학습 도구 사용하기」）。"You can use Gemini Apps as a tutor with guided learning, visual aids, and educational resources." / "Gemini Apps may include images in responses to help explain a topic or concept. You can also ask Gemini to provide a diagram or image in your prompt." https://support.google.com/gemini/answer/16448384 (確認日 2026-10-31)
[^study]: Googleヘルプ「Create quizzes, flashcards, practice tests & more in Gemini Apps」（韓国語版「Gemini 앱에서 퀴즈, 플래시카드, 연습 시험 등 만들기」）。"You can use Gemini Apps to create, use, and share study materials like flashcards, quizzes, and study guides to help prepare for exams." / "Tip: Start your prompt telling Gemini what to create followed by the materials or topic you want to study." / "Supported tests include SAT, JEE Main, and NEET UG." / "Once you finish a quiz, wait a moment for Gemini to share strengths and focus areas." / "To get a hint, click Hint." / "To generate more questions, when you complete the quiz, click More questions." / "To have Gemini play audio of the text, click Text to speech ." / "To shuffle the flashcards, click Shuffle mode . This will shuffle all of the flashcards in the deck." 韓国語の画面名 「힌트」「더 많은 질문 생성」「셔플 모드」「텍스트 음성 변환」。https://support.google.com/gemini/answer/16275879 (確認日 2026-10-31)
