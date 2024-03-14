import { MainHeader } from "../mainHeader/mainHeader";
import { CalendarWidget } from "../calendarWidget/calenderWidget";
import { TimeOfDayTabs } from "../timeOfDayTab/timeOfDayTab";
import { HabitListView } from "../habitListView/habitListView";
import { NavigationBar } from "../navigationBar/navigationBar";

export const MainPage = () => {
    return (
        <div>
			<MainHeader />
			<CalendarWidget />
			<TimeOfDayTabs />
			<HabitListView />
			<NavigationBar />
		</div>
    );
};
