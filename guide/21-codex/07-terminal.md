# 7장. 터미널에서 쓰기 — `codex exec` 한 줄로 정리도구 확인

> **한 줄 요약**: Codex CLI는 터미널에서 쓰는 Codex입니다. 실행한 폴더의 `AGENTS.md`와 스킬을 읽습니다.
> `codex exec "할 일"`은 한 번 실행하고 끝나며, **기본이 읽기 전용**입니다. Claude Code의 `claude -p`와 비슷하지만 이 점이 다릅니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서와, macOS 터미널에서 Codex CLI 0.166.0을 실행한 결과를 바탕으로 썼습니다. **터미널이 처음이라면 이 장은 건너뛰어도 됩니다.** 터미널이 무엇인지는 [Claude Code 10장](../20-claude-code/10-terminal.md)에서 설명했습니다.

## 설치하고 시작하기

공식 문서의 설치 명령은 이렇습니다.[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**설치 명령은 공식 문서(learn.chatgpt.com)에 적힌 그대로인지 확인하고 실행하세요.** 인터넷에서 받은 스크립트를 바로 실행하는 명령이기 때문입니다.

설치가 끝나면 정리도구 폴더로 이동해 `codex`를 칩니다. 처음에는 **Sign in with ChatGPT**를 고릅니다.[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

터미널의 Codex는 **실행한 폴더**를 그 대화의 프로젝트로 봅니다.[^cwd] 앱에서 Choose project로 폴더를 고르던 일을 `cd`가 대신합니다.

<Quiz id="ch507-install" />

## `codex exec` — 한 번 묻고 끝내기

`codex exec`는 대화 화면을 열지 않고 한 번 실행하고 끝나는 방식입니다.[^exec] Claude Code 10장과 같은 질문을 해 봤습니다.

```bash
cd ~/hello-ai-연습/정리도구
codex exec "notes 폴더의 파일 목록을 보여 주고, 각 파일이 어떤 양식(templates 중 무엇)으로 쓰였는지 한 줄씩 알려 줘. 파일은 고치지 마. 답은 짧게 표로만."
```

답만 깔끔하게 나왔습니다(전체 출력: [7장-codex-exec-출력.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)).

| notes 파일 | 사용된 양식 |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-26.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |

출처: 이 가이드의 실습 결과(2026-11-01). 진행 기록은 따로 버리고 최종 답만 남겼다.

`codex exec`는 진행 상황과 최종 답을 **다른 길로** 내보냅니다. 진행 상황은 화면 옆길(stderr), 최종 답만 정식 출력(stdout)입니다.[^stdout] 그래서 `codex exec "…" > 결과.md`처럼 쓰면 최종 답만 파일에 담깁니다.

**`codex exec`는 기본이 읽기 전용입니다.** 파일을 고치게 하려면 `--sandbox workspace-write`를 붙입니다.[^readonly] 이 가이드의 2·3·5장 실습도 이 옵션을 붙여 실행했습니다.

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec`는 허락 방식을 **미리 정해 두고** 돌리는 방식입니다.[^preset] 이 가이드의 5장 실습에서는 `.agents` 폴더 쓰기가 막히자, Codex가 묻지 못하고 그대로 멈췄습니다. 허락이 필요한 일은 앱이나 대화형 `codex`에서 하는 편이 편합니다.

옛 글에 나오는 `--full-auto` 옵션은 더 이상 지원하지 않습니다.[^fullauto] 샌드박스와 허락을 모두 끄는 `--dangerously-bypass-approvals-and-sandbox` 같은 옵션도 있지만[^yolo], 메모 정리에는 필요 없습니다.

<Quiz id="ch507-exec" />

## 대화형 `codex` 안의 명령

`codex`로 대화형을 열면 `/`로 시작하는 명령을 씁니다.

| 명령 | 하는 일 |
|---|---|
| `/permissions` | 권한 바꾸기(앱의 권한 메뉴) |
| `/import` | Claude Code·Cursor 설정 가져오기 |
| `/resume` | 저장된 대화 이어 가기 |
| `/status` | 대화 정보와 남은 한도 보기 |

출처: Codex 공식 문서[^permissions][^import][^resume][^status]

대화형을 끝낸 뒤 밖에서 이어 가려면 `codex resume`을 칩니다.[^resume]

`/permissions`와 `/import`는 **터미널 쪽 명령**입니다. 앱에서는 입력창 아래 권한 메뉴(4장)와 설정의 Import 메뉴(3장)를 씁니다.

<Quiz id="ch507-commands" />

## 직접 해 보기

1. 공식 문서의 설치 명령과 위 명령이 같은지 확인한 뒤 설치한다(이미 있으면 `codex --version`).
2. 정리도구 폴더로 이동해 위의 읽기 전용 `codex exec` 질문을 실행한다.
3. `codex`로 대화형을 열고 `/status`를 쳐 본다.
4. `$`를 치거나 `/skills`를 실행해 5장의 스킬 이름이 보이는지 확인한다.[^skills]

**이어지는 과제**: 8장에서는 비용·데이터·안전을 정리하고, 숨은 지시가 든 메모를 Codex가 어떻게 다루는지 확인합니다.

## 정리

- 터미널의 Codex는 실행한 폴더를 프로젝트로 보고, 그 폴더의 `AGENTS.md`·스킬을 읽는다.
- 설치 명령은 공식 문서와 같은지 확인하고 실행한다.
- `codex exec`는 한 번 실행하고 끝나며, 기본이 읽기 전용이다. 고치려면 `--sandbox workspace-write`.
- `codex exec`는 허락 방식을 미리 정해 두고 돈다. 허락이 필요한 일은 앱이나 대화형에서.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Codex CLI | 코덱스 씨엘아이 | 터미널에서 쓰는 Codex |
| `codex exec` | 코덱스 이그젝 | 한 번 실행하고 끝내는 방식 |
| stdout / stderr | 스탠다드 아웃 / 스탠다드 에러 | 정식 출력 / 진행 상황·오류가 나가는 옆길 |

<ChapterDone :chapter="507" />

다음 장: [8장. 비용·데이터·안전, 그리고 도구 고르기](08-safety-choose.md)

[^install]: Codex 공식 문서, 「Codex CLI」. "curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli (확인일 2026-11-01)
[^signin]: Codex 공식 문서, 「Codex CLI」. "Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli (확인일 2026-11-01)
[^cwd]: Codex 공식 문서, 「Projects and chats」. "Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects (확인일 2026-11-01)
[^exec]: Codex 공식 문서, 「Non-interactive mode」. "Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode (확인일 2026-11-01)
[^stdout]: Codex 공식 문서, 「Non-interactive mode」. "While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode (확인일 2026-11-01)
[^readonly]: Codex 공식 문서, 「Non-interactive mode」. "By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode (확인일 2026-11-01)
[^fullauto]: Codex 공식 문서, 「Non-interactive mode」. "`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode (확인일 2026-11-01)
[^yolo]: Codex 공식 문서, 「Agent approvals & security」. "`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^permissions]: Codex 공식 문서, 「Permissions」. "In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^import]: Codex 공식 문서, 「Import from another agent」. "Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^resume]: Codex 공식 문서, 「Projects and chats」. "Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects (확인일 2026-11-01)
[^status]: Codex 공식 문서, 「Pricing」. "If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing (확인일 2026-11-01)
[^skills]: Codex 공식 문서, 「Build skills」. "In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^preset]: Codex 공식 문서, 「Non-interactive mode」. "Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode (확인일 2026-11-01)
