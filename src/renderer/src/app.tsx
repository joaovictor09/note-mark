import '@/assets/index.css'
import { Content, RooLayout, Sidebar } from '@/components'
import { ActionButtonsRow } from './components/action-buttons-row'
import { DraggableTopBar } from './components/draggable-top-bar'

export function App() {
  return (
    <>
      <DraggableTopBar />
      <RooLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="">Content</Content>
      </RooLayout>
    </>
  )
}
