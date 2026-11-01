# 3장. 규칙 파일 AGENTS.md — CLAUDE.md를 Codex로 옮기기

> **한 줄 요약**: Codex는 일을 시작하기 전에 **`AGENTS.md`**를 읽습니다. Claude Code의 `CLAUDE.md`는 Codex가 그대로 두면 읽지 않습니다.
> 정리도구 폴더의 규칙을 `AGENTS.md`로 옮기고, 새 대화에서 **규칙을 말하지 않아도** 지키는지 시험합니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서와, 이 가이드가 정리도구 폴더로 직접 해 본 결과를 바탕으로 썼습니다. 규칙 파일이 왜 필요한지는 [Claude Code 6장](../20-claude-code/06-claude-md.md)에서 설명했습니다. 여기서는 Codex에서 달라지는 점만 다룹니다.

## Codex는 CLAUDE.md를 읽지 않는다

Codex의 규칙 파일 이름은 `AGENTS.md`입니다.[^agents] 다른 이름의 파일을 규칙으로 쓰려면 설정에 따로 등록해야 하고, 등록하지 않은 이름은 무시합니다.[^ignored] 그래서 `CLAUDE.md`는 그대로 두면 규칙으로 읽히지 않습니다.

2장의 실행 기록에서도 확인할 수 있었습니다. Codex는 폴더에서 `AGENTS.md`를 찾았고, 없으니 양식(`templates/`)만 읽었습니다. `CLAUDE.md`는 열지 않았습니다.

그런데도 2장의 회의록은 `(메모에 없음)` 규칙을 지켰습니다. 같은 규칙이 **양식 안내문**(`templates/README.md`)에도 적혀 있었기 때문입니다. 반대로 말하면, `CLAUDE.md`에**만** 적힌 규칙은 Codex가 모릅니다.

<Quiz id="ch503-why" />

## CLAUDE.md를 AGENTS.md로 옮기기

옮기는 일도 Codex에게 맡깁니다. 이 장의 실행도 2장처럼 같은 Codex를 터미널에서 돌린 것입니다. 이번에는 규칙 하나를 **새로** 더했습니다. 나중에 이 규칙이 지켜지는지 보면, `AGENTS.md`를 읽었는지 꽤 믿을 만하게 짐작할 수 있습니다.

```
CLAUDE.md는 Claude Code가 읽는 규칙 파일이야. 같은 규칙을 Codex도 읽도록 AGENTS.md로 옮겨 줘. 규칙 내용은 바꾸지 말고, 규칙 하나만 추가해 줘: '정리한 파일 맨 아래에 「원본과 대조할 것」 절을 두고, 숫자·이름·날짜 중 다시 확인할 것을 3개 이내로 적는다.' CLAUDE.md는 그대로 둬.
```

Codex는 `CLAUDE.md`의 다섯 규칙을 그대로 옮기고, 새 규칙을 6번으로 붙였습니다. 그리고 "추가한 규칙을 제외하면 원본과 내용이 완전히 일치하는지 검증했다"고 알렸습니다.

결과: [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt)

`CLAUDE.md`를 지우지 않은 이유가 있습니다. 같은 폴더를 Claude Code에서도 계속 쓸 수 있게 하려는 것입니다. 대신 **두 파일을 함께 고쳐야** 합니다. 한쪽만 고치면 두 도구가 다른 규칙으로 일하게 됩니다.

<Quiz id="ch503-move" />

## 규칙을 말하지 않고 시험하기

새 대화를 열고, 규칙 이야기 없이 공부 필기 정리만 부탁합니다.

```
inbox/공부-2026-10-28-프롬프트-강의.txt 를 공부 노트로 정리해서 notes/ 에 저장해 줘.
```

결과 맨 아래에 새 규칙의 절이 생겼습니다.

```
## 원본과 대조할 것

- 강의 날짜: 10/28(수). 원본에는 10/28로 적혀 있으며, 연도는 파일명의 2026년을 기준으로 했다.
- 강의 분량: 1시간.
- 강사가 소개한 프롬프트 작성 방법: 5가지.
```

결과: [규칙만으로 쓴 공부 노트](/practice/notes/results/codex/3장-공부노트-규칙확인.txt)

| 언제 만든 파일 | 「원본과 대조할 것」 절 |
|---|---|
| AGENTS.md 전(2장 회의록) | 없음 |
| AGENTS.md 후(이 공부 노트) | 있음 |

출처: 이 가이드의 실습 결과(2026-11-01, 각 1회)

새 규칙은 `AGENTS.md`에만 있었으므로, Codex가 그 파일을 읽고 따랐다고 볼 수 있습니다. 다만 **한 번씩 해 본 결과**이고, 전과 후의 메모 종류(회의록·공부 노트)도 다릅니다. 양식 점검표에도 "원본 메모와 한 번 대조했다"는 비슷한 항목이 있습니다. 더 확실히 하려면 **같은 메모**를 `AGENTS.md` 없이 한 번, 있이 한 번 돌려 비교해 보세요. 매번 지킨다는 보장은 아니니, 결과를 볼 때마다 확인하세요.

<Quiz id="ch503-test" />

## AGENTS.md를 읽는 순서

`AGENTS.md`는 두 곳에 둘 수 있습니다.[^chain]

| 위치 | 적용 범위 | 예 |
|---|---|---|
| `~/.codex/AGENTS.md` | 내 모든 폴더 | "답은 한국어로" |
| 프로젝트 폴더의 `AGENTS.md` | 그 폴더만 | 정리도구 규칙 |

출처: Codex 공식 문서(일부만 옮김)[^chain]

둘 다 있으면 **이어 붙여서** 읽고, 지금 폴더에 가까운 파일이 뒤에 와서 앞의 지침보다 우선합니다.[^override] 합친 크기가 기본 32KiB에 닿으면 그 뒤는 붙이지 않습니다.[^limit] 한국어로 대략 1만 자 남짓입니다. 규칙은 짧게 유지하세요.

규칙을 고쳤는데 반영이 안 된 것 같으면 **새 대화를 시작**하세요. Codex는 실행을 시작할 때마다 규칙을 새로 읽습니다.[^restart]

`AGENTS.md`가 아직 없는 폴더라면 앱 입력창에 `/init`을 쳐서 뼈대를 만들 수도 있습니다.[^init]

<Quiz id="ch503-order" />

## 가져오기(Import)와 메모리

**가져오기**는 다른 에이전트의 설정을 한 번에 옮겨 주는 기능입니다. 앱에서는 Claude Code·Claude Cowork·Cursor에서 가져올 수 있습니다.[^import-from] 앱 설정의 **Import** 메뉴에서 시작합니다. 메뉴가 없으면 **General**에서 **Import other agent setup**을 찾습니다.[^import-menu]

| Claude Code 쪽 | Codex로 오면 |
|---|---|
| 규칙 파일(`CLAUDE.md` 등) | `AGENTS.md` |
| 스킬 | 스킬 |
| 슬래시 명령 | 스킬 |
| `settings.json` | `config.toml` |

출처: Codex 공식 문서(일부만 옮김)[^import-map]

가져와도 원래 설정은 바뀌거나 지워지지 않습니다.[^import-keep] 다만 가져온 뒤에는 **스킬의 권한 제한, 훅, 인자를 쓰는 명령**을 꼭 검토하라고 합니다.[^import-review]

이 가이드는 가져오기를 **실행하지 않았습니다.** 가져오기는 폴더 하나가 아니라 내 컴퓨터의 개인 설정까지 함께 살펴봅니다.[^import-scope] 무엇이 옮겨지는지 직접 보고 싶다면 이 장처럼 손으로 옮기는 편이 낫습니다.

**메모리**(Memories)는 예전 작업의 맥락을 다음 작업에 가져가는 기능입니다.[^memory] 내 컴퓨터의 Codex 메모리는 기본으로 꺼져 있습니다.[^memory-off] 공식 문서는 메모리를 "떠올리기 보조"로만 보고, 꼭 지킬 규칙은 메모리에 맡기지 말라고 합니다.[^memory-rules] **꼭 지킬 규칙은 `AGENTS.md`에** 적으라고 합니다.[^memory-agents]

<Quiz id="ch503-import" />

## 직접 해 보기

1. 위의 요청으로 `CLAUDE.md`를 `AGENTS.md`로 옮기게 한다. 새 규칙 하나를 함께 더한다.
2. `AGENTS.md`를 열어 원래 규칙이 그대로인지, 새 규칙이 붙었는지 본다.
3. **새 대화**를 열고 규칙 이야기 없이 공부 필기를 정리시킨다.
4. 결과에 새 규칙이 지켜졌는지 확인한다.

**이어지는 과제**: 4장에서는 Codex가 무엇을 스스로 하고 무엇을 물어보는지 정하는 권한 메뉴와, 바뀐 내용을 되돌리는 법을 배웁니다.

## 정리

- Codex는 `AGENTS.md`를 읽고, `CLAUDE.md`는 그대로 두면 읽지 않는다.
- 두 도구를 함께 쓰면 두 파일을 함께 고친다.
- 새 규칙을 넣고 말하지 않은 채 시험해 보면, 규칙 파일이 읽히는지 알 수 있다(이번 실습: 전 0 → 후 1).
- 개인 규칙은 `~/.codex/AGENTS.md`, 폴더 규칙은 폴더의 `AGENTS.md`. 가까운 쪽이 우선한다.
- 가져오기는 설정을 한 번에 옮기지만 개인 설정까지 보인다. 꼭 지킬 규칙은 메모리가 아니라 `AGENTS.md`에.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Import | 임포트 | 다른 에이전트의 설정을 Codex로 옮기는 기능 |
| Memories | 메모리즈 | 예전 작업 맥락을 다음에 떠올리는 기능 |
| `/init` | 이닛 | `AGENTS.md` 뼈대를 만드는 명령 |

<ChapterDone :chapter="503" />

다음 장: [4장. 권한과 되돌리기](04-permissions-undo.md)

[^agents]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^ignored]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "Filenames not on this list are ignored for instruction discovery." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^chain]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "In your Codex home directory (defaults to `~/.codex`, unless you set `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists." / "Starting at the project root (typically the Git root), Codex walks down to your current working directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^override]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "Files closer to your current directory override earlier guidance because they appear later in the combined prompt." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^limit]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default)." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^restart]: Codex 공식 문서, 「Custom instructions with AGENTS.md」. "If instructions look stale, restart Codex in the target directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (확인일 2026-11-01)
[^init]: Codex 공식 문서, 「Slash commands」. "Generate an `AGENTS.md` scaffold for the current project." https://learn.chatgpt.com/docs/reference/slash-commands (확인일 2026-11-01)
[^import-from]: Codex 공식 문서, 「Import from another agent」. "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^import-menu]: Codex 공식 문서, 「Import from another agent」. "If **Import** isn't available as a settings section yet, open **General** and find **Import other agent setup**." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^import-map]: Codex 공식 문서, 「Import from another agent」. 표 「What ChatGPT can import」의 Instruction files·`settings.json`·Skills·Slash commands 행. https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^import-scope]: Codex 공식 문서, 「Import from another agent」. "The import flow checks both your user-level setup and your existing projects." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^import-keep]: Codex 공식 문서, 「Import from another agent」. "Importing doesn't change or delete your existing agent setup." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^import-review]: Codex 공식 문서, 「Import from another agent」. "Tool restrictions or permissions in imported skills and agents." / "Hooks whose behavior may differ after import." / "Prompt templates or command-style prompts that depend on arguments, shell interpolation, or file-path placeholders." https://learn.chatgpt.com/docs/import (확인일 2026-11-01)
[^memory]: Codex 공식 문서, 「Memories」. "Memories let ChatGPT and Codex carry useful context from earlier work into future work." https://learn.chatgpt.com/docs/customization/memories (확인일 2026-11-01)
[^memory-off]: Codex 공식 문서, 「Memories」. "Local Codex memories are off by default." https://learn.chatgpt.com/docs/customization/memories (확인일 2026-11-01)
[^memory-rules]: Codex 공식 문서, 「Memories」. "Treat memories as a helpful recall layer, not as the only source for rules that must always apply." https://learn.chatgpt.com/docs/customization/memories (확인일 2026-11-01)
[^memory-agents]: Codex 공식 문서, 「Memories」. "Keep required team guidance in `AGENTS.md` or checked-in documentation." https://learn.chatgpt.com/docs/customization/memories (확인일 2026-11-01)
