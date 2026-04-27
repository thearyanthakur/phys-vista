function SettingsSlider({ id, label, description, min, max, step, value, onChange, valueLabel, minLabel, maxLabel }) {
  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <label htmlFor={id} className="text-sm font-semibold text-slate-900 dark:text-white">
            {label}
          </label>
          {description ? <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p> : null}
        </div>
        {valueLabel ? (
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200">
            {valueLabel}
          </span>
        ) : null}
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-skyline-500 dark:bg-white/10"
      />

      {(minLabel || maxLabel) ? (
        <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      ) : null}
    </div>
  )
}

export default SettingsSlider
