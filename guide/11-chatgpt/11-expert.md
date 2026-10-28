# 11장. 전문가처럼 쓰기 — 초보를 넘어 일에 맞게 부리기

> **한 줄 요약**: 전문가는 새 기능을 더 많이 아는 사람이 아니라, **일을 맡기듯 말하고, 일에 맞는 도구를 고르고, 반복하는 일은 틀로 만들고, 결과를 확인한 뒤에 쓰는** 사람입니다.
> 이 장은 1~10장에서 배운 기능을 **조합하는 법**과, 아직 다루지 않은 예약 작업·데이터 분석·공부 모드를 소개합니다.

화면은 2026년 10월 웹(Plus 요금제) 기준입니다. 무료 요금제나 휴대폰 앱은 메뉴 위치가 조금 다를 수 있습니다.

## 전문가는 무엇이 다른가

[1단계 3장 「같은 도구, 다른 결과」](../00-common/03-why-learn.md#같은-도구-다른-결과)에서 같은 AI도 쓰는 법에 따라 결과가 달라진다고 배웠습니다. OpenAI가 회사에서 ChatGPT를 쓰는 모습을 조사한 보고서에서도 비슷한 점이 보입니다. 효과가 클 만한 곳에서도 추론·심층 리서치·프로젝트·맞춤 지침 같은 **고급 기능은 덜 쓰입니다**.[^adopt]

무엇을 맡길지 판단하는 법, 맡기기 전에 시험해 보는 법, 일의 무게만큼 확인하는 법처럼 **어느 AI에나 통하는 방법**은 [1단계 11장 「전문가처럼 쓰기」](../00-common/11-expert.md)에 있습니다. 이 장은 그 방법을 ChatGPT 기능으로 옮겨 봅니다. 이 장에서 다루는 것을 먼저 한눈에 보세요.

| 요소 | 한 줄 설명 | 자세히 보기 |
|---|---|---|
| 맡기듯 말하기 | 할 일·대상·목적·모양을 밝히고, 첫 답을 보고 고쳐 간다 | [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소), [1단계 6장 「고쳐 달라고 잘 말하는 법」](../00-common/06-conversation.md#고쳐-달라고-잘-말하는-법) |
| 도구 고르기 | 검색·심층 리서치·Work·추론 수준 중 일에 맞는 것을 쓴다 | [6장 「심층 리서치 — 보고서를 맡기기」](06-search.md#심층-리서치-—-보고서를-맡기기), [7장 「Chat과 Work의 차이」](07-projects-plugins.md#chat과-work의-차이) |
| 자료 쌓아 두기 | 같은 일의 파일·지침·잘 된 답을 한곳에 모은다 | [7장 「프로젝트 — 대화·파일·지침을 한 폴더에」](07-projects-plugins.md#프로젝트-—-대화·파일·지침을-한-폴더에) |
| 틀 만들기 | 반복하는 요청을 지침·템플릿·스킬로 남긴다 | [1단계 8장 「4. 다시 쓸 틀로 만들기」](../00-common/08-meta-prompting.md#_4-다시-쓸-틀로-만들기) |
| 예약 작업 | 정해진 때에 ChatGPT가 알아서 하게 한다 | [이 장 「정해진 때에 알아서」](#정해진-때에-알아서-—-예약-작업) |
| 데이터 분석 | 표와 숫자를 계산하고 차트로 받는다 | [이 장 「표와 숫자 맡기기」](#표와-숫자-맡기기-—-데이터-분석) |
| 공부 모드 | 답 대신 질문으로 이해를 돕게 한다 | [이 장 「배우는 데 쓰기」](#배우는-데-쓰기-—-공부-모드) |
| 답의 모양 | 말투·표·그림의 양을 내 일에 맞춘다 | [5장 「말투 정하기」](05-memory.md#말투-정하기-—-기본-스타일-및-톤-따뜻함-내-문체-참고) |
| 확인하기 | 결과물 종류마다 볼 곳을 정해 두고 확인한다 | [1단계 9장 「확인하는 네 가지 습관」](../00-common/09-safety.md#확인하는-네-가지-습관) |

<Quiz id="ch111-difference" />

## 일을 맡기는 다섯 줄 — 결과·자료·남길 것·검토 기준·모양

질문 하나가 아니라 문서나 표 작업을 통째로 맡길 때는 [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)에 두 가지를 더 챙기세요. 하나는 수식·순서·표 구조처럼 **바꾸면 안 되는 것**이고,[^docs] 다른 하나는 결과가 잘 됐는지 판단할 잣대인 **검토 기준**(review criteria)입니다.[^work] 이 둘을 미리 말해 두면, 멀쩡한 양식이 바뀌거나 숫자가 틀린 채로 넘어가는 일을 줄일 수 있습니다.

아래 다섯 줄로 적어 보세요([1단계 7장 「1. 마크다운으로 정리하기」](../00-common/07-structured-prompts.md#_1-마크다운으로-정리하기)).
- **결과**: 무엇을, 누구를 위해, 왜 만드는지
- **자료**: 참고할 파일
- **남길 것**: 바꾸면 안 되는 것
- **검토 기준**: 마지막에 무엇과 대조할지
- **모양**: 형식과 길이
```
결과: 팀장님께 올릴 이번 달 지출 요약을 만들어 줘. 다음 주 예산 회의에서 쓸 거야.
자료: 첨부한 지출 내역 파일을 써 줘.
남길 것: 항목 이름과 순서는 바꾸지 마.
검토 기준: 마지막에 합계가 원본 파일과 같은지 대조해서 알려 줘.
모양: 항목별 표 한 개와 세 줄 요약.
```

::: details 받는 답은 대략 이렇게 (예시 — 눌러서 펼치기)
이 가이드가 만든 예시입니다. 실제 답은 서비스와 그때그때에 따라 다릅니다.

> | 항목 | 이번 달 금액 |
> |---|---|
> | (파일의 첫 항목) | ○○원 |
> | (파일의 둘째 항목) | ○○원 |
> | … | … |
> | 합계 | ○○원 |
>
> **세 줄 요약**
> 1. 이번 달 총지출은 ○○원입니다.
> 2. 가장 많이 쓴 항목은 (항목 이름)으로, ○○원입니다.
> 3. 다음 주 예산 회의에서는 (항목 이름) 지출을 줄일 방법을 이야기해 볼 만합니다.
>
> **합계 대조**: 표의 합계 ○○원은 원본 파일의 합계와 같습니다.

**잘 받았는지 확인해 보세요**: 항목 이름과 순서가 원본 그대로인가? 표 한 개와 세 줄 요약으로 왔나? 마지막에 합계 대조 결과가 있나? "같다"는 말만 믿지 말고 원본의 합계를 한 번 직접 보세요.

:::

**쪼갤까, 모을까?** OpenAI 도움말은 복잡한 일을 작은 요청으로 나누라고 권합니다([1단계 5장 「3. 단계 나누기」](../00-common/05-prompt-patterns.md#_3-단계-나누기-—-프롬프트-체이닝)).[^prompt] Academy 자료는 서로 관련된 맥락과 지시를 한 요청에 모아도 된다고 설명합니다. 다만 정보가 너무 많으면 답이 흐려질 수 있다고 덧붙입니다.[^aprompt]

중간 결과를 보고 다음 방향을 정해야 하면 나누세요. 목표가 하나로 분명하면 다섯 줄을 한 요청에 모으세요. 어느 쪽이든 꼭 필요한 자료만 붙이면 됩니다.

**여러 단계가 필요한 일은 멈출 곳을 정하세요.** 처음부터 완성본을 부탁하지 말고, 어디서 내가 고르거나 확인할지 먼저 정해 보세요. 단계가 작으면 ChatGPT가 잘못 알아들었을 때 일찍 알아챌 수 있습니다. 다 만든 뒤에 처음부터 고치지 않아도 됩니다.[^academy-content]
```
이번 주 가족 나들이 준비를 도와 줘.
1. 날짜·예산·출발 지역으로 후보 세 곳을 표로 정리해 줘.
2. 이동 시간과 비용을 비교해 줘. 여기서 멈추고 내가 장소를 고를게.
3. 고른 장소로 하루 일정표를 만들어 줘.
```

**파일이 여러 개라면 초안보다 요약을 먼저 받으세요.** "지금 무엇이 보이는지"부터 말하게 하면, 필요한 파일을 빠짐없이 읽었는지 초안을 쓰기 전에 확인할 수 있습니다. Academy 강좌도 Work에 문서를 맡기기 전에 이 순서를 밟게 합니다.[^academy-content]
```
아직 초안은 쓰지 마. 먼저 첨부한 파일들을 읽고, 정해진 것·아직 정하지 않은 것·빠졌거나 분명하지 않은 내용을 짧게 정리해 줘.
```

<Quiz id="ch111-five-lines" />

## 일에 맞는 도구 고르기

같은 질문도 어떤 기능으로 묻느냐에 따라 결과가 달라집니다. 빠른 사실은 검색으로 찾으세요. 깊이와 꼼꼼함이 필요하면 심층 리서치를 쓰세요.[^deep] 나머지 일은 아래 표에서 골라 보세요.

| 하려는 일 | 쓸 기능 | 자세히 보기 |
|---|---|---|
| 오늘 날씨·영업시간 같은 빠른 사실 | 웹 검색 | [6장 「웹 검색」](06-search.md#웹-검색-—-chatgpt가-인터넷을-찾아보게-하기) |
| 여러 자료를 비교한 긴 보고서 | 심층 리서치 | [6장 「심층 리서치」](06-search.md#심층-리서치-—-보고서를-맡기기) |
| 문서·표·발표 자료 같은 완성 파일 | Work(유료 요금제) | [7장 「Chat과 Work의 차이」](07-projects-plugins.md#chat과-work의-차이) |
| 이미 있는 Word·PowerPoint 파일 고치기 | Microsoft 추가 기능 「ChatGPT」(무료 포함) | [이 장 아래](#word·powerpoint-안에서-쓰기) |
| 어려운 계산·여러 조건이 얽힌 계획 | 추론 수준 올리기 | [2장 「추론 수준과 생각하기」](02-screen-tour.md#추론-수준과-생각하기-—-얼마나-깊이-생각할까) |
| 표·숫자 분석과 차트 | 파일 올리고 데이터 분석 | [이 장 아래](#표와-숫자-맡기기-—-데이터-분석) |
| 새로운 것 배우기 | 공부 모드 | [이 장 아래](#배우는-데-쓰기-—-공부-모드) |

**어떤 기능이 되는지 궁금하면 바로 시켜 보세요.** "너 이거 할 수 있어?"라고 묻는 것보다 낫습니다. ChatGPT는 자기 시스템이 지금 어떻게 돌아가는지 볼 수 없습니다. 그래서 물어보면 틀리게 답할 수 있습니다.[^ask]
```
첨부한 영수증 사진 다섯 장에서 날짜·가게 이름·금액을 뽑아 표로 만들어 줘.
```

### Word·PowerPoint 안에서 쓰기

Word·Excel·PowerPoint는 **ChatGPT 추가 기능**(add-in, 프로그램 안에 붙여 쓰는 작은 기능) 하나를 함께 씁니다. Microsoft 마켓플레이스에서 「ChatGPT」를 설치해 보세요. 문서 옆 창에서 바로 고칠 수 있습니다.[^word][^ppt]

- Word용은 **무료(Free)를 포함한 모든 요금제**에서 쓸 수 있습니다. PowerPoint용은 Free·Go에서 제한적으로 쓸 수 있습니다. 회사 계정이라면 관리자가 허용해야 보입니다.[^word][^ppt]
- 추가 기능 안의 대화는 ChatGPT 대화 기록과 따로입니다. 메모리와 스킬도 넘어오지 않습니다.[^word]
- **크게 고치기 전에 사본을 저장하세요.** 큰 수정이라면 계획부터 보여 달라고 하세요. 사본이 있으면 필요할 때 원래대로 되돌릴 수 있습니다.[^word][^ppt]

```
이 발표 자료의 3~5번 슬라이드를 한 장으로 줄이고 싶어. 바로 고치지 말고, 어떻게 합칠지 계획부터 보여 줘.
숫자와 표는 그대로 두고, 제목은 15자 안으로 써 줘.
```

<Quiz id="ch111-tools" />

## 자료를 쌓아 두고 쓰기

[7장 「프로젝트」](07-projects-plugins.md#프로젝트-—-대화·파일·지침을-한-폴더에)에서 대화·파일·지침을 한 폴더에 묶는 법을 배웠습니다. 프로젝트는 주간 조사나 글 초안처럼 **반복하는 작업**에 다시 써 보세요.[^projects] 여기서 한 걸음 더 나아가면, 잘 나온 답도 다음에 쓸 자료로 쌓아 둘 수 있습니다.
- **잘 된 답은 자료로 저장하세요.** 프로젝트 대화에서 답 아래 메시지 메뉴를 열고 「프로젝트에 저장」 또는 「프로젝트 소스에 추가」를 고르면 됩니다. 그 답이 프로젝트의 「소스」에 들어갑니다. 메뉴 이름은 화면에 따라 다를 수 있습니다.[^projects]
- **다른 서비스의 자료도 연결할 수 있습니다.** 개인 프로젝트의 소스 영역에서 「Add sources」를 누르고 Slack 채널이나 Google Drive 파일·폴더 링크를 넣으세요.[^projects] 전에 올린 파일은 [4장 「라이브러리」](04-files-images.md#라이브러리-—-올린-파일을-모아-두는-곳)에서 다시 불러오면 됩니다.

<!-- 스크린샷 필요: 프로젝트 대화에서 답의 메시지 메뉴를 펼쳐 「프로젝트 소스에 추가」가 보이는 화면 -->

프로젝트 지침에 "쌓인 자료를 먼저 보라"고 적어 두면 좋습니다.
```
이 프로젝트는 매주 우리 동네 문화 행사를 조사하는 곳이야. 새 조사를 하기 전에 「소스」에 저장된 지난 조사 결과를 먼저 보고,
지난주와 겹치는 행사는 빼고 새로 생긴 것만 표로 정리해 줘.
```

<Quiz id="ch111-sources" />

## 반복하는 일은 틀로 — 지침·템플릿·스킬

어떤 일부터 틀로 만들지는 [1단계 11장 「처음 연습할 일 고르기」](../00-common/11-expert.md#처음-연습할-일-고르기)를 보세요.

같은 일을 자주 한다면 틀을 만들어 두세요. 첫 단계는 [1단계 8장 「4. 다시 쓸 틀로 만들기」](../00-common/08-meta-prompting.md#_4-다시-쓸-틀로-만들기)의 틀을 [7장처럼 프로젝트 지침에 넣는 것](07-projects-plugins.md#다시-쓸-틀을-프로젝트에-넣기)입니다. 그다음이 템플릿과 스킬입니다.[^docs][^skills]

| 이름 | 무엇인가 | 쓸 수 있는 곳 |
|---|---|---|
| 참조 파일 | 이번 한 번만 보여 주는 예시 파일 | 모든 대화 |
| 템플릿(template) | 예시 파일 + 다시 쓸 지침. 만든 사람 혼자 쓴다 | 웹의 Work(유료 요금제) |
| 스킬(skill) | 지침·예시를 담아 둔, 다시 쓰고 나눌 수 있는 작업 방식 | 도움말 기준 Business·Enterprise·Edu 등 회사·학교 요금제 |
| 플러그인(plugin) | 스킬과 앱 연결을 묶은 꾸러미 | [7장 「플러그인」](07-projects-plugins.md#플러그인-—-다른-서비스와-작업-방식을-더하기) |

**템플릿은 웹의 Work에서 만듭니다.** 입력창에 `@Template-Creator` 를 입력하세요. 참고할 파일 한 개(Word·Excel·PowerPoint 파일 또는 구글 문서 링크)를 붙입니다. 그리고 남길 것, 바꿀 것, 매번 넣을 정보를 설명하면 됩니다. 만들어지면 「설치」를 누르세요.[^docs]
```
@Template-Creator 첨부한 주간 보고 파일로 템플릿을 만들어 줘.
남길 것: 제목 줄, 표의 세 칸(완료 / 진행 중 / 다음 주 계획), 글꼴과 색.
바꿀 것: 표 안의 내용과 날짜.
매번 넣을 정보: 그 주의 업무 메모.
```

만든 템플릿을 쓸 때는 입력창에 `@Documents`·`@Spreadsheets`·`@Presentations` 중 하나를 입력하세요. 템플릿 갤러리가 열리면 「Use template」을 고릅니다. 고르기만 해서는 작업이 시작되지 않습니다. 이어서 이번 내용을 적어 보내야 합니다.[^docs]

프로젝트 지침을 쓸 때는 아래 요령을 참고해 보세요. 원래는 OpenAI가 맞춤형 GPT 지침에 권하는 요령입니다.[^gpt-make] 프로젝트 지침에도 통한다고 보는 것은 이 가이드의 해석입니다.

| 요령 | 예 |
|---|---|
| "하지 마"를 늘어놓기보다 "이렇게 해 줘"를 구체적으로 | "길게 쓰지 마" 대신 "세 줄로 써 줘" |
| 참고 파일은 **자료**, 규칙·말투는 **지침**에 | 회사 양식은 파일로, "표는 세 칸"은 지침으로 |
| 결과가 아쉬우면 기능을 더하기 전에 지침을 다듬고 좋은 예를 하나 넣기 | "이런 메모가 오면 → 이렇게 정리" 예시 한 쌍 |

**스킬**은 옆 메뉴 「플러그인」 → 「스킬」 탭 → 「만들기」에서 만듭니다. 「채팅으로 만들기」 등을 고르면 됩니다.[^skills] 다만 도움말은 스킬을 **Business·Enterprise·Healthcare·Edu 요금제**에서 쓸 수 있다고 적고 있습니다. 개인 요금제 화면에도 「스킬」 탭이 보일 수 있습니다. 쓸 수 있는지는 내 화면에서 직접 확인하세요.

남이 만든 스킬 파일을 올릴 때는 만든 곳을 믿을 수 있는지 먼저 보세요. 자동 검사가 있어도 내 확인을 대신하지는 않습니다.[^skills]

**스킬은 언제 만들까요?** 같은 부탁을 같은 기준으로 되풀이하고 있다면 만들어 볼 만합니다. 아직 이른 경우는 [1단계 11장 「반복하는 일은 쌓아 두기」](../00-common/11-expert.md#반복하는-일은-쌓아-두기)에 있습니다.[^academy-content]

<Quiz id="ch111-templates" />

## 정해진 때에 알아서 — 예약 작업

**예약 작업**(scheduled tasks)은 ChatGPT가 정해 둔 때에 알아서 일을 하게 하는 기능입니다. 한 번만 실행할 수도 있고, 반복해서 실행할 수도 있습니다. 무언가가 바뀌는지 지켜보다가 알려 주게 할 수도 있습니다.[^tasks] 만드는 법은 간단합니다. 대화에서 그냥 부탁하면 됩니다.
```
매주 월요일 아침 8시에, 이번 주 서울 날씨 예보를 요일별 한 줄로 정리해서 알려 줘.
```

만든 작업은 옆 메뉴 「예약」에서 보고, 고치고, 일시 중지하고, 지울 수 있습니다.[^tasks][^scheduled-name] 설정 → 「알림」 → 「작업 관리」로도 열 수 있고, 대화의 •••(더보기) → 「예약 작업 보기」로도 열 수 있습니다.[^tasks]

알림을 어떻게 받을지는 설정 → 「알림」에서 푸시나 이메일로 고르세요. 휴대폰 푸시를 받으려면 휴대폰 앱에서 작업을 만들면 됩니다.[^tasks]

![옆 메뉴 「예약」 화면. 위에 「작업 예약하기」 입력창, 그 아래 만든 작업 한 줄(일시 중지·편집·••• 버튼), 그 아래 「추천」 작업 목록이 있다](assets/shot-29-scheduled.png)

*작업 이름은 예시로 바꾼 화면입니다. 작업 줄 왼쪽에 일시 중지, 오른쪽에 편집과 ••• 버튼이 있습니다.*[^screen-scheduled] 위쪽 「작업 예약하기」 칸에 바로 부탁을 적어 만들 수도 있습니다.

동시에 켜 둘 수 있는 작업 수는 요금제마다 다릅니다. Free·Go 3개, Plus 5개, Business·Edu 10개, Pro·Enterprise 15개이고, 이 숫자는 바뀔 수 있습니다(확인일 2026-10-24). Free에서는 하루 한 번까지만 실행됩니다. 시간도 아침·오후·밤처럼 넓게만 정할 수 있습니다. 위 예시처럼 정확한 시각을 정하거나 매시간 실행하려면 유료 요금제가 필요합니다.[^tasks] 새 메일이 오면 반응하는 식의 **앱 이벤트 작업**은 Work에서 만듭니다. Free·Go에서는 쓸 수 없습니다.[^tasks]

조심할 점도 있습니다.[^tasks]
- **프로젝트 안에서 만든 작업은 그 프로젝트의 파일을 읽지 못합니다.** 파일 내용이 필요하면 지시문에 직접 적어 주세요.
- 음성 대화·맞춤형 GPT·[잠긴 대화](03-chats.md#남이-못-열게-—-잠긴-대화)에서는 예약 작업을 만들 수 없습니다.
- 작업을 공유 링크로 나누면 받는 사람에게 지시문이 그대로 보입니다. 그러니 건강·금융 정보나 비밀번호는 넣지 마세요. 공유해도 내가 연결해 둔 앱(예: Slack)의 연결이나 권한은 넘어가지 않습니다.[^slack]
- 연결한 앱으로 메일을 보내거나 파일을 바꾸는 작업은 **내가 승인할 때까지 멈춰** 있을 수 있습니다. 결과가 안 오면 옆 메뉴 「예약」에서 승인을 기다리는 중인지 확인해 보세요.[^apps-trouble]

**어떤 일을 예약할까요?** 결과를 보고 내가 판단하는 일에 써 보세요. 정기적으로 확인하고, 지켜보고, 요약해서 알려 달라고 하면 됩니다. 보내기·게시·삭제·승인처럼 밖으로 나가거나 되돌리기 어려운 일은 조심하세요.[^academy-content]

**예약하기 전에 직접 몇 번 해 보세요.** 같은 부탁을 손으로 보내 보며 프롬프트와 자료를 다듬고, 결과가 믿을 만해졌을 때 예약합니다. 지시문에는 이것들을 적어 둡니다.[^academy-content]
- 어떤 자료를 볼지
- 무엇을 만들지
- 정보가 없으면 어떻게 할지
- 무엇은 내가 확인할지

이 가이드가 만든 예시입니다.
```
매주 금요일 오후 5시에, 우리 구청 홈페이지 공지사항에서 이번 주에 새로 올라온 행사와 접수 일정을 찾아 표로 정리해 줘.
날짜가 분명하지 않은 것은 지어내지 말고 「확인 필요」라고 적고, 출처 링크를 붙여 줘. 신청이나 글 올리기는 하지 마.
```

<Quiz id="ch111-scheduled" />

## 표와 숫자 맡기기 — 데이터 분석

**데이터 분석**(data analysis)은 따로 켜는 메뉴가 없습니다. [4장 「사진·파일 올리기」](04-files-images.md#사진·파일-올리기)처럼 엑셀이나 CSV 파일을 올리고 궁금한 것을 물어보면 됩니다. ChatGPT가 요약·표·차트를 만들고, 필요하면 Python(파이썬, 계산용 프로그래밍 언어)으로 직접 계산합니다.[^data]

정확한 결과를 받으려면 **올리기 전에 파일부터 정리하세요.**[^data]
- 첫 줄에는 「날짜 / 품목 / 수량 / 금액」처럼 알아보기 쉬운 열 이름을 둡니다.
- 한 줄에는 한 건만 적습니다.
- 한 시트에 표를 여러 개 두거나 중간에 빈 줄을 넣지 않습니다.

파일을 올렸으면 바로 합계를 묻지 말고, **데이터에 문제가 없는지부터** 보게 하세요. OpenAI도 분석을 이 질문으로 시작하라고 권합니다. 그다음에는 **계산 방법을 직접 정해 주세요.** 첫 시도의 계산 방법이나 차트가 내 뜻과 다를 수 있기 때문입니다.[^data]
```
이 데이터에 흔한 문제(빈 값, 튀는 값, 중복, 날짜·숫자 형식 오류)가 있는지 먼저 확인해 줘.
문제가 없으면 「금액」 열을 품목별로 더해서 큰 순서로 표를 만들고, 막대 차트로 보여 줘.
계산에 쓴 방법과 가정도 한 줄씩 적어 줘.
```

- 도움말은 막대·선·원·산점도 차트를 「대화형 차트로 전환」으로 직접 만져 볼 수 있다고 설명합니다. 2026-10-28 화면에서는 이 버튼 대신 「차트 다운로드」「차트 펼치기」만 보였습니다.[^screen-data] 결과 표를 펼쳐 필요한 칸만 골라 다시 물을 수 있고, 표는 CSV(엑셀에서 열리는 쉼표 구분 파일)로 내려받습니다([1단계 7장 「3. 엑셀로 옮길 때는 표로 받기」](../00-common/07-structured-prompts.md#_3-엑셀로-옮길-때는-표로-받기)도 참고).[^data]
- **한계**: 분석용 Python은 인터넷에 나가지 못합니다. 스캔한 PDF나 사진 속 표의 숫자는 정확하지 않을 수 있고, 큰 파일은 일부만 볼 수 있으니 시트나 범위를 정해 줍니다.[^data]

[이어지는 과제](../00-common/practice-kit.md)의 가짜 회비 장부(fees.csv)를 올려 위 프롬프트를 그대로 보내 봤습니다. ChatGPT는 금액이 빈 줄과 두 번 적힌 줄을 찾아냈습니다. 그리고 "문제가 없으면"이라는 조건에 따라 차트를 그리기 전에 멈추고 확인을 부탁했습니다.

![데이터 점검 결과 표. 빈 값 1건(안내 문자 발송), 중복 1쌍(다과 32,500원), 튀는 값 확인 필요, 날짜 형식 정상, 숫자 형식 1건이 정리되어 있고, 아래에 계산 방법과 가정이 적혀 있다](assets/shot-30-data-check.png)

"다과는 실수로 두 번 적은 거야"라고 알려 주자 항목별 지출을 막대 차트로 그렸습니다. 수입 210,000원, 지출 114,300원, 남은 돈 95,700원은 그 아래 표로 정리했습니다. 손으로 더한 값과 같았습니다.

**차트의 한글이 네모(□)로 깨지면** 그렇게 말하고 다시 그려 달라고 하세요. 처음 받은 차트는 항목 이름이 네모로 깨져 있었습니다. "한글이 제대로 보이게 다시 그려 줘"라고 하자 글자가 바로 보이는 차트로 다시 그렸습니다.[^screen-data]

![처음 받은 항목별 지출 막대 차트. 숫자는 보이지만 항목 이름과 제목 같은 한글이 네모로 깨져 있다](assets/shot-30-data-chart-broken.png)

![다시 그린 항목별 지출 막대 차트. 현수막 제작 45,000원, 다과 32,500원, 세미나실 대관 20,000원, 11월 책 구입 16,800원이고 아래에 총 지출 114,300원이 있다](assets/shot-30-data-chart.png)

*대화와 올린 파일은 찍은 뒤 지웠습니다. 대화를 지워도 올린 파일은 라이브러리에 남아 있어서 따로 지웠습니다([4장](04-files-images.md#라이브러리-—-올린-파일을-모아-두는-곳)).*

<Quiz id="ch111-data" />

## 배우는 데 쓰기 — 공부 모드

**공부 모드**(study mode)는 답을 바로 주지 않고 가르쳐 주는 방식입니다. 질문을 던지고, 단계별로 설명하고, 이해했는지 확인해 가며 진행합니다. **모든 요금제**에서 웹·iOS·Android로 쓸 수 있습니다.[^study]

웹에서 켜려면 입력창에 `@study` 를 입력하고 제안 목록의 「공부하기」를 고르세요. + 버튼을 누르고 `study` 로 검색해 골라도 됩니다. `chatgpt.com/studymode` 로 바로 가도 됩니다.[^study] 공부 모드는 일반 대화에서 켜세요. [임시 채팅](03-chats.md#기록-남기지-않기-—-임시-채팅), 맞춤형 GPT, 프로젝트에서는 켤 수 없습니다.[^study]

![입력창에 @study 를 입력하자 아래에 「공부하기 — 새로운 개념을 배워보세요」 제안이 뜬 화면](assets/shot-31-study-mention.png)

*제안 목록에는 「공부하기」로 보입니다. 보내기 전이라 아직 아무것도 시작되지 않은 화면입니다.*[^screen-study]

첫 메시지에 아래 내용을 넣어 보세요. 그러면 공부 모드가 더 잘 도와줄 수 있습니다.[^study]
- 내 수준
- 과목과 정확한 주제
- 하려는 것
- 이미 아는 것
- 시험 날짜·형식
- 자료

```
20분 동안 이 주제를 복습하려고 해. 주제는 중학교 2학년 과학의 「전기 회로」야.
옴의 법칙은 들어 봤지만 직렬과 병렬이 헷갈려. 다음 주 화요일에 객관식 시험이 있어.
가장 중요한 개념부터 짧게 알려 주고, 한 번에 한 문제씩 내서 내 답을 확인해 줘.
```

공부 모드도 틀릴 수 있습니다. 가끔은 답을 바로 알려 주기도 합니다. 그럴 때는 "힌트만 줘", "한 문제씩 내 줘"라고 다시 부탁하세요. 숙제·시험·건강·법률·돈 문제처럼 중요한 내용은 꼭 따로 확인하세요.[^study]

공부 모드에서 복습 자료를 만들어 달라고 할 수도 있습니다. 퀴즈나 플래시카드(앞면 질문·뒷면 답인 암기 카드) 형식으로 부탁해 보세요.[^study] 플래시카드 기능으로 만든 카드는 라이브러리에 자동으로 저장됩니다. 카드 내용은 원래 노트와 대조해 보세요.[^study]

공부 모드 없이 쓸 수 있는 설명 요청 프롬프트는 [프롬프트 모음 「공부·설명 듣기」](../00-common/prompt-library.md#공부·설명-듣기)에 있습니다.

<Quiz id="ch111-study" />

## 답의 모양을 내 일에 맞추기

[5장 「말투 정하기」](05-memory.md#말투-정하기-—-기본-스타일-및-톤-따뜻함-내-문체-참고)에서 기본 스타일과 「따뜻함」을 봤습니다. 여기서는 답의 모양을 일에 맞게 더 다듬는 방법 네 가지를 봅니다. 만든 이미지를 고치는 법은 [4장 「이미지 만들기」](04-files-images.md#이미지-만들기)에 있습니다.

![개인 맞춤 설정 화면. 맨 아래 ⑤ 「기본 스타일 및 톤」과 ⑥ 「따뜻함」 선택 버튼을 본다. 특성은 이 자리에서 조절한다](assets/shot-06-personalization-marked.png)

- **특성**(characteristics)은 따뜻함·열정·머리글과 목록·이모지를 "더(+)" 또는 "덜(–)" 쪽으로 조금씩 조절하는 설정입니다. 설정 → 「개인 맞춤 설정」에서 바꿀 수 있습니다. 바꾸면 이 채팅과 앞으로의 새 채팅에 적용됩니다.[^char] 2026-10-23 화면에서는 「따뜻함」(위 그림 ⑥)만 확인했습니다. 다른 항목은 내 화면에서 찾아보세요.
- **표·그림이 너무 많으면 줄일 수 있습니다.** 최신 모델은 답에 표·버튼·차트를 섞어 보여 주기도 합니다. 웹 설정의 개인 맞춤 설정에서 「Layout and Visuals」를 「Simple」로 바꿔 보세요. 이 이름은 도움말의 영어 표기이고, 한국어 화면 이름은 확인하지 못했습니다. 바꿔도 일부는 나올 수 있습니다.[^ui]
- **늘 원하는 모양은 지침으로 고정하세요.** "답은 짧게", "선택지를 비교할 때는 표로" 같은 것을 [5장 「사용자 지정 지침」](05-memory.md#사용자-지정-지침-—-늘-지켜-줬으면-하는-것)에 적어 두면 됩니다.[^ui]
- **답 안에서 바로 고칠 수도 있습니다.** 메일·문자 같은 초안은 글쓰기 블록(writing block, 답 속에서 바로 고칠 수 있는 글 상자)으로 나올 때가 있습니다. 그 자리에서 직접 고치거나, 일부만 골라 고쳐 달라고 해 보세요. 고친 내용은 대화에 저장되어 다음 질문에 쓰입니다.[^blocks]
```
방금 쓴 메일 초안에서 두 번째 문단만 더 짧고 정중하게 고쳐 줘. 나머지는 그대로 둬.
```

<Quiz id="ch111-shape" />

## 믿기 전에 확인하기

얼마나 꼼꼼히 볼지, 어느 단계에서 볼지는 [1단계 11장 「일의 무게만큼 확인하기」](../00-common/11-expert.md#일의-무게만큼-확인하기)에서 배웁니다. 여기서는 ChatGPT의 결과물마다 무엇을 볼지 살펴봅니다.

결과물마다 볼 곳이 다릅니다.

| 결과물 | 확인할 곳 |
|---|---|
| 데이터 분석 | 계산에 쓴 방법·코드·가정. 방법이 중요하면 보여 달라고 하거나 바꿔 달라고 한다[^data] |
| 심층 리서치 보고서 | 인용과 출처 링크를 직접 열어 본다([6장 「출처 확인하는 습관」](06-search.md#출처-확인하는-습관))[^deep] |
| Work가 만든 파일 | 내용·레이아웃·수식·차트를 공유하기 전에 본다[^docs] |
| Work가 웹사이트에서 한 일 | 결과와 출처를 확인하고, 중요한 행동은 승인 화면에서 직접 누른다[^work] |
| 연결한 앱에서 찾은 파일 | 파일 **이름**을 찾았다고 **내용**까지 읽은 것은 아니다. 중요한 파일은 링크를 직접 붙여 읽게 한다[^drive] |
| 연결한 앱으로 보낸 메일·메시지 | 작업이 멈추거나 결과가 애매하면, 다시 시키기 전에 보낸편지함과 받는 곳을 직접 확인한다. 같은 메일이 두 번 나갈 수 있다[^apps-trouble] |

**링크도 조심합니다.** ChatGPT가 만든 링크는 제3자가 거짓 정보나 나쁜 지시를 끼워 넣었을 수 있습니다.[^links] 숨은 지시의 원리는 [1단계 9장 「4. 숨은 지시」](../00-common/09-safety.md#_4-숨은-지시-—-프롬프트-인젝션)에 있습니다. 내가 모르는 분야일수록 마지막에 이렇게 덧붙입니다.
```
방금 답에서 내가 따로 확인해야 할 부분을 표시하고, 확인할 곳(공식 기관이나 원문)을 알려 줘.
```

<Quiz id="ch111-verify" />

## 더 배우려면 — OpenAI Academy

**OpenAI Academy**는 OpenAI가 만든 **무료 온라인 강좌**입니다. ChatGPT 계정이 있으면 누구나 듣고, 내 속도로 진행합니다.[^academy] 강좌 페이지에서 「Enroll now」(등록)를 누르면 본문이 열립니다. 진도는 저절로 저장되니 한 번에 다 듣지 않아도 됩니다. 아래 세 강좌의 본문은 **영어**입니다(2026-10-26 확인).[^academy-courses]

일에 쓰는 법을 다루는 강좌는 세 개입니다. 뒤의 두 강좌는 앞 강좌를 먼저 들으라고 권합니다. 시간은 강좌 페이지에 적힌 값이고, 바뀔 수 있습니다.[^academy-courses]

| 강좌 | 시간·수준 | 다루는 것 | 준비물 |
|---|---|---|---|
| **AI Foundations** | 약 70분, 입문 | AI·LLM이 무엇인지, 분명한 지시, 맥락 주기, 결과 검토, 책임 있게 쓰기 | ChatGPT 계정, 연습할 실제 일 하나. 기술 지식은 필요 없음 |
| **Applied AI Foundations** | 약 80분, 중급 | 한 번의 질문을 **반복해 쓰는 작업 순서**(워크플로)로 바꾸기, 추론 모델(답하기 전에 더 오래 생각하는 모델) 고르기, 검토 지점, 스킬 | ChatGPT 계정, 연습할 실제 일 하나. AI Foundations를 먼저 듣기를 권함 |
| **Agents and Workflows** | 약 90분, 중급 | [Work](07-projects-plugins.md#chat과-work의-차이)에 일을 맡기고, 결과를 검토하고, 스킬·예약 작업으로 다시 쓰기 | ChatGPT 계정, 연습할 실제 일 하나, 일을 맡기는 기능(원문 "agent capabilities", 강좌에서는 Work)을 쓸 수 있는 계정. 앞 두 강좌를 먼저 듣기를 권함 |

강좌마다 본문을 끝까지 듣고 **시험(Assessment)에서 80% 이상** 받으면 **배지**를 이메일로 받습니다.[^academy-courses] 도움말은 이것이 자격증이 아니라고 밝힙니다.[^academy] 이 가이드의 [인증 시험](../00-common/certificate.md)도 같은 성격의 학습 배지입니다.

### 강좌에서 배우는 틀 — 이 가이드와 비교

세 강좌에는 이 가이드와 같은 내용이 다른 이름으로 나옵니다. 아래 연결을 알아 두면 강좌에서 새 용어를 만났을 때 뜻을 짐작하기 쉽습니다. 강좌에서 쓰는 이름은 영어 원문 그대로 적었습니다.[^academy-content]

- **Task·Context·Expectation** (AI Foundations): 할 일, 배경(누구를 위한 일인지, 왜 필요한지), 답의 모양(형식·길이·말투)을 정해서 부탁합니다. [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)와 같은 생각입니다.
- **CLEAR** (AI Foundations): 답을 받으면 스스로 묻습니다. 다 답했나(Complete)? 앞뒤가 맞나(Logical)? 근거가 있나(Evidence)? 읽을 사람에게 맞나(Audience)? 주제에서 벗어나지 않았나(Relevant)? [1단계 9장 「확인하는 네 가지 습관」](../00-common/09-safety.md#확인하는-네-가지-습관)과 [1단계 11장 「일의 무게만큼 확인하기」](../00-common/11-expert.md#일의-무게만큼-확인하기)를 함께 보세요.
- **"Use ChatGPT as the workspace, not the source of truth."** (AI Foundations): ChatGPT를 작업하는 곳으로 쓰고, ChatGPT의 답만으로 사실을 판단하지 말라는 뜻입니다. 최신 사실·정책·가격·날짜가 필요하면 믿을 만한 자료나 검색으로 먼저 가져오고, ChatGPT에는 그 자료를 정리하게 하세요. [6장 「웹 검색」](06-search.md#웹-검색-—-chatgpt가-인터넷을-찾아보게-하기)으로 이어집니다.
- **워크플로의 다섯 부분** (Applied AI Foundations): 목표·맥락·단계·검토 지점·결과물을 정합니다. 한 번에 전부 시키지 말고 단계마다 확인하며 나아갑니다. 이 장의 [「일을 맡기는 다섯 줄」](#일을-맡기는-다섯-줄-—-결과·자료·남길-것·검토-기준·모양)과 [1단계 5장 「3. 단계 나누기」](../00-common/05-prompt-patterns.md#_3-단계-나누기-—-프롬프트-체이닝)를 보세요.
- **워크플로 노트** (Applied AI Foundations): 긴 작업을 하다 보면 ChatGPT가 처음 목표나 조건을 놓칠 수 있습니다. 그래서 목표, 결정한 내용, 지킬 조건, 확인할 지점을 짧은 메모 하나에 적어 둡니다. 다음 단계에서 이 메모를 다시 보여 주면 앞서 정한 내용을 이어 갈 수 있습니다. 이 메모를 [7장 「프로젝트」](07-projects-plugins.md#프로젝트-—-대화·파일·지침을-한-폴더에)의 파일로 두고 고칠 때마다 바꿔 두는 것은 이 가이드의 제안입니다.
- **에이전트에게 일 맡기기** (Agents and Workflows): 무엇을 만들지, 어떤 자료를 쓸지, 하지 말아야 할 것(보내지 않기, 날짜·담당자 지어내지 않기 등), 결과의 모양, 내가 확인할 것을 미리 적습니다. 이 장의 [「일을 맡기는 다섯 줄」](#일을-맡기는-다섯-줄-—-결과·자료·남길-것·검토-기준·모양)과 거의 같습니다.
- **기능 고르는 규칙** (Agents and Workflows): 많은 경우에는 분명한 프롬프트 하나면 충분합니다. 다른 서비스의 자료가 필요하면 플러그인, 같은 일이 반복되면 스킬, 같은 확인을 정해진 때에 다시 하려면 예약 작업을 씁니다. [「반복하는 일은 틀로」](#반복하는-일은-틀로-—-지침·템플릿·스킬)와 [「정해진 때에 알아서」](#정해진-때에-알아서-—-예약-작업)를 보세요.

강좌에는 직접 해 보는 활동이 많습니다. 옆 탭에 ChatGPT를 열어 두면 들으면서 바로 따라 할 수 있습니다. 강좌는 휴대폰보다 컴퓨터로 듣기를 권합니다.[^academy-content]

### 무료로 볼 수 있는 공개 자료

Academy 강좌는 ChatGPT 계정으로 로그인해야 듣지만, 아래 자료는 **무료**이고 소개 페이지를 로그인 없이 열 수 있습니다. 다만 강의를 실제로 들으려면 가입해야 하는 곳도 있습니다(부스트코스는 수강 신청이 필요). 모두 2026-10-25에 공식 페이지를 직접 열어 확인했습니다.

| 자료 | 만든 곳 | 언어·분량 | 이런 분께 |
|---|---|---|---|
| [Introduction to Prompt Engineering](https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13) (영상) | OpenAI Academy | 영어 | 이 가이드 1단계에서 배운 프롬프트 쓰는 법을 OpenAI가 만든 영상으로 복습하고 싶은 분. 다음 편은 [Advanced Prompt Engineering](https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13)[^academy-public] |
| [ChatGPT fundamentals](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics) (글) | OpenAI Academy | 영어 | ChatGPT 기초를 OpenAI가 직접 정리한 글로 다시 보고 싶은 분[^academy-public] |
| [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | DeepLearning.AI. OpenAI 직원(Isa Fulford)과 앤드루 응(Andrew Ng)이 함께 강의 | 영어, 1시간 40분 | 개발자를 위한 프롬프트 강좌가 궁금한 분. **파이썬**(프로그래밍 언어의 하나) 기초가 필요하다. 무료는 "학습 플랫폼 베타(정식 출시 전 시험 운영) 기간 한정"이라고 적혀 있어, 지금도 무료인지 페이지에서 확인하고 듣는다[^dlai] |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) (GitHub — 자료를 올려 두는 사이트) | Microsoft | 21강, **한국어 번역 있음**([한국어판](https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations/ko)) | 생성형 AI 앱 만들기에 관심 있는 분. 개념을 설명하는 「Learn」 강의부터 읽는다(「Build」 강의에는 코드 예시가 있다)[^msgenai] |
| [AI로 배우는 단계별 기획서 작성법](https://www.boostcourse.org/aix210) | 부스트코스 | **한국어**, 강의 3개와 실습 과제 | 한국어 강의로 AI를 일에 쓰는 법을 배우고 싶은 분. AI로 기획서를 쓰는 법을 다루는 강좌이고, 수강 신청(회원 가입)이 필요하다[^boost] |

영어 자료는 크롬 같은 브라우저의 번역 기능(페이지에서 마우스 오른쪽 버튼 → 「한국어로 번역」)으로 읽을 수 있습니다.

ChatGPT가 어떻게 만들어지고 어떻게 쓰는지 설명하는 Andrej Karpathy의 유명한 영상들은 [1단계 1장 「영상으로 더 보기」](../00-common/01-what-is-llm.md#영상으로-더-보기)와 [1단계 3장 「영상으로 더 보기」](../00-common/03-why-learn.md#영상으로-더-보기)에 모아 두었습니다.

> Coursera의 유명 강좌인 「Prompt Engineering for ChatGPT」와 「Generative AI for Everyone」은 강좌 페이지에 "강의 자료와 과제를 보려면 수료증 과정을 구매해야 한다"고 적혀 있어 이 무료 목록에서 뺐습니다(확인일 2026-10-25).[^coursera]

<Quiz id="ch111-academy" />

## 직접 해 보기

1. 날짜·품목·수량·금액 표를 메모장에 10줄쯤 지어내 CSV로 저장하고, ChatGPT에 올려 "흔한 문제가 있는지 먼저 확인해 줘"라고 보낸다. 그다음 품목별 합계를 막대 차트로 받고, 계산 방법과 가정을 보여 달라고 해서 합계가 내가 직접 더한 값과 같은지 대조한다.
2. 「다섯 줄」 틀로 이번 주 할 일 정리를 부탁해 본다. 검토 기준 줄을 빼고 한 번, 넣고 한 번 보내 차이를 비교한다.
3. 예약 작업을 하나 만들어 본다("내일 아침에 물 마시라고 알려 줘"). 옆 메뉴 「예약」에서 보이는지 확인하고, 다 봤으면 지운다.
4. `@study` 로 공부 모드를 켜고, 요즘 궁금했던 주제 하나를 20분 복습 프롬프트로 배워 본다.

**이어지는 과제** ([독서 모임 준비하기](../00-common/practice-kit.md)): 예시 파일 fees.csv를 올려 1번처럼 "흔한 문제가 있는지 먼저 확인해 줘"라고 보낸다. 두 번 적힌 다과와 금액이 빈 줄을 찾아내는지 본다. 그다음 "수입·지출 합계와 남은 돈을 표로, 항목별 지출을 막대 차트로 보여 줘"라고 보내고, 표의 숫자를 직접 더한 값과 맞춰 본다. 마지막으로 [과제 점검표](../00-common/practice-kit.md#마지막에-남는-것)를 하나씩 체크한다.

## 정리

- 전문가는 일을 맡기듯 말한다. 결과·자료·남길 것·검토 기준·모양 다섯 줄을 적고, 결과물마다 정해 둔 곳을 확인한 뒤에 쓴다.
- 빠른 사실은 검색, 깊은 조사는 심층 리서치, 완성 파일은 Work, 어려운 생각은 추론 수준. 기능이 되는지는 물어보지 말고 시켜 본다.
- 잘 된 답은 「프로젝트 소스에 추가」로 쌓고, 반복하는 일은 지침 → 템플릿(Work) → 스킬(도움말 기준 회사·학교 요금제)로 틀을 만든다.
- Word·PowerPoint의 ChatGPT 추가 기능은 무료로도 쓸 수 있다. 크게 고치기 전에 사본을 저장하고 계획부터 받는다.
- 예약 작업은 대화에서 부탁해 만들고 옆 메뉴 「예약」에서 관리한다. 프로젝트 안 작업은 프로젝트 파일을 못 읽고, 앱으로 바꾸는 작업은 승인을 기다리며 멈출 수 있다.
- 데이터 분석은 정리된 파일을 올리고 먼저 데이터 문제를 확인한 뒤 방법을 지정한다. 공부 모드는 `@study` 로 켜고 모든 요금제에서 쓴다(프로젝트·임시 채팅 제외).
- 더 배우려면 OpenAI Academy(로그인 필요, 약 70~90분 강좌 세 개)나 무료 공개 자료(OpenAI Academy 공개 영상, DeepLearning.AI, Microsoft, 부스트코스)를 본다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Review criteria | 리뷰 크라이티리어 (검토 기준) | 결과가 잘 됐는지 판단할 잣대 |
| Scheduled tasks | 스케줄드 태스크 (예약 작업) | 정해 둔 때에 ChatGPT가 알아서 실행하는 작업 |
| Data analysis | 데이터 애널리시스 (데이터 분석) | 올린 파일의 표와 숫자를 계산해 요약·차트로 보여 주는 기능 |
| Template | 템플릿 | 예시 파일과 다시 쓸 지침을 묶은 틀 |
| Study mode | 스터디 모드 (공부 모드) | 답 대신 질문과 단계별 설명으로 가르치는 방식 |
| Characteristics | 캐릭터리스틱스 (특성) | 따뜻함·이모지 등 답의 분위기를 더·덜 조절하는 설정 |
| Writing block | 라이팅 블록 (글쓰기 블록) | 답 속에서 바로 고칠 수 있는 초안 글 상자 |
| OpenAI Academy | 오픈에이아이 아카데미 | OpenAI가 만든 무료 온라인 AI 강좌 |
| Add-in | 애드인 (추가 기능) | Word·PowerPoint 같은 프로그램 안에 붙여 쓰는 작은 기능 |

<ChapterDone :chapter="111" />

다음 장: 2단계를 마쳤습니다. [AI 지식 레벨 시험](../00-common/level-test.md)으로 실력을 확인해 보세요.

[^adopt]: OpenAI, 「ChatGPT Usage and Adoption Patterns at Work」. "Advanced features remain underused, even where they could deliver broad impact." https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work (확인일 2026-10-24)
[^work]: OpenAI 도움말, 「ChatGPT Work and Codex」 "Describe the outcome you want. Add any files, constraints, and review criteria ChatGPT should use." https://help.openai.com/en/articles/20001275 · 「Using cloud browser in ChatGPT」 "Check the result and its sources before relying on it." https://help.openai.com/en/articles/20001280 (확인일 2026-10-24)
[^docs]: OpenAI 도움말, 「Creating and editing documents, spreadsheets, and presentations with ChatGPT Work」. 템플릿·`@Template-Creator`, "Say what must stay unchanged…" https://help.openai.com/en/articles/20001278 (확인일 2026-10-24)
[^prompt]: OpenAI 도움말, 「How do I create a good prompt for an AI model?」. https://help.openai.com/en/articles/4936848 (확인일 2026-10-24)
[^aprompt]: OpenAI Academy, 「Prompting」. https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting (확인일 2026-10-24)
[^deep]: OpenAI 도움말, 「Deep research in ChatGPT」. "Use search for quick facts, and use deep research for depth and thoroughness." https://help.openai.com/en/articles/10500283 (확인일 2026-10-24)
[^ask]: OpenAI 도움말, 「How to Ask ChatGPT About Its Features」. https://help.openai.com/en/articles/12548278 (확인일 2026-10-24)
[^projects]: OpenAI 도움말, 「Projects in ChatGPT」. https://help.openai.com/en/articles/10169521 (확인일 2026-10-24)
[^skills]: OpenAI 도움말, 「Skills in ChatGPT」. "Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" https://help.openai.com/en/articles/20001066 (확인일 2026-10-24)
[^tasks]: OpenAI 도움말, 「Scheduled tasks in ChatGPT」. 요금제별 작업 수, 프로젝트 안 작업의 파일 접근 제한, 공유 주의. https://help.openai.com/en/articles/10291617 (확인일 2026-10-24)
[^data]: OpenAI 도움말, 「Data analysis with ChatGPT」 https://help.openai.com/en/articles/8437071 · 「Extracting Insights with ChatGPT Data Analysis」 "Check this data for common issues." https://help.openai.com/en/articles/9213685 (확인일 2026-10-24)
[^study]: OpenAI 도움말, 「Using study mode in ChatGPT」 https://help.openai.com/en/articles/11780217 · 「Flashcards in ChatGPT」 "Flashcards are automatically saved in your library." https://help.openai.com/en/articles/20001533 (확인일 2026-10-24)
[^char]: OpenAI 도움말, 「Characteristics in ChatGPT」. https://help.openai.com/en/articles/20001038 (확인일 2026-10-24)
[^ui]: OpenAI 도움말, 「Intelligent UI in ChatGPT」. "Select Personalization → Layout and Visuals → Simple." https://help.openai.com/en/articles/20001598 (확인일 2026-10-24)
[^blocks]: OpenAI 도움말, 「Working with writing blocks and code blocks in ChatGPT」. https://help.openai.com/en/articles/20001246 (확인일 2026-10-24)
[^links]: OpenAI 도움말, 「ChatGPT generated links」. https://help.openai.com/en/articles/10984597 (확인일 2026-10-24)
[^academy-courses]: OpenAI Academy 강좌 페이지(로그인 후). AI Foundations "Duration: ~70 minutes", "Level: Introduction", "No technical background is required." · Applied AI Foundations "Duration: ~80 minutes", "Level: Intermediate", "We recommend completing AI Foundations first." · Agents and Workflows "Duration: ~90 minutes", "Level: Intermediate", "We recommend completing AI Foundations and Applied AI Foundations first.", "Access to agent capabilities". 세 페이지 공통 "The pathway includes two required steps: completing the course and passing the assessment with a score of at least 80%." / "Your progress is automatically saved." https://academy.openai.com/home/courses/ai-foundations-dnq5w · https://academy.openai.com/home/courses/applied-ai-foundations-szsmv · https://academy.openai.com/home/courses/agents-and-workflows-y0qoc (확인일 2026-10-26)
[^academy-content]: OpenAI Academy 강좌 본문(로그인·등록 필요). AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Use ChatGPT as the workspace, not the source of truth." / "we recommend that you:" "Use a desktop computer or laptop". Applied AI Foundations: "A workflow has five parts" (Goal, Context, Steps, Checkpoints, Output) / "Do not ask ChatGPT to do the whole job at once." / "A workflow note keeps the goal, context, decisions, sources, capabilities, and review points in one place." Applied AI Foundations 추가: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations 추가: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Before you direct the agent to create the project brief document, have the agent review what's in the folder." / "Keep the update internal, do not send or publish it, do not invent owners or dates" / "If Work needs another approved source, start with a plugin. If the same workflow keeps repeating, consider a skill. If the same stable review should run later or recur, consider a scheduled task." / "Often, a clear prompt is enough." / "Use scheduled tasks for workflows that check, monitor, summarize, or report. Be cautious with anything that sends, posts, publishes, deletes, approves, changes records, or creates external commitments." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" (확인일 2026-10-26)
[^academy]: OpenAI 도움말, 「OpenAI Academy courses」. "These badges and certificates of completion are not certifications" https://help.openai.com/en/articles/20001270 (확인일 2026-10-24)
[^word]: OpenAI 도움말, 「ChatGPT for Word」. "ChatGPT for Word is available on all ChatGPT plans, including Free." / "Word, Excel, and PowerPoint use the same ChatGPT Microsoft add-in." / "ChatGPT memory and skills do not carry over to the add-in." / "Save a copy of important work before making substantial changes." https://help.openai.com/en/articles/20001526 (확인일 2026-10-24)
[^ppt]: OpenAI 도움말, 「ChatGPT for PowerPoint」. "Free and Go include limited usage access." / "Ask for a plan first when you are making larger edits." / "For important work, duplicate the file first so you can revert if needed." https://help.openai.com/en/articles/20001242 (확인일 2026-10-24)
[^gpt-make]: OpenAI 도움말, 「Creating and editing GPTs」. "Prefer positive, concrete instructions (“Do X”) over long lists of prohibitions (“Don’t do Y”) when possible." / "Use knowledge for reference material, not rules or behavior." / "Before adding more tools, tighten instructions and add examples." https://help.openai.com/en/articles/8554397 (확인일 2026-10-24)
[^slack]: OpenAI 도움말, 「Using Slack in ChatGPT」. "A shared task link does not transfer your Slack connection, credentials, channel access, or message history." https://help.openai.com/en/articles/12525822 (확인일 2026-10-24)
[^apps-trouble]: OpenAI 도움말, 「Troubleshooting plugins and apps in ChatGPT」. "If approval is required, the task pauses until you review it." / "Before resending an email or message, check the intended account’s sent messages and the destination." https://help.openai.com/en/articles/20001497 (확인일 2026-10-24)
[^drive]: OpenAI 도움말, 「Google Drive app and setup in ChatGPT」. "Finding a filename or file details does not confirm that ChatGPT retrieved the file’s contents." https://help.openai.com/en/articles/10929079 (확인일 2026-10-24)
[^academy-public]: OpenAI Academy 공개 페이지. 「Introduction to Prompt Engineering」(Posted Mar 08, 2025), 「Advanced Prompt Engineering」, 「ChatGPT fundamentals」(Last updated on May 30, 2026). 셋 모두 로그인하지 않은 브라우저에서 열림을 확인. https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13 · https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13 · https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics (확인일 2026-10-25)
[^dlai]: DeepLearning.AI, 「ChatGPT Prompt Engineering for Developers」. 강사 Isa Fulford "Member of Technical Staff, OpenAI"·Andrew Ng, "1h40m", "Beginner", "Only a basic understanding of Python is needed.", "Course access is free for a limited time during the DeepLearning.AI learning platform beta!" https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/ (확인일 2026-10-25)
[^msgenai]: Microsoft, 「Generative AI for Beginners」 GitHub 저장소 README. "This course has 21 lessons." / "Lessons are labeled either 'Learn' lessons explaining a Generative AI concept or 'Build' lessons that explain a concept and code examples". 한국어 번역은 `translations/ko` 폴더. https://github.com/microsoft/generative-ai-for-beginners (확인일 2026-10-25)
[^boost]: 부스트코스, 「AI로 배우는 단계별 기획서 작성법」 강좌 소개. 「무료강의」, 난이도 「입문」, 「상시 수강」, 강의계획 #1~#3과 「[과제] 자율 실습 해보기」, 이승필 강사. https://www.boostcourse.org/aix210 (확인일 2026-10-25)
[^coursera]: Coursera 강좌 페이지 FAQ. "To access course materials, assignments, and earn a Certificate, you'll need to purchase the Certificate experience when you enroll in a course." https://www.coursera.org/learn/prompt-engineering · https://www.coursera.org/learn/generative-ai-for-everyone (확인일 2026-10-25)
[^scheduled-name]: 도움말은 이 메뉴를 「예약됨」이라고 부르지만 실제 화면 이름은 「예약」입니다.
[^screen-scheduled]: 옆 메뉴 「예약」 화면을 직접 확인. 안내 문구 "ChatGPT에게 작업 예약, 알림 설정 또는 업데이트 모니터링을 요청하세요", 입력창 「작업 예약하기」, 작업 줄의 「일시 중지」「편집」 버튼, 「추천」 목록(뉴스 업데이트·이메일 모니터링·주말 읽을거리 찾기 등). 작업을 눌러 여는 패널은 실제 작업 결과가 보여 싣지 않았다 (확인일 2026-10-28, Plus 계정 웹 화면)
[^screen-data]: 가짜 회비 장부 fees.csv를 올리고 이 절의 프롬프트를 보내 직접 확인. 첫 답은 빈 값·중복을 찾아 집계를 멈췄고, 두 번째 답의 그림 차트는 한글이 네모로 깨졌으며, 다시 그려 달라고 하자 화면 안에 그린 차트로 바꿨다. 차트 옆 버튼은 「차트 다운로드」「차트 펼치기」. 대화를 지운 뒤에도 fees.csv는 라이브러리에 남아 있었고, 라이브러리에서 지우자 "휴지통으로 이동되며 30일 후 영구 삭제됩니다"라고 안내했다 (확인일 2026-10-28, Plus 계정 웹 화면)
[^screen-study]: 입력창에 `@study` 를 입력해 제안 목록을 직접 확인(보내지는 않음). 제안 이름 「공부하기」, 설명 "새로운 개념을 배워보세요" (확인일 2026-10-28, Plus 계정 웹 화면)
