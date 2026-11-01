# 6장. 터미널에서 쓰기 — `agy -p`와 조용한 거절

> **한 줄 요약**: `agy`는 Antigravity의 터미널 프로그램이고, `agy -p "할 일"`은 한 번 실행하고 끝납니다.
> `-p`에서는 허락이 필요한 일이 **조용히 거절**됩니다. 그런데도 **종료 코드는 0(성공)**이라, 빈 결과를 성공으로 착각하기 쉽습니다.

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서와, macOS에서 `agy` 1.4.12를 실행한 결과를 바탕으로 썼습니다. **터미널이 처음이라면 이 장은 건너뛰어도 됩니다.** 터미널이 무엇인지는 [Claude Code 10장](../20-claude-code/10-terminal.md)에서 설명했습니다.

## 설치하고 시작하기

macOS·Linux의 설치 명령은 이렇습니다.[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

**설치 명령은 공식 문서(antigravity.google/docs)에 적힌 그대로인지 확인하고 실행하세요.** Windows용 명령도 공식 문서에 있습니다.

정리도구 폴더로 이동해 `agy`를 치면 대화 화면이 열립니다.[^tui] 앱에서 이미 로그인했다면 브라우저 없이 바로 로그인됩니다.[^keyring] 처음 실행할 때는 **이 폴더를 믿는지** 확인합니다(Workspace trust).[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## 실행 모드

대화형 `agy`에서는 Shift+Tab으로 실행 모드를 바꿉니다.[^cycle]

| 모드 | 파일 수정 | 명령 실행 |
|---|---|---|
| `default` | 바뀐 내용을 보여 주고 확인 | 묻기 |
| `accept-edits` | 작업 폴더 안은 자동 | 묻기 |

출처: Antigravity 공식 문서(일부만 옮김)[^modes]

터미널의 기본 권한은 앱보다 조심스럽습니다. 파일 쓰기·명령·웹 도구 전에 묻고, 명령을 가두는 울타리는 기본으로 꺼져 있습니다([4장](04-permissions-undo.md)).

<Quiz id="ch606-modes" />

## `agy -p` — 한 번 묻고 끝내기

`-p`는 요청 하나를 보내고 답을 받은 뒤 끝나는 방식입니다. 묻는 창이 없으므로, 허락이 필요한 일은 정해 둔 규칙대로 처리합니다.[^headless] 답은 정식 출력(stdout)으로, 진행 상황과 오류는 옆길(stderr)로 나갑니다.[^stdout]

공식 문서는 작업 폴더 안 파일 읽기·쓰기는 자동으로 허락하고, 셸 명령은 기본이 "묻기"라 **조용히 거절**(soft-deny)한다고 설명합니다.[^policy] 조용한 거절은 실행을 멈추지 않고 **종료 코드 0**으로 끝나며, 무엇이 막혔는지만 stderr에 알립니다.[^soft]

<Quiz id="ch606-headless" />

## 이 가이드가 겪은 함정 네 가지

정리도구 폴더에서 `agy -p`를 여러 번 돌리며 실제로 겪은 일입니다.

1. **빈 결과인데 성공.** 에이전트가 폴더 목록을 보려고 셸 명령(`ls`)을 쓰려다 거절당하자, **아무것도 만들지 않고 끝났습니다.** 종료 코드는 0이었습니다. 이런 일이 세 번 있었습니다. 결과 파일이 실제로 생겼는지 꼭 확인하세요.
2. **믿지 않은 폴더에서는 읽기·쓰기도 거절.** 공식 문서는 작업 폴더 안 파일을 자동 허락한다고 하지만, 이 가이드의 연습 폴더에서는 쓰기와 읽기도 거절됐습니다. 이 폴더를 아직 "믿는 폴더"로 등록하지 않았던 것이 원인으로 보입니다(이 가이드의 추정). 대화형 `agy`를 한 번 열어 폴더를 믿는다고 답하면 등록됩니다.[^trust]
3. **해결: 모드 하나 + 한 문장.** `--mode accept-edits`를 붙이고 요청 끝에 "셸 명령은 쓰지 말고 파일 읽기·쓰기만 해 줘"를 더하자 모두 성공했습니다. 모든 것을 허락하는 `--dangerously-skip-permissions`는 쓰지 않았습니다. 공식 문서도 범위를 좁힌 허용 규칙을 권합니다.[^skip]
4. **답이 빠뜨린 파일.** 읽기 전용으로 notes 폴더의 파일 목록을 표로 달라고 했더니, 파일 3개 중 **2개만** 표에 나왔습니다. 확인 범위를 스스로 세어 보세요.

실제로 쓴 명령은 이렇습니다.

```bash
cd ~/hello-ai-연습/정리도구
agy -p "notes 폴더의 파일 목록을 보여 주고, 각 파일이 어떤 양식(templates 중 무엇)으로 쓰였는지 한 줄씩 알려 줘. 파일은 고치지 마. 답은 짧게 표로만. 셸 명령은 쓰지 말고 파일 읽기만 해 줘." --mode accept-edits
```

결과: [agy -p 출력](/practice/notes/results/antigravity/6장-agy-p-출력.txt)(내 컴퓨터의 경로는 `~`로 바꿈)

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| 한 번 실행 | `claude -p` | `codex exec` | `agy -p` |
| 기본 파일 쓰기 | 허락 필요 | 읽기 전용 | 작업 폴더 안 자동(문서) |
| 막히면 | 거절 | 멈춤 | 조용히 거절, 종료 코드 0 |

출처: 이 가이드의 정리(각 도구의 터미널 장과 실습)

<Quiz id="ch606-pitfalls" />

## 이어 가기와 사용량

터미널의 대화 기록은 **실행한 폴더별로** 나뉩니다.[^per-folder] `agy -c`로 그 폴더의 마지막 대화를 바로 잇거나, `/resume`으로 골라 이어 갑니다.[^resume] 망쳐 놓은 일은 `/rewind`(또는 `/undo`)로 앞 상태로 되돌립니다([4장](04-permissions-undo.md)).

사용량은 `/usage`로 봅니다.[^usage]

<Quiz id="ch606-resume" />

## 직접 해 보기

1. 공식 문서의 설치 명령과 위 명령이 같은지 확인한 뒤 설치한다(이미 있으면 `agy --version`).
2. 정리도구 폴더에서 대화형 `agy`를 한 번 열고, 폴더를 믿는지 묻으면 답한다.
3. 위의 읽기 전용 `agy -p`를 실행하고, 표의 파일 수를 notes 폴더와 맞춰 센다.
4. 결과가 비었으면 stderr의 거절 안내를 읽고, 무엇이 막혔는지 확인한다.

**이어지는 과제**: 7장에서는 비용·데이터·안전을 정리하고, 세 도구를 어떻게 함께 쓸지 정합니다.

## 정리

- `agy`는 대화형, `agy -p`는 한 번 실행하고 끝. 대화 기록은 폴더별.
- `-p`에서 허락이 필요한 일은 조용히 거절되고 종료 코드는 0. 결과 파일을 직접 확인한다.
- 믿지 않은 폴더에서는 파일 작업도 막힐 수 있다. 폴더를 믿는다고 등록하거나 `--mode accept-edits`.
- "셸 명령은 쓰지 말고" 한 문장이 거절로 멈추는 일을 줄였다. 답의 범위는 직접 센다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Headless | 헤드리스 | 대화 화면 없이 한 번 실행하는 방식 |
| Soft-deny | 소프트 디나이 | 실행을 멈추지 않고 그 동작만 조용히 거절하기 |
| Workspace trust | 워크스페이스 트러스트 | 이 폴더를 믿는다고 등록하는 절차 |
| Exit code | 엑싯 코드 | 프로그램이 끝날 때 남기는 성공·실패 번호 |

<ChapterDone :chapter="606" />

다음 장: [7장. 비용·데이터·안전, 그리고 세 도구 고르기](07-safety-choose.md)

[^install]: Antigravity 공식 문서, 「Get started」. "curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^tui]: Antigravity 공식 문서, 「Get started」. "| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^keyring]: Antigravity 공식 문서, 「Authenticate」. "If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install (확인일 2026-11-01)
[^trust]: Antigravity 공식 문서, 「Get started」. "**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^cycle]: Antigravity 공식 문서, 「Choose an execution mode」. "Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes (확인일 2026-11-01)
[^modes]: Antigravity 공식 문서, 「Choose an execution mode」. "| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes (확인일 2026-11-01)
[^headless]: Antigravity 공식 문서, 「Headless mode」. "Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless (확인일 2026-11-01)
[^stdout]: Antigravity 공식 문서, 「Headless mode」. "Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless (확인일 2026-11-01)
[^policy]: Antigravity 공식 문서, 「Headless mode」. "Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless (확인일 2026-11-01)
[^soft]: Antigravity 공식 문서, 「Headless mode」. "A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless (확인일 2026-11-01)
[^skip]: Antigravity 공식 문서, 「Headless mode」. "**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless (확인일 2026-11-01)
[^per-folder]: Antigravity 공식 문서, 「Managing conversations」. "When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations (확인일 2026-11-01)
[^resume]: Antigravity 공식 문서, 「Managing conversations」. "Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations (확인일 2026-11-01)
[^usage]: Antigravity 공식 문서, 「Model quotas (/usage)」. "Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage (확인일 2026-11-01)
