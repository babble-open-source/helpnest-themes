import type { HelpNestTheme } from '../src/types'

const auroraTheme: HelpNestTheme = {
  id: 'aurora',
  name: 'Aurora',
  description: 'Purple and violet with a playful modern feel — ideal for creative and consumer apps.',
  author: 'HelpNest Team',
  tags: ['purple', 'violet', 'playful', 'modern', 'light'],
  colors: {
    cream: '#F8F5FF',
    ink: '#1E1040',
    muted: '#7B6EA8',
    border: '#DDD5F8',
    accent: '#7C3AED',
    green: '#059669',
    white: '#FFFFFF',
  },
  fonts: {
    heading: "'Syne', system-ui, sans-serif",
    body: "'Nunito', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;600&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap',
  },
  radius: 'xl',
  dark: false,
}

export default auroraTheme
