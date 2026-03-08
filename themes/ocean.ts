import type { HelpNestTheme } from '../src/types'

const oceanTheme: HelpNestTheme = {
  id: 'ocean',
  name: 'Ocean',
  description: 'Blue and teal tones with a clean corporate feel — great for SaaS and tech companies.',
  author: 'HelpNest Team',
  tags: ['blue', 'teal', 'corporate', 'light', 'sans-serif'],
  colors: {
    cream: '#F0F7FF',
    ink: '#0D2340',
    muted: '#5B7FA6',
    border: '#C5DAFA',
    accent: '#1A6FD9',
    green: '#0E7C5B',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Plus Jakarta Sans', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
  },
  radius: 'lg',
  dark: false,
}

export default oceanTheme
