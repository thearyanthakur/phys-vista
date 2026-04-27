function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p> : null}
    </div>
  )
}

export default SectionHeader
