# CLAUDE.md

## 프로젝트 개요
**hello-llm** — LLM을 "챗봇처럼 묻고 답만 받는" 수준으로 쓰는 일반인이 전문가처럼 쓰게 만드는 가이드.

- **독자**: 개발 지식이 없는 일반인. 용어를 모른다고 가정한다.
- **로드맵** (앞 단계가 뒤 단계의 전제):
  1. `00-common` — 모든 LLM에 통하는 공통 원리·사용법
  2. `10-claude` · `11-chatgpt` — 웹 서비스별 심화
  3. `20-claude-code` · `21-codex` — 코딩 에이전트 도구
  4. `30-ai-sdlc` — AI와 함께하는 소프트웨어 개발 전 과정(최종 목표)
- **실습 환경 (예정)**: 실제 서비스와 같은 UI를 재현한 연습 화면 + 화면 요소를 하나씩 짚어 주는
  코치 마크(coach mark, 처음 쓰는 사람에게 버튼·입력창 위에 말풍선으로 안내를 띄우는 온보딩 UI)

## 기술 스택
- 본문: Markdown → **VitePress 1.6.4** 사이트 (각주: `markdown-it-footnote`)
- 배포: GitHub Pages — `main` 푸시마다 `.github/workflows/deploy.yml` 이 자동 배포 → https://amecoder.github.io/hello-llm/
- 사이트 홈은 `index.md`(사이트 전용), GitHub 첫 화면은 `README.md` — 둘은 따로 관리한다. 사이트에는 `index.md` 와 `guide/` 만 나가고 `README.md`·`docs/`·`HANDOFF.md`·`CHANGELOG.md`·`CLAUDE.md` 는 `srcExclude` 로 제외
- ⚠️ `rewrites` 는 페이지 주소만 바꾸고 본문 링크는 안 바꾼다 — 사이트 페이지에서 단계 목차로 갈 때는 `.../README.md` 가 아니라 `/guide/00-common/` 처럼 쓴다(2026-10-20 404 원인)
- 실습 UI: VitePress 페이지 안의 Vue 컴포넌트(`.vitepress/theme/components/`, `theme/index.ts` 에서 전역 등록). 실제 LLM API 는 호출하지 않는다(비용 0 원칙) — 브라우저 안에서만 동작하거나 미리 준비한 답변으로 시뮬레이션
  - 첫 컴포넌트: `<PromptBuilder />` (7장) — 조립 규칙은 `theme/prompt-builder.ts` 순수 함수로 분리해 `tests/` 에서 테스트
- 테스트: Node 내장 테스트 러너(`node --test`, TS 는 Node 24 타입 제거 기능으로 바로 실행). 배포 워크플로가 빌드 전에 `npm test` 를 돌린다

## 프로젝트 구조
```
guide/                 # 독자에게 보여줄 가이드 본문 (번호 = 학습 순서)
  00-common/
  10-claude/  11-chatgpt/
  20-claude-code/  21-codex/
  30-ai-sdlc/
docs/                  # 프로젝트 운영 문서 (독자용 아님)
  plans/  reports/  architecture/
assets/                # README 그림 (.excalidraw 원본 + .svg)
```
- 그림은 전역 `excalidraw` 스킬로 만든다. 원본 `.excalidraw` 와 결과 `.svg` 를 함께 커밋한다(Mermaid 사용 안 함)
- 번호 규칙: 십의 자리 = 단계, 일의 자리 = 같은 단계 안의 도구. 새 도구는 같은 단계의 다음 번호(예: `12-gemini`)
- `guide/` 는 독자용, `docs/` 는 작업용 — 섞지 않는다

## 집필 규칙
- **일반인 눈높이**: 전문 용어는 처음 나올 때 괄호로 풀이하고, 개념마다 실제로 입력해 볼 수 있는 프롬프트 예시를 붙인다
- **전문 용어 병기**: 쉬운 우리말 설명을 먼저 쓰고 영어 원어를 붙인다(예: "예시 보여 주기 — Few-shot"). 장 끝 「용어 정리」 표에 읽는 법과 한 줄 뜻을 모은다. 원 논문이 있으면 각주로 출처
- **공통 → 개별 순서**: 모든 LLM에 통하는 내용은 `00-common` 에 두고, 서비스별 문서는 그 차이만 다룬다(중복 서술 금지, 링크로 참조)
- **사실 확인**: 서비스 기능·요금·메뉴 이름은 자주 바뀐다. 근거(공식 문서 URL)와 확인 날짜를 문서에 남긴다
- **리서치 재사용**: 연구 근거가 필요하면 새로 검색하기 전에 `docs/reports/` 의 리서치 리포트부터 본다(예: AI가 생각하는가·추론의 한계 → `2026-10-21_LLM-추론-최신-연구.md`). 본문에는 리포트에서 VERIFIED 로 표시된 수치만 쓰고, 새로 확인한 연구는 그 리포트의 「갱신 기록」에 덧붙인다
- **실습 UI의 상표**: 화면 배치는 재현하되 실제 로고·브랜드명을 그대로 쓰지 않고, 연습용 화면임을 명시한다(실제 서비스로 오인되지 않게)

## 새 장을 추가할 때
1. `guide/<단계>/NN-slug.md` 작성, 앞 장의 "다음 장" 링크 연결
2. 단계 목차 `guide/<단계>/README.md` 갱신
3. **`.vitepress/config.mts` 의 `sidebar` 와 `index.md` 의 `features` 카드에 항목 추가** — 빠뜨리면 사이트 목차·첫 화면에 안 보인다
4. 아직 없는 장으로 링크하지 않는다 — VitePress 빌드가 죽은 링크에서 실패한다
5. 본문의 `<태그>` 는 반드시 백틱이나 코드 블록 안에 쓴다 — 그냥 쓰면 VitePress(Vue)가 HTML 로 해석해 사라지거나 빌드가 깨진다

## 주요 커맨드
- `npm ci` — 의존성 설치
- `npm run docs:dev` — 로컬 미리보기 (http://localhost:5173/hello-llm/)
- `npm run docs:build` — 배포와 같은 빌드. 죽은 링크가 있으면 실패하므로 PR 전에 실행
- `npm test` — 컴포넌트 로직 단위 테스트
