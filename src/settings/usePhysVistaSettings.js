import { useEffect, useState } from 'react'
import { createDefaultSettings, normalizeSettings, SETTINGS_STORAGE_KEY } from './defaults'

function getStoredSettings() {
  if (typeof window === 'undefined') {
    return createDefaultSettings()
  }

  const legacyTheme = window.localStorage.getItem('physvista-theme')

  try {
    const rawSettings = window.localStorage.getItem(SETTINGS_STORAGE_KEY)
    const parsedSettings = rawSettings ? JSON.parse(rawSettings) : {}
    const normalizedSettings = normalizeSettings(parsedSettings)

    if (!rawSettings && (legacyTheme === 'light' || legacyTheme === 'dark')) {
      return {
        ...normalizedSettings,
        nightMode: legacyTheme === 'dark',
      }
    }

    return normalizedSettings
  } catch {
    return createDefaultSettings()
  }
}

export function usePhysVistaSettings() {
  const [settings, setSettings] = useState(getStoredSettings)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
    window.localStorage.setItem('physvista-theme', settings.nightMode ? 'dark' : 'light')
  }, [settings])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const root = document.documentElement
    root.classList.toggle('dark', settings.nightMode)
    root.classList.toggle('high-contrast', settings.highContrast)
    root.classList.toggle('focus-mode', settings.focusMode)
    root.style.colorScheme = settings.nightMode ? 'dark' : 'light'
    root.style.setProperty('--phys-font-scale', String(settings.fontScale))
    root.lang = settings.language
    root.dataset.language = settings.language
  }, [settings])

  function updateSettings(partialSettings) {
    setSettings((current) => normalizeSettings({ ...current, ...partialSettings }))
  }

  function resetSettings() {
    setSettings(createDefaultSettings())
  }

  return {
    settings,
    setSettings: updateSettings,
    resetSettings,
  }
}
