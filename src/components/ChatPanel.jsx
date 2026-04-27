import { useEffect, useRef } from 'react'
import { MessageIcon } from './icons'

function ChatPanel({ copy, input, isLoading, machine, messages, onInputChange, onSubmit }) {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <aside className="dark-panel mesh-surface overflow-hidden p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {copy.chat.badge}
          </span>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">{copy.chat.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {copy.chat.description}
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
          <MessageIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-6 rounded-[26px] border border-white/10 bg-white/5 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{copy.chat.currentLesson}</div>
        <div className="mt-3 text-lg font-semibold text-white">{machine.name}</div>
        <div className="mt-2 text-sm leading-6 text-slate-300">{machine.tagline}</div>
      </div>

      <div className="mt-6 max-h-[26rem] space-y-3 overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[92%] rounded-[22px] px-4 py-3 text-sm leading-7 ${
              message.role === 'user' ? 'ml-auto bg-cyan-400/16 text-cyan-50' : 'bg-white/8 text-slate-100'
            }`}
          >
            {message.text || copy.chat.thinking}
          </div>
        ))}

        <div ref={endRef} />
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <label className="sr-only" htmlFor="physvista-chat-input">
          Ask Physics Guru
        </label>
        <textarea
          id="physvista-chat-input"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              event.currentTarget.form?.requestSubmit()
            }
          }}
          rows="5"
          placeholder={copy.chat.placeholder.replace('{machineName}', machine.name)}
          className="w-full rounded-[24px] border border-white/10 bg-white/6 px-4 py-3 text-sm leading-7 text-white placeholder:text-slate-400 focus:border-cyan-300/60"
        />
        <div className="px-1 text-xs text-slate-400">{copy.chat.enterHint}</div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        >
          {isLoading ? copy.chat.sending : copy.chat.send}
        </button>
      </form>
    </aside>
  )
}

export default ChatPanel
