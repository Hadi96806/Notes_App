import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDleZdSHZaMRYmuopTpyx-iJqG-86bNTZ8",
  authDomain: "react-notes-7df6c.firebaseapp.com",
  projectId: "react-notes-7df6c",
  storageBucket: "react-notes-7df6c.appspot.com",
  messagingSenderId: "314411794600",
  appId: "1:314411794600:web:d933e4426bf2e2bb14c29d"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
