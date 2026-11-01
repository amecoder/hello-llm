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
    'guide/21-codex/README.md': 'guide/21-codex/index.md',
    'guide/22-antigravity/README.md': 'guide/22-antigravity/index.md',
    'guide/30-ai-sdlc/README.md': 'guide/30-ai-sdlc/index.md',
    'en/guide/00-common/README.md': 'en/guide/00-common/index.md',
    'en/guide/11-chatgpt/README.md': 'en/guide/11-chatgpt/index.md',
    'en/guide/10-claude/README.md': 'en/guide/10-claude/index.md',
    'en/guide/12-gemini/README.md': 'en/guide/12-gemini/index.md',
  },
  lastUpdated: true,
  // Korean is the source at the site root; translations live under /<lang>/ (see theme/i18n.ts)
  locales: {
    root: { label: '한국어', lang: 'ko-KR' },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'A step-by-step guide that takes you from asking an AI chatbot simple questions to using it like a pro',
      themeConfig: {
        nav: [
          {
            text: 'Contents',
            activeMatch: '^/en/guide/',
            items: [
              { text: 'Full table of contents', link: '/en/guide/' },
              { text: 'Stage 1 · Common Guide', link: '/en/guide/00-common/' },
              { text: 'Stage 2 · ChatGPT', link: '/en/guide/11-chatgpt/' },
              { text: 'Stage 2 · Claude', link: '/en/guide/10-claude/' },
              { text: 'Stage 2 · Gemini', link: '/en/guide/12-gemini/' },
              { text: 'Stages 3–4 (Korean only for now)', link: '/guide/' },
            ],
          },
          {
            text: 'Go to the services',
            items: [
              { text: 'ChatGPT', link: 'https://chatgpt.com/' },
              { text: 'Claude', link: 'https://claude.ai/new' },
              { text: 'Gemini', link: 'https://gemini.google.com/app' },
            ],
          },
        ],
        sidebar: {
          '/en/guide/11-chatgpt/': [
            {
              text: 'Stage 2 · ChatGPT Guide',
              items: [
                { text: 'Contents', link: '/en/guide/11-chatgpt/' },
                { text: 'Chapter 1. Getting Started', link: '/en/guide/11-chatgpt/01-getting-started' },
                { text: 'Chapter 2. A Tour of the Screen', link: '/en/guide/11-chatgpt/02-screen-tour' },
                { text: 'Chapter 3. Managing Conversations', link: '/en/guide/11-chatgpt/03-chats' },
                { text: 'Chapter 4. Files, Photos, and Creating Images', link: '/en/guide/11-chatgpt/04-files-images' },
                { text: 'Chapter 5. Memory and Personalization', link: '/en/guide/11-chatgpt/05-memory' },
                { text: 'Chapter 6. Search and Deep Research', link: '/en/guide/11-chatgpt/06-search' },
                { text: 'Chapter 7. Projects, Plugins, and Work', link: '/en/guide/11-chatgpt/07-projects-plugins' },
                { text: 'Chapter 8. Privacy and Data Controls', link: '/en/guide/11-chatgpt/08-privacy' },
                { text: 'Chapter 9. Talking by Voice', link: '/en/guide/11-chatgpt/09-voice' },
                { text: 'Chapter 10. Hands-On Practice', link: '/en/guide/11-chatgpt/10-practice' },
                { text: 'Chapter 11. Using It Like an Expert', link: '/en/guide/11-chatgpt/11-expert' },
                { text: '← Stage 1 · Common', link: '/en/guide/00-common/' },
              ],
            },
          ],
          '/en/guide/10-claude/': [
            {
              text: 'Stage 2 · Claude Guide',
              items: [
                { text: 'Contents', link: '/en/guide/10-claude/' },
                { text: 'Chapter 1. Getting Started', link: '/en/guide/10-claude/01-getting-started' },
                { text: 'Chapter 2. Exploring the Screen', link: '/en/guide/10-claude/02-screen-tour' },
                { text: 'Chapter 3. Managing Chats', link: '/en/guide/10-claude/03-chats' },
                { text: 'Chapter 4. Files and Artifacts', link: '/en/guide/10-claude/04-files-artifacts' },
                { text: 'Chapter 5. Memory and Personalization', link: '/en/guide/10-claude/05-memory' },
                { text: 'Chapter 6. Search and Research', link: '/en/guide/10-claude/06-search' },
                { text: 'Chapter 7. Projects, Connectors, and Skills', link: '/en/guide/10-claude/07-projects-tools' },
                { text: 'Chapter 8. Cowork', link: '/en/guide/10-claude/08-cowork' },
                { text: 'Chapter 9. Privacy and Safety', link: '/en/guide/10-claude/09-privacy' },
                { text: 'Chapter 10. Voice and Phone', link: '/en/guide/10-claude/10-voice-mobile' },
                { text: 'Chapter 11. Hands-on Exercises', link: '/en/guide/10-claude/11-practice' },
                { text: 'Chapter 12. Working Like an Expert', link: '/en/guide/10-claude/12-expert' },
              ],
            },
          ],
          '/en/guide/12-gemini/': [
            {
              text: 'Stage 2 · Gemini Guide',
              items: [
                { text: 'Contents', link: '/en/guide/12-gemini/' },
                { text: 'Chapter 1. Getting Started', link: '/en/guide/12-gemini/01-getting-started' },
                { text: 'Chapter 2. Tour the Screen', link: '/en/guide/12-gemini/02-screen-tour' },
                { text: 'Chapter 3. Managing Chats', link: '/en/guide/12-gemini/03-chats' },
                { text: 'Chapter 4. Files and Creating', link: '/en/guide/12-gemini/04-files-create' },
                { text: 'Chapter 5. Memory and Personalization', link: '/en/guide/12-gemini/05-memory' },
                { text: 'Chapter 6. Search and Deep Research', link: '/en/guide/12-gemini/06-search' },
                { text: 'Chapter 7. Skills and Connected Apps', link: '/en/guide/12-gemini/07-skills-apps' },
                { text: 'Chapter 8. Handing Off Work', link: '/en/guide/12-gemini/08-tasks' },
                { text: 'Chapter 9. Privacy and Safety', link: '/en/guide/12-gemini/09-privacy' },
                { text: 'Chapter 10. Voice and Phone', link: '/en/guide/12-gemini/10-voice-mobile' },
                { text: 'Chapter 11. Hands-On Exercises', link: '/en/guide/12-gemini/11-practice' },
                { text: 'Chapter 12. Using It Like a Pro', link: '/en/guide/12-gemini/12-expert' },
                { text: '← Stage 1 · Common', link: '/en/guide/00-common/' },
              ],
            },
          ],
          '/en/guide/00-common/': [
            {
              text: 'Stage 1 · Common Guide',
              items: [
                { text: 'Contents', link: '/en/guide/00-common/' },
                { text: 'Chapter 1. What Is an LLM?', link: '/en/guide/00-common/01-what-is-llm' },
                { text: 'Chapter 2. Why Is Everyone Talking About It?', link: '/en/guide/00-common/02-why-it-matters' },
                { text: 'Chapter 3. Why Learn This?', link: '/en/guide/00-common/03-why-learn' },
                { text: 'Chapter 4. Prompt Basics', link: '/en/guide/00-common/04-prompt-basics' },
                { text: 'Chapter 5. Prompt Patterns', link: '/en/guide/00-common/05-prompt-patterns' },
                { text: 'Chapter 6. Refining Through Follow-up Conversation', link: '/en/guide/00-common/06-conversation' },
                { text: 'Chapter 7. Structured Prompts', link: '/en/guide/00-common/07-structured-prompts' },
                { text: 'Chapter 8. Meta Prompting', link: '/en/guide/00-common/08-meta-prompting' },
                { text: 'Chapter 9. Using AI Safely', link: '/en/guide/00-common/09-safety' },
                { text: 'Chapter 10. Practice Exercises', link: '/en/guide/00-common/10-practice' },
                { text: 'Chapter 11. Using AI Like a Pro', link: '/en/guide/00-common/11-expert' },
                { text: 'Ongoing Project — Book Club Prep', link: '/en/guide/00-common/practice-kit' },
                { text: 'Ready-to-Use Prompts', link: '/en/guide/00-common/prompt-library' },
                { text: 'Understanding Check', link: '/en/guide/00-common/certificate' },
                { text: 'AI Knowledge Level Test', link: '/en/guide/00-common/level-test' },
              ],
            },
          ],
        },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        langMenuLabel: 'Change language',
      },
    },
  },
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
          { text: '3단계 · Codex', link: '/guide/21-codex/' },
          { text: '3단계 · Antigravity', link: '/guide/22-antigravity/' },
          { text: '4단계 · AI-SDLC', link: '/guide/30-ai-sdlc/' },
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
      '/guide/30-ai-sdlc/': [
        {
          text: '4단계 · AI-SDLC 가이드',
          items: [
            { text: '목차', link: '/guide/30-ai-sdlc/' },
            { text: '1장. AI와 함께 만든다는 것', link: '/guide/30-ai-sdlc/01-what-is' },
            { text: '2장. GitHub 저장소 만들기', link: '/guide/30-ai-sdlc/02-repository' },
            { text: '3장. 기획과 명세', link: '/guide/30-ai-sdlc/03-plan-spec' },
            { text: '4장. 만들기', link: '/guide/30-ai-sdlc/04-build' },
            { text: '5장. 확인과 테스트', link: '/guide/30-ai-sdlc/05-test' },
            { text: '6장. PR과 리뷰', link: '/guide/30-ai-sdlc/06-review' },
            { text: '7장. 배포', link: '/guide/30-ai-sdlc/07-deploy' },
            { text: '8장. 운영과 개선', link: '/guide/30-ai-sdlc/08-operate' },
            { text: '9장. 안전과 책임', link: '/guide/30-ai-sdlc/09-safety' },
            { text: '10장. 실습 과제', link: '/guide/30-ai-sdlc/10-practice' },
            { text: '← 3단계 · Claude Code', link: '/guide/20-claude-code/' },
          ],
        },
      ],
      '/guide/22-antigravity/': [
        {
          text: '3단계 · Antigravity 가이드',
          items: [
            { text: '목차', link: '/guide/22-antigravity/' },
            { text: '1장. Antigravity는 무엇이고 앞의 두 도구와 무엇이 다른가', link: '/guide/22-antigravity/01-what-is' },
            { text: '2장. 앱 설치와 첫 정리', link: '/guide/22-antigravity/02-first-task' },
            { text: '3장. 규칙과 스킬 — 옮기지 않아도 된다', link: '/guide/22-antigravity/03-rules-skills' },
            { text: '4장. 권한과 되돌리기', link: '/guide/22-antigravity/04-permissions-undo' },
            { text: '5장. 계획·예약·브라우저·목표', link: '/guide/22-antigravity/05-plan-schedule' },
            { text: '6장. 터미널에서 쓰기', link: '/guide/22-antigravity/06-terminal' },
            { text: '7장. 비용·데이터·안전, 그리고 세 도구 고르기', link: '/guide/22-antigravity/07-safety-choose' },
            { text: '← 3단계 · Codex', link: '/guide/21-codex/' },
          ],
        },
      ],
      '/guide/21-codex/': [
        {
          text: '3단계 · Codex 가이드',
          items: [
            { text: '목차', link: '/guide/21-codex/' },
            { text: '1장. Codex는 무엇이고 Claude Code와 무엇이 다른가', link: '/guide/21-codex/01-what-is' },
            { text: '2장. ChatGPT 앱에서 Codex 시작하기', link: '/guide/21-codex/02-first-task' },
            { text: '3장. 규칙 파일 AGENTS.md', link: '/guide/21-codex/03-agents-md' },
            { text: '4장. 권한과 되돌리기', link: '/guide/21-codex/04-permissions-undo' },
            { text: '5장. 스킬 옮기기', link: '/guide/21-codex/05-skills' },
            { text: '6장. 예약·클라우드·휴대폰', link: '/guide/21-codex/06-schedule-cloud' },
            { text: '7장. 터미널에서 쓰기', link: '/guide/21-codex/07-terminal' },
            { text: '8장. 비용·데이터·안전, 그리고 도구 고르기', link: '/guide/21-codex/08-safety-choose' },
            { text: '← 3단계 · Claude Code', link: '/guide/20-claude-code/' },
          ],
        },
      ],
      '/guide/20-claude-code/': [
        {
          text: '3단계 · Claude Code 가이드',
          items: [
            { text: '목차', link: '/guide/20-claude-code/' },
            { text: '1장. Claude Code는 무엇이고 어디서 쓰나', link: '/guide/20-claude-code/01-what-is' },
            { text: '2장. 데스크톱 앱 설치와 첫 세션', link: '/guide/20-claude-code/02-install' },
            { text: '3장. 화면 둘러보기', link: '/guide/20-claude-code/03-screen-tour' },
            { text: '4장. 허락과 되돌리기', link: '/guide/20-claude-code/04-permissions-undo' },
            { text: '5장. 잘 맡기는 법', link: '/guide/20-claude-code/05-delegate-well' },
            { text: '6장. 프로젝트 기억', link: '/guide/20-claude-code/06-claude-md' },
            { text: '7장. 스킬·플러그인·외부 도구', link: '/guide/20-claude-code/07-skills-plugins' },
            { text: '8장. 여러 일 동시에·클라우드·예약', link: '/guide/20-claude-code/08-parallel-cloud-schedule' },
            { text: '9장. 비용·데이터·안전', link: '/guide/20-claude-code/09-cost-data-safety' },
            { text: '10장. 터미널에서 쓰기', link: '/guide/20-claude-code/10-terminal' },
            { text: '11장. 실습 과제', link: '/guide/20-claude-code/11-practice' },
            { text: '12장. 전문가처럼 쓰기', link: '/guide/20-claude-code/12-expert' },
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
        // English pages use the built-in English labels
        locales: {
          root: {
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
      },
    },
    outline: { label: '이 페이지에서' },
    docFooter: { prev: '이전 장', next: '다음 장' },
    lastUpdated: { text: '마지막 수정' },
    darkModeSwitchLabel: '화면 모드',
    sidebarMenuLabel: '목차',
    returnToTopLabel: '맨 위로',
    langMenuLabel: '언어 바꾸기',
  },
})
