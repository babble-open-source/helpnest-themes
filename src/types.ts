export interface HelpNestTheme {
  id: string
  name: string
  description: string
  author: string
  tags: string[]
  colors: {
    cream: string    // page background
    ink: string      // primary text
    muted: string    // secondary text
    border: string   // borders/dividers
    accent: string   // brand color
    green: string    // AI banner / success
    white: string    // card background
  }
  fonts: {
    heading: string       // CSS font-family string
    body: string          // CSS font-family string
    headingUrl?: string   // Google Fonts URL
    bodyUrl?: string
  }
  radius: 'none' | 'sm' | 'md' | 'lg' | 'xl'  // border-radius scale applied globally
  dark: boolean           // whether this is a dark theme
}
