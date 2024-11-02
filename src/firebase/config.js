// // src/firebase/config.js

// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAfhuCPUJCDGJ7I-7mAJ_WxbbwnCOmoDwk",
//   authDomain: "ecommerce-8f8fb.firebaseapp.com",
//   projectId: "ecommerce-8f8fb",
//   storageBucket: "ecommerce-8f8fb.appspot.com",
//   messagingSenderId: "147023681432",
//   appId: "1:147023681432:web:42eeaa63a76c800559bded"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app); // Firestore instance
// const storage = getStorage(app);

// // Export Firebase services and functions
// export {
//   auth,
//   db,
//   storage,
//   signInWithEmailAndPassword,
//   signOut,
//   createUserWithEmailAndPassword,
//   sendPasswordResetEmail,
//   doc,
//   setDoc,
//   ref,
//   uploadBytes,
//   uploadBytesResumable
// };




// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhuCPUJCDGJ7I-7mAJ_WxbbwnCOmoDwk",
  authDomain: "ecommerce-8f8fb.firebaseapp.com",
  projectId: "ecommerce-8f8fb",
  storageBucket: "ecommerce-8f8fb.appspot.com",
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