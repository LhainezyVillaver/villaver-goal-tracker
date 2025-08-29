
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiClLb6O1LAdyx0zHFyGZCulyhF-vVbdU",
  authDomain: "goalproject-lhv.firebaseapp.com",
  projectId: "goalproject-lhv",
  storageBucket: "goalproject-lhv.firebasestorage.app",
  messagingSenderId: "691543262563",
  appId: "1:691543262563:web:0d03fb6d314819271fbf56"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)