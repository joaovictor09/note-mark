import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export function NotePreview({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-point er px-2.5 text-[#888888] py-3 rounded-md transition-colors duration-75 ',
        {
          'bg-[#212121] text-[#F5F5F5]': isActive,
          'hover:bg-[#292929]': !isActive,
        },
        className,
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {date}
      </span>
    </div>
  )
}
