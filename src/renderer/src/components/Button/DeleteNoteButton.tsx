import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { LuTrash2 } from 'react-icons/lu'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = async () => {
    await deleteNote()
  }

  return (
    <ActionButton 
      onClick={handleDelete} 
      variant="danger"
      size="md"
      className="w-full justify-center space-x-2"
      {...props}
    >
      <LuTrash2 className="w-4 h-4" />
      <span>Delete Note</span>
    </ActionButton>
  )
}
