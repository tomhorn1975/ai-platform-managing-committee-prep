import { useState, useEffect } from 'react'
import Home from './pages/Home'
import TopicHome from './pages/TopicHome'
import LearnMode from './pages/LearnMode'
import FlashcardMode from './pages/FlashcardMode'
import QuizMode from './pages/QuizMode'
import FillBlankMode from './pages/FillBlankMode'
import ScenarioMode from './pages/ScenarioMode'
import ProgressPage from './pages/ProgressPage'

const STORAGE_KEY = 'ai-prep-progress'

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

export default function App() {
  const [page, setPage] = useState('home')
  const [topic, setTopic] = useState(null)
  const [progress, setProgress] = useState(loadProgress)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const go = (newPage, newTopic = null) => {
    setPage(newPage)
    if (newTopic) setTopic(newTopic)
  }

  const saveScore = (topicId, mode, score, total) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: {
        ...(prev[topicId] || {}),
        [mode]: { score, total, pct: Math.round((score / total) * 100) },
      },
    }))
  }

  const sharedProps = { go, topic, progress, saveScore }

  if (page === 'home') return <Home {...sharedProps} />
  if (page === 'topic') return <TopicHome {...sharedProps} />
  if (page === 'learn') return <LearnMode {...sharedProps} />
  if (page === 'flashcard') return <FlashcardMode {...sharedProps} />
  if (page === 'quiz') return <QuizMode {...sharedProps} />
  if (page === 'fillblank') return <FillBlankMode {...sharedProps} />
  if (page === 'scenario') return <ScenarioMode {...sharedProps} />
  if (page === 'progress') return <ProgressPage {...sharedProps} />
  return null
}
