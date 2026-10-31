# 1장. Claude Code는 무엇이고 어디서 쓰나 — 채팅과 다른 점, 쓰는 곳, 요금제

> **한 줄 요약**: Claude Code는 **내 컴퓨터의 폴더를 직접 읽고, 파일을 고치고, 명령을 실행하는** Claude입니다. 채팅처럼 답을 받아 복사해 붙이는 대신, 일을 맡기고 결과를 검토합니다.
> 쓰려면 **유료 구독**(Pro·Max·Ultra·Team·Enterprise)이 필요합니다. 이 단계는 터미널 없이 쓰는 **데스크톱 앱**부터 시작합니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서를 바탕으로 썼습니다. 기능과 메뉴 이름은 자주 바뀝니다.

## 채팅과 무엇이 다른가

2단계에서 쓴 Claude 채팅은 **묻고 답을 받는** 곳이었습니다. 답에 나온 글을 내가 복사해서 파일에 붙여 넣었습니다.

**Claude Code는 내 컴퓨터의 폴더에서 직접 일합니다.** 공식 문서는 Claude Code를 "폴더의 내용을 읽고, 파일을 고치고, 명령을 실행하는" 도구라고 소개합니다.[^overview] 원하는 것을 평소 말로 설명하면, 방법을 계획하고 여러 파일에 걸쳐 작업한 뒤 잘 되는지 확인까지 합니다.[^overview]

| | 채팅(2단계) | Claude Code(3단계) |
|---|---|---|
| 일하는 곳 | 대화창 안 | 내 컴퓨터의 폴더 |
| 파일 | 내가 올리고, 받은 답을 내가 붙여 넣음 | Claude가 폴더 안 파일을 직접 읽고 고침 |
| 여러 단계 일 | 한 단계씩 내가 이어 줌 | 계획 → 작업 → 확인을 스스로 이어 감 |
| 내가 할 일 | 답을 읽고 옮기기 | 맡기고, 바뀐 내용을 검토하기 |

출처: 이 가이드의 정리(공식 문서는 채팅과 직접 비교하지 않음)[^overview]

이런 방식을 **에이전트**(Agent, 스스로 여러 단계를 진행하는 AI)라고 부릅니다. 공식 문서도 Claude Code를 "에이전트형 코딩 도구"(agentic coding tool)라고 부릅니다.[^overview]

2단계 Claude 가이드의 **Cowork**도 일을 통째로 맡기는 기능이었습니다([2단계 Claude 8장](../10-claude/08-cowork.md)). 데스크톱 앱 안에 채팅(Chat), Cowork, Claude Code(**Code** 탭)가 함께 들어 있습니다.[^linux] 이 단계는 그중 **Code** 탭을 다룹니다.

<Quiz id="ch401-what" />

## 무엇을 맡길 수 있나

이름은 "코드"지만, 하는 일은 결국 **폴더 안의 파일을 읽고 고치는 것**입니다.[^overview] 공식 문서가 드는 예는 개발자 일입니다.[^overview]

- 기능 만들기, 버그 고치기
- 버그가 생기면 오류 메시지를 붙여 넣거나 증상을 말로 설명하기
- 테스트 쓰기, 여러 파일의 형식 오류 고치기, 릴리스 노트(바뀐 점 안내문) 쓰기 같은 반복 작업

**이 가이드는 코드 대신 메모 파일이 든 폴더로 연습합니다.** 회의 메모·공부 필기·하루 회고처럼 정리 안 된 메모를 넣으면 **내가 정한 형식**의 회의록·공부 노트·주간 회고가 나오는 「내 방식대로 정리해 주는 도구」를 3단계 내내 조금씩 만들어 갑니다. 첫 일은 이런 요청입니다.

```
inbox 폴더의 회의 메모를 읽고 회의록으로 정리해 줘. 결정한 것 / 할 일(담당·기한) / 다음에 논의할 것 세 부분으로 나누고, notes 폴더에 새 파일로 저장해 줘. 원본 메모는 고치지 마.
```

채팅이었다면 메모를 올리고, 받은 답을 새 파일에 붙여 넣어 저장해야 했습니다. Claude Code는 폴더를 직접 읽고 회의록 파일을 만들어 둡니다. 나는 **만들어진 파일이 맞는지 검토**만 하면 됩니다.

정해진 방식으로 요약해 주는 서비스도 있습니다. Claude Code에서는 "할 일은 담당·기한을 꼭 나눠라" 같은 **내 형식을 파일로 저장해 두고, 매번 다시 설명하지 않고** 쓸 수 있습니다. 그 방법은 6·7장에서 배웁니다.

다만 **파일을 직접 고치는 만큼 조심할 것도 늘어납니다.** 그래서 무엇을 허락할지 정하는 법(4장)과, 바뀐 내용을 확인하는 법을 이 단계에서 꼭 배웁니다.

<Quiz id="ch401-tasks" />

## 어디서 쓰나

Claude Code는 여러 곳에서 씁니다. 어디서 쓰든 **같은 엔진**(핵심 프로그램)이 돌고, 쓰는 방식에 맞게 화면만 다릅니다.[^platforms]

| 쓰는 곳 | 알맞은 때 |
|---|---|
| **데스크톱 앱**(Code 탭) | 바뀐 내용을 눈으로 검토, 여러 일을 나란히, 설정이 단순 |
| 터미널(CLI) | 명령어 창에서 일하기, 자동화 |
| VS Code 같은 편집기 | 코드 편집기 안에서 바로 쓰기 |
| 웹(클라우드) | 오래 걸리는 일, 내 컴퓨터를 꺼도 이어질 일 |
| 휴대폰 | 밖에서 일을 시작하고 지켜보기 |

출처: Claude Code 공식 문서[^platforms]

**이 가이드는 데스크톱 앱부터 시작합니다.** 터미널을 쓰고 싶지 않은 사람에게 데스크톱 앱이 같은 엔진을 그래픽 화면으로 준다고 공식 문서도 안내합니다.[^platforms] 데스크톱 앱에는 Claude Code가 들어 있어서, 따로 설치할 프로그램이 없습니다.[^quickstart]

같은 일을 여러 곳에서 섞어 써도 됩니다.[^platforms] 터미널은 10장에서, 웹·휴대폰은 8장에서 다룹니다.

<Quiz id="ch401-where" />

## 무엇이 필요한가 — 요금제

**Claude Code는 유료 구독에서만 씁니다.** Pro, Max, Ultra, Team, Enterprise 구독이나 Console(API) 계정이 필요하고, **무료 플랜으로는 쓸 수 없습니다.**[^setup] 개인 구독(Pro·Max·Ultra)은 claude.ai 계정으로 로그인합니다.[^auth]

- 요금제 이름이 바뀌었습니다. **Ultra는 예전 Max 20x, Max는 예전 Max 5x**의 새 이름입니다.[^availability] 옛 글에서 "Max 5x"를 보면 지금의 Max입니다.
- 요금과 사용 한도는 2단계 Claude 가이드에서 다뤘습니다([2단계 Claude 1장](../10-claude/01-getting-started.md#요금제-한눈에-보기)). 사용량은 데스크톱·터미널 등 **Claude Code를 쓰는 모든 곳이 함께** 씁니다.[^desktop] Team·Enterprise는 채팅·Cowork와도 함께 씁니다.[^costs]
- 광고된 사용 한도는 **한 사람이 보통으로 쓰는 것**을 전제로 합니다.[^legal] 다른 회사가 만든 서비스가 내 구독 로그인으로 대신 요청을 보내는 방식도 허용되지 않습니다.[^legal]

어떤 요금제가 맞는지는 써 보며 정해도 됩니다. 사용량을 보는 법은 9장에서 다룹니다.

<Quiz id="ch401-plan" />

## 이 단계에서 배우는 순서

| 장 | 배우는 것 |
|---|---|
| [2장](02-install.md) | 데스크톱 앱을 설치하고 첫 일을 맡기기 |
| 3장 | 화면 둘러보기 |
| 4~5장 | 허락하고 되돌리는 법, 잘 맡기는 법 |
| 6~7장 | 프로젝트 규칙 적어 두기, 기능 넓히기 |
| 8~9장 | 여러 일 동시에·클라우드·예약, 비용과 안전 |
| 10장 | 터미널에서 쓰기 |
| 11~12장 | 실습 과제, 전문가처럼 쓰기 |

처음부터 다 알 필요는 없습니다. 2장에서 작은 일 하나를 맡겨 보는 것으로 충분합니다.

## 직접 해 보기

1. claude.ai에 로그인해 지금 내 요금제가 무엇인지 확인한다. 무료라면 이 단계의 실습은 구독 뒤에 할 수 있다.
2. 내 컴퓨터에서 Claude에게 맡기고 싶은 "폴더 일"을 하나 적어 본다(예: 흩어진 메모를 한 파일로 모으기).
3. 그 일을 채팅으로 했다면 몇 번 복사·붙여 넣기를 했을지 세어 본다.

**이어지는 과제**: 내가 매주 정리하는 것(회의록·수업 필기·회고 등)을 하나 골라, 어떤 형식으로 정리되면 좋을지 세 줄로 적어 둔다(예: "결정한 것 / 할 일(담당·기한) / 다음에 논의할 것"). 2장에서 연습 메모로 첫 정리를 맡기고, 11장에서 내 메모로 해 본다.

## 정리

- Claude Code는 내 컴퓨터의 폴더를 직접 읽고, 파일을 고치고, 명령을 실행하는 에이전트형 도구다.
- 채팅은 답을 받아 내가 옮기고, Claude Code는 일을 맡기고 내가 검토한다.
- 데스크톱 앱·터미널·편집기·웹·휴대폰에서 같은 엔진을 쓴다. 이 단계는 데스크톱 앱부터 배운다.
- Pro·Max·Ultra·Team·Enterprise 구독이 필요하고, 무료 플랜으로는 쓸 수 없다. Ultra는 예전 Max 20x, Max는 예전 Max 5x다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Claude Code | 클로드 코드 | 내 컴퓨터의 폴더에서 직접 일하는 Claude |
| Agent | 에이전트 | 스스로 여러 단계를 이어 가며 일하는 AI |
| Code 탭 | 코드 탭 | 데스크톱 앱에서 Claude Code를 쓰는 곳 |
| CLI | 씨엘아이 | 명령어를 글자로 쳐서 쓰는 프로그램(터미널) |
| Surface | 서피스 (쓰는 곳) | 데스크톱·터미널·웹처럼 Claude Code를 쓰는 화면 |

<ChapterDone :chapter="401" />

다음 장: [2장. 데스크톱 앱 설치와 첫 세션](02-install.md)

[^overview]: Claude Code 공식 문서, 「Overview」. "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview (확인일 2026-10-31)
[^platforms]: Claude Code 공식 문서, 「Platforms and integrations」. "Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms (확인일 2026-10-31)
[^linux]: Claude Code 공식 문서, 「Claude Desktop on Linux (beta)」. "The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux (확인일 2026-10-31)
[^quickstart]: Claude Code 공식 문서, 「Get started with the desktop app」. "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart (확인일 2026-10-31)
[^setup]: Claude Code 공식 문서, 「Advanced setup」. "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." 약관 페이지(legal-and-compliance)는 무료 사용자도 함께 적고 있어 어긋나 보이지만, 이용 조건은 이 문서의 명시 문장을 따랐다. https://code.claude.com/docs/en/setup (확인일 2026-10-31)
[^desktop]: Claude Code 공식 문서, 「Desktop application」. "Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^costs]: Claude Code 공식 문서, 「Manage costs effectively」. "The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs (확인일 2026-10-31)
[^auth]: Claude Code 공식 문서, 「Authentication」. "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (확인일 2026-10-31)
[^availability]: Claude Code 공식 문서, 「Feature availability」. "Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability (확인일 2026-10-31)
[^legal]: Claude Code 공식 문서, 「Legal and compliance」. "Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance (확인일 2026-10-31)
