# 3장. 대화 관리 — 찾고, 정리하고, 나누고, 숨기기

> **한 줄 요약**: 다 쓴 대화는 **이름을 바꾸거나 삭제**하고, 지난 대화는 목록에서 찾거나 Claude에게 **찾아 달라고** 하면 됩니다.
> 남에게 보여 줄 때는 **특정 사람 초대**나 **공개 링크**를, 기록을 남기고 싶지 않을 때는 **시크릿 채팅**을 씁니다.

화면은 2026년 10월 웹 기준입니다. 채팅과 Cowork를 합친 새 Claude 화면이 차례로 배포되는 중이라, 화면에 따라 다를 수 있습니다. 휴대폰 앱은 메뉴 위치가 조금 다릅니다.

언제 새 대화를 여는 게 좋은지는 1단계에서 배웠습니다. 주제가 바뀌었거나, 처음 지시를 자꾸 잊거나, 대화가 너무 길어졌을 때입니다([1단계 6장](../00-common/06-conversation.md#언제-새-대화를-시작하나)). Claude에서도 그대로 통합니다. 이 장에서는 그렇게 쌓인 대화를 다루는 법을 봅니다.

## 대화 이름 바꾸기·삭제

나중에 찾기 쉽게 대화 이름을 내 말로 바꿔 두세요.
웹에서는 이렇게 합니다.

1. 옆 메뉴의 「고정됨」이나 「최근 항목」 목록에서 대화를 찾습니다.[^screen]
2. 대화 위에 마우스를 올리고 오른쪽 「⋯」(점 세 개) 버튼을 누릅니다.[^screen]
3. 「이름 변경」이나 「삭제」를 고릅니다.[^screen] 삭제는 확인 창에서 한 번 더 누릅니다.[^delete]

![옆 메뉴에서 대화 하나의 「⋯」 메뉴를 펼친 화면. ① 「⋯」 버튼, ② 「이름 변경」, ③ 「프로젝트에 추가」, ④ 「보관」, ⑤ 「삭제」에 빨간 번호가 붙어 있다](assets/shot-11-chat-menu-marked.png)

대화 제목은 예시로 바꾼 화면입니다(무료 요금제). **빨간 번호는 아래 목록의 번호와 같은 곳입니다.**[^screen]

- ① 「⋯」: 대화 위에 마우스를 올리면 보이는 버튼입니다.
- ② 「이름 변경」: 대화 제목을 내 말로 바꿉니다.
- ③ 「프로젝트에 추가」: 대화를 프로젝트에 넣습니다. 프로젝트는 [7장](07-projects-tools.md)에서 봅니다.
- ④ 「보관」: 대화를 목록에서 치워 둡니다. 지우는 것과는 다른 메뉴입니다.
- ⑤ 「삭제」: 대화를 지웁니다.

같은 메뉴에는 「고정 해제」(또는 고정)와 「아래로 이동」도 있습니다.[^screen] 고정한 대화는 옆 메뉴 「고정됨」 목록에 모입니다.

::: details 여러 대화를 한꺼번에 지우려면 (눌러서 펼치기)
여러 대화를 한꺼번에 지우는 방법도 도움말에 있습니다. 전체 대화 목록(「채팅 및 작업」, Chats and tasks)에서 「⋮」 → 「선택」을 누르고, 지울 대화에 체크하거나 맨 위 「모두 선택」을 누르는 방식입니다.[^delete] 화면에 따라 메뉴 이름이 다를 수 있습니다.
:::

휴대폰에서는 방법이 조금 다릅니다.[^delete]

- **iPhone**: 채팅 목록에서 대화를 길게 누릅니다.
- **Android**: 열린 대화 오른쪽 위 「⋮」를 누릅니다. 여러 개는 목록 오른쪽 위 체크리스트 아이콘을 누르고 휴지통 아이콘으로 지웁니다.

지우기 전에 알아 둘 점입니다.

- **삭제한 대화는 목록에서 바로 사라집니다.** 회사 서버에서도 30일 안에 지워집니다.[^delete] 되살리는 방법은 도움말에 없습니다. 지워도 괜찮은지 한 번 더 생각하고 누르세요.
- **대화를 지워도 그 대화에서 생긴 메모리는 남습니다.** 메모리(Claude가 나에 대해 기억해 두는 내용)는 따로 지워야 합니다.[^memory-delete] 지우는 법은 [5장](05-memory.md)에서 봅니다.

<Quiz id="ch203-delete" />

## 지난 대화 찾기

지난 대화를 찾는 길은 두 가지입니다.

**첫째, 목록에서 찾기.** 옆 메뉴의 「최근 항목」 목록을 훑어보세요. 옆 메뉴 위쪽에는 「검색」 버튼도 있습니다.[^screen] 짧은 질문과 긴 작업이 「최근 항목」(Recents) 한 목록에 모입니다.[^new] 제목을 내 말로 바꿔 두면 이때 훨씬 빨리 찾습니다.

**둘째, Claude에게 찾아 달라고 하기.** 유료 요금제(Pro·Max·Team·Enterprise)라면 새 대화에서 그냥 물어보면 됩니다. 웹·데스크톱·휴대폰 앱 모두 됩니다.[^search]

```
지난주에 엑셀 함수 물어봤던 대화 찾아 줘. 그때 알려 준 함수를 다시 정리해 줘.
```

Claude가 지난 대화를 뒤지면 대화 중에 **도구 호출**(Claude가 기능 하나를 꺼내 쓰는 것)로 표시됩니다. 답에 쓴 지난 대화는 원래 대화로 가는 링크(인용)로 붙습니다.[^search] 링크를 눌러 원래 대화를 열어 보세요. Claude가 엉뚱한 대화를 가져왔는지 바로 확인할 수 있습니다.

찾는 범위도 알아 두세요.[^search]

- 프로젝트 밖에서 물으면 **프로젝트 밖 대화 전체**에서 찾습니다.
- 프로젝트 안에서 물으면 **그 프로젝트 안 대화**에서만 찾습니다. 프로젝트는 [7장](07-projects-tools.md)에서 다룹니다.
- 이 검색은 예전 Cowork 작업은 찾지 않습니다. 그런 작업은 「최근 항목」에서 이름으로 찾으세요.[^new]

Claude가 지난 대화를 뒤지지 않게 하려면 「설정 > 메모리」(또는 「설정 > Your Claude」)에서 「채팅 검색 및 참조」(Search and reference chats)를 끄세요.[^search]

::: details 스위치가 보이지 않으면 (눌러서 펼치기)
도움말은 이 스위치가 「설정 > Your Claude」나 「설정 > 메모리」(Memory)에 있다고 적습니다.[^search] 이 장의 그림을 찍은 무료 계정에서는 이 스위치를 볼 수 없었습니다. 지난 대화 검색이 유료 요금제 기능이기 때문입니다.[^screen] 화면에 따라 다를 수 있습니다.
:::

<Quiz id="ch203-search" />

## 대화 보여 주기 — 특정 사람에게

대화를 다른 사람에게 보여 주는 방법은 두 가지입니다. 정한 사람만 보게 하는 **특정 사람 초대**와, 링크를 가진 누구나 보게 하는 **공개 링크**입니다. 특정 사람 초대가 기본 방식입니다.[^share-people] 먼저 이쪽부터 보겠습니다.

1. 대화 화면 오른쪽 위 「공유」를 누릅니다.
2. 「액세스 권한이 있는 사람」(People with access) 아래에 받을 사람의 이메일을 씁니다.
3. 「보내기」를 누릅니다.

<!-- 스크린샷 필요: 대화 화면 「공유」를 눌러 연 공유 창 — 「액세스 권한이 있는 사람」 이메일 칸과 「보내기」 (웹) -->

받는 사람에게는 내 이름과 대화 제목, 열기 링크가 담긴 이메일이 갑니다. 무료 요금제를 포함해 모든 요금제에서 됩니다.[^share-people]

이 방식에는 이런 특징이 있습니다.[^share-people]

- **초대한 이메일로만 열립니다.** 받은 사람이 이메일을 전달해도 다른 사람은 열 수 없습니다.
- **보기만 할 수 있습니다.** 받은 사람은 대화를 이어 가거나, 자기 계정으로 복사하거나, 파일을 받을 수 없습니다.
- **Claude 계정이 없는 사람도 초대할 수 있습니다.** 무료 계정을 만들면 볼 수 있습니다. 열지 않은 초대는 30일 뒤 사라집니다.
- **하루에 초대할 수 있는 인원에 한도가 있습니다.** 정확한 숫자는 도움말에 없습니다.
- **휴대폰 앱에서는 아직 보낼 수 없습니다.** 웹에서 보내세요. 받은 대화는 어느 기기에서나 열립니다.

공유는 **사진 찍듯 그 순간을 남긴 것**(스냅숏, snapshot)입니다.[^share-old] 공유한 뒤에 나눈 대화는 받은 사람에게 보이지 않습니다. 새 내용까지 보여 주려면 공유 창에서 「공유 채팅 업데이트」(Update shared chat)를 누르세요.[^share-people]

첨부한 파일도 공유본에 들어가지 않습니다. 파일은 계속 나만 봅니다.[^share-old]

그만 보여 주고 싶으면 공유 창에서 「끄기」(Turn off)를 누르세요. 링크가 모든 사람에게 바로 막힙니다. 대화를 삭제해도 링크가 막힙니다.[^share-people]
지금까지 공유한 대화는 한곳에서 보고 하나씩 끌 수 있습니다.[^share-people] 「설정 > 개인정보보호」의 「공유된 채팅」 옆 「관리」를 누르세요.[^screen]

<Quiz id="ch203-share" />

## 공개 링크 — 누구나 볼 수 있게

공개 링크는 링크를 가진 사람이면 **누구나** 열 수 있습니다. Claude 계정이 없어도 됩니다. 보기만 할 수 있는 것은 초대와 같습니다.[^public]
개인 요금제(Free·Pro·Max)에서만 됩니다. 회사 요금제(Team·Enterprise)는 조직 안에서만 공유할 수 있습니다.[^public]

공개 링크도 대화 화면의 「공유」에서 만듭니다. 공유 창에 보이는 항목을 따르세요.

::: details 도움말마다 만드는 순서가 다르게 적혀 있어요 (눌러서 펼치기)
공개 링크를 만드는 순서는 문서마다 다르게 적혀 있습니다. 옛 도움말은 「공유」를 누르고 나온 창에서 「공유」를 한 번 더 누르면 링크가 생긴다고 설명합니다.[^share-old] 화면에 따라 다를 수 있습니다.
:::

공개 링크를 쓰기 전에 한 가지 원칙만 기억하세요. 도움말의 표현 그대로 **"공개 링크는 공개로 취급하라"**입니다.[^public] 인터넷에 올리지 않을 내용이라면 공개 링크로도 만들지 마세요.

- **한 사람에게만 보내도 공개입니다.** 받은 사람이 전달하거나 어딘가에 올릴 수 있습니다. 특정한 사람만 보게 막을 방법이 없습니다.
- **검색 엔진에는 안 나오게 요청해 둡니다.** 하지만 링크가 퍼지거나 누가 복사본을 만드는 것까지 막지는 못합니다.
- **끄면 링크는 바로 막힙니다.** 하지만 남이 이미 만든 복사본이나 화면 캡처는 지울 수 없습니다.

Claude가 만든 파일(4장)이 들어 있는 대화는 개인 요금제에서 공개 공유를 할 수 없습니다.[^file-share]

아쉬운 예와 나은 예를 비교해 보세요.

- **아쉬운 예**: 가족 건강 상담 대화를 공개 링크로 만들어 형제에게 보낸다.
- **나은 예**: 같은 대화를 형제의 이메일로 초대한다.

차이는 하나입니다. 공개 링크는 형제가 전달하면 누구나 열 수 있지만, 초대는 형제의 이메일로만 열립니다. 공유하기 전에는 대화에 이름·전화번호 같은 개인정보가 없는지 한 번 훑어보세요([1단계 9장](../00-common/09-safety.md#_2-개인정보와-비밀-—-넣기-전에-한-번-생각하기)).

<Quiz id="ch203-public-link" />

## 기록 남기지 않기 — 시크릿 채팅

선물 고르기처럼 기록에 남기고 싶지 않은 대화는 **「시크릿 채팅」**(Incognito chat)으로 하세요. 무료 요금제를 포함해 모든 요금제에서 됩니다.[^incognito]

1. 프로젝트 밖에서 새 대화를 엽니다.[^incognito]
2. 화면 오른쪽 위 **유령 아이콘**(「시크릿 모드 사용」)을 누릅니다.[^screen]
3. 화면 둘레가 검게 바뀌고 왼쪽 위에 「시크릿」 표시가 뜨면 시작된 것입니다.[^screen][^incognito-name]

![시크릿 모드를 켠 화면. ① 왼쪽 위 「시크릿」 표시, ② 점선으로 둘린 입력창과 그 위 제목 「시크릿 모드입니다」, ③ 입력창 아래 안내 문구, ④ 오른쪽 위 ✕ 버튼에 빨간 번호가 붙어 있다](assets/shot-06-incognito-marked.png)

무료 요금제 화면입니다. **빨간 번호는 아래 표의 번호와 같은 곳입니다.**[^screen]

| 번호 | 위치 | 이름 | 하는 일 |
|---|---|---|---|
| ① | 왼쪽 위 | 「시크릿」 | 시크릿 대화 중이라는 표시 |
| ② | 가운데 | 입력창 | 점선으로 둘려 보통 대화와 구별된다 |
| ③ | 입력창 아래 | 안내 문구 | 기록에 남지 않는다는 설명 |
| ④ | 오른쪽 위 | ✕ | 시크릿 대화에서 나간다 |

③ 안내 문구는 이렇습니다. "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다."[^screen]

시크릿 채팅의 특징입니다.[^incognito]

- **대화 기록과 메모리에 저장되지 않습니다.** 옆 메뉴 대화 목록에 남지 않습니다.
- **학습에 쓰이지 않습니다.** 이 대화는 AI를 더 좋게 만드는 학습에 쓰이지 않습니다.
- **기존 메모리도 쓰지 않습니다.** 다만 설정해 둔 개인 설정 같은 프로필 정보는 씁니다.
- **일반 대화로 바꿀 수 없습니다.** 닫으면 다시 열 수도 없습니다. 남겨야 할 답은 닫기 전에 복사해 두세요.

"아무 데도 안 남는다"는 뜻은 아닙니다. **기록에는 안 남지만 기본 30일 동안 보관됩니다.**[^incognito] 비밀번호 같은 정보는 시크릿 채팅에도 넣지 마세요.

새 화면에서는 시크릿 채팅에서 **Claude가 파일을 만들거나 코드를 실행할 수 없습니다.**[^incognito] 파일 만들기는 4장에서 다룹니다.

::: details 왜 시크릿 채팅에서는 파일을 못 만드나요? (눌러서 펼치기)
새 Claude 화면을 쓰고 있어도 시크릿 채팅은 옛 화면 방식으로 열리기 때문입니다.[^incognito] 옛 화면 이야기는 [2장](02-screen-tour.md#새-claude-화면과-옛-화면)에 있습니다.
:::

### 대화는 남기고 메모리만 끄기

대화 기록은 남기되 Claude가 나에 대한 기억을 쓰지 않게 하고 싶을 때도 있습니다. 그럴 때는 새 대화에서 **첫 메시지를 보내기 전에** 「+」 메뉴의 「메모리」(Memory)를 끄세요. 대화를 시작한 뒤에는 바꿀 수 없습니다.[^memory-off]
프로젝트 안에서는 시크릿 채팅을 쓸 수 없습니다. 유령 아이콘도 보이지 않습니다. 프로젝트 안에서는 이 방법을 쓰면 됩니다.[^incognito]

| | 「시크릿 채팅」 | 메모리만 끈 대화 |
|---|---|---|
| 대화 목록에 | 남지 않는다 | 남는다 |
| 메모리를 쓰거나 더하나 | 안 한다 | 안 한다 |
| 나중에 지난 대화 검색에 | 안 나온다 | 나온다 |
| 프로젝트 안에서 | 못 쓴다 | 쓸 수 있다 |
| 켜는 곳 | 오른쪽 위 유령 아이콘 | 「+」 → 「메모리」 끄기 |

출처: Anthropic 도움말[^incognito][^memory-off]

나에 대한 기억 없이 깨끗한 답을 받아 보고 싶다면 시크릿 채팅에서 이렇게 물어보세요.

```
나에 대해 아무것도 모른다고 생각하고, 50대가 처음 배우기 좋은 운동 세 가지를 장단점과 함께 추천해 줘.
```

::: details 받는 답은 대략 이렇게 (예시 — 눌러서 펼치기)
이 가이드가 만든 예시입니다. 실제 답은 서비스와 그때그때에 따라 다릅니다.

> 50대가 처음 배우기 좋은 운동 세 가지입니다.
>
> | 운동 | 장점 | 단점 |
> |---|---|---|
> | 걷기 | 돈이 거의 안 들고 바로 시작 | 효과를 느끼기까지 오래 걸림 |
> | 수영 | 관절에 부담이 적음 | 수영장에 가야 하고 이용료가 듦 |
> | 스트레칭·요가 | 몸이 부드러워지고 균형 감각에 좋음 | 처음엔 동작을 익히기 어려움 |
>
> 지병이 있다면 시작하기 전에 의사와 먼저 상의해 보세요.

**잘 받았는지 확인해 보세요**: 딱 세 가지인가? 장점과 단점이 둘 다 있나? 시크릿 채팅인데 내 직업이나 사는 곳처럼 나에 대한 내용이 섞여 있지는 않나?

:::

<Quiz id="ch203-incognito" />

## 로그인된 기기 관리

PC방 컴퓨터나 남의 휴대폰에서 Claude에 로그인한 적이 있나요? 그렇다면 어디에 로그인돼 있는지 확인해 보세요.

웹에서 로그인하면 28일 동안 로그인이 유지됩니다. 그 사이에 Claude를 쓰면 그때부터 다시 28일로 늘어납니다.[^logout] 로그아웃을 잊은 컴퓨터는 꽤 오래 열려 있을 수 있다는 뜻입니다.

**어디에 로그인돼 있는지 보기**[^sessions]

1. 왼쪽 아래 내 이름을 누르고 「설정」을 고릅니다.[^screen]
2. 「계정」(Account)으로 갑니다.
3. 「활성 세션」(Active sessions)으로 내려갑니다. 새 설정 화면에서는 「로그인된 위치」(Where you're logged in)라고 나옵니다.

기기와 브라우저, 대략의 위치, 마지막으로 쓴 때가 보입니다. 모르는 기기가 있으면 그 옆 「⋮」 → 「종료」(Terminate)를 누르세요. 그 기기에서 바로 로그아웃됩니다. 낯선 위치나 기기가 보이면 바로 끊고, 계정 보안을 점검하세요.[^sessions]

<!-- 스크린샷 필요: 「설정 > 계정」의 「활성 세션」(로그인된 위치) 목록과 세션 옆 「⋮」 → 「종료」 (웹, 위치·기기는 예시로 가림) -->

**모든 기기에서 한 번에 로그아웃하기**[^logout]

같은 「설정 > 계정」에서 「모든 기기에서 로그아웃」을 누르고 확인하세요.[^screen][^logout-name] 웹·휴대폰·데스크톱 앱 등 로그인했던 모든 곳에서 바로 로그아웃됩니다.[^logout]
이 기능은 웹에서만 됩니다. 휴대폰 앱에는 아직 없습니다.

<Quiz id="ch203-sessions" />

## 직접 해 보기

1. "다음 달 가족 여행지 세 곳 추천해 줘"라고 묻고, 그 대화 이름을 「가족 여행 후보」로 바꿔 본다.
2. 유료 요금제라면 새 대화에서 "가족 여행 얘기한 대화 찾아 줘"라고 물어본다. 답에 붙은 링크로 원래 대화가 열리는지 확인한다. 무료 요금제라면 옆 메뉴 「검색」이나 「최근 항목」 목록에서 찾아본다.
3. 유령 아이콘으로 「시크릿 채팅」을 켜고 아무 질문이나 한 뒤 닫는다. 옆 메뉴 목록에 그 대화가 없는지 확인한다.
4. 「설정 > 계정」에서 로그인된 기기 목록을 열어 모르는 기기가 없는지 본다.

## 정리

- 대화 이름 바꾸기와 삭제는 대화 옆 「⋯」에서 한다. 삭제한 대화는 바로 사라지고 서버에서도 30일 안에 지워진다.
- 대화를 지워도 거기서 생긴 메모리는 남는다. 메모리는 따로 지운다.
- 지난 대화는 「최근 항목」 목록이나 「검색」에서 찾거나, 유료 요금제라면 Claude에게 찾아 달라고 한다.
- 특정 사람 초대는 그 이메일로만 열린다. 공개 링크는 누구나 열 수 있으니 공개로 취급한다.
- 공유는 그 순간의 스냅숏이다. 새 내용을 보이려면 「공유 채팅 업데이트」를 누른다.
- 시크릿 채팅은 기록·메모리·학습에서 빠지지만 30일 동안 보관된다. 대화는 남기고 메모리만 빼려면 첫 메시지 전에 「+」 → 「메모리」를 끈다.
- 「설정 > 계정」에서 로그인된 기기를 보고, 모르는 기기는 「종료」한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Snapshot | 스냅숏 | 어느 한 순간의 모습을 그대로 남긴 것 |
| Public link | 퍼블릭 링크 (공개 링크) | 링크를 가진 누구나 여는 공유 주소 |
| Incognito chat | 인코그니토 챗 (시크릿 채팅) | 기록·메모리에 저장되지 않는 임시 대화 |
| Memory | 메모리 | Claude가 나에 대해 기억해 두는 내용 |
| Tool call | 툴 콜 (도구 호출) | Claude가 검색 같은 기능을 꺼내 쓰는 것 |
| Session | 세션 | 한 기기에서 로그인해 있는 상태 |
| Recents | 리센츠 (최근 항목) | 새 화면에서 대화와 작업이 모이는 목록 |

<ChapterDone :chapter="203" />

다음 장: [4장. 파일과 아티팩트](04-files-artifacts.md)

[^screen]: Claude 웹 화면(무료 요금제, 한국어)에서 직접 확인. "이름 변경" / "프로젝트에 추가" / "보관" / "삭제" / "시크릿 모드입니다" / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." / "모든 기기에서 로그아웃" (확인일 2026-10-26)
[^delete]: Anthropic 도움말, 「Delete or rename a conversation」. "Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." / "Click the checkbox on the left side of additional conversations you want to delete, or click "Select all" at the top." / "Touch and hold the conversation." / "Open your chat list and tap the checklist icon in the top right corner." / "When you delete a conversation, it's removed from your conversation history immediately and deleted from our back-end systems within 30 days." https://support.claude.com/en/articles/8230524 (확인일 2026-10-26)
[^memory-delete]: Anthropic 도움말, 「Use Claude’s chat search and memory to build on previous context」. "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (확인일 2026-10-26)
[^new]: Anthropic 도움말, 「Claude Cowork and chat are one Claude」. "One conversation list: Your quick questions and longer tasks live together in Recents." / "Search doesn't include older Cowork tasks." https://support.claude.com/en/articles/16761823 (확인일 2026-10-26)
[^search]: Anthropic 도움말, 「Use Claude’s chat search and memory to build on previous context」. "Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "Individual project conversations (searches are limited to within each specific project)." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Yes, navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 (확인일 2026-10-26)
[^share-people]: Anthropic 도움말, 「Share a chat with specific people」. "This is the default way to share a chat and keeps it private to the people you choose." / "Sharing with specific people is available on all plans (Free, Pro, Max, Team, and Enterprise) on claude.ai." / "If someone forwards the email, the link won't open for anyone else." / "Recipients can't continue the chat, copy it to their account, or download files from it." / "Pending invites expire after 30 days if they aren't opened." / "There's a limit on how many people you can invite in a day." / "open the share dialog and click "Update shared chat."" / "To stop sharing the chat entirely, click "Turn off" in the share dialog." / "You can also review everything you've shared from Settings > Privacy under Shared chats." / "Sharing with specific people is available on claude.ai on the web." https://support.claude.com/en/articles/16762496 (확인일 2026-10-26)
[^share-old]: Anthropic 도움말, 「Share and unshare chats」. "While chats are always private by default, you can easily create snapshots of your conversations to share via direct link." / "Click the "Share" button in the pop out to create a shareable link." / "If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private." https://support.claude.com/en/articles/10593882 (확인일 2026-10-26)
[^public]: Anthropic 도움말, 「Public links for shared chats」. "Public links are available on Free, Pro, and Max plans." / "Anyone with the link can open it. No Claude account is required." / "The simple rule: treat a public link as public." / "there's no way to limit a public link to specific people." / "It can't remove copies, screenshots, or archives someone else already made." https://support.claude.com/en/articles/16762437 (확인일 2026-10-26)
[^file-share]: Anthropic 도움말, 「Create and edit files with Claude」. "Disabled public sharing of conversations that include any file artifacts from the code execution and file creation feature for free, Pro, and Max users." https://support.claude.com/en/articles/12111783 (확인일 2026-10-26)
[^incognito]: Anthropic 도움말, 「Use incognito chats」. "Incognito chats are temporary conversations that aren't saved to your chat history or to Claude’s memory." / "Incognito chats are not used for training." / "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." / "The interface will indicate you're in an incognito chat with a black border and “Incognito chat” label in the upper left corner." / "Yes, Claude can access this information within an incognito chat." / "Once closed, incognito chats cannot be reopened." / "Incognito mode is currently only available for chats outside of projects, so you won't see the ghost icon when starting a chat within a project." / "If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them." https://support.claude.com/en/articles/12260368 (확인일 2026-10-26)
[^memory-off]: Anthropic 도움말, 「Use Claude’s chat search and memory to build on previous context」. "Unlike an incognito chat, the chat stays in your chat history and Claude can still find it when searching past chats from your other conversations." / "You need to turn memory off before you send the first message." https://support.claude.com/en/articles/11817273 (확인일 2026-10-26)
[^sessions]: Anthropic 도움말, 「Managing your active sessions」. "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "Click the three-dot menu (⋮) next to that session." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 (확인일 2026-10-26)
[^logout]: Anthropic 도움말, 「How do I log out of all active sessions?」. "When you log in via claude.ai, this creates a session with a duration of 28 days." / "This option is not currently available in the Claude mobile apps for iOS or Android." / "This action will immediately sign you out of your account across all devices where you were previously logged in, including:" https://support.claude.com/en/articles/10310342 (확인일 2026-10-26)
[^incognito-name]: 도움말은 검은 테두리와 「Incognito chat」 표시라고 적습니다. 화면에 따라 표시 이름이 다를 수 있습니다.
[^logout-name]: 도움말에는 「로그아웃」(Log Out) 버튼이라고 적혀 있습니다.
