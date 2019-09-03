import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwPeUnBiaytGz64Uo_cRhtQQv9O7U0DyA",
    authDomain: "clothing-store-react.firebaseapp.com",
    databaseURL: "https://clothing-store-react.firebaseio.com",
    projectId: "clothing-store-react",
    storageBucket: "",
    messagingSenderId: "1069176602981",
    appId: "1:1069176602981:web:54b3c86faf723c42"
} 

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;