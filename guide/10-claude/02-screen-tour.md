# 2장. 화면 둘러보기 — 어디에 무엇이 있나

> **한 줄 요약**: Claude 화면은 **왼쪽 옆 메뉴**(지난 대화), **가운데 입력창**(질문하는 곳과 「+」),
> **보내기 버튼 옆 모델 메뉴**(모델·노력·생각), **왼쪽 아래 내 이름**(설정) 네 곳만 알면 됩니다. 처음에는 입력창만 써도 충분합니다.

화면은 2026년 10월 웹 기준입니다. 지금 Claude는 새 화면을 차례로 배포하고 있어서, 화면에 따라 다를 수 있습니다. 내 화면과 이름이 다르면 비슷한 이름의 버튼을 찾아보세요.

## 새 Claude 화면과 옛 화면

Claude는 지금 **화면을 바꾸는 중**입니다. 예전에는 보통 대화(Chat)와 일을 통째로 맡기는 **Cowork**(코워크, [8장](08-cowork.md))가 따로 있었습니다.
새 화면에서는 둘이 **대화 하나로 합쳐집니다.** 시작하기 전에 모드를 고를 필요가 없습니다.[^new]

새 화면은 Pro·Max 요금제부터 웹·컴퓨터 앱·휴대폰 앱에 차례로 배포되고 있습니다.[^new] 같은 요금제라도 바뀌는 때가 사람마다 다릅니다.
**내가 어느 화면인지는 입력창을 보면 압니다.** 입력창에 「Chat」과 「Cowork」 선택이 보이면 아직 옛 화면입니다.[^new] 이 확인법은 Pro·Max 요금제 기준입니다. 무료 요금제 입력창에 이 선택이 없다고 해서 새 화면이라는 뜻은 아닙니다.
따로 할 일은 없습니다. 차례가 오면 저절로 바뀝니다. 한 번 새 화면으로 바뀌면 옛 화면으로 되돌릴 수 없습니다.[^new]

| 달라지는 것 | 옛 화면 | 새 화면 |
|---|---|---|
| 입력창 모드 | 「Chat」·「Cowork」 중 고른다 | 고르지 않는다 |
| 웹 검색 | 켜고 끄는 스위치가 있다 | 스위치 없이 필요하면 알아서 찾는다 |
| 대화 목록 | — | 짧은 질문과 긴 작업이 「Recents」 한 곳에 |

출처: Anthropic 도움말[^new]

<!-- 스크린샷 필요: 옛 화면 입력창의 「Chat」「Cowork」 선택과, 새 화면 입력창을 나란히 (웹) -->

이 가이드는 두 화면에 모두 있는 기능을 중심으로 설명합니다. 한쪽에만 있는 기능은 그때마다 밝혀 둡니다.

<Quiz id="ch202-new-screen" />

## 옆 메뉴 — 지난 대화로 가는 길

화면 왼쪽에는 **옆 메뉴**(사이드바)가 있습니다. 지난 대화 목록과 여러 메뉴가 여기 모여 있습니다.

<!-- 스크린샷 필요: 로그인 후 첫 화면 전체. 옆 메뉴, 가운데 입력창, 보내기 버튼 옆 모델 메뉴, 왼쪽 아래 내 이름에 빨간 번호 (웹) -->

| 항목 | 하는 일 | 자세히 |
|---|---|---|
| 「Recents」 | 최근 대화와 작업 목록 | [3장](03-chats.md) |
| 「Chats and tasks」(채팅 및 작업) | 지난 대화 전체를 본다 | [3장](03-chats.md) |
| 왼쪽 아래 내 이름(이름 첫 글자) | 설정, 언어, 「도움말 받기」 | 이 장 아래 |

출처: Anthropic 도움말[^new][^chats][^support]

새 화면의 한국어 도움말에도 「Recents」처럼 영어 그대로 적힌 메뉴가 있습니다.[^new] 화면에 영어가 보여도 당황하지 않아도 됩니다.

옆 메뉴는 **완전히 끌 수 없습니다.** 열고 닫기만 됩니다.[^appearance] 화면이 좁게 느껴지면 닫아 두었다가 지난 대화를 찾을 때 여세요.

<Quiz id="ch202-sidebar" />

## 입력창과 + 메뉴

가운데 입력창에 질문을 쓰고 보내기 버튼을 누르면 대화가 시작됩니다.
입력창 왼쪽 아래 **「+」 버튼**을 누르거나 입력창에 **「/」** 를 치면 더 많은 기능과 명령이 나옵니다.[^start]

<!-- 스크린샷 필요: 입력창 「+」 버튼을 누른 메뉴 (웹, 새 화면과 옛 화면 각각) -->

처음에 알아 둘 「+」 메뉴는 두 가지입니다.

- **「파일 또는 사진 추가」**: 내 컴퓨터의 문서·사진을 올립니다. 파일을 입력창에 끌어다 놓아도 됩니다([4장](04-files-artifacts.md)).[^upload]
- **「Research」(리서치)**: 오래 조사해 보고서를 받습니다. 새 화면에서는 입력창에 `/deep-research` 를 쳐도 됩니다([6장](06-search.md)).[^new]

새 화면의 입력창에는 Claude가 얼마나 스스로 일할지 정하는 **권한 설정**도 있습니다. Pro·Max의 기본값은 「Auto」(단계마다 묻지 않고 진행)입니다. 메시지 보내기처럼 결과가 큰 일을 맡길 때는 곁에서 지켜보세요([8장](08-cowork.md)).[^new]

메뉴를 다 외울 필요는 없습니다. 무엇을 할 수 있는지 모르겠다면 Claude에게 직접 물어보세요.

```
지금 이 화면에서 너에게 맡길 수 있는 일을 다섯 가지만 알려 줘. 각각 어떻게 부탁하면 되는지 예시 문장도 하나씩 붙여 줘.
```

<Quiz id="ch202-plus" />

## 모델 메뉴 — 모델·노력·생각 고르기

웹과 컴퓨터 앱에서는 입력창 **보내기 버튼 옆**에 지금 쓰는 모델 이름이 보입니다. 휴대폰 앱에서는 화면 위쪽에 보입니다.[^start][^model]
이 이름을 누르면 **모델 메뉴**가 열립니다. 여기서 세 가지를 정합니다.[^model]

| 정하는 것 | 뜻 |
|---|---|
| **모델** | 어떤 Claude와 대화할지 |
| **노력**(Effort) | 답 하나에 얼마나 공을 들일지 |
| **생각**(Thinking) | 답하기 전에 따져 보는 단계를 거칠지 |

<!-- 스크린샷 필요: 보내기 버튼 옆 모델 이름을 누른 메뉴. 모델 목록, 「노력」, 「사고」 토글, 「더 많은 모델」 (웹) -->

대화 중에도 언제든 바꿀 수 있습니다. 바꾼 설정은 **다음 답부터** 적용됩니다.[^model]

### 모델 고르기

Claude에는 크기와 성격이 다른 모델이 여러 개 있습니다. 모델 이름을 누르면 바꿀 수 있고, 목록에 없는 모델은 「더 많은 모델」(More models)에 있습니다.[^model]

모델 이름은 자주 바뀝니다. 2026년에만 새 모델이 여러 번 나왔습니다.[^rn] 그래서 이 가이드는 모델을 **역할**로 부릅니다. 2026년 10월 26일 기준 이름과 요금제별로 쓸 수 있는지는 아래와 같습니다.

| 역할 | 이름(계열) | Free | Pro | Max |
|---|---|---|---|---|
| 가장 성능이 높은 모델 | Fable | 없음 | 사용 크레딧으로만 | 주간 한도의 50%까지 |
| 큰 모델 | Opus | 없음 | 있음 | 있음 |
| 빠른 모델 | Sonnet | 있음 | 있음 | 있음 |
| 가장 작고 빠른 모델 | Haiku | 있음 | 있음 | 있음 |

출처: Anthropic 요금 페이지·도움말[^pricing][^fable][^rn]

**사용 크레딧**(Usage credits)은 요금제 한도와 따로, 쓴 만큼 돈을 내는 사용량입니다. Pro에서는 가장 성능이 높은 모델이 요금제 한도에 들어 있지 않아서 처음부터 이 크레딧으로만 씁니다.[^fable]
Max의 "50%까지"는 한도가 늘어난다는 뜻이 아닙니다. 다른 모델과 **같은 주간 한도를 나눠 쓰고**, 그중 절반까지 가장 성능이 높은 모델에 쓸 수 있다는 뜻입니다.[^fable]

모델은 목록에서 빠지기도 합니다. Anthropic은 지금까지 대부분의 모델을 나온 지 1년쯤 뒤에 내렸습니다.[^persona] 새 모델로 바뀌어 말투가 낯설어지면, 좋았던 지난 대화를 보여 주며 이렇게 부탁해 보세요.[^persona]

```
내가 좋았다고 느낀 지난 대화 몇 개를 살펴보고, 앞으로 너에게 줄 지침을 직접 써 줘.
말투와 답의 길이, 형식에 대한 내 취향이 드러나게 정리해 줘.
```

### 노력 — 얼마나 공을 들일까

**노력**(Effort)이 높을수록 답이 꼼꼼해집니다. 대신 시간이 더 걸리고, 사용 한도에 더 빨리 닿습니다.[^model]

| 노력 | 어울리는 일 |
|---|---|
| 「낮음」·「중간」 | 일상적인 일 |
| 「높음」 | 품질과 속도의 균형 |
| 「매우 높음」 | 오래 걸리는 코딩, 여러 단계를 스스로 하는 작업(일부 모델만) |
| 「최대」 | 가장 깊은 분석이 필요한 일 |

출처: Anthropic 도움말[^model]

모델마다 권장하는 노력에는 「기본값」(Default)이라고 표시되어 있습니다.[^model] 대부분은 그대로 두면 됩니다.

### 생각 — 답하기 전에 따져 볼까

**생각**(Thinking)을 켜면 Claude가 답하기 전에 문제를 나누고, 방법을 계획하고, 여러 길을 따져 봅니다.[^model] 이것을 **확장 사고**(extended thinking)라고도 합니다.[^start]
켜고 끄는 법은 이렇습니다. 모델 이름을 누르고 「노력」 위에 마우스를 올린 뒤 「사고」(Thinking, 또는 「확장」) 스위치를 켜거나 끕니다.[^model]
생각과 노력은 **따로 정하는 설정**입니다. 어떤 조합이든 쓸 수 있습니다.[^model] 최신 모델 중에는 생각을 끌 수 없는 것도 있습니다.[^model]

생각을 켜면 답하는 동안 시간이 흐르는 「사고」 표시가 보입니다. 답 위의 「사고」 칸을 누르면 Claude가 어떻게 생각했는지 요약을 볼 수 있습니다.[^model]
이 요약을 읽으면 Claude가 어떤 길로 결론에 닿았는지 확인할 수 있습니다.
가끔 생각이 중간에 끊기고 나머지를 볼 수 없다는 안내가 뜹니다. 그럴 때는 질문을 다른 각도로 바꿔 보세요.[^model]

### 언제 올릴까

**일상적인 일은 기본값으로 충분합니다.**[^model] 수학 계산, 긴 문서 분석, 여러 단계를 거치는 문제라면 노력을 올리거나 생각을 켜 보세요.[^model]
어떤 설정을 고르든 **문제를 구체적으로 적는 것**이 가장 중요합니다([1단계 4장](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)).[^model]

같은 질문을 노력만 바꿔 물어보세요. 빠른 답과 공들인 답의 차이를 바로 느낄 수 있습니다.

```
월급 300만 원인 직장인이 3년 안에 2,000만 원을 모으려면 매달 얼마씩 모아야 하는지,
적금 이자를 생각한 경우와 생각하지 않은 경우로 나눠 계산 과정을 보여 줘.
```

<Quiz id="ch202-model-menu" />

## 대화 중에 모델이 바뀌었다는 알림

가끔 **"모델이 바뀌었다"는 알림**이 뜰 수 있습니다. 가장 성능이 높은 모델을 비롯한 몇몇 모델은 질문을 자동으로 안전 검사합니다. 아주 좁은 위험 분야라고 판단하면 다른 모델로 넘겨 답하게 합니다.[^switch]
이렇게 넘기는 것을 **폴백**(fallback, 대신 받아 주는 모델로 넘기기)이라고 합니다. 공격용 해킹 기법이나 바이러스·독성 같은 생물학 위험 분야 등이 그 대상입니다.[^switch] 대부분의 질문은 영향을 받지 않습니다.

모델이 바뀌면 이렇게 됩니다.[^switch]

- **알림이 뜨고, 답에 답한 모델 이름이 붙습니다.** 자동 전환은 기본으로 켜져 있습니다.
- **그 대화가 끝날 때까지 바뀐 모델에 머뭅니다.** 원래 모델로 직접 되돌릴 수는 있습니다. 하지만 문제가 된 내용이 대화에 남아 있으면 또 바뀔 수 있습니다. 앞 메시지를 고친 뒤 다시 보내 보세요.
- **내가 치지 않은 내용 때문에 바뀔 수도 있습니다.** 검사는 메모리, 연결한 앱, 웹 검색 결과, 올린 파일까지 함께 봅니다.

자동 전환이 싫으면 설정 → 「기능」(Capabilities)에서 「메시지가 플래그되면 모델 전환」(Switch models when a message is flagged)을 끄세요. 끄면 모델이 바뀌는 대신 대화가 멈추고, 내가 직접 고르게 됩니다.[^switch]
문제없는 질문인데 잘못 걸렸다고 생각되면 「피드백 보내기」(Send feedback)로 알려 주세요.[^switch]

<Quiz id="ch202-fallback" />

## 설정 화면 — 언어와 화면 모양

왼쪽 아래 내 이름(이름 첫 글자)을 누르고 「설정」을 고르면 설정 화면이 열립니다.[^signup]
설정 화면도 새 이름과 옛 이름이 함께 쓰이고 있습니다. 예를 들어 모든 대화에 적용할 지침은 새 설정 화면에서 「Your Claude」, 옛 설정 화면에서 「계정」에 있습니다.[^new]

<!-- 스크린샷 필요: 설정 화면 왼쪽 메뉴 목록 전체에 빨간 번호 (웹) -->

처음에는 아래 몇 개만 알면 됩니다.

| 설정 메뉴 | 여기서 하는 일 | 자세히 |
|---|---|---|
| 「모양」 | 밝은 화면·어두운 화면, 글꼴 | 이 장 |
| 「청구」 | 요금제 바꾸기, 취소, 영수증 | [1장](01-getting-started.md#유료로-바꾸기-전에-알아-둘-것) |
| 「사용량」 | 남은 사용 한도 (유료) | [1장](01-getting-started.md#사용-한도-—-5시간·주간·길이) |
| 「기능」 | 모델 자동 전환, 음성 언어 | 이 장, [10장](10-voice-mobile.md) |
| 「Your Claude」 | 모든 대화에 적용할 지침(옛 설정 화면은 「계정」) | [5장](05-memory.md) |
| 「계정」 | 로그인된 기기 확인(「활성 세션」·「로그인된 위치」) | [3장](03-chats.md) |
| 「개인정보 보호」(Privacy) | 공유한 대화 목록 | [3장](03-chats.md), [9장](09-privacy.md) |

출처: Anthropic 도움말[^new][^appearance][^cancel][^best][^switch][^lang][^sessions][^share]

**화면 언어 바꾸기**: 왼쪽 아래 프로필 아이콘을 누르고 「언어」에서 고릅니다.[^lang] 웹과 컴퓨터 앱은 한국어를 포함해 11개 언어로 쓸 수 있습니다.[^lang]
화면 언어와 상관없이 Claude는 **내가 쓰는 언어로 답합니다.** 화면이 영어여도 한국어로 물으면 한국어로 답합니다.[^lang]
음성 모드에서 쓰는 언어는 따로 정합니다. 설정 → 「기능」 → 음성 → 「음성 언어」로 갑니다([10장](10-voice-mobile.md)).[^lang]

**어두운 화면 쓰기**: 설정 → 「모양」의 「색상 모드」에서 「라이트」「시스템 일치」「다크」 중에 고릅니다.[^appearance] 「시스템 일치」는 컴퓨터나 휴대폰의 설정을 따라갑니다.
글자가 읽기 어렵다면 같은 곳의 「채팅 글꼴」을 바꿔 보세요. 「기본값」「시스템 일치」「난독증 친화적」 중에 고를 수 있습니다.[^appearance]

<Quiz id="ch202-settings" />

## 직접 해 보기

1. Pro·Max라면 입력창을 보고 「Chat」「Cowork」 선택이 있는지 확인한다. 내가 새 화면인지 옛 화면인지 알아 둔다.
2. 입력창 「+」 버튼을 눌러 메뉴 항목을 하나씩 읽어 보고(누르지 않아도 됩니다) 닫는다.
3. 보내기 버튼 옆 모델 이름을 눌러 지금 모델과 노력의 「기본값」이 무엇인지 확인한다.
4. 위의 저축 계산 질문을 노력 「낮음」으로 한 번, 「높음」으로 한 번 보내고 답을 비교한다. 생각을 켤 수 있다면 「사고」 칸을 눌러 요약도 읽어 본다.
5. 설정 → 「모양」에서 색상 모드를 「다크」로 바꿔 보고, 마음에 드는 쪽으로 되돌린다.

## 정리

- Claude는 채팅과 Cowork를 합친 새 화면을 차례로 배포하고 있다. Pro·Max에서 입력창에 「Chat」「Cowork」 선택이 보이면 아직 옛 화면이다.
- 옆 메뉴에는 지난 대화가, 왼쪽 아래 내 이름에는 설정과 「도움말 받기」가 있다. 옆 메뉴는 끌 수 없고 열고 닫기만 된다.
- 입력창 「+」나 「/」로 파일 올리기, 리서치 같은 기능을 연다.
- 보내기 버튼 옆 모델 메뉴에서 모델·노력·생각을 정한다. 일상적인 일은 기본값이면 충분하다.
- 위험 분야로 판단된 질문은 다른 모델이 대신 답할 수 있다. 알림과 모델 이름표로 알 수 있고, 설정 → 「기능」에서 끌 수 있다.
- 화면 언어는 「언어」, 어두운 화면과 글꼴은 설정 → 「모양」에서 바꾼다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Cowork | 코워크 | 여러 단계 일을 통째로 맡기는 기능 ([8장](08-cowork.md)) |
| Sidebar | 사이드바 (옆 메뉴) | 화면 왼쪽에 세로로 붙은 메뉴 |
| Recents | 리센츠 | 최근 대화와 작업 목록 |
| Effort | 에포트 (노력) | 답 하나에 얼마나 공을 들일지 정하는 설정 |
| Extended Thinking | 익스텐디드 싱킹 (확장 사고) | 답하기 전에 따져 보는 단계를 거치는 것 |
| Usage Credits | 유시지 크레딧 (사용 크레딧) | 요금제 한도와 따로, 쓴 만큼 돈을 내는 사용량 |
| Fallback | 폴백 | 안전 검사에 걸린 질문을 다른 모델이 대신 받아 답하는 것 |
| Dyslexic Friendly | 디스렉식 프렌들리 (난독증 친화적) | 글자를 읽기 어려운 사람을 위한 글꼴 |

<ChapterDone :chapter="202" />

다음 장: [3장. 대화 관리](03-chats.md)

[^new]: Anthropic 도움말, 「Claude Cowork and chat are one Claude」. "With the new Claude experience, you ask for all of it in the same conversation, with no mode to choose." / "The new Claude experience is rolling out gradually, starting with Pro and Max plans on web, desktop, and mobile." / "If you're on a Pro or Max plan and your message box still shows "Chat" and "Cowork" options, you don't have it yet." / "One conversation list: Your quick questions and longer tasks live together in Recents." / "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" / "Auto (default on Pro, Max, and Team plans): Claude keeps working without stopping to ask about each step, and automated safety checks run before it takes an action." / "For work with real consequences, like sending messages or changing important files, stay close and review what Claude does." / "Instructions for Claude: Set preferences that apply to every conversation in Settings > Your Claude (or Settings > Account in the older Settings layout)." https://support.claude.com/en/articles/16761823 (확인일 2026-10-26)
[^chats]: Anthropic 도움말, 「Delete or rename a conversation」. "Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." https://support.claude.com/en/articles/8230524 (확인일 2026-10-26)
[^support]: Anthropic 도움말, 「How to get support」. "Click your initials or name in the lower left corner and select “Get help” from the menu." https://support.claude.com/en/articles/9015913 (확인일 2026-10-26)
[^appearance]: Anthropic 도움말, 「Customizing your appearance settings」. "Select from Light, Match System, and Dark under Color mode." / "Select from Default, Match System, and Dyslexic Friendly." / "It's not currently possible to completely disable the sidebar." https://support.claude.com/en/articles/8887527 (확인일 2026-10-26)
[^start]: Anthropic 도움말, 「Get started with Claude」. "You can click the "+" button in the lower left or type "/" to view additional options and commands" / "displayed either below your text input (on web and desktop) or at the top of your screen (on mobile)." / "You can also choose how much effort Claude puts into each response and whether it uses extended thinking." https://support.claude.com/en/articles/8114491 (확인일 2026-10-26)
[^upload]: Anthropic 도움말, 「Upload files to Claude」. "Click the \"+\" button in the lower left corner of the chat box" https://support.claude.com/en/articles/8241126 (확인일 2026-10-26)
[^model]: Anthropic 도움말, 「Change the model, effort, and thinking settings」. "The model menu next to the send button controls three settings: which Claude model you're chatting with, how much effort it puts into each response, and whether it uses thinking." / "The selected model and effort level appear next to the send button." / "Click "More models" to view additional options." / "You can change the model, effort level, or thinking setting at any point in a conversation. Changes apply starting with Claude's next response." / "Higher effort means more thorough responses, but they take longer and use more tokens, so you'll reach your usage limits faster." / "Each model has a recommended effort level, marked as "Default" in the menu:" / "Extra high (xhigh) is designed for long-running coding and agentic tasks" / "Thinking lets Claude spend more time breaking down problems, planning solutions, and exploring different approaches before responding." / "Thinking and effort are separate settings, and you can use any combination of the two." / "Switch the "Thinking" (or “Extended”) toggle on or off." / "Click the "Thinking" section to view Claude's thought process summary and problem-solving approach." / "Occasionally, you may notice that Claude's thinking stops before it's complete, with a message stating that the rest of Claude's thought process is not available." / "For everyday tasks, the defaults work well." / "Whichever settings you choose, be specific about your problem or question." 생각을 끌 수 없는 모델 목록은 영어판과 한국어판이 조금 다르다. https://support.claude.com/en/articles/8664678 (확인일 2026-10-26)
[^rn]: Anthropic 도움말, 「Release notes」(2026년 항목). "We just launched Claude Haiku 5.5, the cheapest, fastest, and most capable small model we’ve released" / "Sonnet 5.5 is a faster, lower-cost complement to Claude Opus 5.5." / "It performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5." / "We just launched Claude Fable 5.1 and Claude Mythos 5.1, the world’s most advanced models for coding and knowledge work." https://support.claude.com/en/articles/12138966 (확인일 2026-10-26)
[^pricing]: Anthropic 요금 페이지. 모델 비교표의 Fable 행 " No Usage credits 50% of weekly limits* 50% of weekly limits* " (열 = Free/Pro/Max 5x/Max 20x), Opus 행은 Free 없음, Sonnet·Haiku 행은 Free 있음. https://claude.com/pricing (확인일 2026-10-26)
[^fable]: Anthropic 도움말, 「Claude Fable models on your plan」. "On Pro plans, standard seats on Team plans, and standard seats on seat-based Enterprise plans, Fable models run on pay-as-you-go usage credits from the start, since they aren’t included in your plan's usage limits." / "No. You can use up to 50% of your weekly limit on Fable models, but your use of other models draws from the same usage limits and you can never use more than your weekly limit." https://support.claude.com/en/articles/15424964 (확인일 2026-10-26)
[^persona]: Anthropic 도움말, 「Adapt to new model personas after deprecations」. "historically Anthropic has deprecated most models around a year after their initial release." / "you can ask Claude to review some of the conversations you’ve most appreciated and to craft instructions for itself based on those." https://support.claude.com/en/articles/12738598 (확인일 2026-10-26)
[^switch]: Anthropic 도움말, 대화 중 모델이 바뀐 이유를 설명하는 문서(문서 제목에 현재 모델 이름이 들어 있어 이 가이드에는 적지 않음). "Offensive cybersecurity techniques, such as building exploits, malware, or attack tooling." / "so a block can be triggered by content you didn't type." / "You’ll see a notice explaining that the model switched, and the response will be labeled with the model that answered." / "Editing your previous message before retrying often helps." / "With automatic model switching off, a blocked request pauses the conversation instead of switching models." / "Use "Send feedback" to report it." https://support.claude.com/en/articles/15363606 (확인일 2026-10-26)
[^signup]: Anthropic 도움말, 「How do I sign up for the Pro plan?」. "Navigate to Settings > Billing and click the “Upgrade plan” button." 설정은 왼쪽 아래 이름 첫 글자(또는 이름) → 「설정」으로 연다. https://support.claude.com/en/articles/8325609 (확인일 2026-10-26)
[^cancel]: Anthropic 도움말, 「Cancel your Pro or Max subscription」. "Navigate to Settings > Billing and click the “Cancel” button." https://support.claude.com/en/articles/8325617 (확인일 2026-10-26)
[^best]: Anthropic 도움말, 「Usage limit best practices」. "you can navigate to Settings > Usage to view progress bars showing how much of your five-hour session and weekly usage limits you’ve consumed." https://support.claude.com/en/articles/9797557 (확인일 2026-10-26)
[^lang]: Anthropic 도움말, 「How to use Claude in your preferred language」. "Claude is available in multiple languages on web and desktop applications." / "Go to the "Language" section." / "Claude will converse with you in the language you use." / "go to Settings > Capabilities, then find Voice > Spoken language and choose a language." https://support.claude.com/en/articles/10769299 (확인일 2026-10-26)
[^sessions]: Anthropic 도움말, 「Managing your active sessions」. "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." https://support.claude.com/en/articles/13124001 (확인일 2026-10-26)
[^share]: Anthropic 도움말, 「Share a chat with specific people」. "You can also review everything you've shared from Settings > Privacy under Shared chats." https://support.claude.com/en/articles/16762496 (확인일 2026-10-26)
