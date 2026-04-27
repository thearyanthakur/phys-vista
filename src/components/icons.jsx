export function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m8 6 10 6-10 6V6Z" />
    </svg>
  )
}

export function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    </svg>
  )
}

export function MessageIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M8 13h5m6 6-3.5-2H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-2 2.8V19Z" />
    </svg>
  )
}

export function MachineIcon({ machineId, className }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    'aria-hidden': true,
  }

  switch (machineId) {
    case 'car':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14V9.5l2-3h10l2 3V14m-14 0h14m-12 0v2m10-2v2M7.5 11h.01M16.5 11h.01" />
          <circle cx="8" cy="16.5" r="1.5" />
          <circle cx="16" cy="16.5" r="1.5" />
        </svg>
      )
    case 'aeroplane':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3 13 18-4-6 5 1 5-3-3-4 2 1-4-7-1Z" />
        </svg>
      )
    case 'pulley':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v8m0-8 4 4m-4-4-4 4" />
        </svg>
      )
    case 'cycle':
      return (
        <svg {...common}>
          <circle cx="7" cy="16" r="4" />
          <circle cx="17" cy="16" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16 11 9h3m-3 0 2 4m1-4h3l-2 7m-4-3h4" />
        </svg>
      )
    case 'crane':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h6M8 20V6m0 0h9l-4 3m4-3-4 3m0 0v6m0 0-2 3" />
        </svg>
      )
    case 'ship':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 15h16l-2 4H6l-2-4Zm3-4h10v4H7v-4Zm2-4h6v4H9V7Z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      )
  }
}

export function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.5 15.5 0 0 1 0 18M12 3a15.5 15.5 0 0 0 0 18" />
    </svg>
  )
}

export function FocusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m13-6h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4m17 6h-4a2 2 0 0 1-2-2v-4" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  )
}

export function TimerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 2h6M12 8v5l3 2" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}

export function AccessibilityIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 9h14M12 7v14m-4-8 4 3 4-3m-7 8 3-5m6 5-3-5" />
    </svg>
  )
}

export function InfoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v5m0-8h.01" />
    </svg>
  )
}

export function RefreshIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 11a8 8 0 1 0 2 5.3M20 4v7h-7" />
    </svg>
  )
}
