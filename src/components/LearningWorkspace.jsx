import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import MachineDetails from './MachineDetails'
import { MachineIcon, PlayIcon } from './icons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

function VideoPanel({ copy, machine, settings }) {
  const lessonSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(machine.searchQuery)}`
  const actionUrl = machine.sourceUrl || lessonSearchUrl
  const actionLabel = machine.sourceLabel || 'Find on YouTube'
  const languageCode = settings.language === 'hi' ? 'hi' : settings.language === 'te' ? 'te' : 'en'
  const lessonEmbedUrl = useMemo(() => {
    if (!machine.videoId) return null
    const params = new URLSearchParams({ rel: '0', modestbranding: '1' })
    if (settings.subtitlesEnabled) {
      params.set('cc_load_policy', '1')
      params.set('cc_lang_pref', languageCode)
    }
    return `https://www.youtube-nocookie.com/embed/${machine.videoId}?${params.toString()}`
  }, [languageCode, machine.videoId, settings.subtitlesEnabled])

  return (
    <motion.article 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }}
      className="border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-dbtm-black sm:p-6 md:p-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-dbtm-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest text-dbtm-black">
              {copy.workspace.videoEyebrow}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-dbtm-black dark:bg-slate-800 dark:text-white">
              {copy.workspace.ready}
            </span>
            <span className="rounded-full bg-dbtm-black px-3 py-1 text-xs font-bold uppercase tracking-widest text-white dark:bg-white dark:text-dbtm-black">
              {settings.subtitlesEnabled ? copy.workspace.subtitlesOn : copy.workspace.subtitlesOff}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dbtm-black text-white dark:bg-white dark:text-dbtm-black">
              <MachineIcon machineId={machine.id} className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-normal text-dbtm-black dark:text-white">{machine.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{machine.category}</p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">{machine.intro}</p>
        </div>


      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 overflow-hidden bg-dbtm-black dark:border dark:border-slate-800">
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
            <div className="flex h-full flex-col justify-between bg-slate-900 p-6 text-white sm:p-8">
              <div className="inline-flex items-start">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {machine.sourceKind === 'article' ? copy.workspace.source : copy.workspace.ready}
                </span>
              </div>
              <div className="max-w-2xl">
                <h4 className="font-display text-4xl font-bold uppercase text-white">{copy.workspace.videoPlaceholderTitle}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{copy.workspace.videoPlaceholderDescription}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          [copy.workspace.source, machine.lessonTitle || machine.name],
          [copy.workspace.lessonFit, machine.level],
          [copy.workspace.focus, machine.focusLabel],
          [copy.workspace.outcomes, machine.outcomes.join(', ')],
        ].map(([label, value]) => (
          <motion.div variants={itemVariants} key={label} className="border border-slate-200 bg-slate-50 p-4 sm:p-5 dark:border-slate-800 dark:bg-dbtm-black">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</div>
            <div className="mt-2 text-sm font-semibold leading-relaxed text-dbtm-black dark:text-white">{value}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={itemVariants} className="border border-slate-200 bg-dbtm-yellow p-4 sm:p-6 dark:border-dbtm-yellow dark:bg-dbtm-black">
          <div className="text-xs font-bold uppercase tracking-widest text-dbtm-black dark:text-dbtm-yellow">{copy.workspace.misconception}</div>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-dbtm-black dark:text-white">{machine.misconception}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="border border-slate-200 bg-slate-50 p-4 sm:p-6 dark:border-slate-800 dark:bg-dbtm-black">
          <div className="text-xs font-bold uppercase tracking-widest text-dbtm-black dark:text-white">{copy.workspace.focusOn}</div>
          <ul className="mt-4 space-y-3 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
            {machine.studyChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dbtm-yellow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}

function textToBullets(text) {
  return text.split(/(?<=[.!?])\s+/).map((item) => item.trim()).filter(Boolean)
}

function SummaryExplorer({ copy, machine }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [machine.id])

  const activeSection = machine.summarySections[activeIndex] ?? machine.summarySections[0]
  const activeBullets = activeSection?.bullets ?? textToBullets(activeSection?.text || '')

  return (
    <motion.article 
      variants={containerVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }}
      className="mt-6 border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-dbtm-black sm:p-6 md:p-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="rounded-full bg-dbtm-yellow px-3 py-1 text-xs font-bold uppercase tracking-widest text-dbtm-black">
            {copy.workspace.summaryEyebrow}
          </span>
          <h3 className="mt-6 font-display text-3xl sm:text-4xl font-bold uppercase tracking-normal text-dbtm-black dark:text-white">{copy.workspace.summaryTitle}</h3>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{copy.workspace.summaryDescription}</p>
      </motion.div>

      <motion.div variants={containerVariants} className="mt-10 grid gap-8 xl:grid-cols-[22rem_minmax(0,1fr)]">
        <div className="flex flex-col gap-2">
          {machine.summarySections.map((section, index) => {
            const isActive = index === activeIndex
            const previewText = (section.bullets?.[0] || textToBullets(section.text || '')[0] || '')

            return (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex text-left transition-colors ${
                  isActive
                    ? 'border-l-4 border-dbtm-yellow bg-slate-50 dark:bg-slate-900/50'
                    : 'border-l-4 border-transparent bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900/30'
                }`}
              >
                <div className="p-4 sm:p-5">
                  <h4 className={`font-display text-lg sm:text-xl font-bold uppercase tracking-widest ${isActive ? 'text-dbtm-black dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                    {index + 1}. {section.title}
                  </h4>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    {previewText.slice(0, 90)}
                    {previewText.length > 90 ? '...' : ''}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <motion.div 
          layout
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50 p-6 dark:bg-slate-900/50 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-dbtm-black px-3 py-1 text-xs font-bold uppercase tracking-widest text-white dark:bg-white dark:text-dbtm-black">
              {copy.workspace.activeTopic}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {activeIndex + 1} / {machine.summarySections.length}
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-normal text-dbtm-black dark:text-white">{activeSection.title}</h3>

          <ul className="mt-8 space-y-4">
            {activeBullets.map((bullet, index) => (
              <li key={`${activeSection.title}-${index}`} className="flex gap-4 bg-white p-4 dark:bg-dbtm-black">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dbtm-yellow" />
                <span className="text-sm font-semibold leading-relaxed text-dbtm-black dark:text-slate-300">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.article>
  )
}

function LearningWorkspace({ children, copy, machine, settings }) {
  return (
    <section id="workspace" className="section-shell py-16 sm:py-24 lg:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        key={machine.id}
      >
        <motion.div variants={itemVariants}>
          <SectionHeader
            eyebrow={copy.workspace.eyebrow}
            title={copy.workspace.title.replace('{machineName}', machine.name)}
            description={machine.summary}
          />
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_24rem]">
          <motion.div variants={itemVariants} className="grid gap-6">
            <VideoPanel copy={copy} machine={machine} settings={settings} />
            <SummaryExplorer copy={copy} machine={machine} />
          </motion.div>
          <motion.div variants={itemVariants} className="xl:sticky xl:top-28 xl:self-start">
            <MachineDetails copy={copy} machine={machine} />
            {children}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default LearningWorkspace
