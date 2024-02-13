import { NoteContent, NoteInfo } from './models'

export type GetNotes = Promise<NoteInfo[]>
export type ReadNote = Promise<NoteContent>
export type WriteNote = (
  title: NoteInfo['title'],
  content: NoteContent,
) => Promise<void>
export type CreateNote = (
  title: NoteInfo['title'],
) => Promise<NoteInfo['title'] | false>
export type DeleteNote = (title: NoteInfo['title']) => Promise<boolean>
