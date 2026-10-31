# 6장. 프로젝트 기억 — CLAUDE.md로 내 규칙 적어 두기

> **한 줄 요약**: 매번 다시 말하는 규칙은 폴더의 **CLAUDE.md** 파일에 적어 둡니다. Claude는 세션을 시작할 때마다 이 파일을 읽습니다.
> 다만 **강제 장치가 아니라 참고 맥락**입니다. 짧고 구체적으로 쓸수록 잘 지킵니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서와 macOS 데스크톱 앱(한국어 화면, 유료 계정)을 바탕으로 썼습니다. 5장에서 만든 양식을 "기본 규칙"으로 묶어 두는 장입니다.

## 세션은 매번 처음부터 시작한다

Claude Code의 세션은 매번 **빈 상태로 시작합니다.** 앞 세션에서 "날짜는 이렇게 써 줘"라고 했어도 새 세션은 모릅니다.[^fresh] 세션을 넘어 기억을 이어 주는 장치는 두 가지입니다.[^two]

| | CLAUDE.md | 자동 메모리 |
|---|---|---|
| 누가 쓰나 | 내가 | Claude가 |
| 무엇이 들어가나 | 지시와 규칙 | 내가 고쳐 준 것, 내 취향 |
| 언제 읽히나 | 모든 세션 시작 때 | 모든 세션 시작 때(앞부분만) |

출처: Claude Code 공식 문서[^two]

이 장은 내가 직접 쓰는 **CLAUDE.md**를 다룹니다. 자동 메모리는 Claude가 내 지적을 보고 스스로 적어 두는 메모입니다.[^two]

<Quiz id="ch406-fresh" />

## 무엇을 적나

CLAUDE.md는 **"안 적으면 매번 다시 설명할 것"**을 적는 곳입니다.[^when] 이럴 때 적으세요.

- Claude가 **같은 실수를 두 번째** 할 때
- 지난 세션에 했던 **같은 지적을 또 하고** 있을 때
- 새로 온 사람에게도 **똑같이 알려 줘야 할** 내용일 때

출처: Claude Code 공식 문서[^when]

그리고 **확인할 수 있을 만큼 구체적으로** 씁니다.[^concrete]

| 아쉬운 규칙 | 나은 규칙 |
|---|---|
| 날짜를 깔끔하게 써 줘 | 날짜는 10/27(월)처럼 쓴다 |
| 정리를 잘 해 줘 | 할 일은 표로 쓰고 담당·기한을 꼭 넣는다 |
| 원본을 조심해 | inbox 원본 메모는 절대 고치지 않는다 |

나은 규칙은 결과를 보고 "지켰나?"를 바로 따질 수 있습니다.

**짧게 쓰세요.** 공식 문서는 파일 하나를 **200줄 아래로** 두라고 합니다. 길수록 맥락을 더 차지하고 덜 지키게 됩니다.[^short] 여러 단계로 된 절차는 7장의 스킬로 옮기는 편이 낫습니다.[^when]

<Quiz id="ch406-what" />

## 실습 — 내 규칙으로 CLAUDE.md 만들기

4장에서 적어 둔 "공통 규칙"을 CLAUDE.md로 만들게 합니다.

![CLAUDE.md 요청. ① 입력창에 규칙 5가지를 적은 요청에 빨간 번호가 붙어 있다](assets/shot-22-claudemd-prompt-marked.png)

```
이 폴더용 CLAUDE.md를 만들어 줘. 넣을 규칙: 1) inbox 원본 메모는 절대 고치지 않는다 2) 정리할 때는 templates 폴더의 양식을 쓴다 3) 날짜는 10/27(월)처럼 쓴다 4) 메모에 없는 내용은 지어내지 말고 (메모에 없음)이라고 쓴다 5) 할 일은 표로 쓰고 담당·기한을 꼭 넣는다. 짧게, 20줄 안으로.
```

Claude가 폴더 맨 위에 `CLAUDE.md`를 만들었습니다(결과: [6장-CLAUDE.md.txt](/practice/notes/results/6장-CLAUDE.md.txt)). 규칙 5개가 굵은 글씨로 한 줄씩 들어가고, 할 일 표 예시가 붙었습니다.

폴더 맨 위의 `CLAUDE.md`(또는 `.claude/CLAUDE.md`)를 **프로젝트 지시**라고 부릅니다. 이 폴더에서 일하는 세션 모두에 적용됩니다.[^where]

<Quiz id="ch406-make" />

## 지키는지 시험하기 — 새 세션에서

CLAUDE.md는 **세션을 시작할 때** 읽힙니다.[^fresh] 그래서 시험은 **새 세션**에서 합니다. 이번에는 형식을 전혀 말하지 않고 짧게만 부탁합니다.

![새 세션의 짧은 요청. ① 「inbox의 회고 메모 3개로 이번 주 주간 회고를 써 줘.」에 빨간 번호가 붙어 있다](assets/shot-23-claudemd-test-marked.png)

```
inbox의 회고 메모 3개로 이번 주 주간 회고를 써 줘.
```

결과([6장-주간회고-2026-10-27.txt](/practice/notes/results/6장-주간회고-2026-10-27.txt))를 규칙과 맞춰 보니 이랬습니다.

| 규칙 | 결과 |
|---|---|
| templates 양식을 쓴다 | 5장의 KPT 양식(잘한 것·아쉬운 것·다음 주에 할 것) 그대로 |
| 날짜는 10/27(월)처럼 | `10/30(목)`, `11/3(월)` 형식 |
| 메모에 없으면 (메모에 없음) | '왜'가 없는 칸 두 곳에 `(메모에 없음)` |
| 원본은 고치지 않는다 | inbox 메모는 그대로 |

출처: 이 가이드의 실습 결과(2026-10-31)

숫자(인스타 3번, 좋아요 12개, 잘못 쓴 가격 6,000원, 세트 4개·주간 11개, 뱅쇼 원가 1,800원)도 모두 메모와 같았습니다.

![결과 화면. ① Claude가 양식의 점검표로 스스로 확인한 「점검 결과」, ② 「확인이 필요한 것 3가지」, ③ 세션 정보 칸의 결과물(주간회고 파일)에 빨간 번호가 붙어 있다](assets/shot-24-claudemd-result-marked.png)

①을 보면 Claude가 5장에서 만든 양식 안내의 **점검표로 스스로 확인**하고, 확인 범위(회고 메모 3/3)까지 밝혔습니다. ②에서는 메모의 요일이 실제 달력과 다르다는 점(2장에서 밝힌 "지어낸 날짜"), 이유가 메모에 없는 칸, 원본 메모의 기록되지 않은 수정을 먼저 알려 왔습니다. **규칙과 점검표를 적어 두면, 결과와 함께 근거가 돌아옵니다.**

<Quiz id="ch406-test" />

## 강제 규칙은 아니다

공식 문서는 CLAUDE.md를 **참고 맥락이지 강제 설정이 아니라고** 분명히 말합니다.[^context] 그래서 이렇게 씁니다.

- 꼭 지켜야 하는 것일수록 **구체적이고 짧게** 씁니다. 구체적일수록 더 일관되게 지킵니다.[^context]
- 서로 **부딪치는 규칙**이 있으면 Claude가 아무거나 하나를 고를 수 있습니다. 가끔 읽어 보고 낡은 규칙을 지웁니다.[^conflict]
- 어떤 일이 있어도 막아야 하는 것(예: 원본 폴더 지우기)은 CLAUDE.md만 믿지 말고 4장의 권한 모드와 Git 기록으로 함께 지킵니다.

::: details 내 컴퓨터 전체에 적용되는 CLAUDE.md도 있다
`~/.claude/CLAUDE.md`(내 사용자 폴더)에 적은 지시는 **모든 폴더의 세션**에 적용됩니다.[^where] 이 가이드의 캡처 컴퓨터에도 이런 개인 지시가 있어서, 답변 끝에 "상태:" 줄을 붙이는 등 화면이 조금 다릅니다. 한 폴더에만 쓸 규칙은 그 폴더의 CLAUDE.md에 적으세요.
:::

<Quiz id="ch406-not-enforced" />

## 직접 해 보기

1. 4장에서 적은 공통 규칙을 3~5줄로 다듬는다. "지켰나?"를 따질 수 있게 구체적으로 쓴다.
2. 위 요청처럼 CLAUDE.md를 만들어 달라고 하고, 파일 칸에서 내용을 확인한다.
3. **새 세션**을 열고 형식을 말하지 않은 짧은 요청을 보낸다.
4. 결과를 규칙 표와 하나씩 맞춰 본다. 안 지킨 규칙이 있으면 더 구체적으로 고쳐 쓴다.

**이어지는 과제**: 지금은 "회의록 정리해 줘", "공부 노트 만들어 줘"를 매번 말로 합니다. 7장에서는 이 요청들을 `/회의정리` 같은 **스킬**로 만들어 한 줄로 부릅니다.

## 정리

- 세션은 매번 처음부터 시작한다. 다시 설명할 것은 CLAUDE.md에 적는다.
- 같은 실수·같은 지적이 두 번째 나오면 적을 때다. 구체적으로, 200줄 아래로.
- 폴더 맨 위의 CLAUDE.md는 그 폴더의 모든 세션에, `~/.claude/CLAUDE.md`는 모든 폴더에 적용된다.
- 지키는지는 새 세션에서 짧은 요청으로 시험한다.
- 강제 장치가 아니다. 꼭 막아야 하는 것은 권한 모드·Git 기록과 함께 지킨다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| CLAUDE.md | 클로드 엠디 | 세션마다 읽히는, 내가 쓰는 지시 파일 |
| Auto memory | 오토 메모리 (자동 메모리) | Claude가 내 지적과 취향을 스스로 적어 두는 메모 |
| Project instructions | 프로젝트 인스트럭션 (프로젝트 지시) | 그 폴더의 세션 모두에 적용되는 CLAUDE.md |
| Context | 컨텍스트 (맥락) | 참고하라고 주는 정보. 강제 규칙과 다르다 |

<ChapterDone :chapter="406" />

다음 장: 7장 「스킬·플러그인·외부 도구」는 준비 중입니다. 그동안 [3단계 목차](./)에서 앞으로 배울 내용을 볼 수 있습니다.

[^fresh]: Claude Code 공식 문서, 「How Claude remembers your project」. "Each Claude Code session begins with a fresh context window." / "Claude reads them at the start of every session." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^two]: Claude Code 공식 문서, 「How Claude remembers your project」. "Two mechanisms carry knowledge across sessions" / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Both are loaded at the start of every conversation." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^when]: Claude Code 공식 문서, 「How Claude remembers your project」. "Treat CLAUDE.md as the place you write down what you'd otherwise re-explain." / "Claude makes the same mistake a second time" / "You type the same correction or clarification into chat that you typed last session" / "A new teammate would need the same context to be productive" / "If an entry is a multi-step procedure or only matters for one part of the codebase, move it to a skill" https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^concrete]: Claude Code 공식 문서, 「How Claude remembers your project」. "Write instructions that are concrete enough to verify" https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^short]: Claude Code 공식 문서, 「How Claude remembers your project」. "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^where]: Claude Code 공식 문서, 「How Claude remembers your project」. "Personal preferences for all projects" / "Team-shared instructions for the project" / "A project CLAUDE.md can be stored in either ./CLAUDE.md or ./.claude/CLAUDE.md." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^context]: Claude Code 공식 문서, 「How Claude remembers your project」. "Claude treats them as context, not enforced configuration." / "The more specific and concise your instructions, the more consistently Claude follows them." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
[^conflict]: Claude Code 공식 문서, 「How Claude remembers your project」. "if two instructions contradict each other, Claude may pick one arbitrarily." https://code.claude.com/docs/en/memory (확인일 2026-10-31)
