import { useState } from 'react'
import { fillBlanks, colorMap } from '../data/content'

export default function FillBlankMode({ go, topic, saveScore }) {
  const questions = fillBlanks[topic?.id] || []
  const c = colorMap[topic?.color || 'blue']
  const [idx, setIdx] = useState(0)
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [scores, setScores] = useState([])
  const [done, setDone] = useState(false)

  if (!topic || !questions.length) { go('home'); return null }

  const q = questions[idx]
  const total = questions.length

  const normalize = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  const isCorrect = submitted && normalize(input) === normalize(q.answer)

  const submit = () => {
    if (!input.trim()) return
    setSubmitted(true)
  }

  const next = () => {
    const newScores = [...scores, isCorrect]
    setScores(newScores)
    if (idx + 1 >= total) {
      const score = newScores.filter(Boolean).length
      saveScore(topic.id, 'fillblank', score, total)
      setDone(true)
    } else {
      setIdx(idx + 1)
      setInput('')
      setSubmitted(false)
    }
  }

  const parts = q.sentence.split('_____')

  if (done) {
    const score = scores.filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-gray-900">Complete!</h2>
        <p className="text-gray-500 mt-1">{topic.title} · Fill in the Blank</p>
        <div className={`mt-6 text-5xl font-bold ${pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
          {pct}%
        </div>
        <p className="text-gray-500 mt-1">{score} of {total} correct</p>
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <button onClick={() => { setIdx(0); setInput(''); setSubmitted(false); setScores([]); setDone(false) }}
            className={`${c.header} text-white font-semibold py-3 rounded-xl`}>
            Try Again
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
          <div className="text-white font-semibold">{topic.icon} Fill in the Blank</div>
          <div className="text-white/80 text-sm">{idx + 1} / {total}</div>
        </div>
        <div className="mt-2 h-1 bg-white/30 rounded-full">
          <div className="h-full bg-white rounded-full transition-all" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 px-4 py-6">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Complete the sentence</div>
          <p className="text-base text-gray-900 leading-relaxed">
            {parts[0]}
            <span className={`inline-block min-w-[80px] border-b-2 mx-1 px-2 font-semibold ${
              submitted
                ? isCorrect
                  ? 'border-green-500 text-green-700 bg-green-50 rounded'
                  : 'border-red-500 text-red-700 bg-red-50 rounded'
                : `${c.border.replace('border-', 'border-b-')} text-gray-400`
            }`}>
              {submitted ? (isCorrect ? input : input) : (input || '?')}
            </span>
            {parts[1]}
          </p>

          {submitted && !isCorrect && (
            <div className="mt-3 text-sm">
              <span className="text-gray-500">Correct answer: </span>
              <span className="font-bold text-green-700">{q.answer}</span>
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-1">💡 Hint: {q.hint}</div>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !submitted) submit() }}
            disabled={submitted}
            placeholder="Type your answer..."
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-blue-400 disabled:bg-gray-50"
          />
        </div>

        {!submitted ? (
          <button
            onClick={submit}
            disabled={!input.trim()}
            className={`w-full ${c.header} text-white font-semibold py-4 rounded-xl disabled:opacity-40`}
          >
            Check Answer
          </button>
        ) : (
          <div>
            <div className={`mb-3 rounded-xl p-4 text-center font-semibold ${isCorrect ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {isCorrect ? '✅ Correct!' : '❌ Not quite — see the correct answer above'}
            </div>
            <button
              onClick={next}
              className={`w-full ${c.header} text-white font-semibold py-4 rounded-xl`}
            >
              {idx + 1 >= total ? 'See Results' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
