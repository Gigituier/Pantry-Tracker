// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Corrected import

const firebaseConfig = {
  apiKey: "AIzaSyBV4p0TTHSOHqjS3nzp9cXzn62GI9sCO2c",
  authDomain: "iventory-app-d0f62.firebaseapp.com",
  projectId: "iventory-app-d0f62",
  storageBucket: "iventory-app-d0f62.appspot.com",
  messagingSenderId: "364667044550",
  appId: "1:364667044550:web:c76875d3200aeb818b4dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};