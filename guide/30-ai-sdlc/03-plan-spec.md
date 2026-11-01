# 3장. 기획과 명세 — 인터뷰받고 SPEC.md 쓰기

> **한 줄 요약**: 무엇을 만들지 아직 흐릿하면, 혼자 다 정리하려 하지 말고 **Claude에게 나를 인터뷰하게** 하세요. 인터뷰가 끝나면 Claude가 그 내용을 **SPEC.md**(명세서)로 씁니다.
> 명세는 "어떻게 만들지"가 아니라 **"무엇이 되어야 하는지"의 약속**입니다. 이 약속이 4~6장에서 만들고, 확인하고, 리뷰하는 기준이 됩니다.

이 장은 2026년 11월 1일에 확인한 Claude Code·GitHub 공식 문서와 spec-kit·OpenSpec 저장소의 설명을 바탕으로 썼습니다. 무엇을 맡길지 구체적으로 말하는 요령은 [Claude Code 5장](../20-claude-code/05-delegate-well.md)에서 배웠습니다. 이 장은 그 요령을 "만들기 전 단계"로 넓힙니다.

## 왜 기획부터 하나

1장에서 본 것처럼, AI가 **내 머릿속과 다른 것을 만드는** 흔한 이유는 저장소만 읽어서는 알 수 없는 정보가 빠졌기 때문입니다.[^missing] 그 정보는 내 머릿속에만 있습니다. 누가 쓰는지, 무엇이 불편한지, 무엇은 하지 않을지 같은 것들입니다.

GitHub의 입문 튜토리얼도 **코드를 쓰기 전에 만들 것을 적어 두고 진행을 추적하라**고 합니다.[^before-code]

구체적으로 말할수록 고치는 왕복이 줄어듭니다. 공식 문서는 파일을 짚고, 증상을 말하고, "다 됐다"가 어떤 모습인지 처음에 말하라고 합니다.[^specific]

| 아쉬운 예 | 나은 예 |
|---|---|
| 할 일 보여 주는 페이지 만들어 줘 | 회의록의 할 일 표를 모아 담당·기한별로 보여 주는 페이지. 다 되면 메모의 할 일 5개가 모두 보여야 해 |

출처: 이 가이드의 예(요령은 공식 문서)[^specific]

<Quiz id="ch703-why" />

## 인터뷰받고 SPEC.md 쓰기

원하는 것이 아직 분명하지 않아도 괜찮습니다. 공식 문서는 프롬프트를 쓰기 전에 다 정리할 필요 없이, **Claude에게 나를 인터뷰하게** 하라고 합니다.[^interview] 문서의 예시를 우리말로 옮기면 이런 모양입니다.

> 이런 걸 만들고 싶은데 아직 깊이 생각해 보지 않았어. 스펙을 쓸 수 있을 때까지 나를 인터뷰하고, 다 되면 SPEC.md에 써 줘.

그러면 Claude는 아직 정하지 않은 부분을 **객관식 질문**으로 되묻습니다.[^choices] 할 일 보드라면 이런 요청이 됩니다.

```
3단계 정리도구가 만든 회의록의 할 일 표를 모아서 보여 주는 웹 페이지를 만들고 싶어. 아직 깊이 생각해 보지 않았어. 스펙을 쓸 수 있을 때까지 나를 인터뷰하고, 다 되면 SPEC.md에 써 줘.
```

SPEC.md가 생기면 **새 세션**에서 그 파일을 보고 만들게 합니다. 깨끗한 맥락과, 글로 적힌 "완료의 정의"로 시작하기 위해서입니다.[^fresh] 인터뷰하며 오간 긴 대화가 만들기에 섞이지 않게 하는 것입니다.

**다 만든 뒤에는 SPEC.md와 대조해 확인합니다.** 이 이야기는 6장 리뷰에서 다시 합니다.

<Quiz id="ch703-interview" />

## 좋은 명세의 모양

명세에는 **밖에서 보이는 동작**을 적습니다. OpenSpec 설명서는 명세를 "구현 계획이 아니라 동작의 약속"이라고 하고, 겉으로 보이는 동작을 바꾸지 않는 구현 이야기는 명세에 넣지 말라고 합니다.[^contract] spec-kit도 명세 단계에서는 기술이 아니라 **무엇을, 왜**에 집중하고, 기술 선택은 다음 계획 단계로 미루라고 합니다.[^what-why]

할 일 보드의 SPEC.md라면 이런 줄이 들어갑니다.

| 좋은 줄 | 아쉬운 줄 |
|---|---|
| 회의록의 할 일이 하나도 빠짐없이 보인다 | 자바스크립트로 표를 읽는다 |
| 기한이 지난 할 일은 표시가 다르다 | 예쁘게 보인다 |
| 개인 이름 대신 역할만 보인다 | 깔끔한 코드로 만든다 |

출처: 이 가이드의 예

왼쪽 줄은 **예/아니오로 확인할 수 있습니다.** 5장에서 이 줄들이 그대로 확인 장치가 됩니다.

<Quiz id="ch703-spec" />

## 스펙 주도 개발 도구

명세를 중심에 두고 개발하는 방식을 **스펙 주도 개발**(Spec-Driven Development)이라고 합니다. 무엇을 왜 만들지 먼저 정하고, 그 명세를 계획·작업·코드로 바꾸는 방식입니다.[^sdd] 이를 돕는 도구가 둘 있습니다.

| 도구 | 만든 곳 | 하는 일 |
|---|---|---|
| spec-kit | GitHub | 명세 → 계획 → 작업 목록 → 구현을 단계별로 |
| OpenSpec | Fission-AI | 변경마다 제안·명세·설계·작업 폴더를 만들기 |

출처: 각 도구의 설명(일부만 옮김)[^speckit][^openspec]

두 도구 모두 AI가 문서를 쓰고, **사람은 코드가 쓰이기 전에 계획을 검토**한다는 점이 같습니다.[^openspec] spec-kit은 각 단계를 하나씩 실행하고, 결과를 검토한 뒤 넘어가라고 합니다.[^one-at-a-time]

이 가이드는 **두 도구를 설치하지 않습니다.** spec-kit은 Python 3.11 이상과 uv라는 도구가 필요하고[^speckit-req], OpenSpec은 터미널 설치가 필요합니다. 위에서 배운 "인터뷰 → SPEC.md → 새 세션" 흐름만으로도 같은 생각을 실천할 수 있습니다. 더 큰 프로젝트를 하게 되면 그때 살펴보세요.

<Quiz id="ch703-tools" />

## 직접 해 보기

1. 2장에서 만든 `할일보드` 폴더를 Claude Code 앱에서 연다.
2. 위의 인터뷰 요청을 보내고, Claude의 질문에 답한다. 모르면 "추천해 줘"라고 해도 된다.
3. 만들어진 SPEC.md를 읽고, 줄마다 "예/아니오로 확인할 수 있나?"를 묻는다. 아니면 고쳐 달라고 한다.
4. SPEC.md에 실명·연락처가 들어가지 않았는지 확인한다(공개 저장소이기 때문).
5. 마음에 들면 기록(커밋)한다.

**이어지는 과제**: 4장에서는 새 세션에서 SPEC.md를 바탕으로 계획을 받고, 브랜치에서 첫 화면을 만듭니다.

## 정리

- AI가 엉뚱한 것을 만드는 흔한 이유는 내 머릿속 정보가 빠졌기 때문이다. 만들기 전에 적는다.
- 모르겠으면 Claude에게 나를 인터뷰하게 하고, 결과를 SPEC.md로 받는다.
- SPEC.md가 생기면 새 세션에서 만든다. 다 만든 뒤 SPEC.md와 대조한다.
- 명세에는 밖에서 보이는 동작을, 예/아니오로 확인할 수 있게 적는다.
- spec-kit·OpenSpec은 같은 생각을 돕는 도구다. 이 가이드는 설치하지 않는다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Spec | 스펙 | 무엇이 되어야 하는지 적은 약속(명세) |
| SPEC.md | 스펙 엠디 | 명세를 적은 파일 |
| Spec-Driven Development | 스펙 드리븐 디벨롭먼트 | 명세를 먼저 정하고 그것으로 만드는 방식 |
| Definition of done | 데피니션 오브 던 | "다 됐다"의 기준 |

<ChapterDone :chapter="703" />

다음 장: [4장. 만들기](04-build.md)

[^missing]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^before-code]: GitHub 공식 문서, 「Planning your work」. "Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (확인일 2026-11-01)
[^specific]: Claude Code 공식 문서, 「Best practices for Claude Code」. "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^interview]: Claude Code 공식 문서, 「Best practices for Claude Code」. "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^choices]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^fresh]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices (확인일 2026-11-01)
[^contract]: OpenSpec 문서, 「Concepts」. "A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md (확인일 2026-11-01)
[^what-why]: spec-kit 문서, 「Spec-Driven Development Quickstart」. "Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md (확인일 2026-11-01)
[^sdd]: spec-kit README. "Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit (확인일 2026-11-01)
[^speckit]: spec-kit README. "Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit (확인일 2026-11-01)
[^openspec]: OpenSpec README. "**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec (확인일 2026-11-01)
[^one-at-a-time]: spec-kit README. "Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit (확인일 2026-11-01)
[^speckit-req]: spec-kit README. "You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit (확인일 2026-11-01)
