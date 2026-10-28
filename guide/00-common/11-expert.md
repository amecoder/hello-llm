# 11장. 전문가처럼 쓰기 — 판단하고, 시험하고, 쌓아 가기

> **한 줄 요약**: 잘 쓰는 데 필요한 것은 버튼을 더 많이 아는 것만이 아닙니다. **무엇을 맡길지 판단하고, 맡기기 전에 시험해 보고, 되풀이하는 것은 쌓아 두는** 힘입니다.
> 이 장은 어느 AI 서비스에서나 통하는 일하는 방법을 모았습니다. 메뉴 위치와 서비스별 기능은 2단계 [ChatGPT 11장](../11-chatgpt/11-expert.md)과 [Claude 12장](../10-claude/12-expert.md)에서 다룹니다.

이 장은 새 기능을 다루지 않습니다. 1~10장에서 익힌 것을 언제, 어떻게 꺼내 쓸지가 주제입니다. 2단계를 읽기 전에 봐도 되고, 2단계를 마친 뒤에 다시 봐도 됩니다.

## 전문가는 무엇이 다른가

[3장 「같은 도구, 다른 결과」](03-why-learn.md#같은-도구-다른-결과)에서 같은 AI도 쓰는 법에 따라 결과가 달라진다고 배웠습니다. Anthropic의 강좌는 AI를 잘 다루는 힘을 이렇게 설명합니다. 어떤 버튼을 누를지 아는 데서 그치지 않고, 상황마다 AI를 어떻게 쓸지 **판단하는 힘**까지 기르는 것입니다.[^academy-4d]

강좌는 이 판단을 네 가지 힘으로 나눕니다. 영어 머리글자를 따서 「4D」라고 부릅니다.[^academy-4d]

- **맡기기 — Delegation**: 어떤 일은 내가 하고, 어떤 일은 AI에게 맡길지 나눕니다.
- **설명하기 — Description**: 원하는 결과와 방법을 분명하게 전합니다.
- **가려보기 — Discernment**: 받은 결과가 맞는지, 쓸 만한지 따져 봅니다.
- **책임지기 — Diligence**: 책임 있게 쓰고, AI를 쓴 사실을 숨기지 않고, 결과를 내가 책임집니다.

이 가운데 이미 연습한 것도 많습니다. [4장 「좋은 프롬프트의 5요소」](04-prompt-basics.md#좋은-프롬프트의-5요소)가 「설명하기」입니다. [9장 「확인하는 네 가지 습관」](09-safety.md#확인하는-네-가지-습관)이 「가려보기」와 「책임지기」에 해당합니다.

OpenAI가 사람들이 일에 ChatGPT를 쓰는 모습을 분석한 글에도 비슷한 점이 보입니다. 사람들은 **자기 분야가 아닌 일**을 맡길 때 예시와 배경을 더 많이 주고, 결과를 확인해 달라는 부탁도 더 자주 했습니다.[^ways] 낯선 일일수록 자료를 함께 주고 확인을 부탁하세요.

이 장은 남은 하나, **무엇을 맡길지 정하는 힘**을 주로 다룹니다.

<Quiz id="ch11-difference" />

## 처음 연습할 일 고르기

가장 크고 중요한 일부터 시작할 필요는 없습니다. 처음에는 이런 일을 고르세요.[^academy-openai]

- 자주 한다
- 결과가 분명하다
- 내가 확인하기 쉽다
- 틀려도 피해가 작다

너무 넓은 일, 가끔만 하는 일, 틀리면 큰일 나는 일, 맞는지 확인하기 어려운 일은 나중으로 미룹니다.[^academy-openai]

| 아직 이른 일 | 먼저 해 보기 좋은 일 |
|---|---|
| 가게 매출 올리기 | 매주 월요일, 지난주 판매 기록으로 요약표 만들기 |
| 모임 운영 잘하기 | 모임이 끝날 때마다 정한 것과 할 일을 안내 문자로 쓰기 |

왼쪽 일은 너무 넓어서 무엇을 시킬지부터 막힙니다. 오른쪽 일은 매주 돌아오고, 받은 결과가 맞는지 내가 바로 볼 수 있습니다.

<Quiz id="ch11-pick" />

## 맡기기 전에 시험해 보기

"이 일을 AI에게 맡겨도 될까?" 감으로 정하지 말고 시험해 보세요. 방법은 간단합니다. **내가 이미 답을 아는 일**로 시켜 보는 것입니다. Anthropic의 강좌는 이것을 평가(Evals)라고 부릅니다.[^academy-eval] 강좌는 Claude를 예로 들지만, 같은 방법을 다른 AI에도 쓸 수 있습니다(이 가이드의 판단).

1. 자주 하는 일 하나를 고릅니다. 지난달에 쓴 안내 메일, 지난 분기에 만든 정리표 같은 것입니다.
2. 내가 했던 결과물을 5~10개 모읍니다.
3. 그때 내가 가지고 있던 자료를 주고, 같은 일을 AI에게 시킵니다.
4. 내 결과와 나란히 놓고 비교합니다.

예를 들면 이렇게 보내 볼 수 있습니다. 내가 전에 쓴 메일은 아직 보여 주지 마세요(이 가이드의 제안). 그래야 AI가 따라 쓰지 않고 스스로 만든 결과를 볼 수 있습니다.

```
아래 메모로 동네 독서 모임 회원들에게 보낼 다음 달 안내 메일을 써 줘.
받는 사람은 40~60대 회원 20명이고, 말투는 정중하지만 딱딱하지 않게 해 줘.
[메모 붙여 넣기]
```

비교할 때 스스로 물어보세요. 중요한 내용을 다 담았나? 말투와 모양이 맞나? 빠진 것은 무엇인가?[^academy-eval]

빠진 것이 보이면 설명을 보태서 다시 시켜 보세요. 설명을 보태자 맞게 나왔다면, 다음부터 그 설명을 꼭 넣으면 됩니다. 몇 번 다듬어도 내 결과에 못 미친다면, 그 일은 맡기지 않는 편이 낫다는 것을 배운 셈입니다.[^academy-eval]

시험을 통과해도 확인은 계속합니다. 시험은 믿음을 키워 줄 뿐, 책임을 없애 주지는 않습니다.[^academy-eval]

<Quiz id="ch11-eval" />

## 일의 모양부터 보기

메뉴를 먼저 고르지 마세요. 지금 앞에 놓인 일이 어떤 모양인지 먼저 보세요. 그러면 쓸 기능은 저절로 정해집니다.[^academy-tabs]

서비스마다 기능 이름은 달라도, 일의 모양에 맞는 기능은 비슷합니다.

| 이런 일이면 | ChatGPT | Claude |
|---|---|---|
| 묻고, 다듬고, 같이 생각한다 | 보통 대화 | 보통 대화 |
| 간단한 사실, 오늘 일어난 일 | [웹 검색](../11-chatgpt/06-search.md#웹-검색-—-chatgpt가-인터넷을-찾아보게-하기) | [웹 검색](../10-claude/06-search.md#언제-무엇을-쓸까) |
| 자료를 많이 모아 보고서로 | [심층 리서치](../11-chatgpt/06-search.md#심층-리서치-—-보고서를-맡기기) | [리서치](../10-claude/06-search.md#언제-무엇을-쓸까)(유료) |
| 한 가지 일을 계속 이어 간다 | [프로젝트](../11-chatgpt/07-projects-plugins.md#프로젝트-—-대화·파일·지침을-한-폴더에) | [프로젝트](../10-claude/07-projects-tools.md#프로젝트-—-자료와-지침을-한곳에) |
| 여러 단계 끝에 완성 파일을 받는다 | [Work](../11-chatgpt/07-projects-plugins.md#chat과-work의-차이)(유료) | [Cowork](../10-claude/08-cowork.md#cowork란-—-대화가-아니라-일을-맡긴다)(유료) |
| 정해진 때마다 되풀이한다 | [예약 작업](../11-chatgpt/11-expert.md#정해진-때에-알아서-—-예약-작업) | [예약 작업](../10-claude/08-cowork.md#정해진-때에-알아서-—-예약-작업)(유료) |

표의 기능 이름과 요금제는 각 서비스 장에서 확인한 것입니다. 바뀔 수 있으니 쓰기 전에 그 장을 보세요.

대부분은 맨 윗줄, 분명한 프롬프트 하나로 충분합니다.[^academy-openai] 아래 줄의 기능은 보통 대화로 해 보다가 부족할 때 꺼내세요.

<Quiz id="ch11-tools" />

## 반복하는 일은 쌓아 두기

쓰다 보면 같은 말을 되풀이하게 됩니다. 되풀이하는 것을 한 번 적어 두면, 다음부터는 AI가 알고 시작합니다.

담는 곳은 네 가지입니다. 처음부터 다 쓸 필요는 없습니다. 아래 순서로, 필요해질 때 하나씩 더하세요.[^academy-layers]

1. **모든 대화에 같은 부탁을 한다** → 지침에 적습니다. ChatGPT는 [「사용자 지정 지침」](../11-chatgpt/05-memory.md#사용자-지정-지침-—-늘-지켜-줬으면-하는-것), Claude는 [「지침」](../10-claude/05-memory.md#지침-—-모든-대화에-적용할-규칙)입니다.
2. **한 가지 일을 계속 이어 간다** → 그 일을 프로젝트로 묶습니다.
3. **같은 순서를 매번 설명한다** → 그 순서를 다시 쓸 틀로 남깁니다. [8장 「4. 다시 쓸 틀로 만들기」](08-meta-prompting.md#_4-다시-쓸-틀로-만들기)의 틀을 프로젝트 지침에 넣는 데서 시작하세요. 서비스에 따라 스킬로 만들 수도 있습니다.
4. **잘 다듬은 틀을 남과 나누고 싶다** → 서비스가 주는 꾸러미(플러그인 등)로 묶습니다.

순서대로 가면 매번 새로 설명할 일이 조금씩 줄어듭니다.

**아직 틀로 만들 때가 아닌 일도 있습니다.** 일이 매주 바뀌거나, 결과의 모양이 아직 정해지지 않았거나, 사람이 판단해야 하는 일이라면 이릅니다. 그럴 때는 대화에서 몇 번 더 해 보며 다듬으세요.[^academy-openai] 정해진 때에 자동으로 돌리는 일도 같습니다. 먼저 손으로 몇 번 해 보고, 결과가 믿을 만해졌을 때 예약하세요.[^academy-openai]

### 만든 틀은 시험해 보고 고치기

내가 만든 틀은 내가 쓸 때 잘 됩니다. 무엇을 넣어야 하는지 내가 알기 때문입니다. 그런데 조금 다르게 부탁하거나, 조금 다른 자료를 주면 흔들릴 수 있습니다.[^academy-skilltest]

그래서 같은 부탁을 두 번 해 보세요. 한 번은 틀을 쓰고, 한 번은 틀 없이 보냅니다. 두 답을 나란히 놓고 스스로 물어보세요. 틀을 쓴 쪽이 정말 더 나은가? 아니라면 무엇이 빠졌나?[^academy-skilltest]

고칠 점은 구체적으로 말하세요.[^academy-skilltest]

- 아쉬운 예: "좀 이상해."
- 나은 예: "말투가 너무 딱딱해." "맨 앞 요약이 빠졌어."

나은 예는 무엇을 고칠지 짚어 주니 AI가 바로 손댈 수 있습니다. 그리고 **한 번에 하나만** 고치세요. 그래야 무엇이 효과가 있었는지 알 수 있습니다.[^academy-skilltest]

처음부터 완벽할 필요는 없습니다. 강좌는 대부분의 스킬이 한두 번 다듬으면 준비된다고 말합니다.[^academy-skilltest]

<Quiz id="ch11-layers" />

## 표와 숫자 맡기기

숫자 분석은 결과를 믿어도 되는지가 가장 걱정됩니다. 이럴 때는 [앞 절 「맡기기 전에 시험해 보기」](#맡기기-전에-시험해-보기)의 방법을 숫자에 써 보세요.

Anthropic 강좌에 나오는 예는 이렇습니다.[^academy-data] 퇴역 군인을 돕는 단체의 담당자 리오는 분기마다 출석과 취업 결과를 분석합니다.

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

맞춰 보는 시험을 통과해도 책임은 그대로입니다. 결과가 상식에 맞는지 보세요. AI의 도움을 받았다는 것도 숨기지 마세요.[^academy-data] 중요한 계산은 계산기나 엑셀로 다시 확인하세요.

파일을 올리는 법과 차트를 받는 법은 서비스마다 다릅니다. [ChatGPT 11장 「표와 숫자 맡기기」](../11-chatgpt/11-expert.md#표와-숫자-맡기기-—-데이터-분석)와 [Claude 12장 「표와 숫자 맡기기」](../10-claude/12-expert.md#표와-숫자-맡기기)를 보세요.

<Quiz id="ch11-data" />

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

AI가 나에게 질문을 던지게 하는 방법은 [5장 「4. 되묻게 하기」](05-prompt-patterns.md#_4-되묻게-하기-—-flipped-interaction)와 같은 원리입니다. 내 눈높이에 맞춘 설명을 받는 프롬프트는 [프롬프트 모음 「공부·설명 듣기」](prompt-library.md#공부·설명-듣기)에 있습니다. ChatGPT에는 이렇게 가르치는 방식을 따로 켜는 공부 모드도 있습니다([ChatGPT 11장](../11-chatgpt/11-expert.md#배우는-데-쓰기-—-공부-모드)).

<Quiz id="ch11-learn" />

## 일의 무게만큼 확인하기

결과를 쓰기 전에 확인하는 습관은 [9장 「확인하는 네 가지 습관」](09-safety.md#확인하는-네-가지-습관)에서 배웠습니다. 여기서는 얼마나 꼼꼼히 볼지, 어느 단계에서 볼지 살펴봅니다.

**모든 답을 똑같이 꼼꼼하게 볼 필요는 없습니다.** 일의 무게에 맞춰 확인하세요.[^academy-openai]

| 이런 일이라면 | 이만큼 확인한다 |
|---|---|
| 모임 아이디어 떠올리기 | 가볍게 읽고 고른다 |
| 공지·안내문 초안 | 사실·말투·빠진 것이 없는지 본다 |
| 기사·자료 요약 | 원문과 맞는지 대조한다 |
| 건강·돈·일자리·법적 권리에 영향을 주는 일 | 전문가가 꼼꼼히 검토하거나 정해진 절차를 거친다 |

**마지막에 한 번이 아니라 단계마다 보세요.** 여러 단계로 진행하는 일이라면 다음 단계로 넘어가기 전에 잠깐 멈춥니다. 다음 세 가지를 스스로 물어보세요.[^academy-openai]

- **사실**: 숫자·이름·날짜·출처가 맞나?
- **논리**: "~이므로 ~하다"는 연결이 말이 되나?
- **말투**: 읽을 사람에게 맞나?

단계마다 보면 AI가 잘못 알아들었을 때 일찍 알아챌 수 있습니다. 다 만든 뒤에 처음부터 고치지 않아도 됩니다.[^academy-openai]

논리가 이상하면 그 부분을 짚어서 설명해 달라고 하세요.

```
두 번째 문단의 결론이 왜 나왔는지 이해가 안 돼. 어떤 근거와 가정으로 이어졌는지 설명해 주고, 약한 곳이 있으면 고쳐 줘.
```

결과물 종류마다 따로 볼 곳(데이터 분석의 계산 방법, 리서치 보고서의 출처 등)은 [ChatGPT 11장 「믿기 전에 확인하기」](../11-chatgpt/11-expert.md#믿기-전에-확인하기)에 표로 모았습니다.

<Quiz id="ch11-verify" />

## 직접 해 보기

[10장](10-practice.md)처럼, 실제 회사 자료 대신 지어낸 자료로 해 보세요.

1. 요즘 하는 일 가운데 「처음 연습할 일 고르기」의 네 조건(자주 한다, 결과가 분명하다, 확인하기 쉽다, 틀려도 피해가 작다)에 맞는 일 하나를 적어 본다.
2. 지난달에 쓴 척하는 짧은 안내 메일 하나와 그때의 메모를 지어내 적어 둔다. 메모만 AI에게 주고 같은 메일을 쓰게 한 뒤, 내 메일과 비교해 "다 담았나? 말투가 맞나? 빠진 것은?"을 적어 본다.
3. 2번에서 빠진 점 하나를 설명에 보태 다시 시켜 본다. 맞게 나오면 그 한 줄을 지침이나 프로젝트 지침에 넣어 둔다.
4. 날짜·품목·금액 표를 10줄쯤 지어내 내가 먼저 품목별 합계를 손으로 낸다. 그다음 같은 표를 AI에게 주고 계산 단계를 보여 달라고 해서 두 결과를 맞춰 본다.
5. 이 장의 VLOOKUP 프롬프트로, 요즘 배우고 싶은 것 하나를 질문을 받으며 익혀 본다.

## 정리

- 잘 쓰려면 판단하는 힘이 필요하다. Anthropic 강좌는 그 판단을 맡기기·설명하기·가려보기·책임지기(4D)로 나눈다.
- 처음에는 자주 하고, 결과가 분명하고, 확인하기 쉽고, 틀려도 피해가 작은 일로 연습한다.
- 맡길지 말지는 감으로 정하지 말고, 이미 답을 아는 일로 시험해 본다. 시험을 통과해도 확인과 책임은 남는다.
- 메뉴보다 일의 모양을 먼저 본다. 대부분은 분명한 프롬프트 하나로 충분하다.
- 되풀이하는 것은 지침 → 프로젝트 → 틀(스킬) → 꾸러미 순서로, 필요해질 때 하나씩 쌓는다. 만든 틀은 쓰고 안 쓰고 두 번 부탁해 비교하고, 한 번에 하나만 고친다.
- 숫자 분석은 지난 자료로 먼저 맞춰 보고, 계산 과정을 보여 달라고 한다.
- 확인은 일의 무게만큼, 마지막에 한 번이 아니라 단계마다 한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| AI Fluency | 에이아이 플루언시 | AI와 잘 함께 일하는 능력 |
| Delegation | 델리게이션 (맡기기) | 무엇을 내가 하고 무엇을 AI에게 맡길지 나누기 |
| Description | 디스크립션 (설명하기) | 원하는 결과와 방법을 분명하게 전하기 |
| Discernment | 디서언먼트 (가려보기) | 받은 결과가 맞고 쓸 만한지 따져 보기 |
| Diligence | 딜리전스 (책임지기) | 책임 있게 쓰고, AI를 쓴 사실을 밝히고, 결과에 책임지기 |
| Evals | 이밸스 (평가) | 이미 답을 아는 일로 AI를 시험해 보는 방법 |

<ChapterDone :chapter="11" />

다음 장: 1단계를 마쳤습니다. [이해도 확인 시험](certificate.md)으로 내 AI 이해 레벨을 확인하거나, 2단계 [ChatGPT](../11-chatgpt/01-getting-started.md)·[Claude](../10-claude/01-getting-started.md) 가이드로 넘어가 보세요.

[^academy-4d]: Claude Academy 「Claude 101」 강의 「Getting better results」. "AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^ways]: OpenAI, 「How workers are unlocking new ways of working」. 자기 직업 밖의 일에서 예시·배경을 더 붙이고 확인을 더 부탁한다는 분석. https://openai.com/index/unlocking-new-ways-of-working (확인일 2026-10-24)
[^academy-eval]: Claude Academy 「Claude 101」 강의 「Getting better results」. "Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^academy-tabs]: Claude Academy 「Claude 101」 강의 「How you'll work with Claude on your desktop」. "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (확인일 2026-10-26)
[^academy-layers]: Claude Academy 「Introduction to Claude Cowork」 강의 「Get better results faster」. "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (확인일 2026-10-26)
[^academy-skilltest]: Claude Academy 「Introduction to Claude Cowork」 강의 「Validating skills for plugins」. "When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." 강의는 스킬을 쓴 답과 쓰지 않은 답을 비교하는 방법을 설명한다. 이 장은 같은 방법을 프로젝트 지침 같은 틀에도 쓰도록 넓혀 적었다(이 가이드의 해석). https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins (확인일 2026-10-26)
[^academy-data]: Claude Academy 「Claude 101」 강의 「Getting better results」의 영상(원래 「AI Fluency for nonprofits」 강좌의 영상이라고 강의가 밝힘). "Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results (확인일 2026-10-26)
[^academy-openai]: OpenAI Academy 강좌 본문(로그인·등록 필요). Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" (확인일 2026-10-26)
