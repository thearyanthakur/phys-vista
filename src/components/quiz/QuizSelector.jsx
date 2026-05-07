import { motion } from 'framer-motion'
import { quizData } from '../../data/quizData'
import { formatText } from '../../settings/i18n'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

export default function QuizSelector({ copy, machines, onSelectQuiz }) {
  if (machines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10 text-center backdrop-blur-md">
        <h2 className="font-display text-3xl font-bold uppercase tracking-widest text-white">
          {copy.quiz.noQuizTitle}
        </h2>
        <p className="mt-4 text-sm font-semibold tracking-wide text-slate-400">
          {copy.quiz.noQuizDescription}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
          {copy.quiz.selectorTitle}
        </h2>
        <p className="mt-4 text-slate-400 font-semibold tracking-wider">
          {copy.quiz.selectorDescription}
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {machines.map((machine) => {
          const questionCount = quizData[machine.id]?.length ?? 0
          let best = 0
          try {
            best = parseInt(localStorage.getItem(`physvista_quiz_topscore_${machine.id}`) || '0', 10)
          } catch {}

          return (
            <motion.button
              key={machine.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectQuiz(machine.id)}
              className="relative group overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 p-6 text-left backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-slate-800/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/50 transition-colors">
                  <span className="text-xl font-bold text-slate-300 group-hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                    {machine.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white mb-2">
                  {machine.name}
                </h3>
                <p className="text-sm font-semibold text-slate-400 line-clamp-2">
                  {machine.tagline}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-700/50 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                      {formatText(copy.quiz.questionCount, { count: questionCount })}
                    </span>
                    {best > 0 ? (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-dbtm-yellow mt-1">
                        {formatText(copy.quiz.bestScore, { score: best })}
                      </span>
                    ) : null}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                    {copy.quiz.start} →
                  </span>
                </div>
              </div>
            </motion.button>
          )
        })}
      </motion.div>
    </div>
  )
}
