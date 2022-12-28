// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcyhqYcJQf_Xd8vJtd1D5XB6DC-1kWFHE",
  authDomain: "nuft-applications.firebaseapp.com",
  databaseURL: "https://nuft-applications-default-rtdb.firebaseio.com",
  projectId: "nuft-applications",
  storageBucket: "nuft-applications.appspot.com",
  messagingSenderId: "447244511749",
  appId: "1:447244511749:web:03aeaf88f08d31e9cd8a6c",
  measurementId: "G-E2YVB3SJWS"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state change
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in");
        window.location = 'home.html'
        // ...
    } else {
        console.log("User is signed out");
        // ...
    }
});

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
});

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
});

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});