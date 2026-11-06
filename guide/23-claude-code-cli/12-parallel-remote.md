# 12장. 동시 작업과 원격

> **한 줄 요약**: Git으로 첫 기록을 남기면 worktree로 **작업 폴더를 나눠** 일을 나란히 맡길 수 있습니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다. 폴더 경로와 요금제 이름은 이 강좌에 맞게 바꿔 적었습니다.

지금 상태를 저장해 두고, 본 폴더를 건드리지 않는 작업 폴더를 만들어 봅니다.

## Git으로 첫 기록 남기기

Git은 폴더의 변경 내역을 저장해 두는 프로그램입니다. 저장한 시점 하나를 **커밋**(Commit)이라고 부릅니다. 게임의 저장 지점과 비슷합니다. 기록이 쌓이는 폴더는 **저장소**(Repository)라고 부릅니다.

왜 지금 필요할까요? 이유는 두 가지입니다.

- [7장](07-permissions-undo.md)의 되감기는 Claude의 편집 도구가 고친 파일만 되돌립니다. Bash 명령으로만 바뀐 파일은 추적하지 않습니다. 그런 파일을 되돌리려면 Git 같은 버전 관리를 씁니다.[^git-undo]
- 다음 절의 worktree는 커밋에서 만들어집니다. 저장소에 커밋이 하나는 있어야 합니다.[^one-commit]

먼저 `git --version`으로 Git이 있는지 봅니다. 번호가 나오면 됩니다. 없다면 이렇게 합니다. Windows는 git-scm.com/downloads/win 에서 설치 프로그램을 받아 설치하고 새 창을 엽니다.[^git-win] 맥과 리눅스는 git-scm.com의 안내를 따릅니다.

이제 연습 폴더에서 기록을 시작합니다.

```bash
cd ~/hello-ai-연습/터미널
git init
```

`git init`은 이 폴더의 변경 내역을 기록하기 시작하라는 명령입니다. 다음으로 기록하지 **않을** 것을 정합니다. 7장의 `비밀` 폴더는 가짜 파일이지만, 진짜 비밀이라고 치고 빼 보겠습니다. 다음 절의 worktree 폴더도 함께 뺍니다.[^wt-ignore] `claude`를 켜고 이렇게 보냅니다.

```text
이 폴더에 .gitignore 파일을 만들고 "비밀/"과 ".claude/worktrees/" 두 줄을 적어 줘.
```

`.gitignore`는 Git이 못 본 척할 파일을 적는 목록입니다. 이제 `/exit`로 나와서 터미널에 칩니다.

```bash
git config user.name "내 이름"
git config user.email "me@example.com"
git config core.quotePath false
git add .
git status --short
```

한 줄씩 보면 이렇습니다. `git config`는 설정을 정합니다. `git add .`의 `.`은 지금 폴더라는 뜻이고, 폴더의 변경을 다음 기록에 담습니다. `git status --short`는 변경 상태를 짧게 보여 줍니다.

앞 두 줄은 커밋에 적힐 이름과 이메일입니다. 이 폴더에만 적용됩니다. 나중에 저장소를 공개하면 함께 공개되니, 공개해도 되는 값을 쓰세요. `git add .`는 저장할 파일을 모으고, `git status --short`는 모인 파일을 보여 줍니다. 새 폴더에서 돌렸을 때는 이렇게 나왔습니다.

```text
A  .claude/skills/meeting-notes/SKILL.md
A  .gitignore
A  CLAUDE.md
A  inbox/회의-2026-10-27-주간회의.txt
A  notes/회의록-2026-10-27.md
A  주간정리.sh
A  회의록.md
```

`core.quotePath false` 줄은 한글 파일 이름을 그대로 보여 주게 합니다. 이 줄이 없으면 이름이 `\355\232…` 같은 숫자로 보여서 `비밀` 폴더가 담겨도 알아보기 어렵습니다. 내 목록은 파일이 더 많을 수 있습니다.

여기서 스스로 물어보세요. `비밀` 폴더가 목록에서 빠졌나? 빠졌다면 저장합니다. 보이면 커밋하지 마세요. `.gitignore`의 두 줄을 고친 뒤 `git reset`과 `git add .`를 다시 칩니다.

```bash
git commit -m "첫 기록"
```

`git commit`이 실제로 기록을 남깁니다. `-m`은 메시지(message)의 줄임말이고, 따옴표 안이 이 기록의 설명입니다.

이 순서는 새 폴더에서 돌려서 `비밀` 폴더가 빠지고 커밋이 남는 것까지 확인했습니다.

<Quiz id="ch812-git" />

## worktree로 작업 폴더 나누기

worktree(워크트리)는 별도의 작업 폴더입니다. 저장소 기록은 함께 쓰고, 파일과 가지(Branch, 갈라져 나온 작업 줄기)는 따로 가집니다.[^wt-what] 복사본 폴더를 하나 더 만들어 그 안에서 일하는 모습을 떠올리면 됩니다. 여기서는 맛보기로 한 번만 해 봅니다.

`--worktree` 뒤에 이름을 주면 그 폴더를 만들고 안에서 Claude를 시작합니다.[^wt-what]

```bash
claude --worktree memo-fix
```

실제로 돌리니 시작 화면의 폴더가 이렇게 바뀌었습니다.

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claude 요금제 이름
 ▝▝   ▝▝   ~/hello-ai-연습/터미널/.claude/worktrees/memo-fix
```

폴더는 `.claude/worktrees/memo-fix`에 생기고, 새 가지 이름은 `worktree-memo-fix`입니다.[^wt-where] 세션 이름을 붙이지 않고, 아무것도 바꾸지 않은 채 `/exit`로 끝내니 폴더가 바로 지워졌습니다.

```text
Removing worktree…
Worktree removed (no changes)
```

worktree 이름과 세션 이름은 다릅니다. 세션에 이름을 붙였다면 지우기 전에 보관할지 먼저 묻는다고 공식 문서는 설명합니다.[^wt-where] 이 경우는 실행해 보지 않았습니다.

알아 둘 점이 둘 있습니다.

- **새로 받은 사본입니다.**[^wt-fresh] 커밋에 없는 파일은 그 안에 없습니다. 위에서 뺀 `비밀` 폴더도 없습니다. 메모가 안 보이면 커밋했는지 먼저 확인하세요.
- **남은 작업이 있으면 끝낼 때 보관할지 삭제할지 묻습니다.** 삭제를 고르면 폴더와 가지, 그 안의 작업이 함께 사라집니다. 나중에 돌아오려면 종료할 때 나오는 `claude --worktree <이름> --resume` 명령을 씁니다.[^wt-remove]

worktree의 결과를 본 폴더로 합치는 일은 Git의 가지 합치기입니다. 가지를 합치는 방법은 [4단계 · AI-SDLC 가이드](/guide/30-ai-sdlc/)의 PR 장에서 다룹니다.

<Quiz id="ch812-worktree" />

## 터미널 창 두 개로 나란히

회의록을 고치는 동안 공부 노트도 맡기고 싶을 때가 있습니다. 터미널 창을 두 개 열면 됩니다.

- **아쉬운 예**: 두 창 모두 같은 폴더에서 `claude`를 켠다. 같은 파일을 건드릴 수 있습니다. 다른 세션이 고친 내용은 되감기가 대개 잡아 주지 못합니다.[^other-session]
- **나은 예**: 창마다 다른 이름의 worktree를 쓴다. 파일이 따로라서 서로 부딪히지 않습니다.

첫 번째 창에서는 이렇게 칩니다.

```bash
cd ~/hello-ai-연습/터미널
claude --worktree memo-fix
```

두 번째 창에서는 이렇게 칩니다.

```bash
cd ~/hello-ai-연습/터미널
claude --worktree study-note
```

창 두 개를 동시에 돌리는 일은 이 가이드에서 실행해 보지 않았습니다. 끝나면 스스로 물어보세요. 두 작업이 서로 파일을 건드리지 않았나? 창을 늘리면 쓰는 양도 늘 수 있습니다. [13장](13-cost-safety-trouble.md)의 `/usage`로 살피면서 꼭 필요할 때만 쓰세요.

<Quiz id="ch812-two-windows" />

## 더 알아보기

아래 셋은 이 가이드에서 실행해 보지 않았습니다. 공식 문서가 설명하는 내용만 짧게 옮깁니다. 지금 몰라도 괜찮습니다. 필요해지면 꺼내 보세요.

**`/loop`** 는 세션 안에서 같은 요청을 간격을 두고 다시 실행합니다.[^loop-what]

```text
/loop 1h inbox 폴더에 새 메모가 있으면 파일 이름만 알려 줘
```

- Claude Code가 켜져 있고 쉬는 중일 때만 실행됩니다. 터미널을 닫으면 멈춥니다.[^loop-idle]
- 7일이 지나면 저절로 끝납니다.[^loop-idle]
- `1h`처럼 간격을 정한 반복은 Esc나 Ctrl+C로 멈추지 않습니다. Claude에게 말로 취소를 부탁합니다.[^loop-esc]

**`/goal`** 은 완료 조건을 정해 두면 단계마다 지시하지 않아도 Claude가 계속 일하게 합니다.[^goal-what] 판정하는 모델은 파일을 직접 열지 않습니다. 그래서 조건은 답에 드러나게 쓰고, 멈출 조건도 넣습니다.[^goal-judge] 턴은 Claude가 한 번 일하고 결과를 받는 한 차례입니다.

```text
/goal inbox의 회의 메모마다 notes 폴더에 회의록이 생기고 만든 파일 이름을 답에 모두 적으면 끝. 또는 10턴 후 멈춰.
```

`/goal clear`로 해제합니다.[^goal-state]

**원격 제어**(Remote Control)는 내 컴퓨터에서 돌고 있는 세션을 claude.ai/code나 Claude 휴대폰 앱에 연결합니다. Pro·Max·Ultra·Team·Enterprise 요금제에서 쓰고, API 키([13장](13-cost-safety-trouble.md)에서 설명합니다)로는 쓸 수 없습니다.[^rc-what] 세션에서 `/remote-control`을 칩니다.[^rc-cmd]

클라우드에서 실행되는 것이 **아닙니다.** 일은 내 컴퓨터에서 계속되고, 휴대폰은 그 세션을 보는 창입니다. 그래서 컴퓨터가 켜져 있고 `claude`가 계속 실행 중이어야 합니다.[^rc-window]

컴퓨터가 꺼져 있어도 돌아가야 하는 일이라면 앱 가이드의 [클라우드와 예약](../20-claude-code/08-parallel-cloud-schedule.md)을 보세요.

<Quiz id="ch812-more" />

## 직접 해 보기

1. 연습 폴더에서 `git init`, `.gitignore`, 첫 커밋까지 합니다.
2. `git log --oneline`으로 기록이 한 줄 보이는지 확인합니다.
3. `claude --worktree memo-fix`로 시작하고 `! pwd`로 지금 폴더를 확인합니다.
4. 아무것도 바꾸지 않고 `/exit`로 끝낸 뒤, 화면의 안내를 읽습니다.

스스로 물어보세요. 첫 기록에서 `비밀` 폴더가 빠졌나? 지금 내가 어느 폴더에 있는지 `pwd`로 말할 수 있나?

## 정리

- Git 첫 기록은 되감기가 못 되돌리는 변경을 돌려놓을 길이고, worktree의 전제다.
- worktree는 파일과 가지가 따로인 작업 폴더다. 커밋에 없는 파일은 그 안에 없다.
- 일을 나란히 맡길 때는 창마다 다른 worktree를 쓴다.
- `/loop`, `/goal`, 원격 제어는 필요해지면 꺼내 본다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Git | 깃 | 폴더의 변경 내역을 저장하는 프로그램 |
| Repository | 리포지토리 (저장소) | Git 기록이 쌓이는 폴더 |
| Commit | 커밋 | Git에 저장한 시점 하나 |
| Branch | 브랜치 (가지) | 갈라져 나온 작업 줄기 |
| `.gitignore` | 깃이그노어 | Git이 기록하지 않을 파일 목록 |
| Worktree | 워크트리 | 기록은 같고 파일과 가지가 따로인 작업 폴더 |
| Remote Control | 리모트 컨트롤 (원격 제어) | 내 컴퓨터의 세션을 다른 기기에서 이어 보는 기능 |

<ChapterDone :chapter="812" />

다음 장: [13장. 비용·안전·문제 해결](13-cost-safety-trouble.md)

[^git-undo]: Claude Code 공식 문서, 「Checkpointing」. "A file that only Bash commands changed isn't tracked and stays as it is." / "To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (확인일 2026-11-06)
[^one-commit]: Claude Code 공식 문서, 「Common workflows」. "so the repository needs at least one commit first." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-06)
[^git-win]: Claude Code 공식 문서, 「Terminal guide for new users」. "Go to git-scm.com/downloads/win and download the installer" https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^wt-ignore]: Claude Code 공식 문서, 「Run parallel sessions with worktrees」. "Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout." https://code.claude.com/docs/en/worktrees (확인일 2026-11-06)
[^wt-what]: Claude Code 공식 문서, 「Run parallel sessions with worktrees」. "A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." / "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." https://code.claude.com/docs/en/worktrees (확인일 2026-11-06)
[^wt-where]: Claude Code 공식 문서, 「Run parallel sessions with worktrees」. "By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" / "for an unnamed session, Claude removes the worktree and its branch automatically." / "A named session prompts you first so you can keep the worktree for later" https://code.claude.com/docs/en/worktrees (확인일 2026-11-06)
[^wt-fresh]: Claude Code 공식 문서, 「Run parallel sessions with worktrees」. "A worktree is a fresh checkout, so initialize your development environment there" https://code.claude.com/docs/en/worktrees (확인일 2026-11-06)
[^wt-remove]: Claude Code 공식 문서, 「Run parallel sessions with worktrees」. "Removing deletes the worktree directory and its branch, along with all the work in them" / "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." https://code.claude.com/docs/en/worktrees (확인일 2026-11-06)
[^other-session]: Claude Code 공식 문서, 「Checkpointing」. "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." https://code.claude.com/docs/en/checkpointing (확인일 2026-11-06)
[^loop-what]: Claude Code 공식 문서, 「Run prompts on a schedule」. "Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." https://code.claude.com/docs/en/scheduled-tasks (확인일 2026-11-06)
[^loop-idle]: Claude Code 공식 문서, 「Run prompts on a schedule」. "Tasks only fire while Claude Code is running and idle." / "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (확인일 2026-11-06)
[^loop-esc]: Claude Code 공식 문서, 「Run prompts on a schedule」. "`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." https://code.claude.com/docs/en/scheduled-tasks (확인일 2026-11-06)
[^goal-what]: Claude Code 공식 문서, 「Keep Claude working toward a goal」. "The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." https://code.claude.com/docs/en/goal (확인일 2026-11-06)
[^goal-judge]: Claude Code 공식 문서, 「Keep Claude working toward a goal」. "It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." / "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." https://code.claude.com/docs/en/goal (확인일 2026-11-06)
[^goal-state]: Claude Code 공식 문서, 「Keep Claude working toward a goal」. "`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." https://code.claude.com/docs/en/goal (확인일 2026-11-06)
[^rc-what]: Claude Code 공식 문서, 「Continue local sessions from any device with Remote Control」. "Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." / "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." https://code.claude.com/docs/en/remote-control (확인일 2026-11-06)
[^rc-cmd]: Claude Code 공식 문서, 「Continue local sessions from any device with Remote Control」. "If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" https://code.claude.com/docs/en/remote-control (확인일 2026-11-06)
[^rc-window]: Claude Code 공식 문서, 「Continue local sessions from any device with Remote Control」. "The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." https://code.claude.com/docs/en/remote-control (확인일 2026-11-06)
