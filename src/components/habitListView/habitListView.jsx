/*The page goes blank when I import db or anything from firebase.jsx file)
or use useEffect() 
*/

import { db , auth } from "../firebase/firebase";

// Habit List View component
const HabitListView = () => {
	
	
	var habitslist = db.collection("habtis");
	
	//Mock data
	habitslist.doc("habit1").set({
		title: "Learning New Skill",
		description: "Spend 30 minutes each day learning a new skill",
		goal: "Enhance personal growth and expand capabilities by acquiring new skills."
	});
	habitslist.doc("habit2").set({
		title: "Daily Walk",
		description:"Take a 20-minute walk each day." ,
		goal: "Improve physical fitness and mental well-being through regular exercise."
	});
	habitslist.doc("habit3").set({
		title: "Daily Gratitude Journal",
		description: "Reflect on three things you’re grateful for each day." ,
		goal: "Cultivate a positive mindset by acknowledging and appreciating the good in your life."
	});
	habitslist.doc("habit4").set({
		title: "Reflective Reading",
		description: "Read a motivational quote and contemplate its meaning",
		goal: " Inspire and motivate yourself by engaging with thought-provoking ideas."
	});
	habitslist.doc("habit5").set({
		title: "Hydration Habit",
		description: "Drink eight glasses of water a day.",
		goal: " Maintain proper hydration for optimal physical health."
	});

	//get data
	var docRef = db.collection("habits").doc("habit1");

	docRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Document data: ", doc.data());
		} 
		else {
			// doc.data() is not found
			console.log("Not found");
		}
	}).catch((error) => {
			console.log("Error getting doucment: ", error);
	});

	return(
		<div className = 'habits'>	
			
		</div>
	)
}

export {HabitListView};