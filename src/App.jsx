import { MainPage } from "./components/mainPage/mainPage";
import { NavigationBar } from "./components/navigationBar/navigationBar";


function App() {
  const [currentPage,setPage] = useState("Main")
  
  return (
    <div>
      <NavigationBar />
    </div>
  );
}
export default App