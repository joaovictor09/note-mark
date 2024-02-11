import { notesAtom, selectedNoteIndexAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { useMarkdownEditor } from "./use-markdown-editor";

interface UseNotesListProps {
  onSelect?: () => void
}

export function useNotesList({onSelect}: UseNotesListProps) {
  const {focus} = useMarkdownEditor()
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSeletecNoteIndex] = useAtom(selectedNoteIndexAtom)

  function handleNoteSelect(index: number) {
    setSeletecNoteIndex(index)
  } 

  if (onSelect) {
    onSelect()
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}