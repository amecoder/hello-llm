// Browser side of the folded footnote box (.vitepress/footnotes.ts builds the HTML).
// - a footnote number (or a #fnN address) opens the box and scrolls to the note
// - the toggle shows or hides the English source quotes
import type { Router } from 'vitepress'

function openBoxFor(id: string, scroll: boolean): void {
  let target: HTMLElement | null = null
  try {
    target = id ? document.getElementById(decodeURIComponent(id)) : null
  } catch {
    return // a malformed address in the URL bar
  }
  const box = target?.closest('details.footnotes-box')
  if (!(box instanceof HTMLDetailsElement) || !target) return
  box.open = true
  // VitePress scrolls before the box opens in some browsers; scroll again once it is open
  if (scroll) requestAnimationFrame(() => target?.scrollIntoView({ block: 'start' }))
}

function onClick(event: MouseEvent): void {
  const el = event.target instanceof Element ? event.target : null
  const toggle = el?.closest('.fn-quote-toggle')
  if (toggle instanceof HTMLElement) {
    const box = toggle.closest('details.footnotes-box')
    const shown = box?.classList.toggle('show-quotes') ?? false
    toggle.textContent = (shown ? toggle.dataset.hide : toggle.dataset.show) ?? ''
    toggle.setAttribute('aria-pressed', String(shown))
    return
  }
  const ref = el?.closest('a[href^="#fn"]')
  if (ref instanceof HTMLAnchorElement) openBoxFor(ref.hash.slice(1), true)
}

export function setupFootnotes(router: Router): void {
  if (typeof window === 'undefined') return
  window.addEventListener('click', onClick)
  window.addEventListener('hashchange', () => openBoxFor(location.hash.slice(1), true))
  const previous = router.onAfterRouteChange
  router.onAfterRouteChange = async (to) => {
    await previous?.(to)
    requestAnimationFrame(() => openBoxFor(location.hash.slice(1), true))
  }
}
