import MainPage from "./components/mainPage/mainPage";
import JournalPage from "./components/journalPage/journalPage";
import NewJournalPage from "./components/newJournalPage/newJournalPage";
import GoalPage from "./components/goalPage/goalPage";
import NewGoalPage from "./components/newGoalPage/newGoalPage";
import ProgressPage from "./components/progressPage/progressPage";

function App () {
  return (
    <div>
        <MainPage />
        <JournalPage />
        <NewJournalPage />
        <GoalPage />
        <NewGoalPage />
        <ProgressPage />
    </div>
  );
};

export default App;