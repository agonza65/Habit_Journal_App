import React from 'react'; 

/* 
Goal Page
- Header
    - Back Button
- Goals  List View
    - Edit or view option
- New Goal Button
*/

//Goal Page component
const GoalPage = () => {
	return (
		<div>
			<Header />
			<GoalList />
			<NewGoalButton />
		</div>
	);
};

//Header component
const Header = () => {
	return 
		<div> 
			<BackButton />
		</div>
};

// Back Button component
const BackButton = () => {
	return <button> Back Button </button>
};

//Goal List View
const GoalView = () => {
	return
		<div>
			<EditViewOption />
		</div>
};

//New Goal Button
const NewGoalOption = () => {
	return <option> New Goal Option </option>
};

//New Goal Button
const NewGoalButton = () =>{
	return <button> New Goal Button </button>
};

export default GoalPage;