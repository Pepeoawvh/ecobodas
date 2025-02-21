import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import dotenv from 'dotenv';

dotenv.config();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ecobodas-66c09.firebaseapp.com",
  projectId: "ecobodas-66c09",
  storageBucket: "ecobodas-66c09.firebasestorage.app",
  messagingSenderId: "874918667456",
  appId: "1:874918667456:web:c08172af12bc6810343925",
  measurementId: "G-RPD1EXFNVK"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestoreDB = app.firestore();
export const auth = app.auth();