# Contributing a Theme

Thank you for contributing to the HelpNest theme marketplace. This guide covers everything you need to submit a community theme.

## Quick Start

1. Fork this repository on GitHub
2. Clone your fork locally
3. Copy an existing theme as your starting point:
   ```bash
   cp themes/default.ts themes/my-theme.ts
   ```
4. Edit `themes/my-theme.ts` with your colors, fonts, and metadata
5. Register your theme in `src/index.ts`
6. Run `npm install && npm run typecheck` to verify it compiles
7. Open a pull request

## Naming Conventions

- **File name**: `themes/<id>.ts` — use kebab-case (e.g., `themes/ocean-blue.ts`)
- **Theme `id`**: must match the file name without `.ts` (e.g., `"ocean-blue"`)
- **Theme `name`**: title-case display name shown in the marketplace (e.g., `"Ocean Blue"`)
- **Author**: your GitHub username or full name

IDs must be globally unique. Check existing themes before choosing one.

## Required Fields

Every theme must include all fields defined in `HelpNestTheme`:

| Field | Required | Notes |
|-------|----------|-------|
| `id` | Yes | Unique, kebab-case slug |
| `name` | Yes | Title-case display name |
| `description` | Yes | 1–2 sentences, shown in marketplace |
| `author` | Yes | Your name or GitHub handle |
| `tags` | Yes | At least 2 tags (see tag list below) |
| `colors.cream` | Yes | Page/hero background |
| `colors.ink` | Yes | Primary text |
| `colors.muted` | Yes | Secondary text |
| `colors.border` | Yes | Borders and dividers |
| `colors.accent` | Yes | Brand color, buttons, links |
| `colors.green` | Yes | Success states, AI banner |
| `colors.white` | Yes | Card backgrounds |
| `fonts.heading` | Yes | Valid CSS font-family string |
| `fonts.body` | Yes | Valid CSS font-family string |
| `fonts.headingUrl` | Recommended | Google Fonts URL for the heading font |
| `fonts.bodyUrl` | Recommended | Google Fonts URL for the body font |
| `radius` | Yes | One of: `none`, `sm`, `md`, `lg`, `xl` |
| `dark` | Yes | `true` if the theme has a dark background |

## Approved Tags

Use tags from this list (you may use multiple):

`warm`, `cool`, `neutral`, `dark`, `light`, `serif`, `sans-serif`, `monospace`, `minimal`, `corporate`, `playful`, `modern`, `earthy`, `nature`, `premium`, `developer`, `enterprise`, `friendly`, `official`, `blue`, `green`, `purple`, `pink`, `gray`, `navy`, `teal`, `rose`

You may propose new tags in your PR description.

## Color Contrast Requirements (WCAG AA)

To ensure your theme is accessible, the following pairs must meet WCAG AA contrast ratios:

| Pair | Minimum ratio |
|------|--------------|
| `ink` on `cream` | 4.5 : 1 (normal text) |
| `ink` on `white` | 4.5 : 1 (normal text) |
| `muted` on `cream` | 3 : 1 (large text / UI) |
| `accent` on `cream` | 3 : 1 (large text / UI) |
| `white` text on `accent` (if used) | 4.5 : 1 |

Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or [Coolors Contrast Checker](https://coolors.co/contrast-checker) to verify your palette.

Themes that fail WCAG AA on the primary text/background pair will not be merged until the issue is resolved.

## Fonts

- Use Google Fonts where possible — they load reliably and are free
- Always provide the full CSS `font-family` fallback stack (e.g., `"'Lora', Georgia, serif"`)
- If you use a self-hosted or licensed font, document the license in your PR

System fonts (`system-ui`, `sans-serif`, `monospace`) are always acceptable as fallbacks.

## Registering Your Theme in `src/index.ts`

Add an import and export for your theme:

```ts
// Add this import near the other theme imports
import myThemeObj from '../themes/my-theme'
export { default as myTheme } from '../themes/my-theme'

// Add to the themes array
export const themes: HelpNestTheme[] = [
  defaultTheme,
  darkTheme,
  // ... existing themes ...
  myThemeObj,  // add at the end
]
```

## Pull Request Checklist

Before submitting, verify:

- [ ] `npm run typecheck` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] All required fields are present and correctly typed
- [ ] Theme `id` is unique and matches the file name
- [ ] Colors meet WCAG AA contrast requirements
- [ ] Google Fonts URLs are correct and load the fonts you intend
- [ ] Theme is registered in `src/index.ts`
- [ ] PR title follows the pattern: `feat: add <Theme Name> theme`

## What Makes a Good Theme

- **Distinct identity**: Avoid submitting themes that are nearly identical to existing ones
- **Intentional palette**: Colors should work together harmoniously across all 7 slots
- **Readable body copy**: Prioritize legibility over stylistic extremes
- **Appropriate radius**: Match the radius to the theme's personality (sharp for enterprise, round for playful)
- **Font pairing**: Heading and body fonts should complement each other

## Questions

Open a [GitHub Discussion](https://github.com/helpnest/helpnest-themes/discussions) if you have questions before submitting.
