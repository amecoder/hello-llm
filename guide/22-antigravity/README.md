# 3단계 · Antigravity 사용 가이드

Antigravity는 Google이 만든, **내 컴퓨터의 폴더에서 직접 일하는** AI 도구입니다. 데스크톱 앱과 터미널 프로그램 `agy`가 있습니다.
이 가이드는 [Codex 가이드](../21-codex/)까지 만든 「내 방식대로 정리해 주는 도구」 폴더를 **옮기지 않고 그대로 열어**, 세 번째 도구에서도 도는지 확인하며 다른 점만 배웁니다.

> **이 가이드는 2026년 11월 1일에 확인한 Antigravity 공식 문서(antigravity.google/docs)와 실제 실행 결과를 바탕으로 썼습니다.** 기능과 메뉴 이름은 자주 바뀝니다.
> 세 도구 중 유일하게 **무료 Google 계정**(만 18세 이상)으로도 모든 기능을 쓸 수 있습니다. 요금제에 따라 사용량과 모델만 다릅니다.

| 장 | 제목 | 이런 걸 알게 됩니다 |
|---|---|---|
| 1 | [Antigravity는 무엇이고 앞의 두 도구와 무엇이 다른가](01-what-is.md) | 네 가지 모양, 무료로도 모든 기능, 모델, 세 도구 대응 |
| 2 | [앱 설치와 첫 정리](02-first-task.md) | 설치·로그인, 프로젝트로 열기, Planning mode와 Proceed, Review 창 |
| 3 | [규칙과 스킬 — 옮기지 않아도 된다](03-rules-skills.md) | AGENTS.md·.agents/skills 그대로, 같은 메모로 0→1, /스킬이름 |
| 4 | [권한과 되돌리기](04-permissions-undo.md) | 프리셋 넷, 울타리 기본값(앱·터미널), 버리기 주의, /rewind |
| 5 | [계획·예약·브라우저·목표](05-plan-schedule.md) | /plan, /schedule과 Automations, /browser, /goal, 원격 조종 |
| 6 | [터미널에서 쓰기](06-terminal.md) | agy -p, 조용한 거절과 종료 코드 0, 폴더 신뢰, 함정 네 가지 |
| 7 | [비용·데이터·안전, 그리고 세 도구 고르기](07-safety-choose.md) | 사용량·크레딧, Enable Telemetry, 숨은 지시 실험, 세 도구 함께 쓰기, 실습 과제 |

## 연습 자료

출발점은 **Codex 5장까지 마친 정리도구 폴더**입니다. 앞 단계를 건너뛰었다면 아래 파일을 받아 같은 모양으로 만드세요. 모든 메모는 **지어낸 내용**이고, 날짜·요일은 이야기를 위해 지어낸 것이라 실제 2026년 달력과 맞지 않습니다.

| 폴더 안 위치 | 받을 파일 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 맨 위 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/이름/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

받은 파일은 확장자를 표의 이름대로 바꿔 저장합니다(예: `3장-AGENTS.md.txt` → `AGENTS.md`). `notes/` 폴더는 비워 둡니다.

이 가이드가 Antigravity로 만든 **결과물**도 공개합니다. 같은 요청이어도 모양은 조금씩 다릅니다.

| 장 | 결과물 |
|---|---|
| 3 | [회의록(AGENTS.md 없이)](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [회의록(AGENTS.md 있을 때)](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [스킬로 만든 주간 회고](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [agy -p 출력](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [숨은 지시 메모로 만든 회의록](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

Codex를 아직 읽지 않았다면 [3단계 · Codex 가이드](../21-codex/)부터 보세요. 무료 계정만 있다면 이 가이드부터 실습해도 됩니다.
