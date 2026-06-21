import { useState } from 'react'
import { scenarios, colorMap } from '../data/content'

export default function ScenarioMode({ go, topic, saveScore }) {
  const items = scenarios[topic?.id] || []
  const c = colorMap[topic?.color || 'blue']
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState('read') // read | answer | reveal
  const [selfScore, setSelfScore] = useState([])
  const [done, setDone] = useState(false)

  if (!topic || !items.length) { go('home'); return null }

  const s = items[idx]
  const total = items.length

  const markAndNext = (correct) => {
    const newScores = [...selfScore, correct]
    setSelfScore(newScores)
    if (idx + 1 >= total) {
      const score = newScores.filter(Boolean).length
      saveScore(topic.id, 'scenario', score, total)
      setDone(true)
    } else {
      setIdx(idx + 1)
      setPhase('read')
    }
  }

  if (done) {
    const score = selfScore.filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-gray-900">Scenarios Done!</h2>
        <p className="text-gray-500 mt-1">{topic.title} · Executive Q&A</p>
        <div className={`mt-6 text-5xl font-bold ${pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
          {pct}%
        </div>
        <p className="text-gray-500 mt-1">Self-rated {score} of {total}</p>
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <button onClick={() => { setIdx(0); setPhase('read'); setSelfScore([]); setDone(false) }}
            className={`${c.header} text-white font-semibold py-3 rounded-xl`}>
            Practice Again
          </button>
          <button onClick={() => go('topic')} className="bg-gray-200 text-gray-800 font-semibold py-3 rounded-xl">
            Back to Topic
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className={`${c.header} px-4 pt-12 pb-4`}>
        <button onClick={() => go('topic')} className="text-white/80 text-sm mb-2">← Back</button>
        <div className="flex justify-between items-center">
          <div className="text-white font-semibold">{topic.icon} Executive Scenarios</div>
          <div className="text-white/80 text-sm">{idx + 1} / {total}</div>
        </div>
        <div className="mt-2 h-1 bg-white/30 rounded-full">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 px-4 py-5 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-4">
          <div className={`inline-block text-xs font-bold uppercase tracking-wide px-2 py-1 rounded-full mb-3 ${c.badge}`}>
            {s.role} asks:
          </div>
          <p className="text-base font-semibold text-gray-900 leading-snug italic">"{s.question}"</p>
        </div>

        {phase === 'read' && (
          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-yellow-800 font-medium">Think through your response before revealing the model answer. What are the key points you would make?</p>
            </div>
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-600 mb-2">Key points to cover:</div>
              <div className="space-y-2">
                {s.keyPoints.map((kp, i) => (
                  <div key={i} className="flex gap-2 bg-white border border-gray-100 rounded-xl p-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full ${c.light} ${c.text} text-xs font-bold flex items-center justify-center`}>{i + 1}</span>
                    <span className="text-sm text-gray-700">{kp}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setPhase('reveal')}
              className={`w-full ${c.header} text-white font-semibold py-4 rounded-xl`}
            >
              Reveal Model Answer
            </button>
          </div>
        )}

        {phase === 'reveal' && (
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Model Answer</div>
              <p className="text-sm text-gray-800 leading-relaxed">{s.modelAnswer}</p>
            </div>
            <div className="mb-3 text-sm font-semibold text-gray-600 text-center">How did your answer compare?</div>
            <div className="flex gap-3">
              <button
                onClick={() => markAndNext(false)}
                className="flex-1 bg-red-50 border border-red-200 text-red-700 font-semibold py-4 rounded-2xl text-sm"
              >
                😅 Needs Work
              </button>
              <button
                onClick={() => markAndNext(true)}
                className="flex-1 bg-green-50 border border-green-200 text-green-700 font-semibold py-4 rounded-2xl text-sm"
              >
                ✅ Nailed It
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
