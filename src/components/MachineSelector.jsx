import SectionHeader from './SectionHeader'
import { ArrowRightIcon, MachineIcon } from './icons'

function MachineSelector({ copy, machines, selectedMachineId, onSelect }) {
  return (
    <section id="machines" className="section-shell py-12 sm:py-16 lg:py-20">
      <SectionHeader
        eyebrow={copy.machines.eyebrow}
        title={copy.machines.title}
        description={copy.machines.description}
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {machines.map((machine) => {
          const isActive = machine.id === selectedMachineId

          return (
            <button
              key={machine.id}
              type="button"
              onClick={() => onSelect(machine.id)}
              className={`group text-left transition ${isActive ? 'translate-y-[-2px]' : 'hover:-translate-y-1'}`}
            >
              <article
                className={`relative h-full overflow-hidden rounded-[30px] border p-6 transition ${
                  isActive
                    ? 'border-cyan-300 bg-[linear-gradient(180deg,rgba(207,250,254,0.75),rgba(255,255,255,0.96))] dark:border-cyan-400/40 dark:bg-[linear-gradient(180deg,rgba(8,145,178,0.2),rgba(15,23,42,0.9))]'
                    : 'border-white/80 bg-white/80 hover:border-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20'
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0891b2,#2dd4bf,#fbbf24)]" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{machine.category}</div>
                    <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{machine.name}</h3>
                  </div>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${isActive ? 'bg-ink-950 text-white' : 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200'}`}>
                    <MachineIcon machineId={machine.id} className="h-7 w-7" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{machine.tagline}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {machine.outcomes.map((outcome) => (
                    <span key={outcome} className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                      {outcome}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold text-slate-950 dark:text-white">{machine.duration}</div>
                    <div className="mt-1 text-slate-500 dark:text-slate-400">{machine.level}</div>
                  </div>
                  <div className={`inline-flex items-center gap-2 font-semibold ${
                    isActive ? 'text-slate-950 dark:text-white' : 'text-slate-600 group-hover:text-slate-950 dark:text-slate-300 dark:group-hover:text-white'
                  }`}>
                    {copy.machines.openLesson}
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default MachineSelector
