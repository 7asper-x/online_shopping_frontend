import * as firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXA2zik40xiRkhBKd0aD5Jj0WoAhYCys",
  authDomain: "best-seller-6a8fd.firebaseapp.com",
  projectId: "best-seller-6a8fd",
  storageBucket: "best-seller-6a8fd.appspot.com",
  messagingSenderId: "614056912406",
  appId: "1:614056912406:web:a14e985ff99c315987f737",
  measurementId: "G-8TEQT57B8C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



