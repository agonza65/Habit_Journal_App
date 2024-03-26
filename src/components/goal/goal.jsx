import { GoalHeader } from "../goalHeader/goalHeader";
import { GoalList } from "../goalList/goalList";
import { NewGoalButton } from "../newGoalButton/newGoalButton";

/* 
Goal component - can view the overview of 
the goals that were create and ability to edit 
or create a new goal
*/

export const Goal = () => {
    return (
        <div>
            <GoalHeader />
            <GoalList />
            <NewGoalButton />
        </div>  
    )
}