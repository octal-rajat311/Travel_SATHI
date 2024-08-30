// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyi0iSlVx42mDJy2QiTiUDRDS_8Z3VIXk",
  authDomain: "aitripplanner-ae194.firebaseapp.com",
  projectId: "aitripplanner-ae194",
  storageBucket: "aitripplanner-ae194.appspot.com",
  messagingSenderId: "582069359934",
  appId: "1:582069359934:web:36df14ce853e073349886f",
  measurementId: "G-JK9RLVNPQF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
