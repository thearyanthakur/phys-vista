import { useMemo, useState } from 'react'
import { FONT_SCALE_MAX, FONT_SCALE_MIN, FONT_SCALE_STEP } from '../../settings/defaults'
import { languageOptions } from '../../settings/i18n'
import SectionHeader from '../SectionHeader'
import {
  AccessibilityIcon,
  GlobeIcon,
  InfoIcon,
  MoonIcon,
  RefreshIcon,
  TimerIcon,
} from '../icons'
import SettingsDropdown from './SettingsDropdown'
import SettingsModal from './SettingsModal'
import SettingsSlider from './SettingsSlider'
import SettingsToggle from './SettingsToggle'

function SectionCard({ children, description, icon: Icon, title }) {
  return (
    <article className="glass-panel h-full p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-950 text-white dark:bg-white/10 dark:text-cyan-200">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">{children}</div>
    </article>
  )
}

function SettingsPage({ copy, settings, onReset, onSettingChange }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const fontScalePercent = useMemo(() => `${Math.round(settings.fontScale * 100)}%`, [settings.fontScale])

  return (
    <>
      <section id="settings" className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={copy.settings.eyebrow}
            title={copy.settings.title}
            description={copy.settings.description}
          />

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
          >
            <RefreshIcon className="h-4 w-4" />
            {copy.settings.reset}
          </button>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <SectionCard
            icon={GlobeIcon}
            title={copy.settings.sections.language.title}
            description={copy.settings.sections.language.description}
          >
            <SettingsDropdown
              id="physvista-language"
              label={copy.settings.sections.language.label}
              options={languageOptions}
              value={settings.language}
              onChange={(value) => onSettingChange('language', value)}
            />
          </SectionCard>

          <SectionCard
            icon={AccessibilityIcon}
            title={copy.settings.sections.accessibility.title}
            description={copy.settings.sections.accessibility.description}
          >
            <SettingsSlider
              id="physvista-font-size"
              label={copy.settings.sections.accessibility.fontSizeTitle}
              description={copy.settings.sections.accessibility.fontSizeDescription}
              min={FONT_SCALE_MIN}
              max={FONT_SCALE_MAX}
              step={FONT_SCALE_STEP}
              value={settings.fontScale}
              valueLabel={fontScalePercent}
              minLabel={copy.settings.sections.accessibility.small}
              maxLabel={copy.settings.sections.accessibility.large}
              onChange={(value) => onSettingChange('fontScale', value)}
            />
            <SettingsToggle
              checked={settings.highContrast}
              label={copy.settings.sections.accessibility.contrastTitle}
              description={copy.settings.sections.accessibility.contrastDescription}
              onChange={(value) => onSettingChange('highContrast', value)}
            />
            <SettingsToggle
              checked={settings.subtitlesEnabled}
              label={copy.settings.sections.accessibility.subtitlesTitle}
              description={copy.settings.sections.accessibility.subtitlesDescription}
              onChange={(value) => onSettingChange('subtitlesEnabled', value)}
            />
          </SectionCard>

          <SectionCard
            icon={InfoIcon}
            title={copy.settings.sections.about.title}
            description={copy.settings.sections.about.description}
          >
            <button
              type="button"
              onClick={() => setIsAboutOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink-900"
            >
              {copy.settings.aboutTrigger}
            </button>
            <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <MoonIcon className="h-5 w-5 text-skyline-500" />
                <TimerIcon className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-950 dark:text-white">{copy.settings.preview.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy.settings.preview.body}</p>
            </div>
          </SectionCard>
        </div>
      </section>

      <SettingsModal isOpen={isAboutOpen} title={copy.about.title} onClose={() => setIsAboutOpen(false)}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              {copy.settings.eyebrow}
            </div>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              {copy.about.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsAboutOpen(false)}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
          >
            {copy.about.close}
          </button>
        </div>

        <div className="mt-6 grid gap-5">
          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold text-slate-950 dark:text-white">{copy.about.visionTitle}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy.about.visionText}</p>
          </div>

          <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-semibold text-slate-950 dark:text-white">{copy.about.missionTitle}</div>
            <ul className="mt-3 space-y-3">
              {copy.about.missionPoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-skyline-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SettingsModal>
    </>
  )
}

export default SettingsPage
