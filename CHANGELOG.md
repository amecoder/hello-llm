# Changelog

## [2026-10-20]

### Added
- 프로젝트 초기 설정
- CLAUDE.md, HANDOFF.md 생성
- 가이드 단계별 폴더(`guide/00-common` ~ `guide/30-ai-sdlc`)와 `docs/` 디렉토리
- GitHub 공개 저장소 생성 (amecoder/hello-llm)
- README.md: 대상 독자, 4단계 학습 로드맵, 진행 상황 (#1, `d676be6`)
- 공통 가이드 1~4장, 목차 계획, 경쟁 분석 리포트 (#2, `db3cc25`)
- 공통 가이드 5장 프롬프트 패턴, 단계 나누기 그림 (#3, `a013702`)
- VitePress 사이트와 GitHub Pages 자동 배포 — https://amecoder.github.io/hello-llm/ (#4, `39c7994`)

- 사이트 전용 홈 `index.md` — 시작 버튼, 장별 바로가기 카드 (#5, `023c0d4`)

### Fixed
- 사이트 홈의 "공통 가이드" 링크가 404 로 가던 문제 — rewrites 가 본문 링크를 바꾸지 않는 것이 원인 (#5)

### Changed
- README 로드맵 그림을 Mermaid에서 Excalidraw SVG(`assets/roadmap.*`)로 교체 (#2)
