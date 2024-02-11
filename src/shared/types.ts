import { NoteContent, NoteInfo } from "./models";

export type GetNotes = Promise<NoteInfo[]>
export type ReadNote = Promise<NoteContent>
export type WriteNote = (title: NoteInfo['title'], content: NoteContent) => Promise<void>