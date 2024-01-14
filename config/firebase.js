// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA4Fq9Z6Z6F2qj6Z6H-yZyUtfZ3hzkeIx0",
  authDomain: "portfolio-6b638.firebaseapp.com",
  projectId: "portfolio-6b638",
  storageBucket: "portfolio-6b638.appspot.com",
  messagingSenderId: "398599277254",
  appId: "1:398599277254:web:31a7230d7a18abca8465c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);