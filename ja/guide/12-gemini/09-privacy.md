# 第9章 プライバシーと安全 — 何が保存され、誰が見て、どう削除するか

> **一言まとめ**: Geminiの会話は、「アクティビティを保存（활동 기록 보관）」がオンになっていると**アカウントに18か月**残り、一部は**人が読み、AIの学習にも使われます。**
> 残したくない会話は**一時チャット**で行い、機密は最初から入力しないでください。履歴は、「設定」 → 「アクティビティ」でオフにしたり削除したりします。

画面は2026年10月のWeb版を基準にしています。この章は、個人のGoogleアカウントを基準にしています。会社・学校のアカウントは規則が異なります（最後の節）。

## 何が保存されるのか

ログインしてGeminiを使うと、Googleは次のような情報を集めます。[^hub]

- **自分が言ったこと**: 入力したり声で話したりした質問、任せた作業
- **自分が見せたもの**: アップロードしたファイル・写真・動画、質問した画面、取り込んだ会話、ブラウザーから送ったページの内容
- **連携したアプリから来る情報**: Gmailのような連携アプリ、検索・YouTubeの履歴、Chromeで見ていたページのアドレス（[第7章](07-skills-apps.md#連携アプリ-—-gmail・drive・カレンダーをgeminiで)）
- **その他のもの**: 音声会話（Live）の録音、フィードバック、位置情報など

**位置情報は常に集めます。** 質問に合った回答をするためです。ただし、端末で許可した**正確な位置**は、「Geminiアプリのアクティビティ（Gemini 앱 활동）」の履歴には保存しません。[^hub]

**チャットの内容を使って広告を表示することはない**と、Googleは明記しています。変わるときは、はっきり知らせるとしています。[^hub]

<Quiz id="ch309-saved" />

## 人が読むのか？ AIの学習に使われるのか？

**一部は人が読みます。** 人間のレビュアー（Googleと契約した外部業者の社員を含む）が、Geminiの回答が不正確だったり有害だったりしないかを評価し、よりよい回答を提案します。[^hub]
会話は、レビュアーに送る前に自分のアカウントから切り離されます。それでも、Googleは次のように案内しています。[^hub]

> レビュアーに見られたり、サービスの改善に使われたりしては困る**機密情報は、入力しないでください。**

**学習にも使われます。** 「アクティビティを保存」がオンになっていると、自分のアクティビティが**生成AIモデルの学習を含むサービスの改善**に使われ、その過程に人間のレビュアーが加わります。[^hub]
今後の会話がサービス改善のためにレビューされないようにする方法として、ヘルプが案内しているのは**「アクティビティを保存」をオフにすること**です。[^hub]

ただし、履歴をオフにしたり一時チャットを使ったりしても、**回答を返し、ユーザーとGoogleを守る作業**には、会話が引き続き使われます。このときも、人間のレビュアーが加わることがあります。[^hub]

| | 「アクティビティを保存」オン | オフ、または一時チャット |
|---|---|---|
| 自分のアクティビティ一覧に | 残る | 残らない |
| アカウントに保存 | 初期設定で18か月 | 72時間 |
| AIの学習 | 使われる | 使われない |
| 保護目的の人間によるレビュー | ある | ある |

出典: Googleヘルプ[^hub][^activity]

**音声会話（Live）の録音・映像・画面共有は、初期設定ではサービスの改善に使われません。** 自分で直接オンにしたときだけ使われます。[^hub]

**フィードバック（「良い」「悪い」）を送ると**、履歴をオフにしていても、そのフィードバックと関連する会話がサービスの改善に使われます。[^hub] 繊細な会話には、フィードバックを残さないほうがよいでしょう。

<Quiz id="ch309-review" />

## 「アクティビティを保存」のオンとオフ

「アクティビティを保存」（Keep Activity）は、自分のGeminiの会話をアカウントに残しておく設定です。**満18歳以上なら、最初からオンになっています。**[^activity]

### オフにする方法

1. 左下の「設定」 → 「アクティビティ（활동）」を押します。新しいタブに「Geminiアプリのアクティビティ」が開きます（[第2章](02-screen-tour.md#設定画面-—-アカウント・環境設定・プライバシー)）。[^report]
2. 上部の「アクティビティを保存」の横にある「オン（사용）」を押します。[^report]
3. **「無効にする（사용 중지）」**（今後だけオフにする）または**「無効にしてアクティビティを削除（사용 중지 및 활동 삭제）」**（オフにして過去の履歴も削除する）を選びます。[^activity]

### オフにすると変わること

オフにすると、会話がアクティビティの一覧に残りません。その代わり、使えなくなる機能がたくさんあります。

| 機能 | オフにすると | 扱った章 |
|---|---|---|
| 過去の会話の検索・ピン留め・名前の変更 | できない | [第3章](03-chats.md#過去の会話を探す) |
| メモリ（過去の会話の記憶） | できない | [第5章](05-memory.md) |
| スキル、ほとんどの連携アプリ | できない | [第7章](07-skills-apps.md) |
| タスク、スケジュール | できない | [第8章](08-tasks.md) |

出典: 各章のGoogleヘルプの脚注

ですから、次のように選べばよいでしょう。

- **便利さが大切なら**オンのままにして、繊細な会話だけ**一時チャット**（[第2章](02-screen-tour.md#一時チャット-—-記録が残らない会話)）で行います。
- **学習に使われること自体が嫌なら**オフにして、上の機能をあきらめます。

どちらの場合でも、**機密を最初から入力しないこと**がもっとも確実です（[ステップ1 第9章](../00-common/09-safety.md#入れてはいけないもの)）。

<Quiz id="ch309-activity" />

## 履歴の削除とダウンロード

### 削除する

「Geminiアプリのアクティビティ」ページ（`myactivity.google.com/product/gemini`）で削除します。[^activity]

- 履歴の上の**「削除（삭제）」**を押すと、**「全期間（전체 기간）」・「過去1時間（지난 1시간）」・「過去1日（지난 1일）」・「カスタム範囲（사용자설정 범위）」**から選べます。[^activity]
- 日付の横や項目の横にある削除ボタンで、1日分や1件だけを削除することもできます。[^activity]

**自動削除**も決められます。初期設定では、**18か月**がたつと削除します。このガイドの画面にも「18개월이 지난 활동 삭제」（18か月より前のアクティビティを削除）と表示されていました。3か月、36か月、または「自動削除しない（자동 삭제 안함）」に変えられます。[^activity][^report]

削除しても残るものがあります。

- **すでに人間がレビューした会話は削除されず、最大3年間保管されます。**[^hub]
- **共有した会話を削除しても、公開リンクは削除されません。** リンクは別に削除してください（[第3章](03-chats.md#共有したリンクを削除する)）。[^activity]
- 連携したアプリとの接続を切っても、Geminiのアクティビティ履歴は削除されません。[^hub]

### ダウンロードする

自分のGeminiの履歴を、ファイルで受け取っておけます。**Googleテイクアウト**（`takeout.google.com`）で、Geminiに使っているアカウントでログインしてから、「すべて選択解除（모두 선택 해제）」を押し、Geminiの項目だけを選びます。[^download]

- メールで受け取るダウンロードリンクは、**7日間**開けます。[^download]
- **ダウンロードしても、Googleのサーバーにある履歴は削除されません。** 削除するには、上で見たように別に削除します。[^download]

<Quiz id="ch309-delete" />

## やってはいけないこと、信じてはいけないこと

### 利用ルール

Googleは、Geminiで作ってはいけないものを定めています。児童の性的搾取に関するもの、実在の人物の性的な画像、スパム・詐欺、危険または違法な活動、憎悪・嫌がらせ、人をだます偽のコンテンツなどです。[^guidelines]
違反すると、警告から一部の機能の制限、**Geminiの利用停止、他のGoogleサービスの利用停止**まで受けることがあります。[^guidelines]

### 回答をそのまま信じない

Geminiは人間ではありません。自分で考えたり感情を感じたりすることはできず、パターンを見つけるのが得意なだけです。[^genai]
そのため、**間違った内容を事実のように話すことがあります**（ハルシネーション）。[^hub] **診断・治療・医療のアドバイスや、法律・金融のような専門的な助けを、Geminiに頼らないでください。** 回答は、参考用の情報にすぎません。[^hub]
確認する習慣は、[ステップ1 第9章](../00-common/09-safety.md#確認する4つの習慣)にまとめてあります。

### 子どもと会社のアカウント

- **満13歳未満**（国によって異なります）の子どもは、親が**Family Link**（家族管理アプリ）で許可して初めて、Geminiを使えます。[^child]
- **会社・学校のアカウント**は、ルールが異なります。会社が使っているGoogle Workspaceのグレードによっては、会話とアップロードしたファイルを人間がレビューせず、AIの学習にも使わない場合があります。「アクティビティを保存」は、管理者だけがオフにできます。[^work] 会社のアカウントなら、会社のAI利用ルールをまず確認してください。

<Quiz id="ch309-rules" />

## 実際にやってみよう

1. 「設定」 → 「アクティビティ」を開き、「アクティビティを保存」がオンになっているか、自動削除が何か月になっているかを確認する。
2. 自動削除の期間を、自分に合わせて選ぶ（例: 3か月）。
3. 「削除」 → 「過去1時間」で、さっき交わした練習用の会話を削除してみる。
4. [第3章](03-chats.md#共有したリンクを削除する)で学んだとおり、「自分の公開リンク（내 공개 링크）」に残っているリンクがないか確認する。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 課題で使う会員名簿のように、他の人の個人情報が入ったファイルは、一時チャットでだけ扱うか、名前を「会員1」のように変えてからアップロードする。課題を終えたら、関連する会話を削除する。

## まとめ

- ログインして使うと、質問・アップロードしたファイル・連携アプリの情報・位置などが保存される。チャットを使って広告を表示することはない。
- 一部の会話は人が読む。「アクティビティを保存」がオンだと、AIの学習にも使われる。機密は入力しない。
- 「アクティビティを保存」は、満18歳以上なら初期設定でオンになっている。オフにすると72時間だけ保管されて学習に使われないが、メモリ・スキル・タスクなど多くの機能が使えなくなる。
- 「Geminiアプリのアクティビティ」で期間を選んで削除し、自動削除（初期設定は18か月）を変える。人間がレビューした会話は、最大3年残る。
- テイクアウトで履歴をダウンロードできる。ダウンロードしても、サーバーの履歴はそのままだ。
- 回答は間違うことがある。医療・法律・金融の判断は、専門家に任せる。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Keep Activity | キープアクティビティ（アクティビティを保存） | 自分のGeminiの会話をアカウントに残しておく設定 |
| Gemini Apps Activity | ジェミニアプリズアクティビティ（Geminiアプリのアクティビティ） | 自分の会話の履歴を見たり削除したりするページ |
| Auto-delete | オートデリート（自動削除） | 決めた期間がたった履歴を自動で削除する設定 |
| Human reviewer | ヒューマンレビュアー（人間のレビュアー） | サービス改善のために会話の一部を読む人 |
| Google Takeout | グーグルテイクアウト | Googleサービスの自分のデータをダウンロードする場所 |
| Family Link | ファミリーリンク | 親が子どものGoogleアカウントを管理するアプリ |

<ChapterDone :chapter="309" />

次の章: [第10章 音声とスマホ](10-voice-mobile.md)

[^report]: Gemini Web画面（Google AI Pro、韓国語）で確認。「설정」 → 「활동」を押すと、新しいタブにmyactivity.google.comの「Gemini 앱 활동」が開き、設定名 「활동 기록 보관」、状態表示 「사용」、説明 "이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다."、自動削除ボタン 「18개월이 지난 활동 삭제」。(確認日 2026-10-30、`docs/reports/2026-10-30_Gemini-공식-자료.md`の「실제 화면에서 직접 확인」の節。このページには実際の会話履歴が表示されるため、キャプチャしていない)
[^hub]: Googleヘルプ「Gemini Apps Privacy Hub」（韓国語版「Gemini 앱 개인 정보 보호 허브」）。"What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (確認日 2026-10-31)
[^activity]: Googleヘルプ「Manage & delete your activity in Gemini Apps」（韓国語版「Gemini 앱에서 활동 관리 및 삭제하기」）。"If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." 韓国語版の名前 「사용 중지」「사용 중지 및 활동 삭제」「삭제」「전체 기간」「지난 1시간」「지난 1일」「사용자설정 범위」「자동 삭제 안함」。https://support.google.com/gemini/answer/13278892 (確認日 2026-10-31)
[^download]: Googleヘルプ「Download your Gemini Apps data」（韓国語版「Gemini 앱 데이터 다운로드하기」）。"Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." 韓国語版の名前 「모두 선택 해제」。https://support.google.com/gemini/answer/16920332 (確認日 2026-10-31)
[^guidelines]: Googleヘルプ「Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful」（韓国語版「Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기」）。禁止項目の見出し "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (確認日 2026-10-31)
[^genai]: Googleヘルプ「Learn about generative AI」（韓国語版「생성형 AI에 대해 자세히 알아보기」）。"Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (確認日 2026-10-31)
[^child]: Googleヘルプ「Guide your child's Gemini Apps experience」（韓国語版「자녀의 Gemini 앱 사용 관리하기」）。"A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (確認日 2026-10-31)
[^work]: Googleヘルプ「Use Gemini Apps with a work or school Google Account」（韓国語版「직장 또는 학교 Google 계정으로 Gemini 앱 사용하기」）。"Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." （コアサービスとして提供されるWorkspaceのグレードの説明）/ "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (確認日 2026-10-31)
