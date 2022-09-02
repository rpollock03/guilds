import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useFirebaseApp } from "reactfire";

const firebase = useFirebaseApp();

export const firestore = getFirestore(firebase);
export const storage = getStorage(firebase);
