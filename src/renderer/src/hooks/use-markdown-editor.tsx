import { selectedNoteAtom } from "@renderer/store";
import { useAtomValue } from "jotai";

export function useMarkdownEditor() {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return {
    selectedNote
  }
}