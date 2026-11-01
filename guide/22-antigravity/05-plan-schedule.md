# 5장. 계획·예약·브라우저·목표 — 슬래시 명령으로 일 맡기기

> **한 줄 요약**: `/plan`은 고치기 전에 계획부터, `/schedule`은 **이 대화 안에서만** 도는 타이머, 대화를 넘어 계속 도는 예약은 **Automations**입니다.
> `/browser`는 Chrome을 움직여 웹 일을 하고, `/goal`은 다 될 때까지 멈추지 않습니다. 둘 다 사용량을 많이 쓸 수 있습니다.

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서를 바탕으로 썼습니다. 이 가이드는 예약을 실제로 저장하지 않았습니다. 실제 작업 내용이 드러나고 사용량을 쓰기 때문입니다([Claude Code 8장](../20-claude-code/08-parallel-cloud-schedule.md)과 같은 이유).

## 계획부터 받기 — `/plan`

보통 요청은 바로 파일을 고치기 시작합니다. `/plan`을 쓰면 먼저 폴더를 살펴보고, 결정할 점을 정리해 보여 줍니다.[^plan] 계획이 괜찮으면 **Proceed**를 눌러 실행으로 넘어갑니다.[^proceed]

```
/plan 회의록·공부 노트·주간 회고 양식에 '작성일' 칸을 넣으려고 해. 무엇을 바꿔야 하는지 계획만 먼저 보여 줘.
```

요구 사항이 아직 흐릿하면 `/grill-me`가 도움이 됩니다. 시작 전에 **한 번에 한 질문씩**, 추천 답과 함께 묻습니다.[^grill] Claude Code 5장에서 배운 "잘 맡기는 법"을 도구가 대신 끌어내 주는 셈입니다.

<Quiz id="ch605-plan" />

## 예약 — `/schedule`과 Automations

Antigravity에는 예약이 **두 종류** 있습니다.

| | `/schedule` | Automations |
|---|---|---|
| 사는 곳 | 만든 대화 안 | 대화 밖(앱 사이드바) |
| 얼마나 | 그 대화 동안 | 앱을 다시 켜도 유지 |
| 매번 | 같은 대화를 깨움 | 새 대화로 시작 |

출처: Antigravity 공식 문서(일부만 옮김)[^compare]

`/schedule`은 한 번 울리는 타이머나 반복 일정을 만들고, 기다리는 동안 대화를 막지 않습니다.[^schedule] 하지만 그 대화에 속하므로, **매주 금요일 주간 회고**처럼 계속 돌릴 일은 **Automations**를 씁니다.[^scoped]

Automations는 자리를 비운 동안에도 정해 둔 일정에 따라 에이전트에게 메시지를 보냅니다.[^automations] 앱 사이드바의 **Automations**에서 엽니다. 몇 가지를 알아 두세요.

- 실행마다 모델 등급(Flash Lite·Flash·Pro)을 고릅니다. 기본은 Flash입니다.[^tier]
- 정확한 분에 돌지 않습니다. 간격의 10%까지, 최대 15분 흩어져 돕니다.[^jitter]
- **Run Now**로 바로 한 번 돌려 보거나, **Create with Prompt**로 에이전트와 대화하며 만들 수 있습니다.[^run-now]

에이전트가 일하는 동안에는 컴퓨터가 잠들지 않게 막습니다.[^sleep] 하지만 **앱이 꺼져 있거나 컴퓨터가 잠든 동안에도 Automations가 도는지는 공식 문서에 나오지 않습니다.** Claude Code·Codex의 데스크톱 예약처럼, 앱을 켜 두고 컴퓨터를 깨워 두는 편이 안전합니다(이 가이드의 권고).

예약을 만들기 전에 같은 요청을 평소 대화에서 먼저 돌려 보고, Run Now로 한 번 시험한 뒤 일정을 거세요.

<Quiz id="ch605-schedule" />

## 브라우저와 목표 — `/browser`·`/goal`

`/browser`는 웹 일을 **브라우저 담당 서브에이전트**에게 맡깁니다. 이 서브에이전트가 Google Chrome을 움직여 페이지를 열고, 누르고, 화면을 찍습니다.[^browser] 브라우저 세션은 모두 **영상으로 녹화**돼 결과물에 남습니다.[^recorded] 페이지에서 스크립트를 실행하는 동작은 기본으로 허락을 묻습니다.[^js]

`/goal`은 목표를 다 이룰 때까지 중간에 멈추지 않고 일하게 합니다.[^goal] 반복 횟수 상한이 없어서, 끝났다고 판단하거나 내가 멈출 때까지 돕니다.[^no-cap] 그만큼 사용량을 많이 쓸 수 있으니, **"다 됐다"의 기준을 분명히** 적어 주세요. 예를 들면 이렇습니다.

```
/goal inbox의 메모 6개를 모두 양식대로 notes에 정리해. 다 된 기준: 메모마다 결과 파일이 하나씩 있고, 각 파일 맨 아래에 「원본과 대조할 것」 절이 있다.
```

목표 모드는 **멈추는 방식만** 바꿉니다. 권한과 검토 설정은 그대로라서, 평소 허락을 묻던 일은 여전히 묻습니다.[^goal-perm]

<Quiz id="ch605-browser-goal" />

## 다른 기기에서 이어 보기

앱의 **Settings → Application → Enable Remote Control**을 켜면, 다른 기기의 웹 브라우저에서 내 컴퓨터의 Antigravity를 조종할 수 있습니다.[^remote][^any-browser] 다른 기기에서도 **데스크톱과 같은 Google 계정**으로 로그인합니다.[^same-account]

원격으로 써도 일은 **내 컴퓨터**의 파일·도구·로그인 정보로 합니다.[^local] 편리한 만큼, 원격 조종은 믿을 수 있는 기기에서만 켜세요.

<Quiz id="ch605-remote" />

## 직접 해 보기

1. `/plan`으로 위의 '작성일' 칸 계획만 받아 보고, Proceed 전에 계획을 읽는다.
2. 사이드바의 Automations를 열어 본다(만들지 않아도 된다).
3. 예약을 만든다면 먼저 평소 대화와 Run Now로 시험한다.
4. `/goal`을 쓴다면 "다 된 기준"을 함께 적는다.

**이어지는 과제**: 6장에서는 터미널 `agy`로 같은 정리도구를 확인하고, 이 가이드가 실제로 겪은 함정들을 봅니다.

## 정리

- `/plan`은 계획 먼저, `/grill-me`는 한 번에 한 질문씩 요구 사항을 끌어낸다.
- `/schedule`은 그 대화 안에서만, 계속 돌릴 일은 Automations.
- Automations가 앱이 꺼졌을 때도 도는지는 문서에 없다. 앱을 켜 두고 컴퓨터를 깨워 두는 편이 안전하다.
- `/browser`는 Chrome을 움직이고 녹화한다. `/goal`은 멈추지 않으니 완료 기준을 준다.
- 원격 조종은 같은 계정으로, 일은 내 컴퓨터에서 한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Automations | 오토메이션즈 | 대화를 넘어 계속 도는 예약 |
| Subagent | 서브에이전트 | 주 에이전트가 일을 나눠 맡기는 보조 에이전트 |
| Remote Control | 리모트 컨트롤 | 다른 기기에서 내 컴퓨터의 Antigravity를 조종하기 |

<ChapterDone :chapter="605" />

다음 장: [6장. 터미널에서 쓰기](06-terminal.md)

[^plan]: Antigravity 공식 문서, 「Plan (/plan)」. "While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan (확인일 2026-11-01)
[^proceed]: Antigravity 공식 문서, 「Plan (/plan)」. "**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan (확인일 2026-11-01)
[^grill]: Antigravity 공식 문서, 「Slash commands overview」. "The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands (확인일 2026-11-01)
[^compare]: Antigravity 공식 문서, 「Schedule command (/schedule)」. "| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule (확인일 2026-11-01)
[^schedule]: Antigravity 공식 문서, 「Schedule command (/schedule)」. "Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule (확인일 2026-11-01)
[^scoped]: Antigravity 공식 문서, 「Schedule command (/schedule)」. "**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule (확인일 2026-11-01)
[^automations]: Antigravity 공식 문서, 「Antigravity features」. "Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features (확인일 2026-11-01)
[^tier]: Antigravity 공식 문서, 「Antigravity features」. "**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features (확인일 2026-11-01)
[^jitter]: Antigravity 공식 문서, 「Antigravity features」. "Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features (확인일 2026-11-01)
[^run-now]: Antigravity 공식 문서, 「Antigravity features」. "**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features (확인일 2026-11-01)
[^sleep]: Antigravity 공식 문서, 「FAQ」. "If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq (확인일 2026-11-01)
[^browser]: Antigravity 공식 문서, 「Browser command (/browser)」. "Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser (확인일 2026-11-01)
[^recorded]: Antigravity 공식 문서, 「Browser command (/browser)」. "**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser (확인일 2026-11-01)
[^js]: Antigravity 공식 문서, 「Browser command (/browser)」. "Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser (확인일 2026-11-01)
[^goal]: Antigravity 공식 문서, 「Goal command (/goal)」. "The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal (확인일 2026-11-01)
[^no-cap]: Antigravity 공식 문서, 「Goal command (/goal)」. "**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal (확인일 2026-11-01)
[^goal-perm]: Antigravity 공식 문서, 「Goal command (/goal)」. "Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal (확인일 2026-11-01)
[^remote]: Antigravity 공식 문서, 「Antigravity features」. "In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features (확인일 2026-11-01)
[^same-account]: Antigravity 공식 문서, 「Remote Control」. "Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control (확인일 2026-11-01)
[^local]: Antigravity 공식 문서, 「Antigravity features」. "**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features (확인일 2026-11-01)
[^any-browser]: Antigravity 공식 문서, 「Remote Control」. "Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control (확인일 2026-11-01)
