# 6장. 예약·클라우드·휴대폰 — 정해진 때 저절로, 자리를 비워도

> **한 줄 요약**: 매주 같은 일은 **예약**(Scheduled)으로 돌립니다. 내 폴더를 쓰는 예약은 **컴퓨터가 켜져 있고 앱이 실행 중**이어야 돕니다.
> 클라우드는 GitHub 저장소가 있는 사람을 위한 것이고, 휴대폰은 내 컴퓨터를 조종하는 리모컨처럼 씁니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서를 바탕으로 썼습니다. 이 가이드는 예약을 실제로 저장하지 않았습니다. 실제 작업 내용이 드러나고 사용량을 쓰기 때문입니다([Claude Code 8장](../20-claude-code/08-parallel-cloud-schedule.md)과 같은 이유).

## 예약으로 매주 주간 회고 돌리기

예약 작업은 반복할 일을 정해 두고 뒤에서 돌리는 기능입니다.[^schedule] 앱 사이드바의 **Scheduled**에서 예약과 실행 기록을 모두 봅니다.[^inbox]

예약은 데스크톱 앱이나 웹에서 만들고, 터미널(Codex CLI)에는 예약 관리 화면이 없습니다.[^no-cli] 예약도 대화로 만듭니다.[^chat-create] 예약 안에서 `$스킬이름`으로 스킬을 부를 수도 있습니다.[^skill] 5장의 스킬을 쓰면 이렇게 부탁할 수 있습니다.

```
매주 금요일 오후 6시에 $weekly-review 로 그 주의 주간 회고를 notes 폴더에 만들어 줘.
```

**조건이 있습니다.** 내 컴퓨터의 폴더를 쓰는 예약은 컴퓨터가 켜져 있고 앱이 실행 중일 때만 돕니다.[^awake] macOS·Linux의 **Prevent sleep while running** 설정은 대화가 **도는 동안** 컴퓨터가 잠들지 않게 해, 자리를 비워도 대화가 이어지게 합니다.[^sleep] 예약 시각까지 컴퓨터를 깨워 두는 기능은 아니니, 예약을 쓰려면 컴퓨터의 절전 설정을 따로 확인하세요.

예약은 **사람 없이** 돕니다. 그래서 내 기본 울타리(샌드박스) 범위는 그대로 쓰되, 조직이 막지 않으면 **허락을 묻지 않는 방식**으로 돕니다.[^unattended] 울타리 밖의 일은 물어볼 사람이 없으니 실패한다고 보면 됩니다.

| 내 기본 권한(울타리) | 예약에서 일어나는 일 |
|---|---|
| 읽기만 | 파일을 써야 하는 예약은 실패 |
| 폴더 안 쓰기 | 정리도구처럼 폴더 안에서만 쓰는 일은 돔 |
| Full access | 묻지 않고 파일·명령·인터넷까지 씀. 위험 |

출처: Codex 공식 문서(일부만 옮김, 가운데 줄은 이 가이드의 정리)[^modes]

4장의 권한 메뉴로 말하면, Ask for approval과 Approve for me는 가운데 줄(폴더 안 쓰기)의 울타리를, Full access는 마지막 줄을 씁니다.[^ask] 다만 예약에서는 Ask for approval이어도 **물어보지 않습니다.** "읽기만"은 메뉴에 따로 보이지 않을 수 있는 설정입니다.

예약을 만들기 전에 **같은 요청을 평소 대화에서 먼저 돌려 보세요.** 5장처럼 결과를 원본과 맞춰 보고 괜찮을 때 예약으로 옮깁니다. 첫 몇 번의 실행 결과도 꼭 확인합니다. 공식 문서도 같은 순서를 권합니다.[^test]

<Quiz id="ch506-schedule" />

## 클라우드는 무엇이 다른가

클라우드 작업은 인터넷 너머의 작업 공간에서 돌아서, 내 컴퓨터가 잠든 동안에도 계속됩니다.[^cloud] 대신 조건이 있습니다.

- 내가 쓸 수 있는 **게시된 환경**(published environment)이 있어야 합니다.[^env]
- 환경을 만들려면 **GitHub 저장소**를 고르고 연결합니다.[^github]
- 내 컴퓨터의 파일, 실행 중인 프로그램, 브라우저 로그인은 클라우드로 넘어가지 않습니다.[^not-moved]

정리도구 폴더는 내 컴퓨터에만 있으니 이 가이드는 클라우드를 쓰지 않습니다. 회사에서 GitHub로 일한다면, 오래 걸리는 일을 클라우드로 보내고 컴퓨터를 꺼도 된다는 점만 기억해 두세요.

<Quiz id="ch506-cloud" />

## 휴대폰으로 이어 보기

휴대폰에서는 진행 상황을 보고, 허락하고, 지시를 보낼 수 있습니다. 실제 작업은 클라우드나 **연결된 내 컴퓨터**에서 돕니다.[^mobile] 내 컴퓨터를 연결하려면 앱의 **Settings → Connections → Control this Mac or PC**에서 **Set up**을 누릅니다.[^connect]

연결은 QR 코드로 합니다. 공식 문서는 **내가 가진, 믿을 수 있는 기기만** 연결하라고 합니다.[^trust] 연결된 휴대폰은 내 컴퓨터의 Codex를 움직일 수 있기 때문입니다.

공식 문서는 iOS 앱을 기준으로 설명합니다. 기능은 계정마다 순서대로 열리므로 내 휴대폰에 아직 없을 수 있습니다.[^rollout]

<Quiz id="ch506-mobile" />

## 직접 해 보기

1. 사이드바에서 **Scheduled**를 열어 본다(만들지 않아도 된다).
2. 5장의 `$weekly-review`를 평소 대화로 한 번 더 돌리고 결과를 확인한다.
3. 예약을 만든다면 일이 폴더 안에서 끝나는지 확인하고, 첫 실행 결과를 원본과 맞춘다.

**이어지는 과제**: 7장에서는 같은 정리도구를 터미널의 `codex exec` 한 줄로 확인합니다.

## 정리

- 예약은 대화로 만들고 Scheduled에서 본다. `$스킬`을 예약에서 부를 수 있다.
- 내 폴더를 쓰는 예약은 컴퓨터가 켜져 있고 앱이 실행 중이어야 한다.
- 예약은 사람 없이 돌아 기본 권한을 그대로 쓴다. Full access는 위험하다.
- 클라우드는 GitHub 저장소와 게시된 환경이 필요하다. 내 파일은 넘어가지 않는다.
- 휴대폰은 내 컴퓨터나 클라우드를 조종한다. 믿을 수 있는 기기만 연결한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Scheduled | 스케줄드 | 예약 작업과 실행 기록을 보는 곳 |
| Published environment | 퍼블리시드 인바이런먼트 | 클라우드 작업이 시작하는 준비된 작업 공간 |
| Unattended | 언어텐디드 | 사람이 지켜보지 않는 상태로 실행 |

<ChapterDone :chapter="506" />

다음 장: [7장. 터미널에서 쓰기](07-terminal.md)

[^schedule]: Codex 공식 문서, 「Scheduled tasks」. "Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^inbox]: Codex 공식 문서, 「Scheduled tasks」. "Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^chat-create]: Codex 공식 문서, 「Scheduled tasks」. "You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^skill]: Codex 공식 문서, 「Scheduled tasks」. "In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^awake]: Codex 공식 문서, 「Scheduled tasks」. "Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^sleep]: Codex 공식 문서, 「Settings」. "On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings (확인일 2026-11-01)
[^unattended]: Codex 공식 문서, 「Scheduled tasks」. "Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^modes]: Codex 공식 문서, 「Scheduled tasks」. "If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^test]: Codex 공식 문서, 「Scheduled tasks」. "Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
[^cloud]: Codex 공식 문서, 「Codex Cloud」. "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (확인일 2026-11-01)
[^env]: Codex 공식 문서, 「Codex environments」. "A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes (확인일 2026-11-01)
[^github]: Codex 공식 문서, 「Codex Cloud」. "Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud (확인일 2026-11-01)
[^not-moved]: Codex 공식 문서, 「Codex environments」. "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (확인일 2026-11-01)
[^mobile]: Codex 공식 문서, 「Codex on mobile」. "Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile (확인일 2026-11-01)
[^connect]: Codex 공식 문서, 「Codex on mobile」. "Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile (확인일 2026-11-01)
[^trust]: Codex 공식 문서, 「Codex on mobile」. "Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile (확인일 2026-11-01)
[^rollout]: Codex 공식 문서, 「Codex on mobile」. "Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile (확인일 2026-11-01)
[^ask]: Codex 공식 문서, 「Permissions」. "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^no-cli]: Codex 공식 문서, 「Scheduled tasks」. "Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations (확인일 2026-11-01)
