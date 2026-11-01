# 7장. 배포 — GitHub Pages로 공개하기

> **한 줄 요약**: **GitHub Pages**는 저장소의 웹 파일을 그대로 인터넷 사이트로 올려 주는 무료 서비스입니다. 무료 계정에서는 **공개 저장소**여야 씁니다.
> 배포는 바깥 세상에 영향을 주는 행동이라 **Claude Code의 되감기로 되돌릴 수 없습니다.** 공개해도 되는지는 사람이 확인하고 누릅니다.

이 장은 2026년 11월 1일에 확인한 GitHub·Claude Code 공식 문서를 바탕으로 썼습니다. GitHub 화면은 영어 기준으로 적었습니다.

## GitHub Pages란

GitHub Pages는 저장소에 있는 HTML·CSS·JavaScript 파일을 받아, 필요하면 빌드를 거쳐 **웹사이트로 게시하는** 정적 사이트 호스팅 서비스입니다.[^pages] 정적 사이트는 방문자마다 내용이 바뀌는 서버 없이, 정해진 파일을 그대로 보여 주는 사이트입니다. 할 일 보드처럼 표를 보여 주는 페이지에 잘 맞습니다.

2장에서 본 것처럼, **무료 계정은 공개 저장소에서만** Pages를 쓸 수 있습니다.[^free] 그리고 Pages 사이트는 **인터넷에 공개됩니다.** 요금제가 허락해 비공개 저장소로 만들어도 사이트는 공개되므로, 민감한 데이터는 게시 전에 지워야 합니다.[^public-site]

<Quiz id="ch707-pages" />

## 게시하는 두 가지 방법

| 방법 | 언제 |
|---|---|
| 브랜치에서 게시 | 빌드 과정을 따로 손볼 필요가 없을 때(권장) |
| GitHub Actions로 게시 | 빌드 과정을 직접 정하고 싶을 때 |

출처: GitHub 공식 문서(일부만 옮김)[^two-ways]

할 일 보드처럼 파일을 그대로 보여 주는 페이지는 **브랜치에서 게시**로 충분합니다. 공식 문서도 빌드 과정을 손볼 필요가 없으면 이 방법을 권합니다.[^two-ways] 브랜치와 폴더(저장소 맨 위 `/` 또는 `/docs`)를 고르면, 그 브랜치에 올릴 때마다 그 폴더의 내용이 게시됩니다.[^branch-source]

GitHub의 입문 튜토리얼은 Actions 방법을 씁니다. 설정의 Pages에서 **Source**를 **GitHub Actions**로 바꾸고 배포 설정 파일을 넣으면, 그 뒤로 `main`에 올릴 때마다 사이트가 다시 배포됩니다.[^actions-deploy] 주소는 `https://내아이디.github.io/저장소이름/` 모양입니다.

<Quiz id="ch707-ways" />

## 한도와 금지 사항

무료지만 쓸 수 없는 곳과 한도가 있습니다.

| 구분 | 내용 |
|---|---|
| 금지 | 사업·쇼핑몰·상업용 서비스(SaaS) 운영 |
| 쓰지 말 것 | 비밀번호·카드 번호를 주고받는 페이지 |
| 크기 | 게시된 사이트 1GB 이하 |
| 시간 | 배포가 10분을 넘으면 실패 |
| 대역폭 | 한 달 100GB(느슨한 한도) |

출처: GitHub 공식 문서(일부만 옮김)[^business][^sensitive][^size][^timeout][^bandwidth]

**방문자의 IP 주소가 기록됩니다.** Pages 사이트에 누가 들어오면, 로그인 여부와 관계없이 보안 목적으로 방문자의 IP 주소가 기록·저장됩니다.[^ip] 내 페이지에 "아무것도 모으지 않습니다"라고 쓰고 싶다면 이 점도 함께 적으세요.

**실제 서비스를 흉내 낸 연습 사이트**에는 조건이 있습니다. 배우려고 베껴 만드는 것 자체는 금지가 아니지만, 코드를 직접 쓰고, 사용자 데이터를 모으지 않고, 원본과 관계없는 교육용이라는 **눈에 띄는 안내**를 달아야 합니다.[^clone-site]

<Quiz id="ch707-limits" />

## 배포는 되감기로 되돌릴 수 없다

3단계에서 배운 Claude Code의 되감기(체크포인트)는 **세션 안의 빠른 복구용**입니다. 영구적인 기록은 Git이 맡습니다.[^checkpoint] 그리고 데이터베이스·외부 서비스·**배포**처럼 바깥 시스템에 영향을 주는 행동은 체크포인트로 되돌릴 수 없습니다.[^remote]

그래서 배포 직전에 사람이 확인합니다. 공식 문서도 제안된 명령이 안전한지 **승인 전에 검토할 책임은 사용자에게** 있다고 적습니다.[^responsible]

배포 전에 이 질문을 해 보세요.

- 5장의 확인 장치가 통과했나?
- 6장의 리뷰를 마치고 PR을 합쳤나?
- 공개 저장소와 페이지에 실명·연락처·비밀번호가 없나?(9장)

민감한 것을 올렸다면 되돌리는 것만으로는 부족합니다. 공개 저장소의 Git 기록에 남기 때문입니다. [9장](09-safety.md)의 순서(먼저 폐기·교체)를 따르세요.

<Quiz id="ch707-undo" />

## 직접 해 보기

1. 먼저 [9장의 공개 전 점검표](09-safety.md)로 비밀값·개인 정보를 확인한다.
2. GitHub에서 `cafe-todo-board` 저장소의 **Settings → Pages**를 연다.
3. 「Build and deployment」의 **Source**에서 **Deploy from a branch**를 고르고, **Branch**에서 `main` 브랜치와 `/`(맨 위) 폴더를 고른다.[^quickstart]
4. 저장소 맨 위에 `index.html`이 있는지 확인한다. GitHub Pages는 게시 폴더 맨 위에서 이 파일을 찾는다.[^entry] 그다음 `https://내아이디.github.io/cafe-todo-board/`를 연다. 올린 뒤 반영까지 최대 10분쯤 걸릴 수 있다.[^quickstart] 할 일 보드가 보이면 성공이다.
5. 휴대폰에서도 열어 본다.
6. 페이지 아래에 "연습용으로 만든 페이지이며 방문 정보를 모으지 않습니다(GitHub Pages는 보안 목적으로 방문자 IP를 기록함)" 같은 안내를 달지 생각해 본다.

**이어지는 과제**: 8장에서는 "기한 지난 할 일을 빨간색으로" 같은 개선을 이슈로 적고, 한 바퀴를 더 돕니다.

## 정리

- GitHub Pages는 저장소의 웹 파일을 사이트로 올린다. 무료 계정은 공개 저장소에서만 되고, 사이트는 늘 공개된다.
- 빌드를 손볼 필요가 없으면 브랜치에서 게시한다.
- 사업·쇼핑몰·비밀번호 입력에는 쓰지 않는다. 사이트 1GB, 배포 10분, 대역폭 월 100GB(느슨한 한도). 방문자 IP가 기록된다.
- 배포는 되감기로 되돌릴 수 없다. 확인·리뷰·공개 점검을 마치고 사람이 누른다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| GitHub Pages | 깃허브 페이지스 | 저장소 파일을 무료 웹사이트로 올리는 서비스 |
| Static site | 스태틱 사이트 | 정해진 파일을 그대로 보여 주는 사이트(정적 사이트) |
| Hosting | 호스팅 | 사이트를 인터넷에 올려 두는 일 |
| Bandwidth | 밴드위스 | 방문자에게 보낸 데이터의 양(대역폭) |

<ChapterDone :chapter="707" />

다음 장: [8장. 운영과 개선](08-operate.md)

[^pages]: GitHub 공식 문서, 「What is GitHub Pages?」. "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (확인일 2026-11-01)
[^free]: GitHub 공식 문서, 「What is GitHub Pages?」. "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (확인일 2026-11-01)
[^public-site]: GitHub 공식 문서, 「Configuring a publishing source for your GitHub Pages site」. "GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (확인일 2026-11-01)
[^two-ways]: GitHub 공식 문서, 「Configuring a publishing source for your GitHub Pages site」. "You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (확인일 2026-11-01)
[^branch-source]: GitHub 공식 문서, 「Configuring a publishing source for your GitHub Pages site」. "Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (확인일 2026-11-01)
[^actions-deploy]: GitHub 공식 문서, 「Deploying your website automatically」. "Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically (확인일 2026-11-01)
[^business]: GitHub 공식 문서, 「GitHub Pages limits」. "GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^sensitive]: GitHub 공식 문서, 「GitHub Pages limits」. "GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^size]: GitHub 공식 문서, 「GitHub Pages limits」. "Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^timeout]: GitHub 공식 문서, 「GitHub Pages limits」. "GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^bandwidth]: GitHub 공식 문서, 「GitHub Pages limits」. "GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^ip]: GitHub 공식 문서, 「What is GitHub Pages?」. "When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (확인일 2026-11-01)
[^clone-site]: GitHub 공식 문서, 「GitHub Pages limits」. "Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (확인일 2026-11-01)
[^checkpoint]: Claude Code 공식 문서, 「Checkpointing」. "Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing (확인일 2026-11-01)
[^remote]: Claude Code 공식 문서, 「How Claude Code works」. "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works (확인일 2026-11-01)
[^responsible]: Claude Code 공식 문서, 「Security」. "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (확인일 2026-11-01)
[^quickstart]: GitHub 공식 문서, 「Quickstart for GitHub Pages」. "Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart (확인일 2026-11-01)
[^entry]: GitHub 공식 문서, 「Creating a GitHub Pages site」. "GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (확인일 2026-11-01)
