function SettingsDropdown({ id, label, description, options, value, onChange }) {
  return (
    <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-950 dark:text-white">
        {label}
      </label>
      {description ? <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p> : null}

      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition focus:border-skyline-500 dark:border-white/10 dark:bg-slate-900 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SettingsDropdown
