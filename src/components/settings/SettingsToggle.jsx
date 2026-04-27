function SettingsToggle({ checked, description, label, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">{label}</div>
        {description ? <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p> : null}
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border transition ${
          checked
            ? 'border-cyan-400 bg-cyan-500/90'
            : 'border-slate-300 bg-slate-200 dark:border-white/15 dark:bg-white/10'
        }`}
      >
        <span
          className={`h-6 w-6 rounded-full bg-white shadow-sm transition ${checked ? 'translate-x-7' : 'translate-x-1'}`}
        />
      </button>
    </div>
  )
}

export default SettingsToggle
