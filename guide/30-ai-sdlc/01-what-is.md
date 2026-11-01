# 1장. AI와 함께 만든다는 것 — SDLC 한눈에

> **한 줄 요약**: 소프트웨어는 **계획 → 만들기 → 리뷰 → 확인 → 배포 → 운영**을 거쳐 세상에 나갑니다. 이 흐름을 SDLC라고 부릅니다.
> AI는 각 단계의 손이 되어 주지만, **무엇을 만들지 정하고 결과를 확인하는 일은 사람 몫**입니다. 4단계는 이 나눔을 배웁니다.

이 장은 2026년 11월 1일에 확인한 GitHub 공식 문서와 Claude Code 공식 문서를 바탕으로 썼습니다. 3단계에서 Claude Code·Codex·Antigravity로 폴더를 다뤄 본 독자를 위한 단계입니다. 아직 3단계를 보지 않았다면 [3단계 · Claude Code](../20-claude-code/)부터 보세요.

## SDLC란

SDLC(소프트웨어 개발 생애 주기, Software Development Life Cycle)는 **처음 아이디어부터 실제로 돌아가는 소프트웨어까지** 프로젝트가 거치는 단계를 말합니다.[^sdlc] GitHub은 이 과정을 여섯 단계로 나눕니다.

| 단계 | 하는 일 | 이 가이드 |
|---|---|---|
| 계획(Plan) | 할 일을 적고 추적하기 | 3장 |
| 만들기(Create) | 코드를 쓰고 변경을 기록하기 | 4장 |
| 리뷰(Review) | 변경을 제안하고 의견 받기 | 6장 |
| 확인(Test) | 합치기 전에 자동으로 검사하기 | 5장 |
| 배포(Deploy) | 사람들이 쓰도록 내보내기 | 7장 |
| 운영(Operate) | 지켜보고 고쳐 나가기 | 8장 |

출처: GitHub 공식 문서(이 가이드의 정리)[^six]

**처음부터 모든 단계를 다 쓸 필요는 없습니다.** GitHub도 많은 사람이 저장소 하나와 할 일 몇 개로 시작해서 프로젝트가 자라는 만큼 넓혀 간다고 말합니다.[^start-small] 이 가이드도 작은 웹 페이지 하나로 여섯 단계를 한 바퀴 돌아 봅니다.

<Quiz id="ch701-sdlc" />

## AI는 어떻게 일하나

Claude Code는 맡은 일을 세 단계로 처리합니다. **맥락 모으기 → 행동하기 → 결과 확인하기**입니다.[^loop] 파일을 찾아 읽고, 고치고, 테스트를 돌려 자기 일을 확인하는 것까지 이 순환 안에 들어 있습니다.

3단계에서 써 본 **계획 모드**도 여기서 다시 중요해집니다. 계획 모드에서는 Claude가 파일을 읽고 계획만 내놓고, 내가 승인하기 전에는 아무것도 고치지 않습니다.[^plan]

공식 모범 사례 문서는 일이 기대대로 안 풀리는 대표 원인으로 이런 것들을 꼽습니다.[^fail]

- **내 머릿속과 다른 것을 만들었다.** 저장소만 읽어서는 알 수 없는 정보가 빠졌기 때문입니다. → 3장 「기획과 명세」에서 다룹니다.
- **다 했다고 했는데 덜 됐다.** 스스로 확인할 방법이 없었기 때문입니다. → 5장 「확인과 테스트」에서 다룹니다.

두 원인 모두 AI의 능력보다 **사람이 건네는 정보와 확인 장치**의 문제입니다. 그래서 4단계는 코드를 짜는 법보다 **AI에게 무엇을 건네고, 무엇을 돌려받아 확인할지**를 배웁니다.

<Quiz id="ch701-ai" />

## 사람이 맡는 일

AI가 손을 맡아도 사람이 꼭 맡아야 하는 일이 있습니다.

| 단계 | 사람이 맡는 일 |
|---|---|
| 계획 | 무엇을, 왜 만들지 정하기 |
| 만들기 | 계획을 읽고 승인하기 |
| 확인 | 증거(명령과 출력)를 보고 판단하기 |
| 리뷰 | 합칠지 결정하기 |
| 배포 | 공개해도 되는지 판단하고 누르기 |

출처: 이 가이드의 정리(근거는 각 장의 각주)

공식 문서도 제안된 코드와 명령이 안전한지 **승인 전에 검토할 책임은 사용자에게** 있다고 적습니다.[^responsible] 또 배포처럼 바깥 시스템에 영향을 주는 행동은 Claude Code의 되감기(체크포인트)로 되돌릴 수 없습니다.[^no-checkpoint] 그래서 바깥으로 나가는 행동일수록 사람이 확인하고 누릅니다.

<Quiz id="ch701-human" />

## 이 단계에서 만들 것

4단계의 「직접 해 보기」는 장마다 이어지는 하나의 예제로 합니다. **3단계 정리도구가 만든 회의록의 할 일을 모아 보여 주는 웹 페이지**, 이름하여 「모퉁이 카페 할 일 보드」입니다.

GitHub의 공식 입문 시리즈도 작은 웹사이트 하나를 끝까지 따라 만들며 **계획하고, 코드를 쓰고, 변경을 리뷰하고, 실제 웹사이트로 배포**합니다.[^journey] 이 가이드는 같은 순서를 따르되, AI 자리에 3단계에서 익힌 Claude Code를 씁니다.

| 장 | 할 일 보드에서 하는 일 |
|---|---|
| 2 | GitHub에 저장소를 만든다 |
| 3 | 무엇을 보여 줄지 인터뷰받고 SPEC.md를 쓴다 |
| 4 | 계획을 받고, 브랜치에서 첫 화면을 만든다 |
| 5 | 할 일 수가 맞는지 확인 장치를 만든다 |
| 6 | PR을 만들고 리뷰받는다 |
| 7 | GitHub Pages로 공개한다 |
| 8 | 다음 개선을 이슈로 적고 한 바퀴 더 돈다 |
| 9 | 공개 전에 비밀값과 개인 정보를 점검한다 |

출처: 이 가이드의 계획

**처음부터 완벽할 필요는 없습니다.** 한 장씩 따라가면 마지막에는 인터넷 주소가 붙은 내 페이지가 생깁니다.

## 정리

- SDLC는 아이디어부터 실제로 돌아가는 소프트웨어까지의 단계다. GitHub은 계획·만들기·리뷰·확인·배포·운영 여섯 단계로 나눈다.
- 처음부터 다 쓸 필요는 없다. 작게 시작해 넓힌다.
- Claude Code는 맥락 모으기 → 행동 → 결과 확인으로 일한다. 실패의 흔한 원인은 빠진 정보와 확인 장치의 부재다.
- 무엇을 만들지 정하고, 증거를 보고 판단하고, 합치고 배포할지 정하는 일은 사람 몫이다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| SDLC | 에스디엘씨 | 소프트웨어가 아이디어에서 운영까지 거치는 단계 |
| Repository | 리포지토리 | 프로젝트 파일과 변경 기록을 두는 곳(저장소) |
| Deploy | 디플로이 | 만든 것을 사람들이 쓰도록 내보내기(배포) |
| Plan mode | 플랜 모드 | 고치기 전에 계획만 보여 주는 Claude Code의 방식 |

<ChapterDone :chapter="701" />

다음 장: [2장. GitHub 저장소 만들기](02-repository.md)

[^sdlc]: GitHub 공식 문서, 「What is GitHub?」. "The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github (확인일 2026-11-01)
[^six]: GitHub 공식 문서, 「What is GitHub?」. "Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github (확인일 2026-11-01)
[^start-small]: GitHub 공식 문서, 「What is GitHub?」. "You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github (확인일 2026-11-01)
[^loop]: Claude Code 공식 문서, 「How Claude Code works」. "When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-01)
[^plan]: Claude Code 공식 문서, 「Common workflows」. "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-01)
[^fail]: Claude Code 공식 문서, 「Best practices for Claude Code」. "It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^responsible]: Claude Code 공식 문서, 「Security」. "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (확인일 2026-11-01)
[^no-checkpoint]: Claude Code 공식 문서, 「How Claude Code works」. "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-01)
[^journey]: GitHub 공식 문서, 「Creating a repository for your project on GitHub」. "By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (확인일 2026-11-01)
