import { Header } from "../header/header";
import { Title } from "../title/title";
import { AddDescription } from "../addDescription/addDescription";
import { Journaling } from "../journaling/journaling";

//NewJournalPage component - create a new journal
export const NewJournalPage = () => {
	return ( 
		<div>
			<Header />
			<Title />
			<AddDescription />
			<Journaling />	
		</div>
	); 
}