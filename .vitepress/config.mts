import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  lang: 'ko-KR',
  title: 'hello-llm',
  description: '챗봇처럼 묻고 답만 받던 LLM을, 전문가처럼 쓰게 만드는 단계별 가이드',
  base: '/hello-llm/',
  // reader-facing pages only; project/ops docs stay on GitHub
  srcExclude: ['docs/**', 'CLAUDE.md', 'HANDOFF.md', 'CHANGELOG.md', '.claude/**'],
  rewrites: {
    'README.md': 'index.md',
    'guide/00-common/README.md': 'guide/00-common/index.md',
  },
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(footnote)
    },
  },
  themeConfig: {
    nav: [{ text: '1단계 · 공통 가이드', link: '/guide/00-common/' }],
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
