// Default theme plus the guide's interactive components.
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PromptBuilder from './components/PromptBuilder.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PromptBuilder', PromptBuilder)
  },
} satisfies Theme
