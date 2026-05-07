import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatText } from '../../settings/i18n'

// Simple Web Audio API sound generator
const playSound = (type) => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    
    if (type === 'correct') {
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime) // C5
      oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioCtx.currentTime + 0.1) // C6
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3)
      oscillator.start()
      oscillator.stop(audioCtx.currentTime + 0.3)
    } else {
      oscillator.type = 'sawtooth'
      oscillator.frequency.setValueAtTime(150, audioCtx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2)
      gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3)
      oscillator.start()
      oscillator.stop(audioCtx.currentTime + 0.3)
    }
  } catch (e) {
    console.log("Audio not supported or disabled")
  }
}

export default function QuizSession({ copy, machine, questions, onFinish, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds per question
  const [totalTimeTaken, setTotalTimeTaken] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [showFact, setShowFact] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  // Shuffle options so the correct answer isn't always the first one
  const shuffledQuestions = useMemo(() => {
    return questions.map(q => {
      const options = [...q.options]
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      return { ...q, options }
    })
  }, [questions])
  
  const currentQ = shuffledQuestions[currentIndex]
  const isLastQuestion = currentIndex === questions.length - 1

  // Timer logic
  useEffect(() => {
    if (isAnswerChecked || showFact || timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
      setTotalTimeTaken(prev => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [isAnswerChecked, showFact, timeLeft])

  useEffect(() => {
    if (timeLeft <= 0 && !isAnswerChecked) {
      setIsAnswerChecked(true)
      playSound('wrong')
      setStreak(0)
    }
  }, [timeLeft, isAnswerChecked])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const handleSelectOption = (option) => {
    if (isAnswerChecked) return
    setSelectedOption(option)
  }

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked) return
    
    setIsAnswerChecked(true)
    const isCorrect = selectedOption === currentQ.correctAnswer
    
    if (isCorrect) {
      playSound('correct')
      setScore(prev => prev + 100 + (streak * 10)) // Base + streak bonus
      const newStreak = streak + 1
      setStreak(newStreak)
      setMaxStreak(prev => Math.max(prev, newStreak))
      setCorrectCount(prev => prev + 1)
    } else {
      playSound('wrong')
      setStreak(0)
    }
  }

  const handleNext = () => {
    if ((currentIndex + 1) % 3 === 0 && !showFact && !isLastQuestion) {
      setShowFact(true)
      return
    }
    
    setShowFact(false)
    if (isLastQuestion) {
      handleFinish()
    } else {
      setCurrentIndex(prev => prev + 1)
      setSelectedOption(null)
      setIsAnswerChecked(false)
      setTimeLeft(60) // Reset to 60 seconds for the next question
    }
  }

  const handleFinish = () => {
    onFinish({
      score,
      maxStreak,
      correctAnswers: correctCount,
      totalQuestions: questions.length,
      timeTaken: totalTimeTaken
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col min-h-[70vh]">
      {/* Header Info */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onQuit}
          className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
        >
          ← {copy.quiz.quit}
        </button>
        <div className="flex gap-6 items-center">
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{copy.quiz.score}</div>
            <div className="font-display text-xl font-bold text-cyan-400">{score}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{copy.quiz.streak}</div>
            <div className="font-display text-xl font-bold text-dbtm-yellow">{streak}🔥</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{copy.quiz.time}</div>
            <div className={`font-display text-xl font-bold ${timeLeft < 60 ? 'text-red-500' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-slate-800 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        {showFact ? (
          <motion.div
            key="fact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex-1 flex flex-col items-center justify-center bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm text-center"
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-2 border-dbtm-yellow text-dbtm-yellow">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-widest text-white mb-4">
              {copy.quiz.didYouKnow}
            </h3>
            <p className="text-lg font-semibold leading-relaxed text-slate-300 max-w-2xl mb-12">
              {formatText(copy.quiz.funFact, { machineName: machine.name })}
            </p>
            <button
              onClick={handleNext}
              className="rounded-full bg-dbtm-yellow px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-dbtm-black transition-opacity hover:opacity-80"
            >
              {copy.quiz.continue} →
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key={`q-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              {formatText(copy.quiz.questionProgress, {
                current: currentIndex + 1,
                total: questions.length,
              })}
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 leading-relaxed">
              {currentQ.question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {currentQ.options.map((option, i) => {
                const isSelected = selectedOption === option
                const isCorrect = option === currentQ.correctAnswer
                let optionStyle = "border-slate-700/50 bg-slate-900/40 text-slate-300 hover:border-cyan-400/30 hover:bg-slate-800"
                
                if (isAnswerChecked) {
                  if (isCorrect) {
                    optionStyle = "border-green-500 bg-green-950/30 text-white shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                  } else if (isSelected) {
                    optionStyle = "border-red-500 bg-red-950/30 text-white"
                  } else {
                    optionStyle = "border-slate-800 bg-slate-900/20 text-slate-600 opacity-50"
                  }
                } else if (isSelected) {
                  optionStyle = "border-cyan-400 bg-cyan-950/30 text-white"
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(option)}
                    disabled={isAnswerChecked}
                    className={`relative w-full text-left p-6 rounded-xl border-2 transition-all duration-200 ${optionStyle}`}
                  >
                    <span className="font-semibold text-[15px] leading-relaxed block pr-8">{option}</span>
                    {isAnswerChecked && isCorrect && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 text-xl">✓</span>
                    )}
                    {isAnswerChecked && isSelected && !isCorrect && (
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 text-xl">✕</span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Feedback & Actions */}
            <AnimatePresence>
              {isAnswerChecked && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-auto pt-6 border-t border-slate-800"
                >
                  <div className={`p-5 rounded-xl border mb-6 ${selectedOption === currentQ.correctAnswer ? 'border-green-500/30 bg-green-950/20' : 'border-red-500/30 bg-red-950/20'}`}>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${selectedOption === currentQ.correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                      {selectedOption === currentQ.correctAnswer ? copy.quiz.excellent : copy.quiz.notQuite}
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-slate-300">
                      {currentQ.explanation}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="rounded-full bg-white px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-dbtm-black transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      {isLastQuestion ? copy.quiz.finish : `${copy.quiz.next} →`}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isAnswerChecked && (
              <div className="mt-auto flex justify-end">
                <button
                  onClick={handleCheckAnswer}
                  disabled={!selectedOption}
                  className="rounded-full bg-dbtm-yellow px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-dbtm-black transition-all hover:opacity-80 disabled:opacity-30 disabled:hover:opacity-30"
                >
                  {copy.quiz.submit}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
