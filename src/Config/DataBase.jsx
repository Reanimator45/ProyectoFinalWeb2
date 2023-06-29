import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDqk76kkYnmoo6D6ZOKTLVjP2ax5b_lgAA",
  authDomain: "finalweb2-21e65.firebaseapp.com",
  projectId: "finalweb2-21e65",
  storageBucket: "finalweb2-21e65.appspot.com",
  messagingSenderId: "1021686696672",
  appId: "1:1021686696672:web:90ce76ede15e10b5d7de85"
};
const app = initializeApp(firebaseConfig);
export const DataBase = getFirestore(app)