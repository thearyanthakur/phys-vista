import SectionHeader from './SectionHeader'
import { ArrowRightIcon } from './icons'
import { motion } from 'framer-motion'

function MachineSelector({ copy, machines, selectedMachineId, onSelect }) {
  return (
    <section id="machines" className="section-shell py-16 sm:py-24 lg:py-32">
      <SectionHeader
        eyebrow={copy.machines.eyebrow}
        title={copy.machines.title}
        description={copy.machines.description}
      />

      <motion.div 
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {machines.map((machine) => {
          const isActive = machine.id === selectedMachineId
          // Safely handle IDs like "levers-pulleys-gears" to "levers" if needed, 
          // or just assume the image exists exactly as the ID. 
          // For levers-pulleys-gears, we generated 'levers.png'.
          const imageId = machine.id.includes('levers') ? 'levers' : machine.id

          return (
            <motion.div
              key={machine.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <button
                type="button"
                onClick={() => onSelect(machine.id)}
                className="group w-full text-left outline-none"
              >
                <article
                  className={`relative flex aspect-[4/5] flex-col justify-end overflow-hidden ${
                    isActive ? 'ring-4 ring-dbtm-yellow ring-offset-4 ring-offset-white dark:ring-offset-dbtm-black' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-dbtm-black">
                    <img 
                      src={`/images/${imageId}.png`} 
                      alt={machine.name} 
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
                  </div>
                  
                  {/* Text Content Block */}
                  <div className={`relative z-10 flex flex-col justify-end p-6 transition-colors duration-300 sm:p-8 ${
                    isActive ? 'bg-dbtm-yellow' : 'bg-transparent group-hover:bg-dbtm-yellow'
                  }`}>
                    <div className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                      isActive ? 'text-dbtm-black' : 'text-dbtm-yellow group-hover:text-dbtm-black'
                    }`}>
                      {machine.category}
                    </div>
                    
                    <div className="mt-3 flex items-end justify-between">
                      <div className="pr-4">
                        <h3 className={`font-display text-4xl font-bold uppercase tracking-normal transition-colors duration-300 sm:text-5xl xl:text-6xl ${
                          isActive ? 'text-dbtm-black' : 'text-white group-hover:text-dbtm-black'
                        }`}>
                          {machine.name}
                        </h3>
                        <p className={`mt-2 text-sm font-medium leading-relaxed transition-colors duration-300 ${
                          isActive ? 'text-dbtm-black/80' : 'text-slate-300 group-hover:text-dbtm-black/80'
                        }`}>
                          {machine.tagline}
                        </p>
                      </div>
                      <div className="shrink-0 pb-2">
                        <ArrowRightIcon className={`h-6 w-6 transition-all duration-300 group-hover:translate-x-2 ${
                          isActive ? 'text-dbtm-black' : 'text-white group-hover:text-dbtm-black'
                        }`} />
                      </div>
                    </div>
                  </div>
                </article>
              </button>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default MachineSelector
