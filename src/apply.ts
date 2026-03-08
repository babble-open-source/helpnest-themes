import type { HelpNestTheme } from './types'

// Radius scale map
const radiusScale: Record<HelpNestTheme['radius'], string> = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
}

/**
 * Generates a CSS variable string for a theme.
 * Suitable for injecting into a <style> tag or :root block for SSR.
 */
export function themeToCSS(theme: HelpNestTheme): string {
  return `
    --color-cream: ${theme.colors.cream};
    --color-ink: ${theme.colors.ink};
    --color-muted: ${theme.colors.muted};
    --color-border: ${theme.colors.border};
    --color-accent: ${theme.colors.accent};
    --color-green: ${theme.colors.green};
    --color-white: ${theme.colors.white};
    --font-heading: ${theme.fonts.heading};
    --font-body: ${theme.fonts.body};
    --radius: ${radiusScale[theme.radius]};
  `.trim()
}

/**
 * Apply a theme at runtime (browser only).
 * Injects CSS variables into document.documentElement, loads Google Fonts,
 * and toggles the `dark` class on the <html> element.
 */
export function applyTheme(theme: HelpNestTheme): void {
  const root = document.documentElement
  const vars = themeToCSS(theme)

  vars.split('\n').forEach((line) => {
    const trimmed = line.trim()
    if (!trimmed) return
    const colonIndex = trimmed.indexOf(': ')
    if (colonIndex === -1) return
    const key = trimmed.slice(0, colonIndex)
    const value = trimmed.slice(colonIndex + 2).replace(/;$/, '')
    if (key && value) {
      root.style.setProperty(key, value)
    }
  })

  // Load Google Fonts if provided
  const fontUrls = [theme.fonts.headingUrl, theme.fonts.bodyUrl].filter(
    (url): url is string => Boolean(url)
  )

  fontUrls.forEach((url) => {
    if (!document.querySelector(`link[href="${url}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = url
      document.head.appendChild(link)
    }
  })

  // Toggle dark class on html element
  document.documentElement.classList.toggle('dark', theme.dark)
}
