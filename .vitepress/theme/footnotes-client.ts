// Browser side of the folded footnote box (.vitepress/footnotes.ts builds the HTML).
// - clicking a footnote number opens the box first, so the jump lands on a visible note
// - the toggle shows or hides the English source quotes
import type { Router } from 'vitepress'

function openBoxFor(id: string): void {
  if (!id) return
  const target = document.getElementById(decodeURIComponent(id))
  const box = target?.closest('details.footnotes-box')
  if (box instanceof HTMLDetailsElement) box.open = true
}

function onClick(event: MouseEvent): void {
  const el = event.target instanceof Element ? event.target : null
  const toggle = el?.closest('.fn-quote-toggle')
  if (toggle instanceof HTMLElement) {
    const box = toggle.closest('details.footnotes-box')
    const shown = box?.classList.toggle('show-quotes') ?? false
    toggle.textContent = (shown ? toggle.dataset.hide : toggle.dataset.show) ?? ''
    return
  }
  const ref = el?.closest('a[href^="#fn"]')
  if (ref instanceof HTMLAnchorElement) openBoxFor(ref.hash.slice(1))
}

export function setupFootnotes(router: Router): void {
  if (typeof window === 'undefined') return
  // capture phase: open the box before VitePress scrolls to the note
  window.addEventListener('click', onClick, true)
  window.addEventListener('hashchange', () => openBoxFor(location.hash.slice(1)))
  const previous = router.onAfterRouteChange
  router.onAfterRouteChange = async (to) => {
    await previous?.(to)
    requestAnimationFrame(() => openBoxFor(location.hash.slice(1)))
  }
}
