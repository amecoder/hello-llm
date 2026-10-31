# 7장. 스킬·플러그인·외부 도구 — 정리 도구를 한 줄 명령으로

> **한 줄 요약**: 매번 붙여 넣는 지시·점검표·여러 단계 절차는 **스킬**로 만들어 `/이름` 한 줄로 부릅니다. 이 장에서 「정리 도구」가 완성됩니다.
> 남이 만든 **플러그인**과 외부 서비스 **커넥터**도 붙일 수 있지만, 내 권한으로 코드를 실행하므로 믿을 만한 것만 설치합니다.

이 장은 2026년 10월 31일에 확인한 Claude Code 공식 문서와 macOS 데스크톱 앱(한국어 화면, 유료 계정)을 바탕으로 썼습니다. 5장의 양식과 6장의 CLAUDE.md를 그대로 씁니다.

## 스킬이란

**스킬**(Skill)은 `SKILL.md` 파일에 적어 둔 지시입니다. Claude는 관련 있는 요청이 오면 스킬을 스스로 쓰고, 내가 `/스킬이름`으로 직접 부를 수도 있습니다.[^what]

이럴 때 스킬을 만듭니다.[^when]

- 같은 지시나 점검표를 **계속 붙여 넣고** 있을 때
- CLAUDE.md의 한 부분이 "사실"이 아니라 **여러 단계의 절차**로 커졌을 때

CLAUDE.md와 다른 점은 **읽히는 때**입니다. CLAUDE.md는 세션마다 늘 읽히지만, 스킬 본문은 **쓸 때만** 읽힙니다. 그래서 길고 자세하게 써도 평소에는 부담이 거의 없습니다.[^when]

| | CLAUDE.md(6장) | 스킬(7장) |
|---|---|---|
| 담는 것 | 늘 지킬 규칙 | 한 가지 일의 절차 |
| 읽히는 때 | 세션마다 | 쓸 때만 |
| 부르는 법 | 따로 없음 | `/이름` 또는 관련 요청 |

<Quiz id="ch407-what" />

## 실습 — 정리 스킬 3개 만들기

정리 도구의 세 가지 일을 스킬로 만듭니다.

![스킬 요청. ① 입력창에 스킬 3개(meeting-notes·study-notes·weekly-review)를 만들어 달라는 요청에 빨간 번호가 붙어 있다](assets/shot-25-skill-prompt-marked.png)

```
templates 양식과 CLAUDE.md 규칙을 쓰는 스킬 3개를 이 폴더의 .claude/skills 에 만들어 줘. meeting-notes(회의 메모 → 회의록), study-notes(공부 필기 → 공부 노트), weekly-review(회고 메모 → 주간 회고). 각 SKILL.md에는 언제 쓰는지, 읽을 파일, 쓸 양식, 저장 위치, 끝나고 확인할 점검표를 넣어 줘.
```

스킬 폴더 `.claude/skills/<이름>/SKILL.md` 를 그 폴더 안에 두면, **그 폴더의 세션에서만** 쓰는 프로젝트 스킬이 됩니다.[^where] 폴더 이름이 곧 명령 이름입니다(`/meeting-notes`).[^name] 한글 명령 이름이 되는지는 공식 문서로 확인하지 못해서, 이 가이드는 영문 이름을 썼습니다.

### 이번에는 허락 창이 떴다

스킬 파일을 쓰려는 순간 **허락 창**이 나왔습니다.

![허락 창. ① 「Claude가 쓰기 SKILL.md하도록 허용하시겠습니까?」, ② 쓰려는 내용 미리보기(초록 줄), ③ 「거부」, ④ 「항상 허용」과 ▾ 버튼에 빨간 번호가 붙어 있다(경로 줄은 컴퓨터 사용자 이름이 들어 있어 가림)](assets/shot-26-permission-marked.png)

2~4장에서는 이 컴퓨터의 개인 허용 규칙 때문에 허락 창이 뜨지 않았습니다. 이번에 뜬 이유는 `.claude` 폴더가 **보호된 경로**이기 때문입니다. 「편집 자동 수락」 모드에서도 보호된 경로에 쓰는 일은 계속 묻습니다.[^protected] 스킬·설정처럼 Claude의 동작을 바꾸는 파일이 이 폴더에 있어서, 바꾸기 전에 사람이 확인하게 한 것입니다.

②에서 **무엇을 쓰려는지 먼저 읽을 수 있습니다.** ▾를 누르면 「한 번만 허용」이 나옵니다.

![▾ 메뉴. ① 「한 번만 허용」(⌘↩)에 빨간 번호가 붙어 있다](assets/shot-27-allow-once-marked.png)

| 버튼 | 하는 일 |
|---|---|
| 거부 | 이번 쓰기를 막음 |
| 한 번만 허용(⌘↩) | 이번 한 번만 허락 |
| 항상 허용(⇧⌘↩) | 같은 일을 앞으로 묻지 않게 허락 |

출처: 이 가이드의 화면 확인(2026-10-31)

처음에는 **「한 번만 허용」**을 권합니다. 「항상 허용」은 편하지만, 앞으로 같은 일을 묻지 않게 됩니다. 이 실습에서는 스킬 3개라 허락 창이 세 번 떴고, 세 번 모두 「한 번만 허용」을 골랐습니다.

만들어진 스킬(이 가이드의 결과): [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt)

각 SKILL.md 맨 위에는 `name`(이름)과 `description`(언제 쓰는지)이 있습니다. Claude는 description을 보고 스킬을 언제 쓸지 정합니다.[^desc] 예를 들어 weekly-review의 description에는 "주간 회고 써 줘", "이번 주 회고 정리" 같은 요청에 쓴다고 적혀 있습니다.

<Quiz id="ch407-make" />

## 한 줄로 부르기

새 세션의 입력창에 `/`를 치면 쓸 수 있는 명령과 스킬 목록이 나옵니다. 이름 일부를 이어 치면 걸러집니다.[^slash]

![스킬 목록. ① 「study-notes」 항목, ② 옆의 설명 상자(설명 끝에 「(project)」)에 빨간 번호가 붙어 있다](assets/shot-28-skill-menu-marked.png)

②의 **(project)**는 이 폴더의 프로젝트 스킬이라는 표시입니다. Enter로 고르고 정리할 파일을 이어 적어 보냅니다.

![스킬 실행. ① 「/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt」를 입력한 입력창에 빨간 번호가 붙어 있다](assets/shot-29-skill-run-marked.png)

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

이 한 줄로 공부 노트가 양식대로 만들어졌습니다(결과: [7장-공부노트-스킬로.txt](/practice/notes/results/7장-공부노트-스킬로.txt)). 한 줄 요약, 핵심 5가지, 새로 안 말 4개, 주의할 것, 질문할 것이 양식 순서대로 들어갔습니다. 4장에서 긴 요청으로 만들었다 되감았던 그 노트를, 이번에는 **명령 한 줄로** 만든 것입니다.

**이제 정리 도구가 완성됐습니다.**

| 메모 | 명령 |
|---|---|
| 회의 메모 | `/meeting-notes inbox/회의-….txt` |
| 공부 필기 | `/study-notes inbox/공부-….txt` |
| 하루 회고 여러 개 | `/weekly-review` |

이름을 기억하지 못해도 괜찮습니다. "이번 주 회고 정리해 줘"처럼 말하면 Claude가 description을 보고 맞는 스킬을 골라 씁니다.[^what]

<Quiz id="ch407-run" />

## 플러그인과 커넥터

**플러그인**(Plugin)은 남이 만든 스킬·명령·도구를 묶음으로 설치하는 것이고, **커넥터**(Connector)는 Gmail·캘린더 같은 외부 서비스를 Claude에 연결하는 것입니다. 데스크톱 앱에서는 입력창 옆 **+** 버튼에서 커넥터와 플러그인을 추가합니다.[^plus] 커넥터는 MCP 서버를 화면에서 쉽게 설정하게 만든 것입니다.[^connectors]

편리하지만 **설치하기 전에 꼭 생각할 것**이 있습니다. 플러그인은 **내 컴퓨터에서 내 권한으로 코드를 실행**할 수 있습니다.[^plugin-risk] 그리고 이런 코드는 4장의 권한 모드가 지키는 범위 밖에서 돌기도 합니다. 권한 규칙은 Claude의 도구 호출에 적용되지, 플러그인이 스스로 돌리는 코드에는 적용되지 않습니다.[^plugin-scope]

- 만든 곳을 알 수 있고 믿을 만한 플러그인만 설치합니다.
- 필요 없어진 플러그인은 지웁니다.
- 커넥터로 연결한 서비스의 내용(메일·일정)도 Claude가 읽는 자료가 됩니다. 9장의 "숨은 지시"를 함께 읽으세요.

이 가이드의 정리 도구는 **내가 만든 스킬만으로** 충분합니다. 플러그인과 커넥터는 꼭 필요할 때 하나씩 늘리세요.

<Quiz id="ch407-plugins" />

## 직접 해 보기

1. 정리 스킬 3개를 만들어 달라고 하고, 허락 창이 뜨면 ②의 미리보기를 읽은 뒤 「한 번만 허용」을 고른다.
2. 새 세션에서 `/`를 치고 스킬 이름 일부를 쳐서 목록에 나오는지 본다.
3. `/study-notes`로 공부 필기를 정리하고, 5장 양식의 순서대로 나왔는지 확인한다.
4. 이름 없이 "이번 주 회고 정리해 줘"라고만 보내서, Claude가 weekly-review 스킬을 골라 쓰는지 본다.

**이어지는 과제**: 지금은 금요일마다 내가 직접 `/weekly-review`를 부릅니다. 8장에서는 이 일을 **예약**해 두는 방법과, 여러 정리를 동시에 돌리는 방법을 봅니다.

## 정리

- 스킬은 SKILL.md에 적은 절차다. 쓸 때만 읽히고, `/이름`이나 관련 요청으로 쓴다.
- 폴더의 `.claude/skills/<이름>/SKILL.md`는 그 폴더 전용 스킬이다. description이 "언제 쓰는지"를 정한다.
- `.claude` 폴더는 보호된 경로라 쓰기 전에 허락을 묻는다. 처음에는 「한 번만 허용」.
- 정리 도구 완성: `/meeting-notes`, `/study-notes`, `/weekly-review`.
- 플러그인은 내 권한으로 코드를 실행할 수 있다. 믿을 만한 것만, 필요할 때만 설치한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Skill | 스킬 | SKILL.md에 적어 두고 `/이름`으로 부르는 절차 |
| description | 디스크립션 | 스킬을 언제 쓸지 적은 설명. Claude가 이걸 보고 고른다 |
| Protected path | 프로텍티드 패스 (보호된 경로) | 쓰기 전에 늘 허락을 묻는 위치. `.claude` 폴더 등 |
| Plugin | 플러그인 | 스킬·명령·도구를 묶어 설치하는 확장 |
| Connector | 커넥터 | 외부 서비스를 Claude에 연결하는 것(MCP 서버 기반) |
| MCP | 엠씨피 | AI가 외부 도구·데이터에 연결하는 표준 방식 |

<ChapterDone :chapter="407" />

다음 장: 8장 「여러 일 동시에·클라우드·예약」은 준비 중입니다. 그동안 [3단계 목차](./)에서 앞으로 배울 내용을 볼 수 있습니다.

[^what]: Claude Code 공식 문서, 「Extend Claude with skills」. "Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name." https://code.claude.com/docs/en/skills (확인일 2026-10-31)
[^when]: Claude Code 공식 문서, 「Extend Claude with skills」. "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (확인일 2026-10-31)
[^where]: Claude Code 공식 문서, 「Extend Claude with skills」. 위치 표의 Project 행: "`.claude/skills/<skill-name>/SKILL.md`" https://code.claude.com/docs/en/skills (확인일 2026-10-31)
[^name]: Claude Code 공식 문서, 「Extend Claude with skills」. "The directory name, or the frontmatter name when you set one, becomes the command you type, and the description helps Claude decide when to load the skill automatically." https://code.claude.com/docs/en/skills (확인일 2026-10-31)
[^desc]: Claude Code 공식 문서, 「Extend Claude with skills」. "Only description is recommended so Claude knows when to use the skill." https://code.claude.com/docs/en/skills (확인일 2026-10-31)
[^slash]: Claude Code 공식 문서, 「Desktop application」. "type / in the prompt box or click the + button and select Slash commands to browse what's available." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^protected]: Claude Code 공식 문서, 「Choose a permission mode」. acceptEdits 절 "These still prompt:" 아래 "Writes to protected paths" https://code.claude.com/docs/en/permission-modes (확인일 2026-10-31)
[^plus]: Claude Code 공식 문서, 「Desktop application」. "Click the + button next to the prompt box for file attachments, skills, connectors, and plugins." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^connectors]: Claude Code 공식 문서, 「Desktop application」. "Connectors are MCP servers with a graphical setup flow." https://code.claude.com/docs/en/desktop (확인일 2026-10-31)
[^plugin-risk]: Claude Code 공식 문서, 「Plugin security and trust」. "A plugin can carry content that runs code on your machine with your user privileges and content that enters Claude's context as instructions, so review a plugin before you install it." https://code.claude.com/docs/en/plugins/security (확인일 2026-10-31)
[^plugin-scope]: Claude Code 공식 문서, 「Plugin security and trust」. "Claude Code's permission rules and sandbox cover the tool calls Claude makes, not the code a plugin runs by itself" https://code.claude.com/docs/en/plugins/security (확인일 2026-10-31)
