// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6aX0yOzSAOrCmhW42VXJdL0VysxZN7Gk",
    authDomain: "intern-bf188.firebaseapp.com",
    projectId: "intern-bf188",
    storageBucket: "intern-bf188.appspot.com",
    messagingSenderId: "270159735702",
    appId: "1:270159735702:web:c8cdac4d4d0c6849278bb7",
    measurementId: "G-PN2K2NKP1F"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


