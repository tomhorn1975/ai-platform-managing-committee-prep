import { useState } from 'react'
import { quizzes, colorMap } from '../data/content'

export default function QuizMode({ go, topic, saveScore }) {
  const questions = quizzes[topic?.id] || []
  const c = colorMap[topic?.color || 'blue']
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [scores, setScores] = useState([])
  const [done, setDone] = useState(false)

  if (!topic || !questions.length) { go('home'); return null }

  const q = questions[idx]
  const total = questions.length
  const answered = selected !== null

  const choose = (i) => {
    if (answered) return
    setSelected(i)
  }

  const next = () => {
    const correct = selected === q.correct
    const newScores = [...scores, correct]
    setScores(newScores)
    if (idx + 1 >= total) {
      const score = newScores.filter(Boolean).length
      saveScore(topic.id, 'quiz', score, total)
      setDone(true)
    } else {
      setIdx(idx + 1)
      setSelected(null)
    }
  }

  if (done) {
    const score = scores.filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-gray-900">Quiz Complete!</h2>
        <p className="text-gray-500 mt-1">{topic.title} · Multiple Choice</p>
        <div className={`mt-6 text-5xl font-bold ${pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-yellow-600' : 'text-red-500'}`}>
          {pct}%
        </div>
        <p className="text-gray-500 mt-1">{score} of {total} correct</p>
        <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
          <button onClick={() => { setIdx(0); setSelected(null); setScores([]); setDone(false) }}
            className={`${c.header} text-white font-semibold py-3 rounded-xl`}>
            Retake Quiz
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
          <div className="text-white font-semibold">{topic.icon} Quiz</div>
          <div className="text-white/80 text-sm">{idx + 1} / {total}</div>
        </div>
        <div className="mt-2 h-1 bg-white/30 rounded-full">
          <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${(idx / total) * 100}%` }} />
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Question {idx + 1}</div>
          <p className="text-base font-semibold text-gray-900 leading-snug">{q.q}</p>
        </div>

        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let cls = 'w-full text-left bg-white border rounded-xl p-4 text-sm font-medium transition-all '
            if (!answered) {
              cls += 'border-gray-200 text-gray-800 active:opacity-70'
            } else if (i === q.correct) {
              cls += 'border-green-400 bg-green-50 text-green-800'
            } else if (i === selected && i !== q.correct) {
              cls += 'border-red-400 bg-red-50 text-red-800'
            } else {
              cls += 'border-gray-200 text-gray-400'
            }
            return (
              <button key={i} onClick={() => choose(i)} className={cls}>
                <span className="font-bold mr-2">{['A', 'B', 'C', 'D'][i]}.</span>
                {opt}
                {answered && i === q.correct && <span className="float-right">✅</span>}
                {answered && i === selected && i !== q.correct && <span className="float-right">❌</span>}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="text-xs font-semibold text-blue-700 uppercase mb-1">Why this answer?</div>
            <p className="text-sm text-blue-900">{q.explanation}</p>
          </div>
        )}

        {answered && (
          <button
            onClick={next}
            className={`mt-4 w-full ${c.header} text-white font-semibold py-4 rounded-xl`}
          >
            {idx + 1 >= total ? 'See Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  )
}
