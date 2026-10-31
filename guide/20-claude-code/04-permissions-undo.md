# 4장. 허락과 되돌리기 — 권한 모드, 되감기, Git 기록

> **한 줄 요약**: **권한 모드**로 Claude가 묻지 않고 할 수 있는 일의 범위를 정합니다. 결과가 마음에 안 들면 **되감기**(`/rewind`)로 요청 하나 전으로 돌아갑니다.
> 되감기가 못 되돌리는 것도 있습니다. 그래서 중요한 상태는 **Git 기록(커밋)** 으로 한 번 더 남겨 둡니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서와 macOS 데스크톱 앱(한국어 화면, 유료 계정)을 바탕으로 썼습니다. 3장까지 쓴 **정리도구** 폴더(Git을 켠 상태)를 그대로 씁니다.

## 권한 모드 고르기

입력창 아래 줄 오른쪽의 모드 이름(이 가이드 화면에서는 「수동」)을 누르면 권한 모드 메뉴가 열립니다. 단축키는 **Cmd+Shift+M** 입니다.[^keys]

![권한 모드 메뉴. ① 자동, ② 수동(체크 표시), ③ 편집 자동 수락, ④ 계획, ⑤ 권한 무시(흐리게 「Claude Code 설정에서 활성화」), ⑥ 입력창 아래 줄의 모드 버튼에 빨간 번호가 붙어 있다](assets/shot-12-modes-marked.png)

| 번호 | 화면 이름 | 공식 문서 이름 | Claude가 묻지 않고 하는 일 |
|---|---|---|---|
| ② | 수동 | Manual | 없음(고치거나 실행하기 전에 매번 물음) |
| ③ | 편집 자동 수락 | Accept edits | 폴더 안 파일 만들기·고치기와 기본 파일 명령 |
| ④ | 계획 | Plan | 읽고 살펴보기만(파일은 고치지 않고 계획을 내놓음) |
| ① | 자동 | Auto | 대부분(요청과 맞는지 검사기가 뒤에서 확인) |
| ⑤ | 권한 무시 | Bypass permissions | 거의 전부(설정에서 켜야 나타남) |

출처: 화면 이름은 이 가이드의 화면 확인(2026-10-31), 동작은 공식 문서[^modes]

모드마다 **편리함과 내가 지켜보는 정도를 맞바꿉니다.**[^tradeoff]

**처음에는 「수동」으로 시작하세요.** Claude가 무엇을 하려는지 하나씩 보면서 익숙해지는 편이 안심됩니다. 하는 일이 믿음직해지면 「편집 자동 수락」으로 넘어가도 됩니다. 일이 크면 「계획」으로 먼저 방법을 받아 보는 것이 좋습니다(5장).[^plan-tip]

- 메뉴에서 고른 모드는 **폴더마다 기억됩니다.** 다만 「계획」은 지금 세션에만 적용됩니다.[^remember]
- 예전 화면에서는 모드 이름이 Ask permissions, Auto accept edits, Plan mode였습니다.[^old-names]

<Quiz id="ch404-modes" />

## 「편집 자동 수락」「자동」「권한 무시」를 조심할 이유

**편집 자동 수락**은 파일 고치기만이 아니라 **파일을 지우는 명령**(`rm`)까지 묻지 않고 실행합니다. 대신 작업 폴더 안에서만 그렇습니다.[^accept] 2장에서 "작은 연습 폴더를 고르라"고 한 이유가 여기 있습니다. 폴더가 작으면 실수가 퍼질 범위도 작습니다. 다만 위험한 경로를 통째로 지우는 명령(예: `rm -rf ~`, 홈 폴더 전체 삭제)은 어느 모드에서도 자동으로 허락되지 않습니다.[^critical]

**자동**은 묻는 일을 크게 줄여 주지만, 공식 문서는 이렇게 못 박습니다. 자동 모드는 허락 창을 줄여 줄 뿐 **안전을 보장하지 않습니다.**[^auto] 큰 방향을 믿을 수 있는 일에 쓰고, 민감한 일에서 검토를 대신하는 용도로 쓰지 마세요.[^auto]

**권한 무시**는 메뉴에서 흐리게 보이고, 설정에서 따로 켜야 나타납니다.[^modes] 공식 문서는 이 모드를 **격리된 컨테이너나 가상 머신에서만** 쓰라고 합니다.[^modes] 일반 사용자는 켤 일이 없습니다.

::: details 「수동」인데 허락 창이 뜨지 않는다면
2장에서 본 것처럼, 터미널용 Claude Code에서 허용 규칙을 정해 두었다면 앱에도 그 설정이 적용됩니다.[^same-settings] 이 가이드의 캡처 화면도 그런 컴퓨터에서 찍어서 허락 창이 나오지 않았습니다. 허락 창이 뜨는 화면에서는 무엇이 바뀔지 보여 주고, 바꿀 때마다 허락하거나 거절할 수 있습니다.[^modes]
:::

<Quiz id="ch404-auto" />

## 되감기 — 요청 하나 전으로 돌아가기

Claude Code는 **내가 요청을 보낼 때마다 그 직전 상태를 자동으로 저장해 둡니다.** 이것을 **체크포인트**(Checkpoint)라고 부릅니다.[^checkpoint] 게임의 저장 지점처럼, 결과가 마음에 안 들면 그 지점으로 돌아갈 수 있습니다.

실습해 봅니다. 새 세션에서 공부 필기 정리를 맡겼습니다.

```
inbox의 공부 필기를 공부 노트로 정리해 줘. 핵심 내용 / 모르는 말 풀이 / 질문할 것 / 해 볼 것 네 부분으로 나누고, notes 폴더에 새 파일로 저장해 줘. 원본 메모는 고치지 마.
```

공부 노트가 만들어졌습니다(결과: [4장-공부노트-2026-10-28.txt](/practice/notes/results/4장-공부노트-2026-10-28.txt)). 이 노트를 없던 일로 돌려 보겠습니다.

1. 입력창에 `/rewind` 를 칩니다. 「세션을 이전 메시지로 되돌리기」라는 제안이 뜨면 **Enter**를 누르고, 한 번 더 **Enter**로 실행합니다.
2. **되감기** 창에 내가 보낸 요청이 목록으로 나옵니다. 돌아가고 싶은 요청을 누릅니다.

![되감기 창. 「세션을 이전 메시지로 복원합니다」 아래 ① 내가 보낸 요청 목록에 빨간 번호가 붙어 있다](assets/shot-13-rewind-marked.png)

3. 확인 창에서 **무엇을 되돌릴지** 고르고 **되감기**를 누릅니다.

![되감기 확인 창. ① 복원 「코드와 대화」, ② 「파일 1개 · +0 −35」, ③ 「셸 명령으로 적용된 변경 사항은 되돌려지지 않습니다. 커밋은 그대로 유지됩니다.」, ④ 「되감기」 버튼에 빨간 번호가 붙어 있다](assets/shot-14-rewind-confirm-marked.png)

②의 `+0 −35`는 되감으면 **35줄이 사라진다**는 뜻입니다. 이 실습에서는 새로 만든 공부 노트 35줄입니다. 누르기 전에 이 숫자로 무엇이 바뀔지 확인하세요.

①의 복원 목록에는 세 가지가 있습니다.

![복원 선택지. ① 「코드와 대화」(체크), 「대화만」, 「코드만」 목록에 빨간 번호가 붙어 있다](assets/shot-15-restore-options-marked.png)

| 화면 이름 | 하는 일 |
|---|---|
| 코드와 대화 | 파일과 대화를 모두 그 시점으로 |
| 대화만 | 대화만 그 시점으로, 파일은 지금 그대로 |
| 코드만 | 파일만 그 시점으로, 대화는 지금 그대로 |

출처: 화면 이름은 이 가이드의 화면 확인(2026-10-31), 동작은 공식 문서[^restore]

「코드와 대화」로 되감았더니 공부 노트 파일이 사라졌고, 대화도 비었습니다. 되감은 요청은 **입력창에 다시 들어가 있어서** 고쳐서 다시 보낼 수 있습니다.[^restore-prompt]

![되감기 뒤의 화면. ① 「아직 메시지가 없습니다」, ② 입력창에 되감은 요청이 다시 들어가 있음, ③ 세션 정보 칸에서 결과물·변경 사항 카드가 사라짐에 빨간 번호가 붙어 있다](assets/shot-16-after-rewind-marked.png)

이럴 때 쓰면 좋습니다.

- 정리 형식이 마음에 안 들어 **요청을 고쳐 다시** 해 보고 싶을 때 → 「코드와 대화」
- 파일은 좋은데 **대화가 엉뚱하게 길어졌을 때** → 「대화만」
- 대화의 설명은 남기고 **파일만 원래대로** 돌리고 싶을 때 → 「코드만」

<Quiz id="ch404-rewind" />

## 되감기가 못 되돌리는 것

되감기는 만능이 아닙니다. 확인 창의 ③ 문장이 그 한계를 알려 줍니다.

- **명령(셸)으로 바꾼 파일**: Claude가 파일 편집 도구가 아니라 명령을 실행해서만 바꾼 파일은 추적하지 않습니다.[^limits-bash]
- **내가 직접 고친 파일, 다른 세션이 고친 파일**: 보통 추적하지 않습니다. 지금 세션에서 고친 파일만 추적합니다.[^limits-external]
- **커밋**: Git 기록은 그대로 남습니다(확인 창 문구).
- **오래된 체크포인트**: 체크포인트는 세션당 최근 100개까지 남고, 기본으로 약 30일 뒤 정리됩니다.[^retention]

공식 문서는 이런 경우 **Git 같은 버전 관리로 되돌리라**고 안내합니다.[^limits-bash] 그래서 다음 절의 Git 기록이 두 번째 안전망입니다.

<Quiz id="ch404-limits" />

## Git 기록 — 두 번째 안전망

3장에서 폴더에 Git을 켰습니다. 결과가 마음에 들면 그 상태를 **커밋**(기록 하나)으로 남겨 두세요. 그러면 되감기로 못 돌아가는 경우에도 그 기록으로 돌아갈 수 있습니다.

세션 정보 칸의 변경 사항 카드에 **「변경 사항 커밋」** 버튼이 있습니다(3장). 이 가이드에서 눌러 보니, 앱이 Claude에게 "지금 바뀐 내용을 커밋해 달라"는 요청을 대신 보냈고 Claude가 커밋을 남겼습니다. 말로 부탁해도 됩니다.

```
지금 바뀐 내용을 커밋해 줘. 기록 이름은 무엇을 바꿨는지 알 수 있게 한국어로 적어 줘.
```

나중에 그 기록으로 돌아가고 싶으면 이렇게 부탁합니다.

```
마지막 커밋 뒤로 바뀐 파일이 무엇인지 먼저 보여 줘. 내가 확인하면 그 커밋 상태로 되돌려 줘.
```

**되돌리기 전에 "무엇이 사라지는지" 먼저 보여 달라고 하세요.** 커밋 뒤에 한 일은 Git으로 되돌리면 사라질 수 있습니다. 확인을 한 단계 넣으면 실수로 지울 일이 줄어듭니다.

| | 되감기(체크포인트) | Git 기록(커밋) |
|---|---|---|
| 언제 저장되나 | 요청을 보낼 때마다 자동 | 내가(또는 Claude가) 남길 때 |
| 무엇을 되돌리나 | 이 세션에서 Claude가 편집한 파일과 대화 | 커밋해 둔 파일들 |
| 얼마나 남나 | 최근 100개, 약 30일 | 기록을 지우기 전까지 |

출처: 공식 문서[^checkpoint][^retention], Git 열은 이 가이드의 정리

<Quiz id="ch404-git" />

## 직접 해 보기

1. 입력창 아래 줄의 모드 버튼을 눌러 권한 모드 메뉴를 열고, 다섯 모드의 설명을 읽어 본다. 지금은 「수동」으로 둔다.
2. 공부 필기 정리 요청을 보내고, 만들어진 노트를 원본 필기와 맞춰 본다(요령 5가지, 모르는 말, 질문 1개, 해 볼 것 1개). 이 가이드에서는 Claude가 회고 메모까지 읽고 "해 볼 것: 해 봄(10/30)"을 채웠습니다. 요청하지 않은 파일을 근거로 쓴 부분은 그 근거가 맞는지 따로 확인한다.
3. `/rewind` 로 그 요청 전으로 되감는다. 확인 창의 `+0 −N` 숫자를 먼저 확인한다.
4. 입력창에 돌아온 요청에서 형식 하나를 바꿔(예: "모르는 말 풀이는 표로") 다시 보낸다.
5. 마음에 드는 결과가 나오면 「변경 사항 커밋」으로 기록을 남긴다.

**이어지는 과제**: 2장의 회의록과 4장의 공부 노트를 나란히 놓고, 두 문서에 공통으로 쓰고 싶은 규칙(날짜 쓰는 법, 할 일 표 모양 등)을 세 줄로 적어 둔다. 6장에서 이 규칙을 CLAUDE.md에 저장한다.

## 정리

- 권한 모드는 수동 · 편집 자동 수락 · 계획 · 자동 · 권한 무시가 있다. 처음엔 수동으로 시작한다.
- 편집 자동 수락은 폴더 안 파일 삭제 명령까지 묻지 않는다. 자동은 안전을 보장하지 않는다. 권한 무시는 격리된 환경에서만 쓴다.
- 요청마다 체크포인트가 저장된다. `/rewind` 로 코드와 대화·대화만·코드만 골라 되감는다.
- 되감기는 명령으로만 바꾼 파일, 내가 직접 고친 파일, 커밋은 보통 되돌리지 않는다.
- 좋은 상태는 커밋으로 남겨 두 번째 안전망을 만든다. 되돌리기 전에 무엇이 사라지는지 먼저 확인한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Permission mode | 퍼미션 모드 (권한 모드) | Claude가 묻지 않고 해도 되는 일의 범위 |
| Accept edits | 억셉트 에딧츠 (편집 자동 수락) | 폴더 안 파일 편집과 기본 파일 명령을 묻지 않는 모드 |
| Plan mode | 플랜 모드 (계획) | 고치지 않고 살펴본 뒤 계획만 내놓는 모드 |
| Checkpoint | 체크포인트 | 요청을 보낼 때마다 자동으로 남는 저장 지점 |
| Rewind | 리와인드 (되감기) | 체크포인트로 돌아가는 기능 |
| Commit | 커밋 | Git에 지금 상태를 기록으로 남기는 일 |

<ChapterDone :chapter="404" />

다음 장: [5장. 잘 맡기는 법](05-delegate-well.md)

[^keys]: Claude Code 공식 문서, 「Desktop application」 단축키 표. "Open permission mode menu" https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^modes]: Claude Code 공식 문서, 「Desktop application」. "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "Claude auto-accepts file edits and common filesystem commands like mkdir, touch, and mv, but still asks before running other terminal commands." / "Claude reads files and runs commands to explore, then proposes a plan without editing your source code." / "Claude runs without routine prompts; before actions such as shell commands and network requests run, a background classifier checks that they align with your request." / "On Pro, Max, and Ultra plans, enable "Allow bypass permissions mode" in Settings > Code or Settings > Claude Code." / "Only use this in sandboxed containers or VMs." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^tradeoff]: Claude Code 공식 문서, 「Choose a permission mode」. "Each mode makes a different tradeoff between convenience and oversight." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^plan-tip]: Claude Code 공식 문서, 「Desktop application」. "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^remember]: Claude Code 공식 문서, 「Desktop application」. "A mode you pick in the selector is remembered per folder and takes precedence over defaultMode for that folder, except Plan, which applies to the current session only." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^old-names]: Claude Code 공식 문서, 「Desktop application」. "Earlier versions of the Code tab labeled these modes Ask permissions, Auto accept edits, and Plan mode." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^accept]: Claude Code 공식 문서, 「Choose a permission mode」. "acceptEdits mode auto-approves common filesystem Bash commands: mkdir, touch, rm, rmdir, mv, cp, and sed." / "Like file edits, auto-approval applies only to paths inside your working directory or additionalDirectories." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^auto]: Claude Code 공식 문서, 「Choose a permission mode」. "Auto mode reduces permission prompts but does not guarantee safety. Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^same-settings]: Claude Code 공식 문서, 「Desktop application」. "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^checkpoint]: Claude Code 공식 문서, 「Checkpointing」. "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." / "Every prompt you send that starts a turn creates a new checkpoint" https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^restore]: Claude Code 공식 문서, 「Checkpointing」. "Restore code and conversation: revert both code and conversation to that point" / "Restore conversation: rewind to that message while keeping current code" / "Restore code: revert file changes while keeping the conversation" https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^restore-prompt]: Claude Code 공식 문서, 「Checkpointing」. "After restoring the conversation or choosing Summarize from here, the original prompt from the selected message is restored into the input field so you can re-send or edit it." https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^limits-bash]: Claude Code 공식 문서, 「Checkpointing」. "A file that only Bash commands changed isn't tracked and stays as it is. To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^limits-external]: Claude Code 공식 문서, 「Checkpointing」. "Checkpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^retention]: Claude Code 공식 문서, 「Checkpointing」. "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." / "by default about 30 days after the session last saved one" https://code.claude.com/docs/en/checkpointing (확인일 2026-10-31)
[^critical]: Claude Code 공식 문서, 「Choose a permission mode」. "Claude Code doesn't auto-approve the following in any mode, including bypassPermissions" / "Recognized rm and rmdir critical-path removals, which no allow rule or PreToolUse hook "allow" approves" https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
