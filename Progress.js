import React from 'react';

/*

## Progress Page:

- Progress Tab
- Reports
- Navigation Bar

*/
//Progess Page component
const ProgressPage = () => {
	return (
		<div> 
			<ProgressTab />
			<Report />
			<NavigationBar /> 
		</div>
	);
};

// Progress Tab componnet
const ProgressTab  = () => {
	return <div> Progress Tab </div>
};

// Report component 
const Report = () => {
	return <div> Report </div>
};

//Navigation Bar component
const NavigationBar = () => {
	return <div> Navigation Bar </div>
};

export default ProgressPage;