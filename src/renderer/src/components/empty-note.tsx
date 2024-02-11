import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'

export function EmptyNote() {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  async function handleCreation() {
    await createEmptyNote()
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <span>
        Begin creating a{' '}
        <strong
          onClick={handleCreation}
          className="underline underline-offset-2 cursor-pointer"
        >
          new note
        </strong>
      </span>
    </div>
  )
}
