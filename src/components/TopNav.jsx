function TopNav({ appName, appTagline, focusMode, onExplore, onSettings, onVision, t }) {
  return (
    <header className="section-shell sticky top-0 z-40 pt-4">
      <div className="flex items-center justify-between gap-4 rounded-[30px] border border-slate-200/80 bg-white/92 px-4 py-3 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.32)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/88 sm:px-6">
        <a href="#top" className="flex items-center gap-3 text-slate-950 dark:text-slate-50">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#082f49,#06b6d4)] font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            PV
          </span>
          <div>
            <div className="font-display text-lg font-bold tracking-tight">{appName}</div>
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{appTagline}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300 lg:flex">
          {!focusMode ? (
            <>
              <button
                type="button"
                onClick={onVision}
                className="transition hover:text-slate-950 dark:hover:text-white"
              >
                {t.nav.vision}
              </button>
              <a href="#machines" className="transition hover:text-slate-950 dark:hover:text-white">
                {t.nav.machines}
              </a>
            </>
          ) : null}
          <a href="#workspace" className="transition hover:text-slate-950 dark:hover:text-white">
            {t.nav.workspace}
          </a>
          <a href="#settings" className="transition hover:text-slate-950 dark:hover:text-white">
            {t.nav.settings}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {focusMode ? (
            <span className="hidden rounded-full border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100 sm:inline-flex">
              {t.nav.focusMode}
            </span>
          ) : null}
          <button
            type="button"
            onClick={onSettings}
            className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
          >
            {t.nav.settings}
          </button>
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-900"
          >
            {focusMode ? t.nav.workspace : t.nav.explore}
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopNav
