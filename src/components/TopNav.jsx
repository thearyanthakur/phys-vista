import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from './icons'

function TopNav({ appName, appTagline, focusMode, nightMode, onExplore, onSettings, onToggleNightMode, onNavigate, t, currentView }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-dbtm-black/90"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 sm:gap-4 text-dbtm-black dark:text-white shrink-0 group"
        >
          <div className="relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 shrink-0 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <circle cx="32" cy="32" r="20" className="fill-slate-900 dark:fill-black" stroke="#facc15" strokeWidth="1.5" />
              
              <g stroke="#facc15" strokeWidth="1" fill="none" opacity="0.6" filter="url(#neon-glow)">
                <ellipse cx="32" cy="32" rx="28" ry="8" transform="rotate(30 32 32)" />
                <ellipse cx="32" cy="32" rx="28" ry="8" transform="rotate(150 32 32)" />
                <ellipse cx="32" cy="32" rx="28" ry="8" transform="rotate(90 32 32)" />
              </g>

              <g filter="url(#neon-glow)">
                <circle cx="10" cy="19" r="2" fill="#facc15" />
                <circle cx="54" cy="45" r="2" fill="#facc15" />
                <circle cx="16" cy="50" r="1.5" fill="#ffffff" />
                <circle cx="48" cy="14" r="2.5" fill="#ffffff" />
                <circle cx="32" cy="4" r="2" fill="#facc15" />
              </g>

              <text x="25" y="40" fontSize="26" fontWeight="900" fontFamily="sans-serif" fill="#ffffff" textAnchor="middle">P</text>
              <text x="41" y="40" fontSize="26" fontWeight="900" fontFamily="sans-serif" fill="#facc15" textAnchor="middle">V</text>
            </svg>
          </div>
          <div className="hidden min-[400px]:block">
            <div className="font-display text-xl sm:text-2xl font-bold tracking-normal uppercase">{appName}</div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {appTagline}
            </div>
          </div>
          <div className="min-[400px]:hidden font-display text-xl font-bold tracking-normal uppercase">{appName}</div>
        </a>

        <div className="flex items-center gap-4">
          {focusMode ? (
            <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-dbtm-black dark:bg-slate-800 dark:text-white sm:inline-flex">
              {t.nav.focusMode}
            </span>
          ) : null}
          <button
            type="button"
            onClick={onToggleNightMode}
            className="rounded-full bg-slate-100 p-2.5 text-dbtm-black transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            aria-label="Toggle Dark Mode"
          >
            {nightMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          
          <button
            type="button"
            onClick={() => {
              if (currentView === 'quiz') {
                onNavigate?.('home')
              } else {
                onNavigate?.('quiz')
              }
            }}
            className="rounded-full border border-transparent bg-dbtm-black px-4 py-1.5 sm:px-5 sm:py-2 font-display text-base sm:text-lg tracking-widest text-dbtm-yellow transition-colors hover:bg-slate-800 dark:bg-white dark:text-dbtm-black dark:hover:bg-slate-200"
          >
            {currentView === 'quiz' ? t.quiz.exit : t.nav.quiz}
          </button>

          <button
            type="button"
            onClick={onSettings}
            className="rounded-full border-2 border-dbtm-black bg-transparent px-4 py-1.5 sm:px-5 sm:py-2 font-display text-base sm:text-lg tracking-widest transition-colors hover:bg-slate-100 dark:border-white dark:hover:bg-slate-800 dark:text-white"
          >
            {t.nav.settings}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default TopNav
