import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from './icons'

function TopNav({ appName, appTagline, focusMode, nightMode, onExplore, onSettings, onToggleNightMode, t }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-dbtm-black/90"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 sm:gap-4 text-dbtm-black dark:text-white shrink-0">
          <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-dbtm-yellow font-display text-lg sm:text-xl font-bold uppercase tracking-widest text-dbtm-black">
            PV
          </span>
          <div className="hidden min-[400px]:block">
            <div className="font-display text-xl sm:text-2xl font-bold tracking-normal">{appName}</div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{appTagline}</div>
          </div>
          <div className="min-[400px]:hidden font-display text-xl font-bold tracking-normal">{appName}</div>
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
