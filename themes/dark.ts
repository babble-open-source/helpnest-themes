import type { HelpNestTheme } from '../src/types'

const darkTheme: HelpNestTheme = {
  id: 'dark',
  name: 'Dark',
  description: 'Deep charcoal with off-white text — the warm dark mode companion to Default.',
  author: 'HelpNest Team',
  tags: ['dark', 'warm', 'official'],
  colors: {
    cream: '#1A1814',
    ink: '#F7F4EE',
    muted: '#9E9890',
    border: '#2E2B26',
    accent: '#E07A4A',
    green: '#3A8A65',
    white: '#232017',
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
  dark: true,
}

export default darkTheme
