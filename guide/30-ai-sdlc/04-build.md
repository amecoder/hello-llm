# 4장. 만들기 — 계획 먼저, 브랜치와 커밋

> **한 줄 요약**: 새 세션에서 SPEC.md를 주고 **계획 모드**로 계획부터 받습니다. 승인한 뒤에는 **브랜치**라는 따로 떨어진 공간에서 만들고, 작은 변경마다 **커밋**으로 기록합니다.
> 이것이 GitHub flow입니다. 개발자만이 아니라 누구에게나 쓸모 있는 가벼운 작업 흐름입니다.

이 장은 2026년 11월 1일에 확인한 Claude Code·GitHub 공식 문서를 바탕으로 썼습니다. 계획 모드와 커밋은 [Claude Code 4·5장](../20-claude-code/05-delegate-well.md)에서 써 봤습니다. 이 장은 그것을 브랜치와 묶어 "안전하게 만드는 흐름"으로 정리합니다.

## 계획부터 받기

SPEC.md가 생겼으면 새 세션을 열고 **계획 모드**로 바꿉니다. 계획 모드에서 Claude는 파일을 읽고 계획만 내놓고, 내가 승인하기 전에는 아무것도 고치지 않습니다.[^plan]

```
SPEC.md를 읽고, 이 명세를 만족하는 할 일 보드를 만들 계획을 세워 줘. 아직 파일은 만들지 마.
```

계획을 받으면 이렇게 물어보세요.

- SPEC.md의 줄마다 계획의 어느 단계가 맞춰 주나?
- 단계 하나가 한 번에 확인할 수 있는 크기인가?
- 내가 모르는 새 도구나 설치가 들어갔나?

마음에 들지 않으면 승인하기 전에 고쳐 달라고 합니다. 계획 단계에서 고치는 것이 가장 쌉니다.

<Quiz id="ch704-plan" />

## 브랜치에서 만들기

**브랜치**는 기능을 따로 떨어진 공간에서 만들게 해 줍니다. 준비될 때까지 기본 버전(`main`)은 바뀌지 않습니다.[^branch] 망쳐도 `main`은 멀쩡하니, 마음 놓고 시도할 수 있습니다.

GitHub의 입문 튜토리얼은 만드는 과정을 이렇게 요약합니다. **작업 공간 만들기 → 변경하고 저장하기 → 리뷰 받으려고 제안하기**이고, 그 도구가 브랜치·커밋·PR(6장)입니다.[^core]

브랜치 이름은 **짧고 뜻이 드러나게** 짓습니다.[^name] 할 일 보드의 첫 화면이라면 `first-board` 정도면 충분합니다.

```
first-board 브랜치를 만들고, 승인한 계획대로 첫 화면을 만들어 줘.
```

<Quiz id="ch704-branch" />

## 작게 커밋하기

**커밋**은 변경을 그 순간의 사진처럼 저장하고, **푸시**는 그 사진을 GitHub 저장소로 보냅니다.[^commit]

커밋 하나에는 **떨어져 있고 완결된 변경 하나**를 담는 것이 좋습니다. 그래야 다른 방법을 택하고 싶을 때 그 부분만 되돌리기 쉽습니다.[^atomic] 서로 관계없는 변경은 브랜치도 따로 만듭니다.[^atomic]

| 아쉬운 커밋 | 나은 커밋 |
|---|---|
| 하루 일을 한 번에 "작업" | "할 일 표 읽기 추가", "기한 지난 할 일 색 표시" |

출처: 이 가이드의 예(원칙은 GitHub 공식 문서)[^atomic]

3단계에서 배운 대로, 맡기기 전과 후에 기록을 남기는 습관이 여기서도 그대로 통합니다.

<Quiz id="ch704-commit" />

## AI가 만든 것을 읽기

AI가 만든 결과는 **읽고 나서** 받아들입니다. GitHub 튜토리얼도 AI가 만든 것을 검토한 뒤 예시에 맞게 고치라고 합니다.[^review-ai]

Claude Code 데스크톱 앱에서는 바뀐 내용 보기(diff)에서 파일별로 변경을 확인할 수 있습니다. 줄 옆의 **+**로 의견을 달면 Claude가 읽고 고칩니다.[^diff]

코드를 다 이해하지 못해도 괜찮습니다. 이렇게 물어보세요.

```
방금 바꾼 파일마다 무엇을 왜 바꿨는지 한 줄씩 설명해 줘. SPEC.md의 어느 줄과 이어지는지도 알려 줘.
```

설명이 SPEC.md와 이어지지 않는 변경이 있다면, 부탁하지 않은 일을 한 것일 수 있습니다. 그 부분을 물어보세요.

<Quiz id="ch704-read" />

## 직접 해 보기

1. 할일보드 폴더에서 **새 세션**을 열고 계획 모드로 바꾼다.
2. 위의 계획 요청을 보내고, 질문 세 가지로 계획을 점검한 뒤 승인한다.
3. `first-board` 브랜치에서 첫 화면을 만들게 한다. 할 일 데이터는 3단계 회의록의 할 일 표를 쓴다.
4. 바뀐 내용 보기로 파일을 확인하고, 변경 설명을 요청한다.
5. 작은 단위로 커밋하게 한다.

**이어지는 과제**: 5장에서는 "할 일이 하나도 빠짐없이 보이나?"를 Claude가 스스로 확인하게 하는 장치를 만듭니다.

## 정리

- 새 세션에서 SPEC.md를 주고 계획 모드로 계획부터 받는다. 고치는 것은 계획 단계가 가장 싸다.
- 브랜치는 `main`을 건드리지 않는 작업 공간이다. 이름은 짧고 뜻이 드러나게.
- 커밋 하나에 완결된 변경 하나. 관계없는 변경은 브랜치를 나눈다.
- AI가 만든 것은 읽고 받아들인다. 변경마다 SPEC.md의 어느 줄과 이어지는지 묻는다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Branch | 브랜치 | 기본 버전을 건드리지 않고 따로 작업하는 갈래 |
| Commit | 커밋 | 변경을 그 순간의 사진처럼 기록하기 |
| Push | 푸시 | 내 기록을 GitHub 저장소로 보내기 |
| GitHub flow | 깃허브 플로 | 브랜치 → 변경 → PR → 리뷰 → 병합의 작업 흐름 |

<ChapterDone :chapter="704" />

다음 장: [5장. 확인과 테스트](05-test.md)

[^plan]: Claude Code 공식 문서, 「Common workflows」. "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-01)
[^branch]: GitHub 공식 문서, 「Writing and storing your code」. "A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (확인일 2026-11-01)
[^core]: GitHub 공식 문서, 「Writing and storing your code」. "Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (확인일 2026-11-01)
[^name]: GitHub 공식 문서, 「GitHub flow」. "A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow (확인일 2026-11-01)
[^commit]: GitHub 공식 문서, 「Writing and storing your code」. "Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (확인일 2026-11-01)
[^atomic]: GitHub 공식 문서, 「GitHub flow」. "Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow (확인일 2026-11-01)
[^review-ai]: GitHub 공식 문서, 「Writing and storing your code」. "Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (확인일 2026-11-01)
[^diff]: Claude Code 공식 문서, 「Desktop application」. "After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop (확인일 2026-11-01)
