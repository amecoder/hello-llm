# HANDOFF.md

## Current State: 공통 가이드 1~5장 머지 완료 (2026-10-20) — 다음은 6장

- 저장소: https://github.com/amecoder/hello-llm (public, 기본 브랜치 `main`)

## Pending Tasks
- [ ] 실습 UI 기술 스택 결정 — 실제 서비스와 같은 UI 재현 + 코치 마크 필요
- [ ] `guide/00-common` 6~8장 작성 (목차: `docs/plans/2026-10-20_공통-가이드-목차.md`)## Completed Tasks
- [x] 프로젝트 초기 설정 (git init, CLAUDE.md, 폴더 구조) — 커밋 `a358655`
- [x] GitHub 공개 저장소 생성 (amecoder/hello-llm)
- [x] README.md 작성 (대상 독자·학습 로드맵·진행 상황) — PR #1, squash `d676be6`
- [x] 경쟁 분석 리포트 (`docs/reports/2026-10-20_경쟁-분석.md`)
- [x] 공통 가이드 1~4장 1차 작성 (LLM이란·화제인 이유·배워야 하는 이유·프롬프트 기초) — PR #2, squash `db3cc25`
- [x] README 로드맵 Mermaid → Excalidraw (전역 `excalidraw` 스킬 신설, PR #2)
- [x] 공통 가이드 5장 프롬프트 패턴 + 단계 나누기 그림 — PR #3, squash `a013702`

## Key Decisions
- 가이드 폴더는 단계 번호 방식 (`00-common` → `10/11` → `20/21` → `30-ai-sdlc`)
- 독자용 본문은 `guide/`, 운영 문서는 `docs/` 로 분리
- 실습은 동일 UI + 코치 마크 방식 (스택 미정)

## Files Modified
- CLAUDE.md, HANDOFF.md, CHANGELOG.md 생성
- `guide/*`, `docs/*` 디렉토리 생성 (.gitkeep)
- README.md 생성

## 주의
- 샌드박스 안에서는 `.bashrc`·`.mcp.json` 등 가짜 장치 파일이 untracked로 보인다 — `git add .` 금지, 파일을 지정해서 add
- `gh` 는 샌드박스 안에서 keyring을 못 읽어 "token invalid"로 오진된다 — 샌드박스 밖에서 실행
