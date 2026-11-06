# 9장. 스킬과 확장

> **한 줄 요약**: 자꾸 반복하는 지시는 스킬로 만듭니다. 곁일은 서브에이전트, 바깥 서비스는 MCP, 묶음 설치는 플러그인입니다. 처음에는 스킬 하나면 충분합니다.

이 장의 화면은 2026년 11월 6일 리눅스에서 Claude Code 2.1.318로 실행한 결과입니다.

## 스킬 만들기

**스킬**(Skill)은 `SKILL.md` 파일 하나로 Claude에게 일하는 절차를 더해 주는 기능입니다. 같은 지시를 채팅에 자꾸 붙여 넣고 있다면 만들 만합니다.[^skill] 이름을 불러 쓰는 작업 설명서라고 보면 됩니다.

프로젝트 스킬은 `.claude/skills/<스킬이름>/SKILL.md`에 둡니다.[^skill] `/exit`로 나와 터미널에서 연습 폴더로 이동합니다. 맥과 리눅스는 아래를 통째로 붙여 넣습니다(파일로 보기: [9장-스킬-meeting-notes.txt](/practice/cli/results/9장-스킬-meeting-notes.txt)).

```bash
mkdir -p .claude/skills/meeting-notes
cat > .claude/skills/meeting-notes/SKILL.md <<'EOF'
---
description: 회의 메모를 규칙에 맞는 회의록으로 정리한다. 회의 메모를 정리해 달라는 요청에 쓴다.
---

$ARGUMENTS 파일을 읽고 CLAUDE.md 규칙대로 회의록을 만든다.
파일 이름은 `회의록-날짜.md` 로 하고 notes 폴더에 저장한다.
끝나면 저장한 파일 이름과 할 일 개수를 한 줄로 알려 준다.
EOF
```

붙여 넣은 뒤 아직 실행되지 않았으면 Enter를 한 번 더 누르세요. 아무것도 안 나오면 성공입니다. `ls .claude/skills/meeting-notes`로 `SKILL.md`가 생겼는지 보세요.

Windows PowerShell은 `mkdir .claude\skills\meeting-notes` 뒤에 `notepad .claude\skills\meeting-notes\SKILL.md`로 메모장을 엽니다. `cat`으로 시작하는 줄과 `EOF` 줄은 빼고 그 사이만 넣습니다. 새 파일을 만들지 물으면 `예`를 누르고, `Ctrl + S`로 저장하고 닫습니다. 이 방법은 실행해 보지 않았습니다.

파일은 `---` 사이의 설정과 그 아래 지시문, 두 부분입니다.[^skill]

- **폴더 이름** `meeting-notes`가 내가 칠 명령 이름이 됩니다.[^skill]
- **description** 은 Claude가 이 스킬을 언제 불러올지 정하는 근거입니다.[^skill]
- **`$ARGUMENTS`** 는 빈칸입니다. 스킬을 부를 때 넘긴 글자가 여기로 들어갑니다.[^arguments] 실습에서는 명령 뒤에 쓴 파일 경로가 들어가 그 메모를 정리했습니다. 그래서 같은 스킬로 다른 메모도 정리할 수 있습니다.

```text
아쉬운 description: 회의
나은 description:   회의 메모를 규칙에 맞는 회의록으로 정리한다. 회의 메모를 정리해 달라는 요청에 쓴다.
```

나은 예는 무슨 일을 하는지와 언제 쓰는지를 함께 말합니다. Claude가 알맞은 때를 알아채기 쉽습니다.

이제 터미널에서 `claude`를 켜고 `/`를 쳐서 목록에서 찾아보세요. 직접 부를 때는 이렇게 칩니다.

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

같은 스킬을 [10장](10-headless-automation.md)의 `claude -p`로 불렀더니 `notes/회의록-2026-10-27.md`가 만들어졌고 Claude가 이렇게 답했습니다.

```text
`notes/회의록-2026-10-27.md`에 저장했고 할 일은 5개입니다.
```

[8장](08-memory-settings.md)의 `CLAUDE.md` 규칙대로 결정 사항, 할 일, 다음 회의 세 절이 나왔습니다([결과 보기](/practice/cli/results/10장-회의록-스크립트로.txt)). 스킬 본문은 쓸 때만 불러오므로 평소에는 부담이 거의 없습니다.[^skill]

<Quiz id="ch809-skill" />

## 스킬이 안 먹힐 때

잘못 써도 오류가 나지 않는 경우가 있습니다. 목록에 없거나 동작이 이상하면 이 순서로 보세요.

1. 폴더 이름이 내가 친 명령과 같은가?
2. 위치가 `.claude/skills/meeting-notes/SKILL.md`인가?
3. 파일의 맨 첫 줄이 `---`인가? 첫 줄일 때만 설정이 읽힙니다.[^skill-debug]
4. 설정 칸 이름의 철자가 맞나? 틀리면 오류 없이 무시됩니다.[^skill-debug]
5. `claude`를 켠 폴더가 연습 폴더인가? `pwd`로 확인합니다.

세션 도중 고친 내용은 재시작 없이 반영됩니다. 다만 세션을 켤 때 없던 스킬 폴더를 새로 만들었다면 `/reload-skills`를 실행합니다.[^skill-debug]

<Quiz id="ch809-debug" />

## 서브에이전트

**서브에이전트**(Subagent)는 특정 종류의 일을 맡는 전문 도우미입니다. 자기만의 맥락 창에서 일하고 요약만 돌려줍니다. 그래서 검색 결과나 로그로 내 대화가 어지러워지지 않습니다.[^sub] 보조 직원에게 자료 조사를 맡기고 결론만 듣는 것과 비슷합니다.

옛날 글에는 `/agents` 화면에서 만들라고 나올 수 있습니다. 지금은 그 마법사가 없어졌습니다. `/agents`를 치면 Claude에게 부탁하거나 파일을 직접 고치라는 안내 글자만 나옵니다.[^sub]

가장 쉬운 방법은 Claude에게 부탁하는 것입니다.[^sub] "회의록이 원본 메모와 맞는지 대조하는 서브에이전트를 이 프로젝트에 만들어 줘."처럼 말하면 됩니다. 새로 만든 것을 못 찾으면 Claude Code를 재시작해 보세요.[^sub] 이 가이드에서 서브에이전트를 직접 만들어 보지는 않았습니다.

서브에이전트의 요청도 내 대화와 같은 사용량 한도에 합산됩니다.[^sub] 작은 일이라면 그냥 부탁하는 편이 낫습니다.

<Quiz id="ch809-subagent" />

## MCP

**MCP**(Model Context Protocol)는 Claude Code가 기본 도구 밖의 일을 하게 해 줍니다. 이슈 검색, 데이터베이스 조회, 브라우저 조작 같은 일입니다.[^mcp] Claude에게 바깥 서비스로 가는 연결선을 꽂아 주는 일이라고 보면 됩니다.

명령을 치는 곳이 둘로 나뉩니다. `claude mcp add`는 `claude`를 켜기 전의 터미널(셸)에서 칩니다. `/mcp`는 세션 안에서 이미 추가한 서버를 확인할 때 칩니다.[^mcp] 공식 문서의 예시 서버로 추가, 확인, 삭제를 해 봤습니다.

```bash
claude mcp add --transport http claude-code-docs https://code.claude.com/docs/mcp
claude mcp list
claude mcp remove claude-code-docs
```

첫 줄을 끊어 읽어 봅니다.

- `claude mcp add`: MCP 서버를 추가합니다.
- `--transport http`: 인터넷으로 연결하는 서버라는 뜻입니다.
- `claude-code-docs`: 내가 붙이는 서버 이름입니다.
- `https://…`: 서버 주소입니다.

`list`는 목록을 보고, `remove` 뒤에는 지울 서버 이름을 씁니다. 세 명령을 실행하면 차례로 이런 줄이 나옵니다.

```text
Added HTTP MCP server claude-code-docs with URL: https://code.claude.com/docs/mcp to local config
claude-code-docs: https://code.claude.com/docs/mcp (HTTP) - ✔ Connected
Removed MCP server "claude-code-docs" from local config
```

`✔ Connected`가 연결됐다는 표시입니다. 기본 범위 `local`은 나만, 이 프로젝트에서만 쓴다는 뜻입니다.[^mcp]

**믿을 수 있는 서버만 연결하세요.** 바깥 내용을 가져오는 서버는 프롬프트 인젝션 위험에 노출될 수 있습니다.[^mcp-trust] Anthropic이 MCP 서버를 보안 점검해 주는 것도 아닙니다.[^mcp-audit] 누가 만들었는지 모르는 서버는 추가하지 마세요.

<Quiz id="ch809-mcp" />

## 플러그인

**플러그인**(Plugin)은 스킬, 에이전트, 훅, MCP 서버 등을 한 묶음으로 설치하는 폴더입니다. 앞의 것들은 플러그인 없이도 따로 쓸 수 있습니다. 여러 개를 묶어서 쓰고 싶을 때만 필요합니다.[^plugin]

세션 안에서 `/plugin`을 치면 Discover 탭에서 플러그인을 고를 수 있습니다.[^plugin] 설치 명령은 `/plugin install commit-commands@claude-plugins-official` 같은 모양입니다. 세션에서 치면 바로 설치되지 않고 상세 화면이 먼저 열립니다.[^plugin-install] 이 가이드에서는 설치까지 실행해 보지 않았습니다.

**플러그인은 내 권한으로 실행됩니다.** 어떤 출처든 설치한 플러그인은 내 사용자 권한으로 코드를 실행할 수 있습니다.[^plugin] 그래서 설치 전에 상세 화면을 읽어야 합니다.[^plugin-install] 내가 직접 실행하는 프로그램처럼 대하세요.

켜 둔 플러그인은 쓰지 않는 세션에서도 그 세션의 일부가 됩니다.[^plugin] 안 쓰면 `/plugin`의 Installed 탭에서 끄거나 지우세요.[^plugin-install]

<Quiz id="ch809-plugin" />

## 언제 무엇을 쓰나

| 이럴 때 | 쓸 것 |
|---|---|
| 늘 지킬 규칙이 있다 | `CLAUDE.md` |
| 같은 절차를 반복한다 | 스킬 |
| 큰 곁일을 떼어 맡긴다 | 서브에이전트 |
| 바깥 서비스를 쓴다 | MCP |
| 여러 개를 묶어 받는다 | 플러그인 |
| 매번 꼭 실행돼야 한다 | 훅([11장](11-hooks-statusline.md)) |

다 설치할 필요는 없습니다. 먼저 스스로 물어보세요. 지금 불편한 일이 있나? 없다면 아직 만들지 않아도 됩니다.

<Quiz id="ch809-choose" />

## 직접 해 보기

1. 터미널에서 스킬을 만듭니다. `claude`를 켜고 `/`를 쳐서 `meeting-notes`가 보이는지 확인합니다.
2. `/meeting-notes inbox/회의-2026-10-27-주간회의.txt`를 실행합니다. `notes`에 파일이 생겼나요? 내용이 메모와 맞나요?
3. `/exit`로 나와 터미널에서 `claude mcp` 세 명령을 차례로 칩니다. 지워졌는지 `claude mcp list`로 확인합니다.

스스로 물어보세요. 같은 스킬로 다른 메모도 정리할 수 있겠나? 지금 내게 꼭 필요한 확장이 있나?

## 정리

- 스킬은 `.claude/skills/<이름>/SKILL.md` 하나로 만든다. 폴더 이름이 명령 이름이다.
- 안 먹히면 폴더 이름, 첫 줄의 `---`, 칸 이름의 철자를 본다.
- `/agents` 마법사는 없어졌다. 서브에이전트는 Claude에게 부탁하거나 파일로 만든다.
- `claude mcp add` 등은 셸에서, `/mcp`는 세션 안에서 친다.
- MCP 서버와 플러그인은 믿을 수 있는 것만 쓴다. 플러그인은 내 권한으로 실행된다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Skill | 스킬 | 이름으로 불러 쓰는 작업 설명서 |
| Subagent | 서브에이전트 | 자기 맥락에서 곁일을 맡는 도우미 |
| MCP | 엠씨피 | 바깥 도구를 연결하는 방식 |
| Plugin | 플러그인 | 여러 확장을 묶은 설치 단위 |

<ChapterDone :chapter="809" />

다음 장: [10장. 한 줄 실행과 자동화](10-headless-automation.md)

[^skill]: Claude Code 공식 문서, 「Extend Claude with skills」. "Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit." / "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." / "Commit it so your team gets it too" / "Every skill needs a `SKILL.md` file with two parts: YAML frontmatter between `---` markers that tells Claude when to use the skill, and markdown content with the instructions Claude follows when the skill runs." / "The directory name, or the frontmatter `name` when you set one, becomes the command you type, and the `description` helps Claude decide when to load the skill automatically." / "Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (확인일 2026-11-06)
[^skill-debug]: Claude Code 공식 문서, 「Extend Claude with skills」. "Claude Code reads the frontmatter only when the opening `---` is the file's first line." / "Claude Code ignores a field it doesn't recognize without reporting an error." / "When you add, edit, or remove a skill under `~/.claude/skills/`, the project `.claude/skills/`, or a `.claude/skills/` inside an `--add-dir` directory, Claude Code picks up the change within the current session, without a restart." / "Claude Code isn't watching that directory yet, so run `/reload-skills` again after each later change there." https://code.claude.com/docs/en/skills (확인일 2026-11-06)
[^sub]: Claude Code 공식 문서, 「Create custom subagents」. "Subagents are specialized AI assistants that handle specific types of tasks." / "Use one when a side task would flood your main conversation with search results, logs, or file contents you won't reference again: the subagent does that work in its own context and returns only the summary." / "Running `/agents` prints a reminder to ask Claude or edit `.claude/agents/` and `~/.claude/agents/` directly." / "To create one, ask Claude to write it for you, or write the file yourself." / "If Claude can't find the new subagent, restart Claude Code and try again." / "It also sends its own requests, which count toward the same usage limits as your main conversation." https://code.claude.com/docs/en/sub-agents (확인일 2026-11-06)
[^mcp]: Claude Code 공식 문서, 「Connect to MCP servers」. "lets Claude Code use tools beyond its built-in set, such as searching an issue tracker, querying a database, or controlling a web browser." / "Run this in your terminal, not inside a `claude` session: you're configuring the server before starting a conversation." / "Inside a `claude` session, use the `/mcp` command to check and manage servers you've already added." / "By default it registers the server at `local` scope: private to you, active only in the current project." https://code.claude.com/docs/en/mcp-quickstart (확인일 2026-11-06)
[^mcp-trust]: Claude Code 공식 문서, 「Connect Claude Code to tools via MCP」. "Verify you trust each server before connecting it." / "Servers that fetch external content can expose you to prompt injection risk." https://code.claude.com/docs/en/mcp (확인일 2026-11-06)
[^mcp-audit]: Claude Code 공식 문서, 「Security」. "Anthropic reviews connectors against its listing criteria before adding them to the Anthropic Directory, but does not security-audit or manage any MCP server." https://code.claude.com/docs/en/security (확인일 2026-11-06)
[^plugin]: Claude Code 공식 문서, 「Plugins overview」. "A Claude Code plugin is a directory of skills, agents, hooks, MCP servers, or other components that Claude Code installs and loads as one unit." / "Skills, subagents, hooks, and MCP servers all work on their own, without a plugin." / "To try a plugin now, run `/plugin` in a Claude Code terminal session and install one from the Discover tab, which lists the plugins from your marketplaces." / "Whatever the tier, a plugin you install can run code with your user privileges." / "An enabled plugin is part of every session, not only the sessions where you use it." https://code.claude.com/docs/en/plugins/overview (확인일 2026-11-06)
[^plugin-install]: Claude Code 공식 문서, 「Install and manage plugins」. "/plugin install commit-commands@claude-plugins-official" / "In a session, this command doesn't install right away: it opens the `/plugin` panel on that plugin's details so you can review it and choose a scope first." / "A plugin can run hooks and MCP servers, so read the pane before you install." / "The Installed tab in `/plugin` lists your plugins with actions to enable, disable, update, or uninstall each one." https://code.claude.com/docs/en/plugins/install (확인일 2026-11-06)
[^arguments]: Claude Code 공식 문서, 「Extend Claude with skills」. "All arguments passed when invoking the skill." https://code.claude.com/docs/en/skills (확인일 2026-11-06)
