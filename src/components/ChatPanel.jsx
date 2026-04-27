import { useEffect, useRef, useState } from 'react'
import { MessageIcon, BookmarkIcon } from './icons'
import ReactMarkdown from 'react-markdown'

function ChatPanel({ copy, input, isLoading, machine, messages, onInputChange, onSubmit }) {
  const endRef = useRef(null)
  const [bookmarks, setBookmarks] = useState([])

  const toggleBookmark = (msgId) => {
    setBookmarks(prev => prev.includes(msgId) ? prev.filter(id => id !== msgId) : [...prev, msgId])
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <aside className="border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-dbtm-black sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-dbtm-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest text-dbtm-black">
            {copy.chat.badge}
          </span>
          <h3 className="mt-5 font-display text-4xl font-bold uppercase tracking-normal text-dbtm-black dark:text-white">{copy.chat.title}</h3>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-400">
            {copy.chat.description}
          </p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-dbtm-black text-white dark:bg-white dark:text-dbtm-black">
          <MessageIcon className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-8 bg-slate-50 p-5 dark:bg-slate-900/50">
        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{copy.chat.currentLesson}</div>
        <div className="mt-3 font-display text-2xl font-bold uppercase text-dbtm-black dark:text-white">{machine.name}</div>
        <div className="mt-1 text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-400">{machine.tagline}</div>
      </div>

      <div className="mt-8 max-h-[26rem] space-y-4 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`group relative max-w-[90%] p-5 text-sm font-semibold leading-relaxed ${
              message.role === 'user' 
                ? 'ml-auto bg-dbtm-black text-white dark:bg-white dark:text-dbtm-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-sm' 
                : 'border border-slate-200 bg-white text-dbtm-black dark:border-slate-800 dark:bg-dbtm-black dark:text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-sm rounded-br-2xl'
            }`}
          >
            {message.role === 'assistant' ? (
              <div className="markdown-content">
                <ReactMarkdown>{message.text || copy.chat.thinking}</ReactMarkdown>
                {message.id && (
                  <button 
                    type="button"
                    onClick={() => toggleBookmark(message.id)} 
                    className={`absolute -bottom-3 -right-3 rounded-full border border-slate-200 p-2 transition-all duration-150 dark:border-slate-700 ${
                      bookmarks.includes(message.id) 
                        ? 'bg-dbtm-yellow text-dbtm-black opacity-100' 
                        : 'bg-white text-slate-400 opacity-0 hover:text-dbtm-black group-hover:opacity-100 dark:bg-slate-800 dark:hover:text-white'
                    }`}
                    aria-label="Bookmark message"
                  >
                    <BookmarkIcon className="h-4 w-4" />
                  </button>
                )}
              </div>
            ) : (
              message.text
            )}
          </div>
        ))}

        <div ref={endRef} />
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="sr-only" htmlFor="physvista-chat-input">
          Ask Phys-Guru
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
          rows="4"
          placeholder={copy.chat.placeholder.replace('{machineName}', machine.name)}
          className="w-full resize-none border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-dbtm-black placeholder:text-slate-400 focus:border-dbtm-black focus:outline-none focus:ring-1 focus:ring-dbtm-black dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:border-white dark:focus:ring-white transition-all"
        />
        <div className="px-1 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{copy.chat.enterHint}</div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full bg-dbtm-yellow px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-dbtm-black transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {isLoading ? copy.chat.sending : copy.chat.send}
        </button>
      </form>
    </aside>
  )
}

export default ChatPanel
