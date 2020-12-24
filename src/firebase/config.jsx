import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-RiBFav-GyWm4S7rSxn5gR5dnXrChB4g",
    authDomain: "test-habitforce.firebaseapp.com",
    projectId: "test-habitforce",
    storageBucket: "test-habitforce.appspot.com",
    messagingSenderId: "541633044050",
    appId: "1:541633044050:web:b2ee21b9ef911bcff4c98b",
    measurementId: "G-FLT33D1T0N"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup( provider );   

export default firebase;