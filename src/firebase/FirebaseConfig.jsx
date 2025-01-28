import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz_YMl_JileY2Q70a_I9gvMB5WPFUkqTA",
  authDomain: "mycomm-e71a5.firebaseapp.com",
  projectId: "mycomm-e71a5",
  storageBucket: "mycomm-e71a5.firebasestorage.app",
  messagingSenderId: "897748050567",
  appId: "1:897748050567:web:2749e545507e289ded0e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firebaseFirestore = getFirestore(app);

export { firebaseAuth, firebaseFirestore };