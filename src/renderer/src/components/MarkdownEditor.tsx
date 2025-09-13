import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'

export const MarkdownEditor = () => {
  const { editorRef, selectedNote, handleAutoSaving, handleBlur } = useMarkdownEditor()

  if (!selectedNote) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Select a Note</h3>
          <p className="text-slate-400">Choose a note from the sidebar to start editing</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full bg-slate-900/30 backdrop-blur-sm">
      <div className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 px-8 py-4">
        <h2 className="text-2xl font-bold text-slate-100">{selectedNote.title}</h2>
        <p className="text-sm text-slate-400 mt-1">Last edited: {new Date(selectedNote.lastEditTime).toLocaleString()}</p>
      </div>
      <div className="h-[calc(100%-80px)] overflow-auto">
        <MDXEditor
          ref={editorRef}
          key={selectedNote.title}
          markdown={selectedNote.content}
          onChange={handleAutoSaving}
          onBlur={handleBlur}
          plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
          contentEditableClassName="outline-none min-h-full max-w-none text-lg px-8 py-8 caret-blue-400 prose prose-invert prose-slate prose-p:my-4 prose-p:leading-relaxed prose-headings:my-6 prose-headings:text-slate-100 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-blockquote:my-6 prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-800/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-code:px-2 prose-code:py-1 prose-code:bg-slate-800 prose-code:text-blue-300 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg prose-pre:p-4"
        />
      </div>
    </div>
  )
}
