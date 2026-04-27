import { ArrowRightIcon, MachineIcon, MessageIcon, SparkIcon } from './icons'

function HeroSection({ copy, focusMode, machine, onExplore, onSettings }) {
  const showMachinePreview = !focusMode && Boolean(machine)

  return (
    <section id="top" className="section-shell pb-10 pt-8 sm:pb-14 sm:pt-10 lg:pb-20 lg:pt-14">
      <div className={`grid items-center gap-8 ${showMachinePreview ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-14' : 'lg:grid-cols-1'}`}>
        <div>
          <span className="section-kicker">{copy.hero.eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            {copy.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {copy.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-900"
            >
              {copy.hero.primary}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onSettings}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            >
              {copy.hero.secondary}
            </button>
          </div>

          {!focusMode ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {copy.hero.cards.map(([label, text]) => (
              <div key={label} className="glass-panel px-5 py-4">
                <div className="text-sm font-semibold text-slate-950 dark:text-white">{label}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</div>
              </div>
              ))}
            </div>
          ) : null}
        </div>

        {showMachinePreview ? (
          <div className="relative">
          <div className="hero-orb absolute -left-10 top-8 h-36 w-36 rounded-full bg-skyline-500/20 blur-3xl" />
          <div className="hero-orb absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-mint-400/20 blur-3xl" />

          <div className="dark-panel mesh-surface relative overflow-hidden p-6 sm:p-8">
            <div className="absolute right-6 top-6 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">
              {copy.hero.featured}
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <MachineIcon machineId={machine.id} className="h-5 w-5 text-cyan-300" />
              <span>{machine.name}</span>
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">{copy.hero.nowLearning}</p>
                    <h2 className="mt-2 font-display text-3xl font-bold text-white">{machine.name}</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <MachineIcon machineId={machine.id} className="h-6 w-6 text-white" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">{machine.tagline}</p>

                <div className="mt-6 rounded-[22px] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{copy.hero.lessonFocus}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{machine.summary}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[machine.focusLabel, machine.duration, machine.level].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[26px] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,47,73,0.45),rgba(2,6,23,0.18))] p-5">
                  <div className="flex items-center gap-3 text-cyan-100">
                    <SparkIcon className="h-5 w-5" />
                    <span className="text-sm font-semibold">{copy.hero.flowPreview}</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {machine.outcomes.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="text-sm text-slate-200">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="float-slow rounded-[26px] border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(255,255,255,0.04))] p-5">
                  <div className="flex items-center gap-3 text-emerald-100">
                    <MessageIcon className="h-5 w-5" />
                    <span className="text-sm font-semibold">{copy.hero.outcomeTitle}</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                    {copy.hero.outcomeBullets.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default HeroSection
