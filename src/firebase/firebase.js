import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAi1A15AY6dO6y-1fIBcgS5nzQJ5flpec0",
  authDomain: "coder-react-perren.firebaseapp.com",
  projectId: "coder-react-perren",
  storageBucket: "coder-react-perren.appspot.com",
  messagingSenderId: "256905942934",
  appId: "1:256905942934:web:98a8793d7c760937312fb7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);