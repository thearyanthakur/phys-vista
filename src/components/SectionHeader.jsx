function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-4xl text-center md:text-left">
      <div className="mb-4">
        <span className="rounded-full bg-dbtm-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-dbtm-black">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-normal text-dbtm-black dark:text-white sm:text-6xl md:text-7xl">{title}</h2>
      {description ? <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl">{description}</p> : null}
    </div>
  )
}

export default SectionHeader
