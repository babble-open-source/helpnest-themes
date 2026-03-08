import type { HelpNestTheme } from '../src/types'

const midnightTheme: HelpNestTheme = {
  id: 'midnight',
  name: 'Midnight',
  description: 'Deep navy with monospace headings and crisp contrast — a premium developer-oriented dark theme.',
  author: 'HelpNest Team',
  tags: ['navy', 'dark', 'developer', 'monospace', 'premium'],
  colors: {
    cream: '#0D1117',
    ink: '#E6EDF3',
    muted: '#8B949E',
    border: '#21262D',
    accent: '#58A6FF',
    green: '#3FB950',
    white: '#161B22',
  },
  fonts: {
    heading: "'JetBrains Mono', monospace",
    body: "'Inter', system-ui, sans-serif",
    headingUrl:
      'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
    bodyUrl:
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
  },
  radius: 'md',
  dark: true,
}

export default midnightTheme
