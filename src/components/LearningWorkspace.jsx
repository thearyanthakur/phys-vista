import { useEffect, useMemo, useState } from 'react'
import SectionHeader from './SectionHeader'
import { MachineIcon, PlayIcon } from './icons'

function VideoPanel({ copy, machine, settings }) {
  const lessonSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(machine.searchQuery)}`
  const actionUrl = machine.sourceUrl || lessonSearchUrl
  const actionLabel = machine.sourceLabel || 'Find on YouTube'
  const languageCode = settings.language === 'hi' ? 'hi' : settings.language === 'te' ? 'te' : 'en'
  const lessonEmbedUrl = useMemo(() => {
    if (!machine.videoId) {
      return null
    }

    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
    })

    if (settings.subtitlesEnabled) {
      params.set('cc_load_policy', '1')
      params.set('cc_lang_pref', languageCode)
    }

    return `https://www.youtube-nocookie.com/embed/${machine.videoId}?${params.toString()}`
  }, [languageCode, machine.videoId, settings.subtitlesEnabled])

  return (
    <article className="glass-panel overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="section-kicker">{copy.workspace.videoEyebrow}</span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {copy.workspace.ready}
            </span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-100">
              {settings.subtitlesEnabled ? copy.workspace.subtitlesOn : copy.workspace.subtitlesOff}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 text-white">
              <MachineIcon machineId={machine.id} className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{machine.name}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{machine.category}</p>
            </div>
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">{machine.intro}</p>
        </div>

        <a
          href={actionUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
        >
          <PlayIcon className="h-4 w-4" />
          {actionLabel}
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-[28px] bg-ink-950">
        <div className="aspect-video">
          {lessonEmbedUrl ? (
            <iframe
              src={lessonEmbedUrl}
              title={machine.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <div className="mesh-surface flex h-full flex-col justify-between p-6 text-white sm:p-8">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {machine.sourceKind === 'article' ? copy.workspace.source : copy.workspace.ready}
              </div>
              <div className="max-w-2xl">
                <h4 className="font-display text-3xl font-bold">{copy.workspace.videoPlaceholderTitle}</h4>
                <p className="mt-4 text-sm leading-7 text-slate-300">{copy.workspace.videoPlaceholderDescription}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          [copy.workspace.source, machine.lessonTitle || machine.name],
          [copy.workspace.lessonFit, machine.level],
          [copy.workspace.focus, machine.focusLabel],
          [copy.workspace.outcomes, machine.outcomes.join(', ')],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{label}</div>
            <div className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[24px] border border-amber-100 bg-amber-50/80 p-5 dark:border-amber-300/20 dark:bg-amber-400/10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">{copy.workspace.misconception}</div>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{machine.misconception}</p>
        </div>

        <div className="rounded-[24px] border border-cyan-100 bg-cyan-50/70 p-5 dark:border-cyan-300/20 dark:bg-cyan-400/10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">{copy.workspace.focusOn}</div>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-200">
            {machine.studyChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function textToBullets(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function SummaryExplorer({ copy, machine }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [machine.id])

  const activeSection = machine.summarySections[activeIndex] ?? machine.summarySections[0]
  const activeBullets = activeSection?.bullets ?? textToBullets(activeSection?.text || '')

  return (
    <article className="glass-panel p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-kicker">{copy.workspace.summaryEyebrow}</span>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{copy.workspace.summaryTitle}</h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{copy.workspace.summaryDescription}</p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <div className="grid gap-3">
          {machine.summarySections.map((section, index) => {
            const isActive = index === activeIndex
            const previewText = (section.bullets?.[0] || textToBullets(section.text || '')[0] || '')

            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[24px] border p-4 text-left transition ${
                  isActive
                    ? 'border-cyan-300 bg-cyan-50/90 shadow-[0_18px_40px_-32px_rgba(8,145,178,0.35)] dark:border-cyan-300/35 dark:bg-cyan-400/10 dark:shadow-[0_18px_40px_-32px_rgba(34,211,238,0.25)]'
                    : 'border-slate-200/80 bg-white hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-slate-950/65 dark:hover:border-cyan-300/25'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      isActive
                        ? 'bg-ink-950 text-white dark:bg-cyan-100/10 dark:text-white'
                        : 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">{section.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {previewText.slice(0, 110)}
                      {previewText.length > 110 ? '...' : ''}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="rounded-[28px] border border-slate-200/80 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">
              {copy.workspace.activeTopic}
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {activeIndex + 1} of {machine.summarySections.length}
            </span>
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{activeSection.title}</h3>

          <ul className="mt-6 space-y-4">
            {activeBullets.map((bullet, index) => (
              <li key={`${activeSection.title}-${index}`} className="flex gap-4 rounded-[22px] border border-white/80 bg-white px-4 py-4 dark:border-white/10 dark:bg-slate-950/70">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500" />
                <span className="text-sm leading-7 text-slate-700 dark:text-slate-200">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function LearningWorkspace({ children, copy, machine, settings }) {
  return (
    <section id="workspace" className="section-shell py-12 sm:py-16 lg:py-20">
      <SectionHeader
        eyebrow={copy.workspace.eyebrow}
        title={copy.workspace.title.replace('{machineName}', machine.name)}
        description={machine.summary}
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_24rem]">
        <div className="grid gap-6">
          <VideoPanel copy={copy} machine={machine} settings={settings} />
          <SummaryExplorer copy={copy} machine={machine} />
        </div>
        <div className="xl:sticky xl:top-28 xl:self-start">{children}</div>
      </div>
    </section>
  )
}

export default LearningWorkspace
