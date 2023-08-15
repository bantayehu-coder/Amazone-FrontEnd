// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk4E8IVJOGHOWA4D2j-UsKqggXVagzn3g",
  authDomain: "e-clone-c3eef.firebaseapp.com",
  projectId: "e-clone-c3eef",
  storageBucket: "e-clone-c3eef.appspot.com",
  messagingSenderId: "7157746464",
  appId: "1:7157746464:web:80b893d0fc670aad89e545",
  measurementId: "G-Z1FZQ5WPL6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };


