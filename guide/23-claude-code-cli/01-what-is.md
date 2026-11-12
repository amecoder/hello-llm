# 1장. 터미널과 Claude Code

<Badge type="tip" text="필수" /> 이 단계를 따라가려면 꼭 읽으세요.

> **한 줄 요약**: 터미널은 글자로 컴퓨터에 일을 시키는 창입니다. 이 강좌는 터미널을 한 번도 안 열어 본 사람이 Claude Code를 설치하고, 마지막에는 명령 한 줄로 주간 메모를 정리하는 데까지 갑니다.[^tested]

처음부터 완벽할 필요는 없습니다. 코드를 몰라도 괜찮습니다. 원하는 것을 말로 설명하면 됩니다.[^no-code]

## 터미널이란

**터미널**(Terminal)은 마우스 대신 **글자로 명령을 쳐서** 컴퓨터를 다루는 창입니다. 깜빡이는 커서가 있는 까만(또는 하얀) 창을 떠올리면 됩니다.[^cursor]

평소에는 폴더를 더블클릭해서 엽니다. 터미널에서는 "이 폴더로 가"라고 글자로 칩니다. 하는 일은 같고 방법만 다릅니다.

터미널에서는 메뉴를 클릭해 고를 수는 없습니다. 화살표 키로 움직입니다.[^no-click] 처음에는 낯설어도 곧 익숙해집니다. 2장에서 꼭 필요한 명령만 차근차근 익힙니다.

<Quiz id="ch801-terminal" />

## 채팅과 무엇이 다른가

Claude 채팅 창을 써 봤다면 이런 순서가 익숙할 겁니다. 메모를 복사해 붙여 넣습니다. 답을 받습니다. 그 답을 다시 복사해 파일에 옮깁니다.

Claude Code는 터미널에서 도는 **에이전트형 도우미**입니다.[^agentic] 에이전트(Agent)는 답만 하지 않고 스스로 단계를 밟아 일을 하는 프로그램입니다. 일을 맡기면 맥락을 모으고, 행동하고, 결과를 확인합니다.[^phases]

같은 일을 나란히 놓고 보면 차이가 보입니다.

| | 채팅 창 | Claude Code |
|---|---|---|
| 메모 전달 | 직접 붙여 넣기 | 폴더에서 스스로 읽기 |
| 결과 | 글로 된 답 | 답과 파일 |
| 뒷정리 | 내가 옮겨 적기 | Claude가 저장 |

Claude Code는 필요한 파일을 알아서 읽습니다.[^reads] 이미 있는 파일을 읽고 정리할 수도 있습니다.[^organize] 그래서 이렇게 말하면 됩니다.

```text
inbox의 회의 메모를 읽고 회의록.md 로 저장해 줘. 답은 한 줄로.
```

지금 치지 않아도 됩니다. 4장에서 합니다.

파일을 직접 다루기 때문에 조심할 일도 생깁니다. 무엇을 허락할지는 뒤의 장에서 자세히 배웁니다.

<Quiz id="ch801-diff" />

## 내 컴퓨터의 터미널 열기

터미널은 컴퓨터에 이미 들어 있습니다. 따로 설치하지 않아도 됩니다. 내 운영체제에 맞는 방법으로 열어 보세요.

- **맥**: `Cmd + Space`를 눌러 Spotlight 검색을 엽니다. `Terminal`을 치고 Enter를 누릅니다.[^open-mac] 한글 상태라면 `터미널`이라고 쳐도 됩니다.
- **리눅스**: 대부분 `Ctrl + Alt + T`를 누르면 열립니다. 안 되면 프로그램 메뉴에서 "터미널"을 찾습니다.[^open-linux]
- **Windows**: `Win + X`를 누르고 메뉴에서 **Windows PowerShell** 또는 **터미널**(Terminal)을 고릅니다.[^open-win]

Windows에는 PowerShell과 CMD라는 두 가지 창이 있습니다. 쓰는 명령이 달라서 구별해야 합니다. 맨 앞에 `PS C:\`처럼 `PS`가 보이면 PowerShell이고, `PS` 없이 `C:\`로 시작하면 CMD입니다.[^ps-cmd] 이 강좌의 Windows 명령은 모두 **PowerShell** 기준입니다.

창이 떴다면 오늘 할 일의 절반은 끝났습니다. 연습이 끝나면 창을 그냥 닫아도 됩니다.

<Quiz id="ch801-open" />

## 준비물

필요한 것은 세 가지입니다.

1. **유료 계정**: 무료 claude.ai 요금제에는 Claude Code가 들어 있지 않습니다.[^free] Pro, Max 같은 유료 계정이 있어야 합니다.[^paid]
2. **맞는 컴퓨터**: 맥, Windows, 리눅스 모두 됩니다. 운영체제 버전과 메모리 조건은 아래 상자에 있습니다.
3. **인터넷 연결**: 꼭 필요합니다.[^ram]

::: details 자세히 (눌러서 펼치기)
- **쓸 수 있는 계정**: Pro, Max, Ultra, Team, Enterprise, Console 중 하나입니다.[^paid]
- **운영체제**: 맥은 macOS 13.0 이상, Windows는 Windows 10 1809 이상입니다.[^os] 리눅스는 Ubuntu 20.04 이상 등을 지원합니다.[^linux]
- **메모리**: 4GB 이상이어야 합니다.[^ram]
- **지역**: Anthropic이 지원하는 국가에서만 쓸 수 있습니다.[^countries]
:::

연습 자료는 이 강좌가 드립니다. 지어낸 카페 메모로 연습하니 내 파일을 건드릴 걱정 없이 시작할 수 있습니다.

<Quiz id="ch801-ready" />

## 이 강좌에서 만들 것

이 강좌에는 줄기가 하나 있습니다. **명령 한 줄로 도는 주간 정리**입니다.

작은 카페 「모퉁이 카페」 직원 서연의 메모로 연습합니다. 뒤죽박죽 회의 메모를 폴더에 넣습니다. 스크립트(script, 명령을 순서대로 적어 둔 파일) 하나를 실행합니다. 그러면 메모가 하나씩 회의록으로 정리됩니다.

미리 보고 싶다면 [완성된 스크립트](/practice/cli/results/10장-주간정리.sh.txt)와 [그 스크립트가 만든 회의록](/practice/cli/results/10장-회의록-스크립트로.txt)을 열어 보세요. 지금은 무슨 뜻인지 몰라도 됩니다.

이렇게 할 수 있는 이유는 Claude Code에 **한 번 답하고 끝나는 실행 방식**이 있기 때문입니다.[^oneshot] 대화를 주고받지 않습니다. 할 일을 한 줄로 건네면 답한 뒤 스스로 끝납니다. 이 방식은 10장에서 배웁니다.

일이 잘못되면 스크립트가 그 사실을 알아챌 수 있습니다.[^exit-code] 그래서 사람이 지켜보지 않아도 되는 일을 맡기기에 좋습니다.

강좌는 이런 순서로 갑니다.

- **1~5장**: 터미널 기초, 설치, 첫 세션, 입력 요령
- **6~9장**: 대화 이어 가기, 허락과 되돌리기, 프로젝트 기억, 스킬
- **10~13장**: 자동화, 훅, 동시 작업, 비용과 문제 해결[^bash-only]
- **14장**: 내 메모로 만드는 주간 정리

<Quiz id="ch801-goal" />

## 앱 가이드와의 관계

터미널 없이 창과 단추로 쓰고 싶은 사람을 위한 데스크톱 앱도 있습니다.[^gui] 이 사이트의 [Claude Code 앱 가이드](/guide/20-claude-code/)가 그 앱을 다룹니다.

어느 쪽을 볼지는 이렇게 고르면 됩니다.

- **터미널이 부담스럽다**: 앱 가이드로 가세요. 지금 터미널을 꼭 배워야 하는 것은 아닙니다.
- **명령 한 줄로 일을 돌리고 싶다**: 이 강좌를 계속 읽으세요.

이 강좌는 앱 가이드를 읽지 않았다고 가정합니다. 혼자 따라올 수 있습니다. 앱 가이드와 같은 모퉁이 카페 메모를 쓰니, 이미 읽었다면 내용이 낯익을 겁니다.

<Quiz id="ch801-app" />

## 직접 해 보기

1. 위 방법으로 내 컴퓨터의 터미널을 엽니다.
2. 아래 명령을 치고 Enter를 누릅니다.

```bash
claude --version
```

둘 중 하나가 나옵니다. 어느 쪽이든 괜찮습니다.

- `2.1.318 (Claude Code)`처럼 **숫자가 나온다**: 이미 설치되어 있습니다.[^version] 번호는 달라도 됩니다.
- `command not found`나 `not recognized`가 나온다: 아직 찾지 못한다는 뜻입니다.[^not-found] 화면 언어에 따라 한글로 나올 수 있습니다. 뜻은 같습니다. 3장에서 설치합니다. 고장 난 것이 아닙니다.

스스로 물어보세요. 내 컴퓨터의 터미널은 무엇인가? 맥의 터미널, 리눅스의 터미널, Windows의 PowerShell 중 하나로 답할 수 있으면 됩니다.

## 정리

- 터미널은 글자로 명령을 쳐서 컴퓨터를 다루는 창이다. 이미 컴퓨터에 들어 있다.
- Claude Code는 폴더의 파일을 스스로 읽고 만드는 에이전트형 도우미다.
- 유료 계정이 필요하다. 무료 요금제에는 없다.
- Windows의 명령은 PowerShell 기준이다. `PS`가 보이는지 확인한다.
- 이 강좌의 목표는 명령 한 줄로 도는 주간 정리다. 터미널이 부담스러우면 앱 가이드로 가도 된다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Terminal | 터미널 | 글자로 명령을 쳐서 컴퓨터를 다루는 창 |
| PowerShell | 파워셸 | Windows의 터미널 프로그램 |
| CMD | 씨엠디 | PowerShell과 명령이 다른 Windows의 옛 명령 창 |
| Agent | 에이전트 | 스스로 단계를 밟아 일을 하는 프로그램 |
| Script | 스크립트 | 명령을 순서대로 적어 둔 파일 |

<ChapterDone :chapter="801" />

다음 장: [2장. 터미널 기초](02-shell-basics.md)

[^tested]: 이 강좌는 2026년 11월 6일에 확인한 Claude Code 공식 문서를 바탕으로 썼습니다. 실행 결과는 같은 날 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다. 작성자의 개인 설정이 섞이지 않도록 그 설정을 끄고 돌렸습니다. macOS와 Windows에서는 실행해 보지 않았습니다. 그 두 곳의 내용은 공식 문서를 근거로 썼습니다. 이 안내는 뒤의 장에서 되풀이하지 않습니다. 실행해 보지 않은 기능은 그 자리에서 밝힙니다.
[^bash-only]: 이 강좌의 스크립트는 맥·리눅스의 bash(맥·리눅스 터미널이 명령을 알아듣는 방식) 기준입니다. Windows PowerShell에서는 그대로 돌지 않습니다. Windows는 저장한 파일 대신 블록을 붙여 넣어 돌립니다. 10장에서 다시 짚습니다.
[^no-code]: Claude Code 공식 문서, 「Terminal guide for new users」. "You don't need to know how to code." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^cursor]: Claude Code 공식 문서, 「Terminal guide for new users」. "A window will appear with a blinking cursor. This is your terminal, where you type commands." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^no-click]: Claude Code 공식 문서, 「Terminal guide for new users」. "You can't click on things in the terminal. Use the arrow keys to move around." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^agentic]: Claude Code 공식 문서, 「How Claude Code works」. "Claude Code is an agentic assistant that runs in your terminal." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^phases]: Claude Code 공식 문서, 「How Claude Code works」. "When you give Claude a task, it works through three phases: gather context, take action, and verify results." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^reads]: Claude Code 공식 문서, 「Quickstart」. "Claude Code reads your project files as needed." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^organize]: Claude Code 공식 문서, 「Terminal guide for new users」. "Claude can read and organize files you already have:" https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^open-mac]: Claude Code 공식 문서, 「Terminal guide for new users」. "Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^open-linux]: Claude Code 공식 문서, 「Terminal guide for new users」. "On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^open-win]: Claude Code 공식 문서, 「Terminal guide for new users」. "Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^ps-cmd]: Claude Code 공식 문서, 「Quickstart」. "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^paid]: Claude Code 공식 문서, 「Advanced setup」. "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^free]: Claude Code 공식 문서, 「Advanced setup」. "The free claude.ai plan does not include Claude Code access." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^os]: Claude Code 공식 문서, 「Advanced setup」. "macOS 13.0+" / "Windows 10 1809+ or Windows Server 2019+" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^linux]: Claude Code 공식 문서, 「Advanced setup」. "Ubuntu 20.04+" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^ram]: Claude Code 공식 문서, 「Advanced setup」. "4 GB+ RAM, x64 or ARM64 processor" / "internet connection required" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^countries]: Claude Code 공식 문서, 「Advanced setup」. "Anthropic supported countries" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^oneshot]: Claude Code 공식 문서, 「Quickstart」. "Run one-off query, then exit" https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^exit-code]: Claude Code 공식 문서, 「Run Claude Code programmatically」. "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." https://code.claude.com/docs/en/headless (확인일 2026-11-06)
[^gui]: Claude Code 공식 문서, 「Advanced setup」. "Prefer a graphical interface?" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^version]: Claude Code 공식 문서, 「Advanced setup」. "A working installation prints a version number such as `2.1.211 (Claude Code)`." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^not-found]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
