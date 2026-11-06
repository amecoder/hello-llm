---
type: research
project: hello-llm
created: 2026-11-06
status: active
read: false
tags: [리서치, Claude-Code, 23-claude-code-cli, 터미널, 공식문서, 사실확인, 재사용]
---

# Claude Code 터미널 공식 자료 사실 확인 (2026-11-06)

## 이 문서의 용도

- 3단계 `guide/23-claude-code-cli/`(터미널을 처음 여는 비개발자, 개인 구독 계정 기준, 조직 배포·API 개발 제외)를 쓸 때 근거로 쓰는 **사실 확인 리포트**다. 본문에는 **VERIFIED** 값과 「실제 화면에서 직접 확인」 절만 쓴다.
- **확인 방법**: `https://code.claude.com/docs/llms.txt` 목록에서 문서 52개의 마크다운 원문을 2026-11-06에 내려받았다. 다섯 갈래(A~E)로 사실을 뽑고, 표의 영어 인용 689개를 `docs/tools/cc-verify.py` 로 원문과 대조했다(불일치 0). 문서 속 지시문은 데이터로만 다뤘다.
- **표기**: 근거 칸의 이름(slug) = `https://code.claude.com/docs/en/<이름>`(`plugins/install` 은 슬래시 그대로). 상태는 **VERIFIED**(원문에서 직접 읽음) / **충돌**(문서끼리 다름) / **UNVERIFIED**(찾지 못함).
- **이전 리포트와의 관계**: `2026-10-31_Claude-Code-공식-자료.md` 는 데스크톱 앱 기준이다. 터미널 내용은 이 문서가 더 새 값이다.

## 결론 — 가이드에 꼭 반영할 것

1. **대화형 터미널의 시작 권한 모드는 자동(auto)이다**(v2.1.283 이상, 모든 요금제, B12·E15). `claude -p` 는 반대로 수동(Manual)으로 시작한다(v2.1.302 이상, D22). 앱 가이드 10장의 설명만 보면 놓친다.
2. **`--bare` 는 구독 로그인을 읽지 않는다**(D30). 문서는 스크립트에 권장하지만 구독 독자에게 그대로 권하면 로그인 실패가 난다.
3. **되감기는 Claude의 파일 편집 도구가 고친 파일만 되돌린다**(B57~B62). Bash로만 바뀐 파일과 외부 작업은 Git으로 다룬다.
4. **구독 계정의 `-p` 사용량이 한도에서 어떻게 깎이는지는 문서에 없다**(D37 UNVERIFIED). `/usage` 로 직접 보라고만 쓴다.
5. **`/agents` 마법사는 없어졌다**(C31, 화면 실측). 서브에이전트는 Claude에게 부탁하거나 파일로 만든다.

## 실제 화면에서 직접 확인

2026-11-06, 리눅스, Claude Code 2.1.318, 구독 로그인. 임시 연습 폴더에서 지어낸 카페 메모로만 실행했다. 내 개인 설정이 결과에 섞이지 않도록 `--setting-sources project` 를 붙였다. 독자에게 보여 줄 명령에서는 이 옵션을 뺀다. macOS·Windows에서는 실행하지 않았다.

| # | 확인한 것 | 결과 |
|---|---|---|
| R1 | 처음 여는 폴더의 신뢰 확인 창 | 제목 `Accessing workspace:`. 커서 기본 위치가 `No, exit` 라서 그냥 Enter를 누르면 프로그램이 끝난다. 아래 화살표로 `Yes, I trust this folder` 를 고른다 |
| R2 | 시작 화면 | 버전, 모델, 폴더가 위에 보이고, 아래 상태 줄에 `auto mode on (shift+tab to cycle)` 가 보인다 |
| R3 | Shift+Tab 순서 | auto → manual → accept edits → plan → auto. 첫 실행 때 자동 모드 안내 문구(`Auto mode is now Claude Code's default permission mode.`)가 보인다 |
| R4 | `/` 목록 | 설명이 붙은 명령 목록이 뜬다. 내용은 설치한 스킬·플러그인에 따라 달라진다 |
| R5 | `@inbox` | 폴더와 파일 후보가 입력창 아래에 뜬다 |
| R6 | `! ls` | 결과가 대화에 들어가고 Claude가 이어서 답한다 |
| R7 | 파일 만들기 허락 창 | `Do you want to create 회의록2.md?` 선택지 `1. Yes` / `2. Yes, and switch to accept edits (...) for this session (shift+tab)` / `3. No`, 아래 `Esc to cancel · Tab to amend` |
| R8 | 파일 고치기 허락 창 | 바뀌는 줄을 보여 주고 `Do you want to make this edit to 회의록2.md?` 를 묻는다 |
| R9 | 되감기 메뉴(Esc 두 번) | 제목 `Rewind`, 보낸 메시지와 바뀐 파일이 목록으로 보인다. 고르면 `Restore code and conversation` / `Restore conversation` / `Restore code` / `Summarize from here` / `Summarize up to here` 다섯 가지와 `Restored files go back whole, losing later changes by anyone. Bash changes to other files are not undone.` 경고가 나온다. 복원 결과는 R32 |
| R10 | `/rename 주간회의-정리` | `Session renamed to: 주간회의-정리` |
| R11 | `claude -r` | `Resume session` 목록에 이름 붙인 세션이 보인다. Space 미리 보기, Ctrl+R 이름 바꾸기, 글자를 치면 검색 |
| R12 | `/permissions` | 탭 `Permissions` · `Recently blocked` · `Allow` · `Ask` · `Deny` · `Auto mode` · `Workspace` |
| R13 | `claude -p` 읽기 질문 | 답을 내고 끝났다 |
| R14 | `claude -p` 쓰기 요청, 허용 없음 | 파일을 만들지 않고 저장하지 못했다고 답했다. 본문 내용은 답에 보여 줬다 |
| R15 | `--allowedTools "Read,Write"` | 같은 요청으로 파일이 생겼다 |
| R16 | `cat 파일 \| claude -p "..."` | 파이프 입력으로 할 일 세 줄을 뽑았다 |
| R17 | `--output-format json` | `result`, `num_turns`, `total_cost_usd`, `session_id` 칸을 확인했다 |
| R18 | `--max-turns 1` | `Error: Reached max turns (1)` 가 나오고 종료 코드는 1이다 |
| R19 | CLAUDE.md | 새 `-p` 실행이 규칙 세 줄을 답했다 |
| R20 | 스킬 `/meeting-notes 파일` | `-p` 로 불러 `notes/회의록-2026-10-27.md` 를 만들었다 |
| R21 | 거부 규칙 `Read(./비밀/**)` | 파일을 읽지 못했다고 답하고 내용을 보여 주지 않았다 |
| R22 | 훅(PostToolUse, `Write\|Edit`) | `변경기록.txt` 에 한 줄이 남았다. `/hooks` 는 읽기 전용이며 `This menu is read-only. To add or change a hook, edit settings.json or ask Claude.` 라고 안내한다 |
| R23 | `statusLine` | 입력창 아래 줄에 스크립트 출력이 보였다 |
| R24 | `claude mcp add --transport http ...` · `list` · `remove` | `✔ Connected` 까지 확인하고 지웠다 |
| R25 | `claude doctor` | 세션 없이 설치 방식, 버전, 자동 업데이트 상태를 출력했다 |
| R26 | `claude --worktree memo-fix` | `.claude/worktrees/memo-fix` 폴더에서 열렸다. 세션 이름을 붙이지 않고 변경 없이 끝내니 `Worktree removed (no changes)` 로 지워졌다. 문서(D87)와 같다. worktree 이름과 세션 이름은 다르다. 세션에 이름을 붙이면 먼저 묻는다고 문서는 적는다 |
| R27 | `/compact` 를 대화 없이 실행 | `Not enough messages to compact.` |
| R28 | `/agents` | `The /agents wizard has been removed.` |
| R29 | `/btw` | 별도 칸에 답이 뜨고 Esc로 닫는다 |
| R30 | 스크립트의 변수 이름 | bash는 한글 변수 이름을 받지 않는다(`적절한 식별자 아님`). 파일 이름은 한글이어도 되지만 변수는 영어로 쓴다 |
| R31 | 터미널이 아닌 곳에서 부른 `-p` | `Warning: no stdin data received in 3s` 가 나올 수 있다. 입력이 없다는 안내이고 실행은 이어졌다 |
| R32 | 되감기 실제 복원(`Restore code and conversation`) | 파일이 그 전 내용으로 돌아갔고 보낸 메시지가 입력창에 되돌아왔다 |
| R33 | 대화가 쌓인 뒤 `/compact` | `Compacted (ctrl+o to see full summary)` |
| R34 | `/clear` | 화면이 비워지고 새 대화로 시작했다 |
| R35 | `claude -c` | 이 폴더의 가장 최근 세션이 열렸다 |
| R36 | `claude -r 이름` | 같은 이름의 세션이 둘일 때(`/clear` 뒤)는 바로 열지 않고 그 이름으로 걸러진 목록을 보여 줬다 |
| R37 | `claude -p "..." > 요약.txt` | 답이 파일에 저장되고 종료 코드는 0이었다 |
| R38 | `/mcp` | `Manage MCP servers` 화면이 열렸다. 내용은 계정마다 달라 싣지 않는다 |
| R39 | 독자 순서 재실행(새 폴더, `.gitignore`, 첫 기록) | `비밀/`·`.claude/worktrees/` 를 넣은 뒤 `git add .` 로 첫 기록을 남겼고 `비밀` 파일은 추적되지 않았다. `git status --short` 는 한글 파일 이름을 `\355\232...` 처럼 보여 준다 |
| R40 | `@` 후보 고르기 | 위아래 화살표로 고르고 Tab으로 넣는다 |
| R41 | 일하는 중 Esc | `Interrupted · What should Claude do instead?` |
| R42 | Ctrl+Z | `Claude Code has been suspended. Run `fg` to bring Claude Code back.` 후 `fg` 로 돌아온다 |
| R43 | `claude -p "@파일 ..."` | 파이프 없이 파일을 넘겨 할 일을 뽑았다 |
| R44 | 새 폴더의 첫 요청 | `회의록.md` 를 수동 모드 허락 창(R7)으로 만들었다. 입력창에는 다음 요청 제안이 흐리게 뜰 수 있다 |
| R45 | 실제 터미널 그림 | 2026-11-06 Claude Code가 2.1.319로 자동 업데이트된 뒤 리눅스 gnome-terminal 창을 찍었다. 요금제 이름은 그림에서 가렸다. 셸 명령 허락 창은 `Do you want to proceed?` 아래 `Yes` / `Yes, allow reading from ...` / `Yes, and switch to auto mode` / `No` 네 가지였다 |

원본 로그는 작업용 임시 폴더에 두었다. 공개 저장소에는 결과물만 넣었다.

실행하지 않은 것: `/remote-control`(휴대폰 연결 필요), `/loop`·`/goal`(반복 실행), `/plugin` 설치, `/sandbox` 켜기, `/init`, `/statusline` 생성. 이 항목은 공식 문서 근거로만 쓴다.

## 가이드 목차

`docs/plans/2026-11-06_Claude-Code-터미널-강좌-계획.md` 의 14장 구성을 따른다.

---

# 부록 A — 설치·입력·명령·단축키·문제 해결

담당 문서: quickstart, setup, authentication, terminal-config, interactive-mode, commands, cli-reference, keybindings, fullscreen, troubleshoot-install. 개인 구독 계정 기준. 조직 배포·클라우드 제공자·API 내용은 뺐다.

## 1. 지원 환경과 준비물

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A1 | macOS는 13.0 이상이어야 한다 | VERIFIED | setup | "macOS 13.0+" | — |
| A2 | Windows는 10 버전 1809 이상(또는 Windows Server 2019 이상)이어야 한다 | VERIFIED | setup | "Windows 10 1809+ or Windows Server 2019+" | — |
| A3 | Linux는 Ubuntu 20.04 이상, Debian 10 이상, Alpine 3.19 이상을 지원한다 | VERIFIED | setup | "Ubuntu 20.04+" | — |
| A4 | 메모리 4GB 이상, x64 또는 ARM64 프로세서가 필요하다 | VERIFIED | setup | "4 GB+ RAM, x64 or ARM64 processor" | — |
| A5 | 인터넷 연결이 꼭 필요하다 | VERIFIED | setup | "internet connection required" | — |
| A6 | 쓸 수 있는 셸은 Bash, Zsh, PowerShell, CMD다 | VERIFIED | setup | "Bash, Zsh, PowerShell, or CMD." | — |
| A7 | Anthropic이 지원하는 국가에서만 쓸 수 있다 | VERIFIED | setup | "Anthropic supported countries" | — |
| A8 | 무료 claude.ai 플랜에는 Claude Code가 포함되지 않는다 | VERIFIED | setup | "The free claude.ai plan does not include Claude Code access." | — |
| A9 | Pro, Max, Ultra, Team, Enterprise, Console 중 한 계정이 있어야 한다 | VERIFIED | setup | "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." | — |
| A10 | 터미널을 한 번도 안 써 본 사람을 위한 별도 안내(터미널 가이드)가 있다 | VERIFIED | quickstart | "If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." | — |
| A11 | 터미널 없이 쓰려는 사람을 위한 데스크톱 앱이 있다 | VERIFIED | setup | "Prefer a graphical interface?" | — |
| A12 | 처음 시작할 때 터미널과 작업할 코드 프로젝트 폴더가 있으면 된다 | VERIFIED | quickstart | "A code project to work with" | — |

## 2. 운영체제별 설치 명령

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A13 | 맥·리눅스·WSL의 권장 설치 명령은 curl로 설치 스크립트를 받아 bash로 실행하는 한 줄이다 | VERIFIED | quickstart | "curl -fsSL https://claude.ai/install.sh \| bash" | — |
| A14 | 윈도우 PowerShell은 irm 명령을 쓴다 | VERIFIED | quickstart | "irm https://claude.ai/install.ps1 \| iex" | — |
| A15 | 윈도우 CMD는 curl로 내려받은 설치 파일을 실행하고 지우는 한 줄을 쓴다 | VERIFIED | quickstart | "curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd" | — |
| A16 | PowerShell인지 CMD인지는 프롬프트 모양으로 구별한다 | VERIFIED | quickstart | "On Windows, your prompt shows `PS C:\` when you're in PowerShell and `C:\` without the `PS` when you're in CMD." | — |
| A17 | 설치 명령은 내려받는 동안 진행 표시가 없다 | VERIFIED | quickstart | "The install command shows no progress while it downloads Claude Code." | — |
| A18 | 설치가 끝나면 새 터미널 창을 열고 버전을 확인한다 | VERIFIED | quickstart | "When the installer finishes, open a new terminal window and run `claude --version`." | `claude --version` |
| A19 | 맥에서는 Homebrew로도 설치할 수 있다 | VERIFIED | quickstart | "brew install --cask claude-code" | — |
| A20 | 윈도우에서는 WinGet으로도 설치할 수 있다 | VERIFIED | quickstart | "winget install Anthropic.ClaudeCode" | — |
| A21 | Debian·Fedora·RHEL·Alpine에서는 apt, dnf, apk로도 설치할 수 있다 | VERIFIED | quickstart | "You can also install with apt, dnf, or apk on Debian, Fedora, RHEL, and Alpine." | — |
| A22 | 윈도우에서는 관리자 권한으로 실행하지 않아도 된다 | VERIFIED | setup | "You do not need to run as Administrator." | — |
| A23 | 윈도우에 Git for Windows를 깔아 두면 Bash 도구를 쓸 수 있어 권장된다 | VERIFIED | quickstart | "Git for Windows is recommended on native Windows so Claude Code can use the Bash tool." | — |
| A24 | Git for Windows가 없으면 PowerShell을 셸 도구로 쓴다 | VERIFIED | quickstart | "If Git for Windows is not installed, Claude Code uses PowerShell as the shell tool instead." | — |
| A25 | WSL에서는 WSL 터미널 안에서 설치하고 실행한다 | VERIFIED | setup | "You install and launch `claude` inside the WSL terminal, not from PowerShell or CMD." | — |
| A26 | Alpine 리눅스는 bash와 curl이 기본으로 없어 먼저 깔아야 한다 | VERIFIED | setup | "Alpine doesn't include `bash` or `curl` by default, so the documented install command fails with a `not found` error until you install them." | — |
| A27 | 다른 셸용 명령을 붙여 넣으면 PowerShell에서 '&&' 오류가 난다 | VERIFIED | quickstart | "If you see `The token '&&' is not a valid statement separator`, you're in PowerShell, not CMD." | — |
| A28 | CMD에서 irm 오류가 나면 PowerShell이 아니라 CMD에 있다는 뜻이다 | VERIFIED | quickstart | "If you see `'irm' is not recognized as an internal or external command`, you're in CMD, not PowerShell." | — |
| A29 | 맥·리눅스용 curl 명령을 윈도우 PowerShell에 붙이면 '-fsSL' 오류가 난다 | VERIFIED | troubleshoot-install | "you ran the macOS/Linux `curl -fsSL ... \| bash` installer in Windows PowerShell, where `curl` is an alias for `Invoke-WebRequest` and rejects the `-fsSL` flags" | — |
| A30 | irm 명령만 단독으로 실행하면 설치되지 않고 스크립트 글자만 출력된다 | VERIFIED | troubleshoot-install | "`irm https://claude.ai/install.ps1` on its own prints the downloaded script to the terminal." | — |

## 3. 설치 확인

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A31 | 설치 확인은 `claude --version`을 실행해 버전 숫자가 나오는지 본다 | VERIFIED | quickstart | "The command prints a version number followed by `(Claude Code)`." | `claude --version` |
| A32 | 정상이면 `2.1.211 (Claude Code)`처럼 출력된다 | VERIFIED | setup | "A working installation prints a version number such as `2.1.211 (Claude Code)`." | `claude --version` |
| A33 | `claude doctor`는 세션을 열지 않고 설치·설정 진단을 읽기 전용으로 보여 준다 | VERIFIED | setup | "prints read-only installation and settings diagnostics without starting a session" | `claude doctor` |
| A34 | `claude: command not found`가 뜨면 설치 폴더가 PATH에 없는 것이다 | VERIFIED | quickstart | "the install directory isn't on your PATH yet" | — |

## 4. 업데이트

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A35 | 기본(네이티브) 설치는 백그라운드에서 자동으로 업데이트된다 | VERIFIED | quickstart | "Native installations automatically update in the background to keep you on the latest version." | — |
| A36 | 업데이트는 백그라운드에서 받고, 다음에 Claude Code를 켤 때 적용된다 | VERIFIED | setup | "Updates download and install in the background, then take effect the next time you start Claude Code." | — |
| A37 | Homebrew 설치는 자동 업데이트가 되지 않는다 | VERIFIED | quickstart | "Homebrew installations do not auto-update." | — |
| A38 | Homebrew는 `brew upgrade`로 수동 업데이트한다 | VERIFIED | quickstart | "Run `brew upgrade claude-code` or `brew upgrade claude-code@latest`, depending on which cask you installed, to get the latest features and security fixes." | — |
| A39 | WinGet 설치도 자동 업데이트가 안 되어 가끔 직접 업그레이드해야 한다 | VERIFIED | quickstart | "Run `winget upgrade Anthropic.ClaudeCode` periodically to get the latest features and security fixes." | — |
| A40 | 지금 바로 업데이트하려면 셸에서 `claude update`를 실행한다 | VERIFIED | cli-reference | "Update to latest version" | `claude update` |
| A41 | 이미 최신이면 `Claude Code is up to date (버전)`이라고 알려 준다 | VERIFIED | setup | "If you're already on the newest version, it reports `Claude Code is up to date (<version>)`." | `claude update` |
| A42 | 업데이트 채널은 latest(기본, 새 기능 즉시)와 stable(약 1주 늦음) 두 가지다 | VERIFIED | setup | "use a version that is typically about one week old, skipping releases with major regressions" | `/config` |
| A43 | 자동 업데이트가 실패하면 화면 아래에 빨간 안내가 뜨지만 작업은 계속할 수 있다 | VERIFIED | troubleshoot-install | "You can keep working without doing anything." | — |
| A44 | 실패한 업데이트를 마무리하려면 셸에서 `claude update`를 실행한다 | VERIFIED | troubleshoot-install | "To finish the update or see why it failed, run `claude update` in your shell instead." | `claude update` |

## 5. 로그인

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A45 | 처음 실행하면 로그인하라는 안내가 나온다 | VERIFIED | quickstart | "Claude Code prompts you to log in on first use." | — |
| A46 | 로그인은 `claude`를 실행하고 브라우저 안내를 따르면 된다 | VERIFIED | setup | "After installing, log in by running `claude` and following the browser prompts." | `claude` |
| A47 | 개인 구독자는 claude.ai 계정으로 로그인한다 | VERIFIED | authentication | "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." | — |
| A48 | 브라우저가 자동으로 안 열리면 c 키로 로그인 주소를 복사해 직접 붙여 넣는다 | VERIFIED | authentication | "If the browser doesn't open automatically, press `c` to copy the login URL to your clipboard, then paste it into your browser." | — |
| A49 | 브라우저가 코드를 보여 주면 터미널의 'Paste code here' 칸에 붙여 넣는다 | VERIFIED | authentication | "If your browser shows a login code instead of redirecting back after you sign in, paste it into the terminal at the `Paste code here if prompted` prompt." | — |
| A50 | 로그인에 성공하면 `Login successful`이 뜨고 Enter를 누르라고 한다 | VERIFIED | authentication | "When login completes, the terminal shows `Login successful` and prompts you to press `Enter` to continue." | — |
| A51 | 한 번 로그인하면 인증 정보가 저장되어 다시 로그인하지 않아도 된다 | VERIFIED | quickstart | "Once logged in, your credentials are stored and you won't need to log in again." | — |
| A52 | 계정을 바꾸거나 다시 인증하려면 실행 중에 `/login`을 입력한다 | VERIFIED | quickstart | "To switch accounts later or re-authenticate, type `/login` inside the running session." | `/login` |
| A53 | 로그아웃은 `/logout`이고, 다음 실행 때 로그인과 첫 설정을 다시 거친다 | VERIFIED | authentication | "Logging out also resets your first-launch setup state, so the next time you run `claude` it walks you through login and setup again." | `/logout` |
| A54 | 셸에서는 `claude auth login`으로 로그인할 수 있다 | VERIFIED | cli-reference | "Sign in to your Anthropic account." | `claude auth login` |
| A55 | `claude auth status`는 로그인 상태를 JSON으로 보여 주고, 로그인 안 됐으면 종료 코드 1을 준다 | VERIFIED | cli-reference | "Exits with code 0 if logged in, 1 if not." | `claude auth status` |
| A56 | 구독이 있어도 환경 변수 ANTHROPIC_API_KEY가 있으면 승인 후 API 키가 우선 쓰인다 | VERIFIED | authentication | "If you have an active Claude subscription but also have `ANTHROPIC_API_KEY` set in your environment, Claude Code uses the API key once you approve it." | — |
| A57 | 구독으로 되돌리려면 `unset ANTHROPIC_API_KEY` 후 `/status`로 확인한다 | VERIFIED | authentication | "Run `unset ANTHROPIC_API_KEY` to fall back to your subscription, and check `/status` to confirm which method is active." | `/status` |
| A58 | 로그인 정보는 리눅스에서 `~/.claude/.credentials.json` 파일에 저장된다 | VERIFIED | authentication | "On Linux, credentials are stored in `~/.claude/.credentials.json` with file mode `0600`." | — |
| A59 | 맥에서는 암호화된 macOS 키체인에 저장된다 | VERIFIED | authentication | "On macOS, credentials are stored in the encrypted macOS Keychain." | — |
| A60 | 로그인 만료 3일 전에 시작 화면에 갱신 경고가 뜬다 | VERIFIED | authentication | "Run `/login` to renew." | `/login` |
| A61 | 로그인이 꼬였을 때는 `/logout` 후 Claude Code를 닫고 다시 `claude`로 시작한다 | VERIFIED | troubleshoot-install | "Run `/logout` to sign out completely" | `/logout` |
| A62 | 로그인 코드는 시간이 지나거나 복사 중 잘리면 'Invalid code' 오류가 난다 | VERIFIED | troubleshoot-install | "the login code expired or was truncated during copy-paste." | — |
| A63 | 원격(SSH) 접속에서는 브라우저가 엉뚱한 컴퓨터에서 열릴 수 있다 | VERIFIED | troubleshoot-install | "If using a remote/SSH session, the browser may open on the wrong machine." | — |
| A64 | 코드 붙여넣기가 안 먹히면 `claude auth login`을 쓴다 | VERIFIED | troubleshoot-install | "or use `claude auth login` instead, which reads the pasted code from standard input" | `claude auth login` |
| A65 | 계정 두 개를 쓰려면 계정마다 설정 폴더를 따로 준다 | VERIFIED | authentication | "give each account its own configuration directory" | — |

## 6. 첫 실행과 첫 대화

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A66 | 작업할 프로젝트 폴더에서 터미널을 열고 `claude`를 실행한다 | VERIFIED | quickstart | "Open your terminal in any project directory and start Claude Code:" | `claude` |
| A67 | 시작하면 프롬프트 위에 버전, 현재 모델, 작업 폴더가 보인다 | VERIFIED | quickstart | "The Claude Code prompt appears with the version, current model, and working directory shown above it." | — |
| A68 | 시작 후 `/help`로 명령을 보고 `/resume`으로 이전 대화를 이어 간다 | VERIFIED | quickstart | "Type `/help` for available commands or `/resume` to continue a previous conversation." | `/help` |
| A69 | 파일을 직접 첨부하지 않아도 Claude가 필요한 프로젝트 파일을 알아서 읽는다 | VERIFIED | quickstart | "Claude Code reads your project files as needed." | — |
| A70 | 첫 질문 예시는 "what does this project do?"다 | VERIFIED | quickstart | "what does this project do?" | — |
| A71 | 변경 전에 허락을 물으면 Yes를 골라 승인한다 | VERIFIED | quickstart | "If it asks before making the change, select Yes to approve." | — |
| A72 | 동료에게 말하듯 원하는 바를 적으면 된다 | VERIFIED | quickstart | "Talk to Claude like you would a helpful colleague." | — |
| A73 | 요청은 구체적일수록 좋다(예: 어떤 화면에서 무슨 일이 생기는지까지 적기) | VERIFIED | quickstart | "fix the login bug where users see a blank screen after entering wrong credentials" | — |
| A74 | `claude "질문"`은 첫 질문을 담아 대화형으로 시작한다 | VERIFIED | quickstart | "Start interactive mode with an initial prompt" | `claude "task"` |
| A75 | `claude -p "질문"`은 한 번 답하고 끝낸다 | VERIFIED | quickstart | "Run one-off query, then exit" | `claude -p` |
| A76 | `claude -c`는 현재 폴더의 가장 최근 대화를 이어 간다 | VERIFIED | quickstart | "Continue most recent conversation in current directory" | `claude -c` |
| A77 | `claude -r`은 이전 대화를 골라 다시 연다 | VERIFIED | quickstart | "Resume a previous conversation" | `claude -r` |
| A78 | 종료는 `/exit` 또는 Ctrl+D 두 번이다 | VERIFIED | quickstart | "Ctrl+D twice" | `/exit` |
| A79 | Ctrl+D 첫 번째는 확인 안내만 보이고 800ms 안에 한 번 더 눌러야 종료된다 | VERIFIED | interactive-mode | "The first press shows a confirmation hint and a second press within 800ms exits." | — |
| A80 | 프롬프트에 글자가 있을 때 Ctrl+D는 커서 뒤 글자를 지운다 | VERIFIED | interactive-mode | "When the prompt has text, `Ctrl+D` deletes the character after the cursor instead" | — |

## 7. 프롬프트 입력 요령

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A81 | Enter는 메시지를 보낸다 | VERIFIED | terminal-config | "Pressing Enter submits your message." | — |
| A82 | 줄바꿈은 Ctrl+J, 또는 `\`를 치고 Enter다. 어느 터미널에서나 설정 없이 된다 | VERIFIED | terminal-config | "To add a line break without submitting, press Ctrl+J, or type `\` and then press Enter." | — |
| A83 | Shift+Enter 줄바꿈은 Ghostty, Kitty, iTerm2, WezTerm, Warp, Apple 터미널, Windows Terminal에서 설정 없이 된다 | VERIFIED | terminal-config | "Ghostty, Kitty, iTerm2, WezTerm, Warp, Apple Terminal, Windows Terminal" | — |
| A84 | VS Code, Cursor, Zed 등에서는 `/terminal-setup`을 한 번 실행해야 Shift+Enter가 된다 | VERIFIED | terminal-config | "VS Code, Cursor, Devin Desktop, Alacritty before 0.16, Zed" | `/terminal-setup` |
| A85 | gnome-terminal과 JetBrains IDE 터미널은 Shift+Enter를 쓸 수 없어 Ctrl+J나 `\`+Enter를 쓴다 | VERIFIED | terminal-config | "gnome-terminal, JetBrains IDEs such as PyCharm and Android Studio" | — |
| A86 | 맥에서 Option+Enter 줄바꿈은 Option을 Meta로 설정한 뒤에 된다 | VERIFIED | interactive-mode | "After enabling Option as Meta on macOS" | — |
| A87 | 프롬프트 맨 앞의 `/`는 명령이나 스킬을 부른다 | VERIFIED | interactive-mode | "Command or skill" | `/` |
| A88 | 프롬프트 맨 앞의 `!`는 셸 모드로, 명령을 직접 실행하고 결과를 대화에 넣는다 | VERIFIED | interactive-mode | "Run a command directly, add its output to the session, and have Claude respond to it" | `!` |
| A89 | `@`를 치면 파일 경로 자동 완성이 뜬다 | VERIFIED | interactive-mode | "Trigger file path autocomplete." | `@` |
| A90 | 입력창이 비어 있을 때 `?`를 치면 단축키 도움말이 열린다 | VERIFIED | interactive-mode | "Toggle the shortcut help panel" | `?` |
| A91 | 셸 모드 예시는 `! npm test`, `! git status`, `! ls -la`다 | VERIFIED | interactive-mode | "Run shell commands directly without going through Claude by prefixing your input with `!`:" | `!` |
| A92 | 셸 모드는 빈 입력창에서 Escape, Backspace, Ctrl+U로 빠져나온다 | VERIFIED | interactive-mode | "Exit with `Escape`, `Backspace`, or `Ctrl+U` on an empty prompt" | `!` |
| A93 | 셸 모드에서 친 명령은 샌드박스 밖에서 실행된다 | VERIFIED | interactive-mode | "commands you type in shell mode run outside the sandbox even when you've enabled sandboxing" | `!` |
| A94 | 셸 모드 결과가 대화에 들어오면 Claude가 자동으로 그에 답한다 | VERIFIED | interactive-mode | "Claude responds to the command output automatically once it lands in the transcript" | `!` |
| A95 | Esc는 Claude의 응답이나 도구 실행을 중간에 멈추게 하며, 지금까지 한 작업은 남는다 | VERIFIED | interactive-mode | "Stop the current response or tool call mid-turn so you can redirect. Claude keeps the work done so far." | Esc |
| A96 | 입력창에 글자가 있을 때 Esc를 두 번 누르면 입력이 지워지고 위쪽 화살표로 되살릴 수 있다 | VERIFIED | interactive-mode | "When the prompt input contains text, double `Esc` clears it and saves the draft to history so `Up` recalls it." | Esc Esc |
| A97 | 입력창이 비었을 때 Esc를 두 번 누르면 되감기(rewind) 메뉴가 열린다 | VERIFIED | interactive-mode | "When the input is empty, double `Esc` opens the rewind menu to restore or summarize code and conversation from a previous point" | Esc Esc |
| A98 | Ctrl+C는 실행 중인 작업을 멈추고, 아무것도 안 돌면 첫 번째가 입력을 지우고 두 번째가 종료한다 | VERIFIED | interactive-mode | "If nothing is running, the first press clears the prompt input and a second press exits Claude Code." | Ctrl+C |
| A99 | 지운 입력은 위쪽 화살표로 되살릴 수 있다 | VERIFIED | interactive-mode | "press `Up` once while the prompt is still empty" | Up |
| A100 | 800자 넘거나 세 줄 넘는 붙여넣기는 `[Pasted text #1 +120 lines]` 같은 표시로 접히고, 제출하면 전체가 전달된다 | VERIFIED | terminal-config | "When you paste more than 800 characters or more than three lines into the prompt, Claude Code collapses the input to a placeholder" | — |
| A101 | 파일이나 긴 로그는 붙여넣지 말고 파일에 저장해 Claude에게 읽게 하라고 권한다 | VERIFIED | terminal-config | "write the content to a file and ask Claude to read it instead of pasting" | — |
| A102 | 붙여넣은 글 속의 지시는 내가 직접 친 요청이 시킬 때만 따르도록 Claude에게 알려 준다 | VERIFIED | terminal-config | "Claude is told that a paste can contain instructions you didn't write, and to follow instructions inside it only where the message you typed asks it to." | — |
| A103 | 보이지 않는 유니코드 문자는 Enter를 누를 때 제거되고, 정리된 글이 입력창에 돌아와 Enter를 한 번 더 눌러야 전송된다 | VERIFIED | interactive-mode | "Claude Code removes those characters when you press Enter, before sending anything." | — |
| A104 | 클립보드 이미지는 Ctrl+V로 붙이고 `[Image #N]` 칩이 들어간다 | VERIFIED | interactive-mode | "Inserts an `[Image #N]` chip at the cursor so you can reference it positionally in your prompt." | Ctrl+V |
| A105 | Claude가 일하는 중에 메시지를 치고 Enter를 누르면 끼어들지 않고 대기열에 쌓인다 | VERIFIED | interactive-mode | "Type a message and press `Enter` while Claude is working. Claude Code queues the message instead of interrupting the turn" | — |
| A106 | 위쪽 화살표로 지난 프롬프트를 다시 불러온다 | VERIFIED | quickstart | "Press ↑ for command history" | Up |
| A107 | 입력 기록은 작업 폴더별로 저장된다 | VERIFIED | interactive-mode | "Input history is stored per working directory" | — |
| A108 | Ctrl+R로 지난 입력을 검색한다 | VERIFIED | interactive-mode | "Press `Ctrl+R` to interactively search through your command history." | Ctrl+R |
| A109 | Tab으로 명령을 자동 완성한다 | VERIFIED | quickstart | "Use Tab for command completion" | Tab |
| A110 | 프롬프트 중간에서도 공백 뒤 `/`로 명령 이름을 완성할 수 있으나, 명령은 메시지 맨 앞에 있을 때만 실행된다 | VERIFIED | interactive-mode | "Claude Code runs a command itself only when the command starts your message." | — |

## 8. 초보자에게 쓸모 있는 슬래시 명령

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A111 | `/`를 치면 쓸 수 있는 명령 목록이 뜨고, 글자를 더 치면 걸러진다 | VERIFIED | commands | "Type `/` to see the commands available to you, or type `/` followed by letters to filter." | `/` |
| A112 | 명령은 메시지 맨 앞에서만 인식되고 뒤에 오는 글자는 인자가 된다 | VERIFIED | commands | "A command is only recognized at the start of your message." | — |
| A113 | `/help`는 도움말과 명령 목록을 보여 준다 | VERIFIED | commands | "Show help and available commands" | `/help` |
| A114 | `/clear`는 빈 맥락으로 새 대화를 시작한다. 이전 대화는 `/resume`으로 되돌릴 수 있다 | VERIFIED | commands | "Start a new conversation with empty context." | `/clear` |
| A115 | `/compact`는 대화를 요약해 맥락 공간을 비운다 | VERIFIED | commands | "Free up context by summarizing the conversation so far." | `/compact` |
| A116 | `/context`는 맥락이 얼마나 찼는지 색 격자로 보여 준다 | VERIFIED | commands | "Visualize current context usage as a colored grid." | `/context` |
| A117 | `/resume`은 이전 대화를 이름이나 ID로 열거나 목록에서 고르게 한다 | VERIFIED | commands | "Resume a conversation by ID or name, or open the session picker." | `/resume` |
| A118 | `/rewind`는 대화나 코드를 이전 시점으로 되돌린다. `/checkpoint`, `/undo`도 같은 명령이다 | VERIFIED | commands | "Rewind the conversation and/or code to a previous point, or summarize from a selected message." | `/rewind` |
| A119 | `/init`은 프로젝트용 `CLAUDE.md` 안내 파일을 만든다 | VERIFIED | commands | "Initialize project with a `CLAUDE.md` guide." | `/init` |
| A120 | `/model`은 모델을 바꾸고 새 대화의 기본값으로 저장한다 | VERIFIED | commands | "Switch the AI model and save it as your default for new sessions." | `/model` |
| A121 | `/status`는 버전, 모델, 계정, 연결 상태를 보여 준다 | VERIFIED | commands | "Open the Settings interface on the Status tab, showing version, model, account, and connectivity." | `/status` |
| A122 | `/usage`는 세션 비용, 플랜 사용 한도, 활동 통계를 보여 준다. `/cost`와 `/stats`는 같은 명령이다 | VERIFIED | commands | "Show session cost, plan usage limits, and activity stats." | `/usage` |
| A123 | `/config`는 설정 화면을 열어 테마, 모델 등을 바꾼다 | VERIFIED | commands | "Open the Settings interface to adjust theme, model, output style, and other preferences." | `/config` |
| A124 | `/diff`는 Claude가 바꾼 내용을 포함해 아직 커밋 안 한 변경을 보여 준다 | VERIFIED | commands | "Review the changes in your working tree, including the edits Claude has made so far." | `/diff` |
| A125 | `/copy`는 Claude의 마지막 답변을 클립보드에 복사한다 | VERIFIED | commands | "Copy the last assistant response to clipboard." | `/copy` |
| A126 | `/btw 질문`은 대화 기록에 남기지 않는 곁가지 질문이다 | VERIFIED | commands | "Ask a side question about the current session without adding to the conversation." | `/btw` |
| A127 | `/btw`는 이미 대화에 있는 내용으로만 답하고 파일 읽기·명령 실행은 못 한다 | VERIFIED | interactive-mode | "side questions answer only from what is already in context" | `/btw` |
| A128 | `/plan`은 큰 변경 전에 계획 모드로 들어간다 | VERIFIED | commands | "Enter plan mode directly from the prompt." | `/plan` |
| A129 | `/permissions`는 허용·질문·거부 규칙을 관리한다 | VERIFIED | commands | "Manage allow, ask, and deny rules for tool permissions." | `/permissions` |
| A130 | `/memory`는 `CLAUDE.md` 파일을 고치고 자동 기억을 켜고 끈다 | VERIFIED | commands | "Edit `CLAUDE.md` files, enable or disable auto memory, and view auto memory entries" | `/memory` |
| A131 | `/doctor`는 설치·설정 문제를 점검하고 확인 후 고쳐 준다 | VERIFIED | commands | "Run a setup checkup that diagnoses installation, settings, extension, and `CLAUDE.md` problems and proposes fixes that Claude applies after you confirm." | `/doctor` |
| A132 | `/theme`는 색 테마를 바꾼다. 터미널 밝기를 따라가는 auto 옵션이 있다 | VERIFIED | commands | "Change the color theme." | `/theme` |
| A133 | `/terminal-setup`은 줄바꿈용 Shift+Enter 키 설정을 설치한다 | VERIFIED | commands | "Install a Shift+Enter keybinding for newlines" | `/terminal-setup` |
| A134 | `/tui fullscreen`은 대화를 유지한 채 깜빡임 없는 전체화면 표시 방식으로 다시 시작한다 | VERIFIED | commands | "Set the terminal UI renderer and relaunch into it with your conversation intact." | `/tui` |
| A135 | `/export`는 대화를 일반 텍스트로 내보낸다 | VERIFIED | commands | "Export the current conversation as plain text." | `/export` |
| A136 | `/recap`은 세션 한 줄 요약을 바로 만든다 | VERIFIED | commands | "Generate a one-line summary of the current session on demand." | `/recap` |
| A137 | `/login`과 `/logout`은 계정 로그인·로그아웃이다 | VERIFIED | commands | "Sign out from your Anthropic account" | `/logout` |
| A138 | `/exit`은 종료이고 `/quit`도 같은 명령이다 | VERIFIED | commands | "Exit the CLI." | `/exit` |
| A139 | `/keybindings`는 단축키 설정 파일을 연다 | VERIFIED | commands | "Open your keyboard shortcuts file" | `/keybindings` |
| A140 | `/bug`와 `/feedback`은 문제나 의견을 보낸다. 보내기 전에 동의 화면이 나온다 | VERIFIED | commands | "Report a bug or share your conversation." | `/bug` |
| A141 | `/vim`은 v2.1.92에서 없어졌고, 대신 `/config`의 Editor mode로 바꾼다 | VERIFIED | commands | "Removed in v2.1.92." | `/vim` |
| A142 | 응답 중에 보낸 명령은 대기열에 들어가 현재 턴이 끝난 뒤 실행되나, `/status` 같은 일부는 바로 실행된다 | VERIFIED | commands | "If you send a command while Claude is responding, Claude Code queues it and runs it after the current turn finishes." | — |

## 9. 단축키

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A143 | Shift+Tab은 권한 모드를 순서대로 바꾼다 | VERIFIED | interactive-mode | "Cycle permission modes" | Shift+Tab |
| A144 | 권한 모드 순서는 default(Manual), acceptEdits, plan이고, 가능하면 bypassPermissions와 auto가 뒤따른다 | VERIFIED | interactive-mode | "Cycle through `default` (labeled Manual in the mode indicator), `acceptEdits`, `plan`, and, when available, `bypassPermissions` and then `auto`." | Shift+Tab |
| A145 | Ctrl+O는 도구 사용 내역을 자세히 보여 주는 대화 기록 보기를 켜고 끈다 | VERIFIED | interactive-mode | "Toggle transcript viewer" | Ctrl+O |
| A146 | Ctrl+L은 화면이 깨졌을 때 입력과 대화는 그대로 두고 다시 그린다 | VERIFIED | interactive-mode | "Forces a full terminal redraw, keeping input and conversation history." | Ctrl+L |
| A147 | Ctrl+G는 프롬프트를 기본 텍스트 편집기에서 편집하게 한다 | VERIFIED | interactive-mode | "Open in default text editor" | Ctrl+G |
| A148 | Ctrl+S는 입력 중인 글을 잠시 치워 두고, 빈 입력에서 다시 누르면 복원한다 | VERIFIED | interactive-mode | "With text in the input, stashes it and clears the prompt." | Ctrl+S |
| A149 | Ctrl+B는 실행 중인 Bash 명령과 에이전트를 백그라운드로 보낸다. tmux에서는 두 번 누른다 | VERIFIED | interactive-mode | "Backgrounds Bash commands and agents. Tmux users press twice" | Ctrl+B |
| A150 | Ctrl+Z는 유닉스에서 Claude Code를 일시 중지하고 `fg`로 돌아온다 | VERIFIED | interactive-mode | "Unix only. Suspends the process to your shell; run `fg` to resume" | Ctrl+Z |
| A151 | Ctrl+A와 Ctrl+E는 줄의 처음과 끝으로 커서를 옮긴다 | VERIFIED | interactive-mode | "Move cursor to start of current line" | Ctrl+A |
| A152 | Ctrl+K는 줄 끝까지, Ctrl+U는 줄 처음까지 지우고, Ctrl+Y로 지운 글을 붙인다 | VERIFIED | interactive-mode | "Pastes the text you last deleted with one of the word or line deletion shortcuts, such as `Ctrl+K`, `Ctrl+U`, or `Ctrl+W`" | Ctrl+Y |
| A153 | Ctrl+W는 공백 기준으로 한 덩어리(경로 전체 등)를 지운다 | VERIFIED | interactive-mode | "One press removes a whole path or `--flag=value`." | Ctrl+W |
| A154 | Ctrl+_ 는 마지막 입력 편집을 되돌린다 | VERIFIED | interactive-mode | "Restores the previous input text and cursor position" | Ctrl+_ |
| A155 | 맥에서 Alt 단축키(Alt+B, Alt+F 등)는 터미널에서 Option을 Meta로 설정해야 동작한다 | VERIFIED | interactive-mode | "Option/Alt key shortcuts (`Alt+B`, `Alt+F`, `Alt+D`, `Alt+Y`, `Alt+P`) require configuring Option as Meta in your terminal." | — |
| A156 | Option+P(맥)·Alt+P(윈도우/리눅스)는 입력을 지우지 않고 모델을 바꾼다 | VERIFIED | interactive-mode | "Switch models without clearing your prompt" | Option+P |
| A157 | 단축키는 터미널·플랫폼에 따라 다를 수 있다 | VERIFIED | interactive-mode | "Keyboard shortcuts may vary by platform and terminal." | — |
| A158 | 단축키는 `/keybindings`로 만드는 `~/.claude/keybindings.json`에서 바꾼다 | VERIFIED | keybindings | "Run `/keybindings` to create or open your configuration file at `~/.claude/keybindings.json`." | `/keybindings` |
| A159 | 단축키 파일 변경은 재시작 없이 자동 적용된다 | VERIFIED | keybindings | "Changes to the keybindings file are automatically detected and applied without restarting Claude Code." | — |
| A160 | Ctrl+C와 Ctrl+D는 고정이라 다른 키로 바꿀 수 없다 | VERIFIED | keybindings | "These shortcuts cannot be rebound:" | — |
| A161 | Ctrl+B는 tmux 접두 키와 겹친다 | VERIFIED | keybindings | "tmux prefix (press twice to send)" | Ctrl+B |
| A162 | 기본 줄바꿈 동작은 `chat:newline` 동작으로, 기본 키는 Ctrl+J다 | VERIFIED | keybindings | "Insert a newline without submitting" | — |

## 10. 터미널 설정 (줄바꿈·Option·알림·tmux·테마·Vim)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A163 | Claude Code는 설정 없이 어느 터미널에서나 동작하고, 이 문서는 문제가 있을 때만 보면 된다 | VERIFIED | terminal-config | "Claude Code works in any terminal without configuration." | — |
| A164 | `/terminal-setup` 성공 시 'Installed VSCode terminal Shift+Enter key binding' 같은 확인 문구가 뜬다 | VERIFIED | terminal-config | "On the first run you see a confirmation such as `Installed VSCode terminal Shift+Enter key binding`." | `/terminal-setup` |
| A165 | 맥 터미널은 기본적으로 Option을 보조 키로 보내지 않아 Option 단축키가 먹지 않는다 | VERIFIED | terminal-config | "On macOS, most terminals do not send Option as a modifier by default, so these shortcuts do nothing until you enable it." | — |
| A166 | 이 설정의 이름은 보통 'Use Option as Meta Key'이고 Meta는 Option/Alt의 옛 유닉스 이름이다 | VERIFIED | terminal-config | "Meta is the historical Unix name for the key now labeled Option or Alt." | — |
| A167 | Apple 터미널은 첫 실행 때 `/terminal-setup`이 Option을 Meta로 켜고 경고음을 끈다 | VERIFIED | terminal-config | "If you accepted Claude Code's first-run terminal setup prompt, this is already done." | `/terminal-setup` |
| A168 | tmux 안에서는 기본적으로 Shift+Enter가 줄바꿈이 아니라 전송이 되고 데스크톱 알림도 안 전달된다 | VERIFIED | terminal-config | "When Claude Code runs inside tmux, by default Shift+Enter submits instead of inserting a newline, and desktop notifications don't reach the outer terminal." | — |
| A169 | tmux 설정은 `~/.tmux.conf`에 네 줄을 넣고 `tmux source-file`로 적용한다 | VERIFIED | terminal-config | "set -g allow-passthrough on" | — |
| A170 | 작업이 끝났다는 알림은 Ghostty, Kitty, iTerm2에서만 기본으로 데스크톱 알림이 뜨고 다른 터미널은 기본이 없다 | VERIFIED | terminal-config | "a desktop notification, which iTerm2 shows only after you turn on its alert settings." | — |
| A171 | Windows에서 Backspace가 단어 단위로 지워지면 환경 변수 `CLAUDE_CODE_BS_AS_CTRL_BACKSPACE=0`을 설정한다 | VERIFIED | terminal-config | "If each press of Backspace deletes a whole word, your terminal sends `^H` for plain Backspace." | — |
| A172 | 테마는 `/theme`이나 `/config`의 테마 선택에서 고른다 | VERIFIED | terminal-config | "Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." | `/theme` |
| A173 | Vim 방식 입력은 `/config`의 Editor mode에서 켠다 | VERIFIED | terminal-config | "Claude Code includes a Vim-style editing mode for the prompt input." | `/config` |
| A174 | Vim 모드에서도 INSERT 상태의 Enter는 전송이다 | VERIFIED | terminal-config | "Pressing Enter still submits your prompt in INSERT mode, unlike standard Vim." | — |

## 11. claude 하위 명령과 플래그

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A175 | `claude`는 대화형 세션을 시작한다 | VERIFIED | cli-reference | "Start interactive session" | `claude` |
| A176 | `claude "질문"`은 첫 질문과 함께 대화형 세션을 시작한다 | VERIFIED | cli-reference | "Start interactive session with initial prompt" | `claude "query"` |
| A177 | `claude -p`(`--print`)는 답을 출력하고 바로 끝낸다 | VERIFIED | cli-reference | "Print response without interactive mode" | `claude -p` |
| A178 | 파일 내용을 `cat 파일 \| claude -p "질문"`처럼 파이프로 넘길 수 있다 | VERIFIED | cli-reference | "Process piped content" | `claude -p` |
| A179 | `claude -c`(`--continue`)는 현재 폴더에서 가장 최근 대화를 불러온다 | VERIFIED | cli-reference | "Load the most recent conversation in the current directory" | `claude -c` |
| A180 | `claude -r`(`--resume`)은 ID나 이름으로 세션을 다시 열거나 선택 목록을 보여 준다 | VERIFIED | cli-reference | "Resume a specific session by ID or name, or show an interactive picker to choose a session." | `claude -r` |
| A181 | `claude update`는 최신 버전으로 업데이트한다 | VERIFIED | cli-reference | "Update to latest version" | `claude update` |
| A182 | `claude install`은 네이티브 바이너리를 설치하거나 다시 설치하고 버전·stable·latest를 받을 수 있다 | VERIFIED | cli-reference | "Install or reinstall the native binary." | `claude install` |
| A183 | `claude doctor`는 세션 없이 설치·설정 진단을 출력한다 | VERIFIED | cli-reference | "Print read-only installation and settings diagnostics from the terminal without starting a session" | `claude doctor` |
| A184 | `claude auth logout`은 로그아웃, `claude auth status`는 로그인 상태 확인이다 | VERIFIED | cli-reference | "Log out from your Anthropic account" | `claude auth logout` |
| A185 | `claude auth login --console`은 구독 대신 API 사용량 과금용 Console로 로그인한다 | VERIFIED | cli-reference | "`--console` to sign in with Anthropic Console for API usage billing instead of a Claude subscription" | `claude auth login` |
| A186 | `--version`(`-v`)은 버전 번호를 출력한다 | VERIFIED | cli-reference | "Output the version number" | `claude --version` |
| A187 | `--model`은 이번 세션의 모델을 `sonnet`, `opus` 같은 별칭으로 정한다 | VERIFIED | cli-reference | "Sets the model for the current session" | `--model` |
| A188 | `--name`(`-n`)은 세션에 이름을 붙여 `/resume` 목록에 보이게 한다 | VERIFIED | cli-reference | "Set a display name for the session, shown in `/resume` and the terminal title." | `--name` |
| A189 | `--permission-mode`는 시작할 권한 모드를 정한다 | VERIFIED | cli-reference | "Begin in a specified permission mode." | `--permission-mode` |
| A190 | `--dangerously-skip-permissions`는 모든 권한 확인을 건너뛴다 | VERIFIED | cli-reference | "Skip permission prompts." | `--dangerously-skip-permissions` |
| A191 | `--add-dir`은 Claude가 읽고 고칠 폴더를 추가한다 | VERIFIED | cli-reference | "Add additional working directories for Claude to read and edit files." | `--add-dir` |
| A192 | `--verbose`는 턴마다의 전체 출력을 보여 준다 | VERIFIED | cli-reference | "Enable verbose logging, shows full turn-by-turn output." | `--verbose` |
| A193 | 하위 명령 철자를 틀리면 가장 비슷한 명령을 알려 주고 세션을 시작하지 않는다 | VERIFIED | cli-reference | "If you mistype a subcommand, Claude Code suggests the closest match and exits without starting a session." | — |
| A194 | `claude --help`에는 모든 플래그가 나오지 않는다 | VERIFIED | cli-reference | "`claude --help` does not list every flag, so a flag's absence from `--help` does not mean it is unavailable." | `claude --help` |
| A195 | `claude setup-token`은 CI·스크립트용 장기 토큰을 출력만 하고 저장하지 않는다 | VERIFIED | cli-reference | "Prints the token to the terminal without saving it." | `claude setup-token` |

## 12. 전체화면 표시 방식

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A196 | 화면이 깜빡이거나 스크롤 위치가 튀면 `/tui fullscreen`으로 바꾼다 | VERIFIED | terminal-config | "If the display flickers or the scroll position jumps while Claude is working, switch to fullscreen rendering mode." | `/tui` |
| A197 | `/tui default`는 기존 표시 방식으로, `/tui`만 치면 현재 방식을 알려 준다 | VERIFIED | fullscreen | "Run `/tui default` to switch back to the classic renderer, or `/tui` with no argument to print which renderer is active." | `/tui` |
| A198 | 전체화면은 창을 최대화하는 것과 무관하고 어떤 창 크기에서도 된다 | VERIFIED | fullscreen | "It has nothing to do with maximizing your terminal window, and works at any window size." | — |
| A199 | 전체화면에서는 입력창이 아래에 고정된다 | VERIFIED | fullscreen | "The input box stays fixed at the bottom of the screen instead of moving as output streams in." | — |
| A200 | 전체화면에서는 터미널 기본 스크롤이 아니라 마우스 휠이나 PgUp으로 스크롤한다 | VERIFIED | terminal-config | "In this mode you scroll with the mouse or PageUp inside Claude Code rather than with your terminal's native scrollback" | — |
| A201 | 전체화면에서 마우스로 끌어 고른 글은 놓는 즉시 클립보드에 복사된다 | VERIFIED | fullscreen | "Selected text copies to your clipboard automatically on mouse release." | — |
| A202 | 전체화면에서 PgUp/PgDn은 반 화면씩 스크롤한다 | VERIFIED | fullscreen | "Scroll up or down by half a screen" | PgUp |
| A203 | 맥북처럼 PgUp 키가 없는 키보드는 Fn과 화살표를 같이 누른다 | VERIFIED | fullscreen | "On keyboards without dedicated `PgUp`, `PgDn`, `Home`, or `End` keys, like MacBook keyboards, hold `Fn` with the arrow keys" | — |
| A204 | 전체화면에서 터미널의 Cmd+F 검색은 대화를 못 본다. Ctrl+O 후 `/`로 검색한다 | VERIFIED | fullscreen | "Your terminal's `Cmd+f` and tmux search don't see the conversation because it lives in the alternate screen buffer, not the native scrollback." | Ctrl+O |
| A205 | 기록 보기 모드에서 `[` 키는 전체 대화를 터미널 스크롤백으로 내보낸다 | VERIFIED | fullscreen | "writes the full conversation into your terminal's native scrollback buffer, with all tool output expanded." | `[` |
| A206 | 마우스 캡처가 불편하면 끄면서 깜빡임 없는 표시는 유지할 수 있다 | VERIFIED | fullscreen | "If mouse capture interferes with your workflow, you can turn it off while keeping the flicker-free rendering." | — |
| A207 | 전체화면은 연구 미리보기 기능이다 | VERIFIED | fullscreen | "Fullscreen rendering is a research preview." | — |

## 13. 설치 문제 해결 (PATH 등)

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| A208 | 설치는 됐는데 `claude`가 없다고 나오면 설치 폴더가 PATH에 없는 것이다 | VERIFIED | troubleshoot-install | "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." | — |
| A209 | PATH는 셸이 프로그램을 찾는 폴더 목록이다 | VERIFIED | troubleshoot-install | "Your shell searches for programs in directories listed in PATH" | — |
| A210 | 설치 프로그램은 `claude`를 맥·리눅스는 `~/.local/bin/claude`, 윈도우는 `%USERPROFILE%\.local\bin\claude.exe`에 둔다 | VERIFIED | troubleshoot-install | "the installer places `claude` at `~/.local/bin/claude` on macOS/Linux or `%USERPROFILE%\.local\bin\claude.exe` on Windows" | — |
| A211 | 설치 프로그램은 PATH 문제를 알려 주지만 PATH를 스스로 고치지는 않는다 | VERIFIED | troubleshoot-install | "It prints the fix with that note but doesn't change PATH itself." | — |
| A212 | 맥·리눅스에서 파일이 실제로 있는지는 `ls -la ~/.local/bin/claude`로 본다 | VERIFIED | troubleshoot-install | "Check that the installer put the program in place:" | — |
| A213 | 맥 기본 셸(Zsh)은 `~/.zshrc`에 PATH 줄을 추가하고 `source ~/.zshrc`로 바로 적용한다 | VERIFIED | troubleshoot-install | "The `echo` command saves the setting for every new terminal, and `source` applies it to the window you're in." | — |
| A214 | 맥에서 Bash를 쓰면 `~/.bashrc`가 아니라 `~/.bash_profile`에 넣는다 | VERIFIED | troubleshoot-install | "For Bash on macOS, add the line to `~/.bash_profile` instead." | — |
| A215 | PATH 줄을 추가한 뒤에는 새 창을 열어야 반영된다. 이미 열려 있던 창은 옛 PATH를 쓴다 | VERIFIED | troubleshoot-install | "a window that was already open keeps its old PATH, and a terminal inside an editor takes its PATH from the editor." | — |
| A216 | PATH 줄을 쓰다 'permission denied'가 나오면 그 파일에 쓸 권한이 없어 아무것도 저장되지 않은 것이다 | VERIFIED | troubleshoot-install | "your user can't write to that file and nothing was saved." | — |
| A217 | 윈도우 PowerShell은 사용자 PATH에 `.local\bin`을 추가하고 터미널을 다시 시작한다 | VERIFIED | troubleshoot-install | "Restart your terminal for the change to take effect." | — |
| A218 | 윈도우 PATH 확인은 PowerShell에서 `Test-Path`로 파일 유무를 먼저 본다 | VERIFIED | troubleshoot-install | "Test-Path "$env:USERPROFILE\.local\bin\claude.exe"" | — |
| A219 | VS Code 확장만 설치하면 터미널용 `claude`는 PATH에 생기지 않는다 | VERIFIED | troubleshoot-install | "It bundles a private copy of the CLI inside the extension directory for its own chat panel and does not add it to PATH." | — |
| A220 | 설치가 중복되었는지는 `which -a claude`로 확인한다 | VERIFIED | troubleshoot-install | "List all `claude` binaries found in your PATH:" | — |
| A221 | 플랫폼별 'command not found' 문구는 맥 `zsh: command not found: claude`, 리눅스 `bash: claude: command not found`다 | VERIFIED | troubleshoot-install | "`bash: claude: command not found`" | — |
| A222 | 설치 명령이 HTML을 받으면 `syntax error near unexpected token '<'`가 난다 | VERIFIED | troubleshoot-install | "The install command fails with one of these errors when what it downloaded isn't the install script." | — |
| A223 | 메모리가 작은 리눅스 서버에서는 설치 중 `Killed`가 뜨고, 설치에 약 512MB 여유 메모리가 필요하다 | VERIFIED | troubleshoot-install | "Claude Code needs roughly 512MB of free memory to install." | — |
| A224 | 윈도우에서 Git Bash와 PowerShell 둘 다 못 찾으면 'requires either Git for Windows (for bash) or PowerShell' 오류가 난다 | VERIFIED | troubleshoot-install | "this error means neither shell was found." | — |
| A225 | 윈도우 시작 메뉴의 'Windows PowerShell (x86)'은 32비트라 64비트 PC에서도 오류가 난다 | VERIFIED | troubleshoot-install | "The x86 entry runs as a 32-bit process and triggers this error even on a 64-bit machine." | — |
| A226 | 그래도 안 되면 `claude doctor`, 세션이 열리면 `/feedback`, 계정 문제는 Anthropic 지원으로 간다 | VERIFIED | troubleshoot-install | "If you can start a session, use `/feedback` inside Claude Code to report the problem" | `/feedback` |
| A227 | 네이티브 설치는 이 두 줄로 지운다: `rm -f ~/.local/bin/claude`, `rm -rf ~/.local/share/claude` | VERIFIED | setup | "rm -f ~/.local/bin/claude" | — |
| A228 | Homebrew로 깐 것은 `brew uninstall --cask claude-code`로 지운다 | VERIFIED | setup | "brew uninstall --cask claude-code" | — |
| A229 | 지워도 `claude`가 실행되면 설치가 둘이거나 옛 별칭이 남은 것이다 | VERIFIED | setup | "If `claude` still runs afterward, you likely have a second installation or a leftover shell alias from an older installer." | — |

## 가이드에 쓸 때 주의

- 종료 방법이 문서마다 달라 보인다. quickstart 표는 `/exit` 또는 "Ctrl+D twice"라 하고, interactive-mode는 Ctrl+C를 입력이 비었을 때 두 번 눌러도 종료된다고 한다(Ctrl+D는 800ms 안에 두 번). 초보자에게는 `/exit`를 먼저 알려 주고 Ctrl+C·Ctrl+D는 보조로 두는 편이 안전하다.
- 맥에서 Option(Alt) 단축키는 터미널 설정 없이는 안 먹는다(interactive-mode, terminal-config). 다만 같은 표에서 Option+T(확장 사고 켜기·끄기)만 "설정 없이 맥에서 된다"고 따로 적혀 있어 Option+P와 다르다. 맥 사용자에게 Option+Enter, Option+P를 안내할 때는 반드시 "Use Option as Meta" 설정을 먼저 알린다. 줄바꿈은 설정이 필요 없는 Ctrl+J 또는 `\`+Enter를 대표 방법으로 쓰는 것이 낫다.
- Shift+Enter 줄바꿈은 터미널마다 갈린다. VS Code, Cursor, Zed는 `/terminal-setup`을 먼저 해야 하고, gnome-terminal과 JetBrains 터미널은 아예 안 된다. tmux 안에서는 별도 tmux 설정이 필요하다. "Shift+Enter가 된다"고 일반화하지 말 것.
- 업데이트 방식이 설치법에 따라 다르다. 기본(네이티브) 설치는 자동이지만 Homebrew·WinGet·apt·dnf·apk는 수동이다. `claude --version`이 낮게 나오면 설치 방법부터 확인하게 한다.
- 윈도우는 셸이 둘이라 흔히 틀린다. PowerShell(`PS C:\`)과 CMD(`C:\`)는 설치 명령이 다르고, 맥·리눅스용 curl 명령은 PowerShell에서 실패한다. 프롬프트 모양으로 구별하는 방법을 함께 적는다.
- 줄바꿈 `\`는 반드시 Enter 직전에 쳐야 한다. 문서에서는 `\` 뒤에 Enter라고만 적혀 있어 초보자가 `\`를 줄 끝에 넣는 것을 헷갈릴 수 있다.
- 설치 후 `claude: command not found`는 대부분 PATH 문제이고, 이미 열려 있던 터미널 창은 옛 PATH를 쓴다. "새 창을 열기"를 가장 먼저 안내한다. PATH 줄 추가는 한 번이면 영구 적용된다.
- 전체화면은 "창 최대화"가 아니라 그리기 방식이다. 켜면 터미널 자체의 검색(Cmd+F)과 스크롤이 달라지므로, 켜기 전에 이 차이를 알려야 한다. 연구 미리보기 기능이라 동작이 바뀔 수 있다고 문서가 밝힌다.
- 셸 모드 `!`로 친 명령은 Claude의 승인 절차를 거치지 않고 샌드박스 밖에서 실행된다. 초보자에게 `!` 뒤에는 위험한 명령을 넣지 말라고 알린다.
- ANTHROPIC_API_KEY 환경 변수가 있으면 구독이 아니라 API 키가 쓰여 요금이 다르게 나갈 수 있다. 이상하면 `/status`로 어느 방식인지 확인한다.
- 문서에서 이름은 'Claude Code 문서의 터미널 가이드'(terminal-guide)가 별도로 있다고 하지만 이 파트의 원문에는 들어 있지 않았다. 터미널을 처음 여는 방법은 이 표의 근거가 아니다.

# 부록 B — 권한·되돌리기·세션·맥락·메모리·설정

개인 구독 계정 기준. 조직 배포·클라우드 제공자·API 내용은 뺐다.

## 1. Claude Code가 일하는 방식

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B1 | Claude Code는 터미널에서 도는 에이전트형 도우미다 | VERIFIED | how-claude-code-works | "Claude Code is an agentic assistant that runs in your terminal." | — |
| B2 | 일은 맥락 모으기, 행동하기, 결과 확인하기 세 단계로 돈다 | VERIFIED | how-claude-code-works | "When you give Claude a task, it works through three phases: gather context, take action, and verify results." | — |
| B3 | 일하는 도중 언제든 끼어들어 방향을 바꿀 수 있다 | VERIFIED | how-claude-code-works | "You can interrupt at any point to steer Claude in a different direction, provide additional context, or ask it to try a different approach." | — |
| B4 | Esc를 누르면 실행 중이던 도구 호출이 취소되고 다음 지시를 기다린다 | VERIFIED | how-claude-code-works | "The running tool call is canceled and Claude waits for your next instruction." | `Esc` |
| B5 | 새 세션은 이전 대화 없이 빈 맥락 창에서 시작한다 | VERIFIED | how-claude-code-works | "Each new session starts with a fresh context window, without the conversation history from previous sessions." | — |

## 2. 권한 모드 — 뜻과 바꾸는 법

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B6 | 권한 모드는 Claude가 묻지 않고 해도 되는 일의 범위를 정한다 | VERIFIED | permission-modes | "A permission mode sets which actions Claude can take in a session without asking you first." | — |
| B7 | 대화 중에는 Shift+Tab으로 권한 모드를 돌려 가며 바꾼다 | VERIFIED | permission-modes | "During a session: press `Shift+Tab` to cycle permission modes." | `Shift+Tab` |
| B8 | auto에서 한 번 누르면 manual이 되고, 이어서 accept edits, plan 순서로 돈다 | VERIFIED | permission-modes | "From `auto`, the first press switches to `default`, and the cycle then runs `default` → `acceptEdits` → `plan`." | `Shift+Tab` |
| B9 | 화면 아래 상태 줄에 지금 모드가 표시된다 | VERIFIED | permission-modes | "The status bar shows the active mode as a gray `⏸ manual mode on` for `default`" | `⏸ manual mode on` |
| B10 | 모든 행동을 확인하는 모드의 화면 이름은 Manual이고 설정 값은 `default` 다 | VERIFIED | permission-modes | "The mode that reviews every action is named Manual in the CLI, in `claude --help`, in the VS Code and JetBrains extensions, and in the desktop app." | Manual |
| B11 | Manual 모드는 파일 수정, 셸 명령, 네트워크 접근 전에 먼저 묻는다 | VERIFIED | permission-modes | "In Manual mode, Claude Code stops and asks you before most actions that edit files, run shell commands, or reach the network." | Manual |
| B12 | 새 터미널 세션은 v2.1.283 이상이면 기본이 auto 모드다 | VERIFIED | permission-modes | "With Claude Code v2.1.283 or later, auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." | auto |
| B13 | auto 모드에서는 별도의 분류기 모델이 위험한 행동을 막는다 | VERIFIED | permission-modes | "A separate classifier model reviews actions before they run, blocking anything that escalates beyond your request, targets unrecognized infrastructure, or appears driven by hostile content Claude read." | auto |
| B14 | auto 모드는 프롬프트를 줄일 뿐 안전을 보장하지 않는다 | VERIFIED | permission-modes | "Auto mode reduces permission prompts but does not guarantee safety." | auto |
| B15 | auto가 연달아 3번 막으면 멈추고 다시 사용자에게 묻는다 | VERIFIED | best-practices | "After three blocks in a row (or twenty in total), auto mode pauses and goes back to asking you." | `/permissions` |
| B16 | 설정 파일의 `defaultMode: "auto"` 는 프로젝트 파일에서는 안 먹고 `~/.claude/settings.json` 에 써야 한다 | VERIFIED | permission-modes | "`auto` doesn't take effect from those files. Move it to `~/.claude/settings.json`." | `defaultMode` |
| B17 | accept edits 모드는 작업 폴더 안의 파일 만들기와 고치기를 묻지 않고 한다 | VERIFIED | permission-modes | "lets Claude create and edit files in your working directory without prompting" | `acceptEdits` |
| B18 | accept edits는 `mkdir`, `touch`, `rm`, `mv`, `cp` 같은 흔한 파일 명령도 묻지 않는다 | VERIFIED | permission-modes | "In addition to file edits, `acceptEdits` mode auto-approves common filesystem Bash commands: `mkdir`, `touch`, `rm`, `rmdir`, `mv`, `cp`, and `sed`." | `⏵⏵ accept edits on` |
| B19 | Manual에서 Shift+Tab을 한 번 누르면 accept edits로 들어간다 | VERIFIED | permission-modes | "Press `Shift+Tab` once from Manual mode to enter it, or start with it directly:" | `Shift+Tab` |
| B20 | plan 모드는 조사하고 계획만 제안하며 고치지는 않는다 | VERIFIED | permission-modes | "Plan mode tells Claude to research and propose changes without making them." | `plan` |
| B21 | plan 모드는 Shift+Tab이나 프롬프트 앞의 `/plan` 으로 들어간다 | VERIFIED | permission-modes | "Enter plan mode by pressing `Shift+Tab` or prefixing a single prompt with `/plan`." | `/plan` |
| B22 | 계획이 나오면 승인 방법을 고른다: 수정마다 직접 승인하는 선택지가 있다 | VERIFIED | permission-modes | "Yes, manually approve edits: approve and review each edit individually." | Yes, manually approve edits |
| B23 | bypassPermissions는 컨테이너나 가상 머신 같은 격리 환경에서만 쓰라고 한다 | VERIFIED | permission-modes | "Only use this mode in isolated environments like containers, VMs, or dev containers without internet access, where Claude Code cannot damage your host system." | `bypassPermissions` |
| B24 | bypassPermissions는 프롬프트 주입이나 실수를 막아 주지 못한다 | VERIFIED | permission-modes | "`bypassPermissions` offers no protection against prompt injection or unintended actions." | `bypassPermissions` |
| B25 | `.git`, `.claude` 같은 보호 경로 쓰기는 대부분의 모드에서 자동 승인되지 않는다 | VERIFIED | permission-modes | "This prevents accidental corruption of repository state and Claude's own configuration." | Protected paths |
| B26 | 어떤 모드에서도 거부 규칙은 막는다 | VERIFIED | permission-modes | "Deny rules block in every mode, including `bypassPermissions`." | — |
| B27 | Manual은 안전하지만 열 번쯤 지나면 읽지 않고 승인하게 된다 | VERIFIED | best-practices | "Safe, but after the tenth prompt you start approving without reading, and nothing moves while you're away from the keyboard." | Manual |
| B28 | Manual로 돌아가려면 Shift+Tab을 돌리거나 `--permission-mode manual` 로 시작한다 | VERIFIED | best-practices | "`Shift+Tab` in the session cycles through the permission modes, Manual included, or start with `claude --permission-mode manual` from your shell." | `claude --permission-mode manual` |

## 3. 허락 창과 허락 규칙

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B29 | 허락 창은 Claude가 하려는 일을 보여 주고 선택지를 준다 | VERIFIED | permissions | "A permission prompt shows what Claude is about to do, followed by your options." | Do you want to proceed? |
| B30 | Bash 명령에서 "Yes, and don't ask again"을 고르면 규칙이 저장소 루트의 `.claude/settings.local.json` 에 저장된다 | VERIFIED | permissions | "Claude Code saves the rule to `.claude/settings.local.json` at the root of the git repository" | Yes, and don't ask again |
| B31 | 파일 수정 승인은 파일에 저장되지 않고 세션이 끝날 때까지만 간다 | VERIFIED | permissions | "A file-modification approval isn't saved to the file: as the table shows, it lasts until the session ends." | Yes, and don't ask again |
| B32 | 접근 폴더는 대화 중 `/add-dir` 로 늘릴 수 있다 | VERIFIED | permissions | "During session: use `/add-dir` command" | `/add-dir` |
| B33 | `/permissions` 에서 모든 규칙과 그 규칙이 든 settings 파일을 본다 | VERIFIED | permissions | "You can view and manage Claude Code's tool permissions with `/permissions`." | `/permissions` |
| B34 | allow 규칙은 승인 없이 쓰게 해 준다 | VERIFIED | permissions | "Allow rules let Claude Code use the specified tool without manual approval." | `allow` |
| B35 | ask 규칙은 쓸 때마다 확인을 받는다 | VERIFIED | permissions | "Ask rules prompt for confirmation whenever Claude Code tries to use the specified tool." | `ask` |
| B36 | deny 규칙은 그 도구를 못 쓰게 막는다 | VERIFIED | permissions | "Deny rules prevent Claude Code from using the specified tool." | `deny` |
| B37 | 규칙은 deny, ask, allow 순서로 따지고 먼저 맞은 것이 이긴다 | VERIFIED | permissions | "Rules are evaluated in order: deny, then ask, then allow." | `/permissions` |
| B38 | 구체적인 allow로 넓은 deny의 예외를 만들 수 없다 | VERIFIED | permissions | "An allow rule can't carve an exception out of a deny rule." | `deny` |
| B39 | Bash 규칙에서 별표는 공백을 포함한 아무 글자와 맞는다 | VERIFIED | permissions | "A `*` in a Bash rule matches any text, including spaces, so one rule covers a family of commands." | `Bash(npm run *)` |
| B40 | `git log *` 는 git log만, `git *` 는 모든 git 명령을 허용한다 | VERIFIED | permissions | "`Bash(git log *)` allows only `git log` commands, and `Bash(git *)` allows every git command." | `Bash(git *)` |
| B41 | 도구 이름만 쓴 deny 규칙은 그 도구를 Claude의 시야에서 아예 없앤다 | VERIFIED | permissions | "A bare tool name like `Bash` removes the tool from Claude's context entirely, so Claude never sees it." | `Bash` |
| B42 | 권한 규칙은 모델이 아니라 Claude Code가 강제한다 | VERIFIED | permissions | "Permission rules are enforced by Claude Code, not by the model." | `/permissions` |
| B43 | 프롬프트나 CLAUDE.md의 말은 Claude의 시도를 바꿀 뿐 허용 범위는 못 바꾼다 | VERIFIED | permissions | "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." | `CLAUDE.md` |
| B44 | 어느 단계에서든 deny된 도구는 다른 단계가 허용할 수 없다 | VERIFIED | permissions | "If a tool is denied at any level, no other level can allow it." | `deny` |
| B45 | 사용자 설정이 허용하고 프로젝트 설정이 거부하면 거부가 이긴다 | VERIFIED | permissions | "if user settings allow a permission and project settings deny it, the deny rule blocks it." | `deny` |
| B46 | 읽기 전용 명령의 허락 방식 설명이 두 문서에서 다르다: permissions는 도구별 첫 사용 때 묻는다고 쓴다 | 충돌 | permissions | "Prompts for permission on first use of each tool." | `default` |
| B47 | 같은 default를 permission-modes는 읽기만 묻지 않고 한다고 쓴다 | 충돌 | permission-modes | "Reads only" | `default` |
| B48 | accept edits가 자동 승인하는 파일 명령: permissions 표는 mkdir, touch, mv, cp를 든다 | 충돌 | permissions | "Automatically accepts file edits and common filesystem commands such as `mkdir`, `touch`, `mv`, and `cp` for paths in the working directory or `additionalDirectories`" | `acceptEdits` |

## 4. 되돌리기

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B49 | Claude가 고친 파일은 자동으로 추적되어 되돌릴 수 있다 | VERIFIED | checkpointing | "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." | checkpoint |
| B50 | 차례를 시작하는 요청을 보낼 때마다 체크포인트가 하나 생긴다 | VERIFIED | checkpointing | "Every prompt you send that starts a turn creates a new checkpoint" | checkpoint |
| B51 | 입력창이 비었을 때 Esc를 두 번 누르거나 `/rewind` 를 치면 되감기 메뉴가 열린다 | VERIFIED | checkpointing | "Run `/rewind`, or press `Esc` twice when the prompt input is empty, to open the rewind menu." | `/rewind` |
| B52 | 입력창에 글자가 있으면 Esc 두 번은 메뉴 대신 글자를 지운다 | VERIFIED | checkpointing | "If the prompt input contains text, double `Esc` clears it instead of opening the menu." | `Esc` `Esc` |
| B53 | 메뉴에서 코드와 대화를 함께 되돌릴 수 있다 | VERIFIED | checkpointing | "Restore code and conversation: revert both code and conversation to that point" | Restore code and conversation |
| B54 | 대화만 되돌리고 지금 코드는 그대로 둘 수 있다 | VERIFIED | checkpointing | "Restore conversation: rewind to that message while keeping current code" | Restore conversation |
| B55 | 코드만 되돌리고 대화는 그대로 둘 수 있다 | VERIFIED | checkpointing | "Restore code: revert file changes while keeping the conversation" | Restore code |
| B56 | 여기서부터 요약하기는 대화를 요약으로 줄여 맥락 창 공간을 비운다 | VERIFIED | checkpointing | "Summarize from here: compress the conversation from this point forward into a summary, freeing context window space" | Summarize from here |
| B57 | 체크포인트 되돌리기는 파일 편집 도구가 고친 파일만 다룬다: Bash로만 바뀐 파일은 추적하지 않는다 | VERIFIED | checkpointing | "A file that only Bash commands changed isn't tracked and stays as it is." | Bash |
| B58 | Bash로 바뀐 파일을 되돌리려면 Git 같은 버전 관리를 쓴다 | VERIFIED | checkpointing | "To revert it, use version control, such as Git." | git |
| B59 | 서브에이전트가 고친 다른 파일은 되감기로 복원되지 않는다 | VERIFIED | checkpointing | "The subagent's edits to other files stay, so use version control, such as Git, to revert them." | — |
| B60 | 내가 Claude 밖에서 고친 파일이나 다른 세션의 편집은 대체로 추적하지 않는다 | VERIFIED | checkpointing | "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured, unless they happen to modify the same files as the current session." | — |
| B61 | 심볼릭 링크나 하드 링크 파일은 되감지 못한다 | VERIFIED | checkpointing | "Checkpointing doesn't rewind symlinked or hard-linked files." | `Restored the code, but skipped N files` |
| B62 | 데이터베이스나 배포처럼 외부 시스템에 한 일은 체크포인트로 되돌릴 수 없다 | VERIFIED | how-claude-code-works | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." | — |
| B63 | 체크포인트는 Git과 별개이며 세션을 다시 열어도 남는다 | VERIFIED | how-claude-code-works | "Checkpoints are separate from git and remain available when you resume a conversation." | `/rewind` |
| B64 | `/branch` 는 지금까지의 대화를 복사해 갈라 나가고 원본은 그대로 둔다 | VERIFIED | sessions | "Branching creates a copy of the conversation so far and switches you into it, leaving the original intact." | `/branch` |
| B65 | Esc는 하던 일을 멈추되 거기까지의 결과는 남긴다 | VERIFIED | best-practices | "`Esc` stops Claude mid-action and keeps everything up to that point, so you can redirect without losing work." | `Esc` |

## 5. 세션 이어 가기와 이름 붙이기

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B66 | 세션은 프로젝트 폴더에 묶인 저장된 대화다 | VERIFIED | sessions | "A session is a saved conversation tied to a project directory." | — |
| B67 | `claude --continue` 는 현재 폴더에서 가장 최근 세션을 다시 연다 | VERIFIED | sessions | "Reopens the most recent session in the current directory" | `claude --continue` |
| B68 | `claude --resume` 은 세션 고르기 화면을 연다 | VERIFIED | sessions | "Opens the session picker" | `claude --resume` |
| B69 | `claude --resume 이름` 은 이름 붙은 세션을 바로 연다 | VERIFIED | sessions | "Resumes the named session directly" | `claude --resume <name>` |
| B70 | 대화 중에는 `/resume` 으로 다른 세션으로 옮긴다 | VERIFIED | sessions | "Switches to a different session from inside an active session" | `/resume` |
| B71 | 이어 가면 같은 세션 번호로 열리고 새 메시지가 이어서 쌓인다 | VERIFIED | how-claude-code-works | "Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." | `claude --continue` |
| B72 | 갈라 나가기는 기록을 새 세션 번호로 복사하고 원본은 그대로다 | VERIFIED | how-claude-code-works | "Forking with `--fork-session` or `/branch` copies the history into a new session ID, leaving the original unchanged." | `--fork-session` |
| B73 | 짧은 옵션 `-c`, `-r` 이 `--continue`, `--resume` 과 같다는 설명은 담당 문서에 없다 | UNVERIFIED | sessions | — | `-c` `-r` |
| B74 | 시작할 때 `claude -n 이름` 으로 세션에 이름을 붙인다 | VERIFIED | sessions | "`claude -n auth-refactor`" | `claude -n` |
| B75 | 이름을 안 붙여도 만들어지는 기본 표시 이름은 이어 가기 이름으로 못 쓴다 | VERIFIED | sessions | "The default isn't a resume handle." | — |
| B76 | 이름을 안 붙이면 첫 요청을 요약한 제목이 자동으로 생긴다 | VERIFIED | sessions | "if you don't name a session, Claude Code generates a session title for it." | — |
| B77 | `/resume` 이나 `claude --resume` 을 인자 없이 치면 세션 고르기 화면이 열린다 | VERIFIED | sessions | "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." | `/resume` |
| B78 | 이어 가면 대화 기록과 그 당시 권한 모드가 복원된다 | VERIFIED | sessions | "Claude Code restores the permission mode the session was in, except in the cases in the table." | `claude --continue` |
| B79 | 대화 기록은 기본 30일이 지나면 지워진다 | VERIFIED | claude-directory | "The default is 30 days and the minimum is 1; setting `0` fails with a validation error." | `cleanupPeriodDays` |
| B80 | 기록은 암호화되지 않아서 읽은 비밀 값도 그대로 남을 수 있다 | VERIFIED | claude-directory | "Transcripts and history are not encrypted at rest." | — |
| B81 | `claude purge` 는 한 프로젝트의 저장된 기록과 상태를 지운다 | VERIFIED | claude-directory | "Run `claude purge` to delete the state Claude Code holds for one project." | `claude purge` |

## 6. 맥락 창, 압축, 비우기

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B82 | 맥락 창에는 대화, 파일 내용, 명령 출력, CLAUDE.md, 자동 메모리, 시스템 지시가 들어간다 | VERIFIED | how-claude-code-works | "Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." | — |
| B83 | 맥락은 자동으로 압축되지만 대화 초반의 지시는 잊힐 수 있다 | VERIFIED | how-claude-code-works | "Claude compacts automatically, but instructions from early in the conversation can get lost." | — |
| B84 | 오래 가야 할 규칙은 CLAUDE.md에 두고 `/context` 로 점유 현황을 본다 | VERIFIED | how-claude-code-works | "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." | `/context` |
| B85 | `/context` 는 범주별 사용량과 개선 제안을 실시간으로 보여 준다 | VERIFIED | context-window | "run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." | `/context` |
| B86 | 압축 요약은 요청과 핵심 코드는 남기지만 초반의 자세한 지시는 사라질 수 있다 | VERIFIED | how-claude-code-works | "The summary keeps your requests and key code snippets, but detailed instructions from early in the conversation may be lost." | — |
| B87 | `/compact` 뒤에 초점을 적으면 무엇을 남길지 정할 수 있다 | VERIFIED | context-window | "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." | `/compact` |
| B88 | `/clear` 는 빈 맥락으로 새로 시작하고 이전 세션은 저장해 둔다 | VERIFIED | sessions | "`/clear`: start fresh with an empty context." | `/clear` |
| B89 | 관련 없는 일로 넘어갈 때 `/clear` 하면 필요한 파일이 밀려나지 않고 토큰도 덜 쓴다 | VERIFIED | context-window | "Old conversation crowds out the files you need next and costs tokens on every message." | `/clear` |
| B90 | `/autocompact` 로 자동 압축이 시작되는 시점을 앞당길 수 있다 | VERIFIED | context-window | "with a token count, like `/autocompact 500k`, to set how full the context window gets before the automatic pass runs." | `/autocompact` |
| B91 | 대화로만 준 지시는 압축 뒤 사라질 수 있어 CLAUDE.md에 적어야 한다 | VERIFIED | memory | "If an instruction disappeared after compaction, it was given only in conversation, lives in a nested CLAUDE.md that hasn't reloaded yet, or is a path-scoped rule that hasn't matched a file since." | `/compact` |

## 7. CLAUDE.md, /init, /memory, 자동 메모리

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B92 | CLAUDE.md는 내가 쓰는 지속 지침이다 | VERIFIED | memory | "CLAUDE.md files: instructions you write to give Claude persistent context." | `CLAUDE.md` |
| B93 | 자동 메모리는 Claude가 내 교정과 선호를 보고 스스로 적는 메모다 | VERIFIED | memory | "Auto memory: notes Claude writes itself based on your corrections and preferences" | auto memory |
| B94 | 개인 전체 지침은 `~/.claude/CLAUDE.md` 에 둔다 | VERIFIED | memory | "Personal preferences for all projects" | `~/.claude/CLAUDE.md` |
| B95 | 프로젝트 지침은 `./CLAUDE.md` 또는 `./.claude/CLAUDE.md` 에 둔다 | VERIFIED | memory | "A project CLAUDE.md can be stored in either `./CLAUDE.md` or `./.claude/CLAUDE.md`." | `CLAUDE.md` |
| B96 | 프로젝트 안의 개인용 지침은 `./CLAUDE.local.md` 에 두고 `.gitignore` 에 넣는다 | VERIFIED | memory | "Personal project-specific preferences; add to `.gitignore`" | `CLAUDE.local.md` |
| B97 | `/init` 은 코드를 살펴 CLAUDE.md 초안을 만들어 준다 | VERIFIED | memory | "Run `/init` to generate a starting CLAUDE.md automatically." | `/init` |
| B98 | `/init` 은 만들어 내는 내용으로 빌드 명령, 테스트 방법, 프로젝트 관례를 든다 | VERIFIED | memory | "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." | `/init` |
| B99 | 이미 CLAUDE.md가 있으면 `/init` 은 덮어쓰지 않고 개선안을 낸다 | VERIFIED | memory | "If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it." | `/init` |
| B100 | CLAUDE.md는 파일당 200줄 아래를 목표로 한다 | VERIFIED | memory | "target under 200 lines per CLAUDE.md file." | `CLAUDE.md` |
| B101 | 현재 폴더와 그 위 모든 폴더의 CLAUDE.md가 실행할 때 불려 온다 | VERIFIED | memory | "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." | `CLAUDE.md` |
| B102 | 하위 폴더의 CLAUDE.md는 그 폴더의 파일을 읽거나 고칠 때 불려 온다 | VERIFIED | memory | "Instead of loading them at launch, Claude Code loads each one once Claude reads, writes, or edits another file in that subdirectory." | `CLAUDE.md` |
| B103 | 파일이 제대로 불렸는지는 `/context all` 의 Memory files 목록에서 확인한다 | VERIFIED | memory | "To confirm the file loaded, run `/context all` in a session and check the list under Memory files." | `/context all` |
| B104 | `/memory` 는 CLAUDE.md와 메모리 파일 목록을 보여 주고 열어서 고치게 해 준다 | VERIFIED | memory | "The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." | `/memory` |
| B105 | 자동 메모리는 로컬 세션에서 기본으로 켜져 있다 | VERIFIED | memory | "Auto memory is on by default in local sessions." | auto memory |
| B106 | `/memory` 안의 토글로 자동 메모리를 켜고 끈다 | VERIFIED | memory | "To toggle it, open `/memory` in a session and use the auto memory toggle" | `/memory` |
| B107 | 자동 메모리는 프로젝트마다 `~/.claude/projects/<project>/memory/` 에 저장된다 | VERIFIED | memory | "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." | `~/.claude/projects/<project>/memory/` |
| B108 | 자동 메모리는 사용자, 피드백, 프로젝트, 참고 네 종류를 적는다 | VERIFIED | memory | "Claude saves four kinds of notes for itself." | auto memory |
| B109 | 시작할 때는 MEMORY.md의 첫 200줄 또는 25KB까지만 불려 온다 | VERIFIED | memory | "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." | `MEMORY.md` |
| B110 | 자동 메모리 파일은 평범한 마크다운이라 언제든 고치거나 지울 수 있다 | VERIFIED | memory | "Auto memory files are plain markdown you can edit or delete at any time." | `/memory` |
| B111 | "기억해 줘"라고 하면 자동 메모리에 저장한다 | VERIFIED | memory | "Claude saves it to auto memory." | `/memory` |

## 8. settings.json 위치와 우선순위

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B112 | settings는 Claude Code 동작을 바꾸는 JSON 키다 | VERIFIED | settings | "Settings are the JSON keys that change how Claude Code behaves" | `settings.json` |
| B113 | 사용자 파일 `~/.claude/settings.json` 은 이 컴퓨터의 모든 프로젝트에 적용된다 | VERIFIED | settings | "You, in every project on this machine" | `~/.claude/settings.json` |
| B114 | 프로젝트 공유 파일 `.claude/settings.json` 은 커밋해 팀과 나눈다 | VERIFIED | settings | "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" | `.claude/settings.json` |
| B115 | 프로젝트 로컬 파일 `.claude/settings.local.json` 은 나만, 그 프로젝트에서만 적용된다 | VERIFIED | settings | "You, in this one project only." | `.claude/settings.local.json` |
| B116 | `/config` 의 Config 탭에서 테마 같은 개인 옵션을 바꾼다 | VERIFIED | settings | "Run `/config` inside Claude Code and open the Config tab." | `/config` |
| B117 | 저장하면 실행 중인 세션에도 대부분 재시작 없이 반영된다 | VERIFIED | settings | "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" | `/status` |
| B118 | `/status` 의 Setting sources 줄에서 어떤 파일이 불렸는지 본다 | VERIFIED | settings | "Run `/status` inside Claude Code to see which settings sources are active." | `/status` |
| B119 | 같은 키가 여러 곳에 있으면 가장 높은 단계의 값을 쓴다 | VERIFIED | settings | "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." | — |
| B120 | 우선순위는 높은 쪽부터 관리자 설정, 명령줄, 프로젝트 로컬, 프로젝트 공유, 사용자 순이다 | VERIFIED | settings | "Settings precedence, highest first: managed settings, command line, project local, shared project, user." | `settings.json` |
| B121 | 팀의 프로젝트 값이 내 사용자 값보다 우선하고 `settings.local.json` 으로 되찾을 수 있다 | VERIFIED | settings | "Claude Code uses the project value because shared project sits above user" | `.claude/settings.local.json` |

## 9. .claude 폴더 구조

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B122 | Claude Code는 프로젝트 폴더와 홈의 `~/.claude` 에서 지침, 설정, 메모리를 읽는다 | VERIFIED | claude-directory | "Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." | `.claude` |
| B123 | 프로젝트 파일은 커밋해 공유하고 `~/.claude` 는 내 개인 설정이다 | VERIFIED | claude-directory | "Commit project files to git to share them with your team; files in `~/.claude` are personal configuration that applies across all your projects." | `~/.claude` |
| B124 | 대부분은 CLAUDE.md와 settings.json만 고치면 된다 | VERIFIED | claude-directory | "Most users only edit `CLAUDE.md` and `settings.json`." | `CLAUDE.md` |
| B125 | `settings.local.json` 은 개인 덮어쓰기용이며 Claude Code가 저장하면 gitignore된다 | VERIFIED | claude-directory | "Your personal overrides, gitignored when Claude Code saves a setting to it" | `settings.local.json` |
| B126 | `CLAUDE.local.md` 는 프로젝트 루트에 직접 만들어 쓰는 개인용 지침이다 | VERIFIED | claude-directory | "Your private preferences for this project, loaded alongside CLAUDE.md." | `CLAUDE.local.md` |
| B127 | `~/.claude` 에는 작업 중 Claude Code가 쓰는 대화 기록, 캐시, 로그도 들어 있다 | VERIFIED | claude-directory | "Beyond the config you author, `~/.claude` holds data Claude Code writes during sessions." | `~/.claude` |
| B128 | 도구를 거친 내용은 대화 기록에 평문으로 남는다 | VERIFIED | claude-directory | "Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." | `projects/` |
| B129 | 자격 증명 파일 읽기는 권한 규칙으로 막으라고 권한다 | VERIFIED | claude-directory | "Use permission rules to deny reads of credential files" | `permissions` |

## 10. 잘 쓰는 요령

| # | 사실 | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| B130 | 첫 평범한 요청만으로도 대부분 잘 동작하도록 만들어져 있다 | VERIFIED | best-practices | "Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." | — |
| B131 | 코드를 읽어서 알 수 있는 건 적지 말고 모르는 것만 적는다 | VERIFIED | best-practices | "Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." | `CLAUDE.md` |
| B132 | `@` 와 경로로 파일 내용을 요청에 넣는다 | VERIFIED | best-practices | "type `@` and the path to include the file contents in your message." | `@` |
| B133 | 생각의 깊이는 "깊게 생각해" 같은 말이 아니라 노력 수준 설정이 정한다 | VERIFIED | best-practices | "Phrases like `think step by step` or `be thorough` are ordinary prompt text rather than keywords." | `/effort` |
| B134 | 통과 또는 실패로 돌아오는 확인 수단을 주면 Claude가 스스로 고치며 이어 간다 | VERIFIED | best-practices | "If you give it something that comes back pass or fail, Claude can close that loop itself." | — |
| B135 | 두 번 고쳐 말해도 틀리면 세 번째 교정 대신 `/clear` 하고 더 나은 요청을 쓴다 | VERIFIED | best-practices | "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." | `/clear` |
| B136 | `/btw` 는 기록에 남기지 않고 짧은 질문에 답한다 | VERIFIED | best-practices | "answers a quick question without adding anything to the history" | `/btw` |
| B137 | 며칠 걸리는 일은 `/rename` 으로 이름을 붙여 두고 `claude --resume 이름` 으로 다시 연다 | VERIFIED | best-practices | "for work that spans several days, `/rename oauth-migration` in the session names it" | `/rename` |
| B138 | 관련 없는 일 사이에는 `/clear` 가 여전히 가치 있다 | VERIFIED | best-practices | "`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." | `/clear` |
| B139 | 꼭 지켜야 하는 규칙은 말로 부탁하지 말고 deny 규칙이나 hook으로 만든다 | VERIFIED | best-practices | "anything that matters belongs in a deny rule." | `deny` |
| B140 | 자리를 비우고 맡기기 전에 끝 기준, 자체 확인, 접근 범위를 정한다 | VERIFIED | best-practices | "Before a run goes unattended, make sure it knows what done looks like, can check its own work, and can only touch what it should." | — |
| B141 | 대문자와 IMPORTANT를 쌓으면 오히려 규칙을 과하게 적용한다 | VERIFIED | best-practices | "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." | `CLAUDE.md` |
| B142 | CLAUDE.md에 구조 설명은 불필요하다: Claude가 저장소를 직접 읽는다 | VERIFIED | best-practices | "Claude reads the repo itself. Only write down what isn't in there." | `CLAUDE.md` |

## 가이드에 쓸 때 주의

- **Esc 두 번의 조건**: how-claude-code-works는 "Esc를 두 번 눌러 되감기"로만 쓰지만, checkpointing은 입력창이 비어 있을 때만 메뉴가 열리고 글자가 있으면 글자가 지워진다고 쓴다(B51, B52). 초보자가 쓰던 글이 날아간다고 오해하지 않게 "위쪽 화살표로 되살린다"까지 적을 것.
- **기본 모드가 auto라는 점**: 최신 문서(v2.1.283 이상)는 새 터미널 세션의 시작 모드가 auto이고, 상태 줄 이름도 `manual mode` 처럼 소문자로 쓴다(B12). 구버전·옛 글이 말하는 "기본은 default(묻는 모드)"와 다르다. 화면에 뜬 상태 줄 문구를 기준으로 안내하고 버전을 밝힐 것. `defaultMode: "auto"` 는 프로젝트 settings에서는 먹지 않는다(B16).
- **허락 방식 표현 충돌**: permissions는 default를 "도구별 첫 사용 때 묻는다", permission-modes는 "읽기만 묻지 않는다"로 설명하고, accept edits의 파일 명령 목록도 서로 다르다(B46~B48). 더 자세한 permission-modes 쪽을 따르되 "읽기와 파일 편집"처럼 쉬운 말로 줄여 쓸 것.
- **되돌리기의 한계**: 체크포인트는 Claude의 편집 도구가 고친 파일만 되돌린다. Bash로만 바뀐 파일, 서브에이전트 편집, 내가 직접 고친 파일, 링크 파일, 외부 시스템 작업은 안 된다(B57~B62). "Esc 두 번이면 다 되돌아간다"로 쓰면 오해다. Git을 함께 쓰라고 안내할 것.
- **`-c`, `-r` 짧은 옵션**: 담당 문서에는 `--continue`, `--resume` 만 나온다(B73). 짧은 형태는 cli-reference에서 확인한 뒤에만 쓸 것.
- **이름 붙이기**: 이름을 안 붙여도 `my-app-3f` 같은 기본 표시 이름이 생기지만 이어 가기 이름으로는 못 쓴다(B75). 자동 생성 제목은 쓸 수 있다.
- **`/context`, 자동 메모리 한도**: MEMORY.md는 200줄 또는 25KB까지만 시작할 때 불려 온다(B109). CLAUDE.md는 200줄 아래 권장이며 hard limit이 아니다.
- **`.claude/settings.local.json`**: 파일은 Claude Code가 만들 때만 자동으로 git에서 제외된다. 직접 만들면 `.gitignore` 에 넣어야 한다(B115, B125).
- **기록의 평문 저장**: 대화 기록에는 읽은 파일과 명령 출력이 그대로 남는다(B80, B128). 비밀번호가 든 파일을 열었다면 기록에도 남는다고 알릴 것. 기본 30일 보관(B79).
- **관리자 설정**: 개인 구독이면 해당 없으나, 회사 PC에서는 관리자 설정이 가장 우선하고 내 설정이 무시될 수 있다(B120).

# 부록 C — 스킬·서브에이전트·훅·MCP·플러그인·상태 줄

## 1. 스킬 만들기와 부르기

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C1 | `SKILL.md` 파일 하나를 만들면 Claude의 도구함에 스킬이 추가된다 | VERIFIED | skills | "Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." | `SKILL.md` |
| C2 | Claude가 알아서 쓰기도 하고, 내가 `/스킬이름` 으로 직접 부를 수도 있다 | VERIFIED | skills | "Claude uses skills when relevant, or you can invoke one directly with `/skill-name`." | `/skill-name` |
| C3 | 같은 지시를 채팅에 자꾸 붙여 넣게 될 때 스킬을 만들 만하다 | VERIFIED | skills | "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." | — |
| C4 | 스킬 본문은 쓸 때만 불러오므로 긴 참고 자료를 넣어 둬도 부담이 거의 없다 | VERIFIED | skills | "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." | — |
| C5 | 개인 스킬 폴더에 만든 스킬은 내 모든 프로젝트에서 쓸 수 있다 | VERIFIED | skills | "Personal skills are available across all your projects." | `~/.claude/skills/` |
| C6 | 개인 스킬 경로는 `~/.claude/skills/<스킬이름>/SKILL.md` 이고, 폴더는 `mkdir -p` 로 만든다 | VERIFIED | skills | "mkdir -p ~/.claude/skills/summarize-changes" | `mkdir -p ~/.claude/skills/summarize-changes` |
| C7 | 프로젝트 스킬은 `.claude/skills/<스킬이름>/SKILL.md` 에 두고, 커밋하면 팀도 쓴다 | VERIFIED | skills | "Commit it so your team gets it too" | `.claude/skills/` |
| C8 | SKILL.md는 두 부분이다: `---` 사이의 설정(언제 쓸지)과 그 아래 마크다운 지시문 | VERIFIED | skills | "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." | `SKILL.md` |
| C9 | 폴더 이름(또는 `name`)이 입력할 명령 이름이 되고, `description`은 Claude가 자동으로 불러올지 정하는 근거다 | VERIFIED | skills | "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." | — |
| C10 | 모든 설정 필드는 선택이고 `description`만 권장된다 | VERIFIED | skills | "All fields are optional. Only `description` is recommended so Claude knows when to use the skill." | `description` |
| C11 | 설정 블록은 파일의 맨 첫 줄이 `---` 일 때만 읽힌다 | VERIFIED | skills | "Claude Code reads the frontmatter only when the opening `---` is the file's first line." | — |
| C12 | 필드 이름을 틀리게 쓰면 오류 없이 조용히 무시된다 | VERIFIED | skills | "Claude Code ignores a field it doesn't recognize without reporting an error." | — |
| C13 | 세션 도중 스킬을 추가·수정·삭제해도 재시작 없이 반영된다 | VERIFIED | skills | "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." | — |
| C14 | 세션 시작 때 없던 최상위 스킬 폴더를 새로 만들었다면 `/reload-skills` 를 실행한다 | VERIFIED | skills | "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." | `/reload-skills` |
| C15 | 기본값은 나와 Claude 둘 다 스킬을 부를 수 있는 것이다 | VERIFIED | skills | "By default, both you and Claude can invoke any skill." | — |
| C16 | 배포처럼 부작용이 있는 스킬은 `disable-model-invocation: true` 로 Claude가 혼자 못 부르게 한다 | VERIFIED | skills | "Use this for workflows with side effects or that you want to control timing, like `/commit`, `/deploy`, or `/send-slack-message`." | `disable-model-invocation` |
| C17 | 예전 `.claude/commands/` 파일은 스킬로 합쳐졌고 그대로 동작한다 | VERIFIED | skills | "Your existing `.claude/commands/` files keep working." | `.claude/commands/` |
| C18 | 스킬 안의 `` !`명령` `` 줄은 Claude가 보기 전에 Claude Code가 먼저 실행해 결과로 바꾼다 | VERIFIED | skills | "Claude Code runs the command and replaces the line with its output before Claude sees the skill content" | — |
| C19 | 기본으로 들어 있는 번들 스킬이 있다(`/doctor`, `/code-review`, `/debug`, `/loop` 등) | VERIFIED | skills | "Claude Code includes a set of bundled skills, such as `/doctor`, `/code-review`, `/batch`, `/debug`, `/loop`, and `/claude-api`." | `/doctor` |
| C20 | `/doctor` 는 설정 점검 도구이고, 결과를 먼저 보고한 뒤 고치기 전에 확인을 묻는다 | VERIFIED | skills | "Claude reports its findings first and asks for confirmation before changing anything." | `/doctor` |

## 2. 서브에이전트

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C21 | 서브에이전트는 특정 종류의 일을 맡는 전문 AI 도우미다 | VERIFIED | sub-agents | "Subagents are specialized AI assistants that handle specific types of tasks." | — |
| C22 | 검색 결과·로그처럼 다시 안 볼 내용이 대화를 어지럽힐 일을 맡길 때 쓴다 | VERIFIED | sub-agents | "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." | — |
| C23 | 서브에이전트마다 자기만의 컨텍스트 창, 시스템 프롬프트, 도구 접근, 권한을 가진다 | VERIFIED | sub-agents | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." | — |
| C24 | 서브에이전트의 요청도 메인 대화와 같은 사용량 한도에 합산된다 | VERIFIED | sub-agents | "It also sends its own requests, which count toward the same usage limits as your main conversation." | — |
| C25 | Claude는 각 서브에이전트의 description을 보고 일을 넘길지 정한다 | VERIFIED | sub-agents | "Claude uses each subagent's description to decide when to delegate tasks." | — |
| C26 | 서브에이전트는 YAML 설정이 붙은 마크다운 파일이다 | VERIFIED | sub-agents | "Subagents are Markdown files with YAML frontmatter." | — |
| C27 | 만드는 가장 쉬운 방법은 Claude에게 파일을 써 달라고 말하는 것이다 | VERIFIED | sub-agents | "To create one, ask Claude to write it for you, or write the file yourself." | — |
| C28 | `~/.claude/agents/` 에 두면 내 모든 프로젝트에서 쓸 수 있다 | VERIFIED | sub-agents | "Because the file lives in `~/.claude/agents/`, the subagent is available in every project on your machine." | `~/.claude/agents/` |
| C29 | 한 프로젝트 전용으로 하려면 그 프로젝트의 `.claude/agents/` 로 옮긴다 | VERIFIED | sub-agents | "To scope it to one project instead, move it to that project's `.claude/agents/` directory." | `.claude/agents/` |
| C30 | `@` 를 치고 목록에서 고르면 그 서브에이전트가 반드시 실행된다 | VERIFIED | sub-agents | "Type `@` and pick the subagent from the typeahead, the same way you @-mention files." | `@` |
| C31 | 최신 버전에서 `/agents` 는 마법사 대신 "Claude에게 부탁하거나 파일을 직접 고치라"는 안내를 출력한다 | VERIFIED | sub-agents | "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." | `/agents` |
| C32 | v2.1.197 이하에서는 `/agents` 가 Running·Library 탭이 있는 대화형 마법사를 연다 | VERIFIED | sub-agents | "On Claude Code v2.1.197 and earlier, `/agents` opens an interactive wizard with a Running tab that lists live subagents and a Library tab for creating, editing, and deleting them." | `/agents` |
| C33 | 새로 만든 서브에이전트를 못 찾으면 Claude Code를 재시작한다 | VERIFIED | sub-agents | "If Claude can't find the new subagent, restart Claude Code and try again." | — |
| C34 | 서브에이전트에게 쓸 수 있는 도구를 제한할 수 있다 | VERIFIED | sub-agents | "Enforce constraints by limiting which tools a subagent can use" | `tools` |
| C35 | 프로젝트에 들어 있는 서브에이전트의 훅은 작업 폴더 신뢰 창을 수락해야 동작한다 | VERIFIED | sub-agents | "To let a project-level subagent's frontmatter hooks run, accept the workspace trust dialog for the folder that contains the agent file." | — |

## 3. 훅(hooks)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C36 | 훅은 사용자가 정의한 셸 명령이다 | VERIFIED | hooks-guide | "Hooks are user-defined shell commands." | — |
| C37 | Claude Code가 정해진 시점마다 훅을 실행하므로, AI의 판단에 맡기지 않고 항상 일어나게 만들 수 있다 | VERIFIED | hooks-guide | "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." | — |
| C38 | 훅을 만들려면 설정 파일에 `hooks` 블록을 추가한다 | VERIFIED | hooks-guide | "To create a hook, add a `hooks` block to a settings file." | `hooks` |
| C39 | 첫 훅 예제는 `~/.claude/settings.json` 에 `Notification` 훅을 넣는 것이고, 파일이 없으면 만든다 | VERIFIED | hooks-guide | "Open `~/.claude/settings.json` and add a `Notification` hook. If the file doesn't exist, create it." | `~/.claude/settings.json` |
| C40 | `Notification` 은 Claude가 입력이나 허락을 기다릴 때 발생하는 이벤트다 | VERIFIED | hooks-guide | "This hook uses the `Notification` event, which Claude Code fires when Claude is waiting for input or permission." | `Notification` |
| C41 | 리눅스용 가장 단순한 알림 훅 명령은 `notify-send` 다 | VERIFIED | hooks-guide | "notify-send 'Claude Code' 'Claude Code needs your attention'" | `notify-send` |
| C42 | `notify-send` 는 데스크톱 알림 프로그램이 필요해서 서버·SSH·컨테이너에서는 안 될 수 있다 | VERIFIED | hooks-guide | "`notify-send` needs a desktop notification daemon, which headless servers, SSH sessions, and most containers don't have." | `notify-send` |
| C43 | 설정 파일에 이미 `hooks` 키가 있으면 통째로 바꾸지 말고 이벤트 이름을 같은 줄에 하나 더 추가한다 | VERIFIED | hooks-guide | "If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." | `hooks` |
| C44 | 훅을 Claude에게 써 달라고 부탁해도 된다 | VERIFIED | hooks-guide | "You can also ask Claude to write the hook for you by describing what you want in the CLI." | — |
| C45 | `/hooks` 를 입력하면 설정된 훅을 보는 화면이 열린다 | VERIFIED | hooks-guide | "Type `/hooks` at the Claude Code prompt to open the hooks browser." | `/hooks` |
| C46 | `/hooks` 는 설정된 훅을 이벤트별로 묶어서 보여 준다 | VERIFIED | hooks-guide | "Run `/hooks` in Claude Code to browse all configured hooks grouped by event." | `/hooks` |
| C47 | 훅이 안 보일 때 확인할 것은 `/hooks` 에 제 이벤트 아래 나오는지다 | VERIFIED | hooks-guide | "Run `/hooks` and confirm the hook appears under the correct event" | `/hooks` |
| C48 | `~/.claude/settings.json` 의 훅은 내 컴퓨터에만 적용된다 | VERIFIED | hooks-guide | "No, local to your machine" | `~/.claude/settings.json` |
| C49 | `.claude/settings.json` 의 훅은 프로젝트 전체이며 저장소에 커밋해 공유할 수 있다 | VERIFIED | hooks-guide | "Yes, can be committed to the repo" | `.claude/settings.json` |
| C50 | 실행 중에 설정 파일을 고치면 보통 훅 변경이 자동 반영된다 | VERIFIED | hooks-guide | "If you edit settings files directly while Claude Code is running, the file watcher normally picks up hook changes automatically." | — |
| C51 | 설정 파일의 JSON은 끝 쉼표와 주석을 쓰면 안 된다 | VERIFIED | hooks-guide | "Verify your JSON is valid: trailing commas and comments aren't allowed" | — |
| C52 | `PreToolUse` 는 도구 실행 전에 일어나고 막을 수 있다 | VERIFIED | hooks-guide | "Before a tool call executes. Can block it" | `PreToolUse` |
| C53 | 대부분의 훅은 셸 명령을 실행하는 `command` 형이다 | VERIFIED | hooks-guide | "Most hooks use `\"type\": \"command\"`, which runs a shell command." | `"type": "command"` |
| C54 | 스크립트가 종료 코드 2로 끝나면 해당 작업을 막을 수 있다 | VERIFIED | hooks-guide | "The script checks the target file path against a list of protected patterns and exits with code 2 to block the edit." | — |
| C55 | `PostToolUse` 훅은 이미 실행된 동작을 되돌릴 수 없다 | VERIFIED | hooks-guide | "`PostToolUse` hooks can't undo actions since the tool has already executed." | `PostToolUse` |
| C56 | 훅이 `deny` 를 돌려주면 권한 우회 모드에서도 도구가 막힌다 | VERIFIED | hooks-guide | "a hook that returns `permissionDecision: \"deny\"` blocks the tool even in `bypassPermissions` mode or with `--dangerously-skip-permissions`." | — |
| C57 | 훅 전체를 끄는 설정 키는 `disableAllHooks` 이다 | VERIFIED | hooks-guide | "To disable hooks, set `\"disableAllHooks\": true` in your settings file." | `disableAllHooks` |
| C58 | 훅은 내 계정 권한으로 컴퓨터에서 도는 명령이라, 남이 준 저장소의 훅은 읽고 쓰는 것이 안전하다(문서에 이 문장 그대로는 없음) | UNVERIFIED | hooks-guide | — | — |

## 4. MCP 서버

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C59 | MCP는 Claude Code가 기본 도구 밖의 일(이슈 검색, 데이터베이스 조회, 브라우저 조작)을 하게 해 준다 | VERIFIED | mcp-quickstart | "lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." | MCP |
| C60 | 그 도구들은 내 컴퓨터에서 돌거나 호스팅 서비스로 제공되는 MCP 서버에서 온다 | VERIFIED | mcp-quickstart | "These tools come from MCP servers, which run on your machine or as hosted services." | — |
| C61 | `claude mcp add` 는 터미널에서 실행하며 `claude` 세션 안이 아니다 | VERIFIED | mcp-quickstart | "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." | `claude mcp add` |
| C62 | 원격 서버 추가 명령은 `claude mcp add --transport http 이름 주소` 형태다 | VERIFIED | mcp-quickstart | "claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp" | `claude mcp add --transport http` |
| C63 | 원격 서버에는 HTTP 방식이 권장된다 | VERIFIED | mcp | "HTTP servers are the recommended option for connecting to remote MCP servers." | — |
| C64 | 내 컴퓨터에서 프로그램을 돌리는 서버는 `--` 뒤에 실행 명령을 쓴다 | VERIFIED | mcp | "claude mcp add [options] <name> -- <command> [args...]" | `claude mcp add` |
| C65 | `--` 는 Claude 자신의 옵션과 서버를 띄우는 명령을 갈라 놓는다 | VERIFIED | mcp | "the `--` (double dash) separates Claude's own options, such as `--transport`, `--env`, and `--scope`, from the command and arguments that run the server." | `--` |
| C66 | `claude mcp list` 로 등록된 서버와 연결 상태를 확인한다 | VERIFIED | mcp-quickstart | "Confirm the server appears in your server list and check its status:" | `claude mcp list` |
| C67 | 로그인이 필요한 서버는 `! Needs authentication` 으로 표시된다 | VERIFIED | mcp-quickstart | "The server is reachable but needs a browser sign-in, or a token passed with `--header`." | `! Needs authentication` |
| C68 | 오류 내용은 `claude mcp get <이름>` 으로 자세히 본다 | VERIFIED | mcp-quickstart | "Run `claude mcp get <name>` for the error detail" | `claude mcp get` |
| C69 | 서버를 지우는 명령은 `claude mcp remove 이름` 이다 | VERIFIED | mcp-quickstart | "claude mcp remove claude-code-docs" | `claude mcp remove` |
| C70 | 대화 중에는 `/mcp` 로 이미 추가한 서버를 확인·관리한다 | VERIFIED | mcp-quickstart | "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." | `/mcp` |
| C71 | 기본 범위(local)는 나만, 이 프로젝트에서만 쓴다 | VERIFIED | mcp-quickstart | "By default it registers the server at `local` scope: private to you, active only in the current project." | `local` |
| C72 | `--scope user` 는 내 모든 프로젝트, `--scope project` 는 팀과 공유한다 | VERIFIED | mcp-quickstart | "Pass `--scope user` to register it once for all your projects, or `--scope project` to share it with teammates." | `--scope user` |
| C73 | `project` 범위는 프로젝트 루트의 `.mcp.json` 에 기록된다 | VERIFIED | mcp-quickstart | "Re-add the server at `project` scope, which writes to `.mcp.json` in the project root:" | `.mcp.json` |
| C74 | 범위는 추가할 때 정해지므로 바꾸려면 지우고 다시 추가한다 | VERIFIED | mcp-quickstart | "A server's scope is fixed when you add it, so changing scope means removing the entry and re-adding it at the new one." | — |
| C75 | 동료가 저장소를 받아 시작하면 서버 승인 질문이 뜬다 | VERIFIED | mcp-quickstart | "Teammates who clone the repository and start Claude Code see a prompt to approve the server, then it connects for them too." | — |
| C76 | 서버를 연결하기 전에 믿을 수 있는지 확인해야 한다 | VERIFIED | mcp | "Verify you trust each server before connecting it." | — |
| C77 | 바깥 내용을 가져오는 서버는 프롬프트 인젝션 위험에 노출될 수 있다 | VERIFIED | mcp | "Servers that fetch external content can expose you to prompt injection risk." | — |
| C78 | 많은 클라우드 MCP 서버는 인증이 필요하고 OAuth 2.0을 지원한다 | VERIFIED | mcp | "Many cloud-based MCP servers require authentication. Claude Code supports OAuth 2.0 for secure connections." | — |
| C79 | 로그인이 필요하면 `/mcp` 에 표시되어 그 안에서 로그인 절차를 마친다 | VERIFIED | mcp | "either status code flags it in `/mcp` so you can complete the OAuth flow." | `/mcp` |
| C80 | `claude mcp login <이름>` 으로 터미널에서 바로 로그인 절차를 진행할 수 있다 | VERIFIED | mcp | "The `claude mcp login <name>` command runs a configured server's OAuth flow directly from your shell, so you don't need to open the `/mcp` panel inside a session." | `claude mcp login` |
| C81 | 원격 서버를 지우면 저장된 로그인 토큰도 함께 지워진다 | VERIFIED | mcp | "When you remove a remote server, Claude Code also deletes the OAuth tokens and client registration it stored for that server." | — |
| C82 | stdio 서버는 내 컴퓨터에서 프로세스로 실행된다 | VERIFIED | mcp | "Stdio servers run as local processes on your machine." | — |

## 5. 플러그인

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C83 | 플러그인은 스킬·에이전트·훅·MCP 서버 등을 한 묶음으로 설치하는 폴더다 | VERIFIED | plugins/overview | "A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." | — |
| C84 | 스킬·서브에이전트·훅·MCP는 플러그인 없이도 따로 쓸 수 있다 | VERIFIED | plugins/overview | "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." | — |
| C85 | 여러 개를 한 묶음으로 쓰고 싶을 때 플러그인을 쓴다 | VERIFIED | plugins/overview | "Use a plugin when you want several skills, subagents, hooks, or MCP servers packaged as one unit." | — |
| C86 | `/plugin` 을 실행하면 Discover 탭에서 마켓플레이스의 플러그인을 고를 수 있다 | VERIFIED | plugins/overview | "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." | `/plugin` |
| C87 | 마켓플레이스는 한 번 추가하고, 이후 이름으로 플러그인을 설치한다 | VERIFIED | plugins/overview | "You add a marketplace once, then install plugins from it by name, such as `commit-commands@claude-plugins-official`." | `commit-commands@claude-plugins-official` |
| C88 | Anthropic 공식 마켓플레이스는 터미널을 처음 시작할 때 자동으로 추가된다 | VERIFIED | plugins/overview | "Claude Code adds Anthropic's official marketplace the first time you start an interactive terminal session" | `claude-plugins-official` |
| C89 | 설치 명령은 `/plugin install 플러그인@마켓플레이스` 형태다 | VERIFIED | plugins/install | "/plugin install commit-commands@claude-plugins-official" | `/plugin install` |
| C90 | 세션에서 이 명령은 바로 설치하지 않고 상세 화면을 열어 범위를 고르게 한다 | VERIFIED | plugins/install | "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." | `/plugin` |
| C91 | 플러그인은 훅과 MCP 서버를 실행할 수 있으니 설치 전에 상세 화면을 읽는다 | VERIFIED | plugins/install | "A plugin can run hooks and MCP servers, so read the pane before you install." | — |
| C92 | 설치한 플러그인은 내 권한으로 코드를 실행할 수 있다(출처 불문) | VERIFIED | plugins/overview | "Whatever the tier, a plugin you install can run code with your user privileges." | — |
| C93 | 플러그인이 실행하는 것은 내가 실행하는 것과 같다 | VERIFIED | plugins/overview | "what the plugin runs, it runs as you." | — |
| C94 | 설치 범위 "Install for you" 는 이 컴퓨터의 모든 프로젝트에서 쓴다 | VERIFIED | plugins/install | "Install for you (user scope): you get the plugin in every project on this machine" | Install for you (user scope) |
| C95 | 범위 "Install for all collaborators" 는 저장소의 모두에게 켜진다 | VERIFIED | plugins/install | "Install for all collaborators on this repository (project scope): it's enabled for everyone who works in this repository" | Install for all collaborators on this repository (project scope) |
| C96 | 범위 "in this repo only" 는 나만, 이 저장소에서만 쓴다 | VERIFIED | plugins/install | "Install for you, in this repo only (local scope): you get it in this repository only" | Install for you, in this repo only (local scope) |
| C97 | 새로고침이 필요하면 패널을 닫을 때 Claude Code가 대신 `/reload-plugins` 를 실행한다 | VERIFIED | plugins/install | "The panel closes and Claude Code runs that reload for you." | `/reload-plugins` |
| C98 | 설치 후 `/` 를 치면 `/<플러그인>:<스킬>` 형태로 스킬이 보인다 | VERIFIED | plugins/install | "Type `/` and look for the plugin's skills under its name, in the form `/<plugin>:<skill>`." | `/<plugin>:<skill>` |
| C99 | 공식이 아닌 마켓플레이스는 `/plugin marketplace add 소스` 로 먼저 추가한다 | VERIFIED | plugins/install | "In a Claude Code session, run `/plugin marketplace add` followed by the marketplace's source: a GitHub repository, a git repository on any host, a local directory or file, or a hosted `marketplace.json`." | `/plugin marketplace add` |
| C100 | GitHub 저장소는 `소유자/저장소` 로 쓴다(예: 공식 마켓플레이스) | VERIFIED | plugins/install | "/plugin marketplace add anthropics/claude-plugins-official" | `/plugin marketplace add` |
| C101 | 추가에 성공하면 `Successfully added marketplace: <이름>` 이 출력된다 | VERIFIED | plugins/install | "When the command succeeds, it prints `Successfully added marketplace: <name>`" | `Successfully added marketplace` |
| C102 | 설치한 플러그인은 `/plugin` 의 Installed 탭에서 켜고 끄고 지운다 | VERIFIED | plugins/install | "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." | `/plugin` |
| C103 | 지우지 않고 끄려면 `claude plugin disable` 을 쓴다 | VERIFIED | plugins/overview | "disable the plugin with `/plugin` or, in your shell, `claude plugin disable`." | `claude plugin disable` |
| C104 | 마켓플레이스를 지우면 거기서 설치한 플러그인이 모두 함께 제거된다 | VERIFIED | plugins/install | "When you remove a marketplace, Claude Code uninstalls every plugin you installed from it and removes their `enabledPlugins` entries from your settings files." | `/plugin marketplace remove` |
| C105 | 켜 둔 플러그인은 쓰지 않는 세션에서도 컨텍스트를 차지한다 | VERIFIED | plugins/overview | "An enabled plugin is part of every session, not only the sessions where you use it." | — |

## 6. 상태 줄(status line)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C106 | 상태 줄은 Claude Code 화면 아래쪽에 내가 정한 셸 스크립트의 출력을 보여 주는 줄이다 | VERIFIED | statusline | "The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." | — |
| C107 | 스크립트는 세션 정보를 JSON으로 받고, 출력한 내용이 그대로 표시된다 | VERIFIED | statusline | "It receives JSON session data on stdin and displays whatever your script prints" | — |
| C108 | `/statusline` 에 원하는 모양을 말로 적으면 만들어 준다 | VERIFIED | statusline | "The `/statusline` command accepts natural language instructions describing what you want displayed." | `/statusline` |
| C109 | 스크립트는 `~/.claude/` 에 생성되고 설정도 자동으로 고쳐진다 | VERIFIED | statusline | "Claude Code generates a script file in `~/.claude/` and updates your settings automatically:" | `~/.claude/` |
| C110 | 가장 단순한 예는 모델 이름과 컨텍스트 비율을 진행 막대로 보이는 요청이다 | VERIFIED | statusline | "/statusline show model name and context percentage with a progress bar" | `/statusline` |
| C111 | 직접 설정하려면 `~/.claude/settings.json` 에 `statusLine` 필드를 넣는다 | VERIFIED | statusline | "Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." | `statusLine` |
| C112 | 상태 줄을 없애려면 `/statusline` 에 지워 달라고 하거나 `statusLine` 필드를 삭제한다 | VERIFIED | statusline | "Run `/statusline` and ask it to remove or clear your status line (for example, `/statusline delete`, `/statusline clear`, `/statusline remove it`)." | `/statusline delete` |
| C113 | 작업 폴더 신뢰 창을 수락하기 전에는 상태 줄이 비어 있다 | VERIFIED | statusline | "Until you accept the workspace trust dialog, the status line stays blank." | — |
| C114 | 상태 줄은 셸 명령을 실행하므로 훅과 같은 신뢰 규칙이 적용된다 | VERIFIED | statusline | "Because `statusLine` executes a shell command" | `statusLine` |
| C115 | 시계처럼 시간에 따라 바뀌는 값은 `refreshInterval` 로 주기를 정한다 | VERIFIED | statusline | "The optional `refreshInterval` field re-runs your command every N seconds in addition to the event-driven updates." | `refreshInterval` |

## 7. 출력 스타일(output styles)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
| :- | :- | :- | :- | :- | :- |
| C116 | 출력 스타일은 한 세션의 모든 응답에서 Claude의 역할·말투·답변 형식을 정하는 지시 모음이다 | VERIFIED | output-styles | "An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." | `/output-style` |
| C117 | 내장 스타일은 Proactive, Concise, Explanatory, Learning 이다 | VERIFIED | output-styles | "The value is case-sensitive, so write the built-in names as `Proactive`, `Concise`, `Explanatory`, and `Learning`." | `Proactive` |
| C118 | Proactive는 일상적인 결정에서 묻지 않고 합리적 가정으로 바로 시작한다 | VERIFIED | output-styles | "Claude starts work right away and makes reasonable assumptions rather than asking about routine decisions" | `Proactive` |
| C119 | Concise는 결과부터 말하고 서두·나레이션·요약을 줄인다 | VERIFIED | output-styles | "Responses lead with the result and leave out preamble, narration, and recaps" | `Concise` |
| C120 | Explanatory는 코드 선택의 이유를 `Insight` 블록으로 덧붙인다 | VERIFIED | output-styles | "Claude adds short `Insight` blocks that explain the choices behind the code it writes" | `Explanatory` |
| C121 | Learning은 작은 코드 조각을 내가 직접 쓰도록 남겨 둔다 | VERIFIED | output-styles | "Claude explains its choices and leaves small pieces of code for you to write yourself" | `Learning` |
| C122 | `/output-style 이름` 으로 바꾸고, 인자 없이 치면 목록과 현재 스타일이 나온다 | VERIFIED | output-styles | "With no argument, the command lists the styles you can pick and marks the current one." | `/output-style` |
| C123 | `/config` 에서 Output style 을 골라 메뉴로 바꿀 수도 있다 | VERIFIED | output-styles | "Terminal menu: run `/config` and select Output style to pick a style from a menu." | `/config` |
| C124 | 선택은 `.claude/settings.local.json` 에 저장된다 | VERIFIED | output-styles | "The command and both menus save your choice to `.claude/settings.local.json` at the local project level." | `.claude/settings.local.json` |
| C125 | 설정 파일의 `outputStyle` 값은 대소문자를 구분하고, 틀리면 Default가 된다 | VERIFIED | output-styles | "A value that doesn't match a style name exactly, such as `explanatory`, gives you the Default style. The `/output-style` command ignores case." | `outputStyle` |
| C126 | 모든 프로젝트의 기본값은 `~/.claude/settings.json` 의 `outputStyle` 로 정한다 | VERIFIED | output-styles | "To make a style your default across projects, set `outputStyle` in `~/.claude/settings.json`." | `outputStyle` |
| C127 | 내 스타일은 마크다운 파일이고 위쪽 설정 블록과 아래 지시문으로 이루어진다 | VERIFIED | output-styles | "A custom output style is a Markdown file: frontmatter for metadata, then the instructions for Claude." | — |
| C128 | 개인 스타일은 `~/.claude/output-styles` 에 둔다 | VERIFIED | output-styles | "User: `~/.claude/output-styles`" | `~/.claude/output-styles` |
| C129 | 코딩은 그대로 두고 말투만 바꾸려면 `keep-coding-instructions: true` 를 쓴다 | VERIFIED | output-styles | "Set `keep-coding-instructions: true` if you're changing how Claude communicates but still want it coding the same way." | `keep-coding-instructions` |
| C130 | 매번 반드시 일어나야 하는 일은 훅을 쓴다 | VERIFIED | output-styles | "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." | — |

## 가이드에 쓸 때 주의

- `/agents` 는 버전에 따라 동작이 다르다. 최신 문서에서는 안내 문구만 출력하고(C31), v2.1.197 이하에서만 탭이 있는 마법사가 열린다(C32). 화면 설명은 쓰는 버전을 확인한 뒤 쓴다.
- 훅·상태 줄·플러그인·MCP는 모두 내 컴퓨터에서 내 권한으로 명령을 실행한다. 문서는 MCP의 신뢰 확인(C76)과 플러그인(C92, C93)에는 경고를 직접 적었지만, 훅에 대해서는 같은 문장이 없다(C58는 UNVERIFIED). 훅과 상태 줄은 "남이 준 저장소의 `.claude/settings.json` 은 열어 보고 쓴다"로 안내하되 원문 인용으로 단정하지 않는다.
- `/hooks` 는 훅을 보는 화면이고 훅을 새로 만드는 화면이 아니다(C45~C47). 만들 때는 `~/.claude/settings.json` 을 직접 고치거나 Claude에게 부탁한다(C44). 설정 파일 JSON은 끝 쉼표·주석이 있으면 훅이 안 보인다(C51).
- `claude mcp add`/`list`/`remove` 는 터미널(셸)에서 치는 명령이고, `/mcp` 는 `claude` 세션 안에서 치는 명령이다(C61, C70). 초보자가 두 환경을 섞기 쉽다. 또 기본 범위는 `local` 이라 다른 프로젝트에서는 안 보인다(C71).
- 플러그인 설치(`/plugin install`)는 세션 안에서 바로 설치하지 않고 상세 화면을 연다(C90). 설치 화면의 Context cost 는 Discover 목록에서 들어갔을 때는 안 나올 수 있다(plugins/install 원문).
- 스킬에서 폴더 이름이 명령 이름이 된다(C9). 설정 블록이 첫 줄이 아니거나 필드명이 틀리면 오류 없이 무시된다(C11, C12). 초보자에게는 "안 먹히면 먼저 이 두 가지를 본다"로 안내한다.
- 출력 스타일의 `outputStyle` 값은 대소문자를 구분하지만 `/output-style` 명령은 구분하지 않는다(C125).

# 부록 D — 자동화·동시 작업·비용·안전·오류

> 조사 범위: headless, common-workflows, worktrees, scheduled-tasks, goal, remote-control, costs, model-config, fast-mode, sandboxing, security, data-usage, troubleshooting, debug-your-config, errors, overview, 그리고 근거 보강용으로 cli-reference·authentication. 개인 구독 계정 기준이며 조직 배포·클라우드 제공자·API 개발 내용은 뺐다.

## 1. 한 줄 실행(-p) 기본

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D1 | `-p`(또는 `--print`)를 붙이면 대화 없이 한 번 답하고 끝나는 "비대화형" 실행이 된다. | VERIFIED | headless | "Add the `-p` (or `--print`) flag to any `claude` command to run it non-interactively." | `claude -p "질문"` |
| D2 | 성공하면 종료 코드 0, 실패하면 0이 아닌 값이라 스크립트가 성공 여부를 판단할 수 있다. | VERIFIED | headless | "Claude Code exits with code 0 on success and a non-zero code when the run fails, so your scripts can branch on the exit status." | — |
| D3 | 다른 프로그램의 출력을 파이프(\|)로 넘겨 `claude -p`에 먹이고, 답을 파일로 저장할 수 있다. | VERIFIED | headless | "Non-interactive mode reads stdin, so you can pipe data in and redirect the response out like any other command-line tool." | `cat 파일 \| claude -p "..."` |
| D4 | 파이프로 넘기는 입력은 10MB까지이고, 넘으면 오류로 끝난다. 큰 자료는 파일에 저장하고 경로를 프롬프트에 적는다. | VERIFIED | headless | "Piped stdin is capped at 10MB." | — |
| D5 | 이어서 묻기: `--continue`는 가장 최근 대화, `--resume`에 세션 ID를 주면 특정 대화를 잇는다. | VERIFIED | headless | "Use `--continue` to continue the most recent conversation, or `--resume` with a session ID to continue a specific conversation." | `--continue` `--resume` |
| D6 | 이어 갈 대화가 없는 폴더에서 `--continue`를 쓰면 안내 문구가 나오고 끝난다. | VERIFIED | common-workflows | "it prints `No conversation found to continue` and exits." | `claude --continue` |
| D7 | `--append-system-prompt`는 기본 동작을 유지한 채 지시를 덧붙인다(역할 부여 등). | VERIFIED | headless | "Use `--append-system-prompt` to add instructions while keeping Claude Code's default behavior." | `--append-system-prompt` |
| D8 | `-p` 안에서는 `/login` 같은 터미널 화면 전용 명령은 쓸 수 없다. | VERIFIED | headless | "Built-in commands that only run in the terminal interface, such as `/login`, aren't available." | `/login` |
| D9 | `-p` 안에서도 `/model sonnet`처럼 값을 함께 주는 형태는 동작한다. | VERIFIED | headless | "`/model`, `/effort`, `/fast`, `/color`, and `/rename` accept the value as an argument, for example `/model sonnet`" | `/model` `/effort` |

## 2. 출력 형식과 비용 필드

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D10 | `--output-format text`가 기본값이며 평범한 글로 나온다. | VERIFIED | headless | "`text` (default): plain text output" | `--output-format text` |
| D11 | `json`은 답, 세션 ID, 부가 정보를 하나의 JSON으로 묶어 준다. | VERIFIED | headless | "`json`: structured JSON with result, session ID, and metadata" | `--output-format json` |
| D12 | `stream-json`은 한 줄에 JSON 하나씩 실시간으로 흘려 준다. | VERIFIED | headless | "`stream-json`: newline-delimited JSON for real-time streaming" | `--output-format stream-json` |
| D13 | `json` 결과에는 `total_cost_usd`와 모델별 비용이 들어 있어 스크립트가 지출을 추적할 수 있다. | VERIFIED | headless | "With `--output-format json`, the response payload includes `total_cost_usd` and a per-model cost breakdown" | `total_cost_usd` |
| D14 | 그 비용 수치는 프로그램이 계산한 추정치라 실제 청구액과 다를 수 있다. | VERIFIED | headless | "Both figures are client-side estimates and can differ from your actual bill." | — |
| D15 | `--json-schema`를 쓰면 정해 둔 모양(스키마)에 맞는 결과를 `structured_output` 칸으로 받는다. | VERIFIED | headless | "To get output conforming to a specific schema, use `--output-format json` with `--json-schema` and a JSON Schema definition." | `--json-schema` |
| D16 | 모델이 요청을 거절하는 등 유효한 구조화 결과가 없으면 `structured_output` 칸 자체가 없다. | VERIFIED | headless | "Before your script uses `structured_output`, check that the field is present." | `structured_output` |
| D17 | `--max-turns`로 에이전트가 움직이는 횟수(턴)에 상한을 둘 수 있고, 기본은 무제한이다. 출력 모드에서만 쓴다. | VERIFIED | cli-reference | "Limit the number of agentic turns (print mode only). No limit by default." | `--max-turns` |

## 3. 허락(권한) 처리 방식

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D18 | `--allowedTools`는 허락을 묻지 않고 써도 되는 도구를 미리 정해 둔다. | VERIFIED | headless | "Use `--allowedTools` to let Claude use certain tools without prompting." | `--allowedTools` |
| D19 | `Read`와 `Edit`를 허용하면 파일 읽기·수정이 묻지 않고 진행된다(네트워크 경로 읽기는 제외). | VERIFIED | headless | "Listing `Read` and `Edit` lets Claude read and edit files without asking for permission, apart from reads from network paths." | `--allowedTools "Read,Edit"` |
| D20 | 허용 규칙 끝에 ` *`를 붙이면 "그 말로 시작하는 모든 명령"을 뜻한다. | VERIFIED | headless | "The trailing ` *` enables prefix matching, so `Bash(git diff *)` allows any command starting with `git diff`." | `Bash(git diff *)` |
| D21 | 허용하지 않은 도구 중 승인이 필요한 호출은 기본(Manual) 모드의 `-p`에서 자동으로 거부된다. | VERIFIED | headless | "In a Manual mode `claude -p` run, a call that needs approval is denied unless something approves it" | — |
| D22 | v2.1.302 이후 `-p`는 권한 모드를 정하지 않으면 Manual 모드로 시작한다. | VERIFIED | headless | "With Claude Code v2.1.302 or later, `claude -p` runs start in Manual mode when nothing sets a permission mode." | — |
| D23 | `--permission-mode`로 `auto`, `dontAsk`, `acceptEdits` 같은 기준 모드를 통째로 정한다. | VERIFIED | headless | "pass a permission mode with `--permission-mode`, such as `auto`, `dontAsk`, or `acceptEdits`" | `--permission-mode` |
| D24 | `dontAsk`는 물어봐야 할 호출을 전부 거부해서 잠가 둔 자동 실행에 쓴다. | VERIFIED | headless | "Claude Code denies every call that would otherwise prompt, which is useful for locked-down CI runs" | `--permission-mode dontAsk` |
| D25 | `acceptEdits`는 파일 쓰기를 묻지 않고 하고 `mkdir`·`touch`·`mv`·`cp` 같은 흔한 파일 명령도 승인한다. | VERIFIED | headless | "Claude writes files without prompting, and Claude Code auto-approves common filesystem commands such as `mkdir`, `touch`, `mv`, and `cp`." | `--permission-mode acceptEdits` |
| D26 | 답해 줄 사람이 없는 예약 작업에는 `--permission-prompts none`을 쓴다. 묻게 될 일은 거부되고 Claude는 재시도하지 않는다. | VERIFIED | headless | "Pass `--permission-prompts none` when nobody is available to answer permission prompts, for example in a scheduled job." | `--permission-prompts none` |
| D27 | `--permission-prompts`는 v2.1.259 이상에서만 있고 그 전 버전은 알 수 없는 옵션이라며 거부한다. | VERIFIED | headless | "The `--permission-prompts` flag requires Claude Code v2.1.259 or later." | — |
| D28 | `--bare` 없이 `-p`를 쓰면 처음 신뢰하지 않은 폴더의 설정 훅·MCP 서버도 그대로 불러온다. | VERIFIED | headless | "Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." | — |

## 4. 자동화 스크립트 패턴과 --bare

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D29 | `--bare`는 훅·스킬·플러그인·MCP·자동 메모리·CLAUDE.md 자동 탐색을 건너뛰어 시작이 빨라진다. | VERIFIED | headless | "Add `--bare` to reduce startup time by skipping auto-discovery of hooks, skills, custom commands, subagents, installed plugins, MCP servers, auto memory, and CLAUDE.md." | `--bare` |
| D30 | `--bare`는 구독 로그인(OAuth)을 읽지 않는다. 구독 계정으로는 쓸 수 없고 API 키가 필요하다. | VERIFIED | headless | "In bare mode, Claude Code never reads OAuth credentials or the system keychain." | `--bare` |
| D31 | 문서는 `--bare`를 스크립트·SDK 호출에 권장하고, 앞으로 `-p`의 기본값이 될 예정이라고 밝힌다. | VERIFIED | headless | "`--bare` is the recommended mode for scripted and SDK calls, and will become the default for `-p` in a future release." | `--bare` |
| D32 | CI 같은 자동 환경에서는 `--bare`를 붙여 다른 사람 컴퓨터의 설정이 섞이지 않게 하라고 권한다. | VERIFIED | headless | "In CI or other scripted environments, add `--bare` so Claude Code starts without loading the host's hooks, plugins, auto memory, or `CLAUDE.md`." | `--bare` |
| D33 | 스크립트 안에 `claude -p`를 넣어 프로젝트 전용 검사기·리뷰어로 쓸 수 있다. | VERIFIED | headless | "You can wrap a non-interactive call in a script to use Claude as a project-specific linter or reviewer." | `npm run lint:claude` |
| D34 | 여러 대화를 돌릴 때는 세션 ID를 변수에 담아 나중에 `--resume`으로 이어 간다. | VERIFIED | headless | "If you're running multiple conversations, capture the session ID to resume a specific one:" | `--resume` |
| D35 | `-p`에서는 `/goal ...`을 프롬프트로 주면 한 번의 실행 안에서 조건이 만족될 때까지 돈다. | VERIFIED | goal | "Setting a goal with `-p` runs the loop to completion in a single invocation:" | `claude -p "/goal ..."` |
| D36 | `-p`에서는 Fable 모델이 사용 크레딧으로 청구되는 경우에도 동의를 묻지 않고 그대로 청구한다. | VERIFIED | model-config | "When a Fable request there would bill to usage credits, Claude Code bills it without asking." | `-p` |

## 5. 구독 계정으로 -p 를 돌릴 때의 사용량·제약

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D37 | 구독 계정으로 `claude -p`를 쓸 때 사용량이 일반 대화와 같은 구독 한도에서 얼마나 깎이는지는 조사한 문서들에 명시돼 있지 않다. | UNVERIFIED | headless | — | — |
| D38 | 비용 문서 첫 줄은 "토큰 사용량으로 과금한다"고 하고, 같은 문서의 `/usage` 설명은 구독자는 구독에 사용량이 포함돼 있다고 한다. 두 서술의 관점이 다르다. | 충돌 | costs | "Claude Code charges by API token consumption." | — |
| D39 | `/usage`의 세션 비용 칸은 API 사용자용이고, 구독자에게는 청구 기준으로 의미가 없다. | VERIFIED | costs | "Claude Pro, Max, and Ultra subscribers have usage included in their subscription, so the session cost figure isn't relevant for billing purposes." | `/usage` |
| D40 | 구독 계정에 `ANTHROPIC_API_KEY`가 환경에 있고 승인했다면 API 키가 우선 쓰인다. 구독이 아니라 키로 과금될 수 있다. | VERIFIED | authentication | "If you have an active Claude subscription but also have `ANTHROPIC_API_KEY` set in your environment, Claude Code uses the API key once you approve it." | `ANTHROPIC_API_KEY` |
| D41 | 구독으로 돌아가려면 `unset ANTHROPIC_API_KEY` 후 `/status`로 어떤 방식이 쓰이는지 확인한다. | VERIFIED | authentication | "Run `unset ANTHROPIC_API_KEY` to fall back to your subscription, and check `/status` to confirm which method is active." | `/status` |
| D42 | 세션 한도·주간 한도에 닿으면 안내 시각까지 요청이 막힌다. | VERIFIED | errors | "Claude Code blocks further requests until the reset time shown in the message." | `You've hit your session limit` |
| D43 | 세션·주간 한도는 모든 모델이 같이 쓰므로 모델을 바꿔도 풀리지 않는다. | VERIFIED | errors | "The session and weekly limits are shared across all models, so switching models doesn't restore access." | `/model` |
| D44 | Opus 한도나 Sonnet 한도는 그 모델 계열에만 적용돼서, 다른 계열로 `/model` 전환하면 계속 쓸 수 있다. | VERIFIED | errors | "The Opus and Sonnet limits each apply only to requests to that model family, so switching to a model outside the family with `/model` keeps you working." | `You've hit your Opus limit` |
| D45 | 대화형 구독 세션은 한도가 풀린 뒤 하던 일을 자동으로 이어 가도록 기다릴 수 있다. | VERIFIED | errors | "In an interactive session signed in with a claude.ai subscription, Claude Code can also wait in the open session and continue the interrupted task shortly after the reset." | `/rate-limit-options` |
| D46 | 한도 이후에도 계속 쓰려면 사용 크레딧(추가 요금)을 `/usage-credits`로 켠다. 이 명령은 API 키 인증에서는 없다. | VERIFIED | costs | "To manage them, run `/usage-credits` after signing in with your claude.ai subscription through `/login`; the command isn't available with API key authentication." | `/usage-credits` |
| D47 | 429 오류가 구독인데 나면 환경에 남은 API 키 때문에 낮은 등급 키로 요청이 가고 있을 수 있다. | VERIFIED | errors | "A stray `ANTHROPIC_API_KEY` in your environment can route requests through a low-tier key instead of your subscription." | `/status` |

## 6. 비용·사용량 확인과 줄이는 법

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D48 | 구독자는 `/usage`에서 사용량 막대, 활동 통계, 사용 내역을 한 화면에서 본다. | VERIFIED | costs | "Subscribers see plan usage bars, activity stats, and a usage breakdown on the same screen." | `/usage` |
| D49 | `/usage` 화면의 달러 수치는 목록 가격으로 계산한 추정치다. | VERIFIED | costs | "The figure is an estimate, so for authoritative billing see Manage costs for your organization." | `/usage` |
| D50 | `/clear`로 새 대화를 시작하면 `/usage`의 세션 합계가 0원부터 다시 시작한다. | VERIFIED | costs | "These totals reset when `/clear` starts a new session, so the next session's total cost starts at $0." | `/clear` |
| D51 | `/insights`는 토큰 수가 아니라 일하는 방식을 분석한 보고서를 만든다. | VERIFIED | costs | "Run `/insights` for a report on how you work rather than how many tokens you've used." | `/insights` |
| D52 | 관련 없는 일로 넘어갈 때 `/clear`로 새로 시작하면 오래된 문맥이 매 메시지마다 토큰을 쓰는 것을 막는다. | VERIFIED | costs | "Use `/clear` to start fresh when switching to unrelated work." | `/clear` |
| D53 | `/compact 지시`로 요약할 때 무엇을 남길지 알려 줄 수 있다. | VERIFIED | costs | "`/compact Focus on code samples and API usage` tells Claude what to preserve during summarization." | `/compact` |
| D54 | 대부분의 코딩은 Sonnet으로 충분하고 Opus보다 싸다. | VERIFIED | costs | "Sonnet handles most coding tasks well and costs less than Opus." | `/model` |
| D55 | Opus 5.5·Sonnet 5.5·Haiku 5.5·Fable은 생각 기능을 끌 수 없고 항상 사용한다. | VERIFIED | costs | "You can't turn off thinking on Opus 5.5, Sonnet 5.5, Haiku 5.5, or the Fable models, which always use extended thinking." | `/config` |

## 7. 모델과 노력 수준 고르기

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D56 | 모델은 버전 번호를 외우지 않고 별칭(alias)으로 고를 수 있다. | VERIFIED | model-config | "Use a model alias to select model settings without remembering exact version numbers:" | `/model` |
| D57 | `sonnet` 별칭은 일상적인 코딩용이다. | VERIFIED | model-config | "Uses the latest Sonnet model for daily coding tasks" | `sonnet` |
| D58 | `opus` 별칭은 복잡한 추론용이다. | VERIFIED | model-config | "Uses the latest Opus model for complex reasoning tasks" | `opus` |
| D59 | `haiku` 별칭은 가볍고 빠른 단순 작업용이다. | VERIFIED | model-config | "Uses the fast and efficient Haiku model for simple tasks" | `haiku` |
| D60 | `opusplan`은 계획 단계에서 opus, 실행 단계에서 sonnet을 쓴다. | VERIFIED | model-config | "Special mode that uses `opus` during plan mode, then switches to `sonnet` for execution" | `opusplan` |
| D61 | 구독 계정(Pro·Max·Ultra 포함)의 기본(default) 모델은 Opus 5.5다. | VERIFIED | model-config | "Pro, Max, Ultra, Team, Enterprise, and Anthropic API: defaults to Opus 5.5" | `default` |
| D62 | Fable 모델은 어떤 요금제에서도 기본값이 아니라 직접 골라야 한다. | VERIFIED | model-config | "Neither Fable model is the account-type default on any plan or provider." | `/model fable` |
| D63 | Fable 5.1은 `/model fable`로 고르거나 `claude --model fable`로 시작한다. | VERIFIED | model-config | "run `/model fable`, or launch with `claude --model fable`." | `/model fable` |
| D64 | 요금제와 좌석 등급에 따라 Fable 사용이 구독 한도 대신 사용 크레딧으로 청구될 수 있다. | VERIFIED | model-config | "Depending on your plan and seat tier, Fable usage can bill to usage credits instead of drawing on your plan's included limits." | `Requires usage credits` |
| D65 | 모델 정하는 법 1순위는 세션 중 `/model`, 인수 없이 치면 고르는 화면이 열린다. | VERIFIED | model-config | "use `/model <alias\|name>` to switch immediately, or run `/model` with no argument to open the picker." | `/model` |
| D66 | `/model`로 고르면 새 세션의 기본값으로도 저장된다. | VERIFIED | model-config | "`/model` saves your choice as the default for new sessions by writing the `model` field in your user settings." | `/model` |
| D67 | 고르는 화면에서 `s`를 누르면 이번 세션에만 적용하고 기본값은 그대로 둔다. | VERIFIED | model-config | "`s`: switch model for this session only and leave your default unchanged." | `/model` |
| D68 | 노력 수준(effort)은 낮을수록 빠르고 싸고, 높을수록 깊게 생각한다. | VERIFIED | model-config | "Lower effort is faster and cheaper for straightforward tasks, while higher effort provides deeper reasoning for complex problems." | `/effort` |
| D69 | Opus 5.5·Sonnet 5.5·Haiku 5.5의 기본 노력은 medium이고 그 밖의 모델은 대부분 high다. | VERIFIED | model-config | "The model's default effort: `high` on every model that supports effort, except that Opus 5.5, Sonnet 5.5, and Haiku 5.5 default to `medium` and Opus 4.7 defaults to `xhigh`." | `/effort` |
| D70 | low는 결과를 하나하나 확인하는 짧은 대화(아이디어 내기, 이름 바꾸기)에 맞다. | VERIFIED | model-config | "Quick exchanges where you review each result, such as brainstorming, a first sketch, or a small change like a rename" | `low` |
| D71 | medium은 범위가 분명한 일상 작업(새 기능 구현)에 맞다. | VERIFIED | model-config | "it fits day-to-day engineering work with a clear scope, such as implementing a new feature." | `medium` |
| D72 | high는 검증이 중요하거나 예외가 많을 작업(기존 코드의 버그 수정)에 맞다. | VERIFIED | model-config | "Work where verification matters or edge cases are likely, such as fixing a bug in an existing codebase." | `high` |
| D73 | max는 수확 체감과 과잉 사고가 있을 수 있어 널리 쓰기 전에 시험해 보라고 한다. | VERIFIED | model-config | "`max` may show diminishing returns and is prone to overthinking, so test before adopting it broadly" | `max` |
| D74 | `/effort`: 인수 없이 치면 슬라이더, 단계 이름을 주면 바로 설정, `auto`는 저장한 수준 해제. | VERIFIED | model-config | "run `/effort` with no arguments to open an interactive slider, `/effort` followed by a level name to set it directly, or `/effort auto` to clear your saved level for the active model" | `/effort` |
| D75 | `--effort`로 시작하면 그 세션에만 적용된다. | VERIFIED | model-config | "pass a level name to set it for a single session when launching Claude Code" | `--effort` |
| D76 | 프롬프트에 `ultrathink`를 넣으면 그 턴만 더 깊게 생각하고 세션 설정은 바뀌지 않는다. | VERIFIED | model-config | "Include `ultrathink` anywhere in your prompt to request deeper reasoning on that turn without changing your session effort setting." | `ultrathink` |

## 8. 빠른 모드(/fast)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D77 | 빠른 모드는 같은 Opus를 최대 2.5배 빠르게, 토큰당 더 비싸게 쓰는 설정이다. | VERIFIED | fast-mode | "Fast mode is a high-speed configuration for Claude Opus, making the model up to 2.5x faster at a higher cost per token." | `/fast` |
| D78 | Sonnet·Haiku 등 다른 모델에서는 쓸 수 없다. | VERIFIED | fast-mode | "It is not available on Sonnet, Haiku, or other models." | `/fast` |
| D79 | 구독 요금제에서 빠른 모드는 사용 크레딧으로만 쓸 수 있고 구독 한도에 포함되지 않는다. | VERIFIED | fast-mode | "For Claude Code users on subscription plans (Pro/Max/Ultra/Team/Enterprise), fast mode is available via usage credits only and not included in the subscription rate limits." | `/fast` |
| D80 | 켜는 법: `/fast`를 친 뒤 Space로 전환하고 Enter로 확정한다. | VERIFIED | fast-mode | "Run `/fast`, press Space to toggle on or off, then press Enter to confirm" | `/fast` |

## 9. 작업 폴더 분리: worktree

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D81 | worktree는 같은 저장소 기록을 공유하면서 파일과 가지(branch)가 따로인 별도 작업 폴더다. | VERIFIED | worktrees | "A git worktree is a separate working directory with its own files and branch, sharing the same repository history and remote as your main checkout." | — |
| D82 | `--worktree`(또는 `-w`)에 이름을 주면 격리 폴더를 만들고 그 안에서 시작한다. | VERIFIED | worktrees | "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." | `claude --worktree 이름` |
| D83 | 기본 위치는 저장소 루트의 `.claude/worktrees/<이름>/`이고 새 가지 이름은 `worktree-<이름>`이다. | VERIFIED | worktrees | "By default, the worktree is created under `.claude/worktrees/<name>/` at your repository root, on a new branch named `worktree-<name>`:" | `.claude/worktrees/` |
| D84 | 커밋이 한 번도 없는 저장소에서는 worktree를 만들 수 없고, 최소 커밋 하나가 필요하다. | VERIFIED | common-workflows | "so the repository needs at least one commit first." | `--worktree` |
| D85 | 새 worktree는 새로 받은 사본이라 의존 패키지 설치 등 환경 준비가 다시 필요하다. | VERIFIED | worktrees | "A worktree is a fresh checkout, so initialize your development environment there" | — |
| D86 | `.env`처럼 git이 추적하지 않는 파일은 `.worktreeinclude` 파일로 자동 복사한다. | VERIFIED | worktrees | "To copy them automatically when Claude creates a worktree, add a `.worktreeinclude` file to your project root." | `.worktreeinclude` |
| D87 | 끝낼 때 변경이 없는 이름 없는 worktree는 가지와 함께 자동 삭제된다. | VERIFIED | worktrees | "for an unnamed session, Claude removes the worktree and its branch automatically." | — |
| D88 | 작업물이 남은 worktree는 보관할지 삭제할지 묻고, 삭제하면 작업도 사라진다. | VERIFIED | worktrees | "Removing deletes the worktree directory and its branch, along with all the work in them" | — |
| D89 | 나중에 돌아오려면 종료할 때 출력되는 `claude --worktree <이름> --resume` 명령을 쓴다. | VERIFIED | worktrees | "To return later, run the `claude --worktree <name> --resume` command that Claude Code prints on exit." | `claude --worktree <name> --resume` |

## 10. 반복·예약 실행: /loop

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D90 | 세션 안에서 같은 프롬프트를 간격을 두고 자동으로 다시 실행하는 기능이다. | VERIFIED | scheduled-tasks | "Session-scoped scheduled tasks let Claude re-run a prompt automatically on an interval within a Claude Code session." | `/loop` |
| D91 | 간격 + 프롬프트를 주면 정해진 일정으로 돈다(예: `/loop 5m check the deploy`). | VERIFIED | scheduled-tasks | "Your prompt runs on a fixed schedule" | `/loop 5m ...` |
| D92 | 간격을 빼면 Claude가 매번 스스로 간격을 고른다(1분~1시간 사이). | VERIFIED | scheduled-tasks | "After each iteration it picks a delay between one minute and one hour based on what it observed" | `/loop ...` |
| D93 | 간격 단위는 s(초)·m(분)·h(시간)·d(일)이다. | VERIFIED | scheduled-tasks | "Supported units are `s` for seconds, `m` for minutes, `h` for hours, and `d` for days." | `/loop 30m` |
| D94 | 아무것도 안 주고 `/loop`만 치면 내장 유지보수 프롬프트가 돈다. | VERIFIED | scheduled-tasks | "A bare `/loop` runs this prompt at a dynamically chosen interval." | `/loop` |
| D95 | 간격 없이 도는(자체 속도) 반복은 대기 중에 Esc로 멈춘다. | VERIFIED | scheduled-tasks | "while the loop is waiting for its next iteration, press `Esc` to stop it." | Esc |
| D96 | 정해진 간격(`/loop 5m`)은 Esc·Ctrl+C로 안 멈추고, Claude에게 "취소해 줘"라고 말해야 한다. | VERIFIED | scheduled-tasks | "`Esc` and `Ctrl+C` don't stop it, or any task you scheduled by asking Claude directly." | — |
| D97 | 반복 작업은 만든 지 7일이 지나면 마지막 한 번 실행하고 스스로 사라진다. | VERIFIED | scheduled-tasks | "Recurring tasks automatically expire 7 days after creation." | — |
| D98 | 터미널을 닫거나 세션이 끝나면 예약이 실행되지 않는다. Claude Code가 켜져 있고 쉬는 중일 때만 돈다. | VERIFIED | scheduled-tasks | "Tasks only fire while Claude Code is running and idle." | — |
| D99 | 한 번만 알려 주는 알림은 `/loop`가 아니라 자연어로 말한다("3pm에 알려 줘"). | VERIFIED | scheduled-tasks | "For one-shot reminders, describe what you want in natural language instead of using `/loop`." | — |

## 11. 목표까지 계속: /goal

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D100 | `/goal`은 완료 조건을 정해 두면 매 단계 지시하지 않아도 Claude가 계속 일하게 한다. | VERIFIED | goal | "The `/goal` command sets a completion condition and Claude keeps working toward it without you prompting each step." | `/goal 조건` |
| D101 | 평가 모델은 직접 명령을 돌리거나 파일을 열지 않고, 대화에 나온 내용만 보고 판단한다. | VERIFIED | goal | "It doesn't run commands or read files independently, so write the condition as something Claude's own output can demonstrate." | — |
| D102 | 무한정 돌지 않게 "20턴 후 멈춰" 같은 횟수·시간 조건을 조건에 넣는다. | VERIFIED | goal | "To bound how long a goal runs, include a turn or time clause in the condition, such as `or stop after 20 turns`." | — |
| D103 | 인수 없이 `/goal`을 치면 현재 상태를 본다. | VERIFIED | goal | "Run `/goal` with no arguments to see the current state." | `/goal` |
| D104 | `/goal clear`로 목표를 해제한다. `stop`·`off`·`reset`·`none`·`cancel`도 같은 뜻이다. | VERIFIED | goal | "`stop`, `off`, `reset`, `none`, and `cancel` are accepted as aliases for `clear`." | `/goal clear` |
| D105 | 목표는 권한 모드를 바꾸지 않는다. 사람 없이 돌리려면 자동(auto) 모드에서 건다. | VERIFIED | goal | "A goal doesn't change your permission mode." | `/goal` |
| D106 | 인증 실패·크레딧 소진·문맥 초과·모델 불가 같은 직접 고쳐야 할 오류가 나면 목표가 지워진다. | VERIFIED | goal | "If a turn fails on an error that won't clear until you fix it, Claude Code clears the goal and prints a warning naming the cause." | `Goal cleared after an unrecoverable error` |

## 12. 원격 제어(Remote Control)

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D107 | 컴퓨터에서 돌고 있는 Claude Code 세션을 휴대폰 앱이나 다른 브라우저에서 이어서 조작한다. | VERIFIED | remote-control | "Remote Control connects claude.ai/code or the Claude app for iOS and Android to a Claude Code session running on your machine." | `/remote-control` |
| D108 | Pro·Max·Ultra·Team·Enterprise 구독에서 쓸 수 있고 API 키는 지원되지 않는다. | VERIFIED | remote-control | "available on Pro, Max, Ultra, Team, and Enterprise plans. API keys are not supported." | — |
| D109 | 실행은 내 컴퓨터에서 계속되고 웹·모바일은 그 세션을 보는 창일 뿐이다. | VERIFIED | remote-control | "The web and mobile interfaces are a window into that local session, so your computer has to stay on and the `claude` process has to keep running." | — |
| D110 | 이미 열린 세션은 `/remote-control`(줄여서 `/rc`)로 원격에서 이어 갈 수 있다. | VERIFIED | remote-control | "If you're already in a Claude Code session and want to continue it remotely, use the `/remote-control` (or `/rc`) command:" | `/remote-control` `/rc` |
| D111 | 처음부터 켜려면 `claude --remote-control`(또는 `--rc`)로 시작한다. | VERIFIED | remote-control | "To start a normal interactive Claude Code session with Remote Control enabled, use the `--remote-control` flag (or `--rc`):" | `claude --remote-control` |
| D112 | 서버 방식은 `claude remote-control`이며 원격 연결을 기다리며 터미널에 계속 떠 있다. | VERIFIED | remote-control | "The process stays running in your terminal in server mode, waiting for remote connections." | `claude remote-control` |
| D113 | 내 컴퓨터는 바깥으로 나가는 HTTPS 요청만 하고 들어오는 문(포트)은 열지 않는다. | VERIFIED | remote-control | "Your local Claude Code session makes outbound HTTPS requests only and never opens inbound ports on your machine." | — |
| D114 | 터미널을 닫거나 `claude` 프로세스를 끄면 세션이 오프라인이 된다. | VERIFIED | remote-control | "If you close the terminal, quit the Desktop app or VS Code that runs the session on your machine, or otherwise stop the `claude` process, the session goes offline" | — |
| D115 | 서버 방식은 네트워크가 10분쯤 끊기면 포기하고 종료된다. 대화형은 복구될 때까지 재시도한다. | VERIFIED | remote-control | "Claude Code gives up after roughly 10 minutes and the `claude remote-control` process exits." | — |

## 13. 샌드박스

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D116 | 샌드박스는 Claude가 돌리는 셸 명령이 닿을 수 있는 파일과 네트워크를 운영체제 수준에서 제한하는 울타리다. | VERIFIED | sandboxing | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." | `/sandbox` |
| D117 | 샌드박스는 기본으로 꺼져 있다. | VERIFIED | sandboxing | "The sandbox is off by default." | `/sandbox` |
| D118 | 켜는 방법은 세션에서 `/sandbox`를 실행하는 것이다. | VERIFIED | sandboxing | "To turn it on, run `/sandbox` in a session" | `/sandbox` |
| D119 | 샌드박스는 셸 명령만 감싼다. 파일 도구·MCP 서버·훅은 그 밖에서 돈다. | VERIFIED | sandboxing | "The sandbox covers shell commands only." | — |
| D120 | 읽기는 기본적으로 `~/.ssh` 같은 자격 증명 파일까지 포함해 컴퓨터 대부분을 읽을 수 있다. | VERIFIED | sandboxing | "Most of the machine, including credential files such as `~/.ssh` and `~/.aws/credentials`" | — |
| D121 | 자동 허용 모드는 샌드박스 안에서 도는 명령을 묻지 않고 승인한다. | VERIFIED | sandboxing | "Claude Code approves a command automatically, with no prompt, when the command runs inside the sandbox." | `/sandbox` |
| D122 | 일반 권한 모드는 샌드박스 안 명령도 모두 일반 허락 절차를 거친다. | VERIFIED | sandboxing | "All Bash commands go through the regular permission flow, even when sandboxed." | `/sandbox` |
| D123 | 샌드박스에서 실패한 명령을 Claude가 `dangerouslyDisableSandbox`로 샌드박스 밖 재시도할 수 있다. | VERIFIED | sandboxing | "Claude analyzes the failure and may retry the command with the `dangerouslyDisableSandbox` parameter." | `Bash command (unsandboxed)` |
| D124 | 샌드박스 안에서는 `pbcopy`·`xclip`·`wl-copy` 같은 클립보드 도구가 실패할 수 있고, `/copy`로 우회한다. | VERIFIED | troubleshooting | "clipboard utilities such as `pbcopy`, `xclip`, and `wl-copy` can fail to reach the system clipboard from inside a sandboxed Bash command" | `/copy` |

## 14. 보안과 프롬프트 인젝션

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D125 | 수동(Manual) 모드는 읽기 전용으로 시작해 편집·실행 때마다 먼저 묻는다. | VERIFIED | security | "Claude Code starts with read-only permissions. When it needs to edit files, run tests, or execute commands, it asks you first, and you choose whether to approve the action once or allow it from then on." | — |
| D126 | 자동(Auto) 모드는 별도 분류 모델이 위험한 동작을 막는다. 사람이 대신 보지 않는다. | VERIFIED | security | "A separate classifier model reviews actions instead of you and blocks the ones it judges unsafe." | — |
| D127 | 문서는 대화형 터미널 세션의 기본 시작 모드를 자동(Auto) 모드라고 적는다. | VERIFIED | security | "Auto mode is the built-in starting permission mode for interactive terminal and VS Code sessions." | — |
| D128 | 프롬프트 인젝션은 공격자가 악성 글을 끼워 AI의 지시를 뒤집으려는 기법이다. | VERIFIED | security | "Prompt injection is a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text." | — |
| D129 | `curl`·`wget` 같은 웹 내용 가져오기 명령은 기본적으로 자동 승인되지 않는다. | VERIFIED | security | "Commands that fetch content from the web such as `curl` and `wget` are not auto-approved by default." | `curl` `wget` |
| D130 | 믿을 수 없는 내용을 곧바로 Claude에게 파이프로 넘기지 않는다. | VERIFIED | security | "Avoid piping untrusted content directly to Claude" | — |
| D131 | 작업 폴더 경계는 "허락 질문"일 뿐이라 승인한 Bash 명령은 계정 권한으로 다른 곳에도 쓸 수 있다. | VERIFIED | security | "The boundary is a permission prompt, so a Bash command you approve can still write anywhere your user account can" | — |
| D132 | 연결하는 MCP 서버는 Anthropic이 보안 점검을 해 주지 않으니 믿을 곳만 쓴다. | VERIFIED | security | "Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." | `MCP` |

## 15. 학습·보관 데이터

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D133 | Free·Pro·Max·Ultra 개인 계정은 모델 개선에 데이터를 쓸지 선택할 수 있다. | VERIFIED | data-usage | "We give you the choice to allow your data to be used to improve future Claude models." | claude.ai 개인정보 설정 |
| D134 | 그 설정이 켜져 있으면 Claude Code를 쓴 데이터도 새 모델 학습에 쓰인다. | VERIFIED | data-usage | "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." | — |
| D135 | 개인 계정에서 허용하면 5년, 허용하지 않으면 30일 보관된다. | VERIFIED | data-usage | "Users who don't allow data use for model improvement: 30-day retention period" | — |
| D136 | 허용한 경우의 보관 기간은 5년이다. | VERIFIED | data-usage | "Users who allow data use for model improvement: 5-year retention period to support model development and safety improvements" | — |
| D137 | "이 세션 어땠나요" 별점은 평점만 기록하고 대화 내용은 모으지 않는다. | VERIFIED | data-usage | "We do not collect or store any conversation transcripts, inputs, outputs, or other session data as part of the rating prompt itself." | — |
| D138 | 후속으로 "대화 기록을 봐도 되나요" 질문에 Yes를 고르지 않으면 아무것도 올라가지 않는다. | VERIFIED | data-usage | "Nothing is uploaded unless you explicitly select Yes." | — |
| D139 | 내 컴퓨터에는 대화 기록이 암호화 없이(평문) `~/.claude/projects/`에 30일 저장된다. | VERIFIED | data-usage | "Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." | `cleanupPeriodDays` |
| D140 | 보안 문서에는 개인정보 설정 주소가 `claude.ai/settings/privacy`로, 데이터 문서에는 `claude.ai/settings/data-privacy-controls`로 적혀 있다. | 충돌 | security | "Consumer users can change their privacy settings at any time." | — |

## 16. 문제 해결: 점검 명령

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D141 | 어디가 문제인지 모를 때는 세션 안에서 `/doctor`로 설치·설정·확장·문맥 사용량을 자동 점검한다. | VERIFIED | troubleshooting | "If you're not sure which applies, run `/doctor` inside Claude Code for an automated check of your installation, settings, extensions, and context usage; it proposes fixes it can apply after you confirm." | `/doctor` |
| D142 | `claude`가 아예 안 켜지면 셸에서 `claude doctor`를 실행한다. | VERIFIED | troubleshooting | "If `claude` won't start at all, run `claude doctor` from your shell instead." | `claude doctor` |
| D143 | `/context`는 지금 문맥 창을 무엇이 차지하는지 범주별로 보여 준다. | VERIFIED | debug-your-config | "The `/context` command shows everything occupying the context window for the current session." | `/context` |
| D144 | `/hooks`는 등록된 훅 목록을 이벤트별로 보여 준다. | VERIFIED | debug-your-config | "Run `/hooks` to list every hook registered for the current session, grouped by event." | `/hooks` |
| D145 | `claude --safe-mode`는 CLAUDE.md·스킬·플러그인·훅·MCP 등 사용자 설정을 끈 채 시작한다. | VERIFIED | debug-your-config | "Start with `claude --safe-mode`, which launches a session with your customizations disabled, including:" | `claude --safe-mode` |
| D146 | 설치 직후 `claude --version`이 버전 번호를 출력하면 정상 설치다. | VERIFIED | overview | "A working installation prints a version number." | `claude --version` |
| D147 | `claude`를 찾을 수 없다고 나오면 설치 폴더가 PATH에 아직 없는 것이다. | VERIFIED | overview | "If your shell says `claude` isn't found or isn't recognized, the install directory isn't on your PATH yet" | `claude --version` |
| D148 | 처음 `claude`를 실행하면 로그인하라는 안내가 나온다. | VERIFIED | overview | "Claude Code prompts you to log in on first use." | `claude` |

## 17. 문제 해결: 자주 나는 오류와 대처

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| D149 | 로그인 정보가 없으면 `Not logged in · Please run /login`이 뜬다. | VERIFIED | errors | "Not logged in · Please run /login" | `/login` |
| D150 | 대처: `/login`으로 구독 또는 콘솔 계정에 로그인한다. | VERIFIED | errors | "Run `/login` to authenticate with your Claude subscription or Console account" | `/login` |
| D151 | 대화가 너무 길어지면 `Context limit reached · /compact or /clear to continue`가 뜬다. | VERIFIED | errors | "Context limit reached · /compact or /clear to continue" | `/compact` `/clear` |
| D152 | 자동 압축이 계속 되풀이해서 채워지면 중단하는 `Autocompact is thrashing` 오류가 난다. | VERIFIED | troubleshooting | "automatic compaction succeeded but a file or tool output immediately refilled the context window several times in a row." | `Autocompact is thrashing` |
| D153 | 그럴 때는 큰 파일을 조금씩 읽게 하거나, `/compact`로 큰 출력을 버리거나, 하위 에이전트에 맡기거나 `/clear`한다. | VERIFIED | troubleshooting | "Ask Claude to read the oversized file in smaller chunks, such as a specific line range or function, instead of the whole file" | `/compact` `/clear` |
| D154 | 서버 오류(5xx)는 내 요청·설정·계정 때문이 아니라 서버 쪽 문제다. | VERIFIED | errors | "It is not caused by your prompt, settings, or account." | `API Error: 500` |
| D155 | 529 과부하 오류는 사용 한도가 아니고 한도에서 차감되지도 않는다. | VERIFIED | errors | "A 529 is not your usage limit and doesn't count against your quota." | `Repeated 529 Overloaded errors` |
| D156 | 재시작해도 대화는 안 사라진다. 같은 폴더에서 `claude --resume`으로 다시 잇는다. | VERIFIED | troubleshooting | "Restarting doesn't lose your conversation. Run `claude --resume` in the same directory to pick the session back up." | `claude --resume` |
| D157 | `/heapdump` 파일(.heapsnapshot)에는 대화 전체와 자격 증명이 들어 있어 공개 이슈에 올리면 안 된다. | VERIFIED | troubleshooting | "The `.heapsnapshot` file contains every string in the process, including your full conversation and credentials." | `/heapdump` |

## 가이드에 쓸 때 주의

- **`-p`와 구독 사용량**: 조사한 문서 어디에도 "구독 계정으로 `claude -p`를 돌리면 한도가 어떻게 깎이는지"가 직접 쓰여 있지 않다(D 5절 첫 행 UNVERIFIED). 비용 문서의 "토큰 사용량으로 과금"과 "구독자는 사용량이 구독에 포함"이 한 문서 안에서 어긋나 보이므로(충돌 표시), 가이드에서는 "구독 한도를 같이 쓴다고 단정하지 말고 `/usage`로 직접 확인"하라고 쓴다.
- **`--bare`는 구독 로그인을 읽지 않는다**: 같은 문서가 `--bare`를 "스크립트용 권장 모드"라 하면서도 OAuth 로그인을 읽지 않고 API 키가 필요하다고 한다. 구독 계정 독자에게 `--bare`를 일반 권장처럼 쓰면 로그인 실패가 난다.
- **권한 기본값 서술이 화면마다 다르다**: 보안 문서는 대화형 터미널의 시작 모드를 자동(Auto) 모드라 하고, 헤드리스 문서는 v2.1.302 이후 `-p`가 Manual 모드로 시작해 승인이 필요한 호출은 거부된다고 한다. "대화형=자동 모드, `-p`=수동 모드"로 나눠 쓰고, `acceptEdits`의 자동 승인 명령 목록도 보안 문서(rm·sed 포함)와 헤드리스 문서(mkdir·touch·mv·cp)가 예시 범위가 다르니 전체 목록을 단정하지 않는다.
- **`/loop` 정지법이 두 가지다**: 자체 속도 반복은 Esc, 정해진 간격은 말로 취소해야 하고, 둘 다 7일 뒤 자동 만료되며 터미널을 닫으면 멈춘다. 꺼져 있는 컴퓨터에서도 돌려야 하면 클라우드 예약을 안내한다.
- **버전 의존이 많다**: `--permission-prompts`(v2.1.259+), `ultrathink` 무지개색(v2.1.311+), `-p` 기본 Manual(v2.1.302+), 모델 별칭 최신화(v2.1.280+)처럼 새 버전에서만 되는 기능이 많다. 막히면 `claude update` 먼저.
- **개인정보 설정 주소 두 개**: 보안 문서(`claude.ai/settings/privacy`)와 데이터 문서(`claude.ai/settings/data-privacy-controls`)가 다른 주소를 안내한다. 가이드에서는 한쪽만 쓰고 확인 날짜를 남긴다. 5년/30일 보관 규칙은 "모델 개선 허용 여부"에 달려 있다는 점을 같이 쓴다.
- **`/fast`는 구독 한도 밖**: 구독 요금제의 빠른 모드는 사용 크레딧(추가 요금)으로만 과금되고 구독 한도에 포함되지 않는다. 초보자가 "그냥 빨라지는 옵션"으로 오해하기 쉽다.
- **Fable도 크레딧**: Fable 사용은 요금제에 따라 크레딧 청구일 수 있고, `-p`에서는 동의 질문 없이 바로 청구된다.
- **원격 제어는 컴퓨터가 켜져 있어야 한다**: 휴대폰에서 쓰는 "클라우드"가 아니다. 컴퓨터가 꺼지거나 터미널을 닫으면 끊긴다.
- **샌드박스는 기본 꺼짐이고 셸 명령만 감싼다**: "샌드박스가 있어서 안전"이라고 쓰지 말고, 파일 도구·MCP·훅은 밖이라는 점과 읽기는 기본으로 넓다는 점을 같이 쓴다.

# 부록 E — 터미널 입문 안내·자동 모드 조건

## 18. 터미널 입문 안내(terminal-guide)와 자동 모드 조건

| # | 사실(한국어 한 줄) | 상태 | 근거 | 영어 원문 인용 | 화면 이름 |
|---|---|---|---|---|---|
| E1 | 터미널을 한 번도 안 써 봤어도 Claude Code를 쓸 수 있다 | VERIFIED | terminal-guide | "You can use Claude Code even if you've never used a terminal before." | — |
| E2 | 맥은 Cmd+Space로 Spotlight를 열어 Terminal을 치고 Enter를 누른다 | VERIFIED | terminal-guide | "Press `Cmd + Space` to open Spotlight Search, type `Terminal`, and press `Enter`." | — |
| E3 | 리눅스는 대부분 Ctrl+Alt+T를 누르거나 프로그램 메뉴에서 터미널을 찾는다 | VERIFIED | terminal-guide | "On most distributions, press `Ctrl + Alt + T` or search for "Terminal" in your application menu." | — |
| E4 | 윈도우는 Win+X를 눌러 Windows PowerShell 또는 Terminal을 고른다 | VERIFIED | terminal-guide | "Press `Win + X` and select Windows PowerShell (or Terminal) from the menu." | — |
| E5 | 깜빡이는 커서가 있는 창이 터미널이고 여기에 명령을 친다 | VERIFIED | terminal-guide | "A window will appear with a blinking cursor. This is your terminal, where you type commands." | — |
| E6 | 붙여넣기는 맥 Cmd+V, 리눅스 Ctrl+Shift+V다 | VERIFIED | terminal-guide | "Copy this line, paste it into your terminal (`Cmd + V` on macOS, `Ctrl + Shift + V` on Linux), and press `Enter`:" | — |
| E7 | PowerShell에는 Ctrl+V나 오른쪽 클릭으로 붙여 넣는다 | VERIFIED | terminal-guide | "Copy this line, paste it into PowerShell with `Ctrl + V` or right-click, and press `Enter`:" | — |
| E8 | 설치가 끝나면 성공 문구가 보인다 | VERIFIED | terminal-guide | "When the installer finishes, you'll see "Claude Code successfully installed!"" | Claude Code successfully installed! |
| E9 | 터미널에서는 클릭할 수 없고 화살표 키로 움직인다 | VERIFIED | terminal-guide | "You can't click on things in the terminal. Use the arrow keys to move around." | — |
| E10 | Claude가 일하는 중에는 Esc로 멈춘다 | VERIFIED | terminal-guide | "Press `Esc` to interrupt Claude if it's running." | Esc |
| E11 | 나가려면 exit를 치거나 빈 입력창에서 Ctrl+D를 두 번 누른다 | VERIFIED | terminal-guide | "Type `exit` or press `Ctrl + D` twice on an empty prompt to leave Claude Code." | `exit` |
| E12 | 코드를 몰라도 원하는 것을 말로 설명하면 된다 | VERIFIED | terminal-guide | "You don't need to know how to code." | — |
| E13 | Claude는 이미 있는 파일을 읽고 정리할 수 있다 | VERIFIED | terminal-guide | "Claude can read and organize files you already have:" | — |
| E14 | 윈도우의 Git for Windows는 선택 사항이고 없으면 PowerShell을 쓴다 | VERIFIED | terminal-guide | "Without it, Claude Code uses PowerShell instead." | — |
| E15 | v2.1.283 이상의 대화형 터미널은 모든 요금제에서 자동 모드로 시작한다 | VERIFIED | permission-modes | "for interactive terminal and VS Code sessions on every plan and provider" | auto |
| E16 | 자동 모드를 쓸 수 없는 세션은 수동(Manual)으로 시작한다 | VERIFIED | permission-modes | "When the flag, a settings file, or the built-in default selects `auto` but auto mode isn't available to the session, Claude Code starts the session in Manual instead." | Manual |
| E17 | Read 거부 규칙은 파일 이름을 지정하지 않고 읽는 명령에는 적용되지 않는다 | VERIFIED | permissions | "They don't apply to a command that reads files without naming them" | `deny` |
| E18 | `$ARGUMENTS` 는 스킬을 부를 때 넘긴 인자 전부로 바뀐다 | VERIFIED | skills | "All arguments passed when invoking the skill." | `$ARGUMENTS` |
| E19 | Windows의 ~/.claude 는 %USERPROFILE%\.claude 다 | VERIFIED | settings | "On Windows, `~/.claude` means `%USERPROFILE%\.claude`." | — |
| E20 | /clear 뒤 이전 대화는 /resume 으로 돌아간다 | VERIFIED | commands | "Resume the previous conversation with `/resume`" | — |
| E21 | Bash(ls *) 는 ls 명령과 맞는다 | VERIFIED | permissions | "`Bash(ls *)` matches `ls`" | — |
| E22 | Bash(*) 는 Bash 와 같고 모든 셸 명령과 맞는다 | VERIFIED | permissions | "`Bash(*)` is equivalent to `Bash` and matches all Bash commands." | — |
| E23 | Summarize up to here 는 그 이전 대화를 요약하고 뒤 메시지를 남긴다 | VERIFIED | checkpointing | "Summarize up to here: compress the conversation before this point into a summary, keeping later messages intact" | — |
| E24 | 보호 경로 쓰기는 자동 승인되지 않는다 | VERIFIED | permission-modes | "Writes to a small set of paths are never auto-approved" | — |
| E25 | 자동 모드에서 보호 경로 쓰기는 분류 모델로 간다 | VERIFIED | permission-modes | "Routed to the classifier" | — |
| E26 | Windows의 Git은 git-scm.com 에서 받는다 | VERIFIED | terminal-guide | "Go to git-scm.com/downloads/win and download the installer" | — |
| E27 | .claude/worktrees/ 를 .gitignore 에 넣는다 | VERIFIED | worktrees | "Add `.claude/worktrees/` to your `.gitignore` so worktree contents don't appear as untracked files in your main checkout" | — |
| E28 | 이름 붙인 세션의 worktree는 먼저 묻는다 | VERIFIED | worktrees | "A named session prompts you first so you can keep the worktree for later" | — |
| E29 | 구독 요금제의 사용 허용량은 일정 시간 단위로 돈다 | VERIFIED | errors | "Subscription plans include a rolling usage allowance." | — |
| E30 | 샌드박스는 macOS·Linux·WSL2에서 돌고 Windows 직접 실행은 샌드박스가 없다 | VERIFIED | sandboxing | "The sandbox runs on macOS, Linux, and WSL2. On native Windows, Claude Code runs commands unsandboxed." | — |
| E31 | irm은 파일을 받고 iex는 실행한다 | VERIFIED | terminal-guide | "`irm` fetches the file and `iex` runs it." | `irm` |

## 갱신 기록

- 2026-11-06 처음 작성. 리뷰 뒤 R9·R26 정정, R39~R45·E19~E31 추가.
