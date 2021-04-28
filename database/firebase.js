import firebase from "firebase";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyAJiT-CYJFb4MrXzSh7mJNLj_DLii6fcEw",
    authDomain: "expapp-604ae.firebaseapp.com",
    projectId: "expapp-604ae",
    storageBucket: "expapp-604ae.appspot.com",
    messagingSenderId: "920719271776",
    appId: "1:920719271776:web:057515ff1c1cf870be2005",
    measurementId: "G-C4EB07CF8G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

const db = firebase.firestore();

export default {
  firebase,
  db
};