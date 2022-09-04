import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { useAuth } from "reactfire"

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
}

export default function SignIn() {
  const auth = useAuth()
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
}
