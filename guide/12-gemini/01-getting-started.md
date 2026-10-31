# 1장. 시작하기 — 쓰는 곳, 로그인, 요금제와 사용 한도

> **한 줄 요약**: Gemini는 Google 계정 하나로 웹·휴대폰 앱·컴퓨터 앱에서 씁니다. 따로 가입할 것이 없고,
> 이미 쓰는 Google 계정으로 로그인하면 됩니다. 무료로 시작해서 한도가 자주 부족할 때만 유료 요금제를 생각하면 됩니다.

화면은 2026년 10월 웹 기준이고, 그림은 유료 요금제(Google AI Pro) 한국어 화면입니다. 무료 계정이나 휴대폰 앱은 메뉴가 조금 다를 수 있습니다.

## Gemini는 무엇이고 어디서 쓰나

Gemini(제미나이)는 Google이 만든 AI 서비스입니다. 1단계에서 배운 **LLM**(대규모 언어 모델, [1단계 1장](../00-common/01-what-is-llm.md))으로 움직입니다.
1단계에서 배운 잘 묻는 법은 Gemini에도 그대로 통합니다. 이 장에서는 Gemini라는 서비스에 들어가는 법만 다룹니다.

쓰는 곳은 웹, 휴대폰 앱, 컴퓨터 앱입니다. 어디서 쓰든 같은 Google 계정으로 들어갑니다.

| 쓰는 곳 | 여는 법 | 필요한 것 |
|---|---|---|
| 웹 | 브라우저에서 gemini.google.com | Chrome·Safari·Firefox·Opera·Edge |
| 안드로이드 앱 | Google Play에서 받기 | Android 9 이상, RAM 2GB 이상 |
| Mac 앱 | gemini.google/mac 에서 받기 | macOS 15 이상, Apple 칩 |
| Windows 앱 | gemini.google/desktop 에서 받기 | Windows 10 이상 |

출처: Google 도움말[^start][^mobile][^mac][^windows]

아이폰·아이패드에서는 App Store에서 Gemini 앱을 받으면 됩니다.[^mobile]
처음이라면 웹에서 시작해 보세요. 설치할 것이 없어서 가장 쉽습니다.

쓰려면 두 가지 조건이 있습니다.

- **지원하는 나라**에 있어야 합니다. 한국은 웹 앱과 휴대폰 앱의 지원 국가 목록에 들어 있고, 한국어도 지원합니다.[^where][^mobile]
- **만 13세 이상**이어야 합니다(개인 계정 기준, 나라마다 기준 나이가 다를 수 있음). 회사 계정은 만 18세 이상입니다.[^signin]

다만 유료 요금제와 일부 기능(맞춤설정, 다른 AI에서 가져오기 등)은 **만 18세 이상**만 쓸 수 있습니다.[^plans][^customize]
자녀 계정처럼 Family Link(가족 관리 기능)로 관리되는 계정은 웹에서 Gemini를 쓸 수 없습니다. 휴대폰 앱은 부모가 Family Link 설정에서 자녀의 사용을 끌 수 있습니다.[^signin]

처음 들어가면 이렇게 물어보세요.

```
너는 어떤 일을 도와줄 수 있어? 직장인이 바로 써먹을 수 있는 예를 다섯 가지만 들어 줘.
```

<Quiz id="ch301-where" />

## Google 계정으로 로그인하기

Gemini에는 따로 가입하는 과정이 없습니다. **Gmail이나 YouTube에 쓰는 Google 계정**으로 로그인하면 됩니다.[^start]
gemini.google.com 에 들어가 오른쪽 위 「로그인」을 누르세요.[^signin]

![로그인하지 않은 gemini.google.com 첫 화면. 가운데 「개인 AI 어시스턴트인 Gemini를 만나 보세요」와 입력창 「Gemini에게 물어보기」, 입력창 오른쪽 모델 표시 「Flash-Lite」, 왼쪽 옆 메뉴에 「활동을 저장하려면 로그인하세요.」, 오른쪽 위와 왼쪽 아래에 「로그인」 버튼이 있다](assets/shot-01-logged-out.png)

로그인하기 전 화면입니다. 옆 메뉴에 「활동을 저장하려면 로그인하세요.」라는 안내가 보이고, 모델은 「Flash-Lite」로 정해져 있습니다.[^screen-out]

로그인하지 않아도 웹에서는 간단한 질문 정도는 할 수 있습니다. 하지만 못 하는 것이 많습니다.[^start]

| 로그인 안 함 | 로그인함 |
|---|---|
| 글로 묻고 답하기 | 글로 묻고 답하기 |
| 지난 대화 다시 보기 ✗ | 지난 대화 다시 보기 |
| 파일 올리기·이미지 만들기 ✗ | 파일 올리기·이미지 만들기 |
| Gmail·Drive 같은 Google 앱 연결 ✗ | Google 앱 연결 |

출처: Google 도움말[^start]

대화를 남겨 두고 다시 보려면 로그인하세요. 안드로이드 휴대폰 앱은 처음부터 로그인해야 쓸 수 있습니다.[^start]

로그아웃하려면 왼쪽 메뉴에서 프로필 사진(또는 이름 첫 글자)을 누르고 「로그아웃」을 고릅니다.[^signin]
여러 사람이 같이 쓰는 컴퓨터라면 다 쓴 뒤 꼭 로그아웃하세요. 로그인한 채로 두면 다음 사람이 옆 메뉴에서 내 대화를 열어 볼 수 있습니다.

<Quiz id="ch301-login" />

## 요금제 한눈에 보기

Gemini에도 무료부터 여러 **요금제**(돈을 내는 정도에 따라 쓸 수 있는 기능과 양이 다른 이용 방식)가 있습니다.
유료 요금제는 Google AI 요금제라고 부르고, **Google One**(Google의 유료 구독 서비스)으로 가입합니다.[^upgrade]

| 요금제 | 월 요금(한국) | 사용량 | 저장공간 |
|---|---|---|---|
| 무료 | ₩0 | 기본 | — |
| Google AI Plus | ₩7,500 | 기본의 2배 | 400GB |
| Google AI Pro | ₩29,000 | 기본의 4배 | 5TB |
| Google AI Ultra | ₩119,000부터 | Pro의 5배 또는 20배 | 20TB부터 |

출처: Google 요금제 페이지(대한민국)와 도움말[^plans-screen][^limits]

눈여겨볼 점이 하나 있습니다. Google AI 요금제에는 **Google 저장공간**이 함께 들어 있습니다. 이 공간은 Drive·Gmail·Google 포토가 함께 씁니다.[^upgrade]
그래서 사진이나 메일 때문에 저장공간을 이미 사서 쓰고 있다면, 요금제를 고를 때 함께 따져 보세요.

Ultra는 두 가지입니다. 「Ultra 5배」(월 ₩119,000, 20TB)와 「Ultra 20배」(월 ₩300,000, 30TB)입니다.[^plans-screen]
가격은 바뀔 수 있고 기간 한정 할인도 자주 있습니다. 결제하기 전에 [요금제 페이지](https://one.google.com/about/google-ai-plans/)에서 직접 확인하세요.

### 요금제마다 무엇이 다른가

숫자보다 **"무엇이 달라지는지"** 를 알아 두면 고르기 쉽습니다.

| 달라지는 것 | 무료 | 유료 |
|---|---|---|
| **사용량** | 기본 | Plus 2배, Pro 4배[^limits] |
| **한 번에 읽는 양** | 약 3만 2천 토큰 | Plus 12만 8천, Pro·Ultra 100만 토큰[^limits] |
| **모델 직접 고르기** | 못 고른다 | 고를 수 있다 ([2장](02-screen-tour.md))[^models] |
| **가장 큰 모델**(Argon) | 안 된다 | Pro·Ultra[^plans] |

**한 번에 읽는 양**은 1단계에서 배운 [컨텍스트 윈도우](../00-common/01-what-is-llm.md#_3-한-번에-볼-수-있는-양에-한계가-있다-—-컨텍스트-윈도우)입니다. 토큰은 AI가 글을 세는 단위입니다.
100만 토큰이면 글로 약 1,500쪽을 한 번에 읽을 수 있습니다.[^limits] 긴 보고서나 책 한 권을 통째로 올려 묻고 싶을 때 차이가 납니다.

Pro 요금제를 가족 요금제로 쓰면, 가족 구성원도 추가 비용 없이 AI 기능을 씁니다.[^plans]

<Quiz id="ch301-plans" />

## 사용 한도 — 5시간·주간·읽는 양

Gemini의 한도는 **"하루 몇 번" 같은 횟수가 아니라 쓴 양으로 셉니다.** 질문이 얼마나 복잡한지, 어떤 모델과 기능을 쓰는지, 대화가 얼마나 긴지를 함께 셉니다.[^limits]
쓴 양은 **5시간마다** 다시 채워지고, 따로 **주간 한도**가 있습니다.[^limits]

어떤 일이 사용량을 많이 쓰는지 알아 두면 아낄 수 있습니다.[^limits]

| 하는 일 | 쓰는 양 |
|---|---|
| 짧은 질문 하나 | 아주 적다 |
| 길게 이어진 대화 | 보통 |
| Deep Research(긴 조사 보고서) | 많다 |
| 이미지·음악·영상 만들기 | 많다(영상이 가장 많다) |

출처: Google 도움말[^limits]

길게 이어진 대화가 더 쓰는 이유가 있습니다. Gemini는 답할 때마다 앞의 대화를 다시 읽습니다.[^limits]
그래서 **주제가 바뀌면 새 채팅을 여세요.** 긴 대화를 다시 읽지 않아도 되니 사용량이 줄어듭니다([1단계 6장](../00-common/06-conversation.md#언제-새-대화를-시작하나)).[^limits]

한도에 가까워지면 알림이 뜨고, 한도에 닿으면 언제 다시 채워지는지 알려 줍니다.[^limits]
유료 요금제라면 한도에 닿아도 가벼운 모델(Flash-Lite)로 대화를 이어 갈 수 있습니다. 무료라면 다시 채워질 때까지 기다리면 됩니다.[^limits]
무료 계정은 사람이 몰리는 시간에 Deep Research 같은 기능을 잠깐 못 쓸 수도 있습니다.[^limits]

얼마나 썼는지는 왼쪽 아래 「설정」 → 「사용량 한도」에서 볼 수 있습니다.[^limits][^screen]

![설정 → 「사용량 한도」 화면. 제목 옆에 요금제 표시 「PRO」, ① 「현재 사용량」 막대와 「오후 2:55에 초기화」, ② 「주간 한도」와 「11월 1일 오후 7:55에 초기화」, ③ 「AI Ultra(으)로 사용량 5배 늘리기 · ₩119,000/월」과 「업그레이드」 버튼에 빨간 번호가 붙어 있다](assets/shot-07-usage-marked.png)

유료 요금제(Pro) 화면입니다. **빨간 번호는 아래 목록의 번호와 같은 곳입니다.**[^screen]

- ① 「현재 사용량」: 5시간마다 다시 채워지는 사용량입니다. 얼마나 썼는지와 언제 다시 채워지는지 시각이 나옵니다.
- ② 「주간 한도」: 일주일 단위 사용량입니다. 다시 채워지는 날짜와 시각이 따로 나옵니다.
- ③ 더 높은 요금제로 올리는 안내입니다.

예를 들어 질문을 따로 세 번 보내지 말고 이렇게 묶어 보세요. 한 번에 보내면 앞 대화를 다시 읽는 횟수가 줄어 사용량을 아낄 수 있습니다.

```
다음 세 가지를 한 번에 답해 줘.
1. 이 회의록을 다섯 줄로 요약해 줘.
2. 정해진 일과 담당자를 표로 정리해 줘.
3. 참석자에게 보낼 짧은 안내 메일 초안을 써 줘.
(회의록 붙여 넣기)
```

<Quiz id="ch301-limits" />

## 유료로 바꾸기 전에 알아 둘 것

처음부터 유료로 시작할 필요는 없습니다. **무료로 시작해서 한도에 자주 걸릴 때 올리는 것**이 가장 무난합니다.

유료로 바꾸는 길은 이렇습니다.[^upgrade]

1. gemini.google.com 왼쪽 아래 「설정」을 누릅니다.
2. 「구독 보기」(요금제가 없는 계정에서 보이는 이름)를 누르고 원하는 Google AI 요금제를 고릅니다.
3. 결제 수단을 고르거나 새로 넣고 구독합니다.

결제는 Google One에서 처리됩니다. 그래서 요금제를 바꾸거나 취소하는 곳도 Google One입니다.[^upgrade]

![왼쪽 아래 톱니바퀴 「설정」을 누르면 열리는 메뉴. ① 「계정」 묶음(「사용량 한도」「구독 관리」「Google AI Ultra(으)로 업그레이드」), ② 「환경설정」 묶음, ③ 「데이터 및 개인 정보 보호」 묶음, ④ 톱니바퀴 「설정」 버튼에 빨간 번호가 붙어 있다. 이름은 예시로 바꾼 화면이다](assets/shot-06-settings-marked.png)

이름과 대화 제목은 예시로 바꾼 화면입니다. ④ 톱니바퀴를 누르면 메뉴가 열리고, 맨 위 ① 「계정」 묶음에 「사용량 한도」와 「구독 관리」가 있습니다.[^screen] 나머지 묶음은 [2장](02-screen-tour.md)에서 다룹니다.

결제 전에 아래 내용은 꼭 알아 두세요.

- **취소는 언제든지 할 수 있습니다.**[^plans] 「설정」 → 「구독 관리」로 들어가 Google One 설정에서 「멤버십 취소」를 누릅니다.[^upgrade][^screen]
- **요금제를 바꿀 때도 Google One에서 합니다.** 「멤버십 관리」 → 「멤버십 요금제 변경」에서 올리거나 내립니다.[^upgrade]
- **요금제가 끝나면 저장공간도 함께 줄어듭니다.** 도움말은 Pro를 예로 들어, 늘어난 Drive·Gmail·포토 저장공간과 Gmail·Docs 속 Gemini 같은 혜택을 더 쓸 수 없다고 안내합니다.[^upgrade] 저장공간을 많이 쓰고 있었다면 취소 전에 확인하세요.
- **유료가 끝나면 Pro로 새 대화를 시작하거나, Pro로 만든 대화를 이어 갈 수 없습니다.**[^upgrade]
- **회사·학교 계정은 이 요금제에 가입할 수 없습니다.** 개인 Google 계정만 가입합니다.[^plans]

어느 요금제가 맞는지 모르겠다면 Gemini에게 내 사용 습관을 알려 주고 물어보세요. 단, 요금과 조건은 AI의 답이 아니라 요금제 페이지에서 확인하세요([1단계 9장](../00-common/09-safety.md)).

```
나는 하루에 Gemini를 3~4번, 주로 회사 메일 다듬기와 회의록 요약에 써.
가끔 PDF 파일을 올려서 요약도 해. 무료로 써 보다가 어떤 순간에 유료가 필요해지는지,
내가 스스로 판단할 수 있는 기준을 세 가지로 알려 줘.
```

<Quiz id="ch301-billing" />

## 안 될 때 먼저 해 볼 것

답이 안 오거나, 오류 문구가 뜨거나, 로그인이 안 될 수 있습니다. 그럴 때는 아래 순서로 해 보세요.[^errors]

1. **같은 질문을 다시 보내 보세요.** 그래도 안 되면 새 채팅에서 해 봅니다.
2. **올린 파일이 있으면 빼고** 글로만 물어보세요.
3. **인터넷 연결을 확인하고 5분쯤 기다려** 보세요. 사람이 몰리면 잠깐 안 될 수 있습니다.
4. **페이지를 새로고침하거나 앱을 다시 시작**하세요.

자주 보이는 문구는 뜻을 알아 두면 덜 당황합니다.

| 문구 | 뜻 | 해 볼 것 |
|---|---|---|
| 「문제가 발생했습니다」(로그인할 때) | 이 계정으로는 지금 쓸 수 없음[^signin] | 나이·계정 종류 확인 |
| Too many requests… | 붐비거나 잠깐 한도에 닿음[^errors] | 몇 분 뒤 다시 |
| 오류 1060 | 이 나라에서 못 쓸 수 있음[^errors] | 지원 국가 확인 |
| I cannot fulfill this request | 필요한 앱 연결이 꺼짐[^errors] | 연결된 앱 확인 |

로그인할 때 「문제가 발생했습니다」가 뜨면 계정 쪽 문제일 수 있습니다. 사는 곳, 나이, 계정 종류(회사·학교 계정 등)가 이유일 수 있습니다.[^signin]

그래도 안 되면 의견을 보내세요. 「설정」 → 「의견 보내기」에서 쓰고, 스크린샷을 붙일 수 있습니다.[^feedback][^screen]
**의견을 보내면 그 대화와 올린 파일이 함께 Google로 갑니다.**[^feedback] 개인정보가 담긴 대화라면 그 부분이 보이지 않게 하세요.

<Quiz id="ch301-trouble" />

## 직접 해 보기

1. gemini.google.com 에 들어가 평소 쓰는 Google 계정으로 로그인한다.
2. "너는 어떤 일을 도와줄 수 있어?"라고 물어본다.
3. 「설정」 → 「사용량 한도」를 열어 지금 요금제와 쓴 양을 확인한다.
4. 휴대폰에 Gemini 앱을 설치해 같은 Google 계정으로 로그인하고, 컴퓨터에서 나눈 대화가 보이는지 확인한다.

**이어지는 과제** ([독서 모임 준비하기](../00-common/practice-kit.md)): "나는 동네 독서 모임 총무야. 다음 달 모임을 준비할 때 챙길 일을 목록으로 만들어 줘."라고 물어본다. 받은 목록은 과제를 마친 뒤 내가 실제로 한 일과 비교해 본다.

## 정리

- Gemini는 웹(gemini.google.com)·휴대폰 앱·Mac·Windows 앱에서 같은 Google 계정으로 쓴다. 한국과 한국어를 지원한다.
- 따로 가입하지 않고 Google 계정으로 로그인한다. 로그인하지 않으면 지난 대화·파일 올리기·이미지 만들기를 못 쓴다.
- 개인 계정은 만 13세 이상이지만, 유료 요금제와 일부 기능은 만 18세 이상이다.
- 유료는 Google AI Plus·Pro·Ultra이고 Google One으로 가입한다. Google 저장공간이 함께 들어 있다.
- 사용량은 5시간마다 다시 채워지고 주간 한도가 따로 있다. 주제가 바뀌면 새 채팅을 열어 아낀다.
- 취소는 「설정」 → 「구독 관리」에서 Google One으로 간다. 취소하면 늘어난 저장공간도 사라진다.
- 오류가 나면 다시 보내기 → 새 채팅 → 파일 빼기 → 5분 기다리기 순서로 해 본다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Google Account | 구글 어카운트 (Google 계정) | Gmail·YouTube 등에 함께 쓰는 Google 로그인 계정 |
| Google One | 구글 원 | Google의 유료 구독 서비스. 저장공간과 AI 요금제를 판다 |
| Google AI Plan | 구글 AI 플랜 (Google AI 요금제) | Plus·Pro·Ultra 세 가지 Gemini 유료 요금제 |
| Usage Limit | 유시지 리밋 (사용량 한도) | 5시간·일주일마다 다시 채워지는 쓸 수 있는 양 |
| Context Window | 컨텍스트 윈도우 | 한 번에 함께 읽을 수 있는 양. 토큰으로 센다 |
| Token | 토큰 | AI가 글을 나눠 세는 작은 단위 |
| Family Link | 패밀리 링크 | 부모가 자녀의 Google 계정을 관리하는 기능 |

<ChapterDone :chapter="301" />

다음 장: [2장. 화면 둘러보기](02-screen-tour.md)

[^screen-out]: 로그인하지 않은 브라우저에서 gemini.google.com 을 직접 확인. 옆 메뉴 「활동을 저장하려면 로그인하세요.」, 입력창의 모델 표시 「Flash-Lite」, 오른쪽 위 「Gemini 정보」「Gemini 앱 다운로드」「구독」「비즈니스용」「로그인」. (확인일 2026-10-31)
[^screen]: Gemini 웹 화면(Google AI Pro, 한국어)에서 직접 확인. 왼쪽 아래 「설정」 메뉴의 「계정」 묶음에 「사용량 한도」「구독 관리」, 「사용량 한도」 화면(gemini.google.com/usage)의 「현재 사용량」·「주간 한도」와 각각의 초기화 시각, 「데이터 및 개인 정보 보호」 묶음에 「의견 보내기」. (확인일 2026-10-30, 그림은 2026-10-31)
[^plans-screen]: Google One 요금제 페이지(지역 「대한민국」)를 로그인한 브라우저에서 직접 확인. Google AI Plus ₩7,500/월·400GB·"2배 더 많은 Gemini 액세스", Google AI Pro ₩29,000/월·5TB·"4배 더 많은 Gemini 액세스", 비교표의 Ultra 5배 월 ₩119,000·20TB와 Ultra 20배 월 ₩300,000·30TB. https://one.google.com/about/google-ai-plans/ (확인일 2026-10-30)
[^start]: Google 도움말, 「Use Gemini Apps」. "You can use some features in Gemini Apps without signing in." / "The Gemini mobile app on an Android device." / "Accessing past chats: Your chat history with Gemini Apps won’t be available." / "Other features that require account authentication: Features like image generation, Gems, and file upload won’t be available." / "Integration with other Google services: Features that rely on Connected Apps (like Google Workspace, Google Photos, or other Google services) won’t be available." / "To use gemini.google.com, you need access to a supported browser: Chrome, Safari, Firefox, Opera, or Edgium." https://support.google.com/gemini/answer/13275745 (확인일 2026-10-30)
[^signin]: Google 도움말, 「What you need to sign in to Gemini Apps」. "At the top right, select Sign in." / "Select Sign out." / "You must be 13 (or the applicable age in your country) or over to use Gemini with a personal or school Google Account and 18 or over to use Gemini with a work account." / "You still can’t access the Gemini web app with a Google Account managed by Family Link." / "If you get a “Something went wrong” message while trying to access or sign in to the Gemini web app, your account can't access the app at the moment." https://support.google.com/gemini/answer/13278668 (확인일 2026-10-30)
[^where]: Google 도움말, 「Where you can use the Gemini web app」. "The Gemini web app is currently available in more than 70 languages and over 230 countries and territories." 언어 목록에 "Korean", 국가 목록에 "South Korea" 포함. https://support.google.com/gemini/answer/13575153 (확인일 2026-10-30)
[^mobile]: Google 도움말, 「Gemini mobile app availability」. "Gemini mobile apps are currently available in multiple languages and more than 150 countries." 「Where you can download the Gemini app from the Google Play Store」 목록에 "South Korea" 포함. "On iOS: The Gemini app." / "Tip: Android Go doesn't support the Gemini mobile app." https://support.google.com/gemini/answer/14579026 (확인일 2026-10-30)
[^mac]: Google 도움말, 「Use the Gemini app on Mac」. "A Mac running macOS Sequoia (15.0) or later with Apple Silicon, 8 GB of RAM or more, and at least 200 MB of available disk space for installation." / "Open your web browser and go to gemini.google/mac." https://support.google.com/gemini/answer/17011627 (확인일 2026-10-30)
[^windows]: Google 도움말, 「Use the Gemini app for Windows」. "A PC running Windows 10 or later." / "Go to gemini.google/desktop on your PC." https://support.google.com/gemini/answer/18263854 (확인일 2026-10-30)
[^customize]: Google 도움말, 「Customize your Gemini chats experience」. "Customize is available for signed-in users 18 and older using Gemini Apps in an available language and region." 다른 AI에서 가져오기도 만 18세 이상 개인 계정만 된다: 「Import from other AI platforms to Gemini Apps」 https://support.google.com/gemini/answer/16868299 https://support.google.com/gemini/answer/18736938 (확인일 2026-10-30)
[^plans]: Google One 요금제 페이지(한국어). "Google AI 요금제에 포함된 Gemini 앱과 Gmail, Docs 등의 Gemini는 만 18세 이상만 이용할 수 있습니다." / "개인 Google 계정만 Google AI 요금제에 가입할 수 있습니다." / "복잡한 워크플로에서 최첨단 성능을 발휘하는 Gemini 4 Argon에 대한 액세스" / "Google AI Pro 요금제를 사용하는 가족 요금제 구성원은 추가 비용 없이 AI 혜택과 기능을 이용할 수 있습니다." / "언제든지 취소할 수 있습니다." 도움말(16275805)은 요금제 나이를 대부분 국가에서 만 13세로 적어 서로 다르다 — 이 가이드는 더 엄격한 쪽(18세)을 적었다. https://one.google.com/about/google-ai-plans/ (확인일 2026-10-30)
[^limits]: Google 도움말, 「Gemini Apps limits & feature availability」. "These limits factor in the complexity of your prompt, the models and features you use, and the length of your chat." / "Your limit refreshes every 5 hours until you reach your weekly limit." / "4x higher than standard limits" / "5x or 20x higher than AI Pro limits depending on your subscription" / "32k tokens" / "128k tokens" / "1 million tokens" / "For example, with a 1M token context window, Gemini can understand up to 1,500 pages of text or 30,000 lines of code." / "These require Gemini to re-read the previous conversation history to maintain context. As the chat gets longer, this requires more thinking power." / "Video generally requires the most usage." / "Start a new chat when you move to a new topic. This will help save usage because Gemini won’t have to re-read a long conversation history before creating a response." / "If you have a Google AI subscription and reach your limit, you can continue your conversation with Flash-Lite." / "For users without a Google AI plan, some features that require more compute resources, like Deep Research, may be unavailable during periods of high demand." / "Gemini Apps will notify you when you're close to your limit based on your plan's level." / "To view your usage limits:" https://support.google.com/gemini/answer/16275805 (확인일 2026-10-30)
[^models]: Google 도움말, 「About Gemini models」. "If you have a Google AI plan you can manually switch models in both Chat Mode and Task Mode." https://support.google.com/gemini/answer/18648722 (확인일 2026-10-30)
[^upgrade]: Google 도움말, 「Manage your Google AI plan from Gemini Apps」. "You can subscribe to a Google AI plan through Google One." / "Select the Google AI plan you want." / "When you subscribe to the plan, you’ll need to select or provide a form of payment." / "To upgrade: Select a plan under "Upgrade options."" / "You can cancel your plan in Google One settings." / 한국어판 단계 "하단에서 설정 및 도움말 구독 보기를 클릭합니다."(현재 요금제 미구독) / "When your AI Pro plan ends, you’ll no longer have access to:" / 한국어판 「Pro로 새 채팅 시작하기」「Pro로 생성된 채팅 이어서 하기」 / "Expanded storage across Drive, Gmail, and Photos" https://support.google.com/gemini/answer/14517446 (확인일 2026-10-30)
[^errors]: Google 도움말, 「Troubleshoot error codes in Gemini Apps」. "Gemini Apps may not be available in your country or region." / "Wait a few minutes: If Gemini Apps are experiencing high traffic, wait 5 minutes and try your prompt again." / "High demand or usage limits: If you get "Too many requests in a short time period," Gemini Apps may be experiencing high traffic, or you may have reached a temporary usage limit." / "Connected Apps aren't turned on: If you get "I cannot fulfill this request" or "This feature only works with content that Gemini can access," the required connected app (such as Google Workspace) might not be connected." https://support.google.com/gemini/answer/18647528 (확인일 2026-10-30)
[^feedback]: Google 도움말, 「Send feedback or report a problem with Gemini Apps」. "Enter your feedback. You can choose to add a screenshot to help us better understand the issue." / "When you submit feedback, the associated conversation, like your prompts and the Gemini app’s responses, is added as part of your feedback." https://support.google.com/gemini/answer/13275746 (확인일 2026-10-30)
