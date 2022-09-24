import { getAuth, connectAuthEmulator } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import {
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from "reactfire"
import { firebaseConfig } from "../firebase.config"
import { connectStorageEmulator, getStorage } from "firebase/storage"

import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../theme"
import "../theme/globals.css"

function FirebaseSDKProviders({ children }) {
  const app = useFirebaseApp()
  const auth = getAuth(app)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  if (process.env.NODE_ENV !== "production") {
    if (process.env.USE_EMULATORS) {
      connectAuthEmulator(auth, "http://localhost:9099")
      connectStorageEmulator(storage, "localhost", 9199)
      connectFirestoreEmulator(firestore, "localhost", 8080)
    }
  }

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>
        <StorageProvider sdk={storage}>{children}</StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKProviders>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />;
        </ThemeProvider>
      </FirebaseSDKProviders>
    </FirebaseAppProvider>
  )
}

export default MyApp
