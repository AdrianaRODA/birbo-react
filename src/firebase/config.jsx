// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrVRov_delbP2zCn2EX2ilbNflmJSg0yM",
  authDomain: "birbo-react.firebaseapp.com",
  projectId: "birbo-react",
  storageBucket: "birbo-react.appspot.com",
  messagingSenderId: "181638901968",
  appId: "1:181638901968:web:12eb409bf9f306db54aed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)