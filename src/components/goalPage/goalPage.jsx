import { Button } from "../Button/Button";
import { GoalView } from "../goalView/goalView";
import { Header } from "../header/header";

//Goal Page component
export const GoalPage = () => {
	return (
		<div>
			<Header />
			<GoalView />
			<Button />
		</div>
	);
}