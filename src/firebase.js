// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDy4-z7Rktf6_zLs6wgVfCQ_fy3nZKk6Q4",
    authDomain: "chat-application-fc.firebaseapp.com",
    projectId: "chat-application-fc",
    storageBucket: "chat-application-fc.appspot.com",
    messagingSenderId: "618063545346",
    appId: "1:618063545346:web:a35672ced8fe30f216d31b",
    measurementId: "G-0WWDRMFEVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
