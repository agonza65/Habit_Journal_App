import { Header } from "../header/header";
import { JournalListView } from "../journalListView/journalListView";
import React, { useState, useEffect } from 'react';
import { db , auth } from "../firebase/firebase";
import { setDoc, doc, getDocs, collection } from "firebase/firestore"; 
import { TiPencil, TiTrash } from "react-icons/ti";
import "./jTable.css";
import Modal from "../modal/modal";

export const JournalPage = () => {

	const [entries, setEntries] = useState([]);
	
		//add data
		async function addEntry(id, entry) {
		await setDoc(doc(db, "entries", id), entry);
		}
		addEntry('entry1',{
			title: "Morning Walk",
			date:"05-01,2024",
			description: " Today, I started my day with a refreshing 20-minute walk in the park. The weather was perfect, and the fresh air invigorated my senses. I felt a sense of peace and clarity that lasted throughout the day. This habit is really helping me clear my mind and stay active. After my walk, I had a healthy breakfast of oatmeal and fresh fruit, which gave me the energy I needed for the day ahead. I spent some time reading a book I've been enjoying, which added to my sense of calm and focus. The story was captivating, and it felt good to immerse myself in it. In the afternoon, I tackled some work tasks and felt productive and motivated. I managed to complete a project I've been working on for a while, which gave me a great sense of accomplishment. During my lunch break, I tried a new recipe and made a delicious quinoa salad, packed with vegetables and a tangy lemon dressing. Later in the day, I took a short break to practice some mindfulness meditation, which helped me recharge and stay focused for the rest of the afternoon. I also had a virtual meeting with a friend, catching up and sharing laughs, which brightened my day even more. In the evening, I went for another short walk to enjoy the sunset, reflecting on the day's events and feeling grateful for the little moments of joy and peace. Before bed, I did some gentle stretching and listened to some relaxing music, which helped me wind down and prepare for a restful night’s sleep. Overall, it was a fulfilling and balanced day, filled with activities that nurtured my mind, body, and soul. a refreshing 20-minute walk in the park. The weather was perfect, and the fresh air invigorated my senses. I felt a sense of peace and clarity that lasted throughout the day. This habit is really helping me clear my mind and stay active.",
			mood: "Refreshed"
		});
		addEntry('entry2',{
			title: "Gratitude Reflection",
			date: "May 02,2024",
			description: "Took some time today to reflect on things I am grateful for. I wrote down three things: my supportive family, good health, and the opportunity to pursue my passion. This practice is helping me maintain a positive mindset and appreciate the little things in life.",
			mood: "Grateful"
		});
		addEntry('entry3',{
			title: "Hydration Success",
			date: "May 03,2024",
			description: "Successfully drank eight glasses of water today! I’ve been struggling with this habit, but today I made a conscious effort to track my intake. I feel more energized and less sluggish. Keeping a water bottle with me at all times really helped.",
			mood: "Energized"
		});
		addEntry('entry4',{
			title: "Reflective Reading",
			date: "May 04,2024",
			description: "Today, I read a motivational quote that really resonated with me: The only limit to our realization of tomorrow is our doubts of today. I spent some time contemplating its meaning and how I can apply it to my life. This habit of reflective reading is becoming a powerful source of daily inspiration.",
			mood: "Inspired"
		});
		addEntry('entry5',{
			title: "Yoga Session",
			date: "May 5, 2024",
			description: "Dedicated 30 minutes to a calming yoga session this evening. The combination of deep breathing and stretching helped release the tension in my body and mind. I felt a deep sense of relaxation and peace afterward, which was a perfect way to end the day.",
			mood: "Relaxed"
		});
	
	
	  // get data
	  async function getEntries() {
		const querySnapshot = await getDocs(collection(db, "entries"));
		const EntriesArray = [];
		querySnapshot.forEach((doc) => {
		  // Assuming doc.data() is the habit object you want to store
		  EntriesArray.push({ id: doc.id, ...doc.data() });
		});
		// Step 2: Update state
		setEntries(EntriesArray);
	  }
	
	
	  // Fetch habits on component mount
	  useEffect(() => {
		getEntries();
	  }, []); // Empty dependency array means this effect runs once on mount
	
	  // Step 3: Render habits
	  return (
		<div>
			<div className="table-wrapper">
				<h1>Journal Entry List</h1>
				{/* Table data */}
				<table className="table"> 
					<thead>
						<tr>
							<td>Title</td>
							<td>Date</td>
							<td>Description</td>
							<td>Action</td>
						</tr>
					</thead>

					{/* body */}
					<tbody>
						{entries.map((entry) => (
							<tr key={entry.id} > 
								<td> {entry.title}</td>
								<td> {entry.date}</td>
								<td>{entry.description}</td>
								<td>
									<Modal/>
									<TiTrash />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<Modal />
		</div>
	  )
};