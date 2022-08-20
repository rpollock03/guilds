import "../styles/globals.css";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";

export const firebaseConfig = {
  apiKey: "AIzaSyBi0OXLsAvPEXqgMLYvKox2UC8qa34cO-k",
  authDomain: "asoltd-guilds.firebaseapp.com",
  projectId: "asoltd-guilds",
  storageBucket: "asoltd-guilds.appspot.com",
  messagingSenderId: "808202803134",
  appId: "1:808202803134:web:cc91ec3a36b7286e36cbef",
  measurementId: "G-B4H1DTT7Y6",
};

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
