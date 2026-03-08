import { themes } from '../../src/index'
import { ThemeFilter } from './components/ThemeFilter'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                HelpNest Themes
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Community themes for your help center
              </p>
            </div>
            <a
              href="https://github.com/helpnest/helpnest-themes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Submit a theme
            </a>
          </div>
        </div>
      </header>

      {/* Hero strip */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Beautiful themes for your help center
          </h2>
          <p className="text-gray-600 max-w-xl">
            Pick a theme, apply it in one line of code, and give your customers a
            help center that matches your brand. All themes are free and open source.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-mono px-4 py-2 rounded-lg">
            <span className="opacity-50">$</span>
            <span>npm install @helpnest/themes</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ThemeFilter themes={themes} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            MIT License &mdash; made with care by the HelpNest community
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="https://github.com/helpnest/helpnest"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Main repo
            </a>
            <a
              href="https://github.com/helpnest/helpnest-themes/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Contributing
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
