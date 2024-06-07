import { useState } from "react";

//Navigation Bar component
export const NavigationBar = ({onPageChange,currentPage}) => {

	//Handle Click Function
	const handleClick = (buttonClicked) => {
		onPageChange(buttonClicked);
		console.log(buttonClicked)
	}

	return (
		<div> 
			<h2> {currentPage} </h2>

			<button className = {currentPage === 'main' ? 'current' : ''} 
			onClick={()=> handleClick('main')}
			>
				Main Page
			</button>

			<button className = {currentPage === 'goalpage' ? 'current' : ''}
			onClick = {()=> handleClick('goalpage')}
			>
				Goal Page
			</button>

			<button className = {currentPage === 'journalpage' ? 'current' : ''}
			onClick = {() => handleClick('journalpage')}
			>
				Journal Page
			</button>

			<button className = {currentPage === 'progresspage' ? 'current' : ''}
			onClick={()=> handleClick('progresspage')}
			>
				Progress Page
			</button>
		</div>
	);
}