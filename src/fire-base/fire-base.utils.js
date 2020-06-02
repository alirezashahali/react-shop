import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAZ5IIFKl6AE7IF-G6obASA8NU44NtWy5o",
    authDomain: "crown-db-56423.firebaseapp.com",
    databaseURL: "https://crown-db-56423.firebaseio.com",
    projectId: "crown-db-56423",
    storageBucket: "crown-db-56423.appspot.com",
    messagingSenderId: "628432348782",
    appId: "1:628432348782:web:3648d655bc351250e2a87f",
    measurementId: "G-XSLW5GF7X6"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase