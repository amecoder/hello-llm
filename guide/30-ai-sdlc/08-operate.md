# 8장. 운영과 개선 — 이슈로 다음 바퀴 돌기

> **한 줄 요약**: 공개한 뒤에 떠오른 개선점과 버그는 **이슈**(Issue)로 적어 둡니다. 이슈 하나가 다음 바퀴의 기획이 됩니다.
> PR에 `fixes #번호`처럼 정해진 단어를 쓰면, PR을 합칠 때 그 이슈가 **자동으로 닫힙니다.** 기획과 운영이 이렇게 이어집니다.

이 장은 2026년 11월 1일에 확인한 GitHub 공식 문서를 바탕으로 썼습니다. GitHub 화면은 영어 기준으로 적었습니다.

## 이슈란

**이슈**는 계획하고, 논의하고, 할 일을 추적하는 기록입니다.[^issue] 버그 신고, 새 기능, 아이디어처럼 적어 두거나 이야기할 것은 무엇이든 담습니다. 3단계의 회의록에 "다음에 논의할 것"을 적었던 것과 비슷합니다.

이슈는 PR과 이어집니다. 이슈나 PR에서 다른 이슈를 언급하면 서로 연결되고, PR에 `fixes` 같은 정해진 단어를 쓰면 **관련 이슈가 자동으로 닫힙니다.**[^close]

```
fixes #1
```

GitHub의 입문 튜토리얼도 계획 단계에서 첫 이슈를 만듭니다. 제목에 만들 기능을 적고, 설명에 만들고 싶은 것을 몇 줄 적습니다.[^first-issue]

<Quiz id="ch708-issue" />

## 라벨과 보드로 정리하기

이슈가 늘어나면 **라벨**로 나눕니다. 새 저장소에는 기본 라벨이 들어 있습니다.[^labels]

| 라벨 | 뜻 |
|---|---|
| bug | 예상치 못한 문제 |
| enhancement | 새 기능 요청 |
| documentation | 문서 개선 |

출처: GitHub 공식 문서(일부만 옮김)[^labels]

**프로젝트**(Projects)는 이슈·PR과 이어진 표·보드·로드맵입니다.[^projects] 튜토리얼의 보드는 열이 일의 단계를 나타냅니다. 할 일(Todo) → 진행 중(In Progress) → 완료(Done)로 옮기며 진행을 봅니다.[^board]

**처음부터 다 쓸 필요는 없습니다.** 1장에서 본 것처럼, 많은 사람이 저장소 하나와 이슈 몇 개로 시작합니다. 라벨과 보드는 이슈가 열 개쯤 넘으면 써도 늦지 않습니다.

<Quiz id="ch708-labels" />

## 한 바퀴 더 돌기

한 바퀴가 끝나면, 다음 기능을 **새 이슈로** 만들고 시작할 때 진행 중으로 옮겨 다음 순환을 시작합니다.[^next-cycle] 4단계에서 배운 흐름을 이슈 하나로 다시 돌면 이렇습니다.

1. **계획**: 이슈에 무엇을 바꿀지 적는다. 필요하면 SPEC.md에 확인 기준을 한 줄 더한다(3장).
2. **만들기**: 새 브랜치에서 계획 모드로 계획을 받고 만든다(4장).
3. **확인**: 확인 장치를 돌리고 증거를 받는다. **기존 검사도 모두 통과해야** 한다(5장).
4. **리뷰**: PR에 `fixes #번호`를 적고 리뷰를 받는다(6장).
5. **배포**: 합치면 Pages에 다시 게시된다(7장).

Claude Code에게 이슈를 그대로 넘길 수도 있습니다.

```
GitHub 이슈 #1의 내용을 읽고, SPEC.md에 확인 기준을 한 줄 더한 뒤 계획부터 세워 줘. 아직 파일은 고치지 마.
```

Claude가 이슈를 읽지 못한다고 하면, 이슈 제목과 내용을 복사해 요청에 붙여 넣으세요. 그 방법이 가장 확실합니다.

<Quiz id="ch708-cycle" />

## 릴리스는 나중에

**릴리스**(Release)는 더 많은 사람이 내려받아 쓸 수 있게 묶은 배포 단위입니다.[^release] 내려받아 설치하는 프로그램에는 중요하지만, 웹 페이지 하나짜리 할 일 보드에는 꼭 필요하지 않습니다. 이런 것이 있다는 것만 알아 두세요.

## 직접 해 보기

1. `cafe-todo-board` 저장소의 **Issues** 탭에서 새 이슈를 만든다. 제목은 "기한 지난 할 일을 빨간색으로", 라벨은 `enhancement`.
2. 이슈 내용을 Claude Code에 넘기고, SPEC.md에 확인 기준을 한 줄 더한 뒤 계획부터 받는다.
3. 새 브랜치에서 만들고, 확인 장치로 새 기준과 기존 기준이 모두 통과하는지 증거를 받는다.
4. PR 설명에 `fixes #1`을 적고, 리뷰한 뒤 합친다.
5. 이슈가 자동으로 닫혔는지, Pages에 바뀐 화면이 나오는지 확인한다.

**이어지는 과제**: 9장에서는 공개 저장소에 비밀값과 개인 정보가 들어가지 않게 지키는 법을 정리합니다.

## 정리

- 이슈는 계획·논의·추적의 기록이다. 개선점과 버그를 이슈로 적어 다음 바퀴를 시작한다.
- PR에 `fixes #번호`를 쓰면 합칠 때 이슈가 자동으로 닫힌다.
- 라벨(bug·enhancement·documentation)과 보드(Todo → In Progress → Done)는 이슈가 늘면 쓴다.
- 다음 바퀴도 계획 → 만들기 → 확인 → 리뷰 → 배포. 기존 검사도 계속 통과해야 한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Issue | 이슈 | 할 일·버그·아이디어를 적고 추적하는 기록 |
| Label | 라벨 | 이슈와 PR을 나누는 꼬리표 |
| Project | 프로젝트 | 이슈·PR과 이어진 표·보드·로드맵 |
| Release | 릴리스 | 내려받아 쓸 수 있게 묶은 배포 단위 |

<ChapterDone :chapter="708" />

다음 장: [9장. 안전과 책임](09-safety.md)

[^issue]: GitHub 공식 문서, 「About issues」. "You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (확인일 2026-11-01)
[^close]: GitHub 공식 문서, 「About issues」. "Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (확인일 2026-11-01)
[^first-issue]: GitHub 공식 문서, 「Planning your work」. "In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (확인일 2026-11-01)
[^labels]: GitHub 공식 문서, 「Managing labels」. "GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels (확인일 2026-11-01)
[^projects]: GitHub 공식 문서, 「About Projects」. "A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects (확인일 2026-11-01)
[^board]: GitHub 공식 문서, 「Planning your work」. "The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (확인일 2026-11-01)
[^next-cycle]: GitHub 공식 문서, 「Reviewing your proposed changes」. "If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (확인일 2026-11-01)
[^release]: GitHub 공식 문서, 「About releases」. "Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases (확인일 2026-11-01)
