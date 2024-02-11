import { selectedNoteAtom } from "@renderer/store"
import { useAtomValue } from "jotai"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export function FloatingNoteTitle({className, ...props}: ComponentProps<'div'>) {
  const selectedNote = useAtomValue(selectedNoteAtom)  

  if (!selectedNote) return null
  
  return <div className={twMerge('flex justify-center sticky top-0 bg-gradient-to-b from-sidebar-background/100 via-sidebar-background/70 to-sidebar-background/0', className)} {...props}>
    <span className="text-gray-400">{selectedNote.title}</span>
  </div>
}