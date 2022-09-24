"use strict";
exports.__esModule = true;
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var reactfire_1 = require("reactfire");
var firebase_config_1 = require("../firebase.config");
var storage_1 = require("firebase/storage");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var theme_1 = require("../theme");
function FirebaseSDKProviders(_a) {
    var children = _a.children;
    var app = (0, reactfire_1.useFirebaseApp)();
    var auth = (0, auth_1.getAuth)(app);
    var firestore = (0, firestore_1.getFirestore)(app);
    var storage = (0, storage_1.getStorage)(app);
    if (process.env.NODE_ENV !== "production") {
        if (process.env.USE_EMULATORS) {
            (0, auth_1.connectAuthEmulator)(auth, "http://localhost:9099");
            (0, storage_1.connectStorageEmulator)(storage, "localhost", 9199);
            (0, firestore_1.connectFirestoreEmulator)(firestore, "localhost", 8080);
        }
    }
    return (<reactfire_1.AuthProvider sdk={auth}>
      <reactfire_1.FirestoreProvider sdk={firestore}>
        <reactfire_1.StorageProvider sdk={storage}>{children}</reactfire_1.StorageProvider>
      </reactfire_1.FirestoreProvider>
    </reactfire_1.AuthProvider>);
}
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<reactfire_1.FirebaseAppProvider firebaseConfig={firebase_config_1.firebaseConfig}>
      <FirebaseSDKProviders>
        <styles_1.ThemeProvider theme={theme_1.theme}>
          <material_1.CssBaseline />
          <Component {...pageProps}/>;
        </styles_1.ThemeProvider>
      </FirebaseSDKProviders>
    </reactfire_1.FirebaseAppProvider>);
}
exports["default"] = MyApp;
