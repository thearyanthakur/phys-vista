import SectionHeader from './SectionHeader'

function MissionSection({ copy }) {
  return (
    <section id="vision" className="section-shell py-12 sm:py-16 lg:py-20">
      <SectionHeader
        eyebrow={copy.vision.eyebrow}
        title={copy.vision.title}
        description={copy.vision.description}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="dark-panel mesh-surface overflow-hidden p-6 sm:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">{copy.vision.promiseEyebrow}</div>
          <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">{copy.vision.promiseTitle}</h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{copy.vision.promiseDescription}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {copy.vision.steps.map(([step, label]) => (
              <div key={step} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-cyan-200">{step}</div>
                <div className="mt-3 text-sm leading-6 text-slate-200">{label}</div>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-5">
          {copy.vision.principles.map((item) => (
            <article key={item} className="glass-panel p-6">
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
