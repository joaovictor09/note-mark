import '@/assets/index.css'
import { Content, RooLayout, Sidebar } from '@/components'
import { ActionButtonsRow } from './components/action-buttons-row'
import { DraggableTopBar } from './components/draggable-top-bar'
import { FloatingNoteTitle } from './components/floating-note-title'
import { MarkdownEditor } from './components/markdown-editor'
import { NotePreviewList } from './components/note-preview-list'

export function App() {
  return (
    <>
      <DraggableTopBar />
      <RooLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="">
          <FloatingNoteTitle  className='pt-2'/>
          <MarkdownEditor />
        </Content>
      </RooLayout>
    </>
  )
}
