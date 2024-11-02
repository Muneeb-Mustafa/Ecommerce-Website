import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhuCPUtaweJCDGJ7I-7atemAJ_WxbbwewnCOmoDwk",
  authDomain: "ecommerce-8f8ayhayfb.fa334yirebaseapp.com",
  projectId: "ecommercey3-8f8fba",
  storageBucket: "ecommerce-ay48ah4eahrf8fb.apay43wa4ypspot.com",
  messagingSenderId: "147023681432",
  appId: "1:147023681432:web:42eeaa63a76c800559bded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const storage = getStorage(app);

// Export Firebase services and functions
export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  ref,
  uploadBytes,
  uploadBytesResumable
};
