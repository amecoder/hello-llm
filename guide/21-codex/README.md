# 3단계 · Codex 사용 가이드

Codex는 OpenAI가 만든, **내 컴퓨터의 폴더에서 직접 일하는** AI 도구입니다. 지금은 ChatGPT 데스크톱 앱 안에서 「Codex」를 골라 씁니다.
이 가이드는 [Claude Code 가이드](../20-claude-code/)에서 만든 「내 방식대로 정리해 주는 도구」를 Codex로 옮기면서, **Claude Code와 다른 점만** 배웁니다.

> **이 가이드는 2026년 11월 1일에 확인한 Codex 공식 문서(learn.chatgpt.com)와 실제 실행 결과를 바탕으로 썼습니다.** 기능과 메뉴 이름은 자주 바뀝니다.
> 실습은 **Plus 이상** 요금제를 기준으로 합니다. Free·Go는 점진적 제공이라 아직 Codex가 보이지 않을 수 있습니다.

| 장 | 제목 | 이런 걸 알게 됩니다 |
|---|---|---|
| 1 | [Codex는 무엇이고 Claude Code와 무엇이 다른가](01-what-is.md) | ChatGPT 앱 안의 Chat·Work·Codex, Claude Code와 대응, 요금제 |
| 2 | [ChatGPT 앱에서 Codex 시작하기](02-first-task.md) | 설치, Codex 고르기, 폴더 열기, 첫 정리 맡기기 |
| 3 | [규칙 파일 AGENTS.md](03-agents-md.md) | CLAUDE.md 옮기기, 규칙을 말하지 않고 시험, 가져오기·메모리 |
| 4 | [권한과 되돌리기](04-permissions-undo.md) | 권한 메뉴 세 가지, 보호 폴더, 리뷰 창, Git으로 되돌리기 |
| 5 | [스킬 옮기기](05-skills.md) | .agents/skills, $weekly-review 한 줄, 틀린 것과 빠진 것 |
| 6 | [예약·클라우드·휴대폰](06-schedule-cloud.md) | 예약 조건과 권한, 클라우드와의 차이, 휴대폰 연결 |
| 7 | [터미널에서 쓰기](07-terminal.md) | 설치, codex exec(기본 읽기 전용), 대화형 명령 |
| 8 | [비용·데이터·안전, 그리고 도구 고르기](08-safety-choose.md) | 사용량, 데이터 설정, 숨은 지시 실험, 두 도구 함께 쓰기, 실습 과제 |

## 연습 자료

출발점은 **Claude Code 7장까지 마친 정리도구 폴더**입니다. Claude Code 가이드를 건너뛰었다면 아래 파일을 받아 같은 모양으로 만드세요. 모든 메모는 **지어낸 내용**이고, 날짜·요일은 이야기를 위해 지어낸 것이라 실제 2026년 달력과 맞지 않습니다.

| 폴더 안 위치 | 받을 파일 |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| 맨 위 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/이름/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

받은 파일은 확장자를 표의 이름대로 바꿔 저장합니다(예: `5장-양식-회의록.txt` → `templates/회의록.md`). `notes/` 폴더는 비워 둡니다.

이 가이드가 Codex로 만든 **결과물**도 공개합니다. 같은 요청이어도 모양은 조금씩 다릅니다.

| 장 | 결과물 |
|---|---|
| 2 | [회의록](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [규칙만으로 쓴 공부 노트](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [스킬로 만든 주간 회고](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [codex exec 출력](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [숨은 지시 메모로 만든 회의록](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

Claude Code를 아직 읽지 않았다면 [3단계 · Claude Code 가이드](../20-claude-code/)부터 보세요. 폴더·권한·규칙 파일·스킬이 무엇인지는 거기서 설명하고, 이 가이드는 링크로 이어 줍니다.
