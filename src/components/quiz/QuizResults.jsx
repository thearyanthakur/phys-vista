import { motion } from 'framer-motion'
import { formatText } from '../../settings/i18n'

export default function QuizResults({ copy, result, onRetry, onBack }) {
  const { score, maxStreak, correctAnswers, totalQuestions, timeTaken } = result
  
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)
  
  let rank = copy.quiz.beginner
  let color = "text-slate-400"
  let message = copy.quiz.beginnerMessage
  
  if (percentage >= 90) {
    rank = copy.quiz.master
    color = "text-dbtm-yellow drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]"
    message = copy.quiz.masterMessage
  } else if (percentage >= 60) {
    rank = copy.quiz.explorer
    color = "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
    message = copy.quiz.explorerMessage
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}m ${s}s`
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto text-center"
    >
      <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border-4 border-slate-800">
        <span className="text-4xl">
          {percentage >= 90 ? '🏆' : percentage >= 60 ? '🌟' : '📚'}
        </span>
      </div>

      <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-widest text-white mb-2">
        {copy.quiz.completeTitle}
      </h2>
      <p className={`font-display text-2xl font-bold uppercase tracking-widest ${color} mb-8`}>
        {formatText(copy.quiz.rankLabel, { rank })}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{copy.quiz.finalScore}</div>
          <div className="font-display text-3xl font-bold text-white">{score}</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{copy.quiz.accuracy}</div>
          <div className="font-display text-3xl font-bold text-cyan-400">{percentage}%</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{copy.quiz.bestStreak}</div>
          <div className="font-display text-3xl font-bold text-dbtm-yellow">{maxStreak}🔥</div>
        </div>
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">{copy.quiz.timeTaken}</div>
          <div className="font-display text-3xl font-bold text-white">{formatTime(timeTaken)}</div>
        </div>
      </div>

      <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-2xl p-6 mb-12">
        <p className="text-lg font-semibold text-cyan-100">{message}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onRetry}
          className="rounded-full border-2 border-slate-600 bg-transparent px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-white hover:bg-slate-800"
        >
          {copy.quiz.retry}
        </button>
        <button
          onClick={onBack}
          className="rounded-full bg-dbtm-yellow px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-dbtm-black transition-opacity hover:opacity-80"
        >
          {copy.quiz.backToCatalog}
        </button>
      </div>
    </motion.div>
  )
}
