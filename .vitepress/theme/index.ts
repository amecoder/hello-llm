// Default theme plus the guide's interactive components and small style fixes.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PromptBuilder from './components/PromptBuilder.vue'
import Quiz from './components/Quiz.vue'
import CertExam from './components/CertExam.vue'
import ChapterDone from './components/ChapterDone.vue'
import MyProgress from './components/MyProgress.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import LevelTest from './components/LevelTest.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // the scroll bar is fixed to the top edge, so it takes no room in the layout
  Layout: () => h(DefaultTheme.Layout, null, { 'layout-top': () => h(ScrollProgress) }),
  enhanceApp({ app }) {
    app.component('PromptBuilder', PromptBuilder)
    app.component('Quiz', Quiz)
    app.component('CertExam', CertExam)
    app.component('ChapterDone', ChapterDone)
    app.component('MyProgress', MyProgress)
    app.component('LevelTest', LevelTest)
  },
} satisfies Theme
