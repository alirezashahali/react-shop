import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAZ5IIFKl6AE7IF-G6obASA8NU44NtWy5o",
    authDomain: "crown-db-56423.firebaseapp.com",
    databaseURL: "https://crown-db-56423.firebaseio.com",
    projectId: "crown-db-56423",
    storageBucket: "crown-db-56423.appspot.com",
    messagingSenderId: "628432348782",
    appId: "1:628432348782:web:3648d655bc351250e2a87f",
    measurementId: "G-XSLW5GF7X6",
};

firebase.initializeApp(config);

let db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true })

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // console.log(userAuth)
    const userRef = db.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (err) {
            console.log('error creating user', err)
        }
    }

    return userRef
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;