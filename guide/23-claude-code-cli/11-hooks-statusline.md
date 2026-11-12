# 11장. 훅과 화면 맞춤

<Badge type="tip" text="필수" /> 이 단계를 따라가려면 꼭 읽으세요.

> **한 줄 요약**: 훅(Hook)은 정해진 순간마다 **Claude Code가 직접** 돌리는 명령입니다. AI의 판단에 맡기지 않으니, 꼭 일어나야 할 일에 씁니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다.

파일이 바뀔 때마다 기록을 남기는 훅을 만들어 봅니다. 화면 아래 상태 줄과 답변 말투도 내게 맞춥니다.

## 훅이란

훅은 내가 정해 둔 셸 명령입니다. Claude Code가 정해진 시점마다 그 명령을 실행합니다. 그래서 Claude가 "기억하고 해 주기"를 바랄 필요가 없습니다.[^hook-what]

[8장](08-memory-settings.md)의 CLAUDE.md와 나란히 놓고 보면 차이가 보입니다.

- **아쉬운 예**: CLAUDE.md에 "파일을 바꾸면 변경기록.txt에 한 줄 남겨 줘"라고 적는다. 지키는 쪽은 Claude입니다. 빠뜨릴 수 있습니다.
- **나은 예**: 같은 일을 훅으로 만든다. 지키는 쪽은 Claude Code입니다. 파일을 바꾼 뒤마다 명령이 실행됩니다.

매번 반드시 일어나야 하는 일에는 훅을 쓰세요.[^every-time] 그렇다고 규칙을 전부 훅으로 옮길 필요는 없습니다. 말투나 문서 형식 같은 규칙은 CLAUDE.md로 충분합니다. 훅은 "빠지면 곤란한 일"에만 쓰세요.

<Quiz id="ch811-what" />

## 변경기록 훅 만들기

훅은 설정 파일에 `hooks` 칸을 추가해서 만듭니다.[^hook-add] 이 장에서는 프로젝트 설정 파일 `.claude/settings.json`에 넣습니다. [7장](07-permissions-undo.md)의 거부 규칙이 든 그 파일입니다.

손으로 고치면 쉼표 하나로 틀리기 쉽습니다. 그래서 파일 전체를 한 번에 덮어씁니다. 7장의 거부 규칙도 아래 내용 안에 그대로 있으니 사라지지 않습니다.

`/exit`로 나와 터미널의 연습 폴더에서 아래를 통째로 붙여 넣습니다. 붙여 넣은 뒤 아직 실행되지 않았으면 Enter를 한 번 더 누르세요.

낯선 칸 이름이 여럿 나오지만 지금 다 알 필요는 없습니다. 큰 덩어리는 셋입니다.

- `permissions`: 7장에서 만든 거부 규칙
- `hooks`: 이번에 만드는 변경기록 훅
- `statusLine`: 화면 아래 상태 줄

자세한 뜻은 상자 바로 아래에서 하나씩 풉니다.

```bash
cat > .claude/settings.json <<'EOF'
{
  "permissions": {
    "deny": ["Read(./비밀/**)"]
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          { "type": "command", "command": "date '+%F %T 파일이 바뀌었습니다' >> 변경기록.txt" }
        ]
      }
    ]
  },
  "statusLine": { "type": "command", "command": "echo 모퉁이 카페 정리 중" }
}
EOF
```

Windows PowerShell은 `notepad .claude\settings.json`으로 메모장을 엽니다. 원래 내용을 지우고 위 상자에서 `cat`으로 시작하는 줄과 `EOF` 줄을 뺀 사이만 넣습니다. `Ctrl + S`로 저장하고 닫습니다. 이 방법은 실행해 보지 않았습니다.

낯선 말을 하나씩 풀어 볼게요. 마지막의 `statusLine` 칸은 뒤의 「상태 줄」 절에서 봅니다.

- `PostToolUse`: Claude가 도구를 쓴 **뒤**라는 뜻입니다. 이미 끝난 일을 되돌리지는 못합니다. 도구를 쓰기 **전**에 끼어들어 막을 수 있는 시점은 `PreToolUse`입니다.[^post]
- `matcher`: 어떤 도구에 반응할지 정합니다. `Write|Edit`는 파일을 만드는 도구와 고치는 도구입니다. 여기서 `|`는 "또는"이라는 뜻입니다. Claude가 셸 명령으로 바꾼 파일에는 이 훅이 반응하지 않습니다.
- `command`: 실행할 명령입니다. 지금 날짜·시각과 문장을 `변경기록.txt` 끝에 덧붙입니다. 명령을 조각으로 나눠 보면 이렇습니다.
  - `date`: 지금 날짜와 시각을 찍는 명령입니다.
  - `'+%F %T 파일이 바뀌었습니다'`: 찍을 모양입니다. `%F` 자리에 날짜(`2026-11-06`), `%T` 자리에 시각(`11:19:11`)이 들어갑니다.
  - `>> 변경기록.txt`: 결과를 그 파일 끝에 덧붙입니다. 10장의 `>`는 파일을 덮어쓰고, `>>`는 뒤에 이어 씁니다. 파일이 없으면 새로 만듭니다.

덮어쓰는 대신 Claude에게 말로 부탁해도 됩니다.[^ask-claude] 내 프로젝트처럼 설정이 이미 들어 있는 파일이라면 이 방법이 낫습니다. `.claude` 폴더는 특별히 지키는 곳이라 이때 허락 창이 뜰 수 있습니다.[^protected]

```text
.claude/settings.json 에 훅을 추가해 줘. Claude가 Write나 Edit 도구를 쓴 뒤마다 아래 명령이 돌게 해 줘. 이미 있는 내용은 지우지 마.
date '+%F %T 파일이 바뀌었습니다' >> 변경기록.txt
```

이미 `hooks` 칸이 있다면 통째로 바꾸지 말고 그 안에 하나 더 넣습니다.[^sibling] Windows에서는 이 훅을 실행해 보지 않았습니다. `date` 명령은 bash 형식이라 그대로 실행되지 않을 수 있습니다. 그럴 때는 Claude에게 내 환경에 맞는 명령으로 바꿔 달라고 부탁하세요.

이제 시험합니다. `claude`를 켜고 이렇게 보냅니다.

```text
notes 폴더에 훅시험.md 를 만들고 "훅 시험" 한 줄만 적어 줘.
```

끝나면 `! cat 변경기록.txt`를 칩니다. 실제로 돌렸을 때는 이렇게 한 줄이 남았습니다.

```text
2026-11-06 11:19:11 파일이 바뀌었습니다
```

전체 설정 파일은 [11장-settings.json.txt](/practice/cli/results/11장-settings.json.txt)에서 볼 수 있습니다.

<Quiz id="ch811-log" />

## 훅 확인하기

훅이 등록됐는지는 세션에서 `/hooks`를 쳐서 봅니다.[^hooks-menu] 이 화면은 **보기 전용**입니다. 여기서 훅을 만들거나 고칠 수는 없습니다. 화면이 직접 그렇게 말합니다.

```text
  Hooks
  1 hook on 1 event

  This menu is read-only. To add or change a hook, edit settings.json or ask Claude. Learn more

    PostToolUse  after tool execution
  ❯ [Project] date '+%F %T 파일이 바뀌었습니다' >> 변경기록.txt   Write|Edit · command

    All events

  Enter to view · Esc to close
```

훅이 실행되지 않으면 먼저 스스로 물어보세요. `/hooks`에 보이나? `PostToolUse` 아래에 있나?[^hooks-menu] 그래도 없다면 설정 파일의 문법을 봅니다. 설정 파일에는 **끝에 남는 쉼표와 주석을 쓸 수 없습니다.**[^json] 앞의 상자를 다시 덮어쓰면 가장 빠릅니다.

<Quiz id="ch811-check" />

## 남이 준 폴더의 훅

내가 직접 만든 연습 폴더라면 위험이 낮습니다. 조심할 것은 남에게 받은 폴더입니다.

남이 준 폴더에는 남이 적어 둔 훅이 들어 있을 수 있습니다.[^hook-share] `claude -p`로 실행하면 내가 신뢰한다고 답한 적 없는 폴더에서도 그 훅이 실행됩니다.[^p-untrusted] 그러니 그 훅은 내 컴퓨터에서 내 계정으로 실행된다고 보는 편이 안전합니다. 받은 폴더는 Claude를 켜기 **전에** 설정 파일부터 읽어 보세요. 이 권고는 공식 문서의 문장이 아니라 이 가이드의 판단입니다.

```bash
cat .claude/settings.json
```

`hooks`와 `statusLine` 칸에 무슨 명령이 있는지 봅니다. 뜻을 모르겠으면 그 폴더 밖에서 채팅으로 물어보세요. [9장](09-skills-extensions.md)의 플러그인도 내 권한으로 코드를 실행할 수 있습니다.[^plugin-run] 같은 마음으로 대하면 됩니다.

<Quiz id="ch811-trust" />

## 상태 줄

상태 줄(Status line)은 Claude Code 화면 아래쪽에 내가 정한 셸 스크립트의 출력을 보여 주는 줄입니다.[^status-what] 설정 파일에 `statusLine` 칸을 넣으면 됩니다.[^status-set] 앞에서 덮어쓴 설정에 이미 아래 줄이 들어 있습니다. 따로 고칠 것은 없습니다.

```json
"statusLine": { "type": "command", "command": "echo 모퉁이 카페 정리 중" }
```

실제로 돌리니 입력창 아래에 이렇게 보였습니다.

```text
  모퉁이 카페 정리 중
```

폴더 신뢰 창을 수락하기 전에는 상태 줄이 비어 있습니다.[^status-trust] 셸 명령을 돌리는 기능이라서 훅과 같은 신뢰 규칙을 따릅니다. 앞 절의 주의도 그대로 적용됩니다.

`/statusline` 뒤에 원하는 모양을 말로 적어 만드는 방법도 있습니다.[^status-nl] 이 기능은 이 가이드에서 실행해 보지 않았습니다.

<Quiz id="ch811-statusline" />

## 출력 스타일과 테마

처음부터 바꿀 필요는 없습니다. 필요할 때 꺼내 쓰세요. 이 둘은 이 가이드에서 실행해 보지 않았고, 공식 문서가 설명하는 내용입니다.

**출력 스타일**(Output style)은 한 세션의 모든 답변에서 역할·말투·형식을 정합니다. 예를 들어 `Concise`는 결과부터 말하고 서두와 요약을 줄입니다.[^style-what]

```text
/output-style Concise
```

**테마**는 색입니다. 화면 글자가 잘 안 보이면 `/theme`으로 터미널에 맞는 색을 고릅니다.[^theme]

<Quiz id="ch811-style" />

## 직접 해 보기

1. `/exit`로 나와 터미널에서 설정 상자를 붙여 넣습니다.
2. `claude`를 켜고 입력창 아래에 `모퉁이 카페 정리 중`이 보이는지 봅니다.
3. `/hooks`를 쳐서 `PostToolUse` 아래에 보이는지 확인하고 Esc로 닫습니다.
4. 훅시험 요청을 보낸 뒤 `! cat 변경기록.txt`로 한 줄이 늘었는지 봅니다.

스스로 물어보세요. 훅이 정말 실행됐나? Claude의 답이 아니라 `변경기록.txt`를 직접 열어 보고 답하세요.

## 정리

- 훅은 Claude Code가 정해진 시점마다 돌리는 명령이다. 꼭 일어나야 할 일에 쓴다.
- `/hooks`는 보기 전용이다. 만들고 고치는 곳은 설정 파일이다.
- 설정 파일 JSON에는 끝 쉼표와 주석을 쓰지 않는다.
- 남이 준 폴더는 켜기 전에 `.claude/settings.json`부터 읽는다(이 가이드의 판단).
- 상태 줄, 출력 스타일, 테마는 필요할 때만 바꾼다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Hook | 훅 | 정해진 시점마다 자동으로 실행되는 명령 |
| `PostToolUse` | 포스트 툴 유즈 | 도구를 쓴 뒤라는 시점 |
| `PreToolUse` | 프리 툴 유즈 | 도구를 쓰기 전이라는 시점 |
| JSON | 제이슨 | 설정 파일에 쓰는 글자 형식 |
| Status line | 스테이터스 라인 (상태 줄) | 화면 아래에 내 명령의 출력을 보이는 줄 |
| Output style | 아웃풋 스타일 | 답변의 역할·말투·형식 묶음 |

<ChapterDone :chapter="811" />

다음 장: [12장. 동시 작업과 원격](12-parallel-remote.md)

[^hook-what]: Claude Code 공식 문서, 「Automate actions with hooks」. "Hooks are user-defined shell commands." / "Claude Code runs them at specific points in its lifecycle, which gives you deterministic control: certain actions always happen rather than relying on the LLM to choose to run them." https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^every-time]: Claude Code 공식 문서, 「Output styles」. "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (확인일 2026-11-06)
[^hook-add]: Claude Code 공식 문서, 「Automate actions with hooks」. "To create a hook, add a `hooks` block to a settings file." https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^post]: Claude Code 공식 문서, 「Automate actions with hooks」. "`PostToolUse` hooks can't undo actions since the tool has already executed." / "Before a tool call executes. Can block it" https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^ask-claude]: Claude Code 공식 문서, 「Automate actions with hooks」. "You can also ask Claude to write the hook for you by describing what you want in the CLI." https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^protected]: `.claude` 폴더는 보호 경로라서 쓰기가 그냥 승인되지 않습니다. 수동 모드에서는 허락 창이 뜨고, 자동 모드에서는 행동을 미리 살피는 별도의 AI가 판단합니다. Claude Code 공식 문서, 「Choose a permission mode」. "Writes to a small set of paths are never auto-approved" / 표의 `auto` 행: "Routed to the classifier" https://code.claude.com/docs/en/permission-modes (확인일 2026-11-06)
[^sibling]: Claude Code 공식 문서, 「Automate actions with hooks」. "If your settings file already has a `hooks` key, add `Notification` as a sibling of the existing event keys rather than replacing the whole object." https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^hooks-menu]: Claude Code 공식 문서, 「Automate actions with hooks」. "Type `/hooks` at the Claude Code prompt to open the hooks browser." / "Run `/hooks` and confirm the hook appears under the correct event" https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^json]: Claude Code 공식 문서, 「Automate actions with hooks」. "Verify your JSON is valid: trailing commas and comments aren't allowed" https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^hook-share]: Claude Code 공식 문서, 「Automate actions with hooks」. `.claude/settings.json` 행의 공유 여부 칸: "Yes, can be committed to the repo" https://code.claude.com/docs/en/hooks-guide (확인일 2026-11-06)
[^p-untrusted]: Claude Code 공식 문서, 「Run Claude Code programmatically」. "Without `--bare`, a `-p` session runs the hooks in a project's `.claude/settings.json` and connects the servers in its `.mcp.json`, even in a folder you've never trusted." https://code.claude.com/docs/en/headless (확인일 2026-11-06)
[^plugin-run]: Claude Code 공식 문서, 「Plugins overview」. "Whatever the tier, a plugin you install can run code with your user privileges." https://code.claude.com/docs/en/plugins/overview (확인일 2026-11-06)
[^status-what]: Claude Code 공식 문서, 「Customize your status line」. "The status line is a customizable bar at the bottom of Claude Code that runs any shell script you configure." https://code.claude.com/docs/en/statusline (확인일 2026-11-06)
[^status-set]: Claude Code 공식 문서, 「Customize your status line」. "Add a `statusLine` field to your user settings (`~/.claude/settings.json`, where `~` is your home directory) or project settings." https://code.claude.com/docs/en/statusline (확인일 2026-11-06)
[^status-trust]: Claude Code 공식 문서, 「Customize your status line」. "Until you accept the workspace trust dialog, the status line stays blank." / "Because `statusLine` executes a shell command" https://code.claude.com/docs/en/statusline (확인일 2026-11-06)
[^status-nl]: Claude Code 공식 문서, 「Customize your status line」. "The `/statusline` command accepts natural language instructions describing what you want displayed." https://code.claude.com/docs/en/statusline (확인일 2026-11-06)
[^style-what]: Claude Code 공식 문서, 「Output styles」. "An output style is a set of instructions that sets Claude's role, tone, and response format for every response in a session." / "Responses lead with the result and leave out preamble, narration, and recaps" https://code.claude.com/docs/en/output-styles (확인일 2026-11-06)
[^theme]: Claude Code 공식 문서, 「Configure your terminal for Claude Code」. "Use the `/theme` command, or the theme picker in `/config`, to choose a Claude Code theme that matches your terminal." https://code.claude.com/docs/en/terminal-config (확인일 2026-11-06)
