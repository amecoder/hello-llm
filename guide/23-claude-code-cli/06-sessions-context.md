# 6장. 세션과 맥락

> **한 줄 요약**: 대화는 폴더별로 저장되어 언제든 다시 열 수 있습니다. 대화가 길어지면 `/compact`로 줄이고, 다른 일로 넘어가면 `/clear`로 비웁니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다.

어제 하던 일을 오늘 이어 가고 싶을 때가 있습니다. 대화가 길어져서 답이 흐려질 때도 있습니다. 이 장은 그 두 가지를 다룹니다.

## 세션이란

**세션**(Session)은 프로젝트 폴더에 묶여 저장된 대화입니다.[^session-names] `claude`를 켜고 나눈 대화 한 묶음이 세션 하나입니다.

여기서 중요한 말은 "폴더에 묶여"입니다. 기본 목록은 그 폴더의 대화만 보여 줍니다. 그래서 이 장의 명령은 모두 터미널에서 연습 폴더로 이동한 뒤에 칩니다.

```bash
cd ~/hello-ai-연습/터미널
```

새로 `claude`를 켜면 Claude는 지난 대화를 모릅니다. 새 세션은 이전 대화 없이 시작하기 때문입니다.[^fresh] 어제 이야기를 이어 가려면 지난 세션을 직접 열어야 합니다.

<Quiz id="ch806-session" />

## 이름 붙이고 다시 열기

며칠 걸리는 일에는 이름을 붙여 두세요.[^rename-tip] 이름이 있으면 나중에 찾기가 쉽습니다. 세션 안에서 이렇게 칩니다.

```text
❯ /rename 주간회의-정리
  ⎿  Session renamed to: 주간회의-정리
```

이름을 안 붙여도 괜찮습니다. Claude Code가 첫 요청을 요약해서 제목을 만들어 줍니다.[^session-names]

다시 여는 방법은 세 가지입니다. 모두 `/exit`로 나와 터미널에서 칩니다.

| 명령 | 언제 쓰나 |
|---|---|
| `claude -c` | 이 폴더의 가장 최근 대화[^continue-resume] |
| `claude -r` | 목록에서 고르기[^continue-resume] |
| `claude -r 주간회의-정리` | 이름으로 바로 열기[^continue-resume] |

방금 끝낸 대화라면 `claude -c`가 가장 빠릅니다. 이어 갈 대화가 없는 폴더에서 치면 `No conversation found to continue`라고 알려 주고 끝납니다.[^no-conversation] 이 글자가 보이면 폴더부터 확인해 보세요. `pwd`로 지금 어느 폴더인지 알 수 있습니다.

며칠 전 대화라면 `claude -r`로 목록을 여세요. 이렇게 보입니다.

```text
  Resume session
  ╭──────────────────────────────────────────────────────────────────────────────────────────────╮
  │ ⌕ Search…                                                                                    │
  ╰──────────────────────────────────────────────────────────────────────────────────────────────╯
    터미널

  ❯ 주간회의-정리
    4 seconds ago · HEAD · 320.7KB

    Ctrl+A to show all projects · Ctrl+B to only show current branch · Space to preview · Ctrl+R
    to rename · Type to search · Esc to cancel
```

위아래 화살표로 고르고 Enter를 누르면 열립니다. 이름 아래 줄은 언제 쓴 대화인지와 크기를 보여 줍니다. `HEAD`는 무시해도 됩니다. 맨 아래 줄이 쓸 수 있는 키입니다. 글자를 치면 검색되고, Space는 미리 보기, Ctrl+R은 이름 바꾸기, Esc는 취소입니다.

이미 `claude` 안에 있다면 `/resume`을 치세요. 같은 목록이 열립니다.[^session-names] 다시 열면 같은 세션에 새 메시지가 이어서 쌓입니다.[^same-session]

<Quiz id="ch806-resume" />

## 맥락 창이란

**맥락 창**(Context window)은 Claude가 지금 이 순간 들고 있는 내용 전체입니다. 내가 보낸 말만 들어 있는 것이 아닙니다. 대화 기록, 파일 내용, 명령 출력, `CLAUDE.md`, 자동 메모리, 불러온 스킬, 시스템 지시가 함께 들어 있습니다.[^window] `CLAUDE.md`와 자동 메모리는 8장, 스킬은 9장에서 배웁니다. 책상 위에 펼친 자료라고 생각하면 쉽습니다.

이 공간은 **토큰**(Token)으로 셉니다. AI가 글을 잘게 나눠 세는 단위입니다.

대화가 길어지면 공간이 찹니다. 그러면 Claude Code는 대화를 자동으로 압축합니다. 다만 대화 초반에 준 지시는 잊힐 수 있습니다.[^works-context] "표로 써 줘"라고 처음에 한 번 말했는데 어느 순간 표가 사라졌다면 이런 경우일 수 있습니다.

그래서 오래 지켜야 할 규칙은 대화에 말로 두지 말고 `CLAUDE.md`에 적습니다.[^works-context] 만드는 법은 [8장](08-memory-settings.md)에서 다룹니다.

<Quiz id="ch806-window" />

## 맥락을 다루는 세 명령

처음부터 신경 쓸 필요는 없습니다. 답이 흐려졌다 싶을 때 이 세 가지를 떠올리면 됩니다.

**`/context` — 얼마나 찼는지 보기.** 맥락이 얼마나 찼는지 색 격자로 보여 줍니다.[^context-grid] 범주별 사용량과 개선 제안도 함께 나옵니다.[^context-doc] 결과는 대화 안에 글로 나옵니다. 따로 닫지 않고 이어서 입력하면 됩니다.

**`/compact` — 요약해서 줄이기.** 지금까지의 대화를 요약해서 공간을 비웁니다.[^compact-cmd] 뒤에 무엇을 남길지 적을 수 있습니다.[^context-doc] 적어 두면 필요한 내용이 요약에서 빠질 일이 줄어듭니다.

```text
아쉬운 예: /compact
나은 예:   /compact 회의록 형식에 대해 정한 내용만 남겨 줘
```

대화가 거의 없을 때 치면 줄일 것이 없다고 알려 줍니다.

```text
❯ /compact
  ⎿  Not enough messages to compact.
```

대화가 쌓인 뒤에 치면 줄인 다음 `Compacted (ctrl+o to see full summary)`라고 알려 줍니다.

**`/clear` — 비우고 새로 시작하기.** 빈 맥락으로 새 대화를 시작합니다. 이전 대화는 저장되어 있어서 `/resume`으로 돌아갈 수 있습니다.[^compact-cmd] 관련 없는 일로 넘어갈 때 쓰세요. 오래된 대화가 다음에 필요한 파일의 자리를 차지하지 않습니다.[^context-doc]

둘 중 무엇을 쓸지 헷갈린다면 이렇게 물어보세요.

- 같은 일을 계속하나? 그러면 `/compact`.
- 다른 일로 넘어가나? 그러면 `/clear`.

`/clear`를 쓰면 같은 이름의 세션이 둘이 될 수 있습니다. 이때 `claude -r 이름`은 그 이름의 목록을 보여 줍니다. 시간과 크기를 보고 고르면 됩니다.

한 가지 요령이 더 있습니다. 두 번 고쳐 말해도 답이 계속 빗나가면 세 번째로 고쳐 말하지 마세요. `/clear` 하고 요청을 더 잘 써서 다시 시작하는 편이 낫습니다.[^two-corrections] 틀린 시도가 대화에 쌓여 있지 않아서입니다.

대화가 너무 길어지면 이런 글자가 뜰 수 있습니다.

```text
Context limit reached · /compact or /clear to continue
```

당황하지 않아도 됩니다.[^context-limit] 글자에 적힌 대로 둘 중 하나를 치면 됩니다.

<Quiz id="ch806-manage" />

## 대화 기록은 내 컴퓨터에 남습니다

세션을 다시 열 수 있는 것은 기록이 내 컴퓨터에 저장되기 때문입니다. 대화 기록은 `~/.claude/projects/` 폴더에 평문으로 저장됩니다. 평문은 암호를 걸지 않은, 누구나 읽을 수 있는 글자라는 뜻입니다. 기본 보관 기간은 30일입니다.[^local-history]

여기에는 내가 친 말만 남지 않습니다. 도구를 거친 내용이 함께 남습니다. 파일 내용, 명령 출력, 붙여 넣은 글이 그렇습니다.[^transcript]

그러니 이 습관을 들이세요.

- 비밀번호나 인증 정보가 든 파일은 Claude에게 읽히지 마세요. 읽는 순간 기록에도 남을 수 있습니다.
- 다른 사람과 같이 쓰는 컴퓨터라면 이 폴더가 있다는 것을 기억해 두세요.

읽기를 아예 막는 방법은 [7장](07-permissions-undo.md)에서 해 봅니다. 한 프로젝트의 기록을 지우는 `claude purge` 명령도 있습니다.[^purge] 되돌리기 어려우니 연습 삼아 실행하지는 마세요. 이 가이드에서도 실행하지 않았습니다. 서버 쪽 보관 기간은 [13장](13-cost-safety-trouble.md)에서 다룹니다.

<Quiz id="ch806-history" />

## 직접 해 보기

연습 폴더 `~/hello-ai-연습/터미널`에서 해 봅니다.

1. `claude`를 켜고 이렇게 물어봅니다.

   ```text
   @inbox/회의-2026-10-27-주간회의.txt 이 메모에서 결정된 일을 두 줄로 알려 줘.
   ```

2. `/rename 주간회의-정리`로 이름을 붙이고 `/exit`로 나옵니다.
3. 터미널에서 `claude -c`로 다시 열고 "방금 내가 뭘 물어봤지?"라고 묻습니다. 앞 대화를 기억하면 잘 이어진 것입니다.
4. `/exit`로 나온 뒤 터미널에서 `claude -r`을 칩니다. 목록에서 `주간회의-정리`를 찾아 Enter로 엽니다.
5. `/context`를 쳐서 무엇이 공간을 쓰는지 봅니다.
6. `/compact 결정된 일만 남겨 줘`를 칩니다. 대화가 짧아서 줄일 것이 없다는 글자가 나와도 괜찮습니다.
7. `/clear`로 비운 뒤 "방금 내가 뭘 물어봤지?"라고 다시 묻습니다. 모른다고 답하면 맥락이 비워진 것입니다. `/resume`으로 앞 세션을 다시 찾아보세요.

스스로 물어보세요. 어제 대화를 찾아 이어 갈 수 있겠나? 언제 `/compact`를 쓰고 언제 `/clear`를 쓸지 말할 수 있나?

## 정리

- 세션은 폴더에 묶여 저장된 대화다. 새로 켜면 지난 대화를 모른다.
- `/rename`으로 이름을 붙이고, `claude -c`나 `claude -r`로 다시 연다.
- 맥락 창에는 대화뿐 아니라 파일 내용과 명령 출력도 들어간다.
- 자동 압축 뒤에는 초반 지시가 잊힐 수 있다. 오래 지킬 규칙은 `CLAUDE.md`에 적는다.
- 같은 일을 이어 가면 `/compact`, 다른 일로 넘어가면 `/clear`.
- 대화 기록은 내 컴퓨터에 평문으로 남는다. 기본 30일이다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Session | 세션 | 폴더에 묶여 저장된 대화 |
| Context window | 컨텍스트 윈도 | Claude가 지금 들고 있는 내용 전체 |
| Token | 토큰 | AI가 글을 세는 단위 |
| Compact | 컴팩트 | 대화를 요약해 공간을 비우는 일 |
| Plaintext | 플레인텍스트 | 암호를 걸지 않은 평문 |

<ChapterDone :chapter="806" />

다음 장: [7장. 허락과 되돌리기](07-permissions-undo.md)

[^session-names]: Claude Code 공식 문서, 「Manage sessions」. "A session is a saved conversation tied to a project directory." / "if you don't name a session, Claude Code generates a session title for it." / "Run `/resume` inside a session, or `claude --resume` with no arguments, to open the interactive session picker." https://code.claude.com/docs/en/sessions (확인일 2026-11-06)
[^fresh]: Claude Code 공식 문서, 「How Claude Code works」. "Each new session starts with a fresh context window, without the conversation history from previous sessions." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^rename-tip]: Claude Code 공식 문서, 「Best practices for Claude Code」. "for work that spans several days, `/rename oauth-migration` in the session names it" https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^continue-resume]: Claude Code 공식 문서, 「CLI reference」. "Load the most recent conversation in the current directory" / "Resume a specific session by ID or name, or show an interactive picker to choose a session." https://code.claude.com/docs/en/cli-reference (확인일 2026-11-06)
[^no-conversation]: Claude Code 공식 문서, 「Common workflows」. "it prints `No conversation found to continue` and exits." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-06)
[^same-session]: Claude Code 공식 문서, 「How Claude Code works」. "Resuming a session with `claude --continue` or `claude --resume` reopens it under the same session ID and appends new messages to the existing conversation." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^window]: Claude Code 공식 문서, 「How Claude Code works」. "Claude's context window holds your conversation history, file contents, command outputs, CLAUDE.md, auto memory, loaded skills, and system instructions." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^works-context]: Claude Code 공식 문서, 「How Claude Code works」. "Claude compacts automatically, but instructions from early in the conversation can get lost." / "Put persistent rules in CLAUDE.md, and run `/context` to see what's using space." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-06)
[^context-grid]: Claude Code 공식 문서, 「Commands」. "Visualize current context usage as a colored grid." https://code.claude.com/docs/en/commands (확인일 2026-11-06)
[^context-doc]: Claude Code 공식 문서, 「Explore the context window」. "run `/context` for a live breakdown by category with optimization suggestions, including which CLAUDE.md and auto memory files loaded." / "run `/compact` with instructions, like `/compact focus on the auth bug fix`, before starting a long new task." / "Old conversation crowds out the files you need next and costs tokens on every message." https://code.claude.com/docs/en/context-window (확인일 2026-11-06)
[^compact-cmd]: Claude Code 공식 문서, 「Commands」. "Free up context by summarizing the conversation so far." / "Start a new conversation with empty context." / "Resume the previous conversation with `/resume`" https://code.claude.com/docs/en/commands (확인일 2026-11-06)
[^two-corrections]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^context-limit]: Claude Code 공식 문서, 「Error reference」. "Context limit reached · /compact or /clear to continue" https://code.claude.com/docs/en/errors (확인일 2026-11-06)
[^local-history]: Claude Code 공식 문서, 「Data usage」. "Claude Code clients store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default to enable session resumption." https://code.claude.com/docs/en/data-usage (확인일 2026-11-06)
[^transcript]: Claude Code 공식 문서, 「Explore the .claude directory」. "Anything that passes through a tool is written to a transcript on disk: file contents, command output, pasted text." https://code.claude.com/docs/en/claude-directory (확인일 2026-11-06)
[^purge]: Claude Code 공식 문서, 「Explore the .claude directory」. "Run `claude purge` to delete the state Claude Code holds for one project." https://code.claude.com/docs/en/claude-directory (확인일 2026-11-06)
