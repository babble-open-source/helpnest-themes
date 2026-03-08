import type { HelpNestTheme } from '../../../src/types'
import { CopyButton } from './CopyButton'

interface ThemeCardProps {
  theme: HelpNestTheme
}

export function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      {/* Color swatch strip */}
      <div className="h-2 flex">
        {Object.values(theme.colors).map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* Preview mockup - tiny help center UI */}
      <div className="p-4" style={{ backgroundColor: theme.colors.cream }}>
        <div
          className="rounded-lg overflow-hidden border"
          style={{ borderColor: theme.colors.border }}
        >
          {/* Mini nav */}
          <div
            className="px-3 py-2 text-xs font-medium"
            style={{
              backgroundColor: theme.colors.ink,
              color: theme.colors.cream,
            }}
          >
            My Help Center
          </div>

          {/* Mini hero */}
          <div
            className="px-3 py-3"
            style={{ backgroundColor: theme.colors.cream }}
          >
            <div
              className="text-xs font-medium mb-1.5"
              style={{
                color: theme.colors.ink,
                fontFamily: theme.fonts.heading,
              }}
            >
              How can we help?
            </div>
            <div
              className="h-1.5 rounded"
              style={{ backgroundColor: theme.colors.border }}
            />
          </div>

          {/* Mini article cards */}
          <div className="px-3 pb-3 grid grid-cols-3 gap-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded p-1.5 border"
                style={{
                  backgroundColor: theme.colors.white,
                  borderColor: theme.colors.border,
                }}
              >
                <div
                  className="w-3 h-3 rounded-sm mb-1"
                  style={{ backgroundColor: theme.colors.accent }}
                />
                <div
                  className="h-1 rounded"
                  style={{
                    backgroundColor: theme.colors.muted,
                    opacity: 0.4,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-gray-900">{theme.name}</h3>
          {theme.dark && (
            <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full shrink-0 ml-2">
              Dark
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500 mb-3">{theme.description}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {theme.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <CopyButton themeId={theme.id} />
        </div>
      </div>
    </div>
  )
}
