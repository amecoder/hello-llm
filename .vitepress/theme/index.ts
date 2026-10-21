// Default theme plus the guide's interactive components and small style fixes.
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PromptBuilder from './components/PromptBuilder.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PromptBuilder', PromptBuilder)
  },
} satisfies Theme
