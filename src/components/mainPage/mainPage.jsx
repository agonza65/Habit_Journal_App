import { Header } from "../header/header";
import { HabitListView } from "../habitListView/habitListView";
import { NavigationBar } from "../navigationBar/navigationBar";
import { Tabs } from "../tabs/tabs";
import WeeklyCalendar from "../weeklyCalendar/weeklyCalendar";

export const MainPage = () => {
    return (
        <div>
            <WeeklyCalendar />
            <HabitListView />
		</div>
    );
}