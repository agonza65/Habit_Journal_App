import { Header } from "../header/header";
import { JournalListView } from "../journalListView/journalListView";
import { NewButton } from "../newButton/newButton";

// Journal component
export const JournalPage = () => {
	return (
		<div> 
			<Header />
			<JournalListView />
			<NewButton />
		</div>
	)
}