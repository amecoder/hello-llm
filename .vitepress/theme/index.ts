// Default theme plus the guide's interactive components and small style fixes.
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PromptBuilder from './components/PromptBuilder.vue'
import Quiz from './components/Quiz.vue'
import CertExam from './components/CertExam.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PromptBuilder', PromptBuilder)
    app.component('Quiz', Quiz)
    app.component('CertExam', CertExam)
  },
} satisfies Theme
