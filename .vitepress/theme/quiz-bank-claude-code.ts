// Section quizzes for the 3단계 Claude Code guide (chapter N is 400 + N, see stages.ts).
// Kept apart from quiz-bank.ts so each stage's bank stays a readable size.
import type { Question } from './quiz'

export const CLAUDE_CODE_CHAPTERS: Record<number, { title: string; link: string }> = {
  401: { title: 'Claude Code 1장. 무엇이고 어디서 쓰나', link: '/guide/20-claude-code/01-what-is' },
  402: { title: 'Claude Code 2장. 데스크톱 앱 설치와 첫 세션', link: '/guide/20-claude-code/02-install' },
}

export const CLAUDE_CODE_QUESTIONS: readonly Question[] = [
  // chapter 401
  {
    id: 'ch401-what',
    chapter: 401,
    prompt: '채팅으로 회의록 세 개를 정리할 때는 파일을 올리고, 받은 답을 새 파일에 붙여 넣었습니다. Claude Code로 같은 일을 하면 무엇이 달라질까요?',
    choices: [
      '똑같이 파일을 올리고 답을 복사해야 한다',
      'Claude가 폴더의 파일을 직접 읽고 새 파일까지 만들어 두고, 나는 결과를 검토한다',
      '파일은 읽지 못하고 질문에만 답한다',
      '인터넷 검색만 해 준다',
    ],
    answer: 1,
    explain: 'Claude Code는 내 컴퓨터의 폴더를 직접 읽고, 파일을 고치고, 명령을 실행하는 에이전트형 도구입니다. 나는 일을 맡기고 바뀐 내용을 검토합니다.',
  },
  {
    id: 'ch401-tasks',
    chapter: 401,
    prompt: 'Claude Code가 폴더 안의 파일을 직접 고칠 수 있다면, 그만큼 꼭 함께 익혀야 하는 것은 무엇일까요?',
    choices: [
      '더 빠르게 타자 치는 법',
      '파일 이름을 영어로만 짓는 법',
      '무엇을 허락할지 정하는 법과 바뀐 내용을 확인하는 법',
      '컴퓨터를 자주 다시 켜는 법',
    ],
    answer: 2,
    explain: '파일을 직접 고치는 만큼 조심할 것도 늘어납니다. 그래서 무엇을 허락할지 정하고, 바뀐 내용을 검토하는 법을 이 단계에서 배웁니다.',
  },
  {
    id: 'ch401-where',
    chapter: 401,
    prompt: '터미널(명령어 창)은 써 본 적이 없지만 Claude Code를 써 보고 싶습니다. 이 가이드가 처음으로 권하는 곳은 어디일까요?',
    choices: [
      'Claude 데스크톱 앱의 Code 탭',
      '터미널에 설치하는 CLI',
      'JetBrains 플러그인',
      '휴대폰 앱',
    ],
    answer: 0,
    explain: '데스크톱 앱은 같은 엔진을 그래픽 화면으로 제공하고, Claude Code가 들어 있어 따로 설치할 프로그램이 없습니다. 터미널은 10장에서 다룹니다.',
  },
  {
    id: 'ch401-plan',
    chapter: 401,
    prompt: '무료 Claude 계정으로 Claude Code를 쓰려고 합니다. 공식 문서 기준으로 맞는 설명은 무엇일까요?',
    choices: [
      '무료 계정도 하루 몇 번은 쓸 수 있다',
      '데스크톱 앱을 설치하면 무료로 쓸 수 있다',
      '무료 계정은 터미널에서만 쓸 수 있다',
      '무료 플랜으로는 쓸 수 없고 Pro·Max·Ultra·Team·Enterprise 같은 유료 구독이 필요하다',
    ],
    answer: 3,
    explain: 'Claude Code는 Pro·Max·Ultra·Team·Enterprise 구독이나 Console 계정이 필요하고, 무료 claude.ai 플랜에는 포함되지 않습니다.',
  },
  // chapter 402
  {
    id: 'ch402-install',
    chapter: 402,
    prompt: 'Claude 데스크톱 앱으로 Claude Code를 쓰려고 합니다. 앱 말고 따로 설치해야 하는 것은 무엇일까요?',
    choices: [
      'Node.js와 터미널용 Claude Code',
      '코드 편집기(VS Code)',
      '없다 — 앱 안에 Claude Code가 들어 있다',
      '웹 브라우저 확장 프로그램',
    ],
    answer: 2,
    explain: '데스크톱 앱에는 Claude Code가 들어 있어서 Node.js나 터미널용 Claude Code를 따로 설치하지 않아도 Code 탭을 쓸 수 있습니다.',
  },
  {
    id: 'ch402-screen',
    chapter: 402,
    prompt: 'Code 탭에서 첫 요청을 보내기 전에, 어느 폴더에서 일할지와 권한 모드·모델을 고르는 곳은 어디일까요?',
    choices: [
      '앱 오른쪽 위의 설정 화면',
      '메뉴 막대의 도움말 메뉴',
      '보낸 뒤에 뜨는 안내 창',
      '입력창 아래 줄',
    ],
    answer: 3,
    explain: '새 화면 배치에서는 입력창 아래 줄에서 환경(이 컴퓨터)·폴더·권한 모드·모델을 고릅니다. 예전 배치는 환경과 폴더가 입력창 위에 있습니다.',
  },
  {
    id: 'ch402-folder',
    chapter: 402,
    prompt: '처음으로 Claude Code에 일을 맡겨 봅니다. 어떤 폴더를 고르는 것이 가장 안심될까요?',
    choices: [
      '이번 일에 필요한 파일만 넣은 작은 연습 폴더',
      '내 문서 전체가 든 홈 폴더',
      '사진과 동영상이 모두 든 폴더',
      '어느 폴더든 상관없다',
    ],
    answer: 0,
    explain: 'Claude는 고른 폴더 안에서 일합니다. 처음에는 망가져도 괜찮은 작은 연습 폴더를 고르면 손댈 수 있는 범위가 좁아 안심됩니다.',
  },
  {
    id: 'ch402-first',
    chapter: 402,
    prompt: '권한 모드가 「수동」입니다. Claude가 회의록 파일을 만들려고 할 때 보통 어떻게 될까요?',
    choices: [
      '아무것도 묻지 않고 바로 만든다',
      '무엇이 바뀔지 보여 주고 먼저 허락을 묻는다',
      '파일을 만들 수 없다고 거절한다',
      '앱을 다시 시작하라고 한다',
    ],
    answer: 1,
    explain: '수동(Manual)에서는 파일을 고치거나 명령을 실행하기 전에 묻고, 바뀔 내용을 보여 줍니다. 다만 터미널에서 정해 둔 허용 규칙이 있으면 그 일은 묻지 않을 수 있습니다.',
  },
  {
    id: 'ch402-check',
    chapter: 402,
    prompt: 'Claude가 회의록을 다 만들었다고 합니다. 가장 먼저 할 일은 무엇일까요?',
    choices: [
      '그대로 팀에 보낸다',
      '같은 요청을 한 번 더 보내 본다',
      '원본 메모와 맞춰 담당·기한·숫자를 확인한다',
      '회의록 파일 이름만 바꾼다',
    ],
    answer: 2,
    explain: '"다 했다"는 말을 그대로 믿지 않고 원본과 맞춰 봅니다. 담당·기한·숫자가 맞는지, 메모에 없는 내용을 지어내지 않았는지 확인합니다.',
  },
]
