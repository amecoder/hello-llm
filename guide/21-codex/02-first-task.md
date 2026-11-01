# 2장. ChatGPT 앱에서 Codex 시작하기 — 폴더 열고 첫 정리 맡기기

> **한 줄 요약**: ChatGPT 데스크톱 앱을 설치하고, 왼쪽 위에서 **Codex**를 고른 뒤, 입력창 위 **Choose project**로 정리도구 폴더를 엽니다.
> 그다음 Claude Code 2장과 같은 요청으로 회의 메모를 정리시키고, 결과를 원본과 맞춰 봅니다.

이 장은 2026년 11월 1일에 확인한 Codex 공식 문서와 macOS용 ChatGPT 데스크톱 앱 화면을 바탕으로 썼습니다. 이 가이드의 화면은 **영어**입니다. 내 화면이 한국어라면 같은 자리의 버튼을 찾으세요.

## 설치하고 로그인하기

1. [chatgpt.com/download](https://chatgpt.com/download/)에서 내 컴퓨터용 ChatGPT 앱을 받아 설치합니다. Linux는 공식 문서의 별도 안내를 따릅니다.[^install]
2. 앱을 열고 ChatGPT 계정으로 로그인합니다.[^signin]

2단계에서 ChatGPT를 써 봤다면 같은 계정으로 들어가면 됩니다. 계정과 요금제는 [2단계 ChatGPT 1장](../11-chatgpt/01-getting-started.md)에서 다뤘습니다.

<Quiz id="ch502-install" />

## Codex를 고르고 폴더 열기

앱 **왼쪽 위의 이름표**를 누르면 ChatGPT와 Codex 중에서 고를 수 있습니다. 공식 문서도 개발 도구가 필요한 일은 이 메뉴에서 **Codex**를 고르라고 합니다.[^select] Codex를 고르면 가운데에 "What should we build?"(무엇을 만들까요?)가 보입니다.

입력창 바로 위에는 두 가지 선택이 있습니다.

| 화면 이름 | 하는 일 |
|---|---|
| Choose project | 일할 폴더(프로젝트) 고르기 |
| This computer | 어디서 일할지 고르기. 내 컴퓨터 또는 Cloud |

출처: 이 가이드의 화면 확인(2026-11-01)

**Choose project**를 눌러 `정리도구` 폴더를 고릅니다. Codex는 고른 폴더의 파일을 읽고 고칠 수 있습니다.[^folder] 메뉴 막대의 「File → Open Folder…」로 열어도 됩니다.

일하는 곳은 **This computer**(내 컴퓨터) 그대로 둡니다. Cloud는 GitHub 저장소를 연결한 사람을 위한 것이고, 내 컴퓨터의 파일은 클라우드로 넘어가지 않습니다.[^cloud-files]

폴더가 **Git 저장소**(바뀐 기록을 남기는 장치)인지도 확인하세요. Codex에서 바뀐 내용을 보는 창은 Git 저장소에서만 열립니다. Git이 아니면 앱이 하나 만들자고 묻습니다.[^review-git] Claude Code 3장을 따라 했다면 이미 Git 저장소입니다. 연습 자료로 새로 시작했다면 이렇게 부탁해 Git을 먼저 켜 두세요.

```
이 폴더를 Git 저장소로 만들고, 지금 있는 파일을 첫 기록으로 남겨 줘.
```

<Quiz id="ch502-open" />

## 첫 일 맡기기

Claude Code 2장과 비슷한 요청을 보냅니다. 이번에는 형식을 따로 말하지 않았습니다. 폴더에 양식(`templates/`)이 이미 있기 때문입니다.

```
inbox/회의-2026-10-27-주간회의.txt 메모를 회의록으로 정리해서 notes/ 폴더에 새 파일로 저장해 줘.
```

이 가이드에서 실행해 보니 Codex는 이렇게 일했습니다. 이 실행은 같은 Codex를 터미널([7장](07-terminal.md))에서 돌린 것입니다. 공식 문서는 앱도 고른 폴더에서 `AGENTS.md`와 스킬을 자동으로 찾는다고 설명합니다.[^discovery] 다만 이 가이드가 앱 화면에서 같은 결과를 직접 확인하지는 않았습니다.

1. 폴더에서 규칙 파일(`AGENTS.md`)과 양식을 찾았습니다. 규칙 파일은 아직 없어서 **양식만** 읽었습니다.
2. 양식의 칸 순서대로 결정한 것 2개, 할 일 5개, 다음에 논의할 것, 다음 회의를 채웠습니다.
3. 메모에 없는 기한은 `(메모에 없음)`으로 남겼습니다. 양식 안내문에 적힌 규칙입니다.
4. 저장한 뒤 칸 순서와 날짜·요일을 스스로 검사했습니다.

결과: [2장 회의록](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

**결과를 원본과 맞춰 보세요.** 다음 질문을 하나씩 확인합니다.

- 할 일 5개가 다 옮겨졌나? 담당이 메모와 같나?
- 메모에 없는 기한을 지어내지 않았나?
- 날짜가 맞나?

이번 결과에서는 날짜가 눈에 띕니다. 메모에는 `10/27(월)`로 적혀 있는데 회의록에는 `10/27(화)`로 바뀌었습니다. 연습 메모의 요일은 이야기를 위해 지어낸 것이라 2026년 달력과 다릅니다. Codex는 달력에 맞춰 고쳤고, 고쳤다는 사실을 답과 파일 안 메모에 **스스로 밝혔습니다.** 이런 판단이 마음에 들지 않으면 "요일은 메모에 적힌 그대로 써 줘"라고 다시 부탁하면 됩니다.

같은 요청이라도 결과 모양은 실행할 때마다 조금씩 다릅니다. 공식 문서도 그럴듯한 결과가 빠졌거나 틀릴 수 있으니 중요한 부분은 쓰기 전에 확인하라고 합니다.[^review]

<Quiz id="ch502-first" />

## 직접 해 보기

1. ChatGPT 앱을 설치하고 로그인한다.
2. 왼쪽 위에서 **Codex**를 고르고, **Choose project**로 정리도구 폴더를 연다.
3. 위의 요청으로 회의 메모를 정리시킨다.
4. 할 일 수·담당·기한·날짜를 원본 메모와 맞춰 본다.

**이어지는 과제**: 3장에서는 Claude Code의 규칙 파일 `CLAUDE.md`를 Codex가 읽는 `AGENTS.md`로 옮깁니다.

## 정리

- 앱 왼쪽 위에서 Codex를 고르고, 입력창 위 Choose project로 폴더를 연다.
- 일하는 곳은 This computer로 둔다. 내 파일은 Cloud로 넘어가지 않는다.
- 바뀐 내용 보기는 Git 저장소에서만 된다. 폴더를 먼저 Git 저장소로 만들어 둔다.
- 결과는 원본과 맞춰 본다. Codex가 스스로 바꾼 부분(이번에는 요일)은 특히 확인한다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Project | 프로젝트 | Codex가 일하는 폴더 |
| This computer | 디스 컴퓨터 | 내 컴퓨터에서 일하기 |
| Cloud | 클라우드 | 인터넷 너머 작업 공간에서 일하기 |
| Git | 깃 | 파일이 바뀐 기록을 남기는 장치 |

<ChapterDone :chapter="502" />

다음 장: [3장. 규칙 파일 AGENTS.md](03-agents-md.md)

[^install]: Codex 공식 문서, 「ChatGPT desktop app」. "**Install the ChatGPT desktop app.** [Download ChatGPT](https://chatgpt.com/download/) for macOS or Windows, or follow the [Linux installation guide](https://learn.chatgpt.com/docs/linux/linux-app)." https://learn.chatgpt.com/docs/app (확인일 2026-11-01)
[^signin]: Codex 공식 문서, 「Quickstart」. "Open the app, then sign in with your ChatGPT account." https://learn.chatgpt.com/docs/quickstart (확인일 2026-11-01)
[^select]: Codex 공식 문서, 「Quickstart」. "For software development with codebase context and developer tools, select **Codex** from the ChatGPT dropdown." https://learn.chatgpt.com/docs/quickstart (확인일 2026-11-01)
[^folder]: Codex 공식 문서, 「Quickstart」. "Start a chat, create a project, or open a folder. ChatGPT can read and modify files in the folder you choose." https://learn.chatgpt.com/docs/quickstart (확인일 2026-11-01)
[^cloud-files]: Codex 공식 문서, 「Codex environments」. "Use **Work in** to choose **This computer** or **Cloud**." / "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (확인일 2026-11-01)
[^review-git]: Codex 공식 문서, 「Code review」. "The review pane requires a project inside a Git repository. If your project isn't a Git repository yet, the app prompts you to create one." https://learn.chatgpt.com/docs/code-review (확인일 2026-11-01)
[^review]: Codex 공식 문서, 「Use ChatGPT」. "A polished response can still be incomplete or wrong, so review the details that matter before you use or share it." https://learn.chatgpt.com/docs/use-chatgpt (확인일 2026-11-01)
[^discovery]: Codex 공식 문서, 「Projects and chats」. "New chats start in the primary folder. Codex also uses that folder as the default for Git operations and automatic discovery of `AGENTS.md`, skills, and `config.toml`." https://learn.chatgpt.com/docs/projects (확인일 2026-11-01)
