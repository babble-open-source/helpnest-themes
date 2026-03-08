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
 * Convert a hex color string to space-separated RGB channel values.
 * e.g. "#F7F4EE" → "247 244 238"
 *
 * Tailwind CSS uses `rgb(var(--color-x) / <alpha-value>)` which requires
 * the CSS variable to hold bare channel values, NOT a full hex or rgb() string.
 */
export function hexToRgbChannels(hex: string): string {
  const clean = hex.replace('#', '')
  const full = clean.length === 3
    ? clean.split('').map((c) => c + c).join('')
    : clean
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return `${r} ${g} ${b}`
}

/**
 * Generates a CSS variable block for a theme.
 * Colors are output as space-separated RGB channels so that Tailwind's
 * `rgb(var(--color-x) / <alpha-value>)` pattern works correctly.
 * Suitable for injecting as `:root { ... }` in a <style> tag (SSR-safe).
 */
export function themeToCSS(theme: HelpNestTheme): string {
  return `
    --color-cream: ${hexToRgbChannels(theme.colors.cream)};
    --color-ink: ${hexToRgbChannels(theme.colors.ink)};
    --color-muted: ${hexToRgbChannels(theme.colors.muted)};
    --color-border: ${hexToRgbChannels(theme.colors.border)};
    --color-accent: ${hexToRgbChannels(theme.colors.accent)};
    --color-green: ${hexToRgbChannels(theme.colors.green)};
    --color-white: ${hexToRgbChannels(theme.colors.white)};
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
