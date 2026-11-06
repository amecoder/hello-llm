# 7장. 허락과 되돌리기

> **한 줄 요약**: Claude가 묻지 않고 할 수 있는 일은 권한 모드와 규칙이 정합니다. 잘못되면 Esc 두 번으로 되감을 수 있지만, 되돌아오지 않는 일도 있습니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다. 전부 외울 필요는 없습니다. 허락 창을 읽는 법부터 익히면 됩니다.

## 권한 모드 네 가지

**권한 모드**(Permission mode)는 Claude가 묻지 않고 해도 되는 일의 범위입니다.[^modes] 지금 모드는 화면 맨 아래 줄에 보입니다. Shift+Tab을 누를 때마다 표의 순서대로 바뀌고, 맨 아래 다음에는 맨 위로 돌아옵니다.

| 쉬운 이름 | 맨 아래 줄 글자 | 하는 일 |
|---|---|---|
| 자동 | `⏵⏵ auto mode on` | 별도의 AI가 살피고 진행 |
| 수동 | `⏸ manual mode on` | 대부분 먼저 물음 |
| 편집 허용 | `⏵⏵ accept edits on` | 파일 작업은 안 물음 |
| 계획 | `⏸ plan mode on` | 조사와 제안만 함 |

- **자동(auto)**: 터미널에서 `claude`를 켜면 이 모드로 시작합니다. 행동을 미리 살피는 별도의 AI가 위험해 보이는 것을 막습니다.[^auto] 사람이 대신 봐 주는 것은 아닙니다. 자동 모드는 허락 창을 줄여 줄 뿐, 안전을 보장하지는 않습니다.[^auto] 연달아 세 번 막히면 멈추고 다시 나에게 묻습니다.[^practice]
- **수동(manual)**: 파일 수정, 셸 명령, 네트워크 접근 대부분을 먼저 묻습니다.[^modes] 안전하지만 열 번쯤 지나면 읽지 않고 승인하기 쉽습니다.[^practice]
- **편집 허용(accept edits)**: 작업 폴더 안에서 파일을 만들고 고치는 일을 묻지 않습니다.[^modes] 흔한 파일 명령도 묻지 않고 승인합니다.
- **계획(plan)**: 조사해서 제안만 하고 고치지는 않습니다.[^modes] 큰 일을 맡기기 전에 어떻게 할지부터 보고 싶을 때 좋습니다.

처음 연습할 때는 수동으로 시작해 보세요. Claude가 무슨 일을 하는지 눈에 익습니다. 터미널에서 이렇게 칩니다.[^practice]

```bash
claude --permission-mode manual
```

<Quiz id="ch807-modes" />

## 허락 창 읽기

수동 모드에서 "inbox의 회의 메모를 읽고 회의록2.md 로 저장해 줘. 답은 한 줄로."라고 부탁하면 이런 창이 뜹니다. 허락 창은 Claude가 하려는 일을 먼저 보여 주고 선택지를 줍니다.[^prompt]

```text
 Do you want to create 회의록2.md?
 ❯ 1. Yes
   2. Yes, and switch to accept edits (auto-approve file edits and common file commands) for this
      session (shift+tab)
   3. No

 Esc to cancel · Tab to amend
```

위아래 화살표로 고르고 Enter를 누릅니다. 1번은 이번 한 번만 허락합니다. 2번은 이 세션을 편집 허용 모드로 바꿉니다. 3번은 하지 않습니다. Esc는 취소입니다.

있는 파일을 고칠 때는 `Do you want to make this edit to 회의록2.md?`라고 묻고 바뀌는 줄도 보여 줍니다. 앞에 `+`가 붙은 줄이 새로 들어가는 줄입니다. 창이 뜨면 이렇게 물어보세요.

- 내가 말한 그 파일인가?
- 바뀌는 내용이 내가 부탁한 것인가?
- 부탁하지 않은 일이 섞여 있지 않나?

아쉬운 습관은 창이 뜨자마자 Enter를 누르는 것입니다. 나은 습관은 파일 이름과 바뀌는 줄을 읽고 고르는 것입니다. 그 몇 초가 잘못된 수정을 미리 잡아 줍니다.

셸 명령 허락 창에는 `Yes, and don't ask again`이 나올 수 있습니다. 이것을 고르면 규칙이 `.claude/settings.local.json`에 저장되어 뒤로도 이어집니다. 파일 수정 승인은 세션이 끝날 때까지만 갑니다.[^prompt] 저장되는 쪽은 오래 남으니 뜻을 알 때만 고르세요.

<Quiz id="ch807-prompt" />

## 건너뛰는 옵션은 쓰지 마세요

인터넷 글에서 `--dangerously-skip-permissions`를 보게 될 수 있습니다. 권한 확인을 건너뛰는 옵션입니다.[^skip] 쓰지 마세요. 인터넷이 끊긴 컨테이너나 가상 머신처럼 격리된 환경에서만 쓰는 옵션입니다.[^bypass] 프롬프트 인젝션(글 속에 숨긴 지시로 AI를 조종하는 공격)이나 실수를 막아 주지도 못합니다.[^bypass] 허락 창이 귀찮다면 다른 길이 있습니다. 자주 쓰는 일만 다음 절의 허용 규칙으로 풀어 주면 됩니다.

<Quiz id="ch807-skip" />

## 허락 규칙 allow·ask·deny

모드가 큰 틀이라면 규칙은 세부 항목입니다. Claude가 쓰는 기능을 도구라고 부릅니다. `Read`는 파일 읽기, `Bash`는 셸 명령입니다. 규칙은 이 도구마다 정합니다. **allow**는 묻지 않고 허용합니다. **ask**는 쓸 때마다 확인합니다. **deny**는 못 쓰게 막습니다.[^rules]

규칙은 deny, ask, allow 순서로 따지고 먼저 맞은 것이 이깁니다. 그래서 넓게 막아 둔 deny에 allow로 구멍을 낼 수 없습니다.[^rules] 거부 규칙은 어떤 모드에서도 막습니다.[^bypass]

모양은 이렇습니다. `Bash(ls *)`는 `ls` 명령만 맞습니다. `Bash(*)`로 쓰면 모든 셸 명령이 맞습니다.[^rules] 별표는 넓게 맞으니 필요한 만큼만 쓰세요.

세션 안에서 `/permissions`를 치면 규칙을 보고 관리할 수 있습니다.[^rules] 좌우 화살표로 위쪽 탭을 옮겨 다닙니다.

```text
  Permissions  Recently blocked   Allow   Ask   Deny   Auto mode   Workspace
```

<Quiz id="ch807-rules" />

## 거부 규칙 써 보기

비밀 파일을 Claude가 못 읽게 막아 봅니다. 비밀번호나 인증 키 같은 로그인 정보가 든 파일은 권한 규칙으로 막아 두면 좋습니다.[^creds] **진짜 비밀번호는 쓰지 말고** 가짜 파일로 연습합니다. `/exit`로 나와 터미널에서 연습 폴더로 이동합니다. 맥과 리눅스는 아래를 통째로 붙여 넣습니다.

```bash
mkdir 비밀
echo '가짜 비밀번호: cafe-1234' > 비밀/암호.txt
mkdir -p .claude
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./비밀/**)"]
  }
}
EOF
```

붙여 넣은 뒤 아직 실행되지 않았으면 Enter를 한 번 더 누르세요. 아무것도 안 나오면 성공입니다. `ls`로 `비밀` 폴더가 생겼는지 보세요.

Windows PowerShell은 `mkdir 비밀`, `mkdir .claude`로 폴더를 만듭니다. `notepad 비밀\암호.txt`로 메모장을 열어 `가짜 비밀번호: cafe-1234`를 넣습니다. `notepad .claude\settings.json`에는 위 상자에서 `cat`으로 시작하는 줄과 `EOF` 줄을 빼고 그 사이만 넣습니다. 새 파일을 만들지 물으면 `예`를 누르고, `Ctrl + S`로 저장하고 닫습니다. 이 방법은 실행해 보지 않았습니다.

`Read(./비밀/**)`는 비밀 폴더 안의 모든 것을 읽지 말라는 뜻입니다. 터미널에서 `claude`를 켜고 "비밀/암호.txt 파일을 읽어서 내용을 알려 줘."라고 부탁해 보세요.

같은 요청을 한 번에 끝나는 실행([10장](10-headless-automation.md)의 `claude -p`)으로 보냈더니 Claude는 파일을 읽지 못했다고 답했고 내용을 보여 주지 않았습니다. 문장은 실행마다 다를 수 있습니다. 확인할 것은 하나입니다. 답에 `cafe-1234`가 나왔나?

이 실습이 보여 주는 것은 Claude의 읽기 요청이 막혔다는 사실 하나입니다. 어떤 방법으로도 절대 못 읽는다는 뜻으로 넓혀 읽지는 마세요. 파일 이름을 지정하지 않고 읽는 명령에는 이 규칙이 적용되지 않습니다.[^deny-limit] 진짜 비밀번호는 작업 폴더에 두지 않는 편이 가장 안전합니다.

<Quiz id="ch807-deny" />

## 되감기

Claude가 고친 파일은 자동으로 추적됩니다. 요청을 보낼 때마다 되돌아갈 지점이 하나씩 생깁니다.[^checkpoint] 이 지점을 **체크포인트**(Checkpoint)라고 합니다.

입력창이 빈 상태에서 Esc를 두 번 누르면 `Rewind` 메뉴가 열립니다. `/rewind`를 쳐도 됩니다. **입력창이 비어 있어야** 합니다. 글자가 있으면 메뉴 대신 글자가 지워집니다.[^checkpoint] 지워진 글은 위쪽 화살표로 되살릴 수 있습니다.[^esc-up]

메뉴에는 내가 보낸 메시지와 바뀐 파일이 나옵니다. 위쪽 화살표로 메시지를 고르고 Enter를 누르면 선택지가 나옵니다.[^checkpoint]

| 선택지 | 뜻 |
|---|---|
| Restore code and conversation | 파일과 대화 모두 되돌림 |
| Restore conversation | 대화만 되돌림 |
| Restore code | 파일만 되돌림 |
| Summarize from here | 여기부터의 대화를 요약 |
| Summarize up to here | 여기 이전의 대화를 요약 |

처음이라면 맨 위를 고르세요. 그만둘 때는 Esc입니다. 메뉴 아래에는 이런 경고가 나옵니다.

```text
  ⚠ Restored files go back whole, losing later changes by anyone. Bash changes to other files are
  not undone.
```

파일은 통째로 되돌아가므로 그 뒤에 누가 고쳤든 그 변경도 사라진다는 뜻입니다.

실습에서 파일에 줄을 하나 더 넣게 한 뒤 맨 위 선택지로 되돌려 봤습니다. 파일은 그 전 내용으로 돌아갔고, 내가 보냈던 메시지는 입력창에 다시 들어와 있었습니다. 고쳐서 다시 보내거나 지우면 됩니다.

Claude가 하는 일을 멈추고 싶을 때는 Esc를 **한 번**만 누릅니다. 거기까지 한 일은 남습니다.[^practice]

<Quiz id="ch807-rewind" />

## 되돌리지 못하는 것

"Esc 두 번이면 다 돌아간다"고 생각하면 곤란합니다. 되감기는 **Claude의 편집 도구가 고친 파일**만 다룹니다. 다음은 되돌아오지 않습니다.[^limits]

- 셸 명령으로만 바뀐 파일
- 서브에이전트([9장](09-skills-extensions.md)에서 배우는 곁일 도우미)가 고친 다른 파일
- 내가 직접 고친 파일이나 다른 세션의 편집(대체로)
- 메일 보내기나 바깥 데이터베이스 변경처럼 컴퓨터 밖에서 한 일[^remote]

이런 변경을 되돌리려면 **Git** 같은 버전 관리를 쓰세요.[^limits] Git은 파일의 상태를 기록해 두는 도구입니다. 게임의 세이브 파일과 비슷합니다. [12장](12-parallel-remote.md)에서 처음 기록을 남겨 봅니다. 되감기는 편한 안전망이지만 유일한 안전망으로 두지는 마세요.

<Quiz id="ch807-limits" />

## 직접 해 보기

1. 연습 폴더에서 `claude --permission-mode manual`로 시작하고 Shift+Tab을 네 번 눌러 모드가 한 바퀴 도는 것을 봅니다.
2. 회의록2.md를 만들어 달라고 합니다. 이어서 "회의록2.md 맨 첫 줄에 "초안"이라는 한 줄을 넣어 줘. 답은 한 줄로."라고 합니다. 허락 창을 읽고 1번을 고릅니다.
3. 입력창이 빈 상태에서 Esc를 두 번 누릅니다. 맨 끝 요청을 고르고 `Restore code and conversation`을 고릅니다. "초안" 줄이 사라졌나요?
4. 입력창에 돌아온 글을 Esc 두 번으로 지운 뒤 `/exit`로 나옵니다. 터미널에서 거부 규칙을 만들고, `claude`를 켜서 `비밀/암호.txt`를 읽어 달라고 해 봅니다.

스스로 물어보세요. 내 Claude가 허락 없이 할 수 있는 일을 말할 수 있나? 되감기로 안 돌아오는 일을 세 가지 들 수 있나?

## 정리

- 권한 모드는 네 가지이고 Shift+Tab으로 바꾼다. 대화형은 자동으로 시작하고, 자동은 안전을 보장하지 않는다.
- 허락 창은 파일 이름과 바뀌는 줄을 읽고 고른다. `--dangerously-skip-permissions`는 쓰지 않는다.
- 규칙은 deny, ask, allow 순서로 따진다. 거부 규칙은 모든 모드에서 막는다.
- 입력창이 빈 상태에서 Esc 두 번이면 되감기 메뉴가 열린다.
- 되감기는 Claude의 편집 도구가 고친 파일만 되돌린다. 나머지는 Git이 필요하다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Permission mode | 퍼미션 모드 | 묻지 않고 해도 되는 일의 범위 |
| allow / ask / deny | 얼라우 / 애스크 / 디나이 | 허용 / 확인 / 거부 규칙 |
| Checkpoint | 체크포인트 | 되돌아갈 수 있는 지점 |
| Git | 깃 | 파일의 상태를 기록해 두는 도구 |

<ChapterDone :chapter="807" />

다음 장: [8장. 프로젝트 기억과 설정](08-memory-settings.md)

[^modes]: Claude Code 공식 문서, 「Choose a permission mode」. "A permission mode sets which actions Claude can take in a session without asking you first." / "In Manual mode, Claude Code stops and asks you before most actions that edit files, run shell commands, or reach the network." / "lets Claude create and edit files in your working directory without prompting" / "Plan mode tells Claude to research and propose changes without making them." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^auto]: Claude Code 공식 문서, 「Choose a permission mode」. "With Claude Code v2.1.283 or later, auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." / "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." / "Auto mode reduces permission prompts but does not guarantee safety." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^practice]: Claude Code 공식 문서, 「Best practices for Claude Code」. "After three blocks in a row (or twenty in total), auto mode pauses and goes back to asking you." / "Safe, but after the tenth prompt you start approving without reading, and nothing moves while you're away from the keyboard." / "`Shift+Tab` in the session cycles through the permission modes, Manual included, or start with `claude --permission-mode manual` from your shell." / "`Esc` stops Claude mid-action and keeps everything up to that point, so you can redirect without losing work." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^prompt]: Claude Code 공식 문서, 「Configure permissions」. "A permission prompt shows what Claude is about to do, followed by your options." / "Claude Code saves the rule to `.claude/settings.local.json` at the root of the git repository" / "A file-modification approval isn't saved to the file: as the table shows, it lasts until the session ends." https://code.claude.com/docs/en/permissions (확인일 2026-11-06)
[^skip]: Claude Code 공식 문서, 「CLI reference」. "Skip permission prompts." https://code.claude.com/docs/en/cli-reference (확인일 2026-11-06)
[^bypass]: Claude Code 공식 문서, 「Choose a permission mode」. "Only use this mode in isolated environments like containers, VMs, or dev containers without internet access, where Claude Code cannot damage your host system." / "`bypassPermissions` offers no protection against prompt injection or unintended actions." / "Deny rules block in every mode, including `bypassPermissions`." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^rules]: Claude Code 공식 문서, 「Configure permissions」. "Allow rules let Claude Code use the specified tool without manual approval." / "Ask rules prompt for confirmation whenever Claude Code tries to use the specified tool." / "Deny rules prevent Claude Code from using the specified tool." / "Rules are evaluated in order: deny, then ask, then allow." / "An allow rule can't carve an exception out of a deny rule." / "`Bash(ls *)` matches `ls`" / "`Bash(*)` is equivalent to `Bash` and matches all Bash commands." / "You can view and manage Claude Code's tool permissions with `/permissions`." https://code.claude.com/docs/en/permissions (확인일 2026-11-06)
[^creds]: Claude Code 공식 문서, 「Explore the .claude directory」. "Use permission rules to deny reads of credential files" https://code.claude.com/docs/en/claude-directory (확인일 2026-11-06)
[^checkpoint]: Claude Code 공식 문서, 「Checkpointing」. "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." / "Every prompt you send that starts a turn creates a new checkpoint" / "Run `/rewind`, or press `Esc` twice when the prompt input is empty, to open the rewind menu." / "If the prompt input contains text, double `Esc` clears it instead of opening the menu." / "Restore code and conversation: revert both code and conversation to that point" / "Restore conversation: rewind to that message while keeping current code" / "Restore code: revert file changes while keeping the conversation" / "Summarize from here: compress the conversation from this point forward into a summary, freeing context window space" / "Summarize up to here: compress the conversation before this point into a summary, keeping later messages intact" https://code.claude.com/docs/en/checkpointing (확인일 2026-11-06)
[^esc-up]: Claude Code 공식 문서, 「Interactive mode」. "When the prompt input contains text, double `Esc` clears it and saves the draft to history so `Up` recalls it." https://code.claude.com/docs/en/interactive-mode (확인일 2026-11-06)
[^limits]: Claude Code 공식 문서, 「Checkpointing」. "A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." / "The subagent's edits to other files stay, so use version control, such as Git, to revert them." / "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing (확인일 2026-11-06)
[^remote]: Claude Code 공식 문서, 「How Claude Code works」. "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^deny-limit]: Claude Code 공식 문서, 「Configure permissions」. "They don't apply to a command that reads files without naming them" https://code.claude.com/docs/en/permissions (확인일 2026-11-06)
