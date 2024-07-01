// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAoCdhiMEVk181A39UfsdQLNarS2p66i4U",
  authDomain: "food-battle-this-or-that.firebaseapp.com",
  projectId: "food-battle-this-or-that",
  storageBucket: "food-battle-this-or-that.appspot.com",
  messagingSenderId: "879528474867",
  appId: "1:879528474867:web:dcde30c31f426775e39f86",
  measurementId: "G-N6PGDZH973"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firestore, auth, doc, getDoc, setDoc, updateDoc, increment };
