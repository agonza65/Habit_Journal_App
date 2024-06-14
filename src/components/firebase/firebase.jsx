import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKzvm7vbuTvJB_TOHhqfgvdV7l2dsW-94",
  authDomain: "habit-journal-app.firebaseapp.com",
  databaseURL: "https://habit-journal-app-default-rtdb.firebaseio.com",
  projectId: "habit-journal-app",
  storageBucket: "habit-journal-app.appspot.com",
  messagingSenderId: "361762564020",
  appId: "1:361762564020:web:080dbe134f3d5b8fe974e1",
  measurementId: "G-G7TYGRRV7L"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);