# 1장. LLM이란 무엇인가

> **한 줄 요약**: LLM은 엄청난 양의 글을 읽고 "다음에 올 말"을 맞히는 연습을 한 프로그램입니다.
> 그래서 말은 아주 자연스럽게 하지만, 항상 사실을 말하는 것은 아닙니다.

## LLM이라는 이름

LLM은 **Large Language Model**의 줄임말이고, 우리말로는 **대규모 언어 모델**입니다.

- **Large(대규모)**: 인터넷 글, 책, 논문 등 사람이 평생 읽어도 다 못 읽을 만큼의 글로 학습했다는 뜻입니다. "학습"이 무엇인지는 바로 아래에서 다룹니다.
- **Language(언어)**: "글"을 다루는 것이 본업이라는 뜻입니다. 다만 요즘 모델은 문서·사진·소리·영상도 함께 다룹니다(아래 「글만 읽는 게 아니에요」).
- **Model(모델)**: 학습을 통해 만들어진 프로그램이라는 뜻입니다.

ChatGPT, Claude, Gemini는 모두 이 LLM을 대화하기 편하게 포장한 **서비스**입니다.
엔진(LLM) 위에 자동차 몸체(채팅 화면)를 얹은 것이라고 생각하면 됩니다.

스팸 메일 거르기나 영상 추천도 AI입니다. 하지만 이런 AI는 이미 있는 것을 고르고 나눕니다. LLM은 새 글을 **만들어 냅니다**.
그래서 LLM 같은 AI를 **생성형 AI**(generative AI)라고 부릅니다.[^academy-genai]

<Quiz id="ch1-name" />

## 학습했다는 건 무슨 뜻일까?

LLM 이야기에는 "학습했다"는 말이 자주 나옵니다. 사람이 책을 읽고 외우는 모습을 떠올리기 쉽지만, 조금 다릅니다.
**LLM의 학습은 "다음 말 맞히기" 문제를 엄청나게 많이 풀면서, 틀릴 때마다 모델 안의 숫자를 조금씩 고치는 일입니다.**

### 빈칸 문제를 수없이 풉니다

한 문제는 이렇게 돌아갑니다.

1. **문제 내기**: 모아 둔 글에서 문장 하나를 가져와 뒷부분을 가립니다. 예: "김치찌개를 끓일 때는 먼저 돼지고기를 ___"
2. **맞혀 보기**: 모델이 다음에 올 말의 후보와 확률을 내놓습니다. 예: "씻어요" 40%, "볶아요" 30%
3. **채점하기**: 원래 글에 실제로 있던 말과 비교합니다. 원래 글에는 "볶아요"가 있었습니다.
4. **고치기**: 다음에는 "볶아요"의 확률이 조금 더 높게 나오도록, 모델 안의 숫자를 아주 조금 고칩니다.

![학습 한 바퀴: ① 글의 뒷부분을 가린다 → ② 모델이 다음 말 후보와 확률을 낸다 → ③ 원래 글의 실제 다음 말과 비교한다 → ④ 정답 쪽 확률이 높아지도록 모델 안의 숫자를 조금 고친다. 이 바퀴를 수조 번 돈다](assets/ch1-training-loop.svg)

이 바퀴를 수조 번 돕니다. 정답이 원래 글 안에 이미 있으니, 사람이 문제마다 답을 달아 줄 필요가 없습니다. 그래서 이렇게 많은 글로 학습할 수 있습니다.
이 단계를 **사전 학습**(pre-training)이라고 부릅니다.[^academy-pretrain] 고치는 "숫자"가 아래 「모델의 크기」에서 다룰 매개변수입니다.
문제집을 풀고 답지와 맞춰 보는 것과 비슷합니다. 다만 틀린 문제를 따로 적어 두지 않습니다. 대신 다음에 비슷한 문제를 더 잘 맞히도록 감각을 조금씩 바꿉니다.

사전 학습을 마친 모델은 아직 대화 상대가 아니라 "글 이어 쓰기 기계"에 가깝습니다. 대화 상대로 다듬는 훈련이 한 번 더 있습니다(아래 「"도와주는 대화 상대"가 되도록 따로 훈련받았습니다」).

### 그럼 다 외운 건가요?

대부분은 외운 것이 아닙니다. 모델 안에는 읽은 글이 파일처럼 저장되어 있지 않습니다. 남는 것은 수많은 숫자입니다. 그 숫자에 "어떤 말 뒤에는 어떤 말이 오기 쉬운지" 같은 패턴이 녹아 있습니다.
크기를 견줘 보면 짐작이 갑니다. Llama 3.1 405B라는 모델은 매개변수가 4,050억 개인데, 학습 때 읽은 글 조각은 15조 개가 넘습니다(아래 「모델의 크기」). 읽은 조각이 숫자보다 37배 넘게 많습니다.
요리책 백 권을 읽은 사람을 떠올려 보세요. 레시피를 다 외우지는 못해도 "찌개는 보통 재료를 볶고 물을 붓는다"는 흐름은 압니다.

하지만 **자주 본 글은 그대로 외우기도 합니다.**

- 2020년 연구진이 GPT-2라는 모델에서 학습 자료 속 문장 수백 개를 원문 그대로 끄집어냈습니다. 그중에는 인터넷에 공개돼 있던 이름·전화번호·이메일 주소도 있었습니다.[^extract]
- 2022년 후속 연구는 세 경우에 외운 글을 더 많이 내놓는다고 보고했습니다. 모델이 클수록, 같은 글이 학습 자료에 여러 번 들어 있을수록, 앞부분을 길게 보여 줄수록입니다.[^memorization]

그래서 알아 둘 점이 있습니다. AI는 "어디서 읽었는지" 찾아보지 못합니다. 도서관처럼 원문을 꺼내 확인하는 것이 아니라, 패턴으로 말을 만들기 때문입니다.
출처를 물으면 있지도 않은 논문 제목을 그럴듯하게 지어낼 수 있는 것도 이 때문입니다(아래 「환각」).

### 대화하면서 배우지는 않습니다

학습이 끝나면 숫자는 고정됩니다. 대화 중에 내가 알려 준 것은 숫자를 바꾸지 않습니다. **그 대화 안에서만 참고 자료로 쓰입니다.**
그래서 새 대화를 열면 앞 대화 내용을 모르는 것이 기본입니다.

"지난번에 한 얘기를 기억하던데요?"라고 느낄 수 있습니다. 그것은 서비스의 **메모리**(memory) 기능입니다. 서비스가 기억할 내용을 대화 기록과 따로 적어 두었다가, 새 대화에서 꺼내 참고하게 합니다.[^memory] 모델의 숫자가 바뀐 것은 아닙니다.
회사가 내 대화를 **다음에 나올 모델**의 학습 자료로 쓸 수는 있습니다. 이것도 지금 대화하는 모델이 그 자리에서 바뀌는 것은 아닙니다. 쓰게 할지는 설정에서 고를 수 있습니다([9장](09-safety.md)).

새 대화를 열고 이렇게 물어보세요.

```
내가 지난 대화에서 너한테 뭐라고 했는지 기억해?
기억한다면 어떤 방법으로 기억하는 건지도 설명해 줘.
```

메모리 기능이 꺼져 있으면 모른다고 답할 것입니다. 켜져 있으면 저장된 내용을 보고 답할 수 있습니다. 결과는 서비스와 설정에 따라 다릅니다.

<Quiz id="ch1-training" />

## 어떻게 답을 만드나요?

LLM이 하는 일의 핵심은 의외로 단순합니다. **지금까지의 글을 보고, 다음에 올 가장 그럴듯한 말을 하나씩 이어 붙입니다.**

스마트폰 키보드의 자동완성을 떠올려 보세요. "오늘 점심 뭐"까지 치면 "먹지"가 추천됩니다.
LLM도 같은 일을 합니다. 다만 훨씬 긴 문맥을 보고, 훨씬 거대한 규모로 합니다.

!["오늘 점심 뭐" 다음에 올 말 후보와 확률(예시: 먹지 62%, 먹을까 25%, 그 밖의 후보) 중에서 하나를 골라 "오늘 점심 뭐 먹지"를 만든다. 고른 말을 붙이고 다시 다음 말을 고르는 일을 되풀이해 답이 완성된다](assets/ch1-next-word.svg)

예를 들어 이렇게 물으면

```
대한민국의 수도는?
```

LLM은 "대한민국의 수도는" 다음에 올 말로 "서울"을 이어 붙입니다. 학습하면서 수없이 본 말이기 때문입니다.
그다음엔 "입니다"를 붙입니다. 이런 식으로 답을 완성합니다.

방식은 이렇게 단순합니다. 그런데 어마어마한 양의 글과 만나자, 번역이나 요약, 글쓰기, 코드 작성처럼 "생각하는 것처럼 보이는" 일까지 해내게 되었습니다.

### 확률을 정하는 재료는 두 가지입니다

"가장 그럴듯한 말"은 무엇을 보고 정할까요? 두 가지를 함께 봅니다.

1. **학습으로 익힌 패턴**: 모델 안의 숫자에 담긴 것입니다. "대한민국의 수도는" 뒤에 "서울"이 온다는 것은 여기서 나옵니다.
2. **지금 대화에 들어 있는 모든 글**: 내 질문, 앞에서 주고받은 말, 올린 파일, 서비스가 미리 넣어 둔 안내문까지입니다. 이것을 **컨텍스트**(context, 맥락)라고 부릅니다.

같은 말이라도 컨텍스트가 바뀌면 다음 말의 확률이 바뀝니다.

| 앞의 글 | 다음에 오기 쉬운 말 |
|---|---|
| "배가 아파서" | "병원에 갔다" |
| "배를 타고" | "섬에 갔다" |

그래서 프롬프트가 중요합니다. 내가 쓴 글이 곧 컨텍스트이고, 컨텍스트가 확률을 바꿉니다.
내 상황과 원하는 답의 모양을 적어 줄수록, 내가 원하는 쪽의 말이 "그럴듯한 말"이 됩니다([4장](04-prompt-basics.md)).

직접 확인해 보세요.

```
"오늘 점심 뭐" 다음에 이어질 말 후보를 다섯 개 써 줘.
그다음, 앞에 "다이어트 중인데"를 붙이면 후보가 어떻게 바뀌는지도 보여 줘.
```

AI가 적어 주는 후보는 설명을 위한 예시입니다. 실제로 안에서 계산한 확률을 그대로 보여 주는 것은 아닙니다. 그래도 앞의 글 몇 마디가 다음 말을 얼마나 바꾸는지는 느낄 수 있습니다.

### 내 질문은 이렇게 읽힙니다

"배가 아파서 병원에 가야 할까?"라고 물었다고 해 봅시다. 모델 안에서는 대략 이런 일이 일어납니다.

1. **조각으로 자릅니다.** 글을 **토큰**(token)이라는 작은 조각으로 자릅니다. 단어 하나가 한 조각이 되기도 하고, 여러 조각으로 나뉘기도 합니다.
2. **조각마다 숫자 묶음으로 바꿉니다.** 뜻이 비슷한 말은 비슷한 숫자 묶음이 되도록 학습되어 있습니다. 지도에서 가까운 동네끼리 좌표가 비슷한 것과 같습니다. "강아지"와 "개"는 가깝고, "냉장고"는 멀리 있습니다. 이것을 **임베딩**(embedding)이라고 부릅니다.[^word2vec]
3. **조각끼리 서로 살핍니다.** 조각 하나하나가 문장 안의 다른 조각들을 둘러보고, 자기 뜻을 정하는 데 어느 조각이 중요한지 따집니다. "배"는 "아파서"와 "병원"을 보고 몸의 배라는 뜻을 굳힙니다. 이것을 **어텐션**(attention, 주의 집중)이라고 부릅니다. [2장](02-why-it-matters.md)에 나오는 트랜스포머가 바로 이 방식을 씁니다.[^attention]
4. **여러 번 되풀이한 뒤 다음 말을 고릅니다.** 2~3번 계산을 여러 층에 걸쳐 되풀이합니다. 마지막에 다음 조각 후보마다 확률을 내고, 하나를 골라 붙입니다. 그리고 방금 붙인 조각까지 넣어서 다시 계산합니다.

이렇게 보면 "알아듣는다"는 것은 내 질문의 조각들이 서로를 살펴 뜻을 좁혀 가는 계산입니다. 이것을 사람의 이해와 같다고 볼 수 있는지는 아래 「그런데 정말 생각하는 걸까?」에서 다룹니다.

### 내 질문만 들어가는 게 아닙니다

채팅 화면에는 내 질문만 보입니다. 하지만 모델이 받는 글은 더 깁니다. 서비스가 내 질문을 감싸서 보내기 때문입니다. 이해를 돕기 위해 그려 보면 대략 이런 모양입니다. 실제 모양은 서비스마다 다릅니다.

```
[서비스의 안내문] 너는 친절한 도우미야. 오늘 날짜는 2026년 10월 30일이야. …
[앞에서 나눈 대화] …
[올린 파일] …
[사용자] 배가 아파서 병원에 가야 할까?
[AI] ← 모델은 여기서부터 이어 씁니다
```

맨 앞의 안내문을 **시스템 프롬프트**(system prompt)라고 부릅니다. 예를 들어 Claude의 웹과 앱은 대화를 시작할 때마다 오늘 날짜 같은 최신 정보와 답하는 방식을 시스템 프롬프트로 넣습니다. 그리고 그 내용을 공개합니다.[^system-prompts]
모델은 이 긴 글 전체를 컨텍스트로 보고, "[AI]" 다음에 올 말을 이어 씁니다. 대화가 길어지면 이 글도 길어집니다. 그래서 한 번에 볼 수 있는 글의 양(아래 「컨텍스트 윈도우」)이 중요해집니다.

<Quiz id="ch1-next-word" />

## 검색하고 도구를 쓰는 AI

요즘 AI는 웹 검색으로 오늘 뉴스도 찾아 줍니다. 학습이 끝난 뒤의 일은 모른다고 했는데(아래 「지식 컷오프」), 어떻게 가능할까요?
**모델이 직접 인터넷에 들어가는 것이 아닙니다.** 모델은 "이걸 검색해 줘"라는 요청 글을 씁니다. 그러면 서비스가 대신 검색해서 결과를 대화에 붙여 넣습니다. 모델은 그 결과를 읽고 다음 말을 이어 갑니다.

### 도구를 쓰는 순서

"오늘 서울 날씨 어때?"라고 물었다고 해 봅시다.

1. **쓸지 정하기**: 모델은 질문과 함께 쓸 수 있는 도구 목록을 받습니다. 목록에는 도구마다 이름과 하는 일이 적혀 있습니다. 오늘 날씨처럼 학습한 내용이나 대화 안에 답이 없는 질문이면, 모델은 도구를 쓰기로 정합니다.[^tool-use]
2. **요청 쓰기**: 답 대신 정해진 모양의 요청을 씁니다. 예: `웹 검색: 서울 오늘 날씨`
3. **실행하기**: 서비스가 그 요청을 받아 실제로 검색합니다. 모델은 스스로 아무것도 실행하지 못합니다. 요청 글을 쓸 뿐입니다.[^tool-contract]
4. **결과 붙이기**: 검색 결과가 대화에 붙습니다. 이제 컨텍스트에 오늘 날씨가 들어 있습니다.
5. **답하기**: 모델은 늘어난 컨텍스트를 보고 다음 말을 이어 씁니다. "오늘 서울은 맑고 낮 최고 18도입니다" 같은 답이 나옵니다. 정보가 모자라면 2~4번을 여러 번 되풀이하기도 합니다.

![질문 "오늘 서울 날씨 어때?" → ① 모델이 도구 목록을 보고 검색하기로 정한다 → ② "웹 검색: 서울 오늘 날씨"라는 요청 글을 쓴다 → ③ 서비스가 실제로 검색한다 → ④ 검색 결과가 대화에 붙는다 → ⑤ 모델이 결과를 읽고 답한다. 모델은 요청만 쓰고 실행은 서비스가 한다](assets/ch1-tool-calling.svg)

이 방식을 **도구 호출**(tool calling) 또는 **함수 호출**(function calling)이라고 부릅니다. ChatGPT를 만든 OpenAI와 Claude를 만든 Anthropic 모두 개발자 문서에 같은 순서를 적어 두었습니다.[^tool-use][^openai-tools]
책상에서만 일하는 사람을 떠올려 보세요. 밖에 직접 나가지는 못하니, 쪽지에 "오늘 날씨 알아봐 주세요"라고 적어 심부름꾼에게 건넵니다. 심부름꾼이 알아 온 쪽지를 읽고 답을 씁니다. 모델이 그 사람이고, 서비스가 심부름꾼입니다.

검색은 모델을 다시 학습시키는 것이 아닙니다. **이번 대화에 자료를 붙여 넣는 것**입니다. 그래서 새 대화에서는 그 검색 결과를 모릅니다. 앞에서 본 메모리 기능도 같은 원리입니다. 적어 둔 내용을 꺼내 대화에 붙입니다.

### 검색 말고도 여러 도구가 있습니다

- **웹 페이지 읽기**: 링크를 주면 그 페이지를 가져와 읽습니다.
- **계산·코드 실행**: 복잡한 계산을 "다음 말 고르기"로 어림하지 않고, 실제 계산 프로그램을 돌려서 합니다.
- **파일 만들기**: 엑셀·워드·파워포인트 같은 파일을 만들어 줍니다.
- **앱 연결**: 내 메일·캘린더·드라이브를 연결해 두면 그 안을 찾아봅니다.

어떤 도구를 쓸 수 있는지는 서비스와 요금제마다 다릅니다. 서비스별 사용법은 2단계 [ChatGPT 가이드](../11-chatgpt/README.md)와 [Claude 가이드](../10-claude/README.md)에서 다룹니다.

### 검색했다고 다 맞는 것은 아닙니다

- **검색 결과 자체가 틀리거나 오래됐을 수 있습니다.**
- **모델이 결과를 잘못 읽거나, 결과에 없는 말을 덧붙일 수 있습니다.** 그래서 답에 달린 출처를 직접 열어 확인하세요.[^cite-check]
- **웹 페이지 안에 AI에게 몰래 내리는 지시가 숨어 있을 수 있습니다.** 이것을 프롬프트 인젝션이라고 하고, [9장](09-safety.md)에서 다룹니다.
- **검색할지는 모델이 정합니다.** 그래서 검색 없이 학습한 내용만으로 답할 때도 있습니다. 확실히 검색하게 하려면 "웹에서 검색해 줘"라고 써 주세요.[^search-ask]

웹 검색이 되는 서비스에서 이렇게 물어보세요.

```
웹에서 검색해 줘. 국립중앙박물관의 이번 주 관람 시간을 알려 주고,
참고한 페이지 주소를 함께 적어 줘.
```

답을 받은 뒤 스스로 물어보세요. 검색했다는 표시가 있나? 출처 링크를 열어 보면 같은 내용이 적혀 있나?

<Quiz id="ch1-tools" />

## 모델의 크기 — 매개변수(파라미터)

AI 모델 이름 뒤에 "8B", "70B" 같은 숫자가 붙은 것을 본 적이 있을 겁니다. 이 숫자는 **모델이 얼마나 큰지**를 나타냅니다.
크기를 재는 단위가 **매개변수**(parameter, 파라미터)입니다.

### 매개변수란 — 모델 안의 조절 손잡이

LLM 안에는 아주 많은 숫자가 들어 있습니다. 이 숫자들이 "다음에 어떤 말이 올지"를 계산합니다. 이 숫자 하나하나가 매개변수입니다.
**학습**은 다음 말을 잘 맞히도록 이 숫자들을 조금씩 고쳐 나가는 일입니다. 라디오의 주파수 손잡이를 돌려 원하는 방송을 맞추는 것과 비슷합니다.
학습이 끝나면 손잡이 값이 고정됩니다. 그렇게 완성된 것이 우리가 쓰는 모델입니다.

![입력 "대한민국의 수도는"이 수많은 조절 손잡이(매개변수)가 있는 모델을 거쳐 "서울"이 된다. 학습은 다음 말을 잘 맞히도록 손잡이를 조금씩 돌려 맞추는 일이고, 손잡이가 많을수록 모델이 크다고 한다](assets/ch1-parameters.svg)

### 숫자 읽는 법

"B"는 영어 billion(빌리언)의 첫 글자로 **10억**을 뜻합니다.

| 표기 | 읽는 법 | 예 |
|---|---|---|
| 8B | 매개변수 80억 개 | Meta가 2024년 공개한 Llama 3.1의 가장 작은 모델[^llama] |
| 70B | 700억 개 | Llama 3.1 중간 모델, 2022년 연구 모델 Chinchilla[^chinchilla] |
| 175B | 1,750억 개 | 2020년 OpenAI의 GPT-3[^gpt3] |
| 405B | 4,050억 개 | Llama 3.1의 가장 큰 모델[^llama] |

일반적으로 손잡이가 많을수록 더 복잡한 패턴을 담을 수 있습니다. 그래서 큰 모델이 더 어려운 일을 잘하는 경향이 있습니다.
대신 계산이 많아집니다. 그만큼 **더 느리고, 돌리는 비용이 더 듭니다.**

### 크기와 "얼마나 많이 읽었나"는 다른 이야기입니다

모델의 실력을 정하는 것은 크기만이 아닙니다. 둘을 나눠서 생각하세요.

- **매개변수 수**는 모델의 크기입니다. 머리(그릇)의 크기에 빗댈 수 있습니다. 예를 들어 Llama 3.1 405B는 4,050억 개입니다.
- **학습 데이터 양**은 학습 때 읽은 글의 양입니다. 토큰(글 조각) 수로 셉니다. 읽은 책의 양에 빗댈 수 있습니다. 예를 들어 Llama 3.1 405B는 15조 개가 넘는 토큰을 읽었습니다.[^llama]

그릇만 크고 읽은 것이 적으면 실력이 다 나오지 않습니다. 2022년에 나온 Chinchilla(친칠라) 연구가 이것을 보여 줬습니다.
매개변수가 700억 개로 더 작은 대신 **글을 약 네 배 더 많이 읽힌** 모델이, 2,800억 개짜리 Gopher와 1,750억 개짜리 GPT-3보다 고르게 좋은 성적을 냈습니다.
연구진은 **모델 크기와 학습 데이터 양을 같은 비율로 함께 늘려야 한다**고 결론 냈습니다.[^chinchilla]

학습한 뒤에 어떻게 다듬었는지도 중요합니다. 아래 「더 알아보기」에 사람 피드백 훈련 연구가 나옵니다. 이 연구에서는 훈련을 받은 13억 개짜리 모델의 답이 1,750억 개짜리 GPT-3의 답보다 더 좋다고 평가받았습니다.[^instructgpt]

### 그래서 숫자만 보고 고르지 않습니다

- **요즘 상용 서비스는 크기를 잘 밝히지 않습니다.** 예를 들어 OpenAI는 2023년 GPT-4 기술 보고서에서 경쟁 상황과 안전 문제를 이유로 모델 크기를 포함한 구조를 공개하지 않는다고 밝혔습니다.[^gpt4] 다른 서비스 모델도 크기를 공식 발표하지 않는 경우가 많습니다. 그러니 인터넷에 도는 숫자는 추측일 수 있습니다.
- **크기를 공개하는 모델**은 주로 누구나 내려받아 쓸 수 있게 공개된 모델(예: Llama)입니다. 이런 모델을 내 컴퓨터에서 돌리는 이야기는 3단계에서 다룹니다.
- 서비스 안에서 "빠른 모델"과 "더 똑똑한 모델"을 고를 수 있다면, 대개 크기와 속도, 비용의 차이입니다. **간단한 일은 빠른 모델로, 어려운 일은 큰 모델로** 시켜 보세요. 그리고 결과를 비교해 보세요. 이것이 가장 정확한 방법입니다.

<Quiz id="ch1-parameters" />

## 그런데 정말 생각하는 걸까?

써 보면 AI가 내 뜻을 알아듣고 생각해서 답하는 것처럼 느껴집니다. 그 느낌이 틀린 것만은 아닙니다.
"다음 말을 고른다"는 것은 답을 내보내는 방식입니다. **그 말을 고르기 위한 계산 안에서는 생각에 가까운 일이 실제로 일어납니다.**
다만 사람의 생각과 같은 것인지는 아직 연구 중입니다.

> **짧은 답**
> 1. 생각에 가까운 계산을 **실제로 합니다.**
> 2. 하지만 **늘 그러지는 않습니다.** 지름길로 대충 답할 때도 있습니다.
> 3. 그리고 자기가 어떻게 답했는지 **스스로 정확히 설명하지 못합니다.**

### 다음 말을 잘 맞히려면 내용을 알아야 합니다

추리 소설의 마지막 문장 "그래서 범인은 바로 ___였다"의 빈칸을 맞히려면 책 전체의 단서를 따라가야 합니다.
LLM은 엄청난 양의 글로 이런 빈칸 맞히기를 연습했고, 그러다 보니 잘 맞히는 데 필요한 것들을 안에 익혔습니다.
사실 사이의 관계, 문장의 논리, 글쓴이의 의도 같은 것들입니다.

Claude를 만든 회사 Anthropic이 2025년에 모델 안을 직접 들여다본 연구가 있습니다.[^tracing]
"댈러스가 있는 주(州)의 주도는?"이라는 질문을 했더니, 모델 안에서 두 단계가 차례로 일어났습니다.

1. "댈러스는 미국 텍사스주에 있다"를 떠올리고
2. "텍사스주의 주도(우리나라의 도청 소재지 같은 곳)는 오스틴"을 이어 붙였습니다.

![질문 "댈러스가 있는 주의 주도는?" → ① 댈러스는 텍사스주에 있다 → ② 텍사스주의 주도는 오스틴 → 답: 오스틴. 외운 답이 아니라 두 사실을 차례로 이어 붙였다](assets/ch1-two-hop.svg)

외운 답을 꺼낸 것이 아니라 **두 사실을 이어 붙여** 답을 만든 것입니다.
시를 쓸 때는 줄을 쓰기 전에 그 줄 끝에 올 단어를 먼저 정해 두기도 했습니다. 그리고 그 단어를 향해 문장을 썼습니다. **앞을 내다본** 것입니다.

### "확률적"은 "아무렇게나"가 아닙니다

- **AI가 잘 아는 사실**은 확률이 한쪽으로 크게 쏠립니다. "대한민국의 수도는" 다음에는 "서울"이 압도적이라 거의 매번 같은 답이 나옵니다.
- **정답이 여러 개인 질문**에서는 확률이 여러 후보로 퍼집니다. "가게 이름 지어 줘"는 다시 물을 때마다 다른 답이 나옵니다.
- **AI가 잘 모르는 질문**에서도 확률이 퍼집니다. 그래서 물을 때마다 다른 답, 때로는 다른 거짓말이 나옵니다.

> **주의**: 매번 같은 답이 나온다고 해서 맞는 답이라는 뜻은 아닙니다. 흔한 오해를 많이 읽었다면 틀린 답 쪽으로 확률이 쏠려 매번 똑같이 틀릴 수도 있습니다.

### "도와주는 대화 상대"가 되도록 따로 훈련받았습니다

글만 읽은 모델은 질문에 답하기보다 글을 이어 쓰는 쪽에 가깝습니다. 지금 쓰는 서비스의 모델은 여기에 훈련을 하나 더 받았습니다.
**사람이 좋은 답과 나쁜 답을 골라 주는 훈련**입니다. 이것을 RLHF(Reinforcement Learning from Human Feedback, 사람 피드백을 통한 강화 학습)라고 부릅니다.
내 의도를 짐작하고, 정리해서 답하는 태도는 이 훈련에서 나옵니다.

요즘은 **추론 모델**(reasoning model)도 많이 씁니다. 답하기 전에 스스로 단계를 밟아 생각하는 모델입니다.
생각하는 과정을 글로 길게 써 내려간 뒤에 답합니다. 문제를 나누고, 검산하고, 고칩니다. [5장](05-prompt-patterns.md)에서 쓰는 법을 다시 다룹니다.

### 사람은 말 잘하는 상대에게 마음이 있다고 느낍니다

1966년에 나온 ELIZA(일라이자)라는 대화 프로그램은 사용자의 말을 질문으로 되돌려주는 규칙 몇 개가 전부였습니다.[^eliza]
"요즘 우울해요"라고 하면 "왜 우울하다고 느끼시나요?"라고 답하는 식입니다. 그런데도 많은 사람이 이 프로그램이 자기를 이해한다고 느꼈습니다.
이 현상을 **일라이자 효과**(ELIZA effect)라고 부릅니다. 지금의 LLM은 비교할 수 없을 만큼 말을 잘합니다. 그래서 이 느낌이 훨씬 강하게 듭니다.

### 그래서 어떻게 받아들이면 될까

앞의 Anthropic 연구에는 이런 결과도 있습니다. AI에게 36+59를 계산시켰습니다. 안에서는 두 계산이 동시에 돌았습니다.
하나는 "대략 90쯤"이라고 어림하는 계산이고, 다른 하나는 끝자리를 정확히 맞히는 계산입니다.
그런데 어떻게 풀었냐고 물으면 학교에서 배우는 "일의 자리부터 받아올림" 방식으로 풀었다고 답했습니다.
**AI가 자기 생각을 설명하는 말이 실제 안에서 일어난 일과 다를 수 있다**는 뜻입니다.

- 생각에 가까운 계산을 합니다. 그러니 복잡한 일도 충분히 맡길 수 있습니다.
- 하지만 설명이나 생각 과정이 그럴듯하다고 해서 그 내용이 맞다는 보장은 없습니다. 중요한 내용은 직접 확인하세요.
- 흔한 문제를 살짝 바꾼 문제, 쓸데없는 정보가 섞인 문제, 처음 보는 종류의 문제일수록 더 꼼꼼히 확인하세요.

::: details 더 알아보기 — 연구자들은 AI의 속을 어떻게 들여다봤을까? (눌러서 펼치기)

**읽기 전에**: 여기 소개하는 연구 중 상당수는 AI 회사가 직접 공개한 연구 보고서입니다. 학회나 학술지의 심사를 거치기 전에 먼저 공개된 논문(프리프린트, preprint)도 있습니다.
그러니 "확정된 사실"보다는 **"지금까지 이렇게 관찰됐다"** 로 읽어 주세요. 이 분야는 몇 달 사이에도 새 결과가 나옵니다.

**바꿔치기 실험.** AI 안에서는 "텍사스" 같은 개념도 숫자 묶음으로 저장됩니다. 연구자들은 이 숫자 묶음을 "캘리포니아"의 숫자 묶음으로 바꿔 넣었습니다. 그리고 답이 어떻게 되는지 봤습니다.
답이 오스틴에서 캘리포니아주의 주도인 새크라멘토로 바뀌었습니다. 그 숫자 묶음이 답을 만드는 데 실제로 쓰였다는 증거입니다.
이렇게 모델 내부를 들여다보는 연구 분야를 **해석 가능성**(interpretability) 연구라고 부릅니다.

**늘 차근차근 생각하는 것은 아닙니다.**
- 같은 연구의 자세한 보고서는 모델 안에서 **진짜 두 단계 추론과 지름길이 함께** 돌아간다고 적었습니다.
  연구진 스스로도 시도한 질문 중 **약 4분의 1**에서만 속을 만족스럽게 설명할 수 있었다고 밝혔습니다.[^biology]
- Anthropic이 2026년 7월에 후속 연구 보고서를 공개했습니다. 댈러스 질문의 "텍사스"처럼 질문에 드러나지 않은 중간 단계를 바꿔치기해 봤습니다.
  그리고 결론이 그에 맞게 바뀌는 비율을 쟀습니다. 모델에 따라 **54~70%** 였다고 합니다.[^workspace] 공개된 지 몇 달 안 된 결과라 다른 연구자들의 검증은 아직 진행 중입니다.

**사람의 훈련 효과.** OpenAI의 2022년 연구에서는 사람 피드백 훈련(RLHF)을 받은 모델이 사람들에게 더 좋은 답이라고 평가받았습니다. 크기가 100배나 큰 모델과 비교해서입니다.[^instructgpt]
2025년 학술지 Nature에는 추론 모델에 관한 연구가 실렸습니다. 사람이 풀이 예시를 보여 주지 않고, **정답을 맞히면 보상을 주는 훈련만으로도** 추론 모델의 능력이 생겨날 수 있다는 내용입니다.[^r1]

**화면에 보이는 "생각"이 전부는 아닙니다.**
- Anthropic은 문제에 정답 힌트를 몰래 넣었습니다. 그리고 힌트를 써서 답을 정한 모델이 생각 과정 글에서 그 사실을 밝히는지 봤습니다.
  힌트를 언급한 비율은 평균 **25%**(Claude 3.7 Sonnet)와 **39%**(DeepSeek R1)였습니다.[^faithful] 나머지는 힌트를 쓰고도 말하지 않았습니다.
- 모델이 자기 속을 알아차리는 능력도 약합니다. 연구진이 모델 안에 특정 개념을 몰래 넣고 "뭔가 이상한 생각이 드느냐"고 물었습니다.
  가장 잘한 모델도 **약 20%** 만 알아차렸습니다. 연구진은 "자기 속 들여다보기는 실패하는 것이 보통"이라고 결론 냈습니다.[^introspection]

**낯선 문제 앞에서는 약해집니다.**
- Apple 연구진은 글로 된 수학 문제로 실험했습니다. **숫자만 바꾸거나, 그럴듯하지만 상관없는 문장 하나를 끼워 넣기만 해도** 성적이 떨어졌습니다.
  상관없는 문장 하나로 성적이 **최대 65%** 떨어졌습니다.[^gsm] 익숙한 문제 모양에 기대어 푸는 부분이 있다는 뜻입니다.
- 2025년 6월 Apple의 다른 연구(「생각의 착각」)는 퍼즐을 점점 어렵게 하면 추론 모델의 정확도가 어느 순간 무너진다고 보고했습니다.[^illusion]
  대표 퍼즐은 **하노이 탑**입니다. 크기가 다른 원반들을 다른 기둥으로 옮기는 퍼즐입니다. "큰 원반을 작은 원반 위에 올리면 안 된다"는 규칙을 지켜야 합니다. 원반이 하나 늘 때마다 옮기는 횟수가 두 배쯤 늘어납니다.
  곧바로 반론 논문이 나왔습니다. 답이 너무 길어 AI가 한 번에 쓸 수 있는 글 길이(출력 한도)를 넘었거나, 원래 풀 수 없는 문제가 섞였다는 것입니다.
  이를 다시 실험한 논문은 양쪽이 일부씩 맞다고 봤습니다. 원반 8개 정도에서 이미 막혔습니다. 하지만 풀 수 있는 문제만 내면 아주 큰 문제도 풀었다고 합니다.[^rethinking]
  세 논문 모두 심사 전에 먼저 공개된 논문이고, 이 논쟁은 아직 진행 중입니다.

:::

<Quiz id="ch1-thinking" />

## 글만 읽는 게 아니에요 — 문서·사진·소리·영상

"LLM은 글로 학습했다"는 말은 처음 LLM이 나왔을 때 기준입니다. 지금의 ChatGPT·Claude·Gemini는 사진을 올리면 무엇이 있는지 설명합니다.
영수증 사진에서 금액도 읽어 냅니다. 서비스에 따라 PDF 보고서의 표를 읽고, 녹음한 말을 받아 적고, 영상 내용을 요약하기도 합니다.
이렇게 **여러 종류의 정보를 함께 다루는 모델**을 **멀티모달**(multimodal) 모델이라고 부릅니다. "모달"은 정보의 종류(글·사진·소리 등)를 뜻합니다.

### 사진도 글처럼 조각으로 잘라 읽습니다

앞에서 본 것처럼 LLM은 글을 토큰이라는 작은 조각으로 잘라 다룹니다.
사진도 같은 방법으로 다룹니다. 사진을 바둑판처럼 작은 칸으로 잘라, 칸 하나를 단어 하나처럼 취급합니다.
이 생각을 처음 널리 알린 2020년 논문의 제목이 「이미지는 16×16개의 단어만큼 값어치가 있다」입니다.[^vit]

![사진을 바둑판 칸으로 자르면 칸 하나하나가 단어처럼 조각이 되고, 질문 글의 조각과 한 줄로 이어져 LLM에 들어간다. LLM은 그 뒤에 올 말을 예측해 "소파에서 자는 고양이예요"라고 답한다](assets/ch1-image-tokens.svg)

그다음 **사진과 설명이 짝지어진 자료**로 학습합니다.

| 사진 | 함께 있는 글 |
|---|---|
| 소파 위 고양이 사진 | "소파에서 낮잠 자는 회색 고양이" |
| 영수증 사진 | 영수증에 적힌 상호와 금액 |
| 그래프 그림 | 그래프를 설명하는 기사 문장 |

이런 짝을 수없이 보면 "이런 모양의 칸들은 '고양이'라는 말과 함께 나온다"는 연결을 익힙니다.
사진을 올리고 "이게 뭐야?"라고 물으면 이렇게 됩니다. 모델은 사진 조각과 질문 글을 한 줄로 이어 받습니다. 그리고 **다음에 올 말을 예측**해서 답합니다.
원리가 바뀐 것이 아니라 받을 수 있는 재료가 늘어난 것입니다. 그림책을 떠올려 보세요. 그림 옆에 "고양이"라고 적힌 그림책을 여러 번 본 아이는,
처음 보는 고양이 사진을 보고도 "고양이"라고 말합니다. 그것과 비슷합니다.

### 문서·소리·영상도 결국 조각으로 바꿉니다

모양은 달라도 방법은 같습니다. 먼저 조각(토큰)으로 바꾸고, 글 조각과 한 줄로 이어서 다음 말을 예측합니다.

- **문서(PDF)**: 쪽마다 글자를 뽑아 읽고, 같은 쪽을 사진으로도 봅니다. 그래서 글뿐 아니라 표와 그래프도 읽을 수 있습니다.[^pdf]
  다만 서비스나 문서 종류에 따라 글자만 읽기도 합니다. 예를 들어 Claude는 101쪽이 넘는 PDF와, 워드처럼 PDF가 아닌 문서에서는 글자만 뽑습니다. 안에 든 그림은 읽지 못합니다.[^claude-files]
- **소리**: 소리를 아주 짧은 시간 단위로 잘라 조각으로 바꿉니다. 예를 들어 Gemini는 소리 1초를 조각 32개로 나타냅니다. 1분이면 1,920개입니다.
  그래서 말을 받아 적는 것뿐 아니라, 새소리나 사이렌처럼 말이 아닌 소리도 알아듣습니다.[^gemini-audio]
- **영상**: 영상에서 장면을 1초에 한 장씩 사진으로 뽑아 사진 조각으로 바꿉니다. 소리는 따로 소리 조각으로 바꿉니다(Gemini 기본 설정 기준).
  그래서 아주 빠르게 지나가는 장면은 놓칠 수 있습니다.[^gemini-video]

문서·소리·영상은 글보다 조각이 훨씬 많이 듭니다. 그래서 긴 영상이나 두꺼운 문서는 한 번에 볼 수 있는 양(아래 「컨텍스트 윈도우」)을 빨리 채웁니다.
자료가 아주 길다면 필요한 부분만 잘라서 올리는 것도 방법입니다.

### 그림·음악·영상을 "만드는" AI는 방식이 다릅니다

이해하는 것과 만들어 내는 것은 다른 기술인 경우가 많습니다. 그림과 영상을 만드는 AI는 주로 **확산 모델**(diffusion model)을 씁니다.[^ddpm]

1. **배울 때**: 멀쩡한 사진에 잡음(TV 화면의 "지지직" 같은 무늬)을 조금씩 섞어 완전히 망가뜨리고, 그 잡음을 **한 단계씩 걷어 내는 법**을 연습합니다.
2. **만들 때**: 잡음만 있는 화면에서 시작해, "바닷가를 달리는 강아지" 같은 글을 길잡이 삼아 잡음을 조금씩 걷어 냅니다. 그러면 글에 맞는 그림이 드러납니다.

짙은 안개가 걷히며 풍경이 보이는 것과 비슷합니다. 다만 그 풍경은 원래 있던 것이 아닙니다. 내가 준 글에 맞게 새로 그려진 것입니다.
영상은 훨씬 어렵습니다. 이 일을 여러 장면에 걸쳐 앞뒤가 이어지게 해야 하기 때문입니다.
음악도 소리와 그 소리를 설명하는 글을 짝지어 배우는 것은 같습니다. 소리를 잘게 잘라 "다음 소리 조각"을 예측하는 방식도 있습니다. LLM이 다음 말을 예측하는 것과 같은 생각입니다.

> 채팅 화면은 하나여도 안에서는 여러 기술이 함께 움직일 수 있습니다. 서비스마다 구조가 다르고 자주 바뀌므로, 서비스별 기능은 2단계 가이드에서 다룹니다.

### 사진을 다룰 때도 약점은 같습니다

- **지어낸 답(아래 「환각」)이 똑같이 나옵니다.** 사진에 없는 물건을 있다고 하거나, 흐린 글자를 그럴듯하게 지어 읽을 수 있습니다.
- **물건 개수 세기, 아주 작은 글자 읽기, 정확한 위치·길이 재기**를 자주 틀립니다.
- "사진에서 **확실히 보이는 것과 추측한 것을 나눠서** 말해 줘"라고 요청하면 도움이 됩니다.

<Quiz id="ch1-multimodal" />

## 잘하는 것

| 잘하는 일 | 예 |
|---|---|
| 글을 쓰고 다듬기 | 거래처에 보낼 사과 메일 초안 쓰기 |
| 긴 글을 요약하기 | 30쪽짜리 약관에서 내게 불리한 조항만 뽑기 |
| 설명하기 | "금리가 오르면 왜 집값이 떨어져?"를 중학생 눈높이로 |
| 아이디어 내기 | 아이 생일 파티 주제 10가지 |
| 형식 바꾸기 | 회의 메모를 표로, 표를 보고서 문장으로 |

<Quiz id="ch1-good-at" />

## 못하는 것, 그리고 주의할 점

### 1. 그럴듯하게 틀린 말을 한다 — "환각"

LLM은 "사실인지"가 아니라 "그럴듯한지"를 기준으로 말을 이어 붙입니다.
그래서 모르는 내용도 자신 있게 지어낼 때가 있습니다. 이것을 **환각(hallucination)** 이라고 부릅니다.

예를 들어 "○○○ 교수가 2019년에 쓴 논문 제목 알려 줘"라고 물었다고 해 봅시다.
실제로 없는 논문 제목을 진짜처럼 만들어 낼 수 있습니다.
**숫자, 날짜, 인용, 법률, 의학 정보는 반드시 원래 출처에서 다시 확인하세요.**

### 2. 학습한 시점 이후의 일은 모른다 — "지식 컷오프"

LLM은 특정 시점까지의 글로 학습합니다. 그 시점을 **지식 컷오프(knowledge cutoff)** 라고 합니다.
그 이후의 뉴스나 가격 변동은 모릅니다. 요즘 서비스는 웹 검색 기능을 붙여 이 약점을 보완합니다(앞의 「검색하고 도구를 쓰는 AI」).
하지만 검색을 하지 않고 답했다면 오래된 정보일 수 있습니다.

시점만 문제가 아닙니다. **많이 읽은 주제와 적게 읽은 주제의 차이**도 큽니다.
널리 알려진 개념은 잘 설명합니다. 하지만 드문 주제, 좁은 업계의 용어, 한 지역에만 해당하는 규정, 의견이 갈리는 주제에는 약합니다.[^academy-knowledge]
게다가 두 경우 모두 똑같이 자신 있는 말투로 답할 수 있습니다.

그래서 "AI가 이걸 알까?"보다 이렇게 물어보세요. 이 주제는 AI가 읽은 글에 많이 나왔을까? 우리 지역이나 우리 업계에만 해당하는 내용인가?
적게 나왔을 것 같으면 자료를 직접 붙여 넣거나 검색을 시키세요.

### 3. 한 번에 볼 수 있는 양에 한계가 있다 — "컨텍스트 윈도우"

LLM이 한 번의 대화에서 기억하고 참고할 수 있는 글의 양을 **컨텍스트 윈도우(context window)** 라고 합니다.
대화가 아주 길어지면 앞부분 내용을 놓치기 시작할 수 있습니다.
그래서 주제가 바뀌면 새 대화를 시작하는 것이 좋습니다.
넘친 부분은 **알려 주지 않고 조용히 빠질 수 있습니다.**[^academy-memory] 아주 긴 자료를 넣었다면, 끝부분 내용을 물어서 다 읽었는지 확인해 보세요.

### 4. 내 상황을 모른다

LLM은 내가 누구인지, 어떤 회사에 다니는지, 무엇 때문에 묻는지 모릅니다.
알려 주지 않으면 "평균적인 누군가"를 위한 평범한 답을 합니다.
**이 약점을 메우는 기술이 바로 [4장](04-prompt-basics.md)에서 배울 프롬프트입니다.**

### 5. 내 말에 맞장구치기 쉽다 — 아첨

앞에서 본 것처럼, 지금 서비스의 모델은 글을 다 읽은 뒤 사람이 좋은 답을 골라 주는 훈련을 더 받았습니다.
이렇게 다 읽은 모델을 대화 상대로 다듬는 단계를 **미세 조정**(fine-tuning)이라고 합니다. RLHF는 그 방법의 하나입니다.
이 훈련은 버릇도 남깁니다.[^academy-character]

대표적인 것이 **내 말에 맞장구치는 쪽으로 쏠리는 버릇**입니다. 이것을 **아첨**(sycophancy, 시코펀시)이라고 부릅니다.
"이 계획 완벽하지?"라고 물으면, 문제가 있어도 좋다고 말해 줄 수 있습니다.

솔직한 의견이 필요할 때는 반대해도 된다고 먼저 말해 보세요.

```
아래는 내가 세운 가게 홍보 계획이야. 나는 괜찮다고 생각하지만,
내가 틀렸다고 보이면 솔직하게 반대해 줘. 약점을 세 가지 짚어 줘.

[계획 붙여 넣기]
```

반대해도 된다고 먼저 말했을 때 약점을 더 솔직하게 짚는지, 말하지 않았을 때의 답과 비교해 직접 확인해 보세요.
반대해도 된다고 했을 때와 안 했을 때의 답을 한 번 비교해 보세요.

같은 훈련에서 생기는 버릇이 몇 가지 더 있습니다.

- **길게 말하는 버릇**: 한 문장이면 될 답도 길어지기 쉽습니다. "한 문장으로 답해 줘"처럼 길이를 정해 보세요.
- **지나치게 조심하는 버릇**: 위험하지 않은 질문에도 조심하라는 말을 붙일 때가 있습니다.
- **말투와 정확도가 따로 노는 버릇**: 자신 있게 말한다고 맞는 답은 아닙니다([9장](09-safety.md#_1-그럴듯한-거짓말-—-환각-확인하기)).

피드백을 받을 때는 스스로 물어보세요. 이 칭찬은 근거가 있나? 내가 듣고 싶은 말만 들은 건 아닌가?

<Quiz id="ch1-limits" />

## 영상으로 더 보기

글보다 움직이는 그림이 편하다면 아래 영상을 보세요. 위에서 읽은 "다음 말 맞히기"가 실제로 어떻게 돌아가는지 그림으로 보여 줍니다.

**한국어 영상**

**[LLM 설명 (요약버전)](https://www.youtube.com/watch?v=HnvitMTkXro)** · 3Blue1Brown 한국어 · 처음 보는 분께 가장 먼저 권합니다. 반쪽만 남은 대본을 한 단어씩 이어 쓰는 비유로 다음 말 예측을 설명하고, 학습(다이얼 맞추기)과 사람 피드백 훈련(RLHF), 트랜스포머까지 그림으로 보여 줍니다 (공식 한국어 더빙, 8분)

<YouTube id="HnvitMTkXro" title="LLM 설명 (요약버전)" />

**[챗GPT의 언어정복의 비밀(남세동 보이저엑스 대표)](https://www.youtube.com/watch?v=-VmyOfPrB0c)** · 티타임즈TV · ChatGPT가 말을 잘하게 된 원리를 우리말 대담으로 듣고 싶은 분

<YouTube id="-VmyOfPrB0c" title="챗GPT의 언어정복의 비밀(남세동 보이저엑스 대표)" />

**[챗GPT로 촉발된 생성형 AI 시대! 개념, 기술, 그리고 플랫폼 총정리](https://www.youtube.com/watch?v=ndHo5SBojbc)** · 삼성SDS · 생성형 AI 개념과 기술을 강연으로 한 번에 정리하고 싶은 분 (회사 행사 강연)

<YouTube id="ndHo5SBojbc" title="챗GPT로 촉발된 생성형 AI 시대! 개념, 기술, 그리고 플랫폼 총정리" />

> 티타임즈TV와 삼성SDS 영상은 몇 년 전에 공개된 것이라 서비스 화면이나 기능은 지금과 다를 수 있습니다. 원리 설명은 지금도 그대로 통합니다.

**영어 영상**

> 아래 영상은 모두 **영어**입니다. YouTube 영상의 설정(톱니바퀴) → 자막 → **자동 번역 → 한국어**를 고르면 한국어 자막으로 볼 수 있습니다. 영상은 이 페이지 안에서 바로 재생됩니다.

트랜스포머를 더 알고 싶다면 [2장 「영상으로 더 보기」](02-why-it-matters.md#영상으로-더-보기)에 우리말 영상이 있습니다.

**[[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g)** · Andrej Karpathy · 한 시간 정도 투자해 전체 그림을 보고 싶은 분

<YouTube id="zjkBMFhNj_g" title="[1hr Talk] Intro to Large Language Models" />

**[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)** · Andrej Karpathy · 학습 과정까지 깊이 알고 싶은 분 (긴 강의)

<YouTube id="7xTGNNLPyMI" title="Deep Dive into LLMs like ChatGPT" />

## 직접 해 보기

아무 LLM 서비스나 열고 아래 두 질문을 차례로 입력해 보세요.

```
LLM이 무엇인지 초등학생에게 설명하듯 세 문장으로 알려 줘.
```

```
방금 한 설명을 대학교 컴퓨터공학과 학생에게 하듯 다시 설명해 줘.
```

같은 내용인데 **누구에게 설명하는지만 바꿔도** 답이 확 달라지는 것을 볼 수 있습니다.

사진을 올릴 수 있는 서비스라면, 책상이나 냉장고 안처럼 물건이 여러 개 보이는 사진을 한 장 올리고 이렇게 물어보세요.

```
이 사진에 보이는 물건을 모두 적고, 각각 몇 개인지 세어 줘.
확실히 보이는 것과 추측한 것은 나눠서 표시해 줘.
```

AI가 센 개수를 직접 세어 본 것과 비교해 보세요. 개수가 맞나? 사진에 없는 물건을 적지는 않았나? 어디서 틀리는지 알면 사진을 맡길 때 무엇을 확인해야 할지 보입니다.

## 정리

- LLM은 "다음에 올 말"을 맞히는 방식으로 글을 만드는 프로그램이다.
- 학습은 다음 말 맞히기 문제를 수없이 풀며 모델 안의 숫자를 조금씩 고치는 일이다. 읽은 글은 대부분 원문이 아니라 패턴으로 남지만, 자주 본 글은 그대로 외우기도 한다. 대화하는 동안에는 배우지 않는다.
- 다음 말의 확률은 학습한 패턴과 지금 대화의 컨텍스트(내 질문·앞 대화·파일·시스템 프롬프트)가 함께 정한다. 그래서 프롬프트가 답을 바꾼다.
- 웹 검색 같은 도구는 모델이 요청 글을 쓰고, 서비스가 실행해 결과를 대화에 붙이는 방식으로 쓴다. 검색한 답도 출처를 확인한다.
- 모델의 크기는 매개변수(조절 손잡이) 수로 잰다. 하지만 실력은 크기만이 아니라 읽은 글의 양과 학습 뒤 다듬기에도 달려 있다.
- 말을 고르는 계산 안에서 사실을 조합하고 앞을 내다보는 등 생각에 가까운 일이 일어난다. 다만 늘 그러는 것은 아니고, AI의 자기 설명이나 생각 글이 실제 과정과 다를 수 있다.
- 숫자만 바꾸거나 쓸데없는 정보가 섞인 낯선 문제에서는 더 쉽게 틀린다.
- 요즘 모델은 문서·사진·소리·영상도 조각으로 바꿔 함께 다룬다(멀티모달). 그림·영상을 만드는 AI는 주로 확산 모델이라는 다른 방식을 쓴다.
- 글쓰기·요약·설명은 잘하지만, 틀린 말을 자신 있게 할 수 있다. 사진을 다룰 때도 같다.
- 내 상황을 알려 줄수록 답이 좋아진다.
- 내 말에 맞장구치기 쉽다. 솔직한 의견이 필요하면 반대해도 된다고 먼저 말한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| LLM (Large Language Model) | 엘엘엠 (대규모 언어 모델) | 엄청난 양의 글로 "다음 말 맞히기"를 배운 프로그램 |
| Generative AI | 제너레이티브 AI (생성형 AI) | 고르고 나누는 대신 새 글·그림을 만들어 내는 AI |
| Pre-training | 프리트레이닝 (사전 학습) | 엄청난 양의 글로 다음 말 맞히기를 되풀이하며 모델 안의 숫자를 맞추는 첫 학습 단계 |
| Memory | 메모리 | 서비스가 기억할 내용을 따로 적어 두었다가 새 대화에서 꺼내 쓰게 하는 기능. 모델이 새로 배우는 것은 아님 |
| Token | 토큰 | 모델이 글이나 사진을 잘라 다루는 작은 조각 |
| Context | 컨텍스트 (맥락) | 지금 대화에 들어 있는 모든 글. 내 질문·앞 대화·파일·시스템 프롬프트 |
| Embedding | 임베딩 | 조각을 뜻이 담긴 숫자 묶음으로 바꾼 것. 뜻이 비슷하면 숫자도 비슷하다 |
| Attention | 어텐션 (주의 집중) | 조각끼리 서로 살펴 어느 조각이 중요한지 따지는 계산 |
| System Prompt | 시스템 프롬프트 | 서비스가 내 질문 앞에 미리 넣어 두는 안내문 |
| Tool Calling | 툴 콜링 (도구 호출) | 모델이 요청 글을 쓰면 서비스가 검색 같은 도구를 실행해 결과를 돌려주는 방식. 함수 호출(function calling)이라고도 한다 |
| Parameter | 파라미터 (매개변수) | 모델 안에서 계산을 정하는 숫자, 즉 조절 손잡이. 개수가 모델의 크기 |
| B (Billion) | 빌리언 | 10억. "70B"는 매개변수 700억 개 |
| Training Data | 트레이닝 데이터 (학습 데이터) | 학습할 때 읽힌 글. 양은 토큰 수로 센다 |
| Interpretability | 인터프리터빌리티 (해석 가능성) | 모델 내부 계산을 들여다보고 설명하는 연구 분야 |
| Reasoning Model | 리즈닝 모델 (추론 모델) | 답하기 전에 생각하는 과정을 글로 써 가며 단계를 밟는 모델 |
| Introspection | 인트로스펙션 (내성) | 모델이 자기 내부 상태를 알아차리고 말하는 능력 |
| RLHF | 알엘에이치에프 (사람 피드백을 통한 강화 학습) | 사람이 고른 좋은 답 쪽으로 모델을 다듬는 훈련 |
| Fine-tuning | 파인튜닝 (미세 조정) | 다 읽은 모델을 대화 상대로 다듬는 단계. RLHF는 그 방법의 하나 |
| Sycophancy | 시코펀시 (아첨) | 내 말에 맞장구치는 쪽으로 쏠리는 버릇 |
| ELIZA Effect | 일라이자 효과 | 말을 자연스럽게 하는 프로그램에 마음이 있다고 느끼는 현상 |
| Multimodal | 멀티모달 | 글·사진·소리처럼 여러 종류의 정보를 함께 다루는 것 |
| Diffusion Model | 디퓨전 모델 (확산 모델) | 잡음을 조금씩 걷어 내며 그림·영상을 만드는 방식 |
| Hallucination | 할루시네이션 (환각) | 사실이 아닌 내용을 그럴듯하게 지어내는 것 |
| Knowledge Cutoff | 널리지 컷오프 (지식 컷오프) | 모델이 학습한 자료의 마지막 시점 |
| Context Window | 컨텍스트 윈도우 | 한 번의 대화에서 모델이 참고할 수 있는 글의 양 |

<ChapterDone :chapter="1" />

다음 장: [2장. 왜 이렇게 화제인가](02-why-it-matters.md)

---

[^tracing]: Anthropic, 「Tracing the thoughts of a large language model」, 2025-03-27. 댈러스→텍사스→오스틴 추론, 운율을 미리 정하는 시 쓰기, 36+59 계산과 자기 설명의 차이를 다룬다. https://www.anthropic.com/research/tracing-thoughts-language-model (확인일 2026-10-21)
[^biology]: Lindsey 외(Anthropic), 「On the Biology of a Large Language Model」, 2025-03-27. "the model performs genuine two-step reasoning internally, which coexists alongside 'shortcut' reasoning" / "satisfying insight for about a quarter of the prompts we've tried". https://transformer-circuits.pub/2025/attribution-graphs/biology.html (확인일 2026-10-21)
[^workspace]: Gurnee 외(Anthropic), 「Verbalizable Representations Form a Global Workspace in Language Models」, 2026-07-06. 두 단계 사실 질문 50개에서 중간 개념을 바꿔치기한 실험: "succeeds in 54% of trials on Haiku 4.5, 70% on Sonnet 4.5, and 70% on Opus 4.5". https://transformer-circuits.pub/2026/workspace/index.html (확인일 2026-10-21)
[^r1]: DeepSeek-AI, 「DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning」, Nature 645, 633–638 (2025). "the reasoning abilities of LLMs can be incentivized through pure reinforcement learning". https://arxiv.org/abs/2501.12948 (확인일 2026-10-21)
[^faithful]: Anthropic, 「Reasoning models don't always say what they think」, 2025-04-03. "On average across all the different hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time, and DeepSeek R1 mentioned it 39% of the time." https://www.anthropic.com/research/reasoning-models-dont-say-think (확인일 2026-10-21)
[^introspection]: Jack Lindsey(Anthropic), 「Emergent Introspective Awareness in Large Language Models」, 2025-10-29. 가장 잘한 Claude Opus 4.1이 약 20% 성공, "failures of introspection remain the norm". https://transformer-circuits.pub/2025/introspection/index.html (확인일 2026-10-21)
[^gsm]: Mirzadeh 외(Apple), 「GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models」, 2024-10-07. "Adding a single clause that seems relevant to the question causes significant performance drops (up to 65%)". https://arxiv.org/abs/2410.05229 (확인일 2026-10-21)
[^illusion]: Shojaee 외(Apple), 「The Illusion of Thinking」, 2025-06-07. https://arxiv.org/abs/2506.06941 / 반론: A. Lawsen, 「Comment on The Illusion of Thinking」, 2025-06-10. https://arxiv.org/abs/2506.09250 (확인일 2026-10-21)
[^rethinking]: Dellibarda Varela 외, 「Rethinking the Illusion of Thinking」, 2025-07-01. "LRMs still stumble when complexity rises moderately (around 8 disks)" / 풀 수 있는 문제만 내면 "over 100 agent pairs" 규모도 해결. https://arxiv.org/abs/2507.01231 (확인일 2026-10-21)
[^gpt3]: Brown 외(OpenAI), 「Language Models are Few-Shot Learners」, 2020. "an autoregressive language model with 175 billion parameters". https://arxiv.org/abs/2005.14165 (확인일 2026-10-21)
[^chinchilla]: Hoffmann 외, 「Training Compute-Optimal Large Language Models」, 2022-03-29 arXiv 공개. "the model size and the number of training tokens should be scaled equally" / 70B Chinchilla가 "uniformly and significantly outperforms Gopher (280B), GPT-3 (175B)". https://arxiv.org/abs/2203.15556 (확인일 2026-10-21)
[^llama]: Meta, 「Introducing Llama 3.1」, 2024-07-23. 8B·70B·405B 모델, "training Llama 3.1 405B on over 15 trillion tokens". https://ai.meta.com/blog/meta-llama-3-1/ (확인일 2026-10-21)
[^gpt4]: OpenAI, 「GPT-4 Technical Report」, 2023. "this report contains no further details about the architecture (including model size), hardware, training compute, dataset construction, training method, or similar." https://arxiv.org/abs/2303.08774 (확인일 2026-10-21)
[^instructgpt]: Ouyang 외, 「Training language models to follow instructions with human feedback」, 2022. 사람 피드백으로 다듬은 13억 매개변수 모델의 답이 1,750억 매개변수 GPT-3의 답보다 선호됐다. https://arxiv.org/abs/2203.02155 (확인일 2026-10-21)
[^eliza]: Joseph Weizenbaum, 「ELIZA — a computer program for the study of natural language communication between man and machine」, Communications of the ACM 9(1), 1966년 1월. https://doi.org/10.1145/365153.365168 (서지 정보 확인일 2026-10-21)
[^vit]: Dosovitskiy 외, 「An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale」, 2020. 사진을 작은 칸으로 잘라 글처럼 처리하는 방법. https://arxiv.org/abs/2010.11929 (확인일 2026-10-21)
[^academy-genai]: Claude Academy 「AI capabilities and limitations」 강의 「What We Mean by AI」. "Most AI in the world (spam filters, recommendations, fraud detection) isn't generative." / "Generative AI produces new content rather than classifying existing content." https://academy.claude.com/courses/ai-capabilities-and-limitations/what-we-mean-by-ai (확인일 2026-10-26)
[^academy-knowledge]: Claude Academy 「AI capabilities and limitations」 강의 「Knowledge」. "Limitation zone: rare, post-cutoff, niche, local, or contested topics." / "Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone." https://academy.claude.com/courses/ai-capabilities-and-limitations/knowledge (확인일 2026-10-26)
[^academy-memory]: Claude Academy 「AI capabilities and limitations」 강의 「Working Memory」. "Silent truncation is the failure mode, and you won't always be warned." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory (확인일 2026-10-26)
[^academy-character]: Claude Academy 「AI capabilities and limitations」 강의 「How AI Gets Its Character」. "Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability." / "I want you to genuinely disagree with me if you think I'm wrong." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (확인일 2026-10-26)
[^academy-pretrain]: Claude Academy 「AI capabilities and limitations」 강의 「How AI Gets Its Character」. "Pretraining produces a document completer by predicting \"what comes next\" across vast amounts of data." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (확인일 2026-10-30)
[^extract]: Carlini 외, 「Extracting Training Data from Large Language Models」, 2020-12-14 arXiv 공개(USENIX Security 2021). "we are able to extract hundreds of verbatim text sequences from the model's training data. These extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses)". https://arxiv.org/abs/2012.07805 (확인일 2026-10-30)
[^memorization]: Carlini 외, 「Quantifying Memorization Across Neural Language Models」, 2022-02-15 arXiv 공개. "Memorization significantly grows as we increase (1) the capacity of a model, (2) the number of times an example has been duplicated, and (3) the number of tokens of context used to prompt the model." https://arxiv.org/abs/2202.07646 (확인일 2026-10-30)
[^memory]: OpenAI 도움말 「Memory FAQ」. "Saved memories are stored separately from chat history." https://help.openai.com/en/articles/8590148 (확인일 2026-10-23, `docs/reports/2026-10-23_ChatGPT-공식-자료.md`). Claude 개발자 문서의 메모리 도구도 "Store and retrieve information across conversations in files you control"라고 설명한다. https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (확인일 2026-10-30)
[^word2vec]: Mikolov 외, 「Efficient Estimation of Word Representations in Vector Space」, 2013. 단어를 숫자 묶음(벡터)으로 나타내고 "The quality of these representations is measured in a word similarity task." https://arxiv.org/abs/1301.3781 (확인일 2026-10-30)
[^attention]: Vaswani 외(Google), 「Attention Is All You Need」, 2017. 트랜스포머 구조를 처음 제안한 논문. https://arxiv.org/abs/1706.03762 (확인일 2026-10-30)
[^system-prompts]: Anthropic 「System prompts」. "Claude's web interface (claude.ai) and mobile apps use a system prompt to provide up-to-date information, such as the current date, to Claude at the start of every conversation." https://platform.claude.com/docs/en/release-notes/system-prompts/overview (확인일 2026-10-30)
[^tool-use]: Anthropic 「Tool use with Claude」. "Claude determines when to call a tool based on the user's request and the tool's description." / "It calls a tool when the request maps to that tool's described capability and the answer isn't already in context." https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (확인일 2026-10-30)
[^tool-contract]: Anthropic 「How tool use works」. "The model never runs anything on its own. It emits a structured request, your code (or Anthropic's servers) runs the operation, and the result flows back into the conversation." https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works (확인일 2026-10-30)
[^openai-tools]: OpenAI 「Function calling」. 모델이 "may decide that it needs data or functionality provided by a tool", 앱이 "Execute code on the application side with input from the tool call", 이어서 "Make a second request to the model with the tool output". https://developers.openai.com/api/docs/guides/function-calling (확인일 2026-10-30)
[^cite-check]: Claude 도움말 8525154. "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (확인일 2026-10-26, `docs/reports/2026-10-26_Claude-공식-자료.md` E126)
[^search-ask]: Claude 도움말 10684626. "If you want to ensure that Claude uses web search, include \"Search the web\" or \"Use web search\" in your prompt to Claude." https://support.claude.com/en/articles/10684626 (확인일 2026-10-26, 같은 리포트 D10)
[^pdf]: Anthropic 「PDF support」. "The system converts each page of the document into an image." / "The text from each page is extracted and provided alongside each page's image." https://platform.claude.com/docs/en/build-with-claude/pdf-support (확인일 2026-10-30)
[^claude-files]: Claude 도움말 8241126. "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / PDF가 아닌 문서는 "Claude extracts text only from these files." https://support.claude.com/en/articles/8241126 (확인일 2026-10-26, 같은 리포트 F10·F12)
[^gemini-audio]: Google 「Audio understanding」(Gemini API). "32 tokens per second of audio (1 minute = 1,920 tokens)" / "Gemini understands non-speech sounds (birdsong, sirens, etc.)". https://ai.google.dev/gemini-api/docs/audio (확인일 2026-10-30)
[^gemini-video]: Google 「Video understanding」(Gemini API). "the model samples the video at a rate of 1 frame per second (FPS)" / "fast action sequences might lose detail due to the 1 FPS sampling rate." https://ai.google.dev/gemini-api/docs/video-understanding (확인일 2026-10-30)
[^ddpm]: Ho 외, 「Denoising Diffusion Probabilistic Models」, 2020. 잡음을 단계적으로 걷어 내며 그림을 만드는 확산 모델의 대표 논문. https://arxiv.org/abs/2006.11239 (확인일 2026-10-21)
