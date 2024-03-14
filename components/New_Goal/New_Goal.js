import React from 'react'; 

/*

## New Goal Page:

- Header
    - Back Button
    - Done Button
- Title
- Add Description
- Reminders
    - All day option
    - Start
    - End
    - Repeat
    - Alert
    - Reason

*/

import React from 'react';

//New Goal Page component
const NewGoalPage = () => {
	return (
		<div>
			<Header />
			<Title />
			<AddDescription />
			<Reminder />
		</div>
	);
};

//Header component
const Header = () => {
	return 
		<div>
			<BackButton />
			<DoneButton />
		</div>
};

//Back Button component
const BackButton = () => {
	return <button> Back Button </button>
};

//Done Button component
const DoneButton = () => {
	return <button> Done Button </button>
};

//Title component
const Title = () => {
	return <div> Title </div>
};

//Add Description component
const addDescription = () => {
	return <div> Add Description </div>
};

//Reminder component
const Reminder = () => {
	return (
		<div>
			<AllDayOption />
			<Start />
			<End />
			<Repeat />
			<Reason />
		</div>
	);
};

//All Day Option component
const AllDayOption = () => {
	return <option> All Day Option </option>
};

//Start component
const Start = () => {
	return <div> Start </div>
};

//End component
const End = () => {
	return <div> End </div>
};

//Repeat component
const Repear = () => {
	return <div> Repeat </div>
};

//Reason component
const Reason = () => {
	return <div> Reason </div>
};

export default NewGoalPage;