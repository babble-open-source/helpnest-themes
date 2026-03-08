export * from './types'
export * from './apply'

export { default as defaultTheme } from '../themes/default'
export { default as darkTheme } from '../themes/dark'
export { default as oceanTheme } from '../themes/ocean'
export { default as forestTheme } from '../themes/forest'
export { default as auroraTheme } from '../themes/aurora'
export { default as slateTheme } from '../themes/slate'
export { default as roseTheme } from '../themes/rose'
export { default as midnightTheme } from '../themes/midnight'

import defaultTheme from '../themes/default'
import darkTheme from '../themes/dark'
import oceanTheme from '../themes/ocean'
import forestTheme from '../themes/forest'
import auroraTheme from '../themes/aurora'
import slateTheme from '../themes/slate'
import roseTheme from '../themes/rose'
import midnightTheme from '../themes/midnight'
import type { HelpNestTheme } from './types'

export const themes: HelpNestTheme[] = [
  defaultTheme,
  darkTheme,
  oceanTheme,
  forestTheme,
  auroraTheme,
  slateTheme,
  roseTheme,
  midnightTheme,
]

export const getTheme = (id: string): HelpNestTheme | undefined =>
  themes.find((t) => t.id === id)
