# 3장. 규칙과 스킬 — 옮기지 않아도 된다

> **한 줄 요약**: Antigravity는 폴더의 **`AGENTS.md`**를 늘 켜 둔 규칙으로 읽고, **`.agents/skills`**의 스킬을 알아서 고릅니다. Codex 단계에서 만든 파일이 **그대로** 통합니다.
> 같은 메모로 `AGENTS.md`를 치운 채 한 번, 되돌린 뒤 한 번 정리시켜 이것을 확인합니다.

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서와, 이 가이드가 Antigravity CLI `agy` 1.4.12로 실행한 결과를 바탕으로 썼습니다. 이 가이드는 실습용 다른 AI 도구 안에서 `agy`를 불러 실행했습니다. 공식 FAQ는 이런 사용을 개인 요금제에서 지원하지 않으므로([7장](07-safety-choose.md)), 따라 할 때는 앱이나 터미널에서 직접 실행하세요. 앱과 CLI는 같은 에이전트를 씁니다([1장](01-what-is.md)). 규칙 파일과 스킬이 무엇인지는 [Claude Code 6·7장](../20-claude-code/06-claude-md.md)에서 설명했습니다.

## Antigravity가 찾는 곳

Antigravity는 규칙과 스킬을 정해진 폴더에서 찾습니다.[^where]

| 무엇 | 이 폴더(프로젝트) | 내 모든 폴더 |
|---|---|---|
| 규칙 | `AGENTS.md`·`GEMINI.md`·`.agents/rules/` | `~/.gemini/AGENTS.md` 등 |
| 스킬 | `.agents/skills/이름/SKILL.md` | `~/.gemini/config/skills/` |

출처: Antigravity 공식 문서(일부만 옮김)[^where][^global][^global-skill]

**Codex 단계에서 만든 파일과 이름·위치가 같습니다.** 규칙 파일 `AGENTS.md`와 스킬 폴더 `.agents/skills`입니다. 그래서 정리도구 폴더를 **아무것도 옮기지 않고** 그대로 열면 됩니다.

`CLAUDE.md`는 규칙 파일 목록에 없습니다.[^names] Claude Code에서만 쓰던 규칙이 있다면 `AGENTS.md`에도 적어 두세요(Codex 3장과 같은 이유).

`AGENTS.md`는 앞부분 설정 없이 쓰고, **내용 전체가 늘 켜져 있습니다.**[^always] 고친 규칙과 스킬은 다음 메시지부터 바로 적용됩니다.[^reread]

<Quiz id="ch603-where" />

## 같은 메모로 시험하기

`AGENTS.md`에는 Codex 3장에서 더한 규칙이 있습니다. "정리한 파일 맨 아래에 「원본과 대조할 것」 절을 둔다"입니다. 이 규칙은 `AGENTS.md`에만 있으므로, 결과에 그 절이 있는지 보면 `AGENTS.md`가 읽혔는지 알 수 있습니다.

Codex 단계의 검토에서 "전과 후에 다른 메모를 쓰면 엄밀한 비교가 아니다"라는 지적을 받았습니다. 그래서 이번에는 **같은 메모, 같은 요청**으로 두 번 실행했습니다.

```
inbox/회의-2026-10-27-주간회의.txt 메모를 회의록으로 정리해서 notes/ 폴더에 새 파일로 저장해 줘.
```

| 실행 | 「원본과 대조할 것」 절 |
|---|---|
| `AGENTS.md`를 폴더 밖으로 치운 채 | 없음 |
| `AGENTS.md`를 되돌린 뒤 | 있음 |

출처: 이 가이드의 실습 결과(2026-11-01, 각 1회)

결과: [AGENTS.md 없이](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [AGENTS.md 있을 때](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

실행 기록을 보면 차이가 더 분명합니다.

- **`AGENTS.md`가 없을 때**: 에이전트가 `AGENTS.md`·`CLAUDE.md`·`GEMINI.md`를 직접 찾아 열어 봤습니다.
- **`AGENTS.md`가 있을 때**: 그 파일을 따로 열지 않았는데도 새 규칙을 지켰습니다. 늘 켜 둔 규칙으로 처음부터 들어가 있었기 때문으로 보입니다.

`CLAUDE.md`는 두 번 모두 **스스로 열어 읽었습니다.** 규칙 파일로 자동으로 들어간 것은 아니지만, 폴더에 있으면 참고 자료로 읽을 수 있다는 뜻으로 보입니다. 이 컴퓨터에는 개인 규칙 파일(`~/.gemini/GEMINI.md`)도 있어 실행에 함께 들어갔으므로, 이 행동이 그 영향인지는 가릴 수 없습니다. 각각 한 번 해 본 결과입니다.

같은 메모인데 결과에 차이가 하나 더 있었습니다. Codex는 메모의 요일을 2026년 달력에 맞춰 고쳤지만, Antigravity는 메모에 적힌 요일(`10/27(월)`)을 그대로 썼습니다. 연습 메모의 요일은 이야기를 위해 지어낸 것이라 실제 달력과 맞지 않습니다. 도구마다 이런 판단이 다르니, 날짜는 늘 원본과 맞춰 보세요.

틀린 날짜도 하나 있었습니다. `AGENTS.md`가 있을 때 만든 회의록에는 뱅쇼 원가 조사 기한이 `10/31(금)` 대신 `10/30(금)`으로 적혔습니다(메모는 "금요일까지"). **규칙 절은 지켰어도 날짜는 틀릴 수 있습니다.** 「원본과 대조할 것」 절이 있다고 안심하지 말고 직접 대조하세요.

<Quiz id="ch603-test" />

## 스킬은 알아서 고른다

에이전트는 매번 스킬 이름과 설명(`description`) 목록을 보고, 일에 맞는 스킬이 있으면 그 스킬의 전체 지침을 읽습니다.[^progressive] 그래서 스킬을 쓰라고 일일이 말할 필요가 없고, 꼭 쓰게 하려면 이름을 말하면 됩니다.[^mention]

위의 두 실행에서 스킬 이야기를 하지 않았는데도, **첫 동작이 `.agents/skills/meeting-notes/SKILL.md` 읽기**였습니다. Codex 5장에서 옮겨 둔 스킬을 그대로 알아본 것입니다.

직접 부를 때는 앱 입력창에 `/스킬이름`을 칩니다.[^slash] Codex의 `$이름`과 다르고, Claude Code의 `/이름`과 같습니다.

```
/weekly-review
```

이 가이드는 터미널에서 "weekly-review 스킬로 이번 주 회고를 정리해 줘"라고 이름을 말해 실행했습니다. 에이전트는 `.agents/skills/weekly-review/SKILL.md`를 읽고 회고 메모 3개로 주간 회고를 만들었습니다.

결과: [스킬로 만든 주간 회고](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

원본 메모와 맞춰 볼 사실 8개가 **모두** 들어 있었습니다. 좋아요 12개, 6,000원 오류, 세트 4개, 합계 11개, 인스타 3번, 뱅쇼 1,800원, 전구, 문구 쓰는 데 2시간입니다. 같은 스킬로 Codex가 만든 회고에서는 3개가 빠졌습니다([Codex 5장](../21-codex/05-skills.md)). 같은 지침이라도 도구마다 결과가 다를 수 있다는 예입니다.

결과에는 `(메모에 없음)` 표시가 여러 곳 있습니다. 사실이 틀렸다는 뜻이 아니라, 양식이 요구하는 "왜 잘됐는지"나 "언제 할지"가 메모에 없다는 표시입니다. 틀린 것·빠진 것과 함께, 이런 표시가 맞게 붙었는지도 보세요.

<Quiz id="ch603-skills" />

## 조건부 규칙과 배운 것 남기기

규칙이 많아지면 `.agents/rules/` 폴더에 파일로 나눌 수 있습니다. 이 파일들은 맨 앞에 언제 켤지(`trigger`)를 꼭 적어야 합니다. 적지 않거나 틀리게 적으면 **아무 말 없이 버려집니다.**[^trigger] 정리도구처럼 규칙이 몇 줄뿐이면 `AGENTS.md` 하나로 충분합니다.

규칙은 "늘 지킬 것", 스킬은 "여러 단계로 하는 일"에 씁니다.[^rule-skill] 예를 들어 "날짜는 10/27(월)처럼 쓴다"는 규칙이고, "회고 메모 3개를 모아 주간 회고를 만든다"는 스킬입니다.

대화에서 고쳐 준 것을 규칙이나 스킬로 남기고 싶으면 `/learn`을 씁니다. 에이전트가 고칠 내용을 제안하고, **내가 승인한 뒤에만** 파일을 씁니다.[^learn]

<Quiz id="ch603-rules" />

## 직접 해 보기

1. 정리도구 폴더를 Antigravity 프로젝트로 연다(2장). 아무것도 옮기지 않는다.
2. 회의 메모 정리를 맡기고, 결과 맨 아래에 「원본과 대조할 것」 절이 있는지 본다.
3. 더 확실히 하고 싶으면 `AGENTS.md`를 잠시 다른 곳으로 옮겨 같은 요청을 한 번 더 하고 비교한다. 끝나면 되돌린다.
4. `/weekly-review`로 주간 회고를 만들고, 틀린 것과 빠진 것을 원본과 맞춰 센다.

**이어지는 과제**: 4장에서는 Antigravity의 권한 프리셋과 되돌리기를 Claude Code·Codex와 비교합니다.

## 정리

- Antigravity는 `AGENTS.md`·`GEMINI.md`와 `.agents/skills`를 읽는다. Codex에서 만든 파일이 그대로 통한다.
- 같은 메모로 시험한 결과, `AGENTS.md` 없이 0 → 있을 때 1(「원본과 대조할 것」 절).
- 스킬은 말하지 않아도 알아서 골랐다. 직접 부를 때는 `/스킬이름`.
- `.agents/rules/` 파일은 `trigger`를 꼭 적는다. 대화에서 배운 것은 `/learn`으로 승인 후 남긴다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| always_on | 올웨이즈 온 | 늘 켜져 있는 규칙 |
| trigger | 트리거 | 규칙을 언제 켤지 정하는 값 |
| `/learn` | 런 | 대화에서 배운 것을 규칙·스킬로 남기자고 제안하는 명령 |

<ChapterDone :chapter="603" />

다음 장: [4장. 권한과 되돌리기](04-permissions-undo.md)

[^where]: Antigravity 공식 문서, 「Customization discovery」. "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery (확인일 2026-11-01)
[^global]: Antigravity 공식 문서, 「Rules」. "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules (확인일 2026-11-01)
[^global-skill]: Antigravity 공식 문서, 「Customization discovery」. "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery (확인일 2026-11-01)
[^names]: Antigravity 공식 문서, 「Rules」. "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules (확인일 2026-11-01)
[^always]: Antigravity 공식 문서, 「Rules」. "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules (확인일 2026-11-01)
[^reread]: Antigravity 공식 문서, 「Customization discovery」. "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery (확인일 2026-11-01)
[^progressive]: Antigravity 공식 문서, 「Agent skills」. "On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills (확인일 2026-11-01)
[^mention]: Antigravity 공식 문서, 「Agent skills」. "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills (확인일 2026-11-01)
[^slash]: Antigravity 공식 문서, 「Agent skills」. "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills (확인일 2026-11-01)
[^trigger]: Antigravity 공식 문서, 「Rules」. "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules (확인일 2026-11-01)
[^rule-skill]: Antigravity 공식 문서, 「Rules」. "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules (확인일 2026-11-01)
[^learn]: Antigravity 공식 문서, 「Slash commands overview」. "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands (확인일 2026-11-01)
