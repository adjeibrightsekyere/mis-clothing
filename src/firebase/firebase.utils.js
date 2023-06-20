import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCtGjgTYZgGn6JPu1e19RENYT5CRdcH8to",
    authDomain: "mis-clothing-db.firebaseapp.com",
    projectId: "mis-clothing-db",
    storageBucket: "mis-clothing-db.appspot.com",
    messagingSenderId: "661944466265",
    appId: "1:661944466265:web:637c79be17888ecc22ea48",
    measurementId: "G-1JJSHSGN2J"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;