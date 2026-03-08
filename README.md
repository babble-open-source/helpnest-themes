# HelpNest Themes

Community themes for [HelpNest](https://github.com/helpnest/helpnest) — the open-source help center.

## Available Themes

| Theme | Style | Dark |
|-------|-------|------|
| Default | Warm cream, serif headings | No |
| Dark | Charcoal, same warmth | Yes |
| Ocean | Blue/teal, corporate | No |
| Forest | Deep green, earthy | No |
| Aurora | Purple/violet, playful | No |
| Slate | Gray, minimal enterprise | No |
| Rose | Pink/rose, friendly | No |
| Midnight | Deep navy, premium | Yes |

## Install

```bash
npm install @helpnest/themes
```

## Usage

### Apply at runtime (client-side)

```ts
import { applyTheme, oceanTheme } from '@helpnest/themes'

applyTheme(oceanTheme)
```

### Get theme CSS variables (SSR)

```ts
import { themeToCSS, forestTheme } from '@helpnest/themes'

// In your Next.js layout:
const css = themeToCSS(forestTheme)
// Inject as <style>:root { ${css} }</style>
```

### Use a theme in HelpNest dashboard

In your workspace settings, select a theme from the dropdown. HelpNest stores the theme ID in the Workspace record and applies it on the public help center.

### List all themes

```ts
import { themes, getTheme } from '@helpnest/themes'

console.log(themes.map(t => t.id))
// ['default', 'dark', 'ocean', 'forest', 'aurora', 'slate', 'rose', 'midnight']

const theme = getTheme('aurora')
```

## Creating a Theme

1. Fork this repo
2. Copy `themes/default.ts` → `themes/my-theme.ts`
3. Update the colors, fonts, and metadata
4. Add your theme to `src/index.ts`
5. Submit a PR

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Theme Structure

Each theme is a typed TypeScript object:

```ts
import type { HelpNestTheme } from '@helpnest/themes'

const myTheme: HelpNestTheme = {
  id: 'my-theme',           // unique slug, kebab-case
  name: 'My Theme',
  description: 'A short description for the marketplace.',
  author: 'Your Name',
  tags: ['minimal', 'light'],
  colors: {
    cream: '#F7F4EE',       // page/hero background
    ink: '#1A1814',         // primary text
    muted: '#7A756C',       // secondary text
    border: '#E2DDD5',      // borders and dividers
    accent: '#C8622A',      // brand color (links, buttons)
    green: '#2D6A4F',       // success / AI strip
    white: '#FFFFFF',       // card backgrounds
  },
  fonts: {
    heading: "'Instrument Serif', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    headingUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap',
    bodyUrl: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap',
  },
  radius: 'md',             // 'none' | 'sm' | 'md' | 'lg' | 'xl'
  dark: false,
}

export default myTheme
```

## License

MIT
