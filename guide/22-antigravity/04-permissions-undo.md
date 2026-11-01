# 4장. 권한과 되돌리기 — 프리셋 넷, 버리기는 조심

> **한 줄 요약**: 앱의 권한은 **프리셋 네 개**(Request Review·Default·Auto·Turbo)로 고릅니다. 처음에는 **Request Review**나 **Default**로 시작하세요.
> Review 창의 **버리기는 확인 없이 바로** 적용됩니다. 터미널에는 `/rewind`가 있지만, 가장 확실한 안전망은 여전히 Git 기록입니다.

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서를 바탕으로 썼습니다. 권한이 왜 필요한지는 [Claude Code 4장](../20-claude-code/04-permissions-undo.md)에서 설명했습니다. 개인 Google 계정 기준이며, 회사·기업 계정은 권한 화면이 다릅니다.[^business]

## 권한 프리셋 네 가지

| 프리셋 | 명령 실행 | 언제 |
|---|---|---|
| Request Review | 모든 명령에 허락 | 처음, 조심스러운 일 |
| Default | 울타리 안에서는 묻지 않고, 밖으로 나갈 때 묻기 | 익숙해진 뒤 |
| Auto (Preview) | 안전한 명령은 알아서, 위험한 명령만 묻기 | 시험 기능 |
| Turbo | 제한 없이 모두 실행 | 거의 쓰지 않음 |

출처: Antigravity 공식 문서(일부만 옮김)[^presets]

**Turbo**는 울타리 없이 컴퓨터 전체를 읽고 쓸 수 있습니다.[^turbo] 메모 정리에는 필요 없습니다.

바꾸는 곳은 두 군데입니다.[^where]

- 모든 프로젝트: **Settings → General → Global Permissions → Permission Preset**
- 지금 대화: 입력창의 권한 선택기

프로젝트는 기본으로 전체 설정을 따르고(**Inherit Global**), 프로젝트마다 따로 정할 수도 있습니다.[^inherit] 믿는 프로젝트는 느슨하게, 믿지 못하는 폴더는 엄격하게 둘 수 있다는 뜻입니다.[^per-project] 개인 계정이 처음에 어떤 프리셋으로 시작하는지는 공식 문서에 나오지 않습니다. 앱을 열면 먼저 확인하세요.

<Quiz id="ch604-presets" />

## 울타리와 기본 규칙

앱에는 **터미널 울타리**(샌드박스)가 있고, **기본으로 켜져 있습니다.**[^sandbox] 울타리 안의 명령은 작업 폴더와 임시 폴더만 쓰고, **인터넷에 나가지 못합니다.**[^no-net] `~/.ssh`나 `.env`처럼 민감한 파일도 막힙니다.[^sensitive]

프리셋과 상관없이 기본 규칙도 있습니다.

- 프로젝트 폴더 **안** 파일 읽기·쓰기는 묻지 않습니다. **밖** 파일은 허락이 필요합니다.[^files]
- 웹 페이지 읽기와 조작은 기본이 "묻기"입니다.[^web]
- 규칙이 겹치면 막기(Deny) > 묻기(Ask) > 허용(Allow) 순서로 정합니다.[^order]

대화 중에 허락한 것은 남을 수 있어서, 에이전트가 믿을 만한 동작을 점점 배웁니다.[^persist] 편하지만, 무엇을 허락했는지 기억해 두세요.

**터미널(`agy`)의 기본값은 다릅니다.** 터미널은 파일 쓰기·명령·웹 도구 전에 묻고[^cli-ask], 울타리는 **기본으로 꺼져 있습니다.**[^cli-sandbox] 앱과 반대입니다. 6장에서 다룹니다.

<Quiz id="ch604-sandbox" />

## 되돌리기

**Review 창의 버리기는 조심하세요.** 「Discard unstaged changes」는 **확인 없이 바로** 적용되고, 기록되지 않은 새 파일까지 지웁니다.[^discard] 기본 보기에는 내가 고친 것도 들어 있으니([2장](02-first-task.md)), 버리기 전에 무엇이 들어 있는지 꼭 보세요.

터미널에는 대화를 앞의 안정된 상태로 되돌리는 `/rewind`(또는 `/undo`)가 있습니다.[^rewind] Claude Code의 되감기와 비슷한 기능입니다.

앱에도 되돌리기가 있는 것으로 보입니다. 공식 변경 기록에 "Confirm Undo" 확인 창이 대화만 되돌리는 선택지를 갖게 됐다는 내용이 있습니다.[^undo] 다만 **쓰는 법을 설명한 문서는 찾지 못했고**, 이 가이드도 앱에서 확인하지 못했습니다.

그래서 이 단계에서도 Codex 4장과 같은 습관을 씁니다.

1. 맡기기 전: Git으로 지금 상태를 기록해 둔다.
2. 맡긴다.
3. Review 창의 Agent Edits로 바뀐 것만 본다.
4. 좋으면 다시 기록하고, 아니면 되돌린다.

<Quiz id="ch604-undo" />

## 직접 해 보기

1. Settings → General → Global Permissions에서 지금 프리셋을 확인한다. 처음이면 Request Review나 Default로 둔다.
2. 정리도구 폴더의 지금 상태를 Git으로 기록한다.
3. 2장의 회의록에 "맨 위에 '작성일: 오늘 날짜' 한 줄을 추가해 줘"라고 부탁한다.
4. Review 창을 Agent Edits로 보고 바뀐 줄을 확인한다.

**이어지는 과제**: 5장에서는 계획(`/plan`), 예약(`/schedule`·Automations), 브라우저(`/browser`), 목표(`/goal`)를 살펴봅니다.

## 정리

- 앱 권한은 프리셋 넷. 처음에는 Request Review나 Default, Turbo는 쓰지 않는다.
- 앱의 울타리는 기본으로 켜져 있고 인터넷이 막혀 있다. 터미널은 반대로 기본 꺼짐.
- 프로젝트 폴더 안 파일은 묻지 않고, 밖과 웹은 묻는다.
- Review 창 버리기는 확인 없이 바로 지운다. 맡기기 전에 Git으로 기록해 둔다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Permission preset | 퍼미션 프리셋 | 권한을 한 번에 정하는 묶음 |
| Sandbox | 샌드박스 | 명령이 손댈 수 있는 범위를 막는 울타리 |
| Discard | 디스카드 | 바뀐 내용을 버리기 |
| `/rewind` | 리와인드 | 터미널에서 대화를 앞 상태로 되돌리는 명령 |

<ChapterDone :chapter="604" />

다음 장: [5장. 계획·예약·브라우저·목표](05-plan-schedule.md)

[^business]: Antigravity 공식 문서, 「Agent settings」. "Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings (확인일 2026-11-01)
[^presets]: Antigravity 공식 문서, 「Agent settings」. "**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings (확인일 2026-11-01)
[^turbo]: Antigravity 공식 문서, 「Agent settings」. "**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings (확인일 2026-11-01)
[^where]: Antigravity 공식 문서, 「Agent settings」. "**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." https://antigravity.google/docs/agent-settings (확인일 2026-11-01)
[^inherit]: Antigravity 공식 문서, 「Agent settings」. "Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (확인일 2026-11-01)
[^per-project]: Antigravity 공식 문서, 「Antigravity features」. "This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features (확인일 2026-11-01)
[^sandbox]: Antigravity 공식 문서, 「Terminal sandbox」. "Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox (확인일 2026-11-01)
[^no-net]: Antigravity 공식 문서, 「Agent permissions」. "**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions (확인일 2026-11-01)
[^sensitive]: Antigravity 공식 문서, 「Terminal sandbox」. "Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox (확인일 2026-11-01)
[^files]: Antigravity 공식 문서, 「Agent permissions」. "**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions (확인일 2026-11-01)
[^web]: Antigravity 공식 문서, 「Agent permissions」. "**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions (확인일 2026-11-01)
[^order]: Antigravity 공식 문서, 「Agent permissions」. "**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions (확인일 2026-11-01)
[^persist]: Antigravity 공식 문서, 「Antigravity features」. "Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features (확인일 2026-11-01)
[^cli-ask]: Antigravity 공식 문서, 「Antigravity features」. "The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features (확인일 2026-11-01)
[^cli-sandbox]: Antigravity 공식 문서, 「Antigravity features」. "The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features (확인일 2026-11-01)
[^discard]: Antigravity 공식 문서, 「Review changes」. "**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes (확인일 2026-11-01)
[^rewind]: Antigravity 공식 문서, 「CLI best practices」. "Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices (확인일 2026-11-01)
[^undo]: Antigravity 공식 문서, 「Changelog」. "The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog (확인일 2026-11-01)
