function Toast({ message }) {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl border border-emerald-200 bg-emerald-50/95 px-4 py-3 text-sm font-semibold text-emerald-900 shadow-[0_24px_70px_-35px_rgba(5,150,105,0.45)] backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-500/15 dark:text-emerald-100">
      {message}
    </div>
  )
}

export default Toast
