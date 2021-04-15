import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB79SCj8reuOlPXf23D4lCqd8lJ_GmTOEo",
    authDomain: "agenda-itla.firebaseapp.com",
    projectId: "agenda-itla",
    storageBucket: "agenda-itla.appspot.com",
    messagingSenderId: "180764554754",
    appId: "1:180764554754:web:a9550ec82b74832294591b"
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
