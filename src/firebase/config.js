// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6a22wEBDm8KGU8g1OUtpxu49nEdSTUg",
  authDomain: "miniblog-react-b77fa.firebaseapp.com",
  projectId: "miniblog-react-b77fa",
  storageBucket: "miniblog-react-b77fa.firebasestorage.app",
  messagingSenderId: "90925470879",
  appId: "1:90925470879:web:cc6b734b6c49fc32e6beaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
