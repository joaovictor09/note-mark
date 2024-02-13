import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'>

export function ActionButton({
  className,
  children,
  disabled,
  ...props
}: ActionButtonProps) {
  return (
    <button
      disabled={disabled}
      className={cn(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-[#383838] transition-colors duration-100 group',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
