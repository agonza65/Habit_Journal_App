import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './components/mainPage/mainPage'
import { JournalPage } from './components/journal/journalPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainPage />
      <JournalPage />;
    </div>
    )
}

export default App;