import "./NavigationBar.css";
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
			<div className="navigationBar">
				<button className="navigationButton">
					<div className = {currentPage === 'main' ? 'current' : ''} onClick={()=> handleClick('main')}> 
						Main
					</div>
				</button>

				<button className ="navigationButton">
					<div className = {currentPage === 'goalpage' ? 'current' : ''} onClick = {()=> handleClick('goalpage')}> 
						Goal 
					</div>
				</button>

				<button className = "navigationButton">
					<div className = {currentPage === 'journalpage' ? 'current' : ''} onClick = {()=> handleClick('journalpage')}>
						Journal
					</div>
				</button>

				<button className = "navigationButton">
					<div className = {currentPage === 'progresspage' ? 'current' : ''} onClick={()=> handleClick('progresspage')}>
						Progress
					</div>				
				</button>
			</div>
		</div>
	);
}