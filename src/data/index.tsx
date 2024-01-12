// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDHqydeUoqEIDgAZNGKRj67vAkEJTByw9o",
  authDomain: "click-gas-e8dc7.firebaseapp.com",
  projectId: "click-gas-e8dc7",
  storageBucket: "click-gas-e8dc7.appspot.com",
  messagingSenderId: "141027486471",
  appId: "1:141027486471:web:78856239a9af444c56f3a2",
  measurementId: "G-GXJF2REBH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
