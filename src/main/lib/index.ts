import { appDirectoryName, fileEncoding } from '@shared/constants'
import { NoteInfo } from '@shared/models'
import { GetNotes, ReadNote, WriteNote } from '@shared/types'
import { ensureDir, readFile, readdir, stat, writeFile } from 'fs-extra'
import { homedir } from 'os'

export function getRootDir() {
  return `${homedir()}\\${appDirectoryName}`
}

export async function getNotes(): GetNotes {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export async function getNoteInfoFromFilename(filename: string): Promise<NoteInfo> {
  const fileStats = await stat(`${getRootDir()}\\${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export async function readNote(filename: string): ReadNote {
  const rootDir = getRootDir()

  return readFile(`${rootDir}\\${filename}.md`, {
    encoding: fileEncoding
  })
}

export const writeNote: WriteNote = async (fileName, content) => {
  const rootDir = getRootDir()

  console.info(`Writing note ${fileName}.md`)

  return writeFile(`${rootDir}\\${fileName}.md`, content, {
    encoding: fileEncoding
  })
}