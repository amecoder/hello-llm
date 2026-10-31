# 10장. 음성과 휴대폰 — 말로 묻기, Gemini Live, 휴대폰·컴퓨터 앱

> **한 줄 요약**: 타자가 귀찮으면 **마이크**로 물어보세요. 말로 주고받으며 대화하고 싶으면 휴대폰의 **Gemini Live**를 쓰세요.
> 카메라나 화면을 보여 주며 물을 수도 있습니다. 컴퓨터 앱은 **단축키 하나**로 바로 불러냅니다.

이 장의 휴대폰 화면은 이 가이드가 직접 찍지 못했습니다. 도움말을 근거로 썼고, 휴대폰마다 메뉴 위치가 다를 수 있습니다.

## 말로 묻기 — 마이크 버튼

글자로 치는 대신 말로 물어볼 수 있습니다.

- **휴대폰 앱**: 입력창의 마이크를 누르고 말합니다. 마이크는 질문을 듣기 위해 **최대 5분** 열려 있습니다.[^mobilestart]
- **웹**: 입력창 오른쪽의 마이크 버튼(「음성기록」)을 누릅니다. Mac에서는 단축키 ⌘ + Shift + D로도 됩니다.[^screen]

말로 물을 때도 1단계에서 배운 요령은 같습니다. 무엇을, 누구에게, 어떤 모양으로 원하는지 말해 주세요([1단계 4장](../00-common/04-prompt-basics.md)).

한국어는 휴대폰 앱이 지원하는 언어이고, 한국도 지원 국가입니다.[^mobile] 다만 목소리 바꾸기처럼 일부 언어에서는 안 되는 음성 기능도 있습니다.[^voice]

<Quiz id="ch310-voice" />

## Gemini Live — 말로 주고받는 대화

**Gemini Live**(제미나이 라이브)는 글자를 치지 않고 **말로 주고받는 대화**입니다. Gemini가 말하는 도중에 끼어들어 내용을 더하거나 주제를 바꿀 수도 있습니다.[^live]
이럴 때 좋습니다.[^live]

- 선물 아이디어나 행사 계획처럼 **소리 내어 생각을 정리**할 때
- 면접이나 발표처럼 **중요한 자리를 말로 연습**할 때

```
내일 동네 독서 모임에서 새 회원들에게 1분 동안 모임을 소개해야 해.
내가 먼저 말해 볼 테니, 듣고 나서 더 짧고 따뜻하게 말하는 법을 알려 줘.
```

### 쓰는 곳과 조건

도움말은 **Android 휴대폰·태블릿의 Gemini 앱**에서 쓴다고 안내합니다. **웹에서는 아직 Live를 쓸 수 없습니다.**[^live] 만 13세 이상(나라마다 다름)이고 로그인해야 합니다.[^live]
iPhone용 Gemini 위젯(iOS 17 이상)에도 Live 바로가기가 있습니다.[^widget] 다만 Live 도움말은 Android 기준이라, iPhone에서 어디까지 되는지는 이 가이드가 확인하지 못했습니다.

지금은 **Gem을 Live에서 쓸 수 없습니다.**[^live] 지난 대화의 기억(메모리)을 Live에서 쓰는 맞춤 기능은 **미국의 영어**에서만 된다고 합니다.[^live]

### 시작하고 멈추기

- **시작**: Gemini 앱 아래쪽 「Live」를 누르거나 왼쪽으로 쓸어 넘깁니다. "Hey Google, let’s talk Live"라고 말해도 됩니다.[^live]
- **잠깐 멈춤**: 「대기」를 누르면 마이크가 꺼집니다. 다시 「Live」를 누르면 이어집니다.[^live]
- **음소거**: 내 마이크만 끄고 Gemini는 계속 말하게 둡니다.[^live]
- **글로 이어 가기**: 「종료」를 누르면 같은 대화가 글자 대화로 이어집니다. 새 채팅을 만들 필요가 없습니다. 그 대화에서 다시 「Live」를 누르면 음성으로 돌아옵니다.[^live]
- **다른 앱 쓰기**: 화면 아래에서 위로 쓸어 올리면 Live를 켠 채 다른 앱으로 갈 수 있습니다.[^live]

말로 끼어들기를 꺼 둬도 화면을 탭하면 멈출 수 있습니다. 자막을 켜면 그 뒤의 Live 대화에 모두 자막이 붙습니다.[^live]

### Gemini의 목소리 바꾸기

목소리는 **휴대폰 앱의 설정**에서 고릅니다. 이름을 눌러 미리 들어 보고 「확인」으로 저장합니다.[^voice] 고른 목소리는 Live뿐 아니라 답을 읽어 주는 「듣기」 같은 **소리로 답하는 모든 기능**에 쓰입니다.[^voice]

### 카메라와 화면 보여 주기

Live 중에 **카메라**를 켜면 내가 보는 것을 보여 주며 이야기할 수 있습니다.[^live] 예를 들어 냉장고 안을 비추며 "이걸로 저녁 뭐 해 먹지?"라고 물을 수 있습니다.

**화면 공유**도 됩니다. 이때는 **내 휴대폰 화면 전체**가 Gemini에게 보입니다.[^live] 그래서 공유하기 전에 비밀번호, 결제 정보, 남의 메시지가 화면에 없는지 확인하세요.

- 공유를 끝내려면 화면 위에서 아래로 쓸어 내린 뒤 「화면 공유」 카드의 「공유 중지」를 누릅니다.[^live]
- 앱을 떠나면 카메라가 꺼지고, 돌아와도 저절로 다시 켜지지 않습니다. 화면 공유도 마찬가지입니다.[^live]

**다른 사람을 녹음하거나 Live 대화에 넣을 때는 먼저 허락을 구하세요.**[^live] Live의 녹음·영상·화면 공유가 어떻게 저장되는지는 [9장](09-privacy.md#사람이-읽나-ai-학습에-쓰이나)을 보세요.

<Quiz id="ch310-live" />

## 휴대폰 앱 — 사진 찍어 묻기, 어시스턴트로 쓰기

휴대폰 앱에서는 웹보다 할 수 있는 일이 조금 더 있습니다.

- **사진 찍어 묻기**: 앱의 카메라를 눌러 사진을 찍고 그 사진에 대해 물어봅니다.[^mobileuse]
- **Gmail·Drive 요약**: 연결된 앱이 켜져 있으면 휴대폰에서도 메일과 파일을 요약합니다([7장](07-skills-apps.md)).[^mobileuse]

### Android에서 어시스턴트로 쓰기

Android에서는 Gemini를 **기본 어시스턴트**(휴대폰 버튼이나 목소리로 부르는 도우미)로 정할 수 있습니다.[^mobilestart]

- 전원 버튼이나 홈 버튼을 길게 누르는 식으로 부릅니다. 방법은 기기마다 다릅니다.[^mobilestart]
- "Hey Google"이 안 되는 언어도 있지만, 그때도 마이크를 눌러 말로 대화할 수 있습니다.[^mobilestart]
- 다른 앱을 보다가 Gemini를 불러 **지금 화면에 대해 물어볼** 수 있습니다. 설정에서 화면 맥락(「화면 컨텍스트」)이 켜져 있어야 합니다.[^mobilestart]

### 잠금 화면에서 쓰기

Android 휴대폰·태블릿에서는 잠금을 풀지 않고도 Gemini에게 일부 일을 시킬 수 있습니다. 설정에서 「잠금 해제하지 않고 Gemini 사용하기」를 켜고 끕니다.[^lock] 허락해 두어도 **개인 정보가 필요한 일은 잠금을 풀라고 합니다.**[^lock]

휴대폰을 남과 함께 쓰거나 자주 두고 다닌다면 이 설정은 꺼 두는 편이 안전합니다.

<Quiz id="ch310-mobile" />

## 컴퓨터 앱 — 단축키로 바로 부르기

Mac·Windows 앱을 설치하는 법은 [1장](01-getting-started.md#gemini는-무엇이고-어디서-쓰나)에 있습니다. 설치하고 앱을 켜 둔 상태라면 **단축키**로 바로 부릅니다.

| 컴퓨터 | 단축키 | 그 밖에 |
|---|---|---|
| Mac | Option + Space | 창 공유, 「현재 창에서 바로 말하기」 |
| Windows | Alt + Space | — |

출처: Google 도움말[^mac][^windows]

Mac 앱에서는 이런 것도 됩니다.[^mac]

- **창 공유**: 「파일 및 도구 추가」 → 「창 공유」로 지금 보는 창을 Gemini에게 보여 주면, 그 내용에 맞춘 답을 받습니다.
- **「현재 창에서 바로 말하기」**: fn 키를 누른 채 말하고, 손을 떼면 질문이 보내집니다. 아직 모든 사람에게 열리지 않았습니다.

창을 공유할 때도 휴대폰 화면 공유와 같습니다. 보여 주면 안 되는 내용이 그 창에 없는지 먼저 보세요.

<Quiz id="ch310-desktop" />

## 직접 해 보기

1. 휴대폰 Gemini 앱에서 마이크를 누르고 "오늘 저녁 메뉴 세 가지 추천해 줘"라고 말해 본다.
2. Android라면 「Live」를 눌러 1분 자기소개를 연습하고, 「종료」를 눌러 같은 대화가 글로 이어지는지 확인한다.
3. 휴대폰 앱 설정에서 Gemini의 목소리를 두세 개 미리 들어 보고 하나를 고른다.
4. 컴퓨터 앱이 있다면 단축키(Mac은 Option + Space, Windows는 Alt + Space)로 Gemini를 불러 본다.

**이어지는 과제** ([독서 모임 준비하기](../00-common/practice-kit.md)): 다음 모임의 진행 멘트를 Live와 말로 연습해 본다. 연습이 끝나면 글로 바뀐 대화에서 고칠 점을 정리해 달라고 한다.

## 정리

- 마이크를 누르면 말로 물을 수 있다. 휴대폰 앱의 마이크는 최대 5분 듣는다. 한국어는 앱의 지원 언어다.
- Gemini Live는 말로 주고받는 대화다. 도움말 기준 Android 앱에서 쓰고, 웹에서는 아직 안 된다. 「대기」·「종료」로 멈추고, 「종료」하면 글자 대화로 이어진다.
- Live 중 카메라와 화면을 보여 줄 수 있다. 화면 공유는 휴대폰 화면 전체가 보인다.
- 목소리는 휴대폰 앱 설정에서 바꾸고, 소리로 답하는 모든 기능에 쓰인다.
- Android에서는 Gemini를 기본 어시스턴트로 쓰고, 잠금 화면에서도 쓸 수 있다. 개인 정보가 필요한 일은 잠금을 풀어야 한다.
- 컴퓨터 앱은 Mac Option + Space, Windows Alt + Space로 부른다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Gemini Live | 제미나이 라이브 | 말로 주고받는 Gemini 대화 |
| Screen sharing | 스크린 셰어링 (화면 공유) | 내 기기 화면을 Gemini에게 보여 주는 것 |
| Mobile assistant | 모바일 어시스턴트 | 휴대폰 버튼이나 목소리로 부르는 기본 도우미 |
| Widget | 위젯 | 홈 화면에서 앱 기능을 바로 여는 작은 창 |
| Speak to Window | 스피크 투 윈도 (현재 창에서 바로 말하기) | Mac에서 fn 키를 누른 채 말해 묻는 기능 |

<ChapterDone :chapter="310" />

다음 장: [11장. 실습 과제](11-practice.md)

[^screen]: Gemini 웹 화면(Google AI Pro, 한국어, Mac)에서 직접 확인. 입력창 오른쪽 마이크 버튼의 이름표 "음성기록 (⌘⇧D)". (확인일 2026-10-31)
[^mobile]: Google 도움말, 「Gemini mobile app availability」(한국어판 「Gemini 모바일 앱 사용 가능 여부」). "To use your Gemini mobile app, you must be 13 (or the applicable age in your country) or over." / "Where you can download the Gemini app from the Google Play Store" (지원 언어 목록에 "Korean", 국가 목록에 "South Korea") https://support.google.com/gemini/answer/14579026 (확인일 2026-10-31)
[^mobilestart]: Google 도움말, 「Get started with the Gemini mobile app」(한국어판 「Gemini 모바일 앱 시작하기」). "The microphone stays open for up to 5 minutes to listen to your prompt." / "On Android, if you set the Google app  as the default assist app on your device, you can choose Gemini as your mobile assistant." / "Activate by touch, which differs by device." / "“Hey Google” is not available in all languages, but you can still chat with Gemini with your voice when you tap Microphone ." / "Make sure your screen context setting is turned on." https://support.google.com/gemini/answer/14554984 (확인일 2026-10-31)
[^mobileuse]: Google 도움말, 「What you can do with your Gemini mobile app」(한국어판 「Gemini 모바일 앱으로 할 수 있는 작업」). "Ask questions about your surroundings. In the Gemini app, tap Camera , take a photo, and ask questions about it." / "Summarize and find quick info from Gmail or Google Drive" https://support.google.com/gemini/answer/14579631 (확인일 2026-10-31)
[^live]: Google 도움말, 「Talk naturally with Gemini Live」(한국어판 「Gemini Live로 자연스럽게 대화하기」). "With Gemini Live, you can have a natural, free-flowing conversation with Gemini. You can even interrupt it like when you want to add more details or change the topic of the conversation." / "Brainstorm ideas out loud: Ask for a gift idea, to plan an event, or to make a business plan." / "Practice aloud: Rehearse for important moments in a more natural and conversational way." / "An Android phone or tablet." / "For now, Gemini Live isn’t available in the Gemini web app or Gemini in Google messages." / "Be over 13 (or the applicable age in your country)." / "To use this feature, you must be signed in to Gemini Apps." / "For now, Gems can't be used with Gemini Live." / "Respect others’ privacy and ask permission before recording or including them in a Live chat." / "At the bottom, tap Live  or swipe left." / "You can also go Live by saying “Hey Google, let’s talk Live” or “Hey Google, let’s talk.”" / "To put the Live chat on hold, tap Hold . This turns off the mic." / "To resume the Live chat, tap Live ." / "Mute a Live chat to turn off your microphone but allow Gemini to keep speaking." / "You can seamlessly switch an ongoing conversation between Live (voice) and non-Live (text) modes without needing to start a new chat." / "Important: This feature is only available in English in the US." / "To get more helpful, tailored responses, Gemini can use memories of your past chats and info from some Connected Apps." / "To switch back to Live (voice) mode: In a non-Live chat, tap Live ." / "To put Live in the background: from the bottom edge of your screen, swipe up." / "Tip: If you turn off interrupt Live responses, you can still interrupt Gemini by tapping the screen." / "If you turn on captions, all of your Gemini Live conversations will have captions until you turn the setting off." / "In your Live chat, you can turn on your camera to show Gemini what you see and talk about it." / "You leave the Gemini mobile app. The camera doesn’t automatically turn back on when you return to the app." / "You can share and get help with what’s on your device’s screen. When you share your screen, your full screen is shared with Gemini." / "From the top edge of your screen, swipe down, then on the “Screen Sharing” card, tap Stop sharing." / "Screen sharing doesn’t automatically resume when you continue your Live chat or unlock your screen." 한국어판 화면 이름 「대기」「종료」「음소거」「공유 중지」. https://support.google.com/gemini/answer/15274899 (확인일 2026-10-31)
[^widget]: Google 도움말, 「Add & customize your Gemini widget」(한국어판 「Gemini 위젯 추가 및 맞춤설정하기」). "Open directly to Gemini live with" / "Your device has iOS 17 or up." https://support.google.com/gemini/answer/16179553 (확인일 2026-10-31)
[^voice]: Google 도움말, 「Change Gemini’s voice」(한국어판 「Gemini의 음성 변경」). "For now, you can only access Gemini’s voice setting in the Gemini mobile app." / "The option to change Gemini’s voice isn’t available in some languages." / "This voice setting applies to all Gemini Apps features." 한국어판 화면 이름 「Gemini의 음성」「듣기」「확인」. https://support.google.com/gemini/answer/15277943 (확인일 2026-10-31)
[^lock]: Google 도움말, 「How your Gemini mobile app can help when your phone is locked」(한국어판 「휴대전화가 잠겨 있을 때 Gemini 모바일 앱의 도움을 받는 방법」). "On Android phones and tablets, you can get help from your Gemini mobile app by touch" / "When you give Gemini permission to respond while your phone is locked, you may still need to unlock your phone for certain tasks." / "Turn Use Gemini without unlocking on or off." 한국어판 화면 이름 「잠금 해제하지 않고 Gemini 사용하기」. https://support.google.com/gemini/answer/14576209 (확인일 2026-10-31)
[^mac]: Google 도움말, 「Use the Gemini app on Mac」(한국어판 「Mac에서 Gemini 앱 사용하기」). "For quick access, you can also use the keyboard shortcut Option + Space to bring up the Gemini chat window after the app is installed and running." / "Tip: To get more personalized responses, you can share your window with Gemini. In Gemini, click Add files and tools  Share window ." / "To use Speak to Window, press and hold the fn key." / "Important: Speak to Window is rolling out over time, so it may not be available to you yet." 한국어판 화면 이름 「파일 및 도구 추가」「창 공유」「현재 창에서 바로 말하기」. https://support.google.com/gemini/answer/17011627 (확인일 2026-10-31)
[^windows]: Google 도움말, 「Use the Gemini app for Windows」(한국어판 「Windows용 Gemini 앱 사용하기」). "For quick access to Gemini, you can use the keyboard shortcut Alt + Space." https://support.google.com/gemini/answer/18263854 (확인일 2026-10-31)
