# 1장. Codex는 무엇이고 Claude Code와 무엇이 다른가

> **한 줄 요약**: Codex는 OpenAI가 만든, **내 컴퓨터의 폴더에서 직접 일하는** AI 도구입니다. 지금은 **ChatGPT 데스크톱 앱 안에서 「Codex」를 골라** 씁니다.
> 하는 일은 Claude Code와 거의 같습니다. 이 단계에서는 Claude Code 장에서 만든 「정리 도구」를 Codex로 옮기면서 **다른 점만** 배웁니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서(learn.chatgpt.com)를 바탕으로 썼습니다. 기능과 메뉴 이름은 자주 바뀝니다.

## ChatGPT 앱 안의 세 가지 방식

데스크톱에서는 Codex를 따로 설치하지 않습니다. **ChatGPT 데스크톱 앱 하나에** 세 가지 방식이 함께 들어 있습니다.[^modes]

| 방식 | 이럴 때 | 예 |
|---|---|---|
| Chat | 묻고 답하기 | 질문, 아이디어 내기, 글 다듬기 |
| Work | 결과물까지 맡기기 | 보고서, 발표 자료, 파일 분석 |
| **Codex** | 폴더에서 직접 일하기, 기술 정보 보기 | 파일 고치기, 바뀐 내용 확인 |

출처: Codex 공식 문서(일부만 옮김)[^modes]

Work와 Codex는 할 수 있는 일이 겹칩니다. 차이는 **보여 주는 방식**입니다. Work는 Git이나 명령 같은 기술 정보를 숨기고 완성된 결과물을 보여 줍니다. Codex는 무엇이 바뀌었는지(diff)까지 보여 줍니다.[^compare]

코딩을 안 해도 Codex를 써도 됩니다. 공식 문서도 Codex가 편하면 조사·문서·발표 자료 같은 일에 계속 써도 된다고 말합니다.[^prefer] 이 가이드가 Codex를 고른 이유는 **바뀐 내용을 직접 확인할 수 있어서**입니다. 메모 정리 결과가 원본과 맞는지 검토하는 습관을 Claude Code 장에서 익혔다면, Codex에서도 그대로 이어 갈 수 있습니다.

<Quiz id="ch501-modes" />

## Claude Code와 무엇이 같고 다른가

Claude Code에서 배운 개념은 Codex에도 거의 다 있습니다. **이름과 위치가 다를 뿐**입니다.

| Claude Code | Codex | 배우는 곳 |
|---|---|---|
| Claude 앱의 Code 탭 | ChatGPT 앱에서 「Codex」 선택 | 2장 |
| `CLAUDE.md` | `AGENTS.md` | 3장 |
| 권한 모드(수동 등) | 권한 메뉴(Ask for approval 등) | 4장 |
| 되감기(체크포인트) | Git으로 되돌리기 | 4장 |
| `.claude/skills` · `/이름` | `.agents/skills` · `$이름` | 5장 |
| 예약 작업 | Scheduled | 6장 |
| `claude -p` | `codex exec` | 7장 |

출처: 이 가이드의 정리(공식 문서는 두 도구를 직접 비교하지 않음)

**가장 큰 차이는 규칙 파일 이름입니다.** Codex는 일을 시작하기 전에 `AGENTS.md`를 읽습니다.[^agents] Codex는 Claude Code의 `CLAUDE.md`를 그대로 두면 읽지 않습니다. 그래서 정리 도구를 옮길 때 이 파일부터 바꿉니다(3장).

옮기는 일을 대신해 주는 기능도 있습니다. ChatGPT 앱의 **가져오기**(Import)는 Claude Code의 규칙 파일·스킬·설정을 Codex로 옮겨 줍니다.[^import] 이 가이드는 무엇이 어떻게 바뀌는지 직접 보려고 **손으로 하나씩** 옮깁니다. 가져오기는 3장 끝에서 소개합니다.

<Quiz id="ch501-compare" />

## 어디서 쓰나와 요금제

Codex는 여러 곳에서 씁니다.

- **ChatGPT 데스크톱 앱**: macOS·Windows·Linux용이 있습니다.[^desktop] 이 가이드는 여기서 시작합니다.
- **터미널(Codex CLI)**: 명령어 창에서 씁니다.[^cli] 7장에서 다룹니다.
- **클라우드**: 작업마다 따로 작업 공간이 생기고, 내 컴퓨터가 잠든 동안에도 일합니다.[^cloud] 6장에서 소개합니다.

요금제마다 쓸 수 있는 범위가 다릅니다.

| 요금제 | 월 요금 | Codex에서 쓸 수 있는 것 |
|---|---|---|
| Free | $0 | 데스크톱 앱에서 가벼운 모델, 점진적 제공 |
| Go | $8 | Free와 같음 |
| Plus | $20 | 웹·터미널·편집기·iOS에서도, 더 강한 모델 |
| Pro | $100부터 | Plus의 모든 것과 더 많은 사용량 |

출처: Codex 공식 문서 요금 안내(일부만 옮김)[^pricing]

**Free와 Go는 "점진적 제공"**(rollout, 계정마다 순서대로 열어 주는 방식)입니다. 내 화면에 Codex가 안 보이면 아직 열리지 않은 것일 수 있습니다. 이 가이드의 실습은 **Plus 이상**을 기준으로 합니다.

사용량은 **ChatGPT Work와 함께 씁니다.** Work로 큰일을 많이 맡기면 Codex에 쓸 몫도 줄어듭니다.[^shared] 사용량은 8장에서 더 다룹니다.

<Quiz id="ch501-where" />

## 이 단계에서 할 일

Claude Code 장의 「정리 도구」 폴더를 그대로 가져와 Codex에서 돌게 만듭니다. Claude Code 장을 건너뛰었다면 [3단계 Codex 목차](./)의 「연습 자료」에서 같은 출발점 파일을 받을 수 있습니다.

1. 2장: 앱에서 Codex를 열고 회의 메모 하나를 정리한다.
2. 3장: `CLAUDE.md`를 `AGENTS.md`로 옮기고, 규칙을 말하지 않아도 지키는지 시험한다.
3. 4장: 권한 메뉴와 바뀐 내용 보기, 되돌리기를 익힌다.
4. 5장: 스킬 3개를 옮기고 `$weekly-review` 한 줄로 주간 회고를 만든다.
5. 6~8장: 예약·터미널·안전을 Claude Code와 비교하며 정리한다.

**처음부터 다 외울 필요는 없습니다.** Claude Code에서 해 본 일을 Codex에서 한 번씩 다시 해 보면 차이가 저절로 보입니다.

## 정리

- Codex는 ChatGPT 데스크톱 앱 안에서 「Codex」를 골라 쓴다. Chat·Work·Codex가 한 앱에 있다.
- Codex는 바뀐 내용 같은 기술 정보를 보여 준다. 코딩을 안 해도 쓸 수 있다.
- Claude Code와 개념은 거의 같다. 규칙 파일은 `AGENTS.md`, 스킬은 `$이름`처럼 이름이 다르다.
- Free·Go는 점진적 제공이다. 실습은 Plus 이상 기준이고, 사용량은 Work와 함께 쓴다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Codex | 코덱스 | OpenAI의 코딩 에이전트. ChatGPT 앱 안에서 고르는 방식 |
| ChatGPT Work | 챗지피티 워크 | 결과물까지 맡기는 ChatGPT 방식. 기술 정보는 숨긴다 |
| AGENTS.md | 에이전츠 엠디 | Codex가 일하기 전에 읽는 규칙 파일 |
| Rollout | 롤아웃 | 계정마다 순서대로 기능을 열어 주는 방식 |

<ChapterDone :chapter="501" />

다음 장: [2장. ChatGPT 앱에서 Codex 시작하기](02-first-task.md)

[^modes]: Codex 공식 문서, 「Use ChatGPT」. "Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt (확인일 2026-11-01)
[^compare]: Codex 공식 문서, 「Use ChatGPT」. "ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt (확인일 2026-11-01)
[^prefer]: Codex 공식 문서, 「Use ChatGPT」. "If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt (확인일 2026-11-01)
[^agents]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^import]: Codex 공식 문서, 「Import from another agent」. "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^desktop]: Codex 공식 문서, 「Quickstart」. "The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart (확인일 2026-11-01)
[^cli]: Codex 공식 문서, 「Codex CLI」. "Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli (확인일 2026-11-01)
[^cloud]: Codex 공식 문서, 「Codex Cloud」. "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (확인일 2026-11-01)
[^pricing]: Codex 공식 문서, 「Pricing」. "GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing (확인일 2026-11-01)
[^shared]: Codex 공식 문서, 「Pricing」. "ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing (확인일 2026-11-01)
