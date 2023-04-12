import { initializeApp, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "flight-advisor-app.firebaseapp.com",
    projectId: "flight-advisor-app",
    storageBucket: "flight-advisor-app.appspot.com",
    messagingSenderId: "530374134437",
    appId: "1:530374134437:web:edafdc20b4a3d9f5f31b4c",
    measurementId: "G-5NZBSQGEPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize the app
export const auth = getAuth(app);

