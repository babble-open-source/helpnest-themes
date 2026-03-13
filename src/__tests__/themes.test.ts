import { describe, it, expect } from 'vitest'
import {
  themes,
  getTheme,
  defaultTheme,
  darkTheme,
  oceanTheme,
  forestTheme,
  auroraTheme,
  slateTheme,
  roseTheme,
  midnightTheme,
} from '../index'

const EXPECTED_IDS = ['default', 'dark', 'ocean', 'forest', 'aurora', 'slate', 'rose', 'midnight']
const REQUIRED_COLORS = ['cream', 'ink', 'muted', 'border', 'accent', 'green', 'white'] as const
const VALID_RADIUS = ['none', 'sm', 'md', 'lg', 'xl']

describe('@helpnest/themes', () => {
  it('exports exactly 8 themes', () => {
    expect(themes).toHaveLength(8)
  })

  it('exports all named theme objects', () => {
    expect(defaultTheme).toBeDefined()
    expect(darkTheme).toBeDefined()
    expect(oceanTheme).toBeDefined()
    expect(forestTheme).toBeDefined()
    expect(auroraTheme).toBeDefined()
    expect(slateTheme).toBeDefined()
    expect(roseTheme).toBeDefined()
    expect(midnightTheme).toBeDefined()
  })

  it('themes array contains all expected IDs in order', () => {
    expect(themes.map((t) => t.id)).toEqual(EXPECTED_IDS)
  })

  it.each(EXPECTED_IDS)('theme "%s" has all required fields', (id) => {
    const theme = getTheme(id)
    expect(theme).toBeDefined()
    expect(typeof theme!.id).toBe('string')
    expect(typeof theme!.name).toBe('string')
    expect(typeof theme!.description).toBe('string')
    expect(typeof theme!.author).toBe('string')
    expect(Array.isArray(theme!.tags)).toBe(true)
    expect(typeof theme!.dark).toBe('boolean')
    expect(VALID_RADIUS).toContain(theme!.radius)
  })

  it.each(EXPECTED_IDS)('theme "%s" has all required color values', (id) => {
    const theme = getTheme(id)!
    for (const key of REQUIRED_COLORS) {
      expect(theme.colors[key], `${id}.colors.${key}`).toBeTruthy()
      // Must be a valid hex color
      expect(theme.colors[key]).toMatch(/^#[0-9a-fA-F]{3,8}$/)
    }
  })

  it.each(EXPECTED_IDS)('theme "%s" has valid font config', (id) => {
    const theme = getTheme(id)!
    expect(typeof theme.fonts.heading).toBe('string')
    expect(typeof theme.fonts.body).toBe('string')
    expect(theme.fonts.heading.length).toBeGreaterThan(0)
    expect(theme.fonts.body.length).toBeGreaterThan(0)
  })

  it('getTheme returns the correct theme by id', () => {
    expect(getTheme('default')?.id).toBe('default')
    expect(getTheme('dark')?.id).toBe('dark')
    expect(getTheme('midnight')?.id).toBe('midnight')
  })

  it('getTheme returns undefined for unknown id', () => {
    expect(getTheme('does-not-exist')).toBeUndefined()
    expect(getTheme('')).toBeUndefined()
  })

  it('dark theme has dark=true, light themes have dark=false', () => {
    expect(darkTheme.dark).toBe(true)
    expect(midnightTheme.dark).toBe(true)
    expect(defaultTheme.dark).toBe(false)
    expect(oceanTheme.dark).toBe(false)
  })

  it('no two themes share the same id', () => {
    const ids = themes.map((t) => t.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(ids.length)
  })
})
