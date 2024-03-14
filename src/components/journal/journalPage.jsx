import { JournalHeader } from "../journalHeader/journalHeader";
import { JournalListView } from "../journalListView/journalListView";
import { NewJournalButton } from "../newJournalButton/newJournalButton";
// Journal component
export const JournalPage = () => {
	return (
		<div> 
			<JournalHeader />
			<JournalListView />
			<NewJournalButton />
		</div>
	);
};