export function WindowButtons() {
  const closeWindow = window.context.close
  const minimizeWindow = window.context.minimize
  const maximizeWindow = window.context.maximize

  function handleClose() {
    closeWindow()
  }

  function handleMaximize() {
    maximizeWindow()
  }

  function handleMinimize() {
    minimizeWindow()
  }
  
   return (
    <div className="absolute h-8 bg-transparent p-3 flex gap-2 z-50">
      <div onClick={handleClose} className="h-3 w-3 bg-red-500 hover:bg-red-600 transition-colors rounded-full " />
      <div onClick={handleMinimize} className="h-3 w-3 bg-amber-500 hover:bg-amber-600 transition-colors rounded-full" />
      <div onClick={handleMaximize} className="h-3 w-3 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-full flex items-center justify-center" />
    </div>
  )
}
