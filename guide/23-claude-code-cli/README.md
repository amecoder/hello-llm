# 3단계 · Claude Code 터미널 가이드

2단계에서는 채팅으로 **묻고 답을 받았습니다.** 이 가이드에서는 터미널에서 Claude Code를 불러, Claude가 **내 컴퓨터의 폴더에서 직접 파일을 읽고 고치게** 합니다.
터미널을 한 번도 열어 본 적이 없어도 괜찮습니다. 코드를 몰라도 됩니다. 1장에서 터미널을 여는 것부터 시작해, 마지막에는 명령 한 줄로 도는 주간 정리를 만듭니다.

> **이 가이드는 2026년 11월 6일에 확인한 Claude Code 공식 문서(code.claude.com/docs)와, 같은 날 리눅스에서 Claude Code 2.1.318을 실제로 실행한 결과를 바탕으로 썼습니다.** 작성자의 개인 설정이 섞이지 않도록 그 설정을 끄고 돌렸습니다. macOS·Windows에서는 실행해 보지 않았습니다. 그쪽 내용은 공식 문서를 근거로 썼습니다. 실행해 보지 않은 기능은 그 자리에서 밝힙니다.
> Claude Code는 **유료 계정**(Pro·Max·Ultra·Team·Enterprise·Console)이 있어야 씁니다. 기능과 명령은 자주 바뀝니다. 내 화면과 다르면 화면에 보이는 이름을 따르세요.

| 장 | 읽기 | 제목 | 이런 걸 알게 됩니다 |
|---|---|---|---|
| 1 | 필수 | [터미널과 Claude Code](01-what-is.md) | 터미널이 무엇인지, 내 컴퓨터에서 여는 법 |
| 2 | 필수 | [터미널 기초](02-shell-basics.md) | 폴더 이동과 파일 다루기, 연습 폴더 만들기 |
| 3 | 필수 | [설치와 로그인](03-install-login.md) | 운영체제별 설치, 로그인, 버전 확인 |
| 4 | 필수 | [첫 세션](04-first-session.md) | 폴더 신뢰 확인, 화면 읽기, 첫 회의록 |
| 5 | 필수 | [입력 요령과 명령](05-input-commands.md) | `@`·`!`·`/`, 여러 줄 입력, 단축키 |
| 6 | 필수 | [세션과 맥락](06-sessions-context.md) | 이름 붙이기, 이어 가기, `/context`·`/compact`·`/clear` |
| 7 | 필수 | [허락과 되돌리기](07-permissions-undo.md) | 권한 모드, 허락 창, 되감기, 거부 규칙 |
| 8 | 필수 | [프로젝트 기억과 설정](08-memory-settings.md) | CLAUDE.md, 설정 파일 |
| 9 | 필수 | [스킬과 확장](09-skills-extensions.md) | 스킬 만들기, 플러그인·MCP·서브에이전트 |
| 10 | 필수 | [한 줄 실행과 자동화](10-headless-automation.md) | `claude -p`, 미리 허락하기, `주간정리.sh` |
| 11 | 필수 | [훅과 화면 맞춤](11-hooks-statusline.md) | 변경기록 훅, 상태 줄, 출력 스타일 |
| 12 | 필수 | [동시 작업과 원격](12-parallel-remote.md) | Git 첫 기록, worktree, `/loop`, `/goal`, 원격 제어 |
| 13 | 필수 | [비용·안전·문제 해결](13-cost-safety-trouble.md) | 사용량, 모델, 샌드박스, 데이터, 오류 대처 |
| 14 | 필수 | [실습 과제와 전문가처럼 쓰기](14-practice-expert.md) | 과제와 점검표, 내 메모로 주간정리, 매주 루틴 |

낯선 명령이 나오면 [명령어 사전](command-reference.md)에서 찾아보세요. 이 강좌의 명령과 옵션, 기호를 뜻과 함께 모아 두었습니다.

## 연습 자료

실습은 `~/hello-ai-연습/터미널` 폴더에서 아래 메모로 합니다. **모두 지어낸 내용**입니다(작은 카페 「모퉁이 카페」 직원 서연의 한 주).
2장에서는 주간회의 메모만 넣습니다. 임시회의 메모는 13장에서 넣습니다.

| 파일 | 내용 |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | 뒤죽박죽 주간회의 메모 |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) | 숨은 지시가 든 메모(13장 안전 실험용) |

이 가이드가 실제 실행으로 만든 **결과물**도 공개합니다. 내 결과와 비교해 보세요. 같은 요청이어도 모양은 조금씩 다릅니다.

| 장 | 결과물 |
|---|---|
| 4 | [회의록](/practice/cli/results/4장-회의록.txt) |
| 8 | [CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) |
| 9 | [스킬 meeting-notes](/practice/cli/results/9장-스킬-meeting-notes.txt) |
| 10 | [주간정리.sh](/practice/cli/results/10장-주간정리.sh.txt) · [스크립트로 만든 회의록](/practice/cli/results/10장-회의록-스크립트로.txt) |
| 11 | [설정 파일](/practice/cli/results/11장-settings.json.txt) |

터미널 없이 쓰고 싶다면 [Claude Code 앱 가이드](/guide/20-claude-code/)를 보세요. 데스크톱 앱으로 같은 카페 메모를 정리합니다. 계정·요금제·채팅 기능은 [2단계 · Claude 가이드](/guide/10-claude/)에서 설명합니다.
