'use client'

import { useState } from 'react'

interface CopyButtonProps {
  themeId: string
}

export function CopyButton({ themeId: _themeId }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const cmd = 'npm install @helpnest/themes'

  function handleClick() {
    navigator.clipboard.writeText(cmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className="w-full text-xs bg-gray-900 text-white py-2 px-3 rounded-lg font-mono hover:bg-gray-700 transition-colors text-left flex items-center justify-between"
      aria-label={`Copy install command for theme`}
    >
      <span>{cmd}</span>
      <span className="ml-2 opacity-70">{copied ? '✓' : '⎘'}</span>
    </button>
  )
}
