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
        <article className="neo-panel overflow-hidden p-6 sm:p-8 bg-emerald-100 dark:bg-emerald-900">
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">{copy.vision.promiseEyebrow}</div>
          <h3 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">{copy.vision.promiseTitle}</h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-800 dark:text-slate-200">{copy.vision.promiseDescription}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {copy.vision.steps.map(([step, label]) => (
              <div key={step} className="rounded-[24px] border-2 border-slate-900 bg-white p-5 dark:border-white dark:bg-slate-800">
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{step}</div>
                <div className="mt-3 text-sm leading-6 font-semibold text-slate-900 dark:text-slate-100">{label}</div>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-5">
          {copy.vision.principles.map((item) => (
            <article key={item} className="neo-panel p-6 bg-skyline-100 dark:bg-skyline-900">
              <p className="text-sm leading-7 text-slate-900 font-bold dark:text-white">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
