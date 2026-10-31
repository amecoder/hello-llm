import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { slugify } from './slugify'

export default defineConfig({
  lang: 'ko-KR',
  title: 'hello-ai',
  description: '챗봇처럼 묻고 답만 받던 LLM을, 전문가처럼 쓰게 만드는 단계별 가이드',
  base: '/hello-llm/',
  // reader-facing pages only; project/ops docs stay on GitHub
  // README.md is the GitHub landing page; the site home is the intro page index.md,
  // and guide/index.md is the full table of contents (/guide/)
  srcExclude: ['docs/**', 'README.md', 'CLAUDE.md', 'HANDOFF.md', 'CHANGELOG.md', '.claude/**'],
  // rewrites change page URLs only, not links inside pages:
  // always link to '/guide/00-common/', never to '.../README.md'
  rewrites: {
    'guide/00-common/README.md': 'guide/00-common/index.md',
    'guide/11-chatgpt/README.md': 'guide/11-chatgpt/index.md',
    'guide/10-claude/README.md': 'guide/10-claude/index.md',
    'guide/12-gemini/README.md': 'guide/12-gemini/index.md',
    'guide/20-claude-code/README.md': 'guide/20-claude-code/index.md',
  },
  lastUpdated: true,
  markdown: {
    anchor: { slugify },
    config: (md) => {
      // footnote type lives in .vitepress/env.d.ts
      md.use(footnote)
    },
  },
  themeConfig: {
    // shortcuts so readers can try prompts right away; external links open in a new tab
    nav: [
      {
        text: '목차',
        activeMatch: '^/guide/',
        items: [
          { text: '전체 목차', link: '/guide/' },
          { text: '1단계 · 공통 가이드', link: '/guide/00-common/' },
          { text: '2단계 · ChatGPT', link: '/guide/11-chatgpt/' },
          { text: '2단계 · Claude', link: '/guide/10-claude/' },
          { text: '2단계 · Gemini', link: '/guide/12-gemini/' },
          { text: '3단계 · Claude Code', link: '/guide/20-claude-code/' },
        ],
      },
      {
        text: '서비스 바로가기',
        items: [
          { text: 'ChatGPT', link: 'https://chatgpt.com/' },
          { text: 'Claude', link: 'https://claude.ai/new' },
          { text: 'Gemini', link: 'https://gemini.google.com/app' },
        ],
      },
    ],
    sidebar: {
      '/guide/20-claude-code/': [
        {
          text: '3단계 · Claude Code 가이드',
          items: [
            { text: '목차', link: '/guide/20-claude-code/' },
            { text: '1장. Claude Code는 무엇이고 어디서 쓰나', link: '/guide/20-claude-code/01-what-is' },
            { text: '2장. 데스크톱 앱 설치와 첫 세션', link: '/guide/20-claude-code/02-install' },
            { text: '3장. 화면 둘러보기', link: '/guide/20-claude-code/03-screen-tour' },
            { text: '← 1단계 · 공통 가이드', link: '/guide/00-common/' },
          ],
        },
      ],
      '/guide/12-gemini/': [
        {
          text: '2단계 · Gemini 가이드',
          items: [
            { text: '목차', link: '/guide/12-gemini/' },
            { text: '1장. 시작하기', link: '/guide/12-gemini/01-getting-started' },
            { text: '2장. 화면 둘러보기', link: '/guide/12-gemini/02-screen-tour' },
            { text: '3장. 대화 관리', link: '/guide/12-gemini/03-chats' },
            { text: '4장. 파일과 만들기', link: '/guide/12-gemini/04-files-create' },
            { text: '5장. 기억과 맞춤 설정', link: '/guide/12-gemini/05-memory' },
            { text: '6장. 검색과 Deep Research', link: '/guide/12-gemini/06-search' },
            { text: '7장. 스킬과 연결된 앱', link: '/guide/12-gemini/07-skills-apps' },
            { text: '8장. 일 맡기기', link: '/guide/12-gemini/08-tasks' },
            { text: '9장. 개인정보와 안전', link: '/guide/12-gemini/09-privacy' },
            { text: '10장. 음성과 휴대폰', link: '/guide/12-gemini/10-voice-mobile' },
            { text: '11장. 실습 과제', link: '/guide/12-gemini/11-practice' },
            { text: '12장. 전문가처럼 쓰기', link: '/guide/12-gemini/12-expert' },
            { text: '← 1단계 · 공통 가이드', link: '/guide/00-common/' },
          ],
        },
      ],
      '/guide/10-claude/': [
        {
          text: '2단계 · Claude 가이드',
          items: [
            { text: '목차', link: '/guide/10-claude/' },
            { text: '1장. 시작하기', link: '/guide/10-claude/01-getting-started' },
            { text: '2장. 화면 둘러보기', link: '/guide/10-claude/02-screen-tour' },
            { text: '3장. 대화 관리', link: '/guide/10-claude/03-chats' },
            { text: '4장. 파일과 아티팩트', link: '/guide/10-claude/04-files-artifacts' },
            { text: '5장. 기억과 맞춤 설정', link: '/guide/10-claude/05-memory' },
            { text: '6장. 검색과 리서치', link: '/guide/10-claude/06-search' },
            { text: '7장. 프로젝트·커넥터·스킬', link: '/guide/10-claude/07-projects-tools' },
            { text: '8장. Cowork — 일을 통째로 맡기기', link: '/guide/10-claude/08-cowork' },
            { text: '9장. 개인정보와 안전', link: '/guide/10-claude/09-privacy' },
            { text: '10장. 음성과 휴대폰', link: '/guide/10-claude/10-voice-mobile' },
            { text: '11장. 실습 과제', link: '/guide/10-claude/11-practice' },
            { text: '12장. 전문가처럼 쓰기', link: '/guide/10-claude/12-expert' },
          ],
        },
      ],
      '/guide/11-chatgpt/': [
        {
          text: '2단계 · ChatGPT 가이드',
          items: [
            { text: '목차', link: '/guide/11-chatgpt/' },
            { text: '1장. 시작하기', link: '/guide/11-chatgpt/01-getting-started' },
            { text: '2장. 화면 둘러보기', link: '/guide/11-chatgpt/02-screen-tour' },
            { text: '3장. 대화 관리', link: '/guide/11-chatgpt/03-chats' },
            { text: '4장. 파일·사진과 이미지 만들기', link: '/guide/11-chatgpt/04-files-images' },
            { text: '5장. 기억과 맞춤 설정', link: '/guide/11-chatgpt/05-memory' },
            { text: '6장. 검색과 심층 리서치', link: '/guide/11-chatgpt/06-search' },
            { text: '7장. 프로젝트·플러그인·Work', link: '/guide/11-chatgpt/07-projects-plugins' },
            { text: '8장. 개인정보와 데이터 관리', link: '/guide/11-chatgpt/08-privacy' },
            { text: '9장. 음성으로 대화하기', link: '/guide/11-chatgpt/09-voice' },
            { text: '10장. 실습 과제', link: '/guide/11-chatgpt/10-practice' },
            { text: '11장. 전문가처럼 쓰기', link: '/guide/11-chatgpt/11-expert' },
            { text: '← 1단계 · 공통 가이드', link: '/guide/00-common/' },
          ],
        },
      ],
      '/guide/00-common/': [
        {
          text: '1단계 · 공통 가이드',
          items: [
            { text: '목차', link: '/guide/00-common/' },
            { text: '1장. LLM이란 무엇인가', link: '/guide/00-common/01-what-is-llm' },
            { text: '2장. 왜 이렇게 화제인가', link: '/guide/00-common/02-why-it-matters' },
            { text: '3장. 왜 배워야 하나', link: '/guide/00-common/03-why-learn' },
            { text: '4장. 프롬프트 기초', link: '/guide/00-common/04-prompt-basics' },
            { text: '5장. 프롬프트 패턴', link: '/guide/00-common/05-prompt-patterns' },
            { text: '6장. 대화를 이어 가며 다듬기', link: '/guide/00-common/06-conversation' },
            { text: '7장. 구조화 프롬프트', link: '/guide/00-common/07-structured-prompts' },
            { text: '8장. 메타 프롬프팅', link: '/guide/00-common/08-meta-prompting' },
            { text: '9장. 안전하게 쓰기', link: '/guide/00-common/09-safety' },
            { text: '10장. 실습 과제 모음', link: '/guide/00-common/10-practice' },
            { text: '11장. 전문가처럼 쓰기', link: '/guide/00-common/11-expert' },
            { text: '이어지는 과제 — 독서 모임 준비', link: '/guide/00-common/practice-kit' },
            { text: '바로 쓰는 프롬프트 모음', link: '/guide/00-common/prompt-library' },
            { text: '이해도 확인 시험', link: '/guide/00-common/certificate' },
            { text: 'AI 지식 레벨 시험', link: '/guide/00-common/level-test' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/amecoder/hello-llm' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '검색' },
          modal: {
            noResultsText: '검색 결과가 없습니다',
            resetButtonTitle: '지우기',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' },
          },
        },
      },
    },
    outline: { label: '이 페이지에서' },
    docFooter: { prev: '이전 장', next: '다음 장' },
    lastUpdated: { text: '마지막 수정' },
    darkModeSwitchLabel: '화면 모드',
    sidebarMenuLabel: '목차',
    returnToTopLabel: '맨 위로',
  },
})
