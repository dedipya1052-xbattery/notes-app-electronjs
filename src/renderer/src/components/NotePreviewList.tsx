import { NotePreview } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { isEmpty } from 'lodash'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { LuFileText, LuPlus } from 'react-icons/lu'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (isEmpty(notes)) {
    return (
      <div className="text-center py-12">
        <div className="glass-effect rounded-2xl p-8 border border-slate-600/30">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <LuFileText className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-200 mb-2">No Notes Yet</h3>
          <p className="text-slate-400 text-sm mb-4">Create your first note to get started</p>
          <div className="flex items-center justify-center text-xs text-slate-500">
            <LuPlus className="w-4 h-4 mr-1" />
            <span>Click the + button above</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Recent Notes</h2>
        <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </span>
      </div>
      <ul className={twMerge('space-y-2', className)} {...props}>
        {notes.map((note, index) => (
          <NotePreview
            key={note.title + note.lastEditTime}
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index)}
            {...note}
          />
        ))}
      </ul>
    </div>
  )
}
