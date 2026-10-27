# 7장. 프로젝트·커넥터·스킬 — 자료와 도구를 Claude에 붙이기

> **한 줄 요약**: 같은 일에 쓰는 자료와 지침은 **프로젝트**에 묶어 두세요. 메일·캘린더 같은 다른 앱은 **커넥터**로 연결하고,
> 매번 같은 방식으로 할 일은 **스킬**로 넣어 둡니다. 이 셋을 업무별로 묶은 꾸러미가 **플러그인**입니다.

화면은 2026년 10월 웹 기준입니다. 채팅과 Cowork를 합친 새 화면이 차례로 배포되고 있어서, 메뉴 위치와 이름은 화면에 따라 다를 수 있습니다.
이 장의 그림은 무료 요금제 웹 화면입니다. 메뉴 이름은 그림에 보이는 이름으로 씁니다. 도움말에 나오는 다른 이름은 각주에 모았습니다.

이 장에서 쓰는 곳은 옆 메뉴의 두 곳입니다. 「프로젝트」와 「사용자 지정」(Customize)입니다.[^screen] 아래 그림들에서 각각 ③·④로 표시했습니다.

## 프로젝트 — 자료와 지침을 한곳에

**프로젝트**(project)는 한 가지 일을 위한 작업 공간입니다. 프로젝트마다 대화 기록과 **지식**(knowledge, 참고 자료를 넣어 두는 곳)이 따로 있습니다.[^projects]
예를 들어 「회사 주간 보고」 프로젝트에 보고 양식 파일을 넣어 두세요. 그 안에서 여는 대화는 매번 그 양식을 알고 시작합니다.

프로젝트는 무료 요금제에서도 만들 수 있습니다. 무료는 5개까지입니다.[^projects-how][^projects-limit]

### 만들고 채우는 법

1. 옆 메뉴 ③ 「프로젝트」(claude.ai/projects)를 엽니다. 오른쪽 위 ① 「새 프로젝트」를 누릅니다.[^screen][^projects-how][^new-project-name]
2. 이름과 설명을 적습니다. 이름과 설명은 **Claude가 읽지 못합니다.** 일하는 데 필요한 내용은 지식이나 지침에 넣으세요.[^projects-how]
3. 프로젝트 화면 오른쪽 **프로젝트 지식**의 「+」로 파일이나 글을 올립니다. 여기 올린 것은 그 프로젝트의 모든 대화에서 쓰입니다.[^projects-how]
4. 「프로젝트 지침 설정」에 이 프로젝트에서 지킬 규칙을 적고 「지침 저장」을 누릅니다.[^projects-how]
5. 이미 있는 대화는 대화 이름 옆 화살표 → 「프로젝트에 추가」로 옮깁니다.[^projects-how]

이번 대화에서만 볼 자료는 프로젝트 지식에 넣지 말고 그 대화에 바로 올리세요. 지식이 어수선해지지 않습니다.[^academy-projects]

![「프로젝트」 화면. ① 오른쪽 위 「새 프로젝트」 버튼, ② 가운데 프로젝트 목록(일부에 「예제 프로젝트」 표시), ③ 옆 메뉴의 「프로젝트」에 빨간 번호가 붙어 있다](assets/shot-10-projects-marked.png)

프로젝트 이름과 대화 제목은 예시로 바꾼 화면입니다(무료 요금제). **빨간 번호는 아래 목록의 번호와 같은 곳입니다.**

- ① 「새 프로젝트」 — 새 프로젝트를 만든다
- ② 프로젝트 목록 — 만든 프로젝트가 날짜와 함께 보인다
- ③ 옆 메뉴 「프로젝트」 — 이 화면을 여는 곳

목록에는 「예제 프로젝트」 표시가 붙은 것도 있습니다.[^screen] 내가 만들지 않은 프로젝트가 보여도 놀라지 마세요.

<!-- 스크린샷 필요: 프로젝트 화면. 오른쪽 「프로젝트 지식」 칸과 「+」, 「프로젝트 지침 설정」 버튼 -->

[5장](05-memory.md)의 지침은 모든 대화에 적용됩니다. 프로젝트 지침은 **그 프로젝트 안의 대화에만** 적용됩니다.[^personal][^project-instr-free]

### 같은 프로젝트라도 대화 내용을 그대로 나누지는 않는다

같은 프로젝트 안이라도 **대화 내용이 다음 대화로 통째로 넘어가지는 않습니다.** 다른 대화에서도 알아야 할 내용은 프로젝트 지식에 넣으세요.[^projects-how]
예를 들어 어제 대화에서 정한 "표는 세 칸으로"는 메모리가 켜져 있으면 오늘 새 대화가 알 수도 있습니다. 하지만 꼭 지켜야 할 규칙이라면 지침이나 지식에 적어 두세요. 그러면 모든 대화가 압니다.

메모리는 프로젝트마다 따로 있습니다. 프로젝트 안에서는 그 프로젝트의 메모리와, 프로젝트 밖 대화의 메모리를 함께 씁니다. 다른 프로젝트의 메모리는 쓰지 않습니다.[^projects-how]
프로젝트를 완전히 따로 두고 싶으면 프로젝트 화면의 메모리에서 「계정 메모리 사용」을 끄세요.[^projects-how] 메모리 자체는 [5장](05-memory.md)에서 다룹니다.

### 자료가 많아지면 — RAG

유료 요금제에서는 지식이 많아져 한도에 가까워지면 **RAG**(Retrieval Augmented Generation, 자료 전체가 아니라 필요한 부분만 찾아 읽는 방식)로 저절로 바뀝니다. 그러면 넣을 수 있는 양이 최대 10배까지 늘어납니다. 따로 켜거나 끌 것은 없습니다.[^rag]
자료가 많을 때는 이렇게 해 보세요. 파일 이름을 알아보기 쉽게 짓고, 질문할 때 문서 이름을 짚어 주세요. 그러면 Claude가 어디를 찾아야 할지 좁힐 수 있습니다.[^rag]

```
「2026년 3분기 매출 보고서」 파일에서 지역별 매출만 표로 뽑아 줘.
```

### 정리할 때

- **한 가지 일부터 시작하세요.** 모든 일을 담는 프로젝트 하나보다 「주간 보고」처럼 좁은 프로젝트로 시작하세요. 자료는 쓰면서 더하면 됩니다.[^academy-projects]
- **지난 자료는 가끔 바꿔 주세요.** 프로젝트 지식에 낡은 자료가 남아 있으면 답도 낡은 내용으로 나올 수 있습니다. 가끔 지식 목록을 훑어보고 고치세요.[^academy-projects]
- **별 표시**를 달면 옆 메뉴에서 빨리 찾을 수 있습니다.[^projects-how]
- 끝난 프로젝트는 **보관**할 수 있습니다. 보관한 프로젝트는 바로 지울 수 없습니다. 「보관 해제」한 뒤에 지우세요.[^projects-how]
- 프로젝트를 다른 사람과 공유하는 기능은 Team·Enterprise(회사 요금제)에만 있습니다.[^projects]

> **새 버전 프로젝트(베타)**: 프로젝트 하나를 대화 하나로 쓰는 새 방식이 일부 사용자부터 배포되고 있습니다. 옮겨 가도 지침·파일·대화 기록은 그대로 갑니다.[^projects] 아직 일부에게만 열린 기능이라, 이 장은 지금의 프로젝트 기준으로 설명합니다.

### 다시 쓸 틀을 지침에 넣기

[1단계 8장](../00-common/08-meta-prompting.md#_4-다시-쓸-틀로-만들기)에서 잘 된 요청을 빈칸만 바꿔 다시 쓰는 **틀**로 만들었습니다. 그 틀을 프로젝트 지침에 넣어 보세요. 대화마다 틀을 붙여 넣지 않아도 됩니다.

```
이 프로젝트의 대화에서는 내가 보내는 업무 메모를 주간 보고로 정리해 줘.
- "완료 / 진행 중 / 다음 주 계획" 세 칸 표로 만들 것
- 항목마다 한 줄로 쓸 것
- 메모에 없는 내용은 지어내지 말고 [확인 필요]라고 표시할 것
```

이제 프로젝트 안 새 대화에는 이번 주 메모만 붙여 넣으면 됩니다.

<Quiz id="ch207-projects" />

## 커넥터 — 다른 앱과 연결하기

**커넥터**(connector)는 Claude를 내가 쓰는 앱과 서비스에 잇는 연결입니다. 연결하면 Claude가 그 안의 자료를 가져오고, 그 서비스 안에서 일까지 할 수 있습니다.[^connectors]
예를 들어 Google 캘린더를 연결하면 "다음 주에 빈 시간 알려 줘"라고 물을 수 있습니다. 일정을 복사해 붙여 넣지 않아도 됩니다.

커넥터는 무료를 포함한 모든 사용자가 웹·데스크톱·휴대폰에서 쓸 수 있습니다.[^connectors]

### 연결하는 법

1. 입력창 왼쪽 아래 「+」를 누르고 ③ 「커넥터 추가」를 고릅니다.[^screen][^connector-name] 옆 메뉴 「사용자 지정」 → 「커넥터」 탭에서도 됩니다.[^screen]
2. 쓸 서비스를 고르고 「연결」이나 「설치」를 누릅니다. 그 서비스에 로그인해 권한을 허락합니다.[^connectors]
3. 대화마다 「+」 → 「커넥터」에서 이번 대화에 쓸 서비스를 켜고 끕니다.[^connectors]

연결했으면 간단한 부탁으로 확인해 보세요.[^academy-connect]

```
내 Google 캘린더에 접근할 수 있어? 다음 주 월요일 일정만 보여 줘.
```

일정이 보이면 제대로 연결된 것입니다.

![입력창 「+」를 누르면 열리는 메뉴. ① 「파일 업로드 또는 추가」, ② 「Skills」, ③ 「커넥터 추가」, ④ 「디자인 시스템」, ⑤ 「플러그인 추가」, ⑥ 「메모리」에 빨간 번호가 붙어 있다](assets/shot-02-plus-menu-marked.png)

무료 요금제 화면입니다. 이 장에서 쓰는 것은 아래 세 가지입니다.

- ② 「Skills」 — 스킬 목록을 연다
- ③ 「커넥터 추가」 — 다른 앱을 연결한다
- ⑤ 「플러그인 추가」 — 플러그인을 넣는다

⑥ 「메모리」는 [5장](05-memory.md#한-채팅만-메모리-끄기)에서 다룹니다.

<!-- 스크린샷 필요: 입력창 「+」 → 「커넥터」 메뉴와 서비스별 켜기·끄기 스위치 -->

휴대폰에서 커넥터를 설치하는 것은 아직 베타입니다. 웹이나 데스크톱에서 연결해 두면, 다음에 휴대폰 앱에 로그인할 때 그대로 쓸 수 있습니다.[^connectors]

### 연결하기 전에 알아 둘 것

- **믿는 서비스만, 필요한 것만 연결하세요.** 연결하면 Claude가 내 계정 권한 안에서 자료를 읽고, 바꿀 수도 있기 때문입니다.[^connectors] 연결하기 전에 물어보세요. 믿을 수 있는 서비스인가? 이 일에 꼭 필요한가?
- **원래 못 보던 것은 연결해도 못 봅니다.** 그 서비스에서 내가 열 수 없는 파일은 커넥터로도 열 수 없습니다.[^connectors]
- **연결 끊기와 권한 보기**는 「사용자 지정」 → 「커넥터」에서 합니다.[^connectors]
- **연결한 앱의 자료로 모델을 학습하지 않습니다.** 연결한 앱은 내 다른 대화를 보지 못합니다.[^suggest] 학습 설정 전체는 [9장](09-privacy.md)에서 다룹니다.

### 대표 예 — Google·Microsoft 365

**Gmail·Google 캘린더·Google Drive** 커넥터는 웹과 데스크톱의 모든 사용자가 씁니다.[^google]
- 메일 보내기·답장, Drive 파일 공유·이동·휴지통 같은 일은 기본적으로 **할 때마다 먼저 묻습니다.**[^google]
- Google 문서로 받고 싶으면 이름을 분명히 말하세요. 그냥 "문서"라고 하면 내려받는 파일이 생깁니다.[^google]
- Gmail의 첨부 파일은 내용을 읽지 못합니다. Drive 문서는 글자만 읽고 그림은 처리하지 않습니다.[^google]
- 커넥터로 가져온 자료는 그 대화와 함께 보관됩니다. 대화를 지우면 함께 지워집니다.[^google]

아쉬운 예와 나은 예를 비교해 보세요.

```
회의 내용을 문서로 정리해 줘.
```

```
이 메모로 Google 문서를 만들어 줘. 제목은 「10월 팀 회의록」으로 해 줘.
```

두 번째처럼 "Google 문서"라고 말해야 Drive에 Google 문서가 생깁니다.

**Microsoft 365** 커넥터는 무료를 포함한 모든 요금제에서 됩니다. 단, **회사 계정만** 연결됩니다. @outlook.com 같은 개인 계정은 안 됩니다.[^m365] 회사 관리자의 동의도 먼저 필요합니다.[^m365]

### 대화 안에 화면이 뜨는 커넥터

**대화형 커넥터**(interactive connector)는 대화 안에 그 앱의 화면을 띄웁니다. 예를 들어 프로젝트 상황을 물으면 Asana 작업 보드가 대화 안에 열립니다. 거기서 바로 할 일을 체크할 수 있습니다.[^interactive] 커넥터 목록에서 「대화형」 표시가 붙은 것이 이런 커넥터입니다.[^interactive]

연결해 둔 앱은 이름을 말하지 않아도 Claude가 맞는 때에 먼저 꺼내 쓰기도 합니다.[^suggest]
- 맞는 앱이 둘 이상이면 Claude가 하나를 몰래 고르지 않습니다. 내가 고릅니다.[^suggest]
- 앱 추천에는 광고나 돈을 받은 노출이 없습니다.[^suggest]
- 내 대신 예약하거나 사기 전에는 먼저 확인을 받습니다.[^suggest]

> **커스텀 커넥터**(custom connector)는 Anthropic이 검증하지 않은 서비스를 직접 주소로 잇는 기능입니다. 무료는 1개까지입니다. 믿을 수 있는 곳만 연결하세요.[^connectors] 대부분은 목록에 있는 커넥터로 충분합니다.

<Quiz id="ch207-connectors" />

## 도구 권한 — 무엇을 얼마나 쓰게 할까

커넥터 하나에는 여러 **도구**(tool, "메일 읽기", "메일 보내기"처럼 커넥터가 할 수 있는 동작 하나하나)가 들어 있습니다.

### 쓰지 않을 도구는 끄기

대화 안의 「검색 및 도구」 메뉴에서 특정 도구만 끌 수 있습니다.[^interactive]
예를 들어 메일을 읽고 정리만 시킬 거라면 "보내기" 도구는 꺼 두세요. 실수로 메일이 나갈 일이 없어집니다(이 가이드의 제안).

커스텀 커넥터가 허락을 물을 때 「항상 허용」이 보이면 조심하세요. 지켜보지 않고 맡겨도 될 만큼 믿는 도구에만 누르세요.[^custom]

### 커넥터가 많을 때 — 「도구 액세스」

커넥터는 하나하나가 대화의 공간을 차지합니다. 그래서 많이 켜 둘수록 실제로 일할 공간이 줄어듭니다.[^tools]
「+」 → 「커넥터」 → 「도구 액세스」에서 불러오는 방식을 고를 수 있습니다.[^tools]

| 선택지 | 이럴 때 |
|---|---|
| 「자동(기본값)」 | 대부분. Claude가 알아서 고른다 |
| 「항상 사용 가능」 | 늘 쓰는 커넥터가 10개 미만 |
| 「필요할 때」 | 커넥터가 10개 이상이거나 대화가 길어질 때 |

「항상 사용 가능」은 처음부터 공간을 더 씁니다. 「필요할 때」는 맞는 커넥터를 찾느라 한 단계 더 걸릴 수 있습니다.[^tools] 이 선택은 **그 대화에만** 적용됩니다.[^tools]

### 리서치를 쓸 때

[6장](06-search.md)의 리서치는 켜 둔 커넥터의 도구를 **매번 묻지 않고** 씁니다.[^research] 리서치를 시작하기 전에 쓸 커넥터만 켜 두세요. 무엇을 읽게 할지 미리 줄이면 엉뚱한 자료가 섞이지 않습니다(이 가이드의 제안).

<Quiz id="ch207-tool-access" />

## 스킬 — 일하는 방식을 넣어 두기

**스킬**(skill)은 특정 일을 매번 같은 방식으로 하게 해 주는 지침과 자료의 묶음입니다.[^skills]
예를 들어 "회사 보고서는 이 순서와 이 글꼴로"라는 규칙을 스킬로 넣어 두면, 보고서를 만들 때마다 그 방식대로 합니다.

스킬은 Free·Pro·Max·Team·Enterprise 모두 씁니다. 단, **파일 만들기 기능이 켜져 있어야** 합니다. 설정 → 「기능」에서 「코드 실행 및 파일 생성」을 켜세요.[^create-name][^skills][^skills-use]

### 기본 스킬과 내 스킬

- Anthropic이 넣어 둔 **기본 스킬**(Excel·Word·PowerPoint·PDF 만들기)은 부르지 않아도 알아서 쓰입니다.[^skills-use] [4장](04-files-artifacts.md)에서 파일을 만들 때 쓰이는 것이 이것입니다.
- 스킬을 켜고 끄는 곳은 옆 메뉴 「사용자 지정」 → 「Skills」 탭입니다.[^screen] 꺼 둔 스킬은 Claude가 쓰지 않습니다.[^skills-use]
- 간단한 스킬은 코딩 없이 글만으로 만들 수 있습니다.[^skills] 만든 스킬 폴더는 ZIP으로 묶어 올립니다. 도움말에는 「+ 스킬 만들기」 → 「스킬 업로드」로 나옵니다.[^skills-use] 이 장의 화면에서는 「사용자 지정」 오른쪽 위에 「+ 추가」 버튼이 있습니다.[^screen]
- 스킬 목록에서 설치한 스킬은 내용을 고칠 수 없습니다.[^directory]

스킬이 안 쓰이는 것 같으면 이름을 짚어서 부탁하세요.[^skills-use]

```
내 「회사 보고서 양식」 스킬을 써서 이 메모로 발표 자료를 만들어 줘.
```

내가 만든 스킬이 자꾸 안 쓰인다면 스킬의 **설명**(description)을 고쳐 보세요. Claude는 이 설명을 보고 언제 그 스킬을 쓸지 정합니다.[^skills-make] 설명에는 언제 쓰는 스킬인지 구체적으로 적으세요.[^skills-make] 내가 평소에 부탁할 때 쓰는 말을 넣어 두는 것도 좋습니다. "회의록 정리", "회의 내용 요약"처럼요(이 가이드의 제안). 설명은 200자까지 쓸 수 있습니다.[^skills-make]

### 내 스킬 만들기 — 말로 부탁하기

어떤 일을 할 때마다 같은 설명을 되풀이하고 있다면, 그 설명이 첫 스킬감입니다.[^academy-layers] 예를 들어 "회의록은 결정·할 일·담당자 순서로"라는 말을 매번 하고 있다면요.

스킬 파일을 혼자 쓰지 않아도 됩니다. 새 대화를 열고 Claude에게 같이 만들자고 해 보세요.[^academy-skills]

```
회의록을 정리하는 스킬을 만들고 싶어. 무엇이 필요한지 하나씩 물어봐 줘.
```

Claude가 몇 가지를 물어봅니다. 이 스킬이 무엇을 하는지, 잘된 결과는 어떤 모습인지, 언제 쓰는지 같은 것입니다. 할 수 있는 한 구체적으로 답하세요. 잘된 예나 양식 파일이 있으면 함께 올리세요. 실제 예를 보면 Claude가 내가 원하는 결과를 더 정확히 압니다.[^academy-skills]

만든 스킬을 어떻게 저장하는지는 화면에 따라 다를 수 있습니다. 저장할 방법이 안 보이면 Claude에게 스킬 폴더를 ZIP으로 묶어 달라고 하세요. 그 파일을 위의 「스킬 업로드」로 올리면 됩니다.[^skills-use] 고치고 싶은 곳이 생기면 Claude에게 말로 부탁하세요. 대화 옆에 열린 스킬 파일에서 고칠 글자를 칠하고 「Claude로 편집」(Edit with Claude)을 눌러도 됩니다.[^skills-make]

### 지침·프로젝트·커넥터와 무엇이 다른가

| 기능 | 언제 쓰이나 |
|---|---|
| 지침 | 모든 대화에 늘 |
| 프로젝트 | 그 프로젝트 안에서 늘 |
| 스킬 | 관련 있는 일을 할 때만 |
| 커넥터 | 다른 앱에 닿아야 할 때 |

지침은 모든 대화에 두루 적용되고, 스킬은 관련 있을 때만 불러옵니다.[^skills] 프로젝트는 늘 깔려 있는 배경 지식입니다.[^skills] 커넥터가 도구에 **닿게** 한다면, 스킬은 그 도구를 **잘 쓰는 법**을 가르칩니다.[^skills]
필요할 때만 불러오니 스킬을 여러 개 넣어 둬도 대화 공간을 덜 차지합니다.[^skills]

한 줄로 줄이면 프로젝트는 **알아야 할 자료**를 쥐고, 스킬은 **일하는 순서**를 쥡니다.[^academy-skills] 둘은 함께 쓸 수 있습니다. 고객 자료는 프로젝트에 두고, 상담 준비 순서는 스킬로 두는 식입니다.

### 조심할 점

- **믿을 수 있는 곳의 스킬만 설치하세요.** 스킬의 가장 큰 위험은 숨은 지시로 Claude를 조종하는 **프롬프트 인젝션**과, 자료를 밖으로 빼돌리는 **데이터 유출**입니다.[^skills-use] 프롬프트 인젝션은 [1단계 9장](../00-common/09-safety.md#_4-숨은-지시-—-프롬프트-인젝션)에서 배웠습니다.
- **화면 녹화로 스킬 만들기**도 있습니다. 내가 하는 일을 녹화하면 Claude가 그것으로 스킬을 만듭니다. Pro·Max·Team의 맥 앱 Cowork에서만 되고, 녹화는 10분 안팎까지입니다.[^skills-make] 녹화 중에는 비밀번호나 민감한 화면을 띄우지 마세요.

<Quiz id="ch207-skills" />

## 플러그인 — 업무별 꾸러미

**플러그인**(plugin)은 스킬·커넥터·**하위 에이전트**(sub-agent, 큰 일의 일부를 따로 맡아 하는 보조 Claude)를 한 꾸러미로 묶은 것입니다.[^plugins]
영업·재무·법무·마케팅·인사처럼 업무별 플러그인이 준비되어 있습니다.[^plugins] 하나씩 찾아 연결하지 않고, 내 일에 맞는 세트를 한 번에 넣는 셈입니다.

이 장의 세 기능을 비유하면 이렇습니다(이 가이드의 비유). 커넥터는 다른 앱에 닿는 **손**, 스킬은 일하는 **요령**, 플러그인은 둘을 묶은 **업무 세트**입니다.

플러그인은 **유료 요금제**(Pro·Max·Team·Enterprise)에서만 씁니다.[^plugins]

### 넣고 쓰는 법

1. 옆 메뉴 ④ 「사용자 지정」(Customize)을 엽니다.[^screen] 스킬·커넥터·플러그인을 이곳 한 목록에서 찾을 수 있습니다.[^directory]
2. ① 「플러그인」 탭 → ② 「탐색」에서 플러그인을 고르고 「추가」를 누릅니다.[^screen][^discover-name]
3. 대화나 Cowork에서 `/` 를 입력하거나 「+」를 누르면 플러그인에 든 스킬이 보입니다. 골라서 씁니다.[^plugins]

받은 플러그인은 일반적인 일 처리 방식을 담고 있습니다. 내 일의 양식과 순서는 다를 수 있습니다.[^academy-plugins] 넣은 플러그인을 보는 화면 오른쪽 위의 「커스터마이징」(Customize)을 누르면, 그 플러그인을 고치는 Cowork 작업이 열립니다. 「시작하기」(Let's go)를 누르고 Claude와 함께 고치면 됩니다.[^plugins] 메뉴 이름은 화면에 따라 다를 수 있습니다. 내가 실제로 쓰는 예를 보여 주며 부탁하세요.

```
우리 팀이 지난달에 보낸 견적서 세 개를 올렸어. 이 플러그인의 견적서 스킬이 이 양식과 말투를 따르게 고쳐 줘.
```

내 일에 맞게 고칠수록 플러그인이 더 쓸모 있어집니다.[^academy-plugins]

![「사용자 지정」 화면. ① 「Skills」「커넥터」「플러그인」 탭, ② 「내 항목」「탐색」, ③ 오른쪽 위 「+ 추가」, ④ 옆 메뉴의 「사용자 지정」에 빨간 번호가 붙어 있다. 가운데에는 Anthropic이 만든 항목과 「추가」「체험」 버튼이 보인다](assets/shot-10-customize-marked.png)

무료 요금제 화면입니다. **빨간 번호는 아래 목록의 번호와 같은 곳입니다.**

- ① 「Skills」·「커넥터」·「플러그인」 — 무엇을 볼지 고르는 탭
- ② 「내 항목」·「탐색」 — 이미 넣은 것과 새로 둘러볼 것
- ③ 「+ 추가」 — 새 항목을 더하는 버튼
- ④ 옆 메뉴 「사용자 지정」 — 이 화면을 여는 곳

「탐색」에는 Anthropic이 만든 스킬·플러그인이 있고, 「체험」 버튼도 보입니다.[^screen]
무료 요금제 화면에도 「플러그인」 탭과 「+」 메뉴의 「플러그인 추가」가 보입니다.[^screen] 다만 도움말은 플러그인을 유료 요금제 기능으로 안내합니다.[^plugins]

- 추가한 플러그인은 계정에 저장됩니다. 웹 채팅, 데스크톱 앱의 Chat, Cowork에서 쓸 수 있습니다.[^plugins]
- 일부 기능(하위 에이전트 등)은 채팅에서는 돌지 않고 회색으로 보입니다. [8장](08-cowork.md)의 Cowork에서 돕니다.[^plugins]
- **믿을 수 있는 곳의 플러그인만 설치하세요.** 플러그인에 따라서는 내 컴퓨터에서 다른 프로그램과 같은 권한으로 도는 부분이 들어 있기 때문입니다.[^plugins]

<Quiz id="ch207-plugins" />

## 직접 해 보기

1. 「새 프로젝트」로 「주간 보고」 프로젝트를 만들고, 위의 틀을 프로젝트 지침에 넣는다. 지침 칸이 없으면 틀을 글로 적어 프로젝트 지식에 올린다.
2. 프로젝트 안에서 새 대화를 열고, 이번 주에 한 일을 아무렇게나 다섯 줄 적어 보낸다. 표가 지침대로 나오는지 본다.
3. 프로젝트 안에서 새 대화를 하나 더 열고, 첫 메시지를 보내기 전에 「+」 → 「메모리」(Memory)를 끈다([5장](05-memory.md#한-채팅만-메모리-끄기)). 그다음 "아까 대화에서 뭐라고 했지?"라고 물어본다. 메모리를 끈 대화는 앞 대화의 내용을 모른다는 것을 확인한다.
4. 「사용자 지정」 → 「커넥터」 탭 → 「탐색」을 열어 어떤 서비스가 있는지 둘러본다. 하나를 연결했다면, 그 커넥터의 도구 중 쓰지 않을 것을 「검색 및 도구」에서 꺼 본다.
5. 「사용자 지정」 → 「Skills」 탭 → 「내 항목」에서 기본 스킬이 켜져 있는지 본다.

## 정리

- 프로젝트는 대화·지식·지침을 묶는 작업 공간이다. 무료는 5개까지 만든다(도움말 기준).
- 프로젝트 이름과 설명은 Claude가 못 읽는다. 같은 프로젝트라도 대화 내용이 통째로 넘어가지는 않으니, 함께 알아야 할 것은 지식이나 지침에 넣는다.
- 유료 요금제에서는 자료가 많아지면 RAG로 저절로 바뀐다. 파일 이름을 알아보기 쉽게 짓는다.
- 커넥터는 다른 앱과의 연결이다. 믿는 서비스만 연결하고, 원래 못 보던 것은 연결해도 못 본다.
- 쓰지 않을 도구는 「검색 및 도구」에서 끄고, 커넥터가 많으면 「도구 액세스」를 「필요할 때」로 바꾼다.
- 스킬은 일하는 방식을 담은 묶음이다. 관련 있을 때만 불러오고, 믿을 수 있는 곳의 것만 설치한다.
- 플러그인은 스킬·커넥터·하위 에이전트를 묶은 업무 세트이고, 유료 요금제 전용이다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Project | 프로젝트 | 대화 기록과 지식을 따로 가진 작업 공간 |
| Project knowledge | 프로젝트 날리지 (프로젝트 지식) | 프로젝트의 모든 대화가 함께 쓰는 참고 자료 |
| RAG | 래그 | 자료 전체가 아니라 필요한 부분만 찾아 읽는 방식 |
| Connector | 커넥터 | Claude를 다른 앱·서비스와 잇는 연결 |
| Tool | 툴 (도구) | 커넥터가 할 수 있는 동작 하나하나 |
| Tool access | 툴 액세스 (도구 액세스) | 커넥터를 대화에 언제 불러올지 정하는 설정 |
| Skill | 스킬 | 특정 일을 같은 방식으로 하게 해 주는 지침 묶음 |
| Plugin | 플러그인 | 스킬·커넥터·하위 에이전트를 묶은 업무별 꾸러미 |
| Sub-agent | 서브에이전트 (하위 에이전트) | 큰 일의 일부를 따로 맡는 보조 Claude |
| Prompt injection | 프롬프트 인젝션 | 자료 속에 숨긴 지시로 AI를 속이는 공격 |

<ChapterDone :chapter="207" />

다음 장: [8장. Cowork — 일을 통째로 맡기기](08-cowork.md)

[^screen]: Claude 웹 화면(무료 요금제, 한국어)에서 직접 확인. 옆 메뉴 「프로젝트」·「사용자 지정」 / 「프로젝트」 화면의 「새 프로젝트」와 「예제 프로젝트」 표시 / 「+」 메뉴의 「Skills」·「커넥터 추가」·「플러그인 추가」 / 「사용자 지정」 화면의 「Skills」·「커넥터」·「플러그인」 탭, 「내 항목」·「탐색」, 「+ 추가」, 「체험」 (확인일 2026-10-26)
[^projects]: Anthropic 도움말, 「What are projects?」. "Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." / "For users on Team and Enterprise plans, projects can be shared with other members of your organization" / "Nothing is lost or deleted in the move." https://support.claude.com/en/articles/9517075 (확인일 2026-10-26)
[^projects-how]: Anthropic 도움말, 「How can I create and manage projects?」. "Free users can create a maximum of five projects." / "Click "+ New Project" in the upper right corner." / "Give your project a name and description (note that Claude will not have access to these details)." / "Anything you upload to this space will be used across all of your chats within that project." / "Claude will use these instructions for all the chats within the project." / "Note: Context is not shared across chats within a project unless the information is added into the project knowledge base." / "While working in a project, Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." / "There is no way to delete archived projects at this time (you must unarchive it first)." https://support.claude.com/en/articles/9519177 (확인일 2026-10-26)
[^personal]: Anthropic 도움말, 「Understanding Claude's personalization features」. "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728 (확인일 2026-10-26)
[^rag]: Anthropic 도움말, 「Retrieval augmented generation (RAG) for projects」. "RAG for projects is available on paid plans (Pro, Max, Team, and Enterprise)." / "When your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity by up to 10x while maintaining quality responses." / "When asking questions, you can reference specific documents by name to help Claude focus its search." https://support.claude.com/en/articles/11473015 (확인일 2026-10-26)
[^connectors]: Anthropic 도움말, 「Use connectors to extend Claude's capabilities」. "Connectors let Claude access your apps and services, retrieve your data, and take actions within connected services." / "Web connectors are available for all users on Claude, Cowork, Claude Desktop, and Claude Mobile (iOS and Android)." / "If someone can't access a specific file, channel, or record in the source system, the connector can't reach it from Claude either." / "Only connect services you trust and need for your workflows." / "Installing connectors on mobile is currently in beta—Claude Desktop and web remain the primary path for custom connectors." / "Free users are limited to one custom connector." https://support.claude.com/en/articles/11176164 (확인일 2026-10-26)
[^suggest]: Anthropic 도움말, 「How Claude suggests connected apps」. "Your data from that app isn’t used to train Claude’s models, and the connected app can’t see your other conversations." / "Claude doesn’t silently default to one over the other; you choose which app to use, and Claude proceeds from there." / "There are no sponsored rankings, no paid placements, and no advertising." / "Before Claude books, buys, or reserves something on your behalf, it checks with you first." https://support.claude.com/en/articles/14730684 (확인일 2026-10-26)
[^google]: Anthropic 도움말, 「Use Google Workspace connectors」. "By default, Claude asks for your approval before each of these actions." / "Asking for a generic "doc" or "deck" without naming Google creates a local file instead." / "Attachment content is not directly accessible through Gmail (metadata only)." / "This data is retained with its associated chat, so you can delete any retrieved data by deleting the chat." https://support.claude.com/en/articles/10166901 (확인일 2026-10-26)
[^m365]: Anthropic 도움말, 「Connect to Microsoft 365」. "The Microsoft 365 connector is available on all Claude plans: Free, Pro, Max, Team, and Enterprise." / "Personal Microsoft accounts (such as @outlook.com, @hotmail.com, or @live.com) can't be used." / "In every tenant, a Microsoft Entra Global Administrator also needs to grant a one-time consent." https://support.claude.com/en/articles/15183774 (확인일 2026-10-26)
[^interactive]: Anthropic 도움말, 「Use interactive connectors in Claude」. "You can check off tasks, update statuses, and keep chatting with Claude—all in one place." / "Individual users: You can disable specific connector tools via the "Search and tools" menu in your conversation." https://support.claude.com/en/articles/13454812 (확인일 2026-10-26)
[^custom]: Anthropic 도움말, 「Get started with custom connectors using remote MCP」. "only click "Allow always" when using a server and tool that you trust to run unsupervised." https://support.claude.com/en/articles/11175166 (확인일 2026-10-26)
[^tools]: Anthropic 도움말, 「Manage Claude’s tool access」. "Each connector takes up space in a conversation." / "Best for: Fewer than 10 connectors you use constantly." / "Trade-off: Claude may take an extra step to find the right connector before using it." / "Your selection only applies to that conversation. You can change it at any time." https://support.claude.com/en/articles/13730515 (확인일 2026-10-26)
[^research]: Anthropic 도움말, 「Use research on Claude」. "During research, Claude can use tools from your connectors automatically, without asking for approval each time." https://support.claude.com/en/articles/11088861 (확인일 2026-10-26)
[^skills]: Anthropic 도움말, 「What are skills?」. "Skills are available for users on Free, Pro, Max, Team, and Enterprise plans. This feature requires code execution to be enabled." / "Anyone can create skills by writing instructions in Markdown—no coding required for simple skills" / "Custom instructions apply broadly to all your conversations. Skills are task-specific and only load when relevant" / "Projects provide static background knowledge that's always loaded when you start chats within them." / "MCP connections give Claude access to tools, while skills teach Claude how to use those tools effectively." / "Claude determines which skills are relevant and loads the information it needs to complete that task, helping to prevent context window overload." https://support.claude.com/en/articles/12512176 (확인일 2026-10-26)
[^skills-use]: Anthropic 도움말, 「Use skills in Claude」. "Navigate to Settings > Capabilities and ensure that Code execution and file creation (called Create and edit files in the updated Settings layout) is enabled." / "You don't need to explicitly invoke them—Claude determines when each skill is needed based on your request." / "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." / "Upload a ZIP file containing your skill folder." / "Try being more explicit in your request (e.g., "Use my brand guidelines skill to create a presentation")." / "The most significant risks are prompt injection, which allows Claude to be manipulated to execute unintended actions, and data exfiltration" https://support.claude.com/en/articles/12512180 (확인일 2026-10-26)
[^skills-make]: Anthropic 도움말, 「How to create custom skills」. "Recording a skill is available on Pro, Max, and Team plans, in Cowork in Claude for Mac." / "A recording can run for about 10 minutes." / "This is critical—Claude uses this to determine when to invoke your skill (200 characters maximum)." / "Write clear descriptions: Claude uses descriptions to decide when to invoke your skill. Be specific about when it applies." / "Iterate on the description if Claude isn't using it when expected." / "When you're iterating on a skill with Claude in chat, you can edit the skill files directly where they open beside the conversation. Highlight the text you want changed, click "Edit with Claude," and type your request." https://support.claude.com/en/articles/12512198 (확인일 2026-10-26)
[^directory]: Anthropic 도움말, 「Browse skills, connectors, and plugins in one directory」. "Our unified directory brings skills, connectors, and plugins together in one place" / "Skills you install from the directory are view-only." https://support.claude.com/en/articles/14328846 (확인일 2026-10-26)
[^plugins]: Anthropic 도움말, 「Use plugins in Claude」. "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" / "Claude includes a growing library of plugins for common knowledge work—including sales, finance, legal, marketing, HR, engineering, design, operations, data analysis, and more." / "Select the plugin you want, then click "Add."" / "Type "/" or click the "+" button to see the available skills from your plugins, in chat and in Cowork." / "You can add and use plugins in chat on the web, the Chat tab in Claude Desktop, and Claude Cowork." / "Hooks and sub-agents run in Cowork and Claude Code, not in chat, so they appear grayed out in chat." / "Only install plugins from sources you trust." / "This opens a new Cowork task with a prompt asking Claude to customize the plugin you chose." / "Click “Let's go” to start working with Claude to adjust the plugin's Skills and connectors to match how you work." 한국어판 도움말은 「커스터마이징」 → 「시작하기」로 적는다. https://support.claude.com/en/articles/13837440 (확인일 2026-10-26)
[^academy-projects]: Claude Academy 「Claude 101」 강의 「Introduction to projects」. "Simply upload it during the conversation and it stays separate from your project knowledge. It's a perfect way to share context or examples without cluttering the knowledge base." / "Begin with a specific use case rather than trying to create one project for everything. You can always add more content as you go." / "Outdated documents can lead to outdated responses. Review and update your project knowledge periodically." https://academy.claude.com/courses/claude-101/introduction-to-projects (확인일 2026-10-26)
[^academy-connect]: Claude Academy 「Claude 101」 강의 「Connecting your tools」. "Return to Claude and try a simple request, like "Can you access my [tool name]?"" https://academy.claude.com/courses/claude-101/connecting-your-tools (확인일 2026-10-26)
[^academy-layers]: Claude Academy 「Introduction to Claude Cowork」 강의 「Get better results faster」. "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (확인일 2026-10-26)
[^academy-skills]: Claude Academy 「Claude 101」 강의 「Working with skills」. "The easiest way to create a custom Skill is through conversation with Claude itself." / "Claude will interview you about your workflow, asking things like: What should this skill do? What makes good output for this type of work? Can you give examples of when you'd use this skill?" / "Templates, style guides, brand assets, or examples of work you're proud of all help Claude understand exactly what you're looking for." / "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (확인일 2026-10-26)
[^academy-plugins]: Claude Academy 「Introduction to Claude Cowork」 강의 「Plugins: Encode your team's expertise」. "A plugin from the marketplace is a strong default, not a final answer." / "The more you shape it to your team's actual work, the more leverage it produces." https://academy.claude.com/courses/introduction-to-claude-cowork/plugins-cowork-as-a-specialist (확인일 2026-10-26)
[^projects-limit]: 요금 페이지 설명과는 다를 수 있으니 내 화면에서 확인하세요.
[^new-project-name]: 도움말에는 「+ 새 프로젝트」로 나옵니다.
[^project-instr-free]: 무료 요금제에서 프로젝트 지침을 쓸 수 있는지는 문서마다 다르게 적혀 있습니다.
[^connector-name]: 도움말에는 「커넥터」 → 「커넥터 관리」로 나오고, `/` 를 입력해도 된다고 합니다.
[^create-name]: 새 설정 화면에서는 이름이 「파일 생성 및 편집」입니다.
[^discover-name]: 도움말에는 「발견」 탭으로 나옵니다.
