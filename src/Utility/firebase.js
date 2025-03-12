
import firebase from "firebase/compat/app";
//authontication
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjPIBNcIiWyj5GCDOs6FcP0OinStudPQ0",
  authDomain: "clone-15447.firebaseapp.com",
  projectId: "clone-15447",
  storageBucket: "clone-15447.firebasestorage.app",
  messagingSenderId: "310193523615",
  appId: "1:310193523615:web:2cf09e8baaa0f6ceadcbaa",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = app.firestore()
