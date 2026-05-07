import { useEffect, useMemo, useState } from 'react'
import ChatPanel from './components/ChatPanel'
import HeroSection from './components/HeroSection'
import LearningWorkspace from './components/LearningWorkspace'
import MachineSelector from './components/MachineSelector'
import MissionSection from './components/MissionSection'
import TopNav from './components/TopNav'
import SettingsPage from './components/settings/SettingsPage'
import Toast from './components/settings/Toast'
import QuizApp from './components/quiz/QuizApp'
import { machines } from './data/machines'
import { getLocalizedMachine } from './data/machineTranslations'
import { getTranslations } from './settings/i18n'
import { usePhysVistaSettings } from './settings/usePhysVistaSettings'

function getApiBaseCandidates() {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '')

  if (configuredBaseUrl) {
    return [configuredBaseUrl]
  }

  if (typeof window === 'undefined') {
    return ['http://localhost:8787']
  }

  const candidates = []

  if (window.location.protocol !== 'file:') {
    candidates.push('')
  }

  candidates.push('http://localhost:8787')

  return [...new Set(candidates)]
}

function createIntroMessage(machine, language) {
  const introByLanguage = {
    hi: `मैं ${machine.name} के लिए AI ट्यूटर हूँ। पूछिए कि इसके हिस्से साथ में कैसे काम करते हैं, ऊर्जा कहाँ बहती है, या पाठ में किस दृश्य पर ध्यान देना चाहिए।`,
    te: `నేను ${machine.name} కోసం AI ట్యూటర్‌ని. దీని భాగాలు కలిసి ఎలా పనిచేస్తాయో, శక్తి ఎక్కడ ప్రవహిస్తుందో, లేదా పాఠంలో ఏ దృశ్యంపై దృష్టి పెట్టాలో అడగండి.`,
  }

  return {
    role: 'assistant',
    text:
      introByLanguage[language] ||
      `I am Phys-Guru for ${machine.name}. Ask how its subsystems work together, where energy flows, or which visual detail to focus on in the lesson.`,
  }
}

function parseJsonSafely(rawText) {
  if (!rawText) {
    return null
  }

  try {
    return JSON.parse(rawText)
  } catch {
    return null
  }
}

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function isNetworkFetchError(error) {
  return error?.name === 'TypeError' && /fetch/i.test(error?.message || '')
}

async function requestChatStream(payload) {
  const baseCandidates = getApiBaseCandidates()
  let lastError = null

  for (const baseUrl of baseCandidates) {
    try {
      const response = await fetch(`${baseUrl}/api/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 404 && baseUrl === '' && baseCandidates.length > 1) {
        continue
      }

      return response
    } catch (error) {
      lastError = error
    }
  }

  throw lastError || new Error('Phys-Guru backend is unavailable.')
}

function App() {
  const { resetSettings, setSettings, settings } = usePhysVistaSettings()
  const copy = useMemo(() => getTranslations(settings.language), [settings.language])
  const localizedMachines = useMemo(
    () => machines.map((machine) => getLocalizedMachine(machine, settings.language)),
    [settings.language],
  )
  const [selectedMachineId, setSelectedMachineId] = useState(null)
  const selectedMachine = localizedMachines.find((machine) => machine.id === selectedMachineId) ?? null
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isVisionVisible, setIsVisionVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [currentView, setCurrentView] = useState('home')

  useEffect(() => {
    if (!selectedMachine) {
      setMessages([])
      setInput('')
      return
    }

    setMessages([createIntroMessage(selectedMachine, settings.language)])
    setInput('')
  }, [selectedMachine, settings.language])

  useEffect(() => {
    if (!toastMessage) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage('')
    }, 2200)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [toastMessage])

  useEffect(() => {
    if (!isVisionVisible || settings.focusMode) {
      return
    }

    window.requestAnimationFrame(() => {
      document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [isVisionVisible, settings.focusMode])

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function showToast(message) {
    setToastMessage(message)
  }

  function handleSettingChange(key, value) {
    if (settings[key] === value) {
      return
    }

    setSettings({ [key]: value })

    if (key === 'language') {
      showToast(getTranslations(value).settings.saved)
      return
    }

    showToast(copy.settings.saved)
  }

  function handleResetSettings() {
    resetSettings()
    showToast(getTranslations('en').settings.resetToast)
  }

  async function sendMessage(rawMessage) {
    if (!selectedMachine) {
      return
    }

    const nextMessage = rawMessage.trim()

    if (!nextMessage || isLoading) {
      return
    }

    const assistantMessageId = createMessageId()

    setMessages((current) => [
      ...current,
      { role: 'user', text: nextMessage },
      { id: assistantMessageId, role: 'assistant', text: '' },
    ])
    setInput('')
    setIsLoading(true)

    try {
      const response = await requestChatStream({
        topic: `${selectedMachine.name} | ${selectedMachine.tagline}`,
        message: nextMessage,
      })

      if (!response.ok) {
        const rawText = await response.text()
        const data = parseJsonSafely(rawText)
        throw new Error(
          data?.error ||
            'Phys-Guru could not respond right now. Start the backend server and check the AI configuration.',
        )
      }

      if (!response.body) {
        throw new Error('Phys-Guru returned an unreadable response. Please try again.')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let finalReply = ''

      const appendAssistantText = (text) => {
        if (!text) {
          return
        }

        finalReply += text
        setMessages((current) =>
          current.map((entry) =>
            entry.id === assistantMessageId ? { ...entry, text: finalReply } : entry,
          ),
        )
      }

      while (true) {
        const { done, value } = await reader.read()

        if (done) {
          break
        }

        buffer += decoder.decode(value, { stream: true })
        const events = buffer.split('\n\n')
        buffer = events.pop() || ''

        for (const eventBlock of events) {
          const dataLine = eventBlock
            .split('\n')
            .map((line) => line.trim())
            .find((line) => line.startsWith('data:'))

          if (!dataLine) {
            continue
          }

          const payload = parseJsonSafely(dataLine.slice(5).trim())

          if (!payload) {
            continue
          }

          if (payload.type === 'delta') {
            appendAssistantText(payload.text)
            continue
          }

          if (payload.type === 'done') {
            if (!finalReply && payload.reply) {
              appendAssistantText(payload.reply)
            }
            break
          }

          if (payload.type === 'error') {
            throw new Error(payload.error || 'Phys-Guru could not respond right now.')
          }
        }
      }

      if (!finalReply.trim()) {
        throw new Error('Phys-Guru returned an unreadable response. Please try again.')
      }
    } catch (error) {
      setMessages((current) => [
        ...current.filter((entry) => entry.id !== assistantMessageId),
        {
          role: 'assistant',
          text:
            isNetworkFetchError(error)
              ? 'Phys-Guru could not connect to the backend. Start `npm run dev` and open the app through the PhysVista server.'
              : error.message ||
                'Phys-Guru is unavailable right now. Start `npm run dev` and confirm the AI provider key is set.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="page-shell">

      <TopNav
        appName={copy.appName}
        appTagline={copy.appTagline}
        focusMode={settings.focusMode}
        nightMode={settings.nightMode}
        onExplore={() => scrollToSection('machines')}
        onSettings={() => setIsSettingsOpen(true)}
        onVision={() => setIsVisionVisible(true)}
        onToggleNightMode={() => handleSettingChange('nightMode', !settings.nightMode)}
        onNavigate={(view) => {
          setCurrentView(view)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        t={copy}
        currentView={currentView}
      />

      {currentView === 'home' ? (
        <>
          <HeroSection
        copy={copy}
        focusMode={settings.focusMode}
        machine={selectedMachine}
        onExplore={() => scrollToSection('machines')}
        onSettings={() => setIsSettingsOpen(true)}
      />

      <main className="pb-16 sm:pb-24">
        {isVisionVisible && !settings.focusMode ? <MissionSection copy={copy} /> : null}
        {!settings.focusMode ? (
          <MachineSelector
            copy={copy}
            machines={localizedMachines}
            selectedMachineId={selectedMachine?.id}
            onSelect={(machineId) => {
              setSelectedMachineId(machineId)
              window.setTimeout(() => {
                scrollToSection('workspace')
              }, 120)
            }}
          />
        ) : null}
        {selectedMachine ? (
          <LearningWorkspace copy={copy} machine={selectedMachine} settings={settings}>
            <ChatPanel
            copy={copy}
            input={input}
            isLoading={isLoading}
            machine={selectedMachine}
            messages={messages}
            onInputChange={setInput}
            onSubmit={handleSubmit}
          />
        </LearningWorkspace>
        ) : null}
        </main>
        </>
      ) : (
        <QuizApp 
          copy={copy} 
          onNavigate={(view) => {
            setCurrentView(view)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }} 
          machines={localizedMachines} 
        />
      )}
      
      <SettingsPage
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          copy={copy}
          settings={settings}
          onReset={handleResetSettings}
          onSettingChange={handleSettingChange}
        />

      {toastMessage ? <Toast message={toastMessage} /> : null}
    </div>
  )
}

export default App
