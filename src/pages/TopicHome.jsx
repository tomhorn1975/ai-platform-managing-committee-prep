import { colorMap, flashcards, quizzes, fillBlanks, scenarios } from '../data/content'

const modes = [
  { id: 'flashcard', label: 'Flashcards', icon: '🃏', desc: 'Flip cards to review key concepts', page: 'flashcard' },
  { id: 'quiz', label: 'Multiple Choice Quiz', icon: '✅', desc: 'Test knowledge with 4-option questions', page: 'quiz' },
  { id: 'fillblank', label: 'Fill in the Blank', icon: '✏️', desc: 'Complete key sentences from memory', page: 'fillblank' },
  { id: 'scenario', label: 'Executive Scenarios', icon: '💬', desc: 'Practice answering tough exec questions', page: 'scenario' },
]

function modeCount(topicId, modeId) {
  const map = { flashcard: flashcards, quiz: quizzes, fillblank: fillBlanks, scenario: scenarios }
  return map[modeId]?.[topicId]?.length || 0
}

export default function TopicHome({ go, topic, progress }) {
  if (!topic) { go('home'); return null }
  const c = colorMap[topic.color]
  const p = progress[topic.id] || {}

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <div className={`${c.header} px-4 pt-12 pb-6`}>
        <button onClick={() => go('home')} className="text-white/80 text-sm mb-3 flex items-center gap-1">
          ← Back
        </button>
        <div className="text-4xl mb-2">{topic.icon}</div>
        <h1 className="text-xl font-bold text-white">{topic.title}</h1>
        <p className="text-white/80 text-sm mt-1">{topic.desc}</p>
      </div>

      <div className="px-4 pt-5 space-y-3">
        <button
          onClick={() => go('learn')}
          className={`w-full text-left rounded-2xl border-2 ${c.border} ${c.bg} p-4 active:opacity-70 transition-opacity`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className={`font-bold text-base ${c.text}`}>Read the Learning Guide</div>
                <div className="text-xs text-gray-600 mt-0.5">Plain-English overview with bullet points</div>
                <div className="text-xs text-gray-400 mt-0.5">Start here before studying</div>
              </div>
            </div>
            <span className={`text-sm font-semibold ${c.text}`}>→</span>
          </div>
        </button>

        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide pt-1">Test Your Knowledge</h2>
        {modes.map(m => {
          const score = p[m.id]
          const count = modeCount(topic.id, m.id)
          return (
            <button
              key={m.id}
              onClick={() => go(m.page)}
              className="w-full text-left bg-white rounded-2xl border border-gray-200 p-4 active:opacity-70 transition-opacity shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{m.label}</div>
                    <div className="text-xs text-gray-500">{m.desc}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{count} items</div>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  {score ? (
                    <>
                      <div className={`text-lg font-bold ${score.pct >= 80 ? 'text-green-600' : score.pct >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
                        {score.pct}%
                      </div>
                      <div className="text-xs text-gray-400">{score.score}/{score.total}</div>
                    </>
                  ) : (
                    <div className={`text-xs font-medium ${c.text} ${c.badge} px-2 py-1 rounded-full`}>Start</div>
                  )}
                </div>
              </div>
              {score && (
                <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${score.pct >= 80 ? 'bg-green-500' : score.pct >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${score.pct}%` }}
                  />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
