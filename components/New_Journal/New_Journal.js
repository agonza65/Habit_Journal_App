import React from 'react';
/* 
## New Journal Page:

- Header
    - Back Button
    - Done Button
- Title
- Add Description
- Journal

*/

//NewJournalPage component
const NewJournalPage = () => {
	return ( 
		<div>
			<Header />
			<Title />
			<AddDescription />
			<Journal />	
		</div>
	); 
};

//Header component
const Header =() => {
	return (
		<div> 
			<BackButton />
			<DoneButton />
		</div>
	);
};
		
//BackButton component
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
const AddDescription = () => {
	return <div> Add Description </div>
};

//Journal Component
const Journal = () => {
	return <div> Journal </div>
};

export default NewJournalPage