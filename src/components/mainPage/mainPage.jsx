import { Header } from "../header/header";
import CalendarWidget from "../calendarWidget/calenderWidget";
import { TimeOfDayTab } from "../timeOfDayTab/timeOfDayTab";
import HabitListView from "../habitListView/habitListView";
import NavigationBar from "../navigationBar/navigationBar";
export const MainPage = () => {
    return (
        <div>
			<Header />
			<CalendarWidget />
			<TimeOfDayTab />
			<HabitListView />
			<NavigationBar />
		</div>
    );
}

export default MainPage;