import { topics, colorMap, flashcards, quizzes, fillBlanks, scenarios } from '../data/content'

const modeCounts = (topicId) => ({
  flashcard: flashcards[topicId]?.length || 0,
  quiz: quizzes[topicId]?.length || 0,
  fillblank: fillBlanks[topicId]?.length || 0,
  scenario: scenarios[topicId]?.length || 0,
})

function overallPct(progress) {
  const all = topics.flatMap(t => {
    const p = progress[t.id] || {}
    return ['flashcard', 'quiz', 'fillblank', 'scenario'].map(m => p[m]?.pct ?? null)
  }).filter(v => v !== null)
  if (!all.length) return 0
  return Math.round(all.reduce((a, b) => a + b, 0) / all.length)
}

function topicPct(topicId, progress) {
  const p = progress[topicId] || {}
  const vals = ['flashcard', 'quiz', 'fillblank', 'scenario'].map(m => p[m]?.pct ?? null).filter(v => v !== null)
  if (!vals.length) return 0
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)
}

export default function Home({ go, progress }) {
  const pct = overallPct(progress)

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className="bg-white border-b border-gray-200 px-4 pt-10 pb-6">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">AI Platform Team</div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">Management Committee<br />Prep</h1>
        <p className="text-sm text-gray-500 mt-1">Master your AI platform narrative</p>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium text-gray-700">Overall Progress</span>
            <span className="font-bold text-gray-900">{pct}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="px-4 pt-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-semibold text-gray-800">Study Topics</h2>
          <button
            onClick={() => go('progress')}
            className="text-sm text-blue-600 font-medium"
          >
            View all scores →
          </button>
        </div>

        <div className="space-y-3">
          {topics.map(t => {
            const c = colorMap[t.color]
            const tp = topicPct(t.id, progress)
            const counts = modeCounts(t.id)
            const modes = Object.values(counts).reduce((a, b) => a + b, 0)
            return (
              <button
                key={t.id}
                onClick={() => go('topic', t)}
                className={`w-full text-left rounded-2xl border ${c.border} ${c.bg} p-4 active:opacity-70 transition-opacity`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl leading-none mt-0.5">{t.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">{t.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{t.desc}</div>
                      <div className="text-xs text-gray-400 mt-1">{modes} study items across 4 modes</div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className={`text-lg font-bold ${tp > 0 ? c.text : 'text-gray-300'}`}>{tp}%</div>
                    <div className="text-xs text-gray-400">score</div>
                  </div>
                </div>
                {tp > 0 && (
                  <div className="mt-3 h-1.5 bg-white/60 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${c.header} rounded-full transition-all duration-500`}
                      style={{ width: `${tp}%` }}
                    />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {[
            { label: 'Flashcards', icon: '🃏', mode: 'flashcard' },
            { label: 'Quiz', icon: '✅', mode: 'quiz' },
            { label: 'Fill Blank', icon: '✏️', mode: 'fillblank' },
            { label: 'Scenarios', icon: '💬', mode: 'scenario' },
          ].map(m => (
            <div key={m.mode} className="bg-white rounded-xl border border-gray-200 p-3 text-center">
              <div className="text-2xl">{m.icon}</div>
              <div className="text-xs text-gray-600 mt-1 font-medium leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
