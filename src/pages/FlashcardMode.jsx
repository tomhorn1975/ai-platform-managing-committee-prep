import { useState } from 'react'
import { flashcards, colorMap } from '../data/content'

export default function FlashcardMode({ go, topic, saveScore }) {
  const cards = flashcards[topic?.id] || []
  const c = colorMap[topic?.color || 'blue']
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState([])
  const [done, setDone] = useState(false)

  if (!topic || !cards.length) { go('home'); return null }

  const card = cards[idx]
  const total = cards.length

  const mark = (correct) => {
    const next = [...known, correct]
    setKnown(next)
    if (idx + 1 >= total) {
      const score = next.filter(Boolean).length
      saveScore(topic.id, 'flashcard', score, total)
      setDone(true)
    } else {
      setIdx(idx + 1)
      setFlipped(false)
    }
  }

  if (done) {
    const score = known.filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-gray-900">Session Complete!</h2>
        <p className="text-gray-500 mt-1">{topic.title} · Flashcards</p>
        <div className={`mt-6 text-5xl font-bold ${pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
          {pct}%
        </div>
        <p className="text-gray-500 mt-1">{score} of {total} known</p>
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <button onClick={() => { setIdx(0); setFlipped(false); setKnown([]); setDone(false) }}
            className={`${c.header} text-white font-semibold py-3 rounded-xl`}>
            Study Again
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
          <div className="text-white font-semibold">{topic.icon} {topic.title}</div>
          <div className="text-white/80 text-sm">{idx + 1} / {total}</div>
        </div>
        <div className="mt-2 h-1 bg-white/30 rounded-full">
          <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${((idx) / total) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <button
          onClick={() => setFlipped(!flipped)}
          className="w-full max-w-sm min-h-56 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 text-center active:scale-98 transition-transform"
        >
          {!flipped ? (
            <div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">Question — tap to reveal</div>
              <div className="text-lg font-semibold text-gray-900 leading-snug">{card.q}</div>
            </div>
          ) : (
            <div>
              <div className="text-xs font-semibold text text-gray-400 uppercase tracking-wide mb-4">Answer</div>
              <div className="text-base text-gray-800 leading-relaxed">{card.a}</div>
            </div>
          )}
        </button>

        {flipped && (
          <div className="mt-6 flex gap-3 w-full max-w-sm">
            <button
              onClick={() => mark(false)}
              className="flex-1 bg-red-50 border border-red-200 text-red-700 font-semibold py-4 rounded-2xl text-sm active:opacity-70"
            >
              😅 Still Learning
            </button>
            <button
              onClick={() => mark(true)}
              className="flex-1 bg-green-50 border border-green-200 text-green-700 font-semibold py-4 rounded-2xl text-sm active:opacity-70"
            >
              ✅ Got It
            </button>
          </div>
        )}

        {!flipped && (
          <p className="text-gray-400 text-sm mt-6">Tap the card to flip it</p>
        )}
      </div>
    </div>
  )
}
