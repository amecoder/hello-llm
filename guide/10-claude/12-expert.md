# 12장. 전문가처럼 쓰기 — 판단하고, 시험하고, 쌓아 가기

> **한 줄 요약**: 잘 쓰는 데 필요한 것은 버튼을 더 많이 아는 것만이 아닙니다. **무엇을 맡길지 판단하고, 맡기기 전에 시험해 보고, 되풀이하는 것은 쌓아 두는** 힘입니다.
> 이 장은 1~11장에서 익힌 기능을 내 일에 맞게 **조합하는 법**을 다룹니다. 끝에는 Anthropic이 만든 강좌 모음 Claude Academy를 소개합니다.

이 장은 새 기능을 거의 다루지 않습니다. 앞 장에서 배운 기능을 언제, 어떻게 꺼내 쓸지가 주제입니다.

## 전문가는 무엇이 다른가

1~11장에서는 버튼과 메뉴를 익혔습니다. Anthropic의 강좌는 AI를 잘 다루는 힘을 이렇게 설명합니다. 어떤 버튼을 누를지 아는 데서 그치지 않고, 상황마다 AI를 어떻게 쓸지 **판단하는 힘**까지 기르는 것입니다.[^academy-4d]

강좌는 이 판단을 네 가지 힘으로 나눕니다. 영어 머리글자를 따서 「4D」라고 부릅니다.[^academy-4d]

- **맡기기 — Delegation**: 어떤 일은 내가 하고, 어떤 일은 AI에게 맡길지 나눕니다.
- **설명하기 — Description**: 원하는 결과와 방법을 분명하게 전합니다.
- **가려보기 — Discernment**: 받은 결과가 맞는지, 쓸 만한지 따져 봅니다.
- **책임지기 — Diligence**: 책임 있게 쓰고, AI를 쓴 사실을 숨기지 않고, 결과를 내가 책임집니다.

이 가운데 이미 연습한 것도 많습니다. [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)가 「설명하기」입니다. 강좌는 답이 아쉬울 때 고쳐 가는 요령이 「가려보기」와 「책임지기」에 기댄다고 설명합니다.[^academy-4d] 이 가이드에서는 [1단계 9장 「확인하는 네 가지 습관」](../00-common/09-safety.md#확인하는-네-가지-습관)이 여기에 해당합니다.

이 장은 나머지 하나, **무엇을 맡길지 정하는 힘**을 주로 다룹니다.

<Quiz id="ch212-difference" />

## 맡기기 전에 시험해 보기

"이 일을 Claude에게 맡겨도 될까?" 감으로 정하지 말고 시험해 보세요. 방법은 간단합니다. **내가 이미 답을 아는 일**로 시켜 보는 것입니다. 강좌는 이것을 평가(Evals)라고 부릅니다.[^academy-eval]

1. 자주 하는 일 하나를 고릅니다. 지난달에 쓴 안내 메일, 지난 분기에 만든 정리표 같은 것입니다.
2. 내가 했던 결과물을 5~10개 모읍니다.
3. 그때 내가 가지고 있던 자료를 주고, 같은 일을 Claude에게 시킵니다.
4. 내 결과와 나란히 놓고 비교합니다.

예를 들면 이렇게 보내 볼 수 있습니다. 내가 전에 쓴 메일은 아직 보여 주지 마세요(이 가이드의 제안). 그래야 Claude가 따라 쓰지 않고 스스로 만든 결과를 볼 수 있습니다.

```
아래 메모로 동네 독서 모임 회원들에게 보낼 다음 달 안내 메일을 써 줘.
받는 사람은 40~60대 회원 20명이고, 말투는 정중하지만 딱딱하지 않게 해 줘.
[메모 붙여 넣기]
```

비교할 때 스스로 물어보세요. 중요한 내용을 다 담았나? 말투와 모양이 맞나? 빠진 것은 무엇인가?[^academy-eval]

빠진 것이 보이면 설명을 보태서 다시 시켜 보세요. 설명을 보태자 맞게 나왔다면, 다음부터 그 설명을 꼭 넣으면 됩니다. 몇 번 다듬어도 내 결과에 못 미친다면, 그 일은 맡기지 않는 편이 낫다는 것을 배운 셈입니다.[^academy-eval]

시험을 통과해도 확인은 계속합니다. 시험은 믿음을 키워 줄 뿐, 책임을 없애 주지는 않습니다.[^academy-eval]

<Quiz id="ch212-eval" />

## 일에 맞는 도구 고르기

메뉴를 먼저 고르지 마세요. 지금 앞에 놓인 일이 어떤 모양인지 먼저 보세요. 그러면 쓸 기능은 저절로 정해집니다.[^academy-tabs]

| 이런 일이면 | 이걸 쓴다 | 자세히 |
|---|---|---|
| 묻고, 다듬고, 같이 생각한다 | 보통 대화 | [1단계](../00-common/) |
| 간단한 사실, 오늘 일어난 일 | 웹 검색 | [6장](06-search.md#언제-무엇을-쓸까) |
| 최신 정보 없이 깊이 따진다 | 확장 사고 | [6장](06-search.md#언제-무엇을-쓸까) |
| 자료를 많이 모아 보고서로 | 리서치(유료) | [6장](06-search.md#언제-무엇을-쓸까) |
| 한 가지 일을 계속 이어 간다 | 프로젝트 | [7장](07-projects-tools.md#프로젝트-—-자료와-지침을-한곳에) |
| 문서·표·발표 파일이 필요하다 | 파일 만들기 | [4장](04-files-artifacts.md#파일-만들어-받기-—-excel·word·powerpoint·pdf) |
| 여러 단계 끝에 결과물을 받는다 | Cowork(유료) | [8장](08-cowork.md#cowork란-—-대화가-아니라-일을-맡긴다) |
| 정해진 때마다 되풀이한다 | 예약 작업(유료) | [8장](08-cowork.md#정해진-때에-알아서-—-예약-작업) |

웹 검색·확장 사고·리서치를 나누는 기준은 도움말에서 왔습니다.[^when] 나머지 줄은 앞 장들의 내용을 한 표에 모은 것입니다.

대부분은 맨 윗줄, 보통 대화 하나로 충분합니다.

<Quiz id="ch212-tools" />

## 반복하는 일은 쌓아 두기

쓰다 보면 같은 말을 되풀이하게 됩니다. 되풀이하는 것을 한 번 적어 두면, 다음부터는 Claude가 알고 시작합니다.

담는 곳은 네 가지입니다. 처음부터 다 쓸 필요는 없습니다. 아래 순서로, 필요해질 때 하나씩 더하세요.[^academy-layers]

1. **모든 대화에 같은 부탁을 한다** → [지침](05-memory.md#지침-—-모든-대화에-적용할-규칙)에 적습니다.
2. **한 가지 일을 계속 이어 간다** → 그 일을 [프로젝트](07-projects-tools.md#프로젝트-—-자료와-지침을-한곳에)로 묶습니다.
3. **같은 순서를 매번 설명한다** → 그 순서를 [스킬](07-projects-tools.md#스킬-—-일하는-방식을-넣어-두기)로 만듭니다.
4. **잘 다듬은 스킬을 한 묶음으로 나누고 싶다** → 여러 스킬을 [플러그인](07-projects-tools.md#플러그인-—-업무별-꾸러미)으로 묶습니다. 플러그인은 유료 요금제 기능입니다.[^plugins]

순서대로 가면 매번 새로 설명할 일이 조금씩 줄어듭니다.

프로젝트와 스킬이 헷갈리면 이렇게 기억하세요. **프로젝트는 자료를 담고, 스킬은 일하는 순서를 담습니다.**[^academy-skills-vs] 자세한 차이는 [7장 「지침·프로젝트·커넥터와 무엇이 다른가」](07-projects-tools.md#지침·프로젝트·커넥터와-무엇이-다른가)에 있습니다.

### 만든 스킬은 시험해 보고 쓰기

내가 만든 스킬은 내가 쓸 때 잘 됩니다. 무엇을 넣어야 하는지 내가 알기 때문입니다. 그런데 조금 다르게 부탁하거나, 조금 다른 자료를 주면 흔들릴 수 있습니다.[^academy-skilltest]

그래서 같은 부탁을 두 번 해 보세요. 한 번은 스킬을 켜고, 한 번은 끄고요. 스킬은 「사용자 지정」 → 「Skills」에서 켜고 끌 수 있습니다([7장 「기본 스킬과 내 스킬」](07-projects-tools.md#기본-스킬과-내-스킬)).[^skills-use] 꺼 둔 스킬은 Claude가 쓰지 않습니다.

두 답을 나란히 놓고 스스로 물어보세요. 스킬을 쓴 쪽이 정말 더 나은가? 아니라면 무엇이 빠졌나?[^academy-skilltest]

고칠 점은 구체적으로 말하세요.[^academy-skilltest]

- 아쉬운 예: "좀 이상해."
- 나은 예: "말투가 너무 딱딱해." "맨 앞 요약이 빠졌어."

나은 예는 무엇을 고칠지 짚어 주니 Claude가 바로 손댈 수 있습니다. 그리고 **한 번에 하나만** 고치세요. 그래야 무엇이 효과가 있었는지 알 수 있습니다.[^academy-skilltest]

처음부터 완벽할 필요는 없습니다. 강좌는 대부분의 스킬이 한두 번 다듬으면 준비된다고 말합니다.[^academy-skilltest]

<Quiz id="ch212-layers" />

## 표와 숫자 맡기기

[4장 「파일 올리기」](04-files-artifacts.md#파일-올리기)처럼 CSV나 엑셀 파일을 올리면, Claude가 데이터를 분석하고 차트를 그려 줍니다.[^create] 그런데 숫자 분석은 결과를 믿어도 되는지가 가장 걱정됩니다. 이럴 때는 [앞 절](#맡기기-전에-시험해-보기)의 방법을 숫자에 써 보세요.

강좌에 나오는 예는 이렇습니다.[^academy-data] 퇴역 군인을 돕는 단체의 담당자 리오는 분기마다 출석과 취업 결과를 분석합니다.

1. 리오는 **이미 분석을 끝낸 지난 분기 자료**를 AI에게 다시 맡겼습니다.
2. 답이 올 때마다 자기 결과와 맞춰 보고, 빠진 점을 적었습니다.
3. AI는 출석과 취업의 관계는 맞게 찾았습니다. 하지만 주거 지원과 취업 알선을 함께 하는 프로그램에서 보이는 중요한 점을 놓쳤습니다.
4. "프로그램 종류도 따로 봐 줘"라고 보태자, 그것도 잡아냈습니다.
5. 리오는 다음 분기부터 그 한 줄을 꼭 넣기로 했습니다.

이렇게 해 보세요.

```
첨부한 표는 지난 분기 매출 원자료야. 내가 이미 분석해 둔 결과가 있어서, 네가 같은 결론에 닿는지 보려고 해.
월별 변화와 지점별 차이를 계산하고, 어떻게 계산했는지 단계마다 보여 줘.
```

숫자가 익숙하지 않아도 괜찮습니다. 엑셀 함수나 지저분한 표 정리를 부탁해 보세요. 모르는 단계가 나오면 설명해 달라고 계속 물어보세요. 과정을 따라갈 수 있어야 결과를 확인할 수 있습니다.[^academy-data]

맞춰 보는 시험을 통과해도 책임은 그대로입니다. 결과가 상식에 맞는지 보세요. AI의 도움을 받았다는 것도 숨기지 마세요.[^academy-data] 중요한 계산은 다른 계산 프로그램이나 손으로 다시 확인하세요([4장](04-files-artifacts.md#파일-만들어-받기-—-excel·word·powerpoint·pdf)).

<Quiz id="ch212-data" />

## 배우는 데 쓰기

무언가를 배울 때는 답을 바로 받지 말고, 내가 생각하도록 이끌어 달라고 해 보세요. 스스로 답을 찾아가면 푸는 길을 함께 익히게 됩니다.

```
엑셀의 VLOOKUP을 배우고 싶어. 답을 바로 알려 주지 말고, 내가 스스로 생각해 보게 질문을 하나씩 던져 줘.
```

::: details 받는 답은 대략 이렇게 (예시 — 눌러서 펼치기)
이 가이드가 만든 예시입니다. 실제 답은 서비스와 그때그때에 따라 다릅니다.

> 좋아요, 같이 생각해 봐요. 첫 질문입니다. 한 표에는 상품 번호와 가격이 있고, 다른 표에는 상품 번호만 있어요. 가격을 손으로 채운다면 어떻게 하시겠어요?

내가 "번호를 보고 첫 번째 표에서 찾아 적겠다"고 답하면 이렇게 이어집니다.

> 맞아요. VLOOKUP이 바로 그 일을 대신해요. 그럼 다음 질문입니다. 엑셀이 대신 찾아 주려면 무엇을 알려 줘야 할까요?

**잘 받았는지 확인해 보세요**: 함수 식을 처음부터 다 알려 주지 않았나? 질문이 한 번에 하나인가? 내 대답에 맞춰 다음 질문이 이어지나?

:::

Claude가 나에게 질문을 던지게 하는 방법은 [1단계 5장 「4. 되묻게 하기」](../00-common/05-prompt-patterns.md#_4-되묻게-하기-—-flipped-interaction)와 같은 원리입니다. 내 눈높이에 맞춘 설명을 받는 프롬프트는 [프롬프트 모음 「공부·설명 듣기」](../00-common/prompt-library.md#공부·설명-듣기)에 있습니다.

<Quiz id="ch212-learn" />

## 더 배우려면 — Claude Academy

**Claude Academy**는 Anthropic이 만든 온라인 강좌 모음입니다. 아래 강좌는 강의 본문을 로그인 없이 열어 볼 수 있습니다(2026-10-26 확인). 본문은 모두 **영어**이고, 강좌 첫 페이지에 걸리는 시간은 적혀 있지 않습니다.[^academy-courses]

| 강좌 | 강의 수 | 이런 분께 | 준비물 |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14강 + 퀴즈 | AI 경험과 상관없이 누구나 | 아무 AI 서비스 계정. 유료 요금제 필요 없음 |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13강 + 퀴즈 | AI가 왜 그렇게 답하는지 알고 싶은 분 | 사전 지식 필요 없음 |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13강 + 퀴즈 | 일에 Claude를 처음 쓰는 분 | Claude 계정(무료 포함). Cowork·리서치 강의는 유료 요금제 |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14강 + 퀴즈 | 파일·앱 사이를 오가며 일하는 분 | 유료 요금제, 폴더를 쓰는 강의는 컴퓨터 앱. 코딩 몰라도 됨 |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6강 | 스킬 파일을 직접 만들고 싶은 분 | Claude Code(3단계에서 다룰 개발자용 도구) |

- 앞의 두 강좌는 Claude가 아닌 다른 AI로 들어도 됩니다. 두 강좌는 어느 쪽을 먼저 들어도 되게 짜여 있습니다.[^academy-courses]
- 「AI Fluency」 강좌는 마지막 퀴즈에서 80% 이상 맞히면 **수료 배지**(completion badge)를 계정에 추가할 수 있습니다. 자격증은 아닙니다.[^academy-courses] 이 가이드의 [이해도 확인 시험](../00-common/certificate.md)도 같은 성격의 학습 배지입니다.
- 「Introduction to agent skills」는 이 가이드의 3단계(코딩 에이전트 도구)를 마친 뒤에 보세요. 모든 내용이 Claude Code 기준입니다.

영어 페이지는 크롬 같은 브라우저의 번역 기능(페이지에서 마우스 오른쪽 버튼 → 「한국어로 번역」)으로 읽을 수 있습니다.

### 강좌에서 배우는 틀 — 이 가이드와 비교

강좌에는 이 가이드와 같은 내용이 다른 이름으로 나옵니다. 아래 연결을 알아 두면 강좌에서 새 용어를 만났을 때 뜻을 짐작하기 쉽습니다. 강좌에서 쓰는 이름은 영어 원문 그대로 적었습니다.

- **Setting the stage · Defining the task · Specifying rules** (Claude 101): 내 역할과 목표, 할 일, 말투·형식·예시를 정해 부탁합니다.[^academy-stage] [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)와 같은 생각입니다.
- **4D — Delegation · Description · Discernment · Diligence** (Claude 101, AI Fluency): 이 장의 [「전문가는 무엇이 다른가」](#전문가는-무엇이-다른가)를 보세요.
- **Evals** (Claude 101, Cowork): 이미 답을 아는 일로 시험해 보기입니다. 이 장의 [「맡기기 전에 시험해 보기」](#맡기기-전에-시험해-보기)와 [「만든 스킬은 시험해 보고 쓰기」](#만든-스킬은-시험해-보고-쓰기)를 보세요.
- **Chat · Cowork · Code** (Claude 101): 주고받으며 하는 일은 대화, 맡기는 일은 Cowork, 프로그램 만들기는 Claude Code입니다.[^academy-tabs] [8장 「Cowork란」](08-cowork.md#cowork란-—-대화가-아니라-일을-맡긴다)과 이 장의 [「일에 맞는 도구 고르기」](#일에-맞는-도구-고르기)를 보세요.
- **결과물·자료·나만 아는 사정** (Cowork): 맡길 때 이 셋을 적습니다.[^academy-review] [8장 「맡기는 요령」](08-cowork.md#맡기는-요령)과 같습니다.
- **결과 검토 세 질문** (Cowork): 원한 결과인가? 사실이 맞나? 지어낸 데는 없나?[^academy-review] [1단계 9장 「확인하는 네 가지 습관」](../00-common/09-safety.md#확인하는-네-가지-습관)을 함께 보세요.
- **"projects store knowledge, skills perform tasks"** (Claude 101): 프로젝트는 자료, 스킬은 일하는 순서입니다.[^academy-skills-vs] 이 장의 [「반복하는 일은 쌓아 두기」](#반복하는-일은-쌓아-두기)를 보세요.

<Quiz id="ch212-academy" />

## 직접 해 보기

[11장 「실습할 때 지킬 세 가지」](11-practice.md#실습할-때-지킬-세-가지)처럼, 실제 회사 자료 대신 지어낸 자료로 해 보세요.

1. 지난달에 쓴 척하는 짧은 안내 메일 하나와 그때의 메모를 지어내 적어 둔다. 메모만 Claude에게 주고 같은 메일을 쓰게 한 뒤, 내 메일과 비교해 "다 담았나? 말투가 맞나? 빠진 것은?"을 적어 본다.
2. 1번에서 빠진 점 하나를 설명에 보태 다시 시켜 본다. 맞게 나오면 그 한 줄을 [5장 지침](05-memory.md#지침-—-모든-대화에-적용할-규칙)이나 프로젝트 지침에 넣어 둔다.
3. 날짜·품목·금액 표를 10줄쯤 지어내 내가 먼저 품목별 합계를 손으로 낸다. 그다음 같은 표를 올려 Claude에게 계산을 맡기고, 계산 단계를 보여 달라고 해서 두 결과를 맞춰 본다.
4. 이 장의 VLOOKUP 프롬프트로, 요즘 배우고 싶은 것 하나를 질문을 받으며 익혀 본다.

## 정리

- 잘 쓰려면 판단하는 힘이 필요하다. 강좌는 그 판단을 맡기기·설명하기·가려보기·책임지기(4D)로 나눈다.
- 맡길지 말지는 감으로 정하지 말고, 이미 답을 아는 일로 시험해 본다. 시험을 통과해도 확인과 책임은 남는다.
- 메뉴보다 일의 모양을 먼저 본다. 대부분은 보통 대화 하나로 충분하다.
- 되풀이하는 것은 지침 → 프로젝트 → 스킬 → 플러그인 순서로, 필요해질 때 하나씩 쌓는다.
- 만든 스킬은 켜고 끄고 두 번 부탁해 비교하고, 한 번에 하나만 고친다.
- 숫자 분석은 지난 자료로 먼저 맞춰 보고, 계산 과정을 보여 달라고 한다.
- 더 배우려면 Claude Academy 강좌(영어, 강의 본문은 로그인 없이 열람)를 본다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| AI Fluency | 에이아이 플루언시 | AI와 잘 함께 일하는 능력 |
| Delegation | 델리게이션 (맡기기) | 무엇을 내가 하고 무엇을 AI에게 맡길지 나누기 |
| Description | 디스크립션 (설명하기) | 원하는 결과와 방법을 분명하게 전하기 |
| Discernment | 디서언먼트 (가려보기) | 받은 결과가 맞고 쓸 만한지 따져 보기 |
| Diligence | 딜리전스 (책임지기) | 책임 있게 쓰고, AI를 쓴 사실을 밝히고, 결과에 책임지기 |
| Evals | 이밸스 (평가) | 이미 답을 아는 일로 AI를 시험해 보는 방법 |
| Claude Academy | 클로드 아카데미 | Anthropic이 만든 온라인 강좌 모음 |

<ChapterDone :chapter="212" />

다음 장: 2단계 Claude 가이드를 마쳤습니다. [2단계 · Claude 목차](./)에서 다시 볼 장을 고르거나, [AI 지식 레벨 시험](../00-common/level-test.md)으로 실력을 확인해 보세요.

[^academy-4d]: Claude Academy 「Claude 101」 강의 「Getting better results」. "AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." / "The prompt framework from Lesson 2 (setting the stage, defining the task, specifying rules) is rooted in Description. The troubleshooting techniques above draw on Discernment and Diligence." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^academy-eval]: Claude Academy 「Claude 101」 강의 「Getting better results」. "Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^academy-data]: Claude Academy 「Claude 101」 강의 「Getting better results」의 영상(원래 「AI Fluency for nonprofits」 강좌의 영상이라고 강의가 밝힘). "Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^academy-tabs]: Claude Academy 「Claude 101」 강의 「How you'll work with Claude on your desktop」. "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (확인일 2026-10-26)
[^academy-layers]: Claude Academy 「Introduction to Claude Cowork」 강의 「Get better results faster」. "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (확인일 2026-10-26)
[^academy-skills-vs]: Claude Academy 「Claude 101」 강의 「Working with skills」. "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (확인일 2026-10-26)
[^academy-skilltest]: Claude Academy 「Introduction to Claude Cowork」 강의 「Validating skills for plugins」. "When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "One where Claude uses your skill" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." 강의는 스킬 만들기 도우미가 비교를 자동으로 띄운다고 설명하지만, 이 가이드는 도움말에서 확인한 켜고 끄기 방법으로 바꿔 적었다. https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins (확인일 2026-10-26)
[^academy-stage]: Claude Academy 「Claude 101」 강의 「Your first conversation with Claude」. "One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude (확인일 2026-10-26)
[^academy-review]: Claude Academy 「Introduction to Claude Cowork」 강의 「Hand Claude Cowork your first task」. "name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop (확인일 2026-10-26)
[^academy-courses]: Claude Academy 강좌 첫 페이지. AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." 같은 강좌 강의 「Introduction to AI Fluency」 "you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities", 퀴즈 "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · 강의 본문은 로그인하지 않은 브라우저에서 열림을 확인 (확인일 2026-10-26)
[^when]: Anthropic 도움말, 「When should I use web search, extended thinking, and research?」. "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 (확인일 2026-10-26)
[^plugins]: Anthropic 도움말, 「Use plugins in Claude」. "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 (확인일 2026-10-26)
[^skills-use]: Anthropic 도움말, 「Use skills in Claude」. "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 (확인일 2026-10-26)
[^create]: Anthropic 도움말, 「Create and edit files with Claude」. "You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 (확인일 2026-10-26)
