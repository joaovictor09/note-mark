import { ComponentProps } from 'react'
import { CreateNoteDialog } from './create-note-dialog'
import { DeleteNoteDialog } from './delete-note-dialog'

export function ActionButtonsRow({ ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <CreateNoteDialog />
      <DeleteNoteDialog />
    </div>
  )
}
