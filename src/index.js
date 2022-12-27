import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, collection, getDoc} from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBcyhqYcJQf_Xd8vJtd1D5XB6DC-1kWFHE",
    authDomain: "nuft-applications.firebaseapp.com",
    databaseURL: "https://nuft-applications-default-rtdb.firebaseio.com",
    projectId: "nuft-applications",
    storageBucket: "nuft-applications.appspot.com",
    messagingSenderId: "447244511749",
    appId: "1:447244511749:web:03aeaf88f08d31e9cd8a6c",
    measurementId: "G-E2YVB3SJWS"
  });

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);
const usersCollection = collection(db, 'users');
const userDoc = getDoc(usersCollection); 


// Detect auth state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in');
    } else {
        console.log('User is signed out');
    }
});