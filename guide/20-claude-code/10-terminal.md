# 10장. 터미널에서 쓰기 — 같은 정리 도구를 명령 한 줄로

> **한 줄 요약**: 터미널용 Claude Code는 데스크톱 앱과 **같은 엔진**입니다. 같은 폴더에서 열면 **CLAUDE.md·스킬·설정을 그대로** 씁니다.
> `claude -p "할 일"` 한 줄이면 묻고 답을 받은 뒤 바로 끝납니다. 반복 작업을 자동화할 때 쓸모가 큽니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서와, macOS 터미널에서 Claude Code 2.1.316을 실제로 실행한 결과를 바탕으로 썼습니다. **터미널이 처음이라면 이 장은 건너뛰어도 됩니다.** 데스크톱 앱만으로 정리 도구는 다 씁니다.

## 터미널이란

**터미널**(Terminal)은 마우스 대신 **글자로 명령을 쳐서** 컴퓨터를 다루는 창입니다. macOS는 「응용 프로그램 → 유틸리티 → 터미널」, Windows는 PowerShell을 씁니다. 공식 문서에도 터미널을 처음 여는 사람을 위한 안내가 따로 있습니다.[^install]

데스크톱 앱이 이미 있는데 터미널을 쓰는 이유는 두 가지입니다.

- **한 줄로 끝나는 일**: 질문 하나를 던지고 답만 받고 끝낼 수 있습니다.
- **자동화**: 다른 프로그램이나 스크립트에서 Claude Code를 부를 수 있습니다. 데스크톱 앱에는 이런 스크립트 실행 기능이 없습니다.[^no-script]

<Quiz id="ch410-why" />

## 설치하고 시작하기

터미널을 열고 내 컴퓨터에 맞는 명령 하나를 붙여 넣습니다.[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**처음 보는 사이트의 설치 명령은 그대로 붙여 넣지 마세요.** 위 명령은 인터넷에서 받은 스크립트를 바로 실행합니다. 반드시 **공식 문서(code.claude.com)에 적힌 그대로인지** 확인하고 실행합니다.

설치가 끝나면 일할 폴더로 이동해 `claude`를 칩니다.[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

처음에는 로그인하라고 나옵니다. 구독 계정이라면 브라우저에서 로그인을 마치면 됩니다.[^start] `cd`는 "이 폴더로 이동"이라는 뜻입니다. 데스크톱 앱에서 폴더를 고르는 것과 같은 일입니다.

<Quiz id="ch410-install" />

## 기본 명령

| 명령 | 하는 일 |
|---|---|
| `claude` | 대화형으로 시작(앱의 세션과 같음) |
| `claude "할 일"` | 첫 요청을 담아 대화형으로 시작 |
| `claude -p "할 일"` | 한 번 묻고 답을 받은 뒤 끝냄 |
| `claude -c` | 이 폴더의 가장 최근 대화 이어 가기 |
| `claude -r` | 지난 대화를 골라 이어 가기 |

출처: Claude Code 공식 문서[^commands]

대화형으로 시작한 뒤에는 앱처럼 `/` 명령을 씁니다. `/help`는 쓸 수 있는 명령을, `/resume`은 지난 대화를 보여 줍니다.[^start]

<Quiz id="ch410-commands" />

## 실습 — 정리 도구를 한 줄로 확인하기

정리도구 폴더에서 이렇게 실행해 봤습니다.

```bash
cd ~/hello-ai-연습/정리도구
claude -p "notes 폴더의 파일 목록을 보여 주고, 각 파일이 어떤 양식(templates 중 무엇)으로 쓰였는지 한 줄씩 알려 줘. 파일은 고치지 마. 답은 짧게 표로만."
```

몇 초 뒤 답이 나오고 바로 끝났습니다(전체 출력: [10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)).

| notes 파일 | 쓰인 양식 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

출처: 이 가이드의 실습 결과(2026-10-31). 답 끝에 "확인 범위: 4/4"도 붙었다.

앱에서 만든 **양식·CLAUDE.md·스킬을 터미널도 그대로 알아봤습니다.** 공식 문서도 터미널과 데스크톱 앱이 같은 엔진이고, CLAUDE.md로 설정과 프로젝트 기억을 함께 쓴다고 설명합니다.[^same] 그래서 7장의 스킬도 터미널에서 그대로 부를 수 있습니다.

```bash
claude -p "/weekly-review"
```

다만 `-p`로 한 번에 끝내는 실행은 **중간에 허락을 물어볼 수 없습니다.** 허락이 필요한 일은 허용 규칙으로 미리 허락해 두지 않으면 거절됩니다.[^p-deny] 그러니 처음에는 위 실습처럼 **읽기만 하는 질문**으로 연습하세요.

<Quiz id="ch410-practice" />

## 앱과 터미널 오가기

- 두 곳을 **동시에, 같은 폴더에서** 써도 됩니다. 세션 목록은 따로지만 설정과 CLAUDE.md는 함께 씁니다.[^same]
- 터미널에서 하던 대화를 앱으로 넘기려면 터미널에서 `/desktop`을 칩니다(macOS·Windows x64, 구독 로그인).[^to-desktop]
- 반대로 앱 첫 화면의 **「Claude Code CLI 세션 가져오기」**로 터미널에서 했던 세션을 앱으로 가져올 수 있습니다(2장 첫 화면의 안내 카드).

<Quiz id="ch410-switch" />

## 직접 해 보기

1. 공식 문서의 설치 명령이 위와 같은지 직접 확인한 뒤 설치한다(이미 있으면 `claude --version`).
2. 정리도구 폴더로 이동해 위의 읽기 전용 `claude -p` 질문을 실행한다.
3. `claude`로 대화형을 열고 `/help`를 쳐 본다. `/`를 치고 7장의 스킬 이름이 보이는지 확인한다.
4. 대화를 끝내고 `claude -c`로 방금 대화를 이어 본다.

**이어지는 과제**: 11장에서는 지금까지의 기능을 모아, **내 메모**로 정리 도구를 처음부터 만들어 보는 과제를 합니다.

## 정리

- 터미널용 Claude Code는 앱과 같은 엔진이다. 같은 폴더면 CLAUDE.md·스킬·설정을 함께 쓴다.
- 설치 명령은 공식 문서에 적힌 그대로인지 확인하고 실행한다.
- `claude`는 대화형, `claude -p`는 한 번 묻고 끝, `claude -c`는 이어 가기.
- `-p` 실행은 중간에 허락을 물을 수 없다. 처음에는 읽기만 하는 질문으로 연습한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Terminal | 터미널 | 글자로 명령을 쳐서 컴퓨터를 다루는 창 |
| CLI | 씨엘아이 | 터미널에서 쓰는 프로그램(Command Line Interface) |
| `cd` | 씨디 | 다른 폴더로 이동하는 명령 |
| `-p` | 피 (print) | 한 번 묻고 답을 출력한 뒤 끝내는 실행 방식 |

<ChapterDone :chapter="410" />

다음 장: 11장 「실습 과제」는 준비 중입니다. 그동안 [3단계 목차](./)에서 앞으로 배울 내용을 볼 수 있습니다.

[^install]: Claude Code 공식 문서, 「Quickstart」. "To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (확인일 2026-10-31)
[^start]: Claude Code 공식 문서, 「Quickstart」. "Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart (확인일 2026-10-31)
[^commands]: Claude Code 공식 문서, 「Quickstart」. 명령 표: "Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart (확인일 2026-10-31)
[^no-script]: Claude Code 공식 문서, 「Desktop application」. 기능 비교 표 「Scripting and automation」 행의 Desktop 칸: "Not available" https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^same]: Claude Code 공식 문서, 「Desktop application」. "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^to-desktop]: Claude Code 공식 문서, 「Desktop application」. "To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^p-deny]: Claude Code 공식 문서, 「Choose a permission mode」. "Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
