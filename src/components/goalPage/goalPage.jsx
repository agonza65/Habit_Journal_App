import { Header } from "../header/header";
import { GoalView } from "../goalView/goalView";
import { NewButton } from "../newButton/newButton";

//Goal Page component
export const GoalPage = () => {
	return (
		<div>
			<Header />
			<GoalView />
			<NewButton />
		</div>
	);
};
export default GoalPage;
