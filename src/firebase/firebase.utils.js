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

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

    
  
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;