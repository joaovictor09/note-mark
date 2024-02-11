import { notesAtom, selectedNoteIndexAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";

interface UseNotesListProps {
  onSelect?: () => void
}

export function useNotesList({onSelect}: UseNotesListProps) {
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