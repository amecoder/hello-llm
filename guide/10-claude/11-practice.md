# 11장. 실습 과제 — Claude 기능을 직접 써 보기

> **한 줄 요약**: 1~10장에서 본 Claude의 화면과 기능을 **내 손으로 한 번씩 눌러 보는** 과제 11개를 모았습니다.
> 과제마다 「잘 됐는지 확인」 점검표가 있어서, 누가 채점해 주지 않아도 스스로 확인할 수 있습니다.

화면은 2026년 10월 웹 기준입니다. 새 Claude 화면이 차례로 배포되는 중이라, 메뉴 이름과 위치는 화면에 따라 다를 수 있습니다.

## 실습 과제를 하는 법

1. **Claude를 열고 로그인합니다.** 과제 대부분은 대화 기록·설정을 쓰기 때문에 로그인이 필요합니다.
2. **과제의 「해 볼 것」을 따라 합니다.** 회색 상자의 프롬프트를 복사해 보내면 됩니다.
3. **「잘 됐는지 확인」을 하나씩 체크합니다.** 체크하지 못한 항목이 있으면 「다시 볼 곳」의 장을 읽고 그 부분만 다시 해 보세요.

과제는 순서대로 하지 않아도 됩니다. 단, **과제 11은 맨 마지막에** 하세요. 연습한 흔적을 정리하는 과제입니다.
과제 1~8은 대부분 무료 요금제로도 할 수 있습니다(과제 7의 프로젝트 지침은 요금제에 따라 다를 수 있습니다). 과제 9·10은 **유료 요금제** 전용이라, 무료라면 읽기만 하고 넘어가도 됩니다.

어떻게 물어야 하는지(프롬프트 쓰는 법) 연습은 [1단계 10장 실습 과제](../00-common/10-practice.md)에 있습니다. 여기서는 **버튼과 메뉴**에 집중하세요.

처음부터 다 해낼 필요는 없습니다. 하루에 과제 두세 개씩이면 충분합니다.

### 실습할 때 지킬 세 가지

- **되도록 시크릿 채팅에서 합니다.** 오른쪽 위 유령 아이콘(「시크릿 모드 사용」)으로 여는 「시크릿 채팅」(Incognito)은[^screen] 대화 기록과 메모리에 남지 않습니다. 학습에도 쓰이지 않습니다. 단, 기본 30일 동안 보관됩니다.[^incognito]
  기록·파일·설정을 다루는 과제(3·4·5·7·8)는 일반 채팅에서 하세요. 시크릿 채팅은 기록에 남지 않고, 새 화면에서는 그 안에서 파일도 만들 수 없습니다.[^incognito] 이유는 [3장](03-chats.md#기록-남기지-않기-—-시크릿-채팅)에 있습니다.
- **자료는 가짜로 만듭니다.** 실제 이름·연락처·주소·회사 자료 대신 **내가 지어낸 가짜 자료**를 쓰세요. 일반 채팅에서 한 연습은 과제 11에서 정리합니다. 넣지 말아야 할 정보는 [1단계 9장](../00-common/09-safety.md#넣지-말아야-할-것)에 정리돼 있습니다.
- **좋아요/싫어요는 누르지 않습니다.** 피드백을 보내면 그 대화 전체가 최대 5년 동안 저장됩니다.[^feedback] 연습 대화는 지울 생각으로 하는 것이니, 남는 길을 만들지 마세요.

![시크릿 모드 화면. ① 위쪽 검은 띠 왼쪽 「시크릿」, ② 점선 입력창, ③ 안내 문구, ④ 오른쪽 위 ✕(나가기)에 빨간 번호가 붙어 있다](assets/shot-06-incognito-marked.png)

무료 요금제 화면입니다. **빨간 번호는 아래 목록의 번호와 같은 곳입니다.**

- ① 「시크릿」: 지금 시크릿 채팅이라는 표시입니다.
- ② 점선 입력창: 제목 「시크릿 모드입니다」 아래에 있습니다.
- ③ 안내 문구: "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다."[^screen]
- ④ ✕: 시크릿 채팅을 끝냅니다.

<Quiz id="ch211-how" />

## 과제

### 과제 1. 시크릿 채팅으로 연습 공간 만들기

**이럴 때**: 기록에 남기고 싶지 않은 질문을 해 보고 싶을 때.

**해 볼 것**: 프로젝트 밖에서 새 채팅을 엽니다. 오른쪽 위 유령 아이콘을 누르고 아래를 보냅니다. 답을 받으면 그 대화를 닫습니다.

```
나는 Claude를 처음 써 봐. 오늘 연습할 만한 질문 세 가지를 추천해 줘.
```

**잘 됐는지 확인**

- ☐ 화면에 검은 테두리가 생기고, 왼쪽 위에 「시크릿」 표시가 떴다[^screen]
- ☐ 남기고 싶은 답은 닫기 전에 복사해 뒀다. 시크릿 채팅은 닫으면 다시 열 수 없습니다[^incognito] (남길 답이 없었다면 체크)
- ☐ 닫은 뒤 옆 메뉴 대화 목록에 이 대화가 없다

**다시 볼 곳**: [3장 대화 관리](03-chats.md)

### 과제 2. 모델 메뉴에서 노력 바꿔 보기

**이럴 때**: 빠른 답과 공들인 답이 얼마나 다른지 알고 싶을 때.

**해 볼 것**: 새 채팅(되도록 시크릿 채팅)을 엽니다. 입력창 아래 오른쪽의 모델 이름(예: 「Sonnet 5.5 중간」)을 누르고 「노력」을[^screen] 「낮음」으로 두고 아래를 보냅니다. 이어서 「노력」을 「높음」으로 바꾸고 같은 질문을 한 번 더 보냅니다.

```
월급 300만 원인 직장인이 3년 안에 2,000만 원을 모으려면 매달 얼마씩 모아야 하는지,
적금 이자를 생각한 경우와 생각하지 않은 경우로 나눠 계산 과정을 보여 줘.
```

**잘 됐는지 확인**

- ☐ 「노력」 메뉴에서 「추천」 표시가 붙은 단계가 무엇인지 봤다(이 가이드에서 본 화면은 「중간」)[^screen]
- ☐ 두 답을 비교해 봤다. 어느 쪽이 더 꼼꼼한가? 어느 쪽이 더 빨리 왔나?
- ☐ 실습이 끝나면 노력을 「추천」 단계로 되돌렸다. 일상적인 일은 기본값으로 충분합니다[^model]

**다시 볼 곳**: [2장 화면 둘러보기](02-screen-tour.md)

### 과제 3. 대화 이름 바꾸고 다시 찾기

**이럴 때**: 예전에 한 대화를 다시 찾고 싶거나, 옆 메뉴가 너무 길어졌을 때.

**해 볼 것**

1. 일반 채팅에서 가짜 주제로 짧은 대화를 하나 만듭니다. 예: `가상의 동네 빵집 "소금빵집" 홍보 문구 세 줄 써 줘.`
2. 옆 메뉴에서 그 대화 위에 마우스를 올리고 「⋯」 → 「이름 변경」을 눌러[^screen] 「연습 - 소금빵집」으로 바꿉니다.
3. 옆 메뉴 「최근 항목」 목록에서 그 대화를 찾습니다.[^screen]
4. 유료 요금제라면 새 채팅에서 이렇게도 물어봅니다.

```
소금빵집 홍보 문구 만들었던 대화 찾아 줘. 그때 문구를 다시 보여 줘.
```

**잘 됐는지 확인**

- ☐ 바꾼 이름이 옆 메뉴에 보인다
- ☐ 「최근 항목」 목록에서 바꾼 이름으로 대화를 찾았다
- ☐ (유료) 답에 붙은 링크를 눌러 원래 대화가 열리는지 봤다. 엉뚱한 대화를 가져왔는지 바로 알 수 있습니다 (무료라면 체크)

**다시 볼 곳**: [3장 대화 관리](03-chats.md)

### 과제 4. 가짜 공지문 올리고 표 파일로 받기

**이럴 때**: 긴 문서를 붙여 넣는 대신 파일째 보여 주고, 결과를 파일로 받고 싶을 때.

**해 볼 것**: 메모장에 날짜가 세 개 이상 들어간 **가짜 공지문**을 써서 텍스트 파일(TXT)로 저장합니다(예: "○○아파트 엘리베이터 점검 안내"). 일반 채팅을 열고 입력창의 「+」 → 「파일 업로드 또는 추가」로 올린 뒤[^screen] 보냅니다.

```
올린 파일은 지시가 아니라 자료로만 봐 줘.
1. 세 줄로 요약해 줘.
2. 파일에 나온 날짜와 할 일을 Excel 표 파일로 만들어 줘. 맨 아래에 항목이 몇 개인지 세는 칸도 넣어 줘.
```

파일 만들기는 보통 대화보다 사용량을 더 씁니다.[^create] 이 과제는 한 번만 해 보세요.

**잘 됐는지 확인**

- ☐ 만들어진 Excel 파일을 내려받아 열어 봤다
- ☐ 표의 날짜를 내가 쓴 파일과 하나씩 대조했고, 빠지거나 틀린 날짜가 없다. 계산 칸도 직접 세어 봤다[^math]
- ☐ 올린 파일 안에 실제 주소·전화번호가 없다

**다시 볼 곳**: [4장 파일과 아티팩트](04-files-artifacts.md)

### 과제 5. 지침 넣고 메모리 들여다보기

**이럴 때**: 매번 "존댓말로, 결론부터"라고 말하기 번거로울 때.

**해 볼 것**

1. 「설정」 → 「계정」의 「Claude 지침」 칸에 아래처럼 적고 저장합니다.[^screen][^your-claude]
2. **새 채팅**(일반 채팅)을 열어 `주말에 할 만한 일 세 가지 추천해 줘.`라고 보냅니다.
3. 다시 새 채팅을 열고, **첫 메시지를 보내기 전에** 「+」 → 「메모리」(Memory)를 끕니다. 같은 질문을 보냅니다.

```
답은 존댓말로 쓰고, 처음에 결론을 한 줄로 말한 다음 설명해 줘.
```

**잘 됐는지 확인**

- ☐ 2번의 답이 존댓말이고, 맨 앞에 결론 한 줄이 있다
- ☐ 「설정」 → 「메모리」의 저장된 메모리 목록을 열어[^screen][^your-claude] Claude가 나에 대해 기억하는 내용을 읽어 봤다. 틀린 내용은 없나? 남기기 싫은 내용은 없나?
- ☐ 3번에서 메모리를 끈 대화도 대화 목록에는 남아 있다는 것을 봤다. 기록까지 남기기 싫을 때 쓰는 것은 시크릿 채팅입니다[^memory]
- ☐ 실습이 끝나면 지침을 원래대로 고치거나 지웠다 (계속 쓰고 싶다면 체크)

**다시 볼 곳**: [5장 기억과 맞춤 설정](05-memory.md)

### 과제 6. 웹 검색하고 출처 열어 보기

**이럴 때**: 최근 소식이나 바뀌기 쉬운 정보를 물을 때.

**해 볼 것**: 새 채팅(되도록 시크릿 채팅)에서 보냅니다. 새 화면에는 웹 검색 스위치가 없으니 프롬프트에 "웹에서 검색해 줘"라고 쓰면 됩니다.[^search][^old-search]

```
웹에서 검색해 줘. 오늘 나온 국내 뉴스 중 하나를 골라 세 줄로 요약해 주고,
참고한 기사도 함께 보여 줘.
```

**잘 됐는지 확인**

- ☐ 답에 붙은 인용(출처 표시)을 찾았다
- ☐ 출처 링크 하나 이상을 직접 눌러, 요약에 나온 날짜·숫자·이름이 그 기사에 실제로 있는지 확인했다. 웹 검색 답은 Claude가 단 출처를 직접 열어 보는 것까지가 한 세트입니다[^wrong]
- ☐ 그 기사가 언제 쓴 글인지, 누가 쓴 글인지 봤다. 정말 오늘 나온 기사인가?

**다시 볼 곳**: [6장 검색과 리서치](06-search.md) · [1단계 9장](../00-common/09-safety.md)

### 과제 7. 프로젝트로 규칙 묶기

**이럴 때**: 같은 주제로 대화를 여러 번 나눠 할 때(예: 이사 준비, 영어 공부).

**해 볼 것**

1. 옆 메뉴 「프로젝트」에서 「새 프로젝트」를 누르고[^screen] 이름을 「연습 프로젝트」로 짓습니다. 무료 요금제는 프로젝트를 5개까지 만들 수 있습니다.[^projects]
2. 「프로젝트 지침 설정」에 아래를 적고 「지침 저장」을 누릅니다. 지침 칸이 보이지 않으면 2번은 건너뛰세요.[^personal][^project-instr-free]
3. 프로젝트 안에서 새 대화를 열고 아무 질문이나 합니다.
4. 프로젝트 안에서 새 대화를 하나 더 엽니다. **첫 메시지를 보내기 전에** 「+」 → 「메모리」(Memory)를 끄고, `아까 대화에서 내가 뭐라고 물었지?`라고 물어봅니다.

```
이 프로젝트에서는 답을 반말로, 다섯 줄 이내로 써 줘.
```

**잘 됐는지 확인**

- ☐ 프로젝트 안의 대화에서는 반말·다섯 줄 이내로 답했다 (지침 칸이 없었다면 체크)
- ☐ 프로젝트 밖의 새 채팅에서는 이 규칙을 따르지 않는 것을 봤다. 프로젝트 지침은 그 프로젝트 안의 대화에만 적용됩니다[^personal] (지침 칸이 없었다면 체크)
- ☐ 메모리를 끈 새 대화에서는, Claude가 지난 대화를 찾아보는 표시 없이는 앞 대화 내용을 모른다는 것을 확인했다. 함께 알아야 할 내용은 프로젝트 지식에 넣습니다[^projects][^memory]

**다시 볼 곳**: [7장 프로젝트·커넥터·스킬](07-projects-tools.md)

### 과제 8. 휴대폰에서 말로 물어보기

**이럴 때**: 손으로 치기 귀찮거나, 말하면서 생각을 정리하고 싶을 때.

**해 볼 것**

1. 휴대폰에 「Claude by Anthropic」 앱을 설치하고, 컴퓨터와 **같은 이메일**로 로그인합니다.
2. 새 채팅에서 입력창 오른쪽 **마이크**(받아쓰기)를 누르고 아래 질문을 말한 뒤 화살표로 보냅니다. 보낸 뒤 채팅 창에 적힌 글을 읽어 봅니다.
3. 새 채팅에서 마이크 옆 **음파 기호**(음성 모드)를 누르고 같은 질문을 말로 합니다. Claude가 말하는 도중에 "잠깐, 더 짧게"라고 말해 봅니다.

주변에 사람이 없는 곳에서 하거나 이어폰을 끼고 하세요.

```
냉장고에 계란, 두부, 대파가 있어. 15분 안에 만들 수 있는 반찬 두 가지 알려 줘.
```

**잘 됐는지 확인**

- ☐ 휴대폰 앱에서 컴퓨터로 나눈 대화가 보인다
- ☐ 채팅 창에 적힌 내 질문이 내가 말한 것과 같은지 확인했다 (다르면 글로 고쳐 다시 물었다)
- ☐ 음성 모드에서 말을 시작하자 Claude가 멈추고 짧게 다시 말했다
- ☐ 음성 대화가 글 기록으로 대화 목록에 남은 것을 봤다[^voice]
- ☐ 이름·주소 같은 개인정보는 소리 내어 말하지 않았다

**다시 볼 곳**: [10장 음성과 휴대폰](10-voice-mobile.md) · [1장 시작하기](01-getting-started.md)

### 과제 9. 리서치로 보고서 받기 (유료 요금제)

**이럴 때**: 여러 자료를 모아 비교해야 하는 큰 질문이 있을 때.

**해 볼 것**: 입력창에 `/deep-research` 를 치거나 「+」 → 「Research」를 고릅니다.[^research][^old-research] 아래를 내 관심사에 맞게 바꿔 보냅니다.

```
50대가 집 근처에서 시작하기 좋은 운동 세 가지를 비교하는 보고서를 써 줘.
- 비교할 것: 드는 비용, 필요한 장비, 무릎에 주는 부담
- 형식: 맨 앞에 한 줄 결론, 그다음 비교 표, 마지막에 출처 목록
- 날짜를 모르는 자료는 따로 표시해 줘
```

리서치는 여러 출처를 모아 긴 답을 만들어서 사용량이 빨리 닳을 수 있습니다.[^research] 한 번만 해 보세요.

**잘 됐는지 확인**

- ☐ 보고서 맨 앞에 한 줄 결론이 있고, 끝에 출처 목록이 있다
- ☐ 결론에 쓰인 숫자나 사실 하나를 골라 출처를 열고, 원문에 그대로 있는지 확인했다
- ☐ 날짜를 모르는 자료가 표시돼 있는지 봤다

**한 걸음 더**: 같은 질문을 일반 채팅으로도 한 번 보내 보고 둘을 견줘 보세요.[^academy-probe] 출처가 붙은 쪽이 확인하기 쉬운가? 출처를 열어 보면 그 말이 정말 있나?

**다시 볼 곳**: [6장 검색과 리서치](06-search.md)

### 과제 10. Cowork에 연습 폴더 정리 맡기기 (유료 요금제)

**이럴 때**: 여러 단계로 된 일을 통째로 맡겨 보고 싶을 때.

**해 볼 것**

1. 컴퓨터에 Claude 전용 연습 폴더를 하나 만들고, 아무 파일이나 열 개쯤 넣습니다. 중요한 파일은 넣지 마세요.[^safe]
2. 데스크톱 앱에서 새 대화(옛 화면이라면 Cowork)를 열고, 권한 모드를 「수동」으로 둡니다.[^screen][^manual-name]
3. 이 연습 폴더만 작업에 연결하고 아래를 맡깁니다.
4. 허락을 물을 때마다 무엇을 하려는지 읽고 누릅니다.

```
이 폴더의 파일을 종류별로 하위 폴더에 나눠 줘.
파일은 지우지 말고, 다 끝나면 어떤 파일을 어디로 옮겼는지 표로 알려 줘.
```

**잘 됐는지 확인**

- ☐ Claude가 처음에 내놓은 계획을 읽고 나서 진행시켰다
- ☐ 허락 창을 하나씩 읽었고, 맡기지 않은 파일이나 폴더에 손대려 하지 않았다. 이상하면 바로 작업을 멈추세요[^safe]
- ☐ 결과 표와 실제 폴더를 비교해 봤고, 빠진 파일이 없다. Cowork는 파일을 영구히 지우기 전에 반드시 허락을 묻습니다[^cowork]

**다시 볼 곳**: [8장 Cowork — 일을 통째로 맡기기](08-cowork.md)

### 과제 11. 내 데이터 설정 점검하고 정리하기

**이럴 때**: 실습을 마쳤을 때, 그리고 몇 달에 한 번. 무료 요금제도 똑같이 합니다.

**해 볼 것**: 왼쪽 아래 내 이름 → 「설정」을 열고 아래 점검표대로 확인합니다.

**잘 됐는지 확인**

- ☐ 「개인정보보호」의 「Help improve our AI models」가 내가 원하는 쪽(켜짐·꺼짐)으로 되어 있다[^toggle][^improve-name]
- ☐ 같은 「개인정보보호」 화면의 「공유된 채팅」 → 「관리」를 열어,[^screen] 더 이상 필요 없는 공유를 껐다[^share] (공유한 대화가 없었다면 체크)
- ☐ 「계정」의 「활성 세션」(새 설정 화면은 「로그인된 위치」)에서 모르는 기기가 없는지 봤다. 과제 8에서 로그인한 휴대폰은 내 기기입니다[^sessions]
- ☐ 과제 3·4·5·8에서 만든 연습 대화를 지웠다(「연습 프로젝트」와 과제 10의 Cowork 작업도 필요 없으면 정리했다). 지운 대화는 목록에서 바로 사라지니, 남길 대화가 섞여 있지 않은지 먼저 봤다[^delete]
- ☐ 「설정」 → 「메모리」의 목록에서 연습 때 생긴 기억을 따로 지웠다.[^your-claude] 대화를 지워도 그 대화에서 생긴 메모리는 남습니다[^memory] (지울 기억이 없었다면 체크)
- ☐ 전체를 정리하기 전이라면 「개인정보보호」의 「데이터 내보내기」로 백업을 받을지 생각해 봤다. 내보내기는 웹이나 컴퓨터 앱에서만 되고, 받은 링크는 24시간 뒤 만료됩니다[^export]

**다시 볼 곳**: [9장 개인정보와 안전](09-privacy.md) · [3장 대화 관리](03-chats.md) · [5장 기억과 맞춤 설정](05-memory.md)

<Quiz id="ch211-check" />

## 정리

- 기능은 읽기만 해서는 손에 익지 않는다. 버튼을 한 번씩 직접 눌러 본다.
- 실습은 되도록 시크릿 채팅에서 하고, 기록·파일·설정을 다루는 과제는 가짜 자료로 일반 채팅에서 한다.
- 과제 1~8은 대부분 무료로도, 과제 9·10은 유료 요금제에서 한다.
- 과제마다 점검표로 스스로 확인하고, 체크하지 못한 부분은 「다시 볼 곳」을 읽고 다시 해 본다.
- 실습이 끝나면 학습 설정·공유·로그인 기기를 점검하고, 연습한 대화와 거기서 생긴 메모리를 함께 정리한다.

이 장에서 새로 나온 용어는 없습니다. 시크릿 채팅·지침·메모리·Cowork 같은 말은 각 장의 「용어 정리」에 있습니다.

<ChapterDone :chapter="211" />

다음 장: [12장. 전문가처럼 쓰기](12-expert.md)

---

[^screen]: Claude 웹 화면(무료 요금제, 한국어)에서 직접 확인. "시크릿 모드 사용" / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." / 「노력」의 「중간」(추천) / 「이름 변경」 / 「파일 업로드 또는 추가」 / 「설정」 → 「계정」 → 「Claude 지침」 / 「설정」 → 「메모리」 / 「새 프로젝트」 / 권한 모드 「수동」·「자동」 / 「개인정보보호」의 「Help improve our AI models」·「공유된 채팅」 (확인일 2026-10-26)
[^incognito]: Anthropic 도움말, 「Use incognito chats」. "Incognito chats are temporary conversations that aren't saved to your chat history or to Claude’s memory." / "Incognito chats are not used for training." / "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." / "Once closed, incognito chats cannot be reopened." / "If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them." https://support.claude.com/en/articles/12260368 (확인일 2026-10-26)
[^feedback]: Anthropic 개인정보 센터, 「Is my data used for model training?」. "we will store the entire related conversation, including any content, custom styles or conversation preferences, in our secured back-end for up to 5 years." https://privacy.claude.com/en/articles/10023580 (확인일 2026-10-26)
[^model]: Anthropic 도움말, 「Change the model, effort, and thinking settings」. "Each model has a recommended effort level, marked as "Default" in the menu:" / "For everyday tasks, the defaults work well." https://support.claude.com/en/articles/8664678 (확인일 2026-10-26)
[^create]: Anthropic 도움말, 「Create and edit files with Claude」. "Note that creating files will use more of your limit compared to normal chats with Claude." https://support.claude.com/en/articles/12111783 (확인일 2026-10-26)
[^math]: Anthropic 도움말, 「How does Claude handle mathematical equations and calculations?」. "complex or mission-critical calculations should be verified using specialized mathematical software or manual methods." https://support.claude.com/en/articles/10366421 (확인일 2026-10-26)
[^memory]: Anthropic 도움말, 「Use Claude’s chat search and memory to build on previous context」. "You need to turn memory off before you send the first message." / "Unlike incognito chats, they stay in your chat history." / "A chat started with memory off in a project doesn't use your memory or the project's memory." / "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (확인일 2026-10-26)
[^search]: Anthropic 도움말, 「Enable and use web search」. "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." https://support.claude.com/en/articles/10684626 (확인일 2026-10-26)
[^wrong]: Anthropic 도움말, 「Claude is providing incorrect or misleading responses. What’s going on?」. "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (확인일 2026-10-26)
[^projects]: Anthropic 도움말, 「How can I create and manage projects?」. "Free users can create a maximum of five projects." / "Note: Context is not shared across chats within a project unless the information is added into the project knowledge base." https://support.claude.com/en/articles/9519177 (확인일 2026-10-26)
[^personal]: Anthropic 도움말, 「Understanding Claude's personalization features」. "These instructions only apply to chats within that project." / "Use project instructions when you need specific guidance or context for a particular project (paid plans only)." https://support.claude.com/en/articles/10185728 (확인일 2026-10-26)
[^voice]: Anthropic 도움말, 「Use voice mode」. "Textual transcripts of your audio conversations are saved in your chat history just like text conversations." https://support.claude.com/en/articles/11101966 (확인일 2026-10-26)
[^research]: Anthropic 도움말, 「Use research on Claude」. "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." https://support.claude.com/en/articles/11088861 (확인일 2026-10-26)
[^safe]: Anthropic 도움말, 「Use Claude Cowork safely」. "Consider creating a dedicated working folder for Claude rather than granting broad access, and keep backups of important files." / "If something feels off, stop the task immediately." https://support.claude.com/en/articles/13364135 (확인일 2026-10-26)
[^cowork]: Anthropic 도움말, 「Get started with Claude Cowork」. "Paid Claude subscription: Cowork is available to paid Claude plans (Pro, Max, Team, Enterprise) only." / "When using Cowork, Claude requires your explicit permission before permanently deleting any files." https://support.claude.com/en/articles/13345190 (확인일 2026-10-26)
[^toggle]: Anthropic 개인정보 센터, 「How do I change my model improvement privacy settings?」. "Under Help Improve our AI models, click the button to toggle it off/on" https://privacy.claude.com/en/articles/12109829 (확인일 2026-10-26)
[^share]: Anthropic 도움말, 「Share a chat with specific people」. "You can also review everything you've shared from Settings > Privacy under Shared chats." https://support.claude.com/en/articles/16762496 (확인일 2026-10-26)
[^sessions]: Anthropic 도움말, 「Managing your active sessions」. "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." https://support.claude.com/en/articles/13124001 (확인일 2026-10-26)
[^delete]: Anthropic 도움말, 「Delete or rename a conversation」. "When you delete a conversation, it's removed from your conversation history immediately and deleted from our back-end systems within 30 days." https://support.claude.com/en/articles/8230524 (확인일 2026-10-26)
[^export]: Anthropic 도움말, 「Export your Claude data」. "It's not possible to run an export from Claude for iOS or Android." / "The download link will expire 24 hours after delivery." https://support.claude.com/en/articles/9450526 (확인일 2026-10-26)
[^academy-probe]: Claude Academy 「AI capabilities and limitations」 강의 「Next Token Prediction」. "Re-run Probe 2 in a tool with citations enabled (like Research mode in Claude)." / "Does having sources to check change the score?" https://academy.claude.com/courses/ai-capabilities-and-limitations/next-token-prediction (확인일 2026-10-26)
[^your-claude]: 새 설정 화면을 받은 계정은 이 메뉴가 「설정」 → 「Your Claude」 아래에 보일 수 있습니다(지침은 「지침」, 메모리 목록은 「Your memory」 옆 「관리」). 자세한 것은 [5장](05-memory.md)에 있습니다.
[^old-search]: 옛 화면이라면 먼저 「+」 → 「웹 검색」을 켭니다.
[^project-instr-free]: 무료 요금제에서 프로젝트 지침을 쓸 수 있는지는 도움말끼리 설명이 다릅니다.
[^old-research]: 옛 화면이라면 웹 검색이 켜져 있어야 리서치가 동작합니다.
[^manual-name]: 화면에 따라 「수동 승인」으로 나올 수 있습니다.
[^improve-name]: 한국어 도움말에서는 「AI 모델 개선 지원」이라고 부릅니다.
