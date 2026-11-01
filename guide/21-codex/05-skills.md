# 5장. 스킬 옮기기 — `$weekly-review` 한 줄로 주간 회고

> **한 줄 요약**: Codex의 스킬은 Claude Code와 **같은 형식**(`SKILL.md`)이고, 두는 곳과 부르는 기호만 다릅니다. 폴더는 `.agents/skills`, 부를 때는 `$이름`입니다.
> 정리도구의 스킬 3개를 옮기고, `$weekly-review` 한 줄로 주간 회고를 만들어 원본과 맞춰 봅니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서와 이 가이드의 실습(Codex 터미널에서 실행)을 바탕으로 썼습니다. 스킬이 무엇이고 왜 쓰는지는 [Claude Code 7장](../20-claude-code/07-skills-plugins.md)에서 설명했습니다.

## 같은 형식, 다른 위치

Codex의 스킬도 `SKILL.md` 파일이 든 폴더이고, `SKILL.md`에는 이름(`name`)과 설명(`description`)이 꼭 있어야 합니다.[^format] 스킬은 여러 도구가 함께 쓰는 공개 표준을 따릅니다.[^standard] 그래서 Claude Code에서 만든 `SKILL.md`를 **고치지 않고** 그대로 옮겼습니다.

다른 것은 두는 곳과 부르는 법입니다.

| | Claude Code | Codex |
|---|---|---|
| 이 폴더 전용 | `.claude/skills/` | `.agents/skills/` |
| 내 모든 폴더 | `~/.claude/skills/` | `~/.agents/skills/` |
| 부르기 | `/이름` | `$이름` |

출처: Codex 공식 문서[^where][^mention]

옮기기 전에 시험해 봤습니다. `.claude/skills`에 둔 채로 `$weekly-review`를 부르자, Codex는 스킬 목록에서 바로 찾지 못하고 **파일 검색으로** `SKILL.md`를 뒤져서 찾아냈습니다. 이번에는 찾았지만, 정해진 자리에 두는 편이 확실합니다.

<Quiz id="ch505-where" />

## 스킬 옮기기

Codex에게 이렇게 부탁했습니다.

```
.claude/skills 폴더의 스킬 3개를 Codex가 읽는 위치인 .agents/skills 로 복사해 줘. 원래 폴더는 그대로 둬.
```

**막혔습니다.** 4장에서 본 보호 폴더 때문입니다. 작업 폴더 안의 `.agents`는 기본 상태에서 읽기만 됩니다.[^protected] Codex는 복사가 차단됐다고 알리고, 대신 칠 명령을 알려 줬습니다.

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

이 실습은 허락 방식을 미리 정해 두고 돌리는 터미널 실행(7장)이라, 묻지 못하고 그대로 멈췄습니다. 앱에서 이 지점이 어떻게 보이는지는 이 가이드가 직접 확인하지 못했습니다. 허락을 묻는 화면이 나오면 **무엇을 어디에 쓰는지** 읽고 판단하세요.

이 가이드는 Codex가 알려 준 명령을 **직접** 실행해서 복사했습니다. macOS 터미널을 열고 `cd ~/hello-ai-연습/정리도구`로 폴더에 들어간 뒤 위의 두 줄을 칩니다. 터미널이 처음이라면 [Claude Code 10장](../20-claude-code/10-terminal.md)을 먼저 보세요.

옮긴 뒤 `.agents/skills` 아래에 `meeting-notes`, `study-notes`, `weekly-review` 세 폴더가 있으면 됩니다.

<Quiz id="ch505-move" />

## `$`로 부르기

입력창에 `$`를 치면 스킬을 골라 부를 수 있습니다.[^dollar] 이번에는 스킬 이름 하나만 보냈습니다.

```
$weekly-review
```

복사를 마친 뒤에는 파일 검색 없이 `.agents/skills/weekly-review/SKILL.md`를 **바로** 열었습니다. 그리고 회고 메모 3개를 모아 주간 회고를 만들었습니다.

결과: [스킬로 만든 주간 회고](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

숫자를 원본 메모와 맞춰 봤습니다.

| 원본 메모 | 주간 회고 | 맞나 |
|---|---|---|
| 좋아요 12개 | 12개 | 맞음 |
| 가격을 6,000원으로 잘못 씀 | 6,000원 오류 | 맞음 |
| 세트 오늘 4개 | 4개 | 맞음 |
| 세트 이번 주 합계 11개 | 11개 | 맞음 |
| 인스타 3번 다 올림 | 3번 | 맞음 |
| 뱅쇼 원가 1,800원 | 없음 | 빠짐 |
| 전구를 사서 갈아 끼움 | 없음 | 빠짐 |

출처: 이 가이드의 실습 결과(2026-11-01)

틀린 항목은 없었지만 **빠진 것이 둘** 있었습니다. 회고 양식의 세 칸(잘한 것·아쉬운 것·다음 주에 할 것) 어디에도 딱 맞지 않아 뺀 것으로 보입니다. 이렇게 **틀린 것뿐 아니라 빠진 것도** 확인하세요. 빠지면 안 되는 내용이 있다면 스킬에 "뱅쇼처럼 다음 회의 안건이 될 숫자는 다음 주에 할 것에 넣는다"처럼 한 줄 더하면 됩니다.

부르지 않아도 요청이 스킬 설명과 맞으면 Codex가 알아서 스킬을 고를 수 있습니다.[^implicit] 그래서 설명의 앞부분에 **언제 쓰는지**를 분명히 적어 두는 것이 좋습니다.[^frontload]

<Quiz id="ch505-call" />

## 새 스킬 만들기와 플러그인

처음부터 새 스킬을 만들 때는 기본으로 들어 있는 `$skill-creator`를 부르고, 목표·단계·형식을 설명합니다.[^creator] 공식 문서가 꼽는 좋은 첫 스킬은 주간 보고나 회의 후속 정리처럼 **단계와 형식이 늘 같은 일**입니다.[^first] 정리도구의 세 스킬이 딱 그런 예입니다.

**플러그인**은 스킬과 외부 도구 연결을 함께 묶어 설치하는 꾸러미입니다.[^plugin] ChatGPT와 Codex는 플러그인 목록 하나를 함께 씁니다.[^shared] 플러그인에 든 훅(자동으로 도는 스크립트)은 돌기 전에 검토하고 믿을 만한지 판단하라고 합니다.[^hooks] 처음 보는 플러그인은 [Claude Code 7장](../20-claude-code/07-skills-plugins.md)에서 배운 것처럼 만든 곳과 권한을 먼저 확인하세요.

<Quiz id="ch505-create" />

## 직접 해 보기

1. Codex에게 `.claude/skills`의 스킬 3개를 `.agents/skills`로 복사해 달라고 한다. 허락을 물으면 내용을 읽고 판단한다.
2. 입력창에 `$`를 쳐서 세 스킬이 보이는지 확인한다.
3. `$weekly-review`를 보내고, 결과를 원본 메모와 맞춘다. 틀린 것과 빠진 것을 따로 센다.
4. 빠진 것이 있으면 스킬에 한 줄을 더하고 다시 돌려 본다.

**이어지는 과제**: 6장에서는 매주 금요일 주간 회고를 저절로 돌리는 예약과, 클라우드·휴대폰을 살펴봅니다.

## 정리

- 스킬 형식(`SKILL.md`)은 Claude Code와 같다. 위치는 `.agents/skills`, 부르기는 `$이름`.
- `.agents`는 보호 폴더라 옮길 때 막히거나 허락이 필요할 수 있다(이 가이드는 터미널에서 막힌 것만 확인).
- `$weekly-review` 한 줄로 주간 회고가 나왔다. 항목 5개는 맞았고 2개가 빠졌다.
- 틀린 것뿐 아니라 빠진 것도 확인한다. 반복되면 스킬을 고친다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| `$` 멘션 | 달러 멘션 | Codex에서 스킬을 이름으로 부르는 법 |
| `.agents/skills` | 에이전츠 스킬스 | Codex가 이 폴더의 스킬을 찾는 곳 |
| skill-creator | 스킬 크리에이터 | 새 스킬 만들기를 돕는 기본 스킬 |

<ChapterDone :chapter="505" />

다음 장: [6장. 예약·클라우드·휴대폰](06-schedule-cloud.md)

[^format]: Codex 공식 문서, 「Build skills」. "A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^standard]: Codex 공식 문서, 「Build skills」. "Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^where]: Codex 공식 문서, 「Build skills」. "For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^mention]: Codex 공식 문서, 「Skills & Plugins」. "ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins (확인일 2026-11-01)
[^protected]: Codex 공식 문서, 「Agent approvals & security」. "`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^dollar]: Codex 공식 문서, 「Slash commands」. "You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands (확인일 2026-11-01)
[^implicit]: Codex 공식 문서, 「Build skills」. "**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^frontload]: Codex 공식 문서, 「Build skills」. "Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills (확인일 2026-11-01)
[^creator]: Codex 공식 문서, 「Skills & Plugins」. "In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins (확인일 2026-11-01)
[^first]: Codex 공식 문서, 「Skills & Plugins」. "Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins (확인일 2026-11-01)
[^plugin]: Codex 공식 문서, 「Skills & Plugins」. "A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins (확인일 2026-11-01)
[^shared]: Codex 공식 문서, 「Skills & Plugins」. "ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins (확인일 2026-11-01)
[^hooks]: Codex 공식 문서, 「Plugins」. "Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins (확인일 2026-11-01)
