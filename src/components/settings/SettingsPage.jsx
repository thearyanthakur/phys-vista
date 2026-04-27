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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white/10 dark:text-cyan-200">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-normal text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-4">{children}</div>
    </article>
  )
}

function SettingsPage({ isOpen, onClose, copy, settings, onReset, onSettingChange }) {
  const fontScalePercent = useMemo(() => `${Math.round(settings.fontScale * 100)}%`, [settings.fontScale])

  if (!isOpen) return null;

  return (
    <SettingsModal isOpen={isOpen} title={copy.settings.title} onClose={onClose}>
      <div className="max-h-[80vh] overflow-y-auto px-1 pr-3">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={copy.settings.eyebrow}
            title={copy.settings.title}
            description={copy.settings.description}
          />

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
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
            <div className="mt-4 space-y-4">
              <div className="rounded-[24px] border-2 border-slate-900 bg-white p-5 dark:border-white dark:bg-slate-800">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{copy.about.visionTitle}</div>
                <p className="mt-2 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-300">{copy.about.visionText}</p>
              </div>

              <div className="rounded-[24px] border-2 border-slate-900 bg-white p-5 dark:border-white dark:bg-slate-800">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{copy.about.missionTitle}</div>
                <ul className="mt-2 space-y-2">
                  {copy.about.missionPoints.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900 dark:bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </SettingsModal>
  )
}

export default SettingsPage
