# 4장. 권한과 되돌리기 — 무엇을 맡기고, 어떻게 되돌리나

> **한 줄 요약**: 입력창 아래 **권한 메뉴**에서 Codex가 혼자 할 일과 물어볼 일을 정합니다. 처음에는 **Ask for approval**로 시작하세요.
> 되돌리기는 **Git**으로 합니다. Claude Code의 되감기 같은 기능은 공식 문서에서 찾지 못했습니다. 그래서 일을 맡기기 전후로 기록(커밋)을 남겨 두는 습관이 더 중요합니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서와 이 가이드의 실습을 바탕으로 썼습니다. 권한이 왜 필요한지는 [Claude Code 4장](../20-claude-code/04-permissions-undo.md)에서 설명했습니다.

## 권한 메뉴 세 가지

권한 메뉴는 **입력창 아래**에 있습니다.[^menu] 이 가이드의 화면에서는 처음부터 **Ask for approval**이 골라져 있었습니다. 모든 계정의 시작 값이 같은지는 확인하지 못했습니다. 메뉴에는 이런 이름이 들어갈 수 있습니다.[^names]

| 화면 이름 | 하는 일 | 언제 |
|---|---|---|
| Ask for approval | 폴더 안에서는 스스로, 밖으로 나가기 전에 묻기 | 대부분의 일 |
| Approve for me | 묻는 대신 자동 검토가 판단 | 익숙해진 뒤 |
| Full access | 제한 없이 실행 | 거의 쓰지 않음 |

출처: Codex 공식 문서(일부만 옮김)[^names]

공식 문서는 **대부분의 일은 Ask for approval로 시작하라**고 합니다.[^start] Claude Code의 「수동」보다는 한 걸음 더 맡기는 방식입니다. 폴더 **안**의 파일은 묻지 않고 고칩니다.

**Approve for me**를 골라도 Codex가 할 수 있는 범위는 넓어지지 않습니다. 바뀌는 것은 "누가 허락하느냐"뿐입니다.[^same-box] 자동 검토는 모델을 한 번 더 부르므로 사용량이 늘 수 있습니다.[^extra]

**Full access**는 파일과 인터넷의 경계를 모두 없앱니다. 공식 문서도 정말 전부 맡기고 싶을 때만 쓰라고 합니다.[^full] 메모 정리에는 필요 없습니다.

메뉴에 보인다고 골라진 것은 아닙니다. 대화마다 **지금 무엇이 골라져 있는지** 확인하세요.[^check]

<Quiz id="ch504-modes" />

## 울타리와 허락

권한은 두 장치로 움직입니다.[^two]

- **울타리**(샌드박스, Sandbox): 어떤 파일과 인터넷에 손댈 수 있는지
- **허락**(Approval): 언제 멈추고 물어볼지

기본 상태에서 Codex는 **인터넷이 꺼진 채** 일하고, 울타리는 보통 작업 폴더까지입니다.[^default] 폴더 밖 파일을 고치거나 인터넷에 접속하려면 허락이 필요합니다.[^auto]

**폴더 안이어도 보호되는 곳**이 있습니다. 작업 폴더 안의 `.git`·`.agents`·`.codex` 폴더는 기본 상태에서 읽기만 됩니다.[^protected] 5장에서 스킬을 넣을 `.agents` 폴더도 여기에 속합니다.

이 가이드에서 실제로 막혔습니다. 터미널에서 스킬을 `.agents/skills`로 복사해 달라고 하자, Codex는 "`.agents` 경로가 읽기 전용이라 복사가 차단됐다"고 답하고, 직접 칠 명령 두 줄을 알려 줬습니다. 막힌 이유와 대안을 함께 알려 주니, 무엇을 허락할지 내가 판단할 수 있었습니다.

<Quiz id="ch504-sandbox" />

## 바뀐 내용 보기

Codex는 바뀐 내용을 **리뷰 창**(review pane)에서 보여 줍니다. Claude Code의 「변경 사항」 칸에 해당합니다. 리뷰 창도 Git 저장소에서만 열립니다.[^review-git]

리뷰 창에는 **Codex가 고친 것만 있는 게 아닙니다.** 내가 직접 고친 것, 아직 기록하지 않은 다른 변경까지 모두 보입니다.[^includes] 그래서 일을 맡기기 전에 지금까지의 변경을 기록(커밋)해 두면, 리뷰 창에 Codex의 변경만 남아 보기 쉽습니다.

리뷰 창 위에서 보기 범위를 고를 수 있습니다. 기본은 아직 기록하지 않은 변경(**Unstaged**)이고, **Last turn**을 고르면 Codex의 마지막 답 한 번에서 바뀐 것만 봅니다.[^views] 처음에는 Last turn이 이해하기 쉽습니다.

마음에 안 드는 줄이 있으면 그 줄에 의견을 달 수 있습니다. 줄에 마우스를 올려 **+**를 누르고 의견을 적은 뒤, 입력창에 "줄 의견대로 고쳐 줘"처럼 보내면 됩니다.[^comments]

<Quiz id="ch504-review" />

## 되돌리기 — Git으로

리뷰 창에서 바로 되돌릴 수 있습니다.[^revert]

| 단위 | 어디서 |
|---|---|
| 전체 | 리뷰 창 위쪽의 Revert all |
| 파일 하나 | 그 파일의 되돌리기(revert) |
| 덩어리 하나 | 그 덩어리(hunk)의 되돌리기 |

출처: Codex 공식 문서(일부만 옮김)[^revert]

**Revert all은 조심하세요.** 리뷰 창에는 내가 고친 것까지 들어 있으니, 전부 되돌리면 내 변경도 사라질 수 있습니다.[^includes] 일부만 버릴 때는 파일이나 덩어리 단위로 되돌립니다.

Claude Code에는 대화를 앞으로 되감는 기능이 있었습니다([Claude Code 4장](../20-claude-code/04-permissions-undo.md)). **Codex 공식 문서에서는 같은 기능을 찾지 못했습니다.** 공식 문서는 대신 **일 전후로 Git 기록을 남기라**고 합니다.[^checkpoint] 자주 기록해 두면 조금씩 되돌릴 수 있습니다.[^often]

그래서 이 단계에서는 이런 순서를 습관으로 만듭니다.

1. 맡기기 전: "지금 상태를 기록해 줘"로 커밋한다.
2. 맡긴다.
3. 리뷰 창에서 Last turn으로 바뀐 것만 본다.
4. 좋으면 다시 기록하고, 아니면 되돌린다.

큰 일은 고치기 전에 계획부터 받으세요. 입력창에 `/plan`을 쓰면 Codex가 먼저 조사하고 방법을 제안합니다.[^plan] Claude Code 5장의 「계획」 모드와 같은 역할입니다.

<Quiz id="ch504-undo" />

## 직접 해 보기

1. 입력창 아래 권한 메뉴를 열어 무엇이 골라져 있는지 본다. Ask for approval이 아니면 바꾼다.
2. "지금 상태를 기록해 줘"로 커밋한다.
3. 2장의 회의록에 "상태 칸을 추가해 줘"라고 부탁한다.
4. 리뷰 창을 Last turn으로 보고 바뀐 줄을 확인한다.
5. 그 파일만 되돌려 본다.

**이어지는 과제**: 5장에서는 Claude Code에서 만든 스킬 3개를 Codex로 옮기고, `$weekly-review` 한 줄로 주간 회고를 만듭니다.

## 정리

- 권한 메뉴는 입력창 아래. 처음에는 Ask for approval로 시작한다.
- Approve for me는 허락하는 주체만 바꾼다. 범위는 넓어지지 않는다.
- 기본은 인터넷 꺼짐, 울타리는 작업 폴더. `.git`·`.agents`·`.codex`는 폴더 안이어도 보호된다.
- 리뷰 창은 내 변경까지 보여 준다. 맡기기 전에 기록해 두고, Last turn으로 본다.
- 되감기 대신 Git으로 되돌린다. 맡기기 전후로 기록을 남긴다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Sandbox | 샌드박스 | Codex가 손댈 수 있는 범위를 막는 울타리 |
| Approval | 어프루벌 | 울타리를 넘기 전에 받는 허락 |
| Review pane | 리뷰 페인 | 바뀐 내용을 보여 주는 창 |
| Revert | 리버트 | 바뀐 내용을 되돌리기 |
| Commit | 커밋 | 지금 상태를 Git에 기록하기 |

<ChapterDone :chapter="504" />

다음 장: [5장. 스킬 옮기기](05-skills.md)

[^menu]: Codex 공식 문서, 「Permissions」. "Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^names]: Codex 공식 문서, 「Sandbox」. "Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing (확인일 2026-11-01)
[^start]: Codex 공식 문서, 「Permissions」. "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^same-box]: Codex 공식 문서, 「Permissions」. "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^extra]: Codex 공식 문서, 「Agent approvals & security」. "Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^full]: Codex 공식 문서, 「Sandbox」. "This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing (확인일 2026-11-01)
[^check]: Codex 공식 문서, 「Permissions」. "Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^two]: Codex 공식 문서, 「Permissions」. "The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes (확인일 2026-11-01)
[^default]: Codex 공식 문서, 「Agent approvals & security」. "By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^auto]: Codex 공식 문서, 「Agent approvals & security」. "Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^protected]: Codex 공식 문서, 「Agent approvals & security」. "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^review-git]: Codex 공식 문서, 「Code review」. "The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^includes]: Codex 공식 문서, 「Code review」. "It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^views]: Codex 공식 문서, 「Code review」. "By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^comments]: Codex 공식 문서, 「Code review」. "Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^revert]: Codex 공식 문서, 「Code review」. "**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^checkpoint]: Codex 공식 문서, 「Codex CLI」. "Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli (확인일 2026-11-01)
[^often]: Codex 공식 문서, 「Agent approvals & security」. "Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security (확인일 2026-11-01)
[^plan]: Codex 공식 문서, 「Prompting」. "For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting (확인일 2026-11-01)
