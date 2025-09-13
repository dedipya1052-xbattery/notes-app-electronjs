import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null

  return (
    <div className={twMerge('flex justify-center items-center py-2', className)} {...props}>
      <div className="glass-effect rounded-full px-4 py-2 border border-slate-600/30">
        <span className="text-slate-300 font-medium text-sm">{selectedNote.title}</span>
      </div>
    </div>
  )
}
