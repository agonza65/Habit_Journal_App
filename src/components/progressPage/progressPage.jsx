import { ProgressTab } from "../progressTab/progressTab";
import { Reports } from "../reports/reports";
import { NavigationBar } from "../navigationBar/navigationBar";

//Progess Page component
export const ProgressPage = () => {
	return (
		<div> 
			<ProgressTab />
			<Reports />
			<NavigationBar /> 
		</div>
	);
};
export default ProgressPage;