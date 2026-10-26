# 1장. 시작하기 — 쓰는 곳, 가입, 요금제와 사용 한도

> **한 줄 요약**: Claude는 웹·컴퓨터 앱·휴대폰 앱에서 같은 계정으로 씁니다. 가입에는 이메일(또는 Google 계정)과
> 휴대폰 문자 인증이 필요합니다. 무료로 시작해서 한도가 자주 부족할 때만 유료 요금제를 생각하면 됩니다.

화면은 2026년 10월 웹 기준입니다. 휴대폰 앱이나 컴퓨터 앱은 메뉴 위치가 조금 다를 수 있습니다.

## Claude는 무엇이고 어디서 쓰나

Claude(클로드)는 Anthropic(앤트로픽)이라는 회사가 만든 **LLM**(대규모 언어 모델, [1단계 1장](../00-common/01-what-is-llm.md))입니다.[^start]
1단계에서 배운 잘 묻는 법은 Claude에도 그대로 통합니다. 이 장에서는 Claude라는 서비스에 들어가는 법만 다룹니다.

쓰는 곳은 세 가지입니다. 어디서 쓰든 계정은 하나입니다.

| 쓰는 곳 | 여는 법 | 필요한 것 |
|---|---|---|
| 웹 | 브라우저에서 claude.ai | 인터넷 브라우저 |
| 컴퓨터 앱 | 다운로드 페이지에서 받기 | macOS 13 이상, Windows 10 이상 |
| 휴대폰 앱 | 앱 스토어에서 받기 | iOS 18 이상, Android 8.0 이상 |

출처: Anthropic 도움말[^start][^desktop][^ios][^android]

컴퓨터 앱은 Linux(리눅스, 컴퓨터 운영체제의 하나)에서도 **베타**(정식 출시 전에 시험 중인 단계)로 쓸 수 있습니다.[^desktop]
처음이라면 웹에서 시작해 보세요. 설치할 것이 없어서 가장 쉽습니다.

쓰려면 두 가지 조건이 있습니다.[^start]

- **지원 지역**(서비스를 공식으로 제공하는 나라) 안에 있어야 합니다. 한국은 지원 지역 목록에 들어 있습니다.[^where]
- **만 18세 이상**이어야 합니다.

휴대폰 앱을 받을 때는 앱 스토어에서 「Claude by Anthropic」을 검색하세요.[^ios][^android]
아이폰 App Store에는 회사용 「Claude for Intune」도 있습니다. 회사가 따로 쓰라고 하지 않았다면 「Claude by Anthropic」을 받으면 됩니다.[^ios]
앱이 검색되지 않으면 지원하지 않는 지역·기기·운영체제 버전일 수 있습니다.[^android]
새 기능이 내 앱에만 안 보이면 앱 스토어에서 앱을 직접 업데이트해 보세요.[^update]

처음 들어가면 이렇게 물어보세요.

```
너는 어떤 일을 도와줄 수 있어? 직장인이 바로 써먹을 수 있는 예를 다섯 가지만 들어 줘.
```

<Quiz id="ch201-where" />

## 가입하고 로그인하기

claude.ai에 들어가 이메일 주소를 입력하세요. 그다음 「이메일로 계속」을 누르면 됩니다. Google 계정이 있으면 「Google로 계속」을 눌러도 됩니다.[^signup]
로그인할 때도 이 두 가지 방법만 있습니다.[^login]

<!-- 스크린샷 필요: claude.ai 로그인 전 첫 화면의 이메일 입력칸과 「이메일로 계속」「Google로 계속」 버튼 (웹) -->

**Claude에는 비밀번호가 없습니다.** Claude 계정 전용 비밀번호는 만들 수 없습니다.[^login]
이메일로 들어가면 「Claude.ai에 로그인하기 위한 보안 링크」(Secure link to log in to Claude.ai)라는 제목의 메일이 옵니다. 그 메일 속 링크를 누르면 로그인됩니다.[^login]
비밀번호를 외울 필요가 없으니 편합니다. 대신 **그 이메일 계정에 들어갈 수 있어야** 합니다.

알아 둘 점이 세 가지 있습니다.[^login]

1. **링크를 다른 기기에서 누르면 코드가 나옵니다.** 예를 들어 컴퓨터에서 로그인을 요청하고 메일은 휴대폰에서 열었다고 해 봅시다. 그러면 휴대폰에 인증 코드가 나옵니다. 그 코드를 처음 로그인을 요청한 컴퓨터에 입력하세요.
2. **메일이 안 오면 스팸함을 보세요.** @mail.anthropic.com 에서 온 메일을 찾으면 됩니다.
3. **기기마다 같은 이메일로 들어가세요.** 평소 쓰던 이메일로 로그인해야 같은 계정이 열립니다.

<Quiz id="ch201-login" />

## 휴대폰 문자 인증

처음 가입할 때는 **휴대폰 번호 인증**을 받습니다. 지원 지역의 휴대폰 번호를 입력하면 **6자리 숫자** 코드가 문자로 옵니다.[^phone]
이 단계는 **건너뛸 수 없습니다.** 모든 새 사용자가 거칩니다.[^phone]

<!-- 스크린샷 필요: 휴대폰 번호 입력 화면과 「코드 확인」 화면 (웹) -->

입력하기 전에 아래를 확인하세요.[^phone]

- **일반 휴대폰 번호만 됩니다.** 인터넷 전화(VoIP) 번호, Google Voice, 앱으로 만든 번호, 집 전화(유선전화)는 안 됩니다.
- **5분이 지나도 문자가 안 오면** 「다시 시도」를 누르세요.
- **번호 하나로 인증할 수 있는 계정은 3개까지**입니다.
- **한 번 인증한 번호는 나중에 바꿀 수 없습니다.** 그러니 오래 쓸 내 번호로 인증하세요. 잠깐 빌린 번호로 인증하면 나중에 바꿀 방법이 없습니다.

<Quiz id="ch201-phone" />

## 요금제 한눈에 보기

Claude에도 무료부터 회사용까지 여러 **요금제**(플랜, 돈을 내는 정도에 따라 쓸 수 있는 기능과 양이 다른 이용 방식)가 있습니다.[^pricing]

| 요금제 | 누구에게 | 요금(월, 미국 달러) |
|---|---|---|
| Free(무료) | 처음 써 보는 사람 | $0 |
| Pro | 매일 쓰는 사람 | $20 (연간 결제 시 월 $17꼴) |
| Max | 아주 많이 쓰는 사람 | 5x $100 · 20x $200 |
| Team · Enterprise | 회사 단위로 쓰는 곳 | 따로 |

출처: Anthropic 요금 페이지·도움말[^pricing][^pro][^max]

이 가격은 **미국 달러 기준**이고 **세금이 빠져 있습니다.**[^pricing] 내가 사는 나라에서는 그 나라 돈으로 표시될 수 있고, 세금도 나라마다 다릅니다.[^pro]
휴대폰 앱에서 결제하면 웹과 가격이 다를 수 있습니다.[^max] 한국에서 보이는 원화 가격은 이 가이드에서 확인하지 못했습니다. 결제하기 전에 [요금 페이지](https://claude.com/pricing)에서 직접 확인하세요.

### 요금제마다 무엇이 다른가

숫자보다 **"무엇이 달라지는지"** 를 알아 두면 고르기 쉽습니다.

| 달라지는 것 | 무료(Free) | 유료(Pro·Max) |
|---|---|---|
| **사용량** | 기본 | Pro는 무료의 5배 이상[^pricing] |
| **웹 검색·파일 만들기** | 된다[^pricing] | 된다 |
| **리서치**(긴 조사 보고서) | 안 된다 | 된다 ([6장](06-search.md))[^pricing] |
| **큰 모델**(Opus) | 못 고른다 | 고를 수 있다 ([2장](02-screen-tour.md))[^pricing] |
| **Cowork**(일을 통째로 맡기기) | 안 된다 | 된다 ([8장](08-cowork.md))[^desktop] |

Max는 Pro보다 사용량이 5배(5x) 또는 20배(20x)입니다. 더 긴 답을 받을 수 있고, 새 기능을 먼저 써 볼 수 있습니다.[^pricing]

결제 주기도 다릅니다. Pro는 월간·연간 중에 고릅니다. **Max는 월간 결제만** 됩니다.[^max]
연간 결제 할인 말고는 Pro·Max에 늘 적용되는 할인 가격이 없습니다. 가끔 기간을 정한 행사만 있습니다.[^pro]

<Quiz id="ch201-plans" />

## 사용 한도 — 5시간·주간·길이

Claude에는 **"하루 몇 번"처럼 정해진 메시지 수가 없습니다.** 얼마나 쓸 수 있는지는 대화의 길이와 복잡한 정도, 고른 모델, 쓰는 기능에 따라 달라집니다.[^pricing]
대신 한도가 세 가지 있습니다.

| 한도 | 뜻 | 누구에게 |
|---|---|---|
| **세션 한도** | 5시간마다 다시 채워지는 사용량 | 모든 요금제 |
| **주간 한도** | 일주일마다 다시 채워지는 사용량 | 유료 요금제 |
| **길이 한도** | 대화 하나에 담을 수 있는 양 | 모든 요금제 |

출처: Anthropic 도움말[^start][^limits]

**세션 한도와 주간 한도**는 쓴 양을 재는 통입니다. 주간 한도는 계정마다 정해진 요일·시각에 다시 채워집니다.[^pro]
웹·컴퓨터 앱·휴대폰 앱에서 쓴 양은 **한 통에 합쳐서** 셉니다. 휴대폰으로 옮겨 가도 한도가 새로 생기지 않습니다.[^limits][^pricing]

한도가 가까워지면 「세션 제한에 접근 중」이나 「주간 제한에 접근 중」이라는 경고가 뜹니다.[^errors] 한도에 닿으면 언제 다시 쓸 수 있는지 시각을 알려 줍니다.[^errors]
그때는 그 시각까지 기다리거나 요금제를 올리면 됩니다.[^limits] 유료 요금제는 설정의 「사용량」(Usage) 화면에서 얼마나 썼는지 막대로 볼 수 있습니다.[^best] 한국어 도움말에는 「사용」이라고 적힌 곳도 있습니다.

**길이 한도**는 Claude가 대화 하나에서 다룰 수 있는 양입니다. 1단계에서 배운 [컨텍스트 윈도우](../00-common/01-what-is-llm.md#_3-한-번에-볼-수-있는-양에-한계가-있다-—-컨텍스트-윈도우)와 같은 말입니다.[^limits]
「메시지가 이 채팅의 길이 제한을 초과합니다」로 시작하는 안내가 뜨면 파일을 줄이거나 새 대화를 시작하세요.[^errors]
대화가 아주 길어지면 Claude가 앞부분을 저절로 요약하며 이어 갈 때가 있습니다. 이때 「생각을 정리 중」이라는 표시가 보입니다.[^limits]
이렇게 긴 대화는 사용량을 더 씁니다. 주제가 바뀌면 [새 대화](../00-common/06-conversation.md#언제-새-대화를-시작하나)를 여는 편이 낫습니다.[^limits]

한도를 아끼는 요령도 있습니다.[^best]

- **관련된 질문은 한 메시지에 모으세요.** 세 번 나눠 묻는 것보다 한 번에 묻는 편이 덜 씁니다.
- **보내기 전에 한 번 다시 읽으세요.** 다시 묻는 횟수가 줄어듭니다.
- **자주 쓰는 자료는 프로젝트에 넣어 두세요**([7장](07-projects-tools.md)). 프로젝트 자료는 다시 쓸 때 한도를 덜 씁니다.

예를 들어 질문을 따로 세 번 보내지 말고 이렇게 묶어 보세요.

```
다음 세 가지를 한 번에 답해 줘.
1. 이 회의록을 다섯 줄로 요약해 줘.
2. 정해진 일과 담당자를 표로 정리해 줘.
3. 참석자에게 보낼 짧은 안내 메일 초안을 써 줘.
(회의록 붙여 넣기)
```

<Quiz id="ch201-limits" />

## 유료로 바꾸기 전에 알아 둘 것

처음부터 유료로 시작할 필요는 없습니다. **무료로 시작해서 한도에 자주 걸릴 때 올리는 것**이 가장 무난합니다.

**웹에서 가입하는 법**은 이렇습니다.[^signup]

1. 왼쪽 아래 내 이름(또는 이름 첫 글자)을 누르고 「설정」을 고릅니다.
2. 「청구」(Billing)로 가서 「플랜 업그레이드」를 누릅니다. 한국어 도움말에는 「결제」라고 적힌 곳도 있습니다.
3. 월간·연간 중 결제 주기를 고르고, 결제 정보를 넣은 뒤 「구독」을 누릅니다.

휴대폰 앱에서는 오른쪽 위 이름 첫 글자를 누르고 「Pro로 업그레이드」를 고릅니다. 앱 스토어 결제(인앱 결제)로 진행됩니다.[^ios-pro][^android-pro]

<!-- 스크린샷 필요: 설정 → 「청구」 화면의 「플랜 업그레이드」 버튼 위치 (웹) -->

결제 전에 아래 내용은 꼭 알아 두세요.

- **구독은 저절로 이어집니다.** 기본으로 결제 기간이 끝날 때마다 자동 갱신됩니다.[^signup]
- **취소는 가입한 곳에서 합니다.** 웹·컴퓨터 앱에서 가입했다면 설정 → 「청구」의 「취소」 버튼을 누릅니다. 휴대폰 앱에서 가입했다면 앱의 이름 첫 글자 → 「청구」 → 「구독 관리」로 갑니다. 이때 결제는 Apple이나 Google이 처리합니다.[^cancel]
- **결제일 24시간 전까지 취소하세요.** 그래야 다음 결제 금액이 나가지 않습니다. 취소는 지금 결제 기간이 끝날 때 적용됩니다.[^cancel]
- **앱을 지워도 구독은 계속됩니다.** 휴대폰에서 앱을 삭제해도 구독이 저절로 취소되지 않습니다.[^ios]
- **취소해도 대화는 남습니다.** 채팅·프로젝트·파일은 그대로 있고, 기간이 끝나면 무료 요금제로 바뀝니다.[^pricing]
- **환불은 원칙적으로 안 됩니다.** 약관이나 그 나라 법이 정한 경우만 예외입니다.[^pricing]
- **웹 결제는 신용카드·체크카드만** 받습니다.[^billing]
- **결제일은 직접 바꿀 수 없습니다.** 바꾸고 싶으면 취소한 뒤 원하는 날에 다시 구독해야 합니다.[^billing]
- **결제했는데 무료로 보이면 다시 결제하지 마세요.** 먼저 다른 이메일로 로그인하지 않았는지 보세요. 결제가 실패하지 않았는지도 확인하세요.[^billing]

영수증은 설정 → 「청구」에서 볼 수 있고 메일로도 옵니다. 메일함에서 "Your receipt from Anthropic"을 검색해 보세요.[^billing]

어느 요금제가 맞는지 모르겠다면 Claude에게 내 사용 습관을 알려 주고 물어보세요. 단, 요금과 조건은 AI의 답이 아니라 요금 페이지에서 확인하세요([1단계 9장](../00-common/09-safety.md)).

```
나는 하루에 Claude를 3~4번, 주로 회사 메일 다듬기와 회의록 요약에 써.
가끔 PDF 파일을 올려서 요약도 해. 무료로 써 보다가 어떤 순간에 유료가 필요해지는지,
내가 스스로 판단할 수 있는 기준을 세 가지로 알려 줘.
```

<Quiz id="ch201-billing" />

## 안 될 때 먼저 해 볼 것

답이 안 오거나, 오류 문구가 뜨거나, 로그인이 안 될 수 있습니다. 그럴 때는 아래 순서로 해 보세요.

1. **「예상치 못한 용량 제약으로 인해…」라는 문구는 고장이 아닙니다.** 사람이 몰려 붐빈다는 뜻입니다. 몇 분 뒤에 다시 해 보세요. 이런 혼잡은 서비스 상태 페이지에 올라오지 않습니다.[^errors]
2. **진짜 고장인지는 status.claude.com**(Anthropic 서비스 상태 페이지)에서 확인하세요.[^errors]
3. **로그인 오류가 나면** VPN(인터넷 주소를 바꿔 주는 프로그램)과 브라우저 확장 프로그램을 끄세요. 브라우저의 캐시와 쿠키(방문한 사이트가 남겨 둔 임시 기록)를 지우는 것도 방법입니다.[^errors]
4. **로그인 메일이 안 오면** 스팸함에서 @mail.anthropic.com 을 찾아보세요.[^login]

그래도 안 되면 고객 지원에 물어보세요. **전화 지원은 없고, 글로만** 주고받습니다.[^support]

- **로그인한 상태라면** 왼쪽 아래 내 이름(또는 이름 첫 글자) → 「도움말 받기」를 누르세요. **Fin**(Anthropic의 AI 지원 봇)과 대화가 시작됩니다. Fin과 대화해도 사용 한도는 줄지 않습니다.[^support]
- **로그인 자체가 안 되면** 도움말 센터(support.claude.com) 오른쪽 아래 메시지 아이콘을 누르고 「로그인할 수 없습니다」를 고르세요.[^support]
- **유료(Pro·Max)라면** Fin이 풀지 못한 문제를 사람 지원팀이 이어서 봅니다. 무료는 대부분 도움말 문서와 Fin까지만 지원합니다.[^support]
- **같은 문제로 문의를 또 열지 마세요.** 원래 대화에 답하면 됩니다. 답장은 메신저와 계정 이메일로 함께 오니 창을 닫아도 됩니다.[^support]

화면을 캡처해 보낼 때는 다른 개인정보가 보이지 않게 하세요.

<Quiz id="ch201-trouble" />

## 직접 해 보기

1. claude.ai에 들어가 이메일로 가입하고, 로그인 메일의 링크를 눌러 들어간다. 메일이 안 오면 스팸함을 본다.
2. 휴대폰 문자 인증을 마친다. 오래 쓸 내 번호인지 한 번 더 확인한다.
3. "너는 어떤 일을 도와줄 수 있어?"라고 물어본다.
4. 휴대폰에 「Claude by Anthropic」 앱을 설치해 같은 이메일로 로그인하고, 컴퓨터에서 나눈 대화가 보이는지 확인한다.

## 정리

- Claude는 웹(claude.ai)·컴퓨터 앱·휴대폰 앱에서 같은 계정으로 쓴다. 만 18세 이상, 지원 지역(한국 포함)에서 쓸 수 있다.
- 가입과 로그인은 이메일 또는 Google 계정으로 한다. 비밀번호 대신 로그인 링크가 담긴 메일을 받는다.
- 처음 가입할 때 휴대폰 문자 인증을 거친다. 한 번 인증한 번호는 바꿀 수 없다.
- 요금제는 Free·Pro·Max가 개인용이다. 가격은 미국 달러·세금 별도이니 요금 페이지에서 확인한다.
- 한도는 5시간 세션 한도, (유료) 주간 한도, 대화 하나의 길이 한도 세 가지다. 정해진 메시지 수는 없다.
- 구독은 자동 갱신된다. 가입한 곳에서 결제일 24시간 전까지 취소한다. 앱을 지워도 구독은 계속된다.
- 「용량 제약」 문구는 혼잡이다. 진짜 고장은 status.claude.com 에서 본다. 지원은 「도움말 받기」의 Fin부터 시작한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Supported Location | 서포티드 로케이션 (지원 지역) | 서비스를 공식으로 제공하는 나라·지역 |
| Beta | 베타 | 정식 출시 전에 시험 중인 단계 |
| Plan | 플랜 (요금제) | 돈을 내는 정도에 따라 기능과 사용량이 다른 이용 방식 |
| Subscription | 서브스크립션 (구독) | 매달 또는 매년 자동으로 결제되는 이용 계약 |
| Session Limit | 세션 리밋 (세션 한도) | 5시간마다 다시 채워지는 사용량 |
| Weekly Limit | 위클리 리밋 (주간 한도) | 유료 요금제에서 일주일마다 다시 채워지는 사용량 |
| Length Limit | 렝스 리밋 (길이 한도) | 대화 하나에 담을 수 있는 양. 컨텍스트 윈도우와 관련 있다 |
| VoIP | 브이오아이피 | 인터넷으로 거는 전화. 문자 인증에 쓸 수 없다 |
| Fin | 핀 | Anthropic 고객 지원의 AI 봇 |

<ChapterDone :chapter="201" />

다음 장: [2장. 화면 둘러보기](02-screen-tour.md)

[^start]: Anthropic 도움말, 「Get started with Claude」. "Claude is a large language model (LLM) built by Anthropic." / "Web: Visit claude.ai to chat with Claude in a web browser." / "You must be in one of our supported locations to access Claude." / "You must be at least 18 years old to use our services." / "there is a session-based usage limit that will reset every five hours." https://support.claude.com/en/articles/8114491 (확인일 2026-10-26)
[^where]: Anthropic 도움말, 「Where can I access Claude?」. 지원 지역 목록에 "South Korea" 포함. https://support.claude.com/en/articles/8461763 (확인일 2026-10-26)
[^desktop]: Anthropic 도움말, 「Install Claude Desktop」. "Claude Desktop is available on macOS, Windows, and Linux (beta)." / "macOS: macOS 13 (Ventura) or higher" / "Claude Cowork is available for all paid plans (Pro, Max, Team, Enterprise)" https://support.claude.com/en/articles/10065433 (확인일 2026-10-26)
[^ios]: Anthropic 도움말, 「Install Claude for iOS」. "You can install the Claude app onto your iOS device by navigating to the App Store and searching for “Claude by Anthropic”" / "If your organization hasn't asked you to use Claude for Intune, install Claude by Anthropic." / "We currently support iOS version 18.0 and above, and iPadOS 18.0 and above." / "your subscription will not be automatically canceled." https://support.claude.com/en/articles/9266462 (확인일 2026-10-26)
[^android]: Anthropic 도움말, 「Install Claude for Android」. "We currently support Android 8.0 Oreo and above." / "you may be located in an unsupported region, using an unsupported device, or using an unsupported version of Android." https://support.claude.com/en/articles/9612887 (확인일 2026-10-26)
[^update]: Anthropic 도움말, 「How to update Claude for iOS」. "you may need to update your mobile app manually" https://support.claude.com/en/articles/11825384 (확인일 2026-10-26)
[^signup]: Anthropic 도움말, 「How do I sign up for the Pro plan?」. "Enter your email address and click “Continue with email” or click “Continue with Google” if applicable." / "Navigate to Settings > Billing and click the “Upgrade plan” button." / "Choose between monthly and annual billing periods." / "your subscription will be set to automatically renew at the end of each billing period (monthly or annual) by default." https://support.claude.com/en/articles/8325609 (확인일 2026-10-26)
[^login]: Anthropic 도움말, 「Log in to your Claude account」. "you will see two different options for logging in to your Claude account." / "This will send you an email with the subject line “Secure link to log in to Claude.ai” and a login link." / "You should enter this code on the original device where you requested the login email to authenticate." / "It’s not possible to create a dedicated password for your Claude account at this time." / "enter the same email address you use to log in on your usual device." / "Check your spam and junk folders for emails from @mail.anthropic.com." https://support.claude.com/en/articles/13189465 (확인일 2026-10-26)
[^phone]: Anthropic 도움말, 「Verify your phone number」. "you’ll be asked to enter your phone number from a supported location to receive a verification code via text message." / "We’ll send a six-digit verification code to your phone number via text message." / "you cannot use VoIP numbers, Google Voice, phone numbers created using apps, landlines" / "We require phone verification for all new users, and there isn’t a way to skip this step." / "if it has been more than five minutes, click "Try again" to reset the modal" / "We only allow a maximum of three Claude accounts to be verified with the same phone number." / "There isn’t a way to change your phone number associated with your Claude account once it has been verified." https://support.claude.com/en/articles/8287232 (확인일 2026-10-26)
[^pricing]: Anthropic 요금 페이지. "Per month with annual subscription discount ( $200 billed up front). $20 if billed monthly." / "Prices shown don’t include applicable tax." / "Search the web, create files, and run code" / "Pro gives you at least 5x more usage per 5-hour session than Free." / "Higher output limits for all tasks" / "How much you can do depends on the length and complexity of your conversations, the model you choose, and the features you use, so there's no fixed message count." / "Your activity across Claude on web, desktop, mobile, and Claude Code all draws from the same pool." / "Canceling doesn't delete your data. Your chats, projects, and files stay with your account" / "For Pro and Max, your account moves to the Free plan once the period ends." / "Payments are generally non-refundable, except where our Consumer Terms of Service say otherwise or where local law requires it." 비교표의 Research 행과 Opus 행은 Free 없음, Pro부터 있음. https://claude.com/pricing (확인일 2026-10-26)
[^pro]: Anthropic 도움말, 「What is the Pro plan?」. "The Pro plan is available for $20 per month (US), with pricing in your local currency where supported." / "Annual subscriptions are billed once yearly at a discounted rate." / "We don’t offer standard discounted pricing for individual plans (Pro and Max)." / "Weekly limits reset at a fixed time each week that is assigned to your account." https://support.claude.com/en/articles/8325606 (확인일 2026-10-26)
[^max]: Anthropic 도움말, 「What is the Max plan?」. "Max 5x: $100 per month" / "These prices are for web subscriptions only. Mobile pricing may vary depending on your app platform." / "The Max plan is currently available as a monthly subscription only." https://support.claude.com/en/articles/11049741 (확인일 2026-10-26)
[^limits]: Anthropic 도움말, 「How do usage and length limits work?」. "Paid plans have two types of usage limits: a session limit that resets every five hours, and weekly limits that reset once every week." / "your usage of all different Claude product surfaces (claude.ai, Claude Code, Claude Desktop) counts towards the same usage limit." / "If you hit your session limit or weekly limit, you can wait for it to reset or upgrade your plan." / "Length limits relate to Claude's context window—the amount of information Claude can work with in a single chat." / "Claude summarizes earlier messages to continue the conversation seamlessly." / "Longer conversations that trigger automatic context management consume more of your usage limit." https://support.claude.com/en/articles/11647753 (확인일 2026-10-26)
[^best]: Anthropic 도움말, 「Usage limit best practices」. "you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." / "If you have multiple related tasks or questions, group them in a single message." / "Content in projects is cached and counts less against your limits when reused." https://support.claude.com/en/articles/9797557 (확인일 2026-10-26)
[^errors]: Anthropic 도움말, 「Troubleshoot Claude error messages」. "“Approaching session limit” or "Approaching weekly limit."" / "you’ll see an error message letting you know when you can use Claude again" / "Try attaching fewer or smaller files or starting a new conversation." / "Ensure you’re not using a VPN when accessing Claude." / "The system is functioning normally but managing high demand across all users." / "Capacity issues will not appear on our status page" / "To check for confirmed incidents, visit status.claude.com" https://support.claude.com/en/articles/12466728 (확인일 2026-10-26)
[^ios-pro]: Anthropic 도움말, 「How do I sign up for Claude Pro on the Claude app for iOS?」. "click on your initials in the upper right corner" / "From your settings page, click on “Upgrade to Pro” and follow the payment instructions to complete your in-app purchase." https://support.claude.com/en/articles/9266495 (확인일 2026-10-26)
[^android-pro]: Anthropic 도움말, 「How do I sign up for Claude Pro on Claude for Android?」. "To sign up for Claude Pro using the Claude app for Android, open the app on your device and click on your initials in the upper right corner." https://support.claude.com/en/articles/9612892 (확인일 2026-10-26)
[^cancel]: Anthropic 도움말, 「Cancel your Pro or Max subscription」. "Your cancellation will take effect at the end of your current billing period" / "cancel your subscription at least 24 hours before your next billing date." / "Navigate to Settings > Billing and click the “Cancel” button." / "Select “Manage subscription” and follow the prompts for cancellation." https://support.claude.com/en/articles/8325617 (확인일 2026-10-26)
[^billing]: Anthropic 도움말, 「Paid plan billing FAQs」. "For subscriptions purchased on the web, we only accept credit or debit cards." / "search by the subject line "Your receipt from Anthropic."" / "there isn't a direct way to change your subscription billing date." / "You've logged in with a different email." https://support.claude.com/en/articles/8325618 (확인일 2026-10-26)
[^support]: Anthropic 도움말, 「How to get support」. "Support is provided in writing through the support messenger and email. We don't offer phone support." / "Click your initials or name in the lower left corner and select “Get help” from the menu." / "Chatting with Fin will not impact Claude usage or spend limits." / "Further assistance from our Product Support team" / "Select "I can't login."" / "Opening a second request for the same problem creates a duplicate that has to be re-triaged" / "Replies are delivered to the messenger and to your account email, so you won't miss one." https://support.claude.com/en/articles/9015913 (확인일 2026-10-26)
