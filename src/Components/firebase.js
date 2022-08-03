// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from  "firebase/firestore";
import { getAuth } from "firebase/auth"
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOmoRNnKeu19oX92rQqKBgZyt0A3Hf9dY",
  authDomain: "hotel-app-36ad0.firebaseapp.com",
  projectId: "hotel-app-36ad0",
  storageBucket: "hotel-app-36ad0.appspot.com",
  messagingSenderId: "78571838771",
  appId: "1:78571838771:web:ec021190adc41838abb246",
  measurementId: "G-F8ZQ7YS3JW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}