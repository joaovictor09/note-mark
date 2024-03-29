import { NoteInfo } from '@shared/models'
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  ReadNote,
  WriteNote,
} from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: () => GetNotes
      readNote: (title: NoteInfo['title']) => ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
      maximize: () => void
      minimize: () => void
      close: () => void
    }
  }
}
