import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './components/mainPage/mainPage'
import { NewJournalPage } from './components/newJournalPage/newJournalPage'
import { GoalPage } from './components/goalPage/goalPage'
import { NewGoalPage } from './components/newGoalPage/newGoalPage'
import { ProgressPage } from './components/progressPage/progressPage'
import { JournalPage } from './components/journalPage/journalPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainPage />
      <JournalPage />
      <NewJournalPage />
      <GoalPage />
      <NewGoalPage />
      <ProgressPage />
    </div>
    )
}

export default App;