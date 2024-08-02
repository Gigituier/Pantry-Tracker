// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Corrected import

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  projectId: "<projectId>",
  storageBucket: "<storageBucket>",
  messagingSenderId: "364667044550",
  appId: "<app-id>"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore};
