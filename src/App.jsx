import { GoalPage } from "./components/goalPage/goalPage";
import { JournalPage } from "./components/journalPage/journalPage";
import { MainPage } from "./components/mainPage/mainPage";
import { NavigationBar } from "./components/navigationBar/navigationBar";
import { ProgressPage } from "./components/progressPage/progressPage";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentPage,setPage] = (useState('main'));

  if(currentPage === 'main'){
   return ( 
   <div> 
      <NavigationBar onPageChange = {setPage} />
      <MainPage />
    </div>
   );  
  }

  if(currentPage === 'goalpage'){
    return ( 
    <div> 
       <NavigationBar onPageChange = {setPage} />
       <GoalPage />
     </div>
    );  
   }
   
   if(currentPage === 'journalpage'){
    return ( 
    <div> 
       <NavigationBar onPageChange = {setPage} />
       <JournalPage />
     </div>
    );  
   }

   if(currentPage === 'progresspage'){
    return ( 
    <div> 
       <NavigationBar onPageChange = {setPage} />
       <ProgressPage />
     </div>
    );  
   }
}
export default App