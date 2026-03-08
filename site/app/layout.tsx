import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HelpNest Themes — Community theme marketplace',
  description:
    'Beautiful themes for your HelpNest help center. Free and open source.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
