import { useNotesList } from '@/hooks/use-notes-list'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './note-preview'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export function NotePreviewList({ onSelect, className, ...props }: NotePreviewListProps) {
  const {notes, selectedNoteIndex, handleNoteSelect} = useNotesList({onSelect})
  
  if (!notes) return null
  
  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview onClick={() => handleNoteSelect(index)} isActive={selectedNoteIndex === index} key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
