import { useState } from "react";

//Navigation Bar component
export const NavigationBar = ({onPageChange,currentPage}) => {

	/*
	useState function: const[stateVariable, setStateVariable -function to update] = useState(initialValue)
	*/
	

	//Handle Click Function
	const handleClick = (buttonClicked) => {
		onPageChange(buttonClicked);
		console.log(buttonClicked)
	}

	return (
		<div> 
			<section id= 'Navigation Bar'>
				<h2> {currentPage} </h2>

				<button className={currentPage === 'main' ? 'current' : ''} 
				onClick={()=> handleClick('main')}
				>
					Main Page
				</button>

				<button className={currentPage ==='goalpage' ? 'current' : ''}
				onClick = {()=> handleClick('goalpage')}
				>
					Goal Page
				</button>

				<button className={currentPage === 'progresspage' ? 'current' : ''}
				onClick={()=> handleClick('progresspage')}
				>
					Progress Page
				</button>

				{/* <Button onSelect = {() => handleSelect("main")}> Main Page </Button>
				<Button onSelect = {() => handleSelect('Journals or Goals')}> Journals or Goals </Button>
				<Button onSelect = {() => handleSelect('progress')}> Progress </Button> */}
			</section>
		</div>
	);
}