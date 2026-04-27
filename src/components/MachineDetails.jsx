import { InfoIcon, SparkIcon } from './icons'

function MachineDetails({ copy, machine }) {
  return (
    <article className="mb-8 border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-dbtm-black sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dbtm-yellow text-dbtm-black">
          <InfoIcon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-normal text-dbtm-black dark:text-white">Machine Breakdown</h3>
      </div>
      
      <div className="space-y-8">
        {machine.systems && machine.systems.length > 0 && (
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Core Systems</h4>
            <div className="grid gap-4">
              {machine.systems.map(sys => (
                <div key={sys.title} className="bg-slate-50 p-5 dark:bg-slate-900/50">
                  <span className="block font-display text-xl font-bold uppercase tracking-widest text-dbtm-black dark:text-white">{sys.title}</span>
                  <span className="mt-2 block text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400">{sys.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {machine.visualExplainers && machine.visualExplainers.length > 0 && (
          <div>
            <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dbtm-black dark:text-dbtm-yellow">
              <SparkIcon className="h-4 w-4" />
              Visual Focus
            </h4>
            <ul className="space-y-3">
              {machine.visualExplainers.map((explainer, i) => (
                <li key={i} className="flex gap-4 border-l-4 border-dbtm-yellow bg-slate-50 p-4 dark:bg-slate-900/50">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dbtm-black dark:bg-dbtm-yellow" />
                  <span className="text-sm font-semibold leading-relaxed text-dbtm-black dark:text-white">{explainer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

export default MachineDetails
