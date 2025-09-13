import { LuMinus, LuSquare, LuX } from 'react-icons/lu'

export const DraggableTopBar = () => {
  return (
    <header className="absolute inset-0 h-12 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-md border-b border-slate-700/50 flex items-center justify-between px-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-700/50 transition-colors">
          <LuMinus className="w-4 h-4 text-slate-400" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-700/50 transition-colors">
          <LuSquare className="w-4 h-4 text-slate-400" />
        </button>
        <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-700/50 transition-colors">
          <LuX className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </header>
  )
}
