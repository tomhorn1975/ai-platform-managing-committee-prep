import { topics, colorMap } from '../data/content'

const modeLabels = {
  flashcard: { label: 'Flashcards', icon: '🃏' },
  quiz: { label: 'Quiz', icon: '✅' },
  fillblank: { label: 'Fill Blank', icon: '✏️' },
  scenario: { label: 'Scenarios', icon: '💬' },
}

export default function ProgressPage({ go, progress }) {
  const allScores = topics.flatMap(t => {
    const p = progress[t.id] || {}
    return Object.values(p).map(v => v.pct)
  })
  const overall = allScores.length ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0
  const completed = allScores.filter(s => s >= 80).length
  const total = topics.length * 4

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white border-b border-gray-200 px-4 pt-12 pb-5">
        <button onClick={() => go('home')} className="text-blue-600 text-sm mb-3">← Home</button>
        <h1 className="text-2xl font-bold text-gray-900">Your Progress</h1>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-700">{overall}%</div>
            <div className="text-xs text-blue-600 mt-0.5">Overall</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-700">{completed}</div>
            <div className="text-xs text-green-600 mt-0.5">Mastered (≥80%)</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-700">{total - completed}</div>
            <div className="text-xs text-purple-600 mt-0.5">Remaining</div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-4">
        {topics.map(t => {
          const c = colorMap[t.color]
          const p = progress[t.id] || {}
          const modeScores = Object.entries(modeLabels).map(([id, m]) => ({ ...m, id, data: p[id] || null }))
          const topicScores = modeScores.filter(m => m.data).map(m => m.data.pct)
          const topicAvg = topicScores.length ? Math.round(topicScores.reduce((a, b) => a + b, 0) / topicScores.length) : null

          return (
            <div key={t.id} className={`rounded-2xl border ${c.border} ${c.bg} overflow-hidden`}>
              <button
                onClick={() => go('topic', t)}
                className="w-full text-left px-4 py-3 flex items-center justify-between active:opacity-70"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{t.icon}</span>
                  <span className="font-semibold text-gray-900">{t.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {topicAvg !== null ? (
                    <span className={`text-lg font-bold ${topicAvg >= 80 ? 'text-green-600' : topicAvg >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
                      {topicAvg}%
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">Not started</span>
                  )}
                  <span className="text-gray-400">›</span>
                </div>
              </button>

              <div className="px-4 pb-3 grid grid-cols-4 gap-2">
                {modeScores.map(m => (
                  <div key={m.id} className="bg-white/70 rounded-lg p-2 text-center">
                    <div className="text-base">{m.icon}</div>
                    <div className={`text-sm font-bold mt-0.5 ${
                      m.data
                        ? m.data.pct >= 80 ? 'text-green-600' : m.data.pct >= 60 ? 'text-yellow-600' : 'text-red-500'
                        : 'text-gray-300'
                    }`}>
                      {m.data ? `${m.data.pct}%` : '—'}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 px-4">
        <button
          onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) {
              localStorage.removeItem('ai-prep-progress')
              window.location.reload()
            }
          }}
          className="w-full border border-red-200 text-red-500 font-medium py-3 rounded-xl text-sm"
        >
          Reset All Progress
        </button>
      </div>
    </div>
  )
}
