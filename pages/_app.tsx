import "../styles/globals.css";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { firebaseConfig } from "../firebase.config";

function FirebaseSDKProviders({ children }) {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  if (process.env.NODE_ENV !== "production") {
    // Set up emulators
    connectAuthEmulator(auth, "http://localhost:9099");
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
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
