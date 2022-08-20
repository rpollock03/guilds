import "../styles/globals.css";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBi0OXLsAvPEXqgMLYvKox2UC8qa34cO-k",
  authDomain: "asoltd-guilds.firebaseapp.com",
  projectId: "asoltd-guilds",
  storageBucket: "asoltd-guilds.appspot.com",
  messagingSenderId: "808202803134",
  appId: "1:808202803134:web:cc91ec3a36b7286e36cbef",
  measurementId: "G-B4H1DTT7Y6",
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />;
    </FirebaseAppProvider>
  );
}

export default MyApp;
