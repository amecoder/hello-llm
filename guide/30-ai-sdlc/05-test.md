# 5장. 확인과 테스트 — 확인 장치를 주고 증거를 받기

> **한 줄 요약**: AI는 **일이 끝나 보이면** 멈춥니다. 정말 끝났는지 알려 줄 **확인 장치**를 주면, AI가 스스로 고치고 다시 확인하는 고리를 돌립니다.
> 그리고 "다 통과했어요"라는 말 대신 **증거**(실행한 명령과 그 출력, 또는 화면)를 받으세요.

이 장은 2026년 11월 1일에 확인한 Claude Code·GitHub 공식 문서를 바탕으로 썼습니다. 3단계에서 결과를 원본 메모와 맞춰 본 습관이, 4단계에서는 "확인 장치"라는 이름으로 자동화됩니다.

## 왜 확인 장치가 필요한가

공식 모범 사례 문서는 이렇게 말합니다. Claude는 일이 **끝나 보이면** 멈춥니다. 실제로 끝났는지 알려 줄 것이 없으면, "끝나 보인다"가 판단의 전부가 됩니다.[^looks-done] 그러면 결국 **내가 테스트 역할**을 하게 되고, 실수는 내가 우연히 알아챌 때까지 그대로 남습니다.[^you-test]

반대로 **통과/실패로 답하는 무언가**를 주면, Claude가 스스로 고리를 닫습니다. 바꾸고, 검사를 돌리고, 깨졌으면 출력을 읽고 고쳐 다시 돌립니다.[^loop]

| 확인 장치 없이 | 확인 장치를 주면 |
|---|---|
| "다 했어요" → 내가 열어 보고 틀린 곳 찾기 | 검사 실패 → Claude가 고침 → 다시 검사 → 통과 |

출처: 이 가이드의 정리(근거는 공식 문서)[^loop]

<Quiz id="ch705-why" />

## 확인 장치의 종류

확인 장치는 **Claude가 결과를 읽을 수 있는 것이면 무엇이든** 됩니다. 공식 문서는 테스트 파일, 빌드가 성공했는지, 문법 검사기, 출력 비교 스크립트, 시안 옆에 놓고 비교한 브라우저 화면을 예로 듭니다.[^kinds] 그런 장치가 있다면, CLAUDE.md에서 **가장 쓸모 있는 한 줄은 그것을 돌리는 명령**이라고까지 합니다.[^claude-md]

가장 쉬운 방법은 **요청에 적는 것**입니다. 설정 없이 오늘 바로 됩니다.[^in-prompt]

```
할 일 보드를 고친 뒤에는 SPEC.md의 확인 기준을 하나씩 검사하고, 다 통과할 때까지 계속해 줘.
```

데스크톱 앱에서는 Claude가 개발 서버를 켜고 앱 안의 **브라우저 창**에서 열어 자기 변경을 확인할 수 있습니다. 기본으로 편집할 때마다 자동으로 확인합니다.[^browser] 웹 페이지인 할 일 보드에 잘 맞는 장치입니다.

테스트를 만들어 달라고 할 때는 **어떤 동작을 확인할지 구체적으로** 말합니다.[^specific-test]

| 아쉬운 요청 | 나은 요청 |
|---|---|
| 테스트 만들어 줘 | 회의록의 할 일 5개가 화면에 모두 보이는지, 기한이 날짜 형식인지 확인하는 테스트를 만들어 줘 |

출처: 이 가이드의 예(요령은 공식 문서)[^specific-test]

<Quiz id="ch705-kinds" />

## 증거를 받기

어떤 장치를 쓰든 **증거**를 달라고 하세요. 실행한 명령과 그 출력, 또는 화면입니다.[^evidence] "다 통과했어요"라는 말만으로는 알 수 있는 것이 거의 없고, 출력을 읽는 편이 직접 다시 돌리는 것보다 빠릅니다.[^evidence]

```
방금 돌린 확인 명령과 그 출력을 그대로 보여 줘. 통과 몇 개, 실패 몇 개인지도.
```

**검사가 정말 검사하는지도 확인하세요.** 일부러 틀리게 만들었을 때 실패하지 않는 검사는 장치가 아니라 장식입니다. 예를 들어 할 일 하나를 지운 채 돌려 보고, 검사가 실패하는지 봅니다.

<Quiz id="ch705-evidence" />

## 올릴 때마다 자동으로 — GitHub Actions

확인을 사람이 매번 시키지 않아도 되게 만들 수 있습니다. **GitHub Actions**는 빌드·테스트·배포를 자동으로 돌리는 GitHub의 기능입니다. 변경을 올릴 때마다 테스트를 돌리게 할 수 있습니다.[^actions]

- 무엇을 할지는 저장소의 `.github/workflows` 폴더에 넣은 YAML 파일(설정 파일)로 정합니다.[^yaml]
- 자주 커밋하고 자주 확인하는 습관을 **지속적 통합**(CI)이라고 합니다. 오류를 일찍 찾게 해 줍니다.[^ci]
- GitHub은 확인 결과를 6장의 PR 화면에 보여 줍니다. 내 브랜치의 변경이 오류를 만들었는지 바로 볼 수 있습니다.[^ci]
- **공개 저장소**에서는 GitHub이 제공하는 표준 실행기를 무료로 쓸 수 있습니다.[^free]

설정 파일은 Claude에게 만들어 달라고 하면 됩니다. 다만 처음에는 위의 "요청에 적기"와 브라우저 확인만으로 충분합니다. **처음부터 모든 자동화를 갖출 필요는 없습니다.**

<Quiz id="ch705-actions" />

## 직접 해 보기

1. 4장의 `first-board` 브랜치에서, SPEC.md의 확인 기준을 검사하는 장치를 만들어 달라고 한다.
2. 검사를 돌리고, 실행한 명령과 출력을 그대로 보여 달라고 한다.
3. 할 일 하나를 일부러 지운 채 다시 돌려, 검사가 실패하는지 본다. 확인한 뒤 되돌린다.
4. 앱의 브라우저 창에서 할 일 보드를 열어, 할 일 수를 직접 세어 본다.
5. 검사 명령을 CLAUDE.md에 한 줄로 적어 둔다.

**이어지는 과제**: 6장에서는 지금까지의 변경을 PR로 올리고 리뷰를 받습니다.

## 정리

- AI는 끝나 보이면 멈춘다. 통과/실패로 답하는 확인 장치를 주면 스스로 고치고 다시 확인한다.
- 확인 장치는 테스트·빌드·비교 스크립트·브라우저 화면 등 Claude가 결과를 읽을 수 있는 것이면 된다.
- "다 통과했다"는 말 대신 명령과 출력이라는 증거를 받는다. 일부러 틀려서 검사가 실패하는지도 본다.
- GitHub Actions는 올릴 때마다 자동으로 확인한다. 공개 저장소에서는 표준 실행기가 무료다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Test | 테스트 | 결과가 기대대로인지 자동으로 확인하는 검사 |
| CI | 씨아이 | 자주 합치고 자주 자동 확인하는 습관(지속적 통합) |
| GitHub Actions | 깃허브 액션즈 | 올릴 때마다 정해 둔 작업을 자동으로 돌리는 기능 |
| YAML | 야믈 | 자동 작업 설정에 쓰는 글 형식 |

<ChapterDone :chapter="705" />

다음 장: [6장. PR과 리뷰](06-review.md)

[^looks-done]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^you-test]: Claude Code 공식 문서, 「Best practices for Claude Code」. "In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^loop]: Claude Code 공식 문서, 「Best practices for Claude Code」. "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^kinds]: Claude Code 공식 문서, 「Best practices for Claude Code」. "The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^claude-md]: Claude Code 공식 문서, 「Best practices for Claude Code」. "If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^in-prompt]: Claude Code 공식 문서, 「Best practices for Claude Code」. "In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^browser]: Claude Code 공식 문서, 「Desktop application」. "Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (확인일 2026-11-01)
[^specific-test]: Claude Code 공식 문서, 「Common workflows」. "When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (확인일 2026-11-01)
[^evidence]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^actions]: GitHub 공식 문서, 「Quickstart for GitHub Actions」. "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (확인일 2026-11-01)
[^yaml]: GitHub 공식 문서, 「Understanding GitHub Actions」. "Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (확인일 2026-11-01)
[^ci]: GitHub 공식 문서, 「Continuous integration」. "Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (확인일 2026-11-01)
[^free]: GitHub 공식 문서, 「Billing and usage」. "GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (확인일 2026-11-01)
