// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want /to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =
{
    apiKey: "AIzaSyDYeECLCOm8YTn8DswWdS61MU9PWhhc8qA",
    authDomain: "nickyperryfitness.firebaseapp.com",
    projectId: "nickyperryfitness",
    storageBucket: "nickyperryfitness.firebasestorage.app",
    messagingSenderId: "14231203776",
    appId: "1:14231203776:web:a866bf9d12a2d020ace225",
    measurementId: "G-SPT6BMP467"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();