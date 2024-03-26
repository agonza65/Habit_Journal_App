import { NewJournalHeader } from "../newJournalHeader/newJournalHeader";
import { JournalTitle } from "../journalTitle/journalTitle";
import { AddJournalDescription } from "../addJournalDescription/addJournalDescription";
import { Journaling } from "../journaling/journaling";

// New Journal Component
export const CreateNewJournal = () => {
    return(
        <div>
            <NewJournalHeader />
            <JournalTitle />
            <AddJournalDescription />
            <Journaling />
        </div>
    );
}; 