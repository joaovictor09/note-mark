import { sidebarOpenAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { useAtomValue, useSetAtom } from 'jotai'
import { ComponentProps, forwardRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export function RooLayout({ className, children, ...props }: ComponentProps<'main'>) {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export function Sidebar({ className, children, ...props }: ComponentProps<'aside'>) {
  const open = useAtomValue(sidebarOpenAtom)
  const setOpen = useSetAtom(sidebarOpenAtom)
  
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
  
  return (
    <aside
      className={cn('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', {
        'hidden': !open
      },className)}
      {...props}
    >
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto bg-background', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
