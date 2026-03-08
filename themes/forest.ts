import type { HelpNestTheme } from '../src/types'

const forestTheme: HelpNestTheme = {
  id: 'forest',
  name: 'Forest',
  description: 'Deep forest greens with earthy tones — perfect for sustainability, wellness, and nature brands.',
  author: 'HelpNest Team',
  tags: ['green', 'earthy', 'serif', 'light', 'nature'],
  colors: {
    cream: '#F2F7F4',
    ink: '#1A2E20',
    muted: '#5A7A63',
    border: '#C5DEC9',
    accent: '#2D6A4F',
    green: '#1B4332',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Lora', Georgia, serif",
    body: "'Source Sans 3', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500&display=swap',
  },
  radius: 'sm',
  dark: false,
}

export default forestTheme
