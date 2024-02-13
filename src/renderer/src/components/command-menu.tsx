import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  createNoteDialogOpenAtom,
  deleteNoteDialogOpenAtom,
  selectedNoteAtom,
  sidebarOpenAtom,
} from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  const selectedNote = useAtomValue(selectedNoteAtom)
  const sidebarOpen = useAtomValue(sidebarOpenAtom)
  const setSidebarOpen = useSetAtom(sidebarOpenAtom)
  const setDeleteNoteDialogOpen = useSetAtom(deleteNoteDialogOpenAtom)
  const setCreateNoteDialogOpen = useSetAtom(createNoteDialogOpenAtom)

  async function handleCreation() {
    setCreateNoteDialogOpen(true)
    setOpen(false)
  }

  async function handleDelete() {
    setDeleteNoteDialogOpen(true)
    setOpen(false)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={handleCreation}>Create new note</CommandItem>
          <CommandItem disabled={!selectedNote} onSelect={handleDelete}>
            Delete note
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setSidebarOpen(!sidebarOpen)
              setOpen(false)
            }}
          >
            {sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
