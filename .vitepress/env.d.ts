// Type declarations for non-TS imports, so the editor's TypeScript server
// stops reporting them. The build (Vite) already handles these files.
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '*.css'

// markdown-it-footnote ships no type definitions; type it against VitePress's
// bundled markdown-it so md.use(footnote) in config.mts matches
declare module 'markdown-it-footnote' {
  import type { MarkdownRenderer } from 'vitepress'
  const footnote: (md: MarkdownRenderer) => void
  export default footnote
}
