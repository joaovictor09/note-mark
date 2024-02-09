import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, ActionButtonProps } from './action-button'

export function DeleteNoteButton({ ...props }: ActionButtonProps) {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-[#727272] transition-colors duration-100 group-hover:text-[#919191]" />
    </ActionButton>
  )
}