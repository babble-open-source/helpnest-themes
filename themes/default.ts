import type { HelpNestTheme } from '../src/types'

const defaultTheme: HelpNestTheme = {
  id: 'default',
  name: 'Default',
  description: 'Warm cream tones with serif headings — the classic HelpNest look.',
  author: 'HelpNest Team',
  tags: ['warm', 'serif', 'light', 'official'],
  colors: {
    cream: '#F7F4EE',
    ink: '#1A1814',
    muted: '#7A756C',
    border: '#E2DDD5',
    accent: '#C8622A',
    green: '#2D6A4F',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Instrument Serif', Georgia, serif",
    body: "'DM Sans', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700&display=swap',
  },
  radius: 'md',
  dark: false,
}

export default defaultTheme
