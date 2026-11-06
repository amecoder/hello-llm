# 8장. 프로젝트 기억과 설정

> **한 줄 요약**: 매번 말하기 귀찮은 규칙은 `CLAUDE.md`에 적습니다. 꼭 지켜야 하는 규칙은 `settings.json`의 거부 규칙으로 만듭니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다.

[6장](06-sessions-context.md)에서 봤듯이 새 세션은 지난 대화를 모릅니다. 그래서 "회의록은 표로 써 줘"를 매번 다시 말하게 됩니다. 이 장에서는 그 말을 파일에 적어 둡니다.

## CLAUDE.md에 무엇을 쓰나

**CLAUDE.md** 는 내가 쓰는 지속 지침입니다. 프로젝트 폴더에 두면 그 폴더에서 `claude`를 켤 때 불려 옵니다.[^claudemd] 새로 온 동료에게 주는 업무 메모라고 생각하면 쉽습니다.

쓰는 기준은 간단합니다. Claude가 파일을 읽어도 알 수 없는 것만 적습니다.[^practice] 답을 쓰는 언어, 회의록의 절 구성, 결과를 저장할 폴더가 그렇습니다.

쓰지 않을 것도 있습니다.

- 폴더 구조 설명. Claude가 직접 읽어 봅니다.[^practice]
- 여러 단계로 된 절차. 이런 것은 [9장](09-skills-extensions.md)의 스킬이 맞습니다.[^skill-procedure]
- 비밀번호나 인증 정보

길이는 파일당 200줄 아래를 목표로 하세요.[^claudemd] 대문자나 "반드시!!"를 쌓을 필요도 없습니다. 강조를 쌓으면 오히려 규칙을 과하게 적용하기 쉽습니다.[^practice]

```text
아쉬운 예: 회의록을 꼭!! 깔끔하게 잘 정리할 것!!
나은 예:   회의록은 결정 사항, 할 일, 다음 회의 세 절로만 쓴다.
```

나은 예는 맞았는지 틀렸는지 확인할 수 있습니다. "깔끔하게"는 확인할 방법이 없습니다.

<Quiz id="ch808-what" />

## CLAUDE.md 만들고 확인하기

실습용 규칙입니다(파일로 보기: [8장-CLAUDE.md.txt](/practice/cli/results/8장-CLAUDE.md.txt)). `/exit`로 나와 터미널에서 연습 폴더로 이동합니다. 맥과 리눅스는 아래를 통째로 붙여 넣습니다. `notes` 폴더도 함께 만듭니다.

```bash
mkdir notes
cat > CLAUDE.md <<'EOF'
# 모퉁이 카페 메모 정리 규칙

- 답은 한국어로 쓴다.
- 회의록은 결정 사항, 할 일, 다음 회의 세 절로만 쓴다.
- 할 일은 표로 쓴다. 열은 담당, 할 일, 기한이다.
- 메모에 없는 내용은 지어내지 않는다.
- 정리한 파일은 notes 폴더에 저장한다.
EOF
```

붙여 넣은 뒤 아직 실행되지 않았으면 Enter를 한 번 더 누르세요. 아무것도 안 나오면 성공입니다. `ls`로 `CLAUDE.md`와 `notes`가 생겼는지 보세요.

Windows PowerShell은 `mkdir notes` 뒤에 `notepad CLAUDE.md`로 메모장을 엽니다. `cat`으로 시작하는 줄과 `EOF` 줄은 빼고 그 사이만 넣습니다. 새 파일을 만들지 물으면 `예`를 누르고, `Ctrl + S`로 저장하고 닫습니다. 이 방법은 실행해 보지 않았습니다.

새 세션이 규칙을 아는지 터미널에서 확인합니다. 한 번 묻고 끝나는 `claude -p`를 씁니다. 자세한 내용은 [10장](10-headless-automation.md)에서 다룹니다.

```bash
claude -p "이 폴더의 회의록 규칙이 뭐야? 세 줄로 답해 줘."
```

```text
1. 회의록은 결정 사항, 할 일, 다음 회의 세 절로만 쓰고, 메모에 없는 내용은 지어내지 않습니다.
2. 할 일은 담당, 할 일, 기한 열이 있는 표로 씁니다.
3. 답은 한국어로 쓰고, 정리한 파일은 notes 폴더에 저장합니다.
```

대화에서 말한 적 없는 규칙을 답했습니다. 파일이 불려 왔다는 뜻입니다. 모든 프로젝트에 쓸 내 습관은 `~/.claude/CLAUDE.md`에 둡니다.[^claudemd]

**`/init`은 언제 쓰나.** `/init`은 `CLAUDE.md` 초안을 자동으로 만드는 명령입니다. 다만 코드를 분석해서 빌드 명령, 테스트 방법, 프로젝트 관례를 찾아 적습니다.[^init] 우리 메모 폴더에는 그런 것이 없으니 직접 쓰는 편이 쉽습니다. 이 가이드에서도 실행해 보지 않았습니다. 나중에 코드 프로젝트를 다룰 때 써 보세요.

<Quiz id="ch808-make" />

## /memory와 자동 메모리

세션 안에서 `/memory`를 치면 지침 파일 목록이 나옵니다.[^memory]

```text
  ❯ Auto-memory  true

  ❯ Project instructions   Checked in at ./CLAUDE.md
    User instructions      Saved in ~/.claude/CLAUDE.md
    Open auto-memory folder
```

첫 줄의 **자동 메모리**(Auto memory)는 Claude가 내 교정과 선호를 보고 스스로 적는 메모입니다. `CLAUDE.md`는 내가 쓰고, 자동 메모리는 Claude가 씁니다. 로컬 세션에서는 기본으로 켜져 있습니다.[^memory]

프로젝트마다 `~/.claude/projects/<project>/memory/` 폴더에 저장됩니다. 평범한 마크다운 파일이라 언제든 고치거나 지울 수 있습니다. 끄고 싶으면 `/memory` 안의 토글을 씁니다.[^memory]

"기억해 줘"라고 말하면 자동 메모리에 저장합니다.[^memory] 다만 이 폴더에서 언제나 지켜야 할 규칙이라면 `CLAUDE.md`에 직접 적으세요. 내가 쓴 글이라 무엇이 적혔는지 분명합니다.

<Quiz id="ch808-memory" />

## settings.json 세 위치

**settings.json** 은 Claude Code의 동작을 바꾸는 설정 파일입니다.[^settings] 내용은 JSON 형식으로 씁니다. JSON은 칸 이름과 값을 정해진 모양으로 적은 글자입니다. [7장](07-permissions-undo.md)에서 만든 거부 규칙이 여기 들어 있습니다. 놓는 곳은 세 군데입니다.[^settings]

| 파일 | 적용 범위 |
|---|---|
| `~/.claude/settings.json` | 내 컴퓨터의 모든 프로젝트 |
| `.claude/settings.json` | 이 폴더에서 일하는 모두 |
| `.claude/settings.local.json` | 나만, 이 프로젝트에서만 |

같은 설정이 여러 곳에 있으면 표에서 범위가 좁은 쪽이 이깁니다.[^settings] 회사 컴퓨터라면 관리자 설정이 이 셋보다 먼저입니다.

거부 규칙은 예외입니다. 어느 단계에서든 거부된 도구는 다른 단계가 허용할 수 없습니다.[^permissions]

- 저장하면 실행 중인 세션에도 대부분 재시작 없이 반영됩니다.[^settings]
- 어떤 파일이 불렸는지는 `/status`의 Setting sources 줄에서 봅니다.[^settings]
- 끝 쉼표와 주석은 쓸 수 없습니다.[^json-rule] 손으로 고친 뒤 안 먹히면 쉼표부터 보세요.

```text
틀린 예: { "deny": ["Read(./비밀/**)"], }
맞는 예: { "deny": ["Read(./비밀/**)"] }
```

틀린 예는 `]` 뒤에 쉼표가 남아 있습니다.

<Quiz id="ch808-settings" />

## .claude 폴더 구조

Claude Code는 프로젝트 폴더와 내 홈 폴더의 `~/.claude`에서 지침, 설정, 메모리를 읽습니다.[^folder] 이름이 점으로 시작하는 폴더는 평소에 숨겨져 있습니다. `ls -a`(PowerShell은 `ls -Force`)로 볼 수 있습니다.

```text
~/hello-ai-연습/터미널/        이 프로젝트
├── CLAUDE.md                  공유 지침
├── CLAUDE.local.md            나만 쓰는 지침
└── .claude/
    ├── settings.json          공유 설정
    ├── settings.local.json    나만 쓰는 설정
    ├── skills/                이 프로젝트의 스킬
    └── agents/                이 프로젝트의 서브에이전트

~/.claude/                     내 모든 프로젝트
├── CLAUDE.md, settings.json   개인 지침과 설정
├── skills/, agents/           개인 스킬과 서브에이전트
└── projects/                  대화 기록과 자동 메모리
```

다 외울 필요는 없습니다. 대부분은 `CLAUDE.md`와 `settings.json`만 고치면 됩니다.[^folder]

<Quiz id="ch808-folder" />

## 말로 하는 규칙과 강제되는 규칙

이 장에서 가장 중요한 절입니다. 아래 두 줄은 비슷해 보이지만 힘이 다릅니다.

```text
CLAUDE.md 에 적기:     비밀 폴더는 읽지 않는다.
settings.json 에 적기: "deny": ["Read(./비밀/**)"]
```

`CLAUDE.md`의 말은 Claude가 **무엇을 시도할지**에 영향을 줍니다. 하지만 Claude Code가 **무엇을 허용할지**는 바꾸지 못합니다. 권한 규칙은 모델이 아니라 Claude Code 프로그램이 강제합니다.[^permissions] 회사로 치면 `CLAUDE.md`는 업무 안내문이고 권한 규칙은 출입문의 잠금장치입니다.

그래서 정말 중요한 일은 거부 규칙에 두세요.[^practice] 이렇게 나눠 보세요.

- 틀려도 다시 고치면 되는 일(말투, 형식)은 `CLAUDE.md`.
- 틀리면 곤란한 일(비밀 파일 읽기)은 거부 규칙.
- 매번 꼭 일어나야 하는 일은 [11장](11-hooks-statusline.md)의 훅.[^hook]

<Quiz id="ch808-enforce" />

## 직접 해 보기

1. 터미널에서 위의 `CLAUDE.md`와 `notes` 폴더를 만들고 `claude -p`로 규칙을 물어봅니다.
2. `claude`를 켜고 "@inbox/회의-2026-10-27-주간회의.txt 이 메모를 회의록으로 정리해 줘."라고 부탁합니다. 표를 쓰라고 말하지 않았는데 표가 나오나요? 파일이 `notes`에 저장됐나요?
3. `/memory`와 `/status`를 열어 보고 Esc로 닫습니다.
4. `/exit`로 나와 터미널에서 `ls -a`(PowerShell은 `ls -Force`)로 `.claude` 폴더를 찾습니다.

스스로 물어보세요. 새 세션이 규칙을 지켰나? 내 규칙 중 말로 두면 곤란한 것이 있나?

## 정리

- `CLAUDE.md`에는 Claude가 읽어서 알 수 없는 것만, 확인할 수 있게 쓴다.
- `/init`은 코드 폴더 기준이다. 메모 폴더는 직접 쓰는 편이 쉽다.
- 자동 메모리는 Claude가 쓰고, `/memory`에서 보고 끈다.
- `settings.json`은 세 위치가 있고 범위가 좁은 쪽이 이긴다. 거부는 어느 위치에서든 이긴다.
- 말로 한 규칙은 시도를 바꾸고, 권한 규칙은 허용을 바꾼다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| CLAUDE.md | 클로드 엠디 | 내가 쓰는 지속 지침 파일 |
| Auto memory | 오토 메모리 | Claude가 스스로 적는 메모 |
| settings.json | 세팅스 제이슨 | 동작을 바꾸는 설정 파일 |

<ChapterDone :chapter="808" />

다음 장: [9장. 스킬과 확장](09-skills-extensions.md)

[^claudemd]: Claude Code 공식 문서, 「How Claude remembers your project」. "CLAUDE.md files: instructions you write to give Claude persistent context." / "Claude Code loads `CLAUDE.md` and `CLAUDE.local.md` from your current working directory and every directory above it." / "target under 200 lines per CLAUDE.md file." / "Personal preferences for all projects" https://code.claude.com/docs/en/memory (확인일 2026-11-06)
[^practice]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." / "Claude reads the repo itself. Only write down what isn't in there." / "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." / "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^skill-procedure]: Claude Code 공식 문서, 「Extend Claude with skills」. "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills (확인일 2026-11-06)
[^init]: Claude Code 공식 문서, 「How Claude remembers your project」. "Run `/init` to generate a starting CLAUDE.md automatically." / "Claude analyzes your codebase and creates a file with build commands, test instructions, and project conventions it discovers." https://code.claude.com/docs/en/memory (확인일 2026-11-06)
[^memory]: Claude Code 공식 문서, 「How Claude remembers your project」. "The `/memory` command lists your CLAUDE.md, CLAUDE.local.md, and other memory file locations across user and project scopes." / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Auto memory is on by default in local sessions." / "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." / "Auto memory files are plain markdown you can edit or delete at any time." / "To toggle it, open `/memory` in a session and use the auto memory toggle" / "Claude saves it to auto memory." https://code.claude.com/docs/en/memory (확인일 2026-11-06)
[^settings]: Claude Code 공식 문서, 「Settings files and precedence」. "Settings are the JSON keys that change how Claude Code behaves" / "You, in every project on this machine" / "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" / "You, in this one project only." / "When the same key appears in more than one place, Claude Code uses the value from the highest level that sets it." / "Settings precedence, highest first: managed settings, command line, project local, shared project, user." / "Claude Code watches your settings files and reloads them when they change, so it applies most edits to the running session without a restart" / "Run `/status` inside Claude Code to see which settings sources are active." https://code.claude.com/docs/en/settings (확인일 2026-11-06)
[^permissions]: Claude Code 공식 문서, 「Configure permissions」. "If a tool is denied at any level, no other level can allow it." / "Instructions in your prompt or `CLAUDE.md` shape what Claude tries to do, but they don't change what Claude Code allows." / "Permission rules are enforced by Claude Code, not by the model." https://code.claude.com/docs/en/permissions (확인일 2026-11-06)
[^json-rule]: Claude Code 공식 문서, 「Automate actions with hooks」. "Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^folder]: Claude Code 공식 문서, 「Explore the .claude directory」. "Claude Code reads instructions, settings, skills, subagents, and memory from your project directory and from `~/.claude` in your home directory." / "Most users only edit `CLAUDE.md` and `settings.json`." https://code.claude.com/docs/en/claude-directory (확인일 2026-11-06)
[^hook]: Claude Code 공식 문서, 「Output styles」. "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (확인일 2026-11-06)
