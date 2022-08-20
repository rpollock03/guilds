import "../styles/globals.css";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from "reactfire";
import { firebaseConfig } from "../firebase.config";
import { connectStorageEmulator, getStorage } from "firebase/storage";

function FirebaseSDKProviders({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  if (process.env.NODE_ENV !== "production") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectStorageEmulator(storage, "localhost", 9199);
    connectFirestoreEmulator(firestore, "localhost", 8080);
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>{children}</StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKProviders>
        <Component {...pageProps} />;
      </FirebaseSDKProviders>
    </FirebaseAppProvider>
  );
}

export default MyApp;
