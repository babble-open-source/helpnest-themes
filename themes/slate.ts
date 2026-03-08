import type { HelpNestTheme } from '../src/types'

const slateTheme: HelpNestTheme = {
  id: 'slate',
  name: 'Slate',
  description: 'Neutral grays with minimal enterprise aesthetics — clean, professional, and distraction-free.',
  author: 'HelpNest Team',
  tags: ['gray', 'minimal', 'enterprise', 'serif', 'light'],
  colors: {
    cream: '#F8F9FA',
    ink: '#111827',
    muted: '#6B7280',
    border: '#E5E7EB',
    accent: '#374151',
    green: '#059669',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'IBM Plex Serif', Georgia, serif",
    body: "'IBM Plex Sans', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap',
  },
  radius: 'sm',
  dark: false,
}

export default slateTheme
