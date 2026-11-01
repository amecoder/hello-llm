# 第5章 記憶とカスタマイズ — メモリ、指示、他のAIからの引っ越し

> **一言まとめ**: Geminiは、**過去の会話（メモリ）**、**つないだGoogleアプリ**、**自分が書いておいた指示**で、自分に合わせて答えます。
> 記憶が間違っていたら会話の中で直し、消したいときはその内容が入った会話を削除します。ChatGPT・Claudeの記憶と会話も移してこられます。

画面は2026年10月のWeb版を基準にしていて、図は有料プラン（Google AI Pro）の韓国語画面です。この章の機能には、**アメリカでだけ**使えるものがあるので、そうした機能は別に示しました。

## Geminiが自分を知っていく3つの道

Geminiは、3つの方法で自分に合わせた答えをします。[^personal]

| 道 | 何を使うか | このガイドでは |
|---|---|---|
| メモリ | 過去のGeminiの会話 | この章 |
| つないだアプリ | GmailやGoogleフォトのようなGoogleアプリの内容[^apps] | [第7章](07-skills-apps.md) |
| 指示 | 自分が書いておいた好み（口調・形式など） | この章 |

出典: Googleヘルプ[^personal]

これらの機能は、**個人のGoogleアカウント**でだけ使えます。会社・学校のアカウントや、保護者が管理しているアカウントでは使えません。[^personal] まだすべての人に開かれているわけではないので、機能ごとに条件が違います。[^personal]

設定は1か所にまとまっています。「設定（설정）」→「パーソナルインテリジェンス（개인 인텔리전스）」を押してください。[^screen][^memory]

![「設定（설정）」→「パーソナルインテリジェンス（개인 인텔리전스）」画面。タイトルの下に"나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요."。①「メモリ（메모리）」カード（"Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다."）、②メモリのスイッチ（オン）、③「接続済みのアプリ（연결된 앱）」カード、④「Geminiへのリクエスト（Gemini 요청 사항）」カードに赤い番号がついている](../../../guide/12-gemini/assets/shot-14-personal-marked.png)

**赤い番号は、下の一覧の番号と同じ場所です。**[^screen]

- ①「メモリ（메모리）」: 過去の会話で自分を知っていく機能です。「管理と削除（관리 및 삭제）」で、過去の会話を整理しに行けます。
- ② メモリをオン・オフにするスイッチです。
- ③「接続済みのアプリ（연결된 앱）」: Googleアプリの連携です（[第7章](07-skills-apps.md#連携アプリ-—-gmail・drive・カレンダーをgeminiで)）。
- ④「Geminiへのリクエスト（Gemini 요청 사항）」: 指示を書いておく場所です。説明は"Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')"です。押すと、別の画面が開きます（下の「指示」の節）。

<Quiz id="ch305-overview" />

## メモリ — 過去の会話を覚える

**メモリ**をオンにすると、Geminiが過去の会話から自分と自分の周りのことを学んで、答えに使います。[^memory]
たとえば、前に「来月の済州島旅行を準備中」と話していたなら、あとで旅行の話をするときに、その内容を続けて使えます。進めている仕事の次のステップや、旅行の計画を、先に提案することもあります。[^memory]

使うには条件があります。[^memory]

- **18歳以上**で、個人のGoogleアカウント
- **「アクティビティの保存（활동 기록 보관）」がオンになっていること**（[第3章](03-chats.md#過去の会話を探す)）
- **一部の機能では使われません。** 代表的なものは、Gemと音声会話（Live）です。かわりに、文字で会話するときに、過去の音声会話を参考にしてほしいと頼むことはできます。

### 過去の会話を聞いてみる

新しい会話で、過去の会話を**テーマや時期で聞けます。**[^recent]

```
先月、読書会の場所について話した会話を探して、要約して。
```

Geminiが過去の会話を参考にしたときは、答えの下の「ソースと関連コンテンツ（소스 및 관련 콘텐츠）」に「以前のチャット（이전 채팅）」が表示されます。ただし、この表示は、ときどき間違うことがあります。[^recent]
気になるときは、直接聞いてみましょう。「過去の会話の情報を使った？」と聞けば大丈夫です。[^memory]

### 記憶が間違っているとき、消したいとき

**間違った内容は、会話の中でそのまま言い直しましょう。** メモリがオンなら、Geminiがその言葉を反映します。それでも、いつも正しく直せるとは限りません。[^memory]

**記憶を消すには、その内容が入った会話をすべて削除する必要があります。** 「Geminiアプリのアクティビティ（Gemini 앱 활동）」でそれらの会話を探して削除してください。[^memory] 削除したあとも、答えから外れるまで少し時間がかかることがあります。[^memory]

「その話は忘れて」と指示を出しても、**いつも守られるわけではありません。** 確実に止めさせるには、そのテーマの会話を削除してください。[^instructions]

**メモリそのものをオフにする**と、Geminiが自分について新しく学ぶのをやめます。上の図の②のスイッチをオフにすれば大丈夫です。[^instructions][^screen]

<Quiz id="ch305-memory" />

## 指示 — 毎回言わなくて済むように

**指示**は、Geminiにいつも従ってほしい、自分だけのルールです。一度書いておけば、新しい会話でも言い直す必要がありません。[^instructions]
画面での名前は「Geminiへのリクエスト（Gemini 요청 사항）」です（上の図の④）。[^screen] **指示は、すべてのユーザーが追加できます。**[^instructions]

指示の例は次のとおりです。[^instructions]

```
すべての答えを、短い要約から始めて。
```

```
長い段落は、箇条書きで分けて。
```

惜しい指示とよりよい指示を比べてみましょう。

| 惜しい指示 | よりよい指示 |
|---|---|
| 「うまく説明して」 | 「専門用語が出てきたら、カッコの中にやさしい言葉で説明を付けて」 |
| 「短く」 | 「答えは5行以内で、最後の行にやることを1つだけ書いて」 |

よりよい指示は、Geminiが守ったかどうかを自分がすぐ確認できるくらい、具体的です（[ステップ1 第4章](../00-common/04-prompt-basics.md)）。

指示を追加する順番は次のとおりです。1番は画面で確認し、2〜3番はヘルプに書かれている名前です（このガイドは、指示の中の画面は開きませんでした）。[^instructions][^screen]

1. 「設定（설정）」→「パーソナルインテリジェンス（개인 인텔리전스）」→「Geminiへのリクエスト（Gemini 요청 사항）」を押します。
2. 「追加 +（추가 +）」を押して、指示を書いてから送信（제출）します。
3. 直したり消したりするには、その指示の「その他（더보기）」を押します。いちばん上のスイッチで、指示全体をオン・オフにすることもできます。

### 会話で覚えさせる（アメリカ限定）

「私はベジタリアンだと覚えておいて」のように、会話の中で言って覚えさせる機能もあります。しかし、この機能は**いまのところアメリカでだけ**使え、Google AIのプランと18歳以上が必要です。[^instructions]
日本・韓国では、上の**指示**で同じ効果を出してみましょう。「私は菜食をしています。食べ物のおすすめでは、肉を抜いて。」のように書いておけば大丈夫です。

Geminiが自分について理解した内容をまとめて見たり直したりできる**メモリの要約**画面もありますが、これも**アメリカの有料プランのユーザー向けに、英語でだけ**提供されています。[^summary]

<Quiz id="ch305-instructions" />

## 他のAIから移してくる

ChatGPTやClaudeを使っていてGeminiに乗り換えるなら、**記憶と会話を持ってこられます。**[^import] 「設定（설정）」メニューの「データとプライバシー（데이터 및 개인 정보 보호）」のまとまりにある「Geminiへメモリをインポート（Gemini로 메모리 가져오기）」を押してください（[第2章](02-screen-tour.md#設定画面-—-アカウント・環境設定・プライバシー)）。[^screen]

![「Geminiへメモリをインポート（Gemini로 메모리 가져오기）」画面。①他のAIに貼り付けるプロンプトと「コピー（복사）」、②「ここに情報を貼り付けてください...（여기에 정보를 붙여넣으세요...）」欄と「メモリを追加（메모리 추가）」、③「チャットをインポート（채팅 가져오기）」— ZIPファイル（5 GB以下）と「追加（추가）」、④インポートしたチャットがアクティビティに保存され、AIモデルの学習をはじめとするサービスの改善に使われるという案内に赤い番号がついている](../../../guide/12-gemini/assets/shot-15-import-marked.png)

**記憶のインポート**は次のように行います。[^import][^screen]

1. ①のプロンプトを「コピー（복사）」して、ChatGPTやClaudeの会話ウィンドウに貼り付けます。
2. そのAIが自分についてまとめてくれた答えをコピーします。
3. ②の欄に貼り付けて、「メモリを追加（메모리 추가）」を押します。

**会話のインポート**は、③で行います。ChatGPTやClaudeからエクスポートしたZIPファイルを、「追加（추가）」でアップロードしてください。[^import][^screen]

- ChatGPTは「設定 > データ管理（데이터 관리）」の「データをエクスポート（데이터 내보내기）」から、Claudeは「設定（설정）」→「プライバシー（개인정보보호）」の「データをエクスポート（데이터 내보내기）」から受け取ります。くわしい道順は、[ChatGPT 第8章](../11-chatgpt/08-privacy.md#データのエクスポート)・[Claude 第9章](../10-claude/09-privacy.md#自分のデータをダウンロードする)を見てください。Geminiのヘルプはこのメニューを「データ制御」と訳していますが、このガイドが確認したChatGPTの画面での名前は「データ管理（데이터 관리）」です。[^import]
- ファイル1つは5GBまで、1日に5個までアップロードできます。[^import]
- 同じZIPをもう一度アップロードすると、新しい会話は追加され、前にインポートした会話は上書きされます。[^import]

**インポートの前に知っておくことがあります。** ④に書かれているとおり、インポートして**続けた**会話は、自分のアクティビティに保存され、**生成AIモデルの学習をはじめとするGoogleサービスの改善に使われます。**[^import][^screen] アクティビティは、いつでも管理して削除できます。

インポートは、個人のGoogleアカウントで、18歳以上の場合だけ使えます。欧州経済領域（EEA）・スイス・イギリスでは使えません。[^import]

<Quiz id="ch305-import" />

## 実際にやってみる

1. 「設定（설정）」→「パーソナルインテリジェンス（개인 인텔리전스）」を開いて、「メモリ（메모리）」がオンになっているか確認する。
2. 「Geminiへのリクエスト（Gemini 요청 사항）」に「すべての答えを、短い要約から始めて。」を追加して、新しい会話で適当な質問をしてみる。要約から始まったか？
3. 新しい会話で、「過去の会話の情報を使った？」と聞いてみる。
4. 確認が終わったら、2番の指示を削除するか、スイッチでオフにする。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「Geminiへのリクエスト（Gemini 요청 사항）」に「読書会のお知らせは、丁寧語で、日付・場所・持ち物をいちばん上に書いて。」を追加してから、新しい会話でお知らせをもう一度頼んで、指示が守られたか見る。

## まとめ

- Geminiは、メモリ（過去の会話）、つないだアプリ、指示で自分に合わせる。設定は「設定（설정）」→「パーソナルインテリジェンス（개인 인텔리전스）」にまとまっている。
- メモリには、18歳以上・個人アカウント・「アクティビティの保存（활동 기록 보관）」が必要である。Gemと音声会話では使われない。
- 間違った記憶は会話の中で言い直し、消すにはその内容が入った会話をすべて削除する。「忘れて」という指示は、いつも守られるわけではない。
- 指示（「Geminiへのリクエスト（Gemini 요청 사항）」）は、すべてのユーザーが使える。会話で覚えさせる機能とメモリの要約は、アメリカ限定である。
- ChatGPT・Claudeの記憶はプロンプトをコピーして移し、会話はエクスポートしたZIPでインポートする。インポートして続けた会話は、AIの学習をはじめとするサービスの改善に使われる。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Memory | メモリー | 過去の会話から自分について学んで、答えに使う機能 |
| Personal Intelligence | パーソナル インテリジェンス（パーソナルインテリジェンス） | メモリ・つないだアプリ・指示をまとめたカスタマイズ機能と、その設定画面 |
| Instructions for Gemini | インストラクションズ フォー ジェミニ（Geminiへのリクエスト） | Geminiにいつも従ってほしい、自分だけのルール |
| Memory summary | メモリー サマリー（メモリの要約） | Geminiが理解した自分を見て直す画面。アメリカ限定 |
| Import | インポート | 他のAIの記憶・会話をGeminiに移すこと |
| ZIP | ジップ | 複数のファイルを1つにまとめた圧縮ファイル |

<ChapterDone :chapter="305" />

次の章: [第6章 検索とDeep Research](06-search.md)

[^screen]: Gemini Web画面（Google AI Pro、韓国語）で直接確認。「설정」→「개인 인텔리전스」（アドレス /personalization-settings）画面 "나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요."、カード「메모리」("Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다. 언제든지 이전 채팅을 관리 및 삭제할 수 있습니다.")とスイッチ、「연결된 앱」、「Gemini 요청 사항」。「설정」→「Gemini로 메모리 가져오기」（アドレス /import）画面 "1 다른 AI 제공업체와의 채팅에 이 프롬프트 복사하기" 「복사」、"2 여기에 대답 붙여넣기" 「여기에 정보를 붙여넣으세요...」 「메모리 추가」、「채팅 가져오기」 "지원되는 AI 제공업체에서 데이터를 내보낸 후 ZIP 파일(5 GB 이하)로 Gemini에 직접 업로드하세요." 「추가」、"Gemini로 가져와 계속 이어 간 채팅은 활동에 저장됩니다. 이 데이터는 생성형 AI 모델 학습을 비롯한 Google 서비스를 개선하고 Google, Google 사용자, 일반 대중을 보호하는 데 사용됩니다." 「Gemini 요청 사항」カードの説明 "Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')"。「Gemini로 메모리 가져오기」は、「설정」メニューの「데이터 및 개인 정보 보호」のまとまりにある。「Gemini 요청 사항」の中の画面は、ユーザーの指示が表示されるため開かなかった。Google AI Proの画面だけを確認し、無料・未成年のアカウントでこのカードが見えるかは確認できなかった。（確認日 2026-10-31）
[^personal]: Googleヘルプ、「Get personalization in Gemini Apps」（韓国語版「Gemini 앱에서 개인화 기능 사용하기」）。"You can get a personalized experience in Gemini Apps based on:" / "These features are not available to everyone at this time. You can find details about each feature in the articles linked below." / "To use these features, you must sign in to Gemini Apps with a personal Google Account. These features are not available while signed in to a work, school, or supervised account." https://support.google.com/gemini/answer/16598623 (確認日 2026-10-31)
[^memory]: Googleヘルプ、「Get personalization with memory of your past Gemini chats」（韓国語版「이전 Gemini 채팅의 메모리를 사용해 개인화 기능 사용하기」）。"With this feature, Gemini can learn from your chats to understand more about you and your world." / "Be 18 or over." / "Not available in certain features, like Gems or Live chats. In a text chat, you can ask Gemini to reference a past Gemini Live conversation." / "At the top, tap Menu   Settings & help   Personal Intelligence." / "Tip: When Memory is turned on, Gemini may suggest topics or tools for you based on previous conversations. For instance, Gemini might:" / "Suggest next steps for a project you’re working on" / "Offer to help plan a trip you’ve mentioned" / "To correct what Gemini knows about you and uses in a response:" / "Make sure that Memory is turned on." / "If you delete a chat, there might be a short delay before Gemini stops using it to personalize your responses." / "To check if Gemini used your past chats, just ask Gemini, “Did you use any info from past chats?”" / "To delete something that Gemini remembered about you, delete all chats with this info from Gemini Apps Activity." / "While Gemini continues to improve, it might not always get it right." https://support.google.com/gemini/answer/16598469 (確認日 2026-10-31)
[^recent]: Googleヘルプ、「Find & manage your recent chats in Gemini Apps」。"In a new chat, you can ask Gemini about your past Gemini chats by topic or timeframe, or ask it to reference them before responding." / "Gemini may occasionally make mistakes and display this label incorrectly." 韓国語画面での名前「소스 및 관련 콘텐츠」「이전 채팅」。https://support.google.com/gemini/answer/13666746 (確認日 2026-10-31)
[^instructions]: Googleヘルプ、「Manage what Gemini remembers about you and customize responses」（韓国語版「Gemini가 나에 대해 기억하는 정보 관리 및 대답 맞춤설정」）。"Gemini will remember the information or instructions you share with it, even in new chats." / "be over 18." (韓国語版 "만 18세 이상이어야 합니다.") / "Have a Google AI plan." / "Only available in the US. All users can add instructions for Gemini Apps." / "Remember that I am vegetarian." / "“Start all responses with a short summary.”" / "Important: Instructions for Gemini to forget or avoid topics in chats doesn’t always work perfectly. To make sure Gemini stops mentioning a topic, delete any chats about it from your Gemini Apps Activity." / "Tap Add +." / "At the top, turn Instructions for Gemini off  or on ." / "To stop Gemini from learning about you" 韓国語画面での名前「Gemini 요청 사항」「추가 +」「제출」「더보기」「수정」「삭제」。https://support.google.com/gemini/answer/16598625 (確認日 2026-10-31)
[^summary]: Googleヘルプ、「View & manage your Memory summary in Gemini Apps」（韓国語版「Gemini 앱에서 내 메모리 요약 보기 및 관리하기」）。"You can use memory summary to view, edit, and delete what Gemini Apps understands about you." / "Currently available to US users with an active Google AI plan." / "Available in English." https://support.google.com/gemini/answer/18617127 (確認日 2026-10-31)
[^apps]: Googleヘルプ、「Connect your Google apps to personalize your Gemini experience」（韓国語版「Google 앱을 연결하여 Gemini 환경 개인화하기」）。"Get content from Gmail and Google Photos, like photos from your last vacation." https://support.google.com/gemini/answer/16598406 (確認日 2026-10-31)
[^import]: Googleヘルプ、「Import from other AI platforms to Gemini Apps」（韓国語版「다른 AI 플랫폼에서 Gemini 앱으로 가져오기」）。"You can bring over your preferences, remembered facts & details, and general contextual information (sometimes called  "memory") from other AI platforms." / "Be signed in with a personal Google Account. This feature isn’t available if you sign in to a work, school, or supervised Google Account." / "Be 18 or older." / "The EEA, Switzerland, or the United Kingdom." / "Click Settings  Data controls." / "Click Settings  Privacy." / "Copy the response from the other AI platform that contains memories about you." / "Tip:  You can upload up to 5 .zip.files per day." / "A download link will be sent to the email associated with your account on the other AI platform." / "If you reupload a  .zip file with your exported chats it will add any new conversations and overwrite previously imported ones." / "Your imported and continued chats are saved in your Activity. This data is used to improve our services (including training generative AI models), and to protect Google, our users and the public." https://support.google.com/gemini/answer/16868299 (確認日 2026-10-31)
