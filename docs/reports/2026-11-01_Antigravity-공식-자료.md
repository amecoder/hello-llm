---
type: report
project: hello-llm
created: 2026-11-01
status: active
read: false
tags: [리서치, Antigravity, Google, agy, Gemini, 공식문서, 사실확인, 재사용]
---

# Google Antigravity 공식 자료 사실 확인 (2026-11-01)

## 이 문서의 용도

- 3단계의 세 번째 도구 장(Google Antigravity)을 쓸 때 근거로 쓰는 **사실 확인 리포트**다. 본문에는 이 문서에서 **VERIFIED** 로 표시한 값만 옮긴다.
- 독자는 Claude Code 장과 Codex 장에서 「정리도구」 폴더(받은 메모 `inbox/`, 서식 `templates/`, `AGENTS.md`, `CLAUDE.md`, `.agents/skills/` 안의 스킬 3개)를 만든 **비개발자**다. 그래서 이 리포트는 "이미 만든 폴더가 Antigravity에서도 그대로 통하는가, 무엇이 다른가"에 맞춰 사실을 골랐다.
- **확인 방법**: 공식 문서 사이트의 마크다운 원문(`https://antigravity.google/docs/<slug>.md`)을 2026-11-01 에 내려받아 읽었다(91개 페이지, 목록은 `llms.txt`). 장별로 필요한 문장만 뽑았다. 인용은 내려받은 원문과 공백만 맞춰 기계로 대조했다(대조 스크립트는 작업 폴더에만 두고 저장소에 넣지 않음).
- 내려받은 날 기준 최신판: 앱 v2.28.2(2026-10-29), CLI v1.4.10(2026-10-29) — 변경 기록(changelog) 페이지의 맨 위 항목.
- **표기 약속**
  - 항목 번호 `장-번호`(예: 3-06). 각 항목은 한국어 설명 → 상태 → 출처 URL → 영어 원문 인용 순서다.
  - 상태: **VERIFIED** = 원문에서 직접 읽음 / **충돌** = 문서끼리 다름 / **UNVERIFIED** = 문서에서 찾지 못함(「확인 못 한 것」 절로 모았다)
  - 인용은 원문 한 줄에서 그대로 옮겼다(두 문장 이하). 마크다운 강조(`**`)·링크·백틱·역슬래시도 원문대로 두었다.
  - 확인일은 모두 2026-11-01.
- **주의 1 — 문서에 가짜 화면 글자가 섞여 있다.** 여러 페이지가 화면 미리보기(예시 대화, 예시 프로젝트 `checkout-service`, 예시 이메일 등)를 글자로 품고 있다. 이것은 사실이 아니므로 하나도 인용하지 않았다. 설명 문단·표·목록만 인용했다.
- **주의 2 — 앱과 CLI가 같은 에이전트를 쓰지만 기본값이 다르다.** 특히 권한·샌드박스 기본값이 앱과 CLI에서 다르다(4장). 문장마다 어느 표면(App·CLI·IDE)의 이야기인지 적었다.
- **주의 3 — 개인 계정과 회사 계정의 권한 화면이 다르다.** 개인 계정은 "Updated permission settings"(권한 프리셋 4개), 회사·기업 계정은 "Previous permission settings"를 쓴다(4-08). 독자는 개인 계정이므로 앞쪽만 쓴다.
- **주의 4 — 한국어 화면 이름은 영어 문서로 알 수 없다.** 메뉴 이름은 영어 그대로 적었다. 본문에 쓰기 전에 캡처로 확정한다.

## 결론 — 가이드에 꼭 반영할 것

1. **Antigravity는 네 가지 모양으로 나온다.** 데스크톱 앱(Antigravity App), 터미널 프로그램 `agy`(Antigravity CLI), 편집기 확장·독립 편집기(IDE), 파이썬 SDK다(1-01~1-05). 앱과 CLI는 같은 에이전트를 돌린다(1-02). 한 곳에서 로그인하면 내 컴퓨터의 다른 표면도 같이 로그인된다(1-03).
2. **무료로도 모든 기능을 쓸 수 있다. 차이는 사용량과 모델이다.** 모든 플랜이 예약 작업·CLI를 포함한 모든 기능을 받는다(1-06). 무료는 "주 단위로 다시 채워지는 사용량", Pro·Ultra는 "5시간마다 다시 채워지는 사용량"이다(1-07~1-09). 다만 `/boost`·`/teamwork` 두 명령은 유료 전용이다(1-19). 무료에서 고를 수 있는 모델 중 Claude 4.6 계열은 **2026-11-02 에 빠진다**(1-16).
3. **개인 Google 계정(@gmail.com)으로 로그인한다.** 만 18세 이상, 대한민국은 이용 가능 국가 목록에 있다(2-03~2-05). 회사·학교 Workspace 계정은 개인 계정이 아니다(2-06).
4. **`CLAUDE.md` 는 읽지 않는다. `AGENTS.md` 는 그대로 통한다.** 규칙 파일은 `AGENTS.md`·`GEMINI.md`·`.agents/rules/*.md` 뿐이고(3-01, 3-04), 문서 전체에서 `CLAUDE.md` 를 규칙으로 읽는다는 말은 없다(확인 못 한 것 #3). `AGENTS.md` 는 항상 켜진 규칙이다(3-15).
5. **`.agents/skills/` 도 그대로 통한다.** 앱은 `<폴더>/.agents/skills/<스킬>/` 과 `~/.gemini/config/skills/<스킬>/` 을 읽는다(3-27). Codex 장에서 만든 위치가 그대로 맞다. 앱에서는 `/스킬이름` 으로 직접 부르고(3-26), 말로 시켜도 에이전트가 알아서 고른다(3-25). CLI는 스킬마다 슬래시 명령을 자동으로 만들어 준다(3-28).
6. **Git이 아니어도 프로젝트로 열 수 있다.** 폴더 추가는 "Git 저장소 또는 작업 폴더"를 받는다(2-08). 그런데 바뀐 내용 보기(Review)는 Git 저장소의 변경을 보여 주고(2-22), 새 워크트리 모드는 Git 전용이다(2-10). Git이 아닌 폴더에서 Review가 어떻게 보이는지는 문서에 없다(확인 못 한 것 #4).
7. **권한은 프리셋 네 개다(개인 계정, 앱).** Request Review(모든 명령에 허락) · Default(울타리 안 명령은 묻지 않고, 밖으로 나갈 때 묻기) · Auto(Preview, 안전한 명령은 자동 판단) · Turbo(제한 없음)(4-01~4-04). 앱의 터미널 울타리(샌드박스)는 기본으로 켜져 있고, 그 안에서는 인터넷이 막혀 있다(4-13, 4-16). 웹 페이지 읽기는 기본이 "묻기"다(4-12).
8. **CLI는 기본값이 더 조심스럽다.** CLI의 기본 권한은 파일 쓰기·명령·웹 도구 전에 묻고(4-26), 샌드박스는 **기본으로 꺼져 있다**(4-27). 앱과 반대다.
9. **되돌리기는 두 가지다.** 앱의 Review 창에서 Git 변경을 버릴 수 있는데, **확인 없이 바로** 지워지고 추적 안 되는 새 파일까지 지운다(4-19). CLI에는 `/rewind`(별칭 `/undo`)가 있다(4-23, 4-24). 앱에도 대화 되돌리기(Confirm Undo 대화상자)가 있다는 기록이 변경 기록에만 있고, 사용 설명서 페이지는 없다(4-20~4-22, 확인 못 한 것 #6).
10. **예약은 두 종류다.** `/schedule` 은 지금 대화 안에서만 사는 타이머다(5-05, 5-06). 대화를 넘어 계속 도는 것은 앱의 **Automations**(예전 이름 scheduled tasks)다(5-07). Automations가 돌 때 앱이 켜져 있어야 하는지, 컴퓨터가 깨어 있어야 하는지는 문서에 없다(확인 못 한 것 #7). 에이전트가 일하는 동안에는 컴퓨터가 잠들지 않게 막는다(5-11).
11. **터미널 `agy -p` 는 작업 폴더 안 파일을 묻지 않고 쓴다.** 묻는 대신 정책으로 처리하는데, 작업 폴더 안 읽기·쓰기는 자동 허용, 명령은 "조용히 거절(soft-deny)"이다(6-13~6-15). Codex의 `codex exec`(기본 읽기 전용)와 다르다.
12. **데이터**: 앱의 **Enable Telemetry**(Account 항목)를 켜면 대화가 Antigravity와 모델 개선에 쓰인다(7-03). 설정 패널에서 언제든 끌 수 있다(7-02). 개인 계정에서 이 설정의 처음 값(켜짐/꺼짐)은 문서에 없다(확인 못 한 것 #9). Claude Code 같은 다른 프로그램으로 Antigravity 로그인을 쓰면 약관 위반이다(7-04).
13. **프롬프트 인젝션(문서 속 숨은 지시) 경고는 공식 문서에서 찾지 못했다**(확인 못 한 것 #10). 안전 장치로는 웹 읽기 기본 묻기(4-12), 샌드박스(4-16), "신뢰하지 않는 폴더엔 더 엄격한 프로젝트 설정"(7-06)이 있다.

## 장별 부록 목차

| 장 | 주제 | 항목 |
|---|---|---|
| 1 | Antigravity는 무엇인가 — 표면·플랜·모델 | 1-01~1-19 |
| 2 | 설치와 첫 일 — 로그인·프로젝트·멘션·결과물·바뀐 내용 보기 | 2-01~2-25 |
| 3 | 규칙과 스킬 — 찾는 위치·AGENTS.md·rules·skills | 3-01~3-32 |
| 4 | 권한·샌드박스·되돌리기 | 4-01~4-29 |
| 5 | 계획·예약·브라우저·목표·원격·서브에이전트 | 5-01~5-21 |
| 6 | 터미널 `agy` | 6-01~6-23 |
| 7 | 비용·데이터·안전 | 7-01~7-10 |

---

# 1장 근거 — Antigravity는 무엇인가

## 1.1 네 가지 표면

**1-01** Antigravity는 예전 Agent Manager에서 독립 데스크톱 "지휘 본부"(Antigravity App)로 자랐고, 터미널·편집기·SDK와 나란히 있다. 한 편집기에 묶이지 않고, 바로 주고받는 작업과 뒤에서 도는 작업을 모두 지원한다. — VERIFIED · https://antigravity.google/docs/overview · 확인일 2026-11-01
> "Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE."

**1-02** 앱과 CLI는 같은 에이전트를 돌리므로 대부분의 기능이 둘 다에서 된다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "The Antigravity App and the Antigravity CLI run the same agent, so most features work on both."

**1-03** 로그인은 앱·CLI·IDE·SDK가 하나로 묶여 있다. 한 표면에서 로그인하면 내 컴퓨터 안에서 같이 쓴다. — VERIFIED · https://antigravity.google/docs/install · 확인일 2026-11-01
> "Antigravity uses a unified authentication layer across **Antigravity App**, **Antigravity CLI**, **Antigravity for IDEs**, and the **Antigravity SDK**. Signing in on one local surface shares your credentials across your local environment."

**1-04** 편집기 확장을 설치하거나, 독립 편집기 **Antigravity IDE** 를 내려받을 수 있다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:"

**1-05** SDK는 파이썬으로 에이전트를 직접 만드는 개발자용 도구다(이 가이드 범위 밖). — VERIFIED · https://antigravity.google/docs/sdk/overview · 확인일 2026-11-01
> "The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini."

## 1.2 플랜과 사용량

**1-06** 모든 플랜이 기본 기능을 받는다. 그 목록에 "예약 작업과 CLI를 포함한 모든 제품 기능"이 들어 있다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "All plans receive the following baseline features:"
> "Access to all product features, such as scheduled tasks and the CLI"

**1-07** Google AI Ultra: 가장 넉넉한 사용량, 5시간마다 다시 채워짐. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "The highest, most generous quota, refreshed every five hours"

**1-08** Google AI Pro: 넉넉한 사용량, 주간 한도에 닿을 때까지 5시간마다 다시 채워짐. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "A high, generous quota, refreshed every five hours until the weekly limit is reached"

**1-09** Pro·Ultra가 아닌 사람(무료 포함): "의미 있는 사용량", 주 단위로 다시 채워짐. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "Users not on Google AI Pro or Ultra plans receive the following benefits:"
> "A meaningful quota, refreshed weekly"

**1-10** 사용량은 질문 개수가 아니라 에이전트가 한 일의 양에 따라 줄어든다. 쉬운 일이면 더 많이 물을 수 있다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "Under the hood, the rate limits correlate with the amount of work done by the agent, which can differ from prompt to prompt."

**1-11** Pro·Ultra는 사 둔 AI 크레딧으로 기본 사용량을 넘겨 쓸 수 있다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "Users on Google AI Pro or Ultra plans can use [purchased AI credits](https://one.google.com/ai/credits) (or any one-time promotional credits) for additional overage usage above the baseline quota."

**1-12** 크레딧 자동 사용은 **AI Credit Overages** 설정으로 정한다. Never(자동으로 안 씀, 다시 채워질 때까지 기다림)와 Always(다 쓰면 크레딧 사용) 두 가지다. CLI에서는 이름이 다르다 → 6-23. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "**Never**: Never use AI credits automatically; wait until the baseline quota refreshes before using this model further."
> "**Always**: Always use AI credits when the baseline quota is exhausted (automatically switches back to using the baseline quota once it refreshes)."

**1-13** 모델별 사용량은 **Settings** 화면에서 본다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "You can view baseline quota usage across models on the **Settings** page."

**1-14** 사용 한도는 바뀔 수 있다. 본문에 숫자를 박지 않는 근거다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "Usage limits for this service are subject to modification."

## 1.3 모델

**1-15** 모델은 아무 때나 바꿀 수 있고, 생각 수준(Low·Medium·High)도 고른다. — VERIFIED · https://antigravity.google/docs/models · 확인일 2026-11-01
> "You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks."

**1-16** 모델 표(열 순서: Free & Google AI Plus · Pro · Ultra · Enterprise). Gemini 3.8 Flash는 모든 플랜, Gemini 4 Argon은 무료 불가. 별표(*) 모델(Claude Sonnet 4.6·Opus 4.6·GPT-OSS-120b)은 2026-11-02 에 빠진다. 즉 가이드가 나갈 즈음 무료 독자가 고를 모델은 사실상 Gemini 3.8 Flash다(필자 판단). — VERIFIED · https://antigravity.google/docs/models · 확인일 2026-11-01
> "| [Gemini 3.8 Flash](/blog/gemini-3-8-flash-in-google-antigravity) | ✅ | ✅ | ✅ | ✅ |"
> "| [Gemini 4 Argon](/blog/gemini-4-argon-in-google-antigravity) | ❌ | ✅† | ✅ | ✅ |"
> "| Claude Opus 4.6 (thinking)\* | ✅ | ✅ | ❌ | ❌ |"
> "\* Will be removed on November 2, 2026."

**1-17** Claude Sonnet 5.5·Opus 5.5는 Pro(체험판 제외)와 Ultra부터다. — VERIFIED · https://antigravity.google/docs/models · 확인일 2026-11-01
> "| Claude Sonnet 5.5 (thinking)\*\* | ❌ | ✅\*\* | ✅ | ✅ |"
> "\*\* Available on Google AI Pro for non-trial subscriptions only."

**1-18** 고른 모델은 그 대화 안에서 계속 유지된다. 일하는 도중 바꾸면 그 차례가 끝날 때까지는 원래 모델을 쓴다. — VERIFIED · https://antigravity.google/docs/models · 확인일 2026-11-01
> "Your choice of reasoning model persists between messages within a conversation."

**1-19** `/boost`·`/teamwork` 는 유료 플랜 전용이고, 일부 명령은 한 표면에서만 된다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Some commands are available on only one surface, and `/boost` and `/teamwork` require a paid plan."

---

# 2장 근거 — 설치와 첫 일

## 2.1 설치·로그인

**2-01** macOS: 내려받은 `Antigravity.dmg` 를 열고 **Applications** 폴더로 끌어 넣는다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder."

**2-02** 앱 로그인: **Sign in** 을 누르면 브라우저가 열리고, 개인 Google 계정(Free·Pro·Ultra)으로 로그인하면 앱으로 돌아온다. — VERIFIED · https://antigravity.google/docs/install · 확인일 2026-11-01
> "Click **Sign in** to open the browser authentication flow."
> "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)."

**2-03** 개인 Google 계정(@gmail.com 등)은 무료를 포함한 모든 플랜에서 쓸 수 있다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier."

**2-04** 만 18세 미만은 쓸 수 없다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Currently, Antigravity is unavailable to users under 18."

**2-05** 이용 가능 국가 목록(아시아 절)에 대한민국이 있다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Google Antigravity is available in the following countries and territories."
> "South Korea"

**2-06** 회사·학교가 관리하는 계정(Google Workspace 등)은 개인 계정이 아니다. 관리자가 허용해야 로그인된다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts."

## 2.2 프로젝트 만들기

**2-07** 앱의 에이전트는 **Projects** 안에서 일한다. 프로젝트가 폴더 범위와 권한을 정한다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces."

**2-08** 왼쪽 사이드바의 **New Project** 아이콘(더하기가 붙은 폴더) → **Add Folder** 로 폴더 선택. Git 저장소가 아니어도 "작업 폴더"면 된다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "Click the **New Project** icon (folder with a plus sign) in the left sidebar."
> "Click **Add Folder** to select one or more local Git repositories or working directories."

**2-09** 첫 지시를 보내면 모드를 고른다. Local mode = 지금 폴더에서 바로, New worktree mode = 따로 떼어 낸 Git 워크트리에서. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "**Local mode**: The agent operates directly in your active folders."
> "**New worktree mode**: The agent operates in an isolated Git worktree."

**2-10** 새 워크트리 모드는 대화마다 Git 워크트리를 새로 만든다. 지금 폴더를 건드리지 않아 복잡한 일에 좋다. — VERIFIED · https://antigravity.google/docs/projects · 확인일 2026-11-01
> "**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting."

**2-11** Git 폴더와 일반 폴더가 섞인 프로젝트에서 새 워크트리 모드를 쓰면, Git 폴더만 워크트리가 생기고 Git이 아닌 폴더는 그대로 쓴다. — VERIFIED · https://antigravity.google/docs/projects · 확인일 2026-11-01
> "Using **New Worktree Mode** spawns a new Git worktree for all active Git checkouts, allowing the agent to operate inside the new worktrees and the existing non-Git local folders simultaneously."

**2-12** 새 프로젝트는 권한 프리셋 **Inherit Global**(전체 설정 따름)으로 시작하고, 프로젝트 폴더 전부를 읽고 쓸 수 있다. — VERIFIED · https://antigravity.google/docs/projects · 확인일 2026-11-01
> "**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders."

**2-13** 프로젝트 밖에서 가볍게 한 번 묻는 대화도 된다. 이때는 임시(scratch) 폴더에서 돈다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Start quick, one-off conversations outside of any project."
> "These sessions run in a local scratch folder."

## 2.3 @ 멘션과 인용

**2-14** `@` 를 쳐서 파일·폴더·규칙·지난 대화를 짚어 주면 에이전트가 찾지 않고 바로 시작한다. — VERIFIED · https://antigravity.google/docs/at-mentions · 확인일 2026-11-01
> "Type `@` to point the agent at specific files, folders, rules, or past conversations, or quote text that you select, so the agent starts from the right context instead of searching for it."

**2-15** 파일을 멘션해도 내용이 붙여 넣어지지 않는다. 경로만 가고, 필요할 때 에이전트가 읽는다. — VERIFIED · https://antigravity.google/docs/at-mentions · 확인일 2026-11-01
> "Mentioning a file or folder doesn’t paste its contents into your prompt."
> "| A file or folder | Its full path. The agent reads it when it needs to. |"

**2-16** CLI의 `@` 는 파일·폴더만 된다. 규칙·지난 대화·인용은 앱 전용. — VERIFIED · https://antigravity.google/docs/at-mentions · 확인일 2026-11-01
> "In the Antigravity CLI, you can add only files and directories."

## 2.4 결과물(Artifacts) — 계획서와 정리 보고

**2-17** 아티팩트는 에이전트가 일하면서 만드는 결과물(계획서·바뀐 내용·그림·브라우저 녹화 등)이다. — VERIFIED · https://antigravity.google/docs/artifacts · 확인일 2026-11-01
> "An **artifact** is a structured deliverable created by the agent to accomplish its task and communicate its progress and thinking to you."

**2-18** 새 대화를 시작할 때 Planning mode(먼저 계획)와 Fast mode(바로 실행)를 고른다. Fast는 이름 바꾸기 같은 작은 일에 쓴다. — VERIFIED · https://antigravity.google/docs/artifact-review · 확인일 2026-11-01
> "**Planning mode**: The agent plans thoroughly before executing tasks."
> "**Fast mode**: The agent executes tasks directly without a dedicated planning phase."

**2-19** 계획 검토 방식은 **Settings** 의 **Agent** 탭에서 고른다. **Request review**(권장)는 계획·바뀐 내용을 만들면 멈추고 승인을 기다린다. — VERIFIED · https://antigravity.google/docs/artifact-review · 확인일 2026-11-01
> "You can customize the review workflow in the **Agent** tab of the **Settings** pane."
> "The agent always halts and requests your explicit approval before proceeding with proposed changes:"

**2-20** **Always proceed** 는 멈추지 않고 바로 실행한다. — VERIFIED · https://antigravity.google/docs/artifact-review · 확인일 2026-11-01
> "The agent never halts for manual review and immediately proceeds with executing its plans:"

**2-21** 구현 계획(Implementation plan)을 받으면 대화나 결과물 머리말의 **Proceed** 를 눌러 진행한다. — VERIFIED · https://antigravity.google/docs/implementation-plan · 확인일 2026-11-01
> "You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan."

**2-22** 일을 마치면 정리 보고(Walkthrough)를 만든다. 무엇이 바뀌었는지 짧게 요약한다. — VERIFIED · https://antigravity.google/docs/walkthrough · 확인일 2026-11-01
> "The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation."

## 2.5 바뀐 내용 보기(Review 창)

**2-23** 앱의 **Review** 창은 프로젝트 **Git 저장소**의 변경을 보여 준다(에이전트가 고친 것 포함). — VERIFIED · https://antigravity.google/docs/review-changes · 확인일 2026-11-01
> "In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits."

**2-24** 보기 선택 중 **Agent Edits** 는 이 대화에서 에이전트가 고친 파일만 보여 준다. 기본값은 **Uncommitted**(아직 커밋 안 된 모든 변경 — 내가 고친 것도 포함). — VERIFIED · https://antigravity.google/docs/review-changes · 확인일 2026-11-01
> "| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |"
> "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |"

**2-25** 한 차례에서 바뀐 것만 보려면 답 아래의 **N files changed** 카드에서 **Review** 를 누른다. — VERIFIED · https://antigravity.google/docs/review-changes · 확인일 2026-11-01
> "To see only what the agent changed in one turn, click **Review** on that turn’s **N files changed** card."

---

# 3장 근거 — 규칙과 스킬

## 3.1 어디서 찾나

**3-01** 작업 폴더 쪽: 프로젝트의 `.agents/` 폴더와 `AGENTS.md`·`GEMINI.md`. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files."

**3-02** 개인 쪽: `~/.gemini/config/` 폴더와 `~/.gemini/AGENTS.md`·`~/.gemini/GEMINI.md`. 앱과 CLI 모두, 모든 프로젝트에 적용된다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "**Personal**: the `~/.gemini/config/` folder in your home directory, plus `~/.gemini/AGENTS.md` and `~/.gemini/GEMINI.md`. These customizations apply to every project, in both the Antigravity App and the Antigravity CLI."

**3-03** 종류별 위치 표: 규칙 = `rules/*.md`·`AGENTS.md`·`GEMINI.md`, 스킬 = `skills/<이름>/SKILL.md`. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "| [Rules](/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |"
> "| [Skills](/docs/skills) | `skills/<name>/SKILL.md` |"

**3-04** 규칙 파일로 인정되는 이름은 `AGENTS.md`·`GEMINI.md`·`.agents/rules/` 다. `CLAUDE.md` 는 목록에 없다(문서 전체 검색에서 `CLAUDE.md` 언급 0건). — VERIFIED(목록) · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root."

**3-05** 작업 폴더에서 저장소 꼭대기(`.git` 이 있는 폴더)까지 거슬러 올라가며 찾는다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "Antigravity checks the workspace folder and each parent folder up to the root of its repository, such as the folder that contains `.git`."

**3-06** 저장소가 아니면 작업 폴더 하나만 본다. 「정리도구」처럼 Git이 아닌 폴더는 그 폴더 바로 안의 `AGENTS.md`·`.agents/` 만 읽힌다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "It stops at the repository root. If the workspace folder isn’t in a repository, it checks only the workspace folder."

**3-07** 한 단계만 훑는다. 스킬 폴더는 `skills/` 바로 안에, 규칙 파일은 `rules/` 바로 안에 있어야 한다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "Antigravity scans each customization folder one level deep. A skill folder must sit directly inside `skills/`, and a rule file directly inside `rules/`."

**3-08** CLI만 추가로 `~/.gemini/antigravity-cli/skills/`·`~/.gemini/skills/` 를 읽고, 앱은 이 둘을 읽지 않는다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "The Antigravity CLI also loads skills from `~/.gemini/antigravity-cli/skills/` and `~/.gemini/skills/`, which the Antigravity App doesn’t read."

**3-09** 개인 스킬을 앱과 CLI 둘 다에서 쓰려면 `~/.gemini/config/skills/` 에 둔다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`."

**3-10** 규칙은 서로 덮어쓰지 않고 찾은 것을 전부 쓴다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "Rules don’t replace each other: Antigravity loads every rule it finds."

**3-11** 앱에서 무엇이 읽혔는지 보기: 왼쪽 아래 **Settings** → **Projects** 에서 프로젝트 선택 → **Skills**·**Rules** 목록. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "Click **Settings** at the bottom of the left sidebar."
> "The section shows how many tokens your customizations use, followed by lists of **Skills**, **Rules**, **Plugins**, and **Custom Agents**."

**3-12** 규칙과 스킬은 매 차례 전에 다시 읽으므로, 고친 파일은 재시작 없이 다음 메시지부터 적용된다. — VERIFIED · https://antigravity.google/docs/customization-discovery · 확인일 2026-11-01
> "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart."

## 3.2 규칙(Rules)

**3-13** 규칙은 대화가 바뀌어도 계속 지키는 지시다. 파일에서 자동으로 찾아 넣는다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "Rules are persistent instructions, coding standards, and architectural constraints that shape how Antigravity behaves in your codebase."

**3-14** 규칙은 "지켜야 할 것", 스킬은 "여러 단계 작업 방법"에 쓴다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)."

**3-15** `AGENTS.md`·`GEMINI.md` 는 머리말 없이 쓰고, 내용 전체가 항상 켜져 있다(`always_on`). Codex 장에서 만든 `AGENTS.md` 가 그대로 쓰인다는 근거다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)."

**3-16** `rules/` 안의 `.md` 는 반드시 머리말에 `trigger` 를 적어야 한다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`."

**3-17** 머리말이 없거나 `trigger` 값이 틀리면 **아무 말 없이 버린다**. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule."

**3-18** `trigger` 값은 네 가지: `model_decision`(설명을 보고 필요할 때) · `always_on` · `glob`(특정 파일을 만질 때) · `manual`(직접 부를 때만). — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "| `trigger` | `string` | **Yes** | Controls how and when the rule activates: `model_decision`, `always_on`, `glob`, or `manual`. |"

**3-19** `manual` 규칙은 `@` 로 멘션할 때만 붙는다. CLI는 규칙 멘션을 지원하지 않는다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "Antigravity adds the rule to your message only when you [`@`\-mention it](/docs/at-mentions) (ideal for release checklists or audit rubrics). The Antigravity CLI doesn’t support rule mentions."

**3-20** 전체 규칙(모든 프로젝트): `~/.gemini/AGENTS.md`·`~/.gemini/GEMINI.md`·`~/.gemini/config/AGENTS.md`·`~/.gemini/config/GEMINI.md` 는 머리말 없이 항상 켜짐. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`"

**3-21** 앱에서는 **Customizations** 패널에서 **+ Global**(전체) 또는 **+ Workspace**(이 프로젝트) 로 규칙을 만든다. — VERIFIED · https://antigravity.google/docs/rules · 확인일 2026-11-01
> "Open the **Customizations** panel from the application menu or project settings."
> "Click **\+ Global** to create global rules, or **\+ Workspace** to create rules scoped to the active project."

## 3.3 스킬(Skills)

**3-22** 스킬은 `SKILL.md` 가 든 폴더다. 공개 표준(Agent Skills)을 따른다. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "A skill is a folder containing a `SKILL.md` file with instructions that the agent can follow when working on specific tasks."

**3-23** 기본 위치는 `.agents/skills` 이고, 옛 `.agent/skills` 도 읽는다. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "**Note**: Antigravity defaults to `.agents/skills`, but still maintains backward compatibility for `.agent/skills`."

**3-24** 머리말: `name` 은 선택(없으면 폴더 이름), `description` 은 필수. 에이전트는 `description` 을 보고 쓸지 정한다. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "| `name` | No | A unique identifier for the skill (lowercase, hyphens for spaces). Defaults to the folder name if not provided. |"
> "| `description` | Yes | A clear description of what the skill does and when to use it. This is what the agent sees when deciding whether to apply the skill. |"

**3-25** 스킬을 쓰라고 일일이 말할 필요는 없다. 꼭 쓰게 하려면 이름을 말하면 된다. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used."

**3-26** 앱에서 부르는 방법 두 가지: 에이전트가 알아서 / 입력창에 `/<스킬이름>` 을 쳐서 직접. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "**Autonomous invocation**: The agent automatically reads and follows relevant skills based on your prompt."
> "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill."

**3-27** 앱의 스킬 위치 표: 작업 폴더 `.agents/skills/<폴더>/`, 전체 `~/.gemini/config/skills/<폴더>/`. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "| `<workspace-root>/.agents/skills/<skill-folder>/` | Workspace-specific |"
> "| `~/.gemini/config/skills/<skill-folder>/` | Global (all workspaces) |"

**3-28** CLI는 스킬마다 슬래시 명령을 자동으로 만든다(`deploy-staging` → `/deploy-staging`). — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "Whenever you define a skill, the CLI **automatically converts it into a slash command** inside the interactive TUI."
> "For example, creating a skill named `deploy-staging` makes `/deploy-staging` available in the prompt box."

**3-29** CLI를 켠 채 스킬을 더했으면 `/skills reload` 를 치거나 새 대화를 시작한다. — VERIFIED · https://antigravity.google/docs/skills · 확인일 2026-11-01
> "If you add a skill while the CLI is running, run `/skills reload` or start a new conversation to update the slash commands."

**3-30** `/learn` 은 이번 대화에서 고쳐 준 것을 규칙·스킬로 남기자고 제안하고, 승인한 뒤에만 파일을 쓴다. — VERIFIED · https://antigravity.google/docs/slash-commands · 확인일 2026-11-01
> "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve."

**3-31** 헤드리스(`-p`)에서도 `/` 로 시작하는 프롬프트는 슬래시 명령이나 스킬로 실행된다. 이를 끄는 설정이 `disableSlashCommands` 다. — VERIFIED · https://antigravity.google/docs/cli/reference · 확인일 2026-11-01
> "| **`disableSlashCommands`** | boolean | `false` | In [headless mode](/docs/cli/headless) (`-p`), sends prompts that start with `/` as typed instead of running slash commands or skills. Same as `--disable-slash-commands`. |"

**3-32** CLI에는 Claude Code의 **플러그인**(`~/.claude/plugins/`)을 가져오는 명령(`agy plugin import claude`)이 있다. 규칙 파일(`CLAUDE.md`)·`.claude/skills` 를 옮기는 기능은 문서에 없다. — VERIFIED(플러그인만) · https://antigravity.google/docs/plugins · 확인일 2026-11-01
> "**Import extensions from Gemini CLI or Claude Code**: Migrate existing extensions from `~/.gemini/extensions/` or `~/.claude/plugins/` (or pass a specific directory path):"

---

# 4장 근거 — 권한·샌드박스·되돌리기

## 4.1 앱의 권한 프리셋(개인 계정)

**4-01** **Request Review**: 샌드박스 꺼짐, 모든 터미널 명령에 허락. 작업 폴더 읽기·쓰기는 되고 나머지는 허락. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval. The agent can read and write the workspace, and needs approval for anything else."

**4-02** **Default**: 샌드박스 안 명령은 묻지 않고, 밖에서 돌릴 때만 허락. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](/docs/sandbox); running outside the sandbox requires approval."

**4-03** **Auto (Preview)**: 샌드박스 밖 명령은 Antigravity가 판단해, 안전하고 되돌릴 수 있는 것은 그냥 하고 위험한 것은 묻는다. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval."

**4-04** **Turbo**: 제한 없이 모든 명령을 묻지 않고 실행, 컴퓨터 전체를 읽고 쓴다. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem."

**4-05** Auto는 v2.23.0 이상, 회사·기업 계정은 아직 못 쓴다. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "**Auto (Preview)** is available in `v2.23.0+`. It isn’t currently available for business or enterprise accounts, including [Antigravity in Gemini Enterprise](/docs/enterprise)."

**4-06** 바꾸는 곳: 전체는 **Settings > General > Global Permissions > Permission Preset**, 또는 입력창의 권한 선택기. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**."
> "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker."

**4-07** 프로젝트별로 덮어쓸 수 있고, 기본은 **Inherit Global** 이다. 개인 계정의 처음 전체 프리셋이 무엇인지는 문서에 없다(확인 못 한 것 #5). — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "Projects default to **Inherit Global**, which follows your global preset."

**4-08** 회사·기업 계정은 예전 권한 설정(Require Review / Proceed in Sandbox / Always Proceed)을 쓴다. 독자 화면과 다를 수 있다. — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "Business and enterprise accounts use the following settings instead of the permission presets above."

## 4.2 권한 규칙

**4-09** 에이전트의 민감한 동작은 `action(target)` 모양(예: `command(git)`)으로 표현된다. — VERIFIED · https://antigravity.google/docs/permissions · 확인일 2026-11-01
> "Every sensitive operation the agent performs is represented as a **permission resource** formatted as `action(target)`."

**4-10** 규칙이 겹치면 Deny(막기) > Ask(묻기) > Allow(허용) 순서다. — VERIFIED · https://antigravity.google/docs/permissions · 확인일 2026-11-01
> "**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**."

**4-11** 기본값: 프로젝트 폴더 안 파일 읽기·쓰기는 묻지 않음, 밖의 파일은 허락 필요. — VERIFIED · https://antigravity.google/docs/permissions · 확인일 2026-11-01
> "**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval."

**4-12** 웹 페이지 읽기(`read_url`)·조작(`execute_url`)은 기본이 묻기다. MCP 도구도 기본이 묻기다. — VERIFIED · https://antigravity.google/docs/permissions · 확인일 2026-11-01
> "**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**."
> "**MCP tools default to Ask**: Unconfigured MCP tool calls prompt for approval."

**4-13** Default 프리셋의 샌드박스는 작업 폴더·임시 폴더만 쓰고 **인터넷이 없다**. 인터넷이 필요하면 밖에서 돌리자고 허락을 구한다. — VERIFIED · https://antigravity.google/docs/permissions · 확인일 2026-11-01
> "**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**."

**4-14** 대화 중에 허락한 것이 남아, 믿을 만한 동작을 점점 배운다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time."

**4-15** 기본으로 프로젝트 폴더 안만 읽고 쓴다. Turbo처럼 넓히면 컴퓨터 전체가 된다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "By default, your agent can only read and write within the provided folders of a project."
> "If you broaden your permission settings (for example, by choosing the **Turbo** preset), the agent has read and write access over your full machine."

## 4.3 터미널 샌드박스(울타리)

**4-16** 앱의 터미널 샌드박스는 **기본으로 켜져 있다**. — VERIFIED · https://antigravity.google/docs/sandbox · 확인일 2026-11-01
> "Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents."

**4-17** `~/.ssh`·`.env` 같은 민감한 파일은 막히고, 인터넷은 승인한 곳만. — VERIFIED · https://antigravity.google/docs/sandbox · 확인일 2026-11-01
> "Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved."

**4-18** 프리셋별 샌드박스: Default·Auto = 켜짐, Request Review·Turbo = 꺼짐. — VERIFIED · https://antigravity.google/docs/sandbox · 확인일 2026-11-01
> "| **Default** | On | Allowed in sandbox; ask outside |"
> "| **Turbo** | Off | Allowed without prompting, unrestricted |"

## 4.4 되돌리기

**4-19** 앱 Review 창의 **Discard unstaged changes** 는 확인 없이 바로 적용되고, 추적 안 되는 새 파일도 디스크에서 지운다. 기본 보기(Uncommitted)는 내가 고친 것도 보여 주므로 함께 지워질 수 있다(필자 판단, 2-24). — VERIFIED · https://antigravity.google/docs/review-changes · 확인일 2026-11-01
> "**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk."

**4-20** (앱 변경 기록 v2.19.1) "Confirm Undo" 대화상자에 대화만 되돌리는 선택지가 생겼다. 즉 앱에도 되돌리기가 있고, 기본은 파일까지 되돌리는 것으로 읽힌다(필자 판단). 쓰는 법을 설명한 페이지는 없다 → 확인 못 한 것 #6. — VERIFIED(기록 존재) · https://antigravity.google/docs/changelog · 확인일 2026-11-01
> "The Confirm Undo dialog now offers an option to revert only the conversation."
> "The Confirm Undo dialog now keeps the file list at a fixed size and scrolls it in place, so Confirm and Cancel stay visible when reverting many files."

**4-21** (앱 변경 기록) 대화를 되감을 때 저장해 둔 파일 상태(snapshot)를 쓴다. — VERIFIED · https://antigravity.google/docs/changelog · 확인일 2026-11-01
> "**Rewinding a conversation no longer restores out-of-date files.** The snapshot search used to sweep backward from the point you rewound to, so it could hand back a state from earlier in the conversation."

**4-22** (앱 변경 기록) 앱은 내부 체크포인트를 Git으로 저장하는 것으로 보인다(Git 설정 때문에 저장이 막히던 문제를 고침). — VERIFIED · https://antigravity.google/docs/changelog · 확인일 2026-11-01
> "Fixed an issue where git hooks or global git configuration on your machine could stop the app from saving its internal checkpoints."

**4-23** CLI: 에이전트가 망쳐 놓았으면 세션을 버리지 말고 `/rewind`(또는 `/undo`)로 앞의 안정된 상태로 되돌린다. — VERIFIED · https://antigravity.google/docs/cli/best-practices · 확인일 2026-11-01
> "Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout."

**4-24** CLI 명령표의 `/rewind`: 대화 기록을 이전 메시지로 되돌린다. — VERIFIED · https://antigravity.google/docs/cli/reference · 확인일 2026-11-01
> "| **`/rewind`** | Conversations | `/undo` | Roll back your conversation history to a previous message. |"

**4-25** (CLI 변경 기록) `/rewind` 는 작업 폴더 스냅샷도 되돌린다. 예전에는 남겨 둔 작업을 덮어쓸 수 있던 버그가 있었다. — VERIFIED · https://antigravity.google/docs/changelog · 확인일 2026-11-01
> "Fixed `/rewind` conversation reverts and forks sweeping backward to an older workspace snapshot when recent snapshot commits were skipped, which could silently overwrite kept work; snapshot lookup now sweeps forward from the target step and falls back to step-by-step revert replay when no later snapshot exists."

## 4.5 CLI의 기본값(앱과 다름)

**4-26** CLI 기본 권한 `request-review` 는 파일 쓰기·명령·웹 도구 전에 묻는다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches."

**4-27** CLI의 터미널 샌드박스는 **기본으로 꺼져 있다**. `auto` 모드면 자동으로 켜진다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "The [terminal sandbox](/docs/sandbox) is off by default."

**4-28** CLI는 작업 폴더 밖 파일을 읽거나 고치기 전에 묻는다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "The agent asks before it reads or edits files outside your workspace folders."

**4-29** CLI 처음 실행 때 이 폴더를 믿는지 확인한다(Workspace trust). — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing."

---

# 5장 근거 — 계획·예약·브라우저·목표·원격

## 5.1 계획(`/plan`, `/grill-me`)

**5-01** 보통 지시는 바로 파일을 고치기 시작하지만, `/plan` 은 먼저 살펴보고 결정할 점을 보여 준다. — VERIFIED · https://antigravity.google/docs/plan · 확인일 2026-11-01
> "While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review."

**5-02** **Proceed** 를 누르면 실행으로 넘어간다. — VERIFIED · https://antigravity.google/docs/plan · 확인일 2026-11-01
> "**Proceed**: Click **Proceed** to transition the agent into execution mode."

**5-03** `/grill-me` 는 시작 전에 한 번에 한 질문씩, 추천 답과 함께 묻는다. — VERIFIED · https://antigravity.google/docs/slash-commands · 확인일 2026-11-01
> "The agent asks one question at a time and recommends an answer for each."

## 5.2 예약 — `/schedule` 과 Automations

**5-04** `/schedule` 은 한 번 울리는 타이머나 반복 일정을 만든다. 기다리는 동안 대화는 막히지 않는다. — VERIFIED · https://antigravity.google/docs/commands/schedule · 확인일 2026-11-01
> "Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits."

**5-05** `/schedule` 은 만든 대화에 속한다. 대화를 넘어 계속 도는 일은 Automation을 쓴다. — VERIFIED · https://antigravity.google/docs/commands/schedule · 확인일 2026-11-01
> "**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](/docs/sidecars) instead."

**5-06** 비교표: `/schedule` 은 지금 대화 동안만, Automations는 세션·재시작을 넘어 유지되고 매번 새 대화로 시작한다. — VERIFIED · https://antigravity.google/docs/commands/schedule · 확인일 2026-11-01
> "| **Lifetime** | Current conversation | Persists across sessions and restarts |"
> "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |"

**5-07** **Automations**(예전 이름 scheduled tasks)는 자리를 비운 동안에도 일정에 맞춰 에이전트에게 메시지를 보낸다. 왼쪽 사이드바 **Automations** 에서 연다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away."

**5-08** Automation마다 모델 등급을 고른다: Flash Lite · Flash(기본) · Pro. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro."

**5-09** 정확한 분에 돌지 않는다. 간격의 10%까지, 최대 15분 흩어진다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes."

**5-10** **Run Now** 로 바로 한 번 돌리고, **Create with Prompt** 로 대화하며 만든다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one."

**5-11** 에이전트가 일하는 중이면 컴퓨터가 잠들지 않게 막는다. 앱이 꺼졌거나 컴퓨터가 잠든 동안 Automation이 도는지는 문서에 없다(확인 못 한 것 #7). — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "If an agent is running, Antigravity prevents your computer from sleeping."

## 5.3 브라우저(`/browser`)

**5-12** `/browser` 는 Google Chrome을 모는 브라우저 서브에이전트에게 웹 일을 맡긴다. — VERIFIED · https://antigravity.google/docs/commands/browser · 확인일 2026-11-01
> "Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings."

**5-13** 브라우저 세션은 모두 WebM 영상으로 녹화돼 결과물에 저장된다. — VERIFIED · https://antigravity.google/docs/commands/browser · 확인일 2026-11-01
> "**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video."

**5-14** 페이지에서 자바스크립트 실행은 기본으로 허락을 묻는다. — VERIFIED · https://antigravity.google/docs/commands/browser · 확인일 2026-11-01
> "Running JavaScript in the page (`evaluate_script`) prompts for your approval by default."

## 5.4 목표(`/goal`)

**5-15** `/goal` 은 목표를 다 이룰 때까지 중간에 멈추지 않고 계속 일하게 한다. — VERIFIED · https://antigravity.google/docs/commands/goal · 확인일 2026-11-01
> "The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step."

**5-16** 반복 횟수 상한이 없다. 끝났다고 하거나 내가 멈추라고 할 때까지 돈다. 사용량을 많이 쓸 수 있으니 완료 기준을 분명히 적게 안내한다(필자 판단). — VERIFIED · https://antigravity.google/docs/commands/goal · 확인일 2026-11-01
> "**Runs until done or cancelled**: there’s no iteration cap."

**5-17** 목표 모드는 멈추는 방식만 바꾸고 권한·검토 정책은 그대로다. — VERIFIED · https://antigravity.google/docs/commands/goal · 확인일 2026-11-01
> "Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](/docs/permissions) or [artifact review policies](/docs/artifact-review), so any approvals you’d normally be asked for still apply."

## 5.5 원격 조종(Remote Control)

**5-18** 앱에서 켜기: **Settings** → **Application** → **Enable Remote Control**. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "In **Settings**, open **Application** and turn on **Enable Remote Control**."

**5-19** 다른 기기의 웹 브라우저에서 데스크톱과 같은 Google 계정으로 로그인한다. — VERIFIED · https://antigravity.google/docs/remote-control · 확인일 2026-11-01
> "Sign in with the same Google Account that you used on your desktop application."

**5-20** 원격으로 써도 일은 내 컴퓨터의 파일·도구·로그인 정보로 한다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment."

## 5.6 서브에이전트(간단히)

**5-21** 주 에이전트가 조사·빌드 같은 일을 서브에이전트에게 나눠 준다. 각자 깨끗한 맥락에서 따로 돈다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "Each subagent starts with a clean context and runs in its own conversation, in parallel with your main conversation."

---

# 6장 근거 — 터미널 `agy`

## 6.1 설치·로그인·시작

**6-01** macOS·Linux 설치 명령과 설치 위치(`~/.local/bin/agy`). — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "curl -fsSL https://antigravity.google/cli/install.sh | bash"
> "Default binary location: `~/.local/bin/agy`"

**6-02** 앱에서 이미 로그인했으면 운영체제 키체인에서 찾아 브라우저 없이 로그인된다. 없으면 브라우저가 열린다. — VERIFIED · https://antigravity.google/docs/install · 확인일 2026-11-01
> "If a valid token profile is found, the CLI authenticates your session silently without opening a browser."
> "The CLI automatically launches your local default web browser."

**6-03** 폴더에서 `agy` 를 치면 대화 화면(TUI)이 열린다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "| `agy` | Launches the interactive TUI in the current directory. |"

**6-04** Ctrl+R 로 Artifact Review 화면(계획·바뀐 내용)을 연다. — VERIFIED · https://antigravity.google/docs/getting-started · 확인일 2026-11-01
> "| Ctrl + R | Open the **Artifact Review** screen to inspect plans and diffs |"

**6-05** CLI는 별도 지정이 없으면 `default-cli-project` 라는 프로젝트에서 돈다. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "**Default project**: Conversations run in the `default-cli-project` unless you start the CLI with `--project=<project_id>` or `--new-project`."

**6-06** 설정 파일은 `~/.gemini/antigravity-cli/settings.json`, 화면에서는 `/config` 또는 `/settings`. — VERIFIED · https://antigravity.google/docs/cli/using · 확인일 2026-11-01
> "**Configuration file**: Stored in a plain JSON file at `~/.gemini/antigravity-cli/settings.json`."

## 6.2 실행 모드와 권한

**6-07** `default` 모드: 파일을 만들거나 고치기 전에 바뀐 내용을 보여 주고, 명령 전에 묻는다. — VERIFIED · https://antigravity.google/docs/cli/modes · 확인일 2026-11-01
> "| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |"

**6-08** `accept-edits`: 작업 폴더 안 파일 수정은 자동, 명령은 여전히 묻는다. — VERIFIED · https://antigravity.google/docs/cli/modes · 확인일 2026-11-01
> "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |"

**6-09** Shift+Tab 으로 `default` → `accept-edits` → `auto` → `plan` 순서로 돈다. — VERIFIED · https://antigravity.google/docs/cli/modes · 확인일 2026-11-01
> "Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`."

**6-10** `auto` 를 못 쓰는 계정·컴퓨터면 `default` 로 시작하고 순환에서 빠진다. — VERIFIED · https://antigravity.google/docs/cli/modes · 확인일 2026-11-01
> "If `auto` mode isn’t available for your account or platform, the CLI starts in `default` mode, and `auto` doesn’t appear in Shift + Tab cycling or `/config`."

**6-11** `--dangerously-skip-permissions` 는 모든 도구를 묻지 않고 실행한다(`always-proceed`). — VERIFIED · https://antigravity.google/docs/agent-settings · 확인일 2026-11-01
> "`always-proceed`: Runs all tools without prompting (overrides `auto` mode; also activated by `--dangerously-skip-permissions`)."

**6-12** `/permissions` 는 규칙을 보고 더하고 고치고 지우는 화면을 연다. — VERIFIED · https://antigravity.google/docs/cli/commands/permissions · 확인일 2026-11-01
> "While you can configure these rules manually in your settings file, the `/permissions` command opens an interactive **Permissions Manager** TUI panel to view, add, edit, and delete rules live."

## 6.3 헤드리스 `agy -p`

**6-13** 헤드리스(인쇄) 모드는 프롬프트 하나를 보내고 답을 받은 뒤 끝난다. 묻는 창이 없으므로 정책으로 처리한다. — VERIFIED · https://antigravity.google/docs/cli/headless · 확인일 2026-11-01
> "Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits."
> "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy."

**6-14** 허락이 필요한 도구는 "조용히 거절"된다. 실행은 계속되고 종료 코드 0, 무엇이 막혔는지 `stderr` 에 알린다. — VERIFIED · https://antigravity.google/docs/cli/headless · 확인일 2026-11-01
> "A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it."

**6-15** **작업 폴더 안 파일 읽기·쓰기는 자동 허용**, 명령은 기본이 묻기라 헤드리스에서는 거절된다. — VERIFIED · https://antigravity.google/docs/cli/headless · 확인일 2026-11-01
> "Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them."

**6-16** 헤드리스는 저장된 로그인을 쓴다. 먼저 대화형 `agy` 로 한 번 로그인해 둔다. — VERIFIED · https://antigravity.google/docs/cli/headless · 확인일 2026-11-01
> "**Note:** Headless mode uses your cached credentials. Authenticate once with an interactive `agy` session first."

**6-17** `--dangerously-skip-permissions` 경고: 파일 쓰기·명령까지 모두 승인한다. 범위를 좁힌 허용 규칙을 쓰라고 권한다. — VERIFIED · https://antigravity.google/docs/cli/headless · 확인일 2026-11-01
> "**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment."

**6-18** 헤드리스 기본 대기 시간 — **충돌**. 헤드리스 페이지는 "기본 5분"이라 하고, CLI 변경 기록은 "기본을 5분에서 무제한으로 바꿨다"고 한다. 본문에는 숫자를 쓰지 않고 `--print-timeout` 으로 정한다고만 쓴다. — 충돌 · https://antigravity.google/docs/cli/headless · https://antigravity.google/docs/changelog · 확인일 2026-11-01
> "By default, a run waits up to five minutes for a response."
> "Changed the default timeout for headless (`-p` / `--prompt`) runs from 5 minutes to unlimited so long-running agent turns run until the response completes unless `--print-timeout` is passed explicitly, and enabled daemon background commands in headless `GEMINI_API_KEY` sessions so background servers stay running after the turn finishes."

## 6.4 대화 이어 하기

**6-19** CLI의 대화 기록은 실행한 폴더별로 나뉜다. — VERIFIED · https://antigravity.google/docs/cli/conversations · 확인일 2026-11-01
> "When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory."

**6-20** `/resume` 으로 고르거나, `agy -c` 로 그 폴더의 마지막 대화를 바로 잇는다. — VERIFIED · https://antigravity.google/docs/cli/conversations · 확인일 2026-11-01
> "Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace."

**6-21** `/resume` 화면의 **Other** 탭에서 앱에서 시작한 대화를 CLI로 가져올 수 있다. — VERIFIED · https://antigravity.google/docs/cli/commands/resume · 확인일 2026-11-01
> "You can import and resume active threads initiated in the Antigravity App:"

## 6.5 사용량·크레딧

**6-22** `/usage`(별칭 `/quota`)로 모델별 사용량을 본다. 크레딧 잔액은 `/credits` 다(cli/commands/credits 페이지). — VERIFIED · https://antigravity.google/docs/cli/commands/usage · 확인일 2026-11-01
> "Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption."

**6-23** CLI에서는 크레딧 자동 사용 설정 이름이 **Use G1 Credits**(on/off)다. 앱 문서의 **AI Credit Overages**(Never/Always, 1-12)와 이름이 다르다. 같은 설정인지 화면으로 확인한다(확인 못 한 것 #11). — VERIFIED · https://antigravity.google/docs/cli/credits · 확인일 2026-11-01
> "Set the **Use G1 Credits** field to **on** to allow the CLI to use your personal credits when plan quotas are exhausted, or set it to **off** to restrict fallback billing."

---

# 7장 근거 — 비용·데이터·안전

## 7.1 약관과 데이터

**7-01** 개인 계정은 Google 서비스 약관에서 나온 약관을, 팀은 Gemini Enterprise의 Google Cloud 약관을 따른다. — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "Google Antigravity is available to individual accounts under [terms](/terms) derived from Google’s Terms of Service, and to teams under Google Cloud terms in Gemini Enterprise."

**7-02** 데이터 수집은 **Settings** 패널에서 언제든 끌 수 있다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "You can opt out of data collection at any point from the **Settings** panel."

**7-03** **Enable Telemetry** 는 Settings의 **Account** 항목에 있다. 켜 두면 대화가 Antigravity와 그 모델을 평가·개발·개선하는 데 쓰인다. — VERIFIED · https://antigravity.google/docs/settings · 확인일 2026-11-01
> "The **Enable Telemetry** setting is located in the Settings panel under the **Account** section. When toggled on, Antigravity collects interactions for use in evaluating, developing, and improving Antigravity and models that support Antigravity."

## 7.2 계정 사용 규칙

**7-04** Claude Code·OpenClaw·OpenCode 같은 다른 프로그램으로 Antigravity 로그인을 쓰면 약관 위반이고, 계정이 정지될 수 있다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Using third-party software, tools, or services to access Antigravity is a violation of our [Terms of Service](/terms) and severely degrades the experience for legitimate product users. Such actions can result in suspension or termination of your account."

**7-05** `agy -p` 는 직접 스크립트·CI용이다. 다른 코딩 에이전트 안에 감싸 쓰거나 계정을 돌려 쓰는 것은 개인 플랜에서 지원하지 않는다. — VERIFIED · https://antigravity.google/docs/faq · 확인일 2026-11-01
> "Wrapping `agy` inside third-party coding agents or applications, or automating account rotation, is not supported under consumer plans."

## 7.3 안전 장치

**7-06** 프로젝트마다 보안 설정을 다르게 둘 수 있다. 믿는 프로젝트는 느슨하게, 믿지 못하는 폴더는 엄격하게. — VERIFIED · https://antigravity.google/docs/features · 확인일 2026-11-01
> "This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder."

**7-07** (IDE 브라우저) 위험한 주소 차단 목록과 허용 목록 두 겹이다. 허용 목록은 처음에 `localhost` 만 있다. — VERIFIED · https://antigravity.google/docs/ide/allowlist-denylist · 확인일 2026-11-01
> "The allowlist is initialized with only `localhost`, and you can edit it at any time."

**7-08** (IDE 브라우저) 차단 목록이 언제나 이긴다. 차단 서버에 닿지 않으면 접근을 막는다. 앱의 `/browser` 에도 같은 목록이 쓰이는지는 문서에 없다(확인 못 한 것 #12). — VERIFIED · https://antigravity.google/docs/ide/allowlist-denylist · 확인일 2026-11-01
> "However, the denylist always takes precedence: you cannot allowlist a URL that appears on the denylist."
> "**Note:** If the server is unavailable, access is denied by default."

## 7.4 회사용(간단히)

**7-09** Gemini Enterprise로 쓰면 모든 세션이 Google Cloud 보안·데이터 위치 보장·Cloud 약관을 따른다. — VERIFIED · https://antigravity.google/docs/enterprise · 확인일 2026-11-01
> "Every session runs under Google Cloud’s enterprise security controls, data residency guarantees, and the Google Cloud Terms of Service."

## 7.5 비용 요약

**7-10** 무료로 시작할 수 있다. 사용량은 일의 양에 따라 줄고(1-10), 무료는 주 단위로 다시 채워진다(1-09). 한도 숫자는 문서에 없다(확인 못 한 것 #1). — VERIFIED · https://antigravity.google/docs/plans · 확인일 2026-11-01
> "As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota."

---

# Claude Code·Codex·Antigravity 대응표

Claude Code 쪽 이름은 `2026-10-31_Claude-Code-공식-자료.md`, Codex 쪽 이름은 `2026-11-01_Codex-공식-자료.md` 를 따랐다(이 리포트에서 다시 확인하지 않음). Antigravity 쪽 근거는 위 항목 번호와 원문이다.

| 개념 | Claude Code | Codex | Antigravity | 근거 인용 |
|---|---|---|---|---|
| 데스크톱 화면 | 데스크톱 앱 Code 탭 | ChatGPT 앱에서 Codex 선택 | **Antigravity App**(독립 앱) | "The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." (1-02) |
| 터미널 | `claude` | `codex` | `agy` | "\| `agy` \| Launches the interactive TUI in the current directory. \|" (6-03) |
| 작업 단위 | 폴더 열기 | 프로젝트(폴더) | **Projects**(폴더 여러 개 가능) | "Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." (2-07) |
| 규칙 파일 | `CLAUDE.md` | `AGENTS.md`(`CLAUDE.md` 안 읽음) | `AGENTS.md`·`GEMINI.md`(`CLAUDE.md` 언급 없음) | "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." (3-04) |
| 개인 규칙 | `~/.claude/CLAUDE.md` | `~/.codex/AGENTS.md` | `~/.gemini/AGENTS.md` 등 | "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" (3-20) |
| 조건부 규칙 | `.claude/rules/`(paths) | — | `.agents/rules/*.md`(`trigger`) | "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." (3-16) |
| 프로젝트 스킬 | `.claude/skills/` | `.agents/skills/` | `.agents/skills/`(Codex와 같음) | "\| `<workspace-root>/.agents/skills/<skill-folder>/` \| Workspace-specific \|" (3-27) |
| 개인 스킬 | `~/.claude/skills/` | `$HOME/.agents/skills` | `~/.gemini/config/skills/` | "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." (3-09) |
| 스킬 직접 부르기 | `/스킬이름` | `$스킬이름` | `/스킬이름`(앱·CLI) | "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." (3-26) |
| 묻고 하기 | Manual(묻기) | Ask for approval | Request Review / CLI `default` | "**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." (4-01) |
| 울타리 안 자동 | — | (샌드박스 기본) | **Default** 프리셋(앱) | "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](/docs/sandbox); running outside the sandbox requires approval." (4-02) |
| 파일 수정 자동 | Accept edits | — | CLI `accept-edits` | "In this mode, all standard file creations, edits, and replacements inside your workspace run automatically." (6-08) |
| 자동 판단 | Auto(분류기) | Approve for me | **Auto (Preview)** | "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." (4-03) |
| 권한 건너뛰기 | 권한 건너뛰기 | Full access / `--yolo` | **Turbo** / `--dangerously-skip-permissions` | "**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." (4-04) |
| 계획 먼저 | Plan 모드 | `/plan` | `/plan`·Planning mode·CLI `plan` | "While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." (5-01) |
| 되돌리기 | 체크포인트·되감기 | 해당 기능 못 찾음 → Git | CLI `/rewind`(`/undo`), 앱 Confirm Undo(변경 기록만) | "Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." (4-23) |
| 바뀐 내용 보기 | diff 보기 | 리뷰 창(Git 필요) | **Review** 창(Git) / CLI `/diff` | "In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." (2-23) |
| 대화 속 타이머 | `/loop` | — | `/schedule`(대화 안에서만) | "**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](/docs/sidecars) instead." (5-05) |
| 반복 예약 | 데스크톱 예약 작업 | Scheduled(앱 실행·컴퓨터 켜짐) | **Automations**(조건 문서 없음) | "Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." (5-07) |
| 휴대폰에서 조종 | Remote Control | Control this Mac or PC | **Enable Remote Control**(웹 브라우저) | "In **Settings**, open **Application** and turn on **Enable Remote Control**." (5-18) |
| 한 번 실행 | `claude -p` | `codex exec`(기본 읽기 전용) | `agy -p`(작업 폴더 쓰기 자동 허용) | "Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." (6-15) |
| 대화 잇기 | `claude --resume` | `codex resume` / `/resume` | `/resume` / `agy -c` | "Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." (6-20) |
| 권한 규칙 관리 | `/permissions` | CLI `/permissions` | CLI `/permissions` · 앱 Settings | "While you can configure these rules manually in your settings file, the `/permissions` command opens an interactive **Permissions Manager** TUI panel to view, add, edit, and delete rules live." (6-12) |
| 배운 것 남기기 | 자동 메모리 | Codex memories | `/learn`(승인 후 규칙·스킬로) | "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." (3-30) |

---

# 확인 못 한 것 / 화면에서 확인할 것

| # | 내용 | 왜 못 정했나 | 처리 |
|---|---|---|---|
| 1 | **무료·Pro·Ultra의 사용 한도 숫자** | plans 페이지는 "meaningful/high/highest"와 갱신 주기만 적음(1-07~1-09). 한도는 바뀔 수 있다고 함(1-14) | 숫자 없이 Settings의 사용량 화면 안내 |
| 2 | **한국어 화면 이름** 전부(New Project, Add Folder, Review, Automations, Customizations, Permission Preset, Enable Telemetry 등) | 영어 문서뿐. 앱에 한국어 화면이 있는지도 문서에 없음(설정 문서에 언어 항목 검색 0건) | 실제 앱 캡처로 확정. 본문은 "화면 이름(영어 원문)" 병기 |
| 3 | **`CLAUDE.md` 를 읽는지** | 규칙 위치 목록(3-01, 3-04, 3-20)에 없고 문서 전체 검색에서 언급 0건. 읽지 않는다고 적은 문장도 없음 | 「정리도구」 폴더(CLAUDE.md·AGENTS.md 둘 다 있음)에서 Settings > Projects 의 Rules 목록(3-11)으로 확인 |
| 4 | **Git이 아닌 폴더에서 Review 창·되돌리기 동작** | 폴더 추가는 "working directories"도 받지만(2-08) Review 창은 "Git repository"의 변경을 보여 준다고만 함(2-23) | 「정리도구」(비 Git)로 시험. Git으로 만들자고 안내할지 그 뒤 결정 |
| 5 | **개인 계정의 처음 전체 권한 프리셋** | 프로젝트는 Inherit Global(4-07), 샌드박스는 "기본 켜짐"(4-16)이라 Default로 추정되나 명시 문장 없음 | Settings > General > Global Permissions 캡처 |
| 6 | **앱의 되돌리기(Undo) 쓰는 법** | 변경 기록에 "Confirm Undo" 대화상자·되감기·내부 체크포인트(4-20~4-22)만 있고, 버튼 위치·범위를 설명한 페이지 없음. 명령으로 바뀐 파일도 되돌리는지 불명 | 앱에서 시험(대화 메시지의 되돌리기 버튼 찾기). 본문 확정 사실은 Review 창 버리기(4-19)와 CLI `/rewind`(4-23)만 |
| 7 | **Automations 실행 조건**(앱이 꺼져 있을 때, 컴퓨터가 잠들었을 때) | features는 "자리를 비운 동안에도"(5-07)라고만 함. FAQ는 에이전트가 일하는 중 잠자기 방지만(5-11) | Codex·Claude Code 데스크톱 예약과 같은지 실습으로 확인. 본문은 "앱을 켜 두고 컴퓨터를 깨워 두면 안전하다"는 필자 권고로만 |
| 8 | **Automations 만드는 화면 절차** | 문서는 Run Now·Create with Prompt(5-10)만 적음. 무료 플랜에서 Automations 모델 등급(Pro) 선택 가능 여부도 불명 | Automations 화면 캡처(저장하지 않음) |
| 9 | **Enable Telemetry 의 처음 값**(개인 계정) | 켜면 무엇이 되는지만 적음(7-03) | 설정 화면 캡처. 본문에 "켜져 있으면 끄는 법"을 안내 |
| 10 | **프롬프트 인젝션(숨은 지시) 경고** | `injection`·`untrusted` 검색에서 관련 경고 문장 없음(서브에이전트 예시·플러그인 설명에만 단어 등장) | 본문은 다른 장의 일반 원칙 + 실습(숨은 지시 메모)으로 다룬다 |
| 11 | **크레딧 자동 사용 설정 이름**: 앱 AI Credit Overages(Never/Always) vs CLI Use G1 Credits(on/off) | 두 페이지 이름이 다름(1-12, 6-23) | 화면 확인. 무료 독자에게는 해당 없음(Pro·Ultra만, 1-11) |
| 12 | **앱 `/browser` 의 주소 허용·차단 목록** | 허용/차단 목록 페이지는 "Available on: Antigravity IDE"(7-07). 앱은 `read_url` 권한으로 묻는다(4-12) | 본문은 앱 = 권한 묻기로만 쓴다 |
| 13 | **헤드리스 기본 대기 시간** | 헤드리스 페이지 5분 vs 변경 기록 무제한(6-18) | 본문에 숫자 쓰지 않음 |
| 14 | **개인 계정 데이터의 보관 기간·학습 제외 보장** | 회사용 "학습 안 함" 문구는 개요 페이지의 화면 카드 글자에만 있어 인용하지 않음. 개인 약관(`/terms`)은 내려받은 문서 범위 밖 | 필요하면 https://antigravity.google/terms 를 따로 확인 |
| 15 | **IDE 확장·Antigravity IDE 실습** | 이번 가이드 범위 밖(1-04만 확인) | 본문은 "이런 것도 있다" 한 줄 |
| 16 | **앱 버전별 화면 차이** | 권한 선택기·Auto는 v2.23.0+(4-05) | 캡처 때 앱 버전을 함께 적는다 |

# 갱신 기록

- 2026-11-01 작성. 초안 212항목에서 가이드에 덜 필요한 항목을 덜어 159항목으로 줄이고 번호를 다시 매겼다. 공식 문서 마크다운 원문 91개 페이지(2026-11-01 내려받음) 기준. 기준 버전: 앱 v2.28.2, CLI v1.4.10(변경 기록 맨 위 항목). 화면 미리보기 글자는 인용하지 않았다.
- 2026-11-01 실습 확인(Antigravity CLI `agy` 1.4.12, `-p` + `--mode accept-edits`, 연습 폴더 `정리도구-ag` = Codex 5장 상태). 개인 `~/.gemini/GEMINI.md`·`~/.gemini/config/GEMINI.md` 가 이 맥에 있어 실행에 함께 들어갔다.
  - #3 보강: `AGENTS.md` 를 폴더 밖으로 치우자 에이전트가 `AGENTS.md`·`CLAUDE.md`·`GEMINI.md` 를 `read_file` 로 직접 찾아 열었다. `AGENTS.md` 가 있을 때는 열지 않고도 그 규칙(「원본과 대조할 것」 절)을 지켰다 — 같은 메모로 0 → 1. `CLAUDE.md` 는 두 번 모두 스스로 열어 읽었다(규칙 자동 적재는 아님).
  - 스킬을 말하지 않아도 첫 동작이 `.agents/skills/meeting-notes/SKILL.md` 읽기. "weekly-review 스킬로"라고 하자 `.agents/skills/weekly-review/SKILL.md` 를 읽고 회고 메모 3개로 회고 — 확인할 사실 8개 모두 포함.
  - 숨은 지시 메모: 0회, 답에서 "프롬프트 인젝션 지시문이므로 실행하지 않고 무시"라고 먼저 알림.
  - 6-15 와 다르게 관찰: 신뢰 폴더(`trustedWorkspaces`)에 없는 폴더에서 `-p` 만 쓰면 `write_file`·`read_file` 이 거절됐다(4-29 workspace trust 영향으로 추정). 셸 명령(`ls`·`date`)이 거절되면 아무것도 만들지 않고 종료 코드 0으로 끝난 적이 3회. `--mode accept-edits` + "셸 명령은 쓰지 말고"로 해결. 읽기 전용 목록 표에서 파일 1개 누락.
  - ⚠️ 7-04·7-05: 다른 프로그램(코딩 에이전트)으로 Antigravity에 접근하거나 `agy` 를 감싸 쓰는 것은 개인 요금제에서 지원하지 않고 약관 위반일 수 있다. 이 실습은 Claude Code 세션 안에서 `agy` 를 불러 실행했다 — 사용자에게 보고.
