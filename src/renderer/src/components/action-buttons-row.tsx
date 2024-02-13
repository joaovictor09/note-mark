import { ComponentProps } from 'react'
import { NewNoteButton } from './button/new-note-button'
import { DeleteNoteDialog } from './delete-note-dialog'

export function ActionButtonsRow({ ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteDialog />
    </div>
  )
}
