import {
  appDirectoryName,
  fileEncoding,
  welcomeNoteFilename,
} from '@shared/constants'
import { NoteInfo } from '@shared/models'
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  ReadNote,
  WriteNote,
} from '@shared/types'
import { BrowserWindow } from 'electron/main'
import { ensureDir, readFile, readdir, remove, stat, writeFile } from 'fs-extra'
import { isEmpty } from 'lodash'
import { homedir } from 'os'
import welcomeNoteFile from '../../../resources/welcomeNote.md?asset'

export function getRootDir() {
  return `${homedir()}\\${appDirectoryName}`
}

export async function getNotes(): GetNotes {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false,
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  if (isEmpty(notes)) {
    console.info('No notes found, creating a welcome note')

    const content = await readFile(welcomeNoteFile, {
      encoding: fileEncoding,
    })

    // create a welcome note
    await writeFile(`${rootDir}\\${welcomeNoteFilename}`, content, {
      encoding: fileEncoding,
    })

    notes.push(welcomeNoteFilename)
  }

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export async function getNoteInfoFromFilename(
  filename: string,
): Promise<NoteInfo> {
  const fileStats = await stat(`${getRootDir()}\\${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs,
  }
}

export async function readNote(filename: string): ReadNote {
  const rootDir = getRootDir()

  return readFile(`${rootDir}\\${filename}.md`, {
    encoding: fileEncoding,
  })
}

export const writeNote: WriteNote = async (fileName, content) => {
  const rootDir = getRootDir()

  console.info(`Writing note ${fileName}.md`)

  return writeFile(`${rootDir}\\${fileName}.md`, content, {
    encoding: fileEncoding,
  })
}

export const createNote: CreateNote = async (title) => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  console.info(`Creating note: ${title}`)
  await writeFile(`${rootDir}\\${title}.md`, '', {
    encoding: fileEncoding,
  })

  return title
}

export const deleteNote: DeleteNote = async (filename) => {
  const rootDir = getRootDir()

  console.info(`Deleting note: ${filename}`)
  try {
    await remove(`${rootDir}\\${filename}.md`)
    return true
  } catch {
    return false
  }
}

export function maximize() {
  const window = BrowserWindow.getFocusedWindow()
  if (!window) return
  window.isMaximized() ? window.unmaximize() : window.maximize()
  window.isMaximized() ? window.unmaximize() : window.maximize()
}
