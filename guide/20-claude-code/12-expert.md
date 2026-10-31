# 12장. 전문가처럼 쓰기 — 일에 맞게 고르고, 필요할 때 하나씩 쌓기

> **한 줄 요약**: 전문가는 기능을 많이 쓰는 사람이 아니라, **일의 크기에 맞는 기능을 고르는** 사람입니다. 처음부터 다 설정하지 말고, **같은 불편이 반복될 때** 하나씩 더합니다.
> 이 장은 3단계에서 만든 「정리 도구」를 매주 굴리는 루틴으로 마무리합니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서를 바탕으로 썼습니다. 어느 AI에나 통하는 "전문가처럼 쓰기" 원리는 [1단계 11장](../00-common/11-expert.md)에 있습니다. 여기서는 Claude Code의 기능을 고르고 쌓는 법만 다룹니다.

## 일의 크기에 맞게 고르기

| 이런 일이면 | 이걸 쓴다 | 배운 곳 |
|---|---|---|
| 질문 하나, 글 한 편 | 채팅(Claude 앱의 Chat) | [2단계](../10-claude/) |
| 내 폴더의 파일을 읽고 고치는 일 | Code 탭 세션 | [2장](02-install.md) |
| 크고 방법이 여러 가지인 일 | 「계획」 모드로 방법부터 | [5장](05-delegate-well.md) |
| 매번 다시 말하는 규칙 | CLAUDE.md | [6장](06-claude-md.md) |
| 같은 절차를 자주 하는 일 | 스킬(`/이름`) | [7장](07-skills-plugins.md) |
| 정해진 때 저절로 할 일 | 예약 작업 | [8장](08-parallel-cloud-schedule.md) |
| 한 줄 확인·자동화 | 터미널의 `claude -p` | [10장](10-terminal.md) |
| 잘못되면 되돌려야 하는 일 | 되감기 + Git 기록 | [4장](04-permissions-undo.md) |

공식 문서도 기능을 "세션마다 늘 보이는 것(CLAUDE.md)", "필요할 때 부르는 것(스킬)", "정해진 때 저절로 도는 것"으로 나눠 설명합니다.[^match] 큰 기능을 쓸수록 할 수 있는 일이 늘지만, 그만큼 확인할 것도 늘어납니다.

<Quiz id="ch412-choose" />

## 한 번에 다 만들지 말고 쌓아 가기

**처음부터 모든 것을 설정할 필요는 없습니다.** 공식 문서는 기능마다 "이럴 때 더하라"는 신호가 있다고 말합니다.[^build]

| 이런 일이 생기면 | 이걸 더한다 |
|---|---|
| 같은 규칙이나 명령을 두 번 틀린다 | CLAUDE.md에 적기 |
| 같은 요청으로 일을 자꾸 시작한다 | 스킬로 저장하기 |
| 같은 절차를 세 번째 붙여 넣는다 | 스킬로 저장하기 |
| 브라우저에서 자료를 자꾸 복사해 온다 | 그 서비스를 커넥터(MCP)로 연결하기 |
| 묻지 않아도 매번 일어나야 할 일이 있다 | 훅(정해진 순간에 자동으로 도는 명령) |

출처: Claude Code 공식 문서(일부만 옮김)[^build]

이 가이드의 정리 도구도 이 순서로 자랐습니다. 2장의 긴 요청 → 5장의 양식 → 6장의 CLAUDE.md → 7장의 스킬입니다. **불편을 먼저 겪고, 그다음에 도구를 만든** 것입니다.

같은 신호는 **이미 만든 것을 고칠 때**도 씁니다. 같은 실수가 또 나오면 채팅에서 한 번 고치고 끝내지 말고 CLAUDE.md를 고칩니다. 손으로 자꾸 고치는 절차가 있으면 스킬을 고칩니다.[^update]

<Quiz id="ch412-build" />

## 이제 안 해도 되는 습관

예전 모델에 필요했던 요령 중에는 지금은 오히려 방해가 되는 것도 있습니다. 공식 문서가 꼽는 것 중 이 가이드 독자에게 해당하는 것만 옮깁니다.[^stop]

| 예전 요령 | 지금은 |
|---|---|
| 중요한 지시에 "중요!"나 대문자를 붙인다 | 평범하게 적은 한 줄도 따른다. 강조를 쌓으면 규칙을 지나치게 적용한다 |
| "멈추지 말고 끝까지 해"라고 다그친다 | 합의한 일은 대개 끝까지 한다. 대신 확인 기준(5장)을 준다 |
| 폴더 구조를 CLAUDE.md에 길게 적는다 | 폴더는 Claude가 직접 읽는다. 폴더에 없는 것만 적는다 |

출처: Claude Code 공식 문서[^stop]

**꼭 지켜야 하는 규칙**이라면 강조 대신 다른 장치를 씁니다. 공식 문서는 굽힐 수 없는 규칙은 훅이나 거부 규칙으로 바꾸라고 합니다.[^stop] 이 가이드 독자라면 우선 4장의 권한 모드와 Git 기록으로 지키면 충분합니다.

<Quiz id="ch412-stop" />

## 매주 정리 루틴

3단계에서 만든 도구를 매주 이렇게 굴려 보세요.

1. **모으기**: 회의·공부·하루 회고 메모를 그때그때 `inbox`에 넣는다. 개인 정보는 지운다.
2. **정리하기**: `/meeting-notes`, `/study-notes`, 금요일엔 `/weekly-review`(또는 예약).
3. **확인하기**: Claude가 보여 준 **점검 결과와 "확인이 필요한 점"**을 읽고, 숫자·담당·기한을 원본과 맞춰 본다.
4. **기록하기**: 마음에 들면 커밋으로 남긴다(4장).
5. **고치기**: 같은 지적을 두 번 했다면 CLAUDE.md나 스킬을 고친다.

**처음부터 완벽할 필요는 없습니다.** 한 주에 한 번 돌리고, 불편했던 점 하나만 고쳐도 몇 주 뒤에는 나에게 꼭 맞는 도구가 됩니다.

<Quiz id="ch412-routine" />

## 정리

- 일의 크기에 맞게 고른다: 질문은 채팅, 파일 일은 Code, 큰 일은 계획 먼저, 반복은 CLAUDE.md·스킬, 정해진 때는 예약.
- 처음부터 다 설정하지 않는다. 같은 불편이 반복되면 그때 하나씩 더하고, 이미 만든 것도 같은 신호로 고친다.
- 강조나 다그침 대신 평범한 한 줄과 확인 기준을 준다. 꼭 지킬 규칙은 권한·Git 같은 장치로 지킨다.
- 모으기 → 정리하기 → 확인하기 → 기록하기 → 고치기를 매주 돌린다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Hook | 훅 | 정해진 순간마다 자동으로 도는 명령 |
| Routine | 루틴 | 매주 같은 순서로 굴리는 작업 습관(8장의 클라우드 예약 이름과는 다른 뜻) |

<ChapterDone :chapter="412" />

다음 장: 3단계 Claude Code 가이드를 마쳤습니다. [3단계 · Claude Code 목차](./)에서 다시 보고 싶은 장을 고르거나, [AI 지식 레벨 시험](../00-common/level-test.md)으로 지금까지 배운 것을 확인해 보세요.

[^match]: Claude Code 공식 문서, 「Extend Claude Code」. "Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview (확인일 2026-10-31)
[^build]: Claude Code 공식 문서, 「Extend Claude Code」. "You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview (확인일 2026-10-31)
[^update]: Claude Code 공식 문서, 「Extend Claude Code」. "A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview (확인일 2026-10-31)
[^stop]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices (확인일 2026-10-31)
