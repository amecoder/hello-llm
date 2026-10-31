# 5장. 잘 맡기는 법 — 구체적으로, 계획 먼저, 확인 기준 주기

> **한 줄 요약**: 요청에 **무엇을 보고, 어떤 모양으로, 어디에 두고, 무엇이면 끝인지**를 적습니다. 일이 크면 **「계획」 모드로 방법부터** 받아 고친 뒤 맡깁니다.
> 끝났다는 말만 믿지 말고, **확인할 기준과 근거**를 함께 달라고 합니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서와 macOS 데스크톱 앱(한국어 화면, 유료 계정)을 바탕으로 썼습니다. 이 장에서는 「정리 도구」의 뼈대인 **양식 3종**(회의록·공부 노트·주간 회고)을 만듭니다.

## 구체적으로 말하기

공식 문서는 요청이 뜻대로 안 풀리는 가장 흔한 이유를 이렇게 꼽습니다. **Claude가 폴더를 읽어서는 알 수 없는 정보가 빠졌기 때문입니다.**[^cant-see] 회의에서 정한 것, 내가 좋아하는 형식, "다 됐다"의 기준 같은 것이 그렇습니다.

그래서 요청에는 이 넷을 적습니다.

| 적을 것 | 예 |
|---|---|
| 무엇을 보고 | inbox의 회의 메모 |
| 어떤 모양으로 | 결정한 것 / 할 일(담당·기한) / 다음 논의 |
| 어디에 두고 | notes 폴더에 새 파일로 |
| 무엇이면 끝인지 | 할 일마다 담당·기한이 있으면 |

공식 문서도 "무엇을 보고, 어떤 증상이고, 무엇이면 고쳐진 것인지"를 처음에 말해 두면 고치는 수고를 한 번 덜 수 있다고 합니다.[^specific]

```
회의 메모 정리해 줘.
```

```
inbox의 회의 메모를 읽고 회의록으로 정리해 줘. 결정한 것 / 할 일(담당·기한) / 다음에 논의할 것 세 부분으로 나누고, notes 폴더에 새 파일로 저장해 줘. 원본 메모는 고치지 마.
```

두 번째 요청은 2장에서 쓴 것입니다. 첫 번째보다 길지만, 결과를 두 번 세 번 고칠 일이 줄어듭니다.

**넉넉하게 원할 때는 그렇게 말합니다.** Claude는 요청을 조심스럽게 읽어서, 요청을 만족하는 **가장 작은 결과**를 만드는 경향이 있습니다.[^ambitious] "빈칸일 때 어떻게 할지까지", "예시도 하나씩" 같이 범위를 직접 넓혀 주세요.

<Quiz id="ch405-specific" />

## 모를 땐 질문해 달라고 하기

무엇을 원하는지 아직 정하지 못했어도 괜찮습니다. **Claude에게 질문해 달라고** 하면 됩니다.[^interview]

```
매주 금요일에 쓰는 주간 회고 양식을 만들고 싶은데 아직 정한 게 없어. 내가 답할 수 있게 질문을 하나씩 해 주고, 다 정해지면 그 내용을 회고-양식-초안.md 로 정리해 줘.
```

Claude는 아직 정하지 않은 부분을 보기가 있는 질문으로 묻습니다. 답이 모여 스펙(무엇을 만들지 적은 문서)이 될 때까지 계속 묻습니다.[^interview] 정리된 초안 파일은 다음에 실제로 만들 때 기준이 됩니다.

<Quiz id="ch405-interview" />

## 계획 먼저 — 「계획」 모드

일이 크면 바로 맡기지 말고 **방법부터 받아 봅니다.** 「계획」 모드에서 Claude는 파일을 읽고 살펴본 뒤 계획을 쓰지만, **파일은 고치지 않습니다.**[^plan] 공식 문서도 복잡한 일은 「계획」으로 시작하라고 권합니다.[^plan-tip]

실습해 봅니다. 새 세션에서 입력창 아래 줄의 모드를 **「계획」**으로 바꾸고(4장의 권한 모드 메뉴) 이렇게 보냅니다.

![계획 요청. ① 입력창에 양식 3개 계획 요청, ② 권한 모드 「계획」에 빨간 번호가 붙어 있다](assets/shot-17-plan-prompt-marked.png)

```
회의록·공부 노트·주간 회고를 매번 같은 모양으로 만들고 싶어. notes 폴더의 회의록과 inbox 메모를 참고해서 templates 폴더에 양식 3개를 만들 계획을 세워 줘. 양식마다 어떤 칸을 넣고 각 칸에 무엇을 적는지, 그리고 결과가 맞는지 내가 확인할 점검표도 계획에 넣어 줘.
```

잠시 뒤 계획이 나옵니다.

![계획 제안 화면. ① 「Claude가 계획을 제안했습니다」 카드(거부·수정…·수락·수락 및 자동 모드 사용), ② 오른쪽 「계획」 칸, ③ 계획 안의 「가정(묻지 않고 정한 기본값)」 절에 빨간 번호가 붙어 있다](assets/shot-18-plan-marked.png)

**① 카드**에서 계획을 어떻게 할지 고릅니다.

| 화면 이름 | 하는 일 |
|---|---|
| 거부 | 이 계획을 받지 않음 |
| 수정… | 바꿀 점을 적어 다시 계획하게 함 |
| 수락 | 승인하고, 편집은 하나씩 확인 |
| 수락 및 자동 모드 사용 | 승인하고, 자동 모드로 진행 |

출처: 화면 이름은 이 가이드의 화면 확인(2026-10-31), 동작은 공식 문서[^approve]

**② 계획 칸**에서 계획 전문을 읽습니다. 칸 위에 「텍스트를 선택하여 Claude에게 댓글을 남기세요」라는 안내가 있어서, 마음에 걸리는 문장에 바로 의견을 달 수 있습니다.

**③ 가정** 절을 꼭 읽으세요. 이 실습에서는 Claude가 "묻지 않고 정한 기본값 — 바꾸고 싶으면 승인 전에 말해 주세요"라며 파일 이름, 저장 위치, 빈칸 표시법 등을 따로 모아 두었습니다. **승인하기 전이 가장 싸게 고칠 수 있는 때입니다.**

### 계획 고치기

주간 회고는 잘한 것·아쉬운 것·다음에 할 것 세 칸으로 쓰고 싶었습니다. 「수정…」을 누르면 「무엇을 변경해야 하나요? (선택사항)」 칸이 열립니다.

![계획 수정 칸. ① 「주간 회고는 잘한 것 / 아쉬운 것 / 다음 주에 할 것 세 칸(KPT)으로 해 줘.」를 적은 칸, ② 「수정」 버튼에 빨간 번호가 붙어 있다](assets/shot-19-plan-edit-marked.png)

**KPT**는 잘한 것(Keep)·아쉬운 것(Problem)·다음에 해 볼 것(Try)으로 나누는 회고 방식입니다. 「수정」을 누르면 Claude가 계획을 고쳐 다시 승인을 요청합니다.

![고친 계획. ① 앞 계획에 「승인되지 않음」, ② 계획 파일이 「+12 −16」 편집됨, ③ 다시 나온 계획 카드, ④ 「수락」 버튼에 빨간 번호가 붙어 있다](assets/shot-20-plan-revised-marked.png)

이번에는 **「수락」**을 눌렀습니다. 승인하면 Claude는 계획 모드를 나와, 고른 방식에 맞는 권한 모드로 바꾸고 파일을 고치기 시작합니다.[^approve] 화면 아래 줄의 모드도 「계획」에서 「수동」으로 바뀌었습니다.

![계획을 실행하는 화면. ① 실행 중인 할 일 목록, ② 세션 정보 칸의 결과물(README·주간회고·공부노트·회의록), ③ 변경 사항 「+155 −1」, ④ 권한 모드 「수동」에 빨간 번호가 붙어 있다](assets/shot-21-plan-run-marked.png)

만들어진 양식은 이렇습니다(이 가이드의 실습 결과).

- [5장-양식-회의록.txt](/practice/notes/results/5장-양식-회의록.txt) · [5장-양식-공부노트.txt](/practice/notes/results/5장-양식-공부노트.txt) · [5장-양식-주간회고.txt](/practice/notes/results/5장-양식-주간회고.txt)
- [5장-양식-README.txt](/practice/notes/results/5장-양식-README.txt) — 양식 쓰는 법과 점검표

주간 회고 양식은 수정 요청대로 「잘한 것 (Keep) / 아쉬운 것 (Problem) / 다음 주에 할 것 (Try)」 세 칸이 되었습니다. 칸마다 무엇을 적을지 안내와 예시가 붙어 있습니다.

<Quiz id="ch405-plan" />

## 확인 기준 주기 — "다 했다" 대신 근거

Claude는 일이 **끝나 보이면** 멈춥니다. 맞는지 스스로 확인할 방법이 없으면 "끝나 보인다"가 전부입니다. 그러면 내가 하나하나 검사하는 사람이 됩니다.[^check]

그래서 **맞는지 틀린지 답이 나오는 기준**을 함께 줍니다.[^check] 코드라면 테스트지만, 문서 정리라면 점검표가 그 역할을 합니다.

```
양식으로 이번 주 회고를 써 줘. 다 쓴 뒤 아래 점검표를 하나씩 확인하고, 항목마다 "통과/실패"와 근거가 된 메모 줄을 보여 줘.
- 칸마다 1~3개씩 들어갔나?
- 숫자(판매 개수, 좋아요 수)가 메모와 같은가?
- 메모에 없는 내용을 지어내지 않았나?
```

공식 문서는 어떤 방법을 쓰든 **근거를 달라고** 하라고 합니다. "모두 통과"라는 말 한 줄보다, 실제로 확인한 내용을 읽는 편이 빠르고 정확합니다.[^evidence] 이 실습의 양식 README에도 Claude가 점검표를 넣어 두었습니다.

<Quiz id="ch405-check" />

## 중간에 방향 바꾸기

처음 1분을 지켜보세요. 엉뚱한 쪽으로 가면 바로 멈추고 바로잡습니다.[^steer]

- **멈추기**: 멈춤 버튼이나 **Esc**. 그때까지 한 일은 남아 있습니다.[^steer]
- **되감기**: 4장의 `/rewind`. 과감한 방법을 먼저 해 보고 아니면 되돌리면 되니, 시도가 부담스럽지 않습니다.[^steer]
- **처음부터 다시**: **같은 것을 두 번 고쳤는데도 틀리면**, 세 번째로 고치지 말고 새로 시작합니다. 실패한 시도 두 번이 대화에 남아 Claude가 그걸 계속 다시 읽기 때문입니다. 배운 점을 담은 새 요청 하나가 거의 항상 낫습니다.[^steer] 데스크톱 앱에서는 새 세션을 열면 됩니다.

<Quiz id="ch405-steer" />

## 직접 해 보기

1. 새 세션에서 모드를 「계획」으로 바꾸고, 위의 양식 3개 계획 요청을 보낸다.
2. 계획의 「가정」 절을 읽고, 하나 이상을 「수정…」으로 바꿔 본다(예: 주간 회고를 KPT 세 칸으로).
3. 「수락」으로 승인하고, 세션 정보 칸의 결과물에 양식 파일이 생겼는지 본다.
4. 양식으로 이번 주 회고를 써 달라고 하면서, 점검표와 근거를 함께 달라고 한다.

**이어지는 과제**: 4장에서 적어 둔 "두 문서에 공통으로 쓰고 싶은 규칙" 세 줄을 다시 본다. 6장에서 이 규칙을 CLAUDE.md에 저장해, 매번 말하지 않아도 지키게 한다.

## 정리

- 요청에는 무엇을 보고·어떤 모양으로·어디에 두고·무엇이면 끝인지를 적는다.
- 정하지 못했으면 Claude에게 질문해 달라고 한다.
- 일이 크면 「계획」 모드로 방법부터 받는다. 「가정」 절을 읽고, 「수정…」으로 고친 뒤 「수락」한다.
- 맞는지 답이 나오는 기준(점검표)을 주고, 결과와 함께 근거를 달라고 한다.
- 처음 1분을 지켜보고, 두 번 고쳐도 틀리면 새로 시작한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Plan mode | 플랜 모드 (계획) | 파일을 고치지 않고 살펴본 뒤 계획만 내놓는 모드 |
| Spec | 스펙 | 무엇을 만들지 적어 둔 문서 |
| Template | 템플릿 (양식) | 매번 같은 모양으로 채워 쓰는 틀 |
| KPT | 케이피티 | 잘한 것(Keep)·아쉬운 것(Problem)·해 볼 것(Try)으로 나누는 회고 방식 |
| Evidence | 에비던스 (근거) | 실제로 확인한 내용. "다 했다"는 말 대신 받는 것 |

<ChapterDone :chapter="405" />

다음 장: [6장. 프로젝트 기억](06-claude-md.md)

[^cant-see]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^specific]: Claude Code 공식 문서, 「Best practices for Claude Code」. "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^ambitious]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude tends to read a request conservatively and build the smallest thing that satisfies it, since it can't see how much you were hoping for." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^interview]: Claude Code 공식 문서, 「Best practices for Claude Code」. "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead" / "Claude comes back with multiple-choice questions about the parts you haven't pinned down" / "It keeps asking until the answers add up to a spec." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^plan]: Claude Code 공식 문서, 「Choose a permission mode」. "Plan mode tells Claude to research and propose changes without making them. Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^plan-tip]: Claude Code 공식 문서, 「Desktop application」. "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^approve]: Claude Code 공식 문서, 「Choose a permission mode」. "When the plan is ready, Claude presents it and asks how to proceed." / "Approving a plan exits plan mode and switches the session to the permission mode each approve option describes, so Claude starts editing." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^check]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude stops when the work looks done." / "Give Claude something it can run that comes back pass or fail." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^evidence]: Claude Code 공식 문서, 「Best practices for Claude Code」. "\"All tests pass\" on its own tells you very little" / "reading the output is faster than rerunning the check yourself" https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
[^steer]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Watch the first minute, press Esc the moment Claude drifts, and after two failed corrections run /clear and write a better prompt instead of a third." / "Esc stops Claude mid-action and keeps everything up to that point" / "That makes it low-risk to try the bolder approach first and rewind if it doesn't work out." / "a third correction mostly adds to a conversation that already contains two failed attempts for Claude to keep re-reading. /clear plus one new prompt that folds in what you learned works better almost every time." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
