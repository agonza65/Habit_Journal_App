/*
The page goes blank when I import db or anything from firebase.jsx file)
or use useEffect() 
*/
import React, { useState, useEffect } from 'react';
import { db , auth } from "../firebase/firebase";
import { setDoc, doc, getDocs, collection } from "firebase/firestore"; 
import "./HabitListView.css";
import { TiPencil, TiTrash } from "react-icons/ti";
// Habit List View component
const HabitListView = () => {
  // Step 1: Initialize state
  const [habits, setHabits] = useState([]);

  //add data
  async function addHabit(id, habit) {
    await setDoc(doc(db, "habits", id), habit);
  }

  addHabit('habit1',{
		title: "Learning New Skill",
		description: "Spend 30 minutes each day learning a new skill",
		goal: "Enhance personal growth and expand capabilities by acquiring new skills."
	});
  addHabit('habit2',{
		title: "Daily Walk",
		description:"Take a 20-minute walk each day." ,
		goal: "Improve physical fitness and mental well-being through regular exercise."
	})
  addHabit('habit3',{
		title: "Daily Gratitude Journal",
		description: "Reflect on three things you’re grateful for each day." ,
		goal: "Cultivate a positive mindset by acknowledging and appreciating the good in your life."
	})
  addHabit('habit4',{
		title: "Reflective Reading",
		description: "Read a motivational quote and contemplate its meaning",
		goal: " Inspire and motivate yourself by engaging with thought-provoking ideas."
	})
  addHabit('habit5',{
		title: "Hydration Habit",
		description: "Drink eight glasses of water a day.",
		goal: " Maintain proper hydration for optimal physical health."
	})


  // get data
  async function getHabits() {
    const querySnapshot = await getDocs(collection(db, "habits"));
    const habitsArray = [];
    querySnapshot.forEach((doc) => {
      // Assuming doc.data() is the habit object you want to store
      habitsArray.push({ id: doc.id, ...doc.data() });
    });
    // Step 2: Update state
    setHabits(habitsArray);
  }


  // Fetch habits on component mount
  useEffect(() => {
    getHabits();
  }, []); // Empty dependency array means this effect runs once on mount

  // Step 3: Render habits
  return (
    <div>
      <h1>Habit List View </h1>

      {/* Table data */}
      <table > 
        {/* header */}
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          <tr>
            {/* Title */}
            <td>
              {habits.map((habit) => (
              <li key={habit.id}>{habit.title}</li>
              ))}
            </td>
            {/* Decsription */}
            <td>
              {habits.map((habit) => (
              <li key={habit.id}>{habit.description}</li>
              ))}
            </td>
            {/* Action */}
            <td>
                <TiPencil />
                <TiTrash />
            </td>    
          </tr>  
        </tbody>
      </table>
    </div>
  );
}

export {HabitListView};