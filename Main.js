import React from 'react';

/* 

Main Page

- Main Page
    - Header
        - settings button
    - Calendar Widget
    - Time of Day Tabs
    - Habit List View
        - Habit List Item
    - Navigation Bar
        - Goal and Journal option
        - Progress button

*/

//Main Page component
const MainPage = () => {
	return (
		<div>
			<Header />
			<CalendarWidget />
			<TimeOfDayTabs />
			<HabitListView />
			<NavigationBar />
		</div>
	);
};

// Header component
const Header = () => {
	return (
		<div>
			<SettingsButton />
		</div>
	);
};	

//Settings Button component
const SettingsButton = () => {
	return <button>Settings</button>;
}

// Calendar Widget component
const CalendarWidget = () => {
	return <div>Calendar Widget</div>;
};

//Time of Day Tabs component
const TimeOfDayTabs = () => {
	return <div>Time of Days Tabs</div>;
};

// Habit List View component
const HabitListView = () => {
	return (
		<div> 
			<HabitListItem />
		</div>
	);
};

//Habit List Item component
const HabitListItem =() => {
	return <div> Habit List Item </div>;
};

//Navigation Bar component
const NavigationBar = () =>{
	return <div> Navigation Bar </div>;
};


// Is it necessary to add the goal/journal & progress button?

export default MainPage;