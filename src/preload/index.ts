import { NoteInfo } from '@shared/models'
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  ReadNote,
  WriteNote,
} from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow!')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<() => GetNotes>) =>
      ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<(title: NoteInfo['title']) => ReadNote>) =>
      ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) =>
      ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<() => CreateNote>) =>
      ipcRenderer.invoke('createNote', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) =>
      ipcRenderer.invoke('deleteNote', ...args),
    close: () => ipcRenderer.send('close-window'),
    minimize: () => ipcRenderer.send('minimize-window'),
    maximize: () => ipcRenderer.send('maximize-restore-window'),
  })
} catch (error) {
  console.log(error)
}
