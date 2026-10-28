# 12장. 전문가처럼 쓰기 — 판단하고, 시험하고, 쌓아 가기

> **한 줄 요약**: 잘 쓰는 데 필요한 것은 버튼을 더 많이 아는 것만이 아닙니다. **무엇을 맡길지 판단하고, 맡기기 전에 시험해 보고, 되풀이하는 것은 쌓아 두는** 힘입니다.
> 이 장은 1~11장에서 익힌 기능을 내 일에 맞게 **조합하는 법**을 다룹니다. 끝에는 Anthropic이 만든 강좌 모음 Claude Academy를 소개합니다.

이 장은 새 기능을 거의 다루지 않습니다. 앞 장에서 배운 Claude 기능을 언제, 어떻게 꺼내 쓸지가 주제입니다.

무엇을 맡길지 판단하는 법(4D), 맡기기 전에 이미 답을 아는 일로 시험해 보는 법, 배울 때 질문을 받는 법처럼 **어느 AI에나 통하는 방법**은 [1단계 11장 「전문가처럼 쓰기」](../00-common/11-expert.md)에 있습니다. 먼저 읽고 오면 이 장이 쉬워집니다. 이 장은 그 방법을 Claude의 기능과 메뉴에 맞춰 봅니다.

## 일에 맞는 도구 고르기

메뉴를 먼저 고르지 마세요. 지금 앞에 놓인 일이 어떤 모양인지 먼저 보세요. 그러면 쓸 기능은 저절로 정해집니다.[^academy-tabs]

| 이런 일이면 | 이걸 쓴다 | 자세히 |
|---|---|---|
| 묻고, 다듬고, 같이 생각한다 | 보통 대화 | [1단계](../00-common/) |
| 간단한 사실, 오늘 일어난 일 | 웹 검색 | [6장](06-search.md#언제-무엇을-쓸까) |
| 최신 정보 없이 깊이 따진다 | 확장 사고 | [6장](06-search.md#언제-무엇을-쓸까) |
| 자료를 많이 모아 보고서로 | 리서치(유료) | [6장](06-search.md#언제-무엇을-쓸까) |
| 한 가지 일을 계속 이어 간다 | 프로젝트 | [7장](07-projects-tools.md#프로젝트-—-자료와-지침을-한곳에) |
| 문서·표·발표 파일이 필요하다 | 파일 만들기 | [4장](04-files-artifacts.md#파일-만들어-받기-—-excel·word·powerpoint·pdf) |
| 여러 단계 끝에 결과물을 받는다 | Cowork(유료) | [8장](08-cowork.md#cowork란-—-대화가-아니라-일을-맡긴다) |
| 정해진 때마다 되풀이한다 | 예약 작업(유료) | [8장](08-cowork.md#정해진-때에-알아서-—-예약-작업) |

웹 검색·확장 사고·리서치를 나누는 기준은 도움말에서 왔습니다.[^when] 나머지 줄은 앞 장들의 내용을 한 표에 모은 것입니다.

대부분은 맨 윗줄, 보통 대화 하나로 충분합니다.

<Quiz id="ch212-tools" />

## 반복하는 일은 쌓아 두기

쓰다 보면 같은 말을 되풀이하게 됩니다. 되풀이하는 것을 한 번 적어 두면, 다음부터는 Claude가 알고 시작합니다.

담는 곳은 네 가지입니다. 처음부터 다 쓸 필요는 없습니다. 아래 순서로, 필요해질 때 하나씩 더하세요.[^academy-layers] 언제 틀로 만들 때가 아닌지는 [1단계 11장 「반복하는 일은 쌓아 두기」](../00-common/11-expert.md#반복하는-일은-쌓아-두기)에 있습니다.

1. **모든 대화에 같은 부탁을 한다** → [지침](05-memory.md#지침-—-모든-대화에-적용할-규칙)에 적습니다.
2. **한 가지 일을 계속 이어 간다** → 그 일을 [프로젝트](07-projects-tools.md#프로젝트-—-자료와-지침을-한곳에)로 묶습니다.
3. **같은 순서를 매번 설명한다** → 그 순서를 [스킬](07-projects-tools.md#스킬-—-일하는-방식을-넣어-두기)로 만듭니다.
4. **잘 다듬은 스킬을 한 묶음으로 나누고 싶다** → 여러 스킬을 [플러그인](07-projects-tools.md#플러그인-—-업무별-꾸러미)으로 묶습니다. 플러그인은 유료 요금제 기능입니다.[^plugins]

순서대로 가면 매번 새로 설명할 일이 조금씩 줄어듭니다.

프로젝트와 스킬이 헷갈리면 이렇게 기억하세요. **프로젝트는 자료를 담고, 스킬은 일하는 순서를 담습니다.**[^academy-skills-vs] 자세한 차이는 [7장 「지침·프로젝트·커넥터와 무엇이 다른가」](07-projects-tools.md#지침·프로젝트·커넥터와-무엇이-다른가)에 있습니다.

### 만든 스킬은 켜고 끄며 비교하기

만든 스킬은 같은 부탁을 두 번 보내 비교해 보세요. 한 번은 스킬을 켜고, 한 번은 끄고요. 비교하고 고치는 요령은 [1단계 11장 「만든 틀은 시험해 보고 고치기」](../00-common/11-expert.md#만든-틀은-시험해-보고-고치기)에 있습니다.

스킬은 「사용자 지정」 → 「Skills」에서 켜고 끌 수 있습니다([7장 「기본 스킬과 내 스킬」](07-projects-tools.md#기본-스킬과-내-스킬)).[^skills-use] 꺼 둔 스킬은 Claude가 쓰지 않습니다.

<Quiz id="ch212-layers" />

## 표와 숫자 맡기기

[4장 「파일 올리기」](04-files-artifacts.md#파일-올리기)처럼 CSV·TSV 같은 표 파일을 올리면, Claude가 데이터를 분석하고 차트를 그려 줍니다. 차트는 PNG 같은 그림 파일로도 받을 수 있습니다.[^create]

```
첨부한 CSV는 지난 석 달 동네 가게의 품목별 판매 기록이야. 품목별 합계를 큰 순서로 표로 만들고, 막대 차트를 PNG 그림으로 만들어 줘.
계산에 쓴 방법도 한 줄씩 적어 줘.
```

숫자 분석은 결과를 믿어도 되는지가 가장 걱정됩니다. 먼저 **이미 분석해 둔 지난 자료**로 맞춰 보세요. 방법과 예는 [1단계 11장 「표와 숫자 맡기기」](../00-common/11-expert.md#표와-숫자-맡기기)에 있습니다. 중요한 계산은 다른 계산 프로그램이나 손으로 다시 확인하세요([4장](04-files-artifacts.md#파일-만들어-받기-—-excel·word·powerpoint·pdf)).

<Quiz id="ch212-data" />

## 더 배우려면 — Claude Academy

**Claude Academy**는 Anthropic이 만든 온라인 강좌 모음입니다. 아래 강좌는 강의 본문을 로그인 없이 열어 볼 수 있습니다(2026-10-26 확인). 본문은 모두 **영어**이고, 강좌 첫 페이지에 걸리는 시간은 적혀 있지 않습니다.[^academy-courses]

| 강좌 | 강의 수 | 이런 분께 | 준비물 |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14강 + 퀴즈 | AI 경험과 상관없이 누구나 | 아무 AI 서비스 계정. 유료 요금제 필요 없음 |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13강 + 퀴즈 | AI가 왜 그렇게 답하는지 알고 싶은 분 | 사전 지식 필요 없음 |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13강 + 퀴즈 | 일에 Claude를 처음 쓰는 분 | Claude 계정(무료 포함). Cowork·리서치 강의는 유료 요금제 |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14강 + 퀴즈 | 파일·앱 사이를 오가며 일하는 분 | 유료 요금제, 폴더를 쓰는 강의는 컴퓨터 앱. 코딩 몰라도 됨 |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6강 | 스킬 파일을 직접 만들고 싶은 분 | Claude Code(3단계에서 다룰 개발자용 도구) |

- 앞의 두 강좌는 Claude가 아닌 다른 AI로 들어도 됩니다. 두 강좌는 어느 쪽을 먼저 들어도 되게 짜여 있습니다.[^academy-courses]
- 「AI Fluency」 강좌는 마지막 퀴즈에서 80% 이상 맞히면 **수료 배지**(completion badge)를 계정에 추가할 수 있습니다. 자격증은 아닙니다.[^academy-courses] 이 가이드의 [이해도 확인 시험](../00-common/certificate.md)도 같은 성격의 학습 배지입니다.
- 「Introduction to agent skills」는 이 가이드의 3단계(코딩 에이전트 도구)를 마친 뒤에 보세요. 모든 내용이 Claude Code 기준입니다.

영어 페이지는 크롬 같은 브라우저의 번역 기능(페이지에서 마우스 오른쪽 버튼 → 「한국어로 번역」)으로 읽을 수 있습니다.

### 강좌에서 배우는 틀 — 이 가이드와 비교

강좌에는 이 가이드와 같은 내용이 다른 이름으로 나옵니다. 아래 연결을 알아 두면 강좌에서 새 용어를 만났을 때 뜻을 짐작하기 쉽습니다. 강좌에서 쓰는 이름은 영어 원문 그대로 적었습니다.

- **Setting the stage · Defining the task · Specifying rules** (Claude 101): 내 역할과 목표, 할 일, 말투·형식·예시를 정해 부탁합니다.[^academy-stage] [1단계 4장 「좋은 프롬프트의 5요소」](../00-common/04-prompt-basics.md#좋은-프롬프트의-5요소)와 같은 생각입니다.
- **4D — Delegation · Description · Discernment · Diligence** (Claude 101, AI Fluency): [1단계 11장 「전문가는 무엇이 다른가」](../00-common/11-expert.md#전문가는-무엇이-다른가)를 보세요.
- **Evals** (Claude 101, Cowork): 이미 답을 아는 일로 시험해 보기입니다. [1단계 11장 「맡기기 전에 시험해 보기」](../00-common/11-expert.md#맡기기-전에-시험해-보기)와 이 장의 [「만든 스킬은 켜고 끄며 비교하기」](#만든-스킬은-켜고-끄며-비교하기)를 보세요.
- **Chat · Cowork · Code** (Claude 101): 주고받으며 하는 일은 대화, 맡기는 일은 Cowork, 프로그램 만들기는 Claude Code입니다.[^academy-tabs] [8장 「Cowork란」](08-cowork.md#cowork란-—-대화가-아니라-일을-맡긴다)과 이 장의 [「일에 맞는 도구 고르기」](#일에-맞는-도구-고르기)를 보세요.
- **결과물·자료·나만 아는 사정** (Cowork): 맡길 때 이 셋을 적습니다.[^academy-review] [8장 「맡기는 요령」](08-cowork.md#맡기는-요령)과 같습니다.
- **결과 검토 세 질문** (Cowork): 원한 결과인가? 사실이 맞나? 지어낸 데는 없나?[^academy-review] [1단계 9장 「확인하는 네 가지 습관」](../00-common/09-safety.md#확인하는-네-가지-습관)을 함께 보세요.
- **"projects store knowledge, skills perform tasks"** (Claude 101): 프로젝트는 자료, 스킬은 일하는 순서입니다.[^academy-skills-vs] 이 장의 [「반복하는 일은 쌓아 두기」](#반복하는-일은-쌓아-두기)를 보세요.

<Quiz id="ch212-academy" />

## 직접 해 보기

[11장 「실습할 때 지킬 세 가지」](11-practice.md#실습할-때-지킬-세-가지)처럼, 실제 회사 자료 대신 지어낸 자료로 해 보세요.

1. [1단계 11장 「직접 해 보기」](../00-common/11-expert.md#직접-해-보기)의 2~3번(답을 아는 메일로 시험하기)을 Claude에서 해 본다. 맞게 나오게 한 한 줄은 [5장 지침](05-memory.md#지침-—-모든-대화에-적용할-규칙)이나 프로젝트 지침에 넣어 둔다.
2. 날짜·품목·금액 표를 10줄쯤 지어내 CSV로 저장한다. 내가 먼저 품목별 합계를 손으로 낸 뒤, 이 장의 CSV 프롬프트로 표와 PNG 차트를 받아 두 합계를 맞춰 본다.
3. 스킬을 하나 만들었다면, 같은 부탁을 스킬을 켜고 한 번, 끄고 한 번 보내 두 답을 비교해 본다.

## 정리

- 어느 AI에나 통하는 판단·시험·확인 방법은 1단계 11장에 있다. 이 장은 그것을 Claude 기능에 맞춘다.
- 메뉴보다 일의 모양을 먼저 본다. 대부분은 보통 대화 하나로 충분하다.
- 되풀이하는 것은 지침 → 프로젝트 → 스킬 → 플러그인(유료) 순서로, 필요해질 때 하나씩 쌓는다.
- 만든 스킬은 「사용자 지정」 → 「Skills」에서 켜고 끄며 두 번 부탁해 비교한다.
- 표 파일을 올리면 분석과 차트(PNG 그림 포함)를 받을 수 있다. 믿기 전에 지난 자료로 맞춰 본다.
- 더 배우려면 Claude Academy 강좌(영어, 강의 본문은 로그인 없이 열람)를 본다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Claude Academy | 클로드 아카데미 | Anthropic이 만든 온라인 강좌 모음 |

4D·Evals 같은 강좌 용어는 [1단계 11장 「용어 정리」](../00-common/11-expert.md#용어-정리)에 있습니다.

<ChapterDone :chapter="212" />

다음 장: 2단계 Claude 가이드를 마쳤습니다. [2단계 · Claude 목차](./)에서 다시 볼 장을 고르거나, [AI 지식 레벨 시험](../00-common/level-test.md)으로 실력을 확인해 보세요.

[^academy-tabs]: Claude Academy 「Claude 101」 강의 「How you'll work with Claude on your desktop」. "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (확인일 2026-10-26)
[^academy-layers]: Claude Academy 「Introduction to Claude Cowork」 강의 「Get better results faster」. "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (확인일 2026-10-26)
[^academy-skills-vs]: Claude Academy 「Claude 101」 강의 「Working with skills」. "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (확인일 2026-10-26)
[^academy-stage]: Claude Academy 「Claude 101」 강의 「Your first conversation with Claude」. "One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude (확인일 2026-10-26)
[^academy-review]: Claude Academy 「Introduction to Claude Cowork」 강의 「Hand Claude Cowork your first task」. "name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop (확인일 2026-10-26)
[^academy-courses]: Claude Academy 강좌 첫 페이지. AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." 같은 강좌 강의 「Introduction to AI Fluency」 "you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities", 퀴즈 "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · 강의 본문은 로그인하지 않은 브라우저에서 열림을 확인 (확인일 2026-10-26)
[^when]: Anthropic 도움말, 「When should I use web search, extended thinking, and research?」. "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 (확인일 2026-10-26)
[^plugins]: Anthropic 도움말, 「Use plugins in Claude」. "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 (확인일 2026-10-26)
[^skills-use]: Anthropic 도움말, 「Use skills in Claude」. "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 (확인일 2026-10-26)
[^create]: Anthropic 도움말, 「Create and edit files with Claude」. "You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 (확인일 2026-10-26)
