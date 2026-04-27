export const SETTINGS_STORAGE_KEY = 'physvista-settings'

export const FONT_SCALE_MIN = 0.9
export const FONT_SCALE_MAX = 1.15
export const FONT_SCALE_STEP = 0.05

function getSystemNightMode() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function createDefaultSettings() {
  return {
    language: 'en',
    focusMode: false,
    nightMode: getSystemNightMode(),
    pomodoroEnabled: true,
    pomodoroFocusMinutes: 25,
    pomodoroBreakMinutes: 5,
    fontScale: 1,
    highContrast: false,
    subtitlesEnabled: true,
  }
}

export function normalizeSettings(rawSettings = {}) {
  const defaults = createDefaultSettings()
  const language = ['en', 'hi', 'te'].includes(rawSettings.language) ? rawSettings.language : defaults.language
  const pomodoroFocusMinutes = Math.min(60, Math.max(10, Number(rawSettings.pomodoroFocusMinutes) || defaults.pomodoroFocusMinutes))
  const pomodoroBreakMinutes = Math.min(30, Math.max(5, Number(rawSettings.pomodoroBreakMinutes) || defaults.pomodoroBreakMinutes))
  const fontScaleValue = Number(rawSettings.fontScale)
  const fontScale = Number.isFinite(fontScaleValue)
    ? Math.min(FONT_SCALE_MAX, Math.max(FONT_SCALE_MIN, fontScaleValue))
    : defaults.fontScale

  return {
    language,
    focusMode: Boolean(rawSettings.focusMode),
    nightMode: rawSettings.nightMode ?? defaults.nightMode,
    pomodoroEnabled: rawSettings.pomodoroEnabled ?? defaults.pomodoroEnabled,
    pomodoroFocusMinutes,
    pomodoroBreakMinutes,
    fontScale: Number(fontScale.toFixed(2)),
    highContrast: Boolean(rawSettings.highContrast),
    subtitlesEnabled: rawSettings.subtitlesEnabled ?? defaults.subtitlesEnabled,
  }
}
