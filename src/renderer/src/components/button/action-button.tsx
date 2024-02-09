import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export function ActionButton({ className, children, ...props }: ActionButtonProps) {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-[#383838] transition-colors duration-100 group',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
