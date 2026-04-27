import { motion } from 'framer-motion'
import { ArrowRightIcon } from './icons'

function HeroSection({ copy, focusMode, onExplore }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="top" className="relative overflow-hidden bg-white pb-10 pt-12 dark:bg-dbtm-black sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="rounded-full bg-dbtm-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-dbtm-black">
              {copy.hero.eyebrow}
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl font-bold uppercase leading-[0.85] tracking-normal text-dbtm-black dark:text-white sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            {copy.hero.title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl"
          >
            {copy.hero.description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-4">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2 rounded-full bg-dbtm-black px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-dbtm-black/80 dark:bg-white dark:text-dbtm-black dark:hover:bg-white/90"
            >
              {copy.hero.primary}
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {!focusMode && (
        <div className="mt-20 overflow-hidden border-y border-slate-200 bg-slate-50 py-6 dark:border-slate-800 dark:bg-dbtm-black">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            className="flex whitespace-nowrap font-display text-2xl uppercase tracking-widest text-slate-500 dark:text-slate-400 sm:text-4xl"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center">
                {copy.hero.cards.map(([label]) => (
                  <span key={label} className="mx-8 flex items-center">
                    {label}
                    <span className="mx-8 text-dbtm-yellow">•</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default HeroSection
