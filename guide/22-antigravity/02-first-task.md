# 2장. 앱 설치와 첫 정리 — 폴더를 프로젝트로 열기

> **한 줄 요약**: Antigravity 앱을 설치하고 Google 계정으로 로그인한 뒤, 정리도구 폴더를 **프로젝트**로 엽니다.
> 처음에는 **Planning mode**(먼저 계획)로 맡기고, 계획을 읽은 뒤 **Proceed**로 진행합니다.

이 장은 2026년 11월 1일에 확인한 Antigravity 공식 문서를 바탕으로 썼습니다. **이 가이드는 아직 앱 화면으로 실습하지 못했습니다.** 화면 이름은 공식 문서의 영어 이름을 그대로 적었고, 내 화면과 다르면 화면을 따르세요. 실제 실행 결과는 3장(터미널로 실행)에 있습니다.

## 설치하고 로그인하기

1. [antigravity.google/download](https://antigravity.google/download)에서 내 컴퓨터용 설치 파일을 받습니다. macOS라면 `Antigravity.dmg`를 열고 **Applications** 폴더로 끌어 넣습니다.[^dmg]
2. 앱을 열고 **Sign in**을 누릅니다. 브라우저가 열리면 개인 Google 계정으로 로그인합니다.[^signin]

로그인한 계정의 요금제(무료·Pro·Ultra)에 따라 사용량과 모델이 정해집니다([1장](01-what-is.md)).

<Quiz id="ch602-install" />

## 폴더를 프로젝트로 열기

Antigravity 앱의 에이전트는 **프로젝트**(Projects) 안에서 일합니다. 프로젝트는 에이전트가 손댈 수 있는 폴더 범위와 권한을 정합니다.[^projects]

1. 왼쪽 사이드바의 **New Project** 아이콘(더하기가 붙은 폴더)을 누릅니다.[^new-project]
2. **Add Folder**로 정리도구 폴더를 고릅니다. Git 저장소가 아닌 일반 폴더도 됩니다.[^new-project]

첫 지시를 보낼 때 일하는 방식을 고릅니다.[^modes]

| 이름 | 하는 일 |
|---|---|
| Local mode | 지금 폴더에서 바로 일하기 |
| New worktree mode | 따로 떼어 낸 Git 작업 공간에서 일하기 |

출처: Antigravity 공식 문서[^modes]

정리도구에는 **Local mode**로 충분합니다. New worktree mode는 Git 저장소에서만 쓰는 방식입니다.[^worktree]

새 프로젝트는 처음에 **Inherit Global** 권한으로 시작하고, 프로젝트 폴더 전부를 읽고 쓸 수 있습니다.[^inherit] 권한은 4장에서 다룹니다.

<Quiz id="ch602-project" />

## 계획부터 받고 진행하기

새 대화를 시작할 때 두 가지 방식 중 하나를 고릅니다.[^planning]

| 이름 | 하는 일 | 언제 |
|---|---|---|
| Planning mode | 먼저 계획을 세우고 실행 | 처음 맡기는 일 |
| Fast mode | 계획 없이 바로 실행 | 이름 바꾸기 같은 작은 일 |

출처: Antigravity 공식 문서(일부만 옮김)[^planning]

처음에는 **Planning mode**를 권합니다. 계획서(Implementation plan)가 나오면 읽어 보고, 괜찮으면 대화나 계획서 위쪽의 **Proceed**를 눌러 진행합니다.[^proceed] Claude Code 5장의 「계획」 모드, Codex 4장의 `/plan`과 같은 역할입니다.

설정의 **Agent** 탭에서 검토 방식을 고를 수 있습니다. **Request review**는 계획이나 바뀐 내용을 만들면 멈추고 내 승인을 기다립니다.[^review-mode] 반대로 Always proceed는 멈추지 않고 바로 실행합니다.[^always] 처음에는 Request review가 안전합니다.

일을 마치면 에이전트가 **정리 보고**(Walkthrough)를 만들어 무엇이 바뀌었는지 요약합니다.[^walkthrough]

<Quiz id="ch602-plan" />

## 첫 정리 맡기기

앞의 두 도구와 같은 요청을 보냅니다.

```
inbox/회의-2026-10-27-주간회의.txt 메모를 회의록으로 정리해서 notes/ 폴더에 새 파일로 저장해 줘.
```

파일을 짚어 주고 싶으면 `@`를 쳐서 고를 수도 있습니다. 파일을 짚어도 내용이 붙여 넣어지는 것이 아니라, 에이전트에게는 파일 경로가 전달되고 필요할 때 그 파일을 읽습니다.[^mention]

같은 요청을 이 가이드가 터미널(`agy`)로 실행한 결과는 [3장](03-rules-skills.md)에 있습니다. 앱과 터미널은 같은 에이전트를 씁니다([1장](01-what-is.md)).

**결과를 원본과 맞춰 보세요.** 할 일 5개가 다 옮겨졌나? 담당과 기한이 메모와 같나? 메모에 없는 내용을 지어내지 않았나?

<Quiz id="ch602-first" />

## 바뀐 내용 보기

앱의 **Review** 창은 프로젝트 Git 저장소의 변경을 보여 줍니다.[^review] 기본 보기는 아직 기록하지 않은 모든 변경(**Uncommitted**)이라, 내가 고친 것도 함께 보입니다. **Agent Edits**를 고르면 이 대화에서 에이전트가 고친 파일만 봅니다.[^views]

Review 창이 Git 저장소의 변경을 보여 주므로, 정리도구 폴더도 Git 저장소로 만들어 두면 편합니다. Claude Code 3장이나 Codex 2장을 따라 했다면 이미 Git 저장소입니다. Git이 아닌 폴더에서 Review 창이 어떻게 보이는지는 공식 문서에 나오지 않습니다.

<Quiz id="ch602-review" />

## 직접 해 보기

1. 앱을 설치하고 로그인한다.
2. New Project → Add Folder로 정리도구 폴더를 연다.
3. Planning mode로 위의 요청을 보내고, 계획을 읽은 뒤 Proceed를 누른다.
4. 결과 회의록을 원본 메모와 맞춰 보고, Review 창에서 바뀐 파일을 확인한다.

**이어지는 과제**: 3장에서는 규칙(`AGENTS.md`)과 스킬을 옮기지 않아도 지키는지 시험합니다.

## 정리

- 앱은 Sign in → 개인 Google 계정으로 로그인한다.
- New Project → Add Folder로 폴더를 프로젝트로 연다. 일반 폴더도 된다.
- 처음에는 Planning mode와 Request review로 계획을 읽고 Proceed한다.
- Review 창은 Git 변경을 보여 준다. Agent Edits로 에이전트 변경만 볼 수 있다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Project | 프로젝트 | 에이전트가 일하는 폴더와 권한의 묶음 |
| Planning mode | 플래닝 모드 | 계획을 먼저 세우고 실행하는 방식 |
| Implementation plan | 임플리멘테이션 플랜 | 에이전트가 만든 작업 계획서 |
| Walkthrough | 워크스루 | 일을 마친 뒤의 정리 보고 |

<ChapterDone :chapter="602" />

다음 장: [3장. 규칙과 스킬 — 옮기지 않아도 된다](03-rules-skills.md)

[^dmg]: Antigravity 공식 문서, 「Get started」. "Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^signin]: Antigravity 공식 문서, 「Authenticate」. "Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install (확인일 2026-11-01)
[^projects]: Antigravity 공식 문서, 「Get started」. "Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^new-project]: Antigravity 공식 문서, 「Get started」. "Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^modes]: Antigravity 공식 문서, 「Get started」. "**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started (확인일 2026-11-01)
[^worktree]: Antigravity 공식 문서, 「Projects」. "**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects (확인일 2026-11-01)
[^inherit]: Antigravity 공식 문서, 「Projects」. "**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects (확인일 2026-11-01)
[^planning]: Antigravity 공식 문서, 「Artifact review」. "**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review (확인일 2026-11-01)
[^proceed]: Antigravity 공식 문서, 「Implementation plan」. "You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan (확인일 2026-11-01)
[^review-mode]: Antigravity 공식 문서, 「Artifact review」. "You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review (확인일 2026-11-01)
[^always]: Antigravity 공식 문서, 「Artifact review」. "The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review (확인일 2026-11-01)
[^walkthrough]: Antigravity 공식 문서, 「Walkthrough」. "The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough (확인일 2026-11-01)
[^mention]: Antigravity 공식 문서, 「Mentions and quoting」. "Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions (확인일 2026-11-01)
[^review]: Antigravity 공식 문서, 「Review changes」. "In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes (확인일 2026-11-01)
[^views]: Antigravity 공식 문서, 「Review changes」. "| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes (확인일 2026-11-01)
