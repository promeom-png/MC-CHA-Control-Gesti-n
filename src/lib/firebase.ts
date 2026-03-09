import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjss4ZG_XFZtBUH-awpbznLMNShBW7M0w",
  authDomain: "mc-cha-financials.firebaseapp.com",
  projectId: "mc-cha-financials",
  storageBucket: "mc-cha-financials.firebasestorage.app",
  messagingSenderId: "894472431387",
  appId: "1:894472431387:web:b1db4e2548e1450a9015be",
  measurementId: "G-0BF5MRDBGW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
