import { firebaseConfig } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);
