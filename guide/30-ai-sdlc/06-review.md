# 6장. PR과 리뷰 — 합치기 전에 한 번 더 보기

> **한 줄 요약**: **PR**(Pull Request)은 내 브랜치의 변경을 `main`에 합치자고 **제안하는** 것입니다. 합치기 전에 논의하고 검토할 자리를 줍니다.
> 혼자 만들어도 리뷰는 합니다. AI 리뷰(`/code-review`)도 받되, **"문제 없음"이 안전하다는 뜻은 아니고 합칠지는 내가 정합니다.**

이 장은 2026년 11월 1일에 확인한 GitHub·Claude Code 공식 문서를 바탕으로 썼습니다.

## PR이란

**PR**은 한 브랜치의 변경을 다른 브랜치에 합치자고 제안하는 것입니다. 프로젝트에 들어가기 전에 논의하고 검토할 자리를 줍니다.[^pr]

PR 화면에는 이런 탭이 있습니다.[^tabs]

| 탭 | 보여 주는 것 |
|---|---|
| Conversation | 설명·댓글·리뷰 |
| Commits | 브랜치가 바뀐 과정 |
| Checks | 자동 테스트·빌드 결과(5장) |
| Files changed | 리뷰어가 의견을 다는 바뀐 내용 |

출처: GitHub 공식 문서(일부만 옮김)[^tabs]

PR을 만들 때는 **무엇을 바꿨고 어떤 문제를 푸는지** 적습니다. 8장의 이슈를 해결하는 PR이라면 이슈와 연결하고, 정해진 단어로 연결하면 PR이 합쳐질 때 이슈가 자동으로 닫힙니다.[^describe]

**작은 PR이 리뷰하기 쉽고 합치기 안전합니다.** 남에게 리뷰를 부탁하기 전에 먼저 스스로 검토합니다. 바뀐 내용을 읽고, 실수로 바꾼 것이 없는지 보고, 빌드와 테스트가 돌았는지 확인합니다.[^small]

Claude Code에게 PR을 만들어 달라고 할 수도 있습니다. 공식 문서는 제출하기 전에 Claude가 만든 PR을 검토하고, **위험한 점을 짚어 달라고** 하라고 권합니다.[^risks]

```
first-board 브랜치로 PR을 만들어 줘. 제출하기 전에, 이 변경에서 위험할 수 있는 점을 먼저 짚어 줘.
```

<Quiz id="ch706-pr" />

## 혼자여도 리뷰한다

GitHub 튜토리얼은 **혼자 일해도** 합치기 전에 의도적으로 리뷰하는 습관이 프로젝트를 건강하게 하고, 나중의 협업을 쉽게 한다고 말합니다.[^alone]

리뷰는 세 가지 결정 중 하나로 끝납니다.[^decisions]

| 결정 | 뜻 |
|---|---|
| Comment | 의견만 남김 |
| Approve | 합칠 준비가 됨 |
| Request changes | 합치기 전에 고쳐야 함 |

출처: GitHub 공식 문서[^decisions]

리뷰의 기준은 3장의 **SPEC.md**입니다. 공식 모범 사례는 다 만든 뒤 **SPEC.md와 대조해** 모든 요구가 구현됐는지 확인하게 하고, 정확성에 영향을 주는 빈틈만 보고하고 **스타일은 건너뛰라**고 합니다.[^against-spec] 이유도 적혀 있습니다. 문제를 찾으라고 하면 리뷰어는 **늘 무언가를 찾아냅니다.**[^always-finds] 그걸 다 고치다 보면 쓸데없는 군더더기가 생깁니다.

```
새 세션에서 지금 브랜치의 변경을 SPEC.md와 대조해 리뷰해 줘. 요구가 다 구현됐는지, 확인 기준마다 검사가 있는지 보고, 정확성에 영향을 주는 빈틈만 알려 줘. 스타일은 건너뛰어.
```

<Quiz id="ch706-review" />

## AI에게 리뷰받기

Claude Code에는 리뷰 명령 `/code-review`가 있습니다. 작업 중인 세션에서 치면, 내 브랜치의 변경을 읽고 정확성 문제를 찾아 대화로 알려 줍니다.[^local] 사용량은 세션의 나머지와 똑같이 내 요금제에서 계산됩니다.[^usage]

데스크톱 앱에서는 커밋하기 전에 입력창에 `/code-review`를 쳐서 리뷰를 받을 수 있습니다.[^desktop-review] PR을 연 뒤에는 세션 정보 패널에서 PR과 자동 검사 상태를 볼 수 있습니다. 이 기능은 GitHub CLI(`gh`)가 설치되고 로그인돼 있어야 합니다.[^monitor]

**AI 리뷰에는 분명한 한계가 있습니다.**

- AI 리뷰는 버그나 보안 문제를 놓칠 수 있습니다. **발견이 없다고 오류가 없거나 안전하다는 뜻은 아닙니다.**[^miss]
- GitHub PR에 자동으로 다는 관리형 리뷰도 PR을 승인하거나 막지 않습니다. **합칠지는 사람이 정합니다.**[^decide] 이 관리형 리뷰는 Team·Enterprise 요금제용이고, 개인은 어느 요금제에서나 `/code-review`를 씁니다.[^plans]

3단계에서 "쓴 사람과 확인하는 사람을 나눈다"를 배웠다면, 같은 Claude라도 **새 세션**에서 리뷰하게 하는 편이 낫습니다. 만든 대화의 맥락에 끌려가지 않기 때문입니다.

<Quiz id="ch706-ai-review" />

## 합치고 정리하기

리뷰를 마치고 확인 장치가 통과하면 PR을 **합칩니다**(Merge). GitHub flow의 마지막은 브랜치를 지우는 것입니다. 브랜치를 지워도 **PR과 커밋 기록은 지워지지 않으니** 걱정하지 않아도 됩니다.[^delete]

나중에 사람이 늘어나면 "승인이 있어야 합칠 수 있다" 같은 **보호 규칙**을 걸 수 있습니다. 보호 규칙은 기본으로 강제 덮어쓰기와 브랜치 삭제를 막습니다.[^protect]

<Quiz id="ch706-merge" />

## 직접 해 보기

1. `first-board` 브랜치를 GitHub에 올리고(푸시), PR을 만든다. 설명에 무엇을 왜 바꿨는지 적는다.
2. 만들기 전에 Claude에게 위험한 점을 짚어 달라고 한다.
3. 새 세션에서 SPEC.md와 대조한 리뷰를 받는다. 정확성 문제만 고친다.
4. `/code-review`를 한 번 더 받고, 발견이 없어도 직접 Files changed 탭을 훑어본다.
5. 확인 장치가 통과하면 PR을 합치고, 브랜치를 정리한다.

**이어지는 과제**: 7장에서는 합친 할 일 보드를 GitHub Pages로 인터넷에 공개합니다.

## 정리

- PR은 합치기 전에 논의하고 검토하는 자리다. 작게 만들고, 무엇을 왜 바꿨는지 적고, 먼저 스스로 검토한다.
- 혼자여도 리뷰한다. 기준은 SPEC.md, 정확성 빈틈만 고치고 스타일은 건너뛴다.
- `/code-review`는 어느 요금제에서나 쓴다. 발견이 없다고 안전한 것은 아니고, 합칠지는 사람이 정한다.
- 합친 뒤 브랜치를 지워도 PR과 커밋 기록은 남는다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Pull Request(PR) | 풀 리퀘스트 | 브랜치의 변경을 합치자는 제안 |
| Review | 리뷰 | 합치기 전에 변경을 검토하기 |
| Merge | 머지 | 브랜치의 변경을 합치기 |
| `/code-review` | 코드 리뷰 | Claude Code의 리뷰 명령 |

<ChapterDone :chapter="706" />

다음 장: [7장. 배포](07-deploy.md)

[^pr]: GitHub 공식 문서, 「About pull requests」. "A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (확인일 2026-11-01)
[^tabs]: GitHub 공식 문서, 「About pull requests」. "**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (확인일 2026-11-01)
[^describe]: GitHub 공식 문서, 「GitHub flow」. "When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow (확인일 2026-11-01)
[^small]: GitHub 공식 문서, 「Helping others review your changes」. "Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes (확인일 2026-11-01)
[^risks]: Claude Code 공식 문서, 「Common workflows」. "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-01)
[^alone]: GitHub 공식 문서, 「Reviewing your proposed changes」. "Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (확인일 2026-11-01)
[^decisions]: GitHub 공식 문서, 「Quickstart for reviewing pull requests」. "**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart (확인일 2026-11-01)
[^against-spec]: Claude Code 공식 문서, 「Best practices for Claude Code」. "use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^always-finds]: Claude Code 공식 문서, 「Best practices for Claude Code」. "A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^local]: Claude Code 공식 문서, 「Review locally with /code-review」. "Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local (확인일 2026-11-01)
[^usage]: Claude Code 공식 문서, 「Review locally with /code-review」. "The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local (확인일 2026-11-01)
[^desktop-review]: Claude Code 공식 문서, 「Desktop application」. "To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop (확인일 2026-11-01)
[^monitor]: Claude Code 공식 문서, 「Desktop application」. "After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop (확인일 2026-11-01)
[^miss]: Claude Code 공식 문서, 「Code Review」. "Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review (확인일 2026-11-01)
[^decide]: Claude Code 공식 문서, 「Code Review」. "A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review (확인일 2026-11-01)
[^plans]: Claude Code 공식 문서, 「Code Review」. "**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review (확인일 2026-11-01)
[^delete]: GitHub 공식 문서, 「GitHub flow」. "Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow (확인일 2026-11-01)
[^protect]: GitHub 공식 문서, 「About protected branches」. "By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches (확인일 2026-11-01)
