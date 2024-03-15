import { Header } from "../header/header";
import { Title } from "../title/title";
import { AddDescription } from "../addDescription/addDescription";
import { Reminder } from "../reminder/reminder";
import { Reasons } from "../reasons/reasons";

//New Goal Page component
export const NewGoalPage = () => {
	return (
		<div>
			<Header />
			<Title />
			<AddDescription />
			<Reminder />
			<Reasons />
		</div>
	);
};