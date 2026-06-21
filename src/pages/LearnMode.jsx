import { useState } from 'react'
import { learningContent, colorMap } from '../data/content'

export default function LearnMode({ go, topic }) {
  const sections = learningContent[topic?.id] || []
  const c = colorMap[topic?.color || 'blue']
  const [open, setOpen] = useState(0)

  if (!topic || !sections.length) { go('home'); return null }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className={`${c.header} px-4 pt-12 pb-5`}>
        <button onClick={() => go('topic')} className="text-white/80 text-sm mb-2">← Back</button>
        <div className="text-3xl mb-1">{topic.icon}</div>
        <h1 className="text-xl font-bold text-white">{topic.title}</h1>
        <p className="text-white/80 text-sm mt-0.5">Learning Guide</p>
      </div>

      <div className="px-4 pt-4 pb-10 space-y-3">
        <p className="text-xs text-gray-500 px-1">
          Tap any section to expand it. Read through all sections before testing yourself.
        </p>

        {sections.map((section, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all ${isOpen ? `${c.border} bg-white shadow-sm` : 'border-gray-200 bg-white'}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full text-left px-4 py-4 flex items-center justify-between gap-3"
              >
                <span className={`font-semibold text-base leading-snug ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
                  {section.title}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform ${isOpen ? `${c.header} text-white` : 'bg-gray-100 text-gray-500'}`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5">
                  {section.body && (
                    <p className="text-sm text-gray-600 leading-relaxed mb-3 border-t border-gray-100 pt-3">
                      {section.body}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5">
                        <span className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${c.header}`} />
                        <span className="text-sm text-gray-800 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}

        <div className={`mt-4 rounded-2xl ${c.bg} border ${c.border} p-4`}>
          <p className={`text-sm font-semibold ${c.text} mb-1`}>Ready to test yourself?</p>
          <p className="text-xs text-gray-600 mb-3">Use the study modes to check how much you retained.</p>
          <button
            onClick={() => go('topic')}
            className={`w-full ${c.header} text-white font-semibold py-3 rounded-xl text-sm`}
          >
            Go to Study Modes →
          </button>
        </div>
      </div>
    </div>
  )
}
