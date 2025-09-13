import { DeleteNoteButton, NewNoteButton } from '@/components'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const ActionButtonsRow = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('space-y-3 mb-6', className)} {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
