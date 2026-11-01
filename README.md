# hello-ai

> 챗봇처럼 묻고 답만 받던 LLM을, 전문가처럼 쓰게 만드는 단계별 가이드

ChatGPT나 Claude에 질문은 해 봤지만 "이게 다인가?" 싶었던 분을 위한 가이드입니다.
개발 지식이 없어도 따라올 수 있도록, 어려운 용어는 풀어서 설명하고 바로 입력해 볼 수 있는 예시를 함께 싣습니다.

## 누구를 위한 가이드인가요?

- LLM(Large Language Model, ChatGPT·Claude처럼 글을 이해하고 써 주는 AI)을 검색창이나 챗봇 정도로만 써 본 분
- 같은 질문을 해도 남들은 더 좋은 답을 받는 것 같아 궁금했던 분
- 나중에는 AI와 함께 직접 무언가를 만들어 보고 싶은 분

## 학습 로드맵

앞 단계가 다음 단계의 바탕이 되므로 번호 순서대로 읽는 것을 권합니다.

| 단계 | 가이드 | 내용 |
|---|---|---|
| 1 | [공통 가이드](guide/00-common/README.md) | 어떤 LLM에서든 통하는 공통 원리와 사용법 |
| 2 | [ChatGPT](https://amecoder.github.io/hello-llm/guide/11-chatgpt/) · [Claude](https://amecoder.github.io/hello-llm/guide/10-claude/) · [Gemini](https://amecoder.github.io/hello-llm/guide/12-gemini/) | 서비스별 기능과 활용법 |
| 3 | [Claude Code](https://amecoder.github.io/hello-llm/guide/20-claude-code/) · [Codex](https://amecoder.github.io/hello-llm/guide/21-codex/) · [Antigravity](https://amecoder.github.io/hello-llm/guide/22-antigravity/) | 내 컴퓨터에서 일하는 코딩 AI 도구 |
| 4 | AI-SDLC (준비 중) | AI와 함께 기획부터 배포까지 — 소프트웨어 개발 전 과정(SDLC) |

웹사이트로 읽기: **https://amecoder.github.io/hello-llm/**

![학습 로드맵: 1단계 공통 가이드(잘 묻는 법) → 2단계 Claude·ChatGPT(서비스별 기능) → 3단계 Claude Code·Codex(AI에게 일 맡기기) → 4단계 AI-SDLC(AI와 함께 만들기)](assets/roadmap.svg)

## 진행 상황

1단계 공통 가이드(1~9장 + 10장 실습 과제 + 11장 전문가처럼 쓰기)와 2단계 [ChatGPT 사용 가이드](https://amecoder.github.io/hello-llm/guide/11-chatgpt/)(11장)와 [Claude 사용 가이드](https://amecoder.github.io/hello-llm/guide/10-claude/)(12장), [Gemini 사용 가이드](https://amecoder.github.io/hello-llm/guide/12-gemini/)(12장), 3단계 [Claude Code 사용 가이드](https://amecoder.github.io/hello-llm/guide/20-claude-code/)(12장)와 [Codex 사용 가이드](https://amecoder.github.io/hello-llm/guide/21-codex/)(8장), [Antigravity 사용 가이드](https://amecoder.github.io/hello-llm/guide/22-antigravity/)(7장)를 공개했습니다. 장마다 나온 프롬프트를 쓰임새별로 모은 [바로 쓰는 프롬프트 모음](https://amecoder.github.io/hello-llm/guide/00-common/prompt-library), 각 절 끝의 확인 퀴즈, 내 AI 이해 레벨을 확인하는 [이해도 확인 시험](https://amecoder.github.io/hello-llm/guide/00-common/certificate)도 있습니다.
앞으로는 실제 서비스와 같은 화면에서 안내 말풍선(코치 마크)을 따라 직접 연습해 볼 수 있는 실습 환경도 준비합니다.

## 연습용 샘플 자료

가이드의 실습에 쓰는 예시 파일입니다. **모두 지어낸 내용**이라 마음껏 내려받아 연습해도 됩니다. 사이트 링크는 바로 열리고, GitHub 경로는 저장소 안의 위치입니다.

| 단계 | 자료 | 쓰는 곳 | 파일 |
|---|---|---|---|
| 1 | 독서 모임 준비(회의록·메모·명단·회비 장부) | [1단계 10장 실습 과제](https://amecoder.github.io/hello-llm/guide/00-common/10-practice) · [과제 안내](https://amecoder.github.io/hello-llm/guide/00-common/practice-kit) | [minutes-last-meeting.txt](https://amecoder.github.io/hello-llm/practice/minutes-last-meeting.txt) · [memo-next-month.txt](https://amecoder.github.io/hello-llm/practice/memo-next-month.txt) · [memo-last-month.txt](https://amecoder.github.io/hello-llm/practice/memo-last-month.txt) · [members.csv](https://amecoder.github.io/hello-llm/practice/members.csv) · [fees.csv](https://amecoder.github.io/hello-llm/practice/fees.csv) · [last-notice.txt](https://amecoder.github.io/hello-llm/practice/last-notice.txt) — GitHub: [`public/practice/`](https://github.com/amecoder/hello-llm/tree/main/public/practice) |
| 3 | 모퉁이 카페 직원의 한 주(회의 메모·강의 필기·하루 회고) | [3단계 Claude Code 2~11장](https://amecoder.github.io/hello-llm/guide/20-claude-code/) · [Codex 2~8장](https://amecoder.github.io/hello-llm/guide/21-codex/) · [Antigravity 3·6·7장](https://amecoder.github.io/hello-llm/guide/22-antigravity/) | [회의-2026-10-27-주간회의.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](https://amecoder.github.io/hello-llm/practice/notes/inbox/회의-2026-10-29-임시회의.txt) — GitHub: [`public/practice/notes/inbox/`](https://github.com/amecoder/hello-llm/tree/main/public/practice/notes/inbox) |
| 3 | 실제 Claude Code 앱에서 나온 결과(회의록·양식·CLAUDE.md·스킬 등) | 3단계 각 장의 「결과 확인」 | GitHub: [`public/practice/notes/results/`](https://github.com/amecoder/hello-llm/tree/main/public/practice/notes/results) |
| 3 | Codex에서 나온 결과(회의록·AGENTS.md·주간 회고 등) | 3단계 Codex 각 장 | GitHub: [`public/practice/notes/results/codex/`](https://github.com/amecoder/hello-llm/tree/main/public/practice/notes/results/codex) |
| 3 | Antigravity에서 나온 결과(AGENTS.md 없이/있이 회의록·주간 회고 등) | 3단계 Antigravity 각 장 | GitHub: [`public/practice/notes/results/antigravity/`](https://github.com/amecoder/hello-llm/tree/main/public/practice/notes/results/antigravity) |

결과 파일은 모델이 실제로 만든 것이라, 같은 요청이어도 내 결과와 모양이 조금 다를 수 있습니다. 3단계 메모의 날짜·요일은 이야기를 위해 지어낸 것이라 실제 2026년 달력과 맞지 않습니다.

## 저장소 구조

```
guide/   # 가이드 본문 (독자용)
docs/    # 작업 계획·설계 문서 (운영용)
```
