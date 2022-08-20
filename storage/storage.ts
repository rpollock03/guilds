import { firebaseConfig } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebase = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebase);
export const storage = getStorage(firebase);
