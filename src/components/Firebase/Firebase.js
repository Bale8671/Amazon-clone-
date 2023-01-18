
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFYFMmfDzyudtIhpj0IW3PqobndJM5Mz4",
  authDomain: "clone-d4d94.firebaseapp.com",
  projectId: "clone-d4d94",
  storageBucket: "clone-d4d94.appspot.com",
  messagingSenderId: "1122595931",
  appId: "1:1122595931:web:57b8f4cec6faae5a5dfb7e",
  measurementId: "G-LS4EFEC298"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
  
export {db, auth};