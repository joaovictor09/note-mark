import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return (
    <input
      className={twMerge(
        'px-2 py-1 rounded-md border border-zinc-400/50 bg-transparent outline-none focus-within:ring-2 focus-within:ring-zinc-50 transition-colors duration-100 group',
        className,
      )}
      {...props}
    />
  )
}
