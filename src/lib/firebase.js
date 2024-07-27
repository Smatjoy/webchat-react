import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-dae92.firebaseapp.com",
  projectId: "reactchat-dae92",
  storageBucket: "reactchat-dae92.appspot.com",
  messagingSenderId: "161570036631",
  appId: "1:161570036631:web:ff47166bddeb2ed5aac2d2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth() //per l'autenticazione
export const db = getFirestore() //informazioni user
export const storage = getStorage() //per le immagini