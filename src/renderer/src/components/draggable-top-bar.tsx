export function DraggableTopBar() {
  return (
    <header className="absolute inset-0 h-8 bg-transparent p-3 flex gap-2">
      <div className="h-3 w-3 bg-red-500 rounded-full" />
      <div className="h-3 w-3 bg-amber-500 rounded-full" />
      <div className="h-3 w-3 bg-emerald-500 rounded-full" />
    </header>
  )
}
