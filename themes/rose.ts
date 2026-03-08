import type { HelpNestTheme } from '../src/types'

const roseTheme: HelpNestTheme = {
  id: 'rose',
  name: 'Rose',
  description: 'Soft pinks and roses with warm friendly energy — perfect for lifestyle and consumer brands.',
  author: 'HelpNest Team',
  tags: ['pink', 'rose', 'warm', 'friendly', 'serif', 'light'],
  colors: {
    cream: '#FFF5F7',
    ink: '#3D0A14',
    muted: '#9B6472',
    border: '#F5D0DA',
    accent: '#E11D48',
    green: '#0E7C5B',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Lato', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap',
  },
  radius: 'lg',
  dark: false,
}

export default roseTheme
