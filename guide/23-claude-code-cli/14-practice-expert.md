# 14장. 실습 과제와 전문가처럼 쓰기

<Badge type="tip" text="필수" /> 이 단계를 따라가려면 꼭 읽으세요.

> **한 줄 요약**: 지금까지 배운 것을 **내 손으로 한 번씩 다시** 해 보는 과제 8개입니다. 마지막 과제는 **내 메모**로 주간정리를 만드는 것입니다.

이 장은 2026년 11월 6일 기준입니다. 과제의 결과는 실행할 때마다 조금씩 다릅니다.

전문가는 기능을 많이 쓰는 사람이 아닙니다. 작게 시작하고, 확인 기준을 주고, 필요할 때만 규칙을 더하는 사람입니다.

## 실습 과제를 하는 법

1. **연습 폴더를 새로 만듭니다.** 예: `~/hello-ai-연습/다시`. `inbox`에는 주간회의 메모 하나만 넣습니다. 임시회의 메모는 과제 7에서 넣습니다.
2. **과제의 「해 볼 것」을 따라 합니다.** 회색 상자의 글을 복사해 쓰면 됩니다.
3. **「잘 됐는지 확인」을 하나씩 체크합니다.** 못 한 항목이 있으면 「다시 볼 곳」의 장에서 그 부분만 다시 해 보세요.

맥과 리눅스는 터미널에서 이렇게 칩니다. 메모는 앞서 쓰던 연습 폴더에서 복사합니다.

```bash
mkdir -p ~/hello-ai-연습/다시/inbox
cd ~/hello-ai-연습/다시
cp ../터미널/inbox/회의-2026-10-27-주간회의.txt inbox/
```

Windows PowerShell은 이렇게 칩니다. 이 장의 Windows 명령은 실행해 보지 않았습니다.

```powershell
mkdir $HOME\hello-ai-연습\다시\inbox
cd $HOME\hello-ai-연습\다시
cp ..\터미널\inbox\회의-2026-10-27-주간회의.txt inbox\
```

과제 1~7은 순서대로 합니다. 앞 과제의 결과를 뒤 과제가 씁니다. **과제 8은 맨 마지막에** 합니다.

처음부터 다 해낼 필요는 없습니다. 하루에 과제 두세 개씩이면 충분합니다. 결과의 모양이 이 가이드와 달라도, 점검표를 다 체크하면 잘된 것입니다.

지킬 것은 셋입니다.

- **처음에는 `claude --permission-mode manual`로 시작합니다.** 무엇을 하려는지 하나씩 보면서 익힙니다.
- **연습 폴더에서만 합니다.** 내 문서 전체가 든 폴더를 쓰지 않습니다.
- **과제 8의 내 메모는 개인 정보를 지우고** 넣습니다.

<Quiz id="ch814-how" />

## 과제

### 과제 1. 첫 정리 맡기기

**이럴 때**: 뒤죽박죽 메모를 회의록으로 바꾸고 싶을 때.

**해 볼 것**: 연습 폴더에서 `claude --permission-mode manual`로 켜고 보냅니다. 신뢰 확인 창의 기본 선택은 `No, exit`입니다. 아래 화살표로 `Yes, I trust this folder`를 고릅니다.

```text
inbox/회의-2026-10-27-주간회의.txt 를 읽고 회의록.md 로 정리해 줘. 결정 사항, 할 일(담당·기한), 다음 회의로 나누고 메모에 없는 내용은 쓰지 마.
```

**잘 됐는지 확인**

- ☐ 허락 창의 내용을 읽고 `Yes`를 골랐다
- ☐ 할 일마다 담당과 기한이 있다
- ☐ 원본 메모는 그대로다

**다시 볼 곳**: [4장](04-first-session.md)

### 과제 2. 이름 붙여 이어 가기

**이럴 때**: 며칠에 걸친 일을 다음에 찾아 이어 가고 싶을 때.

**해 볼 것**: `/rename 주간회의-정리`로 이름을 붙이고 `/exit`로 나갑니다. 그다음 `claude -r`로 그 세션을 찾아 엽니다.

**잘 됐는지 확인**

- ☐ 목록에서 이름으로 세션을 찾았다
- ☐ 이어 간 세션이 방금 대화를 기억한다
- ☐ `/context`로 맥락이 얼마나 찼는지 봤다

**다시 볼 곳**: [6장](06-sessions-context.md)

### 과제 3. 허락과 되감기

**이럴 때**: Claude가 무엇을 바꾸는지 보고, 필요하면 되돌리고 싶을 때.

**해 볼 것**: 아래 순서로 해 보세요.

1. 맨 아래 줄을 봅니다. 목록에서 고른 세션은 새로 켠 세션처럼 자동 모드로 시작할 수 있습니다. `auto mode on`이면 `Shift + Tab`을 한 번 눌러 `manual mode on`으로 바꿉니다.
2. 아래 요청을 보내고 허락 창에서 바뀌는 줄을 읽습니다.
3. 끝나면 입력창이 빈 상태에서 Esc를 두 번 눌러 되감기 메뉴를 엽니다.
4. `Restore code and conversation`을 눌러 복원합니다. 연습 폴더이니 걱정 말고 해 보세요. 이 가이드도 여기까지 눌러 파일이 돌아오는 것을 확인했습니다.
5. 복원하면 보냈던 요청이 입력창에 돌아옵니다. Esc 두 번으로 지운 뒤 다음 과제로 넘어갑니다.

```text
회의록.md 의 할 일 표에 '상태' 칸을 추가하고 모두 '진행 중'으로 적어 줘. 다른 부분은 고치지 마.
```

**잘 됐는지 확인**

- ☐ 허락 창에서 바뀌는 줄을 먼저 읽었다
- ☐ 되감기 메뉴의 경고 문장을 읽었다
- ☐ 되감기가 못 되돌리는 것을 하나 말할 수 있다

**다시 볼 곳**: [7장](07-permissions-undo.md)

### 과제 4. 규칙과 스킬 만들기

**이럴 때**: 같은 규칙과 절차를 자꾸 다시 말하고 있을 때.

**해 볼 것**: 회의록 규칙을 CLAUDE.md에 3~5줄로 적습니다. 그다음 스킬 `meeting-notes`를 만들고 **새 세션**에서 규칙을 말하지 않고 부릅니다. 본보기: [CLAUDE.md](/practice/cli/results/8장-CLAUDE.md.txt) · [스킬](/practice/cli/results/9장-스킬-meeting-notes.txt)

```text
/meeting-notes inbox/회의-2026-10-27-주간회의.txt
```

**잘 됐는지 확인**

- ☐ `/`를 쳤을 때 목록에 `meeting-notes`가 보인다
- ☐ 새 세션의 결과가 규칙을 지켰다
- ☐ 파일이 `notes` 폴더에 생겼다

**다시 볼 곳**: [8장](08-memory-settings.md), [9장](09-skills-extensions.md)

### 과제 5. 명령 한 줄로 돌리기

**이럴 때**: 대화를 열지 않고 정리를 끝내고 싶을 때.

**해 볼 것**: 돌리기 전에 세션에서 `/usage`를 봐 둡니다. 그다음 `/exit`로 나와 터미널에서 합니다. [10장](10-headless-automation.md)의 붙여 넣기 상자로 `주간정리.sh`를 만들고 `bash 주간정리.sh`로 돌립니다. Windows는 10장의 PowerShell 상자를 붙여 넣습니다.

**잘 됐는지 확인**

- ☐ 사람이 답하지 않아도 끝까지 돌았다
- ☐ 메모마다 `완료:` 또는 `실패:`가 나왔다
- ☐ 돌리기 전후의 `/usage`를 비교했다

**다시 볼 곳**: [10장](10-headless-automation.md), [13장](13-cost-safety-trouble.md)

### 과제 6. 훅과 Git 기록

**이럴 때**: 파일이 바뀐 흔적을 남기고, 지금 상태를 저장해 두고 싶을 때.

**해 볼 것**: 아래 순서로 해 보세요.

1. 11장의 변경기록 훅을 넣고 파일을 하나 바꾸게 합니다.
2. 이 연습 폴더에서 12장의 「Git으로 첫 기록 남기기」를 처음부터 따라 합니다. 다만 12장 첫 상자의 `cd ~/hello-ai-연습/터미널` 줄은 치지 않아도 됩니다. 이미 그 폴더에 있기 때문입니다. `git init`부터 칩니다.
3. 12장대로 `.gitignore`를 만들고, `git config`·`git add .`·`git status --short`를 거쳐 `git commit`으로 첫 커밋까지 합니다.

**잘 됐는지 확인**

- ☐ `/hooks`에 훅이 보인다
- ☐ `변경기록.txt`를 직접 열어 줄이 늘었는지 봤다
- ☐ `git log --oneline`에 기록이 보인다

**다시 볼 곳**: [11장](11-hooks-statusline.md), [12장](12-parallel-remote.md)

### 과제 7. 숨은 지시와 worktree

**이럴 때**: 남의 자료를 맡길 때 조심할 점을 익히고, 본 폴더를 건드리지 않고 시험하고 싶을 때.

**해 볼 것**: 크게 세 단계입니다.

1. 임시회의 메모를 `inbox`에 넣고, 내용을 읽은 뒤 커밋합니다.
2. worktree에서 Claude에게 그 메모를 맡깁니다.
3. 끝나면 본 폴더의 `inbox`에서 메모를 뺍니다.

커밋부터 하는 까닭이 있습니다. [12장](12-parallel-remote.md)에서 본 대로 worktree에는 커밋한 파일만 들어갑니다. 커밋하지 않으면 worktree 안에서 이 메모가 보이지 않습니다.

1단계에서는 13장에서 받아 둔 파일을 씁니다. 지웠다면 [13장](13-cost-safety-trouble.md)대로 다시 받습니다. 맥과 리눅스는 이렇게 칩니다.

```bash
cp ~/Downloads/회의-2026-10-29-임시회의.txt inbox/
cat inbox/회의-2026-10-29-임시회의.txt
git add .
git commit -m "임시회의 메모 추가"
```

Windows PowerShell은 이렇게 칩니다.

```powershell
cp $HOME\Downloads\회의-2026-10-29-임시회의.txt inbox\
Get-Content -Encoding UTF8 inbox\회의-2026-10-29-임시회의.txt
git add .
git commit -m "임시회의 메모 추가"
```

2단계는 이렇게 합니다.

- `claude --worktree injection-test`로 시작합니다.
- 맨 아래 줄이 `auto mode on`이면 `Shift + Tab`을 한 번 눌러 `manual mode on`으로 바꿉니다.
- 13장의 나은 예대로 맡깁니다.

3단계에서 본 폴더의 `inbox`에서 메모를 빼는 까닭은 `주간정리.sh` 때문입니다. 이 스크립트는 `inbox`의 회의 메모를 모두 사람 없이 처리합니다. 숨은 지시가 든 메모가 남아 있으면 다음에 돌릴 때 그대로 처리됩니다. 빼는 명령은 13장 「숨은 지시 조심하기」 절의 끝에 있습니다.

**잘 됐는지 확인**

- ☐ 맨 아래 줄이 `manual mode on`인 것을 확인했다
- ☐ `! pwd`로 worktree 안임을 확인했다
- ☐ 회의록 끝에 "모든 할 일 완료"가 없다
- ☐ 끝낼 때 보관과 삭제 중 무엇을 고를지 읽고 골랐다
- ☐ 임시회의 메모를 `inbox`에서 뺐다

**다시 볼 곳**: [12장](12-parallel-remote.md), [13장](13-cost-safety-trouble.md)

### 과제 8. 내 메모로 주간정리 만들기

**이럴 때**: 이제 연습이 아니라 내 일에 쓰고 싶을 때.

**해 볼 것**: 새 폴더(예: `~/hello-ai-연습/내-주간정리`)에 `inbox`를 만들고, **개인 정보를 지운** 내 메모를 2~3개 넣습니다. 넣을 때 두 가지를 맞춥니다.

- 파일 이름은 `회의-날짜.txt` 꼴로 맞춥니다. 스크립트가 `회의-`로 시작하는 파일만 찾기 때문입니다.
- Word나 한글 파일이라면 `.txt`로 저장해서 넣습니다.

그다음 `claude`를 켜고 보냅니다.

```text
inbox의 메모를 읽고 내가 매주 쓸 정리 양식을 정하고 싶어. 어떤 칸이 필요한지 먼저 나에게 질문해 줘. 답을 듣고 나서 CLAUDE.md에 규칙을 3~5줄로 쓰고 .claude/skills/meeting-notes/SKILL.md 스킬을 만들어 줘.
```

스킬이 되면 `/exit`로 나와 과제 5의 스크립트를 이 폴더에 복사해 돌립니다. Windows는 10장의 PowerShell 상자를 이 폴더에서 붙여 넣습니다.

```bash
cp ../다시/주간정리.sh .
bash 주간정리.sh
```

다 돌린 메모는 옮겨 둡니다. 그래야 다음 주에 같은 메모를 또 정리하지 않습니다. `mv`는 파일을 옮기는 명령입니다. 다음 주에는 `inbox`에 새 메모를 넣고 돌립니다. 맥과 리눅스는 이렇게 칩니다.

```bash
mkdir -p done
mv inbox/회의-*.txt done/
```

Windows PowerShell은 이렇게 칩니다.

```powershell
mkdir done -Force
Move-Item inbox\회의-*.txt done\
```

**잘 됐는지 확인**

- ☐ 규칙을 쓰기 전에 Claude가 질문했고, 내 답이 반영됐다
- ☐ `bash 주간정리.sh` 한 줄(Windows는 10장의 PowerShell 상자)로 내 메모가 내 양식대로 정리된다
- ☐ 숫자·이름·기한을 원본 메모와 맞춰 봤다
- ☐ 다음 주에도 같은 명령으로 돌아가는지 메모를 새로 넣어 시험했다

**다시 볼 곳**: [8장](08-memory-settings.md), [9장](09-skills-extensions.md), [10장](10-headless-automation.md)

<Quiz id="ch814-check" />

## 전문가의 습관

Claude Code는 설정 없이 새 세션의 평범한 첫 요청만으로도 대개 잘 동작하게 만들어졌습니다.[^plain] 그러니 복잡한 설정보다 습관이 먼저입니다.

**작게 시작합니다.** 큰 일은 파일 하나로 먼저 해 봅니다. 잘못 알아들었을 때 일찍 알아챌 수 있습니다.

- **아쉬운 예**: `내 문서 폴더 전부 정리해 줘`
- **나은 예**: `inbox의 메모 하나만 회의록으로 정리해 줘. 결과를 보고 나머지를 맡길게.`

**확인 기준을 줍니다.** 맞았는지 틀렸는지 Claude가 확인할 방법을 주세요. 그러면 스스로 고치며 이어 갈 수 있습니다.[^check]

- **아쉬운 예**: `회의록 잘 써 줘`
- **나은 예**: `회의록을 쓴 뒤 메모의 금액·날짜·이름이 모두 같은지 대조하고, 다른 것이 있으면 표로 알려 줘.`

**일이 바뀌면 `/clear`합니다.** 집중된 맥락이 더 나은 답을 주고 비용도 덜 듭니다.[^clear]

**두 번 틀리면 다시 씁니다.** 처음 1분을 지켜보고, 엇나가면 바로 Esc를 누릅니다. 두 번 고쳐 말해도 틀리면 세 번째로 고치지 말고 `/clear` 후 더 나은 요청을 씁니다.[^two-fails] 길어진 대화를 붙들고 있는 것보다 빠릅니다.

<Quiz id="ch814-habits" />

## 규칙은 필요할 때 더하기

처음부터 모든 규칙을 적을 필요는 없습니다. 같은 불편이 되풀이될 때 하나씩 더하세요.

| 이런 일이 생기면 | 이걸 더한다 |
|---|---|
| 같은 말을 또 하고 있다 | CLAUDE.md 한 줄 |
| 같은 절차를 자꾸 붙여 넣는다 | 스킬[^add-skill] |
| 매번 꼭 일어나야 한다 | 훅[^add-hook] |
| 절대 하면 안 된다 | 거부 규칙[^add-deny] |

CLAUDE.md에는 Claude가 폴더를 읽어서 알 수 없는 것만 적습니다.[^only-unknown] 대문자나 "중요!"를 쌓지 마세요. 평범한 한 줄이면 됩니다. 강조를 쌓으면 규칙을 지나치게 적용하기 쉽습니다.[^no-caps]

<Quiz id="ch814-rules" />

## 매주 루틴

만든 도구를 매주 이렇게 굴려 보세요.

1. **모으기**: 메모를 그때그때 `inbox`에 넣는다. 개인 정보는 지운다.
2. **정리하기**: `bash 주간정리.sh`를 돌린다(Windows는 10장의 PowerShell 상자).
3. **확인하기**: 숫자·담당·기한을 원본과 맞춰 본다.
4. **기록하기**: 다 돌린 메모를 `done`으로 옮긴다. 마음에 들면 `git add .`와 `git commit -m "이번 주 정리"`로 남긴다. 처음이면 이 폴더에서 `git init`부터 한다. [12장](12-parallel-remote.md) 상자의 `cd` 줄은 치지 않는다.
5. **고치기**: 같은 지적을 두 번 했다면 CLAUDE.md나 스킬을 고친다.

**처음부터 완벽할 필요는 없습니다.** 한 주에 한 번 돌리고, 불편했던 점 하나만 고치면 됩니다. 몇 주 뒤에는 나에게 맞는 도구가 됩니다.

<Quiz id="ch814-routine" />

## 직접 해 보기

1. 이번 주 메모 하나를 `inbox`에 넣습니다.
2. 매주 루틴을 1번부터 5번까지 차례로 해 봅니다.
3. 불편했던 점 하나를 CLAUDE.md나 스킬에 반영합니다.

스스로 물어보세요. 다음 주에도 같은 명령으로 돌아가나?

## 정리

- 점검표는 "Claude가 다 했다"가 아니라 "내가 확인했다"를 체크한다.
- 작게 시작하고, 확인 기준을 주고, 일이 바뀌면 `/clear`한다.
- 두 번 고쳐도 틀리면 `/clear`하고 요청을 다시 쓴다.
- 규칙은 같은 불편이 되풀이될 때 하나씩 더한다.
- 모으기 → 정리하기 → 확인하기 → 기록하기 → 고치기를 매주 돌린다.

## 용어 정리

| 용어 | 읽는 법 | 한 줄 뜻 |
|---|---|---|
| Routine | 루틴 | 매주 같은 순서로 굴리는 작업 습관 |
| Script | 스크립트 | 명령 여러 줄을 담아 한 번에 돌리는 파일 |

<ChapterDone :chapter="814" />

다음 장: [4단계 · AI-SDLC 가이드](/guide/30-ai-sdlc/)

[^plain]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Claude Code is built in a way that, in most cases, your first plain prompt in a fresh session already does the right thing, without any setup on your part." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^check]: Claude Code 공식 문서, 「Best practices for Claude Code」. "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^clear]: Claude Code 공식 문서, 「Best practices for Claude Code」. "`/clear` between tasks is still worth doing, because a focused context gets you better answers and costs less." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^two-fails]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Watch the first minute, press `Esc` the moment Claude drifts, and after two failed corrections run `/clear` and write a better prompt instead of a third." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^add-skill]: Claude Code 공식 문서, 「Extend Claude with skills」. "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact." https://code.claude.com/docs/en/skills (확인일 2026-11-06)
[^add-hook]: Claude Code 공식 문서, 「Output styles」. "For something that has to happen every time, such as formatting after each edit or blocking a command, use a hook." https://code.claude.com/docs/en/output-styles (확인일 2026-11-06)
[^add-deny]: Claude Code 공식 문서, 「Best practices for Claude Code」. "anything that matters belongs in a deny rule." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^only-unknown]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Only write down what Claude can't find by reading the repo, or what it would otherwise spend time rediscovering every session." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
[^no-caps]: Claude Code 공식 문서, 「Best practices for Claude Code」. "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule." https://code.claude.com/docs/en/best-practices (확인일 2026-11-06)
