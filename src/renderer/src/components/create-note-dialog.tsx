import { zodResolver } from '@hookform/resolvers/zod'
import { createEmptyNoteAtom, createNoteDialogOpenAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { Controller, useForm } from 'react-hook-form'
import { LuFileSignature } from 'react-icons/lu'
import { z } from 'zod'
import { ActionButton } from './button/action-button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'

const createNoteDialogSchema = z.object({
  title: z.string().min(1),
})

type CreateNoteDialogSchema = z.infer<typeof createNoteDialogSchema>

export function CreateNoteDialog() {
  const open = useAtomValue(createNoteDialogOpenAtom)
  const setOpen = useSetAtom(createNoteDialogOpenAtom)

  const { handleSubmit, control, reset } = useForm<CreateNoteDialogSchema>({
    resolver: zodResolver(createNoteDialogSchema),
  })

  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  async function handleCreateNote(data: CreateNoteDialogSchema) {
    await createEmptyNote(data.title)
    setOpen(false)
  }

  function onDialogClose(open: boolean) {
    reset({
      title: '',
    })
    setOpen(open)
  }

  return (
    <Dialog open={open} onOpenChange={onDialogClose}>
      <DialogTrigger asChild>
        <ActionButton>
          <LuFileSignature className="w-4 h-4 text-[#727272] transition-colors duration-100 group-hover:text-[#919191]" />
        </ActionButton>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(handleCreateNote)}>
          <DialogHeader>
            <DialogTitle>Create a new note</DialogTitle>
          </DialogHeader>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <Input
                className="mt-4 w-full"
                placeholder="Note name"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <DialogFooter className="mt-4">
            <ActionButton
              type="button"
              className="border-none"
              onClick={() => setOpen(false)}
            >
              Cancel
            </ActionButton>
            <ActionButton type="submit">Create</ActionButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
