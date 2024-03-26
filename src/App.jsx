<<<<<<< Updated upstream
import MainPage from "./components/mainPage/mainPage";
import JournalPage from "./components/journalPage/journalPage";
import NewJournalPage from "./components/newJournalPage/newJournalPage";
import GoalPage from "./components/goalPage/goalPage";
import NewGoalPage from "./components/newGoalPage/newGoalPage";
import ProgressPage from "./components/progressPage/progressPage";
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainPage } from './components/mainPage/mainPage'
import { JournalPage } from './components/journal/journalPage'
import { NewJournal } from './components/createNewJournal/createNewJournal'
import { Goal } from './components/goal/goal'
import { CreateNewGoal } from './components/createNewGoal/createNewGoal'
import { ProgressPage } from './components/progressPage/progressPage'


function App() {
  const [count, setCount] = useState(0)
>>>>>>> Stashed changes

function App () {
  return (
    <div>
<<<<<<< Updated upstream
        <MainPage />
        <JournalPage />
        <NewJournalPage />
        <GoalPage />
        <NewGoalPage />
        <ProgressPage />
=======
      <MainPage />
      <JournalPage />
      <NewJournal />
      <Goal />
      <CreateNewGoal />
      <ProgressPage />
>>>>>>> Stashed changes
    </div>
  );
};

export default App;