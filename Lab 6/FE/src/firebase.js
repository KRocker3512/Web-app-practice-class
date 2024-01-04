

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCebILJWt7M3LtJLjHNuEUMY_I9gvKQQSY",
  authDomain: "webapppractiselab6.firebaseapp.com",
  projectId: "webapppractiselab6",
  storageBucket: "webapppractiselab6.appspot.com",
  messagingSenderId: "203096143167",
  appId: "1:203096143167:web:683be99868acf07ecc0f8a",
  measurementId: "G-148DZEPKG6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
  
export {db, auth, storage}