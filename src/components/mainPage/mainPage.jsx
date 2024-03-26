import { Header } from "../header/header";
import { CalendarWidget } from "../calendarWidget/calenderWidget";
import { HabitListView } from "../habitListView/habitListView";
import { NavigationBar } from "../navigationBar/navigationBar";
import { Tabs } from "../tabs/tabs";

export const MainPage = () => {
    return (
        <div>
			<Header />
			<CalendarWidget />
			<Tabs />
			<HabitListView />
			<NavigationBar />
		</div>
    );
}