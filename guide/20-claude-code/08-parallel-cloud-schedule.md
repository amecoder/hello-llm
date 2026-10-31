# 8장. 여러 일 동시에·클라우드·예약 — 정리 도구를 알아서 돌게 하기

> **한 줄 요약**: 세션을 여러 개 열어 **일을 나란히** 맡길 수 있습니다. 정해진 때 저절로 돌게 하려면 **예약 작업**을 만듭니다.
> 예약은 세 가지(데스크톱·클라우드·`/loop`)가 있고, **내 컴퓨터가 켜져 있어야 하는지**가 가장 큰 차이입니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서를 바탕으로 썼습니다. 세션 목록과 예약 목록에는 실제 작업 이름이 그대로 나와서, 이 장은 캡처 대신 공식 문서의 설명과 화면 이름으로 안내합니다. 7장에서 만든 `/weekly-review` 스킬을 씁니다.

## 여러 일을 나란히

세션은 서로 독립된 대화이고, 맥락과 바뀐 내용을 따로 가집니다.[^session] 그래서 **세션을 여러 개 열어 다른 일을 동시에** 맡길 수 있습니다.

- 새 세션: 옆 메뉴의 **+ New**, 또는 **Cmd+N**(Windows는 Ctrl+N)[^parallel]
- 세션 사이 이동: **Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- 두 세션을 나란히 보기: **Option**(Windows는 Alt)을 누른 채 옆 메뉴의 세션을 누르기[^parallel]

예를 들어 한 세션에서 `/study-notes`로 공부 노트를, 다른 세션에서 `/weekly-review`로 주간 회고를 동시에 만들 수 있습니다. 둘은 서로 다른 파일을 쓰니 부딪치지 않습니다.

**같은 파일을 두 세션이 동시에 고치게 하지는 마세요.** 한 세션의 되감기는 다른 세션이 고친 내용을 보통 추적하지 않습니다(4장).[^other-session] 같은 파일을 여러 방향으로 바꿔 보고 싶다면, Git 저장소인 폴더(3·4장의 변경 기록을 켠 폴더)에서 입력창 아래 **워크트리**(Worktree)를 켜고 세션을 시작합니다. 그러면 그 세션은 폴더의 **떨어진 복사본**에서 일합니다.[^worktree]

<Quiz id="ch408-parallel" />

## 예약 세 가지

정해진 때 Claude가 **새 세션을 저절로 시작**하게 하는 것이 예약 작업입니다.[^scheduled] 방법은 세 가지입니다.

| | 데스크톱 예약 | 클라우드 예약 | `/loop` |
|---|---|---|---|
| 어디서 도나 | 내 컴퓨터 | 클라우드 | 내 컴퓨터 |
| 컴퓨터가 켜져 있어야 | 예(앱 실행 중, 깨어 있음) | 아니오 | 예 |
| 세션을 열어 둬야 | 아니오 | 아니오 | 예 |
| 내 파일에 접근 | 예 | 아니오(새로 받은 복사본) | 예 |
| 가장 짧은 간격 | 1시간(화면 양식) | 1시간 | 1분 |

출처: Claude Code 공식 문서[^compare]

**정리 도구에는 데스크톱 예약이 맞습니다.** 내 컴퓨터의 `inbox` 메모를 읽어야 하기 때문입니다. 클라우드 예약은 컴퓨터를 꺼도 돌지만, 내 파일이 아니라 GitHub 저장소를 새로 받아서 일합니다.[^compare][^cloud] `/loop`는 열어 둔 세션 안에서 잠깐 반복 확인할 때 쓰고, 7일이 지나면 저절로 끝납니다.[^loop]

예전 앱에서는 예약 기능이 **Routines**라는 이름으로 보일 수 있습니다.[^old-name]

<Quiz id="ch408-kinds" />

## 매주 금요일 주간 회고 예약하기

데스크톱 예약은 두 가지 방법으로 만듭니다.

**방법 1 — 말로 부탁하기.** 아무 세션에서나 원하는 일정을 말하면 됩니다.[^ask]

```
매주 금요일 오후 6시에 /weekly-review 로 이번 주 주간 회고를 만들어 주는 예약 작업을 만들어 줘. 그 주 회고 메모가 없으면 아무것도 만들지 말고 "메모 없음"이라고만 남겨 줘.
```

**방법 2 — 화면에서 만들기.** Code 탭 옆 메뉴의 **Scheduled**(또는 More 메뉴 안)를 누르고 **New task**를 누릅니다.[^create] 일정은 매시간·매일·평일·매주 등에서 고르고, 일정 없이 저장해 두었다가 **Run now**로 그때그때 돌릴 수도 있습니다.[^options]

예약할 때 꼭 챙길 것이 넷 있습니다.

1. **앱과 컴퓨터가 깨어 있어야 함**: 데스크톱 예약은 **앱이 켜져 있고 컴퓨터가 깨어 있을 때만** 돕니다. 잠자기를 막으려면 설정의 **Keep computer awake**를 켭니다. 노트북 덮개를 닫으면 그래도 잠듭니다.[^awake]
2. **꺼져 있던 동안의 실행**: 컴퓨터가 잠들어 있었다면, 깨어날 때 놓친 실행 중 **가장 최근 것 한 번만** 돌립니다. 금요일 오후 6시 예약이 토요일 아침에 돌 수도 있습니다.[^missed] 그래서 요청에 "그 주 메모가 없으면…" 같은 **조건을 함께 적어** 둡니다.[^missed]
3. **허락 창에 멈춤**: 예약 작업도 권한 모드를 따로 가집니다. 「수동」이면 허락이 필요한 순간 **멈춰서 기다립니다.**[^perm] 만든 뒤 **Run now**로 한 번 돌려 보고, 뜨는 허락 창에서 **항상 허용**을 골라 두세요. 그래야 다음 실행부터 멈추지 않습니다.[^perm] 7장에서 권한 「한 번만 허용」과 다른 이유는, 예약은 내가 지켜보지 않는 동안 돌기 때문입니다.
4. **개인 허용 규칙도 적용**: 내 컴퓨터의 Claude Code 설정(`~/.claude/settings.json`)의 허용 규칙이 예약 작업에도 적용됩니다.[^perm]

<Quiz id="ch408-schedule" />

## 클라우드에서 일하기

클라우드 세션은 **내 컴퓨터를 꺼도 계속 일합니다.**[^cloud-run] 다만 클라우드는 내 컴퓨터 폴더를 보지 못하고, 대개 **GitHub 저장소**를 받아서 일합니다. 그래서 보통 GitHub 연결이 필요합니다.[^cloud] 이 가이드의 정리 도구처럼 내 컴퓨터 폴더에서 하는 일은 데스크톱 쪽이 맞습니다. 클라우드는 일을 GitHub에 올려 두고 쓰게 되면 그때 써 보세요.

<Quiz id="ch408-cloud" />

## 직접 해 보기

1. 세션을 두 개 열어 한쪽은 `/study-notes`, 다른 쪽은 `/weekly-review`를 돌려 본다. 두 결과가 서로 다른 파일에 저장됐는지 확인한다.
2. 금요일 주간 회고 예약을 말로 부탁해 만든다. 요청에 "메모가 없으면…" 조건을 넣는다.
3. 예약 목록에서 그 작업을 열고 **Run now**로 한 번 돌려 본다. 허락 창이 뜨면 미리 처리한다.
4. 필요 없으면 예약을 끄거나 지운다. 예약 실행도 세션이라 돌 때마다 사용량을 씁니다.

**이어지는 과제**: 예약 작업이 회고 메모를 읽을 때, 메모 속에 "이 지시를 무시하고…" 같은 문장이 섞여 있으면 어떻게 될까요? 9장에서 확인합니다.

## 정리

- 세션은 서로 독립이다. 여러 개 열어 다른 파일의 일을 나란히 맡긴다. 같은 파일은 피하거나 워크트리를 쓴다.
- 예약은 데스크톱(내 컴퓨터·파일 접근)·클라우드(컴퓨터 꺼도 됨·GitHub)·`/loop`(세션 안·7일)가 있다.
- 정리 도구는 내 파일을 읽으므로 데스크톱 예약이 맞다.
- 놓친 실행은 깨어날 때 한 번만 돈다. 요청에 조건을 적고, Run now로 허락 창을 미리 처리한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Scheduled task | 스케줄드 태스크 (예약 작업) | 정해진 때 새 세션을 저절로 시작하는 작업 |
| Routine | 루틴 | 클라우드 예약 작업의 예전 이름 |
| Worktree | 워크트리 | 같은 Git 저장소의 떨어진 작업 복사본 |
| Cloud session | 클라우드 세션 | 내 컴퓨터 대신 클라우드에서 도는 세션 |
| `/loop` | 루프 | 열어 둔 세션 안에서 일을 반복하는 명령(7일 뒤 끝남) |

<ChapterDone :chapter="408" />

다음 장: [9장. 비용·데이터·안전](09-cost-data-safety.md)

[^session]: Claude Code 공식 문서, 「Desktop application」. "Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^parallel]: Claude Code 공식 문서, 「Desktop application」. "Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^other-session]: Claude Code 공식 문서, 「Checkpointing」. "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^worktree]: Claude Code 공식 문서, 「Desktop application」. "In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^scheduled]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^compare]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. 비교 표(Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval)와 "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^cloud]: Claude Code 공식 문서, 「Use Claude Code in the cloud」. "Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web (확인일 2026-10-31)
[^loop]: Claude Code 공식 문서, 「Run prompts on a schedule」. "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (확인일 2026-10-31)
[^old-name]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^ask]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^create]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^options]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^missed]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^perm]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
[^cloud-run]: Claude Code 공식 문서, 「Get started with the desktop app」. "Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart (확인일 2026-10-31)
[^awake]: Claude Code 공식 문서, 「Schedule recurring tasks in Claude Code Desktop」. "Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks (확인일 2026-10-31)
