# 3단계 · Claude Code 사용 가이드

2단계에서는 채팅으로 **묻고 답을 받았습니다.** 3단계에서는 Claude가 **내 컴퓨터의 폴더에서 직접 파일을 읽고 고치는** Claude Code를 배웁니다.
코드를 몰라도 괜찮습니다. 이 가이드는 메모·표 파일이 든 폴더로 연습하고, 터미널 없이 쓰는 **Claude 데스크톱 앱의 Code 탭**부터 시작합니다.

> **이 가이드는 2026년 10월 31일에 확인한 Claude Code 공식 문서(code.claude.com/docs)와 실제 화면을 바탕으로 썼습니다.** 기능과 메뉴 이름은 자주 바뀝니다.
> Claude Code는 **유료 구독**(Pro·Max·Ultra·Team·Enterprise)이 있어야 씁니다. 내 화면과 다르면 화면에 보이는 이름을 따르세요.

| 장 | 제목 | 이런 걸 알게 됩니다 |
|---|---|---|
| 1 | [Claude Code는 무엇이고 어디서 쓰나](01-what-is.md) | 채팅과 다른 점, 쓰는 곳, 요금제 |
| 2 | [데스크톱 앱 설치와 첫 세션](02-install.md) | 설치·로그인, Code 탭, 폴더 고르기, 첫 일 맡기기 |
| 3 | [화면 둘러보기](03-screen-tour.md) | 제목 줄 버튼, 바뀐 내용 보기(Git), 세션 정보, 파일 칸 |
| 4 | [허락과 되돌리기](04-permissions-undo.md) | 권한 모드, 되감기, 되돌리기의 한계, Git 기록 |
| 5 | [잘 맡기는 법](05-delegate-well.md) | 구체적으로 말하기, 계획 모드로 양식 3종 설계, 확인 기준과 근거 |
| 6 | [프로젝트 기억](06-claude-md.md) | CLAUDE.md로 내 규칙 적어 두고 새 세션에서 시험하기 |
| 7 | [스킬·플러그인·외부 도구](07-skills-plugins.md) | 정리 스킬 3개로 도구 완성, 보호된 경로의 허락 창, 플러그인 안전 |
| 8 | [여러 일 동시에·클라우드·예약](08-parallel-cloud-schedule.md) | 세션 나란히, 예약 세 가지, 금요일 주간 회고 예약, 클라우드 |
| 9 | [비용·데이터·안전](09-cost-data-safety.md) | 사용량, 학습 설정과 보관 기간, 숨은 지시 실험과 안전 수칙 |
| 10 | [터미널에서 쓰기](10-terminal.md) | 설치와 기본 명령, claude -p 로 정리 도구 확인, 앱과 오가기 |
| 11 | [실습 과제](11-practice.md) | 과제 9개와 점검표, 마지막은 내 메모로 나만의 정리 도구 |
| 12 | [전문가처럼 쓰기](12-expert.md) | 일에 맞게 고르기, 필요할 때 하나씩 쌓기, 매주 정리 루틴 |

## 연습 자료

3단계 실습은 아래 메모 6개로 합니다. **모두 지어낸 내용**입니다(작은 카페 「모퉁이 카페」 직원 서연의 한 주). 내 컴퓨터에 `정리도구/inbox` 폴더를 만들고 내려받아 넣으세요. 메모의 날짜·요일은 이야기를 위해 지어낸 것이라 실제 2026년 달력과 맞지 않습니다.

| 파일 | 내용 | 처음 쓰는 장 |
|---|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | 뒤죽박죽 주간회의 메모 | 2장 |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | 강의 필기 | 4장 |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | 하루 회고 3일치 | 3장 |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) | 숨은 지시가 든 메모(안전 실험용) | 9장 |

이 가이드가 실제 Claude Code 앱으로 만든 **결과물**도 공개합니다. 내 결과와 비교해 보세요. 같은 요청이어도 모양은 조금씩 다릅니다.

| 장 | 결과물 |
|---|---|
| 2 | [회의록](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [상태 칸을 넣은 회의록](/practice/notes/results/3장-회의록-상태칸.txt) |
| 4 | [공부 노트(되감기 전)](/practice/notes/results/4장-공부노트-2026-10-28.txt) |
| 5 | [회의록 양식](/practice/notes/results/5장-양식-회의록.txt) · [공부노트 양식](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고 양식](/practice/notes/results/5장-양식-주간회고.txt) · [양식 안내](/practice/notes/results/5장-양식-README.txt) |
| 6 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) · [규칙만으로 쓴 주간 회고](/practice/notes/results/6장-주간회고-2026-10-27.txt) |
| 7 | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) 스킬 · [스킬로 만든 공부 노트](/practice/notes/results/7장-공부노트-스킬로.txt) |
| 9 | [숨은 지시 메모로 만든 회의록](/practice/notes/results/9장-회의록-숨은지시-메모.txt) |
| 10 | [claude -p 출력](/practice/notes/results/10장-claude-p-출력.txt) |

2단계를 아직 읽지 않았다면 [2단계 · Claude 가이드](../10-claude/)부터 보세요. 계정·요금제·채팅 기능은 거기서 설명하고, 3단계에서는 링크로 이어 줍니다.
