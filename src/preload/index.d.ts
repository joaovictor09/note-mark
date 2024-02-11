import { NoteInfo } from "@shared/models"
import { GetNotes, ReadNote } from "@shared/types"

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: () => GetNotes
      readNote: (title: NoteInfo['title']) =>  ReadNote
    }
  }
}
