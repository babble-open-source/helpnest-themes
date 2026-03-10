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
    heading: "'Lora', Georgia, serif",
    body: "'Source Sans 3', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500&display=swap',
  },
  radius: 'md',
  dark: false,
}

export default defaultTheme
