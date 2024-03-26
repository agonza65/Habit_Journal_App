import { NewGoalHeader } from "../newGoalHeader/newGoalHeader";
import { NewGoalTitle } from "../newGoalTitle/newGoalTitle";
import { NewGoalDescription } from "../NewGoalDescription/NewGoalDescription";
import { NewGoalReminder } from "../NewGoalReminder/NewGoalReminder";
import { NewGoalReason } from "../NewGoalReason/NewGoalReason";

// New Goal Component - create a new goal by adding title,description,reminder, and reasons

export const CreateNewGoal = () => {
    return (
        <div>
            <NewGoalHeader />
            <NewGoalTitle />
            <NewGoalDescription />
            <NewGoalReminder />
            <NewGoalReason />
        </div>
    )
}