# 9장. 개인정보와 안전 — 무엇이 저장되고, 누가 보고, 어떻게 지우나

> **한 줄 요약**: Gemini 대화는 「활동 기록 보관」이 켜져 있으면 **계정에 18개월** 남고, 일부는 **사람이 읽고 AI 학습에도 쓰입니다.**
> 남기기 싫은 대화는 **임시 채팅**으로 하고, 기밀은 처음부터 넣지 마세요. 기록은 「설정」 → 「활동」에서 끄고 지웁니다.

화면은 2026년 10월 웹 기준입니다. 이 장은 개인 Google 계정 기준입니다. 회사·학교 계정은 규칙이 다릅니다(마지막 절).

## 무엇이 저장되나

로그인해서 Gemini를 쓰면 Google은 이런 정보를 모읍니다.[^hub]

- **내가 한 말**: 입력하거나 말로 한 질문, 맡긴 작업
- **내가 보여 준 것**: 올린 파일·사진·동영상, 물어본 화면, 가져온 대화, 브라우저에서 보낸 페이지 내용
- **연결된 앱에서 온 정보**: Gmail 같은 연결된 앱, 검색·YouTube 기록, Chrome에서 보던 페이지 주소([7장](07-skills-apps.md#연결된-앱-—-gmail·drive·캘린더를-gemini에서))
- **그 밖의 것**: 음성 대화(Live) 녹음, 피드백, 위치 정보 등

**위치 정보는 늘 모읍니다.** 질문에 맞는 답을 하기 위해서입니다. 다만 기기에서 허락해 준 **정확한 위치**는 「Gemini 앱 활동」 기록에 저장하지 않습니다.[^hub]

**채팅 내용으로 광고를 보여 주지는 않는다**고 Google은 밝힙니다. 바뀌면 분명히 알리겠다고 합니다.[^hub]

<Quiz id="ch309-saved" />

## 사람이 읽나? AI 학습에 쓰이나?

**일부는 사람이 읽습니다.** 사람 검토자(Google과 계약한 외부 업체 직원 포함)가 Gemini의 답이 부정확하거나 해롭지 않은지 평가하고, 더 나은 답을 제안합니다.[^hub]
대화는 검토자에게 보내기 전에 내 계정과 분리됩니다. 그래도 Google은 이렇게 안내합니다.[^hub]

> 검토자가 보거나 서비스 개선에 쓰이면 곤란한 **기밀 정보는 입력하지 마세요.**

**학습에도 쓰입니다.** 「활동 기록 보관」이 켜져 있으면 내 활동이 **생성형 AI 모델 학습을 포함한 서비스 개선**에 쓰이고, 그 과정에 사람 검토자가 참여합니다.[^hub]
앞으로의 대화가 서비스 개선용으로 검토되지 않게 하는 방법으로 도움말이 안내하는 것은 **「활동 기록 보관」 끄기**입니다.[^hub]

다만 기록을 끄거나 임시 채팅을 써도, **답을 주고 사용자와 Google을 보호하는 일**에는 대화가 계속 쓰입니다. 이때도 사람 검토자가 참여할 수 있습니다.[^hub]

| | 「활동 기록 보관」 켬 | 끔 또는 임시 채팅 |
|---|---|---|
| 내 활동 목록에 | 남음 | 안 남음 |
| 계정에 저장 | 기본 18개월 | 72시간 |
| AI 학습 | 쓰임 | 안 쓰임 |
| 보호 목적 사람 검토 | 있음 | 있음 |

출처: Google 도움말[^hub][^activity]

**음성 대화(Live)의 녹음·영상·화면 공유는 기본으로 서비스 개선에 쓰이지 않습니다.** 내가 직접 켰을 때만 쓰입니다.[^hub]

**피드백(좋아요·싫어요)을 보내면** 기록을 꺼 두었어도 그 피드백과 관련 대화가 서비스 개선에 쓰입니다.[^hub] 민감한 대화에는 피드백을 남기지 않는 편이 낫습니다.

<Quiz id="ch309-review" />

## 「활동 기록 보관」 켜고 끄기

「활동 기록 보관」(Keep Activity)은 내 Gemini 대화를 계정에 남겨 두는 설정입니다. **만 18세 이상이면 처음부터 켜져 있습니다.**[^activity]

### 끄는 방법

1. 왼쪽 아래 「설정」 → 「활동」을 누릅니다. 새 탭에 「Gemini 앱 활동」이 열립니다([2장](02-screen-tour.md#설정-화면-—-계정·환경설정·개인정보)).[^report]
2. 위쪽 「활동 기록 보관」 옆 「사용」을 누릅니다.[^report]
3. **「사용 중지」**(앞으로만 끄기) 또는 **「사용 중지 및 활동 삭제」**(끄고 지난 기록도 지우기)를 고릅니다.[^activity]

### 끄면 달라지는 것

끄면 대화가 활동 목록에 남지 않습니다. 대신 쓸 수 없게 되는 기능이 많습니다.

| 기능 | 끄면 | 다룬 장 |
|---|---|---|
| 지난 대화 찾기·고정·이름 변경 | 안 됨 | [3장](03-chats.md#지난-대화-찾기) |
| 메모리(지난 대화 기억) | 안 됨 | [5장](05-memory.md) |
| 스킬, 대부분의 연결된 앱 | 안 됨 | [7장](07-skills-apps.md) |
| 작업, 일정 | 안 됨 | [8장](08-tasks.md) |

출처: 각 장의 Google 도움말 각주

그러니 이렇게 고르면 됩니다.

- **편리함이 중요하면** 켜 두고, 민감한 대화만 **임시 채팅**([2장](02-screen-tour.md#임시-채팅-—-기록이-남지-않는-대화))으로 합니다.
- **학습에 쓰이는 것 자체가 싫으면** 끄고, 위 기능들을 포기합니다.

어느 쪽이든 **기밀은 처음부터 넣지 않는 것**이 가장 확실합니다([1단계 9장](../00-common/09-safety.md#넣지-말아야-할-것)).

<Quiz id="ch309-activity" />

## 기록 지우기와 내려받기

### 지우기

「Gemini 앱 활동」 페이지(`myactivity.google.com/product/gemini`)에서 지웁니다.[^activity]

- 기록 위 **「삭제」**를 누르면 **「전체 기간」·「지난 1시간」·「지난 1일」·「사용자설정 범위」** 중에서 고릅니다.[^activity]
- 날짜 옆이나 항목 옆 삭제 버튼으로 하루치나 한 건만 지울 수도 있습니다.[^activity]

**자동 삭제**도 정할 수 있습니다. 기본은 **18개월**이 지나면 지웁니다. 이 가이드의 화면에도 「18개월이 지난 활동 삭제」라고 보였습니다. 3개월, 36개월, 또는 「자동 삭제 안함」으로 바꿀 수 있습니다.[^activity][^report]

지워도 남는 것이 있습니다.

- **이미 사람이 검토한 대화는 지워지지 않고 최대 3년 보관됩니다.**[^hub]
- **공유한 대화를 지워도 공개 링크는 지워지지 않습니다.** 링크는 따로 지우세요([3장](03-chats.md#공유한-링크-지우기)).[^activity]
- 연결된 앱의 연결을 끊어도 Gemini 활동 기록은 지워지지 않습니다.[^hub]

### 내려받기

내 Gemini 기록을 파일로 받아 둘 수 있습니다. **Google 테이크아웃**(`takeout.google.com`)에서 Gemini에 쓰는 계정으로 로그인한 뒤, 「모두 선택 해제」를 누르고 Gemini 항목만 고릅니다.[^download]

- 메일로 받는 다운로드 링크는 **7일 동안** 열립니다.[^download]
- **내려받아도 Google 서버의 기록은 지워지지 않습니다.** 지우려면 위에서처럼 따로 지웁니다.[^download]

<Quiz id="ch309-delete" />

## 하면 안 되는 일, 믿으면 안 되는 일

### 이용 규칙

Google은 Gemini로 만들면 안 되는 것을 정해 두었습니다. 아동 성 착취물, 실존 인물의 성적 이미지, 스팸·사기, 위험하거나 불법인 활동, 혐오·괴롭힘, 사람을 속이는 거짓 콘텐츠 같은 것입니다.[^guidelines]
어기면 경고부터 일부 기능 제한, **Gemini 이용 정지, 다른 Google 서비스 이용 정지**까지 받을 수 있습니다.[^guidelines]

### 답을 그대로 믿지 않기

Gemini는 사람이 아닙니다. 스스로 생각하거나 감정을 느끼지 못하고, 패턴을 찾는 데 뛰어날 뿐입니다.[^genai]
그래서 **틀린 내용을 사실처럼 말할 수 있습니다**(환각).[^hub] **진단·치료·의료 조언이나 법률·금융 같은 전문 도움을 Gemini에 기대지 마세요.** 답은 참고용 정보일 뿐입니다.[^hub]
확인하는 습관은 [1단계 9장](../00-common/09-safety.md#확인하는-네-가지-습관)에 정리해 두었습니다.

### 아이와 회사 계정

- **만 13세 미만**(나라마다 다름) 자녀는 부모가 **Family Link**(가족 관리 앱)에서 허락해야 Gemini를 씁니다.[^child]
- **회사·학교 계정**은 규칙이 다릅니다. 회사가 쓰는 Google Workspace 등급에 따라, 대화와 올린 파일을 사람이 검토하지 않고 AI 학습에도 쓰지 않는 경우가 있습니다. 「활동 기록 보관」은 관리자만 끌 수 있습니다.[^work] 회사 계정이라면 회사의 AI 사용 규칙부터 확인하세요.

<Quiz id="ch309-rules" />

## 직접 해 보기

1. 「설정」 → 「활동」을 열어 「활동 기록 보관」이 켜져 있는지, 자동 삭제가 몇 개월인지 확인한다.
2. 자동 삭제 기간을 내게 맞게 고른다(예: 3개월).
3. 「삭제」 → 「지난 1시간」으로 방금 나눈 연습 대화를 지워 본다.
4. [3장](03-chats.md#공유한-링크-지우기)에서 배운 대로 「내 공개 링크」에 남은 링크가 없는지 확인한다.

**이어지는 과제** ([독서 모임 준비하기](../00-common/practice-kit.md)): 과제에 쓰는 회원 명단처럼 남의 개인정보가 든 파일은 임시 채팅에서만 다루거나, 이름을 "회원1"처럼 바꾼 뒤 올린다. 과제를 마치면 관련 대화를 지운다.

## 정리

- 로그인해서 쓰면 질문·올린 파일·연결된 앱 정보·위치 등이 저장된다. 채팅으로 광고를 보여 주지는 않는다.
- 일부 대화는 사람이 읽는다. 「활동 기록 보관」이 켜져 있으면 AI 학습에도 쓰인다. 기밀은 넣지 않는다.
- 「활동 기록 보관」은 만 18세 이상이면 기본으로 켜져 있다. 끄면 72시간만 보관되고 학습에 안 쓰이지만, 메모리·스킬·작업 등 여러 기능을 못 쓴다.
- 「Gemini 앱 활동」에서 기간을 골라 지우고, 자동 삭제(기본 18개월)를 바꾼다. 사람이 검토한 대화는 최대 3년 남는다.
- 테이크아웃으로 기록을 내려받을 수 있다. 내려받아도 서버 기록은 그대로다.
- 답은 틀릴 수 있다. 의료·법률·금융 판단은 전문가에게 맡긴다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Keep Activity | 킵 액티비티 (활동 기록 보관) | 내 Gemini 대화를 계정에 남겨 두는 설정 |
| Gemini Apps Activity | 제미나이 앱스 액티비티 (Gemini 앱 활동) | 내 대화 기록을 보고 지우는 페이지 |
| Auto-delete | 오토 딜리트 (자동 삭제) | 정한 기간이 지난 기록을 저절로 지우는 설정 |
| Human reviewer | 휴먼 리뷰어 (사람 검토자) | 서비스 개선을 위해 대화 일부를 읽는 사람 |
| Google Takeout | 구글 테이크아웃 | Google 서비스의 내 데이터를 내려받는 곳 |
| Family Link | 패밀리 링크 | 부모가 자녀의 Google 계정을 관리하는 앱 |

<ChapterDone :chapter="309" />

다음 장: [10장. 음성과 휴대폰](10-voice-mobile.md)

[^report]: Gemini 웹 화면(Google AI Pro, 한국어)에서 확인. 「설정」 → 「활동」을 누르면 새 탭에 myactivity.google.com 「Gemini 앱 활동」이 열리고, 설정 이름 「활동 기록 보관」, 상태 표시 「사용」, 설명 "이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다.", 자동 삭제 버튼 「18개월이 지난 활동 삭제」. (확인일 2026-10-30, `docs/reports/2026-10-30_Gemini-공식-자료.md` 「실제 화면에서 직접 확인」 절. 이 페이지에는 실제 대화 기록이 보여 캡처하지 않았다)
[^hub]: Google 도움말, 「Gemini Apps Privacy Hub」(한국어판 「Gemini 앱 개인 정보 보호 허브」). "What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (확인일 2026-10-31)
[^activity]: Google 도움말, 「Manage & delete your activity in Gemini Apps」(한국어판 「Gemini 앱에서 활동 관리 및 삭제하기」). "If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." 한국어판 이름 「사용 중지」「사용 중지 및 활동 삭제」「삭제」「전체 기간」「지난 1시간」「지난 1일」「사용자설정 범위」「자동 삭제 안함」. https://support.google.com/gemini/answer/13278892 (확인일 2026-10-31)
[^download]: Google 도움말, 「Download your Gemini Apps data」(한국어판 「Gemini 앱 데이터 다운로드하기」). "Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." 한국어판 이름 「모두 선택 해제」. https://support.google.com/gemini/answer/16920332 (확인일 2026-10-31)
[^guidelines]: Google 도움말, 「Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful」(한국어판 「Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기」). 금지 항목 제목 "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (확인일 2026-10-31)
[^genai]: Google 도움말, 「Learn about generative AI」(한국어판 「생성형 AI에 대해 자세히 알아보기」). "Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (확인일 2026-10-31)
[^child]: Google 도움말, 「Guide your child's Gemini Apps experience」(한국어판 「자녀의 Gemini 앱 사용 관리하기」). "A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (확인일 2026-10-31)
[^work]: Google 도움말, 「Use Gemini Apps with a work or school Google Account」(한국어판 「직장 또는 학교 Google 계정으로 Gemini 앱 사용하기」). "Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." (핵심 서비스로 제공되는 Workspace 등급의 설명) / "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (확인일 2026-10-31)
