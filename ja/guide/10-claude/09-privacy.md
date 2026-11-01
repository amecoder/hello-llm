# 第9章 プライバシーと安全 — 自分の会話がどこまで届くかを知る

> **一言まとめ**: Claudeに送った会話をAIの学習に使うかどうかは、「Help improve our AI models」というスイッチ1つで決まります。
> 削除した会話は、30日以内にサーバーからも削除されます。エクスポート、アカウント削除、報告、危機時のサポートがどこにあるかも、この章で一緒に見ます。

画面は2026年10月のWeb版を基準にしています。設定画面は新しい画面と古い画面の2種類が使われているため、メニューの名前や位置は画面によって異なる場合があります。

**何を入力してはいけないか**は、どのAIでも同じです。[ステップ1 第9章「入力してはいけないもの」](../00-common/09-safety.md#入れてはいけないもの)ですでに扱いました。この章では、**すでに入力した会話をClaudeでどう扱うか**だけを見ていきます。

## 学習に使うかを決める — 「Help improve our AI models」

**モデル学習**（model training）とは、AI会社が人々の会話を集めて、次のAIをより良く育てることです。Claudeで自分の会話が学習に使われるのは、大きく3つの場合です。[^training-use]

- 自分が学習に使うことを**許可したとき**
- 会話が**安全性の確認**の対象として表示されたとき
- 回答の下の**「良い」「悪い」**などのフィードバックを送ったとき[^training-personal]

1つ目は、自分で決められます。このスイッチが最初からオンかオフかは、ドキュメントでは確認できませんでした。ですから、自分で開いて確認してみてください。

### スイッチの見つけ方

1. 左下の自分の名前を押して「設定（설정）」を開きます。
2. 左のメニューで「プライバシー（개인정보보호）」を押します。[^screen]
3. ②「Help improve our AI models」のスイッチをオンまたはオフにします。韓国語の画面でも、この行は英語で表示されます。[^screen][^improve-name]

![「設定」 → 「プライバシー（개인정보보호）」の画面。①「位置メタデータ（위치 메타데이터）」、②「Help improve our AI models」のスイッチ、③「データのエクスポート（데이터 내보내기）」、④「共有されたチャット（공유된 채팅）」 → 「管理（관리）」に赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-privacy-marked.png)

無料プランの画面です。**赤い番号は、下の一覧の番号と同じ場所です。**

- ① **「位置メタデータ」**: おおまかな位置（都市・地域）を使わせるかを決めます。下の「位置情報はどう使われる？」で見ます。[^screen]
- ② **「Help improve our AI models」**: 自分の会話を学習に使わせるかを決めます。[^screen]
- ③ **「データのエクスポート」**: 自分の記録をファイルで受け取ります。下の「自分のデータをダウンロードする」で見ます。[^screen]
- ④ **「共有されたチャット」 → 「管理」**: 自分がリンクで共有した会話を確認します（[第3章](03-chats.md)）。[^screen]

その下にも「共有されたアーティファクト（공유된 아티팩트）」、「アップロードしたファイル（업로드한 파일）」、「自分のフィードバック（내 피드백）」、「メモリ設定（메모리 설정）」があり、それぞれに「管理」ボタンがあります。[^screen]

スマホアプリも順番は同じです。名前 → 「設定」 → プライバシー → 同じスイッチです。アプリのメニュー名は、Webと少し違う場合があります。[^toggle]

### オフにすると何が変わるのか

- **新しい会話**は、今後学習に使われません。
- **以前に保存された会話**も、今後の学習から外れます。
- ただし、**すでに始まっている学習や、すでに作られたモデル**にはそのまま残ります。
- 安全装置に引っかかった会話は、スイッチをオフにしても、安全に関する改善に使われることがあります。[^toggle]

### オンのままだと何が使われるのか

学習に使われる可能性があるのは、会話の全体です。会話にアップロードしたファイルや、会話の設定も一緒に入ります。一方、コネクター（[第7章](07-projects-tools.md)）でつないだGoogle Driveなどの**元の資料は入りません。** ただし、その内容をチャット欄に直接貼り付けた場合は、入ることがあります。[^training-use]

学習に使う前に、メールのような自分のアカウント情報と会話は、自動で切り離されます。[^training-personal] Anthropicは、データを販売せず、Claudeには広告がないと明記しています。[^policy]

### 最初から残したくない会話なら

**シークレットチャット**（Incognito）を使いましょう。最初の画面の右上にある、おばけの形のボタンで開きます。始め方は[第3章](03-chats.md)にあります。

![シークレットモードの画面。①上の黒い帯の左側「シークレット（시크릿）」、②点線の入力欄、③案内の文言、④右上の✕（終了）に赤い番号がついている](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

無料プランの画面です。③の案内の文言は「시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다.」（シークレットセッションは履歴、メモリ、検索に残らず、Claudeの学習に使われません。）です。[^screen] スイッチをオンにしていても、シークレットチャットは学習に使われません。[^training-use] ただし、履歴には残らなくても、初期設定では30日間は保管されます。[^incognito] 終了するには、④の✕を押してください。

**「良い」「悪い」は軽い気持ちで押さないでください。** フィードバックを送ると、その会話全体が最大5年間保存されます。学習に使われることもあります。[^feedback] センシティブな話をした会話なら、フィードバックの代わりに別の方法を選ぶほうがよいでしょう。

<Quiz id="ch209-training" />

## どれくらい残るのか — 保管期間

会話が残る期間は、状況によって異なります。[^retention]

| 状況 | 残る期間 |
|---|---|
| 自分が削除した会話 | 履歴からはすぐに、サーバーからは30日以内に削除 |
| 学習を許可した会話 | アカウント情報と切り離した形で最大5年 |
| 「良い」「悪い」を送った会話 | 最大5年 |
| 利用規則違反として表示された会話 | 会話の内容は最大2年、安全スコアは最大7年 |

表を読むときに、知っておきたい点が3つあります。

- 5年間の保管は、スイッチを**オンにした後に**新しく始めた会話、または再開した会話にだけ当てはまります。
- 削除した会話は、今後の学習に使われません。
- 法律で定められている場合や、紛争の解決が必要な場合は、もっと長く残ることがあります。[^retention]

残したくない会話は削除しましょう。削除した会話は、今後の学習に使われません。ただし、その会話から作られたメモリは残るので、[第5章](05-memory.md)で別に削除してください。[^memory] 会話の削除のしかたは、[第3章](03-chats.md)で見ました。

<Quiz id="ch209-retention" />

## 誰が自分の会話を見るのか

初期設定では、**Anthropicの社員は自分の会話を見られません。** 例外は2つです。自分がフィードバックとして会話を送ったとき、そして、利用規則が守られているかを確認する必要があるときです。確認するときも、指定された安全チームの一部が、必要な分だけを見ます。データは、送受信の途中でも、保存された後でも、自動で暗号化（他の人が読めないように変換しておくこと）されます。[^protect]

学習を許可した会話も、学習の仕事を担当するごく少数の人だけが見られます。それでも、住民登録番号・カード番号・健康記録・パスワードのような、とてもセンシティブな情報は慎重に入力しましょう。[^sensitive]

### 位置情報はどう使われる？

「近くのおいしい店」のようにウェブ検索で近い結果を探すとき、Claudeは、インターネットの接続アドレス（IPアドレス）で、都市・地域くらいのおおまかな位置を使うことがあります。この画面では、「プライバシー」の①「位置メタデータ」スイッチがこれを決めます。[^screen] スマホアプリでは、スマホの設定で位置情報の権限を管理します。ただし、セキュリティと悪用の防止のために、国・地域くらいを推測することはオフにできません。[^location]

### 知らない端末が見つかったら

「設定」 → 「アカウント（계정）」の「アクティブなセッション（활성 세션）」（画面によっては「ログイン中の場所（로그인된 위치）」）で、自分のアカウントにログインした端末を確認できます。表には、端末・場所・作成日時・更新日時が表示されます。[^screen] 知らない端末が見つかったら、横の「⋮」 → 「終了（종료）」ですぐに切断してください。[^sessions]

![「設定」 → 「アカウント」の画面。①「氏名（성명）」と「Claudeにどう呼んでほしいですか？（Claude가 어떻게 불러드릴까요?）」、②「Claudeの指示（Claude 지침）」、③「すべての端末からログアウト（모든 기기에서 로그아웃）」、④「アカウントの削除（계정 삭제）」に赤い番号がついている](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

無料プランの画面です。「アクティブなセッション」の表は図の下のほうにあるため、図には写っていません。[^screen] どの端末か分からないときは、③**「すべての端末からログアウト」**でまとめて切断することもできます。[^screen] ①の名前と②の指示は、[第5章](05-memory.md)で見ます。Claudeには専用のパスワードがないので（[第1章](01-getting-started.md)）、ログインに使うメールやGoogleアカウントのセキュリティを点検してください。くわしい方法は[第3章](03-chats.md)にあります。

<Quiz id="ch209-access" />

## 自分のデータをダウンロードする

**データのエクスポート**（export）は、これまでの会話履歴とアカウント情報をファイルで受け取る機能です。アカウントを削除する前に、バックアップとして使います。Free・Pro・Maxの個人ユーザーなら、誰でも使えます。[^export]

1. Webまたはパソコンのアプリで、「設定」 → 「プライバシー」を開きます。[^screen]
2. 上の図の③「データのエクスポート」ボタンを押します。
3. 準備が終わると、アカウントのメールにダウンロードリンクが届きます。
4. ログインした状態で、リンクを押して受け取ります。

知っておきたい点があります。

- **スマホアプリではエクスポートできません。** Webまたはパソコンのアプリを使ってください。
- リンクは、受け取ってから**24時間で期限切れ**になります。逃した場合は、もう一度申し込めば大丈夫です。
- エクスポートしたデータを、**別の個人アカウントに取り込むことはできません。**[^export]

> ダウンロードしたファイルには、自分の会話がすべて入っています。共用のパソコンには保存せず、他の人と共有しているフォルダーにもアップロードしないでください。

会社向けプラン（Team・Enterprise）では、管理者が許可して初めて、自分のデータをエクスポートできます。[^export]

<Quiz id="ch209-export" />

## アカウントの削除

アカウントの削除は**取り消せません**。会話・プロジェクト・保存した資料に二度と入れず、アカウントを復元することもできません。残したい会話があるなら、先にエクスポートしておきましょう。[^delete]

**ProやMaxを使っているなら、先に購読の解約をします。** 購読を解約し、いま支払っている期間が終わるまで待ってから削除します。[^delete] 購読の解約は[第1章](01-getting-started.md)で見ました。

端末ごとの削除の手順は次のとおりです。[^delete]

- **Web**: 左下の名前 → 「設定」 → 「アカウント」 → 上の図の④「アカウントの削除」[^screen]
- **iPhone**: 「設定」 → アカウント項目の「プロフィール（프로필）」 → 「アカウントの削除」 → 「削除（삭제）」
- **Android**: 左上のメニュー → 左下のイニシャル → 「プロフィール」 → 「アカウント操作（계정 작업）」の「アカウントの削除」 → 「同意します（동의합니다）」（I Understand）

同じメールで作ったアカウントが複数ある場合は、サポートに連絡するときに、どのアカウントを削除するかを正確に伝える必要があります。[^delete] ClaudeをSlackのような別のサービスの中で使ってきた場合は、そのサービスに削除を依頼する必要があります。[^third-party]

<Quiz id="ch209-delete" />

## AIが間違えるとき — 間違った回答と、うその「送りました」

Claudeも、もっともらしいけれど間違った答えを返すことがあります。これを**ハルシネーション**（hallucination、幻覚）と呼びます。確認する習慣は、[ステップ1 第9章](../00-common/09-safety.md#_1-もっともらしい嘘-—-ハルシネーションを確認する)で学びました。Claudeでとくに知っておきたい点は3つです。[^wrong]

- 権威がありそうな引用文も、**根拠なく作り出されたもの**かもしれません。
- Claudeを**唯一の正解の情報源だと信じないでください。** 重要なアドバイスほど、念入りに確認します。
- ウェブ検索で得た回答は、**Claudeがつけた出典を自分で開いて**確認しましょう（[第6章](06-search.md)）。

### 「メールを送りました」という言葉

Claudeが「メールを送りました」「ファイルを送信しました」と言っても、実際にはしていないことがあります。連携していないツールは、Claudeには使えません。それでも、やったと言うことがあります。[^fake]

そこで、次のように自分に問いかけてみてください。この作業をするツールを自分は連携したか？ 自分の送信済みトレイに本当にあるか？ 確認できないなら、最初から下書きだけを頼むほうが安全です。

```
明日の会議が午後3時に変更になったことをチームメンバーに知らせるメールを書いてください。
送信はせず、私がコピーして送れるように、件名と本文だけを見せてください。
```

こうすれば、何を送るかを最後に自分で確認できます。

<Quiz id="ch209-mistakes" />

## 安全装置・報告・異議申し立て

Claudeには、有害な内容をふるい分ける仕組みがあります。有害な内容を見つけ出すモデルと、回答をブロックできるフィルターがあり、規則を繰り返し破った人には、一時的により強いフィルターをかけます。ヘルプは、この仕組みが**完全ではない**と自ら明記しています。問題のない質問をブロックしたり、ブロックすべきものを見逃したりすることがある、という意味です。[^safety]

### 警告を受けたり、アカウントが停止されたりしたとき

入力が利用規則に違反していると判断されると、警告が届きます。規則を繰り返し破ったり、サポートされていない地域で登録したりすると、アカウントが停止されることがあります。[^appeal]

誤って停止されたと思うなら、異議を申し立てられます。

1. 停止されたアカウントのまま、claude.aiにログインします。**ログインしないとフォームが表示されません。**
2. ヘルプの文書にある、フォームを開く「異議申し立ての提出（이의 제기 제출）」（Submit an appeal）リンクを押して、異議申し立てのフォームを書きます。

停止されたFree・Pro・Maxのアカウントでも、ログインしてデータをエクスポートしたり、アカウントを削除したりできます。ただし、エクスポートできる範囲は狭まることがあります。[^appeal]

### 問題のある内容を見つけたとき

他の人が共有した会話で問題のある内容を見つけたら、その画面の「報告（신고）」ボタンを押してください。別に用意された報告フォームもあります。著作権・商標の問題には、別の手続きを使います。根拠のない報告を何度も出すと、報告の処理が止められることがあります。その前に、まず警告が届きます。[^report]

<Quiz id="ch209-safeguards" />

## つらいときに助けを求める

**いま体にけがをしている、または危険な状況なら、Claudeではなく、緊急サービスにすぐ連絡してください。** 近くの救急外来に行ってもかまいません。ヘルプは、アメリカ・カナダの911、ヨーロッパの多くの国の112を例に挙げています。[^crisis]

会話が心の痛みや自傷のような話題に触れると、画面に**相談窓口の電話と安全計画を案内するバナー**が表示されることがあります。このバナーはClaudeではなく、別の検出の仕組みが表示します。[^crisis]

- バナーを使うかどうかは、自分で決めます。使っても使わなくても、**アカウントに不利益はありません。**
- バナーは、一度表示されると、約2時間は再表示されません。
- 相談機関は、いつでも **claude.findahelpline.com** で探せます。自分の位置に合った機関を選んで表示してくれます。
- Anthropicは、自分の会話を相談機関に**送りません。**[^crisis]

バナーには、Kokoという非営利団体の**安全計画**ツールが一緒に表示されることがあります。つらいときに取り出して見る短い計画を、一緒に作るためのツールです。約5分かかり、無料で、名前を明かさなくても使えます。[^crisis]

一人で抱えきれないなら、誰かに話すところから始めても大丈夫です。

<Quiz id="ch209-crisis" />

## 実際にやってみよう

**1. 自分の学習設定を確認する**

「設定」 → 「プライバシー」を開き、②「Help improve our AI models」がオンになっているかを見ます。希望する側に切り替えたら、スマホアプリがあれば、アプリでも同じ値かを確認します。

**2. ログインしている端末を見てみる**

「設定」 → 「アカウント」を下にスクロールして、「アクティブなセッション」（または「ログイン中の場所」）を見ます。すべて自分の知っている端末でしょうか？ 知らないものがあれば、すぐに終了します。

**3. Claudeに自分のチェックリストを作ってもらう**

```
私はClaudeを個人アカウントで使っています。
私の会話が学習に使われているかを確認し、不要な会話を整理したいです。
設定画面で私が自分で確認すべき項目を、チェックリスト（☐）にしてください。
はっきり分からないメニュー名は、作り話をせず「画面で確認」と書いてください。
```

もらったチェックリストを、この章と比べてみましょう。メニュー名が違っていたら、自分の画面に表示されている名前が正しいです。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「設定」 → 「プライバシー」で、「Help improve our AI models」がどうなっているかを確認する。「読書会」プロジェクトに実際の読書会の資料をアップロードするなら、この設定をどうするか決めてみる。

## まとめ

- 学習に使うかどうかは、「設定」 → 「プライバシー」 → 「Help improve our AI models」で決める。最初の値は、自分で開いて確認する。
- オフにしても、すでに作られたモデルには残り、安全装置に引っかかった会話は使われることがある。
- シークレットチャットは学習に使われない。「良い」「悪い」を送ると、その会話が最大5年残る。
- 削除した会話は、30日以内にサーバーからも削除される。学習を許可した会話は、最大5年残ることがある。
- 社員は、初期設定では会話を見られない。知らない端末は、「アクティブなセッション」で切断する。
- エクスポートはWebとパソコンのアプリでしかできず、リンクは24時間で期限切れになる。アカウント削除は元に戻せず、有料の購読は先に解約する。
- 「送りました」という言葉は、自分で確認する。誤った停止は、ログインして異議を申し立てる。
- 危険な状況なら、まず緊急サービスに連絡する。相談機関は claude.findahelpline.com で探す。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Model training | モデルトレーニング（モデル学習） | 集めた会話で次のAIを育てること |
| Model improvement | モデルインプルーブメント（モデル改善） | 自分の会話を学習に使わせるかを決める設定 |
| Incognito | インコグニート（シークレットチャット） | 履歴に残らず、学習にも使われない会話 |
| Feedback | フィードバック | 回答が良かったかを「良い」「悪い」で伝えること |
| Retention | リテンション（保管） | データを削除せずに残しておく期間 |
| Encryption | エンクリプション（暗号化） | 他の人が読めないようにデータを変換しておくこと |
| IP address | アイピーアドレス | インターネットに接続した端末のアドレス。おおまかな地域が分かる |
| Export | エクスポート（書き出し） | 自分の記録の全体をファイルで受け取ること |
| Session | セッション | 1つの端末でログインしている状態 |
| Hallucination | ハルシネーション（幻覚） | AIがもっともらしいけれど間違ったことを作り出すこと |
| Appeal | アピール（異議申し立て） | 誤った停止をもう一度見直してほしいと依頼すること |
| Helpline | ヘルプライン（相談窓口の電話） | つらいときに、訓練を受けた人と話せる場所 |

<ChapterDone :chapter="209" />

次の章: [第10章 音声とスマホ](10-voice-mobile.md)

---

[^screen]: Claude Web画面（無料プラン、韓国語）で直接確認。"Help improve our AI models — Allow the use of your chats and coding sessions to train and improve Anthropic AI models." / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." (確認日 2026-10-26)
[^training-use]: Anthropicプライバシーセンター「Is my data used for model training?」。"You choose to allow us to use your chats and coding sessions to improve Claude, learn more here" / "It does not include raw content from connectors (e.g. Google Drive), including remote and local MCP servers, though data may be included if it’s directly copied into your conversation with Claude." / "Your Incognito chats are not used to improve Claude, even if you have enabled Model Improvement in your Privacy Settings." https://privacy.claude.com/en/articles/10023580 (確認日 2026-10-26)
[^training-personal]: Anthropicプライバシーセンター「How Do You Use Personal Data in Model Training?」。"You’ve explicitly provided materials to us (e.g.via our thumbs up/down feedback button), or" / "we will automatically de-link them from your user ID (e.g. email address) before it’s used by Anthropic." https://privacy.claude.com/en/articles/10023555 (確認日 2026-10-26)
[^toggle]: Anthropicプライバシーセンター「How do I change my model improvement privacy settings?」。"Under Help Improve our AI models, click the button to toggle it off/on" / "we will stop using your previously stored chats and coding sessions in future model training runs." / "Your data will still be included in model training that has already started and in models that have already been trained" / "If our safety classifiers flag your conversations, they may still be used to improve our internal trust and safety models" https://privacy.claude.com/en/articles/12109829 (確認日 2026-10-26)
[^policy]: Anthropicプライバシーセンター「Updates to our Privacy Policy」。"We don’t sell your data, Claude remains ad-free, and you can control whether your conversations are used to improve Anthropic’s AI models." https://privacy.claude.com/en/articles/10301952 (確認日 2026-10-26)
[^feedback]: Anthropicプライバシーセンター「Is my data used for model training?」。"we will store the entire related conversation, including any content, custom styles or conversation preferences, in our secured back-end for up to 5 years." https://privacy.claude.com/en/articles/10023580 (確認日 2026-10-26)
[^incognito]: Anthropicヘルプ「Use incognito chats」。"While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." https://support.claude.com/en/articles/12260368 (確認日 2026-10-26)
[^memory]: Anthropicヘルプ「Use Claude’s chat search and memory to build on previous context」。"When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (確認日 2026-10-26)
[^retention]: Anthropicプライバシーセンター「How long do you store my data?」。"Deleted from our back-end storage systems within 30 days" / "we may retain your data in a de-identified format for up to 5 years in our model training pipelines." / "This retention period only applies to new or resumed chats after the model training setting has been enabled." / "Additionally, if you delete a chat from your chat history, it will not be used to train future models." / "We retain inputs and outputs for up to 2 years and trust and safety classification scores for up to 7 years" / "In all cases, we may retain chats and coding sessions as required by law, to resolve disputes, or as necessary to combat violations of our Usage Policy." https://privacy.claude.com/en/articles/10023548 (確認日 2026-10-26)
[^protect]: Anthropicプライバシーセンター「How does Anthropic protect the personal data of Claude users?」。"Limited Access: By default, Anthropic employees cannot access your conversations unless:" / "Encryption: Your data is automatically encrypted both while in transit, and stored (at rest)." https://privacy.claude.com/en/articles/10458704 (確認日 2026-10-26)
[^sensitive]: Anthropicヘルプ「I would like to input sensitive data into my chats with Claude. Who can view my conversations?」。"Access is limited to a small number of personnel involved in model training." / "we also recommend being thoughtful about sharing highly sensitive personal details such as:" https://support.claude.com/en/articles/8325621 (確認日 2026-10-26)
[^location]: Anthropicプライバシーセンター「Does Claude use my location?」。"Claude may use your IP address to determine coarse-grained location (city/region level)." / "Claude's access to location data for non-web surfaces (e.g. the mobile app and browser extension) are managed at the device level." / "This use is necessary to protect our users and business and cannot be toggled off." https://privacy.claude.com/en/articles/11186740 (確認日 2026-10-26)
[^sessions]: Anthropicヘルプ「Managing your active sessions」。"Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 (確認日 2026-10-26)
[^export]: Anthropicヘルプ「Export your Claude data」。"Data exports are available to individual Claude users on Free, Pro, and Max plans." / "It's not possible to run an export from Claude for iOS or Android." / "You must be signed in to your account to download your data using this link." / "The download link will expire 24 hours after delivery." / "Exported data can't be imported into another personal Claude account, and we don't support migrating data between personal accounts." / "you can export your own data once an organization Owner or Primary Owner turn this on." https://support.claude.com/en/articles/9450526 (確認日 2026-10-26)
[^delete]: Anthropicヘルプ「Delete your Claude account」。"You'll lose access to your conversations, projects, and other saved data, and you can't recover the account afterward." / "Wait until the end of your current subscription period." / "If you have multiple accounts associated with the same email address, you'll need to specify which accounts you want to delete when you contact us." https://support.claude.com/en/articles/9028421 (確認日 2026-10-26)
[^third-party]: Anthropicプライバシーセンター「Deleting Claude accounts」。"you will need to request account deletion through that third party service provider." https://privacy.claude.com/en/articles/10023660 (確認日 2026-10-26)
[^wrong]: Anthropicヘルプ「Claude is providing incorrect or misleading responses. What’s going on?」。"Claude can display quotes that may look authoritative or sound convincing, but are not grounded in fact." / "Users should not rely on Claude as a singular source of truth and should carefully scrutinize any high-stakes advice given by Claude." / "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (確認日 2026-10-26)
[^fake]: Anthropicヘルプ「Claude is producing links that don’t work and falsely claiming that it has sent emails or produced external documents. What’s going on?」。"Even if it claims otherwise, Claude does not have access to other tools or software that are not explicitly integrated, including email, word processors, or file transfers." https://support.claude.com/en/articles/8241188 (確認日 2026-10-26)
[^safety]: Anthropicヘルプ「Our Approach to User Safety」。"We may temporarily apply enhanced safety filters to users who repeatedly violate our policies" / "These features are not failsafe, and we may make mistakes through false positives or false negatives." https://support.claude.com/en/articles/8106465 (確認日 2026-10-26)
[^appeal]: Anthropicヘルプ「Safeguards warnings and appeals」。"we warn users if we believe their prompts are violating our Usage Policy." / "Account creation from an unsupported location" / "If you feel your account has been wrongly suspended or terminated, please go to claude.ai, log in with your banned account, and fill out the appeal form linked below." / "Important: You must be logged in to access the appeal form." / "you can still log in at claude.ai to export your data or delete your account." https://support.claude.com/en/articles/8241253 (確認日 2026-10-26)
[^report]: Anthropicヘルプ「Report, block, and remove content from Claude」。"Use the “report” button on the shared content." / "If you believe content violates Anthropic’s usage policies or local laws and should be removed or restricted, you can report it through this form." / "We will provide a warning before suspension." https://support.claude.com/en/articles/10684638 (確認日 2026-10-26)
[^crisis]: Anthropicヘルプ「Crisis Helpline Support in Claude」。"please contact emergency services (such as 911 in the US and Canada, or 112 in much of Europe) or go to your nearest emergency room." / "This banner is surfaced by a separate detection system, not from Claude directly." / "there are no consequences for your account based on your decision to access resources." / "After you see the banner, it won’t appear again for about two hours" / "The resources shown are selected based on your location to provide relevant, local support options." / "Anthropic doesn’t send your conversations to helplines or to Koko." / "It takes about five minutes. You’re guided one step at a time, and you decide what goes in it." https://support.claude.com/en/articles/13171706 (確認日 2026-10-26)
[^improve-name]: 韓国語のヘルプでは「AI 모델 개선 지원」（AIモデル改善への協力）と呼ばれています。
