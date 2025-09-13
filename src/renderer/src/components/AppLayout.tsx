import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge(
        'w-80 mt-12 h-[calc(100vh-3rem)] overflow-auto glass-effect border-r border-slate-700/50 shadow-2xl',
        'scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800',
        className
      )}
      {...props}
    >
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gradient mb-2">NoteMark</h1>
          <p className="text-slate-400 text-sm">Professional Note Taking</p>
        </div>
        {children}
      </div>
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={twMerge(
        'flex-1 overflow-auto bg-slate-900/50 backdrop-blur-sm',
        'scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800',
        className
      )} 
      {...props}
    >
      <div className="min-h-full">
        {children}
      </div>
    </div>
  )
)

Content.displayName = 'Content'
