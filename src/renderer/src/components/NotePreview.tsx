import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer p-4 rounded-xl transition-all duration-300 ease-in-out mb-3',
        'border border-slate-600/30 hover:border-slate-500/50',
        'bg-slate-800/40 hover:bg-slate-700/60 backdrop-blur-sm',
        'shadow-lg hover:shadow-xl card-hover',
        {
          'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 shadow-blue-500/20': isActive,
          'hover:from-slate-700/60 hover:to-slate-600/60': !isActive
        },
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-slate-100 truncate flex-1 text-base leading-tight">
          {title}
        </h3>
        {isActive && (
          <div className="w-2 h-2 bg-blue-400 rounded-full ml-2 flex-shrink-0 mt-1.5"></div>
        )}
      </div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">{date}</span>
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
          <span className="text-slate-500">Note</span>
        </div>
      </div>
    </div>
  )
}
