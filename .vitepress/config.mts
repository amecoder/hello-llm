import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { slugify } from './slugify'

export default defineConfig({
  lang: 'ko-KR',
  title: 'hello-llm',
  description: '챗봇처럼 묻고 답만 받던 LLM을, 전문가처럼 쓰게 만드는 단계별 가이드',
  base: '/hello-llm/',
  // reader-facing pages only; project/ops docs stay on GitHub
  // README.md is the GitHub landing page; the site home is index.md
  srcExclude: ['docs/**', 'README.md', 'CLAUDE.md', 'HANDOFF.md', 'CHANGELOG.md', '.claude/**'],
  // rewrites change page URLs only, not links inside pages:
  // always link to '/guide/00-common/', never to '.../README.md'
  rewrites: {
    'guide/00-common/README.md': 'guide/00-common/index.md',
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
      { text: '1단계 · 공통 가이드', link: '/guide/00-common/' },
      { text: 'ChatGPT', link: 'https://chatgpt.com/' },
      { text: 'Claude', link: 'https://claude.ai/new' },
      { text: 'Gemini', link: 'https://gemini.google.com/app' },
    ],
    sidebar: {
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
            { text: '바로 쓰는 프롬프트 모음', link: '/guide/00-common/prompt-library' },
            { text: 'LLM 이해 인증 시험', link: '/guide/00-common/certificate' },
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
