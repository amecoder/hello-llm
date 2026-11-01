# 9장. 안전과 책임 — 비밀값·공개·라이선스

> **한 줄 요약**: 비밀번호나 API 키 같은 **비밀값은 절대 저장소에 올리지 않습니다.** 한 번 커밋하면 파일을 지워도 Git 기록에 남습니다.
> 새어 나갔다면 기록을 지우는 것보다 **그 비밀값을 먼저 바꾸는(폐기·교체)** 것이 첫 번째 일입니다.

이 장은 2026년 11월 1일에 확인한 GitHub·Claude Code 공식 문서와 Anthropic 소비자 약관을 바탕으로 썼습니다. 어느 AI에나 통하는 안전 수칙은 [1단계 9장](../00-common/09-safety.md)에 있습니다. 이 장은 **공개 저장소와 배포**에서 새로 생기는 위험을 다룹니다. 법률 조언이 아니며, 중요한 결정은 전문가와 확인하세요.

## 비밀값은 올리지 않는다

**비밀값**은 민감한 시스템과 데이터에 접근하게 해 주는 자격 증명입니다. 외부 서비스용 API 키와 토큰, 데이터베이스 비밀번호 같은 것입니다.[^secret] GitHub은 비밀번호나 API 키 같은 민감한 정보를 **절대** 저장소에 올리지 말라고 합니다.[^never]

왜 그렇게 강하게 말할까요? 커밋된 비밀값은 **Git 기록의 일부**가 되어, 최신 파일에서 지워도 기록에는 남기 때문입니다.[^history] 게다가 공개 저장소의 비밀값은 검색 엔진과 전문 수집기에 걸립니다.[^indexed]

흔히 새는 길은 이렇습니다.[^paths]

- 시험하다 넣은 값을 실수로 커밋
- `.env` 같은 설정 파일
- 문서·README 예시에 진짜 키를 적음

<Quiz id="ch709-secret" />

## 세 겹으로 지키기

| 단계 | 하는 일 | 근거 |
|---|---|---|
| 1. 넣지 않기 | `.gitignore`에 적고, Claude가 못 읽게 막기 | 2장, 이 절 |
| 2. 막히기 | GitHub 푸시 보호가 올리기 전에 막음 | 이 절 |
| 3. 바꾸기 | 새면 즉시 폐기·교체 | 이 절 |

출처: 이 가이드의 정리(근거는 각 각주)

**1. 넣지 않기.** 비밀값이 든 파일은 처음부터 `.gitignore`에 적습니다(2장). 이미 커밋한 파일은 목록에 적기만 해서는 무시되지 않으니 순서가 중요합니다. Claude Code의 파일 도구가 `.env` 같은 파일을 읽지 못하게 하려면 `Read` 거부 규칙(예: `Read(./.env)`)을 넣습니다.[^deny] 다만 이 규칙은 파일 이름을 대지 않고 읽는 명령이나 다른 프로그램까지 막지는 않습니다.[^deny-limit] 그러니 비밀값 파일은 애초에 저장소 폴더 밖에 두는 편이 가장 안전합니다. 권한 규칙을 넣는 곳은 [Claude Code 4장](../20-claude-code/04-permissions-undo.md)에서 다뤘습니다. 자동 작업에 비밀값이 필요하면 저장소 파일이 아니라 GitHub의 Secrets에 넣습니다.[^actions-secret][^gh-secrets]

**2. 막히기.** GitHub의 **푸시 보호**는 비밀값이 든 푸시를 저장소에 닿기 **전에** 막습니다.[^push] 내 계정에는 공개 저장소로 비밀값을 올리지 못하게 막는 보호가 기본으로 켜져 있습니다.[^push] 그래도 이것은 마지막 그물일 뿐입니다. 모든 종류를 다 잡는다는 보장은 아니니, 1단계를 먼저 지키세요.

**3. 바꾸기.** 비밀값이 새었다는 경고를 받으면, 그 자격 증명을 **즉시 교체**합니다.[^rotate] Git 기록을 다시 쓰는 일은 함께 쓰는 사람과 조율이 필요하고 부작용도 있습니다. 공식 문서도 지울 것이 비밀값이라면 **첫 단계는 폐기·교체**라고 합니다.[^revoke-first]

<Quiz id="ch709-layers" />

## 공개에 따라오는 것

공개 저장소와 Pages 사이트는 누구나 봅니다(2·7장). 그래서 공개 전에 이것을 점검합니다.

- **개인 정보**: 실명·연락처·주소가 든 메모를 넣지 않는다. 3단계 정리도구 메모를 그대로 올리지 않는 이유입니다.
- **방문자 정보**: Pages는 방문자 IP를 보안 목적으로 기록합니다(7장).
- **승인 책임**: 제안된 코드와 명령이 안전한지 승인 전에 검토할 책임은 사용자에게 있습니다.[^responsible]

<Quiz id="ch709-public" />

## 라이선스와 AI가 만든 결과물

**라이선스**를 정하지 않으면 기본 저작권법이 적용되어, 다른 사람은 내 코드를 복제·배포·고쳐 쓸 수 없습니다(2장). 남이 써도 되게 하고 싶다면 라이선스를 고릅니다.

**AI가 만든 코드의 권리**에 대해서는 이 가이드가 공식 입장을 찾지 못했습니다. 확인한 것은 Claude 개인 계정에 적용되는 Anthropic 소비자 약관의 이 조항입니다(Codex·Antigravity는 각 회사 약관을 따릅니다). 약관을 지키는 조건으로, 출력물(Outputs)에 대해 Anthropic이 가진 권리를 **"있다면"** 사용자에게 넘긴다는 것입니다.[^outputs] 이것이 "AI가 만든 코드에 저작권이 생기는가"에 대한 답은 아닙니다. 중요한 곳에 쓴다면 전문가와 확인하세요.

**내 데이터가 학습에 쓰이는지**도 확인하세요. Claude Code 문서는 Free·Pro·Max·Ultra 계정에서 해당 설정이 켜져 있으면, Claude Code 사용을 포함한 데이터로 새 모델을 학습한다고 적습니다.[^training] 설정을 보는 곳은 [2단계 Claude 9장](../10-claude/09-privacy.md)에서 다뤘습니다.

<Quiz id="ch709-license" />

## 남이 만든 부품도 살핀다

소프트웨어는 여러 곳에서 가져온 부품(패키지)에 기대는 경우가 많고, 그 부품에 모르는 사이 보안 약점이 들어올 수 있습니다.[^deps] GitHub의 **Dependabot**은 내가 쓰는 부품에 알려진 취약점이 있으면 경고합니다.

할 일 보드처럼 부품을 거의 쓰지 않는 페이지라면 걱정이 적습니다. 다만 Claude가 새 부품을 설치하자고 하면, **무엇을 왜 설치하는지** 묻고 승인하세요(4장의 계획 점검과 같은 질문입니다).

<Quiz id="ch709-deps" />

## 직접 해 보기 — 공개 전 점검표

1. 할일보드 폴더에 `.gitignore`가 있는지, 비밀값이 들 만한 파일(`.env` 등)이 적혀 있는지 본다. 없으면 Claude에게 만들어 달라고 한다.
2. Claude에게 "이 저장소에 비밀번호·API 키·토큰처럼 보이는 문자열이 있는지 찾아 줘. 찾으면 파일과 줄만 알려 주고 값은 보여 주지 마."라고 부탁한다.
3. README·SPEC.md·데이터에 실명·연락처가 없는지 직접 훑는다.
4. 라이선스를 정할지 생각해 본다. 정하지 않으면 남이 쓸 수 없다는 점을 기억한다.
5. 만약 비밀값을 올렸다면: 먼저 그 값을 발급한 곳에서 폐기·교체하고, 그다음에 저장소를 정리한다.

**이어지는 과제**: 10장에서는 1~9장을 처음부터 끝까지 한 번에 해 보는 실습 과제를 합니다.

## 정리

- 비밀값은 절대 올리지 않는다. 커밋하면 지워도 Git 기록에 남고, 공개 저장소는 수집된다.
- 세 겹: `.gitignore`로 넣지 않고(Read 거부는 Claude 파일 도구만 막음), 푸시 보호가 막고, 새면 먼저 교체한다.
- 공개 저장소와 Pages에는 개인 정보를 넣지 않는다. 승인 전 검토 책임은 사용자에게 있다.
- 라이선스가 없으면 남이 쓸 수 없다. AI 출력물의 권리는 공식 답을 찾지 못했다.
- 새 부품 설치는 무엇을 왜 하는지 묻고 승인한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Secret | 시크릿 | 비밀번호·API 키 같은 자격 증명(비밀값) |
| Push protection | 푸시 프로텍션 | 비밀값이 든 푸시를 미리 막는 GitHub 기능 |
| Rotate | 로테이트 | 새어 나간 비밀값을 새 값으로 바꾸기(교체) |
| Dependency | 디펜던시 | 내 소프트웨어가 기대는 남의 부품(의존성) |

<ChapterDone :chapter="709" />

다음 장: [10장. 실습 과제](10-practice.md)

[^secret]: GitHub 공식 문서, 「Secret leakage risks」. "Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (확인일 2026-11-01)
[^never]: GitHub 공식 문서, 「Adding locally hosted code to GitHub」. "Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (확인일 2026-11-01)
[^history]: GitHub 공식 문서, 「Secret leakage risks」. "These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (확인일 2026-11-01)
[^indexed]: GitHub 공식 문서, 「Secret leakage risks」. "Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (확인일 2026-11-01)
[^paths]: GitHub 공식 문서, 「Secret leakage risks」. "Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (확인일 2026-11-01)
[^deny]: Claude Code 공식 문서, 「Configure permissions」. "To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions (확인일 2026-11-01)
[^actions-secret]: Claude Code 공식 문서, 「Claude Code GitHub Actions」. "Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions (확인일 2026-11-01)
[^push]: GitHub 공식 문서, 「Push protection」. "Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection (확인일 2026-11-01)
[^rotate]: GitHub 공식 문서, 「Secret scanning」. "When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning (확인일 2026-11-01)
[^revoke-first]: GitHub 공식 문서, 「Removing sensitive data from a repository」. "It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository (확인일 2026-11-01)
[^responsible]: Claude Code 공식 문서, 「Security」. "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (확인일 2026-11-01)
[^outputs]: Anthropic 소비자 약관(Consumer Terms of Service). "Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms (확인일 2026-11-01)
[^training]: Claude Code 공식 문서, 「Data usage」. "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage (확인일 2026-11-01)
[^deps]: GitHub 공식 문서, 「Dependabot alerts」. "Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts (확인일 2026-11-01)
[^gh-secrets]: GitHub 공식 문서, 「Secrets」. "GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets (확인일 2026-11-01)
[^deny-limit]: Claude Code 공식 문서, 「Configure permissions」. "They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions (확인일 2026-11-01)
