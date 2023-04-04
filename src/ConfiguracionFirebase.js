import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDR0fy5yIn9hLSOoEbqX-q3hr4zMAU9A8M",
  authDomain: "agenda-react-54e54.firebaseapp.com",
  projectId: "agenda-react-54e54",
  storageBucket: "agenda-react-54e54.appspot.com",
  messagingSenderId: "462751414534",
  appId: "1:462751414534:web:225998911f77a38e9a4687"
   
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
