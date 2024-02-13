import { deleteNoteAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { useState } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton } from './button/action-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export function DeleteNoteDialog() {
  const [open, setOpen] = useState(false)

  const selectedNoteIndex = useAtomValue(selectedNoteIndexAtom)

  const deleteNote = useSetAtom(deleteNoteAtom)

  async function handleDelete() {
    await deleteNote()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ActionButton disabled={selectedNoteIndex === null}>
          <FaRegTrashCan className="w-4 h-4 text-[#727272] transition-colors duration-100 group-hover:text-[#919191]" />
        </ActionButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. Are you sure you want to permanently
            delete this file from your computer?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <ActionButton className="border-none" onClick={() => setOpen(false)}>
            Cancel
          </ActionButton>
          <ActionButton onClick={handleDelete} type="submit">
            Confirm
          </ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
