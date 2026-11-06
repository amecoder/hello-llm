# 4장. 첫 세션

> **한 줄 요약**: 일할 폴더로 가서 `claude`를 칩니다. 신뢰 확인 창에서 `Yes`를 고르고, 말로 일을 시킵니다. 멈출 때는 `Esc`, 끝낼 때는 `/exit`입니다.

화면의 폴더 경로와 요금제 이름은 이 강좌에 맞게 바꿔 적었습니다.

**세션**(Session)은 Claude Code를 켜고 끝낼 때까지의 대화 한 묶음입니다. 2장에서 만든 폴더에서 첫 세션을 열어 봅니다.

## 폴더에서 시작하기

먼저 일할 폴더로 옮겨 갑니다. 그다음 `claude`를 칩니다.[^start]

맥·리눅스는 이렇게 칩니다.

```bash
cd ~/hello-ai-연습/터미널
claude
```

Windows PowerShell은 이렇게 칩니다.

```powershell
cd $HOME\hello-ai-연습\터미널
claude
```

**순서가 중요합니다.** `claude`는 지금 있는 폴더를 작업 폴더로 삼아 시작합니다. 시작 화면에도 그 폴더가 표시됩니다.[^header] 일과 상관없는 폴더에서 켜면 그 폴더의 파일을 앞에 두고 일하게 됩니다.

- **아쉬운 예**: 터미널을 열자마자 `claude`를 친다.
- **나은 예**: `cd`로 폴더에 들어가 `pwd`로 확인한 뒤 `claude`를 친다.

<Quiz id="ch804-start" />

## 신뢰 확인 창

처음 여는 폴더에서는 이런 창이 먼저 뜹니다.

```text
 Accessing workspace:

 ~/hello-ai-연습/터미널

 Quick safety check: Is this a project you created or one you trust? (Like your own code, a
 well-known open source project, or work from your team). If not, take a moment to review what's in
 this folder first.

 Claude Code'll be able to read, edit, and execute files here.

 Security guide

 ❯ No, exit
   Yes, I trust this folder

 Enter to confirm · Esc to cancel
```

뜻은 이렇습니다. "내가 만들었거나 믿을 수 있는 폴더인가요? 아니라면 안에 무엇이 있는지 먼저 살펴보세요. Claude Code는 여기 있는 파일을 읽고, 고치고, 실행할 수 있습니다."

**여기서 그냥 Enter를 누르면 프로그램이 꺼집니다.** `❯` 표시가 `No, exit`에 있기 때문입니다. 아래쪽 화살표를 한 번 눌러 `Yes, I trust this folder`로 옮긴 뒤 Enter를 누르세요. 터미널에서는 메뉴를 클릭해 고를 수는 없습니다.[^arrows]

이 폴더는 내가 방금 만들었으니 믿어도 됩니다. 남에게 받은 폴더라면 안을 먼저 살펴보세요.

<Quiz id="ch804-trust" />

## 시작 화면 읽기

`Yes`를 고르면 이런 화면이 나옵니다.

```text
 ▐▛███▛█   Claude Code v2.1.318
▝▜██████▀  Opus 5.5 · Claude 요금제 이름
 ▝▝   ▝▝   ~/hello-ai-연습/터미널

▎ Auto mode is now Claude Code's default permission mode.
▎ Auto mode lets Claude handle permission prompts automatically. Claude checks each tool call for
▎ risky actions and prompt injection before executing, runs the ones it assesses as lower-risk, and
▎ blocks the rest.
▎ https://code.claude.com/docs/en/permission-modes

────────────────────────────────────────────────────────────
❯ Try "create a util logging.py that..."
────────────────────────────────────────────────────────────
  ⏵⏵ auto mode on (shift+tab to cycle)                ◐ medium · /effort
```

위에서부터 읽어 보세요.

- **맨 위 세 줄**: 버전, 지금 모델, 작업 폴더입니다.[^header] 폴더가 내가 생각한 곳인지 꼭 보세요.
- **Auto mode 안내**: 처음 실행할 때 보이는 알림입니다.
- **`❯` 줄**: 입력창입니다. `Try`로 시작하는 글은 예시입니다. 내 글을 치면 사라집니다.
- **맨 아래 줄**: 왼쪽은 지금의 **권한 모드**입니다. 권한 모드는 Claude가 묻지 않고 해도 되는 일의 범위입니다.[^mode] 오른쪽의 `medium`은 13장에서 다룹니다.

터미널의 `claude`는 **자동 모드**(auto)로 시작합니다. 행동을 미리 살피는 별도의 AI가 위험해 보이는 것을 막습니다. 다만 자동 모드는 허락 창을 줄여 줄 뿐, 안전을 보장하지는 않습니다.[^auto] 자동 모드를 쓸 수 없는 세션은 수동으로 시작합니다. 맨 아래 줄을 기준으로 보세요.

처음에는 Claude가 무엇을 하려는지 눈으로 보는 편이 좋습니다. `Shift + Tab`을 한 번 눌러 수동 모드로 바꿔 보세요.[^shift-tab] 맨 아래 줄이 이렇게 바뀝니다.

```text
  ⏸ manual mode on · ? for shortcuts                  ◐ medium · /effort
```

수동 모드는 파일을 고치거나 명령을 실행하기 전에 대부분 먼저 묻습니다. 처음부터 `claude --permission-mode manual`로 시작해도 됩니다.[^manual] 모드는 7장에서 자세히 다룹니다.

<Quiz id="ch804-screen" />

## 첫 요청 — 회의록 만들기

이제 일을 시켜 봅니다. 동료에게 말하듯 쓰면 됩니다.[^colleague] 입력창에 이 문장을 넣고 Enter를 누르세요.

```text
inbox의 회의 메모를 읽고 회의록.md 로 저장해 줘. 답은 한 줄로.
```

`.md`는 마크다운(Markdown) 파일입니다. 메모장으로도 열 수 있는 글자 파일입니다.

요청은 구체적일수록 좋습니다.

- **아쉬운 예**: `회의록 만들어 줘` — 무엇을 읽고 어디에 둘지 Claude가 짐작해야 합니다.
- **나은 예**: 위 문장 — 읽을 것, 저장할 곳, 답의 길이가 다 있습니다.

수동 모드라면 Claude가 메모를 읽고 파일 내용을 보여 준 뒤 이렇게 묻습니다.

```text
 Do you want to create 회의록.md?
 ❯ 1. Yes
   2. Yes, and switch to accept edits (auto-approve file edits and common file commands) for this
      session (shift+tab)
   3. No

 Esc to cancel · Tab to amend
```

내용을 훑어보고 `1. Yes`에서 Enter를 누르세요.[^yes] 2번은 이 세션에서 파일 수정을 더 묻지 않게 바꾸는 선택이고, 3번은 거절입니다. 자동 모드로 두었다면 이 창 없이 저장될 수 있습니다. 이 가이드의 화면 기록은 수동 모드입니다.

끝나면 이런 식으로 답합니다.

```text
● 회의록.md로 정리했는데, 메모의 10/27(월)과 11/3(월)은 2026년 달력상 화요일이라 파일에 확인 필요로
  표시해 두었습니다.
```

요일 이야기가 나와도 놀라지 마세요. 연습 메모의 요일은 지어낸 것이라 달력과 맞지 않습니다. Claude가 그 점을 알아챈 것입니다. 답의 문장은 실행할 때마다 달라질 수 있습니다. 입력창에 다음 요청 제안이 흐리게 뜰 수도 있습니다. 쓰지 않아도 됩니다.

같은 메모로 만든 결과물은 [4장-회의록.txt](/practice/cli/results/4장-회의록.txt)에 있습니다. 내 결과와 비교해 보세요. 똑같을 필요는 없습니다.

<Quiz id="ch804-first" />

## 일 시키기와 멈추기

세션은 대화입니다. 앞의 일에 이어서 시킬 수 있습니다. 이번에는 파일을 고쳐 봅니다.

```text
회의록.md 맨 첫 줄에 "초안"이라는 한 줄을 넣어 줘. 답은 한 줄로.
```

이번에는 바뀌는 줄을 보여 주고 묻습니다. `+`가 붙은 줄이 새로 들어갈 줄입니다.

```text
 1 +초안
 2  # 모퉁이 카페 주간회의 회의록
 3
 4  - **일시:** 10/27(월)
```

그 아래에서 `Do you want to make this edit to 회의록.md?`라고 묻습니다. 바뀌는 줄의 모양은 내 회의록에 따라 다릅니다.

허락 창은 읽고 고르세요. 내가 시킨 일과 맞는지 볼 수 있는 순간입니다.

Claude가 엉뚱한 방향으로 가면 **`Esc`** 를 누르세요. 실행 중이던 일이 취소되고 Claude가 다음 지시를 기다립니다. 언제든 끼어들어 방향을 바꿀 수 있습니다.[^esc]

한 가지 기억해 두세요. 멈춰도 **지금까지 한 일은 남습니다.**[^esc-keep] 이미 저장된 파일이 저절로 되돌아가지는 않습니다. 되돌리는 법은 7장에서 배웁니다.

<Quiz id="ch804-stop" />

## 끝내기

입력창에 이렇게 치고 Enter를 누릅니다.[^exit]

```text
/exit
```

터미널의 프롬프트로 돌아옵니다. 이제 Claude Code 밖에 있습니다. 파일이 생겼는지 확인해 보세요.

```bash
ls
cat 회의록.md
```

PowerShell에서 한글이 깨지면 `Get-Content -Encoding UTF8 회의록.md`로 봅니다.

빈 입력창에서 `Ctrl + D`를 두 번 눌러도 끝납니다.[^ctrl-d] 처음에는 글자로 치는 `/exit`가 가장 헷갈리지 않습니다. 끝낸 대화를 이어 가는 법은 6장에서 다룹니다.

이제 두 곳을 구별해 봅니다. 앞으로 명령을 어디에 칠지는 이것으로 판단합니다.

- **터미널**: 커서 앞의 기호가 `%`, `$`, `>`입니다. `cd`, `ls`, `claude`는 여기에 칩니다.
- **Claude 입력창**: 맨 앞이 `❯`이고 위아래에 줄이 있습니다. 말로 하는 요청과 `/`로 시작하는 명령은 여기에 칩니다.

`/exit`를 터미널에 치면 오류가 납니다. `claude -p`(10장에서 배웁니다)를 입력창에 치면 Claude에게 보내는 말이 됩니다. 뒤의 장에서 "터미널에서" 하라는 명령은, 입력창이 보이면 `/exit`로 나온 뒤에 치세요.

<Quiz id="ch804-exit" />

## 직접 해 보기

1. `cd`로 연습 폴더에 들어가 `pwd`로 확인합니다.
2. `claude`를 켜고 신뢰 확인 창에서 `Yes, I trust this folder`를 고릅니다.
3. 시작 화면에서 폴더와 권한 모드를 읽습니다. `Shift + Tab`으로 수동 모드로 바꿉니다.
4. 회의록 요청을 보내고 허락 창을 읽은 뒤 `1. Yes`를 고릅니다.
5. "초안" 줄을 넣어 달라고 합니다.
6. `/exit`로 나와 `cat`으로 파일을 봅니다.

스스로 물어보세요. 파일이 생겼나? 메모의 결정과 할 일이 빠짐없이 들어갔나? 메모에 없는 내용이 끼어들지는 않았나? AI의 결과를 메모와 대조하는 습관은 여기서 시작합니다.

## 정리

- `cd`로 폴더에 들어간 뒤 `claude`를 켠다.
- 신뢰 확인 창의 기본 선택은 `No, exit`다. 아래쪽 화살표로 `Yes`를 고른다.
- 시작 화면에서 폴더와 권한 모드를 읽는다. 터미널은 자동 모드로 시작하고, `Shift + Tab`으로 바꾼다.
- 요청에는 읽을 것과 저장할 곳을 적는다. 허락 창은 읽고 고른다.
- `Esc`는 멈추기다. 지금까지 한 일은 남는다.
- `/exit`로 끝내고, 결과는 메모와 대조한다.
- 기호가 `%`, `$`, `>`이면 터미널, `❯`이면 Claude 입력창이다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Session | 세션 | Claude Code를 켜고 끝낼 때까지의 대화 한 묶음 |
| Permission mode | 퍼미션 모드 | 묻지 않고 해도 되는 일의 범위(권한 모드) |
| Auto mode | 오토 모드 | 별도의 AI가 미리 살펴 허락 창을 줄이는 모드 |
| Manual mode | 매뉴얼 모드 | 대부분 먼저 묻는 모드 |
| Markdown | 마크다운 | 제목과 목록을 기호로 적는 글자 파일 형식 |

<ChapterDone :chapter="804" />

다음 장: [5장. 입력 요령과 명령](05-input-commands.md)

[^start]: Claude Code 공식 문서, 「Quickstart」. "Open your terminal in any project directory and start Claude Code:" https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^header]: Claude Code 공식 문서, 「Quickstart」. "The Claude Code prompt appears with the version, current model, and working directory shown above it." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^arrows]: Claude Code 공식 문서, 「Terminal guide for new users」. "You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^mode]: Claude Code 공식 문서, 「Choose a permission mode」. "A permission mode sets which actions Claude can take in a session without asking you first." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^auto]: Claude Code 공식 문서, 「Choose a permission mode」. "With Claude Code v2.1.283 or later, auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." / "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." / "Auto mode reduces permission prompts but does not guarantee safety." / "When the flag, a settings file, or the built-in default selects `auto` but auto mode isn't available to the session, Claude Code starts the session in Manual instead." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^shift-tab]: Claude Code 공식 문서, 「Choose a permission mode」. "From `auto`, the first press switches to `default`, and the cycle then runs `default` → `acceptEdits` → `plan`." https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^manual]: Claude Code 공식 문서, 「Choose a permission mode」. "In Manual mode, Claude Code stops and asks you before most actions that edit files, run shell commands, or reach the network." https://code.claude.com/docs/en/permission-modes · 「Best practices for Claude Code」. "`Shift+Tab` in the session cycles through the permission modes, Manual included, or start with `claude --permission-mode manual` from your shell." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^colleague]: Claude Code 공식 문서, 「Quickstart」. "Talk to Claude like you would a helpful colleague." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^yes]: Claude Code 공식 문서, 「Quickstart」. "If it asks before making the change, select Yes to approve." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^esc]: Claude Code 공식 문서, 「How Claude Code works」. "The running tool call is canceled and Claude waits for your next instruction." / "You can interrupt at any point to steer Claude in a different direction, provide additional context, or ask it to try a different approach." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^esc-keep]: Claude Code 공식 문서, 「Interactive mode」. "Stop the current response or tool call mid-turn so you can redirect. Claude keeps the work done so far." https://code.claude.com/docs/en/interactive-mode (확인일 2026-11-06)
[^exit]: Claude Code 공식 문서, 「Commands」. "Exit the CLI." https://code.claude.com/docs/en/commands (확인일 2026-11-06)
[^ctrl-d]: Claude Code 공식 문서, 「Terminal guide for new users」. "Type `exit` or press `Ctrl + D` twice on an empty prompt to leave Claude Code." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
