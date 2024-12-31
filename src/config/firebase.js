// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCHzKx2PVS4HKZyrWuBvqJbyiOrT-rvzI8",
  authDomain: "votingsystem-c5fcb.firebaseapp.com",
  projectId: "votingsystem-c5fcb",
  storageBucket: "votingsystem-c5fcb.firebasestorage.app",
  messagingSenderId: "1075574787923",
  appId: "1:1075574787923:web:09e30d51298a37938c5ba6",
  measurementId: "G-BWZQ8MCC3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const db = getFirestore()