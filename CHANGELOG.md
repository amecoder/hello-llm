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
- 공통 가이드 6장 대화 다듬기, 판단 흐름도 (#6, `f391195`)
- 5장 패턴별 전문 용어·원 논문 각주·용어 정리 표, 8번 패턴 Chain-of-Thought (#6)
- 공통 가이드 7장 구조화 프롬프트 — 마크다운·XML 태그·JSON·CSV·JSONL (#7, `769ba51`)
- 7장 프롬프트 편집기(`<PromptBuilder />`)와 메타 프롬프팅 팁, 단위 테스트·배포 전 테스트 단계 (#8, `b4b386c`)

### Changed (#7)
- 「안전하게 쓰기」 7장 → 8장, 「실습 과제」 8장 → 9장 (아직 미작성)

### Fixed
- 사이트 홈의 "공통 가이드" 링크가 404 로 가던 문제 — rewrites 가 본문 링크를 바꾸지 않는 것이 원인 (#5)

### Changed
- README 로드맵 그림을 Mermaid에서 Excalidraw SVG(`assets/roadmap.*`)로 교체 (#2)
