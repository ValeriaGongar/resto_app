// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOT0nzCp6cEeak9AdYKFwCGQN8WwWdok",
  authDomain: "menuresto-18784.firebaseapp.com",
  projectId: "menuresto-18784",
  storageBucket: "menuresto-18784.appspot.com",
  messagingSenderId: "690953522734",
  appId: "1:690953522734:web:c7d320aff231511d7ad9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);