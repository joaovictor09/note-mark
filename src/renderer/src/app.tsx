import '@/assets/index.css'
import { Content, RooLayout, Sidebar } from '@/components'
import { useRef } from 'react'
import { ActionButtonsRow } from './components/action-buttons-row'
import { CommandMenu } from './components/command-menu'
import { DraggableTopBar } from './components/draggable-top-bar'
import { FloatingNoteTitle } from './components/floating-note-title'
import { MarkdownEditor } from './components/markdown-editor'
import { NotePreviewList } from './components/note-preview-list'
import { WindowButtons } from './components/window-buttons'

export function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  function resetScroll() {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <CommandMenu />
      <WindowButtons />
      <DraggableTopBar />
      <RooLayout>
        <Sidebar>
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef}>
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RooLayout>
    </>
  )
}
