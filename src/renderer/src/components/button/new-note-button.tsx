import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './action-button'

export function NewNoteButton({ ...props }: ActionButtonProps) {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  function handleCreation() {
    createEmptyNote()
  }
  
  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-[#727272] transition-colors duration-100 group-hover:text-[#919191]" />
    </ActionButton>
  )
}
