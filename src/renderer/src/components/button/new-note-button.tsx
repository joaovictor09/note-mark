import { LuFileSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './action-button'

export function NewNoteButton({ ...props }: ActionButtonProps) {
  return (
    <ActionButton {...props}>
      <LuFileSignature className="w-4 h-4 text-[#727272] transition-colors duration-100 group-hover:text-[#919191]" />
    </ActionButton>
  )
}
