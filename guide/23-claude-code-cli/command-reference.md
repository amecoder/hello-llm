# 명령어 사전

> **한 줄 요약**: 이 강좌에 나오는 명령을 한곳에 모았습니다. 명령이 낯설면 여기서 찾아보세요. 외울 필요는 없습니다.

명령을 읽는 법은 [2장](02-shell-basics.md)에 있습니다. 짧게 말하면 **이름 · 옵션 · 대상** 순서입니다. 옵션은 `-`나 `--`로 시작합니다.

먼저 어디에 치는지 보세요. 커서 바로 앞의 기호가 `%`, `$`, `>`이면 터미널이고, `❯`이면 Claude 입력창입니다. 이 사전의 표는 대부분 터미널에 치는 명령입니다. 마지막 절만 Claude 입력창에 칩니다.

## 기호

| 기호 | 뜻 | 예 |
|---|---|---|
| `~` | 내 집 폴더 | `cd ~` |
| `.` | 지금 폴더 | `git add .` |
| `..` | 한 단계 위 폴더 | `cd ..` |
| `*` | 아무 글자 | `inbox/회의-*.txt` |
| `\|` | 앞 명령의 출력을 뒤 명령으로 넘김 | `cat 메모.txt \| claude -p "요약해 줘"` |
| `>` | 출력을 파일에 저장(덮어씀) | `claude -p "요약해 줘" > 요약.txt` |
| `>>` | 출력을 파일 끝에 덧붙임 | `echo 둘째 줄 >> 메모.txt` |
| `<<'EOF'` | `EOF` 줄 앞까지를 그대로 입력으로 넘김 | 아래 설명 |
| `"…"` | 띄어쓰기가 있어도 한 덩어리로 묶음 | `claude -p "두 단어 이상"` |

`>`는 파일 내용을 지우고 새로 씁니다. 지우면 안 되는 파일에는 쓰지 마세요. `<<'EOF'`는 맥·리눅스 전용입니다. Windows PowerShell에서는 메모장으로 파일을 만듭니다.

여러 장에서 쓰는 아래 모양은 파일 하나를 만드는 묶음입니다.

```bash
cat > 메모.txt <<'EOF'
첫째 줄
둘째 줄
EOF
```

`cat > 메모.txt`는 받은 내용을 `메모.txt`에 저장합니다. `<<'EOF'`는 `EOF`만 있는 줄이 나올 때까지를 내용으로 넘깁니다. 그래서 파일에는 가운데 두 줄만 들어갑니다. `EOF`는 "여기서 끝"이라는 표시입니다. 따옴표를 붙였으므로 `$HOME` 같은 글자도 바뀌지 않고 그대로 저장됩니다.

## 폴더와 파일

이 표는 맥·리눅스 기준입니다. PowerShell도 `ls`, `cd`, `cp`, `mv`, `rm` 같은 이름을 받지만 옵션이 다릅니다. 그래서 `ls -la`나 `rm -rf`는 PowerShell에서 그대로 쓰지 마세요. PowerShell 명령은 아래 절에 따로 모았습니다.

| 명령 | 하는 일 |
|---|---|
| `pwd` | 지금 폴더 보기 |
| `ls` | 폴더 안의 목록 보기 |
| `ls -la` | 숨긴 파일까지 자세히 보기 |
| `ls -Force` | PowerShell에서 숨긴 파일까지 보기 |
| `cd 폴더` | 그 폴더로 옮겨 가기 |
| `mkdir 폴더` | 폴더 만들기 |
| `mkdir -p 가/나/다` | 중간 폴더까지 한 번에 만들기 |
| `cp 원본 대상` | 파일 복사 |
| `mv 원본 대상` | 파일 옮기기 |
| `cat 파일` | 파일 내용 보기 |
| `rm 파일` | 파일 지우기 |
| `rm -f 파일` | 없는 파일이어도 오류 없이 지우기 |
| `rm -rf 폴더` | 폴더를 안의 내용까지 지우기 |
| `echo 글자` | 글자 출력하기 |
| `sleep 30` | 30초 기다리기 |
| `source 파일` | 파일의 설정을 지금 창에 적용 |
| `bash 파일` | 파일에 적힌 명령을 차례로 실행 |

`mkdir -p`의 `-p`는 parents(부모)의 줄임말입니다. 폴더가 이미 있어도 오류가 나지 않습니다.

`rm`은 휴지통을 거치지 않습니다. `-r`은 폴더 안까지 전부, `-f`는 묻지 않고 지우라는 뜻입니다. `rm -rf`는 되돌릴 수 없습니다. 칠 때 폴더 이름을 꼭 다시 읽으세요.

## 설치에 쓰는 명령

| 명령 | 하는 일 |
|---|---|
| `curl 주소` | 인터넷 주소의 내용을 받기 |
| `curl -fsSL 주소 \| bash` | 설치 파일을 받아 바로 실행 |
| `irm 주소 \| iex` | PowerShell에서 받아 바로 실행 |

`-fsSL`은 옵션 네 개를 붙여 쓴 것입니다.

- `-f`: 서버가 오류를 내면 오류 페이지를 넘기지 않습니다.
- `-s`: 진행 표시를 숨깁니다.
- `-S`: `-s`를 써도 오류는 보여 줍니다.
- `-L`: 주소가 옮겨 갔으면 따라갑니다.

`irm`은 파일을 받고 `iex`는 그 내용을 실행합니다.[^irm] 두 명령 모두 **받은 내용을 그대로 실행**합니다. 그래서 믿을 수 있는 주소에만 씁니다.

## Windows PowerShell 명령

| 명령 | 하는 일 |
|---|---|
| `$HOME` | 내 집 폴더 |
| `mkdir 폴더 -Force` | 폴더가 이미 있어도 오류 없이 넘어가기 |
| `Get-Content -Encoding UTF8 파일` | 한글이 깨지지 않게 파일 보기 |
| `Copy-Item 원본 대상` | 파일 복사 |
| `Move-Item 원본 대상` | 파일 옮기기 |
| `Remove-Item 파일` | 파일 지우기 |
| `Write-Output 글자` | 글자 출력하기 |
| `notepad 파일` | 메모장으로 파일 열기 |
| `foreach (…) { … }` | 목록의 항목마다 `{ }` 안을 실행 |
| `if ($LASTEXITCODE -eq 0) { … } else { … }` | 성공이면 앞, 실패면 뒤를 실행 |

`$LASTEXITCODE`는 방금 끝난 프로그램의 종료 코드입니다. `-eq 0`은 "0과 같으면"이라는 뜻입니다. 0은 성공을 뜻합니다.

## claude 명령

터미널에 칩니다. 첫 낱말이 `claude`입니다.

| 명령 | 하는 일 |
|---|---|
| `claude` | 대화 시작 |
| `claude --version` | 버전 보기 |
| `claude --permission-mode manual` | 수동 모드로 시작 |
| `claude -c` | 이 폴더의 가장 최근 대화 잇기 |
| `claude -r` | 지난 대화 골라서 열기 |
| `claude --resume 이름` | 이름 붙인 대화 바로 열기 |
| `claude --safe-mode` | 내 설정을 끄고 시작 |
| `claude purge` | 이 폴더의 저장된 기록 지우기 |
| `claude -p "요청"` | 한 번 묻고 끝내기 |
| `claude --worktree 이름` | 별도 작업 폴더에서 시작 |
| `claude doctor` | 설치 상태 점검 |
| `claude update` | 최신 버전으로 업데이트 |
| `claude mcp add --transport http 이름 주소` | 원격 MCP 서버 추가 |
| `claude mcp list` | MCP 서버 목록과 연결 상태 |
| `claude mcp remove 이름` | MCP 서버 지우기 |

`-p`와 함께 쓰는 옵션입니다.

| 명령 | 뜻 |
|---|---|
| `claude -p "요청" --allowedTools "Read,Write"` | 묻지 않고 써도 되는 도구를 정함 |
| `claude -p "요청" --max-turns 10` | 일을 이어 가는 횟수의 상한 |
| `claude -p "요청" --output-format json` | 답을 JSON 형식으로 출력 |

`--allowedTools`의 `Read`는 파일 읽기, `Write`는 파일 쓰기입니다. `--transport http`는 HTTP 방식으로 연결하는 원격 서버라는 뜻입니다.

## git 명령

| 명령 | 하는 일 |
|---|---|
| `git --version` | Git이 있는지 보기 |
| `git init` | 이 폴더의 기록 시작 |
| `git config user.name "이름"` | 기록에 적힐 이름 정하기 |
| `git config user.email "메일"` | 기록에 적힐 메일 정하기 |
| `git add .` | 지금 폴더의 변경을 다음 기록에 담기 |
| `git status --short` | 변경 상태를 짧게 보기 |
| `git commit -m "설명"` | 설명을 붙여 기록 남기기 |
| `git reset` | 다음 기록에 담은 것을 취소 |
| `git log --oneline` | 기록을 한 줄씩 보기 |

`-m`은 message(메시지)의 줄임말입니다. `--short`는 목록을 짧게 보여 주라는 뜻입니다.

## Claude 입력창 명령

`claude`를 켠 뒤 입력창에 칩니다. 자주 쓰는 것만 모았습니다. 전체 목록은 입력창에서 `/`를 치면 보입니다.

| 명령 | 하는 일 |
|---|---|
| `/help` | 도움말 |
| `/exit` | 끝내기 |
| `/rename 이름` | 세션 이름 붙이기 |
| `/resume` | 지난 대화 열기 |
| `/context` | 맥락을 무엇이 차지하는지 보기 |
| `/compact` | 대화를 요약해 줄이기 |
| `/clear` | 빈 대화로 새로 시작 |
| `/rewind` | 되감기 메뉴 열기 |
| `/permissions` | 허락 규칙 보기 |
| `/usage` | 사용량 보기 |
| `/model` | 모델 고르기 |

단축키는 [5장](05-input-commands.md)에 있습니다.

[^irm]: Claude Code 공식 문서, 「Terminal guide for new users」. "`irm` fetches the file and `iex` runs it." https://code.claude.com/docs/en/terminal-guide (확인일 2026-11-06)
