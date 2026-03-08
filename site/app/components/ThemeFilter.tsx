'use client'

import { useState } from 'react'
import type { HelpNestTheme } from '../../../src/types'
import { ThemeCard } from './ThemeCard'

type FilterMode = 'all' | 'light' | 'dark'

interface ThemeFilterProps {
  themes: HelpNestTheme[]
}

export function ThemeFilter({ themes }: ThemeFilterProps) {
  const [filter, setFilter] = useState<FilterMode>('all')

  const filtered = themes.filter((theme) => {
    if (filter === 'all') return true
    if (filter === 'dark') return theme.dark
    if (filter === 'light') return !theme.dark
    return true
  })

  const tabs: { label: string; value: FilterMode }[] = [
    { label: 'All', value: 'all' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ]

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === tab.value
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <span className="ml-auto text-sm text-gray-400">
          {filtered.length} theme{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Theme grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No themes found for this filter.
        </div>
      )}
    </div>
  )
}
