# 3장. 설치와 로그인

> **한 줄 요약**: 공식 문서의 설치 명령을 붙여 넣고, **새 터미널 창**에서 `claude --version`으로 확인합니다. 그다음 연습 폴더에서 `claude`를 실행해 브라우저에서 로그인하면 준비가 끝납니다.

설치는 한 번만 하면 됩니다. 명령도 한 줄입니다.

## 붙여 넣기 전에 — 출처부터 확인

설치 명령은 인터넷에서 받은 프로그램을 내 컴퓨터에서 바로 실행합니다. 편리하지만, 잘못된 사이트의 명령을 붙이면 나쁜 프로그램이 내 권한으로 실행될 수 있습니다.

그래서 **처음 보는 사이트의 설치 명령은 그대로 붙여 넣지 마세요.** 이 강좌의 명령도 마찬가지입니다. 공식 문서 「[Quickstart](https://code.claude.com/docs/en/quickstart)」를 열어 같은 명령인지 눈으로 맞춰 보세요.

- **아쉬운 예**: 블로그에서 찾은 설치 명령을 바로 터미널에 붙인다.
- **나은 예**: 공식 문서를 열어 같은 명령인지 확인하고 붙인다.

이 습관은 다른 프로그램을 설치할 때도 쓸모가 있습니다. 터미널에 붙이는 명령은 어떤 것이든 출처를 먼저 보세요.

<Quiz id="ch803-safe" />

## 운영체제별 설치 명령

터미널을 열고 내 컴퓨터에 맞는 명령 **하나만** 붙여 넣은 뒤 Enter를 누릅니다.[^install] 공식 문서의 명령입니다. 이 가이드는 이미 설치된 컴퓨터에서 실행해서 설치 과정은 직접 해 보지 않았습니다.

맥·리눅스·WSL(Windows 안에서 리눅스를 쓰는 기능)은 이렇게 칩니다.

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell은 이렇게 칩니다.

```powershell
irm https://claude.ai/install.ps1 | iex
```

내려받는 동안에는 진행 표시가 없습니다. 아무 일도 없어 보여도 창을 닫지 말고 기다리세요. 끝나면 `Claude Code successfully installed!`라는 문구가 보입니다.[^progress]

명령을 엉뚱한 창에 넣으면 오류가 납니다. 고장이 아니라 창을 잘못 고른 것입니다.[^wrong-shell]

- `'irm' is not recognized`가 나온다: PowerShell이 아니라 CMD에 있습니다. PowerShell을 열어 다시 하세요.
- `-fsSL` 때문에 오류가 난다: 맥·리눅스용 명령을 PowerShell에 넣은 것입니다. PowerShell용 명령을 쓰세요.

오류는 화면 언어에 따라 한글로 나올 수 있습니다. 뜻은 같습니다.

Windows라면 두 가지를 더 알아 두세요.

- 관리자 권한으로 실행하지 않아도 됩니다.[^no-admin]
- Git이 없어도 그대로 따라올 수 있습니다. 없으면 Claude Code가 PowerShell을 대신 씁니다.[^git-win] Git은 12장에서 설치합니다.

맥의 Homebrew나 Windows의 WinGet 같은 프로그램 관리 도구로도 설치할 수 있습니다.[^brew] 쓰던 도구가 없다면 위의 한 줄이면 충분합니다.

<Quiz id="ch803-install" />

## 설치 확인

설치가 끝나면 **새 터미널 창을 열고** 이 명령을 칩니다.[^check]

```bash
claude --version
```

이렇게 번호가 나오면 성공입니다. 번호는 달라도 됩니다. 뒤에 `(Claude Code)`가 붙어 있는지 보세요.

```text
2.1.318 (Claude Code)
```

왜 새 창일까요? 이미 열려 있던 창은 예전 설정을 그대로 씁니다.[^old-path] 그래서 설치를 마친 창에서는 안 되고 새 창에서는 되는 일이 생깁니다.

<Quiz id="ch803-check" />

## command not found가 나올 때

새 창에서도 이런 말이 나올 수 있습니다. Windows에서는 `not recognized`라는 말이 나옵니다. 화면 언어에 따라 한글로 나올 수 있습니다. 뜻은 같습니다.

```text
zsh: command not found: claude
bash: claude: command not found
```

설치는 됐는데 터미널이 프로그램을 못 찾는다는 뜻입니다.[^path-cause]

터미널은 **PATH**(패스)라는 폴더 목록에서 프로그램을 찾습니다. 전화번호부라고 생각하면 쉽습니다. 프로그램이 있어도 목록에 안 적혀 있으면 못 찾습니다. 설치 프로그램은 고치는 법을 알려 줄 뿐, PATH를 직접 바꾸지는 않습니다.[^path-what]

프로그램은 맥·리눅스에서 `~/.local/bin/claude`, Windows에서 `%USERPROFILE%\.local\bin\claude.exe`에 있습니다.[^path-where] 이 폴더를 목록에 더해 주면 됩니다. 아래는 공식 문서의 명령입니다. **내 컴퓨터에 맞는 것 하나만** 쓰세요.

맥의 기본 셸(터미널 안에서 명령을 받는 프로그램)인 Zsh는 이렇게 씁니다.

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

대부분의 리눅스(Bash)는 이렇게 씁니다.

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Windows PowerShell은 이렇게 씁니다.

```powershell
$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')
[Environment]::SetEnvironmentVariable('PATH', "$currentPath;$env:USERPROFILE\.local\bin", 'User')
```

맥·리눅스의 `echo` 줄은 설정을 저장하고, `source` 줄은 지금 창에 적용합니다. Windows는 터미널을 다시 시작해야 합니다.[^path-apply] 그런 다음 `claude --version`을 다시 쳐 보세요.

그래도 안 되면 공식 문서 「[Troubleshoot installation and login](https://code.claude.com/docs/en/troubleshoot-install)」을 보세요. `claude`가 실행은 된다면 `claude doctor`로 설치 상태를 읽어 볼 수 있습니다. 세션을 열지 않고 진단만 보여 줍니다.[^doctor]

<Quiz id="ch803-path" />

## 로그인

새 창에서 2장의 연습 폴더로 옮겨 간 뒤 `claude`를 칩니다. 맥·리눅스는 이렇게 칩니다.

```bash
cd ~/hello-ai-연습/터미널
claude
```

Windows PowerShell은 이렇게 칩니다.

```powershell
cd $HOME\hello-ai-연습\터미널
claude
```

처음 실행하면 로그인하라는 안내가 나옵니다. 개인 구독자는 claude.ai 계정으로 로그인합니다.[^login] 순서는 이렇습니다.[^login-steps] 이 가이드는 이미 로그인된 컴퓨터에서 실행해서, 아래는 공식 문서의 설명입니다.

1. 브라우저가 열리면 로그인합니다.
2. 브라우저가 안 열리면 터미널에서 `c`를 누릅니다. 로그인 주소가 복사되니 브라우저에 붙여 넣습니다.
3. 브라우저가 코드를 보여 주면 터미널의 `Paste code here if prompted` 자리에 붙여 넣습니다.
4. `Login successful`이 뜨면 Enter를 누릅니다.

로그인은 한 번이면 됩니다. 정보가 저장되어 다시 묻지 않습니다. 계정을 바꾸고 싶으면 실행 중에 `/login`을 칩니다.[^login-once]

로그인 전후로 첫 설정 화면이 더 나올 수 있습니다. 폴더를 믿는지 묻는 창이 나올 수도 있습니다. 이 창은 4장에서 함께 봅니다. 지금은 `Esc`로 나가도 됩니다.

<Quiz id="ch803-login" />

## 업데이트와 지우기

**업데이트.** 위의 한 줄로 설치했다면 따로 할 일이 없습니다. 백그라운드에서 자동으로 받고, 다음에 Claude Code를 켤 때 적용됩니다.[^auto-update] 바로 올리고 싶으면 터미널에서 `claude update`를 칩니다. 이미 최신이면 `Claude Code is up to date`라고 알려 줍니다.[^update]

Homebrew나 WinGet으로 깔았다면 자동으로 올라가지 않습니다. 그 도구로 가끔 직접 올려야 합니다.[^manual-update]

**지우기.** 맥·리눅스에서 위의 한 줄로 설치했다면 이 두 줄로 지웁니다.[^uninstall]

```bash
rm -f ~/.local/bin/claude
rm -rf ~/.local/share/claude
```

`rm`은 휴지통을 거치지 않고 바로 지우는 명령입니다. 글자를 꼭 확인하고 치세요. Windows와 다른 설치 방법은 공식 문서 「[Advanced setup](https://code.claude.com/docs/en/setup)」의 Uninstall 절을 따르세요.

<Quiz id="ch803-update" />

## 직접 해 보기

1. 공식 문서를 열어 설치 명령이 이 장과 같은지 확인합니다.
2. 내 운영체제의 명령을 붙여 넣고 끝날 때까지 기다립니다.
3. 새 창을 열어 `claude --version`을 칩니다. `command not found`가 나오면 위의 절을 따라갑니다.
4. 연습 폴더에서 `claude`를 실행해 로그인합니다. 신뢰 창이 뜨면 `Esc`로 나옵니다. 입력창까지 들어갔다면 `/exit`를 칩니다.

스스로 물어보세요. `claude --version`이 번호를 보여 주나? 그렇다면 다음 장에서 첫 일을 시켜 볼 수 있습니다.

## 정리

- 설치 명령은 공식 문서와 같은지 확인하고 붙인다.
- 맥·리눅스는 `curl` 줄, Windows는 PowerShell의 `irm` 줄을 쓴다. 진행 표시가 없어도 기다린다.
- 확인은 새 창에서 `claude --version`으로 한다.
- `command not found`가 나오면 새 창부터 열어 보고, 그래도 안 되면 PATH 줄을 더한다.
- 로그인은 연습 폴더에서 `claude`를 실행해 브라우저에서 한 번만 한다.
- 기본 설치는 자동으로 업데이트된다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| PATH | 패스 | 터미널이 프로그램을 찾는 폴더 목록 |
| WSL | 더블유에스엘 | Windows 안에서 리눅스를 쓰는 기능 |
| `curl` | 컬 | 인터넷에서 내용을 받아 오는 명령 |
| `irm` | 아이알엠 | PowerShell에서 인터넷 내용을 받아 오는 명령 |
| `rm` | 알엠 | 파일을 지우는 명령 |

<ChapterDone :chapter="803" />

다음 장: [4장. 첫 세션](04-first-session.md)

[^install]: Claude Code 공식 문서, 「Quickstart」. "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^progress]: Claude Code 공식 문서, 「Quickstart」. "The install command shows no progress while it downloads Claude Code." https://code.claude.com/docs/en/quickstart · 「Terminal guide for new users」. "When the installer finishes, you'll see "Claude Code successfully installed!"" https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
[^wrong-shell]: Claude Code 공식 문서, 「Quickstart」. "If you see `'irm' is not recognized as an internal or external command`, you're in CMD, not PowerShell." https://code.claude.com/docs/en/quickstart · 「Troubleshoot installation and login」. "you ran the macOS/Linux `curl -fsSL ... | bash` installer in Windows PowerShell, where `curl` is an alias for `Invoke-WebRequest` and rejects the `-fsSL` flags" https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^no-admin]: Claude Code 공식 문서, 「Advanced setup」. "You do not need to run as Administrator." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^git-win]: Claude Code 공식 문서, 「Quickstart」. "Git for Windows is recommended on native Windows so Claude Code can use the Bash tool." / "If Git for Windows is not installed, Claude Code uses PowerShell as the shell tool instead." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^brew]: Claude Code 공식 문서, 「Quickstart」. "brew install --cask claude-code" / "winget install Anthropic.ClaudeCode" https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^check]: Claude Code 공식 문서, 「Quickstart」. "When the installer finishes, open a new terminal window and run `claude --version`." / "The command prints a version number followed by `(Claude Code)`." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^old-path]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "a window that was already open keeps its old PATH, and a terminal inside an editor takes its PATH from the editor." https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^path-cause]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "If installation succeeded but you get a `command not found` or `not recognized` error when running `claude`, the install directory isn't in your PATH." https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^path-what]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "Your shell searches for programs in directories listed in PATH" / "It prints the fix with that note but doesn't change PATH itself." https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^path-where]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "the installer places `claude` at `~/.local/bin/claude` on macOS/Linux or `%USERPROFILE%\.local\bin\claude.exe` on Windows" https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^path-apply]: Claude Code 공식 문서, 「Troubleshoot installation and login」. "The `echo` command saves the setting for every new terminal, and `source` applies it to the window you're in." / "Restart your terminal for the change to take effect." https://code.claude.com/docs/en/troubleshoot-install (확인일 2026-11-06)
[^doctor]: Claude Code 공식 문서, 「Advanced setup」. "prints read-only installation and settings diagnostics without starting a session" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^login]: Claude Code 공식 문서, 「Quickstart」. "Claude Code prompts you to log in on first use." https://code.claude.com/docs/en/quickstart · 「Authentication」. "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (확인일 2026-11-06)
[^login-steps]: Claude Code 공식 문서, 「Authentication」. "If the browser doesn't open automatically, press `c` to copy the login URL to your clipboard, then paste it into your browser." / "If your browser shows a login code instead of redirecting back after you sign in, paste it into the terminal at the `Paste code here if prompted` prompt." / "When login completes, the terminal shows `Login successful` and prompts you to press `Enter` to continue." https://code.claude.com/docs/en/authentication (확인일 2026-11-06)
[^login-once]: Claude Code 공식 문서, 「Quickstart」. "Once logged in, your credentials are stored and you won't need to log in again." / "To switch accounts later or re-authenticate, type `/login` inside the running session." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^auto-update]: Claude Code 공식 문서, 「Quickstart」. "Native installations automatically update in the background to keep you on the latest version." https://code.claude.com/docs/en/quickstart · 「Advanced setup」. "Updates download and install in the background, then take effect the next time you start Claude Code." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^update]: Claude Code 공식 문서, 「CLI reference」. "Update to latest version" https://code.claude.com/docs/en/cli-reference · 「Advanced setup」. "If you're already on the newest version, it reports `Claude Code is up to date (<version>)`." https://code.claude.com/docs/en/setup (확인일 2026-11-06)
[^manual-update]: Claude Code 공식 문서, 「Quickstart」. "Homebrew installations do not auto-update." / "Run `winget upgrade Anthropic.ClaudeCode` periodically to get the latest features and security fixes." https://code.claude.com/docs/en/quickstart (확인일 2026-11-06)
[^uninstall]: Claude Code 공식 문서, 「Advanced setup」. "rm -f ~/.local/bin/claude" https://code.claude.com/docs/en/setup (확인일 2026-11-06)
