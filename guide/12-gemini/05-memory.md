# 5장. 기억과 맞춤 설정 — 메모리, 지침, 다른 AI에서 옮겨 오기

> **한 줄 요약**: Gemini는 **지난 대화(메모리)**, **연결한 Google 앱**, **내가 적어 둔 지침**으로 나에게 맞춰 답합니다.
> 기억이 틀리면 대화에서 바로잡고, 지우려면 그 내용이 담긴 대화를 지웁니다. ChatGPT·Claude의 기억과 대화도 옮겨 올 수 있습니다.

화면은 2026년 10월 웹 기준이고, 그림은 유료 요금제(Google AI Pro) 한국어 화면입니다. 이 장의 기능 중에는 **미국에서만** 되는 것이 있어서, 그런 기능은 따로 표시했습니다.

## Gemini가 나를 알아 가는 세 가지 길

Gemini는 세 가지로 나에게 맞춘 답을 합니다.[^personal]

| 길 | 무엇을 쓰나 | 이 가이드에서 |
|---|---|---|
| 메모리 | 지난 Gemini 대화 | 이 장 |
| 연결된 앱 | Gmail·Google 포토 같은 Google 앱의 내용[^apps] | 7장 |
| 지침 | 내가 적어 둔 선호(말투·형식 등) | 이 장 |

출처: Google 도움말[^personal]

이 기능들은 **개인 Google 계정**에서만 됩니다. 회사·학교 계정이나 보호자가 관리하는 계정에서는 안 됩니다.[^personal] 아직 모든 사람에게 열려 있지 않아서, 기능마다 조건이 다릅니다.[^personal]

설정은 한 곳에 모여 있습니다. 「설정」 → 「개인 인텔리전스」를 누르세요.[^screen][^memory]

![「설정」 → 「개인 인텔리전스」 화면. 제목 아래 "나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요." ① 「메모리」 카드("Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다."), ② 메모리 스위치(켜짐), ③ 「연결된 앱」 카드, ④ 「Gemini 요청 사항」 카드에 빨간 번호가 붙어 있다](assets/shot-14-personal-marked.png)

**빨간 번호는 아래 목록의 번호와 같은 곳입니다.**[^screen]

- ① 「메모리」: 지난 대화로 나를 알아 가는 기능입니다. 「관리 및 삭제」로 지난 대화를 정리하러 갈 수 있습니다.
- ② 메모리를 켜고 끄는 스위치입니다.
- ③ 「연결된 앱」: Google 앱 연결입니다(7장).
- ④ 「Gemini 요청 사항」: 지침을 적어 두는 곳입니다. 설명은 "Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')"입니다. 누르면 따로 화면이 열립니다(아래 「지침」 절).

<Quiz id="ch305-overview" />

## 메모리 — 지난 대화를 기억하기

**메모리**를 켜면 Gemini가 지난 대화에서 나와 내 주변에 대해 배워서 답에 씁니다.[^memory]
예를 들어 지난번에 "다음 달 제주도 여행을 준비 중"이라고 말했다면, 나중에 여행 이야기를 할 때 그 내용을 이어서 쓸 수 있습니다. 하던 일의 다음 단계나 여행 계획을 먼저 제안하기도 합니다.[^memory]

쓰려면 조건이 있습니다.[^memory]

- **만 18세 이상**, 개인 Google 계정
- **「활동 기록 보관」이 켜져 있을 것**([3장](03-chats.md#지난-대화-찾기))
- **일부 기능에서는 쓰이지 않습니다.** 대표적으로 Gem과 음성 대화(Live)입니다. 대신 글로 대화할 때 지난 음성 대화를 참고해 달라고 할 수는 있습니다.

### 지난 대화를 물어보기

새 대화에서 지난 대화를 **주제나 때로 물어볼 수 있습니다.**[^recent]

```
지난달에 독서 모임 장소 이야기를 나눴던 대화를 찾아서 요약해 줘.
```

Gemini가 지난 대화를 참고했다면, 답 아래 「소스 및 관련 콘텐츠」에 「이전 채팅」이 표시됩니다. 다만 이 표시가 가끔 틀릴 수 있습니다.[^recent]
궁금하면 직접 물어보세요. "지난 대화의 정보를 썼어?"라고 물으면 됩니다.[^memory]

### 기억이 틀렸을 때, 지우고 싶을 때

**틀린 내용은 대화에서 바로 고쳐 말하세요.** 메모리가 켜져 있으면 Gemini가 그 말을 반영합니다. 그래도 늘 맞게 고치지는 못할 수 있습니다.[^memory]

**기억을 지우려면 그 내용이 담긴 대화를 모두 지워야 합니다.** 「Gemini 앱 활동」에서 그 대화들을 찾아 지우세요.[^memory] 지운 뒤에도 답에서 빠지기까지 잠시 걸릴 수 있습니다.[^memory]

"그 이야기는 잊어 줘"라고 지침을 줘도 **늘 지켜지지는 않습니다.** 확실히 멈추게 하려면 그 주제의 대화를 지우세요.[^instructions]

**메모리 자체를 끄면** Gemini가 나에 대해 새로 배우는 것을 멈춥니다. 위 그림의 ② 스위치를 끄면 됩니다.[^instructions][^screen]

<Quiz id="ch305-memory" />

## 지침 — 매번 말하지 않아도 되게

**지침**은 Gemini가 늘 따랐으면 하는 나만의 규칙입니다. 한 번 적어 두면 새 대화에서도 다시 말할 필요가 없습니다.[^instructions]
화면 이름은 「Gemini 요청 사항」입니다(위 그림의 ④).[^screen] **지침은 모든 사용자가 추가할 수 있습니다.**[^instructions]

지침의 예는 이렇습니다.[^instructions]

```
모든 답은 짧은 요약으로 시작해 줘.
```

```
긴 문단은 글머리 기호로 나눠 줘.
```

아쉬운 지침과 나은 지침을 견주어 보세요.

| 아쉬운 지침 | 나은 지침 |
|---|---|
| "잘 설명해 줘" | "전문 용어가 나오면 괄호 안에 쉬운 말로 풀어 줘" |
| "짧게" | "답은 다섯 줄 안으로, 마지막 줄에 할 일 하나만 적어 줘" |

나은 지침은 Gemini가 지켰는지 내가 바로 확인할 수 있을 만큼 구체적입니다([1단계 4장](../00-common/04-prompt-basics.md)).

지침을 추가하는 순서는 이렇습니다. 1번은 화면에서 확인했고, 2~3번은 도움말에 적힌 이름입니다(이 가이드는 지침 안쪽 화면을 열지 않았습니다).[^instructions][^screen]

1. 「설정」 → 「개인 인텔리전스」 → 「Gemini 요청 사항」을 누릅니다.
2. 「추가 +」를 누르고 지침을 적은 뒤 제출합니다.
3. 고치거나 지우려면 그 지침의 「더보기」를 누릅니다. 맨 위 스위치로 지침 전체를 켜고 끌 수도 있습니다.

### 대화로 기억시키기 (미국 전용)

"내가 채식주의자라는 걸 기억해"처럼 대화 중에 말해서 기억시키는 기능도 있습니다. 하지만 이 기능은 **지금 미국에서만** 되고, Google AI 요금제와 만 18세 이상이 필요합니다.[^instructions]
한국에서는 위의 **지침**으로 같은 효과를 내 보세요. "나는 채식을 해. 음식 추천에서는 고기를 빼 줘."처럼 적어 두면 됩니다.

Gemini가 나에 대해 이해한 내용을 모아 보고 고치는 **메모리 요약** 화면도 있지만, 이것도 **미국의 유료 요금제 사용자에게 영어로만** 제공됩니다.[^summary]

<Quiz id="ch305-instructions" />

## 다른 AI에서 옮겨 오기

ChatGPT나 Claude를 쓰다가 Gemini로 옮긴다면, **기억과 대화를 가져올 수 있습니다.**[^import] 「설정」 메뉴의 「데이터 및 개인 정보 보호」 묶음에서 「Gemini로 메모리 가져오기」를 누르세요([2장](02-screen-tour.md#설정-화면-—-계정·환경설정·개인정보)).[^screen]

![「Gemini로 메모리 가져오기」 화면. ① 다른 AI에 붙여 넣을 프롬프트와 「복사」, ② 「여기에 정보를 붙여넣으세요...」 칸과 「메모리 추가」, ③ 「채팅 가져오기」 — ZIP 파일(5 GB 이하)과 「추가」, ④ 가져온 채팅이 활동에 저장되고 AI 모델 학습을 비롯한 서비스 개선에 쓰인다는 안내에 빨간 번호가 붙어 있다](assets/shot-15-import-marked.png)

**기억 가져오기**는 이렇게 합니다.[^import][^screen]

1. ①의 프롬프트를 「복사」해서 ChatGPT나 Claude 대화창에 붙여 넣습니다.
2. 그 AI가 나에 대해 정리해 준 답을 복사합니다.
3. ② 칸에 붙여 넣고 「메모리 추가」를 누릅니다.

**대화 가져오기**는 ③에서 합니다. ChatGPT나 Claude에서 내보낸 ZIP 파일을 「추가」로 올리세요.[^import][^screen]

- ChatGPT는 「설정 > 데이터 관리」의 「데이터 내보내기」에서, Claude는 「설정」 → 「개인정보보호」의 「데이터 내보내기」에서 받습니다. 자세한 길은 [ChatGPT 8장](../11-chatgpt/08-privacy.md#데이터-내보내기)·[Claude 9장](../10-claude/09-privacy.md#내-데이터-내려받기)을 보세요. Gemini 도움말은 이 메뉴를 「데이터 제어」라고 옮겼지만, 이 가이드가 확인한 ChatGPT 화면 이름은 「데이터 관리」입니다.[^import]
- 파일 하나는 5GB까지, 하루 5개까지 올릴 수 있습니다.[^import]
- 같은 ZIP을 다시 올리면 새 대화는 더해지고, 전에 가져온 대화는 덮어씁니다.[^import]

**가져오기 전에 알아 둘 점이 있습니다.** ④에 적힌 대로, 가져와서 **이어 간** 대화는 내 활동에 저장되고 **생성형 AI 모델 학습을 비롯한 Google 서비스 개선에 쓰입니다.**[^import][^screen] 활동은 언제든 관리하고 지울 수 있습니다.

가져오기는 개인 Google 계정, 만 18세 이상만 됩니다. 유럽경제지역(EEA)·스위스·영국에서는 안 됩니다.[^import]

<Quiz id="ch305-import" />

## 직접 해 보기

1. 「설정」 → 「개인 인텔리전스」를 열고 「메모리」가 켜져 있는지 확인한다.
2. 「Gemini 요청 사항」에 "모든 답은 짧은 요약으로 시작해 줘."를 추가하고, 새 대화에서 아무 질문이나 해 본다. 요약으로 시작했나?
3. 새 대화에서 "지난 대화의 정보를 썼어?"라고 물어본다.
4. 확인이 끝나면 2번 지침을 지우거나 스위치로 끈다.

**이어지는 과제** ([독서 모임 준비하기](../00-common/practice-kit.md)): 「Gemini 요청 사항」에 "독서 모임 안내문은 존댓말로, 날짜·장소·준비물을 맨 위에 적어 줘."를 추가한 뒤, 새 대화에서 안내문을 다시 요청해 지침이 지켜졌는지 본다.

## 정리

- Gemini는 메모리(지난 대화), 연결된 앱, 지침으로 나에게 맞춘다. 설정은 「설정」 → 「개인 인텔리전스」에 모여 있다.
- 메모리는 만 18세 이상·개인 계정·「활동 기록 보관」이 필요하다. Gem과 음성 대화에서는 쓰이지 않는다.
- 틀린 기억은 대화에서 고쳐 말하고, 지우려면 그 내용이 담긴 대화를 모두 지운다. "잊어 줘" 지침은 늘 지켜지지 않는다.
- 지침(「Gemini 요청 사항」)은 모든 사용자가 쓸 수 있다. 대화로 기억시키기와 메모리 요약은 미국 전용이다.
- ChatGPT·Claude의 기억은 프롬프트를 복사해 옮기고, 대화는 내보낸 ZIP으로 가져온다. 가져와 이어 간 대화는 AI 학습을 비롯한 서비스 개선에 쓰인다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Memory | 메모리 | 지난 대화에서 나에 대해 배워 답에 쓰는 기능 |
| Personal Intelligence | 퍼스널 인텔리전스 (개인 인텔리전스) | 메모리·연결된 앱·지침을 묶은 맞춤 기능과 그 설정 화면 |
| Instructions for Gemini | 인스트럭션스 (Gemini 요청 사항) | Gemini가 늘 따랐으면 하는 나만의 규칙 |
| Memory summary | 메모리 서머리 (메모리 요약) | Gemini가 이해한 나를 보고 고치는 화면. 미국 전용 |
| Import | 임포트 (가져오기) | 다른 AI의 기억·대화를 Gemini로 옮기기 |
| ZIP | 집 | 여러 파일을 하나로 묶은 압축 파일 |

<ChapterDone :chapter="305" />

다음 장: [6장. 검색과 Deep Research](06-search.md)

[^screen]: Gemini 웹 화면(Google AI Pro, 한국어)에서 직접 확인. 「설정」 → 「개인 인텔리전스」(주소 /personalization-settings) 화면 "나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요.", 카드 「메모리」("Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다. 언제든지 이전 채팅을 관리 및 삭제할 수 있습니다.")와 스위치, 「연결된 앱」, 「Gemini 요청 사항」. 「설정」 → 「Gemini로 메모리 가져오기」(주소 /import) 화면 "1 다른 AI 제공업체와의 채팅에 이 프롬프트 복사하기" 「복사」, "2 여기에 대답 붙여넣기" 「여기에 정보를 붙여넣으세요...」 「메모리 추가」, 「채팅 가져오기」 "지원되는 AI 제공업체에서 데이터를 내보낸 후 ZIP 파일(5 GB 이하)로 Gemini에 직접 업로드하세요." 「추가」, "Gemini로 가져와 계속 이어 간 채팅은 활동에 저장됩니다. 이 데이터는 생성형 AI 모델 학습을 비롯한 Google 서비스를 개선하고 Google, Google 사용자, 일반 대중을 보호하는 데 사용됩니다." 「Gemini 요청 사항」 카드 설명 "Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')". 「Gemini로 메모리 가져오기」는 「설정」 메뉴의 「데이터 및 개인 정보 보호」 묶음에 있다. 「Gemini 요청 사항」 안의 화면은 사용자 지침이 보여 열지 않았다. Google AI Pro 화면만 확인했고, 무료·미성년 계정에서 이 카드가 보이는지는 확인하지 못했다. (확인일 2026-10-31)
[^personal]: Google 도움말, 「Get personalization in Gemini Apps」(한국어판 「Gemini 앱에서 개인화 기능 사용하기」). "You can get a personalized experience in Gemini Apps based on:" / "These features are not available to everyone at this time. You can find details about each feature in the articles linked below." / "To use these features, you must sign in to Gemini Apps with a personal Google Account. These features are not available while signed in to a work, school, or supervised account." https://support.google.com/gemini/answer/16598623 (확인일 2026-10-31)
[^memory]: Google 도움말, 「Get personalization with memory of your past Gemini chats」(한국어판 「이전 Gemini 채팅의 메모리를 사용해 개인화 기능 사용하기」). "With this feature, Gemini can learn from your chats to understand more about you and your world." / "Be 18 or over." / "Not available in certain features, like Gems or Live chats. In a text chat, you can ask Gemini to reference a past Gemini Live conversation." / "At the top, tap Menu   Settings & help   Personal Intelligence." / "Tip: When Memory is turned on, Gemini may suggest topics or tools for you based on previous conversations. For instance, Gemini might:" / "Suggest next steps for a project you’re working on" / "Offer to help plan a trip you’ve mentioned" / "To correct what Gemini knows about you and uses in a response:" / "Make sure that Memory is turned on." / "If you delete a chat, there might be a short delay before Gemini stops using it to personalize your responses." / "To check if Gemini used your past chats, just ask Gemini, “Did you use any info from past chats?”" / "To delete something that Gemini remembered about you, delete all chats with this info from Gemini Apps Activity." / "While Gemini continues to improve, it might not always get it right." https://support.google.com/gemini/answer/16598469 (확인일 2026-10-31)
[^recent]: Google 도움말, 「Find & manage your recent chats in Gemini Apps」. "In a new chat, you can ask Gemini about your past Gemini chats by topic or timeframe, or ask it to reference them before responding." / "Gemini may occasionally make mistakes and display this label incorrectly." 한국어 화면 이름 「소스 및 관련 콘텐츠」「이전 채팅」. https://support.google.com/gemini/answer/13666746 (확인일 2026-10-31)
[^instructions]: Google 도움말, 「Manage what Gemini remembers about you and customize responses」(한국어판 「Gemini가 나에 대해 기억하는 정보 관리 및 대답 맞춤설정」). "Gemini will remember the information or instructions you share with it, even in new chats." / "be over 18." (한국어판 "만 18세 이상이어야 합니다.") / "Have a Google AI plan." / "Only available in the US. All users can add instructions for Gemini Apps." / "Remember that I am vegetarian." / "“Start all responses with a short summary.”" / "Important: Instructions for Gemini to forget or avoid topics in chats doesn’t always work perfectly. To make sure Gemini stops mentioning a topic, delete any chats about it from your Gemini Apps Activity." / "Tap Add +." / "At the top, turn Instructions for Gemini off  or on ." / "To stop Gemini from learning about you" 한국어 화면 이름 「Gemini 요청 사항」「추가 +」「제출」「더보기」「수정」「삭제」. https://support.google.com/gemini/answer/16598625 (확인일 2026-10-31)
[^summary]: Google 도움말, 「View & manage your Memory summary in Gemini Apps」(한국어판 「Gemini 앱에서 내 메모리 요약 보기 및 관리하기」). "You can use memory summary to view, edit, and delete what Gemini Apps understands about you." / "Currently available to US users with an active Google AI plan." / "Available in English." https://support.google.com/gemini/answer/18617127 (확인일 2026-10-31)
[^apps]: Google 도움말, 「Connect your Google apps to personalize your Gemini experience」(한국어판 「Google 앱을 연결하여 Gemini 환경 개인화하기」). "Get content from Gmail and Google Photos, like photos from your last vacation." https://support.google.com/gemini/answer/16598406 (확인일 2026-10-31)
[^import]: Google 도움말, 「Import from other AI platforms to Gemini Apps」(한국어판 「다른 AI 플랫폼에서 Gemini 앱으로 가져오기」). "You can bring over your preferences, remembered facts & details, and general contextual information (sometimes called  "memory") from other AI platforms." / "Be signed in with a personal Google Account. This feature isn’t available if you sign in to a work, school, or supervised Google Account." / "Be 18 or older." / "The EEA, Switzerland, or the United Kingdom." / "Click Settings  Data controls." / "Click Settings  Privacy." / "Copy the response from the other AI platform that contains memories about you." / "Tip:  You can upload up to 5 .zip.files per day." / "A download link will be sent to the email associated with your account on the other AI platform." / "If you reupload a  .zip file with your exported chats it will add any new conversations and overwrite previously imported ones." / "Your imported and continued chats are saved in your Activity. This data is used to improve our services (including training generative AI models), and to protect Google, our users and the public." https://support.google.com/gemini/answer/16868299 (확인일 2026-10-31)
