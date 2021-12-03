import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyClssBDjq-IUCGQy94lhmuUOAcSOtoCXFY",
    authDomain: "crwn-db-6ce09.firebaseapp.com",
    projectId: "crwn-db-6ce09",
    storageBucket: "crwn-db-6ce09.appspot.com",
    messagingSenderId: "882387512891",
    appId: "1:882387512891:web:d4b53c32e4530b38e4f61e",
    measurementId: "G-56G9XMMTS0"
};

export const createUserProfileDocument = async function(userAuth, additionalData) {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,email,createdAt,...additionalData
            })
        } catch(e) {
            console.error(e);
        }
    }

    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;