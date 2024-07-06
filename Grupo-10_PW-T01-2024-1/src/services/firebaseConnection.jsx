// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';


const firebaseConfig = {

  //Add your keys here

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firestore, auth, doc, getDoc, setDoc, updateDoc, increment };
