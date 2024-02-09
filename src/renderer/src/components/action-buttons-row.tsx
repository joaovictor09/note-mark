import { ComponentProps } from 'react'
import { DeleteNoteButton } from './button/delete-note-button'
import { NewNoteButton } from './button/new-note-button'

export function ActionButtonsRow({ ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
