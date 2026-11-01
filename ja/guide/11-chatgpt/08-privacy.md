# 第8章 プライバシーとデータ管理 — 自分の会話がどこで使われるかを決める

> **一言まとめ**: ChatGPTに送った会話はOpenAIのコンピューター（サーバー）に保存され、設定によってはAIをより良くするための学習に使われることがあります。
> 「設定 > データ管理（데이터 관리）」の1つの画面で、学習の許可、共有リンク、アーカイブ・削除、エクスポートをすべて決められます。

画面は2026年10月のWeb版（Plusプラン）を基準にしています。無料プランやスマホアプリでは、メニューの位置が少し異なる場合があります。

**何を入力してはいけないか**は、どのAIでも同じなので、[ステップ1 第9章「入力してはいけないもの」](../00-common/09-safety.md#入れてはいけないもの)ですでに扱いました。この章では、**すでに入力した会話をChatGPTでどう管理するか**だけを見ていきます。

## データ管理の画面を見てみよう

左下のアカウント名を押して「設定（설정）」を開き、設定画面の左側の一覧の一番下にある「データ管理（데이터 관리）」を押します。[^data-name]

![設定画面で「データ管理（데이터 관리）」を開いた画面。右側の一覧には上から「共有リンク」、「モデル改善のためのデータ学習を許可」のスイッチ、「位置情報」、「Workネットワークアクセス」、「ChatGPT Workのリセット」、「アプリと共有される情報」、「アーカイブされたチャット」、「すべてのチャットをアーカイブ」、「すべてのチャットを削除」、「データのエクスポート」、「Cookieの設定」が順に並んでいる](../../../guide/11-chatgpt/assets/shot-07-data-controls-marked.png)

図の赤い番号は、下の表の番号に対応しています。

| 番号 | 項目 | 役割 | この章で |
|---|---|---|---|
| ① | 「共有リンク（공유 링크）」「管理（관리）」 | 自分が作った会話の共有リンクをまとめて見て、削除する | 第3節 |
| ② | 「モデル改善のためのデータ学習を許可（모델 개선을 위한 데이터 학습 허용）」 | 自分のチャットを学習に使わせるかを決めるスイッチ | 第2節 |
| ③ | 「位置情報（위치）」「オンにする（켜기）」 | 端末の位置情報を、地域に合わせたおすすめや天気などの回答に使わせる | 下で説明 |
| ④ | 「Workネットワークアクセス（Work 네트워크 액세스）」・「ChatGPT Workのリセット（ChatGPT Work 재설정）」 | Work機能に関する設定 | [第7章](07-projects-plugins.md) |
| ⑤ | 「アプリと共有される情報（앱과 공유되는 정보）」「管理（관리）」 | 連携したアプリ（プラグイン）と共有する情報を管理する | [第7章](07-projects-plugins.md) |
| ⑥ | 「アーカイブされたチャット（보관된 채팅）」・「すべてのチャットをアーカイブ（모든 채팅 보관하기）」・「すべてのチャットを削除（모든 채팅 삭제）」 | 会話を隠したり、まとめて消したりする | 第4節 |
| ⑦ | 「データのエクスポート（데이터 내보내기）」「エクスポート（내보내기）」 | 自分の会話履歴の全体をファイルで受け取る | 第5節 |
| ⑧ | 「Cookieの設定（쿠키 설정）」「管理（관리）」 | ウェブサイトが自分のブラウザーに残す小さな記録（Cookie）の設定 | — |

**位置情報**: 端末の位置情報の共有は、最初はオフになっています。[^search] オンにしなくても、ChatGPTはインターネットの接続アドレス（IPアドレス）でおおまかな地域は分かります。「近所の天気」のように町単位の答えがどうしても必要なときだけオンにすれば十分です。

<Quiz id="ch108-screen" />

## 学習に使われないようにする

**モデル学習**（model training）とは、AI会社が人々の会話を集め、次のAIをより賢く育てるために使うことです。「モデル改善のためのデータ学習を許可」が、これを決めるスイッチです。ヘルプでの英語名は Improve the model for everyone（みんなのためにモデルを改善）です。

### 最初からオンになっていることがあります

このスイッチが最初からオンかオフかは、**プランや地域によって異なる場合があります。** OpenAIのヘルプの1か所は、個人アカウントのFree・Plus・Proプランでは初期設定でオンだと書いています。[^controls] 別の1か所は、地域や設定によって異なると書いています。[^home]
ですから「自分はオフだろう」と思い込まず、**自分で開いて確認**してください。上の図は、スイッチをオフ（グレー）にした状態です。

### オフにする方法

1. アカウント名 → 「設定」 → 「データ管理」を開きます。
2. 「モデル改善のためのデータ学習を許可」（この章の最初の図の②）の右側のスイッチを押して、グレーにします。確認画面が出たら「完了（완료）」を押します。

ログインした状態で変更すると、**同じアカウントでログインしているすべての端末**（スマホアプリを含む）に反映されます。ログインしていない状態で変更すると、**そのブラウザーだけ**に保存されます。[^controls]

### オフにしても変わらないこと

スイッチについてよくある誤解を、4つ確認しておきましょう。

- **オフにすると、会話履歴が消えるの？** いいえ。履歴は横のメニューにそのまま残ります。
- **オフにすれば、どの会話も学習に使われないの？** そうとは限りません。回答の下にある「良い」「悪い」ボタンのようなフィードバック（feedback、回答が良かったかを伝える評価）を送ると、その会話全体が学習に使われることがあります。
- **オフにすれば、保存もされないの？** いいえ。学習に使われないだけで、会話はサーバーに保存されます。消したいときは、第4節の削除を使ってください。
- **オンのままだと、連携したGoogleアプリの資料も学習に使われるの？** いいえ。連携したGoogleアプリ（GmailやDriveなど）から直接読み込んだ資料は、スイッチがオンでも学習に使わないと、ヘルプは明記しています。ただし例外があります。フィードバック（良い・悪い）を送った会話、自分でコピー・貼り付け・アップロードした内容、ChatGPTの回答に含まれた内容です。[^google]

> 学習の許可とは別に、カスタム指示（[第5章](05-memory.md)）に書いた内容も、このスイッチに従います。[^ci] そのため、スイッチ1つでまとめて止められます。

<Quiz id="ch108-training" />

## 共有リンクを管理する

会話を他の人に見せるために作る**共有リンク**（share link）は、リンクのアドレスを知っている人なら**誰でも**見られます。人ごとに制限することはできず、自動で無効になる有効期限もありません。[^share]
リンクの作り方は[第3章](03-chats.md)で見ました。ここでは、**以前に作ったリンクを整理する方法**を見ます。

1. 「データ管理」で「共有リンク」の右にある「管理」を押します。
2. 一覧から不要なリンクを1つずつ削除するか、「すべての共有リンクを削除（모든 공유 링크 삭제）」でまとめて削除します。

![「共有リンク」の一覧ウィンドウ。各行に名前・種類・共有日とゴミ箱ボタンがあり、下に赤い「すべての共有リンクを削除」がある](../../../guide/11-chatgpt/assets/shot-27-shared-links.png)

*リンクの名前は例として変更した画面です。行の端にあるゴミ箱ボタンで1つずつ削除します。*

グループチャットに一度投稿したリンクは、どこまで広がったのか自分では分かりません。ですから、リンクを削除するのがもっとも確実な回収方法です。

<Quiz id="ch108-share" />

## アーカイブと全削除

会話を整理する方法は2つあり、結果はまったく違います。[^delete]

| | アーカイブ（Archive） | 削除（Delete） |
|---|---|---|
| 横のメニューから | 消える | 消える |
| 会話の内容 | **そのまま残る。** チャット検索にも出てくる | 30日以内にOpenAIのシステムから完全に削除されるよう予約される |
| 元に戻す | 「アーカイブされたチャット」でアーカイブを解除 | **できない。** カスタマーサポートでも復元できない |

「データ管理」では、これをまとめて行えます。

- 「アーカイブされたチャット」「管理」: アーカイブした会話の一覧を見て、アーカイブを解除します。
- 「すべてのチャットをアーカイブ」「すべてアーカイブ（모두 보관하기）」: 横のメニューを一度に空にします。内容は残ります。
- 「すべてのチャットを削除」「すべて削除（전체 삭제）」: すべての会話を消します。**元に戻せません。** 押す前に、第5節のエクスポートでバックアップを取っておきましょう。

**チャットを消しても残るものがあります。**

- 会話にアップロードしたファイルのうち、**ライブラリ**（[第4章](04-files-images.md)）に別途保存されたファイルは残ります。[^delete] ライブラリから別に削除してください。
- その会話から生まれた**保存されたメモリ**（[第5章](05-memory.md)）も残ります。[^memory]「パーソナライズ（개인 맞춤 설정）」から別に削除してください（[第5章](05-memory.md)）。

最初から記録を残したくない会話なら、**一時チャット**のほうが簡単です。右上の「一時チャット（임시 채팅）」ボタンから始めてみましょう。そうすると、会話履歴に残らず、モデルの学習にも使われません。ただし、安全のためにコピーが最大30日間保管されることがあります。[^temp] くわしい使い方は[第3章](03-chats.md)にあります。

<Quiz id="ch108-delete" />

## データのエクスポート

**データのエクスポート**（export）は、これまでの会話履歴とアカウント情報を、圧縮ファイル（ZIP、複数のファイルを1つにまとめたファイル）1つで受け取る機能です。全削除やアカウント削除の前に、バックアップとして使います。[^export]

1. 「データ管理」で「データのエクスポート」の右にある「エクスポート」を押します。
2. 確認画面で「エクスポートを確認（내보내기 확인）」を押します。
3. 登録したメール（またはSMS）にダウンロードリンクが届きます。**最大7日**かかることがあります。
4. リンクは**受け取ってから24時間で期限切れ**になります。メールが届いたら、すぐにダウンロードしてください。逃した場合は、もう一度申し込めば大丈夫です。

Free・Go・Plus・Proの個人アカウントで使えます。ログインしていない状態では使えません。[^export]

> ダウンロードしたファイルには**自分のすべての会話が入っています。** 共用のパソコンには保存せず、他の人と共有しているクラウドのフォルダーにもアップロードしないでください。

**別のアカウントへ会話を移す機能はありません。** 2つのアカウントを統合したり、会話の一覧をそのまま移したりすることはできません。できるのは、ダウンロードした圧縮ファイルの中の `conversations.json` ファイルを、新しいアカウントの会話にアップロードして**参考資料として**使う程度です。横のメニューに以前の会話が現れるわけではありません。[^transfer]

<Quiz id="ch108-export" />

## アカウントの削除

ChatGPTをもう使わないときは、アカウントを削除できます。[^account]

1. 「設定」 → ①「アカウント（계정）」を開きます。
2. ②「アカウントの削除（계정 삭제）」の横にある「削除（삭제）」を押します。
3. 確認画面が出たら、案内を読んで進みます。ログインしてから10分以上たっている場合は、先に「再度ログイン（다시 로그인）」を押す必要があります。[^screen-account]
4. 案内に従ってメールアドレスと `DELETE` を入力し、「アカウントを完全に削除する（내 계정을 영구 삭제하기）」を押します。

![設定の「アカウント」画面。「一般」の枠に名前・ユーザー名・メール・アカウントの状態・GPTビルダープロフィールがあり、その下の離れた枠に「アカウントの削除」と赤い「削除」ボタンがある](../../../guide/11-chatgpt/assets/shot-14-account-marked.png)

*名前・ユーザー名・メールは例として変更した画面です。「削除」は押していません。*

![「アカウントの削除—続けますか？」ウィンドウ。完全な削除、OpenAIサービスへのアクセス不可、同じメールで新しいアカウントを作れないこと、30日以内にデータが削除されることの案内があり、直近10分以内にログインした場合のみ削除できるとして「再度ログイン」ボタンがある](../../../guide/11-chatgpt/assets/shot-28-account-delete-confirm.png)

*「削除」を押しても、すぐには消えず、先にこのウィンドウが表示されます。**直近10分以内にログインした場合のみ**、そのまま進められます。ウィンドウを長く開いたままにしていた場合は、先に「再度ログイン」を押してください。この画面では「キャンセル（취소）」を押しました。*[^screen-account]

| 削除したあとは | 内容 |
|---|---|
| データ | 30日以内に削除されます（法律で保管が必要な場合は例外） |
| 復元 | できません |
| 再登録 | ヘルプは、**30日後**に同じメールで再登録できると書いています。確認画面には、同じメールでは新しいアカウントを作れないと表示されます[^screen-account] |

**サブスクリプションは別に解約してください。** iPhoneのApp Store（Apple）で支払った購読は、アカウントを削除しても解約されません。[^account] スマホからアプリを消しても、購読は続きます。[^pro] ですから、アカウントを削除する前に、支払った場所で先に購読を解約しておきましょう。

<Quiz id="ch108-account" />

## アカウントを守る

アカウントには自分のすべての会話が入っています。そのため、パスワード1つだけで守るのは危険です。設定 →「セキュリティとログイン（보안 및 로그인）」で、次の項目を確認してみましょう。[^screen-security]

- 「多要素認証（MFA）（다중 인증(MFA)）」: パスワードに加えて、**認証アプリのワンタイムコードやSMSの6桁のコード**でもう一度確認します。オンにしておくことをおすすめします（このガイドの提案です）。
- 「パスキーとセキュリティキー（패스키 및 보안 키）」: パスワードの代わりに、スマホの指紋・顔認証のような方法でログインします。フィッシング（偽のサイトでパスワードを盗む手口）に強い方法です。
- 「アクティブなセッション（활성 세션）」: 自分のアカウントに接続した端末をすべて確認します。端末を削除したり、すべての端末からログアウトしたりできます。
- 「ログイン連携（로그인 연동）」 → 「ChatGPTでログイン（ChatGPT로 로그인）」: ChatGPTのアカウントでログインした他のアプリ・サイトを確認し、アクセスを切ります。
- 「ロックダウンモード（락다운 모드）」: 下で説明します。

**知らない会話や端末が見つかったら**、すぐにパスワードを変更してください。変更すると、**30分以内にすべての端末からログアウト**されます。GoogleやMicrosoftのアカウントでログインしてきた場合は、その会社のアカウントのパスワードを変更する必要があります。[^unrecognized] アカウントは、複数の人で共有しないでください。共有すると、不審なアクティビティとして検出されやすくなります。[^errors]

他のアプリやサイトで「ChatGPTでログイン」を押すと、そこが受け取るのは**名前・メール・プロフィール写真だけ**です。[^signin] 会話の内容は渡りません。それでも、ログインした先がどこかは、上の「ログイン連携」でときどき整理しましょう。

**ロックダウンモード**（Lockdown Mode）は、外部との接続機能を制限する設定です。ウェブ検索は保存済みの内容だけで行わせ、ディープリサーチのような機能は使えなくします。そうして、ウェブページやファイルに隠された悪い指示（**プロンプトインジェクション**、prompt injection）によって情報が漏れる危険を減らします。[^lockdown]

ヘルプは、この機能がすべての人向けではないと明記しています。隠された指示そのものを防ぐこともできません。ヘルプは、**機密データを扱う人や組織**のための機能だと説明しています。プランやアカウントによっては、このメニューがないこともあります。機密データを扱うのでなければ、ふつうはオンにしなくてよい、というのがこのガイドの判断です。隠された指示とは何かは、[ステップ1 第9章](../00-common/09-safety.md)を見てください。

<Quiz id="ch108-security" />

## 家族と安全のための機能

設定には「保護者による管理（자녀 보호）」と「信頼できる連絡先（신뢰할 수 있는 연락처）」のメニューがあります。[^screen-security] どちらもオンにしなくても、ChatGPTを使うのに問題はありません。ただし、何をして**何をしないのか**を知っておくと、誤解が減ります。

**保護者による管理**（parental controls）は、保護者と10代の子ども（18歳未満）のアカウントをつなぐ機能です。保護者は一部の機能を調整し、使う時間を決め、まれなケースで安全に関する通知を受け取ります。[^parental]

- **保護者は子どもの会話を見られません。** アカウントをつないでも、会話の内容、履歴、いま行っている活動にはアクセスできません。[^parental]
- ChatGPTが利用状況の手がかりから18歳未満だと判断すると、10代向けの保護が自動でオンになることがあります。大人なのに誤って判断された場合は、自分のアカウントで年齢確認を使えるときに、確認を経て解除できます（アカウントによって異なります）。確認は**Persona**という外部の会社が行います。**OpenAIは身分証や自撮り写真を受け取らず**、住民登録番号のような身分証の番号を見せる必要もありません。[^age]

**信頼できる連絡先**（trusted contact）は、大人があらかじめ1人を決めておく機能です。自殺に関して安全が大きく心配される会話があったとき、その人に様子を確認してほしいという通知が届くことがあります。自動検出のあとで、訓練を受けた人が確認します。[^trusted]

- **個人アカウントでのみ**使えます。Business・Enterprise・Eduのような会社・学校のスペースでは有効になりません。[^trusted]
- **韓国では、本人も連絡先に指定された人も、満19歳以上**である必要があります（他の国は満18歳以上）。[^trusted-ko]
- 通知に**会話の内容は含まれません。** 指定された人が招待を**1週間以内に**受け入れると有効になります。ChatGPTのアカウントがない人も指定できます。[^trusted][^trusted-add]
- **緊急サービスではありません。** 音声会話では動作しません。いま危険な状況なら、この機能を待たずに、緊急サービスや危機相談の電話にすぐ連絡してください。[^trusted]

つらい気持ちを打ち明ける会話では、ChatGPTが住んでいる地域の**危機相談窓口**を案内することがあります。地域ごとの相談窓口は、OpenAIが危機相談につなぐ専門団体（ThroughLine）と一緒に表示します。[^helpline]

<Quiz id="ch108-family" />

## 会社のアカウントは何が違うのか

会社が団体で契約する**Business**（以前の名前はTeam）・**Enterprise**、学校向けの**Edu**プランは、初期設定では会話の内容を学習に使いません。[^controls]
会社のアカウントで使っているなら、上の学習スイッチよりも**会社のAI利用規定**が優先されます。何を入力してよいかは、会社の担当部署に確認してください。

逆に、会社の仕事を**個人アカウント**で行うと、この保護を受けられません。会社の資料は、会社が許可したアカウントでだけ扱いましょう。

会社のアカウントでは、ほかにも知っておくことがあります。

- **管理者が自分の会話を扱える場合があります。** 会社の管理者は、設定によって、そのアカウントのデータを閲覧・エクスポート・監査・保管・削除**できる場合があります。** モデル改善のためにOpenAIと共有することに同意することもあります。[^managed] 会社のアカウントの会話は、会社の記録だと考えてください。
- **個人アカウントと会社のアカウントは別です。** アカウントを切り替えても、会話・ファイル・設定は移りません。[^managed]
- **個人スペースを会社のスペースに統合するよう案内される**ことがあります。統合すると元に戻せません。退職すると、移した会話も見られなくなる場合があります。会社のスペースでは自分でのエクスポートもできません。ですから、統合する前に個人の履歴を先にエクスポートしておきましょう。[^migrate]
- 会社がメモリ機能をオフにすると、その会社のスペースにある自分の保存されたメモリは削除されます。[^bizmemory]

<Quiz id="ch108-business" />

## 実際にやってみよう

**1. 自分の学習設定を確認する**

「設定」 → 「データ管理」を開き、「モデル改善のためのデータ学習を許可」がオンになっているかを見ます。希望する側に切り替えたら、スマホアプリがあれば、アプリでも同じ値になっているかを確認します。

**2. 共有リンクの大掃除**

「共有リンク」「管理」を開き、いま有効なリンクがいくつあるかを数えます。もう見せる必要のないリンクは削除します。

**3. ChatGPTに自分の設定チェックリストを作ってもらう**

```
私はChatGPTを個人アカウントで使っています。
私の会話が学習に使われないようにして、以前の共有リンクを整理したいです。
設定画面で私が自分で確認すべき項目を、チェックリスト（☐）にしてください。
あなたがはっきり分からないメニュー名は、作り話をせず「画面で確認」と書いてください。
```

もらったチェックリストのメニュー名を、この章の表と比べてみましょう。違っていたら、画面に表示されている名前が正しいです。

**続きの課題**（[読書会の準備](../00-common/practice-kit.md)）: 「設定」 → 「データ管理」で、「モデル改善のためのデータ学習を許可」と「共有リンク」の一覧を確認する。「読書会」プロジェクトに実際の読書会の資料をアップロードするなら、この設定をどうするか決めてみる。

## まとめ

- 「設定 > データ管理」の1つの画面で、学習の許可、共有リンク、アーカイブ・削除、エクスポートを決める。
- 「モデル改善のためのデータ学習を許可」は、プランや地域によって最初からオンのことがある。自分で開いて確認する。オフにしても、フィードバックを送った会話は学習に使われることがある。
- 共有リンクは誰でも見られ、期限切れにならない。不要なら「管理」から削除する。
- アーカイブは隠すこと、削除は30日以内の完全削除で元に戻せない。ライブラリのファイルと保存されたメモリは別に消す。
- エクスポートのリンクは受け取ってから24時間以内にダウンロードする。アカウントを削除する前に、先に購読を解約する。
- 「セキュリティとログイン」で多要素認証をオンにし、知らない端末はログアウトさせる。パスワードを変更すると、30分以内にすべての端末からログアウトされる。
- 保護者による管理をつないでも、保護者は会話を見られない。信頼できる連絡先は、韓国では満19歳以上で、緊急サービスではない。
- 会社のアカウント（Business・Enterprise・Edu）は、初期設定では学習に使われないが、会社の規定が優先で、管理者が会話を扱える。

## 用語まとめ

| 用語 | 読み方 | 一言でいうと |
|---|---|---|
| Data controls | データコントロールズ（データ管理） | 自分の会話の学習・保管・削除を決める設定画面 |
| Model training | モデルトレーニング（モデル学習） | 集めた会話で次のAIを育てること |
| Share link | シェアリンク（共有リンク） | 会話を他の人に見せるアドレス。持っている人なら誰でも見られる |
| Archive | アーカイブ（保管） | 会話を削除せず、横のメニューからだけ隠すこと |
| Export | エクスポート（書き出し） | 自分の履歴の全体をファイルで受け取ること |
| ZIP | ジップ | 複数のファイルを1つにまとめ、サイズを小さくした圧縮ファイル |
| Cookie | クッキー | ウェブサイトが自分のブラウザーに残す小さな記録 |
| Subscription | サブスクリプション（購読） | 毎月お金を払って使うプラン |
| MFA (Multi-Factor Authentication) | エムエフエー（多要素認証） | パスワード以外の方法でもう一度本人を確認するログイン |
| Passkey | パスキー | パスワードの代わりに、端末の指紋・顔認証でログインする方法 |
| Lockdown Mode | ロックダウンモード | 外部との接続機能を制限して、隠された指示で情報が漏れる危険を減らす設定 |
| Prompt Injection | プロンプトインジェクション | ウェブページやファイルに隠した指示で、AIを意図しない動きにさせる攻撃 |
| Parental Controls | ペアレンタルコントロールズ（保護者による管理） | 保護者と10代のアカウントをつないで、一部の機能や時間を決める機能 |
| Trusted Contact | トラステッドコンタクト（信頼できる連絡先） | 危機のときに様子を確認する通知を受け取るよう、あらかじめ決めておく人 |

<ChapterDone :chapter="108" />

次の章: [第9章 音声で会話する](09-voice.md)

---

[^controls]: OpenAIヘルプ「Data controls in ChatGPT」。個人ワークスペースのFree・Plus・Proは初期設定でオン、ログイン時はすべての端末に適用、ログアウト状態ではそのブラウザーにのみ保存、フィードバックを送ると会話全体が学習に使われることがある、Business・Enterprise・Eduは初期設定では学習に使わない。https://help.openai.com/en/articles/7730893 (確認日 2026-10-23)
[^home]: OpenAIヘルプ「The ChatGPT home page」。学習に使われるかどうかは "depends on your location and settings"。https://help.openai.com/en/articles/9125172 (確認日 2026-10-23)
[^ci]: OpenAIヘルプ「ChatGPT Custom Instructions」。カスタム指示の利用情報もモデル改善に使われることがあり、学習設定で拒否できる。https://help.openai.com/en/articles/8096356 (確認日 2026-10-23)
[^search]: OpenAIヘルプ「Searching the web with ChatGPT」。"Device location sharing is optional and off by default." IPでおおまかな位置を使用。https://help.openai.com/en/articles/9237897 (確認日 2026-10-23)
[^share]: OpenAIヘルプ「Sharing conversations and scheduled tasks in ChatGPT」。リンクを知っている人なら誰でも閲覧可能、有効期限の設定なし、「共有リンク > 管理」で個別削除・すべての共有リンクの削除。https://help.openai.com/en/articles/7925741 (確認日 2026-10-23)
[^delete]: OpenAIヘルプ「Deleting and archiving chats in ChatGPT」。削除は30日以内の完全削除を予約・復元不可、アーカイブはサイドバーから外れるだけで検索には出る、すべてのチャットの削除は元に戻せない、チャットを削除してもライブラリのファイルは消えない。https://help.openai.com/en/articles/8809935 (確認日 2026-10-23)
[^memory]: OpenAIヘルプ「Memory in ChatGPT」。"Deleting the original chat does not automatically delete a separate saved memory." https://help.openai.com/en/articles/8590148 (確認日 2026-10-23)
[^temp]: OpenAIヘルプ「Temporary chat in ChatGPT」。履歴に残らず、学習に使われず、安全の目的で最大30日間保管されることがある。https://help.openai.com/en/articles/8914046 (確認日 2026-10-23)
[^export]: OpenAIヘルプ「Exporting your ChatGPT history and data」。メール・SMSでリンクを送信、最大7日かかる、"The download link expires 24 hours after you receive it."、ZIPファイル、Free・Go・Plus・Pro、ログアウト状態では不可。https://help.openai.com/en/articles/7260999 (確認日 2026-10-23)
[^account]: OpenAIヘルプ「Deleting your ChatGPT account」。30日以内にデータを削除（法的な例外あり）、再有効化不可、同じメールは30日後に再登録可能、"Deleting your account does not cancel an Apple subscription." https://help.openai.com/en/articles/6378407 (確認日 2026-10-23)
[^google]: OpenAIヘルプ「Google app data controls FAQ」。"Even if this setting is enabled, we do not train our generalized models on data accessed directly from connected Google apps." https://help.openai.com/en/articles/10408842 (確認日 2026-10-24)
[^transfer]: OpenAIヘルプ「Transfer exported conversations between ChatGPT accounts」。"This is not a full account migration." / "Find conversations.json." https://help.openai.com/en/articles/9106926 (確認日 2026-10-24)
[^screen-security]: ChatGPTのWeb設定画面（Plusプラン、韓国語）で直接確認。「セキュリティとログイン（보안 및 로그인）」の「多要素認証（MFA）（다중 인증(MFA)）」「パスキーとセキュリティキー（패스키 및 보안 키）」「アクティブなセッション（활성 세션）」「ログイン連携 — ChatGPTでログイン（로그인 연동 — ChatGPT로 로그인）」「ロックダウンモード（락다운 모드）」と、各項目の画面上の説明（"인증 앱의 일회용 코드 사용"、"6자리 인증 코드를 받습니다"、"신뢰하는 기기를 제거하거나, 모든 기기에서 로그아웃"）、設定一覧の「保護者による管理（자녀 보호）」「信頼できる連絡先（신뢰할 수 있는 연락처）」 (確認日 2026-10-24)
[^unrecognized]: OpenAIヘルプ「I'm seeing unrecognized activity on my OpenAI account.」。"Once you change your password, all current sessions will be logged out within 30 minutes." / "If you have logged in with Microsoft or Google authentication, you'll need to reset your Microsoft or Google account password." https://help.openai.com/en/articles/8485685 (確認日 2026-10-24)
[^errors]: OpenAIヘルプ「Troubleshooting ChatGPT Error Messages」。"Ensure you are not sharing your ChatGPT account with other people". https://help.openai.com/en/articles/7996703 (確認日 2026-10-24)
[^signin]: OpenAIヘルプ「Sign in with ChatGPT」。"the external application receives only your name, email address, and profile picture, if you have one." https://help.openai.com/en/articles/20001410 (確認日 2026-10-24)
[^lockdown]: OpenAIヘルプ「Lockdown Mode」。"Web browsing is limited to cached content." / "Deep research is disabled." / "It is designed for people and organizations that handle sensitive data" / "Lockdown Mode is not intended for everyone." / "Lockdown Mode does not prevent prompt injections from appearing in the content ChatGPT processes." https://help.openai.com/en/articles/20001061 (確認日 2026-10-24)
[^parental]: OpenAIヘルプ「Managing parental controls in ChatGPT」。"Parental controls let a parent or guardian link their ChatGPT account to a teen’s account, manage selected settings, set schedules, and receive safety notifications in limited situations." / "Linking accounts does not give a parent or guardian access to a teen’s conversations, chat history, or real-time activity." https://help.openai.com/en/articles/12315553 (確認日 2026-10-24)
[^age]: OpenAIヘルプ「Age prediction in ChatGPT」。"OpenAI uses Persona, a third-party service, to verify your age." / "OpenAI does not receive your ID or selfie." / "You do not need to show ID numbers, such as a national ID number or Social Security number." https://help.openai.com/en/articles/12652064 (確認日 2026-10-24)
[^trusted]: OpenAIヘルプ「Trusted contacts in ChatGPT」。"if automated systems and trained reviewers detect you may be talking about suicide in a way that signals a serious safety concern, ChatGPT may notify your trusted contact" / "Your chat details or transcripts are not shared." / "Trusted contact is not an emergency service, a crisis response system, or a substitute for mental health care." / "Trusted contact is not currently available in ChatGPT Voice." / "It is available for personal ChatGPT accounts, and is not enabled in shared workspaces such as ChatGPT Business, Enterprise, or Edu." https://help.openai.com/en/articles/20001105 (確認日 2026-10-24)
[^trusted-ko]: OpenAIヘルプ「Managing parental controls in ChatGPT」。"Trusted Contact is a separate, optional feature for adults 18 or older, or 19 or older in Korea." 韓国語の設定画面にも「사용자 본인과 해당 연락처로 지정된 사람 모두 만 19세 이상이어야 합니다」（本人と連絡先に指定された人の両方が満19歳以上である必要があります）と表示される（確認日 2026-10-24）。https://help.openai.com/en/articles/12315553 (確認日 2026-10-24)
[^trusted-add]: OpenAIヘルプ「Adding and managing a trusted contact」。"If the person accepts the invitation within 1 week, the feature becomes active." https://help.openai.com/en/articles/20001194 (確認日 2026-10-24)。ChatGPTのアカウントがなくてもよいことは「Being someone’s trusted contact」 "You do not need a ChatGPT account to be someone’s trusted contact." https://help.openai.com/en/articles/20001195 (確認日 2026-10-24)
[^helpline]: OpenAIヘルプ「Crisis helpline support in ChatGPT」。"As part of our partnership with ThroughLine, we have introduced localized helplines in ChatGPT". https://help.openai.com/en/articles/12677603 (確認日 2026-10-24)
[^managed]: OpenAIヘルプ「Data access for your managed ChatGPT account」。"your administrator may be able to access, export, audit, retain, delete, and opt-in to share data tied to this account with OpenAI to improve OpenAI’s models." / "Switching accounts does not move chats, files, or settings between accounts." https://help.openai.com/en/articles/20001067 (確認日 2026-10-24)
[^migrate]: OpenAIヘルプ「Migrating your personal workspace to ChatGPT Business or Enterprise」。"Migration does not provide an undo option" / "If you leave, are removed, or lose access to the destination workspace, you may also lose access to that content." / "Self-service data export is not available in ChatGPT Business or Enterprise workspaces." https://help.openai.com/en/articles/8801890 (確認日 2026-10-24)
[^bizmemory]: OpenAIヘルプ「Memory FAQ (Business Version)」。"If a workspace owner turns off Memory for the workspace, existing saved memories for members in that workspace are deleted." https://help.openai.com/en/articles/9295112 (確認日 2026-10-24)
[^pro]: OpenAIヘルプ「About ChatGPT Pro tiers」。"Uninstalling the ChatGPT app does not cancel your subscription." https://help.openai.com/en/articles/9793128 (確認日 2026-10-23)
[^data-name]: 公式ヘルプでは、このメニューは「データ制御」（Data controls）と書かれています。実際の画面での名前は「データ管理（데이터 관리）」です。
[^screen-account]: 「設定」 → 「アカウント」 → 「削除」を押すと表示される確認画面を直接確認。"최근 10분 이내에 로그인한 경우에만 계정을 삭제할 수 있습니다."（直近10分以内にログインした場合のみアカウントを削除できます。）この画面には "같은 이메일 주소로 새 계정을 만들 수 없습니다."（同じメールアドレスでは新しいアカウントを作れません。）と書かれており、30日後に再登録できるというヘルプとは異なる。再登録するつもりなら、削除する前にヘルプをもう一度確認する（確認日 2026-10-28、Plusアカウントの Web 画面）
