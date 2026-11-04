// GoatCounter page counts for VitePress's in-page navigation.
// count.js counts the first page on load by itself; later moves never reload the page,
// so the router hook counts them. See https://www.goatcounter.com/help/spa
import { nextTick } from 'vue'
import type { Router } from 'vitepress'

interface CountVars {
  path: string
  referrer: string
  title: string
}

declare global {
  interface Window {
    goatcounter?: { count?: (vars: CountVars) => void }
  }
}

/**
 * What a route change means for counting. The first call is the page count.js already
 * counted on load (VitePress fires the hook for it too), so it only sets the baseline.
 * Moves within the same page (hash only) are not counted.
 */
export function routeCount(lastPath: string | null, href: string): { lastPath: string; count: string | null } {
  const path = new URL(href, 'https://placeholder.invalid').pathname
  if (lastPath === null || path === lastPath) return { lastPath: lastPath ?? path, count: null }
  return { lastPath: path, count: path }
}

export function trackPageViews(router: Router): void {
  if (typeof window === 'undefined') return // SSR build
  let lastPath: string | null = null
  let lastUrl = location.href
  const previous = router.onAfterRouteChange
  router.onAfterRouteChange = async (to) => {
    await previous?.(to)
    const next = routeCount(lastPath, to)
    lastPath = next.lastPath
    if (!next.count) return
    // count.js would send document.referrer (the outside page the visit started from) and the
    // canonical link (not updated on in-page moves), so pass the real previous page and path
    const referrer = lastUrl
    lastUrl = location.href
    await nextTick() // VitePress sets the new document.title after the route change
    window.goatcounter?.count?.({ path: next.count, referrer, title: document.title })
  }
}
