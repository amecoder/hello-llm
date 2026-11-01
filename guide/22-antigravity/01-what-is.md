# 1장. Antigravity는 무엇이고 앞의 두 도구와 무엇이 다른가

> **한 줄 요약**: Antigravity는 Google이 만든, **내 컴퓨터의 폴더에서 직접 일하는** AI 도구입니다. 데스크톱 앱과 터미널 프로그램 `agy`가 있습니다.
> 앞의 두 도구와 다른 점은 둘입니다. **무료 Google 계정으로도 모든 기능**을 쓸 수 있고, Codex 단계에서 만든 **`AGENTS.md`와 `.agents/skills`를 그대로 읽습니다.**

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서(antigravity.google/docs)를 바탕으로 썼습니다. 기능과 메뉴 이름은 자주 바뀝니다.

## 네 가지 모양

Antigravity는 쓰는 곳에 따라 네 가지 모양이 있습니다.[^surfaces]

| 모양 | 하는 일 | 이 가이드 |
|---|---|---|
| Antigravity App | 데스크톱에서 에이전트에게 일을 맡기고 지켜보기 | 2장부터 |
| Antigravity CLI(`agy`) | 터미널에서 쓰기 | 6장 |
| 편집기 확장·Antigravity IDE | 코드 편집기 안에서 쓰기 | 다루지 않음 |
| SDK | 파이썬으로 에이전트 만들기 | 다루지 않음 |

출처: Antigravity 공식 문서(이 가이드의 정리)[^surfaces][^ide][^sdk]

앱과 CLI는 **같은 에이전트**를 돌려서, 기능 대부분을 둘 다에서 씁니다.[^same] 한 곳에서 로그인하면 내 컴퓨터의 다른 모양에서도 같은 로그인을 씁니다.[^auth]

<Quiz id="ch601-surfaces" />

## 무료로도 모든 기능

Antigravity는 **모든 요금제에 모든 기능**을 줍니다. 예약 작업과 CLI도 포함입니다.[^all-features] 요금제마다 다른 것은 **사용량**과 **고를 수 있는 모델**입니다.

| 요금제 | 사용량 |
|---|---|
| 무료(Google AI Pro·Ultra가 아닌 계정) | 주 단위로 다시 채워짐 |
| Google AI Pro | 주간 한도까지 5시간마다 다시 채워짐 |
| Google AI Ultra | 가장 넉넉함, 5시간마다 다시 채워짐 |

출처: Antigravity 공식 문서(일부만 옮김)[^plans]

사용량은 질문 개수가 아니라 **에이전트가 한 일의 양**에 따라 줄어듭니다. 쉬운 일이면 더 많이 물을 수 있습니다.[^work]

개인 Google 계정(예: @gmail.com)이면 무료로도 쓸 수 있습니다.[^personal] 다만 **만 18세 이상**이어야 합니다.[^age] 회사·학교에서 관리하는 계정은 개인 계정이 아니어서, 관리자가 허용해야 합니다.[^workspace]

**세 도구 중 무료 계정으로 따라 할 수 있는 것은 Antigravity뿐입니다.** Claude Code와 Codex 장은 유료 요금제를 기준으로 했습니다. 아직 유료 요금제가 없다면 이 단계부터 실습해도 됩니다.

<Quiz id="ch601-plans" />

## 모델 고르기

Antigravity에서는 Gemini 말고 다른 회사 모델도 고를 수 있고, 생각 수준(Low·Medium·High)도 정합니다.[^models] 고를 수 있는 모델은 요금제마다 다릅니다.

| 모델 | 무료 | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

출처: Antigravity 공식 문서(일부만 옮김, Pro의 Claude는 체험판 제외)[^model-table]

무료로 고를 수 있던 Claude 4.6 계열은 **2026년 11월 2일에 빠진다**고 적혀 있습니다.[^removed] 그래서 무료 계정이라면 Gemini 3.8 Flash로 실습한다고 생각하면 됩니다.

<Quiz id="ch601-models" />

## Claude Code·Codex와 무엇이 같고 다른가

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 데스크톱 | Claude 앱의 Code 탭 | ChatGPT 앱의 Codex | 독립 앱 |
| 규칙 파일 | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md`·`GEMINI.md` |
| 이 폴더 스킬 | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| 스킬 부르기 | `/이름` | `$이름` | `/이름` |
| 터미널 | `claude -p` | `codex exec` | `agy -p` |
| 무료 실습 | 안 됨 | 제한적 | 됨 |

출처: 이 가이드의 정리(근거는 각 장의 각주)

**가장 큰 차이는 "옮길 필요가 없다"는 점입니다.** Antigravity는 폴더의 `AGENTS.md`·`GEMINI.md`와 `.agents/` 폴더를 읽습니다.[^discovery] Codex 단계에서 만든 파일 이름·위치와 같습니다. 3장에서 실제로 시험합니다.

<Quiz id="ch601-compare" />

## 이 단계에서 할 일

Codex 5장까지 마친 정리도구 폴더를 **그대로** Antigravity로 엽니다. Codex를 건너뛰었다면 [3단계 Antigravity 목차](./)의 「연습 자료」에서 같은 출발점 파일을 받을 수 있습니다.

1. 2장: 앱을 설치하고, 폴더를 프로젝트로 열고, 첫 정리를 맡긴다.
2. 3장: 규칙과 스킬을 옮기지 않아도 지키는지 시험한다.
3. 4~5장: 권한·되돌리기, 계획·예약을 Claude Code·Codex와 비교한다.
4. 6장: 터미널 `agy -p`와 그 함정을 익힌다.
5. 7장: 비용·데이터·안전을 정리하고, 세 도구를 어떻게 함께 쓸지 정한다.

## 정리

- Antigravity는 앱·CLI·편집기·SDK 네 가지 모양이 있다. 앱과 CLI는 같은 에이전트다.
- 모든 요금제에 모든 기능이 있다. 다른 것은 사용량과 모델이다. 무료는 주 단위로 다시 채워진다.
- 만 18세 이상, 개인 Google 계정이면 무료로 시작할 수 있다.
- `AGENTS.md`와 `.agents/skills`를 Codex와 같은 이름·위치에서 읽는다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Antigravity | 안티그래비티 | Google의 코딩 에이전트 도구 |
| `agy` | 에이지와이 | Antigravity의 터미널 프로그램 |
| Quota | 쿼터 | 정해진 기간에 쓸 수 있는 사용량 |
| GEMINI.md | 제미나이 엠디 | Antigravity가 읽는 또 하나의 규칙 파일 이름 |

<ChapterDone :chapter="601" />

다음 장: [2장. 앱 설치와 첫 정리](02-first-task.md)

[^surfaces]: Antigravity 공식 문서, 「Choose your Antigravity」. "Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview (확인일 2026-11-01)
[^ide]: Antigravity 공식 문서, 「Get started」. "Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^sdk]: Antigravity 공식 문서, 「Google Antigravity SDK」. "The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview (확인일 2026-11-01)
[^same]: Antigravity 공식 문서, 「Antigravity features」. "The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features (확인일 2026-11-01)
[^auth]: Antigravity 공식 문서, 「Authenticate」. "Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install (확인일 2026-11-01)
[^all-features]: Antigravity 공식 문서, 「Plans」. "All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans (확인일 2026-11-01)
[^plans]: Antigravity 공식 문서, 「Plans」. "The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans (확인일 2026-11-01)
[^work]: Antigravity 공식 문서, 「Plans」. "As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans (확인일 2026-11-01)
[^personal]: Antigravity 공식 문서, 「FAQ」. "Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq (확인일 2026-11-01)
[^age]: Antigravity 공식 문서, 「FAQ」. "Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq (확인일 2026-11-01)
[^workspace]: Antigravity 공식 문서, 「FAQ」. "Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq (확인일 2026-11-01)
[^models]: Antigravity 공식 문서, 「Choose a model」. "You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models (확인일 2026-11-01)
[^model-table]: Antigravity 공식 문서, 「Choose a model」. 모델 표의 Gemini 3.8 Flash·Gemini 4 Argon·Claude Sonnet 5.5 행과 "\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models (확인일 2026-11-01)
[^removed]: Antigravity 공식 문서, 「Choose a model」. "\* Will be removed on November 2, 2026." https://antigravity.google/docs/models (확인일 2026-11-01)
[^discovery]: Antigravity 공식 문서, 「Customization discovery」. "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery (확인일 2026-11-01)
