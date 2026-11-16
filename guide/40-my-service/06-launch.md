# 6장. 인터넷에 올리기, 내 컴퓨터에 두기

<Badge type="tip" text="필수" /> 이 단계를 따라가려면 꼭 읽으세요.

> **한 줄 요약**: 만든 것을 **쓰는 곳에 놓는** 장입니다. 게임은 GitHub Pages에 올리고, 업무 도구는 Apps Script 웹 앱으로 띄우고, 가게·재테크 도구는 **더블클릭으로 여는 파일**로 둡니다.
> 어느 길이든 마지막에 **실제로 쓸 곳에서 열어 보는 것**까지가 이 장입니다.

## 세 가지 길

1장에서 정한 「사는 곳」에 따라 길이 셋으로 나뉩니다.

| 트랙 | 놓는 곳 | 여는 법 | 필요한 계정 |
|---|---|---|---|
| 게임 | GitHub Pages | 공개 주소 | GitHub(4단계에서 만든 것) |
| 업무 | Apps Script 웹 앱 | 회사 사람만 여는 주소 | 회사 구글 계정 |
| 가게·재테크 | 내 컴퓨터 폴더 | `index.html` 더블클릭 | 없음 |

가게 도구를 인터넷에 올리지 않는 것은 1장에서 본 이유 그대로입니다. GitHub Pages는 온라인 사업에 쓸 수 없고, Vercel의 무료 요금제(Hobby)도 **개인적·비상업적 용도로만** 쓰게 합니다.[^vercel] 매장 안에서 쓰는 도구는 매장 컴퓨터에 두는 것이 가장 단순합니다.

<Quiz id="ch906-paths" />

## 게임 — GitHub Pages에 올리기

방법은 4단계 7장과 같습니다([4단계 7장](../30-ai-sdlc/07-deploy.md)). 공개 저장소의 **Settings → Pages**에서 `main` 브랜치를 고르면 `https://내아이디.github.io/저장소이름/` 주소가 생깁니다. 예시 게임 「별똥별 받기」는 켠 지 1분이 안 돼 주소가 열렸습니다. 공식 문서는 반영까지 **최대 10분**쯤 걸릴 수 있다고 합니다.[^pages-wait]

무료 게임은 GitHub Pages의 금지 사항(사업·쇼핑몰)에 해당하지 않습니다. 다만 4단계에서 본 대로 **방문자의 IP 주소가 기록**된다는 점은 그대로입니다.

올리기 전에 내 컴퓨터에서 먼저 확인합니다. 그런데 게임 파일을 더블클릭해 열면 **아무것도 안 나올 수 있습니다.** 게임 코드를 여러 파일로 나눠 서로 불러오는 방식(모듈, module)을 쓰면, 브라우저가 파일 주소(`file://`)에서는 그 불러오기를 막기 때문입니다.[^modules] 그래서 확인할 때는 작은 **로컬 서버**(내 컴퓨터 안에서만 도는 웹 서버)를 띄웁니다.

```text
이 게임을 내 컴퓨터에서 확인할 수 있게 로컬 서버를 띄워 줘.
어떤 명령으로 띄웠는지, 브라우저에 어떤 주소를 넣으면 되는지, 끝낼 때는 어떻게 하는지 알려 줘.
```

예시 게임은 `python3 -m http.server` 로 띄우고 `http://localhost:8000/` 을 열었습니다. 확인이 끝나면 Pages에 올립니다.

<Quiz id="ch906-pages" />

## 업무 — Apps Script 웹 앱으로 띄우기

> ⚠️ 이 절은 공식 문서를 따라 쓴 순서입니다. 회사 계정마다 설정이 달라 이 가이드를 쓰면서 직접 해 보지는 못했습니다. 메뉴 이름은 우리말 화면에서 조금 다를 수 있어 영어 이름을 함께 적었습니다.

업무 도구는 구글 시트에 붙은 Apps Script로 만듭니다. 순서는 넷입니다.

1. **스크립트 열기**: 4장에서 만든 시트에서 **확장 프로그램 → Apps Script**(Extensions → Apps Script)를 누릅니다.[^bound] 이렇게 만든 스크립트는 그 시트에 붙어 있습니다. 메뉴가 안 보이면 회사가 막아 두었을 수 있으니 IT 담당자에게 물어보세요.
2. **코드 넣기**: AI가 만든 코드를 편집기에 붙여 넣습니다. 웹 앱에는 페이지를 돌려주는 `doGet` 함수가 꼭 있어야 하고,[^doget] 화면은 HTML 파일로 따로 둡니다.[^html]
3. **시험용으로 열기**: 오른쪽 위 **배포 → 배포 테스트**(Deploy → Test deployments)로 엽니다. 이 주소는 `/dev` 로 끝나고, 스크립트를 고칠 수 있는 사람만 엽니다. 늘 마지막으로 저장한 코드가 돕니다.[^test]
4. **진짜로 띄우기**: **배포 → 새 배포**(Deploy → New deployment)를 누르고, 「유형 선택」 옆에서 **웹 앱**(Web app)을 고르고, 5장의 두 설정을 고른 뒤 **배포**를 누릅니다.[^deploy]

Apps Script 편집기는 AI 도구가 직접 고칠 수 없는 곳입니다. 그래서 AI에게 **붙여 넣을 파일을 나눠서** 달라고 합니다.

```text
구글 시트 「신청」 시트(칸: 날짜, 이름, 품목, 수량)에 붙일 Apps Script 웹 앱을 만들어 줘.
입력 양식에서 저장하면 시트 맨 아래에 한 줄이 붙고, 아래에 이번 달 품목별 합계가 보이게.
Apps Script 편집기에 붙여 넣을 수 있게 Code.gs 와 Index.html 두 파일로 나눠서 줘.
각 파일을 어디에 어떤 이름으로 만들어 붙여 넣는지도 순서대로 알려 줘.
```

코드를 고친 뒤에는 이미 띄운 웹 앱이 저절로 바뀌지 않습니다. 새 **버전**을 만들고 배포가 그 버전을 쓰도록 고쳐야 합니다.[^version] 9장에서 이 성질로 되돌리기를 합니다.

<Quiz id="ch906-apps-script" />

## 가게·재테크 — 더블클릭으로 여는 도구

내 컴퓨터 도구는 올릴 곳이 없습니다. 대신 **매일 쉽게 켜는 길**을 만듭니다.

먼저 더블클릭으로 열려야 합니다. 앞 절의 게임과 달리, 매장에서 매번 로컬 서버를 띄우는 것은 번거롭습니다. 그래서 3장에서 「더블클릭해서 열어도 동작하게」를 요청했습니다. AI는 그 요청에 맞춰 모듈 대신 **일반 스크립트**로 파일을 불러오게 만듭니다. 예시 꽃집 도구와 대시보드가 이렇게 만들어졌습니다.

다음으로 **늘 같은 브라우저로** 엽니다. 4장에서 본 대로 자료는 그 브라우저 안에 있습니다. 어제 크롬으로 적고 오늘 엣지로 열면 예약이 없는 것처럼 보입니다.

마지막으로 **바로 가기**를 만듭니다.

- 바탕 화면 바로 가기: 윈도는 `index.html` 을 오른쪽 버튼으로 누르고 「바로 가기 만들기」, 맥은 `Option + Command` 를 누른 채 바탕 화면으로 끌어 놓기
- 브라우저 즐겨찾기: 파일을 연 상태에서 즐겨찾기에 추가

폴더를 옮기면 바로 가기와 즐겨찾기가 끊깁니다. 폴더는 처음 둔 자리에 두세요.

<Quiz id="ch906-local" />

## 직접 해 보기

1. 아래 내 트랙 상자를 따라 쓰는 곳에 놓는다.
2. **실제로 쓸 곳에서** 연다. 게임은 휴대폰, 업무는 동료 계정, 가게는 매장 컴퓨터, 재테크는 내가 매일 쓰는 브라우저.
3. 열린 주소나 바로 가기를 SPEC.md 맨 아래에 적어 둔다.

::: details 업무 트랙
「업무 — Apps Script 웹 앱으로 띄우기」의 1~4를 따라 합니다. 4에서 「누가 쓸 수 있나」는 먼저 **나만**으로 띄우세요.

혼자 저장·합계가 맞는지 본 뒤, **새 배포**를 한 번 더 해서 이번에는 접근을 「같은 도메인」으로 고르고, 그 주소를 동료 한 명에게 보냅니다. 동료가 열 때 권한을 묻는 화면이 나오면, 무엇을 허락하는지 함께 읽어 보세요.

참고 문서: [Apps Script 웹 앱](https://developers.google.com/apps-script/guides/web) · [배포](https://developers.google.com/apps-script/concepts/deployments)
:::

::: details 가게 트랙
1. `index.html` 을 더블클릭해서 열린다는 것을 확인한다. 안 열리면 「더블클릭으로 열어도 동작하게 고쳐 줘. 모듈 방식 불러오기를 쓰지 마」라고 요청한다.
2. 매장에서 쓸 브라우저 하나를 정하고, 그 브라우저로 연다.
3. 바탕 화면 바로 가기를 만든다. 아침에 매장 컴퓨터를 켜고 두 번 누르면 열리게.
:::

::: details 게임 트랙
1. 「게임 — GitHub Pages에 올리기」의 프롬프트로 로컬 서버를 띄워 한 판 해 본다.
2. [4단계 9장의 공개 전 점검표](../30-ai-sdlc/09-safety.md)와 5장의 「공개되면 안 되는 것」 점검을 마친다.
3. 저장소의 **Settings → Pages**에서 `main` 브랜치, `/` 폴더를 고른다.
4. 휴대폰으로 공개 주소를 열어 끝까지 한 판 한다.
:::

::: details 재테크 트랙
1. 인터넷을 끄고 `index.html` 을 더블클릭한다. 차트가 나오면 차트 부품이 폴더 안에 잘 들어 있는 것이다(3장).
2. 매일 쓸 브라우저로 열고, 거래 기록 CSV를 불러온다.
3. 브라우저 즐겨찾기에 추가한다.

받기 스크립트(4장)는 매일 돌릴 필요가 없습니다. 지표는 달마다 바뀌니, 달에 한 번 받아 불러오면 됩니다.
:::

## 정리

- 게임은 GitHub Pages, 업무는 Apps Script 웹 앱, 가게·재테크는 내 컴퓨터 폴더에 놓는다.
- 모듈을 쓴 게임은 더블클릭으로 안 열린다. 로컬 서버로 확인하고 올린다.
- Apps Script 웹 앱은 배포 테스트(`/dev`)로 확인하고 새 배포로 띄운다. 코드를 고치면 새 버전을 배포에 연결한다.
- 내 컴퓨터 도구는 더블클릭으로 열리게 만들고, 늘 같은 브라우저로, 바로 가기로 연다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Deploy | 디플로이 | 만든 것을 쓰는 곳에 올리는 일(배포) |
| Module | 모듈 | 코드를 여러 파일로 나눠 서로 불러오는 방식 |
| Local server | 로컬 서버 | 내 컴퓨터 안에서만 도는 작은 웹 서버 |
| Shortcut | 숏컷 | 파일을 다른 자리에서 바로 여는 바로 가기 |

<ChapterDone :chapter="906" />

다음 장: [7장. 진짜처럼 확인하기](07-check.md)

[^vercel]: Vercel 이용약관 4절(2026-10-19판). "You shall only use the Services under a Hobby plan for your personal or non-commercial use." https://vercel.com/legal/terms (확인일 2026-11-13)
[^pages-wait]: GitHub 공식 문서, 「Quickstart for GitHub Pages」. "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart (확인일 2026-11-01)
[^modules]: MDN, 「JavaScript modules on the web」. "you can no longer view your HTML using the file:// protocol." / "The reason for this is that module requests use CORS, and file:// URLs are never same-origin." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web (확인일 2026-11-16)
[^bound]: Google Apps Script 공식 문서, 「Container-bound Scripts」. "open a document in Docs, a spreadsheet in Sheets, or a presentation in Slides" / "click Extensions > Apps Script" https://developers.google.com/apps-script/guides/bound (확인일 2026-11-16)
[^doget]: Google Apps Script 공식 문서, 「Web Apps」. "It contains a doGet or doPost function." https://developers.google.com/apps-script/guides/web (확인일 2026-11-16)
[^html]: Google Apps Script 공식 문서, 「HTML Service」. "The HTML service lets you serve web pages that can interact with server-side Apps Script functions." / "your code must include a doGet function that tells the script how to serve the page" https://developers.google.com/apps-script/guides/html (확인일 2026-11-16)
[^test]: Google Apps Script 공식 문서, 「Web Apps」. "At the top right of the script project, click Deploy > Test deployments." / "This URL ends in /dev and can only be accessed by users who have edit access to the script." / "This instance of the app always runs the most recently saved code and is only intended for testing during development." https://developers.google.com/apps-script/guides/web (확인일 2026-11-16)
[^deploy]: Google Apps Script 공식 문서, 「Web Apps」. "At the top right of the script project, click Deploy > New deployment." / "Next to "Select type," click Enable deployment types > Web app." / "Click Deploy." https://developers.google.com/apps-script/guides/web (확인일 2026-11-16)
[^version]: Google Apps Script 공식 문서, 「Create and manage deployments」. "A versioned deployment makes a specific version of the project code available." / "To deploy a change to the project code, create a new version and edit the deployment to use it." https://developers.google.com/apps-script/concepts/deployments (확인일 2026-11-16)
