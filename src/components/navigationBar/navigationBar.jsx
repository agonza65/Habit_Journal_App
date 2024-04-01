import { Button } from "../button/button"

//Navigation Bar component
export const NavigationBar = () => {
	const [currentPage, setPage] = useState("Main Page");

	function handleSelect(selectedButton) {
        console.log(selectedButton);
    }
	return (
		<div> 
			<h2> Navigation Bar </h2>
			<Button onSelect = {() => handleSelect("Main Page")}> Main Page </Button>
			<Button onSelect = {() => handleSelect('Journals or Goals')}> Journals or Goals </Button>
			<Button onSelect = {() => handleSelect('Progress')}> Progress </Button>
		</div>
	);
}