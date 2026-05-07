import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import QuizSelector from './QuizSelector'
import QuizSession from './QuizSession'
import QuizResults from './QuizResults'
import { quizData } from '../../data/quizData'

export default function QuizApp({ copy, onNavigate, machines }) {
  const [gameState, setGameState] = useState('selector') // 'selector', 'playing', 'results'
  const [selectedMachineId, setSelectedMachineId] = useState(null)
  const [quizResult, setQuizResult] = useState(null)
  const availableMachines = useMemo(
    () => machines.filter((machine) => Array.isArray(quizData[machine.id]) && quizData[machine.id].length > 0),
    [machines],
  )

  const handleSelectQuiz = (machineId) => {
    if (!quizData[machineId]?.length) {
      return
    }
    setSelectedMachineId(machineId)
    setGameState('playing')
  }

  const handleFinishQuiz = (result) => {
    setQuizResult(result)
    setGameState('results')
    
    // Simple LocalStorage Leaderboard update
    try {
      const key = `physvista_quiz_topscore_${selectedMachineId}`
      const existing = parseInt(localStorage.getItem(key) || '0', 10)
      if (result.score > existing) {
        localStorage.setItem(key, result.score.toString())
      }
    } catch (e) {
      // ignore
    }
  }

  const handleRetry = () => {
    setGameState('playing')
    setQuizResult(null)
  }

  const handleBackToSelector = () => {
    setGameState('selector')
    setSelectedMachineId(null)
    setQuizResult(null)
  }

  const activeMachine = machines.find(m => m.id === selectedMachineId)
  const activeQuestions = selectedMachineId ? quizData[selectedMachineId] : []

  return (
    <main className="relative min-h-screen bg-dbtm-black overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-900/30 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-slate-800/50 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {gameState === 'selector' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={() => onNavigate('home')}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
              >
                ← {copy.quiz.backToPlatform}
              </button>
            </div>
            <QuizSelector
              copy={copy}
              machines={availableMachines}
              onSelectQuiz={handleSelectQuiz}
            />
          </motion.div>
        )}

        {gameState === 'playing' && activeMachine && (
          <QuizSession
            copy={copy}
            machine={activeMachine}
            questions={activeQuestions}
            onFinish={handleFinishQuiz}
            onQuit={handleBackToSelector}
          />
        )}

        {gameState === 'results' && quizResult && (
          <QuizResults
            copy={copy}
            result={quizResult}
            onRetry={handleRetry}
            onBack={handleBackToSelector}
          />
        )}
      </div>
    </main>
  )
}
