import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwNZruz-1_gjsjej4pVy8rO7HeGImYdeE",
  authDomain: "ecomerce-r-9415c.firebaseapp.com",
  projectId: "ecomerce-r-9415c",
  storageBucket: "ecomerce-r-9415c.firebasestorage.app",
  messagingSenderId: "332995981645",
  appId: "1:332995981645:web:b095ea2e2b6ec3651d8704",
  measurementId: "G-1HMV4W73S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;