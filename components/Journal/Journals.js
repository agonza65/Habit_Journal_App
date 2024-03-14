import React from 'react';

/*
Journal Page 
- Header
    - Back button
- Journal List View
    - Edit or View option
- New Journal Button
*/

// Journal component
const JournalPage = () => {
	return (
		<div> 
			<Header />
			<JournalListView />
			<NewJournalButton />
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

//Back Button component
const BackButton = () => {
	return <button> Back Button </button>
};

//Journal List View component
const JournalListView = () => {
	return (
		<div>
			<EditViewOption /> 
		</div>
	);
};

//Edit View Option component 
const EditViewOption = () => {
	return <option> Edit or View  Option </option>
};

// New Journal Button component
const NewJournaButton = () => {
	return <button>  New Journal Button </button>
};

export default JournalPage; 