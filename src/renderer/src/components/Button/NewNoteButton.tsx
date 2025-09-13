import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuPlus } from 'react-icons/lu'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton 
      onClick={handleCreation} 
      variant="primary"
      size="md"
      className="w-full justify-center space-x-2"
      {...props}
    >
      <LuPlus className="w-4 h-4" />
      <span>New Note</span>
    </ActionButton>
  )
}
