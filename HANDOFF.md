# HANDOFF.md

## Current State: 공통 가이드 1~9장 공개 + 확인 퀴즈 49개·LLM 이해 인증 시험(배지) (2026-10-22) — 다음은 10장 실습 과제

- 저장소: https://github.com/amecoder/hello-llm (public, 기본 브랜치 `main`)
- 사이트: https://amecoder.github.io/hello-llm/ (VitePress, `main` 푸시마다 자동 배포)

## Pending Tasks
- [ ] 실습 UI 구현 — VitePress 안 Vue 컴포넌트, 동일 UI + 코치 마크, API 호출 없는 시뮬레이션 (첫 부품 `PromptBuilder` 완료)
- [ ] (제안) 실제 독자(중학생·일반인 각 1~2명) 읽기 테스트로 1·5·7장 이해도 실측 — 추정 리뷰: `docs/reports/2026-10-21_초보자-이해도-리뷰.md`
- [ ] (제안) 컴포넌트 E2E 테스트 영구화 — 지금은 scratchpad 의 Playwright 스크립트로 수동 검증만 함
- [ ] (제안) 인증 시험 전용 문제 추가 — 지금은 절 퀴즈와 같은 문제 은행(49개)에서 뽑아 이미 본 문제가 나온다
- [ ] (제안) favicon 추가 — 없어서 브라우저 콘솔에 404 가 한 줄 찍힘
- [ ] (선택) deploy.yml 의 `configure-pages@v4`·`upload-pages-artifact@v3` 가 Node 20 경고 — 새 메이저 나오면 올리기
- [ ] `guide/00-common` 10장 실습(`10-practice.md`) 작성 — 실습 UI(코치 마크)와 연결
- [ ] 2~4장에도 용어 정리 표 추가 검토 (1장은 PR #10 에서 추가) (목차: `docs/plans/2026-10-20_공통-가이드-목차.md`)

## Completed Tasks
- [x] 프로젝트 초기 설정 (git init, CLAUDE.md, 폴더 구조) — 커밋 `a358655`
- [x] GitHub 공개 저장소 생성 (amecoder/hello-llm)
- [x] README.md 작성 (대상 독자·학습 로드맵·진행 상황) — PR #1, squash `d676be6`
- [x] 경쟁 분석 리포트 (`docs/reports/2026-10-20_경쟁-분석.md`)
- [x] 공통 가이드 1~4장 1차 작성 (LLM이란·화제인 이유·배워야 하는 이유·프롬프트 기초) — PR #2, squash `db3cc25`
- [x] README 로드맵 Mermaid → Excalidraw (전역 `excalidraw` 스킬 신설, PR #2)
- [x] 공통 가이드 5장 프롬프트 패턴 + 단계 나누기 그림 — PR #3, squash `a013702`
- [x] VitePress 사이트 + GitHub Pages 자동 배포 — PR #4, squash `39c7994`, 첫 배포 run 39380943315 성공
- [x] 홈 "공통 가이드" 링크 404 수정 + 사이트 전용 홈(`index.md`, 장별 카드) — PR #5, squash `023c0d4`
- [x] 6장 대화 다듬기 + 5장 전문 용어·CoT 보강 — PR #6, squash `f391195`
- [x] 7장 구조화 프롬프트(마크다운·XML·JSON·JSONL) 신설, 안전·실습은 8·9장으로 — PR #7, squash `769ba51`
- [x] 7장 메타 프롬프팅 팁 + `PromptBuilder` 편집기, 단위 테스트 7개, CI 테스트 단계 — PR #8, squash `b4b386c`
- [x] 7장 메타 프롬프팅 절을 8장으로 분리·확장(정리·질문받기·고치기·틀), 안전 9장·실습 10장으로 — PR #9, squash `1e21192`
- [x] 1장 「정말 생각하는 걸까?」·「글만 읽는 게 아니에요(멀티모달)」 절, 용어 정리 표, 각주 5개 + 상단 메뉴 ChatGPT·Claude·Gemini 바로가기 — PR #10, squash `db44b56`
- [x] 1장 「생각하는가」 최신 연구 보강(해석 가능성·생각 글 충실성·내성·낯선 문제 약점) + 리서치 리포트 `docs/reports/2026-10-21_LLM-추론-최신-연구.md` + CLAUDE.md 「리서치 재사용」 규칙 — PR #11, squash `0713469`
- [x] 1장 연구 출처 성격 표기(「읽기 전에」·프리프린트 표시) + 5장 「오래 생각하게 한다고 늘 나아지지 않는다」(Inverse Scaling) — PR #12, squash `ad7ac11`
- [x] 9장 안전하게 쓰기(환각·개인정보·저작권·프롬프트 인젝션·체크리스트) — PR #13, squash `d48fdc3`
- [x] 초보자 이해도 리뷰(codex·agy) 반영, 7장 JSON 접기, 그림 6개·영상 링크·휴대폰 그림 CSS — PR #14, squash `cabb959`
- [x] 5장 패턴 지도·7장 마크다운 그림, 편집기 타입 선언(env.d.ts·tsconfig.json) — PR #15, squash `cb966ce`
- [x] 1장 「모델의 크기 — 매개변수」 절(조절 손잡이 그림, B 단위 표, 크기 vs 학습 데이터, 상용 모델 비공개) — PR #16, squash `17b92e1`
- [x] 절마다 확인 퀴즈 49개(`<Quiz>`) + LLM 이해 인증 시험 페이지(`<CertExam>`, 20문제·골드/실버/브론즈·PNG 배지) — PR #17, squash `5414cce`. 새 장에는 퀴즈를 함께 넣는다(CLAUDE.md 「새 장을 추가할 때」 5번)

## Key Decisions
- 가이드 폴더는 단계 번호 방식 (`00-common` → `10/11` → `20/21` → `30-ai-sdlc`)
- 독자용 본문은 `guide/`, 운영 문서는 `docs/` 로 분리
- 실습은 동일 UI + 코치 마크 방식 (스택 미정)

## Files Modified
- CLAUDE.md, HANDOFF.md, CHANGELOG.md 생성
- `guide/*`, `docs/*` 디렉토리 생성 (.gitkeep)
- README.md 생성

## 주의
- PR 머지 명령을 사용자가 중단해도 GitHub 쪽에서는 이미 머지됐을 수 있다 — 중단 뒤에는 `gh pr view <번호> --json mergedAt` 으로 먼저 확인(PR #14 때 머지 후 브랜치에 올린 커밋이 main 에서 빠져 PR #15 로 옮김)
- 9장 개인정보 절의 서비스별 수치(Anthropic 5년/30일, Gemini 사람 검토)는 정책이 자주 바뀐다 — 2단계 서비스 가이드를 쓸 때 다시 확인. OpenAI 도움말은 WebFetch 403
- 「AI가 생각하는가·추론 한계」 근거는 `docs/reports/2026-10-21_LLM-추론-최신-연구.md` 를 먼저 본다 — DeepSeek-R1 의 AIME 15.6%→77.9% 는 Nature 원문 재대조 실패라 본문에 쓰지 않았다
- 샌드박스 안에서는 `.bashrc`·`.mcp.json` 등 가짜 장치 파일이 untracked로 보인다 — `git add .` 금지, 파일을 지정해서 add
- `gh` 는 샌드박스 안에서 keyring을 못 읽어 "token invalid"로 오진된다 — 샌드박스 밖에서 실행
- VitePress 죽은 링크 검사는 원본 기준이라 rewrites 로 생긴 404 를 못 잡는다 — 사이트 링크를 바꿨으면 실제 사이트에서 눌러 확인
