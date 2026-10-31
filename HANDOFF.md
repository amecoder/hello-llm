# HANDOFF.md

## Current State: 2단계 Gemini 가이드 1~5장 공개(PR #47~#50, 2026-10-31) · 1단계 공통 가이드 완성(1~9장 + 10장 실습 과제) + 2단계 ChatGPT 가이드 11장(11장 전문가처럼 쓰기, 도움말 197개 전수 확인 반영 2026-10-24) + 확인 퀴즈 51개·이해도 확인 시험(입문·중급·상급, 36문제)·AI 지식 레벨 시험(초급~전문가, 240문제)·바로 쓰는 프롬프트 모음 32개 · 모음은 마크다운 형식 · 첫 화면은 소개 페이지, 장별 카드는 /guide/ · 읽은 장 진행 현황·닉네임 (2026-10-23) — 다음은 2단계 Claude 가이드 또는 남은 ChatGPT 캡처(`docs/plans/2026-10-23_공통가이드-이후-로드맵-검토.md`)

- 저장소: https://github.com/amecoder/hello-llm (public, 기본 브랜치 `main`)
- 사이트: https://amecoder.github.io/hello-llm/ (VitePress, `main` 푸시마다 자동 배포)

## Pending Tasks
- [ ] **(다음 세션 시작점, 2026-10-29~) 사용자가 문서 전체를 직접 검토 중** — 사용자가 고칠 곳을 하나씩 알려 줄 때까지 기다린다. 받으면 새 feature 브랜치 → 수정 → Gemini 검토(`agy --model gemini-4-argon-high`) → PR → 사용자 확인 → 머지 → HANDOFF·CHANGELOG. 아래 「화면 변화 반영」은 검토 범위와 겹치므로 검토 지적과 함께 처리하는 것을 추천했다(아직 승인 전)
  - 1차 반영 완료(2026-10-30, PR #44): 1장 학습·도구 호출, 영상 임베드, 붉은 진행 막대, 시험 문구. 이 PR은 메모리 부족(자원 보호 훅)으로 Gemini 검토 없이 사용자 요청으로 머지했다
  - (제안) 아직 자막으로 점검하지 않은 영상: 1장 티타임즈TV·삼성SDS, 3장 Karpathy(영어), 9장 Claude 환각(영어) — 좋은 우리말 영상이 있으면 교체(사용자: "되도록 한글 영상")
  - (제안) 확인 퀴즈(`quiz-bank.ts`·`quiz-bank-claude.ts`)와 AI 지식 레벨 시험(`level-bank/`)도 이해도 시험처럼 쉬운 말로 — 사용자 지적은 이해도 확인 시험만이었다
  - (제안) 「확률을 정하는 재료」·「조심할 점 다섯 가지」 그림을 1장 본문에 넣기 — 지운 슬라이드에서만 쓰던 그림이라 저장소에는 없다(필요하면 다시 그린다)
- [ ] **(진행 중, 2026-10-30~) 2단계 Gemini 가이드** — 사용자 결정: ChatGPT·Claude와 같은 구성(11~12장), 캡처는 **유료 계정(Google AI Pro 등)**, 사용자가 Playwright 브라우저에 직접 로그인. 순서: Google 공식 도움말 리포트(`docs/reports/YYYY-MM-DD_Gemini-공식-자료.md`, VERIFIED) → 목차 → 장별 작성·캡처·퀴즈. 폴더 `guide/12-gemini/`, 장 번호 base 300(`theme/stages.ts`), 상단 「목차」 메뉴에 「2단계 · Gemini」 추가(테스트가 강제). 유료 전용 기능은 본문에 "유료" 표시
  - 진행(2026-10-30, **PR #46 머지, squash `aa869d5`**): 리포트 `docs/reports/2026-10-30_Gemini-공식-자료.md` 완료(도움말 130개, 1,082행, 인용 대조 불일치 0, 12장 목차안, 「실제 화면에서 직접 확인」 절). 원문은 scratchpad에 받았으므로 **다음 세션에는 다시 받아야 한다**(429 요청 제한 주의 — 동시 4개도 막혔다, 간격을 두고 받는다). 미수집 2개: 17216260·18755601
  - 다음: 12장 목차안(리포트 「가이드 목차 제안」)으로 진행 추천, 사용자 확인 대기 · 가이드 본문은 새 브랜치에서 → `theme/stages.ts`(gemini, base 300)·사이드바·상단 「목차」 메뉴·`guide/12-gemini/README.md` → 1장부터 작성. 캡처 전 사이드바 대화 제목·계정 이름·이메일 가리기(`.playwright-mcp/` 가리기 스크립트를 Gemini용으로 새로 만든다). **화면을 읽을 때 사이드바를 범위에서 빼고 읽는다**(2026-10-30 실수: 스크롤 추출로 사용자 대화 제목 약 100개를 읽었다 — 문서에는 안 옮김)
  - 리눅스 머신의 Playwright 브라우저에는 사용자 Gemini 계정(Google AI Pro)이 로그인되어 있었다 — **Mac에서는 다시 로그인해야 한다**
  - **Mac에서 이어 하기 (2026-10-31 리눅스에서 넘김)**
    1. `git fetch && git checkout docs/gemini-guide-body && npm ci` — 이 브랜치에서 가이드 본문을 이어 쓴다(아직 main 대비 도구 스크립트 2개 + 이 HANDOFF 갱신뿐, PR 전)
    2. 도움말 원문을 다시 받는다: 빈 작업 폴더(예: scratchpad 아래 `gemini/`)에 `raw/` 를 만들고 그 폴더에서 `python3 <저장소>/docs/tools/gemini-fetch.py` (동시 1개로 고쳐 두었다 — 429 방지). 인용 대조는 리포트 부록 표를 `parts/*.md` 로 나눠 두고 `python3 docs/tools/gemini-verify.py <작업 폴더>` (2026-10-31 리눅스 재실행: 1,082행 문제 0)
    3. 가리기 스크립트(`.playwright-mcp/*.js`)는 gitignore라 Mac에 없다 — ChatGPT·Claude용도 Mac에서 새로 만들거나 리눅스에서 따로 옮겨야 한다. Gemini용은 어차피 새로 만든다
    4. Mac은 웹 조작 1순위가 `ego-browser`(전역 `rules/workflow.md`)지만, 캡처는 지금까지 사용자가 로그인한 Playwright 브라우저로 찍었다(CLAUDE.md 9번). 미리보기 포트는 Mac에서는 기본 5173이 비어 있으면 그대로 쓴다
    5. 사용자 결정(2026-10-31): 12장 목차 그대로 · 1~2장을 먼저 보여 주기 · 가이드 PR을 두 번(1~6장 / 7~12장)으로 나누기 — 셋 다 승인
  - 진행(2026-10-31, Mac, **PR #47 머지, squash `0bac6c3`** — 사용자가 1~6장 PR 계획 대신 1·2장으로 먼저 머지하자고 함): 뼈대(`stages.ts` gemini base 300 · 사이드바 · 상단 「목차」 · `guide/index.md` 카드 · README) + `guide/12-gemini/README.md` + 1장·2장 본문 + 퀴즈 12문제(`theme/quiz-bank-gemini.ts`). 테스트 89 통과, 빌드 통과. 원문 132개는 scratchpad `gemini/raw/` 에 다시 받음(샌드박스가 support.google.com 을 막아 샌드박스 밖에서 실행)
    - 각주 영어 인용은 오늘 받은 원문과 대조해 불일치 0. **13275745 의 「다른 답안(drafts)」 문장은 10-30 이후 원문에서 사라져** 2장에서 뺐다 — 리포트 A28 은 이제 낡은 값
    - 캡처 8곳 완료(2026-10-31, Mac Playwright, 사용자 로그인): 원본 `shot-0N-*.png` + 번호 그림 `*-marked.png`, 좌표 `docs/tools/gemini-shot-marks.json`. `mark-shots.py` 는 Mac 글꼴(Arial Bold) 대체 경로를 넣었다
    - **10-31 화면 변화**: + 메뉴에서 Canvas·Deep Research·가이드 학습·개인 인텔리전스가 「도구 더보기 ›」 아래로 들어갔다. 임시 채팅 안내 "안전을 위해 72시간 동안 저장됩니다". 「사용량 한도」 화면(/usage)에 「자동 모델 선택」 스위치가 보이지 않는다(도움말 A55와 다름). 로그아웃 화면은 모델이 「Flash-Lite」 고정
    - 가리기 스크립트 `.playwright-mcp/gemini-mask.js`(gitignore): 대화(`.chat-history a.gem-nav-list-item`)·노트북(`a[href^="/notebook/"]`) 제목, `span.mavatar-user-name`, 아바타, `aria-label` 에 `@` 가 든 계정 링크를 바꾼다. `__gemLeak()` 가 미가림 제목 수·표시 이름·계정 이름·이메일을 검사 — 0이 아니면 찍지 않는다. **함정 3개**: ① 노트북 목록은 대화 목록과 구조가 달라 처음에 빠졌다(실제 노트북 제목 3개·표시 이름이 찍혀 그림을 바로 지움) ② 표시 이름은 Google 계정 이름과 달라 따로 잡아야 한다 ③ 페이지가 Trusted Types 라 `addScriptTag` 불가 — `context().addInitScript({ path })` 후 새로고침. 한 번 등록한 init 스크립트는 못 지우므로 새 판은 interval 이름을 바꾸고 옛 것을 `clearInterval`
    - 검토: Codex·agy 둘 다 사용 한도(agy 는 2026-11-01 낮 무렵 풀림) → 내부 code-reviewer. [필수] 2건(「요금제 보기」 근거 없음, 가족 공유 "최대 5명" 근거 없음)·[제안] 7건 반영
    - **남은 [제안] 2건**: 2장 옆 메뉴 기능 설명(「라이브러리」「예약됨」「맞춤설정」「노트북」, "맨 위가 최근 대화")과 설정 표 "하는 일" 칸에 각주가 없다 — 3장 이후 해당 장을 쓸 때 근거 각주를 붙인다(예약됨 16316416, 채팅 검색 13666746, 메모리 가져오기 16868299, 공개 링크 13743730)
  - 진행(2026-10-31, **PR #49 머지, squash `66dac88`**): 4장 「파일과 만들기」(파일 올리기·Canvas·Canvas 앱 안전·이미지·동영상·음악·워터마크 확인) + 퀴즈 6문제(ch304-*). 근거 84줄 원문 대조 84/84, 요약에만 기댄 9문장은 원문 문장을 찾아 각주에 추가. 캡처 2장(「이미지」 화면, Canvas 연습 문서 — 연습 대화는 삭제, 모델 「Argon 높음」 복구). 이미지·영상·음악은 사용량 때문에 만들지 않음
    - **10-31 화면**: Canvas 는 대화 **안에** 열리고 「전체 화면」으로 키운다(도움말의 "패널"과 다름). + 메뉴의 Canvas 는 `menuitemcheckbox`. 「이미지」 화면은 처음 열 때 안내 창("Nano Banana 2 사용") → 「사용해 보기」로 닫음. 한국은 「미디어 워터마크」 설정이 Ultra 만 보임(Pro 설정 메뉴에 없음 확인)
  - 진행(2026-10-31, **PR #50 머지, squash `f611f47`**): 5장 「기억과 맞춤 설정」(세 가지 길, 메모리, 지침, 다른 AI에서 옮겨 오기) + 퀴즈 4문제(ch305-*). 근거 61줄 대조 61/61, 요약에만 기댄 6문장 원문 확인. 캡처 2장(「개인 인텔리전스」 화면 — 「Gemini 요청 사항」 안쪽은 사용자 지침이라 열지 않음, 「Gemini로 메모리 가져오기」 화면 — 아무것도 가져오지 않음)
    - **한국에서 안 되는 것**: 대화로 기억시키기·메모리 요약은 미국 전용 → 본문은 지침(「Gemini 요청 사항」)으로 대신하라고 안내
  - 진행(2026-10-31, 브랜치 `docs/gemini-ch6`): 6장 「검색과 Deep Research」(근거 확인, Deep Research, Deep Think→Argon, 노트북, 가이드 학습·퀴즈·플래시카드) + 퀴즈 4문제(ch306-*). 근거 44줄 대조 44/44. 캡처 2장(Deep Research 소스 메뉴, 진행 화면)
    - **사고 1건**: Deep Research 계획만 받으려 했는데 「연구 시작」을 누르지 않았는데도 조사가 시작됐다(대화에 "연구 시작" 말풍선이 생김, 원인 미확인 — 계획 화면 자동 시작으로 추정). 진행 화면을 찍고 멈춤 → 「예, 취소합니다」로 취소, 연습 대화 삭제. 본문에 "계획을 고치려면 나오자마자 「계획 수정」"으로 안내
    - **화면 이름**: 「계획 수정」「연구 시작」(도움말 「계획서 수정」「조사 시작」). Deep Research 화면에서는 옆 메뉴가 접히고 오른쪽 위 「대화 작업 메뉴 열기」가 없어, 대화 삭제는 `/app` 의 옆 메뉴에서 했다
    - 리포트 B73 확인: 원문의 "You cannot add files from Google Drive as sources" 는 **활동 기록 보관이 꺼졌을 때** 목록이다(평소엔 Drive 자료 가능)
    - 노트북은 「새 노트북」을 누르면 실제로 생길 수 있어 찍지 않음
    - 다음: 7장 「스킬과 연결된 앱」(부록 C 5~12절, D). 사용자 검토 의견이 오면 함께 반영. 원격 브랜치 `docs/gemini-guide-body`·`docs/gemini-ch3`·`docs/gemini-ch4`·`docs/gemini-ch5` 정리는 사용자
  - 원격 브랜치 `docs/gemini-guide`(PR #46 머지됨)·`docs/nav-dropdown`(PR #45 머지됨)은 삭제 권한 규칙 때문에 남아 있다 — 정리는 사용자가 한다
  - 진행(2026-10-31, **PR #48 머지, squash `9259875`**): 3장 「대화 관리」(찾기·고정·이름·삭제, 분기, 공유 링크, 내보내기, 재생성·출처) + 퀴즈 6문제(ch303-*). 근거 B1~B47 을 10-31 원문과 대조해 47/47 일치. 테스트 89·빌드 통과. 캡처 4장 완료(연습 대화 `[연습] 독서 모임 준비물` 로 찍고 삭제, 모델은 「Argon 높음」으로 되돌림). 「채팅 검색」 결과(다른 대화 8개가 섞임)와 「내 공개 링크」는 개인 정보라 그림 없이 글로만
    - **10-31 화면은 도움말과 메뉴 이름·위치가 다르다** → 본문은 화면 기준, 도움말 이름은 각주: 「새 채팅에서 분기」→「새 채팅에서 브랜치 생성」, 「재생성」→「다시 실행」, 「공유 및 내보내기」·답 아래 「공유」 없음 → 답 아래 「옵션 더보기」(Docs·Gmail·브랜치·듣기·사고 단계 표시)와 대화 메뉴(「대화 공유」·「PDF 다운로드」 등), 「Sheets로 내보내기」는 표 아래 점 세 개. "표로 만들어 줘"만 보내면 Google Sheets 연결을 시도하다 멈춤 → 프롬프트에 "다른 앱은 쓰지 말고 이 채팅에 표로" 추가
    - 가리기 스크립트 v6: 대화·노트북 링크의 `aria-label` 도 바꾼다(전에는 화면 글자만 바꿔 Playwright 오류 기록에 실제 제목 1개가 찍혔다 — 옮기지 않음). `[연습]` 이 든 대화는 가리지 않는다. 버튼은 이름 대신 x>290(답 영역) 위치로 고른다
- [ ] **(Gemini 12장 완료 후) 3단계** — 2026-10-31 사용자 결정: **Gemini 3~12장을 먼저 끝낸 뒤** 시작. 도구 순서 **Claude Code → Codex → Antigravity**(Antigravity 는 `guide/22-antigravity/` 로 새 번호, CLAUDE.md 로드맵·`stages.ts`·README 로드맵 그림 갱신 필요). Claude Code 는 **데스크톱 앱(터미널 없이)부터** 시작하고 터미널(CLI)은 뒤 장. 캡처는 **사용자 유료 계정**, 이름·프로젝트는 화면에서만 가림. 순서: 공식 문서 사실 확인 리포트 → 목차 → 장별 작성(Gemini 와 같은 방식). 독자층이 "도구를 설치하는 사람"으로 바뀐다(`docs/plans/2026-10-23_공통가이드-이후-로드맵-검토.md`)
- 정리 완료(2026-10-29): Playwright 브라우저의 claude.ai·ChatGPT·Skilljar 로그아웃(사용자), 로컬 브랜치 `docs/expert-common-chapter`·`docs/practice-thread`·`docs/fill-screenshots` 삭제(사용자). 로컬은 `main`만 남음
- [x] 품질 리뷰 개선안 ①~⑤ 완료(PR #38~#42). ⑤ = 1단계 11장 「전문가처럼 쓰기」 신설 + 이어지는 과제 「독서 모임 준비하기」(PR #42, squash `752e131`, 2026-10-28)
- [ ] 남은 그림 자리 21곳(PR #43, squash `6cfba22`에서 36 → 21). 남은 곳: 휴대폰 앱·아이폰 단축어·구글 시트·크롬 확장, Claude 유료 기능(Cowork·예약·리서치)·옛 화면, ChatGPT 공유 창(이 브라우저에서 안 열림)·잠긴 대화 PIN·맞춤형 GPT·프로젝트 소스·음성·Free 생각하기, 라이브러리·Claude 메모리 목록(개인 정보가 많아 안 찍음)
- [ ] (제안) 2026-10-28 화면 변화 반영 검토: ChatGPT 설정이 별도 페이지(`/settings/…`)로 바뀜 — 2·5·8장의 설정 경로·그림 점검. Claude는 대화를 「세션」, 문서 결과물을 「Claude Design」으로 부름 — 3·4장 용어 점검. ChatGPT Plus + 메뉴에 「Template Creator — personal skills」가 보임 — 11장 "스킬은 회사·학교 요금제" 문장 재확인
- [ ] (대기) PR 자동 처리는 dev-standards `autopilot` 개발이 끝난 뒤 붙인다(2026-10-26 사용자 결정). 그때 `/plugin install autopilot --marketplace amecoder/dev-standards` → `/autopilot:init` → 시크릿 `engine_key`·변수 `AUTOPILOT_MODE` 는 사용자가 설정. hello-llm 은 공개 저장소라 브랜치 보호(Q0) 조건은 무료로 충족. HANDOFF·CHANGELOG 갱신·배포 확인은 autopilot 범위 밖
- [ ] 실습 UI 구현 — VitePress 안 Vue 컴포넌트, 동일 UI + 코치 마크, API 호출 없는 시뮬레이션 (첫 부품 `PromptBuilder` 완료)
- [ ] (제안) 실제 독자(중학생·일반인 각 1~2명) 읽기 테스트로 1·5·7장 이해도 실측 — 추정 리뷰: `docs/reports/2026-10-21_초보자-이해도-리뷰.md`
- [ ] (제안) 컴포넌트 E2E 테스트 영구화 — 지금은 scratchpad 의 Playwright 스크립트로 수동 검증만 함
- [ ] (제안) favicon 추가 — 없어서 브라우저 콘솔에 404 가 한 줄 찍힘
- [ ] (선택) deploy.yml 의 `configure-pages@v4`·`upload-pages-artifact@v3` 가 Node 20 경고 — 새 메이저 나오면 올리기
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
- [x] 바로 쓰는 프롬프트 모음(`prompt-library.md`, 1~9장 프롬프트 32개·쓰임새별 8절) + 한글 앵커 수정(`.vitepress/slugify.ts` — 기본 slugify 의 NFKD 가 한글을 자모로 쪼개 `#한글` 링크가 절로 안 가던 문제) — PR #18, squash `2526f0c`. 본문 프롬프트를 고치면 모음도 고친다(CLAUDE.md 6번, 테스트가 검사)
- [x] 프롬프트 모음의 XML 예시 7개를 마크다운 제목(`## 상황/자료/할 일/답의 모양`) + 구분선 `---` 방식으로 교체 — 7장은 XML 설명 유지하고 마크다운 짝 예시 추가, 8·9장 예시는 마크다운으로. 모음에 XML 태그가 있으면 테스트 실패 — PR #19, squash `d664280`
- [x] 첫 화면을 소개 페이지(`index.md`)로, 기존 홈의 장별 카드·로드맵은 「전체 목차」(`guide/index.md`, `/guide/`)로 이동. 카드와 사이드바가 같은 순서인지 `tests/site-pages.test.ts` 가 검사 — PR #20, squash `29b4b5e`
- [x] 읽은 장 진행 현황(장 끝 「다 읽음」 `ChapterDone`, 첫 화면·목차 `MyProgress` — 닉네임·진행 현황·초기화), 시험 배지 이름 자동 채움, 모든 페이지 맨 위 스크롤 진행 막대(`ScrollProgress`). 저장은 localStorage `hello-llm:progress` 한 곳뿐(fingerprint·서버 저장은 「모으지 않음」 약속과 충돌해 사용자와 합의해 제외) — PR #21, squash `0d48b51`
- [x] AI·LLM 인증 체계 리서치 리포트(`docs/reports/2026-10-23_LLM-인증-체계-리서치.md`) — 입문·중급·상급 배지 체계 제안, 시험 전용 문제 은행·브론즈 60% 검토, 「인증」 명칭의 자격기본법 확인 필요 — PR #22, squash `2a5178b`
- [x] 화면에 보이는 이름을 hello-ai 로(사이트 제목·첫 화면·배지·README 제목). 저장소·주소·저장 키는 hello-llm 유지 — 사용자 결정 — PR #23, squash `71c4291`
- [x] 이해도 확인 시험 개편 — 「내 AI 이해 레벨은?」, 시험 전용 36문제(`exam-bank.ts`, 개념·상황 판단), 입문 60%/중급 75%+상황 7/상급 90%+상황 9+실습 자기 점검, 퀴즈 49개 쉬운 말로, 로드맵 검토 문서 — PR #24, squash `4673b17`
- [x] 10장 실습 과제 모음(기본 8 + 종합 1, 점검표 = 상급 실습 과제 `PRACTICE_CHECKS`, 테스트로 고정), 확인 퀴즈 2개, 진행 현황 10장 기준, 시험 범위 1~9장(`EXAM_CHAPTERS`) — PR #25, squash `7848283`. 10장 프롬프트는 앞 장 프롬프트의 빈칸 틀이라 프롬프트 모음에 넣지 않음(원본이 이미 있음)
- [x] 프롬프트 모음에 GitHub 모음집 추천 3곳(prompts.chat·Prompt Engineering Guide 한국어판·Anthropic 연습 과정) — PR #26, squash `26fb593`
- [x] AI 지식 레벨 시험(`level-test.md`, `<LevelTest>`) — 4레벨 × 5과목 × 10문제(과목당 12문제 은행, `theme/level-bank/*.ts`), 합격 60%+과목 40%(과락), 아래 레벨 합격 시 다음 레벨 열림(`progress.passed`). 고급·전문가는 논문·공식 문서 근거, 작성자와 다른 에이전트가 출처 검증 — PR #27, squash `7b51e29`
- [x] 2단계 ChatGPT 가이드(`guide/11-chatgpt/` 10장, 캡처 19장, 퀴즈 52문제·장 번호 101~110, 단계별 진행 현황 `stages.ts`), ChatGPT 공식 자료 리포트(원문 55쪽 대조 + 실제 화면), 퀴즈 LLM 교차 검증 리포트(379문제, 정답 오류 0), 홈 문구·레벨 잠금 문구 — PR #28, squash `0509e39`
- [x] ChatGPT 11장 「전문가처럼 쓰기」(OpenAI 도움말·Academy 43쪽 리서치 기반, 항목마다 해당 절 링크), 퀴즈 11문제, 프롬프트 모음 +3(모음 테스트가 2단계 장도 근거로 인정), 1·2단계 장 안내 88곳 링크화 — PR #29, squash `050a97c`
- [x] ChatGPT 도움말 컬렉션 197개 전수 확인 → 1~11장 보완, 새 절 5개·퀴즈 5문제·프롬프트 2개, 임시 채팅 개인화 선택 정정 — PR #30, squash `e4d5e63`
- [x] ChatGPT 캡처 21장에 빨간 번호 상자 + 본문·표 같은 번호, 관련 부분만 잘라 크게 — PR #31, squash `cbe1b33`
- [x] 11장에 무료 공개 강좌 5개(원문 각주·확인일 2026-10-25), Codex 리뷰 [필수] 2건 반영 — PR #32, squash `55267c7`
- [x] Academy 세 강좌 본문 반영 + Codex·agy 교차 리뷰 보완(2·4·5·7·11장) + 문체 규칙(CLAUDE.md) — PR #33, squash `7b6826a`
- [x] 1단계 1~10장·ChatGPT 1~10장·11장 남은 절을 Academy 문체로 다듬기(제목·프롬프트·각주·링크 그대로, Codex [필수] 3건 반영) — PR #34, squash `efbd54c`
- [x] 2단계 Claude 사용 가이드 11장 + 퀴즈 79문제(`quiz-bank-claude.ts`) + 사실 확인 리포트(`docs/reports/2026-10-26_Claude-공식-자료.md`, VERIFIED 878개) — PR #35, squash `7b0fbae`
- [x] Claude 화면 캡처 18장(무료 계정) + 화면 기준 메뉴 이름 + Claude 12장 「전문가처럼 쓰기」 + Claude Academy 강좌 5개 비교 보완(1단계·Claude 장) — PR #36, squash `022737b`
- [x] 검색·리서치 캡처 8장(Claude 6장 웹 검색 답·결과 목록·출처·`/deep`, ChatGPT 6장 심층 리서치 계획·진행·보고서·내려받기) + 공식 강좌 대비 품질 리뷰(`docs/reports/2026-10-27_공식-강좌-대비-품질-리뷰.md`, 우리 25·27점 vs 강좌 29·31점), Gemini 검토 [필수] 3건 반영 — PR #37, squash `578dc67`
- [x] 개선안 ① Claude 확인 퀴즈 45문항을 상황 판단형으로(id·순서 그대로, 정답은 퀴즈 위 절 본문 근거), Gemini 검토 [필수] 7건 해결 — PR #38, squash `bde735f`
- [x] 개선안 ② Claude 장 본문을 새 화면 기준 한 길로, 옛 화면·도움말 충돌은 접기 상자 16개·각주로, "도움말은" 주어 문장 정리, 원문보다 센 서술 4곳 — PR #39, squash `b7b43a9`
- [x] 개선안 ③ 7개 장(Claude 4·7·8, ChatGPT 4·7·9, 1단계 9)에 공식 영상 11개 링크(oEmbed·공개일 확인, 소개 문구는 채널 설명 범위 안) — PR #40, squash `3e4af98`
- [x] 개선안 ④ 17개 프롬프트(Claude 9·ChatGPT 8)에 "받는 답은 대략 이렇게" 접기 상자 예시, 실제 세상 값은 ○○ 빈칸 — PR #41, squash `657058e`
- [x] 사용자 검토 1차: 1장 「학습했다는 건 무슨 뜻일까?」·「검색하고 도구를 쓰는 AI」 신설과 답 만들기·멀티모달 보강(그림 2·퀴즈 2·각주 17), 영상 20개 임베드(`<YouTube>`, 2장 우리말 영상 절 신설, 1장 3B1B 공식 한국어판), 스크롤 막대 빨강, 이해도 확인 시험 36문제 쉬운 말(질문 평균 75→51자) — PR #44, squash `2e71606`
- [x] 상단 메뉴를 「목차 ▾」·「서비스 바로가기 ▾」 드롭다운 두 개로(목차 메뉴 = `STAGES` 를 테스트로 강제) — PR #45, squash `0d8891a`

## Key Decisions
- 가이드 폴더는 단계 번호 방식 (`00-common` → `10/11` → `20/21` → `30-ai-sdlc`)
- 독자용 본문은 `guide/`, 운영 문서는 `docs/` 로 분리
- 실습은 동일 UI + 코치 마크 방식 (스택 미정)

## Files Modified
- CLAUDE.md, HANDOFF.md, CHANGELOG.md 생성
- `guide/*`, `docs/*` 디렉토리 생성 (.gitkeep)
- README.md 생성

## 주의
- 캡처 가리기 스크립트: ChatGPT는 `.playwright-mcp/gpt-mask.js`, Claude는 `claude-mask.js`(둘 다 gitignore). 두 스크립트를 한 브라우저에 함께 넣으면 예전에는 타이머 이름이 겹쳐 가리기가 빠졌다(2026-10-28, 지금은 `__gmt`·`__cmt`로 분리). 페이지를 옮긴 뒤에는 `apply-gpt-mask.js` 로 다시 적용하고, 찍기 직전마다 실제 이름이 남았는지 글자 검사를 한다. ChatGPT 프로필 그림(auth0 이니셜 이미지)과 사용자명 `@amecoder` 도 가린다
- ChatGPT에서 대화를 지워도 올린 파일·만든 그림은 라이브러리에 남는다 — 캡처 뒤 라이브러리에서도 지운다(휴지통 30일)
- 1단계에 11장(`guide/00-common/11-expert.md`, 장 번호 11)이 생겼다(PR #42). 어느 AI에나 통하는 "전문가처럼" 원리는 여기, 메뉴·요금제·서비스 기능은 Claude 12장·ChatGPT 11장. 둘에 같은 설명을 다시 쓰지 말고 링크로 잇는다
- 이어지는 과제의 예시 파일은 `public/practice/`(사이트 주소 `/hello-llm/practice/…`). 날짜·회원 수·회비 합계가 서로 맞물려 있다(수입 210,000원, 지출 중복 제외 114,300원, 회비 낸 회원 16명) — 파일 하나를 고치면 회의록·메모·장부·`practice-kit.md` 점검표를 함께 맞춘다. CSV는 엑셀용 UTF-8 BOM
- 영상은 링크가 아니라 페이지 안에 임베드한다(2026-10-30 사용자 결정, CLAUDE.md 「외부 영상」). 고를 때는 제목만 보지 말고 **자막 전문을 읽는다** — `uvx --from yt-dlp==2026.10.21 yt-dlp --skip-download --write-auto-subs --sub-langs ko --sub-format json3 -- <ID>`(버전 고정, `@latest` 금지, 샌드박스 밖). 단순 timedtext 요청은 빈 값이 온다. 우리말 영상을 우선한다
- 슬라이드 보기는 시범으로 만들었다가 사용자가 "오히려 집중이 안 된다"며 뺐다(2026-10-30) — 다시 제안하지 않는다
- `gh pr merge --delete-branch` 는 권한 규칙에 막힌다(브랜치 삭제 차단). `gh pr merge <번호> --squash` 만 쓰고, 원격·로컬 브랜치 정리는 사용자에게 맡긴다
- 이 머신은 메모리가 빠듯해 자원 보호 훅(남은 메모리 ≤15%)이 백그라운드 실행(미리보기 서버·Gemini 검토)을 자주 막는다. 미리보기는 사용자가 `! cd ~/workspace/lina/hello-llm && npm run docs:dev -- --port 5180 --strictPort` 로 띄운다(5173은 다른 프로젝트가 쓰는 중)
- 2단계 장의 「직접 해 보기」 끝 **이어지는 과제** 문단은 그 장이 가르친 기능만 쓴다(PR #42 리뷰에서 개인정보 장이 설정 화면을 안 쓰던 것을 고침)
- Claude 장 본문은 이 가이드의 캡처 기준(새 Claude 화면) 한 가지 길로 쓴다. 옛 화면 방법·도움말과 화면 이름이 다른 사정은 `::: details` 접기 상자나 각주로 보낸다(PR #39). "도움말은 ~" 주어 문장은 화면에서 확인 못 한 기능·회사 정책·도움말끼리 충돌처럼 출처가 판단 근거일 때만
- ChatGPT 캡처는 원본(`shot-NN-*.png`)과 번호 그림(`*-marked.png`, `shot-01-home-{layout,sidebar,projects,voice}.png`)이 따로 있다. 본문은 번호 그림만 쓴다. 캡처를 새로 찍거나 번호를 옮길 때는 `docs/tools/shot-marks.json` 좌표를 고치고 `python3 docs/tools/mark-shots.py` 로 다시 만든다. 본문의 ①②와 표 「번호」 칸도 함께 맞춘다
- `vitepress preview` 는 시작할 때의 파일 목록만 알아서, 다시 빌드한 뒤에는 서버를 재시작해야 새 그림이 보인다
- 임시 채팅은 2026-10-24부터 「개인화됨/개인화되지 않음」을 고른다(옛 「메모리 끄기」 안내 창은 사라짐). 「Space」가 라이브러리를 대신한다는 도움말이 있으나 이 계정 화면은 아직 「라이브러리」 — 바뀌면 2·3·4·5·7·8장 라이브러리 서술을 함께 고친다
- 도움말 원문 저장본은 세션 scratchpad `openai-all/`(140개)에만 있다. 각주 인용 대조 스크립트 `quote-check.py` 도 scratchpad — 다음 세션에서 쓰려면 다시 받아야 한다
- 11장 무료 강좌 중 DeepLearning.AI는 "베타 기간 한정 무료" — 요금 재확인 때 함께 본다. 검색 도구 `agy` 가 없는 부스트코스 강좌(ai110)를 지어낸 적이 있다 — 강좌·URL은 반드시 원문을 열어 확인
- 문체: 가이드 본문은 CLAUDE.md 「문체 — OpenAI Academy 강좌처럼」 규칙을 따른다(사용자가 기존 문체를 기계적이라 평가). 가이드 본문 전체가 새 문체다(PR #34). 문체만 고칠 때는 제목(앵커)·코드 블록(프롬프트 모음 테스트)·각주 정의를 건드리지 말고, 말이 출처보다 세지지 않았는지 Codex로 대조한다
- Claude 가이드(`guide/10-claude/`, 장 번호 201~212) 캡처는 **무료 계정** 화면이다(2026-10-26). 남은 `<!-- 스크린샷 필요 -->` 약 20곳은 유료 기능(Cowork·리서치·예약)·실제 대화(공유 창 등)가 필요하다. 새 Claude 화면(채팅+Cowork 통합)이 배포 중이라 도움말과 화면 이름이 다르면 화면 이름을 쓴다(예: 「Your Claude」 대신 「설정 → 계정 → Claude 지침」)
- Claude 캡처를 다시 찍을 때: 화면 가리기 스크립트(`.playwright-mcp/claude-mask.js`, gitignore)를 `page.context().addInitScript` 로 넣고, 찍기 직전 이름·이메일이 화면 글자에 남았는지 검사한다. 계정 메뉴에 다른 이메일이 보인 적 있고, 설정 → 메모리·결제·계정·아티팩트 화면에는 실제 메모리·청구서·로그인 위치·내 아티팩트가 그대로 나온다. 번호 그림은 `python3 docs/tools/mark-shots.py docs/tools/claude-shot-marks.json`
- Claude Academy 강좌는 academy.claude.com 으로 옮겨 가 로그인 없이 본문이 열린다(Skilljar 등록 불필요). 강좌의 제품 사실은 도움말과 자주 어긋나므로 일하는 방법만 근거로 쓴다. Codex 는 사용 한도로 2026-11-20까지 못 씀 — 검토는 별도 code-reviewer 에이전트로 했다
- 셸 명령은 `rtk` 가 자동으로 감싸서 `git diff > 파일` 출력이 요약된다. 전체가 필요하면 `rtk proxy git diff`
- `codex exec` 는 `< /dev/null` 없이 백그라운드로 돌리면 stdin 을 기다리다 빈 결과로 끝난다
- 한국 위기 상담 전화번호는 공식 출처 미확인이라 8장에 넣지 않았다. OpenAI Academy 강좌 본문은 2026-10-26 로그인·등록 후 확인(원문 저장본 `.playwright-mcp/academy-*.final.txt`, gitignore)
- 본문에 장을 언급할 때는 `[3장](03-chats.md)`처럼 링크로 쓴다(PR #29에서 글로만 적힌 88곳을 일괄 변환). 2단계 문서 안의 맨 「N장」은 ChatGPT N장, 1단계를 가리킬 때는 「1단계 N장」+ `../00-common/` 링크
- 11장에 `<!-- 스크린샷 필요 -->` 4곳(예약 목록, 데이터 분석 차트, @study 제안, 프로젝트 소스에 추가) 추가 — 예약 목록은 개인 작업이 보여 가림 필요
- ChatGPT 화면 캡처는 사용자가 로그인한 Playwright(MCP) 브라우저에서 찍었다. 찍기 전 화면에서만 개인정보·모델 이름을 바꾸는 스크립트를 매번 다시 넣어야 한다(페이지 이동 시 사라짐). **Work 추천 카드는 계정 맞춤이라 다시 찍을 때마다 내용이 바뀐다 — 반드시 잘라 내거나 가린다**(PR #28 리뷰에서 한 번 새어 나갈 뻔함)
- ChatGPT 장에 `<!-- 스크린샷 필요 -->` 숨김 표시 14곳이 남아 있다(이미지 생성·심층 리서치는 임시 채팅에서 불가, 대화 ••• 메뉴·공유 창·라이브러리는 실제 대화·파일이 보여 보류)
- 퀴즈·시험 정답 교차 검증은 scratchpad `quiz-eval/`(export → run-solver codex|agy → compare). 서비스 문제는 모델 지식이 오래돼 틀리는 경우가 있으니 공식 문서·화면이 우선
- 레벨 시험 문제를 고치면 `tests/level-bank.test.ts`(과목당 12문제·근거 링크·보기 길이 편향·정답 위치)를 통과해야 한다. 고급·전문가 문제의 근거 링크는 외부 사이트라 빌드가 죽은 링크를 못 잡는다 — 2단계 작업 때 함께 다시 확인
- 문제 은행 파일 4개는 각 920줄 안팎으로 800줄 지침 초과(데이터 파일이라 예외로 둠). 더 늘리면 과목별 파일로 쪼갠다
- ChatGPT 공식 도움말은 WebFetch 403 이지만 scratchpad 의 Playwright 스크립트(`openai-fetch.mjs`)로는 원문이 열린다(2026-10-23)
- 시험 이름은 「이해도 확인 시험」으로 바꿨다(PR #24). 탈잉 구매 안내문의 「인증 시험」 문구는 사용자가 직접 고쳐야 함(주소는 그대로). 자격기본법 조문 확인은 여전히 안 함
- 문제를 새로 쓰거나 고치면 `tests/exam-bank.test.ts` 의 「정답이 가장 긴/짧은 보기 ≤ 40%」 검사를 통과해야 한다(리뷰에서 시험 78%·퀴즈 90% 편향 발견)
- 진행 현황 저장 키는 `hello-llm:progress`(localStorage). 구조를 바꾸면 `parseProgress` 가 옛 값을 걸러 내는지 테스트로 확인
- 탈잉 판매용 PDF(「Hello AI - LLM을 이해하고 잘 사용하는 법」, 지은이 MOMO)는 저장소 밖 `~/문서/hello-llm-ebook/` 에 있고 만드는 스크립트는 세션 scratchpad 에만 있었다 — 사용자가 PDF 작업은 더 안 한다고 함(2026-10-22). 구매 안내문의 혜택 링크는 사이트 공개 주소라 저장소·사이트 주소를 바꾸면 안내문도 바꿔야 한다
- `markdown.toc`·`markdown.headers` 를 켜면 `slugify.ts` 를 거기에도 넘겨야 한글 id 가 맞는다
- PR 머지 명령을 사용자가 중단해도 GitHub 쪽에서는 이미 머지됐을 수 있다 — 중단 뒤에는 `gh pr view <번호> --json mergedAt` 으로 먼저 확인(PR #14 때 머지 후 브랜치에 올린 커밋이 main 에서 빠져 PR #15 로 옮김)
- 9장 개인정보 절의 서비스별 수치(Anthropic 5년/30일, Gemini 사람 검토)는 정책이 자주 바뀐다 — 2단계 서비스 가이드를 쓸 때 다시 확인. OpenAI 도움말은 WebFetch 403
- 「AI가 생각하는가·추론 한계」 근거는 `docs/reports/2026-10-21_LLM-추론-최신-연구.md` 를 먼저 본다 — DeepSeek-R1 의 AIME 15.6%→77.9% 는 Nature 원문 재대조 실패라 본문에 쓰지 않았다
- 샌드박스 안에서는 `.bashrc`·`.mcp.json` 등 가짜 장치 파일이 untracked로 보인다 — `git add .` 금지, 파일을 지정해서 add
- `gh` 는 샌드박스 안에서 keyring을 못 읽어 "token invalid"로 오진된다 — 샌드박스 밖에서 실행
- VitePress 죽은 링크 검사는 원본 기준이라 rewrites 로 생긴 404 를 못 잡는다 — 사이트 링크를 바꿨으면 실제 사이트에서 눌러 확인
