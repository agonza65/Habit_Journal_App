import { Header } from "../header/header";
import {HabitListView} from "../habitListView/habitListView";
import { NavigationBar } from "../navigationBar/navigationBar";
import WeeklyCalendar from "../weeklyCalendar/weeklyCalendar";

export const MainPage = () => {
    return (
        <div>
            <WeeklyCalendar />
            <HabitListView />
		</div>
    );
}
