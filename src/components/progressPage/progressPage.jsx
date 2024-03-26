import { NavigationBar } from "../navigationBar/navigationBar";
import { Reports } from "../reports/reports";
import { Tabs } from "../tabs/tabs";

// Progress Page - shows the progess of goals 
export const ProgressPage = () => {
	return (
		<div> 
			<h2> Progress Page that displays report of goals being met</h2>
			<Tabs />
			<Reports />
			<NavigationBar />
		</div>

	);
}