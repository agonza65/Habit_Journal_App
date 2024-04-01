import { GoalPage } from "./components/goalPage/goalPage";
import { JournalPage } from "./components/journalPage/journalPage";
import { MainPage } from "./components/mainPage/mainPage";
import { NavigationBar } from "./components/navigationBar/navigationBar";
import { ProgressPage } from "./components/progressPage/progressPage";
import { useState } from "react";

function App() {
  const [currentPage,setPage] = (useState('main'));

  if(currentPage === 'main'){
   return ( 
   <div> 
      mainPage
      <NavigationBar onPageChange = {setPage} />
    </div>
   );  
  }
  if(currentPage === 'goalpage'){
    return ( 
    <div> 
       <GoalPage />
       <NavigationBar onPageChange = {setPage} />
     </div>
    );  
   }

   if(currentPage === 'journalpage'){
    return ( 
    <div> 
       <JournalPage />
       <NavigationBar onPageChange = {setPage} />
     </div>
    );  
   }

   if(currentPage === 'progresspage'){
    return ( 
    <div> 
       <ProgressPage />
       <NavigationBar onPageChange = {setPage} />
     </div>
    );  
   }
 
}
export default App