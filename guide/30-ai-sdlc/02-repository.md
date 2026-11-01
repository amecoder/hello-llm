# 2장. GitHub 저장소 만들기 — 프로젝트의 집 짓기

> **한 줄 요약**: 저장소(Repository)는 프로젝트 파일과 **모든 변경 기록**을 두는 곳입니다. GitHub에 저장소를 만들면 내 컴퓨터 밖에도 안전한 사본과 협업 공간이 생깁니다.
> 공개·비공개는 **나중에 무료로 웹에 공개할 수 있는지**와 이어지므로, 만들 때부터 정해 둡니다.

이 장은 2026년 11월 1일에 확인한 GitHub 공식 문서를 바탕으로 썼습니다. GitHub 화면은 영어 기준으로 적었습니다. 3단계에서 Git으로 "변경 기록"을 남겨 봤다면 그 기록을 인터넷에 올려 두는 단계라고 생각하면 됩니다.

## Git과 GitHub, 저장소

**Git**은 파일 변경을 추적하는 버전 관리 시스템입니다.[^git] 3단계에서 Claude에게 "기록해 줘"라고 했던 커밋이 Git의 기록입니다.

**GitHub**은 그 Git 프로젝트를 인터넷에 올려 두고, 계획과 협업 도구를 더한 서비스입니다.[^git] 그리고 **저장소**는 프로젝트의 코드와 파일을 GitHub에 두는 곳입니다. 파일을 보관하고, 바뀔 때마다 커밋으로 기록하고, 함께 일할 공간이 됩니다.[^repo]

자주 나오는 말을 미리 알아 두세요.

| 말 | 뜻 |
|---|---|
| 브랜치(branch) | 기본 버전에 영향 없이 따로 작업하는 갈래 |
| 병합(merge) | 한 갈래의 변경을 다른 갈래에 합치기 |
| 원격(remote) | 내 컴퓨터가 아닌 GitHub에 있는 저장소 |
| 복제(clone) | 저장소를 기록째 내 컴퓨터로 내려받기 |

출처: GitHub 공식 문서(일부만 옮김)[^terms]

<Quiz id="ch702-basics" />

## 공개와 비공개

저장소를 만들 때 가장 먼저 정하는 것이 **공개 범위**입니다.

| 범위 | 볼 수 있는 사람 |
|---|---|
| 공개(Public) | 인터넷의 누구나 |
| 비공개(Private) | 나와 내가 공유한 사람 |

출처: GitHub 공식 문서[^visibility]

무료 계정에서는 이 선택이 7장의 배포와 이어집니다. **무료 계정은 공개 저장소에서만 GitHub Pages(무료 웹 공개)를 쓸 수 있습니다.**[^pages-free] 그래서 GitHub의 입문 튜토리얼도 나중에 실제 사이트로 공개하려고 **Public**을 고르게 합니다.[^tutorial-public]

공개 저장소에는 대가가 있습니다. 코드 전체가 모두에게 보이므로, 약점이나 민감한 정보를 노리는 사람이 생길 위험이 커집니다.[^public-risk] 그러니 **공개 저장소에는 개인 정보·비밀번호·실명이 든 메모를 넣지 않습니다.** 9장에서 자세히 다룹니다.

나중에 바꿀 수도 있지만 대가가 따릅니다. 무료 계정에서 공개 저장소를 비공개로 바꾸면, 게시해 둔 Pages 사이트가 자동으로 내려갑니다.[^switch]

<Quiz id="ch702-visibility" />

## README·.gitignore·라이선스

새 저장소를 만들 때 세 가지 파일을 함께 넣을 수 있습니다.[^options]

- **README**: 방문자가 가장 먼저 보는 설명서입니다.[^readme] 무엇을 하는 프로젝트인지, 왜 쓸모 있는지, 어떻게 시작하는지를 적습니다. 튜토리얼은 **Add README**를 고르게 합니다. 시작 파일이자 프로젝트를 설명하는 자리가 되기 때문입니다.[^add-readme]
- **.gitignore**: 커밋할 때 Git이 **무시할 파일**을 적어 두는 목록입니다.[^gitignore] 비밀번호가 든 설정 파일처럼 올리면 안 되는 것을 여기에 적습니다. 주의할 점이 있습니다. **이미 커밋한 파일은 목록에 적기만 해서는 무시되지 않습니다.**[^already] 그래서 처음부터 적어 두는 편이 좋습니다.
- **라이선스**: 다른 사람이 내 코드로 무엇을 할 수 있는지 알려 줍니다. 반드시 고를 필요는 없지만, 없으면 기본 저작권법이 적용되어 아무도 복제·배포·고쳐 쓰기를 할 수 없습니다.[^license] 고르기 어렵다면 GitHub은 choosealicense.com을 권합니다. GitHub도 이 안내가 법률 조언이 아니라고 밝힙니다.[^not-lawyer]

이미 내 컴퓨터에 있는 폴더를 올릴 때는 이 세 가지를 고르지 마세요. 내 폴더와 부딪쳐(병합 충돌) 일이 꼬일 수 있습니다.[^conflict]

<Quiz id="ch702-files" />

## 내 컴퓨터와 연결하기

GitHub의 저장소를 내 컴퓨터로 가져오는 일을 **복제**(clone)라고 합니다. 복제한 사본은 GitHub의 원본과 **연결된 채로** 남아서, 내가 기록한 것을 다시 올릴 수 있습니다.[^clone]

가져오는 방법은 여럿입니다.

| 방법 | 이럴 때 |
|---|---|
| GitHub Desktop | 공식 입문 튜토리얼처럼 그래픽 화면으로 |
| Claude Code에게 부탁 | 3단계처럼 말로 맡기고 싶을 때 |

출처: 이 가이드의 정리(GitHub Desktop은 공식 튜토리얼의 방법)[^clone]

Claude Code에게는 이렇게 부탁할 수 있습니다. 저장소 주소는 GitHub에서 저장소를 열었을 때 브라우저 주소창에 보이는 주소(예: `https://github.com/내아이디/cafe-todo-board`)를 씁니다.

```
이 GitHub 저장소를 ~/hello-ai-연습/할일보드 폴더로 복제해 줘: <저장소 주소>
```

**이미 있는 폴더를 올릴 수도 있습니다.** 3단계 정리도구처럼 내 컴퓨터에 있던 폴더도 GitHub에 올릴 수 있고, Git으로 관리하지 않던 폴더라면 먼저 Git 저장소로 만듭니다.[^existing] 다만 이 가이드는 **할 일 보드를 새 저장소로** 만듭니다. 정리도구에는 메모 원본이 있어서, 공개 저장소에 그대로 올리는 것은 피하는 편이 안전합니다.

<Quiz id="ch702-clone" />

## 직접 해 보기

1. [github.com](https://github.com)에 가입하거나 로그인한다(무료 계정이면 된다).
2. 오른쪽 위 **+** → **New repository**로 새 저장소를 만든다. 이름은 `cafe-todo-board`, 공개 범위는 **Public**, **Add README**를 고른다.
3. 저장소 화면에서 README가 보이는지 확인한다.
4. GitHub Desktop이나 Claude Code로 저장소를 `~/hello-ai-연습/할일보드`에 복제한다.
5. 복제한 폴더를 Claude Code 앱에서 열어, 폴더 안에 README.md가 있는지 확인한다.

**이어지는 과제**: 3장에서는 이 저장소에 무엇을 만들지, Claude에게 인터뷰받아 SPEC.md로 정리합니다.

## 정리

- Git은 변경 기록 장치, GitHub은 그 기록을 인터넷에 두고 협업하는 곳, 저장소는 프로젝트의 집이다.
- 무료 계정은 공개 저장소에서만 GitHub Pages를 쓸 수 있다. 공개 저장소에는 개인 정보를 넣지 않는다.
- README는 설명서, .gitignore는 올리지 않을 목록, 라이선스는 사용 허락이다. .gitignore는 처음부터 적는다.
- 복제한 사본은 GitHub과 연결된 채로 남는다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Git | 깃 | 파일 변경을 추적하는 버전 관리 시스템 |
| GitHub | 깃허브 | Git 저장소를 인터넷에 두고 협업하는 서비스 |
| README | 리드미 | 저장소의 첫 설명서 |
| .gitignore | 깃이그노어 | Git이 무시할 파일 목록 |
| Clone | 클론 | 저장소를 기록째 내 컴퓨터로 내려받기(복제) |

<ChapterDone :chapter="702" />

다음 장: [3장. 기획과 명세](03-plan-spec.md)

[^git]: GitHub 공식 문서, 「What is GitHub?」. "Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github (확인일 2026-11-01)
[^repo]: GitHub 공식 문서, 「Creating a repository for your project on GitHub」. "It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (확인일 2026-11-01)
[^terms]: GitHub 공식 문서, 「About repositories」. "Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (확인일 2026-11-01)
[^visibility]: GitHub 공식 문서, 「About repositories」. "Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (확인일 2026-11-01)
[^pages-free]: GitHub 공식 문서, 「What is GitHub Pages?」. "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (확인일 2026-11-01)
[^tutorial-public]: GitHub 공식 문서, 「Creating a repository for your project on GitHub」. "Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (확인일 2026-11-01)
[^public-risk]: GitHub 공식 문서, 「About repositories」. "Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (확인일 2026-11-01)
[^switch]: GitHub 공식 문서, 「Setting repository visibility」. "Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility (확인일 2026-11-01)
[^options]: GitHub 공식 문서, 「Creating a new repository」. "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (확인일 2026-11-01)
[^readme]: GitHub 공식 문서, 「About the repository README file」. "A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (확인일 2026-11-01)
[^add-readme]: GitHub 공식 문서, 「Creating a repository for your project on GitHub」. "Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (확인일 2026-11-01)
[^gitignore]: GitHub 공식 문서, 「Ignoring files」. "You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files (확인일 2026-11-01)
[^already]: GitHub 공식 문서, 「Ignoring files」. "If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files (확인일 2026-11-01)
[^license]: GitHub 공식 문서, 「Licensing a repository」. "A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (확인일 2026-11-01)
[^not-lawyer]: GitHub 공식 문서, 「Licensing a repository」. "We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (확인일 2026-11-01)
[^conflict]: GitHub 공식 문서, 「Creating a new repository」. "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (확인일 2026-11-01)
[^clone]: GitHub 공식 문서, 「Connecting to your code locally」. "Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally (확인일 2026-11-01)
[^existing]: GitHub 공식 문서, 「Adding locally hosted code to GitHub」. "If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (확인일 2026-11-01)
