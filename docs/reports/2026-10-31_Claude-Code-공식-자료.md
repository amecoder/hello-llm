---
type: research
project: hello-llm
created: 2026-10-31
status: active
read: false
tags: [리서치, Claude-Code, 20-claude-code, 공식문서, 사실확인, 재사용]
---

# Claude Code 공식 자료 사실 확인 (2026-10-31)

## 이 문서의 용도

- 3단계 `guide/20-claude-code/`(Claude 데스크톱 앱의 **Code 탭**부터 시작하고 터미널은 뒤 장, 개인 구독 계정 기준, 조직 배포·API 개발 제외)를 쓸 때 근거로 쓰는 **사실 확인 리포트**다. 본문에는 이 문서에서 **VERIFIED** 로 표시한 값만 옮긴다.
- **확인 방법**: 공식 문서 사이트의 목록(`https://code.claude.com/docs/llms.txt`)에서 초보 독자에게 필요한 문서 56개를 골라 마크다운 원문을 내려받았다. 여섯 갈래(A~F)로 나눠 사실을 뽑았고, **표의 영어 인용 1,179개를 `docs/tools/cc-verify.py` 로 원문과 대조해 모두 일치**함을 확인했다(불일치 0. 마크다운 강조·역슬래시·링크 주소만 양쪽에서 걷어 내고 비교).
- **표기 약속**
  - 근거 칸의 이름(slug) = `https://code.claude.com/docs/en/<이름>` (`plugins_install` 은 `plugins/install`)
  - 상태: **VERIFIED** = 원문에서 직접 읽음 / **충돌** = 문서끼리 다름 / **UNVERIFIED** = 찾지 못함
  - 확인일은 모두 2026-10-31 (자료 내려받은 날)
- **주의 1 — 문서 대부분이 터미널(CLI) 기준이다.** `/` 명령, Shift+Tab, Esc 두 번 같은 조작은 터미널 설명이다. 데스크톱 Code 탭에서 같은 방법이 통하는지는 `desktop` 문서(부록 B)에 있는 것만 확실하다. 나머지는 **실제 화면으로 확인**한다.
- **주의 2 — 화면이 두 가지다.** 문서가 새 화면(current layout)과 예전 화면(earlier layout)을 나눠 설명한다. 메뉴 이름도 버전마다 바뀐 흔적이 있다(「Add connectors」↔「Connectors > Browse connectors」 등). **한국어 화면 이름은 영어 문서로 알 수 없으니 캡처로 확정**한다.
- **주의 3 — 요금·사용 한도 숫자는 이 문서들에 없다.** 요금은 claude.com/pricing 으로만 연결된다. 2단계 Claude 리포트(`2026-10-26_Claude-공식-자료.md`)의 요금 값과 이어 쓴다.

## 결론 — 가이드에 꼭 반영할 것

1. **유료 구독이 필요하다.** Claude Code는 Pro·Max·Ultra·Team·Enterprise 구독에서 쓴다. 무료 플랜은 안 된다(A40, setup). 약관 페이지는 무료 사용자도 함께 적어 어긋나 보이지만(A41, 충돌), 본문은 setup 문장을 쓴다. Ultra는 예전 Max 20x, Max는 예전 Max 5x의 새 이름이다(A47).
2. **데스크톱 앱에 Claude Code가 들어 있다.** 앱 사이드바 위쪽 **Code** 탭에서 쓰고, Node.js나 터미널 설치가 필요 없다(desktop-quickstart). 첫 세션은 입력창 아래 줄에서 환경(Local)과 폴더(**Open folder…**)를 고르고, 모델을 고른 뒤 할 일을 적는다.
3. **허락 방식(권한 모드)이 핵심 안전장치다.** Manual(바꾸기 전에 묻기)·Accept edits(파일 수정은 묻지 않음, 작업 폴더 안 삭제 명령 포함)·Plan(고치지 않고 계획만)·Auto(분류기가 위험한 것을 막음). **Auto는 안전 보장이 아니다**(C35·C36). 터미널·VS Code는 최근 버전부터 Auto로 시작하고(C40), 데스크톱의 시작 모드는 문서에 없다(C41, 화면 확인).
4. **되돌리기에는 한계가 있다.** 체크포인트(되감기)는 Claude의 파일 편집 도구가 고친 파일만 되돌린다. 명령(Bash)으로 바뀐 파일, 서브에이전트가 고친 파일, 내가 직접 고친 파일, 데이터베이스·배포 같은 바깥 변화는 되돌릴 수 없다(부록 C 체크포인트 절). "Ctrl+Z처럼 다 된다"고 쓰지 않는다.
5. **변경 확인은 diff 보기로.** 수정 뒤 `+12 -1` 같은 표시를 누르면 파일별 변경을 보고 줄마다 댓글을 달 수 있다. Claude가 그 댓글을 읽고 고친다(B 부록, desktop-quickstart).
6. **CLAUDE.md는 '부탁'이지 '강제'가 아니다.** 프로젝트 규칙을 적어 두는 파일로, 매 세션 읽힌다. 반드시 지켜야 할 일은 권한 설정·훅으로 한다(부록 D).
7. **MCP·플러그인은 내 권한으로 코드를 실행한다.** 믿을 수 없는 서버·플러그인은 설치하지 않는다. 마켓플레이스 이름이 안전 보증이 아니다(부록 D 보안 절).
8. **예약 작업은 세 가지다.** 데스크톱 예약(앱이 열려 있고 컴퓨터가 깨어 있어야 함, 내 파일 사용), 클라우드 예약(예전 이름 routines, 컴퓨터가 꺼져도 돎, 최소 1시간 간격), 터미널 `/loop`(열린 세션 안에서만, 7일 뒤 만료). 반드시 구분해 쓴다(부록 E).
9. **클라우드 세션은 GitHub 연결이 전제다.** GitHub가 없는 독자에게는 로컬과 Remote Control을 안내한다(부록 E).
10. **데이터**: 개인 계정(Free·Pro·Max·Ultra)은 학습 허용 여부를 고를 수 있고, 허용하면 5년·허용하지 않으면 30일 보관한다(E224~E229). 내 컴퓨터에도 세션 기록이 기본 30일 평문으로 남는다(E232). 프롬프트 인젝션 경고와 "완전한 안전은 없다"를 함께 쓴다(부록 E 보안 절).

## 충돌·미확인 목록 — 본문에 쓰기 전 화면으로 확인

| # | 내용 | 처리 |
|---|---|---|
| A41 | 무료 플랜: setup은 불가, 약관은 Free도 대상처럼 적음 | setup 문장(A40)을 쓴다 |
| A16 | 문서가 채팅과 Claude Code의 차이를 직접 비교하지 않음 | 차이 설명은 가이드 필자의 설명임을 구분 |
| A98 | 403 오류 해결은 desktop 문서 소관 | 부록 B에서 확인 |
| A144 | 관리 기기의 설치·권한 | 범위 밖 |
| B153 | 데스크톱 예약 작업 진입 메뉴 이름 | desktop-scheduled-tasks·화면으로 확인 |
| C41 | 데스크톱 세션의 시작 권한 모드 | 화면 확인 |
| C65 | 데스크톱 모드 선택기의 라벨 전체 | 화면 확인 |
| C93 | 데스크톱에서 되감기 메뉴를 여는 법 | 화면 확인 |
| C136 | "탐색→계획→코딩" 절이 이 판 best-practices에 없음 | 계획 모드는 permission-modes·common-workflows 근거로 |
| D148 | 데스크톱에서 MCP 추가 메뉴(Connectors) 위치 | 화면 확인 |
| E278 | 데스크톱 병렬 세션·워크트리 버튼 위치 | 부록 B·화면 확인 |
| E279 | 플랜별 사용 한도·모델 요금 숫자 | 요금 페이지·화면 확인 |
| E280 | 데스크톱에서 클라우드로 보내는 화면 절차 | 부록 B·화면 확인 |

가벼운 문서 간 차이: Plan 모드를 desktop은 "소스 코드를 고치지 않고", quickstart는 "어떤 파일도 고치지 않고"라고 쓴다 → 본문은 약한 쪽. Auto 설명도 두 문서가 조금 다르다(부록 B 주의).

## 가이드 목차 제안 (12장, 장 번호 401~)

| 장 | 제목 | 주로 쓰는 부록 |
|---|---|---|
| 1 | Claude Code는 무엇이고 어디서 쓰나 — 채팅과 다른 점·쓰는 곳·요금제 | A |
| 2 | 데스크톱 앱 설치와 첫 세션 — 설치·로그인·Code 탭·폴더·첫 요청 | A, B |
| 3 | 화면 둘러보기 — 입력창 아래 줄·세션 목록·창 배치·첨부·명령 메뉴 | B |
| 4 | 허락과 되돌리기 — 권한 모드·변경 확인(diff)·체크포인트의 한계 | B, C |
| 5 | 잘 맡기는 법 — 확인 기준 주기·구체적으로·중간에 방향 바꾸기·계획 먼저 | C |
| 6 | 프로젝트 기억 — CLAUDE.md·자동 메모리 | D |
| 7 | 스킬·플러그인·외부 도구 — 스킬·플러그인·MCP·안전하게 설치하기 | D, B |
| 8 | 여러 일 동시에·클라우드·예약 — 병렬 세션·클라우드·예약 3종·휴대폰 | E, B |
| 9 | 비용·데이터·안전 — 사용량·모델 고르기·학습 설정·보관 기간·프롬프트 인젝션 | E |
| 10 | 터미널에서 쓰기 — 설치·로그인·기본 명령·문제 해결 | F |
| 11 | 실습 과제 | — |
| 12 | 전문가처럼 쓰기 | — |

- 독자는 2단계까지 읽은 **비개발자**다. 코드·Git 용어는 처음 나올 때 풀이하고, 연습은 코드가 아니라 **문서·메모 폴더**로 할 수 있게 짠다(예: 1단계 「독서 모임 준비하기」 예시 파일).
- 2단계 Claude 가이드(채팅·Cowork)와 겹치는 계정·요금 설명은 링크로 잇는다.
- 화면 캡처는 사용자의 유료 계정으로 찍고, 프로젝트·대화 이름은 화면에서만 가린다.

## 부록 구성

| 부록 | 범위 | 행 수 |
|---|---|---|
| A | 개요·쓰는 곳·요금제·설치·로그인·첫 세션·기능 제공 범위·약관 | 144 |
| B | 데스크톱 앱 Code 탭 화면 전체(입력창 줄·세션·창·diff·권한·플러그인·문제 해결) | 180 |
| C | 동작 원리·권한 모드·권한 규칙·체크포인트·맥락 창·잘 쓰는 법·자주 하는 일 | 169 |
| D | CLAUDE.md·메모리·기능 고르기·스킬·MCP·플러그인·서브에이전트·훅 | 208 |
| E | 병렬 세션·클라우드·휴대폰·원격 제어·예약 3종·비용·모델·빠른 모드·데이터·보안·샌드박스 | 280 |
| F | 터미널 설치·기본 조작·명령·음성·VS Code·Chrome·컴퓨터 사용·문제 해결·용어 | 198 |

---

# 부록 A


출처: https://code.claude.com/docs/en/<slug> (overview, platforms, desktop-quickstart, setup, authentication, desktop-linux, desktop-wsl, feature-availability, legal-and-compliance). 추출일 2026-10-31.

## 1. Claude Code가 무엇인가

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A1 | Claude Code는 코드가 들어 있는 폴더를 읽고, 파일을 고치고, 명령을 실행하며, 개발 도구와 연결되는 "에이전트형(스스로 여러 단계를 진행하는) 코딩 도구"이다. | VERIFIED | overview | "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." | — |
| A2 | 공식 설명은 Claude Code를 기능 만들기, 버그 고치기, 개발 작업 자동화를 돕는 AI 코딩 비서라고 한다. | VERIFIED | overview | "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." | — |
| A3 | 여러 파일과 도구에 걸쳐 작업할 수 있다고 설명한다. | VERIFIED | overview | "It understands your entire codebase and can work across multiple files and tools to get things done." | — |
| A4 | 원하는 것을 평소 말로 설명하면 계획을 세우고, 여러 파일에 코드를 쓰고, 동작을 확인한다고 한다. | VERIFIED | overview | "Claude Code plans the approach, writes the code across multiple files, and verifies it works." | — |
| A5 | 버그가 생기면 오류 메시지를 붙여 넣거나 증상을 말로 설명하면 된다. | VERIFIED | overview | "For bugs, paste an error message or describe the symptom." | — |
| A6 | 테스트 작성, 린트(코드 모양 검사) 오류 수정, 충돌 해결, 업데이트, 릴리스 노트 작성 같은 귀찮은 반복 작업을 맡길 수 있다. | VERIFIED | overview | "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." | — |
| A7 | Claude Code는 git(변경 이력 관리 도구)과 직접 연동된다. | VERIFIED | overview | "Claude Code works directly with git." | — |
| A8 | 변경 사항 스테이징, 커밋 메시지 작성, 브랜치 생성, 풀 리퀘스트 열기까지 할 수 있다. | VERIFIED | overview | "It stages changes, writes commit messages, creates branches, and opens pull requests." | — |
| A9 | 어디서 쓰든 같은 엔진(핵심 프로그램)이 돌아가고, 화면(표면)마다 쓰는 방식에 맞게 다듬어져 있다. | VERIFIED | platforms | "Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." | — |
| A10 | 표면이 달라도 저장소의 CLAUDE.md, 설정, MCP 서버가 모두에서 통한다고 한다. | VERIFIED | overview | "so your repo's CLAUDE.md files, settings, and MCP servers work across all of them." | — |
| A11 | 같은 프로젝트에서 표면을 섞어 쓸 수 있다. | VERIFIED | platforms | "You can mix surfaces on the same project." | — |
| A12 | 설정, 프로젝트 메모리, MCP 서버는 내 컴퓨터에서 도는(로컬) 표면끼리 공유된다. | VERIFIED | platforms | "Configuration, project memory, and MCP servers are shared across the local surfaces." | — |
| A13 | 세션은 한 화면에 묶여 있지 않고, 상황에 따라 표면 사이로 옮길 수 있다고 한다. | VERIFIED | overview | "Sessions aren't tied to a single surface." | — |
| A14 | 데스크톱 앱에는 채팅(Chat), Cowork, Claude Code가 함께 들어 있고, Claude Code는 그중 Code 탭이다. | VERIFIED | desktop-linux | "The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." | Chat, Cowork, Code |
| A15 | 데스크톱 앱에서는 터미널 없이 폴더의 코드 작업을 맡기고 바뀐 내용을 직접 검토할 수 있다. | VERIFIED | desktop-quickstart | "You can ask Claude to work on the code in a folder on your computer, then review the changes yourself, without using a terminal." | — |
| A16 | 문서는 채팅 AI와 Claude Code의 차이를 직접 비교해 주지 않는다. 데스크톱 앱 문서는 채팅·Cowork 사용법은 Help Center를 보라고만 안내한다. | UNVERIFIED | desktop-quickstart | "Claude Code is in the **Code** tab at the top of the app's sidebar." | **Code** |

## 2. 어디서 쓰나 — 표면(화면) 종류와 고르는 기준

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A17 | 표면은 터미널(CLI), IDE 확장, 데스크톱 앱, 웹 등 여러 가지다. | VERIFIED | overview | "Claude Code runs on several surfaces: the terminal, IDE extensions, a desktop app, and the web." | — |
| A18 | CLI는 터미널 작업, 스크립트, 원격 서버에 알맞다. | VERIFIED | platforms | "Terminal workflows, scripting, remote servers" | — |
| A19 | 데스크톱은 변경 내용을 눈으로 검토하고, 세션을 나란히 돌리고, 설정이 단순한 쪽에 알맞다. | VERIFIED | platforms | "Visual review, parallel sessions, managed setup" | — |
| A20 | VS Code 확장은 터미널로 전환하지 않고 VS Code 안에서 쓰고 싶을 때 알맞다. | VERIFIED | platforms | "Working inside VS Code without switching to a terminal" | — |
| A21 | VS Code 확장은 변경 내용 비교(diff), @멘션, 계획 검토, 대화 기록을 에디터 안에서 제공한다. | VERIFIED | overview | "The VS Code extension provides inline diffs, @-mentions, plan review, and conversation history directly in your editor." | — |
| A22 | JetBrains 계열 IDE에서 쓰는 플러그인도 있다. | VERIFIED | overview | "A plugin for IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs with interactive diff viewing and selection context sharing." | — |
| A23 | JetBrains 플러그인은 Claude Code CLI를 따로 설치해야 한다. | VERIFIED | overview | "The plugin requires the Claude Code CLI, installed separately" | — |
| A24 | 웹 버전은 오래 걸리는 작업이나 내 컴퓨터를 꺼도 이어져야 하는 작업에 알맞다. | VERIFIED | platforms | "Long-running tasks that don't need much steering, or work that should continue when you're offline" | — |
| A25 | 웹은 클라우드에서 돌아서 연결을 끊어도 작업이 계속된다. | VERIFIED | platforms | "The web runs in the cloud, so tasks keep going after you disconnect." | — |
| A26 | 웹은 설치 없이 브라우저에서 쓴다. | VERIFIED | overview | "Run Claude Code in your browser with no local setup." | — |
| A27 | 웹에서는 내 컴퓨터에 없는 저장소도 다루고 여러 작업을 동시에 돌릴 수 있다. | VERIFIED | overview | "Kick off long-running tasks and check back when they're done, work on repos you don't have locally, or run multiple tasks in parallel." | — |
| A28 | 모바일(휴대폰)은 컴퓨터를 떠나 있을 때 작업을 시작하고 지켜보는 용도다. | VERIFIED | platforms | "Starting and monitoring tasks while away from your computer" | — |
| A29 | 모바일은 같은 클라우드 세션이나, Remote Control로 연결한 내 컴퓨터의 세션으로 들어가는 얇은 창구이고, Dispatch로 데스크톱에 작업을 보낼 수 있다. | VERIFIED | platforms | "Mobile is a thin client into those same cloud sessions or into a local session via Remote Control, and can send tasks to Desktop with Dispatch." | — |
| A30 | CLI는 터미널 중심 작업에 가장 완전한 표면이고, 스크립트와 Agent SDK는 CLI에서만 된다. | VERIFIED | platforms | "The CLI is the most complete surface for terminal-native work: scripting and the Agent SDK are CLI-only." | — |
| A31 | 데스크톱과 IDE 확장은 일부 CLI 전용 기능을 내주고 시각적 검토와 에디터 연동을 얻는다. | VERIFIED | platforms | "Desktop and the IDE extensions trade some CLI-only features for visual review and tighter editor integration." | — |
| A32 | 터미널을 쓰고 싶지 않다면 데스크톱이 같은 엔진을 그래픽 화면으로 제공한다. | VERIFIED | platforms | "gives you the same engine with a graphical interface." | — |
| A33 | 데스크톱 앱은 IDE나 터미널 밖에서 Claude Code를 돌리는 독립 앱이다. | VERIFIED | overview | "A standalone app for running Claude Code outside your IDE or terminal." | — |
| A34 | 데스크톱 앱은 변경 비교, 세션 나란히 실행, 반복 작업 예약, 클라우드 세션 시작을 지원한다. | VERIFIED | overview | "Review diffs visually, run multiple sessions side by side, schedule recurring tasks, and start cloud sessions." | — |
| A35 | 휴대폰에서 클라우드 세션을 쓰는 앱은 iOS와 Android용 Claude 앱이다. | VERIFIED | platforms | "Cloud sessions from the Claude app for iOS and Android" | — |
| A36 | Dispatch는 휴대폰 Claude 앱에서 작업을 메시지로 보내면 내 컴퓨터(데스크톱)에서 돌아가는 방식이다. | VERIFIED | platforms | "Message a task from the Claude mobile app" | — |
| A37 | 데스크톱 예약 작업은 내 컴퓨터에서 돌고 로컬 파일과 도구에 직접 접근한다. | VERIFIED | overview | "run on your machine, with direct access to your local files and tools" | — |
| A38 | 클라우드 예약 작업은 클라우드에서 돌아서 컴퓨터가 꺼져 있어도 계속 실행된다. | VERIFIED | overview | "run in the cloud, so they keep running even when your computer is off." | — |

## 3. 구독 요금제와 로그인 방식

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A39 | Claude Code를 쓰려면 Pro, Max, Ultra, Team, Enterprise 또는 Console 계정이 필요하다. | VERIFIED | setup | "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." | — |
| A40 | 무료 claude.ai 플랜에는 Claude Code 이용 권한이 없다. | VERIFIED | setup | "The free claude.ai plan does not include Claude Code access." | — |
| A41 | (충돌) 약관 페이지는 구독 로그인(OAuth) 대상에 Free를 포함해 적고 소비자 약관을 Free 사용자에게도 적용한다고 쓴다. 무료 플랜 이용 여부는 setup과 어긋나 보인다. | 충돌 | legal-and-compliance | "**OAuth authentication** is intended exclusively for purchasers of Claude Free, Pro, Max, Ultra, Team, and Enterprise subscription plans and is designed to support ordinary use of Claude Code and other native Anthropic applications." | — |
| A42 | 데스크톱 앱은 설치 뒤 Claude를 실행해 로그인하고 Code 탭을 누르면 시작한다. 같은 안내에 유료 구독이 필요하다고 덧붙어 있다(Console 계정은 적히지 않음). | VERIFIED | overview | "After installing, launch Claude, sign in, and click the **Code** tab to start coding." | **Code** |
| A43 | 개인은 claude.ai 계정으로 로그인하고, 팀은 Teams/Enterprise나 Console, 클라우드 사업자를 쓸 수 있다. | VERIFIED | authentication | "Individual users can log in with a claude.ai account, while teams can use Claude for Teams or Enterprise, the Claude Console, or a cloud provider like Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry." | — |
| A44 | Pro, Max, Ultra 구독자는 claude.ai 계정으로 로그인한다. | VERIFIED | authentication | "**Claude Pro, Max, or Ultra subscription**: log in with your claude.ai account." | — |
| A45 | Teams/Enterprise 사용자는 팀 관리자가 초대한 claude.ai 계정으로 로그인한다. | VERIFIED | authentication | "**Claude for Teams or Enterprise**: log in with the claude.ai account your team admin invited you to." | — |
| A46 | Console은 API 사용량 기준 과금을 선호하는 조직을 위한 방식이다. | VERIFIED | authentication | "For organizations that prefer API-based billing, you can set up access through the Claude Console." | — |
| A47 | Ultra는 예전 Max 20x의 새 이름이고, Max는 예전 Max 5x의 새 이름이다. | VERIFIED | feature-availability | "Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." | — |
| A48 | Claude Code 기능은 Max와 Ultra가 같다. | VERIFIED | feature-availability | "In Claude Code, Max and Ultra have the same features" | — |
| A49 | 구독 계정으로 로그인해야 하는 기능에는 클라우드 세션, 모바일, 데스크톱, 클라우드 예약 작업, Remote Control, 음성 입력 등이 있고, API 키나 외부 사업자로는 쓸 수 없다. | VERIFIED | feature-availability | "These require signing in with a claude.ai account and are not reachable with an Anthropic Console API key or from a third-party provider:" | — |
| A50 | 데스크톱(Code 탭)은 구독 필요 기능이지만, 외부 클라우드 사업자·게이트웨이 설정에서는 일부 예외(Claude Desktop on 3P 등)가 있다. | VERIFIED | feature-availability | "Desktop is the partial exception:" | — |
| A51 | 데스크톱 앱이 아마존 베드록 등 외부 사업자나 자체 게이트웨이에서 Code 탭을 돌리는 별도 구성이 있다(조직용). | VERIFIED | feature-availability | "also runs the Code tab on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, or a self-hosted LLM gateway." | — |
| A52 | Slack 연동은 Pro, Max, Ultra 플랜, 컴퓨터 제어(computer use)도 Pro, Max, Ultra 플랜이다. | VERIFIED | feature-availability | ": Pro, Max, and Ultra plans" | — |
| A53 | "Admin-enabled"는 조직 관리자가 켜기 전까지 꺼져 있다는 뜻이다. | VERIFIED | feature-availability | "and "Admin-enabled" means the feature is off until an organization admin turns it on." | — |
| A54 | 클라우드 세션은 Enterprise에서 프리미엄 좌석 또는 Chat + Claude Code 좌석이 필요하다. | VERIFIED | feature-availability | "On Enterprise, requires a premium seat or a Chat + Claude Code seat." | — |
| A55 | 광고된 Pro, Max, Ultra 사용 한도는 일반적인 개인 사용을 전제로 한다. | VERIFIED | legal-and-compliance | "Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." | — |
| A56 | 약관: Team, Enterprise, API 사용자는 상업 약관, Free, Pro, Max, Ultra 사용자는 소비자 약관이 적용된다. | VERIFIED | legal-and-compliance | "Your use of Claude Code is subject to:" | — |
| A57 | 다른 사람의 서비스에 Claude.ai 로그인을 넣거나 무료·Pro·Max·Ultra 자격 증명으로 대신 요청을 중계하는 것은 허용되지 않는다. | VERIFIED | legal-and-compliance | "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." | — |
| A58 | 구독이 있는데 환경변수 ANTHROPIC_API_KEY가 설정돼 있으면, 승인한 뒤에는 구독 대신 API 키가 쓰인다. | VERIFIED | authentication | "If you have an active Claude subscription but also have `ANTHROPIC_API_KEY` set in your environment, Claude Code uses the API key once you approve it." | — |
| A59 | 구독으로 되돌리려면 API 키 설정을 해제하고 `/status`로 어떤 방식이 쓰이는지 확인한다. | VERIFIED | authentication | "Run `unset ANTHROPIC_API_KEY` to fall back to your subscription, and check `/status` to confirm which method is active." | — |
| A60 | 데스크톱 앱과 클라우드 세션은 API 키 환경변수를 읽지 않고 OAuth(웹 로그인)를 쓴다. 단 외부 추론 설정을 쓰는 데스크톱은 예외다. | VERIFIED | authentication | "Claude Desktop and cloud sessions do not call `apiKeyHelper` or read these environment variables: they use OAuth, except desktop sessions running a" | — |
| A61 | 클라우드 세션은 항상 구독 자격 증명을 쓴다. | VERIFIED | authentication | "always use your subscription credentials. If you set `ANTHROPIC_API_KEY` or `ANTHROPIC_AUTH_TOKEN` in the cloud environment, it doesn't override your subscription credentials." | — |
| A62 | 로그아웃 후 다시 로그인하려면 터미널에서 `/logout`을 쓴다. | VERIFIED | authentication | "To log out and re-authenticate, type `/logout` at the Claude Code prompt." | — |
| A63 | 로그인이 곧 만료되면 `/login`으로 갱신하라는 경고가 뜬다(CLI). | VERIFIED | authentication | "Run `/login` to renew." | — |
| A64 | macOS에서는 로그인 정보가 암호화된 키체인(Keychain)에 저장된다. | VERIFIED | authentication | "On macOS, credentials are stored in the encrypted macOS Keychain." | — |

## 4. 설치 — 데스크톱 앱 (macOS · Windows · Linux · WSL)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A65 | macOS용 설치 파일은 인텔과 Apple 실리콘 모두를 지원하는 하나의 빌드다. | VERIFIED | desktop-quickstart | "Universal build for Intel and Apple Silicon" | — |
| A66 | Windows 설치 파일은 x64 프로세서용이다. | VERIFIED | desktop-quickstart | "For x64 processors" | — |
| A67 | Windows ARM64 컴퓨터는 ARM64용 설치 파일을 따로 받는다. | VERIFIED | desktop-quickstart | "For Windows ARM64, download the" | — |
| A68 | Linux용은 Ubuntu와 Debian에서 apt 또는 .deb로 설치하며 베타(시험판)이다. | VERIFIED | desktop-quickstart | "apt or .deb for Ubuntu and Debian" | Get Claude for Linux (beta) |
| A69 | Linux 데스크톱 앱 지원은 베타 단계다. | VERIFIED | desktop-linux | "Linux support for the Claude desktop app is in beta." | — |
| A70 | macOS와 Windows는 내려받은 설치 프로그램을 실행해 설치한다. | VERIFIED | desktop-quickstart | "On macOS and Windows, download the installer from the links above and run it." | — |
| A71 | 설치 후 macOS는 응용 프로그램(Applications) 폴더, Windows는 시작 메뉴, Linux는 앱 런처에서 Claude를 열고 Anthropic 계정으로 로그인한다. | VERIFIED | desktop-quickstart | "Launch Claude from your Applications folder on macOS, the Start menu on Windows, or your application launcher on Linux, then sign in with your Anthropic account." | — |
| A72 | 데스크톱 앱에는 Claude Code가 들어 있어서 Node.js나 CLI를 따로 설치하지 않아도 Code 탭을 쓸 수 있다. | VERIFIED | desktop-quickstart | "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." | **Code** |
| A73 | Linux 데스크톱 앱은 Ubuntu 22.04 이상 또는 Debian 12 이상 같은 Debian 계열에서만 공식 지원된다. | VERIFIED | desktop-linux | "Other Debian-based distributions that meet these requirements may work but aren't officially tested." | — |
| A74 | Fedora, RHEL 등 Debian 계열이 아닌 배포판은 아직 데스크톱 앱 대신 CLI를 쓴다. | VERIFIED | desktop-linux | "only Debian-based distributions are supported today." | — |
| A75 | Linux에서 설치 명령은 apt update 후 apt install claude-desktop이다(저장소 등록 선행). | VERIFIED | desktop-linux | "sudo apt update && sudo apt install claude-desktop" | — |
| A76 | Linux 앱은 스스로 업데이트하지 않고 시스템 업데이트로 받는다. | VERIFIED | desktop-linux | "The desktop app doesn't update itself on Linux." | — |
| A77 | Linux 앱의 로그인은 claude.ai 구독 또는 조직 SSO로 한다. | VERIFIED | desktop-linux | "The Linux app signs in the same way as on macOS and Windows: with a claude.ai subscription, or through your organization's SSO." | — |
| A78 | Linux에서 로그인 정보는 데스크톱의 키링(GNOME Keyring, KDE Wallet)에 저장된다. | VERIFIED | desktop-linux | "Claude Desktop saves your sign-in in your desktop's keyring, such as GNOME Keyring or KDE Wallet." | — |
| A79 | 키링에 접근하지 못하면 로그인이 저장되지 않아 실행할 때마다 다시 로그인한다. | VERIFIED | desktop-linux | "If it can't reach an unlocked keyring, your sign-in isn't saved and you sign in again each time you launch the app." | — |
| A80 | Linux 베타에서는 음성 입력(받아쓰기)이 안 된다. | VERIFIED | desktop-linux | "voice input isn't available in the Linux desktop app." | — |
| A81 | Linux에서 Cowork는 QEMU와 KVM으로 가상 머신을 띄워 작업을 돌린다. | VERIFIED | desktop-linux | "On Linux, Cowork runs those tasks in a virtual machine that the desktop app hosts with QEMU and KVM." | — |
| A82 | Windows에서는 Code 탭이 Windows 대신 WSL 2 안에서 세션을 돌릴 수 있다. | VERIFIED | desktop-wsl | "On Windows, the Code tab can run a session inside a WSL 2 distribution instead of on Windows itself." | **WSL** |
| A83 | 저장소가 WSL 배포판 안에 있을 때 WSL 세션을 쓰라고 권한다. | VERIFIED | desktop-wsl | "Use a WSL session when your repository lives inside the distribution's filesystem." | — |
| A84 | WSL 1은 지원되지 않는다. | VERIFIED | desktop-wsl | "WSL 1 isn't supported." | — |
| A85 | WSL 세션에는 배포판이 한 개 이상 설치돼 있어야 한다. | VERIFIED | desktop-wsl | "At least one installed distribution (for example, Ubuntu)." | — |
| A86 | 배포판 안에 git이 설치돼 있어야 한다. | VERIFIED | desktop-wsl | "`git` installed inside the distribution." | — |
| A87 | WSL 폴더에서 첫 세션을 열면 작업 공간 신뢰(trust) 대화상자가 뜬다. | VERIFIED | desktop-wsl | "The first session in a folder shows the workspace trust dialog." | — |
| A88 | 한 배포판에서 신뢰한 폴더는 다른 배포판이나 같은 경로의 Windows 폴더에서는 신뢰되지 않는다. | VERIFIED | desktop-wsl | "A folder you trust in one distribution isn't trusted in another distribution or at the same path on Windows." | — |
| A89 | WSL 세션에서는 플러그인을 쓸 수 없다. | VERIFIED | desktop-wsl | "not available in WSL sessions" | — |
| A90 | WSL 세션의 파일 창에서는 파일을 볼 수만 있고 편집은 Claude에게 시켜야 한다. | VERIFIED | desktop-wsl | "but can't edit them there, so ask Claude to make the changes" | — |
| A91 | 회사 등이 관리하는 기기에서는 WSL 세션이 막혀 있을 수 있다. | VERIFIED | desktop-wsl | "On devices managed by an organization, WSL sessions may be unavailable." | — |
| A92 | WSL 2를 쓰는 Windows 사용자는 Windows 데스크톱 앱을 설치하고 배포판 안에서 세션을 돌리라고 안내한다. | VERIFIED | desktop-linux | "If you work on Windows with WSL 2, install the Windows desktop app and run sessions inside your distribution; see" | — |

## 5. Code 탭 열기와 막혔을 때

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A93 | Claude Code는 앱 사이드바 위쪽의 Code 탭에 있다. | VERIFIED | desktop-quickstart | "Claude Code is in the **Code** tab at the top of the app's sidebar." | **Code** |
| A94 | 탭이 아이콘만 보이면 위에 마우스를 올려 이름을 확인한다. | VERIFIED | desktop-quickstart | "If the tabs show only icons, hover over one to see its name." | **Code** |
| A95 | Code를 눌렀을 때 안내나 오류가 뜨면 아래 항목대로 푼다. | VERIFIED | desktop-quickstart | "If a prompt or an error appears after you click **Code**, follow the matching fix:" | **Code** |
| A96 | "업그레이드하라"는 안내는 유료 플랜에 먼저 가입해야 한다는 뜻이다. | VERIFIED | desktop-quickstart | "**Prompt to upgrade**: you need to" | — |
| A97 | "온라인에서 로그인하라"는 안내가 뜨면 로그인을 마친 뒤 앱을 다시 시작한다. | VERIFIED | desktop-quickstart | "**Prompt to sign in online**: complete the sign-in and restart the app" | — |
| A98 | 403 오류는 desktop 문서의 "인증 문제 해결" 절을 보라고 연결된다(해결 내용은 이 그룹 문서에 없음). | UNVERIFIED | desktop-quickstart | "**403 error**: see" | — |

## 6. 첫 세션 — 환경, 폴더, 모델, 첫 요청, 변경 검토

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A99 | 프롬프트 상자 아래 줄의 첫 번째 컨트롤이 환경 선택기이며, Local 묶음의 맨 위 항목을 고른다. | VERIFIED | desktop-quickstart | "click the first control, the environment selector, and select the top entry in the **Local** group." | **Local** |
| A100 | 환경 선택기 옆 프로젝트 폴더 컨트롤에서 폴더 열기를 눌러 프로젝트 폴더를 고른다. | VERIFIED | desktop-quickstart | "Then click the project folder control beside the environment selector, select **Open folder…**, and choose your project's directory." | **Open folder…** |
| A101 | 새 세션에서 환경이 안 보이면 이전 화면 배치(레이아웃)를 쓰는 것이다. | VERIFIED | desktop-quickstart | "If a new session shows no environment under your prompt box, you have the earlier layout." | — |
| A102 | 처음에는 잘 아는 작은 프로젝트로 시작하라고 권한다. | VERIFIED | desktop-quickstart | "Start with a small project you know well." | — |
| A103 | Cloud를 고르면 앱을 닫아도 이어지는 클라우드 세션이 된다. | VERIFIED | desktop-quickstart | "Run sessions in the cloud that continue even if you close the app." | **Cloud** |
| A104 | SSH를 고르면 내 서버, 클라우드 가상 머신, 개발 컨테이너 같은 원격 컴퓨터에 연결한다. | VERIFIED | desktop-quickstart | "Connect to a remote machine over SSH, such as your own servers, cloud VMs, or dev containers." | **SSH** |
| A105 | SSH 연결은 먼저 연결 정보를 추가해야 하고, 처음 연결할 때 원격 컴퓨터에 Claude Code가 자동 설치된다. | VERIFIED | desktop-quickstart | "Desktop installs Claude Code on the remote machine automatically the first time you connect." | **SSH** |
| A106 | WSL(Windows)을 고르면 Claude Code, 도구, git이 Linux 쪽에서 리눅스 경로로 실행된다. | VERIFIED | desktop-quickstart | "Claude Code, tools, and git execute on the Linux side with native paths." | **WSL** |
| A107 | 모델 선택기는 프롬프트 상자 아래 줄의 오른쪽 끝 쪽에 있고, 나중에 바꿀 수 있다. | VERIFIED | desktop-quickstart | "Select a model from the model picker toward the right end of the row under the prompt box." | — |
| A108 | 모델은 세션 중에도 모델 선택기에서 바꿀 수 있다. | VERIFIED | desktop-quickstart | "You can change the model later from the model picker." | — |
| A109 | 첫 요청 예시로 문서가 드는 문장: TODO 주석 하나 찾아 고치기. | VERIFIED | desktop-quickstart | "`Find a TODO comment and fix it`" | — |
| A110 | 첫 요청 예시: 메인 함수에 테스트 추가하기. | VERIFIED | desktop-quickstart | "`Add tests for the main function`" | — |
| A111 | 첫 요청 예시: 이 코드베이스용 CLAUDE.md 만들기. | VERIFIED | desktop-quickstart | "`Create a CLAUDE.md with instructions for this codebase`" | — |
| A112 | 세션은 코드에 관한 Claude와의 대화이고, 세션마다 자기 맥락과 변경 내용을 따로 기억한다. | VERIFIED | desktop-quickstart | "is a conversation with Claude about your code. Each session tracks its own context and changes." | — |
| A113 | Manual(수동) 모드에서는 Claude가 변경을 제안하고 내 승인을 기다린 뒤 적용한다. | VERIFIED | desktop-quickstart | "**Manual**: Claude proposes each change and waits for your approval before applying it" | — |
| A114 | Manual 모드에서는 바뀔 내용을 보여 주는 diff와 승인·거절 버튼이 나온다. | VERIFIED | desktop-quickstart | "Buttons to approve or decline each change" | — |
| A115 | Auto 모드는 분류기가 백그라운드에서 행동을 살펴 위험한 것만 묻지 않고 막는다. | VERIFIED | desktop-quickstart | "**Auto**: a classifier reviews actions in the background and blocks the risky ones instead of asking you." | — |
| A116 | Accept edits 모드는 파일 수정을 자동으로 받아들여 빠르게 반복한다. | VERIFIED | desktop-quickstart | "**Accept edits**: Claude auto-accepts file edits for faster iteration." | — |
| A117 | Manual 모드에서는 파일을 고치거나 명령을 실행하기 전에 Claude가 묻는다. | VERIFIED | desktop-quickstart | "**Manual**: Claude asks before editing files or running commands." | — |
| A118 | Plan 모드는 파일을 고치지 않고 접근 방식만 제안한다. 큰 개편 전에 유용하다. | VERIFIED | desktop-quickstart | "**Plan**: Claude proposes an approach without editing any files, which is useful before a large refactor." | — |
| A119 | 실행 중 멈추려면 중지 버튼, 고쳐 말하려면 입력하고 Enter를 누르면 멈추지 않고 전달된다. | VERIFIED | desktop-quickstart | "Click the stop button to interrupt immediately, or type a correction and press **Enter** to send it without stopping the running action." | **Enter** |
| A120 | 프롬프트에 @파일이름을 쓰면 특정 파일을 대화에 끌어올 수 있다. | VERIFIED | desktop-quickstart | "Type `@filename` in the prompt box to pull a specific file into the conversation." | — |
| A121 | / 를 입력하거나 +, Slash commands를 눌러 내장 명령과 스킬을 둘러볼 수 있다. | VERIFIED | desktop-quickstart | "Type `/` or click **+** → **Slash commands** to browse" | **+**, **Slash commands** |
| A122 | 파일을 고치면 `+12 -1` 같은 표시가 나타나고 누르면 변경을 파일별로 검토하며 특정 줄에 댓글을 남길 수 있다. | VERIFIED | desktop-quickstart | "review modifications file by file, and comment on specific lines." | — |
| A123 | Claude는 남긴 댓글을 읽고 다시 고친다. | VERIFIED | desktop-quickstart | "Claude reads your comments and revises." | — |
| A124 | 개발 서버를 실행하면 앱이 Browser 창에 열려 Claude가 실행 중인 화면을 볼 수 있다. | VERIFIED | desktop-quickstart | "When you run your dev server in the desktop, your app opens in the Browser pane, which can also" | — |

## 7. 터미널(CLI) 설치 — 후속 장 연결용

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A125 | CLI는 터미널에서 Claude Code를 직접 쓰는 완전한 기능의 도구다. | VERIFIED | overview | "The full-featured CLI for working with Claude Code directly in your terminal." | — |
| A126 | 터미널을 처음 쓰면 터미널 가이드가 여는 법과 명령 붙여 넣는 법을 알려 준다. | VERIFIED | overview | "shows how to open one and paste the command." | — |
| A127 | 설치 후 새 터미널 창에서 `claude --version`을 실행해 버전 번호가 나오면 설치된 것이다. | VERIFIED | overview | "A working installation prints a version number." | — |
| A128 | macOS, Linux, WSL 설치 명령(권장 방식). | VERIFIED | overview | "curl -fsSL https://claude.ai/install.sh" | — |
| A129 | Windows PowerShell 설치 명령. | VERIFIED | overview | "irm https://claude.ai/install.ps1" | — |
| A130 | PowerShell 프롬프트는 `PS C:\`, CMD는 `PS` 없는 `C:\`로 보인다. | VERIFIED | setup | "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." | — |
| A131 | 네이티브 설치는 백그라운드에서 자동 업데이트된다. | VERIFIED | setup | "Native installations automatically update in the background to keep you on the latest version." | — |
| A132 | Homebrew 설치는 자동 업데이트되지 않아 직접 `brew upgrade`를 해야 한다. | VERIFIED | setup | "Homebrew installations do not auto-update." | — |
| A133 | CLI 요구 사양: macOS 13.0 이상. | VERIFIED | setup | "macOS 13.0+" | — |
| A134 | CLI 요구 사양: Windows 10 1809 이상 또는 Windows Server 2019 이상. | VERIFIED | setup | "Windows 10 1809+ or Windows Server 2019+" | — |
| A135 | CLI 요구 사양: RAM 4GB 이상, x64 또는 ARM64 프로세서. | VERIFIED | setup | "4 GB+ RAM, x64 or ARM64 processor" | — |
| A136 | 인터넷 연결이 필요하다. | VERIFIED | setup | "internet connection required." | — |
| A137 | 네이티브 Windows에서는 Git for Windows가 권장되며, 없으면 PowerShell을 셸 도구로 쓴다. | VERIFIED | overview | "If Git for Windows is not installed, Claude Code uses PowerShell as the shell tool instead." | — |
| A138 | CLI는 첫 실행 때 브라우저를 열어 로그인하게 한다. | VERIFIED | authentication | "Claude Code opens a browser window for you to log in on first launch, except in cases such as these, where it can skip the login prompt:" | — |
| A139 | 브라우저가 자동으로 안 열리면 `c`를 눌러 로그인 주소를 복사해 브라우저에 붙여 넣는다. | VERIFIED | authentication | "If the browser doesn't open automatically, press `c` to copy the login URL to your clipboard, then paste it into your browser." | — |
| A140 | 로그인이 끝나면 `Login successful`이 표시된다. | VERIFIED | authentication | "When login completes, the terminal shows `Login successful` and prompts you to press `Enter` to continue." | — |

## 8. 기타 — 조직·법률·보안 (한 줄 메모)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A141 | 일반 사용자가 신경 쓸 항목: 보안 취약점은 HackerOne으로 신고한다. | VERIFIED | legal-and-compliance | "Anthropic manages our security program through HackerOne." | — |
| A142 | (조직용) HIPAA 구성에서는 클라우드 세션, Remote Control, 모바일 Claude Code, 외부 클라우드 경유는 보장 범위에서 빠진다. | VERIFIED | legal-and-compliance | "Under the HIPAA configuration, cloud sessions, Remote Control, Claude Code in the Claude mobile app, and Claude Code routed through a third-party cloud provider or a gateway aren't covered." | — |
| A143 | 로컬에서 도는 CLI와 모든 로컬 기능은 어떤 모델 제공자에서도 동작한다. | VERIFIED | feature-availability | "The Claude Code CLI and everything that runs locally work on every provider." | — |
| A144 | 관리 기기에서는 설치·권한 설정을 관리자가 정할 수 있다(조직 배포는 이 가이드 범위 밖). | UNVERIFIED | desktop-wsl | "On devices managed by an organization, WSL sessions may be unavailable." | — |

## 가이드에 쓸 때 주의

- **무료 플랜 충돌**: setup은 "무료 claude.ai 플랜은 Claude Code 불가"라고 하고, legal-and-compliance는 Free를 구독 로그인(OAuth)·소비자 약관 대상에 함께 적는다(A40 vs A41). 가이드는 setup의 명시 문장(A40)을 쓰고, "무료 플랜으로는 안 된다. 먼저 요금제 화면에서 확인하라"로 쓴다. 약관 쪽 Free는 플랫폼 전반(Claude 앱 등)에 대한 일반 문구일 가능성이 있으나 문서에 설명이 없다.
- **데스크톱 앱 지원 OS·사양은 이 그룹 문서에 없다.** macOS 13.0+, Windows 10 1809+, 4GB RAM은 setup의 CLI 요구 사양이다. 데스크톱 앱에 그대로 적용된다고 쓰지 않는다. Linux 데스크톱만 Ubuntu 22.04+/Debian 12+로 명시돼 있다(CLI는 Ubuntu 20.04+/Debian 10+라서 숫자가 다르다).
- **데스크톱 앱 로그인 문구**: 시작 문서는 "Anthropic 계정으로 로그인", Linux 문서는 "claude.ai 구독 또는 조직 SSO"라고 한다. Console(API) 계정으로 Code 탭을 쓰는 길은 Claude Desktop on 3P라는 별도 조직용 구성이라 입문 독자는 구독 로그인만 안내하면 된다.
- **요금·한도 숫자는 이 문서에 없다.** 플랜별 가격과 사용 한도는 pricing 페이지로만 연결된다. 가이드에 숫자를 쓰려면 별도로 확인 날짜와 함께 확인해야 한다.
- **Max/Ultra 이름 변경**: Ultra는 예전 Max 20x, Max는 예전 Max 5x(A47). 독자가 옛 이름을 검색할 수 있어 병기가 필요하다. 자주 바뀌는 항목이다.
- **화면 배치는 두 가지 버전**: 문서가 "earlier layout"(예전 배치)을 따로 언급한다(A101). 환경 선택기 위치가 독자 화면과 다를 수 있으니 반드시 실제 화면 캡처로 확인한다. 또 환경 선택기, 프로젝트 폴더 컨트롤, 모델 선택기의 실제 한글 표기는 이 영어 문서로는 알 수 없다. 한국어 화면 캡처 필요.
- **403 오류 해결**은 desktop 문서에 있고 이 그룹에는 없다(A98). 장에 쓰려면 별도 확인한다.
- **Linux 앱 자동 업데이트 없음**(A76)은 Linux 한정이다. macOS/Windows 데스크톱 앱의 업데이트 방식은 이 문서에 없다. "앱은 자동으로 업데이트된다"고 쓰지 않는다.
- **독자가 오해하기 쉬운 것**: (1) "에이전트형"은 시키면 스스로 여러 단계를 진행한다는 뜻이다. 채팅과의 차이를 문서가 직접 비교하진 않으므로(A16) 가이드 필자의 설명임을 구분한다. (2) 환경변수 `ANTHROPIC_API_KEY`가 있으면 구독 대신 API 키가 쓰여 과금될 수 있다(A58). 비개발자는 보통 해당 없지만 CLI 장에서 경고. (3) Cloud 환경은 앱을 닫아도 계속 돌지만 로컬(Local)은 내 컴퓨터 파일을 직접 쓴다. (4) Plan 모드는 파일을 고치지 않는다.
- **자주 바뀌는 것**: 베타 상태(Linux), 모델 이름, 플랜 이름, 설치 링크(Windows 링크가 overview와 setup에서 서로 다른 주소: claude.ai/api/desktop/... vs claude.com/download), 권한 모드 이름과 기본값.
- **화면 확인이 필요한 것**: Code 탭 위치와 아이콘, 환경 선택기, `Open folder…`, 모델 선택기, 권한 모드 선택, `+12 -1` 표시, 로그인 안내/오류 화면.
- **법률**: 약관 문구는 "개발자가 제품에 Claude 로그인을 넣는 것 금지"가 핵심이라 일반 독자에게는 "내 구독 로그인을 다른 서비스에 넘기지 말라" 정도만 쓴다. 데이터 보관·학습 사용 관련 내용은 이 그룹 문서에 없다.
- 개요 문서는 모바일을 "웹 + iOS/Android 앱"으로 설명하므로 "브라우저·IDE·터미널·데스크톱·휴대폰" 순서의 표면 지도를 따로 그릴 때 platforms 표를 기준으로 한다.

## 이 그룹에서 장으로 쓸 만한 구성

**1장. Claude Code는 무엇이고 어디서 쓰나**
1. 한 문장 정의: 폴더를 읽고, 고치고, 실행하는 에이전트형 코딩 도구 (A1~A8). 채팅과의 차이는 필자 설명으로 분리 (A16 주의)
2. 같은 엔진, 여러 화면: 터미널·IDE·데스크톱·웹·모바일 지도 (A9~A13, A17~A38) — 표 하나 + 그림 한 장
3. 처음이면 어디서 시작할까: 데스크톱 앱 Code 탭 권장 (A15, A32, A72)
4. 구독이 필요하다: 무료 플랜 불가, 요금제 이름 (A39~A48) + 확인 날짜
5. 자주 하는 오해 / 용어 정리 (에이전트, CLI, IDE, 표면, 세션)

**2장. 설치와 첫 세션**
1. 준비물: 구독 계정, 지원 OS (A65~A74), 사양 표기 주의
2. 설치와 로그인: macOS → Windows → Linux 순, WSL은 박스 (A70~A92)
3. Code 탭 열기와 막혔을 때: 업그레이드, 온라인 로그인, 403 (A93~A98)
4. 첫 세션 5단계: 환경(Local) → 폴더(Open folder…) → 모델 → 첫 요청 → 변경 검토 (A99~A124)
5. 권한 모드 맛보기: Manual/Auto/Accept edits/Plan (A113~A118)
6. 멈추기·고쳐 말하기·@파일 (A119~A121)
7. 다음 장 예고: 터미널(CLI)은 후속 장 (A125~A140)

# 부록 B


> 출처 파일: `raw/desktop.md`(https://code.claude.com/docs/en/desktop), `raw/desktop-quickstart.md`(https://code.claude.com/docs/en/desktop-quickstart). 확인일 2026-10-31.
> 인용은 파일에서 그대로 옮긴 한 문장(또는 링크를 뺀 연속 부분)이다. 굵은 글씨 표시 `**`도 원문 그대로 둔다.

## 1. Code 탭과 세션의 기본

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B1 | Claude 데스크톱 앱 안에서 Claude Code는 **Code** 탭이다. | VERIFIED | desktop | "In the Claude Desktop app, Claude Code is the **Code** tab." | Code |
| B2 | 앱에는 Code 말고도 채팅과 Cowork가 있다. | VERIFIED | desktop | "The app also has chat and" | — |
| B3 | Code 탭은 앱 사이드바 맨 위에 있다. | VERIFIED | desktop-quickstart | "Claude Code is in the **Code** tab at the top of the app's sidebar." | Code |
| B4 | 탭이 아이콘만 보이면 마우스를 올려 이름을 확인한다. | VERIFIED | desktop-quickstart | "If the tabs show only icons, hover over one to see its name." | — |
| B5 | Claude Code는 Pro·Max·Ultra·Team·Enterprise 구독이 필요하다. | VERIFIED | desktop-quickstart | "Claude Code requires a" | — |
| B6 | Code 탭을 눌렀을 때 업그레이드 안내가 뜨면 먼저 유료 요금제를 구독해야 한다. | VERIFIED | desktop-quickstart | "**Prompt to upgrade**: you need to" | — |
| B7 | 데스크톱 앱에 Claude Code가 들어 있어 Node.js나 CLI를 따로 설치하지 않아도 된다. | VERIFIED | desktop-quickstart | "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." | — |
| B8 | 터미널 없이 내 컴퓨터 폴더의 코드를 Claude에게 맡기고 변경을 직접 검토할 수 있다. | VERIFIED | desktop-quickstart | "You can ask Claude to work on the code in a folder on your computer, then review the changes yourself, without using a terminal." | — |
| B9 | Code 탭에서 대화 하나하나를 세션이라 부르며, 세션마다 대화 기록과 프로젝트 폴더가 따로 있다. | VERIFIED | desktop | "In the Code tab, each conversation is a **session**: it has its own chat history and project folder, independent of any other session." | session |
| B10 | 사이드바에 세션 목록이 있고 여러 세션을 동시에 돌릴 수 있다. | VERIFIED | desktop | "The sidebar lists your sessions and lets you run several in parallel." | — |
| B11 | 처음에는 잘 아는 작은 프로젝트로 시작하라고 권한다. | VERIFIED | desktop-quickstart | "Start with a small project you know well." | — |
| B12 | 첫 요청 예시로 TODO 고치기, 테스트 추가, CLAUDE.md 만들기가 제시된다. | VERIFIED | desktop-quickstart | "`Create a CLAUDE.md with instructions for this codebase`" | — |

## 2. 화면 구성 확인 — 새 화면(current) vs 예전 화면(earlier layout)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B13 | 새 세션에서 환경 선택이 입력창 위에 보이면 예전 화면(earlier layout)이다. | VERIFIED | desktop | "If a new session shows the" | — |
| B14 | 새 세션의 입력창 아래에 환경이 안 보이면 예전 화면이다. | VERIFIED | desktop-quickstart | "If a new session shows no environment under your prompt box, you have the earlier layout." | — |
| B15 | 예전 화면에서는 환경·폴더·저장소를 입력창 위에서, 권한 모드와 모델을 아래 줄에서 고른다. | VERIFIED | desktop | "In the earlier layout, choose the environment and any project folder or repository above the prompt box, and the permission mode and model in the row under it." | — |
| B16 | 예전 화면에는 세션 정보 패널과 저장된 로컬·SSH 환경이 없다. | VERIFIED | desktop | "The earlier layout lacks the" | — |
| B17 | 앱 버전이 v2.37337.0보다 낮으면 업데이트해야 새 화면이 나온다. | VERIFIED | desktop | "update to get the current layout." | Claude > Check for Updates… / Help > Check for Updates… |
| B18 | 앱 버전은 macOS에서 메뉴 막대 **Claude** → **About Claude**로 확인한다. | VERIFIED | desktop | "**macOS**: click **Claude** in the menu bar, then **About Claude**" | Claude > About Claude |
| B19 | Windows에서는 **Help** → **About Claude**로 버전을 확인한다. | VERIFIED | desktop | "**Windows**: click **Help**, then **About Claude**" | Help > About Claude |
| B20 | Code 탭은 자체 Claude Code 사본을 쓰므로 터미널의 `claude`와 버전이 다를 수 있다. | VERIFIED | desktop | "The desktop app downloads and updates that copy, so it can differ from the `claude` command in your terminal, and updating one doesn't update the other." | — |
| B21 | 세션이 쓰는 Claude Code 버전은 `/status`를 입력해 **Claude Code** 줄에서 본다. | VERIFIED | desktop | "To see which version of Claude Code a session runs, type `/status` in a local session in the **Code** tab and read the **Claude Code** row, which shows a version such as `2.1.286`." | /status |
| B22 | 창 배치·터미널·파일 편집기·보기 모드는 Claude Desktop v1.2581.0 이상이 필요하다. | VERIFIED | desktop | "The pane layout, terminal, file editor, and view modes in this section require Claude Desktop v1.2581.0 or later." | — |

## 3. 입력창 아래 줄 — 환경·폴더·권한 모드·모델·노력 수준·Worktree

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B23 | 첫 메시지 전에 입력창 아래 줄에서 환경·프로젝트 폴더·권한 모드·모델을 고른다. | VERIFIED | desktop | "Before you send your first message, choose the environment, project folder, permission mode, and model in the row under the prompt box:" | — |
| B24 | 줄의 첫 번째 칸이 Claude가 어디서 일할지 고르는 환경 선택기다. | VERIFIED | desktop | "use the environment selector, the first control in the row, to choose where Claude runs." | Environment |
| B25 | 처음엔 환경 선택기에서 **Local** 묶음의 맨 위 항목을 고른다. | VERIFIED | desktop-quickstart | "click the first control, the environment selector, and select the top entry in the **Local** group." | Local |
| B26 | 환경 옆 폴더 칸에서 **Open folder…**를 눌러 프로젝트 폴더를 고른다. | VERIFIED | desktop-quickstart | "Then click the project folder control beside the environment selector, select **Open folder…**, and choose your project's directory." | Open folder… |
| B27 | 저장된 로컬·SSH 환경을 고르면 폴더가 이미 들어 있어 폴더 칸이 보이지 않는다. | VERIFIED | desktop | "the environment already holds its folders, so the row shows no project folder control." | — |
| B28 | 권한 모드는 세션 도중에도 바꿀 수 있다. | VERIFIED | desktop | "You can change the permission mode during the session." | mode selector |
| B29 | 모델은 줄 오른쪽 끝 쪽의 모델 선택기에서 고르고, 도중에 바꿀 수 있다. | VERIFIED | desktop | "You can change the model during the session." | model picker |
| B30 | 작업을 입력하고 **Enter**를 누르면 시작된다. | VERIFIED | desktop | "Type your task and press **Enter** to start." | Enter |
| B31 | 새 화면에서는 모델 선택기를 열어 **Effort** 아래에서 노력 수준을 고른다. | VERIFIED | desktop | "open the model picker and select a level under **Effort**." | Effort |
| B32 | 노력 수준 메뉴는 `Cmd` `Shift` `E`로 연다(단축키 표). | VERIFIED | desktop | "Open effort menu" | — |
| B33 | Git 저장소인 프로젝트에서는 시작 전에 **Worktree**를 켜면 프로젝트의 격리된 사본에서 일한다. | VERIFIED | desktop | "In a project that's a Git repository, turn on **Worktree** before you start a session to run it in its own" | Worktree |
| B34 | **Worktree**는 기본으로 꺼져 있고, 꺼져 있으면 프로젝트 폴더 자체에서 일한다. | VERIFIED | desktop | "By default, **Worktree** is off and Claude works in the project folder itself." | Worktree |
| B35 | 새 화면에서는 입력창 아래 줄의 **Worktree** 버튼을 켠다. | VERIFIED | desktop | "turn on the **Worktree** button in the" | Worktree |
| B36 | 예전 화면에서는 입력창 위 브랜치 이름 옆의 **worktree** 체크박스를 고른다. | VERIFIED | desktop | "select the **worktree** checkbox beside the branch name, above the prompt box" | worktree |
| B37 | 환경은 Local(내 컴퓨터), Cloud, SSH, WSL(Windows) 네 가지다. | VERIFIED | desktop | "**Local**: runs on your machine with direct access to your files" | Local / Cloud / SSH / WSL |
| B38 | 환경 선택기 맨 아래 **New environment**로 환경을 저장해 두고 다음에 다시 쓸 수 있다. | VERIFIED | desktop | "Open the environment selector under the prompt box and select **New environment** at the bottom of its menu." | New environment |
| B39 | 새 화면에서 Code 탭을 처음 열면 지난달 많이 쓴 폴더로 환경을 최대 8개 자동으로 만들 수 있다. | VERIFIED | desktop | "The first time you open the Code tab in the" | — |
| B40 | 저장된 환경은 항목 위에 마우스를 올려 톱니 아이콘으로 고치거나 지운다. | VERIFIED | desktop | "hover over the entry and click the gear icon." | Edit environment / Delete environment |

## 4. 입력창 사용 — 보내기·멈추기·방향 바꾸기·추천 프롬프트

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B41 | 하고 싶은 일을 입력하고 **Enter**로 보낸다. | VERIFIED | desktop | "Type what you want Claude to do and press **Enter** to send." | Enter |
| B42 | Claude는 권한 모드에 따라 파일을 읽고 고치고 명령을 실행한다. | VERIFIED | desktop | "Claude reads your project files, makes changes, and runs commands based on your" | — |
| B43 | 정지 버튼을 누르면 즉시 멈추고, 고칠 말을 입력해 **Enter**를 누르면 진행 중인 작업을 멈추지 않고 전달된다. | VERIFIED | desktop | "You can redirect Claude at any point: click the stop button to interrupt immediately, or type a correction and press **Enter** to send it without stopping the running action." | stop button |
| B44 | 보낸 정정은 지금 하던 동작이 끝나자마자 읽혀 다음 단계부터 반영된다. | VERIFIED | desktop | "Claude reads the correction as soon as the current action completes and adjusts before its next step." | — |
| B45 | 어느 쪽이든 끝날 때까지 기다리거나 처음부터 다시 할 필요가 없다. | VERIFIED | desktop-quickstart | "Either way, you don't have to wait for it to finish or start over." | — |
| B46 | `Esc`로 Claude의 응답을 멈출 수 있다. | VERIFIED | desktop | "Stop Claude's response" | Esc |
| B47 | 입력창 옆 **+** 버튼에서 파일 첨부·스킬·커넥터·플러그인을 연다. | VERIFIED | desktop | "Click the **+** button next to the prompt box for file attachments," | + |
| B48 | 답한 뒤 빈 입력창에 다음 프롬프트 추천이 회색 글씨로 보일 수 있다. | VERIFIED | desktop | "After Claude replies, the Code tab can show a suggested next prompt as gray text in the empty prompt box." | — |
| B49 | 추천 프롬프트를 만드는 짧은 요청도 요금제 사용량이나 API 비용에 포함된다. | VERIFIED | desktop | "from your conversation with a short background request that counts toward your plan's usage limits or your API costs." | — |
| B50 | 추천은 **Tab**이나 **오른쪽 화살표**로 받아 고친 뒤 **Enter**로 보낸다. 받기 전에 Enter를 누르면 보내지지 않는다. | VERIFIED | desktop | "Pressing **Enter** before you accept the suggestion doesn't send it." | Tab / Right arrow |
| B51 | 추천을 끄려면 설정의 **Prompt suggestions**를 끈다. | VERIFIED | desktop | "Turn off **Prompt suggestions** in **Settings > Code** or **Settings > Claude Code** to stop suggestions." | Settings > Code / Settings > Claude Code > Prompt suggestions |

## 5. 파일·맥락 넣기 — @ 언급과 첨부

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B52 | `@` 뒤에 파일 이름을 쓰면 그 파일이 대화 맥락에 들어간다. | VERIFIED | desktop | "type `@` followed by a filename to add a file to the conversation context." | @ |
| B53 | 클라우드 세션에서는 첫 메시지를 보낸 뒤에야 `@`로 파일 목록이 뜬다. | VERIFIED | desktop | "`@` can list files only after you send your first message." | — |
| B54 | 이미지·PDF 등 파일은 **+** 버튼으로 첨부하거나 입력창에 끌어다 놓는다. | VERIFIED | desktop | "or drag and drop files directly into the prompt." | + |
| B55 | 첨부는 버그 스크린샷·디자인 시안·참고 문서를 보여 줄 때 쓸모 있다. | VERIFIED | desktop | "This is useful for sharing screenshots of bugs, design mockups, or reference documents." | — |
| B56 | WSL 세션에서 **+** 메뉴에 **Add image**만 보이면 이미지만 첨부된다. | VERIFIED | desktop | "if the **+** menu shows **Add image** instead of **Add files or photos**, you can attach only images." | Add image / Add files or photos |
| B57 | 맥락이 많을수록 결과가 좋아진다고 안내한다. | VERIFIED | desktop-quickstart | "The more context Claude has, the better the results." | — |
| B58 | 채팅·변경 보기·파일 창의 파일 경로를 오른쪽 클릭하면 **Attach as context**로 다음 프롬프트에 붙일 수 있다. | VERIFIED | desktop | "**Attach as context**: add the file to your next prompt" | Attach as context |
| B59 | 같은 메뉴의 **Open in**은 VS Code·Cursor·Zed 같은 설치된 편집기로 연다. | VERIFIED | desktop | "**Open in**: open the file in an installed editor such as VS Code, Cursor, or Zed" | Open in |
| B60 | **Show in Finder**(macOS)·**Show in Explorer**(Windows)는 파일이 든 폴더를 연다. | VERIFIED | desktop | "**Show in Finder** on macOS, **Show in Explorer** on Windows: open the containing folder" | Show in Finder / Show in Explorer |
| B61 | **Copy**로 절대 경로·상대 경로·파일 이름을 복사한다. | VERIFIED | desktop | "**Copy**: a submenu that copies the file's **Absolute path**, **Relative path**, or **Filename**" | Copy > Absolute path / Relative path / Filename |

## 6. 슬래시 명령과 스킬

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B62 | `/`를 입력하거나 **+** → **Slash commands**로 쓸 수 있는 명령·스킬 목록을 본다. | VERIFIED | desktop | "type `/` in the prompt box or click the **+** button and select **Slash commands** to browse what's available." | + > Slash commands |
| B63 | 하나를 고르면 입력칸에 강조 표시되고, 뒤에 할 일을 써서 보낸다. | VERIFIED | desktop | "Select one and it appears highlighted in the input field." | — |
| B64 | 스킬은 필요할 때 Claude가 알아서 불러오기도 한다. | VERIFIED | desktop | "Claude loads them automatically when relevant, or you can invoke one directly:" | — |
| B65 | 스킬은 코드 리뷰 체크리스트처럼 언제든 다시 꺼내 쓰는 프롬프트다. | VERIFIED | desktop-quickstart | "Skills are reusable prompts you can invoke whenever you need them, like code review checklists or deployment steps." | — |
| B66 | Claude가 일하는 중에도 명령을 일반 메시지처럼 보낼 수 있다. | VERIFIED | desktop | "You can send a command while Claude is working, the same as any other message, and the session returns to idle once the turn finishes." | — |
| B67 | 터미널 대화창을 여는 명령 중 인자 없는 것(예: `/permissions`)은 Code 탭에서 쓸 수 없다는 답이 온다. | VERIFIED | desktop | "Commands with no argument form, such as `/permissions`, reply with `isn't available in this environment`." | — |
| B68 | `/config`를 입력하면 설정의 Code(또는 Claude Code) 화면이 열린다. | VERIFIED | desktop | "`/config` opens **Settings > Code** or **Settings > Claude Code**." | Settings > Code |

## 7. 권한 모드 (데스크톱 기준)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B69 | 권한 모드는 파일 수정·명령 실행 전에 물어볼지를 정한다. | VERIFIED | desktop | "Permission modes control how much autonomy Claude has during a session: whether it asks before editing files, running commands, or both." | — |
| B70 | 변경을 하나씩 직접 승인하려면 Manual로 바꾼다. | VERIFIED | desktop | "To approve each change yourself, switch to Manual." | Manual |
| B71 | **Manual**: 파일 수정·명령 실행 전에 묻고, 변경마다 diff를 보고 수락·거절한다. | VERIFIED | desktop | "You see a diff and can accept or reject each change." | Manual |
| B72 | **Accept edits**: 파일 수정과 `mkdir`·`touch`·`mv` 같은 흔한 명령은 자동 수락하고, 다른 명령은 여전히 묻는다. | VERIFIED | desktop | "Claude auto-accepts file edits and common filesystem commands like `mkdir`, `touch`, and `mv`, but still asks before running other terminal commands." | Accept edits |
| B73 | **Plan**: 읽고 살펴본 뒤 소스 코드를 고치지 않고 계획을 제안한다. | VERIFIED | desktop | "Claude reads files and runs commands to explore, then proposes a plan without editing your source code." | Plan |
| B74 | **Auto**: 평소 확인 질문 없이 돌고, 셸 명령·네트워크 요청 전에 배경 분류기가 요청에 맞는지 확인한다. 쓸 수 있을 때만 나타난다. | VERIFIED | desktop | "Claude runs without routine prompts; before actions such as shell commands and network requests run, a background classifier checks that they align with your request." | Auto |
| B75 | Auto는 Anthropic API에서 Opus 4.6 이상·Sonnet 4.6 이상·Haiku 5.5·Fable 모델이 필요하다. | VERIFIED | desktop | "Auto mode is available to all users on the Anthropic API and requires Claude Opus 4.6 or later, Sonnet 4.6 or later, Haiku 5.5, or a" | Auto |
| B76 | **Bypass permissions**는 샌드박스 컨테이너·VM에서만 쓰라고 한다. | VERIFIED | desktop | "Only use this in sandboxed containers or VMs." | Bypass permissions |
| B77 | Pro·Max·Ultra에서는 설정의 "Allow bypass permissions mode"를 켜야 Bypass가 생긴다(Team·Enterprise는 조직 정책). | VERIFIED | desktop | "in **Settings > Code** or **Settings > Claude Code**. On Team and Enterprise plans there is no Settings toggle, and organization policy controls it instead." | Allow bypass permissions mode |
| B78 | 예전 버전 Code 탭에서는 모드 이름이 Ask permissions, Auto accept edits, Plan mode였다. | VERIFIED | desktop | "Earlier versions of the Code tab labeled these modes Ask permissions, Auto accept edits, and Plan mode." | Ask permissions / Auto accept edits / Plan mode |
| B79 | 선택기에서 고른 모드는 폴더별로 기억되지만 Plan은 그 세션에만 적용된다. | VERIFIED | desktop | "A mode you pick in the selector is remembered per folder and takes precedence over `defaultMode` for that folder, except Plan, which applies to the current session only." | — |
| B80 | 복잡한 일은 Plan으로 시작해 계획을 승인한 뒤 Accept edits나 Manual로 바꿔 실행하라고 권한다. | VERIFIED | desktop | "Once you approve the plan, switch to Accept edits or Manual to execute it." | — |
| B81 | 클라우드 세션은 Accept edits·Plan·Auto만 되고 Manual 대신 Accept edits가 보인다. | VERIFIED | desktop | "Cloud sessions support Accept edits, Plan, and Auto." | — |
| B82 | 데스크톱에서는 `Shift+Tab`으로 권한 모드가 바뀌지 않는다. 메뉴는 `Cmd` `Shift` `M`. | VERIFIED | desktop | "In Desktop, `Shift+Tab` doesn't cycle permission modes as it does in the terminal's" | — |
| B83 | Auto·Accept edits에서는 변경이 바로 적용되고 `+12 -1` 같은 표시가 나타난다. | VERIFIED | desktop-quickstart | "Claude applies its file changes, and an indicator such as `+12 -1` appears so you can review them in the" | +12 -1 |
| B84 | Manual에서는 변경마다 diff와 승인·거절 버튼이 보인다. | VERIFIED | desktop-quickstart | "Buttons to approve or decline each change" | — |

## 8. 사이드바와 세션 관리

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B85 | 사이드바의 **+ New**나 `Cmd+N`/`Ctrl+N`으로 새 세션을 열어 여러 일을 동시에 한다. | VERIFIED | desktop | "Click **+ New** in the sidebar, or press **Cmd+N** on macOS or **Ctrl+N** on Windows, to work on multiple tasks in parallel." | + New |
| B86 | 세션 사이는 `Ctrl+Tab`·`Ctrl+Shift+Tab`으로 오간다. | VERIFIED | desktop | "Press **Ctrl+Tab** and **Ctrl+Shift+Tab** to switch between sessions." | — |
| B87 | 세션을 오른쪽 클릭 → **Open in** → **Split view**로 나란히 본다. | VERIFIED | desktop | "or right-click the session and select **Open in**, then **Split view**" | Open in > Split view |
| B88 | **Open in** → **New window**로 세션을 별도 창에 연다. | VERIFIED | desktop | "or right-click the session and select **Open in**, then **New window**" | Open in > New window |
| B89 | 세션 이름은 세션을 열고 제목 막대의 제목을 눌러 바꾼다. | VERIFIED | desktop | "To rename a session, open it and click the session title in the title bar." | — |
| B90 | 보관은 사이드바 세션 위에 마우스를 올려 메뉴의 **Archive**를 고른다. | VERIFIED | desktop | "To archive a session, hover over it in the sidebar, open its menu, and select **Archive**." | Archive |
| B91 | worktree의 커밋 안 한 변경은 보관 시 잃을 수 있으니 남길 것은 먼저 커밋한다. | VERIFIED | desktop | "You can lose uncommitted changes in a session's worktree when the session is archived, so commit what you want to keep first:" | Archive anyway |
| B92 | 보관한 세션은 **Archived** 탭에서 열어 **Unarchive**로 되살린다. | VERIFIED | desktop | "To keep the changes, open the session from the" | Archived / Unarchive |
| B93 | 새 화면에서는 목록 제목에 마우스를 올려 **Group and sort** 아이콘을 쓰고, **View all** → **Archived** 탭에서 보관함을 본다. | VERIFIED | desktop | "hover over a heading in the session list to show the **Group and sort** icon, then click it." | Group and sort / View all / Archived |
| B94 | 예전 화면에서는 **Filter** 아이콘의 **Group by**·**Sort by**·**Status** → **Archived**를 쓴다. | VERIFIED | desktop | "the **Filter** icon shows without hovering." | Filter / Group by / Sort by / Status |
| B95 | 보고 있지 않은 세션이 일을 끝내면 OS 알림이 온다. | VERIFIED | desktop | "The desktop app sends an OS notification when a Code session finishes a task and you aren't currently viewing that session." | — |
| B96 | worktree 격리에는 Git이 필요하다. | VERIFIED | desktop | "Session isolation requires" | — |
| B97 | worktree는 기본으로 `<project-root>/.claude/worktrees/`에 저장된다. | VERIFIED | desktop | "Worktrees are stored in `<project-root>/.claude/worktrees/` by default." | Worktree location |
| B98 | 세션 도중 **+** → **Add folder**로 폴더를 더할 수 있다(로컬·SSH). | VERIFIED | desktop | "click **+** next to the prompt box and select **Add folder**." | + > Add folder |
| B99 | Claude에게 다른 세션의 상황을 묻거나 메시지를 전하게 할 수 있다. | VERIFIED | desktop | "Claude can list your other Code tab sessions, read what each has been doing, and send messages between them." | — |
| B100 | Claude가 세션을 보관하기 전에는 승인 카드가 뜨지만 Auto·Bypass에서는 없이 보관할 수 있다. | VERIFIED | desktop | "You get an approval card before Claude archives a session, except in Auto mode and Bypass permissions mode, where Claude can archive a session without one." | — |
| B101 | Claude가 다른 일을 제안하면 카드의 **Start**·**Do it here**·**Options**로 처리한다(새 화면 로컬·SSH). | VERIFIED | desktop | "**Do it here**: sends the task to the current session as a message" | Start / Do it here / Options / Start all |

## 9. 창(pane) 배치와 세션 정보 패널

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B102 | Code 탭은 채팅·diff·브라우저·터미널·파일·계획·작업·서브에이전트 창을 원하는 대로 배치한다. | VERIFIED | desktop | "The Code tab is built around panes you can arrange in any layout: chat, diff, browser, terminal, file, plan, tasks, and subagent, along with the" | — |
| B103 | 창 머리를 끌어 옮기고 가장자리를 끌어 크기를 바꾼다. | VERIFIED | desktop | "Drag a pane by its header to reposition it, or drag a pane edge to resize it." | — |
| B104 | 다른 창은 세션 제목 막대의 아이콘 버튼으로 열고, 마우스를 올리면 이름이 보인다. | VERIFIED | desktop | "To open another pane, click its icon button in the session's title bar." | Terminal / Changes / Browser / Files |
| B105 | 버튼이 없는 창은 버튼 옆 **⋮** 메뉴에서 고른다. | VERIFIED | desktop | "If the pane you want has no button in the title bar, select it from the **⋮** menu beside the buttons:" | ⋮ |
| B106 | 창이 좁으면 들어가지 않는 버튼은 메뉴로 옮겨진다. | VERIFIED | desktop | "**When the window is narrow**: buttons that don't fit move into the menu" | — |
| B107 | diff나 터미널 창을 별도 창으로 떼어 냈다가 다시 붙일 수 있다. | VERIFIED | desktop | "To work across screens, pop a pane such as the diff or terminal out into its own window, and dock it back when you're done." | — |
| B108 | 세션 정보 패널은 채팅 옆 카드 묶음으로, 실행 위치·변경·실행 중인 것·맥락 사용량을 보여 준다. | VERIFIED | desktop | "The session details panel is a set of cards beside the chat that show where the session runs, what it changed, what it's running, and its context usage." | session details panel |
| B109 | 패널은 제목 막대의 **Hide session rail**/**Show session rail**로 숨기거나 보인다. | VERIFIED | desktop | "To hide or show the panel, click **Hide session rail** or **Show session rail** in the session's title bar, or in the bar's **⋮** menu." | Hide session rail / Show session rail |
| B110 | 새 화면에서는 **Context** 카드 머리에 맥락 사용량이 퍼센트로 보인다. | VERIFIED | desktop | "the header of the **Context** card in the" | Context |
| B111 | 모델 선택기 옆 사용량 고리를 누르면 모든 Claude Code 화면이 함께 쓰는 요금제 사용량이 보인다. | VERIFIED | desktop | "Click it to see your plan usage, which is shared across all your Claude Code surfaces." | usage ring |
| B112 | `/context`로 맥락 사용 내역을, `/compact`로 미리 요약해 공간을 비운다. | VERIFIED | desktop | "You can also type `/compact` to trigger summarization earlier and free up context space." | /compact |
| B113 | 맥락이 차면 Claude가 대화를 자동 요약하고 계속 일한다. | VERIFIED | desktop | "When context fills up, Claude automatically summarizes the conversation and continues working." | — |
| B114 | 보기 모드는 **Normal**·**Thinking**·**Verbose**이고 `Ctrl+O`로 돌아가며 바꾼다. | VERIFIED | desktop | "To switch view modes, open the session menu from the caret beside the session title and select **Transcript view**, or press **Ctrl+O** on macOS or Windows to cycle through them." | Transcript view / Normal / Thinking / Verbose |

## 10. 터미널·파일 창

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B115 | 내장 터미널은 다른 앱으로 가지 않고 세션 옆에서 명령을 돌린다. | VERIFIED | desktop | "The integrated terminal lets you run commands alongside your session without switching to another app." | Terminal |
| B116 | 터미널은 세션 폴더에서 열리고 Claude와 같은 환경을 쓴다. | VERIFIED | desktop | "The terminal opens in your session's working directory and shares the same environment as Claude, so commands like `npm test` or `git status` see the same files Claude is editing." | — |
| B117 | 채팅에 나온 파일 경로를 누르면 그 파일이 열린다. | VERIFIED | desktop | "To open a file Claude mentions, click its path in the chat." | — |
| B118 | 로컬 세션에서는 파일 창에서 직접 편집할 수 있지만 `.mcp.json`·`.claude/settings.json` 같은 일부는 보기만 된다. | VERIFIED | desktop | "you can edit files inside the session's working directory, except some view-only ones such as `.mcp.json` and `.claude/settings.json`." | Files |
| B119 | 클라우드·SSH·WSL 세션의 파일 창은 보기 전용이다. | VERIFIED | desktop | "the file pane is view-only, so ask Claude to make edits." | — |
| B120 | 파일 창의 편집은 기본으로 자동 저장되어 **Save** 버튼이 없다. | VERIFIED | desktop | "By default, your edits in the file pane save on their own, so the pane shows no **Save** button." | Auto save / Save / Cancel |

## 11. 변경 검토 — diff·줄 댓글·/code-review

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B121 | diff 보기에서 PR 전에 파일별로 변경을 검토한다. | VERIFIED | desktop | "After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." | — |
| B122 | **Changes** 카드의 `+12 -1` 같은 줄 수를 누르거나 제목 막대의 **Changes**를 눌러 연다. | VERIFIED | desktop | "You can also click **Changes** in the session's title bar." | Changes |
| B123 | 줄 위에 마우스를 올려 줄 번호 옆 **+**를 누르면 댓글 상자가 열린다. | VERIFIED | desktop | "To comment on specific lines, hover over a line and click the **+** that appears beside its line number to open a comment box." | + |
| B124 | 여러 줄에 댓글을 단 뒤 macOS는 **Cmd+Enter**, Windows는 **Ctrl+Enter**로 한꺼번에 제출한다. | VERIFIED | desktop | "**macOS**: press **Cmd+Enter**" | — |
| B125 | Claude가 댓글을 읽고 고치면 새 diff로 다시 검토할 수 있다. | VERIFIED | desktop | "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." | — |
| B126 | 커밋 전에 `/code-review`를 입력하면 Claude가 변경을 리뷰한다. | VERIFIED | desktop | "The findings arrive in the conversation when the review completes." | /code-review |
| B127 | 로컬·SSH·WSL에서는 결과가 파일별 **Code review** 카드로 나온다. | VERIFIED | desktop | "the findings appear as a **Code review** card, grouped by file." | Code review |
| B128 | **Walk through in diff**로 하나씩 보며 **Fix this one**을 누르고, **Apply fixes**로 남은 것을 한 번에 고친다. | VERIFIED | desktop | "Click **Apply fixes** to ask Claude to fix the findings that are still open." | Walk through in diff / Fix this one / Apply fixes |

## 12. 곁가지 질문·백그라운드 작업

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B129 | 곁가지 대화(side chat)는 세션 맥락을 쓰지만 본 대화에 아무것도 더하지 않는다. | VERIFIED | desktop | "A side chat lets you ask Claude a question that uses your session's context but doesn't add anything back to the main conversation." | side chat |
| B130 | `Cmd+;`/`Ctrl+;`이나 `/btw`로 곁가지 대화를 연다. | VERIFIED | desktop | "Press **Cmd+;** on macOS or **Ctrl+;** on Windows to open a side chat, or type `/btw` in the prompt box." | /btw |
| B131 | 곁가지 대화는 디스크에 저장되지 않아 앱을 닫으면 돌아갈 수 없다. | VERIFIED | desktop | "The desktop app doesn't save side chats to disk, so you can't return to one after you close the app." | — |
| B132 | 작업 창은 세션 안의 서브에이전트·백그라운드 명령을 보여 주며 **⋮** 메뉴의 **Background tasks**로 연다. | VERIFIED | desktop | "Once the session has background work, open the pane with **Background tasks** in the title bar's **⋮** menu." | Background tasks |

## 13. 앱 미리보기와 브라우저 창

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B133 | Claude는 개발 서버를 켜고 브라우저 창에 열어 변경을 확인할 수 있다. | VERIFIED | desktop | "Claude can start a dev server and open it in the Browser pane to verify its changes." | Browser |
| B134 | 대부분 파일을 고친 뒤 Claude가 서버를 자동으로 켜고, 언제든 미리보기를 요청할 수도 있다. | VERIFIED | desktop | "In most cases, Claude starts the server automatically after editing project files." | — |
| B135 | 기본으로 편집할 때마다 자동 확인(auto-verify)하며, **⋮** 메뉴의 **Auto-verify changes**로 끌 수 있다. | VERIFIED | desktop | "By default, Claude" | Auto-verify changes |
| B136 | 브라우저 창이 안 열렸으면 채팅의 서버 카드에서 **Open**을 누른다. | VERIFIED | desktop | "If the Browser pane isn't open after Claude starts a server in a local session, click **Open** on the server's card in the chat." | Open |
| B137 | 서버는 브라우저 창 머리의 **Dev servers** 메뉴에서 켜고 끈다. | VERIFIED | desktop | "Start or stop servers, or stop them all at once, from the **Dev servers** menu in the Browser pane's header" | Dev servers |
| B138 | 서버 설정은 `.claude/launch.json`에 저장된다. | VERIFIED | desktop | "Claude automatically detects your dev server setup and stores the configuration in `.claude/launch.json` at the root of the folder you selected when starting the session." | — |
| B139 | 브라우저 창은 `Cmd+Shift+B`/`Ctrl+Shift+B`나 제목 막대의 **Browser**로 연다. | VERIFIED | desktop | "To open the Browser, press **Cmd+Shift+B** on macOS or **Ctrl+Shift+B** on Windows, or click **Browser** in the session's title bar." | Browser |
| B140 | 외부 사이트에서 처음 행동할 때 **Allow once**·**Always allow**·**Deny** 카드가 뜬다. | VERIFIED | desktop | "The first time Claude acts on an external site, a permission card appears and Claude waits for your choice: **Allow once**, **Always allow**, or **Deny**." | Allow once / Always allow / Deny |
| B141 | 승인한 사이트에서도 구매·계정 생성·캡차 우회는 사용자 입력 없이 하지 않는다. | VERIFIED | desktop | "Even on an approved site, Claude won't purchase items, create accounts, or bypass CAPTCHAs without your input." | — |
| B142 | 브라우저 창은 개인 브라우저와 분리된 깨끗한 프로필이라 저장된 로그인·기록이 없다. | VERIFIED | desktop | "The Browser pane uses a clean browser profile, separate from your personal browser, with none of your saved logins or history." | — |

## 14. 커넥터·플러그인·Customize

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B143 | 커넥터는 화면으로 설정하는 MCP 서버다. | VERIFIED | desktop | "Connectors are" | — |
| B144 | **+** → **Add connectors**로 커넥터 목록을 연다(메뉴에 **Connectors**가 보이면 → **Browse connectors**). | VERIFIED | desktop | "Select **Add connectors** to open the connector directory." | + > Add connectors / Connectors > Browse connectors |
| B145 | 연결하면 Claude가 달력을 읽고 메시지를 보내고 이슈를 만드는 등 도구를 직접 다룬다. | VERIFIED | desktop | "Once connected, Claude can read your calendar, send messages, create issues, and interact with your tools directly." | — |
| B146 | 커넥터 관리·해제는 사이드바 **Customize** → **Connectors**에서 한다. | VERIFIED | desktop | "To manage or disconnect connectors, click **Customize** in the sidebar and open **Connectors**." | Customize > Connectors |
| B147 | 플러그인은 터미널 없이 **+** → **Add plugins**로 설치한다(로컬·SSH). | VERIFIED | desktop | "click **+** next to the prompt box and select **Add plugins** to open the plugin browser." | + > Add plugins / Plugins > Browse plugins / Manage plugins |
| B148 | 플러그인 브라우저는 클라우드 세션에서 쓸 수 없다. | VERIFIED | desktop | "The plugin browser is not available in cloud sessions, and plugins you install from the desktop app aren't available for cloud sessions." | — |

## 15. 클라우드 세션·다른 화면에서 이어 하기·예약 작업

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B149 | 오래 걸리는 일은 환경 선택기의 **Cloud** 아래 환경을 고르면 앱을 닫거나 컴퓨터를 꺼도 계속된다. | VERIFIED | desktop | "Cloud sessions run on Anthropic-managed infrastructure by default and continue even if you close the app or shut down your computer." | Cloud |
| B150 | 클라우드 사용량은 요금제 한도에 포함되고 별도 컴퓨팅 요금은 없다. | VERIFIED | desktop | "Usage counts toward your" | — |
| B151 | 세션 메뉴의 **Open in** → **Cloud**로 진행 중인 세션을 클라우드로 옮기며, 대화는 요약으로 넘어간다. | VERIFIED | desktop | "Select **Cloud** to continue the session as a" | Open in > Cloud |
| B152 | 예약 작업(scheduled tasks)으로 매일 아침 코드 리뷰처럼 정기적으로 Claude를 돌릴 수 있다. | VERIFIED | desktop-quickstart | "to run Claude automatically on a recurring basis: a daily code review every morning, a weekly dependency audit, or a briefing that pulls from your connected tools." | — |
| B153 | 예약 작업의 진입 버튼·메뉴 이름은 이 문서에 없다(별도 desktop-scheduled-tasks 문서). | UNVERIFIED | desktop | "Scheduled tasks" | — |

## 16. PR 지켜보기 (간단히)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B154 | PR을 열면 **Changes** 카드에 CI 상태가 보이고 **⋮** 메뉴에서 **Auto-fix**·**Merge when ready**를 켠다. | VERIFIED | desktop | "To have Claude fix failing checks, or to have GitHub merge the pull request, turn on **Auto-fix** or **Merge when ready**." | Auto-fix / Merge when ready |
| B155 | PR 지켜보기에는 GitHub CLI(`gh`) 설치·로그인이 필요하다. | VERIFIED | desktop | "If `gh` is not installed, Desktop prompts you to install it the first time you try to create a PR." | Create PR |

## 17. SSH (간단히)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B156 | SSH 세션은 원격 컴퓨터에서 Claude Code를 돌리고 데스크톱 앱을 화면으로 쓴다. | VERIFIED | desktop | "SSH sessions let you run Claude Code on a remote machine while using the desktop app as your interface." | SSH |
| B157 | **New environment**의 **SSH** 탭에서 **Host** → **Add SSH connection…**으로 연결을 더한다. | VERIFIED | desktop | "On the **SSH** tab of the **New environment** dialog, open the **Host** list, select **Add SSH connection…**, and fill in the connection details:" | SSH / Host / Add SSH connection… |

## 18. 설정과 단축키

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B158 | 설정 메뉴 이름은 **Settings > Code** 또는 **Settings > Claude Code**로 두 가지가 문서에 함께 적혀 있다. | VERIFIED | desktop | "set **Worktree location** in **Settings > Code** or **Settings > Claude Code**" | Settings > Code / Settings > Claude Code |
| B159 | 브라우저를 아예 끄려면 설정의 **Browser tools**를 끈다. | VERIFIED | desktop | "To turn the Browser off entirely, turn off **Browser tools** in **Settings > Code** or **Settings > Claude Code**." | Browser tools |
| B160 | PR이 병합·종료되면 세션을 자동 보관하는 설정이 있다. | VERIFIED | desktop | "To have sessions archive themselves when their pull request merges or closes, turn on **Auto-archive after PR merge or close** in **Settings > Code** or **Settings > Claude Code**." | Auto-archive after PR merge or close |
| B161 | `Cmd+/`(Windows `Ctrl+/`)로 모든 단축키를 본다. | VERIFIED | desktop | "Press **Cmd+/** on macOS or **Ctrl+/** on Windows to see all shortcuts available in the Code tab." | — |
| B162 | Windows·Linux에서는 단축키의 Cmd를 Ctrl로 바꿔 누른다. | VERIFIED | desktop | "**Cmd**: press **Ctrl**" | — |
| B163 | `Ctrl`로 시작하는 단축키는 모든 OS에서 같다. | VERIFIED | desktop | "Shortcuts that start with `Ctrl` stay the same on every platform." | — |
| B164 | 단축키 표: `Cmd` `Shift` `D` diff 창, `Cmd` `Shift` `M` 권한 모드 메뉴, `Cmd` `Shift` `I` 모델 메뉴, `Cmd` `;` 곁가지 대화. | VERIFIED | desktop | "Open permission mode menu" | — |
| B165 | 터미널 창은 ``Ctrl+` ``로 연다. | VERIFIED | desktop | "Toggle terminal pane" | — |

## 19. 문제 해결 (초보자가 만나는 것)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B166 | `Error 403: Forbidden`이 뜨면 먼저 앱 메뉴에서 로그아웃 후 다시 로그인한다. 가장 흔한 해결책이다. | VERIFIED | desktop | "Sign out and back in from the app menu." | — |
| B167 | 유료 구독(Pro·Max·Ultra·Team·Enterprise)이 활성인지 확인한다. | VERIFIED | desktop | "Verify you have an active paid subscription: Pro, Max, Ultra, Team, or Enterprise." | — |
| B168 | CLI는 되는데 데스크톱만 안 되면 창만 닫지 말고 앱을 완전히 종료한 뒤 다시 로그인한다. | VERIFIED | desktop | "If the CLI works but Desktop does not, quit the desktop app completely, not just close the window, then reopen and sign in again." | — |
| B169 | 온라인 로그인 안내가 뜨면 로그인을 마치고 앱을 재시작한다. | VERIFIED | desktop-quickstart | "**Prompt to sign in online**: complete the sign-in and restart the app" | — |
| B170 | 빈 화면·멈춤은 먼저 앱을 재시작하고 업데이트를 확인한다. | VERIFIED | desktop | "If the app opens but shows a blank or unresponsive screen:" | — |
| B171 | `Failed to load session`은 폴더가 사라졌거나 Git LFS가 없거나 권한 문제일 수 있으니 다른 폴더를 고르거나 재시작한다. | VERIFIED | desktop | "Try selecting a different folder or restarting the app." | — |
| B172 | `npm`·`node`를 못 찾으면 평소 터미널에서 되는지 보고 PATH 설정을 확인한 뒤 앱을 재시작한다. | VERIFIED | desktop | "If Claude can't find tools like `npm`, `node`, or other CLI commands, verify the tools work in your regular terminal, check that your shell profile properly sets up PATH, and restart the desktop app to reload environment variables." | — |
| B173 | "Git is required"가 뜨면 Git(Windows는 Git for Windows)을 설치한다. | VERIFIED | desktop | "Sessions that run in their own worktree need Git." | — |
| B174 | `API Error: 500`·`529 Overloaded`·`429` 같은 채팅 오류는 별도 오류 문서에서 다룬다. | VERIFIED | desktop | "For runtime API errors that appear in the chat such as `API Error: 500`, `529 Overloaded`, `429`, or `Prompt is too long`, see the" | — |

## 20. CLI에서 넘어온 사람에게 (간단히)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B175 | 데스크톱은 CLI와 같은 엔진에 그래픽 화면을 얹은 것이고 둘을 동시에 써도 된다. | VERIFIED | desktop | "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface." | — |
| B176 | 둘은 CLAUDE.md로 설정과 프로젝트 기억을 공유한다. | VERIFIED | desktop | "They share configuration and project memory via CLAUDE.md files." | — |
| B177 | 데스크톱에서 `/resume`으로 이 컴퓨터의 CLI 세션을 이어 받을 수 있다(로컬 세션만). | VERIFIED | desktop | "The command is available in local sessions, not in SSH, WSL, or cloud sessions." | /resume |
| B178 | 데스크톱은 대화형 전용이라 `--print` 같은 스크립트 실행이 없다. | VERIFIED | desktop | "Not available. Desktop is interactive only." | — |
| B179 | 데스크톱에는 자동완성식 코드 제안(inline suggestions)이 없다. | VERIFIED | desktop | "Desktop doesn't offer autocomplete-style code completions." | — |
| B180 | 여러 창을 한 창에서 관리하거나 변경을 눈으로 검토하려면 데스크톱, 자동화가 필요하면 CLI를 쓰라고 한다. | VERIFIED | desktop | "use Desktop when you want to manage parallel sessions in one window, arrange panes side by side, or review changes visually." | — |

> 기업·관리자 설정(관리 콘솔, managed settings, MDM, 네트워크 허용 목록 등)은 이 그룹에서 다루지 않는다. 한 줄 요약: Team·Enterprise 조직은 관리 콘솔·관리 설정 파일·기기 관리 정책으로 데스크톱 동작(데스크톱 접근, 클라우드 세션, Remote Control, 권한 모드 제한 등)을 통제할 수 있다.
> 컴퓨터 사용(computer use)·Dispatch는 범위 밖이라 표에서 뺐다. 참고로 둘 다 Pro·Max·Ultra 전용이며 Team·Enterprise에서는 쓸 수 없다고 문서에 적혀 있다.

## 가이드에 쓸 때 주의

- **새 화면 vs 예전 화면**: 문서 곳곳이 "current layout"과 "earlier layout"을 나눠 설명한다(환경 위치, worktree 버튼/체크박스, 세션 목록 아이콘, 사용량 확인, PR 상태 표시). 3장 첫머리에 "입력창 아래에 환경 칸이 보이나요?"로 화면을 먼저 확인시키고, 예전 화면이면 업데이트하라고 안내하는 편이 안전하다(B13~B17).
- **설정 메뉴 이름이 두 가지**: 문서가 늘 "**Settings > Code** 또는 **Settings > Claude Code**"라고 함께 쓴다. 실제 화면에 어느 쪽이 보이는지 캡처로 확인하고, 본문에는 둘 다 적거나 확인된 쪽만 쓴다(B158).
- **노력 수준(Effort) 위치**: 입력창 아래 줄의 독립 칸이 아니라 모델 선택기 안의 **Effort** 항목으로 설명된다(B31). 단축키 표에는 별도 "effort menu"가 있다(B32). 화면에서 위치를 직접 확인할 것.
- **충돌(가벼움) — Plan 모드 설명**: desktop은 "소스 코드를 고치지 않고"(without editing your source code), quickstart는 "어떤 파일도 고치지 않고"(without editing any files)라고 쓴다. 본문에는 약한 쪽(소스 코드를 고치지 않는다)을 쓴다.
- **충돌(가벼움) — Auto 모드 설명**: quickstart는 "위험한 것을 묻는 대신 막는다", desktop은 "배경 분류기가 요청과 맞는지 확인한다"고 쓴다. Auto는 모델·요금제 조건이 있어 메뉴에 안 보일 수 있다(B74, B75).
- **예전 모드 이름**: 예전 버전 화면이나 옛 캡처에는 Ask permissions / Auto accept edits / Plan mode로 보인다(B78). 독자가 다른 이름을 보면 같은 기능이라고 짚어 준다.
- **Bypass permissions는 초보자에게 권하지 않는다**: 문서도 샌드박스 컨테이너·VM에서만 쓰라고 한다(B76). 설정에서 켜야 메뉴에 나타난다.
- **Shift+Tab 오해**: 터미널 CLI 습관(Shift+Tab으로 모드 순환)이 데스크톱에서는 안 통한다(B82).
- **worktree와 보관**: worktree 세션을 보관하면 커밋 안 한 변경을 잃을 수 있다(B91). Git이 없으면 worktree를 못 쓴다(B96). 초보자 장에서는 worktree를 "선택 사항, 기본은 꺼짐"으로 소개하는 정도가 적당하다.
- **추천 프롬프트도 사용량을 쓴다**(B49). "공짜 기능"처럼 쓰지 않는다.
- **곁가지 대화는 저장되지 않는다**(B131).
- **자주 바뀌는 UI**: 버전 번호(v2.37337.0, v1.2581.0 등), **+** 메뉴의 항목 이름(**Add connectors** ↔ **Connectors > Browse connectors**, **Add plugins** ↔ **Plugins**), 제목 막대 버튼 배치는 버전마다 바뀌는 흔적이 문서에 이미 있다. 캡처 날짜와 앱 버전을 함께 남긴다.
- **예약 작업의 진입점**은 이 문서에 화면 이름이 없다(B153). 해당 장을 쓰려면 desktop-scheduled-tasks 문서를 따로 확인해야 한다.
- **요금제 조건**: Code 탭 자체가 유료 구독 필요(B5). 403 오류의 두 번째 점검 항목도 구독 상태다(B167).

## 이 그룹에서 장으로 쓸 만한 구성

- **3장 화면 둘러보기**
  1. Code 탭 찾기와 세션의 뜻(B1~B4, B9~B10)
  2. 내 화면이 새 화면인지 확인하기(B13~B17)
  3. 입력창 아래 줄 한 칸씩: 환경 → 폴더 → 권한 모드 → 모델(+Effort)(B23~B31)
  4. 사이드바: 새 세션, 이름 바꾸기, 보관(B85, B89, B90, B93)
  5. 제목 막대와 창: Changes·Terminal·Browser·Files, ⋮ 메뉴, 세션 정보 패널(B102~B111)
  6. 단축키는 `Cmd+/` 하나만 외우기(B161)
- **4장 첫 작업 맡기기**: 보내기·멈추기·방향 바꾸기(B41~B46), `@`와 첨부(B52~B57), 추천 프롬프트(B48~B51), 슬래시 명령(B62~B66)
- **5장 권한과 검토**: 권한 모드 네 가지와 Plan→실행 흐름(B69~B84), diff와 줄 댓글(B121~B125), `/code-review`(B126~B128)
- **8장 더 넓게 쓰기**: 곁가지 대화(B129~B131), 미리보기·브라우저 창(B133~B142), 커넥터·플러그인(B143~B148), 클라우드로 보내기(B149~B151), 예약 작업 소개(B152), 병렬 세션·worktree(B33~B36, B86~B88)
- **부록 문제 해결**: 403·로그인·빈 화면·도구 못 찾음·Git(B166~B174), CLI 사용자 메모(B175~B180)

# 부록 C


> 출처: code.claude.com 공식 문서 7개(how-claude-code-works, permission-modes, permissions, checkpointing, context-window, best-practices, common-workflows). 영어 인용은 원문 그대로이며 기계 검증을 통과한 것만 수록. 표기 없는 단축키·명령은 CLI 기준이다.


## 1. Claude Code가 일하는 방식 (에이전트 루프·도구·접근 범위)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C1 | Claude는 일을 받으면 '맥락 모으기, 행동하기, 결과 확인하기' 세 단계를 오가며 진행한다. | VERIFIED | how-claude-code-works | "When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." | — |
| C2 | 사용자는 작업 중 언제든 끼어들어 방향을 바꾸거나 정보를 더 줄 수 있다. | VERIFIED | how-claude-code-works | "You can interrupt at any point to steer Claude in a different direction, provide additional context, or ask it to try a different approach." | — |
| C3 | 도구가 없으면 Claude는 글로만 답할 수 있고, 도구가 있어야 파일을 읽고 고치고 명령을 실행하는 행동을 한다. | VERIFIED | how-claude-code-works | "Without tools, Claude can only respond with text." | — |
| C4 | 내장 도구는 파일 작업·검색·명령 실행·웹·코드 이해 보조의 다섯 범주로 나뉜다. | VERIFIED | how-claude-code-works | "The built-in tools generally fall into five categories, each representing a different kind of agency." | — |
| C5 | 어떤 도구를 쓸지는 Claude가 요청과 중간에 알게 된 내용을 보고 고른다. | VERIFIED | how-claude-code-works | "Claude chooses which tools to use based on your prompt and what it learns along the way." | — |
| C6 | Claude는 터미널에서 사용자가 칠 수 있는 명령이면 무엇이든 실행할 수 있다(권한 허락 범위 안에서). | VERIFIED | how-claude-code-works | "Any command you could run: build tools, git, package managers, system utilities, scripts." | — |
| C7 | Claude가 볼 수 있는 것은 실행한 폴더와 그 아래 파일이며, 그 밖의 파일은 허락을 받아야 한다. | VERIFIED | how-claude-code-works | "Files in your directory and subdirectories, plus files elsewhere with your permission." | — |
| C8 | 화면(터미널, 데스크톱 앱, IDE 등)이 달라도 안쪽의 에이전트 루프는 같다. | VERIFIED | how-claude-code-works | "The interface determines how you see and interact with Claude, but the underlying agentic loop is identical." | — |
| C9 | Claude Code는 로컬(내 컴퓨터)·클라우드·원격 제어 세 가지 실행 환경에서 돌아간다. | VERIFIED | how-claude-code-works | "Claude Code runs in three environments, each with different tradeoffs for where your code executes." | — |
| C10 | 새 세션은 이전 대화 기록 없이 빈 컨텍스트 창으로 시작한다. | VERIFIED | how-claude-code-works | "**Sessions are independent.** Each new session starts with a fresh context window, without the conversation history from previous sessions." | — |
| C11 | 대화는 내 컴퓨터에 저장되어, 되감기·이어가기·갈라내기가 가능하다. | VERIFIED | how-claude-code-works | "Claude Code saves your conversation locally as you work." | — |
| C12 | Claude는 코드를 바꾸기 전에 대상 파일의 현재 모습을 스냅샷으로 남긴다. | VERIFIED | how-claude-code-works | "Before Claude makes code changes, it also snapshots the affected files so you can revert if needed." | — |
| C13 | 완벽한 프롬프트가 필요 없고, 말하고 나서 고쳐 가며 대화하면 된다. | VERIFIED | how-claude-code-works | "You don't need perfect prompts." | — |
| C14 | 실행 중인 Claude를 즉시 멈추려면 Esc를 누른다(CLI 기준 안내). | VERIFIED | how-claude-code-works | "**Press `Esc`** to stop Claude immediately." | Esc (CLI 단축키; Desktop 화면 동작은 이 문서에서 확인 안 됨) |
| C15 | 동료에게 맡기듯 상황과 방향을 주고 세부는 Claude에게 맡기라고 권한다. | VERIFIED | how-claude-code-works | "Think of delegating to a capable colleague." | — |
| C16 | 안전장치는 두 가지: 체크포인트(파일 변경 되돌리기)와 권한(허락 없이 할 수 있는 일 제한). | VERIFIED | how-claude-code-works | "Claude has two safety mechanisms: checkpoints let you undo file changes, and permissions control what Claude can do without asking." | — |
| C17 | 컨텍스트 창이 차면 Claude가 알아서 요약(압축)하지만, 대화 초반의 세부 지시는 사라질 수 있다. | VERIFIED | how-claude-code-works | "The summary keeps your requests and key code snippets, but detailed instructions from early in the conversation may be lost." | — |
| C18 | 계속 지켜야 할 규칙은 대화가 아니라 CLAUDE.md 파일에 적어 두라고 안내한다. | VERIFIED | how-claude-code-works | "Put persistent rules in CLAUDE.md rather than relying on conversation history." | CLAUDE.md |

## 2. 권한 모드 (Manual · Accept edits · Plan · Auto · dontAsk · bypass)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C19 | 권한 모드는 Claude가 묻지 않고 해도 되는 행동의 범위를 정한다. | VERIFIED | permission-modes | "A permission mode sets which actions Claude can take in a session without asking you first." | — |
| C20 | Manual 모드에서는 파일 수정·명령 실행·네트워크 접근 같은 대부분의 행동 전에 Claude가 멈추고 묻는다. | VERIFIED | permission-modes | "In Manual mode, Claude Code stops and asks you before most actions that edit files, run shell commands, or reach the network." | Manual |
| C21 | '모든 행동을 사용자가 검토하는 모드'의 이름은 CLI·VS Code·JetBrains·데스크톱 앱에서 모두 Manual이다. | VERIFIED | permission-modes | "The mode that reviews every action is named **Manual** in the CLI, in `claude --help`, in the VS Code and JetBrains extensions, and in the desktop app." | Manual |
| C22 | Manual의 설정 파일상 값은 default이며 CLI는 manual도 같은 뜻으로 받는다. | VERIFIED | permission-modes | "Its config value is `default`, which is what hooks and SDK integrations use." | default / Manual |
| C23 | Manual(default)에서는 처음 쓰는 도구마다 허락을 묻는다. | VERIFIED | permissions | "Prompts for permission on first use of each tool." | Manual |
| C24 | Accept edits는 작업 폴더 안의 파일 생성·수정을 묻지 않고 허용한다. | VERIFIED | permission-modes | "`acceptEdits` mode lets Claude create and edit files in your working directory without prompting." | Accept edits (VS Code 표기: Edit automatically) |
| C25 | Accept edits는 mkdir·touch·rm·rmdir·mv·cp·sed 같은 파일 명령도 폴더 안에서는 묻지 않고 허용한다(rm 포함). | VERIFIED | permission-modes | "In addition to file edits, `acceptEdits` mode auto-approves common filesystem Bash commands: `mkdir`, `touch`, `rm`, `rmdir`, `mv`, `cp`, and `sed`." | Accept edits |
| C26 | Accept edits는 고친 결과를 나중에 편집기나 git diff로 검토하고 싶을 때 쓰도록 안내된다. | VERIFIED | permission-modes | "Use `acceptEdits` when you want to review changes in your editor or via `git diff` after the fact rather than approving each edit inline." | Accept edits |
| C27 | Plan 모드는 조사하고 계획만 제안하며 실행은 하지 않는다. | VERIFIED | permission-modes | "Plan mode tells Claude to research and propose changes without making them." | Plan |
| C28 | Plan 모드의 Claude는 파일을 읽고 탐색용 명령을 실행하고 계획을 쓰지만 소스 파일은 고치지 않는다. | VERIFIED | permission-modes | "Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." | Plan |
| C29 | Plan 모드는 Shift+Tab으로 켜거나 프롬프트 앞에 /plan을 붙여 한 번만 쓸 수 있다(CLI 기준). | VERIFIED | permission-modes | "Enter plan mode by pressing `Shift+Tab` or prefixing a single prompt with `/plan`." | /plan |
| C30 | 계획이 나오면 'Yes, and use auto mode' / 'Yes, manually approve edits' / 'No, keep planning' 중에서 고른다. | VERIFIED | permission-modes | "**Yes, manually approve edits**: approve and review each edit individually." | Yes, and use auto mode · Yes, manually approve edits · No, keep planning |
| C31 | 'No, keep planning'을 고르면 계획 모드에 남아 고칠 점을 말해 줄 수 있다. | VERIFIED | permission-modes | "**No, keep planning**: stay in plan mode and tell Claude what to change." | No, keep planning |
| C32 | 계획을 승인하면 계획 모드가 끝나고 Claude가 편집을 시작한다. | VERIFIED | permission-modes | "Approving a plan exits plan mode and switches the session to the permission mode each approve option describes, so Claude starts editing." | — |
| C33 | Ctrl+G로 제안된 계획을 텍스트 편집기에서 직접 고친 뒤 진행할 수 있다(CLI 기준). | VERIFIED | permission-modes | "Press `Ctrl+G` to open the proposed plan in your default text editor and edit it directly before Claude proceeds." | — |
| C34 | Auto 모드는 일상적인 허락 질문 없이 실행하되, 별도의 분류기 모델이 실행 전에 행동을 검사한다. | VERIFIED | permission-modes | "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." | Auto |
| C35 | Auto 모드는 허락 질문을 줄일 뿐 안전을 보장하지는 않는다. | VERIFIED | permission-modes | "Auto mode reduces permission prompts but does not guarantee safety." | Auto |
| C36 | Auto는 방향을 믿는 작업에 쓰고, 민감한 작업의 검토를 대신하지 말라고 경고한다. | VERIFIED | permission-modes | "Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." | Auto |
| C37 | Auto 모드는 질문 없이 계속 일하도록 Claude를 유도한다(프롬프트나 스킬이 질문을 요구하면 여전히 묻는다). | VERIFIED | permission-modes | "Auto mode also nudges Claude to keep working without stopping for clarifying questions, though Claude still asks when your prompt or a skill explicitly relies on it." | Auto |
| C38 | Auto 모드는 모든 요금제에서 쓸 수 있지만 지원 모델이 필요하고 관리자가 끌 수 있다. | VERIFIED | permission-modes | "**Plan**: All plans." | Auto |
| C39 | Auto는 구형 모델(Sonnet 4.5, Opus 4.5, Haiku 4.5, claude-3 계열)에서는 어느 제공자에서도 지원되지 않는다. | VERIFIED | permission-modes | "Older models, including Sonnet 4.5, Opus 4.5, Haiku 4.5, and claude-3 models, are not supported on any provider." | Auto |
| C40 | Claude Code v2.1.283 이상에서는 터미널과 VS Code의 대화형 세션이 기본으로 Auto 모드에서 시작한다. | VERIFIED | permission-modes | "With Claude Code v2.1.283 or later, auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." | Auto |
| C41 | Desktop 앱 세션이 어떤 모드로 시작하는지는 이 문서들에서 확인되지 않는다(표는 터미널·VS Code만 다룬다). | UNVERIFIED | permission-modes | "The table covers sessions you start in a terminal or through the VS Code extension; for the desktop app and claude.ai, see the Desktop and Web tabs in" | — |
| C42 | Auto 모드의 분류기는 프로덕션 배포·마이그레이션 같은 행동을 기본으로 막는다. | VERIFIED | permission-modes | "Production deploys and migrations" | Auto |
| C43 | 분류기는 세션 이전부터 있던 파일을 되돌릴 수 없게 파괴하는 행동도 기본으로 막는다. | VERIFIED | permission-modes | "Irreversibly destroying files that existed before the session" | Auto |
| C44 | git reset --hard, git clean -fd 등 커밋하지 않은 변경을 버리는 명령도 기본 차단 목록에 있다. | VERIFIED | permission-modes | "`git reset --hard`, `git checkout -- .`, `git restore .`, `git clean -fd`, `git stash drop`, or `git stash clear`, which the classifier presumes would discard uncommitted changes" | Auto |
| C45 | 작업 폴더 안의 로컬 파일 작업은 Auto에서 기본 허용이다. | VERIFIED | permission-modes | "Local file operations in your working directory" | Auto |
| C46 | 분류기가 같은 종류를 연속 3번 또는 합계 20번 막으면 Auto가 멈추고 다시 사용자에게 묻는다. | VERIFIED | permission-modes | "if the classifier blocks an action 3 times in a row or 20 times total, auto mode pauses and Claude Code resumes prompting." | Auto |
| C47 | Auto에서 막힌 행동은 /permissions의 'Recently denied' 탭에 남고 r 키로 수동 승인 재시도를 할 수 있다. | VERIFIED | permission-modes | "Claude Code shows a notification and lists the action in `/permissions` under the **Recently denied** tab, where you can press `r` to retry it with a manual approval." | Recently denied |
| C48 | 대화 중에 말한 '하지 마' 같은 경계는 분류기가 차단 신호로 읽지만, 규칙으로 저장되지는 않아 압축되면 사라질 수 있다. | VERIFIED | permission-modes | "Boundaries are not stored as rules." | Auto |
| C49 | dontAsk 모드는 묻는 대신 모두 자동 거부하며, CI처럼 입력을 기다리면 안 되는 곳에 쓴다. | VERIFIED | permission-modes | "Use this mode for CI pipelines or restricted environments where you pre-define what Claude may do; the session never waits for input." | dontAsk |
| C50 | dontAsk는 Shift+Tab 순환에 나오지 않고 시작 옵션으로만 지정한다. | VERIFIED | permission-modes | "`dontAsk`: never appears in the cycle; set it with `--permission-mode dontAsk`" | dontAsk |
| C51 | bypassPermissions는 허락 질문과 안전 점검을 꺼서 도구 호출을 즉시 실행한다. | VERIFIED | permission-modes | "`bypassPermissions` mode disables permission prompts and safety checks so tool calls execute immediately, including writes to" | bypass permissions |
| C52 | bypassPermissions는 호스트를 해칠 수 없는 격리된 컨테이너·VM에서만 쓰라고 경고한다. | VERIFIED | permission-modes | "Only use this mode in isolated environments like containers, VMs, or dev containers without internet access, where Claude Code cannot damage your host system." | bypass permissions |
| C53 | bypassPermissions는 프롬프트 인젝션(숨은 명령 주입)이나 의도치 않은 행동을 막아 주지 않는다. | VERIFIED | permission-modes | "`bypassPermissions` offers no protection against prompt injection or unintended actions." | bypass permissions |
| C54 | bypassPermissions는 시작할 때 켜 두지 않은 세션에서는 도중에 들어갈 수 없다. | VERIFIED | permission-modes | "You can't enter `bypassPermissions` from a session you started without it enabled." | bypass permissions |
| C55 | 어떤 모드에서도 자동 승인되지 않는 행동이 있다(명시적 ask 규칙, rm·rmdir 위험 경로 삭제 등). | VERIFIED | permission-modes | "Claude Code doesn't auto-approve the following in any mode, including `bypassPermissions`" | — |
| C56 | 루트·홈·작업 폴더 같은 '중요 경로'는 rm·rmdir 삭제 명령으로부터 보호된다. | VERIFIED | permission-modes | "Critical paths are the directories Claude Code protects from `rm` and `rmdir` commands, such as the filesystem root, your home directory, and your working directory." | — |
| C57 | 보호 경로(.git, .claude 등)에 쓰는 일은 bypass 모드를 빼면 자동 승인되지 않는다. | VERIFIED | permission-modes | "Writes to a small set of paths are never auto-approved, except in `bypassPermissions` mode and in interactive terminal sessions in plan mode with" | — |
| C58 | CLI에서는 Shift+Tab으로 default, acceptEdits, plan 순서로 모드를 돌려 가며 바꾼다. | VERIFIED | permission-modes | "**During a session**: press `Shift+Tab` to cycle permission modes." | Shift+Tab |
| C59 | CLI 하단 상태 표시줄은 현재 모드를 'manual mode on', 'accept edits on', 'plan mode on' 등으로 보여 준다. | VERIFIED | permission-modes | "The status bar shows the active mode as a gray `⏸ manual mode on` for `default`, or as `⏵⏵ accept edits on`, `⏸ plan mode on`, `⏵⏵ auto mode on`, `⏵⏵ don't ask on`, or `⏵⏵ bypass permissions on`." | manual mode on · accept edits on · plan mode on · auto mode on · bypass permissions on |
| C60 | Desktop에서는 Code 탭의 프롬프트 상자 아래 줄에 있는 모드 선택기로 모드를 바꾼다. | VERIFIED | permission-modes | "**During a session**: in the Code tab, use the mode selector in the row under the prompt box." | Code tab · mode selector |
| C61 | Desktop의 모드 선택기에는 모든 모드가 보이지 않으며, Auto는 사용 가능할 때만 나타난다. | VERIFIED | permission-modes | "Not every mode appears in the selector:" | mode selector · Auto |
| C62 | Desktop에서 Bypass permissions는 Pro·Max·Ultra에서는 설정의 'Allow bypass permissions mode' 토글이 필요하고, Team·Enterprise에서는 조직 정책이 정한다. | VERIFIED | permission-modes | "**Bypass permissions**: requires the **Allow bypass permissions mode** toggle in Desktop settings on Pro, Max, and Ultra plans; on Team and Enterprise plans, organization policy controls it instead" | Allow bypass permissions mode · Bypass permissions |
| C63 | Desktop에서 고른 모드는 폴더별로 기억되고 defaultMode보다 우선한다. | VERIFIED | permission-modes | "A mode you pick in the mode selector is remembered per folder and takes precedence over `defaultMode` for that folder." | mode selector |
| C64 | Desktop에서 Plan을 고르면 그 세션에만 적용되고 폴더 기억에는 남지 않는다. | VERIFIED | permission-modes | "Plan is the exception: picking it applies to the current session only." | Plan |
| C65 | Desktop의 Manual 외 나머지 모드의 화면 라벨 전체 목록은 이 문서들에서 확인되지 않는다(Auto·Bypass permissions만 이름이 나온다). | UNVERIFIED | permission-modes | "Not every mode appears in the selector:" | mode selector |
| C66 | VS Code는 프롬프트 상자 아래 모드 표시기에서 Manual, Edit automatically, Plan, Auto, Bypass permissions 라벨로 바꾼다. | VERIFIED | permission-modes | "**During a session**: click the mode indicator at the bottom of the prompt box." | Manual · Edit automatically · Plan · Auto · Bypass permissions |
| C67 | 웹(클라우드) 세션은 Accept edits·Plan·Auto만 제공하고 Manual 대신 Accept edits가 보이며, Bypass permissions는 쓸 수 없다. | VERIFIED | permission-modes | "Accept edits corresponds to `default` mode: cloud sessions pre-approve file edits regardless of mode, so the dropdown shows Accept edits instead of Manual." | Accept edits · Plan · Auto |
| C68 | Cowork는 이 권한 모드를 쓰지 않고 자체 모드를 가진다. | VERIFIED | permission-modes | "Cowork doesn't use these modes." | Cowork |
| C69 | deny 규칙은 어떤 모드에서도 막고, allow 규칙은 bypassPermissions에서는 효과가 없다. | VERIFIED | permission-modes | "Deny rules block in every mode, including `bypassPermissions`." | — |

## 3. 권한 규칙 기초 (allow · ask · deny)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C70 | Claude Code는 도구 종류별로 허락이 필요한 단계식 권한 체계를 쓴다. | VERIFIED | permissions | "Claude Code uses a tiered permission system to balance power and safety." | — |
| C71 | 파일 수정 승인은 '다시 묻지 않기'를 골라도 설정 파일에 저장되지 않고 세션이 끝날 때까지만 유지된다. | VERIFIED | permissions | "A file-modification approval isn't saved to the file: as the table shows, it lasts until the session ends." | Yes, and don't ask again |
| C72 | Bash 명령에서 '다시 묻지 않기'를 고르면 그 저장소의 이후 세션에도 규칙이 적용된다. | VERIFIED | permissions | "The rule applies to future sessions anywhere in that repository, including sessions started in subdirectories and in worktrees." | Yes, and don't ask again |
| C73 | 허락 창에서 승인·거부 시 Tab으로 Claude에게 보낼 한마디를 덧붙일 수 있다(CLI 기준). | VERIFIED | permissions | "You can attach a note to Claude when you approve or deny a single action." | Yes · No |
| C74 | /permissions에서 현재 권한 규칙과 그 출처 설정 파일을 보고 관리한다. | VERIFIED | permissions | "You can view and manage Claude Code's tool permissions with `/permissions`." | /permissions |
| C75 | Allow 규칙은 수동 승인 없이 해당 도구를 쓰게 한다. | VERIFIED | permissions | "**Allow** rules let Claude Code use the specified tool without manual approval." | Allow |
| C76 | Ask 규칙은 해당 도구를 쓸 때마다 확인을 묻는다. | VERIFIED | permissions | "**Ask** rules prompt for confirmation whenever Claude Code tries to use the specified tool." | Ask |
| C77 | Deny 규칙은 해당 도구 사용을 막는다. | VERIFIED | permissions | "**Deny** rules prevent Claude Code from using the specified tool." | Deny |
| C78 | 규칙은 deny, ask, allow 순으로 평가되어 가장 먼저 맞는 것이 결과를 정한다. | VERIFIED | permissions | "Rules are evaluated in order: deny, then ask, then allow." | — |
| C79 | allow 규칙으로 deny 규칙의 예외를 만들 수 없다. | VERIFIED | permissions | "An allow rule can't carve an exception out of a deny rule." | — |
| C80 | 권한 규칙은 모델이 아니라 Claude Code가 강제하므로 프롬프트나 CLAUDE.md 문구로는 허용 범위가 바뀌지 않는다. | VERIFIED | permissions | "Permission rules are enforced by Claude Code, not by the model." | — |
| C81 | 규칙은 'Tool' 또는 'Tool(조건)' 형식으로 쓴다. | VERIFIED | permissions | "Permission rules follow the format `Tool` or `Tool(specifier)`." | — |
| C82 | ls, cat, grep 같은 읽기 전용 명령 모음은 모든 모드에서 묻지 않고 실행된다. | VERIFIED | permissions | "Claude Code recognizes a built-in set of Bash commands as read-only and runs them without a permission prompt in every mode" | — |
| C83 | Claude는 기본적으로 실행한 폴더의 파일에 접근하며, /add-dir로 접근 폴더를 늘릴 수 있다. | VERIFIED | permissions | "By default, Claude has access to files in the directory where you launched it." | /add-dir |
| C84 | 절대 안 되는 일은 CLAUDE.md 문장보다 deny 규칙이나 훅(자동 실행 장치)에 두라고 안내한다. | VERIFIED | best-practices | "`deny` rules hold in every permission mode, including auto and `bypassPermissions`, which is exactly why the `.env` rule belongs there:" | — |
| C85 | Auto 모드는 하드 규칙이 아니라 판단이라 틀릴 수 있다. | VERIFIED | best-practices | "Auto mode is a classifier model judging each action rather than a hard rule." | Auto |

## 4. 체크포인트와 되돌리기 (rewind)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C86 | Claude Code는 Claude가 파일 편집 도구로 한 변경을 자동으로 추적해 되돌릴 수 있게 한다. | VERIFIED | checkpointing | "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." | — |
| C87 | 턴을 시작하는 프롬프트를 보낼 때마다 새 체크포인트가 만들어진다. | VERIFIED | checkpointing | "Every prompt you send that starts a turn creates a new checkpoint" | — |
| C88 | 한 세션에서 최근 체크포인트 100개까지 파일 스냅샷이 유지된다. | VERIFIED | checkpointing | "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." | — |
| C89 | 체크포인트는 대화와 함께 저장되어 세션을 이어가도 /rewind를 쓸 수 있다. | VERIFIED | checkpointing | "Claude Code saves checkpoints with the conversation, so you can still run `/rewind` after you resume a session" | /rewind |
| C90 | 스냅샷은 기본 약 30일 뒤 정리되고, 지워진 뒤에는 되감기가 실패할 수 있다. | VERIFIED | checkpointing | "by default about 30 days after the session last saved one." | — |
| C91 | 되감기 메뉴는 /rewind를 입력하거나 입력창이 빈 상태에서 Esc를 두 번 눌러 연다(CLI 기준). | VERIFIED | checkpointing | "Run `/rewind`, or press `Esc` twice when the prompt input is empty, to open the rewind menu." | /rewind · Esc Esc |
| C92 | 입력창에 글자가 있으면 Esc 두 번은 메뉴 대신 글자를 지운다. | VERIFIED | checkpointing | "If the prompt input contains text, double `Esc` clears it instead of opening the menu." | — |
| C93 | Desktop 앱에서 같은 되감기 메뉴가 같은 방식으로 열리는지는 이 문서들에서 확인되지 않는다. | UNVERIFIED | checkpointing | "Run `/rewind`, or press `Esc` twice when the prompt input is empty, to open the rewind menu." | — |
| C94 | 'Restore code and conversation'은 코드와 대화를 그 시점으로 함께 되돌린다. | VERIFIED | checkpointing | "**Restore code and conversation**: revert both code and conversation to that point" | Restore code and conversation |
| C95 | 'Restore conversation'은 대화만 그 시점으로 되감고 지금의 코드는 그대로 둔다. | VERIFIED | checkpointing | "**Restore conversation**: rewind to that message while keeping current code" | Restore conversation |
| C96 | 'Restore code'는 파일 변경만 되돌리고 대화는 유지한다. | VERIFIED | checkpointing | "**Restore code**: revert file changes while keeping the conversation" | Restore code |
| C97 | 'Summarize from here'는 선택 지점 이후 대화를 요약으로 압축해 컨텍스트 공간을 확보한다. | VERIFIED | checkpointing | "**Summarize from here**: compress the conversation from this point forward into a summary, freeing context window space" | Summarize from here |
| C98 | 'Summarize up to here'는 선택 지점 이전 대화를 요약하고 이후 메시지는 그대로 둔다. | VERIFIED | checkpointing | "**Summarize up to here**: compress the conversation before this point into a summary, keeping later messages intact" | Summarize up to here |
| C99 | 'Never mind'는 아무것도 바꾸지 않고 목록으로 돌아간다. | VERIFIED | checkpointing | "**Never mind**: return to the message list without making changes" | Never mind |
| C100 | 선택한 지점에 추적된 파일 변경이 있을 때만 두 가지 코드 복원 항목이 나타난다. | VERIFIED | checkpointing | "The two code restore options appear only when the selected checkpoint has tracked file changes to revert." | — |
| C101 | 대화를 복원하면 그때의 프롬프트가 입력창에 되돌아와 다시 보내거나 고칠 수 있다. | VERIFIED | checkpointing | "After restoring the conversation or choosing Summarize from here, the original prompt from the selected message is restored into the input field so you can re-send or edit it." | — |
| C102 | 요약은 디스크의 파일을 바꾸지 않고 원래 메시지도 기록에 남는다. | VERIFIED | checkpointing | "Summarizing doesn't change files on disk, and the original messages stay in the session transcript, so Claude can still reference the details." | — |
| C103 | Bash 명령만 바꾼 파일은 추적되지 않아 되감아도 그대로이며 git 같은 버전 관리로 되돌려야 한다. | VERIFIED | checkpointing | "A file that only Bash commands changed isn't tracked and stays as it is." | — |
| C104 | Claude가 이미 편집한 파일에 대한 이후 Bash 변경은 /rewind가 되돌린다. | VERIFIED | checkpointing | "Once Claude has edited a file with its file editing tools in your conversation, `/rewind` undoes changes that Bash commands make to that file afterward." | — |
| C105 | 서브에이전트(보조 Claude)가 고친 다른 파일은 되감기로 복원되지 않고 git으로 되돌려야 한다. | VERIFIED | checkpointing | "rewinding restores only the files Claude had already edited in your conversation." | — |
| C106 | 데이터베이스·API·배포처럼 외부 시스템에 닿는 행동은 체크포인트로 되돌릴 수 없다. | VERIFIED | how-claude-code-works | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." | — |
| C107 | 내가 직접 바꾼 파일이나 다른 세션의 편집은 보통 체크포인트에 잡히지 않는다. | VERIFIED | checkpointing | "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." | — |
| C108 | 체크포인트는 현재 세션에서 편집된 파일만 추적한다. | VERIFIED | checkpointing | "Checkpointing only tracks files that have been edited within the current session." | — |
| C109 | 심볼릭 링크·하드 링크 파일은 되감기에서 건너뛴다. | VERIFIED | checkpointing | "Checkpointing doesn't rewind symlinked or hard-linked files." | — |
| C110 | 체크포인트는 세션 단위의 빠른 복구용이며 영구 기록은 git 같은 버전 관리를 쓰라고 한다. | VERIFIED | checkpointing | "For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." | — |
| C111 | 체크포인트는 git을 대체하지 않고 함께 쓴다. | VERIFIED | best-practices | "They work alongside git rather than replacing it." | — |
| C112 | 대담한 방법을 먼저 시도하고 안 되면 되감는 식으로 쓸 수 있다. | VERIFIED | best-practices | "That makes it low-risk to try the bolder approach first and rewind if it doesn't work out." | — |

## 5. 컨텍스트 창과 압축

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C113 | 컨텍스트 창은 지시·읽은 파일·Claude의 답·화면에 안 보이는 내용까지 포함해 Claude가 이 세션에서 아는 모든 것이다. | VERIFIED | context-window | "Claude Code's context window holds everything Claude knows about your session: your instructions, the files it reads, its own responses, and content that never appears in your terminal." | — |
| C114 | 입력하기 전에 CLAUDE.md, 자동 메모리, MCP 도구 이름, 스킬 설명이 이미 컨텍스트에 올라간다. | VERIFIED | context-window | "**Before you type anything**: CLAUDE.md, auto memory, MCP tool names, and skill descriptions all load into context." | — |
| C115 | 파일을 읽을 때마다 컨텍스트가 늘어난다. | VERIFIED | context-window | "each file read adds to context" | — |
| C116 | 긴 세션은 컨텍스트 창에 맞추려고 대화 기록을 요약(압축)한다. | VERIFIED | context-window | "When a long session compacts, Claude Code summarizes the conversation history to fit the context window." | — |
| C117 | 컨텍스트가 한계에 가까워지면 자동 압축이 돌아 창이 찼다고 세션이 끝나지 않는다. | VERIFIED | context-window | "Claude Code compacts automatically as you approach the limit, so a full context window doesn't end your session." | — |
| C118 | 압축 직후 최근 수정한 파일 최대 5개를 다시 읽어 온다. | VERIFIED | context-window | "Right after compaction, Claude Code re-reads up to five of the files Claude has read or edited in the session, choosing the ones modified most recently." | — |
| C119 | 긴 작업을 시작하기 전에 /compact에 초점을 적어 요약에 남길 내용을 고를 수 있다. | VERIFIED | context-window | "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." | /compact |
| C120 | 관련 없는 일로 넘어갈 때는 /clear를 쓰라고 안내한다. | VERIFIED | context-window | "**Clear between tasks**: run `/clear` when switching to unrelated work." | /clear |
| C121 | 옛 대화는 다음에 필요한 파일을 밀어내고 메시지마다 토큰을 쓴다. | VERIFIED | context-window | "Old conversation crowds out the files you need next and costs tokens on every message." | — |
| C122 | /context로 지금 컨텍스트 사용량을 항목별로 볼 수 있다. | VERIFIED | context-window | "run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." | /context |
| C123 | 서브에이전트는 자기 컨텍스트 창에서 조사하므로 큰 파일 읽기가 내 컨텍스트에 쌓이지 않는다. | VERIFIED | context-window | "in its own separate context window, so the large file reads stay out of yours." | — |
| C124 | 일부 모델은 100만 토큰 컨텍스트 창을 지원한다. | VERIFIED | context-window | "support a 1 million token context window." | — |
| C125 | 대부분의 최신 모델에서 컨텍스트가 모자랄 일은 드물지만, 쓸데없는 컨텍스트에는 비용을 낸다. | VERIFIED | best-practices | "With a 1M-token window on most current models and compaction near the top of it, you'll rarely run out of context." | — |
| C126 | 대화 전체가 매 요청마다 전송되므로 관련 없는 일을 한 세션에 쌓으면 매번 다시 읽는 비용이 든다. | VERIFIED | best-practices | "Every request sends the whole conversation, so a session that's collected three unrelated tasks re-reads all three on every turn of the fourth." | — |
| C127 | /clear는 비용이 들지 않고 다음 일이 이전 일의 기록값을 계속 내지 않게 해 준다. | VERIFIED | best-practices | "It costs nothing, and it means the next task doesn't keep paying for the previous one's history." | /clear |

## 6. 잘 맡기는 법 (프롬프트·검증·중간 개입)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C128 | 대부분의 경우 새 세션에서 평범한 첫 프롬프트도 별도 설정 없이 잘 동작하도록 만들어져 있다. | VERIFIED | best-practices | "Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." | — |
| C129 | 구체적인 프롬프트는 Claude가 모르는 정보를 줘서 효과가 있다. | VERIFIED | best-practices | "A specific prompt helps for the same reason, because it gives Claude information it doesn't already have." | — |
| C130 | 두 가지 괜찮은 방법 중 선호가 있다면 코드에서 읽을 수 없으니 미리 말하라고 한다. | VERIFIED | best-practices | "The same goes for a preference between two reasonable approaches: Claude can't read that from the code, so if you care which one it picks, say so up front." | — |
| C131 | 파일은 @와 경로로 넣고, 화면이나 오류는 스크린샷을 프롬프트에 붙일 수 있다. | VERIFIED | best-practices | "An image: paste the screenshot of the design or the error into the prompt." | @ |
| C132 | 뭘 원하는지 모를 때는 Claude에게 질문으로 인터뷰해 달라고 하고 결과를 SPEC.md로 쓰게 할 수 있다. | VERIFIED | best-practices | "Ask Claude to interview you instead:" | SPEC.md |
| C133 | 명세 파일이 생기면 새 세션에서 그 파일로 만들기 시작해 깨끗한 컨텍스트와 완료 기준을 얻는다. | VERIFIED | best-practices | "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." | — |
| C134 | 탐색적 질문이라면 모호한 프롬프트도 괜찮다. | VERIFIED | best-practices | "And when you're exploring rather than fixing something specific, a vague prompt like `what would you improve in this file?` is completely fine." | — |
| C135 | 결과물의 범위를 키우고 싶으면 'be ambitious'라고 말하라고 한다. | VERIFIED | best-practices | "One phrase that does still help is `be ambitious`." | — |
| C136 | '탐색, 계획, 코딩' 3단계를 따로 설명한 절은 best-practices 이 판에 없고, 계획 모드는 변경 전 검토용으로 소개된다. | UNVERIFIED | common-workflows | "For changes you want to review before they touch disk, switch to plan mode." | Plan |
| C137 | Claude는 일이 끝난 것처럼 보이면 멈추므로, 진짜 끝났는지 확인할 실행 가능한 검사가 필요하다. | VERIFIED | best-practices | "Claude stops when the work looks done." | — |
| C138 | 통과/실패로 돌아오는 검사를 주면 Claude가 스스로 고치고 다시 확인하며 계속 간다. | VERIFIED | best-practices | "If you give it something that comes back pass or fail, Claude can close that loop itself." | — |
| C139 | 검사는 테스트 파일, 빌드 결과, 린터, 스크린샷 비교 등 Claude가 결과를 읽을 수 있는 것이면 된다. | VERIFIED | best-practices | "Give Claude something it can run that comes back pass or fail." | — |
| C140 | Claude에게 실행한 명령과 그 출력 또는 스크린샷 같은 증거를 요구하라고 한다. | VERIFIED | best-practices | "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." | — |
| C141 | 완료 후 /verify를 쓰면 Claude가 앱을 실제로 실행해 결과를 보게 할 수 있다. | VERIFIED | best-practices | "which has Claude build and run the app and look at the result." | /verify |
| C142 | 프롬프트나 CLAUDE.md의 지시는 모델이 따르지만 반드시 따른다는 보장은 없다. | VERIFIED | best-practices | "but there's no *guarantee* that it'll follow your instructions." | — |
| C143 | Manual 모드는 안전하지만 열 번째 질문쯤에는 읽지 않고 승인하게 되고 자리를 비우면 멈춘다. | VERIFIED | best-practices | "Safe, but after the tenth prompt you start approving without reading, and nothing moves while you're away from the keyboard." | Manual |
| C144 | Manual이 너무 자주 물으면 /fewer-permission-prompts가 최근 기록에서 읽기 전용 호출을 모아 허용 목록에 추가해 준다. | VERIFIED | best-practices | "`/fewer-permission-prompts` scans your recent transcripts for common read-only Bash and MCP calls and adds them to an allowlist in `.claude/settings.json`." | /fewer-permission-prompts |
| C145 | 처음 1분은 지켜보고, 벗어나면 Esc, 두 번 고쳐도 안 되면 /clear 후 더 나은 프롬프트를 쓰라고 한다. | VERIFIED | best-practices | "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." | Esc · /clear |
| C146 | Esc는 Claude를 도중에 멈추되 그때까지의 작업은 유지해서 방향만 바꿀 수 있다. | VERIFIED | best-practices | "`Esc` stops Claude mid-action and keeps everything up to that point, so you can redirect without losing work." | Esc |
| C147 | 같은 걸 두 번 고쳤는데도 틀리면 세 번째 수정은 실패한 시도 두 개만 더 쌓는다. | VERIFIED | best-practices | "If you've corrected the same thing twice and it's still wrong, a third correction mostly adds to a conversation that already contains two failed attempts for Claude to keep re-reading." | — |
| C148 | 체크포인트는 Claude의 파일 도구로 고친 파일만 다루고 Bash가 건드린 파일은 복원하지 않는다. | VERIFIED | best-practices | "Checkpoints cover the files Claude edited with its own file tools in your main conversation, so a file that only a Bash command touched" | — |
| C149 | 자리를 비우고 맡기기 전에 완료 기준, 자체 확인 수단, 건드릴 수 있는 범위, 멈춤 조건, 승인자를 점검하라고 한다. | VERIFIED | best-practices | "Before a run goes unattended, make sure it knows what done looks like, can check its own work, and can only touch what it should." | — |
| C150 | 글자를 크게 쓰거나 IMPORTANT를 붙이는 건 오히려 규칙을 과적용하게 만든다. | VERIFIED | best-practices | "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." | — |
| C151 | 서브에이전트는 토큰을 쓰므로 비용은 주로 토큰이다. | VERIFIED | best-practices | "What they cost you is mostly tokens, since every subagent sends its own requests and they count against the same usage as your main conversation." | — |
| C152 | 다른 세션에서 검토하면 코드를 짜는 과정을 못 본 독립 검토자를 쉽게 얻는다. | VERIFIED | best-practices | "A second session is also the easiest independent reviewer you can get." | — |
| C153 | Claude Opus 5.5·Sonnet 5.5·Haiku 5.5의 기본 effort(생각 깊이)는 medium이다(모델·요금제에 따라 달라질 수 있음). | VERIFIED | best-practices | "Claude Opus 5.5, Sonnet 5.5, and Haiku 5.5 default to `medium`, which is plenty for everyday feature work with a clear scope." | /effort |

## 7. 비개발자가 따라 해 볼 만한 작업 (일반 워크플로)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| C154 | 이 페이지의 프롬프트 레시피는 어느 Claude Code 화면에서든 쓸 수 있다(Desktop 포함 여부는 'any surface'에 맡김). | VERIFIED | common-workflows | "Each works in any Claude Code surface; adapt the wording to your project." | — |
| C155 | 프로젝트 이해: '이 코드베이스를 개괄해 줘'로 시작한다. | VERIFIED | common-workflows | "give me an overview of this codebase" | — |
| C156 | 넓은 질문에서 시작해 점점 구체적인 영역으로 좁히라고 한다. | VERIFIED | common-workflows | "Start with broad questions, then narrow down to specific areas" | — |
| C157 | 오류 수정: 오류를 재현하는 명령과 스택 트레이스(오류 위치 기록)를 Claude에게 알려 준다. | VERIFIED | common-workflows | "Tell Claude the command to reproduce the issue and get a stack trace" | — |
| C158 | 리팩터링(내용은 그대로 구조만 정리)은 작게 쪼개 테스트 가능한 단위로 한다. | VERIFIED | common-workflows | "Do refactoring in small, testable increments" | — |
| C159 | 테스트를 맡길 때는 무엇을 검증할지 구체적으로 말한다. | VERIFIED | common-workflows | "When asking for tests, be specific about what behavior you want to verify." | — |
| C160 | 문서화: 원하는 문서 스타일을 지정한다. | VERIFIED | common-workflows | "Specify the documentation style you want (JSDoc, docstrings, etc.)" | — |
| C161 | Claude가 만든 PR(변경 제안서)은 제출 전에 사람이 검토하고 위험 요소를 짚어 달라고 하라고 한다. | VERIFIED | common-workflows | "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." | — |
| C162 | 코드가 아닌 메모·문서 폴더에서도 같은 방식으로 검색·편집·정리가 된다. | VERIFIED | common-workflows | "Claude Code works in any directory." | — |
| C163 | @로 파일·폴더를 붙여 Claude가 읽기를 기다리지 않고 바로 내용을 넣을 수 있다. | VERIFIED | common-workflows | "Use @ to quickly include files or directories without waiting for Claude to read them." | @ |
| C164 | 이미지는 창에 끌어다 놓거나 붙여넣거나 경로를 알려 줄 수 있다. | VERIFIED | common-workflows | "Drag and drop an image into the Claude Code window" | — |
| C165 | 큰 코드 탐색은 서브에이전트에 맡겨 요약만 받으면 내 컨텍스트가 덜 찬다. | VERIFIED | common-workflows | "Exploring a large codebase fills your context with file reads." | — |
| C166 | 계획 모드는 디스크에 닿기 전에 변경을 검토하고 싶을 때 쓰며, 승인 전에는 편집이 없다. | VERIFIED | common-workflows | "For changes you want to review before they touch disk, switch to plan mode." | Plan |
| C167 | 이어서 작업하려면 이전 대화가 로컬에 저장되어 있다. | VERIFIED | common-workflows | "Claude Code saves every conversation locally." | — |
| C168 | Claude는 자신의 기능과 한계에 대한 질문에 현재 문서를 찾아 답할 수 있다. | VERIFIED | common-workflows | "Claude can answer questions about its own features and limitations." | — |
| C169 | 예약 작업 프롬프트에는 성공의 모습과 결과 처리법을 분명히 쓴다(중간에 질문할 수 없으므로). | VERIFIED | common-workflows | "When writing prompts for scheduled tasks, be explicit about what success looks like and what to do with results." | — |

## 가이드에 쓸 때 주의

- **Desktop 화면과 CLI 안내가 섞여 있다.** Shift+Tab, Esc 두 번, `/rewind`, `/permissions`, `/compact`, `/clear` 같은 단축키·슬래시 명령은 문서가 CLI 기준으로 설명한다. Desktop(Code 탭)에서는 "프롬프트 상자 아래 줄의 모드 선택기"로 모드를 바꾼다는 것만 확인됐다. Desktop에서 되감기 메뉴를 어떻게 여는지, 모드 선택기의 각 항목 라벨(Manual 외)은 이 7개 문서로 확인되지 않았다(UNVERIFIED 행 참고). 장을 쓸 때 실제 Desktop 화면을 직접 보고 라벨을 채워야 한다.
- **기본 모드가 Auto로 바뀐 점.** v2.1.283 이상의 터미널·VS Code 세션은 Auto로 시작하고, 이전 버전은 요금제에 따라 달랐다. 문서의 "Manual" 설명(묻는 모드)과 실제 시작 모드가 다르므로 "처음엔 Auto일 수 있다. Shift+Tab 또는 모드 선택기로 확인하라"고 써야 한다. Desktop의 시작 모드는 문서에 없다. 버전 번호는 자주 바뀌니 본문에는 넣지 말고 확인 날짜만 남기는 편이 안전하다.
- **Auto는 '안전 보장'이 아니다.** 분류기(위험 행동을 걸러 내는 보조 모델)가 판단하는 방식이라 틀릴 수 있고, 대화 중 말한 "하지 마"는 압축되면 사라질 수 있다. 꼭 막아야 할 일은 deny 규칙이나 훅으로 두라는 것이 문서의 입장이다. 비개발자에게는 "중요한 일은 모드를 Manual로 바꾸거나 Plan으로 먼저 보게 한다" 정도로 풀어 쓰는 것이 문서와 어긋나지 않는다.
- **Accept edits에 rm(삭제)이 포함된다.** 작업 폴더 안에서는 파일 삭제 명령도 묻지 않고 실행된다. 독자에게 "수정만 허락하는 모드"로 오해시키지 말 것. 또한 작업 폴더 밖, 보호 경로(.git, .claude 등), 위험 경로 삭제는 여전히 묻는다.
- **되돌리기의 한계를 분명히.** 되감기는 Claude의 파일 편집 도구가 고친 파일만 복원한다. Bash 명령만 바꾼 파일, 서브에이전트가 고친 다른 파일, 내가 직접 고친 파일, 데이터베이스·API·배포 같은 바깥 세계의 변화는 되돌릴 수 없다. 영구 기록은 git 같은 버전 관리 몫이다. "Ctrl+Z처럼 다 된다"는 식으로 쓰면 안 된다.
- **'탐색, 계획, 코딩' 3단계 팁은 이 판 best-practices에 없다.** 계획 모드 설명은 permission-modes와 common-workflows에서 가져와야 하고, "작은 단계로 시키기" 같은 일반 조언은 이 7개 문서가 아니라 00-common 장의 근거를 쓴다. best-practices의 핵심은 "검증 기준을 준다, 구체적으로 쓴다, 일찍 개입한다, 두 번 고쳐도 안 되면 /clear"다.
- **best-practices는 개발자 취향이 짙다.** hooks, Stop hook, 서브에이전트, worktree 같은 내용은 비개발자 장에는 넣지 않거나 "나중에" 정도로만 언급한다. 모델·effort 기본값(Opus 5.5, medium)은 변동 가능한 값이다.
- **인용 규칙.** 모든 영어 인용은 파일 원문에서 기계 검증을 통과했다. 한국어 풀이는 인용보다 강하지 않게 썼지만, 일부 행(예: 'Auto는 모든 요금제'는 "All plans"가 근거)은 모델·제공자 조건이 따로 붙는다. 행의 단정이 인용보다 넓어 보이면 인용 쪽으로 좁혀 쓸 것.

## 이 그룹에서 장으로 쓸 만한 구성

**4장 허락과 되돌리기 (제안 순서)**
1. Claude가 컴퓨터에서 실제로 하는 일: 읽기·고치기·명령 실행 (C1~C9). "묻기 전에 알아야 할 것: Claude는 행동하는 도구다."
2. 허락 질문이 뜨는 이유와 세 가지 답: Yes / 다시 묻지 않기 / No, 그리고 한마디 덧붙이기.
3. 권한 모드 한눈에 비교표(Manual·Accept edits·Plan·Auto, bypass는 "쓰지 마세요" 경고 한 칸): 모드마다 묻지 않는 것과 위험을 짝지어 소개. 모드 바꾸는 법은 Desktop은 선택기, CLI는 Shift+Tab으로 나눠 쓴다.
4. 처음엔 Plan으로 먼저 보기 → 승인 → 실행 흐름 (예시 프롬프트 포함).
5. allow/ask/deny 한 줄 설명과 "문장 지시와 규칙은 다르다" 한마디.
6. 되돌리기: 체크포인트 메뉴 항목 4개(Restore code and conversation 등)를 표로, "되돌릴 수 있는 것 / 없는 것" 대비 표, git과 병행.
7. 직접 해 보기: 가짜 폴더에서 파일 하나를 고치게 한 뒤 되감기.

**5장 잘 맡기는 법 (제안 순서)**
1. 대화처럼 맡기기: 완벽한 프롬프트 불필요, 아쉬운 예/나은 예(고쳐 주세요 vs 증상·위치·완료 기준).
2. 끝났는지 확인하는 기준 주기: "통과/실패로 확인할 수 있는 것을 하나 달라", 증거 요구하기.
3. 모를 땐 인터뷰시키기(SPEC.md) → 새 세션에서 시작.
4. 중간에 개입하기: Esc, 두 번 고쳐도 안 되면 새 대화.
5. 컨텍스트 창 기초: 무엇이 쌓이는지, 자동 압축, /compact·/clear를 언제 쓰는지, CLAUDE.md에 오래 갈 규칙 쓰기.
6. 해 볼 만한 일: 프로젝트(폴더) 이해하기, 오류 고치기, 문서 만들기·고치기, 테스트 요청, 노트 폴더 정리. 각각 프롬프트 한 줄과 "확인 기준" 한 줄.
7. 용어 정리: 에이전트 루프, 컨텍스트 창, 압축, 체크포인트, 분류기, 서브에이전트.


# 부록 D


원본: `scratchpad/cc/raw/` 의 memory, features-overview, skills, mcp-quickstart, mcp(소개·보안 부분), plugins_install, plugins_security, sub-agents(소개), hooks-guide(소개). 문서 확인일: 2026-10-31 기준 수집본. 문서 대부분은 터미널(CLI) 기준으로 쓰여 있고, "데스크톱 앱 Code 탭에서도 같은지"는 이 파일들만으로는 확인되지 않는 것이 많다. 그런 행은 화면 이름 칸에 따로 적었다.

## 1. CLAUDE.md — 무엇이고 왜 쓰나

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D1 | Claude Code는 대화(세션)를 새로 열 때마다 이전 내용을 기억하지 못한 채 빈 상태로 시작한다. | VERIFIED | memory | "Each Claude Code session begins with a fresh context window." | — |
| D2 | 이 빈 상태를 메우는 장치가 둘 있다. 내가 쓰는 지침 파일(CLAUDE.md)과 Claude가 스스로 적는 메모(자동 메모리, auto memory). | VERIFIED | memory | "Two mechanisms carry knowledge across sessions:" | — |
| D3 | CLAUDE.md는 "Claude의 행동을 이끌고 싶을 때" 쓰고, 자동 메모리는 내 교정에서 Claude가 알아서 배우게 한다. | VERIFIED | memory | "Use CLAUDE.md files when you want to guide Claude's behavior." | — |
| D4 | CLAUDE.md는 마크다운(간단한 서식을 쓰는 일반 텍스트) 파일로, 프로젝트·개인 작업 방식·조직 전체에 대한 지속적인 지침을 담는다. | VERIFIED | memory | "CLAUDE.md files are markdown files that give Claude persistent instructions for a project, your personal workflow, or your entire organization." | — |
| D5 | CLAUDE.md는 "당신이 매번 다시 설명하게 될 내용을 적어 두는 곳"으로 다루라고 한다. | VERIFIED | memory | "Treat CLAUDE.md as the place you write down what you'd otherwise re-explain." | — |
| D6 | Claude가 같은 실수를 두 번 하면 CLAUDE.md에 추가할 때다. | VERIFIED | memory | "Claude makes the same mistake a second time" | — |
| D7 | 지난 세션에 입력한 것과 같은 교정을 채팅에 또 입력하고 있다면 CLAUDE.md에 추가할 신호다. | VERIFIED | memory | "You type the same correction or clarification into chat that you typed last session" | — |
| D8 | CLAUDE.md에는 매 세션 Claude가 알아야 할 사실(빌드 명령, 규칙, 프로젝트 구조 등)만 넣는다. 여러 단계 절차나 일부 코드에만 해당하는 내용은 스킬이나 경로별 규칙으로 옮긴다. | VERIFIED | memory | "If an entry is a multi-step procedure or only matters for one part of the codebase, move it to a" | — |
| D9 | Claude는 CLAUDE.md를 '강제 설정'이 아니라 '참고할 맥락'으로 다룬다. 100% 지킨다는 보장은 없다. | VERIFIED | memory | "Claude treats them as context, not enforced configuration." | — |
| D10 | 지시가 구체적이고 짧을수록 Claude가 더 일관되게 따른다. | VERIFIED | memory | "The more specific and concise your instructions, the more consistently Claude follows them." | — |
| D11 | 지시는 '확인할 수 있을 만큼' 구체적으로 쓴다. 예: "Format code properly" 대신 "Use 2-space indentation". | VERIFIED | memory | "Write instructions that are concrete enough to verify:" | — |
| D12 | CLAUDE.md 한 파일은 200줄 아래를 목표로 한다. 길수록 컨텍스트를 더 먹고 지시를 덜 따른다. | VERIFIED | memory | "target under 200 lines per CLAUDE.md file." | — |
| D13 | 서로 모순되는 지시가 있으면 Claude가 임의로 하나를 고를 수 있다. | VERIFIED | memory | "if two instructions contradict each other, Claude may pick one arbitrarily." | — |
| D14 | 목적별 폴더(`.claude/rules/`)에 마크다운 파일을 나눠 두면 규칙을 주제별로 정리할 수 있다. | VERIFIED | memory | "Place markdown files in your project's `.claude/rules/` directory." | — |
| D15 | 규칙 파일에 `paths` 머리말을 달면 해당 파일을 다룰 때만 적용된다. | VERIFIED | memory | "These conditional rules only apply when Claude is working with files matching the specified patterns." | — |
| D16 | CLAUDE.md 안에 `@경로` 를 쓰면 다른 파일을 함께 불러온다(import). | VERIFIED | memory | "CLAUDE.md files can import additional files using `@path/to/import` syntax." | — |
| D17 | 불러온 파일도 CLAUDE.md와 같이 로드되므로 컨텍스트 비용은 줄지 않는다. 정리용일 뿐이다. | VERIFIED | memory | "Imported files are expanded and loaded into context alongside the CLAUDE.md that references them." | — |
| D18 | CLAUDE.md 안의 HTML 주석(`<!-- -->`)은 Claude에게 전달되기 전에 제거된다. 사람용 메모에 쓸 수 있다. | VERIFIED | memory | "Block-level HTML comments (`<!-- maintainer notes -->`) in CLAUDE.md files are stripped before the content is injected into Claude's context." | — |
| D19 | 점검 도구: `/doctor prompt-audit` 가 오래되거나 서로 충돌하는 지침 파일을 찾아 보고한다. 적용은 내가 요청해야 한다. (v2.1.283 이상) | VERIFIED | memory | "To have Claude check your instruction files for outdated or conflicting content, run `/doctor prompt-audit` in a session." | /doctor prompt-audit |
| D20 | 지침 파일이 너무 길면 시작할 때와 `/status` 에서 경고가 뜬다. | VERIFIED | memory | "If one of your instruction files is over the recommended length, you see a warning at startup and when you run `/status`." | /status |

## 2. CLAUDE.md — 어디에 두나(범위), /init, 불러오는 방식

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D21 | CLAUDE.md는 여러 위치에 둘 수 있고 위치마다 적용 범위가 다르다. 넓은 범위부터 좁은 범위 순으로 로드된다. | VERIFIED | memory | "CLAUDE.md files can live in several locations, each with a different scope." | — |
| D22 | 개인용(모든 프로젝트 공통) 파일은 홈 폴더의 `~/.claude/CLAUDE.md` 이고 내가 직접 쓴 파일이다. | VERIFIED | memory | "User-scope memory files, such as `~/.claude/CLAUDE.md` and `~/.claude/rules/`, are files you wrote yourself." | ~/.claude/CLAUDE.md |
| D23 | 프로젝트용 CLAUDE.md는 `./CLAUDE.md` 또는 `./.claude/CLAUDE.md` 에 둔다. | VERIFIED | memory | "A project CLAUDE.md can be stored in either `./CLAUDE.md` or `./.claude/CLAUDE.md`." | ./CLAUDE.md |
| D24 | 프로젝트 CLAUDE.md는 팀과 공유되는 지침이다(버전 관리로). | VERIFIED | memory | "Team-shared instructions for the project" | — |
| D25 | 나만 쓰는 프로젝트별 설정은 `CLAUDE.local.md` 에 두고 `.gitignore` 에 넣어 공유되지 않게 한다. | VERIFIED | memory | "Personal project-specific preferences; add to `.gitignore`" | CLAUDE.local.md |
| D26 | 회사(조직) 전체용 CLAUDE.md는 IT 담당자가 기기에 배포한다. 개인 사용자는 보통 쓰지 않는다. | VERIFIED | memory | "Organizations can deploy a centrally managed CLAUDE.md that applies to all users on a machine." | — |
| D27 | 작업 폴더와 그 위 폴더들의 CLAUDE.md는 시작할 때 함께 불러온다. | VERIFIED | memory | "CLAUDE.md and CLAUDE.local.md files in the directory hierarchy above the working directory are loaded at launch." | — |
| D28 | 찾은 파일들은 서로를 덮어쓰지 않고 이어 붙여 컨텍스트에 들어간다. | VERIFIED | memory | "All discovered files are concatenated into context rather than overriding each other." | — |
| D29 | 하위 폴더의 CLAUDE.md는 시작할 때가 아니라, Claude가 그 폴더의 파일을 읽거나 고칠 때 불러온다. | VERIFIED | memory | "Instead of loading them at launch, Claude Code loads each one once Claude reads, writes, or edits another file in that subdirectory." | — |
| D30 | `/init` 은 코드베이스를 분석해 시작용 CLAUDE.md를 자동으로 만들어 준다. | VERIFIED | memory | "Run `/init` to generate a starting CLAUDE.md automatically." | /init |
| D31 | `/init` 이 만드는 내용은 코드에서 찾아낸 빌드 명령, 테스트 방법, 프로젝트 규칙이다. | VERIFIED | memory | "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." | /init |
| D32 | 이미 CLAUDE.md가 있으면 `/init` 은 덮어쓰지 않고 개선안을 제안한다. | VERIFIED | memory | "If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it." | /init |
| D33 | `/init` 이 만든 뒤에는 Claude가 코드에서 스스로 알 수 없는 지시를 더해 다듬으라고 안내한다. | VERIFIED | memory | "Refine from there with instructions Claude wouldn't discover on its own." | /init |
| D34 | `/memory` 는 CLAUDE.md·CLAUDE.local.md 등 기억 파일 목록을 보여 주고, 고르면 편집기에서 열어 준다. 아직 없는 파일을 고르면 새로 만든다. | VERIFIED | memory | "The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes, including user and project CLAUDE.md entries for files that don't exist yet." | /memory |
| D35 | 지금 어떤 CLAUDE.md가 실제로 불러와졌는지는 `/context` 의 Memory files 목록으로 확인한다. | VERIFIED | memory | "To check which `CLAUDE.md` and rules files loaded at launch, run `/context`." | /context |
| D36 | Claude가 내 CLAUDE.md를 안 따르는 것 같으면 먼저 `/context` 로 파일이 실제로 불려 왔는지부터 확인한다. | VERIFIED | memory | "If one is missing there, Claude can't see it." | /context |
| D37 | 대화 중에만 말한 지시는 `/compact`(대화 요약) 뒤 사라질 수 있다. 오래 유지할 지시는 CLAUDE.md에 적는다. | VERIFIED | memory | "Add conversation-only instructions to CLAUDE.md to make them persist." | /compact |
| D38 | 프로젝트 루트의 CLAUDE.md는 `/compact` 후에도 디스크에서 다시 읽혀 유지된다. | VERIFIED | memory | "Project-root CLAUDE.md survives compaction: after `/compact`, Claude re-reads it from disk and re-injects it into the session." | /compact |
| D39 | 반드시 매번 실행되어야 하는 일은 CLAUDE.md가 아니라 훅(hook)으로 만든다. 훅은 Claude의 판단과 상관없이 실행된다. | VERIFIED | memory | "Hooks execute as shell commands at fixed lifecycle events and apply regardless of what Claude decides to do." | — |
| D40 | CLAUDE.md 안에서 import한 폴더 밖 파일을 처음 만나면 승인 창이 뜬다. 거절하면 그 import는 꺼진 채 유지된다. | VERIFIED | memory | "If you decline, the imports stay disabled and the dialog doesn't appear again." | — |
| D41 | 4 MiB보다 큰 CLAUDE.md는 통째로 건너뛴다. | VERIFIED | memory | "Claude Code skips a file over 4 MiB and loads none of it." | — |

## 3. AGENTS.md (다른 AI 도구와 파일 공유)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D42 | AGENTS.md는 다른 코딩 도구들이 쓰는 지침 파일이다. 저장소에 AGENTS.md만 있고 CLAUDE.md가 없으면 Claude가 AGENTS.md를 지침으로 읽는다. | VERIFIED | memory | "By default, Claude reads `AGENTS.md` only when you have no `CLAUDE.md` in your working directory or above it." | AGENTS.md |
| D43 | AGENTS.md를 직접 읽는 기능은 Claude Code v2.1.277 이상에서 된다. | VERIFIED | memory | "Reading `AGENTS.md` directly requires Claude Code v2.1.277 or later." | — |
| D44 | CLAUDE.md도 있으면 CLAUDE.md만 읽는다. 둘 다 쓰고 싶으면 CLAUDE.md 안에 `@AGENTS.md` 한 줄로 불러오면 된다. | VERIFIED | memory | "you can still keep it as the one file every tool shares by putting an `@AGENTS.md` import in a `CLAUDE.md` next to it." | @AGENTS.md |
| D45 | 어떤 지침 파일을 읽을지는 `/config` 의 Project instructions 설정으로 바꾼다. | VERIFIED | memory | "To change which files Claude reads, type `/config` in a Claude Code session to open the settings panel," | /config > Project instructions |
| D46 | `/init` 은 Cursor·Copilot 등 다른 도구의 규칙 파일도 읽어서 생성할 CLAUDE.md에 반영한다. | VERIFIED | memory | "Cursor rules in `.cursor/rules/` or `.cursorrules`" | /init |

## 4. 자동 메모리(auto memory)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D47 | 자동 메모리는 내가 아무것도 쓰지 않아도 Claude가 세션을 넘어 지식을 쌓는 기능이다. | VERIFIED | memory | "Auto memory lets Claude accumulate knowledge across sessions without you writing anything." | — |
| D48 | Claude는 코드에서 알아낼 수 있는 것(구조, 파일 경로, 디버깅 해법)은 저장하지 않는다. | VERIFIED | memory | "Claude skips anything it can derive from the codebase, such as architecture, file paths, or debugging fixes." | — |
| D49 | 매 세션 저장하는 것이 아니라, 앞으로 쓸모 있을지 Claude가 판단해 저장한다. | VERIFIED | memory | "Claude doesn't save something every session." | — |
| D50 | 자동 메모리는 로컬 세션에서 기본으로 켜져 있다. | VERIFIED | memory | "Auto memory is on by default in local sessions." | — |
| D51 | `/memory` 안의 토글로 켜고 끈다. | VERIFIED | memory | "To toggle it, open `/memory` in a session and use the auto memory toggle, which saves `autoMemoryEnabled` to your user settings at `~/.claude/settings.json`." | /memory |
| D52 | 메모리는 `~/.claude/projects/<프로젝트>/memory/` 아래 프로젝트별 폴더에 저장된다. | VERIFIED | memory | "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." | — |
| D53 | 자동 메모리는 이 컴퓨터에만 있고 다른 기기·클라우드와 공유되지 않는다. | VERIFIED | memory | "Files are not shared across machines or cloud environments." | — |
| D54 | `MEMORY.md` 의 앞 200줄(또는 25KB)만 매 대화 시작 시 불러온다. | VERIFIED | memory | "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." | MEMORY.md |
| D55 | 자동 메모리 파일은 평범한 마크다운이라 언제든 읽고 고치고 지울 수 있다. | VERIFIED | memory | "Auto memory files are plain markdown you can edit or delete at any time." | /memory |
| D56 | "기억해 줘"라고 말하면 Claude가 자동 메모리에 저장한다. CLAUDE.md에 넣으려면 그렇게 직접 요청하거나 `/memory` 로 직접 편집한다. | VERIFIED | memory | "Claude saves it to auto memory." | /memory |

## 5. 확장 기능 개요 — 무엇을 언제 쓰나

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D57 | 기본 도구만으로도 대부분의 코딩 작업을 할 수 있다. 확장 기능은 그 위에 얹는 선택 사항이다. | VERIFIED | features-overview | "The built-in tools cover most coding tasks." | — |
| D58 | 한 번에 다 설정할 필요 없다. 필요한 계기가 생길 때 하나씩 더하면 된다. | VERIFIED | features-overview | "You don't need to configure everything up front." | — |
| D59 | CLAUDE.md는 매 대화에 항상 불러오는 지속 맥락이다. | VERIFIED | features-overview | "Persistent context loaded every conversation" | — |
| D60 | 스킬은 Claude가 쓸 수 있는 지침·지식·작업 절차를 담은 것이다. | VERIFIED | features-overview | "Instructions, knowledge, and workflows Claude can use" | — |
| D61 | 서브에이전트는 별도 작업 공간에서 일하고 요약만 돌려주는 도우미다. | VERIFIED | features-overview | "Isolated execution context that returns summarized results" | — |
| D62 | MCP는 외부 서비스에 연결하는 방법이다(예: 데이터베이스 질의, Slack 게시, 브라우저 조작). | VERIFIED | features-overview | "Connect to external services" | — |
| D63 | 훅은 특정 이벤트가 일어날 때 스크립트 등을 자동 실행하는 장치다. | VERIFIED | features-overview | "Script, HTTP request, MCP tool call, prompt, or subagent triggered by events" | — |
| D64 | 플러그인은 스킬·훅·서브에이전트·MCP 서버를 하나로 묶어 설치하는 포장 단위다. | VERIFIED | features-overview | "A plugin bundles skills, hooks, subagents, and MCP servers into a single installable unit." | — |
| D65 | 스킬은 가장 유연한 확장 수단이다. 마크다운 파일 하나로 지식이나 절차를 담는다. | VERIFIED | features-overview | "A skill is a markdown file containing knowledge, workflows, or instructions." | — |
| D66 | 스킬은 `/deploy` 같은 명령으로 직접 부르거나 Claude가 상황에 맞으면 스스로 불러온다. | VERIFIED | features-overview | "You can invoke skills with a command like `/deploy`, or Claude can load them automatically when relevant." | /deploy |
| D67 | CLAUDE.md와 스킬 모두 지침을 담지만 불러오는 방식과 쓰임이 다르다. | VERIFIED | features-overview | "Both store instructions, but they load differently and serve different purposes." | — |
| D68 | CLAUDE.md는 매번, 스킬은 필요할 때 로드된다는 것이 핵심 차이다. | VERIFIED | features-overview | "Every session, automatically" | — |
| D69 | 어림잡은 기준: CLAUDE.md는 200줄 아래로 유지하고 커지면 참고 자료는 스킬로 옮긴다. | VERIFIED | features-overview | "Keep CLAUDE.md under 200 lines." | — |
| D70 | 같은 설명을 반복해 넣게 되는 시점이 스킬을 만들 때다. 같은 절차를 세 번째 채팅에 붙여넣을 때 스킬로 저장한다. | VERIFIED | features-overview | "You paste the same playbook or multi-step procedure into chat for the third time" | — |
| D71 | 브라우저 탭 등 Claude가 못 보는 곳의 데이터를 계속 복사해 줄 때는 그 시스템을 MCP로 연결한다. | VERIFIED | features-overview | "You keep copying data from a browser tab Claude can't see" | — |
| D72 | 곁다리 작업이 대화창을 출력으로 어지럽히면 서브에이전트로 돌린다. | VERIFIED | features-overview | "A side task floods your conversation with output you won't reference again" | — |
| D73 | 매번 자동으로 일어나야 하면 훅을 쓴다. | VERIFIED | features-overview | "You want something to happen every time without asking" | — |
| D74 | 다른 저장소에도 같은 설정이 필요하면 플러그인으로 포장한다. | VERIFIED | features-overview | "A second repository needs the same setup" | — |
| D75 | 규칙은 훅으로 강제해야 지켜진다. CLAUDE.md나 스킬의 "~하지 마"는 부탁일 뿐이고, 훅이 막는 것이 강제다. | VERIFIED | features-overview | "A `PreToolUse` hook that blocks the edit is enforcement." | — |
| D76 | 훅은 Claude가 판단 없이 같은 방식으로 매번 해야 하는 일에, 스킬은 Claude가 판단해 적용할 절차에 쓴다. | VERIFIED | features-overview | "Claude Code runs a hook at a lifecycle event; it loads a skill into context for Claude to apply." | — |
| D77 | MCP는 도구와 데이터 연결을, 스킬은 그 도구를 잘 쓰는 지식을 준다. 둘은 같이 쓸 수 있다. | VERIFIED | features-overview | "MCP connects Claude to external services." | — |
| D78 | 기능을 많이 켤수록 Claude의 컨텍스트를 차지한다. 너무 많으면 오히려 효과가 떨어질 수 있다. | VERIFIED | features-overview | "Every feature you add consumes some of Claude's context." | — |
| D79 | 스킬은 처음엔 설명(이름·용도)만 로드되고, 쓸 때 전체 내용이 로드된다. | VERIFIED | features-overview | "By default, descriptions load at session start and full content loads when used." | — |
| D80 | 부작용이 있는 스킬(배포 등)은 `disable-model-invocation: true` 로 내가 이름을 부를 때만 실행되게 한다. | VERIFIED | features-overview | "Use `disable-model-invocation: true` for skills with side effects." | disable-model-invocation |
| D81 | 같은 기능이 여러 층에 있을 때 CLAUDE.md는 모두 합쳐지고, 스킬·서브에이전트·MCP 서버는 같은 이름이면 하나가 이긴다. | VERIFIED | features-overview | "all levels contribute content to Claude's context simultaneously." | — |
| D82 | 플러그인의 스킬은 `/플러그인이름:스킬이름` 처럼 이름표가 붙어 충돌하지 않는다. | VERIFIED | features-overview | "Plugin skills are namespaced (like `/my-plugin:review`) so multiple plugins can coexist." | /my-plugin:review |
| D83 | 훅은 기본적으로 대화 안에 아무것도 싣지 않고 바깥에서 실행된다. | VERIFIED | features-overview | "Hooks execute outside the main conversation." | — |

## 6. 스킬 — 만들기, 부르기, 보관 위치

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D84 | 스킬은 `SKILL.md` 파일에 지침을 적어 두면 Claude의 도구 상자에 추가되는 기능이다. | VERIFIED | skills | "Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." | SKILL.md |
| D85 | 스킬은 Claude가 알아서 쓰거나 `/스킬이름` 으로 직접 부른다. | VERIFIED | skills | "Claude uses skills when relevant, or you can invoke one directly with `/skill-name`." | /skill-name |
| D86 | 같은 지침·체크리스트를 채팅에 반복해 붙여넣거나, CLAUDE.md의 한 부분이 '사실'이 아니라 '절차'로 커졌다면 스킬을 만들 때다. | VERIFIED | skills | "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." | — |
| D87 | 스킬 본문은 쓸 때만 로드되므로 긴 참고 자료도 필요할 때까지 거의 비용이 들지 않는다. | VERIFIED | skills | "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." | — |
| D88 | 예전의 '커스텀 명령'은 스킬로 합쳐졌다. `.claude/commands/deploy.md` 와 `.claude/skills/deploy/SKILL.md` 는 똑같이 `/deploy` 를 만든다. | VERIFIED | skills | "A file at `.claude/commands/deploy.md` and a skill at `.claude/skills/deploy/SKILL.md` both create `/deploy` and work the same way." | /deploy |
| D89 | 기본 제공(번들) 스킬로 `/doctor`, `/code-review`, `/batch`, `/debug`, `/loop`, `/claude-api` 등이 있다. | VERIFIED | skills | "Claude Code includes a set of bundled skills, such as `/doctor`, `/code-review`, `/batch`, `/debug`, `/loop`, and `/claude-api`." | /doctor /code-review /batch /debug /loop /claude-api |
| D90 | 번들 스킬도 다른 스킬과 똑같이 `/` 다음에 이름을 입력해 부른다. | VERIFIED | skills | "You invoke a bundled skill the same way as any other skill, by typing `/` followed by the skill name." | / |
| D91 | 번들 스킬 대부분은 모든 세션에서 쓸 수 있다. | VERIFIED | skills | "Most bundled skills are available in every session." | — |
| D92 | `/doctor` 는 설치·확장 기능·CLAUDE.md·권한 등을 점검하고, 고치기 전에 확인을 구한다. | VERIFIED | skills | "Claude reports its findings first and asks for confirmation before changing anything." | /doctor |
| D93 | `/run` 은 앱을 실행해 변경이 동작하는지 보게 해 주고, `/verify` 는 앱을 직접 빌드·실행해 확인한다. 둘 다 별도 설정 없이 쓸 수 있다. | VERIFIED | skills | "`/run` and `/verify` work without setup." | /run /verify |
| D94 | 나만의 첫 스킬: 개인 스킬 폴더에 스킬 이름의 폴더를 만든다(`~/.claude/skills/summarize-changes`). | VERIFIED | skills | "Create a directory for the skill in your personal skills folder." | ~/.claude/skills/ |
| D95 | 개인 스킬은 이 컴퓨터의 모든 프로젝트에서 쓸 수 있다. | VERIFIED | skills | "Personal skills are available across all your projects." | — |
| D96 | `SKILL.md` 는 두 부분이다. 맨 위 `---` 사이의 머리말(언제 쓸지)과 그 아래 본문(따를 지침). | VERIFIED | skills | "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." | SKILL.md |
| D97 | 폴더 이름(또는 머리말의 `name`)이 입력하는 명령 이름이 되고, `description` 은 Claude가 자동으로 불러올지 판단하는 데 쓰인다. | VERIFIED | skills | "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." | /summarize-changes |
| D98 | 머리말 항목은 전부 선택이지만, Claude가 언제 쓸지 알도록 `description` 만은 권장된다. | VERIFIED | skills | "Only `description` is recommended so Claude knows when to use the skill." | description |
| D99 | 스킬을 시험하는 방법은 둘이다. 설명에 맞는 질문을 하거나, `/스킬이름` 으로 직접 부른다. | VERIFIED | skills | "You can test the skill two ways." | /summarize-changes |
| D100 | 예제 스킬의 `` !`git diff HEAD` `` 줄은 Claude가 읽기 전에 명령을 실행해 결과로 바꿔 넣는 기능(동적 컨텍스트 주입)이다. 초보 장에서는 '고급 기능'으로만 언급하는 편이 안전하다. | VERIFIED | skills | "Claude Code runs the command and replaces the line with its output before Claude sees the skill content" | !`git diff HEAD` |
| D101 | 저장 위치가 어느 세션에서 불릴지를 정한다. 홈 폴더=모든 프로젝트, 저장소에 커밋=팀 공유, 플러그인·관리 설정=팀 전체 배포. | VERIFIED | skills | "Save it under your home directory to get it in every project, commit it to a repository to share it with everyone who works there, or distribute it through a plugin or managed settings to reach a whole team." | — |
| D102 | 프로젝트 스킬은 `.claude/skills/<이름>/SKILL.md` 에 두고 커밋하면 팀도 갖게 된다. | VERIFIED | skills | "Commit it so your team gets it too" | .claude/skills/ |
| D103 | 같은 이름이면 엔터프라이즈 > 개인 > 프로젝트 순으로 우선한다. | VERIFIED | skills | "Enterprise over personal, and personal over project." | — |
| D104 | 내 스킬과 이름이 같은 번들 스킬이 있으면 내 스킬이 그 명령을 대신한다. | VERIFIED | skills | "Your skill replaces the bundled command, but not its aliases." | — |
| D105 | 스킬을 추가·수정·삭제하면 세션을 다시 시작하지 않아도 반영된다. | VERIFIED | skills | "Claude Code picks up the change within the current session, without a restart." | — |
| D106 | 세션 시작 때 없던 스킬 폴더를 새로 만들었다면 `/reload-skills` 를 실행해야 읽어 온다. | VERIFIED | skills | "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." | /reload-skills |
| D107 | 스킬을 지우려면 그 스킬의 폴더를 삭제한다. | VERIFIED | skills | "delete the skill's directory, `~/.claude/skills/<skill-name>/` or `.claude/skills/<skill-name>/`." | — |
| D108 | 기본값은 나와 Claude 둘 다 스킬을 부를 수 있다. | VERIFIED | skills | "By default, both you and Claude can invoke any skill." | — |
| D109 | 배포·커밋처럼 부작용이 있거나 타이밍을 내가 정하고 싶은 스킬은 `disable-model-invocation: true` 로 Claude가 스스로 못 부르게 한다. | VERIFIED | skills | "Use this for workflows with side effects or that you want to control timing, like `/commit`, `/deploy`, or `/send-slack-message`." | disable-model-invocation |
| D110 | 코드가 준비돼 보인다는 이유로 Claude가 알아서 배포하는 일은 원치 않을 것이다, 라는 취지로 설명한다. | VERIFIED | skills | "You don't want Claude deciding to deploy because your code looks ready." | — |
| D111 | 스킬을 바로 실행하려면 메시지 맨 앞에 `/이름` 을 쓴다. | VERIFIED | skills | "To run a skill directly, put its name at the start of your message." | /deploy staging |
| D112 | 스킬이 한 번 불려 오면 그 내용은 이후 턴에도 대화 안에 남는다. 그래서 본문은 간결하게 쓴다. | VERIFIED | skills | "Keep the body itself concise." | — |
| D113 | claude.ai 계정에 켜 둔 스킬은 Cowork·클라우드 세션에 로드되고, 로컬 컴퓨터의 개인 스킬 폴더는 그 세션들에서 읽지 않는다. | VERIFIED | skills | "Both interactive and scheduled Cowork sessions load the skills enabled for your claude.ai account, synced at session start." | Customize (데스크톱 앱 사이드바) |
| D114 | 데스크톱 예약 작업은 내 컴퓨터에서 실행되므로 개인 스킬 폴더를 읽는다. | VERIFIED | skills | "run locally on your machine, so they do load `~/.claude/skills/`." | — |
| D115 | claude.ai에서 켠 스킬에는 직접 만든 것, 조직이 제공한 것, `pdf`·`xlsx` 같은 Anthropic 기본 스킬이 포함된다. | VERIFIED | skills | "Those skills include the ones you create or turn on in your claude.ai settings, skills your organization provides there, and Anthropic's built-in skills such as `pdf` and `xlsx`." | /skills (claude.ai sync 항목) |
| D116 | 터미널에서 `/skills` 를 실행하면 동기화된 스킬 목록을 볼 수 있다. 데스크톱 Code 탭의 동일 메뉴 여부는 이 문서만으로는 확인되지 않는다. | VERIFIED | skills | "To see which skills synced, run `/skills`." | /skills |

## 7. MCP — 외부 도구 연결의 기초

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D117 | MCP 서버는 Claude Code에게 내 도구·데이터베이스·API에 접근할 권한을 준다. | VERIFIED | mcp | "MCP servers give Claude Code access to your tools, databases, and APIs." | — |
| D118 | MCP는 AI와 도구를 잇는 공개(오픈소스) 표준이다. | VERIFIED | mcp | "an open source standard for AI-tool integrations." | — |
| D119 | 이슈 트래커나 모니터링 화면처럼 다른 도구에서 데이터를 채팅에 복사해 넣고 있다면 서버를 연결할 때다. | VERIFIED | mcp | "Connect a server when you find yourself copying data into chat from another tool, like an issue tracker or a monitoring dashboard." | — |
| D120 | MCP로 검색, 데이터베이스 질의, 웹 브라우저 조작 같은 기본 도구 밖의 일을 할 수 있다. | VERIFIED | mcp-quickstart | "lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." | — |
| D121 | MCP 도구는 내 컴퓨터에서 실행되거나 호스팅 서비스로 제공되는 MCP 서버에서 온다. | VERIFIED | mcp-quickstart | "These tools come from MCP servers, which run on your machine or as hosted services." | — |
| D122 | 보안 경고: 연결하기 전에 각 서버를 믿을 수 있는지 확인하라. | VERIFIED | mcp | "Verify you trust each server before connecting it." | — |
| D123 | 외부 콘텐츠를 가져오는 서버는 프롬프트 인젝션(웹 글 속 숨은 지시로 AI를 조종하는 공격) 위험에 노출시킬 수 있다. | VERIFIED | mcp | "Servers that fetch external content can expose you to" | — |
| D124 | Anthropic Directory에서 검토된 커넥터를 찾을 수 있고, 거기 올라온 원격 서버는 `claude mcp add` 로 추가할 수 있다. | VERIFIED | mcp | "Directory connectors use the same MCP infrastructure as Claude Code, so you can add any remote server listed there with `claude mcp add`." | claude mcp add |
| D125 | 시작 가이드는 터미널의 `claude` 명령(CLI)으로 서버를 연결하는 방법을 설명한다. | VERIFIED | mcp-quickstart | "This guide walks you through connecting one MCP server end to end with the Claude Code CLI." | claude mcp add |
| D126 | 서버 추가 명령은 `claude` 세션 안이 아니라 터미널에서 실행한다. | VERIFIED | mcp-quickstart | "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." | claude mcp add |
| D127 | 호스팅된 서버를 추가하는 명령 형식이다(인증 불필요한 공식 문서 검색 서버 예). | VERIFIED | mcp-quickstart | "claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp" | claude mcp add --transport http |
| D128 | 서버 이름은 내가 마음대로 정하며, 이후 Claude의 출력과 `claude mcp remove` 같은 명령에서 그 이름으로 가리킨다. | VERIFIED | mcp-quickstart | "a name you make up." | — |
| D129 | 연결 상태 확인은 터미널의 `claude mcp list` 이고, `✔ Connected` 가 보이면 준비 완료다. | VERIFIED | mcp-quickstart | "Ready to use. This is what you should see for `claude-code-docs`" | claude mcp list |
| D130 | 이미 추가한 서버는 세션 안에서 `/mcp` 로 확인하고 관리한다. | VERIFIED | mcp-quickstart | "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." | /mcp |
| D131 | 서버를 쓰고 싶으면 이름을 넣어 요청하면 되지만 보통은 Claude가 알아서 적절한 도구를 고른다. | VERIFIED | mcp-quickstart | "You don't normally need to name a server in your prompt, since Claude chooses relevant tools on its own." | — |
| D132 | 서버를 처음 호출할 때 권한을 묻는 경우가 있으며, 도구 호출이 서버 이름으로 표시돼 어느 서버 답인지 알 수 있다. | VERIFIED | mcp-quickstart | "If Claude Code asks for permission the first time Claude calls the server, approve it." | — |
| D133 | 서버를 지우려면 `claude mcp remove 이름` 을 실행한다. | VERIFIED | mcp-quickstart | "claude mcp remove claude-code-docs" | claude mcp remove |
| D134 | 연결된 서버마다 도구 이름 등이 컨텍스트를 차지하므로 안 쓰는 서버는 제거해 공간을 확보한다. | VERIFIED | mcp-quickstart | "Removing servers you no longer use keeps that space free." | — |
| D135 | 연결된 서버가 컨텍스트에 올리는 것은 도구 이름과 서버 안내문이다. 자세한 규격은 필요할 때 로드된다. | VERIFIED | features-overview | "Tool names and server instructions from connected servers." | /mcp, /context all |
| D136 | 범위(scope): 기본값 `local` 은 나만, 현재 프로젝트에서만 쓴다. | VERIFIED | mcp-quickstart | "By default it registers the server at `local` scope: private to you, active only in the current project." | --scope local |
| D137 | `--scope user` 는 내 모든 프로젝트에서, `--scope project` 는 팀과 공유한다. | VERIFIED | mcp-quickstart | "Pass `--scope user` to register it once for all your projects, or `--scope project` to share it with teammates." | --scope user / --scope project |
| D138 | 프로젝트 범위 서버는 `.mcp.json` 에 저장되며 커밋하면 팀원이 받아 쓴다. 팀원은 승인 창을 본 뒤에 연결된다. | VERIFIED | mcp-quickstart | "Teammates who clone the repository and start Claude Code see a prompt to approve the server, then it connects for them too." | .mcp.json |
| D139 | 승인 창은 내려받은 저장소가 내 동의 없이 내 컴퓨터에서 프로세스를 실행하지 못하게 하려는 장치다. | VERIFIED | mcp-quickstart | "The prompt exists so a repository you clone can't launch processes on your machine without your consent." | Pending approval |
| D140 | 내려받은(클론한) 저장소가 스스로 자기 서버를 승인할 수는 없다. | VERIFIED | mcp | "A cloned repository can't approve its own servers:" | — |
| D141 | 같은 서버가 여러 범위에 있으면 local > project > user 순으로 이긴다. | VERIFIED | features-overview | "override by name: local > project > user." | — |
| D142 | 로컬(stdio) 서버는 Claude Code가 내 컴퓨터에서 하위 프로세스로 직접 실행하는 프로그램이다. | VERIFIED | mcp-quickstart | "A local stdio server is a program Claude Code starts as a subprocess on your machine, rather than a service it reaches over a URL." | — |
| D143 | Playwright 서버 예시는 `npx` 로 실행되어 Node.js가 필요하고, 브라우저 창이 열려 클릭·읽기를 한다. | VERIFIED | mcp-quickstart | "It runs through `npx`, so it requires" | claude mcp add playwright |
| D144 | 로컬 서버를 처음 확인할 때 `npx` 가 패키지를 내려받는 동안 `✘ Failed to connect` 로 보일 수 있고, 잠시 후 다시 확인하면 된다. | VERIFIED | mcp-quickstart | "The first check can show `✘ Failed to connect` while `npx` downloads the package, so wait a moment and run it again." | claude mcp list |
| D145 | 로그인이 필요한 서비스(Sentry·Linear·Notion 등)는 서버 주소를 추가한 뒤 브라우저에서 로그인(OAuth)한다. | VERIFIED | mcp-quickstart | "Hosted services like Sentry, Linear, and Notion run their MCP servers behind OAuth: you add the server's URL, then sign in through your browser." | /mcp > Authenticate |
| D146 | 로그인 방법: 세션에서 `/mcp` 를 열어 서버를 고르고 Enter 후 `Authenticate` 를 선택한다. | VERIFIED | mcp-quickstart | "Select `sentry` from the list, press Enter, and choose `Authenticate`." | /mcp > Authenticate |
| D147 | 모든 Claude Code 화면(데스크톱 앱, VS Code, 웹 등)에서 MCP 서버를 연결할 수 있다. | VERIFIED | mcp-quickstart | "This guide uses the `claude mcp` CLI commands, but every Claude Code surface can connect to MCP servers:" | — |
| D148 | 데스크톱 앱에서는 Connectors UI로 서버를 추가한다고 안내하지만, 원문에는 링크 문구로만 있어 정확한 메뉴 위치는 desktop 문서에서 따로 확인해야 한다. | UNVERIFIED | mcp-quickstart | "Claude Code desktop app" | Connectors UI (데스크톱 문서 확인 필요) |
| D149 | claude.ai에서 추가한 커넥터는 같은 계정으로 로그인한 Claude Code에 자동으로 나타나고 `/mcp` 에서 표시로 구분된다. | VERIFIED | mcp | "Servers from claude.ai appear in the list with indicators showing they come from claude.ai." | /mcp |
| D150 | Team·Enterprise 요금제에서는 관리자만 claude.ai 커넥터를 추가할 수 있다. | VERIFIED | mcp | "On Team and Enterprise plans, only admins can add servers." | claude.ai/customize/connectors |

## 8. 플러그인 — 설치와 범위

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D151 | 플러그인을 설치하면 그 안의 스킬·에이전트·훅·MCP 서버가 내 컴퓨터의 Claude Code에 추가된다. | VERIFIED | plugins_install | "Installing a plugin adds its skills, agents, hooks, and MCP servers to Claude Code on your machine." | — |
| D152 | 마켓플레이스(marketplace)는 플러그인 목록(카탈로그)이며, 설치 전에 Claude Code가 그 마켓플레이스를 알고 있어야 한다. | VERIFIED | plugins_install | "A marketplace is a catalog of plugins, and Claude Code has to know about a marketplace before you can install from it." | — |
| D153 | 터미널 설치 명령은 `/plugin install 플러그인@마켓플레이스` 이며, 바로 설치하지 않고 상세 화면을 열어 검토·범위 선택을 하게 한다. | VERIFIED | plugins_install | "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." | /plugin install commit-commands@claude-plugins-official |
| D154 | 이름 없이 `/plugin` 만 입력하면 둘러보기 화면(Discover 탭)이 열린다. | VERIFIED | plugins_install | "To browse instead, run `/plugin` with no plugin name:" | /plugin > Discover |
| D155 | 상세 화면에는 설명과, 설치될 명령·에이전트·스킬·훅·MCP 서버 목록(Will install)이 나올 수 있다. | VERIFIED | plugins_install | "The details pane shows the plugin's description." | Will install |
| D156 | 플러그인은 훅과 MCP 서버를 실행할 수 있으므로 설치 전에 상세 화면을 읽어야 한다. | VERIFIED | plugins_install | "A plugin can run hooks and MCP servers, so read the pane before you install." | /plugin 상세 화면 |
| D157 | 데스크톱 앱에서는 Code 탭의 로컬 또는 SSH 세션에서 플러그인을 설치한다. | VERIFIED | plugins_install | "In a local or SSH session in the desktop app's" | Code 탭 > + 버튼 > Add plugins (또는 Plugins > Browse plugins) |
| D158 | 데스크톱 앱에서 플러그인 브라우저를 열면 내 마켓플레이스의 플러그인들이 나오고, 하나를 골라 범위를 정한다. | VERIFIED | plugins_install | "The plugin browser opens with the plugins from your marketplaces." | Add plugins / Browse plugins |
| D159 | 클라우드 세션(웹 claude.ai/code 포함)은 플러그인 브라우저가 없고 내 컴퓨터에 설치한 플러그인을 불러오지 않는다. | VERIFIED | plugins_install | "has no plugin browser and doesn't load the plugins you installed on your own machine or the ones your repository's `.claude/settings.json` turns on." | — |
| D160 | 설치 범위(scope) 선택지 세 가지: user(내 모든 프로젝트), project(저장소 협업자 모두), local(이 저장소에서 나만). | VERIFIED | plugins_install | "Install for you, in this repo only (local scope)" | Install for you (user scope) / Install for all collaborators on this repository (project scope) / Install for you, in this repo only (local scope) |
| D161 | user 범위는 이 컴퓨터의 모든 프로젝트에서 켜진다. | VERIFIED | plugins_install | "the plugin is enabled for you in every project on this machine." | user scope |
| D162 | project 범위는 그 저장소에서 일하는 모두에게 켜진다. | VERIFIED | plugins_install | "the plugin is enabled for everyone who works in this repository." | project scope |
| D163 | project 범위로 설정을 커밋해도 협업자 컴퓨터에 내려받아 주지는 않는다. 각자 한 번 설치 명령을 실행해야 한다. | VERIFIED | plugins_install | "Committing that entry turns the plugin on for your collaborators but doesn't download it to their machines" | --scope project |
| D164 | local 범위는 이 저장소에서만 나에게 켜진다. | VERIFIED | plugins_install | "the plugin is enabled for you in this repository only." | local scope |
| D165 | 같은 플러그인이 여러 범위에 설정되면 local > project > user 순으로 우선한다. | VERIFIED | plugins_install | "When the same plugin is set at several scopes, the local setting overrides the project setting, and the project setting overrides the user setting." | — |
| D166 | 터미널, 데스크톱 앱의 로컬 세션, VS Code 확장은 같은 설정 파일을 읽어서 한 곳의 user 범위 설치가 셋 모두에서 쓰인다. | VERIFIED | plugins_install | "The terminal, the desktop app's local sessions, and the VS Code extension on one computer read the same settings files, so a plugin you install at user scope in any of them is available in the other two." | — |
| D167 | 설치 후 `/` 를 입력해 `/플러그인:스킬` 형태의 항목이 보이는지로 확인한다. | VERIFIED | plugins_install | "Type `/` and look for the plugin's skills under its name, in the form `/<plugin>:<skill>`." | /commit-commands:commit |
| D168 | 설치한 목록은 `/plugin` 의 Installed 탭이나 터미널의 `claude plugin list` 로 본다. | VERIFIED | plugins_install | "In your shell, run `claude plugin list`, which prints the same list with `Version`, `Scope`, and `Status` lines." | /plugin > Installed, claude plugin list |
| D169 | Anthropic 공식 마켓플레이스는 처음 대화형 터미널 세션을 시작할 때 자동으로 추가된다. | VERIFIED | plugins_install | "Claude Code adds Anthropic's official marketplace for you the first time you start an interactive terminal session, which is why the example skips that step." | claude-plugins-official |
| D170 | 다른 마켓플레이스의 플러그인은 먼저 `/plugin marketplace add 출처` 로 마켓플레이스를 추가해야 한다. 출처는 GitHub 저장소, git 저장소, 로컬 폴더, 호스팅된 `marketplace.json` 중 하나다. | VERIFIED | plugins_install | "In a Claude Code session, run `/plugin marketplace add` followed by the marketplace's source: a GitHub repository, a git repository on any host, a local directory or file, or a hosted `marketplace.json`." | /plugin marketplace add |
| D171 | Installed 탭에서 플러그인을 켜기·끄기·업데이트·삭제할 수 있다. | VERIFIED | plugins_install | "tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." | /plugin > Installed |
| D172 | `/plugin` 패널에서 바꾼 뒤 닫으면 Claude Code가 `/reload-plugins` 를 대신 실행해 적용한다. | VERIFIED | plugins_install | "When you close the `/plugin` panel with pending changes you made in it, Claude Code runs `/reload-plugins` for you to apply them." | /reload-plugins |
| D173 | 마켓플레이스에 자동 업데이트가 켜져 있으면 플러그인이 자동으로 업데이트된다. | VERIFIED | plugins_install | "Plugins update automatically when the marketplace they came from has auto-update turned on." | /plugin > Marketplaces |
| D174 | 자동 업데이트는 공식 마켓플레이스 대부분에 기본 켜짐이고, 커뮤니티·서드파티·개발용 마켓플레이스는 기본 꺼짐이다. | VERIFIED | plugins_install | "every other marketplace, including the community marketplace, third-party marketplaces, and local development marketplaces." | Enable auto-update / Disable auto-update |
| D175 | 한 번에 모든 플러그인을 업데이트하는 명령은 없다. | VERIFIED | plugins_install | "There's no command that updates every plugin at once." | Update now / Update marketplace |
| D176 | 오랫동안 안 쓴 플러그인은 Not used recently 아래에 표시되며, 시작과 컨텍스트 비용을 늘리므로 끄거나 지우면 좋다. | VERIFIED | plugins_install | "Use that header and that line to find plugins that still add startup and context cost, then disable or uninstall them." | Not used recently |

## 9. 플러그인 — 보안과 신뢰

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D177 | 설치한 플러그인은 내 컴퓨터에서 내 사용자 권한으로 임의의 코드를 실행할 수 있다. | VERIFIED | plugins_security | "A Claude Code plugin you install can execute arbitrary code on your machine with your user privileges." | — |
| D178 | 마켓플레이스 이름은 카탈로그를 누가 발행했는지만 알려 줄 뿐, 그 안의 각 플러그인이 무엇을 하는지는 알려 주지 않는다. | VERIFIED | plugins_security | "A marketplace's name tells you who publishes the catalog, not what each plugin in it does," | — |
| D179 | 플러그인의 훅은 Claude Code 수명주기의 특정 시점(도구 호출 전후 등)에 셸 명령으로 실행된다. | VERIFIED | plugins_security | "run as shell commands at points in Claude Code's lifecycle, such as before or after a tool call." | — |
| D180 | 훅과 모니터는 내 전체 사용자 권한으로 실행되는 셸 명령이다. | VERIFIED | plugins_security | "command hooks and monitors are shell commands that run with your full user permissions." | — |
| D181 | 플러그인의 mod는 내 권한으로 Claude Code 안에서 JavaScript를 실행한다. | VERIFIED | plugins_security | "runs JavaScript inside Claude Code with your permissions." | — |
| D182 | 플러그인이 선언한 MCP 서버는 Claude Code가 연결해 Claude에게 도구를 준다. stdio 서버는 내 컴퓨터에서 프로세스로 실행된다. | VERIFIED | plugins_security | "A stdio MCP server runs as a process that Claude Code starts on your machine." | — |
| D183 | 플러그인의 스킬·명령·에이전트는 Claude에게 지시문으로 들어가 Claude의 행동에 영향을 준다. | VERIFIED | plugins_security | "these enter Claude's context as instructions, so they influence what Claude does with the tools it already has." | — |
| D184 | 자동 업데이트가 켜져 있으면 내가 검토한 뒤에도 플러그인 파일이 바뀔 수 있다. | VERIFIED | plugins_security | "when auto-update is on for the marketplace you installed a plugin from, Claude Code updates that plugin in the background, so the files you reviewed can change on disk." | — |
| D185 | 설치하면 곧바로 활성화된다(작성자가 기본 꺼짐으로 설정한 경우 제외). | VERIFIED | plugins_security | "Installing a plugin also enables it, unless its manifest or marketplace entry sets" | defaultEnabled |
| D186 | 공식·커뮤니티 이름은 `github.com/anthropics/` 저장소 출처에만 허용되어, 서드파티가 Anthropic 것처럼 행세할 수 없다. | VERIFIED | plugins_security | "Claude Code accepts the official and community names only for marketplaces sourced from `github.com/anthropics/` repositories, so a third-party marketplace can't present itself as an Anthropic one." | — |
| D187 | 동료나 조직이 발행한 마켓플레이스는 서드파티로 분류된다. | VERIFIED | plugins_security | "A marketplace that a coworker or your organization publishes is third-party." | — |
| D188 | 설치 전 검토: 무엇을 추가하는지와 어디서 왔는지를 본다. | VERIFIED | plugins_security | "Before you install a plugin, look at what it adds and where it comes from." | — |
| D189 | 마켓플레이스의 출처는 터미널의 `claude plugin marketplace list` 로 확인한다. | VERIFIED | plugins_security | "In your shell, run `claude plugin marketplace list` to print the source each marketplace was added from, such as a GitHub repository or a directory." | claude plugin marketplace list |
| D190 | 상세 화면의 Will install은 훅이 있다는 것만 보여 주고 무엇을 실행하는지는 보여 주지 않으므로, 훅·MCP·bin 파일을 직접 읽어야 한다. | VERIFIED | plugins_security | "section shows that a hook exists but not what it runs, so read these files in the plugin's directory:" | hooks/hooks.json, .mcp.json, bin/ |
| D191 | 설치 화면에 같은 신뢰 경고가 뜬다: 설치·업데이트·사용 전에 플러그인을 믿을 수 있는지 확인하라. | VERIFIED | plugins_security | "Make sure you trust a plugin before installing, updating, or using it." | 신뢰 경고 |
| D192 | Anthropic은 플러그인에 포함되는 MCP 서버·파일·소프트웨어를 통제하지 않으며 의도대로 동작하는지, 바뀌지 않는지도 보증하지 못한다. | VERIFIED | plugins_security | "Anthropic does not control what MCP servers, files, or other software are included in plugins and cannot verify that they will work as intended or that they won't change." | — |
| D193 | 마켓플레이스 소유자도 못 믿겠다면 마켓플레이스 자체를 제거해야 한다. 그러면 거기서 설치한 플러그인이 모두 제거된다. | VERIFIED | plugins_security | "if you don't trust the marketplace's owner either," | — |
| D194 | 플러그인 제거 후에도 파일은 `~/.claude/plugins/cache/` 에 14일간 남는다. 당장 지우려면 직접 삭제한다. | VERIFIED | plugins_security | "To delete the files now, remove the plugin's directory under `~/.claude/plugins/cache/<marketplace>/<plugin>/` yourself." | claude plugin uninstall |

## 10. 서브에이전트와 훅 — 짧은 입문

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D195 | 서브에이전트는 특정 종류의 일을 맡는 전문 AI 도우미다. | VERIFIED | sub-agents | "Subagents are specialized AI assistants that handle specific types of tasks." | — |
| D196 | 곁다리 작업이 검색 결과·로그·파일 내용으로 메인 대화를 어지럽힐 때 쓴다. 서브에이전트는 자기 공간에서 일하고 요약만 돌려준다. | VERIFIED | sub-agents | "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." | — |
| D197 | 서브에이전트마다 별도의 컨텍스트 창, 맞춤 시스템 프롬프트, 도구 접근, 독립 권한을 가진다. | VERIFIED | sub-agents | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." | — |
| D198 | Claude는 작업이 서브에이전트의 설명과 맞으면 알아서 위임하고, 서브에이전트는 독립적으로 일해 결과를 돌려준다. | VERIFIED | sub-agents | "When Claude encounters a task that matches a subagent's description, it delegates to that subagent, which works independently and returns results." | — |
| D199 | 내장 서브에이전트가 있고 Claude가 적절할 때 자동으로 쓴다. | VERIFIED | sub-agents | "Claude Code includes built-in subagents that Claude automatically uses when appropriate." | Explore / Plan / General-purpose |
| D200 | Explore는 코드를 빠르게 찾고 분석하는 읽기 전용 에이전트다. | VERIFIED | sub-agents | "A fast, read-only agent optimized for searching and analyzing codebases." | Explore |
| D201 | 계획 모드에서 코드 조사는 Plan 서브에이전트가 맡아 탐색 출력을 별도 창에 두고 메인 대화는 읽기 전용으로 남는다. | VERIFIED | sub-agents | "When you're in plan mode and Claude needs to understand your codebase, it delegates research to the Plan subagent so that exploration output stays in a separate context window while the main conversation remains read-only." | Plan |
| D202 | General-purpose는 탐색과 수정이 모두 필요한 복잡한 다단계 작업용이다. | VERIFIED | sub-agents | "A capable agent for complex, multi-step tasks that require both exploration and action." | General-purpose |
| D203 | 훅은 사용자가 정의한 셸 명령으로 Claude Code가 정해진 시점에 실행한다. | VERIFIED | hooks-guide | "Hooks are user-defined shell commands." | — |
| D204 | 훅은 "항상 일어나야 하는 일"을 LLM의 선택에 맡기지 않고 확실히 실행하게 해 준다. | VERIFIED | hooks-guide | "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." | — |
| D205 | 훅 예: 편집 후 파일 서식 정리, 실행 전 명령 차단, 입력이 필요할 때 알림, 시작 시 컨텍스트 주입 등. | VERIFIED | hooks-guide | "Hooks let you run code at key points in Claude Code's lifecycle: format files after edits, block commands before they execute, send notifications when Claude needs input, inject context at session start, and more." | — |
| D206 | 훅은 설정 파일(`~/.claude/settings.json` 등)의 `hooks` 항목에 적는다. 첫 예제는 입력 대기 시 데스크톱 알림이다. | VERIFIED | hooks-guide | "Open `~/.claude/settings.json` and add a `Notification` hook." | ~/.claude/settings.json |
| D207 | 등록한 훅은 `/hooks` 로 목록에서 확인한다. | VERIFIED | hooks-guide | "Type `/hooks` at the Claude Code prompt to open the hooks browser." | /hooks |
| D208 | 훅은 직접 설정 파일을 쓰지 않고 Claude에게 원하는 동작을 설명해 만들어 달라고 할 수도 있다. | VERIFIED | hooks-guide | "You can also ask Claude to write the hook for you by describing what you want in the CLI." | — |

## 가이드에 쓸 때 주의

1. **터미널(CLI) 중심 문서**: MCP 시작 가이드(`claude mcp add/list/remove`)와 플러그인 일부(`claude plugin ...`)는 터미널 명령이다. 이 가이드는 데스크톱 앱 Code 탭에서 시작하므로, 데스크톱 쪽 경로는 사실로 확인된 것만 쓴다. 확인된 것은 플러그인 설치(Code 탭, + 버튼, Add plugins 또는 Plugins > Browse plugins, 로컬/SSH 세션만)뿐이다. MCP는 "데스크톱은 Connectors UI"가 링크 문구로만 있어 D148을 UNVERIFIED로 두었다. 데스크톱 앱 메뉴 이름과 `/mcp`, `/memory`, `/init`, `/skills`, `/hooks` 가 Code 탭에서도 똑같이 동작하는지는 desktop 문서(이 그룹 밖)에서 따로 확인해야 한다.
2. **MCP·플러그인·훅은 '내 권한으로 코드를 실행'한다**: 초보 독자에게는 "믿을 수 없는 서버·플러그인은 설치하지 않는다"가 핵심 경고다(D122, D123, D177~D192). 마켓플레이스 이름이 곧 안전 보증이 아니라는 점(D178)과, 신뢰 경고문(D191~D192)을 그대로 보여 주면 좋다. 문서의 Playwright 예시는 `@playwright/mcp@latest` 처럼 매번 최신을 받아 실행하므로, 가이드에서 따라 해 보게 할 때는 "내용을 이해하는 공식 예시만"이라고 한정한다(이 문장은 문서가 아닌 편집 판단이다).
3. **CLAUDE.md는 '부탁'이지 '강제'가 아니다**: D9, D39, D75에서 보듯 반드시 지켜야 하는 일은 훅이나 권한 설정으로 해야 한다. 초보 장에서는 "CLAUDE.md = 메모, 훅 = 자동 규칙" 정도로만 구분하고 훅 설정(JSON 편집)은 따라 하기 대상으로 삼지 않는 편이 안전하다.
4. **스킬 예제의 `!` 명령**: 문서의 첫 스킬 예제(`summarize-changes`)는 `git diff` 를 쓰는 개발자용이다. 일반인에게는 명령 실행 줄(`` !`...` ``) 없이 지침만 적은 가장 단순한 SKILL.md로 설명하고, 이 기능은 있다고만 언급하는 것이 낫다(문서에 비개발자용 예제는 없음, 편집 판단).
5. **버전 의존 항목**: `/doctor prompt-audit`(v2.1.283+), AGENTS.md 직접 읽기(v2.1.277+), 동기화 스킬(v2.1.273+). 독자 버전이 낮을 수 있으니 장에서는 확인일과 함께 "최신 버전에서"라고 한정한다.
6. **자동 메모리의 이중 서술 주의**: 세션을 넘어 기억하는 것은 CLAUDE.md(내가 씀, 항상 로드)와 자동 메모리(Claude가 씀, 앞 200줄/25KB만 로드)이다. 대화 안에서만 한 말은 `/compact` 후 사라질 수 있다(D37).
7. **D68, D77** 은 같은 문서의 표 일부 문구로 근거를 대체했다(인용 문장이 사실의 한 측면만 보여 줌). 장 본문에서는 features-overview의 비교 표를 직접 다시 읽고 문장을 만들 것.

## 이 그룹에서 장으로 쓸 만한 구성

**6장 「프로젝트 기억(CLAUDE.md)」**
1. 왜 필요한가 — Claude는 새 대화마다 빈 상태로 시작한다(D1~D2). "같은 말을 두 번 하게 되면 적는다"(D5~D7)
2. 두 가지 기억: 내가 쓰는 CLAUDE.md vs Claude가 쓰는 자동 메모리(D2~D3, D47~D56) — 표 한 장
3. 무엇을 적나, 어떻게 적나 — 구체적·짧게(D8, D10~D13). 좋은 예/아쉬운 예를 나란히
4. 어디에 두나 — 개인(`~/.claude/CLAUDE.md`)·프로젝트·나만 쓰는 로컬(D22~D26). 조직용은 한 줄 언급
5. `/init` 으로 시작하기(D30~D33) → `/memory` 로 열어 고치기(D34) → `/context` 로 확인(D35~D36)
6. 한계 — 부탁이지 강제가 아님(D9, D39), 길면 효과 하락(D12), 압축 후에도 유지(D37~D38)
7. 직접 해 보기: `/init` 실행 → 한 줄 추가 → 새 대화에서 따르는지 확인. AGENTS.md는 한 박스로 간단히(D42~D45)

**7장 「스킬·플러그인·외부 도구」**
1. 지도 먼저 — 기능별 한 줄 비교표(D57~D64)와 "언제 무엇을"(D70~D75): CLAUDE.md는 항상, 스킬은 필요할 때, MCP는 바깥 연결, 서브에이전트는 따로 일하기, 훅은 자동 규칙, 플러그인은 묶음
2. 스킬 — 개념(D84~D87), 기본 제공 스킬 써 보기(D89~D93), 간단한 스킬 만들기(D94~D99), 어디에 저장되나(D101~D103), 부작용 있는 스킬은 직접 부르게(D108~D111)
3. 외부 도구(MCP) — 개념(D117~D121), 보안 경고 먼저(D122~D123, D140), 연결 흐름과 범위(D125~D138, 터미널 중심임을 표시), 로그인형 서비스(D145~D146)
4. 플러그인 — 개념(D151~D152), 설치 흐름(D153~D158, 데스크톱 경로 D157~D158), 범위 3종(D160~D165), 설치 전 점검 체크리스트(D188~D192)
5. 서브에이전트·훅 — 각각 한 박스: 정의와 한 줄 쓰임(D195~D198, D203~D205). 설정 방법은 다루지 않거나 "Claude에게 만들어 달라고 하기"(D208)만 소개
6. 정리 — 안 쓰는 확장은 정리(D134, D176), 용어 정리 표

# 부록 E


출처: 공식 Claude Code 문서 원문(raw). 확인일 2026-10-31. 화면 이름 칸의 (CLI)는 터미널 전용, (Desktop)은 데스크톱 앱, (Web)은 claude.ai/code, (Mobile)은 Claude 앱을 뜻한다.

## 1. 병렬 세션과 워크트리(worktree, 같은 저장소를 폴더 하나 더 만들어 따로 작업하는 방식)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E1 | 세션마다 워크트리를 따로 쓰면 파일 사본이 분리돼, 한 세션은 기능을 만들고 다른 세션은 버그를 고칠 수 있다 | VERIFIED | worktrees | "Running each Claude Code session in its own worktree gives it a separate copy of the files to edit, so one session can build a feature while a second fixes a bug." | — |
| E2 | 워크트리는 여러 병렬 방법 중 하나이며 파일 편집을 서로 격리하는 역할이다 | VERIFIED | worktrees | "They isolate file edits." | — |
| E3 | 이름을 붙여 `--worktree`(또는 `-w`)로 시작하면 격리된 워크트리를 만들고 거기서 Claude를 시작한다 | VERIFIED | worktrees | "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." | `claude --worktree feature-auth` (CLI) |
| E4 | 기본 위치는 저장소 루트의 `.claude/worktrees/<name>/`이고 새 브랜치 `worktree-<name>`이 만들어진다 | VERIFIED | worktrees | "By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" | (CLI) |
| E5 | 이름을 생략하면 Claude가 `bright-running-fox` 같은 이름을 만든다 | VERIFIED | worktrees | "If you omit the name, Claude generates one such as `bright-running-fox`." | (CLI) |
| E6 | 워크트리는 git 저장소에서만 쓸 수 있다(다른 버전관리는 훅으로 대체) | VERIFIED | worktrees | "worktrees require a git repository" | (CLI) |
| E7 | 워크트리는 새로 받은 사본이라 의존성 설치 같은 환경 준비를 거기서 다시 해야 한다 | VERIFIED | worktrees | "A worktree is a fresh checkout, so initialize your development environment there: ask Claude to install dependencies, or run your project's setup yourself in the worktree directory under `.claude/worktrees/`." | — |
| E8 | `.claude/worktrees/`를 `.gitignore`에 넣으라고 권한다(메인 폴더에 추적 안 된 파일로 보이지 않게) | VERIFIED | worktrees | "Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." | — |
| E9 | 종료할 때 작업이 없는 이름 없는 세션은 워크트리와 브랜치를 자동 삭제한다 | VERIFIED | worktrees | "for an unnamed session, Claude removes the worktree and its branch automatically." | — |
| E10 | 작업물이 남은 워크트리는 유지할지 삭제할지 묻는다 | VERIFIED | worktrees | "Claude prompts you to keep or remove the worktree." | — |
| E11 | 삭제를 고르면 폴더와 브랜치, 그 안의 작업이 모두 사라진다 | VERIFIED | worktrees | "Removing deletes the worktree directory and its branch, along with all the work in them" | — |
| E12 | 유지하면 종료 때 출력되는 `claude --worktree <name> --resume` 명령으로 돌아올 수 있다 | VERIFIED | worktrees | "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." | (CLI) |
| E13 | `-p`(비대화형) 실행은 종료 질문이 없어 워크트리를 자동 정리하지 않는다 | VERIFIED | worktrees | "Non-interactive runs with `-p` have no exit prompt, so Claude doesn't clean up their worktrees" | (CLI) |
| E14 | 서브에이전트(Claude가 맡기는 보조 작업자)도 자기 워크트리에서 돌려 동시 편집 충돌을 피할 수 있다 | VERIFIED | worktrees | "Subagents can run in their own worktrees so parallel edits don't conflict." | — |
| E15 | 워크트리는 `.git` 기록, 프로젝트 범위 플러그인, 권한 승인 등 일부를 메인 폴더와 공유한다 | VERIFIED | worktrees | "A worktree gets its own files and branch, but it shares the following with the main checkout:" | — |
| E16 | 클라우드 세션은 "여러 워크트리를 관리하지 않고도" 독립 작업을 동시에 돌리는 용도로 소개된다 | VERIFIED | web-quickstart | "run several independent tasks at once, each in its own session and branch, without managing multiple worktrees" | — |
| E17 | 데스크톱 예약 작업은 실행마다 격리된 Git 워크트리를 쓰도록 `Worktree`를 선택할 수 있다(Git 저장소일 때) | VERIFIED | desktop-scheduled-tasks | "instead, select **Worktree** in the task's" | **Worktree** (Desktop) |

## 2. 클라우드 세션(Claude Code on the web)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E18 | 클라우드 세션은 Pro·Max·Ultra·Team 요금제와, 프리미엄 좌석 또는 Chat + Claude Code 좌석의 Enterprise 사용자에게 제공된다 | VERIFIED | claude-code-on-the-web | "Cloud sessions are available on Pro, Max, Ultra, and Team plans, and for Enterprise users with premium seats or Chat + Claude Code seats." | — |
| E19 | 클라우드 세션은 내 컴퓨터가 아니라 클라우드 인프라에서 도는 Claude Code 세션이다 | VERIFIED | claude-code-on-the-web | "A cloud session is a Claude Code session that runs on cloud infrastructure instead of on your machine." | — |
| E20 | 노트북을 닫아도 계속 돌고, 어느 기기에서든 확인하거나 방향을 바꿀 수 있다 | VERIFIED | claude-code-on-the-web | "The session keeps running after you close your laptop, and you can check on it or steer it from any device." | — |
| E21 | 클라우드 세션은 플랜 사용량 한도에 함께 잡히고 클라우드 VM 요금은 따로 없다 | VERIFIED | claude-code-on-the-web | "It counts toward your plan's usage limits alongside the rest of your Claude and Claude Code usage, and there's no separate charge for the cloud VM." | — |
| E22 | 브라우저(claude.ai/code), 모바일 앱, 데스크톱 앱, 터미널 `claude --cloud`로 시작할 수 있다 | VERIFIED | web-quickstart | "You can also start one from the Claude mobile app, the Desktop app, or your terminal with `claude --cloud`." | `claude --cloud` (CLI) |
| E23 | 클라우드 세션은 기존 GitHub 저장소와 함께 쓴다(새 프로젝트면 README 있는 저장소를 먼저 만든다) | VERIFIED | web-quickstart | "Cloud sessions work with existing GitHub repositories." | — |
| E24 | Claude가 저장소를 격리된 가상 머신에 복제하고 수정한 뒤 검토용 브랜치를 올린다 | VERIFIED | web-quickstart | "Claude clones it into an isolated virtual machine, makes changes, and pushes a branch for you to review." | — |
| E25 | 세션은 기기 사이에 이어져, 노트북에서 시작한 작업을 폰에서 검토할 수 있다 | VERIFIED | web-quickstart | "Sessions persist across devices, so a task you start on your laptop is ready to review from your phone later." | — |
| E26 | 잘 정의된 작업을 맡기고 다른 일을 하다 결과만 검토하는 방식에 적합하다 | VERIFIED | web-quickstart | "submit a well-defined task, do something else, and review the result when Claude is done" | — |
| E27 | 매 세션 저장소를 새로 복제하므로 내 컴퓨터에 받아 두지 않은 저장소도 쓸 수 있다 | VERIFIED | web-quickstart | "Claude clones the repo fresh every session, so you don't need it checked out" | — |
| E28 | GitHub 연결은 한 번만 하며, claude.ai/code에 로그인하면 연결 안내가 뜬다 | VERIFIED | web-quickstart | "After you sign in, claude.ai/code prompts you to connect GitHub." | claude.ai/code (Web) |
| E29 | 이렇게 연결하면 공개 저장소는 복제할 수 있지만 비공개 저장소는 Claude GitHub App이 설치돼 있어야 한다 | VERIFIED | web-quickstart | "With this connection, a session can clone any public repository, but can work in a private repository only when the Claude GitHub App is installed on it." | — |
| E30 | Pro·Max·Ultra는 `Default` 환경이 자동으로 생기고, Team·Enterprise는 첫 환경 만들기 폼에서 만든다 | VERIFIED | web-quickstart | "Leave the prefilled name and network access unchanged and click **Create & finish** to create the **Default** environment." | **Create your first cloud environment** · **Create & finish** (Web) |
| E31 | 터미널의 `/web-setup`은 `gh` 토큰을 Anthropic에 보내 GitHub를 연결한다(GitHub CLI 사용자용) | VERIFIED | web-quickstart | "When you run `/web-setup`, Claude Code reads the token that `gh auth token` prints, asks you to confirm, and sends the token to Anthropic." | `/web-setup` (CLI) |
| E32 | `/web-setup`으로 연결하면 그 토큰이 닿는 모든 저장소에 접근하며 Claude GitHub App 설치가 필요 없다 | VERIFIED | web-quickstart | "A cloud session you start yourself can then access any repository that token can access, with no Claude GitHub App installation." | `/web-setup` (CLI) |
| E33 | Anthropic 호스팅 환경에서 GitHub 자격 증명은 서버에 암호화돼 있고 세션 VM 안으로 들어가지 않는다 | VERIFIED | claude-code-on-the-web | "In Anthropic-hosted environments, your GitHub credentials stay encrypted on Anthropic's servers and never enter a session's VM." | — |
| E34 | 고객 관리 암호화 키(CMEK)를 쓰는 조직은 클라우드 세션을 시작할 수 없다 | VERIFIED | claude-code-on-the-web | "can't start cloud sessions either." | — |
| E35 | 데이터 보존 제로(ZDR)·HIPAA 설정 조직은 `/web-setup` 등 클라우드 세션 기능을 쓸 수 없다 | VERIFIED | web-quickstart | "cannot use `/web-setup` or other cloud session features." | — |
| E36 | `--cloud`로 만든 세션은 로컬 폴더가 아니라 GitHub 원격의 현재 브랜치를 복제하므로 먼저 푸시해야 한다 | VERIFIED | claude-code-on-the-web | "The cloud VM clones your current directory's GitHub remote at your current branch, not your local checkout, so push first if you have local commits." | `claude --cloud` (CLI) |
| E37 | `--cloud`를 여러 번 실행하면 각각 독립된 클라우드 세션이 동시에 돈다 | VERIFIED | claude-code-on-the-web | "each `--cloud` command creates its own cloud session that runs independently." | (CLI) |
| E38 | 터미널에서 클라우드로 기존 세션을 밀어 올릴 수는 없고, 클라우드 세션을 터미널로 가져오는 것만 된다(CLI 기준) | VERIFIED | claude-code-on-the-web | "From the CLI, session handoff is one-way: you can pull cloud sessions into your terminal with `--teleport`, but you can't push an existing terminal session to the cloud." | `--teleport` (CLI) |
| E39 | 클라우드 세션을 가져오려면(teleport) 작업 폴더에 커밋 안 된 변경이 없어야 한다 | VERIFIED | claude-code-on-the-web | "Your working directory must have no uncommitted changes." | `claude --teleport` · `/teleport` (CLI) |
| E40 | 로컬 저장소를 업로드(번들)하는 크기 한도는 100 MB다 | VERIFIED | claude-code-on-the-web | "The bundled repository must be under 100 MB." | — |
| E41 | macOS·Linux·WSL에서는 `.env`·키 파일처럼 이름이 자격 증명인 파일의 커밋 안 된 변경은 업로드에서 빠진다 | VERIFIED | claude-code-on-the-web | "Claude Code leaves uncommitted changes to files named like credentials or keys out of the upload." | — |
| E42 | 네이티브 Windows에서는 추적 중인 파일의 커밋 안 된 변경이 이름과 무관하게 그대로 올라간다 | VERIFIED | claude-code-on-the-web | "uncommitted changes to tracked files upload as they are, whatever the file's name." | — |
| E43 | 클라우드 세션의 권한 모드는 Auto(분류기가 대신 검토)·Accept edits·Plan이며 Manual·Bypass는 없다 | VERIFIED | web-quickstart | "Cloud sessions don't offer Manual or Bypass permissions." | permission mode control (Web) |
| E44 | Accept edits는 승인 없이 수정하고 브랜치를 푸시한다 | VERIFIED | web-quickstart | "Claude makes changes and pushes a branch without stopping for approval" | **Accept edits** (Web) |
| E45 | Plan은 접근 방식을 제안하고 승인을 기다린 뒤 파일을 수정한다 | VERIFIED | web-quickstart | "Claude proposes an approach and waits for you to approve it before editing files" | **Plan** (Web) |
| E46 | 클라우드 세션에서 터미널 전용 명령(`/plugin`, `/resume` 등)은 쓸 수 없다 | VERIFIED | claude-code-on-the-web | "Commands that only run in the terminal interface, such as `/plugin` or `/resume`, aren't available." | (Web) |
| E47 | 푸시 뒤 Changes 카드에 `+42 -18` 같은 추가·삭제 줄 수가 보이고 눌러 diff(변경 비교)를 연다 | VERIFIED | web-quickstart | "After Claude pushes its changes to a branch, the **Changes** card in the panel beside the chat shows the lines added and removed across the session, for example `+42 -18`." | **Changes** (Web) |
| E48 | diff 줄에 코멘트를 달면 다음 메시지와 함께 묶여 Claude에게 전달된다 | VERIFIED | web-quickstart | "Comments queue up until you send your next message, then they're bundled with it." | + 버튼(diff 줄 옆) (Web) |
| E49 | 변경이 마음에 들면 Create PR로 제목·설명이 자동 생성된 PR(풀 리퀘스트)을 만든다 | VERIFIED | web-quickstart | "Claude Code creates the pull request with a generated title and description." | **Create PR** (Web) |
| E50 | PR을 만든 뒤에도 세션은 살아 있어 CI 실패 내용을 붙여 넣고 고치게 할 수 있다 | VERIFIED | web-quickstart | "The session stays live after the PR is created." | — |
| E51 | Auto-fix는 PR의 CI 실패와 리뷰 코멘트에 Claude가 자동으로 대응하는 기능이다 | VERIFIED | claude-code-on-the-web | "Claude can watch a pull request and automatically respond to CI failures and review comments." | **Auto-fix** · `/autofix-pr` (Web·CLI) |
| E52 | Auto-fix는 저장소에 Claude GitHub App이 설치돼 있어야 한다 | VERIFIED | claude-code-on-the-web | "Auto-fix requires the Claude GitHub App to be installed on your repository." | — |
| E53 | Auto-fix 답글은 내 GitHub 계정 이름으로 달리고, 코멘트로 작동하는 자동화가 있으면 그 작업이 발동할 수 있다 | VERIFIED | claude-code-on-the-web | "be aware that Claude can reply on your behalf, which can trigger those workflows." | — |
| E54 | 기본 브랜치 변경으로 생긴 병합 충돌은 Auto-fix가 스스로 알아채지 못해 직접 rebase를 요청해야 한다 | VERIFIED | claude-code-on-the-web | "GitHub does not emit a webhook when the base branch advances and creates a merge conflict, so auto-fix can't react to conflicts on its own." | — |
| E55 | Team·Enterprise 계정은 세션을 Private 또는 Team으로 공유하며 Team은 같은 조직 구성원에게 보인다 | VERIFIED | claude-code-on-the-web | "Team visibility makes the session visible to other members of your claude.ai organization" | (Web) |
| E56 | Pro·Max·Ultra 계정의 Public 공유는 claude.ai에 로그인한 누구에게나 보인다 | VERIFIED | claude-code-on-the-web | "Public visibility makes the session visible to any user logged into claude.ai" | (Web) |
| E57 | 공유 전에 세션을 확인해야 한다 — 비공개 저장소의 코드와 자격 증명이 들어 있을 수 있다 | VERIFIED | claude-code-on-the-web | "Sessions may contain code and credentials from private GitHub repositories" | (Web) |
| E58 | 세션을 삭제하면 세션과 그 데이터가 영구 삭제된다 | VERIFIED | claude-code-on-the-web | "Deleting a session permanently removes the session and its data." | **Delete** (Web) |
| E59 | 클라우드 세션은 한동안 활동이 없으면 멈추고 VM이 회수된다(대화 기록은 다시 열면 복원) | VERIFIED | claude-code-on-the-web | "Cloud sessions stop after a period of inactivity and the session's VM is reclaimed." | — |
| E60 | 클라우드 세션은 계정의 다른 Claude 사용량과 속도 제한(rate limit)을 공유한다 | VERIFIED | claude-code-on-the-web | "cloud sessions share rate limits with all other Claude and Claude Code usage within your account." | — |
| E61 | 병렬로 여러 작업을 돌리면 그만큼 한도를 더 쓴다 | VERIFIED | claude-code-on-the-web | "Running multiple tasks in parallel consumes more rate limits proportionately." | — |
| E62 | 저장소 복제와 PR 생성은 GitHub가 필요하다(GitLab·Bitbucket은 번들로 보낼 수만 있고 결과를 푸시할 수 없다) | VERIFIED | claude-code-on-the-web | "repository cloning in Anthropic-hosted environments and pull request creation require GitHub." | — |
| E63 | 각 클라우드 세션은 격리된 Anthropic 관리 VM에서 돈다 | VERIFIED | security | "Each cloud session runs in an isolated, Anthropic-managed VM" | — |
| E64 | 클라우드 세션의 네트워크 접근은 기본으로 제한되고, 끄거나 특정 도메인만 허용하도록 설정할 수 있다 | VERIFIED | security | "Network access is limited by default and can be configured to be disabled or allow only specific domains" | — |

## 3. 모바일 앱 · Remote Control

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E65 | Claude Code 전용 모바일 앱은 따로 없고, Claude 앱의 Code 탭에서 클라우드 세션과 Remote Control을 쓴다 | VERIFIED | mobile | "Claude Code doesn't have a separate mobile app: cloud sessions and Remote Control both live in the **Code** tab in the Claude app, and Dispatch is a task you message in the app." | **Code** 탭 (Mobile) |
| E66 | 폰 앱은 코드가 실행되는 곳이 아니라 세션에 접속하는 클라이언트다 | VERIFIED | mobile | "is a client for Claude Code sessions rather than a place where code runs" | (Mobile) |
| E67 | Claude Code 세션에서 `/ios`·`/android`도 `/mobile`과 같은 앱 설치 안내를 보여 준다 | VERIFIED | mobile | "`/ios` and `/android` do the same thing." | `/mobile` · `/ios` · `/android` (CLI) |
| E68 | 클라우드 세션과 Remote Control은 claude.ai 계정이 필요해 Console API 키나 Bedrock 같은 서드파티로는 쓸 수 없다 | VERIFIED | mobile | "Cloud sessions and Remote Control require a claude.ai account, so they aren't reachable with an Anthropic Console API key or from a third-party provider such as Amazon Bedrock." | — |
| E69 | 컴퓨터가 꺼질 예정이면 클라우드 세션이나 프로젝트를 써야 한다 | VERIFIED | mobile | "If your computer will be off, use cloud sessions or a project, which run in the cloud and continue with your laptop closed." | (Mobile) |
| E70 | Dispatch는 Pro·Max·Ultra에서만 되고 Team·Enterprise는 안 된다 | VERIFIED | mobile | "Dispatch requires a Pro, Max, or Ultra plan and isn't available on Team or Enterprise." | Dispatch (Mobile) |
| E71 | 모바일에서도 Bypass permissions는 고를 수 없다 | VERIFIED | mobile | "You can't select Bypass permissions from the app in either case." | — |
| E72 | `/plugin`, `/resume` 같은 터미널 전용 명령은 앱에서 안 된다 | VERIFIED | mobile | "commands that only run in the terminal interface, such as `/plugin` and `/resume`, don't work from the app." | (Mobile) |
| E73 | Remote Control이 켜져 있으면 오래 걸리는 작업이 끝나거나 결정이 필요할 때 폰으로 푸시 알림이 올 수 있다 | VERIFIED | mobile | "When Remote Control is active, Claude can send push notifications to your phone, typically when a long-running task finishes or when it needs a decision from you." | (Mobile) |
| E74 | Remote Control은 폰·브라우저에서 내 컴퓨터에서 돌고 있는 Claude Code 세션에 접속하는 기능이다 | VERIFIED | remote-control | "Start a task at your desk, then pick it up from your phone on the couch or a browser on another computer." | `/remote-control` (CLI·Desktop) |
| E75 | Remote Control 중에도 Claude는 내 컴퓨터에서 계속 돌아, 코드 실행과 파일 접근이 내 컴퓨터에 남는다 | VERIFIED | remote-control | "When you start a Remote Control session on your machine, Claude keeps running locally the entire time, so your code execution and filesystem access stay on your machine." | — |
| E76 | 웹·모바일 화면은 로컬 세션을 들여다보는 창이라 컴퓨터가 켜져 있고 `claude` 프로세스가 계속 돌아야 한다 | VERIFIED | remote-control | "The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." | — |
| E77 | Remote Control은 Pro·Max·Ultra·Team·Enterprise에서 쓸 수 있고 API 키는 지원하지 않는다 | VERIFIED | remote-control | "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." | — |
| E78 | Bedrock·Agent Platform·Foundry를 쓰면 Remote Control을 쓸 수 없다 | VERIFIED | remote-control | "You use Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry." | — |
| E79 | 켜는 방법은 `claude remote-control`, `claude --remote-control`, 실행 중 세션의 `/remote-control`이다 | VERIFIED | remote-control | "Remote Control only activates when you explicitly run `claude remote-control`, `claude --remote-control`, or `/remote-control`, unless auto-connect is turned on." | `/remote-control` (CLI) |
| E80 | 서버 모드에서는 스페이스바로 폰 접속용 QR 코드를 띄울 수 있다 | VERIFIED | remote-control | "you can press spacebar to show a QR code for quick access from your phone." | `claude remote-control` (CLI) |
| E81 | 연결되면 터미널에 `/rc active` 표시가 보인다 | VERIFIED | remote-control | "the terminal shows an `/rc active` indicator that links to the session on claude.ai." | `/rc active` (CLI) |
| E82 | Remote Control 세션은 목록에서 초록 점이 있는 컴퓨터 아이콘으로 보인다 | VERIFIED | remote-control | "Remote Control sessions show a computer icon with a green status dot when online." | **Code** (Mobile·Web) |
| E83 | 모든 세션에 자동 연결하려면 `/config`에서 Enable Remote Control for all sessions를 설정한다 | VERIFIED | remote-control | "To turn auto-connect on for every interactive session, run `/config` inside Claude Code and set **Enable Remote Control for all sessions**." | **Enable Remote Control for all sessions** (CLI) |
| E84 | 데스크톱 앱에서는 Settings의 Connect new sessions to Remote Control로 자동 연결을 켠다 | VERIFIED | remote-control | "**Connect new sessions to Remote Control** in **Settings > Code** or **Settings > Claude Code**" | **Connect new sessions to Remote Control** (Desktop) |
| E85 | Remote Control은 바깥으로 나가는 HTTPS 요청만 쓰고 내 컴퓨터의 들어오는 포트를 열지 않는다 | VERIFIED | remote-control | "Your local Claude Code session makes outbound HTTPS requests only and never opens inbound ports on your machine." | — |
| E86 | 연결된 동안 대화 기록(메시지·응답·도구 활동)이 Anthropic 서버에도 저장된다 | VERIFIED | remote-control | "While Remote Control is connected, the session transcript, including your messages, Claude's responses, and tool activity, is stored on Anthropic servers." | — |
| E87 | ZDR·HIPAA 설정 조직은 Remote Control을 켤 수 없다 | VERIFIED | remote-control | "can't enable Remote Control." | — |
| E88 | 하던 로컬 작업을 다른 기기에서 이어갈 때는 Remote Control, 설정 없이 새 작업을 맡기거나 병렬로 돌릴 때는 클라우드 세션이 맞다 | VERIFIED | remote-control | "Use a cloud session when you want to start a task without any local setup, work on a repo you don't have cloned, or run multiple tasks in parallel." | — |
| E89 | 터미널을 닫거나 `claude` 프로세스를 멈추면 세션이 오프라인이 된다 | VERIFIED | remote-control | "If you close the terminal, quit the Desktop app or VS Code that runs the session on your machine, or otherwise stop the `claude` process, the session goes offline until you" | — |
| E90 | 푸시 알림은 `/config`의 Push when Claude decides, Push when actions required로 켠다 | VERIFIED | remote-control | "In your terminal, run `/config` and enable **Push when Claude decides** for proactive notifications, **Push when actions required** for permission prompts and questions, or both." | **Push when Claude decides** · **Push when actions required** (CLI) |
| E91 | 폰·웹에서 `/compact`, `/clear`, `/context`, `/usage` 등 텍스트 출력 명령은 쓸 수 있다 | VERIFIED | remote-control | "Text-output commands: `/compact`, `/clear`, `/context`, `/usage`, `/exit`, `/usage-credits`, `/recap`, and `/reload-plugins`." | (Mobile·Web) |

## 4. 세션 이어가기 · 이름 붙이기

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E92 | Claude Code는 세션을 로컬에 저장해, 이어서 하거나 다른 방식을 시도하거나 작업 사이를 오갈 수 있다 | VERIFIED | sessions | "Claude Code stores it locally as you work, so you can resume where you left off, branch to try a different approach, or switch between tasks." | — |
| E93 | 데스크톱 앱·claude.ai/code·VS Code 확장은 각자 세션 목록을 따로 가지며, 이 문서는 CLI 기준이다 | VERIFIED | sessions | "each keep their own session list, and the desktop app can also" | (CLI) |
| E94 | `claude --continue`는 현재 폴더의 가장 최근 세션을 다시 연다 | VERIFIED | sessions | "Reopens the most recent session in the current directory" | `claude --continue` (CLI) |
| E95 | `claude --resume <이름>`은 이름 붙인 세션을 바로 연다 | VERIFIED | sessions | "Resumes the named session directly" | `claude --resume <name>` (CLI) |
| E96 | 세션 안에서 `/resume`으로 다른 세션으로 전환한다 | VERIFIED | sessions | "Switches to a different session from inside an active session" | `/resume` (CLI) |
| E97 | `claude --resume`만 치거나 세션 안에서 `/resume`을 치면 대화형 세션 선택 화면이 열린다 | VERIFIED | sessions | "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." | session picker (CLI) |
| E98 | 병렬로 여러 작업을 할 때는 세션에 알아보기 쉬운 이름을 붙이면 찾고 이어가기 쉽다 | VERIFIED | sessions | "Give sessions descriptive names so they're findable in the session picker and resumable by name." | — |
| E99 | 이름은 시작할 때 `claude -n 이름`, 도중에 `/rename 이름`으로 붙인다 | VERIFIED | sessions | "`claude -n auth-refactor`" | `claude -n` · `/rename` (CLI) |
| E100 | 이름을 안 붙이면 첫 프롬프트를 요약한 제목이 자동 생성되고, 이 제목으로도 이어갈 수 있다 | VERIFIED | sessions | "if you don't name a session, Claude Code generates a session title for it." | — |
| E101 | `/branch`는 지금까지의 대화를 복사해 새 세션으로 옮기며 원래 세션은 그대로 남는다 | VERIFIED | sessions | "Branching creates a copy of the conversation so far and switches you into it, leaving the original intact." | `/branch` (CLI) |
| E102 | `/clear`로 비워도 이전 세션은 저장되어 `/resume`으로 돌아올 수 있다 | VERIFIED | sessions | "Claude Code saves the previous session; resume it with `/resume`" | `/clear` (CLI) |
| E103 | 이어 열 때 대화 내용과 사용하던 모델이 복원되지만, 일부 실행 옵션(`--mcp-config`, `--add-dir` 등)은 다시 지정해야 한다 | VERIFIED | sessions | "Not every configuration flag from the original launch is restored." | (CLI) |
| E104 | 대화 기록은 `~/.claude/projects/<project>/<session-id>.jsonl`에 JSONL로 저장된다 | VERIFIED | sessions | "By default, Claude Code stores transcripts as JSONL at `~/.claude/projects/<project>/<session-id>.jsonl`" | — |
| E105 | 같은 세션을 터미널 두 곳에서 분기 없이 열면 두 쪽 메시지가 한 기록에 섞인다 | VERIFIED | sessions | "If you resume the same session in two terminals without forking, messages from both interleave into one transcript." | — |

## 5. 예약 작업 3종 — 클라우드 예약 · 데스크톱 예약 · `/loop`

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E106 | 클라우드 예약 작업은 예전 이름이 "routines"이고, 일부 화면·주소·명령에는 옛 이름이 남아 있다 | VERIFIED | routines | "Scheduled tasks were previously called routines, and these places keep the earlier name." | **Routines** · **New routine** · `/routines` · claude.ai/code/routines (Web·Desktop·CLI) |
| E107 | 클라우드 예약 작업은 프롬프트·저장소·커넥터를 한 번 저장해 두고 자동 실행하는 설정이다 | VERIFIED | routines | "A cloud scheduled task, formerly a routine, is a saved Claude Code configuration: a prompt, one or more repositories, and a set of" | **Scheduled** (Desktop) |
| E108 | 클라우드 예약 작업은 노트북이 닫혀 있어도 동작한다 | VERIFIED | routines | "when routed there, so they keep working when your laptop is closed." | — |
| E109 | 클라우드 예약 작업은 아직 연구 미리보기(research preview)이며 동작·한도·API가 바뀔 수 있다 | VERIFIED | routines | "Scheduled tasks are in research preview." | — |
| E110 | 클라우드 예약 작업은 Pro·Max·Ultra·Team·Enterprise에서 쓸 수 있다 | VERIFIED | routines | "Scheduled tasks are available on Pro, Max, Ultra, Team, and Enterprise plans." | — |
| E111 | 트리거(시작 조건)는 일정, API 호출, GitHub 이벤트 세 가지이고 한 작업에 섞을 수 있다 | VERIFIED | routines | "A single scheduled task can combine triggers." | — |
| E112 | 일정 트리거는 시간·밤·주 단위 반복이거나 미래의 한 시점에 한 번 실행하는 것이다 | VERIFIED | routines | "run on a recurring cadence like hourly, nightly, or weekly, or once at a specific future time" | — |
| E113 | CLI에서는 `/schedule`로 대화하며 만든다(별칭 `/routines`) | VERIFIED | routines | "Run `/schedule` in any session to create a scheduled task conversationally." | `/schedule` (CLI) |
| E114 | 클라우드 예약 작업은 개인 claude.ai 계정 소유라 팀원과 공유되지 않는다 | VERIFIED | routines | "Scheduled tasks belong to your individual claude.ai account." | — |
| E115 | 클라우드 예약 작업은 전체 Claude Code 클라우드 세션으로 사람 없이 자율 실행된다 | VERIFIED | routines | "Scheduled tasks run autonomously as full Claude Code cloud sessions." | — |
| E116 | 만들 때 권한 모드를 고르지 않는다 | VERIFIED | routines | "You don't choose a permission mode when you create the task" | — |
| E117 | 실행하려면 저장소를 복제할 GitHub 접근이 필요하다 | VERIFIED | routines | "Scheduled tasks need GitHub access to clone repositories." | — |
| E118 | GitHub 연결이 끊기면 최대 72시간 실행을 건너뛰고, 72시간이 지나면 작업이 꺼진다 | VERIFIED | routines | "After 72 hours without a connection, the task turns off, and you turn it back on after reconnecting GitHub." | — |
| E119 | Claude는 별도 지시가 없으면 `claude/`로 시작하는 브랜치에 푸시한다 | VERIFIED | routines | "Claude pushes its work to a branch prefixed with `claude/` unless your prompt directs it to push to another branch." | — |
| E120 | 새 작업을 만들면 현재 연결된 커넥터가 기본으로 모두 포함되므로 필요 없는 것은 빼야 한다 | VERIFIED | routines | "When you create a scheduled task, all of your currently connected connectors are included by default." | — |
| E121 | 정각에 맞춘 일정은 몇 분 늦게 시작할 수 있어, 9:07처럼 정각을 피하면 시각에 가깝게 시작한다 | VERIFIED | routines | "if you schedule a run exactly on the hour, such as 9:00, it can start several minutes late." | — |
| E122 | 1시간보다 잦게 도는 cron 식은 거부된다 | VERIFIED | routines | "Expressions that run more often than once per hour are rejected." | **Custom** (Web) |
| E123 | 클라우드 예약 작업의 cron 식(5필드)은 시간을 UTC로 쓰고, 프리셋은 내 지역 시간대로 입력한다 | VERIFIED | routines | "when the expression is five fields alone, write the hours in UTC, so `0 9 * * 1-5` runs at 9:00 AM UTC on weekdays." | (Web) |
| E124 | 일회성 실행은 한 번 돈 뒤 스스로 꺼지고 웹 화면에 Completed로 표시된다 | VERIFIED | routines | "After the task runs, it turns itself off and the web UI marks it as **Completed**." | **Completed** (Web) |
| E125 | 클라우드 작업의 구독 사용량은 대화형 세션과 같은 방식으로 차감된다 | VERIFIED | routines | "Scheduled tasks draw down subscription usage the same way interactive sessions do." | claude.ai/settings/usage (Web) |
| E126 | 구독 한도와 별개로 실행 방식마다 시간당 횟수 제한이 있고 초과 요금은 없다 | VERIFIED | routines | "None of these hourly limits has overage." | — |
| E127 | 사용량 크레딧(usage credits)이 켜진 조직은 한도 초과 후에도 종량제로 계속 실행하고, 없으면 한도가 풀릴 때까지 거부된다 | VERIFIED | routines | "Without usage credits, additional runs are rejected until your usage window resets." | — |
| E128 | 구독이 일시 중지되면 예약 작업도 보류된다 | VERIFIED | routines | "While your subscription is paused, your scheduled tasks are put on hold and don't run." | — |
| E129 | Run 기록의 Succeeded는 세션이 정상 종료됐다는 뜻이지 프롬프트의 일을 다 했다는 뜻이 아니다 | VERIFIED | routines | "These outcomes say how the session ended, not whether Claude completed the work your prompt describes, so open the run and read its transcript to see what happened." | **History** (Web) |
| E130 | Team·Enterprise Owner는 조직 설정 토글로 전 구성원의 예약 작업을 끌 수 있다 | VERIFIED | routines | "Team and Enterprise Owners can turn off scheduled tasks for all members with the" | **Scheduled tasks (Was Routines)** (Web) |
| E131 | 데스크톱 Scheduled 페이지에는 로컬 작업과 클라우드 작업이 함께 나열된다 | VERIFIED | desktop-scheduled-tasks | "The Desktop app's **Scheduled tasks** page lists both local scheduled tasks and" | **Scheduled** (Desktop) |
| E132 | 로컬 작업은 내 컴퓨터의 파일·도구를 쓰지만 앱이 열려 있고 컴퓨터가 깨어 있을 때만 실행된다 | VERIFIED | desktop-scheduled-tasks | "runs on your machine with direct access to your files and tools, but only fires while the app is open and your computer is awake" | **Only on this computer** (Desktop) |
| E133 | 클라우드 작업은 컴퓨터가 꺼져 있어도 돌고 API 호출이나 GitHub 이벤트로도 시작된다 | VERIFIED | desktop-scheduled-tasks | "runs even when your computer is off, and can also start on API calls or GitHub events" | (Desktop) |
| E134 | 로컬 예약 작업은 Claude Desktop 1.1.5368 이상이 필요하다 | VERIFIED | desktop-scheduled-tasks | "Local scheduled tasks require Claude Desktop 1.1.5368 or later." | (Desktop) |
| E135 | 데스크톱에서 New task를 누르면 New scheduled task 대화상자가 열린다(화면 구성이 계정마다 다를 수 있다) | VERIFIED | desktop-scheduled-tasks | "Click **New task** to open the **New scheduled task** dialog." | **New task** · **New scheduled task** (Desktop) |
| E136 | 이름은 소문자 kebab-case로 바뀌어 폴더 이름이 되므로 작업끼리 겹치면 안 된다 | VERIFIED | desktop-scheduled-tasks | "Desktop converts it to lowercase kebab-case and uses it as the task's folder name on disk, so the name must be unique across your tasks." | **Name** (Desktop) |
| E137 | 로컬 작업의 일정 옵션은 Hourly·Daily·Weekdays·Weekly·Manual·Custom이다 | VERIFIED | desktop-scheduled-tasks | "same as Daily but skips Saturday and Sunday" | **Weekdays** (Desktop) |
| E138 | Manual은 일정이 없고 Run now를 누를 때만 실행된다 | VERIFIED | desktop-scheduled-tasks | "no schedule, only runs when you click **Run now**." | **Manual** · **Run now** (Desktop) |
| E139 | 데스크톱 폼은 1시간보다 잦은 cron 식을 거부하지만, Claude에게 말로 시키면 그 제한 없이 설정할 수 있다 | VERIFIED | desktop-scheduled-tasks | "Claude isn't held to the once-per-hour limit and can set a single run at a future time." | (Desktop) |
| E140 | 앱이 꺼져 있거나 컴퓨터가 잠들어 있던 시각의 실행은 건너뛴다 | VERIFIED | desktop-scheduled-tasks | "If your computer sleeps through a scheduled time, the run is skipped." | (Desktop) |
| E141 | 잠자기를 막으려면 Keep computer awake를 켠다(노트북 덮개를 닫으면 여전히 잠든다) | VERIFIED | desktop-scheduled-tasks | "Closing the laptop lid still puts it to sleep." | **Keep computer awake** (Desktop) |
| E142 | 놓친 실행은 최근 7일 중 가장 최근 시각 하나만 한 번 보충 실행하고 오래된 것은 버린다 | VERIFIED | desktop-scheduled-tasks | "Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." | (Desktop) |
| E143 | 작업마다 자기 권한 모드가 있고, `~/.claude/settings.json`의 허용 규칙도 적용된다 | VERIFIED | desktop-scheduled-tasks | "Allow rules from `~/.claude/settings.json` also apply to scheduled task sessions." | (Desktop) |
| E144 | 기본적으로 로컬 작업은 커밋 안 된 변경을 포함한 작업 폴더 상태 그대로 실행된다 | VERIFIED | desktop-scheduled-tasks | "By default, local scheduled tasks run against whatever state your working directory is in, including uncommitted changes." | (Desktop) |
| E145 | 비교 요약: 컴퓨터 없이도 안정적으로 돌릴 일은 클라우드 작업 | VERIFIED | desktop-scheduled-tasks | "Use **cloud tasks** for work that should run reliably without your machine." | — |
| E146 | 비교 요약: 로컬 파일·도구가 필요하면 데스크톱 작업 | VERIFIED | desktop-scheduled-tasks | "Use **Desktop tasks** when you need access to local files and tools." | — |
| E147 | 비교 요약: 세션 중 빠른 확인 반복에는 `/loop` | VERIFIED | desktop-scheduled-tasks | "Use **`/loop`** for quick polling during a session." | `/loop` (CLI) |
| E148 | `/loop` 등 세션 범위 예약은 열려 있는 Claude Code 세션 안에서 프롬프트를 일정 간격으로 다시 실행한다 | VERIFIED | scheduled-tasks | "Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." | `/loop` (CLI) |
| E149 | 간격 단위는 s·m·h·d이고, 초 단위는 분으로 올림된다 | VERIFIED | scheduled-tasks | "Supported units are `s` for seconds, `m` for minutes, `h` for hours, and `d` for days." | `/loop 5m ...` (CLI) |
| E150 | 간격을 생략하면 Claude가 매번 1분~1시간 사이에서 대기 시간을 고른다 | VERIFIED | scheduled-tasks | "After each iteration it picks a delay between one minute and one hour based on what it observed" | `/loop` (CLI) |
| E151 | 고정 간격 루프는 Esc나 Ctrl+C로 안 멈추고 Claude에게 취소하라고 말해야 한다 | VERIFIED | scheduled-tasks | "to stop a loop such as `/loop 5m`, ask Claude to cancel it, for example `cancel the deploy check loop`." | (CLI) |
| E152 | 반복 작업은 만든 지 7일이 지나면 마지막으로 한 번 실행되고 스스로 삭제된다 | VERIFIED | scheduled-tasks | "Recurring tasks automatically expire 7 days after creation." | (CLI) |
| E153 | 세션 범위 예약은 Claude Code가 실행 중이고 대기 상태일 때만 발동하며, 터미널을 닫으면 멈춘다 | VERIFIED | scheduled-tasks | "Tasks only fire while Claude Code is running and idle." | (CLI) |
| E154 | 한 세션은 예약 작업을 최대 50개까지 가질 수 있다 | VERIFIED | scheduled-tasks | "A session can hold up to 50 scheduled tasks at once." | (CLI) |
| E155 | 모든 시각은 UTC가 아니라 내 지역 시간대로 해석된다(세션 범위 예약) | VERIFIED | scheduled-tasks | "All times are interpreted in your local timezone." | (CLI) |
| E156 | 세션과 무관하게 계속 돌려야 하면 클라우드·데스크톱 예약이나 GitHub Actions를 쓴다 | VERIFIED | scheduled-tasks | "For scheduling that survives independently of any session, create a" | — |

## 6. 비용 · 사용량 · 모델 선택 · 빠른 모드

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E157 | Claude Code 비용은 API 토큰 사용량 기준이며, 구독 요금제 가격은 별도 가격 페이지를 본다 | VERIFIED | costs | "Claude Code charges by API token consumption." | — |
| E158 | 기업 환경 평균은 개발자 1인당 활성일 하루 약 13달러, 월 150~250달러이며 90% 사용자는 하루 30달러 미만이다(개인 구독 비용 기준이 아님) | VERIFIED | costs | "Across enterprise deployments, the average cost is around \$13 per developer per active day" | — |
| E159 | `/usage`의 Session 칸 비용은 API 사용자용이며, 구독자는 사용량이 구독에 포함돼 이 금액이 청구 기준이 아니다 | VERIFIED | costs | "Claude Pro, Max, and Ultra subscribers have usage included in their subscription, so the session cost figure isn't relevant for billing purposes." | `/usage` (CLI) |
| E160 | 구독자는 같은 화면에서 플랜 사용량 막대·활동 통계·사용 내역을 본다 | VERIFIED | costs | "Subscribers see plan usage bars, activity stats, and a usage breakdown on the same screen." | `/usage` (CLI) |
| E161 | 달러 금액은 토큰 수에 목록 가격을 곱해 로컬에서 계산한 추정치다 | VERIFIED | costs | "Claude Code computes the dollar figure locally from token counts at list price" | `/usage` (CLI) |
| E162 | 유료 플랜의 `/usage`는 스킬·서브에이전트·플러그인·MCP 서버별 사용 비중과 개선 추천을 보여 준다 | VERIFIED | costs | "On a Pro, Max, Ultra, Team, or Enterprise plan, `/usage` also shows a breakdown of what counts against your plan limits, with recommendations:" | `/usage` (CLI) |
| E163 | 사용 내역은 이 컴퓨터의 로컬 기록 기준 근삿값이라 다른 기기·claude.ai 사용량은 빠진다 | VERIFIED | costs | "The figures are approximate and computed from local session history on this machine, so usage from other devices or claude.ai is not included." | `/usage` (CLI) |
| E164 | `/usage`에서 `d`·`w`로 최근 24시간과 7일을 바꿔 본다 | VERIFIED | costs | "Press `d` or `w` to switch between the last 24 hours and the last 7 days." | `/usage` (CLI) |
| E165 | `/usage` 하단 `f to fix` 안내가 보이면 `f`로 추천을 적용하며 v2.1.305 이상이 필요하다 | VERIFIED | costs | "The `f` shortcut requires Claude Code v2.1.305 or later." | `f to fix` (CLI) |
| E166 | 사용량 크레딧은 플랜 한도를 넘겨서도 계속 쓰게 해 주며 `/usage-credits`로 관리하고 API 키 인증에서는 쓸 수 없다 | VERIFIED | costs | "To manage them, run `/usage-credits` after signing in with your claude.ai subscription through `/login`; the command isn't available with API key authentication." | `/usage-credits` (CLI) |
| E167 | 스피너 옆 토큰 수는 이번 턴에 Claude가 낸 출력의 대략적인 실시간 수치다 | VERIFIED | costs | "It is a live, approximate count of the output the current turn has produced so far." | 스피너 옆 `↓ 5.5k tokens` (CLI) |
| E168 | `/insights`는 토큰이 아니라 일하는 방식에 대한 보고서를 만든다 | VERIFIED | costs | "for a report on how you work rather than how many tokens you've used." | `/insights` (CLI) |
| E169 | 토큰 비용은 컨텍스트(Claude가 한 번에 보는 대화 분량) 크기에 비례해 커진다 | VERIFIED | costs | "Token costs scale with context size: the more context Claude processes, the more tokens you use." | — |
| E170 | 관련 없는 일로 바꿀 때는 `/clear`로 새로 시작한다 — 낡은 맥락이 이후 모든 메시지에 토큰을 낭비한다 | VERIFIED | costs | "Stale context wastes tokens on every subsequent message." | `/clear` (CLI) |
| E171 | `/clear` 전에 `/rename`을 해 두면 나중에 `/resume`으로 돌아오기 쉽다 | VERIFIED | costs | "Use `/rename` before clearing so you can find the session later, then `/resume` to return to it." | `/rename` · `/resume` (CLI) |
| E172 | `/compact` 뒤에 지시를 붙여 요약에서 남길 내용을 정할 수 있다 | VERIFIED | costs | "`/compact Focus on code samples and API usage` tells Claude what to preserve during summarization." | `/compact` (CLI) |
| E173 | Sonnet은 대부분의 코딩에 충분하고 Opus보다 싸다 | VERIFIED | costs | "Sonnet handles most coding tasks well and costs less than Opus." | `/model` (CLI) |
| E174 | Opus는 복잡한 설계 결정이나 여러 단계 추론에만 아끼라고 권한다 | VERIFIED | costs | "Reserve Opus for complex architectural decisions or multi-step reasoning." | `/model` (CLI) |
| E175 | 모델은 `/model`로 도중에 바꾸고 `/config`에서 기본값을 정한다 | VERIFIED | costs | "Use `/model` to switch models mid-session, or set a default in `/config`." | `/model` · `/config` (CLI) |
| E176 | 안 쓰는 MCP 서버는 `/mcp`에서 꺼서 컨텍스트 낭비를 줄인다 | VERIFIED | costs | "Run `/mcp` to see configured servers and disable any you're not actively using." | `/mcp` (CLI) |
| E177 | 확장 사고(extended thinking)는 기본 켜짐이고 생각 토큰은 출력 토큰으로 청구된다 | VERIFIED | costs | "Thinking tokens are billed as output tokens, and the default budget can be tens of thousands of tokens per request depending on the model." | `/config` (CLI) |
| E178 | Opus 5.5·Sonnet 5.5·Haiku 5.5·Fable 모델은 사고를 끌 수 없다 | VERIFIED | costs | "You can't turn off thinking on Opus 5.5, Sonnet 5.5, Haiku 5.5, or the Fable models, which always use extended thinking." | — |
| E179 | 단순한 작업은 effort(생각 깊이) 레벨을 낮춰 비용을 줄인다 | VERIFIED | costs | "For simpler tasks where deep reasoning isn't needed, you can reduce costs by lowering the" | `/effort` (CLI) |
| E180 | 서브에이전트의 요청도 내 사용량에서 차감된다 | VERIFIED | costs | "The subagent's own requests still draw on your usage." | — |
| E181 | 에이전트 팀은 플랜 모드 기준 일반 세션보다 약 7배 토큰을 쓴다 | VERIFIED | costs | "Agent teams use approximately 7x more tokens than standard sessions when teammates run in plan mode" | — |
| E182 | 구체적으로 요청해야 파일을 덜 읽고 효율적으로 일한다 | VERIFIED | costs | "let Claude work efficiently with minimal file reads." | — |
| E183 | 방향이 틀어지면 Esc로 즉시 멈추고 `/rewind` 또는 Esc 두 번으로 이전 시점으로 되돌린다 | VERIFIED | costs | "Use `/rewind` or double-tap Escape to restore conversation and code to a previous checkpoint." | `/rewind` (CLI) |
| E184 | 자리를 비운 동안에도 세션 요약·유휴 압축·프롬프트 제안이 토큰을 쓸 수 있다 | VERIFIED | costs | "Session recap and idle compaction can use tokens while you're idle." | — |
| E185 | 오래 열어 둔 세션은 매 요청마다 전체 대화를 다시 보내므로 한 줄 질문도 전체 대화만큼 사용량을 쓴다 | VERIFIED | costs | "Claude Code sends your full conversation with every request, and each time Claude uses tools it sends another request carrying that batch of tool results." | — |
| E186 | 자리를 오래 비운 뒤 첫 메시지는 캐시가 만료돼 전체 컨텍스트를 다시 처리한다 | VERIFIED | costs | "misses the cache and reprocesses your full context." | — |
| E187 | 세션 범위 예약 작업은 세션이 놀고 있어도 간격마다 전체 컨텍스트를 보내 사용량을 쓴다 | VERIFIED | costs | "fires on its interval even while the session is idle, sending your full context each time" | — |
| E188 | 새로 시작하려는 때는 `/clear`가 비용이 들지 않는다 | VERIFIED | costs | "When you want a fresh start instead of continuity, `/clear` costs nothing" | `/clear` (CLI) |
| E189 | 모델 별칭: `sonnet`은 일상 코딩용 최신 Sonnet | VERIFIED | model-config | "Uses the latest Sonnet model for daily coding tasks" | `/model` (CLI) |
| E190 | 모델 별칭: `opus`는 복잡한 추론용 최신 Opus | VERIFIED | model-config | "Uses the latest Opus model for complex reasoning tasks" | `/model` (CLI) |
| E191 | 모델 별칭: `haiku`는 단순 작업용의 빠르고 효율적인 모델 | VERIFIED | model-config | "Uses the fast and efficient Haiku model for simple tasks" | `/model` (CLI) |
| E192 | `opusplan`은 계획 모드에서 opus, 실행 단계에서 sonnet으로 자동 전환한다 | VERIFIED | model-config | "Special mode that uses `opus` during plan mode, then switches to `sonnet` for execution" | `opusplan` (CLI) |
| E193 | `opus`·`sonnet`·`haiku` 별칭은 Anthropic API에서 최신 버전으로, 일부 다른 제공자에서는 이전 버전으로 풀린다 | VERIFIED | model-config | "The `opus`, `sonnet`, and `haiku` aliases resolve to the newest version on the Anthropic API and to an earlier version on some other providers:" | — |
| E194 | Pro·Max·Ultra·Team·Enterprise·Anthropic API의 `default`는 Opus 5.5다 | VERIFIED | model-config | "**Pro, Max, Ultra, Team, Enterprise, and Anthropic API**: defaults to Opus 5.5" | `default` (CLI) |
| E195 | Sonnet 5.5는 Claude Code v2.1.284 이상, Opus 5.5는 v2.1.280 이상이 필요하다 | VERIFIED | model-config | "Sonnet 5.5 requires Claude Code v2.1.284 or later, and Opus 5.5 requires v2.1.280 or later." | `claude update` (CLI) |
| E196 | Fable은 어느 요금제에서도 기본 모델이 아니라 직접 골라야 한다 | VERIFIED | model-config | "Neither Fable model is the account-type default on any plan or provider." | `/model fable` (CLI) |
| E197 | Fable 5.1은 `/model fable` 또는 `claude --model fable`로 고른다 | VERIFIED | model-config | "run `/model fable`, or launch with `claude --model fable`." | `/model fable` (CLI) |
| E198 | Fable은 가장 유능한 모델로 한 번에 끝내기 어려운 큰 작업에 맞는다 | VERIFIED | model-config | "and Claude Fable 5 are the most capable models in Claude Code, suited to tasks larger than a single sitting." | — |
| E199 | 요금제·좌석 등급에 따라 Fable 사용량은 사용량 크레딧으로 청구될 수 있다 | VERIFIED | model-config | "Depending on your plan and seat tier, Fable usage can bill to" | `/model` 선택창 (CLI) |
| E200 | `/model`은 고른 모델을 새 세션의 기본값으로 저장한다 | VERIFIED | model-config | "`/model` saves your choice as the default for new sessions by writing the `model` field in your user settings." | `/model` (CLI) |
| E201 | 선택창에서 Enter는 저장, `s`는 이번 세션에만 적용한다 | VERIFIED | model-config | "`s`: switch model for this session only and leave your default unchanged." | `/model` (CLI) |
| E202 | 이어서 연 세션은 저장 당시의 모델을 그대로 쓴다 | VERIFIED | model-config | "Resumed sessions started with `claude --resume`, `--continue`, or the `/resume` picker keep the model they were using when the transcript was saved." | — |
| E203 | 모델을 `/model`로 바꾸면 모델을 상속하는 서브에이전트에도 반영된다 | VERIFIED | model-config | "If you switch models with `/model`, the switch also reaches" | — |
| E204 | effort는 모델이 단계마다 생각을 얼마나 할지 정하는 조절이며, 낮을수록 빠르고 싸다 | VERIFIED | model-config | "Lower effort is faster and cheaper for straightforward tasks, while higher effort provides deeper reasoning for complex problems." | `/effort` (CLI) |
| E205 | 기본 effort는 대부분 high지만 Opus 5.5·Sonnet 5.5·Haiku 5.5는 medium이다 | VERIFIED | model-config | "`high` on every model that supports effort, except that Opus 5.5, Sonnet 5.5, and Haiku 5.5 default to `medium` and Opus 4.7 defaults to `xhigh`." | — |
| E206 | `max`는 가장 깊은 추론 단계이고 환경 변수로 지정하지 않으면 현재 세션에만 적용된다 | VERIFIED | model-config | "Unless you set it through the `CLAUDE_CODE_EFFORT_LEVEL` environment variable, Claude Code applies `max` to the current session only." | `/effort` (CLI) |
| E207 | `max`는 수확 체감이 있고 과하게 생각하기 쉬워 널리 쓰기 전에 시험해 보라고 한다 | VERIFIED | model-config | "`max` may show diminishing returns and is prone to overthinking, so test before adopting it broadly" | — |
| E208 | 모델이 지원하지 않는 effort를 지정하면 그 이하에서 지원하는 가장 높은 단계로 내려간다 | VERIFIED | model-config | "If you set a level the active model does not support, Claude Code falls back to the highest supported level at or below the one you set." | — |
| E209 | 빠른 모드는 Opus를 최대 2.5배 빠르게 하는 고속 설정이며 토큰당 비용이 더 든다 | VERIFIED | fast-mode | "Fast mode is a high-speed configuration for Claude Opus, making the model up to 2.5x faster at a higher cost per token." | `/fast` (CLI) |
| E210 | 빠른 모드는 다른 모델이 아니라 같은 Opus의 API 설정만 다르다 | VERIFIED | fast-mode | "Fast mode is not a different model." | `/fast` |
| E211 | 빠른 모드는 Sonnet·Haiku 등에는 없다 | VERIFIED | fast-mode | "It is not available on Sonnet, Haiku, or other models." | — |
| E212 | 구독 요금제에서 빠른 모드는 사용량 크레딧으로만 쓰이며 구독 한도에 포함되지 않는다 | VERIFIED | fast-mode | "For Claude Code users on subscription plans (Pro/Max/Ultra/Team/Enterprise), fast mode is available via usage credits only and not included in the subscription rate limits." | — |
| E213 | 빠른 모드는 Anthropic Console API와 구독에서만 되고 Bedrock·Agent Platform·Foundry에서는 안 된다 | VERIFIED | fast-mode | "It is not available on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, or Claude Platform on AWS." | — |
| E214 | Team·Enterprise는 Owner가 먼저 빠른 모드를 켜 줘야 한다 | VERIFIED | fast-mode | "Team and Enterprise organizations need an Owner to enable it first" | — |
| E215 | Opus 5.5의 빠른 모드 가격은 입력/출력 백만 토큰당 8달러/40달러다 | VERIFIED | fast-mode | "Fast mode pricing per MTok input/output is \$8/\$40 on Opus 5.5 and \$10/\$50 on Opus 5 and Opus 4.8." | — |
| E216 | `/fast`를 누르고 Space로 켜고 끈 뒤 Enter로 확정한다 | VERIFIED | fast-mode | "Run `/fast`, press Space to toggle on or off, then press Enter to confirm" | `/fast` (CLI) |
| E217 | 빠른 모드가 켜져 있으면 프롬프트 옆에 `↯` 아이콘이 보인다 | VERIFIED | fast-mode | "A small `↯` icon appears next to the prompt while fast mode is active" | `↯` (CLI) |
| E218 | 켜 둔 빠른 모드는 기본적으로 세션을 넘어 유지된다 | VERIFIED | fast-mode | "By default, fast mode you turn on in an interactive session persists across sessions." | — |
| E219 | 대화 중간에 처음 켜면 그 대화 전체 컨텍스트를 빠른 모드 비캐시 입력 가격으로 낸다 | VERIFIED | fast-mode | "The first time you enable fast mode in a conversation, you pay the full fast mode uncached input token price for the entire conversation context." | — |
| E220 | 비용 효율을 위해 세션 시작 때 켜고, 대화 도중에 켜고 끄지 말라고 권한다 | VERIFIED | fast-mode | "For the best cost efficiency, enable fast mode at the start of a session rather than switching mid-conversation." | — |
| E221 | 빠른 모드는 반복 수정·실시간 디버깅처럼 응답 속도가 비용보다 중요할 때 적합하다 | VERIFIED | fast-mode | "Fast mode is best for interactive work where response latency matters more than cost:" | — |
| E222 | 클라우드 세션에서는 `/fast on`으로 켜며 그 세션에서만 유지된다 | VERIFIED | fast-mode | "It stays on for that session only and isn't saved as your default." | `/fast on` (Web) |
| E223 | Pro·Max·Ultra는 빠른 모드 비용을 사용량 크레딧에서 내며 claude.ai Settings > Usage에서 본다 | VERIFIED | fast-mode | "you pay for fast mode from your usage credits." | **Settings > Usage** (Web) |

## 7. 데이터 사용 · 보존

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E224 | 개인 계정(Free·Pro·Max·Ultra)은 내 데이터를 모델 개선에 쓸지 선택할 수 있다 | VERIFIED | data-usage | "We give you the choice to allow your data to be used to improve future Claude models." | claude.ai/settings/data-privacy-controls (Web) |
| E225 | 설정이 켜져 있으면 Claude Code 사용 데이터도 새 모델 학습에 쓰인다 | VERIFIED | data-usage | "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." | — |
| E226 | 상업용(Team·Enterprise·API 등)은 고객이 직접 제공을 택하지 않는 한 Claude Code로 보낸 코드·프롬프트로 학습하지 않는다 | VERIFIED | data-usage | "Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us for model improvement" | — |
| E227 | 개인 계정에서 학습 허용 시 보관 기간은 5년이다 | VERIFIED | data-usage | "Users who allow data use for model improvement: 5-year retention period to support model development and safety improvements" | — |
| E228 | 개인 계정에서 학습을 허용하지 않으면 보관 기간은 30일이다 | VERIFIED | data-usage | "Users who don't allow data use for model improvement: 30-day retention period" | — |
| E229 | 개인 계정의 개인정보 설정은 언제든 바꿀 수 있다 | VERIFIED | data-usage | "Privacy settings can be changed at any time at" | claude.ai/settings/data-privacy-controls (Web) |
| E230 | 상업용 계정의 표준 보관 기간은 30일이다 | VERIFIED | data-usage | "Standard: 30-day retention period" | — |
| E231 | ZDR(서버에 저장 안 함)은 표준 Enterprise에 포함되지 않고 조직별로 자격 확인 후 켠다 | VERIFIED | data-usage | "ZDR is not included in the standard Enterprise plan; it is enabled on a per-organization basis by your account team after confirming eligibility" | — |
| E232 | Claude Code 클라이언트는 세션 기록을 내 컴퓨터에 평문으로 기본 30일 저장한다 | VERIFIED | data-usage | "Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." | — |
| E233 | 클라우드 세션은 언제든 삭제할 수 있고 삭제하면 이벤트 데이터가 영구 제거된다 | VERIFIED | data-usage | "You can delete individual cloud sessions at any time." | — |
| E234 | Claude Code는 대화 내용(프롬프트와 모델 출력 전부)을 네트워크로 모델에 보내며 TLS 1.2 이상으로 암호화된다 | VERIFIED | data-usage | "This data includes all user prompts and model outputs, encrypted in transit via TLS 1.2+." | — |
| E235 | `/feedback`을 쓰면 코드가 포함된 대화 기록 사본이 Anthropic에 전송된다 | VERIFIED | data-usage | "When you run the `/feedback` command, a copy of your conversation history including code is sent to Anthropic." | `/feedback` (CLI) |
| E236 | `/feedback`·`/bug`·`/share`로 공유한 기록은 5년 보관된다 | VERIFIED | data-usage | "Transcripts shared via `/feedback`, or via `/bug` and `/share`, which report through the same path, are retained for 5 years." | `/feedback` · `/bug` · `/share` (CLI) |
| E237 | 세션 평가 설문의 별점 응답은 평점만 기록하고 대화 내용은 수집하지 않는다 | VERIFIED | data-usage | "We do not collect or store any conversation transcripts, inputs, outputs, or other session data as part of the rating prompt itself." | "How is Claude doing this session?" (CLI) |
| E238 | 후속 질문에서 Yes를 고를 때만 대화 기록이 업로드된다 | VERIFIED | data-usage | "Nothing is uploaded unless you explicitly select **Yes**." | **Yes** · **No** · **Don't ask again** (CLI) |
| E239 | 사용 지표(telemetry)는 코드·프롬프트·파일 경로를 포함하지 않고 `DISABLE_TELEMETRY=1`로 끌 수 있다 | VERIFIED | data-usage | "Metrics never include your code, prompts, or file paths." | — |
| E240 | 오류 보고는 비밀값·경로·이메일 등을 가린 뒤 보낸다 | VERIFIED | data-usage | "Claude Code redacts known patterns of secrets, file paths, email addresses, and other personal information before anything leaves your machine." | — |
| E241 | Anthropic 호스팅 클라우드 세션에서는 Anthropic이 세션 기록을 저장해 나중에 돌아올 수 있게 한다 | VERIFIED | data-usage | "Anthropic stores the session transcript so you can return to the session later." | — |
| E242 | 클라우드 세션의 모든 나가는 트래픽은 감사 기록과 악용 방지용 보안 프록시를 거친다 | VERIFIED | data-usage | "All outbound traffic goes through a security proxy for audit logging and abuse prevention" | — |
| E243 | Bedrock 등 서드파티 제공자에서는 오류 보고·telemetry·버그 보고가 기본 꺼짐이다 | VERIFIED | data-usage | "By default, error reporting, telemetry, and bug reporting are disabled when using Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, or Claude Platform on AWS." | — |

## 8. 보안 · 샌드박스

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E244 | 권한 모드는 Claude가 묻지 않고 할 수 있는 행동의 범위를 정한다 | VERIFIED | security | "A session's permission mode sets which actions Claude can take without asking you first." | — |
| E245 | Manual 모드는 읽기 전용 권한으로 시작하고 수정·실행 때 묻는다 | VERIFIED | security | "Claude Code starts with read-only permissions." | **Manual** (CLI) |
| E246 | Manual 모드에서는 한 번만 허용할지 앞으로 계속 허용할지 고른다 | VERIFIED | security | "When it needs to edit files, run tests, or execute commands, it asks you first, and you choose whether to approve the action once or allow it from then on." | (CLI) |
| E247 | Auto 모드는 별도 분류기 모델이 사람 대신 행동을 검토하고 위험하다고 본 것을 막는다 | VERIFIED | security | "A separate classifier model reviews actions instead of you and blocks the ones it judges unsafe." | **Auto** (CLI) |
| E248 | 터미널과 VS Code 세션의 시작 권한 모드는 Auto다(버전·화면·설정에 따라 다를 수 있음) | VERIFIED | security | "Auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." | (CLI) |
| E249 | Accept Edits는 작업 폴더 안의 파일 수정과 `mkdir`·`rm`·`mv` 같은 일부 명령을 자동 승인한다 | VERIFIED | security | "Auto-approves file edits and a fixed set of filesystem Bash commands like `mkdir`, `touch`, `rm`, `mv`, `cp`, and `sed` for paths in the working directory." | **Accept Edits** (CLI) |
| E250 | 작업 폴더 경계는 권한 질문일 뿐이라, 승인한 Bash 명령은 내 계정이 쓸 수 있는 어디든 쓸 수 있다 | VERIFIED | security | "The boundary is a permission prompt, so a Bash command you approve can still write anywhere your user account can" | — |
| E251 | 제안된 코드와 명령을 승인 전에 검토할 책임은 사용자에게 있다 | VERIFIED | security | "You're responsible for reviewing proposed code and commands for safety before approval." | — |
| E252 | 프롬프트 인젝션(prompt injection)은 악성 텍스트를 끼워 넣어 AI의 지시를 뒤집으려는 공격이다 | VERIFIED | security | "Prompt injection is a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text." | — |
| E253 | `curl`·`wget` 같은 웹 가져오기 명령은 기본으로 자동 승인되지 않는다 | VERIFIED | security | "Commands that fetch content from the web such as `curl` and `wget` are not auto-approved by default." | — |
| E254 | 신뢰할 수 없는 내용을 다룰 때: 제안된 명령을 승인 전에 검토하기 | VERIFIED | security | "Review suggested commands before approval" | — |
| E255 | 신뢰할 수 없는 내용을 Claude에 곧바로 넘기지 않기 | VERIFIED | security | "Avoid piping untrusted content directly to Claude" | — |
| E256 | 중요한 파일의 변경은 직접 확인하기 | VERIFIED | security | "Verify proposed changes to critical files" | — |
| E257 | 외부 웹 서비스를 다룰 때는 가상 머신(VM)에서 스크립트와 도구 호출을 실행하기 | VERIFIED | security | "Use virtual machines (VMs) to run scripts and make tool calls, especially when interacting with external web services" | — |
| E258 | 수상한 동작은 `/feedback`으로 신고한다 | VERIFIED | security | "Report suspicious behavior with `/feedback`" | `/feedback` (CLI) |
| E259 | 어떤 시스템도 모든 공격에서 완전히 안전하지 않다 | VERIFIED | security | "While these protections significantly reduce risk, no system is completely" | — |
| E260 | 폴더를 처음 열면 신뢰(workspace trust) 대화상자가 뜬다 | VERIFIED | security | "In an interactive session, Claude Code shows the workspace trust dialog when you start it in a folder you haven't trusted." | workspace trust dialog (CLI) |
| E261 | API 키와 토큰은 macOS에서 가능하면 키체인에 저장된다 | VERIFIED | security | "API keys and tokens are stored in the macOS Keychain when available." | — |
| E262 | MCP 서버는 직접 만들거나 믿을 수 있는 제공자 것을 쓰라고 권한다 | VERIFIED | security | "We encourage either writing your own MCP servers or using MCP servers from providers that you trust." | — |
| E263 | Anthropic은 커넥터를 목록 기준으로 검토하지만 MCP 서버를 보안 감사하거나 관리하지는 않는다 | VERIFIED | security | "but does not security-audit or manage any MCP server." | — |
| E264 | 클라우드 세션에서 GitHub 자격 증명은 VM에 들어가지 않고 프록시가 서버에서 붙여 준다 | VERIFIED | security | "GitHub credentials are stored encrypted on Anthropic's servers and never enter the session VM." | — |
| E265 | 클라우드 세션의 GitHub 프록시는 브랜치 삭제와 브랜치 외 항목(태그 등) 푸시를 거부한다 | VERIFIED | security | "rejects branch deletions and pushes of anything other than a branch, such as a tag." | — |
| E266 | Remote Control에는 클라우드 VM도 샌드박스도 없다 | VERIFIED | security | "No cloud VMs or sandboxing are involved." | — |
| E267 | 민감한 코드에는 `/permissions`로 권한 설정을 주기적으로 점검한다 | VERIFIED | security | "Regularly audit your permission settings with `/permissions`" | `/permissions` (CLI) |
| E268 | 샌드박스는 운영체제가 Claude가 실행하는 셸 명령 주변에 두르는 경계다 | VERIFIED | sandboxing | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." | `/sandbox` (CLI) |
| E269 | 샌드박스는 셸 명령만 덮고, 파일 도구·MCP 서버·훅은 그 밖에서 실행된다 | VERIFIED | sandboxing | "The sandbox covers shell commands only." | — |
| E270 | 샌드박스는 macOS·Linux·WSL2에서 동작하고, 네이티브 Windows에서는 명령이 샌드박스 없이 실행된다 | VERIFIED | sandboxing | "On native Windows, Claude Code runs commands unsandboxed." | — |
| E271 | 샌드박스는 기본으로 꺼져 있고 `/sandbox`로 켠다 | VERIFIED | sandboxing | "The sandbox is off by default." | `/sandbox` (CLI) |
| E272 | 샌드박스 명령의 기본 쓰기 범위는 작업 폴더·임시 폴더·추가한 폴더이고 읽기는 `~/.ssh` 같은 자격 증명 파일을 포함한 컴퓨터 대부분이다 | VERIFIED | sandboxing | "Most of the machine, including credential files such as `~/.ssh` and `~/.aws/credentials`" | (CLI) |
| E273 | 자동 허용(auto-allow) 모드는 샌드박스 안에서 실행되는 명령을 묻지 않고 승인한다 | VERIFIED | sandboxing | "Claude Code approves a command automatically, with no prompt, when the command runs inside the sandbox." | **Mode** 탭 (CLI) |
| E274 | 일반 권한(regular permissions) 모드는 샌드박스 명령도 평소 권한 질문을 유지한다 | VERIFIED | sandboxing | "regular permissions keeps the regular permission prompts even when commands are sandboxed" | **Mode** 탭 (CLI) |
| E275 | 파일 읽기·쓰기 도구는 샌드박스가 아니라 권한 규칙을 따르므로 `denyRead` 설정이 Read 도구를 막지 못한다 | VERIFIED | sandboxing | "A `denyRead` entry doesn't stop the Read tool, and `allowedDomains` doesn't limit WebFetch" | — |
| E276 | 훅·로컬 MCP 서버 등 Claude Code가 띄우는 다른 프로세스는 내 전체 권한으로 실행된다 | VERIFIED | sandboxing | "run with your full access" | — |
| E277 | macOS 샌드박스는 기본 내장 Seatbelt를 쓰고, Linux·WSL2는 `bubblewrap`·`socat` 설치가 필요하다 | VERIFIED | sandboxing | "sandboxing uses the built-in Seatbelt framework" | — |

### 이 그룹 파일에서 확인되지 않은 항목

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| - | - | - | - | - | - |
| E278 | 데스크톱 앱에서 병렬 세션을 만드는 구체적 버튼·화면(세션 사이드바, 워크트리 옵션 위치)은 이 그룹 파일에 없다(worktrees는 별도 문서 "Run a session in its own worktree"를 가리킴) | UNVERIFIED | worktrees | — | — |
| E279 | 구독 플랜별 정확한 사용량 한도 수치(5시간 창·주간 한도 등)와 모델 요금표는 이 그룹 파일에 없다 | UNVERIFIED | costs | — | — |
| E280 | 클라우드 세션을 데스크톱 앱 Code 탭의 Cloud 선택·Open in 메뉴로 보내는 화면 절차는 desktop 문서 소관이라 이 그룹에서 확인하지 못했다 | UNVERIFIED | claude-code-on-the-web | — | **Cloud** · **Open in** (Desktop) |

## 가이드에 쓸 때 주의

1. **용어가 두 개다.** 클라우드 예약 작업은 예전 이름이 routines(루틴)다. 문서는 "scheduled tasks, formerly routines"로 쓰지만 계정에 따라 화면이 **Routines**·**New routine**, 주소가 `claude.ai/code/routines`, 명령이 `/routines`로 보인다(E106). 독자에게는 "예약 작업(클라우드)"로 쓰고 옛 이름을 괄호로 병기한다. 데스크톱 예약 작업·`/loop`는 이름이 같은 "scheduled"라서 세 가지를 반드시 구분해서 가르쳐야 한다.
2. **예약 3종 한 줄 비교(문서 표 요약).** 클라우드는 컴퓨터가 꺼져도 돌고 로컬 파일이 없으며(새로 복제) 최소 간격 1시간. 데스크톱은 앱이 열려 있고 컴퓨터가 깨어 있어야 하며 로컬 파일을 쓴다. `/loop`는 열린 세션 안에서만 돌고 7일 뒤 만료되며 최소 1분(표 값이라 인용 칸에는 못 넣음). 클라우드 작업의 실행 횟수 한도(예약 실행은 계정당 시간당 100회, Run now·API·재실행은 작업당 시간당 30회 등)도 표에만 있어 본문에 숫자를 쓸 때 원문 표를 다시 확인한다.
3. **클라우드 세션의 전제는 GitHub다.** GitHub를 연결하지 않으면 클라우드 세션을 시작할 수 없다(로컬 저장소 번들 예외, 이 경우 결과를 GitHub로 푸시 불가). 비공개 저장소는 Claude GitHub App 설치가 필요하고, Team·Enterprise는 Owner가 먼저 커넥터/Quick setup을 켜야 한다(E29, E30). 비개발자 독자에게는 "GitHub 계정이 없으면 클라우드는 건너뛰고 Remote Control 또는 로컬을 쓴다"가 현실적인 안내다.
4. **비용 장은 구독자 기준으로 다시 써야 한다.** `costs` 문서는 개발자·API 중심이라 "하루 13달러" 같은 평균(E158)은 기업 배포 수치다. 구독자에게는 달러 표시가 청구액이 아니라는 점(E159)과, 한도·사용량 크레딧·`/usage` 막대가 핵심이다. 빠른 모드(E212)와 Fable(E199)이 사용량 크레딧으로 청구될 수 있다는 것은 "생각보다 비싸질 수 있는 스위치"로 따로 경고한다.
5. **모델·버전 숫자는 빨리 낡는다.** Opus 5.5·Sonnet 5.5·Haiku 5.5, Fable 5.1 같은 이름과 effort 기본값(medium/high)은 확인일(2026-10-31) 기준이다. 본문에는 별칭(`opus`·`sonnet`·`haiku`·`fable`)과 "선택창에서 확인" 위주로 쓰고, 정확한 버전 숫자에는 확인 날짜를 붙인다.
6. **`/` 명령 중 상당수는 CLI 전용이다.** 이 그룹의 많은 화면(`/usage`, `/fast`, `/effort`, `/sandbox` 등)은 터미널 문서에 근거한다. 이 가이드는 데스크톱 앱 Code 탭에서 시작하므로, 데스크톱 앱에서 같은 이름의 메뉴가 있는지는 이 그룹 파일로 확인되지 않았다(E278~E280). 초반 장에서는 "터미널에서" 표시를 붙이거나 desktop 그룹 결과와 맞춰야 한다.
7. **데이터 문구는 계정 종류별로 갈라 쓴다.** 개인(Free·Pro·Max·Ultra)은 학습 허용 여부에 따라 보관 5년/30일, 상업용(Team·Enterprise·API)은 학습 안 함·표준 30일(E224~E232). "내 대화는 학습에 안 쓰인다"고 단정하지 말고 "설정을 확인하세요"로 쓴다. 학습 설정 위치는 claude.ai의 개인정보 설정 페이지다.
8. **보안 장 톤.** 프롬프트 인젝션은 "AI가 읽는 글에 숨은 명령"이라고 풀어 쓰고, 문서의 5가지 권고(E254~E258)를 체크리스트로 쓴다. "완전한 안전은 없다"(E259)를 반드시 넣는다. 샌드박스는 기본 꺼짐·셸 명령만 보호(E269~E271)라 "켜 두면 안전"이라고 과장하지 않는다. 파일 도구·MCP·훅은 샌드박스 밖이다(E275~E276).
9. **Remote Control ≠ 클라우드.** 둘 다 같은 claude.ai/code 화면을 쓰지만 Remote Control은 내 컴퓨터가 켜져 있어야 하고 대화 기록이 Anthropic 서버에도 동기화용으로 저장된다(E75, E76, E86). 모바일 앱은 "코드가 도는 곳"이 아니라 접속 창구다(E66).
10. **클라우드 Auto-fix는 내 계정 이름으로 답글을 단다**(E53). 비개발자에게는 "AI가 내 이름으로 남에게 글을 쓸 수 있다"는 점을 경고로 넣는다.

## 이 그룹에서 장으로 쓸 만한 구성

**8장. 여러 일 동시에 · 클라우드 · 예약**
- 8.1 같은 폴더에서 두 세션이 부딪치는 이유와 해법 — 워크트리를 "같은 프로젝트의 복제 작업대"로 비유(E1~E14). 초보자에게는 `--worktree` 한 줄과 "정리 질문에서 유지/삭제 고르기"까지만.
- 8.2 세션에 이름 붙이고 이어서 하기 — `claude -n`, `/rename`, `/resume`, `--continue`(E92~E102). 병렬 작업의 필수 습관으로 소개.
- 8.3 내 컴퓨터를 닫아도 도는 일: 클라우드 세션 — 무엇인지, 필요한 것(구독 플랜·GitHub), 시작 방법 3가지, 검토(Changes→Create PR), 한계(E18~E64).
- 8.4 폰으로 보기와 이어받기 — 모바일 앱 Code 탭, Remote Control과 클라우드의 차이를 표로(E65~E91).
- 8.5 반복 일을 맡기기: 예약 작업 3종 — 의사결정 표(컴퓨터 꺼져도 되나, 로컬 파일 필요한가, 세션 안 반복인가)와 각 종류의 한 가지 실습 예시(E106~E156).

**9장. 비용 · 데이터 · 안전**
- 9.1 사용량은 어디서 보나 — `/usage`, 구독 vs API 계산 차이, 사용량 크레딧(E157~E168).
- 9.2 아끼는 습관 7가지 — `/clear`, `/compact`, 작은 모델, 낮은 effort, 구체적 프롬프트, 일찍 멈추기, 쓰지 않는 도구 끄기(E169~E188). 긴 세션이 비싼 이유(캐시 만료)는 쉬운 비유로.
- 9.3 모델·생각 깊이·빠른 모드 고르기 — 별칭 표, effort 단계 표, `opusplan`, 빠른 모드는 "속도를 돈으로 사는 스위치"(E189~E223).
- 9.4 내 대화는 어디로 가나 — 계정 종류별 학습·보관 표, 로컬 저장 30일, `/feedback` 주의(E224~E243).
- 9.5 안전하게 쓰기 — 권한 모드 3가지, 프롬프트 인젝션, 체크리스트 5개, 샌드박스는 "한 단계 더 두꺼운 울타리" 정도로 요약(E244~E277).

# 부록 F


> 출처: code.claude.com/docs 원문(raw 폴더, 슬러그 = 파일명). 확인일 2026-10-31. 영어 인용은 파일에서 그대로 복사한 부분 문자열이며 기계 검증을 통과했다(198/198). 상태가 충돌인 항목은 없다(미묘한 차이는 아래 「가이드에 쓸 때 주의」에 적음).

## 1. 터미널 설치 (운영체제별)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F1 | macOS·Linux·WSL에서는 curl로 설치 스크립트를 받아 실행하는 한 줄 명령으로 설치한다. | VERIFIED | quickstart | "curl -fsSL https://claude.ai/install.sh \| bash" | `curl -fsSL https://claude.ai/install.sh \| bash` |
| F2 | Windows PowerShell에서는 irm 명령으로 설치한다. | VERIFIED | quickstart | "irm https://claude.ai/install.ps1 \| iex" | `irm https://claude.ai/install.ps1 \| iex` |
| F3 | Windows CMD에서는 install.cmd를 받아 실행한 뒤 지우는 한 줄 명령을 쓴다. | VERIFIED | quickstart | "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd" | `install.cmd` |
| F4 | 프롬프트에 PS C:\ 가 보이면 PowerShell, PS 없이 C:\ 이면 CMD이다. | VERIFIED | quickstart | "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." | — |
| F5 | 네이티브 설치는 탭 이름에 권장(Recommended)으로 표시되고 백그라운드에서 자동 업데이트된다. | VERIFIED | quickstart | "Native installations automatically update in the background to keep you on the latest version." | `Native Install (Recommended)` |
| F6 | 설치 명령은 내려받는 동안 진행 표시가 나오지 않는다. | VERIFIED | quickstart | "The install command shows no progress while it downloads Claude Code." | — |
| F7 | Homebrew로도 설치할 수 있으나 자동 업데이트가 되지 않는다. | VERIFIED | quickstart | "Homebrew installations do not auto-update." | `brew install --cask claude-code` |
| F8 | WinGet으로도 설치할 수 있으며 역시 자동 업데이트가 되지 않는다. | VERIFIED | quickstart | "WinGet installations do not auto-update." | `winget install Anthropic.ClaudeCode` |
| F9 | npm 전역 패키지로도 설치할 수 있다. | VERIFIED | setup | "You can also install Claude Code as a global npm package." | `npm install -g @anthropic-ai/claude-code` |
| F10 | npm 설치에 sudo를 쓰지 말라고 경고한다. | VERIFIED | setup | "Do NOT use `sudo npm install -g` as this can lead to permission issues and security risks." | — |
| F11 | 지원 운영체제에 macOS 13.0 이상이 포함된다. | VERIFIED | setup | "macOS 13.0+" | — |
| F12 | 하드웨어는 RAM 4GB 이상, x64 또는 ARM64 프로세서가 필요하다. | VERIFIED | setup | "**Hardware**: 4 GB+ RAM, x64 or ARM64 processor" | — |
| F13 | 인터넷 연결이 필수이다. | VERIFIED | setup | "**Network**: internet connection required." | — |
| F14 | 지원 셸은 Bash, Zsh, PowerShell, CMD이다. | VERIFIED | setup | "**Shell**: Bash, Zsh, PowerShell, or CMD." | — |
| F15 | 네이티브 Windows에서 Git for Windows가 없으면 셸 도구로 PowerShell을 쓴다. | VERIFIED | quickstart | "If Git for Windows is not installed, Claude Code uses PowerShell as the shell tool instead." | — |
| F16 | WSL 환경은 Git for Windows가 필요 없다. | VERIFIED | quickstart | "WSL setups do not need Git for Windows." | — |
| F17 | 네이티브 Windows 설치는 관리자 권한으로 실행할 필요가 없다. | VERIFIED | setup | "You do not need to run as Administrator." | — |
| F18 | WSL에서는 WSL 터미널 안에서 설치하고 실행하며 PowerShell이나 CMD에서 하지 않는다. | VERIFIED | setup | "You install and launch `claude` inside the WSL terminal, not from PowerShell or CMD." | — |
| F19 | 터미널을 한 번도 안 써 본 사람은 터미널 가이드부터 보라고 안내한다. | VERIFIED | quickstart | "**Never used a terminal before**: start with the" | — |
| F20 | 터미널 없이 쓰고 싶다면 데스크톱 앱이 대안이라고 안내한다. | VERIFIED | setup | "Prefer a graphical interface?" | — |

## 2. 설치 확인과 업데이트

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F21 | 설치가 끝나면 새 터미널 창을 열고 claude --version으로 버전 번호가 나오는지 확인한다. | VERIFIED | quickstart | "When the installer finishes, open a new terminal window and run `claude --version`." | `claude --version` |
| F22 | 정상이면 버전 번호 뒤에 (Claude Code)가 붙어 출력된다. | VERIFIED | quickstart | "The command prints a version number followed by `(Claude Code)`." | — |
| F23 | claude doctor는 세션을 시작하지 않고 설치 상태를 읽기 전용으로 진단한다. | VERIFIED | setup | "`claude doctor` prints read-only installation and settings diagnostics without starting a session, including install health, settings-file validation errors, and any warnings with suggested fixes." | `claude doctor` |
| F24 | claude update를 실행하면 업데이트를 바로 적용한다. | VERIFIED | setup | "To apply an update immediately without waiting for the next background check, run:" | `claude update` |
| F25 | 백그라운드로 받은 업데이트는 다음에 Claude Code를 시작할 때 적용된다. | VERIFIED | setup | "Updates download and install in the background, then take effect the next time you start Claude Code." | — |
| F26 | 업데이트 채널 중 stable은 보통 약 1주 전 버전이다. | VERIFIED | setup | "`"stable"`: use a version that is typically about one week old, skipping releases with major regressions" | `/config → Auto-update channel` |

## 3. 첫 실행과 로그인

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F27 | 프로젝트 폴더로 이동해 claude를 입력하면 세션이 시작된다. | VERIFIED | quickstart | "Open your terminal in any project directory and start Claude Code:" | `claude` |
| F28 | 처음 실행하면 로그인 안내가 나온다. | VERIFIED | quickstart | "Claude Code prompts you to log in on first use." | — |
| F29 | Claude Code는 Pro, Max, Ultra, Team, Enterprise 또는 Console 계정이 필요하며 무료 claude.ai 플랜에는 포함되지 않는다. | VERIFIED | setup | "The free claude.ai plan does not include Claude Code access." | — |
| F30 | 한 번 로그인하면 자격 증명이 저장되어 다시 로그인하지 않아도 된다. | VERIFIED | quickstart | "Once logged in, your credentials are stored and you won't need to log in again." | — |
| F31 | 실행 중에 /login을 입력하면 계정을 바꾸거나 다시 인증할 수 있다. | VERIFIED | quickstart | "To switch accounts later or re-authenticate, type `/login` inside the running session." | `/login` |
| F32 | Console 계정으로 처음 로그인하면 비용 추적용 "Claude Code" 워크스페이스가 자동 생성된다. | VERIFIED | quickstart | "On first login, a "Claude Code" workspace is automatically created in the Console for centralized cost tracking." | — |
| F33 | ANTHROPIC_API_KEY 환경 변수가 있고 사용을 승인하면 로그인 안내를 건너뛴다. | VERIFIED | quickstart | "If you've set the `ANTHROPIC_API_KEY` environment variable and you approve the key when Claude Code asks whether to use it, Claude Code skips the login prompt." | — |
| F34 | 첫 화면에는 버전, 현재 모델, 작업 디렉터리가 프롬프트 위에 표시된다. | VERIFIED | quickstart | "The Claude Code prompt appears with the version, current model, and working directory shown above it." | — |

## 4. 기본 사용법 (프롬프트 · @ · ! · Esc · Shift+Tab)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F35 | 첫 질문 예시로 "what does this project do?"가 제시된다. | VERIFIED | quickstart | "what does this project do?" | — |
| F36 | Claude Code는 필요할 때 프로젝트 파일을 읽으므로 맥락을 직접 붙일 필요가 없다. | VERIFIED | quickstart | "Claude Code reads your project files as needed." | — |
| F37 | 변경 전에 허락을 물으면 Yes를 골라 승인한다. | VERIFIED | quickstart | "If it asks before making the change, select **Yes** to approve." | `Yes` |
| F38 | Shift+Tab을 누르면 언제든 세션의 권한 모드를 바꿀 수 있다. | VERIFIED | quickstart | "Press `Shift+Tab` at any time to switch the permission mode of the session you're in." | `Shift+Tab` |
| F39 | Shift+Tab은 default(표시명 Manual), acceptEdits, plan 순으로 돌고 가능하면 bypassPermissions와 auto까지 돈다. | VERIFIED | interactive-mode | "Cycle through `default` (labeled Manual in the mode indicator), `acceptEdits`, `plan`, and, when available, `bypassPermissions` and then `auto`." | `Shift+Tab` |
| F40 | 요청은 구체적으로 쓰라는 팁이 있다 ("fix the bug"보다 증상을 구체적으로). | VERIFIED | quickstart | "fix the login bug where users see a blank screen after entering wrong credentials" | — |
| F41 | 복잡한 일은 단계로 나눠 지시하라고 권한다. | VERIFIED | quickstart | "Break complex tasks into steps:" | — |
| F42 | 바꾸기 전에 Claude가 코드를 먼저 파악하게 하라는 팁이 있다. | VERIFIED | quickstart | "Before making changes, let Claude understand your code:" | — |
| F43 | 프롬프트에서 @를 치면 파일 경로 자동 완성이 시작된다. | VERIFIED | interactive-mode | "Trigger file path autocomplete." | `@` |
| F44 | 프롬프트 맨 앞에 !를 붙이면 Claude를 거치지 않고 셸 명령을 직접 실행한다. | VERIFIED | interactive-mode | "Run shell commands directly without going through Claude by prefixing your input with `!`:" | `!` |
| F45 | 셸 모드의 명령과 출력은 대화 맥락에 추가된다. | VERIFIED | interactive-mode | "Adds the command and its output to the conversation context" | — |
| F46 | 셸 모드는 빈 프롬프트에서 Escape, Backspace, Ctrl+U로 빠져나간다. | VERIFIED | interactive-mode | "Exit with `Escape`, `Backspace`, or `Ctrl+U` on an empty prompt" | — |
| F47 | 셸 모드 출력에 대한 Claude의 자동 응답도 일반 프롬프트와 같은 비용이 든다. | VERIFIED | interactive-mode | "The response costs the same as sending a normal prompt." | `!` |
| F48 | Esc는 Claude의 응답이나 도구 호출을 중간에 멈추며 지금까지의 작업은 유지된다. | VERIFIED | interactive-mode | "Stop the current response or tool call mid-turn so you can redirect. Claude keeps the work done so far." | `Esc` |
| F49 | Ctrl+C는 실행 중인 작업을 중단하고, 실행 중인 게 없으면 첫 번째는 입력을 지우고 두 번째는 종료한다. | VERIFIED | interactive-mode | "Interrupts a running operation. If nothing is running, the first press clears the prompt input and a second press exits Claude Code." | `Ctrl+C` |
| F50 | 입력창에 글이 있을 때 Esc를 두 번 누르면 입력이 지워지고 초안은 기록에 저장된다. | VERIFIED | interactive-mode | "When the prompt input contains text, double `Esc` clears it and saves the draft to history so `Up` recalls it." | `Esc + Esc` |
| F51 | 입력창이 비어 있을 때 Esc를 두 번 누르면 되감기(rewind) 메뉴가 열린다. | VERIFIED | interactive-mode | "When the input is empty, double `Esc` opens the" | `Esc + Esc` |
| F52 | Claude가 일하는 동안 Enter로 보낸 메시지는 끼어들지 않고 대기열에 쌓인다. | VERIFIED | interactive-mode | "Claude Code queues the message instead of interrupting the turn, and lists the queued entries in the conversation until it sends them." | `Enter` |
| F53 | 여러 줄 입력은 \ 뒤 Enter가 모든 터미널에서 통한다. | VERIFIED | interactive-mode | "Works in all terminals" | `\ + Enter` |
| F54 | Ctrl+J도 설정 없이 어느 터미널에서나 줄바꿈이 된다. | VERIFIED | interactive-mode | "Works in any terminal without configuration" | `Ctrl+J` |
| F55 | Ctrl+V로 클립보드의 이미지를 붙여 넣을 수 있다. | VERIFIED | interactive-mode | "Paste image from clipboard" | `Ctrl+V` |
| F56 | 빈 입력창에서 ?를 누르면 단축키 도움말이 열린다. | VERIFIED | interactive-mode | "Toggle the shortcut help panel" | `?` |
| F57 | Ctrl+O는 도구 사용과 실행 내용을 자세히 보여 주는 대화 기록(transcript) 보기를 켜고 끈다. | VERIFIED | interactive-mode | "Shows detailed tool usage and execution, with a timestamp and the model used on each assistant message." | `Ctrl+O` |
| F58 | Ctrl+R로 이전에 입력한 명령 기록을 검색한다. | VERIFIED | interactive-mode | "Search through previous commands interactively" | `Ctrl+R` |
| F59 | Ctrl+D는 첫 번째 누름에 확인 힌트가 뜨고 800ms 안에 한 번 더 누르면 종료한다. | VERIFIED | interactive-mode | "The first press shows a confirmation hint and a second press within 800ms exits." | `Ctrl+D` |
| F60 | /btw로 대화 기록에 남지 않는 곁가지 질문을 할 수 있다. | VERIFIED | interactive-mode | "Use `/btw` to ask a question about your current work without adding to the conversation history." | `/btw` |
| F61 | /btw 답변은 이미 대화에 있는 내용만으로 하며 파일 읽기·명령 실행은 못 한다. | VERIFIED | interactive-mode | "Claude can't read files, run commands, or search when answering a side question." | `/btw` |

## 5. 초보자용 슬래시 명령

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F62 | 슬래시 명령은 메시지의 맨 앞에서만 인식된다. | VERIFIED | commands | "A command is only recognized at the start of your message." | — |
| F63 | / 를 입력하면 쓸 수 있는 명령 목록이 보이고 글자를 더 치면 걸러진다. | VERIFIED | commands | "Type `/` to see the commands available to you, or type `/` followed by letters to filter." | `/` |
| F64 | /help는 도움말과 사용 가능한 명령을 보여 준다. | VERIFIED | commands | "Show help and available commands" | `/help` |
| F65 | /clear는 빈 맥락으로 새 대화를 시작한다. | VERIFIED | commands | "Start a new conversation with empty context." | `/clear` |
| F66 | /clear 뒤에도 이전 대화는 /resume으로 다시 열 수 있다. | VERIFIED | commands | "Resume the previous conversation with `/resume`" | `/resume` |
| F67 | 대화를 이어 가며 맥락만 줄이려면 /clear 대신 /compact를 쓴다. | VERIFIED | commands | "To free up context while continuing the same conversation, use `/compact` instead." | `/compact` |
| F68 | /compact는 지금까지의 대화를 요약해 맥락 공간을 확보한다. | VERIFIED | commands | "Free up context by summarizing the conversation so far." | `/compact` |
| F69 | /init은 프로젝트용 CLAUDE.md 안내 파일을 만든다. | VERIFIED | commands | "Initialize project with a `CLAUDE.md` guide." | `/init` |
| F70 | /model은 AI 모델을 바꾸고 새 세션의 기본값으로 저장한다. | VERIFIED | commands | "Switch the AI model and save it as your default for new sessions." | `/model` |
| F71 | /usage는 세션 비용, 플랜 사용 한도, 활동 통계를 보여 준다. | VERIFIED | commands | "Show session cost, plan usage limits, and activity stats." | `/usage` |
| F72 | /cost는 /usage의 별칭이다. | VERIFIED | commands | "Alias for `/usage`" | `/cost` |
| F73 | /resume은 ID나 이름으로 대화를 이어 가거나 세션 선택 화면을 연다. | VERIFIED | commands | "Resume a conversation by ID or name, or open the session picker." | `/resume` |
| F74 | /rewind는 대화나 코드를 이전 지점으로 되돌린다. | VERIFIED | commands | "Rewind the conversation and/or code to a previous point, or summarize from a selected message." | `/rewind` |
| F75 | /config는 값 지정 형태로 설정을 화면 없이 바로 바꿀 수도 있다. | VERIFIED | commands | "Pass one or more `key=value` pairs to set a setting directly without opening the interface" | `/config` |
| F76 | /doctor는 설치·설정 문제를 진단하고 확인 후 고칠 해결책을 제안한다. | VERIFIED | commands | "Run a setup checkup that diagnoses installation, settings, extension, and `CLAUDE.md` problems and proposes fixes that Claude applies after you confirm." | `/doctor` |
| F77 | /exit는 CLI를 종료하며 별칭은 /quit이다. | VERIFIED | commands | "Exit the CLI." | `/exit` |
| F78 | /login과 /logout은 Anthropic 계정 로그인과 로그아웃이다. | VERIFIED | commands | "Sign out from your Anthropic account" | `/logout` |
| F79 | /status는 버전, 모델, 계정, 연결 상태를 보여 준다. | VERIFIED | commands | "showing version, model, account, and connectivity" | `/status` |
| F80 | /diff는 Claude가 한 수정을 포함해 작업 트리의 변경을 검토하게 해 준다. | VERIFIED | commands | "Review the changes in your working tree, including the edits Claude has made so far." | `/diff` |
| F81 | /plan은 큰 변경 전에 계획 모드로 전환한다. | VERIFIED | commands | "`/plan` switches into plan mode before a large change." | `/plan` |
| F82 | /context는 맥락 창을 무엇이 채우고 있는지 보여 준다. | VERIFIED | commands | "When the conversation gets long, `/context` shows what's filling the window and `/compact` summarizes it to free space." | `/context` |
| F83 | /copy는 마지막 응답을 클립보드에 복사한다. | VERIFIED | commands | "Copy the last assistant response to clipboard." | `/copy` |
| F84 | /permissions는 도구 권한의 허용·확인·거부 규칙을 관리한다. | VERIFIED | commands | "Manage allow, ask, and deny rules for tool permissions." | `/permissions` |
| F85 | /theme은 색상 테마를 바꾼다. | VERIFIED | commands | "Change the color theme." | `/theme` |
| F86 | /rename은 현재 세션 이름을 바꾼다. | VERIFIED | commands | "Rename the current session and show the name on the prompt bar." | `/rename` |
| F87 | /feedback은 Claude Code 제품 피드백을 보낸다. | VERIFIED | commands | "Send product feedback about Claude Code." | `/feedback` |
| F88 | Claude가 응답하는 동안 보낸 명령은 대기열에 쌓였다가 현재 턴이 끝나면 실행된다. | VERIFIED | commands | "If you send a command while Claude is responding, Claude Code queues it and runs it after the current turn finishes." | — |

## 6. 음성 받아쓰기

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F89 | CLI에서 말한 내용이 입력창에 실시간으로 받아 적히며 음성과 타이핑을 섞을 수 있다. | VERIFIED | voice-dictation | "Your speech is transcribed live into the prompt input, so you can mix voice and typing in the same message." | — |
| F90 | 기본은 Space를 누르고 있는 동안 녹음하는 hold 모드이다. | VERIFIED | voice-dictation | "Hold mode is push-to-talk: recording runs while you hold the key and stops when you release it. This is the default mode." | `/voice` |
| F91 | /voice tap은 한 번 누르면 녹음, 다시 누르면 전송하는 모드이다. | VERIFIED | voice-dictation | "Tap mode toggles recording with a single keypress: tap once to start, speak, then tap again to send the prompt." | `/voice tap` |
| F92 | 녹음 소리는 Anthropic 서버로 보내 변환되며 로컬에서 처리하지 않는다. | VERIFIED | voice-dictation | "Voice dictation streams your recorded audio to Anthropic's servers for transcription." | — |
| F93 | claude.ai 계정 로그인이 필요하며 API 키·Bedrock 등에서는 쓸 수 없다. | VERIFIED | voice-dictation | "**A Claude.ai account**: the speech-to-text service is only available when you authenticate with one" | — |
| F94 | 로컬 마이크가 필요하며 클라우드·SSH 세션에서는 작동하지 않는다. | VERIFIED | voice-dictation | "**A local microphone**: voice dictation does not work in" | — |
| F95 | 받아쓰기는 Claude 메시지나 토큰을 쓰지 않고 /usage 한도에도 포함되지 않는다. | VERIFIED | voice-dictation | "Transcription does not consume Claude messages or tokens and does not count toward the limits shown in `/usage`." | — |
| F96 | 녹음 중 Esc 또는 Ctrl+C를 누르면 받아쓰기를 취소한다. | VERIFIED | voice-dictation | "Press `Esc` or `Ctrl+C` to cancel a dictation instead of finalizing it." | `Esc` |
| F97 | 받아쓰기 언어는 language 설정을 따르며 비어 있으면 영어이다. | VERIFIED | voice-dictation | "If that setting is empty, dictation defaults to English." | `/config` |
| F98 | 지원 언어 표에 Korean(ko)이 올라 있다. | VERIFIED | voice-dictation | "\| Korean \| `ko` \|" | — |
| F99 | macOS에서는 시스템 설정의 개인정보 보호 및 보안 > 마이크에서 터미널 앱을 켜야 한다. | VERIFIED | voice-dictation | "On macOS, go to System Settings → Privacy & Security → Microphone and enable your terminal app, then run `/voice` again." | — |

## 7. VS Code 확장 (개요)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F100 | VS Code 확장은 Claude Code를 IDE 안에 통합한 그래픽 인터페이스이며 VS Code에서 쓰는 권장 방식이다. | VERIFIED | vs-code | "The VS Code extension provides a native graphical interface for Claude Code, integrated directly into your IDE. This is the recommended way to use Claude Code in VS Code." | — |
| F101 | VS Code 1.94.0 이상이 필요하다. | VERIFIED | vs-code | "VS Code 1.94.0 or later" | — |
| F102 | 확장 보기에서 "Claude Code"를 검색해 Install을 누르면 설치된다. | VERIFIED | vs-code | "search for "Claude Code", and click **Install**." | `Install` |
| F103 | 확장은 채팅 패널용 CLI 사본을 내장한다. | VERIFIED | vs-code | "The extension bundles its own copy of the CLI (command-line interface) for the chat panel." | — |
| F104 | 설치 후 확장이 안 보이면 VS Code를 재시작하거나 Developer: Reload Window를 실행한다. | VERIFIED | vs-code | "If the extension doesn't appear after installation, restart VS Code or run "Developer: Reload Window" from the Command Palette." | `Developer: Reload Window` |
| F105 | 에디터 도구 모음의 Spark 아이콘은 파일이 열려 있을 때만 보인다. | VERIFIED | vs-code | "The icon only appears when you have a file open." | `Spark icon` |
| F106 | 활동 표시줄의 Spark 아이콘은 항상 보이며 세션 목록을 연다. | VERIFIED | vs-code | "This icon is always visible in the Activity Bar." | `Spark icon` |
| F107 | 확장에서 계획을 검토·수정한 뒤 수락할 수 있다. | VERIFIED | vs-code | "Review and edit Claude's plans before accepting them" | — |

## 8. Chrome 연동 (Claude in Chrome)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F108 | Claude는 새 탭을 열고 브라우저의 로그인 상태를 공유해 이미 로그인한 사이트에 접근할 수 있다. | VERIFIED | chrome | "Claude opens new tabs for browser tasks and shares your browser's login state, so it can access any site you're already signed into." | — |
| F109 | 브라우저 동작은 눈에 보이는 Chrome 창에서 실시간으로 실행된다. | VERIFIED | chrome | "Browser actions run in a visible Chrome window in real time." | — |
| F110 | 로그인 페이지나 CAPTCHA를 만나면 멈추고 사용자에게 직접 처리해 달라고 요청한다. | VERIFIED | chrome | "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." | — |
| F111 | Chrome 연동은 WSL에서는 지원되지 않는다. | VERIFIED | chrome | "Chrome integration isn't supported in Windows Subsystem for Linux (WSL)." | — |
| F112 | 직접 Anthropic 요금제(Pro, Max, Ultra, Team, Enterprise)가 필요하다. | VERIFIED | chrome | "A direct Anthropic plan (Pro, Max, Ultra, Team, or Enterprise)" | — |
| F113 | Bedrock 등 서드파티 제공자만 쓰면 이 기능을 쓸 수 없다. | VERIFIED | chrome | "Chrome integration is not available through third-party providers like Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry." | — |
| F114 | CLI에서는 claude --chrome으로 Chrome을 켠 채 시작한다. | VERIFIED | chrome | "Start Claude Code with the `--chrome` flag:" | `claude --chrome` |
| F115 | /chrome으로 연결 상태 확인, 권한 관리, 확장 재연결을 할 수 있다. | VERIFIED | chrome | "Run `/chrome` at any time to check the connection status, manage permissions, reconnect the extension, or choose which connected browser to use." | `/chrome` |
| F116 | 사이트별 권한은 Chrome 확장 설정에서 관리한다. | VERIFIED | chrome | "Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on." | — |
| F117 | Chrome을 기본으로 켜 두면 맥락 사용량이 늘어난다. | VERIFIED | chrome | "Enabling Chrome by default increases context usage since the browser tools and their instructions are always loaded." | `Enabled by default` |
| F118 | 확장이 감지되지 않으면 /chrome에서 Reconnect extension을 고른다. | VERIFIED | chrome | "Run `/chrome` and select "Reconnect extension" to re-establish the connection" | `Reconnect extension` |
| F119 | 브라우저 명령이 멈추면 경고창이 페이지를 막고 있는지 먼저 본다. | VERIFIED | chrome | "JavaScript dialogs block browser events and prevent Claude from receiving commands." | — |
| F120 | 체크아웃한 저장소가 Claude를 사용자의 브라우저에 연결하면 안 되므로 프로젝트 설정으로는 Chrome이 켜지지 않는다. | VERIFIED | chrome | "a repository you check out must not be able to connect Claude to your browser." | — |

## 9. 컴퓨터 사용 (Computer use)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F121 | CLI의 computer use는 macOS 연구 미리보기이며 Pro, Max, Ultra가 필요하고 Team·Enterprise에서는 쓸 수 없다. | VERIFIED | computer-use | "Computer use is a research preview on macOS that requires a Pro, Max, or Ultra plan. It is not available on Team or Enterprise plans." | — |
| F122 | Claude가 앱을 열고 화면을 제어해 사용자처럼 컴퓨터를 다룬다. | VERIFIED | computer-use | "Computer use lets Claude open apps, control your screen, and work on your machine the way you would." | — |
| F123 | computer use는 가장 넓고 느린 수단이라 Claude는 더 정확한 도구를 먼저 쓴다. | VERIFIED | computer-use | "Computer use is the broadest and slowest, so Claude tries the most precise tool first:" | — |
| F124 | 기본은 꺼져 있고 /mcp에서 computer-use 서버를 골라 Enable로 켠다. | VERIFIED | computer-use | "Computer use is available as a built-in MCP server called `computer-use`. It's off by default until you enable it." | `/mcp → computer-use → Enable` |
| F125 | 처음 쓸 때 macOS 화면 기록(Screen Recording) 권한을 허용해야 하며 손쉬운 사용(Accessibility)도 필요하다. | VERIFIED | computer-use | "**Screen Recording**: lets Claude see what's on your screen" | `Accessibility / Screen Recording` |
| F126 | 앱마다 세션 단위로 Allow for this session 또는 Deny를 고른다. | VERIFIED | computer-use | "Choose **Allow for this session** or **Deny**." | `Allow for this session` |
| F127 | 시스템 설정 앱은 시스템 설정을 바꿀 수 있다는 경고가 붙는다. | VERIFIED | computer-use | "\| Can change system settings \| System Settings \|" | — |
| F128 | 한 번에 한 세션만 컴퓨터를 쓸 수 있다. | VERIFIED | computer-use | "Only one session at a time can use your computer." | — |
| F129 | 작업 중에는 승인한 앱만 남기고 다른 보이는 앱이 숨겨진다. | VERIFIED | computer-use | "When Claude starts controlling your screen, other visible apps are hidden so Claude interacts with only the approved apps." | — |
| F130 | Esc를 누르면 어디서든 현재 동작이 즉시 중단되고 터미널에서는 Ctrl+C로도 멈출 수 있다. | VERIFIED | computer-use | "Press `Esc` anywhere to abort the current action immediately, or press `Ctrl+C` in the terminal." | `Esc` |
| F131 | computer use는 실제 데스크톱에서 승인한 앱에 접근한다고 경고한다. | VERIFIED | computer-use | "computer use runs on your actual desktop with access to the apps you approve." | — |
| F132 | 화면 속 콘텐츠를 통한 프롬프트 인젝션 가능성은 Claude가 검사해 표시하지만 신뢰 경계가 다르다고 안내한다. | VERIFIED | computer-use | "Claude checks each action and flags potential prompt injection from on-screen content, but the trust boundary is different." | — |

## 10. 설치 · 로그인 문제 해결

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F133 | 설치 오류는 Find your error 표에서 화면에 보이는 메시지와 맞는 항목을 찾는다. | VERIFIED | troubleshoot-install | "Match the error message or symptom you're seeing to a fix:" | `Find your error` |
| F134 | claude를 찾지 못한다는 오류는 설치 폴더가 아직 PATH에 없다는 뜻이다. | VERIFIED | quickstart | "If your shell says `claude` isn't found or isn't recognized, the install directory isn't on your PATH yet:" | `command not found: claude` |
| F135 | PATH는 셸이 프로그램을 찾는 폴더 목록이며 claude는 ~/.local/bin/claude(Windows는 %USERPROFILE%\.local\bin\claude.exe)에 놓인다. | VERIFIED | troubleshoot-install | "Your shell searches for programs in directories listed in PATH, and the installer places `claude` at `~/.local/bin/claude` on macOS/Linux or `%USERPROFILE%\.local\bin\claude.exe` on Windows." | — |
| F136 | macOS Zsh에서는 PATH 줄을 ~/.zshrc에 추가한 뒤 source로 적용한다. | VERIFIED | troubleshoot-install | "echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc" | `source ~/.zshrc` |
| F137 | 이미 열려 있던 터미널 창은 옛 PATH를 유지하므로 새 창을 열어야 한다. | VERIFIED | troubleshoot-install | "a window that was already open keeps its old PATH, and a terminal inside an editor takes its PATH from the editor." | — |
| F138 | PATH 줄을 추가하다 permission denied가 나오면 파일에 쓸 권한이 없어 아무것도 저장되지 않은 것이다. | VERIFIED | troubleshoot-install | "your user can't write to that file and nothing was saved." | `permission denied` |
| F139 | VS Code 확장만 설치했다면 ~/.local/bin/claude가 없다. | VERIFIED | troubleshoot-install | "If you have only installed the extension, `~/.local/bin/claude` will not exist." | — |
| F140 | PowerShell에서 CMD 명령을 쓰면 && 관련 오류가 난다. | VERIFIED | quickstart | "If you see `The token '&&' is not a valid statement separator`, you're in PowerShell, not CMD." | — |
| F141 | 설치 스크립트가 엉뚱한 응답(HTML)을 받으면 syntax error near unexpected token '<'가 난다. | VERIFIED | quickstart | "If the install command fails with `syntax error near unexpected token '<'`, a `403`, or any other error" | `syntax error near unexpected token '<'` |
| F142 | 설치 서버 접속은 첫 줄이 200이면 정상이다. | VERIFIED | troubleshoot-install | "You reached the server if the first line shows a `200` status." | — |
| F143 | 회사 프록시 뒤에서는 HTTPS_PROXY와 HTTP_PROXY를 설정한 뒤 설치한다. | VERIFIED | troubleshoot-install | "If you're behind a corporate proxy, set `HTTPS_PROXY` and `HTTP_PROXY` to your proxy's address before installing." | — |
| F144 | "App unavailable in region"은 해당 국가에서 Claude Code를 쓸 수 없다는 뜻이다. | VERIFIED | troubleshoot-install | "Claude Code is not available in your country." | `App unavailable in region` |
| F145 | 로그인이 꼬이면 /logout, 종료, claude 재시작 후 다시 인증하면 대부분 해결된다. | VERIFIED | troubleshoot-install | "When login fails and the cause isn't clear, a clean re-authentication resolves most cases:" | `/logout` |
| F146 | 브라우저가 자동으로 안 열리면 c를 눌러 로그인 URL을 복사해 직접 붙여 넣는다. | VERIFIED | troubleshoot-install | "If the browser doesn't open automatically during login, press `c` to copy the OAuth URL to your clipboard, then paste it into a browser manually." | `c` |
| F147 | OAuth error: Invalid code는 로그인 코드가 만료되었거나 복사 중 잘렸다는 뜻이다. | VERIFIED | troubleshoot-install | "the login code expired or was truncated during copy-paste." | `OAuth error: Invalid code` |
| F148 | 로그인 직후 403이 나오면 구독 활성 여부, Console 역할, 프록시를 확인한다. | VERIFIED | troubleshoot-install | "If you see `API Error: 403 Request not allowed` after logging in:" | `API Error: 403 Request not allowed` |
| F149 | 구독이 있는데 organization has been disabled가 나오면 환경 변수 ANTHROPIC_API_KEY가 구독을 덮어쓴 경우다. | VERIFIED | troubleshoot-install | "an `ANTHROPIC_API_KEY` environment variable is overriding your subscription." | `This organization has been disabled` |
| F150 | 어떤 인증 방식이 활성인지는 세션 안에서 /status로 확인한다. | VERIFIED | troubleshoot-install | "Run `/status` inside Claude Code to confirm which authentication method is active." | `/status` |
| F151 | Not logged in 메시지가 보이면 /login으로 구독 또는 Console 계정에 로그인한다. | VERIFIED | errors | "Run `/login` to authenticate with your Claude subscription or Console account" | `Not logged in · Please run /login` |
| F152 | Login expired 메시지는 로그인 없이 재시도하면 매번 같은 메시지가 나온다. | VERIFIED | errors | "Retrying without signing in shows the same message on every request." | `Login expired · Please run /login` |
| F153 | 로그인을 자주 요구하면 시스템 시계가 정확한지 확인하라고 안내한다. | VERIFIED | troubleshoot-install | "If this happens frequently, check that your system clock is accurate, as token validation depends on correct timestamps." | — |
| F154 | 원격·WSL2 환경에서는 로그인 URL을 로컬 브라우저로 열고 받은 코드를 터미널의 Paste code here 칸에 붙여 넣는다. | VERIFIED | troubleshoot-install | "Paste that code into the terminal at the prompt that begins `Paste code here`." | — |
| F155 | claude --version은 되는데 다른 문제가 있으면 claude doctor를 돌리라고 안내한다. | VERIFIED | troubleshoot-install | "If `claude --version` works but something else is wrong, run `claude doctor` for an automated diagnostic report" | `claude doctor` |

## 11. 실행 중 겪는 일반 문제

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F156 | 원인을 모르겠으면 세션 안에서 /doctor로 설치·설정·확장·컨텍스트를 자동 점검한다. | VERIFIED | troubleshooting | "If you're not sure which applies, run `/doctor` inside Claude Code for an automated check of your installation, settings, extensions, and context usage; it proposes fixes it can apply after you confirm." | `/doctor` |
| F157 | claude가 아예 시작되지 않으면 셸에서 claude doctor를 실행한다. | VERIFIED | troubleshooting | "If `claude` won't start at all, run `claude doctor` from your shell instead." | `claude doctor` |
| F158 | 느려지면 /compact를 자주 써서 맥락 크기를 줄인다. | VERIFIED | troubleshooting | "Use `/compact` regularly to reduce context size." | `/compact` |
| F159 | 멈춘 것처럼 보이면 Ctrl+C로 취소를 시도한다. | VERIFIED | troubleshooting | "Press Ctrl+C to attempt to cancel the current operation" | `Ctrl+C` |
| F160 | 재시작해도 대화는 사라지지 않으며 같은 폴더에서 claude --resume으로 이어 간다. | VERIFIED | troubleshooting | "Restarting doesn't lose your conversation. Run `claude --resume` in the same directory to pick the session back up." | `claude --resume` |
| F161 | 화면이 깨지거나 비어 보이면 Ctrl+L로 화면을 다시 그린다. | VERIFIED | interactive-mode | "Use this to recover if the display becomes garbled or partially blank." | `Ctrl+L` |
| F162 | 편집기 통합 터미널에서 글자가 깨지면 /terminal-setup으로 GPU 가속을 끈다. | VERIFIED | troubleshooting | "Run `/terminal-setup` inside Claude Code to set `terminal.integrated.gpuAcceleration` to `"off"`" | `/terminal-setup` |
| F163 | Autocompact is thrashing은 큰 출력이 맥락을 계속 채운다는 뜻이다. | VERIFIED | troubleshooting | "automatic compaction succeeded but a file or tool output immediately refilled the context window several times in a row." | `Autocompact is thrashing` |
| F164 | "Prompt is too long"은 대화와 첨부 파일이 모델의 맥락 창을 넘었다는 뜻이다. | VERIFIED | errors | "The conversation plus attached files exceeds the model's context window." | `Prompt is too long` |
| F165 | "Context limit reached" 메시지는 /compact나 /clear로 이어 가라는 안내이다. | VERIFIED | errors | "Context limit reached · /compact or /clear to continue" | `Context limit reached` |
| F166 | 사용 한도에 걸리면 표시된 초기화 시각까지 요청이 막힌다. | VERIFIED | errors | "Claude Code blocks further requests until the reset time shown in the message." | `You've hit your session limit` |
| F167 | 세션·주간 한도는 모든 모델이 공유하므로 모델을 바꿔도 풀리지 않는다. | VERIFIED | errors | "The session and weekly limits are shared across all models, so switching models doesn't restore access." | — |
| F168 | 한도와 초기화 시각은 /usage로 본다. | VERIFIED | errors | "Run `/usage` to see your plan limits and when they reset" | `/usage` |
| F169 | 모델 오류(There's an issue with the selected model)는 모델 이름이 틀렸거나 접근 권한이 없다는 뜻이다. | VERIFIED | errors | "The configured model name was not recognized or your account lacks access to it." | `/model` |
| F170 | SSH에서 복사가 안 되면 터미널의 기본 선택 키를 누른 채 드래그해 복사한다. | VERIFIED | troubleshooting | "Hold your terminal's native-selection key while you drag, then copy with your terminal's usual shortcut, such as `Cmd+C`." | — |
| F171 | /copy는 샌드박스에 막히지 않고 Claude Code 프로세스에서 직접 클립보드에 쓴다. | VERIFIED | troubleshooting | "`/copy` writes to the clipboard from the Claude Code process itself rather than from a sandboxed command, so sandboxing doesn't block it." | `/copy` |

## 12. 접근성

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F172 | 화면 낭독 모드는 시각적 터미널 UI를 순서대로 읽히는 평문으로 바꾼다. | VERIFIED | accessibility | "Claude Code has a screen reader mode that replaces its visual terminal interface with plain, linear text." | — |
| F173 | 한 세션만 켜려면 claude --ax-screen-reader를 쓴다. | VERIFIED | accessibility | "For one session: run `claude --ax-screen-reader`." | `claude --ax-screen-reader` |
| F174 | 모든 세션에 켜려면 사용자 설정에 axScreenReader를 true로 넣는다. | VERIFIED | accessibility | "add `"axScreenReader": true` to your user" | `axScreenReader` |
| F175 | 화면 낭독기가 실행 중이어도 모드가 자동으로 켜지지 않는다. | VERIFIED | accessibility | "Screen reader mode doesn't turn on automatically when a screen reader is running." | — |
| F176 | 화면 낭독 모드에서는 주의가 필요할 때 터미널 벨이 울린다. | VERIFIED | accessibility | "In screen reader mode, Claude Code rings the terminal bell when it needs your attention, so you don't have to keep checking the transcript." | — |
| F177 | prefersReducedMotion을 true로 하면 애니메이션이 줄어든다. | VERIFIED | accessibility | "Reduced or no spinners, shimmer, and other animations when `true`." | `prefersReducedMotion` |
| F178 | 색각 이상용 테마(dark-daltonized, light-daltonized)가 있다. | VERIFIED | accessibility | "including the colorblind-friendly `dark-daltonized` and `light-daltonized` themes" | `/theme` |
| F179 | 화면 확대기용으로 CLAUDE_CODE_ACCESSIBILITY를 1로 두면 커서가 계속 보인다. | VERIFIED | accessibility | "A terminal cursor that stays visible for screen magnifiers such as macOS Zoom when you set it to `1`." | `CLAUDE_CODE_ACCESSIBILITY` |
| F180 | VS Code 확장 채팅 패널에는 화면 낭독 모드가 필요 없다. | VERIFIED | accessibility | "Screen reader mode adapts the terminal interface only, so you don't need it in the VS Code extension's chat panel." | — |

## 13. 용어집 (초보자 용어표에 넣을 만한 항목)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| F181 | 세션: /clear를 하면 새 세션이 시작되고 이전 세션은 /resume으로 볼 수 있다. | VERIFIED | glossary | "Running `/clear` starts a new session; the previous one stays stored and is available via `/resume`." | `/clear` |
| F182 | 맥락 창(Context window): 대화 기록, 파일 내용, 명령 출력 등을 담는 세션의 작업 기억이다. | VERIFIED | glossary | "The working memory for a session, holding conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." | `/context` |
| F183 | 압축(Compaction): 맥락 창이 한계에 가까워지면 대화를 자동 요약한다. | VERIFIED | glossary | "Automatic summarization of your conversation when the" | `/compact` |
| F184 | CLAUDE.md: 매 세션 시작 때 읽히는, 사용자가 쓰는 지속 지침 파일이다. | VERIFIED | glossary | "A markdown file of persistent instructions you write for Claude, loaded at the start of every session as a user message after the system prompt." | `CLAUDE.md` |
| F185 | 권한 모드(Permission mode): 세션의 기본 승인 방식이다. | VERIFIED | glossary | "The baseline approval behavior for the session." | `Shift+Tab` |
| F186 | 계획 모드(Plan mode): 파일을 고치기 전에 조사하고 계획을 제시해 승인을 받는다. | VERIFIED | glossary | "It can read, search, and run exploration commands, then presents a plan for approval before touching anything." | `/plan` |
| F187 | 에이전트형 코딩: AI가 파일을 읽고 명령을 실행하고 변경까지 하며 사용자는 지켜보거나 방향을 바꾼다. | VERIFIED | glossary | "A workflow where the AI can read files, run commands, and make changes autonomously while you watch, redirect, or step away" | — |
| F188 | 도구(Tool): 파일 읽기, 코드 수정, 셸 명령, 웹 검색처럼 Claude가 취할 수 있는 행동이다. | VERIFIED | glossary | "An action Claude can take: read a file, edit code, run a shell command, search the web, spawn a subagent." | — |
| F189 | 턴(Turn): 사용자가 메시지를 보내고 Claude가 응답을 마칠 때까지의 한 단위이다. | VERIFIED | glossary | "A turn begins when you send a message and ends when Claude finishes responding" | — |
| F190 | 훅(Hook): 정해진 시점에 자동 실행되는 사용자 정의 처리기이다. | VERIFIED | glossary | "A user-defined handler that executes automatically at a specific point in Claude Code's lifecycle" | — |
| F191 | 프롬프트 인젝션: 파일·웹·도구 결과에 숨은 적대적 지시로 Claude를 엉뚱한 행동으로 유도하려는 시도이다. | VERIFIED | glossary | "Hostile instructions embedded in a file, web page, or tool result that attempt to redirect Claude toward actions you never asked for." | — |
| F192 | 샌드박싱: Bash 도구에 대한 운영체제 수준의 파일·네트워크 격리이다. | VERIFIED | glossary | "OS-level filesystem and network isolation for the Bash tool." | — |
| F193 | 서피스(Surface): CLI, VS Code, JetBrains, Desktop, claude.ai 등 Claude Code에 접근하는 모든 자리이다. | VERIFIED | glossary | "Any place you access Claude Code: the CLI, VS Code, JetBrains, Desktop, or claude.ai." | — |
| F194 | MCP: AI 도구를 외부 데이터·서비스에 연결하는 개방형 표준이다. | VERIFIED | glossary | "An open standard for connecting AI tools to external data sources and services." | `/mcp` |
| F195 | 비대화형 모드: 프롬프트 하나를 실행하고 끝나는 모드로 -p 또는 --print로 호출한다. | VERIFIED | glossary | "A mode that executes a single prompt and exits without an interactive prompt, invoked with `-p` or `--print`." | `claude -p` |
| F196 | 체크포인트: 편집 전에 파일 스냅샷을 찍어 되돌릴 수 있게 하는 복원 지점이다. | VERIFIED | glossary | "Claude Code snapshots files before every edit so a checkpoint can revert them." | `/rewind` |
| F197 | 체크포인트는 Esc 두 번 또는 /rewind로 코드·대화를 되돌린다. | VERIFIED | glossary | "Press `Esc` twice or run `/rewind` to restore code, conversation, or both to an earlier point, or to summarize part of the conversation from a selected message." | `/rewind` |
| F198 | 추론 강도(Effort level): 높을수록 사고 토큰이 늘고 낮을수록 빠르고 싸다. | VERIFIED | glossary | "Higher effort means more thinking tokens and deeper reasoning; lower effort is faster and cheaper." | `/effort` |
## 가이드에 쓸 때 주의

1. 터미널 장은 데스크톱 앱 Code 탭 장 뒤에 오는 심화 장이다. 독자는 터미널을 처음 본다고 가정해야 한다. 공식 문서도 터미널을 처음 쓰는 사람은 별도 터미널 가이드부터 보라고 한다(F19). 이 그룹 원문에는 터미널 여는 법이 없으므로 본문에 쓰려면 다른 그룹이나 새 확인이 필요하다.
2. 종료 방법이 여러 개다. 인터랙티브 문서는 Ctrl+C(실행 중이 아닐 때 두 번)와 Ctrl+D(두 번)를, 퀵스타트는 `/exit`와 Ctrl+D 두 번을 안내한다. 충돌은 아니지만 초보자에게는 `/exit` 하나만 알려 주는 편이 안전하다.
3. Esc 두 번은 입력창 상태에 따라 동작이 다르다(글이 있으면 입력 삭제, 비었으면 되감기 메뉴). 용어집은 "Esc twice or /rewind"로 단순하게 적었다. 본문에는 입력창이 비었을 때만 되감기라고 써야 한다.
4. 버전에 따라 바뀌는 내용(음성 받아쓰기 방식, `/status` 표시 행, Shift+Tab 모드 순서)이 많다. 장에 확인일(2026-10-31)을 남긴다.
5. 음성 받아쓰기는 claude.ai 로그인이 필요하다(API 키·Bedrock 불가). 한국어(ko)는 지원 언어 표에 있으나 기본값은 영어다. 한국어로 말하려면 language 설정을 바꿔야 하는데, 이 그룹 원문으로는 설정 키와 `/config` 경로까지만 확인된다.
6. 컴퓨터 사용(computer use)은 macOS 연구 미리보기이며 Team·Enterprise 불가다. 초보자 장에서는 있다는 수준으로만 소개하고 실습은 넣지 않는다. Chrome 연동도 확장 설치와 `--chrome`이 필요한 별도 기능이다. 둘 다 로그인 상태를 공유하거나 실제 데스크톱을 조작하므로 섹션 8·9의 안전 문장(앱별 승인, Esc 중단, 사이트 권한)을 함께 적는다.
7. 로그인 문제 중 흔한 함정은 환경 변수 `ANTHROPIC_API_KEY`가 구독을 덮어쓰는 경우다. 초보자에게는 `/status`로 인증 방식을 확인하라는 한 줄이면 충분하다.
8. 화면 이름 열의 명령(`/clear` 등)은 문서 표기 그대로다. 터미널은 영어 화면이므로 그대로 보여 주고 뜻을 우리말로 푼다.
9. 설치 명령은 인터넷에서 받은 스크립트를 바로 실행하는 형태다. "공식 주소(claude.ai)의 명령만 복사하라"는 안전 한 줄을 붙이는 것이 좋다. 이 권고는 문서 근거가 아니라 가이드 자체 판단이므로 그렇게 표시한다.
10. `errors` 문서는 제목 위주로만 훑었고 로그인·한도·맥락 초과 메시지 몇 개만 인용했다. 오류 전수 표는 만들지 않았다.
11. 행이 198개로 권장량(70~100)을 넘는다. 장 집필 때 섹션 4·5·10·11·13을 우선 쓰고 나머지는 보조로 쓰면 된다.

## 이 그룹에서 장으로 쓸 만한 구성

제안 장: 「10. 터미널에서 쓰기」

1. 왜 터미널인가: 앱의 Code 탭과 같은 도구를 다른 창구로 쓰는 것이라는 설명(용어집의 서피스 항목, F 섹션 13)과 터미널이 필요한 경우.
2. 설치하기: 운영체제별 한 줄 명령 표(macOS·Linux·WSL / PowerShell / CMD), Homebrew·WinGet 대안, `claude --version` 확인(섹션 1·2).
3. 처음 실행과 로그인: `claude`, 브라우저 인증, `/login`, 계정 조건(섹션 3).
4. 첫 대화: 질문 하나, 파일 수정 승인(Yes), `@`로 파일 가리키기, `!`로 직접 명령, Esc로 멈추기, Shift+Tab으로 권한 모드(섹션 4).
5. 꼭 알아야 할 슬래시 명령 표: `/help` `/clear` `/compact` `/init` `/model` `/usage` `/resume` `/rewind` `/config` `/doctor` `/exit`(섹션 5).
6. 말로 입력하기(`/voice`)와 접근성 설정: 짧은 더 알아보기 상자(섹션 6·12).
7. 다른 도구와 이어 쓰기: VS Code 확장 한 단락(섹션 7), Chrome 연동과 컴퓨터 사용 소개 및 안전 주의(섹션 8·9).
8. 막혔을 때: 증상별 표(`command not found` → PATH, 403·Invalid code → 로그인, Prompt is too long → `/compact`, 한도 → `/usage`)와 `/doctor`(섹션 10·11).
9. 용어 정리 표: 세션, 맥락 창, 압축, CLAUDE.md, 권한 모드, 계획 모드, 도구, 턴, 훅, 프롬프트 인젝션, 샌드박싱, 서피스, MCP, 체크포인트, 에이전트형 코딩(섹션 13).

## 갱신 기록

- 2026-10-31: 처음 작성(공식 문서 56개, 1,179행, 인용 대조 불일치 0)
