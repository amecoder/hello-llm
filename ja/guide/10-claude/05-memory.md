# 第5章 記憶とカスタマイズ — 毎回自己紹介しなくて済むように

> **一言まとめ**: いつも守ってほしいことは**指示**に書き、会話から知った自分についての内容は**メモリ**が覚えます。
> 何が記憶されているかを見て、直して、オフにする方法まで身につけます。長く使うときに一息つかせてくれる休憩の通知もあわせて見ます。

画面は2026年10月のWeb版を基準にしています。いまは新しいClaudeの画面と新しい設定画面が順次配信されているため、メニューの名前や位置は画面によって異なる場合があります。
この章の図は、無料プランのWeb画面です。メニューの名前は、図に見える名前で書きます。ヘルプに出てくる別の名前は、脚注と折りたたみボックスにまとめました。

## 自分を知ってもらう3つの方法

[ステップ1 第4章](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)で、よいプロンプトには**文脈**が入ると学びました。
ところが、「私は近所の惣菜屋の店主です」のような言葉を、新しいチャットのたびに書き直すのは面倒です。
[ステップ1 第6章](../00-common/06-conversation.md#新しい会話では基本的に知らない)で見たとおり、新しい会話は、もともと自分のことを知らない状態で始まるからです。

Claudeには、この手間を減らしてくれる機能が3つあります。

| 機能 | 誰が決めるか | たとえ |
|---|---|---|
| **指示**（instructions） | 自分で直接書く | お店の壁に貼った注文メモ |
| **メモリ**（memory、記憶） | Claudeが会話しながら保存する | 常連の好みを覚えている店主 |
| **過去の会話の参照** | 自分が聞くとClaudeが探す | 過去の帳簿をめくって調べること |

3つとも、最初から完璧に設定する必要はありません。使いながら、1つずつ手を入れれば大丈夫です。

<Quiz id="ch205-three-ways" />

## 指示 — すべての会話に適用するルール

**指示**は、自分で書いておく「いつも守ってほしいこと」です。ここに書いた内容は、Claudeとの**すべての会話**に適用されます。[^personal]

開く場所は次のとおりです。[^personal]

1. 左下の自分の名前を押します。
2. 「設定（설정）」→「アカウント（계정）」を選びます。[^screen]
3. ②「Claude指示（Claude 지침）」の欄に書きます。[^screen]

![設定の「アカウント（계정）」画面。①「氏名（성명）」と「Claudeにどう呼んでほしいですか？（Claude가 어떻게 불러드릴까요?）」、②「Claude指示（Claude 지침）」の入力欄、③「すべての端末からログアウト（모든 기기에서 로그아웃）」、④「アカウントを削除（계정 삭제）」に赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

名前とメールアドレスは例に変えた画面です（無料プラン）。**赤い番号は、下の一覧の番号と同じ場所です。**

- ①「氏名（성명）」・「Claudeにどう呼んでほしいですか？（Claude가 어떻게 불러드릴까요?）」 — Claudeが自分を呼ぶ名前
- ②「Claude指示（Claude 지침）」 — すべての会話に適用するルールを書く欄
- ③「すべての端末からログアウト（모든 기기에서 로그아웃）」
- ④「アカウントを削除（계정 삭제）」

②の欄の上には、この指示をチャットとCowork全体で意識に置くという案内があります。[^screen] 空欄には、「例: 説明を簡潔にわかりやすく保つ」と薄く書かれています。[^screen]

::: details 設定に「アカウント」ではなく「Your Claude」が見えるときは（クリックで開く）
ヘルプでは、この欄は「設定（설정）」→「Your Claude」の「指示（지침）」として出てきます。[^personal] 新しい設定画面が届いたアカウントでは、そう見えることがあります。画面に見える名前に従ってください。
:::

何を書けばいいか途方に暮れたら、[ステップ1 第4章](../00-common/04-prompt-basics.md#良いプロンプトの5つの要素)の5つの要素のうち、**毎回同じもの**だけを選んで入れてみましょう。

```
私は近所で惣菜屋を営む50代の店主です。コンピューター用語はよくわかりません。
- 答えは丁寧語で、難しい言葉はカッコで説明を付けてください。
- 最初に結論を一行で言って、そのあとに説明してください。
- 確かでない内容は作り話をせず、わからないと言ってください。
```

惜しい例とよりよい例を比べてみましょう。

- 惜しい例: 「親切に答えて。」
- よりよい例: 「難しい言葉はカッコで説明して。結論を先に一行で言って。」

よりよい例は、何をすればいいのかが具体的です。

指示を書いたら、新しいチャットを開いて、短い質問を1つ送ってみましょう。「口調は合っているか？ 結論が先に出ているか？」と自分に聞いてみれば大丈夫です。

指示は、初日にすべて埋めなくても構いません。使っているうちに、**同じことを何度も直してほしいと頼む**ようになります。「結論から言って」、「表は3列まで」のようなことです。その言葉こそ、指示に書き写す文です。[^academy-context] 一度書いておけば、次の会話からは言い直さなくて済みます。

特定の仕事にだけ使うルールは、アカウント全体の指示よりも**プロジェクトの指示**に置くほうがよいです。プロジェクトの指示は、そのプロジェクトの中のチャットにだけ適用されます。[^personal] プロジェクトは[第7章](07-projects-tools.md)で扱います。

<Quiz id="ch205-instructions" />

## メモリ — Claudeが会話しながら覚えること

**メモリ**は、Claudeが会話から知った自分についての内容を、覚えておく機能です。
Free・Pro・Maxプランでは、Web・デスクトップ・スマホアプリのすべてで、**最初からオンになっています。**[^memory]
法人向けプラン（Team・Enterprise）は、管理者が許可しないと使えず、各自がオンにするまではオフです。[^memory]

Claudeは、会話が終わったあとに要約するわけではありません。**会話している最中に**、トピックごとに分けて保存します。[^memory]
ですから、「締め切りが変わったの」と言えば、次の会話ではもうその事実を知っています。

[ステップ1 第6章](../00-common/06-conversation.md#新しい会話では基本的に知らない)やほかのAI講座では、「新しい会話は最初から始まる」と学びます。[^academy-memory] Claudeでは、メモリがオンなら、新しい会話でも、自分が伝えた内容を知った状態で始められます。
本当にまっさらな状態から始める様子を見たければ、新しいチャットで最初のメッセージを送る前に、「＋」→「メモリ（메모리）」をオフにしてください。そのチャットでは、覚えた内容を使いません。[^off] 方法は、下の「1つのチャットだけメモリをオフにする」にあります。

### 何を覚えるか

Claudeは、一緒に働くうえで役立つ日常的な文脈を覚えます。[^memory]

- 自分の役割、している仕事
- 仕事や生活に出てくる人と場所
- 好むコミュニケーションの仕方と仕事の進め方
- 進行中の仕事の細かい内容

Claudeが自動で保存することもあります。必ず残したいことは、自分で「覚えて」と言えば大丈夫です。[^memory]

```
覚えて: 私はソウルで惣菜屋をしていて、お客さんは主に40〜60代です。
宣伝文句を頼んだときは、このお客さん層に合わせて書いてください。
```

### 覚えないこと

健康・人種・宗教・政治・性的指向のような**センシティブな話題**は、基本的に保存しません。[^sensitive]
毎回説明し直したくないなら、「設定（설정）」→「メモリ（메모리）」で、「センシティブな話題をメモリに含める（민감한 주제를 메모리에 포함）」をオンにできます。[^screen][^sensitive][^your-claude] 最初はオフです。[^screen]

身分証の番号・犯罪歴・金融口座の番号・在留資格は、**頼んでも保存しません。**[^sensitive]
だからといって、こうした情報をチャットに書いてもよいという意味ではありません。入れる前に、[ステップ1 第9章](../00-common/09-safety.md#入れてはいけないもの)を一度思い出してください。

> プロジェクトの中では、そのプロジェクトだけのメモリが別に蓄積されます。ほかのプロジェクトのメモリは使いません。[^memory] くわしくは[第7章](07-projects-tools.md)で見ます。

<Quiz id="ch205-memory" />

## 覚えた内容を見て直す

Claudeが自分について何を覚えているか、直接見られます。
メモリに関する設定は、「設定（설정）」→「メモリ（메모리）」の1つの画面にまとまっています。[^screen]

![設定の「メモリ（메모리）」画面。①「チャットからメモリを生成（채팅에서 메모리 생성）」スイッチ、②「センシティブな話題をメモリに含める（민감한 주제를 메모리에 포함）」スイッチ、③「他のAIプロバイダーからメモリをインポート（다른 AI 제공업체에서 메모리 가져오기）」と「インポートを開始（가져오기 시작）」、④「メモリをエクスポート（메모리 내보내기）」と「エクスポート（내보내기）」に赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-memory-marked.png)

無料プランの画面です。**赤い番号は、下の一覧の番号と同じ場所です。**

- ①「チャットからメモリを生成（채팅에서 메모리 생성）」 — メモリをオン・オフにするスイッチ
- ②「センシティブな話題をメモリに含める（민감한 주제를 메모리에 포함）」 — 健康・宗教のような話題も覚えさせるスイッチ
- ③「他のAIプロバイダーからメモリをインポート（다른 AI 제공업체에서 메모리 가져오기）」 — 他のAIの記憶を移してくる
- ④「メモリをエクスポート（메모리 내보내기）」 — 記憶をファイルでダウンロードする

この画面の下のほうに、保存されたメモリの一覧があります。[^screen] トピックを押して読み、鉛筆のマークで直したり、「削除（삭제）」で消したりすれば大丈夫です。[^manage][^your-claude]

<!-- スクリーンショット必要: 保存されたメモリがあるアカウントでのトピック一覧と編集・「削除」ボタン -->

一覧のいちばん下には、「Claudeに変更内容を伝えてください（Claude에게 변경할 내용을 알려 주세요）」という入力欄もあります。[^screen]
設定画面まで行かなくても構いません。チャットで言葉で直しても、次の会話から反映されます。[^manage]

```
私が惣菜屋をしているということは、もう忘れて。先月、お店をたたんだの。
```

一覧を開いたら、自分に聞いてみましょう。「間違った内容はないか？ 残したくない内容はないか？」

### チャットを消しても記憶は残る

間違えやすい点が1つあります。**会話を消しても、その会話から生まれたメモリは消えません。**[^manage]
消したい内容があれば、「設定（설정）」→「メモリ（메모리）」の一覧で、そのメモリを別に消してください。

> この説明は、いまの新しいメモリを基準にしています。一部の法人向けプランには、古い方式のメモリが残っています。[^manage] 自分の画面と違うときは、画面に従ってください。

<Quiz id="ch205-manage" />

## メモリをオフにする — 一時停止とリセット

メモリのスイッチは、「設定（설정）」→「メモリ（메모리）」の①「チャットからメモリを生成（채팅에서 메모리 생성）」(Memory from chats)です。[^screen][^off][^your-claude]
スイッチを押してオフにしようとすると、2つのうちどちらかを選ぶことになります。[^off]

- **「メモリを一時停止（메모리 일시 중지）」**(Pause memory) — 記憶はそのまま残します。ただし、使いもせず、新しく作りもしません。
- **「メモリをリセット（메모리 재설정）」**(Reset memory) — プロジェクトのメモリまで、**すべて完全に削除**します。元に戻せません。

少し休みたいだけなら、一時停止を選んでください。リセットは、またオンにしても最初からやり直しになります。[^off]

### 1つのチャットだけメモリをオフにする

メモリはオンのまま、**このチャットだけ**オフにすることもできます。[^off]

1. 新しいチャットを開きます。
2. 入力欄の「＋」を押します。
3. メニューのいちばん下の⑥「メモリ（메모리）」(Memory)を押してオフにします。右側にチェックマークがあれば、オンの状態です。[^screen]
4. 最初のメッセージを送ります。

![入力欄の「＋」を押すと開くメニュー。①「ファイルをアップロードまたは追加（파일 업로드 또는 추가）」、②「Skills」、③「コネクタを追加（커넥터 추가）」、④「デザインシステム（디자인 시스템）」、⑤「プラグインを追加（플러그인 추가）」、⑥チェックマークのついた「メモリ（메모리）」に赤い番号がついている](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

無料プランの画面です。この章で使うのは、⑥「メモリ」です。残りは[第4章](04-files-artifacts.md)と[第7章](07-projects-tools.md)で扱います。

**最初のメッセージを送る前にだけ**オフにできます。会話が始まったあとは変えられません。[^off]

こうして始めたチャットは、[第3章](03-chats.md)の**シークレットチャット**とは違います。メモリだけをオフにしたチャットは、会話の履歴にそのまま残ります。[^off] 履歴まで残したくないなら、シークレットチャットを使ってください。

| 選ぶもの | メモリ | 会話の履歴 |
|---|---|---|
| 「＋」→「メモリ」をオフ | 使わず、作らない | 残る |
| シークレットチャット | 保存しない | 残らない |

<Quiz id="ch205-off" />

## 過去の会話を参照する

「このあいだ話したあれがあったでしょ」と聞くこともできます。
有料プラン（Pro・Max・Team・Enterprise）では、Claudeが**過去の会話を探して**、その内容を続けて使います。[^past]

自然に聞いてみましょう。

```
このあいだ一緒に作ったお店の宣伝文句、覚えてる？ そこから続けて整えて。
```

Claudeが過去の会話を探すと、いまのチャットに**ツールを使った表示**が現れます。[^past]
探して使った会話には、元の会話へのリンクが付きます。[^past] リンクを押して、Claudeが正しい会話を見つけたか確認してみましょう。

知っておくことです。

- **プロジェクトの中の会話**は、そのプロジェクトの中でだけ探します。[^past]
- **オフにしたいなら**、「設定（설정）」→「メモリ（메모리）」で「チャットの検索と参照（채팅 검색 및 참조）」をオフにしてください。[^past][^past-where] 有料プランの機能なので、この章の無料プランの画面では、このスイッチは見えませんでした。[^screen]
- サイドメニューから自分で過去の会話を探す方法は、[第3章](03-chats.md)で扱います。

<Quiz id="ch205-past-chats" />

## 他のAIの記憶を移してくる・エクスポートする

他のAIサービスを使っていてClaudeに乗り換えたなら、そちらに蓄積された記憶を持ってこられます。
**すべてのプラン**で、Webとデスクトップアプリから行えます。[^import]

1. **元に使っていたAIから記憶を取り出します。** ヘルプにおすすめのプロンプトがあります。"I'm moving to another service and need to export my data."で始まる英語のプロンプトです。脚注のヘルプのリンクから全文をコピーして使ってください。[^import]
2. **Claudeでインポートを開きます。** 「設定（설정）」→「メモリ（메모리）」の③「他のAIプロバイダーからメモリをインポート（다른 AI 제공업체에서 메모리 가져오기）」の横の「インポートを開始（가져오기 시작）」を押します。[^screen][^your-claude]
3. **貼り付けます。** 取り出してきた文章を欄に貼り付けて、「メモリに追加（메모리에 추가）」を押します。[^import]
4. **確認します。** 終わったら、「Claudeが自分について学んだ内容を見る（Claude가 나에 대해 학습한 내용 보기）」を押して、何が入ったかを見ます。[^import]

インポートの前にプロンプトを直して、**センシティブな情報を除いても構いません。**[^import] 残したくない内容は、最初から入れないほうが安全です。

知っておくことが2つあります。

- **実験的な機能です。** インポートした記憶が、いつも正しく入るとは限りません。[^import]
- **仕事と関係のない個人情報は、残らないことがあります。**[^import]

逆に、Claudeの記憶を**エクスポート**したいときは、「設定（설정）」→「メモリ（메모리）」の④「メモリをエクスポート（메모리 내보내기）」の横の「エクスポート（내보내기）」を押してください。Markdown（文字だけを入れる簡単な文書形式）のファイルが入った.zipファイルとしてダウンロードされます。[^screen]
チャットで、こう頼んでも構いません。[^import]

```
メモリに入っているとおりに、私についての記憶を、一文字も変えずにすべて書き出して。
```

受け取った文章を、自分のパソコンにファイルとして保存しておけば、バックアップになります。

<Quiz id="ch205-import" />

## 休憩の通知と通知なしの時間

AIと話していると、時間がたつのを忘れることがあります。そんなときに使える機能が2つあります。
Free・Pro・Maxプランで**ベータ**（正式リリース前のテスト機能）として提供されています。[^wellbeing]

開く場所は、「設定（설정）」→「時間と集中（시간 및 집중）」(Time and focus)です。[^screen][^wellbeing-name]

![設定の「時間と集中（시간 및 집중）」画面。①「休憩の通知（휴식 알림）」と時間・分を選ぶ欄2つ、②「通知なしの時間（방해 금지 시간）」と日〜土の曜日ボタンに赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-time-marked.png)

無料プランの画面です。**赤い番号は、下の一覧の番号と同じ場所です。**

- ① **休憩の通知（휴식 알림）** — 時間と分を選んでおきます。[^screen] その分だけ使うと、通知が出ます。止める、あとでもう一度知らせてもらう、閉じて続ける、のどれかを選べます。[^wellbeing]
- ② **通知なしの時間（방해 금지 시간）**(quiet hours)[^quiet-name] — ほかのことをするために空けておく曜日を選びます。[^screen]

Webやデスクトップで一度決めると、スマホアプリにも適用されます。[^wellbeing]

どちらも、**強制的にブロックするロックではありません。** いつでも「続ける（계속）」を押して、そのまま使い続けられます。[^wellbeing]
また、プランの使用上限とは**別のもの**です。[^wellbeing] 使用上限は[第1章](01-getting-started.md)で扱います。

<Quiz id="ch205-wellbeing" />

## 実際にやってみる

1. 「設定（설정）」→「メモリ（메모리）」の一覧を開いて、Claudeが自分について何を覚えているかを読んでみる。間違った内容があれば、直すか消す。
2. 「設定（설정）」→「アカウント（계정）」の「Claude指示（Claude 지침）」に、上の例のように、自分についての文脈を1行とルールを3行書く。
3. 新しいチャットで、「週末にやるとよいことを3つおすすめして」とだけ送る。口調と形式が指示どおりか見る。
4. もう一度新しいチャットを開き、最初のメッセージの前に「＋」→「メモリ（메모리）」をオフにしてから、同じ質問を送る。2つの答えがどう違うか、比べてみる。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: お知らせに、いつもほしいルールを1行、「Claude指示（Claude 지침）」に入れてみる。例: 「お知らせを書くときは、日付・場所・持ち物をいちばん上に置いて。」 この1行は、第7章でプロジェクトの指示に移しても構いません。

## まとめ

- 指示は自分が書くルールで、すべての会話に適用される。「設定（설정）」→「アカウント（계정）」→「Claude指示（Claude 지침）」に書く。特定の仕事にだけ使うルールは、プロジェクトの指示に置く。
- メモリは、Claudeが会話している間にトピックごとに保存する。Free・Pro・Maxは最初からオンである。
- センシティブな話題は基本的に保存せず、身分証の番号・口座番号のようなものは、頼んでも保存しない。
- 「設定（설정）」→「メモリ（메모리）」で見て直す。会話を消してもメモリは残るので、別に消す。
- メモリをオフにするとき、一時停止は記憶を残し、リセットはすべて消す。1つのチャットだけオフにするなら、最初のメッセージの前に「＋」→「メモリ」。
- 有料プランでは、過去の会話を探して続きに使える。
- 他のAIの記憶は「インポートを開始（가져오기 시작）」で移してくる。実験的な機能である。自分の記憶は「エクスポート（내보내기）」でダウンロードする。
- 休憩の通知と通知なしの時間は、「設定（설정）」→「時間と集中（시간 및 집중）」で決める。ロックではなく通知である。

## 用語まとめ

| 用語 | 読み方 | ひとことで言うと |
|---|---|---|
| Instructions | インストラクションズ（指示） | すべての会話に適用されるよう、自分で書いておくルール |
| Memory | メモリー | Claudeが会話から知った自分についての内容を覚える機能 |
| Pause memory | ポーズ メモリー（メモリの一時停止） | 記憶は残して、使いもせず作りもしないようにすること |
| Reset memory | リセット メモリー（メモリのリセット） | すべての記憶を完全に消すこと |
| Search and reference chats | サーチ アンド リファレンス チャッツ（チャットの検索と参照） | 過去の会話を探して、いまの答えに使う機能 |
| Memory import | メモリー インポート（メモリのインポート） | 他のAIに蓄積された記憶をClaudeに移す機能 |
| Time and focus | タイム アンド フォーカス（時間と集中） | 休憩の通知と通知なしの時間を決める設定（ヘルプでの新しい名前はWellbeing） |
| Quiet hours | クワイエット アワーズ（通知なしの時間） | ほかのことをするために空けておく曜日を決めておく機能 |

<ChapterDone :chapter="205" />

次の章: [第6章 検索とリサーチ](06-search.md)

[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。「設定（설정）」→「アカウント（계정）」の「Claude指示（Claude 지침）」: "Claude는 Anthropic의 가이드라인 범위 내에서 이 계정 및 연결된 모든 계정의 채팅과 Cowork 전반에 걸쳐 이 지침을 염두에 둡니다." / 「設定」→「メモリ」: 「채팅에서 메모리 생성」、「민감한 주제를 메모리에 포함」、「다른 AI 제공업체에서 메모리 가져오기」、「메모리 내보내기」("메모리를 Markdown 파일이 담긴 .zip 파일로 다운로드합니다.") / 「＋」メニューの「메모리」 / 「設定」→「時間と集中」: 「휴식 알림」、「방해 금지 시간」 (確認日 2026-10-26)
[^personal]: Anthropicヘルプ、「Understanding Claude's personalization features」。"Any instructions you add here will be applied to all of your conversations with Claude." / "Select "Settings," then "Your Claude" (or "Account" in the older Settings layout)." / "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728 (確認日 2026-10-26)
[^memory]: Anthropicヘルプ、「Use Claude’s chat search and memory to build on previous context」。"Memory is on by default for Free, Pro, and Max plans on the web, Claude Desktop, and Claude Mobile" / "On Team and Enterprise plans, owners control whether memory is available, and it's off for each member until they turn it on." / "Claude saves memory as a set of individual topics as you chat, rather than summarizing conversations after they end." / "Your role, projects, and professional context" / "Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^sensitive]: Anthropicヘルプ、「Use Claude’s chat search and memory to build on previous context」。"By default, Claude does not store topics related to personal or sensitive subject matter" / "Turn on Include sensitive topics in memory in Settings > Your Claude" / "This includes government ID numbers, criminal history, financial account numbers, and immigration status." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^manage]: Anthropicヘルプ、「Use Claude’s chat search and memory to build on previous context」。"Select any topic to read it, then use the edit icon to change it or select "Delete" to remove it." / "Tell Claude what you'd like it to remember, change, or forget, and the update applies to your next conversation." / "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed" / "A small number of Team and Enterprise organizations still use the legacy memory from chats experience." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^off]: Anthropicヘルプ、「Use Claude’s chat search and memory to build on previous context」。"navigating to Settings > Your Claude and turning on Memory from chats" / "Reset memory: Permanently deletes all memories including project memories." / "You need to turn memory off before you send the first message." / "Unlike incognito chats, they stay in your chat history." / "Claude won't use what it remembers about you in that chat, and nothing from the chat is saved to memory." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^past]: Anthropicヘルプ、「Use Claude’s chat search and memory to build on previous context」。"Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Individual project conversations (searches are limited to within each specific project)." / "navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^import]: Anthropicヘルプ、「Import and export your memory from Claude」。"Memory imports are available for Free, Pro, Max, Team, and Enterprise plans on the web and Claude Desktop." / "I'm moving to another service and need to export my data." / "Paste the exported text from your previous AI provider into the text box and click the "Add to memory" button to submit it." / "Click the "See what Claude learned about you" button to start a new conversation" / "You can customize this prompt to exclude any sensitive information before importing into Claude." / "Claude may not retain imported personal details unrelated to work." / "Important: Memory imports are experimental and still in active development" / "Write out your memories of me verbatim, exactly as they appear in your memory." https://support.claude.com/en/articles/12123587 (確認日 2026-10-26)
[^wellbeing]: Anthropicヘルプ、「Set break reminders and quiet hours」。"Break reminders and quiet hours are in beta on Free, Pro, and Max plans." / "Go to Settings > Wellbeing (or Settings > Time and focus in the older Settings layout)." / "When you reach the amount you set, Claude shows a reminder. You can stop, snooze it, or dismiss it and keep going." / "Neither is a hard lock, so you can always continue past them." / "They’re separate from your plan’s usage limits." https://support.claude.com/en/articles/15672868 (確認日 2026-10-26)
[^academy-context]: Claude Academy 「Introduction to Claude Cowork」講座「Standing context: Global instructions and projects」。"Your global instructions don't need to be complete on day one." / "those are global-instruction candidates." https://academy.claude.com/courses/introduction-to-claude-cowork/giving-cowork-context (確認日 2026-10-26)
[^academy-memory]: Claude Academy 「AI capabilities and limitations」講座「Working Memory」。"Then open a brand-new conversation and ask a question that assumes it remembers what you taught it. Watch it start from zero." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory (確認日 2026-10-26)
[^your-claude]: ヘルプでは、このメニューが新しい設定画面での名前である「設定（설정）」→「Your Claude」の下に出てきます（例: メモリの一覧は「Your memory」の横の「管理（관리）」）。新しい設定画面が届いたアカウントでは、そう見えることがあります。画面に見える名前に従ってください。
[^past-where]: ヘルプでは、このスイッチは「設定（설정）」→「Your Claude」にあり、古い画面では「設定（설정）」→「メモリ（메모리）」にあると案内しています。
[^wellbeing-name]: ヘルプでは、新しい設定画面での名前である「Wellbeing」としても出てきます。画面によって異なる場合があります。
[^quiet-name]: ヘルプの韓国語訳は「조용한 시간」です。
