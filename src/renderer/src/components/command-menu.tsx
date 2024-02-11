import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import { createEmptyNoteAtom, deleteNoteAtom, selectedNoteAtom } from "@renderer/store"
import { useAtomValue, useSetAtom } from "jotai"
import { useEffect, useState } from "react"


export function CommandMenu() {
  const [open, setOpen] = useState(false)

  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  const selectedNote = useAtomValue(selectedNoteAtom)

  async function handleCreation() {
    await createEmptyNote()
    setOpen(false)
  }

  const deleteNote = useSetAtom(deleteNoteAtom)

  async function handleDelete() {
    await deleteNote()
    setOpen(false)
  }
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={handleCreation}>
            Create new note
          </CommandItem>
          <CommandItem disabled={!selectedNote} onSelect={handleDelete}>Delete note</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
